import {
  Container,
  Container_profile,
  Image,
  Ul,
  Name,
  List,
} from './Profile.styled';

const Profile = props => {
  return (
    <Container className="profile">
      <Container_profile className="description">
        <Image src={props.avatar} alt="User avatar" className="avatar" />
        <Name className="name">{props.username}</Name>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </Container_profile>

      <Ul className="stats">
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers}</span>
        </List>
        <List>
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes}</span>
        </List>
      </Ul>
    </Container>
  );
};

export default Profile;
