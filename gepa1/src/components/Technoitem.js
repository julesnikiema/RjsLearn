import React from 'react';

const Technoitem = (props) => {
    const { techno, handleDelete } = props;

    return (
        <div key={techno.id} className="card" >
        <h3>{techno.technoName}</h3>
        <h3>Category</h3>
        <p>{techno.technoCategory}</p>
        <h3>Description</h3>
        <p>{techno.technoDescription}</p>
        <div className="footer" >
          <button className="btn-delete" onClick={()=> handleDelete(techno.technoid)}  >
            delete
          </button>
        </div>

      </div>
    );
};

export default Technoitem;