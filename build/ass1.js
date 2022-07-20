var user_name = "Arjun";
var age = 22;
var married = false;
var arrayofNumber = [1, 2, 3, 4];
var arrayofString = ["delhi", "public", "school"];
var tUple;
tUple = ["graduate", false];
var details;
(function (details) {
    details[details["User"] = 0] = "User";
    details[details["SuperUser"] = 1] = "SuperUser";
    details[details["Admin"] = 2] = "Admin";
    details[details["SuperAdmin"] = 3] = "SuperAdmin";
})(details || (details = {}));
var product = function (a, b) {
    return a * b;
};
console.log(product(5, 20));
var divide = function (a, b) {
    return a / b;
};
console.log(divide(100, 20));
var name_fnc = function (n) {
    console.log(n);
};
name_fnc("suresh");
//# sourceMappingURL=ass1.js.map