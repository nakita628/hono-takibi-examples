<h1 id="obono-rksv-api">obono RKSV API v1.4.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides a RESTful API for interacting with virtual cash registers and creating receipts that are conform with the Registrierkassensicherheitsverordnung (RKSV).

You may find our [automatically generated clients](./clients) for various programming languages and environments helpful...

Base URLs:

* <a href="https://api.apis.guru/api/v1">https://api.apis.guru/api/v1</a>

Email: <a href="mailto:info@obono.at">CodeWerkstatt OG</a> 
Web: <a href="https://obono.at">CodeWerkstatt OG</a> 
License: <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">Creative Commons Attribution NonCommercial 4.0 (CC-BY-NC)</a>

# Authentication

- HTTP Authentication, scheme: basic HTTP Basic Authentication.

* API Key (jwt)
    - Parameter Name: **Authorization**, in: header. A JSON Web Token (JWT) used for access control and authorization.

<h1 id="obono-rksv-api-registrierkasse">registrierkasse</h1>

resources concerning a "Registrierkasse"

## getRegistrierkasse

<a id="opIdgetRegistrierkasse"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /registrierkassen/{registrierkasseUuid}`

Returns information about a particular `Registrierkasse`.

<h3 id="getregistrierkasse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of a particular `Registrierkasse` to fetch.|

> Example responses

> 200 Response

```json
{
  "Benutzerschluessel": "string",
  "Kassen-ID": "string",
  "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "_href": "http://example.com",
  "_uuid": "string"
}
```

<h3 id="getregistrierkasse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about a particular `Registrierkasse`.|[Registrierkasse](#schemaregistrierkasse)|
|404|Not Found|This particular `Registrierkasse` does not exist.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## getDEP

<a id="opIdgetDEP"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string/dep \
  -H "Authorization: ${API_KEY}"
```

`GET /registrierkassen/{registrierkasseUuid}/dep`

Generates a DEP file.

<h3 id="getdep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to retrieve the DEP file.|

<h3 id="getdep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The DEP file.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="obono-rksv-api-beleg">beleg</h1>

resources concerning a "Beleg"

## get/belege/{belegUuid}

> Code samples

```bash
curl https://example.com/belege/string \
  -H 'Accept: application/json'
```

`GET /belege/{belegUuid}`

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

<h3 id="getbelegebeleguuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|belegUuid|path|string|true|The `_uuid` of the `Beleg` to fetch.|

> Example responses

> 200 Response

```json
{
  "Beleg-Codes": [
    "string"
  ],
  "Beleg-Typen": [
    "Belegkreisinitialisierung"
  ],
  "Belegdaten": {
    "Beleg-Datum-Uhrzeit": "string",
    "Belegnummer": "string",
    "Betrag-Brutto": 0,
    "Betrag-Netto": 0,
    "Betrag-Satz-Besonders-Brutto": 0,
    "Betrag-Satz-Besonders-Netto": 0,
    "Betrag-Satz-Ermaessigt-1-Brutto": 0,
    "Betrag-Satz-Ermaessigt-1-Netto": 0,
    "Betrag-Satz-Ermaessigt-2-Brutto": 0,
    "Betrag-Satz-Ermaessigt-2-Netto": 0,
    "Betrag-Satz-Normal-Brutto": 0,
    "Betrag-Satz-Normal-Netto": 0,
    "Betrag-Satz-Null-Brutto": 0,
    "Betrag-Satz-Null-Netto": 0,
    "Externer-Beleg-Belegkreis": "string",
    "Externer-Beleg-Bezeichnung": "string",
    "Externer-Beleg-Referenz": "string",
    "Kassen-ID": "string",
    "Kunde": "string",
    "Notizen": [
      "string"
    ],
    "Posten": [
      {
        "Bezeichnung": "string",
        "BruttoBetrag": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Menge": 0,
        "NettoBetrag": 0,
        "Satz": "NORMAL"
      }
    ],
    "Rabatte": [
      {
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Bezeichnung": "string",
        "Satz": "NORMAL"
      }
    ],
    "Storno": true,
    "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "Storno-Text": "string",
    "Training": true,
    "Unternehmen-Adresse1": "string",
    "Unternehmen-Adresse2": "string",
    "Unternehmen-Fusszeile": "string",
    "Unternehmen-ID": "string",
    "Unternehmen-ID-Typ": "steuernummer",
    "Unternehmen-Kopfzeile": "string",
    "Unternehmen-Name": "string",
    "Unternehmen-Ort": "string",
    "Unternehmen-PLZ": "string",
    "Zahlungen": [
      {
        "Betrag": 0,
        "Bezeichnung": "string",
        "Referenz": "string"
      }
    ],
    "Zertifikat-Seriennummer": "string"
  },
  "JWS": "string",
  "QR": "string",
  "QR-Link": "http://example.com",
  "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "_href": "http://example.com",
  "_uuid": "string"
}
```

<h3 id="getbelegebeleguuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested `Beleg` resource.|[Beleg](#schemabeleg)|
|404|Not Found|The requested `Beleg` resource does not exist.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createAbschluss

<a id="opIdcreateAbschluss"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string/abschluss \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Abschluss-Beginn-Datum-Uhrzeit": "string",
    "Abschluss-Ende-Datum-Uhrzeit": "string"
  }'
