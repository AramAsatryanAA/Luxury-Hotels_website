import { createSlice } from "@reduxjs/toolkit";

import imgRoomSingle from "@@/rooms_page/rooms_room-single.jpg";
import imgRoomDouble from "@@/rooms_page/rooms_room-double.jpg";
import imgRoomTwin from "@@/rooms_page/rooms_room-twin.jpg";

const roomsItemsSectionSlice = createSlice({
  name: "roomsPageContent",
  initialState: {
    rooms: [
      {
        id: "room-single",
        currentImageIndex: 0,
        images: [imgRoomSingle, imgRoomDouble, imgRoomTwin],
        title: "Single room",
        price: 147,
        description: "Avg/Night",
      },
      {
        id: "room-double",
        currentImageIndex: 0,
        images: [imgRoomDouble, imgRoomSingle, imgRoomTwin],
        title: "Double room",
        price: 155,
        description: "Avg/Night",
      },
      {
        id: "room-twin",
        currentImageIndex: 0,
        images: [imgRoomTwin, imgRoomSingle, imgRoomDouble],
        title: "Twin room",
        price: 155,
        description: "Avg/Night",
      },
    ],
  },
  reducers: {
    changeImage(state, action) {
      // --- The logic is to get the current item and update it's "currentImageIndex" to change image shown on the screen ...

      const currentItemId = action.payload.id.slice(0, -7);
      const currentItem = state.rooms.find((item) => item.id === currentItemId);

      const updatedCurrentImageIndex = +action.payload.id.slice(-1);

      currentItem.currentImageIndex = updatedCurrentImageIndex;
    },
  },
});

export const roomsItemsActions = roomsItemsSectionSlice.actions;

export default roomsItemsSectionSlice;
