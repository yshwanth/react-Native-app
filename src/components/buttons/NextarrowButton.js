import React, { Component } from 'react';
import {PropTypes } from 'prop-types';
import {
    TouchableHighlight,StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import  {Ionicons} from '@expo/vector-icons';

export default class NextArrowButon extends Component{
    render(){
        const {disabled,handleNextButton} = this.props;
        const opacityStyle = disabled ? {backgroundColor:'rbga(255,255,255,0.2)'}: {backgroundColor:'rgba(255,255,255,0.6)'}

        return(
            <TouchableHighlight style={[opacityStyle,styles.button]}
            onPress={handleNextButton}
            disabled>
            <Ionicons
            name="ios-arrow-dropright-circle"
            color={colors.white}
            size={32}
            style={styles.icon}/>
            </TouchableHighlight>
        )
    }
}
NextArrowButon.propTypes={
    disabled:PropTypes.bool,
    handleNextButton:PropTypes.func,
}

const styles = StyleSheet.create({
  icon:{
      marginRight:-2,
      marginTop:-2,
  },
  button:{
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50,
      width:50,
      height:50,
  }
})