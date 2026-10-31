<h1 id="api-isendpro">API iSendPro v1.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[1] Liste des fonctionnalités :
- envoi de SMS à un ou plusieurs destinataires,
- lookup HLR,
- récupération des récapitulatifs de campagne,
- gestion des répertoires,
- ajout en liste noire.
- comptage du nombre de caractères des SMS

[2] Pour utiliser cette API vous devez:
- Créer un compte iSendPro sur https://isendpro.com/
- Créditer votre compte 
    - Remarque: obtention d'un crédit de test possible sous conditions
- Noter votre clé de compte (keyid)
  - Elle vous sera indispensable à l'utilisation de l'API
  - Vous pouvez la trouver dans le rubrique mon "compte", sous-rubrique "mon API"
- Configurer le contrôle IP
  - Le contrôle IP est configurable dans le rubrique mon "compte", sous-rubrique "mon API"
  - Il s'agit d'un système de liste blanche, vous devez entrer les IP utilisées pour appeler l'API
  - Vous pouvez également désactiver totalement le contrôle IP

Base URLs:

* <a href="https://apirest.isendpro.com/cgi-bin">https://apirest.isendpro.com/cgi-bin</a>

* <a href="http://apirest.isendpro.com/cgi-bin">http://apirest.isendpro.com/cgi-bin</a>

Email: <a href="mailto:support@isendpro.com">iSendPro Support Team</a> 
Web: <a href="https://www.isendpro.com/">iSendPro Support Team</a> 

<h1 id="api-isendpro-campagne">campagne</h1>

## Retourne les SMS envoyés sur une période donnée

<a id="opIdgetCampagne"></a>

> Code samples

```bash
curl 'https://example.com/campagne?keyid=string&rapportCampagne=1&date_deb=string&date_fin=string' \
  -H 'Accept: application/json'
```

`GET /campagne`

Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 

Les dates sont au format YYYY-MM-DD hh:mm. 

Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.


<h3 id="retourne-les-sms-envoyés-sur-une-période-donnée-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyid|query|string|true|Clé API|
|rapportCampagne|query|string|true|Doit valoir "1"|
|date_deb|query|string|true|date de debut au format YYYY-MM-DD hh:mm|
|date_fin|query|string|true|date de fin au format YYYY-MM-DD hh:mm|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rapportCampagne|1|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="retourne-les-sms-envoyés-sur-une-période-donnée-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-comptage">comptage</h1>

## Compter le nombre de caractère

<a id="opIdcomptage"></a>

> Code samples

```bash
curl https://example.com/comptage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comptage": "1",
    "emetteur": "iSendPro",
    "keyid": "VOTRE_KEYID",
    "num": "0600123456",
    "sms": "Bonjour! Bienvenue sur iSendPro!"
  }'
```

`POST /comptage`

Compte le nombre de SMS necessaire à un envoi

> Body parameter

```json
{
  "comptage": "1",
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": "0600123456",
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

<h3 id="compter-le-nombre-de-caractère-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ComptageRequest](#schemacomptagerequest)|true|sms request|
|» comptage|body|string|true|none|
|» date_envoi|body|string|false|Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.|
|» emetteur|body|string|false|- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.<br><br>- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.<br><br>- Il ne peut pas comporter uniquement des chiffres. <br><br>- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.<br>|
|» gmt_zone|body|string|false|Fuseau horaire de la date d'envoi|
|» keyid|body|string|true|Clé API|
|» nostop|body|string|false|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|» num|body|string|true|Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)|
|» numAzur|body|string|false|none|
|» sms|body|string|true|Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.|
|» smslong|body|string|false|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué<br>de plusieurs SMS.<br>Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918<br>caractères par message.<br>Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.<br>En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères<br>du « STOP SMS ».<br>Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"<br>|
|» tracker|body|string|false|Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. |
|» ucs2|body|string|false|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur<br>les numéros hors France métropolitaine.<br>Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"<br>Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu<br>des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» comptage|1|
|» gmt_zone|Pacific/Midway|
|» gmt_zone|America/Adak|
|» gmt_zone|Etc/GMT+10|
|» gmt_zone|Pacific/Marquesas|
|» gmt_zone|Pacific/Gambier|
|» gmt_zone|America/Anchorage|
|» gmt_zone|America/Ensenada|
|» gmt_zone|Etc/GMT+8|
|» gmt_zone|America/Los_Angeles|
|» gmt_zone|America/Denver|
|» gmt_zone|America/Chihuahua|
|» gmt_zone|America/Dawson_Creek|
|» gmt_zone|America/Belize|
|» gmt_zone|America/Cancun|
|» gmt_zone|Chile/EasterIsland|
|» gmt_zone|America/Chicago|
|» gmt_zone|America/New_York|
|» gmt_zone|America/Havana|
|» gmt_zone|America/Bogota|
|» gmt_zone|America/Caracas|
|» gmt_zone|America/Santiago|
|» gmt_zone|America/La_Paz|
|» gmt_zone|Atlantic/Stanley|
|» gmt_zone|America/Campo_Grande|
|» gmt_zone|America/Goose_Bay|
|» gmt_zone|America/Glace_Bay|
|» gmt_zone|America/St_Johns|
|» gmt_zone|America/Araguaina|
|» gmt_zone|America/Montevideo|
|» gmt_zone|America/Miquelon|
|» gmt_zone|America/Godthab|
|» gmt_zone|America/Argentina/Buenos_Aires|
|» gmt_zone|America/Sao_Paulo|
|» gmt_zone|America/Noronha|
|» gmt_zone|Atlantic/Cape_Verde|
|» gmt_zone|Atlantic/Azores|
|» gmt_zone|Europe/Belfast|
|» gmt_zone|Europe/Dublin|
|» gmt_zone|Europe/Lisbon|
|» gmt_zone|Europe/London|
|» gmt_zone|Africa/Abidjan|
|» gmt_zone|Europe/Amsterdam|
|» gmt_zone|Europe/Belgrade|
|» gmt_zone|Europe/Brussels|
|» gmt_zone|Africa/Algiers|
|» gmt_zone|Africa/Windhoek|
|» gmt_zone|Asia/Beirut|
|» gmt_zone|Africa/Cairo|
|» gmt_zone|Asia/Gaza|
|» gmt_zone|Africa/Blantyre|
|» gmt_zone|Asia/Jerusalem|
|» gmt_zone|Europe/Minsk|
|» gmt_zone|Asia/Damascus|
|» gmt_zone|Europe/Moscow|
|» gmt_zone|Africa/Addis_Ababa|
|» gmt_zone|Asia/Tehran|
|» gmt_zone|Asia/Dubai|
|» gmt_zone|Asia/Yerevan|
|» gmt_zone|Asia/Kabul|
|» gmt_zone|Asia/Yekaterinburg|
|» gmt_zone|Asia/Tashkent|
|» gmt_zone|Asia/Kolkata|
|» gmt_zone|Asia/Katmandu|
|» gmt_zone|Asia/Dhaka|
|» gmt_zone|Asia/Novosibirsk|
|» gmt_zone|Asia/Rangoon|
|» gmt_zone|Asia/Bangkok|
|» gmt_zone|Asia/Krasnoyarsk|
|» gmt_zone|Asia/Hong_Kong|
|» gmt_zone|Asia/Irkutsk|
|» gmt_zone|Australia/Perth|
|» gmt_zone|Australia/Eucla|
|» gmt_zone|Asia/Tokyo|
|» gmt_zone|Asia/Seoul|
|» gmt_zone|Asia/Yakutsk|
|» gmt_zone|Australia/Adelaide|
|» gmt_zone|Australia/Darwin|
|» gmt_zone|Australia/Brisbane|
|» gmt_zone|Australia/Hobart|
|» gmt_zone|Asia/Vladivostok|
|» gmt_zone|Australia/Lord_Howe|
|» gmt_zone|Etc/GMT-11|
|» gmt_zone|Asia/Magadan|
|» gmt_zone|Pacific/Norfolk|
|» gmt_zone|Asia/Anadyr|
|» gmt_zone|Pacific/Auckland|
|» gmt_zone|Etc/GMT-12|
|» gmt_zone|Pacific/Chatham|
|» gmt_zone|Pacific/Tongatapu|
|» gmt_zone|Pacific/Kiritimati|
|» numAzur|1|
|» smslong|999|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "nb_caractere": "string",
        "nb_sms": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="compter-le-nombre-de-caractère-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[ComptageReponse](#schemacomptagereponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-credit">credit</h1>

## Interrogation credit

<a id="opIdgetCredit"></a>

> Code samples

```bash
curl 'https://example.com/credit?keyid=string&credit=1' \
  -H 'Accept: application/json'
