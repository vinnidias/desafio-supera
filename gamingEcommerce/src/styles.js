const styles = {
    productCardContainer: {
        width: 250,
        height: 350,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },

    shopScreenContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    shopScreenHeader: {
        flex: 1,
        height: 80,
        backgroundColor: '#1e90ff'
    },

    cartHeader: {
        alignSelf: 'flex-end',
        margin: 20
    },
    
    buttonCardContainer: {
        flexDirection: 'row'
    },

    quantityButton: {
        width: 150,
        height: 35,
        justifyContent: 'space-between',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },

    quantityText: {
        marginVertical: 5
    },

    minusButton: {
        backgroundColor: 'gold',
        width: 30,
        height: 33,
        padding: 5
    },

    plusButton: {
        backgroundColor: 'gold',
        width: 30,
        height: 33,
        padding: 5, 
        alignItems: 'flex-end'
    },

    cardText:{
        marginTop: 8
    },
    
}

export default styles