import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import AyatCard from '../components/AyatCard';
import { useEffect, useState } from 'react'

interface Props {
    route: any,
    navigation: any
}

interface Iayat {
    id: number,
    translation: string,
    text: string
}

const AyatScreen: React.FC<Props> = ({ route, navigation }) => {

    const { id, name, verse } = route.params;

    const [loading, setLoading] = useState(false)

    const [ayat, setAyat] = useState([])

    const getAyat = () => {
        setLoading(true)
        fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${id}.json`)
            .then(response => response.json())
            .then(json => { setLoading(false), setAyat(json?.verses) })
    }


    useEffect(() => {
        getAyat()
    }, [])




    return (
        <View style={{ backgroundColor: '#DAD0E1', flex: 1 }}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 30, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 24 }}>Quran App</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
                <View style={{ backgroundColor: '#E5B6F2', width: 326, height: 128, borderRadius: 20, flexDirection: 'column', alignItems: 'center', paddingHorizontal: 30 }}>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ color: '#300759', textAlign: 'center', fontSize: 26, fontWeight: '600' }}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</Text>
                    </View>
                    <View style={{ marginTop: 13 }}>
                        <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{name}</Text>
                        <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: 5 }}>Verse no. {verse}</Text>
                    </View>

                </View>
            </View>

            <ScrollView>
                {loading ? <ActivityIndicator size="large" color='#300759' style={{ marginTop: 20 }} />
                    :
                    <>
                        {ayat?.map((item: Iayat, index) => (
                            <AyatCard key={index} id={item.id} bangla={item?.translation} ayat={item.text} />
                        ))}
                    </>
                }

            </ScrollView>

        </View>
    )
}

export default AyatScreen