// import Image from "next/image";

// const CollectionSection = () => {
//     return (
//         <section className="container mx-auto px-4 py-12">
//             <h2 className="text-2xl font-semibold mb-6 style={{marginLeft:""}}">Collection</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="relative col-span-2 row-span-1">
//                     <Image
//                         src="/Green textile.png"
//                         alt="Collection Item 1"
//                         width={500}
//                         height={400}
//                         className="w-full h-auto rounded-lg object-cover"
//                     />
//                     <span className="relative bottom-1 style={{marginLeft:""}}0 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Casuals</span>
//                 </div>
//                 <div className="relative col-span-1 row-span-2">
//                     <Image
//                         src="/Maraba coffee.png"
//                         alt="Collection Item 2"
//                         width={400}
//                         height={600}
//                         className="w-full h-auto rounded-lg object-cover"
//                     />
//                     <span className="relative bottom-1 style={{marginLeft:""}}0 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Agbada</span>
//                 </div>
//                 <div className="relative col-span-1 row-span-1">
//                     <Image
//                         src="/Maraba coffee2.png"
//                         alt="Collection Item 3"
//                         width={400}
//                         height={400}
//                         className="w-full h-auto rounded-lg object-cover"
//                     />
//                     <span className="relative bottom-1 style={{marginLeft:""}}0 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Dansiki</span>
//                 </div>
//                 <div className="relative col-span-1 row-span-1">
//                     <Image
//                         src="/Maraba.png"
//                         alt="Collection Item 4"
//                         width={400}
//                         height={400}
//                         className="w-full h-auto rounded-lg object-cover"
//                     />
//                     <span className="relative bottom-10 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Kaftan</span>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CollectionSection;


import Image from "next/image";

const CollectionSection = () => {
    return (
        <section className="container mx-auto px-10 py-12">
            <h2 className="text-2xl text-center font-semibold mb-6">Collection</h2>
            <div className="grid grid-cols-2 gap-4">
                {/* Top-left (shorter) */}
                <div className="relative" style={{ marginLeft: "170px" }}>
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712154177/vgzprlkzeiatjshnhxce.png"
                        alt="Collection Item 1"
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        width={500}
                        height={500}
                    />
                    <span className="relative bottom-10 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Casual</span>
                </div>
                {/* Top-right (taller) */}
                <div className="relative" style={{ marginRight: "170px" }}>
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png"
                        alt="Collection Item 2"
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        width={500}
                        height={400}
                    />
                    <span className="relative bottom-10 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Agbada</span>
                </div>
                {/* Bottom-left (taller) */}
                <div className="relative" style={{ marginLeft: "170px" }}>
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1710597710/ccb7fj95hhzddtwpnwgv.png"
                        alt="Collection Item 3"
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        width={500}
                        height={400}
                    />
                    <span className="relative bottom-10 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">T-shirt</span>
                </div>
                {/* Bottom-right (shorter) */}
                <div className="relative" style={{ marginRight: "170px" }}>
                    <Image
                        src="https://res.cloudinary.com/dwrmvf3pr/image/upload/v1714578856/wxbfatevjlxmkyeb1h8r.png"
                        alt="Collection Item 4"
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        width={500}
                        height={400}
                    />
                    <span className="relative bottom-10 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm">Gown</span>
                </div>
            </div>
        </section>
    );
};

export default CollectionSection;
