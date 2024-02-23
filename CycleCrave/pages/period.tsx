import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const period = () => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePress = () => {
        setButtonPressed(!buttonPressed);
    };

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.section_title}>Symptoms</Text>
                <Text style={styles.section_text}>Select all that apply</Text>
                <View style={styles.card_template}>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>
                                <Text>Mood Swings</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>
                                <Text>Headache</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>

                                <Text>Period Cramps</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>

                                <Text> PMS </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>

                                <Text>Bloated</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, buttonPressed ? styles.buttonPressed : styles.defaultButton]} onPress={handlePress}>

                                <Text>Constipated</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.section_title}>Cravings</Text>
                <Text style={styles.section_text}>Select all that apply</Text>
                <View style={styles.card_template}>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]}>
                                <Text>Sweet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]}>
                                <Text>      Salty      </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]} >
                                <Text>    Thirsty    </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]} >
                                <Text>Fruity</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button]}>
                                <Text>Crispy</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        backgroundColor: '#FFF4F3'
    },
    allButtons: {
        alignItems: 'center'
    },
    buttonRow: {
        marginTop: 5,
        flexDirection: 'row', // Arrange buttons horizontally
        marginBottom: 2, // Add spacing between rows
        // justifyContent: 'space-between',
        // justifyContent: 'center', // Center items vertically

    },
    buttonContainer: {
        flexDirection: 'row', // Allow button to expand horizontally
        alignItems: 'center', // Align items vertically
        justifyContent: 'center', // Center items vertically


    },
    buttonPressed: {
        backgroundColor: "#FF898D", // Change to darker color when pressed
    },

    defaultButton: {
        backgroundColor: "#FEDBD5", // default button
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    upperContainer: {
        flex: 6, // takes 2/3 of the screen
        paddingTop: 200,
        justifyContent: 'center'
    },

    lowerContainer: {
        flex: 4, // takes 1/3 of the screen
        justifyContent: 'flex-end', // align content to the bottom
        paddingTop: 400,
        paddingBottom: 200, // add some padding to create space between the buttons and the bottom
    },
    card_template: {
        width: 350,
        height: 200,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        // alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically

    },

    section_title: {
        marginTop: 20,

        fontWeight: 'bold'
    },

    section_text: {
        marginBottom: 20,
    },

    button: {
        paddingVertical: 15, // Increase vertical padding to make the button taller
        paddingHorizontal: 25, // Increase horizontal padding to make the button wider
        padding: 8,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF4F3',
    },
});

export default period;