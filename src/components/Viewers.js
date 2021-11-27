import React from 'react';
import styled from 'styled-components';

function Viewers() {
	return (
		<Container>
			<Wrapper>
				<img src="/images/viewers-disney.png" alt=""/>
			</Wrapper>
			<Wrapper>
				<img src="/images/viewers-pixar.png" alt=""/>
			</Wrapper>
			<Wrapper>
				<img src="/images/viewers-marvel.png" alt=""/>
			</Wrapper>
			<Wrapper>
				<img src="/images/viewers-starwars.png" alt=""/>
			</Wrapper>
			<Wrapper>
				<img src="/images/viewers-national.png" alt=""/>
			</Wrapper>
		</Container>
	)
}

export default Viewers

const Container = styled.div`
	margin-top: 30px;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 25px;
	padding: 30px 0 26px;
`

const Wrapper = styled.div`
	border-radius: 10px;
	cursor: pointer;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
	rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
		rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`