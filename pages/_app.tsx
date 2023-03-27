import "@/styles/globals.css";
import "@/styles/fonts/stylesheet.css";
import "@/styles/schema.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, createStandaloneToast } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box w="100%" h="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
