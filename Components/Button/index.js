import styles from './Button.module.css'
export default function Button({
    title="default",
    backgroundColor,
    color,
    weight,
    border,

}) {
    return(
        <button className={styles.button} style={({color: color, backgroundColor: backgroundColor, border: border})}>{title}</button>
        
    )
}