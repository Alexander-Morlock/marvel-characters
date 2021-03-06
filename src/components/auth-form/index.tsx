import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { setKeys } from "../../store/reducer";
import cx from "classnames";

const PRIVATE_KEY = "ebb6f2f2eb1e9d6ff9357b3cff8fb13541a55332";
const PUBLIC_KEY = "ef7ae587dc884097a907f7d07d6c25b2";

const AuthForm: React.FC = () => {
  const [privateKeyValue, setPrivateKeyValue] = useState(PRIVATE_KEY);
  const [publicKeyValue, setPublicKeyValue] = useState(PUBLIC_KEY);

  const isSubmitDisabled = !publicKeyValue || !privateKeyValue;

  const dispatch = useAppDispatch();

  return (
    <form
      className="flex flex-col gap-4 p-5 border rounded-xl mx-auto max-w-xl lg:mb-6"
      onSubmit={() => {
        dispatch(
          setKeys({ privateKey: privateKeyValue, publicKey: publicKeyValue })
        );

        setPrivateKeyValue("");
        setPublicKeyValue("");
      }}
    >
      <input
        type="text"
        className="border p-2 rounded-lg"
        placeholder="Enter your Marvell private key..."
        onChange={(evt) => setPrivateKeyValue(evt.target.value)}
        value={privateKeyValue}
      />
      <input
        type="text"
        placeholder="Enter your Marvell public key..."
        className="border p-2 rounded-lg"
        onChange={(evt) => setPublicKeyValue(evt.target.value)}
        value={publicKeyValue}
      />
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={cx(
          "bg-gray-200 p-2 rounded-lg transition-all",
          {
            "hover:bg-gray-700 hover:text-white": !isSubmitDisabled,
          },
          { "text-gray-400": isSubmitDisabled }
        )}
      >
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
