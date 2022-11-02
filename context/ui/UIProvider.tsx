import { useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

type Props = {
  children?: React.ReactNode;
};

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = ()=>{
    dispatch({type:'UI - Open Sidebar'})
  }
  const closeSideMenu = ()=>{
    dispatch({type:'UI - Close Sidebar'})
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        //mrthods
        openSideMenu,
        closeSideMenu

      }}
    >
      {children}
    </UIContext.Provider>
  );
};