        let index = 0;
        let blank = "";
        const speech = [
            "Woah, it's been so long since we've seen a new student!!! ^u^",
            "I'm Misa! I'm the best student in this entire school! What's your name?",
            "Hi there!!! Nice to meet you!",
            "Anyways, wanna be friends?",
            "She doesn't wait for your response and interrupts you before you can say anything.",
            "Really? Yay! Let's go eat lunch together later!",
            "Oh... looks like the teacher's already here... We gotta get back to our seats!!!",
            "Are you gonna pay attention to the lesson? Just a warning though, it might be really boring!",
            "In that case, I'll pay attention, too!!!!!",
            "In that case, I won't listen either!!!",
            "To your seats, students! Let's begin the lesson.",
            "Today, we have a new student!",
            "Why don't you introduce yourself?",
            "Hi, I'm a new student! I hope I can be friends with you all!!!!!! :)",
            "Nice to meet you! Anyways, take a seat. Today, we'll be discussing transformations of functions....",
            "From the corner of your eye, you catch someone looking at you.",
            "To be continued....... (Or not)"
        ];
        
        const names = [
            "Misa Amane",
            "Narrator",
            "Teacher",
            "You"
        ];
        const characters = [
            { name: "Misa Amane", image: "../assets/misa.png" },
            { name: "Light Yagami", image: "../assets/lightdefault.png" },
            { name: "Teacher", image: "../assets/teacher.png" },
            { name: "You", image: "../assets/player.png" },
            { name: "Narrator", image: ""}
        ];
        const nameBox = document.getElementById("name");
        const textBox = document.getElementById("thingy");
        const btn = document.getElementById("next");
    
        nameBox.textContent = names[0];
        textBox.textContent = speech[0];
        charchange("../assets/misa_default.png");
        btn.addEventListener("click", () => {
        index++;

  if (index === 2) {
    playerName = prompt("what's your name? :3") || "You";
    nameBox.textContent = names[0];
    textBox.textContent = speech[index];
    return;
  }
  if (index === 4){
    nameBox.textContent= names[1];
  }
  if (index === 5){
    nameBox.textContent = names[0];
    charchange("../assets/misa_default.png");
  }
  if (index === 11) {
    nameBox.textContent = names[2];
    charchange("../assets/teacher.png");
  }
  if(index === 13){
    nameBox.textContent = names[3];
    charchange("../assets/player.png");
  }
  if(index ===14){
    nameBox.textContent = names[2];
    charchange("../assets/teacher.png");
  }
  if(index === 15){
    nameBox.textContent = names[1];
    charchange("../assets/ichiro.png");
  }
  if (index === 8) {
    charchange("../assets/misa_default.png");
    const answer = prompt("Y / N (if your answer is Y, type down Y only, otherwise, any other answers will be considered as a NO!)");
    nameBox.textContent = names[0];

    if (answer === "Y") {
      textBox.textContent = speech[8];
      index = 9;
      index++;
    } else {
      textBox.textContent = speech[9];
      index = 9;
      index++;
    } return; 
}if (index >= speech.length) return;

  textBox.textContent = speech[index];
});

function charchange(img) {
  document.getElementById("character").src = img;
}