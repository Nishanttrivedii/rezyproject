import React from 'react'

const Insurance = () => {
 const data= [
    {
      "category": "Average Occupancy",
      "value": "86% (-5%)"
    },
    {
      "category": "Eviction",
      "value": "8% (+5%)"
      
    },
    {
      "category": "Unregistered Vehicle",
      "value": 234,
      // No change indicator needed for numerical values
    },
    {
      "category": "Vacant Alerts",
      "value": 234,
 // No change indicator needed for numerical values
    },
    {
      "category": "Curfew Activity",
      "value": 0,
     // No change indicator needed for zero value
    }
  ]
  
  return (
  <div className='bg-white rounded-lg  w-[21rem]'>
      <table className=" divide-y divide-gray-200 border-separate border-spacing-y-3 font-inter  m-4 ">
    
    <tbody className="divide-y divide-gray-200">
      {data.map((item, index) => (
        <tr key={index} className="bg-[#EDF1F7]">
          <td style={{lineHeight:'3px'}} className="rounded-l-xl px-6 py-4 whitespace-nowrap text-sm font-medium text-[#5C626E] font-inter">{item.category}</td>
          <td style={{lineHeight:'3px'}}  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#01337C] font-inter">
            {typeof item.value === 'string' ? item.value : item.value.toString()} 
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
}

export default Insurance