import React from 'react'
import './BodySide.scss'
import { DropDown } from '../../DropDown/DropDown'

export const BodySide = () => (
	<div className='dropdown-side'>
		<span className='side-text'>I want to go out</span>
		<DropDown Text={'Any Date'} />
		<span className='side-text'>In</span>
		<DropDown Text={'Location'} />
		<span className='side-text'>And I'm in the mood for</span>
		<DropDown Text={'Anything'} />
		<span className='fa fa-arrow-right right-button' aria-hidden="true" ></span>
	</div>
)