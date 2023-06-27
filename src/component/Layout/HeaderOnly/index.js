import Header from '~/component/Layout/component/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <div className="content">{children}</div>
        </>
    );
}

export default DefaultLayout;
