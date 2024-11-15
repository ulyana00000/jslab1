var arrTask = [];

arrTask[0] = {
    Name: "Написати звіт",
    Describing: "Довго",
    Data: "21.11.2024",
    Termin: "22.11.2024"
};

arrTask[1] = {
    Name: "Підготувати презентацію",
    Describing: "Складно, потребує багато часу",
    Data: "25.11.2024",
    Termin: "28.11.2024"
};

arrTask[2] = {
    Name: "Провести зустріч з командою",
    Describing: "Організаційні питання",
    Data: "20.11.2024",
    Termin: "20.11.2024"
};

arrTask[3] = {
    Name: "Перевірити звітність",
    Describing: "Ретельна перевірка",
    Data: "15.11.2024",
    Termin: "17.11.2024"
};

arrTask[4] = {
    Name: "Написати технічну документацію",
    Describing: "Детальний опис проєкту",
    Data: "14.11.2024",
    Termin: "19.11.2024"
};

arrTask[5] = {
    Name: "Підготувати аналіз ринку",
    Describing: "Потрібні додаткові ресурси",
    Data: "18.11.2024",
    Termin: "23.11.2024"
};

arrTask[6] = {
    Name: "Зустріч з клієнтом",
    Describing: "Обговорення планів співпраці",
    Data: "22.11.2024",
    Termin: "22.11.2024"
};

arrTask[7] = {
    Name: "Підготовка бюджету",
    Describing: "Фінансовий аналіз",
    Data: "9.11.2024",
    Termin: "11.11.2024"
};

arrTask[8] = {
    Name: "Розробка нового прототипу",
    Describing: "Інноваційний підхід",
    Data: "24.11.2024",
    Termin: "29.11.2024"
};

arrTask[9] = {
    Name: "Написання статті для блогу",
    Describing: "Творчий підхід",
    Data: "23.10.2024",
    Termin: "26.10.2024"
};

var html = "";



function EndStart(Data, Termin){
    
    var start = new Date(Data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var end = new Date(Termin.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var time_diff = end.getTime() - start.getTime();
    var end_start = Math.ceil(time_diff / (1000 * 3600 * 24));
    return end_start
}


function StartCurr(Data){
    var current_date = new Date();
    var start = new Date(Data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var time_diff = start.getTime() - current_date.getTime();
    var days_diff = Math.ceil(time_diff / (1000 * 3600 * 24));
    return days_diff
}

function EndCurr(Termin){
    var current_date = new Date();
    var end = new Date(Termin.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var time_diff = end.getTime() - current_date.getTime();
    var days_diff = Math.ceil(time_diff / (1000 * 3600 * 24));
    return days_diff
}


function outputTask(item, i , array){
    var text = item['Data'];
    var text2 = item['Termin'];

   
    let start_curr = StartCurr(text);
    let end_curr = EndCurr(text2);

    if (start_curr<=0 && end_curr>=0 ){
        html = html + "<tr style='background: yellow;'>";
    } else if (end_curr < 0) {
        html = html + "<tr style='background: green;'>";
    } else if (start_curr > 0)  {
        html = html + "<tr style='background: red;'>";
        
    }
    for (let key in item){
        html = html + "<td>" + item[key] + "</td>";
    }
    if (start_curr > 0) {
        html += `<td>Ще ${start_curr} днів!</td>`;
    } else {
        html += `<td></td>`;
    }

    html += `</tr>`;
}


function result() {
    html = "<table >";
        html = html + "<tr><td>Назва</td><td>Опис</td>"+
        " <td>Дата початку</td><td>Дата терміну</td></tr>"
        arrTask.forEach(outputTask);
        html = html + "</table>";
        document.getElementById("result").innerHTML = html;
}


