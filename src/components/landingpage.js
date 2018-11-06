import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%',height:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t31.0-8/14444616_1110166089030817_3861737971101144153_o.jpg?_nc_cat=105&_nc_ht=scontent.fbfh3-1.fna&oh=956f7f8484c521c262334bf8d1116136&oe=5C4EA24E"
              alt="avatar"
              className="avatar-img"
              style={{padding:'30px',borderRadius:'50%', width:'300px', height:'300px'}}
              
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Excel | Java | C | Vendas</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com/nori" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/marcos-nori" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="" rel="noopener noreferrer" target="_blank">
             <i class="fa fa-envelope" aria-hidden="true" />
          </a>

          {/* Download Curriculo */}
          <a href="/portifolio-marcos-nori.pub" download="Curriculo-Nori" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-download" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
