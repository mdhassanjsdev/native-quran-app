import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

interface Props {
    navigation: any
}

const Home: React.FC<Props> = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: '#DAD0E1', flex: 1 }}>
            <View style={{ marginTop: 70 }}>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>Quran App</Text>
                <Text style={{ textAlign: 'center', color: '#9D1DF2', fontWeight: 'bold', fontSize: 16, marginTop: 13 }}>Learn Quran every day and {"\n"}
                    recite once everyday</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <View style={{ backgroundColor: '#300759', width: 296, height: 437, borderRadius: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/mosque.png')} style={{ width: 270, height: 318 }} />
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#9D1DF2', paddingHorizontal: 40, paddingVertical: 15, borderRadius: 100, marginTop: -24 }}
                    activeOpacity={.5}
                    onPress={() => navigation.navigate('SurahScreen')}
                >
                    <Text style={{ color: '#DAD0E1', fontWeight: 'bold', fontSize: 18 }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home