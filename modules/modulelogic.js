module.exports = {
    getLength: function (str) {
        return str.length;
    },

    changeCase: function (str, choice) {
        if (choice === "U")
            return str.toUpperCase();
        if (choice === "L")
            return str.toLowerCase();
    },
};

