const oneLinerJoke = require("one-liner-joke");

function getHello(ctx) {
  ctx.body = "Hello world!";
}

function getHelloMars(ctx) {
  ctx.body = "Hello Mars!";
}

function getEesti(ctx) {
    ctx.body = {text: "Hello Eesti!"}
  }

  function getNoYou(ctx) {
    const query = ctx.request.query;
    ctx.body = {
        text: `No you ${query.word}`
    }
}

function getNumber(ctx) {
    const query = ctx.request.query;
    ctx.body = {
        text: `number 1 = ${query.num1} & number 2 = ${query.num2}`
    }
}

function getHelloCustom(ctx) {
    const query = ctx.request.query;
    ctx.body = {
        text: `Hello from ${query.city}`
    }

    // ctx.body = {
    //     text: `hello from ${city}`
    // }
}

function getJoke(ctx) {
  const randomJoke = oneLinerJoke.getRandomJoke({
    exclude_tags: ["dirty", "racist", "marriage"],
  });

  ctx.body = {
    joke: randomJoke.body,
    poweredBy: "powered by one-liner-joke",
  };
}



module.exports = { getHello, getHelloMars, getJoke, getHelloCustom, getEesti, getNoYou, getNumber };
