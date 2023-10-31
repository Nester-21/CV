/*document.getElementById("download-button").addEventListener("click", function() {
    const element = document.getElementById("cv-container");
    html2pdf().from(element).save("RuvarasheBhebheCV-2023InternHIT.pdf");
   });*/

   document.getElementById("download-button").addEventListener("click", function() {
    const element = document.getElementById("cv-container");
    const options = {
      filename: "RuvarasheBhebheCV-2023InternHIT.pdf",
      margin: 10,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().set(options).from(element).save();
  });