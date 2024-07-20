import{useState,useEffect} from'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'
const FormComponent = (props)=>{
    console.log("Render Form component")
    const [title,setTitle] = useState('')
    const [amount,setAmount] =useState(0) //useState(0)
    const [formValid,setFormValid] = useState(false)//เก็บสถานะการเพิ่มข้อมูลในแบบฟอร์ม

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData) //การส่งข้อมูลจากลูกไปหาแม่
        //กดเพิ่มข้อมูลแล้วให้เคลียร์ค่าตรง state เป็นค่าเริ่มต้น
        setTitle('')
        setAmount(0)
    }
//Useeffect จะถูกเรียกใช้เมื่อ re render การเปลี่ยนแปลงค่า stateที่เกิดขึ้นใน formcomponent
    useEffect(()=>{ //console.log("Call useEffect")
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
        // if(checkData){
        //     setFormValid(true)
        // }                
    },[title,amount]) //อะเรย์นี้คือเราระบุส่วนที่เราต้องการดักจับเพื่อที่จะทำให้เกิดเอฟเฟ็กเกิดขึ้น (เมื่อมีการปปค่าที่ state amount มันจะทำการเรียกใช้ useEffect)
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className='form-control'>
                    <label>ชื่อรายการ</label>
                    <input type='text' placeholder='ระบุชื่อรายการของคุณ' onChange={inputTitle} value={title}/>
                </div>
                <div className='form-control'>
                    <label>จำนวนเงิน</label>
                    <input type='number' placeholder='(+ รายรับ , - รายจ่าย)' onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type='submit' className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>  
                </div>
            </form>
        </div>
    )
}

export default FormComponent