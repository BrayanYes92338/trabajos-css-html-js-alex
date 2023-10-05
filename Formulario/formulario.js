let registros = [];

function formulario() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let birthdate = document.getElementById("birthdate").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let documenttype = document.getElementById("documentType").value;
    let documentnumber = document.getElementById("documentNumber").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let termsAndConditions = document.getElementById("termsAndConditions").checked;
    let genero = 0;
    if (male) {
        genero = "Masculino";
    } else if (female) {
        genero = "Femenino";
    }
    let acepta = 0;
    if (termsAndConditions) {
        acepta = "Acepta";
    } else {
        acepta = "No acepta";
    }

    let registro = {
        name: name,
        lastname: lastname,
        birthdate: birthdate,
        phone: phone,
        email: email,
        documenttype: documenttype,
        documentnumber: documentnumber,
        genero: genero,
        acepta: acepta
    };
    
    if (!name || !lastname || !birthdate || !phone || !email || !documenttype || !documentnumber || (!male && !female) || !termsAndConditions) {
        alert("Por favor, llene todos los campos obligatorios.");
        return;
    }else {
        alert("Registro exitoso");
    }
    registros.push(registro);

    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value =  "";
    document.getElementById("documentType").value = "";
    document.getElementById("documentNumber").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("termsAndConditions").checked = false;

    console.log(registros);

}