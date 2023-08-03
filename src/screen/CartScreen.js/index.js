import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  LogBox,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import StoryScreen from '../../components/StoryScreen';
import R from '../../res/R';
import {useDispatch} from 'react-redux';
import { CartListRequest } from '../../actions/cart.action';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;


const CartScreen = props => {

    const dispatch = useDispatch()
    const [cartItem, setCartItem] = useState([])
    const [couponCode,setCouponCode]= useState('')

    useEffect(()=>{

        handleCartList()
    },[props.navigation])
  
    const handleCartList = async() => {
       let tempList = await AsyncStorage.getItem('cartList');
       console.log("TEMPLIST=>",JSON.parse(tempList))
      let cartList = JSON.parse(tempList);

const arr = cartList.map(item=>({...item,quantity:1}))
console.log(arr);
setCartItem(arr);

    }

   const handleAddCartItem = (item,itemIndex,quantity) => {
      let tempDoc = cartItem;

      let arr = tempDoc.map((item, index) => {
        if (index == itemIndex) {
          item.quantity = item?.quantity + 1;
        }
        return{...item}
      });
      setCartItem(arr)
    }

     const handleRemoveCartItem = (selectItem, itemIndex,quantity) => {
      console.log("INDEx",itemIndex)
       let tempDoc = cartItem;
      if(quantity==1)
      {
        onAlert(itemIndex);
          
      }
      else
      {
       
        let arr = tempDoc.map((item, index) => {
          if (index == itemIndex) {
            item.quantity = item?.quantity - 1;
          }
          return {...item};
        });
        setCartItem(arr);
      }
     };

      const onAlert = (itemIndex) => {
        Alert.alert(
          '\n',
          'Are you sure you want to remove this item?',
          [
            {
              text: 'Yes',
              onPress: () => onCallRemoveItem(itemIndex),
            },
            {
              text: 'No',
            },
          ],
          {
            cancelable: true,
          },
        );
      };

      const onCallRemoveItem = async(itemIndex)=>{
       let tempDoc = cartItem;

        let updateArray = tempDoc.filter((item, index) => index !== itemIndex);
        setCartItem(updateArray);
         await AsyncStorage.setItem('cartList', JSON.stringify(updateArray));
      }

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          leftSource={R.image.backIcon}
          onPress={() => props.navigation.goBack()}
          title={'CART SCREEN'}
        />
        <View style={{flex: 1}}>
          <FlatList
            style={{
              flex: 1,
              marginBottom: R.fontSize.Size4,
              paddingHorizontal: R.fontSize.Size15,
            }}
            keyExtractor={(item, index) => index.toString()}
            data={cartItem}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.productView}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item.thumbnail}`,
                    }}
                    resizeMode={'cover'}
                  />
                  <View style={styles.productMiddleView}>
                    <Text style={styles.productTitle}>{item?.title}</Text>
                  </View>
                  <View style={styles.productRightView}>
                    <Text style={styles.productPriceText}>{`₹${
                      item?.price * item?.quantity
                    }`}</Text>
                    <View style={styles.productItemCounterView}>
                      <TouchableOpacity
                        style={{
                          height: R.fontSize.Size30,
                          width: R.fontSize.Size30,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() =>
                          handleRemoveCartItem(item, index, item?.quantity)
                        }>
                        <Image
                          source={R.image.minusIcon}
                          style={{
                            height: R.fontSize.Size30,
                            width: R.fontSize.Size30,
                          }}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          height: R.fontSize.Size20,
                          width: R.fontSize.Size20,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.counterValue}>
                          {item?.quantity}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          height: R.fontSize.Size30,
                          width: R.fontSize.Size30,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() =>
                          handleAddCartItem(item, index, item?.quantity)
                        }>
                        <Image
                          source={R.image.plusIcon}
                          style={{
                            height: R.fontSize.Size30,
                            width: R.fontSize.Size30,
                          }}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          <View style={{paddingHorizontal: R.fontSize.Size15}}>
            <View style={styles.couponInputView}>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Coupon Code"
                  value={couponCode}
                  style={styles.couponInput}
                  onChangeText={coupon => setCouponCode(coupon)}
                  placeholderTextColor={R.colors.lightBlack}
                />
              </View>
              <TouchableOpacity
                disabled={couponCode.length < 1 ? true : false}
                onPress={() => console.log('coupon code')}
                style={styles.couponButton}>
                <Text style={styles.couponButtonText}>{'Apply Coupon'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.totalView}>
              <Text style={styles.totalText}>Grand Total -</Text>

              <Text style={styles.totalPrice}>
                {`₹ ${cartItem.reduce((total, item) => total + item.price, 0)}`}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};



export default CartScreen;
