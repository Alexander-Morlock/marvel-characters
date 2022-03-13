import React from "react";
import { Character } from "../../types";
import Avatar from "../avatar";

interface Props {
  character?: Character;
}

const CharacterBriefCard: React.FC<Props> = ({ character }) =>
  character ? (
    <>
      <div className="flex gap-2">
        <Avatar character={character} />
        <p className="text-xl md:text-2xl mt-1 font-thin">{character.name}</p>
      </div>
      {character.description && (
        <p
          className="font-thin mt-1"
          dangerouslySetInnerHTML={{
            __html: character.description,
          }}
        />
      )}
    </>
  ) : (
    <></>
  );

export default CharacterBriefCard;
