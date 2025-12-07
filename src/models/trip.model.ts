// Modelo trip
export interface Trip {
    id: string;
    creatorID: string;
    title: string;
    country: string;
    cities: string[];
    duration: number;
    adventureLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    price : number;
    notes?: string;
};