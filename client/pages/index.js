import Link from "next/link";
import s from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={s.links}>
            <Link href='/messages'>Message Board</Link>
            <Link href='/numbers'>Average Numbers</Link>
        </div>
    )
}
