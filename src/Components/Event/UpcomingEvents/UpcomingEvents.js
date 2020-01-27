import React from 'react'
import './UpcomingEvents.scss'
export const UpcomingEvents = ({ imgUrl, name, date, location, ticketfee, onclick }) => (
	<div className='upcoming' >
		<div className='upcoming-event' onClick={onclick}>
			<img alt='' src={imgUrl} />
		</div>
		<button className={ticketfee==='Free' ? 'FreeButton' : 'display-none'}>Free</button>
		<div className='logos'>
			<i class="fa fa-share" aria-hidden="true"></i>
			<i class="fa fa-heart-o" aria-hidden="true"></i>
		</div>
		<div className='upcoming-event-detail'>
			<span className='date'>{date}</span>
			<span>{name}</span>
			<span>{location}</span>
		</div>
	</div>
)