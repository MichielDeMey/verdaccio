import memoryStorage from 'localstorage-memory';

let storage;
try {
  localStorage.setItem('__TEST__', '');
  localStorage.removeItem('__TEST__');
  storage = localStorage;
} catch (err) {
  storage = memoryStorage;
}

export default storage;
