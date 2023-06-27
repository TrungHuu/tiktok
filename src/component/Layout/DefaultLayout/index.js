import Header from '~/component/Layout/component/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="content">{children}</div>
        </>
    );
}

export default DefaultLayout;
