import fetcher from "./fetcher";

export const auth = async (
  mode: "signup" | "login",
  body: {
    email: string;
    password: string;
    name?: string;
  }
) => {
  return fetcher(mode, body);
};
