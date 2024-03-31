import clsx from "clsx";
import Profile from "../Profile/Profile";
import PageTitle from "../PageTitle/PageTitle";
import FriendsList from "../FriendsList/FriendsList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../userData.json";
import friends from "../../friend.json";
import transactions from "../../transactions.json";
import css from "./App.module.css";

function App() {
    return (
        <>
            <PageTitle text="User Profile" />
            <div className={clsx(css.conteiner, css.profile)}>
                <Profile
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    image={userData.avatar}
                    stats={userData.stats}
                />
            </div>

            <PageTitle text="Friend List" />
            <div className={css.conteiner}>
                <FriendsList friends={friends} />
            </div>

            <PageTitle text="Transaction History" />
            <div className={css.conteiner}>
                <TransactionHistory items={transactions} />
            </div>
        </>
    );
}

export default App;
