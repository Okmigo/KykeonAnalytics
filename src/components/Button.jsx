import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const baseStyles =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ease-soft-spring';

const variants = {
  primary:
    'bg-gradient-to-r from-brand-500 via-ocean to-jade text-slate-950 shadow-glow hover:shadow-[0_0_0_4px_rgba(124,92,255,0.35)] hover:-translate-y-0.5',
  secondary:
    'border border-slate-700/80 bg-slate-900/60 text-slate-100 hover:border-brand-400/80 hover:text-white hover:shadow-card',
  ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/60',
};

export function Button({ as: Component = 'button', children, variant = 'primary', icon = true, className, ...props }) {
  return (
    <Component className={clsx(baseStyles, variants[variant], className)} {...props}>
      <span>{children}</span>
      {icon ? <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /> : null}
    </Component>
  );
}
