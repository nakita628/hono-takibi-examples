<h1 id="amazon-mobile-analytics">Amazon Mobile Analytics v2014-06-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

Base URLs:

* <a href="http://mobileanalytics.us-east-1.amazonaws.com">http://mobileanalytics.us-east-1.amazonaws.com</a> - The Amazon Mobile Analytics multi-region endpoint

* <a href="https://mobileanalytics.us-east-1.amazonaws.com">https://mobileanalytics.us-east-1.amazonaws.com</a> - The Amazon Mobile Analytics multi-region endpoint

* <a href="http://mobileanalytics.cn-north-1.amazonaws.com.cn">http://mobileanalytics.cn-north-1.amazonaws.com.cn</a> - The Amazon Mobile Analytics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mobileanalytics.cn-north-1.amazonaws.com.cn">https://mobileanalytics.cn-north-1.amazonaws.com.cn</a> - The Amazon Mobile Analytics endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mobileanalytics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-mobile-analytics-default">Default</h1>

## PutEvents

<a id="opIdPutEvents"></a>

> Code samples

```bash
curl 'https://mobileanalytics.us-east-1.amazonaws.com/2014-06-05/events#x-amz-Client-Context' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-Client-Context: string' \
  -d '{
    "events": [
      {
        "eventType": {},
        "timestamp": {},
        "session": {
          "id": {},
          "duration": {},
          "startTimestamp": {},
          "stopTimestamp": {}
        },
        "version": {},
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "metrics": {
          "property1": 0,
          "property2": 0
        }
      }
    ]
  }'
```

`POST /2014-06-05/events#x-amz-Client-Context`

The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

> Body parameter

```json
{
  "events": [
    {
      "eventType": {},
      "timestamp": {},
      "session": {
        "id": {},
        "duration": {},
        "startTimestamp": {},
        "stopTimestamp": {}
      },
      "version": {},
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "metrics": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

<h3 id="putevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-Client-Context|header|string|true|The client context including the client ID, app title, app version and package name.|
|x-amz-Client-Context-Encoding|header|string|false|The encoding used for the client context.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» events|body|[[Event](#schemaevent)]|true|An array of Event JSON objects|

> Example responses

> 400 Response

```json
{
  "message": {}
}
```

<h3 id="putevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "eventType": {},
  "timestamp": {},
  "session": {
    "id": {},
    "duration": {},
    "startTimestamp": {},
    "stopTimestamp": {}
  },
  "version": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "metrics": {
    "property1": 0,
    "property2": 0
  }
}
```

A JSON object representing a batch of unique event occurrences in your app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|object|true|none|none|
|timestamp|object|true|none|none|
|session|object|false|none|none|
|version|object|false|none|none|
|attributes|object|false|none|none|
|metrics|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
{
  "message": {}
}
```

An exception object returned when a request fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_String50Chars">String50Chars</h2>
<!-- backwards compatibility -->
<a id="schemastring50chars"></a>
<a id="schema_String50Chars"></a>
<a id="tocSstring50chars"></a>
<a id="tocsstring50chars"></a>

```json
"string"
```

<h2 id="tocS_ISO8601Timestamp">ISO8601Timestamp</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601timestamp"></a>
<a id="schema_ISO8601Timestamp"></a>
<a id="tocSiso8601timestamp"></a>
<a id="tocsiso8601timestamp"></a>

```json
"string"
```

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "id": {},
  "duration": {},
  "startTimestamp": {},
  "stopTimestamp": {}
}
```

Describes the session. Session information is required on ALL events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|duration|object|false|none|none|
|startTimestamp|object|false|none|none|
|stopTimestamp|object|false|none|none|

<h2 id="tocS_String10Chars">String10Chars</h2>
<!-- backwards compatibility -->
<a id="schemastring10chars"></a>
<a id="schema_String10Chars"></a>
<a id="tocSstring10chars"></a>
<a id="tocsstring10chars"></a>

```json
"string"
```

<h2 id="tocS_MapOfStringToString">MapOfStringToString</h2>
<!-- backwards compatibility -->
<a id="schemamapofstringtostring"></a>
<a id="schema_MapOfStringToString"></a>
<a id="tocSmapofstringtostring"></a>
<a id="tocsmapofstringtostring"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String0to1000Chars](#schemastring0to1000chars)|false|none|none|

<h2 id="tocS_MapOfStringToNumber">MapOfStringToNumber</h2>
<!-- backwards compatibility -->
<a id="schemamapofstringtonumber"></a>
<a id="schema_MapOfStringToNumber"></a>
<a id="tocSmapofstringtonumber"></a>
<a id="tocsmapofstringtonumber"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Double](#schemadouble)|false|none|none|

<h2 id="tocS_EventListDefinition">EventListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventlistdefinition"></a>
<a id="schema_EventListDefinition"></a>
<a id="tocSeventlistdefinition"></a>
<a id="tocseventlistdefinition"></a>

```json
[
  {
    "eventType": {},
    "timestamp": {},
    "session": {
      "id": {},
      "duration": {},
      "startTimestamp": {},
      "stopTimestamp": {}
    },
    "version": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "metrics": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_String0to1000Chars">String0to1000Chars</h2>
<!-- backwards compatibility -->
<a id="schemastring0to1000chars"></a>
<a id="schema_String0to1000Chars"></a>
<a id="tocSstring0to1000chars"></a>
<a id="tocsstring0to1000chars"></a>

```json
"string"
```

<h2 id="tocS_PutEventsInput">PutEventsInput</h2>
<!-- backwards compatibility -->
<a id="schemaputeventsinput"></a>
<a id="schema_PutEventsInput"></a>
<a id="tocSputeventsinput"></a>
<a id="tocsputeventsinput"></a>

```json
{
  "events": {}
}
```

A container for the data needed for a PutEvent operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|true|none|none|
