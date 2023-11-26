import * as React from 'react';
import { Text, View } from 'react-native';

export default function HalamanAbout({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text
           onPress={() => navigation.navigate('Home')}
           style={{fontsize: 26, fontweight: 'blod'}}>HalamanAbout</Text>
        </View>
    )

}