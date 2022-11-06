import { useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry:boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry:false
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

  const setIsAddiongEntry=(isAdding:boolean)=>{
    dispatch({type:'UI - Set isAddingEntry',payload:isAdding})

  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        //mrthods
        openSideMenu,
        closeSideMenu,
        setIsAddiongEntry,

      }}
    >
      {children}
    </UIContext.Provider>
  );
};