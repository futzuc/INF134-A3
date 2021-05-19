// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    
    /**
     * Button widget
     */
    var Button = function(){
        var draw = SVG().addTo('body').size('100%', '100%');
        var button = draw.group();
        var rect = button.rect(150, 40).fill('#B6E2D3').opacity(0.8).stroke('black').radius(5);
        var label = '';
        var clickEvent = null;
        var mouseoverEvent = null;
        var mouseoutEvent = null;
        var mousedownEvent = null;
        var mouseupEvent = null;

        /**
         * Event handler for mouse over
         * @param  {Function} function
         */
        button.mouseover(function(event) {
            rect.fill({color: 'gray'});
            rect.stroke('black');
            if (mouseoverEvent != null){
                mouseoverEvent(event); 
            }
        })
        /**
         * Event handler for mouse out
         * @param  {Function} function
         */
        button.mouseout(function(event){
            rect.fill({color: '#B6E2D3'});
            rect.stroke('black');
            if (mouseoutEvent != null){
                mouseoutEvent(event); 
            }
        })
        /**
         * Event handler for mouse down
         * @param  {Function} function
         */
         button.mousedown(function(event){
            rect.fill({color: '#98D7C2'});
            rect.stroke('#98D7C2');
            label.font({fill: 'white'});
            if (mousedownEvent != null){
                mousedownEvent(event); 
            }
        })
        /**
         * Event handler for mouse up
         * @param  {Function} function
         */
         button.mouseup(function(event){
            rect.fill({color: '#B6E2D3'});
            rect.stroke('black');
            label.font({fill: 'black'});
            if (mouseupEvent != null){
                mouseupEvent(event); 
            }
        })
        /**
         * Event handler for click
         * @param  {Function} function
         */
         button.click(function(event){
            rect.fill({color: '#B6E2D3'});
            rect.stroke('black');
            if (clickEvent != null){
                clickEvent(event);
            }
        })
        return {
            /**
             * Place the button to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                button.move(x, y);
            },
            /**
             * Set the clickEvent to custom function
             * @param  {Function} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            },
            /**
             * Set the mouseoverEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseover: function(eventHandler){
                mouseoverEvent = eventHandler;
            },
            /**
             * Set the mouseoutEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseout: function(eventHandler){
                mouseoutEvent = eventHandler;
            },
            /**
             * Set the mousedownEvent to custom function
             * @param  {Function} eventHandler
             */
            mousedown: function(eventHandler){
                mousedownEvent = eventHandler;
            },
            /**
             * Set the mouseupEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseup: function(eventHandler){
                mouseupEvent = eventHandler;
            },
            /**
             * Set the text
             * @param  {String} userInput
             */
            setText: function(userInput){
                label = button.text(userInput)
                    .font({fill: 'black', family: 'Comic Sans MS', size: 20})
                    .center(0.5*rect.width(), 0.5*rect.height());
            },
        }
    }

    /**
     * CheckBox widget
     */
    var CheckBox = function(){
        var draw = SVG().addTo('body').size('100%', '100%');
        var checkBox = draw.group();
        var outterRect = checkBox.rect(25, 25).fill('#B6E2D3').opacity(0.8).stroke('black');
        var innerRect = checkBox.rect(15, 15).fill('#B6E2D3').center(0.5*outterRect.width(), 0.5*outterRect.height());
        var checked = false;
        var label = '';
        var clickEvent = null;
        var mousedownEvent = null;
        var mouseupEvent = null;
        /**
         * Event handler for checking and unchecking the box 
         * @param  {Function} function
         */
        checkBox.mousedown(function(event){
            if(checked == false){
                innerRect.fill({color: '#167D7F'});
                checked = true;
            } else{
                innerRect.fill({color: '#B6E2D3'});
                checked = false;
            }
            if(mousedownEvent != null){
                mousedownEvent(event);
            }
        })
        /**
         * Event handler for mouse up 
         * @param  {Function} function
         */
         checkBox.mouseup(function(event){
            if(checked == false){
                innerRect.fill({color: '#B6E2D3'});
            } else{
                innerRect.fill({color: '#167D7F'});
            }
            if(mouseupEvent != null){
                mouseupEvent(event);
            }
        })
        /**
         * Event handler for click
         * @param  {Function} function
         */
        checkBox.click(function(event){
            if(checked == false){
                innerRect.fill({color: '#B6E2D3'});
            } else{
                innerRect.fill({color: '#167D7F'});
            }
            var state = 'click';
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            /**
             * Place the check box to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                checkBox.move(x, y);
            },
            /**
             * @param  {Function} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * Set the mousedownEvent to custom function
             * @param  {Function} eventHandler
             */
             mousedown: function(eventHandler){
                mousedownEvent = eventHandler;
            },
            /**
             * Set the mouseupEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseup: function(eventHandler){
                mouseupEvent = eventHandler;
            },
            /**
             * Set the text
             * @param  {String} userInput
             */
            setText: function(userInput){
                label = checkBox.text(userInput)
                    .font({fill: 'black', family: 'Comic Sans MS', size: 20})
                    .move(32, 0);
            },
        }
    }

    var RadioBtn = function(options){
        var draw = SVG().addTo('body').size('100%','100%');
        var radioBtnSet = draw.group();
        var radioBtnArray = [];
        var select = null;
        var circle_y = 1;
        var label_y = 1;
        for (var i = 0; i < options.length; i++) {
            var radioBtn = draw.group();
            var outterCir = radioBtn.circle(28).fill('#B6E2D3').opacity(0.8).stroke('black');
            if (options[i][1] == true){
                var innerCir = radioBtn.circle(18).fill('#167D7F').center(0.5*outterCir.width(), 0.5*outterCir.height());
                select = i;
            } else {
                var innerCir = radioBtn.circle(18).fill('#B6E2D3').center(0.5*outterCir.width(), 0.5*outterCir.height());
            }
            radioBtn.move(50, circle_y);
            circle_y += 40
            var label = radioBtn.text(options[i][0])
                .font({fill: 'black', family: 'Comic Sans MS', size: 20})
                .move(82, label_y);
            label_y += 40;
            
            /*
            options[i].push(function(){
                radioBtn.mousedown(function(){
                    console.log('mouse down');
                    var radioBtn = draw.group();
                    var outterCir = radioBtn.circle(28).fill('#B6E2D3').opacity(0.8).stroke('black');
                    var innerCir = radioBtn.circle(18).fill('#167D7F').center(0.5*outterCir.width(), 0.5*outterCir.height());
                    radioBtn.move(0, y+= 40);
                    select = i;
                })
            });*/
            radioBtnArray.push(radioBtn);
            radioBtnSet.add(radioBtn);
        }
        var clickEvent = null;

        /**
         * Event handler for checking and unchecking the radio button
         */
        
        
        /**
         * Event handler for mouse up 
         */
         /*radioBtn.mouseup(function(){
            if(select != true){
                innerCir.fill({color: '#167D7F'});
                select = true;
            } else{
                innerCir.fill({color: '#B6E2D3'});
                select = false;
            }
            var state = 'mouseup';
        })*/
        /**
         * Event handler for click
         */
         /*radioBtn.click(function(event){
            innerCir.fill({ color: '#167D7F'})
            if(clickEvent != null)
                clickEvent(event)
        })*/
        return {
            /**
             * Place the check box to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                radioBtnSet.move(x, y);
            },
            /**
             * @param  {} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
        }
    }

    /**
     * TextBox widget
     */
    var TextBox = function(){  
        var draw = SVG().addTo('body').size('100%','100%');
        var textBox = draw.nested();
        var rect = textBox.rect(250, 40).fill('#B6E2D3').opacity(0.8).stroke('black').radius(5);
        var caret = textBox.line(5, 5, 5, 35).stroke({with: 1, color: 'B6E2D3'});
        var text = textBox.text('').font({color: 'black', family: 'Comic Sans MS', size: 20})
        text.move(5);
        var clickEvent = null;
        var mouseoverEvent = null;
        var mouseoutEvent = null;
        var mousedownEvent = null;
        var mouseupEvent = null;

        /**
         * Event handler for mouse over
         * @param  {Function} function
         */
        textBox.mouseover(function(event){
            caret.stroke({with: 1, color: 'black'});
            if (mouseoverEvent != null){
                mouseoverEvent(event); 
            }
        })
        /**
         * Event handler for mouse out
         * @param  {Function} function
         */
        textBox.mouseout(function(event){
            caret.stroke({with: 1, color: 'B6E2D3'});
            if (mouseoutEvent != null){
                mouseoutEvent(event); 
            }
        })
        /**
         * Event handler for mouse down
         * @param  {Function} function
         */
        textBox.mousedown(function(event){
            caret.stroke({with: 1, color: 'black'});
            this.fire('keyup');
            if (mousedownEvent != null){
                mousedownEvent(event); 
            }
        })
        /**
         * Event handler for mouse up
         * @param  {Function} function
         */
        textBox.mouseup(function(event){
            if (mouseupEvent != null){
                mouseupEvent(event); 
            }
        })
        /**
         * Custom event handler for key up
         */
        textBox.on('keyup', function(event){
            SVG.on(window, 'keyup', (event)=>{
                if (event.which != 13 && event.which != 16 && event.which != 18 && event.which != 91 && event.which != 93 && event.which != 8 && event.which != 17 && event.which != 20){
                    text.text(text.text() + event.key);
                    console.log(text.length())
                    caret.x(text.length() + 3);
                }
            })
        })
        /**
         * Event handler for click
         * @param  {Function} function
         */
        textBox.click(function(event){
            if (clickEvent != null){
                clickEvent(event);
            }
        })

        return {
            /**
             * Place the check box to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                textBox.move(x, y);
            },
            /**
             * @param  {Function} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            /**
             * Set the mouseoverEvent to custom function
             * @param  {Function} eventHandler
             */
             mouseover: function(eventHandler){
                mouseoverEvent = eventHandler;
            },
            /**
             * Set the mouseoutEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseout: function(eventHandler){
                mouseoutEvent = eventHandler;
            },
            /**
             * Set the mousedownEvent to custom function
             * @param  {Function} eventHandler
             */
            mousedown: function(eventHandler){
                mousedownEvent = eventHandler;
            },
            /**
             * Set the mouseupEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseup: function(eventHandler){
                mouseupEvent = eventHandler;
            },
        }
    }  

    var ScrollBar = function(height){
        var draw = SVG().addTo('body').size('100%', '100%');
        var scrollBar = draw.nested();
        var thumb = scrollBar.rect(25, height).fill('#B6E2D3').opacity(0.8).stroke('black');
        var upBox = scrollBar.rect(25, 20).fill('#167D7F');
        var upArrow = scrollBar.polygon('12,4 5,15 20,15').fill('black');
        var down = draw.nested();
        var downBox = down.rect(25, 20).fill('#167D7F');
        var downArrow = down.polygon('5,5 20,5 12,16').fill('black');
        scrollBar.add(down);
        down.move(0, height-20);
        var thumb = scrollBar.rect(23, 40).fill('#167D7F').x(1).y(21);
        //var progress = progressBar.rect(rect.width() * (increment/100), 15).fill('#167D7F').radius(5)
        var clickEvent = null;

        /**
         * Event handler for mouse over
         */
        scrollBar.mouseover(function () {
            state = 'hover';
        })
        /**
         * Event handler for mouse out
         */
        scrollBar.mouseout(function(){
            state = 'mouseout';
        })

        /**
         * Event handler for click
         */
        scrollBar.click(function(event){
            if (clickEvent != null){
                clickEvent(event);
            }
        })
        return {
            /**
             * Place the button to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                scrollBar.move(x, y);
            },
            /**
             * @param  {} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            },
            getPosition: function(){
                return thumb.attr('x');
            }
        }
    }

    var ProgressBar = function(width, value){
        var draw = SVG().addTo('body').size('100%', '100%');
        var progressBar = draw.nested();
        var rect = progressBar.rect(width, 15).fill('#B6E2D3').opacity(0.8).stroke('black').radius(5);
        var increment = 0;
        if (value >= 0 && value <= 100){
            increment = value;
        }
        var progress = progressBar.rect(rect.width() * (increment/100), 15).fill('#167D7F').radius(5)
        var clickEvent = null;
        var incrementEvent = null;
        var mouseoverEvent = null;
        var mouseoutEvent = null;

        /**
         * Event handler for mouse over
         * @param  {Function} function
         */
        progressBar.mouseover(function(event) {
            if (mouseoverEvent != null){
                mouseoverEvent(event); 
            }
        })
        /**
         * Event handler for mouse out
         * @param  {Function} function
         */
        progressBar.mouseout(function(event){
            if (mouseoutEvent != null){
                mouseoutEvent(event); 
            }
        })

        /**
         * Event handler for click
         * @param  {Function} function
         */
        progressBar.click(function(event){
            if (clickEvent != null){
                clickEvent(event);
            }
        })
        return {
            /**
             * Place the button to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
            move: function(x, y) {
                progressBar.move(x, y);
            },
            /**
             * @param  {} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            },
            /**
             * Set the mouseoverEvent to custom function
             * @param  {Function} eventHandler
             */
             mouseover: function(eventHandler){
                mouseoverEvent = eventHandler;
            },
            /**
             * Set the mouseoutEvent to custom function
             * @param  {Function} eventHandler
             */
            mouseout: function(eventHandler){
                mouseoutEvent = eventHandler;
            },
            /**
             * Set the incrementEvent to custom function
             * @param  {Function} eventHandler
             */
             increment: function(eventHandler){
                incrementEvent = eventHandler;
            },
            /**
             * Set the increment value
             * @param  {number} value
             */
            setValue: function(value){
                if (value >= 0 && value <= 100){
                    increment = value;
                    progress.width(rect.width() * (value/100)).fill('#167D7F').radius(5);
                }
            },
            /**
             * Get the increment value
             */
            getValue: function(){
                return increment;
            },
        }
    }

    var NumberBox = function(){
        var draw = SVG().addTo('body').size('100%', '100%');
        var numberBox = draw.nested();
        var rect = numberBox.rect(150, 30).fill('#B6E2D3').opacity(0.8).stroke('black');
        var minusBtn = draw.nested();
        var minusBox = minusBtn.rect(30, 30).fill('#98D7C2').stroke('black');
        var minus = minusBtn.line(6, 15, 24, 15).stroke({with: 1, color: 'black'});
        numberBox.add(minusBtn);
        var plusBtn = draw.nested().x(120);
        var plusBox = plusBtn.rect(30, 30).fill('#98D7C2').stroke('black');
        var plus1 = plusBtn.line(6, 15, 24, 15).stroke({with: 1, color: 'black'});
        var plus2 = plusBtn.line(15, 6, 15, 24).stroke({with: 1, color: 'black'});
        numberBox.add(plusBtn);
        var num = 0;
        var number = numberBox.text(String(num)).font({color: 'black', family: 'Comic Sans MS', size: 20}).x(70).y(2);
        
        /**
         * Event handler for mouse down (minusBox)
         * @param  {Function} function
         */
        minusBox.mousedown(function() {
            minusBox.fill('#167D7F');
        })
        /**
         * Event handler for mouse up (minusBox)
         * @param  {Function} function
         */
        minusBox.mouseup(function() {
            minusBox.fill('#98D7C2');
            if (num >= 1){
                num -= 1;
                number.text(String(num));
            }
        })
        /**
         * Event handler for mouse down (plusBox)
         * @param  {Function} function
         */
        plusBox.mousedown(function() {
            plusBox.fill('#167D7F');
        })
        /**
         * Event handler for mouse up (plusBox)
         * @param  {Function} function
         */
        plusBox.mouseup(function() {
            plusBox.fill('#98D7C2');
            num += 1;
            number.text(String(num));
        })

        return {
            /**
             * Place the button to position (x, y)
             * @param  {number} x
             * @param  {number} y
             */
             move: function(x, y) {
                numberBox.move(x, y);
            },
            /**
             * @param  {} eventHandler
             */
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            },
        }
    }

return {Button, CheckBox, RadioBtn, TextBox, ScrollBar, ProgressBar, NumberBox}
}());

export{MyToolkit}