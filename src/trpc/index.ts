import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc'; 
import { TRPCError } from '@trpc/server';  

export const appRouter = router({
    // publicProcedure.query is for GET requests, publicProcedure.mutation is for POST requests
//   test: publicProcedure.query(() => {
//     return 'hello'
//   })

    authCallback: publicProcedure.query(() => {
        const {getUser} = getKindeServerSession();
        const user = getUser();

        if (!user.id || !user.email)
            throw new TRPCError({ code: "UNAUTHORIZED" });

        // check if user in db
        // const dbUser = await db

        return { success: true }
    })
});
 
export type AppRouter = typeof appRouter;