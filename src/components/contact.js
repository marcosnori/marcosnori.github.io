import React, { Component } from 'react';
import { Grid, Cell,Button } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{marginBottom:'20px'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marcos Nori</h2>
            <img
              src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/13887037_1067754176605342_6379015927474613515_n.jpg?_nc_cat=100&_nc_ht=scontent.fbfh3-1.fna&oh=e65b74e6a4970cefa3de97299a9df663&oe=5C467EAA"
              alt="avatar"
              style={{height: '250px', marginLeft: '135px'}}
                />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
          <Cell col={6}>
            <h2>Contatos</h2>
            <hr/>
            <div className="contact-list" >
               <form
                    action="https://formspree.io/marcosnorix@hotmail.com"
                    method="POST"
                    className="row"
                      >
                        <div className="col-lg-8" style={{ margin: '0 auto' }}>
                          <div className="row">
                            <div className="form-group  col-md-6">
                              <label htmlFor="_replyto">Email</label>
                              <input
                                type="email"
                                name="_replyto"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="name">Name</label>
                              <input name="name" className="form-control" required />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                              className="form-control"
                              name="message"
                              rows="10"
                              required
                            />
                          </div>
                          <div className="text-right">
                            
                            <Button raised ripple type="submit"> Enviar </Button>
                          </div>
                        </div>
                  </form>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
