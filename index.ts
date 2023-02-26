import './style.css';

import { Observable } from 'rxjs';

let obs = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(12);
  subscriber.next(5);
});

const observer = {
  next: (x) => console.log('Observer got a next value: ' + x),
  error: (err) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

obs.subscribe(observer.next);

// console.log('le');

// Open the console in the bottom right to see results.
