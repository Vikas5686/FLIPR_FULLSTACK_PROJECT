let baseUrl = "https://flipr-fullstack-project.onrender.com";
const row = document.getElementById("row");

let Myproject = {};
let client;
let CONTACT;
let email;

let NewProject1 = {
  name: "nishika",
  image: "url",
  discription: "nothing",
  readmore: "nothing",
};

let project_Name = document.getElementById("project_Name");
let project_image = document.getElementById("project_image");
let project_disc = document.getElementById("project_disc");
let project_readme = document.getElementById("project_readme");
let submitProject = document.getElementById("submitProject");

let projectbtn = document.getElementById("submitProject");

projectbtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
  Myproject = {
    name: project_Name.value,
    image: project_image.value,
    discription: project_disc.value,
    readmore: project_readme.value,
  };
  sendproject(Myproject);
  console.log(Myproject);
});

const sendproject = async (NewProject) => {
  const respon = await fetch(`${baseUrl}/OUR_PROJECTS`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(NewProject),
  });
  if (respon.status === 404 || !respon) {
    alert("Email already exist");
  } else if (respon.status === 403) {
    alert("Please fill the form");
  } else {
    alert("data saved successfull");
    const data11 = await respon.json();
    console.log(data11);
    // localStorage.setItem('id', JSON.stringify(data11))
    // convas.style.display = "block"
    // score.style.display = "block"
    // document.getElementById("box").style.display = "none";
    // // AFTER THE SET THE USER ON DATABASE CALL THIS FUNTIONS
    // animate()
    // spawEnemy();
  }
};

const getproject = async () => {
  console.log("hello");
  const respon = await fetch(`${baseUrl}/OUR_PROJECTS`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respon.json();

  console.log(data);

  //   data.forEach((element, i) => {
  //     row.innerHTML += `  <div class="card" style="width: 18rem;">
  //     <img src="${element.image}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //         <h5 class="card-title">${element.name}</h5>
  //         <p class="card-text">${element.discription}</p>
  //         <a href="#" class="btn btn-primary">${element.readmore}</a>
  //     </div>
  // </div>`;
  //   });
};

const getclient = async () => {
  console.log("hello");
  const respon = await fetch(`${baseUrl}/HAPPY_CLIENT`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respon.json();

  console.log(data);
};

const getcontact = async () => {
  console.log("hello");
  const respon = await fetch(`${baseUrl}/CONTACT`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respon.json();

  console.log(data);
};

const getemails = async () => {
  console.log("hello");
  const respon = await fetch(`${baseUrl}/Email`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respon.json();

  console.log(data);
};

getproject();
getclient();
getcontact();
getemails();

// let NewClient = {
//   name: "misti3",
//   image: "url",
//   discription: "nothing",
//   readmore: "nothing",
// };

// const sendclient = async (Newclient) => {
//   const respon = await fetch(`${baseUrl}/HAPPY_CLIENT`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(Newclient),
//   });
//   if (respon.status === 404 || !respon) {
//     alert("Email already exist");
//   } else if (respon.status === 403) {
//     alert("Please fill the form");
//   } else {
//     const data11 = await respon.json();
//     console.log(data11);
//   }
// };

// senddata(NewProject1)
