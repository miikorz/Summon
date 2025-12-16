import axios from 'axios';

// 🚨 CAMBIA ESTO por tu IP local de verdad (ej: 192.168.1.35)
// Si usas SOLO Emulador Android, puedes usar 'http://10.0.2.2:3000'
const API_URL = 'http://localhost:3000/api'; 

export const api = axios.create({
  baseURL: API_URL,
});

// Tipado fuerte usando el paquete compartido
import { Game } from '@summon/types';

export const getGames = async (): Promise<Game[]> => {
  const { data } = await api.get<Game[]>('/games');
  return data;
};