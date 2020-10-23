import React from 'react';
import {Button, Jumbotron, Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ParticlesBg from 'particles-bg'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedA: null,
      selectedB: null,
      //descript1: null,
      //descript2: null,
      //score : null,
      //description: null
    };
  
    this.getSelectedValue1 = this.getSelectedValue1.bind(this);
    this.getSelectedValue2 = this.getSelectedValue2.bind(this);
    //this.getSubmitForm= this.getSubmitForm.bind(this);
    this.onButtonPressed=this.onButtonPressed.bind(this);
  }
  

  handleChange = selectedChoice => {
    this.setState({ selectedChoice });
  };

  getSelectedValue1(event){

    var sign1 = event.target.value;
    this.setState({selectedA: sign1}, this.getData1);
    console.log(sign1);
  }

  getSelectedValue2(event){
    var sign2 = event.target.value;
    this.setState({selectedB: sign2}, this.getData2);
    console.log(sign2);
  }
  
  onButtonPressed() {
    // console.log(this.props);
    this.props.history.push('/result');
    this.props.handleChange(this.state.selectedA, this.state.selectedB);
  }

  render() {
    return(
      
        <div className="input text-center">
       <ParticlesBg type="tadpole" bg={true} />
        
        <Jumbotron fluid>
          <Container color="white">
            <h1>ZINDER</h1>  
            <p>Do the stars align?</p>
    <p>{this.props.tank}</p>
    <p>{this.props.zodiac}</p>
          </Container>
        </Jumbotron>
        <div className="selection">
            <div style={{display: "inline-grid"}}>
                <label for="signDrop" id="signDrop" class="form-horizontal" style={{color: "white"}}>Zodiac Sign</label>
                <select id="signDrop" onChange={this.getSelectedValue1}>
                    <option value="0" selected disabled hidden>Select</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>  
                </select>
            </div>

          <div className="divider"/>

          <div style={{display: "inline-grid"}}>
            <label for="signDrop2" id="signDrop2" class="form-horizontal" style={{color: "white"}}>Your Partner's</label>
            <select id="signDrop2" onChange={this.getSelectedValue2}>
                <option value="0" selected disabled hidden>Select</option>
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Sagittarius">Sagittarius</option>  
            </select>
          </div>
        </div>
        <div> <div className ="ndivider"/> </div>

        <div className ="text-center" >
        <Button variant="warning" class="mx-auto" onClick={this.onButtonPressed}>Submit </Button>

        {/* <Button variant="success" class="mx-auto" onClick={this.onButtonPressed} >Who is the zodiac killer?</Button> */}
        
        <div> <div className ="vdivider"/> </div>

        {/* <p>{this.state.descript1}</p>
        <p>{this.state.descript2}</p>

        <div><h1 style={{ color: 'white' }} >{this.state.score}</h1></div>
        <p>{this.state.description}</p> */}
  
    
        </div>
        </div>
        
      );
    }
  }
export default Home;