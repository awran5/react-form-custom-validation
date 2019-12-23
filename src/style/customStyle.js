import styled from 'styled-components'

export const Form = styled.form`
	width: 100%;

	& .form-group {
		position: relative;
		margin: 1.5rem 0;
	}

	& .form-group .form-control {
		font-family: sans-serif;
		font-size: 0.9rem;
		padding: 0.25rem 0;
		display: block;
		border: none;
		border-bottom: 1px solid #cacaca;
		box-shadow: none;
		width: 100%;
		background: transparent;
		border-radius: 0.25rem;
		height: calc(1.75em + 0.5rem + 2px);
	}

	& .form-group .form-control:focus {
		outline: 0;
	}

	& .form-group .form-control:focus ~ .bar:after,
	& .form-group .form-control:focus ~ .bar:before {
		width: 50%;
	}

	& .form-group .form-control::-webkit-input-placeholder {
		color: #9c9c9c !important;
	}

	& .form-group .form-control::-moz-placeholder {
		color: #9c9c9c !important;
	}

	& .form-group .form-control:-ms-input-placeholder {
		color: #9c9c9c !important;
	}

	& .form-group .form-control::-ms-input-placeholder {
		color: #9c9c9c !important;
	}

	& .form-group .form-control::placeholder {
		color: #9c9c9c !important;
	}

	& .form-group select {
		color: #9c9c9c;
	}

	& .form-group select option {
		color: #212529;
	}

	& .form-group textarea {
		min-height: 100px;
	}

	& .form-group .bar:before {
		left: 50%;
	}

	& .form-group .bar:after {
		right: 50%;
	}

	& .form-group .bar:after,
	& .form-group .bar:before {
		content: "";
		height: 1px;
		width: 0;
		bottom: 0;
		position: absolute;
		background: #cb2740;
		transition: all 0.2s ease;
		-webkit-transition: all 0.2s ease;
	}
`
export const FormRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
`
export const Helper = styled.span`
	font-family: sans-serif;
	color: #dc3545;
	font-size: 0.75rem;
	position: absolute;
	right: 0;
	display: inline-block;
	color: ${props => props.color};
`
export const FormSubmitButton = styled.button`
	position: relative;
	display: block;
	margin: 5px;
	padding: 0;
	overflow: hidden;
	border-width: 0;
	outline: none;
	border-radius: 2px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
	background-color: #cb2740;
	color: #ecf0f1;
	transition: background-color 0.3s;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: #333;
	}
	&:disabled {
		pointer-events: none;
		opacity: 0.65;
	}

	& > * {
		position: relative;
	}

	& span {
		display: inline-block;
		padding: 10px 20px;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		width: 0;
		padding-top: 0;
		border-radius: 100%;
		background-color: rgba(236, 240, 241, 0.3);
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	&:active::before {
		width: 120%;
		padding-top: 120%;
		transition: width 0.2s ease-out, padding-top 0.2s ease-out;
	}
`
export const Alert = styled.div`
	position: relative;
	padding: 0.75rem 1.25rem;
	margin: 1rem 0;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	background-color: ${props => (props.success ? '#d4edda' : '#f8d7da')};
	color: ${props => (props.success ? '#155724' : '#721c24')};
	border-color: ${props => (props.success ? '#c3e6cb' : 'f5c6cb')};
`
