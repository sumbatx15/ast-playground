import * as vscode from "vscode";
import { getFiles } from "./utils";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("methodlist.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World from MethodList!");
    }),
    vscode.commands.registerCommand("methodlist.getFiles", async () => {
      let message = "";
      if (vscode.workspace.workspaceFolders !== undefined) {
        let uri = vscode.workspace.workspaceFolders[0].uri;
        const files = await getFiles(path.join(uri.fsPath, "/src"));
        console.log("files:", files);

        vscode.window.showInformationMessage("check debug console");
      } else {
        message =
          "YOUR-EXTENSION: Working folder not found, open a folder an try again";

        vscode.window.showErrorMessage(message);
      }
    })
  );
}

export function deactivate() {}
