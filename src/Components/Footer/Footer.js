import React from 'react'

const Footer = ({children,total}) => {

    return (
        <div>
            {children}
            <h1>{total}</h1>
        </div>
    )
}
Footer.defaulProps={
    total:"1000 $"
}
export default Footer
