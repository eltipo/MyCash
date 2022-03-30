function myCashWEB() {
  const htmlForSidebar = HtmlService.createTemplateFromFile("index");
  const htmlOutput = htmlForSidebar.evaluate();
  htmlOutput.setWidth(850);
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(htmlOutput);
}

function myCashPopUP() {
  const htmlServ = HtmlService.createTemplateFromFile("index");
  const htmlForm = htmlServ.evaluate();
  htmlForm.setWidth(850).setHeight(600);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(htmlForm, " ");
}

function createMenu(){

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu(" --- Inventario --- ");
  menu.addItem("MyCash-SideBAR", "myCashWEB" );
  menu.addItem("MyCash", "myCashPopUP" );
  menu.addToUi();
}

function onOpen(){
  createMenu();
}






