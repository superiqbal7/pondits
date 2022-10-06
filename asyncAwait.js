// Asynchronous JS

console.log('before');
//backend api call

// getUser(1)
//   .then((user) => getRepository(user.gitHubUsername))
//   .then((repository) => getCommit(repository[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log(err));

// Async and await approach
async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepository(user.gitHubUsername);
  const commits = await getCommit(repos[0]);
  console.log(commits);
}
displayCommits();

console.log('after');

function getUser(id) {
  // 1st api call - /getuser/:id
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Reading a user from backend...', id);
      const data = {
        id: id,
        gitHubUsername: 'superiqbal7'
      };
      resolve(data);
    }, 2000);
  })
  
}

function getRepository(username) {
  if(!username){
    console.log('No username specified, thus /getrepository api failed');
  } else {
    // 2nd api call - /getrepository
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('Calling GitHub API...', username);
        const data = ['repo 1', 'repo 2', 'repo 3'];
        resolve(data);
      }, 2000)
    });
  }
}
 

// 3rd api call - /commit

function getCommit(repository) {
  if(!repository){
    console.log('No repository specified, thus /getrepository api failed');
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('Calling GitHub API for commits...', repository);
        const data = ['commit 1', 'commit 2', 'commit 3'];
        resolve(data);
      }, 2000);
    })
  }
}


