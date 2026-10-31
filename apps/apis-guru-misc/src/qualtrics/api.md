<h1 id="qualtrics-api">Qualtrics API v0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Work with Qualtrics surveys, distributions and response events

Base URLs:

* <a href="https://fra1.qualtrics.com/API/v3">https://fra1.qualtrics.com/API/v3</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-API-TOKEN**, in: header.

<h1 id="qualtrics-api-default">Default</h1>

## Create contact in mailing list

<a id="opIdCreateContactInMailinglist"></a>

> Code samples

```bash
curl https://example.com/directories/string/mailinglists/string/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "unsubscribed": true
  }'
```

`POST /directories/{DirectoryId}/mailinglists/{MailingListId}/contacts`

Creates a contact in a given mailing list

> Body parameter

```json
{
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "unsubscribed": true
}
```

<h3 id="create-contact-in-mailing-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DirectoryId|path|string|true|ID of the qualtrics directory to create the contact to|
|MailingListId|path|string|true|ID of the mailing list|
|body|body|[CreateContactInMailingList](#schemacreatecontactinmailinglist)|true|Contact data|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» unsubscribed|body|boolean|false|none|

<h3 id="create-contact-in-mailing-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - Contact created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get distributions for survey

<a id="opIdGetDistributions"></a>

> Code samples

```bash
curl 'https://example.com/distributions?surveyId=string' \
  -H 'Accept: application/json'
```

`GET /distributions`

Gets all distributions for a given survey

<h3 id="get-distributions-for-survey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surveyId|query|string|true|The survey for which to load the distributions|

> Example responses

> 200 Response

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "elements": [
      {
        "createdDate": "string",
        "customHeaders": {},
        "embeddedData": null,
        "headers": {
          "fromEmail": null,
          "fromName": null,
          "replyToEmail": null
        },
        "id": "string",
        "message": {
          "libraryId": null,
          "messageId": null,
          "messageText": null
        },
        "modifiedDate": "string",
        "organizationId": "string",
        "ownerId": "string",
        "parentDistributionId": null,
        "recipients": {
          "contactId": null,
          "libraryId": "string",
          "mailingListId": "string",
          "sampleId": null
        },
        "requestStatus": "string",
        "requestType": "string",
        "sendDate": "string",
        "stats": {
          "blocked": 0,
          "bounced": 0,
          "complaints": 0,
          "failed": 0,
          "finished": 0,
          "opened": 0,
          "sent": 0,
          "skipped": 0,
          "started": 0
        },
        "surveyLink": {
          "expirationDate": "string",
          "linkType": "string",
          "surveyId": "string"
        }
      }
    ],
    "nextPage": null
  }
}
```

<h3 id="get-distributions-for-survey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distributions|[DistributionsResponse](#schemadistributionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate distribution links

<a id="opIdGenerateDistributionLinks"></a>

> Code samples

```bash
curl https://example.com/distributions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "CreateDistribution",
    "description": "string",
    "expirationDate": "2021-01-21 00:00:00",
    "linkType": "string",
    "mailingListId": "string",
    "surveyId": "string"
  }'
```

`POST /distributions`

Geneates links for individual distribution

> Body parameter

```json
{
  "action": "CreateDistribution",
  "description": "string",
  "expirationDate": "2021-01-21 00:00:00",
  "linkType": "string",
  "mailingListId": "string",
  "surveyId": "string"
}
```

<h3 id="generate-distribution-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDistributionLinks](#schemacreatedistributionlinks)|true|Parameters for the link generation|
|» action|body|string|false|none|
|» description|body|string|false|none|
|» expirationDate|body|string|false|none|
|» linkType|body|string|false|none|
|» mailingListId|body|string|false|none|
|» surveyId|body|string|false|none|

<h3 id="generate-distribution-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve distribution links

<a id="opIdRetrievedistributionlinks"></a>

> Code samples

```bash
curl 'https://example.com/distributions/string/links?surveyId=string' \
  -H 'Accept: application/json'
```

`GET /distributions/{DistributionId}/links`

Retrieves all the individual links for a given distribution

<h3 id="retrieve-distribution-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surveyId|query|string|true|ID of the survey (eg: SV_123)|
|DistributionId|path|string|true|ID of the distribution list|

> Example responses

> 200 Response

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "elements": [
      {
        "contactId": "string",
        "email": "string",
        "exceededContactFrequency": true,
        "externalDataReference": null,
        "firstName": "string",
        "lastName": "string",
        "link": "string",
        "linkExpiration": "string",
        "status": "string",
        "transactionId": null,
        "unsubscribed": true
      }
    ],
    "nextPage": null
  }
}
```

