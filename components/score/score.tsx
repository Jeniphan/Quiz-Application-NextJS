import QuestionsData from "@components/quiz/data/QuestionsData";
import { DataContext } from "@pages/_app";
import { useContext } from "react";

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext)

  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  }
  return (
    <div className="score">
      <h1>สรุปผลคะแนน</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
};

export default Score