import Image from "next/image";

const FollowUsSection = () => {
    const images = [
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642337/skyy_nndhvo.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712312054/tvqsy4ftyzien477yjcv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/brown_irregular_mgnc7a.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712312054/tvqsy4ftyzien477yjcv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642337/skyy_nndhvo.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642335/IMG-20240219-WA0001_izyfed.jpg",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png"
    ];

    return (
        <section className="container mx-auto px-4 py-12" >
            <h2 className="text-2xl font-semibold mb-6" > Follow Us @VA_clothings</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" >
                {
                    images.map((src, index) => (
                        <div key={index} className="relative w-full h-[200px] rounded-lg overflow-hidden" >
                            <Image
                                src={src}
                                alt="Instagram Post"
                                width={300}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default FollowUsSection;
