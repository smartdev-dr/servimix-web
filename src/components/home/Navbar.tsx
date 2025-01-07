"use client"
import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]


export const Navbar = () => {
    return (
        <>
            <div className="bg-gray-100 text-gray-600 text-sm py-2 ml-0 md:pl-10" >
                <div className="container   flex justify-between">
                    <span>Santo Domingo, República Dominicana</span>
                </div>
            </div>
            <header className="w-full md:px-10" >

                <nav className="grid grid-cols-1 gap-4 md:grid-cols-4 items-center my-3">
                    <div className="flex items-center space-x-2">
                        <Image src="/logo.png" width="50" height="59" alt="" />
                        <div>
                            <h1>SERVIMIX</h1>
                            <p className="text-sm md:text-base">De lo que necesitas, a quien lo hace</p>
                        </div>
                    </div>
                    <div className=" col-span-1 md:col-span-2">
                        <div className="">
                            <input type="text"
                                placeholder="Buscar Servicio"
                                className="w-full border rounded-lg py-2  focus:outline-none focus:ring focus:ring-orange-400 text-center " />
                            {/* <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                                <Image src="/svg/search.svg" width={20} height={20} alt="Icon-buscar" />
                            </span> */}
                        </div>
                    </div>
                    <div className="flex gap-4 m-5">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                            <Image src="/svg/service.svg" width={25} height={25} alt="Icon-servicio" />
                            <span >Mis servicios</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                            <Image src="/svg/user.svg" width={25} height={25} alt="Icon-servicio" />
                            <span>Mi cuenta</span>
                        </button>
                    </div>
                </nav>
                <div className="border-t border-b py">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >

                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components built with Radix UI and
                                                        Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"




// className="w-full border-b"
// className="bg-gray-100 text-gray-600 text-sm py-2"
// className="container mx-auto px-4 flex justify-between"