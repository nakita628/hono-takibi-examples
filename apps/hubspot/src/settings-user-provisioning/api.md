<h1 id="settings-user-provisioning">Settings User Provisioning v2026-09</h1>

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
|crm.objects.users.read||
|crm.objects.users.write||
|settings.billing.write||
|settings.users.read||
|settings.users.teams.read||
|settings.users.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="settings-user-provisioning-basic">Basic</h1>

## Retrieves users

<a id="opIdget-/settings/users/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/users/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/users/2026-09`

Retrieve a paginated list of users in your HubSpot account. This endpoint allows you to specify the maximum number of results per page and to use a paging cursor for navigating through the list of users.

<h3 id="retrieves-users-parameters">Parameters</h3>

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

<h3 id="retrieves-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicUserForwardPaging](#schemacollectionresponsepublicuserforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: settings.users.read )
</aside>

## Create a user

<a id="opIdpost-/settings/users/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/users/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/users/2026-09`

Create a new user in your HubSpot account using the specified details. This endpoint requires a JSON request body with user information such as email, first name, last name, role, and seats. A welcome email can be optionally sent to the new user. 

> Body parameter

```json
null
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserProvisionRequest](#schemauserprovisionrequest)|true|none|
|» email|body|string|true|The email address of the user being provisioned. This is a required field and must be unique.|
|» firstName|body|string|false|The first name of the user.|
|» lastName|body|string|false|The last name of the user.|
|» primaryTeamId|body|string|false|The identifier for the primary team to which the user belongs.|
|» roleId|body|string|false|The identifier for the role assigned to the user.|
|» seatNames|body|[string]|false|An array of seat names assigned to the user, representing different permissions or access levels.|
|» secondaryTeamIds|body|[string]|false|An array of identifiers for secondary teams to which the user is associated.|
|» sendWelcomeEmail|body|boolean|true|A boolean indicating whether a welcome email should be sent to the user upon provisioning. This is a required field.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicUser](#schemapublicuser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.write ), oauth2 ( Scopes: crm.objects.users.write )
</aside>

<h1 id="settings-user-provisioning-roles">Roles</h1>

## Retrieves the roles on an account

<a id="opIdget-/settings/users/2026-09/roles"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/users/2026-09/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/users/2026-09/roles`

