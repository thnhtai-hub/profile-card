import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpg" alt="us" />;
}

function Intro() {
  return (
    <div>
      <h1>Nguyen Thanh Tai</h1>
      <p>
        This is me. I'm so avarage yet I need to become better every single day
        in my life. I'll develop myself to the best version possible to get rid
        of the poor and give my family, my love one the best life they could
        have. I can do this, and I chose to do this.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Guitar" emoji="🎸" color="orange" />
      <Skill skill="Coding" emoji="🧑🏻‍💻" color="orange" />
      <Skill skill="Gym" emoji="💪🏻" color="orange" />
      <Skill skill="Gaming" emoji="🎮" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
