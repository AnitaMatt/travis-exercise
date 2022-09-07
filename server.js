const favoriteName = process.env.NAME;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My favorite name is ${favoriteName} - Microservices rock`);
    await sleep(5000);
  }
}

main();
