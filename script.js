const table = document.querySelector('table tbody');

const promise1 = new Promise((resolve) => {
  const time = Math.random() * 2000 + 1000;
  setTimeout(() => resolve(time), time);
});

const promise2 = new Promise((resolve) => {
  const time = Math.random() * 2000 + 1000;
  setTimeout(() => resolve(time), time);
});

const promise3 = new Promise((resolve) => {
  const time = Math.random() * 2000 + 1000;
  setTimeout(() => resolve(time), time);
});

Promise.all([promise1, promise2, promise3])
  .then((times) => {
    const total = times.reduce((acc, curr) => acc + curr, 0);
    const totalSeconds = total / 1000;

    table.innerHTML = `
      <tr>
        <td>Promise 1</td>
        <td>${(times[0] / 1000).toFixed(3)}</td>
      </tr>
      <tr>
        <td>Promise 2</td>
        <td>${(times[1] / 1000).toFixed(3)}</td>
      </tr>
      <tr>
        <td>Promise 3</td>
        <td>${(times[2] / 1000).toFixed(3)}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>${totalSeconds.toFixed(3)}</td>
      </tr>
    `;
  })
  .catch((error) => {
    console.error(error);
  });