```

`GET /credit`

Retourne le credit existant associe au compte.


<h3 id="interrogation-credit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyid|query|string(string)|true|Clé API|
|credit|query|string|true|Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité|

#### Enumerated Values

|Parameter|Value|
|---|---|
|credit|1|
|credit|2|

> Example responses

> 200 Response

```json
{
  "etat": {
    "credit": "10.0"
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="interrogation-credit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreditResponse](#schemacreditresponse)|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-dellistenoire">delListeNoire</h1>

## Ajoute un numero en liste noire

<a id="opIddelListeNoire"></a>

> Code samples

```bash
curl 'https://example.com/dellistenoire?keyid=string&delListeNoire=1&num=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /dellistenoire`

Supprime un numero en liste noire

<h3 id="ajoute-un-numero-en-liste-noire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyid|query|string(string)|true|Clé API|
|delListeNoire|query|string|true|Doit valoir "1"|
|num|query|string(string)|true|numéro de mobile à supprimer|

#### Enumerated Values

|Parameter|Value|
|---|---|
|delListeNoire|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "listeNoire": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="ajoute-un-numero-en-liste-noire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LISTENOIREReponse](#schemalistenoirereponse)|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-getlistenoire">getListeNoire</h1>

## Retourne le liste noire

<a id="opIdgetListeNoire"></a>

> Code samples

```bash
curl 'https://example.com/getlistenoire?keyid=string&getListeNoire=1' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getlistenoire`

Retourne un fichier csv zippé contenant la liste noire

<h3 id="retourne-le-liste-noire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyid|query|string(string)|true|Clé API|
|getListeNoire|query|string|true|Doit valoir "1"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|getListeNoire|1|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="retourne-le-liste-noire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-hlr">hlr</h1>

## Vérifier la validité d'un numéro

<a id="opIdgetHlr"></a>

> Code samples

```bash
curl https://example.com/hlr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "getHLR": "1",
    "keyid": "VOTRE_KEYID",
    "num": [
      "06123456789",
      "06345687899"
    ]
  }'
```

`POST /hlr`

Réalise un lookup HLR sur les numéros 


> Body parameter

```json
{
  "getHLR": "1",
  "keyid": "VOTRE_KEYID",
  "num": [
    "06123456789",
    "06345687899"
  ]
}
```

<h3 id="vérifier-la-validité-dun-numéro-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HLRrequest](#schemahlrrequest)|true|none|
|» getHLR|body|string|true|Doit valoir "1"|
|» keyid|body|string|true|Clé API|
|» num|body|[string]|true|liste de numéros de téléphone|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» getHLR|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": {
      "operateur": "ORAN",
      "tel": "0680010203"
    }
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="vérifier-la-validité-dun-numéro-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[HLRReponse](#schemahlrreponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-repertoire">repertoire</h1>

## Gestion repertoire (modification)

<a id="opIdrepertoire"></a>

> Code samples

```bash
curl https://example.com/repertoire \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keyid": "VOTRE_KEYID",
    "num": [
      "06123456789",
      "07123456789"
    ],
    "repertoireEdit": "add",
    "repertoireId": "VOTRE_REPERTOIRE_ID"
  }'
```

`PUT /repertoire`

Ajoute ou supprime une liste de numéros à un répertoire existant.

> Body parameter

```json
{
  "keyid": "VOTRE_KEYID",
  "num": [
    "06123456789",
    "07123456789"
  ],
  "repertoireEdit": "add",
  "repertoireId": "VOTRE_REPERTOIRE_ID"
}
```

<h3 id="gestion-repertoire-modification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[REPERTOIREmodifrequest](#schemarepertoiremodifrequest)|true|Requête de creation repertoire|
|» champ1|body|[string]|false|Noms des contact|
|» champ10|body|[string]|false|Champs I des contacts|
|» champ11|body|[string]|false|Champs J des contacts|
|» champ12|body|[string]|false|Champs K des contacts|
|» champ13|body|[string]|false|Champs L des contacts|
|» champ14|body|[string]|false|Champs M des contacts|
|» champ15|body|[string]|false|Champs N des contacts|
|» champ16|body|[string]|false|Champs O des contacts|
|» champ17|body|[string]|false|Champs P des contacts|
|» champ18|body|[string]|false|Champs Q des contacts|
|» champ19|body|[string]|false|Champs R des contacts|
|» champ2|body|[string]|false|Champs A des contacts|
|» champ20|body|[string]|false|Champs S des contacts|
|» champ21|body|[string]|false|Champs T des contacts|
|» champ22|body|[string]|false|Champs U des contacts|
|» champ23|body|[string]|false|Champs V des contacts|
|» champ24|body|[string]|false|Champs W des contacts|
|» champ25|body|[string]|false|Champs X des contacts|
|» champ26|body|[string]|false|Champs Y des contacts|
|» champ27|body|[string]|false|Champs Z des contacts|
|» champ3|body|[string]|false|Champs B des contacts|
|» champ4|body|[string]|false|Champs C des contacts|
|» champ5|body|[string]|false|Champs D des contacts|
|» champ6|body|[string]|false|Champs E des contacts|
|» champ7|body|[string]|false|Champs F des contacts|
|» champ8|body|[string]|false|Champs G des contacts|
|» champ9|body|[string]|false|Champs H des contacts|
|» keyid|body|string|true|Clé API|
|» num|body|[string]|true|liste des numéros des téléphone à ajouter ou supprimer|
|» repertoireEdit|body|string|true|action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros|
|» repertoireId|body|string|true|repertoireId du répertoire cible|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» repertoireEdit|add|
|» repertoireEdit|del|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "repertoireId": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="gestion-repertoire-modification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[REPERTOIREmodifreponse](#schemarepertoiremodifreponse)|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

## Gestion repertoire (creation)

<a id="opIdrepertoireCrea"></a>

> Code samples

```bash
curl https://example.com/repertoire \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keyid": "VOTRE_KEYID",
    "repertoireEdit": "create",
    "repertoireNom": "Repertoire de test"
  }'
```

`POST /repertoire`

Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.

> Body parameter

```json
{
  "keyid": "VOTRE_KEYID",
  "repertoireEdit": "create",
  "repertoireNom": "Repertoire de test"
}
```

<h3 id="gestion-repertoire-creation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[REPERTOIREcreaterequest](#schemarepertoirecreaterequest)|true|Creation repertoire|
|» keyid|body|string|true|Clé API|
|» repertoireEdit|body|string|true|Action à réaliser doit valoir "create" ici.|
|» repertoireNom|body|string|true|Nom du répertoire (libellé) à créer|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» repertoireEdit|create|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "repertoireId": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="gestion-repertoire-creation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[REPERTOIREcreatereponse](#schemarepertoirecreatereponse)|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-setlistenoire">setListeNoire</h1>

## Ajoute un numero en liste noire

<a id="opIdsetListeNoire"></a>

> Code samples

```bash
curl 'https://example.com/setlistenoire?keyid=string&setlisteNoire=1&num=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /setlistenoire`

Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.

<h3 id="ajoute-un-numero-en-liste-noire-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyid|query|string(string)|true|Clé API|
|setlisteNoire|query|string|true|Doit valoir "1"|
|num|query|string(string)|true|numéro de mobile à insérer en liste noire|

#### Enumerated Values

|Parameter|Value|
|---|---|
|setlisteNoire|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "listeNoire": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="ajoute-un-numero-en-liste-noire-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LISTENOIREReponse](#schemalistenoirereponse)|
|400|Bad Request|Erreur|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-add-shortlink">add shortlink</h1>

## add a shortlink

<a id="opIdaddShortlink"></a>

> Code samples

```bash
curl https://example.com/shortlink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keyid": "string",
    "shortlink": "string"
  }'
```

`POST /shortlink`

add a shortlink

> Body parameter

```json
{
  "keyid": "string",
  "shortlink": "string"
}
```

<h3 id="add-a-shortlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ShortlinkRequest](#schemashortlinkrequest)|true|add sub account request|
|» keyid|body|string|true|none|
|» shortlink|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "shortlink": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="add-a-shortlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[ShortlinkResponse](#schemashortlinkresponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-sms">sms</h1>

## Envoyer un sms

<a id="opIdsendSms"></a>

> Code samples

```bash
curl https://example.com/sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "emetteur": "iSendPro",
    "keyid": "VOTRE_KEYID",
    "num": "0600123456",
    "sms": "Bonjour! Bienvenue sur iSendPro!"
  }'
```

`POST /sms`

Envoi un sms vers un unique destinataire

> Body parameter

```json
{
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": "0600123456",
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

<h3 id="envoyer-un-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SmsUniqueRequest](#schemasmsuniquerequest)|true|sms request|
|» date_envoi|body|string|false|Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.|
|» emetteur|body|string|false|- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.<br><br>- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.<br><br>- Il ne peut pas comporter uniquement des chiffres. <br><br>- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.<br>|
|» gmt_zone|body|string|false|Fuseau horaire de la date d'envoi|
|» keyid|body|string|true|Clé API|
|» nostop|body|string|false|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|» num|body|string|true|Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)|
|» numAzur|body|string|false|none|
|» sms|body|string|true|Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.|
|» smslong|body|string|false|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué<br>de plusieurs SMS.<br>Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918<br>caractères par message.<br>Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.<br>En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères<br>du « STOP SMS ».<br>Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"<br>|
|» tracker|body|string|false|Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. |
|» ucs2|body|string|false|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur<br>les numéros hors France métropolitaine.<br>Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"<br>Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu<br>des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gmt_zone|Pacific/Midway|
|» gmt_zone|America/Adak|
|» gmt_zone|Etc/GMT+10|
|» gmt_zone|Pacific/Marquesas|
|» gmt_zone|Pacific/Gambier|
|» gmt_zone|America/Anchorage|
|» gmt_zone|America/Ensenada|
|» gmt_zone|Etc/GMT+8|
|» gmt_zone|America/Los_Angeles|
|» gmt_zone|America/Denver|
|» gmt_zone|America/Chihuahua|
|» gmt_zone|America/Dawson_Creek|
|» gmt_zone|America/Belize|
|» gmt_zone|America/Cancun|
|» gmt_zone|Chile/EasterIsland|
|» gmt_zone|America/Chicago|
|» gmt_zone|America/New_York|
|» gmt_zone|America/Havana|
|» gmt_zone|America/Bogota|
|» gmt_zone|America/Caracas|
|» gmt_zone|America/Santiago|
|» gmt_zone|America/La_Paz|
|» gmt_zone|Atlantic/Stanley|
|» gmt_zone|America/Campo_Grande|
|» gmt_zone|America/Goose_Bay|
|» gmt_zone|America/Glace_Bay|
|» gmt_zone|America/St_Johns|
|» gmt_zone|America/Araguaina|
|» gmt_zone|America/Montevideo|
|» gmt_zone|America/Miquelon|
|» gmt_zone|America/Godthab|
|» gmt_zone|America/Argentina/Buenos_Aires|
|» gmt_zone|America/Sao_Paulo|
|» gmt_zone|America/Noronha|
|» gmt_zone|Atlantic/Cape_Verde|
|» gmt_zone|Atlantic/Azores|
|» gmt_zone|Europe/Belfast|
|» gmt_zone|Europe/Dublin|
|» gmt_zone|Europe/Lisbon|
|» gmt_zone|Europe/London|
|» gmt_zone|Africa/Abidjan|
|» gmt_zone|Europe/Amsterdam|
|» gmt_zone|Europe/Belgrade|
|» gmt_zone|Europe/Brussels|
|» gmt_zone|Africa/Algiers|
|» gmt_zone|Africa/Windhoek|
|» gmt_zone|Asia/Beirut|
|» gmt_zone|Africa/Cairo|
|» gmt_zone|Asia/Gaza|
|» gmt_zone|Africa/Blantyre|
|» gmt_zone|Asia/Jerusalem|
|» gmt_zone|Europe/Minsk|
|» gmt_zone|Asia/Damascus|
|» gmt_zone|Europe/Moscow|
|» gmt_zone|Africa/Addis_Ababa|
|» gmt_zone|Asia/Tehran|
|» gmt_zone|Asia/Dubai|
|» gmt_zone|Asia/Yerevan|
|» gmt_zone|Asia/Kabul|
|» gmt_zone|Asia/Yekaterinburg|
|» gmt_zone|Asia/Tashkent|
|» gmt_zone|Asia/Kolkata|
|» gmt_zone|Asia/Katmandu|
|» gmt_zone|Asia/Dhaka|
|» gmt_zone|Asia/Novosibirsk|
|» gmt_zone|Asia/Rangoon|
|» gmt_zone|Asia/Bangkok|
|» gmt_zone|Asia/Krasnoyarsk|
|» gmt_zone|Asia/Hong_Kong|
|» gmt_zone|Asia/Irkutsk|
|» gmt_zone|Australia/Perth|
|» gmt_zone|Australia/Eucla|
|» gmt_zone|Asia/Tokyo|
|» gmt_zone|Asia/Seoul|
|» gmt_zone|Asia/Yakutsk|
|» gmt_zone|Australia/Adelaide|
|» gmt_zone|Australia/Darwin|
|» gmt_zone|Australia/Brisbane|
|» gmt_zone|Australia/Hobart|
|» gmt_zone|Asia/Vladivostok|
|» gmt_zone|Australia/Lord_Howe|
|» gmt_zone|Etc/GMT-11|
|» gmt_zone|Asia/Magadan|
|» gmt_zone|Pacific/Norfolk|
|» gmt_zone|Asia/Anadyr|
|» gmt_zone|Pacific/Auckland|
|» gmt_zone|Etc/GMT-12|
|» gmt_zone|Pacific/Chatham|
|» gmt_zone|Pacific/Tongatapu|
|» gmt_zone|Pacific/Kiritimati|
|» numAzur|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "smslong": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="envoyer-un-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[SMSReponse](#schemasmsreponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

## Envoyer des SMS

<a id="opIdsendSmsMulti"></a>

> Code samples

```bash
curl https://example.com/smsmulti \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "emetteur": "iSendPro",
    "keyid": "VOTRE_KEYID",
    "num": [
      "0600123456",
      "0612345678"
    ],
    "sms": "Bonjour! Bienvenue sur iSendPro!"
  }'