```

`POST /registrierkassen/{registrierkasseUuid}/abschluss`

Generates an `Abschlussbeleg`.

> Body parameter

```json
{
  "Abschluss-Beginn-Datum-Uhrzeit": "string",
  "Abschluss-Ende-Datum-Uhrzeit": "string"
}
```

<h3 id="createabschluss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.|
|body|body|[Abschlussbelegdaten](#schemaabschlussbelegdaten)|true|An object that contains all data for a particular `Abschlussbeleg`.|
|» Abschluss-Beginn-Datum-Uhrzeit|body|string(iso8601-date-time)|true|none|
|» Abschluss-Ende-Datum-Uhrzeit|body|string(iso8601-date-time)|true|none|

<h3 id="createabschluss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `Abschlussbeleg` has been created, signed and added to the "Datenerfassungsprotokoll".|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|The URL (`_href`) of the newly created `Beleg` resource.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## getBelege

<a id="opIdgetBelege"></a>

> Code samples

```bash
curl 'https://example.com/registrierkassen/string/belege?format=export' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /registrierkassen/{registrierkasseUuid}/belege`

Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".

<h3 id="getbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.|
|format|query|string|true|Determines the format of the `Beleg` collection.|
|order|query|string|false|Determines the sorting order.|
|limit|query|integer|false|Limits the number of returned results.|
|offset|query|integer|false|Skips the specified number of results from the result set.|
|before|query|string|false|Only return results that where saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that where saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|gte|query|integer|false|Only return results that have at least a particular `Belegnummer`.|
|lte|query|integer|false|Only return results that have at most a particular `Belegnummer`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|export|
|format|beleg|
|format|uuidlist|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "Belege": [
    {
      "Beleg-Codes": [
        "string"
      ],
      "Beleg-Typen": [
        "Belegkreisinitialisierung"
      ],
      "Belegdaten": {
        "Beleg-Datum-Uhrzeit": "string",
        "Belegnummer": "string",
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Betrag-Satz-Besonders-Brutto": 0,
        "Betrag-Satz-Besonders-Netto": 0,
        "Betrag-Satz-Ermaessigt-1-Brutto": 0,
        "Betrag-Satz-Ermaessigt-1-Netto": 0,
        "Betrag-Satz-Ermaessigt-2-Brutto": 0,
        "Betrag-Satz-Ermaessigt-2-Netto": 0,
        "Betrag-Satz-Normal-Brutto": 0,
        "Betrag-Satz-Normal-Netto": 0,
        "Betrag-Satz-Null-Brutto": 0,
        "Betrag-Satz-Null-Netto": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Kassen-ID": "string",
        "Kunde": "string",
        "Notizen": [
          "string"
        ],
        "Posten": [
          {
            "Bezeichnung": "string",
            "BruttoBetrag": 0,
            "Externer-Beleg-Belegkreis": "string",
            "Externer-Beleg-Bezeichnung": "string",
            "Externer-Beleg-Referenz": "string",
            "Menge": 0,
            "NettoBetrag": 0,
            "Satz": "NORMAL"
          }
        ],
        "Rabatte": [
          {
            "Betrag-Brutto": 0,
            "Betrag-Netto": 0,
            "Bezeichnung": "string",
            "Satz": "NORMAL"
          }
        ],
        "Storno": true,
        "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "Storno-Text": "string",
        "Training": true,
        "Unternehmen-Adresse1": "string",
        "Unternehmen-Adresse2": "string",
        "Unternehmen-Fusszeile": "string",
        "Unternehmen-ID": "string",
        "Unternehmen-ID-Typ": "steuernummer",
        "Unternehmen-Kopfzeile": "string",
        "Unternehmen-Name": "string",
        "Unternehmen-Ort": "string",
        "Unternehmen-PLZ": "string",
        "Zahlungen": [
          {
            "Betrag": 0,
            "Bezeichnung": "string",
            "Referenz": "string"
          }
        ],
        "Zertifikat-Seriennummer": "string"
      },
      "JWS": "string",
      "QR": "string",
      "QR-Link": "http://example.com",
      "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "_href": "http://example.com",
      "_uuid": "string"
    }
  ],
  "Belege-Gruppe": [
    {
      "Belege-kompakt": [
        "string"
      ],
      "Signaturzertifikat": "string",
      "Zertifizierungsstellen": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The `Beleg` collection from the "Datenerfassungsprotokoll".|[Belege](#schemabelege)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## getBeleg

<a id="opIdgetBeleg"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string/belege/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /registrierkassen/{registrierkasseUuid}/belege/{belegUuid}`

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

<h3 id="getbeleg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` that contains the requested `Beleg`.|
|belegUuid|path|string|true|The `_uuid` of the `Beleg` to fetch.|

> Example responses

> 200 Response

```json
{
  "Beleg-Codes": [
    "string"
  ],
  "Beleg-Typen": [
    "Belegkreisinitialisierung"
  ],
  "Belegdaten": {
    "Beleg-Datum-Uhrzeit": "string",
    "Belegnummer": "string",
    "Betrag-Brutto": 0,
    "Betrag-Netto": 0,
    "Betrag-Satz-Besonders-Brutto": 0,
    "Betrag-Satz-Besonders-Netto": 0,
    "Betrag-Satz-Ermaessigt-1-Brutto": 0,
    "Betrag-Satz-Ermaessigt-1-Netto": 0,
    "Betrag-Satz-Ermaessigt-2-Brutto": 0,
    "Betrag-Satz-Ermaessigt-2-Netto": 0,
    "Betrag-Satz-Normal-Brutto": 0,
    "Betrag-Satz-Normal-Netto": 0,
    "Betrag-Satz-Null-Brutto": 0,
    "Betrag-Satz-Null-Netto": 0,
    "Externer-Beleg-Belegkreis": "string",
    "Externer-Beleg-Bezeichnung": "string",
    "Externer-Beleg-Referenz": "string",
    "Kassen-ID": "string",
    "Kunde": "string",
    "Notizen": [
      "string"
    ],
    "Posten": [
      {
        "Bezeichnung": "string",
        "BruttoBetrag": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Menge": 0,
        "NettoBetrag": 0,
        "Satz": "NORMAL"
      }
    ],
    "Rabatte": [
      {
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Bezeichnung": "string",
        "Satz": "NORMAL"
      }
    ],
    "Storno": true,
    "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "Storno-Text": "string",
    "Training": true,
    "Unternehmen-Adresse1": "string",
    "Unternehmen-Adresse2": "string",
    "Unternehmen-Fusszeile": "string",
    "Unternehmen-ID": "string",
    "Unternehmen-ID-Typ": "steuernummer",
    "Unternehmen-Kopfzeile": "string",
    "Unternehmen-Name": "string",
    "Unternehmen-Ort": "string",
    "Unternehmen-PLZ": "string",
    "Zahlungen": [
      {
        "Betrag": 0,
        "Bezeichnung": "string",
        "Referenz": "string"
      }
    ],
    "Zertifikat-Seriennummer": "string"
  },
  "JWS": "string",
  "QR": "string",
  "QR-Link": "http://example.com",
  "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "_href": "http://example.com",
  "_uuid": "string"
}
```

