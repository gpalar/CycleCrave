import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>dummy dashboard :P</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF4F3',
    },
});

export default Dashboard;