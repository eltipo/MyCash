
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
  var spreadSheetId = "1RyjKzFZZCfNqO9zF9vSQ7D6oEhhwUiMZ5hxHwnQBrCU"; //CHANGE
  var dataRange = "movimientos!A9:F"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}

function listCategories() {
  var spreadSheetId = "1RyjKzFZZCfNqO9zF9vSQ7D6oEhhwUiMZ5hxHwnQBrCU"; //CHANGE
  var dataRange = "backend!B10:B"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}

function getSaldo() {
  var spreadSheetId = "1RyjKzFZZCfNqO9zF9vSQ7D6oEhhwUiMZ5hxHwnQBrCU"; //CHANGE
  var dataRange = "movimientos!F7"; //CHANGE
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}


function addNewRow(rowData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("movimientos");
  ws.appendRow([


    rowData.expDate, 
    rowData.expNotes,
    rowData.expAmount,
    rowData.expSaldo,
    rowData.expPayee, 
    rowData.expCategory, 

    
    ]);
  return true;
}


/*
      expDate: date.value, 
      expNotes: notes.value, 
      expAmount: amount.value, 
      expSaldo: ""
      expPayee: payee.value, 
      expCategory: inputGroupSelect01Value.value,  

 */
























