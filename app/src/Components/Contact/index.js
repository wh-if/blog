import axios from 'axios';
import React, { Component, createRef } from 'react';

class Contact extends Component {
   constructor(props) {
      super(props)
      this.formRef = createRef()
   }

   handleSend = () => {
      let formData = new FormData(this.formRef.current);
      axios.post('/api/msg', {
         id: '',
         name: formData.get('name'),
         time: new Date().toLocaleString(),
         msg: formData.get('message'),
         email: formData.get("email")
      }).then(res => {
         this.formRef.current.reset()
         alert(res.data)
      })
   }
   render() {

      return (
         <section id='ct' className="sixth-section">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="row">
                        <form id="contact" ref={this.formRef} action="" method="post">
                           <div className="col-md-6">
                              <fieldset>
                                 <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                              </fieldset>
                           </div>
                           <div className="col-md-6">
                              <fieldset>
                                 <input name="email" type="email" className="form-control" id="email" placeholder="Your email..."
                                    required="" />
                              </fieldset>
                           </div>
                           <div className="col-md-12">
                              <fieldset>
                                 <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..."
                                    required></textarea>
                              </fieldset>
                           </div>
                           <div className="col-md-12">
                              <fieldset>
                                 <button type="button" onClick={this.handleSend} className="btn">Send Message</button>
                              </fieldset>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="right-info">
                        <ul>
                           <li><span><i className="fa fa-envelope"></i>whif@foxmail.com</span></li>
                           <li><span><i className="fa fa-qq"></i>884923319</span></li>
                           <li><span><i className="fa fa-map-marker"></i>湖南·岳阳</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section >
      );
   }
}

export default Contact;
