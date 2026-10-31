<h1 id="namsor-api-v2">NamSor API v2 v2.0.24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it!

Base URLs:

* <a href="https://v2.namsor.com/NamSorAPIv2">https://v2.namsor.com/NamSorAPIv2</a> - namsor_v2

Email: <a href="mailto:contact@namsor.com">Namsor SAS</a> 
Web: <a href="http://www.namsor.com/">Namsor SAS</a> 
License: <a href="https://v2.namsor.com/NamSorAPIv2/assets/pdf/201803_NamSor_API_Terms_v007.pdf">NamSorAPI_Lic_v0.0.7</a>

<a href="https://github.com/namsor">NamSor API client SDKs v2 for Java, Python</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-API-KEY**, in: header. api_key required

<h1 id="namsor-api-v2-personal">personal</h1>

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

## [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

<a id="opIdcorridor"></a>

> Code samples

```bash
curl https://example.com/api2/json/corridor/string/string/string/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}`

<h3 id="uses-20-units-per-name-couple-infer-several-classifications-for-a-cross-border-interaction-between-names-ex-remit-travel-intl-com-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryIso2From|path|string|true|none|
|firstNameFrom|path|string|true|none|
|lastNameFrom|path|string|true|none|
|countryIso2To|path|string|true|none|
|firstNameTo|path|string|true|none|
|lastNameTo|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "FirstLastNameDiasporaedOut": {
    "countryIso2": "string",
    "ethnicitiesTop": [
      "string"
    ],
    "ethnicity": "Chinese",
    "ethnicityAlt": "Japanese",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "lifted": true,
    "probabilityAltCalibrated": -1,
    "probabilityCalibrated": -1,
    "score": 0,
    "script": "string"
  },
  "FirstLastNameGenderedOut": {
    "firstName": "string",
    "genderScale": -1,
    "id": "string",
    "lastName": "string",
    "likelyGender": "male",
    "probabilityCalibrated": -1,
    "score": 0,
    "script": "string"
  },
  "FirstLastNameOriginedOut": {
    "countriesOriginTop": [
      "string"
    ],
    "countryOrigin": "string",
    "countryOriginAlt": "string",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "probabilityAltCalibrated": -1,
    "probabilityCalibrated": -1,
    "regionOrigin": "string",
    "score": 0,
    "script": "string",
    "subRegionOrigin": "string",
    "topRegionOrigin": "string"
  },
  "id": "string",
  "script": "string"
}
```

<h3 id="uses-20-units-per-name-couple-infer-several-classifications-for-a-cross-border-interaction-between-names-ex-remit-travel-intl-com-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Two classified names.|[CorridorOut](#schemacorridorout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

<a id="opIdcorridorBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/corridorBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "corridorFromTo": [
      {
        "firstLastNameGeoFrom": {
          "countryIso2": "string",
          "firstName": "string",
          "id": "string",
          "lastName": "string"
        },
        "firstLastNameGeoTo": {
          "countryIso2": "string",
          "firstName": "string",
          "id": "string",
          "lastName": "string"
        },
        "id": "string"
      }
    ],
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/corridorBatch`

> Body parameter

```json
{
  "corridorFromTo": [
    {
      "firstLastNameGeoFrom": {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "firstLastNameGeoTo": {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "id": "string"
    }
  ],
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="uses-20-units-per-name-pair-infer-several-classifications-for-up-to-100-cross-border-interaction-between-names-ex-remit-travel-intl-com-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchCorridorIn](#schemabatchcorridorin)|false|A list of name pairs, with country code (nameFrom -> nameTo).|
|» corridorFromTo|body|[[CorridorIn](#schemacorridorin)]|false|none|
|» facts|body|[[FactIn](#schemafactin)]|false|none|

> Example responses

> 200 Response

```json
{
  "corridorFromTo": [
    {
      "FirstLastNameDiasporaedOut": {
        "countryIso2": "string",
        "ethnicitiesTop": [
          "string"
        ],
        "ethnicity": "Chinese",
        "ethnicityAlt": "Japanese",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "lifted": true,
        "probabilityAltCalibrated": -1,
        "probabilityCalibrated": -1,
        "score": 0,
        "script": "string"
      },
      "FirstLastNameGenderedOut": {
        "firstName": "string",
        "genderScale": -1,
        "id": "string",
        "lastName": "string",
        "likelyGender": "male",
        "probabilityCalibrated": -1,
        "score": 0,
        "script": "string"
      },
      "FirstLastNameOriginedOut": {
        "countriesOriginTop": [
          "string"
        ],
        "countryOrigin": "string",
        "countryOriginAlt": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "probabilityAltCalibrated": -1,
        "probabilityCalibrated": -1,
        "regionOrigin": "string",
        "score": 0,
        "script": "string",
        "subRegionOrigin": "string",
        "topRegionOrigin": "string"
      },
      "id": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="uses-20-units-per-name-pair-infer-several-classifications-for-up-to-100-cross-border-interaction-between-names-ex-remit-travel-intl-com-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of classified name pairs.|[BatchCorridorOut](#schemabatchcorridorout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

<a id="opIdcountry"></a>

> Code samples

```bash
curl https://example.com/api2/json/country/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/country/{personalNameFull}`

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-residence-of-a-personal-full-name-or-one-surname-assumes-names-as-they-are-in-the-country-of-residence-or-the-country-of-origin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personalNameFull|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countriesTop": [
    "string"
  ],
  "country": "string",
  "countryAlt": "string",
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "region": "string",
  "score": 0,
  "script": "string",
  "subRegion": "string",
  "topRegion": "string"
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-residence-of-a-personal-full-name-or-one-surname-assumes-names-as-they-are-in-the-country-of-residence-or-the-country-of-origin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[PersonalNameGeoOut](#schemapersonalnamegeoout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

<a id="opIdcountryBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/countryBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/countryBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-residence-of-up-to-100-personal-full-names-or-surnames-assumes-names-as-they-are-in-the-country-of-residence-or-the-country-of-origin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "countriesTop": [
        "string"
      ],
      "country": "string",
      "countryAlt": "string",
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "region": "string",
      "score": 0,
      "script": "string",
      "subRegion": "string",
      "topRegion": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-residence-of-up-to-100-personal-full-names-or-surnames-assumes-names-as-they-are-in-the-country-of-residence-or-the-country-of-origin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchPersonalNameGeoOut](#schemabatchpersonalnamegeoout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

<a id="opIddiaspora"></a>

> Code samples

```bash
curl https://example.com/api2/json/diaspora/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/diaspora/{countryIso2}/{firstName}/{lastName}`

<h3 id="uses-20-units-per-name-infer-the-likely-ethnicitydiaspora-of-a-personal-name-given-a-country-of-residence-iso2-code-ex-us-ca-au-nz-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryIso2|path|string|true|none|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "ethnicitiesTop": [
    "string"
  ],
  "ethnicity": "Chinese",
  "ethnicityAlt": "Japanese",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "lifted": true,
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-20-units-per-name-infer-the-likely-ethnicitydiaspora-of-a-personal-name-given-a-country-of-residence-iso2-code-ex-us-ca-au-nz-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A diaspora / ethnicity for given name and geography.|[FirstLastNameDiasporaedOut](#schemafirstlastnamediasporaedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

<a id="opIddiasporaBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/diasporaBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/diasporaBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="uses-20-units-per-name-infer-the-likely-ethnicitydiaspora-of-up-to-100-personal-names-given-a-country-of-residence-iso2-code-ex-us-ca-au-nz-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoIn](#schemabatchfirstlastnamegeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "countryIso2": "string",
      "ethnicitiesTop": [
        "string"
      ],
      "ethnicity": "Chinese",
      "ethnicityAlt": "Japanese",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "lifted": true,
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-20-units-per-name-infer-the-likely-ethnicitydiaspora-of-up-to-100-personal-names-given-a-country-of-residence-iso2-code-ex-us-ca-au-nz-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of diaspora / ethnicity given a name and residency.|[BatchFirstLastNameDiasporaedOut](#schemabatchfirstlastnamediasporaedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.

<a id="opIdgender"></a>

> Code samples

```bash
curl https://example.com/api2/json/gender/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/gender/{firstName}`

<h3 id="infer-the-likely-gender-of-a-just-a-fiven-name-assuming-default-us-local-context-please-use-preferably-full-names-and-local-geographic-context-for-better-accuracy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-just-a-fiven-name-assuming-default-us-local-context-please-use-preferably-full-names-and-local-geographic-context-for-better-accuracy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a name.

<a id="opIdgender_1"></a>

> Code samples

```bash
curl https://example.com/api2/json/gender/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/gender/{firstName}/{lastName}`

<h3 id="infer-the-likely-gender-of-a-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 names, detecting automatically the cultural context.

<a id="opIdgenderBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/genderBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-names-detecting-automatically-the-cultural-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "genderScale": -1,
      "id": "string",
      "lastName": "string",
      "likelyGender": "male",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-names-detecting-automatically-the-cultural-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a full name, ex. John H. Smith

<a id="opIdgenderFull"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderFull/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderFull/{fullName}`

<h3 id="infer-the-likely-gender-of-a-full-name-ex-john-h-smith-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fullName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "genderScale": -1,
  "id": "string",
  "likelyGender": "male",
  "name": "string",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-full-name-ex-john-h-smith-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

<a id="opIdgenderFullBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderFullBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/genderFullBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-detecting-automatically-the-cultural-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "genderScale": -1,
      "id": "string",
      "likelyGender": "male",
      "name": "string",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-detecting-automatically-the-cultural-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a full name, given a local context (ISO2 country code).

<a id="opIdgenderFullGeo"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderFullGeo/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderFullGeo/{fullName}/{countryIso2}`

<h3 id="infer-the-likely-gender-of-a-full-name-given-a-local-context-iso2-country-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fullName|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "genderScale": -1,
  "id": "string",
  "likelyGender": "male",
  "name": "string",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-full-name-given-a-local-context-iso2-country-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

<a id="opIdgenderFullGeoBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderFullGeoBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/genderFullGeoBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-with-a-given-cultural-context-country-iso2-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameGeoIn](#schemabatchpersonalnamegeoin)|false|A list of personal names, with a country ISO2 code|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameGeoIn](#schemapersonalnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "genderScale": -1,
      "id": "string",
      "likelyGender": "male",
      "name": "string",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-with-a-given-cultural-context-country-iso2-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a name, given a local context (ISO2 country code).

<a id="opIdgenderGeo"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderGeo/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}`

<h3 id="infer-the-likely-gender-of-a-name-given-a-local-context-iso2-country-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-name-given-a-local-context-iso2-country-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

<a id="opIdgenderGeoBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderGeoBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/genderGeoBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-names-each-given-a-local-context-iso2-country-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoIn](#schemabatchfirstlastnamegeoin)|false|A list of names, with country code.|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "genderScale": -1,
      "id": "string",
      "lastName": "string",
      "likelyGender": "male",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-names-each-given-a-local-context-iso2-country-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

<a id="opIdorigin"></a>

> Code samples

```bash
curl https://example.com/api2/json/origin/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/origin/{firstName}/{lastName}`

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-origin-of-a-personal-name-assumes-names-as-they-are-in-the-country-of-origin-for-us-ca-au-nz-and-other-melting-pots-use-diaspora-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countriesOriginTop": [
    "string"
  ],
  "countryOrigin": "string",
  "countryOriginAlt": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "regionOrigin": "string",
  "score": 0,
  "script": "string",
  "subRegionOrigin": "string",
  "topRegionOrigin": "string"
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-origin-of-a-personal-name-assumes-names-as-they-are-in-the-country-of-origin-for-us-ca-au-nz-and-other-melting-pots-use-diaspora-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

<a id="opIdoriginBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/originBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/originBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-origin-of-up-to-100-names-detecting-automatically-the-cultural-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "countriesOriginTop": [
        "string"
      ],
      "countryOrigin": "string",
      "countryOriginAlt": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "regionOrigin": "string",
      "score": 0,
      "script": "string",
      "subRegionOrigin": "string",
      "topRegionOrigin": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-country-of-origin-of-up-to-100-names-detecting-automatically-the-cultural-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNameOriginedOut](#schemabatchfirstlastnameoriginedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

<a id="opIdparseName"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseName/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/parseName/{nameFull}`

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameFull|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

<a id="opIdparseNameGeo"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseName/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/parseName/{nameFull}/{countryIso2}`

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-for-better-accuracy-provide-a-geographic-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameFull|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-for-better-accuracy-provide-a-geographic-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

<a id="opIdparseNameBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/parseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision.

<a id="opIdparseNameGeoBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseNameGeoBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/parseNameGeoBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-giving-a-local-context-improves-precision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameGeoIn](#schemabatchpersonalnamegeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameGeoIn](#schemapersonalnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-john-smith-or-smith-john-or-smith-john-giving-a-local-context-improves-precision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).

<a id="opIdreligionFull"></a>

> Code samples

```bash
curl https://example.com/api2/json/religionFull/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/religionFull/{countryIso2}/{subDivisionIso31662}/{personalNameFull}`

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-a-personal-full-name-nb-only-for-india-as-of-current-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryIso2|path|string|true|none|
|subDivisionIso31662|path|string|true|none|
|personalNameFull|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "religion": "string",
  "religionAlt": "string",
  "religionsTop": [
    "string"
  ],
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-a-personal-full-name-nb-only-for-india-as-of-current-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A religion-coded name.|[PersonalNameReligionedOut](#schemapersonalnamereligionedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.

<a id="opIdreligionFullBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/religionFullBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "id": "string",
        "name": "string",
        "subdivisionIso": "string"
      }
    ]
  }'
