export async function runGenerator(iterator, seconds, callback) {
  const startTime = Date.now();
  const timeout = seconds * 1000;

  while (Date.now() - startTime < timeout) {
    const { value } = iterator.next();
    await callback(value);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  console.log(` Stopped after ${seconds} seconds.`);
}
