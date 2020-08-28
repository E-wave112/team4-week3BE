let txtCount, textarea, removeError, Exit, errorMsg;
txtCount = document.querySelector('#txt-count');
    textarea = document.querySelector('#text-cont');
    run = document.querySelector('#run');
    removeError = document.querySelector('#cancel');
    errorMsg = document.querySelector('#errorMsg');
    textarea.value = textarea.value.replace(/^\s*|\s*$/g,'');

    
function showAlert() {
    errorMsg.style.display = "block";
    errorMsg.style.width = "44%";
    errorMsg.style.marginLeft = '8%';
    errorMsg.style.background = '#FFD874';
    errorMsg.style.padding = "1%";
    errorMsg.style.fontSize = "2vw";   
    errorMsg.style.color = 'rgba(0, 0, 0, 0.88)';
    errorMsg.style.position = 'absolute';
    errorMsg.style.borderRadius = '5px';
    errorMsg.style.top = '27%';
}
function changeBottomBorder() {
    const key = event.key;
    textarea.style.borderColor = '#FDB600';
    var words = textarea.value;
    words = words.replace(/(^\s*)|(\s*$)/gi,"");
    words = words.replace(/[ ]{2,}/gi," ");
    words = words.replace(/\n /,"\n");
    var count = (words.split(" ").length);
    txtCount.innerHTML = count + ' / 500 Words';
    if (key === "Backspace" || key === "Delete") {
        textarea.style.borderBottom = '4px solid #FDB600';
    }
    if (textarea.value.length == 0) {
      textarea.style.borderBottom = '4px solid #E4E4E4';
      count = 0;
    } else {
      textarea.style.borderBottom = '4px solid #FDB600';
    }
    if(count > 5) {
        showAlert();
        textarea.style.borderBottom = '4px solid #FF0000';
        setTimeout (function () {
            errorMsg.style.display = "none";
        }, 5000);
        textarea.disabled = true;
        run.disabled = true;
    }
};
removeError.addEventListener('click', function() {
    textarea.disabled = false;
    run.disabled = false;  
    textarea.style.borderBottom = '4px solid #FDB600';
});