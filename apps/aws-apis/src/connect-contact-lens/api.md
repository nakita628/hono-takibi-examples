<h1 id="amazon-connect-contact-lens">Amazon Connect Contact Lens v2020-08-21</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

Base URLs:

* <a href="http://contact-lens.us-east-1.amazonaws.com">http://contact-lens.us-east-1.amazonaws.com</a> - The Amazon Connect Contact Lens multi-region endpoint

* <a href="https://contact-lens.us-east-1.amazonaws.com">https://contact-lens.us-east-1.amazonaws.com</a> - The Amazon Connect Contact Lens multi-region endpoint

* <a href="http://contact-lens.cn-north-1.amazonaws.com.cn">http://contact-lens.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect Contact Lens endpoint for China (Beijing) and China (Ningxia)

* <a href="https://contact-lens.cn-north-1.amazonaws.com.cn">https://contact-lens.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect Contact Lens endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/contact-lens/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-connect-contact-lens-default">Default</h1>

## ListRealtimeContactAnalysisSegments

<a id="opIdListRealtimeContactAnalysisSegments"></a>

> Code samples

```bash
curl https://connect-contact-lens.us-east-1.amazonaws.com/realtime-contact-analysis/analysis-segments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /realtime-contact-analysis/analysis-segments`

Provides a list of analysis segments for a real-time analysis session.

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listrealtimecontactanalysissegments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» MaxResults|body|integer|false|The maximimum number of results to return per page.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|

> Example responses

> 200 Response

