import React, { Component } from 'react';
import world from '../images/world.png'
import notepad from '../images/note.png'

class Top extends Component {

  render() {
    return (
      <div className="top">

      	<div className="subjects">
	        <div className="head">
	        	<img className="icon" src={world} alt="" />
		        Subject Areas
		        <hr />
		        <input type="text" className="search" 
		        onkeyup="searchFunction('subjects')" placeholder="Search..." />
	        </div>

	        <div className="body">
			  <select size="5" id="subjects">
			      	<option>subject1</option>
			      	<option>subject2</option>
			      	<option>subject3</option>
			      	<option>subject4</option>
			      	<option>subject5</option>
			      	<option>subject6</option>
			      	<option>subject7</option>
			  </select>
	        </div>
	    </div>

	    <div className="courses">

	        <div className="head">
	        	<img className="icon" src={notepad} alt="" />
				Courses
				<hr />
				<input type="text" className="search"
				onkeyup="searchFunction('classes')" placeholder="Search..." />
	        </div>

	        <div className="body">
	          <select size="5" id="classes">
		          	<option>course1</option>
		          	<option>course2</option>
		          	<option>course3</option>
		          	<option>course4</option>
		          	<option>course5</option>
		          	<option>course6</option>
		          	<option>course7</option>
	          </select>
	        </div>

	    </div>


    </div>
    )
  }

}

export default Top;