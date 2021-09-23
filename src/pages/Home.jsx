import React from 'react'

import { Categories, Sort, PizzaItem, PizzaLoadingItem } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { getPizzas } from '../redux/reducers/pizzas'

export const Home = () => {

    const dispatch = useDispatch()

    const pizzas = useSelector(state => state.pizzas.items)
    const isLoaded = useSelector(state => state.pizzas.isLoaded)
    const isError = useSelector(state => state.pizzas.isError)
    const category = useSelector(state => state.categories.categoryActive)
    const sortBy = useSelector(state => state.sorts.sortActive)
    const cartItems = useSelector(state => state.cart.items)

    React.useEffect(() => {
        dispatch(getPizzas(category, sortBy))
    }, [category, sortBy])

    if(isError){
        return (
            <h1>gg</h1>
        )
    }
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} />
                <Sort activeSortType={sortBy.type} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded 
                    ? pizzas && pizzas.map(item => <PizzaItem key={item.id} item={item} countInCart={cartItems[item.id] && cartItems[item.id].length} />)
                    : Array(12).fill(0).map((_, index) => <PizzaLoadingItem key={index} />)
                }
            </div>
        </div>
    )
}