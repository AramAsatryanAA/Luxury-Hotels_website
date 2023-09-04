import { configureStore } from "@reduxjs/toolkit";

import homeItemsSectionSlice from "./homeItemsSection-slice";
import testimonialsSlice from "./testimonials-slice";
import facilitiesItemsSectionSlice from "./facilitiesItemsSection-slice";
import roomsItemsSectionSlice from "./roomsItemsSection-slice";

const store = configureStore({
  reducer: {
    homeItemsSection: homeItemsSectionSlice.reducer,
    testimonials: testimonialsSlice.reducer,
    facilitiesItemsSection: facilitiesItemsSectionSlice.reducer,
    roomsItemsSection: roomsItemsSectionSlice.reducer,
  },
});

export const idOfSectionToScroll = "section-to-scroll";

export default store;
