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
    { speaker: "Narrator", text: "There’s also a rumor going around. Exchange students staying for the rest of the semester." },

    { speaker: "Adviser", text: "Alright, everyone. We’ll be having three exchange students joining us for this semester." },

    { speaker: "Narrator", text: "The room went silent." },

    { speaker: "Student", text: "I can’t wait to see them!" },
    { speaker: "Student", text: "I heard they’re from a prestigious high school." },
    { speaker: "Student", text: "Why would they come to a regular school like ours?" },

    { speaker: "Adviser", text: "Alright alright! That’s enough." },
    { speaker: "Adviser", text: "They’re coming at any moment, so behave." },

    { speaker: "Keigo", text: "Why are you looking at me, teach?!" },

    { speaker: "Narrator", text: "THWACK. A piece of chalk nearly hits him." },

    { speaker: "Student", text: "Nice aim, teach!" },
    { speaker: "Keigo", text: "Man… New Year and none of you have changed." },

    { speaker: "Narrator", text: "Knock knock." },
    { speaker: "Adviser", text: "Come in!" },

    { speaker: "Narrator", text: "A boy steps inside. Calm, composed, and confident." },
    { speaker: "Light", text: "Good morning." },
    { speaker: "Light", text: "My name is Light Yagami. I’m an exchange student from Daikoku Private Academy." },

    { speaker: "Narrator", text: "The room went silent again." },

    { speaker: "Narrator", text: "A blonde girl slips past the door frame with a smile." },
    { speaker: "Misa", text: "Hi!" },
    { speaker: "Misa", text: "I’m Misa Amane. You probably know me as Misa Misa!" },

    { speaker: "Adviser", text: "Okay… that’s two… where’s the other one…" },
    { speaker: "Misa", text: "And last but not least…!" },

    { speaker: "Narrator", text: "You step into the classroom." },

    { action: "askName" },

    { speaker: "Player", text: "Nice to meet you." },

    { speaker: "Adviser", text: "Take any open seat." },

    { speaker: "Narrator", text: "Lunch period arrives." },

    {
      choice: true,
      options: [
        { text: "Go to Orihime", next: "orihime_route" },
        { text: "Go to Misa & Light", next: "misa_route" }
      ]
    }
  ],

  // ORIHIME ROUTE

  orihime_route: [
    { speaker: "Orihime", text: "Hi!" },
    { speaker: "Orihime", text: "Do you want to eat with us?" },

    {
      choice: true,
      options: [
        { text: "Yes", next: "orihime_yes" },
        { text: "No", next: "misa_route" }
      ]
    }
  ],

  orihime_yes: [
    { speaker: "Orihime", text: "Yay!" },
    { speaker: "Narrator", text: "Your stomach growls loudly." },
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
    { speaker: "Player", text: "The cafeteria ran out of food…" },
    { speaker: "Orihime", text: `${playerName}! Take my lunch!` },

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
    { speaker: "Narrator", text: "For the first time today, you don’t feel like an outsider." }
  ],

  orihime_refuse: [
    { speaker: "Orihime", text: "Are you sure?" },
    { speaker: "Narrator", text: "The group laughs and continues chatting." }
  ],

  orihime_lie: [
    { speaker: "Orihime", text: "Oh! That’s good!" },
    { speaker: "Narrator", text: "The conversation continues warmly." }
  ],

  // MISA / LIGHT ROUTE
 
  misa_route: [
    { speaker: "Misa", text: "You made it! Come sit with us!" },
    { speaker: "Light", text: "Did you manage to eat?" },

    {
      choice: true,
      options: [
        { text: "Cafeteria ran out", next: "misa_truth" },
        { text: "I'm fine", next: "misa_lie" }
      ]
    }
  ],

  misa_truth: [
    { speaker: "Misa", text: "WHAT?! That’s awful!" },
    { speaker: "Light", text: "That’s strange…" },
    { speaker: "Light", text: "You should’ve said something earlier." },

    {
      speaker: "Misa",
      text: "Since when does Light do things without thinking first?",
      style: "italic"
    },

    { speaker: "Narrator", text: "The bell rings soon after." }
  ],

  misa_lie: [
    { speaker: "Misa", text: "Oh! Good!" },
    { speaker: "Light", text: "I see." },

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
    { speaker: "Narrator", text: "You feel Light watching you quietly." }
  ],

  misa_decline: [
    { speaker: "Player", text: "No thank you." },
    { speaker: "Narrator", text: "Misa looks relieved." }
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

  textBox.textContent = line.text.replace("${playerName}", playerName);
}

btn.addEventListener("click", () => {
  index++;
  showLine();
});

showLine();
