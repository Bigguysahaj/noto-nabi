"use client"
import { PropsWithChildren, useState } from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/app/_trpc/client";

// using PropsWithChildren to allow for nested components, only using children in component you can is this
// and all errors are gone

const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: "http://localhost:3000/api/trpc",
            }),
        ],
    })
    )
    return (
        <trpc.Provider 
            client = {trpcClient} 
            queryClient={queryClient}>
            {/* trpc is typesafe wrapper around react-query, but if we wanna use
            react-query without trpc, we use <QueryClienProvider> */}
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>           
        </trpc.Provider>
    )
}

export default Providers;