<h1 id="video-conferencing-extension">Video Conferencing Extension v2026-09</h1>

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

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="video-conferencing-extension-basic">Basic</h1>

## Get settings

<a id="opIdget-/crm/extensions/videoconferencing/2026-09/settings/{appId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/videoconferencing/2026-09/settings/{appId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/videoconferencing/2026-09/settings/{appId}`

Fetch video conference extension settings for your app

<h3 id="get-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose video conferencing settings you want to retrieve. It should be an integer.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalSettings](#schemaexternalsettings)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create or update settings

<a id="opIdput-/crm/extensions/videoconferencing/2026-09/settings/{appId}_replace"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/videoconferencing/2026-09/settings/{appId}?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /crm/extensions/videoconferencing/2026-09/settings/{appId}`

Create or update video conference extension settings for your app

> Body parameter

```json
null
```

<h3 id="create-or-update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose video conferencing settings are to be updated.|
|body|body|[ExternalSettings](#schemaexternalsettings)|true|none|
|» createMeetingUrl|body|string|true|A string representing the URL used to create a new meeting. This property is required.|
|» deleteMeetingUrl|body|string|false|A string representing the URL used to delete a meeting.|
|» fetchAccountsUri|body|string|false|A string representing the URI used to fetch account information.|
|» updateMeetingUrl|body|string|false|A string representing the URL used to update an existing meeting.|
|» userVerifyUrl|body|string|false|A string representing the URL used to verify a user's identity.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalSettings](#schemaexternalsettings)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete settings

<a id="opIddelete-/crm/extensions/videoconferencing/2026-09/settings/{appId}_archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/videoconferencing/2026-09/settings/{appId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /crm/extensions/videoconferencing/2026-09/settings/{appId}`

Delete video conference extension settings for your app

<h3 id="delete-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose video conferencing settings are to be deleted. It must be an integer.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

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

<h2 id="tocS_ExternalSettings">ExternalSettings</h2>
<!-- backwards compatibility -->
<a id="schemaexternalsettings"></a>
<a id="schema_ExternalSettings"></a>
<a id="tocSexternalsettings"></a>
<a id="tocsexternalsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createMeetingUrl|string|true|none|A string representing the URL used to create a new meeting. This property is required.|
|deleteMeetingUrl|string|false|none|A string representing the URL used to delete a meeting.|
|fetchAccountsUri|string|false|none|A string representing the URI used to fetch account information.|
|updateMeetingUrl|string|false|none|A string representing the URL used to update an existing meeting.|
|userVerifyUrl|string|false|none|A string representing the URL used to verify a user's identity.|
