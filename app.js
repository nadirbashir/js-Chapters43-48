var names = [
  "Ali",
  "Ahmed",
  "majid",
  "Rehan",
  "Arif",
  "Zain",
  "Hussain",
  "Amir",
  "ali",
  "Majid",
];
var classes = [10, 9, 9, 10, 7, 8, 9, 7, 10, 8];
document.write(
  "<table id = 'myTable'> <tr> <th>Index</th> <th>Name</th> <th>Class</th> <th></th></tr>"
);
for (var i = 0; i < names.length; i++) {
  document.write(
    "<tr id = '" +
      i +
      "'><td>" +
      i +
      "</td> <td>" +
      names[i] +
      "</td> <td>" +
      classes[i] +
      "</td> <td><button onClick = 'deleteRow()'>Delete</button></td></tr>"
  );
}

function deleteRow() {
    var indeces = []
    var rows = document.getElementById('myTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (i = 0; i < rows.length - 1; i++) {
        indeces.push(i)
    }
    console.log(indeces);
    document.getElementById("myTable").deleteRow();
  }