```

`POST /smsmulti`

Envoi de SMS vers 1 ou plusieurs destinataires


> Body parameter

```json
{
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": [
    "0600123456",
    "0612345678"
  ],
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

<h3 id="envoyer-des-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SMSRequest](#schemasmsrequest)|true|sms request|
|» date_envoi|body|string|false|Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm|
|» emetteur|body|string|false|L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.|
|» gmt_zone|body|string|false|Fuseau horaire de la date d'envoi|
|» keyid|body|string|true|Clé API|
|» nostop|body|string|false|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|» num|body|[string]|true|none|
|» numAzur|body|string|false|none|
|» repertoireId|body|string|false|Id du repertoire|
|» sms|body|[string]|true|none|
|» smslong|body|string|false|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" |
|» tracker|body|[string]|false|none|
|» ucs2|body|string|false|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gmt_zone|Pacific/Midway|
|» gmt_zone|America/Adak|
|» gmt_zone|Etc/GMT+10|
|» gmt_zone|Pacific/Marquesas|
|» gmt_zone|Pacific/Gambier|
|» gmt_zone|America/Anchorage|
|» gmt_zone|America/Ensenada|
|» gmt_zone|Etc/GMT+8|
|» gmt_zone|America/Los_Angeles|
|» gmt_zone|America/Denver|
|» gmt_zone|America/Chihuahua|
|» gmt_zone|America/Dawson_Creek|
|» gmt_zone|America/Belize|
|» gmt_zone|America/Cancun|
|» gmt_zone|Chile/EasterIsland|
|» gmt_zone|America/Chicago|
|» gmt_zone|America/New_York|
|» gmt_zone|America/Havana|
|» gmt_zone|America/Bogota|
|» gmt_zone|America/Caracas|
|» gmt_zone|America/Santiago|
|» gmt_zone|America/La_Paz|
|» gmt_zone|Atlantic/Stanley|
|» gmt_zone|America/Campo_Grande|
|» gmt_zone|America/Goose_Bay|
|» gmt_zone|America/Glace_Bay|
|» gmt_zone|America/St_Johns|
|» gmt_zone|America/Araguaina|
|» gmt_zone|America/Montevideo|
|» gmt_zone|America/Miquelon|
|» gmt_zone|America/Godthab|
|» gmt_zone|America/Argentina/Buenos_Aires|
|» gmt_zone|America/Sao_Paulo|
|» gmt_zone|America/Noronha|
|» gmt_zone|Atlantic/Cape_Verde|
|» gmt_zone|Atlantic/Azores|
|» gmt_zone|Europe/Belfast|
|» gmt_zone|Europe/Dublin|
|» gmt_zone|Europe/Lisbon|
|» gmt_zone|Europe/London|
|» gmt_zone|Africa/Abidjan|
|» gmt_zone|Europe/Amsterdam|
|» gmt_zone|Europe/Belgrade|
|» gmt_zone|Europe/Brussels|
|» gmt_zone|Africa/Algiers|
|» gmt_zone|Africa/Windhoek|
|» gmt_zone|Asia/Beirut|
|» gmt_zone|Africa/Cairo|
|» gmt_zone|Asia/Gaza|
|» gmt_zone|Africa/Blantyre|
|» gmt_zone|Asia/Jerusalem|
|» gmt_zone|Europe/Minsk|
|» gmt_zone|Asia/Damascus|
|» gmt_zone|Europe/Moscow|
|» gmt_zone|Africa/Addis_Ababa|
|» gmt_zone|Asia/Tehran|
|» gmt_zone|Asia/Dubai|
|» gmt_zone|Asia/Yerevan|
|» gmt_zone|Asia/Kabul|
|» gmt_zone|Asia/Yekaterinburg|
|» gmt_zone|Asia/Tashkent|
|» gmt_zone|Asia/Kolkata|
|» gmt_zone|Asia/Katmandu|
|» gmt_zone|Asia/Dhaka|
|» gmt_zone|Asia/Novosibirsk|
|» gmt_zone|Asia/Rangoon|
|» gmt_zone|Asia/Bangkok|
|» gmt_zone|Asia/Krasnoyarsk|
|» gmt_zone|Asia/Hong_Kong|
|» gmt_zone|Asia/Irkutsk|
|» gmt_zone|Australia/Perth|
|» gmt_zone|Australia/Eucla|
|» gmt_zone|Asia/Tokyo|
|» gmt_zone|Asia/Seoul|
|» gmt_zone|Asia/Yakutsk|
|» gmt_zone|Australia/Adelaide|
|» gmt_zone|Australia/Darwin|
|» gmt_zone|Australia/Brisbane|
|» gmt_zone|Australia/Hobart|
|» gmt_zone|Asia/Vladivostok|
|» gmt_zone|Australia/Lord_Howe|
|» gmt_zone|Etc/GMT-11|
|» gmt_zone|Asia/Magadan|
|» gmt_zone|Pacific/Norfolk|
|» gmt_zone|Asia/Anadyr|
|» gmt_zone|Pacific/Auckland|
|» gmt_zone|Etc/GMT-12|
|» gmt_zone|Pacific/Chatham|
|» gmt_zone|Pacific/Tongatapu|
|» gmt_zone|Pacific/Kiritimati|
|» numAzur|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "smslong": "string",
        "tel": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="envoyer-des-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[SMSReponse](#schemasmsreponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-edit-subaccount">edit subaccount</h1>

