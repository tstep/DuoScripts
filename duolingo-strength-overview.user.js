// ==UserScript==
// @name         Duolingo Strength Overview
// @description  Allows to overview strength of all skills and lessons of Duolingo in compact way.
// @namespace    https://github.com/tstep
// @match        *://www.duolingo.com/*
// @author       Tatiana Stepanova
// @version      0.1

// ==/UserScript==

/*
Copyright (c) 2014 Tatiana Stepanova (https://github.com/tstep)

Licensed under the MIT License (MIT)
Full text of the license is available at https://raw.githubusercontent.com/tstep/DuoScripts/master/LICENSE
*/

function inject(f) {
    var injectionInterval = window.setInterval(function() {
      window.clearInterval(injectionInterval);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('name', 'strength_overview');
        script.textContent = '(' + f.toString() + ')()';
        document.body.appendChild(script);
    }, 1000);    
}

inject(main);
function main() {
    console.log('Duolingo Strength Overview');
    var user = duo.user;
    var data = user.attributes.language_data[user.attributes.learning_language];
    console.log(data.language_string + " strength: " + data.language_strength);
    var skills = data.skills.models;
    for (var i=0; i<skills.length; i++) {
        var skill = skills[i];
        console.log(skill.attributes.title + ': ' + skill.attributes.strength);
    }
}
