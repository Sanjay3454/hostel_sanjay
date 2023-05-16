import React from 'react';
import './Header.css';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div className="header-container">
      <MDBNavbar light bgColor="light" style={{ height: '4rem', overflowY: 'hidden' }}>
        <MDBContainer fluid>
          <div className="d-flex align-items-start mb-3">
            <img src="/200w.gif" alt="Logo" style={{ marginTop: '-14px' }} />
            <MDBNavbarBrand className='mb-5 navbrand ' href="#">Kochi Hostel</MDBNavbarBrand>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
