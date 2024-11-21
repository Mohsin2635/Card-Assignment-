import Image from "next/image"

const ShopingCaard = ({ image, name, price }: any) => {
    return (

        <>
            <div className="border border-black w-[350px] sm:w-[250px] lg:w-[300px] xl:w-[400px] shadow-xl shadow-zinc-700 overflow-hidden">
                <Image src={image} alt="" className="w-full hover:scale-105 duration-500 cursor-pointer" />
                <p className="text-center my-3">{name}</p>
                <p className="text-center my-3"><sup>$</sup> <span className="font-bold">{price}</span></p>
                <p className="text-center my-3">Delivery <span className="font-bold">21<sup>st</sup> Nov, Thursday </span> from Pakistan </p>
                <div className="w-full flex justify-center my-3">
                    <button className="bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-700 text-white px-10 py-2 rounded-[0.25rem] duration-300">Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default ShopingCaard;
