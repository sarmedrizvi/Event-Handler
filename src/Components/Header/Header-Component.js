import React from 'react'
import './Header-Component.scss'
import logo from '../../assets/log.png'
export class Header extends React.Component {
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
            return 'main-header'
        else
            return 'main-header positionSticky'
    }

    render() {
        return (

            <div className={this.scrolling()}>
                <img src={logo} alt='' />
                <div className='Text'>
                    <span className='main-title'>Event Handler</span>
                    <ul className={'main-points'}>

                        <li className='point'><a href='#body'>Home</a></li>
                        <li className='point' ><a href='#about'>About Us</a></li>
                        <li className='point'><a href='#portfolio'>Events</a></li>
                        {/* <li className='point show'><a href='#services'>Services</a></li> */}
                        {/* <li className='point show'><a href='#testimonial'>Testimonials</a></li> */}
                        {/* <li className='point show'><a href='#'>Blogs</a></li> */}
                        <li className='point'><a href='#contactus'>Contact</a></li>
                        {/* <li className='point icon show' onClick={this.MenuDown}><span className="fa fa-bars fa-2x">
                        </span></li> */}
                    </ul>

                </div>
            </div>
        )
    }
}