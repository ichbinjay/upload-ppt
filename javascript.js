document.getElementById("FormControlFile").onchange = function () {
    var file_name_div = document.getElementById("file_name");
    file_name_div.innerHTML = "File selected: <i>" + this.value.replace(/^.*[\\\/]/, '') + "</i>";
    document.getElementById("label").style.display = "none";


    // disable input field
    document.getElementById("FormControlFile").disabled = true;
    //make it look like plain text
    document.getElementById("label").style.backgroundColor = "transparent";
    document.getElementById("label").style.color = "white";
    document.getElementById("label").style.boxShadow = "none";
    document.getElementById("label").style.cursor = "default";
    //make submit button active
    document.getElementById("submitt").style.cursor = "pointer";
    document.getElementById("submitt").style.fontSize = "2.5vh";
    document.getElementById("submitt").style.borderRadius = "30%";
};

document.getElementById("submitt").onclick = function () {
    document.getElementById("output").innerHTML = "Uploading, Please wait 😄";
};

$('#FormControlFile').on("change", function () {
    var file = this.files[0];
    var fr = new FileReader();
    fr.fileName = file.name;
    var dummy = fr.fileName;
    var flag = false;
    if (isNaN(dummy.replace(/^.*[\\\/]/, '').split(".")[0])) {
        flag = true;
    }
    if (dummy.replace(/^.*[\\\/]/, '').split(".")[0][0] == "B") {
        if (!isNaN(dummy.replace(/^.*[\\\/]/, '').split(".")[0].slice(1))) {
            flag = false;
        }
        if(!(dummy.replace(/^.*[\\\/]/, '').split(".")[1] == "pdf" || dummy.replace(/^.*[\\\/]/, '').split(".")[1] == "doc" || dummy.replace(/^.*[\\\/]/, '').split(".")[1] == "docx")){
            flag = true;
        }
    }

    if(flag){
        window.alert("Please check file name!");
        window.location.reload();
    }
    
    document.getElementById("submitt").disabled = false;
    fr.onload = function (e) {
        e.target.result
        html = '<input type="hidden" name="data" value="' + e.target.result.replace(/^.*,/, '') + '" >';
        html += '<input type="hidden" name="mimetype" value="' + e.target.result.match(/^.*(?=;)/)[0] + '" >';
        html += '<input type="hidden" name="filename" value="' + e.target.fileName + '" >';
        $("#data").empty().append(html);
    }
    fr.readAsDataURL(file);
});
