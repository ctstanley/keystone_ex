var React = require('react');
var Scroll = require('react-scroll');
var VideoPlayer = require('videoplayer');

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;

var SinglePage = React.createClass({
	componentDidMount: function() {
		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments);
		});
	},
	componentWillUnmount: function() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	},
	render: function() {
		return (
			<div>
				 <div class="navbar-fixed">
    				<nav>
      					<div class="nav-wrapper">
        					<a href="#!" class="brand-logo">Logo</a>
        					<ul class="right hide-on-med-and-down">
				                <li><Link activeClass="active" className="test1" to="VideoPlayer" spy={true} smooth={true} duration={500}>Video</Link></li>
				                <li><Link activeClass="active" className="test2" to="Gallery" spy={true} smooth={true} duration={500}>Gallery</Link></li>
				                <li><Link activeClass="active" className="test3" to="D3" spy={true} smooth={true} duration={500}>Data Visualization</Link></li>
				        	</ul>
      					</div>
    				</nav>
  				</div>
		        <Element name="VideoPlayer" className="element">
		          <VideoPlayer />
		        </Element>

		        <Element name="Gallery" className="element">
		          test 2
		        </Element>

		        <Element name="D3" className="element">
		          test 3
		        </Element>

			</div>
		);
	}
});

module.exports = SinglePage;