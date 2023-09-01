import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

const Navbar = () => {
    return (

        <nav>
            <Menubar className=" flex  space-x-100 fixed top-0 right-0 left-0 mx-20 my-4 py-8 px-6  bg-neutral-900/90 backdrop-blur">
                <MenubarMenu>
                    <MenubarTrigger >File</MenubarTrigger>

                    <MenubarTrigger className="flex end-10">File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </nav>
    )
}

export default Navbar
