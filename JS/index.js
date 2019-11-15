// DOM elements
const guideList = document.querySelector('.guides');

const TeachersList = document.querySelector('.Teachers');

// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const students = doc.data();
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
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${Teachers.Name} </div>
        <div class="collapsible-body white"> ${Teachers.course} </div>
        
      </li>
    `;
    ktml += li;
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