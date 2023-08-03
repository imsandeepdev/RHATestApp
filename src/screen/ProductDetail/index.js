import * as React from 'react'
import {useState, useEffect} from 'react';
import {SafeAreaView,View, Text,Image,FlatList,Dimensions,ScrollView} from 'react-native';

import StoryScreen from '../../components/StoryScreen';
import CustomHeader from '../../components/CustomHeader';
import R from '../../res/R';
import SwiperFlatList from 'react-native-swiper-flatlist';
import AppButton from '../../components/AppButton';
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width;
import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomRow = (props) => {
    return (
      <View style={{flexDirection: 'row',paddingVertical:R.fontSize.Size4}}>
        <View style={{width:R.fontSize.Size100}}>
          <Text
            style={{
              fontSize: R.fontSize.Size14,
              fontWeight: '600',
            }}>
            {props.title}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: R.fontSize.Size14,
              fontWeight: '400',
            }}>
            {props.subTitle}
          </Text>
        </View>
      </View>
    );
}

const ProductDetail = (props) => {

    const [productDetails, setProductDetails] = useState({})

    useEffect(()=>{
        console.log(props.route.params.itemDetail);
        setProductDetails(props.route.params.itemDetail);
    },[props.navigation])


    const handleAddCartDetail = async() => {
        let getList = await AsyncStorage.getItem('cartList');
        console.log('TEMPLIST=>', JSON.parse(getList));
        let tempList = JSON.parse(getList);
        tempList.push(productDetails)
            await AsyncStorage.setItem(
                         'cartList',
                         JSON.stringify(tempList),
                       );

        props.navigation.navigate('CartScreen')

    }   

    return (
      <StoryScreen>
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            leftSource={R.image.backIcon}
            onPress={() => props.navigation.goBack()}
            title={'PRODUCT DETAIL'}
          />
          <View style={{flex: 1}}>
            <View
              style={{
                height: screenHeight / 3.3,
                width: screenWidth,
                borderBottomWidth: 1,
                borderColor: R.colors.placeHolderColor,
                backgroundColor: R.colors.black,
              }}>
              <SwiperFlatList
                autoplay={false}
                autoplayDelay={2}
                autoplayLoop={true}
                autoplayInvertDirection={true}
                data={productDetails.images}
                showPagination
                paginationDefaultColor={R.colors.white}
                paginationActiveColor={R.colors.appColor}
                renderItem={({item, index}) => (
                  <View
                    key={index}
                    style={{height: '100%', width: screenWidth}}>
                    <Image
                      source={{uri: item}}
                      resizeMode={'contain'}
                      style={{height: '100%', width: '100%'}}
                    />
                  </View>
                )}
              />
            </View>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 10,
              }}>
              <View
                style={{
                  marginHorizontal: R.fontSize.Size15,
                  paddingVertical: R.fontSize.Size10,
                  flex: 1,
                }}>
                <CustomRow title={'Name'} subTitle={productDetails.title} />
                <CustomRow
                  title={'Description'}
                  subTitle={productDetails.description}
                />
                <CustomRow title={'Brand'} subTitle={productDetails.brand} />

                <CustomRow
                  title={'Category'}
                  subTitle={productDetails.category}
                />
                <CustomRow title={'Price'} subTitle={productDetails.price} />
              </View>
              <AppButton
                onPress={() => handleAddCartDetail()}
                title={'Add Cart'}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}

export default ProductDetail