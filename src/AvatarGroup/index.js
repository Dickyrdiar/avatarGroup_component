import React from 'react';
import Avatar from '../Avatar';

const AvatarGroup = ({ avatars, maxAvatars = 3, size = 40, maxInitialsLength = 2, containerStyle, avatarStyle, moreStyle }) => {
  const displayedAvatars = avatars.slice(0, maxAvatars);

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...containerStyle }}>
      {displayedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
          fallback={avatar.initials.slice(0, maxInitialsLength)}
          style={{
            // marginLeft: -40,
            marginLeft: index !== 0 ? -10 : 0,
            border: '2px solid white',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
            ...avatarStyle
          }}
        />
      ))}
      {avatars.length > maxAvatars && (
        <span style={{ marginLeft: -10, fontSize: size * 0.5, ...moreStyle, border: '2px solid gray', borderRadius: '50%', backgroundColor: '#e8e9f4', height: '50px', width: '50px', textAlign: 'center', alignItems: 'center'}}>
          <div style={{margintop: '13px', color: 'gray', marginTop: '12px'}}>
            {`+${avatars.length - maxAvatars}`}
          </div>
        </span>
      )}
    </div>
  );
};

export default AvatarGroup;
