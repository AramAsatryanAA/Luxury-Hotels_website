"use client";

import StoreProvider from "@/components/StoreProvider";
import TopSection from "@/components/TopSection/TopSection";
import topSectionCover from "@@/rooms_page/rooms_cover.jpg";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import RoomsItemsSection from "@/components/RoomsPage/RoomsItemsSection";

export default function RoomsPage() {
  return (
    <StoreProvider>
      <TopSection coverImage={topSectionCover} />
      <RoomsItemsSection />
      <TestimonialsSection />
    </StoreProvider>
  );
}
