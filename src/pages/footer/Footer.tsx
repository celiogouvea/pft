import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
      <p>&copy; 2022 - {currentYear} CGouvea. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;