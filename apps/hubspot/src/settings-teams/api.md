<h1 id="settings-teams">Settings Teams v2026-09</h1>

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
|settings.users.teams.read||
|settings.users.teams.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="settings-teams-basic">Basic</h1>

## List teams

<a id="opIdget-/settings/teams/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/teams/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/teams/2026-09`

Retrieve a list of teams from your HubSpot account. This endpoint allows you to paginate through the teams using the 'limit' and 'after' query parameters. It is useful for obtaining an overview of all teams configured in the account.

<h3 id="list-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseTeamResponseForwardPaging](#schemacollectionresponseteamresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.read )
</aside>

## Create Team

<a id="opIdpost-/settings/teams/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/teams/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/teams/2026-09`

Create a new team in your HubSpot account. This endpoint allows you to define the team's name, parent team, and members. The request body must include the team's name and members. Upon successful creation, the response will include the URL of the newly created team resource.

> Body parameter

```json
null
```

<h3 id="create-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TeamCreateRequest](#schemateamcreaterequest)|true|none|
|» members|body|[[TeamMemberAssignment](#schemateammemberassignment)]|true|An array of team members to be assigned to the new team. Each member is represented by a TeamMemberAssignment object. This is a required field.|
|» name|body|string|true|The name of the team to be created. This is a required field and must be a string.|
|» parentTeamId|body|string|false|The unique identifier of the parent team, if the new team is a sub-team. This is an optional field and must be a string if provided.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[TeamResponse](#schemateamresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

## Retrieve team

<a id="opIdget-/settings/teams/2026-09/{teamId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/teams/2026-09/{teamId}`

Retrieve detailed information about a specific team in your HubSpot account using the team's unique identifier. This endpoint is useful for accessing the team's properties, such as its name and parent team ID, to manage or display team-related data.

<h3 id="retrieve-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamResponse](#schemateamresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.read )
</aside>

## Delete team

<a id="opIddelete-/settings/teams/2026-09/{teamId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/teams/2026-09/{teamId}`

Delete a specific team from your HubSpot account using the team's unique identifier. This operation will remove the team and its associated data. Ensure that you have the necessary permissions to perform this action.

<h3 id="delete-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

## Update team

<a id="opIdpatch-/settings/teams/2026-09/{teamId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /settings/teams/2026-09/{teamId}`

Update the details of a specific team in your HubSpot account. This endpoint allows you to modify the team's information, such as its name or parent team ID. Ensure that the teamId provided in the path is correct, as it identifies the team to be updated.

> Body parameter

```json
null
```

<h3 id="update-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team to update.|
|body|body|[TeamUpdateRequest](#schemateamupdaterequest)|true|none|
|» name|body|object|true|An object representing the new name for the team.|
|» parentTeamId|body|object|true|An object representing the ID of the parent team to which this team will be associated.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamResponse](#schemateamresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

## List members

<a id="opIdget-/settings/teams/2026-09/{teamId}/members"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}/members' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/teams/2026-09/{teamId}/members`

Retrieve a list of members for a specified team in your HubSpot account. This endpoint allows you to paginate through the team members using the 'limit' and 'after' query parameters. It is useful for managing and viewing team compositions and roles within your organization.

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team whose members are being retrieved.|
|after|query|string|false|The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseTeamMemberResponseForwardPaging](#schemacollectionresponseteammemberresponseforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.read )
</aside>

## Add Team Members

<a id="opIdpost-/settings/teams/2026-09/{teamId}/members"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}/members' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/teams/2026-09/{teamId}/members`

Assign new members to a specific team in your HubSpot account. This endpoint allows you to add users to a team by specifying their user IDs and roles. It is useful for managing team compositions and ensuring the right users have access to team resources.

> Body parameter

```json
null
```

<h3 id="add-team-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team to which members will be added.|
|body|body|[TeamMemberAssignment](#schemateammemberassignment)|true|none|
|» type|body|string|true|The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.|
|» userId|body|string|true|The unique identifier for the user being assigned to the team. It is a string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|DEFAULT|
|» type|EXTRA|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-team-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[TeamMemberResponse](#schemateammemberresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

## Delete member

<a id="opIddelete-/settings/teams/2026-09/{teamId}/members/{userId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}/members/{userId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/teams/2026-09/{teamId}/members/{userId}`

Remove a specific member from a team in your HubSpot account. This operation requires specifying both the team and user identifiers. It is useful for managing team compositions by removing users who no longer need access or association with a particular team.

<h3 id="delete-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team from which the member will be removed.|
|userId|path|string|true|The unique identifier of the user to be removed from the team.|
|type|query|string|false|Specifies the type of removal. Acceptable values are 'DEFAULT' or 'EXTRA'. Defaults to 'DEFAULT'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|DEFAULT|
|type|EXTRA|

> Example responses

> default Response

```json
null
```

<h3 id="delete-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

<h1 id="settings-teams-batch">Batch</h1>

## Batch assign members

<a id="opIdpost-/settings/teams/2026-09/{teamId}/members/batch"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/teams/2026-09/{teamId}/members/batch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/teams/2026-09/{teamId}/members/batch`

Assign multiple members to a specific team in a single request. This endpoint allows for efficient management of team memberships by processing multiple assignments at once. It is useful for organizations looking to streamline their team management processes.

> Body parameter

```json
null
```

<h3 id="batch-assign-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|The unique identifier of the team to which members will be assigned.|
|body|body|[BatchInputTeamMemberAssignment](#schemabatchinputteammemberassignment)|true|none|
|» inputs|body|[[TeamMemberAssignment](#schemateammemberassignment)]|true|An array of team member assignments, where each item specifies the details of a team member to be assigned. Each item is of type 'TeamMemberAssignment'.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-assign-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseTeamMemberResponse](#schemabatchresponseteammemberresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.write )
</aside>

# Schemas

<h2 id="tocS_BatchInputTeamMemberAssignment">BatchInputTeamMemberAssignment</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputteammemberassignment"></a>
<a id="schema_BatchInputTeamMemberAssignment"></a>
<a id="tocSbatchinputteammemberassignment"></a>
<a id="tocsbatchinputteammemberassignment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[TeamMemberAssignment](#schemateammemberassignment)]|true|none|An array of team member assignments, where each item specifies the details of a team member to be assigned. Each item is of type 'TeamMemberAssignment'.|

<h2 id="tocS_BatchResponseTeamMemberResponse">BatchResponseTeamMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseteammemberresponse"></a>
<a id="schema_BatchResponseTeamMemberResponse"></a>
<a id="tocSbatchresponseteammemberresponse"></a>
<a id="tocsbatchresponseteammemberresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the batch operation.|
|links|object|false|none|A map of link names to associated URIs providing additional information about the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[TeamMemberResponse](#schemateammemberresponse)]|true|none|An array of TeamMemberResponse objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponseTeamMemberResponseForwardPaging">CollectionResponseTeamMemberResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseteammemberresponseforwardpaging"></a>
<a id="schema_CollectionResponseTeamMemberResponseForwardPaging"></a>
<a id="tocScollectionresponseteammemberresponseforwardpaging"></a>
<a id="tocscollectionresponseteammemberresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[TeamMemberResponse](#schemateammemberresponse)]|true|none|An array of team member responses, each represented by a TeamMemberResponse object.|

<h2 id="tocS_CollectionResponseTeamResponseForwardPaging">CollectionResponseTeamResponseForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseteamresponseforwardpaging"></a>
<a id="schema_CollectionResponseTeamResponseForwardPaging"></a>
<a id="tocScollectionresponseteamresponseforwardpaging"></a>
<a id="tocscollectionresponseteamresponseforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[TeamResponse](#schemateamresponse)]|true|none|An array of team responses, each representing a team object.|

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
|context|object|false|none|An object containing context about the error condition. It includes additional properties where each is an array of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs, providing documentation about the error or recommended remediation steps. It is an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more detailed information about the error. It is a string.|

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
|context|object|false|none|Context about the error condition, represented as an object with additional properties that are arrays of strings.|
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
|after|string|true|none|A string token representing the cursor position after the last successfully read resource. This is used to fetch the next set of results.|
|link|string|false|none|A string URL that provides the direct link to the next page of results.|

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
|context|object|true|none|An object containing additional context about the error condition, with keys as context names and values as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string that uniquely identifies the error instance.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific details about the error category.|

<h2 id="tocS_TeamCreateRequest">TeamCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamcreaterequest"></a>
<a id="schema_TeamCreateRequest"></a>
<a id="tocSteamcreaterequest"></a>
<a id="tocsteamcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[TeamMemberAssignment](#schemateammemberassignment)]|true|none|An array of team members to be assigned to the new team. Each member is represented by a TeamMemberAssignment object. This is a required field.|
|name|string|true|none|The name of the team to be created. This is a required field and must be a string.|
|parentTeamId|string|false|none|The unique identifier of the parent team, if the new team is a sub-team. This is an optional field and must be a string if provided.|

<h2 id="tocS_TeamMemberAssignment">TeamMemberAssignment</h2>
<!-- backwards compatibility -->
<a id="schemateammemberassignment"></a>
<a id="schema_TeamMemberAssignment"></a>
<a id="tocSteammemberassignment"></a>
<a id="tocsteammemberassignment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.|
|userId|string|true|none|The unique identifier for the user being assigned to the team. It is a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DEFAULT|
|type|EXTRA|

<h2 id="tocS_TeamMemberResponse">TeamMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemateammemberresponse"></a>
<a id="schema_TeamMemberResponse"></a>
<a id="tocSteammemberresponse"></a>
<a id="tocsteammemberresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of membership the user has in the team. Valid values are 'DEFAULT' and 'EXTRA'.|
|userId|string|true|none|The unique identifier for the user, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DEFAULT|
|type|EXTRA|

<h2 id="tocS_TeamResponse">TeamResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamresponse"></a>
<a id="schema_TeamResponse"></a>
<a id="tocSteamresponse"></a>
<a id="tocsteamresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the team, represented as a string.|
|name|string|true|none|The name of the team, represented as a string.|
|parentTeamId|string|false|none|The unique identifier of the parent team, if applicable, represented as a string.|

<h2 id="tocS_TeamUpdateRequest">TeamUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamupdaterequest"></a>
<a id="schema_TeamUpdateRequest"></a>
<a id="tocSteamupdaterequest"></a>
<a id="tocsteamupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|An object representing the new name for the team.|
|parentTeamId|object|true|none|An object representing the ID of the parent team to which this team will be associated.|
