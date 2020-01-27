import React from 'react'
import './Header-Component.scss'
import logo from '../../assets/log.png'
import { TextBox } from '../CustomTextBox/TextBox'
import { Emoji } from '../Emoji/Emoji'
import { withRouter } from 'react-router-dom'


const HeaderPart = ({ type, symbol,...otherProps }) => (
    <div className='header-part'>
        <Emoji symbol={symbol} />
        <span {...otherProps}>{type}</span>
    </div>
)

class Header extends React.Component {
    state = {
        scroll: 'top'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 300) {
            this.setState({ scroll: 'bottom' })
        } else {
            this.setState({ scroll: 'top' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    scrolling = () => {
        if (this.state.scroll === 'top')
            return 'mains'
        else
            return 'mains positionSticky'
    }

    render() {
        return (
            <div className={this.scrolling()}>
                <img src={logo} alt='' />
                <div className='main-header'>
                    <div className='part1'>
                        <TextBox />
                    </div>
                    <div className='part2'>
                        <HeaderPart type='Create Event' symbol='&#10010;' onClick={()=>this.props.history.push('/createEvent')} />
                        <HeaderPart type='Likes' symbol='&#9825;' />
                        <HeaderPart type='Tickets' symbol='&#9929;' />
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Header)
