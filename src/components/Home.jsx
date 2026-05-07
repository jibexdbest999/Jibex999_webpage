import React, {useState, useEffect} from "react";
import HeroSlider from "./HeroSlider";
import Footer from "./Footer";
import Body from "./Body";
import UnsubscribeConfirmationModal from "./Pages/UnsubscribeComfirmationModal";
import { RingLoader } from "react-spinners";

export default function Home({ openProjectsModal }) {

const [showUnsubModal, setShowUnsubModal] = useState(false);
const [unsubscribeToken, setUnsubscribeToken] = useState(null)

const [pageIsLoading, setPageIsLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(() => setPageIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])
  
  //Detect unsubscribe token in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("unsubscribe");

    if (token) {
      setUnsubscribeToken(token);
      setShowUnsubModal(true);
    }
  }, []);

  if (pageIsLoading) return <div className='flex flex-col mx-auto items-center justify-center h-screen'>
      <RingLoader color="#0360ff" size={80} />
      <p className='text-lg lg:text-3xl pt-2 font-semibold text-cyan-600'>Loading...</p>
    </div>

  return (
    <div>
    
      <HeroSlider />

      <Body openProjectsModal={openProjectsModal} />
          
      <Footer/>    

       {showUnsubModal && (
        <UnsubscribeConfirmationModal
          token={unsubscribeToken}
          onClose={() => setShowUnsubModal(false)}
        />
      )}
    </div>
  );
}
