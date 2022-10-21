import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json';
import friends from '../friends.json';

export const App = () => {
  console.log('Started');
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      <Statistics
        title="Upload stats"
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory />
    </div>
  );
};
