import React from "react";
import { Link } from "react-router-dom";
import { Character } from "../../types";
import CharacterBriefCard from "../character-brief-card";

interface Props {
  characters: Array<Character>;
}

const CharacterList: React.FC<Props> = ({ characters }) => (
  <ul className="grid gap-5 grid-cols-1 lg:grid-cols-2">
    {characters.map((character) => (
      <li
        key={character.id}
        className="p-3 border rounded-lg cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-white"
      >
        <Link to={`/${character.id}`}>
          <CharacterBriefCard character={character} />
        </Link>
      </li>
    ))}
  </ul>
);

export default CharacterList;
