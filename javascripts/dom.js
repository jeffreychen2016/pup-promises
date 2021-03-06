const outputDiv = $('#pups');

const printToDom = (pupz) => {
  outputDiv.append(pupz);
};

const domString = (pups) => {
  pups.forEach((pup) => {
    let pupString = '';
    pupString += `<div class='col-sm-6 col-md-4'>`;
    pupString +=  `<div class='thumbnail'>`;
    pupString +=    `<div class='caption'>`;
    pupString +=      `<h3>${pup.name}</h3>`;
    pupString +=      `<p>${pup.bio}</p>`;
    pupString +=    `</div>`;
    pupString +=  `</div>`;
    pupString += `</div>`;
    printToDom(pupString);
  });
};

module.exports = domString;
