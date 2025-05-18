"use server";

import type { ContactFormState } from './schemas';
import { contactFormSchema } from './schemas';

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Failed to validate form data.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send this data to your backend, email service, or CRM.
  // For this example, we'll just log it to the console.
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error (e.g. 10% chance of error)
  // if (Math.random() < 0.1) {
  //   return {
  //     message: "An unexpected error occurred. Please try again later.",
  //     status: "error",
  //   };
  // }

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    status: "success",
  };
}
