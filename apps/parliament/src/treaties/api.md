<h1 id="treaties-api">Treaties API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API exposing details of the treaties laid before Parliament.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="treaties-api-businessitem">BusinessItem</h1>

## Returns business item by ID.

<a id="opIdGetBusinessItemById"></a>

> Code samples

```bash
curl https://example.com/api/BusinessItem/string \
  -H 'Accept: application/json'
```

`GET /api/BusinessItem/{id}`

<h3 id="returns-business-item-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Business item with the ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "businessItemUri": "http://example.com",
    "houseId": "string",
    "houseName": "string",
    "houseUri": "http://example.com",
    "houses": [
      {
        "house": "Commons",
        "name": "string"
      }
    ],
    "id": "string",
    "itemDate": "1970-01-01T00:00:00Z",
    "link": "string",
    "procedureStepId": "string",
    "procedureStepUri": "http://example.com",
    "sequence": 0,
    "stepName": "string",
    "treatyId": "string",
    "treatyUri": "http://example.com",
    "workpackageProcedureUri": "http://example.com"
  }
}
```

<h3 id="returns-business-item-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested business item|[BusinessItemResource](#schemabusinessitemresource)|
|400|Bad Request|Bad Request|None|
|404|Not Found|If the item doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="treaties-api-governmentorganisation">GovernmentOrganisation</h1>

## Returns all government organisations.

<a id="opIdGetOrganisations"></a>

> Code samples

```bash
curl https://example.com/api/GovernmentOrganisation \
  -H 'Accept: application/json'
```

`GET /api/GovernmentOrganisation`

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "id": 0,
        "name": "string"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

<h3 id="returns-all-government-organisations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GovernmentOrganisationResourceCollection](#schemagovernmentorganisationresourcecollection)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="treaties-api-seriesmembership">SeriesMembership</h1>

## Returns all series memberships.

<a id="opIdGetSeriesMemberships"></a>

> Code samples

```bash
curl https://example.com/api/SeriesMembership \
  -H 'Accept: application/json'
```

`GET /api/SeriesMembership`

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "description": "string",
        "id": 0
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

<h3 id="returns-all-series-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SeriesMembershipResourceCollection](#schemaseriesmembershipresourcecollection)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="treaties-api-treaty">Treaty</h1>

## Returns a list of treaties.

<a id="opIdGetTreaties"></a>

> Code samples

```bash
curl https://example.com/api/Treaty \
  -H 'Accept: application/json'
```

`GET /api/Treaty`

<h3 id="returns-a-list-of-treaties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SearchText|query|string \| null|false|Treaties which contains the search text specified|
|GovernmentOrganisationId|query|integer(int32) \| null|false|Treaties with the government organisation id specified|
|Series|query|[SeriesMembershipType](#schemaseriesmembershiptype)|false|Treaties with the series membership type specified|
|ParliamentaryProcess|query|[ParliamentaryProcess](#schemaparliamentaryprocess)|false|Treaties where the parliamentary process is concluded or notconcluded|
|DebateScheduled|query|boolean \| null|false|Treaties which contain a scheduled debate|
|MotionToNotRatify|query|boolean \| null|false|Treaties which contain a motion to not ratify|
|RecommendedNotRatify|query|boolean \| null|false|Treaties which are recommended to not ratify|
|House|query|[House](#schemahouse)|false|Treaties which are laid in the specified house|
|Skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|Take|query|integer(int32)|false|The number of records to return, default is 20|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Series|CountrySeriesMembership|
|Series|EuropeanUnionSeriesMembership|
|Series|MiscellaneousSeriesMembership|
|ParliamentaryProcess|NotConcluded|
|ParliamentaryProcess|Concluded|
|House|Commons|
|House|Lords|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "commandPaperNumber": 0,
        "commandPaperPrefix": "string",
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "countrySeriesItemCitation": "string",
        "countrySeriesMembership": "http://example.com",
        "debateScheduled": "string",
        "europeanSeriesItemCitation": "string",
        "europeanUnionSeriesMembership": "http://example.com",
        "id": "string",
        "layingBodyDepartment": {
          "id": 0,
          "name": "string"
        },
        "layingBodyDepartmentId": 0,
        "layingBodyName": "string",
        "leadDepartment": {
          "id": 0,
          "name": "string"
        },
        "leadGovernmentOrganisationDepartmentId": 0,
        "leadGovernmentOrganisationGroupName": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "miscSeriesItemCitation": "string",
        "miscellaneousSeriesMembership": "http://example.com",
        "name": "string",
        "parliamentaryConclusion": "NotConcluded",
        "treatySeriesMembership": {
          "citation": "string",
          "seriesMembershipType": "CountrySeriesMembership",
          "uri": "http://example.com"
        },
        "uri": "http://example.com",
        "webLink": "http://example.com"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-treaties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of treaties|[TreatyResourceCollection](#schematreatyresourcecollection)|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a treaty by ID.

<a id="opIdGetTreatyById"></a>

> Code samples

```bash
curl https://example.com/api/Treaty/string \
  -H 'Accept: application/json'
