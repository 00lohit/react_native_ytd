import React,{createContext, useState} from 'react';

export const LinkContext = createContext();

export const LinkData = (props) => {

    const [Link, setLink] = useState('')


  return (
    <LinkContext.Provider value={[Link, setLink]}>
    {props.children}
    </LinkContext.Provider>
  );
}
