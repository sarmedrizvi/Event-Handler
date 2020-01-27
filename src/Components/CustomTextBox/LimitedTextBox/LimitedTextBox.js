import React from 'react'
import './LimitedTextBox.scss'


export class LimitedTextBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textBoxHover: false,
			
		}
	}

	render() {
		const { name, placeholder, tag, righttext, lefttext, onTextChange,onEnter,value } = this.props
		
		const onInputChange = (event) => {
			onTextChange(event)
			event.target.value !== '' ?
				this.setState({ textBoxHover: false })
				:
				this.setState({ textBoxHover: true })
		}



		return (
			<div className='limited-textbox'>
				<div className='text'>
					<span className={`${this.state.textBoxHover ? 'alert-text' : ''} event-title`}>{name}</span>
					<input name={name} maxLength={righttext} onKeyDown={onEnter} className={`${this.state.textBoxHover ? 'alert-input' : ''}`} type='text' placeholder={placeholder} onChange={onInputChange} value={value} />
				</div>
				<div className='subtitles'>
					<span className={`${tag ? 'tag-text' : this.state.textBoxHover ? 'left-text alert-text' : 'display-none alert-text'} `}>{lefttext}</span>
					<span className='right-text'>{value.length}/{righttext}</span>
				</div>
			</div>
		)
	}
}