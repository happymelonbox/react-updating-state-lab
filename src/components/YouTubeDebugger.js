// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    changeBitRate = () => {
        this.setState()
    }

    changeResolution = () => {
        this.setState({
           settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    render(){
        return (
            <button className="bitrate" onClick={this.changeBitRate}>Change BitRate</button>,
            <button className="resolution" onClick={this.changeResolution}></button>
        )
    }
}

export default YouTubeDebugger