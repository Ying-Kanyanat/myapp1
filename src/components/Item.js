import PropTypes from 'prop-types'; 
import './Item.css'


const Item = (props)=> {
    const {title,amount} = props   //title ชื่อรายการ amount จำนวนเงิน
    const status = amount < 0 ? "expense":"income" // ถ้า amount<0จริง จะเป็นรายจ่าย ถ้าไม่จริงจะเป็นรายรับ
    const symbol = amount < 0 ? "-":"+"
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }
    return(
        <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item