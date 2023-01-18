const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Your answer has been received!: ${name}`);

  rl.question('What"s an activity you like doing? ', (activity) => {
    console.log(`Your answer has been received!: ${activity}`);

    rl.question('What do you listen to while doing that? ', (listen) => {
      console.log(`Your answer has been received!: ${listen}`);

      rl.question('Which meal is your favourite? (eg. dinner, brunch, etc.) ', (meal) => {
        console.log(`Your answer has been received!: ${meal}`);

        rl.question('What"s your favourite thing to eat for that meal? ', (food) => {
          console.log(`Your answer has been received!: ${food}`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`Your answer has been received!: ${sport}`);

            rl.question('What is your superpower? ', (power) => {
              console.log(`Your answer has been received!: ${power}`);

              rl.question('In a few words, tell us what you are amazing at! ', (amaze) => {
                console.log(`Your answer has been received!: ${amaze}`);

                console.log(`Your profile has been generated! ${name} enjoys ${activity} while listening to ${listen}. ${name}'s favorite meal is ${meal} and loves to eat ${food}. ${name}'s favorite sport is ${sport} and their superpower is ${power}. ${name} is amazing at ${amaze}.`);
                rl.close();
              })
            })
          })
        })
      })
    })
  })
}); 