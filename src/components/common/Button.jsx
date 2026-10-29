import { Link } from 'react-router-dom'
const styles = {
  primary: 'bg-lime text-midnight hover:bg-paper',
  secondary: 'border border-paper/30 text-paper hover:bg-paper hover:text-midnight',
  coral: 'bg-coral text-midnight hover:bg-paper',
}
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