```

`POST /api2/json/religionFullBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string",
      "subdivisionIso": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-up-to-100-personal-full-names-nb-only-for-india-as-of-currently-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameGeoSubdivisionIn](#schemabatchpersonalnamegeosubdivisionin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameGeoSubdivisionIn](#schemapersonalnamegeosubdivisionin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "religion": "string",
      "religionAlt": "string",
      "religionsTop": [
        "string"
      ],
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-up-to-100-personal-full-names-nb-only-for-india-as-of-currently-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of religion-coded names.|[BatchPersonalNameReligionedOut](#schemabatchpersonalnamereligionedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

<a id="opIdsubclassification"></a>

> Code samples

```bash
curl https://example.com/api2/json/subclassification/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/subclassification/{countryIso2}/{firstName}/{lastName}`

<h3 id="uses-10-units-per-name-infer-the-likely-origin-of-a-name-at-a-country-subclassification-level-state-or-regeion-initially-this-is-only-supported-for-india-iso2-code-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryIso2|path|string|true|none|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string",
  "subClassification": "string",
  "subClassificationAlt": "string",
  "subclassificationTop": [
    "string"
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-origin-of-a-name-at-a-country-subclassification-level-state-or-regeion-initially-this-is-only-supported-for-india-iso2-code-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A classified name at a sub-country level.|[FirstLastNameGeoSubclassificationOut](#schemafirstlastnamegeosubclassificationout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

<a id="opIdsubclassificationBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/subclassificationBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/subclassificationBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-origin-of-a-list-of-up-to-100-names-at-a-country-subclassification-level-state-or-regeion-initially-this-is-only-supported-for-india-iso2-code-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoIn](#schemabatchfirstlastnamegeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string",
      "subClassification": "string",
      "subClassificationAlt": "string",
      "subclassificationTop": [
        "string"
      ]
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-origin-of-a-list-of-up-to-100-names-at-a-country-subclassification-level-state-or-regeion-initially-this-is-only-supported-for-india-iso2-code-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of classified names at a sub-country level.|[BatchFirstLastNameGeoSubclassificationOut](#schemabatchfirstlastnamegeosubclassificationout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino), A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<a id="opIdusRaceEthnicity"></a>

> Code samples

```bash
curl https://example.com/api2/json/usRaceEthnicity/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/usRaceEthnicity/{firstName}/{lastName}`

<h3 id="uses-10-units-per-name-infer-a-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "raceEthnicitiesTop": [
    "string"
  ],
  "raceEthnicity": "W_NL",
  "raceEthnicityAlt": "W_NL",
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-10-units-per-name-infer-a-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally|[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino), A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<a id="opIdusRaceEthnicityBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/usRaceEthnicityBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/usRaceEthnicityBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-up-to-100-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoIn](#schemabatchfirstlastnamegeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "raceEthnicitiesTop": [
        "string"
      ],
      "raceEthnicity": "W_NL",
      "raceEthnicityAlt": "W_NL",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-up-to-100-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally|[BatchFirstLastNameUSRaceEthnicityOut](#schemabatchfirstlastnameusraceethnicityout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino), A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<a id="opIdusRaceEthnicityZIP5"></a>

> Code samples

```bash
curl https://example.com/api2/json/usRaceEthnicityZIP5/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}`

<h3 id="uses-10-units-per-name-infer-a-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-using-optional-zip5-code-info-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|zip5Code|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "raceEthnicitiesTop": [
    "string"
  ],
  "raceEthnicity": "W_NL",
  "raceEthnicityAlt": "W_NL",
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-10-units-per-name-infer-a-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-using-optional-zip5-code-info-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally|[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino), A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<a id="opIdusZipRaceEthnicityBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/usZipRaceEthnicityBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "zipCode": "string"
      }
    ]
  }'
```

`POST /api2/json/usZipRaceEthnicityBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "zipCode": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-up-to-100-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-with-optional-zip-code-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoZippedIn](#schemabatchfirstlastnamegeozippedin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoZippedIn](#schemafirstlastnamegeozippedin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "raceEthnicitiesTop": [
        "string"
      ],
      "raceEthnicity": "W_NL",
      "raceEthnicityAlt": "W_NL",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-up-to-100-us-residents-likely-raceethnicity-according-to-us-census-taxonomy-with-optional-zip-code-output-is-wnl-white-non-latino-hl-hispano-latino-a-asian-non-latino-bnl-black-non-latino-optionally-add-header-x-option-usraceethnicity-taxonomy-usraceethnicity-6classes-for-two-additional-classes-aian-american-indian-or-alaskan-native-and-pi-pacific-islander-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally|[BatchFirstLastNameUSRaceEthnicityOut](#schemabatchfirstlastnameusraceethnicityout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-social">social</h1>

Social media and pseudonyms

## [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

<a id="opIdphoneCode"></a>

> Code samples

```bash
curl https://example.com/api2/json/phoneCode/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}`

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "internationalPhoneNumberVerified": "string",
  "lastName": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneCountryCode": 0,
  "phoneCountryCodeAlt": 0,
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "phoneCountryIso2Verified": "string",
  "phoneNumber": "string",
  "score": 0,
  "script": "string",
  "verified": true
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

<a id="opIdphoneCodeBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/phoneCodeBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNamesWithPhoneNumbers": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phoneNumber": "string"
      }
    ]
  }'
```

`POST /api2/json/phoneCodeBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNamesWithPhoneNumbers": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phoneNumber": "string"
    }
  ]
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-of-up-to-100-personal-names-detecting-automatically-the-local-context-given-a-name-and-formatted-unformatted-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNamePhoneNumberIn](#schemabatchfirstlastnamephonenumberin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNamesWithPhoneNumbers|body|[[FirstLastNamePhoneNumberIn](#schemafirstlastnamephonenumberin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "internationalPhoneNumberVerified": "string",
      "lastName": "string",
      "originCountryIso2": "string",
      "originCountryIso2Alt": "string",
      "phoneCountryCode": 0,
      "phoneCountryCodeAlt": 0,
      "phoneCountryIso2": "string",
      "phoneCountryIso2Alt": "string",
      "phoneCountryIso2Verified": "string",
      "phoneNumber": "string",
      "score": 0,
      "script": "string",
      "verified": true
    }
  ]
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-of-up-to-100-personal-names-detecting-automatically-the-local-context-given-a-name-and-formatted-unformatted-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNamePhoneCodedOut](#schemabatchfirstlastnamephonecodedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

<a id="opIdphoneCodeGeo"></a>

> Code samples

```bash
curl https://example.com/api2/json/phoneCodeGeo/string/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}`

<h3 id="uses-11-units-per-name-infer-the-likely-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-with-a-local-context-iso2-country-of-residence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "internationalPhoneNumberVerified": "string",
  "lastName": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneCountryCode": 0,
  "phoneCountryCodeAlt": 0,
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "phoneCountryIso2Verified": "string",
  "phoneNumber": "string",
  "score": 0,
  "script": "string",
  "verified": true
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-with-a-local-context-iso2-country-of-residence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

<a id="opIdphoneCodeGeoBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/phoneCodeGeoBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNamesWithPhoneNumbers": [
      {
        "countryIso2": "string",
        "countryIso2Alt": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phoneNumber": "string"
      }
    ]
  }'
```

`POST /api2/json/phoneCodeGeoBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNamesWithPhoneNumbers": [
    {
      "countryIso2": "string",
      "countryIso2Alt": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phoneNumber": "string"
    }
  ]
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-of-up-to-100-personal-names-with-a-local-context-iso2-country-of-residence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNamePhoneNumberGeoIn](#schemabatchfirstlastnamephonenumbergeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNamesWithPhoneNumbers|body|[[FirstLastNamePhoneNumberGeoIn](#schemafirstlastnamephonenumbergeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "internationalPhoneNumberVerified": "string",
      "lastName": "string",
      "originCountryIso2": "string",
      "originCountryIso2Alt": "string",
      "phoneCountryCode": 0,
      "phoneCountryCodeAlt": 0,
      "phoneCountryIso2": "string",
      "phoneCountryIso2Alt": "string",
      "phoneCountryIso2Verified": "string",
      "phoneNumber": "string",
      "score": 0,
      "script": "string",
      "verified": true
    }
  ]
}
```

<h3 id="uses-11-units-per-name-infer-the-likely-country-and-phone-prefix-of-up-to-100-personal-names-with-a-local-context-iso2-country-of-residence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNamePhoneCodedOut](#schemabatchfirstlastnamephonecodedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

<a id="opIdphoneCodeGeoFeedbackLoop"></a>

> Code samples

```bash
curl https://example.com/api2/json/phoneCodeGeoFeedbackLoop/string/string/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}`

<h3 id="credits-1-unit-feedback-loop-to-better-infer-the-likely-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-with-a-local-context-iso2-country-of-residence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|
|phoneNumberE164|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "internationalPhoneNumberVerified": "string",
  "lastName": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneCountryCode": 0,
  "phoneCountryCodeAlt": 0,
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "phoneCountryIso2Verified": "string",
  "phoneNumber": "string",
  "score": 0,
  "script": "string",
  "verified": true
}
```

<h3 id="credits-1-unit-feedback-loop-to-better-infer-the-likely-phone-prefix-given-a-personal-name-and-formatted-unformatted-phone-number-with-a-local-context-iso2-country-of-residence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-chinese">chinese</h1>

CHINESE special features

## Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming

<a id="opIdchineseNameCandidates"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameCandidates/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}`

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-ex-wang-xiaoming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-ex-wang-xiaoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchCandidatesOut](#schemanamematchcandidatesout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

<a id="opIdchineseNameCandidatesBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameCandidatesBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/chineseNameCandidatesBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.

<a id="opIdchineseNameCandidatesGenderBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameCandidatesGenderBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "gender": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/chineseNameCandidatesGenderBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "gender": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGenderIn](#schemabatchfirstlastnamegenderin)|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGenderIn](#schemafirstlastnamegenderin)]|false|none|

> Example responses

> 200 Response

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')

<a id="opIdchineseNameGenderCandidates"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameGenderCandidates/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}`

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-ex-wang-xiaoming---having-a-known-gender-male-or-female-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|
|knownGender|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-ex-wang-xiaoming---having-a-known-gender-male-or-female-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchCandidatesOut](#schemanamematchcandidatesout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming

<a id="opIdchineseNameMatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameMatch/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}`

<h3 id="return-a-score-for-matching-chinese-name-ex-王晓明-with-a-romanized-name-ex-wang-xiaoming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|
|chineseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "matchStatus": "Match",
  "score": 0,
  "script": "string"
}
```

<h3 id="return-a-score-for-matching-chinese-name-ex-王晓明-with-a-romanized-name-ex-wang-xiaoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchedOut](#schemanamematchedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

<a id="opIdchineseNameMatchBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/chineseNameMatchBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name1": {
          "firstName": "string",
          "id": "string",
          "lastName": "string"
        },
        "name2": {
          "id": "string",
          "name": "string"
        }
      }
    ]
  }'
```

`POST /api2/json/chineseNameMatchBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name1": {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "name2": {
        "id": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMatchPersonalFirstLastNameIn](#schemabatchmatchpersonalfirstlastnamein)|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[MatchPersonalFirstLastNameIn](#schemamatchpersonalfirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "matchedNames": [
    {
      "id": "string",
      "matchStatus": "Match",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="identify-chinese-name-candidates-based-on-the-romanized-name-firstname-chinesegivenname-lastnamechinesesurname-ex-wang-xiaoming-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchedOut](#schemabatchnamematchedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a Chinese full name ex. 王晓明

<a id="opIdgenderChineseName"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderChineseName/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderChineseName/{chineseName}`

<h3 id="infer-the-likely-gender-of-a-chinese-full-name-ex-王晓明-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "genderScale": -1,
  "id": "string",
  "likelyGender": "male",
  "name": "string",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-chinese-full-name-ex-王晓明-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 full names ex. 王晓明

<a id="opIdgenderChineseNameBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderChineseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/genderChineseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-ex-王晓明-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names, with a country ISO2 code|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "genderScale": -1,
      "id": "string",
      "likelyGender": "male",
      "name": "string",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-ex-王晓明-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a Chinese name in LATIN (Pinyin).

<a id="opIdgenderChineseNamePinyin"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderChineseNamePinyin/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}`

<h3 id="infer-the-likely-gender-of-a-chinese-name-in-latin-pinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-chinese-name-in-latin-pinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).

<a id="opIdgenderChineseNamePinyinBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderChineseNamePinyinBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/genderChineseNamePinyinBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-chinese-names-in-latin-pinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of names, with country code.|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "genderScale": -1,
      "id": "string",
      "lastName": "string",
      "likelyGender": "male",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-chinese-names-in-latin-pinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name)

<a id="opIdparseChineseName"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseChineseName/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/parseChineseName/{chineseName}`

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-王晓明---王surname-晓明given-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-王晓明---王surname-晓明given-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name).

