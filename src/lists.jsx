function ListItem(props) {
    return <li>{props.animal}</li>
}
function List(props) {
    return (
        <ul>
            {props.animals.map((animal)=>{
                return <ListItem key={animal} animal={animal} />
            })
            }
        </ul>
    );
}
function ListL(props) {
    return (
        <ul>
            {props.animals.map((animal)=>{
                return animal.startsWith("L")?<li key={animal}>{animal}</li>:null
            })}
        </ul>
    )
}
function ListAlternative(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
function App(){
    const animals = ["Lion","Cow","Cat","Dog","Snake"];
    return(
        <div>
            <h1>Animals:</h1>
            <ListL animals={animals} />
        </div>
    )
}
function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✅':'❌'}
      </li>
    );
  }
function ItemImportance({name, importance}) {
    return (
        <li className="item">
            {name} {importance >0 && ''}
            {importance >0 && <i>(Importance: {importance})</i>}
        </li>
    )
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                isPacked={true}
                name="Space suit"
                />
                <Item
                isPacked={false}
                name="Helmet with a golden leaf"
                />
                <Item
                isPacked={true}
                name="Photo of Tam"
                />
            </ul>
        </section>
    )
}
export {PackingList};
