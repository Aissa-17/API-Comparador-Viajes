export interface User {
    id: string;
    name: string;
    country: string;
    interests: string[];
    budget: number; // €
    adventureLevel: 'Beginner' | 'Intermediate' | 'Advanced';
}
