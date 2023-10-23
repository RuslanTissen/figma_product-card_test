import React from 'react'
import "./Card.scss"
import image from "../images/figma_image.png"
import image2 from "../images/figma_image-2.png"

function Card() {
	return (
		<div className='card'>
			<div className="card__container">
				<div className="card__container--img">
					<img className='picture' src={image2} alt="Ups, no photo;)" />
				</div>

				<div className="card__container--content">
					zmdfnvkjsadbfvkññfkghlrkjhlrtkhjrlthkj
				</div>
			</div>

		</div>
	)
}

export default Card