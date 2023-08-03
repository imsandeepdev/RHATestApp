import * as React from 'react';
import {useState, useEffect} from 'react'
import {View, Text,Image,ScrollView,FlatList,SafeAreaView, Dimensions,Pressable} from 'react-native'
import StoryScreen from '../../components/StoryScreen';
import {useDispatch} from 'react-redux';
import { ProductListRequest } from '../../actions/product.action';
import R from '../../res/R';
import CustomHeader from '../../components/CustomHeader';
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width;


const HomeScreen = (props) => {

    const dispatch = useDispatch()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        handleProductList()
    },[props.navigation])

    const handleProductList = () => {
        setLoading(true)
        dispatch(ProductListRequest(response=>{
            console.log("product list respo=>",response)
            setProductList(response.products);
            setLoading(false);

        }))
    }

    return (
      <StoryScreen loading={loading}>
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader title={'PRODUCT LIST'} />
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <FlatList
                style={{
                  flex: 1,
                  paddingHorizontal: R.fontSize.Size15,
                  paddingVertical: R.fontSize.Size18,
                }}
                numColumns={2}
                data={productList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                    onPress={()=> props.navigation.navigate('ProductDetail',{
                        itemDetail:item
                    })}
                    key={index}
                      style={({pressed}) => [
                        {
                          borderWidth: 1,
                          width: screenWidth / 2.2,
                          marginHorizontal: R.fontSize.Size4,
                          marginVertical: R.fontSize.Size5,
                          borderRadius: R.fontSize.Size4,
                          overflow: 'hidden',
                          borderColor: R.colors.appColor,
                          opacity: pressed ? 0.5:1
                        },
                      ]}>
                      <Image
                        source={{uri: item.thumbnail}}
                        resizeMode={'cover'}
                        style={{height: screenHeight / 6, width: '100%'}}
                      />
                      <View style={{padding: R.fontSize.Size5}}>
                        <Text
                          style={{
                            fontSize: R.fontSize.Size14,
                            fontWeight: '500',
                          }}
                          numberOfLines={1}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: R.fontSize.Size12,
                            fontWeight: '500',
                          }}
                          numberOfLines={2}>
                          {item.description}
                        </Text>
                      </View>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}

export default HomeScreen