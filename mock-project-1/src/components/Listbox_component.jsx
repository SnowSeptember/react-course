import React from 'react';

function Listbox_component() {
    return (
        <div>
            <label for="cars">Choose a car:</label>

            <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
}

export default Listbox_component;