var dayjs = require('dayjs');

export class BBB {
  constructor() {
    console.warn('Class BBB here');
  }

  public static sayHello() {
    console.warn('Hello From BBB');
    var now = dayjs();
    console.warn("Now is", now);
  }
}