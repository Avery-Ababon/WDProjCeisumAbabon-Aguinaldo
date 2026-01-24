let playerName = "You";
let currentScene = "start";
let index = 0;

const nameBox = document.getElementById("name");
const textBox = document.getElementById("thingy");
const btn = document.getElementById("next");

const choiceBox = document.createElement("div");
choiceBox.id = "choices";
document.getElementById("tbox").appendChild(choiceBox);

const script = {
  start: [
    { speaker: "Narrator", text: "A new year begins." },
  { speaker: "Narrator", text: "Winter break has ended, and the classroom was filled with chatter." },
  { speaker: "Narrator", text: "Everyone was greeting and catching up with each other. Some talked about what they did during break or where they went." },
  { speaker: "Narrator", text: "There’s also a rumor going around: exchange students will be staying for the rest of the semester." },

  { speaker: "Adviser", text: "Alright, everyone. We’ll be having three exchange students joining us for this semester." },

  { speaker: "Narrator", text: "The room went silent." },
  { speaker: "Narrator", text: "It confirmed everyone’s speculations about the exchange students." },
  { speaker: "Narrator", text: "Will they be pretty? Smart? Both?" },
  { speaker: "Narrator", text: "But some students were indifferent about their arrival. Some groaned in exasperation." },

  { speaker: "Student 1F", text: "I can’t wait to see them!" },
  { speaker: "Student 1M", text: "I heard they’re from a prestigious high school." },
  { speaker: "Student 2F", text: "If so… why would they go to a regular school like ours? Sure, we have smart students here, but why us? I hate this already." },
  { speaker: "Student 2M", text: "We’re going to make a fool of ourselves…" },

  { speaker: "Narrator", text: "The murmurs quieted down when the teacher got annoyed." },

  { speaker: "Adviser", text: "Alright, alright! That’s enough." },
  { speaker: "Adviser", text: "They’re coming at any moment, so behave." },
  { speaker: "Narrator", text: "She looked at a specific student." },

  { speaker: "???", text: "Why are you looking at me, teach?!" },
  { speaker: "Narrator", text: "He whined." },
  { speaker: "Narrator", text: "THWACK. A piece of chalk nearly hits him." },

  { speaker: "Student", text: "Nice aim, teach!" },
  { speaker: "???", text: "Man… New Year, and none of you have changed." },
  { speaker: "Student 2F", text: "Neither did you." },

  { speaker: "Narrator", text: "Knock knock." },
  { speaker: "Adviser", text: "Come in!" },

  { speaker: "Narrator", text: "A boy steps inside." },
  { speaker: "Narrator", text: "He looks composed. His uniform is neat, posture straight, and he wears a calm expression. He was also charming; some girls were instantly swooned." },

  { speaker: "Light", text: "Good morning." },
  { speaker: "Light", text: "My name is Light Yagami. I’m an exchange student from Daikoku Private Academy." },

  { speaker: "Narrator", text: "The room went silent again." },

  { speaker: "Student 3M", text: "Light Yagami? Like... the top student in the whole country?" },
  { speaker: "Narrator", text: "The students gasped in awe. Some even started praying not to make fools of themselves." },
  { speaker: "Student 4M", text: "Yep! I’m not surviving!" },
  { speaker: "Narrator", text: "He laughed. I think he needs help." },

  { speaker: "Narrator", text: "The teacher sighed. She was about to calm the students down but got interrupted." },

  { speaker: "Narrator", text: "A blonde girl slips past the doorway with a smile, completely unfazed by everything happening inside the classroom." },
  { speaker: "Narrator", text: "She was stylish—a simple uniform worn fashionably, bold and eye-catching." },

  { speaker: "Misa", text: "Hi!" },
  { speaker: "Narrator", text: "She waved at the whole class, and the mood instantly shifted." },

  { speaker: "Student 1F", text: "NO WAY..." },
  { speaker: "Narrator", text: "She sounded stunned." },
  { speaker: "Student 2F", text: "IT'S MISA AMANE!!!" },
  { speaker: "Narrator", text: "She squealed." },

  { speaker: "Misa", text: "Hello everyone! Someone already said my name." },
  { speaker: "Narrator", text: "Misa smiled brightly at the student." },

  { speaker: "Narrator", text: "The student screamed happily when Misa looked at her and returned the smile." },

  { speaker: "Misa", text: "That’s right. I’m Misa Amane. You probably know me as Misa Misa." },
  {  speaker: "Narrator", text: "Everyone was completely swooned by her presence." },

    { speaker: "Adviser", text: "Okay... that’s two... where’s the other one?" },
    { speaker: "Misa", text: "Oh, right—" },

    { speaker: "Misa", text: "And last but not the least...!" },
    { speaker: "Narrator", text: "She looked toward the doorway." },

    { speaker: "Narrator", text: "You step into the classroom." },
    { speaker: "Narrator", text: "There were no gasps or interruptions like before. The students simply stared." },

    { speaker: "Player", text: "Good morning, everyone. I am..." },
    { action: "askName" },

    { speaker: "Adviser", text: "Take any open seat." },
    


    {
      choice: true,
      options: [
        { text: "Sit near Orihime", next: "orihime_route" },
        { text: "Sit near Misa & Light", next: "misa_route" }
      ]
    }
  ],

  // ORIHIME ROUTE
  orihime_route: [
    { speaker: "Narrator", text: "You walk toward Orihime and her friends." },
    { speaker: "Orihime", text: "Hi! Do you want to eat with us?" },

    {
      choice: true,
      options: [
        { text: "Yes", next: "orihime_yes" },
        { text: "No", next: "misa_route" }
      ]
    }
  ],

  orihime_yes: [
    { speaker: "Narrator", text: "Orihime’s face lights up." },
    { speaker: "Orihime", text: "Yay!" },

    { speaker: "Narrator", text: "Your stomach growls." },
    { speaker: "Orihime", text: "Have you eaten?" },

    {
      choice: true,
      options: [
        { text: "Tell the truth", next: "orihime_truth" },
        { text: "Lie", next: "orihime_lie" }
      ]
    }
  ],

  orihime_truth: [
    { speaker: "Player", text: "The cafeteria ran out of food..." },
    { speaker: "Narrator", text: "Orihime gasps and hands you her lunch." },
    { speaker: "Orihime", text: "${playerName}! Take my lunch!" },

    {
      choice: true,
      options: [
        { text: "Eat it", next: "orihime_eat" },
        { text: "Refuse", next: "orihime_refuse" }
      ]
    }
  ],

  orihime_eat: [
    { speaker: "Narrator", text: "It tastes strange… but edible." },
    { speaker: "Orihime", text: "Is it okay?" },
    { speaker: "Narrator", text: "You nod." },
    { speaker: "Narrator", text: "For the first time today, you feel like you belong." }
  ],

  orihime_refuse: [
    { speaker: "Orihime", text: "Are you sure?" },
    { speaker: "Player", text: "Yeah." },
    { speaker: "Narrator", text: "She smiles anyway." }
  ],

  orihime_lie: [
    { speaker: "Orihime", text: "Oh! That’s good!" },
    { speaker: "Narrator", text: "The conversation continues warmly." }
  ],

  // MISA ROUTE
  misa_route: [
    { speaker: "Narrator", text: "You approach Misa and Light." },
    { speaker: "Misa", text: "You made it! Sit with us!" },

    { speaker: "Light", text: "Did you eat?" },

    {
      choice: true,
      options: [
        { text: "Cafeteria ran out", next: "misa_truth" },
        { text: "Yeah, I’m fine", next: "misa_lie" }
      ]
    }
  ],

  misa_truth: [
    { speaker: "Misa", text: "WHAT?! That’s awful!" },
    { speaker: "Light", text: "That’s strange..." },
    { speaker: "Light", text: "You should’ve said something earlier." },

    {
      speaker: "Misa",
      text: "Since when does Light do things without thinking first?",
      style: "italic"
    },

    { speaker: "Narrator", text: "Light quietly offers you his lunch." }
  ],

  misa_lie: [
    { speaker: "Misa", text: "Oh! Good!" },
    { speaker: "Narrator", text: "Light still offers you his lunch." },

    {
      choice: true,
      options: [
        { text: "Accept lunch", next: "misa_accept" },
        { text: "Decline", next: "misa_decline" }
      ]
    }
  ],

  misa_accept: [
    { speaker: "Player", text: "Thank you." },
    { speaker: "Narrator", text: "Misa watches quietly." }
  ],

  misa_decline: [
    { speaker: "Player", text: "No thank you." },
    { speaker: "Light", text: "Suit yourself." }
  ]
};

function showLine() {
  const scene = script[currentScene];
  const line = scene[index];

  if (!line) {
    btn.disabled = true;
    nameBox.textContent = "";
    textBox.textContent = "End of demo ✨";
    return;
  }

  choiceBox.innerHTML = "";
  btn.style.display = "inline-block";
  textBox.style.fontStyle = "normal";

  if (line.action === "askName") {
    playerName = prompt("What's your name?") || "You";
    index++;
    showLine();
    return;
  }

  if (line.choice) {
    btn.style.display = "none";
    line.options.forEach(opt => {
      const b = document.createElement("button");
      b.textContent = opt.text;
      b.onclick = () => {
        currentScene = opt.next;
        index = 0;
        showLine();
      };
      choiceBox.appendChild(b);
    });
    return;
  }

  if (line.speaker === "Narrator") {
    nameBox.textContent = "";
  } else if (line.speaker === "Player") {
    nameBox.textContent = playerName;
  } else {
    nameBox.textContent = line.speaker;
  }

  if (line.style === "italic") {
    textBox.style.fontStyle = "italic";
  }

  textBox.textContent = line.text.replace(/\$\{playerName\}/g, playerName);
}

btn.addEventListener("click", () => {
  index++;
  showLine();
});

showLine();
