import Link from 'next/link';
import { FaProjectDiagram } from 'react-icons/fa';
import { LiaRobotSolid } from 'react-icons/lia';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

const SideNav = () => {
    const navItems = [
        { link: '/', name: 'Dashboard', icon: RxDashboard },
        { link: '#', name: 'Project Manager', icon: FaProjectDiagram },
        { link: '/ai', name: 'AI Prompt', icon: LiaRobotSolid },
        { link: '/auth', name: 'Auth', icon: RiLockPasswordLine },
    ];

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200">
            <div>
                <ul className="space-y-2 font-medium">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.link}
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200"
                            >
                                <item.icon />
                                <span className="ml-3">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideNav;
