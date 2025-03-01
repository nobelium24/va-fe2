import Image from "next/image";

const CollectionSection = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl text-center font-semibold mb-6">Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Top-left */}
                <div className="relative">
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712154177/vgzprlkzeiatjshnhxce.png"
                        alt="Casual"
                        className="rounded-lg object-cover w-full h-auto"
                        width={500}
                        height={500}
                    />
                    <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">
                        Casual
                    </span>
                </div>
                {/* Top-right */}
                <div className="relative">
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png"
                        alt="Agbada"
                        className="rounded-lg object-cover w-full h-auto"
                        width={500}
                        height={400}
                    />
                    <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">
                        Agbada
                    </span>
                </div>
                {/* Bottom-left */}
                <div className="relative">
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1710597710/ccb7fj95hhzddtwpnwgv.png"
                        alt="T-shirt"
                        className="rounded-lg object-cover w-full h-auto"
                        width={500}
                        height={400}
                    />
                    <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">
                        T-shirt
                    </span>
                </div>
                {/* Bottom-right */}
                <div className="relative">
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png"
                        alt="Gown"
                        className="rounded-lg object-cover w-full h-auto"
                        width={500}
                        height={400}
                    />
                    <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">
                        Gown
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CollectionSection;
