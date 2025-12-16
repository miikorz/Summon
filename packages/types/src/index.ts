export type GameCategory = 'RPG' | 'WARGAME' | 'BOARDGAME' | 'TCG';
export type ApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

// --- USUARIO (Validación y Reputación según PDF) ---
export interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean; // [cite: 10]
  experience: 'Novice' | 'Intermediate' | 'Expert'; // [cite: 23]
  stats: {
    gamesPlayed: number; // [cite: 24]
    reputationScore: number; 
  };
}

// --- PARTIDA (Privacidad y Detalles) ---
export interface GameLocation {
  city: string;        
  neighborhood?: string; 
  coordinates: [number, number]; 
  // Privado (Solo visible tras aceptación [cite: 7])
  address?: string;      
  googleMapsLink?: string; 
}

export interface Game {
  _id: string;
  hostId: string;
  title: string; // [cite: 28]
  description: string;
  category: GameCategory; // [cite: 29]
  date: Date;
  maxSlots: number; // [cite: 30]
  filledSlots: number;
  location: GameLocation; // [cite: 32]
  disclaimers: string[]; // [cite: 8]
  whatsappLink?: string;
  createdAt: Date;
}

// --- SOLICITUD (Core del sistema "Apply/Accept" [cite: 5]) ---
export interface Application {
  _id: string;
  gameId: string;
  applicantId: string;
  hostId: string;
  status: ApplicationStatus;
  message?: string;
  createdAt: Date;
}