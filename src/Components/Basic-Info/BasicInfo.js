import React from 'react'
import { LimitedTextBox } from '../CustomTextBox/LimitedTextBox/LimitedTextBox'
import './BasicInfo.scss'
import Selected from '../Select-Component/Select'
import basic from '../../assets/Basic.JPG'
import { Emoji } from '../Emoji/Emoji'


export class BasicInfo extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			tags: [],
			'Event Title *': '',
			'Enter tag': '',
			Organizer: ''
		}
	}
	onTextChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	RemoveElement = (array, element) => {
		const index = array.indexOf(element)
		array.splice(index, 1)
		return array;
	}

	render() {

		const addTag = () => {
			if ([...this.state.tags].length < 10) {
				[...this.state.tags].includes(this.state["Enter tag"]) ? alert('already') : this.setState({ tags: [...this.state.tags, this.state["Enter tag"]] })
			}
			else {
				alert('Not more than 10')
			}

			this.setState({ 'Enter tag': '' })
		}
		const handleKeyDown = (e) => {
			if (e.key === 'Enter') {
				addTag()
			}
		}
		const TagRemove = ({ tag }) => (
			<div className='tag-remove'>
				<p>{tag}</p>
				<Emoji label={'Cross'} symbol='&#10006;' onClick={() => this.setState({ tags: this.RemoveElement([...this.state.tags], tag) })} />
			</div>
		)

		return (
			<div className='basic' >
				<img src={basic} alt='' />
				<div className='basic-info'>
					<h1 className='basic-info-title'>Basic Info</h1>
					<span className='basic-info-sub'>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</span>
				</div>
				<LimitedTextBox onTextChange={this.onTextChange} value={this.state["Event Title *"]} name={'Event Title *'} placeholder={'Be Clear and descriptive'} lefttext={'Title is required'} righttext={75} />
				<div className='basic-select'>
					<Selected name='Type' />
					<Selected name='Category' />
				</div>
				<div className='tag'>
					<div className='tags'>
						<LimitedTextBox onEnter={handleKeyDown} value={this.state["Enter tag"]} onTextChange={this.onTextChange} name={'Enter tag'} placeholder={'Add keywords to your events'} tag lefttext={`${this.state.tags.length}/10 tags`} righttext={25} />
						<button onClick={addTag}
						>Add</button>
					</div>
					<div className='tags-name'>
						{this.state.tags.map(item => <TagRemove key={item} tag={item} />)}
					</div>
					<LimitedTextBox value={this.state.Organizer} onTextChange={this.onTextChange} name={'Organizer'} placeholder={'Tell attendees who is organizing this event'} lefttext={''} righttext={100} />
				</div>
			</div>
		)
	}
}
