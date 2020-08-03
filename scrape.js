const puppeteer = require("puppeteer");
const fsLibrary = require("fs");
process.setMaxListeners(0);
//****************IELTS*************** */

var links = [
  "https://ielts-up.com/writing/task-2-art-questions.html",
  "https://ielts-up.com/writing/task-2-education-questions.html",
  "https://ielts-up.com/writing/task-2-environment-questions.html",
  "https://ielts-up.com/writing/task-2-friends-family-questions.html",
  "https://ielts-up.com/writing/task-2-government-society-questions.html",
  "https://ielts-up.com/writing/task-2-health-questions.html",
  "https://ielts-up.com/writing/task-2-jobs-employment-questions.html",
  "https://ielts-up.com/writing/task-2-relationship-questions.html",
  "https://ielts-up.com/writing/task-2-science-technology-questions.html",
  "https://ielts-up.com/writing/task-2-sport-questions.html",
  "https://ielts-up.com/writing/task-2-travel-tourism-questions.html",
  "https://ielts-up.com/writing/task-2-television-media-questions.html",
];

async function scrape() {
  var texts = [];
  for (let d = 0; d < links.length; d++) {
    const link = links[d];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);

    var nodes = await page.$$("div.exam-extract");

    for (let index = 0; index < nodes.length; index++) {
      const element = nodes[index];
      var ps = await element.$$("p");
      var temp = [];
      for (let i = 0; i < ps.length; i++) {
        const el = ps[i];
        var text = await el.getProperty("textContent");
        var rawText = await text.jsonValue();
        temp.push(rawText);
      }
      var question = "";
      temp.slice(1, temp.length).forEach((t) => {
        question += " " + t;
      });
      texts.push({
        text: temp[0],
        quetion: question,
      });
    }

    browser.close();
  }
  fsLibrary.writeFile(
    "ielts.txt",
    JSON.stringify({
      essays: texts,
    }),
    (error) => {
      console.log(error);
    }
  );
}

scrape();

//****************arguements************** */

// async function scrape(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   var texts = [];

//   var the_following = "";
//   var attach_the_following = false;

//   for (let i = 3; i <= 317; i++) {
//     const [el] = await page.$x('//*[@id="main-contents"]/div[1]/p[' + i + "]");
//     var text = await el.getProperty("textContent");
//     var rawText = await text.jsonValue();
//     var finalText = rawText;
//     if (attach_the_following) {
//       finalText = the_following + "\n" + finalText;
//       attach_the_following = false;
//       the_following = "";
//     }
//     if (
//       rawText.includes("The following") ||
//       rawText.includes("the following")
//     ) {
//       the_following = rawText;
//       attach_the_following = true;
//     }
//     if (attach_the_following == false) {
//       texts.push(finalText);
//     }
//   }

//   console.log(texts.length);
//   var questions = [];
//   for (let i = 3; i <= 351; i += 2) {
//     const [el2] = await page.$x(
//       '//*[@id="main-contents"]/div[1]/div[' + i + "]/p"
//     );
//     var text2 = await el2.getProperty("textContent");
//     var rawText2 = await text2.jsonValue();
//     questions.push(rawText2);
//   }
//   console.log(questions.length);

//   var argues = [];
//   for (let index = 0; index < texts.length; index++) {
//     argues.push({
//       text: texts[index],
//       question: questions[index],
//     });
//   }
//   fsLibrary.writeFile(
//     "arguments.txt",
//     JSON.stringify({
//       arguments: argues,
//     }),
//     (error) => {
//       console.log(error);
//     }
//   );

//   browser.close();
// }

// scrape(
//   "https://www.ets.org/gre/revised_general/prepare/analytical_writing/argument/pool"
// );

//*************Issues*******************

// async function scrape(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   var texts = [];

//   for (let i = 3; i <= 171; i++) {
//     const [el] = await page.$x('//*[@id="main-contents"]/div[1]/p[' + i + "]");
//     var text = await el.getProperty("textContent");
//     var rawText = await text.jsonValue();
//     var finalText = rawText;
//     if (rawText.includes("Claim:")) {
//       const [el1] = await page.$x(
//         '//*[@id="main-contents"]/div[1]/p[' + (i + 1) + "]"
//       );
//       var text1 = await el1.getProperty("textContent");
//       var rawText1 = await text1.jsonValue();
//       finalText += "/n" + rawText1;
//     }
//     if (rawText.includes("Reason:") == false) {
//       texts.push(finalText);
//     }
//   }
//   console.log(texts.length);
//   var questions = [];
//   for (let i = 3; i <= 299; i += 2) {
//     const [el2] = await page.$x(
//       '//*[@id="main-contents"]/div[1]/div[' + i + "]/p"
//     );
//     var text2 = await el2.getProperty("textContent");
//     var rawText2 = await text2.jsonValue();
//     questions.push(rawText2);
//   }
//   console.log(questions.length);

//   var issues = [];
//   for (let index = 0; index < texts.length; index++) {
//     issues.push({
//       text: texts[index],
//       question: questions[index],
//     });
//   }
//   fsLibrary.writeFile("newfile.txt", JSON.stringify(issues), (error) => {
//     console.log(error);
//   });

//   browser.close();
// }

// scrape(
//   "https://www.ets.org/gre/revised_general/prepare/analytical_writing/issue/pool"
// );
