// I want to build a library that mocks
// fetching json data from an api
// my client-side code may depend
// on the json returned from the api
// to have unique values for usernames, emails & ids

// intended use:
// userApi.fetch()
//
// intended return value:
// {
//   id: 1,
//   username: 'user1',
//   email: 'user1@example.com'
// }
//
// ... next call
// userApi.fetch()
// {
//   id: 2,
//   username: 'user2',
//   email: 'user2@example.com'
// }

const userApi = (function() {
  let id = 0;

  return {
    fetch: function() {
      id++;

      return {
        id: id,
        username: `user${id}`,
        email: `user${id}@example.com`
      };
    }
  };
})();
console.log('logging userApi', userApi);
