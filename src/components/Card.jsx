import React from 'react'
import "./Card.scss"
import { MdLocationPin } from "react-icons/md"


function Card(props) {
	let { product, title, subtitle_bold, tages, price, location } = props

	// document.getElementsByClassName("card__tag-notes").innerText = tages.join(' - ' )

	return (
		<div className='card'>
			<div className="card__container">
				<div className="card__container--img">
					<img className='product-image' src={product} loading="lazy" alt="Ups, no product;)" />
				</div>

				<div className="card__container--content">
					<div className="card__container--content-box1">
						<p className='card__content-box1--title'>{title}</p>
						<div className="card__content-box1--lable-box">
							<div className="lable-container">
								<p className='lable__text'> {subtitle_bold}</p>
								{tages ? tages.map((tag) =>
									<p className='lable__tag'>{tag}
										<span className='span-dot'></span>
									</p>)
									
									: <p></p>
								}
							</div>
							<div className="card__content-box1--lable--price-box">
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