import React, { Component } from 'react';
import './App.css';

class Gallery extends Component{
	constructor(props) {
		super(props);
		this.state = {
			playingUrl: '',
			audio: null,
			playing: false,
			flag: 1
		}
	}
	playAudio(previewUrl){
			let audio = new Audio(previewUrl);
			if(!this.state.palying && this.state.flag ===1){
				audio.play();
				this.setState({
					palying: true,
					playingUrl: previewUrl,
					audio,
					flag: 1
				})
			} else{
				if(this.state.playingUrl === previewUrl && this.state.flag === 1)
				{
					this.state.audio.pause();
					this.setState({
						playingUrl: '',
						playing: false,
						flag: 0
					})
				}else if(this.state.playingUrl === previewUrl && this.state.flag === 0){
					this.state.audio.pause();
					audio.play();
					this.setState({
						playing: true,
						playingUrl: previewUrl,
						audio,
						flag: 1,
					})

				}else {
					this.state.audio.pause();
					audio.play();
					this.setState({
						playing: true,
						playingUrl: previewUrl,
						audio,
						flag: 1
					})
				}
			}
		}
	render(){
		const { tracks } = this.props;
		return(
			<div>
				{tracks.map((track,key) => {
					console.log('track', track);
					const trackImg = track.album.images[0].url;
					return(
						<div
						key={key}
						className="track"
						onClick={() => this.playAudio(track.preview_url)}
						>
						<img
						src={trackImg}
						className="track-img"
						alt="track"
						/>
						<div className="track-play">
							<div className="track-play-inner">
								{
									this.state.playingUrl === track.preview_url
									? <span>| |</span>
									: <span>&#9654;</span>
								}
								
							</div>
								}
						</div>
						<p className="track-text">
							{track.name}
						</p>
						</div>
						)
				})}
			</div>
			);
	}
}

export default Gallery;