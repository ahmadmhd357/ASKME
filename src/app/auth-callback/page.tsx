"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import React from "react";
import { Loader2 } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const query = trpc.authCallback.useQuery(undefined);

  React.useEffect(() => {
    if (query.data) {
      router.push(origin ? `/${origin}` : "/dashboard");
    }
    if (query.error?.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in");
    }
  }, [query.data]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-900" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>you will be redirected automatically. </p>
      </div>
    </div>
  );
};

export default Page;
