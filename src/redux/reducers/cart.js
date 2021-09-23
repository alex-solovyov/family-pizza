const ADD_ITEM = 'cart/ADD_ITEM'
const REMOVE_ITEMS = 'cart/REMOVE_ITEMS'
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const ADD_ITEM_COUNT = 'cart/ADD_ITEM_COUNT'
const REMOVE_ITEM_COUNT = 'cart/REMOVE_ITEM_COUNT'

const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            // const newItems = {
            //     ...state.items,
            //     [action.payload.id]: [
            //         ...state.items[action.payload.id] || [],
            //         action.payload
            //     ]
            // }

            // const allItems = [].concat(...Object.values(newItems))
            // allItems.length
            // allItems.reduce((sum, item) => item.price + sum, 0)

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: [
                        ...state.items[action.payload.id] || [],
                        action.payload
                    ]
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + Number(action.payload.price)
            }

        case REMOVE_ITEMS:
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }

        case REMOVE_ITEM:
            const newItems = { ...state.items }
            delete newItems[action.item.id]

            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - state.items[action.item.id].length,
                totalPrice: state.totalPrice - action.item.price * state.items[action.item.id].length
            }

        case ADD_ITEM_COUNT:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.item.id]: [
                        ...state.items[action.item.id],
                        action.item
                    ]
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + Number(action.item.price)
            }

        case REMOVE_ITEM_COUNT:
            const oldActionItems = state.items[action.item.id]
            const newActionItems = oldActionItems.length > 1 ? oldActionItems.slice(1) : oldActionItems
            
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.item.id]: newActionItems
                },
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - Number(action.item.price)
            }

        default:
            return state
    }
}

export const actions = {
    addPizzaToCart: ({id, name, imageUrl, price, size, type}) => ({type: ADD_ITEM, payload: {id, name, imageUrl, price, size, type}}),
    clearCart: () => ({type: REMOVE_ITEMS}),
    removeItem: (item) => ({type: REMOVE_ITEM, item}),
    addItemCount: (item) => ({type: ADD_ITEM_COUNT, item}),
    removeItemCount: (item) => ({type: REMOVE_ITEM_COUNT, item})
}