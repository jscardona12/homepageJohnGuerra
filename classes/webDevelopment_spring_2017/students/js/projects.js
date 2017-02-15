var urlHtml = "1uP-2hsA3gPxOoDpfKKOOCxl5M6dT40hWpPlxlg5W2Bg";

var container = d3.select("#projects");

function update(data) {
  var nested_data = d3.nest()
    .key(function (d) { 
      console.log(d)
      return d["Nombres "] + " " + d["Apellidos"] + " Web Page"; })
      .sortKeys(function (a, b) {
        return a === "Others" ?
          1 :
          b === "Others" ?
            -1 :
            d3.ascending(a, b);
      })
    .entries(data);

  var topics = container.selectAll(".topic")
    .data(nested_data)
      .enter()
        .append("div")
        .attr("class", "topic row col-sm-5")
        .style("border","dashed #9d9d9d")
        .style("margin","1cm")

  topics.append("h4")
    .text(function (d) { return d.key; })

  var projs = topics.selectAll(".project")
    .data(function (d) { return d.values; })
      .enter()
        .append("div")
          .attr("class", "col-sm-12")
        .append("div")
          .attr("class", "project");

  var body = projs.append("div")
    .attr("class", "project-body");

  body

  var desc = body
    .append("div")
    .attr("class", "description col-sm-8");

  desc.append("p")
    .text(function (d) { return "Uploaded at" + d["Marca temporal"]; });  

  desc.append("p")
    .text(function (d) { return "Author: " + d["Nombres "] + " " + d["Apellidos"]; });      

  var desc2 = body
    .append("div")
    .attr("class", "description col-sm-4");


  desc2.append("a")
    .attr("href", function (d) { return d["Repositorio de github"]; })
    .attr("target", "_blank")
    .append("img")
    .attr("src", "img/github.png")    

  desc2.append("a")
    .attr("class", "project_url btn btn-sm btn-default")
    .attr("href", function (d) { return d["URL del proyecto"]; })
    .attr("target", "_blank")
    .text("Project Page");   


}

function preProcess(data) {
  var dictGroups = {};
  data.forEach(function (d) {
    dictGroups[d["Código"]]=d;
  })
  return d3.values(dictGroups);
}

function updateFromGSheet(data) {
  var procData = preProcess(data);
  update(procData);
}

function init() {
  Tabletop.init( { key: urlHtml,
                   callback: updateFromGSheet,
                   simpleSheet: true } )
}

// Update from googleSheets
window.onload = function() { init() };
d3.select("table").attr("class", "table");

