import MainSection from './components/MainSection';
import SideBar from './components/SideBar';
import { NavProvider } from './context/navContext';
function App() {
  return (
    <NavProvider>
      <div className="App flex">
        <SideBar />
        <MainSection />
      </div>
    </NavProvider>
  );
}

export default App;
