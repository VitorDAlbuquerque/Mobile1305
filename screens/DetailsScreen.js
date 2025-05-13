import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function DetailsScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textForDetails}>Detail Screen</Text>
                <Text style={styles.text}>Aqui você pode ver pequenos detalhes sobre nosso produto</Text>
            <Button
                title="home"
                onPress={() => navigation.goBack()}
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
    textForDetails:{
        fontSize: 20,
        padding:8,
    }
});