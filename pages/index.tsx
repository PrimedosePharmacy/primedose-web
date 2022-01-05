import Button from "../components/Button";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <div className="min-h-full">
        <p className="text-6xl text-red-500">Hello Test</p>
        <Button variant="primary" onClick={() => alert("Button is Clicked")}>
          Hello
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
