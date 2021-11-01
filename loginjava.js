onload = () => {
  //-------------- user --------------

  user.onchange = () => {
    console.log("change", user.value);
  };
  user.onfocus = () => {
    instruction1.innerHTML = "Digite seu usuário";
    instruction1.style.color = "#999";
  };
  user.onblur = () => {
    if (user.value.length == 0) {
      instruction1.innerHTML = "Usuário em branco";
      user.style.border = "thin red solid";
    } else {
      instruction1.innerHTML = "";
      user.style.border = "thin black solid";
    }
  };

  //-------------- senha --------------

  password.onchange = () => {
    console.log("change", password.value);
  };
  password.onfocus = () => {
    instruction2.innerHTML = "Digite sua senha";
    instruction2.style.color = "#999";
  };
  password.onblur = () => {
    if (password.value.length == 0) {
      instruction2.innerHTML = "senha em branco";
      password.style.border = "thin red solid";
    } else {
      instruction2.innerHTML = "";
      password.style.border = "thin black solid";
    }
  };

  var inputSenha = document.querySelector("#password");
  inputSenha.setAttribute("type", "password");

  btsenha.onclick = () => {
    if (inputSenha.getAttribute("type") == "password") {
      inputSenha.setAttribute("type", "text");
    } else {
      inputSenha.setAttribute("type", "password");
    }
  };

  //-------------- reutilizar o usuário quando a página for recarregada  --------------
  let check;
  if ((check = localStorage.getItem("user"))) user.value = check;

  //-------------- conferindo se os campos estão preenchido para o botão de login funcionar --------------
  botao.disabled = true;
  let validButton = () => {
    if (password.value.length != 0 || user.value.length != 0) {
      botao.disabled = false;
    }
  };
  user.oninput = validButton;
  password.oninput = validButton;


  //-------------- quando o botão de login for pressionado --------------
  login.onsubmit = (evento) => {
    evento.preventDefault();
    var struser = [
      {
        user: user.value,
        senha: password.value,
      },

      {
        user: 'barbara',
        senha: 'barbarasenha',
      },
    ]

    localStorage.setItem('logados', JSON.stringify(struser));
    checkuser();

    user.value = "";
    password.value = "";

    /*-------------- confere se os dados do login estão cadastrados 
  (só funcionará na sprint 4, quando todos os artefatos se juntarem) --------------*/

  function checkuser() {
    //alert(`Usuário ${user.value} logado!`);

    let userList = []

    let userValid = {
        usuario: '',
        senha: '', 
        email: ''
    };

    userList = localStorage.getItem('logados');    
    console.log(userList);

  }
  

  };


};
