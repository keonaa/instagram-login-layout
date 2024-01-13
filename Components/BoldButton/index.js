import styles from './BoldButton.module.css'
export default function Button({
    title="default",
    backgroundColor,
    color,

}) {
    return(
        <button className={styles.button} style={({color: color, backgroundColor: backgroundColor,})}>{title}</button>
        
    )
}