```

`GET /api/Treaty/{id}`

<h3 id="returns-a-treaty-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Treaty with ID specified|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "commandPaperNumber": 0,
    "commandPaperPrefix": "string",
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "countrySeriesItemCitation": "string",
    "countrySeriesMembership": "http://example.com",
    "debateScheduled": "string",
    "europeanSeriesItemCitation": "string",
    "europeanUnionSeriesMembership": "http://example.com",
    "id": "string",
    "layingBodyDepartment": {
      "id": 0,
      "name": "string"
    },
    "layingBodyDepartmentId": 0,
    "layingBodyName": "string",
    "leadDepartment": {
      "id": 0,
      "name": "string"
    },
    "leadGovernmentOrganisationDepartmentId": 0,
    "leadGovernmentOrganisationGroupName": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "miscSeriesItemCitation": "string",
    "miscellaneousSeriesMembership": "http://example.com",
    "name": "string",
    "parliamentaryConclusion": "NotConcluded",
    "treatySeriesMembership": {
      "citation": "string",
      "seriesMembershipType": "CountrySeriesMembership",
      "uri": "http://example.com"
    },
    "uri": "http://example.com",
    "webLink": "http://example.com"
  }
}
```

<h3 id="returns-a-treaty-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of the requested treaty|[TreatyResource](#schematreatyresource)|
|400|Bad Request|Bad Request|None|
|404|Not Found|If the treaty can't be found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns business items belonging to the treaty with ID.

<a id="opIdGetBusinessItemsByTreatyId"></a>

> Code samples

```bash
curl https://example.com/api/Treaty/string/BusinessItems \
  -H 'Accept: application/json'
```

`GET /api/Treaty/{id}/BusinessItems`

<h3 id="returns-business-items-belonging-to-the-treaty-with-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Business items belonging to treaty with the ID specified|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "businessItemUri": "http://example.com",
        "houseId": "string",
        "houseName": "string",
        "houseUri": "http://example.com",
        "houses": [
          {
            "house": "Commons",
            "name": "string"
          }
        ],
        "id": "string",
        "itemDate": "1970-01-01T00:00:00Z",
        "link": "string",
        "procedureStepId": "string",
        "procedureStepUri": "http://example.com",
        "sequence": 0,
        "stepName": "string",
        "treatyId": "string",
        "treatyUri": "http://example.com",
        "workpackageProcedureUri": "http://example.com"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

<h3 id="returns-business-items-belonging-to-the-treaty-with-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The business items for the requested treaty|[BusinessItemResourceCollection](#schemabusinessitemresourcecollection)|
|400|Bad Request|Bad Request|None|
|404|Not Found|If the treaty cannot be found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BusinessItem">BusinessItem</h2>
<!-- backwards compatibility -->
<a id="schemabusinessitem"></a>
<a id="schema_BusinessItem"></a>
<a id="tocSbusinessitem"></a>
<a id="tocsbusinessitem"></a>

