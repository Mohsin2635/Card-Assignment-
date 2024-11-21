import image1 from "./computer-cheer.jpg"
import image2 from "./gamming_desk.jpg"
import image3 from "./Gamming-glasses.jpg"
import { StaticImageData } from "next/image";


interface Product {
    id: number,
    image: StaticImageData,
    name: string,
    price: number,
}
const product:Product[]= [
    {
        id: 1,
        image: image1,
        name: "RGB Computer Cheer",
        price: 199.99
    },
    {
        id: 2,
        image: image2,
        name: "RGB Gamming Desk Edition",
        price: 298.99
    },
    {
        id: 3,
        image: image3,
        name: "Gamming High Quality Glasses Edition",
        price: 256.99
    }
]
export default product;