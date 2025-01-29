import { useEffect, FC, ReactNode } from 'react';

interface SvgComponentProps {
  children: ReactNode;
}

const SvgComponent: FC<SvgComponentProps> = ({ children }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const svgElement = document.querySelector('svg');
      if (svgElement) {
        svgElement.classList.add('animated');
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <svg>
      {children}
    </svg>
  );
};

export default SvgComponent;
