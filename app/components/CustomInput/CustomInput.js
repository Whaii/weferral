import React from 'react';
import classNames from 'classnames';
import { Input } from 'reactstrap';

const Input = (props) => {
    const { className, ...otherProps } = props;
    const inputClass = classNames(className, {
        'custom-control-empty': !props.label
    });

    return (
        <Input className={ inputClass } { ...otherProps } />
    );
}
Input.propTypes = { ...Input.propTypes };

export { Input };
