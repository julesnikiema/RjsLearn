import React from 'react';
import Technoitem from '../components/Technoitem';




const AllTechnos = (props) => {
    const { technos, handleDelete } = props;
  
    return (
      <div className="techno-list">
        <h2> All technos </h2>

        <div>
        {
  technos.map(techno => (
   <Technoitem techno = {techno} key = {techno.technoid}  handleDelete={handleDelete} />
  ))
}

        </div>
      
      </div>
    );
  };
  
  export default AllTechnos;
  