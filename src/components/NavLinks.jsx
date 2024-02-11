import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: 'products', text: 'products' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'cart', text: 'cart' },
  { id: 4, url: 'checkout', text: 'checkout' },
  { id: 5, url: 'orders', text: 'orders' },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize tracking-wide">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
