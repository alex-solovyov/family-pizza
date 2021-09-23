import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/reducers/categories'

export const Categories = React.memo(({ activeCategory }) => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.categories.items)

    const onSelectCategory = (id) => {
        dispatch(actions.changeCategory(id))
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectCategory(null)}>Все</li>
                {items && items.map(item => {
                    return <li key={item.id} className={activeCategory === item.id ? 'active' : ''} onClick={() => onSelectCategory(item.id)}>{item.name}</li>
                })}
            </ul>
        </div>
    )
})