```json
{
  "Segments": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listrealtimecontactanalysissegments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRealtimeContactAnalysisSegmentsResponse](#schemalistrealtimecontactanalysissegmentsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ListRealtimeContactAnalysisSegmentsResponse">ListRealtimeContactAnalysisSegmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrealtimecontactanalysissegmentsresponse"></a>
<a id="schema_ListRealtimeContactAnalysisSegmentsResponse"></a>
<a id="tocSlistrealtimecontactanalysissegmentsresponse"></a>
<a id="tocslistrealtimecontactanalysissegmentsresponse"></a>

```json
{
  "Segments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Segments|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_MatchedCategories">MatchedCategories</h2>
<!-- backwards compatibility -->
<a id="schemamatchedcategories"></a>
<a id="schema_MatchedCategories"></a>
<a id="tocSmatchedcategories"></a>
<a id="tocsmatchedcategories"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchedDetails">MatchedDetails</h2>
<!-- backwards compatibility -->
<a id="schemamatcheddetails"></a>
<a id="schema_MatchedDetails"></a>
<a id="tocSmatcheddetails"></a>
<a id="tocsmatcheddetails"></a>

```json
{
  "property1": {
    "PointsOfInterest": {}
  },
  "property2": {
    "PointsOfInterest": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CategoryDetails](#schemacategorydetails)|false|none|Provides information about the category rule that was matched.|

<h2 id="tocS_Categories">Categories</h2>
<!-- backwards compatibility -->
<a id="schemacategories"></a>
<a id="schema_Categories"></a>
<a id="tocScategories"></a>
<a id="tocscategories"></a>

```json
{
  "MatchedCategories": {},
  "MatchedDetails": {
    "property1": {
      "PointsOfInterest": {}
    },
    "property2": {
      "PointsOfInterest": {}
    }
  }
}
```

Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchedCategories|object|true|none|none|
|MatchedDetails|object|true|none|none|

<h2 id="tocS_PointsOfInterest">PointsOfInterest</h2>
<!-- backwards compatibility -->
<a id="schemapointsofinterest"></a>
<a id="schema_PointsOfInterest"></a>
<a id="tocSpointsofinterest"></a>
<a id="tocspointsofinterest"></a>

```json
[
  {
    "BeginOffsetMillis": {},
    "EndOffsetMillis": {}
  }
]
```

<h2 id="tocS_CategoryDetails">CategoryDetails</h2>
<!-- backwards compatibility -->
<a id="schemacategorydetails"></a>
<a id="schema_CategoryDetails"></a>
<a id="tocScategorydetails"></a>
<a id="tocscategorydetails"></a>

```json
{
  "PointsOfInterest": {}
}
```

Provides information about the category rule that was matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PointsOfInterest|object|true|none|none|

<h2 id="tocS_CategoryName">CategoryName</h2>
<!-- backwards compatibility -->
<a id="schemacategoryname"></a>
<a id="schema_CategoryName"></a>
<a id="tocScategoryname"></a>
<a id="tocscategoryname"></a>

```json
"string"
```

<h2 id="tocS_CharacterOffset">CharacterOffset</h2>
<!-- backwards compatibility -->
<a id="schemacharacteroffset"></a>
<a id="schema_CharacterOffset"></a>
<a id="tocScharacteroffset"></a>
<a id="tocscharacteroffset"></a>

```json
0
```

<h2 id="tocS_CharacterOffsets">CharacterOffsets</h2>
<!-- backwards compatibility -->
<a id="schemacharacteroffsets"></a>
<a id="schema_CharacterOffsets"></a>
<a id="tocScharacteroffsets"></a>
<a id="tocscharacteroffsets"></a>

```json
{
  "BeginOffsetChar": {},
  "EndOffsetChar": {}
}
```

For characters that were detected as issues, where they occur in the transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginOffsetChar|object|true|none|none|
|EndOffsetChar|object|true|none|none|

<h2 id="tocS_ContactId">ContactId</h2>
<!-- backwards compatibility -->
<a id="schemacontactid"></a>
<a id="schema_ContactId"></a>
<a id="tocScontactid"></a>
<a id="tocscontactid"></a>

```json
"string"
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_IssueDetected">IssueDetected</h2>
<!-- backwards compatibility -->
<a id="schemaissuedetected"></a>
<a id="schema_IssueDetected"></a>
<a id="tocSissuedetected"></a>
<a id="tocsissuedetected"></a>

```json
{
  "CharacterOffsets": {
    "BeginOffsetChar": {},
    "EndOffsetChar": {}
  }
}
```

Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CharacterOffsets|object|true|none|none|

<h2 id="tocS_IssuesDetected">IssuesDetected</h2>
<!-- backwards compatibility -->
<a id="schemaissuesdetected"></a>
<a id="schema_IssuesDetected"></a>
<a id="tocSissuesdetected"></a>
<a id="tocsissuesdetected"></a>

```json
[
  {
    "CharacterOffsets": {
      "BeginOffsetChar": {},
      "EndOffsetChar": {}
    }
  }
]
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListRealtimeContactAnalysisSegmentsRequest">ListRealtimeContactAnalysisSegmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrealtimecontactanalysissegmentsrequest"></a>
<a id="schema_ListRealtimeContactAnalysisSegmentsRequest"></a>
<a id="tocSlistrealtimecontactanalysissegmentsrequest"></a>
<a id="tocslistrealtimecontactanalysissegmentsrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RealtimeContactAnalysisSegments">RealtimeContactAnalysisSegments</h2>
<!-- backwards compatibility -->
<a id="schemarealtimecontactanalysissegments"></a>
<a id="schema_RealtimeContactAnalysisSegments"></a>
<a id="tocSrealtimecontactanalysissegments"></a>
<a id="tocsrealtimecontactanalysissegments"></a>

```json
[
  {
    "Transcript": {
      "Id": {},
      "ParticipantId": {},
      "ParticipantRole": {},
      "Content": {},
      "BeginOffsetMillis": {},
      "EndOffsetMillis": {},
      "Sentiment": {},
      "IssuesDetected": {}
    },
    "Categories": {
      "MatchedCategories": {},
      "MatchedDetails": {
        "property1": {
          "PointsOfInterest": {}
        },
        "property2": {
          "PointsOfInterest": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_OffsetMillis">OffsetMillis</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetmillis"></a>
<a id="schema_OffsetMillis"></a>
<a id="tocSoffsetmillis"></a>
<a id="tocsoffsetmillis"></a>

```json
0
```

<h2 id="tocS_ParticipantId">ParticipantId</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantid"></a>
<a id="schema_ParticipantId"></a>
<a id="tocSparticipantid"></a>
<a id="tocsparticipantid"></a>

```json
"string"
```

<h2 id="tocS_ParticipantRole">ParticipantRole</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantrole"></a>
<a id="schema_ParticipantRole"></a>
<a id="tocSparticipantrole"></a>
<a id="tocsparticipantrole"></a>

```json
"string"
```

<h2 id="tocS_PointOfInterest">PointOfInterest</h2>
<!-- backwards compatibility -->
<a id="schemapointofinterest"></a>
<a id="schema_PointOfInterest"></a>
<a id="tocSpointofinterest"></a>
<a id="tocspointofinterest"></a>

```json
{
  "BeginOffsetMillis": {},
  "EndOffsetMillis": {}
}
```

The section of the contact audio where that category rule was detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginOffsetMillis|object|true|none|none|
|EndOffsetMillis|object|true|none|none|

<h2 id="tocS_Transcript">Transcript</h2>
<!-- backwards compatibility -->
<a id="schematranscript"></a>
<a id="schema_Transcript"></a>
<a id="tocStranscript"></a>
<a id="tocstranscript"></a>

```json
{
  "Id": {},
  "ParticipantId": {},
  "ParticipantRole": {},
  "Content": {},
  "BeginOffsetMillis": {},
  "EndOffsetMillis": {},
  "Sentiment": {},
  "IssuesDetected": {}
}
```

A list of messages in the session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ParticipantId|object|true|none|none|
|ParticipantRole|object|true|none|none|
|Content|object|true|none|none|
|BeginOffsetMillis|object|true|none|none|
|EndOffsetMillis|object|true|none|none|
|Sentiment|object|true|none|none|
|IssuesDetected|object|false|none|none|

<h2 id="tocS_RealtimeContactAnalysisSegment">RealtimeContactAnalysisSegment</h2>
<!-- backwards compatibility -->
<a id="schemarealtimecontactanalysissegment"></a>
<a id="schema_RealtimeContactAnalysisSegment"></a>
<a id="tocSrealtimecontactanalysissegment"></a>
<a id="tocsrealtimecontactanalysissegment"></a>

```json
{
  "Transcript": {
    "Id": {},
    "ParticipantId": {},
    "ParticipantRole": {},
    "Content": {},
    "BeginOffsetMillis": {},
    "EndOffsetMillis": {},
    "Sentiment": {},
    "IssuesDetected": {}
  },
  "Categories": {
    "MatchedCategories": {},
    "MatchedDetails": {
      "property1": {
        "PointsOfInterest": {}
      },
      "property2": {
        "PointsOfInterest": {}
      }
    }
  }
}
```

An analyzed segment for a real-time analysis session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transcript|object|false|none|none|
|Categories|object|false|none|none|

<h2 id="tocS_SentimentValue">SentimentValue</h2>
<!-- backwards compatibility -->
<a id="schemasentimentvalue"></a>
<a id="schema_SentimentValue"></a>
<a id="tocSsentimentvalue"></a>
<a id="tocssentimentvalue"></a>

```json
"POSITIVE"
```

<h2 id="tocS_TranscriptId">TranscriptId</h2>
<!-- backwards compatibility -->
<a id="schematranscriptid"></a>
<a id="schema_TranscriptId"></a>
<a id="tocStranscriptid"></a>
<a id="tocstranscriptid"></a>

```json
"string"
```

<h2 id="tocS_TranscriptContent">TranscriptContent</h2>
<!-- backwards compatibility -->
<a id="schematranscriptcontent"></a>
<a id="schema_TranscriptContent"></a>
<a id="tocStranscriptcontent"></a>
<a id="tocstranscriptcontent"></a>

```json
"string"
```
