import CohortSlice from "@/slice/CohortSlice";
import imageSlice from "@/slice/imageSlice";
import programSlice from "@/slice/programSlice";
import { configureStore } from "@reduxjs/toolkit";



const Store = configureStore({
    reducer:{
        cohortData: CohortSlice,
        programs: programSlice,
        imageUrl:imageSlice,
    }
})
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
