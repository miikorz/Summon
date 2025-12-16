import mongoose, { Schema } from 'mongoose';
import { Game } from '@summon/types';

const GameSchema = new Schema<Game>({
  hostId: { type: String, required: true }, // Referencia simple por ahora
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['RPG', 'WARGAME', 'BOARDGAME', 'TCG'], 
    required: true 
  },
  date: { type: Date, required: true },
  maxSlots: { type: Number, required: true },
  filledSlots: { type: Number, default: 0 },
  
  // Estructura para GeoJSON y Privacidad
  location: {
    city: { type: String, required: true },
    neighborhood: String,
    // GeoJSON estándar: { type: "Point", coordinates: [lng, lat] }
    coordinates: { 
      type: [Number], 
      required: true, 
      index: '2dsphere' // <--- IMPORTANTE PARA BÚSQUEDAS
    },
    address: String, // Privado
    googleMapsLink: String // Privado
  },

  disclaimers: [String],
  whatsappLink: String, // Privado
  createdAt: { type: Date, default: Date.now }
});

export const GameModel = mongoose.model<Game>('Game', GameSchema);