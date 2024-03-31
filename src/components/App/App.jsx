import clsx from "clsx";
import Profile from "../Profile/Profile";
import PageTitle from "../PageTitle/PageTitle";
import FriendsList from "../FriendsList/FriendsList";
import TransactionTable from "../TransactionTable/TransactionTable";
// import userData from "../../userData.json";
import friends from "../../friend.json";
import transaction from "../../transactions.json";
import css from "./App.module.css";

const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

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

            <PageTitle text="Table Transaction" />
            <div className={css.conteiner}>
                <TransactionTable items={transaction} />
            </div>
        </>
    );
}

export default App;
