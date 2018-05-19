const domString = require('./dom');

// const getAllPups = () => {
//   let pups = [];
//   $.get('../db/pup1.json')
//     .done((data1) => {
//       pups = [...data1.pup1,];
//       $.get('../db/pup2.json')
//         .done((data2) => {
//           pups = [...pups, ...data2.pup2,];
//           $.get('../db/pup3.json')
//             .done((data3) => {
//               pups = [...pups, ...data3.pup3,];
//               domString(pups);
//             })
//             .fail((error3) => {
//               console.error('fail');
//             });
//         })
//         .fail((error2) => {
//           console.error('fail');
//         });
//     })
//     .fail((error1) => {
//       console.error('fail');
//     });
// };
const firstPupJSON = () => {
  return new Promise((resolve,reject) => {
    $.get('../db/pup1.json')
      .done((data) => {
        resolve(data.pup1);
      })
      .fail((err) => {
        reject('I got an error!',err);
      });
  });
};

const secondPupJSON = () => {
  return new Promise((resolve,reject) => {
    $.get('../db/pup2.json')
      .done((data) => {
        resolve(data.pup2);
      })
      .fail((err) => {
        reject('I got an error!',err);
      });
  });
};

const thirdPupJSON = () => {
  return new Promise((resolve,reject) => {
    $.get('../db/pup3.json')
      .done((data) => {
        resolve(data.pup3); // -- ?????
      })
      .fail((err) => {
        reject('I got an error!',err);
      });
  });
};

/* -----------------  Process data in the same function ------------- */
// const getAllPups = () => {
//   let dogos = [];
//   firstPupJSON()
//     .then((result) => {
//       // domString(result);
//       dogos = [...result,];
//       return secondPupJSON();
//     }).then((result2) => {
//       dogos = [...dogos,...result2,];
//       return thirdPupJSON();
//     }).then((result3) => {
//       dogos = [...dogos,...result3,];
//       domString(dogos);
//     })
//     .catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

// const initializer = () => {
//   getAllPups();
// };

/* -----------------  Return value then process ------------- */
// if want to return value
// return Promise.resolve(dogos);

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       // domString(result);
//       dogos = [...result,];
//       return secondPupJSON();
//     }).then((result2) => {
//       dogos = [...dogos,...result2,];
//       return thirdPupJSON();
//     }).then((result3) => {
//       dogos = [...dogos,...result3,];
//       return Promise.resolve(dogos); -- ???
//     })
//     .catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

// const initializer = () => {
//   getAllPups().then((dogos) => {
//     domString(dogos);
//   });
// };

/* -----------------  Promise all / Parallel  ------------- */

const getAllPups = () => {
  return Promise.all([firstPupJSON(),secondPupJSON(),thirdPupJSON(),])
    .then((results) => {
      const dogos = [...results[0],...results[1],...results[2],];
      return Promise.resolve(dogos);
    }).catch((error) => {
      console.error(error);
    });
};

// const singlePup = () => {
//   getAllPups().then((pups) => {
//     const foodId = pups[0].favFoodId;
//   })
// };

const initializer = () => {
  getAllPups().then((dogos) => {
    domString(dogos);
  });
};

module.exports = {
  initializer,
  // singlePup,
};
