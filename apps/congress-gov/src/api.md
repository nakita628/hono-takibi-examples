<h1 id="congressgov-api">Congress.gov API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Congress.gov shares its application programming interface (API) with the public to ingest the Congressional data. <a href="sign-up/" target="_blank">Sign up for an API key</a> to access web services provided by Congress.gov. To learn more, view our <a href="https://github.com/LibraryOfCongress/api.congress.gov/" target="_blank">GitHub repository</a>.

Base URLs:

* <a href="https://raw.githubusercontent.com/v3">https://raw.githubusercontent.com/v3</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **api_key**, in: query.

<h1 id="congressgov-api-bill">bill</h1>

Returns bill data from the API

## Returns a list of bills sorted by date of latest action

<a id="opIdgetBills"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill`

Returns a list of bills sorted by date of latest action

<h3 id="returns-a-list-of-bills-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry."
  },
  "number": 3281,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "A bill to repeal certain provisions relating to nutrition.",
  "type": "S",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "http://api.congress.gov/v3/bill/119/s/3281?format=xml"
}
```

<h3 id="returns-a-list-of-bills-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Bill](#schemabill)|
|400|Bad Request|Invalid status value|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of bills filtered by the specified congress, sorted by date of latest action

<a id="opIdgetBillsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}`

Returns a list of bills filtered by the specified congress, sorted by date of latest action

<h3 id="returns-a-list-of-bills-filtered-by-the-specified-congress-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry."
  },
  "number": 3281,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "A bill to repeal certain provisions relating to nutrition.",
  "type": "S",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "http://api.congress.gov/v3/bill/119/s/3281?format=xml"
}
```

<h3 id="returns-a-list-of-bills-filtered-by-the-specified-congress-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Bill](#schemabill)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of bills filtered by the specified congress and bill type, sorted by date of latest action.

<a id="opIdgetBillsByCongressAndBillType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}`

Returns a list of bills filtered by the specified congress and bill type, sorted by date of latest action.

<h3 id="returns-a-list-of-bills-filtered-by-the-specified-congress-and-bill-type-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry."
  },
  "number": 3281,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "A bill to repeal certain provisions relating to nutrition.",
  "type": "S",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "http://api.congress.gov/v3/bill/119/s/3281?format=xml"
}
```

<h3 id="returns-a-list-of-bills-filtered-by-the-specified-congress-and-bill-type-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Bill](#schemabill)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified bill.

<a id="opIdgetBill"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}`

Returns detailed information for a specified bill.

<h3 id="returns-detailed-information-for-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/bill/117/s/1234/actions?format=json"
  },
  "committees": {
    "count": 1,
    "url": "https://api.congress.gov/v3/bill/117/s/1234/committees?format=json"
  },
  "congress": 117,
  "introducedDate": "2019-01-01",
  "latestAction": {
    "actionDate": "2019-01-01",
    "text": "string"
  },
  "legislationUrl": "https://www.congress.gov/bill/117th-congress/senate-bill/1234",
  "number": 1234,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "policyArea": {
    "name": "Health"
  },
  "relatedBills": "https://api.congress.gov/v3/bill/117/s/1234/relatedbills?format=json",
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ]
}
```

<h3 id="returns-detailed-information-for-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BillDetail](#schemabilldetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of actions on a specified bill.

<a id="opIdgetBillActions"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/actions?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/actions`

Returns the list of actions on a specified bill.

<h3 id="returns-the-list-of-actions-on-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actionCode": "36000",
  "actionDate": "2019-01-01",
  "sourceSystem": {
    "code": 1,
    "name": "Library of Congress"
  },
  "text": "Became Public Law No: 117-108.",
  "type": "BecameLaw"
}
```

<h3 id="returns-the-list-of-actions-on-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Actions](#schemaactions)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of amendments to a specified bill.

<a id="opIdgetBillAmendments"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/amendments?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/amendments`

Returns the list of amendments to a specified bill.

<h3 id="returns-the-list-of-amendments-to-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 117,
  "description": "Pursuant to the provisions of H. Res. 912, the amendment in the nature of a substitute consisting of the text of Rules Committee Print 117-32 is considered as adopted.",
  "latestAction": {
    "actionDate": "2019-01-01",
    "text": "On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. "
  },
  "number": "173",
  "type": "HAMDT",
  "updateDate": "2022-02-18T16:38:41Z",
  "url": "https://api.congress.gov/v3/amendment/117/hamdt/173?format=json"
}
```

<h3 id="returns-the-list-of-amendments-to-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Amendments](#schemaamendments)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committees associated with a specified bill.

<a id="opIdgetBillCommittees"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/committees?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/committees`

Returns the list of committees associated with a specified bill.

<h3 id="returns-the-list-of-committees-associated-with-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "activities": [
    {
      "date": "2019-01-01",
      "name": "Reported By"
    }
  ],
  "chamber": "House",
  "name": "House Committee on the Judiciary",
  "systemCode": "hsgo00",
  "type": "Standing",
  "url": "https://api.congress.gov/v3/committee/house/hsgo00?format=json"
}
```

<h3 id="returns-the-list-of-committees-associated-with-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Committee](#schemacommittee)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of cosponsors on a specified bill.

<a id="opIdgetBillCosponsors"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/cosponsors?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/cosponsors`

Returns the list of cosponsors on a specified bill.

<h3 id="returns-the-list-of-cosponsors-on-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|sort|query|string|false|Sort by update date in Congress.gov. Value can be updateDate+asc or updateDate+desc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguidId": "F000450",
  "district": 5,
  "firstName": "Virginia",
  "fullName": "Rep. Foxx, Virginia [R-NC-5]",
  "isOriginalCosponsor": true,
  "lastName": "Foxx",
  "party": "R",
  "sponsorshipDate": "2021-05-11",
  "state": "NC",
  "url": "https://api.congress.gov/v3/member/F000450?format=json"
}
```

<h3 id="returns-the-list-of-cosponsors-on-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CoSponsor](#schemacosponsor)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of related bills to a specified bill.

<a id="opIdgetBillRelatedBills"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/relatedbills?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/relatedbills`

Returns the list of related bills to a specified bill.

<h3 id="returns-the-list-of-related-bills-to-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 117,
  "lastestAction": {
    "actionDate": "2019-01-01",
    "text": "On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. "
  },
  "number": 1720,
  "relationshipDetails": [
    {
      "identifiedBy": "CRS",
      "type": "Related Bill"
    }
  ]
}
```

<h3 id="returns-the-list-of-related-bills-to-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[RelatedBills](#schemarelatedbills)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of legislative subjects on a specified bill.

<a id="opIdgetBillSubjects"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/subjects?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/subjects`

Returns the list of legislative subjects on a specified bill.

<h3 id="returns-the-list-of-legislative-subjects-on-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "legislativeSubjects": [
    {
      "name": "Congressional oversight",
      "updateDate": "2022-02-18T16:38:41Z"
    }
  ],
  "policyArea": {
    "name": "Government Operations and Politics"
  }
}
```

<h3 id="returns-the-list-of-legislative-subjects-on-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Subjects](#schemasubjects)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of summaries for a specified bill.

<a id="opIdgetBillSummaries"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/summaries?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/summaries`

Returns the list of summaries for a specified bill.

<h3 id="returns-the-list-of-summaries-for-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h3 id="returns-the-list-of-summaries-for-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BillSummaries](#schemabillsummaries)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of text versions for a specified bill.

<a id="opIdgetBillTexts"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/text?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/text`

Returns the list of text versions for a specified bill.

<h3 id="returns-the-list-of-text-versions-for-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "date": "2022-02-18T16:38:41Z",
    "formats": [
      {
        "type": "Formatted Text",
        "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
      }
    ],
    "type": "Enrolled Bill"
  }
]
```

<h3 id="returns-the-list-of-text-versions-for-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Text](#schematext)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of titles for a specified bill.

<a id="opIdgetBillTitles"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bill/1/hr/1/titles?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bill/{congress}/{billType}/{billNumber}/titles`

Returns the list of titles for a specified bill.

<h3 id="returns-the-list-of-titles-for-a-specified-bill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|billNumber|path|integer|true|The bill's assigned number. For example, the value can be 3076.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "title": "A bill to amend the Health and Human Services Act of 1968 to provide for the establishment of a national health care system.",
    "updateDate": "2022-02-18T16:38:41Z",
    "titleType": "Display Title",
    "titleTypeCode": 45,
    "billTextVersionCode": "RH",
    "billTextVersionName": "Reported in House"
  }
]
```

<h3 id="returns-the-list-of-titles-for-a-specified-bill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Titles](#schematitles)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of laws filtered by the specified congress.

<a id="opIdgetLawsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/law/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /law/{congress}`

Returns a list of laws filtered by the specified congress.

<h3 id="returns-a-list-of-laws-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Became Public Law No: 119-37."
  },
  "laws": [
    {
      "number": "117-108",
      "type": "Public Law"
    }
  ],
  "number": "2808",
  "originChamber": "House",
  "originChamberCode": "H",
  "title": "Homebuyers Privacy Protection Act",
  "type": "HR",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "https://api.congress.gov/v3/bill/119/hr/2808?format=json"
}
```

<h3 id="returns-a-list-of-laws-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Law](#schemalaw)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of laws filtered by specified congress and law type (public or private).

<a id="opIdgetLawsByCongressAndLawType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/law/1/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /law/{congress}/{lawType}`

Returns a list of laws filtered by specified congress and law type (public or private).

<h3 id="returns-a-list-of-laws-filtered-by-specified-congress-and-law-type-public-or-private-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|lawType|path|string|true|The law type. Values are either 'pub' or 'priv.'|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Became Public Law No: 119-37."
  },
  "laws": [
    {
      "number": "117-108",
      "type": "Public Law"
    }
  ],
  "number": "2808",
  "originChamber": "House",
  "originChamberCode": "H",
  "title": "Homebuyers Privacy Protection Act",
  "type": "HR",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "https://api.congress.gov/v3/bill/119/hr/2808?format=json"
}
```

<h3 id="returns-a-list-of-laws-filtered-by-specified-congress-and-law-type-public-or-private-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Law](#schemalaw)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a law filtered by specified congress, law type (public or private), and law number.

<a id="opIdgetLaw"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/law/1/string/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /law/{congress}/{lawType}/{lawNumber}`

Returns a law filtered by specified congress, law type (public or private), and law number.

<h3 id="returns-a-law-filtered-by-specified-congress-law-type-public-or-private-and-law-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|lawType|path|string|true|The law type. Values are either 'pub' or 'priv.'|
|lawNumber|path|integer|true|The law number|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/actions?format=json"
  },
  "cboCostEstimates": [
    {
      "description": "As ordered reported by the House Committee on Oversight and Accountability on September 20, 2023\n",
      "pubDate": "2023-10-10T19:58:00Z",
      "title": "H.R. 4984, D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act",
      "url": "https://www.cbo.gov/publication/59651"
    }
  ],
  "committeeReports": [
    {
      "citation": "H. Rept. 118-400",
      "url": "https://api.congress.gov/v3/committee-report/118/HRPT/400?format=json"
    }
  ],
  "committees": {
    "count": 1,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/committees?format=json"
  },
  "congress": 118,
  "constitutionalAuthorityStatementText": "<pre>\n[Congressional Record Volume 169, Number 130 (Thursday, July 27, 2023)]\n[House]\n[Pages H4143-H4144]\nFrom the Congressional Record Online through the Government Publishing Office [<a href=\"https://www.gpo.gov\">www.gpo.gov</a>]\nBy Mr. COMER:\nH.R. 4984.\nCongress has the power to enact this legislation pursuant\nto the following:\nArticle I, Section 8, Clause 17 of the U.S. Constitution,\nin that the legislation ``to exercise exclusive Legislation\nin all Cases\n[[Page H4144]]\nwhatsoever, over such District (not exceeding ten Miles\nsquare) as may, by Cession of particular States, and the\nAcceptance of Congress, become the Seat of the Government of\nthe United States, and to exercise like Authority over all\nPlaces purchased by the Consent of the Legislature of the\nState in which the Same shall be, for the Erection of Forts,\nMagazines, Arsenals, dock-Yards, and other needful\nBuildings.''\nThe single subject of this legislation is:\nTo transfer administrative jurisdiction of the District of\nColumbia RFK Memorial Stadium campus from the Secretary of\nthe Interior to the Administrator of General Services and\nauthorize a new lease with D.C. for redevelopment.\n</pre>",
  "cosponsors": {
    "count": 21,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/cosponsors?format=json"
  },
  "introducedDate": "2023-07-27",
  "latestAction": {
    "actionDate": "2025-01-06",
    "text": "Became Public Law No: 118-274."
  },
  "laws": [
    {
      "number": "117-108",
      "type": "Public Law"
    }
  ],
  "number": "4984",
  "originChamber": "House",
  "originChamberCode": "H",
  "policyArea": {
    "name": "Government Operations and Politics"
  },
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ],
  "subjects": {
    "count": 11,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/subjects?format=json"
  },
  "summaries": {
    "count": 5,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/summaries?format=json"
  },
  "textVersions": {
    "count": 6,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/textversions?format=json"
  },
  "title": "D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act",
  "titles": {
    "count": 9,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/titles?format=json"
  },
  "type": "HR",
  "updateDate": "2025-05-27T14:16:54Z",
  "updateDateIncludingText": "2025-05-27T14:16:54Z"
}
```

<h3 id="returns-a-law-filtered-by-specified-congress-law-type-public-or-private-and-law-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[LawNumber](#schemalawnumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-amendments">amendments</h1>

Returns amendment data from the API

## Returns a list of amendments sorted by date of latest action.

<a id="opIdgetAmendments"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment`

Returns a list of amendments sorted by date of latest action.

<h3 id="returns-a-list-of-amendments-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 117,
  "description": "Amendment changes the effective date of the bill to the date of enactment.",
  "latestAction": {
    "actionDate": "2021-08-08",
    "actionTime": "12:00:00",
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
  },
  "number": "2137",
  "purpose": "In the nature of a substitute.",
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z",
  "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
}
```

<h3 id="returns-a-list-of-amendments-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Amendment](#schemaamendment)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of amendments filtered by the specified congress, sorted by date of latest action.

<a id="opIdgetAmendmentsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}`

Returns a list of amendments filtered by the specified congress, sorted by date of latest action.

<h3 id="returns-a-list-of-amendments-filtered-by-the-specified-congress-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 117,
  "description": "Amendment changes the effective date of the bill to the date of enactment.",
  "latestAction": {
    "actionDate": "2021-08-08",
    "actionTime": "12:00:00",
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
  },
  "number": "2137",
  "purpose": "In the nature of a substitute.",
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z",
  "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
}
```

<h3 id="returns-a-list-of-amendments-filtered-by-the-specified-congress-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Amendment](#schemaamendment)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of amendments filtered by the specified congress and amendment type, sorted by date of latest action.

<a id="opIdgetAmendmentsByCongressAndType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}`

Returns a list of amendments filtered by the specified congress and amendment type, sorted by date of latest action.

<h3 id="returns-a-list-of-amendments-filtered-by-the-specified-congress-and-amendment-type-sorted-by-date-of-latest-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 117,
  "description": "Amendment changes the effective date of the bill to the date of enactment.",
  "latestAction": {
    "actionDate": "2021-08-08",
    "actionTime": "12:00:00",
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
  },
  "number": "2137",
  "purpose": "In the nature of a substitute.",
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z",
  "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
}
```

<h3 id="returns-a-list-of-amendments-filtered-by-the-specified-congress-and-amendment-type-sorted-by-date-of-latest-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Amendment](#schemaamendment)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified amendment.

<a id="opIdgetAmendment"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}/{amendmentNumber}`

Returns detailed information for a specified amendment.

<h3 id="returns-detailed-information-for-a-specified-amendment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|amendmentNumber|path|string|true|The amendment's assigned number. For example, the value can be 2137.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/amendment/117/samdt/4/actions?format=json"
  },
  "amendedBill": {
    "congress": 117,
    "number": "5",
    "originChamber": "Senate",
    "originChamberCode": "S",
    "title": "A concurrent resolution setting forth the congressional budget for the United States Government for fiscal year 2021 and setting forth the appropriate budgetary levels for fiscal years 2022 through 2030.",
    "type": "SCONRES",
    "updateDateIncludingText": "2025-04-07",
    "url": "https://api.congress.gov/v3/bill/117/sconres/5?format=json"
  },
  "chamber": "string",
  "congress": 117,
  "number": "2137",
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ],
  "submittedDate": "2021-02-02T05:00:00Z",
  "textVersions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/amendment/117/samdt/4/text?format=json"
  },
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-amendment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AmendmentNumber](#schemaamendmentnumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of actions on a specified amendment.

<a id="opIdgetAmendmentActions"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string/string/actions?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}/{amendmentNumber}/actions`

Returns the list of actions on a specified amendment.

<h3 id="returns-the-list-of-actions-on-a-specified-amendment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|amendmentNumber|path|string|true|The amendment's assigned number. For example, the value can be 2137.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "actionDate": "2021-08-08",
    "recordedVotes": [
      {
        "chamber": "Senate",
        "congress": 117,
        "date": "2021-08-08T12:00:00Z",
        "rollNumber": 312,
        "sessionNumber": 1,
        "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00312.xml"
      }
    ],
    "sourceSystem": {
      "code": 0,
      "name": "Senate"
    },
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312.",
    "type": "Floor"
  }
]
```

<h3 id="returns-the-list-of-actions-on-a-specified-amendment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AmendmentActions2](#schemaamendmentactions2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of cosponsors on a specified amendment.

<a id="opIdgetAmendmentCosponsors"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string/string/cosponsors?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}/{amendmentNumber}/cosponsors`

Returns the list of cosponsors on a specified amendment.

<h3 id="returns-the-list-of-cosponsors-on-a-specified-amendment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|amendmentNumber|path|string|true|The amendment's assigned number. For example, the value can be 2137.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "bioguidId": "F000450",
    "district": 5,
    "firstName": "Virginia",
    "fullName": "Rep. Foxx, Virginia [R-NC-5]",
    "isOriginalCosponsor": true,
    "lastName": "Foxx",
    "party": "R",
    "sponsorshipDate": "2021-05-11",
    "state": "NC",
    "url": "https://api.congress.gov/v3/member/F000450?format=json"
  }
]
```

<h3 id="returns-the-list-of-cosponsors-on-a-specified-amendment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AmendmentCosponsors](#schemaamendmentcosponsors)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of amendments to a specified amendment.

<a id="opIdgetAmendmentAmendments"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string/string/amendments?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}/{amendmentNumber}/amendments`

Returns the list of amendments to a specified amendment.

<h3 id="returns-the-list-of-amendments-to-a-specified-amendment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|amendmentNumber|path|string|true|The amendment's assigned number. For example, the value can be 2137.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "congress": 117,
    "description": "Amendment changes the effective date of the bill to the date of enactment.",
    "latestAction": {
      "actionDate": "2021-08-08",
      "actionTime": "12:00:00",
      "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
    },
    "number": "2137",
    "purpose": "In the nature of a substitute.",
    "type": "string",
    "updateDate": "2021-08-08T12:00:00Z",
    "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
  }
]
```

<h3 id="returns-the-list-of-amendments-to-a-specified-amendment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AmendmentAmendments](#schemaamendmentamendments)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of text versions for a specified amendment from the 117th Congress onwards.

<a id="opIdgeAmendmentTexts"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/amendment/1/string/string/text?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /amendment/{congress}/{amendmentType}/{amendmentNumber}/text`

Returns the list of text versions for a specified amendment from the 117th Congress onwards.

<h3 id="returns-the-list-of-text-versions-for-a-specified-amendment-from-the-117th-congress-onwards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|amendmentType|path|string|true|The type of amendment. Value can be hamdt, samdt, or suamdt.|
|amendmentNumber|path|string|true|The amendment's assigned number. For example, the value can be 2137.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "date": "2022-02-18T16:38:41Z",
    "formats": [
      {
        "type": "Formatted Text",
        "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
      }
    ],
    "type": "Enrolled Bill"
  }
]
```

<h3 id="returns-the-list-of-text-versions-for-a-specified-amendment-from-the-117th-congress-onwards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AmendmentText](#schemaamendmenttext)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-summaries">summaries</h1>

Returns summaries data from the API

## Returns a list of summaries sorted by date of last update.

<a id="opIdgetSummaries"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/summaries?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /summaries`

Returns a list of summaries sorted by date of last update.

<h3 id="returns-a-list-of-summaries-sorted-by-date-of-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|sort|query|string|false|Sort by update date in Congress.gov. Value can be updateDate+asc or updateDate+desc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "bill": {
      "congress": 117,
      "number": 1234,
      "originChamber": "Senate",
      "originChamberCode": "S",
      "title": "Pay Our Capitol Police Act",
      "type": "HR",
      "updateDateIncludingText": "2021-08-08",
      "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
    },
    "currentChamber": "Senate",
    "currentChamberCode": "S",
    "lastSummaryUpdateDate": "2022-02-18T16:38:41Z",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h3 id="returns-a-list-of-summaries-sorted-by-date-of-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Summaries](#schemasummaries)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of summaries filtered by congress, sorted by date of last update.

<a id="opIdgetSummariesByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/summaries/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /summaries/{congress}`

Returns a list of summaries filtered by congress, sorted by date of last update.

<h3 id="returns-a-list-of-summaries-filtered-by-congress-sorted-by-date-of-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|sort|query|string|false|Sort by update date in Congress.gov. Value can be updateDate+asc or updateDate+desc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "bill": {
      "congress": 117,
      "number": 1234,
      "originChamber": "Senate",
      "originChamberCode": "S",
      "title": "Pay Our Capitol Police Act",
      "type": "HR",
      "updateDateIncludingText": "2021-08-08",
      "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
    },
    "currentChamber": "Senate",
    "currentChamberCode": "S",
    "lastSummaryUpdateDate": "2022-02-18T16:38:41Z",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h3 id="returns-a-list-of-summaries-filtered-by-congress-sorted-by-date-of-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Summaries](#schemasummaries)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of summaries filtered by congress and by bill type, sorted by date of last update.

<a id="opIdgetSummariesByCongressAndBillType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/summaries/1/hr?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /summaries/{congress}/{billType}`

Returns a list of summaries filtered by congress and by bill type, sorted by date of last update.

<h3 id="returns-a-list-of-summaries-filtered-by-congress-and-by-bill-type-sorted-by-date-of-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|billType|path|string|true|The type of bill. Value can be hr, s, hjres, sjres, hconres, sconres, hres, or sres.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|sort|query|string|false|Sort by update date in Congress.gov. Value can be updateDate+asc or updateDate+desc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billType|hr|
|billType|s|
|billType|hjres|
|billType|sjres|
|billType|hconres|
|billType|sconres|
|billType|hres|
|billType|sres|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "bill": {
      "congress": 117,
      "number": 1234,
      "originChamber": "Senate",
      "originChamberCode": "S",
      "title": "Pay Our Capitol Police Act",
      "type": "HR",
      "updateDateIncludingText": "2021-08-08",
      "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
    },
    "currentChamber": "Senate",
    "currentChamberCode": "S",
    "lastSummaryUpdateDate": "2022-02-18T16:38:41Z",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h3 id="returns-a-list-of-summaries-filtered-by-congress-and-by-bill-type-sorted-by-date-of-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Summaries](#schemasummaries)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-congress">congress</h1>

Returns congress and congressional sessions data from the API

## Returns a list of congresses and congressional sessions.

<a id="opIdgetCongresses"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/congress?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /congress`

Returns a list of congresses and congressional sessions.

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "endYear": "2022",
    "name": "117th Congress",
    "sessions": [
      {
        "chamber": "House of Representatives",
        "number": 1,
        "startDate": "2019-01-01",
        "endDate": "2020-01-01"
      }
    ],
    "startYear": "2021"
  }
]
```

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Congresses](#schemacongresses)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of congresses and congressional sessions.

<a id="opIdgetCongressByNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/congress/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /congress/{congress}`

Returns a list of congresses and congressional sessions.

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "endYear": "2022",
    "name": "117th Congress",
    "sessions": [
      {
        "chamber": "House of Representatives",
        "number": 1,
        "startDate": "2019-01-01",
        "endDate": "2020-01-01"
      }
    ],
    "startYear": "2021"
  }
]
```

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Congresses](#schemacongresses)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of congresses and congressional sessions.

<a id="opIdgetCurrentCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/congress/current?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /congress/current`

Returns a list of congresses and congressional sessions.

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "endYear": "2022",
    "name": "117th Congress",
    "sessions": [
      {
        "chamber": "House of Representatives",
        "number": 1,
        "startDate": "2019-01-01",
        "endDate": "2020-01-01"
      }
    ],
    "startYear": "2021"
  }
]
```

<h3 id="returns-a-list-of-congresses-and-congressional-sessions-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Congresses](#schemacongresses)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-member">member</h1>

Returns member data from the API

## Returns a list of congressional members.

<a id="opIdgetMembers"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member`

Returns a list of congressional members.

<h3 id="returns-a-list-of-congressional-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|currentMember|query|boolean|false|The status of the member. Use true or false|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

<h3 id="returns-a-list-of-congressional-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Members](#schemamembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified congressional member.

