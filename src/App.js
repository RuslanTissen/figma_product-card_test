import './App.scss';
import Card from './components/Card.jsx';
import data from './components/Data.js';

function App() {
	console.log(data);

	const cardComponents = data.map((card, index) => (
		<Card
			key={index}
			image={card.image}
			title={card.title}
			subtitle_bold={card.subtitle_bold}
			tages={card.tages}
			price={card.price}
			location={card.location}
		/>
	));

	return <div className="App">
		{cardComponents}
	</div>;
}

export default App;






// import './App.scss';
// import Card from './components/Card.jsx';
// import data from "./components/Data.js"

// function App() {
// 	console.log(data)
// 	return (
// 		<div className="App">
// 			<Card
// 				image={`${data.card_0.image}`}
// 			/>

// 			<Card
// 				image={`${data.card_1.image}`}
// 				title={`${data.card_1.title}`}
// 				subtitle_bold={`${data.card_1.subtitle_bold}`}
// 				tages={`${data.card_1.tages}`}
// 				price={`${data.card_1.price}`}
// 				location={`${data.card_1.location}`}
// 			/>

// 			<Card
// 				image={`${data.card_2.image}`}
// 				title={`${data.card_2.title}`}
// 				subtitle_bold={`${data.card_2.subtitle_bold}`}
// 				tages={`${data.card_2.tages}`}
// 				price={`${data.card_2.price}`}
// 				location={`${data.card_2.location}`}
// 			/>		
// 			<Card
// 				image={`${data.card_3.image}`}
// 				title={`${data.card_3.title}`}
// 				subtitle_bold={`${data.card_3.subtitle_bold}`}
// 				tages={`${data.card_3.tages}`}
// 				price={`${data.card_3.price}`}
// 				location={`${data.card_3.location}`}
// 			/>
// 			<Card
// 				image={`${data.card_4.image}`}
// 				title={`${data.card_4.title}`}
// 				subtitle_bold={`${data.card_4.subtitle_bold}`}
// 				tages={`${data.card_4.tages}`}
// 				price={`${data.card_4.price}`}
// 				location={`${data.card_4.location}`}
// 			/>
// 			</div>
// 	);
// }

// export default App;
