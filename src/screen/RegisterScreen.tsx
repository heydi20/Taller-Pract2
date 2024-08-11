import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Regístrate</Text>
        </View>
    )
}
