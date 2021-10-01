import React, {
   Component
} from 'react';
import ParticlesBg from 'particles-bg';
import './index.css'
class Header extends Component {
   name = "予ヾ"
   description = "I do not know where to go, but I have been on the road"
   render() {
      return (
         <header id="home" >
            <ParticlesBg type="circle" />
            {/* <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">首页</a></li>
                  <li><a className="smoothscroll" href="#resume">文档</a></li>
                  <li><a className="smoothscroll" href="#contact">留言</a></li>
               </ul>
            </nav> */}


            <div className="row banner" >
               <div className="banner-text" >
                  <div className="title responsive-headline" >
                     {
                        this.name
                     }
                  </div>
                  <div className="description" >
                     {
                        this.description
                     }.
                  </div>

               </div>
            </div>
            <div className="row scroll">
               <a href="#list" className='fa fa-angle-down scroll-a'></a>
            </div>

         </header>
      );
   }
}

export default Header;