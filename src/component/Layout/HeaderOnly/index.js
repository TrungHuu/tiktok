import Header from "~/component/Layout/component/Header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />

      <div className="content">{children}</div>
    </>
  );
}

export default HeaderOnly;
