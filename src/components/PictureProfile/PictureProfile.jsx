import React from "react";
import profile from '../../assets/profile.jpg'
import './PictureProfile.css'

export const PictureProfile = () => {
  return (
    <section>
      <img src={profile} alt="Profile" />
    </section>
  );
};
