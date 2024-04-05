import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateCohortUrl } from "@/assets/urls/urls";

export const CreateCohortApi = createAsyncThunk(
  "cohortData/CreateCohortApi",
  async (cohortData) => {
      console.log(cohortData);
    try {
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
        const response = await axios.post(CreateCohortUrl,  cohortData, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`
          }
      });
        console.log("cohort created --->", cohortData);
        console.log("response g--->", response)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);