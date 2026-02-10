function doPost(e) {
  var sheetName = "Leads";
  var scriptProp = PropertiesService.getScriptProperties();

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(sheetName);

    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
      // Append header row if new sheet
      sheet.appendRow([
        "Timestamp",
        "Lead ID",
        "Nome",
        "Email",
        "WhatsApp",
        "Turma",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "UTM Content",
        "UTM Term",
        "Page URL",
        "Referrer",
        "User Agent"
      ]);
    }

    var data = JSON.parse(e.postData.contents);
    
    var nextRow = sheet.getLastRow() + 1;
    var newRow = [
      new Date(),
      data.lead_id,
      data.nome,
      data.email,
      "'" + data.whatsapp, // Force string to keep leading zeros if any, though usually 55...
      data.turma,
      data.utm_source || "",
      data.utm_medium || "",
      data.utm_campaign || "",
      data.utm_content || "",
      data.utm_term || "",
      data.page_url || "",
      data.referrer || "",
      data.user_agent || ""
    ];

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "lead_id": data.lead_id }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("Leads");
  if (!sheet) {
    sheet = doc.insertSheet("Leads");
    sheet.appendRow([
        "Timestamp",
        "Lead ID",
        "Nome",
        "Email",
        "WhatsApp",
        "Turma",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "UTM Content",
        "UTM Term",
        "Page URL",
        "Referrer",
        "User Agent"
    ]);
  }
}
