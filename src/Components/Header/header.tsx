import React, { useState } from 'react';
import './header.scss';
import Container from '../Commons/Container/container';
import SwitchTheme from '../Commons/Container/SwitchTheme/switchTheme';
import { Form, InputGroup } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
// import avatar from '../../Asset/Images/Header/avatar.jpg';

export default function header() {

  return (
    <header className='header'>
      <Container>
        <div className="header-content">

          <div className="admin-profile">

            <div className='admin-profile-avatar'>
              <img src="/Images/Header/avatar.jpg" alt="Admin Profile" />
            </div>

            <div className='admin-profile-info'>
              <h2> سروش طهرانی </h2>
              <h3> سمت کاربر </h3>
            </div>

          </div>

          <div className='admin-profile-Section-left'>
            <div>
              <InputGroup className='search-box'>
                <Form.Control placeholder="جستجو" />
                <InputGroup.Text id="basic-addon1"> <BiSearchAlt /> </InputGroup.Text>
              </InputGroup>
            </div>
            <SwitchTheme />
          </div>

        </div>
      </Container>
    </header >
  )
}