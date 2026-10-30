<h1 id="automation-sequences">Automation Sequences v2026-09</h1>

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
|automation.sequences.enrollments.write||
|automation.sequences.read||
|automation.sequences.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="automation-sequences-basic">Basic</h1>

## List sequences

<a id="opIdget-/automation/sequences/2026-09"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09?userId=' \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09`

Retrieve a list of sequences for a specified user in your HubSpot account. This endpoint allows you to filter sequences by user ID and optionally paginate through results using a cursor. It is useful for managing and reviewing sequences associated with a particular user. 

<h3 id="list-sequences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|true|The unique identifier of the user whose sequences are to be retrieved. This parameter is required.|
|after|query|string|false|The paging cursor token for pagination. Use the value from the previous response's paging.next.after field to get the next set of results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|Filter sequences by their name.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-sequences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicSequenceLiteResponse](#schemacollectionresponsewithtotalpublicsequenceliteresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List sequences

<a id="opIdget-/automation/sequences/2026-09/serviceaccounts/sequences"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09/serviceaccounts/sequences`

Retrieve a list of sequences available in the service account. This endpoint supports pagination and allows filtering by sequence name. It is useful for obtaining an overview of sequences for management or reporting purposes. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

<h3 id="list-sequences-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|Filter sequences by their name.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-sequences-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicSequenceLiteResponse](#schemacollectionresponsewithtotalpublicsequenceliteresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create sequence

<a id="opIdpost-/automation/sequences/2026-09/serviceaccounts/sequences"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /automation/sequences/2026-09/serviceaccounts/sequences`

Create a new sequence in your HubSpot account using the specified settings and steps. This endpoint allows you to define the sequence's properties, such as its name, settings, steps, and dependencies, to automate processes effectively. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

> Body parameter

```json
null
```

