import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";
import React from "react";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      {/* Page Search */}
      <PageSearch />
      {/* Featured Room */}
      <FeaturedRoom featuredRoom={featuredRoom} />
      {/* Gallery */}
      <Gallery />
      {/* News Letter Section */}
      <NewsLetter />
    </>
  );
};

export default Home;
