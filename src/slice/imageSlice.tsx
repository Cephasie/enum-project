import { createSlice } from "@reduxjs/toolkit";



interface intialState {
imageUrl:string 
}

const initialState: intialState = {
 imageUrl:""
}

const ImageSlice = createSlice({
  name: "imageUrl",
  initialState,
  reducers: {
    addImage: (state, action) => {
        state.imageUrl = action.payload;
      }
  }
},
);

export const {addImage} = ImageSlice.actions;
export default ImageSlice.reducer;

