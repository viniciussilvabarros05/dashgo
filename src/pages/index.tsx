import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/input'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"




type SignInFormData = { // Tipando values 
  email: string;
  password: string;
}

// O yup é utilizado para validar dados

const signInFormSchema = yup.object().shape({
  email:yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm(({
    resolver : yupResolver(signInFormSchema)
  })) // Usando o hook do react-hook-form

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values)
  }
  const { errors } = formState

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
        onSubmit={handleSubmit(handleSignIn)}

      >
        {/* o <Stack> é usado para envolver elementos que precisam de espaço entre si*/}
        <Stack spacing='4'>

          <Input
            type="email"
            label="E-mail"
            name="email"
            error={errors.email}
            {...register("email")}
          >
          </Input>

          <Input
            type="password"
            label="Senha"
            name="password"
            error = {errors.password}
            {...register("password")}
          >

          </Input>

        </Stack>
        <Button
          type='submit'
          mt='6'
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting} // Processo de submit do formulário na propriedade de carregamento enquanto processos são realizados
        > Entrar</Button>
      </Flex>

    </Flex>

  )
}
