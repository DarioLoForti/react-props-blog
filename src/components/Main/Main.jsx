import mainStyle from "./Main.module.css";
import Card from "../Cards/Card";
import posts from "../../data/posts.js";

const tagColors = {
  html: 'green',
  css: 'pink',
  js: 'yellow',
  php: 'blue',
};

const Main = () => {

  const distinctTags = [...new Set(posts.flatMap(post => post.tags))];

  return (
    <main className={mainStyle.main}>
      <div className={mainStyle.top}>
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
      </div>
       

       <div className={mainStyle.button}>
        <h2>Tags</h2>
        <ul className={mainStyle.tags}>
          {distinctTags.map((tag, i) => (
            <li key={`tag${i}`} style={{ color: tagColors[tag] || 'black' }}>{tag}</li>
          ))}
        </ul>
       </div>
        
    </main>
  );
}

export default Main;