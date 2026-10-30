<h1 id="conversations-visitor-identification">Conversations Visitor Identification v2026-09</h1>

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
|conversations.visitor_identification.tokens.create||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="conversations-visitor-identification-basic">Basic</h1>

## Generate visitor token

<a id="opIdpost-/visitor-identification/2026-09/tokens/create_generateToken"></a>

> Code samples

```bash
curl https://api.hubapi.com/visitor-identification/2026-09/tokens/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /visitor-identification/2026-09/tokens/create`

Generate an identification token for a website visitor who has been authenticated using your own system. An identification token returned from this API can be used to pass information about your already-authenticated visitor to the chat widget, so that it treats the visitor as a known contact. This allows support agents to recognize and assist the visitor more effectively.

> Body parameter

```json
null
```

<h3 id="generate-visitor-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IdentificationTokenGenerationRequest](#schemaidentificationtokengenerationrequest)|true|none|
|» email|body|string|true|The email of the visitor that you wish to identify|
|» firstName|body|string|false|The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.|
|» hsCustomerAgentContext|body|object|true|An object containing additional context about the customer agent. This field is required and can include various string properties.|
|» » **additionalProperties**|body|string|false|none|
|» lastName|body|string|false|The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="generate-visitor-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IdentificationTokenResponse](#schemaidentificationtokenresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.visitor_identification.tokens.create )
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

<h2 id="tocS_IdentificationTokenGenerationRequest">IdentificationTokenGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationtokengenerationrequest"></a>
<a id="schema_IdentificationTokenGenerationRequest"></a>
<a id="tocSidentificationtokengenerationrequest"></a>
<a id="tocsidentificationtokengenerationrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email of the visitor that you wish to identify|
|firstName|string|false|none|The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.|
|hsCustomerAgentContext|object|true|none|An object containing additional context about the customer agent. This field is required and can include various string properties.|
|lastName|string|false|none|The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.|

<h2 id="tocS_IdentificationTokenResponse">IdentificationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationtokenresponse"></a>
<a id="schema_IdentificationTokenResponse"></a>
<a id="tocSidentificationtokenresponse"></a>
<a id="tocsidentificationtokenresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|An identification token that allows the visitor to be treated as a known contact.|
