class Innings{
    private team_name:string;
    private inning_name:string;
    private runs:number;

    constructor(team_name:string,inning_name:string,runs:number){
        this.team_name =team_name;
        this.inning_name = inning_name;
        this.runs = runs;
    }

    displayInningsDetails():void{
        console.log("Team name is: "+this.team_name);
        console.log("Innings name is: "+this.inning_name)
        console.log("Runs is: "+this.runs)
    }

}
var n = new Innings("India","First",300);
n.displayInningsDetails();