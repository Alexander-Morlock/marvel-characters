import React from "react";

interface Props {
  name: string;
  items?: Array<{
    name: string;
    resourceURI: string;
  }>;
}

const ItemsList: React.FC<Props> = ({ name, items }) =>
  items && items.length > 0 ? (
    <div>
      <p className="text-lg">{name}</p>
      <ol className="font-thin list-decimal pl-4 mb-4 mt-2">
        {items.map((item) => (
          <li
            key={item.resourceURI}
            className="font-thin text-gray-700 hover:text-black capitalize"
          >
            {item.name.toLowerCase()}
          </li>
        ))}
      </ol>
    </div>
  ) : (
    <></>
  );

export default ItemsList;
