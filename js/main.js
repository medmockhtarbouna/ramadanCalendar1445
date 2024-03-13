
let content = document.getElementById("content");
// content.innerHTML = "";
let cont = "";
cont = `<table>`;
cont += `<tr class="font-color-yellow font-size-small">`;
for (let i = 0; i < header.length; i++) {
    cont += ` <td>${header[i]}</td>`;
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
