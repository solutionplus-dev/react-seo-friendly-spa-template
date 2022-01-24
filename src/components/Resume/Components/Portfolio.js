import React, { Component, Fragment } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var portfolio = this.props.data.projects.map(function(projects){
        return (
          <div className='item'>
            <div class='images'>
            {projects.images.map((ele)=>{
              return(<img class="image" src={ele}/>)
            })}
            </div>
            <div class="projects" key={projects.title}>
              <h3><a href={projects.url || ''}>{projects.title}</a></h3>
              <p className="info">{projects.subtitle}
              {projects.date?
                (<Fragment><span>&bull;</span><em className="date">{projects.date}</em></Fragment>)
                :null}
              </p>
              <p>{projects.description}</p>
              <ul>
                {projects.tools && projects.tools.map((data)=>{
                    return <li>{data}</li>
                })}
              </ul>
              {projects.tools && projects.tools.length>0?(<h8>Skills:</h8>):null}
              <div style={{display:'flex', flexDirection:"row", flexWrap: 'wrap'}}>
                {projects.tools && projects.tools.map((data)=>{
                    return <div class="tools">{data}</div>
                })}
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
       <h1><span>Portfolio</span></h1>

        <div className="portfolio-seciton">
          {portfolio}
        </div>
      </div> 
   </section>
    );
  }
}

export default Portfolio;
