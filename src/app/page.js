import Link from "next/link";
import CounterPage from "./Components/Counter/Counter";



const HomePage = () => {

  // console.log("hello world");
  // throw new Error();
  return (
    <div>
      <h3>
        this is home page
      </h3>
      <CounterPage></CounterPage>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">news</button>
      </Link>
    </div>
  );
};

export default HomePage;