import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.offer.createMany({
    data: [
      { name: 'Offer-1', price: 100 },
      { name: 'Offer-2', price: 200 },
      { name: 'Offer-3', price: 300 },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
