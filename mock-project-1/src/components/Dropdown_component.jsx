import React from "react";

function Dropdown_component({ param }) {
    return (
        <div>
            <select>
                <option>Bộ lọc</option>
                {param.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown_component;