import React from "react";
import Tours from "./Tours";
import "./index.css";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [users, setUsers] = React.useState([]);
  function getFetch() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }
  React.useEffect(() => {
    getFetch();
  }, []);

  const datas = users.map((ele) => {
    return (
      <Tours
        image={ele.image}
        key={ele.id}
        name={ele.name}
        info={ele.info}
        price={ele.price}
      />
    );
  });

  return (
    <main>
      <section>
        <div className="title">
          <h2>{users.length > 0 ? " Our Tours" : "No Tours left"} </h2>
          <div className="underline"> </div>
        </div>

        <div className="tours">{datas}</div>
      </section>
    </main>
  );
};

export default App;
