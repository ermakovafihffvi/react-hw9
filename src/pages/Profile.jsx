import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/reducers/userReducer/userSelector";
import { logoutInitiate } from "../redux/actions";

const Profile = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAuth = () => {
      if (user) {
        dispatch(logoutInitiate());
      }
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    };

    console.log(user);
    return (
        <>
        <h3>Ваш ник</h3>
        <p>{user.multiFactor.user.displayName}</p>
        {user ? (
            <p style={{ cursor: "pointer" }} onClick={handleAuth}>
              Sign Out
            </p>
        ) : (
            <NavLink to={"/login"}>Sign in</NavLink>
        )}
        </>

    );
};

export default Profile;