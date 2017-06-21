import React, { Component } from 'react';
import Top from '../components/Top.js'
import Bottom from '../components/Bottom.js'

class Scan extends Component {

  render() {
    return (
      <div className="wrapper">

      		<div className="term">
	     		<select>
				  <option>Summer Session A</option>
				  <option>Summer Session C</option>
				  <option>Fall</option>
				</select>
			</div>

         	<Top />

         	<Bottom />

      </div>
    )
  }

}

export default Scan;