import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"


type CreateUserFormData = { // Tipando values 
    name: string;
    email: string;
    password: string;
    passwor_confirmation: string
}

// O yup é utilizado para validar dados

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], "As senhas precisam ser iguais") // checando se as senhas são iguais. o método ref é para referenciar um campo dentro do schema
})

export default function CreateUser() {


    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })
    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
        console.log(values)
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'> Criar usuário</Heading>

                    <Divider my='6' borderColor="gray.700"></Divider>

                    <VStack spacing={["6", "8"]}>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                             name="name"
                             type='name' 
                             label="Nome completo" 
                             {...register('name')} 
                             error={errors.name}
                             />

                            <Input 
                            name="email" 
                            type="email" 
                            error={errors.email}
                            label="E-mail" 
                            {...register('email')} 
                       
                            />

                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="password"
                                type="password"
                                error={errors.password}
                                label="Senha"
                                {...register('password')} 
                              
                                />
                            <Input 
                            name="password_confirmation" 
                            type="password" 
                            label="Confirmação de senha"
                            error={errors.password_confirmation}
                            {...register('password_confirmation')}
                    
                            />
                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink"
                            isLoading = {formState.isSubmitting}
                            >Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}