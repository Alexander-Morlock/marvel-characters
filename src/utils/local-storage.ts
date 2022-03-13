interface Props {
  privateKey: string;
  publicKey: string;
}

export const saveKeysToLocalStorage = ({ privateKey, publicKey }: Props) => {
  localStorage.setItem("marvel-privateKey", privateKey);
  localStorage.setItem("marvel-publicKey", publicKey);
};

export const removeKeysFromLocalStorage = () => {
  localStorage.removeItem("marvel-privateKey");
  localStorage.removeItem("marvel-publicKey");
};

export const getKeysFromLocalStorage = () => {
  const privateKey = localStorage.getItem("marvel-privateKey");
  const publicKey = localStorage.getItem("marvel-publicKey");
  return { privateKey, publicKey };
};
