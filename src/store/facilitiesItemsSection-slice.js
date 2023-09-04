import { createSlice } from "@reduxjs/toolkit";

import imgGym from "@@/facilities_page/facilities_gym.jpg";
import imgPoolsideBar from "@@/facilities_page/facilities_poolside-bar.jpg";
import imgSpa from "@@/facilities_page/facilities_spa.jpg";
import imgSwimmingPool from "@@/facilities_page/facilities_swimming-pool.jpg";
import imgRestaurant from "@@/facilities_page/facilities_restaurant.jpg";
import imgLaundry from "@@/facilities_page/facilities_laundry.jpg";

const facilitiesItemsSectionSlice = createSlice({
  name: "facilitiesPageContent",
  initialState: {
    facilities: [
      {
        id: "gym",
        title: "The gym",
        image: imgGym,
      },
      {
        id: "poolside-bar",
        title: "Poolside bar",
        image: imgPoolsideBar,
      },
      {
        id: "spa",
        title: "The spa",
        image: imgSpa,
      },
      {
        id: "swimming-pool",
        title: "Swimming pool",
        image: imgSwimmingPool,
      },
      {
        id: "restaurant",
        title: "Restaurant",
        image: imgRestaurant,
      },
      {
        id: "laundry",
        title: "Laundry",
        image: imgLaundry,
      },
    ],
  },
  reducers: {},
});

export default facilitiesItemsSectionSlice;
