var Innings = /** @class */ (function () {
    function Innings(team_name, inning_name, runs) {
        this.team_name = team_name;
        this.inning_name = inning_name;
        this.runs = runs;
    }
    Innings.prototype.displayInningsDetails = function () {
        console.log("Team name is: " + this.team_name);
        console.log("Innings name is: " + this.inning_name);
        console.log("Runs is: " + this.runs);
    };
    return Innings;
}());
var n = new Innings("India", "First", 300);
n.displayInningsDetails();
