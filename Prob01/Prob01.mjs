/**
 * Read a file one line at a time (kindof)
 */
import fs from 'fs'
import readline from 'readline'

(async () => {
  const fileStream = fs.createReadStream('Prob01.in.txt');
  const readlineInterface = readline.createInterface({
    input: fileStream
  });
  let lineIdx = 0;
  let testCaseCount = 0;

  try {
    for await (const line of readlineInterface) {
      if (lineIdx === 0) {
        testCaseCount = parseInt(line);
        // console.log(`testCaseCount: ${testCaseCount}`);
      }
      else {
        if (lineIdx > testCaseCount) {
          readlineInterface.close(); // terminate further processing of file
        }
        else {
          // console.log(`${lineIdx}: ${line}`);
          // process 'line' from file
          if (parseInt(line) >= 70) {
            console.log("PASS");
          }
          else {
            console.log("FAIL");
          }
        }
      }
      lineIdx += 1;
    }
  } catch(err) {
    console.error(err);
  }
})();