<a id="opIdparseChineseNameBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseChineseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/parseChineseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-王晓明---王surname-晓明given-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-王晓明---王surname-晓明given-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Romanize the Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name)

<a id="opIdpinyinChineseName"></a>

> Code samples

```bash
curl https://example.com/api2/json/pinyinChineseName/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/pinyinChineseName/{chineseName}`

<h3 id="romanize-the-chinese-name-to-pinyin-ex-王晓明---wang-surname-xiaoming-given-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

<h3 id="romanize-the-chinese-name-to-pinyin-ex-王晓明---wang-surname-xiaoming-given-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A pinyin name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Romanize a list of Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name).

<a id="opIdpinyinChineseNameBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/pinyinChineseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/pinyinChineseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="romanize-a-list-of-chinese-name-to-pinyin-ex-王晓明---wang-surname-xiaoming-given-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of Chinese names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="romanize-a-list-of-chinese-name-to-pinyin-ex-王晓明---wang-surname-xiaoming-given-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Pinyin names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-japanese">japanese</h1>

JAPANESE special features

## Infer the likely gender of a Japanese name in LATIN (Pinyin).

<a id="opIdgenderJapaneseNamePinyin"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderJapaneseName/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}`

<h3 id="infer-the-likely-gender-of-a-japanese-name-in-latin-pinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurname|path|string|true|none|
|japaneseGivenName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-japanese-name-in-latin-pinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

<a id="opIdgenderJapaneseNamePinyinBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderJapaneseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/genderJapaneseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-japanese-names-in-latin-pinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of names, with country code.|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "genderScale": -1,
      "id": "string",
      "lastName": "string",
      "likelyGender": "male",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-japanese-names-in-latin-pinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of a Japanese full name ex. 王晓明

<a id="opIdgenderJapaneseNameFull"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderJapaneseNameFull/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/genderJapaneseNameFull/{japaneseName}`

<h3 id="infer-the-likely-gender-of-a-japanese-full-name-ex-王晓明-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "genderScale": -1,
  "id": "string",
  "likelyGender": "male",
  "name": "string",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-gender-of-a-japanese-full-name-ex-王晓明-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely gender of up to 100 full names

<a id="opIdgenderJapaneseNameFullBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/genderJapaneseNameFullBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/genderJapaneseNameFullBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "genderScale": -1,
      "id": "string",
      "likelyGender": "male",
      "name": "string",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-gender-of-up-to-100-full-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae

<a id="opIdjapaneseNameGenderKanjiCandidatesBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameGenderKanjiCandidatesBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "gender": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/japaneseNameGenderKanjiCandidatesBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "gender": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-firstname-japanesegivenname-lastnamejapanesesurname-with-known-gender-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGenderIn](#schemabatchfirstlastnamegenderin)|false|A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname and known gender|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGenderIn](#schemafirstlastnamegenderin)]|false|none|

> Example responses

> 200 Response

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-firstname-japanesegivenname-lastnamejapanesesurname-with-known-gender-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

<a id="opIdjapaneseNameKanjiCandidates"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameKanjiCandidates/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}`

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchCandidatesOut](#schemanamematchcandidatesout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.

<a id="opIdjapaneseNameKanjiCandidates_1"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameKanjiCandidates/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}`

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-ex-yamamoto-sanae---and-a-known-gender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|
|knownGender|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-ex-yamamoto-sanae---and-a-known-gender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchCandidatesOut](#schemanamematchcandidatesout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae

<a id="opIdjapaneseNameKanjiCandidatesBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameKanjiCandidatesBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/japaneseNameKanjiCandidatesBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-firstname-japanesegivenname-lastnamejapanesesurname-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="identify-japanese-name-candidates-in-kanji-based-on-the-romanized-name-firstname-japanesegivenname-lastnamejapanesesurname-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Romanize japanese name, based on the name in Kanji.

<a id="opIdjapaneseNameLatinCandidates"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameLatinCandidates/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}`

<h3 id="romanize-japanese-name-based-on-the-name-in-kanji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameKanji|path|string|true|none|
|japaneseGivenNameKanji|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

<h3 id="romanize-japanese-name-based-on-the-name-in-kanji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchCandidatesOut](#schemanamematchcandidatesout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Romanize japanese names, based on the name in KANJI

<a id="opIdjapaneseNameLatinCandidatesBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameLatinCandidatesBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/japaneseNameLatinCandidatesBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="romanize-japanese-names-based-on-the-name-in-kanji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameIn](#schemabatchfirstlastnamein)|false|A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

<h3 id="romanize-japanese-names-based-on-the-name-in-kanji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

<a id="opIdjapaneseNameMatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameMatch/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

<h3 id="return-a-score-for-matching-japanese-name-in-kanji-ex-山本-早苗-with-a-romanized-name-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|
|japaneseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "matchStatus": "Match",
  "score": 0,
  "script": "string"
}
```

<h3 id="return-a-score-for-matching-japanese-name-in-kanji-ex-山本-早苗-with-a-romanized-name-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[NameMatchedOut](#schemanamematchedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

<a id="opIdjapaneseNameMatchBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameMatchBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name1": {
          "firstName": "string",
          "id": "string",
          "lastName": "string"
        },
        "name2": {
          "id": "string",
          "name": "string"
        }
      }
    ]
  }'
```

`POST /api2/json/japaneseNameMatchBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name1": {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "name2": {
        "id": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="return-a-score-for-matching-a-list-of-japanese-names-in-kanji-ex-山本-早苗-with-romanized-names-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMatchPersonalFirstLastNameIn](#schemabatchmatchpersonalfirstlastnamein)|false|A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[MatchPersonalFirstLastNameIn](#schemamatchpersonalfirstlastnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "matchedNames": [
    {
      "id": "string",
      "matchStatus": "Match",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="return-a-score-for-matching-a-list-of-japanese-names-in-kanji-ex-山本-早苗-with-romanized-names-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of matched names.|[BatchNameMatchedOut](#schemabatchnamematchedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

<a id="opIdjapaneseNameMatchFeedbackLoop"></a>

> Code samples

```bash
curl https://example.com/api2/json/japaneseNameMatchFeedbackLoop/string/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

<h3 id="credits-1-unit-feedback-loop-to-better-perform-matching-japanese-name-in-kanji-ex-山本-早苗-with-a-romanized-name-ex-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|
|japaneseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "feedbackCredits": 0
}
```

<h3 id="credits-1-unit-feedback-loop-to-better-perform-matching-japanese-name-in-kanji-ex-山本-早苗-with-a-romanized-name-ex-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A romanized name.|[FeedbackLoopOut](#schemafeedbackloopout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

<a id="opIdparseJapaneseName"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseJapaneseName/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/parseJapaneseName/{japaneseName}`

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-山本-早苗-or-yamamoto-sanae-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-山本-早苗-or-yamamoto-sanae-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

<a id="opIdparseJapaneseNameBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/parseJapaneseNameBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/parseJapaneseNameBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-山本-早苗-or-yamamoto-sanae-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameIn](#schemabatchpersonalnamein)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameIn](#schemapersonalnamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-firstlast-name-structure-of-a-name-ex-山本-早苗-or-yamamoto-sanae-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-indian">indian</h1>

INDIAN special features

## [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.

<a id="opIdcastegroupIndianFull"></a>

> Code samples

```bash
curl https://example.com/api2/json/castegroupIndianFull/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/castegroupIndianFull/{subDivisionIso31662}/{personalNameFull}`

<h3 id="uses-10-units-per-name-infer-the-likely-indian-name-castegroup-of-a-personal-full-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subDivisionIso31662|path|string|true|none|
|personalNameFull|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "castegroup": "string",
  "castegroupAlt": "string",
  "castegroupTop": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-name-castegroup-of-a-personal-full-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A castegroup-coded name.|[PersonalNameCastegroupOut](#schemapersonalnamecastegroupout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names.

<a id="opIdcastegroupIndianFullBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/castegroupIndianFullBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string",
        "subdivisionIso": "string"
      }
    ]
  }'
```

`POST /api2/json/castegroupIndianFullBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "subdivisionIso": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-name-castegroup-of-up-to-100-personal-full-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameSubdivisionIn](#schemabatchpersonalnamesubdivisionin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameSubdivisionIn](#schemapersonalnamesubdivisionin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "castegroup": "string",
      "castegroupAlt": "string",
      "castegroupTop": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-name-castegroup-of-up-to-100-personal-full-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of castegroup-coded names.|[BatchPersonalNameCastegroupOut](#schemabatchpersonalnamecastegroupout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).

<a id="opIdreligion"></a>

> Code samples

```bash
curl https://example.com/api2/json/religionIndianFull/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/religionIndianFull/{subDivisionIso31662}/{personalNameFull}`

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-a-personal-indian-full-name-provided-the-indian-state-or-union-territory-nb-this-can-be-inferred-using-the-subclassification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subDivisionIso31662|path|string|true|none|
|personalNameFull|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "religion": "string",
  "religionAlt": "string",
  "religionsTop": [
    "string"
  ],
  "score": 0,
  "script": "string"
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-a-personal-indian-full-name-provided-the-indian-state-or-union-territory-nb-this-can-be-inferred-using-the-subclassification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A religion-coded name.|[PersonalNameReligionedOut](#schemapersonalnamereligionedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).

<a id="opIdreligionIndianFullBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/religionIndianFullBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "id": "string",
        "name": "string",
        "subdivisionIso": "string"
      }
    ]
  }'
```

`POST /api2/json/religionIndianFullBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "subdivisionIso": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-up-to-100-personal-full-indian-names-provided-the-subclassification-at-state-or-union-territory-level-nb-can-be-inferred-using-the-subclassification-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchPersonalNameSubdivisionIn](#schemabatchpersonalnamesubdivisionin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[PersonalNameSubdivisionIn](#schemapersonalnamesubdivisionin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "religion": "string",
      "religionAlt": "string",
      "religionsTop": [
        "string"
      ],
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-religion-of-up-to-100-personal-full-indian-names-provided-the-subclassification-at-state-or-union-territory-level-nb-can-be-inferred-using-the-subclassification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of religion-coded names.|[BatchPersonalNameReligionedOut](#schemabatchpersonalnamereligionedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

<a id="opIdsubclassificationIndian"></a>

> Code samples

```bash
curl https://example.com/api2/json/subclassificationIndian/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/subclassificationIndian/{firstName}/{lastName}`

<h3 id="uses-10-units-per-name-infer-the-likely-indian-state-of-union-territory-according-to-iso-3166-2in-based-on-the-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string",
  "subClassification": "string",
  "subClassificationAlt": "string",
  "subclassificationTop": [
    "string"
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-state-of-union-territory-according-to-iso-3166-2in-based-on-the-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A classified name at a sub-country level.|[FirstLastNameGeoSubclassificationOut](#schemafirstlastnamegeosubclassificationout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

<a id="opIdsubclassificationIndianBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/subclassificationIndianBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "personalNames": [
      {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      }
    ]
  }'
```

`POST /api2/json/subclassificationIndianBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-state-of-union-territory-according-to-iso-3166-2in-based-on-a-list-of-up-to-100-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchFirstLastNameGeoIn](#schemabatchfirstlastnamegeoin)|false|A list of personal names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» personalNames|body|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string",
      "subClassification": "string",
      "subClassificationAlt": "string",
      "subclassificationTop": [
        "string"
      ]
    }
  ]
}
```

<h3 id="uses-10-units-per-name-infer-the-likely-indian-state-of-union-territory-according-to-iso-3166-2in-based-on-a-list-of-up-to-100-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of classified names at a subcountry level.|[BatchFirstLastNameGeoSubclassificationOut](#schemabatchfirstlastnamegeosubclassificationout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-admin">admin</h1>

Administrative, system management.

## Activate/deactivate anonymization for a source.

<a id="opIdanonymize"></a>

> Code samples

```bash
curl https://example.com/api2/json/anonymize/string/true/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/anonymize/{source}/{anonymized}/{token}`

<h3 id="activatedeactivate-anonymization-for-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|anonymized|path|boolean|true|none|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "anonymized": true,
  "apiKey": "string",
  "corporate": true,
  "disabled": true,
  "learnable": true,
  "partner": true,
  "striped": true,
  "userId": "string",
  "vetted": true
}
```

<h3 id="activatedeactivate-anonymization-for-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anonymization of a source.|[APIKeyOut](#schemaapikeyout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Read API Key info.

<a id="opIdapiKeyInfo"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiKeyInfo \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiKeyInfo`

> Example responses

> 200 Response

```json
{
  "admin": true,
  "anonymized": true,
  "apiKey": "string",
  "corporate": true,
  "disabled": true,
  "learnable": true,
  "partner": true,
  "striped": true,
  "userId": "string",
  "vetted": true
}
```

<h3 id="read-api-key-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Read API Key (uncached, i.e. DB read)|[APIKeyOut](#schemaapikeyout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

<a id="opIdavailableServices"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiServices \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiServices`

> Example responses

> 200 Response

```json
{
  "apiServices": [
    {
      "costInUnits": 0,
      "serviceGroup": "string",
      "serviceName": "string"
    }
  ]
}
```

<h3 id="list-of-classification-services-and-usage-cost-in-units-per-classification-default-is-1one-unit-some-api-endpoints-ex-corridor-combine-multiple-classifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available services|[APIServicesOut](#schemaapiservicesout)|
|401|Unauthorized|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

<a id="opIdapiStatus"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiStatus \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiStatus`

