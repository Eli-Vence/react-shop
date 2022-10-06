function BasketItem(props) {
  const {
    id,
    name,
    cost,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item' key={id}>
      {name} x{' '}
      <i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>
        remove
      </i>
      {quantity}
      <i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>
        add
      </i>{' '}
      = {cost}
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
