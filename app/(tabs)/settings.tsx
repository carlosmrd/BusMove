import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { GlobalStyles } from '@/constants/globalStyles';

export default function SettingsScreen() {
    const colors = Colors.light;
    const router = useRouter();

    React.useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.background);
    }, []);

    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>Configurações</Text>
                <Text style={[styles.subtitle, { color: colors.textLight }]}>
                    Configurações
                </Text>

                <TouchableOpacity
                    style={[styles.logoutButton, { backgroundColor: colors.primary }]}
                    onPress={handleLogout}
                >
                    <Text style={styles.primaryButtonText}>Logout</Text>
                </TouchableOpacity>
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
    logoutButton: {
        marginTop: 40,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        minWidth: 200,
    },
});