<h3 id="getbeleg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested `Beleg` resource.|[Beleg](#schemabeleg)|
|404|Not Found|The requested `Beleg` resource does not exist.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## addBeleg

<a id="opIdaddBeleg"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string/belege/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Externer-Beleg-Belegkreis": "string",
    "Externer-Beleg-Bezeichnung": "string",
    "Externer-Beleg-Referenz": "string",
    "Kunde": "string",
    "Notizen": [
      "string"
    ],
    "Posten": [
      {
        "Bezeichnung": "string",
        "BruttoBetrag": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Menge": 0,
        "NettoBetrag": 0,
        "Satz": "NORMAL"
      }
    ],
    "Rabatte": [
      {
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Bezeichnung": "string",
        "Satz": "NORMAL"
      }
    ],
    "Storno": true,
    "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "Storno-Text": "string",
    "Training": true,
    "Unternehmen-Adresse1": "string",
    "Unternehmen-Adresse2": "string",
    "Unternehmen-Fusszeile": "string",
    "Unternehmen-ID": "string",
    "Unternehmen-ID-Typ": "steuernummer",
    "Unternehmen-Kopfzeile": "string",
    "Unternehmen-Name": "string",
    "Unternehmen-Ort": "string",
    "Unternehmen-PLZ": "string",
    "Zahlungen": [
      {
        "Betrag": 0,
        "Bezeichnung": "string",
        "Referenz": "string"
      }
    ]
  }'
```

`PUT /registrierkassen/{registrierkasseUuid}/belege/{belegUuid}`

Signs a receipt and stores it in the "Datenerfassungsprotokoll".

> Body parameter

```json
{
  "Externer-Beleg-Belegkreis": "string",
  "Externer-Beleg-Bezeichnung": "string",
  "Externer-Beleg-Referenz": "string",
  "Kunde": "string",
  "Notizen": [
    "string"
  ],
  "Posten": [
    {
      "Bezeichnung": "string",
      "BruttoBetrag": 0,
      "Externer-Beleg-Belegkreis": "string",
      "Externer-Beleg-Bezeichnung": "string",
      "Externer-Beleg-Referenz": "string",
      "Menge": 0,
      "NettoBetrag": 0,
      "Satz": "NORMAL"
    }
  ],
  "Rabatte": [
    {
      "Betrag-Brutto": 0,
      "Betrag-Netto": 0,
      "Bezeichnung": "string",
      "Satz": "NORMAL"
    }
  ],
  "Storno": true,
  "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Storno-Text": "string",
  "Training": true,
  "Unternehmen-Adresse1": "string",
  "Unternehmen-Adresse2": "string",
  "Unternehmen-Fusszeile": "string",
  "Unternehmen-ID": "string",
  "Unternehmen-ID-Typ": "steuernummer",
  "Unternehmen-Kopfzeile": "string",
  "Unternehmen-Name": "string",
  "Unternehmen-Ort": "string",
  "Unternehmen-PLZ": "string",
  "Zahlungen": [
    {
      "Betrag": 0,
      "Bezeichnung": "string",
      "Referenz": "string"
    }
  ]
}
```

<h3 id="addbeleg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to use for signing data.|
|belegUuid|path|string|true|The `_uuid` of the `Beleg` to store.|
|body|body|[Belegdaten](#schemabelegdaten)|true|An object that contains all data for a particular `Beleg` and is formatted according to RKSV "Signaturformat".|
|» Externer-Beleg-Belegkreis|body|string|false|none|
|» Externer-Beleg-Bezeichnung|body|string|false|none|
|» Externer-Beleg-Referenz|body|string|false|none|
|» Kunde|body|string|false|none|
|» Notizen|body|[string]|false|none|
|» Posten|body|[[Posten](#schemaposten)]|false|none|
|» Rabatte|body|[[Rabatt](#schemarabatt)]|false|none|
|» Storno|body|boolean|false|Storno?|
|» Storno-Beleg-UUID|body|string(uuid)|false|The `Beleg-UUID` property of the `Beleg` to be cancelled|
|» Storno-Text|body|string|false|none|
|» Training|body|boolean|false|Training?|
|» Unternehmen-Adresse1|body|string|false|none|
|» Unternehmen-Adresse2|body|string|false|none|
|» Unternehmen-Fusszeile|body|string|false|none|
|» Unternehmen-ID|body|string|false|none|
|» Unternehmen-ID-Typ|body|string|false|none|
|» Unternehmen-Kopfzeile|body|string|false|none|
|» Unternehmen-Name|body|string|false|none|
|» Unternehmen-Ort|body|string|false|none|
|» Unternehmen-PLZ|body|string|false|none|
|» Zahlungen|body|[[Zahlung](#schemazahlung)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Unternehmen-ID-Typ|steuernummer|
|» Unternehmen-ID-Typ|uid|
|» Unternehmen-ID-Typ|gln|

<h3 id="addbeleg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The `Beleg` has been signed and added to the "Datenerfassungsprotokoll".|None|
|400|Bad Request|The provided request payload is invalid i.e. not conform the the JSON schema.|None|
|403|Forbidden|Access token is either missing or invalid. Be sure to include the Authorization HTTP header.|None|
|409|Conflict|A `Beleg` with this particular `belegUuid` already exists.|None|
|415|Unsupported Media Type|The provided request payload is not JSON encoded.|None|
|429|Too Many Requests|Request limit exceeded.|None|
|500|Internal Server Error|The receipt could not be signed either because the HSM delivered invalid data or the request signing request timed out (currently after 10 seconds).|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|The URL (`_href`) of the newly created `Beleg` resource.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="obono-rksv-api-auth">auth</h1>

authentication and authorization

## get/auth

> Code samples

```bash
curl https://example.com/auth \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth`

