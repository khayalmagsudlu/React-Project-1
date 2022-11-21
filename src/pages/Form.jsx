import { useEffect } from "react";
import {useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2'
function Form() {
    const [number,setNumber]=useState('');
    const [name,setName]=useState('');
    const [expiry,setExpiry]=useState('');
    const [cvc,setCvc]=useState('');
    const [focus,setFocus]=useState('');
  
  return (
    <>
    <Cards number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}/>
    <section className="user-forms">
        <div className="user-form">
            <form>
                <input type="text" name="number" placeholder="Card Number" value={number} onChange={e=>setNumber(e.target.value)}
                onFocus={e=>setFocus(e.target.name)} maxLength={16} />
                <input type="text" name="number" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}
                onFocus={e=>setFocus(e.target.name)} maxLength={18} />
                <input type="text" name="expiry" placeholder="MM/YY Expiry" value={expiry} onChange={e=>setExpiry(e.target.value)}
                onFocus={e=>setFocus(e.target.name)} maxLength={4}  />
                <input type="text" name="cvc" placeholder="CVC" value={cvc} onChange={e=>setCvc(e.target.value)}
                onFocus={e=>setFocus(e.target.name)} maxLength={3}  />
             <input type="submit" value="save" onClick={(e)=>{
                    e.preventDefault();
                    Swal.fire(
                        'Sifarişiniz Qeydə Alındı',
                        'Bizi Seçdiyiniz Üçün Təşəkkürlər',
                        'success'
                      )
                }}/>
            </form>
   </div>
   </section>
   </>
  )
}

export default Form