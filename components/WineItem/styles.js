import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wineContainer: {
        width: '100%',
        height: '100%', 
      },
      titles: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center', 
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      }, 
      subtitle: {
        fontSize: 16, 
        color: '#EED0CF',
      }, 
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      }
});

export default styles; 