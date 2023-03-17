const getUsers = async names => {
  let userObjects = [];

  console.log(names);

  for (let name of names) {
    let user = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    userObjects.push(user);
  }

  let result = await Promise.all(userObjects);
  console.log(result);

  return result;
};

getUsers(['devmoek', 'tatishas', 'agreazc']);
