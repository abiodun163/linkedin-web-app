import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { auth } from "./components/Firebase";
import Header from "./components/Header";
import LeftSideSection from "./components/LeftSideSection";
import Login from "./components/Login";
import MidSideSection from "./components/MidSideSection";
import RightSideSection from "./components/RightSideSection";
import { login, logout, selectUser } from "./features/UserSlice";

/* npm install @mui/icons-material*/

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            name: userAuth.name,
            email: userAuth.email,
            id: userAuth.uid,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <LeftSideSection />
          <MidSideSection />

          <RightSideSection />
        </div>
      )}
    </div>
  );
}

export default App;
