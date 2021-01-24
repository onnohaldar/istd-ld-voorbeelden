var viewData = {"id":31387,"isExpandedObject":true};
var objectRelations = {
};
var objectData = {
"31387" : {
"id":31387,
"typeIconPath":"data/icons/ArchiMate/BusinessProcessRef.png",
"data" : [
{
"lang":"nl",
"name":"Toewijzen Jeugdhulp",
"type":"Bedrijfsproces",
"categories":[{"type":"documentation","title":"documentatie","content":{"type":"rtf","value":"<span style=\" font-size: 10pt;\">Met de toewijzing geeft de gemeente een aanbieder opdracht tot levering van jeugdhulp voor een specifieke cli&#235;nt. Het geeft de aanbieder het recht om de zorg te gaan leveren en is daarmee &#233;&#233;n van de rechtmatigheidsberichten. &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">In het bericht wordt het toegewezen product omschreven. Dit toegewezen product kan aspecifiek zijn (dat wil zeggen dat alleen een productcategorie wordt toegewezen) of specifiek (dat wil zeggen dat binnen de productcategorie ook een specifieke productcode wordt toegewezen) of generiek (dat wil zeggen dat er geen productcategorie en ook geen productcode wordt toegewezen, maar alleen een budget).&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\"><b>Wijzigen van een Toewijzing</b>&nbsp;<p style=\"margin-top: 3pt;\"></span><span style=\" font-size: 10pt; font-family: Arial;\">Nadat de toewijzing is toegekend en ontvangen door de aanbieder kunnen er diverse redenen zijn om de toewijzing te wijzigen. &nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Indien de wijziging geconstateerd wordt door de gemeente (bv overlijden of overgang naar pgb), wordt er door de gemeente een gewijzigde toewijzing gestuurd.&nbsp;<p style=\"margin-top: 3pt;\"> &nbsp;<p style=\"margin-top: 3pt;\">Indien de wijziging ontstaat bij de behandeling van de client, zal de aanbieder een Verzoek om wijziging sturen aan de gemeente. Daarin kunnen verschillende situaties worden aangevraagd:&nbsp;<p style=\"margin-top: 3pt;\">* Verlengen van een toewijzing&nbsp;<p style=\"margin-top: 3pt;\">* Verkorten van een toewijzing&nbsp;<p style=\"margin-top: 3pt;\">* Wijzigen van het volume &nbsp;<p style=\"margin-top: 3pt;\">* Wijzigen van het budget&nbsp;<p style=\"margin-top: 3pt;\">* Aanvragen nieuw product.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">De gemeenten zal als gevolg van de Verzoek om wijziging binnen 5 werkdagen een Antwoordbericht of een toewijzing sturen. Nadat de gemeente akkoord is met het verzoek om wijziging, zal de gehele aangevraagde situatie worden toegekend.&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Behalve de wijziging zelf (nieuwe einddatum) wordt in het bericht met de intrekking van de toewijzing ook meegegeven wat de reden van de wijziging is. Hiervoor is een speciale tabel beschikbaar waaruit de reden gekozen kan worden (codelijst Reden wijziging toewijzing, JZ002). Zie voor meer informatie de casu&#239;stiek. &nbsp;<p style=\"margin-top: 3pt;\"></span><span style=\" font-size: 10pt;\">&nbsp;<p style=\"margin-top: 3pt;\"><b>Corrigeren van een Toewijzing</b>&nbsp;<p style=\"margin-top: 3pt;\">Wanneer een afgegeven Toewijzing gecorrigeerd moet worden, bijvoorbeeld omdat een verkeerd Product is toegewezen, wordt dit doorgegeven als een Intrekking. Hierin wordt als RedenWijziging &quot;01 (Administratieve correctie)&quot; meegegeven en is de einddatum gelijk aan de ingangsdatum van de eerdere Toewijzing. De eerdere Toewijzing moet als 'niet verzonden' beschouwd worden. De gecorrigeerde Toewijzing kan met een nieuw ToewijzingNummer in hetzelfde bericht worden meegegeven. &nbsp;&nbsp;<p style=\"margin-top: 3pt;\">&nbsp;<p style=\"margin-top: 3pt;\">Deze toewijzing dient een ingangsdatum te hebben welke 1 dag later ligt dan de eerdere toewijzing. &nbsp;<p style=\"margin-top: 3pt;\"></span>"}}]
}
]
}
};
var viewReferences = {"31387":31387};
var objectReferences = {
"31387" : 31388
,
"31397" : 31398
,
"31401" : 31402
,
"31399" : 31400
,
"31405" : 31406
,
"31395" : 31396
,
"31389" : 31390
,
"31393" : 31394
,
"31403" : 31404
,
"31391" : 31392
,
"31407" : 31408
,
"31416" : 31417
,
"31413" : 31414
,
"31430" : 31431
,
"31418" : 31419
,
"31432" : 31433
,
"31426" : 31427
,
"31428" : 31429
,
"31424" : 31425
,
"31411" : 31412
,
"31420" : 31421
,
"31415" : 29818
,
"31422" : 31423
,
"31409" : 31410
,
"31439" : 31440
,
"31434" : 29202
,
"31437" : 31438
,
"31435" : 31436
};
var viewpointsData = 
[
{"id":"viewpoint56423","name":"Bedrijfsregels bij proces of casus","presentationType":"FmtLabelView"}
,{"id":"viewpoint56427","name":"Rollen bij processen en casuïstiek","presentationType":"FmtColourView"}
];
var vp_legends = 
{
  "viewpoint56423": {
    "labels" : new Array(),
    "content" : new Array()
  }
,
  "viewpoint56427": {
    "labels" : new Array(),
    "content" : new Array()
  }
};
vp_legends.viewpoint56423.labels[0] = "Labelview";
vp_legends.viewpoint56423.content[0] = new Array();
vp_legends.viewpoint56423.content[0][0] = {value1: "1) ", value2: "Bedrijfsregels van toepassing op proces"};
vp_legends.viewpoint56423.content[0][1] = {value1: "2) ", value2: "Bedrijfsregels van toepassing op casusstap"};
vp_legends.viewpoint56427.labels[0] = "Rol";
vp_legends.viewpoint56427.content[0] = new Array();
vp_legends.viewpoint56427.content[0][0] = {value1: "128, 255, 0", value2: "Aanbieder"};
vp_legends.viewpoint56427.content[0][1] = {value1: "255, 128, 64", value2: "Gemeente"};
