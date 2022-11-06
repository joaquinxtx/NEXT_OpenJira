import { createContext } from 'react';

interface ContextProps{
     sideMenuOpen: boolean;
     isAddingEntry:boolean;
     //methods
     openSideMenu: () => void;
     closeSideMenu:() => void;
     setIsAddiongEntry: (isAdding: boolean) => void
}

export const UIContext =createContext({}as ContextProps); {}