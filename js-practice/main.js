function main() {
  var x = 10;
  let y = 25;
  const z = { name: "js", status: "study" };

  if (true) {
    var x = 20;
    let y = 35;
    z.name = "javascript";
  }

  console.log(x);
  console.log(y);
  console.log(z);
}

main();
