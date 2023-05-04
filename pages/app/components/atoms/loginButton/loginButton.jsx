import styles from "./loginbutton.module.css"

export default function LoginButton(){
    return (
        <>
        <button className={styles.loginBtn} type="submit" value="Log in">
        Log in
      </button>
        </>
    )
}