// VARIABLES DECLARATION
let plagResp, plagCent, uniqResp, uniqCent, downloadBtn, downloadScreen, drops, openDrops, cancelDownload, 
    scrOne, scrTwo, nextDslide, Yes, No, typeDoc, typeDocx, typePDF, fileTypeDscrp;

// VARIABLES ASSIGNMENT  
    plagResp = document.querySelector('#plaigarised-resp');
    plagCent = document.querySelector('#plaigiarism-percent');
    uniqResp = document.querySelector('#unique-resp');
    uniqCent = document.querySelector('#unique-percent');
    downloadBtn = document.querySelector('#download');
    downloadScreen = document.querySelector('#downloadScreen');
    drops = document.querySelector('#drops');
    openDrops = document.querySelector('#open-drops');
    cancelDownload = document.querySelector('#cancel-download');
    scrOne = document.querySelector('#screen-one');
    scrTwo = document.querySelector('#screen-two');
    nextDslide = document.querySelector('#next-dslide');
    Yes = document.querySelector('#yes');
    No = document.querySelector('#no');
    Exit = document.querySelector('#exit');
    typeDoc = document.querySelector('#doc');
    typeDocx = document.querySelector('#docx');
    typePDF = document.querySelector('#PDF');
    fileTypeDscrp = document.querySelector('#file-type');
    
// JS STYLINGS
    drops.style.display = 'none';
    downloadScreen.style.display = 'none';
    plagResp.style.color = '#FF0000';
    plagResp.style.fontWeight = 'bold';
    plagCent.style.color = '#FF0000';
    plagCent.style.fontWeight = 'bold';
    plagCent.style.fontSize = '1.8vw';
    uniqResp.style.color = '#00D930';
    uniqResp.style.fontWeight = 'bold';
    uniqCent.style.color = '#00D930';
    uniqCent.style.fontWeight = 'bold';
    uniqCent.style.fontSize = '1.8vw';
    
// JS EVENTS
downloadBtn.addEventListener('click', function() {
    downloadScreen.style.display = 'block';
    downloadScreen.style.position = 'absolute';
    downloadScreen.style.top = '27%';
    downloadScreen.style.width = "44%";
    downloadScreen.style.marginLeft = '8%';
});
cancelDownload.onclick = cancelDOwnloads;
No.onclick = cancelDOwnloads;
Yes.onclick = function() {
    window.location.href = "download-page.html";
}
function cancelDOwnloads() {
    downloadScreen.style.display = 'none';
    scrTwo.style.display = 'none';
    scrOne.style.display = 'block';
}
nextDslide.onclick = function() {
    scrOne.style.display = 'none';
    scrTwo.style.display = 'block';
}
openDrops.onclick = function() {
    if(drops.style.display == 'none') {
        drops.style.display = 'block';
    } else {
        drops.style.display = 'none';
    }
}
typeDoc.onclick = function() {
    this.style.background = 'rgba(0, 0, 0, 0.444)';
    this.style.color = '#FFFFFF';
    this.value = 'Doc';
    fileTypeDscrp.innerHTML = this.value;
    typeDocx.style.background = 'transparent';
    typeDocx.style.color = 'black';
    typePDF.style.background = 'transparent';
    typePDF.style.color = 'black';
}
typeDocx.onclick = function() {
    this.style.background = 'rgba(0, 0, 0, 0.444)';
    this.style.color = '#FFFFFF';
    this.value = 'Docx';
    fileTypeDscrp.innerHTML = this.value;
    typeDoc.style.background = 'transparent';
    typeDoc.style.color = 'black';
    typePDF.style.background = 'transparent';
    typePDF.style.color = 'black';
}
typePDF.onclick = function() {
    this.style.background = 'rgba(0, 0, 0, 0.444)';
    this.style.color = '#FFFFFF';
    this.value = 'PDF';
    fileTypeDscrp.innerHTML = this.value;
    typeDocx.style.background = 'transparent';
    typeDocx.style.color = 'black';
    typeDoc.style.background = 'transparent';
    typeDoc.style.color = 'black';
}