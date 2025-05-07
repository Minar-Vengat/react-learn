function Car(props) {
    return <li>leo {props.brand}</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>LIsts</h1>
        <ul>
          {cars.map((car) => <Car key={car.id1} brand={car.brand} />)}   
        </ul>
      </>
    );
  }
export default Garage 