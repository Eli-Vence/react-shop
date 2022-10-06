import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  const totalCost = order.reduce((sum, el) => {
    return sum + el.cost * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item blue darken-4 white-text'>
        Корзина
        <i onClick={handleBasketShow} className='material-icons basket-close'>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li href='#!' className='collection-item blue darken-4 white-text'>
        Общая стоймость: {totalCost} у.е.
        <button className='btn-small right sub-btn'>Оформить</button>
      </li>
    </ul>
  );
}

export { BasketList };
