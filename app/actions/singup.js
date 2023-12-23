"use server";
import { z } from "zod";
import { prisma } from "../db/prisma";
import { hashPassword } from "../bcrypt/password";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signOut } from "@/auth";

const SignupSchema = z.object({
  username: z.string().min(4, { message: "Username must be 4 chars long" }),
  email: z.string().email({ message: "Please enter valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be greater than or equal to 6 chars" }),
  password_confirm: z.string().min(6, {
    message: "Confirm password must be greater than or equal to 6 chars",
  }),
});

export const singnupAction = async (previousState, formData) => {
  const validatedFields = SignupSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirm: formData.get("password_confirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { username, email, password, password_confirm } = validatedFields.data;
  if (password !== password_confirm) {
    return {
      message: "Confirm password and Password are not some",
      errors: {
        password_confirm: ["Confirm password and Password are not some"],
      },
    };
  }
  const user_by_email = await prisma.user.findUnique({
    where: { email: email },
  });
  if (user_by_email) {
    return {
      errors: { email: ["Email is already taken."] },
    };
  }
  const user_by_username = await prisma.user.findUnique({
    where: { username: username },
  });
  if (user_by_username) {
    return {
      errors: { username: ["Username is already taken."] },
    };
  }
  let hashPass = await hashPassword(password);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPass,
      },
    });
    return {
      user,
      success: true,
    };
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

export const signOutAction = async () => {
  await signOut();
};
