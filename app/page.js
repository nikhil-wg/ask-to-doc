"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowToUse from "./components/HowToUse";
import Reminder from "./components/Reminder";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      createUser({
        email: user?.primaryEmailAddress.emailAddress,
        imgURL: user?.imageUrl,
        userName: user?.fullName,
      }).then((res) => console.log(res));
    }
  }, [user, createUser]);

  return (
    <div className="bg-gray-50">
      <MainHeader />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="howtouse">
        <HowToUse />
      </section>


      <section id="faq">
        <Faq />
      </section>

      <section id="reminder">
        <Reminder />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
