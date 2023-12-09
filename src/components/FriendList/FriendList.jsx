import FriendListItem from './FriendListItem';
import { Ul } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Ul className="friend-list">
      {friends.map(i => {
        return (
          <FriendListItem
            avatar={i.avatar}
            name={i.name}
            isOnline={i.isOnline}
            key={i.id}
          />
        );
      })}
    </Ul>
  );
};

export default FriendList;