<h3 id="retrieve-distribution-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated list of links|[RetrieveDistributionLinksResponse](#schemaretrievedistributionlinksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Triggers when a response is submitted to a qualtrics survey

<a id="opIdWhenAResponseIsReceived"></a>

> Code samples

```bash
curl https://example.com/eventsubscriptions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encrypt": true,
    "publicationUrl": "string",
    "topics": "surveyengine.completedResponse.<Insert SurveyID>"
  }'
```

`POST /eventsubscriptions/`

Subscribe to response event

> Body parameter

```json
{
  "encrypt": true,
  "publicationUrl": "string",
  "topics": "surveyengine.completedResponse.<Insert SurveyID>"
}
```

<h3 id="triggers-when-a-response-is-submitted-to-a-qualtrics-survey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscribeToEventBody](#schemasubscribetoeventbody)|true|This is the request body of the webhook|
|» encrypt|body|boolean|false|none|
|» publicationUrl|body|string|true|The internal publication URL - will be generated by PowerAutomate|
|» topics|body|string|true|The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]|

> Example responses

> 200 Response

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "meta": {
      "httpStatus": "string"
    },
    "result": {
      "id": "string"
    }
  }
}
```

<h3 id="triggers-when-a-response-is-submitted-to-a-qualtrics-survey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - web hook registered|[EventSubscriptionsResponse](#schemaeventsubscriptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove subscription to response event

<a id="opIdWebhookDelete"></a>

> Code samples

```bash
curl https://example.com/eventsubscriptions/ \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "encrypt": true,
    "publicationUrl": "string",
    "topics": "surveyengine.completedResponse.<Insert SurveyID>"
  }'
```

`DELETE /eventsubscriptions/`

Remove event subscription

> Body parameter

```json
{
  "encrypt": true,
  "publicationUrl": "string",
  "topics": "surveyengine.completedResponse.<Insert SurveyID>"
}
```

<h3 id="remove-subscription-to-response-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscribeToEventBody](#schemasubscribetoeventbody)|true|This is the request body of the webhook|
|» encrypt|body|boolean|false|none|
|» publicationUrl|body|string|true|The internal publication URL - will be generated by PowerAutomate|
|» topics|body|string|true|The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]|

> Example responses

> 200 Response

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "meta": {
      "httpStatus": "string"
    },
    "result": {
      "id": "string"
    }
  }
}
```

<h3 id="remove-subscription-to-response-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventSubscriptionsResponse](#schemaeventsubscriptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get event subscriptions

<a id="opIdGetEventSubscriptions"></a>

> Code samples

```bash
curl https://example.com/eventsubscriptions/string \
  -H 'Accept: application/json'
```

`GET /eventsubscriptions/{SubscriptionId}`

Get event subscriptions

<h3 id="get-event-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SubscriptionId|path|string|true|ID of event subscription - can be obtained from web hook response|

> Example responses

> 200 Response

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "meta": {
      "httpStatus": "string"
    },
    "result": {
      "id": "string"
    }
  }
}
```

<h3 id="get-event-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event subscriptions|[EventSubscriptionsResponse](#schemaeventsubscriptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get survey

<a id="opIdGetSurvey"></a>

> Code samples

```bash
curl https://example.com/survey-definitions/string \
  -H 'Accept: application/json'
