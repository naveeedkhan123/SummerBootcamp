// Arrays in JavaScript
    //  collection of items is called arrays

    {
    let marks = [97,82,75,64,36] ;
    console.log(marks) ;
    console.log(marks.length);
}
    

    {
        let cricketers =["Joss Butler", "Jason Roy" , "Mark wood","Ben Stokes","Eoin Morgan"];
        console.log(cricketers);
    
    }

    // Arrays Indices

    // i.e  arr[0],arr[1],arr[4]

{
    let marks = [97,82,75,64,36,44] ;
    
   
    console.log(marks[2],marks[4],marks[3]) ;
    console.log(marks.length);
}

// Looping over an Array
    //    Print all elements of an array

{
        let cricketers =["Joss Butler", "Jason Roy" , "Mark wood","Ben Stokes","Eoin Morgan"];
for(let i=0;i<cricketers.length;i++) {
    console.log(cricketers[i]);
}

}

// for-of looop
  
{
let cricketers =["Joss Butler", "Jason Roy" , "Mark wood","Ben Stokes","Eoin Morgan"];
for(let cricketer of cricketers) {
    console.log(cricketer);
}
}

{
    let cities =["Abbottabad","Lahore","Muree","Pindi","Gujrawala","Nowshera"];
    for (let city of cities) {
        console.log(city.toUpperCase());
    }
}
     

// practice question

{
    let marks =[85,97,44,37,76,60];
    let sum =0;
    for (let val of marks) {
        sum += val;
    }
    let avg = sum/marks.length;
    console.log(`avg marks of the class = ${avg}`);
}


// practice question

// using for-of loop

{
    let price =[250,645,300,900,50];
    let i=0;
    for (let val of price) {
        console.log(`value at index ${i} = ${val}`);
        let offer =val/10;
        price[i] = price[i]-offer;
    console.log(`value after offer =${price[i]}`);
        i++;
    }

}


// using for  loop        

{
    let pr =[250,645,300,900,50];
    for (let i =0; i<pr.length;i++) {
        let offer =pr[i]/10;
        pr[i] -=offer;
    }
    console.log(pr);
}


//               Array Methods

// 1          push() : add to end

// 2          pop() : delete from end & return

// 3          toString() : Converts array to string

// 4          Concat() : Join multiple arrays and return result

// 5           () unshift method  

          
//          push() : add to end

{
    let foodItems=["potato","apple","litchi","tomato","banana"];
    foodItems.push("chips","mango","lolipop");
}


//           pop() : delete from end & return

{
let foodList=["potato","apple","litchi","tomato","banana"];
console.log(foodList);
    foodList.pop("litchi");
    console.log(foodList);
}


// toString() : Converts array to string
{
let foodMenue=["potato","apple","litchi","tomato","banana"];
    console.log(foodMenue);
        console.log(foodMenue.toString());
}


        // Concat() : Join multiple arrays and return result

        {
let marvel_heroes =["thor","captain","iron man","nathasha"];
let dc_heroes =["super man ","batman"];

let team= marvel_heroes.concat(dc_heroes);
console.log(team);


        }


        //   () unshift method 


        {
            let superHeroes = ["thor","captain","iron man","nathasha"];
            superHeroes.unshift("antman");


        }

        //   () unshift method  

        {
             let super_Heroes = ["thor","captain","iron man","nathasha"];
           let val= super_Heroes.shift()
           console.log("deleted",val)
        }

        //   slice()   returns a piece of the array
{
        let superHeroes = ["thor","captain","iron man","nathasha","strange","raees"];
        console.log(superHeroes);
          console.log(superHeroes.slice(1,3));
}

        //   slice()  change original array (add ,remove,replace)

            //  splice(startIdx,delCount,NewEl1...)

            {
        let arr=[1,2,3,4,5,6,7,8];
          arr.splice(2,2,101,102);
            }

            //add element
            {
let arry=[1,2,3,4,5,6,7,8];
arry.splice(2,0,101);
}


//   practice question


    let companies =["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
//   companies.shift();       to delte first company
//   companies.splice(2,1,"inDrive");   to replace any company

companies.push("Amazon");