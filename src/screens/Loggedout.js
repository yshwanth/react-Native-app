import React, {Component} from 'react';
import { StyleSheet,Image,TouchableHighlight, Text, View, } from 'react-native';
import colors from '../styles/colors/index';
import Roundedbutton from '../components/buttons/Roundedbutton'
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Loggedout extends Component {
  
  onFacebookPress(){
      alert('Facebook button pressed');
  }
  onCreateAccountPress(){
      alert('Create Account button pressed');
  }
  onMoreOptionsPress(){
      alert('More options button pressed');
  }
  
    render() {
    return (
        <View style={styles.wrapper}>
            
    
        <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>Welcome </Text>
        <Roundedbutton
        text="Continue with Facebbok"
        textColor={colors.black}
        background={colors.white}
        icon={<Ionicons name="logo-facebook"size={30} style={styles.facebookButtonIcon}/>}
        handleOnPress={this.onFacebookPress}
        />
        <Roundedbutton
        text="Create Account"
        textColor={colors.black}
        handleOnPress={this.onCreateAccountPress}
        />


        <TouchableHighlight style={styles.moreOptionsButton}
        onPress={this.onMoreOptionsPress}
        >
            <Text style={styles.moreOptionsButtonText}
        >More options</Text></TouchableHighlight>
         <View style={styles.termsAndConditions}>
             <Text style={styles.termsText}>By tapping Continue, Create Account or More Options,</Text>
             <Text style={styles.termsText}>I agree to Pre-app</Text>
         </View>
 
 
      </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        display:'flex',
        backgroundColor:colors.b,
    },
    welcomeWrapper:{
        flex:1,
        display:'flex',
        marginTop:200,
        padding:20,
    },
    welcomeText:{
        fontSize: 30,
        color: colors.black,
        fontWeight: '300',
        marginBottom:40,
    },
    facebookButtonIcon:{
        color:colors.b,
        position:'relative',
        left:20,
        zIndex:8,

    },
    moreOptionsButton:{
        marginTop:12,
    },
    moreOptionsButtonText:{
        color:colors.black,
        fontSize:16,
    },
    termsAndConditions:{
        flexWrap:'wrap',
        alignItems:'flex-start',
        marginTop:30,
        flexDirection:'row',
    },
    termsText:{
        color:colors.black,
        fontSize:13,
        fontWeight:'500',
    }
})
