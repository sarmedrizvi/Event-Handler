import React from 'react'
import { EventAdder } from '../../Event/EventAdder/EventAdder'
import { EventTransition } from '../../Event/EventTransition/EventTransition'
import { Footer } from '../../Footer/Footer';
import { Body } from '../../Body/Body';
import  Header  from '../../Header/Header-Component';

export const EventHome = () => (
	<div>
		<Header />
		<Body />
		<EventAdder />
		<EventTransition />
		<Footer />
	</div>
)