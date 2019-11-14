// DOM elements
const guideList = document.querySelector('.guides');

// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const students = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${students.Name} </div>
        <div class="collapsible-body white"> ${students.MIS} </div>
      </li>
    `;
    html += li;
  });
  guideList.innerHTML = html

};

// setup materialize components
/*document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});*/