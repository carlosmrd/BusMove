import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import { Colors } from '@/constants/theme';
import { GlobalStyles } from '@/constants/globalStyles';

export default function OnboardingScreen() {
    const router = useRouter();
    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = React.useState(0);
    const colors = Colors.light;

    //Botões de sistema escuros, visíveis contra o fundo branco.
    React.useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(Colors.light.primary);

        // For Android bottom navigation bar
        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(false);
        }
    }, []);

    const onboardingData = [
        {
            id: 1,
            icon: '🚌',
            title: 'Bem Vindo',
            subtitle: 'Ao nosso aplicativo de transporte público inteligente! ' +
                'Estamos aqui para tornar sua viagem de ônibus mais fácil e eficiente.',
        },
        {
            id: 2,
            icon: '📍',
            subtitle: 'No nosso app, você pode encontrar todas as rotas e horários dos ônibus, ' +
                'além de receber atualizações em tempo real para planejar seu trajeto com precisão.',
        },
        {
            id: 3,
            icon: '🚏',
            subtitle: 'Aqui você acessa mapas interativos que mostram as paradas de ônibus próximas' +
                ' a você e suas conexões, facilitando a navegação pelo transporte público.',
        },
        {
            id: 4,
            icon: '⌚',
            subtitle: 'Com nosso aplicativo, você recebe notificações sobre atrasos, mudanças de rota' +
                ' e outras informações importantes, garantindo uma viagem tranquila e informada.',
        },
    ];

    const goToLogin = () => {
        if (currentPage < onboardingData.length - 1) {
            pagerRef.current?.setPage(currentPage + 1);
        } else {
            router.push('/login');
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}
                      edges={['top', 'bottom']}>
            <PagerView
                ref={pagerRef}
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={(e) =>
                    setCurrentPage(e.nativeEvent.position)}
            >
                {onboardingData.map((page, index) => (
                    <View key={page.id} style={styles.page}>
                        <View style={styles.content}>
                            <View style={styles.illustration}>
                                <Text style={styles.illustrationText}>{page.icon}</Text>
                            </View>
                            {index === 0 && (
                                <Text style={[styles.title, { color: colors.text }]}>{page.title}</Text>
                            )}
                            <Text
                                style={[
                                    styles.subtitle,
                                    { color: colors.textLight },
                                    index === 0 ? styles.subtitleWithTitle : styles.subtitleAlone,
                                ]}
                            >
                                {page.subtitle}
                            </Text>
                        </View>
                    </View>
                ))}
            </PagerView>

            {/* Botões */}
            {currentPage === onboardingData.length - 1 && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.loginPageButton, { backgroundColor: colors.primary }]}
                        onPress={goToLogin}
                    >
                        <Text style={styles.primaryButtonText}>Vamos lá</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Indicadores de página */}
            <View style={styles.dotsContainer}>
                {onboardingData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === currentPage ? colors.primary : colors.secondary,
                                width: index === currentPage ? 24 : 8,
                            },
                        ]}
                    />
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ...GlobalStyles,
    container: {
        flex: 1,
    },
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    loginPageButton: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        padding: 20,
        gap: 15,
    },
    secondaryButton: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
    },
    secondaryButtonText: {
        fontSize: 16,
    },
});
