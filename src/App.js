import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button, Col, Row, Form } from 'react-bootstrap';
import {useState} from 'react';

function App() {

    const [total, setTotal] = useState("");

    const handleClick = (e) => {
       setTotal(total.concat(e.target.name));
    } 


    const Clear = () => {
      setTotal("");
    }


    const Back = () => {
      setTotal(total.slice(0, total.length - 1));
    }

    const result = () => {
      try{
        setTotal(eval(total).toString());
      }catch(err){
        setTotal("Error");
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-keypad">
          <Card>
        <Container>
        <Col>
        <Col>
        <Form>
            <Form.Control type = "text" value = {total}>
               
            </Form.Control>
        </Form>
        </Col>
          <Col>
        <Button name = "1" onClick = {handleClick} className = "m-1">1</Button>
        <Button name = "2" onClick = {handleClick}  className = "m-1">2</Button>
        <Button name = "3" onClick = {handleClick}  className = "m-1">3</Button>
         </Col>
         <Col>
        <Button name = "4" onClick = {handleClick}  className = "m-1">4</Button>
        <Button name = "5" onClick = {handleClick}  className = "m-1">5</Button>
        <Button name = "6" onClick = {handleClick}  className = "m-1">6</Button>
        </Col>
        <Col>
        <Button name = "7" onClick = {handleClick}  className = "m-1">7</Button>
        <Button name = "8" onClick = {handleClick}  className = "m-1">8</Button>
        <Button name = "9" onClick = {handleClick}  className = "m-1">9</Button>
        </Col>
        <Col>
        <Button name = "0" onClick = {handleClick}  className = "m-1">0</Button>
        <Button name = "+" onClick = {handleClick}  className = "m-1">+</Button>
        <Button name = "-" onClick = {handleClick}  className = "m-1">-</Button>
        </Col>
        <Col>
        <Button name = "*" onClick = {handleClick}  className = "m-1">*</Button>
        <Button name = "/" onClick = {handleClick}  className = "m-1">/</Button>
        <Button name = "." onClick = {handleClick}  className = "m-1">.</Button>
        </Col>
        <Col>
        <Button id = "total" onClick = {result}  className = "m-1">Equal</Button>
        <Button onClick = {Clear} className = "m-1">Clear</Button>
        <Button onClick = {Back} className = "m-1"> BACK </Button>
        </Col>  
        </Col>   
        </Container>
        </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