> Example responses

> 200 Response

```json
{
  "classifiers": [
    {
      "classifierName": "string",
      "learning": true,
      "probabilityCalibrated": true,
      "serving": true,
      "shuttingDown": true
    }
  ],
  "softwareVersion": {
    "softwareNameAndVersion": "string",
    "softwareVersion": [
      0
    ]
  }
}
```

<h3 id="prints-the-current-status-of-the-classifiers-a-classifier-name-in-apistatus-corresponds-to-a-service-name-in-apiservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available classifiers and status|[APIClassifiersStatusOut](#schemaapiclassifiersstatusout)|
|401|Unauthorized|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Print current API usage.

<a id="opIdapiUsage"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiUsage \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiUsage`

> Example responses

> 200 Response

```json
{
  "billingPeriod": {
    "apiKey": "string",
    "billingStatus": "string",
    "hardLimit": 0,
    "periodEnded": 0,
    "periodStarted": 0,
    "softLimit": 0,
    "stripeCurrentPeriodEnd": 0,
    "stripeCurrentPeriodStart": 0,
    "subscriptionStarted": 0,
    "usage": 0
  },
  "overageCurrency": "string",
  "overageExclTax": 0,
  "overageInclTax": 0,
  "overageQuantity": 0,
  "subscription": {
    "apiKey": "string",
    "currency": "string",
    "currencyFactor": 0,
    "planBaseFeesKey": "string",
    "planEnded": 0,
    "planName": "string",
    "planQuota": 0,
    "planStarted": 0,
    "planStatus": "string",
    "price": 0,
    "priceOverage": 0,
    "priceOverageUSD": 0,
    "priceUSD": 0,
    "priorPlanStarted": 0,
    "stripeCustomerId": "string",
    "stripeStatus": "string",
    "stripeSubscription": "string",
    "taxRate": 0,
    "userId": "string"
  }
}
```

<h3 id="print-current-api-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Print current API usage.|[APIPeriodUsageOut](#schemaapiperiodusageout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Print historical API usage.

<a id="opIdapiUsageHistory"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiUsageHistory \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiUsageHistory`

> Example responses

> 200 Response

```json
{
  "detailedUsage": [
    {
      "apiKey": {
        "admin": true,
        "anonymized": true,
        "apiKey": "string",
        "corporate": true,
        "disabled": true,
        "learnable": true,
        "partner": true,
        "striped": true,
        "userId": "string",
        "vetted": true
      },
      "apiService": "string",
      "createdDateTime": 0,
      "hostAddress": "string",
      "lastFlushedDateTime": 0,
      "lastUsedDateTime": 0,
      "serviceFeaturesUsage": {
        "property1": 0,
        "property2": 0
      },
      "totalUsage": 0
    }
  ]
}
```

<h3 id="print-historical-api-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Print historical API usage (NB. new output format form v2.0.15)|[APIUsageHistoryOut](#schemaapiusagehistoryout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Print historical API usage (in an aggregated view, by service, by day/hour/min).

<a id="opIdapiUsageHistoryAggregate"></a>

> Code samples

```bash
curl https://example.com/api2/json/apiUsageHistoryAggregate \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/apiUsageHistoryAggregate`

> Example responses

> 200 Response

```json
{
  "colHeaders": [
    "string"
  ],
  "data": [
    [
      0
    ]
  ],
  "historyTruncated": true,
  "periodEnd": 0,
  "periodStart": 0,
  "rowHeaders": [
    "string"
  ],
  "timeUnit": "string",
  "totalUsage": 0
}
```

<h3 id="print-historical-api-usage-in-an-aggregated-view-by-service-by-dayhourmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Print historical API usage.|[APIUsageAggregatedOut](#schemaapiusageaggregatedout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Activate/deactivate learning from a source.

<a id="opIdlearnable"></a>

> Code samples

```bash
curl https://example.com/api2/json/learnable/string/true/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/learnable/{source}/{learnable}/{token}`

<h3 id="activatedeactivate-learning-from-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|The API Key to set as learnable/non learnable.|
|learnable|path|boolean|true|none|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "anonymized": true,
  "apiKey": "string",
  "corporate": true,
  "disabled": true,
  "learnable": true,
  "partner": true,
  "striped": true,
  "userId": "string",
  "vetted": true
}
```

<h3 id="activatedeactivate-learning-from-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Set learning from source.|[APIKeyOut](#schemaapikeyout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Print basic source statistics.

<a id="opIdregions"></a>

> Code samples

```bash
curl https://example.com/api2/json/regions \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/regions`

> Example responses

> 200 Response

```json
{
  "countriesAndRegions": [
    {
      "countryFIPS": "string",
      "countryISO2": "string",
      "countryISO3": "string",
      "countryName": "string",
      "countryNumCode": "string",
      "region": "string",
      "subregion": "string",
      "topregion": "string"
    }
  ]
}
```

<h3 id="print-basic-source-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of countries and regions.|[RegionOut](#schemaregionout)|
|401|Unauthorized|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get the current software version

<a id="opIdsoftwareVersion"></a>

> Code samples

```bash
curl https://example.com/api2/json/softwareVersion \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/softwareVersion`

> Example responses

> 200 Response

```json
{
  "softwareNameAndVersion": "string",
  "softwareVersion": [
    0
  ]
}
```

<h3 id="get-the-current-software-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current software version|[SoftwareVersionOut](#schemasoftwareversionout)|
|401|Unauthorized|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Print the taxonomy classes valid for the given classifier.

<a id="opIdtaxonomyClasses"></a>

> Code samples

```bash
curl https://example.com/api2/json/taxonomyClasses/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/taxonomyClasses/{classifierName}`

<h3 id="print-the-taxonomy-classes-valid-for-the-given-classifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|classifierName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "classifierName": "string",
  "classifyingScripts": [
    "string"
  ],
  "taxonomyClasses": [
    "string"
  ]
}
```

<h3 id="print-the-taxonomy-classes-valid-for-the-given-classifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available plans|[APIClassifierTaxonomyOut](#schemaapiclassifiertaxonomyout)|
|401|Unauthorized|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-general">general</h1>

## Infer the likely type of a proper noun (personal name, brand name, place name etc.)

<a id="opIdnameType"></a>

> Code samples

```bash
curl https://example.com/api2/json/nameType/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/nameType/{properNoun}`

<h3 id="infer-the-likely-type-of-a-proper-noun-personal-name-brand-name-place-name-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|properNoun|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "commonType": "string",
  "commonTypeAlt": "string",
  "id": "string",
  "name": "string",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-type-of-a-proper-noun-personal-name-brand-name-place-name-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A typed name.|[ProperNounCategorizedOut](#schemapropernouncategorizedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

<a id="opIdnameTypeBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/nameTypeBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "properNouns": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/nameTypeBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "properNouns": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-common-type-of-up-to-100-proper-nouns-personal-name-brand-name-place-name-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchNameIn](#schemabatchnamein)|false|A list of proper names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» properNouns|body|[[NameIn](#schemanamein)]|false|none|

> Example responses

> 200 Response

```json
{
  "properNouns": [
    {
      "commonType": "string",
      "commonTypeAlt": "string",
      "id": "string",
      "name": "string",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-common-type-of-up-to-100-proper-nouns-personal-name-brand-name-place-name-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of commonTypeized names.|[BatchProperNounCategorizedOut](#schemabatchpropernouncategorizedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely type of a proper noun (personal name, brand name, place name etc.)

<a id="opIdnameTypeGeo"></a>

> Code samples

```bash
curl https://example.com/api2/json/nameTypeGeo/string/string \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /api2/json/nameTypeGeo/{properNoun}/{countryIso2}`

<h3 id="infer-the-likely-type-of-a-proper-noun-personal-name-brand-name-place-name-etc-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|properNoun|path|string|true|none|
|countryIso2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "commonType": "string",
  "commonTypeAlt": "string",
  "id": "string",
  "name": "string",
  "score": 0,
  "script": "string"
}
```

<h3 id="infer-the-likely-type-of-a-proper-noun-personal-name-brand-name-place-name-etc-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A typed name.|[ProperNounCategorizedOut](#schemapropernouncategorizedout)|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

<a id="opIdnameTypeGeoBatch"></a>

> Code samples

```bash
curl https://example.com/api2/json/nameTypeGeoBatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "facts": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "properNouns": [
      {
        "countryIso2": "string",
        "id": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /api2/json/nameTypeGeoBatch`

> Body parameter

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "properNouns": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-common-type-of-up-to-100-proper-nouns-personal-name-brand-name-place-name-etc-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchNameGeoIn](#schemabatchnamegeoin)|false|A list of proper names|
|» facts|body|[[FactIn](#schemafactin)]|false|none|
|» properNouns|body|[[NameGeoIn](#schemanamegeoin)]|false|none|

> Example responses

> 200 Response

```json
{
  "properNouns": [
    {
      "commonType": "string",
      "commonTypeAlt": "string",
      "id": "string",
      "name": "string",
      "score": 0,
      "script": "string"
    }
  ]
}
```

<h3 id="infer-the-likely-common-type-of-up-to-100-proper-nouns-personal-name-brand-name-place-name-etc-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of commonTypeized names.|[BatchProperNounCategorizedOut](#schemabatchpropernouncategorizedout)|
|400|Bad Request|Bad request (ex. too many names)|None|
|401|Unauthorized|Missing or incorrect API Key|None|
|403|Forbidden|Email not Verified, or API Limit Reached, or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_APIBillingPeriodUsageOut">APIBillingPeriodUsageOut</h2>
<!-- backwards compatibility -->
<a id="schemaapibillingperiodusageout"></a>
<a id="schema_APIBillingPeriodUsageOut"></a>
<a id="tocSapibillingperiodusageout"></a>
<a id="tocsapibillingperiodusageout"></a>

```json
{
  "apiKey": "string",
  "billingStatus": "string",
  "hardLimit": 0,
  "periodEnded": 0,
  "periodStarted": 0,
  "softLimit": 0,
  "stripeCurrentPeriodEnd": 0,
  "stripeCurrentPeriodStart": 0,
  "subscriptionStarted": 0,
  "usage": 0
}
```

The current billing period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|User API Key.|
|billingStatus|string|false|none|Current period billing status ex OPEN.|
|hardLimit|integer(int64)|false|none|Current period hard limit (reaching the limit sends an email notification and blocks the API Key).|
|periodEnded|integer(int64)|false|none|Datetime when the the plan's current period endend.|
|periodStarted|integer(int64)|false|none|Datetime when the the plan's current period started.|
|softLimit|integer(int64)|false|none|Current period soft limit (reaching the limit sends an email notification).|
|stripeCurrentPeriodEnd|integer(int64)|false|none|Datetime when the the plan's current period endend (in Stripe). Internal and Stripe periodicity should ~coincide.|
|stripeCurrentPeriodStart|integer(int64)|false|none|Datetime when the the plan's current period started (in Stripe). Internal and Stripe periodicity should ~coincide.|
|subscriptionStarted|integer(int64)|false|none|Datetime when the user subscribed to the plan.|
|usage|integer(int64)|false|none|Current period usage in units (NB some API endpoints use more than one unit).|

<h2 id="tocS_APIClassifierOut">APIClassifierOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifierout"></a>
<a id="schema_APIClassifierOut"></a>
<a id="tocSapiclassifierout"></a>
<a id="tocsapiclassifierout"></a>

```json
{
  "classifierName": "string",
  "learning": true,
  "probabilityCalibrated": true,
  "serving": true,
  "shuttingDown": true
}
```

The list of classifiers and versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|The classifier name|
|learning|boolean|false|none|True if the classifier is learning|
|probabilityCalibrated|boolean|false|none|True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1)|
|serving|boolean|false|none|True if the classifier is serving requests (has reached minimal learning, is not shutting down)|
|shuttingDown|boolean|false|none|True if the classifier is shutting down|

<h2 id="tocS_APIClassifierTaxonomyOut">APIClassifierTaxonomyOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifiertaxonomyout"></a>
<a id="schema_APIClassifierTaxonomyOut"></a>
<a id="tocSapiclassifiertaxonomyout"></a>
<a id="tocsapiclassifiertaxonomyout"></a>

```json
{
  "classifierName": "string",
  "classifyingScripts": [
    "string"
  ],
  "taxonomyClasses": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices)|
|classifyingScripts|[string]|false|none|The scripts / alphabets this classifiers classifies to|
|taxonomyClasses|[string]|false|none|The taxonomy classes this classifier classifies to|

<h2 id="tocS_APIClassifiersStatusOut">APIClassifiersStatusOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifiersstatusout"></a>
<a id="schema_APIClassifiersStatusOut"></a>
<a id="tocSapiclassifiersstatusout"></a>
<a id="tocsapiclassifiersstatusout"></a>

```json
{
  "classifiers": [
    {
      "classifierName": "string",
      "learning": true,
      "probabilityCalibrated": true,
      "serving": true,
      "shuttingDown": true
    }
  ],
  "softwareVersion": {
    "softwareNameAndVersion": "string",
    "softwareVersion": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifiers|[[APIClassifierOut](#schemaapiclassifierout)]|false|none|The list of classifiers and versions.|
|softwareVersion|[SoftwareVersionOut](#schemasoftwareversionout)|false|none|The software version.|

<h2 id="tocS_APICounterV2Out">APICounterV2Out</h2>
<!-- backwards compatibility -->
<a id="schemaapicounterv2out"></a>
<a id="schema_APICounterV2Out"></a>
<a id="tocSapicounterv2out"></a>
<a id="tocsapicounterv2out"></a>

```json
{
  "apiKey": {
    "admin": true,
    "anonymized": true,
    "apiKey": "string",
    "corporate": true,
    "disabled": true,
    "learnable": true,
    "partner": true,
    "striped": true,
    "userId": "string",
    "vetted": true
  },
  "apiService": "string",
  "createdDateTime": 0,
  "hostAddress": "string",
  "lastFlushedDateTime": 0,
  "lastUsedDateTime": 0,
  "serviceFeaturesUsage": {
    "property1": 0,
    "property2": 0
  },
  "totalUsage": 0
}
```

Detailed usage as reported by the deduplicating API counter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|[APIKeyOut](#schemaapikeyout)|false|none|none|
|apiService|string|false|none|The apiService corresponds to the classifier name.|
|createdDateTime|integer(int64)|false|none|The create datetime of the counter.|
|hostAddress|string|false|none|The processing hostAddress.|
|lastFlushedDateTime|integer(int64)|false|none|The flush datetime of the counter.|
|lastUsedDateTime|integer(int64)|false|none|The last usage datetime of the counter.|
|serviceFeaturesUsage|object|false|none|Usage of special features, such as Chinese, Japanese.|
|totalUsage|integer(int64)|false|none|The usage of the counter.|

<h2 id="tocS_APIKeyOut">APIKeyOut</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyout"></a>
<a id="schema_APIKeyOut"></a>
<a id="tocSapikeyout"></a>
<a id="tocsapikeyout"></a>

```json
{
  "admin": true,
  "anonymized": true,
  "apiKey": "string",
  "corporate": true,
  "disabled": true,
  "learnable": true,
  "partner": true,
  "striped": true,
  "userId": "string",
  "vetted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|The API Key has admin role.|
|anonymized|boolean|false|none|The API Key is anonymized (using SHA-252 digest for logging). Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).|
|apiKey|string|false|none|The user API Key.|
|corporate|boolean|false|none|The API Key has role corporate (ex SWIFT payments instead of Stripe payments).|
|disabled|boolean|false|none|The API Key is temporarily or permanently disabled.|
|learnable|boolean|false|none|The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).|
|partner|boolean|false|none|The API Key has partner role.|
|striped|boolean|false|none|The API Key is associated to a valid Stripe account.|
|userId|string|false|none|The user identifier.|
|vetted|boolean|false|none|The API Key is vetted (assumed truthful) for machine learning.|

