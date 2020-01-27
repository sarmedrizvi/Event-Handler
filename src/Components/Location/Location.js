import React from 'react'
import './Location.scss'
import Selected from '../Select-Component/Select'
import { TextBox } from '../CustomTextBox/TextBox'


export class Location extends React.Component {
	
	state={
		name:''
	}

	render() {
		return (
			<div className='location'>
				<div className='location-heading'>
					<h1>Location</h1>
					<p>Help people in the area discover your event and let attendees know where to show up.</p>
				</div>
				<Selected items={[{ name: 'Venue', value: 10 }]} />
				<TextBox />
			</div>
		);
	}

}