<a id="opIdgetMemberByBioguideId"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/{bioguideId}`

Returns detailed information for a specified congressional member.

<h3 id="returns-detailed-information-for-a-specified-congressional-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bioguideId|path|string|true|The bioguide identifier for the congressional member. For example, the value can be L000174.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "L000174",
  "birthYear": "1940",
  "cosponsoredLegislation": {
    "count": 1,
    "url": "https://api.congress.gov/v3/member/L000174/cosponsored-legislation\""
  },
  "depiction": {
    "attribution": "<a href=\"\\&quot;https://www.senate.gov/artandhistory/history/common/generic/Photo_Collection_of_the_Senate_Historical_Office.htm\\&quot;\">Courtesy U.S. Senate Historical Office</a>",
    "imageUrl": "https://www.congress.gov/img/member/l000174_200.jpg"
  },
  "directOrderName": "Patrick J. Leahy",
  "firstName": "Patrick",
  "honorificName": "Mr.",
  "invertedOrderName": "Leahy, Patrick J.",
  "lastname": "Leahy",
  "leadership": [
    {
      "congress": 113,
      "type": "President Pro Tempore"
    }
  ],
  "partyHistory": [
    {
      "partyAbbreviation": "D",
      "partyName": "Democrat",
      "startYear": 1975
    }
  ],
  "sponsoredLegislation": {
    "count": 1768,
    "url": "https://api.congress.gov/v3/member/L000174/sponsored-legislation"
  },
  "state": "Vermont",
  "terms": [
    {
      "chamber": "Senate",
      "congress": 116,
      "endYear": 2021,
      "memberType": "Senator",
      "startYear": 2019,
      "stateCode": "VT",
      "stateName": "Vermont"
    }
  ],
  "updateDate": "2022-11-07T13:42:19Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-congressional-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Member](#schemamember)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of legislation sponsored by a specified congressional member.

<a id="opIdgetMemberSponsoredLegislation"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/string/sponsored-legislation?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/{bioguideId}/sponsored-legislation`

Returns the list of legislation sponsored by a specified congressional member.

<h3 id="returns-the-list-of-legislation-sponsored-by-a-specified-congressional-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bioguideId|path|string|true|The bioguide identifier for the congressional member. For example, the value can be L000174.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "congress": 117,
    "introducedDate": "2022-06-16",
    "latestAction": {
      "actionDate": "2022-06-16",
      "text": "Read twice and referred to the Committee on the Judiciary."
    },
    "number": "4417",
    "policyArea": {
      "name": "Government Operations and Politics"
    },
    "title": "Patent Trial and Appeal Board Reform Act of 2022",
    "type": "S",
    "url": "https://api.congress.gov/v3/bill/117/s/4417?format=json"
  }
]
```

<h3 id="returns-the-list-of-legislation-sponsored-by-a-specified-congressional-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[MemberSponsoredLegislation](#schemamembersponsoredlegislation)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of legislation cosponsored by a specified congressional member.

<a id="opIdgetMemberCosponsoredLegislation"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/string/cosponsored-legislation?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/{bioguideId}/cosponsored-legislation`

Returns the list of legislation cosponsored by a specified congressional member.

<h3 id="returns-the-list-of-legislation-cosponsored-by-a-specified-congressional-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bioguideId|path|string|true|The bioguide identifier for the congressional member. For example, the value can be L000174.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "congress": 117,
    "introducedDate": "2022-06-16",
    "latestAction": {
      "actionDate": "2022-06-16",
      "text": "Read twice and referred to the Committee on the Judiciary."
    },
    "number": "4417",
    "policyArea": {
      "name": "Government Operations and Politics"
    },
    "title": "Patent Trial and Appeal Board Reform Act of 2022",
    "type": "S",
    "url": "https://api.congress.gov/v3/bill/117/s/4417?format=json"
  }
]
```

<h3 id="returns-the-list-of-legislation-cosponsored-by-a-specified-congressional-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[MemberSponsoredLegislation](#schemamembersponsoredlegislation)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of members specified by Congress.

<a id="opIdgetMembersByCongressNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/congress/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/congress/{congress}`

Returns the list of members specified by Congress.

<h3 id="returns-the-list-of-members-specified-by-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|currentMember|query|boolean|false|The status of the member. Use true or false|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

<h3 id="returns-the-list-of-members-specified-by-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Members](#schemamembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of members filtered by state.

<a id="opIdgetMembersByStateCode"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/{stateCode}`

Returns a list of members filtered by state.

<h3 id="returns-a-list-of-members-filtered-by-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stateCode|path|string|true|The two letter identifier for the state the member represents. For example, the value can be MI for Michigan.|
|format|query|string|false|The data format. Value can be xml or json.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|currentMember|query|boolean|false|The status of the member. Use true or false|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

<h3 id="returns-a-list-of-members-filtered-by-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Members](#schemamembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of members filtered by state and district.

<a id="opIdgetMembersByStateAndDistrict"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/string/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/{stateCode}/{district}`

Returns a list of members filtered by state and district.

<h3 id="returns-a-list-of-members-filtered-by-state-and-district-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stateCode|path|string|true|The two letter identifier for the state the member represents. For example, the value can be MI for Michigan.|
|district|path|integer|true|The district number for the district the member represents. For example, the value can be 10.|
|format|query|string|false|The data format. Value can be xml or json.|
|currentMember|query|boolean|false|The status of the member. Use true or false|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

<h3 id="returns-a-list-of-members-filtered-by-state-and-district-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Members](#schemamembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of members filtered by congress, state and district.

<a id="opIdgetMembersByCongressStateAndDistrict"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/member/congress/1/string/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /member/congress/{congress}/{stateCode}/{district}`

Returns a list of members filtered by congress, state and district.

<h3 id="returns-a-list-of-members-filtered-by-congress-state-and-district-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stateCode|path|string|true|The two letter identifier for the state the member represents. For example, the value can be MI for Michigan.|
|district|path|integer|true|The district number for the district the member represents. For example, the value can be 10.|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|currentMember|query|boolean|false|The status of the member. Use true or false|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

<h3 id="returns-a-list-of-members-filtered-by-congress-state-and-district-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Members](#schemamembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-house-vote">house-vote</h1>

[BETA] Returns House of Representatives roll call vote data from the API

## Returns House of Representatives roll call vote data from the API. This endpoint is currently in beta.

<a id="opIdgetHouseVotes"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-vote?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-vote`

Returns House of Representatives roll call vote data from the API. This endpoint is currently in beta.

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-this-endpoint-is-currently-in-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "url": "https://api.congress.gov/v3/house-vote/119/1/17",
  "voteType": "Yea-and-Nay"
}
```

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-this-endpoint-is-currently-in-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseVote](#schemahousevote)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns House of Representatives roll call vote data from the API filtered by the specified Congress. This endpoint is currently in beta.

<a id="opIdgetHouseVotesByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-vote/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-vote/{congress}`

Returns House of Representatives roll call vote data from the API filtered by the specified Congress. This endpoint is currently in beta.

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-filtered-by-the-specified-congress-this-endpoint-is-currently-in-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "url": "https://api.congress.gov/v3/house-vote/119/1/17",
  "voteType": "Yea-and-Nay"
}
```

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-filtered-by-the-specified-congress-this-endpoint-is-currently-in-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseVote](#schemahousevote)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns House of Representatives roll call vote data from the API filtered by the specified Congress and session. This endpoint is currently in beta.

<a id="opIdgetHouseVotesByCongressAndSession"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-vote/1/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-vote/{congress}/{session}`

Returns House of Representatives roll call vote data from the API filtered by the specified Congress and session. This endpoint is currently in beta.

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-filtered-by-the-specified-congress-and-session-this-endpoint-is-currently-in-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|session|path|integer|true|The session number. The value can be 1 or 2.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|session|1|
|session|2|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "url": "https://api.congress.gov/v3/house-vote/119/1/17",
  "voteType": "Yea-and-Nay"
}
```

<h3 id="returns-house-of-representatives-roll-call-vote-data-from-the-api-filtered-by-the-specified-congress-and-session-this-endpoint-is-currently-in-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseVote](#schemahousevote)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified House of Representatives roll call vote. This endpoint is currently in beta.

<a id="opIdgetHouseVoteByCongressSessionAndVoteNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-vote/1/1/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-vote/{congress}/{session}/{voteNumber}`

Returns detailed information for a specified House of Representatives roll call vote. This endpoint is currently in beta.

<h3 id="returns-detailed-information-for-a-specified-house-of-representatives-roll-call-vote-this-endpoint-is-currently-in-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|session|path|integer|true|The session number. The value can be 1 or 2.|
|voteNumber|path|integer|true|The assigned roll call vote number. For example, 17.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|session|1|
|session|2|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "voteType": "Yea-and-Nay",
  "votePartyTotal": [
    {
      "nayTotal": 0,
      "notVotingTotal": 6,
      "presentTotal": 0,
      "voteParty": "R",
      "yeaTotal": 213,
      "party": {
        "name": "Republican",
        "type": "R"
      }
    }
  ],
  "voteQuestion": "On Passage"
}
```

<h3 id="returns-detailed-information-for-a-specified-house-of-representatives-roll-call-vote-this-endpoint-is-currently-in-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseVoteNumber](#schemahousevotenumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for how members voted on a specified House of Representatives roll call vote. This endpoint is currently in beta.

<a id="opIdgetHouseVoteMemberVotes"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-vote/1/1/0/members?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-vote/{congress}/{session}/{voteNumber}/members`

Returns detailed information for how members voted on a specified House of Representatives roll call vote. This endpoint is currently in beta.

<h3 id="returns-detailed-information-for-how-members-voted-on-a-specified-house-of-representatives-roll-call-vote-this-endpoint-is-currently-in-beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|session|path|integer|true|The session number. The value can be 1 or 2.|
|voteNumber|path|integer|true|The assigned roll call vote number. For example, 17.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|session|1|
|session|2|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "voteType": "Yea-and-Nay",
  "results": [
    {
      "bioguideID": "A000055",
      "firstName": "Robert",
      "lastName": "Aderholt",
      "voteCast": "Yea",
      "voteParty": "R",
      "voteState": "AL"
    }
  ],
  "voteQuestion": "On Passage"
}
```

<h3 id="returns-detailed-information-for-how-members-voted-on-a-specified-house-of-representatives-roll-call-vote-this-endpoint-is-currently-in-beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseVoteMembers](#schemahousevotemembers)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-committee">committee</h1>

Returns committee data from the API

## Returns a list of congressional committees.

<a id="opIdgetCommittees"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee`

Returns a list of congressional committees.

<h3 id="returns-a-list-of-congressional-committees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "chamber": "House",
  "committeeTypeCode": "Standing",
  "updateDate": "2020-02-04T00:07:37Z",
  "name": "Transportation and Infrastructure Committee",
  "parent": {
    "name": "Judiciary Committee",
    "systemCode": "hsju00",
    "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "url": "https://api.congress.gov/v3/committee/house/hspw00?format=json"
}
```

<h3 id="returns-a-list-of-congressional-committees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Committees](#schemacommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of congressional committees filtered by the specified chamber.

<a id="opIdgetCommitteesByChamber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}`

Returns a list of congressional committees filtered by the specified chamber.

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-chamber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "chamber": "House",
  "committeeTypeCode": "Standing",
  "updateDate": "2020-02-04T00:07:37Z",
  "name": "Transportation and Infrastructure Committee",
  "parent": {
    "name": "Judiciary Committee",
    "systemCode": "hsju00",
    "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "url": "https://api.congress.gov/v3/committee/house/hspw00?format=json"
}
```

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-chamber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Committees](#schemacommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of congressional committees filtered by the specified congress.

<a id="opIdgetCommitteesByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{congress}`

Returns a list of congressional committees filtered by the specified congress.

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "chamber": "House",
  "committeeTypeCode": "Standing",
  "updateDate": "2020-02-04T00:07:37Z",
  "name": "Transportation and Infrastructure Committee",
  "parent": {
    "name": "Judiciary Committee",
    "systemCode": "hsju00",
    "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "url": "https://api.congress.gov/v3/committee/house/hspw00?format=json"
}
```

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Committees](#schemacommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of congressional committees filtered by the specified congress and chamber.

<a id="opIdgetCommitteesByCongressAndChamber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/1/house?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{congress}/{chamber}`

Returns a list of congressional committees filtered by the specified congress and chamber.

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-congress-and-chamber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "chamber": "House",
  "committeeTypeCode": "Standing",
  "updateDate": "2020-02-04T00:07:37Z",
  "name": "Transportation and Infrastructure Committee",
  "parent": {
    "name": "Judiciary Committee",
    "systemCode": "hsju00",
    "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "url": "https://api.congress.gov/v3/committee/house/hspw00?format=json"
}
```

<h3 id="returns-a-list-of-congressional-committees-filtered-by-the-specified-congress-and-chamber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Committees](#schemacommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified congressional committee.

<a id="opIdgetCommitteeByChamberAndCode"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}`

Returns detailed information for a specified congressional committee.

<h3 id="returns-detailed-information-for-a-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bills": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/bills?format=json"
  },
  "communications": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/house-communication?format=json"
  },
  "history": [
    {
      "libraryOfCongressName": "Transportation and Infrastructure",
      "officialName": "Committee on Transportation and Infrastructure",
      "startDate": "1995-01-04T05:00:00Z",
      "updateDate": "2020-02-04T00:07:37Z",
      "endDate": "2020-03-04T05:00:00Z"
    }
  ],
  "isCurrent": true,
  "reports": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/reports?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "type": "Standing",
  "updateDate": "2020-02-04T00:07:37Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeDetail](#schemacommitteedetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified congressional committee filtered by the specified Congress.

<a id="opIdgetCommitteeByCongressChamberAndCode"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/1/house/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{congress}/{chamber}/{committeeCode}`

Returns detailed information for a specified congressional committee filtered by the specified Congress.

<h3 id="returns-detailed-information-for-a-specified-congressional-committee-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bills": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/bills?format=json"
  },
  "communications": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/house-communication?format=json"
  },
  "history": [
    {
      "libraryOfCongressName": "Transportation and Infrastructure",
      "officialName": "Committee on Transportation and Infrastructure",
      "startDate": "1995-01-04T05:00:00Z",
      "updateDate": "2020-02-04T00:07:37Z",
      "endDate": "2020-03-04T05:00:00Z"
    }
  ],
  "isCurrent": true,
  "reports": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/reports?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "type": "Standing",
  "updateDate": "2020-02-04T00:07:37Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-congressional-committee-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeDetail](#schemacommitteedetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of legislation associated with the specified congressional committee.

<a id="opIdgetCommitteeBills"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house/string/bills?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}/bills`

Returns the list of legislation associated with the specified congressional committee.

<h3 id="returns-the-list-of-legislation-associated-with-the-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "bills": [
    {
      "actionDate": "2022-02-18T16:38:41Z",
      "congress": 117,
      "number": "117",
      "relationshipType": "Referred to",
      "type": "HCONRES",
      "updateDate": "2022-02-18T16:38:41Z",
      "url": "https://api.congress.gov/v3/bill/112/hconres/117?format=json"
    }
  ],
  "count": 27251,
  "url": "https://api.congress.gov/v3/committee/house/hspw00/bills?format=json"
}
```

<h3 id="returns-the-list-of-legislation-associated-with-the-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeBills](#schemacommitteebills)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committee reports associated with a specified congressional committee.

<a id="opIdgetCommitteeReportsByCommittee"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house/string/reports?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}/reports`

Returns the list of committee reports associated with a specified congressional committee.

<h3 id="returns-the-list-of-committee-reports-associated-with-a-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
  }
]
```

<h3 id="returns-the-list-of-committee-reports-associated-with-a-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReports2](#schemacommitteereports2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of nominations associated with a specified congressional committee.

<a id="opIdgetCommitteeNominations"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house/string/nominations?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}/nominations`

Returns the list of nominations associated with a specified congressional committee.

<h3 id="returns-the-list-of-nominations-associated-with-a-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "citation": "PN2477",
    "congress": 117,
    "description": "Nomination of xyz for the 117th Congress",
    "latestAction": {
      "actionDate": "2022-06-16",
      "text": "Read twice and referred to the Committee on the Judiciary."
    },
    "nominationType": {
      "isCivilian": false,
      "isMilitary": true
    },
    "number": 2477,
    "partNumber": "00",
    "receivedDate": "2022-08-03",
    "updateDate": "2022-09-30T04:40:14Z",
    "url": "https://api.congress.gov/v3/nomination/117/2477?format=json"
  }
]
```

<h3 id="returns-the-list-of-nominations-associated-with-a-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeNominations2](#schemacommitteenominations2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of House communications associated with a specified congressional committee.

<a id="opIdgetCommitteeHouseCommunications"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/house/string/house-communication?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}/house-communication`

Returns the list of House communications associated with a specified congressional committee.

<h3 id="returns-the-list-of-house-communications-associated-with-a-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be house.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 114,
  "number": 3262,
  "referralDate": "2015-10-27",
  "updateDate": "2018-02-02",
  "chamber": "House",
  "url": "https://api.congress.gov/v3/house-communication/114/ec/3262?format=json"
}
```

<h3 id="returns-the-list-of-house-communications-associated-with-a-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeHouseCommunication](#schemacommitteehousecommunication)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of Senate communications associated with a specified congressional committee.

<a id="opIdgetCommitteeSenateCommunications"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee/senate/string/senate-communication?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee/{chamber}/{committeeCode}/senate-communication`

Returns the list of Senate communications associated with a specified congressional committee.

<h3 id="returns-the-list-of-senate-communications-associated-with-a-specified-congressional-committee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chamber|path|string|true|The chamber name. Value can be senate.|
|committeeCode|path|string|true|The committee code. For example, the value can be hspw00.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 114,
  "number": 3262,
  "referralDate": "2015-10-27",
  "updateDate": "2018-02-02",
  "chamber": "Senate",
  "url": "https://api.congress.gov/v3/senate-communication/114/ec/7402?format=json"
}
```

<h3 id="returns-the-list-of-senate-communications-associated-with-a-specified-congressional-committee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeSenateCommunication](#schemacommitteesenatecommunication)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-committee-report">committee-report</h1>

Returns committee report data from the API

## Returns the list of committee reports.

<a id="opIdgetCommitteeReports"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-report?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-report`

Returns the list of committee reports.

<h3 id="returns-the-list-of-committee-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|conference|query|boolean|false|Flag to indicate conference reports. Value can be true or false.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
  }
]
```

<h3 id="returns-the-list-of-committee-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReports2](#schemacommitteereports2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committee reports filtered by specified congress.

<a id="opIdgetCommitteeReportByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-report/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-report/{congress}`

Returns the list of committee reports filtered by specified congress.

<h3 id="returns-the-list-of-committee-reports-filtered-by-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|conference|query|boolean|false|Flag to indicate conference reports. Value can be true or false.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
  }
]
```

<h3 id="returns-the-list-of-committee-reports-filtered-by-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReports2](#schemacommitteereports2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committee reports filtered by specified congress and report type.

<a id="opIdgetCommitteeReportsByCongressAndType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-report/1/hrpt?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-report/{congress}/{reportType}`

Returns the list of committee reports filtered by specified congress and report type.

<h3 id="returns-the-list-of-committee-reports-filtered-by-specified-congress-and-report-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|reportType|path|string|true|The type of committee report. Value can be hrpt, srpt, or erpt.|
|format|query|string|false|The data format. Value can be xml or json.|
|conference|query|boolean|false|Flag to indicate conference reports. Value can be true or false.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|hrpt|
|reportType|srpt|
|reportType|erpt|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
  }
]
```

<h3 id="returns-the-list-of-committee-reports-filtered-by-specified-congress-and-report-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReports2](#schemacommitteereports2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified committee report.

<a id="opIdgetCommitteeReportByCongressTypeAndNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-report/1/hrpt/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-report/{congress}/{reportType}/{reportNumber}`

Returns detailed information for a specified committee report.

<h3 id="returns-detailed-information-for-a-specified-committee-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|reportType|path|string|true|The type of committee report. Value can be hrpt, srpt, or erpt.|
|reportNumber|path|integer|true|The committee report's assigned number. For example, the value can be 617.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|hrpt|
|reportType|srpt|
|reportType|erpt|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json",
    "associatedBill": [
      {
        "congress": 116,
        "number": "6395",
        "type": "HR",
        "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
      }
    ],
    "isConferenceReport": true,
    "issueDate": "2020-12-03T05:00:00Z",
    "reportType": "H.Rept.",
    "sessionNumber": 2,
    "text": {
      "count": 2,
      "url": "https://api.congress.gov/v3/committee-report/116/hrpt/617/text?format=json"
    },
    "title": "WILLIAM M. (MAC) THORNBERRY NATIONAL DEFENSE AUTHORIZATION ACT FOR FISCAL YEAR 2021"
  }
]
```

<h3 id="returns-detailed-information-for-a-specified-committee-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReportsNumber](#schemacommitteereportsnumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of texts for a specified committee report.

<a id="opIdgetCommitteeReportText"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-report/1/hrpt/0/text?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-report/{congress}/{reportType}/{reportNumber}/text`

Returns the list of texts for a specified committee report.

<h3 id="returns-the-list-of-texts-for-a-specified-committee-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|reportType|path|string|true|The type of committee report. Value can be hrpt, srpt, or erpt.|
|reportNumber|path|integer|true|The committee report's assigned number. For example, the value can be 617.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|hrpt|
|reportType|srpt|
|reportType|erpt|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "isErrata": "N",
    "type": "Formatted Text",
    "url": "https://www.congress.gov/116/crpt/hrpt617/generated/CRPT-116hrpt617.htm"
  }
]
```

<h3 id="returns-the-list-of-texts-for-a-specified-committee-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeReportsText](#schemacommitteereportstext)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-committee-print">committee-print</h1>

Returns committee print data from the API

## Returns a list of committee prints.

<a id="opIdgetCommitteePrints"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-print?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-print`

Returns a list of committee prints.

<h3 id="returns-a-list-of-committee-prints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-prints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteePrint](#schemacommitteeprint)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of committee prints filtered by the specified congress.

<a id="opIdgetCommitteePrintsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-print/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-print/{congress}`

Returns a list of committee prints filtered by the specified congress.

<h3 id="returns-a-list-of-committee-prints-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-prints-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteePrint](#schemacommitteeprint)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of committee prints filtered by the specified congress and chamber.

<a id="opIdgetCommitteePrintsByCongressAndChamber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-print/1/house?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-print/{congress}/{chamber}`

Returns a list of committee prints filtered by the specified congress and chamber.

<h3 id="returns-a-list-of-committee-prints-filtered-by-the-specified-congress-and-chamber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-prints-filtered-by-the-specified-congress-and-chamber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteePrint](#schemacommitteeprint)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified committee print.

<a id="opIdgetCommitteePrintByCongressChamberAndJacketNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-print/1/house/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-print/{congress}/{chamber}/{jacketNumber}`

Returns detailed information for a specified committee print.

<h3 id="returns-detailed-information-for-a-specified-committee-print-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|jacketNumber|path|integer|true|The jacket number for the print. For example, the value can be 48144.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "associatedBills": [
    {
      "congress": 116,
      "number": "6395",
      "type": "HR",
      "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
    }
  ],
  "chamber": "House",
  "citation": "117-62",
  "committees": [
    {
      "name": "Rules Committee",
      "systemCode": "hsru00",
      "url": "https://api.congress.gov/v3/committee/house/hsru00?format=json"
    }
  ],
  "congress": 117,
  "jacketNumber": 48144,
  "text": {
    "count": 4,
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144/text?format=json"
  },
  "number": "62",
  "title": "RULES COMMITTEE PRINT 117-62 TEXT OF H.R. 5768, VIOLENT INCIDENT CLEAR- ANCE AND TECHNOLOGICAL INVESTIGATIVE METHODS ACT OF 2022",
  "updateDate": "2022-08-01T21:19:33Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-committee-print-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteePrintDetail](#schemacommitteeprintdetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of texts for a specified committee print.

<a id="opIdgetCommitteePrintText"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-print/1/house/0/text?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-print/{congress}/{chamber}/{jacketNumber}/text`

Returns the list of texts for a specified committee print.

<h3 id="returns-the-list-of-texts-for-a-specified-committee-print-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|jacketNumber|path|integer|true|The jacket number for the print. For example, the value can be 48144.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "type": "Formatted Text",
    "url": "https://www.congress.gov/117/cprt/HPRT48144/CPRT-117HPRT48144.htm"
  }
]
```

<h3 id="returns-the-list-of-texts-for-a-specified-committee-print-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteePrintDetailText](#schemacommitteeprintdetailtext)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-committee-meeting">committee-meeting</h1>

Returns committee meeting data from the API

## Returns a list of committee meetings.

<a id="opIdgetCommitteeMeetings"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-meeting?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-meeting`

Returns a list of committee meetings.

<h3 id="returns-a-list-of-committee-meetings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "eventid": "115522",
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-meetings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeMeeting](#schemacommitteemeeting)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of committee meetings filtered by the specified congress.

<a id="opIdgetCommitteeMeetingsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-meeting/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-meeting/{congress}`

Returns a list of committee meetings filtered by the specified congress.

<h3 id="returns-a-list-of-committee-meetings-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "eventid": "115522",
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-meetings-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeMeeting](#schemacommitteemeeting)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of committee meetings filtered by the specified congress and chamber.

<a id="opIdgetCommitteeMeetingsByCongressAndChamber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-meeting/1/house?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-meeting/{congress}/{chamber}`

Returns a list of committee meetings filtered by the specified congress and chamber.

<h3 id="returns-a-list-of-committee-meetings-filtered-by-the-specified-congress-and-chamber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "eventid": "115522",
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json"
  }
]
```

<h3 id="returns-a-list-of-committee-meetings-filtered-by-the-specified-congress-and-chamber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeMeeting](#schemacommitteemeeting)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified committee meeting.

<a id="opIdgetCommitteeMeetingByCongressChamberAndEventId"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/committee-meeting/1/house/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /committee-meeting/{congress}/{chamber}/{eventId}`

