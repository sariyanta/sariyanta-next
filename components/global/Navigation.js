/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image';

const navigation = [
    {
        name: 'Analytics',
        href: '#',
    },
    {
        name: 'Engagement',
        href: '#',
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#' },
    {
        name: 'Integrations',
        href: '#',
    },
    {
        name: 'Automations',
        href: '#',
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation(props) {
    return (
        <Popover className="relative bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a className="flex" href="#">
                            <span className="sr-only">Sariyanta</span>
                            <h2 className="text-2xl">Sariyanta</h2>
                        </a>
                    </div>

                </div>
            </div>
        </Popover>
    )
}
