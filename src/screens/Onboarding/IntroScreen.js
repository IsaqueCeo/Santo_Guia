import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
    { id: '1', title: 'Bem-vindo ao Santo Guia', description: 'Descubra nossos recursos' },
    { id: '2', title: 'Explore!', description: 'Encontre novas ferramentas e tutoriais' },
    { id: '3', title: 'Aproveite!', description: 'Acompanhe seu progresso e melhore suas habilidades' },
];

export default function IntroScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScrollEnd = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const navigateToHome = () => {
        navigation.replace('LoginScreen'); 
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScrollEnd}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <View style={styles.pagination}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                { backgroundColor: index === currentIndex ? '#4CAF50' : '#aaa' },
                            ]}
                        />
                    ))}
                </View>
                {currentIndex === slides.length - 1 ? (
                    <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                        <Text style={styles.buttonText}>Começar</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.swipeText}>Deslize para continuar</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
    slide: { width, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
    description: { fontSize: 18, color: '#666', textAlign: 'center', marginHorizontal: 20 },
    footer: { position: 'absolute', bottom: 50, alignItems: 'center' },
    pagination: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: '#aaa',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    swipeText: { fontSize: 16, color: '#aaa' },
});
