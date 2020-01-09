const pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {
      id: "heading-main"
    },
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(pet, {
        name: "Fanandre",
        animal: "Cat",
        breed: "maine coon"
      }),
      React.createElement(pet, {
        name: "Dren",
        animal: "Dog",
        breed: "dimna"
      }),
      React.createElement(pet, {
        name: "Anone",
        animal: "Rabbit",
        breed: "ecap"
      })
    ]
  );
};
ReactDOM.render(React.createElement(App), document.querySelector("#root"));
