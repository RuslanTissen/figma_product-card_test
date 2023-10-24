import React from 'react'
import "./Card.scss"
// import image from "../images/figma_image.png"
import image2 from "../images/figma_image-2.png"
import { MdOutlineLocationOn } from "react-icons/md"
import { GoDotFill } from "react-icons/go"


function Card() {
	return (
		<div className='card'>
			<div className="card__container">
				<div className="card__container--img">
					<img className='picture' src={image2} alt="Ups, no photo;)" />
				</div>

				<div className="card__container--content">
					<div className="card__container--content-box1">
						<p className='card__content-box1--title'>Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind</p>
						<div className="card__content-box1--lable-box">
							<div className="lable-container">
								<p className='lable__text'> Fruits and vegetables</p>
								<p className='lable__tag'>Fresh <GoDotFill /> Healthy food</p>
							</div>
							<div className="card__content-box1--lable__price-box">
								<p className="lable__price">$ 3.90</p>
							</div>
						</div>


					</div>

					<div className="card__container--content-box2">
						<MdOutlineLocationOn />
						<p>Newport Beach, CA, USA</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Card