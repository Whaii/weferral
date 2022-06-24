import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";

const Error404 = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Error 404"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="search">
                        Search
                    </Label>
                    <InputGroup>
                        <Input type="text" name="text" id="search" placeholder="Enter search phrase here..." className="bg-white" />
                        
                            <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={ color } tag={ Link } to="/">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                )
                            }
                            </ThemeConsumer>
                        
                    </InputGroup>
                </FormGroup>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/login">
                    Back to Home
                </Link>
                <Link to="/" className="ml-auto text-decoration-none">
                    Support
                </Link>
            </div>
            { /* END Bottom Links */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Error404;
