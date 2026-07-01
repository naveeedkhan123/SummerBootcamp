import Header from "../common/header";
import Footer from "../common/footer";
import "./Home.css"

function Home (){

    let n = 10;
    let m = 20;

    let status = true;
    let I =[10,20,30,40,50,60,70,80,"Naveed Khan"];

    let user = [
        {id:1,name:"Naveed",age:23},
        {id:2,name:"negative",age:22},
        {id:3,name:"Raees",age:20},
        {id:4,name:"Minnie",age:21},
        {id:5,name:"Buttler",age:22},
        {id:6,name:"Roy",age:25},


    ]

    return(
      <>

{
    user.map((obj,index) =>{
        return(
            <h2>
                {index + 1}
            </h2>
        )
    } )
}

{I}

{
    status ? <p> Welcome </p>  : <p> Not Welcome </p>
}

       <section>
        <Header/>
        <h1>welcome to home page   {n+m}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas impedit, praesentium at provident totam, dolore magnam suscipit sapiente ullam libero! Sint iste possimus fugit voluptates accusamus aliquid officia ullam.</p>
        
       </section> 

       <section className="productSection">
<h2>Our Products</h2>

<div className="productMid">
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>
</div>
       </section>
       <Footer/>
       </>
    )
}

export default Home;

function ProductCard() {
    return (
      <div className="productItems">
        <img src ="/images/category1.jpg" alt="Product 1" />
        <h3>Branded Shirts</h3>
    </div>
    );
  }