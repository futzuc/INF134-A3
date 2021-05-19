// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

SVG.on(document, 'DOMContentLoaded', function(){
    // Implement a MyToolkit Button
	var btn = new MyToolkit.Button;
	btn.setText('Button');
	btn.move(50, 50);
	btn.onclick(function(e){
		console.log(e);
	});
	btn.mouseover(function(e){
		console.log('mouse over');
	});
	btn.mousedown(function(e){
		console.log('mouse down');
	});
	btn.mouseout(function(e){
		console.log('mouse out');
	});
	btn.mouseup(function(e){
		console.log('mouse up');
	});

	// Implement a MyToolkit CheckBox
	var checkBox = new MyToolkit.CheckBox;
	checkBox.setText('Check Box');
	checkBox.move(50, 30);
	checkBox.onclick(function(e){
		console.log(e);
	});
	checkBox.mousedown(function(e){
		console.log('mouse down');
	});
	checkBox.mouseup(function(e){
		console.log('mouse up');
	});

	// Implement a MyToolkit RadioBtn
	var options = [['Radio Button 1', false], ['Radio Button 2', false], ['Radio Button 3', false]];
	var radiobtn = new MyToolkit.RadioBtn(options);
	radiobtn.move(50, 1);
	radiobtn.onclick(function(e){
		console.log(e);
	});

	// Implement a MyToolkit TextBox
	var textBox = new MyToolkit.TextBox;
	textBox.move(50, 1);
	textBox.onclick(function(e){
		console.log(e);
	});
	textBox.mouseover(function(e){
		console.log('mouse over');
	});
	textBox.mousedown(function(e){
		console.log('mouse down');
	});
	textBox.mouseout(function(e){
		console.log('mouse out');
	});
	textBox.mouseup(function(e){
		console.log('mouse up');
	});

	// Implement a MyToolkit ScrollBar
	var scrollBar =  new MyToolkit.ScrollBar(140);
	scrollBar.move(50, 1);
	console.log(scrollBar.getPosition());

	// Implement a MyToolkit ProgressBar
	var progressBar = new MyToolkit.ProgressBar(300, 70);
	progressBar.move(50, 30);
	console.log(progressBar.getValue())
	progressBar.setValue(50);
	console.log(progressBar.getValue())
	progressBar.onclick(function(e){
		console.log(e);
	});
	progressBar.mouseover(function(e){
		console.log('mouse over');
	});
	progressBar.mouseout(function(e){
		console.log('mouse out');
	});
	progressBar.increment(function(e){
		console.log('increment');
	});

	// Implement a MyToolkit ToggleSwitch
	var numberBox = new MyToolkit.NumberBox;
	numberBox.move(50, 1);
});


