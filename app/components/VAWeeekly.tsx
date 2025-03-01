import Image from "next/image";

const VAWeeksSection = () => {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const images = [
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642339/wv_tnwjnd.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712312054/tvqsy4ftyzien477yjcv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642339/wv_tnwjnd.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712312054/tvqsy4ftyzien477yjcv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642339/wv_tnwjnd.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1712312054/tvqsy4ftyzien477yjcv.png",
        "https://res.cloudinary.com/dwrmvf3pr/image/upload/v1725642327/black_gold_wrmikv.png",
    ];

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-6">VAWeeks</h2>
            <div className="overflow-x-auto flex gap-4 scrollbar-hide">
                {days.map((day, index) => (
                    <div key={day} className="flex flex-col items-center min-w-[150px]">
                        <div className="relative w-[150px] h-[200px] rounded-lg overflow-hidden">
                            <Image
                                src={images[index % images.length]}
                                alt={`${day} Outfit`}
                                width={150}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="mt-2 text-sm font-medium">{day}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VAWeeksSection;
