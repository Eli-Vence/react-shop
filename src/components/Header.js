function Header() {
  return (
    <nav className='blue darken-4'>
      <div className='nav-wrapper'>
        <a href='https://eli-vence.github.io/react-shop/' className='brand-logo'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/Eli-Vence/react-shop'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
