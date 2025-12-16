export type GameCategory = 'RPG' | 'WARGAME' | 'BOARDGAME' | 'TCG';
export type ApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export interface User {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean;
    experience: 'Novice' | 'Intermediate' | 'Expert';
    stats: {
        gamesPlayed: number;
        reputationScore: number;
    };
}
export interface GameLocation {
    city: string;
    neighborhood?: string;
    coordinates: [number, number];
    address?: string;
    googleMapsLink?: string;
}
export interface Game {
    _id: string;
    hostId: string;
    title: string;
    description: string;
    category: GameCategory;
    date: Date;
    maxSlots: number;
    filledSlots: number;
    location: GameLocation;
    disclaimers: string[];
    createdAt: Date;
}
export interface Application {
    _id: string;
    gameId: string;
    applicantId: string;
    hostId: string;
    status: ApplicationStatus;
    message?: string;
    createdAt: Date;
}
//# sourceMappingURL=index.d.ts.map