Request a JWT access token using your obono username and password.

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "registrierkasseUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="getauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The JWT `accessToken` to use for accessing secured resourced as well as the `registrierkassenUuid` of the corresponding "Registrierkasse".|[AuthResult](#schemaauthresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="obono-rksv-api-export">export</h1>

## get/export/csv/registrierkassen/{registrierkasseUuid}/belege

> Code samples

```bash
curl https://example.com/export/csv/registrierkassen/string/belege \
  -H "Authorization: ${API_KEY}"
```

`GET /export/csv/registrierkassen/{registrierkasseUuid}/belege`

<h3 id="getexportcsvregistrierkassenregistrierkasseuuidbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to export.|
|before|query|string|false|Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|posten|query|boolean|false|Export `Posten` instead of `Belegdaten`.|

<h3 id="getexportcsvregistrierkassenregistrierkasseuuidbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exported data of a particular `Registrierkasse` in its CSV representation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/export/dep131/registrierkassen/{registrierkasseUuid}/belege

> Code samples

```bash
curl https://example.com/export/dep131/registrierkassen/string/belege \
  -H "Authorization: ${API_KEY}"
```

`GET /export/dep131/registrierkassen/{registrierkasseUuid}/belege`

<h3 id="getexportdep131registrierkassenregistrierkasseuuidbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to export.|
|before|query|string|false|Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|

<h3 id="getexportdep131registrierkassenregistrierkasseuuidbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exported data of a particular `Registrierkasse` in its DEP131 / CSV representation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/export/dep7/registrierkassen/{registrierkasseUuid}/belege

> Code samples

```bash
curl https://example.com/export/dep7/registrierkassen/string/belege \
  -H "Authorization: ${API_KEY}"
```

`GET /export/dep7/registrierkassen/{registrierkasseUuid}/belege`

<h3 id="getexportdep7registrierkassenregistrierkasseuuidbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to export.|
|before|query|string|false|Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|

<h3 id="getexportdep7registrierkassenregistrierkasseuuidbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exported data of a particular `Registrierkasse` in its DEP7 representation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/export/gobd/registrierkassen/{registrierkasseUuid}

> Code samples

```bash
curl https://example.com/export/gobd/registrierkassen/string \
  -H "Authorization: ${API_KEY}"
```

`GET /export/gobd/registrierkassen/{registrierkasseUuid}`

<h3 id="getexportgobdregistrierkassenregistrierkasseuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to export.|
|before|query|string|false|Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|

<h3 id="getexportgobdregistrierkassenregistrierkasseuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exported data of a particular `Registrierkasse` in its GoBD representation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/export/html/belege/{belegUuid}

> Code samples

```bash
curl https://example.com/export/html/belege/string
```

`GET /export/html/belege/{belegUuid}`

<h3 id="getexporthtmlbelegebeleguuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|belegUuid|path|string|true|The `_uuid` of a particular `Beleg` to export.|

<h3 id="getexporthtmlbelegebeleguuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A particular `Beleg` in its HTML representation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/export/pdf/belege/{belegUuid}

> Code samples

```bash
curl https://example.com/export/pdf/belege/string
```

`GET /export/pdf/belege/{belegUuid}`

<h3 id="getexportpdfbelegebeleguuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|belegUuid|path|string|true|The `_uuid` of a particular `Beleg` to export.|

<h3 id="getexportpdfbelegebeleguuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A particular `Beleg` in its PDF representation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/export/qr/belege/{belegUuid}

> Code samples

```bash
curl https://example.com/export/qr/belege/string
```

`GET /export/qr/belege/{belegUuid}`

<h3 id="getexportqrbelegebeleguuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|belegUuid|path|string|true|The `_uuid` of a particular `Beleg` to export.|

<h3 id="getexportqrbelegebeleguuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The RKSV QR-Code as PNG file.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/export/thermal-print/belege/{belegUuid}

> Code samples

```bash
curl https://example.com/export/thermal-print/belege/string
```

`GET /export/thermal-print/belege/{belegUuid}`

<h3 id="getexportthermal-printbelegebeleguuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|belegUuid|path|string|true|The `_uuid` of a particular `Beleg` to export.|
|qr|query|boolean|false|Should the RKSV QR code should be rendered?|
|width|query|integer|false|Number of characters per line.|
|dialect|query|string|false|The thermal printer dialect.|
|encoding|query|string|false|The encoding of the binary data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dialect|escpos|
|dialect|escposlite|
|dialect|star|
|dialect|text|
|encoding|raw|
|encoding|base64|

<h3 id="getexportthermal-printbelegebeleguuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A particular `Beleg` in its ESC/POS or STAR representation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/export/xls/registrierkassen/{registrierkasseUuid}/belege

> Code samples

```bash
curl https://example.com/export/xls/registrierkassen/string/belege \
  -H "Authorization: ${API_KEY}"
```

`GET /export/xls/registrierkassen/{registrierkasseUuid}/belege`

<h3 id="getexportxlsregistrierkassenregistrierkasseuuidbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse` to export.|
|before|query|string|false|Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).|
|after|query|string|false|Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).|

<h3 id="getexportxlsregistrierkassenregistrierkasseuuidbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exported data of a particular `Registrierkasse` in its Microsoft Excel representation.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="obono-rksv-api-monatsbelege">monatsbelege</h1>

## getMonatsbelege

<a id="opIdgetMonatsbelege"></a>

> Code samples

```bash
curl https://example.com/registrierkassen/string/monatsbelege \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /registrierkassen/{registrierkasseUuid}/monatsbelege`

Returns a list of `Monatsbelege`.

