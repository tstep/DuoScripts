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
Full text of the license is available at https://github.com/tstep/DuoScripts/master/LICENSE
*/

function inject(f) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('name', 'strength_overview');
    script.textContent = '(' + f.toString() + ')()';
    document.body.appendChild(script);
}

inject(main);
function main(){
    console.log('Duolingo Strength Overview');
    // draft
}
