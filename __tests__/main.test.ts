import axios from 'axios';

test('Should be ok', () => {
  expect(1).toBe(1);
});

test('Should work', async () => {
  const { data } = await axios.get('http://localhost:3000');
  console.log(data);
  expect(typeof data).toBe(String);
});
