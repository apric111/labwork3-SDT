const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	function CountSpaces(str) {
		/*
		Returns the number of spaces in the string.

			Parametrs:
				str (any): a string of characters
			Return value:
				count (number): the number of spaces in str
		 */
		let count = 0;
		for (let i = 0; i < str.length; ++i) {
			if (str[i] === ' ') {
				count++;
			}
		}
		return count;
	}
	let tab = "    ";
	const if_gen = vscode.commands.registerCommand('blocks-generator.if_gen', function () {
		/*
		Based on the current tab, it generates a code template block:

			if (<cursor>) {

			}

		The cursor will be in place of the placemark <cursor>
		 */
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return
		}
		const line_number = editor.selection.active.line;
		const line_text = editor.document.lineAt(line_number).text;
		let number_of_spaces = CountSpaces(line_text);
		let spaces = "";
		for (let i = 0; i < number_of_spaces; ++i) {
			spaces += " ";
		}
		editor.edit(function(editBuilder) {
			editBuilder.insert(editor.selection.active, `if () {\n${spaces}${tab}\n${spaces}}`);
		});
		const pos = new vscode.Position(line_number, number_of_spaces + 4);
		editor.selection = new vscode.Selection(pos, pos);
	});

	const else_if_gen = vscode.commands.registerCommand('blocks_generator.else_if_gen', function () {
		/*
		Based on the current tab, it generates a code template block:

			else if (<cursor>) {

			}
			
		The cursor will be in place of the placemark <cursor>
		 */
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return
		}
		const line_number = editor.selection.active.line;
		const line_text = editor.document.lineAt(line_number).text;
		let number_of_spaces = CountSpaces(line_text);
		let spaces = "";
		for (let i = 0; i < number_of_spaces; ++i) {
			spaces += " ";
		}
		editor.edit(function(editBuilder) {
			editBuilder.insert(editor.selection.active, ` else if () {\n${spaces}${tab}\n${spaces}}`);
		});
		const pos = new vscode.Position(line_number, number_of_spaces + 11);
		editor.selection = new vscode.Selection(pos, pos);
	});

	const else_gen = vscode.commands.registerCommand('blocks_generator.else_gen', function () {
		/*
		Based on the current tab, it generates a code template block:

			else {
				<cursor>
			}
			
		The cursor will be in place of the placemark <cursor>
		 */
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return
		}
		const line_number = editor.selection.active.line;
		const line_text = editor.document.lineAt(line_number).text;
		let number_of_spaces = CountSpaces(line_text);
		let spaces = "";
		for (let i = 0; i < number_of_spaces; ++i) {
			spaces += " ";
		}
		editor.edit(function(editBuilder) {
			editBuilder.insert(editor.selection.active, ` else {\n${spaces}${tab}\n${spaces}}`);
		});
		const pos = new vscode.Position(line_number + 1, number_of_spaces + 4);
		editor.selection = new vscode.Selection(pos, pos);	
	});

	const for_gen = vscode.commands.registerCommand('blocks_generator.for_gen', function () {
		/*
		Based on the current tab, it generates a code template block:

			for (int i = 0; i < <cursor>; ++i) {
			
			}
			
		The cursor will be in place of the placemark <cursor>
		 */
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return
		}
		const line_number = editor.selection.active.line;
		const line_text = editor.document.lineAt(line_number).text;
		let number_of_spaces = CountSpaces(line_text);
		let spaces = "";
		for (let i = 0; i < number_of_spaces; ++i) {
			spaces += " ";
		}
		editor.edit(function(editBuilder) {
			editBuilder.insert(editor.selection.active, `for (int i = 0; i < ; ++i) {\n${spaces}${tab}\n${spaces}}`);
		});
		const pos = new vscode.Position(line_number, number_of_spaces + 20);
		editor.selection = new vscode.Selection(pos, pos);		
	});

	const while_gen = vscode.commands.registerCommand('blocks_generator.while_gen', function () {
		/*
		Based on the current tab, it generates a code template block:

			while (<cursor>) {
			}
			
		The cursor will be in place of the placemark <cursor>
		 */
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return
		}
		const line_number = editor.selection.active.line;
		const line_text = editor.document.lineAt(line_number).text;
		let number_of_spaces = CountSpaces(line_text);
		let spaces = "";
		for (let i = 0; i < number_of_spaces; ++i) {
			spaces += " ";
		}
		editor.edit(function(editBuilder) {
			editBuilder.insert(editor.selection.active, `while () {\n${spaces}${tab}\n${spaces}}`);
		});
		const pos = new vscode.Position(line_number, number_of_spaces + 7);
		editor.selection = new vscode.Selection(pos, pos);		
	});

	context.subscriptions.push(if_gen);
	context.subscriptions.push(else_if_gen);
	context.subscriptions.push(else_gen);
	context.subscriptions.push(for_gen);
	context.subscriptions.push(while_gen);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
