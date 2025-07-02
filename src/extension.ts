import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    'bpp',
    {
      provideCompletionItems(document, position) {
        const keywords = [
          'defmacro', 'endmacro',
          'callmacro',
          'if', 'else', 'endif',
          'while', 'endwhile',
          'for', 'endfor',
          'label', 'goto', 'call', 'echo', 'setlocal', 'set'
        ];

        const items = keywords.map(kw => {
          const item = new vscode.CompletionItem(kw, vscode.CompletionItemKind.Keyword);
          item.insertText = kw;
          return item;
        });

        return items;
      }
    },
    '' // Trigger on any character
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
