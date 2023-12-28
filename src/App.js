import Header from "./Component/Header";
import Card from "./Component/Card";
import data from "./data";

export default function App() { 
    const cards = data.map(item => {
      return (
        <Card
          key={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
          text={item.text}
          location={item.location}
          link={item.link}
          startTime={item.startTime}
          endTime={item.endTime}
        />
      )
    })
    return ( 
        <div className="body">
          <Header />
          {cards}
        </div>
    );
}