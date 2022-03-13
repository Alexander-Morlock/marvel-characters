import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Container from "../container";
import { useParams } from "react-router-dom";
import BackArrowButton from "../back-arrow-button";
import Avatar from "../avatar";
import ItemsList from "./items-list";
import { Character, CharacterResponse } from "../../types";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsError,
  setIsFetchingDisabled,
  setIsLoading,
} from "../../store/reducer";
import { getKeysFromLocalStorage } from "../../utils/local-storage";
import { getFetchUrl } from "../../utils/get-fetch-url";

interface Props {
  character?: Character;
}

const CharacterPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  const [responseStatus, setResponseStatus] = useState("");

  const { isLoading, isError, characters } = useAppSelector(
    (state) => state.rootReducer
  );

  const { id } = useParams();

  const [character, setCharacter] = useState(
    id ? characters?.find((c) => c.id === +id) : undefined
  );

  const { privateKey, publicKey } = getKeysFromLocalStorage();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setIsFetchingDisabled(true));

    if (character || !privateKey || !publicKey) {
      return;
    }

    dispatch(setIsLoading(true));

    fetch(
      getFetchUrl({
        url: `http://gateway.marvel.com/v1/public/characters/${id}`,
        privateKey,
        publicKey,
      })
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(setIsLoading(false));
        const response = res as CharacterResponse;
        setResponseStatus(response.status);
        setCharacter(response.data.results[0]);
      })
      .catch(() => {
        dispatch(setIsError(true));
        dispatch(setIsLoading(false));
      });
  }, []);

  return (
    <>
      <Header leftComponent={<BackArrowButton />} />
      <Container>
        {character && (
          <>
            <Avatar
              character={character}
              className="w-40 h-40 md:w-60 md:h-60 mx-auto"
            />
            <p className="text-xl font-bold uppercase text-white bg-red-500 p-2 text-center md:text-2xl mt-3">
              {character.name}
            </p>
            {character.description && (
              <p
                className="font-thin mt-2"
                dangerouslySetInnerHTML={{
                  __html: character.description,
                }}
              />
            )}
            <div className="lg:flex flex-wrap gap-8 mt-8">
              <ItemsList name="Comics" items={character.comics.items} />
              <ItemsList name="Stories" items={character.stories.items} />
              <ItemsList name="Events" items={character.events.items} />
              <ItemsList name="Series" items={character.series.items} />
            </div>
          </>
        )}
        {isLoading && <Spinner className="mx-auto" />}
        {isError && (
          <p className="text-red-500 text-center">Error. {responseStatus}</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CharacterPage;
