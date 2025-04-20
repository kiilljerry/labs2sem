import { colorCycle, randomWeather, grayScale } from '../src/generators.js';
import { runGenerator } from '../src/timeoutiterator.js';

async function demoColors() {
  const colors = colorCycle();

  await runGenerator(colors, 4, (color) => {
    console.log(`Current color: ${color}`);
  });
}

async function demoWeather() {
  const weather = randomWeather();

  await runGenerator(weather, 3, (condition) => {
    console.log(`Weather: ${condition}`);
  });
}

async function demoGrayScale() {
  const grays = grayScale();

  await runGenerator(grays, 2, (gray) => {
    console.log(`Shade: ${gray}`);
  });
}

async function runAll() {
  await demoColors();
  await demoWeather();
  await demoGrayScale();
}

runAll();
