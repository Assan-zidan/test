import styles from './Input.module.css';
import { CgSearch } from "react-icons/cg";

const Input = (props) => {
    const {placeholder, icon, } = props;
    return (
        <>
            <div className={styles.input}>
                <input placeholder={placeholder}/>
                {icon ?<CgSearch/> : null}
            </div>
        </>
    )
}

export default Input