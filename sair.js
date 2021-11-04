onload = () =>
{
    sairlogin.onclick = () => {
        sair();
    function sair() {
        localStorage.removeItem('token: ');
        location.href = "login.html";
      }
    };

};