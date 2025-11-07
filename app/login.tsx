import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,
    KeyboardAvoidingView, Platform, Alert, StatusBar, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { GlobalStyles } from '@/constants/globalStyles';

export default function LoginScreen() {
    const router = useRouter();
    const colors = Colors.light;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    React.useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.background);
    }, []);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        console.log('Tentativa de login:', { email, password });

        //Requisição para a API de Login aqui.

        //Navegação para a tela inicial
        router.replace('/(tabs)/home');
    };

    const handleSignup = () => {
        router.push('/signup');
    };

    const handleForgotPassword = () => {
        router.push('/forgot-password');
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colors.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.inner}>
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: colors.text }]}>Já é usuário?</Text>
                        <Text style={[styles.subtitle, { color: colors.textLight }]}>Faça login para continuar</Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, { color: colors.text }]}>Email</Text>
                            <TextInput
                                style={[styles.input, {
                                    borderColor: colors.border,
                                    color: colors.text,
                                }]}
                                placeholder="Insira seu email"
                                placeholderTextColor={colors.textLighter}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoComplete="email"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, { color: colors.text }]}>Senha</Text>
                            <TextInput
                                style={[styles.input, {
                                    borderColor: colors.border,
                                    color: colors.text,
                                }]}
                                placeholder="Insira sua senha"
                                placeholderTextColor={colors.textLighter}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                autoCapitalize="none"
                            />
                        </View>

                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={[styles.forgotPassword, { color: colors.primary }]}>Esqueceu a senha?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.loginButton, { backgroundColor: colors.primary }]}
                            onPress={handleLogin}
                        >
                            <Text style={styles.primaryButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <Text style={[styles.footerText, { color: colors.textLight }]}>Ainda não é usuário? </Text>
                        <TouchableOpacity onPress={handleSignup}>
                            <Text style={[styles.signupText, { color: colors.primary }]}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    ...GlobalStyles,
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    inner: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: 60,
        marginBottom: 40,
    },
    form: {
        flex: 1,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 12,
        fontSize: 16,
        borderWidth: 1,
    },
    forgotPassword: {
        textAlign: 'right',
        marginBottom: 30,
        fontSize: 14,
    },
    loginButton: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    footerText: {
        fontSize: 14,
    },
    signupText: {
        fontSize: 14,
        fontWeight: '600',
    },
});
