import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import R from '../../res/R';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.lightBlack,
    paddingTop: 40,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  paymentTitle: {
    fontSize: 30,
    color: '#fff',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: R.colors.white,
    marginTop: R.fontSize.Size10,
    borderTopLeftRadius: R.fontSize.Size10,
    borderTopRightRadius: R.fontSize.Size10,
    paddingTop: R.fontSize.Size10,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cartTitleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: R.fontSize.XLarge,
    fontWeight: '900',
    marginLeft: R.fontSize.Size10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: R.colors.lightWhite,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: R.colors.lightBlack,
  },
  productImage: {
    width: R.fontSize.Size50,
    height: R.fontSize.Size50,
    borderRadius: R.fontSize.Size4,
    alignSelf: 'center',
    borderWidth: 1,
  },
  productMiddleView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: R.fontSize.Size14,
    color: R.colors.textPriColor,
    fontWeight: '500',
  },
  productCompanyTitle: {
    fontSize: R.fontSize.small,
  },
  productRightView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItemCounterView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  counterValue: {
    fontSize: R.fontSize.Size16,
    color: R.colors.PrimaryApp_color,
  },
  productPriceText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.blackColor,
    alignItems: 'center',
    fontWeight: '600',
  },
  toggleCounterButton: {
    paddingHorizontal: 10,
  },
  couponInputView: {
    width: '100%',
    height: R.fontSize.Size40,
    borderWidth: 1,
    borderColor: R.colors.lightWhite,
    marginTop: R.fontSize.Size14,
    backgroundColor: R.colors.lightWhite,
    display: 'flex',
    flexDirection: 'row',
  },
  couponInput: {
    fontSize: R.fontSize.Size14,
    color: R.colors.blackColor,
    paddingHorizontal: R.fontSize.Size14,
    paddingVertical: R.fontSize.Size4,
    flex: 1,
  },
  couponButton: {
    backgroundColor: R.colors.appColor,
    paddingHorizontal: R.fontSize.Size12,
    justifyContent: 'center',
  },
  couponButtonText: {
    color: R.colors.lightWhite,
    fontSize: R.fontSize.Size15,
    fontWeight: '600',
  },
  subtotalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: R.fontSize.Size16,
    justifyContent: 'space-between',
    paddingBottom: R.fontSize.Size8,
    borderBottomColor: R.colors.placeHolderColor,
    borderBottomWidth: 1,
  },
  subtotalText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.blackColor,
  },
  subtotalPrice: {
    fontSize: R.fontSize.Size14,
    color: R.colors.blackColor,
  },

  shippingItemsView: {
    marginTop: R.fontSize.Size10,
  },
  shippingText: {
    fontSize: R.fontSize.small,
    color: R.colors.blackColor,
  },
  shippingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  shippingItemText: {
    fontSize: R.fontSize.small,
    paddingVertical: R.fontSize.Size5,
    color: R.colors.blackColor,
  },
  totalView: {
    marginTop: R.fontSize.Size10,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: R.fontSize.Size5,
    justifyContent: 'space-between',
    borderBottomColor: R.colors.placeHolderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  totalText: {
    fontSize: R.fontSize.Size16,
    paddingBottom: R.fontSize.Size4,
    color: R.colors.appColor,
    fontWeight: '700',
  },
  totalPrice: {
    fontSize: R.fontSize.Size16,
    paddingBottom: R.fontSize.Size4,
    color: R.colors.appColor,
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: R.colors.PrimaryApp_color,
    paddingVertical: R.fontSize.Size10,
    marginTop: R.fontSize.Size20,
    alignItems: 'center',
    borderRadius: R.fontSize.Size4,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: R.colors.lightWhite,
  },
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: R.fontSize.Size16,
    color: R.colors.blackColor,
    alignSelf: 'center',
  },
});

export default styles;
