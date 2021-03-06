import styles from './Input.module.css';
import { CgSearch } from "react-icons/cg";

const Input = (props) => {
    const {placeholder, icon, type, className} = props;
    return (
        <>
            <div className={styles.input}>
                <input placeholder={placeholder} type={type} className={className}/>
                {icon ?<CgSearch/> : null}
            </div>
        </>
    )
}

export default Input