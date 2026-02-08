const message = `
I want to say this without defending myself.

Yesterday, my fear turned into pressure.
That wasn’t fair to you.

You didn’t owe me explanations,
screenshots,
or proof.

I let my insecurity speak louder
than my trust.

I’m genuinely sorry for that.

You don’t have to reply.
You don’t have to fix anything.
I just wanted you to know
I see my mistake clearly now.
`;

let i = 0;
const speed = 40;
const text = document.getElementById("text");

function typeEffect() {
  if (i < message.length) {
    text.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
