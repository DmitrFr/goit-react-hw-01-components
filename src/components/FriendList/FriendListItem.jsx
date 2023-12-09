import { List, Span, Image } from './FriendListItem.styled';

const FriendListItem = props => {
  return (
    <List className="item">
      {props.isOnline ? (
        <Span className="green"></Span>
      ) : (
        <Span className="red"></Span>
      )}
      <Image
        className="avatar"
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{props.name}</p>
    </List>
  );
};

export default FriendListItem;
