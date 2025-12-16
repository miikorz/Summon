import { FastifyRequest, FastifyReply } from 'fastify';

// Extendemos el tipo de Request para incluir el usuario
declare module 'fastify' {
  interface FastifyRequest {
    user: { id: string; username: string };
  }
}

export async function mockAuthMiddleware(request: FastifyRequest, reply: FastifyReply) {
  // SIMULAMOS que el usuario ya se logueó
  request.user = {
    id: 'user_123_test_id',
    username: 'SeniorDev'
  };
}