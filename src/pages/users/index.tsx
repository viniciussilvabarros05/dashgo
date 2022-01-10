import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, error, isLoading, isFetching } = useUsers(page)
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
                        <Heading fontSize={['ms', 'lg']} fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size='sm' color='grary.500' ml="4"></Spinner>}
                        </Heading>
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

                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Erro ao encontrar usuários</Text>
                        </Flex>
                    ) :
                        <>
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
                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]} >
                                                    <Checkbox colorScheme='pink' />
                                                </Td>
                                                <Td px={["4", "4", "6"]} >
                                                    <Box>
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                        <Text fontSize={["8", "8", 'sm']} color='gray.300'>{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && (<Td>{user.createdAt}</Td>)}

                                                {isWideVersion && (<Td> <Button
                                                    as="a"
                                                    size='sm'
                                                    fontSize='sm'
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiPencilFill} fontSize="16"></Icon>}>
                                                    Editar
                                                </Button></Td>)}
                                            </Tr>
                                        )
                                    })}

                                </Tbody>

                            </Table>
                            <Pagination totalCountOfRegisters={200} currentPage={page} onPageChange={setPage} />
                        </>}
                </Box>


            </Flex>
        </Box>
    )
}