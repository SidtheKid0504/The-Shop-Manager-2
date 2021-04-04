import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyleSheet, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class MyHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Header
                leftComponent={
                    <Icon
                        name="bars"
                        type="font-awesome"
                        color="white"
                    />
                }
                centerComponent= {{
                    text: this.props.title,
                    style: {
                        fontWeight: 'bold',
                        fontSize: RFValue(25),
                        color: 'white'
                    }
                }}

                rightComponent={{
                    
                }}
                backgroundColor= '#12CDD4'
            />
        )
    }
}



