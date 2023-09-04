import { createSlice } from "@reduxjs/toolkit";

import imgItem1 from "@@/home_page/home_item-1.jpg";
import imgItem2 from "@@/home_page/home_item-2.jpg";

const homeItemsSectionSlice = createSlice({
  name: "homeItemsSection",
  initialState: {
    items: [
      {
        id: "item-1",
        title: "Redefining Luxury",
        description:
          "Our rooms are designed to take you to an environment made for relaxation. Take a break from everyday home life and find a private paradise for yourself...",
        button: "Explore",
        image: imgItem1,
      },
      {
        id: "item-2",
        title: "Leave your worries in the sand",
        description:
          "We love beach life. Proximity to the ocean and access to an endless sandy beach ensures a relaxed state. Time seems to have stopped watching the ocean...",
        button: "Explore",
        image: imgItem2,
      },
    ],
  },
  reducers: {},
});

export default homeItemsSectionSlice;
