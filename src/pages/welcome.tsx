import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Button } from '../components/button';
import colors from '../styles/colors';

export function Welcome(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/image/pokemon_logo.png')}
                    resizeMode="contain" 
                />
            </View>
            <View style= {styles.subtitle}>
                <Text style = {styles.subtitleText}>Obtenha informações dos seus pokémons preferidos.</Text>
            </View>
            <Button valor="Começar" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    title: {
        alignItems: "center",
        marginTop: "30%",
    },
    subtitle: {
        marginTop: "15%",
        alignItems: "center",
        padding: 20,
        marginBottom: "30%"
    },
    subtitleText: {
        fontSize: 20,
        color: colors.darkBlue,
        textAlign:'center'
        
    },
    image: {
        alignSelf:"center",
        height: Dimensions.get('window').width * 0.3,
    }
});