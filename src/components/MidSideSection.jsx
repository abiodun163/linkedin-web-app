import React, { useEffect, useState } from "react";
import "../styles/MidSideSection.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOptions from "./InputOptions";
import Posts from "./Posts";
import { db, auth } from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";

const MidSideSection = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("posts")
      /*  .orderBy("timestamp", "desc") */
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  const icons = [
    {
      icon: ImageIcon,
      title: "Photo",
      color: "#7065F9",
      id: 1
    },
    {
      icon: SubscriptionsIcon,
      title: "Video",
      color: "#E7A33E",
      id: 2
    },
    {
      icon: EventNoteIcon,
      title: "Event",
      color: "#CDCDCD",
      id: 3
    },
    {
      icon: CalendarViewDayIcon,
      title: "Write article",
      color: "#7FC15E",
      id: 4
    },
  ];

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.name,
      description: user.email,
      message: search,
      photoURL: user.photoUrl || "",
      /* timestamp: firebase.firestore.fieldvalue.serverTimestamp(), */
    });

    /*  name: userAuth.name,
            email: userAuth.email,
            id: userAuth.uid,
            photoUrl: userAuth.photoURL, */

    /*  */

    setSearch("");
  };

  return (
    <div className="MidSideSection">
      <div className="MidSideSection__inputContainer">
        <div className="MidSideSection__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Write a  post"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="MidSideSection__inputOptions">
          {icons.map((iconic) => {
            const { id, icon, title, color } = iconic;

            return (
                <InputOptions key={ id }  Icon={icon} title={title} color={color} />
            );
          })}
        </div>
      </div>
      {posts.map((post) => {
        const { id, data:  {  name, description, message, photoURL } } = post;
       
        return (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        );
      })}
    </div>
  );
};

export default MidSideSection;
