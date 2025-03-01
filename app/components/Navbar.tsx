"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    Brand
                </Link>

                {/* Navigation Links (Desktop) */}
                <ul className="hidden md:flex gap-6">
                    <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
                    <li><Link href="/about" className="hover:text-primary">About</Link></li>
                    <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                </ul>

                {/* Right Side Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Icon */}
                    <Search className="cursor-pointer" onClick={() => setSearchOpen(true)} />
                    <ShoppingCart className="cursor-pointer" />
                    <User className="cursor-pointer" />
                    {/* Mobile Menu Button */}
                    <Menu className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute left-0 top-14 w-full bg-white shadow-lg md:hidden">
                    <ul className="flex flex-col p-4">
                        <li><Link href="/shop" className="py-2" onClick={() => setMenuOpen(false)}>Shop</Link></li>
                        <li><Link href="/about" className="py-2" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link href="/contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}

            {/* Search Bar */}
            {searchOpen && (
                <div className="absolute left-0 top-0 w-full bg-white p-4 shadow-lg flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 border p-2 rounded-md"
                    />
                    <X className="ml-2 cursor-pointer" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} />
                </div>
            )}

            {/* Search Results */}
            {searchQuery && (
                <div className="absolute left-0 top-16 w-full bg-white p-4 shadow-lg">
                    <p>Showing results for: <strong>{searchQuery}</strong></p>
                    {/* Map through search results here */}
                </div>
            )}
        </header>
    );
}
