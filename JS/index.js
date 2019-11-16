// DOM elements
const guideList = document.querySelector('.guides');

const TeachersList = document.querySelector('.Teachers');

var ib_code;

//console.log(FirebaseAuth.getInstance().getCurrentUser());
// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const students = doc.data();
    //var check = parseInt(${students.MIS}/1000) - 110000;
    //console.log(check);
    //console.log(students.MIS);
    var test = students.MIS;
    //console.log(parseInt(test/1000)-110000);
    ib_code=parseInt(test/1000)-110000;
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${students.Name} </div>
        <div class="collapsible-body white"> ${students.MIS} </div>
        <div class="collapsible-body white"> ${students.Email} </div>
      </li>
    `;
    html += li;
  });
  guideList.innerHTML = html

};

const setupTeachers = (data) => {

  let ktml = '';
  data.forEach(doc => {
    const Teachers = doc.data();
    //var check = parseInt(${students.MIS}/1000) - 110000;
    if(Teachers.b_code==ib_code)
    {
    //if(Teachers.b_code==check)
    //{
    const li = `
      <li>
        <a> <div class="collapsible-header grey lighten-4"> ${Teachers.Name} </div></a>
        <div class="collapsible-body white"> ${Teachers.course} </div>
        
      </li>
    `;
    ktml += li;
  //}
  }
  });
  TeachersList.innerHTML = ktml

};

// setup materialize components
/*document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});*/