import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>
                Hello, {props.title}! Welcome to Travel.Init App!
            </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Travel.Init App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header