import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { useFormValidation } from './hooks/useFormValidation'
import { Form, Helper, Alert, FormSubmitButton } from './style/customStyle'
import './styles.css'

export const isText = RegExp(/^[A-Z ]{3,}$/i)
export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
export const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/)

const stateShcema = {
	name: {
		value: '',
		error: ''
	},
	email: {
		value: '',
		error: ''
	},
	phone: {
		value: '',
		error: ''
	},
	message: {
		value: '',
		error: ''
	}
}

const validateShcema = {
	name: {
		required: true,
		validator: {
			regEx: isText,
			error: 'Please provide a valid name'
		}
	},
	email: {
		required: true,
		validator: {
			regEx: isEmail,
			error: 'Invalid email address'
		}
	},
	phone: {
		required: true,
		validator: {
			regEx: isPhone,
			error: 'Please enter a valid phone number'
		}
	},
	message: {
		required: true,
		validator: {
			length: 10,
			error: 'Minimum 10 characters required.'
		}
	}
}

function App() {
	const { state, disable, handleChange, handleSubmit } = useFormValidation(stateShcema, validateShcema, handleSend)
	const [ loading, setLoading ] = useState(false)
	const [ responseMessage, setResponseMessage ] = useState('')
	const { name, email, phone, message } = state

	function handleSend() {
		setLoading(true)

		// Just for testing
		setTimeout(() => {
			setResponseMessage('it works!')
			setLoading(false)
		}, 3000)
	}

	return (
		<div className="App">
			<div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
				<Form onSubmit={handleSubmit} method="POST" noValidate>
					<div className="form-group">
						<input
							name="name"
							autoComplete="name"
							className="form-control"
							value={name.value}
							onChange={handleChange}
							placeholder="Enter your name"
						/>
						{name.error ? (
							<Helper>{name.error}</Helper>
						) : name.value ? (
							<Helper color="green">Name ✔</Helper>
						) : (
							''
						)}
						<span className="bar" />
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							autoComplete="email"
							className="form-control"
							value={email.value}
							onChange={handleChange}
							placeholder="Email"
						/>
						{email.error ? (
							<Helper>{email.error}</Helper>
						) : email.value ? (
							<Helper color="green">Email ✔</Helper>
						) : (
							''
						)}
						<span className="bar" />
					</div>
					<div className="form-group">
						<input
							name="phone"
							autoComplete="phone"
							className="form-control"
							value={phone.value}
							onChange={handleChange}
							placeholder="Phone i.e. xxx-xxx-xxxx"
						/>
						{phone.error ? (
							<Helper>{phone.error}</Helper>
						) : phone.value ? (
							<Helper color="green">Phone ✔</Helper>
						) : (
							''
						)}
						<span className="bar" />
					</div>
					<div className="form-group">
						<textarea
							name="message"
							className="form-control"
							value={message.value}
							onChange={handleChange}
							placeholder="Your message.."
						/>
						{message.error && <Helper>{message.error}</Helper>}
						<span className="bar" />
					</div>
					{responseMessage.length > 0 && (
						<Alert success={responseMessage.includes('it works!') ? true : false} role="alert">
							{responseMessage}
						</Alert>
					)}
					<FormSubmitButton type="submit" disabled={disable}>
						<span>Send Message</span>
						{loading && <span className="loader" />}
					</FormSubmitButton>
				</Form>
			</div>
			<div style={{ marginBottom: 20, fontSize: '.75rem' }}>
				© {new Date().getFullYear()}. Designed and built with ❤️ by the
				<a href="https://gkstyle.net/" title="GK STYLE">
					{' '}
					GK STYLE{' '}
				</a>
				team.
			</div>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
