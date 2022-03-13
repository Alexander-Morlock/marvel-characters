import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types";

interface State {
  privateKey: string;
  publicKey: string;
  isLoading: boolean;
  isError: boolean;
  isFetchingDisabled: boolean;
  characters?: Array<Character>;
  total: number;
  offset: number;
}

const initialState: State = {
  privateKey: "",
  publicKey: "",
  isLoading: false,
  isError: false,
  isFetchingDisabled: false,
  characters: undefined,
  total: 0,
  offset: 0,
};

export const rootSlice = createSlice({
  name: "Root slice",
  initialState,
  reducers: {
    setKeys: (
      state,
      action: PayloadAction<{ privateKey: string; publicKey: string }>
    ) => ({
      ...state,
      privateKey: action.payload.privateKey,
      publicKey: action.payload.publicKey,
    }),
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
    setIsError: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isError: action.payload,
    }),
    setIsFetchingDisabled: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isFetchingDisabled: action.payload,
    }),
    setTotal: (state, action: PayloadAction<number>) => ({
      ...state,
      total: action.payload,
    }),
    setOffset: (state, action: PayloadAction<number>) => ({
      ...state,
      offset: action.payload,
    }),
    setCharacters: (state, action: PayloadAction<Array<Character>>) => {
      return {
        ...state,
        characters: action.payload,
      };
    },
  },
});

export const {
  setKeys,
  setIsLoading,
  setIsError,
  setCharacters,
  setTotal,
  setOffset,
  setIsFetchingDisabled,
} = rootSlice.actions;

export default rootSlice.reducer;
