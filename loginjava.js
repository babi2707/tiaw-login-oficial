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
    if (password.value.length != 0 && user.value.length != 0) {
      botao.disabled = false;
    }
  };
  user.oninput = validButton;
  password.oninput = validButton;

  //-------------- quando o botão de login for pressionado --------------
  login.onsubmit = (evento) => {
    evento.preventDefault();

    /*------- lista de instituições cadastradas -------
    (obs: lista apenas para teste, lista oficial será na 
    sprint 4, quando tiver os dados de cadastro)*/
    var struser = [
      {
        usuar: "babi752",
        senha: "1234",
        categoria: 0,
        nomeInst: "Instituição 1",
        email: "inst1@gmail.com",
        telefone: "31975258315"
      },

      {
        usuar: "barbara",
        senha: "5678",
        categoria: 1,
        nomeInst: "Instituição 2",
        email: "inst2@gmail.com",
        telefone: "31974842512"
      },
    ];

    localStorage.setItem("logados", JSON.stringify(struser));
    checkuser();

    user.value = "";
    password.value = "";

    /*-------------- confere se os dados do login estão cadastrados 
  (só funcionará na sprint 4, quando todos os artefatos se juntarem) --------------*/

    function checkuser() {
      let username = document.querySelector("#user");
      let userLabel = document.querySelector("#labelUser");

      let userSenha = document.querySelector("#password");
      let senhaLabel = document.querySelector("#labelSenha");

      function msgCerto() {
        alert(`Usuário ${user.value} logado!`);
      }
      function msgErro() {
        alert(`Usuário ou senha inválidos!`);
      }

      let userList = [];

      let userValid = {
        validuser: "",
        validsenha: "",
        validcategoria: "",
        validnomeInst: "",
        validemail: "",
        validtelefone: "",
      };

      userList = JSON.parse(localStorage.getItem("logados"));

      userList.forEach((item) => {
        if (username.value == item.usuar && userSenha.value == item.senha) {
          userValid = {
            validuser: item.usuar,
            validsenha: item.senha,
            validcategoria: item.categoria,
            validnomeInst: item.nomeInst,
            validemail: item.email,
            validtelefone: item.telefone,
          };
        }
      });

      console.log(userValid);

      //----- usuario e senha corretos -----
      if (
        username.value == userValid.validuser &&
        userSenha.value == userValid.validsenha
      ) {
        //----- alert logado e mudar para pagina para sair (deslogar) -----
        msgCerto();
        location.href = 'sair.html';
        
        //----- gerar um token para identificar o usuário -----
        let token = Math.random().toString(16).substr(2);
        localStorage.setItem("token", token);
        console.log("token:", token);
      } 
      //----- usuario e senha incorretos -----
      else {
        msgErro();
        user.style.border = "thin red solid";
        password.style.border = "thin red solid";
      }
    }
  };

  sairlogin.onclick = () => {
      sair();



    function sair()
    {
        localStorage.removeItem(token);
        location.href = 'login.html';

    }
  };
};
