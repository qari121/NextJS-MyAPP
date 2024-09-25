import type { StaticImageData } from "next/image";
import Image from "next/image";

interface IHeroProps {
    imgData: StaticImageData;
    title: string;
    imgAlt: string;
}

export default function Hero(props: IHeroProps) {
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 "></div>
            <div className="flex justify-center items-center h-full">
                <h1 className="text-white text-6xl text-center font-bold">                    
                    {props.title}
                </h1>
            </div>
        </div>
    );
}
