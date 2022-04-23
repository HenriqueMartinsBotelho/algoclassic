import express from "express";
import cors from "cors";
import fs from "fs";
import { Router, Request, Response } from "express";
import { PythonShell } from "python-shell";
import { simpleSum, bubleTest } from "./testcases";

const PORT = 3333;
const app = express();
const route = Router();

app.use(cors());
app.use(express.json());

route.post("/python/:algoritmo", (req: Request, res: Response) => {
  try {
    fs.unlinkSync(`${__dirname}\\python\\attempts\\${req.params.algoritmo}.py`);
    // console.log("File is deleted.");
  } catch (error) {
    console.log(error);
  }
  fs.writeFileSync(
    `${__dirname}\\python\\attempts\\${req.params.algoritmo}.py`,
    req.body.code
  );
  // console.log(req.params.algoritmo);

  let testCases: any = simpleSum;
  if (req.params.algoritmo === "bubleSort") {
    testCases = bubleTest;
    console.log(testCases);
  } else {
    testCases = simpleSum;
  }

  // console.log("testess", testCases);

  const promises = [];
  const testCaseResults = [];

  Object.keys(testCases).map((key) => {
    promises.push(
      new Promise((resolve, reject) => {
        PythonShell.run(
          `${__dirname}\\python\\attempts\\${req.params.algoritmo}.py`,
          {
            mode: "text",
            pythonOptions: ["-u"],
            args: testCases[key],
          },
          (err, results) => {
            if (err) {
              reject();
              throw err;
            }
            let output = JSON.stringify(
              results[0].slice(1, -1).split(", ").map(Number)
            );
            let expected = JSON.stringify(testCases[key][1]);
            if (output == expected) {
              console.log("ffffffffff", results);
              console.log("pppp", testCases);
              testCaseResults.push({
                input: testCases[key][0],
                output: output,
                expected: expected,
                ans: "True",
              });
            } else {
              testCaseResults.push({
                input: testCases[key][0],
                output: output,
                expected: expected,
                ans: "False",
              });
            }
            // testCaseResults.push(results[0]);
            resolve(true);
          }
        );
      })
    );
  });

  Promise.all(promises).then(() => {
    res.json({ testCaseResults });
    // console.log(testCaseResults);
  });
});

route.get("/test", (req: Request, res: Response) => {
  return res.send({
    success: true,
    data: {},
  });
});

app.use(route);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