Returns detailed information for a specified committee meeting.

<h3 id="returns-detailed-information-for-a-specified-committee-meeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|eventId|path|string|true|The event identifier. For example, the value can be 115538.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "congress": 117,
  "date": "2022-08-01T04:44:57Z",
  "eventid": "115538",
  "hearingTranscript": [
    {
      "jacketNumber": 52640,
      "url": "https://api.congress.gov/v3/hearing/118/house/52640?format=json"
    }
  ],
  "location": {
    "building": "Longworth House Office Building",
    "room": "1234"
  },
  "meetingDocuments": [
    {
      "description": "",
      "documentType": "Support Document ",
      "format": "PDF",
      "name": "Hearing Notice",
      "url": "https://www.congress.gov/118/meeting/house/115538/documents/HHRG-118-II24-20230324-SD001.pdf"
    }
  ],
  "meetingStatus": "Scheduled",
  "relatedItems": [
    {
      "bills": [
        {
          "congress": 116,
          "number": "6395",
          "type": "HR",
          "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
        }
      ],
      "nominations": [
        {
          "congress": 116,
          "number": 614,
          "part": "00",
          "url": "https://api.congress.gov/v3/nomination/116/614?format=json"
        }
      ],
      "treaties": [
        {
          "congress": 112,
          "number": 8,
          "url": "https://api.congress.gov/v3/treaty/112/8?format=json"
        }
      ]
    }
  ],
  "title": "Legislative hearing on: •\tH.R. 1246 (Rep. Hageman), To authorize leases of up to 99 years for land held in trust for federally recognized Indian tribes; and\r\n•\tH.R. 1532 (Rep. Hageman), To authorize any Indian Tribe to lease, sell, convey, warrant, or otherwise transfer real property to which that Indian Tribe holds fee title without the consent of the Federal Government, and for other purposes.",
  "type": "Hearing",
  "updateDate": "2022-08-01T04:44:57Z",
  "videos": [
    {
      "name": "Legislative Hearing on H.R. 1246 and H.R. 1532 | Indian and Insular Affairs Subcommittee",
      "url": "https://www.congress.gov/event/118th-Congress/house-event/115538"
    }
  ],
  "witnessDocuments": [
    {
      "documentType": "Witness Statement",
      "format": "PDF",
      "url": "https://www.congress.gov/118/meeting/house/115538/witnesses/HHRG-118-II24-Wstate-NewlandB-20230324.pdf"
    }
  ],
  "witnesses": [
    {
      "name": "The Honorable John Williams",
      "organization": "United Auburn Rancheria",
      "position": "Vice Chairman"
    }
  ]
}
```

<h3 id="returns-detailed-information-for-a-specified-committee-meeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CommitteeMeetingDetail](#schemacommitteemeetingdetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-hearing">hearing</h1>

Returns hearing data from the API

## Returns a list of hearings.

<a id="opIdgetHearings"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/hearing?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /hearing`

Returns a list of hearings.

<h3 id="returns-a-list-of-hearings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/hearing/117/house/41365?format=json"
  }
]
```

<h3 id="returns-a-list-of-hearings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Hearings](#schemahearings)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of hearings filtered by specified congress.

<a id="opIdgetHearingsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/hearing/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /hearing/{congress}`

Returns a list of hearings filtered by specified congress.

<h3 id="returns-a-list-of-hearings-filtered-by-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/hearing/117/house/41365?format=json"
  }
]
```

<h3 id="returns-a-list-of-hearings-filtered-by-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Hearings](#schemahearings)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of hearings filtered by specified congress and chamber.

<a id="opIdgetHearingsByCongressAndChamber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/hearing/1/house?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /hearing/{congress}/{chamber}`

Returns a list of hearings filtered by specified congress and chamber.

<h3 id="returns-a-list-of-hearings-filtered-by-specified-congress-and-chamber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/hearing/117/house/41365?format=json"
  }
]
```

<h3 id="returns-a-list-of-hearings-filtered-by-specified-congress-and-chamber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Hearings](#schemahearings)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified hearing.

<a id="opIdgetHearingByCongressChamberAndJacketNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/hearing/1/house/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /hearing/{congress}/{chamber}/{jacketNumber}`

Returns detailed information for a specified hearing.

<h3 id="returns-detailed-information-for-a-specified-hearing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|chamber|path|string|true|The chamber name. Value can be house, senate, or joint.|
|jacketNumber|path|integer|true|The jacket number for the print. For example, the value can be 48144.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chamber|house|
|chamber|senate|
|chamber|joint|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "associatedMeeting": {
    "eventId": "115266",
    "url": "https://api.congress.gov/v3/committee-meeting/117/house/115266?format=json"
  },
  "chamber": "House",
  "citation": "H.Hrg.118",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "congress": 118,
  "dates": [
    "2022-08-01"
  ],
  "formats": [
    {
      "type": "Formatted Text",
      "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
    }
  ],
  "jacketNumber": 50896,
  "libraryOfCongressidentifier": "LC70380",
  "title": "FEDERAL PANDEMIC SPENDING: A PRESCRIPTION FOR WASTE, FRAUD AND ABUSE",
  "updateDate": "2025-11-04T03:21:12Z"
}
```

<h3 id="returns-detailed-information-for-a-specified-hearing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HearingDetail](#schemahearingdetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-congressional-record">congressional-record</h1>

Returns Congressional Record data from the API

## Returns a list of congressional record issues sorted by most recent.

<a id="opIdgetCongressionalRecords"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/congressional-record?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /congressional-record`

Returns a list of congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-congressional-record-issues-sorted-by-most-recent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|y|query|integer|false|The year the issue was published. For example, the value can be 2022.|
|m|query|integer|false|The month the issue was published. For example, the value can be 6.|
|d|query|integer|false|The day the issue was published. For example, the value can be 28.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "IndexStart": 1,
  "Issues": [
    {
      "Congress": "117",
      "Id": 26958,
      "Issue": "109",
      "Links": {
        "Digest": {
          "Label": "Daily Digest",
          "Ordinal": 1,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-dailydigest.pdf"
            }
          ]
        },
        "FullRecord": {
          "Label": "Entire Issue",
          "Ordinal": 5,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28.pdf"
            }
          ]
        },
        "House": {
          "Label": "House Section",
          "Ordinal": 3,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-house.pdf"
            }
          ]
        },
        "Remarks": {
          "Label": "Extensions of Remarks Section",
          "Ordinal": 4,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-extensions.pdf"
            }
          ]
        },
        "Senate": {
          "Label": "Senate Section",
          "Ordinal": 2,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-senate.pdf"
            }
          ]
        }
      },
      "PublishDate": "2022-02-18",
      "Session": "2",
      "Volume": "168"
    }
  ]
}
```

<h3 id="returns-a-list-of-congressional-record-issues-sorted-by-most-recent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CongressionalRecord](#schemacongressionalrecord)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-daily-congressional-record">daily-congressional-record</h1>

Returns daily Congressional Record data from the API

## Returns a list of daily congressional record issues sorted by most recent.

<a id="opIdgetDailyCongressionalRecords"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/daily-congressional-record?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /daily-congressional-record`

Returns a list of daily congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-daily-congressional-record-issues-sorted-by-most-recent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "congress": "118",
    "issueDate": "2023-07-11T04:00:00Z",
    "issueNumber": "118",
    "sessionNumber": "1",
    "updateDate": "2023-07-12T11:30:30Z",
    "url": "https://api.congress.gov/v3/daily-congressional-record/169/118?format=json",
    "volumeNumber": "169"
  }
]
```

<h3 id="returns-a-list-of-daily-congressional-record-issues-sorted-by-most-recent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DailyCongressionalRecord2](#schemadailycongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of daily Congressional Records filtered by the specified volume number.

<a id="opIdgetDailyCongressionalRecordsByVolumeNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/daily-congressional-record/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /daily-congressional-record/{volumeNumber}`

Returns a list of daily Congressional Records filtered by the specified volume number.

<h3 id="returns-a-list-of-daily-congressional-records-filtered-by-the-specified-volume-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|volumeNumber|path|integer|true|The specified volume of the daily Congressional record, for example 166.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "congress": "118",
    "issueDate": "2023-07-11T04:00:00Z",
    "issueNumber": "118",
    "sessionNumber": "1",
    "updateDate": "2023-07-12T11:30:30Z",
    "url": "https://api.congress.gov/v3/daily-congressional-record/169/118?format=json",
    "volumeNumber": "169"
  }
]
```

<h3 id="returns-a-list-of-daily-congressional-records-filtered-by-the-specified-volume-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DailyCongressionalRecord2](#schemadailycongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of daily Congressional Records filtered by the specified volume number and specified issue number.

<a id="opIdgetDailyCongressionalRecordIssue"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/daily-congressional-record/0/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /daily-congressional-record/{volumeNumber}/{issueNumber}`

Returns a list of daily Congressional Records filtered by the specified volume number and specified issue number.

<h3 id="returns-a-list-of-daily-congressional-records-filtered-by-the-specified-volume-number-and-specified-issue-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|volumeNumber|path|integer|true|The specified volume of the daily Congressional record, for example 166.|
|issueNumber|path|integer|true|The specified issue of the daily Congressional record, for example 153.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "issue": {
    "congress": 119,
    "fullIssue": {
      "articles": {
        "count": 315,
        "url": "https://api.congress.gov/v3/daily-congressional-record/171/1/articles?format=json"
      },
      "entireIssue": [
        {
          "part": "1",
          "type": "PDF",
          "url": "https://www.congress.gov/119/crec/2025/01/03/171/1/CREC-2025-01-03-v171.pdf"
        }
      ],
      "sections": [
        {
          "endPage": "D12",
          "name": "Daily Digest",
          "startPage": "D1",
          "text": [
            {
              "type": "Formatted Text",
              "url": "https://www.congress.gov/119/crec/2025/01/03/d03ja5-1.htm"
            }
          ]
        }
      ]
    },
    "issueDate": "2025-01-03T05:00:00Z",
    "issueNumber": "1",
    "sessionNumber": 1,
    "updateDate": "2025-01-04T16:59:21Z",
    "url": "https://api.congress.gov/v3/daily-congressional-record/171/1?format=json",
    "volumeNumber": 171
  }
}
```

<h3 id="returns-a-list-of-daily-congressional-records-filtered-by-the-specified-volume-number-and-specified-issue-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DailyCongressionalRecordIssue](#schemadailycongressionalrecordissue)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of daily Congressional Record articles filtered by the specified volume number and specified issue number.

<a id="opIdgetDailyCongressionalRecordIssueArticles"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/daily-congressional-record/0/0/articles?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /daily-congressional-record/{volumeNumber}/{issueNumber}/articles`

Returns a list of daily Congressional Record articles filtered by the specified volume number and specified issue number.

<h3 id="returns-a-list-of-daily-congressional-record-articles-filtered-by-the-specified-volume-number-and-specified-issue-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|volumeNumber|path|integer|true|The specified volume of the daily Congressional record, for example 166.|
|issueNumber|path|integer|true|The specified issue of the daily Congressional record, for example 153.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "articles": [
    {
      "name": "Daily Digest",
      "sectionArticles": [
        {
          "endPage": "D760",
          "startPage": "D759",
          "text": [
            {
              "type": "Formatted Text",
              "url": "https://www.congress.gov/116/crec/2020/09/04/modified/CREC-2020-09-04-pt1-PgD759.htm"
            }
          ],
          "title": "Daily Digest/Next Meeting of the SENATE + Next Meeting of the HOUSE OF REPRESENTATIVES + Other End Matter; Congressional Record Vol. 166, No. 153"
        }
      ]
    }
  ]
}
```

<h3 id="returns-a-list-of-daily-congressional-record-articles-filtered-by-the-specified-volume-number-and-specified-issue-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DailyCongressionalRecordArticles](#schemadailycongressionalrecordarticles)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-bound-congressional-record">bound-congressional-record</h1>

Returns bound Congressional Record data from the API

## Returns a list of bound congressional records issues sorted by most recent.

<a id="opIdgetBoundCongressionalRecords"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bound-congressional-record?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bound-congressional-record`

Returns a list of bound congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "boundCongressionalRecord": [
    {
      "congress": 101,
      "date": "1990-05-01",
      "sessionNumber": 2,
      "updateDate": "2020-10-20",
      "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
      "volumeNumber": 136
    }
  ]
}
```

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BoundCongressionalRecord2](#schemaboundcongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of bound congressional records issues sorted by most recent.

<a id="opIdgetBoundCongressionalRecordsByYear"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bound-congressional-record/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bound-congressional-record/{year}`

Returns a list of bound congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|year|path|integer|true|The specified year of the bound Congressional record, for example 1990.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "boundCongressionalRecord": [
    {
      "congress": 101,
      "date": "1990-05-01",
      "sessionNumber": 2,
      "updateDate": "2020-10-20",
      "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
      "volumeNumber": 136
    }
  ]
}
```

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BoundCongressionalRecord2](#schemaboundcongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of bound congressional records issues sorted by most recent.

<a id="opIdgetBoundCongressionalRecordsByYearAndMonth"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bound-congressional-record/0/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bound-congressional-record/{year}/{month}`

Returns a list of bound congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|year|path|integer|true|The specified year of the bound Congressional record, for example 1990.|
|month|path|integer|true|The specified month of the bound Congressional record, for example 4 for April.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "boundCongressionalRecord": [
    {
      "congress": 101,
      "date": "1990-05-01",
      "sessionNumber": 2,
      "updateDate": "2020-10-20",
      "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
      "volumeNumber": 136
    }
  ]
}
```

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BoundCongressionalRecord2](#schemaboundcongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of bound congressional records issues sorted by most recent.

<a id="opIdgetBoundCongressionalRecordsByYearMonthAndDay"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/bound-congressional-record/0/0/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /bound-congressional-record/{year}/{month}/{day}`

Returns a list of bound congressional record issues sorted by most recent.

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|year|path|integer|true|The specified year of the bound Congressional record, for example 1990.|
|month|path|integer|true|The specified month of the bound Congressional record, for example 4 for April.|
|day|path|integer|true|The specified day of the bound Congressional record, for example 18.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "boundCongressionalRecord": [
    {
      "congress": 101,
      "date": "1990-05-01",
      "sessionNumber": 2,
      "updateDate": "2020-10-20",
      "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
      "volumeNumber": 136
    }
  ]
}
```

<h3 id="returns-a-list-of-bound-congressional-records-issues-sorted-by-most-recent-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[BoundCongressionalRecord2](#schemaboundcongressionalrecord2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-house-communication">house-communication</h1>

Returns House communication data from the API

## Returns a list of House communications.

<a id="opIdgetHouseCommunications"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-communication?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-communication`

Returns a list of House communications.

<h3 id="returns-a-list-of-house-communications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "houseCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congressNumber": 117,
      "number": "2057",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/house-communication/117/ec/2057?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-house-communications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseCommunications](#schemahousecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of House communications filtered by the specified congress.

<a id="opIdgetHouseCommunicationsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-communication/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-communication/{congress}`

Returns a list of House communications filtered by the specified congress.

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "houseCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congressNumber": 117,
      "number": "2057",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/house-communication/117/ec/2057?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseCommunications](#schemahousecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of House communications filtered by the specified congress and communication type..

<a id="opIdgetHouseCommunicationsByCongressAndType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-communication/1/ec?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-communication/{congress}/{communicationType}`

Returns a list of House communications filtered by the specified congress and communication type.

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-and-communication-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|communicationType|path|string|true|The type of communication. Value can be ec, ml, pm, or pt.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|communicationType|ec|
|communicationType|ml|
|communicationType|pm|
|communicationType|pt|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "houseCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congressNumber": 117,
      "number": "2057",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/house-communication/117/ec/2057?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-and-communication-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseCommunications](#schemahousecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of House communications filtered by the specified congress and communication type..

<a id="opIdgetHouseCommunicationsByCongressTypeAndNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-communication/1/ec/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-communication/{congress}/{communicationType}/{communicationNumber}`

Returns a list of House communications filtered by the specified congress and communication type.

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-and-communication-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|communicationType|path|string|true|The type of communication. Value can be ec, ml, pm, or pt.|
|communicationNumber|path|integer|true|The communication's assigned number. For example, the value can be 3324.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|communicationType|ec|
|communicationType|ml|
|communicationType|pm|
|communicationType|pt|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "abstract": "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json",
      "referralDate": "2024-03-07"
    }
  ],
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 118,
  "congressionalRecordDate": "2024-03-07",
  "isRulemaking": "True",
  "legalAuthority": "5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)",
  "matchingRequirements": [
    {
      "number": 8070,
      "url": "https://api.congress.gov/v3/house-requirement/8070"
    }
  ],
  "number": 3324,
  "reportNature": "The Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024.",
  "sessionNumber": 2,
  "submittingAgency": "Environmental Protection Agency",
  "submittingOfficial": "Director, Regulatory Management Division",
  "updateDate": "2024-09-03"
}
```

<h3 id="returns-a-list-of-house-communications-filtered-by-the-specified-congress-and-communication-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseCommunicationTypeNumber](#schemahousecommunicationtypenumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-house-requirement">house-requirement</h1>

Returns House requirement data from the API

## Returns a list of House requirements.

<a id="opIdgetHouseRequirements"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-requirement?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-requirement`

Returns a list of House requirements.

<h3 id="returns-a-list-of-house-requirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "houseRequirements": [
    {
      "number": 8070,
      "updateDate": "2021-08-13",
      "url": "https://api.congress.gov/v3/house-requirement/8070?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-house-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseRequirements](#schemahouserequirements)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified House requirement.

<a id="opIdgetHouseRequirementByNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-requirement/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-requirement/{requirementNumber}`

Returns detailed information for a specified House requirement.

<h3 id="returns-detailed-information-for-a-specified-house-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requirementNumber|path|integer|true|The requirement's assigned number. For example, the value can be 8070.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "houseRequirement": {
    "activeRecord": true,
    "frequency": "[No deadline specified].",
    "legalAuthority": "5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)",
    "matchingCommunications": {
      "count": 90774,
      "url": "https://api.congress.gov/v3/house-requirement/8070/matching-communications?format=json"
    },
    "nature": "Congressional review of agency rulemaking.",
    "number": 8070,
    "parentAgency": "Multiple Executive Agencies and Departments",
    "submittingAgency": "Multiple Executive Agencies and Departments",
    "updateDate": "2021-08-13"
  }
}
```

<h3 id="returns-detailed-information-for-a-specified-house-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[HouseRequirement2](#schemahouserequirement2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of matching communications to a House requirement.

<a id="opIdgetHouseRequirementMatchingCommunications"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/house-requirement/0/matching-communications?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /house-requirement/{requirementNumber}/matching-communications`

Returns a list of matching communications to a House requirement.

<h3 id="returns-a-list-of-matching-communications-to-a-house-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requirementNumber|path|integer|true|The requirement's assigned number. For example, the value can be 8070.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "matchCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 112,
      "number": 2,
      "url": "https://api.congress.gov/v3/house-communication/112/EC/2?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-matching-communications-to-a-house-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[MatchCommunications2](#schemamatchcommunications2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-senate-communication">senate-communication</h1>

Returns Senate communication data from the API

## Returns a list of Senate communications.

<a id="opIdgetSenateCommunications"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/senate-communication?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /senate-communication`

Returns a list of Senate communications.

<h3 id="returns-a-list-of-senate-communications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "senateCommunications": [
    {
      "chamber": "Senate",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 117,
      "number": "1615",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-senate-communications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SenateCommunications](#schemasenatecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of Senate communications filtered by the specified congress.

<a id="opIdgetSenateCommunicationsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/senate-communication/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /senate-communication/{congress}`

Returns a list of Senate communications filtered by the specified congress.

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "senateCommunications": [
    {
      "chamber": "Senate",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 117,
      "number": "1615",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SenateCommunications](#schemasenatecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of Senate communications filtered by the specified congress and communication type..

<a id="opIdgetSenateCommunicationsByCongressAndType"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/senate-communication/1/ec?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /senate-communication/{congress}/{communicationType}`

Returns a list of Senate communications filtered by the specified congress and communication type.

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-and-communication-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|communicationType|path|string|true|The type of communication. Value can be ec, pm, or pom.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|communicationType|ec|
|communicationType|pm|
|communicationType|pom|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "senateCommunications": [
    {
      "chamber": "Senate",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 117,
      "number": "1615",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-and-communication-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SenateCommunications](#schemasenatecommunications)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of Senate communications filtered by the specified congress and communication type..

<a id="opIdgetSenateCommunicationByCongressTypeAndNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/senate-communication/1/ec/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /senate-communication/{congress}/{communicationType}/{communicationNumber}`

Returns a list of Senate communications filtered by the specified congress and communication type.

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-and-communication-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|communicationType|path|string|true|The type of communication. Value can be ec, pm, or pom.|
|communicationNumber|path|integer|true|The communication's assigned number. For example, the value can be 3324.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|communicationType|ec|
|communicationType|pm|
|communicationType|pom|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "abstract": "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json",
      "referralDate": "2024-03-07"
    }
  ],
  "congress": 118,
  "congressionalRecordDate": "2024-03-07",
  "number": 3324,
  "sessionNumber": 2,
  "updateDate": "2024-09-03"
}
```

<h3 id="returns-a-list-of-senate-communications-filtered-by-the-specified-congress-and-communication-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SenateCommunicationTypeNumber](#schemasenatecommunicationtypenumber)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-nomination">nomination</h1>

Returns nomination data from the API

## Returns a list of nominations sorted by date received from the President.

<a id="opIdgetNominations"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination`

Returns a list of nominations sorted by date received from the President.

<h3 id="returns-a-list-of-nominations-sorted-by-date-received-from-the-president-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "nominations": [
    {
      "citation": "PN2804",
      "congress": 117,
      "description": "Mary Anne Carter, of Tennessee, to be Chairperson of the National Endowment for the Arts for a term of four years, vice Maria Rosario Jackson, resigned.",
      "latestAction": {
        "actionDate": "2022-12-07",
        "text": "Received in the Senate and referred to the Committee on Armed Services."
      },
      "nominationType": {
        "isCivilian": false,
        "isMilitary": true
      },
      "number": 2804,
      "organization": "Army",
      "partNumber": "00",
      "receivedDate": "2022-12-07",
      "updateDate": "2022-12-08T05:25:17Z",
      "url": "https://api.congress.gov/v3/nomination/117/2804?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-nominations-sorted-by-date-received-from-the-president-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Nominations](#schemanominations)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of nominations filtered by the specified congress and sorted by date received from the President.

<a id="opIdgetNominationsByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}`

Returns a list of nominations filtered by the specified congress and sorted by date received from the President.

<h3 id="returns-a-list-of-nominations-filtered-by-the-specified-congress-and-sorted-by-date-received-from-the-president-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "nominations": [
    {
      "citation": "PN2804",
      "congress": 117,
      "description": "Mary Anne Carter, of Tennessee, to be Chairperson of the National Endowment for the Arts for a term of four years, vice Maria Rosario Jackson, resigned.",
      "latestAction": {
        "actionDate": "2022-12-07",
        "text": "Received in the Senate and referred to the Committee on Armed Services."
      },
      "nominationType": {
        "isCivilian": false,
        "isMilitary": true
      },
      "number": 2804,
      "organization": "Army",
      "partNumber": "00",
      "receivedDate": "2022-12-07",
      "updateDate": "2022-12-08T05:25:17Z",
      "url": "https://api.congress.gov/v3/nomination/117/2804?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-nominations-filtered-by-the-specified-congress-and-sorted-by-date-received-from-the-president-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Nominations](#schemanominations)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified nomination.

<a id="opIdgetNominationByCongressAndNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}/{nominationNumber}`

Returns detailed information for a specified nomination.

<h3 id="returns-detailed-information-for-a-specified-nomination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|nominationNumber|path|integer|true|The nomination's assigned number. For example, the value can be 389.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "nomination": {
    "actions": {
      "count": 7,
      "url": "https://api.congress.gov/v3/nomination/118/16/actions?format=json"
    },
    "authorityDate": "2025-10-21",
    "citation": "PN16",
    "committees": {
      "count": 1,
      "url": "https://api.congress.gov/v3/nomination/118/16/committees?format=json"
    },
    "congress": 118,
    "description": "Daniel B. Maffei, of New York, to be a Federal Maritime Commissioner for a term expiring June 30, 2027.  (Reappointment)",
    "hearings": {
      "count": 1,
      "url": "https://api.congress.gov/v3/nomination/118/16/hearings?format=json"
    },
    "latestAction": {
      "actionDate": "2024-05-14",
      "text": "Confirmed by the Senate by Voice Vote."
    },
    "nominationType": {
      "isCivilian": false,
      "isMilitary": true
    },
    "nominees": [
      {
        "nomineeCount": 1,
        "ordinal": 1,
        "organization": "Federal Maritime Commission",
        "positionTitle": "Federal Maritime Commissioner",
        "url": "https://api.congress.gov/v3/nomination/118/16/1?format=json"
      }
    ],
    "number": 16,
    "partNumber": "00",
    "receivedDate": "2023-01-03",
    "updateDate": "2025-10-22T15:58:44Z"
  }
}
```

<h3 id="returns-detailed-information-for-a-specified-nomination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Nomination2](#schemanomination2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of nominees for a position within the nomination.

<a id="opIdgetNomineesForNominationPosition"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1/0/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}/{nominationNumber}/{ordinal}`

