import React from 'react';

interface ButtonProps {
  icons: any;
  text: string;
  style: any;
  onClick?: () => void;
  isDisabled:boolean; 
 
}

const Button: React.FC<ButtonProps> = ({ icons, text, style, onClick ,isDisabled}) => {
  const buttonStyle = {
    ...style,
    backgroundColor: isDisabled ? '#CCCCCC' : style.backgroundColor,
  };

  return (
    <button onClick={onClick} style={buttonStyle} disabled={isDisabled}>
      {text}
      {icons && icons.map((icon: any, index: number) => (
        <span key={index}>{icon}</span>
      ))}
    </button>
  );
};


    const CustomButton: React.FC<ButtonProps> = ({  icons, text, style, onClick,isDisabled }) => {
      return (
        <Button icons={icons} text={text} style={style} onClick={onClick} isDisabled={isDisabled} />
      );
    };
  
export default CustomButton;
