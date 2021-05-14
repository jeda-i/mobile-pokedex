import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    valor: String;
}

export function Button({valor, ...rest} : ButtonProps){
    return (
        <>
            <TouchableOpacity 
                style={styles.button}
                {...rest}
            >
                <Text style={styles.buttonText}>{valor}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button:{
        
        backgroundColor: colors.yellow,
        borderRadius: 16,
        padding: 10,
        alignSelf: "center",
        width: "50%"
    },
    buttonText: {
        color: colors.darkBlue,
        fontSize: 35,
        textAlign: "center"
    }
});