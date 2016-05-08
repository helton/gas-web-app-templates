function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Basic Template (with some JavaScript libraries/frameworks and CSS links included)')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};