import {User} from '../models/user.model';
import {Trip} from '../models/trip.model';

export function calculatorMatch(user: User, trip: Trip){
    let score = 0;

    let breakdown = {
        interests : 0,
        budget: 0,
        adventure: 0,
        duration: 0
    };


    //Intereses comunes (0-40)
    const shared = user.interests.filter(i => trip.cities.includes(i)).length;
    breakdown.interests = Math.min(shared * 10, 40);
    score += breakdown.interests;

    //Presupuesto (0-30)
    const budget = Math.abs(user.budget - trip.price);
    if (budget < 100) breakdown.budget = 30;
    else if (budget < 300) breakdown.budget = 20;
    else breakdown.budget = 10;
    score += breakdown.budget;

    //Aventura (0-20)
    const userNivel = 
        user.adventureLevel == 'Beginner' ? 3:
        user.adventureLevel == 'Intermediate' ? 6 : 10;
    const tripDifficultyLevel = 
        trip.adventureLevel == 'Beginner' ? 3: 
        trip.adventureLevel == 'Intermediate' ? 6:9;
    const difAdventure = Math.abs(userNivel - tripDifficultyLevel);
    breakdown.adventure = Math.max(0, 20-difAdventure*3)
    score += breakdown.adventure;

    // Duración (0-10)
    breakdown.duration = trip.duration <= 7 ? 10: 0;
    score += breakdown.duration;

    return {
        compatibility: score,
        breakdown
    }
}