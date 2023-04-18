import { lazy } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import GetReq from './Page/GetReq/GetReg';

const Layout = lazy(() => import("./Components/Layout/Layout"))

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
        <GetReq/>
      </Layout>
    </div>
  );
}

export default App;
