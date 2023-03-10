import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async() => { 
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
);

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoading: false,
    },
   extraReducers: {
    [getPhotos.pending]: (state) => {
        state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
        state.isLoading = false;
    }
   }
});

export default gallerySlice.reducer;