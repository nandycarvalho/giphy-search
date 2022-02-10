import React from 'react';

const Container = ({ children, classNames }) => (
  <div className={`container ${classNames && classNames.length ? classNames : ''}`}>
    {children}
  </div>
);

export default Container;
