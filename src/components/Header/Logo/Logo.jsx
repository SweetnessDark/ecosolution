import { Link } from './Logo.styled';
const picturesLogo = new URL('/src/images/logo.png', import.meta.url);

const Logo = () => {
  return (
    <Link href={'/'}>
      <picture>
        <img src={picturesLogo} alt="Logotype" />
      </picture>
    </Link>
  );
};

export default Logo;
