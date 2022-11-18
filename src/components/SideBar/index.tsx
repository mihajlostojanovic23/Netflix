import { useContext, useEffect } from 'react';
import NavContext from '../../context/navContext';
import { Menu } from '../../data/Menu';
import MenuItem from './MenuItem';

function SideBar() {
  const { index, setIndex, indicator, setIndicator } = useContext(NavContext);
  useEffect(() => {
    const menu = document.querySelectorAll('.item');
    const Controller = (e: any) => {
      if (indicator === 'SideBar') {
        if (e.key === 'ArrowDown') {
          menu.forEach((item) => item.classList.remove('active'));

          if (index === menu.length - 1) {
            return setIndex(0);
          }
          setIndex(index + 1);
        }

        if (e.key === 'ArrowUp') {
          menu.forEach((item) => item.classList.remove('active'));

          if (index > 0) {
            setIndex(index - 1);
          }
          if (index === 0) {
            setIndex(menu.length - 1);
          }
        }

        if (e.key === 'ArrowRight') {
          menu.forEach((item) => item.classList.remove('active'));
          setIndex(0);
          setIndicator('Right');
        }
      }
    };
    if (indicator === 'SideBar') {
      menu[index].classList.add('active');
    }
    document.addEventListener('keydown', Controller);
    return () => {
      document.removeEventListener('keydown', Controller);
    };
  }, [index, setIndex, indicator, setIndicator]);

  return (
    <div className="sidebar min-w-[100px] h-[100vh] bg-[#000000] border-r-[1px] border-[white] flex flex-col justify-around fixed">
      <div className="menu h-[500px] flex flex-col justify-around">
        {Menu.map((item: any) => (
          <MenuItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
