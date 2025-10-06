import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { primaryNav, resourceLinks, serviceDropdown } from '../data/navigation.js';
import { Button } from './Button.jsx';

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="header" className="sticky top-0 z-50">
      {({ open }) => (
        <div
          className={`transition-all duration-300 ${
            isScrolled || open ? 'bg-slate-950/90 backdrop-blur-lg shadow-[0_2px_40px_rgba(12,19,31,0.6)]' : 'bg-transparent'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 focus-ring" aria-label="Kykeon Analytics home">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 shadow-inner">
                  <span className="absolute inset-0 animate-glow rounded-2xl bg-brand-500/50 blur-xl" aria-hidden="true" />
                  <span className="relative text-lg font-semibold text-white">ΚΑ</span>
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-semibold text-white">Kykeon Analytics</span>
                  <span className="text-sm text-slate-400">Harm reduction intelligence</span>
                </div>
              </Link>

              <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                {primaryNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive ? 'bg-slate-900/80 text-white shadow-card' : 'text-slate-300 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Menu as="div" className="relative">
                  <Menu.Button className="focus-ring group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white">
                    Solutions
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200 group-data-[headlessui-state=open]:rotate-180"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Menu.Items className="absolute left-0 mt-4 w-80 origin-top-left rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 shadow-card focus:outline-none">
                      <div className="space-y-3">
                        {serviceDropdown.map((item) => (
                          <Menu.Item key={item.title}>
                            {({ active }) => (
                              <Link
                                to={item.to}
                                className={`focus-ring flex flex-col rounded-2xl border border-transparent p-4 transition ${
                                  active ? 'border-brand-400/40 bg-slate-800/60 text-white' : 'text-slate-300'
                                }`}
                              >
                                <span className="font-semibold">{item.title}</span>
                                <span className="text-sm text-slate-400">{item.description}</span>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-slate-800/80 pt-4">
                        <span className="text-xs uppercase tracking-wide text-slate-500">Resources</span>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {resourceLinks.map((item) => (
                            <Menu.Item key={item.to}>
                              {({ active }) => (
                                <Link
                                  to={item.to}
                                  className={`focus-ring rounded-xl px-3 py-2 text-sm transition ${
                                    active ? 'bg-slate-800/70 text-white' : 'text-slate-300'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </nav>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button as={Link} to="/results" variant="secondary">
                Explore dashboards
              </Button>
              <Button as={Link} to="/contact">
                Analyze now
              </Button>
            </div>

            <div className="lg:hidden">
              <Disclosure.Button className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-800/80 p-3 text-slate-200 transition hover:bg-slate-900/60">
                <span className="sr-only">Toggle navigation</span>
                {open ? <XMarkIcon className="h-5 w-5" aria-hidden="true" /> : <Bars3Icon className="h-5 w-5" aria-hidden="true" />}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-2 border-t border-slate-800/80 bg-slate-950/95 px-6 py-6">
              {primaryNav.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.to}
                  className={({ isActive }) =>
                    `focus-ring block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-slate-900/80 text-white' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className="mt-6 grid gap-3">
                {serviceDropdown.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="focus-ring flex flex-col rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4 text-left text-slate-300 transition hover:border-brand-400/60"
                  >
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.description}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <Button as={Link} to="/results" variant="secondary">
                  Explore dashboards
                </Button>
                <Button as={Link} to="/contact">
                  Analyze now
                </Button>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
