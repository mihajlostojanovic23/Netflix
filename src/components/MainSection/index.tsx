import { useContext, useEffect } from 'react';
import NavContext from '../../context/navContext';
import { Data } from '../../data/Categories';
import Category from '../Category';

function MainSection() {
  const {
    index,
    setIndex,
    indicator,
    setIndicator,
    setValue,
    value,
    color,
    setColor,
    positionX,
    setPositionX,
    positionY,
    setPositionY,
    column,
    setColumn,
  } = useContext(NavContext);

  const menu = document.querySelectorAll(`.menu_category${column} .cat_item`);
  const categories = document.querySelectorAll('.categories');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ArrowRight = () => {
    menu.forEach((item) => item.classList.remove('menu_item_active'));

    if (index === menu.length - 1) {
      setIndex(0);
      setPositionX(0);

      menu[index].classList.add('menu_item_active');
    } else {
      setPositionX(positionX - 210);

      setIndex(index + 1);
      console.log(positionX);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ArrowLeft = () => {
    menu.forEach((item) => item.classList.remove('menu_item_active'));
    if (index > 0) {
      setPositionX(positionX + 210);
      setIndex(index - 1);
    } else {
      setIndex(0);
      setPositionX(0);
      setPositionY(0);
      setIndicator('SideBar');
      setColumn(0);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ArrowUp = () => {
    if (column > 0) {
      console.log(categories.length);
      menu.forEach((item) => item.classList.remove('menu_item_active'));

      setIndex(0);
      setPositionX(0);
      setPositionY(positionY + 210);
      setColumn(column - 1);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ArrowDown = () => {
    if (categories.length - 2 > column) {
      console.log(categories.length);
      menu.forEach((item) => item.classList.remove('menu_item_active'));
      setPositionY(positionY - 210);
      setIndex(0);
      setPositionX(0);

      setColumn(column + 1);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Enter = () => {
    // eslint-disable-next-line array-callback-return
    Data.map((items: any) => {
      console.log(items);

      // eslint-disable-next-line array-callback-return
      if (items.id === column) {
        // eslint-disable-next-line array-callback-return
        items.programs.map((item: any) => {
          const { title, color } = item;
          if (parseInt(item.id) === index + 1) {
            setValue(title);
            setColor(color);
          }
        });
      }
    });
  };

  useEffect(() => {
    const menu_container = document.querySelectorAll(`.menu_category${column}`);
    menu_container[0].setAttribute(
      'style',
      `transform: translate(${positionX}px);
      transition: 300ms`
    );

    const categories = document.querySelector('.categories');
    categories?.setAttribute(
      'style',
      `transform: translateY(${positionY}px);
      transition: 300ms`
    );

    const menu = document.querySelectorAll(`.menu_category${column} .cat_item`);

    const func = (e: any) => {
      if (indicator === 'Right') {
        switch (e.key) {
          case 'ArrowRight':
            ArrowRight();
            break;
          case 'ArrowLeft':
            ArrowLeft();
            break;
          case 'ArrowUp':
            ArrowUp();
            break;
          case 'ArrowDown':
            ArrowDown();
            break;
          case 'Enter':
            Enter();
        }
      }
    };

    if (indicator === 'Right') {
      menu[index].classList.add('menu_item_active');
    }

    document.addEventListener('keydown', func);
    return () => {
      document.removeEventListener('keydown', func);
    };
  }, [
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Enter,
    column,
    index,
    indicator,
    positionX,
    positionY,
  ]);

  return (
    <div className=" min-h-[100vh] overflow-x-hidden  ml-[100px] bg-[black]">
      <div
        className={`item_selected flex items-center  relative  z-10 justify-center text-[white] h-[50vh] ${
          color && 'bg-[white]'
        }`}
        style={{ background: color }}
      >
        <p className="text-[35px] ">
          {' '}
          {value ? (
            <div>{value}</div>
          ) : (
            <div className="text-[black]">Welcome</div>
          )}
        </p>
      </div>

      <div className="categories overflow-hidden   items-center">
        {Data.map((programs: any, index: number) => (
          <div
            className="categories min-w-[100%] min-h-[60px] flex bg-[#000000] ml-[10px]  my-[10px] text-[white] "
            key={index}
          >
            <Category {...programs} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
