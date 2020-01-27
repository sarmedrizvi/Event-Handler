import React from 'react'
import './CreateEvent.scss'
import { BasicInfo } from '../../../Basic-Info/BasicInfo'
import { Location } from '../../../Location/Location'

export const CreateEvent = () => (
	<div className='create'>
		<div className='create-basic'>
			<BasicInfo />
			<Location/>
		</div>
	</div>
)