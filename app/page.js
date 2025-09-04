"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import MainHeader from "./components/MainHeader.js";
import Hero from "./components/Hero";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);
  useEffect(() => {
    user && CheckUser();
  }, [user]);
  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress.emailAddress,
      imgURL: user?.imageUrl,
      userName: user?.fullName,
    });
    console.log(result);
  };

  return (
    <div className="">
      <div>

   
     <MainHeader/>
      </div>
      <Hero/>
    </div>
  );
}
