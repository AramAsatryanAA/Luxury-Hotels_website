import { createSlice } from "@reduxjs/toolkit";

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    testimonials: [
      {
        id: "test-1",
        title: "Calm, Serene, Retro - What a way to relax and enjoy",
        author: "Mr. and Mrs. Baxter, UK",
      },
      {
        id: "test-2",
        title:
          "Calme, serein, rétro - Quelle façon de se détendre et de profiter",
        author: "Mr. and Mrs. Toussaint., France",
      },
      {
        id: "test-3",
        title:
          "Everything was great at this hotel.. amazing staff that is friendly and makes customers feel welcome",
        author: "Mr. and Mrs. Brown, Canada",
      },
      {
        id: "test-4",
        title:
          "Hotel exceeded my expectations was spotless the staff was amazing and the most comfortable bed I have ever slept in",
        author: "Mr. and Mrs. Williams, Australia",
      },
      {
        id: "test-5",
        title: "Excellent property and very convenient to USC activities",
        author: "Mr. and Mrs. Smith, US",
      },
    ],
    itemToShow: {
      id: "test-1",
      title: "Calm, Serene, Retro - What a way to relax and enjoy",
      author: "Mr. and Mrs. Baxter, UK",
    },
  },
  reducers: {
    showNextItem(state) {
      let nextItemIndex =
        state.testimonials.findIndex(
          (item) => item.id === state.itemToShow.id
        ) + 1;

      if (nextItemIndex === state.testimonials.length - 1) nextItemIndex = 0;

      const nextItem = state.testimonials[nextItemIndex];

      state.itemToShow = { ...nextItem };
    },

    showPreviousItem(state) {
      let previousItemIndex =
        state.testimonials.findIndex(
          (item) => item.id === state.itemToShow.id
        ) - 1;

      if (previousItemIndex < 0)
        previousItemIndex = state.testimonials.length - 1;

      const previousItem = state.testimonials[previousItemIndex];

      state.itemToShow = { ...previousItem };
    },
  },
});

export const testimonialsActions = testimonialsSlice.actions;

export default testimonialsSlice;
