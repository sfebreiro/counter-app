import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {

        return(
        <>
        {/* <code> {JSON.stringify(newMessage)} </code> */}
        <h1 data-testid="test-title">{title}</h1>
        <p>{subtitle}</p>
        <p>{subtitle}</p>
        <p>{name}</p>
        </>
    )
} 


FirstApp.protTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'No hay subtítulo',
    name: 'Samu'
}
