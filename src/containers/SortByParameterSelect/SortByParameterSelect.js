import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SortByParameterSelect = () => {
    return (
        <Select defaultValue="Select parameter" style={{ width: 220 }} onChange={handleChange}>
            <Option value='single-name'>name</Option>
            <Option value='num-of-passangers'>number of passangers</Option>
            <Option value='max-speed'>max speed</Option>
        </Select>
    )
}

export default SortByParameterSelect

