import { useSelector } from "react-redux";
import style from './UserList.module.css'

function UserList(){
    const users = useSelector((state) => state.users);

    return(
        <div className={style.users}>
            <h1 className={style.header}>User List:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.email}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>   
    )
}
export default UserList


