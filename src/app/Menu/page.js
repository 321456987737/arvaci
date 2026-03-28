import React from "react";
import MenuSection from "@/components/menu/menu";
import HeroSection from "@/components/herosection";
const Page = () => {
  return (
    <div>
      <HeroSection
        title="WELCOME TO ARVACI"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/menu/lalala.jpg"
      />
      <MenuSection />
    </div>
  );
};

export default Page;
