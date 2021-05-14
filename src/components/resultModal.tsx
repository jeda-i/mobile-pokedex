import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import { Button } from './button';

interface ResultModalProps {
    isVisible: boolean,
    setVisibility : () => void,
}

export function ResultModal({isVisible, setVisibility} : ResultModalProps){

    return (
        <Modal animationType='slide' visible={isVisible}>
            <View style = {styles.buttonContainer}>
                <Button onPress={setVisibility} valor="Voltar"/>
            </View>
            <View style = {styles.form}>
                <View style={styles.fields}>
                    <Text>Teste</Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.yellow,
    },
    buttonContainer:{
        alignItems: 'flex-start'
    },
    form: {
        flex:1,

    },
    fields: {
        marginVertical: 20,
    },
    fieldText: {
        fontSize: 20,
        color: colors.darkBlue,
    }
});