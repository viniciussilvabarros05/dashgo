import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"

      >
        {/* o <Stack> é usado para envolver elementos que precisam de espaço entre si*/}
        <Stack spacing='4'>
        
          <Input  
          type="email"
          label="E-mail"
          name="email">
          </Input>
         
          <Input
          type="password"
          label="Senha"
          name="password">
          </Input>

        </Stack>
        <Button type='submit' mt='6' colorScheme="pink" size="lg"> Entrar</Button>
      </Flex>

    </Flex>

  )
}
