const SET_CATEGORY = 'categories/SET_CATEGORY'

const initialState = {
    items: [
        {id: 0, name: 'Мясные'},
        {id: 1, name: 'Вегетарианские'},
        {id: 2, name: 'Гриль'},
        {id: 3, name: 'Острые'},
        {id: 4, name: 'Закрытые'},
    ],
    categoryActive: null
}

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY: 
            return {
                ...state,
                categoryActive: action.payload
            }
    
        default:
            return state
    }
}

export const actions = {
    changeCategory: (categoryId) => ({type: SET_CATEGORY, payload: categoryId}),
}