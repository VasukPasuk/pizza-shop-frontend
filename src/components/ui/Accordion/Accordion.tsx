import React, {FC, ReactElement} from 'react';
import {IoIosArrowForward} from "react-icons/io";


type Accordion = {
  children: React.ReactNode
}

const Accordion:FC<Accordion> = (props) => {
  const {children} = props;
  return (
    <div className="accordion">

    </div>
  );
}

type AccordionHead = {
  children: React.ReactNode
}

const AccordionHead:FC<AccordionHead> = (props) =>  {
  const {children} = props;
  return (
    <div className={`accordion-head`}>
      <span>
        {children}
      </span>
      <IoIosArrowForward />
    </div>
  )
}

type AccordionBody = {
  children: React.ReactNode
}

const AccordionBody:FC<AccordionBody> = (props) =>  {
  const {children} = props;
  return (
    <ul className={`accordion-body`}>
      {children}
    </ul>
  )
}

type TypeAccordionItem = {
  icon: SVGAElement,
  text: string
}

const AccordionItem:FC<TypeAccordionItem> = (props) => {
  const {icon, text} = props;
  return (
    <li className={`accordion-item`}>
      icon
      <span>
        text
      </span>
    </li>
  )
}

export {Accordion};