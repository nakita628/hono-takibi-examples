<h1 id="transcriptions">Transcriptions v2026-09</h1>

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
|crm.extensions_calling_transcripts.read||
|crm.extensions_calling_transcripts.write||
|crm.objects.contacts.highly_sensitive.read.v2||
|crm.objects.contacts.highly_sensitive.write.v2||
|crm.objects.contacts.read||
|crm.objects.contacts.sensitive.read.v2||
|crm.objects.contacts.sensitive.write.v2||
|crm.objects.contacts.write||
|crm.schemas.contacts.read||
|crm.schemas.contacts.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="transcriptions-advanced">Advanced</h1>

## Handle Inbound Call

<a id="opIdpost-/crm/extensions/calling/2026-09/inbound-call_/crm/v3/extensions/calling/inbound-call"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/extensions/calling/2026-09/inbound-call \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/inbound-call`

This endpoint processes inbound calls by accepting a request with details about the call. It requires a JSON payload containing information such as the call's external ID, final status, and phone numbers involved. This operation is useful for integrating third-party call data into HubSpot, allowing for seamless tracking and management of inbound calls.

> Body parameter

```json
null
```

<h3 id="handle-inbound-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompletedThirdPartyCallRequest](#schemacompletedthirdpartycallrequest)|true|none|
|» callStartedTimestamp|body|string(date-time)|false|The date and time when the call started, in ISO 8601 format.|
|» createEngagement|body|boolean|true|A boolean indicating whether an engagement should be created for this call.|
|» durationSeconds|body|integer(int32)|false|The duration of the call in seconds, represented as an integer.|
|» engagementProperties|body|object|true|A map of custom property names to their values, used to store additional information about the engagement.|
|» » **additionalProperties**|body|string|false|none|
|» externalCallId|body|string|true|A unique identifier for the call provided by the external system.|
|» finalCallStatus|body|string|true|The final status of the call. Valid values include 'QUEUED', 'RINGING', 'IN_PROGRESS', 'CANCELED', 'COMPLETED', 'BUSY', 'FAILED', 'NO_ANSWER', 'CONNECTING', 'CALLING_CRM_USER', 'MISSED', 'HOLD', and 'UNKNOWN'.|
|» fromNumber|body|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|
|» potentialRecipientUserIds|body|[integer(int32)]|true|An array of integers representing the user IDs of potential recipients of the call.|
|» toNumber|body|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|
|» userId|body|integer(int32)|false|The unique identifier of the user associated with the call. This is an integer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» finalCallStatus|BUSY|
|» finalCallStatus|CALLING_CRM_USER|
|» finalCallStatus|CANCELED|
|» finalCallStatus|COMPLETED|
|» finalCallStatus|CONNECTING|
|» finalCallStatus|FAILED|
|» finalCallStatus|HOLD|
|» finalCallStatus|IN_PROGRESS|
|» finalCallStatus|MISSED|
|» finalCallStatus|NO_ANSWER|
|» finalCallStatus|QUEUED|
|» finalCallStatus|RINGING|
|» finalCallStatus|UNKNOWN|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="handle-inbound-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CompletedThirdPartyCallResponse](#schemacompletedthirdpartycallresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.contacts.write )
</aside>

## Create Transcript

<a id="opIdpost-/crm/extensions/calling/2026-09/transcripts_/crm/extensions/calling/2026-03/transcripts"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/extensions/calling/2026-09/transcripts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/transcripts`

Create a new transcript for a call in your HubSpot account. This endpoint allows you to submit the details of a call transcript, including engagement ID and utterances, to be stored and managed within HubSpot. This is useful for integrating call transcription data into your CRM workflows.

> Body parameter

```json
null
```

