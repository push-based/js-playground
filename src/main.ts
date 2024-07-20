import './style.css';
import { setupEventLoopExercise } from './event-loop/event-loop.ts';
import { exercise1 } from './rxjs/1-new-observable.ts';
import { exercise2 } from './rxjs/2-of-value.ts';
import { exercise3 } from './rxjs/3-of-values.ts';
import { exercise4 } from './rxjs/4-from-event.ts';
import { exercise5 } from './rxjs/5-operators-intro.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>RxJS Intro</h1>
    <div class="card">
      <button id="trigger-btn" type="button">Trigger</button>
      <input id="the-input" placeholder="tell me who you are" />
    </div>
  </div>
  <div>
    <h1>Event Loop</h1>
    <div class="card">
      <button id="event-loop-btn" type="button">Trigger Event Loop</button>
    </div>
  </div>
`;

setupEventLoopExercise(
  document.querySelector<HTMLButtonElement>('#event-loop-btn')!,
);

exercise1();
exercise2();
exercise3();
exercise4(document.querySelector<HTMLButtonElement>('#trigger-btn')!);
exercise5(document.querySelector<HTMLInputElement>('#the-input')!);
