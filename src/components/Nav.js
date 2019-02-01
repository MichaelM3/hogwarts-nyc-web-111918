import piggy from '../porco.png'
import React from 'react'


class Nav extends React.Component {

 handleClick = e => {
	 // to get nativeEvent use e.nativeEvent amazing! if you log the e is the synthetic React Event!
	console.log(e.target.value, 'hello from Nav');
	this.props.filteredHog(e)

}

render() {
	return (
			<div className="navWrapper">
			{console.log(this.props)}
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<select onChange={this.handleClick}> {/* You would add the event handler on the select tag! */}
					<option value="all">See All the Greased Hogs!</option>
					<option value="greased">Greased</option>
				</select>
			</div>
		)
	}
}

export default Nav
