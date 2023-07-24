import { View, Text, Image, StyleSheet, Platform, Pressable } from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    return(
        <View style={styles.MealItem}>
            <Pressable android_ripple={{color: '#ccc'}}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}</Text>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
        backgroundColor: "white",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 8,
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: 200
    },
    
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});

export default MealItem;