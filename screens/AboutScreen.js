import React from "react";
import { View, Text, Button, StyleSheet } from'react-native';
export default function AboutScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre o(a) Desenvolvedor(a) ou Contato</Text>
            <Text style={styles.textAbout}>O desenvolvedor Vitor Dias de Albuquerque tem 20 anos e estuda na Fatec Zona Leste.</Text>
            <Button
                title="Home"
                onPress={() => navigation.goBack()} />
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
    textAbout: {
        fontSize: 20,
        padding:8,
    }
});