import React from 'react';
import data from './data.json';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedA: null,
      selectedB: null,
      descript1: null,
      descript2: null,
      score : null,
      description: null
    };
      
  }

  getData1(){
    for(var i of data.Zodiac) {
      if(this.props.zodiac1 === i.zodiac_name) {
        console.log(i.info);
      }
    }
  }

  getData2(){
    for(var i of data.Zodiac) {
      if(this.props.zodiac2 === i.zodiac_name) {
        console.log(i.info);
      }
    }
  }
  
  getDescription1()
  {
    for (var z of data.Zodiac)
    {
      if (z.zodiac_name === this.props.zodiac1)
      {
        for (var y of z.info)
        {
          return y.attributes;
        }
      }
    }
  }

  getDescription2()
  {
    for (var z of data.Zodiac)
    {
      if (z.zodiac_name === this.props.zodiac2)
      {
        for (var y of z.info)
        {
          return y.attributes;
        }
      }
    }
  }

  getScore()
  {
    for (var z of data.Zodiac)
    {
      if (z.zodiac_name === this.props.zodiac2)
      {
        for (var y of z.compatibilies)
        {
          if (y.zodiac_partner === this.props.zodiac1) 
          {
            return (y.score);
          } 
        }
      }
    }
  }
  
  getDescription()
  {
    for (var z of data.Zodiac)
    {
      if (z.zodiac_name === this.props.zodiac2)
      {
        for (var y of z.compatibilies)
        {
          if (y.zodiac_partner === this.props.zodiac1) 
          {
            return y.description;
          }
      }
    }
  }
}

  render() {
      return (
          <div>
             <ParticlesBg type="cobweb" bg={true} />
             <p><h1>Your Results</h1></p>
            <Container>
            <Row>
               <Col xs={6}>
               <p><h3>{this.props.zodiac1}</h3></p>
               <p>{this.getDescription1()}</p>
               </Col>
              <Col xs={6}>
              <p><h3>{this.props.zodiac2}</h3></p>
              <p>{this.getDescription2()}</p>
              </Col>
            </Row>
           </Container>
           
           <div className="compatibility">
            <div><h1 style={{ color: 'white'}} >Compatibility Score: {this.getScore()}</h1></div>
            <p style={{ color: 'white' }}> {this.getDescription()}</p> 
          </div>
          
            <div> <div className ="ndivider"/> </div>
            <Button variant="warning" href="/" >Try Again</Button>
            <div className="divider"/>
            <Button variant="warning" class="mx-auto" href="https://marsc.dev/">Mars Hotline</Button>
          </div>
      )
  }
}
export default Results;