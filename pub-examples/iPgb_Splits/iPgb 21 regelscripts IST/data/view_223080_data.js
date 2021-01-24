var viewData = {"id":223080,"isExpandedObject":false};
var objectRelations = {
};
var objectData = {
"223080" : {
"id":223080,
"typeIconPath":"data/icons/ArchiMate/AllView.png",
"data" : [
{
"lang":"nl",
"name":"Toekennen Budget",
"type":"Totaalview classic",
"categories":[{"type":"documentation","title":"documentatie","content":{"type":"rtf","value":"<span style=\" font-size: 10pt;\">In het zorgtoekenningsproces geeft de budgetverstrekker aan de betaalinstantie gegevens door van het budget dat is toegekend aan een budgethouder. Het proces 'Toekennen budget' betreft het toekennen van budget voor het leveren van zorg in de leveringsvorm 'Persoonsgebonden budget'. De betaalinstantie kan, mede op basis van de gegevens in het toekenningsbericht (501-bericht), bepalen of een door een budgethouder ingediende declaratie uitbetaald mag worden. &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Een toekenningsbericht heeft altijd betrekking op &#233;&#233;n budgethouder en &#233;&#233;n (hoofd)budget. &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">In het toekenningsbericht geeft de budgetverstrekker het budget door op het niveau van functiebudgetten. Daarbij geldt dat voor een toekenning vanuit de Wlz slechts &#233;&#233;n zorgfunctie gebruikt mag worden (zorgfunctie 99 : Totaal zorgpakket). &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Er wordt in de volgende situaties een toekenningsbericht gestuurd:&nbsp;<p style=\"margin-top: 3pt;\">-&nbsp;&nbsp;&nbsp;&nbsp;Het toekennen van een nieuw zorgfunctiebudget;&nbsp;<p style=\"margin-top: 3pt;\">-&nbsp;&nbsp;&nbsp;&nbsp;Het intrekken van een zorgfunctiebudget;&nbsp;<p style=\"margin-top: 3pt;\">-&nbsp;&nbsp;&nbsp;&nbsp;Het wijzigen (verkorten, verlengen, verlagen of verhogen) van een zorgfunctiebudget;&nbsp;<p style=\"margin-top: 3pt;\">-&nbsp;&nbsp;&nbsp;&nbsp;Het toevoegen, wijzigen of verwijderen van een relatie;&nbsp;<p style=\"margin-top: 3pt;\">- &nbsp;&nbsp;Het toevoegen, wijzigen of verwijderen van een correspondentieadres (contactgegevens);&nbsp;<p style=\"margin-top: 3pt;\">-&nbsp;&nbsp;&nbsp;&nbsp;Een eerder toekenningsbericht is in het ontvangen retourbericht (het 502-bericht) afgekeurd.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">In een toekenningsbericht moeten altijd alle geldende gegevens (zorgfunctiebudgetten, relaties, contact) met betrekking tot het betreffende (hoofd)budget worden vermeld. &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Er mag per verstrekker in de tijd gezien geen overlap ontstaan binnen een zorgfunctiebudget. De uitzonderingen hierop staan beschreven in de bedrijfsregels.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Voor de definitie van het verantwoordingsvrijbedrag en de functiebudgetperiode wordt verwezen naar de documentatie bij het betreffende element.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">In een toekenningsbericht mag slechts &#233;&#233;n contactadres worden doorgegeven. Zie ook de documentatie bij de klasse &quot;Contact&quot;.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\"><b><i>Gebruik van de budgetidentificatie&nbsp;<p style=\"margin-top: 3pt;\"></b></i>De vulling van de elementen Budgetidentificatie en BudgetidentificatieOud bepalen in samenhang of een toekenningsbericht een nieuwe toekenning of een te wijzigen toekenning betreft.&nbsp;<p style=\"margin-top: 3pt;\">"}}]
}
]
}
};
var viewReferences = {"224075":32589,"224081":32622,"224086":223080,"224079":32601,"224085":32619,"224087":223089,"224078":32598,"224083":32595};
var objectReferences = {
"224075" : 32589
,
"224073" : 224074
,
"224069" : 224070
,
"224067" : 224068
,
"224071" : 224072
,
"224023" : 224024
,
"224063" : 224064
,
"224065" : 224066
,
"224025" : 224026
,
"224057" : 224058
,
"224059" : 224060
,
"224055" : 224056
,
"224047" : 224048
,
"224061" : 224062
,
"224041" : 224042
,
"224043" : 224044
,
"224045" : 224046
,
"224049" : 224050
,
"224051" : 224052
,
"224053" : 224054
,
"224039" : 224040
,
"224031" : 224032
,
"224027" : 224028
,
"224033" : 224034
,
"224029" : 224030
,
"224035" : 224036
,
"224037" : 224038
,
"230948" : 230948
,
"230925" : 230925
,
"230931" : 230931
,
"224081" : 32622
,
"224086" : 223080
,
"224079" : 32601
,
"224085" : 32619
,
"224087" : 223089
,
"224078" : 32598
,
"224083" : 32595
,
"230950" : 230950
};
var viewpointsData = 
[
{"id":"viewpoint55979","name":"Rollen bij processen en casuïstiek","presentationType":"FmtColourView"}
,{"id":"viewpoint55976","name":"Bedrijfsregels bij proces of casus","presentationType":"FmtLabelView"}
];
var vp_legends = 
{
  "viewpoint55979": {
    "labels" : new Array(),
    "content" : new Array()
  }
,
  "viewpoint55976": {
    "labels" : new Array(),
    "content" : new Array()
  }
};
vp_legends.viewpoint55979.labels[0] = "Rol";
vp_legends.viewpoint55979.content[0] = new Array();
vp_legends.viewpoint55979.content[0][0] = {value1: "255, 128, 64", value2: "Gemeente"};
vp_legends.viewpoint55979.content[0][1] = {value1: "132, 251, 194", value2: "SVB"};
vp_legends.viewpoint55979.content[0][2] = {value1: "255, 116, 0", value2: "Zorgkantoor"};
vp_legends.viewpoint55976.labels[0] = "Labelview";
vp_legends.viewpoint55976.content[0] = new Array();
vp_legends.viewpoint55976.content[0][0] = {value1: "1) ", value2: "Bedrijfsregels van toepassing op proces"};
vp_legends.viewpoint55976.content[0][1] = {value1: "2) ", value2: "Bedrijfsregels van toepassing op casusstap"};
