const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = ['mack'];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
const personIsSeller = (name) => {
  return name[0] === 'm';
}

const search = (name) => {
  let searchQueue = [];
  // merge arrays [] + ['alice', 'bob', 'claire'] for first tick
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(person + ' is a mango seller');
        return true;
      }

      // if we dont search add other friends ['bob', 'claire'] + ['peggie']
      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }

  return false;
}

search('you');
