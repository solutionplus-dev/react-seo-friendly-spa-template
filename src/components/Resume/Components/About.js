import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data.main) {
      var resume = this.props.data.resume
      console.log(resume)
      var main = this.props.data.main
      var name = main.name;
      var profilepic= main.image;
      var bio = main.bio;
      var street = main.address.street;
      var city = main.address.city;
      var state = main.address.state;
      var zip = main.address.zip;
      var phone = main.phone;
      var email = main.email;
      var resumeDownload = main.resumedownload;


        var skills = resume.skills.map(function(skills){
          var className = 'bar-expand '+skills.name.toLowerCase();
          return <div class="item" 
        ><em style={{flex:2}}>{skills.name}</em><li key={skills.name}><span style={{width:skills.level}}className={className}></span></li></div>
        })
    }
   

    return (
      <div>
        
      <div style={{ display: "flex", flexDirection: "row", background:'#f4f7fb' }}>
        
        <section id="about">
          <div className="row">
               
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Tim Baker Profile Pic"
              />
              
            </div>
            
            
            <div className="nine columns main-col">
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <h2>{name}</h2>
                <div >
                <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                </a>
                <a style={{marginLeft:'10px'}}href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Hire Me
                </a>
                </div>
                </div>
                <p>{bio}</p>
              
            </div>
            
          </div>
        </section>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>
        <div className="columns main-col">
          <div className="bars">
              <div className="skills">
              {skills}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
