import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], 
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload); 
    },
    editCategory: (state, action) => {
      const { id, updatedCategory } = action.payload;
      const index = state.categories.findIndex((category) => category.id === id);

      if (index !== -1) {
        state.categories[index] = { ...state.categories[index], ...updatedCategory };
      }
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      state.categories = state.categories.filter((category) => category.id !== id);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
