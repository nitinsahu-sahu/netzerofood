"use server";
import { auth } from "@/auth";
import { getUserByEmail } from "@/functions/user";

export const currentUser = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return {
      success: false,
      message: "No user session found",
    };
  }

  const existingUser = await getUserByEmail(session.user.email);
  if (existingUser) {
    return {
      success: true,
      message: "User found",
      data: existingUser,
    };
  }

  return {
    success: false,
    message: "User not found",
  };
};
