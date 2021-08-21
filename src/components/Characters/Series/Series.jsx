import React from 'react';
import PropTypes from 'prop-types';

const Series = ({series}) => {

    const arr = series.map((element) => {
        return element.resourceURI
    })

    console.log(arr)

    return (
        <div>
            Series
        </div>
    );
};

Series.propTypes = {};

export default Series;