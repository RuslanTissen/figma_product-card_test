import image_1 from "../images/figma_1.png"
import image_2 from "../images/figma_image.png"
import image_3 from "../images/figma_4.png"
import image_4 from "../images/figma_3.png"
import image_5 from "../images/figma_2.png"
import { MdOutlineLocationOn } from "react-icons/md"
import { GoDotFill } from "react-icons/go"

// const locationSVG = <MdOutlineLocationOn />

const data = [
	{
		image: image_1,
	},
	{
		image: image_2,
		title: "Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind",
		subtitle_bold: "Fruits and vegetables",
		tages: ["Fresh", <GoDotFill/>, "Healthy food"],
		price: "$ 3.90",
		location: "Newport Beach, CA, USA",
	},
	{
		image: image_3,
		title: "Extra fresh fruits and vegetables",
		subtitle_bold: "Apples, bananas, berries, citrus fruits like oranges and lemons, tropical fruits like pineapple and mango, and stone fruits like peaches and plums",
		tages: ["Fresh", <GoDotFill/>, "Healthy food"],
		price: "$ 112.99",
		location: "Newport Beach, CA, USA",
	},
	 {
		image: image_4,
		title: "Fruits and vegetables are packed with essential vitamins, minerals, and nutrients",
		subtitle_bold: "Fruits and vegetables",
		tages: ["Healthy eating", <GoDotFill/>, "Vitamins", <GoDotFill/>, "Minerals", <GoDotFill/>, "Nutrients", <GoDotFill/>, "Balanced diet", <GoDotFill/>, "Health benefits", <GoDotFill/>, "Well-Being",  <GoDotFill/>,"Nutrition", <GoDotFill/>, "Plant-based foods"],
		price: "$ 29.99",
		location: "Newport Beach, CA, USA",
	},
	{
		image: image_5,
		title: "Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind",
		subtitle_bold: "Fruits and vegetables",
		tages: ["Fresh", <GoDotFill/>, "Healthy food"],
		price: "$ 199.90",
		location:  "Newport Beach, CA, USA",
	}
]

export default data