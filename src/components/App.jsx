import Profile from "./Profile";
import PageTitle from "./PageTitle";
import FriendsList from "./FriendsList";
import userData from "../userData.json";
import friends from "../friend.json";

function App() {
    return (
        <div>
            <div>
                <PageTitle text="User Profile" />
                <Profile payment={userData[0]} />
            </div>
            <div>
                <PageTitle text="Friend List" />
                <FriendsList friends={friends} />
            </div>
        </div>
    );
}

export default App;
