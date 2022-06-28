function setDataHoje(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("dt_despesa").innerHTML = date
}

function setDataOntem(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
    document.getElementById("dt_despesa").innerHTML = date
}

function setDataEscolher(){
    document.getElementById("dt_despesa").type = "date"
}

function voltarDashboard(){
    window.location.href = "dashboard.html";
  }