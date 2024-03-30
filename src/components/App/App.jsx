import clsx from "clsx";
import Profile from "../Profile/Profile";
import PageTitle from "../PageTitle/PageTitle";
import FriendsList from "../FriendsList/FriendsList";
import TransactionTable from "../TransactionTable/TransactionTable";
import userData from "../../userData.json";
import friends from "../../friend.json";
import transaction from "../../transactions.json";
import css from "./App.module.css";

function App() {
    return (
        <>
            <PageTitle text="User Profile" />
            <div className={clsx(css.conteiner, css.profile)}>
                <Profile payment={userData[0]} />
            </div>

            <PageTitle text="Friend List" />
            <div className={css.conteiner}>
                <FriendsList friends={friends} />
            </div>

            <PageTitle text="Table Transaction" />
            <div className={css.conteiner}>
                <TransactionTable items={transaction} />
            </div>
        </>
    );
}

export default App;
