import React from 'react';

interface InputProps {
  type:any
  icon: any;
  placeHolder: string;
  style: any;
  value:any;
  accept:string;
  max:any;
  min:any
  name:string;
  onClick?: () => void; 
  onChange?:() => void;
 
}


const Input: React.FC<InputProps> =({icon,placeHolder,type,style,value,name,accept,max,min,onChange})=>{
    return(
      <div className='relative inline-block'>
        {icon}
      <input type={type} placeholder={placeHolder} style={{ ...style }} accept={accept} max={max} min={min} name={name} value={value} onChange={onChange} />
    </div>
    )
}
const CustomInput:React.FC<InputProps> = ({icon,placeHolder,type,style,value,name,accept,max,min,onChange})=>{
    return(
    <Input icon={icon} placeHolder={placeHolder} type={type} style={style} max={max} min={min} accept={accept} name={name} value={value}  onChange={onChange}/>
    )
}
export default CustomInput;