<h3 id="create-sequence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicSequenceRequest](#schemapublicsequencerequest)|true|none|
|» dependencies|body|[[PublicSequenceStepDependencyRequest](#schemapublicsequencestepdependencyrequest)]|true|An array of dependencies between sequence steps, each defined by the PublicSequenceStepDependencyRequest schema.|
|» dynamic|body|boolean|true|A boolean indicating whether the sequence is dynamic.|
|» engagementTriggers|body|[PublicSequenceEngagementTriggersRequest](#schemapublicsequenceengagementtriggersrequest)|false|none|
|» folderId|body|string|false|The identifier of the folder where the sequence is stored. It is a string.|
|» name|body|string|true|The name of the sequence. It is a string.|
|» settings|body|[PublicSequenceSettingsRequest](#schemapublicsequencesettingsrequest)|true|none|
|» steps|body|[[PublicSequenceStepRequest](#schemapublicsequencesteprequest)]|true|An array of steps in the sequence, each defined by the PublicSequenceStepRequest schema.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-sequence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCreateSequenceResponse](#schemapubliccreatesequenceresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve sequence

<a id="opIdget-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}' \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}`

Retrieve details of a specific sequence in your HubSpot account using the sequence ID. This endpoint provides comprehensive information about the sequence, including its settings, steps, and dependencies. It is useful for obtaining sequence configurations and understanding the sequence's structure and components. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

<h3 id="retrieve-sequence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|The unique identifier of the sequence to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-sequence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceResponseV2](#schemapublicsequenceresponsev2)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update sequence

<a id="opIdput-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}`

Update an existing sequence in your HubSpot account using its unique identifier. This endpoint allows you to modify the sequence settings, steps, and dependencies. Ensure that the sequenceId provided in the path is valid and corresponds to the sequence you wish to update. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

> Body parameter

```json
null
```

<h3 id="update-sequence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|The unique identifier of the sequence to update.|
|body|body|[PublicSequenceRequest](#schemapublicsequencerequest)|true|none|
|» dependencies|body|[[PublicSequenceStepDependencyRequest](#schemapublicsequencestepdependencyrequest)]|true|An array of dependencies between sequence steps, each defined by the PublicSequenceStepDependencyRequest schema.|
|» dynamic|body|boolean|true|A boolean indicating whether the sequence is dynamic.|
|» engagementTriggers|body|[PublicSequenceEngagementTriggersRequest](#schemapublicsequenceengagementtriggersrequest)|false|none|
|» folderId|body|string|false|The identifier of the folder where the sequence is stored. It is a string.|
|» name|body|string|true|The name of the sequence. It is a string.|
|» settings|body|[PublicSequenceSettingsRequest](#schemapublicsequencesettingsrequest)|true|none|
|» steps|body|[[PublicSequenceStepRequest](#schemapublicsequencesteprequest)]|true|An array of steps in the sequence, each defined by the PublicSequenceStepRequest schema.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-sequence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceResponseV2](#schemapublicsequenceresponsev2)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete sequence

<a id="opIddelete-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}' \
  -X DELETE
```

`DELETE /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}`

Delete a specific sequence in your HubSpot account using its unique identifier. This operation will remove the sequence and can optionally override active enrollments if specified. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

<h3 id="delete-sequence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|The unique identifier of the sequence to delete.|
|overrideActiveEnrollment|query|boolean|false|A boolean indicating whether to override active enrollments when deleting the sequence.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-sequence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve performance

<a id="opIdget-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance' \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance`

Retrieve the performance metrics of a specific sequence in your HubSpot account. This endpoint provides detailed insights into the sequence's effectiveness, including metrics such as opened, clicked, and replied rates. It is useful for analyzing the success of your sequences over time. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

<h3 id="retrieve-performance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|The unique identifier of the sequence to retrieve performance metrics for.|
|timelineInterval|query|string|false|The interval for the timeline data. Defaults to 'WEEK'.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-performance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequencePerformanceResponse](#schemapublicsequenceperformanceresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve sequence

<a id="opIdget-/automation/sequences/2026-09/{sequenceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/{sequenceId}?userId=' \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09/{sequenceId}`

Retrieve details of a specific sequence in your HubSpot account using its unique identifier. This endpoint requires specifying the sequence ID and the user ID associated with the sequence. It is useful for accessing detailed information about a sequence's configuration and status. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

<h3 id="retrieve-sequence-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|The unique identifier of the sequence to retrieve.|
|userId|query|string|true|The unique identifier of the user associated with the sequence. This parameter is required.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-sequence-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceResponse](#schemapublicsequenceresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="automation-sequences-enrollment">Enrollment</h1>

## Enroll a contact

<a id="opIdpost-/automation/sequences/2026-09/enrollments"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/enrollments?userId=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /automation/sequences/2026-09/enrollments`

Enroll a contact into a sequence using the specified sequence ID. This operation requires the user ID to be provided as a query parameter. The request body must include the contact ID, sender email, and sequence ID. This endpoint is useful for automating the enrollment of contacts into predefined sequences for streamlined communication and follow-up processes.

> Body parameter

```json
null
```

<h3 id="enroll-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|true|The unique identifier of the user performing the enrollment. This parameter is required.|
|body|body|[PublicSequenceEnrollmentRequest](#schemapublicsequenceenrollmentrequest)|true|none|
|» contactId|body|string|true|The unique identifier of the contact to be enrolled in the sequence. It is a string.|
|» senderAliasAddress|body|string|false|An optional alias email address that can be used as the sender's address. It is a string.|
|» senderEmail|body|string|true|The email address of the sender responsible for the sequence enrollment. It is a string.|
|» sequenceId|body|string|true|The unique identifier of the sequence in which the contact is to be enrolled. It is a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="enroll-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceEnrollmentLiteResponse](#schemapublicsequenceenrollmentliteresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve enrollment details

<a id="opIdget-/automation/sequences/2026-09/enrollments/contact/{contactId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/sequences/2026-09/enrollments/contact/{contactId}' \
  -H 'Accept: application/json'
```

`GET /automation/sequences/2026-09/enrollments/contact/{contactId}`

Retrieve the sequence enrollment details for a specific contact in your HubSpot account. This endpoint provides information about the sequence a contact is enrolled in, including enrollment dates and the sequence's name and ID.

<h3 id="retrieve-enrollment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string|true|The unique identifier of the contact whose sequence enrollment details are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-enrollment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceEnrollmentResponse](#schemapublicsequenceenrollmentresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Enroll Service Account

<a id="opIdpost-/automation/sequences/2026-09/serviceaccounts/enrollments"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/sequences/2026-09/serviceaccounts/enrollments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /automation/sequences/2026-09/serviceaccounts/enrollments`

Enroll a service account into a sequence using the specified enrollment details. This endpoint is useful for automating the process of adding service accounts to sequences, which can help streamline workflows and ensure consistent engagement strategies. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.

> Body parameter

```json
null
```

<h3 id="enroll-service-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicSequenceEnrollmentRequest](#schemapublicsequenceenrollmentrequest)|true|none|
|» contactId|body|string|true|The unique identifier of the contact to be enrolled in the sequence. It is a string.|
|» senderAliasAddress|body|string|false|An optional alias email address that can be used as the sender's address. It is a string.|
|» senderEmail|body|string|true|The email address of the sender responsible for the sequence enrollment. It is a string.|
|» sequenceId|body|string|true|The unique identifier of the sequence in which the contact is to be enrolled. It is a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="enroll-service-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSequenceEnrollmentLiteResponse](#schemapublicsequenceenrollmentliteresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponseWithTotalPublicSequenceLiteResponse">CollectionResponseWithTotalPublicSequenceLiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicsequenceliteresponse"></a>
<a id="schema_CollectionResponseWithTotalPublicSequenceLiteResponse"></a>
<a id="tocScollectionresponsewithtotalpublicsequenceliteresponse"></a>
<a id="tocscollectionresponsewithtotalpublicsequenceliteresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicSequenceLiteResponse](#schemapublicsequenceliteresponse)]|true|none|An array of sequence objects, each represented by a PublicSequenceLiteResponse.|
|total|integer(int32)|true|none|The total number of sequences available. It is an integer value.|

<h2 id="tocS_EmailSettingsResponse">EmailSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailsettingsresponse"></a>
<a id="schema_EmailSettingsResponse"></a>
<a id="tocSemailsettingsresponse"></a>
<a id="tocsemailsettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|string|true|none|A string representing the criteria for email settings. Valid values include 'ALL' and 'NONE'.|
|sellingStrategy|string|true|none|A string indicating the selling strategy for email settings. Valid values are 'LEAD_BASED' and 'ACCOUNT_BASED'.|

#### Enumerated Values

|Property|Value|
|---|---|
|criteria|ALL|
|criteria|NONE|
|sellingStrategy|ACCOUNT_BASED|
|sellingStrategy|LEAD_BASED|

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
|category|string|true|none|The error category, indicating the general type of error that occurred.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties that are arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|Further information about the error, represented as an array of ErrorDetail objects.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

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
|code|string|false|none|The status code associated with the error detail, indicating the type of error encountered.|
|context|object|false|none|Context about the error condition, provided as an object with additional properties. This can include specific details such as missing scopes.|
|in|string|false|none|The name of the field or parameter in which the error was found. This provides context about where the error occurred.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required field.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error, helping to further classify the error.|

<h2 id="tocS_MeetingSettingsResponse">MeetingSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemameetingsettingsresponse"></a>
<a id="schema_MeetingSettingsResponse"></a>
<a id="tocSmeetingsettingsresponse"></a>
<a id="tocsmeetingsettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|string|true|none|Specifies the criteria for meetings, with valid values being 'ALL' or 'NONE'.|
|sellingStrategy|string|true|none|Indicates the selling strategy employed, which can be either 'LEAD_BASED' or 'ACCOUNT_BASED'.|

#### Enumerated Values

|Property|Value|
|---|---|
|criteria|ALL|
|criteria|NONE|
|sellingStrategy|ACCOUNT_BASED|
|sellingStrategy|LEAD_BASED|

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
|after|string|true|none|A string token used as a cursor to fetch the next page of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used to retrieve the previous page of results.|
|link|string|false|none|A string URL that points to the previous page of results.|

<h2 id="tocS_PublicCreateSequenceResponse">PublicCreateSequenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliccreatesequenceresponse"></a>
<a id="schema_PublicCreateSequenceResponse"></a>
<a id="tocSpubliccreatesequenceresponse"></a>
<a id="tocspubliccreatesequenceresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sequence|[PublicSequenceResponseV2](#schemapublicsequenceresponsev2)|true|none|none|
|userView|[PublicCreateSequenceUserViewResponse](#schemapubliccreatesequenceuserviewresponse)|false|none|none|

<h2 id="tocS_PublicCreateSequenceUserViewResponse">PublicCreateSequenceUserViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliccreatesequenceuserviewresponse"></a>
<a id="schema_PublicCreateSequenceUserViewResponse"></a>
<a id="tocSpubliccreatesequenceuserviewresponse"></a>
<a id="tocspubliccreatesequenceuserviewresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the user. It is a string.|
|firstName|string|false|none|The first name of the user. It is a string.|
|lastName|string|false|none|The last name of the user. It is a string.|

<h2 id="tocS_PublicEmailPatternResponse">PublicEmailPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailpatternresponse"></a>
<a id="schema_PublicEmailPatternResponse"></a>
<a id="tocSpublicemailpatternresponse"></a>
<a id="tocspublicemailpatternresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when this email pattern was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this email pattern. It is a string.|
|templateId|string|true|none|The identifier of the email template associated with this pattern. It is a string.|
|threadEmailToStepOrder|integer(int32)|false|none|An integer representing the order of the step to which this email pattern is threaded.|
|updatedAt|string(date-time)|true|none|The date and time when this email pattern was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicSequenceCompanyMetricsResponse">PublicSequenceCompanyMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencecompanymetricsresponse"></a>
<a id="schema_PublicSequenceCompanyMetricsResponse"></a>
<a id="tocSpublicsequencecompanymetricsresponse"></a>
<a id="tocspublicsequencecompanymetricsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companiesEngaged|integer(int64)|true|none|The number of companies that have engaged with the sequence. An integer in int64 format.|
|companiesEnrolled|integer(int64)|true|none|The number of companies that have been enrolled in the sequence. An integer in int64 format.|
|companiesScheduledMeeting|integer(int64)|true|none|The number of companies that have scheduled a meeting as a result of the sequence. An integer in int64 format.|
|contactsEnrolledWithCompanyId|integer(int64)|true|none|The number of contacts enrolled in the sequence that are associated with a company ID. An integer in int64 format.|

<h2 id="tocS_PublicSequenceEmailPatternRequest">PublicSequenceEmailPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceemailpatternrequest"></a>
<a id="schema_PublicSequenceEmailPatternRequest"></a>
<a id="tocSpublicsequenceemailpatternrequest"></a>
<a id="tocspublicsequenceemailpatternrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateId|string|true|none|The unique identifier for the email template to be used. It is a string and is required.|
|threadEmailToStepOrder|integer(int32)|false|none|An integer indicating the step order to which the email should be threaded. This property is optional.|

<h2 id="tocS_PublicSequenceEngagementTriggersRequest">PublicSequenceEngagementTriggersRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceengagementtriggersrequest"></a>
<a id="schema_PublicSequenceEngagementTriggersRequest"></a>
<a id="tocSpublicsequenceengagementtriggersrequest"></a>
<a id="tocspublicsequenceengagementtriggersrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfClicks|integer(int32)|false|none|An integer representing the number of times links within an email must be clicked to trigger an engagement action.|
|numberOfOpens|integer(int32)|false|none|An integer representing the number of times an email must be opened to trigger an engagement action.|

<h2 id="tocS_PublicSequenceEnrollmentLiteResponse">PublicSequenceEnrollmentLiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceenrollmentliteresponse"></a>
<a id="schema_PublicSequenceEnrollmentLiteResponse"></a>
<a id="tocSpublicsequenceenrollmentliteresponse"></a>
<a id="tocspublicsequenceenrollmentliteresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enrolledAt|string(date-time)|true|none|The date and time when the contact was enrolled in the sequence, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the sequence enrollment.|
|toEmail|string|true|none|The email address of the contact who is enrolled in the sequence.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence enrollment was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicSequenceEnrollmentRequest">PublicSequenceEnrollmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceenrollmentrequest"></a>
<a id="schema_PublicSequenceEnrollmentRequest"></a>
<a id="tocSpublicsequenceenrollmentrequest"></a>
<a id="tocspublicsequenceenrollmentrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string|true|none|The unique identifier of the contact to be enrolled in the sequence. It is a string.|
|senderAliasAddress|string|false|none|An optional alias email address that can be used as the sender's address. It is a string.|
|senderEmail|string|true|none|The email address of the sender responsible for the sequence enrollment. It is a string.|
|sequenceId|string|true|none|The unique identifier of the sequence in which the contact is to be enrolled. It is a string.|

<h2 id="tocS_PublicSequenceEnrollmentResponse">PublicSequenceEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceenrollmentresponse"></a>
<a id="schema_PublicSequenceEnrollmentResponse"></a>
<a id="tocSpublicsequenceenrollmentresponse"></a>
<a id="tocspublicsequenceenrollmentresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enrolledAt|string(date-time)|true|none|The date and time when the contact was enrolled in the sequence, in ISO 8601 format.|
|enrolledBy|string|true|none|The unique identifier of the user who enrolled the contact in the sequence.|
|enrolledByEmail|string|true|none|The email address of the user who enrolled the contact in the sequence.|
|id|string|true|none|The unique identifier for the sequence enrollment.|
|sequenceId|string|true|none|The unique identifier of the sequence in which the contact is enrolled.|
|sequenceName|string|true|none|The name of the sequence in which the contact is enrolled.|
|toEmail|string|true|none|The email address of the contact enrolled in the sequence.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence enrollment was last updated, in ISO 8601 format.|

<h2 id="tocS_PublicSequenceEnrollmentStatusByStepResponse">PublicSequenceEnrollmentStatusByStepResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceenrollmentstatusbystepresponse"></a>
<a id="schema_PublicSequenceEnrollmentStatusByStepResponse"></a>
<a id="tocSpublicsequenceenrollmentstatusbystepresponse"></a>
<a id="tocspublicsequenceenrollmentstatusbystepresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|An integer in int64 format representing the number of enrollments at the current step.|
|currentStepOrder|integer(int32)|true|none|An integer indicating the order of the current step in the sequence.|
|enrollmentStatus|string|true|none|A string representing the status of the enrollment at the current step.|

<h2 id="tocS_PublicSequenceLiteResponse">PublicSequenceLiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceliteresponse"></a>
<a id="schema_PublicSequenceLiteResponse"></a>
<a id="tocSpublicsequenceliteresponse"></a>
<a id="tocspublicsequenceliteresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the sequence was created, in ISO 8601 format.|
|folderId|string|false|none|The identifier of the folder containing the sequence, represented as a string.|
|id|string|true|none|The unique identifier for the sequence, represented as a string.|
|name|string|true|none|The name of the sequence, represented as a string.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence was last updated, in ISO 8601 format.|
|userId|string|true|none|The unique identifier of the user associated with the sequence, represented as a string.|

<h2 id="tocS_PublicSequencePerformanceResponse">PublicSequencePerformanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceperformanceresponse"></a>
<a id="schema_PublicSequencePerformanceResponse"></a>
<a id="tocSpublicsequenceperformanceresponse"></a>
<a id="tocspublicsequenceperformanceresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyMetrics|[PublicSequenceCompanyMetricsResponse](#schemapublicsequencecompanymetricsresponse)|false|none|none|
|sequenceId|string|true|none|The unique identifier for the sequence, represented as a string.|
|statusByStep|[[PublicSequenceEnrollmentStatusByStepResponse](#schemapublicsequenceenrollmentstatusbystepresponse)]|true|none|An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.|
|steps|[[PublicSequenceStepPerformanceResponse](#schemapublicsequencestepperformanceresponse)]|true|none|An array of objects, each representing the performance metrics for individual steps within the sequence.|
|summary|[PublicSequencePerformanceSummaryResponse](#schemapublicsequenceperformancesummaryresponse)|true|none|none|
|timeline|[[PublicSequenceTimelinePointResponse](#schemapublicsequencetimelinepointresponse)]|true|none|An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.|

<h2 id="tocS_PublicSequencePerformanceSummaryResponse">PublicSequencePerformanceSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceperformancesummaryresponse"></a>
<a id="schema_PublicSequencePerformanceSummaryResponse"></a>
<a id="tocSpublicsequenceperformancesummaryresponse"></a>
<a id="tocspublicsequenceperformancesummaryresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedDeals|integer(int64)|false|none|The number of deals associated with the sequence. Represented as an integer in int64 format.|
|bounced|integer(int64)|true|none|The number of emails in the sequence that bounced. Represented as an integer in int64 format.|
|clicked|integer(int64)|true|none|The number of times links in the sequence emails have been clicked. Represented as an integer in int64 format.|
|contacts|integer(int64)|true|none|The total number of contacts associated with the sequence. Represented as an integer in int64 format.|
|dealsClosed|integer(int64)|false|none|The number of deals closed as a result of the sequence. Represented as an integer in int64 format.|
|engaged|integer(int64)|true|none|The number of contacts who engaged with the sequence. Represented as an integer in int64 format.|
|enrolled|integer(int64)|true|none|The number of contacts enrolled in the sequence. Represented as an integer in int64 format.|
|meetingsBooked|integer(int64)|true|none|The number of meetings booked as a result of the sequence. Represented as an integer in int64 format.|
|noResponse|integer(int64)|true|none|The number of contacts who did not respond to the sequence. Represented as an integer in int64 format.|
|opened|integer(int64)|true|none|The number of times emails in the sequence have been opened. Represented as an integer in int64 format.|
|replied|integer(int64)|true|none|The number of replies received from emails in the sequence. Represented as an integer in int64 format.|
|totalRevenue|number|false|none|The total revenue generated from the sequence. Represented as a number.|
|unsubscribed|integer(int64)|true|none|The number of contacts who unsubscribed from the sequence. Represented as an integer in int64 format.|

<h2 id="tocS_PublicSequenceRequest">PublicSequenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencerequest"></a>
<a id="schema_PublicSequenceRequest"></a>
<a id="tocSpublicsequencerequest"></a>
<a id="tocspublicsequencerequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencies|[[PublicSequenceStepDependencyRequest](#schemapublicsequencestepdependencyrequest)]|true|none|An array of dependencies between sequence steps, each defined by the PublicSequenceStepDependencyRequest schema.|
|dynamic|boolean|true|none|A boolean indicating whether the sequence is dynamic.|
|engagementTriggers|[PublicSequenceEngagementTriggersRequest](#schemapublicsequenceengagementtriggersrequest)|false|none|none|
|folderId|string|false|none|The identifier of the folder where the sequence is stored. It is a string.|
|name|string|true|none|The name of the sequence. It is a string.|
|settings|[PublicSequenceSettingsRequest](#schemapublicsequencesettingsrequest)|true|none|none|
|steps|[[PublicSequenceStepRequest](#schemapublicsequencesteprequest)]|true|none|An array of steps in the sequence, each defined by the PublicSequenceStepRequest schema.|

<h2 id="tocS_PublicSequenceResponse">PublicSequenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceresponse"></a>
<a id="schema_PublicSequenceResponse"></a>
<a id="tocSpublicsequenceresponse"></a>
<a id="tocspublicsequenceresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the sequence was created, in ISO 8601 format.|
|dependencies|[[PublicSequenceStepDependencyResponse](#schemapublicsequencestepdependencyresponse)]|true|none|An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object.|
|folderId|string|false|none|The unique identifier for the folder containing the sequence.|
|id|string|true|none|The unique identifier for the sequence.|
|name|string|true|none|The name of the sequence.|
|settings|[PublicSequenceSettingsResponse](#schemapublicsequencesettingsresponse)|false|none|none|
|steps|[[PublicSequenceStepResponse](#schemapublicsequencestepresponse)]|true|none|An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence was last updated, in ISO 8601 format.|
|userId|string|true|none|The unique identifier of the user who owns the sequence.|

<h2 id="tocS_PublicSequenceResponseV2">PublicSequenceResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequenceresponsev2"></a>
<a id="schema_PublicSequenceResponseV2"></a>
<a id="tocSpublicsequenceresponsev2"></a>
<a id="tocspublicsequenceresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the sequence was created, in ISO 8601 format.|
|dependencies|[[PublicSequenceStepDependencyResponse](#schemapublicsequencestepdependencyresponse)]|true|none|An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object.|
|folderId|string|false|none|The identifier for the folder containing the sequence.|
|id|string|true|none|The unique identifier for the sequence.|
|name|string|true|none|The name of the sequence.|
|settings|[PublicSequenceSettingsResponse](#schemapublicsequencesettingsresponse)|false|none|none|
|steps|[[PublicSequenceStepResponseV2](#schemapublicsequencestepresponsev2)]|true|none|An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence was last updated, in ISO 8601 format.|
|userId|string|true|none|The unique identifier of the user who owns the sequence.|

<h2 id="tocS_PublicSequenceSettingsRequest">PublicSequenceSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencesettingsrequest"></a>
<a id="schema_PublicSequenceSettingsRequest"></a>
<a id="tocSpublicsequencesettingsrequest"></a>
<a id="tocspublicsequencesettingsrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibleFollowUpDays|string|true|none|Specifies the days on which follow-ups are eligible to be sent. Valid values include 'EVERYDAY', 'BUSINESS_DAYS', and 'WEEKDAYS_ONLY'.|
|individualTaskRemindersEnabled|boolean|true|none|A boolean indicating whether individual task reminders are enabled.|
|sellingStrategy|string|true|none|Defines the selling strategy to be used. Valid values include 'LEAD_BASED' and 'ACCOUNT_BASED'.|
|sendWindowEndMinute|integer(int32)|true|none|An integer representing the end minute of the window during which emails can be sent.|
|sendWindowStartMinute|integer(int32)|true|none|An integer representing the start minute of the window during which emails can be sent.|
|taskCreationMinute|integer(int32)|true|none|An integer indicating the minute at which tasks should be created.|
|taskReminderMinute|integer(int32)|true|none|An integer indicating the minute at which task reminders should be sent.|
|unenrollmentSettings|[UnenrollmentSettingsResponse](#schemaunenrollmentsettingsresponse)|true|none|none|
|useThreadedFollowUps|boolean|true|none|A boolean indicating whether follow-ups should be threaded.|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibleFollowUpDays|BUSINESS_DAYS|
|eligibleFollowUpDays|EVERYDAY|
|eligibleFollowUpDays|WEEKDAYS_ONLY|
|sellingStrategy|ACCOUNT_BASED|
|sellingStrategy|LEAD_BASED|

<h2 id="tocS_PublicSequenceSettingsResponse">PublicSequenceSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencesettingsresponse"></a>
<a id="schema_PublicSequenceSettingsResponse"></a>
<a id="tocSpublicsequencesettingsresponse"></a>
<a id="tocspublicsequencesettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the sequence settings were created, in ISO 8601 format.|
|eligibleFollowUpDays|string|true|none|Specifies the days eligible for follow-ups. Valid values include 'EVERYDAY', 'BUSINESS_DAYS', and 'WEEKDAYS_ONLY'.|
|id|string|true|none|The unique identifier for the sequence settings.|
|individualTaskRemindersEnabled|boolean|true|none|A boolean indicating whether individual task reminders are enabled.|
|sellingStrategy|string|true|none|The strategy used for selling, which can be either 'LEAD_BASED' or 'ACCOUNT_BASED'.|
|sendWindowEndMinute|integer(int32)|true|none|The ending minute of the window during which emails can be sent, represented as an integer.|
|sendWindowStartMinute|integer(int32)|true|none|The starting minute of the window during which emails can be sent, represented as an integer.|
|taskReminderMinute|integer(int32)|true|none|The minute at which task reminders are sent, represented as an integer.|
|updatedAt|string(date-time)|true|none|The date and time when the sequence settings were last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibleFollowUpDays|BUSINESS_DAYS|
|eligibleFollowUpDays|EVERYDAY|
|eligibleFollowUpDays|WEEKDAYS_ONLY|
|sellingStrategy|ACCOUNT_BASED|
|sellingStrategy|LEAD_BASED|

<h2 id="tocS_PublicSequenceStepDependencyRequest">PublicSequenceStepDependencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepdependencyrequest"></a>
<a id="schema_PublicSequenceStepDependencyRequest"></a>
<a id="tocSpublicsequencestepdependencyrequest"></a>
<a id="tocspublicsequencestepdependencyrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchNumber|integer(int32)|true|none|An integer indicating the branch number associated with the dependency.|
|dependencyType|string|true|none|A string indicating the type of dependency. Valid values include 'TASK_COMPLETION' and 'MANUAL_PAUSE'.|
|reliesOnStepOrder|integer(int32)|true|none|An integer representing the order of the step that is relied upon by another step.|
|requiredByStepOrder|integer(int32)|true|none|An integer representing the order of the step that requires the dependency.|

#### Enumerated Values

|Property|Value|
|---|---|
|dependencyType|ADAPTIVE_COMPLETION|
|dependencyType|MANUAL_PAUSE|
|dependencyType|TASK_COMPLETION|

<h2 id="tocS_PublicSequenceStepDependencyResponse">PublicSequenceStepDependencyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepdependencyresponse"></a>
<a id="schema_PublicSequenceStepDependencyResponse"></a>
<a id="tocSpublicsequencestepdependencyresponse"></a>
<a id="tocspublicsequencestepdependencyresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when this dependency was created, in ISO 8601 format.|
|dependencyType|string|true|none|The type of dependency, which can be either 'TASK_COMPLETION' or 'MANUAL_PAUSE'.|
|id|string|true|none|The unique identifier for this dependency.|
|reliesOnSequenceStepId|string|true|none|The unique identifier of the sequence step that this dependency relies on.|
|reliesOnStepOrder|integer(int32)|true|none|The order number of the step that this dependency relies on.|
|requiredBySequenceStepId|string|true|none|The unique identifier of the sequence step that requires this dependency.|
|requiredByStepOrder|integer(int32)|true|none|The order number of the step that requires this dependency.|
|updatedAt|string(date-time)|true|none|The date and time when this dependency was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|dependencyType|ADAPTIVE_COMPLETION|
|dependencyType|MANUAL_PAUSE|
|dependencyType|TASK_COMPLETION|

<h2 id="tocS_PublicSequenceStepPerformanceResponse">PublicSequenceStepPerformanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepperformanceresponse"></a>
<a id="schema_PublicSequenceStepPerformanceResponse"></a>
<a id="tocSpublicsequencestepperformanceresponse"></a>
<a id="tocspublicsequencestepperformanceresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|integer(int64)|true|none|An integer (int64) representing the number of calls made in this step.|
|callsConnected|integer(int64)|true|none|An integer (int64) indicating the number of calls that were successfully connected in this step.|
|clicked|integer(int64)|true|none|An integer (int64) showing the number of times links in emails from this step have been clicked.|
|executionCount|integer(int64)|true|none|An integer (int64) indicating the number of times this step has been executed.|
|meetingsBooked|integer(int64)|true|none|An integer (int64) representing the number of meetings booked as a result of this step.|
|onTimeTaskCompletionCount|integer(int64)|true|none|An integer (int64) representing the number of tasks completed on time in this step.|
|onTimeTaskCompletionSum|integer(int64)|true|none|An integer (int64) indicating the sum of on-time task completions for this step.|
|opened|integer(int64)|true|none|An integer (int64) indicating how many times emails from this step have been opened.|
|personalizationRateAvg|number|false|none|A number representing the average personalization rate for this step.|
|personalizationRateCount|integer(int64)|true|none|An integer (int64) indicating the count of personalized actions in this step.|
|replied|integer(int64)|true|none|An integer (int64) representing the number of replies received from emails sent in this step.|
|stepKey|string|true|none|A string that uniquely identifies the step.|
|stepOrder|integer(int32)|true|none|An integer representing the order of the step within the sequence.|
|tasksCompleted|integer(int64)|true|none|An integer (int64) indicating the number of tasks completed in this step.|

<h2 id="tocS_PublicSequenceStepRequest">PublicSequenceStepRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencesteprequest"></a>
<a id="schema_PublicSequenceStepRequest"></a>
<a id="tocSpublicsequencesteprequest"></a>
<a id="tocspublicsequencesteprequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|true|none|A string indicating the type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.|
|branchNumber|integer(int32)|true|none|An integer representing the branch number of this step, used for branching logic in sequences.|
|delayMillis|integer(int64)|true|none|An integer representing the delay in milliseconds before this step is executed.|
|delayMillisMax|integer(int64)|false|none|An integer specifying the maximum delay in milliseconds for this step.|
|delayMillisMin|integer(int64)|false|none|An integer specifying the minimum delay in milliseconds for this step.|
|dynamic|boolean|true|none|A boolean indicating whether the step is dynamic, allowing for conditional execution based on certain criteria.|
|emailPattern|[PublicSequenceEmailPatternRequest](#schemapublicsequenceemailpatternrequest)|false|none|none|
|stepOrder|integer(int32)|true|none|An integer indicating the order of the step within the sequence.|
|taskPattern|[PublicSequenceTaskPatternRequest](#schemapublicsequencetaskpatternrequest)|false|none|none|
|variants|[[PublicSequenceStepVariantRequest](#schemapublicsequencestepvariantrequest)]|true|none|An array of PublicSequenceStepVariantRequest objects, each representing a variant of this step.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ADAPTIVE_CONTAINER|
|actionType|EMAIL|
|actionType|FINISH_ENROLLMENT|
|actionType|TASK|

<h2 id="tocS_PublicSequenceStepResponse">PublicSequenceStepResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepresponse"></a>
<a id="schema_PublicSequenceStepResponse"></a>
<a id="tocSpublicsequencestepresponse"></a>
<a id="tocspublicsequencestepresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|true|none|The type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.|
|createdAt|string(date-time)|true|none|The date and time when this step was created, in ISO 8601 format.|
|delayMillis|integer(int64)|true|none|The delay before executing this step, specified in milliseconds as a 64-bit integer.|
|emailPattern|[PublicEmailPatternResponse](#schemapublicemailpatternresponse)|false|none|none|
|id|string|true|none|The unique identifier for this sequence step, represented as a string.|
|stepOrder|integer(int32)|true|none|An integer indicating the order of this step within the sequence.|
|taskPattern|[PublicTaskPatternResponse](#schemapublictaskpatternresponse)|false|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this step was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ADAPTIVE_CONTAINER|
|actionType|EMAIL|
|actionType|FINISH_ENROLLMENT|
|actionType|TASK|

<h2 id="tocS_PublicSequenceStepResponseV2">PublicSequenceStepResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepresponsev2"></a>
<a id="schema_PublicSequenceStepResponseV2"></a>
<a id="tocSpublicsequencestepresponsev2"></a>
<a id="tocspublicsequencestepresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|true|none|The type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.|
|createdAt|string(date-time)|true|none|The date and time when this step was created, in ISO 8601 format.|
|delayMillis|integer(int64)|true|none|The delay before this step is executed, specified in milliseconds.|
|emailPattern|[PublicEmailPatternResponse](#schemapublicemailpatternresponse)|false|none|none|
|id|string|true|none|The unique identifier for this sequence step.|
|stepOrder|integer(int32)|true|none|An integer indicating the order of this step within the sequence.|
|taskPattern|[PublicTaskPatternResponseV2](#schemapublictaskpatternresponsev2)|false|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this step was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ADAPTIVE_CONTAINER|
|actionType|EMAIL|
|actionType|FINISH_ENROLLMENT|
|actionType|TASK|

<h2 id="tocS_PublicSequenceStepVariantRequest">PublicSequenceStepVariantRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencestepvariantrequest"></a>
<a id="schema_PublicSequenceStepVariantRequest"></a>
<a id="tocSpublicsequencestepvariantrequest"></a>
<a id="tocspublicsequencestepvariantrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activated|boolean|true|none|A boolean indicating whether this variant is active.|
|emailPattern|[PublicSequenceEmailPatternRequest](#schemapublicsequenceemailpatternrequest)|false|none|none|
|taskPattern|[PublicSequenceTaskPatternRequest](#schemapublicsequencetaskpatternrequest)|false|none|none|
|variantOrdinal|integer(int32)|true|none|An integer indicating the order of this variant among other variants of the same step.|

<h2 id="tocS_PublicSequenceTaskPatternRequest">PublicSequenceTaskPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencetaskpatternrequest"></a>
<a id="schema_PublicSequenceTaskPatternRequest"></a>
<a id="tocSpublicsequencetaskpatternrequest"></a>
<a id="tocspublicsequencetaskpatternrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|string|false|none|A string containing additional notes or details about the task.|
|queueId|string|false|none|A string identifier for the queue to which the task belongs.|
|subject|string|false|none|A string representing the subject of the task.|
|taskPriority|string|true|none|The priority level of the task. Valid values include 'NONE', 'HIGH', 'MEDIUM', and 'LOW'.|
|taskType|string|true|none|The type of task to be performed. Valid values include 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', and 'LINKED_IN_MESSAGE'.|
|templateId|string|false|none|A string identifier for the template associated with the task.|
|threadEmailToStepOrder|integer(int32)|false|none|An integer representing the order of the step to which the email should be threaded.|

#### Enumerated Values

|Property|Value|
|---|---|
|taskPriority|HIGH|
|taskPriority|LOW|
|taskPriority|MEDIUM|
|taskPriority|NONE|
|taskType|CALL|
|taskType|EMAIL|
|taskType|LINKED_IN_CONNECT|
|taskType|LINKED_IN_MESSAGE|
|taskType|MEETING|
|taskType|TODO|

<h2 id="tocS_PublicSequenceTimelinePointResponse">PublicSequenceTimelinePointResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicsequencetimelinepointresponse"></a>
<a id="schema_PublicSequenceTimelinePointResponse"></a>
<a id="tocSpublicsequencetimelinepointresponse"></a>
<a id="tocspublicsequencetimelinepointresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enrolledAt|integer(int64)|true|none|The time at which the enrollment occurred, represented as a Unix timestamp in milliseconds.|
|enrollments|integer(int64)|true|none|The total number of enrollments recorded at this point in the sequence timeline. Represented as an integer.|
|meetingsBooked|integer(int64)|true|none|The number of meetings booked at this point in the sequence timeline. Represented as an integer.|

<h2 id="tocS_PublicTaskPatternResponse">PublicTaskPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublictaskpatternresponse"></a>
<a id="schema_PublicTaskPatternResponse"></a>
<a id="tocSpublictaskpatternresponse"></a>
<a id="tocspublictaskpatternresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when this task pattern was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this task pattern.|
|notes|string|false|none|Additional notes related to the task, represented as a string.|
|queueId|integer(int32)|false|none|An integer representing the ID of the queue to which this task belongs.|
|subject|string|false|none|The subject of the task, represented as a string.|
|taskPriority|string|true|none|The priority level of the task, with valid values including 'NONE', 'HIGH', 'MEDIUM', and 'LOW'.|
|taskType|string|true|none|The type of task, with valid values including 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', and 'LINKED_IN_MESSAGE'.|
|templateId|integer(int64)|false|none|An integer representing the ID of the template associated with this task.|
|threadEmailToStepOrder|integer(int32)|false|none|An integer indicating the step order to which this email task is threaded.|
|updatedAt|string(date-time)|true|none|The date and time when this task pattern was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|taskPriority|HIGH|
|taskPriority|LOW|
|taskPriority|MEDIUM|
|taskPriority|NONE|
|taskType|CALL|
|taskType|EMAIL|
|taskType|LINKED_IN_CONNECT|
|taskType|LINKED_IN_MESSAGE|
|taskType|MEETING|
|taskType|TODO|

<h2 id="tocS_PublicTaskPatternResponseV2">PublicTaskPatternResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemapublictaskpatternresponsev2"></a>
<a id="schema_PublicTaskPatternResponseV2"></a>
<a id="tocSpublictaskpatternresponsev2"></a>
<a id="tocspublictaskpatternresponsev2"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when this task pattern was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this task pattern.|
|notes|string|false|none|Additional notes or description associated with the task.|
|queueId|string|false|none|The identifier for the queue to which this task belongs.|
|subject|string|false|none|The subject or title of the task.|
|taskPriority|string|true|none|The priority level of the task, with valid values being 'NONE', 'HIGH', 'MEDIUM', or 'LOW'.|
|taskType|string|true|none|The type of task, which can be one of the following: 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', or 'LINKED_IN_MESSAGE'.|
|templateId|string|false|none|The identifier for the template used in this task.|
|threadEmailToStepOrder|integer(int32)|false|none|An integer representing the order of the step to which this email thread relates.|
|updatedAt|string(date-time)|true|none|The date and time when this task pattern was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|taskPriority|HIGH|
|taskPriority|LOW|
|taskPriority|MEDIUM|
|taskPriority|NONE|
|taskType|CALL|
|taskType|EMAIL|
|taskType|LINKED_IN_CONNECT|
|taskType|LINKED_IN_MESSAGE|
|taskType|MEETING|
|taskType|TODO|

<h2 id="tocS_UnenrollmentSettingsResponse">UnenrollmentSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunenrollmentsettingsresponse"></a>
<a id="schema_UnenrollmentSettingsResponse"></a>
<a id="tocSunenrollmentsettingsresponse"></a>
<a id="tocsunenrollmentsettingsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailSettings|[EmailSettingsResponse](#schemaemailsettingsresponse)|true|none|none|
|meetingSettings|[MeetingSettingsResponse](#schemameetingsettingsresponse)|true|none|none|
