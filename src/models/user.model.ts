export interface User {
    id: string;
    name: string;
    email: string;
    country: string;
    interests: string[];
    budget: number; // €
    adventureLevel: 'Beginner' | 'Intermediate' | 'Advanced';
}