```json
{
  "businessItemUri": "http://example.com",
  "houseId": "string",
  "houseName": "string",
  "houseUri": "http://example.com",
  "houses": [
    {
      "house": "Commons",
      "name": "string"
    }
  ],
  "id": "string",
  "itemDate": "1970-01-01T00:00:00Z",
  "link": "string",
  "procedureStepId": "string",
  "procedureStepUri": "http://example.com",
  "sequence": 0,
  "stepName": "string",
  "treatyId": "string",
  "treatyUri": "http://example.com",
  "workpackageProcedureUri": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessItemUri|string(uri) \| null|false|none|none|
|houseId|string \| null|false|none|none|
|houseName|string \| null|false|none|none|
|houseUri|string(uri) \| null|false|none|none|
|houses|[[BusinessItemHouse](#schemabusinessitemhouse)]|false|none|none|
|id|string \| null|false|none|none|
|itemDate|string(date-time)|false|none|none|
|link|string \| null|false|none|none|
|procedureStepId|string \| null|false|none|none|
|procedureStepUri|string(uri) \| null|false|none|none|
|sequence|integer(int32)|false|none|none|
|stepName|string \| null|false|none|none|
|treatyId|string \| null|false|none|none|
|treatyUri|string(uri) \| null|false|none|none|
|workpackageProcedureUri|string(uri) \| null|false|none|none|

<h2 id="tocS_BusinessItemHouse">BusinessItemHouse</h2>
<!-- backwards compatibility -->
<a id="schemabusinessitemhouse"></a>
<a id="schema_BusinessItemHouse"></a>
<a id="tocSbusinessitemhouse"></a>
<a id="tocsbusinessitemhouse"></a>

```json
{
  "house": "Commons",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|house|[House](#schemahouse)|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|Commons|
|house|Lords|

<h2 id="tocS_BusinessItemResource">BusinessItemResource</h2>
<!-- backwards compatibility -->
<a id="schemabusinessitemresource"></a>
<a id="schema_BusinessItemResource"></a>
<a id="tocSbusinessitemresource"></a>
<a id="tocsbusinessitemresource"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "businessItemUri": "http://example.com",
    "houseId": "string",
    "houseName": "string",
    "houseUri": "http://example.com",
    "houses": [
      {
        "house": "Commons",
        "name": "string"
      }
    ],
    "id": "string",
    "itemDate": "1970-01-01T00:00:00Z",
    "link": "string",
    "procedureStepId": "string",
    "procedureStepUri": "http://example.com",
    "sequence": 0,
    "stepName": "string",
    "treatyId": "string",
    "treatyUri": "http://example.com",
    "workpackageProcedureUri": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[BusinessItem](#schemabusinessitem)|false|none|none|

<h2 id="tocS_BusinessItemResourceCollection">BusinessItemResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemabusinessitemresourcecollection"></a>
<a id="schema_BusinessItemResourceCollection"></a>
<a id="tocSbusinessitemresourcecollection"></a>
<a id="tocsbusinessitemresourcecollection"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "businessItemUri": "http://example.com",
        "houseId": "string",
        "houseName": "string",
        "houseUri": "http://example.com",
        "houses": [
          {
            "house": "Commons",
            "name": "string"
          }
        ],
        "id": "string",
        "itemDate": "1970-01-01T00:00:00Z",
        "link": "string",
        "procedureStepId": "string",
        "procedureStepUri": "http://example.com",
        "sequence": 0,
        "stepName": "string",
        "treatyId": "string",
        "treatyUri": "http://example.com",
        "workpackageProcedureUri": "http://example.com"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BusinessItemResource](#schemabusinessitemresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_GovernmentOrganisation">GovernmentOrganisation</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentorganisation"></a>
<a id="schema_GovernmentOrganisation"></a>
<a id="tocSgovernmentorganisation"></a>
<a id="tocsgovernmentorganisation"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_GovernmentOrganisationResource">GovernmentOrganisationResource</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentorganisationresource"></a>
<a id="schema_GovernmentOrganisationResource"></a>
<a id="tocSgovernmentorganisationresource"></a>
<a id="tocsgovernmentorganisationresource"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "id": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[GovernmentOrganisation](#schemagovernmentorganisation)|false|none|none|

<h2 id="tocS_GovernmentOrganisationResourceCollection">GovernmentOrganisationResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemagovernmentorganisationresourcecollection"></a>
<a id="schema_GovernmentOrganisationResourceCollection"></a>
<a id="tocSgovernmentorganisationresourcecollection"></a>
<a id="tocsgovernmentorganisationresourcecollection"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "id": 0,
        "name": "string"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[GovernmentOrganisationResource](#schemagovernmentorganisationresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_House">House</h2>
<!-- backwards compatibility -->
<a id="schemahouse"></a>
<a id="schema_House"></a>
<a id="tocShouse"></a>
<a id="tocshouse"></a>

```json
"Commons"
```

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string",
  "method": "string",
  "rel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string \| null|false|none|none|
|method|string \| null|false|none|none|
|rel|string \| null|false|none|none|

<h2 id="tocS_ParliamentaryConclusion">ParliamentaryConclusion</h2>
<!-- backwards compatibility -->
<a id="schemaparliamentaryconclusion"></a>
<a id="schema_ParliamentaryConclusion"></a>
<a id="tocSparliamentaryconclusion"></a>
<a id="tocsparliamentaryconclusion"></a>

```json
"NotConcluded"
```

<h2 id="tocS_ParliamentaryProcess">ParliamentaryProcess</h2>
<!-- backwards compatibility -->
<a id="schemaparliamentaryprocess"></a>
<a id="schema_ParliamentaryProcess"></a>
<a id="tocSparliamentaryprocess"></a>
<a id="tocsparliamentaryprocess"></a>

```json
"NotConcluded"
```

<h2 id="tocS_SeriesMembership">SeriesMembership</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmembership"></a>
<a id="schema_SeriesMembership"></a>
<a id="tocSseriesmembership"></a>
<a id="tocsseriesmembership"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_SeriesMembershipResource">SeriesMembershipResource</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmembershipresource"></a>
<a id="schema_SeriesMembershipResource"></a>
<a id="tocSseriesmembershipresource"></a>
<a id="tocsseriesmembershipresource"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "description": "string",
    "id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[SeriesMembership](#schemaseriesmembership)|false|none|none|

<h2 id="tocS_SeriesMembershipResourceCollection">SeriesMembershipResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmembershipresourcecollection"></a>
<a id="schema_SeriesMembershipResourceCollection"></a>
<a id="tocSseriesmembershipresourcecollection"></a>
<a id="tocsseriesmembershipresourcecollection"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "description": "string",
        "id": 0
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SeriesMembershipResource](#schemaseriesmembershipresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_SeriesMembershipType">SeriesMembershipType</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmembershiptype"></a>
<a id="schema_SeriesMembershipType"></a>
<a id="tocSseriesmembershiptype"></a>
<a id="tocsseriesmembershiptype"></a>

```json
"CountrySeriesMembership"
```

<h2 id="tocS_Treaty">Treaty</h2>
<!-- backwards compatibility -->
<a id="schematreaty"></a>
<a id="schema_Treaty"></a>
<a id="tocStreaty"></a>
<a id="tocstreaty"></a>

```json
{
  "commandPaperNumber": 0,
  "commandPaperPrefix": "string",
  "commonsLayingDate": "1970-01-01T00:00:00Z",
  "countrySeriesItemCitation": "string",
  "countrySeriesMembership": "http://example.com",
  "debateScheduled": "string",
  "europeanSeriesItemCitation": "string",
  "europeanUnionSeriesMembership": "http://example.com",
  "id": "string",
  "layingBodyDepartment": {
    "id": 0,
    "name": "string"
  },
  "layingBodyDepartmentId": 0,
  "layingBodyName": "string",
  "leadDepartment": {
    "id": 0,
    "name": "string"
  },
  "leadGovernmentOrganisationDepartmentId": 0,
  "leadGovernmentOrganisationGroupName": "string",
  "lordsLayingDate": "1970-01-01T00:00:00Z",
  "miscSeriesItemCitation": "string",
  "miscellaneousSeriesMembership": "http://example.com",
  "name": "string",
  "parliamentaryConclusion": "NotConcluded",
  "treatySeriesMembership": {
    "citation": "string",
    "seriesMembershipType": "CountrySeriesMembership",
    "uri": "http://example.com"
  },
  "uri": "http://example.com",
  "webLink": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandPaperNumber|integer(int32) \| null|false|none|none|
|commandPaperPrefix|string \| null|false|none|none|
|commonsLayingDate|string(date-time)|false|none|none|
|countrySeriesItemCitation|string \| null|false|none|none|
|countrySeriesMembership|string(uri) \| null|false|none|none|
|debateScheduled|string \| null|false|none|none|
|europeanSeriesItemCitation|string \| null|false|none|none|
|europeanUnionSeriesMembership|string(uri) \| null|false|none|none|
|id|string \| null|false|none|none|
|layingBodyDepartment|[Department](#schemadepartment)|false|none|none|
|layingBodyDepartmentId|integer(int32) \| null|false|none|none|
|layingBodyName|string \| null|false|none|none|
|leadDepartment|[Department](#schemadepartment)|false|none|none|
|leadGovernmentOrganisationDepartmentId|integer(int32) \| null|false|none|none|
|leadGovernmentOrganisationGroupName|string \| null|false|none|none|
|lordsLayingDate|string(date-time)|false|none|none|
|miscSeriesItemCitation|string \| null|false|none|none|
|miscellaneousSeriesMembership|string(uri) \| null|false|none|none|
|name|string \| null|false|none|none|
|parliamentaryConclusion|[ParliamentaryConclusion](#schemaparliamentaryconclusion)|false|none|none|
|treatySeriesMembership|[TreatySeriesMembership](#schematreatyseriesmembership)|false|none|none|
|uri|string(uri) \| null|false|none|none|
|webLink|string(uri) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|parliamentaryConclusion|NotConcluded|
|parliamentaryConclusion|CanRatify|
|parliamentaryConclusion|CantRatify|

<h2 id="tocS_TreatyResource">TreatyResource</h2>
<!-- backwards compatibility -->
<a id="schematreatyresource"></a>
<a id="schema_TreatyResource"></a>
<a id="tocStreatyresource"></a>
<a id="tocstreatyresource"></a>

```json
{
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "value": {
    "commandPaperNumber": 0,
    "commandPaperPrefix": "string",
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "countrySeriesItemCitation": "string",
    "countrySeriesMembership": "http://example.com",
    "debateScheduled": "string",
    "europeanSeriesItemCitation": "string",
    "europeanUnionSeriesMembership": "http://example.com",
    "id": "string",
    "layingBodyDepartment": {
      "id": 0,
      "name": "string"
    },
    "layingBodyDepartmentId": 0,
    "layingBodyName": "string",
    "leadDepartment": {
      "id": 0,
      "name": "string"
    },
    "leadGovernmentOrganisationDepartmentId": 0,
    "leadGovernmentOrganisationGroupName": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "miscSeriesItemCitation": "string",
    "miscellaneousSeriesMembership": "http://example.com",
    "name": "string",
    "parliamentaryConclusion": "NotConcluded",
    "treatySeriesMembership": {
      "citation": "string",
      "seriesMembershipType": "CountrySeriesMembership",
      "uri": "http://example.com"
    },
    "uri": "http://example.com",
    "webLink": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Treaty](#schematreaty)|false|none|none|

<h2 id="tocS_TreatyResourceCollection">TreatyResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schematreatyresourcecollection"></a>
<a id="schema_TreatyResourceCollection"></a>
<a id="tocStreatyresourcecollection"></a>
<a id="tocstreatyresourcecollection"></a>

```json
{
  "items": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "commandPaperNumber": 0,
        "commandPaperPrefix": "string",
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "countrySeriesItemCitation": "string",
        "countrySeriesMembership": "http://example.com",
        "debateScheduled": "string",
        "europeanSeriesItemCitation": "string",
        "europeanUnionSeriesMembership": "http://example.com",
        "id": "string",
        "layingBodyDepartment": {
          "id": 0,
          "name": "string"
        },
        "layingBodyDepartmentId": 0,
        "layingBodyName": "string",
        "leadDepartment": {
          "id": 0,
          "name": "string"
        },
        "leadGovernmentOrganisationDepartmentId": 0,
        "leadGovernmentOrganisationGroupName": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "miscSeriesItemCitation": "string",
        "miscellaneousSeriesMembership": "http://example.com",
        "name": "string",
        "parliamentaryConclusion": "NotConcluded",
        "treatySeriesMembership": {
          "citation": "string",
          "seriesMembershipType": "CountrySeriesMembership",
          "uri": "http://example.com"
        },
        "uri": "http://example.com",
        "webLink": "http://example.com"
      }
    }
  ],
  "itemsPerPage": 0,
  "links": [
    {
      "href": "string",
      "method": "string",
      "rel": "string"
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TreatyResource](#schematreatyresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_TreatySeriesMembership">TreatySeriesMembership</h2>
<!-- backwards compatibility -->
<a id="schematreatyseriesmembership"></a>
<a id="schema_TreatySeriesMembership"></a>
<a id="tocStreatyseriesmembership"></a>
<a id="tocstreatyseriesmembership"></a>

```json
{
  "citation": "string",
  "seriesMembershipType": "CountrySeriesMembership",
  "uri": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citation|string \| null|false|none|none|
|seriesMembershipType|[SeriesMembershipType](#schemaseriesmembershiptype)|false|none|none|
|uri|string(uri) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|seriesMembershipType|CountrySeriesMembership|
|seriesMembershipType|EuropeanUnionSeriesMembership|
|seriesMembershipType|MiscellaneousSeriesMembership|
