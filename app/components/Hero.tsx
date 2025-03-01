"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative flex h-[300px] w-full items-center justify-center bg-gray-100">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-3xl font-light italic text-white">
                    Elegance In Simplicity, <br /> Earth’s Harmony
                </h1>
                <Button className="mt-4 px-6 py-3 text-lg">New In</Button>
            </div>
        </section>
    );
}
