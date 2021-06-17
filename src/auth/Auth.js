import React,{useState} from 'react';
import Singin from './Singin';
import Singup from './Singup';
import './../style/index.css'

function Auth(props) {
  const [isSigup,setSigup] = useState(false)
  return (
    <div style={{display:'flex'}}>
      
     <div className='wrapAuth' style={{margin:'auto',marginTop:'30px'}}>
     <div className='button_swap'>
        <button className={`button ${isSigup ? 'noActive':''}`} onClick ={() => setSigup(false)}>
          Đăng nhập
        </button>
        <button  className={`button ${!isSigup ? 'noActive':''}`} onClick ={() => setSigup(true)}>
          Đăng kí
        </button>
      </div>
      {!isSigup ? <Singin /> : <Singup />}
     </div>
     
    </div>
  );
}

export default Auth;