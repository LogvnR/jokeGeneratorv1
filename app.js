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
    jokeText.style.color = 'Black';
    return res.data.joke;
  } catch (e) {
    console.log(e);
    const errorHandle = 'ERROR! Please Check Your Connection And Try Again!';
    jokeText.style.color = 'Red';
    return errorHandle;
  }
};

button.addEventListener('click', addJoke);
