// const name = "mario";
// console.log(name);

// const greet = (name) => {
//   console.log("hello", name);
// };

// greet("mario");
// greet("yoshi");

// console.log(global);

// const xyz = require("./people");
// // Found and run this file

// console.log(xyz);
// // console.log(people); // Its not defined

// // With destructuring

// const { people, ages } = require("./people");

// console.log(people, ages);
// // Output: [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]
// const os = require("os");
// console.log(os.platform(), os.homedir());
// // Output: win32 C:\Users\Alcaen

// The file system

// const fs = require("fs");

// reading files

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   // ASYNC
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   // Output: <Buffer 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73 2e>
//   console.log(data.toString());
// });

// console.log("last line");

// // writing files

// fs.writeFile("./docs/blog1.txt", "Hello World", () => {
//   console.log("file was written"); // Replace the content.
// });

// // if the file does not exist this create that file
// fs.writeFile("./docs/blog2.txt", "Hello Again", () => {
//   console.log("file was written");
// });

// // directories

// if (!fs.existsSync("./assets")) {
//   // this method check if something exists
//   fs.mkdir("./assets", (err) => {
//     // Make directory if not exist if the folder exist throw an error
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     // Remove directory if exists if the folder do not exist throw an error

//     if (err) {
//       console.log(err);
//     }
//     console.log("folder removed");
//   });
// }

// // deleting files

// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file removed");
//   });
// }

// Streams
// const fs = require("fs");

// // Read Streams
// const readStream = fs.createReadStream("./docs/blog3.txt", {
//   encoding: "utf8",
// });

// readStream.on("data", (chunk) => {
//   // This is an event listening. Listening the data event.
//   console.log("-----New Chunck-----");
//   console.log(chunk); //chunk of data.
// });

// Write Streams

// const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("-----New Chunck-----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// }); // EXAMPLE COPY

// Piping

// const readStream = fs.createReadStream("./docs/blog3.txt", {
//   encoding: "utf8",
// });
// const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.pipe(writeStream);
// Does the EXAMPLE COPY but in one line
