import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'

export default function Content(props) {

    const [data, setData] = useState('')
    useEffect(() => {
        if (props.blog.src) {
            axios.get(props.blog.src).then(res => setData(res.data))
        }
    }, [props.blog])

    function getHtml() {
        return micromark(data, {
            allowDangerousHtml: true,
            extensions: [gfm()],
            htmlExtensions: [gfmHtml]
        })
    }

    return (
        <section id='content' className="container">
            <div className="row" style={{ padding: '0 15px' }} dangerouslySetInnerHTML={{ __html: getHtml() }}>

            </div>
            <div className="alert alert-info" role="alert">
                文章到此结束啦，在下方留下你想说的话吧！
            </div>
        </section>

    )
}