Retrieve a list of user roles available in your HubSpot account. This endpoint provides information about the different permission sets that can be assigned to users, which is useful for managing user access and permissions within the account.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieves-the-roles-on-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicPermissionSetNoPaging](#schemacollectionresponsepublicpermissionsetnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: settings.users.read )
</aside>

<h1 id="settings-user-provisioning-seats">Seats</h1>

## Retrieves the seats on this account

<a id="opIdget-/settings/users/2026-09/seats"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/users/2026-09/seats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/users/2026-09/seats`

Retrieve the list of seats available in the account. This endpoint provides details about each seat, including its name, description, and the number of remaining seats. It is useful for managing and reviewing seat allocations within your organization.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieves-the-seats-on-this-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicSeatNoPaging](#schemacollectionresponsepublicseatnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.billing.write )
</aside>

<h1 id="settings-user-provisioning-teams">Teams</h1>

## See details about this account's teams

<a id="opIdget-/settings/users/2026-09/teams"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/users/2026-09/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/users/2026-09/teams`

View teams for this account

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="see-details-about-this-accounts-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicTeamNoPaging](#schemacollectionresponsepublicteamnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.teams.read )
</aside>

<h1 id="settings-user-provisioning-users">Users</h1>

## Retrieves a user

<a id="opIdget-/settings/users/2026-09/{userId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/users/2026-09/{userId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/users/2026-09/{userId}`

Retrieves a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.

<h3 id="retrieves-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user to retrieve.|
|idProperty|query|string|false|Specifies the property used to identify the user. Valid values are 'USER_ID' and 'EMAIL'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|idProperty|EMAIL|
|idProperty|USER_ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieves-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicUser](#schemapublicuser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: settings.users.read )
</aside>

## Modifies a user

<a id="opIdput-/settings/users/2026-09/{userId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/users/2026-09/{userId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /settings/users/2026-09/{userId}`

Modifies a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.

> Body parameter

```json
null
```

<h3 id="modifies-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user to update.|
|idProperty|query|string|false|Specifies the property to use for identifying the user. Valid values are 'USER_ID' or 'EMAIL'.|
|body|body|[PublicUserUpdate](#schemapublicuserupdate)|true|none|
|» firstName|body|string|false|The first name of the user. It is a string value.|
|» lastName|body|string|false|The last name of the user. It is a string value.|
|» primaryTeamId|body|string|false|The identifier for the user's primary team. It is a string value.|
|» roleId|body|string|false|The identifier for the user's role. It is a string value.|
|» seatNames|body|[string]|false|An array of seat names associated with the user. Each item in the array is a string.|
|» secondaryTeamIds|body|[string]|false|An array of identifiers for the user's secondary teams. Each item in the array is a string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|idProperty|EMAIL|
|idProperty|USER_ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="modifies-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicUser](#schemapublicuser)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.write ), oauth2 ( Scopes: crm.objects.users.write )
</aside>

## Removes a user

<a id="opIddelete-/settings/users/2026-09/{userId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/users/2026-09/{userId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/users/2026-09/{userId}`

Removes a user identified by `userId`. `userId` refers to the user's ID by default, or optionally email as specified by the `IdProperty` query param.

<h3 id="removes-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user to delete.|
|idProperty|query|string|false|Specifies the property to identify the user. Valid values are 'USER_ID' or 'EMAIL'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|idProperty|EMAIL|
|idProperty|USER_ID|

> Example responses

> default Response

```json
null
```

<h3 id="removes-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.users.write ), oauth2 ( Scopes: crm.objects.users.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicPermissionSetNoPaging">CollectionResponsePublicPermissionSetNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicpermissionsetnopaging"></a>
<a id="schema_CollectionResponsePublicPermissionSetNoPaging"></a>
<a id="tocScollectionresponsepublicpermissionsetnopaging"></a>
<a id="tocscollectionresponsepublicpermissionsetnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicPermissionSet](#schemapublicpermissionset)]|true|none|An array of PublicPermissionSet objects, each representing a specific permission set. This property is required.|

<h2 id="tocS_CollectionResponsePublicSeatNoPaging">CollectionResponsePublicSeatNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicseatnopaging"></a>
<a id="schema_CollectionResponsePublicSeatNoPaging"></a>
<a id="tocScollectionresponsepublicseatnopaging"></a>
<a id="tocscollectionresponsepublicseatnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicSeat](#schemapublicseat)]|true|none|An array of PublicSeat objects, each representing a seat with its associated properties.|

<h2 id="tocS_CollectionResponsePublicTeamNoPaging">CollectionResponsePublicTeamNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicteamnopaging"></a>
<a id="schema_CollectionResponsePublicTeamNoPaging"></a>
<a id="tocScollectionresponsepublicteamnopaging"></a>
<a id="tocscollectionresponsepublicteamnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicTeam](#schemapublicteam)]|true|none|An array of PublicTeam objects, each representing a team with its associated properties.|

<h2 id="tocS_CollectionResponsePublicUserForwardPaging">CollectionResponsePublicUserForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicuserforwardpaging"></a>
<a id="schema_CollectionResponsePublicUserForwardPaging"></a>
<a id="tocScollectionresponsepublicuserforwardpaging"></a>
<a id="tocscollectionresponsepublicuserforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicUser](#schemapublicuser)]|true|none|An array of PublicUser objects representing the users returned in the current page.|

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
|category|string|true|none|The error category, providing a general classification of the error.|
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
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.|
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
|after|string|true|none|A string token that indicates the position after the last item in the current page. It is used as a cursor to fetch the next set of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_PublicPermissionSet">PublicPermissionSet</h2>
<!-- backwards compatibility -->
<a id="schemapublicpermissionset"></a>
<a id="schema_PublicPermissionSet"></a>
<a id="tocSpublicpermissionset"></a>
<a id="tocspublicpermissionset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the permission set. It is a string.|
|name|string|true|none|The name of the permission set. It is a string.|
|requiresBillingWrite|boolean|true|none|A boolean indicating whether the permission set requires billing write access.|

<h2 id="tocS_PublicSeat">PublicSeat</h2>
<!-- backwards compatibility -->
<a id="schemapublicseat"></a>
<a id="schema_PublicSeat"></a>
<a id="tocSpublicseat"></a>
<a id="tocspublicseat"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional details about the seat.|
|name|string|true|none|The name of the seat. This is a required string property.|
|remainingSeats|integer(int32)|false|none|An integer indicating the number of seats that are still available.|

<h2 id="tocS_PublicTeam">PublicTeam</h2>
<!-- backwards compatibility -->
<a id="schemapublicteam"></a>
<a id="schema_PublicTeam"></a>
<a id="tocSpublicteam"></a>
<a id="tocspublicteam"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the team, represented as a string.|
|name|string|true|none|The name of the team, represented as a string.|
|secondaryUserIds|[string]|true|none|An array of strings representing the IDs of users who are secondary members of the team.|
|userIds|[string]|true|none|An array of strings representing the IDs of users who are primary members of the team.|

<h2 id="tocS_PublicUser">PublicUser</h2>
<!-- backwards compatibility -->
<a id="schemapublicuser"></a>
<a id="schema_PublicUser"></a>
<a id="tocSpublicuser"></a>
<a id="tocspublicuser"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the user. This is a required field and must be unique.|
|firstName|string|false|none|The first name of the user, represented as a string.|
|id|string|true|none|The unique identifier for the user, represented as a string.|
|lastName|string|false|none|The last name of the user, represented as a string.|
|primaryTeamId|string|false|none|The ID of the primary team to which the user belongs, represented as a string.|
|roleId|string|false|none|A string representing a single role ID assigned to the user.|
|roleIds|[string]|true|none|An array of strings representing the IDs of the roles assigned to the user. This is a required field.|
|seatNames|[string]|false|none|An array of strings representing the names of seats assigned to the user.|
|secondaryTeamIds|[string]|false|none|An array of strings representing the IDs of secondary teams to which the user is associated.|
|sendWelcomeEmail|boolean|false|none|A boolean indicating whether a welcome email should be sent to the user.|
|superAdmin|boolean|true|none|A boolean indicating whether the user has super admin privileges. This is a required field.|

<h2 id="tocS_PublicUserUpdate">PublicUserUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapublicuserupdate"></a>
<a id="schema_PublicUserUpdate"></a>
<a id="tocSpublicuserupdate"></a>
<a id="tocspublicuserupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name of the user. It is a string value.|
|lastName|string|false|none|The last name of the user. It is a string value.|
|primaryTeamId|string|false|none|The identifier for the user's primary team. It is a string value.|
|roleId|string|false|none|The identifier for the user's role. It is a string value.|
|seatNames|[string]|false|none|An array of seat names associated with the user. Each item in the array is a string.|
|secondaryTeamIds|[string]|false|none|An array of identifiers for the user's secondary teams. Each item in the array is a string.|

<h2 id="tocS_UserProvisionRequest">UserProvisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserprovisionrequest"></a>
<a id="schema_UserProvisionRequest"></a>
<a id="tocSuserprovisionrequest"></a>
<a id="tocsuserprovisionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the user being provisioned. This is a required field and must be unique.|
|firstName|string|false|none|The first name of the user.|
|lastName|string|false|none|The last name of the user.|
|primaryTeamId|string|false|none|The identifier for the primary team to which the user belongs.|
|roleId|string|false|none|The identifier for the role assigned to the user.|
|seatNames|[string]|false|none|An array of seat names assigned to the user, representing different permissions or access levels.|
|secondaryTeamIds|[string]|false|none|An array of identifiers for secondary teams to which the user is associated.|
|sendWelcomeEmail|boolean|true|none|A boolean indicating whether a welcome email should be sent to the user upon provisioning. This is a required field.|
