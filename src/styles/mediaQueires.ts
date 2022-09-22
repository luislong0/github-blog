export const breakpoints: any = {
    sm: 411,
    md: 768,
    lg: 1440,
  }
  
  export const mediaQueries = (key: any) => {
    return (style: any) => `@media (max-width: ${breakpoints[key]}px) {${style} }`
  }
  