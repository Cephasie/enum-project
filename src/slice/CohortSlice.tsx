import { AllProgramsApi } from "@/fetchData/AllPrograms";
import { CreateCohortApi } from "@/fetchData/CreateCohortApiFetch";
import { createSlice } from "@reduxjs/toolkit";

interface cohortState {
  cohortData:cohortObject[];
}

interface cohortObject {
    cohortName: string;
    description: string;
    startDate: Date;
    endDate: Date; 
    programName: string;
    imageUrl:string;
   
}

const initialState: cohortState = {
  cohortData: [],
  
}

const CohortSlice = createSlice({
  name: "cohortData",
  initialState,
  reducers: {
    createCohort: (state: { cohortData: any; }, action: { payload: any; }) => {
      state.cohortData.push(action.payload);
      console.log(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateCohortApi.fulfilled, (state, action) => {
        state.cohortData.push(action.payload);
        console.log('paylaod to back-->',action.payload)
      })     
  },
},
);

export const {createCohort} = CohortSlice.actions;
export default CohortSlice.reducer;

