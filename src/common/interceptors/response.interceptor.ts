import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({ success: true, data })),
      catchError((err) => {
        const statusCode = err instanceof HttpException ? err.getStatus() : 500;
        const responseMessageArray = err.response?.message;
        const messages =
          responseMessageArray && Array.isArray(responseMessageArray)
            ? responseMessageArray
            : [err.message];
        const errorResponse = {
          success: false,
          statusCode,
          messages,
        };
        return throwError(() => new HttpException(errorResponse, statusCode));
      }),
    );
  }
}
