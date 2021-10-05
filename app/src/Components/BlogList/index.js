import React, { useState, useEffect } from 'react'

import './index.css'

export default function BlogList(props) {

    const [pageInput, setPageInput] = useState(props.page)

    useEffect(() => {
        setPageInput(props.page)

    }, [props.page])

    function handleClick(blog) {
        window.location.href = '?bid=' + blog.id + '&page=' + props.page + '#content'
        props.changeCurBlog(blog)
    }
    function getList() {
        if (props.blogs.length > 0) {
            return props.blogs.map(item => {
                let time = new Date(parseInt(item.created))
                return (
                    <div onClick={() => handleClick(item)} key={item.id} className="blog-item">
                        <p className='item-title text-overflow'>{item.title}</p>
                        <p className="item-created text-overflow">{time.toLocaleString()}</p>
                    </div>
                )
            })
        }

    }
    function handlePageChange() {
        let target = 1
        window.location.search.slice(1).split('&').forEach(item => {
            if (item.split('=')[0] == 'bid') {
                target = item.split('=')[1]
            }
        })
        window.location.href = '?bid=' + target + '&page=' + pageInput + '#list'
    }

    return (
        <section id='list' className="first-section">
            <div className="container">
                <div className="row blog-box">
                    {
                        getList()
                    }
                </div>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button className='btn btn-light' onClick={() => props.getData(-1)}>上一页</button>
                    <div className="input-group" >
                        <input type="text" value={pageInput} onChange={(e) => setPageInput(e.target.value)} className="form-control" style={{ width: '4rem' }} aria-describedby="basic-addon2" />
                        <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={() => handlePageChange()}>跳转</span>
                    </div>

                    <button className='btn btn-primary' onClick={() => props.getData(1)}  >下一页</button>
                </div>
            </div>
        </section>
    )
}
