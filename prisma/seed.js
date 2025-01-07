import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      { title: "Learn Next.js" },
      { title: "Setup Prisma" },
      { title: "Build To-Do App" },
      { title: "Test To-Do App" },
      { title: "Deploy To-Do App" },
      { title: "Learn JavaScript Basics" },
      { title: "Understand React Hooks" },
      { title: "Set Up Node.js Backend" },
      { title: "Create a User Authentication System" },
      { title: "Design UI for To-Do App" },
      { title: "Test User Input Validation" },
      { title: "Write Unit Tests for Components" },
      { title: "Implement Dark Mode for UI" },
      { title: "Connect App to a MySQL Database" },
      { title: "Deploy App to Vercel" }
    ],
  });
  console.log("Database seeded!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
