"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import MainHeader from "./components/MainHeader.js";
import Hero from "./components/Hero";
import Features from "./components/Features.js";
import HowToUse from "./components/HowToUse.js";
import Reminder from "./components/Reminder.js";
import Footer from "./components/Footer.js";

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
        <MainHeader />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <HowToUse/>
      </div>
      <div>
        <Reminder/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
