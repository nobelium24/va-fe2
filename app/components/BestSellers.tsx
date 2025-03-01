"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Elegant Agbada",
        price: "$49.99",
        image: "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png",
    },
    {
        id: 2,
        name: "Luxury Kaftan",
        price: "$59.99",
        image: "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png",
    },
    {
        id: 3,
        name: "Classic Danshiki",
        price: "$39.99",
        image: "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png",
    },
];

export default function BestSellers() {
    return (
        <section className="container mx-auto my-12 px-4">
            <h2 className="text-center text-2xl font-semibold text-gray-800 md:text-3xl">
                Best Sellers
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div key={product.id} className="rounded-lg border p-4 shadow-lg">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="h-50 rounded-md object-cover"
                            width={400}
                            height={100}
                        />
                        <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
                        <p className="text-gray-500">{product.price}</p>
                        <Button className="mt-4 w-full">View</Button>
                    </div>
                ))}
            </div>
        </section>
    );
}
