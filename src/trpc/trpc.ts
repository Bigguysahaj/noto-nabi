import { initTRPC } from '@trpc/server';
 

const t = initTRPC.create();

export const router = t.router;

// publicProcedure creates api endpoint, anyone whether authenticated or not, can call
export const publicProcedure = t.procedure;