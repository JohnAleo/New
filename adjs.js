//const studentlist = {
//  scStudent:[
//    {
//      name:"Rahmatulloh",
//      age:21,
//    },
//    {
//      name:"Sarvar",
//      age:20,
 //   },
//    {
//      name:"Bobur",
//    },
//    {
//      name:"Vali",
//      age:19,
 //   },
//    {
//      name:"Laziz",
//      age:25,
//    }
//  ],
//};
//console.log(studentlist.sctudent)
//console.log(studentlist.scStudent.map((a) => a.name));
//console.log(studentlist.scStudent.filter((a) => a.age));
//console.log(studentlist.scStudent.filter((a) => a.age>20));
//console.log(studentlist.scStudent.sort((a,b) => a.name.localeCompare(b.name)));


const namelist={
  name:"Sarvar",
  age:20,
  bio: function()  {
    console.log(`${this.name} ${this.age}`)// bu yerda "this" metodi const oldidagi "namelist" ga teng
  },
};
console.log(namelist.bio());
//const professorlist={
//  name:"Jalil",
//  age:47,
//  bio:function() {
//    console.log(`${this.name} ${this.age}`)
//  }
//}