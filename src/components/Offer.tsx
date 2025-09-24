import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/*TEXT CONTAINER*/}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
                <p className="text-white xl:text-xl">
                    Don't lose time and order now while this promotion is up! Check out our prices and enjoy all our amazing food.
                </p>
                <Countdown />
                <button className="bg-red-500 text-white rounded-md px-6 py-3">Order Now</button>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className="flex-1 w-full relative md:h-full">
                <Image
                    src="/offerProduct.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Offer;