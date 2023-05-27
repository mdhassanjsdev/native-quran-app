import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import SurahCard from '../components/SurahCard'

interface Isurah {
    id: number,
    transliteration: string,
    total_verses: number,
    name: string,
    navigation: any
}

interface Props {
    navigation: any
}


const SurahScreen: React.FC<Props> = ({ navigation }) => {

    const [loading, setLoading] = useState(false)

    const [surah, setSurah] = useState([])

    const getData = () => {
        setLoading(true)
        fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json')
            .then(response => response.json())
            .then(json => { setLoading(false), setSurah(json) })
    }


    useEffect(() => {
        getData()
    }, [])




    return (
        <View style={{ backgroundColor: '#DAD0E1', flex: 1 }}>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 30, marginHorizontal: 20 }}>
                <TouchableOpacity>
                    <Image source={require('../assets/drowerIcon.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 24 }}>Quran App</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Text style={{ color: '#9D1DF2', fontWeight: 'bold', fontSize: 16 }}>Asalamu Alaikum !!!</Text>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 24, marginTop: 6 }}>Mohammad Hassan</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <View style={{ backgroundColor: '#E5B6F2', width: 326, height: 128, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, alignItems: 'center' }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../assets/book.png')} />
                            <Text style={{ color: '#300759' }}>Last Read</Text>
                        </View>
                        <View style={{ marginTop: 13 }}>
                            <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 18 }}>Al-Fatiah</Text>
                            <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 12 }}>Ayah no. 1</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/quran.png')} />
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20, borderBottomColor: '#300759', borderBottomWidth: 3, paddingBottom: 10 }}>
                <Text style={{ color: '#300759', fontWeight: 'bold', fontSize: 20 }}>Surah</Text>
            </View>

            <ScrollView>
                {loading ? <ActivityIndicator size="large" color='#300759' style={{ marginTop: 20 }} />
                    :
                    <>
                        {surah?.map((item: Isurah, index) => (
                            <SurahCard key={index} id={item.id} name={item?.transliteration} verse={item.total_verses} arbicName={item.name} navigation={navigation} />
                        ))}
                    </>
                }

            </ScrollView>

        </View>
    )
}

export default SurahScreen