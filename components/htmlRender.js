import renderToDOM from '../utils/renderToDom';

// ********** HTML Components  ********** //
// the basic HMTL structure of app
const htmlStructure = () => {
  const domString = `
  <div id="header-container" class="header mb-3"></div>
  <div id="form-container" class="container mb-3 text-center"></div>
  <div id="filter-container" class="container mb-3"></div>
  <div id="student-container" class="container d-flex"></div>
  `;

  renderToDOM('#app', domString);
};

const header = () => {
  const domString = `<div class="container">
    <h1>Welcome to Hoggy Hogwarts Sorting Hat!</h1>
    <p>
      Hmm, difficult. VERY difficult. <br />Plenty of courage, I see.
      <br />Not a bad mind, either. There's talent, oh yes. <br />And a
      thirst to prove yourself. <br />But where to put you?
    </p>
  </div>`;

  renderToDOM('#header-container', domString);
};

const studentAreas = () => {
  const domString = `<div id="students">No Students</div>
  <div id="voldy">No Death Eaters</div>`;

  renderToDOM('#student-container', domString);
};

export { htmlStructure, header, studentAreas };
