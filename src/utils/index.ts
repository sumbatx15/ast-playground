import { glob } from "glob";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  },
});

export const getFiles = (path: string) => {
  return new Promise((res, rej) => {
    glob(`${path}/**/*.{js,ts}`, {}, (err, files) => {
      if (err) {
        rej(err);
      }
      return res(files);
    });
  });
};
