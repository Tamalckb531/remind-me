import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
    </>
  );
}

async function WelcomeMsg() {
  const user = await currentUser();

  if (!user) {
    return <div>error</div>;
  }
  return (
    <div className=" flex w-full justify-center">
      <h1 className=" text-4xl font-bold">
        Welcome, <br /> {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className=" flex w-full justify-center">
      <h1 className=" text-4xl font-bold">
        <Skeleton className=" w-[180px] h-[36px] mb-3" />
        <Skeleton className=" w-[360px] h-[36px]" />
      </h1>
    </div>
  );
}
