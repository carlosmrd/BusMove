import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { GlobalStyles } from '@/constants/globalStyles';

export default function ProfileScreen() {
    const colors = Colors.light;

    React.useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.background);
    }, []);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>Perfil</Text>
                <Text style={[styles.subtitle, { color: colors.textLight }]}>
                    Perfil
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ...GlobalStyles,
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
