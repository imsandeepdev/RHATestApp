import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {showNavigationBar} from 'react-native-navigation-bar-color';
import R from '../res/R';

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

const StoryScreen = props => {
  useEffect(() => {
    showNavigationBar();
  }, []);

  return (
    <React.Fragment>
      <StatusBar
        barStyle={props.statusBarStyle }
        backgroundColor={props.statusBarColor ?? R.colors.white}
        translucent={false}
      />
      <SafeAreaView style={[styles.statusBar, props.statusBarIosStyle]} />
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAvoidingView
          style={styles.root}
          behavior={behavior}
          keyboardVerticalOffset={50}>
          {props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      {props.loading && (
        <ActivityIndicator
          size="large"
          color={props.loaderColor ?? R.colors.appColor}
          style={styles.loader}
        />
      )}
      <SafeAreaView style={[styles.bottomBarIos, props.bottomBarIosStyle]} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: '#FFF',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  root: {
    flex: 1,
  },
  bottomBarIos: {
    flex: 0,
    backgroundColor: '#FFF',
  },
  loader: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default StoryScreen;
