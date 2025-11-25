import Banner from './Banner'
import Lottie from "lottie-react";
import animationData from "../assets/loading.json";


export default function Loader({status}) {

    if(!status) { return null } 

    return (
        <>

            <div className='loader_box'>
                <div className='lot_box'>
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>

        </>
    );
}
