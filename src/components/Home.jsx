
import KPI from "./kpi/KPI"
import Insurance from "./insurance/Insurance"
import  NewGraph  from './kpi/Newgraph';
import FootageContainer from './FootageContainer';
const Home = () => {
  return (
    <>
    <div id="mainContainer " className="bg-[#D8DFEA]">
<div id="leftContainer" className="flex flex-col gap-6 lg:w-[70%] md:w-[50%] bg-[#EDF1F7] p-4 rounded-lg">
    
<NewGraph />

   <div className="flex  sm:flex-col md:flex-row flex-col gap-6  sm:items-center md:items-center items-center">
   <KPI />
    <Insurance />
   </div>
   <FootageContainer />
   
    </div>

<div id="rightContainer" className="lg:w-[50%] md:w-[30%]"></div>

    </div>
    
     
    </>
  )
}

export default Home