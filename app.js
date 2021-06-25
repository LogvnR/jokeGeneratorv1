const jokeText = document.querySelector('.jokeText');
const button = document.querySelector('Button');

const addJoke = async () => {
  const aquiredJoke = await getJoke();
  jokeText.innerText = aquiredJoke;
};

const getJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    console.log(e);
  }
};

button.addEventListener('click', addJoke);
