import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        width: Dimensions.get('screen').width - 30,
        padding: 5,
        margin: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        elevation: 3
    },
    topContainer: {
        height: 250,
        marginBottom: 10
    },
    brandContainer: {
        position: 'absolute',
        bottom: -10,
        alignSelf: 'center',
        backgroundColor: theme.colors.black,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20
    },
    middleContainer: {
        paddingHorizontal: 10
    },
    brandText: {
        color: theme.colors.white,
        fontSize: 12,
        fontWeight: '700'
    },
    nameText: {
        fontWeight: '700'
    },
    priceText: {
        fontSize: 20,
        fontWeight: '700'
    },
    cardImage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 250,
        aspectRatio: 1
    },
    actionContainer: {
        marginTop: 20
    }
});

export default styles;