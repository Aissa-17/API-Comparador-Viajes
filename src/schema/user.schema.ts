// src/schema/user.schema.ts
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country cannot be empty"),
  interests: z
    .array(z.string().min(1, "Interest cannot be empty"))
    .min(1, "At least one interest is required"),
  budget: z.number().min(0, "Budget cannot be negative"),
  adventureLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
});
