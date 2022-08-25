import React, {useState, useEffect} from 'react' 


 export const ContactsPage = ({contacts, addContact}) => { 

    const [name, setName] = useState(['']); 
    const [phone, setPhone] = useState(['']); 
    const [email, setEmail] = useState(['']);  
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDEfault(); 
        
        if(!duplicate){
            addContact(name, phone, email); 
            setName(''); 
            setPhone(''); 
            setEmail(''); 
        }
    }

    useEffect(()=>{

        const nameIsDuplicate = () =>{
            const found = contacts.find((contact)=> contact.name === name); 
            if (found !== undefined) {
                return true;
              }
              return false;
            };
        
            if (nameIsDuplicate()) {
              setDuplicate(true);
            } else {
              setDuplicate(false);
            }

    },[name, contacts, duplicate])


  return (
    <>
    <section>
        <h2>
            Add Contact 
            {duplicate ? " ' Name already exists": ""}
        </h2>
    </section>
    </>
  )
}
