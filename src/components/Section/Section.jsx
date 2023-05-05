import React from 'react';
import './Section.css'

import Header from 'components/Header/Header';

const Section = ({ title, children }) => {
  return (
    <section className='Section'>
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;

