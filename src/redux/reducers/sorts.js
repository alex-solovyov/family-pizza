const SET_SORT = 'sorts/SET_SORT'

const initialState = {
    items: [
        {id: 0, name: 'популярности', type: 'rating', order: 'desc'},
        {id: 1, name: 'цене', type: 'price', order: 'asc'},
        {id: 2, name: 'алфавиту', type: 'name', order: 'asc'},
    ],
    sortActive: {
        type: 'rating',
        order: 'desc'
    }
}

export const sorts = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: 
            return {
                ...state,
                sortActive: action.payload
            }
    
        default:
            return state
    }
}

export const actions = {
    changeSortBy: (sortType) => ({type: SET_SORT, payload: sortType}),
}