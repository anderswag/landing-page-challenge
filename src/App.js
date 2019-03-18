import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return <div className='App'>{this.renderLeft()}</div>
	}

	renderLeft() {
		return (
			<div className='App_information'>
				<div className='App_mainText'>
					<p className='App_mainText_heading'>
						Ready to see the <span>world</span>?
					</p>
					<p className='App_mainText_subText'>
						Get to where you're meant to be
					</p>
					{this.renderButton()}
				</div>
			</div>
		)
	}

	renderButton() {
		return (
			<div className='App_buttonContainer'>
				<p>Let's go</p>
			</div>
		)
	}
}

export default App
