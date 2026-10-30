<h1 id="crm-calling-extensions">CRM Calling Extensions v2026-09</h1>

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

<h1 id="crm-calling-extensions-advanced">Advanced</h1>

## Submit details of an inbound call to the CRM.

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

This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.

> Body parameter

```json
null
```

<h3 id="submit-details-of-an-inbound-call-to-the-crm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompletedThirdPartyCallRequest](#schemacompletedthirdpartycallrequest)|true|none|
|» callStartedTimestamp|body|string(date-time)|false|The timestamp indicating when the call started, formatted as a date-time string.|
|» createEngagement|body|boolean|true|Indicates whether an engagement should be created for the call.|
|» durationSeconds|body|integer(int32)|false|The duration of the call in seconds.|
|» engagementProperties|body|object|true|Contains additional properties related to the engagement.|
|» » **additionalProperties**|body|string|false|none|
|» externalCallId|body|string|true|The unique identifier for the call from an external system.|
|» finalCallStatus|body|string|true|The final status of the call, with accepted values including: BUSY, CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, HOLD, IN_PROGRESS, MISSED, NO_ANSWER, QUEUED, RINGING, UNKNOWN.|
|» fromNumber|body|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|
|» potentialRecipientUserIds|body|[integer(int32)]|true|none|
|» toNumber|body|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|
|» userId|body|integer(int32)|false|The ID of the user associated with the call.|

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

<h3 id="submit-details-of-an-inbound-call-to-the-crm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CompletedThirdPartyCallResponse](#schemacompletedthirdpartycallresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.contacts.write )
</aside>

## Mark a call recording as ready for retrieval.

<a id="opIdpost-/crm/extensions/calling/2026-09/recordings/ready_markAsReady"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/extensions/calling/2026-09/recordings/ready \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/recordings/ready`

This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.

> Body parameter

```json
null
```

<h3 id="mark-a-call-recording-as-ready-for-retrieval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MarkRecordingAsReadyRequest](#schemamarkrecordingasreadyrequest)|true|none|
|» engagementId|body|integer(int64)|true|The unique identifier for the engagement associated with the call recording.|

> Example responses

> default Response

```json
null
```

<h3 id="mark-a-call-recording-as-ready-for-retrieval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.contacts.write )
</aside>

<h1 id="crm-calling-extensions-basic">Basic</h1>

## Retrieve the calling extension settings for a specific app.

<a id="opIdget-/crm/extensions/calling/2026-09/{appId}/settings_get"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/calling/2026-09/{appId}/settings`

Retrieve the current settings of the calling extension for the specified appId. 

<h3 id="retrieve-the-calling-extension-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-calling-extension-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SettingsResponse](#schemasettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create new calling extension settings for a specific app.

<a id="opIdpost-/crm/extensions/calling/2026-09/{appId}/settings_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/{appId}/settings`

Create new settings for the calling extension associated with the specified appId.

> Body parameter

```json
null
```

