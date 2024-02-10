// ==UserScript==
// @name         Auto Set Roblox DoB
// @namespace    http://tampermonkey.net/
// @version      2024-02-10
// @description  Automatically Set User Date Of Birth On Register Page Of Roblox
// @author       Newfies
// @match        https://www.roblox.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

//  888888ba  oo                   dP          oo                               \\
//  88    `8b                      88                                           \\
//  88     88 dP .d8888b. .d8888b. 88 .d8888b. dP 88d8b.d8b. .d8888b. 88d888b.  \\
//  88     88 88 Y8ooooo. 88'  `"" 88 88'  `88 88 88'`88'`88 88ooood8 88'  `88  \\
//  88    .8P 88       88 88.  ... 88 88.  .88 88 88  88  88 88.  ... 88        \\
//  8888888P  dP `88888P' `88888P' dP `88888P8 dP dP  dP  dP `88888P' dP        \\
//  ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo \\

// Use this script at your own risk. I am not liable for any consequences, and usage may violate Roblox Terms of Service. \\

(function () {
    'use strict';

    // Variables - Dont Change
    const monthDropdown = document.querySelector('#MonthDropdown');
    const dayDropdown = document.querySelector('#DayDropdown');
    const yearDropdown = document.querySelector('#YearDropdown');

    // Variables - Can Change
    const month = "Jan"; // Only use the first three letters of the month.
    const day = "01"; // If setting a single digit date, add "0" before the number.
    const year = "2000"; // Use the four digits of the year.

    // Function to trigger change event on dropdowns
    function triggerChangeEvent(element, value) {
        element.value = value;
        const event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
    }

    // Setting Date Of Birth
    if (monthDropdown && dayDropdown && yearDropdown) {
        if (month && day && year) {
            // Change month to whatever is set to "month"
            triggerChangeEvent(monthDropdown, month);

            //  Change month to whatever is set to "day"
            triggerChangeEvent(dayDropdown, day);

            //  Change month to whatever is set to "year"
            triggerChangeEvent(yearDropdown, year);

            console.log('[Auto Set Roblox DoB Script] Birthdate selected successfully.');
        } else {
            console.log("[Auto Set Roblox DoB Script] Configurations of month/day/year were not found.")
        }
    } else {
        console.error('[Auto Set Roblox DoB Script] Dropdowns not found.');
    }

    // Disclaimer
    console.warn('[Auto Set Roblox DoB Script] Use this script at your own risk. I am not liable for any consequences, and usage may violate Roblox Terms of Service.');


})();
