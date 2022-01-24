import React, { Component, Fragment } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return (
        <div style={{marginTop:30}} key={work.company}><h3>
          <a href={work.link}>{work.company}</a></h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
              {work.description.map((data)=>{
                  return <li>{data}</li>
              })}
            </ul>
            {work.tools && work.tools.length>0?(<h8>Skills:</h8>):null}
            <div style={{display:'flex', flexDirection:"row", flexWrap: 'wrap'}}>
              {work.tools && work.tools.map((data)=>{
                  return <div class="tools">{data}</div>
              })}
            </div>
        </div>
        )
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <h1><span>Education</span></h1>
          <div className="twelve columns">
            {education}
          </div>
        </div>
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      
   </section>
    );
  }
}

export default Resume;
