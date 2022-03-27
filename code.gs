
function doGet(request) {
  var template = HtmlService.createTemplateFromFile('index');
  var html = template.evaluate()
    .setTitle('index');

  var htmlOutput = HtmlService.createHtmlOutput(html);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1, user-scalable=no');

  return htmlOutput
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData11() {
  var spreadSheetId = ""; //-------------------------------------------PUT SPREADSHEET ID HERE
  var dataRange = "movimientos!A9:E"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}

function listCategories() {
  var spreadSheetId = ""; //-------------------------------------------PUT SPREADSHEET ID HERE
  var dataRange = "backend!B10:B"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}

function getSaldo() {
  var spreadSheetId = ""; //-------------------------------------------PUT SPREADSHEET ID HERE
  var dataRange = "movimientos!F7"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}


function addNewRow(rowData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("movimientos");
  ws.appendRow([rowData.expDate, rowData.expCategory, rowData.expAmount, rowData.expPayee, rowData.expNotes]);
  return true;
}


