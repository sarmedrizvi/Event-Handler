import React from 'react'
import { CustomButton } from '../../CustomButton/Button'
import './EventAdder.scss'
export const EventAdder = () => (
	<div className='event-title'>
		<div className='title'>
			<span className='main-title'>Upcoming Events</span>
			<div className='button'>
				<CustomButton>Add Event</CustomButton>
				<CustomButton>Edit Event</CustomButton>
			</div>
		</div>
		<hr/>
	</div>
)