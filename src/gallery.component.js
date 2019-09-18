import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';

export default (props) => (
    <ScrollView 
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]} 
    >
        {props.captusres.map(({ uri }) => (
            <View style={styles.galleryImageContainer} key={uri}>
                <TouchableOpacity
                    onPress={() => props.gotoImages('images', { uri })}
                >
                    <Image source={{ uri }} style={styles.galleryImage} />
                </TouchableOpacity>
            </View>
        ))}
    </ScrollView>
);