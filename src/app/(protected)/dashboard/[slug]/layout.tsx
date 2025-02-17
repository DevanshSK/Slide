import InfoBar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';
import React from 'react'

type Props = {
    children: React.ReactNode;
    params: { slug: string };
}

const Layout = ({ children, params }: Props) => {

    // WIP: QueryClient using React Query
    return (
        <div className='p-3'>
            <Sidebar slug={params.slug} />
            {/* {children} */}

            {/* InfoBar */}
            <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
                <InfoBar slug={params.slug} />
                {children}
            </div>
        </div>
    )
}

export default Layout