function submit() {
  try {
    console.log('trying something');
    throw "something didn't go right";
  } catch (error) {
    console.log('Caught the error!');
  }
}