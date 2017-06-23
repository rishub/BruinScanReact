import React, { Component } from 'react';
import Graph from './graph.js'

class Bottom extends Component {

  render() {
    return (
      <div className="bottom">

      	<div className="title">
      		CS 111: Operating Systems
      	</div>
      	<div className="prereqs">
      		Prereqs: CS 31, CS 32
      	</div>


      	<div className="overview">

	      	<div className="body">

				<div className="labels">
					<div>Section</div>
					<div>Status</div>
					<div>Date/Time</div>
					<div>Location</div>
					<div>Instructor</div>
				</div>

				<div className="target">

					<div className="lec">
						<div className="data">
							<div>
								<span className="glyphicon glyphicon-triangle-right Lec1"
								onclick="showDiscussions('Lec1')"></span>
								Lec 1
							</div>
							<div>Open</div>
							<div className="tohide">MWF 1pm-2pm</div>
							<div className="tohide">Royce</div>
							<div>Eggert</div>
						</div>
						<div hidden className="data discussionLec1">
							<div className="disc">
								<input className="check" type="checkbox" name="{{ key }}" value="{{ key }}:{{ discussion }}" />
								Disc 1
							</div>
							<div>Open</div>
							<div className="tohide">MWF 1-2</div>
							<div className="tohide">Royce</div>
							<div>TA</div>
						</div>
					</div>

					<div className="lec">
						<div className="data">
							<div>
								<span className="glyphicon glyphicon-triangle-right Lec2"
								onclick="showDiscussions('Lec2')"></span>
								Lec 2
							</div>
							<div>Open</div>
							<div className="tohide">T TR 2-4</div>
							<div className="tohide">Franz</div>
							<div>Eggert</div>
						</div>
						<div hidden className="data discussionLec2">
							<div className="disc">
								<input className="check" type="checkbox" name="{{ key }}" value="{{ key }}:{{ discussion }}" />
								Disc 1
							</div>
							<div>Open</div>
							<div className="tohide">MWF 1-2</div>
							<div className="tohide">Royce</div>
							<div>TA</div>
						</div>
					</div>

				</div>

			</div>

			<hr />

			<div className="foot">

				<div className="leftFoot">
					<Graph />
				</div>

				<div className="rightFoot">
					<div id="sections">
						Lec 1: Lab 1<br />
						Lec 2: Lab 2
					</div>

					<button id="btn_scan">Scan</button>

					<button id="btn_clear">Clear</button>
				</div>

				{/*<form id="scan_form" action="/scan/SummerSessionA/lol" method="post">
					<input type="hidden" id="l" name="sections" value="" />
					<a onclick="loading()">
						<button className="btn" id="scan">Scan</button>
					</a>
				</form>*/}

			</div>

		</div>


	  </div>
    )
  }

}

export default Bottom;