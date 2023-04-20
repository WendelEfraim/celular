const semana = document.getElementById('semana')
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

function atualizarData(){
    let dateToday = new Date();
    let dd = String(dateToday.getDate()+' ').padStart(3,'0');
    let mm = dateToday.getMonth();
    let aa = dateToday.getFullYear();
    let ss = dateToday.getDay();

 if(ss == 0) ss = 'Domingo,';
 if(ss == 1) ss = 'Segunda-feira,';
 if(ss == 2) ss = 'Terça-feira,';
 if(ss == 3) ss = 'Quarta-feira,';
 if(ss == 4) ss = 'Quinta-feira,';
 if(ss == 5) ss = 'Sexta-feira,';
 if(ss == 6) ss = 'Sabado,';



 if(mm == 0) mm = 'de Janeiro';
 if(mm == 1) mm = 'de Fevereiro';
 if(mm == 2) mm = 'de Março';
 if(mm == 3) mm = 'de Abril';
 if(mm == 4) mm = 'de Maio';
 if(mm == 5) mm = 'de Junho';
 if(mm == 6) mm = 'de Julho';
 if(mm == 7) mm = 'de Agosto';
 if(mm == 8) mm = 'de Setembro';
 if(mm == 9) mm = 'de Outubro';
 if(mm == 10) mm = 'de Novembro';
 if(mm == 11) mm = 'de Dezembro ';


 

    dia.textContent = dd;
    mes.textContent = mm;

    semana.textContent = ss;
}
setInterval(atualizarData,1000);