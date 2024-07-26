import './ItemCart.css'

export const ItemCart = ({ item, incrementAmount, decrementAmount, deleteItem }) => {

    const { name, image, price, amount, id } = item;

    return (
        <div className='item'>
            <img src={image} alt="plant" className='item-img' />
            <p className='item-title'>{name}</p>
            <p className='item-price'>${price}</p>
            <div className='amount-opt'>
                <button className='amount-less' onClick={() => decrementAmount(id)}> - </button>
                <p className='item-amount'>{amount}</p>
                <button className='amount-more' onClick={() => incrementAmount(id)} > + </button>
            </div>
            <button
                className='item-delete'
                onClick={()=> deleteItem(id)}
            >
                x
            </button>
        </div>
    )
}
