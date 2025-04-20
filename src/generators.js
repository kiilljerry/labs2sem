export function* colorCycle() {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  let index = 0;

  while (true) {
    yield colors[index];
    index = (index + 1) % colors.length;
  }
}

export function* randomWeather() {
  const conditions = ['sunny', 'rainy', 'cloudy', 'snowy'];

  while (true) {
    const randomIndex = Math.floor(Math.random() * conditions.length);
    yield conditions[randomIndex];
  }
}

export function* grayScale() {
  let brightness = 0;

  while (true) {
    yield `rgb(${brightness}, ${brightness}, ${brightness})`;
    brightness = (brightness + 10) % 255;
  }
}
