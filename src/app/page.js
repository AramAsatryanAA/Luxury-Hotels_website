"use client";

import StoreProvider from "@/components/StoreProvider";
import TopSection from "@/components/TopSection/TopSection";
import topSectionCover from "@@/home_page/home_cover.jpg";
import HomeItemsSection from "@/components/HomePage/HomeItemsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default function HomePage() {
  return (
    <StoreProvider>
      <TopSection coverImage={topSectionCover} />
      <HomeItemsSection />
      <TestimonialsSection />
    </StoreProvider>
  );
}
