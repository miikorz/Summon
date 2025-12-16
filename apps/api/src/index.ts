import Fastify from 'fastify';
import mongoose from 'mongoose';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify({ logger: true });
server.register(cors);

server.get('/ping', async () => {
  return { status: 'ok', msg: 'Summon API Ready' };
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    server.log.info('📚 MongoDB Connected via Docker');
    await server.listen({ port: Number(process.env.PORT) || 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();