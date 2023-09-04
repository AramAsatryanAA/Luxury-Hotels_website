"use client";

import StoreProvider from "@/components/StoreProvider";
import TopSection from "@/components/TopSection/TopSection";
import topSectionCover from "@@/facilities_page/facilities_cover.jpg";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import FacilitiesItemsSection from "@/components/FacilitiesPage/FacilitiesItemsSection";

export default function FacilitiesPage() {
  return (
    <StoreProvider>
      <TopSection coverImage={topSectionCover} />
      <FacilitiesItemsSection />
      <TestimonialsSection />
    </StoreProvider>
  );
}