Returns the list of nominees for a position within the nomination.

<h3 id="returns-the-list-of-nominees-for-a-position-within-the-nomination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|nominationNumber|path|integer|true|The nomination's assigned number. For example, the value can be 389.|
|ordinal|path|integer|true|The ordinal number. For example, the value can be 1|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "nominees": [
    {
      "nomineeCount": 1,
      "ordinal": 1,
      "organization": "Federal Maritime Commission",
      "positionTitle": "Federal Maritime Commissioner",
      "url": "https://api.congress.gov/v3/nomination/118/16/1?format=json"
    }
  ]
}
```

<h3 id="returns-the-list-of-nominees-for-a-position-within-the-nomination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[NominationNominee](#schemanominationnominee)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of actions on a specified nomination.

<a id="opIdgetNominationActions"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1/0/actions?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}/{nominationNumber}/actions`

Returns the list of actions on a specified nomination.

<h3 id="returns-the-list-of-actions-on-a-specified-nomination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|nominationNumber|path|integer|true|The nomination's assigned number. For example, the value can be 389.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "actionCode": "S05120",
      "actionDate": "2022-08-03",
      "committees": [
        {
          "name": "Armed Services Committee",
          "systemCode": "ssas00",
          "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
        }
      ],
      "text": "Received in the Senate and referred to the Committee on Armed Services",
      "type": "IntroReferral"
    }
  ]
}
```

<h3 id="returns-the-list-of-actions-on-a-specified-nomination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[NominationActions](#schemanominationactions)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committees associated with a specified nomination.

<a id="opIdgetNominationCommittees"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1/0/committees?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}/{nominationNumber}/committees`

Returns the list of committees associated with a specified nomination.

<h3 id="returns-the-list-of-committees-associated-with-a-specified-nomination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|nominationNumber|path|integer|true|The nomination's assigned number. For example, the value can be 389.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "committees": [
    {
      "activities": [
        {
          "date": "2019-01-01",
          "name": "Reported By"
        }
      ],
      "chamber": "Senate",
      "name": "Judiciary Committee",
      "systemCode": "ssju00",
      "type": "Standing",
      "url": "https://api.congress.gov/v3/committee/senate/ssju00?format=json"
    }
  ]
}
```

<h3 id="returns-the-list-of-committees-associated-with-a-specified-nomination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[NominationCommittees](#schemanominationcommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of printed hearings associated with a specified nomination.

<a id="opIdgetNominationHearings"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/nomination/1/0/hearings?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /nomination/{congress}/{nominationNumber}/hearings`

Returns the list of printed associated with a specified nomination.

<h3 id="returns-the-list-of-printed-hearings-associated-with-a-specified-nomination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|nominationNumber|path|integer|true|The nomination's assigned number. For example, the value can be 389.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "hearings": [
    {
      "chamber": "Senate",
      "citation": "S.Hrg.118-694",
      "date": "2024-02-28",
      "jacketNumber": 61203,
      "number": 694
    }
  ]
}
```

<h3 id="returns-the-list-of-printed-hearings-associated-with-a-specified-nomination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[NominationHearing2](#schemanominationhearing2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-crsreport">crsreport</h1>

Returns Congressional Research Service (CRS) report data from the API

## Returns a list of Congressional Research Service (CRS) reports

<a id="opIdgetCRSReports"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/crsreport?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crsreport`

Returns a list of Congressional Research Service (CRS) reports

<h3 id="returns-a-list-of-congressional-research-service-crs-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "CRSReports": [
    {
      "contentType": "Reports",
      "id": "R43083",
      "publishDate": "2025-02-05T11:34:25Z",
      "status": "Active",
      "title": "SBA Assistance to Small Business Startups: Client Experiences and Program Impact",
      "updateDate": "2025-02-07T01:36:49Z",
      "url": "https://api.congress.gov/v3/crsreport/R43083",
      "version": 145
    }
  ]
}
```

<h3 id="returns-a-list-of-congressional-research-service-crs-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CrsReport](#schemacrsreport-1)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a specific Congressional Research Service (CRS) report

<a id="opIdgetCRSReportByNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/crsreport/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crsreport/{reportNumber}`

Returns a specific Congressional Research Service (CRS) report

<h3 id="returns-a-specific-congressional-research-service-crs-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportNumber|path|string|true|The number or ID of the report. For example, R47175.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "authors": [
    {
      "author": "Megan S. Lynch"
    }
  ],
  "contentType": "Reports",
  "formats": [
    {
      "format": "PDF",
      "url": "https://www.congress.gov/crs_external_products/R/PDF/R47175/R47175.1.pdf"
    }
  ],
  "id": "R47175",
  "publishDate": "2022-07-11T04:00:00Z",
  "relatedMaterials": [
    {
      "URL": "https://api.congress.gov/v3/law/93/pub/344",
      "congress": 93,
      "number": "93-344",
      "title": "Providing for budget allocations, and for other purposes.",
      "type": "PUB"
    }
  ],
  "status": "Active",
  "summary": "The Congressional Budget Act of 1974 directs Congress to adopt a budget resolution each spring, providing an agreement between the House and Senate on a budget plan for the upcoming fiscal year (and at least four additional years). The annual budget resolution includes certain spending and revenue levels that become enforceable through points of order once both chambers have adopted the resolution.\nCongress does not always adopt a budget resolution, however, and this may complicate the development and consideration of budgetary legislation. Congress has, therefore, developed an alternative legislative tool, typically referred to as a “deeming resolution” because it is deemed to serve in place of an annual budget resolution for the purposes of establishing enforceable budgetary levels. \nOn June 8, 2022, the House of Representatives adopted H.Res. 1151, a deeming resolution for FY2023. H.Res. 1151 provided a committee spending allocation (302(a) allocation) to the House Appropriations Committee ($1.603 trillion). It also directed the chair of the House Budget Committee to subsequently file a statement in the Congressional Record that includes committee spending allocations for all other committees, as well as aggregate spending and revenue levels. (Those levels were filed on June 21, 2022.) H.Res. 1151 specified that the levels filed in the Congressional Record be consistent with the “most recent baseline of the Congressional Budget Office,” meaning that the committee spending allocations (other than for the Appropriations Committee) and the aggregate spending and revenue levels have been set at the levels currently projected under current law. \nIn addition to providing enforceable budgetary levels within the House, H.Res. 1151 grants authority to the chair of the House Budget Committee to “adjust” the budgetary levels provided under the deeming resolution in the future under specified circumstances. In addition, the resolution states that provisions designated as “emergency” shall be effectively exempt from House budgetary rules and specifies that certain accounts may receive advance appropriations for FY2024 and FY2025. \n",
  "title": "Settings Budgetary Levels: The House's FY2023 Deeming Resolution",
  "topics": [
    {
      "topic": "Budget & Appropriations Procedure"
    }
  ],
  "updateDate": "2025-06-20T23:46:23Z",
  "url": "www.congress.gov/crs-report/R47175",
  "version": 1
}
```

<h3 id="returns-a-specific-congressional-research-service-crs-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CrsReportDetail](#schemacrsreportdetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="congressgov-api-treaty">treaty</h1>

Returns treaty data from the API

## Returns a list of treaties sorted by date of last update.

<a id="opIdgetTreaties"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty`

Returns a list of treaties sorted by date of last update.

<h3 id="returns-a-list-of-treaties-sorted-by-date-of-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "treaties": [
    {
      "congressReceived": 89,
      "congressConsidered": 89,
      "number": 3,
      "parts": {},
      "suffix": "",
      "topic": "Dispute Settlement and Arbitration",
      "transmittedDate": "1965-05-17T00:00:00Z",
      "updateDate": "2024-12-11T00:18:16Z",
      "url": "https://api.congress.gov/v3/treaty/89/3?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-treaties-sorted-by-date-of-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Treaty2](#schematreaty2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns a list of treaties for the specified congress, sorted by date of last update.

<a id="opIdgetTreatiesByCongress"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}`

Returns a list of treaties for the specified congress, sorted by date of last update.

<h3 id="returns-a-list-of-treaties-for-the-specified-congress-sorted-by-date-of-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|
|fromDateTime|query|string|false|The starting timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|
|toDateTime|query|string|false|The ending timestamp to filter by update date. Use format: YYYY-MM-DDT00:00:00Z.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "treaties": [
    {
      "congressReceived": 89,
      "congressConsidered": 89,
      "number": 3,
      "parts": {},
      "suffix": "",
      "topic": "Dispute Settlement and Arbitration",
      "transmittedDate": "1965-05-17T00:00:00Z",
      "updateDate": "2024-12-11T00:18:16Z",
      "url": "https://api.congress.gov/v3/treaty/89/3?format=json"
    }
  ]
}
```

<h3 id="returns-a-list-of-treaties-for-the-specified-congress-sorted-by-date-of-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[Treaty2](#schematreaty2)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified treaty.

<a id="opIdgetTreatyByCongressAndNumber"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}/{treatyNumber}`

Returns detailed information for a specified treaty.

<h3 id="returns-detailed-information-for-a-specified-treaty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|treatyNumber|path|integer|true|The treaty's assigned number. For example, the value can be 13.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "treaty": {
    "actions": {
      "count": 3,
      "url": "https://api.congress.gov/v3/treaty/89/7/actions?format=json"
    },
    "congressConsidered": 89,
    "congressReceived": 89,
    "countriesParties": [
      {
        "name": "Belgium"
      }
    ],
    "inForceDate": "",
    "indexTerms": [
      {
        "name": "ENGLISH"
      }
    ],
    "number": 7,
    "oldNumber": "G. 89-1",
    "oldNumberDisplayName": "Ex. G, 89th Congress, 1st Session",
    "parts": {},
    "relatedDocs": [
      {}
    ],
    "resolutionText": "",
    "suffix": "",
    "titles": [
      {
        "title": "PROTOCOL MODIFYING CONVENTION WITH BELGIUM FOR THE AVOIDANCE OF DOUBLE TAXATION",
        "titleType": "Treaty - Short Title"
      }
    ],
    "topic": "Taxation",
    "transmitted": "1965-08-05T00:00:00Z",
    "updateDate": "2022-02-26T16:25:25Z"
  }
}
```

<h3 id="returns-detailed-information-for-a-specified-treaty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[TreatyDetail](#schematreatydetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns detailed information for a specified partitioned treaty.

<a id="opIdgetTreatyPartition"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1/0/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}/{treatyNumber}/{treatySuffix}`

Returns detailed information for a specified partitioned treaty.

<h3 id="returns-detailed-information-for-a-specified-partitioned-treaty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|treatyNumber|path|integer|true|The treaty's assigned number. For example, the value can be 13.|
|treatySuffix|path|string|true|The treaty's partition letter value. For example, the value can be A.|
|format|query|string|false|The data format. Value can be xml or json.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "treaty": {
    "actions": {
      "count": 3,
      "url": "https://api.congress.gov/v3/treaty/89/7/actions?format=json"
    },
    "congressConsidered": 89,
    "congressReceived": 89,
    "countriesParties": [
      {
        "name": "Belgium"
      }
    ],
    "inForceDate": "",
    "indexTerms": [
      {
        "name": "ENGLISH"
      }
    ],
    "number": 7,
    "oldNumber": "G. 89-1",
    "oldNumberDisplayName": "Ex. G, 89th Congress, 1st Session",
    "parts": {},
    "relatedDocs": [
      {}
    ],
    "resolutionText": "",
    "suffix": "",
    "titles": [
      {
        "title": "PROTOCOL MODIFYING CONVENTION WITH BELGIUM FOR THE AVOIDANCE OF DOUBLE TAXATION",
        "titleType": "Treaty - Short Title"
      }
    ],
    "topic": "Taxation",
    "transmitted": "1965-08-05T00:00:00Z",
    "updateDate": "2022-02-26T16:25:25Z"
  }
}
```

<h3 id="returns-detailed-information-for-a-specified-partitioned-treaty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[TreatyDetail](#schematreatydetail)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of actions on a specified treaty.

<a id="opIdgetTreatyActions"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1/0/actions?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}/{treatyNumber}/actions`

Returns the list of actions on a specified treaty.

<h3 id="returns-the-list-of-actions-on-a-specified-treaty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|treatyNumber|path|integer|true|The treaty's assigned number. For example, the value can be 13.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "actionCode": "S05291",
      "actionDate": "2022-08-03",
      "committee": {
        "name": "Armed Services Committee",
        "systemCode": "ssas00",
        "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
      },
      "text": "Resolution of advice and consent to ratification agreed to as amended in Senate by Yea-Nay Vote. 95 - 1. Record Vote Number: 282.",
      "type": "Floor"
    }
  ]
}
```

<h3 id="returns-the-list-of-actions-on-a-specified-treaty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[TreatyActions](#schematreatyactions)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of actions on a specified partitioned treaty.

<a id="opIdgetTreatyPartitionActions"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1/0/string/actions?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}/{treatyNumber}/{treatySuffix}/actions`

Returns the list of actions on a specified partitioned treaty.

<h3 id="returns-the-list-of-actions-on-a-specified-partitioned-treaty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|treatyNumber|path|integer|true|The treaty's assigned number. For example, the value can be 13.|
|treatySuffix|path|string|true|The treaty's partition letter value. For example, the value can be A.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "actionCode": "S05291",
      "actionDate": "2022-08-03",
      "committee": {
        "name": "Armed Services Committee",
        "systemCode": "ssas00",
        "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
      },
      "text": "Resolution of advice and consent to ratification agreed to as amended in Senate by Yea-Nay Vote. 95 - 1. Record Vote Number: 282.",
      "type": "Floor"
    }
  ]
}
```

<h3 id="returns-the-list-of-actions-on-a-specified-partitioned-treaty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[TreatyActions](#schematreatyactions)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Returns the list of committees associated with a specified treaty.

<a id="opIdgetTreatyCommittees"></a>

> Code samples

```bash
curl "https://api.congress.gov/v3/treaty/1/0/committees?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /treaty/{congress}/{treatyNumber}/committees`

Returns the list of committees associated with a specified treaty.