<h3 id="getmonatsbelege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrierkasseUuid|path|string|true|The `_uuid` of the `Registrierkasse`.|
|year|query|integer|false|none|
|month|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "FON-Geprueft-Datum-Uhrzeit": "string",
    "FON-Geprueft-Erfolgreich": true,
    "Jahr": 0,
    "Monat": 0
  }
]
```

<h3 id="getmonatsbelege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about `Monatsbelege`.|Inline|

<h3 id="getmonatsbelege-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Monatsbeleg](#schemamonatsbeleg)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

# Schemas

<h2 id="tocS_Abschlussbelegdaten">Abschlussbelegdaten</h2>
<!-- backwards compatibility -->
<a id="schemaabschlussbelegdaten"></a>
<a id="schema_Abschlussbelegdaten"></a>
<a id="tocSabschlussbelegdaten"></a>
<a id="tocsabschlussbelegdaten"></a>

```json
{
  "Abschluss-Beginn-Datum-Uhrzeit": "string",
  "Abschluss-Ende-Datum-Uhrzeit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Abschluss-Beginn-Datum-Uhrzeit|string(iso8601-date-time)|true|none|none|
|Abschluss-Ende-Datum-Uhrzeit|string(iso8601-date-time)|true|none|none|

<h2 id="tocS_AuthResult">AuthResult</h2>
<!-- backwards compatibility -->
<a id="schemaauthresult"></a>
<a id="schema_AuthResult"></a>
<a id="tocSauthresult"></a>
<a id="tocsauthresult"></a>

```json
{
  "accessToken": "string",
  "registrierkasseUuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|none|
|registrierkasseUuid|string(uuid)|false|none|none|

<h2 id="tocS_Beleg">Beleg</h2>
<!-- backwards compatibility -->
<a id="schemabeleg"></a>
<a id="schema_Beleg"></a>
<a id="tocSbeleg"></a>
<a id="tocsbeleg"></a>

```json
{
  "Beleg-Codes": [
    "string"
  ],
  "Beleg-Typen": [
    "Belegkreisinitialisierung"
  ],
  "Belegdaten": {
    "Beleg-Datum-Uhrzeit": "string",
    "Belegnummer": "string",
    "Betrag-Brutto": 0,
    "Betrag-Netto": 0,
    "Betrag-Satz-Besonders-Brutto": 0,
    "Betrag-Satz-Besonders-Netto": 0,
    "Betrag-Satz-Ermaessigt-1-Brutto": 0,
    "Betrag-Satz-Ermaessigt-1-Netto": 0,
    "Betrag-Satz-Ermaessigt-2-Brutto": 0,
    "Betrag-Satz-Ermaessigt-2-Netto": 0,
    "Betrag-Satz-Normal-Brutto": 0,
    "Betrag-Satz-Normal-Netto": 0,
    "Betrag-Satz-Null-Brutto": 0,
    "Betrag-Satz-Null-Netto": 0,
    "Externer-Beleg-Belegkreis": "string",
    "Externer-Beleg-Bezeichnung": "string",
    "Externer-Beleg-Referenz": "string",
    "Kassen-ID": "string",
    "Kunde": "string",
    "Notizen": [
      "string"
    ],
    "Posten": [
      {
        "Bezeichnung": "string",
        "BruttoBetrag": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Menge": 0,
        "NettoBetrag": 0,
        "Satz": "NORMAL"
      }
    ],
    "Rabatte": [
      {
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Bezeichnung": "string",
        "Satz": "NORMAL"
      }
    ],
    "Storno": true,
    "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "Storno-Text": "string",
    "Training": true,
    "Unternehmen-Adresse1": "string",
    "Unternehmen-Adresse2": "string",
    "Unternehmen-Fusszeile": "string",
    "Unternehmen-ID": "string",
    "Unternehmen-ID-Typ": "steuernummer",
    "Unternehmen-Kopfzeile": "string",
    "Unternehmen-Name": "string",
    "Unternehmen-Ort": "string",
    "Unternehmen-PLZ": "string",
    "Zahlungen": [
      {
        "Betrag": 0,
        "Bezeichnung": "string",
        "Referenz": "string"
      }
    ],
    "Zertifikat-Seriennummer": "string"
  },
  "JWS": "string",
  "QR": "string",
  "QR-Link": "http://example.com",
  "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "_href": "http://example.com",
  "_uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Beleg-Codes|[string]|false|none|none|
|Beleg-Typen|[string]|false|none|none|
|Belegdaten|[SignierteBelegdaten](#schemasigniertebelegdaten)|false|none|The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".|
|JWS|string(jws)|false|none|The signed `Beleg` as a JWS signature token.|
|QR|string|false|none|The portion of the `JWS` token to be used for generating QR codes.|
|QR-Link|string(url)|false|none|A hyperlink that retrieves the `QR` data.|
|Registrierkasse-UUID|string(uuid)|false|none|The `_uuid` of the `Registrierkasse` that has issued this `Beleg`.|
|Signaturerstellungseinheit-UUID|string(uuid)|false|none|The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`.|
|_href|string(url)|false|none|URL of the particular `Beleg` instance.|
|_uuid|string|false|none|Unique ID of the particular `Beleg` instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|Beleg-Typen|Belegkreisinitialisierung|
|Beleg-Typen|Kassenbericht|
|Beleg-Typen|Monatsabschluss|
|Beleg-Typen|Startbeleg|
|Beleg-Typen|Storno|
|Beleg-Typen|Systembeleg|
|Beleg-Typen|Training|

<h2 id="tocS_Belegdaten">Belegdaten</h2>
<!-- backwards compatibility -->
<a id="schemabelegdaten"></a>
<a id="schema_Belegdaten"></a>
<a id="tocSbelegdaten"></a>
<a id="tocsbelegdaten"></a>

```json
{
  "Externer-Beleg-Belegkreis": "string",
  "Externer-Beleg-Bezeichnung": "string",
  "Externer-Beleg-Referenz": "string",
  "Kunde": "string",
  "Notizen": [
    "string"
  ],
  "Posten": [
    {
      "Bezeichnung": "string",
      "BruttoBetrag": 0,
      "Externer-Beleg-Belegkreis": "string",
      "Externer-Beleg-Bezeichnung": "string",
      "Externer-Beleg-Referenz": "string",
      "Menge": 0,
      "NettoBetrag": 0,
      "Satz": "NORMAL"
    }
  ],
  "Rabatte": [
    {
      "Betrag-Brutto": 0,
      "Betrag-Netto": 0,
      "Bezeichnung": "string",
      "Satz": "NORMAL"
    }
  ],
  "Storno": true,
  "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Storno-Text": "string",
  "Training": true,
  "Unternehmen-Adresse1": "string",
  "Unternehmen-Adresse2": "string",
  "Unternehmen-Fusszeile": "string",
  "Unternehmen-ID": "string",
  "Unternehmen-ID-Typ": "steuernummer",
  "Unternehmen-Kopfzeile": "string",
  "Unternehmen-Name": "string",
  "Unternehmen-Ort": "string",
  "Unternehmen-PLZ": "string",
  "Zahlungen": [
    {
      "Betrag": 0,
      "Bezeichnung": "string",
      "Referenz": "string"
    }
  ]
}
```

The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Externer-Beleg-Belegkreis|string|false|none|none|
|Externer-Beleg-Bezeichnung|string|false|none|none|
|Externer-Beleg-Referenz|string|false|none|none|
|Kunde|string|false|none|none|
|Notizen|[string]|false|none|none|
|Posten|[[Posten](#schemaposten)]|false|none|none|
|Rabatte|[[Rabatt](#schemarabatt)]|false|none|none|
|Storno|boolean|false|none|Storno?|
|Storno-Beleg-UUID|string(uuid)|false|none|The `Beleg-UUID` property of the `Beleg` to be cancelled|
|Storno-Text|string|false|none|none|
|Training|boolean|false|none|Training?|
|Unternehmen-Adresse1|string|false|none|none|
|Unternehmen-Adresse2|string|false|none|none|
|Unternehmen-Fusszeile|string|false|none|none|
|Unternehmen-ID|string|false|none|none|
|Unternehmen-ID-Typ|string|false|none|none|
|Unternehmen-Kopfzeile|string|false|none|none|
|Unternehmen-Name|string|false|none|none|
|Unternehmen-Ort|string|false|none|none|
|Unternehmen-PLZ|string|false|none|none|
|Zahlungen|[[Zahlung](#schemazahlung)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Unternehmen-ID-Typ|steuernummer|
|Unternehmen-ID-Typ|uid|
|Unternehmen-ID-Typ|gln|

<h2 id="tocS_Belege">Belege</h2>
<!-- backwards compatibility -->
<a id="schemabelege"></a>
<a id="schema_Belege"></a>
<a id="tocSbelege"></a>
<a id="tocsbelege"></a>

```json
{
  "Belege": [
    {
      "Beleg-Codes": [
        "string"
      ],
      "Beleg-Typen": [
        "Belegkreisinitialisierung"
      ],
      "Belegdaten": {
        "Beleg-Datum-Uhrzeit": "string",
        "Belegnummer": "string",
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Betrag-Satz-Besonders-Brutto": 0,
        "Betrag-Satz-Besonders-Netto": 0,
        "Betrag-Satz-Ermaessigt-1-Brutto": 0,
        "Betrag-Satz-Ermaessigt-1-Netto": 0,
        "Betrag-Satz-Ermaessigt-2-Brutto": 0,
        "Betrag-Satz-Ermaessigt-2-Netto": 0,
        "Betrag-Satz-Normal-Brutto": 0,
        "Betrag-Satz-Normal-Netto": 0,
        "Betrag-Satz-Null-Brutto": 0,
        "Betrag-Satz-Null-Netto": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Kassen-ID": "string",
        "Kunde": "string",
        "Notizen": [
          "string"
        ],
        "Posten": [
          {
            "Bezeichnung": "string",
            "BruttoBetrag": 0,
            "Externer-Beleg-Belegkreis": "string",
            "Externer-Beleg-Bezeichnung": "string",
            "Externer-Beleg-Referenz": "string",
            "Menge": 0,
            "NettoBetrag": 0,
            "Satz": "NORMAL"
          }
        ],
        "Rabatte": [
          {
            "Betrag-Brutto": 0,
            "Betrag-Netto": 0,
            "Bezeichnung": "string",
            "Satz": "NORMAL"
          }
        ],
        "Storno": true,
        "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "Storno-Text": "string",
        "Training": true,
        "Unternehmen-Adresse1": "string",
        "Unternehmen-Adresse2": "string",
        "Unternehmen-Fusszeile": "string",
        "Unternehmen-ID": "string",
        "Unternehmen-ID-Typ": "steuernummer",
        "Unternehmen-Kopfzeile": "string",
        "Unternehmen-Name": "string",
        "Unternehmen-Ort": "string",
        "Unternehmen-PLZ": "string",
        "Zahlungen": [
          {
            "Betrag": 0,
            "Bezeichnung": "string",
            "Referenz": "string"
          }
        ],
        "Zertifikat-Seriennummer": "string"
      },
      "JWS": "string",
      "QR": "string",
      "QR-Link": "http://example.com",
      "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "_href": "http://example.com",
      "_uuid": "string"
    }
  ],
  "Belege-Gruppe": [
    {
      "Belege-kompakt": [
        "string"
      ],
      "Signaturzertifikat": "string",
      "Zertifizierungsstellen": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Belege|[[Beleg](#schemabeleg)]|false|none|none|
|Belege-Gruppe|[object]|false|none|none|

<h2 id="tocS_Belegformat">Belegformat</h2>
<!-- backwards compatibility -->
<a id="schemabelegformat"></a>
<a id="schema_Belegformat"></a>
<a id="tocSbelegformat"></a>
<a id="tocsbelegformat"></a>

```json
{
  "Belege": [
    {
      "Beleg-Codes": [
        "string"
      ],
      "Beleg-Typen": [
        "Belegkreisinitialisierung"
      ],
      "Belegdaten": {
        "Beleg-Datum-Uhrzeit": "string",
        "Belegnummer": "string",
        "Betrag-Brutto": 0,
        "Betrag-Netto": 0,
        "Betrag-Satz-Besonders-Brutto": 0,
        "Betrag-Satz-Besonders-Netto": 0,
        "Betrag-Satz-Ermaessigt-1-Brutto": 0,
        "Betrag-Satz-Ermaessigt-1-Netto": 0,
        "Betrag-Satz-Ermaessigt-2-Brutto": 0,
        "Betrag-Satz-Ermaessigt-2-Netto": 0,
        "Betrag-Satz-Normal-Brutto": 0,
        "Betrag-Satz-Normal-Netto": 0,
        "Betrag-Satz-Null-Brutto": 0,
        "Betrag-Satz-Null-Netto": 0,
        "Externer-Beleg-Belegkreis": "string",
        "Externer-Beleg-Bezeichnung": "string",
        "Externer-Beleg-Referenz": "string",
        "Kassen-ID": "string",
        "Kunde": "string",
        "Notizen": [
          "string"
        ],
        "Posten": [
          {
            "Bezeichnung": "string",
            "BruttoBetrag": 0,
            "Externer-Beleg-Belegkreis": "string",
            "Externer-Beleg-Bezeichnung": "string",
            "Externer-Beleg-Referenz": "string",
            "Menge": 0,
            "NettoBetrag": 0,
            "Satz": "NORMAL"
          }
        ],
        "Rabatte": [
          {
            "Betrag-Brutto": 0,
            "Betrag-Netto": 0,
            "Bezeichnung": "string",
            "Satz": "NORMAL"
          }
        ],
        "Storno": true,
        "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "Storno-Text": "string",
        "Training": true,
        "Unternehmen-Adresse1": "string",
        "Unternehmen-Adresse2": "string",
        "Unternehmen-Fusszeile": "string",
        "Unternehmen-ID": "string",
        "Unternehmen-ID-Typ": "steuernummer",
        "Unternehmen-Kopfzeile": "string",
        "Unternehmen-Name": "string",
        "Unternehmen-Ort": "string",
        "Unternehmen-PLZ": "string",
        "Zahlungen": [
          {
            "Betrag": 0,
            "Bezeichnung": "string",
            "Referenz": "string"
          }
        ],
        "Zertifikat-Seriennummer": "string"
      },
      "JWS": "string",
      "QR": "string",
      "QR-Link": "http://example.com",
      "Registrierkasse-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "_href": "http://example.com",
      "_uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Belege|[[Beleg](#schemabeleg)]|false|none|none|

<h2 id="tocS_Exportformat">Exportformat</h2>
<!-- backwards compatibility -->
<a id="schemaexportformat"></a>
<a id="schema_Exportformat"></a>
<a id="tocSexportformat"></a>
<a id="tocsexportformat"></a>

```json
{
  "Belege-Gruppe": [
    {
      "Belege-kompakt": [
        "string"
      ],
      "Signaturzertifikat": "string",
      "Zertifizierungsstellen": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Belege-Gruppe|[object]|false|none|none|

<h2 id="tocS_Monatsbeleg">Monatsbeleg</h2>
<!-- backwards compatibility -->
<a id="schemamonatsbeleg"></a>
<a id="schema_Monatsbeleg"></a>
<a id="tocSmonatsbeleg"></a>
<a id="tocsmonatsbeleg"></a>

```json
{
  "Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "FON-Geprueft-Datum-Uhrzeit": "string",
  "FON-Geprueft-Erfolgreich": true,
  "Jahr": 0,
  "Monat": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Beleg-UUID|string(uuid)|false|none|none|
|FON-Geprueft-Datum-Uhrzeit|string(iso8601-date-time)|false|none|none|
|FON-Geprueft-Erfolgreich|boolean|false|none|none|
|Jahr|integer|false|none|none|
|Monat|integer|false|none|none|

<h2 id="tocS_Posten">Posten</h2>
<!-- backwards compatibility -->
<a id="schemaposten"></a>
<a id="schema_Posten"></a>
<a id="tocSposten"></a>
<a id="tocsposten"></a>

```json
{
  "Bezeichnung": "string",
  "BruttoBetrag": 0,
  "Externer-Beleg-Belegkreis": "string",
  "Externer-Beleg-Bezeichnung": "string",
  "Externer-Beleg-Referenz": "string",
  "Menge": 0,
  "NettoBetrag": 0,
  "Satz": "NORMAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bezeichnung|string|true|none|none|
|BruttoBetrag|integer|true|none|The amount in cents|
|Externer-Beleg-Belegkreis|string|false|none|none|
|Externer-Beleg-Bezeichnung|string|false|none|none|
|Externer-Beleg-Referenz|string|false|none|none|
|Menge|integer|true|none|none|
|NettoBetrag|integer|true|none|The amount in cents|
|Satz|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Satz|NORMAL|
|Satz|ERMAESSIGT1|
|Satz|ERMAESSIGT2|
|Satz|BESONDERS|
|Satz|NULL|

<h2 id="tocS_Rabatt">Rabatt</h2>
<!-- backwards compatibility -->
<a id="schemarabatt"></a>
<a id="schema_Rabatt"></a>
<a id="tocSrabatt"></a>
<a id="tocsrabatt"></a>

```json
{
  "Betrag-Brutto": 0,
  "Betrag-Netto": 0,
  "Bezeichnung": "string",
  "Satz": "NORMAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Betrag-Brutto|integer|true|none|The amount in cents|
|Betrag-Netto|integer|true|none|The amount in cents|
|Bezeichnung|string|true|none|none|
|Satz|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Satz|NORMAL|
|Satz|ERMAESSIGT1|
|Satz|ERMAESSIGT2|
|Satz|BESONDERS|
|Satz|NULL|

<h2 id="tocS_Registrierkasse">Registrierkasse</h2>
<!-- backwards compatibility -->
<a id="schemaregistrierkasse"></a>
<a id="schema_Registrierkasse"></a>
<a id="tocSregistrierkasse"></a>
<a id="tocsregistrierkasse"></a>

```json
{
  "Benutzerschluessel": "string",
  "Kassen-ID": "string",
  "Signaturerstellungseinheit-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "_href": "http://example.com",
  "_uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Benutzerschluessel|string(base64)|false|none|The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler".|
|Kassen-ID|string|false|none|The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`.|
|Signaturerstellungseinheit-UUID|string(uuid)|false|none|The `_uuid` of the paired "Signaturerstellungseinheit".|
|_href|string(url)|false|none|URL of the particular `Registrierkasse` instance.|
|_uuid|string|false|none|Unique ID of the particular `Registrierkasse` instance.|

<h2 id="tocS_SignierteBelegdaten">SignierteBelegdaten</h2>
<!-- backwards compatibility -->
<a id="schemasigniertebelegdaten"></a>
<a id="schema_SignierteBelegdaten"></a>
<a id="tocSsigniertebelegdaten"></a>
<a id="tocssigniertebelegdaten"></a>

```json
{
  "Beleg-Datum-Uhrzeit": "string",
  "Belegnummer": "string",
  "Betrag-Brutto": 0,
  "Betrag-Netto": 0,
  "Betrag-Satz-Besonders-Brutto": 0,
  "Betrag-Satz-Besonders-Netto": 0,
  "Betrag-Satz-Ermaessigt-1-Brutto": 0,
  "Betrag-Satz-Ermaessigt-1-Netto": 0,
  "Betrag-Satz-Ermaessigt-2-Brutto": 0,
  "Betrag-Satz-Ermaessigt-2-Netto": 0,
  "Betrag-Satz-Normal-Brutto": 0,
  "Betrag-Satz-Normal-Netto": 0,
  "Betrag-Satz-Null-Brutto": 0,
  "Betrag-Satz-Null-Netto": 0,
  "Externer-Beleg-Belegkreis": "string",
  "Externer-Beleg-Bezeichnung": "string",
  "Externer-Beleg-Referenz": "string",
  "Kassen-ID": "string",
  "Kunde": "string",
  "Notizen": [
    "string"
  ],
  "Posten": [
    {
      "Bezeichnung": "string",
      "BruttoBetrag": 0,
      "Externer-Beleg-Belegkreis": "string",
      "Externer-Beleg-Bezeichnung": "string",
      "Externer-Beleg-Referenz": "string",
      "Menge": 0,
      "NettoBetrag": 0,
      "Satz": "NORMAL"
    }
  ],
  "Rabatte": [
    {
      "Betrag-Brutto": 0,
      "Betrag-Netto": 0,
      "Bezeichnung": "string",
      "Satz": "NORMAL"
    }
  ],
  "Storno": true,
  "Storno-Beleg-UUID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "Storno-Text": "string",
  "Training": true,
  "Unternehmen-Adresse1": "string",
  "Unternehmen-Adresse2": "string",
  "Unternehmen-Fusszeile": "string",
  "Unternehmen-ID": "string",
  "Unternehmen-ID-Typ": "steuernummer",
  "Unternehmen-Kopfzeile": "string",
  "Unternehmen-Name": "string",
  "Unternehmen-Ort": "string",
  "Unternehmen-PLZ": "string",
  "Zahlungen": [
    {
      "Betrag": 0,
      "Bezeichnung": "string",
      "Referenz": "string"
    }
  ],
  "Zertifikat-Seriennummer": "string"
}
```

The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Beleg-Datum-Uhrzeit|string|false|none|none|
|Belegnummer|string|false|none|none|
|Betrag-Brutto|integer|false|none|none|
|Betrag-Netto|integer|false|none|none|
|Betrag-Satz-Besonders-Brutto|integer|false|none|The total amount in cents|
|Betrag-Satz-Besonders-Netto|integer|false|none|The total amount in cents|
|Betrag-Satz-Ermaessigt-1-Brutto|integer|false|none|The total amount in cents|
|Betrag-Satz-Ermaessigt-1-Netto|integer|false|none|The total amount in cents|
|Betrag-Satz-Ermaessigt-2-Brutto|integer|false|none|The total amount in cents|
|Betrag-Satz-Ermaessigt-2-Netto|integer|false|none|The total amount in cents|
|Betrag-Satz-Normal-Brutto|integer|false|none|The total amount in cents|
|Betrag-Satz-Normal-Netto|integer|false|none|The total amount in cents|
|Betrag-Satz-Null-Brutto|integer|false|none|The total amount in cents|
|Betrag-Satz-Null-Netto|integer|false|none|The total amount in cents|
|Externer-Beleg-Belegkreis|string|false|none|none|
|Externer-Beleg-Bezeichnung|string|false|none|none|
|Externer-Beleg-Referenz|string|false|none|none|
|Kassen-ID|string|false|none|none|
|Kunde|string|false|none|none|
|Notizen|[string]|false|none|none|
|Posten|[[Posten](#schemaposten)]|false|none|none|
|Rabatte|[[Rabatt](#schemarabatt)]|false|none|none|
|Storno|boolean|false|none|Storno?|
|Storno-Beleg-UUID|string(uuid)|false|none|The `Beleg-UUID` property of the `Beleg` to be cancelled|
|Storno-Text|string|false|none|none|
|Training|boolean|false|none|Training?|
|Unternehmen-Adresse1|string|false|none|none|
|Unternehmen-Adresse2|string|false|none|none|
|Unternehmen-Fusszeile|string|false|none|none|
|Unternehmen-ID|string|false|none|none|
|Unternehmen-ID-Typ|string|false|none|none|
|Unternehmen-Kopfzeile|string|false|none|none|
|Unternehmen-Name|string|false|none|none|
|Unternehmen-Ort|string|false|none|none|
|Unternehmen-PLZ|string|false|none|none|
|Zahlungen|[[Zahlung](#schemazahlung)]|false|none|none|
|Zertifikat-Seriennummer|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Unternehmen-ID-Typ|steuernummer|
|Unternehmen-ID-Typ|uid|
|Unternehmen-ID-Typ|gln|

<h2 id="tocS_Zahlung">Zahlung</h2>
<!-- backwards compatibility -->
<a id="schemazahlung"></a>
<a id="schema_Zahlung"></a>
<a id="tocSzahlung"></a>
<a id="tocszahlung"></a>

```json
{
  "Betrag": 0,
  "Bezeichnung": "string",
  "Referenz": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Betrag|integer|true|none|The amount in cents|
|Bezeichnung|string|true|none|none|
|Referenz|string|false|none|none|
