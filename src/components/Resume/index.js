import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import './default.css';
import './layout.css';
import './magnific-popup.css';
import './media-queries.css';
import { getFirestore ,doc,getDoc} from "firebase/firestore"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    this.firestore = getFirestore()
    
  }

  getResumeData(){
    try {
        const docRef = doc(this.firestore, "resume", "heyitsaif");
        const docSnap = getDoc(docRef);
        console.log(docSnap)
        docSnap.then((docSnap)=>{
            if (docSnap.exists()) {
                this.setState({resumeData: JSON.parse(docSnap.data().data)});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })

      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
