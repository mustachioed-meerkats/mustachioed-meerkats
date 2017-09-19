import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SentimentChart from './SentimentChart.jsx';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SentimentAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStory: {}
    };
    this.handleSelectStory = this.handleSelectStory.bind(this);
  }

  componentWillMount() {
    var stories = this.props.userStories;
    var displayIndex = 0;
    for (var i = 0; i < stories.length; i++) {
      if (stories[i].default_display) {
        displayIndex = i;
      }
    }
    this.setState({
      currentStory: stories[displayIndex]
    });
  }

  handleSelectStory(eventKey) {
    this.setState({
      currentStory: this.props.userStories[eventKey]
    });
  }

  render() {
    return (
      <div>
        <DropdownButton onSelect={this.handleSelectStory} bsStyle='primary' title={this.state.currentStory.title} id={0}>
          {this.props.userStories.map((story, index) => {
            return (
              <MenuItem 
              eventKey={index} 
              key={index}
              >{story.title}</MenuItem>);
          })}
        </DropdownButton>
        <SentimentChart story={this.state.currentStory}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userStories: state.user.stories
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentimentAnalysis);