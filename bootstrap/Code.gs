function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Bootstrap Template')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};