<h3 id="create-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TranscriptCreateRequest](#schematranscriptcreaterequest)|true|none|
|» engagementId|body|integer(int64)|true|The unique identifier for the engagement associated with this transcript. It is an integer in int64 format.|
|» transcriptCreateUtterances|body|[[TranscriptCreateUtterance](#schematranscriptcreateutterance)]|true|An array of utterances that make up the transcript. Each utterance is represented by a TranscriptCreateUtterance object.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TranscriptCreateResponse](#schematranscriptcreateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.extensions_calling_transcripts.write )
</aside>

<h1 id="transcriptions-basic">Basic</h1>

## Retrieve transcript

<a id="opIdget-/crm/extensions/calling/2026-09/transcripts/{transcriptId}_/crm/extensions/calling/2026-03/transcripts/{transcriptId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/extensions/calling/2026-09/transcripts/{transcriptId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/extensions/calling/2026-09/transcripts/{transcriptId}`

Retrieve a specific call transcript by its unique identifier. This endpoint allows you to access the details of a transcript, including its creation and update timestamps, engagement ID, source, and the transcript utterances. It is useful for reviewing and analyzing call interactions stored in your HubSpot account.

<h3 id="retrieve-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transcriptId|path|string|true|The unique identifier of the transcript to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TranscriptResponse](#schematranscriptresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.extensions_calling_transcripts.read )
</aside>

## Delete transcript

<a id="opIddelete-/crm/extensions/calling/2026-09/transcripts/{transcriptId}_/crm/extensions/calling/2026-03/transcripts/{transcriptId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/extensions/calling/2026-09/transcripts/{transcriptId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/extensions/calling/2026-09/transcripts/{transcriptId}`

Delete a specific call transcript from your HubSpot account using its unique identifier. This operation is useful for managing and cleaning up transcript data that is no longer needed.

<h3 id="delete-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transcriptId|path|string|true|The unique identifier of the transcript to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.extensions_calling_transcripts.write )
</aside>

# Schemas

<h2 id="tocS_CompanyCallerId">CompanyCallerId</h2>
<!-- backwards compatibility -->
<a id="schemacompanycallerid"></a>
<a id="schema_CompanyCallerId"></a>
<a id="tocScompanycallerid"></a>
<a id="tocscompanycallerid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callerIdType|string|true|none|A string representing the type of caller ID. The only valid value is 'COMPANY'.|
|name|string|false|none|A string representing the name associated with the company caller ID.|
|objectCoordinates|[ObjectCoordinates](#schemaobjectcoordinates)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|callerIdType|COMPANY|

<h2 id="tocS_CompletedThirdPartyCallRequest">CompletedThirdPartyCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletedthirdpartycallrequest"></a>
<a id="schema_CompletedThirdPartyCallRequest"></a>
<a id="tocScompletedthirdpartycallrequest"></a>
<a id="tocscompletedthirdpartycallrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callStartedTimestamp|string(date-time)|false|none|The date and time when the call started, in ISO 8601 format.|
|createEngagement|boolean|true|none|A boolean indicating whether an engagement should be created for this call.|
|durationSeconds|integer(int32)|false|none|The duration of the call in seconds, represented as an integer.|
|engagementProperties|object|true|none|A map of custom property names to their values, used to store additional information about the engagement.|
|externalCallId|string|true|none|A unique identifier for the call provided by the external system.|
|finalCallStatus|string|true|none|The final status of the call. Valid values include 'QUEUED', 'RINGING', 'IN_PROGRESS', 'CANCELED', 'COMPLETED', 'BUSY', 'FAILED', 'NO_ANSWER', 'CONNECTING', 'CALLING_CRM_USER', 'MISSED', 'HOLD', and 'UNKNOWN'.|
|fromNumber|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|none|
|potentialRecipientUserIds|[integer(int32)]|true|none|An array of integers representing the user IDs of potential recipients of the call.|
|toNumber|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|none|
|userId|integer(int32)|false|none|The unique identifier of the user associated with the call. This is an integer.|

#### Enumerated Values

|Property|Value|
|---|---|
|finalCallStatus|BUSY|
|finalCallStatus|CALLING_CRM_USER|
|finalCallStatus|CANCELED|
|finalCallStatus|COMPLETED|
|finalCallStatus|CONNECTING|
|finalCallStatus|FAILED|
|finalCallStatus|HOLD|
|finalCallStatus|IN_PROGRESS|
|finalCallStatus|MISSED|
|finalCallStatus|NO_ANSWER|
|finalCallStatus|QUEUED|
|finalCallStatus|RINGING|
|finalCallStatus|UNKNOWN|

<h2 id="tocS_CompletedThirdPartyCallResponse">CompletedThirdPartyCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompletedthirdpartycallresponse"></a>
<a id="schema_CompletedThirdPartyCallResponse"></a>
<a id="tocScompletedthirdpartycallresponse"></a>
<a id="tocscompletedthirdpartycallresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callerIdMatches|[[ContactCallerId](#schemacontactcallerid) \| [CompanyCallerId](#schemacompanycallerid)]|true|none|An array containing information about the caller ID matches. Each item in the array can be either a ContactCallerId or a CompanyCallerId object.|

<h2 id="tocS_ContactCallerId">ContactCallerId</h2>
<!-- backwards compatibility -->
<a id="schemacontactcallerid"></a>
<a id="schema_ContactCallerId"></a>
<a id="tocScontactcallerid"></a>
<a id="tocscontactcallerid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callerIdType|string|true|none|A string indicating the type of caller ID, which is 'CONTACT' by default.|
|email|string|false|none|The email address of the contact, represented as a string.|
|firstName|string|false|none|The first name of the contact, represented as a string.|
|lastName|string|false|none|The last name of the contact, represented as a string.|
|objectCoordinates|[ObjectCoordinates](#schemaobjectcoordinates)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|callerIdType|CONTACT|

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
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

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
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_FormattedPhoneNumber">FormattedPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaformattedphonenumber"></a>
<a id="schema_FormattedPhoneNumber"></a>
<a id="tocSformattedphonenumber"></a>
<a id="tocsformattedphonenumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|e164Number|string|true|none|The phone number formatted in E.164 standard, which includes the country code and the subscriber number as a string.|
|extension|string|false|none|An optional string representing the extension number associated with the phone number.|
|phoneNumberType|string|true|none|The type of phone number, represented as a string. Valid values include 'FIXED_LINE', 'MOBILE', 'FIXED_LINE_OR_MOBILE', 'TOLL_FREE', 'PREMIUM_RATE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL', and 'UNKNOWN'.|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneNumberType|FIXED_LINE|
|phoneNumberType|FIXED_LINE_OR_MOBILE|
|phoneNumberType|MOBILE|
|phoneNumberType|PAGER|
|phoneNumberType|PERSONAL_NUMBER|
|phoneNumberType|PREMIUM_RATE|
|phoneNumberType|SHARED_COST|
|phoneNumberType|TOLL_FREE|
|phoneNumberType|UAN|
|phoneNumberType|UNKNOWN|
|phoneNumberType|VOICEMAIL|
|phoneNumberType|VOIP|

<h2 id="tocS_ObjectCoordinates">ObjectCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemaobjectcoordinates"></a>
<a id="schema_ObjectCoordinates"></a>
<a id="tocSobjectcoordinates"></a>
<a id="tocsobjectcoordinates"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|integer(int64)|true|none|The unique identifier for the object. It is an integer formatted as int64.|
|objectTypeId|string|true|none|The identifier for the type of object. It is a string.|
|portalId|integer(int32)|true|none|The unique identifier for the HubSpot portal. It is an integer.|

<h2 id="tocS_Speaker">Speaker</h2>
<!-- backwards compatibility -->
<a id="schemaspeaker"></a>
<a id="schema_Speaker"></a>
<a id="tocSspeaker"></a>
<a id="tocsspeaker"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the speaker, represented as a string.|
|id|string|true|none|A unique identifier for the speaker, represented as a string.|
|name|string|true|none|The name of the speaker, represented as a string.|

<h2 id="tocS_TranscriptCreateRequest">TranscriptCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schematranscriptcreaterequest"></a>
<a id="schema_TranscriptCreateRequest"></a>
<a id="tocStranscriptcreaterequest"></a>
<a id="tocstranscriptcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|engagementId|integer(int64)|true|none|The unique identifier for the engagement associated with this transcript. It is an integer in int64 format.|
|transcriptCreateUtterances|[[TranscriptCreateUtterance](#schematranscriptcreateutterance)]|true|none|An array of utterances that make up the transcript. Each utterance is represented by a TranscriptCreateUtterance object.|

<h2 id="tocS_TranscriptCreateResponse">TranscriptCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schematranscriptcreateresponse"></a>
<a id="schema_TranscriptCreateResponse"></a>
<a id="tocStranscriptcreateresponse"></a>
<a id="tocstranscriptcreateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the created transcript, represented as a string.|

<h2 id="tocS_TranscriptCreateUtterance">TranscriptCreateUtterance</h2>
<!-- backwards compatibility -->
<a id="schematranscriptcreateutterance"></a>
<a id="schema_TranscriptCreateUtterance"></a>
<a id="tocStranscriptcreateutterance"></a>
<a id="tocstranscriptcreateutterance"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeMillis|integer(int64)|true|none|The end time of the utterance in milliseconds, represented as an integer.|
|languageCode|string|false|none|The language code of the utterance, represented as a string.|
|speaker|[Speaker](#schemaspeaker)|true|none|none|
|startTimeMillis|integer(int64)|true|none|The start time of the utterance in milliseconds, represented as an integer.|
|text|string|true|none|The content of the utterance as a string.|

<h2 id="tocS_TranscriptResponse">TranscriptResponse</h2>
<!-- backwards compatibility -->
<a id="schematranscriptresponse"></a>
<a id="schema_TranscriptResponse"></a>
<a id="tocStranscriptresponse"></a>
<a id="tocstranscriptresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when this transcript was created, in ISO 8601 date-time format.|
|engagementId|integer(int64)|true|none|The unique identifier for the engagement associated with this transcript. It is an integer in int64 format.|
|id|string|true|none|The unique identifier for this transcript, represented as a string.|
|transcriptSource|string|true|none|Indicates the origin of the transcript, which can be either 'HUBSPOT_GENERATED' or 'INTEGRATOR_GENERATED'.|
|transcriptUtterances|[[TranscriptUtterance](#schematranscriptutterance)]|true|none|An array of utterances that make up the transcript. Each utterance contains details such as text, timing, and speaker information.|
|updatedAt|string(date-time)|true|none|The date and time when this transcript was last updated, in ISO 8601 date-time format.|

#### Enumerated Values

|Property|Value|
|---|---|
|transcriptSource|HUBSPOT_GENERATED|
|transcriptSource|INTEGRATOR_GENERATED|

<h2 id="tocS_TranscriptUtterance">TranscriptUtterance</h2>
<!-- backwards compatibility -->
<a id="schematranscriptutterance"></a>
<a id="schema_TranscriptUtterance"></a>
<a id="tocStranscriptutterance"></a>
<a id="tocstranscriptutterance"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeMillis|integer(int64)|true|none|The end time of the utterance, given as a Unix timestamp in milliseconds. It marks when the utterance ended.|
|id|string|true|none|A unique identifier for the utterance, represented as a string.|
|languageCode|string|false|none|The language code of the utterance, represented as a string. This indicates the language in which the text was spoken.|
|speaker|[Speaker](#schemaspeaker)|false|none|none|
|startTimeMillis|integer(int64)|true|none|The start time of the utterance, given as a Unix timestamp in milliseconds. It marks when the utterance began.|
|text|string|true|none|The spoken text of the utterance. It is a string representing the actual words spoken.|
