const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const newArrTags = tweets.reduce((accumulator, tweet) => [...accumulator, ...tweet.tags], []);
console.log(newArrTags);

const tagsStats = newArrTags.reduce((accumulator, tag) => {
  return { ...accumulator, [tag]: accumulator[tag] ? accumulator[tag] + 1 : 1 };
}, {});
console.log(tagsStats);