## Edit a subaccount

<a id="opIdsubaccountEdit"></a>

> Code samples

```bash
curl https://example.com/subaccount \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keyid": "string",
    "subAccountAddCredit": "string",
    "subAccountCountryCode": "string",
    "subAccountEdit": "setPrice",
    "subAccountKeyId": "string",
    "subAccountPrice": "string",
    "subAccountRestrictionStop": "0",
    "subAccountRestrictionTime": "0"
  }'
```

`PUT /subaccount`

Edit a subaccount

> Body parameter

```json
{
  "keyid": "string",
  "subAccountAddCredit": "string",
  "subAccountCountryCode": "string",
  "subAccountEdit": "setPrice",
  "subAccountKeyId": "string",
  "subAccountPrice": "string",
  "subAccountRestrictionStop": "0",
  "subAccountRestrictionTime": "0"
}
```

<h3 id="edit-a-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountRequest](#schemasubaccountrequest)|true|edit sub account request|
|» keyid|body|string|true|Clé API|
|» subAccountAddCredit|body|string|false|montant du crédit à ajouter|
|» subAccountCountryCode|body|string|false|none|
|» subAccountEdit|body|string|true|action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /|
|» subAccountKeyId|body|string|false|keyid du sous-compte|
|» subAccountPrice|body|string|false|none|
|» subAccountRestrictionStop|body|string|false|none|
|» subAccountRestrictionTime|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subAccountEdit|setPrice|
|» subAccountEdit|addCredit|
|» subAccountEdit|setRestriction|
|» subAccountRestrictionStop|0|
|» subAccountRestrictionStop|1|
|» subAccountRestrictionTime|0|
|» subAccountRestrictionTime|1|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "subAccountId": "string",
        "subAccountKeyid": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="edit-a-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[SubaccountResponse](#schemasubaccountresponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-isendpro-add-subaccount">add subaccount</h1>

## Ajoute un sous compte

<a id="opIdsubaccountAdd"></a>

> Code samples

```bash
curl https://example.com/subaccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keyid": "string",
    "subAccountEdit": "addAccount",
    "subAccountLogin": "string",
    "subAccountPassword": "string"
  }'
```

`POST /subaccount`

Ajoute un sous compte

> Body parameter

```json
{
  "keyid": "string",
  "subAccountEdit": "addAccount",
  "subAccountLogin": "string",
  "subAccountPassword": "string"
}
```

<h3 id="ajoute-un-sous-compte-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountAddRequest](#schemasubaccountaddrequest)|true|add sub account request|
|» keyid|body|string|true|none|
|» subAccountEdit|body|string|true|none|
|» subAccountLogin|body|string|true|none|
|» subAccountPassword|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subAccountEdit|addAccount|

> Example responses

> 200 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "subAccountId": "string",
        "subAccountKeyId": "string",
        "subAccountLogin": "string"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="ajoute-un-sous-compte-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reponse OK|[SubaccountAddResponse](#schemasubaccountaddresponse)|
