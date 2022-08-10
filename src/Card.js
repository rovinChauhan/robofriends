import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className="tc bg-light-yellow dib br3 ma2 pa2 grow bw3 shadow-20">
			<img alt="robots" src={`https://robohash.org/${id}?10*10`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);

}

export default Card;