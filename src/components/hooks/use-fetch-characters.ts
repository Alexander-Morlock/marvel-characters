import { CharacterResponse } from "../../types";
import { getFetchUrl } from "../../utils/get-fetch-url";
import {
  setCharacters,
  setTotal,
  setIsError,
  setIsLoading,
} from "../../store/reducer";
import {
  saveKeysToLocalStorage,
  removeKeysFromLocalStorage,
} from "../../utils/local-storage";
import { useAppDispatch, useAppSelector } from ".";

export const useFetchCharacters = (offset = 0, limit = 50) => {
  const { privateKey, publicKey } = useAppSelector(
    (state) => state.rootReducer
  );

  const dispatch = useAppDispatch();

  const fetchCharacters = () => {
    dispatch(setIsLoading(true));

    fetch(
      getFetchUrl({
        url: "http://gateway.marvel.com/v1/public/characters",
        privateKey,
        publicKey,
        offset,
        limit,
      })
    )
      .then((res) => res.json())
      .then((res) => {
        const response = res as CharacterResponse;
        dispatch(setCharacters(response.data.results));
        dispatch(setTotal(response.data.total));
        saveKeysToLocalStorage({ privateKey, publicKey });
      })
      .catch(() => {
        dispatch(setIsError(true));
        removeKeysFromLocalStorage();
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return { fetchCharacters };
};
