import React from "react"
import { Button, Form, FormControl } from 'react-bootstrap';
import File from './File';
import axios from 'axios';
/*onChangeHandler(e){
  let files=e.target.files
  console.warn("data files",files)

}*/
class Qform extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: null,
      qname: null,
      desc: null,
      ptemp: null,
      jtemp: null,
      sfile: null,
      stifile: null,
      stofile: null,
      tifile: null,
      tofile: null
    }
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onChangeHandlerS = event => {
    this.setState({
      sfile: event.target.files[0],
      loaded: 0,
    })
  }
  onChangeHandlerSti = event => {
    this.setState({
      stifile: event.target.files[0],
      loaded: 0,
    })
  }
  onChangeHandlerSto = event => {
    this.setState({
      stofile: event.target.files[0],
      loaded: 0,
    })
  }
  onChangeHandlerTi = event => {
    this.setState({
      tifile: event.target.files[0],
      loaded: 0,
    })
  }
  onChangeHandlerTo = event => {
    this.setState({
      tofile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    //console.log("app.js 24");
    var data = new FormData()
    // data.append('level',this.state.level)
    // data.append('qname',this.state.qname)
    // data.append('desc',this.state.desc)
    // data.append('ptemp',this.state.ptemp)
    // data.append('jtemp',this.state.jtemp)
    data.append('file', this.state.sfile)
    data.append('file', this.state.stifile)
    data.append('file',this.state.stofile)
    data.append('file',this.state.tifile)
    data.append('file',this.state.tofile)
    console.log(data.file);
    var obj={data:data,level:this.state.level,qname:this.state.qname,desc:this.state.desc,ptemp:this.state.ptemp,jtemp:this.state.jtemp};
    //console.log("27 app");
    //var self = this;
    axios.post("http://localhost:4000/upload", data, { // receive two parameter endpoint url ,form data 
    })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
  }

  render() {
    return (

      <Form>
        <Form.Group controlId="form">
          <Form.Label>Level</Form.Label>
          <Form.Control as="select" name="level" onChange={event => this.handleChange(event)} >
            <option>Easy</option>
            <option>Medium</option>
            <option>Difficult</option>
          </Form.Control><br />
          <Form.Label>Question Name :</Form.Label>
          <Form.Control type="text" placeholder="Enter Question Name" name="qname" onChange={event => this.handleChange(event)} /><br />
          <Form.Label>Tags :</Form.Label>
          <br />
          <Form.Label>Description :</Form.Label>
          <Form.Control as="textarea" rows="3" name="desc" placeholder="Question Description" onChange={event => this.handleChange(event)} />
          <Form.Label>Template :</Form.Label>
          <Form.Control as="textarea" rows="8" placeholder="Enter python template" name="ptemp" onChange={event => this.handleChange(event)} /><br />
          <Form.Control as="textarea" rows="8" placeholder="Enter java template" name="jtemp" onChange={event => this.handleChange(event)} />
          <Form.Label>Solution File :</Form.Label><br />
          <input type="file" name="file" onChange={this.onChangeHandlerS} />
          <Form.Label>Sample testcases Input File :</Form.Label><br />
          <input type="file" name="file" onChange={this.onChangeHandlerSti} />
          <Form.Label>Sample testcases Output File :</Form.Label><br />
          <input type="file" name="file" onChange={this.onChangeHandlerSto}/>
          <Form.Label>Testcases Input File :</Form.Label><br />
          <input type="file" name="file" onChange={this.onChangeHandlerTi}/>
          <Form.Label>Testcases Output File :</Form.Label>
          <input type="file" name="file" onChange={this.onChangeHandlerTo}/>
        </Form.Group><center>
          <Button variant="success" type="button" onClick={this.onClickHandler}>
            Submit
  </Button></center>
      </Form>

    )
  }

}

export default Qform