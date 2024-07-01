import React from 'react';

import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

function TopBar() {
  return (
    <div className='my-topBar'>
      <div className='telefone'>
        <BsTelephone className='icon-top phone'/>
        <p>48 99602 9392</p>
      </div>
      <div>
        <BsEnvelope className='icon-top envelop'/>
        <p>marcondes.machado.ti@gmail.com</p>
      </div>
    </div>
  )
}

export default TopBar