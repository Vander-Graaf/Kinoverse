import Header from "../../layout/Header/Header.jsx";
import Wave from "../../components/elements/Wave/Wave.jsx";
import wave1 from "../../assets/wave1.png";
import wave2 from "../../assets/wave2.png";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="flex justify-center bg-main pt-10 pb-10">
          <h1>Популярное</h1>
        </div>
        <Wave reversed={true}></Wave>
      </main>
    </>
  );
}

export default HomePage;
