"use strict";

// Базовий клас Student - це клас-предок для всіх 4 класів

class Student {
  constructor(name, year, wand) {
    this.name = name; // Ім'я студента
    this.year = year; // Рік навчання
    this.wand = wand; // Паличка студента
  }

  attendClass() {
    console.log(`${this.name} відвідує уроки на ${this.year}-му курсі.`);
  }

  castSpell(spell) {
    console.log(`${this.name} використовує закляття: ${spell}.`);
  }

  useWand() {
    console.log(`${this.name} махає паличкою з матеріалу: ${this.wand}.`);
  }
}

// AmbitiousStudent — спільний для класів Gryffindor і Slytherin
class AmbitiousStudent extends Student {
  constructor(name, year, wand, ambitionLevel) {
    super(name, year, wand);
    this.ambitionLevel = ambitionLevel;
  }

  // Спільний метод для лідерства
  lead() {
    return `${this.name} демонструє свої лідерські якості з рівнем амбіцій ${this.ambitionLevel}.`;
  }
}

class Gryffindor extends AmbitiousStudent {
  #houseMotto; // приватна власність для цього класу

  constructor(name, year, wand, braveryLevel) {
    super(name, year, wand);
    this.braveryLevel = braveryLevel;
    this.#houseMotto = "Сміливість, відвага, рішучість";
  }

  fightForJustice() {
    return `${this.name} бореться за справедливість з рівнем хоробрості ${this.braveryLevel}.`;
  }

  makeDaringMove() {
    return `${this.name} робить сміливий хід.`;
  }

  revealMotto() {
    return `Ґрифіндорці живуть за гаслом: "${this._houseMotto}".`; // приватна власність для цього класу
  }
}

class Slytherin extends AmbitiousStudent {
  #secretChamber; // приватна власність для цього класу

  constructor(name, year, wand, ambitionLevel) {
    super(name, year, wand);
    this.ambitionLevel = ambitionLevel;
    this.#secretChamber = "Таємна кімната";
  }

  schemePlan() {
    return `${this.name} створює хитрий план з рівнем амбіцій ${this.ambitionLevel}.`;
  }

  speakParseltongue() {
    return `${this.name} шепоче зміїною мовою.`;
  }

  revealSecretChamber() {
    return `Слизеринці мають доступ до ${this._secretChamber}.`; // приватна власність для цього класу
  }
}

class Hufflepuff extends Student {
  #houseRecipe; // приватна власність для цього класу

  constructor(name, year, wand, loyaltyLevel) {
    super(name, year, wand);
    this.loyaltyLevel = loyaltyLevel;
    this._houseRecipe = "Секретний рецепт гарбузового пирога";
  }

  workHard() {
    return `${this.name} наполегливо працює, відданість: ${this.loyaltyLevel}.`;
  }

  beLoyal() {
    return `${this.name} залишається вірним своїм друзям і будинку.`;
  }

  revealRecipe() {
    return `${this.name} знає ${this._houseRecipe}.`; // приватна власність для цього класу
  }
}
class Ravenclaw extends Student {
  #houseRiddle; // приватна власність для цього класу

  constructor(name, year, wand, intelligenceLevel) {
    super(name, year, wand);
    this.intelligenceLevel = intelligenceLevel;
    this._houseRiddle = "Таємниця Орла";
  }

  solveRiddle() {
    return `${this.name} вирішує головоломки з інтелектом рівня ${this.intelligenceLevel}.`;
  }

  inventSpell() {
    return `${this.name} винаходить нове закляття.`;
  }

  revealRiddle() {
    return `Рейвенкловці розгадують ${this._houseRiddle}.`; // приватна власність для цього класу
  }
}

// Демонстрація використання класів

// Gryffindor студент
const harry = new Gryffindor("Гаррі Поттер", 3, "Олень", 10);
console.log("🚀 ~ harry:", harry);
console.log(harry.attendClass());
console.log(harry.fightForJustice());
console.log(harry.makeDaringMove());
console.log(harry.revealMotto());
console.log(harry.lead()); // Метод з класу AmbitiousStudent

// Slytherin студент
const draco = new Slytherin("Драко Мелфой", 3, "Тис", 8);
console.log("🚀 ~ draco:", draco);
console.log(draco.attendClass());
console.log(draco.schemePlan());
console.log(draco.speakParseltongue());
console.log(draco.revealSecretChamber());
console.log(draco.lead()); // Метод з класу AmbitiousStudent

// Hufflepuff студент
const cedric = new Hufflepuff("Седрік Діґорі", 4, "Яблуня", 9);
console.log("🚀 ~ cedric:", cedric);
console.log(cedric.attendClass());
console.log(cedric.workHard());
console.log(cedric.beLoyal());
console.log(cedric.revealRecipe());

// Ravenclaw студент
const luna = new Ravenclaw("Луна Лавґуд", 2, "Оса", 9);
console.log("🚀 ~ luna:", luna);
console.log(luna.attendClass());
console.log(luna.solveRiddle());
console.log(luna.inventSpell());
console.log(luna.revealRiddle());
