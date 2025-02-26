function cube(x){
    return x * x * x;
}
const foo = Math.PI + Math.SQRT2;

const graph = {
    options:{
        color:"white",
        thickness:"2px",
    },
    draw(){
        console.log("drawing graph")
    },
};
function FooDisplay(){
    return <p>Foo: {foo}</p>
  }
export{cube, foo, graph, FooDisplay};