import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
    const colors = Colors.light;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textLighter,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                    borderTopWidth: 1,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <TabBarIcon name="🏠" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => <TabBarIcon name="👤" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Configurações',
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ color }) => <TabBarIcon name="⚙️" color={color} />,
                }}
            />
        </Tabs>
    );
}

function TabBarIcon({ name, color }: { name: string; color: string }) {
    return <Text style={{ fontSize: 24, color }}>{name}</Text>;
}
