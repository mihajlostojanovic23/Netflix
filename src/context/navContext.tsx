import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface INavValueContext {
  indicator: string;
  setIndicator: Dispatch<SetStateAction<string>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  color: any;
  setColor: Dispatch<SetStateAction<any>>;
  positionX: any;
  setPositionX: Dispatch<SetStateAction<any>>;
  positionY: any;
  setPositionY: Dispatch<SetStateAction<any>>;
  column: any;
  setColumn: Dispatch<SetStateAction<any>>;
}

const initialStateContext = {
  indicator: '',
  setIndicator: () => {},
  index: 0,
  setIndex: () => {},
  value: [],
  setValue: () => {},
  color: [],
  setColor: () => {},
  positionX: null,
  setPositionX: () => {},
  positionY: null,
  setPositionY: () => {},
  column: 0,
  setColumn: () => {},
};

const NavContext = createContext<INavValueContext>(initialStateContext);

export const NavProvider = ({ children }: any) => {
  const [indicator, setIndicator] = useState('SideBar');
  const [index, setIndex] = useState(0);
  const [column, setColumn] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [value, setValue] = useState();
  const [color, setColor] = useState([]);

  return (
    <div>
      <NavContext.Provider
        value={{
          indicator,
          setIndicator,
          index,
          setIndex,
          value,
          setValue,
          color,
          setColor,
          positionX,
          setPositionX,
          positionY,
          setPositionY,
          column,
          setColumn,
        }}
      >
        {children}
      </NavContext.Provider>
    </div>
  );
};

export default NavContext;
