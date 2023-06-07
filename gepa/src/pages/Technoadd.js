import React from 'react';

const Technoadd = (props) => {
    // props est un objet contenant la propriété handleaddtechnos, et en utilisant la déstructuration, 
    // vous extrayez la valeur de cette propriété dans une constante nommée handleaddtechnos

    const {handleaddtechnos}  = props;
    const techno = {
        name:'react',
        category:'front-end',
        description:'learn about react'

    };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleaddtechnos(techno);



        
    }


    return (
        <div className="technoadd" >
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={ (evt)=> handleSubmit(evt) } >
                    <label htmlfor="techno-name" >Name :</label>
                    <br/>
                    <input type="text" name="techno-name" id="techno=name" />
                    <br/>
                    <label htmlFor="techno-category"  > category </label>
                    <br/>
                    <select name="techno-category" id="techno-category" >
                        <option value=""> select a category </option>
                        <option value="Front" >Front</option>
                        <option value="Back" >Back</option>
                        <option value="Full Stack" >Full Stack</option>
                        <option value="other" >other</option>


                    </select>
                    <br/>
                    <label htmlFor="techno-description "  > Description </label>
                    <br/>
                    <textarea name="techno-description" id="techno-description" cols="30" rows="10"></textarea>
                    <br/>
                    <input type="submit" value="add techno" className="btn" />
                </form>
            </div>
            
        </div>
    );
};

export default Technoadd;