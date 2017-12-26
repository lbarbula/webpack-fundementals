let login = (username, password) => {
  if(username === 'admin' && password === 'myPassword') {
    console.log('Correct Username and password');
  } else {
    console.log('Access Denied');
  }
};

login('admin', 'notMyPassword');
