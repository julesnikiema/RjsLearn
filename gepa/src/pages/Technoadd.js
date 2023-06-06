import React from 'react';

const Technoadd = () => {
    return (
        <div className="technoadd" >
            <h1>Add a Techno</h1>
            <div>
                <form>
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
                    <input type="submit" value="add techno" />
                </form>
            </div>
            
        </div>
    );
};

export default Technoadd;