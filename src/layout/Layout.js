import React from 'react';
import {Badge} from 'reactstrap';
import { Container } from 'reactstrap';
import '../css/Layout.css';

export class Layout extends React.Component
{
    render = () =>{
        return (
            <div>
                <h1 >
                  <Badge color="danger">Home</Badge> <br></br>
                  DashBoard 
                </h1>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}