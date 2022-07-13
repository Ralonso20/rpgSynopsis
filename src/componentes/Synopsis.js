import React from 'react';
import '../stylesheets/Synopsis.css'

export function Synopsis(props){
  return(
    <div className='container-synopsis'>
      <img className='game-image'
        src={require(`../images/portada-${props.imageName}.jpg`)}
        alt='front page octopath'/>
      <div className='container-text-synopsis'>
        <p className='game-name'> {props.name}</p>
        <p className='realese-date'>{props.realeseDate}</p>
        <p className='synopsis-text'>"{props.textSynopsis}"</p>
      </div>
    </div>
  );
}
