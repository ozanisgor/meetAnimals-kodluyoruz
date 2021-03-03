const petsModule = (function () {
  const _data = [
    {
      image: "./assets/images/dog.jpg",
      name: "Sam",
      type: "Poodle",
      sound: "dog",
      soundText: "Dog - type 'd'",
    },
    {
      image: "../assets/images/cat.jpg",
      name: "Mellie",
      type: "Turkish Angora",
      sound: "cat",
      soundText: "Cat - type 'c'",
    },
    {
      image: "./assets/images/bee.jpg",
      name: "Bublebee",
      type: "Bee",
      sound: "bee",
      soundText: "Bee - type 'b'",
    },
    {
      image: "../assets/images/chicken.jpg",
      name: "Siisb",
      type: "Silkie / Isbar",
      sound: "chicken",
      soundText: "Chicken - type 'i'",
    },
    {
      image: "./assets/images/crane.jpg",
      name: "Crane",
      type: "Crane",
      sound: "crane",
      soundText: "Crane - type 'a'",
    },
    {
      image: "../assets/images/elephant.jpg",
      name: "Elephant",
      type: "Elephant",
      sound: "elephant",
      soundText: "Elephant - type 'e'",
    },
    {
      image: "./assets/images/frog.jpg",
      name: "Frog",
      type: "Frog",
      sound: "frog",
      soundText: "Frog - type 'f'",
    },
    {
      image: "../assets/images/rat.jpg",
      name: "Rat",
      type: "Rat",
      sound: "rat",
      soundText: "Rat - type 'r'",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  const $mainImage = document.querySelector(".main-image");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const getTrs = function () {
    return document.querySelectorAll(".trs");
  };

  const petImage = function () {
    return document.querySelectorAll(".pet-image");
  };

  const createPetElement = function (pet) {
    return (
      "<tr class='trs'><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents bg change when clicked button
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }

    // change bg and main image event for rows
    const trs = getTrs();

    for (let i = 0; i < trs.length; i++) {
      trs[i].addEventListener("click", function (e) {
        this.classList.toggle("bg-color");

        // To change main image with clicked pet's image
        $mainImage.setAttribute("src", petImage()[i].currentSrc);
      });
    }

    // Play sound event with keys
    this.addEventListener("keydown", function (e) {
      const audio = document.querySelector(`audio[data-key="${e.key}"]`);
      if (!audio) return; // Stops the function if there is no audio related with the key.
      audio.currentTime = 0; // Will let sound play over and over again without wait finish.
      audio.play();
    });
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
  };

  return {
    init: init,
  };
})();

petsModule.init();
