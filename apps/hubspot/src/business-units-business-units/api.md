<h1 id="business-units">Business Units v2026-09</h1>

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
|business_units_view.read||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="business-units-basic">Basic</h1>

## Retrieve brands by associated user

<a id="opIdget-/business-units/public/2026-09/business-units/user/{userId}_getByUserID"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/business-units/public/2026-09/business-units/user/{userId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /business-units/public/2026-09/business-units/user/{userId}`

Retrieve the brands that a specific user can access.

<h3 id="retrieve-brands-by-associated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user whose associated business units are to be retrieved.|
|name|query|[string]|false|A list of business unit names to filter the response by. Only business units with matching names will be included in the results.|
|properties|query|[string]|false|A list of specific properties to include in the response. This allows for filtering the business unit details returned.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-brands-by-associated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicBusinessUnitNoPaging](#schemacollectionresponsepublicbusinessunitnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: business_units_view.read )
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicBusinessUnitNoPaging">CollectionResponsePublicBusinessUnitNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicbusinessunitnopaging"></a>
<a id="schema_CollectionResponsePublicBusinessUnitNoPaging"></a>
<a id="tocScollectionresponsepublicbusinessunitnopaging"></a>
<a id="tocscollectionresponsepublicbusinessunitnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicBusinessUnit](#schemapublicbusinessunit)]|true|none|The collection of Business Units|

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

<h2 id="tocS_PublicBusinessUnit">PublicBusinessUnit</h2>
<!-- backwards compatibility -->
<a id="schemapublicbusinessunit"></a>
<a id="schema_PublicBusinessUnit"></a>
<a id="tocSpublicbusinessunit"></a>
<a id="tocspublicbusinessunit"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The Business Unit's unique ID|
|logoMetadata|[PublicBusinessUnitLogoMetadata](#schemapublicbusinessunitlogometadata)|false|none|none|
|name|string|true|none|The Business Unit's name|

<h2 id="tocS_PublicBusinessUnitLogoMetadata">PublicBusinessUnitLogoMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapublicbusinessunitlogometadata"></a>
<a id="schema_PublicBusinessUnitLogoMetadata"></a>
<a id="tocSpublicbusinessunitlogometadata"></a>
<a id="tocspublicbusinessunitlogometadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logoAltText|string|false|none|The logo's alt text|
|logoUrl|string|false|none|The logo's url|
|resizedUrl|string|false|none|The logo's resized url|
