import md5 from "md5";

interface Props {
  url: string;
  privateKey: string;
  publicKey: string;
  offset?: number;
  limit?: number;
}

export const getFetchUrl = ({
  url,
  privateKey,
  publicKey,
  offset,
  limit,
}: Props) => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  return `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}${
    offset ? `&offset=${offset}` : ""
  }${limit ? `&limit=${limit}` : ""}`;
};
