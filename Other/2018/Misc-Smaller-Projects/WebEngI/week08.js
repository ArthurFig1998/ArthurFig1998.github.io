function makeRequest(url)
{
    httpRequest = false;
    httpRequest = new XMLHttpRequest();
    
    if(!httpRequest)
    {
        alert("Error: Your browser does not support XML - HTTP");
        return false;
    }
    else
    {
        httpRequest.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
                
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
}

function clearStudentTable()
{
    do
    {
        document.getElementById("studentTable").deleteRow(1);
    }
    while (document.getElementById("studentTable").rows.length > 0);
}

function getStudents()
{
    var xhttpStudents = new XMLHttpRequest();
    xhttpStudents.onreadystatechange =
        function ()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                var parseStudent = JSON.parse(this.responseText);
                var table = document.getElementById("studentTable");
                var j = 1;

                for (var i = 0; i < parseStudent.students.length; i++)
                {
                    var row = table.insertRow(j);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = parseStudent.students[i].first;
                    cell2.innerHTML = parseStudent.students[i].last;
                    cell3.innerHTML = 
                            parseStudent.students[i].address.city + ", " +
                            parseStudent.students[i].address.state +  "  " +
                            parseStudent.students[i].address.zip;
                    cell4.innerHTML = parseStudent.students[i].major;
                    cell5.innerHTML = parseStudent.students[i].gpa;
                   
                    j++;
                }
            }
        };
        
    var studentTxt = document.getElementById("parseJSON").value;
    var studentTxt2 = "../" + studentTxt;
    xhttpStudents.open("GET", "json.txt", true);
    xhttpStudents.send(null);
}

function getStudents1()
{
    var xhttpStudents = new XMLHttpRequest();
    xhttpStudents.onreadystatechange =
        function ()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                var parseStudent = JSON.parse(this.responseText);
                var table = document.getElementById("studentTable");
                var j = 1;

                for (var i = 0; i < parseStudent.students.length; i++)
                {
                    var row = table.insertRow(j);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = parseStudent.students[i].first;
                    cell2.innerHTML = parseStudent.students[i].last;
                    cell3.innerHTML = 
                            parseStudent.students[i].address.city + ", " +
                            parseStudent.students[i].address.state +  "  " +
                            parseStudent.students[i].address.zip;
                    cell4.innerHTML = parseStudent.students[i].major;
                    cell5.innerHTML = parseStudent.students[i].gpa;
                   
                    j++;
                }
            }
        };
        
    var studentTxt = document.getElementById("parseJSON").value;
    var studentTxt2 = "../" + studentTxt;
    xhttpStudents.open("GET", "json1.txt", true);
    xhttpStudents.send(null);
}