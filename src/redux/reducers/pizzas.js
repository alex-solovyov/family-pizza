const SET_PIZZAS = 'pizzas/SET_PIZZAS'
const SET_ERROR = 'pizzas/SET_ERROR'
const SET_LOADED = 'pizzas/SET_LOADED'

const initialState = {
    items: [],
    isLoaded: false,
    isError: false
}

export const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }

        case SET_ERROR:
            return {
                ...state,
                isError: true
            }

        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
    
        default:
            return state
    }
}

export const actions = {
    setPizzas: (pizzas) => ({type: SET_PIZZAS, payload: pizzas}),
    setError: () => ({type: SET_ERROR}),
    setLoaded: (value) => ({type: SET_LOADED, payload: value})
}

export const getPizzas = (categoryId, sortType) => dispatch => {
    const category = categoryId === null ? '' : `category=${categoryId}`

    dispatch(actions.setLoaded(false))
    fetch(`/pizzas?${category}&_sort=${sortType.type}&_order=${sortType.order}`)
    .then(response => response.json())
    .then(data => dispatch(actions.setPizzas(data)))
    .catch(() => dispatch(actions.setError()))
}