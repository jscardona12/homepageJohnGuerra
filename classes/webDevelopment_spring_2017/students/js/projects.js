var urlHtml = "1uP-2hsA3gPxOoDpfKKOOCxl5M6dT40hWpPlxlg5W2Bg";

var container = d3.select("#projects");

function update(data) {
  console.log(data.length);
  var nested_data = d3.nest()
    .key(function (d) { return d["Proyecto"];})
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
        .attr("class", "topic row col-sm-12");

  topics.append("h3")
    .text(function (d) { return d.key; })

  var projs = topics.selectAll(".project")
    .data(function (d) { return d.values; })
      .enter()
        .append("div")
          .attr("class", "col-sm-2 project");

  // projs
  //   .append("div")
  //     .attr("class", "project-title")
  //   .append("h3")
  //     .attr("class", "title")
  //     .append("a")
  //       .attr("href" , function (d) {
  //         return d["Project url"];
  //       })
  //       .attr("target", "_blank")
  //     .text(function (d) { return d["Project name"]; });

  var body = projs.append("div")
    .attr("class", "project-body");

  var desc = body
    .append("div")
    .attr("class", "description col-sm-12");

  desc.append("p")
    .text(function (d) { return d["Nombres "] + " " + d["Apellidos"] });

  body.append("div")
    .attr("class", "project-thumb")
    .append("img")
      .attr("src", function (d) {
        return d["URL de un thumbnail del proyecto"] ?
          d["URL de un thumbnail del proyecto"] :
          "../images/logo_desarrollo_web.png";
      })
      .attr("alt", function (d) {
        return "Image " + d["Proyecto"] + " " + d["Nombres "] + " " + d["Apellidos"];
      });



  // desc.append("p")
  //   .text(function (d) { return "Uploaded at" + d["Marca temporal"]; });

  var desc2 = body
    .append("div")
    .attr("class", "description2 col-sm-12");


  desc2.append("a")
    .attr("href", function (d) { return d["Repositorio de github"]; })
    .attr("target", "_blank")
    .text("Code");

  desc2.append("a")
    .attr("class", "")
    .attr("href", function (d) { return d["URL del proyecto"]; })
    .attr("target", "_blank")
    .text("Demo");

  desc2.append("a")
    .attr("class", "")
    .attr("href", function (d) { return d["URL del video de demostración del proyecto en YouTube"]; })
    .attr("target", "_blank")
    .text("Video");

}

function preProcess(data) {
  return d3.values(data);
}

function updateFromGSheet(data) {
  console.log(data)
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