<h2 id="tocS_APIPeriodUsageOut">APIPeriodUsageOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiperiodusageout"></a>
<a id="schema_APIPeriodUsageOut"></a>
<a id="tocSapiperiodusageout"></a>
<a id="tocsapiperiodusageout"></a>

```json
{
  "billingPeriod": {
    "apiKey": "string",
    "billingStatus": "string",
    "hardLimit": 0,
    "periodEnded": 0,
    "periodStarted": 0,
    "softLimit": 0,
    "stripeCurrentPeriodEnd": 0,
    "stripeCurrentPeriodStart": 0,
    "subscriptionStarted": 0,
    "usage": 0
  },
  "overageCurrency": "string",
  "overageExclTax": 0,
  "overageInclTax": 0,
  "overageQuantity": 0,
  "subscription": {
    "apiKey": "string",
    "currency": "string",
    "currencyFactor": 0,
    "planBaseFeesKey": "string",
    "planEnded": 0,
    "planName": "string",
    "planQuota": 0,
    "planStarted": 0,
    "planStatus": "string",
    "price": 0,
    "priceOverage": 0,
    "priceOverageUSD": 0,
    "priceUSD": 0,
    "priorPlanStarted": 0,
    "stripeCustomerId": "string",
    "stripeStatus": "string",
    "stripeSubscription": "string",
    "taxRate": 0,
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingPeriod|[APIBillingPeriodUsageOut](#schemaapibillingperiodusageout)|false|none|The current billing period.|
|overageCurrency|string|false|none|Currency of the overage amount.|
|overageExclTax|number(double)|false|none|Overage amount including any tax.|
|overageInclTax|number(double)|false|none|Overage amount including tax (if applicable).|
|overageQuantity|integer(int64)|false|none|Quantity above monthly quota of the current subscritpion, in units.|
|subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|false|none|The API Plan governing the subscription.|

<h2 id="tocS_APIPlanSubscriptionOut">APIPlanSubscriptionOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiplansubscriptionout"></a>
<a id="schema_APIPlanSubscriptionOut"></a>
<a id="tocSapiplansubscriptionout"></a>
<a id="tocsapiplansubscriptionout"></a>

```json
{
  "apiKey": "string",
  "currency": "string",
  "currencyFactor": 0,
  "planBaseFeesKey": "string",
  "planEnded": 0,
  "planName": "string",
  "planQuota": 0,
  "planStarted": 0,
  "planStatus": "string",
  "price": 0,
  "priceOverage": 0,
  "priceOverageUSD": 0,
  "priceUSD": 0,
  "priorPlanStarted": 0,
  "stripeCustomerId": "string",
  "stripeStatus": "string",
  "stripeSubscription": "string",
  "taxRate": 0,
  "userId": "string"
}
```

The API Plan governing the subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|User API Key.|
|currency|string|false|none|Current plan Currency for prices.|
|currencyFactor|number(double)|false|none|For USD, GBP, EUR - the factor is 1.|
|planBaseFeesKey|string|false|none|Current plan key (as in Stripe product).|
|planEnded|integer(int64)|false|none|Datetime when the user ended the plan.|
|planName|string|false|none|Current plan name.|
|planQuota|integer(int64)|false|none|Current plan quota in quantity of units (NB: some API use several units per name).|
|planStarted|integer(int64)|false|none|Datetime when the user subscribed to the current plan.|
|planStatus|string|false|none|Plan status.|
|price|number(double)|false|none|Current plan price for overages expressed in Currency (extra price per unit above the free quota).|
|priceOverage|number(double)|false|none|Current plan price for overages expressed in Currency (extra price per unit above the free quota).|
|priceOverageUSD|number(double)|false|none|Current plan price for overages expressed in USD (extra price per unit above the free quota).|
|priceUSD|number(double)|false|none|Current plan monthly price expressed in USD (includes a free quota).|
|priorPlanStarted|integer(int64)|false|none|Datetime when the user subscribed to the prior plan.|
|stripeCustomerId|string|false|none|Stripe customer identifier.|
|stripeStatus|string|false|none|Stripe status ex active.|
|stripeSubscription|string|false|none|Stripe subscription identifier.|
|taxRate|number(double)|false|none|Applicable tax rate for the plan.|
|userId|string|false|none|Internal user identifier.|

<h2 id="tocS_APIServiceOut">APIServiceOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiserviceout"></a>
<a id="schema_APIServiceOut"></a>
<a id="tocSapiserviceout"></a>
<a id="tocsapiserviceout"></a>

```json
{
  "costInUnits": 0,
  "serviceGroup": "string",
  "serviceName": "string"
}
```

List of API Services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costInUnits|integer(int32)|false|none|Indicates how many units per call this service costs (ex. the number of units per name)|
|serviceGroup|string|false|none|Groups together classifiers providing a similar service (ex. gender groups personalname_gender and personalfullname_gender)|
|serviceName|string|false|none|A service name corresponds to classifier name in apiStatus (ex. personalname_gender or personalfullname_gender)|

<h2 id="tocS_APIServicesOut">APIServicesOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiservicesout"></a>
<a id="schema_APIServicesOut"></a>
<a id="tocSapiservicesout"></a>
<a id="tocsapiservicesout"></a>

```json
{
  "apiServices": [
    {
      "costInUnits": 0,
      "serviceGroup": "string",
      "serviceName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiServices|[[APIServiceOut](#schemaapiserviceout)]|false|none|List of API Services|

<h2 id="tocS_APIUsageAggregatedOut">APIUsageAggregatedOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiusageaggregatedout"></a>
<a id="schema_APIUsageAggregatedOut"></a>
<a id="tocSapiusageaggregatedout"></a>
<a id="tocsapiusageaggregatedout"></a>

```json
{
  "colHeaders": [
    "string"
  ],
  "data": [
    [
      0
    ]
  ],
  "historyTruncated": true,
  "periodEnd": 0,
  "periodStart": 0,
  "rowHeaders": [
    "string"
  ],
  "timeUnit": "string",
  "totalUsage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colHeaders|[string]|false|none|apiServices as column headers |
|data|[[integer(int32)]]|false|none|Data points : usage per DAY, WEEK or MONTH and per apiService|
|historyTruncated|boolean|false|none|If the history was truncaded due to data limit|
|periodEnd|integer(int64)|false|none|End datetime of the reporting period|
|periodStart|integer(int64)|false|none|Start datetime of the reporting period|
|rowHeaders|[string]|false|none|dates as row headers |
|timeUnit|string|false|none|Time unit is DAY, WEEK or MONTH depending on prior usage|
|totalUsage|integer(int64)|false|none|Total usage in the current period|

<h2 id="tocS_APIUsageHistoryOut">APIUsageHistoryOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiusagehistoryout"></a>
<a id="schema_APIUsageHistoryOut"></a>
<a id="tocSapiusagehistoryout"></a>
<a id="tocsapiusagehistoryout"></a>

```json
{
  "detailedUsage": [
    {
      "apiKey": {
        "admin": true,
        "anonymized": true,
        "apiKey": "string",
        "corporate": true,
        "disabled": true,
        "learnable": true,
        "partner": true,
        "striped": true,
        "userId": "string",
        "vetted": true
      },
      "apiService": "string",
      "createdDateTime": 0,
      "hostAddress": "string",
      "lastFlushedDateTime": 0,
      "lastUsedDateTime": 0,
      "serviceFeaturesUsage": {
        "property1": 0,
        "property2": 0
      },
      "totalUsage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailedUsage|[[APICounterV2Out](#schemaapicounterv2out)]|false|none|Detailed usage as reported by the deduplicating API counter.|

<h2 id="tocS_BatchCorridorIn">BatchCorridorIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchcorridorin"></a>
<a id="schema_BatchCorridorIn"></a>
<a id="tocSbatchcorridorin"></a>
<a id="tocsbatchcorridorin"></a>

```json
{
  "corridorFromTo": [
    {
      "firstLastNameGeoFrom": {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "firstLastNameGeoTo": {
        "countryIso2": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "id": "string"
    }
  ],
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corridorFromTo|[[CorridorIn](#schemacorridorin)]|false|none|none|
|facts|[[FactIn](#schemafactin)]|false|none|none|

<h2 id="tocS_BatchCorridorOut">BatchCorridorOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchcorridorout"></a>
<a id="schema_BatchCorridorOut"></a>
<a id="tocSbatchcorridorout"></a>
<a id="tocsbatchcorridorout"></a>

```json
{
  "corridorFromTo": [
    {
      "FirstLastNameDiasporaedOut": {
        "countryIso2": "string",
        "ethnicitiesTop": [
          "string"
        ],
        "ethnicity": "Chinese",
        "ethnicityAlt": "Japanese",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "lifted": true,
        "probabilityAltCalibrated": -1,
        "probabilityCalibrated": -1,
        "score": 0,
        "script": "string"
      },
      "FirstLastNameGenderedOut": {
        "firstName": "string",
        "genderScale": -1,
        "id": "string",
        "lastName": "string",
        "likelyGender": "male",
        "probabilityCalibrated": -1,
        "score": 0,
        "script": "string"
      },
      "FirstLastNameOriginedOut": {
        "countriesOriginTop": [
          "string"
        ],
        "countryOrigin": "string",
        "countryOriginAlt": "string",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "probabilityAltCalibrated": -1,
        "probabilityCalibrated": -1,
        "regionOrigin": "string",
        "score": 0,
        "script": "string",
        "subRegionOrigin": "string",
        "topRegionOrigin": "string"
      },
      "id": "string",
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corridorFromTo|[[CorridorOut](#schemacorridorout)]|false|none|Classified corridors|

<h2 id="tocS_BatchFirstLastNameDiasporaedOut">BatchFirstLastNameDiasporaedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamediasporaedout"></a>
<a id="schema_BatchFirstLastNameDiasporaedOut"></a>
<a id="tocSbatchfirstlastnamediasporaedout"></a>
<a id="tocsbatchfirstlastnamediasporaedout"></a>

```json
{
  "personalNames": [
    {
      "countryIso2": "string",
      "ethnicitiesTop": [
        "string"
      ],
      "ethnicity": "Chinese",
      "ethnicityAlt": "Japanese",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "lifted": true,
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameDiasporaedOut](#schemafirstlastnamediasporaedout)]|false|none|Classified diaspora names|

<h2 id="tocS_BatchFirstLastNameGenderIn">BatchFirstLastNameGenderIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegenderin"></a>
<a id="schema_BatchFirstLastNameGenderIn"></a>
<a id="tocSbatchfirstlastnamegenderin"></a>
<a id="tocsbatchfirstlastnamegenderin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "gender": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[FirstLastNameGenderIn](#schemafirstlastnamegenderin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameGenderedOut">BatchFirstLastNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegenderedout"></a>
<a id="schema_BatchFirstLastNameGenderedOut"></a>
<a id="tocSbatchfirstlastnamegenderedout"></a>
<a id="tocsbatchfirstlastnamegenderedout"></a>

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "genderScale": -1,
      "id": "string",
      "lastName": "string",
      "likelyGender": "male",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

Represents the output of inferring the LIKELY gender from a list of personal names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)]|false|none|Classified genderized names|

<h2 id="tocS_BatchFirstLastNameGeoIn">BatchFirstLastNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegeoin"></a>
<a id="schema_BatchFirstLastNameGeoIn"></a>
<a id="tocSbatchfirstlastnamegeoin"></a>
<a id="tocsbatchfirstlastnamegeoin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameGeoSubclassificationOut">BatchFirstLastNameGeoSubclassificationOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegeosubclassificationout"></a>
<a id="schema_BatchFirstLastNameGeoSubclassificationOut"></a>
<a id="tocSbatchfirstlastnamegeosubclassificationout"></a>
<a id="tocsbatchfirstlastnamegeosubclassificationout"></a>

```json
{
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string",
      "subClassification": "string",
      "subClassificationAlt": "string",
      "subclassificationTop": [
        "string"
      ]
    }
  ]
}
```

Represents the output of inferring the LIKELY country subclassification (regional names).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGeoSubclassificationOut](#schemafirstlastnamegeosubclassificationout)]|false|none|Classified names at sub country level (region or state)|

<h2 id="tocS_BatchFirstLastNameGeoZippedIn">BatchFirstLastNameGeoZippedIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegeozippedin"></a>
<a id="schema_BatchFirstLastNameGeoZippedIn"></a>
<a id="tocSbatchfirstlastnamegeozippedin"></a>
<a id="tocsbatchfirstlastnamegeozippedin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "zipCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[FirstLastNameGeoZippedIn](#schemafirstlastnamegeozippedin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameIn">BatchFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamein"></a>
<a id="schema_BatchFirstLastNameIn"></a>
<a id="tocSbatchfirstlastnamein"></a>
<a id="tocsbatchfirstlastnamein"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameOriginedOut">BatchFirstLastNameOriginedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnameoriginedout"></a>
<a id="schema_BatchFirstLastNameOriginedOut"></a>
<a id="tocSbatchfirstlastnameoriginedout"></a>
<a id="tocsbatchfirstlastnameoriginedout"></a>

```json
{
  "personalNames": [
    {
      "countriesOriginTop": [
        "string"
      ],
      "countryOrigin": "string",
      "countryOriginAlt": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "regionOrigin": "string",
      "score": 0,
      "script": "string",
      "subRegionOrigin": "string",
      "topRegionOrigin": "string"
    }
  ]
}
```

Represents the output of inferring the LIKELY origin from a list of personal names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)]|false|none|Classified origined names|

<h2 id="tocS_BatchFirstLastNamePhoneCodedOut">BatchFirstLastNamePhoneCodedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonecodedout"></a>
<a id="schema_BatchFirstLastNamePhoneCodedOut"></a>
<a id="tocSbatchfirstlastnamephonecodedout"></a>
<a id="tocsbatchfirstlastnamephonecodedout"></a>

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "countryIso2": "string",
      "firstName": "string",
      "id": "string",
      "internationalPhoneNumberVerified": "string",
      "lastName": "string",
      "originCountryIso2": "string",
      "originCountryIso2Alt": "string",
      "phoneCountryCode": 0,
      "phoneCountryCodeAlt": 0,
      "phoneCountryIso2": "string",
      "phoneCountryIso2Alt": "string",
      "phoneCountryIso2Verified": "string",
      "phoneNumber": "string",
      "score": 0,
      "script": "string",
      "verified": true
    }
  ]
}
```

Represents the output of inferring the LIKELY country and phone code of personal names+phones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)]|false|none|Classified phone-coded names|

<h2 id="tocS_BatchFirstLastNamePhoneNumberGeoIn">BatchFirstLastNamePhoneNumberGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonenumbergeoin"></a>
<a id="schema_BatchFirstLastNamePhoneNumberGeoIn"></a>
<a id="tocSbatchfirstlastnamephonenumbergeoin"></a>
<a id="tocsbatchfirstlastnamephonenumbergeoin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNamesWithPhoneNumbers": [
    {
      "countryIso2": "string",
      "countryIso2Alt": "string",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phoneNumber": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneNumberGeoIn](#schemafirstlastnamephonenumbergeoin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNamePhoneNumberIn">BatchFirstLastNamePhoneNumberIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonenumberin"></a>
<a id="schema_BatchFirstLastNamePhoneNumberIn"></a>
<a id="tocSbatchfirstlastnamephonenumberin"></a>
<a id="tocsbatchfirstlastnamephonenumberin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNamesWithPhoneNumbers": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phoneNumber": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneNumberIn](#schemafirstlastnamephonenumberin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameUSRaceEthnicityOut">BatchFirstLastNameUSRaceEthnicityOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnameusraceethnicityout"></a>
<a id="schema_BatchFirstLastNameUSRaceEthnicityOut"></a>
<a id="tocSbatchfirstlastnameusraceethnicityout"></a>
<a id="tocsbatchfirstlastnameusraceethnicityout"></a>

```json
{
  "personalNames": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "raceEthnicitiesTop": [
        "string"
      ],
      "raceEthnicity": "W_NL",
      "raceEthnicityAlt": "W_NL",
      "score": 0,
      "script": "string"
    }
  ]
}
```

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)]|false|none|Classified US 'race'/ethnicized names|

<h2 id="tocS_BatchMatchPersonalFirstLastNameIn">BatchMatchPersonalFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchmatchpersonalfirstlastnamein"></a>
<a id="schema_BatchMatchPersonalFirstLastNameIn"></a>
<a id="tocSbatchmatchpersonalfirstlastnamein"></a>
<a id="tocsbatchmatchpersonalfirstlastnamein"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name1": {
        "firstName": "string",
        "id": "string",
        "lastName": "string"
      },
      "name2": {
        "id": "string",
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[MatchPersonalFirstLastNameIn](#schemamatchpersonalfirstlastnamein)]|false|none|none|

<h2 id="tocS_BatchNameGeoIn">BatchNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamegeoin"></a>
<a id="schema_BatchNameGeoIn"></a>
<a id="tocSbatchnamegeoin"></a>
<a id="tocsbatchnamegeoin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "properNouns": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|properNouns|[[NameGeoIn](#schemanamegeoin)]|false|none|none|

<h2 id="tocS_BatchNameIn">BatchNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamein"></a>
<a id="schema_BatchNameIn"></a>
<a id="tocSbatchnamein"></a>
<a id="tocsbatchnamein"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "properNouns": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|properNouns|[[NameIn](#schemanamein)]|false|none|none|

<h2 id="tocS_BatchNameMatchCandidatesOut">BatchNameMatchCandidatesOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamematchcandidatesout"></a>
<a id="schema_BatchNameMatchCandidatesOut"></a>
<a id="tocSbatchnamematchcandidatesout"></a>
<a id="tocsbatchnamematchcandidatesout"></a>

```json
{
  "namesAndMatchCandidates": [
    {
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "matchCandidates": [
        {
          "candidateName": "string",
          "predScoreFamilyName": 0,
          "predScoreGivenName": 0,
          "probability": 0
        }
      ],
      "orderOption": "string",
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namesAndMatchCandidates|[[NameMatchCandidatesOut](#schemanamematchcandidatesout)]|false|none|Classified matched names|

<h2 id="tocS_BatchNameMatchedOut">BatchNameMatchedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamematchedout"></a>
<a id="schema_BatchNameMatchedOut"></a>
<a id="tocSbatchnamematchedout"></a>
<a id="tocsbatchnamematchedout"></a>

```json
{
  "matchedNames": [
    {
      "id": "string",
      "matchStatus": "Match",
      "score": 0,
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchedNames|[[NameMatchedOut](#schemanamematchedout)]|false|none|Classified matched names|

<h2 id="tocS_BatchPersonalNameCastegroupOut">BatchPersonalNameCastegroupOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamecastegroupout"></a>
<a id="schema_BatchPersonalNameCastegroupOut"></a>
<a id="tocSbatchpersonalnamecastegroupout"></a>
<a id="tocsbatchpersonalnamecastegroupout"></a>

```json
{
  "personalNames": [
    {
      "castegroup": "string",
      "castegroupAlt": "string",
      "castegroupTop": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameCastegroupOut](#schemapersonalnamecastegroupout)]|false|none|Caste group-coded names|

<h2 id="tocS_BatchPersonalNameGenderedOut">BatchPersonalNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegenderedout"></a>
<a id="schema_BatchPersonalNameGenderedOut"></a>
<a id="tocSbatchpersonalnamegenderedout"></a>
<a id="tocsbatchpersonalnamegenderedout"></a>

```json
{
  "personalNames": [
    {
      "genderScale": -1,
      "id": "string",
      "likelyGender": "male",
      "name": "string",
      "probabilityCalibrated": -1,
      "score": 0,
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameGenderedOut](#schemapersonalnamegenderedout)]|false|none|Classified genderized names|

<h2 id="tocS_BatchPersonalNameGeoIn">BatchPersonalNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegeoin"></a>
<a id="schema_BatchPersonalNameGeoIn"></a>
<a id="tocSbatchpersonalnamegeoin"></a>
<a id="tocsbatchpersonalnamegeoin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[PersonalNameGeoIn](#schemapersonalnamegeoin)]|false|none|none|

<h2 id="tocS_BatchPersonalNameGeoOut">BatchPersonalNameGeoOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegeoout"></a>
<a id="schema_BatchPersonalNameGeoOut"></a>
<a id="tocSbatchpersonalnamegeoout"></a>
<a id="tocsbatchpersonalnamegeoout"></a>

```json
{
  "personalNames": [
    {
      "countriesTop": [
        "string"
      ],
      "country": "string",
      "countryAlt": "string",
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "region": "string",
      "score": 0,
      "script": "string",
      "subRegion": "string",
      "topRegion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameGeoOut](#schemapersonalnamegeoout)]|false|none|Classified geo names|

<h2 id="tocS_BatchPersonalNameGeoSubdivisionIn">BatchPersonalNameGeoSubdivisionIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegeosubdivisionin"></a>
<a id="schema_BatchPersonalNameGeoSubdivisionIn"></a>
<a id="tocSbatchpersonalnamegeosubdivisionin"></a>
<a id="tocsbatchpersonalnamegeosubdivisionin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "countryIso2": "string",
      "id": "string",
      "name": "string",
      "subdivisionIso": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[PersonalNameGeoSubdivisionIn](#schemapersonalnamegeosubdivisionin)]|false|none|none|

<h2 id="tocS_BatchPersonalNameIn">BatchPersonalNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamein"></a>
<a id="schema_BatchPersonalNameIn"></a>
<a id="tocSbatchpersonalnamein"></a>
<a id="tocsbatchpersonalnamein"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[PersonalNameIn](#schemapersonalnamein)]|false|none|none|

<h2 id="tocS_BatchPersonalNameParsedOut">BatchPersonalNameParsedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnameparsedout"></a>
<a id="schema_BatchPersonalNameParsedOut"></a>
<a id="tocSbatchpersonalnameparsedout"></a>
<a id="tocsbatchpersonalnameparsedout"></a>

```json
{
  "personalNames": [
    {
      "firstLastName": {
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "script": "string"
      },
      "id": "string",
      "name": "string",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN1",
      "score": 0,
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameParsedOut](#schemapersonalnameparsedout)]|false|none|Classified parsed names|

<h2 id="tocS_BatchPersonalNameReligionedOut">BatchPersonalNameReligionedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamereligionedout"></a>
<a id="schema_BatchPersonalNameReligionedOut"></a>
<a id="tocSbatchpersonalnamereligionedout"></a>
<a id="tocsbatchpersonalnamereligionedout"></a>

```json
{
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "probabilityAltCalibrated": -1,
      "probabilityCalibrated": -1,
      "religion": "string",
      "religionAlt": "string",
      "religionsTop": [
        "string"
      ],
      "score": 0,
      "script": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameReligionedOut](#schemapersonalnamereligionedout)]|false|none|religious-coded names|

<h2 id="tocS_BatchPersonalNameSubdivisionIn">BatchPersonalNameSubdivisionIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamesubdivisionin"></a>
<a id="schema_BatchPersonalNameSubdivisionIn"></a>
<a id="tocSbatchpersonalnamesubdivisionin"></a>
<a id="tocsbatchpersonalnamesubdivisionin"></a>

```json
{
  "facts": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "personalNames": [
    {
      "id": "string",
      "name": "string",
      "subdivisionIso": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facts|[[FactIn](#schemafactin)]|false|none|none|
|personalNames|[[PersonalNameSubdivisionIn](#schemapersonalnamesubdivisionin)]|false|none|none|

<h2 id="tocS_BatchProperNounCategorizedOut">BatchProperNounCategorizedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpropernouncategorizedout"></a>
<a id="schema_BatchProperNounCategorizedOut"></a>
<a id="tocSbatchpropernouncategorizedout"></a>
<a id="tocsbatchpropernouncategorizedout"></a>

```json
{
  "properNouns": [
    {
      "commonType": "string",
      "commonTypeAlt": "string",
      "id": "string",
      "name": "string",
      "score": 0,
      "script": "string"
    }
  ]
}
```

Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properNouns|[[ProperNounCategorizedOut](#schemapropernouncategorizedout)]|false|none|Classified typed proper names|

<h2 id="tocS_CorridorIn">CorridorIn</h2>
<!-- backwards compatibility -->
<a id="schemacorridorin"></a>
<a id="schema_CorridorIn"></a>
<a id="tocScorridorin"></a>
<a id="tocscorridorin"></a>

```json
{
  "firstLastNameGeoFrom": {
    "countryIso2": "string",
    "firstName": "string",
    "id": "string",
    "lastName": "string"
  },
  "firstLastNameGeoTo": {
    "countryIso2": "string",
    "firstName": "string",
    "id": "string",
    "lastName": "string"
  },
  "id": "string"
}
```

Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstLastNameGeoFrom|[FirstLastNameGeoIn](#schemafirstlastnamegeoin)|false|none|none|
|firstLastNameGeoTo|[FirstLastNameGeoIn](#schemafirstlastnamegeoin)|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_CorridorOut">CorridorOut</h2>
<!-- backwards compatibility -->
<a id="schemacorridorout"></a>
<a id="schema_CorridorOut"></a>
<a id="tocScorridorout"></a>
<a id="tocscorridorout"></a>

```json
{
  "FirstLastNameDiasporaedOut": {
    "countryIso2": "string",
    "ethnicitiesTop": [
      "string"
    ],
    "ethnicity": "Chinese",
    "ethnicityAlt": "Japanese",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "lifted": true,
    "probabilityAltCalibrated": -1,
    "probabilityCalibrated": -1,
    "score": 0,
    "script": "string"
  },
  "FirstLastNameGenderedOut": {
    "firstName": "string",
    "genderScale": -1,
    "id": "string",
    "lastName": "string",
    "likelyGender": "male",
    "probabilityCalibrated": -1,
    "score": 0,
    "script": "string"
  },
  "FirstLastNameOriginedOut": {
    "countriesOriginTop": [
      "string"
    ],
    "countryOrigin": "string",
    "countryOriginAlt": "string",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "probabilityAltCalibrated": -1,
    "probabilityCalibrated": -1,
    "regionOrigin": "string",
    "score": 0,
    "script": "string",
    "subRegionOrigin": "string",
    "topRegionOrigin": "string"
  },
  "id": "string",
  "script": "string"
}
```

Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstLastNameDiasporaedOut|[FirstLastNameDiasporaedOut](#schemafirstlastnamediasporaedout)|false|none|Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.|
|FirstLastNameGenderedOut|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|false|none|Represents the output of inferring the LIKELY gender from a personal name.|
|FirstLastNameOriginedOut|[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)|false|none|Represents the output of inferring the LIKELY country of Origin from a personal name.|
|id|string|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_FactIn">FactIn</h2>
<!-- backwards compatibility -->
<a id="schemafactin"></a>
<a id="schema_FactIn"></a>
<a id="tocSfactin"></a>
<a id="tocsfactin"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_FeedbackLoopOut">FeedbackLoopOut</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackloopout"></a>
<a id="schema_FeedbackLoopOut"></a>
<a id="tocSfeedbackloopout"></a>
<a id="tocsfeedbackloopout"></a>

```json
{
  "feedbackCredits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackCredits|integer(int64)|false|none|Number of units recredited as per feedback loop successful classification|

<h2 id="tocS_FirstLastNameDiasporaedOut">FirstLastNameDiasporaedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamediasporaedout"></a>
<a id="schema_FirstLastNameDiasporaedOut"></a>
<a id="tocSfirstlastnamediasporaedout"></a>
<a id="tocsfirstlastnamediasporaedout"></a>

```json
{
  "countryIso2": "string",
  "ethnicitiesTop": [
    "string"
  ],
  "ethnicity": "Chinese",
  "ethnicityAlt": "Japanese",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "lifted": true,
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|From input data, the countryIso2 of geographic context (US,CA etc.)|
|ethnicitiesTop|[string]|false|none|List most likely ethnicities (top 10)|
|ethnicity|string|false|none|The most likely ethnicity|
|ethnicityAlt|string|false|none|The second best alternative ethnicity|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|lifted|boolean|false|none|Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true.|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for ethnicity to have been guessed correctly. -1 = still calibrating. |
|score|number(double)|false|none|Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

<h2 id="tocS_FirstLastNameGenderIn">FirstLastNameGenderIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegenderin"></a>
<a id="schema_FirstLastNameGenderIn"></a>
<a id="tocSfirstlastnamegenderin"></a>
<a id="tocsfirstlastnamegenderin"></a>

```json
{
  "firstName": "string",
  "gender": "string",
  "id": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|gender|string|false|none|The known gender of the name|
|id|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_FirstLastNameGenderedOut">FirstLastNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegenderedout"></a>
<a id="schema_FirstLastNameGenderedOut"></a>
<a id="tocSfirstlastnamegenderedout"></a>
<a id="tocsfirstlastnamegenderedout"></a>

```json
{
  "firstName": "string",
  "genderScale": -1,
  "id": "string",
  "lastName": "string",
  "likelyGender": "male",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

Represents the output of inferring the LIKELY gender from a personal name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name (also known as given name)|
|genderScale|number(double)|false|none|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|likelyGender|string|false|none|Most likely gender|
|probabilityCalibrated|number(double)|false|none|The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating. |
|score|number(double)|false|none|Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|likelyGender|male|
|likelyGender|female|
|likelyGender|unknown|

<h2 id="tocS_FirstLastNameGeoIn">FirstLastNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegeoin"></a>
<a id="schema_FirstLastNameGeoIn"></a>
<a id="tocSfirstlastnamegeoin"></a>
<a id="tocsfirstlastnamegeoin"></a>

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_FirstLastNameGeoSubclassificationOut">FirstLastNameGeoSubclassificationOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegeosubclassificationout"></a>
<a id="schema_FirstLastNameGeoSubclassificationOut"></a>
<a id="tocSfirstlastnamegeosubclassificationout"></a>
<a id="tocsfirstlastnamegeosubclassificationout"></a>

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string",
  "subClassification": "string",
  "subClassificationAlt": "string",
  "subclassificationTop": [
    "string"
  ]
}
```

Represents the geographic name origin at a country subclassification level (usually regional or state level).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|The input country ISO2 code|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for subclassification to have been guessed correctly. -1 = still calibrating. |
|score|number(double)|false|none|Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|
|subClassification|string|false|none|Most likely subclassification ISO_3166-2 code|
|subClassificationAlt|string|false|none|Second best alternative : subclassification ISO_3166-2 code|
|subclassificationTop|[string]|false|none|List subclassification ISO_3166-2 codes (top 10)|

<h2 id="tocS_FirstLastNameGeoZippedIn">FirstLastNameGeoZippedIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegeozippedin"></a>
<a id="schema_FirstLastNameGeoZippedIn"></a>
<a id="tocSfirstlastnamegeozippedin"></a>
<a id="tocsfirstlastnamegeozippedin"></a>

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "zipCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|zipCode|string|false|none|none|

<h2 id="tocS_FirstLastNameIn">FirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamein"></a>
<a id="schema_FirstLastNameIn"></a>
<a id="tocSfirstlastnamein"></a>
<a id="tocsfirstlastnamein"></a>

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_FirstLastNameOriginedOut">FirstLastNameOriginedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameoriginedout"></a>
<a id="schema_FirstLastNameOriginedOut"></a>
<a id="tocSfirstlastnameoriginedout"></a>
<a id="tocsfirstlastnameoriginedout"></a>

```json
{
  "countriesOriginTop": [
    "string"
  ],
  "countryOrigin": "string",
  "countryOriginAlt": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "regionOrigin": "string",
  "score": 0,
  "script": "string",
  "subRegionOrigin": "string",
  "topRegionOrigin": "string"
}
```

Represents the output of inferring the LIKELY country of Origin from a personal name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countriesOriginTop|[string]|false|none|List countries of Origin (top 10)|
|countryOrigin|string|false|none|Most likely country of Origin|
|countryOriginAlt|string|false|none|Second best alternative : country of Origin|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for countryOrigin to have been guessed correctly. -1 = still calibrating. |
|regionOrigin|string|false|none|Most likely region of Origin (based on countryOrigin ISO2 code)|
|score|number(double)|false|none|Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|
|subRegionOrigin|string|false|none|Most likely sub region of Origin (based on countryOrigin ISO2 code)|
|topRegionOrigin|string|false|none|Most likely top region of Origin (based on countryOrigin ISO2 code)|

<h2 id="tocS_FirstLastNameOut">FirstLastNameOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameout"></a>
<a id="schema_FirstLastNameOut"></a>
<a id="tocSfirstlastnameout"></a>
<a id="tocsfirstlastnameout"></a>

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "script": "string"
}
```

First / last name structure corresponding to the most likely parsing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|script|string|false|none|none|

<h2 id="tocS_FirstLastNamePhoneCodedOut">FirstLastNamePhoneCodedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonecodedout"></a>
<a id="schema_FirstLastNamePhoneCodedOut"></a>
<a id="tocSfirstlastnamephonecodedout"></a>
<a id="tocsfirstlastnamephonecodedout"></a>

```json
{
  "countryIso2": "string",
  "firstName": "string",
  "id": "string",
  "internationalPhoneNumberVerified": "string",
  "lastName": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneCountryCode": 0,
  "phoneCountryCodeAlt": 0,
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "phoneCountryIso2Verified": "string",
  "phoneNumber": "string",
  "score": 0,
  "script": "string",
  "verified": true
}
```

Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|internationalPhoneNumberVerified|string|false|none|The normalized phone number, verified using libphonenumber.|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|originCountryIso2|string|false|none|The likely country of origin of the name.|
|originCountryIso2Alt|string|false|none|The best alternative country of origin of the name.|
|phoneCountryCode|integer(int32)|false|none|The phone country code of the phone number, verified using libphonenumber.|
|phoneCountryCodeAlt|integer(int32)|false|none|The best alternative phone country code of the phone number.|
|phoneCountryIso2|string|false|none|The likely country of the phone number.|
|phoneCountryIso2Alt|string|false|none|The best alternative country of the phone number.|
|phoneCountryIso2Verified|string|false|none|The phone ISO2 country code, verified using libphonenumber.|
|phoneNumber|string|false|none|The input phone number.|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|
|verified|boolean|false|none|Indicates if the phone number could be positively verified using libphonenumber.|

<h2 id="tocS_FirstLastNamePhoneNumberGeoIn">FirstLastNamePhoneNumberGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonenumbergeoin"></a>
<a id="schema_FirstLastNamePhoneNumberGeoIn"></a>
<a id="tocSfirstlastnamephonenumbergeoin"></a>
<a id="tocsfirstlastnamephonenumbergeoin"></a>

```json
{
  "countryIso2": "string",
  "countryIso2Alt": "string",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "phoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|countryIso2Alt|string|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|phoneNumber|string|false|none|none|

<h2 id="tocS_FirstLastNamePhoneNumberIn">FirstLastNamePhoneNumberIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonenumberin"></a>
<a id="schema_FirstLastNamePhoneNumberIn"></a>
<a id="tocSfirstlastnamephonenumberin"></a>
<a id="tocsfirstlastnamephonenumberin"></a>

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "phoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|id|string|false|none|none|
|lastName|string|false|none|none|
|phoneNumber|string|false|none|none|

<h2 id="tocS_FirstLastNameUSRaceEthnicityOut">FirstLastNameUSRaceEthnicityOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameusraceethnicityout"></a>
<a id="schema_FirstLastNameUSRaceEthnicityOut"></a>
<a id="tocSfirstlastnameusraceethnicityout"></a>
<a id="tocsfirstlastnameusraceethnicityout"></a>

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "raceEthnicitiesTop": [
    "string"
  ],
  "raceEthnicity": "W_NL",
  "raceEthnicityAlt": "W_NL",
  "score": 0,
  "script": "string"
}
```

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for raceEthnicity to have been guessed correctly. -1 = still calibrating. |
|raceEthnicitiesTop|[string]|false|none|List 'race'/ethnicities|
|raceEthnicity|string|false|none|Most likely US 'race'/ethnicity|
|raceEthnicityAlt|string|false|none|Second most likely US 'race'/ethnicity|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|raceEthnicity|W_NL|
|raceEthnicity|HL|
|raceEthnicity|A|
|raceEthnicity|B_NL|
|raceEthnicity|AI_AN|
|raceEthnicity|PI|
|raceEthnicityAlt|W_NL|
|raceEthnicityAlt|HL|
|raceEthnicityAlt|A|
|raceEthnicityAlt|B_NL|
|raceEthnicityAlt|AI_AN|
|raceEthnicityAlt|PI|

<h2 id="tocS_MatchPersonalFirstLastNameIn">MatchPersonalFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemamatchpersonalfirstlastnamein"></a>
<a id="schema_MatchPersonalFirstLastNameIn"></a>
<a id="tocSmatchpersonalfirstlastnamein"></a>
<a id="tocsmatchpersonalfirstlastnamein"></a>

```json
{
  "id": "string",
  "name1": {
    "firstName": "string",
    "id": "string",
    "lastName": "string"
  },
  "name2": {
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name1|[FirstLastNameIn](#schemafirstlastnamein)|false|none|none|
|name2|[PersonalNameIn](#schemapersonalnamein)|false|none|none|

<h2 id="tocS_NameGeoIn">NameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemanamegeoin"></a>
<a id="schema_NameGeoIn"></a>
<a id="tocSnamegeoin"></a>
<a id="tocsnamegeoin"></a>

```json
{
  "countryIso2": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_NameIn">NameIn</h2>
<!-- backwards compatibility -->
<a id="schemanamein"></a>
<a id="schema_NameIn"></a>
<a id="tocSnamein"></a>
<a id="tocsnamein"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_NameMatchCandidateOut">NameMatchCandidateOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchcandidateout"></a>
<a id="schema_NameMatchCandidateOut"></a>
<a id="tocSnamematchcandidateout"></a>
<a id="tocsnamematchcandidateout"></a>

```json
{
  "candidateName": "string",
  "predScoreFamilyName": 0,
  "predScoreGivenName": 0,
  "probability": 0
}
```

The ordered list of name matching candidates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidateName|string|false|none|The name matching candidate name|
|predScoreFamilyName|number(double)|false|none|The family name prediction score.|
|predScoreGivenName|number(double)|false|none|The given name prediction score.|
|probability|number(double)|false|none|The name matching estimated probability.|

<h2 id="tocS_NameMatchCandidatesOut">NameMatchCandidatesOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchcandidatesout"></a>
<a id="schema_NameMatchCandidatesOut"></a>
<a id="tocSnamematchcandidatesout"></a>
<a id="tocsnamematchcandidatesout"></a>

```json
{
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "matchCandidates": [
    {
      "candidateName": "string",
      "predScoreFamilyName": 0,
      "predScoreGivenName": 0,
      "probability": 0
    }
  ],
  "orderOption": "string",
  "script": "string"
}
```

Classified matched names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name (also known as given name)|
|id|string|false|none|none|
|lastName|string|false|none|The last name (also known as family name, or surname)|
|matchCandidates|[[NameMatchCandidateOut](#schemanamematchcandidateout)]|false|none|The ordered list of name matching candidates|
|orderOption|string|false|none|The option for ordering|
|script|string|false|none|none|

<h2 id="tocS_NameMatchedOut">NameMatchedOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchedout"></a>
<a id="schema_NameMatchedOut"></a>
<a id="tocSnamematchedout"></a>
<a id="tocsnamematchedout"></a>

```json
{
  "id": "string",
  "matchStatus": "Match",
  "score": 0,
  "script": "string"
}
```

Classified matched names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|matchStatus|string|false|none|The name matching status.|
|score|number(double)|false|none|none|
|script|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matchStatus|Match|
|matchStatus|Mismatch|

<h2 id="tocS_PersonalNameCastegroupOut">PersonalNameCastegroupOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamecastegroupout"></a>
<a id="schema_PersonalNameCastegroupOut"></a>
<a id="tocSpersonalnamecastegroupout"></a>
<a id="tocspersonalnamecastegroupout"></a>

```json
{
  "castegroup": "string",
  "castegroupAlt": "string",
  "castegroupTop": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

Caste group-coded names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|castegroup|string|false|none|Most likely caste group|
|castegroupAlt|string|false|none|Second best alternative : caste group |
|castegroupTop|[string]|false|none|List caste group (top 10)|
|id|string|false|none|none|
|name|string|false|none|The input name.|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for country to have been guessed correctly. -1 = still calibrating. |
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

<h2 id="tocS_PersonalNameGenderedOut">PersonalNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegenderedout"></a>
<a id="schema_PersonalNameGenderedOut"></a>
<a id="tocSpersonalnamegenderedout"></a>
<a id="tocspersonalnamegenderedout"></a>

```json
{
  "genderScale": -1,
  "id": "string",
  "likelyGender": "male",
  "name": "string",
  "probabilityCalibrated": -1,
  "score": 0,
  "script": "string"
}
```

Classified genderized names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genderScale|number(double)|false|none|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value.|
|id|string|false|none|none|
|likelyGender|string|false|none|Most likely gender|
|name|string|false|none|The input name|
|probabilityCalibrated|number(double)|false|none|The calibrated probability for inferred gender to have been guessed correctly. -1 = still calibrating. |
|score|number(double)|false|none|Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|likelyGender|male|
|likelyGender|female|
|likelyGender|unknown|

<h2 id="tocS_PersonalNameGeoIn">PersonalNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegeoin"></a>
<a id="schema_PersonalNameGeoIn"></a>
<a id="tocSpersonalnamegeoin"></a>
<a id="tocspersonalnamegeoin"></a>

```json
{
  "countryIso2": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PersonalNameGeoOut">PersonalNameGeoOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegeoout"></a>
<a id="schema_PersonalNameGeoOut"></a>
<a id="tocSpersonalnamegeoout"></a>
<a id="tocspersonalnamegeoout"></a>

```json
{
  "countriesTop": [
    "string"
  ],
  "country": "string",
  "countryAlt": "string",
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "region": "string",
  "score": 0,
  "script": "string",
  "subRegion": "string",
  "topRegion": "string"
}
```

Classified geo names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countriesTop|[string]|false|none|List countries (top 10)|
|country|string|false|none|Most likely country |
|countryAlt|string|false|none|Second best alternative : country |
|id|string|false|none|none|
|name|string|false|none|The input name.|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for country to have been guessed correctly. -1 = still calibrating. |
|region|string|false|none|Most likely region (based on country ISO2 code)|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|
|subRegion|string|false|none|Most likely sub region (based on country ISO2 code)|
|topRegion|string|false|none|Most likely top region (based on country ISO2 code)|

<h2 id="tocS_PersonalNameGeoSubdivisionIn">PersonalNameGeoSubdivisionIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegeosubdivisionin"></a>
<a id="schema_PersonalNameGeoSubdivisionIn"></a>
<a id="tocSpersonalnamegeosubdivisionin"></a>
<a id="tocspersonalnamegeosubdivisionin"></a>

```json
{
  "countryIso2": "string",
  "id": "string",
  "name": "string",
  "subdivisionIso": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryIso2|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|subdivisionIso|string|false|none|none|

<h2 id="tocS_PersonalNameIn">PersonalNameIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamein"></a>
<a id="schema_PersonalNameIn"></a>
<a id="tocSpersonalnamein"></a>
<a id="tocspersonalnamein"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PersonalNameParsedOut">PersonalNameParsedOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnameparsedout"></a>
<a id="schema_PersonalNameParsedOut"></a>
<a id="tocSpersonalnameparsedout"></a>
<a id="tocspersonalnameparsedout"></a>

```json
{
  "firstLastName": {
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "script": "string"
  },
  "id": "string",
  "name": "string",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN1",
  "score": 0,
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstLastName|[FirstLastNameOut](#schemafirstlastnameout)|false|none|First / last name structure corresponding to the most likely parsing.|
|id|string|false|none|none|
|name|string|false|none|The input name|
|nameParserType|string|false|none|Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.|
|nameParserTypeAlt|string|false|none|Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|nameParserType|FN1LN1|
|nameParserType|LN1FN1|
|nameParserType|FN1LN2|
|nameParserType|LN2FN1|
|nameParserType|FN1LNx|
|nameParserType|LNxFN1|
|nameParserType|FN2LN1|
|nameParserType|LN1FN2|
|nameParserType|FN2LN2|
|nameParserType|LN2FN2|
|nameParserType|FN2LNx|
|nameParserType|LNxFN2|
|nameParserType|FNxLN1|
|nameParserType|LN1FNx|
|nameParserType|FNxLN2|
|nameParserType|LN2FNx|
|nameParserType|FNxLNx|
|nameParserType|LNxFNx|
|nameParserTypeAlt|FN1LN1|
|nameParserTypeAlt|LN1FN1|
|nameParserTypeAlt|FN1LN2|
|nameParserTypeAlt|LN2FN1|
|nameParserTypeAlt|FN1LNx|
|nameParserTypeAlt|LNxFN1|
|nameParserTypeAlt|FN2LN1|
|nameParserTypeAlt|LN1FN2|
|nameParserTypeAlt|FN2LN2|
|nameParserTypeAlt|LN2FN2|
|nameParserTypeAlt|FN2LNx|
|nameParserTypeAlt|LNxFN2|
|nameParserTypeAlt|FNxLN1|
|nameParserTypeAlt|LN1FNx|
|nameParserTypeAlt|FNxLN2|
|nameParserTypeAlt|LN2FNx|
|nameParserTypeAlt|FNxLNx|
|nameParserTypeAlt|LNxFNx|

<h2 id="tocS_PersonalNameReligionedOut">PersonalNameReligionedOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamereligionedout"></a>
<a id="schema_PersonalNameReligionedOut"></a>
<a id="tocSpersonalnamereligionedout"></a>
<a id="tocspersonalnamereligionedout"></a>

```json
{
  "id": "string",
  "name": "string",
  "probabilityAltCalibrated": -1,
  "probabilityCalibrated": -1,
  "religion": "string",
  "religionAlt": "string",
  "religionsTop": [
    "string"
  ],
  "score": 0,
  "script": "string"
}
```

religious-coded names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The input name.|
|probabilityAltCalibrated|number(double)|false|none|The calibrated probability for country OR countryAlt to have been guessed correctly. -1 = still calibrating. |
|probabilityCalibrated|number(double)|false|none|The calibrated probability for country to have been guessed correctly. -1 = still calibrating. |
|religion|string|false|none|Most likely religion|
|religionAlt|string|false|none|Second best alternative : religion |
|religionsTop|[string]|false|none|List countries (top 10)|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

<h2 id="tocS_PersonalNameSubdivisionIn">PersonalNameSubdivisionIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamesubdivisionin"></a>
<a id="schema_PersonalNameSubdivisionIn"></a>
<a id="tocSpersonalnamesubdivisionin"></a>
<a id="tocspersonalnamesubdivisionin"></a>

```json
{
  "id": "string",
  "name": "string",
  "subdivisionIso": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|subdivisionIso|string|false|none|none|

<h2 id="tocS_ProperNounCategorizedOut">ProperNounCategorizedOut</h2>
<!-- backwards compatibility -->
<a id="schemapropernouncategorizedout"></a>
<a id="schema_ProperNounCategorizedOut"></a>
<a id="tocSpropernouncategorizedout"></a>
<a id="tocspropernouncategorizedout"></a>

```json
{
  "commonType": "string",
  "commonTypeAlt": "string",
  "id": "string",
  "name": "string",
  "score": 0,
  "script": "string"
}
```

Classified typed proper names

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonType|string|false|none|The most likely common name type|
|commonTypeAlt|string|false|none|Best alternative for : The most likely common name type|
|id|string|false|none|none|
|name|string|false|none|The input name|
|score|number(double)|false|none|Higher score is better, but score is not normalized. Use calibratedProbability if available. |
|script|string|false|none|none|

<h2 id="tocS_RegionISO">RegionISO</h2>
<!-- backwards compatibility -->
<a id="schemaregioniso"></a>
<a id="schema_RegionISO"></a>
<a id="tocSregioniso"></a>
<a id="tocsregioniso"></a>

```json
{
  "countryFIPS": "string",
  "countryISO2": "string",
  "countryISO3": "string",
  "countryName": "string",
  "countryNumCode": "string",
  "region": "string",
  "subregion": "string",
  "topregion": "string"
}
```

List of countries and regions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryFIPS|string|false|none|none|
|countryISO2|string|false|none|none|
|countryISO3|string|false|none|none|
|countryName|string|false|none|none|
|countryNumCode|string|false|none|none|
|region|string|false|none|none|
|subregion|string|false|none|none|
|topregion|string|false|none|none|

<h2 id="tocS_RegionOut">RegionOut</h2>
<!-- backwards compatibility -->
<a id="schemaregionout"></a>
<a id="schema_RegionOut"></a>
<a id="tocSregionout"></a>
<a id="tocsregionout"></a>

```json
{
  "countriesAndRegions": [
    {
      "countryFIPS": "string",
      "countryISO2": "string",
      "countryISO3": "string",
      "countryName": "string",
      "countryNumCode": "string",
      "region": "string",
      "subregion": "string",
      "topregion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countriesAndRegions|[[RegionISO](#schemaregioniso)]|false|none|List of countries and regions|

<h2 id="tocS_SoftwareVersionOut">SoftwareVersionOut</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareversionout"></a>
<a id="schema_SoftwareVersionOut"></a>
<a id="tocSsoftwareversionout"></a>
<a id="tocssoftwareversionout"></a>

```json
{
  "softwareNameAndVersion": "string",
  "softwareVersion": [
    0
  ]
}
```

The software version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareNameAndVersion|string|false|none|The software version|
|softwareVersion|[integer(int32)]|false|none|The software version major minor build|
