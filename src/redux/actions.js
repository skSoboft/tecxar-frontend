// actions.js

import { createAction } from "@reduxjs/toolkit";

// User Actions
export const setUser = createAction("user/setUser");
export const clearUser = createAction("user/clearUser");

// Category Actions
export const addCategory = createAction("category/addCategory");
export const editCategory = createAction("category/editCategory");
export const deleteCategory = createAction("category/deleteCategory");

// Product Actions
export const addProduct = createAction("product/addProduct");
export const editProduct = createAction("product/editProduct");
export const deleteProduct = createAction("product/deleteProduct");
