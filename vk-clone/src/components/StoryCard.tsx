import Image from "next/image";

type StoryCardProps = {
    name: string;
    src: string;
}

function StoryCard({ name, src }: StoryCardProps): JSX.Element {
    return (
        <div className="relative w-[94px] h-[167px] cursor-pointer overflow-x flex flex-col justify-center items-center">
            <Image src={src}
                className="object-cover filter brightness-75 rounded-lg hover:brightness-90 transition duration-200 ease-in"
                layout="fill"
                alt={name} />
            <div className="absolute bottom-1 flex flex-col items-center">
                {name === "Martin" ? (
                    <>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="text-blue-500 text-2xl">+</div>
                        </div>
                        <p className="text-white text-center text-xs">Story</p>

                    </>
                ) : (
                    <p className="text-white text-center text-xs">{name}</p>
                )}
            </div>
        </div>
    );
}

export default StoryCard;