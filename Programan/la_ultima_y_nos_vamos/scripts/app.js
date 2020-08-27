let fs = require("fs");
var cal = require("./calculator");

logs(cal.add(8, 2));
logs(cal.sub(12, 5));
logs(cal.mul(7, 4));
logs(cal.div(15, 3));

function logs(res) {
  const date = new Date();
  const data = 
    `\n ${date.toLocaleDateString()} ${date.toLocaleTimeString()}   |   ${res.string} ${res.res}`;

  try {
    var appendFile = fs.appendFileSync("logs.txt", data);
    console.log("Logs guardados");

    fs.readFile("logs.txt", "utf-8", (error, data) => {
      if (error) throw error;
      console.log("Info en logs.txt: ", data);
    });
  } catch (err) {
    console.error("Error al guardar logs");
  }
}
