
let content = document.getElementById("content");
// content.innerHTML = "";
let cont = "";
cont = `<table border="1">`;
cont += `<tr>`;
for (let i = 0; i < header.length; i++) {
    cont += ` <th>${header[i]}</th>`;
}

cont += `</tr>`;
for (let i = 0; i < data.length; i++) {
    cont += `<tr>`;
    for (let j = 0; j < 10; j++) {
        cont += ` <td>${data[i][j]}</td>`;
    }
    cont += `</tr>`;
}
cont += `</table>`;
// console.log(cont);

content.innerHTML = cont;
