function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  const cost = price.regularPrice;
  const full_background = displayAssets[0].full_background;

  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img src={full_background} alt={name} width='100px' />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button onClick={() => addToBasket({ id, name, cost })} className='btn'>
          Купить
        </button>
        <span className='right' style={{ fontSize: '1.8rem' }}>
          {cost} у.е.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
