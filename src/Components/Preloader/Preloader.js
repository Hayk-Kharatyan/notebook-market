import React, { useState, useEffect } from 'react'
import "./Preloader.css"
export default function Preloader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader ${loading ? 'active' : 'hide'}`}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
