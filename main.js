const subForm = (e) => {
  e.preventDefault();

  const {
    FirstName,
    MiddleName,
    LastName,
    Birthday,
    Number,
    Email,
    Nationality,
  } = document.forms["form"].elements;

  console.log("hi");

  fetch("https://api.apispreadsheets.com/data/RXei1CWpINVNWsPN/", {
    method: "POST",
    body: JSON.stringify({
      data: {
        Email: Email.value,
        Number: Number.value,
        Birthday: Birthday.value,
        LastName: LastName.value,
        FirstName: FirstName.value,
        MiddleName: MiddleName.value,
        Nationality: Nationality.value,
      },
    }),
  }).then((res) => {
    console.log(res);
    if (res.status === 201) {
      alert("Form Data Submitted :)");
    } else {
      alert("There was an error :(");
    }
  });
};

const form = document.querySelector("#form");

form.addEventListener("submit", subForm);
