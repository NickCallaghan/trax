import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { auth } from "../lib/mutations";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

interface Props {
  mode: "login" | "signup";
}

const Signin: React.FC<Props> = ({ mode }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await auth(mode, { email, password, name });
      setIsLoading(false);
      if (res.status === 200 || res.status === 201) {
        router.push("/");
      }
      if (res.status >= 400) {
        alert(res.statusText);
      }
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px" paddingTop="100px">
        <NextImage
          src="/logo.svg"
          height={50}
          width={120}
          alt="Trax Logo - a record player and the word Trax"
        />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <form onSubmit={handleSubmit}>
          {/* Name input should only show on signup form */}
          {mode === "signup" && (
            <FormControl marginBottom="1em">
              <Input
                id="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          )}

          <FormControl marginBottom="1em">
            <Input
              id="email"
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl marginBottom="1em">
            <Input
              id="password"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl marginBottom="1em">
            <Button
              bg="green.500"
              type="submit"
              variant="outline"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              Submit
            </Button>
          </FormControl>

          {mode === "login" && (
            <Text>
              Don&apos;t have an account?{" "}
              <Button
                variant="link"
                color="green.500"
                type="submit"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </Button>
            </Text>
          )}
        </form>
      </Flex>
    </Box>
  );
};

export default Signin;