<h3 id="create-new-calling-extension-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[SettingsRequest](#schemasettingsrequest)|true|none|
|» height|body|integer(int32)|true|Specifies the height of the calling extension interface.|
|» isReady|body|boolean|true|Indicates if the calling extension is ready for use.|
|» name|body|string|true|The name of the calling extension.|
|» supportsCustomObjects|body|boolean|true|Indicates if the calling extension supports custom objects.|
|» supportsInboundCalling|body|boolean|true|Indicates if the calling extension supports inbound calling.|
|» url|body|string|true|The URL associated with the calling extension.|
|» usesCallingWindow|body|boolean|true|Indicates if the calling extension uses a separate calling window.|
|» usesRemote|body|boolean|true|Indicates if the calling extension uses remote services.|
|» width|body|integer(int32)|true|Specifies the width of the calling extension interface.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-new-calling-extension-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SettingsResponse](#schemasettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete the calling extension settings for a specific app.

<a id="opIddelete-/crm/extensions/calling/2026-09/{appId}/settings_remove"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /crm/extensions/calling/2026-09/{appId}/settings`

Remove the calling extension settings associated with the specified appId. This action cannot be undone.

<h3 id="delete-the-calling-extension-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="delete-the-calling-extension-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update the calling extension settings for a specific app.

<a id="opIdpatch-/crm/extensions/calling/2026-09/{appId}/settings_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /crm/extensions/calling/2026-09/{appId}/settings`

Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.

> Body parameter

```json
null
```

<h3 id="update-the-calling-extension-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[SettingsPatchRequest](#schemasettingspatchrequest)|true|none|
|» height|body|integer(int32)|false|The height setting for the calling extension interface.|
|» isReady|body|boolean|false|Specifies whether the calling extension is ready for use.|
|» name|body|string|false|The name of the calling extension.|
|» supportsCustomObjects|body|boolean|false|Indicates if the calling extension supports custom objects.|
|» supportsInboundCalling|body|boolean|false|Indicates if the calling extension supports inbound calling.|
|» url|body|string|false|The URL associated with the calling extension settings.|
|» usesCallingWindow|body|boolean|false|Indicates if the calling extension uses a calling window.|
|» usesRemote|body|boolean|false|Indicates if the calling extension uses a remote connection.|
|» width|body|integer(int32)|false|The width setting for the calling extension interface.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-the-calling-extension-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SettingsResponse](#schemasettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve the channel connection settings for a specific app.

<a id="opIdget-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_get"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/channel-connection?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/calling/2026-09/{appId}/settings/channel-connection`

Access the current channel connection settings for the specified app.

<h3 id="retrieve-the-channel-connection-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-channel-connection-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ChannelConnectionSettingsResponse](#schemachannelconnectionsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create new channel connection settings for a specific app.

<a id="opIdpost-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/channel-connection?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/{appId}/settings/channel-connection`

Establish new channel connection settings for the specified app.

> Body parameter

```json
null
```

<h3 id="create-new-channel-connection-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[ChannelConnectionSettingsRequest](#schemachannelconnectionsettingsrequest)|true|none|
|» isReady|body|boolean|true|Indicates whether the channel connection settings are ready.|
|» url|body|string|true|The URL associated with the channel connection settings.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-new-channel-connection-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ChannelConnectionSettingsResponse](#schemachannelconnectionsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Remove the channel connection settings for a specific app.

<a id="opIddelete-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_remove"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/channel-connection?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /crm/extensions/calling/2026-09/{appId}/settings/channel-connection`

Delete the channel connection settings associated with the specified app.

<h3 id="remove-the-channel-connection-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="remove-the-channel-connection-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update the channel connection settings for a specific app.

<a id="opIdpatch-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/channel-connection?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /crm/extensions/calling/2026-09/{appId}/settings/channel-connection`

Modify the existing channel connection settings for the specified app.

> Body parameter

```json
null
```

<h3 id="update-the-channel-connection-settings-for-a-specific-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[ChannelConnectionSettingsPatchRequest](#schemachannelconnectionsettingspatchrequest)|true|none|
|» isReady|body|boolean|false|Indicates whether the channel connection settings are ready.|
|» url|body|string|false|The URL for the channel connection settings.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-the-channel-connection-settings-for-a-specific-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ChannelConnectionSettingsResponse](#schemachannelconnectionsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve recording settings for an app.

<a id="opIdget-/crm/extensions/calling/2026-09/{appId}/settings/recording_get"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/recording?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/calling/2026-09/{appId}/settings/recording`

Retrieve the current recording settings for a specific app using the provided app ID.

<h3 id="retrieve-recording-settings-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-recording-settings-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[RecordingSettingsResponse](#schemarecordingsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create recording settings for an app.

<a id="opIdpost-/crm/extensions/calling/2026-09/{appId}/settings/recording_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/recording?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/extensions/calling/2026-09/{appId}/settings/recording`

Create new recording settings for a specific app using the provided app ID.

> Body parameter

```json
null
```

<h3 id="create-recording-settings-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[RecordingSettingsRequest](#schemarecordingsettingsrequest)|true|none|
|» urlToRetrieveAuthedRecording|body|string|true|The URL used to access authenticated call recordings.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-recording-settings-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[RecordingSettingsResponse](#schemarecordingsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update recording settings for an app.

<a id="opIdpatch-/crm/extensions/calling/2026-09/{appId}/settings/recording_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/calling/2026-09/{appId}/settings/recording?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /crm/extensions/calling/2026-09/{appId}/settings/recording`

Update the recording settings for a specific app using the provided app ID.

> Body parameter

```json
null
```

<h3 id="update-recording-settings-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|none|
|body|body|[RecordingSettingsPatchRequest](#schemarecordingsettingspatchrequest)|true|none|
|» urlToRetrieveAuthedRecording|body|string|false|The URL used to access authenticated call recordings.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-recording-settings-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[RecordingSettingsResponse](#schemarecordingsettingsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

<h2 id="tocS_ChannelConnectionSettingsPatchRequest">ChannelConnectionSettingsPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelconnectionsettingspatchrequest"></a>
<a id="schema_ChannelConnectionSettingsPatchRequest"></a>
<a id="tocSchannelconnectionsettingspatchrequest"></a>
<a id="tocschannelconnectionsettingspatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isReady|boolean|false|none|Indicates whether the channel connection settings are ready.|
|url|string|false|none|The URL for the channel connection settings.|

<h2 id="tocS_ChannelConnectionSettingsRequest">ChannelConnectionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelconnectionsettingsrequest"></a>
<a id="schema_ChannelConnectionSettingsRequest"></a>
<a id="tocSchannelconnectionsettingsrequest"></a>
<a id="tocschannelconnectionsettingsrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isReady|boolean|true|none|Indicates whether the channel connection settings are ready.|
|url|string|true|none|The URL associated with the channel connection settings.|

<h2 id="tocS_ChannelConnectionSettingsResponse">ChannelConnectionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelconnectionsettingsresponse"></a>
<a id="schema_ChannelConnectionSettingsResponse"></a>
<a id="tocSchannelconnectionsettingsresponse"></a>
<a id="tocschannelconnectionsettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the channel connection settings were created.|
|isReady|boolean|true|none|Indicates whether the channel connection settings are ready for use.|
|updatedAt|string(date-time)|true|none|The date and time when the channel connection settings were last updated.|
|url|string|true|none|The URL associated with the channel connection settings.|

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
|callerIdType|string|true|none|Specifies the type of caller ID, which is set to 'COMPANY' by default.|
|name|string|false|none|The name associated with the company caller ID.|
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
|callStartedTimestamp|string(date-time)|false|none|The timestamp indicating when the call started, formatted as a date-time string.|
|createEngagement|boolean|true|none|Indicates whether an engagement should be created for the call.|
|durationSeconds|integer(int32)|false|none|The duration of the call in seconds.|
|engagementProperties|object|true|none|Contains additional properties related to the engagement.|
|externalCallId|string|true|none|The unique identifier for the call from an external system.|
|finalCallStatus|string|true|none|The final status of the call, with accepted values including: BUSY, CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, HOLD, IN_PROGRESS, MISSED, NO_ANSWER, QUEUED, RINGING, UNKNOWN.|
|fromNumber|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|none|
|potentialRecipientUserIds|[integer(int32)]|true|none|none|
|toNumber|[FormattedPhoneNumber](#schemaformattedphonenumber)|true|none|none|
|userId|integer(int32)|false|none|The ID of the user associated with the call.|

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
|callerIdMatches|[[ContactCallerId](#schemacontactcallerid) \| [CompanyCallerId](#schemacompanycallerid)]|true|none|none|

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
|callerIdType|string|true|none|Specifies the type of caller ID, with the default value being CONTACT.|
|email|string|false|none|The email address of the contact.|
|firstName|string|false|none|The first name of the contact.|
|lastName|string|false|none|The last name of the contact.|
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
|e164Number|string|true|none|The phone number formatted in E.164 standard.|
|extension|string|false|none|The extension number associated with the phone number.|
|phoneNumberType|string|true|none|The type of phone number, with accepted values including FIXED_LINE, MOBILE, VOIP, and others.|

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

<h2 id="tocS_MarkRecordingAsReadyRequest">MarkRecordingAsReadyRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarkrecordingasreadyrequest"></a>
<a id="schema_MarkRecordingAsReadyRequest"></a>
<a id="tocSmarkrecordingasreadyrequest"></a>
<a id="tocsmarkrecordingasreadyrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|engagementId|integer(int64)|true|none|The unique identifier for the engagement associated with the call recording.|

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
|objectId|integer(int64)|true|none|The unique identifier for the object.|
|objectTypeId|string|true|none|The type identifier for the object.|
|portalId|integer(int32)|true|none|The unique identifier for the portal.|

<h2 id="tocS_RecordingSettingsPatchRequest">RecordingSettingsPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecordingsettingspatchrequest"></a>
<a id="schema_RecordingSettingsPatchRequest"></a>
<a id="tocSrecordingsettingspatchrequest"></a>
<a id="tocsrecordingsettingspatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urlToRetrieveAuthedRecording|string|false|none|The URL used to access authenticated call recordings.|

<h2 id="tocS_RecordingSettingsRequest">RecordingSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecordingsettingsrequest"></a>
<a id="schema_RecordingSettingsRequest"></a>
<a id="tocSrecordingsettingsrequest"></a>
<a id="tocsrecordingsettingsrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urlToRetrieveAuthedRecording|string|true|none|The URL used to access authenticated call recordings.|

<h2 id="tocS_RecordingSettingsResponse">RecordingSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecordingsettingsresponse"></a>
<a id="schema_RecordingSettingsResponse"></a>
<a id="tocSrecordingsettingsresponse"></a>
<a id="tocsrecordingsettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urlToRetrieveAuthedRecording|string|true|none|The URL used to retrieve authenticated call recordings.|

<h2 id="tocS_SettingsPatchRequest">SettingsPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettingspatchrequest"></a>
<a id="schema_SettingsPatchRequest"></a>
<a id="tocSsettingspatchrequest"></a>
<a id="tocssettingspatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height setting for the calling extension interface.|
|isReady|boolean|false|none|Specifies whether the calling extension is ready for use.|
|name|string|false|none|The name of the calling extension.|
|supportsCustomObjects|boolean|false|none|Indicates if the calling extension supports custom objects.|
|supportsInboundCalling|boolean|false|none|Indicates if the calling extension supports inbound calling.|
|url|string|false|none|The URL associated with the calling extension settings.|
|usesCallingWindow|boolean|false|none|Indicates if the calling extension uses a calling window.|
|usesRemote|boolean|false|none|Indicates if the calling extension uses a remote connection.|
|width|integer(int32)|false|none|The width setting for the calling extension interface.|

<h2 id="tocS_SettingsRequest">SettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettingsrequest"></a>
<a id="schema_SettingsRequest"></a>
<a id="tocSsettingsrequest"></a>
<a id="tocssettingsrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|true|none|Specifies the height of the calling extension interface.|
|isReady|boolean|true|none|Indicates if the calling extension is ready for use.|
|name|string|true|none|The name of the calling extension.|
|supportsCustomObjects|boolean|true|none|Indicates if the calling extension supports custom objects.|
|supportsInboundCalling|boolean|true|none|Indicates if the calling extension supports inbound calling.|
|url|string|true|none|The URL associated with the calling extension.|
|usesCallingWindow|boolean|true|none|Indicates if the calling extension uses a separate calling window.|
|usesRemote|boolean|true|none|Indicates if the calling extension uses remote services.|
|width|integer(int32)|true|none|Specifies the width of the calling extension interface.|

<h2 id="tocS_SettingsResponse">SettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettingsresponse"></a>
<a id="schema_SettingsResponse"></a>
<a id="tocSsettingsresponse"></a>
<a id="tocssettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the calling extension settings were created.|
|height|integer(int32)|true|none|The height of the calling extension interface.|
|isReady|boolean|true|none|Specifies whether the calling extension settings are ready for use.|
|name|string|true|none|The name of the calling extension.|
|supportsCustomObjects|boolean|true|none|Indicates if the calling extension supports custom objects.|
|supportsInboundCalling|boolean|true|none|Indicates if the calling extension supports inbound calling.|
|updatedAt|string(date-time)|true|none|The date and time when the calling extension settings were last updated.|
|url|string|true|none|The URL associated with the calling extension.|
|usesCallingWindow|boolean|true|none|Specifies if the calling extension uses a dedicated calling window.|
|usesRemote|boolean|true|none|Indicates if the calling extension uses a remote service.|
|width|integer(int32)|true|none|The width of the calling extension interface.|
