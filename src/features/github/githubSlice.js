import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_GITHUB_API;

export const fetchGitHubUser = createAsyncThunk(
  "github/fetchUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${username}`);
      if (!response.ok) {
        return rejectWithValue("User not found");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const githubSlice = createSlice({
  name: "githubSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchGitHubUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchGitHubUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default githubSlice.reducer;
