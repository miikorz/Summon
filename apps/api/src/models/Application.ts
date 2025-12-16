import mongoose, { Schema } from 'mongoose';
import { Application } from '@summon/types';

const ApplicationSchema = new Schema<Application>({
  gameId: { type: String, required: true, ref: 'Game' },
  applicantId: { type: String, required: true },
  hostId: { type: String, required: true }, // Desnormalizado para queries
  status: { 
    type: String, 
    enum: ['PENDING', 'APPROVED', 'REJECTED'], 
    default: 'PENDING' 
  },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Índice compuesto: Un usuario solo puede aplicar una vez a una partida
ApplicationSchema.index({ gameId: 1, applicantId: 1 }, { unique: true });

export const ApplicationModel = mongoose.model<Application>('Application', ApplicationSchema);