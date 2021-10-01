import React, { Component } from 'react'
import ReactGA from 'react-ga';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Content from './Components/Content'
import Contact from "./Components/Contact/index";
import BlogList from './Components/BlogList/index';
import axios from 'axios';
import MyNav from './Components/MyNav';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      curBlog: {},
      page: this.getFromUrl('page')
    }
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }
  getFromUrl(str) {
    let ks = window.location.search.slice(1).split('&')
    let target = 1
    ks.forEach(item => {
      if (item.split('=')[0] == str) {
        target = item.split('=')[1]
      }
    })
    return parseInt(target)
  }
  componentDidMount() {
    this.getData(0)

    axios.get('/api/blog/' + this.getFromUrl('bid')).then(res => this.setState({ curBlog: res.data }))
  }
  getData = (ch) => {
    let page = this.state.page
    if ((page + ch) < 1)
      return;

    axios.get(`/api/blogs/${page + ch}?limit=6`).then(res => {
      if (res.data.length > 0)
        this.setState({ blogs: res.data, page: page + ch })
    })

  }

  changeCurBlog = (blog) => {
    this.setState({ curBlog: blog })
  }

  render() {
    return (
      <>
        <Header />
        <BlogList blogs={this.state.blogs} page={this.state.page} changeCurBlog={this.changeCurBlog} getData={this.getData} />
        <Content blog={this.state.curBlog} />
        <Contact />
        <Footer />
        <MyNav />
      </>
    )
  }
}
