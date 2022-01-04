import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb="8" justify='space-between' align="center">
                        <Heading fontSize={['ms', 'lg']} fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size='sm'
                                fontSize={['xs', 'sm']}
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize={["16", "20"]}></Icon>}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color='gray.300' width='8'>
                                    <Checkbox colorSchema='pink' />
                                </Th>
                                <Th> Usuário</Th>
                                {isWideVersion && (<Th>Data de cadastro</Th>)}
                                <Th width="8"></Th>

                            </Tr>
                        </Thead>

                        <Tbody>
                            <Td px={["4", "4", "6"]} >
                                <Checkbox colorScheme='pink' />
                            </Td>
                            <Td px={["4", "4", "6"]} >
                                <Box>
                                    <Text fontWeight='bold'>Vinicius Silva</Text>
                                    <Text fontSize={["8", "8", 'sm']} color='gray.300'>viniciussilvabarros05@hotmail.com</Text>
                                </Box>
                            </Td>
                            {isWideVersion && (<Td>27 de Dezembro, 2021</Td>)}
                            {isWideVersion && (<Td> <Button
                                as="a"
                                size='sm'
                                fontSize='sm'
                                colorScheme="purple"
                                leftIcon={<Icon as={RiPencilFill} fontSize="16"></Icon>}>
                                Editar
                            </Button></Td>)}

                        </Tbody>

                    </Table>
                    <Pagination></Pagination>
                </Box>


            </Flex>
        </Box>
    )
}