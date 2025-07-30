// HeaderLink.js
const HeaderLink = ({
  href,
  locale,
  currentPath,
  className = '',
  checkActive = true,
  children,
  ...restOfProps
}) => {
  // Construir la URL localizada
  const localizedHref = locale === 'es' ? href : `/${locale}${href}`;

  // Determinar si el enlace es activo
  const isActive = currentPath === localizedHref && checkActive;

  // Agregar la clase activa
  const classes = `${className} ${isActive ? 'active' : ''}`.trim();

  return (
    <a href={localizedHref} className={classes} {...restOfProps}>
      {children}
    </a>
  );
};

export default HeaderLink;
