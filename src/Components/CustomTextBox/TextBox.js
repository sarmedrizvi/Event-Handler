import React from 'react'
import './TextBox.scss'


export class TextBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			customText: ''
		}
	}

	render() {
		const { onchange } = this.props
		return (
			<div className='Box'>
				<i class="fa fa-search" aria-hidden="true"></i>
				<input type='text' onChange={onchange} placeholder='Search events' />
			</div>
		)
	}
}