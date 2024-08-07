import CountUp from "react-countup";

export default function HomeCounterUp() {
  const counterlist = [
    {
      id: Math.random(),
      type: "Loyal Customers",
      count: 25000,
    },
    {
      id: Math.random(),
      type: "Online Orders",
      count: 50000,
    },
    {
      id: Math.random(),
      type: "Visiters",
      count: 115000,
    },
    {
      id: Math.random(),
      type: "Happy Customers",
      count: 43500,
    },
  ];
  return (
    <div className="counter_container">
      <h2 className="title">Testimonials</h2>
      <div className="counter_content">
        {counterlist.map((count) => {
          return (
            <div className="counter_item" key={count.id}>
              <h2>{count.type}</h2>
              <CountUp start={1000} end={count.count} duration={5} enableScrollSpy={true} scrollSpyDelay={10} separator="." prefix="+"
             />
            </div>
          );
        })}
      </div>
    </div>
  );
}
