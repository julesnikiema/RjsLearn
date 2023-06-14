import React from 'react';




const AllTechnos = (props) => {
    const { technos } = props;
  
    return (
      <div className="techno-list">
        <h2> All technos </h2>

        <div>
        {
  technos.map(techno => (
    <div key={techno.id}>
      <h3>{techno.technoName}</h3>
      <h3>Category</h3>
      <p>{techno.technoCategory}</p>
      <h3>Description</h3>
      <p>{techno.technoDescription}</p>
    </div>
  ))
}

        </div>
      
      </div>
    );
  };
  
  export default AllTechnos;
  