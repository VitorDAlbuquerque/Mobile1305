import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.textForHome}>Página de desenvolvimento para Mobile</Text>
            
            <Button
                title="Detail Screen"
                onPress={() => navigation.navigate('Details')}
            />

            
            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    },
    textForHome:{
        fontSize: 20,
        padding:8,
    }
   
});