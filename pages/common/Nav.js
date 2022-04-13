import Link from "next/link";
import styles from "common/style/Nav.module.css";


export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Main</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>Board List</Link> </li>
        <li className={styles.li}> <Link href='/board/board'>board regist</Link> </li>
        <li className={styles.li}> <Link href='/game/game'>game regist</Link> </li>
        <li className={styles.li}> <Link href='/game/game-list'>Game List</Link> </li>
        <li className={styles.li}> <Link href='/game/team'>Team regist</Link> </li>
        <li className={styles.li}> <Link href='/game/team-list'>Team List</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo'>Schedule regist</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>Schedule list</Link> </li>
        <li className={styles.li}> <Link href='/user/login'>Login</Link> </li>
        <li className={styles.li}> <Link href='/user/join'>join</Link> </li>
        <li className={styles.li}> <Link href='/user/user-list'>UserList</Link> </li>
      

      </ul>
    </nav>
  );
};