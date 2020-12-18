import React, { useState, useEffect} from "react";
import FullPageMain from "../src/components/main/FullpageMain";
import MobileMain from "../src/components/main/MobileMain";
import { isMobile } from "react-device-detect";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [scrollOverFlow, setScrollOverFlow] = useState(true);
  useEffect(()=>{
    if(isMobile || window.innerWidth < 768) {
      setMobile(true);
    }
  })
  console.log(mobile)
  if(mobile) {
    return <MobileMain />
  }else {
    return <FullPageMain/>
  }
}
