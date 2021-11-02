class Employee{
  private name:string;
  private address:string;
  private mobile:number;

  constructor(name:string,address:string,mobile:number){
      this.name =name;
      this.address = address;
      this.mobile = mobile;
  }

  displayDetails():void{
      console.log("Employee Details")
      console.log("Name: "+this.name);
      console.log("Address: "+this.address)
      console.log("Mobile: "+this.mobile)
  }

}
var n = new Employee("Aastha","Banglore",8978674686);
n.displayDetails();