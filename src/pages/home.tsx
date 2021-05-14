import React, { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { Button } from '../components/button';
import { ResultModal } from '../components/resultModal';
import colors from '../styles/colors';

export function Home(){
    const [isVisible, setIsVisible] = useState(false);

    const handleModalVisibility = () =>{
        setIsVisible(!isVisible);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/image/pokemon_logo.png')}
                        resizeMode="contain" 
                    />
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Digite o pokemon" />
                    <Button 
                        valor='Buscar' 
                        onPress={handleModalVisibility}
                    />
                </View>
                <ResultModal isVisible={isVisible} setVisibility={handleModalVisibility} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.yellow
    },
    header:{
        alignItems: "center",
        marginTop: "10%",
    },
    image: {
        alignSelf:"center",
        height: Dimensions.get('window').width * 0.25,
    },
    form:{
        backgroundColor: colors.white,
        margin:30,
        padding:30,
        borderRadius: 20,
    },
    input:{
        marginTop:30,
        borderBottomColor: colors.darkBlue,
        borderBottomWidth: 1,
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 25,
    },
});