import React from 'react';
import '../stylesheets/Synopsis.css'
export function Synopsis(){
  return(
    <div className='container-synopsis'>
      <img className='game-image'
        src={require('../images/portada-octopath.jpg')}
        alt='front page octopath'/>
      <div className='container-text-synopsis'>
        <p className='game-name'>Octopath Traveler</p>
        <p className='realese-date'>July 13, 2018</p>
        <p className='synopsis-text'>Holi soy un placeholder</p>
      </div>
    </div>
  );
}
