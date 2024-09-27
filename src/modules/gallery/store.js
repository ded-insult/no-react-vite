import { createReducer } from "../../utils/create-reducer";
import { galleryData } from "./constants";

const data = galleryData;

const initialState = {
  gallery: data,
  //   позиция активного слайда
  position: 1,
};

export const galleryActions = {};

const actions = {};

export const galleryReducer = createReducer(initialState, actions);
