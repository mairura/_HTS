import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* Page Search */}
      <PageSearch />
      {/* Featured Room */}
      {/* Gallery */}
      <Gallery />
      {/* News Letter Section */}
      <NewsLetter />
    </>
  );
};

export default Home;
