import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/Store";
import { CreateCohortUrl } from "@/assets/urls/urls";

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg1";

export const CreateCohortApi = createAsyncThunk(
  "cohortData/CreateCohortApi",
  async (cohortData) => {
    console.log(FormData);
    try {   
      const response = await axios.post(CreateCohortUrl, cohortData, {
        method: "POST",
        headers: { 
          "Authorization" : `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
