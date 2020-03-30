import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 10,
    },
    input: {
        borderRadius:5,
        height: 40,
        borderColor: '#edeef0',
        borderWidth: 1,
        fontSize: 16
    },
    countryItemList: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%',
        height: 38,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowRadius: 1,
        shadowColor: '#333',
        shadowOffset: { width: 2, heigth: 1 },
        shadowOpacity: 0.3,
        marginTop: 3,
        paddingHorizontal: 10,
        marginLeft: 10,
        marginTop: 10
      },
    label:{
        color: '#3a4149',
        fontFamily: 'Heiti SC',
        fontWeight: '400',
        fontSize: 16,
    },
    container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 200,
    height: 530
  },
  
  title:{
    color: '#3a4149',
    fontFamily: 'Heiti SC',
    fontWeight: '600',
    fontSize: 20,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 200,
    height: 530
  },
  title:{
    color: '#3a4149',
    fontFamily: 'Heiti SC',
    fontWeight: '600',
    fontSize: 20,
  },
});

export {styles}
