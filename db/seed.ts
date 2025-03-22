import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const primsa = new PrismaClient();

  await primsa.product.deleteMany();
  await primsa.account.deleteMany();
  await primsa.session.deleteMany();
  await primsa.verificationToken.deleteMany();
  await primsa.user.deleteMany();

  await primsa.product.createMany({ data: sampleData.products });
  await primsa.user.createMany({ data: sampleData.users });

  console.log("Database seeded successfully!");
}

main();
