<h1 id="crm-notetaker-conversation-recap">CRM Notetaker Conversation Recap v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.contacts.highly_sensitive.read.v2||
|crm.objects.contacts.read||
|crm.objects.contacts.sensitive.read.v2||
|crm.schemas.contacts.read||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-notetaker-conversation-recap-basic">Basic</h1>

## Retrieve conversation recap data

<a id="opIdget-/notetaker/2026-09/conversation/recap/{objectTypeId}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/notetaker/2026-09/conversation/recap/{objectTypeId}/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notetaker/2026-09/conversation/recap/{objectTypeId}/{objectId}`

Retrieve a recap of a conversation based on the specified object type and object ID. This endpoint provides a variety of insights related to the conversation, including summary, action items, questions asked, call stats, participants, and recording URL.

<h3 id="retrieve-conversation-recap-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the object for which the conversation recap is being retrieved. This is a required integer parameter.|
|objectTypeId|path|string|true|The type of the object for which the conversation recap is being retrieved. This is a required string parameter.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-conversation-recap-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ConversationRecapResponse](#schemaconversationrecapresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.read )
</aside>

# Schemas

<h2 id="tocS_ActionItem">ActionItem</h2>
<!-- backwards compatibility -->
<a id="schemaactionitem"></a>
<a id="schema_ActionItem"></a>
<a id="tocSactionitem"></a>
<a id="tocsactionitem"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|string|false|none|A string indicating the individual assigned to the action item. This property is optional.|
|assigneeObjectId|string|false|none|The id of the HubSpot user or contact assigned to this action item, if found. This property is optional.|
|id|string|true|none|The unique identifier for the action item, represented as a string.|
|title|string|true|none|A string representing the title or main description of the action item. This property is required.|

<h2 id="tocS_ConversationRecapActionItemsResult">ConversationRecapActionItemsResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapactionitemsresult"></a>
<a id="schema_ConversationRecapActionItemsResult"></a>
<a id="tocSconversationrecapactionitemsresult"></a>
<a id="tocsconversationrecapactionitemsresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|items|[[ActionItem](#schemaactionitem)]|true|none|The list of action items extracted from the conversation. Populated when status is SUCCEEDED; empty otherwise.|
|status|string|true|none|The current state of action item generation. SUCCEEDED — action items are available. NOT_FOUND — no action items have been generated for this engagement. IN_PROGRESS — generation is currently underway. FAILED — an error occurred while retrieving action items.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapCallStatsResult">ConversationRecapCallStatsResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapcallstatsresult"></a>
<a id="schema_ConversationRecapCallStatsResult"></a>
<a id="tocSconversationrecapcallstatsresult"></a>
<a id="tocsconversationrecapcallstatsresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationMs|integer(int64)|false|none|The length of the recorded conversation in milliseconds.|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|hasTranscript|boolean|true|none|Whether a transcript for a conversation is found.|
|ownerTalkTimePercentage|string|false|none|The percentage of talk-time attributed to the owner participant.|
|status|string|true|none|The status of fetching call stats. Either SUCCEEDED, NOT_FOUND, or FAILED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapNotesResult">ConversationRecapNotesResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapnotesresult"></a>
<a id="schema_ConversationRecapNotesResult"></a>
<a id="tocSconversationrecapnotesresult"></a>
<a id="tocsconversationrecapnotesresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|status|string|true|none|The status of fetching the notes. Either SUCCEEDED, NOT_FOUND, or FAILED.|
|value|string|false|none|A string containing the notes from the conversation recap.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapParticipantsResult">ConversationRecapParticipantsResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapparticipantsresult"></a>
<a id="schema_ConversationRecapParticipantsResult"></a>
<a id="tocSconversationrecapparticipantsresult"></a>
<a id="tocsconversationrecapparticipantsresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|items|[[ParticipantInfo](#schemaparticipantinfo)]|true|none|An array of participant information objects, each containing details about a participant in the conversation.|
|status|string|true|none|The status of fetching participants. Either SUCCEEDED or FAILED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapQuestionsAskedResult">ConversationRecapQuestionsAskedResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapquestionsaskedresult"></a>
<a id="schema_ConversationRecapQuestionsAskedResult"></a>
<a id="tocSconversationrecapquestionsaskedresult"></a>
<a id="tocsconversationrecapquestionsaskedresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|questionsAndAnswers|[[QuestionAndAnswer](#schemaquestionandanswer)]|true|none|A list of question and answer pairs. |
|status|string|true|none|The status of fetching questions and answers. Either FAILED, NOT_FOUND, or SUCCEEDED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapRecordingUrlResult">ConversationRecapRecordingUrlResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecaprecordingurlresult"></a>
<a id="schema_ConversationRecapRecordingUrlResult"></a>
<a id="tocSconversationrecaprecordingurlresult"></a>
<a id="tocsconversationrecaprecordingurlresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|status|string|true|none|The status of creating a URL. Either FAILED, NOT_FOUND, or SUCCEEDED.|
|value|string|false|none|The URL of the recording as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_ConversationRecapResponse">ConversationRecapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapresponse"></a>
<a id="schema_ConversationRecapResponse"></a>
<a id="tocSconversationrecapresponse"></a>
<a id="tocsconversationrecapresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionItems|[ConversationRecapActionItemsResult](#schemaconversationrecapactionitemsresult)|true|none|none|
|callStats|[ConversationRecapCallStatsResult](#schemaconversationrecapcallstatsresult)|true|none|none|
|notes|[ConversationRecapNotesResult](#schemaconversationrecapnotesresult)|true|none|none|
|participants|[ConversationRecapParticipantsResult](#schemaconversationrecapparticipantsresult)|true|none|none|
|questionsAsked|[ConversationRecapQuestionsAskedResult](#schemaconversationrecapquestionsaskedresult)|true|none|none|
|recordingUrl|[ConversationRecapRecordingUrlResult](#schemaconversationrecaprecordingurlresult)|true|none|none|
|summary|[ConversationRecapSummaryResult](#schemaconversationrecapsummaryresult)|false|none|none|

<h2 id="tocS_ConversationRecapSummaryResult">ConversationRecapSummaryResult</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrecapsummaryresult"></a>
<a id="schema_ConversationRecapSummaryResult"></a>
<a id="tocSconversationrecapsummaryresult"></a>
<a id="tocsconversationrecapsummaryresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[StandardError](#schemastandarderror)|false|none|Ye olde error|
|status|string|true|none|The current state of summary generation. SUCCEEDED — summary is available. NOT_FOUND — no summary has been generated for this engagement. FAILED — an error occurred while retrieving the summary.|
|value|string|false|none|The AI-generated summary text for the conversation. Present when status is SUCCEEDED; absent otherwise.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FAILED|
|status|IN_PROGRESS|
|status|NOT_FOUND|
|status|NOT_SUPPORTED|
|status|SUCCEEDED|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|An object providing context about the error condition, where each property is an array of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, used for tracking and support purposes. It is a string in UUID format.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array containing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Each link is represented as a string.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category providing more detailed information about the error. It is a string.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail. This helps identify the type of error that occurred.|
|context|object|false|none|An object providing context about the error condition. It contains additional properties that offer more details, such as missing scopes or other relevant information.|
|in|string|false|none|The name of the field or parameter in which the error was found. It provides context about the location of the error.|
|message|string|true|none|A human-readable message describing the error along with remediation steps where appropriate. This is a required field.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. It offers further classification of the error.|

<h2 id="tocS_ParticipantInfo">ParticipantInfo</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantinfo"></a>
<a id="schema_ParticipantInfo"></a>
<a id="tocSparticipantinfo"></a>
<a id="tocsparticipantinfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the participant. Only present when the participant is a HubSpot Contact.|
|isHost|boolean|true|none|Whether this participant was the host of the conversation.|
|name|string|true|none|The name of the participant. |
|phoneNumber|string|false|none|The phone number of the participant. Only present when the participant is a HubSpot Contact.|

<h2 id="tocS_QuestionAndAnswer">QuestionAndAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaquestionandanswer"></a>
<a id="schema_QuestionAndAnswer"></a>
<a id="tocSquestionandanswer"></a>
<a id="tocsquestionandanswer"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|[SpeakerStatement](#schemaspeakerstatement)|false|none|none|
|question|[SpeakerStatement](#schemaspeakerstatement)|true|none|none|

<h2 id="tocS_SpeakerStatement">SpeakerStatement</h2>
<!-- backwards compatibility -->
<a id="schemaspeakerstatement"></a>
<a id="schema_SpeakerStatement"></a>
<a id="tocSspeakerstatement"></a>
<a id="tocsspeakerstatement"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speakerName|string|false|none|The speaker attributed to this statement.|
|text|string|false|none|The time at which this statement occurred.|
|timestampSeconds|number|false|none|The time in a recorded conversation at which this statement occurred.|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string representing the category of the error.|
|context|object|true|none|An object containing additional context about the error condition, where each key maps to an array of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string that serves as a unique identifier for the error instance.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation or recommended remediation steps related to the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string representing the status of the error.|
|subCategory|object|false|none|An object providing more specific details about the error category.|
