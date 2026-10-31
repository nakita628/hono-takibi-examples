<h1 id="bills-api">Bills API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to get and search for information regarding Bills, their stages, associated amendments and publications.

Base URLs:

* <a href="https://bills-api.parliament.uk">https://bills-api.parliament.uk</a>

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk">UK Parliament</a> 

<h1 id="bills-api-billtypes">BillTypes</h1>

## Returns a list of Bill types.

> Code samples

```bash
curl https://example.com/api/v1/BillTypes \
  -H 'Accept: application/json'
```

`GET /api/v1/BillTypes`

<h3 id="returns-a-list-of-bill-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Category|query|[BillTypeCategory](#schemabilltypecategory)|false|none|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Category|Public|
|Category|Private|
|Category|Hybrid|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "category": "Public",
      "description": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-bill-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillTypeSearchResult](#schemabilltypesearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-bills">Bills</h1>

## Returns a list of Bills.

<a id="opIdGetBills"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills`

<h3 id="returns-a-list-of-bills-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SearchTerm|query|string|false|none|
|Session|query|integer(int32)|false|none|
|CurrentHouse|query|[House](#schemahouse)|false|none|
|OriginatingHouse|query|[OriginatingHouse](#schemaoriginatinghouse)|false|none|
|MemberId|query|integer(int32)|false|none|
|DepartmentId|query|integer(int32)|false|none|
|BillStage|query|[integer(int32)]|false|none|
|BillStagesExcluded|query|[integer(int32)]|false|none|
|IsDefeated|query|boolean|false|none|
|IsWithdrawn|query|boolean|false|none|
|BillType|query|[integer(int32)]|false|none|
|SortOrder|query|[BillSortOrder](#schemabillsortorder)|false|none|
|BillIds|query|[integer(int32)]|false|none|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|CurrentHouse|All|
|CurrentHouse|Commons|
|CurrentHouse|Lords|
|CurrentHouse|Unassigned|
|OriginatingHouse|All|
|OriginatingHouse|Commons|
|OriginatingHouse|Lords|
|SortOrder|TitleAscending|
|SortOrder|TitleDescending|
|SortOrder|DateUpdatedAscending|
|SortOrder|DateUpdatedDescending|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "billId": 0,
      "billTypeId": 0,
      "billWithdrawn": "1970-01-01T00:00:00Z",
      "currentHouse": "All",
      "currentStage": {
        "abbreviation": "string",
        "description": "string",
        "house": "All",
        "id": 0,
        "sessionId": 0,
        "sortOrder": 0,
        "stageId": 0,
        "stageSittings": [
          {
            "billId": 0,
            "billStageId": 0,
            "date": "1970-01-01T00:00:00Z",
            "id": 0,
            "stageId": 0
          }
        ]
      },
      "includedSessionIds": [
        0
      ],
      "introducedSessionId": 0,
      "isAct": true,
      "isDefeated": true,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "originatingHouse": "All",
      "shortTitle": "string"
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-bills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillSummarySearchResult](#schemabillsummarysearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Return a Bill.

<a id="opIdGetBill"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}`

<h3 id="return-a-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Bill with ID specified|

> Example responses

> 200 Response

```json
{
  "agent": {
    "address": "string",
    "email": "string",
    "name": "string",
    "phoneNo": "string",
    "website": "string"
  },
  "billId": 0,
  "billTypeId": 0,
  "billWithdrawn": "1970-01-01T00:00:00Z",
  "currentHouse": "All",
  "currentStage": {
    "abbreviation": "string",
    "description": "string",
    "house": "All",
    "id": 0,
    "sessionId": 0,
    "sortOrder": 0,
    "stageId": 0,
    "stageSittings": [
      {
        "billId": 0,
        "billStageId": 0,
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "stageId": 0
      }
    ]
  },
  "includedSessionIds": [
    0
  ],
  "introducedSessionId": 0,
  "isAct": true,
  "isDefeated": true,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "longTitle": "string",
  "originatingHouse": "All",
  "petitionInformation": "string",
  "petitioningPeriod": "string",
  "promoters": [
    {
      "organisationName": "string",
      "organisationUrl": "string"
    }
  ],
  "shortTitle": "string",
  "sponsors": [
    {
      "member": {
        "house": "All",
        "memberFrom": "string",
        "memberId": 0,
        "memberPage": "string",
        "memberPhoto": "string",
        "name": "string",
        "party": "string",
        "partyColour": "string"
      },
      "organisation": {
        "name": "string",
        "url": "string"
      },
      "sortOrder": 0
    }
  ],
  "summary": "string"
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

<h3 id="return-a-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Bill](#schemabill)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns all Bill stages.

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Stages \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Stages`

<h3 id="returns-all-bill-stages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Stages relating to a Bill with Bill ID specified|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "abbreviation": "string",
      "description": "string",
      "house": "All",
      "id": 0,
      "sessionId": 0,
      "sortOrder": 0,
      "stageId": 0,
      "stageSittings": [
        {
          "billId": 0,
          "billStageId": 0,
          "date": "1970-01-01T00:00:00Z",
          "id": 0,
          "stageId": 0
        }
      ]
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-all-bill-stages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StageSummarySearchResult](#schemastagesummarysearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a Bill stage.

<a id="opIdGetBillStageDetails"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Stages/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Stages/{billStageId}`

<h3 id="returns-a-bill-stage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Bill stage relating to Bill with Bill ID specified|
|billStageId|path|integer(int32)|true|Bill stage with ID specified|

> Example responses

> 200 Response

```json
{
  "abbreviation": "string",
  "committee": {
    "category": "string",
    "house": "Commons",
    "id": 0,
    "name": "string",
    "url": "string"
  },
  "description": "string",
  "house": "All",
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextStageBillStageId": 0,
  "previousStageBillStageId": 0,
  "sessionId": 0,
  "sortOrder": 0,
  "stageId": 0,
  "stageSittings": [
    {
      "billId": 0,
      "billStageId": 0,
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "stageId": 0
    }
  ]
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

<h3 id="returns-a-bill-stage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillStageDetails](#schemabillstagedetails)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-billnews">BillNews</h1>

## Returns a list of news articles for a Bill.

<a id="opIdGetNewsArticles"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/NewsArticles \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/NewsArticles`

<h3 id="returns-a-list-of-news-articles-for-a-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|none|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "content": "string",
      "displayDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "title": "string"
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-news-articles-for-a-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NewsArticlesSummarySearchResult](#schemanewsarticlessummarysearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-publications">Publications</h1>

## Return a list of Bill publications.

<a id="opIdGetBillPublication"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Publications \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Publications`

<h3 id="return-a-list-of-bill-publications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Publications relating to Bill with Bill ID specified|

> Example responses

> 200 Response

```json
{
  "billId": 0,
  "publications": [
    {
      "displayDate": "1970-01-01T00:00:00Z",
      "files": [
        {
          "contentLength": 0,
          "contentType": "string",
          "filename": "string",
          "id": 0
        }
      ],
      "house": "All",
      "id": 0,
      "links": [
        {
          "contentType": "string",
          "id": 0,
          "title": "string",
          "url": "string"
        }
      ],
      "publicationType": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "title": "string"
    }
  ]
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

<h3 id="return-a-list-of-bill-publications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillPublicationList](#schemabillpublicationlist)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of Bill stage publications.

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Stages/0/Publications \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Stages/{stageId}/Publications`

<h3 id="return-a-list-of-bill-stage-publications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|none|
|stageId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "billStageId": 0,
  "publications": [
    {
      "displayDate": "1970-01-01T00:00:00Z",
      "files": [
        {
          "contentLength": 0,
          "contentType": "string",
          "filename": "string",
          "id": 0
        }
      ],
      "id": 0,
      "links": [
        {
          "contentType": "string",
          "id": 0,
          "title": "string",
          "url": "string"
        }
      ],
      "publicationType": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "title": "string"
    }
  ],
  "sittings": [
    {
      "publications": [
        {
          "displayDate": "1970-01-01T00:00:00Z",
          "files": [
            {
              "contentLength": 0,
              "contentType": "string",
              "filename": "string",
              "id": 0
            }
          ],
          "id": 0,
          "links": [
            {
              "contentType": "string",
              "id": 0,
              "title": "string",
              "url": "string"
            }
          ],
          "publicationType": {
            "description": "string",
            "id": 0,
            "name": "string"
          },
          "title": "string"
        }
      ],
      "sittingId": 0
    }
  ]
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

<h3 id="return-a-list-of-bill-stage-publications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillStagePublicationList](#schemabillstagepublicationlist)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-amendments">Amendments</h1>

## Returns a list of amendments.

<a id="opIdGetAmendments"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Stages/0/Amendments \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Stages/{billStageId}/Amendments`

<h3 id="returns-a-list-of-amendments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Amendments relating to a Bill with Bill ID specified|
|billStageId|path|integer(int32)|true|Amendments relating to a Bill stage with Bill stage ID specified|
|SearchTerm|query|string|false|none|
|Decision|query|[Decision](#schemadecision)|false|none|
|MemberId|query|integer(int32)|false|none|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Decision|All|
|Decision|NoDecision|
|Decision|Withdrawn|
|Decision|Disagreed|
|Decision|NotMoved|
|Decision|Agreed|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "amendmentId": 0,
      "amendmentPosition": "string",
      "amendmentType": "EditLongTitle",
      "billId": 0,
      "billStageId": 0,
      "clause": 0,
      "decision": "NoDecision",
      "lineNumber": 0,
      "marshalledListText": "string",
      "pageNumber": 0,
      "schedule": 0,
      "sponsors": [
        {
          "house": "All",
          "isLead": true,
          "memberFrom": "string",
          "memberId": 0,
          "memberPage": "string",
          "memberPhoto": "string",
          "name": "string",
          "party": "string",
          "partyColour": "string",
          "sortOrder": 0
        }
      ],
      "summaryText": [
        "string"
      ]
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-amendments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AmendmentSearchItemSearchResult](#schemaamendmentsearchitemsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an amendment.

<a id="opIdGetAmendment"></a>

> Code samples

```bash
curl https://example.com/api/v1/Bills/0/Stages/0/Amendments/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/Bills/{billId}/Stages/{billStageId}/Amendments/{amendmentId}`

<h3 id="returns-an-amendment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|billId|path|integer(int32)|true|Amendment relating to a bill with bill ID specified|
|billStageId|path|integer(int32)|true|Amendment relating to a bill stage with bill stage ID specified|
|amendmentId|path|integer(int32)|true|Amendment with amendment ID specified|

> Example responses

> 200 Response

```json
{
  "amendmentId": 0,
  "amendmentLines": [
    {
      "hangingIndentation": "string",
      "imageType": "string",
      "indentation": 0,
      "isImage": true,
      "text": "string"
    }
  ],
  "amendmentNote": "string",
  "amendmentPosition": "string",
  "amendmentType": "EditLongTitle",
  "billId": 0,
  "billStageId": 0,
  "clause": 0,
  "decision": "NoDecision",
  "explanatoryText": "string",
  "explanatoryTextPrefix": "string",
  "lineNumber": 0,
  "marshalledListText": "string",
  "pageNumber": 0,
  "schedule": 0,
  "sponsors": [
    {
      "house": "All",
      "isLead": true,
      "memberFrom": "string",
      "memberId": 0,
      "memberPage": "string",
      "memberPhoto": "string",
      "name": "string",
      "party": "string",
      "partyColour": "string",
      "sortOrder": 0
    }
  ]
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

<h3 id="returns-an-amendment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AmendmentDetail](#schemaamendmentdetail)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-publicationtypes">PublicationTypes</h1>

## Returns a list of publication types.

> Code samples

```bash
curl https://example.com/api/v1/PublicationTypes \
  -H 'Accept: application/json'
```

`GET /api/v1/PublicationTypes`

<h3 id="returns-a-list-of-publication-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "description": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-publication-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublicationTypeSearchResult](#schemapublicationtypesearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-documents">Documents</h1>

## Return information on a document.

> Code samples

```bash
curl https://example.com/api/v1/Publications/0/Documents/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/Publications/{publicationId}/Documents/{documentId}`

<h3 id="return-information-on-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publicationId|path|integer(int32)|true|Document with publication Id specified|
|documentId|path|integer(int32)|true|Document with Id specified|

> Example responses

> 200 Response

```json
{
  "contentLength": 0,
  "contentType": "string",
  "filename": "string",
  "id": 0
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

<h3 id="return-information-on-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublicationDocument](#schemapublicationdocument)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Return a document.

> Code samples

```bash
curl https://example.com/api/v1/Publications/0/Documents/0/Download \
  -H 'Accept: application/json'
```

`GET /api/v1/Publications/{publicationId}/Documents/{documentId}/Download`

<h3 id="return-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publicationId|path|integer(int32)|true|Document with publication Id specified|
|documentId|path|integer(int32)|true|Document with Id specified|

> Example responses

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

<h3 id="return-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-rss">Rss</h1>

## Returns an Rss feed of a certain Bill.

> Code samples

```bash
curl https://example.com/api/v1/Rss/Bills/0.rss \
  -H 'Accept: application/json'
```

`GET /api/v1/Rss/Bills/{id}.rss`

<h3 id="returns-an-rss-feed-of-a-certain-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Id of Bill|

> Example responses

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

<h3 id="returns-an-rss-feed-of-a-certain-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an Rss feed of all Bills.

> Code samples

```bash
curl https://example.com/api/v1/Rss/allbills.rss
```

`GET /api/v1/Rss/allbills.rss`

<h3 id="returns-an-rss-feed-of-all-bills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an Rss feed of private Bills.

> Code samples

```bash
curl https://example.com/api/v1/Rss/privatebills.rss
```

`GET /api/v1/Rss/privatebills.rss`

<h3 id="returns-an-rss-feed-of-private-bills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an Rss feed of public Bills.

> Code samples

```bash
curl https://example.com/api/v1/Rss/publicbills.rss
```

`GET /api/v1/Rss/publicbills.rss`

<h3 id="returns-an-rss-feed-of-public-bills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-sittings">Sittings</h1>

## Returns a list of Sittings.

<a id="opIdGetSittings"></a>

> Code samples

```bash
curl https://example.com/api/v1/Sittings \
  -H 'Accept: application/json'
```

`GET /api/v1/Sittings`

<h3 id="returns-a-list-of-sittings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|House|query|[House](#schemahouse)|false|none|
|DateFrom|query|string(date-time)|false|none|
|DateTo|query|string(date-time)|false|none|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|House|All|
|House|Commons|
|House|Lords|
|House|Unassigned|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "billId": 0,
      "billStageId": 0,
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "stageId": 0
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-sittings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BillStageSittingSearchResult](#schemabillstagesittingsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bills-api-stages">Stages</h1>

## Returns a list of Bill stages.

> Code samples

```bash
curl https://example.com/api/v1/Stages \
  -H 'Accept: application/json'
```

`GET /api/v1/Stages`

<h3 id="returns-a-list-of-bill-stages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Skip|query|integer(int32)|false|none|
|Take|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "house": "All",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
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

<h3 id="returns-a-list-of-bill-stages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StageReferenceSearchResult](#schemastagereferencesearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AmendmentDecision">AmendmentDecision</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentdecision"></a>
<a id="schema_AmendmentDecision"></a>
<a id="tocSamendmentdecision"></a>
<a id="tocsamendmentdecision"></a>

```json
"NoDecision"
```

<h2 id="tocS_AmendmentDetail">AmendmentDetail</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentdetail"></a>
<a id="schema_AmendmentDetail"></a>
<a id="tocSamendmentdetail"></a>
<a id="tocsamendmentdetail"></a>

```json
{
  "amendmentId": 0,
  "amendmentLines": [
    {
      "hangingIndentation": "string",
      "imageType": "string",
      "indentation": 0,
      "isImage": true,
      "text": "string"
    }
  ],
  "amendmentNote": "string",
  "amendmentPosition": "string",
  "amendmentType": "EditLongTitle",
  "billId": 0,
  "billStageId": 0,
  "clause": 0,
  "decision": "NoDecision",
  "explanatoryText": "string",
  "explanatoryTextPrefix": "string",
  "lineNumber": 0,
  "marshalledListText": "string",
  "pageNumber": 0,
  "schedule": 0,
  "sponsors": [
    {
      "house": "All",
      "isLead": true,
      "memberFrom": "string",
      "memberId": 0,
      "memberPage": "string",
      "memberPhoto": "string",
      "name": "string",
      "party": "string",
      "partyColour": "string",
      "sortOrder": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amendmentId|integer(int32)|false|none|none|
|amendmentLines|[[AmendmentLine](#schemaamendmentline)]|false|none|none|
|amendmentNote|string \| null|false|none|none|
|amendmentPosition|string \| null|false|none|none|
|amendmentType|[AmendmentType](#schemaamendmenttype)|false|none|none|
|billId|integer(int32)|false|none|none|
|billStageId|integer(int32)|false|none|none|
|clause|integer(int32) \| null|false|none|none|
|decision|[AmendmentDecision](#schemaamendmentdecision)|false|none|none|
|explanatoryText|string \| null|false|none|none|
|explanatoryTextPrefix|string \| null|false|none|none|
|lineNumber|integer(int32) \| null|false|none|none|
|marshalledListText|string \| null|false|none|none|
|pageNumber|integer(int32) \| null|false|none|none|
|schedule|integer(int32) \| null|false|none|none|
|sponsors|[[AmendmentMember](#schemaamendmentmember)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|amendmentType|EditLongTitle|
|amendmentType|EditBillBody|
|amendmentType|AddClauseOrSchedule|
|amendmentType|DeleteClauseOrSchedule|
|decision|NoDecision|
|decision|Withdrawn|
|decision|Disagreed|
|decision|NotMoved|
|decision|Agreed|

<h2 id="tocS_AmendmentLine">AmendmentLine</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentline"></a>
<a id="schema_AmendmentLine"></a>
<a id="tocSamendmentline"></a>
<a id="tocsamendmentline"></a>

```json
{
  "hangingIndentation": "string",
  "imageType": "string",
  "indentation": 0,
  "isImage": true,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hangingIndentation|string \| null|false|none|none|
|imageType|string \| null|false|none|none|
|indentation|integer(int32)|false|none|none|
|isImage|boolean|false|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_AmendmentMember">AmendmentMember</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentmember"></a>
<a id="schema_AmendmentMember"></a>
<a id="tocSamendmentmember"></a>
<a id="tocsamendmentmember"></a>

```json
{
  "house": "All",
  "isLead": true,
  "memberFrom": "string",
  "memberId": 0,
  "memberPage": "string",
  "memberPhoto": "string",
  "name": "string",
  "party": "string",
  "partyColour": "string",
  "sortOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|house|[House](#schemahouse)|false|none|none|
|isLead|boolean|false|none|none|
|memberFrom|string \| null|false|none|none|
|memberId|integer(int32)|false|none|none|
|memberPage|string \| null|false|none|none|
|memberPhoto|string \| null|false|none|none|
|name|string \| null|false|none|none|
|party|string \| null|false|none|none|
|partyColour|string \| null|false|none|none|
|sortOrder|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_AmendmentSearchItem">AmendmentSearchItem</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentsearchitem"></a>
<a id="schema_AmendmentSearchItem"></a>
<a id="tocSamendmentsearchitem"></a>
<a id="tocsamendmentsearchitem"></a>

```json
{
  "amendmentId": 0,
  "amendmentPosition": "string",
  "amendmentType": "EditLongTitle",
  "billId": 0,
  "billStageId": 0,
  "clause": 0,
  "decision": "NoDecision",
  "lineNumber": 0,
  "marshalledListText": "string",
  "pageNumber": 0,
  "schedule": 0,
  "sponsors": [
    {
      "house": "All",
      "isLead": true,
      "memberFrom": "string",
      "memberId": 0,
      "memberPage": "string",
      "memberPhoto": "string",
      "name": "string",
      "party": "string",
      "partyColour": "string",
      "sortOrder": 0
    }
  ],
  "summaryText": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amendmentId|integer(int32)|false|none|none|
|amendmentPosition|string \| null|false|none|none|
|amendmentType|[AmendmentType](#schemaamendmenttype)|false|none|none|
|billId|integer(int32)|false|none|none|
|billStageId|integer(int32)|false|none|none|
|clause|integer(int32) \| null|false|none|none|
|decision|[AmendmentDecision](#schemaamendmentdecision)|false|none|none|
|lineNumber|integer(int32) \| null|false|none|none|
|marshalledListText|string \| null|false|none|none|
|pageNumber|integer(int32) \| null|false|none|none|
|schedule|integer(int32) \| null|false|none|none|
|sponsors|[[AmendmentMember](#schemaamendmentmember)]|false|none|none|
|summaryText|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|amendmentType|EditLongTitle|
|amendmentType|EditBillBody|
|amendmentType|AddClauseOrSchedule|
|amendmentType|DeleteClauseOrSchedule|
|decision|NoDecision|
|decision|Withdrawn|
|decision|Disagreed|
|decision|NotMoved|
|decision|Agreed|

<h2 id="tocS_AmendmentSearchItemSearchResult">AmendmentSearchItemSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentsearchitemsearchresult"></a>
<a id="schema_AmendmentSearchItemSearchResult"></a>
<a id="tocSamendmentsearchitemsearchresult"></a>
<a id="tocsamendmentsearchitemsearchresult"></a>

```json
{
  "items": [
    {
      "amendmentId": 0,
      "amendmentPosition": "string",
      "amendmentType": "EditLongTitle",
      "billId": 0,
      "billStageId": 0,
      "clause": 0,
      "decision": "NoDecision",
      "lineNumber": 0,
      "marshalledListText": "string",
      "pageNumber": 0,
      "schedule": 0,
      "sponsors": [
        {
          "house": "All",
          "isLead": true,
          "memberFrom": "string",
          "memberId": 0,
          "memberPage": "string",
          "memberPhoto": "string",
          "name": "string",
          "party": "string",
          "partyColour": "string",
          "sortOrder": 0
        }
      ],
      "summaryText": [
        "string"
      ]
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AmendmentSearchItem](#schemaamendmentsearchitem)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_AmendmentType">AmendmentType</h2>
<!-- backwards compatibility -->
<a id="schemaamendmenttype"></a>
<a id="schema_AmendmentType"></a>
<a id="tocSamendmenttype"></a>
<a id="tocsamendmenttype"></a>

```json
"EditLongTitle"
```

<h2 id="tocS_Bill">Bill</h2>
<!-- backwards compatibility -->
<a id="schemabill"></a>
<a id="schema_Bill"></a>
<a id="tocSbill"></a>
<a id="tocsbill"></a>

```json
{
  "agent": {
    "address": "string",
    "email": "string",
    "name": "string",
    "phoneNo": "string",
    "website": "string"
  },
  "billId": 0,
  "billTypeId": 0,
  "billWithdrawn": "1970-01-01T00:00:00Z",
  "currentHouse": "All",
  "currentStage": {
    "abbreviation": "string",
    "description": "string",
    "house": "All",
    "id": 0,
    "sessionId": 0,
    "sortOrder": 0,
    "stageId": 0,
    "stageSittings": [
      {
        "billId": 0,
        "billStageId": 0,
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "stageId": 0
      }
    ]
  },
  "includedSessionIds": [
    0
  ],
  "introducedSessionId": 0,
  "isAct": true,
  "isDefeated": true,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "longTitle": "string",
  "originatingHouse": "All",
  "petitionInformation": "string",
  "petitioningPeriod": "string",
  "promoters": [
    {
      "organisationName": "string",
      "organisationUrl": "string"
    }
  ],
  "shortTitle": "string",
  "sponsors": [
    {
      "member": {
        "house": "All",
        "memberFrom": "string",
        "memberId": 0,
        "memberPage": "string",
        "memberPhoto": "string",
        "name": "string",
        "party": "string",
        "partyColour": "string"
      },
      "organisation": {
        "name": "string",
        "url": "string"
      },
      "sortOrder": 0
    }
  ],
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|[BillAgent](#schemabillagent)|false|none|none|
|billId|integer(int32)|false|none|none|
|billTypeId|integer(int32)|false|none|none|
|billWithdrawn|string(date-time) \| null|false|none|none|
|currentHouse|[House](#schemahouse)|false|none|none|
|currentStage|[StageSummary](#schemastagesummary)|false|none|none|
|includedSessionIds|[integer(int32)]|false|none|none|
|introducedSessionId|integer(int32)|false|none|none|
|isAct|boolean|false|none|none|
|isDefeated|boolean|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|longTitle|string \| null|false|none|none|
|originatingHouse|[House](#schemahouse)|false|none|none|
|petitionInformation|string \| null|false|none|none|
|petitioningPeriod|string \| null|false|none|none|
|promoters|[[Promoter](#schemapromoter)]|false|none|none|
|shortTitle|string \| null|false|none|none|
|sponsors|[[Sponsor](#schemasponsor)]|false|none|none|
|summary|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currentHouse|All|
|currentHouse|Commons|
|currentHouse|Lords|
|currentHouse|Unassigned|
|originatingHouse|All|
|originatingHouse|Commons|
|originatingHouse|Lords|
|originatingHouse|Unassigned|

<h2 id="tocS_BillAgent">BillAgent</h2>
<!-- backwards compatibility -->
<a id="schemabillagent"></a>
<a id="schema_BillAgent"></a>
<a id="tocSbillagent"></a>
<a id="tocsbillagent"></a>

```json
{
  "address": "string",
  "email": "string",
  "name": "string",
  "phoneNo": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string \| null|false|none|none|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|
|phoneNo|string \| null|false|none|none|
|website|string \| null|false|none|none|

<h2 id="tocS_BillPublication">BillPublication</h2>
<!-- backwards compatibility -->
<a id="schemabillpublication"></a>
<a id="schema_BillPublication"></a>
<a id="tocSbillpublication"></a>
<a id="tocsbillpublication"></a>

```json
{
  "displayDate": "1970-01-01T00:00:00Z",
  "files": [
    {
      "contentLength": 0,
      "contentType": "string",
      "filename": "string",
      "id": 0
    }
  ],
  "house": "All",
  "id": 0,
  "links": [
    {
      "contentType": "string",
      "id": 0,
      "title": "string",
      "url": "string"
    }
  ],
  "publicationType": {
    "description": "string",
    "id": 0,
    "name": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayDate|string(date-time)|false|none|none|
|files|[[PublicationDocument](#schemapublicationdocument)]|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|links|[[PublicationLink](#schemapublicationlink)]|false|none|none|
|publicationType|[PublicationType](#schemapublicationtype)|false|none|none|
|title|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_BillPublicationList">BillPublicationList</h2>
<!-- backwards compatibility -->
<a id="schemabillpublicationlist"></a>
<a id="schema_BillPublicationList"></a>
<a id="tocSbillpublicationlist"></a>
<a id="tocsbillpublicationlist"></a>

```json
{
  "billId": 0,
  "publications": [
    {
      "displayDate": "1970-01-01T00:00:00Z",
      "files": [
        {
          "contentLength": 0,
          "contentType": "string",
          "filename": "string",
          "id": 0
        }
      ],
      "house": "All",
      "id": 0,
      "links": [
        {
          "contentType": "string",
          "id": 0,
          "title": "string",
          "url": "string"
        }
      ],
      "publicationType": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billId|integer(int32)|false|none|none|
|publications|[[BillPublication](#schemabillpublication)]|false|none|none|

<h2 id="tocS_BillSortOrder">BillSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemabillsortorder"></a>
<a id="schema_BillSortOrder"></a>
<a id="tocSbillsortorder"></a>
<a id="tocsbillsortorder"></a>

```json
"TitleAscending"
```

<h2 id="tocS_BillStageDetails">BillStageDetails</h2>
<!-- backwards compatibility -->
<a id="schemabillstagedetails"></a>
<a id="schema_BillStageDetails"></a>
<a id="tocSbillstagedetails"></a>
<a id="tocsbillstagedetails"></a>

```json
{
  "abbreviation": "string",
  "committee": {
    "category": "string",
    "house": "Commons",
    "id": 0,
    "name": "string",
    "url": "string"
  },
  "description": "string",
  "house": "All",
  "id": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "nextStageBillStageId": 0,
  "previousStageBillStageId": 0,
  "sessionId": 0,
  "sortOrder": 0,
  "stageId": 0,
  "stageSittings": [
    {
      "billId": 0,
      "billStageId": 0,
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "stageId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string \| null|false|none|none|
|committee|[Committee](#schemacommittee)|false|none|none|
|description|string \| null|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|nextStageBillStageId|integer(int32) \| null|false|none|none|
|previousStageBillStageId|integer(int32) \| null|false|none|none|
|sessionId|integer(int32)|false|none|none|
|sortOrder|integer(int32)|false|none|none|
|stageId|integer(int32)|false|none|none|
|stageSittings|[[BillStageSitting](#schemabillstagesitting)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_BillStagePublicationList">BillStagePublicationList</h2>
<!-- backwards compatibility -->
<a id="schemabillstagepublicationlist"></a>
<a id="schema_BillStagePublicationList"></a>
<a id="tocSbillstagepublicationlist"></a>
<a id="tocsbillstagepublicationlist"></a>

```json
{
  "billStageId": 0,
  "publications": [
    {
      "displayDate": "1970-01-01T00:00:00Z",
      "files": [
        {
          "contentLength": 0,
          "contentType": "string",
          "filename": "string",
          "id": 0
        }
      ],
      "id": 0,
      "links": [
        {
          "contentType": "string",
          "id": 0,
          "title": "string",
          "url": "string"
        }
      ],
      "publicationType": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "title": "string"
    }
  ],
  "sittings": [
    {
      "publications": [
        {
          "displayDate": "1970-01-01T00:00:00Z",
          "files": [
            {
              "contentLength": 0,
              "contentType": "string",
              "filename": "string",
              "id": 0
            }
          ],
          "id": 0,
          "links": [
            {
              "contentType": "string",
              "id": 0,
              "title": "string",
              "url": "string"
            }
          ],
          "publicationType": {
            "description": "string",
            "id": 0,
            "name": "string"
          },
          "title": "string"
        }
      ],
      "sittingId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billStageId|integer(int32)|false|none|none|
|publications|[[Publication](#schemapublication)]|false|none|none|
|sittings|[[BillStageSittingPublicationList](#schemabillstagesittingpublicationlist)]|false|none|none|

<h2 id="tocS_BillStageSitting">BillStageSitting</h2>
<!-- backwards compatibility -->
<a id="schemabillstagesitting"></a>
<a id="schema_BillStageSitting"></a>
<a id="tocSbillstagesitting"></a>
<a id="tocsbillstagesitting"></a>

```json
{
  "billId": 0,
  "billStageId": 0,
  "date": "1970-01-01T00:00:00Z",
  "id": 0,
  "stageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billId|integer(int32)|false|none|none|
|billStageId|integer(int32)|false|none|none|
|date|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|stageId|integer(int32)|false|none|none|

<h2 id="tocS_BillStageSittingPublicationList">BillStageSittingPublicationList</h2>
<!-- backwards compatibility -->
<a id="schemabillstagesittingpublicationlist"></a>
<a id="schema_BillStageSittingPublicationList"></a>
<a id="tocSbillstagesittingpublicationlist"></a>
<a id="tocsbillstagesittingpublicationlist"></a>

```json
{
  "publications": [
    {
      "displayDate": "1970-01-01T00:00:00Z",
      "files": [
        {
          "contentLength": 0,
          "contentType": "string",
          "filename": "string",
          "id": 0
        }
      ],
      "id": 0,
      "links": [
        {
          "contentType": "string",
          "id": 0,
          "title": "string",
          "url": "string"
        }
      ],
      "publicationType": {
        "description": "string",
        "id": 0,
        "name": "string"
      },
      "title": "string"
    }
  ],
  "sittingId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publications|[[Publication](#schemapublication)]|false|none|none|
|sittingId|integer(int32)|false|none|none|

<h2 id="tocS_BillStageSittingSearchResult">BillStageSittingSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemabillstagesittingsearchresult"></a>
<a id="schema_BillStageSittingSearchResult"></a>
<a id="tocSbillstagesittingsearchresult"></a>
<a id="tocsbillstagesittingsearchresult"></a>

```json
{
  "items": [
    {
      "billId": 0,
      "billStageId": 0,
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "stageId": 0
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BillStageSitting](#schemabillstagesitting)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_BillSummary">BillSummary</h2>
<!-- backwards compatibility -->
<a id="schemabillsummary"></a>
<a id="schema_BillSummary"></a>
<a id="tocSbillsummary"></a>
<a id="tocsbillsummary"></a>

```json
{
  "billId": 0,
  "billTypeId": 0,
  "billWithdrawn": "1970-01-01T00:00:00Z",
  "currentHouse": "All",
  "currentStage": {
    "abbreviation": "string",
    "description": "string",
    "house": "All",
    "id": 0,
    "sessionId": 0,
    "sortOrder": 0,
    "stageId": 0,
    "stageSittings": [
      {
        "billId": 0,
        "billStageId": 0,
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "stageId": 0
      }
    ]
  },
  "includedSessionIds": [
    0
  ],
  "introducedSessionId": 0,
  "isAct": true,
  "isDefeated": true,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "originatingHouse": "All",
  "shortTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billId|integer(int32)|false|none|none|
|billTypeId|integer(int32)|false|none|none|
|billWithdrawn|string(date-time) \| null|false|none|none|
|currentHouse|[House](#schemahouse)|false|none|none|
|currentStage|[StageSummary](#schemastagesummary)|false|none|none|
|includedSessionIds|[integer(int32)]|false|none|none|
|introducedSessionId|integer(int32)|false|none|none|
|isAct|boolean|false|none|none|
|isDefeated|boolean|false|none|none|
|lastUpdate|string(date-time)|false|none|none|
|originatingHouse|[House](#schemahouse)|false|none|none|
|shortTitle|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currentHouse|All|
|currentHouse|Commons|
|currentHouse|Lords|
|currentHouse|Unassigned|
|originatingHouse|All|
|originatingHouse|Commons|
|originatingHouse|Lords|
|originatingHouse|Unassigned|

<h2 id="tocS_BillSummarySearchResult">BillSummarySearchResult</h2>
<!-- backwards compatibility -->
<a id="schemabillsummarysearchresult"></a>
<a id="schema_BillSummarySearchResult"></a>
<a id="tocSbillsummarysearchresult"></a>
<a id="tocsbillsummarysearchresult"></a>

```json
{
  "items": [
    {
      "billId": 0,
      "billTypeId": 0,
      "billWithdrawn": "1970-01-01T00:00:00Z",
      "currentHouse": "All",
      "currentStage": {
        "abbreviation": "string",
        "description": "string",
        "house": "All",
        "id": 0,
        "sessionId": 0,
        "sortOrder": 0,
        "stageId": 0,
        "stageSittings": [
          {
            "billId": 0,
            "billStageId": 0,
            "date": "1970-01-01T00:00:00Z",
            "id": 0,
            "stageId": 0
          }
        ]
      },
      "includedSessionIds": [
        0
      ],
      "introducedSessionId": 0,
      "isAct": true,
      "isDefeated": true,
      "lastUpdate": "1970-01-01T00:00:00Z",
      "originatingHouse": "All",
      "shortTitle": "string"
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BillSummary](#schemabillsummary)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_BillType">BillType</h2>
<!-- backwards compatibility -->
<a id="schemabilltype"></a>
<a id="schema_BillType"></a>
<a id="tocSbilltype"></a>
<a id="tocsbilltype"></a>

```json
{
  "category": "Public",
  "description": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[BillTypeCategory](#schemabilltypecategory)|false|none|none|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Public|
|category|Private|
|category|Hybrid|

<h2 id="tocS_BillTypeCategory">BillTypeCategory</h2>
<!-- backwards compatibility -->
<a id="schemabilltypecategory"></a>
<a id="schema_BillTypeCategory"></a>
<a id="tocSbilltypecategory"></a>
<a id="tocsbilltypecategory"></a>

```json
"Public"
```

<h2 id="tocS_BillTypeSearchResult">BillTypeSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemabilltypesearchresult"></a>
<a id="schema_BillTypeSearchResult"></a>
<a id="tocSbilltypesearchresult"></a>
<a id="tocsbilltypesearchresult"></a>

```json
{
  "items": [
    {
      "category": "Public",
      "description": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BillType](#schemabilltype)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Committee">Committee</h2>
<!-- backwards compatibility -->
<a id="schemacommittee"></a>
<a id="schema_Committee"></a>
<a id="tocScommittee"></a>
<a id="tocscommittee"></a>

```json
{
  "category": "string",
  "house": "Commons",
  "id": 0,
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string \| null|false|none|none|
|house|[CommitteeHouse](#schemacommitteehouse)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|url|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|Commons|
|house|Lords|
|house|Joint|

<h2 id="tocS_CommitteeHouse">CommitteeHouse</h2>
<!-- backwards compatibility -->
<a id="schemacommitteehouse"></a>
<a id="schema_CommitteeHouse"></a>
<a id="tocScommitteehouse"></a>
<a id="tocscommitteehouse"></a>

```json
"Commons"
```

<h2 id="tocS_Decision">Decision</h2>
<!-- backwards compatibility -->
<a id="schemadecision"></a>
<a id="schema_Decision"></a>
<a id="tocSdecision"></a>
<a id="tocsdecision"></a>

```json
"All"
```

<h2 id="tocS_House">House</h2>
<!-- backwards compatibility -->
<a id="schemahouse"></a>
<a id="schema_House"></a>
<a id="tocShouse"></a>
<a id="tocshouse"></a>

```json
"All"
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "house": "All",
  "memberFrom": "string",
  "memberId": 0,
  "memberPage": "string",
  "memberPhoto": "string",
  "name": "string",
  "party": "string",
  "partyColour": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|house|[House](#schemahouse)|false|none|none|
|memberFrom|string \| null|false|none|none|
|memberId|integer(int32)|false|none|none|
|memberPage|string \| null|false|none|none|
|memberPhoto|string \| null|false|none|none|
|name|string \| null|false|none|none|
|party|string \| null|false|none|none|
|partyColour|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_NewsArticlesSummary">NewsArticlesSummary</h2>
<!-- backwards compatibility -->
<a id="schemanewsarticlessummary"></a>
<a id="schema_NewsArticlesSummary"></a>
<a id="tocSnewsarticlessummary"></a>
<a id="tocsnewsarticlessummary"></a>

```json
{
  "content": "string",
  "displayDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|none|
|displayDate|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_NewsArticlesSummarySearchResult">NewsArticlesSummarySearchResult</h2>
<!-- backwards compatibility -->
<a id="schemanewsarticlessummarysearchresult"></a>
<a id="schema_NewsArticlesSummarySearchResult"></a>
<a id="tocSnewsarticlessummarysearchresult"></a>
<a id="tocsnewsarticlessummarysearchresult"></a>

```json
{
  "items": [
    {
      "content": "string",
      "displayDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "title": "string"
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[NewsArticlesSummary](#schemanewsarticlessummary)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Organisation">Organisation</h2>
<!-- backwards compatibility -->
<a id="schemaorganisation"></a>
<a id="schema_Organisation"></a>
<a id="tocSorganisation"></a>
<a id="tocsorganisation"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_OriginatingHouse">OriginatingHouse</h2>
<!-- backwards compatibility -->
<a id="schemaoriginatinghouse"></a>
<a id="schema_OriginatingHouse"></a>
<a id="tocSoriginatinghouse"></a>
<a id="tocsoriginatinghouse"></a>

```json
"All"
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

<h2 id="tocS_Promoter">Promoter</h2>
<!-- backwards compatibility -->
<a id="schemapromoter"></a>
<a id="schema_Promoter"></a>
<a id="tocSpromoter"></a>
<a id="tocspromoter"></a>

```json
{
  "organisationName": "string",
  "organisationUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organisationName|string \| null|false|none|none|
|organisationUrl|string \| null|false|none|none|

<h2 id="tocS_Publication">Publication</h2>
<!-- backwards compatibility -->
<a id="schemapublication"></a>
<a id="schema_Publication"></a>
<a id="tocSpublication"></a>
<a id="tocspublication"></a>

```json
{
  "displayDate": "1970-01-01T00:00:00Z",
  "files": [
    {
      "contentLength": 0,
      "contentType": "string",
      "filename": "string",
      "id": 0
    }
  ],
  "id": 0,
  "links": [
    {
      "contentType": "string",
      "id": 0,
      "title": "string",
      "url": "string"
    }
  ],
  "publicationType": {
    "description": "string",
    "id": 0,
    "name": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayDate|string(date-time)|false|none|none|
|files|[[PublicationDocument](#schemapublicationdocument)]|false|none|none|
|id|integer(int32)|false|none|none|
|links|[[PublicationLink](#schemapublicationlink)]|false|none|none|
|publicationType|[PublicationType](#schemapublicationtype)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_PublicationDocument">PublicationDocument</h2>
<!-- backwards compatibility -->
<a id="schemapublicationdocument"></a>
<a id="schema_PublicationDocument"></a>
<a id="tocSpublicationdocument"></a>
<a id="tocspublicationdocument"></a>

```json
{
  "contentLength": 0,
  "contentType": "string",
  "filename": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentLength|integer(int32)|false|none|none|
|contentType|string \| null|false|none|none|
|filename|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_PublicationLink">PublicationLink</h2>
<!-- backwards compatibility -->
<a id="schemapublicationlink"></a>
<a id="schema_PublicationLink"></a>
<a id="tocSpublicationlink"></a>
<a id="tocspublicationlink"></a>

```json
{
  "contentType": "string",
  "id": 0,
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_PublicationType">PublicationType</h2>
<!-- backwards compatibility -->
<a id="schemapublicationtype"></a>
<a id="schema_PublicationType"></a>
<a id="tocSpublicationtype"></a>
<a id="tocspublicationtype"></a>

```json
{
  "description": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PublicationTypeSearchResult">PublicationTypeSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapublicationtypesearchresult"></a>
<a id="schema_PublicationTypeSearchResult"></a>
<a id="tocSpublicationtypesearchresult"></a>
<a id="tocspublicationtypesearchresult"></a>

```json
{
  "items": [
    {
      "description": "string",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PublicationType](#schemapublicationtype)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_Sponsor">Sponsor</h2>
<!-- backwards compatibility -->
<a id="schemasponsor"></a>
<a id="schema_Sponsor"></a>
<a id="tocSsponsor"></a>
<a id="tocssponsor"></a>

```json
{
  "member": {
    "house": "All",
    "memberFrom": "string",
    "memberId": 0,
    "memberPage": "string",
    "memberPhoto": "string",
    "name": "string",
    "party": "string",
    "partyColour": "string"
  },
  "organisation": {
    "name": "string",
    "url": "string"
  },
  "sortOrder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[Member](#schemamember)|false|none|none|
|organisation|[Organisation](#schemaorganisation)|false|none|none|
|sortOrder|integer(int32)|false|none|none|

<h2 id="tocS_StageReference">StageReference</h2>
<!-- backwards compatibility -->
<a id="schemastagereference"></a>
<a id="schema_StageReference"></a>
<a id="tocSstagereference"></a>
<a id="tocsstagereference"></a>

```json
{
  "house": "All",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_StageReferenceSearchResult">StageReferenceSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemastagereferencesearchresult"></a>
<a id="schema_StageReferenceSearchResult"></a>
<a id="tocSstagereferencesearchresult"></a>
<a id="tocsstagereferencesearchresult"></a>

```json
{
  "items": [
    {
      "house": "All",
      "id": 0,
      "name": "string"
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[StageReference](#schemastagereference)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_StageSummary">StageSummary</h2>
<!-- backwards compatibility -->
<a id="schemastagesummary"></a>
<a id="schema_StageSummary"></a>
<a id="tocSstagesummary"></a>
<a id="tocsstagesummary"></a>

```json
{
  "abbreviation": "string",
  "description": "string",
  "house": "All",
  "id": 0,
  "sessionId": 0,
  "sortOrder": 0,
  "stageId": 0,
  "stageSittings": [
    {
      "billId": 0,
      "billStageId": 0,
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "stageId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string \| null|false|none|none|
|description|string \| null|false|none|none|
|house|[House](#schemahouse)|false|none|none|
|id|integer(int32)|false|none|none|
|sessionId|integer(int32)|false|none|none|
|sortOrder|integer(int32)|false|none|none|
|stageId|integer(int32)|false|none|none|
|stageSittings|[[BillStageSitting](#schemabillstagesitting)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|All|
|house|Commons|
|house|Lords|
|house|Unassigned|

<h2 id="tocS_StageSummarySearchResult">StageSummarySearchResult</h2>
<!-- backwards compatibility -->
<a id="schemastagesummarysearchresult"></a>
<a id="schema_StageSummarySearchResult"></a>
<a id="tocSstagesummarysearchresult"></a>
<a id="tocsstagesummarysearchresult"></a>

```json
{
  "items": [
    {
      "abbreviation": "string",
      "description": "string",
      "house": "All",
      "id": 0,
      "sessionId": 0,
      "sortOrder": 0,
      "stageId": 0,
      "stageSittings": [
        {
          "billId": 0,
          "billStageId": 0,
          "date": "1970-01-01T00:00:00Z",
          "id": 0,
          "stageId": 0
        }
      ]
    }
  ],
  "itemsPerPage": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[StageSummary](#schemastagesummary)]|false|none|none|
|itemsPerPage|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|
