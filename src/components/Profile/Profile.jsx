import PropTypes from 'prop-types';
import { Avatar, Description, Location, Name, ProfileCard, Stats, StatsItem, Quantity, Tag } from './Profile.styled';

export function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return <ProfileCard>
        <Description>
            <Avatar
                src={avatar}
                alt={username}
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <StatsItem>
                <span className="label">Followers</span>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <span className="label">Views</span>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes</span>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </Stats>
    </ProfileCard>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}