<h3 id="returns-the-list-of-committees-associated-with-a-specified-treaty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|congress|path|integer(int32)|true|The congress number. For example, can be 117.|
|treatyNumber|path|integer|true|The treaty's assigned number. For example, the value can be 13.|
|format|query|string|false|The data format. Value can be xml or json.|
|offset|query|integer|false|The starting record returned. 0 is the first record.|
|limit|query|integer|false|The number of records returned. The maximum limit is 250.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "treatyCommittees": [
    {
      "activities": [
        {
          "date": "1965-10-19T04:00:00Z",
          "name": "Reported By"
        }
      ],
      "chamber": "Senate",
      "name": "Foreign Relations Committee",
      "subcommittees": [
        {
          "activities": [
            {
              "date": "1965-10-19T04:00:00Z",
              "name": "Reported By"
            }
          ],
          "name": "Foreign Relations Committee",
          "systemCode": "ssfr01",
          "url": "https://api.congress.gov/v3/committee/senate/ssfr01?format=json"
        }
      ],
      "systemCode": "ssfr00",
      "type": "Standing",
      "url": "https://api.congress.gov/v3/committee/senate/ssfr00?format=json"
    }
  ]
}
```

<h3 id="returns-the-list-of-committees-associated-with-a-specified-treaty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[TreatyCommittees](#schematreatycommittees)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Bill">Bill</h2>
<!-- backwards compatibility -->
<a id="schemabill"></a>
<a id="schema_Bill"></a>
<a id="tocSbill"></a>
<a id="tocsbill"></a>

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry."
  },
  "number": 3281,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "A bill to repeal certain provisions relating to nutrition.",
  "type": "S",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "http://api.congress.gov/v3/bill/119/s/3281?format=xml"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|latestAction|object|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date)|false|none|none|
|updateDateIncludingText|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_laws">laws</h2>
<!-- backwards compatibility -->
<a id="schemalaws"></a>
<a id="schema_laws"></a>
<a id="tocSlaws"></a>
<a id="tocslaws"></a>

```json
{
  "number": "117-108",
  "type": "Public Law"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Law">Law</h2>
<!-- backwards compatibility -->
<a id="schemalaw"></a>
<a id="schema_Law"></a>
<a id="tocSlaw"></a>
<a id="tocslaw"></a>

```json
{
  "congress": 119,
  "latestAction": {
    "actionDate": "2025-11-21",
    "text": "Became Public Law No: 119-37."
  },
  "laws": [
    {
      "number": "117-108",
      "type": "Public Law"
    }
  ],
  "number": "2808",
  "originChamber": "House",
  "originChamberCode": "H",
  "title": "Homebuyers Privacy Protection Act",
  "type": "HR",
  "updateDate": "2025-11-21",
  "updateDateIncludingText": "2025-11-21",
  "url": "https://api.congress.gov/v3/bill/119/hr/2808?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|latestAction|object|false|none|none|
|laws|[[laws](#schemalaws)]|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date)|false|none|none|
|updateDateIncludingText|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_cboCost">cboCost</h2>
<!-- backwards compatibility -->
<a id="schemacbocost"></a>
<a id="schema_cboCost"></a>
<a id="tocScbocost"></a>
<a id="tocscbocost"></a>

```json
{
  "description": "As ordered reported by the House Committee on Oversight and Accountability on September 20, 2023\n",
  "pubDate": "2023-10-10T19:58:00Z",
  "title": "H.R. 4984, D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act",
  "url": "https://www.cbo.gov/publication/59651"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|pubDate|string(date)|false|none|none|
|title|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_committeeReport">committeeReport</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereport"></a>
<a id="schema_committeeReport"></a>
<a id="tocScommitteereport"></a>
<a id="tocscommitteereport"></a>

```json
{
  "citation": "H. Rept. 118-400",
  "url": "https://api.congress.gov/v3/committee-report/118/HRPT/400?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citation|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_LawNumber">LawNumber</h2>
<!-- backwards compatibility -->
<a id="schemalawnumber"></a>
<a id="schema_LawNumber"></a>
<a id="tocSlawnumber"></a>
<a id="tocslawnumber"></a>

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/actions?format=json"
  },
  "cboCostEstimates": [
    {
      "description": "As ordered reported by the House Committee on Oversight and Accountability on September 20, 2023\n",
      "pubDate": "2023-10-10T19:58:00Z",
      "title": "H.R. 4984, D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act",
      "url": "https://www.cbo.gov/publication/59651"
    }
  ],
  "committeeReports": [
    {
      "citation": "H. Rept. 118-400",
      "url": "https://api.congress.gov/v3/committee-report/118/HRPT/400?format=json"
    }
  ],
  "committees": {
    "count": 1,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/committees?format=json"
  },
  "congress": 118,
  "constitutionalAuthorityStatementText": "<pre>\n[Congressional Record Volume 169, Number 130 (Thursday, July 27, 2023)]\n[House]\n[Pages H4143-H4144]\nFrom the Congressional Record Online through the Government Publishing Office [<a href=\"https://www.gpo.gov\">www.gpo.gov</a>]\nBy Mr. COMER:\nH.R. 4984.\nCongress has the power to enact this legislation pursuant\nto the following:\nArticle I, Section 8, Clause 17 of the U.S. Constitution,\nin that the legislation ``to exercise exclusive Legislation\nin all Cases\n[[Page H4144]]\nwhatsoever, over such District (not exceeding ten Miles\nsquare) as may, by Cession of particular States, and the\nAcceptance of Congress, become the Seat of the Government of\nthe United States, and to exercise like Authority over all\nPlaces purchased by the Consent of the Legislature of the\nState in which the Same shall be, for the Erection of Forts,\nMagazines, Arsenals, dock-Yards, and other needful\nBuildings.''\nThe single subject of this legislation is:\nTo transfer administrative jurisdiction of the District of\nColumbia RFK Memorial Stadium campus from the Secretary of\nthe Interior to the Administrator of General Services and\nauthorize a new lease with D.C. for redevelopment.\n</pre>",
  "cosponsors": {
    "count": 21,
    "url": "https://api.congress.gov/v3/law/118/hr/4984/cosponsors?format=json"
  },
  "introducedDate": "2023-07-27",
  "latestAction": {
    "actionDate": "2025-01-06",
    "text": "Became Public Law No: 118-274."
  },
  "laws": [
    {
      "number": "117-108",
      "type": "Public Law"
    }
  ],
  "number": "4984",
  "originChamber": "House",
  "originChamberCode": "H",
  "policyArea": {
    "name": "Government Operations and Politics"
  },
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ],
  "subjects": {
    "count": 11,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/subjects?format=json"
  },
  "summaries": {
    "count": 5,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/summaries?format=json"
  },
  "textVersions": {
    "count": 6,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/textversions?format=json"
  },
  "title": "D.C. Robert F. Kennedy Memorial Stadium Campus Revitalization Act",
  "titles": {
    "count": 9,
    "url": "https://api.congress.gov/v3/bill/118/hr/4984/titles?format=json"
  },
  "type": "HR",
  "updateDate": "2025-05-27T14:16:54Z",
  "updateDateIncludingText": "2025-05-27T14:16:54Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|cboCostEstimates|[[cboCost](#schemacbocost)]|false|none|none|
|committeeReports|[[committeeReport](#schemacommitteereport)]|false|none|none|
|committees|object|false|none|none|
|congress|integer|false|none|none|
|constitutionalAuthorityStatementText|string|false|none|none|
|cosponsors|object|false|none|none|
|introducedDate|string(date)|false|none|none|
|latestAction|object|false|none|none|
|laws|[[laws](#schemalaws)]|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|policyArea|object|false|none|none|
|sponsors|[[Sponsor](#schemasponsor)]|false|none|none|
|subjects|object|false|none|none|
|summaries|object|false|none|none|
|textVersions|object|false|none|none|
|title|string|false|none|none|
|titles|object|false|none|none|
|type|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|updateDateIncludingText|string(date-time)|false|none|none|

<h2 id="tocS_BillDetail">BillDetail</h2>
<!-- backwards compatibility -->
<a id="schemabilldetail"></a>
<a id="schema_BillDetail"></a>
<a id="tocSbilldetail"></a>
<a id="tocsbilldetail"></a>

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/bill/117/s/1234/actions?format=json"
  },
  "committees": {
    "count": 1,
    "url": "https://api.congress.gov/v3/bill/117/s/1234/committees?format=json"
  },
  "congress": 117,
  "introducedDate": "2019-01-01",
  "latestAction": {
    "actionDate": "2019-01-01",
    "text": "string"
  },
  "legislationUrl": "https://www.congress.gov/bill/117th-congress/senate-bill/1234",
  "number": 1234,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "policyArea": {
    "name": "Health"
  },
  "relatedBills": "https://api.congress.gov/v3/bill/117/s/1234/relatedbills?format=json",
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|committees|object|false|none|none|
|congress|integer|false|none|none|
|introducedDate|string(date)|false|none|none|
|latestAction|object|false|none|none|
|legislationUrl|string(url)|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|policyArea|object|false|none|none|
|relatedBills|string(url)|false|none|none|
|sponsors|[[Sponsor](#schemasponsor)]|false|none|none|

<h2 id="tocS_Sponsor">Sponsor</h2>
<!-- backwards compatibility -->
<a id="schemasponsor"></a>
<a id="schema_Sponsor"></a>
<a id="tocSsponsor"></a>
<a id="tocssponsor"></a>

```json
{
  "bioguideId": "G000555",
  "firstName": "Bill",
  "lastName": "Washington",
  "fullName": "Senator Bill Washington [I-NY]",
  "isByRequest": "N",
  "middleName": "J.",
  "party": "I",
  "state": "VA",
  "url": "https://api.congress.gov/v3/member/G000555?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioguideId|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|fullName|string|false|none|none|
|isByRequest|string|false|none|none|
|middleName|string|false|none|none|
|party|string|false|none|none|
|state|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Actions">Actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_Actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
{
  "actionCode": "36000",
  "actionDate": "2019-01-01",
  "sourceSystem": {
    "code": 1,
    "name": "Library of Congress"
  },
  "text": "Became Public Law No: 117-108.",
  "type": "BecameLaw"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|false|none|none|
|actionDate|string(date)|false|none|none|
|sourceSystem|object|false|none|none|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Amendments">Amendments</h2>
<!-- backwards compatibility -->
<a id="schemaamendments"></a>
<a id="schema_Amendments"></a>
<a id="tocSamendments"></a>
<a id="tocsamendments"></a>

```json
{
  "congress": 117,
  "description": "Pursuant to the provisions of H. Res. 912, the amendment in the nature of a substitute consisting of the text of Rules Committee Print 117-32 is considered as adopted.",
  "latestAction": {
    "actionDate": "2019-01-01",
    "text": "On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. "
  },
  "number": "173",
  "type": "HAMDT",
  "updateDate": "2022-02-18T16:38:41Z",
  "url": "https://api.congress.gov/v3/amendment/117/hamdt/173?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|description|string|false|none|none|
|latestAction|object|false|none|none|
|number|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "date": "2019-01-01",
  "name": "Reported By"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Committee">Committee</h2>
<!-- backwards compatibility -->
<a id="schemacommittee"></a>
<a id="schema_Committee"></a>
<a id="tocScommittee"></a>
<a id="tocscommittee"></a>

```json
{
  "activities": [
    {
      "date": "2019-01-01",
      "name": "Reported By"
    }
  ],
  "chamber": "House",
  "name": "House Committee on the Judiciary",
  "systemCode": "hsgo00",
  "type": "Standing",
  "url": "https://api.congress.gov/v3/committee/house/hsgo00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|none|
|chamber|string|false|none|none|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CoSponsor">CoSponsor</h2>
<!-- backwards compatibility -->
<a id="schemacosponsor"></a>
<a id="schema_CoSponsor"></a>
<a id="tocScosponsor"></a>
<a id="tocscosponsor"></a>

```json
{
  "bioguidId": "F000450",
  "district": 5,
  "firstName": "Virginia",
  "fullName": "Rep. Foxx, Virginia [R-NC-5]",
  "isOriginalCosponsor": true,
  "lastName": "Foxx",
  "party": "R",
  "sponsorshipDate": "2021-05-11",
  "state": "NC",
  "url": "https://api.congress.gov/v3/member/F000450?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioguidId|string|false|none|none|
|district|integer|false|none|none|
|firstName|string|false|none|none|
|fullName|string|false|none|none|
|isOriginalCosponsor|boolean|false|none|none|
|lastName|string|false|none|none|
|party|string|false|none|none|
|sponsorshipDate|string(date)|false|none|none|
|state|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_relationshipDetails">relationshipDetails</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipdetails"></a>
<a id="schema_relationshipDetails"></a>
<a id="tocSrelationshipdetails"></a>
<a id="tocsrelationshipdetails"></a>

```json
{
  "identifiedBy": "CRS",
  "type": "Related Bill"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifiedBy|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_RelatedBills">RelatedBills</h2>
<!-- backwards compatibility -->
<a id="schemarelatedbills"></a>
<a id="schema_RelatedBills"></a>
<a id="tocSrelatedbills"></a>
<a id="tocsrelatedbills"></a>

```json
{
  "congress": 117,
  "lastestAction": {
    "actionDate": "2019-01-01",
    "text": "On agreeing to the Maloney, Carolyn B. amendment (A002) Agreed to by voice vote. "
  },
  "number": 1720,
  "relationshipDetails": [
    {
      "identifiedBy": "CRS",
      "type": "Related Bill"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|lastestAction|object|false|none|none|
|number|integer|false|none|none|
|relationshipDetails|[[relationshipDetails](#schemarelationshipdetails)]|false|none|none|

<h2 id="tocS_legislativeSubjects">legislativeSubjects</h2>
<!-- backwards compatibility -->
<a id="schemalegislativesubjects"></a>
<a id="schema_legislativeSubjects"></a>
<a id="tocSlegislativesubjects"></a>
<a id="tocslegislativesubjects"></a>

```json
{
  "name": "Congressional oversight",
  "updateDate": "2022-02-18T16:38:41Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|updateDate|string(date)|false|none|none|

<h2 id="tocS_policyArea">policyArea</h2>
<!-- backwards compatibility -->
<a id="schemapolicyarea"></a>
<a id="schema_policyArea"></a>
<a id="tocSpolicyarea"></a>
<a id="tocspolicyarea"></a>

```json
{
  "name": "Government Operations and Politics"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_Subjects">Subjects</h2>
<!-- backwards compatibility -->
<a id="schemasubjects"></a>
<a id="schema_Subjects"></a>
<a id="tocSsubjects"></a>
<a id="tocssubjects"></a>

```json
{
  "legislativeSubjects": [
    {
      "name": "Congressional oversight",
      "updateDate": "2022-02-18T16:38:41Z"
    }
  ],
  "policyArea": {
    "name": "Government Operations and Politics"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legislativeSubjects|[[legislativeSubjects](#schemalegislativesubjects)]|false|none|none|
|policyArea|[policyArea](#schemapolicyarea)|false|none|none|

<h2 id="tocS_billSummariesArray">billSummariesArray</h2>
<!-- backwards compatibility -->
<a id="schemabillsummariesarray"></a>
<a id="schema_billSummariesArray"></a>
<a id="tocSbillsummariesarray"></a>
<a id="tocsbillsummariesarray"></a>

```json
{
  "actionDate": "2022-02-18T16:38:41Z",
  "actionDesc": "Passed Senate",
  "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
  "updateDate": "2022-02-18T16:38:41Z",
  "versionCode": "173"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date)|false|none|none|
|actionDesc|string|false|none|none|
|text|string|false|none|none|
|updateDate|string(date)|false|none|none|
|versionCode|string|false|none|none|

<h2 id="tocS_BillSummaries">BillSummaries</h2>
<!-- backwards compatibility -->
<a id="schemabillsummaries"></a>
<a id="schema_BillSummaries"></a>
<a id="tocSbillsummaries"></a>
<a id="tocsbillsummaries"></a>

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h2 id="tocS_formats">formats</h2>
<!-- backwards compatibility -->
<a id="schemaformats"></a>
<a id="schema_formats"></a>
<a id="tocSformats"></a>
<a id="tocsformats"></a>

```json
{
  "type": "Formatted Text",
  "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_textVersions">textVersions</h2>
<!-- backwards compatibility -->
<a id="schematextversions"></a>
<a id="schema_textVersions"></a>
<a id="tocStextversions"></a>
<a id="tocstextversions"></a>

```json
{
  "date": "2022-02-18T16:38:41Z",
  "formats": [
    {
      "type": "Formatted Text",
      "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
    }
  ],
  "type": "Enrolled Bill"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|none|
|formats|[[formats](#schemaformats)]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
[
  {
    "date": "2022-02-18T16:38:41Z",
    "formats": [
      {
        "type": "Formatted Text",
        "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
      }
    ],
    "type": "Enrolled Bill"
  }
]
```

<h2 id="tocS_titlesArray">titlesArray</h2>
<!-- backwards compatibility -->
<a id="schematitlesarray"></a>
<a id="schema_titlesArray"></a>
<a id="tocStitlesarray"></a>
<a id="tocstitlesarray"></a>

```json
{
  "title": "A bill to amend the Health and Human Services Act of 1968 to provide for the establishment of a national health care system.",
  "updateDate": "2022-02-18T16:38:41Z",
  "titleType": "Display Title",
  "titleTypeCode": 45,
  "billTextVersionCode": "RH",
  "billTextVersionName": "Reported in House"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|updateDate|string(date)|false|none|none|
|titleType|string|false|none|none|
|titleTypeCode|integer|false|none|none|
|billTextVersionCode|string|false|none|none|
|billTextVersionName|string|false|none|none|

<h2 id="tocS_Titles">Titles</h2>
<!-- backwards compatibility -->
<a id="schematitles"></a>
<a id="schema_Titles"></a>
<a id="tocStitles"></a>
<a id="tocstitles"></a>

```json
[
  {
    "title": "A bill to amend the Health and Human Services Act of 1968 to provide for the establishment of a national health care system.",
    "updateDate": "2022-02-18T16:38:41Z",
    "titleType": "Display Title",
    "titleTypeCode": 45,
    "billTextVersionCode": "RH",
    "billTextVersionName": "Reported in House"
  }
]
```

<h2 id="tocS_Amendment">Amendment</h2>
<!-- backwards compatibility -->
<a id="schemaamendment"></a>
<a id="schema_Amendment"></a>
<a id="tocSamendment"></a>
<a id="tocsamendment"></a>

```json
{
  "congress": 117,
  "description": "Amendment changes the effective date of the bill to the date of enactment.",
  "latestAction": {
    "actionDate": "2021-08-08",
    "actionTime": "12:00:00",
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
  },
  "number": "2137",
  "purpose": "In the nature of a substitute.",
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z",
  "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|description|string|false|none|none|
|latestAction|object|false|none|none|
|number|string|false|none|none|
|purpose|string|false|none|none|
|type|string(SAMDT)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_amendedBill">amendedBill</h2>
<!-- backwards compatibility -->
<a id="schemaamendedbill"></a>
<a id="schema_amendedBill"></a>
<a id="tocSamendedbill"></a>
<a id="tocsamendedbill"></a>

```json
{
  "congress": 117,
  "number": "5",
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "A concurrent resolution setting forth the congressional budget for the United States Government for fiscal year 2021 and setting forth the appropriate budgetary levels for fiscal years 2022 through 2030.",
  "type": "SCONRES",
  "updateDateIncludingText": "2025-04-07",
  "url": "https://api.congress.gov/v3/bill/117/sconres/5?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|updateDateIncludingText|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_textVersion">textVersion</h2>
<!-- backwards compatibility -->
<a id="schematextversion"></a>
<a id="schema_textVersion"></a>
<a id="tocStextversion"></a>
<a id="tocstextversion"></a>

```json
{
  "count": 1,
  "url": "https://api.congress.gov/v3/amendment/117/samdt/4/text?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_AmendmentNumber">AmendmentNumber</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentnumber"></a>
<a id="schema_AmendmentNumber"></a>
<a id="tocSamendmentnumber"></a>
<a id="tocsamendmentnumber"></a>

```json
{
  "actions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/amendment/117/samdt/4/actions?format=json"
  },
  "amendedBill": {
    "congress": 117,
    "number": "5",
    "originChamber": "Senate",
    "originChamberCode": "S",
    "title": "A concurrent resolution setting forth the congressional budget for the United States Government for fiscal year 2021 and setting forth the appropriate budgetary levels for fiscal years 2022 through 2030.",
    "type": "SCONRES",
    "updateDateIncludingText": "2025-04-07",
    "url": "https://api.congress.gov/v3/bill/117/sconres/5?format=json"
  },
  "chamber": "string",
  "congress": 117,
  "number": "2137",
  "sponsors": [
    {
      "bioguideId": "G000555",
      "firstName": "Bill",
      "lastName": "Washington",
      "fullName": "Senator Bill Washington [I-NY]",
      "isByRequest": "N",
      "middleName": "J.",
      "party": "I",
      "state": "VA",
      "url": "https://api.congress.gov/v3/member/G000555?format=json"
    }
  ],
  "submittedDate": "2021-02-02T05:00:00Z",
  "textVersions": {
    "count": 1,
    "url": "https://api.congress.gov/v3/amendment/117/samdt/4/text?format=json"
  },
  "type": "string",
  "updateDate": "2021-08-08T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|false|none|none|
|amendedBill|[amendedBill](#schemaamendedbill)|false|none|none|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|number|string|false|none|none|
|sponsors|[[Sponsor](#schemasponsor)]|false|none|none|
|submittedDate|string(date-time)|false|none|none|
|textVersions|[textVersion](#schematextversion)|false|none|none|
|type|string(SAMDT)|false|none|none|
|updateDate|string(date-time)|false|none|none|

<h2 id="tocS_recordedVote">recordedVote</h2>
<!-- backwards compatibility -->
<a id="schemarecordedvote"></a>
<a id="schema_recordedVote"></a>
<a id="tocSrecordedvote"></a>
<a id="tocsrecordedvote"></a>

```json
{
  "chamber": "Senate",
  "congress": 117,
  "date": "2021-08-08T12:00:00Z",
  "rollNumber": 312,
  "sessionNumber": 1,
  "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00312.xml"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|date|string(date-time)|false|none|none|
|rollNumber|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_sourceSystem">sourceSystem</h2>
<!-- backwards compatibility -->
<a id="schemasourcesystem"></a>
<a id="schema_sourceSystem"></a>
<a id="tocSsourcesystem"></a>
<a id="tocssourcesystem"></a>

```json
{
  "code": 0,
  "name": "Senate"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_amendmentActions">amendmentActions</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentactions"></a>
<a id="schema_amendmentActions"></a>
<a id="tocSamendmentactions"></a>
<a id="tocsamendmentactions"></a>

```json
{
  "actionDate": "2021-08-08",
  "recordedVotes": [
    {
      "chamber": "Senate",
      "congress": 117,
      "date": "2021-08-08T12:00:00Z",
      "rollNumber": 312,
      "sessionNumber": 1,
      "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00312.xml"
    }
  ],
  "sourceSystem": {
    "code": 0,
    "name": "Senate"
  },
  "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312.",
  "type": "Floor"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date)|false|none|none|
|recordedVotes|[[recordedVote](#schemarecordedvote)]|false|none|none|
|sourceSystem|[sourceSystem](#schemasourcesystem)|false|none|none|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_AmendmentActions2">AmendmentActions2</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentactions2"></a>
<a id="schema_AmendmentActions2"></a>
<a id="tocSamendmentactions2"></a>
<a id="tocsamendmentactions2"></a>

```json
[
  {
    "actionDate": "2021-08-08",
    "recordedVotes": [
      {
        "chamber": "Senate",
        "congress": 117,
        "date": "2021-08-08T12:00:00Z",
        "rollNumber": 312,
        "sessionNumber": 1,
        "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00312.xml"
      }
    ],
    "sourceSystem": {
      "code": 0,
      "name": "Senate"
    },
    "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312.",
    "type": "Floor"
  }
]
```

<h2 id="tocS_AmendmentCosponsors">AmendmentCosponsors</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentcosponsors"></a>
<a id="schema_AmendmentCosponsors"></a>
<a id="tocSamendmentcosponsors"></a>
<a id="tocsamendmentcosponsors"></a>

```json
[
  {
    "bioguidId": "F000450",
    "district": 5,
    "firstName": "Virginia",
    "fullName": "Rep. Foxx, Virginia [R-NC-5]",
    "isOriginalCosponsor": true,
    "lastName": "Foxx",
    "party": "R",
    "sponsorshipDate": "2021-05-11",
    "state": "NC",
    "url": "https://api.congress.gov/v3/member/F000450?format=json"
  }
]
```

<h2 id="tocS_AmendmentAmendments">AmendmentAmendments</h2>
<!-- backwards compatibility -->
<a id="schemaamendmentamendments"></a>
<a id="schema_AmendmentAmendments"></a>
<a id="tocSamendmentamendments"></a>
<a id="tocsamendmentamendments"></a>

```json
[
  {
    "congress": 117,
    "description": "Amendment changes the effective date of the bill to the date of enactment.",
    "latestAction": {
      "actionDate": "2021-08-08",
      "actionTime": "12:00:00",
      "text": "Amendment SA 2137 agreed to in Senate by Yea-Nay Vote. 69 - 28. Record Vote Number: 312."
    },
    "number": "2137",
    "purpose": "In the nature of a substitute.",
    "type": "string",
    "updateDate": "2021-08-08T12:00:00Z",
    "url": "https://api.congress.gov/v3/amendment/117/samdt/2137?format=json"
  }
]
```

<h2 id="tocS_AmendmentText">AmendmentText</h2>
<!-- backwards compatibility -->
<a id="schemaamendmenttext"></a>
<a id="schema_AmendmentText"></a>
<a id="tocSamendmenttext"></a>
<a id="tocsamendmenttext"></a>

```json
[
  {
    "date": "2022-02-18T16:38:41Z",
    "formats": [
      {
        "type": "Formatted Text",
        "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
      }
    ],
    "type": "Enrolled Bill"
  }
]
```

<h2 id="tocS_summaryBill">summaryBill</h2>
<!-- backwards compatibility -->
<a id="schemasummarybill"></a>
<a id="schema_summaryBill"></a>
<a id="tocSsummarybill"></a>
<a id="tocssummarybill"></a>

```json
{
  "congress": 117,
  "number": 1234,
  "originChamber": "Senate",
  "originChamberCode": "S",
  "title": "Pay Our Capitol Police Act",
  "type": "HR",
  "updateDateIncludingText": "2021-08-08",
  "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|number|string|false|none|none|
|originChamber|string|false|none|none|
|originChamberCode|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|updateDateIncludingText|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_summariesArray">summariesArray</h2>
<!-- backwards compatibility -->
<a id="schemasummariesarray"></a>
<a id="schema_summariesArray"></a>
<a id="tocSsummariesarray"></a>
<a id="tocssummariesarray"></a>

```json
{
  "actionDate": "2022-02-18T16:38:41Z",
  "actionDesc": "Passed Senate",
  "bill": {
    "congress": 117,
    "number": 1234,
    "originChamber": "Senate",
    "originChamberCode": "S",
    "title": "Pay Our Capitol Police Act",
    "type": "HR",
    "updateDateIncludingText": "2021-08-08",
    "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
  },
  "currentChamber": "Senate",
  "currentChamberCode": "S",
  "lastSummaryUpdateDate": "2022-02-18T16:38:41Z",
  "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
  "updateDate": "2022-02-18T16:38:41Z",
  "versionCode": "173"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date)|false|none|none|
|actionDesc|string|false|none|none|
|bill|[summaryBill](#schemasummarybill)|false|none|none|
|currentChamber|string|false|none|none|
|currentChamberCode|string|false|none|none|
|lastSummaryUpdateDate|string(date-time)|false|none|none|
|text|string|false|none|none|
|updateDate|string(date)|false|none|none|
|versionCode|string|false|none|none|

<h2 id="tocS_Summaries">Summaries</h2>
<!-- backwards compatibility -->
<a id="schemasummaries"></a>
<a id="schema_Summaries"></a>
<a id="tocSsummaries"></a>
<a id="tocssummaries"></a>

```json
[
  {
    "actionDate": "2022-02-18T16:38:41Z",
    "actionDesc": "Passed Senate",
    "bill": {
      "congress": 117,
      "number": 1234,
      "originChamber": "Senate",
      "originChamberCode": "S",
      "title": "Pay Our Capitol Police Act",
      "type": "HR",
      "updateDateIncludingText": "2021-08-08",
      "url": "https://api.congress.gov/v3/bill/117/hr/1234?format=json"
    },
    "currentChamber": "Senate",
    "currentChamberCode": "S",
    "lastSummaryUpdateDate": "2022-02-18T16:38:41Z",
    "text": "<p><strong>COVID-19 Medical Production Act</strong></p> <p>This bill provides additional funding for FY2021 to acquire medical supplies, vaccines, and other equipment to combat COVID-19 (i.e., coronavirus disease 2019) using authorities under the Defense Production Act of 1950. That act confers on the President a broad set of authorities to influence domestic industry to provide essential materials and goods for the national defense.</p> <p>This funding is available through FY2025. Beginning in FY2023, it may be used to meet public health needs to address any pathogen determined by the President to have the potential to create a public health emergency.</p>",
    "updateDate": "2022-02-18T16:38:41Z",
    "versionCode": "173"
  }
]
```

<h2 id="tocS_Sessions">Sessions</h2>
<!-- backwards compatibility -->
<a id="schemasessions"></a>
<a id="schema_Sessions"></a>
<a id="tocSsessions"></a>
<a id="tocssessions"></a>

```json
{
  "chamber": "House of Representatives",
  "number": 1,
  "startDate": "2019-01-01",
  "endDate": "2020-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|number|integer|false|none|none|
|startDate|string(date)|false|none|none|
|endDate|string(date)|false|none|none|

<h2 id="tocS_Congress">Congress</h2>
<!-- backwards compatibility -->
<a id="schemacongress"></a>
<a id="schema_Congress"></a>
<a id="tocScongress"></a>
<a id="tocscongress"></a>

```json
{
  "endYear": "2022",
  "name": "117th Congress",
  "sessions": [
    {
      "chamber": "House of Representatives",
      "number": 1,
      "startDate": "2019-01-01",
      "endDate": "2020-01-01"
    }
  ],
  "startYear": "2021"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endYear|string|false|none|none|
|name|string|false|none|none|
|sessions|[[Sessions](#schemasessions)]|false|none|none|
|startYear|string|false|none|none|

<h2 id="tocS_Congresses">Congresses</h2>
<!-- backwards compatibility -->
<a id="schemacongresses"></a>
<a id="schema_Congresses"></a>
<a id="tocScongresses"></a>
<a id="tocscongresses"></a>

```json
[
  {
    "endYear": "2022",
    "name": "117th Congress",
    "sessions": [
      {
        "chamber": "House of Representatives",
        "number": 1,
        "startDate": "2019-01-01",
        "endDate": "2020-01-01"
      }
    ],
    "startYear": "2021"
  }
]
```

<h2 id="tocS_memberTerms">memberTerms</h2>
<!-- backwards compatibility -->
<a id="schemamemberterms"></a>
<a id="schema_memberTerms"></a>
<a id="tocSmemberterms"></a>
<a id="tocsmemberterms"></a>

```json
{
  "chamber": "House of Representatives",
  "startYear": 1991
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|startYear|integer|false|none|none|

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
{
  "bioguideId": "N000147",
  "depiction": {
    "attribution": "Congressional Pictorial Directory",
    "imageUrl": "https://www.congress.gov/img/member/116_dg_dc_norton_eleanor_200.jpg"
  },
  "name": "Norton, Eleanor Holmes",
  "partyName": "Democratic",
  "state": "District of Columbia",
  "terms": {
    "item": [
      {
        "chamber": "House of Representatives",
        "startYear": 1991
      }
    ]
  },
  "updateDate": "2025-11-12T08:45:43Z",
  "url": "https://api.congress.gov/v3/member/N000147?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioguideId|string|false|none|none|
|depiction|object|false|none|none|
|name|string|false|none|none|
|partyName|string|false|none|none|
|state|string|false|none|none|
|terms|object|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_leadership">leadership</h2>
<!-- backwards compatibility -->
<a id="schemaleadership"></a>
<a id="schema_leadership"></a>
<a id="tocSleadership"></a>
<a id="tocsleadership"></a>

```json
{
  "congress": 113,
  "type": "President Pro Tempore"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_partyHistory">partyHistory</h2>
<!-- backwards compatibility -->
<a id="schemapartyhistory"></a>
<a id="schema_partyHistory"></a>
<a id="tocSpartyhistory"></a>
<a id="tocspartyhistory"></a>

```json
{
  "partyAbbreviation": "D",
  "partyName": "Democrat",
  "startYear": 1975
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partyAbbreviation|string|false|none|none|
|partyName|string|false|none|none|
|startYear|integer|false|none|none|

<h2 id="tocS_memberDetailTerms">memberDetailTerms</h2>
<!-- backwards compatibility -->
<a id="schemamemberdetailterms"></a>
<a id="schema_memberDetailTerms"></a>
<a id="tocSmemberdetailterms"></a>
<a id="tocsmemberdetailterms"></a>

```json
{
  "chamber": "Senate",
  "congress": 116,
  "endYear": 2021,
  "memberType": "Senator",
  "startYear": 2019,
  "stateCode": "VT",
  "stateName": "Vermont"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|endYear|integer|false|none|none|
|memberType|string|false|none|none|
|startYear|integer|false|none|none|
|stateCode|string|false|none|none|
|stateName|string|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "bioguideId": "L000174",
  "birthYear": "1940",
  "cosponsoredLegislation": {
    "count": 1,
    "url": "https://api.congress.gov/v3/member/L000174/cosponsored-legislation\""
  },
  "depiction": {
    "attribution": "<a href=\"\\&quot;https://www.senate.gov/artandhistory/history/common/generic/Photo_Collection_of_the_Senate_Historical_Office.htm\\&quot;\">Courtesy U.S. Senate Historical Office</a>",
    "imageUrl": "https://www.congress.gov/img/member/l000174_200.jpg"
  },
  "directOrderName": "Patrick J. Leahy",
  "firstName": "Patrick",
  "honorificName": "Mr.",
  "invertedOrderName": "Leahy, Patrick J.",
  "lastname": "Leahy",
  "leadership": [
    {
      "congress": 113,
      "type": "President Pro Tempore"
    }
  ],
  "partyHistory": [
    {
      "partyAbbreviation": "D",
      "partyName": "Democrat",
      "startYear": 1975
    }
  ],
  "sponsoredLegislation": {
    "count": 1768,
    "url": "https://api.congress.gov/v3/member/L000174/sponsored-legislation"
  },
  "state": "Vermont",
  "terms": [
    {
      "chamber": "Senate",
      "congress": 116,
      "endYear": 2021,
      "memberType": "Senator",
      "startYear": 2019,
      "stateCode": "VT",
      "stateName": "Vermont"
    }
  ],
  "updateDate": "2022-11-07T13:42:19Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioguideId|string|false|none|none|
|birthYear|string|false|none|none|
|cosponsoredLegislation|object|false|none|none|
|depiction|object|false|none|none|
|directOrderName|string|false|none|none|
|firstName|string|false|none|none|
|honorificName|string|false|none|none|
|invertedOrderName|string|false|none|none|
|lastname|string|false|none|none|
|leadership|[[leadership](#schemaleadership)]|false|none|none|
|partyHistory|[[partyHistory](#schemapartyhistory)]|false|none|none|
|sponsoredLegislation|object|false|none|none|
|state|string|false|none|none|
|terms|[[memberDetailTerms](#schemamemberdetailterms)]|false|none|none|
|updateDate|string(date-time)|false|none|none|

<h2 id="tocS_latestAction">latestAction</h2>
<!-- backwards compatibility -->
<a id="schemalatestaction"></a>
<a id="schema_latestAction"></a>
<a id="tocSlatestaction"></a>
<a id="tocslatestaction"></a>

```json
{
  "actionDate": "2022-06-16",
  "text": "Read twice and referred to the Committee on the Judiciary."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date)|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_sponsoredLegislation">sponsoredLegislation</h2>
<!-- backwards compatibility -->
<a id="schemasponsoredlegislation"></a>
<a id="schema_sponsoredLegislation"></a>
<a id="tocSsponsoredlegislation"></a>
<a id="tocssponsoredlegislation"></a>

```json
{
  "congress": 117,
  "introducedDate": "2022-06-16",
  "latestAction": {
    "actionDate": "2022-06-16",
    "text": "Read twice and referred to the Committee on the Judiciary."
  },
  "number": "4417",
  "policyArea": {
    "name": "Government Operations and Politics"
  },
  "title": "Patent Trial and Appeal Board Reform Act of 2022",
  "type": "S",
  "url": "https://api.congress.gov/v3/bill/117/s/4417?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|introducedDate|string(date)|false|none|none|
|latestAction|[latestAction](#schemalatestaction)|false|none|none|
|number|string|false|none|none|
|policyArea|[policyArea](#schemapolicyarea)|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_MemberSponsoredLegislation">MemberSponsoredLegislation</h2>
<!-- backwards compatibility -->
<a id="schemamembersponsoredlegislation"></a>
<a id="schema_MemberSponsoredLegislation"></a>
<a id="tocSmembersponsoredlegislation"></a>
<a id="tocsmembersponsoredlegislation"></a>

```json
[
  {
    "congress": 117,
    "introducedDate": "2022-06-16",
    "latestAction": {
      "actionDate": "2022-06-16",
      "text": "Read twice and referred to the Committee on the Judiciary."
    },
    "number": "4417",
    "policyArea": {
      "name": "Government Operations and Politics"
    },
    "title": "Patent Trial and Appeal Board Reform Act of 2022",
    "type": "S",
    "url": "https://api.congress.gov/v3/bill/117/s/4417?format=json"
  }
]
```

<h2 id="tocS_HouseVote">HouseVote</h2>
<!-- backwards compatibility -->
<a id="schemahousevote"></a>
<a id="schema_HouseVote"></a>
<a id="tocShousevote"></a>
<a id="tocshousevote"></a>

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "url": "https://api.congress.gov/v3/house-vote/119/1/17",
  "voteType": "Yea-and-Nay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|identifier|integer|false|none|none|
|legislationNumber|string|false|none|none|
|legislationType|string|false|none|none|
|legislationUrl|string(url)|false|none|none|
|result|string|false|none|none|
|rollCallNumber|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|sourceDataURL|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|voteType|string|false|none|none|

<h2 id="tocS_HouseVoteNumberBase">HouseVoteNumberBase</h2>
<!-- backwards compatibility -->
<a id="schemahousevotenumberbase"></a>
<a id="schema_HouseVoteNumberBase"></a>
<a id="tocShousevotenumberbase"></a>
<a id="tocshousevotenumberbase"></a>

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "voteType": "Yea-and-Nay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|identifier|integer|false|none|none|
|legislationNumber|string|false|none|none|
|legislationType|string|false|none|none|
|legislationUrl|string(url)|false|none|none|
|result|string|false|none|none|
|rollCallNumber|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|sourceDataURL|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|voteType|string|false|none|none|

<h2 id="tocS_party">party</h2>
<!-- backwards compatibility -->
<a id="schemaparty"></a>
<a id="schema_party"></a>
<a id="tocSparty"></a>
<a id="tocsparty"></a>

```json
{
  "name": "Republican",
  "type": "R"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_voteParty">voteParty</h2>
<!-- backwards compatibility -->
<a id="schemavoteparty"></a>
<a id="schema_voteParty"></a>
<a id="tocSvoteparty"></a>
<a id="tocsvoteparty"></a>

```json
{
  "nayTotal": 0,
  "notVotingTotal": 6,
  "presentTotal": 0,
  "voteParty": "R",
  "yeaTotal": 213,
  "party": {
    "name": "Republican",
    "type": "R"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nayTotal|integer|false|none|none|
|notVotingTotal|integer|false|none|none|
|presentTotal|integer|false|none|none|
|voteParty|string|false|none|none|
|yeaTotal|integer|false|none|none|
|party|[party](#schemaparty)|false|none|none|

<h2 id="tocS_houseVoteResults">houseVoteResults</h2>
<!-- backwards compatibility -->
<a id="schemahousevoteresults"></a>
<a id="schema_houseVoteResults"></a>
<a id="tocShousevoteresults"></a>
<a id="tocshousevoteresults"></a>

```json
{
  "bioguideID": "A000055",
  "firstName": "Robert",
  "lastName": "Aderholt",
  "voteCast": "Yea",
  "voteParty": "R",
  "voteState": "AL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioguideID|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|voteCast|string|false|none|none|
|voteParty|string|false|none|none|
|voteState|string|false|none|none|

<h2 id="tocS_HouseVoteNumber">HouseVoteNumber</h2>
<!-- backwards compatibility -->
<a id="schemahousevotenumber"></a>
<a id="schema_HouseVoteNumber"></a>
<a id="tocShousevotenumber"></a>
<a id="tocshousevotenumber"></a>

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "voteType": "Yea-and-Nay",
  "votePartyTotal": [
    {
      "nayTotal": 0,
      "notVotingTotal": 6,
      "presentTotal": 0,
      "voteParty": "R",
      "yeaTotal": 213,
      "party": {
        "name": "Republican",
        "type": "R"
      }
    }
  ],
  "voteQuestion": "On Passage"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|identifier|integer|false|none|none|
|legislationNumber|string|false|none|none|
|legislationType|string|false|none|none|
|legislationUrl|string(url)|false|none|none|
|result|string|false|none|none|
|rollCallNumber|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|sourceDataURL|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|voteType|string|false|none|none|
|votePartyTotal|[[voteParty](#schemavoteparty)]|false|none|none|
|voteQuestion|string|false|none|none|

<h2 id="tocS_HouseVoteMembers">HouseVoteMembers</h2>
<!-- backwards compatibility -->
<a id="schemahousevotemembers"></a>
<a id="schema_HouseVoteMembers"></a>
<a id="tocShousevotemembers"></a>
<a id="tocshousevotemembers"></a>

```json
{
  "congress": 119,
  "identifier": 1191202517,
  "legislationNumber": "30",
  "legislationType": "HR",
  "legislationUrl": "https://congress.gov/bill/119/house-bill/30",
  "result": "Passed",
  "rollCallNumber": 17,
  "sessionNumber": 1,
  "sourceDataURL": "https://clerk.house.gov/evs/2025/roll017.xml",
  "startDate": "2025-01-16T11:00:00-05:00",
  "updateDate": "2025-04-18T08:44:47-04:00",
  "voteType": "Yea-and-Nay",
  "results": [
    {
      "bioguideID": "A000055",
      "firstName": "Robert",
      "lastName": "Aderholt",
      "voteCast": "Yea",
      "voteParty": "R",
      "voteState": "AL"
    }
  ],
  "voteQuestion": "On Passage"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|identifier|integer|false|none|none|
|legislationNumber|string|false|none|none|
|legislationType|string|false|none|none|
|legislationUrl|string(url)|false|none|none|
|result|string|false|none|none|
|rollCallNumber|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|sourceDataURL|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|voteType|string|false|none|none|
|results|[[houseVoteResults](#schemahousevoteresults)]|false|none|none|
|voteQuestion|string|false|none|none|

<h2 id="tocS_subcommittees">subcommittees</h2>
<!-- backwards compatibility -->
<a id="schemasubcommittees"></a>
<a id="schema_subcommittees"></a>
<a id="tocSsubcommittees"></a>
<a id="tocssubcommittees"></a>

```json
{
  "name": "Investigations and Oversight Subcommittee",
  "systemCode": "hspw01",
  "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_parentcommittee">parentcommittee</h2>
<!-- backwards compatibility -->
<a id="schemaparentcommittee"></a>
<a id="schema_parentcommittee"></a>
<a id="tocSparentcommittee"></a>
<a id="tocsparentcommittee"></a>

```json
{
  "name": "Judiciary Committee",
  "systemCode": "hsju00",
  "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Committees">Committees</h2>
<!-- backwards compatibility -->
<a id="schemacommittees"></a>
<a id="schema_Committees"></a>
<a id="tocScommittees"></a>
<a id="tocscommittees"></a>

```json
{
  "chamber": "House",
  "committeeTypeCode": "Standing",
  "updateDate": "2020-02-04T00:07:37Z",
  "name": "Transportation and Infrastructure Committee",
  "parent": {
    "name": "Judiciary Committee",
    "systemCode": "hsju00",
    "url": "https://api.congress.gov/v3/committee/house/hsju00?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "url": "https://api.congress.gov/v3/committee/house/hspw00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|committeeTypeCode|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|name|string|false|none|none|
|parent|[parentcommittee](#schemaparentcommittee)|false|none|none|
|subcommittees|[[subcommittees](#schemasubcommittees)]|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_committeeHistory">committeeHistory</h2>
<!-- backwards compatibility -->
<a id="schemacommitteehistory"></a>
<a id="schema_committeeHistory"></a>
<a id="tocScommitteehistory"></a>
<a id="tocscommitteehistory"></a>

```json
{
  "libraryOfCongressName": "Transportation and Infrastructure",
  "officialName": "Committee on Transportation and Infrastructure",
  "startDate": "1995-01-04T05:00:00Z",
  "updateDate": "2020-02-04T00:07:37Z",
  "endDate": "2020-03-04T05:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|libraryOfCongressName|string|false|none|none|
|officialName|string|false|none|none|
|startDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|endDate|string(date-time)|false|none|none|

<h2 id="tocS_CommitteeDetail">CommitteeDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommitteedetail"></a>
<a id="schema_CommitteeDetail"></a>
<a id="tocScommitteedetail"></a>
<a id="tocscommitteedetail"></a>

```json
{
  "bills": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/bills?format=json"
  },
  "communications": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/house-communication?format=json"
  },
  "history": [
    {
      "libraryOfCongressName": "Transportation and Infrastructure",
      "officialName": "Committee on Transportation and Infrastructure",
      "startDate": "1995-01-04T05:00:00Z",
      "updateDate": "2020-02-04T00:07:37Z",
      "endDate": "2020-03-04T05:00:00Z"
    }
  ],
  "isCurrent": true,
  "reports": {
    "count": 25384,
    "url": "https://api.congress.gov/v3/committee/house/hspw00/reports?format=json"
  },
  "subcommittees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "systemCode": "hspw00",
  "type": "Standing",
  "updateDate": "2020-02-04T00:07:37Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bills|object|false|none|none|
|communications|object|false|none|none|
|history|[[committeeHistory](#schemacommitteehistory)]|false|none|none|
|isCurrent|boolean|false|none|none|
|reports|object|false|none|none|
|subcommittees|[[subcommittees](#schemasubcommittees)]|false|none|none|
|systemCode|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date-time)|false|none|none|

<h2 id="tocS_committeeBill">committeeBill</h2>
<!-- backwards compatibility -->
<a id="schemacommitteebill"></a>
<a id="schema_committeeBill"></a>
<a id="tocScommitteebill"></a>
<a id="tocscommitteebill"></a>

```json
{
  "actionDate": "2022-02-18T16:38:41Z",
  "congress": 117,
  "number": "117",
  "relationshipType": "Referred to",
  "type": "HCONRES",
  "updateDate": "2022-02-18T16:38:41Z",
  "url": "https://api.congress.gov/v3/bill/112/hconres/117?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date-time)|false|none|none|
|congress|integer|false|none|none|
|number|string|false|none|none|
|relationshipType|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_committeeReports">committeeReports</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereports"></a>
<a id="schema_committeeReports"></a>
<a id="tocScommitteereports"></a>
<a id="tocscommitteereports"></a>

```json
{
  "chamber": "House",
  "citation": "H. Rept. 109-570",
  "congress": 117,
  "number": 570,
  "part": 1,
  "type": "HRPT",
  "updateDate": "2022-02-18T16:38:41Z",
  "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|citation|string|false|none|none|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|part|integer|false|none|none|
|type|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeBills">CommitteeBills</h2>
<!-- backwards compatibility -->
<a id="schemacommitteebills"></a>
<a id="schema_CommitteeBills"></a>
<a id="tocScommitteebills"></a>
<a id="tocscommitteebills"></a>

```json
{
  "bills": [
    {
      "actionDate": "2022-02-18T16:38:41Z",
      "congress": 117,
      "number": "117",
      "relationshipType": "Referred to",
      "type": "HCONRES",
      "updateDate": "2022-02-18T16:38:41Z",
      "url": "https://api.congress.gov/v3/bill/112/hconres/117?format=json"
    }
  ],
  "count": 27251,
  "url": "https://api.congress.gov/v3/committee/house/hspw00/bills?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bills|[[committeeBill](#schemacommitteebill)]|false|none|none|
|count|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeReports2">CommitteeReports2</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereports2"></a>
<a id="schema_CommitteeReports2"></a>
<a id="tocScommitteereports2"></a>
<a id="tocscommitteereports2"></a>

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json"
  }
]
```

<h2 id="tocS_associatedBill">associatedBill</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedbill"></a>
<a id="schema_associatedBill"></a>
<a id="tocSassociatedbill"></a>
<a id="tocsassociatedbill"></a>

```json
{
  "congress": 116,
  "number": "6395",
  "type": "HR",
  "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|number|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_associatedNomination">associatedNomination</h2>
<!-- backwards compatibility -->
<a id="schemaassociatednomination"></a>
<a id="schema_associatedNomination"></a>
<a id="tocSassociatednomination"></a>
<a id="tocsassociatednomination"></a>

```json
{
  "congress": 116,
  "number": 614,
  "part": "00",
  "url": "https://api.congress.gov/v3/nomination/116/614?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|part|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_associatedTreaty">associatedTreaty</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedtreaty"></a>
<a id="schema_associatedTreaty"></a>
<a id="tocSassociatedtreaty"></a>
<a id="tocsassociatedtreaty"></a>

```json
{
  "congress": 112,
  "number": 8,
  "url": "https://api.congress.gov/v3/treaty/112/8?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_associatedHearingTranscript">associatedHearingTranscript</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedhearingtranscript"></a>
<a id="schema_associatedHearingTranscript"></a>
<a id="tocSassociatedhearingtranscript"></a>
<a id="tocsassociatedhearingtranscript"></a>

```json
{
  "jacketNumber": 52640,
  "url": "https://api.congress.gov/v3/hearing/118/house/52640?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jacketNumber|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeReportsNumber">CommitteeReportsNumber</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereportsnumber"></a>
<a id="schema_CommitteeReportsNumber"></a>
<a id="tocScommitteereportsnumber"></a>
<a id="tocscommitteereportsnumber"></a>

```json
[
  {
    "chamber": "House",
    "citation": "H. Rept. 109-570",
    "congress": 117,
    "number": 570,
    "part": 1,
    "type": "HRPT",
    "updateDate": "2022-02-18T16:38:41Z",
    "url": "https://api.congress.gov/v3/bill/117hr570?format=json",
    "associatedBill": [
      {
        "congress": 116,
        "number": "6395",
        "type": "HR",
        "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
      }
    ],
    "isConferenceReport": true,
    "issueDate": "2020-12-03T05:00:00Z",
    "reportType": "H.Rept.",
    "sessionNumber": 2,
    "text": {
      "count": 2,
      "url": "https://api.congress.gov/v3/committee-report/116/hrpt/617/text?format=json"
    },
    "title": "WILLIAM M. (MAC) THORNBERRY NATIONAL DEFENSE AUTHORIZATION ACT FOR FISCAL YEAR 2021"
  }
]
```

<h2 id="tocS_committeereportsformats">committeereportsformats</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereportsformats"></a>
<a id="schema_committeereportsformats"></a>
<a id="tocScommitteereportsformats"></a>
<a id="tocscommitteereportsformats"></a>

```json
{
  "isErrata": "N",
  "type": "Formatted Text",
  "url": "https://www.congress.gov/116/crpt/hrpt617/generated/CRPT-116hrpt617.htm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isErrata|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeReportsText">CommitteeReportsText</h2>
<!-- backwards compatibility -->
<a id="schemacommitteereportstext"></a>
<a id="schema_CommitteeReportsText"></a>
<a id="tocScommitteereportstext"></a>
<a id="tocscommitteereportstext"></a>

```json
[
  {
    "isErrata": "N",
    "type": "Formatted Text",
    "url": "https://www.congress.gov/116/crpt/hrpt617/generated/CRPT-116hrpt617.htm"
  }
]
```

<h2 id="tocS_nominationType">nominationType</h2>
<!-- backwards compatibility -->
<a id="schemanominationtype"></a>
<a id="schema_nominationType"></a>
<a id="tocSnominationtype"></a>
<a id="tocsnominationtype"></a>

```json
{
  "isCivilian": false,
  "isMilitary": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isCivilian|boolean|false|none|none|
|isMilitary|boolean|false|none|none|

<h2 id="tocS_committeeNominations">committeeNominations</h2>
<!-- backwards compatibility -->
<a id="schemacommitteenominations"></a>
<a id="schema_committeeNominations"></a>
<a id="tocScommitteenominations"></a>
<a id="tocscommitteenominations"></a>

```json
{
  "citation": "PN2477",
  "congress": 117,
  "description": "Nomination of xyz for the 117th Congress",
  "latestAction": {
    "actionDate": "2022-06-16",
    "text": "Read twice and referred to the Committee on the Judiciary."
  },
  "nominationType": {
    "isCivilian": false,
    "isMilitary": true
  },
  "number": 2477,
  "partNumber": "00",
  "receivedDate": "2022-08-03",
  "updateDate": "2022-09-30T04:40:14Z",
  "url": "https://api.congress.gov/v3/nomination/117/2477?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citation|string|false|none|none|
|congress|integer|false|none|none|
|description|string|false|none|none|
|latestAction|[latestAction](#schemalatestaction)|false|none|none|
|nominationType|[nominationType](#schemanominationtype)|false|none|none|
|number|integer|false|none|none|
|partNumber|string|false|none|none|
|receivedDate|string(date)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeNominations2">CommitteeNominations2</h2>
<!-- backwards compatibility -->
<a id="schemacommitteenominations2"></a>
<a id="schema_CommitteeNominations2"></a>
<a id="tocScommitteenominations2"></a>
<a id="tocscommitteenominations2"></a>

```json
[
  {
    "citation": "PN2477",
    "congress": 117,
    "description": "Nomination of xyz for the 117th Congress",
    "latestAction": {
      "actionDate": "2022-06-16",
      "text": "Read twice and referred to the Committee on the Judiciary."
    },
    "nominationType": {
      "isCivilian": false,
      "isMilitary": true
    },
    "number": 2477,
    "partNumber": "00",
    "receivedDate": "2022-08-03",
    "updateDate": "2022-09-30T04:40:14Z",
    "url": "https://api.congress.gov/v3/nomination/117/2477?format=json"
  }
]
```

<h2 id="tocS_CommitteeCommunication">CommitteeCommunication</h2>
<!-- backwards compatibility -->
<a id="schemacommitteecommunication"></a>
<a id="schema_CommitteeCommunication"></a>
<a id="tocScommitteecommunication"></a>
<a id="tocscommitteecommunication"></a>

```json
{
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 114,
  "number": 3262,
  "referralDate": "2015-10-27",
  "updateDate": "2018-02-02"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationType|object|false|none|none|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|referralDate|string(date)|false|none|none|
|updateDate|string(date)|false|none|none|

<h2 id="tocS_CommitteeHouseCommunication">CommitteeHouseCommunication</h2>
<!-- backwards compatibility -->
<a id="schemacommitteehousecommunication"></a>
<a id="schema_CommitteeHouseCommunication"></a>
<a id="tocScommitteehousecommunication"></a>
<a id="tocscommitteehousecommunication"></a>

```json
{
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 114,
  "number": 3262,
  "referralDate": "2015-10-27",
  "updateDate": "2018-02-02",
  "chamber": "House",
  "url": "https://api.congress.gov/v3/house-communication/114/ec/3262?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationType|object|false|none|none|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|referralDate|string(date)|false|none|none|
|updateDate|string(date)|false|none|none|
|chamber|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeSenateCommunication">CommitteeSenateCommunication</h2>
<!-- backwards compatibility -->
<a id="schemacommitteesenatecommunication"></a>
<a id="schema_CommitteeSenateCommunication"></a>
<a id="tocScommitteesenatecommunication"></a>
<a id="tocscommitteesenatecommunication"></a>

```json
{
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 114,
  "number": 3262,
  "referralDate": "2015-10-27",
  "updateDate": "2018-02-02",
  "chamber": "Senate",
  "url": "https://api.congress.gov/v3/senate-communication/114/ec/7402?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationType|object|false|none|none|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|referralDate|string(date)|false|none|none|
|updateDate|string(date)|false|none|none|
|chamber|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_committeePrints">committeePrints</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprints"></a>
<a id="schema_committeePrints"></a>
<a id="tocScommitteeprints"></a>
<a id="tocscommitteeprints"></a>

```json
{
  "chamber": "House",
  "congress": 117,
  "jacketNumber": 48144,
  "updateDate": "2022-08-01T21:19:33Z",
  "url": "https://api.congress.gov/v3/committee-print/117/house/48144?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|jacketNumber|integer|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_committeePrintCommittees">committeePrintCommittees</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprintcommittees"></a>
<a id="schema_committeePrintCommittees"></a>
<a id="tocScommitteeprintcommittees"></a>
<a id="tocscommitteeprintcommittees"></a>

```json
{
  "name": "Rules Committee",
  "systemCode": "hsru00",
  "url": "https://api.congress.gov/v3/committee/house/hsru00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteePrint">CommitteePrint</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprint"></a>
<a id="schema_CommitteePrint"></a>
<a id="tocScommitteeprint"></a>
<a id="tocscommitteeprint"></a>

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144?format=json"
  }
]
```

<h2 id="tocS_CommitteePrintDetail">CommitteePrintDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprintdetail"></a>
<a id="schema_CommitteePrintDetail"></a>
<a id="tocScommitteeprintdetail"></a>
<a id="tocscommitteeprintdetail"></a>

```json
{
  "associatedBills": [
    {
      "congress": 116,
      "number": "6395",
      "type": "HR",
      "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
    }
  ],
  "chamber": "House",
  "citation": "117-62",
  "committees": [
    {
      "name": "Rules Committee",
      "systemCode": "hsru00",
      "url": "https://api.congress.gov/v3/committee/house/hsru00?format=json"
    }
  ],
  "congress": 117,
  "jacketNumber": 48144,
  "text": {
    "count": 4,
    "url": "https://api.congress.gov/v3/committee-print/117/house/48144/text?format=json"
  },
  "number": "62",
  "title": "RULES COMMITTEE PRINT 117-62 TEXT OF H.R. 5768, VIOLENT INCIDENT CLEAR- ANCE AND TECHNOLOGICAL INVESTIGATIVE METHODS ACT OF 2022",
  "updateDate": "2022-08-01T21:19:33Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedBills|[[associatedBill](#schemaassociatedbill)]|false|none|none|
|chamber|string|false|none|none|
|citation|string|false|none|none|
|committees|[[committeePrintCommittees](#schemacommitteeprintcommittees)]|false|none|none|
|congress|integer|false|none|none|
|jacketNumber|integer|false|none|none|
|text|object|false|none|none|
|number|string|false|none|none|
|title|string|false|none|none|
|updateDate|string(date-time)|false|none|none|

<h2 id="tocS_committeePrintText">committeePrintText</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprinttext"></a>
<a id="schema_committeePrintText"></a>
<a id="tocScommitteeprinttext"></a>
<a id="tocscommitteeprinttext"></a>

```json
{
  "type": "Formatted Text",
  "url": "https://www.congress.gov/117/cprt/HPRT48144/CPRT-117HPRT48144.htm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteePrintDetailText">CommitteePrintDetailText</h2>
<!-- backwards compatibility -->
<a id="schemacommitteeprintdetailtext"></a>
<a id="schema_CommitteePrintDetailText"></a>
<a id="tocScommitteeprintdetailtext"></a>
<a id="tocscommitteeprintdetailtext"></a>

```json
[
  {
    "type": "Formatted Text",
    "url": "https://www.congress.gov/117/cprt/HPRT48144/CPRT-117HPRT48144.htm"
  }
]
```

<h2 id="tocS_committeeMeetings">committeeMeetings</h2>
<!-- backwards compatibility -->
<a id="schemacommitteemeetings"></a>
<a id="schema_committeeMeetings"></a>
<a id="tocScommitteemeetings"></a>
<a id="tocscommitteemeetings"></a>

```json
{
  "chamber": "House",
  "congress": 117,
  "eventid": "115522",
  "updateDate": "2022-08-01T21:19:33Z",
  "url": "https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|eventid|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_CommitteeMeeting">CommitteeMeeting</h2>
<!-- backwards compatibility -->
<a id="schemacommitteemeeting"></a>
<a id="schema_CommitteeMeeting"></a>
<a id="tocScommitteemeeting"></a>
<a id="tocscommitteemeeting"></a>

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "eventid": "115522",
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/committee-meeting/118/house/115522?format=json"
  }
]
```

<h2 id="tocS_meetingdocument">meetingdocument</h2>
<!-- backwards compatibility -->
<a id="schemameetingdocument"></a>
<a id="schema_meetingdocument"></a>
<a id="tocSmeetingdocument"></a>
<a id="tocsmeetingdocument"></a>

```json
{
  "description": "",
  "documentType": "Support Document ",
  "format": "PDF",
  "name": "Hearing Notice",
  "url": "https://www.congress.gov/118/meeting/house/115538/documents/HHRG-118-II24-20230324-SD001.pdf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|documentType|string|false|none|none|
|format|string|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_relatedItem">relatedItem</h2>
<!-- backwards compatibility -->
<a id="schemarelateditem"></a>
<a id="schema_relatedItem"></a>
<a id="tocSrelateditem"></a>
<a id="tocsrelateditem"></a>

```json
{
  "bills": [
    {
      "congress": 116,
      "number": "6395",
      "type": "HR",
      "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
    }
  ],
  "nominations": [
    {
      "congress": 116,
      "number": 614,
      "part": "00",
      "url": "https://api.congress.gov/v3/nomination/116/614?format=json"
    }
  ],
  "treaties": [
    {
      "congress": 112,
      "number": 8,
      "url": "https://api.congress.gov/v3/treaty/112/8?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bills|[[associatedBill](#schemaassociatedbill)]|false|none|none|
|nominations|[[associatedNomination](#schemaassociatednomination)]|false|none|none|
|treaties|[[associatedTreaty](#schemaassociatedtreaty)]|false|none|none|

<h2 id="tocS_video">video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "name": "Legislative Hearing on H.R. 1246 and H.R. 1532 | Indian and Insular Affairs Subcommittee",
  "url": "https://www.congress.gov/event/118th-Congress/house-event/115538"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_witnessDocument">witnessDocument</h2>
<!-- backwards compatibility -->
<a id="schemawitnessdocument"></a>
<a id="schema_witnessDocument"></a>
<a id="tocSwitnessdocument"></a>
<a id="tocswitnessdocument"></a>

```json
{
  "documentType": "Witness Statement",
  "format": "PDF",
  "url": "https://www.congress.gov/118/meeting/house/115538/witnesses/HHRG-118-II24-Wstate-NewlandB-20230324.pdf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentType|string|false|none|none|
|format|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_witness">witness</h2>
<!-- backwards compatibility -->
<a id="schemawitness"></a>
<a id="schema_witness"></a>
<a id="tocSwitness"></a>
<a id="tocswitness"></a>

```json
{
  "name": "The Honorable John Williams",
  "organization": "United Auburn Rancheria",
  "position": "Vice Chairman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|organization|string|false|none|none|
|position|string|false|none|none|

<h2 id="tocS_CommitteeMeetingDetail">CommitteeMeetingDetail</h2>
<!-- backwards compatibility -->
<a id="schemacommitteemeetingdetail"></a>
<a id="schema_CommitteeMeetingDetail"></a>
<a id="tocScommitteemeetingdetail"></a>
<a id="tocscommitteemeetingdetail"></a>

```json
{
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "congress": 117,
  "date": "2022-08-01T04:44:57Z",
  "eventid": "115538",
  "hearingTranscript": [
    {
      "jacketNumber": 52640,
      "url": "https://api.congress.gov/v3/hearing/118/house/52640?format=json"
    }
  ],
  "location": {
    "building": "Longworth House Office Building",
    "room": "1234"
  },
  "meetingDocuments": [
    {
      "description": "",
      "documentType": "Support Document ",
      "format": "PDF",
      "name": "Hearing Notice",
      "url": "https://www.congress.gov/118/meeting/house/115538/documents/HHRG-118-II24-20230324-SD001.pdf"
    }
  ],
  "meetingStatus": "Scheduled",
  "relatedItems": [
    {
      "bills": [
        {
          "congress": 116,
          "number": "6395",
          "type": "HR",
          "url": "https://api.congress.gov/v3/bill/116/hr/6395?format=json"
        }
      ],
      "nominations": [
        {
          "congress": 116,
          "number": 614,
          "part": "00",
          "url": "https://api.congress.gov/v3/nomination/116/614?format=json"
        }
      ],
      "treaties": [
        {
          "congress": 112,
          "number": 8,
          "url": "https://api.congress.gov/v3/treaty/112/8?format=json"
        }
      ]
    }
  ],
  "title": "Legislative hearing on: •\tH.R. 1246 (Rep. Hageman), To authorize leases of up to 99 years for land held in trust for federally recognized Indian tribes; and\r\n•\tH.R. 1532 (Rep. Hageman), To authorize any Indian Tribe to lease, sell, convey, warrant, or otherwise transfer real property to which that Indian Tribe holds fee title without the consent of the Federal Government, and for other purposes.",
  "type": "Hearing",
  "updateDate": "2022-08-01T04:44:57Z",
  "videos": [
    {
      "name": "Legislative Hearing on H.R. 1246 and H.R. 1532 | Indian and Insular Affairs Subcommittee",
      "url": "https://www.congress.gov/event/118th-Congress/house-event/115538"
    }
  ],
  "witnessDocuments": [
    {
      "documentType": "Witness Statement",
      "format": "PDF",
      "url": "https://www.congress.gov/118/meeting/house/115538/witnesses/HHRG-118-II24-Wstate-NewlandB-20230324.pdf"
    }
  ],
  "witnesses": [
    {
      "name": "The Honorable John Williams",
      "organization": "United Auburn Rancheria",
      "position": "Vice Chairman"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|committees|[[subcommittees](#schemasubcommittees)]|false|none|none|
|congress|integer|false|none|none|
|date|string(date-time)|false|none|none|
|eventid|string|false|none|none|
|hearingTranscript|[[associatedHearingTranscript](#schemaassociatedhearingtranscript)]|false|none|none|
|location|object|false|none|none|
|meetingDocuments|[[meetingdocument](#schemameetingdocument)]|false|none|none|
|meetingStatus|string|false|none|none|
|relatedItems|[[relatedItem](#schemarelateditem)]|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|videos|[[video](#schemavideo)]|false|none|none|
|witnessDocuments|[[witnessDocument](#schemawitnessdocument)]|false|none|none|
|witnesses|[[witness](#schemawitness)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|meetingStatus|Canceled|
|meetingStatus|Draft|
|meetingStatus|Postponed|
|meetingStatus|Rescheduled|
|meetingStatus|Scheduled|

<h2 id="tocS_hearing">hearing</h2>
<!-- backwards compatibility -->
<a id="schemahearing"></a>
<a id="schema_hearing"></a>
<a id="tocShearing"></a>
<a id="tocshearing"></a>

```json
{
  "chamber": "House",
  "congress": 117,
  "jacketNumber": 48144,
  "updateDate": "2022-08-01T21:19:33Z",
  "url": "https://api.congress.gov/v3/hearing/117/house/41365?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|congress|integer|false|none|none|
|jacketNumber|integer|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Hearings">Hearings</h2>
<!-- backwards compatibility -->
<a id="schemahearings"></a>
<a id="schema_Hearings"></a>
<a id="tocShearings"></a>
<a id="tocshearings"></a>

```json
[
  {
    "chamber": "House",
    "congress": 117,
    "jacketNumber": 48144,
    "updateDate": "2022-08-01T21:19:33Z",
    "url": "https://api.congress.gov/v3/hearing/117/house/41365?format=json"
  }
]
```

<h2 id="tocS_associatedMeeting">associatedMeeting</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedmeeting"></a>
<a id="schema_associatedMeeting"></a>
<a id="tocSassociatedmeeting"></a>
<a id="tocsassociatedmeeting"></a>

```json
{
  "eventId": "115266",
  "url": "https://api.congress.gov/v3/committee-meeting/117/house/115266?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_HearingDetail">HearingDetail</h2>
<!-- backwards compatibility -->
<a id="schemahearingdetail"></a>
<a id="schema_HearingDetail"></a>
<a id="tocShearingdetail"></a>
<a id="tocshearingdetail"></a>

```json
{
  "associatedMeeting": {
    "eventId": "115266",
    "url": "https://api.congress.gov/v3/committee-meeting/117/house/115266?format=json"
  },
  "chamber": "House",
  "citation": "H.Hrg.118",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json"
    }
  ],
  "congress": 118,
  "dates": [
    "2022-08-01"
  ],
  "formats": [
    {
      "type": "Formatted Text",
      "url": "https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076enr.htm"
    }
  ],
  "jacketNumber": 50896,
  "libraryOfCongressidentifier": "LC70380",
  "title": "FEDERAL PANDEMIC SPENDING: A PRESCRIPTION FOR WASTE, FRAUD AND ABUSE",
  "updateDate": "2025-11-04T03:21:12Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedMeeting|[associatedMeeting](#schemaassociatedmeeting)|false|none|none|
|chamber|string|false|none|none|
|citation|string|false|none|none|
|committees|[[subcommittees](#schemasubcommittees)]|false|none|none|
|congress|integer|false|none|none|
|dates|[string(date)]|false|none|none|
|formats|[[formats](#schemaformats)]|false|none|none|
|jacketNumber|integer|false|none|none|
|libraryOfCongressidentifier|string|false|none|none|
|title|string|false|none|none|
|updateDate|string(date-time)|false|none|none|

<h2 id="tocS_issues">issues</h2>
<!-- backwards compatibility -->
<a id="schemaissues"></a>
<a id="schema_issues"></a>
<a id="tocSissues"></a>
<a id="tocsissues"></a>

```json
{
  "Congress": "117",
  "Id": 26958,
  "Issue": "109",
  "Links": {
    "Digest": {
      "Label": "Daily Digest",
      "Ordinal": 1,
      "PDF": [
        {
          "Part": "1",
          "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-dailydigest.pdf"
        }
      ]
    },
    "FullRecord": {
      "Label": "Entire Issue",
      "Ordinal": 5,
      "PDF": [
        {
          "Part": "1",
          "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28.pdf"
        }
      ]
    },
    "House": {
      "Label": "House Section",
      "Ordinal": 3,
      "PDF": [
        {
          "Part": "1",
          "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-house.pdf"
        }
      ]
    },
    "Remarks": {
      "Label": "Extensions of Remarks Section",
      "Ordinal": 4,
      "PDF": [
        {
          "Part": "1",
          "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-extensions.pdf"
        }
      ]
    },
    "Senate": {
      "Label": "Senate Section",
      "Ordinal": 2,
      "PDF": [
        {
          "Part": "1",
          "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-senate.pdf"
        }
      ]
    }
  },
  "PublishDate": "2022-02-18",
  "Session": "2",
  "Volume": "168"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Congress|string|false|none|none|
|Id|integer|false|none|none|
|Issue|string|false|none|none|
|Links|object|false|none|none|
|PublishDate|string(date)|false|none|none|
|Session|string|false|none|none|
|Volume|string|false|none|none|

<h2 id="tocS_CongressionalRecord">CongressionalRecord</h2>
<!-- backwards compatibility -->
<a id="schemacongressionalrecord"></a>
<a id="schema_CongressionalRecord"></a>
<a id="tocScongressionalrecord"></a>
<a id="tocscongressionalrecord"></a>

```json
{
  "IndexStart": 1,
  "Issues": [
    {
      "Congress": "117",
      "Id": 26958,
      "Issue": "109",
      "Links": {
        "Digest": {
          "Label": "Daily Digest",
          "Ordinal": 1,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-dailydigest.pdf"
            }
          ]
        },
        "FullRecord": {
          "Label": "Entire Issue",
          "Ordinal": 5,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28.pdf"
            }
          ]
        },
        "House": {
          "Label": "House Section",
          "Ordinal": 3,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-house.pdf"
            }
          ]
        },
        "Remarks": {
          "Label": "Extensions of Remarks Section",
          "Ordinal": 4,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-extensions.pdf"
            }
          ]
        },
        "Senate": {
          "Label": "Senate Section",
          "Ordinal": 2,
          "PDF": [
            {
              "Part": "1",
              "Url": "https://www.congress.gov/117/crec/2022/06/28/168/109/CREC-2022-06-28-senate.pdf"
            }
          ]
        }
      },
      "PublishDate": "2022-02-18",
      "Session": "2",
      "Volume": "168"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexStart|integer|false|none|none|
|Issues|[[issues](#schemaissues)]|false|none|none|

<h2 id="tocS_dailyCongressionalRecord">dailyCongressionalRecord</h2>
<!-- backwards compatibility -->
<a id="schemadailycongressionalrecord"></a>
<a id="schema_dailyCongressionalRecord"></a>
<a id="tocSdailycongressionalrecord"></a>
<a id="tocsdailycongressionalrecord"></a>

```json
{
  "congress": "118",
  "issueDate": "2023-07-11T04:00:00Z",
  "issueNumber": "118",
  "sessionNumber": "1",
  "updateDate": "2023-07-12T11:30:30Z",
  "url": "https://api.congress.gov/v3/daily-congressional-record/169/118?format=json",
  "volumeNumber": "169"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|string|false|none|none|
|issueDate|string(date-time)|false|none|none|
|issueNumber|string|false|none|none|
|sessionNumber|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|volumeNumber|string|false|none|none|

<h2 id="tocS_DailyCongressionalRecord2">DailyCongressionalRecord2</h2>
<!-- backwards compatibility -->
<a id="schemadailycongressionalrecord2"></a>
<a id="schema_DailyCongressionalRecord2"></a>
<a id="tocSdailycongressionalrecord2"></a>
<a id="tocsdailycongressionalrecord2"></a>

```json
[
  {
    "congress": "118",
    "issueDate": "2023-07-11T04:00:00Z",
    "issueNumber": "118",
    "sessionNumber": "1",
    "updateDate": "2023-07-12T11:30:30Z",
    "url": "https://api.congress.gov/v3/daily-congressional-record/169/118?format=json",
    "volumeNumber": "169"
  }
]
```

<h2 id="tocS_fullIssue">fullIssue</h2>
<!-- backwards compatibility -->
<a id="schemafullissue"></a>
<a id="schema_fullIssue"></a>
<a id="tocSfullissue"></a>
<a id="tocsfullissue"></a>

```json
{
  "articles": {
    "count": 315,
    "url": "https://api.congress.gov/v3/daily-congressional-record/171/1/articles?format=json"
  },
  "entireIssue": [
    {
      "part": "1",
      "type": "PDF",
      "url": "https://www.congress.gov/119/crec/2025/01/03/171/1/CREC-2025-01-03-v171.pdf"
    }
  ],
  "sections": [
    {
      "endPage": "D12",
      "name": "Daily Digest",
      "startPage": "D1",
      "text": [
        {
          "type": "Formatted Text",
          "url": "https://www.congress.gov/119/crec/2025/01/03/d03ja5-1.htm"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|object|false|none|none|
|entireIssue|[object]|false|none|none|
|sections|[object]|false|none|none|

<h2 id="tocS_DailyCongressionalRecordIssue">DailyCongressionalRecordIssue</h2>
<!-- backwards compatibility -->
<a id="schemadailycongressionalrecordissue"></a>
<a id="schema_DailyCongressionalRecordIssue"></a>
<a id="tocSdailycongressionalrecordissue"></a>
<a id="tocsdailycongressionalrecordissue"></a>

```json
{
  "issue": {
    "congress": 119,
    "fullIssue": {
      "articles": {
        "count": 315,
        "url": "https://api.congress.gov/v3/daily-congressional-record/171/1/articles?format=json"
      },
      "entireIssue": [
        {
          "part": "1",
          "type": "PDF",
          "url": "https://www.congress.gov/119/crec/2025/01/03/171/1/CREC-2025-01-03-v171.pdf"
        }
      ],
      "sections": [
        {
          "endPage": "D12",
          "name": "Daily Digest",
          "startPage": "D1",
          "text": [
            {
              "type": "Formatted Text",
              "url": "https://www.congress.gov/119/crec/2025/01/03/d03ja5-1.htm"
            }
          ]
        }
      ]
    },
    "issueDate": "2025-01-03T05:00:00Z",
    "issueNumber": "1",
    "sessionNumber": 1,
    "updateDate": "2025-01-04T16:59:21Z",
    "url": "https://api.congress.gov/v3/daily-congressional-record/171/1?format=json",
    "volumeNumber": 171
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issue|object|false|none|none|

<h2 id="tocS_sectionArticle">sectionArticle</h2>
<!-- backwards compatibility -->
<a id="schemasectionarticle"></a>
<a id="schema_sectionArticle"></a>
<a id="tocSsectionarticle"></a>
<a id="tocssectionarticle"></a>

```json
{
  "endPage": "D760",
  "startPage": "D759",
  "text": [
    {
      "type": "Formatted Text",
      "url": "https://www.congress.gov/116/crec/2020/09/04/modified/CREC-2020-09-04-pt1-PgD759.htm"
    }
  ],
  "title": "Daily Digest/Next Meeting of the SENATE + Next Meeting of the HOUSE OF REPRESENTATIVES + Other End Matter; Congressional Record Vol. 166, No. 153"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endPage|string|false|none|none|
|startPage|string|false|none|none|
|text|[object]|false|none|none|
|title|string(url)|false|none|none|

<h2 id="tocS_article">article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "name": "Daily Digest",
  "sectionArticles": [
    {
      "endPage": "D760",
      "startPage": "D759",
      "text": [
        {
          "type": "Formatted Text",
          "url": "https://www.congress.gov/116/crec/2020/09/04/modified/CREC-2020-09-04-pt1-PgD759.htm"
        }
      ],
      "title": "Daily Digest/Next Meeting of the SENATE + Next Meeting of the HOUSE OF REPRESENTATIVES + Other End Matter; Congressional Record Vol. 166, No. 153"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|sectionArticles|[[sectionArticle](#schemasectionarticle)]|false|none|none|

<h2 id="tocS_DailyCongressionalRecordArticles">DailyCongressionalRecordArticles</h2>
<!-- backwards compatibility -->
<a id="schemadailycongressionalrecordarticles"></a>
<a id="schema_DailyCongressionalRecordArticles"></a>
<a id="tocSdailycongressionalrecordarticles"></a>
<a id="tocsdailycongressionalrecordarticles"></a>

```json
{
  "articles": [
    {
      "name": "Daily Digest",
      "sectionArticles": [
        {
          "endPage": "D760",
          "startPage": "D759",
          "text": [
            {
              "type": "Formatted Text",
              "url": "https://www.congress.gov/116/crec/2020/09/04/modified/CREC-2020-09-04-pt1-PgD759.htm"
            }
          ],
          "title": "Daily Digest/Next Meeting of the SENATE + Next Meeting of the HOUSE OF REPRESENTATIVES + Other End Matter; Congressional Record Vol. 166, No. 153"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[[article](#schemaarticle)]|false|none|none|

<h2 id="tocS_boundCongressionalRecord">boundCongressionalRecord</h2>
<!-- backwards compatibility -->
<a id="schemaboundcongressionalrecord"></a>
<a id="schema_boundCongressionalRecord"></a>
<a id="tocSboundcongressionalrecord"></a>
<a id="tocsboundcongressionalrecord"></a>

```json
{
  "congress": 101,
  "date": "1990-05-01",
  "sessionNumber": 2,
  "updateDate": "2020-10-20",
  "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
  "volumeNumber": 136
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congress|integer|false|none|none|
|date|string|false|none|none|
|sessionNumber|integer|false|none|none|
|updateDate|string(date)|false|none|none|
|url|string(url)|false|none|none|
|volumeNumber|integer|false|none|none|

<h2 id="tocS_BoundCongressionalRecord2">BoundCongressionalRecord2</h2>
<!-- backwards compatibility -->
<a id="schemaboundcongressionalrecord2"></a>
<a id="schema_BoundCongressionalRecord2"></a>
<a id="tocSboundcongressionalrecord2"></a>
<a id="tocsboundcongressionalrecord2"></a>

```json
{
  "boundCongressionalRecord": [
    {
      "congress": 101,
      "date": "1990-05-01",
      "sessionNumber": 2,
      "updateDate": "2020-10-20",
      "url": "https://api.congress.gov/v3/bound-congressional-record/1990/5/1?format=json",
      "volumeNumber": 136
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundCongressionalRecord|[[boundCongressionalRecord](#schemaboundcongressionalrecord)]|false|none|none|

<h2 id="tocS_communicationType">communicationType</h2>
<!-- backwards compatibility -->
<a id="schemacommunicationtype"></a>
<a id="schema_communicationType"></a>
<a id="tocScommunicationtype"></a>
<a id="tocscommunicationtype"></a>

```json
{
  "code": "EC",
  "name": "Executive Communication"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_houseCommunication">houseCommunication</h2>
<!-- backwards compatibility -->
<a id="schemahousecommunication"></a>
<a id="schema_houseCommunication"></a>
<a id="tocShousecommunication"></a>
<a id="tocshousecommunication"></a>

```json
{
  "chamber": "House",
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congressNumber": 117,
  "number": "2057",
  "updateDate": "2021-09-01",
  "url": "https://api.congress.gov/v3/house-communication/117/ec/2057?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|communicationType|[communicationType](#schemacommunicationtype)|false|none|none|
|congressNumber|integer|false|none|none|
|number|string|false|none|none|
|updateDate|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_HouseCommunications">HouseCommunications</h2>
<!-- backwards compatibility -->
<a id="schemahousecommunications"></a>
<a id="schema_HouseCommunications"></a>
<a id="tocShousecommunications"></a>
<a id="tocshousecommunications"></a>

```json
{
  "houseCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congressNumber": 117,
      "number": "2057",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/house-communication/117/ec/2057?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|houseCommunications|[[houseCommunication](#schemahousecommunication)]|false|none|none|

<h2 id="tocS_HouseCommunicationTypeNumber">HouseCommunicationTypeNumber</h2>
<!-- backwards compatibility -->
<a id="schemahousecommunicationtypenumber"></a>
<a id="schema_HouseCommunicationTypeNumber"></a>
<a id="tocShousecommunicationtypenumber"></a>
<a id="tocshousecommunicationtypenumber"></a>

```json
{
  "abstract": "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json",
      "referralDate": "2024-03-07"
    }
  ],
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 118,
  "congressionalRecordDate": "2024-03-07",
  "isRulemaking": "True",
  "legalAuthority": "5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)",
  "matchingRequirements": [
    {
      "number": 8070,
      "url": "https://api.congress.gov/v3/house-requirement/8070"
    }
  ],
  "number": 3324,
  "reportNature": "The Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024.",
  "sessionNumber": 2,
  "submittingAgency": "Environmental Protection Agency",
  "submittingOfficial": "Director, Regulatory Management Division",
  "updateDate": "2024-09-03"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|false|none|none|
|chamber|string|false|none|none|
|committees|[object]|false|none|none|
|communicationType|[communicationType](#schemacommunicationtype)|false|none|none|
|congress|integer|false|none|none|
|congressionalRecordDate|string(date)|false|none|none|
|isRulemaking|string|false|none|none|
|legalAuthority|string(url)|false|none|none|
|matchingRequirements|[object]|false|none|none|
|number|integer|false|none|none|
|reportNature|string|false|none|none|
|sessionNumber|integer|false|none|none|
|submittingAgency|string|false|none|none|
|submittingOfficial|string|false|none|none|
|updateDate|string(date)|false|none|none|

<h2 id="tocS_houseRequirement">houseRequirement</h2>
<!-- backwards compatibility -->
<a id="schemahouserequirement"></a>
<a id="schema_houseRequirement"></a>
<a id="tocShouserequirement"></a>
<a id="tocshouserequirement"></a>

```json
{
  "number": 8070,
  "updateDate": "2021-08-13",
  "url": "https://api.congress.gov/v3/house-requirement/8070?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|false|none|none|
|updateDate|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_HouseRequirements">HouseRequirements</h2>
<!-- backwards compatibility -->
<a id="schemahouserequirements"></a>
<a id="schema_HouseRequirements"></a>
<a id="tocShouserequirements"></a>
<a id="tocshouserequirements"></a>

```json
{
  "houseRequirements": [
    {
      "number": 8070,
      "updateDate": "2021-08-13",
      "url": "https://api.congress.gov/v3/house-requirement/8070?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|houseRequirements|[[houseRequirement](#schemahouserequirement)]|false|none|none|

<h2 id="tocS_matchCommunication">matchCommunication</h2>
<!-- backwards compatibility -->
<a id="schemamatchcommunication"></a>
<a id="schema_matchCommunication"></a>
<a id="tocSmatchcommunication"></a>
<a id="tocsmatchcommunication"></a>

```json
{
  "count": 90774,
  "url": "https://api.congress.gov/v3/house-requirement/8070/matching-communications?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_HouseRequirement2">HouseRequirement2</h2>
<!-- backwards compatibility -->
<a id="schemahouserequirement2"></a>
<a id="schema_HouseRequirement2"></a>
<a id="tocShouserequirement2"></a>
<a id="tocshouserequirement2"></a>

```json
{
  "houseRequirement": {
    "activeRecord": true,
    "frequency": "[No deadline specified].",
    "legalAuthority": "5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868)",
    "matchingCommunications": {
      "count": 90774,
      "url": "https://api.congress.gov/v3/house-requirement/8070/matching-communications?format=json"
    },
    "nature": "Congressional review of agency rulemaking.",
    "number": 8070,
    "parentAgency": "Multiple Executive Agencies and Departments",
    "submittingAgency": "Multiple Executive Agencies and Departments",
    "updateDate": "2021-08-13"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|houseRequirement|object|false|none|none|

<h2 id="tocS_matchCommunications">matchCommunications</h2>
<!-- backwards compatibility -->
<a id="schemamatchcommunications"></a>
<a id="schema_matchCommunications"></a>
<a id="tocSmatchcommunications"></a>
<a id="tocsmatchcommunications"></a>

```json
{
  "chamber": "House",
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 112,
  "number": 2,
  "url": "https://api.congress.gov/v3/house-communication/112/EC/2?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|communicationType|[communicationType](#schemacommunicationtype)|false|none|none|
|congress|integer|false|none|none|
|number|integer|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_MatchCommunications2">MatchCommunications2</h2>
<!-- backwards compatibility -->
<a id="schemamatchcommunications2"></a>
<a id="schema_MatchCommunications2"></a>
<a id="tocSmatchcommunications2"></a>
<a id="tocsmatchcommunications2"></a>

```json
{
  "matchCommunications": [
    {
      "chamber": "House",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 112,
      "number": 2,
      "url": "https://api.congress.gov/v3/house-communication/112/EC/2?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchCommunications|[[matchCommunications](#schemamatchcommunications)]|false|none|none|

<h2 id="tocS_senateCommunication">senateCommunication</h2>
<!-- backwards compatibility -->
<a id="schemasenatecommunication"></a>
<a id="schema_senateCommunication"></a>
<a id="tocSsenatecommunication"></a>
<a id="tocssenatecommunication"></a>

```json
{
  "chamber": "Senate",
  "communicationType": {
    "code": "EC",
    "name": "Executive Communication"
  },
  "congress": 117,
  "number": "1615",
  "updateDate": "2021-09-01",
  "url": "https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|communicationType|[communicationType](#schemacommunicationtype)|false|none|none|
|congress|integer|false|none|none|
|number|string|false|none|none|
|updateDate|string(date)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_SenateCommunications">SenateCommunications</h2>
<!-- backwards compatibility -->
<a id="schemasenatecommunications"></a>
<a id="schema_SenateCommunications"></a>
<a id="tocSsenatecommunications"></a>
<a id="tocssenatecommunications"></a>

```json
{
  "senateCommunications": [
    {
      "chamber": "Senate",
      "communicationType": {
        "code": "EC",
        "name": "Executive Communication"
      },
      "congress": 117,
      "number": "1615",
      "updateDate": "2021-09-01",
      "url": "https://api.congress.gov/v3/senate-communication/117/ec/1615?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|senateCommunications|[[senateCommunication](#schemasenatecommunication)]|false|none|none|

<h2 id="tocS_SenateCommunicationTypeNumber">SenateCommunicationTypeNumber</h2>
<!-- backwards compatibility -->
<a id="schemasenatecommunicationtypenumber"></a>
<a id="schema_SenateCommunicationTypeNumber"></a>
<a id="tocSsenatecommunicationtypenumber"></a>
<a id="tocssenatecommunicationtypenumber"></a>

```json
{
  "abstract": "A letter from the Director, Regulatory Management Division, Environmental Protection Agency, transmitting the Agency's request for applications - Technical Assistance to Brownfields Communities [EPA-I-OLEM-OBLR-22-12] received February 9, 2024, pursuant to 5 U.S.C. 801(a)(1)(A); Public Law 104–121, section 251; (110 Stat. 868); to the Committee on Energy and Commerce.",
  "chamber": "House",
  "committees": [
    {
      "name": "Investigations and Oversight Subcommittee",
      "systemCode": "hspw01",
      "url": "https://api.congress.gov/v3/committee/house/hspw01?format=json",
      "referralDate": "2024-03-07"
    }
  ],
  "congress": 118,
  "congressionalRecordDate": "2024-03-07",
  "number": 3324,
  "sessionNumber": 2,
  "updateDate": "2024-09-03"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|false|none|none|
|chamber|string|false|none|none|
|committees|[object]|false|none|none|
|congress|integer|false|none|none|
|congressionalRecordDate|string(date)|false|none|none|
|number|integer|false|none|none|
|sessionNumber|integer|false|none|none|
|updateDate|string(date)|false|none|none|

<h2 id="tocS_latestNominationAction">latestNominationAction</h2>
<!-- backwards compatibility -->
<a id="schemalatestnominationaction"></a>
<a id="schema_latestNominationAction"></a>
<a id="tocSlatestnominationaction"></a>
<a id="tocslatestnominationaction"></a>

```json
{
  "actionDate": "2022-12-07",
  "text": "Received in the Senate and referred to the Committee on Armed Services."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionDate|string(date)|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_nomination">nomination</h2>
<!-- backwards compatibility -->
<a id="schemanomination"></a>
<a id="schema_nomination"></a>
<a id="tocSnomination"></a>
<a id="tocsnomination"></a>

```json
{
  "citation": "PN2804",
  "congress": 117,
  "description": "Mary Anne Carter, of Tennessee, to be Chairperson of the National Endowment for the Arts for a term of four years, vice Maria Rosario Jackson, resigned.",
  "latestAction": {
    "actionDate": "2022-12-07",
    "text": "Received in the Senate and referred to the Committee on Armed Services."
  },
  "nominationType": {
    "isCivilian": false,
    "isMilitary": true
  },
  "number": 2804,
  "organization": "Army",
  "partNumber": "00",
  "receivedDate": "2022-12-07",
  "updateDate": "2022-12-08T05:25:17Z",
  "url": "https://api.congress.gov/v3/nomination/117/2804?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citation|string|false|none|none|
|congress|integer|false|none|none|
|description|string|false|none|none|
|latestAction|[latestNominationAction](#schemalatestnominationaction)|false|none|none|
|nominationType|[nominationType](#schemanominationtype)|false|none|none|
|number|integer|false|none|none|
|organization|string|false|none|none|
|partNumber|string|false|none|none|
|receivedDate|string(date)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Nominations">Nominations</h2>
<!-- backwards compatibility -->
<a id="schemanominations"></a>
<a id="schema_Nominations"></a>
<a id="tocSnominations"></a>
<a id="tocsnominations"></a>

```json
{
  "nominations": [
    {
      "citation": "PN2804",
      "congress": 117,
      "description": "Mary Anne Carter, of Tennessee, to be Chairperson of the National Endowment for the Arts for a term of four years, vice Maria Rosario Jackson, resigned.",
      "latestAction": {
        "actionDate": "2022-12-07",
        "text": "Received in the Senate and referred to the Committee on Armed Services."
      },
      "nominationType": {
        "isCivilian": false,
        "isMilitary": true
      },
      "number": 2804,
      "organization": "Army",
      "partNumber": "00",
      "receivedDate": "2022-12-07",
      "updateDate": "2022-12-08T05:25:17Z",
      "url": "https://api.congress.gov/v3/nomination/117/2804?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nominations|[[nomination](#schemanomination)]|false|none|none|

<h2 id="tocS_nominee">nominee</h2>
<!-- backwards compatibility -->
<a id="schemanominee"></a>
<a id="schema_nominee"></a>
<a id="tocSnominee"></a>
<a id="tocsnominee"></a>

```json
{
  "nomineeCount": 1,
  "ordinal": 1,
  "organization": "Federal Maritime Commission",
  "positionTitle": "Federal Maritime Commissioner",
  "url": "https://api.congress.gov/v3/nomination/118/16/1?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nomineeCount|integer|false|none|none|
|ordinal|integer|false|none|none|
|organization|string|false|none|none|
|positionTitle|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Nomination2">Nomination2</h2>
<!-- backwards compatibility -->
<a id="schemanomination2"></a>
<a id="schema_Nomination2"></a>
<a id="tocSnomination2"></a>
<a id="tocsnomination2"></a>

```json
{
  "nomination": {
    "actions": {
      "count": 7,
      "url": "https://api.congress.gov/v3/nomination/118/16/actions?format=json"
    },
    "authorityDate": "2025-10-21",
    "citation": "PN16",
    "committees": {
      "count": 1,
      "url": "https://api.congress.gov/v3/nomination/118/16/committees?format=json"
    },
    "congress": 118,
    "description": "Daniel B. Maffei, of New York, to be a Federal Maritime Commissioner for a term expiring June 30, 2027.  (Reappointment)",
    "hearings": {
      "count": 1,
      "url": "https://api.congress.gov/v3/nomination/118/16/hearings?format=json"
    },
    "latestAction": {
      "actionDate": "2024-05-14",
      "text": "Confirmed by the Senate by Voice Vote."
    },
    "nominationType": {
      "isCivilian": false,
      "isMilitary": true
    },
    "nominees": [
      {
        "nomineeCount": 1,
        "ordinal": 1,
        "organization": "Federal Maritime Commission",
        "positionTitle": "Federal Maritime Commissioner",
        "url": "https://api.congress.gov/v3/nomination/118/16/1?format=json"
      }
    ],
    "number": 16,
    "partNumber": "00",
    "receivedDate": "2023-01-03",
    "updateDate": "2025-10-22T15:58:44Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nomination|object|false|none|none|

<h2 id="tocS_senatecommittee">senatecommittee</h2>
<!-- backwards compatibility -->
<a id="schemasenatecommittee"></a>
<a id="schema_senatecommittee"></a>
<a id="tocSsenatecommittee"></a>
<a id="tocssenatecommittee"></a>

```json
{
  "name": "Armed Services Committee",
  "systemCode": "ssas00",
  "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_nomineeAction">nomineeAction</h2>
<!-- backwards compatibility -->
<a id="schemanomineeaction"></a>
<a id="schema_nomineeAction"></a>
<a id="tocSnomineeaction"></a>
<a id="tocsnomineeaction"></a>

```json
{
  "actionCode": "S05120",
  "actionDate": "2022-08-03",
  "committees": [
    {
      "name": "Armed Services Committee",
      "systemCode": "ssas00",
      "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
    }
  ],
  "text": "Received in the Senate and referred to the Committee on Armed Services",
  "type": "IntroReferral"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|false|none|none|
|actionDate|string(date)|false|none|none|
|committees|[[senatecommittee](#schemasenatecommittee)]|false|none|none|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_NominationNominee">NominationNominee</h2>
<!-- backwards compatibility -->
<a id="schemanominationnominee"></a>
<a id="schema_NominationNominee"></a>
<a id="tocSnominationnominee"></a>
<a id="tocsnominationnominee"></a>

```json
{
  "nominees": [
    {
      "nomineeCount": 1,
      "ordinal": 1,
      "organization": "Federal Maritime Commission",
      "positionTitle": "Federal Maritime Commissioner",
      "url": "https://api.congress.gov/v3/nomination/118/16/1?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nominees|[[nominee](#schemanominee)]|false|none|none|

<h2 id="tocS_NominationActions">NominationActions</h2>
<!-- backwards compatibility -->
<a id="schemanominationactions"></a>
<a id="schema_NominationActions"></a>
<a id="tocSnominationactions"></a>
<a id="tocsnominationactions"></a>

```json
{
  "actions": [
    {
      "actionCode": "S05120",
      "actionDate": "2022-08-03",
      "committees": [
        {
          "name": "Armed Services Committee",
          "systemCode": "ssas00",
          "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
        }
      ],
      "text": "Received in the Senate and referred to the Committee on Armed Services",
      "type": "IntroReferral"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[nomineeAction](#schemanomineeaction)]|false|none|none|

<h2 id="tocS_nominationCommittee">nominationCommittee</h2>
<!-- backwards compatibility -->
<a id="schemanominationcommittee"></a>
<a id="schema_nominationCommittee"></a>
<a id="tocSnominationcommittee"></a>
<a id="tocsnominationcommittee"></a>

```json
{
  "activities": [
    {
      "date": "2019-01-01",
      "name": "Reported By"
    }
  ],
  "chamber": "Senate",
  "name": "Judiciary Committee",
  "systemCode": "ssju00",
  "type": "Standing",
  "url": "https://api.congress.gov/v3/committee/senate/ssju00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|none|
|chamber|string|false|none|none|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_NominationCommittees">NominationCommittees</h2>
<!-- backwards compatibility -->
<a id="schemanominationcommittees"></a>
<a id="schema_NominationCommittees"></a>
<a id="tocSnominationcommittees"></a>
<a id="tocsnominationcommittees"></a>

```json
{
  "committees": [
    {
      "activities": [
        {
          "date": "2019-01-01",
          "name": "Reported By"
        }
      ],
      "chamber": "Senate",
      "name": "Judiciary Committee",
      "systemCode": "ssju00",
      "type": "Standing",
      "url": "https://api.congress.gov/v3/committee/senate/ssju00?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|committees|[[nominationCommittee](#schemanominationcommittee)]|false|none|none|

<h2 id="tocS_nominationHearing">nominationHearing</h2>
<!-- backwards compatibility -->
<a id="schemanominationhearing"></a>
<a id="schema_nominationHearing"></a>
<a id="tocSnominationhearing"></a>
<a id="tocsnominationhearing"></a>

```json
{
  "chamber": "Senate",
  "citation": "S.Hrg.118-694",
  "date": "2024-02-28",
  "jacketNumber": 61203,
  "number": 694
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chamber|string|false|none|none|
|citation|string|false|none|none|
|date|string(date)|false|none|none|
|jacketNumber|integer|false|none|none|
|number|integer|false|none|none|

<h2 id="tocS_NominationHearing2">NominationHearing2</h2>
<!-- backwards compatibility -->
<a id="schemanominationhearing2"></a>
<a id="schema_NominationHearing2"></a>
<a id="tocSnominationhearing2"></a>
<a id="tocsnominationhearing2"></a>

```json
{
  "hearings": [
    {
      "chamber": "Senate",
      "citation": "S.Hrg.118-694",
      "date": "2024-02-28",
      "jacketNumber": 61203,
      "number": 694
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hearings|[[nominationHearing](#schemanominationhearing)]|false|none|none|

<h2 id="tocS_crsreport">crsreport</h2>
<!-- backwards compatibility -->
<a id="schemacrsreport"></a>
<a id="schema_crsreport"></a>
<a id="tocScrsreport"></a>
<a id="tocscrsreport"></a>

```json
{
  "contentType": "Reports",
  "id": "R43083",
  "publishDate": "2025-02-05T11:34:25Z",
  "status": "Active",
  "title": "SBA Assistance to Small Business Startups: Client Experiences and Program Impact",
  "updateDate": "2025-02-07T01:36:49Z",
  "url": "https://api.congress.gov/v3/crsreport/R43083",
  "version": 145
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|none|
|id|string|false|none|none|
|publishDate|string(date-time)|false|none|none|
|status|string|false|none|none|
|title|string|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|version|integer|false|none|none|

<h2 id="tocS_CrsReport">CrsReport</h2>
<!-- backwards compatibility -->
<a id="schemacrsreport-1"></a>
<a id="schema_CrsReport"></a>
<a id="tocScrsreport-1"></a>
<a id="tocscrsreport-1"></a>

```json
{
  "CRSReports": [
    {
      "contentType": "Reports",
      "id": "R43083",
      "publishDate": "2025-02-05T11:34:25Z",
      "status": "Active",
      "title": "SBA Assistance to Small Business Startups: Client Experiences and Program Impact",
      "updateDate": "2025-02-07T01:36:49Z",
      "url": "https://api.congress.gov/v3/crsreport/R43083",
      "version": 145
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CRSReports|[[crsreport](#schemacrsreport)]|false|none|none|

<h2 id="tocS_format">format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
{
  "format": "PDF",
  "url": "https://www.congress.gov/crs_external_products/R/PDF/R47175/R47175.1.pdf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_relatedMaterial">relatedMaterial</h2>
<!-- backwards compatibility -->
<a id="schemarelatedmaterial"></a>
<a id="schema_relatedMaterial"></a>
<a id="tocSrelatedmaterial"></a>
<a id="tocsrelatedmaterial"></a>

```json
{
  "URL": "https://api.congress.gov/v3/law/93/pub/344",
  "congress": 93,
  "number": "93-344",
  "title": "Providing for budget allocations, and for other purposes.",
  "type": "PUB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|URL|string|false|none|none|
|congress|integer|false|none|none|
|number|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_author">author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "author": "Megan S. Lynch"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|

<h2 id="tocS_topic">topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "topic": "Budget & Appropriations Procedure"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|none|

<h2 id="tocS_CrsReportDetail">CrsReportDetail</h2>
<!-- backwards compatibility -->
<a id="schemacrsreportdetail"></a>
<a id="schema_CrsReportDetail"></a>
<a id="tocScrsreportdetail"></a>
<a id="tocscrsreportdetail"></a>

```json
{
  "authors": [
    {
      "author": "Megan S. Lynch"
    }
  ],
  "contentType": "Reports",
  "formats": [
    {
      "format": "PDF",
      "url": "https://www.congress.gov/crs_external_products/R/PDF/R47175/R47175.1.pdf"
    }
  ],
  "id": "R47175",
  "publishDate": "2022-07-11T04:00:00Z",
  "relatedMaterials": [
    {
      "URL": "https://api.congress.gov/v3/law/93/pub/344",
      "congress": 93,
      "number": "93-344",
      "title": "Providing for budget allocations, and for other purposes.",
      "type": "PUB"
    }
  ],
  "status": "Active",
  "summary": "The Congressional Budget Act of 1974 directs Congress to adopt a budget resolution each spring, providing an agreement between the House and Senate on a budget plan for the upcoming fiscal year (and at least four additional years). The annual budget resolution includes certain spending and revenue levels that become enforceable through points of order once both chambers have adopted the resolution.\nCongress does not always adopt a budget resolution, however, and this may complicate the development and consideration of budgetary legislation. Congress has, therefore, developed an alternative legislative tool, typically referred to as a “deeming resolution” because it is deemed to serve in place of an annual budget resolution for the purposes of establishing enforceable budgetary levels. \nOn June 8, 2022, the House of Representatives adopted H.Res. 1151, a deeming resolution for FY2023. H.Res. 1151 provided a committee spending allocation (302(a) allocation) to the House Appropriations Committee ($1.603 trillion). It also directed the chair of the House Budget Committee to subsequently file a statement in the Congressional Record that includes committee spending allocations for all other committees, as well as aggregate spending and revenue levels. (Those levels were filed on June 21, 2022.) H.Res. 1151 specified that the levels filed in the Congressional Record be consistent with the “most recent baseline of the Congressional Budget Office,” meaning that the committee spending allocations (other than for the Appropriations Committee) and the aggregate spending and revenue levels have been set at the levels currently projected under current law. \nIn addition to providing enforceable budgetary levels within the House, H.Res. 1151 grants authority to the chair of the House Budget Committee to “adjust” the budgetary levels provided under the deeming resolution in the future under specified circumstances. In addition, the resolution states that provisions designated as “emergency” shall be effectively exempt from House budgetary rules and specifies that certain accounts may receive advance appropriations for FY2024 and FY2025. \n",
  "title": "Settings Budgetary Levels: The House's FY2023 Deeming Resolution",
  "topics": [
    {
      "topic": "Budget & Appropriations Procedure"
    }
  ],
  "updateDate": "2025-06-20T23:46:23Z",
  "url": "www.congress.gov/crs-report/R47175",
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[author](#schemaauthor)]|false|none|none|
|contentType|string|false|none|none|
|formats|[[format](#schemaformat)]|false|none|none|
|id|string|false|none|none|
|publishDate|string(date-time)|false|none|none|
|relatedMaterials|[[relatedMaterial](#schemarelatedmaterial)]|false|none|none|
|status|string|false|none|none|
|summary|string|false|none|none|
|title|string|false|none|none|
|topics|[[topic](#schematopic)]|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|version|integer|false|none|none|

<h2 id="tocS_treaty">treaty</h2>
<!-- backwards compatibility -->
<a id="schematreaty"></a>
<a id="schema_treaty"></a>
<a id="tocStreaty"></a>
<a id="tocstreaty"></a>

```json
{
  "congressReceived": 89,
  "congressConsidered": 89,
  "number": 3,
  "parts": {},
  "suffix": "",
  "topic": "Dispute Settlement and Arbitration",
  "transmittedDate": "1965-05-17T00:00:00Z",
  "updateDate": "2024-12-11T00:18:16Z",
  "url": "https://api.congress.gov/v3/treaty/89/3?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|congressReceived|integer|false|none|none|
|congressConsidered|integer|false|none|none|
|number|integer|false|none|none|
|parts|object|false|none|none|
|suffix|string|false|none|none|
|topic|string|false|none|none|
|transmittedDate|string(date-time)|false|none|none|
|updateDate|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Treaty2">Treaty2</h2>
<!-- backwards compatibility -->
<a id="schematreaty2"></a>
<a id="schema_Treaty2"></a>
<a id="tocStreaty2"></a>
<a id="tocstreaty2"></a>

```json
{
  "treaties": [
    {
      "congressReceived": 89,
      "congressConsidered": 89,
      "number": 3,
      "parts": {},
      "suffix": "",
      "topic": "Dispute Settlement and Arbitration",
      "transmittedDate": "1965-05-17T00:00:00Z",
      "updateDate": "2024-12-11T00:18:16Z",
      "url": "https://api.congress.gov/v3/treaty/89/3?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|treaties|[[treaty](#schematreaty)]|false|none|none|

<h2 id="tocS_TreatyDetail">TreatyDetail</h2>
<!-- backwards compatibility -->
<a id="schematreatydetail"></a>
<a id="schema_TreatyDetail"></a>
<a id="tocStreatydetail"></a>
<a id="tocstreatydetail"></a>

```json
{
  "treaty": {
    "actions": {
      "count": 3,
      "url": "https://api.congress.gov/v3/treaty/89/7/actions?format=json"
    },
    "congressConsidered": 89,
    "congressReceived": 89,
    "countriesParties": [
      {
        "name": "Belgium"
      }
    ],
    "inForceDate": "",
    "indexTerms": [
      {
        "name": "ENGLISH"
      }
    ],
    "number": 7,
    "oldNumber": "G. 89-1",
    "oldNumberDisplayName": "Ex. G, 89th Congress, 1st Session",
    "parts": {},
    "relatedDocs": [
      {}
    ],
    "resolutionText": "",
    "suffix": "",
    "titles": [
      {
        "title": "PROTOCOL MODIFYING CONVENTION WITH BELGIUM FOR THE AVOIDANCE OF DOUBLE TAXATION",
        "titleType": "Treaty - Short Title"
      }
    ],
    "topic": "Taxation",
    "transmitted": "1965-08-05T00:00:00Z",
    "updateDate": "2022-02-26T16:25:25Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|treaty|object|false|none|none|

<h2 id="tocS_treatyAction">treatyAction</h2>
<!-- backwards compatibility -->
<a id="schematreatyaction"></a>
<a id="schema_treatyAction"></a>
<a id="tocStreatyaction"></a>
<a id="tocstreatyaction"></a>

```json
{
  "actionCode": "S05291",
  "actionDate": "2022-08-03",
  "committee": {
    "name": "Armed Services Committee",
    "systemCode": "ssas00",
    "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
  },
  "text": "Resolution of advice and consent to ratification agreed to as amended in Senate by Yea-Nay Vote. 95 - 1. Record Vote Number: 282.",
  "type": "Floor"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|false|none|none|
|actionDate|string(date)|false|none|none|
|committee|[senatecommittee](#schemasenatecommittee)|false|none|none|
|text|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_TreatyActions">TreatyActions</h2>
<!-- backwards compatibility -->
<a id="schematreatyactions"></a>
<a id="schema_TreatyActions"></a>
<a id="tocStreatyactions"></a>
<a id="tocstreatyactions"></a>

```json
{
  "actions": [
    {
      "actionCode": "S05291",
      "actionDate": "2022-08-03",
      "committee": {
        "name": "Armed Services Committee",
        "systemCode": "ssas00",
        "url": "https://api.congress.gov/v3/committee/senate/ssas00?format=json"
      },
      "text": "Resolution of advice and consent to ratification agreed to as amended in Senate by Yea-Nay Vote. 95 - 1. Record Vote Number: 282.",
      "type": "Floor"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[treatyAction](#schematreatyaction)]|false|none|none|

<h2 id="tocS_treatyCommittee">treatyCommittee</h2>
<!-- backwards compatibility -->
<a id="schematreatycommittee"></a>
<a id="schema_treatyCommittee"></a>
<a id="tocStreatycommittee"></a>
<a id="tocstreatycommittee"></a>

```json
{
  "activities": [
    {
      "date": "1965-10-19T04:00:00Z",
      "name": "Reported By"
    }
  ],
  "chamber": "Senate",
  "name": "Foreign Relations Committee",
  "subcommittees": [
    {
      "activities": [
        {
          "date": "1965-10-19T04:00:00Z",
          "name": "Reported By"
        }
      ],
      "name": "Foreign Relations Committee",
      "systemCode": "ssfr01",
      "url": "https://api.congress.gov/v3/committee/senate/ssfr01?format=json"
    }
  ],
  "systemCode": "ssfr00",
  "type": "Standing",
  "url": "https://api.congress.gov/v3/committee/senate/ssfr00?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[object]|false|none|none|
|chamber|string|false|none|none|
|name|string|false|none|none|
|subcommittees|[[treatySubcommittee](#schematreatysubcommittee)]|false|none|none|
|systemCode|string|false|none|none|
|type|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_TreatyCommittees">TreatyCommittees</h2>
<!-- backwards compatibility -->
<a id="schematreatycommittees"></a>
<a id="schema_TreatyCommittees"></a>
<a id="tocStreatycommittees"></a>
<a id="tocstreatycommittees"></a>

```json
{
  "treatyCommittees": [
    {
      "activities": [
        {
          "date": "1965-10-19T04:00:00Z",
          "name": "Reported By"
        }
      ],
      "chamber": "Senate",
      "name": "Foreign Relations Committee",
      "subcommittees": [
        {
          "activities": [
            {
              "date": "1965-10-19T04:00:00Z",
              "name": "Reported By"
            }
          ],
          "name": "Foreign Relations Committee",
          "systemCode": "ssfr01",
          "url": "https://api.congress.gov/v3/committee/senate/ssfr01?format=json"
        }
      ],
      "systemCode": "ssfr00",
      "type": "Standing",
      "url": "https://api.congress.gov/v3/committee/senate/ssfr00?format=json"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|treatyCommittees|[[treatyCommittee](#schematreatycommittee)]|false|none|none|

<h2 id="tocS_treatySubcommittee">treatySubcommittee</h2>
<!-- backwards compatibility -->
<a id="schematreatysubcommittee"></a>
<a id="schema_treatySubcommittee"></a>
<a id="tocStreatysubcommittee"></a>
<a id="tocstreatysubcommittee"></a>

```json
{
  "activities": [
    {
      "date": "1965-10-19T04:00:00Z",
      "name": "Reported By"
    }
  ],
  "name": "Foreign Relations Committee",
  "systemCode": "ssfr01",
  "url": "https://api.congress.gov/v3/committee/senate/ssfr01?format=json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[object]|false|none|none|
|name|string|false|none|none|
|systemCode|string|false|none|none|
|url|string(url)|false|none|none|
