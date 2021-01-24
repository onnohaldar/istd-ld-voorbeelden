var viewData = {"id":28714,"isExpandedObject":false};
var objectRelations = {
};
var objectData = {
"28714" : {
"id":28714,
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
var viewReferences = {"31812":28281,"31776":28532,"31795":28909,"31801":28536,"31818":28128,"31815":28714,"31809":28482,"31813":28423};
var objectReferences = {
"31774" : 29225
,
"31764" : 31765
,
"31784" : 31785
,
"31766" : 31767
,
"31772" : 31773
,
"31768" : 31769
,
"31770" : 31771
,
"31778" : 31779
,
"31781" : 30504
,
"31786" : 30483
,
"31787" : 30462
,
"31788" : 31789
,
"31782" : 29429
,
"31790" : 31791
,
"31780" : 30503
,
"31802" : 30463
,
"31803" : 31804
,
"31794" : 30421
,
"31798" : 31799
,
"31796" : 31797
,
"31807" : 30481
,
"31805" : 30482
,
"31783" : 30505
,
"31812" : 28281
,
"31792" : 31793
,
"31806" : 30432
,
"31810" : 31811
,
"34095" : 34095
,
"31776" : 28532
,
"31795" : 28909
,
"31801" : 28536
,
"31818" : 28128
,
"31815" : 28714
,
"31809" : 28482
,
"31813" : 28423
,
"34096" : 34096
,
"34098" : 34098
,
"34099" : 34099
};
var viewpointsData = 
[
{"id":"viewpoint33906","name":"Bedrijfsregels bij proces of casus","presentationType":"FmtLabelView"}
,{"id":"viewpoint33911","name":"Rollen bij processen en casuïstiek","presentationType":"FmtColourView"}
];
var vp_legends = 
{
  "viewpoint33906": {
    "labels" : new Array(),
    "content" : new Array()
  }
,
  "viewpoint33911": {
    "labels" : new Array(),
    "content" : new Array()
  }
};
vp_legends.viewpoint33906.labels[0] = "Labelview";
vp_legends.viewpoint33906.content[0] = new Array();
vp_legends.viewpoint33906.content[0][0] = {value1: "1) ", value2: "Bedrijfsregels van toepassing op proces"};
vp_legends.viewpoint33906.content[0][1] = {value1: "2) ", value2: "Bedrijfsregels van toepassing op casusstap"};
vp_legends.viewpoint33911.labels[0] = "Rol";
vp_legends.viewpoint33911.content[0] = new Array();
vp_legends.viewpoint33911.content[0][0] = {value1: "255, 128, 64", value2: "Gemeente"};
vp_legends.viewpoint33911.content[0][1] = {value1: "132, 251, 194", value2: "SVB"};
vp_legends.viewpoint33911.content[0][2] = {value1: "255, 116, 0", value2: "Zorgkantoor"};
