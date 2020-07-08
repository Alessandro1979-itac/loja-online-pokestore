import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Pagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: tomato;
`;

const Button = styled.button`
	font-weight: 600;
	color: tomato;
	border: 2px solid tomato;
	background: white;
	padding: 0.65em;
	margin: 1em;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.2s ease-in-out;

	&:hover:enabled {
		color: white;
		background-color: tomato;
	}

	&:disabled {
		color: #BABDB6;
		border-color: #BABDB6;
		cursor: not-allowed;
	}
`;

export const PrevButton = styled(Button)`
	border-right: 1px solid;
	&.active {
		color: black;
	}
`;

export const NextButton = styled(Button)`
	border-left: 1px solid;
`;
