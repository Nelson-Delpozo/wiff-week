import { prisma } from "~/db.server";

// Create a new email
export async function createEmail(body: string) {
  try {
    return await prisma.email.create({
      data: {
        body,
      },
    });
  } catch (error) {
    throw new Error(`Failed to create email: ${error}`);
  }
}

// Retrieve an email by ID
export async function getEmailById(id: string) {
  try {
    return await prisma.email.findUnique({
      where: { id },
    });
  } catch (error) {
    throw new Error(`Failed to retrieve email: ${error}`);
  }
}

// Retrieve all emails
export async function getAllEmails() {
  try {
    return await prisma.email.findMany();
  } catch (error) {
    throw new Error(`Failed to retrieve emails: ${error}`);
  }
}

// Update an email by ID
export async function updateEmail(id: string, newBody: string) {
  try {
    return await prisma.email.update({
      where: { id },
      data: { body: newBody },
    });
  } catch (error) {
    throw new Error(`Failed to update email: ${error}`);
  }
}

// Delete an email by ID
export async function deleteEmail(id: string) {
  try {
    return await prisma.email.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error(`Failed to delete email: ${error}`);
  }
}
