import React from 'react';
import PropTypes from 'prop-types';
import {
    Input,
    InputGroup,
    Button,
} from './../../../../components';

export class CustomSearch extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        onSearch: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onSearch(this.state.value);
        }
    }

    render() {
        return (
            <InputGroup className={ this.props.className } size="sm">
                <i className="fa fa-search fa-fw"></i>
                <Input
                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                    value={ this.state.value }
                    className="bg-white"
                    placeholder="Type to search..."
                />
                {
                    this.state.value && (
                        
                            <Button
                                outline
                                onClick={() => { this.setState({value: ''}) }}
                            >
                                <i className="fa fa-fw fa-times"></i>
                            </Button>
                        
                    )
                }
            </InputGroup>
        )
    }
} 