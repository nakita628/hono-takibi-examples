<h1 id="statutory-instruments-api">Statutory Instruments API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API exposing details of the various types of Statutory Instruments laid before Parliament.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="statutory-instruments-api-businessitem">BusinessItem</h1>

## Returns business item by ID.

<a id="opIdGetBusinessItemById"></a>

> Code samples

```bash
curl https://example.com/api/v1/BusinessItem/string \
  -H 'Accept: application/json'
```

`GET /api/v1/BusinessItem/{id}`

<h3 id="returns-business-item-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Business item with the ID specified|
|LaidPaper|query|[LaidPaperType](#schemalaidpapertype)|false|Business item by laid paper type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|LaidPaper|StatutoryInstrument|
|LaidPaper|ProposedNegative|

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
    "laidPaperType": "StatutoryInstrument",
    "link": "string",
    "procedureStepId": "string",
    "procedureStepUri": "http://example.com",
    "sequence": 0,
    "statutoryInstrumentId": "string",
    "statutoryInstrumentUri": "http://example.com",
    "stepName": "string",
    "workpackageProcedureUri": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-business-item-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested business item|[BusinessItemResource](#schemabusinessitemresource)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|If the item doesn't exist|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="statutory-instruments-api-layingbody">LayingBody</h1>

## Returns all laying bodies.

<a id="opIdGetLayingBodies"></a>

> Code samples

```bash
curl https://example.com/api/v1/LayingBody \
  -H 'Accept: application/json'
```

`GET /api/v1/LayingBody`

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
        "departmentId": 0,
        "id": "string",
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

<h3 id="returns-all-laying-bodies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LayingBodyResourceCollection](#schemalayingbodyresourcecollection)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="statutory-instruments-api-procedure">Procedure</h1>

## Returns all procedures.

<a id="opIdGetProceduresV1"></a>

> Code samples

```bash
curl https://example.com/api/v1/Procedure \
  -H 'Accept: application/json'
```

`GET /api/v1/Procedure`

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
        "id": "string",
        "name": "string",
        "uri": "string"
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

<h3 id="returns-all-procedures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProcedureResourceCollection](#schemaprocedureresourcecollection)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns procedure by ID.

<a id="opIdGetProceduresByIdV1"></a>

> Code samples

```bash
curl https://example.com/api/v1/Procedure/string \
  -H 'Accept: application/json'
```

`GET /api/v1/Procedure/{id}`

<h3 id="returns-procedure-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Procedure with the ID specified|

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
    "description": "string",
    "id": "string",
    "name": "string",
    "uri": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-procedure-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProcedureDetailsResource](#schemaproceduredetailsresource)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="statutory-instruments-api-proposednegativestatutoryinstrument">ProposedNegativeStatutoryInstrument</h1>

## Returns a list of proposed negative statutory instruments.

<a id="opIdGetProposedNegativeStatutoryInstruments"></a>

> Code samples

```bash
curl https://example.com/api/v1/ProposedNegativeStatutoryInstrument \
  -H 'Accept: application/json'
```

`GET /api/v1/ProposedNegativeStatutoryInstrument`

<h3 id="returns-a-list-of-proposed-negative-statutory-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Proposed negative statutory instruments with the name provided|
|RecommendedForProcedureChange|query|boolean|false|Proposed negative statutory instruments recommended for procedure change|
|DepartmentId|query|integer(int32)|false|Proposed negative statutory instruments with the department ID specified|
|LayingBodyId|query|string|false|Proposed negative statutory instruments with the laying body ID specified|
|Skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|Take|query|integer(int32)|false|The number of records to return, default is 20|

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
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "commonsPublishedDate": "1970-01-01T00:00:00Z",
        "departmentId": 0,
        "id": "string",
        "layingBodyDepartment": {
          "departmentId": 0,
          "id": "string",
          "name": "string"
        },
        "layingBodyId": "string",
        "layingBodyName": "string",
        "link": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "lordsPublishedDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "procedure": {
          "id": "string",
          "name": "string",
          "uri": "string"
        },
        "procedureName": "string",
        "procedureUri": "string",
        "statutoryInstrument": {
          "id": "string",
          "name": "string"
        },
        "statutoryInstrumentPaperId": "string",
        "statutoryInstrumentPaperName": "string",
        "uri": "string"
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

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-a-list-of-proposed-negative-statutory-instruments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProposedNegativeStatutoryInstrumentResourceCollection](#schemaproposednegativestatutoryinstrumentresourcecollection)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns proposed negative statutory instrument by ID.

<a id="opIdGetProposedNegativeStatutoryInstrumentById"></a>

> Code samples

```bash
curl https://example.com/api/v1/ProposedNegativeStatutoryInstrument/string \
  -H 'Accept: application/json'
```

`GET /api/v1/ProposedNegativeStatutoryInstrument/{id}`

<h3 id="returns-proposed-negative-statutory-instrument-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Proposed negative statutory instrument with the ID specified|

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
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "commonsPublishedDate": "1970-01-01T00:00:00Z",
    "departmentId": 0,
    "id": "string",
    "layingBodyDepartment": {
      "departmentId": 0,
      "id": "string",
      "name": "string"
    },
    "layingBodyId": "string",
    "layingBodyName": "string",
    "link": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "lordsPublishedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "procedure": {
      "id": "string",
      "name": "string",
      "uri": "string"
    },
    "procedureName": "string",
    "procedureUri": "string",
    "statutoryInstrument": {
      "id": "string",
      "name": "string"
    },
    "statutoryInstrumentPaperId": "string",
    "statutoryInstrumentPaperName": "string",
    "uri": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-proposed-negative-statutory-instrument-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProposedNegativeStatutoryInstrumentResource](#schemaproposednegativestatutoryinstrumentresource)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns business items belonging to a proposed negative statutory instrument.

<a id="opIdGetBusinessItemsByProposedNegativeStatutoryInstrumentId"></a>

> Code samples

```bash
curl https://example.com/api/v1/ProposedNegativeStatutoryInstrument/string/BusinessItems \
  -H 'Accept: application/json'
```

`GET /api/v1/ProposedNegativeStatutoryInstrument/{id}/BusinessItems`

<h3 id="returns-business-items-belonging-to-a-proposed-negative-statutory-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Business items belonging to proposed negative statutory instrument with the ID specified|

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
        "laidPaperType": "StatutoryInstrument",
        "link": "string",
        "procedureStepId": "string",
        "procedureStepUri": "http://example.com",
        "sequence": 0,
        "statutoryInstrumentId": "string",
        "statutoryInstrumentUri": "http://example.com",
        "stepName": "string",
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

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-business-items-belonging-to-a-proposed-negative-statutory-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessItemResourceCollection](#schemabusinessitemresourcecollection)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="statutory-instruments-api-statutoryinstrument">StatutoryInstrument</h1>

## Returns a list of statutory instruments.

<a id="opIdGetStatutoryInstruments"></a>

> Code samples

```bash
curl https://example.com/api/v1/StatutoryInstrument \
  -H 'Accept: application/json'
```

`GET /api/v1/StatutoryInstrument`

<h3 id="returns-a-list-of-statutory-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Statutory instruments with the name specified|
|StatutoryInstrumentType|query|[StatutoryInstrumentType](#schemastatutoryinstrumenttype)|false|Statutory instruments where the statutory instrument type is the type provided|
|ScheduledDebate|query|boolean|false|Statutory instrument which contains a scheduled debate|
|MotionToStop|query|boolean|false|Statutory instruments which contains a motion to stop|
|ConcernsRaisedByCommittee|query|boolean|false|Statutory instruments which contains concerns raised by committee|
|ParliamentaryProcessConcluded|query|[ParliamentaryProcess](#schemaparliamentaryprocess)|false|Statutory instruments where the parliamentary process is concluded or notconcluded|
|DepartmentId|query|integer(int32)|false|Statutory instruments with the department ID specified|
|LayingBodyId|query|string|false|Statutory instruments with the laying body ID specified|
|House|query|[House](#schemahouse)|false|Statutory instruments laid in the house specified|
|Skip|query|integer(int32)|false|The number of records to skip from the first, default is 0|
|Take|query|integer(int32)|false|The number of records to return, default is 20|

#### Enumerated Values

|Parameter|Value|
|---|---|
|StatutoryInstrumentType|DraftAffirmative|
|StatutoryInstrumentType|DraftNegative|
|StatutoryInstrumentType|MadeAffirmative|
|StatutoryInstrumentType|MadeNegative|
|ParliamentaryProcessConcluded|NotConcluded|
|ParliamentaryProcessConcluded|Concluded|
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
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "commonsPublishedDate": "1970-01-01T00:00:00Z",
        "departmentId": 0,
        "id": "string",
        "layingBodyDepartment": {
          "departmentId": 0,
          "id": "string",
          "name": "string"
        },
        "layingBodyId": "string",
        "layingBodyName": "string",
        "link": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "lordsPublishedDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "paperComingIntoForceDate": "1970-01-01T00:00:00Z",
        "paperComingIntoForceNote": "string",
        "paperMadeDate": "1970-01-01T00:00:00Z",
        "paperNumber": 0,
        "paperPrefix": "string",
        "paperYear": "string",
        "procedure": {
          "id": "string",
          "name": "string",
          "uri": "string"
        },
        "procedureName": "string",
        "procedureUri": "string",
        "proposedNegativeStatutoryInstrument": {
          "id": "string",
          "name": "string"
        },
        "proposedNegativeStatutoryInstrumentPaperId": "string",
        "proposedNegativeStatutoryInstrumentPaperName": "string",
        "uri": "string"
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

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-a-list-of-statutory-instruments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StatutoryInstrumentResourceCollection](#schemastatutoryinstrumentresourcecollection)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a statutory instrument by ID.

<a id="opIdGetStatutoryInstrumentById"></a>

> Code samples

```bash
curl https://example.com/api/v1/StatutoryInstrument/string \
  -H 'Accept: application/json'
```

`GET /api/v1/StatutoryInstrument/{id}`

<h3 id="returns-a-statutory-instrument-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Statutory instrument with the ID specified|

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
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "commonsPublishedDate": "1970-01-01T00:00:00Z",
    "departmentId": 0,
    "id": "string",
    "layingBodyDepartment": {
      "departmentId": 0,
      "id": "string",
      "name": "string"
    },
    "layingBodyId": "string",
    "layingBodyName": "string",
    "link": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "lordsPublishedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "paperComingIntoForceDate": "1970-01-01T00:00:00Z",
    "paperComingIntoForceNote": "string",
    "paperMadeDate": "1970-01-01T00:00:00Z",
    "paperNumber": 0,
    "paperPrefix": "string",
    "paperYear": "string",
    "procedure": {
      "id": "string",
      "name": "string",
      "uri": "string"
    },
    "procedureName": "string",
    "procedureUri": "string",
    "proposedNegativeStatutoryInstrument": {
      "id": "string",
      "name": "string"
    },
    "proposedNegativeStatutoryInstrumentPaperId": "string",
    "proposedNegativeStatutoryInstrumentPaperName": "string",
    "uri": "string"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-a-statutory-instrument-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StatutoryInstrumentResource](#schemastatutoryinstrumentresource)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns business items belonging to statutory instrument with ID.

<a id="opIdGetBusinessItemsByStatutoryInstrumentId"></a>

> Code samples

```bash
curl https://example.com/api/v1/StatutoryInstrument/string/BusinessItems \
  -H 'Accept: application/json'
```

`GET /api/v1/StatutoryInstrument/{id}/BusinessItems`

<h3 id="returns-business-items-belonging-to-statutory-instrument-with-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Business items belonging to statutory instrument with the ID specified|

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
        "laidPaperType": "StatutoryInstrument",
        "link": "string",
        "procedureStepId": "string",
        "procedureStepUri": "http://example.com",
        "sequence": 0,
        "statutoryInstrumentId": "string",
        "statutoryInstrumentUri": "http://example.com",
        "stepName": "string",
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

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="returns-business-items-belonging-to-statutory-instrument-with-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessItemResourceCollection](#schemabusinessitemresourcecollection)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

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
  "laidPaperType": "StatutoryInstrument",
  "link": "string",
  "procedureStepId": "string",
  "procedureStepUri": "http://example.com",
  "sequence": 0,
  "statutoryInstrumentId": "string",
  "statutoryInstrumentUri": "http://example.com",
  "stepName": "string",
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
|itemDate|string(date-time) \| null|false|none|none|
|laidPaperType|[LaidPaperType](#schemalaidpapertype)|false|none|none|
|link|string \| null|false|none|none|
|procedureStepId|string \| null|false|none|none|
|procedureStepUri|string(uri) \| null|false|none|none|
|sequence|integer(int32)|false|none|none|
|statutoryInstrumentId|string \| null|false|none|none|
|statutoryInstrumentUri|string(uri) \| null|false|none|none|
|stepName|string \| null|false|none|none|
|workpackageProcedureUri|string(uri) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|laidPaperType|StatutoryInstrument|
|laidPaperType|ProposedNegative|

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
    "laidPaperType": "StatutoryInstrument",
    "link": "string",
    "procedureStepId": "string",
    "procedureStepUri": "http://example.com",
    "sequence": 0,
    "statutoryInstrumentId": "string",
    "statutoryInstrumentUri": "http://example.com",
    "stepName": "string",
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
        "laidPaperType": "StatutoryInstrument",
        "link": "string",
        "procedureStepId": "string",
        "procedureStepUri": "http://example.com",
        "sequence": 0,
        "statutoryInstrumentId": "string",
        "statutoryInstrumentUri": "http://example.com",
        "stepName": "string",
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
  "departmentId": 0,
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departmentId|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_House">House</h2>
<!-- backwards compatibility -->
<a id="schemahouse"></a>
<a id="schema_House"></a>
<a id="tocShouse"></a>
<a id="tocshouse"></a>

```json
"Commons"
```

<h2 id="tocS_LaidPaperSummary">LaidPaperSummary</h2>
<!-- backwards compatibility -->
<a id="schemalaidpapersummary"></a>
<a id="schema_LaidPaperSummary"></a>
<a id="tocSlaidpapersummary"></a>
<a id="tocslaidpapersummary"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LaidPaperType">LaidPaperType</h2>
<!-- backwards compatibility -->
<a id="schemalaidpapertype"></a>
<a id="schema_LaidPaperType"></a>
<a id="tocSlaidpapertype"></a>
<a id="tocslaidpapertype"></a>

```json
"StatutoryInstrument"
```

<h2 id="tocS_LayingBody">LayingBody</h2>
<!-- backwards compatibility -->
<a id="schemalayingbody"></a>
<a id="schema_LayingBody"></a>
<a id="tocSlayingbody"></a>
<a id="tocslayingbody"></a>

```json
{
  "departmentId": 0,
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departmentId|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LayingBodyResource">LayingBodyResource</h2>
<!-- backwards compatibility -->
<a id="schemalayingbodyresource"></a>
<a id="schema_LayingBodyResource"></a>
<a id="tocSlayingbodyresource"></a>
<a id="tocslayingbodyresource"></a>

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
    "departmentId": 0,
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[LayingBody](#schemalayingbody)|false|none|none|

<h2 id="tocS_LayingBodyResourceCollection">LayingBodyResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemalayingbodyresourcecollection"></a>
<a id="schema_LayingBodyResourceCollection"></a>
<a id="tocSlayingbodyresourcecollection"></a>
<a id="tocslayingbodyresourcecollection"></a>

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
        "departmentId": 0,
        "id": "string",
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
|items|[[LayingBodyResource](#schemalayingbodyresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

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

<h2 id="tocS_ParliamentaryProcess">ParliamentaryProcess</h2>
<!-- backwards compatibility -->
<a id="schemaparliamentaryprocess"></a>
<a id="schema_ParliamentaryProcess"></a>
<a id="tocSparliamentaryprocess"></a>
<a id="tocsparliamentaryprocess"></a>

```json
"NotConcluded"
```

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| null|false|none|none|
|instance|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|
|type|string \| null|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_Procedure">Procedure</h2>
<!-- backwards compatibility -->
<a id="schemaprocedure"></a>
<a id="schema_Procedure"></a>
<a id="tocSprocedure"></a>
<a id="tocsprocedure"></a>

```json
{
  "id": "string",
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_ProcedureDetails">ProcedureDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproceduredetails"></a>
<a id="schema_ProcedureDetails"></a>
<a id="tocSproceduredetails"></a>
<a id="tocsproceduredetails"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_ProcedureDetailsResource">ProcedureDetailsResource</h2>
<!-- backwards compatibility -->
<a id="schemaproceduredetailsresource"></a>
<a id="schema_ProcedureDetailsResource"></a>
<a id="tocSproceduredetailsresource"></a>
<a id="tocsproceduredetailsresource"></a>

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
    "id": "string",
    "name": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[ProcedureDetails](#schemaproceduredetails)|false|none|none|

<h2 id="tocS_ProcedureResource">ProcedureResource</h2>
<!-- backwards compatibility -->
<a id="schemaprocedureresource"></a>
<a id="schema_ProcedureResource"></a>
<a id="tocSprocedureresource"></a>
<a id="tocsprocedureresource"></a>

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
    "id": "string",
    "name": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[Procedure](#schemaprocedure)|false|none|none|

<h2 id="tocS_ProcedureResourceCollection">ProcedureResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaprocedureresourcecollection"></a>
<a id="schema_ProcedureResourceCollection"></a>
<a id="tocSprocedureresourcecollection"></a>
<a id="tocsprocedureresourcecollection"></a>

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
        "id": "string",
        "name": "string",
        "uri": "string"
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
|items|[[ProcedureResource](#schemaprocedureresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_ProposedNegativeStatutoryInstrument">ProposedNegativeStatutoryInstrument</h2>
<!-- backwards compatibility -->
<a id="schemaproposednegativestatutoryinstrument"></a>
<a id="schema_ProposedNegativeStatutoryInstrument"></a>
<a id="tocSproposednegativestatutoryinstrument"></a>
<a id="tocsproposednegativestatutoryinstrument"></a>

```json
{
  "commonsLayingDate": "1970-01-01T00:00:00Z",
  "commonsPublishedDate": "1970-01-01T00:00:00Z",
  "departmentId": 0,
  "id": "string",
  "layingBodyDepartment": {
    "departmentId": 0,
    "id": "string",
    "name": "string"
  },
  "layingBodyId": "string",
  "layingBodyName": "string",
  "link": "string",
  "lordsLayingDate": "1970-01-01T00:00:00Z",
  "lordsPublishedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "procedure": {
    "id": "string",
    "name": "string",
    "uri": "string"
  },
  "procedureName": "string",
  "procedureUri": "string",
  "statutoryInstrument": {
    "id": "string",
    "name": "string"
  },
  "statutoryInstrumentPaperId": "string",
  "statutoryInstrumentPaperName": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonsLayingDate|string(date-time) \| null|false|none|none|
|commonsPublishedDate|string(date-time) \| null|false|none|none|
|departmentId|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|layingBodyDepartment|[Department](#schemadepartment)|false|none|none|
|layingBodyId|string \| null|false|none|none|
|layingBodyName|string \| null|false|none|none|
|link|string \| null|false|none|none|
|lordsLayingDate|string(date-time) \| null|false|none|none|
|lordsPublishedDate|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|none|
|procedure|[Procedure](#schemaprocedure)|false|none|none|
|procedureName|string \| null|false|none|none|
|procedureUri|string \| null|false|none|none|
|statutoryInstrument|[LaidPaperSummary](#schemalaidpapersummary)|false|none|none|
|statutoryInstrumentPaperId|string \| null|false|none|none|
|statutoryInstrumentPaperName|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_ProposedNegativeStatutoryInstrumentResource">ProposedNegativeStatutoryInstrumentResource</h2>
<!-- backwards compatibility -->
<a id="schemaproposednegativestatutoryinstrumentresource"></a>
<a id="schema_ProposedNegativeStatutoryInstrumentResource"></a>
<a id="tocSproposednegativestatutoryinstrumentresource"></a>
<a id="tocsproposednegativestatutoryinstrumentresource"></a>

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
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "commonsPublishedDate": "1970-01-01T00:00:00Z",
    "departmentId": 0,
    "id": "string",
    "layingBodyDepartment": {
      "departmentId": 0,
      "id": "string",
      "name": "string"
    },
    "layingBodyId": "string",
    "layingBodyName": "string",
    "link": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "lordsPublishedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "procedure": {
      "id": "string",
      "name": "string",
      "uri": "string"
    },
    "procedureName": "string",
    "procedureUri": "string",
    "statutoryInstrument": {
      "id": "string",
      "name": "string"
    },
    "statutoryInstrumentPaperId": "string",
    "statutoryInstrumentPaperName": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[ProposedNegativeStatutoryInstrument](#schemaproposednegativestatutoryinstrument)|false|none|none|

<h2 id="tocS_ProposedNegativeStatutoryInstrumentResourceCollection">ProposedNegativeStatutoryInstrumentResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaproposednegativestatutoryinstrumentresourcecollection"></a>
<a id="schema_ProposedNegativeStatutoryInstrumentResourceCollection"></a>
<a id="tocSproposednegativestatutoryinstrumentresourcecollection"></a>
<a id="tocsproposednegativestatutoryinstrumentresourcecollection"></a>

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
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "commonsPublishedDate": "1970-01-01T00:00:00Z",
        "departmentId": 0,
        "id": "string",
        "layingBodyDepartment": {
          "departmentId": 0,
          "id": "string",
          "name": "string"
        },
        "layingBodyId": "string",
        "layingBodyName": "string",
        "link": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "lordsPublishedDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "procedure": {
          "id": "string",
          "name": "string",
          "uri": "string"
        },
        "procedureName": "string",
        "procedureUri": "string",
        "statutoryInstrument": {
          "id": "string",
          "name": "string"
        },
        "statutoryInstrumentPaperId": "string",
        "statutoryInstrumentPaperName": "string",
        "uri": "string"
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
|items|[[ProposedNegativeStatutoryInstrumentResource](#schemaproposednegativestatutoryinstrumentresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_StatutoryInstrument">StatutoryInstrument</h2>
<!-- backwards compatibility -->
<a id="schemastatutoryinstrument"></a>
<a id="schema_StatutoryInstrument"></a>
<a id="tocSstatutoryinstrument"></a>
<a id="tocsstatutoryinstrument"></a>

```json
{
  "commonsLayingDate": "1970-01-01T00:00:00Z",
  "commonsPublishedDate": "1970-01-01T00:00:00Z",
  "departmentId": 0,
  "id": "string",
  "layingBodyDepartment": {
    "departmentId": 0,
    "id": "string",
    "name": "string"
  },
  "layingBodyId": "string",
  "layingBodyName": "string",
  "link": "string",
  "lordsLayingDate": "1970-01-01T00:00:00Z",
  "lordsPublishedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "paperComingIntoForceDate": "1970-01-01T00:00:00Z",
  "paperComingIntoForceNote": "string",
  "paperMadeDate": "1970-01-01T00:00:00Z",
  "paperNumber": 0,
  "paperPrefix": "string",
  "paperYear": "string",
  "procedure": {
    "id": "string",
    "name": "string",
    "uri": "string"
  },
  "procedureName": "string",
  "procedureUri": "string",
  "proposedNegativeStatutoryInstrument": {
    "id": "string",
    "name": "string"
  },
  "proposedNegativeStatutoryInstrumentPaperId": "string",
  "proposedNegativeStatutoryInstrumentPaperName": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonsLayingDate|string(date-time) \| null|false|none|none|
|commonsPublishedDate|string(date-time) \| null|false|none|none|
|departmentId|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|layingBodyDepartment|[Department](#schemadepartment)|false|none|none|
|layingBodyId|string \| null|false|none|none|
|layingBodyName|string \| null|false|none|none|
|link|string \| null|false|none|none|
|lordsLayingDate|string(date-time) \| null|false|none|none|
|lordsPublishedDate|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|none|
|paperComingIntoForceDate|string(date-time) \| null|false|none|none|
|paperComingIntoForceNote|string \| null|false|none|none|
|paperMadeDate|string(date-time)|false|none|none|
|paperNumber|integer(int32) \| null|false|none|none|
|paperPrefix|string \| null|false|none|none|
|paperYear|string \| null|false|none|none|
|procedure|[Procedure](#schemaprocedure)|false|none|none|
|procedureName|string \| null|false|none|none|
|procedureUri|string \| null|false|none|none|
|proposedNegativeStatutoryInstrument|[LaidPaperSummary](#schemalaidpapersummary)|false|none|none|
|proposedNegativeStatutoryInstrumentPaperId|string \| null|false|none|none|
|proposedNegativeStatutoryInstrumentPaperName|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_StatutoryInstrumentResource">StatutoryInstrumentResource</h2>
<!-- backwards compatibility -->
<a id="schemastatutoryinstrumentresource"></a>
<a id="schema_StatutoryInstrumentResource"></a>
<a id="tocSstatutoryinstrumentresource"></a>
<a id="tocsstatutoryinstrumentresource"></a>

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
    "commonsLayingDate": "1970-01-01T00:00:00Z",
    "commonsPublishedDate": "1970-01-01T00:00:00Z",
    "departmentId": 0,
    "id": "string",
    "layingBodyDepartment": {
      "departmentId": 0,
      "id": "string",
      "name": "string"
    },
    "layingBodyId": "string",
    "layingBodyName": "string",
    "link": "string",
    "lordsLayingDate": "1970-01-01T00:00:00Z",
    "lordsPublishedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "paperComingIntoForceDate": "1970-01-01T00:00:00Z",
    "paperComingIntoForceNote": "string",
    "paperMadeDate": "1970-01-01T00:00:00Z",
    "paperNumber": 0,
    "paperPrefix": "string",
    "paperYear": "string",
    "procedure": {
      "id": "string",
      "name": "string",
      "uri": "string"
    },
    "procedureName": "string",
    "procedureUri": "string",
    "proposedNegativeStatutoryInstrument": {
      "id": "string",
      "name": "string"
    },
    "proposedNegativeStatutoryInstrumentPaperId": "string",
    "proposedNegativeStatutoryInstrumentPaperName": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[StatutoryInstrument](#schemastatutoryinstrument)|false|none|none|

<h2 id="tocS_StatutoryInstrumentResourceCollection">StatutoryInstrumentResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemastatutoryinstrumentresourcecollection"></a>
<a id="schema_StatutoryInstrumentResourceCollection"></a>
<a id="tocSstatutoryinstrumentresourcecollection"></a>
<a id="tocsstatutoryinstrumentresourcecollection"></a>

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
        "commonsLayingDate": "1970-01-01T00:00:00Z",
        "commonsPublishedDate": "1970-01-01T00:00:00Z",
        "departmentId": 0,
        "id": "string",
        "layingBodyDepartment": {
          "departmentId": 0,
          "id": "string",
          "name": "string"
        },
        "layingBodyId": "string",
        "layingBodyName": "string",
        "link": "string",
        "lordsLayingDate": "1970-01-01T00:00:00Z",
        "lordsPublishedDate": "1970-01-01T00:00:00Z",
        "name": "string",
        "paperComingIntoForceDate": "1970-01-01T00:00:00Z",
        "paperComingIntoForceNote": "string",
        "paperMadeDate": "1970-01-01T00:00:00Z",
        "paperNumber": 0,
        "paperPrefix": "string",
        "paperYear": "string",
        "procedure": {
          "id": "string",
          "name": "string",
          "uri": "string"
        },
        "procedureName": "string",
        "procedureUri": "string",
        "proposedNegativeStatutoryInstrument": {
          "id": "string",
          "name": "string"
        },
        "proposedNegativeStatutoryInstrumentPaperId": "string",
        "proposedNegativeStatutoryInstrumentPaperName": "string",
        "uri": "string"
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
|items|[[StatutoryInstrumentResource](#schemastatutoryinstrumentresource)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|links|[[Link](#schemalink)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_StatutoryInstrumentType">StatutoryInstrumentType</h2>
<!-- backwards compatibility -->
<a id="schemastatutoryinstrumenttype"></a>
<a id="schema_StatutoryInstrumentType"></a>
<a id="tocSstatutoryinstrumenttype"></a>
<a id="tocsstatutoryinstrumenttype"></a>

```json
"DraftAffirmative"
```
