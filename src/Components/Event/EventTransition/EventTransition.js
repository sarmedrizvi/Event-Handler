import React from 'react'
import './EventTransition.scss'
import { UpcomingEvents } from '../UpcomingEvents/UpcomingEvents'
import { Emoji } from '../../Emoji/Emoji'
import { TextBox } from '../../CustomTextBox/TextBox'


export class EventTransition extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			EventChange: {
				name: '',
				imageUrl: '',
				location: '',
				date: '',
				ticketfee: '',
				url: '',
			}
		}
	}
	CustomTextOnChange = (text) => {
		console.log(text.target.value)
		fetch(`https://www.eventbriteapi.com/v3/events/${text.target.value}/?expand=venue`, {
			method: 'GET',
			headers: { "Authorization": "Bearer NUYQIUDIU6ZT27Y2ENIV" }
		})
			.then(res => res.json())
			.then(data => { this.setState({ EventChange: { name: data.name.text, imageUrl: data.logo.url, location: data.venue.name, date: data.start.local, ticketfee: data.is_free ? 'Free' : 'Not Free', url: data.url } }) })
			.catch(console.log)

	}

	render() {
		const { EventChange } = this.state
		return (
			<div className='transition' >
				<TextBox onchange={this.CustomTextOnChange} />
				<div className='event-change'>
					<Emoji symbol='&#128073;' label='left' />
					<div className='event-transition'>
						{EventChange.name ?
							<UpcomingEvents onclick={() => window.open(EventChange.url)} imgUrl={EventChange.imageUrl} name={EventChange.name} date={EventChange.date} ticketfee={EventChange.ticketfee} location={EventChange.location} />
							:
							null
						}

					</div>
					<Emoji symbol='&#128072;' label='right' />
				</div>
			</div>
		)
	}
}
