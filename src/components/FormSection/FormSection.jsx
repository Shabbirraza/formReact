import React from 'react'
import Styles from "./FormSection.module.css"
import Button from '../Button/Button.jsx'
import { MdMessage } from 'react-icons/Md';
import { BsFillTelephoneFill } from "react-icons/bs"
import{useState} from "react";

const FormSection = () => {
    // console.log(Styles)
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [text ,setText] = useState('')
 
 
    const onSubmit = (event) => {
        event.preventDefault()
    setName( event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    event.target[2].value = null
    event.target[1].value = null
    event.target[0].value = null

    }

    return (

        <div className={Styles.formSection}>
            <div className={Styles.leftSection}>
                <div className={Styles.buttonDiv}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}></Button>
                    <Button text="VIA CALL" icon={<BsFillTelephoneFill />}></Button>
                </div>
                <Button outline_Btn={true} text="VIA CALL" icon={<BsFillTelephoneFill />}></Button>
                <form action="" onSubmit={onSubmit} >
                    <div className={Styles.mainInputContainer}>
                        <div className={Styles.inputContainer}>
                            <label htmlFor="name">
                                Name

                            </label>
                            <input type="text" name='name' />
                        </div>


                        <div className={Styles.inputContainer}>
                            <label htmlFor="Email">
                                Email

                            </label>
                            <input type="text" name='Email' />
                        </div>

                        <div className={Styles.inputContainer}>
                            <label htmlFor="text">
                                Text

                            </label>
                            <textarea type="text" name='name' />
                        </div>
                    </div>
                    <div className={Styles.alignRight}>
                        <Button  text="Submit" icon={<MdMessage />}></Button>
                    </div>
                  
                </form>
                {/* <div className={Styles.inputContainer}>
                    <label htmlFor="name">
                        Name
                          <input type="text" name='name' />
                    </label>
                  
                </div> */}

            </div>
            <div className={Styles.rightSection}>
                <img src="public/images/contact.svg" alt="" />
                {name ?<h5>{"name : "+name+' email : '+email+"text : "+text}</h5>:<div></div> }
              
            </div>
           
        </div>
    )
}

export default FormSection