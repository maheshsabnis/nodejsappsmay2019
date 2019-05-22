exports.reverse = function (str) {
    var res;
    for (var i = str.length; i >= 0; i--) {
        res += str[i];
    }
    return res;
}; 