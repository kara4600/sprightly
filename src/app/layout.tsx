import type { Metadata } from 'next';
import './globals.css';
import SideNav from './components/SideNav/SideNav';
import Header from './components/SideNav/Header';

export const metadata: Metadata = {
    title: 'Sprightly',
    description: 'An Agile project manager',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SideNav />
                <Header />
                <main className="ml-64 py-20 px-6">{children}</main>
            </body>
        </html>
    );
}
