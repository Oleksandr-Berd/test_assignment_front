import { lazy } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import GetReq from './Page/GetReq/GetReg';
import PostReq from './Page/PostReq/PostReq';

const Layout = lazy(() => import("./Components/Layout/Layout"))

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
        <GetReq />
        <PostReq/>
      </Layout>
    </div>
  );
}

export default App;
