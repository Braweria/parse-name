"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = void 0;
var helpers_1 = require("./helpers");
function parseName(fullname) {
    var _a, _b, _c, _d;
    var original = fullname;
    var prefix, first, initials, middle, infix, last, suffix;
    var chopped = fullname;
    _a = findNeedleInHaystack(helpers_1.prefixes, chopped), prefix = _a[0], chopped = _a[1];
    _b = findNeedleInHaystack(helpers_1.infixes, chopped), infix = _b[0], chopped = _b[1];
    _c = findNeedleInHaystack(helpers_1.suffixes, chopped), suffix = _c[0], chopped = _c[1];
    _d = findName(chopped), first = _d[0], middle = _d[1], initials = _d[2], last = _d[3], chopped = _d[4];
    var parsedName = {
        prefix: prefix,
        first: first,
        middle: middle,
        initials: initials,
        infix: infix,
        last: last,
        suffix: suffix,
        full: original,
    };
    return parsedName;
}
exports.parseName = parseName;
var sorting = function (a, b) {
    if (a.length < b.length) {
        return 1;
    }
    if (a.length > b.length) {
        return -1;
    }
    return 0;
};
var findNeedleInHaystack = function (needles, haystack) {
    var sortedNeedles = needles.sort(sorting);
    if (!haystack) {
        return [null, haystack];
    }
    var found = false;
    var i = 0;
    var result = null;
    var chopped = haystack;
    while (found === false) {
        if (i > sortedNeedles.length - 1) {
            result = null;
            found = true;
            break;
        }
        var wordLength = sortedNeedles[i].length;
        for (var a = 0; a < haystack.length; a++) {
            if (haystack.substr(a, wordLength).toLowerCase() === sortedNeedles[i]) {
                if (haystack[a - 1] === " " ||
                    (haystack[a - 1] === undefined && haystack[wordLength] === " ") ||
                    haystack[wordLength] === undefined) {
                    result = haystack.substr(a, wordLength);
                    found = true;
                    chopped = removeSpaces(haystack.replace(result, ""));
                }
                break;
            }
        }
        i++;
    }
    return [result, chopped];
};
var findName = function (haystack) {
    var chopped = haystack;
    var initialsRegex = /(\S\.\s{0,1})+/u;
    var initials = null;
    var first = null;
    var middle = null;
    var last = null;
    if (chopped === null || haystack === null) {
        return [first, middle, initials, last, chopped];
    }
    haystack.split(" ").forEach(function (hay, i, all) {
        if (chopped === null) {
            return;
        }
        var len = all.length - 1;
        if (i === len) {
            last = hay;
            chopped = removeSpaces(chopped.replace(hay, ""));
            if (chopped) {
                console.warn("Warning: Person has more than two names. Additional names are not supported. The following is still left from the name:", chopped);
            }
        }
        else if (initialsRegex.test(hay)) {
            initials = hay;
            chopped = removeSpaces(chopped.replace(hay, ""));
        }
        else if (!first) {
            first = hay;
            chopped = removeSpaces(chopped.replace(hay, ""));
        }
        else if (!middle) {
            middle = hay;
            chopped = removeSpaces(chopped.replace(hay, ""));
        }
    });
    return [first, middle, initials, last, chopped];
};
var removeSpaces = function (str) { return str.trim().replace("  ", " "); };
