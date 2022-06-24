import React from 'react';
import PropTypes from 'prop-types';

import {
    InputGroup,
    Input
} from './../../../../components';

// eslint-disable-next-line react/display-name
const AddonInputFR = React.forwardRef((props, ref) => (
    <InputGroup className={props.className}>
        <i className="fa fa-calendar-o"></i>
        <Input
            onClick={ props.onClick }
            onChange={ props.onChange }
            value={ props.value }
            ref={ ref }
        />
    </InputGroup>
));
AddonInputFR.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
}

export { AddonInputFR as AddonInput };
