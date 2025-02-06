import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();

  // Delete all existing data
  await prisma.product.deleteMany();

  // Insert sample data
  await prisma.product.createMany({ data: sampleData.products });

  console.log('Database Seeded successfully');
}

main();
