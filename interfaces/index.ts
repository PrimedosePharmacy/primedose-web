// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface User {
  id: number;
  name: string;
}

export interface ButtonInterface {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  size?: string; // sm, md, lg
  disabled?: boolean;
}
