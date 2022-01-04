import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";

import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { NavBar } from "./navBar";


export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,

    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" padding="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <NavBar></NavBar>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <NavBar></NavBar>
        </Box>
    )
}