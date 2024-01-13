import styles from './boldButton.module.css'
export default function Button({
    title="default",
    backgroundColor,
    color,
    border,
}) {
    return(
        <button className={styles.button} style={({color: color, backgroundColor: backgroundColor,border:border,})}>{title}</button>
        
    )
}