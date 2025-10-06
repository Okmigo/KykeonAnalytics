import {
  ArrowTrendingUpIcon,
  BeakerIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  ArrowTrendingUpIcon,
  BeakerIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
};

export function Icon({ name, className = 'h-6 w-6' }) {
  const Component = iconMap[name] ?? SparklesIcon;
  return <Component className={className} aria-hidden="true" />;
}
