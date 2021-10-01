import React, { useEffect, useState } from 'react'

import './index.css'
export default function MyNav() {
    const [state, setState] = useState(false)

    useEffect(() => {
        document.onscroll = (e) => {
            if (document.documentElement.scrollTop >= window.innerHeight)
                setState(true)
            else setState(false)
        }

    }, [])
    return (
        <div className="my-nav" style={{ display: state ? 'block' : 'none' }} >
            <div className="nav-item">
                <a href="#list" className="fa fa-caret-up" title="列表" ></a>
            </div>
            <div className="nav-item">
                <a href='#content' className="fa fa-wikipedia-w" title="正文"></a>
            </div>
            <div className="nav-item">
                <a href="#ct" className="fa fa-caret-down" title="联系"></a>
            </div>
        </div>
    )
}