```

`GET /survey-definitions/{SurveyId}`

Gets a single Qualtrics survey speficied by its ID

<h3 id="get-survey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SurveyId|path|string|true|ID of survey (eg. SV_123)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-survey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Survey data|[SurveyResponse](#schemasurveyresponse)|
|default|Default|Operation Failed.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateContactInMailingList">CreateContactInMailingList</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactinmailinglist"></a>
<a id="schema_CreateContactInMailingList"></a>
<a id="tocScreatecontactinmailinglist"></a>
<a id="tocscreatecontactinmailinglist"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "unsubscribed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|unsubscribed|boolean|false|none|none|

<h2 id="tocS_CreateDistributionLinks">CreateDistributionLinks</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionlinks"></a>
<a id="schema_CreateDistributionLinks"></a>
<a id="tocScreatedistributionlinks"></a>
<a id="tocscreatedistributionlinks"></a>

```json
{
  "action": "CreateDistribution",
  "description": "string",
  "expirationDate": "2021-01-21 00:00:00",
  "linkType": "string",
  "mailingListId": "string",
  "surveyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|description|string|false|none|none|
|expirationDate|string|false|none|none|
|linkType|string|false|none|none|
|mailingListId|string|false|none|none|
|surveyId|string|false|none|none|

<h2 id="tocS_DistributionsResponse">DistributionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistributionsresponse"></a>
<a id="schema_DistributionsResponse"></a>
<a id="tocSdistributionsresponse"></a>
<a id="tocsdistributionsresponse"></a>

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "elements": [
      {
        "createdDate": "string",
        "customHeaders": {},
        "embeddedData": null,
        "headers": {
          "fromEmail": null,
          "fromName": null,
          "replyToEmail": null
        },
        "id": "string",
        "message": {
          "libraryId": null,
          "messageId": null,
          "messageText": null
        },
        "modifiedDate": "string",
        "organizationId": "string",
        "ownerId": "string",
        "parentDistributionId": null,
        "recipients": {
          "contactId": null,
          "libraryId": "string",
          "mailingListId": "string",
          "sampleId": null
        },
        "requestStatus": "string",
        "requestType": "string",
        "sendDate": "string",
        "stats": {
          "blocked": 0,
          "bounced": 0,
          "complaints": 0,
          "failed": 0,
          "finished": 0,
          "opened": 0,
          "sent": 0,
          "skipped": 0,
          "started": 0
        },
        "surveyLink": {
          "expirationDate": "string",
          "linkType": "string",
          "surveyId": "string"
        }
      }
    ],
    "nextPage": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|result|object|false|none|none|

<h2 id="tocS_EventSubscriptionHookSchema">EventSubscriptionHookSchema</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionhookschema"></a>
<a id="schema_EventSubscriptionHookSchema"></a>
<a id="tocSeventsubscriptionhookschema"></a>
<a id="tocseventsubscriptionhookschema"></a>

```json
{
  "$content": "x",
  "$content-type": "application/x-www-form-urlencoded",
  "$formdata": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$content|string|true|none|none|
|$content-type|string|true|none|none|
|$formdata|[object]|false|none|none|

<h2 id="tocS_EventSubscriptionsResponse">EventSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionsresponse"></a>
<a id="schema_EventSubscriptionsResponse"></a>
<a id="tocSeventsubscriptionsresponse"></a>
<a id="tocseventsubscriptionsresponse"></a>

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "meta": {
      "httpStatus": "string"
    },
    "result": {
      "id": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|result|object|false|none|none|

<h2 id="tocS_RetrieveDistributionLinksResponse">RetrieveDistributionLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedistributionlinksresponse"></a>
<a id="schema_RetrieveDistributionLinksResponse"></a>
<a id="tocSretrievedistributionlinksresponse"></a>
<a id="tocsretrievedistributionlinksresponse"></a>

```json
{
  "meta": {
    "httpStatus": "string",
    "requestId": "string"
  },
  "result": {
    "elements": [
      {
        "contactId": "string",
        "email": "string",
        "exceededContactFrequency": true,
        "externalDataReference": null,
        "firstName": "string",
        "lastName": "string",
        "link": "string",
        "linkExpiration": "string",
        "status": "string",
        "transactionId": null,
        "unsubscribed": true
      }
    ],
    "nextPage": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|result|object|false|none|none|

<h2 id="tocS_SubscribeToEventBody">SubscribeToEventBody</h2>
<!-- backwards compatibility -->
<a id="schemasubscribetoeventbody"></a>
<a id="schema_SubscribeToEventBody"></a>
<a id="tocSsubscribetoeventbody"></a>
<a id="tocssubscribetoeventbody"></a>

```json
{
  "encrypt": true,
  "publicationUrl": "string",
  "topics": "surveyengine.completedResponse.<Insert SurveyID>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encrypt|boolean|false|none|none|
|publicationUrl|string|true|none|The internal publication URL - will be generated by PowerAutomate|
|topics|string|true|none|The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]|

<h2 id="tocS_SurveyResponse">SurveyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasurveyresponse"></a>
<a id="schema_SurveyResponse"></a>
<a id="tocSsurveyresponse"></a>
<a id="tocssurveyresponse"></a>

```json
{}
```
