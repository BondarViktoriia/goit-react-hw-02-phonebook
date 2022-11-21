import PropTypes from 'prop-types';

const Section = ({text}) => {
    return <h2> {text} </h2>
}

Section.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Section