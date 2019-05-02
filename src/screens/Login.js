
import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {View,
    Text,ScrollView,StyleSheet,KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';
import Inputfield from '../components/form/Inputfield';
import NextArrowButton from '../components/buttons/NextarrowButton'
import Notification from '../components/Notification'


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            formValid:true,
            validEmail:false,
            emailAddress:'',
            validPassword:false,
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }
    
    handleNextButton(){
        if(this.state.emailAddress==='hello@yash.ie'){
            this.setState({formValid:true});

        }else{
            this.setState({formValid:false});
        }
    }

    handleCloseNotification(){
        this.setState({formValid:true});
    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       this.setState({emailAddress:email});
       if(!this.state.validEmail){
           if(emailCheckRegex.test(email)){
              this.setState({validEmail:true});

           }
       }else{
           if(!emailCheckRegex.test(email)){
               this.setState({validEmail:false});
           }
       }
    }

    handlePasswordChange(password){
        if(this.state.validPassword){
            if(password.length>4){
                //
                this.setState({validPassword:true});

            }
        }else if(password<=4){
            this.setState({validPassword:false});
        }
    }

       toggleNextButtonState(){
           const {validEmail,validPassword}= this.state;
           if(validEmail&&validPassword){
               return false;
           }
           return true;
       }

    render(){
        const {formValid} = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.a :colors.darkOrange;
        return(
            <KeyboardAvoidingView style={[{backgroundColor:background},styles.wrapper]} behavior="padding" >
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.LoginHeader}>
                        Login</Text>
                       
                        <Inputfield
                        labelText="Email Address"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        inputType="email"
                        borderBottomColor={colors.white}
                        customStyle={{marginBottom:30}}
                        onChangeText={this.handleEmailChange}
                        />
                         <Inputfield
                        labelText="Password"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType="password"      
                        customStyle={{marginBottom:30}}
                        />
                </ScrollView>
                
            </View>
            <View style={styles.nextButton}> 
                    <NextArrowButton handleNextButton={this.handleNextButton}
                    disabled={this.toggleNextButtonState()}
                    />
                </View>
                <View>
                    <Notification
                    showNotification={true}
                    handleCloseNotification={this.handleCloseNotification}
                    type='Error message'
                    firstLine="those credentials don't look right."
                    secondLine="Please try again"
                    />
                </View>
                </KeyboardAvoidingView>
        )
    }
}


const styles =StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        
    },
    scrollViewWrapper:{
        marginTop:80,
        flex:1,
    },
    LoginHeader:{
        fontSize:25,
        color:colors.white,
        fontWeight:'300',
        marginBottom:40,
    },
    scrollView:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        flex:1,
    },
    nextButton:{
        alignItems:'flex-end',
        right:20,
        bottom:200,
    }
})