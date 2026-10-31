<h1 id="house-of-commons-oral-and-written-questions-api">House of Commons Oral and Written Questions API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API that allows querying all tabled oral and written questions, and motions for the House of Commons.

Base URLs:

* <a href="http://oralquestionsandmotions-api.parliament.uk">http://oralquestionsandmotions-api.parliament.uk</a>

* <a href="https://oralquestionsandmotions-api.parliament.uk">https://oralquestionsandmotions-api.parliament.uk</a>

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="house-of-commons-oral-and-written-questions-api-early-day-motions">Early Day Motions</h1>

## Returns a single Early Day Motion by ID

<a id="opIdPublishedEarlyDayMotion_Get"></a>

> Code samples

```bash
curl https://example.com/EarlyDayMotion/0 \
  -H 'Accept: application/json'
```

`GET /EarlyDayMotion/{id}`

Get a single Early Day Motion which has the ID specified.

<h3 id="returns-a-single-early-day-motion-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Early Day Motion with the ID specified.|

> Example responses

> 200 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "Answer": "string",
      "AnsweredWhen": "1970-01-01T00:00:00Z",
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DueForAnswer": "1970-01-01T00:00:00Z",
      "Id": 0,
      "QuestionText": "string",
      "QuestionType": "NamedDay",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

> 400 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

> 404 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

