import React ,{useState}from 'react'
import './conntact.css'
import Img from '../../img/contact.png'
import Button from '../Button'
const Conntact = () => {
    const formField = {
        fristName : '',
        lastName : '',
        email : '',
        phone : '',
        message : '',
    }
    const [data, setData] = useState(formField)
    const [buttonText, setButtonText] = useState('send')
    const [status, setStatus]= useState({success: false, message: " " })
    const onformField = (x, value) =>{
        setData({...data, [x]: value})
    }
    const handelSubmit = (e)=>{
        e.preventDefault()
        setButtonText('Sending....')
        setStatus({success: true, message: "Message has been sent" })
    }
  return (
    <div className='contact' id='contact'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <img src={Img} className='img-fluid '/>
                </div>
                <div className='col-md-6'>
                    <h2>get in touch</h2>
                    <form onSubmit={handelSubmit}>
                        <div className='row'>
                            <div className='col-sm-6 px-1'>
                                <input type='text' placeholder='first name' value={data.fristName} onChange={(e) => onformField('fristName', e.target.value) }/>
                            </div>
                            <div className='col-sm-6 px-1'>
                            <input type='text' placeholder='last name' value={data.lastName} onChange={(e) => onformField('lastName', e.target.value) }/>
                            </div>
                            <div className='col-sm-6 px-1'>
                            <input type='email' placeholder='email' value={data.email} onChange={(e) => onformField('email', e.target.value) }/>
                            </div>
                            <div className='col-sm-6 px-1'>
                            <input type='tel' placeholder='phone' value={data.phone} onChange={(e) => onformField('phone', e.target.value) }/>
                            </div>
                            <div className='col-sm-12 px-1'>
                                <textarea value={data.message} placeholder='message' onChange={(e) => onformField('message', e.target.value) }></textarea>
                                <Button content= {buttonText} type="submit"/>
                            </div>
                            {
                                status.message && <div className='col-sm-12'><p className={`mt-3 bg-white p-2 text-center ${status.success === false ? 'text-danger d-none' : 'text-success d-block'}`}>{status.message}</p></div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Conntact