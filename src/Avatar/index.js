import React  from "react";

const Avatar = ({src, alt, size = 40}) => {
  return (
    <img 
      src={src}
      alt={alt}
      width={size}
      heigth={size}
      style={{ borderRadius: '50%' }}
    />
  )
}

export default Avatar