const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1');
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 2');
    resolve(2);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 3');
    reject(new Error('Async operation 3'));
  }, 5000);
});

Promise.allSettled([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.error(err));
