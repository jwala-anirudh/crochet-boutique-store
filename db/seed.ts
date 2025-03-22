import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const primsa = new PrismaClient();
  await primsa.product.deleteMany();

  await primsa.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully!");
}

main();
