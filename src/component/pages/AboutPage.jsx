import React from 'react'
import Card from '../shared/Card'

function AboutPage() {
  return (<Card>
    <div className='about'>
      <h1>About this project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui sint accusamus hic, architecto unde natus, possimus illum suscipit ipsum, laborum tempore. Nemo?</p>
      <p>version: 1.0.0</p>
      <p>
        <a href="/">back to home</a>
      </p>
    </div>
    </Card>
  )
}

export default AboutPage