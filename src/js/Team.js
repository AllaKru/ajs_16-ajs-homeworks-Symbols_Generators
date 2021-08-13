/* eslint-disable no-console */
import Person from './Person';

export default class Team {
  constructor(...args) {
    this.team = [];
    this.team.push(...args);
  }

  * [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield

    // let count = 0; === вариант 1
    // const { team } = this;
    // while (count < team.length) {
    //   yield team[count++];
    // }

    for (const per of this.team) {
      yield per;
    }
  }
}

const char = new Person('Лучник', 'Bowman');
const char2 = new Person('Маг', 'Magician');
const char3 = new Person('Зомби', 'Zombie');

const teamPersons = new Team(char, char2, char3);

for (const per of teamPersons) {
  console.log(per);
}

// const r = teamPersons[Symbol.iterator]();
// console.log(r.next())
// console.log(r.next().value)
// console.log(r.next().value)
