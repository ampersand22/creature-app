import React from 'react'

const Navbar = ({ setFormPage, formPage, props }) => {
  return (
    <div>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Creetr</span>
            <button onClick={()=>setFormPage(!formPage)}>Add New Creature</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
