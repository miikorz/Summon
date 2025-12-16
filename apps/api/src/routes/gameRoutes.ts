import { FastifyInstance } from 'fastify';
import { GameModel } from '../models/Game';
import { mockAuthMiddleware } from '../middlewares/mockAuth';
import { Game } from '@summon/types';

export async function gameRoutes(fastify: FastifyInstance) {
  
  // Aplicamos el mock auth a todas las rutas de este plugin
  fastify.addHook('preHandler', mockAuthMiddleware);

  // 1. CREAR PARTIDA (POST /games)
  fastify.post<{ Body: Omit<Game, '_id' | 'hostId' | 'filledSlots' | 'createdAt'> }>('/', async (req, reply) => {
    try {
      const newGame = await GameModel.create({
        ...req.body,
        hostId: req.user.id, // Usamos el ID del mock auth
        filledSlots: 0,
        createdAt: new Date()
      });
      return reply.code(201).send(newGame);
    } catch (error) {
      req.log.error(error);
      return reply.code(500).send({ error: 'Error creating game' });
    }
  });

  // 2. LISTAR PARTIDAS (GET /games)
  fastify.get('/', async (req, reply) => {
    // Aquí implementaremos luego el $near para geolocalización
    // Por ahora devolvemos las 20 más recientes
    const games = await GameModel.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .lean(); // .lean() para rendimiento
      
    // TODO: Aquí aplicaremos la máscara de privacidad (ocultar address)
    return games;
  });
}