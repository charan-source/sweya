import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Add() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    useEffect(() => {
        setIsModalVisible(true)
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.container}>

                <Pressable onPress={openModal} style={styles.openButton}>
                      <Text>When you click this button then you get popup</Text>
                </Pressable>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Hello!</Text>
                            <Text style={styles.modalText}>
                                hi this is charan modal popup
                            </Text>
                            <Pressable style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    openButton: {
        backgroundColor: "#2196F3",
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 300,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: "#FF5722",
        padding: 10,
        borderRadius: 8,
    },
});