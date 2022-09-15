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
    const[user,setUser]=useState({
        name:"",
        surname:"",
        birthday:"",
    })
    const [errors,setErrors]=useState({
        name:null,
        surname:null,

    });
    useEffect(()=>{
        if (user.name.length<8) {
            setErrors({...errors,name:"Sifre 8 simvol olmalidir !"})
        }
    },[user])
    const[users,setUsers]=useState([]);
    const handleInput=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const saveUser=(e)=>{
        e.preventDefault();
        setUsers([...users,user]);
        setUser({
            name:"",
            surname:"",
            birthday:"",
            password:"",
            confirmpassword:"", 
            
        });
    };
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
         
   {/* <form onSubmit={saveUser}>
    <input onChange={handleInput} name="name" type="text" value={user.name} placeholder="Name" />
    <input onChange={handleInput} name="surname" type="text" value={user.surname}  placeholder="Surname" />
    <input onChange={handleInput} name="birthday"value={user.birthday}   type="date"  />
    <input onChange={handleInput} name="password" type="password" value={user.password}  placeholder="password" />
    <input onChange={handleInput} name="confirmpassword" type="password" value={user.confirmpassword}  placeholder="confirmpassword" />
    <input type="submit" value="Save" />
   </form> */}
   </div>
   </section>
    <section>
        <form action="">

        </form>
    </section>
   </>
  )
}

export default Form