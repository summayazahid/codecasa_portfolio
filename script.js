// script.js

document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var pdfPath = 'CV Summaya Zahid.pdf';

    // Create an anchor element to trigger the download
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CV Summaya Zahid.pdf';
    link.click();
});
