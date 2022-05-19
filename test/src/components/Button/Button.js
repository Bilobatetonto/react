import styles from "./Button.module.css";
/**
 * 
 * @param {String|number} value 
 * @param {"number"|"symbol"|"symbolAccent"} type
 * 
 */
const Button = ({value, type = "number", onClick = () => {}}) =>{
    const handleClick = (e) => {
        onClick(value);
    };
    return <button 
    className={`${styles.button} ${styles[type]} `} 
    onClick={handleClick}>{value}</button>
};



export default Button;