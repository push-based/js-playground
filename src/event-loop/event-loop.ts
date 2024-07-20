export function setupEventLoopExercise(element: HTMLButtonElement) {
  const run = () => {
    // write code here
    // e.g. setTimeout(() => doWork());
  };

  element.addEventListener('click', () => run());
}

function doWork() {
  let a = 0;
  for (let i = 0; i < 10000000; i++) {
    a = i;
  }
}
