import React, { useEffect } from "react";
import CharacterList from "./characters-list";
import Container from "../container";
import Spinner from "../spinner";
import Footer from "../footer";
import Header from "../header";
import AuthForm from "../auth-form";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setKeys } from "../../store/reducer";
import { useFetchCharacters } from "../hooks/use-fetch-characters";
import Pagination from "../pagination";
import { getKeysFromLocalStorage } from "../../utils/local-storage";

const CHARACTERS_PER_PAGE = 50;

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    isLoading,
    isError,
    characters,
    privateKey,
    publicKey,
    offset,
    isFetchingDisabled,
  } = useAppSelector((state) => state.rootReducer);

  const { fetchCharacters } = useFetchCharacters(offset, CHARACTERS_PER_PAGE);

  const isCharacters = characters && characters.length > 0;
  const isKeys = privateKey.length > 0 && publicKey.length > 0;

  useEffect(() => {
    const { privateKey: prv, publicKey: pbl } = getKeysFromLocalStorage();
    if (prv && pbl) {
      dispatch(setKeys({ privateKey: prv, publicKey: pbl }));
    }
  }, []);

  useEffect(() => {
    if (!isKeys || isFetchingDisabled) {
      return;
    }
    fetchCharacters();
  }, [isKeys, offset, isFetchingDisabled]);

  return (
    <>
      <Header />
      <Container>
        {isCharacters && !isLoading && !isError && (
          <CharacterList characters={characters} />
        )}
        {isLoading && <Spinner className="mx-auto" />}
        {(!isKeys || isError) && <AuthForm />}
        {isError && (
          <p className="text-red-500 text-center">
            Network or authorization error...
          </p>
        )}
        {!isError && <Pagination limit={CHARACTERS_PER_PAGE} />}
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
