
import KPI from "./kpi/KPI"
import Insurance from "./insurance/Insurance"
import  NewGraph  from './kpi/Newgraph';
import FootageContainer from './FootageContainer';
import ActiveAlerts from './ActiveAlerts/ActiveAlerts';
import OfflineDevices from './OfflineDevices/OfflineDevices';
import InstalledDevices from './InstalledDevices/InstalledDevices';
import PropertyInfo from './PropertyInfo/PropertyInfo';
const Home = () => {
  return (
    <>
    <div id="mainContainer " className="bg-[#D8DFEA] flex flex-row gap-4">
<div id="leftContainer" className="flex flex-col gap-6 xl:w-[75%]  bg-[#EDF1F7] p-4 rounded-lg sm:w-[100%] w-[100%] 2xl:w-[70%] ">
    
<NewGraph />

   <div id="tablecontainer" className="flex  sm:flex-col xl:flex-row lg:flex-col flex-col gap-6  sm:items-center md:items-center items-center">
   <KPI />
    <Insurance />
   </div>
   <FootageContainer />
   
    </div>

<div id="rightContainer" className="lg:w-[50%] md:w-[30%] xl:w-[25%]  bg-[#EDF1F7] flex flex-col gap-4 ">
  <ActiveAlerts />
  <OfflineDevices />
  <InstalledDevices />
  <PropertyInfo />


</div>

    </div>
    
     
    </>
  )
}

export default Home