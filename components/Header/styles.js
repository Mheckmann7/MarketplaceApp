import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },
    logo: {
        width: 100,
        height: 45,
        resizeMode: 'contain',
        
    },
    menu: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        paddingHorizontal: 20,
    }
});
export default styles; 