/*global document*/

document.getElementById('demo').onfocus = function() {addFocus();};

document.getElementById('demo').onblur = function() {rmvFocus();};

function addFocus() {
    
    'use strict';
    
    document.getElementById('input').classList.add('focus');
}

function rmvFocus() {
    
    'use strict';
    
    document.getElementById('input').classList.remove('focus');
}