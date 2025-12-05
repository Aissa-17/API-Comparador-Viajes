import {z} from 'zod';

export const matchSchema = z.object({
    userId: z.string({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a string",
    }).min(1, "User ID cannot be empty"),
    tripId: z.string({
        required_error: "Trip ID is required",
        invalid_type_error: "Trip ID must be a string",
    }).min(1, "Trip ID cannot be empty"),
});