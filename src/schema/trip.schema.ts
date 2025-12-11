// src/schema/trip.schema.ts
import { z } from "zod";

export const tripSchema = z.object({
  creatorID: z.string().min(1, "creatorID es obligatorio"),
  title: z.string().min(1, "Title cannot be empty"),
  country: z.string().min(1, "Country cannot be empty"),
  cities: z
    .array(z.string().min(1, "City name cannot be empty"))
    .min(1, "At least one city is required"),
  duration: z.number().min(1, "Duration must be at least 1 day"),
  adventureLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
  price: z.number().min(0, "Price cannot be negative"),
  notes: z.string().optional(),
});
