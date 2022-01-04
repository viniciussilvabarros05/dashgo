import { Avatar, Box, Flex, HStack, Icon, IconButton, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";


export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false, // Os dados não estejam visiveis quando passar do tamanho setado
        lg: true,
    })


    return (
        <Flex
            as='header'
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize={["20", "24"]}
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                ></IconButton>
            )}

            <Text
                fontSize={["1xl", '3xl']}
                fontWeight="bold"
                letterSpacing='tight'
                w="64"

            >
                dashgo
                <Text color='pink.500' as="span" ml="1">.</Text>
            </Text>

            {isWideVersion && (
                <Flex
                    as="label"
                    flex='1'
                    py='4'
                    px='8'
                    ml='6'
                    maxWidth={400}
                    alignSelf="center"
                    color="gray.200"
                    position='relative'
                    bg='gray.800'
                    borderRadius='full'>
                    <Input
                        color='gray.50'
                        variant="unstyled"
                        px="4"
                        mr="4"
                        placeholder="Buscar na plataforma"
                        _placeholder={{ color: 'gray.400' }}>


                    </Input>
                    <Icon as={RiSearchLine} fontSize={["10", "20"]}></Icon>
                </Flex>
            )}



            <Flex
                align="center"
                ml="auto">
                <HStack
                    spacing={["6", "8",]}
                    mx={["6", "8",]}
                    pr={["6", "8",]}
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700">

                    <Icon as={RiNotificationLine}></Icon>
                    <Icon as={RiUserAddLine}></Icon>
                </HStack>

                <Flex>

                    {isWideVersion ? (
                        <Box mr='4' textAlign='right'>

                            <Text>Vinicius Silva</Text>
                            <Text> viniciussilvabarros05@hotmail.com</Text>

                        </Box>
                    ) : ""}

                    <Avatar size="md" name="Vinicius Silva" src="https://github.com/viniciussilvabarros05.png" ></Avatar>
                </Flex>
            </Flex>

        </Flex>
    )
}