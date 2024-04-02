import { AllProgramsApi } from "@/fetchData/AllPrograms";
import { CreateCohortApi } from "@/fetchData/CreateCohortApiFetch";
import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
  programs: [],
  
}

const programSlice = createSlice({
  name: "programs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllProgramsApi.fulfilled, (state, action) => {
        state.programs=action.payload;
      }) 
       
  },
},
);

export default programSlice.reducer;

