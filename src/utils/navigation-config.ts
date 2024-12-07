const shouldShowNavBar = (pathname: string) => {
  const hideNavBar = ['/login', '/signup'];

  return !hideNavBar.some((path) => pathname.startsWith(path));
};

export { shouldShowNavBar };
