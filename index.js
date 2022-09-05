// add new elements
// finding
// remove
// splitting
// combine


// const numbers = [1,2,4,1,5,6];

//End
//numbers.push(7);
// console.log(numbers);

// Begging
// numbers.unshift(0);

// Middle 
//numbers.splice(-2, 1, 3);
// console.log(numbers);

//find
// let flag = 0;
// const numbers = [1,2,4,1,5,1,6];
// for(let i=0; i<numbers.length; i++){
//   if(numbers[i] === 1) flag =1;
// }

// if(flag === 1){
//   console.log('true');
// } else console.log('false');



// console.log(numbers.indexOf(1, 3));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.includes(10))

const infos = [{name: 'iqbal', id: 1}, {name: 'joy', id: 2}, {name: 'sifat', id: 3}];
// console.log(infos.indexOf({name: 'iqbal', id: 1}));


const isInfoAvailable = infos.find(
  function (info){
    return info.name === 'iqbal';
  }
)

 