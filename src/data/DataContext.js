import { createContext } from "react"; //สร้างคลังข้อมูลกลาง แล้วนำข้อมูลดังกล่าวเข้ามาทำงานใน app component ให้app component ทำหน้าที่เป็น provider กระจายเข้ามูลไปยังcomponentลูก(consumer)
const DataContext = createContext()
export default DataContext