<h3 id="returns-a-single-early-day-motion-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiResponse_List_PublishedWrittenQuestion_](#schemaapiresponse_list_publishedwrittenquestion_)|
|400|Bad Request|BadRequest|[ApiResponse_Object_](#schemaapiresponse_object_)|
|404|Not Found|NotFound|[ApiResponse_Object_](#schemaapiresponse_object_)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Early Day Motions

> Code samples

```bash
curl https://example.com/EarlyDayMotions/list \
  -H 'Accept: application/json'
```

`GET /EarlyDayMotions/list`

Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.

<h3 id="returns-a-list-of-early-day-motions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameters.edmIds|query|[integer(int32)]|false|Early Day Motions with an ID in the list provided.|
|parameters.uINWithAmendmentSuffix|query|string|false|Early Day Motions with an UINWithAmendmentSuffix provided.|
|parameters.searchTerm|query|string|false|Early Day Motions where the title includes the search term provided.|
|parameters.currentStatusDateStart|query|string(date-time)|false|Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.|
|parameters.currentStatusDateEnd|query|string(date-time)|false|Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.|
|parameters.isPrayer|query|boolean|false|Early Day Motions which are a prayer against a Negative Statutory Instrument.|
|parameters.memberId|query|integer(int32)|false|Return Early Day Motions tabled by Member with ID provided.|
|parameters.includeSponsoredByMember|query|boolean|false|Include Early Day Motions sponsored by Member specified|
|parameters.tabledStartDate|query|string(date-time)|false|Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.|
|parameters.tabledEndDate|query|string(date-time)|false|Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.|
|parameters.statuses|query|[string]|false|Early Day Motions where current status is in the selected list.|
|parameters.orderBy|query|string|false|Order results by date tabled, title or signature count. Default is date tabled.|
|parameters.skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|parameters.take|query|integer(int32)|false|The number of records to return, default is 25, maximum is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|parameters.statuses|Published|
|parameters.statuses|Withdrawn|
|parameters.orderBy|DateTabledAsc|
|parameters.orderBy|DateTabledDesc|
|parameters.orderBy|TitleAsc|
|parameters.orderBy|TitleDesc|
|parameters.orderBy|SignatureCountAsc|
|parameters.orderBy|SignatureCountDesc|

> Example responses

> 200 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "Answer": "string",
      "AnsweredWhen": "1970-01-01T00:00:00Z",
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DueForAnswer": "1970-01-01T00:00:00Z",
      "Id": 0,
      "QuestionText": "string",
      "QuestionType": "NamedDay",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

> 400 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

<h3 id="returns-a-list-of-early-day-motions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiResponse_List_PublishedWrittenQuestion_](#schemaapiresponse_list_publishedwrittenquestion_)|
|400|Bad Request|BadRequest|[ApiResponse_Object_](#schemaapiresponse_object_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="house-of-commons-oral-and-written-questions-api-oral-questions">Oral Questions</h1>

## Returns a list of oral questions

<a id="opIdPublishedOralQuestion_Get"></a>

> Code samples

```bash
curl https://example.com/oralquestions/list \
  -H 'Accept: application/json'
```

`GET /oralquestions/list`

A list of oral questions meeting the specified criteria.

<h3 id="returns-a-list-of-oral-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameters.answeringDateStart|query|string(date-time)|false|Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.|
|parameters.answeringDateEnd|query|string(date-time)|false|Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.|
|parameters.questionType|query|string|false|Oral Questions where the question type is the selected type, substantive or topical.|
|parameters.oralQuestionTimeId|query|integer(int32)|false|Oral Questions where the question is within the question time with the ID provided|
|parameters.askingMemberIds|query|[integer(int32)]|false|The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.|
|parameters.uINs|query|[integer(int32)]|false|The UIN for the question - note that UINs reset at the start of each Parliamentary session.|
|parameters.answeringBodyIds|query|[integer(int32)]|false|Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.|
|parameters.skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|parameters.take|query|integer(int32)|false|The number of records to return, default is 25, maximum is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|parameters.questionType|Substantive|
|parameters.questionType|Topical|

> Example responses

> 200 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "Answer": "string",
      "AnsweredWhen": "1970-01-01T00:00:00Z",
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DueForAnswer": "1970-01-01T00:00:00Z",
      "Id": 0,
      "QuestionText": "string",
      "QuestionType": "NamedDay",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

> 400 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

<h3 id="returns-a-list-of-oral-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiResponse_List_PublishedWrittenQuestion_](#schemaapiresponse_list_publishedwrittenquestion_)|
|400|Bad Request|BadRequest|[ApiResponse_Object_](#schemaapiresponse_object_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="house-of-commons-oral-and-written-questions-api-oral-question-times">Oral Question Times</h1>

## Returns a list of oral question times

<a id="opIdPublishedOralQuestionTime_Get"></a>

> Code samples

```bash
curl https://example.com/oralquestiontimes/list \
  -H 'Accept: application/json'
```

`GET /oralquestiontimes/list`

A list of oral question times meeting the specified criteria.

<h3 id="returns-a-list-of-oral-question-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parameters.answeringDateStart|query|string(date-time)|false|Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.|
|parameters.answeringDateEnd|query|string(date-time)|false|Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.|
|parameters.deadlineDateStart|query|string(date-time)|false|Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.|
|parameters.deadlineDateEnd|query|string(date-time)|false|Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.|
|parameters.oralQuestionTimeId|query|integer(int32)|false|Identifier of the OQT|
|parameters.answeringBodyIds|query|[integer(int32)]|false|Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.|
|parameters.skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|parameters.take|query|integer(int32)|false|The number of records to return, default is 25, maximum is 100.|

> Example responses

> 200 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "Answer": "string",
      "AnsweredWhen": "1970-01-01T00:00:00Z",
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DueForAnswer": "1970-01-01T00:00:00Z",
      "Id": 0,
      "QuestionText": "string",
      "QuestionType": "NamedDay",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

> 400 Response

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

<h3 id="returns-a-list-of-oral-question-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiResponse_List_PublishedWrittenQuestion_](#schemaapiresponse_list_publishedwrittenquestion_)|
|400|Bad Request|BadRequest|[ApiResponse_Object_](#schemaapiresponse_object_)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiResponse_List_PublishedEarlyDayMotion_">ApiResponse_List_PublishedEarlyDayMotion_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_list_publishedearlydaymotion_"></a>
<a id="schema_ApiResponse_List_PublishedEarlyDayMotion_"></a>
<a id="tocSapiresponse_list_publishedearlydaymotion_"></a>
<a id="tocsapiresponse_list_publishedearlydaymotion_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "AmendmentSuffix": "string",
      "AmendmentToMotionId": 0,
      "DateTabled": "1970-01-01T00:00:00Z",
      "Id": 0,
      "MemberId": 0,
      "MotionText": "string",
      "PrayingAgainstNegativeStatutoryInstrumentId": 0,
      "PrimarySponsor": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "SponsorsCount": 0,
      "Status": "Published",
      "StatusDate": "1970-01-01T00:00:00Z",
      "StatutoryInstrumentNumber": 0,
      "StatutoryInstrumentTitle": "string",
      "StatutoryInstrumentYear": "string",
      "Title": "string",
      "UIN": 0,
      "UINWithAmendmentSuffix": "string"
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|[[PublishedEarlyDayMotion](#schemapublishedearlydaymotion)]|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_ApiResponse_List_PublishedOralQuestionTime_">ApiResponse_List_PublishedOralQuestionTime_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_list_publishedoralquestiontime_"></a>
<a id="schema_ApiResponse_List_PublishedOralQuestionTime_"></a>
<a id="tocSapiresponse_list_publishedoralquestiontime_"></a>
<a id="tocsapiresponse_list_publishedoralquestiontime_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "AnsweringBodyNames": "string",
      "AnsweringMinisterTitles": "string",
      "AnsweringWhen": "1970-01-01T00:00:00Z",
      "DeadlineWhen": "1970-01-01T00:00:00Z",
      "Id": 0,
      "SubstantiveTime": "string",
      "TopicalTime": "string"
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|[[PublishedOralQuestionTime](#schemapublishedoralquestiontime)]|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_ApiResponse_List_PublishedOralQuestion_">ApiResponse_List_PublishedOralQuestion_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_list_publishedoralquestion_"></a>
<a id="schema_ApiResponse_List_PublishedOralQuestion_"></a>
<a id="tocSapiresponse_list_publishedoralquestion_"></a>
<a id="tocsapiresponse_list_publishedoralquestion_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AnsweringWhen": "1970-01-01T00:00:00Z",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DeclarableInterestDetail": "string",
      "HansardLink": "string",
      "Id": 0,
      "Number": 0,
      "QuestionText": "string",
      "QuestionType": "Substantive",
      "RemovedFromToBeAskedWhen": "1970-01-01T00:00:00Z",
      "Status": "Submitted",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|[[PublishedOralQuestion](#schemapublishedoralquestion)]|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_ApiResponse_List_PublishedWrittenQuestion_">ApiResponse_List_PublishedWrittenQuestion_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_list_publishedwrittenquestion_"></a>
<a id="schema_ApiResponse_List_PublishedWrittenQuestion_"></a>
<a id="tocSapiresponse_list_publishedwrittenquestion_"></a>
<a id="tocsapiresponse_list_publishedwrittenquestion_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": [
    {
      "Answer": "string",
      "AnsweredWhen": "1970-01-01T00:00:00Z",
      "AnsweringBody": "string",
      "AnsweringBodyId": 0,
      "AnsweringMinister": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AnsweringMinisterId": 0,
      "AnsweringMinisterTitle": "string",
      "AskingMember": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "AskingMemberId": 0,
      "DueForAnswer": "1970-01-01T00:00:00Z",
      "Id": 0,
      "QuestionText": "string",
      "QuestionType": "NamedDay",
      "TabledWhen": "1970-01-01T00:00:00Z",
      "UIN": 0
    }
  ],
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|[[PublishedWrittenQuestion](#schemapublishedwrittenquestion)]|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_ApiResponse_Object_">ApiResponse_Object_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_object_"></a>
<a id="schema_ApiResponse_Object_"></a>
<a id="tocSapiresponse_object_"></a>
<a id="tocsapiresponse_object_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {},
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|object|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_ApiResponse_PublishedEarlyDayMotionDetails_">ApiResponse_PublishedEarlyDayMotionDetails_</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse_publishedearlydaymotiondetails_"></a>
<a id="schema_ApiResponse_PublishedEarlyDayMotionDetails_"></a>
<a id="tocSapiresponse_publishedearlydaymotiondetails_"></a>
<a id="tocsapiresponse_publishedearlydaymotiondetails_"></a>

```json
{
  "Errors": [
    "string"
  ],
  "PagingInfo": {
    "GlobalStatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "GlobalTotal": 0,
    "Skip": 0,
    "StatusCounts": [
      {
        "Count": 0,
        "StatusId": 0
      }
    ],
    "Take": 0,
    "Total": 0
  },
  "Response": {
    "AmendmentSuffix": "string",
    "AmendmentToMotionId": 0,
    "Amendments": [
      {}
    ],
    "DateTabled": "1970-01-01T00:00:00Z",
    "Id": 0,
    "MemberId": 0,
    "MotionText": "string",
    "PrayingAgainstNegativeStatutoryInstrumentId": 0,
    "PrimarySponsor": {
      "Constituency": "string",
      "ListAs": "string",
      "MnisId": 0,
      "Name": "string",
      "Party": "string",
      "PartyColour": "string",
      "PartyId": 0,
      "PhotoUrl": "string",
      "PimsId": 0,
      "Status": "string"
    },
    "Sponsors": [
      {
        "CreatedWhen": "1970-01-01T00:00:00Z",
        "Id": 0,
        "IsWithdrawn": true,
        "Member": {
          "Constituency": "string",
          "ListAs": "string",
          "MnisId": 0,
          "Name": "string",
          "Party": "string",
          "PartyColour": "string",
          "PartyId": 0,
          "PhotoUrl": "string",
          "PimsId": 0,
          "Status": "string"
        },
        "MemberId": 0,
        "SponsoringOrder": 0,
        "WithdrawnDate": "1970-01-01T00:00:00Z"
      }
    ],
    "SponsorsCount": 0,
    "Status": "Published",
    "StatusDate": "1970-01-01T00:00:00Z",
    "StatutoryInstrumentNumber": 0,
    "StatutoryInstrumentTitle": "string",
    "StatutoryInstrumentYear": "string",
    "Title": "string",
    "UIN": 0,
    "UINWithAmendmentSuffix": "string"
  },
  "StatusCode": "Continue",
  "Success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|[string]|false|none|none|
|PagingInfo|[PagingInfo](#schemapaginginfo)|false|none|none|
|Response|[PublishedEarlyDayMotionDetails](#schemapublishedearlydaymotiondetails)|false|none|none|
|StatusCode|string|false|none|none|
|Success|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StatusCode|Continue|
|StatusCode|SwitchingProtocols|
|StatusCode|OK|
|StatusCode|Created|
|StatusCode|Accepted|
|StatusCode|NonAuthoritativeInformation|
|StatusCode|NoContent|
|StatusCode|ResetContent|
|StatusCode|PartialContent|
|StatusCode|MultipleChoices|
|StatusCode|Ambiguous|
|StatusCode|MovedPermanently|
|StatusCode|Moved|
|StatusCode|Found|
|StatusCode|Redirect|
|StatusCode|SeeOther|
|StatusCode|RedirectMethod|
|StatusCode|NotModified|
|StatusCode|UseProxy|
|StatusCode|Unused|
|StatusCode|TemporaryRedirect|
|StatusCode|RedirectKeepVerb|
|StatusCode|BadRequest|
|StatusCode|Unauthorized|
|StatusCode|PaymentRequired|
|StatusCode|Forbidden|
|StatusCode|NotFound|
|StatusCode|MethodNotAllowed|
|StatusCode|NotAcceptable|
|StatusCode|ProxyAuthenticationRequired|
|StatusCode|RequestTimeout|
|StatusCode|Conflict|
|StatusCode|Gone|
|StatusCode|LengthRequired|
|StatusCode|PreconditionFailed|
|StatusCode|RequestEntityTooLarge|
|StatusCode|RequestUriTooLong|
|StatusCode|UnsupportedMediaType|
|StatusCode|RequestedRangeNotSatisfiable|
|StatusCode|ExpectationFailed|
|StatusCode|UpgradeRequired|
|StatusCode|InternalServerError|
|StatusCode|NotImplemented|
|StatusCode|BadGateway|
|StatusCode|ServiceUnavailable|
|StatusCode|GatewayTimeout|
|StatusCode|HttpVersionNotSupported|

<h2 id="tocS_MemberForDate">MemberForDate</h2>
<!-- backwards compatibility -->
<a id="schemamemberfordate"></a>
<a id="schema_MemberForDate"></a>
<a id="tocSmemberfordate"></a>
<a id="tocsmemberfordate"></a>

```json
{
  "Constituency": "string",
  "ListAs": "string",
  "MnisId": 0,
  "Name": "string",
  "Party": "string",
  "PartyColour": "string",
  "PartyId": 0,
  "PhotoUrl": "string",
  "PimsId": 0,
  "Status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Constituency|string|false|none|none|
|ListAs|string|false|none|none|
|MnisId|integer(int32)|false|none|none|
|Name|string|false|none|none|
|Party|string|false|none|none|
|PartyColour|string|false|none|none|
|PartyId|integer(int32)|false|none|none|
|PhotoUrl|string|false|read-only|none|
|PimsId|integer(int32)|false|none|none|
|Status|string|false|none|none|

<h2 id="tocS_PagingInfo">PagingInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo"></a>
<a id="schema_PagingInfo"></a>
<a id="tocSpaginginfo"></a>
<a id="tocspaginginfo"></a>

```json
{
  "GlobalStatusCounts": [
    {
      "Count": 0,
      "StatusId": 0
    }
  ],
  "GlobalTotal": 0,
  "Skip": 0,
  "StatusCounts": [
    {
      "Count": 0,
      "StatusId": 0
    }
  ],
  "Take": 0,
  "Total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlobalStatusCounts|[[StatusCount](#schemastatuscount)]|false|none|none|
|GlobalTotal|integer(int32)|false|none|none|
|Skip|integer(int32)|false|none|none|
|StatusCounts|[[StatusCount](#schemastatuscount)]|false|none|none|
|Take|integer(int32)|false|none|none|
|Total|integer(int32)|false|none|none|

<h2 id="tocS_PublishedEarlyDayMotion">PublishedEarlyDayMotion</h2>
<!-- backwards compatibility -->
<a id="schemapublishedearlydaymotion"></a>
<a id="schema_PublishedEarlyDayMotion"></a>
<a id="tocSpublishedearlydaymotion"></a>
<a id="tocspublishedearlydaymotion"></a>

```json
{
  "AmendmentSuffix": "string",
  "AmendmentToMotionId": 0,
  "DateTabled": "1970-01-01T00:00:00Z",
  "Id": 0,
  "MemberId": 0,
  "MotionText": "string",
  "PrayingAgainstNegativeStatutoryInstrumentId": 0,
  "PrimarySponsor": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "SponsorsCount": 0,
  "Status": "Published",
  "StatusDate": "1970-01-01T00:00:00Z",
  "StatutoryInstrumentNumber": 0,
  "StatutoryInstrumentTitle": "string",
  "StatutoryInstrumentYear": "string",
  "Title": "string",
  "UIN": 0,
  "UINWithAmendmentSuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmendmentSuffix|string|false|none|none|
|AmendmentToMotionId|integer(int32)|false|none|none|
|DateTabled|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|MemberId|integer(int32)|false|none|none|
|MotionText|string|false|none|none|
|PrayingAgainstNegativeStatutoryInstrumentId|integer(int32)|false|none|none|
|PrimarySponsor|[MemberForDate](#schemamemberfordate)|false|none|none|
|SponsorsCount|integer(int32)|false|none|none|
|Status|string|false|none|none|
|StatusDate|string(date-time)|false|none|none|
|StatutoryInstrumentNumber|integer(int32)|false|none|none|
|StatutoryInstrumentTitle|string|false|none|none|
|StatutoryInstrumentYear|string|false|none|none|
|Title|string|false|none|none|
|UIN|integer(int32)|false|none|none|
|UINWithAmendmentSuffix|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Published|
|Status|Withdrawn|

<h2 id="tocS_PublishedEarlyDayMotionDetails">PublishedEarlyDayMotionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublishedearlydaymotiondetails"></a>
<a id="schema_PublishedEarlyDayMotionDetails"></a>
<a id="tocSpublishedearlydaymotiondetails"></a>
<a id="tocspublishedearlydaymotiondetails"></a>

```json
{
  "AmendmentSuffix": "string",
  "AmendmentToMotionId": 0,
  "Amendments": [
    {
      "AmendmentSuffix": "string",
      "AmendmentToMotionId": 0,
      "Amendments": [
        {}
      ],
      "DateTabled": "1970-01-01T00:00:00Z",
      "Id": 0,
      "MemberId": 0,
      "MotionText": "string",
      "PrayingAgainstNegativeStatutoryInstrumentId": 0,
      "PrimarySponsor": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "Sponsors": [
        {
          "CreatedWhen": "1970-01-01T00:00:00Z",
          "Id": 0,
          "IsWithdrawn": true,
          "Member": {
            "Constituency": "string",
            "ListAs": "string",
            "MnisId": 0,
            "Name": "string",
            "Party": "string",
            "PartyColour": "string",
            "PartyId": 0,
            "PhotoUrl": "string",
            "PimsId": 0,
            "Status": "string"
          },
          "MemberId": 0,
          "SponsoringOrder": 0,
          "WithdrawnDate": "1970-01-01T00:00:00Z"
        }
      ],
      "SponsorsCount": 0,
      "Status": "Published",
      "StatusDate": "1970-01-01T00:00:00Z",
      "StatutoryInstrumentNumber": 0,
      "StatutoryInstrumentTitle": "string",
      "StatutoryInstrumentYear": "string",
      "Title": "string",
      "UIN": 0,
      "UINWithAmendmentSuffix": "string"
    }
  ],
  "DateTabled": "1970-01-01T00:00:00Z",
  "Id": 0,
  "MemberId": 0,
  "MotionText": "string",
  "PrayingAgainstNegativeStatutoryInstrumentId": 0,
  "PrimarySponsor": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "Sponsors": [
    {
      "CreatedWhen": "1970-01-01T00:00:00Z",
      "Id": 0,
      "IsWithdrawn": true,
      "Member": {
        "Constituency": "string",
        "ListAs": "string",
        "MnisId": 0,
        "Name": "string",
        "Party": "string",
        "PartyColour": "string",
        "PartyId": 0,
        "PhotoUrl": "string",
        "PimsId": 0,
        "Status": "string"
      },
      "MemberId": 0,
      "SponsoringOrder": 0,
      "WithdrawnDate": "1970-01-01T00:00:00Z"
    }
  ],
  "SponsorsCount": 0,
  "Status": "Published",
  "StatusDate": "1970-01-01T00:00:00Z",
  "StatutoryInstrumentNumber": 0,
  "StatutoryInstrumentTitle": "string",
  "StatutoryInstrumentYear": "string",
  "Title": "string",
  "UIN": 0,
  "UINWithAmendmentSuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AmendmentSuffix|string|false|none|none|
|AmendmentToMotionId|integer(int32)|false|none|none|
|Amendments|[[PublishedEarlyDayMotionDetails](#schemapublishedearlydaymotiondetails)]|false|none|none|
|DateTabled|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|MemberId|integer(int32)|false|none|none|
|MotionText|string|false|none|none|
|PrayingAgainstNegativeStatutoryInstrumentId|integer(int32)|false|none|none|
|PrimarySponsor|[MemberForDate](#schemamemberfordate)|false|none|none|
|Sponsors|[[PublishedEarlyDayMotionSponsor](#schemapublishedearlydaymotionsponsor)]|false|none|none|
|SponsorsCount|integer(int32)|false|none|none|
|Status|string|false|none|none|
|StatusDate|string(date-time)|false|none|none|
|StatutoryInstrumentNumber|integer(int32)|false|none|none|
|StatutoryInstrumentTitle|string|false|none|none|
|StatutoryInstrumentYear|string|false|none|none|
|Title|string|false|none|none|
|UIN|integer(int32)|false|none|none|
|UINWithAmendmentSuffix|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Published|
|Status|Withdrawn|

<h2 id="tocS_PublishedEarlyDayMotionQueryParameters">PublishedEarlyDayMotionQueryParameters</h2>
<!-- backwards compatibility -->
<a id="schemapublishedearlydaymotionqueryparameters"></a>
<a id="schema_PublishedEarlyDayMotionQueryParameters"></a>
<a id="tocSpublishedearlydaymotionqueryparameters"></a>
<a id="tocspublishedearlydaymotionqueryparameters"></a>

```json
{
  "CurrentStatusDateEnd": "1970-01-01T00:00:00Z",
  "CurrentStatusDateStart": "1970-01-01T00:00:00Z",
  "EdmIds": [
    0
  ],
  "IncludeSponsoredByMember": true,
  "IsPrayer": true,
  "MemberId": 0,
  "OrderBy": "DateTabledAsc",
  "SearchTerm": "string",
  "Skip": 0,
  "Statuses": [
    "Published"
  ],
  "TabledEndDate": "1970-01-01T00:00:00Z",
  "TabledStartDate": "1970-01-01T00:00:00Z",
  "Take": 0,
  "UINWithAmendmentSuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentStatusDateEnd|string(date-time)|false|none|Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.|
|CurrentStatusDateStart|string(date-time)|false|none|Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.|
|EdmIds|[integer(int32)]|false|none|Early Day Motions with an ID in the list provided.|
|IncludeSponsoredByMember|boolean|false|none|Include Early Day Motions sponsored by Member specified|
|IsPrayer|boolean|false|none|Early Day Motions which are a prayer against a Negative Statutory Instrument.|
|MemberId|integer(int32)|false|none|Return Early Day Motions tabled by Member with ID provided.|
|OrderBy|string|false|none|Order results by date tabled, title or signature count. Default is date tabled.|
|SearchTerm|string|false|none|Early Day Motions where the title includes the search term provided.|
|Skip|integer(int32)|false|none|The number of records to skip from the first, default is 0.|
|Statuses|[string]|false|none|Early Day Motions where current status is in the selected list.|
|TabledEndDate|string(date-time)|false|none|Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.|
|TabledStartDate|string(date-time)|false|none|Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.|
|Take|integer(int32)|false|none|The number of records to return, default is 25, maximum is 100.|
|UINWithAmendmentSuffix|string|false|none|Early Day Motions with an UINWithAmendmentSuffix provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|OrderBy|DateTabledAsc|
|OrderBy|DateTabledDesc|
|OrderBy|TitleAsc|
|OrderBy|TitleDesc|
|OrderBy|SignatureCountAsc|
|OrderBy|SignatureCountDesc|
|Statuses|Published|
|Statuses|Withdrawn|

<h2 id="tocS_PublishedEarlyDayMotionSponsor">PublishedEarlyDayMotionSponsor</h2>
<!-- backwards compatibility -->
<a id="schemapublishedearlydaymotionsponsor"></a>
<a id="schema_PublishedEarlyDayMotionSponsor"></a>
<a id="tocSpublishedearlydaymotionsponsor"></a>
<a id="tocspublishedearlydaymotionsponsor"></a>

```json
{
  "CreatedWhen": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IsWithdrawn": true,
  "Member": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "MemberId": 0,
  "SponsoringOrder": 0,
  "WithdrawnDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedWhen|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|IsWithdrawn|boolean|false|none|none|
|Member|[MemberForDate](#schemamemberfordate)|false|none|none|
|MemberId|integer(int32)|false|none|none|
|SponsoringOrder|integer(int32)|false|none|none|
|WithdrawnDate|string(date-time)|false|none|none|

<h2 id="tocS_PublishedOralQuestion">PublishedOralQuestion</h2>
<!-- backwards compatibility -->
<a id="schemapublishedoralquestion"></a>
<a id="schema_PublishedOralQuestion"></a>
<a id="tocSpublishedoralquestion"></a>
<a id="tocspublishedoralquestion"></a>

```json
{
  "AnsweringBody": "string",
  "AnsweringBodyId": 0,
  "AnsweringMinister": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "AnsweringMinisterId": 0,
  "AnsweringMinisterTitle": "string",
  "AnsweringWhen": "1970-01-01T00:00:00Z",
  "AskingMember": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "AskingMemberId": 0,
  "DeclarableInterestDetail": "string",
  "HansardLink": "string",
  "Id": 0,
  "Number": 0,
  "QuestionText": "string",
  "QuestionType": "Substantive",
  "RemovedFromToBeAskedWhen": "1970-01-01T00:00:00Z",
  "Status": "Submitted",
  "TabledWhen": "1970-01-01T00:00:00Z",
  "UIN": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnsweringBody|string|false|none|none|
|AnsweringBodyId|integer(int32)|false|none|none|
|AnsweringMinister|[MemberForDate](#schemamemberfordate)|false|none|none|
|AnsweringMinisterId|integer(int32)|false|none|none|
|AnsweringMinisterTitle|string|false|none|none|
|AnsweringWhen|string(date-time)|false|none|none|
|AskingMember|[MemberForDate](#schemamemberfordate)|false|none|none|
|AskingMemberId|integer(int32)|false|none|none|
|DeclarableInterestDetail|string|false|none|none|
|HansardLink|string|false|none|none|
|Id|integer(int32)|false|none|none|
|Number|integer(int32)|false|none|none|
|QuestionText|string|false|none|none|
|QuestionType|string|false|none|none|
|RemovedFromToBeAskedWhen|string(date-time)|false|none|none|
|Status|string|false|none|none|
|TabledWhen|string(date-time)|false|none|none|
|UIN|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|QuestionType|Substantive|
|QuestionType|Topical|
|Status|Submitted|
|Status|Carded|
|Status|Unsaved|
|Status|ReadyForShuffle|
|Status|ToBeAsked|
|Status|ShuffleUnsuccessful|
|Status|Withdrawn|
|Status|Unstarred|
|Status|Draft|
|Status|ForReview|
|Status|Unasked|
|Status|Transferred|

<h2 id="tocS_PublishedOralQuestionQueryParameters">PublishedOralQuestionQueryParameters</h2>
<!-- backwards compatibility -->
<a id="schemapublishedoralquestionqueryparameters"></a>
<a id="schema_PublishedOralQuestionQueryParameters"></a>
<a id="tocSpublishedoralquestionqueryparameters"></a>
<a id="tocspublishedoralquestionqueryparameters"></a>

```json
{
  "AnsweringBodyIds": [
    0
  ],
  "AnsweringDateEnd": "1970-01-01T00:00:00Z",
  "AnsweringDateStart": "1970-01-01T00:00:00Z",
  "AskingMemberIds": [
    0
  ],
  "OralQuestionTimeId": 0,
  "QuestionType": "Substantive",
  "Skip": 0,
  "Take": 0,
  "UINs": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnsweringBodyIds|[integer(int32)]|false|none|Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.|
|AnsweringDateEnd|string(date-time)|false|none|Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.|
|AnsweringDateStart|string(date-time)|false|none|Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.|
|AskingMemberIds|[integer(int32)]|false|none|The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.|
|OralQuestionTimeId|integer(int32)|false|none|Oral Questions where the question is within the question time with the ID provided|
|QuestionType|string|false|none|Oral Questions where the question type is the selected type, substantive or topical.|
|Skip|integer(int32)|false|none|The number of records to skip from the first, default is 0.|
|Take|integer(int32)|false|none|The number of records to return, default is 25, maximum is 100.|
|UINs|[integer(int32)]|false|none|The UIN for the question - note that UINs reset at the start of each Parliamentary session.|

#### Enumerated Values

|Property|Value|
|---|---|
|QuestionType|Substantive|
|QuestionType|Topical|

<h2 id="tocS_PublishedOralQuestionTime">PublishedOralQuestionTime</h2>
<!-- backwards compatibility -->
<a id="schemapublishedoralquestiontime"></a>
<a id="schema_PublishedOralQuestionTime"></a>
<a id="tocSpublishedoralquestiontime"></a>
<a id="tocspublishedoralquestiontime"></a>

```json
{
  "AnsweringBodyNames": "string",
  "AnsweringMinisterTitles": "string",
  "AnsweringWhen": "1970-01-01T00:00:00Z",
  "DeadlineWhen": "1970-01-01T00:00:00Z",
  "Id": 0,
  "SubstantiveTime": "string",
  "TopicalTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnsweringBodyNames|string|false|read-only|none|
|AnsweringMinisterTitles|string|false|read-only|none|
|AnsweringWhen|string(date-time)|false|none|none|
|DeadlineWhen|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|SubstantiveTime|string|false|none|none|
|TopicalTime|string|false|none|none|

<h2 id="tocS_PublishedOralQuestionTimeQueryParameters">PublishedOralQuestionTimeQueryParameters</h2>
<!-- backwards compatibility -->
<a id="schemapublishedoralquestiontimequeryparameters"></a>
<a id="schema_PublishedOralQuestionTimeQueryParameters"></a>
<a id="tocSpublishedoralquestiontimequeryparameters"></a>
<a id="tocspublishedoralquestiontimequeryparameters"></a>

```json
{
  "AnsweringBodyIds": [
    0
  ],
  "AnsweringDateEnd": "1970-01-01T00:00:00Z",
  "AnsweringDateStart": "1970-01-01T00:00:00Z",
  "DeadlineDateEnd": "1970-01-01T00:00:00Z",
  "DeadlineDateStart": "1970-01-01T00:00:00Z",
  "OralQuestionTimeId": 0,
  "Skip": 0,
  "Take": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnsweringBodyIds|[integer(int32)]|false|none|Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.|
|AnsweringDateEnd|string(date-time)|false|none|Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.|
|AnsweringDateStart|string(date-time)|false|none|Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.|
|DeadlineDateEnd|string(date-time)|false|none|Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.|
|DeadlineDateStart|string(date-time)|false|none|Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.|
|OralQuestionTimeId|integer(int32)|false|none|Identifier of the OQT|
|Skip|integer(int32)|false|none|The number of records to skip from the first, default is 0.|
|Take|integer(int32)|false|none|The number of records to return, default is 25, maximum is 100.|

<h2 id="tocS_PublishedWrittenQuestion">PublishedWrittenQuestion</h2>
<!-- backwards compatibility -->
<a id="schemapublishedwrittenquestion"></a>
<a id="schema_PublishedWrittenQuestion"></a>
<a id="tocSpublishedwrittenquestion"></a>
<a id="tocspublishedwrittenquestion"></a>

```json
{
  "Answer": "string",
  "AnsweredWhen": "1970-01-01T00:00:00Z",
  "AnsweringBody": "string",
  "AnsweringBodyId": 0,
  "AnsweringMinister": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "AnsweringMinisterId": 0,
  "AnsweringMinisterTitle": "string",
  "AskingMember": {
    "Constituency": "string",
    "ListAs": "string",
    "MnisId": 0,
    "Name": "string",
    "Party": "string",
    "PartyColour": "string",
    "PartyId": 0,
    "PhotoUrl": "string",
    "PimsId": 0,
    "Status": "string"
  },
  "AskingMemberId": 0,
  "DueForAnswer": "1970-01-01T00:00:00Z",
  "Id": 0,
  "QuestionText": "string",
  "QuestionType": "NamedDay",
  "TabledWhen": "1970-01-01T00:00:00Z",
  "UIN": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Answer|string|false|none|none|
|AnsweredWhen|string(date-time)|false|none|none|
|AnsweringBody|string|false|none|none|
|AnsweringBodyId|integer(int32)|false|none|none|
|AnsweringMinister|[MemberForDate](#schemamemberfordate)|false|none|none|
|AnsweringMinisterId|integer(int32)|false|none|none|
|AnsweringMinisterTitle|string|false|none|none|
|AskingMember|[MemberForDate](#schemamemberfordate)|false|none|none|
|AskingMemberId|integer(int32)|false|none|none|
|DueForAnswer|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|QuestionText|string|false|none|none|
|QuestionType|string|false|none|none|
|TabledWhen|string(date-time)|false|none|none|
|UIN|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|QuestionType|NamedDay|
|QuestionType|Ordinary|

<h2 id="tocS_StatusCount">StatusCount</h2>
<!-- backwards compatibility -->
<a id="schemastatuscount"></a>
<a id="schema_StatusCount"></a>
<a id="tocSstatuscount"></a>
<a id="tocsstatuscount"></a>

```json
{
  "Count": 0,
  "StatusId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|none|none|
|StatusId|integer(int32)|false|none|none|
