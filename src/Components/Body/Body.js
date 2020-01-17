import React from 'react'
// import { InputButton } from '../Input-Button/Button'
import './Body.scss'
import background1 from '../../assets/background1.jpg'
import background2 from '../../assets/background2.jpg'
import background3 from '../../assets/background3.jpg'


let i = 0;
export class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            background: background3
        }

    }

    componentDidMount() {
        setInterval(() => {
            if (i === 0) {
                this.setState({ background: background1 })
                i = 1;
            }
            else if (i === 1) {
                this.setState({ background: background3 })
                i = 2;
            }
            else {
                this.setState({ background: background2 })
                i = 0;
            }
        }, 3000);
    }

    render() {
        const divstyle = {
            background: `white url(${this.state.background})  center / cover no-repeat fixed`,
        }

        return (
            < div id='body' >
                <div className='main-body' style={divstyle} >
                    <div className='main-item'>
                        <h1 className='main-title'>“Any time is a good time to start a company.” -Ron Conway</h1>
                        {/* <InputButton OnClick={raiseInvoiceClicked} >Join Us</InputButton> */}
                    </div>
                </div>
            </div >
        )
    }
}

