import mainStyle from "./Main.module.css";
import Card from "../Cards/Card";
import posts from "../../data/posts.js";

const Main = () => {
  return (
    <main className={mainStyle.main}>
       {
        posts.map((p) => {
          return <Card 
          key={p.id} 
          title={p.title} 
          content={p.content} 
          image={p.image}
          tags={p.tags}
          published={p.published}
          />
        })
       }
        
    </main>
  );
}

export default Main;