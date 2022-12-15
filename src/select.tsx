import { useState } from "react"
import styles from './select.module.css'

export type SelectOption = {
    label: string
    value: string | number
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div onClick={() => setIsOpen(prev => !prev)} tabIndex={0} className={styles.container}>
            <span className={styles.value}>{value?.label}</span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider} />
            <div className={styles.caret} />
            <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                {options.map(option => (
                    <li className={styles.option} key={option.value}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}