import { Box, Text, Input, HStack } from "@chakra-ui/react";
import React from "react";

// TODO ChakraUIのbackground-color変更したい
const AppHeader: React.FC = () => (
  <Box bgColor="background.main" py="20px" px="30px">
    <HStack spacing="20px">
    <Text color="font.base" fontWeight="700">ポケモン図鑑</Text>
    <Input color="font.base" w="800px" bgColor="#ffffff" placeholder="検索" />
    </HStack>
  </Box>
)

export default AppHeader