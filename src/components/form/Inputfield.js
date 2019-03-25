import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import colors from '../../styles/colors';
import {
    View,Text,TextInput,TouchableOpacity,StyleSheet,
} from 'react-native';


export default class Inputfield extends Component{
    constructor(props){
        super(props);
        this.state={
            secureInput:props.inputType ==='text' || props.inputType==='email' ? false : true,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }
    
    
    toggleShowPassword(){
        this.setState({secureInput: !this.state.secureInput});
    }
    
    
    render(){
      const {labelText,labelTextSize,labelColor,customStyle,textColor,borderBottomColor,inputType,onChangeText}=this.props;
      const fontSize = labelTextSize || 14;
      const color = labelColor || colors.white;
      const inputColor = textColor || colors.white;
       const borderBottom = borderBottomColor || 'transparent';
       const {secureInput} = this.state;
        return(
            <View style={[customStyle,styles.wrapper]}>
                <Text style={[{color,fontSize},styles.label]}>{labelText}</Text>

                {inputType==='password'?
            <TouchableOpacity style={styles.showButton}
            onPress={this.toggleShowPassword}>
                <Text style={styles.showButtonText}>{secureInput ? 'show':'hide'}</Text></TouchableOpacity>:null
            }
                <TextInput
                
                style={[{color:inputColor,borderBottomColor:borderBottom}, styles.Inputfield]}

                secureTextEntry={secureInput}
                onChangeText={onChangeText}
                />
            </View>
        )
    }
}


Inputfield.propTypes={
labelText:PropTypes.string.isRequired,
labelTextSize:PropTypes.number,
labelColor:PropTypes.string,
textColor:PropTypes.string,
borderBottomColor:PropTypes.string,
inputType:PropTypes.string.isRequired,
customStyle:PropTypes.object,
onChangeText:PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',

    },
    label:{
        fontWeight:'700',
        marginBottom:10,
    },
    Inputfield:{
        borderBottomWidth:0.5,
        paddingTop:5,
        paddingBottom:5,
    },
    showButton:{
        position:'absolute',
        right:0,
    },
    showButtonText:{
        color:colors.white,
        fontWeight:'700',
    }
})