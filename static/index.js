var file_raw = "https://raw.githubusercontent.com/auyu0408/fire_bone/master/file_simulate/"

var ul = document.querySelector('ul');
var oinput = document.getElementById('q');
var url = location.search;
var requestURL = file_raw + "index_example.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var Data = request.response;
    if (url === ""){
    }else{
        var key = url.split("=");
        key[1] = decodeURIComponent(key[1]);
        Data = filterText(key[1], Data);
    }
    showDatas(Data, ul);
}
oinput.oninput=function(){
    var Origin = request.response;
    text = this.value;
    var newData = filterText(text, Origin);
    showDatas(newData, ul);
}
function showDatas(Datajson, obj){
    obj.innerHTML = '';
    for (i=0; i<Datajson.length; i++){
        var Link = document.createElement('a');
        var Name = document.createElement('div');
        var Department = document.createElement('span');
        Link.href = "course.html?co_no=" +Datajson[i].Co_no;
        Link.className = "list-group-item d-flex list-group-item-action";
        Name.textContent = Datajson[i].Name;
        Name.className = "me-auto";
        Name.style = "color: #733830;"
        Department.textContent = Datajson[i].Department;
        Department.className = "badge badge-outline-primary rounded-pill";
        Link.appendChild(Name);
        Link.appendChild(Department);
        obj.appendChild(Link);
    }
}
function filterText(key, OriginData){
    return OriginData.filter(function(elem, index){
        if (elem.Co_no.indexOf(key)!=-1){
            return true;
        }
        else if(elem.Department.indexOf(key)!=-1){
            return true;
        }
        else if(elem.Name.indexOf(key)!=-1){
            return true;
        }
        else{
            return false;
        }
    })
}