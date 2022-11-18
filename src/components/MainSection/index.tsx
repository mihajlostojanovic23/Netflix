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
    const Controller = (e: any) => {
      if (indicator === 'Right') {
        if (e.key === 'ArrowRight') {
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
        }

        if (e.key === 'ArrowLeft') {
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
        }

        if (e.key === 'ArrowDown') {
          const categories = document.querySelectorAll('.categories');
          if (categories.length - 2 > column) {
            console.log(categories.length);
            menu.forEach((item) => item.classList.remove('menu_item_active'));
            setPositionY(positionY - 210);
            setIndex(0);
            setPositionX(0);

            setColumn(column + 1);
          }
        }

        if (e.key === 'ArrowUp') {
          const categories = document.querySelectorAll('.categories');
          if (column > 0) {
            console.log(categories.length);
            menu.forEach((item) => item.classList.remove('menu_item_active'));

            setIndex(0);
            setPositionX(0);
            setPositionY(positionY + 210);
            setColumn(column - 1);
          }
        }

        if (e.key === 'Enter') {
          // eslint-disable-next-line array-callback-return
          Data.map((items: any) => {
            console.log(items);

            // eslint-disable-next-line array-callback-return
            if (items.id === column) {
              items.programs.map((item: any) => {
                const { title, color } = item;
                if (parseInt(item.id) === index + 1) {
                  setValue(title);
                  setColor(color);
                }
              });
            }
          });
        }
      }
    };

    if (indicator === 'Right') {
      menu[index].classList.add('menu_item_active');
    }
    document.addEventListener('keydown', Controller);
    return () => {
      document.removeEventListener('keydown', Controller);
    };
  }, [
    index,
    setIndex,
    indicator,
    setIndicator,
    value,
    color,
    setColor,
    setValue,
    positionX,
    setPositionX,
    setColumn,
    column,
    positionY,
    setPositionY,
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
