import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";

export function NavBar() {
    return (

        <Stack spacing="12" align="flex-start">
            <Box>
                <Text
                    fontWeight="bold" color="gray.400" fontSize="small"
                >Geral</Text>
                <Stack spacing="4" mt="8" align="stretch">
                    <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>

                    <NavLink href='/users' icon={RiContactsLine}>Usuários</NavLink>
                </Stack>
            </Box>
            <Box>
                <Text
                    fontWeight="bold" color="gray.400" fontSize="small"
                >AUTOMAÇÃO</Text>
                <Stack spacing="4" mt="8" align="stretch">
                    <NavLink href="#" icon={RiInputMethodLine}>Formulários</NavLink>

                    <NavLink href="/users" icon={RiGitMergeLine}>Usuários</NavLink>
                </Stack>
            </Box>

        </Stack>



    )
}