import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const endpoint = "http://172.232.70.228:8080/api/gql/";

    const mutation = `mutation {
        generateOTP(input:{email:"superadmin@example.com"})
      }`;
    axios
      .post(endpoint, { query: mutation })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Stack
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="50vw"
      margin="auto"
    >
      <Heading as="h1" size="lg" mb={8}>
        Sign in
      </Heading>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue">Get OTP</Button>
    </Stack>
  );
};

export default Login;
