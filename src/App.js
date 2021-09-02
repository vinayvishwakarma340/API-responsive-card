import "./styles.css";
import Card from "./Components/Card";
import { useEffect, useState } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((jsonData) => setUserData(jsonData.data));
  }, []);

  return (
    <div className="flex-container">
      {userData.map((data, index) => {
        return (
          <Card
            key={index}
            id={data.id}
            email={data.email}
            fName={data.first_name}
            lName={data.last_name}
            img={data.avatar}
          />
        );
      })}
    </div>
  );
}
