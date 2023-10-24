import React from 'react'
import "./Card.scss"
// import image from "../images/figma_image.png"
import image2 from "../images/figma_image-2.png"
import { MdLocationPin } from "react-icons/md"
import { GoDotFill } from "react-icons/go"


function Card(props) {
	let { image, title, subtitle_bold, tages, price, location } = props
	// console.log(tages)
	// let options = tages.map((f) => <p>{f}</p>) 

	return (
		<div className='card'>
			<div className="card__container">
				<div className="card__container--img">
					<img className='picture' src={image} alt="Ups, no photo;)" />
				</div>

				<div className="card__container--content">
					<div className="card__container--content-box1">
						<p className='card__content-box1--title'>{title}</p>
						<div className="card__content-box1--lable-box">
							<div className="lable-container">
								<p className='lable__text'> {subtitle_bold}</p>

								{/* {tages ? { options } : <p></p>} */}

								<p className='lable__tag'>{tages} </p>
								{/* <p className='lable__tag'>Fresh <GoDotFill /> Healthy food</p> */}
							</div>
							<div className="card__content-box1--lable__price-box">
								<p className="lable__price">{price}</p>
							</div>
						</div>


					</div>

					<div className="card__container--content-box2">
						{location ? <p><MdLocationPin /> {location}</p> : <p></p>}
					</div>
				</div>
			</div>

		</div >
	)
}

export default Card