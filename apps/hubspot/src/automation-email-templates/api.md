<h1 id="automation-email-templates">Automation Email Templates v2026-09</h1>

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

<h1 id="automation-email-templates-basic">Basic</h1>

## List templates

<a id="opIdget-/automation/email-templates/2026-09_/automation/email-templates/2026-09-beta"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/email-templates/2026-09 \
  -H 'Accept: application/json'
```

`GET /automation/email-templates/2026-09`

Retrieve a list of email templates available in the HubSpot account. This endpoint supports pagination to navigate through large sets of templates. Use this endpoint to access and manage your email templates efficiently. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. 

<h3 id="list-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page. Defaults to 20.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicTemplateForwardPaging](#schemacollectionresponsepublictemplateforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create

<a id="opIdpost-/automation/email-templates/2026-09_/automation/email-templates/2026-09-beta"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/email-templates/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /automation/email-templates/2026-09`

Create a new email template in your HubSpot account. This endpoint allows you to define the template's name, subject, body, and optionally assign it to a folder. The request must include the template's body and name. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. 

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicTemplateInput](#schemapublictemplateinput)|true|none|
|» body|body|string|true|The main content of the email template. This is a required field and must be a string.|
|» folderId|body|string|false|The identifier of the folder in which the template is stored. This is an optional field and must be a string if provided.|
|» name|body|string|true|The name of the email template. This is a required field and must be a string.|
|» subject|body|string|false|The subject line of the email template. This is an optional field and must be a string if provided.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicTemplate](#schemapublictemplate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="success">
This operation does not require authentication
</aside>

## List folders

<a id="opIdget-/automation/email-templates/2026-09/folders_/automation/email-templates/2026-09-beta/folders"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/email-templates/2026-09/folders \
  -H 'Accept: application/json'
```

`GET /automation/email-templates/2026-09/folders`

Retrieve a list of email template folders available in your HubSpot account. This endpoint supports pagination to navigate through large sets of folders. Use this endpoint to organize and manage your email templates efficiently. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. 

<h3 id="list-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource. Use this token to retrieve the next set of results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page. Defaults to 20.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicFolderForwardPaging](#schemacollectionresponsepublicfolderforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve template

<a id="opIdget-/automation/email-templates/2026-09/{templateId}_/automation/email-templates/2026-09-beta/{templateId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/email-templates/2026-09/{templateId}' \
  -H 'Accept: application/json'
```

`GET /automation/email-templates/2026-09/{templateId}`

Retrieve a specific email template by its unique identifier. This endpoint allows you to access the details of an email template, which can be useful for reviewing or managing your email automation strategies. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. 

<h3 id="retrieve-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|integer(int64)|true|The unique identifier of the email template to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTemplate](#schemapublictemplate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update template

<a id="opIdpatch-/automation/email-templates/2026-09/{templateId}_/automation/email-templates/2026-09-beta/{templateId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/email-templates/2026-09/{templateId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /automation/email-templates/2026-09/{templateId}`

Update an existing email template in your HubSpot account. This endpoint allows you to modify the template's properties such as name, subject, body, and folderId. Ensure that the templateId provided corresponds to an existing template. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. 

> Body parameter

```json
null
```

<h3 id="update-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|integer(int64)|true|The unique identifier of the email template to update.|
|body|body|[PublicTemplateUpdate](#schemapublictemplateupdate)|true|none|
|» body|body|object|true|An object representing the body content of the email template.|
|» folderId|body|object|true|An object representing the identifier of the folder where the email template is stored.|
|» name|body|object|true|An object representing the name of the email template.|
|» subject|body|object|true|An object representing the subject line of the email template.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTemplate](#schemapublictemplate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicFolderForwardPaging">CollectionResponsePublicFolderForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicfolderforwardpaging"></a>
<a id="schema_CollectionResponsePublicFolderForwardPaging"></a>
<a id="tocScollectionresponsepublicfolderforwardpaging"></a>
<a id="tocscollectionresponsepublicfolderforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicFolder](#schemapublicfolder)]|true|none|An array of PublicFolder objects, each representing a folder containing email templates.|

<h2 id="tocS_CollectionResponsePublicTemplateForwardPaging">CollectionResponsePublicTemplateForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublictemplateforwardpaging"></a>
<a id="schema_CollectionResponsePublicTemplateForwardPaging"></a>
<a id="tocScollectionresponsepublictemplateforwardpaging"></a>
<a id="tocscollectionresponsepublictemplateforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicTemplate](#schemapublictemplate)]|true|none|An array of public templates. Each item in the array is an object representing a template with properties such as id, name, subject, body, folderId, ownerId, createdAt, and updatedAt.|

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
|context|object|false|none|An object providing context about the error condition, with additional properties as arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, formatted as a UUID. Include this value with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error, represented as a string.|

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
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, represented as an object where each key is a context name and the value is an array of strings providing additional details.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required field.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string that serves as the paging cursor token, indicating the position after the last successfully read resource.|
|link|string|false|none|A string representing the URL link to the next page of results.|

<h2 id="tocS_PublicFolder">PublicFolder</h2>
<!-- backwards compatibility -->
<a id="schemapublicfolder"></a>
<a id="schema_PublicFolder"></a>
<a id="tocSpublicfolder"></a>
<a id="tocspublicfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|false|none|The timestamp indicating when the folder was created, represented as an integer in int64 format.|
|id|string|true|none|The unique identifier for the folder, represented as a string.|
|name|string|false|none|The name of the folder, represented as a string.|
|updatedAt|integer(int64)|false|none|The timestamp indicating when the folder was last updated, represented as an integer in int64 format.|

<h2 id="tocS_PublicTemplate">PublicTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapublictemplate"></a>
<a id="schema_PublicTemplate"></a>
<a id="tocSpublictemplate"></a>
<a id="tocspublictemplate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The content of the email template, represented as a string.|
|createdAt|integer(int64)|false|none|The timestamp indicating when the email template was created, represented as an integer in int64 format.|
|folderId|string|false|none|The identifier of the folder where the email template is stored, represented as a string.|
|id|string|true|none|The unique identifier for the email template, represented as a string.|
|name|string|false|none|The name of the email template, represented as a string.|
|ownerId|string|false|none|The identifier of the owner of the email template, represented as a string.|
|subject|string|false|none|The subject line of the email template, represented as a string.|
|updatedAt|integer(int64)|false|none|The timestamp indicating when the email template was last updated, represented as an integer in int64 format.|

<h2 id="tocS_PublicTemplateInput">PublicTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemapublictemplateinput"></a>
<a id="schema_PublicTemplateInput"></a>
<a id="tocSpublictemplateinput"></a>
<a id="tocspublictemplateinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|The main content of the email template. This is a required field and must be a string.|
|folderId|string|false|none|The identifier of the folder in which the template is stored. This is an optional field and must be a string if provided.|
|name|string|true|none|The name of the email template. This is a required field and must be a string.|
|subject|string|false|none|The subject line of the email template. This is an optional field and must be a string if provided.|

<h2 id="tocS_PublicTemplateUpdate">PublicTemplateUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapublictemplateupdate"></a>
<a id="schema_PublicTemplateUpdate"></a>
<a id="tocSpublictemplateupdate"></a>
<a id="tocspublictemplateupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|An object representing the body content of the email template.|
|folderId|object|true|none|An object representing the identifier of the folder where the email template is stored.|
|name|object|true|none|An object representing the name of the email template.|
|subject|object|true|none|An object representing the subject line of the email template.|
