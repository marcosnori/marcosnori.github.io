import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t31.0-8/221493_403251303055636_310383524_o.jpg?_nc_cat=109&_nc_ht=scontent.fbfh3-1.fna&oh=cf80b222cac70efda593125426edff1d&oe=5C7D70E6"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Marcos Nori</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>email@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Universidade Tecnológica Federal do Paraná"
              schoolDescription="Bacharelado em Engenharia de Software"
               />

            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Colégio Agricola Fernado Costa"
                 schoolDescription="Técnico Agricola"
                  />

            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Colégio Castro Alves"
                 schoolDescription="Técnico em Vendas"
                  />
            <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=" Senai"
                 schoolDescription="Técnico em Manutenção Industrial"
                  />
            <hr style={{borderTop: '3px solid #e22947'}} />
            
            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                    <Skills
                      skill="React"
                      progress={25}
                      />
                       <Skills
                      skill="Java"
                      progress={70}
                      />
                      <Skills
                      skill="C"
                      progress={30}
                      />
                      <Skills
                      skill="Excel"
                      progress={70}
                      />
                      <Skills
                      skill="Planejamento PCM"
                      progress={90}
                      />
                      <Skills
                      skill="Inglês"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
