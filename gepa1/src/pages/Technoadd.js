import { useState } from 'react';
import React from 'react';

const Technoadd = (props) => {

    const [technos, setTechnos] = useState({
        technoName: '',
        technoCategory: '',
        technoDescription: ''
      });
      

      function handleChange(evt) {
        const { name, value } = evt.target;
        setTechnos({ ...technos, [name]: value });
        
      }
    // props est un objet contenant la propriété handleaddtechnos, et en utilisant la déstructuration, 
    // vous extrayez la valeur de cette propriété dans une constante nommée handleaddtechnos

    const {handleaddtechnos}  = props;
   

    function handleSubmit(evt) {
        evt.preventDefault();
        handleaddtechnos(technos);
        setTechnos({
            technoName: '',
        technoCategory: '',
        technoDescription: ''

        });



        
    }


    return (
        <div className="technoadd" >
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={ (evt)=> handleSubmit(evt) } >
                    <label htmlFor="techno-name" >Name :</label>
                    <br/>
                    <input type="text" name="technoName" id="technoName" value={technos.technoName} onChange={ handleChange} />
                    <br/>
                    <label htmlFor="technoCategory"  > category </label>
                    <br/>
                    <select name="technoCategory" id="technoCategory" value={technos.technoCategory} onChange={ handleChange} >
                        <option value=""> select a category </option>
                        <option value="Front" >Front</option>
                        <option value="Back" >Back</option>
                        <option value="Full Stack" >Full Stack</option>
                        <option value="other" >other</option>


                    </select>
                    <br/>
                    <label htmlFor="technoDescription "  > Description </label>
                    <br/>
                    <textarea name="technoDescription" id="technoDescription" cols="30" rows="10" value={technos.technoDescription} onChange={ handleChange} ></textarea>
                    <br/>
                    <input type="submit" value="add techno" className="btn" />
                </form>
            </div>
            
        </div>
    );
};

export default Technoadd;