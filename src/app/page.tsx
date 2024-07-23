import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <div>NextJS-TRPC-PRISMA-NEXT_AUTH-BOILERPLATE</div>
      </main>
    </HydrateClient>
  );
}
