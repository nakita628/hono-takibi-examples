<h1 id="written-questions-service-api">Written Questions Service API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Data around written questions and answers, as well as written ministerial statements.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="written-questions-service-api-dailyreports">DailyReports</h1>

## Returns a list of daily reports

> Code samples

```bash
curl https://example.com/api/dailyreports/dailyreports \
  -H 'Accept: application/json'
```

`GET /api/dailyreports/dailyreports`

<h3 id="returns-a-list-of-daily-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dateFrom|query|string(date-time) \| null|false|Daily report with report date on or after the date specified. Date format yyyy-mm-dd|
|dateTo|query|string(date-time) \| null|false|Daily report with report date on or before the date specified. Date format yyyy-mm-dd|
|house|query|[HouseEnum](#schemahouseenum)|false|Daily report relating to the House specified. Defaults to Bicameral|
|skip|query|integer(int32) \| null|false|Number of records to skip, default is 0|
|take|query|integer(int32) \| null|false|Number of records to take, default is 20|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|Bicameral|
|house|Commons|
|house|Lords|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "date": "1970-01-01T00:00:00Z",
        "fileSizeBytes": 0,
        "house": "Bicameral",
        "url": "string"
      }
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-list-of-daily-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DailyReportViewModelSearchResult](#schemadailyreportviewmodelsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="written-questions-service-api-writtenquestions">WrittenQuestions</h1>

## Returns a list of written questions

> Code samples

```bash
curl https://example.com/api/writtenquestions/questions \
  -H 'Accept: application/json'
```

`GET /api/writtenquestions/questions`

<h3 id="returns-a-list-of-written-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|askingMemberId|query|integer(int32) \| null|false|Written questions asked by member with member ID specified|
|answeringMemberId|query|integer(int32) \| null|false|Written questions answered by member with member ID specified|
|tabledWhenFrom|query|string(date-time) \| null|false|Written questions tabled on or after the date specified. Date format yyyy-mm-dd|
|tabledWhenTo|query|string(date-time) \| null|false|Written questions tabled on or before the date specified. Date format yyyy-mm-dd|
|answered|query|[Answered](#schemaanswered)|false|Written questions that have been answered, unanswered or either.|
|answeredWhenFrom|query|string(date-time) \| null|false|Written questions answered on or after the date specified. Date format yyyy-mm-dd|
|answeredWhenTo|query|string(date-time) \| null|false|Written questions answered on or before the date specified. Date format yyyy-mm-dd|
|questionStatus|query|[QuestionStatusEnum](#schemaquestionstatusenum)|false|Written questions with the status specified|
|includeWithdrawn|query|boolean|false|Include written questions that have been withdrawn|
|expandMember|query|boolean|false|Expand the details of Members in the results|
|correctedWhenFrom|query|string(date-time) \| null|false|Written questions corrected on or after the date specified. Date format yyyy-mm-dd|
|correctedWhenTo|query|string(date-time) \| null|false|Written questions corrected on or before the date specified. Date format yyyy-mm-dd|
|searchTerm|query|string \| null|false|Written questions / statements containing the search term specified, searches item content|
|uIN|query|string \| null|false|Written questions / statements with the uin specified|
|answeringBodies|query|[integer(int32)]|false|Written questions / statements relating to the answering bodies with the IDs specified|
|members|query|[integer(int32)]|false|Written questions / statements relating to the members with the IDs specified|
|house|query|[HouseEnum](#schemahouseenum)|false|Written questions / statements relating to the House specified|
|skip|query|integer(int32) \| null|false|Number of records to skip, default is 0|
|take|query|integer(int32) \| null|false|Number of records to take, default is 20|

#### Enumerated Values

|Parameter|Value|
|---|---|
|answered|Any|
|answered|Answered|
|answered|Unanswered|
|questionStatus|NotAnswered|
|questionStatus|AnsweredOnly|
|questionStatus|AllQuestions|
|house|Bicameral|
|house|Commons|
|house|Lords|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerIsCorrection": true,
        "answerIsHolding": true,
        "answerText": "string",
        "answeringBodyId": 0,
        "answeringBodyName": "string",
        "answeringMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "answeringMemberId": 0,
        "askingMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "askingMemberId": 0,
        "attachmentCount": 0,
        "attachments": [
          {
            "fileSizeBytes": 0,
            "fileType": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "comparableAnswerText": "string",
        "correctingMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "correctingMemberId": 0,
        "dateAnswerCorrected": "1970-01-01T00:00:00Z",
        "dateAnswered": "1970-01-01T00:00:00Z",
        "dateForAnswer": "1970-01-01T00:00:00Z",
        "dateHoldingAnswer": "1970-01-01T00:00:00Z",
        "dateTabled": "1970-01-01T00:00:00Z",
        "groupedQuestions": [
          "string"
        ],
        "groupedQuestionsDates": [
          {
            "dateTabled": "1970-01-01T00:00:00Z",
            "questionUin": "string"
          }
        ],
        "heading": "string",
        "house": "Bicameral",
        "id": 0,
        "isNamedDay": true,
        "isWithdrawn": true,
        "memberHasInterest": true,
        "originalAnswerText": "string",
        "questionText": "string",
        "uin": "string"
      }
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-list-of-written-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QuestionsViewModelSearchResult](#schemaquestionsviewmodelsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a written question

> Code samples

```bash
curl https://example.com/api/writtenquestions/questions/1970-01-01T00%3A00%3A00Z/string \
  -H 'Accept: application/json'
```

`GET /api/writtenquestions/questions/{date}/{uin}`

<h3 id="returns-a-written-question-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string(date-time)|true|Written question on date specified|
|uin|path|string \| null|true|Written question with uid specified|
|expandMember|query|boolean|false|Expand the details of Members in the results|

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
    "answerIsCorrection": true,
    "answerIsHolding": true,
    "answerText": "string",
    "answeringBodyId": 0,
    "answeringBodyName": "string",
    "answeringMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "answeringMemberId": 0,
    "askingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "askingMemberId": 0,
    "attachmentCount": 0,
    "attachments": [
      {
        "fileSizeBytes": 0,
        "fileType": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "comparableAnswerText": "string",
    "correctingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "correctingMemberId": 0,
    "dateAnswerCorrected": "1970-01-01T00:00:00Z",
    "dateAnswered": "1970-01-01T00:00:00Z",
    "dateForAnswer": "1970-01-01T00:00:00Z",
    "dateHoldingAnswer": "1970-01-01T00:00:00Z",
    "dateTabled": "1970-01-01T00:00:00Z",
    "groupedQuestions": [
      "string"
    ],
    "groupedQuestionsDates": [
      {
        "dateTabled": "1970-01-01T00:00:00Z",
        "questionUin": "string"
      }
    ],
    "heading": "string",
    "house": "Bicameral",
    "id": 0,
    "isNamedDay": true,
    "isWithdrawn": true,
    "memberHasInterest": true,
    "originalAnswerText": "string",
    "questionText": "string",
    "uin": "string"
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
  "property1": {},
  "property2": {}
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-written-question-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QuestionsViewModelItem](#schemaquestionsviewmodelitem)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a written question

> Code samples

```bash
curl https://example.com/api/writtenquestions/questions/0 \
  -H 'Accept: application/json'
```

`GET /api/writtenquestions/questions/{id}`

<h3 id="returns-a-written-question-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|written question with ID specified|
|expandMember|query|boolean|false|Expand the details of Members in the result|

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
    "answerIsCorrection": true,
    "answerIsHolding": true,
    "answerText": "string",
    "answeringBodyId": 0,
    "answeringBodyName": "string",
    "answeringMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "answeringMemberId": 0,
    "askingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "askingMemberId": 0,
    "attachmentCount": 0,
    "attachments": [
      {
        "fileSizeBytes": 0,
        "fileType": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "comparableAnswerText": "string",
    "correctingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "correctingMemberId": 0,
    "dateAnswerCorrected": "1970-01-01T00:00:00Z",
    "dateAnswered": "1970-01-01T00:00:00Z",
    "dateForAnswer": "1970-01-01T00:00:00Z",
    "dateHoldingAnswer": "1970-01-01T00:00:00Z",
    "dateTabled": "1970-01-01T00:00:00Z",
    "groupedQuestions": [
      "string"
    ],
    "groupedQuestionsDates": [
      {
        "dateTabled": "1970-01-01T00:00:00Z",
        "questionUin": "string"
      }
    ],
    "heading": "string",
    "house": "Bicameral",
    "id": 0,
    "isNamedDay": true,
    "isWithdrawn": true,
    "memberHasInterest": true,
    "originalAnswerText": "string",
    "questionText": "string",
    "uin": "string"
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
  "property1": {},
  "property2": {}
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-written-question-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QuestionsViewModelItem](#schemaquestionsviewmodelitem)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="written-questions-service-api-writtenstatements">WrittenStatements</h1>

## Returns a list of written statements

> Code samples

```bash
curl https://example.com/api/writtenstatements/statements \
  -H 'Accept: application/json'
```

`GET /api/writtenstatements/statements`

<h3 id="returns-a-list-of-written-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|madeWhenFrom|query|string(date-time) \| null|false|Written statements made on or after the date specified. Date format yyyy-mm-dd|
|madeWhenTo|query|string(date-time) \| null|false|Written statements made on or before the date specified. Date format yyyy-mm-dd|
|searchTerm|query|string \| null|false|Written questions / statements containing the search term specified, searches item content|
|uIN|query|string \| null|false|Written questions / statements with the uin specified|
|answeringBodies|query|[integer(int32)]|false|Written questions / statements relating to the answering bodies with the IDs specified|
|members|query|[integer(int32)]|false|Written questions / statements relating to the members with the IDs specified|
|house|query|[HouseEnum](#schemahouseenum)|false|Written questions / statements relating to the House specified|
|skip|query|integer(int32) \| null|false|Number of records to skip, default is 0|
|take|query|integer(int32) \| null|false|Number of records to take, default is 20|
|expandMember|query|boolean|false|Expand the details of Members in the results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|house|Bicameral|
|house|Commons|
|house|Lords|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answeringBodyId": 0,
        "answeringBodyName": "string",
        "attachments": [
          {
            "fileSizeBytes": 0,
            "fileType": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "dateMade": "1970-01-01T00:00:00Z",
        "hasAttachments": true,
        "hasLinkedStatements": true,
        "house": "Bicameral",
        "id": 0,
        "linkedStatements": [
          {
            "linkDate": "1970-01-01T00:00:00Z",
            "linkType": "CorrectedStatement",
            "linkedStatementId": 0
          }
        ],
        "member": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "memberId": 0,
        "memberRole": "string",
        "noticeNumber": 0,
        "text": "string",
        "title": "string",
        "uin": "string"
      }
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-list-of-written-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StatementsViewModelSearchResult](#schemastatementsviewmodelsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a written statemnet

> Code samples

```bash
curl https://example.com/api/writtenstatements/statements/1970-01-01T00%3A00%3A00Z/string \
  -H 'Accept: application/json'
```

`GET /api/writtenstatements/statements/{date}/{uin}`

<h3 id="returns-a-written-statemnet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string(date-time)|true|Written statement on date specified|
|uin|path|string \| null|true|Written statement with uid specified|
|expandMember|query|boolean|false|Expand the details of Members in the results|

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
    "answeringBodyId": 0,
    "answeringBodyName": "string",
    "attachments": [
      {
        "fileSizeBytes": 0,
        "fileType": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "dateMade": "1970-01-01T00:00:00Z",
    "hasAttachments": true,
    "hasLinkedStatements": true,
    "house": "Bicameral",
    "id": 0,
    "linkedStatements": [
      {
        "linkDate": "1970-01-01T00:00:00Z",
        "linkType": "CorrectedStatement",
        "linkedStatementId": 0
      }
    ],
    "member": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "memberId": 0,
    "memberRole": "string",
    "noticeNumber": 0,
    "text": "string",
    "title": "string",
    "uin": "string"
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
  "property1": {},
  "property2": {}
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-written-statemnet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StatementsViewModelItem](#schemastatementsviewmodelitem)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a written statement

> Code samples

```bash
curl https://example.com/api/writtenstatements/statements/0 \
  -H 'Accept: application/json'
```

`GET /api/writtenstatements/statements/{id}`

<h3 id="returns-a-written-statement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Written statement with ID specified|
|expandMember|query|boolean|false|Expand the details of Members in the results|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answeringBodyId": 0,
        "answeringBodyName": "string",
        "attachments": [
          {
            "fileSizeBytes": 0,
            "fileType": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "dateMade": "1970-01-01T00:00:00Z",
        "hasAttachments": true,
        "hasLinkedStatements": true,
        "house": "Bicameral",
        "id": 0,
        "linkedStatements": [
          {
            "linkDate": "1970-01-01T00:00:00Z",
            "linkType": "CorrectedStatement",
            "linkedStatementId": 0
          }
        ],
        "member": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "memberId": 0,
        "memberRole": "string",
        "noticeNumber": 0,
        "text": "string",
        "title": "string",
        "uin": "string"
      }
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
  "property1": {},
  "property2": {}
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
  "property1": {},
  "property2": {}
}
```

<h3 id="returns-a-written-statement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StatementsViewModelSearchResult](#schemastatementsviewmodelsearchresult)|
|400|Bad Request|Bad Request|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Answered">Answered</h2>
<!-- backwards compatibility -->
<a id="schemaanswered"></a>
<a id="schema_Answered"></a>
<a id="tocSanswered"></a>
<a id="tocsanswered"></a>

```json
"Any"
```

<h2 id="tocS_AttachmentViewModel">AttachmentViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentviewmodel"></a>
<a id="schema_AttachmentViewModel"></a>
<a id="tocSattachmentviewmodel"></a>
<a id="tocsattachmentviewmodel"></a>

```json
{
  "fileSizeBytes": 0,
  "fileType": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSizeBytes|integer(int64)|false|none|none|
|fileType|string \| null|false|none|none|
|title|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_DailyReportViewModel">DailyReportViewModel</h2>
<!-- backwards compatibility -->
<a id="schemadailyreportviewmodel"></a>
<a id="schema_DailyReportViewModel"></a>
<a id="tocSdailyreportviewmodel"></a>
<a id="tocsdailyreportviewmodel"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "fileSizeBytes": 0,
  "house": "Bicameral",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|none|
|fileSizeBytes|integer(int64)|false|none|none|
|house|[HouseEnum](#schemahouseenum)|false|none|none|
|url|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|Bicameral|
|house|Commons|
|house|Lords|

<h2 id="tocS_DailyReportViewModelItem">DailyReportViewModelItem</h2>
<!-- backwards compatibility -->
<a id="schemadailyreportviewmodelitem"></a>
<a id="schema_DailyReportViewModelItem"></a>
<a id="tocSdailyreportviewmodelitem"></a>
<a id="tocsdailyreportviewmodelitem"></a>

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
    "date": "1970-01-01T00:00:00Z",
    "fileSizeBytes": 0,
    "house": "Bicameral",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[DailyReportViewModel](#schemadailyreportviewmodel)|false|none|none|

<h2 id="tocS_DailyReportViewModelSearchResult">DailyReportViewModelSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemadailyreportviewmodelsearchresult"></a>
<a id="schema_DailyReportViewModelSearchResult"></a>
<a id="tocSdailyreportviewmodelsearchresult"></a>
<a id="tocsdailyreportviewmodelsearchresult"></a>

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "date": "1970-01-01T00:00:00Z",
        "fileSizeBytes": 0,
        "house": "Bicameral",
        "url": "string"
      }
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DailyReportViewModelItem](#schemadailyreportviewmodelitem)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_GroupedQuestionViewModel">GroupedQuestionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemagroupedquestionviewmodel"></a>
<a id="schema_GroupedQuestionViewModel"></a>
<a id="tocSgroupedquestionviewmodel"></a>
<a id="tocsgroupedquestionviewmodel"></a>

```json
{
  "dateTabled": "1970-01-01T00:00:00Z",
  "questionUin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTabled|string(date-time)|false|none|none|
|questionUin|string \| null|false|none|none|

<h2 id="tocS_HouseEnum">HouseEnum</h2>
<!-- backwards compatibility -->
<a id="schemahouseenum"></a>
<a id="schema_HouseEnum"></a>
<a id="tocShouseenum"></a>
<a id="tocshouseenum"></a>

```json
"Bicameral"
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

<h2 id="tocS_LinkedStatements">LinkedStatements</h2>
<!-- backwards compatibility -->
<a id="schemalinkedstatements"></a>
<a id="schema_LinkedStatements"></a>
<a id="tocSlinkedstatements"></a>
<a id="tocslinkedstatements"></a>

```json
{
  "linkDate": "1970-01-01T00:00:00Z",
  "linkType": "CorrectedStatement",
  "linkedStatementId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkDate|string(date-time)|false|none|none|
|linkType|[StatementLinkTypeEnum](#schemastatementlinktypeenum)|false|none|none|
|linkedStatementId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|linkType|CorrectedStatement|
|linkType|CorrectedAnswer|
|linkType|JointStatement|

<h2 id="tocS_MemberViewModel">MemberViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamemberviewmodel"></a>
<a id="schema_MemberViewModel"></a>
<a id="tocSmemberviewmodel"></a>
<a id="tocsmemberviewmodel"></a>

```json
{
  "id": 0,
  "listAs": "string",
  "memberFrom": "string",
  "name": "string",
  "party": "string",
  "partyAbbreviation": "string",
  "partyColour": "string",
  "thumbnailUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|listAs|string \| null|false|none|none|
|memberFrom|string \| null|false|none|none|
|name|string \| null|false|none|none|
|party|string \| null|false|none|none|
|partyAbbreviation|string \| null|false|none|none|
|partyColour|string \| null|false|none|none|
|thumbnailUrl|string \| null|false|none|none|

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
  "property1": {},
  "property2": {}
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

<h2 id="tocS_QuestionStatusEnum">QuestionStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaquestionstatusenum"></a>
<a id="schema_QuestionStatusEnum"></a>
<a id="tocSquestionstatusenum"></a>
<a id="tocsquestionstatusenum"></a>

```json
"NotAnswered"
```

<h2 id="tocS_QuestionsViewModel">QuestionsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaquestionsviewmodel"></a>
<a id="schema_QuestionsViewModel"></a>
<a id="tocSquestionsviewmodel"></a>
<a id="tocsquestionsviewmodel"></a>

```json
{
  "answerIsCorrection": true,
  "answerIsHolding": true,
  "answerText": "string",
  "answeringBodyId": 0,
  "answeringBodyName": "string",
  "answeringMember": {
    "id": 0,
    "listAs": "string",
    "memberFrom": "string",
    "name": "string",
    "party": "string",
    "partyAbbreviation": "string",
    "partyColour": "string",
    "thumbnailUrl": "string"
  },
  "answeringMemberId": 0,
  "askingMember": {
    "id": 0,
    "listAs": "string",
    "memberFrom": "string",
    "name": "string",
    "party": "string",
    "partyAbbreviation": "string",
    "partyColour": "string",
    "thumbnailUrl": "string"
  },
  "askingMemberId": 0,
  "attachmentCount": 0,
  "attachments": [
    {
      "fileSizeBytes": 0,
      "fileType": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "comparableAnswerText": "string",
  "correctingMember": {
    "id": 0,
    "listAs": "string",
    "memberFrom": "string",
    "name": "string",
    "party": "string",
    "partyAbbreviation": "string",
    "partyColour": "string",
    "thumbnailUrl": "string"
  },
  "correctingMemberId": 0,
  "dateAnswerCorrected": "1970-01-01T00:00:00Z",
  "dateAnswered": "1970-01-01T00:00:00Z",
  "dateForAnswer": "1970-01-01T00:00:00Z",
  "dateHoldingAnswer": "1970-01-01T00:00:00Z",
  "dateTabled": "1970-01-01T00:00:00Z",
  "groupedQuestions": [
    "string"
  ],
  "groupedQuestionsDates": [
    {
      "dateTabled": "1970-01-01T00:00:00Z",
      "questionUin": "string"
    }
  ],
  "heading": "string",
  "house": "Bicameral",
  "id": 0,
  "isNamedDay": true,
  "isWithdrawn": true,
  "memberHasInterest": true,
  "originalAnswerText": "string",
  "questionText": "string",
  "uin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answerIsCorrection|boolean \| null|false|none|none|
|answerIsHolding|boolean \| null|false|none|none|
|answerText|string \| null|false|none|none|
|answeringBodyId|integer(int32)|false|none|none|
|answeringBodyName|string \| null|false|none|none|
|answeringMember|[MemberViewModel](#schemamemberviewmodel)|false|none|none|
|answeringMemberId|integer(int32) \| null|false|none|none|
|askingMember|[MemberViewModel](#schemamemberviewmodel)|false|none|none|
|askingMemberId|integer(int32)|false|none|none|
|attachmentCount|integer(int32)|false|none|none|
|attachments|[[AttachmentViewModel](#schemaattachmentviewmodel)]|false|none|none|
|comparableAnswerText|string \| null|false|none|none|
|correctingMember|[MemberViewModel](#schemamemberviewmodel)|false|none|none|
|correctingMemberId|integer(int32) \| null|false|none|none|
|dateAnswerCorrected|string(date-time) \| null|false|none|none|
|dateAnswered|string(date-time) \| null|false|none|none|
|dateForAnswer|string(date-time)|false|none|none|
|dateHoldingAnswer|string(date-time) \| null|false|none|none|
|dateTabled|string(date-time)|false|none|none|
|groupedQuestions|[string]|false|none|none|
|groupedQuestionsDates|[[GroupedQuestionViewModel](#schemagroupedquestionviewmodel)]|false|none|none|
|heading|string \| null|false|none|none|
|house|[HouseEnum](#schemahouseenum)|false|none|none|
|id|integer(int32)|false|none|none|
|isNamedDay|boolean|false|none|none|
|isWithdrawn|boolean|false|none|none|
|memberHasInterest|boolean|false|none|none|
|originalAnswerText|string \| null|false|none|none|
|questionText|string \| null|false|none|none|
|uin|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|Bicameral|
|house|Commons|
|house|Lords|

<h2 id="tocS_QuestionsViewModelItem">QuestionsViewModelItem</h2>
<!-- backwards compatibility -->
<a id="schemaquestionsviewmodelitem"></a>
<a id="schema_QuestionsViewModelItem"></a>
<a id="tocSquestionsviewmodelitem"></a>
<a id="tocsquestionsviewmodelitem"></a>

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
    "answerIsCorrection": true,
    "answerIsHolding": true,
    "answerText": "string",
    "answeringBodyId": 0,
    "answeringBodyName": "string",
    "answeringMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "answeringMemberId": 0,
    "askingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "askingMemberId": 0,
    "attachmentCount": 0,
    "attachments": [
      {
        "fileSizeBytes": 0,
        "fileType": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "comparableAnswerText": "string",
    "correctingMember": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "correctingMemberId": 0,
    "dateAnswerCorrected": "1970-01-01T00:00:00Z",
    "dateAnswered": "1970-01-01T00:00:00Z",
    "dateForAnswer": "1970-01-01T00:00:00Z",
    "dateHoldingAnswer": "1970-01-01T00:00:00Z",
    "dateTabled": "1970-01-01T00:00:00Z",
    "groupedQuestions": [
      "string"
    ],
    "groupedQuestionsDates": [
      {
        "dateTabled": "1970-01-01T00:00:00Z",
        "questionUin": "string"
      }
    ],
    "heading": "string",
    "house": "Bicameral",
    "id": 0,
    "isNamedDay": true,
    "isWithdrawn": true,
    "memberHasInterest": true,
    "originalAnswerText": "string",
    "questionText": "string",
    "uin": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[QuestionsViewModel](#schemaquestionsviewmodel)|false|none|none|

<h2 id="tocS_QuestionsViewModelSearchResult">QuestionsViewModelSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaquestionsviewmodelsearchresult"></a>
<a id="schema_QuestionsViewModelSearchResult"></a>
<a id="tocSquestionsviewmodelsearchresult"></a>
<a id="tocsquestionsviewmodelsearchresult"></a>

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answerIsCorrection": true,
        "answerIsHolding": true,
        "answerText": "string",
        "answeringBodyId": 0,
        "answeringBodyName": "string",
        "answeringMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "answeringMemberId": 0,
        "askingMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "askingMemberId": 0,
        "attachmentCount": 0,
        "attachments": [
          {
            "fileSizeBytes": 0,
            "fileType": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "comparableAnswerText": "string",
        "correctingMember": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "correctingMemberId": 0,
        "dateAnswerCorrected": "1970-01-01T00:00:00Z",
        "dateAnswered": "1970-01-01T00:00:00Z",
        "dateForAnswer": "1970-01-01T00:00:00Z",
        "dateHoldingAnswer": "1970-01-01T00:00:00Z",
        "dateTabled": "1970-01-01T00:00:00Z",
        "groupedQuestions": [
          "string"
        ],
        "groupedQuestionsDates": [
          {
            "dateTabled": "1970-01-01T00:00:00Z",
            "questionUin": "string"
          }
        ],
        "heading": "string",
        "house": "Bicameral",
        "id": 0,
        "isNamedDay": true,
        "isWithdrawn": true,
        "memberHasInterest": true,
        "originalAnswerText": "string",
        "questionText": "string",
        "uin": "string"
      }
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[QuestionsViewModelItem](#schemaquestionsviewmodelitem)]|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_StatementLinkTypeEnum">StatementLinkTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemastatementlinktypeenum"></a>
<a id="schema_StatementLinkTypeEnum"></a>
<a id="tocSstatementlinktypeenum"></a>
<a id="tocsstatementlinktypeenum"></a>

```json
"CorrectedStatement"
```

<h2 id="tocS_StatementsViewModel">StatementsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemastatementsviewmodel"></a>
<a id="schema_StatementsViewModel"></a>
<a id="tocSstatementsviewmodel"></a>
<a id="tocsstatementsviewmodel"></a>

```json
{
  "answeringBodyId": 0,
  "answeringBodyName": "string",
  "attachments": [
    {
      "fileSizeBytes": 0,
      "fileType": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "dateMade": "1970-01-01T00:00:00Z",
  "hasAttachments": true,
  "hasLinkedStatements": true,
  "house": "Bicameral",
  "id": 0,
  "linkedStatements": [
    {
      "linkDate": "1970-01-01T00:00:00Z",
      "linkType": "CorrectedStatement",
      "linkedStatementId": 0
    }
  ],
  "member": {
    "id": 0,
    "listAs": "string",
    "memberFrom": "string",
    "name": "string",
    "party": "string",
    "partyAbbreviation": "string",
    "partyColour": "string",
    "thumbnailUrl": "string"
  },
  "memberId": 0,
  "memberRole": "string",
  "noticeNumber": 0,
  "text": "string",
  "title": "string",
  "uin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answeringBodyId|integer(int32)|false|none|none|
|answeringBodyName|string \| null|false|none|none|
|attachments|[[AttachmentViewModel](#schemaattachmentviewmodel)]|false|none|none|
|dateMade|string(date-time)|false|none|none|
|hasAttachments|boolean|false|none|none|
|hasLinkedStatements|boolean|false|none|none|
|house|[HouseEnum](#schemahouseenum)|false|none|none|
|id|integer(int32)|false|none|none|
|linkedStatements|[[LinkedStatements](#schemalinkedstatements)]|false|none|none|
|member|[MemberViewModel](#schemamemberviewmodel)|false|none|none|
|memberId|integer(int32)|false|none|none|
|memberRole|string \| null|false|none|none|
|noticeNumber|integer(int32)|false|none|none|
|text|string \| null|false|none|none|
|title|string \| null|false|none|none|
|uin|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|house|Bicameral|
|house|Commons|
|house|Lords|

<h2 id="tocS_StatementsViewModelItem">StatementsViewModelItem</h2>
<!-- backwards compatibility -->
<a id="schemastatementsviewmodelitem"></a>
<a id="schema_StatementsViewModelItem"></a>
<a id="tocSstatementsviewmodelitem"></a>
<a id="tocsstatementsviewmodelitem"></a>

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
    "answeringBodyId": 0,
    "answeringBodyName": "string",
    "attachments": [
      {
        "fileSizeBytes": 0,
        "fileType": "string",
        "title": "string",
        "url": "string"
      }
    ],
    "dateMade": "1970-01-01T00:00:00Z",
    "hasAttachments": true,
    "hasLinkedStatements": true,
    "house": "Bicameral",
    "id": 0,
    "linkedStatements": [
      {
        "linkDate": "1970-01-01T00:00:00Z",
        "linkType": "CorrectedStatement",
        "linkedStatementId": 0
      }
    ],
    "member": {
      "id": 0,
      "listAs": "string",
      "memberFrom": "string",
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "thumbnailUrl": "string"
    },
    "memberId": 0,
    "memberRole": "string",
    "noticeNumber": 0,
    "text": "string",
    "title": "string",
    "uin": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|none|
|value|[StatementsViewModel](#schemastatementsviewmodel)|false|none|none|

<h2 id="tocS_StatementsViewModelSearchResult">StatementsViewModelSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemastatementsviewmodelsearchresult"></a>
<a id="schema_StatementsViewModelSearchResult"></a>
<a id="tocSstatementsviewmodelsearchresult"></a>
<a id="tocsstatementsviewmodelsearchresult"></a>

```json
{
  "results": [
    {
      "links": [
        {
          "href": "string",
          "method": "string",
          "rel": "string"
        }
      ],
      "value": {
        "answeringBodyId": 0,
        "answeringBodyName": "string",
        "attachments": [
          {
            "fileSizeBytes": 0,
            "fileType": "string",
            "title": "string",
            "url": "string"
          }
        ],
        "dateMade": "1970-01-01T00:00:00Z",
        "hasAttachments": true,
        "hasLinkedStatements": true,
        "house": "Bicameral",
        "id": 0,
        "linkedStatements": [
          {
            "linkDate": "1970-01-01T00:00:00Z",
            "linkType": "CorrectedStatement",
            "linkedStatementId": 0
          }
        ],
        "member": {
          "id": 0,
          "listAs": "string",
          "memberFrom": "string",
          "name": "string",
          "party": "string",
          "partyAbbreviation": "string",
          "partyColour": "string",
          "thumbnailUrl": "string"
        },
        "memberId": 0,
        "memberRole": "string",
        "noticeNumber": 0,
        "text": "string",
        "title": "string",
        "uin": "string"
      }
    }
  ],
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[StatementsViewModelItem](#schemastatementsviewmodelitem)]|false|none|none|
|totalResults|integer(int32)|false|none|none|
