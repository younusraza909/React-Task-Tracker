import React from 'react'
import PropTypes from 'prop-types'


const Header = () => {
    return (
        <header>
            <h1>Task Tracker</h1>
        </header>
    )
}

Header.propTypes={
    title:PropTypes.string
}

export default Header