|400|Bad Request|Dysfonctionnement|[Erreur](#schemaerreur)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ComptageReponse">ComptageReponse</h2>
<!-- backwards compatibility -->
<a id="schemacomptagereponse"></a>
<a id="schema_ComptageReponse"></a>
<a id="tocScomptagereponse"></a>
<a id="tocscomptagereponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "nb_caractere": "string",
        "nb_sms": "string",
        "tel": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[ComptageReponse_etat](#schemacomptagereponse_etat)|false|none|none|

<h2 id="tocS_ComptageReponse_etat">ComptageReponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemacomptagereponse_etat"></a>
<a id="schema_ComptageReponse_etat"></a>
<a id="tocScomptagereponse_etat"></a>
<a id="tocscomptagereponse_etat"></a>

```json
{
  "etat": [
    {
      "nb_caractere": "string",
      "nb_sms": "string",
      "tel": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[ComptageReponse_etat_etat](#schemacomptagereponse_etat_etat)]|false|none|none|

<h2 id="tocS_ComptageReponse_etat_etat">ComptageReponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemacomptagereponse_etat_etat"></a>
<a id="schema_ComptageReponse_etat_etat"></a>
<a id="tocScomptagereponse_etat_etat"></a>
<a id="tocscomptagereponse_etat_etat"></a>

```json
{
  "nb_caractere": "string",
  "nb_sms": "string",
  "tel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nb_caractere|string|false|none|nombre de caractères|
|nb_sms|string|false|none|nombre de sms nécessaires|
|tel|string|false|none|numéro de téléphone|

<h2 id="tocS_ComptageRequest">ComptageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomptagerequest"></a>
<a id="schema_ComptageRequest"></a>
<a id="tocScomptagerequest"></a>
<a id="tocscomptagerequest"></a>

```json
{
  "comptage": "1",
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": "0600123456",
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comptage|string|true|none|none|
|date_envoi|string|false|none|Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.|
|emetteur|string|false|none|- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.<br><br>- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.<br><br>- Il ne peut pas comporter uniquement des chiffres. <br><br>- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.<br>|
|gmt_zone|string|false|none|Fuseau horaire de la date d'envoi|
|keyid|string|true|none|Clé API|
|nostop|string|false|none|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|num|string|true|none|Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)|
|numAzur|string|false|none|none|
|sms|string|true|none|Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.|
|smslong|string|false|none|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué<br>de plusieurs SMS.<br>Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918<br>caractères par message.<br>Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.<br>En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères<br>du « STOP SMS ».<br>Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"<br>|
|tracker|string|false|none|Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. |
|ucs2|string|false|none|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur<br>les numéros hors France métropolitaine.<br>Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"<br>Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu<br>des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|comptage|1|
|gmt_zone|Pacific/Midway|
|gmt_zone|America/Adak|
|gmt_zone|Etc/GMT+10|
|gmt_zone|Pacific/Marquesas|
|gmt_zone|Pacific/Gambier|
|gmt_zone|America/Anchorage|
|gmt_zone|America/Ensenada|
|gmt_zone|Etc/GMT+8|
|gmt_zone|America/Los_Angeles|
|gmt_zone|America/Denver|
|gmt_zone|America/Chihuahua|
|gmt_zone|America/Dawson_Creek|
|gmt_zone|America/Belize|
|gmt_zone|America/Cancun|
|gmt_zone|Chile/EasterIsland|
|gmt_zone|America/Chicago|
|gmt_zone|America/New_York|
|gmt_zone|America/Havana|
|gmt_zone|America/Bogota|
|gmt_zone|America/Caracas|
|gmt_zone|America/Santiago|
|gmt_zone|America/La_Paz|
|gmt_zone|Atlantic/Stanley|
|gmt_zone|America/Campo_Grande|
|gmt_zone|America/Goose_Bay|
|gmt_zone|America/Glace_Bay|
|gmt_zone|America/St_Johns|
|gmt_zone|America/Araguaina|
|gmt_zone|America/Montevideo|
|gmt_zone|America/Miquelon|
|gmt_zone|America/Godthab|
|gmt_zone|America/Argentina/Buenos_Aires|
|gmt_zone|America/Sao_Paulo|
|gmt_zone|America/Noronha|
|gmt_zone|Atlantic/Cape_Verde|
|gmt_zone|Atlantic/Azores|
|gmt_zone|Europe/Belfast|
|gmt_zone|Europe/Dublin|
|gmt_zone|Europe/Lisbon|
|gmt_zone|Europe/London|
|gmt_zone|Africa/Abidjan|
|gmt_zone|Europe/Amsterdam|
|gmt_zone|Europe/Belgrade|
|gmt_zone|Europe/Brussels|
|gmt_zone|Africa/Algiers|
|gmt_zone|Africa/Windhoek|
|gmt_zone|Asia/Beirut|
|gmt_zone|Africa/Cairo|
|gmt_zone|Asia/Gaza|
|gmt_zone|Africa/Blantyre|
|gmt_zone|Asia/Jerusalem|
|gmt_zone|Europe/Minsk|
|gmt_zone|Asia/Damascus|
|gmt_zone|Europe/Moscow|
|gmt_zone|Africa/Addis_Ababa|
|gmt_zone|Asia/Tehran|
|gmt_zone|Asia/Dubai|
|gmt_zone|Asia/Yerevan|
|gmt_zone|Asia/Kabul|
|gmt_zone|Asia/Yekaterinburg|
|gmt_zone|Asia/Tashkent|
|gmt_zone|Asia/Kolkata|
|gmt_zone|Asia/Katmandu|
|gmt_zone|Asia/Dhaka|
|gmt_zone|Asia/Novosibirsk|
|gmt_zone|Asia/Rangoon|
|gmt_zone|Asia/Bangkok|
|gmt_zone|Asia/Krasnoyarsk|
|gmt_zone|Asia/Hong_Kong|
|gmt_zone|Asia/Irkutsk|
|gmt_zone|Australia/Perth|
|gmt_zone|Australia/Eucla|
|gmt_zone|Asia/Tokyo|
|gmt_zone|Asia/Seoul|
|gmt_zone|Asia/Yakutsk|
|gmt_zone|Australia/Adelaide|
|gmt_zone|Australia/Darwin|
|gmt_zone|Australia/Brisbane|
|gmt_zone|Australia/Hobart|
|gmt_zone|Asia/Vladivostok|
|gmt_zone|Australia/Lord_Howe|
|gmt_zone|Etc/GMT-11|
|gmt_zone|Asia/Magadan|
|gmt_zone|Pacific/Norfolk|
|gmt_zone|Asia/Anadyr|
|gmt_zone|Pacific/Auckland|
|gmt_zone|Etc/GMT-12|
|gmt_zone|Pacific/Chatham|
|gmt_zone|Pacific/Tongatapu|
|gmt_zone|Pacific/Kiritimati|
|numAzur|1|
|smslong|999|

<h2 id="tocS_CreditResponse">CreditResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreditresponse"></a>
<a id="schema_CreditResponse"></a>
<a id="tocScreditresponse"></a>
<a id="tocscreditresponse"></a>

```json
{
  "etat": {
    "credit": 0,
    "quantite": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[CreditResponse_etat](#schemacreditresponse_etat)|false|none|none|

<h2 id="tocS_CreditResponse_etat">CreditResponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemacreditresponse_etat"></a>
<a id="schema_CreditResponse_etat"></a>
<a id="tocScreditresponse_etat"></a>
<a id="tocscreditresponse_etat"></a>

```json
{
  "credit": 0,
  "quantite": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credit|number(double)|false|none|Montant du crédit restant|
|quantite|string(string)|false|none|Equivalence du crédit en nombre de SMS vers la France Métropolitaine.|

<h2 id="tocS_Erreur">Erreur</h2>
<!-- backwards compatibility -->
<a id="schemaerreur"></a>
<a id="schema_Erreur"></a>
<a id="tocSerreur"></a>
<a id="tocserreur"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[Erreur_etat](#schemaerreur_etat)|false|none|none|

<h2 id="tocS_Erreur_etat">Erreur_etat</h2>
<!-- backwards compatibility -->
<a id="schemaerreur_etat"></a>
<a id="schema_Erreur_etat"></a>
<a id="tocSerreur_etat"></a>
<a id="tocserreur_etat"></a>

```json
{
  "etat": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[Erreur_etat_etat](#schemaerreur_etat_etat)]|false|none|none|

<h2 id="tocS_Erreur_etat_etat">Erreur_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemaerreur_etat_etat"></a>
<a id="schema_Erreur_etat_etat"></a>
<a id="tocSerreur_etat_etat"></a>
<a id="tocserreur_etat_etat"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(string)|false|none|Code retour. Voir "tableau des code retour" dans l'annexe de la documentation|
|message|string(string)|false|none|Libellé associé au code de retour|

<h2 id="tocS_HLRReponse">HLRReponse</h2>
<!-- backwards compatibility -->
<a id="schemahlrreponse"></a>
<a id="schema_HLRReponse"></a>
<a id="tocShlrreponse"></a>
<a id="tocshlrreponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "operateur": "string",
        "tel": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[HLRReponse_etat](#schemahlrreponse_etat)|false|none|none|

<h2 id="tocS_HLRReponse_etat">HLRReponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemahlrreponse_etat"></a>
<a id="schema_HLRReponse_etat"></a>
<a id="tocShlrreponse_etat"></a>
<a id="tocshlrreponse_etat"></a>

```json
{
  "etat": [
    {
      "operateur": "string",
      "tel": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[HLRReponse_etat_etat](#schemahlrreponse_etat_etat)]|true|none|liste des retours|

<h2 id="tocS_HLRReponse_etat_etat">HLRReponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemahlrreponse_etat_etat"></a>
<a id="schema_HLRReponse_etat_etat"></a>
<a id="tocShlrreponse_etat_etat"></a>
<a id="tocshlrreponse_etat_etat"></a>

```json
{
  "operateur": "string",
  "tel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operateur|string|true|none|Opérateur associé (si numéro valide)|
|tel|string|true|none|Numero de téléphone concerné|

<h2 id="tocS_HLRrequest">HLRrequest</h2>
<!-- backwards compatibility -->
<a id="schemahlrrequest"></a>
<a id="schema_HLRrequest"></a>
<a id="tocShlrrequest"></a>
<a id="tocshlrrequest"></a>

```json
{
  "getHLR": "1",
  "keyid": "VOTRE_KEYID",
  "num": [
    "06123456789",
    "06345687899"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|getHLR|string|true|none|Doit valoir "1"|
|keyid|string|true|none|Clé API|
|num|[string]|true|none|liste de numéros de téléphone|

#### Enumerated Values

|Property|Value|
|---|---|
|getHLR|1|

<h2 id="tocS_LISTENOIREReponse">LISTENOIREReponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenoirereponse"></a>
<a id="schema_LISTENOIREReponse"></a>
<a id="tocSlistenoirereponse"></a>
<a id="tocslistenoirereponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "listeNoire": "string",
        "tel": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[LISTENOIREReponse_etat](#schemalistenoirereponse_etat)|false|none|none|

<h2 id="tocS_LISTENOIREReponse_etat">LISTENOIREReponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemalistenoirereponse_etat"></a>
<a id="schema_LISTENOIREReponse_etat"></a>
<a id="tocSlistenoirereponse_etat"></a>
<a id="tocslistenoirereponse_etat"></a>

```json
{
  "etat": [
    {
      "listeNoire": "string",
      "tel": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[LISTENOIREReponse_etat_etat](#schemalistenoirereponse_etat_etat)]|true|none|none|

<h2 id="tocS_LISTENOIREReponse_etat_etat">LISTENOIREReponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemalistenoirereponse_etat_etat"></a>
<a id="schema_LISTENOIREReponse_etat_etat"></a>
<a id="tocSlistenoirereponse_etat_etat"></a>
<a id="tocslistenoirereponse_etat_etat"></a>

```json
{
  "listeNoire": "string",
  "tel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listeNoire|string|true|none|Doit valoir "OK"|
|tel|string|true|none|Numéro de téléphone à placer en liste noire. Format national Français ou international.|

<h2 id="tocS_REPERTOIREcreatereponse">REPERTOIREcreatereponse</h2>
<!-- backwards compatibility -->
<a id="schemarepertoirecreatereponse"></a>
<a id="schema_REPERTOIREcreatereponse"></a>
<a id="tocSrepertoirecreatereponse"></a>
<a id="tocsrepertoirecreatereponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "repertoireId": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[REPERTOIREcreatereponse_etat](#schemarepertoirecreatereponse_etat)|false|none|none|

<h2 id="tocS_REPERTOIREcreatereponse_etat">REPERTOIREcreatereponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemarepertoirecreatereponse_etat"></a>
<a id="schema_REPERTOIREcreatereponse_etat"></a>
<a id="tocSrepertoirecreatereponse_etat"></a>
<a id="tocsrepertoirecreatereponse_etat"></a>

```json
{
  "etat": [
    {
      "code": "string",
      "message": "string",
      "repertoireId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[REPERTOIREcreatereponse_etat_etat](#schemarepertoirecreatereponse_etat_etat)]|false|none|none|

<h2 id="tocS_REPERTOIREcreatereponse_etat_etat">REPERTOIREcreatereponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemarepertoirecreatereponse_etat_etat"></a>
<a id="schema_REPERTOIREcreatereponse_etat_etat"></a>
<a id="tocSrepertoirecreatereponse_etat_etat"></a>
<a id="tocsrepertoirecreatereponse_etat_etat"></a>

```json
{
  "code": "string",
  "message": "string",
  "repertoireId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Code retour. Voir "tableau des code retour" dans l'annexe de la documentation|
|message|string|false|none|Libellé associé au code retour.|
|repertoireId|string|false|none|repertoireId du repertoire crée.|

<h2 id="tocS_REPERTOIREcreaterequest">REPERTOIREcreaterequest</h2>
<!-- backwards compatibility -->
<a id="schemarepertoirecreaterequest"></a>
<a id="schema_REPERTOIREcreaterequest"></a>
<a id="tocSrepertoirecreaterequest"></a>
<a id="tocsrepertoirecreaterequest"></a>

```json
{
  "keyid": "VOTRE_KEYID",
  "repertoireEdit": "create",
  "repertoireNom": "Repertoire de test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|true|none|Clé API|
|repertoireEdit|string|true|none|Action à réaliser doit valoir "create" ici.|
|repertoireNom|string|true|none|Nom du répertoire (libellé) à créer|

#### Enumerated Values

|Property|Value|
|---|---|
|repertoireEdit|create|

<h2 id="tocS_REPERTOIREmodifreponse">REPERTOIREmodifreponse</h2>
<!-- backwards compatibility -->
<a id="schemarepertoiremodifreponse"></a>
<a id="schema_REPERTOIREmodifreponse"></a>
<a id="tocSrepertoiremodifreponse"></a>
<a id="tocsrepertoiremodifreponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "repertoireId": "string",
        "tel": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[REPERTOIREmodifreponse_etat](#schemarepertoiremodifreponse_etat)|false|none|none|

<h2 id="tocS_REPERTOIREmodifreponse_etat">REPERTOIREmodifreponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemarepertoiremodifreponse_etat"></a>
<a id="schema_REPERTOIREmodifreponse_etat"></a>
<a id="tocSrepertoiremodifreponse_etat"></a>
<a id="tocsrepertoiremodifreponse_etat"></a>

```json
{
  "etat": [
    {
      "code": "string",
      "message": "string",
      "repertoireId": "string",
      "tel": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[REPERTOIREmodifreponse_etat_etat](#schemarepertoiremodifreponse_etat_etat)]|false|none|none|

<h2 id="tocS_REPERTOIREmodifreponse_etat_etat">REPERTOIREmodifreponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemarepertoiremodifreponse_etat_etat"></a>
<a id="schema_REPERTOIREmodifreponse_etat_etat"></a>
<a id="tocSrepertoiremodifreponse_etat_etat"></a>
<a id="tocsrepertoiremodifreponse_etat_etat"></a>

```json
{
  "code": "string",
  "message": "string",
  "repertoireId": "string",
  "tel": "string"
}
```

Tableau de code retour. Si succès, un code retour distinct par numéro soumis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Code retour. Voir "tableau des code retour" dans l'annexe de la documentation|
|message|string|false|none|Libellé associé au code retour.|
|repertoireId|string|false|none|repertoireId passé en argument lors de l'appel|
|tel|string|false|none|Numéro de téléphone|

<h2 id="tocS_REPERTOIREmodifrequest">REPERTOIREmodifrequest</h2>
<!-- backwards compatibility -->
<a id="schemarepertoiremodifrequest"></a>
<a id="schema_REPERTOIREmodifrequest"></a>
<a id="tocSrepertoiremodifrequest"></a>
<a id="tocsrepertoiremodifrequest"></a>

```json
{
  "keyid": "VOTRE_KEYID",
  "num": [
    "06123456789",
    "07123456789"
  ],
  "repertoireEdit": "add",
  "repertoireId": "VOTRE_REPERTOIRE_ID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|champ1|[string]|false|none|Noms des contact|
|champ10|[string]|false|none|Champs I des contacts|
|champ11|[string]|false|none|Champs J des contacts|
|champ12|[string]|false|none|Champs K des contacts|
|champ13|[string]|false|none|Champs L des contacts|
|champ14|[string]|false|none|Champs M des contacts|
|champ15|[string]|false|none|Champs N des contacts|
|champ16|[string]|false|none|Champs O des contacts|
|champ17|[string]|false|none|Champs P des contacts|
|champ18|[string]|false|none|Champs Q des contacts|
|champ19|[string]|false|none|Champs R des contacts|
|champ2|[string]|false|none|Champs A des contacts|
|champ20|[string]|false|none|Champs S des contacts|
|champ21|[string]|false|none|Champs T des contacts|
|champ22|[string]|false|none|Champs U des contacts|
|champ23|[string]|false|none|Champs V des contacts|
|champ24|[string]|false|none|Champs W des contacts|
|champ25|[string]|false|none|Champs X des contacts|
|champ26|[string]|false|none|Champs Y des contacts|
|champ27|[string]|false|none|Champs Z des contacts|
|champ3|[string]|false|none|Champs B des contacts|
|champ4|[string]|false|none|Champs C des contacts|
|champ5|[string]|false|none|Champs D des contacts|
|champ6|[string]|false|none|Champs E des contacts|
|champ7|[string]|false|none|Champs F des contacts|
|champ8|[string]|false|none|Champs G des contacts|
|champ9|[string]|false|none|Champs H des contacts|
|keyid|string|true|none|Clé API|
|num|[string]|true|none|liste des numéros des téléphone à ajouter ou supprimer|
|repertoireEdit|string|true|none|action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros|
|repertoireId|string|true|none|repertoireId du répertoire cible|

#### Enumerated Values

|Property|Value|
|---|---|
|repertoireEdit|add|
|repertoireEdit|del|

<h2 id="tocS_SMSReponse">SMSReponse</h2>
<!-- backwards compatibility -->
<a id="schemasmsreponse"></a>
<a id="schema_SMSReponse"></a>
<a id="tocSsmsreponse"></a>
<a id="tocssmsreponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "smslong": "string",
        "tel": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[SMSReponse_etat](#schemasmsreponse_etat)|false|none|none|

<h2 id="tocS_SMSReponse_etat">SMSReponse_etat</h2>
<!-- backwards compatibility -->
<a id="schemasmsreponse_etat"></a>
<a id="schema_SMSReponse_etat"></a>
<a id="tocSsmsreponse_etat"></a>
<a id="tocssmsreponse_etat"></a>

```json
{
  "etat": [
    {
      "code": 0,
      "message": "string",
      "smslong": "string",
      "tel": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|[[SMSReponse_etat_etat](#schemasmsreponse_etat_etat)]|false|none|none|

<h2 id="tocS_SMSReponse_etat_etat">SMSReponse_etat_etat</h2>
<!-- backwards compatibility -->
<a id="schemasmsreponse_etat_etat"></a>
<a id="schema_SMSReponse_etat_etat"></a>
<a id="tocSsmsreponse_etat_etat"></a>
<a id="tocssmsreponse_etat_etat"></a>

```json
{
  "code": 0,
  "message": "string",
  "smslong": "string",
  "tel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Code retour. Voir "tableau des code retour" dans l'annexe de la documentation|
|message|string|false|none|Libellé associé au code de retour|
|smslong|string|false|none|Nombre de SMS longs facturés|
|tel|string|false|none|Numero de téléphone concerné|

<h2 id="tocS_SMSRequest">SMSRequest</h2>
<!-- backwards compatibility -->
<a id="schemasmsrequest"></a>
<a id="schema_SMSRequest"></a>
<a id="tocSsmsrequest"></a>
<a id="tocssmsrequest"></a>

```json
{
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": [
    "0600123456",
    "0612345678"
  ],
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_envoi|string|false|none|Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm|
|emetteur|string|false|none|L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.|
|gmt_zone|string|false|none|Fuseau horaire de la date d'envoi|
|keyid|string|true|none|Clé API|
|nostop|string|false|none|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|num|[string]|true|none|none|
|numAzur|string|false|none|none|
|repertoireId|string|false|none|Id du repertoire|
|sms|[string]|true|none|none|
|smslong|string|false|none|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" |
|tracker|[string]|false|none|none|
|ucs2|string|false|none|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.|

#### Enumerated Values

|Property|Value|
|---|---|
|gmt_zone|Pacific/Midway|
|gmt_zone|America/Adak|
|gmt_zone|Etc/GMT+10|
|gmt_zone|Pacific/Marquesas|
|gmt_zone|Pacific/Gambier|
|gmt_zone|America/Anchorage|
|gmt_zone|America/Ensenada|
|gmt_zone|Etc/GMT+8|
|gmt_zone|America/Los_Angeles|
|gmt_zone|America/Denver|
|gmt_zone|America/Chihuahua|
|gmt_zone|America/Dawson_Creek|
|gmt_zone|America/Belize|
|gmt_zone|America/Cancun|
|gmt_zone|Chile/EasterIsland|
|gmt_zone|America/Chicago|
|gmt_zone|America/New_York|
|gmt_zone|America/Havana|
|gmt_zone|America/Bogota|
|gmt_zone|America/Caracas|
|gmt_zone|America/Santiago|
|gmt_zone|America/La_Paz|
|gmt_zone|Atlantic/Stanley|
|gmt_zone|America/Campo_Grande|
|gmt_zone|America/Goose_Bay|
|gmt_zone|America/Glace_Bay|
|gmt_zone|America/St_Johns|
|gmt_zone|America/Araguaina|
|gmt_zone|America/Montevideo|
|gmt_zone|America/Miquelon|
|gmt_zone|America/Godthab|
|gmt_zone|America/Argentina/Buenos_Aires|
|gmt_zone|America/Sao_Paulo|
|gmt_zone|America/Noronha|
|gmt_zone|Atlantic/Cape_Verde|
|gmt_zone|Atlantic/Azores|
|gmt_zone|Europe/Belfast|
|gmt_zone|Europe/Dublin|
|gmt_zone|Europe/Lisbon|
|gmt_zone|Europe/London|
|gmt_zone|Africa/Abidjan|
|gmt_zone|Europe/Amsterdam|
|gmt_zone|Europe/Belgrade|
|gmt_zone|Europe/Brussels|
|gmt_zone|Africa/Algiers|
|gmt_zone|Africa/Windhoek|
|gmt_zone|Asia/Beirut|
|gmt_zone|Africa/Cairo|
|gmt_zone|Asia/Gaza|
|gmt_zone|Africa/Blantyre|
|gmt_zone|Asia/Jerusalem|
|gmt_zone|Europe/Minsk|
|gmt_zone|Asia/Damascus|
|gmt_zone|Europe/Moscow|
|gmt_zone|Africa/Addis_Ababa|
|gmt_zone|Asia/Tehran|
|gmt_zone|Asia/Dubai|
|gmt_zone|Asia/Yerevan|
|gmt_zone|Asia/Kabul|
|gmt_zone|Asia/Yekaterinburg|
|gmt_zone|Asia/Tashkent|
|gmt_zone|Asia/Kolkata|
|gmt_zone|Asia/Katmandu|
|gmt_zone|Asia/Dhaka|
|gmt_zone|Asia/Novosibirsk|
|gmt_zone|Asia/Rangoon|
|gmt_zone|Asia/Bangkok|
|gmt_zone|Asia/Krasnoyarsk|
|gmt_zone|Asia/Hong_Kong|
|gmt_zone|Asia/Irkutsk|
|gmt_zone|Australia/Perth|
|gmt_zone|Australia/Eucla|
|gmt_zone|Asia/Tokyo|
|gmt_zone|Asia/Seoul|
|gmt_zone|Asia/Yakutsk|
|gmt_zone|Australia/Adelaide|
|gmt_zone|Australia/Darwin|
|gmt_zone|Australia/Brisbane|
|gmt_zone|Australia/Hobart|
|gmt_zone|Asia/Vladivostok|
|gmt_zone|Australia/Lord_Howe|
|gmt_zone|Etc/GMT-11|
|gmt_zone|Asia/Magadan|
|gmt_zone|Pacific/Norfolk|
|gmt_zone|Asia/Anadyr|
|gmt_zone|Pacific/Auckland|
|gmt_zone|Etc/GMT-12|
|gmt_zone|Pacific/Chatham|
|gmt_zone|Pacific/Tongatapu|
|gmt_zone|Pacific/Kiritimati|
|numAzur|1|

<h2 id="tocS_ShortlinkRequest">ShortlinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemashortlinkrequest"></a>
<a id="schema_ShortlinkRequest"></a>
<a id="tocSshortlinkrequest"></a>
<a id="tocsshortlinkrequest"></a>

```json
{
  "keyid": "string",
  "shortlink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|true|none|none|
|shortlink|string|true|none|none|

<h2 id="tocS_ShortlinkResponse">ShortlinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemashortlinkresponse"></a>
<a id="schema_ShortlinkResponse"></a>
<a id="tocSshortlinkresponse"></a>
<a id="tocsshortlinkresponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "shortlink": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|object|false|none|none|

<h2 id="tocS_SmsUniqueRequest">SmsUniqueRequest</h2>
<!-- backwards compatibility -->
<a id="schemasmsuniquerequest"></a>
<a id="schema_SmsUniqueRequest"></a>
<a id="tocSsmsuniquerequest"></a>
<a id="tocssmsuniquerequest"></a>

```json
{
  "emetteur": "iSendPro",
  "keyid": "VOTRE_KEYID",
  "num": "0600123456",
  "sms": "Bonjour! Bienvenue sur iSendPro!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_envoi|string|false|none|Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.|
|emetteur|string|false|none|- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.<br><br>- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.<br><br>- Il ne peut pas comporter uniquement des chiffres. <br><br>- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.<br>|
|gmt_zone|string|false|none|Fuseau horaire de la date d'envoi|
|keyid|string|true|none|Clé API|
|nostop|string|false|none|Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"|
|num|string|true|none|Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)|
|numAzur|string|false|none|none|
|sms|string|true|none|Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.|
|smslong|string|false|none|Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué<br>de plusieurs SMS.<br>Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918<br>caractères par message.<br>Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.<br>En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères<br>du « STOP SMS ».<br>Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"<br>|
|tracker|string|false|none|Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. |
|ucs2|string|false|none|Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur<br>les numéros hors France métropolitaine.<br>Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"<br>Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu<br>des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|gmt_zone|Pacific/Midway|
|gmt_zone|America/Adak|
|gmt_zone|Etc/GMT+10|
|gmt_zone|Pacific/Marquesas|
|gmt_zone|Pacific/Gambier|
|gmt_zone|America/Anchorage|
|gmt_zone|America/Ensenada|
|gmt_zone|Etc/GMT+8|
|gmt_zone|America/Los_Angeles|
|gmt_zone|America/Denver|
|gmt_zone|America/Chihuahua|
|gmt_zone|America/Dawson_Creek|
|gmt_zone|America/Belize|
|gmt_zone|America/Cancun|
|gmt_zone|Chile/EasterIsland|
|gmt_zone|America/Chicago|
|gmt_zone|America/New_York|
|gmt_zone|America/Havana|
|gmt_zone|America/Bogota|
|gmt_zone|America/Caracas|
|gmt_zone|America/Santiago|
|gmt_zone|America/La_Paz|
|gmt_zone|Atlantic/Stanley|
|gmt_zone|America/Campo_Grande|
|gmt_zone|America/Goose_Bay|
|gmt_zone|America/Glace_Bay|
|gmt_zone|America/St_Johns|
|gmt_zone|America/Araguaina|
|gmt_zone|America/Montevideo|
|gmt_zone|America/Miquelon|
|gmt_zone|America/Godthab|
|gmt_zone|America/Argentina/Buenos_Aires|
|gmt_zone|America/Sao_Paulo|
|gmt_zone|America/Noronha|
|gmt_zone|Atlantic/Cape_Verde|
|gmt_zone|Atlantic/Azores|
|gmt_zone|Europe/Belfast|
|gmt_zone|Europe/Dublin|
|gmt_zone|Europe/Lisbon|
|gmt_zone|Europe/London|
|gmt_zone|Africa/Abidjan|
|gmt_zone|Europe/Amsterdam|
|gmt_zone|Europe/Belgrade|
|gmt_zone|Europe/Brussels|
|gmt_zone|Africa/Algiers|
|gmt_zone|Africa/Windhoek|
|gmt_zone|Asia/Beirut|
|gmt_zone|Africa/Cairo|
|gmt_zone|Asia/Gaza|
|gmt_zone|Africa/Blantyre|
|gmt_zone|Asia/Jerusalem|
|gmt_zone|Europe/Minsk|
|gmt_zone|Asia/Damascus|
|gmt_zone|Europe/Moscow|
|gmt_zone|Africa/Addis_Ababa|
|gmt_zone|Asia/Tehran|
|gmt_zone|Asia/Dubai|
|gmt_zone|Asia/Yerevan|
|gmt_zone|Asia/Kabul|
|gmt_zone|Asia/Yekaterinburg|
|gmt_zone|Asia/Tashkent|
|gmt_zone|Asia/Kolkata|
|gmt_zone|Asia/Katmandu|
|gmt_zone|Asia/Dhaka|
|gmt_zone|Asia/Novosibirsk|
|gmt_zone|Asia/Rangoon|
|gmt_zone|Asia/Bangkok|
|gmt_zone|Asia/Krasnoyarsk|
|gmt_zone|Asia/Hong_Kong|
|gmt_zone|Asia/Irkutsk|
|gmt_zone|Australia/Perth|
|gmt_zone|Australia/Eucla|
|gmt_zone|Asia/Tokyo|
|gmt_zone|Asia/Seoul|
|gmt_zone|Asia/Yakutsk|
|gmt_zone|Australia/Adelaide|
|gmt_zone|Australia/Darwin|
|gmt_zone|Australia/Brisbane|
|gmt_zone|Australia/Hobart|
|gmt_zone|Asia/Vladivostok|
|gmt_zone|Australia/Lord_Howe|
|gmt_zone|Etc/GMT-11|
|gmt_zone|Asia/Magadan|
|gmt_zone|Pacific/Norfolk|
|gmt_zone|Asia/Anadyr|
|gmt_zone|Pacific/Auckland|
|gmt_zone|Etc/GMT-12|
|gmt_zone|Pacific/Chatham|
|gmt_zone|Pacific/Tongatapu|
|gmt_zone|Pacific/Kiritimati|
|numAzur|1|

<h2 id="tocS_SubaccountAddRequest">SubaccountAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountaddrequest"></a>
<a id="schema_SubaccountAddRequest"></a>
<a id="tocSsubaccountaddrequest"></a>
<a id="tocssubaccountaddrequest"></a>

```json
{
  "keyid": "string",
  "subAccountEdit": "addAccount",
  "subAccountLogin": "string",
  "subAccountPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|true|none|none|
|subAccountEdit|string|true|none|none|
|subAccountLogin|string|true|none|none|
|subAccountPassword|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|subAccountEdit|addAccount|

<h2 id="tocS_SubaccountAddResponse">SubaccountAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountaddresponse"></a>
<a id="schema_SubaccountAddResponse"></a>
<a id="tocSsubaccountaddresponse"></a>
<a id="tocssubaccountaddresponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": 0,
        "message": "string",
        "subAccountId": "string",
        "subAccountKeyId": "string",
        "subAccountLogin": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|object|false|none|none|

<h2 id="tocS_SubaccountRequest">SubaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountrequest"></a>
<a id="schema_SubaccountRequest"></a>
<a id="tocSsubaccountrequest"></a>
<a id="tocssubaccountrequest"></a>

```json
{
  "keyid": "string",
  "subAccountAddCredit": "string",
  "subAccountCountryCode": "string",
  "subAccountEdit": "setPrice",
  "subAccountKeyId": "string",
  "subAccountPrice": "string",
  "subAccountRestrictionStop": "0",
  "subAccountRestrictionTime": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyid|string|true|none|Clé API|
|subAccountAddCredit|string|false|none|montant du crédit à ajouter|
|subAccountCountryCode|string|false|none|none|
|subAccountEdit|string|true|none|action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /|
|subAccountKeyId|string|false|none|keyid du sous-compte|
|subAccountPrice|string|false|none|none|
|subAccountRestrictionStop|string|false|none|none|
|subAccountRestrictionTime|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|subAccountEdit|setPrice|
|subAccountEdit|addCredit|
|subAccountEdit|setRestriction|
|subAccountRestrictionStop|0|
|subAccountRestrictionStop|1|
|subAccountRestrictionTime|0|
|subAccountRestrictionTime|1|

<h2 id="tocS_SubaccountResponse">SubaccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountresponse"></a>
<a id="schema_SubaccountResponse"></a>
<a id="tocSsubaccountresponse"></a>
<a id="tocssubaccountresponse"></a>

```json
{
  "etat": {
    "etat": [
      {
        "code": "string",
        "message": "string",
        "subAccountId": "string",
        "subAccountKeyid": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etat|object|false|none|none|
