import { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile.css";

const Profile = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const profileData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setProfileCell(response.data.results[0].cell);
      setProfileEmail(response.data.results[0].email);
      setProfileImage(response.data.results[0].picture.medium);
      setProfileName(
        `${response.data.results[0].name.first} ${response.data.results[0].name.last}`
      );
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    profileData();
  }, []);
  return (
    <div>
      <button onClick={() => profileData()} className="btn">
        Get New Person Data
      </button>
      <div className="card">
        <img src={profileImage} alt="profile_img" style={{ width: "100%" }} />
        <h2>{profileName}</h2>
        <p className="title">{profileEmail}</p>
        <p>{profileCell}</p>
        <p>
          <button className="btn">Contact</button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
