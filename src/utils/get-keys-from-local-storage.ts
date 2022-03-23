export const getKeysFromLocalStorage = () => {
  const privateKey = localStorage.getItem("marvel-privateKey");
  const publicKey = localStorage.getItem("marvel-publicKey");
  return { privateKey, publicKey };
};
