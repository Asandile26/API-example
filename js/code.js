// fetch('../data/data.json')
// .then((response)=> {
//     return response.json()
// })
// .then((data)=> {
//     let laptop = data.laptop;
//     let record = laptop.filter((item)=> {
//         return item.id == 1
//     })
//     console.table(data.laptop);
// })
// .catch(err=> {
//     console.log("Please try again")
// })



// let data = [8, 9, 12, "Thando"];

// data.push(20)
// data.shift()
// data.unshift("Asandile")
// console.log(data.pop())

// long method
// console.log(data.filter(item=> {
//     return typeof item !== "string"
// }));
// shorter method
// console.log(data.filter(Number))
// console.log(data);
// let onlyNumbers = data.filter(Number);
// console.log(onlyNumbers);
// // let sortedValues = onlyNumbers.sort((a, b)=> a-b); sorting out
// let sortedValues = onlyNumbers.sort((a, b)=> {
//     if (a<b)
//     return -1
//     return 1
// });
// console.log(sortedValues);
// console.log(data.slice(3));
// let first = data.slice(0, 2);
// let second = data.slice(3);
// let finalResults = [...first, ...second];
// console.log(finalResults);

//Splice (start, removeCount, item1, item2...)
// data.splice(0, 0, "Joel", "Lazola");
// console.log(data);
// data.splice(3,1 );
// console.log(data);

// (async function fetchData() {
//     let res = await fetch('../data/data.json');
//     let data = await res.json();
//     console.table(data.laptop);
// })();

//row
let wrapper = document.querySelector('.wrapper');
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=50");
    let data = await res.json();
    return data.results;
};
(async function display() {
    let data = await fetchData();
    data.forEach((item)=> {
        // document.write(`<p>${item.gender}</p><br>`)
        wrapper.innerHTML +=`
        <div class="card" style="width: 18rem;">
                <img src="${item.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //   <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
    })
})();