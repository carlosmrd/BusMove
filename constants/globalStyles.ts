import { StyleSheet } from 'react-native';
import { Colors } from './theme';

const colors = Colors.light;

export const GlobalStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    safeContainer: {
        flex: 1,
    },

    // Text
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.textLight,
        textAlign: 'center',
    },
    subtitleWithTitle: {
        marginTop: 30,
    },
    subtitleAlone: {
        marginTop: 10,
    },

    // Buttons
    primaryButton: {
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    // Dots/Indicators
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },

    // Content
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustration: {
        alignItems: 'center',
        marginBottom: 60,
    },
    illustrationText: {
        fontSize: 120,
    },
});
