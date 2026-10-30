<h1 id="service-management-public-rest-api">Service Management Public REST API v1001.0.0-SNAPSHOT-f6465463661722583daccffab8c9da1746fe0520</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public REST API for Jira Service Management

Base URLs:

* <a href="https://your-domain.atlassian.net">https://your-domain.atlassian.net</a>

<a href="https://www.atlassian.com/legal/customer-agreement">Terms of service</a>

# Authentication

- oAuth2 authentication. OAuth2 scopes for Jira

    - Flow: authorizationCode
    - Authorization URL = [https://auth.atlassian.com/authorize](https://auth.atlassian.com/authorize)
    - Token URL = [https://auth.atlassian.com/oauth/token](https://auth.atlassian.com/oauth/token)

|Scope|Scope Description|
|---|---|
|delete:organization.property:jira-service-management|Allows the app to delete organisation entity properties|
|delete:organization.user:jira-service-management|Allows the app to remove members from organisations|
|delete:organization:jira-service-management|Allows the app to delete organisations|
|delete:request.feedback:jira-service-management|Allows the app to remove feedback data from requests|
|delete:request.notification:jira-service-management|Allows the app to remove the subscription status of the user from requests|
|delete:request.participant:jira-service-management|Allows the app to remove participants (user) data from requests|
|delete:requesttype.property:jira-service-management|Allows the app to delete request type entity properties|
|delete:servicedesk.customer:jira-service-management|Allows the app the delete customers from service desks|
|delete:servicedesk.organization:jira-service-management|Allows the app the delete organisations from service desks|
|delete:servicedesk.property:jira-service-management|Allows the app to delete service desk entity properties|
|manage:jira-configuration|Configure Jira settings that require the Jira administrators permission, for example, create projects and custom fields, view workflows, manage issue link types.|
|manage:jira-project|Create and edit project settings and create new project-level objects, for example, versions, components.|
|manage:jira-webhook|Manage Jira webhooks. Enables an OAuth app to register and unregister dynamic webhooks in Jira. It also provides for fetching of registered webhooks.|
|manage:servicedesk-customer|Manage Jira Service Management customers and organizations \| Create, manage and delete customers and organizations.<br>Add and remove customers and organizations from service desks.|
|read:customer:jira-service-management|Allows the app to read customer accounts information|
|read:jira-user|View user information in Jira that you have access to, including usernames, email addresses, and avatars.|
|read:jira-work|Read project and issue data. Search for issues and objects associated with issues (such as attachments and worklogs).|
|read:knowledgebase:jira-service-management|Allows the app to search and list KB articles|
|read:mail-logs.connectivity:jira-service-management|Allows the app to read email connectivity logs|
|read:mail-logs.processing:jira-service-management|Allows the app to read incoming email processing logs|
|read:organization.property:jira-service-management|Allows the app to read organisation entity properties|
|read:organization.user:jira-service-management|Allows the app to read organisation membership information|
|read:organization:jira-service-management|Allows the app to read organisation information|
|read:queue:jira-service-management|Allows the app to list queues|
|read:request.action:jira-service-management|Allows the app to read which actions can be performed on requests|
|read:request.approval:jira-service-management|Allows the app to read approval data from requests|
|read:request.attachment:jira-service-management|Allows the app to read attachment data from requests|
|read:request.comment:jira-service-management|Allows the app to read comment data from requests|
|read:request.feedback:jira-service-management|Allows the app to read feedback data from requests|
|read:request.notification:jira-service-management|Allows the app to read the subscription status of the user for requests|
|read:request.participant:jira-service-management|Allows the app to read participant (user) data from requests|
|read:request.sla:jira-service-management|Allows the app to read SLA data from requests|
|read:request.status:jira-service-management|Allows the app to read status/transition data from requests|
|read:request:jira-service-management|Allows the app to list & search requests|
|read:requesttype.property:jira-service-management|Allows the app to read request type desk entity properties|
|read:requesttype:jira-service-management|Allows the app to list & search request types|
|read:servicedesk-request|Read customer request data, including approvals, attachments, comments, request participants, and status/transitions.<br>Read service desk and request types, including searching for request types and reading request type fields, properties and groups.|
|read:servicedesk.customer:jira-service-management|Allows the app the list customers of service desks|
|read:servicedesk.organization:jira-service-management|Allows the app to list organisations to service desks|
|read:servicedesk.property:jira-service-management|Allows the app to read service desk entity properties|
|read:servicedesk:jira-service-management|Allows the app to list & search service desks|
|write:customer:jira-service-management|Allows the app to create customer accounts (user)|
|write:jira-work|Create and edit issues in Jira, post comments, create worklogs, and delete issues.|
|write:organization.property:jira-service-management|Allows the app to write organisation entity properties|
|write:organization.user:jira-service-management|Allows the app to add members to organisations|
|write:organization:jira-service-management|Allows the app to create organisations|
|write:request.approval:jira-service-management|Allows the app to act on approvals of requests (e.g approve, deny, …)|
|write:request.attachment:jira-service-management|Allows the app to add attachments to requests|
|write:request.comment:jira-service-management|Allows the app to add comments to requests|
|write:request.feedback:jira-service-management|Allows the app to write feedback data on requests|
|write:request.notification:jira-service-management|Allows the app to change the subscription status of the user for requests|
|write:request.participant:jira-service-management|Allows the app to add participants (user) data from requests|
|write:request.status:jira-service-management|Allows the app to execute transitions on requests|
|write:request:jira-service-management|Allows the app to create requests|
|write:requesttype.property:jira-service-management|Allows the app to write request type entity properties|
|write:requesttype:jira-service-management|Allows the app to create or modify request types|
|write:servicedesk-request|Create and manage Jira Service Management requests \| Create and edit customer requests, including add comments and attachments, approve, share (add request participants), subscribe, and transition.|
|write:servicedesk.customer:jira-service-management|Allows the app the add customers to service desks|
|write:servicedesk.organization:jira-service-management|Allows the app the add organisations to service desks|
|write:servicedesk.property:jira-service-management|Allows the app to write service desk entity properties|
|write:servicedesk:jira-service-management|Allows the app the add organisations, customers and request types to service desks|

- HTTP Authentication, scheme: basic You can access this resource via basic auth.

<h1 id="service-management-public-rest-api-assets">Assets</h1>

## Get assets workspaces

<a id="opIdgetAssetsWorkspaces"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/assets/workspace \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/assets/workspace`

Returns a list of Assets workspace IDs. Include a workspace ID in the path to access the [Assets REST APIs](https://developer.atlassian.com/cloud/assets/rest).

**[Permissions](#permissions) required**: Any

<h3 id="get-assets-workspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|The starting index of the returned workspace IDs. Base index: 0 See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of workspace IDs to return per page. Default: 50 See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":true,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/rest/servicedeskapi/assets/workspace?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/rest/servicedeskapi/assets/workspace?start=0&limit=1\"},\"values\":[{\"workspaceId\":\"1060ba0e-178b-4e0e-g0h1-jedb02cccb5f\"}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-assets-workspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the request is successful.|[PagedDTOAssetsWorkspaceDTO](#schemapageddtoassetsworkspacedto)|
|401|Unauthorized|Returned if the authentication credentials are incorrect or missing.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get insight workspaces

<a id="opIdgetInsightWorkspaces"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/insight/workspace \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/insight/workspace`

This endpoint is deprecated, please use /assets/workspace/.

<h3 id="get-insight-workspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "workspaceId": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-insight-workspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|[PagedDTOInsightWorkspaceDTO](#schemapageddtoinsightworkspacedto)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

<h1 id="service-management-public-rest-api-customer">Customer</h1>

## Create customer

<a id="opIdcreateCustomer"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/customer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "Fred F. User",
    "email": "fred@example.com"
  }'
```

`POST /rest/servicedeskapi/customer`

This method adds a customer to the Jira Service Management instance by passing a JSON file including an email address and display name. The display name does not need to be unique. The record's identifiers, `name` and `key`, are automatically generated from the request details.

**[Permissions](#permissions) required**: Jira Administrator Global permission

> Body parameter

```json
{
  "displayName": "Fred F. User",
  "email": "fred@example.com"
}
```

<h3 id="create-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|strictConflictStatusCode|query|boolean|false|Optional boolean flag to return 409 Conflict status code for duplicate customer creation request|
|body|body|[CustomerCreateDTO](#schemacustomercreatedto)|true|none|
|» displayName|body|string|false|Customer's name for display in the UI.|
|» email|body|string|false|Customer's email address.|
|» fullName|body|string|false|Deprecated, please use 'displayName'.|

> Example responses

> 201 Response

```json
"{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 409 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the customer details.|[UserDTO](#schemauserdto)|
|400|Bad Request|Returned if the request is invalid, either because the email address is incorrectly formed or already exists in the database if `strictConflictStatusCode=false` or if `strictConflictStatusCode` parameter is not provided|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Returned if the request is invalid because the email address already exists in the database and `strictConflictStatusCode=true`|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Revoke portal only access for user

<a id="opIdrevokePortalOnlyAccessForUser"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/customer/user/string/revoke-portal-only-access \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /rest/servicedeskapi/customer/user/{accountId}/revoke-portal-only-access`

This method revokes portal-only access for a particular user, removing their ability to log in to the Jira Service Management customer portal as a portal-only user. After revocation, the user cannot submit or view requests through the portal.

**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

<h3 id="revoke-portal-only-access-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID of the user, which uniquely identifies the portal-only account. For example, *qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b*.|

> Example responses

> 204 Response

```json
null
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="revoke-portal-only-access-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the request is successful.|Inline|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the account ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

<h1 id="service-management-public-rest-api-info">Info</h1>

## Get info

<a id="opIdgetInfo"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/info`

This method retrieves information about the Jira Service Management instance such as software version, builds, and related links.

**[Permissions](#permissions) required**: None, the user does not need to be logged in.

> Example responses

> 200 Response

```json
"{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/info\"},\"buildChangeSet\":\"c6679417c550918e7c94a9eaaada133f15dc8ff0\",\"buildDate\":{\"epochMillis\":1442259240000,\"friendly\":\"Monday 02:34 AM\",\"iso8601\":\"2015-09-15T02:34:00+0700\",\"jira\":\"2015-09-15T02:34:00.000+0700\"},\"isLicensedForUse\":true,\"platformVersion\":\"7.0.1\",\"version\":\"3.0.1\"}"
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the runtime information for the Jira Service Management instance.|[SoftwareInfoDTO](#schemasoftwareinfodto)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
OAuth2
</aside>

<h1 id="service-management-public-rest-api-knowledgebase">Knowledgebase</h1>

## Get articles

<a id="opIdgetArticles"></a>

> Code samples

```bash
curl 'https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article?query=string&highlight=false' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/knowledgebase/article`

Returns articles which match the given query string across all service desks.

**[Permissions](#permissions) required**: Permission to access the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).

<h3 id="get-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The string used to filter the articles (required).|
|highlight|query|boolean|true|If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false.|
|start|query|integer(int32)|false|(Deprecated) The starting index of the returned objects. Base index: 0.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50.|
|cursor|query|string|false|Pointer to a set of search results, returned as part of the next or prev URL from the previous search call.|
|prev|query|boolean|false|Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article?start=0&limit=2\"},\"values\":[{\"title\":\"Stolen computer\",\"excerpt\":\"assuming your computer was stolen\",\"source\":{\"type\":\"confluence\",\"pageId\":\"8786177\",\"spaceKey\":\"IT\"},\"content\":{\"iframeSrc\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8786177\"}},{\"title\":\"Upgrading computer\",\"excerpt\":\"each computer older then 3 years can be upgraded\",\"source\":{\"type\":\"confluence\",\"pageId\":\"8785228\",\"spaceKey\":\"IT\"},\"content\":{\"iframeSrc\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8785228\"}}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the articles, on the specified page of the results.|[PagedDTOArticleDTO](#schemapageddtoarticledto)|
|400|Bad Request|Returned if the request is invalid. For example: missing query parameter.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

<h1 id="service-management-public-rest-api-organization">Organization</h1>

## Get organizations

<a id="opIdgetOrganizations"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/organization`

This method returns a list of organizations in the Jira Service Management instance. Use this method when you want to present a list of organizations or want to locate an organization by name.

**[Permissions](#permissions) required**: Any. However, to fetch organizations based on `accountId` the user must have a Service Desk agent license.

**Response limitations**: If the user is a customer, only those organizations of which the customer is a member are listed.

<h3 id="get-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of organizations to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|
|accountId|query|string|false|The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization?start=0&limit=1\"},\"values\":[{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1\"},\"id\":\"1\",\"name\":\"Charlie Cakes Franchises\",\"scimManaged\":false}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns paginated list of organizations.|[PagedDTOOrganizationDTO](#schemapageddtoorganizationdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the user is not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Create organization

<a id="opIdcreateOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Charlie Cakes Franchises"
  }'
```

`POST /rest/servicedeskapi/organization`

This method creates an organization by passing the name of the organization.

**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to create organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

> Body parameter

```json
{
  "name": "Charlie Cakes Franchises"
}
```

<h3 id="create-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrganizationCreateDTO](#schemaorganizationcreatedto)|true|none|
|» name|body|string|true|Name of the organization. Must contain 1-200 characters.|

> Example responses

> 201 Response

```json
"{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1\"},\"id\":\"1\",\"name\":\"Charlie Cakes Franchises\",\"scimManaged\":false}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the created organization or the existing organization if name already exists.|[OrganizationDTO](#schemaorganizationdto)|
|400|Bad Request|Returned if the HTTP request is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get organization

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/organization/{organizationId}`

This method returns details of an organization. Use this method to get organization details whenever your application component is passed an organization ID but needs to display other organization details.

To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).

**[Permissions](#permissions) required**: Any

**Response limitations**: Customers can only retrieve organization of which they are members.

<h3 id="get-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|integer(int32)|true|The ID of the organization.|

> Example responses

> 200 Response

```json
"{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1\"},\"id\":\"1\",\"name\":\"Charlie Cakes Franchises\",\"scimManaged\":false}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested organization.|[OrganizationDTO](#schemaorganizationdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Delete organization

<a id="opIddeleteOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/organization/{organizationId}`

This method deletes an organization. Note that the organization is deleted regardless of other associations it may have. For example, associations with service desks.

**[Permissions](#permissions) required**: Jira administrator.

<h3 id="delete-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|integer(int32)|true|The ID of the organization.|

> Example responses

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="delete-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the organization was deleted.|None|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get properties keys

<a id="opIdgetPropertiesKeys"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/string/property \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/organization/{organizationId}/property`

Returns the keys of all organization properties. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).

**[Permissions](#permissions) required**: Any

**Response limitations**: Customers can only access properties of organizations of which they are members.

<h3 id="get-properties-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The ID of the organization from which keys will be returned.|

> Example responses

> 200 Response

```json
"{\"entityPropertyKeyBeans\":[{\"key\":\"organization.attributes\",\"self\":\"/rest/servicedeskapi/organization/1/property/propertyKey\"}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-properties-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the organization was found.|[PropertyKeys](#schemapropertykeys)|
|400|Bad Request|Returned if the organization ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get property

<a id="opIdgetProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/string/property/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}`

Returns the value of an organization property. Use this method to obtain the JSON content for an organization's property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).

**[Permissions](#permissions) required**: Any

**Response limitations**: Customers can only access properties of organizations of which they are members.

<h3 id="get-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The ID of the organization from which the property will be returned.|
|propertyKey|path|string|true|The key of the property to return.|

> Example responses

> 200 Response

```json
"{\"key\":\"organization.attributes\",\"value\":{\"mail\":\"charlie@example.com\",\"phone\":\"0800-1233456789\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the organization's property.|[EntityProperty](#schemaentityproperty)|
|400|Bad Request|Returned if the organization ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization or property do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Set property

<a id="opIdsetProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/string/property/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mail": "charlie@example.com",
    "phone": "0800-1233456789"
  }'
```

`PUT /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}`

Sets the value of an organization property. Use this resource to store custom data against an organization. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

To store organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).

**[Permissions](#permissions) required**: Service Desk Administrator or Agent.

Note: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

> Body parameter

```json
{
  "mail": "charlie@example.com",
  "phone": "0800-1233456789"
}
```

<h3 id="set-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The ID of the organization on which the property will be set.|
|propertyKey|path|string|true|The key of the organization's property. The maximum length of the key is 255 bytes.|
|body|body|object|true|The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.|

> Example responses

> 200 Response

```json
null
```

> 201 Response

```json
null
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="set-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the organization property was updated.|Inline|
|201|Created|Returned if the organization property was created.|Inline|
|400|Bad Request|Returned if the organization ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Delete property

<a id="opIddeleteProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/string/property/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}`

Removes an organization property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

For operations relating to organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).

**[Permissions](#permissions) required**: Service Desk Administrator or Agent.

Note: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

<h3 id="delete-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The ID of the organization from which the property will be removed.|
|propertyKey|path|string|true|The key of the property to remove.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="delete-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the organization property was removed.|None|
|400|Bad Request|Returned if the organization ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization or property do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get users in organization

<a id="opIdgetUsersInOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/0/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/organization/{organizationId}/user`

This method returns all the users associated with an organization. Use this method where you want to provide a list of users for an organization or determine if a user is associated with an organization.

**[Permissions](#permissions) required**: Service desk administrator or agent.

<h3 id="get-users-in-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|integer(int32)|true|The ID of the organization.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1/user?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1/user?start=0&limit=1\"},\"values\":[{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd\",\"emailAddress\":\"bob@example.com\",\"displayName\":\"Bob D. Builder\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-users-in-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paged list of users associated with the organization, ordered by their accountId.|[PagedDTOUserDTO](#schemapageddtouserdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Add users to organization

<a id="opIdaddUsersToOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/0/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"
    ],
    "usernames": []
  }'
```

`POST /rest/servicedeskapi/organization/{organizationId}/user`

This method adds users to an organization.

**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to add users to an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

> Body parameter

```json
{
  "accountIds": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"
  ],
  "usernames": []
}
```

<h3 id="add-users-to-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|integer(int32)|true|The ID of the organization.|
|body|body|[UsersOrganizationUpdateDTO](#schemausersorganizationupdatedto)|true|none|
|» accountIds|body|[string]|false|List of customers, specific by account IDs, to add to or remove from the organization.|
|» organizationId|body|integer(int32)|false|The organizationId in which users need to be added|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="add-users-to-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if all the users were valid and added to the organization, no response payload is provided.|None|
|400|Bad Request|Returned if one or more usernames are unknown.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Remove users from organization

<a id="opIdremoveUsersFromOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/organization/0/user \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"
    ],
    "usernames": []
  }'
```

`DELETE /rest/servicedeskapi/organization/{organizationId}/user`

This method removes users from an organization.

**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to delete users from an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

> Body parameter

```json
{
  "accountIds": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"
  ],
  "usernames": []
}
```

<h3 id="remove-users-from-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|integer(int32)|true|The ID of the organization.|
|body|body|[UsersOrganizationUpdateDTO](#schemausersorganizationupdatedto)|true|none|
|» accountIds|body|[string]|false|List of customers, specific by account IDs, to add to or remove from the organization.|
|» organizationId|body|integer(int32)|false|The organizationId in which users need to be added|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="remove-users-from-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request completed successfully. No additional content will be sent in the response.|None|
|400|Bad Request|Returned if one or more user names are invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the organization does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get organizations

<a id="opIdgetOrganizations"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/organization \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization`

This method returns a list of all organizations associated with a service desk.

**[Permissions](#permissions) required**: Service desk's agent.

<h3 id="get-organizations-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk from which the organization list will be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|
|accountId|query|string|false|The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/organization?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/organization?start=0&limit=3\"},\"values\":[{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1\"},\"id\":\"1\",\"name\":\"Charlie Cakes Franchises\",\"scimManaged\":false},{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/2\"},\"id\":\"2\",\"name\":\"Atlas Coffee Co\",\"scimManaged\":false},{\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/organization/3\"},\"id\":\"3\",\"name\":\"The Adjustment Bureau\",\"scimManaged\":false}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-organizations-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested organizations list.|[PagedDTOOrganizationDTO](#schemapageddtoorganizationdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist or the user is not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Add organization

<a id="opIdaddOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/organization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "organizationId": 1
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization`

This method adds an organization to a service desk. If the organization ID is already associated with the service desk, no change is made and the resource returns a 204 success code.

**[Permissions](#permissions) required**: Service desk's agent.

> Body parameter

```json
{
  "organizationId": 1
}
```

<h3 id="add-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk to which the organization will be added. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[OrganizationServiceDeskUpdateDTO](#schemaorganizationservicedeskupdatedto)|true|none|
|» organizationId|body|integer(int32)|true|List of organizations, specified by 'ID' field values, to add to or remove from the service desk.|
|» serviceDeskId|body|string|false|Service desk Id for which, organization needs to be updated|

> Example responses

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="add-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the organization was added or the organization was already associated with the service desk.|None|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or organization do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Remove organization

<a id="opIdremoveOrganization"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/organization \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "organizationId": 1
  }'
```

`DELETE /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization`

This method removes an organization from a service desk. If the organization ID does not match an organization associated with the service desk, no change is made and the resource returns a 204 success code.

**[Permissions](#permissions) required**: Service desk's agent.

> Body parameter

```json
{
  "organizationId": 1
}
```

<h3 id="remove-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk from which the organization will be removed. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[OrganizationServiceDeskUpdateDTO](#schemaorganizationservicedeskupdatedto)|true|none|
|» organizationId|body|integer(int32)|true|List of organizations, specified by 'ID' field values, to add to or remove from the service desk.|
|» serviceDeskId|body|string|false|Service desk Id for which, organization needs to be updated|

> Example responses

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="remove-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the organization was removed from the service desk or no such organization was associated with the service desk.|None|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or organization do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

<h1 id="service-management-public-rest-api-request">Request</h1>

## Get customer requests

<a id="opIdgetCustomerRequests"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request`

This method returns all customer requests for the user executing the query.

The returned customer requests are ordered chronologically by the latest activity on each request. For example, the latest status transition or comment.

**[Permissions](#permissions) required**: Permission to access the specified service desk.

**Response limitations**: For customers, the list returned will include request they created (or were created on their behalf) or are participating in only.

<h3 id="get-customer-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|query|string|false|Filters customer requests where the request summary matches the `searchTerm`. [Wildcards](https://confluence.atlassian.com/display/JIRACORECLOUD/Search+syntax+for+text+fields) can be used in the `searchTerm` parameter.|
|requestOwnership|query|[string]|false|Filters customer requests using the following values:<br><br> *  `OWNED_REQUESTS` returns customer requests where the user is the creator.<br> *  `PARTICIPATED_REQUESTS` returns customer requests where the user is a participant.<br> *  `ORGANIZATION` returns customer requests for an organization of which the user is a member when used in conjunction with `organizationId`.<br> *  `ALL_ORGANIZATIONS` returns customer requests that belong to all organizations of which the user is a member.<br> *  `APPROVER` returns customer requests where the user is an approver. Can be used in conjunction with `approvalStatus` to filter pending or complete approvals.<br> *  `ALL_REQUESTS` returns all customer requests. **Deprecated and will be removed, as the returned requests may change if more values are added in the future. Instead, explicitly list the desired filtering strategies.**<br><br>Multiple values of the query parameter are supported. For example, `requestOwnership=OWNED_REQUESTS&requestOwnership=PARTICIPATED_REQUESTS` will only return customer requests where the user is the creator or a participant. If not specified, filtering defaults to `OWNED_REQUESTS`, `PARTICIPATED_REQUESTS`, and `ALL_ORGANIZATIONS`.|
|requestStatus|query|string|false|Filters customer requests where the request is closed, open, or either of the two where:<br><br> *  `CLOSED_REQUESTS` returns customer requests that are closed.<br> *  `OPEN_REQUESTS` returns customer requests that are open.<br> *  `ALL_REQUESTS` returns all customer requests.|
|approvalStatus|query|string|false|Filters results to customer requests based on their approval status:<br><br> *  `MY_PENDING_APPROVAL` returns customer requests pending the user's approval.<br> *  `MY_HISTORY_APPROVAL` returns customer requests where the user was an approver.<br><br>**Note**: Valid only when used with requestOwnership=APPROVER.|
|organizationId|query|integer(int32)|false|Filters customer requests that belong to a specific organization (note that the user must be a member of that organization). **Note**: Valid only when used with requestOwnership=ORGANIZATION.|
|serviceDeskId|query|integer(int32)|false|Filters customer requests by service desk.|
|requestTypeId|query|integer(int32)|false|Filters customer requests by request type. Note that the `serviceDeskId` must be specified for the service desk in which the request type belongs.|
|expand|query|[string]|false|A multi-value parameter indicating which properties of the customer request to expand, where:<br><br> *  `serviceDesk` returns additional details for each service desk.<br> *  `requestType` returns additional details for each request type.<br> *  `participant` returns the participant details, if any, for each customer request.<br> *  `sla` returns the SLA information on each customer request.<br> *  `status` returns the status transitions, in chronological order, for each customer request.<br> *  `attachment` returns the attachments for the customer request.<br> *  `action` returns the actions that the user can or cannot perform on this customer request.<br> *  `comment` returns the comments, if any, for each customer request.<br> *  `comment.attachment` returns the attachment details, if any, for each comment.<br> *  `comment.renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request?start=0&limit=3\"},\"values\":[{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"issueId\":\"107001\",\"issueKey\":\"HELPDESK-1\",\"summary\":\"Request JSD help via REST\",\"requestTypeId\":\"25\",\"serviceDeskId\":\"10\",\"createdDate\":{\"epochMillis\":1444290120000,\"friendly\":\"Monday 14:42 PM\",\"iso8601\":\"2015-10-08T14:42:00+0700\",\"jira\":\"2015-10-08T14:42:00.000+0700\"},\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"requestFieldValues\":[{\"fieldId\":\"summary\",\"label\":\"What do you need?\",\"value\":\"Request JSD help via REST\"},{\"fieldId\":\"description\",\"label\":\"Why do you need this?\",\"renderedValue\":{\"html\":\"<p>I need a new <b>mouse</b> for my Mac</p>\"},\"value\":\"I need a new *mouse* for my Mac\"}],\"currentStatus\":{\"status\":\"Waiting for Support\",\"statusCategory\":\"NEW\",\"statusDate\":{\"epochMillis\":1444287660000,\"friendly\":\"Today 14:01 PM\",\"iso8601\":\"2015-10-08T14:01:00+0700\",\"jira\":\"2015-10-08T14:01:00.000+0700\"}},\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/issue/107001\",\"web\":\"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1\",\"agent\":\"https://your-domain.atlassian.net/browse/HELPDESK-1\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001\"}},{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"issueId\":\"107002\",\"issueKey\":\"HELPDESK-2\",\"requestTypeId\":\"25\",\"serviceDeskId\":\"10\",\"createdDate\":{\"epochMillis\":1444289400000,\"friendly\":\"Monday 14:30 PM\",\"iso8601\":\"2015-10-08T14:30:00+0700\",\"jira\":\"2015-10-08T14:30:00.000+0700\"},\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"requestFieldValues\":[{\"fieldId\":\"summary\",\"label\":\"What do you need?\",\"value\":\"Request a new account\"},{\"fieldId\":\"description\",\"label\":\"Why do you need this?\",\"value\":\"Create an account on Jira\"}],\"currentStatus\":{\"status\":\"Waiting for Support\",\"statusCategory\":\"NEW\",\"statusDate\":{\"epochMillis\":1444287660000,\"friendly\":\"Today 14:01 PM\",\"iso8601\":\"2015-10-08T14:01:00+0700\",\"jira\":\"2015-10-08T14:01:00.000+0700\"}},\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/issue/107002\",\"web\":\"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-2\",\"agent\":\"https://your-domain.atlassian.net/browse/HELPDESK-2\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/107002\"}},{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"issueId\":\"109006\",\"issueKey\":\"SIMPLEDESK-6\",\"requestTypeId\":\"33\",\"serviceDeskId\":\"12\",\"createdDate\":{\"epochMillis\":1444030200000,\"friendly\":\"Monday 14:30 PM\",\"iso8601\":\"2015-10-05T14:30:00+0700\",\"jira\":\"2015-10-05T14:30:00.000+0700\"},\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"requestFieldValues\":[{\"fieldId\":\"summary\",\"label\":\"Summarize the problem\",\"value\":\"Printer on level 3 did not work\"},{\"fieldId\":\"description\",\"value\":\"Ink cartridge is empty\"}],\"currentStatus\":{\"status\":\"Waiting for Support\",\"statusCategory\":\"NEW\",\"statusDate\":{\"epochMillis\":1444287600000,\"friendly\":\"Today 14:00 PM\",\"iso8601\":\"2015-10-08T14:00:00+0700\",\"jira\":\"2015-10-08T14:00:00.000+0700\"}},\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/issue/109006\",\"web\":\"https://your-domain.atlassian.net/servicedesk/customer/portal/12/SIMPLEDESK-6\",\"agent\":\"https://your-domain.atlassian.net/browse/SIMPLEDESK-6\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/109006\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-customer-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer requests, on the specified page of the results.|[PagedDTOCustomerRequestDTO](#schemapageddtocustomerrequestdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the user does not have permission to access the service desk, the service desk does not exist, or the service desk does not support the request type.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Create customer request

<a id="opIdcreateCustomerRequest"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "form": {
      "answers": {
        "1": {
          "text": "Answer to a text form field"
        },
        "2": {
          "date": "2023-07-06"
        },
        "3": {
          "time": "14:35"
        },
        "4": {
          "choices": [
            "5"
          ]
        },
        "5": {
          "users": [
            "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
          ]
        }
      }
    },
    "isAdfRequest": false,
    "requestFieldValues": {
      "description": "I need a new *mouse* for my Mac",
      "summary": "Request JSD help via REST"
    },
    "requestParticipants": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ],
    "requestTypeId": "25",
    "serviceDeskId": "10"
  }'
```

`POST /rest/servicedeskapi/request`

This method creates a customer request in a service desk.

The JSON request must include the service desk and customer request type, as well as any fields that are required for the request type. A list of the fields required by a customer request type can be obtained using [servicedesk/\{serviceDeskId\}/requesttype/\{requestTypeId\}/field](#api-servicedesk-serviceDeskId-requesttype-requestTypeId-field-get).

The fields required for a customer request type depend on the user's permissions:

 *  `raiseOnBehalfOf` is not available to Users who have the customer permission only.
 *  `requestParticipants` is not available to Users who have the customer permission only or if the feature is turned off for customers.

`requestFieldValues` is a map of Jira field IDs and their values. See [Field input formats](#fieldformats), for details of each field's JSON semantics and the values they can take.

**[Permissions](#permissions) required**: Permission to create requests in the specified service desk.

> Body parameter

```json
{
  "form": {
    "answers": {
      "1": {
        "text": "Answer to a text form field"
      },
      "2": {
        "date": "2023-07-06"
      },
      "3": {
        "time": "14:35"
      },
      "4": {
        "choices": [
          "5"
        ]
      },
      "5": {
        "users": [
          "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
        ]
      }
    }
  },
  "isAdfRequest": false,
  "requestFieldValues": {
    "description": "I need a new *mouse* for my Mac",
    "summary": "Request JSD help via REST"
  },
  "requestParticipants": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ],
  "requestTypeId": "25",
  "serviceDeskId": "10"
}
```

<h3 id="create-customer-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequestCreateDTO](#schemarequestcreatedto)|true|none|
|» channel|body|string|false|(Experimental) Shows extra information for the request channel.|
|» form|body|object|false|Provides answers to the form associated with a request type. Omit Jira fields from `requestFieldValues` if they're linked to form answers. For form answers in ADF format, set `isAdfRequest` to true.|
|» » answers|body|object|false|JSON mapping of form field answers containing form field IDs and corresponding values.|
|» » » **additionalProperties**|body|[FormAnswer](#schemaformanswer)|false|none|
|» isAdfRequest|body|boolean|false|(Experimental) Whether to accept rich text fields in Atlassian Document Format (ADF).|
|» raiseOnBehalfOf|body|string|false|The `accountId` of the customer that the request is being raised on behalf of.|
|» requestFieldValues|body|object|false|JSON map of Jira field IDs and their values representing the content of the request.|
|» » **additionalProperties**|body|object|false|none|
|» requestParticipants|body|[string]|false|List of customers to participate in the request, as a list of `accountId` values.|
|» requestTypeId|body|string|false|ID of the request type for the request.|
|» serviceDeskId|body|string|false|ID of the service desk in which to create the request.|

> Example responses

> 201 Response

```json
"{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"issueId\":\"107001\",\"issueKey\":\"HELPDESK-1\",\"summary\":\"Request JSD help via REST\",\"requestTypeId\":\"25\",\"serviceDeskId\":\"10\",\"createdDate\":{\"epochMillis\":1444290120000,\"friendly\":\"Monday 14:42 PM\",\"iso8601\":\"2015-10-08T14:42:00+0700\",\"jira\":\"2015-10-08T14:42:00.000+0700\"},\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"requestFieldValues\":[{\"fieldId\":\"summary\",\"label\":\"What do you need?\",\"value\":\"Request JSD help via REST\"},{\"fieldId\":\"description\",\"label\":\"Why do you need this?\",\"renderedValue\":{\"html\":\"<p>I need a new <b>mouse</b> for my Mac</p>\"},\"value\":\"I need a new *mouse* for my Mac\"}],\"currentStatus\":{\"status\":\"Waiting for Support\",\"statusCategory\":\"NEW\",\"statusDate\":{\"epochMillis\":1444287660000,\"friendly\":\"Today 14:01 PM\",\"iso8601\":\"2015-10-08T14:01:00+0700\",\"jira\":\"2015-10-08T14:01:00.000+0700\"}},\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/issue/107001\",\"web\":\"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1\",\"agent\":\"https://your-domain.atlassian.net/browse/HELPDESK-1\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 422 Response

```json
"{\"errorMessage\":\"Invalid request\",\"errors\":[{\"code\":\"VALIDATION_ERROR\",\"context\":[{\"id\":\"q123\",\"type\":\"question\"}],\"detail\":\"The field is required\",\"status\":422,\"title\":\"Validation failed\"}],\"i18nErrorMessage\":{\"i18nKey\":\"sd.request.create.error.proforma.form.validation.error\",\"parameters\":[]}}"
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-customer-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returned if the customer request was created.|[CustomerRequestDTO](#schemacustomerrequestdto)|
|400|Bad Request|Returned if the HTTP request call is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Returned if one or more form answers fail validation rules configured by Jira admins.|[FormValidationErrorResponseDTO](#schemaformvalidationerrorresponsedto)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Validate customer request

<a id="opIdvalidateCustomerRequest"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel": "string",
    "form": {
      "answers": {
        "property1": {
          "adf": {
            "array": true,
            "bigDecimal": true,
            "bigInteger": true,
            "bigIntegerValue": 0,
            "binary": true,
            "binaryValue": [
              "string"
            ],
            "boolean": true,
            "booleanValue": true,
            "containerNode": true,
            "decimalValue": 0,
            "double": true,
            "doubleValue": 0,
            "elements": {},
            "fieldNames": {},
            "fields": {},
            "floatingPointNumber": true,
            "int": true,
            "intValue": 0,
            "integralNumber": true,
            "long": true,
            "longValue": 0,
            "missingNode": true,
            "null": true,
            "number": true,
            "numberType": "INT",
            "numberValue": 0,
            "object": true,
            "pojo": true,
            "textValue": "string",
            "textual": true,
            "valueAsBoolean": true,
            "valueAsDouble": 0,
            "valueAsInt": 0,
            "valueAsLong": 0,
            "valueAsText": "string",
            "valueNode": true
          },
          "choices": [
            "string"
          ],
          "date": "string",
          "files": [
            "string"
          ],
          "text": "string",
          "time": "string",
          "users": [
            "string"
          ]
        },
        "property2": {
          "adf": {
            "array": true,
            "bigDecimal": true,
            "bigInteger": true,
            "bigIntegerValue": 0,
            "binary": true,
            "binaryValue": [
              "string"
            ],
            "boolean": true,
            "booleanValue": true,
            "containerNode": true,
            "decimalValue": 0,
            "double": true,
            "doubleValue": 0,
            "elements": {},
            "fieldNames": {},
            "fields": {},
            "floatingPointNumber": true,
            "int": true,
            "intValue": 0,
            "integralNumber": true,
            "long": true,
            "longValue": 0,
            "missingNode": true,
            "null": true,
            "number": true,
            "numberType": "INT",
            "numberValue": 0,
            "object": true,
            "pojo": true,
            "textValue": "string",
            "textual": true,
            "valueAsBoolean": true,
            "valueAsDouble": 0,
            "valueAsInt": 0,
            "valueAsLong": 0,
            "valueAsText": "string",
            "valueNode": true
          },
          "choices": [
            "string"
          ],
          "date": "string",
          "files": [
            "string"
          ],
          "text": "string",
          "time": "string",
          "users": [
            "string"
          ]
        }
      }
    },
    "isAdfRequest": true,
    "raiseOnBehalfOf": "string",
    "requestFieldValues": {
      "property1": null,
      "property2": null
    },
    "requestParticipants": [
      "string"
    ],
    "requestTypeId": "string",
    "serviceDeskId": "string"
  }'
```

`POST /rest/servicedeskapi/request/validate`

Validates a customer request payload without creating (persisting) a request.

This endpoint runs exactly the same structural and semantic validations as [Create customer request](#api-request-post) \\u2014 including ProForma form validation \\u2014 but performs **no mutation**: no issue is created and no side effects (attachments, comments, analytics) run.

The response is intentionally verbose and structured so that it can be consumed by automated agents (for example an LLM repairing an invalid payload): every failure carries a machine-readable location (field id / form entity) and a human-readable reason. A valid payload returns HTTP 200 with \{@code valid: true\}; an invalid payload returns HTTP 400 with \{@code valid: false\} together with the field, form and general validation errors.

**[Permissions](#permissions) required**: Permission to create requests in the specified service desk.

> Body parameter

```json
{
  "channel": "string",
  "form": {
    "answers": {
      "property1": {
        "adf": {
          "array": true,
          "bigDecimal": true,
          "bigInteger": true,
          "bigIntegerValue": 0,
          "binary": true,
          "binaryValue": [
            "string"
          ],
          "boolean": true,
          "booleanValue": true,
          "containerNode": true,
          "decimalValue": 0,
          "double": true,
          "doubleValue": 0,
          "elements": {},
          "fieldNames": {},
          "fields": {},
          "floatingPointNumber": true,
          "int": true,
          "intValue": 0,
          "integralNumber": true,
          "long": true,
          "longValue": 0,
          "missingNode": true,
          "null": true,
          "number": true,
          "numberType": "INT",
          "numberValue": 0,
          "object": true,
          "pojo": true,
          "textValue": "string",
          "textual": true,
          "valueAsBoolean": true,
          "valueAsDouble": 0,
          "valueAsInt": 0,
          "valueAsLong": 0,
          "valueAsText": "string",
          "valueNode": true
        },
        "choices": [
          "string"
        ],
        "date": "string",
        "files": [
          "string"
        ],
        "text": "string",
        "time": "string",
        "users": [
          "string"
        ]
      },
      "property2": {
        "adf": {
          "array": true,
          "bigDecimal": true,
          "bigInteger": true,
          "bigIntegerValue": 0,
          "binary": true,
          "binaryValue": [
            "string"
          ],
          "boolean": true,
          "booleanValue": true,
          "containerNode": true,
          "decimalValue": 0,
          "double": true,
          "doubleValue": 0,
          "elements": {},
          "fieldNames": {},
          "fields": {},
          "floatingPointNumber": true,
          "int": true,
          "intValue": 0,
          "integralNumber": true,
          "long": true,
          "longValue": 0,
          "missingNode": true,
          "null": true,
          "number": true,
          "numberType": "INT",
          "numberValue": 0,
          "object": true,
          "pojo": true,
          "textValue": "string",
          "textual": true,
          "valueAsBoolean": true,
          "valueAsDouble": 0,
          "valueAsInt": 0,
          "valueAsLong": 0,
          "valueAsText": "string",
          "valueNode": true
        },
        "choices": [
          "string"
        ],
        "date": "string",
        "files": [
          "string"
        ],
        "text": "string",
        "time": "string",
        "users": [
          "string"
        ]
      }
    }
  },
  "isAdfRequest": true,
  "raiseOnBehalfOf": "string",
  "requestFieldValues": {
    "property1": null,
    "property2": null
  },
  "requestParticipants": [
    "string"
  ],
  "requestTypeId": "string",
  "serviceDeskId": "string"
}
```

<h3 id="validate-customer-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequestCreateDTO](#schemarequestcreatedto)|true|none|
|» channel|body|string|false|(Experimental) Shows extra information for the request channel.|
|» form|body|object|false|Provides answers to the form associated with a request type. Omit Jira fields from `requestFieldValues` if they're linked to form answers. For form answers in ADF format, set `isAdfRequest` to true.|
|» » answers|body|object|false|JSON mapping of form field answers containing form field IDs and corresponding values.|
|» » » **additionalProperties**|body|[FormAnswer](#schemaformanswer)|false|none|
|» isAdfRequest|body|boolean|false|(Experimental) Whether to accept rich text fields in Atlassian Document Format (ADF).|
|» raiseOnBehalfOf|body|string|false|The `accountId` of the customer that the request is being raised on behalf of.|
|» requestFieldValues|body|object|false|JSON map of Jira field IDs and their values representing the content of the request.|
|» » **additionalProperties**|body|object|false|none|
|» requestParticipants|body|[string]|false|List of customers to participate in the request, as a list of `accountId` values.|
|» requestTypeId|body|string|false|ID of the request type for the request.|
|» serviceDeskId|body|string|false|ID of the service desk in which to create the request.|

> Example responses

> 200 Response

```json
{
  "errorMessage": "string",
  "errorMessages": [
    "string"
  ],
  "fieldErrors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "formErrors": [
    {
      "code": "string",
      "context": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "detail": "string",
      "status": 0,
      "title": "string"
    }
  ],
  "reasonKey": "string",
  "valid": true
}
```

> 400 Response

```json
{
  "errorMessage": "string",
  "errorMessages": [
    "string"
  ],
  "fieldErrors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "formErrors": [
    {
      "code": "string",
      "context": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "detail": "string",
      "status": 0,
      "title": "string"
    }
  ],
  "reasonKey": "string",
  "valid": true
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="validate-customer-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned with the validation result. \{@code valid\} is true when the payload is valid.|[RequestValidationResultDTO](#schemarequestvalidationresultdto)|
|400|Bad Request|Returned when the payload is invalid; the body describes why validation failed.|[RequestValidationResultDTO](#schemarequestvalidationresultdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get customer request by id or key

<a id="opIdgetCustomerRequestByIdOrKey"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}`

This method returns a customer request.

**[Permissions](#permissions) required**: Permission to access the specified service desk.

**Response limitations**: For customers, only a request they created, was created on their behalf, or they are participating in will be returned.

**Note:** `requestFieldValues` does not include hidden fields. To get a list of request type fields that includes hidden fields, see [/rest/servicedeskapi/servicedesk/\{serviceDeskId\}/requesttype/\{requestTypeId\}/field](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-requesttype-requesttypeid-field-get)

<h3 id="get-customer-request-by-id-or-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or Key of the customer request to be returned|
|expand|query|[string]|false|A multi-value parameter indicating which properties of the customer request to expand, where:<br><br> *  `serviceDesk` returns additional service desk details.<br> *  `requestType` returns additional customer request type details.<br> *  `participant` returns the participant details.<br> *  `sla` returns the SLA information.<br> *  `status` returns the status transitions, in chronological order.<br> *  `attachment` returns the attachments.<br> *  `action` returns the actions that the user can or cannot perform.<br> *  `comment` returns the comments.<br> *  `comment.attachment` returns the attachment details for each comment.<br> *  `comment.renderedBody` (Experimental) return the rendered body in HTML format (in addition to the raw body) for each comment.|

> Example responses

> 200 Response

```json
"{\"_expands\":[\"participant\",\"status\",\"sla\",\"requestType\",\"serviceDesk\",\"attachment\",\"action\",\"comment\"],\"issueId\":\"107001\",\"issueKey\":\"HELPDESK-1\",\"summary\":\"Request JSD help via REST\",\"requestTypeId\":\"25\",\"serviceDeskId\":\"10\",\"createdDate\":{\"epochMillis\":1444290120000,\"friendly\":\"Monday 14:42 PM\",\"iso8601\":\"2015-10-08T14:42:00+0700\",\"jira\":\"2015-10-08T14:42:00.000+0700\"},\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"requestFieldValues\":[{\"fieldId\":\"summary\",\"label\":\"What do you need?\",\"value\":\"Request JSD help via REST\"},{\"fieldId\":\"description\",\"label\":\"Why do you need this?\",\"renderedValue\":{\"html\":\"<p>I need a new <b>mouse</b> for my Mac</p>\"},\"value\":\"I need a new *mouse* for my Mac\"}],\"currentStatus\":{\"status\":\"Waiting for Support\",\"statusCategory\":\"NEW\",\"statusDate\":{\"epochMillis\":1444287660000,\"friendly\":\"Today 14:01 PM\",\"iso8601\":\"2015-10-08T14:01:00+0700\",\"jira\":\"2015-10-08T14:01:00.000+0700\"}},\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/issue/107001\",\"web\":\"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1\",\"agent\":\"https://your-domain.atlassian.net/browse/HELPDESK-1\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001\"}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-customer-request-by-id-or-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request.|[CustomerRequestDTO](#schemacustomerrequestdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get approvals

<a id="opIdgetApprovals"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/approval \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/approval`

This method returns all approvals on a customer request.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-approvals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of approvals to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be queried for its approvals.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval?start=0&limit=3\"},\"values\":[{\"id\":\"1\",\"name\":\"Please approve this request\",\"finalDecision\":\"approved\",\"canAnswerApproval\":false,\"approvers\":[{\"approver\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"approverDecision\":\"approved\"}],\"createdDate\":{\"epochMillis\":1475046060000,\"friendly\":\"Monday 14:01 PM\",\"iso8601\":\"2016-09-28T14:01:00+0700\",\"jira\":\"2016-09-28T14:01:00.000+0700\"},\"completedDate\":{\"epochMillis\":1475134200000,\"friendly\":\"Today 14:30 PM\",\"iso8601\":\"2016-09-29T14:30:00+0700\",\"jira\":\"2016-09-29T14:30:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1\"}},{\"id\":\"2\",\"name\":\"Waiting for approval\",\"finalDecision\":\"declined\",\"canAnswerApproval\":false,\"approvers\":[{\"approver\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"approverDecision\":\"approved\"}],\"createdDate\":{\"epochMillis\":1475650860000,\"friendly\":\"Wednesday 14:01 PM\",\"iso8601\":\"2016-10-05T14:01:00+0700\",\"jira\":\"2016-10-05T14:01:00.000+0700\"},\"completedDate\":{\"epochMillis\":1475739000000,\"friendly\":\"Thursday 14:30 PM\",\"iso8601\":\"2016-10-06T14:30:00+0700\",\"jira\":\"2016-10-06T14:30:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/2\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-approvals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request's approvals.|[PagedDTOApprovalDTO](#schemapageddtoapprovaldto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get approval by id

<a id="opIdgetApprovalById"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/approval/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId}`

This method returns an approval. Use this method to determine the status of an approval and the list of approvers.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-approval-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request the approval is on.|
|approvalId|path|integer(int32)|true|The ID of the approval to be returned.|

> Example responses

> 200 Response

```json
"{\"id\":\"1\",\"name\":\"Please approve this request\",\"finalDecision\":\"approved\",\"canAnswerApproval\":false,\"approvers\":[{\"approver\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"approverDecision\":\"approved\"}],\"createdDate\":{\"epochMillis\":1475046060000,\"friendly\":\"Monday 14:01 PM\",\"iso8601\":\"2016-09-28T14:01:00+0700\",\"jira\":\"2016-09-28T14:01:00.000+0700\"},\"completedDate\":{\"epochMillis\":1475134200000,\"friendly\":\"Today 14:30 PM\",\"iso8601\":\"2016-09-29T14:30:00+0700\",\"jira\":\"2016-09-29T14:30:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1\"}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-approval-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested approval.|[ApprovalDTO](#schemaapprovaldto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request or approval do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Answer approval

<a id="opIdanswerApproval"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/approval/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "decision": "approve"
  }'
```

`POST /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId}`

This method enables a user to **Approve** or **Decline** an approval on a customer request. The approval is assumed to be owned by the user making the call.

**[Permissions](#permissions) required**: User is assigned to the approval request.

> Body parameter

```json
{
  "decision": "approve"
}
```

<h3 id="answer-approval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be updated.|
|approvalId|path|integer(int32)|true|The ID of the approval to be updated.|
|body|body|[ApprovalDecisionRequestDTO](#schemaapprovaldecisionrequestdto)|true|none|
|» decision|body|string|false|Response to the approval request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» decision|approve|
|» decision|decline|

> Example responses

> 200 Response

```json
"{\"id\":\"1\",\"name\":\"Please approve this request\",\"finalDecision\":\"approved\",\"canAnswerApproval\":false,\"approvers\":[{\"approver\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"approverDecision\":\"approved\"}],\"createdDate\":{\"epochMillis\":1475046060000,\"friendly\":\"Monday 14:01 PM\",\"iso8601\":\"2016-09-28T14:01:00+0700\",\"jira\":\"2016-09-28T14:01:00.000+0700\"},\"completedDate\":{\"epochMillis\":1475134200000,\"friendly\":\"Today 14:30 PM\",\"iso8601\":\"2016-09-29T14:30:00+0700\",\"jira\":\"2016-09-29T14:30:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 409 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="answer-approval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated approval.|[ApprovalDTO](#schemaapprovaldto)|
|400|Bad Request|Returned if the request is not valid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request or the approval do not exist.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Returned if the customer has already submitted a decision or the approval has already been completed.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get attachments for request

<a id="opIdgetAttachmentsForRequest"></a>

> Code samples

```bash
curl 'https://your-domain.atlassian.net/rest/servicedeskapi/request/string/attachment?start=0&limit=50' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/attachment`

This method returns all the attachments for a customer requests.

**[Permissions](#permissions) required**: Permission to view the customer request.

**Response limitations**: Customers will only get a list of public attachments.

<h3 id="get-attachments-for-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request from which the attachments will be listed.|
|start|query|integer(int32)|true|The starting index of the returned attachment. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|true|The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2\"},\"values\":[{\"filename\":\"screenshot.png\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":23123,\"mimeType\":\"image/png\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10000\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png\",\"thumbnail\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png\"}},{\"filename\":\"log.txt\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":32132,\"mimeType\":\"text/plain\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10001\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-attachments-for-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the visible attachments from the customer request.|[PagedDTOAttachmentDTO](#schemapageddtoattachmentdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Create comment with attachment

<a id="opIdcreateCommentWithAttachment"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/attachment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalComment": {
      "body": "Please find the screenshot and the log file attached."
    },
    "public": true,
    "temporaryAttachmentIds": [
      "temp910441317820424274",
      "temp3600755449679003114"
    ]
  }'
```

`POST /rest/servicedeskapi/request/{issueIdOrKey}/attachment`

This method creates a comment on a customer request using one or more attachment files (uploaded using [servicedeskapi/servicedesk/\{serviceDeskId\}/attachTemporaryFile](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-attachtemporaryfile-post)), with the visibility set by `public`. See

 *  GET [servicedeskapi/request/\{issueIdOrKey\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-attachment-get)
 *  GET [servicedeskapi/request/\{issueIdOrKey\}/comment/\{commentId\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-comment-commentid-attachment-get)

**[Permissions](#permissions) required**: Permission to add an attachment.

**Request limitations**: Customers can set public visibility only.

> Body parameter

```json
{
  "additionalComment": {
    "body": "Please find the screenshot and the log file attached."
  },
  "public": true,
  "temporaryAttachmentIds": [
    "temp910441317820424274",
    "temp3600755449679003114"
  ]
}
```

<h3 id="create-comment-with-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to which the attachment will be added.|
|body|body|[AttachmentCreateDTO](#schemaattachmentcreatedto)|true|none|
|» additionalComment|body|object|false|Additional content of the comment|
|» » body|body|string|false|Content of the comment.|
|» public|body|boolean|false|Controls whether the comment and its attachments are visible to customers|
|» temporaryAttachmentIds|body|[string]|false|List of IDs for the temporary attachments to be added to the customer request.|

> Example responses

> 201 Response

```json
"{\"comment\":{\"_expands\":[\"attachment\",\"renderedBody\"],\"id\":\"1000\",\"body\":\"Please find the screenshot and the log file attached. !screenshot.png|thumbnail! [^log.txt] _(32 kB)_\",\"public\":true,\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000\"}},\"attachments\":{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2\"},\"values\":[{\"filename\":\"screenshot.png\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":23123,\"mimeType\":\"image/png\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10000\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png\",\"thumbnail\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png\"}},{\"filename\":\"log.txt\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":32132,\"mimeType\":\"text/plain\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10001\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt\"}}]}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-comment-with-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the attachments and comment.|[AttachmentCreateResultDTO](#schemaattachmentcreateresultdto)|
|400|Bad Request|Returned if the HTTP request is invalid, including missing the required `public` field or list of temporary file IDs, or if the temporary files have expired.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get attachment content

<a id="opIdgetAttachmentContent"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/attachment/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}`

Returns the contents of an attachment.

To return a thumbnail of the attachment, use [servicedeskapi/request/\{issueIdOrKey\}/attachment/\{attachmentId\}/thumbnail](./#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-thumbnail-get).

**[Permissions](#permissions) required:** For the issue containing the attachment:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

<h3 id="get-attachment-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key for the customer request the attachment is associated with|
|attachmentId|path|integer(int64)|true|The ID for the attachment|

> Example responses

> 200 Response

```json
null
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-attachment-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|Inline|
|303|See Other|Returned if the request is successful. See the `Location` header for the download URL.|None|
|401|Unauthorized|Returned if the authentication credentials are incorrect.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if:<br><br> *  the attachment is not found.<br> *  attachments are disabled in the Jira settings.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get attachment thumbnail

<a id="opIdgetAttachmentThumbnail"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/attachment/0/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}/thumbnail`

Returns the thumbnail of an attachment.

To return the attachment contents, use [servicedeskapi/request/\{issueIdOrKey\}/attachment/\{attachmentId\}](#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-get).

**[Permissions](#permissions) required:** For the issue containing the attachment:

 *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
 *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

<h3 id="get-attachment-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key for the customer request the attachment is associated with|
|attachmentId|path|integer(int64)|true|The ID of the attachment.|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-attachment-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|Inline|
|303|See Other|Returned if the request is successful. See the `Location` header for the download URL.|None|
|400|Bad Request|Returned if the request is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the authentication credentials are incorrect.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|The user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if:<br><br> *  the attachment is not found.<br> *  attachments are disabled in the Jira settings.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get request comments

<a id="opIdgetRequestComments"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/comment \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/comment`

This method returns all comments on a customer request. No permissions error is provided if, for example, the user doesn't have access to the service desk or request, the method simply returns an empty response.

**[Permissions](#permissions) required**: Permission to view the customer request.

**Response limitations**: Customers are returned public comments only.

<h3 id="get-request-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request whose comments will be retrieved.|
|public|query|boolean|false|Specifies whether to return public comments or not. Default: true.|
|internal|query|boolean|false|Specifies whether to return internal comments or not. Default: true.|
|expand|query|[string]|false|A multi-value parameter indicating which properties of the comment to expand:<br><br> *  `attachment` returns the attachment details, if any, for each comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\{issueIdOrKey\}/attachment](#api-request-issueIdOrKey-attachment-get).)<br> *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment.|
|start|query|integer(int32)|false|The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment?start=0&limit=1\"},\"values\":[{\"_expands\":[\"attachment\",\"renderedBody\"],\"id\":\"1000\",\"body\":\"Hello there\",\"public\":true,\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the comments, on the specified page of the results.|[PagedDTOCommentDTO](#schemapageddtocommentdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Create request comment

<a id="opIdcreateRequestComment"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/comment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "Hello there",
    "public": true
  }'
```

`POST /rest/servicedeskapi/request/{issueIdOrKey}/comment`

This method creates a public or private (internal) comment on a customer request, with the comment visibility set by `public`. The user recorded as the author of the comment.

**[Permissions](#permissions) required**: User has Add Comments permission.

**Request limitations**: Customers can set comments to public visibility only.

> Body parameter

```json
{
  "body": "Hello there",
  "public": true
}
```

<h3 id="create-request-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to which the comment will be added.|
|body|body|[CommentCreateDTO](#schemacommentcreatedto)|true|none|
|» body|body|string|false|Content of the comment.|
|» public|body|boolean|false|Indicates whether the comment is public (true) or private/internal (false).|

> Example responses

> 201 Response

```json
"{\"_expands\":[\"attachment\",\"renderedBody\"],\"id\":\"1000\",\"body\":\"Hello there\",\"public\":true,\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-request-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the comment.|[CommentDTO](#schemacommentdto)|
|400|Bad Request|Returned if the HTTP request is invalid, e.g. missing the required `public`.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get request comment by id

<a id="opIdgetRequestCommentById"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/comment/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}`

This method returns details of a customer request's comment.

**[Permissions](#permissions) required**: Permission to view the customer request.

**Response limitations**: Customers can only view public comments on requests where they are the reporter or a participant whereas agents can see both internal and public comments.

<h3 id="get-request-comment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request that contains the comment.|
|commentId|path|integer(int64)|true|The ID of the comment to retrieve.|
|expand|query|[string]|false|A multi-value parameter indicating which properties of the comment to expand:<br><br> *  `attachment` returns the attachment details, if any, for the comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\{issueIdOrKey\}/attachment](#api-request-issueIdOrKey-attachment-get).)<br> *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) of the comment.|

> Example responses

> 200 Response

```json
"{\"_expands\":[\"attachment\",\"renderedBody\"],\"id\":\"1000\",\"body\":\"Hello there\",\"public\":true,\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000\"}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-comment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the comment.|[CommentDTO](#schemacommentdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request or comment do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get comment attachments

<a id="opIdgetCommentAttachments"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/comment/0/attachment \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}/attachment`

This method returns the attachments referenced in a comment.

**[Permissions](#permissions) required**: Permission to view the customer request.

**Response limitations**: Customers can only view public comments, and retrieve their attachments, on requests where they are the reporter or a participant whereas agents can see both internal and public comments.

<h3 id="get-comment-attachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request that contains the comment.|
|commentId|path|integer(int64)|true|The ID of the comment.|
|start|query|integer(int32)|false|The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2\"},\"values\":[{\"filename\":\"screenshot.png\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":23123,\"mimeType\":\"image/png\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10000\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png\",\"thumbnail\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png\"}},{\"filename\":\"log.txt\",\"author\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}},\"created\":{\"epochMillis\":1444360920000,\"friendly\":\"Today 10:22 AM\",\"iso8601\":\"2015-10-09T10:22:00+0700\",\"jira\":\"2015-10-09T10:22:00.000+0700\"},\"size\":32132,\"mimeType\":\"text/plain\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/attachment/10001\",\"content\":\"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-comment-attachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the attachments, on the specified page of the results.|[PagedDTOAttachmentDTO](#schemapageddtoattachmentdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request or the comment do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:request.attachment:jira-service-management read:request.comment:jira-service-management read:user:jira )
</aside>

## Get subscription status

<a id="opIdgetSubscriptionStatus"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/notification \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/notification`

This method returns the notification subscription status of the user making the request. Use this method to determine if the user is subscribed to a customer request's notifications.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-subscription-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be queried for subscription status.|

> Example responses

> 200 Response

```json
"{\"subscribed\":true}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-subscription-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the status of the notification subscription.|[RequestNotificationSubscriptionDTO](#schemarequestnotificationsubscriptiondto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Subscribe

<a id="opIdsubscribe"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/notification \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /rest/servicedeskapi/request/{issueIdOrKey}/notification`

This method subscribes the user to receiving notifications from a customer request.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="subscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be subscribed to.|

> Example responses

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="subscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns if the user was subscribed.|None|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Unsubscribe

<a id="opIdunsubscribe"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/notification \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/request/{issueIdOrKey}/notification`

This method unsubscribes the user from notifications from a customer request.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="unsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be unsubscribed from.|

> Example responses

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="unsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns if the user was unsubscribed.|None|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get request participants

<a id="opIdgetRequestParticipants"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/participant \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/participant`

This method returns a list of all the participants on a customer request.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-request-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be queried for its participants.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1\"},\"values\":[{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request's participants, on the specified page of the results.|[PagedDTOUserDTO](#schemapageddtouserdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Add request participants

<a id="opIdaddRequestParticipants"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/participant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [],
    "usernames": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ]
  }'
```

`POST /rest/servicedeskapi/request/{issueIdOrKey}/participant`

This method adds participants to a customer request.

**[Permissions](#permissions) required**: Permission to manage participants on the customer request.

Note, participants can be added when creating a customer request using the [request](#api-request-post) resource, by defining the participants in the `requestParticipants` field.

> Body parameter

```json
{
  "accountIds": [],
  "usernames": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ]
}
```

<h3 id="add-request-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to have participants added.|
|body|body|[RequestParticipantUpdateDTO](#schemarequestparticipantupdatedto)|true|none|
|» accountIds|body|[string]|false|List of users, specified by account IDs, to add to or remove as participants in the request.|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1\"},\"values\":[{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="add-request-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the participants added to the customer request.|[PagedDTOUserDTO](#schemapageddtouserdto)|
|400|Bad Request|Returned if any user to be added as a participant does not exist.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Remove request participants

<a id="opIdremoveRequestParticipants"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/participant \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [],
    "usernames": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ]
  }'
```

`DELETE /rest/servicedeskapi/request/{issueIdOrKey}/participant`

This method removes participants from a customer request.

**[Permissions](#permissions) required**: Permission to manage participants on the customer request.

> Body parameter

```json
{
  "accountIds": [],
  "usernames": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ]
}
```

<h3 id="remove-request-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to have participants removed.|
|body|body|[RequestParticipantUpdateDTO](#schemarequestparticipantupdatedto)|true|none|
|» accountIds|body|[string]|false|List of users, specified by account IDs, to add to or remove as participants in the request.|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1\"},\"values\":[{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="remove-request-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the first page of the customer request's participants (after removal of the users).|[PagedDTOUserDTO](#schemapageddtouserdto)|
|400|Bad Request|Returned if any user to be removed as a participant does not exist, is not a participant in the customer request, or is the reporter of the request.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get sla information

<a id="opIdgetSlaInformation"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/sla \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/sla`

This method returns all the SLA records on a customer request. A customer request can have zero or more SLAs. Each SLA can have recordings for zero or more "completed cycles" and zero or 1 "ongoing cycle". Each cycle includes information on when it started and stopped, and whether it breached the SLA goal.

**[Permissions](#permissions) required**:

 *  Agent for the Service Desk containing the queried customer request, AND
 *  Browse Projects permission on the project containing the customer request, including any restrictions imposed by issue security schemes or custom permission schemes on the specific issue.

<h3 id="get-sla-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request whose SLAs will be retrieved.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla?start=0&limit=3\"},\"values\":[{\"name\":\"Time To First Response\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10030\"},\"completedCycles\":[{\"startTime\":{\"epochMillis\":1444362323000,\"friendly\":\"Yesterday 10:45 AM\",\"iso8601\":\"2015-10-09T10:45:23+0700\",\"jira\":\"2015-10-09T10:45:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444362743000,\"friendly\":\"Yesterday 10:52 AM\",\"iso8601\":\"2015-10-09T10:52:23+0700\",\"jira\":\"2015-10-09T10:52:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444362623000,\"friendly\":\"Yesterday 10:50 AM\",\"iso8601\":\"2015-10-09T10:50:23+0700\",\"jira\":\"2015-10-09T10:50:23.000+0700\"},\"breached\":false,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":420000,\"friendly\":\"0h 7m\"},\"remainingTime\":{\"millis\":13980000,\"friendly\":\"3h 233m\"}},{\"startTime\":{\"epochMillis\":1444449143000,\"friendly\":\"Today 10:52 AM\",\"iso8601\":\"2015-10-10T10:52:23+0700\",\"jira\":\"2015-10-10T10:52:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444468523000,\"friendly\":\"Today 16:15 PM\",\"iso8601\":\"2015-10-10T16:15:23+0700\",\"jira\":\"2015-10-10T16:15:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444464743000,\"friendly\":\"Today 15:12 PM\",\"iso8601\":\"2015-10-10T15:12:23+0700\",\"jira\":\"2015-10-10T15:12:23.000+0700\"},\"breached\":true,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":19380000,\"friendly\":\"5h 323m\"},\"remainingTime\":{\"millis\":-4980000,\"friendly\":\"-1h -83m\"}}],\"ongoingCycle\":{\"startTime\":{\"epochMillis\":1444479323000,\"friendly\":\"Today 19:15 PM\",\"iso8601\":\"2015-10-10T19:15:23+0700\",\"jira\":\"2015-10-10T19:15:23.000+0700\"},\"breached\":false,\"paused\":false,\"withinCalendarHours\":false,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":5640000,\"friendly\":\"1h 94m\"},\"remainingTime\":{\"millis\":8760000,\"friendly\":\"2h 146m\"}}},{\"name\":\"Time To Resolution\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10040\"},\"completedCycles\":[{\"startTime\":{\"epochMillis\":1444362323000,\"friendly\":\"Yesterday 10:45 AM\",\"iso8601\":\"2015-10-09T10:45:23+0700\",\"jira\":\"2015-10-09T10:45:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444398743000,\"friendly\":\"Yesterday 20:52 PM\",\"iso8601\":\"2015-10-09T20:52:23+0700\",\"jira\":\"2015-10-09T20:52:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444398623000,\"friendly\":\"Yesterday 20:50 PM\",\"iso8601\":\"2015-10-09T20:50:23+0700\",\"jira\":\"2015-10-09T20:50:23.000+0700\"},\"breached\":false,\"goalDuration\":{\"millis\":72000000,\"friendly\":\"20h 1200m\"},\"elapsedTime\":{\"millis\":36420000,\"friendly\":\"10h 607m\"},\"remainingTime\":{\"millis\":35580000,\"friendly\":\"9h 593m\"}},{\"startTime\":{\"epochMillis\":1444485143000,\"friendly\":\"Today 20:52 PM\",\"iso8601\":\"2015-10-10T20:52:23+0700\",\"jira\":\"2015-10-10T20:52:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444504523000,\"friendly\":\"Today 02:15 AM\",\"iso8601\":\"2015-10-11T02:15:23+0700\",\"jira\":\"2015-10-11T02:15:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444500743000,\"friendly\":\"Today 01:12 AM\",\"iso8601\":\"2015-10-11T01:12:23+0700\",\"jira\":\"2015-10-11T01:12:23.000+0700\"},\"breached\":true,\"goalDuration\":{\"millis\":72000000,\"friendly\":\"20h 1200m\"},\"elapsedTime\":{\"millis\":19380000,\"friendly\":\"5h 323m\"},\"remainingTime\":{\"millis\":52620000,\"friendly\":\"14h 877m\"}}],\"ongoingCycle\":{\"startTime\":{\"epochMillis\":1444515323000,\"friendly\":\"Today 05:15 AM\",\"iso8601\":\"2015-10-11T05:15:23+0700\",\"jira\":\"2015-10-11T05:15:23.000+0700\"},\"breached\":false,\"paused\":false,\"withinCalendarHours\":false,\"goalDuration\":{\"millis\":72000000,\"friendly\":\"20h 1200m\"},\"elapsedTime\":{\"millis\":5640000,\"friendly\":\"1h 94m\"},\"remainingTime\":{\"millis\":66360000,\"friendly\":\"18h 1106m\"}}},{\"name\":\"Time To Retrospective\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10050\"},\"completedCycles\":[{\"startTime\":{\"epochMillis\":1444362323000,\"friendly\":\"Yesterday 10:45 AM\",\"iso8601\":\"2015-10-09T10:45:23+0700\",\"jira\":\"2015-10-09T10:45:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444449143000,\"friendly\":\"Yesterday 10:52 AM\",\"iso8601\":\"2015-10-10T10:52:23+0700\",\"jira\":\"2015-10-10T10:52:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444449023000,\"friendly\":\"Yesterday 10:50 AM\",\"iso8601\":\"2015-10-10T10:50:23+0700\",\"jira\":\"2015-10-10T10:50:23.000+0700\"},\"breached\":false,\"goalDuration\":{\"millis\":144000000,\"friendly\":\"40h 2400m\"},\"elapsedTime\":{\"millis\":86820000,\"friendly\":\"24h 1447m\"},\"remainingTime\":{\"millis\":57180000,\"friendly\":\"15h 953m\"}},{\"startTime\":{\"epochMillis\":1444535543000,\"friendly\":\"Today 10:52 AM\",\"iso8601\":\"2015-10-11T10:52:23+0700\",\"jira\":\"2015-10-11T10:52:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444554923000,\"friendly\":\"Today 16:15 PM\",\"iso8601\":\"2015-10-11T16:15:23+0700\",\"jira\":\"2015-10-11T16:15:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444551143000,\"friendly\":\"Today 15:12 PM\",\"iso8601\":\"2015-10-11T15:12:23+0700\",\"jira\":\"2015-10-11T15:12:23.000+0700\"},\"breached\":true,\"goalDuration\":{\"millis\":144000000,\"friendly\":\"40h 2400m\"},\"elapsedTime\":{\"millis\":19380000,\"friendly\":\"5h 323m\"},\"remainingTime\":{\"millis\":124620000,\"friendly\":\"34h 2077m\"}}],\"ongoingCycle\":{\"startTime\":{\"epochMillis\":1444565723000,\"friendly\":\"Today 19:15 PM\",\"iso8601\":\"2015-10-11T19:15:23+0700\",\"jira\":\"2015-10-11T19:15:23.000+0700\"},\"breached\":false,\"paused\":false,\"withinCalendarHours\":false,\"goalDuration\":{\"millis\":144000000,\"friendly\":\"40h 2400m\"},\"elapsedTime\":{\"millis\":5640000,\"friendly\":\"1h 94m\"},\"remainingTime\":{\"millis\":138360000,\"friendly\":\"38h 2306m\"}}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-sla-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the SLA records on the customer request, on the specified page of the results.|[PagedDTOSlaInformationDTO](#schemapageddtoslainformationdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to view this customer request. This includes the case where the user is not an agent on the Service Desk, or where the user lacks Browse Projects permission on the issue (for example, due to an issue security scheme or a custom permission scheme).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:jira-work )
</aside>

## Get sla information by id

<a id="opIdgetSlaInformationById"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/sla/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/sla/{slaMetricId}`

This method returns the details for an SLA on a customer request.

**[Permissions](#permissions) required**:

 *  Agent for the Service Desk containing the queried customer request, AND
 *  Browse Projects permission on the project containing the customer request, including any restrictions imposed by issue security schemes or custom permission schemes on the specific issue.

<h3 id="get-sla-information-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request whose SLAs will be retrieved.|
|slaMetricId|path|integer(int64)|true|The ID or key of the SLAs metric to be retrieved.|

> Example responses

> 200 Response

```json
"{\"name\":\"Time To First Response\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10030\"},\"completedCycles\":[{\"startTime\":{\"epochMillis\":1444362323000,\"friendly\":\"Yesterday 10:45 AM\",\"iso8601\":\"2015-10-09T10:45:23+0700\",\"jira\":\"2015-10-09T10:45:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444362743000,\"friendly\":\"Yesterday 10:52 AM\",\"iso8601\":\"2015-10-09T10:52:23+0700\",\"jira\":\"2015-10-09T10:52:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444362623000,\"friendly\":\"Yesterday 10:50 AM\",\"iso8601\":\"2015-10-09T10:50:23+0700\",\"jira\":\"2015-10-09T10:50:23.000+0700\"},\"breached\":false,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":420000,\"friendly\":\"0h 7m\"},\"remainingTime\":{\"millis\":13980000,\"friendly\":\"3h 233m\"}},{\"startTime\":{\"epochMillis\":1444449143000,\"friendly\":\"Today 10:52 AM\",\"iso8601\":\"2015-10-10T10:52:23+0700\",\"jira\":\"2015-10-10T10:52:23.000+0700\"},\"stopTime\":{\"epochMillis\":1444468523000,\"friendly\":\"Today 16:15 PM\",\"iso8601\":\"2015-10-10T16:15:23+0700\",\"jira\":\"2015-10-10T16:15:23.000+0700\"},\"breachTime\":{\"epochMillis\":1444464743000,\"friendly\":\"Today 15:12 PM\",\"iso8601\":\"2015-10-10T15:12:23+0700\",\"jira\":\"2015-10-10T15:12:23.000+0700\"},\"breached\":true,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":19380000,\"friendly\":\"5h 323m\"},\"remainingTime\":{\"millis\":-4980000,\"friendly\":\"-1h -83m\"}}],\"ongoingCycle\":{\"startTime\":{\"epochMillis\":1444479323000,\"friendly\":\"Today 19:15 PM\",\"iso8601\":\"2015-10-10T19:15:23+0700\",\"jira\":\"2015-10-10T19:15:23.000+0700\"},\"breached\":false,\"paused\":false,\"withinCalendarHours\":false,\"goalDuration\":{\"millis\":14400000,\"friendly\":\"4h 240m\"},\"elapsedTime\":{\"millis\":5640000,\"friendly\":\"1h 94m\"},\"remainingTime\":{\"millis\":8760000,\"friendly\":\"2h 146m\"}}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-sla-information-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the SLA record, on the specified page of the results.|[SlaInformationDTO](#schemaslainformationdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to view this customer request. This includes the case where the user is not an agent on the Service Desk, or where the user lacks Browse Projects permission on the issue (for example, due to an issue security scheme or a custom permission scheme).|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:jira-work )
</aside>

## Get customer request status

<a id="opIdgetCustomerRequestStatus"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/status`

This method returns a list of all the statuses a customer Request has achieved. A status represents the state of an issue in its workflow. An issue can have one active status only. The list returns the status history in chronological order, most recent (current) status first.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-customer-request-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request to be retrieved.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/status?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/status?start=0&limit=3\"},\"values\":[{\"status\":\"Waiting for Customer\",\"statusDate\":{\"epochMillis\":1444287900000,\"friendly\":\"Today 14:05 PM\",\"iso8601\":\"2015-10-08T14:05:00+0700\",\"jira\":\"2015-10-08T14:05:00.000+0700\"}},{\"status\":\"Waiting for Support\",\"statusDate\":{\"epochMillis\":1444287660000,\"friendly\":\"Today 14:01 PM\",\"iso8601\":\"2015-10-08T14:01:00+0700\",\"jira\":\"2015-10-08T14:01:00.000+0700\"}},{\"status\":\"Waiting for Customer\",\"statusDate\":{\"epochMillis\":1444287600000,\"friendly\":\"Today 14:00 PM\",\"iso8601\":\"2015-10-08T14:00:00+0700\",\"jira\":\"2015-10-08T14:00:00.000+0700\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-customer-request-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request's status history, on the specified page of the results.|[PagedDTOCustomerRequestStatusDTO](#schemapageddtocustomerrequeststatusdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request is not found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get customer transitions

<a id="opIdgetCustomerTransitions"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/transition \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{issueIdOrKey}/transition`

This method returns a list of transitions, the workflow processes that moves a customer request from one status to another, that the user can perform on a request. Use this method to provide a user with a list if the actions they can take on a customer request.

**[Permissions](#permissions) required**: Permission to view the customer request.

<h3 id="get-customer-transitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|The ID or key of the customer request whose transitions will be retrieved.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/transition?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/transition?start=0&limit=2\"},\"values\":[{\"id\":\"1\",\"name\":\"Close Request\"},{\"id\":\"2\",\"name\":\"Escalate Request\"}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-customer-transitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the transitions available to the user on the customer request.|[PagedDTOCustomerTransitionDTO](#schemapageddtocustomertransitiondto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Perform customer transition

<a id="opIdperformCustomerTransition"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/transition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalComment": {
      "body": "I have fixed the problem."
    },
    "id": "1"
  }'
```

`POST /rest/servicedeskapi/request/{issueIdOrKey}/transition`

This method performs a customer transition for a given request and transition. An optional comment can be included to provide a reason for the transition.

**[Permissions](#permissions) required**: The user must be able to view the request and have the Transition Issues permission. If a comment is passed the user must have the Add Comments permission.

> Body parameter

```json
{
  "additionalComment": {
    "body": "I have fixed the problem."
  },
  "id": "1"
}
```

<h3 id="perform-customer-transition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueIdOrKey|path|string|true|ID or key of the issue to transition|
|body|body|[CustomerTransitionExecutionDTO](#schemacustomertransitionexecutiondto)|true|none|
|» additionalComment|body|object|false|Comment explaining the reason for the transition.|
|» » body|body|string|false|Content of the comment.|
|» id|body|string|false|ID of the transition to be performed.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="perform-customer-transition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the request is transitioned.|None|
|400|Bad Request|Returned if the transition ID is invalid or the comment is too long.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get feedback

<a id="opIdgetFeedback"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/feedback \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/request/{requestIdOrKey}/feedback`

This method retrieves a feedback of a request using it's `requestKey` or `requestId`

**[Permissions](#permissions) required**: User has view request permissions.

<h3 id="get-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestIdOrKey|path|string|true|The id or the key of the request to post the feedback on|

> Example responses

> 200 Response

```json
"{\"type\":\"csat\",\"rating\":4,\"comment\":{\"body\":\"Great work!\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the comment.|[CSATFeedbackFullDTO](#schemacsatfeedbackfulldto)|
|400|Bad Request|Returned if the HTTP request is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if no logged in user/app.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user/app does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Post feedback

<a id="opIdpostFeedback"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": {
      "body": "Great work!"
    },
    "rating": 4,
    "type": "csat"
  }'
```

`POST /rest/servicedeskapi/request/{requestIdOrKey}/feedback`

This method adds a feedback on an request using it's `requestKey` or `requestId`

**[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.

> Body parameter

```json
{
  "comment": {
    "body": "Great work!"
  },
  "rating": 4,
  "type": "csat"
}
```

<h3 id="post-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestIdOrKey|path|string|true|The id or the key of the request to post the feedback on|
|body|body|[CSATFeedbackFullDTO](#schemacsatfeedbackfulldto)|true|The feedback to be added on the request|
|» comment|body|object|false|(Optional) The comment provided with this feedback.|
|» » body|body|string|false|Content of the comment.|
|» rating|body|integer(int32)|false|A numeric representation of the rating, this must be an integer value between 1 and 5.|
|» type|body|string|false|Indicates the type of feedback, supported values: `csat`.|

> Example responses

> 201 Response

```json
"{\"type\":\"csat\",\"rating\":4,\"comment\":{\"body\":\"Great work!\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="post-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the comment.|[CSATFeedbackFullDTO](#schemacsatfeedbackfulldto)|
|400|Bad Request|Returned if the HTTP request is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if no logged in user/app.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user/app does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Delete feedback

<a id="opIddeleteFeedback"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/request/string/feedback \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/request/{requestIdOrKey}/feedback`

This method deletes the feedback of request using it's `requestKey` or `requestId`

**[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.

<h3 id="delete-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestIdOrKey|path|string|true|The id or the key of the request to post the feedback on|

> Example responses

> 204 Response

```json
null
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="delete-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content.|Inline|
|401|Unauthorized|Returned if no logged in user/app.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user/app does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the customer request does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

<h1 id="service-management-public-rest-api-requesttype">Requesttype</h1>

## Get all request types

<a id="opIdgetAllRequestTypes"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/requesttype \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/requesttype`

This method returns all customer request types used in the Jira Service Management instance, optionally filtered by a query string.

Use [servicedeskapi/servicedesk/\{serviceDeskId\}/requesttype](#api-servicedesk-serviceDeskId-requesttype-get) to find the customer request types supported by a specific service desk.

The returned list of customer request types can be filtered using the `searchQuery` parameter. The parameter is matched against the customer request types' `name` or `description`. For example, searching for "Install", "Inst", "Equi", or "Equipment" will match a customer request type with the *name* "Equipment Installation Request".

**Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn't have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren't admins.

**[Permissions](#permissions) required**: Any

<h3 id="get-all-request-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchQuery|query|string|false|String to be used to filter the results.|
|serviceDeskId|query|[integer(int32)]|false|Filter the request types by service desk Ids provided. Multiple values of the query parameter are supported. For example, `serviceDeskId=1&serviceDeskId=2` will return request types only for service desks 1 and 2.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|
|expand|query|[string]|false|none|
|includeHiddenRequestTypesInSearch|query|boolean|false|Whether to include hidden request types when searching with `searchQuery`.|
|restrictionStatus|query|string|false|Request type restriction status (`open` or `restricted`) used to filter the results.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=0&limit=3\"},\"values\":[{\"_expands\":[],\"id\":\"11001\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001\"},\"name\":\"Get IT Help\",\"description\":\"Get IT Help\",\"helpText\":\"Please tell us clearly the problem you have within 100 words.\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"12\"],\"icon\":{\"id\":\"12345\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium\"}}}},{\"_expands\":[],\"id\":\"11002\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11002\"},\"name\":\"Request a new account\",\"description\":\"Request a new account\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"13\",\"14\"],\"icon\":{\"id\":\"12346\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=medium\"}}}},{\"_expands\":[],\"id\":\"11003\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11003\"},\"name\":\"Hardware request\",\"description\":\"Request a hardware support\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"13\"],\"icon\":{\"id\":\"12347\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=medium\"}}}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-all-request-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the request types, on the specified page of the results.|[PagedDTORequestTypeDTO](#schemapageddtorequesttypedto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

<h1 id="service-management-public-rest-api-servicedesk">Servicedesk</h1>

## Get service desks

<a id="opIdgetServiceDesks"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk`

This method returns all the service desks in the Jira Service Management instance that the user has permission to access. Use this method where you need a list of service desks or need to locate a service desk by name or keyword.

**Note:** This method will be slow if the instance has hundreds of service desks. If you want to fetch a single service desk by its ID, use [/rest/servicedeskapi/servicedesk/\{serviceDeskId\}](./#api-rest-servicedeskapi-servicedesk-servicedeskid-get) instead.

**[Permissions](#permissions) required**: Any

<h3 id="get-service-desks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk?start=0&limit=3\"},\"values\":[{\"id\":\"10001\",\"projectId\":\"11001\",\"projectName\":\"IT Help Desk\",\"projectKey\":\"ITH\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001\"}},{\"id\":\"10002\",\"projectId\":\"11002\",\"projectName\":\"HR Self Serve Desk\",\"projectKey\":\"HR\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10002\"}},{\"id\":\"10003\",\"projectId\":\"11003\",\"projectName\":\"Foundation Leave\",\"projectKey\":\"FL\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10003\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-service-desks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the service desks, on the specified page of the results.|[PagedDTOServiceDeskDTO](#schemapageddtoservicedeskdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get service desk by id

<a id="opIdgetServiceDeskById"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}`

This method returns a service desk. Use this method to get service desk details whenever your application component is passed a service desk ID but needs to display other service desk details.

**[Permissions](#permissions) required**: Permission to access the Service Desk. For example, being the Service Desk's Administrator or one of its Agents or Users.

<h3 id="get-service-desk-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk to return. This can alternatively be a [project identifier.](#project-identifiers)|

> Example responses

> 200 Response

```json
"{\"id\":\"10001\",\"projectId\":\"11001\",\"projectName\":\"IT Help Desk\",\"projectKey\":\"ITH\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001\"}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-service-desk-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested service desk.|[ServiceDeskDTO](#schemaservicedeskdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Attach temporary file

<a id="opIdattachTemporaryFile"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/attachTemporaryFile \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/attachTemporaryFile`

This method adds one or more temporary attachments to a service desk, which can then be permanently attached to a customer request using [servicedeskapi/request/\{issueIdOrKey\}/attachment](#api-request-issueIdOrKey-attachment-post).

**Note**: It is possible for a service desk administrator to turn off the ability to add attachments to a service desk.

This method expects a multipart request. The media-type multipart/form-data is defined in RFC 1867. Most client libraries have classes that make dealing with multipart posts simple. For instance, in Java the Apache HTTP Components library provides [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html).

Because this method accepts multipart/form-data, it has XSRF protection on it. This means you must submit a header of X-Atlassian-Token: no-check with the request or it will be blocked.

The name of the multipart/form-data parameter that contains the attachments must be `file`.

For example, to upload a file called `myfile.txt` in the Service Desk with ID 10001 use

    curl -D- -u customer:customer -X POST -H "X-ExperimentalApi: opt-in" -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt" https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/attachTemporaryFile

**[Permissions](#permissions) required**: Permission to add attachments in this Service Desk.

> Body parameter

```yaml
-
  bytes:
    - string
  contentType: string
  empty: true
  inputStream: {}
  name: string
  originalFilename: string
  resource:
    contentAsByteArray:
      - string
    description: string
    file: string
    filename: string
    inputStream: {}
    open: true
    readable: true
    uri: "http://example.com"
    url: "http://example.com"
  size: 0
```

<h3 id="attach-temporary-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the Service Desk to which the file will be attached. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[[MultipartFile](#schemamultipartfile)]|true|none|

> Example responses

> 201 Response

```json
"{\"temporaryAttachments\":[{\"temporaryAttachmentId\":\"temp8186986881700442965\",\"fileName\":\"atlassian.png\"},{\"temporaryAttachmentId\":\"temp589064256337898328\",\"fileName\":\"readme.txt\"}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 413 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="attach-temporary-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns if the file(s) were attached.|None|
|400|Bad Request|Returned if the attachments are not valid, or exceed the maximum configured attachment size.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Returned if more than 60 files are requested to be uploaded.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:servicedesk-request )
</aside>

## Get customers

<a id="opIdgetCustomers"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/customer \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer`

This method returns a list of the customers on a service desk.

The returned list of customers can be filtered using the `query` parameter. The parameter is matched against customers' `displayName`, `name`, or `email`. For example, searching for "John", "Jo", "Smi", or "Smith" will match a user with display name "John Smith".

**[Permissions](#permissions) required**: Permission to view this Service Desk's customers.

<h3 id="get-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)|
|query|query|string|false|The string used to filter the customer list.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/customer?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/customer?start=0&limit=1\"},\"values\":[{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the service desk's customer list.|[PagedDTOUserDTO](#schemapageddtouserdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Add customers

<a id="opIdaddCustomers"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/customer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ],
    "usernames": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ]
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer`

Adds one or more customers to a service desk. If any of the passed customers are associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.

**[Permissions](#permissions) required**: Service desk administrator

> Body parameter

```json
{
  "accountIds": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ],
  "usernames": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ]
}
```

<h3 id="add-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[ServiceDeskCustomerDTO](#schemaservicedeskcustomerdto)|true|none|
|» accountIds|body|[string]|false|List of users, specified by account IDs, to add to or remove from a service desk.|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="add-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if all the customers were added to the service desk or were already associated with the service desk.|None|
|400|Bad Request|Returned if any of the customers do not exist. Note that any valid customers are added, but no confirmation is returned.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Remove customers

<a id="opIdremoveCustomers"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/customer \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ],
    "usernames": [
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
      "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
    ]
  }'
```

`DELETE /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer`

This method removes one or more customers from a service desk. The service desk must have closed access. If any of the passed customers are not associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.

**[Permissions](#permissions) required**: Services desk administrator

> Body parameter

```json
{
  "accountIds": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ],
  "usernames": [
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd",
    "qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"
  ]
}
```

<h3 id="remove-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk the customers should be removed from. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[ServiceDeskCustomerDTO](#schemaservicedeskcustomerdto)|true|none|
|» accountIds|body|[string]|false|List of users, specified by account IDs, to add to or remove from a service desk.|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="remove-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the customers were removed from the service desk, or any of the customers were not associated with the service desk.|None|
|400|Bad Request|Returned if the service desk has public signup or open access enabled.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Invite customer

<a id="opIdinviteCustomer"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/customer/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "Fred F. User",
    "email": "fred@example.com"
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer/invite`

This method invites a customer to a specified service desk by sending them an email invitation, creating a new customer account if one does not already exist. The display name does not need to be unique. The record's identifiers, `name` and `key`, are automatically generated from the request details.

**[Permissions](#permissions) required**: Jira Administrator Global permission & Service desk administrator

> Body parameter

```json
{
  "displayName": "Fred F. User",
  "email": "fred@example.com"
}
```

<h3 id="invite-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk to which the newly created customer should be added.|
|strictConflictStatusCode|query|boolean|false|Optional boolean flag to return 409 Conflict status code when a customer with the same email already exists.|
|body|body|[ServiceDeskCustomerInviteDTO](#schemaservicedeskcustomerinvitedto)|true|none|
|» displayName|body|string|false|Customer's name for display in the UI.|
|» email|body|string|false|Customer's email address.|

> Example responses

> 201 Response

```json
"{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 409 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="invite-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the customer details.|None|
|400|Bad Request|Returned if the request is invalid, either because the display name is empty, or email address is empty or incorrectly formed or already exists in the database if `strictConflictStatusCode=false` or if `strictConflictStatusCode=false` parameter is not provided.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the servicedesk id does not exist or servicedesk does not belong to a JSM project.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Returned if the request is invalid because the email address already exists in the database and `strictConflictStatusCode=true`|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:servicedesk-customer )
</aside>

## Get articles

<a id="opIdgetArticles"></a>

> Code samples

```bash
curl 'https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/knowledgebase/article?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/knowledgebase/article`

Returns articles which match the given query and belong to the knowledge base linked to the service desk.

**[Permissions](#permissions) required**: Permission to access the service desk.

<h3 id="get-articles-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|none|
|query|query|string|true|The string used to filter the articles (required).|
|highlight|query|boolean|false|If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false.|
|start|query|integer(int32)|false|(Deprecated) The starting index of the returned objects. Base index: 0.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the section for more details.|
|cursor|query|string|false|Pointer to a set of search results, returned as part of the next or prev URL from the previous search call.|
|prev|query|boolean|false|Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/knowledgebase/article?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/knowledgebase/article?start=0&limit=2\"},\"values\":[{\"title\":\"Stolen computer\",\"excerpt\":\"assuming your computer was stolen\",\"source\":{\"type\":\"confluence\",\"pageId\":\"8786177\",\"spaceKey\":\"IT\"},\"content\":{\"iframeSrc\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8786177\"}},{\"title\":\"Upgrading computer\",\"excerpt\":\"each computer older then 3 years can be upgraded\",\"source\":{\"type\":\"confluence\",\"pageId\":\"8785228\",\"spaceKey\":\"IT\"},\"content\":{\"iframeSrc\":\"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8785228\"}}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-articles-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the articles, on the specified page of the results.|[PagedDTOArticleDTO](#schemapageddtoarticledto)|
|400|Bad Request|Returned if the request is invalid, for example: missing query parameter.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:knowledgebase:jira-service-management )
</aside>

## Get queues

<a id="opIdgetQueues"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/queue \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue`

This method returns the queues in a service desk. To include a customer request count for each queue (in the `issueCount` field) in the response, set the query parameter `includeCount` to true (its default is false).

**[Permissions](#permissions) required**: service desk's Agent.

<h3 id="get-queues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|includeCount|query|boolean|false|Specifies whether to include each queue's customer request (issue) count in the response.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":2,\"start\":2,\"limit\":2,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue?start=4&limit=2\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue?start=0&limit=2\"},\"values\":[{\"id\":\"10\",\"name\":\"Unassigned issues\",\"jql\":\"project = SD AND assignee is EMPTY AND resolution = Unresolved ORDER BY \\\"Time to resolution\\\" ASC\",\"fields\":[\"issuetype\",\"issuekey\",\"summary\",\"created\",\"reporter\",\"duedate\"],\"issueCount\":10,\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10\"}},{\"id\":\"20\",\"name\":\"Assigned to me\",\"jql\":\"project = SD AND assignee = currentUser() AND resolution = Unresolved ORDER BY \\\"Time to resolution\\\" ASC\",\"fields\":[\"issuetype\",\"issuekey\",\"summary\",\"created\",\"reporter\",\"duedate\"],\"issueCount\":10,\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/20\"}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-queues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the queues of the service desk, on the specified page of the results.|[PagedDTOQueueDTO](#schemapageddtoqueuedto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:jira-work )
</aside>

## Get queue

<a id="opIdgetQueue"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/queue/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}`

This method returns a specific queues in a service desk. To include a customer request count for the queue (in the `issueCount` field) in the response, set the query parameter `includeCount` to true (its default is false).

**[Permissions](#permissions) required**: service desk's Agent.

<h3 id="get-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|queueId|path|integer(int64)|true|ID of the required queue.|
|includeCount|query|boolean|false|Specifies whether to include each queue's customer request (issue) count in the response.|

> Example responses

> 200 Response

```json
"{\"id\":\"20\",\"name\":\"Assigned to me\",\"jql\":\"project = SD AND assignee = currentUser() AND resolution = Unresolved ORDER BY \\\"Time to resolution\\\" ASC\",\"fields\":[\"issuetype\",\"issuekey\",\"summary\",\"created\",\"reporter\",\"duedate\"],\"issueCount\":10,\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/20\"}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the specific queue of the service desk.|[QueueDTO](#schemaqueuedto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:jira-work )
</aside>

## Get issues in queue

<a id="opIdgetIssuesInQueue"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/queue/0/issue \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}/issue`

This method returns the customer requests in a queue. Only fields that the queue is configured to show are returned. For example, if a queue is configured to show description and due date, then only those two fields are returned for each customer request in the queue.

**[Permissions](#permissions) required**: Service desk's agent.

<h3 id="get-issues-in-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk containing the queue to be queried. This can alternatively be a [project identifier.](#project-identifiers)|
|queueId|path|integer(int64)|true|The ID of the queue whose customer requests will be returned.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":1,\"start\":1,\"limit\":1,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10/issue?start=2&limit=1\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10/issue?start=0&limit=1\"},\"values\":[{\"fields\":{\"summary\":\"My keyboard is broken\",\"issuetype\":{\"avatarId\":10002,\"description\":\"For general IT problems and questions. Created by Jira Service Management.\",\"iconUrl\":\"https://your-domain.atlassian.net/servicedesk/issue-type-icons?icon=it-help\",\"id\":\"13\",\"name\":\"IT Help\",\"self\":\"https://your-domain.atlassian.net/rest/api/2/issuetype/13\",\"subtask\":false},\"duedate\":\"2015-11-11T14:17:13.000+0700\",\"created\":\"2015-11-09T14:17:13.000+0700\",\"reporter\":{\"accountId\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"name\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"key\":\"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"emailAddress\":\"fred@example.com\",\"displayName\":\"Fred F. User\",\"active\":true,\"timeZone\":\"Australia/Sydney\",\"_links\":{\"jiraRest\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\",\"avatarUrls\":{\"16x16\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue\",\"24x24\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue\",\"32x32\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue\",\"48x48\":\"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue\"},\"self\":\"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b\"}}},\"id\":\"10001\",\"key\":\"SD-1\",\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/rest/api/2/issue/10001\"}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-issues-in-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer requests belonging to the queue, on the specified page of the results.|[PagedDTOIssueBean](#schemapageddtoissuebean)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or the queue do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:jira-work )
</aside>

## Get request types

<a id="opIdgetRequestTypes"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype`

This method returns all customer request types from a service desk. There are two parameters for filtering the returned list:

 *  `groupId` which filters the results to items in the customer request type group.
 *  `searchQuery` which is matched against request types' `name` or `description`. For example, the strings "Install", "Inst", "Equi", or "Equipment" will match a request type with the *name* "Equipment Installation Request".

**Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn't have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren't admins.

**[Permissions](#permissions) required**: Permission to access the service desk.

<h3 id="get-request-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk whose customer request types are to be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|groupId|query|integer(int32)|false|Filters results to those in a customer request type group.|
|expand|query|[string]|false|none|
|searchQuery|query|string|false|The string to be used to filter the results.|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|
|includeHiddenRequestTypesInSearch|query|boolean|false|Whether to include hidden request types when searching with `searchQuery`.|
|restrictionStatus|query|string|false|Request type restriction status (`open` or `restricted`) used to filter the results.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=0&limit=3\"},\"values\":[{\"_expands\":[],\"id\":\"11001\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001\"},\"name\":\"Get IT Help\",\"description\":\"Get IT Help\",\"helpText\":\"Please tell us clearly the problem you have within 100 words.\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"12\"],\"icon\":{\"id\":\"12345\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium\"}}}},{\"_expands\":[],\"id\":\"11002\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11002\"},\"name\":\"Request a new account\",\"description\":\"Request a new account\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"13\",\"14\"],\"icon\":{\"id\":\"12346\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=medium\"}}}},{\"_expands\":[],\"id\":\"11003\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11003\"},\"name\":\"Hardware request\",\"description\":\"Request a hardware support\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"13\"],\"icon\":{\"id\":\"12347\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=medium\"}}}}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested customer request types, on the specified page of the results.|[PagedDTORequestTypeDTO](#schemapageddtorequesttypedto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Create request type

<a id="opIdcreateRequestType"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Get IT Help",
    "helpText": "Please tell us clearly the problem you have within 100 words.",
    "issueTypeId": "12345",
    "name": "Get IT Help"
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype`

This method enables a customer request type to be added to a service desk based on an issue type. Note that not all customer request type fields can be specified in the request and these fields are given the following default values:

 *  Request type icon is given the headset icon.
 *  Request type groups is left empty, which means this customer request type will not be visible on the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).
 *  Request type status mapping is left empty, so the request type has no custom status mapping but inherits the status map from the issue type upon which it is based.
 *  Request type field mapping is set to show the required fields as specified by the issue type used to create the customer request type.

  
These fields can be updated by a service desk administrator using the **Request types** option in **Project settings**.  
Request Types are created in next-gen projects by creating Issue Types. Please use the Jira Cloud Platform Create issue type endpoint instead.

**[Permissions](#permissions) required**: Service desk's administrator

> Body parameter

```json
{
  "description": "Get IT Help",
  "helpText": "Please tell us clearly the problem you have within 100 words.",
  "issueTypeId": "12345",
  "name": "Get IT Help"
}
```

<h3 id="create-request-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk where the customer request type is to be created. This can alternatively be a [project identifier.](#project-identifiers)|
|body|body|[RequestTypeCreateDTO](#schemarequesttypecreatedto)|true|none|
|» description|body|string|false|Description of the request type on the service desk.|
|» helpText|body|string|false|Help text for the request type on the service desk.|
|» issueTypeId|body|string|false|ID of the request type to add to the service desk.|
|» name|body|string|false|Name of the request type on the service desk.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"id\":\"11001\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001\"},\"name\":\"Get IT Help\",\"description\":\"Get IT Help\",\"helpText\":\"Please tell us clearly the problem you have within 100 words.\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"12\"],\"icon\":{\"id\":\"12345\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium\"}}}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="create-request-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request type created.|[RequestTypeDTO](#schemarequesttypedto)|
|400|Bad Request|Returned if the customer request type name is empty.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or issue type do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:requesttype:jira-service-management write:requesttype:jira-service-management )
</aside>

## Check request type permissions

<a id="opIdcheckRequestTypePermissions"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/permissions/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "permissions": [
      "canCreateRequest"
    ],
    "requestTypeIds": [
      0
    ]
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/permissions/check`

Returns:

 *  a list of request type IDs where the given user has permission to administer.
 *  a list of request type IDs where the given user has permission to submit the request.

If no account ID is provided, the operation returns details for the logged in user.

Note that:

 *  invalid request type IDs are ignored.
 *  a maximum of 50 request types can be checked.

**[Permissions](#permissions) required:**

 *  *Administer Jira* or *Project Administrator* to check the permissions for other users.

However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn't apply to calls made using AP.request() in a browser.

> Body parameter

```json
{
  "accountId": "string",
  "permissions": [
    "canCreateRequest"
  ],
  "requestTypeIds": [
    0
  ]
}
```

<h3 id="check-request-type-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|none|
|body|body|[RequestTypePermissionCheckRequestDTO](#schemarequesttypepermissioncheckrequestdto)|true|Details of the permissions to check.|
|» accountId|body|string|false|The account ID of a user.|
|» permissions|body|[string]|false|List of requested permissions.|
|» requestTypeIds|body|[integer(int32)]|false|List of request type IDs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|canCreateRequest|
|» permissions|canAdminister|

> Example responses

> 200 Response

```json
{
  "canAdminister": [
    0
  ],
  "canCreateRequest": [
    0
  ]
}
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="check-request-type-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the request is successful.|[RequestTypePermissionCheckResponse](#schemarequesttypepermissioncheckresponse)|
|400|Bad Request|Returned if:<br><br> *  more than 50 request type IDs have been supplied.<br> *  an invalid account identifier has been provided.<br> *  no permissions have been supplied.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user does not have the necessary permission.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get request type by id

<a id="opIdgetRequestTypeById"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}`

This method returns a customer request type from a service desk.

This operation can be accessed anonymously.

**[Permissions](#permissions) required**: Permission to access the service desk.

<h3 id="get-request-type-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk whose customer request type is to be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|requestTypeId|path|string|true|The ID of the customer request type to be returned.|
|expand|query|[string]|false|none|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"id\":\"11001\",\"_links\":{\"self\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001\"},\"name\":\"Get IT Help\",\"description\":\"Get IT Help\",\"helpText\":\"Please tell us clearly the problem you have within 100 words.\",\"issueTypeId\":\"12345\",\"serviceDeskId\":\"28\",\"portalId\":\"2\",\"groupIds\":[\"12\"],\"icon\":{\"id\":\"12345\",\"_links\":{\"iconUrls\":{\"48x48\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large\",\"24x24\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small\",\"16x16\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall\",\"32x32\":\"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium\"}}}}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-type-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the customer request type item.|[RequestTypeDTO](#schemarequesttypedto)|
|401|Unauthorized|Returned if the user credentials are invalid.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or customer request type do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Delete request type

<a id="opIddeleteRequestType"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}`

This method deletes a customer request type from a service desk, and removes it from all customer requests.  
This only supports classic projects.

**[Permissions](#permissions) required**: Service desk administrator.

<h3 id="delete-request-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID or [project identifier](#project-identifiers) of the service desk.|
|requestTypeId|path|integer(int32)|true|The ID of the request type.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="delete-request-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the request type is deleted.|None|
|400|Bad Request|Returned if the request type ID is not valid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have the necessary permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or request type do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:jira-project )
</aside>

## Get request type fields

<a id="opIdgetRequestTypeFields"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0/field \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/field`

This method returns the fields for a service desk's customer request type.

Also, the following information about the user's permissions for the request type is returned:

 *  `canRaiseOnBehalfOf` returns `true` if the user has permission to raise customer requests on behalf of other customers. Otherwise, returns `false`.
 *  `canAddRequestParticipants` returns `true` if the user can add customer request participants. Otherwise, returns `false`.

**[Permissions](#permissions) required**: Permission to view the Service Desk. However, hidden fields would be visible to only Service desk's Administrator.

<h3 id="get-request-type-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk containing the request types whose fields are to be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|requestTypeId|path|integer(int32)|true|The ID of the request types whose fields are to be returned.|
|expand|query|[string]|false|Use [expand](#expansion) to include additional information in the response. This parameter accepts `hiddenFields` that returns hidden fields associated with the request type.|

> Example responses

> 200 Response

```json
"{\"canAddRequestParticipants\":true,\"canRaiseOnBehalfOf\":true,\"requestTypeFields\":[{\"fieldId\":\"summary\",\"jiraSchema\":{\"system\":\"summary\",\"type\":\"string\"},\"name\":\"What do you need?\",\"required\":true,\"validValues\":[],\"visible\":true},{\"fieldId\":\"customfield_10000\",\"jiraSchema\":{\"custom\":\"com.atlassian.jira.plugin.system.customfieldtypes:userpicker\",\"customId\":10000,\"type\":\"user\"},\"name\":\"Nominee\",\"required\":true,\"validValues\":[],\"visible\":true},{\"fieldId\":\"customfield_10001\",\"jiraSchema\":{\"custom\":\"com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons\",\"customId\":10001,\"type\":\"string\"},\"name\":\"Gifts\",\"required\":true,\"validValues\":[{\"children\":[],\"label\":\"Bottle of Wine\",\"value\":\"10000\"},{\"children\":[],\"label\":\"Threadless Voucher\",\"value\":\"10001\"},{\"children\":[],\"label\":\"2 Movie Tickets\",\"value\":\"10002\"}],\"visible\":false}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-type-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the request type's fields and user permission details, on the specified page of the results.|[CustomerRequestCreateMetaDTO](#schemacustomerrequestcreatemetadto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk or request type do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get properties keys

<a id="opIdgetPropertiesKeys"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0/property \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property`

Returns the keys of all properties for a request type.

Properties for a Request Type in next-gen are stored as Issue Type properties and therefore the keys of all properties for a request type are also available by calling the Jira Cloud Platform [Get issue type property keys](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-get) endpoint.

**[Permissions](#permissions) required**: The user must have permission to view the request type.

<h3 id="get-properties-keys-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestTypeId|path|integer(int32)|true|The ID of the request type for which keys will be retrieved.|
|serviceDeskId|path|string|true|The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)|

> Example responses

> 200 Response

```json
"{\"entityPropertyKeyBeans\":[{\"key\":\"requestType.attributes\",\"self\":\"/rest/servicedeskapi/servicedesk/1/requestType/2/property/propertyKey\"}]}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-properties-keys-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the request type was found.|[PropertyKeys](#schemapropertykeys)|
|400|Bad Request|Returned if the request type ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the request type does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Get property

<a id="opIdgetProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0/property/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}`

Returns the value of the property from a request type.

Properties for a Request Type in next-gen are stored as Issue Type properties and therefore also available by calling the Jira Cloud Platform [Get issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-get) endpoint.

**[Permissions](#permissions) required**: User must have permission to view the request type.

<h3 id="get-property-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)|
|requestTypeId|path|integer(int32)|true|The ID of the request type from which the property will be retrieved.|
|propertyKey|path|string|true|The key of the property to return.|

> Example responses

> 200 Response

```json
"{\"key\":\"organization.attributes\",\"value\":{\"color\":\"green\",\"priority\":\"high\"}}"
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-property-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the request type property was returned.|[EntityProperty](#schemaentityproperty)|
|400|Bad Request|Returned if the request type ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the request type or property do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Set property

<a id="opIdsetProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0/property/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}`

Sets the value of a request type property. Use this resource to store custom data against a request type.

Properties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be set by calling the Jira Cloud Platform [Set issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-put) endpoint.

**[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.

<h3 id="set-property-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)|
|requestTypeId|path|integer(int32)|true|The ID of the request type on which the property will be set.|
|propertyKey|path|string|true|The key of the request type property. The maximum length of the key is 255 bytes.|

> Example responses

> 200 Response

```json
null
```

> 201 Response

```json
null
```

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="set-property-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned if the request type property is updated.|Inline|
|201|Created|Returned if the request type property is created.|Inline|
|400|Bad Request|Returned if the request type ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the calling user doesn't have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the request type does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:jira-project )
</aside>

## Delete property

<a id="opIddeleteProperty"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttype/0/property/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}`

Removes a property from a request type.

Properties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be deleted by calling the Jira Cloud Platform [Delete issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-delete) endpoint.

**[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.

<h3 id="delete-property-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)|
|requestTypeId|path|integer(int32)|true|The ID of the request type for which the property will be removed.|
|propertyKey|path|string|true|The key of the property to remove.|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="delete-property-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returned if the request type property was removed.|None|
|400|Bad Request|Returned if the request type ID is invalid.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the calling user doesn't have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the request type or property do not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: manage:jira-project )
</aside>

## Get request type groups

<a id="opIdgetRequestTypeGroups"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/requesttypegroup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttypegroup`

This method returns a service desk's customer request type groups. Jira Service Management administrators can arrange the customer request type groups in an arbitrary order for display on the customer portal; the groups are returned in this order.

**[Permissions](#permissions) required**: Permission to view the service desk.

<h3 id="get-request-type-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk whose customer request type groups are to be returned. This can alternatively be a [project identifier.](#project-identifiers)|
|start|query|integer(int32)|false|The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.|
|limit|query|integer(int32)|false|The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.|

> Example responses

> 200 Response

```json
"{\"_expands\":[],\"size\":3,\"start\":3,\"limit\":3,\"isLastPage\":false,\"_links\":{\"base\":\"https://your-domain.atlassian.net/rest/servicedeskapi\",\"context\":\"context\",\"next\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/requesttypegroup?start=6&limit=3\",\"prev\":\"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/requesttypegroup?start=0&limit=3\"},\"values\":[{\"id\":\"12\",\"name\":\"Common Requests\"},{\"id\":\"13\",\"name\":\"Logins and Accounts\"},{\"id\":\"14\",\"name\":\"Servers and Infrastructure\"}]}"
```

> 401 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 403 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 404 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

> 500 Response

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

<h3 id="get-request-type-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the service desk's customer request type groups, on the specified page of the results.|[PagedDTORequestTypeGroupDTO](#schemapageddtorequesttypegroupdto)|
|401|Unauthorized|Returned if the user is not logged in.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Returned if the user does not have permission to complete this request.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Returned if the service desk does not exist.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

<h1 id="service-management-public-rest-api-default">Default</h1>

## Create customer

<a id="opIdcreateCustomer"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/customer/skip-permission-check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "displayName": "string",
    "email": "string",
    "fullName": "string"
  }'
```

`POST /rest/servicedeskapi/customer/skip-permission-check`

Creates a customer account on behalf of jsd-nutmeg.

This endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \{@code POST /servicedeskapi/customer\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\u2014 authorization is enforced entirely via the ASAP token.

No user permission checks are performed; \{@code null\} is passed as the acting user to bypass the permission check in the underlying service.

> Body parameter

```json
{
  "displayName": "string",
  "email": "string",
  "fullName": "string"
}
```

<h3 id="create-customer-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|strictConflictStatusCode|query|boolean|false|Optional boolean flag; when \{@code true\}, returns 409 Conflict for duplicate email instead of the default 400.|
|body|body|[CustomerCreateDTO](#schemacustomercreatedto)|true|JSON body containing the email address and display name of the customer to create.|
|» displayName|body|string|false|Customer's name for display in the UI.|
|» email|body|string|false|Customer's email address.|
|» fullName|body|string|false|Deprecated, please use 'displayName'.|

> Example responses

> 201 Response

```json
{
  "_links": {
    "avatarUrls": {
      "property1": "string",
      "property2": "string"
    },
    "jiraRest": "http://example.com",
    "self": "http://example.com"
  },
  "accountId": "string",
  "active": true,
  "displayName": "string",
  "emailAddress": "string",
  "key": "string",
  "name": "string",
  "timeZone": "string"
}
```

<h3 id="create-customer-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|201 response|[UserDTO](#schemauserdto)|

<aside class="success">
This operation does not require authentication
</aside>

## View knowledge base article

<a id="opIdviewArticle"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rest/servicedeskapi/knowledgebase/article/view/{pageId}`

<h3 id="view-knowledge-base-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="view-knowledge-base-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
OAuth2 ( Scopes: read:servicedesk-request )
</aside>

## Add customers

<a id="opIdaddCustomers"></a>

> Code samples

```bash
curl https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/string/customer/skip-permission-check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountIds": [
      "string"
    ],
    "usernames": [
      "string"
    ]
  }'
```

`POST /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer/skip-permission-check`

Adds one or more customers to a service desk on behalf of jsd-nutmeg.

This endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \{@code POST /servicedeskapi/servicedesk/\{serviceDeskId\}/customer\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\u2014 authorization is enforced entirely via the ASAP token.

No user permission checks are performed; \{@code null\} is passed as the acting user to bypass the permission check in the underlying service.

If any of the passed customers are already associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ],
  "usernames": [
    "string"
  ]
}
```

<h3 id="add-customers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceDeskId|path|string|true|The ID of the service desk to add customers to. This can alternatively be a project identifier.|
|body|body|[ServiceDeskCustomerDTO](#schemaservicedeskcustomerdto)|true|JSON body containing the account IDs of customers to add.|
|» accountIds|body|[string]|false|List of users, specified by account IDs, to add to or remove from a service desk.|
|» usernames|body|[string]|false|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

> Example responses

> 204 Response

```json
null
```

<h3 id="add-customers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The request completed successfully. No additional content will be sent in the response.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdditionalCommentDTO">AdditionalCommentDTO</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalcommentdto"></a>
<a id="schema_AdditionalCommentDTO"></a>
<a id="tocSadditionalcommentdto"></a>
<a id="tocsadditionalcommentdto"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Content of the comment.|

<h2 id="tocS_ApprovalDTO">ApprovalDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapprovaldto"></a>
<a id="schema_ApprovalDTO"></a>
<a id="tocSapprovaldto"></a>
<a id="tocsapprovaldto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "approvers": [
    {
      "approver": {
        "_links": {
          "avatarUrls": {
            "property1": "string",
            "property2": "string"
          },
          "jiraRest": "http://example.com",
          "self": "http://example.com"
        },
        "accountId": "string",
        "active": true,
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "timeZone": "string"
      },
      "approverDecision": "approved"
    }
  ],
  "canAnswerApproval": true,
  "completedDate": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "createdDate": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "finalDecision": "approved",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|The REST API URL of the approval.|
|approvers|[[ApproverDTO](#schemaapproverdto)]|false|none|Detailed list of the users who must provide a response to the approval.|
|canAnswerApproval|boolean|false|none|Indicates whether the user making the request is one of the approvers and can respond to the approval (true) or not (false).|
|completedDate|object|false|none|Date the approval was completed.|
|createdDate|object|false|none|Date the approval was created.|
|finalDecision|string|false|none|Outcome of the approval, based on the approvals provided by all approvers.|
|id|string|false|none|ID of the approval.|
|name|string|false|none|Description of the approval being sought or provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|finalDecision|approved|
|finalDecision|declined|
|finalDecision|pending|

<h2 id="tocS_ApprovalDecisionRequestDTO">ApprovalDecisionRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapprovaldecisionrequestdto"></a>
<a id="schema_ApprovalDecisionRequestDTO"></a>
<a id="tocSapprovaldecisionrequestdto"></a>
<a id="tocsapprovaldecisionrequestdto"></a>

```json
{
  "decision": "approve"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decision|string|false|none|Response to the approval request.|

#### Enumerated Values

|Property|Value|
|---|---|
|decision|approve|
|decision|decline|

<h2 id="tocS_ApproverDTO">ApproverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapproverdto"></a>
<a id="schema_ApproverDTO"></a>
<a id="tocSapproverdto"></a>
<a id="tocsapproverdto"></a>

```json
{
  "approver": {
    "_links": {
      "avatarUrls": {
        "property1": "string",
        "property2": "string"
      },
      "jiraRest": "http://example.com",
      "self": "http://example.com"
    },
    "accountId": "string",
    "active": true,
    "displayName": "string",
    "emailAddress": "string",
    "key": "string",
    "name": "string",
    "timeZone": "string"
  },
  "approverDecision": "approved"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approver|object|false|none|Details of the User who is providing approval.|
|approverDecision|string|false|none|Decision made by the approver.|

#### Enumerated Values

|Property|Value|
|---|---|
|approverDecision|approved|
|approverDecision|declined|
|approverDecision|pending|

<h2 id="tocS_ArticleDTO">ArticleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaarticledto"></a>
<a id="schema_ArticleDTO"></a>
<a id="tocSarticledto"></a>
<a id="tocsarticledto"></a>

```json
{
  "content": {
    "iframeSrc": "string"
  },
  "excerpt": "string",
  "source": {
    "type": "confluence"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[ContentDTO](#schemacontentdto)|false|none|none|
|excerpt|string|false|none|Excerpt of the article which matches the given query string.|
|source|object|false|none|Source of the article.|
|title|string|false|none|Title of the article.|

<h2 id="tocS_AssetsWorkspaceDTO">AssetsWorkspaceDTO</h2>
<!-- backwards compatibility -->
<a id="schemaassetsworkspacedto"></a>
<a id="schema_AssetsWorkspaceDTO"></a>
<a id="tocSassetsworkspacedto"></a>
<a id="tocsassetsworkspacedto"></a>

```json
{
  "workspaceId": "string"
}
```

Details of an Assets workspace ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaceId|string|false|none|The workspace ID used as the identifier to access the Assets REST API.|

<h2 id="tocS_AttachmentCreateDTO">AttachmentCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentcreatedto"></a>
<a id="schema_AttachmentCreateDTO"></a>
<a id="tocSattachmentcreatedto"></a>
<a id="tocsattachmentcreatedto"></a>

```json
{
  "additionalComment": {
    "body": "string"
  },
  "public": true,
  "temporaryAttachmentIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalComment|object|false|none|Additional content of the comment|
|public|boolean|false|none|Controls whether the comment and its attachments are visible to customers|
|temporaryAttachmentIds|[string]|false|none|List of IDs for the temporary attachments to be added to the customer request.|

<h2 id="tocS_AttachmentCreateResultDTO">AttachmentCreateResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentcreateresultdto"></a>
<a id="schema_AttachmentCreateResultDTO"></a>
<a id="tocSattachmentcreateresultdto"></a>
<a id="tocsattachmentcreateresultdto"></a>

```json
{
  "attachments": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_links": {
          "content": "http://example.com",
          "jiraRest": "http://example.com",
          "self": "http://example.com",
          "thumbnail": "http://example.com"
        },
        "author": {
          "_links": {
            "avatarUrls": {
              "property1": "string",
              "property2": "string"
            },
            "jiraRest": "http://example.com",
            "self": "http://example.com"
          },
          "accountId": "string",
          "active": true,
          "displayName": "string",
          "emailAddress": "string",
          "key": "string",
          "name": "string",
          "timeZone": "string"
        },
        "created": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "filename": "string",
        "mimeType": "string",
        "size": 0
      }
    ]
  },
  "comment": {
    "_expands": [
      "string"
    ],
    "_links": {
      "self": "http://example.com"
    },
    "attachments": {
      "_expands": [
        "string"
      ],
      "_links": {
        "base": "http://example.com",
        "context": "string",
        "next": "http://example.com",
        "prev": "http://example.com",
        "self": "http://example.com"
      },
      "isLastPage": true,
      "limit": 0,
      "size": 0,
      "start": 0,
      "values": [
        {
          "_links": {
            "content": "http://example.com",
            "jiraRest": "http://example.com",
            "self": "http://example.com",
            "thumbnail": "http://example.com"
          },
          "author": {
            "_links": {
              "avatarUrls": {
                "property1": "string",
                "property2": "string"
              },
              "jiraRest": "http://example.com",
              "self": "http://example.com"
            },
            "accountId": "string",
            "active": true,
            "displayName": "string",
            "emailAddress": "string",
            "key": "string",
            "name": "string",
            "timeZone": "string"
          },
          "created": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          },
          "filename": "string",
          "mimeType": "string",
          "size": 0
        }
      ]
    },
    "author": {
      "_links": {
        "avatarUrls": {
          "property1": "string",
          "property2": "string"
        },
        "jiraRest": "http://example.com",
        "self": "http://example.com"
      },
      "accountId": "string",
      "active": true,
      "displayName": "string",
      "emailAddress": "string",
      "key": "string",
      "name": "string",
      "timeZone": "string"
    },
    "body": "string",
    "created": {
      "epochMillis": 0,
      "friendly": "string",
      "iso8601": "string",
      "jira": "string"
    },
    "id": "string",
    "public": true,
    "renderedBody": {
      "html": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|object|false|none|List of the attachments added.|
|comment|object|false|none|Details of the comment included with the attachments.|

<h2 id="tocS_AttachmentDTO">AttachmentDTO</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentdto"></a>
<a id="schema_AttachmentDTO"></a>
<a id="tocSattachmentdto"></a>
<a id="tocsattachmentdto"></a>

```json
{
  "_links": {
    "content": "http://example.com",
    "jiraRest": "http://example.com",
    "self": "http://example.com",
    "thumbnail": "http://example.com"
  },
  "author": {
    "_links": {
      "avatarUrls": {
        "property1": "string",
        "property2": "string"
      },
      "jiraRest": "http://example.com",
      "self": "http://example.com"
    },
    "accountId": "string",
    "active": true,
    "displayName": "string",
    "emailAddress": "string",
    "key": "string",
    "name": "string",
    "timeZone": "string"
  },
  "created": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "filename": "string",
  "mimeType": "string",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|Various URLs for the attachment.|
|author|object|false|none|Details of the user who attached the file.|
|created|object|false|none|Date the attachment was added.|
|filename|string|false|none|Filename of the item attached.|
|mimeType|string|false|none|MIME type of the attachment.|
|size|integer(int64)|false|none|Size of the attachment in bytes.|

<h2 id="tocS_AttachmentLinkDTO">AttachmentLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentlinkdto"></a>
<a id="schema_AttachmentLinkDTO"></a>
<a id="tocSattachmentlinkdto"></a>
<a id="tocsattachmentlinkdto"></a>

```json
{
  "content": "http://example.com",
  "jiraRest": "http://example.com",
  "self": "http://example.com",
  "thumbnail": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(uri)|false|none|URL for the attachment.|
|jiraRest|string(uri)|false|none|REST API URL for the attachment|
|self|string(uri)|false|none|none|
|thumbnail|string(uri)|false|none|URL for the attachment's thumbnail image.|

<h2 id="tocS_AvatarUrlsBean">AvatarUrlsBean</h2>
<!-- backwards compatibility -->
<a id="schemaavatarurlsbean"></a>
<a id="schema_AvatarUrlsBean"></a>
<a id="tocSavatarurlsbean"></a>
<a id="tocsavatarurlsbean"></a>

```json
{
  "16x16": "http://example.com",
  "24x24": "http://example.com",
  "32x32": "http://example.com",
  "48x48": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|16x16|string(uri)|false|none|The URL of the item's 16x16 pixel avatar.|
|24x24|string(uri)|false|none|The URL of the item's 24x24 pixel avatar.|
|32x32|string(uri)|false|none|The URL of the item's 32x32 pixel avatar.|
|48x48|string(uri)|false|none|The URL of the item's 48x48 pixel avatar.|

<h2 id="tocS_CSATFeedbackFullDTO">CSATFeedbackFullDTO</h2>
<!-- backwards compatibility -->
<a id="schemacsatfeedbackfulldto"></a>
<a id="schema_CSATFeedbackFullDTO"></a>
<a id="tocScsatfeedbackfulldto"></a>
<a id="tocscsatfeedbackfulldto"></a>

```json
{
  "comment": {
    "body": "string"
  },
  "rating": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|(Optional) The comment provided with this feedback.|
|rating|integer(int32)|false|none|A numeric representation of the rating, this must be an integer value between 1 and 5.|
|type|string|false|none|Indicates the type of feedback, supported values: `csat`.|

<h2 id="tocS_ChangeDetails">ChangeDetails</h2>
<!-- backwards compatibility -->
<a id="schemachangedetails"></a>
<a id="schema_ChangeDetails"></a>
<a id="tocSchangedetails"></a>
<a id="tocschangedetails"></a>

```json
{
  "field": "string",
  "fieldId": "string",
  "fieldtype": "string",
  "from": "string",
  "fromString": "string",
  "to": "string",
  "toString": "string"
}
```

A change item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|read-only|The name of the field changed.|
|fieldId|string|false|read-only|The ID of the field changed.|
|fieldtype|string|false|read-only|The type of the field changed.|
|from|string|false|read-only|The details of the original value.|
|fromString|string|false|read-only|The details of the original value as a string.|
|to|string|false|read-only|The details of the new value.|
|toString|string|false|read-only|The details of the new value as a string.|

<h2 id="tocS_Changelog">Changelog</h2>
<!-- backwards compatibility -->
<a id="schemachangelog"></a>
<a id="schema_Changelog"></a>
<a id="tocSchangelog"></a>
<a id="tocschangelog"></a>

```json
{
  "author": {
    "accountId": "string",
    "accountType": "string",
    "active": true,
    "avatarUrls": {
      "16x16": "http://example.com",
      "24x24": "http://example.com",
      "32x32": "http://example.com",
      "48x48": "http://example.com"
    },
    "displayName": "string",
    "emailAddress": "string",
    "key": "string",
    "name": "string",
    "self": "string",
    "timeZone": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "historyMetadata": {
    "activityDescription": "string",
    "activityDescriptionKey": "string",
    "actor": {
      "avatarUrl": "string",
      "displayName": "string",
      "displayNameKey": "string",
      "id": "string",
      "type": "string",
      "url": "string"
    },
    "cause": {
      "avatarUrl": "string",
      "displayName": "string",
      "displayNameKey": "string",
      "id": "string",
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "descriptionKey": "string",
    "emailDescription": "string",
    "emailDescriptionKey": "string",
    "extraData": {
      "property1": "string",
      "property2": "string"
    },
    "generator": {
      "avatarUrl": "string",
      "displayName": "string",
      "displayNameKey": "string",
      "id": "string",
      "type": "string",
      "url": "string"
    },
    "type": "string"
  },
  "id": "string",
  "items": [
    {
      "field": "string",
      "fieldId": "string",
      "fieldtype": "string",
      "from": "string",
      "fromString": "string",
      "to": "string",
      "toString": "string"
    }
  ]
}
```

A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|false|read-only|The user who made the change.|
|created|string(date-time)|false|read-only|The date on which the change took place.|
|historyMetadata|object|false|read-only|The history metadata associated with the changed.|
|id|string|false|read-only|The ID of the changelog.|
|items|[[ChangeDetails](#schemachangedetails)]|false|read-only|The list of items changed.|

<h2 id="tocS_CommentCreateDTO">CommentCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemacommentcreatedto"></a>
<a id="schema_CommentCreateDTO"></a>
<a id="tocScommentcreatedto"></a>
<a id="tocscommentcreatedto"></a>

```json
{
  "body": "string",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Content of the comment.|
|public|boolean|false|none|Indicates whether the comment is public (true) or private/internal (false).|

<h2 id="tocS_CommentDTO">CommentDTO</h2>
<!-- backwards compatibility -->
<a id="schemacommentdto"></a>
<a id="schema_CommentDTO"></a>
<a id="tocScommentdto"></a>
<a id="tocscommentdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "self": "http://example.com"
  },
  "attachments": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_links": {
          "content": "http://example.com",
          "jiraRest": "http://example.com",
          "self": "http://example.com",
          "thumbnail": "http://example.com"
        },
        "author": {
          "_links": {
            "avatarUrls": {
              "property1": "string",
              "property2": "string"
            },
            "jiraRest": "http://example.com",
            "self": "http://example.com"
          },
          "accountId": "string",
          "active": true,
          "displayName": "string",
          "emailAddress": "string",
          "key": "string",
          "name": "string",
          "timeZone": "string"
        },
        "created": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "filename": "string",
        "mimeType": "string",
        "size": 0
      }
    ]
  },
  "author": {
    "_links": {
      "avatarUrls": {
        "property1": "string",
        "property2": "string"
      },
      "jiraRest": "http://example.com",
      "self": "http://example.com"
    },
    "accountId": "string",
    "active": true,
    "displayName": "string",
    "emailAddress": "string",
    "key": "string",
    "name": "string",
    "timeZone": "string"
  },
  "body": "string",
  "created": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "id": "string",
  "public": true,
  "renderedBody": {
    "html": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|List of items that can be expanded in the response by specifying the expand query parameter.|
|_links|object|false|none|REST API URL link to the comment.|
|attachments|object|false|none|List of the attachments included in the comment.|
|author|object|false|none|Details of the customer who authored the comment.|
|body|string|false|none|Content of the comment.|
|created|object|false|none|Date the comment was created.|
|id|string|false|none|ID of the comment.|
|public|boolean|false|none|Indicates whether the comment is public (true) or private/internal (false).|
|renderedBody|object|false|none|The rendered body of the comment.|

<h2 id="tocS_ContentDTO">ContentDTO</h2>
<!-- backwards compatibility -->
<a id="schemacontentdto"></a>
<a id="schema_ContentDTO"></a>
<a id="tocScontentdto"></a>
<a id="tocscontentdto"></a>

```json
{
  "iframeSrc": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iframeSrc|string|false|none|Url containing the body of the article (without title), suitable for rendering in an iframe|

<h2 id="tocS_CustomerCreateDTO">CustomerCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomercreatedto"></a>
<a id="schema_CustomerCreateDTO"></a>
<a id="tocScustomercreatedto"></a>
<a id="tocscustomercreatedto"></a>

```json
{
  "displayName": "string",
  "email": "string",
  "fullName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Customer's name for display in the UI.|
|email|string|false|none|Customer's email address.|
|fullName|string|false|none|Deprecated, please use 'displayName'.|

<h2 id="tocS_CustomerRequestActionDTO">CustomerRequestActionDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestactiondto"></a>
<a id="schema_CustomerRequestActionDTO"></a>
<a id="tocScustomerrequestactiondto"></a>
<a id="tocscustomerrequestactiondto"></a>

```json
{
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Indicates whether the user can undertake the action (true) or not (false).|

<h2 id="tocS_CustomerRequestActionsDTO">CustomerRequestActionsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestactionsdto"></a>
<a id="schema_CustomerRequestActionsDTO"></a>
<a id="tocScustomerrequestactionsdto"></a>
<a id="tocscustomerrequestactionsdto"></a>

```json
{
  "addAttachment": {
    "allowed": true
  },
  "addComment": {
    "allowed": true
  },
  "addParticipant": {
    "allowed": true
  },
  "removeParticipant": {
    "allowed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addAttachment|object|false|none|Action of adding attachments to a request.|
|addComment|object|false|none|Action of adding comments to a request.|
|addParticipant|object|false|none|Action of adding participants to a request.|
|removeParticipant|object|false|none|Action of removing participants from a request.|

<h2 id="tocS_CustomerRequestCreateMetaDTO">CustomerRequestCreateMetaDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestcreatemetadto"></a>
<a id="schema_CustomerRequestCreateMetaDTO"></a>
<a id="tocScustomerrequestcreatemetadto"></a>
<a id="tocscustomerrequestcreatemetadto"></a>

```json
{
  "canAddRequestParticipants": true,
  "canRaiseOnBehalfOf": true,
  "requestTypeFields": [
    {
      "defaultValues": [
        {
          "children": [
            {}
          ],
          "label": "string",
          "value": "string"
        }
      ],
      "description": "string",
      "fieldId": "string",
      "jiraSchema": {
        "configuration": {
          "property1": null,
          "property2": null
        },
        "custom": "string",
        "customId": 0,
        "items": "string",
        "system": "string",
        "type": "string"
      },
      "name": "string",
      "presetValues": [
        "string"
      ],
      "required": true,
      "validValues": [
        {
          "children": [
            {}
          ],
          "label": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canAddRequestParticipants|boolean|false|none|Flag indicating if participants can be added to a request (true) or not.|
|canRaiseOnBehalfOf|boolean|false|none|Flag indicating if a request can be raised on behalf of another user (true) or not.|
|requestTypeFields|[[RequestTypeFieldDTO](#schemarequesttypefielddto)]|false|none|List of the fields included in this request.|

<h2 id="tocS_CustomerRequestDTO">CustomerRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestdto"></a>
<a id="schema_CustomerRequestDTO"></a>
<a id="tocScustomerrequestdto"></a>
<a id="tocscustomerrequestdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "agent": "http://example.com",
    "jiraRest": "http://example.com",
    "self": "http://example.com",
    "web": "http://example.com"
  },
  "actions": {
    "addAttachment": {
      "allowed": true
    },
    "addComment": {
      "allowed": true
    },
    "addParticipant": {
      "allowed": true
    },
    "removeParticipant": {
      "allowed": true
    }
  },
  "attachments": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_links": {
          "content": "http://example.com",
          "jiraRest": "http://example.com",
          "self": "http://example.com",
          "thumbnail": "http://example.com"
        },
        "author": {
          "_links": {
            "avatarUrls": {
              "property1": "string",
              "property2": "string"
            },
            "jiraRest": "http://example.com",
            "self": "http://example.com"
          },
          "accountId": "string",
          "active": true,
          "displayName": "string",
          "emailAddress": "string",
          "key": "string",
          "name": "string",
          "timeZone": "string"
        },
        "created": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "filename": "string",
        "mimeType": "string",
        "size": 0
      }
    ]
  },
  "comments": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_expands": [
          "string"
        ],
        "_links": {
          "self": "http://example.com"
        },
        "attachments": {
          "_expands": [
            "string"
          ],
          "_links": {
            "base": "http://example.com",
            "context": "string",
            "next": "http://example.com",
            "prev": "http://example.com",
            "self": "http://example.com"
          },
          "isLastPage": true,
          "limit": 0,
          "size": 0,
          "start": 0,
          "values": [
            {
              "_links": {
                "content": "http://example.com",
                "jiraRest": "http://example.com",
                "self": "http://example.com",
                "thumbnail": "http://example.com"
              },
              "author": {
                "_links": {
                  "avatarUrls": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "jiraRest": "http://example.com",
                  "self": "http://example.com"
                },
                "accountId": "string",
                "active": true,
                "displayName": "string",
                "emailAddress": "string",
                "key": "string",
                "name": "string",
                "timeZone": "string"
              },
              "created": {
                "epochMillis": 0,
                "friendly": "string",
                "iso8601": "string",
                "jira": "string"
              },
              "filename": "string",
              "mimeType": "string",
              "size": 0
            }
          ]
        },
        "author": {
          "_links": {
            "avatarUrls": {
              "property1": "string",
              "property2": "string"
            },
            "jiraRest": "http://example.com",
            "self": "http://example.com"
          },
          "accountId": "string",
          "active": true,
          "displayName": "string",
          "emailAddress": "string",
          "key": "string",
          "name": "string",
          "timeZone": "string"
        },
        "body": "string",
        "created": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "id": "string",
        "public": true,
        "renderedBody": {
          "html": "string"
        }
      }
    ]
  },
  "createdDate": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "currentStatus": {
    "status": "string",
    "statusCategory": "UNDEFINED",
    "statusDate": {
      "epochMillis": 0,
      "friendly": "string",
      "iso8601": "string",
      "jira": "string"
    }
  },
  "issueId": "string",
  "issueKey": "string",
  "participants": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_links": {
          "avatarUrls": {
            "property1": "string",
            "property2": "string"
          },
          "jiraRest": "http://example.com",
          "self": "http://example.com"
        },
        "accountId": "string",
        "active": true,
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "timeZone": "string"
      }
    ]
  },
  "reporter": {
    "_links": {
      "avatarUrls": {
        "property1": "string",
        "property2": "string"
      },
      "jiraRest": "http://example.com",
      "self": "http://example.com"
    },
    "accountId": "string",
    "active": true,
    "displayName": "string",
    "emailAddress": "string",
    "key": "string",
    "name": "string",
    "timeZone": "string"
  },
  "requestFieldValues": [
    {
      "fieldId": "string",
      "label": "string",
      "renderedValue": {},
      "value": null
    }
  ],
  "requestType": {
    "_expands": [
      "string"
    ],
    "_links": {
      "self": "http://example.com"
    },
    "canCreateRequest": true,
    "description": "string",
    "fields": {
      "canAddRequestParticipants": true,
      "canRaiseOnBehalfOf": true,
      "requestTypeFields": [
        {
          "defaultValues": [
            {
              "children": [
                {}
              ],
              "label": "string",
              "value": "string"
            }
          ],
          "description": "string",
          "fieldId": "string",
          "jiraSchema": {
            "configuration": {
              "property1": null,
              "property2": null
            },
            "custom": "string",
            "customId": 0,
            "items": "string",
            "system": "string",
            "type": "string"
          },
          "name": "string",
          "presetValues": [
            "string"
          ],
          "required": true,
          "validValues": [
            {
              "children": [
                {}
              ],
              "label": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ]
    },
    "groupIds": [
      "string"
    ],
    "helpText": "string",
    "icon": {
      "_links": {
        "iconUrls": {
          "property1": "http://example.com",
          "property2": "http://example.com"
        }
      },
      "id": "string"
    },
    "id": "string",
    "issueTypeId": "string",
    "name": "string",
    "portalId": "string",
    "practice": "string",
    "restrictionStatus": "OPEN",
    "serviceDeskId": "string"
  },
  "requestTypeId": "string",
  "serviceDesk": {
    "_links": {
      "self": "http://example.com"
    },
    "id": "string",
    "projectId": "string",
    "projectKey": "string",
    "projectName": "string",
    "projectTypeKey": "string"
  },
  "serviceDeskId": "string",
  "sla": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "_links": {
          "self": "http://example.com"
        },
        "completedCycles": [
          {
            "breachTime": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            },
            "breached": true,
            "elapsedTime": {
              "friendly": "string",
              "millis": 0
            },
            "goalDuration": {
              "friendly": "string",
              "millis": 0
            },
            "remainingTime": {
              "friendly": "string",
              "millis": 0
            },
            "startTime": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            },
            "stopTime": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            }
          }
        ],
        "id": "string",
        "name": "string",
        "ongoingCycle": {
          "breachTime": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          },
          "breached": true,
          "elapsedTime": {
            "friendly": "string",
            "millis": 0
          },
          "goalDuration": {
            "friendly": "string",
            "millis": 0
          },
          "paused": true,
          "remainingTime": {
            "friendly": "string",
            "millis": 0
          },
          "startTime": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          },
          "withinCalendarHours": true
        },
        "slaDisplayFormat": "string"
      }
    ]
  },
  "status": {
    "_expands": [
      "string"
    ],
    "_links": {
      "base": "http://example.com",
      "context": "string",
      "next": "http://example.com",
      "prev": "http://example.com",
      "self": "http://example.com"
    },
    "isLastPage": true,
    "limit": 0,
    "size": 0,
    "start": 0,
    "values": [
      {
        "status": "string",
        "statusCategory": "UNDEFINED",
        "statusDate": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        }
      }
    ]
  },
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|List of items that can be expanded in the response by specifying the expand query parameter.|
|_links|object|false|none|List of links associated with the request.|
|actions|object|false|none|List of actions that the user can take on the request.|
|attachments|object|false|none|List of attachments included with the request.|
|comments|object|false|none|List of comments included with the request.|
|createdDate|object|false|none|Date on which the request was created.|
|currentStatus|object|false|none|Status of the request.|
|issueId|string|false|none|ID of the request, as the peer issue ID.|
|issueKey|string|false|none|Key of the request, as the peer issue key.|
|participants|object|false|none|Expandable details of the customers participating in the request.|
|reporter|object|false|none|Details of the customer reporting the request.|
|requestFieldValues|[[CustomerRequestFieldValueDTO](#schemacustomerrequestfieldvaluedto)]|false|none|JSON map of Jira field IDs and their values representing the content of the request. This list does not include hidden fields.|
|requestType|object|false|none|Expandable details of the request type.|
|requestTypeId|string|false|none|ID of the request type for the request.|
|serviceDesk|object|false|none|Expandable details of the service desk.|
|serviceDeskId|string|false|none|ID of the service desk the request belongs to.|
|sla|object|false|none|Expandable details of the SLAs relating to the request.|
|status|object|false|none|Expandable details of the request's status history.|
|summary|string|false|none|Summary of the request created|

<h2 id="tocS_CustomerRequestFieldValueDTO">CustomerRequestFieldValueDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestfieldvaluedto"></a>
<a id="schema_CustomerRequestFieldValueDTO"></a>
<a id="tocScustomerrequestfieldvaluedto"></a>
<a id="tocscustomerrequestfieldvaluedto"></a>

```json
{
  "fieldId": "string",
  "label": "string",
  "renderedValue": {},
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldId|string|false|none|ID of the field.|
|label|string|false|none|Text label for the field.|
|renderedValue|object|false|none|Value of the field rendered in the UI.|
|value|object|false|none|Value of the field.|

<h2 id="tocS_CustomerRequestLinkDTO">CustomerRequestLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequestlinkdto"></a>
<a id="schema_CustomerRequestLinkDTO"></a>
<a id="tocScustomerrequestlinkdto"></a>
<a id="tocscustomerrequestlinkdto"></a>

```json
{
  "agent": "http://example.com",
  "jiraRest": "http://example.com",
  "self": "http://example.com",
  "web": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string(uri)|false|none|Jira agent view URL for the request.|
|jiraRest|string(uri)|false|none|REST API URL for the request.|
|self|string(uri)|false|none|none|
|web|string(uri)|false|none|Web URL for the request.|

<h2 id="tocS_CustomerRequestStatusDTO">CustomerRequestStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrequeststatusdto"></a>
<a id="schema_CustomerRequestStatusDTO"></a>
<a id="tocScustomerrequeststatusdto"></a>
<a id="tocscustomerrequeststatusdto"></a>

```json
{
  "status": "string",
  "statusCategory": "UNDEFINED",
  "statusDate": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Name of the status condition.|
|statusCategory|string|false|none|Status category the status belongs to.|
|statusDate|object|false|none|Date on which the status was attained.|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCategory|UNDEFINED|
|statusCategory|NEW|
|statusCategory|INDETERMINATE|
|statusCategory|DONE|

<h2 id="tocS_CustomerTransitionDTO">CustomerTransitionDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomertransitiondto"></a>
<a id="schema_CustomerTransitionDTO"></a>
<a id="tocScustomertransitiondto"></a>
<a id="tocscustomertransitiondto"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the transition.|
|name|string|false|none|Name of the transition.|

<h2 id="tocS_CustomerTransitionExecutionDTO">CustomerTransitionExecutionDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomertransitionexecutiondto"></a>
<a id="schema_CustomerTransitionExecutionDTO"></a>
<a id="tocScustomertransitionexecutiondto"></a>
<a id="tocscustomertransitionexecutiondto"></a>

```json
{
  "additionalComment": {
    "body": "string"
  },
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalComment|object|false|none|Comment explaining the reason for the transition.|
|id|string|false|none|ID of the transition to be performed.|

<h2 id="tocS_DateDTO">DateDTO</h2>
<!-- backwards compatibility -->
<a id="schemadatedto"></a>
<a id="schema_DateDTO"></a>
<a id="tocSdatedto"></a>
<a id="tocsdatedto"></a>

```json
{
  "epochMillis": 0,
  "friendly": "string",
  "iso8601": "string",
  "jira": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epochMillis|integer(int64)|false|none|Date as the number of milliseconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), 1 January 1970.|
|friendly|string|false|none|Date in a user-friendly text format.|
|iso8601|string|false|none|Date in ISO8601 format.|
|jira|string|false|none|Date in the format used in the Jira REST APIs, which is ISO8601 format but extended with milliseconds. For example, 2016-09-28T23:08:32.097+1000.|

<h2 id="tocS_DurationDTO">DurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemadurationdto"></a>
<a id="schema_DurationDTO"></a>
<a id="tocSdurationdto"></a>
<a id="tocsdurationdto"></a>

```json
{
  "friendly": "string",
  "millis": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friendly|string|false|none|Duration in a user-friendly text format.|
|millis|integer(int64)|false|none|Duration in milliseconds.|

<h2 id="tocS_EntityProperty">EntityProperty</h2>
<!-- backwards compatibility -->
<a id="schemaentityproperty"></a>
<a id="schema_EntityProperty"></a>
<a id="tocSentityproperty"></a>
<a id="tocsentityproperty"></a>

```json
{
  "key": "string",
  "value": null
}
```

An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the property. Required on create and update.|
|value|object|false|none|The value of the property. Required on create and update.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errorMessage": "string",
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|none|
|i18nErrorMessage|[I18nErrorMessage](#schemai18nerrormessage)|false|none|none|

<h2 id="tocS_Expandable">Expandable</h2>
<!-- backwards compatibility -->
<a id="schemaexpandable"></a>
<a id="schema_Expandable"></a>
<a id="tocSexpandable"></a>
<a id="tocsexpandable"></a>

```json
{
  "_expands": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|

<h2 id="tocS_FieldMetadata">FieldMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafieldmetadata"></a>
<a id="schema_FieldMetadata"></a>
<a id="tocSfieldmetadata"></a>
<a id="tocsfieldmetadata"></a>

```json
{
  "allowedValues": [
    null
  ],
  "autoCompleteUrl": "string",
  "configuration": {
    "property1": null,
    "property2": null
  },
  "defaultValue": null,
  "hasDefaultValue": true,
  "key": "string",
  "name": "string",
  "operations": [
    "string"
  ],
  "required": true,
  "schema": {
    "configuration": {
      "property1": null,
      "property2": null
    },
    "custom": "string",
    "customId": 0,
    "items": "string",
    "system": "string",
    "type": "string"
  }
}
```

The metadata describing an issue field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[object]|false|read-only|The list of values allowed in the field.|
|autoCompleteUrl|string|false|read-only|The URL that can be used to automatically complete the field.|
|configuration|object|false|read-only|The configuration properties.|
|defaultValue|object|false|read-only|The default value of the field.|
|hasDefaultValue|boolean|false|read-only|Whether the field has a default value.|
|key|string|true|read-only|The key of the field.|
|name|string|true|read-only|The name of the field.|
|operations|[string]|true|read-only|The list of operations that can be performed on the field.|
|required|boolean|true|read-only|Whether the field is required.|
|schema|object|true|read-only|The data type of the field.|

<h2 id="tocS_Form">Form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_Form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "answers": {
    "property1": {
      "adf": {
        "array": true,
        "bigDecimal": true,
        "bigInteger": true,
        "bigIntegerValue": 0,
        "binary": true,
        "binaryValue": [
          "string"
        ],
        "boolean": true,
        "booleanValue": true,
        "containerNode": true,
        "decimalValue": 0,
        "double": true,
        "doubleValue": 0,
        "elements": {},
        "fieldNames": {},
        "fields": {},
        "floatingPointNumber": true,
        "int": true,
        "intValue": 0,
        "integralNumber": true,
        "long": true,
        "longValue": 0,
        "missingNode": true,
        "null": true,
        "number": true,
        "numberType": "INT",
        "numberValue": 0,
        "object": true,
        "pojo": true,
        "textValue": "string",
        "textual": true,
        "valueAsBoolean": true,
        "valueAsDouble": 0,
        "valueAsInt": 0,
        "valueAsLong": 0,
        "valueAsText": "string",
        "valueNode": true
      },
      "choices": [
        "string"
      ],
      "date": "string",
      "files": [
        "string"
      ],
      "text": "string",
      "time": "string",
      "users": [
        "string"
      ]
    },
    "property2": {
      "adf": {
        "array": true,
        "bigDecimal": true,
        "bigInteger": true,
        "bigIntegerValue": 0,
        "binary": true,
        "binaryValue": [
          "string"
        ],
        "boolean": true,
        "booleanValue": true,
        "containerNode": true,
        "decimalValue": 0,
        "double": true,
        "doubleValue": 0,
        "elements": {},
        "fieldNames": {},
        "fields": {},
        "floatingPointNumber": true,
        "int": true,
        "intValue": 0,
        "integralNumber": true,
        "long": true,
        "longValue": 0,
        "missingNode": true,
        "null": true,
        "number": true,
        "numberType": "INT",
        "numberValue": 0,
        "object": true,
        "pojo": true,
        "textValue": "string",
        "textual": true,
        "valueAsBoolean": true,
        "valueAsDouble": 0,
        "valueAsInt": 0,
        "valueAsLong": 0,
        "valueAsText": "string",
        "valueNode": true
      },
      "choices": [
        "string"
      ],
      "date": "string",
      "files": [
        "string"
      ],
      "text": "string",
      "time": "string",
      "users": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|object|false|none|JSON mapping of form field answers containing form field IDs and corresponding values.|

<h2 id="tocS_FormAnswer">FormAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaformanswer"></a>
<a id="schema_FormAnswer"></a>
<a id="tocSformanswer"></a>
<a id="tocsformanswer"></a>

```json
{
  "adf": {
    "array": true,
    "bigDecimal": true,
    "bigInteger": true,
    "bigIntegerValue": 0,
    "binary": true,
    "binaryValue": [
      "string"
    ],
    "boolean": true,
    "booleanValue": true,
    "containerNode": true,
    "decimalValue": 0,
    "double": true,
    "doubleValue": 0,
    "elements": {},
    "fieldNames": {},
    "fields": {},
    "floatingPointNumber": true,
    "int": true,
    "intValue": 0,
    "integralNumber": true,
    "long": true,
    "longValue": 0,
    "missingNode": true,
    "null": true,
    "number": true,
    "numberType": "INT",
    "numberValue": 0,
    "object": true,
    "pojo": true,
    "textValue": "string",
    "textual": true,
    "valueAsBoolean": true,
    "valueAsDouble": 0,
    "valueAsInt": 0,
    "valueAsLong": 0,
    "valueAsText": "string",
    "valueNode": true
  },
  "choices": [
    "string"
  ],
  "date": "string",
  "files": [
    "string"
  ],
  "text": "string",
  "time": "string",
  "users": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adf|object|false|none|Answer in Atlassian Document Format (ADF)|
|choices|[string]|false|none|IDs of selected choices|
|date|string|false|none|Answer in date format (yyyy-MM-dd)|
|files|[string]|false|none|The IDs of files to be attached to the form that are obtained by calling the ‘attach temporary file’ endpoint on the corresponding service desk.|
|text|string|false|none|Answer in free text format|
|time|string|false|none|Answer in timestamp format (HH:mm)|
|users|[string]|false|none|IDs of selected users|

<h2 id="tocS_FormValidationErrorContextDTO">FormValidationErrorContextDTO</h2>
<!-- backwards compatibility -->
<a id="schemaformvalidationerrorcontextdto"></a>
<a id="schema_FormValidationErrorContextDTO"></a>
<a id="tocSformvalidationerrorcontextdto"></a>
<a id="tocsformvalidationerrorcontextdto"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the form entity related to the validation error.|
|type|string|false|none|Type of form entity related to the validation error.|

<h2 id="tocS_FormValidationErrorDTO">FormValidationErrorDTO</h2>
<!-- backwards compatibility -->
<a id="schemaformvalidationerrordto"></a>
<a id="schema_FormValidationErrorDTO"></a>
<a id="tocSformvalidationerrordto"></a>
<a id="tocsformvalidationerrordto"></a>

```json
{
  "code": "string",
  "context": [
    {
      "id": "string",
      "type": "string"
    }
  ],
  "detail": "string",
  "status": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Machine-readable validation error code.|
|context|[[FormValidationErrorContextDTO](#schemaformvalidationerrorcontextdto)]|false|none|Identifies the form entity that caused the validation error.|
|detail|string|false|none|Detailed validation error message.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|Short summary of the validation error.|

<h2 id="tocS_FormValidationErrorResponseDTO">FormValidationErrorResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaformvalidationerrorresponsedto"></a>
<a id="schema_FormValidationErrorResponseDTO"></a>
<a id="tocSformvalidationerrorresponsedto"></a>
<a id="tocsformvalidationerrorresponsedto"></a>

```json
{
  "errorMessage": "string",
  "errors": [
    {
      "code": "string",
      "context": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "detail": "string",
      "status": 0,
      "title": "string"
    }
  ],
  "i18nErrorMessage": {
    "i18nKey": "string",
    "parameters": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|Description of the error.|
|errors|[[FormValidationErrorDTO](#schemaformvalidationerrordto)]|false|none|A list of validation errors.|
|i18nErrorMessage|object|false|none|Internationalized error message details.|

<h2 id="tocS_HistoryMetadata">HistoryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemahistorymetadata"></a>
<a id="schema_HistoryMetadata"></a>
<a id="tocShistorymetadata"></a>
<a id="tocshistorymetadata"></a>

```json
{
  "activityDescription": "string",
  "activityDescriptionKey": "string",
  "actor": {
    "avatarUrl": "string",
    "displayName": "string",
    "displayNameKey": "string",
    "id": "string",
    "type": "string",
    "url": "string"
  },
  "cause": {
    "avatarUrl": "string",
    "displayName": "string",
    "displayNameKey": "string",
    "id": "string",
    "type": "string",
    "url": "string"
  },
  "description": "string",
  "descriptionKey": "string",
  "emailDescription": "string",
  "emailDescriptionKey": "string",
  "extraData": {
    "property1": "string",
    "property2": "string"
  },
  "generator": {
    "avatarUrl": "string",
    "displayName": "string",
    "displayNameKey": "string",
    "id": "string",
    "type": "string",
    "url": "string"
  },
  "type": "string"
}
```

Details of issue history metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityDescription|string|false|none|The activity described in the history record.|
|activityDescriptionKey|string|false|none|The key of the activity described in the history record.|
|actor|object|false|none|Details of the user whose action created the history record.|
|cause|object|false|none|Details of the cause that triggered the creation the history record.|
|description|string|false|none|The description of the history record.|
|descriptionKey|string|false|none|The description key of the history record.|
|emailDescription|string|false|none|The description of the email address associated the history record.|
|emailDescriptionKey|string|false|none|The description key of the email address associated the history record.|
|extraData|object|false|none|Additional arbitrary information about the history record.|
|generator|object|false|none|Details of the system that generated the history record.|
|type|string|false|none|The type of the history record.|

<h2 id="tocS_HistoryMetadataParticipant">HistoryMetadataParticipant</h2>
<!-- backwards compatibility -->
<a id="schemahistorymetadataparticipant"></a>
<a id="schema_HistoryMetadataParticipant"></a>
<a id="tocShistorymetadataparticipant"></a>
<a id="tocshistorymetadataparticipant"></a>

```json
{
  "avatarUrl": "string",
  "displayName": "string",
  "displayNameKey": "string",
  "id": "string",
  "type": "string",
  "url": "string"
}
```

Details of user or system associated with a issue history metadata item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrl|string|false|none|The URL to an avatar for the user or system associated with a history record.|
|displayName|string|false|none|The display name of the user or system associated with a history record.|
|displayNameKey|string|false|none|The key of the display name of the user or system associated with a history record.|
|id|string|false|none|The ID of the user or system associated with a history record.|
|type|string|false|none|The type of the user or system associated with a history record.|
|url|string|false|none|The URL of the user or system associated with a history record.|

<h2 id="tocS_I18nErrorMessage">I18nErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemai18nerrormessage"></a>
<a id="schema_I18nErrorMessage"></a>
<a id="tocSi18nerrormessage"></a>
<a id="tocsi18nerrormessage"></a>

```json
{
  "i18nKey": "string",
  "parameters": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|i18nKey|string|false|none|none|
|parameters|[string]|false|none|none|

<h2 id="tocS_I18nErrorMessageDTO">I18nErrorMessageDTO</h2>
<!-- backwards compatibility -->
<a id="schemai18nerrormessagedto"></a>
<a id="schema_I18nErrorMessageDTO"></a>
<a id="tocSi18nerrormessagedto"></a>
<a id="tocsi18nerrormessagedto"></a>

```json
{
  "i18nKey": "string",
  "parameters": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|i18nKey|string|false|none|Internationalization key for the error message.|
|parameters|[string]|false|none|Parameters used to render the internationalized error message.|

<h2 id="tocS_IncludedFields">IncludedFields</h2>
<!-- backwards compatibility -->
<a id="schemaincludedfields"></a>
<a id="schema_IncludedFields"></a>
<a id="tocSincludedfields"></a>
<a id="tocsincludedfields"></a>

```json
{
  "actuallyIncluded": [
    "string"
  ],
  "excluded": [
    "string"
  ],
  "included": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actuallyIncluded|[string]|false|none|none|
|excluded|[string]|false|none|none|
|included|[string]|false|none|none|

<h2 id="tocS_InputStreamSource">InputStreamSource</h2>
<!-- backwards compatibility -->
<a id="schemainputstreamsource"></a>
<a id="schema_InputStreamSource"></a>
<a id="tocSinputstreamsource"></a>
<a id="tocsinputstreamsource"></a>

```json
{
  "inputStream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputStream|object|false|none|none|

<h2 id="tocS_InsightWorkspaceDTO">InsightWorkspaceDTO</h2>
<!-- backwards compatibility -->
<a id="schemainsightworkspacedto"></a>
<a id="schema_InsightWorkspaceDTO"></a>
<a id="tocSinsightworkspacedto"></a>
<a id="tocsinsightworkspacedto"></a>

```json
{
  "workspaceId": "string"
}
```

Details of an insight workspace ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workspaceId|string|false|none|The workspace ID used as the identifier to access the Insight REST API.|

<h2 id="tocS_IssueBean">IssueBean</h2>
<!-- backwards compatibility -->
<a id="schemaissuebean"></a>
<a id="schema_IssueBean"></a>
<a id="tocSissuebean"></a>
<a id="tocsissuebean"></a>

```json
{
  "changelog": {
    "histories": [
      {
        "author": {
          "accountId": "string",
          "accountType": "string",
          "active": true,
          "avatarUrls": {
            "16x16": "http://example.com",
            "24x24": "http://example.com",
            "32x32": "http://example.com",
            "48x48": "http://example.com"
          },
          "displayName": "string",
          "emailAddress": "string",
          "key": "string",
          "name": "string",
          "self": "string",
          "timeZone": "string"
        },
        "created": "1970-01-01T00:00:00Z",
        "historyMetadata": {
          "activityDescription": "string",
          "activityDescriptionKey": "string",
          "actor": {
            "avatarUrl": "string",
            "displayName": "string",
            "displayNameKey": "string",
            "id": "string",
            "type": "string",
            "url": "string"
          },
          "cause": {
            "avatarUrl": "string",
            "displayName": "string",
            "displayNameKey": "string",
            "id": "string",
            "type": "string",
            "url": "string"
          },
          "description": "string",
          "descriptionKey": "string",
          "emailDescription": "string",
          "emailDescriptionKey": "string",
          "extraData": {
            "property1": "string",
            "property2": "string"
          },
          "generator": {
            "avatarUrl": "string",
            "displayName": "string",
            "displayNameKey": "string",
            "id": "string",
            "type": "string",
            "url": "string"
          },
          "type": "string"
        },
        "id": "string",
        "items": [
          {
            "field": "string",
            "fieldId": "string",
            "fieldtype": "string",
            "from": "string",
            "fromString": "string",
            "to": "string",
            "toString": "string"
          }
        ]
      }
    ],
    "maxResults": 0,
    "startAt": 0,
    "total": 0
  },
  "editmeta": {
    "fields": {
      "property1": {
        "allowedValues": [
          null
        ],
        "autoCompleteUrl": "string",
        "configuration": {
          "property1": null,
          "property2": null
        },
        "defaultValue": null,
        "hasDefaultValue": true,
        "key": "string",
        "name": "string",
        "operations": [
          "string"
        ],
        "required": true,
        "schema": {
          "configuration": {
            "property1": null,
            "property2": null
          },
          "custom": "string",
          "customId": 0,
          "items": "string",
          "system": "string",
          "type": "string"
        }
      },
      "property2": {
        "allowedValues": [
          null
        ],
        "autoCompleteUrl": "string",
        "configuration": {
          "property1": null,
          "property2": null
        },
        "defaultValue": null,
        "hasDefaultValue": true,
        "key": "string",
        "name": "string",
        "operations": [
          "string"
        ],
        "required": true,
        "schema": {
          "configuration": {
            "property1": null,
            "property2": null
          },
          "custom": "string",
          "customId": 0,
          "items": "string",
          "system": "string",
          "type": "string"
        }
      }
    }
  },
  "expand": "string",
  "fields": {
    "property1": null,
    "property2": null
  },
  "fieldsToInclude": {
    "actuallyIncluded": [
      "string"
    ],
    "excluded": [
      "string"
    ],
    "included": [
      "string"
    ]
  },
  "id": "string",
  "key": "string",
  "names": {
    "property1": "string",
    "property2": "string"
  },
  "operations": {
    "linkGroups": [
      {
        "groups": [
          {}
        ],
        "header": {
          "href": "string",
          "iconClass": "string",
          "id": "string",
          "label": "string",
          "styleClass": "string",
          "title": "string",
          "weight": 0
        },
        "id": "string",
        "links": [
          {
            "href": "string",
            "iconClass": "string",
            "id": "string",
            "label": "string",
            "styleClass": "string",
            "title": "string",
            "weight": 0
          }
        ],
        "styleClass": "string",
        "weight": 0
      }
    ]
  },
  "properties": {
    "property1": null,
    "property2": null
  },
  "renderedFields": {
    "property1": null,
    "property2": null
  },
  "schema": {
    "property1": {
      "configuration": {
        "property1": null,
        "property2": null
      },
      "custom": "string",
      "customId": 0,
      "items": "string",
      "system": "string",
      "type": "string"
    },
    "property2": {
      "configuration": {
        "property1": null,
        "property2": null
      },
      "custom": "string",
      "customId": 0,
      "items": "string",
      "system": "string",
      "type": "string"
    }
  },
  "self": "http://example.com",
  "transitions": [
    {
      "expand": "string",
      "fields": {
        "property1": {
          "allowedValues": [
            null
          ],
          "autoCompleteUrl": "string",
          "configuration": {
            "property1": null,
            "property2": null
          },
          "defaultValue": null,
          "hasDefaultValue": true,
          "key": "string",
          "name": "string",
          "operations": [
            "string"
          ],
          "required": true,
          "schema": {
            "configuration": {
              "property1": null,
              "property2": null
            },
            "custom": "string",
            "customId": 0,
            "items": "string",
            "system": "string",
            "type": "string"
          }
        },
        "property2": {
          "allowedValues": [
            null
          ],
          "autoCompleteUrl": "string",
          "configuration": {
            "property1": null,
            "property2": null
          },
          "defaultValue": null,
          "hasDefaultValue": true,
          "key": "string",
          "name": "string",
          "operations": [
            "string"
          ],
          "required": true,
          "schema": {
            "configuration": {
              "property1": null,
              "property2": null
            },
            "custom": "string",
            "customId": 0,
            "items": "string",
            "system": "string",
            "type": "string"
          }
        }
      },
      "hasScreen": true,
      "id": "string",
      "isAvailable": true,
      "isConditional": true,
      "isGlobal": true,
      "isInitial": true,
      "looped": true,
      "name": "string",
      "to": {
        "description": "string",
        "iconUrl": "string",
        "id": "string",
        "name": "string",
        "scope": {
          "project": {
            "avatarUrls": {
              "16x16": "http://example.com",
              "24x24": "http://example.com",
              "32x32": "http://example.com",
              "48x48": "http://example.com"
            },
            "id": "string",
            "key": "string",
            "name": "string",
            "projectCategory": {
              "description": "string",
              "id": "string",
              "name": "string",
              "self": "string"
            },
            "projectTypeKey": "software",
            "self": "string",
            "simplified": true
          },
          "type": "PROJECT"
        },
        "self": "string",
        "statusCategory": {
          "colorName": "string",
          "id": 0,
          "key": "string",
          "name": "string",
          "self": "string"
        }
      }
    }
  ],
  "versionedRepresentations": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  }
}
```

Details about an issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changelog|object|false|read-only|Details of changelogs associated with the issue.|
|editmeta|object|false|read-only|The metadata for the fields on the issue that can be amended.|
|expand|string|false|read-only|Expand options that include additional issue details in the response.|
|fields|object|false|none|none|
|fieldsToInclude|[IncludedFields](#schemaincludedfields)|false|none|none|
|id|string|false|read-only|The ID of the issue.|
|key|string|false|read-only|The key of the issue.|
|names|object|false|read-only|The ID and name of each field present on the issue.|
|operations|object|false|read-only|The operations that can be performed on the issue.|
|properties|object|false|read-only|Details of the issue properties identified in the request.|
|renderedFields|object|false|read-only|The rendered value of each field present on the issue.|
|schema|object|false|read-only|The schema describing each field present on the issue.|
|self|string(uri)|false|read-only|The URL of the issue details.|
|transitions|[[IssueTransition](#schemaissuetransition)]|false|read-only|The transitions that can be performed on the issue.|
|versionedRepresentations|object|false|read-only|The versions of each field on the issue.|

<h2 id="tocS_IssueTransition">IssueTransition</h2>
<!-- backwards compatibility -->
<a id="schemaissuetransition"></a>
<a id="schema_IssueTransition"></a>
<a id="tocSissuetransition"></a>
<a id="tocsissuetransition"></a>

```json
{
  "expand": "string",
  "fields": {
    "property1": {
      "allowedValues": [
        null
      ],
      "autoCompleteUrl": "string",
      "configuration": {
        "property1": null,
        "property2": null
      },
      "defaultValue": null,
      "hasDefaultValue": true,
      "key": "string",
      "name": "string",
      "operations": [
        "string"
      ],
      "required": true,
      "schema": {
        "configuration": {
          "property1": null,
          "property2": null
        },
        "custom": "string",
        "customId": 0,
        "items": "string",
        "system": "string",
        "type": "string"
      }
    },
    "property2": {
      "allowedValues": [
        null
      ],
      "autoCompleteUrl": "string",
      "configuration": {
        "property1": null,
        "property2": null
      },
      "defaultValue": null,
      "hasDefaultValue": true,
      "key": "string",
      "name": "string",
      "operations": [
        "string"
      ],
      "required": true,
      "schema": {
        "configuration": {
          "property1": null,
          "property2": null
        },
        "custom": "string",
        "customId": 0,
        "items": "string",
        "system": "string",
        "type": "string"
      }
    }
  },
  "hasScreen": true,
  "id": "string",
  "isAvailable": true,
  "isConditional": true,
  "isGlobal": true,
  "isInitial": true,
  "looped": true,
  "name": "string",
  "to": {
    "description": "string",
    "iconUrl": "string",
    "id": "string",
    "name": "string",
    "scope": {
      "project": {
        "avatarUrls": {
          "16x16": "http://example.com",
          "24x24": "http://example.com",
          "32x32": "http://example.com",
          "48x48": "http://example.com"
        },
        "id": "string",
        "key": "string",
        "name": "string",
        "projectCategory": {
          "description": "string",
          "id": "string",
          "name": "string",
          "self": "string"
        },
        "projectTypeKey": "software",
        "self": "string",
        "simplified": true
      },
      "type": "PROJECT"
    },
    "self": "string",
    "statusCategory": {
      "colorName": "string",
      "id": 0,
      "key": "string",
      "name": "string",
      "self": "string"
    }
  }
}
```

Details of an issue transition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expand|string|false|read-only|Expand options that include additional transition details in the response.|
|fields|object|false|read-only|Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.|
|hasScreen|boolean|false|read-only|Whether there is a screen associated with the issue transition.|
|id|string|false|none|The ID of the issue transition. Required when specifying a transition to undertake.|
|isAvailable|boolean|false|read-only|Whether the transition is available to be performed.|
|isConditional|boolean|false|read-only|Whether the issue has to meet criteria before the issue transition is applied.|
|isGlobal|boolean|false|read-only|Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.|
|isInitial|boolean|false|read-only|Whether this is the initial issue transition for the workflow.|
|looped|boolean|false|none|none|
|name|string|false|read-only|The name of the issue transition.|
|to|object|false|read-only|Details of the issue status after the transition.|

<h2 id="tocS_IssueUpdateMetadata">IssueUpdateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaissueupdatemetadata"></a>
<a id="schema_IssueUpdateMetadata"></a>
<a id="tocSissueupdatemetadata"></a>
<a id="tocsissueupdatemetadata"></a>

```json
{
  "fields": {
    "property1": {
      "allowedValues": [
        null
      ],
      "autoCompleteUrl": "string",
      "configuration": {
        "property1": null,
        "property2": null
      },
      "defaultValue": null,
      "hasDefaultValue": true,
      "key": "string",
      "name": "string",
      "operations": [
        "string"
      ],
      "required": true,
      "schema": {
        "configuration": {
          "property1": null,
          "property2": null
        },
        "custom": "string",
        "customId": 0,
        "items": "string",
        "system": "string",
        "type": "string"
      }
    },
    "property2": {
      "allowedValues": [
        null
      ],
      "autoCompleteUrl": "string",
      "configuration": {
        "property1": null,
        "property2": null
      },
      "defaultValue": null,
      "hasDefaultValue": true,
      "key": "string",
      "name": "string",
      "operations": [
        "string"
      ],
      "required": true,
      "schema": {
        "configuration": {
          "property1": null,
          "property2": null
        },
        "custom": "string",
        "customId": 0,
        "items": "string",
        "system": "string",
        "type": "string"
      }
    }
  }
}
```

A list of editable field details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|read-only|none|

<h2 id="tocS_JsonNode">JsonNode</h2>
<!-- backwards compatibility -->
<a id="schemajsonnode"></a>
<a id="schema_JsonNode"></a>
<a id="tocSjsonnode"></a>
<a id="tocsjsonnode"></a>

```json
{
  "array": true,
  "bigDecimal": true,
  "bigInteger": true,
  "bigIntegerValue": 0,
  "binary": true,
  "binaryValue": [
    "string"
  ],
  "boolean": true,
  "booleanValue": true,
  "containerNode": true,
  "decimalValue": 0,
  "double": true,
  "doubleValue": 0,
  "elements": {},
  "fieldNames": {},
  "fields": {},
  "floatingPointNumber": true,
  "int": true,
  "intValue": 0,
  "integralNumber": true,
  "long": true,
  "longValue": 0,
  "missingNode": true,
  "null": true,
  "number": true,
  "numberType": "INT",
  "numberValue": 0,
  "object": true,
  "pojo": true,
  "textValue": "string",
  "textual": true,
  "valueAsBoolean": true,
  "valueAsDouble": 0,
  "valueAsInt": 0,
  "valueAsLong": 0,
  "valueAsText": "string",
  "valueNode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|array|boolean|false|none|none|
|bigDecimal|boolean|false|none|none|
|bigInteger|boolean|false|none|none|
|bigIntegerValue|integer|false|none|none|
|binary|boolean|false|none|none|
|binaryValue|[string(byte)]|false|none|none|
|boolean|boolean|false|none|none|
|booleanValue|boolean|false|none|none|
|containerNode|boolean|false|none|none|
|decimalValue|number|false|none|none|
|double|boolean|false|none|none|
|doubleValue|number(double)|false|none|none|
|elements|object|false|none|none|
|fieldNames|object|false|none|none|
|fields|object|false|none|none|
|floatingPointNumber|boolean|false|none|none|
|int|boolean|false|none|none|
|intValue|integer(int32)|false|none|none|
|integralNumber|boolean|false|none|none|
|long|boolean|false|none|none|
|longValue|integer(int64)|false|none|none|
|missingNode|boolean|false|none|none|
|null|boolean|false|none|none|
|number|boolean|false|none|none|
|numberType|string|false|none|none|
|numberValue|number|false|none|none|
|object|boolean|false|none|none|
|pojo|boolean|false|none|none|
|textValue|string|false|none|none|
|textual|boolean|false|none|none|
|valueAsBoolean|boolean|false|none|none|
|valueAsDouble|number(double)|false|none|none|
|valueAsInt|integer(int32)|false|none|none|
|valueAsLong|integer(int64)|false|none|none|
|valueAsText|string|false|none|none|
|valueNode|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|numberType|INT|
|numberType|LONG|
|numberType|BIG_INTEGER|
|numberType|FLOAT|
|numberType|DOUBLE|
|numberType|BIG_DECIMAL|

<h2 id="tocS_JsonTypeBean">JsonTypeBean</h2>
<!-- backwards compatibility -->
<a id="schemajsontypebean"></a>
<a id="schema_JsonTypeBean"></a>
<a id="tocSjsontypebean"></a>
<a id="tocsjsontypebean"></a>

```json
{
  "configuration": {
    "property1": null,
    "property2": null
  },
  "custom": "string",
  "customId": 0,
  "items": "string",
  "system": "string",
  "type": "string"
}
```

The schema of a field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|read-only|If the field is a custom field, the configuration of the field.|
|custom|string|false|read-only|If the field is a custom field, the URI of the field.|
|customId|integer(int64)|false|read-only|If the field is a custom field, the custom ID of the field.|
|items|string|false|read-only|When the data type is an array, the name of the field items within the array.|
|system|string|false|read-only|If the field is a system field, the name of the field.|
|type|string|true|read-only|The data type of the field.|

<h2 id="tocS_LinkGroup">LinkGroup</h2>
<!-- backwards compatibility -->
<a id="schemalinkgroup"></a>
<a id="schema_LinkGroup"></a>
<a id="tocSlinkgroup"></a>
<a id="tocslinkgroup"></a>

```json
{
  "groups": [
    {
      "groups": [
        {}
      ],
      "header": {
        "href": "string",
        "iconClass": "string",
        "id": "string",
        "label": "string",
        "styleClass": "string",
        "title": "string",
        "weight": 0
      },
      "id": "string",
      "links": [
        {
          "href": "string",
          "iconClass": "string",
          "id": "string",
          "label": "string",
          "styleClass": "string",
          "title": "string",
          "weight": 0
        }
      ],
      "styleClass": "string",
      "weight": 0
    }
  ],
  "header": {
    "href": "string",
    "iconClass": "string",
    "id": "string",
    "label": "string",
    "styleClass": "string",
    "title": "string",
    "weight": 0
  },
  "id": "string",
  "links": [
    {
      "href": "string",
      "iconClass": "string",
      "id": "string",
      "label": "string",
      "styleClass": "string",
      "title": "string",
      "weight": 0
    }
  ],
  "styleClass": "string",
  "weight": 0
}
```

Details a link group, which defines issue operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[LinkGroup](#schemalinkgroup)]|false|none|none|
|header|[SimpleLink](#schemasimplelink)|false|none|Details about the operations available in this version.|
|id|string|false|none|none|
|links|[[SimpleLink](#schemasimplelink)]|false|none|none|
|styleClass|string|false|none|none|
|weight|integer(int32)|false|none|none|

<h2 id="tocS_Linkable">Linkable</h2>
<!-- backwards compatibility -->
<a id="schemalinkable"></a>
<a id="schema_Linkable"></a>
<a id="tocSlinkable"></a>
<a id="tocslinkable"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[SelfLinkDTO](#schemaselflinkdto)|false|none|none|

<h2 id="tocS_LinkableAttachmentLinkDTO">LinkableAttachmentLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemalinkableattachmentlinkdto"></a>
<a id="schema_LinkableAttachmentLinkDTO"></a>
<a id="tocSlinkableattachmentlinkdto"></a>
<a id="tocslinkableattachmentlinkdto"></a>

```json
{
  "_links": {
    "content": "http://example.com",
    "jiraRest": "http://example.com",
    "self": "http://example.com",
    "thumbnail": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[AttachmentLinkDTO](#schemaattachmentlinkdto)|false|none|none|

<h2 id="tocS_LinkableCustomerRequestLinkDTO">LinkableCustomerRequestLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemalinkablecustomerrequestlinkdto"></a>
<a id="schema_LinkableCustomerRequestLinkDTO"></a>
<a id="tocSlinkablecustomerrequestlinkdto"></a>
<a id="tocslinkablecustomerrequestlinkdto"></a>

```json
{
  "_links": {
    "agent": "http://example.com",
    "jiraRest": "http://example.com",
    "self": "http://example.com",
    "web": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[CustomerRequestLinkDTO](#schemacustomerrequestlinkdto)|false|none|none|

<h2 id="tocS_LinkableUserLinkDTO">LinkableUserLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemalinkableuserlinkdto"></a>
<a id="schema_LinkableUserLinkDTO"></a>
<a id="tocSlinkableuserlinkdto"></a>
<a id="tocslinkableuserlinkdto"></a>

```json
{
  "_links": {
    "avatarUrls": {
      "property1": "string",
      "property2": "string"
    },
    "jiraRest": "http://example.com",
    "self": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[UserLinkDTO](#schemauserlinkdto)|false|none|none|

<h2 id="tocS_MultipartFile">MultipartFile</h2>
<!-- backwards compatibility -->
<a id="schemamultipartfile"></a>
<a id="schema_MultipartFile"></a>
<a id="tocSmultipartfile"></a>
<a id="tocsmultipartfile"></a>

```json
{
  "bytes": [
    "string"
  ],
  "contentType": "string",
  "empty": true,
  "inputStream": {},
  "name": "string",
  "originalFilename": "string",
  "resource": {
    "contentAsByteArray": [
      "string"
    ],
    "description": "string",
    "file": "string",
    "filename": "string",
    "inputStream": {},
    "open": true,
    "readable": true,
    "uri": "http://example.com",
    "url": "http://example.com"
  },
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes|[string(byte)]|false|none|none|
|contentType|string|false|none|none|
|empty|boolean|false|none|none|
|inputStream|object|false|none|none|
|name|string|false|none|none|
|originalFilename|string|false|none|none|
|resource|[Resource](#schemaresource)|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_Operations">Operations</h2>
<!-- backwards compatibility -->
<a id="schemaoperations"></a>
<a id="schema_Operations"></a>
<a id="tocSoperations"></a>
<a id="tocsoperations"></a>

```json
{
  "linkGroups": [
    {
      "groups": [
        {}
      ],
      "header": {
        "href": "string",
        "iconClass": "string",
        "id": "string",
        "label": "string",
        "styleClass": "string",
        "title": "string",
        "weight": 0
      },
      "id": "string",
      "links": [
        {
          "href": "string",
          "iconClass": "string",
          "id": "string",
          "label": "string",
          "styleClass": "string",
          "title": "string",
          "weight": 0
        }
      ],
      "styleClass": "string",
      "weight": 0
    }
  ]
}
```

Details of the operations that can be performed on the issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkGroups|[[LinkGroup](#schemalinkgroup)]|false|read-only|Details of the link groups defining issue operations.|

<h2 id="tocS_OrganizationCreateDTO">OrganizationCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationcreatedto"></a>
<a id="schema_OrganizationCreateDTO"></a>
<a id="tocSorganizationcreatedto"></a>
<a id="tocsorganizationcreatedto"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the organization. Must contain 1-200 characters.|

<h2 id="tocS_OrganizationDTO">OrganizationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationdto"></a>
<a id="schema_OrganizationDTO"></a>
<a id="tocSorganizationdto"></a>
<a id="tocsorganizationdto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "created": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "id": "string",
  "name": "string",
  "scimManaged": true,
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|REST API URL to the organization.|
|created|object|false|none|Date the organization was created. This field may not be present in some older organizations.|
|id|string|false|none|A unique system generated ID for the organization.|
|name|string|false|none|Name of the organization.|
|scimManaged|boolean|false|none|Returns if an organization is managed by scim. This field may not be present in some older organizations|
|uuid|string|false|none|A unique system generated ID for the organization. This is identity from the group directory id|

<h2 id="tocS_OrganizationServiceDeskUpdateDTO">OrganizationServiceDeskUpdateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationservicedeskupdatedto"></a>
<a id="schema_OrganizationServiceDeskUpdateDTO"></a>
<a id="tocSorganizationservicedeskupdatedto"></a>
<a id="tocsorganizationservicedeskupdatedto"></a>

```json
{
  "organizationId": 0,
  "serviceDeskId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|integer(int32)|true|none|List of organizations, specified by 'ID' field values, to add to or remove from the service desk.|
|serviceDeskId|string|false|none|Service desk Id for which, organization needs to be updated|

<h2 id="tocS_PageOfChangelogs">PageOfChangelogs</h2>
<!-- backwards compatibility -->
<a id="schemapageofchangelogs"></a>
<a id="schema_PageOfChangelogs"></a>
<a id="tocSpageofchangelogs"></a>
<a id="tocspageofchangelogs"></a>

```json
{
  "histories": [
    {
      "author": {
        "accountId": "string",
        "accountType": "string",
        "active": true,
        "avatarUrls": {
          "16x16": "http://example.com",
          "24x24": "http://example.com",
          "32x32": "http://example.com",
          "48x48": "http://example.com"
        },
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "self": "string",
        "timeZone": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "historyMetadata": {
        "activityDescription": "string",
        "activityDescriptionKey": "string",
        "actor": {
          "avatarUrl": "string",
          "displayName": "string",
          "displayNameKey": "string",
          "id": "string",
          "type": "string",
          "url": "string"
        },
        "cause": {
          "avatarUrl": "string",
          "displayName": "string",
          "displayNameKey": "string",
          "id": "string",
          "type": "string",
          "url": "string"
        },
        "description": "string",
        "descriptionKey": "string",
        "emailDescription": "string",
        "emailDescriptionKey": "string",
        "extraData": {
          "property1": "string",
          "property2": "string"
        },
        "generator": {
          "avatarUrl": "string",
          "displayName": "string",
          "displayNameKey": "string",
          "id": "string",
          "type": "string",
          "url": "string"
        },
        "type": "string"
      },
      "id": "string",
      "items": [
        {
          "field": "string",
          "fieldId": "string",
          "fieldtype": "string",
          "from": "string",
          "fromString": "string",
          "to": "string",
          "toString": "string"
        }
      ]
    }
  ],
  "maxResults": 0,
  "startAt": 0,
  "total": 0
}
```

A page of changelogs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histories|[[Changelog](#schemachangelog)]|false|read-only|The list of changelogs.|
|maxResults|integer(int32)|false|read-only|The maximum number of results that could be on the page.|
|startAt|integer(int32)|false|read-only|The index of the first item returned on the page.|
|total|integer(int32)|false|read-only|The number of results on the page.|

<h2 id="tocS_PagedDTOApprovalDTO">PagedDTOApprovalDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoapprovaldto"></a>
<a id="schema_PagedDTOApprovalDTO"></a>
<a id="tocSpageddtoapprovaldto"></a>
<a id="tocspageddtoapprovaldto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "self": "http://example.com"
      },
      "approvers": [
        {
          "approver": {
            "_links": {
              "avatarUrls": {
                "property1": "string",
                "property2": "string"
              },
              "jiraRest": "http://example.com",
              "self": "http://example.com"
            },
            "accountId": "string",
            "active": true,
            "displayName": "string",
            "emailAddress": "string",
            "key": "string",
            "name": "string",
            "timeZone": "string"
          },
          "approverDecision": "approved"
        }
      ],
      "canAnswerApproval": true,
      "completedDate": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "createdDate": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "finalDecision": "approved",
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[ApprovalDTO](#schemaapprovaldto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOArticleDTO">PagedDTOArticleDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoarticledto"></a>
<a id="schema_PagedDTOArticleDTO"></a>
<a id="tocSpageddtoarticledto"></a>
<a id="tocspageddtoarticledto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "content": {
        "iframeSrc": "string"
      },
      "excerpt": "string",
      "source": {
        "type": "confluence"
      },
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[ArticleDTO](#schemaarticledto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOAssetsWorkspaceDTO">PagedDTOAssetsWorkspaceDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoassetsworkspacedto"></a>
<a id="schema_PagedDTOAssetsWorkspaceDTO"></a>
<a id="tocSpageddtoassetsworkspacedto"></a>
<a id="tocspageddtoassetsworkspacedto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "workspaceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[AssetsWorkspaceDTO](#schemaassetsworkspacedto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOAttachmentDTO">PagedDTOAttachmentDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoattachmentdto"></a>
<a id="schema_PagedDTOAttachmentDTO"></a>
<a id="tocSpageddtoattachmentdto"></a>
<a id="tocspageddtoattachmentdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "content": "http://example.com",
        "jiraRest": "http://example.com",
        "self": "http://example.com",
        "thumbnail": "http://example.com"
      },
      "author": {
        "_links": {
          "avatarUrls": {
            "property1": "string",
            "property2": "string"
          },
          "jiraRest": "http://example.com",
          "self": "http://example.com"
        },
        "accountId": "string",
        "active": true,
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "timeZone": "string"
      },
      "created": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "filename": "string",
      "mimeType": "string",
      "size": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[AttachmentDTO](#schemaattachmentdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOCommentDTO">PagedDTOCommentDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtocommentdto"></a>
<a id="schema_PagedDTOCommentDTO"></a>
<a id="tocSpageddtocommentdto"></a>
<a id="tocspageddtocommentdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_expands": [
        "string"
      ],
      "_links": {
        "self": "http://example.com"
      },
      "attachments": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "_links": {
              "content": "http://example.com",
              "jiraRest": "http://example.com",
              "self": "http://example.com",
              "thumbnail": "http://example.com"
            },
            "author": {
              "_links": {
                "avatarUrls": {
                  "property1": "string",
                  "property2": "string"
                },
                "jiraRest": "http://example.com",
                "self": "http://example.com"
              },
              "accountId": "string",
              "active": true,
              "displayName": "string",
              "emailAddress": "string",
              "key": "string",
              "name": "string",
              "timeZone": "string"
            },
            "created": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            },
            "filename": "string",
            "mimeType": "string",
            "size": 0
          }
        ]
      },
      "author": {
        "_links": {
          "avatarUrls": {
            "property1": "string",
            "property2": "string"
          },
          "jiraRest": "http://example.com",
          "self": "http://example.com"
        },
        "accountId": "string",
        "active": true,
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "timeZone": "string"
      },
      "body": "string",
      "created": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "id": "string",
      "public": true,
      "renderedBody": {
        "html": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[CommentDTO](#schemacommentdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOCustomerRequestDTO">PagedDTOCustomerRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtocustomerrequestdto"></a>
<a id="schema_PagedDTOCustomerRequestDTO"></a>
<a id="tocSpageddtocustomerrequestdto"></a>
<a id="tocspageddtocustomerrequestdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_expands": [
        "string"
      ],
      "_links": {
        "agent": "http://example.com",
        "jiraRest": "http://example.com",
        "self": "http://example.com",
        "web": "http://example.com"
      },
      "actions": {
        "addAttachment": {
          "allowed": true
        },
        "addComment": {
          "allowed": true
        },
        "addParticipant": {
          "allowed": true
        },
        "removeParticipant": {
          "allowed": true
        }
      },
      "attachments": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "_links": {
              "content": "http://example.com",
              "jiraRest": "http://example.com",
              "self": "http://example.com",
              "thumbnail": "http://example.com"
            },
            "author": {
              "_links": {
                "avatarUrls": {
                  "property1": "string",
                  "property2": "string"
                },
                "jiraRest": "http://example.com",
                "self": "http://example.com"
              },
              "accountId": "string",
              "active": true,
              "displayName": "string",
              "emailAddress": "string",
              "key": "string",
              "name": "string",
              "timeZone": "string"
            },
            "created": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            },
            "filename": "string",
            "mimeType": "string",
            "size": 0
          }
        ]
      },
      "comments": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "_expands": [
              "string"
            ],
            "_links": {
              "self": "http://example.com"
            },
            "attachments": {
              "_expands": [
                "string"
              ],
              "_links": {
                "base": "http://example.com",
                "context": "string",
                "next": "http://example.com",
                "prev": "http://example.com",
                "self": "http://example.com"
              },
              "isLastPage": true,
              "limit": 0,
              "size": 0,
              "start": 0,
              "values": [
                {
                  "_links": {
                    "content": "http://example.com",
                    "jiraRest": "http://example.com",
                    "self": "http://example.com",
                    "thumbnail": "http://example.com"
                  },
                  "author": {
                    "_links": {
                      "avatarUrls": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "jiraRest": "http://example.com",
                      "self": "http://example.com"
                    },
                    "accountId": "string",
                    "active": true,
                    "displayName": "string",
                    "emailAddress": "string",
                    "key": "string",
                    "name": "string",
                    "timeZone": "string"
                  },
                  "created": {
                    "epochMillis": 0,
                    "friendly": "string",
                    "iso8601": "string",
                    "jira": "string"
                  },
                  "filename": "string",
                  "mimeType": "string",
                  "size": 0
                }
              ]
            },
            "author": {
              "_links": {
                "avatarUrls": {
                  "property1": "string",
                  "property2": "string"
                },
                "jiraRest": "http://example.com",
                "self": "http://example.com"
              },
              "accountId": "string",
              "active": true,
              "displayName": "string",
              "emailAddress": "string",
              "key": "string",
              "name": "string",
              "timeZone": "string"
            },
            "body": "string",
            "created": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            },
            "id": "string",
            "public": true,
            "renderedBody": {
              "html": "string"
            }
          }
        ]
      },
      "createdDate": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "currentStatus": {
        "status": "string",
        "statusCategory": "UNDEFINED",
        "statusDate": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        }
      },
      "issueId": "string",
      "issueKey": "string",
      "participants": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "_links": {
              "avatarUrls": {
                "property1": "string",
                "property2": "string"
              },
              "jiraRest": "http://example.com",
              "self": "http://example.com"
            },
            "accountId": "string",
            "active": true,
            "displayName": "string",
            "emailAddress": "string",
            "key": "string",
            "name": "string",
            "timeZone": "string"
          }
        ]
      },
      "reporter": {
        "_links": {
          "avatarUrls": {
            "property1": "string",
            "property2": "string"
          },
          "jiraRest": "http://example.com",
          "self": "http://example.com"
        },
        "accountId": "string",
        "active": true,
        "displayName": "string",
        "emailAddress": "string",
        "key": "string",
        "name": "string",
        "timeZone": "string"
      },
      "requestFieldValues": [
        {
          "fieldId": "string",
          "label": "string",
          "renderedValue": {},
          "value": null
        }
      ],
      "requestType": {
        "_expands": [
          "string"
        ],
        "_links": {
          "self": "http://example.com"
        },
        "canCreateRequest": true,
        "description": "string",
        "fields": {
          "canAddRequestParticipants": true,
          "canRaiseOnBehalfOf": true,
          "requestTypeFields": [
            {
              "defaultValues": [
                {
                  "children": [
                    {}
                  ],
                  "label": "string",
                  "value": "string"
                }
              ],
              "description": "string",
              "fieldId": "string",
              "jiraSchema": {
                "configuration": {
                  "property1": null,
                  "property2": null
                },
                "custom": "string",
                "customId": 0,
                "items": "string",
                "system": "string",
                "type": "string"
              },
              "name": "string",
              "presetValues": [
                "string"
              ],
              "required": true,
              "validValues": [
                {
                  "children": [
                    {}
                  ],
                  "label": "string",
                  "value": "string"
                }
              ],
              "visible": true
            }
          ]
        },
        "groupIds": [
          "string"
        ],
        "helpText": "string",
        "icon": {
          "_links": {
            "iconUrls": {
              "property1": "http://example.com",
              "property2": "http://example.com"
            }
          },
          "id": "string"
        },
        "id": "string",
        "issueTypeId": "string",
        "name": "string",
        "portalId": "string",
        "practice": "string",
        "restrictionStatus": "OPEN",
        "serviceDeskId": "string"
      },
      "requestTypeId": "string",
      "serviceDesk": {
        "_links": {
          "self": "http://example.com"
        },
        "id": "string",
        "projectId": "string",
        "projectKey": "string",
        "projectName": "string",
        "projectTypeKey": "string"
      },
      "serviceDeskId": "string",
      "sla": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "_links": {
              "self": "http://example.com"
            },
            "completedCycles": [
              {
                "breachTime": {
                  "epochMillis": 0,
                  "friendly": "string",
                  "iso8601": "string",
                  "jira": "string"
                },
                "breached": true,
                "elapsedTime": {
                  "friendly": "string",
                  "millis": 0
                },
                "goalDuration": {
                  "friendly": "string",
                  "millis": 0
                },
                "remainingTime": {
                  "friendly": "string",
                  "millis": 0
                },
                "startTime": {
                  "epochMillis": 0,
                  "friendly": "string",
                  "iso8601": "string",
                  "jira": "string"
                },
                "stopTime": {
                  "epochMillis": 0,
                  "friendly": "string",
                  "iso8601": "string",
                  "jira": "string"
                }
              }
            ],
            "id": "string",
            "name": "string",
            "ongoingCycle": {
              "breachTime": {
                "epochMillis": 0,
                "friendly": "string",
                "iso8601": "string",
                "jira": "string"
              },
              "breached": true,
              "elapsedTime": {
                "friendly": "string",
                "millis": 0
              },
              "goalDuration": {
                "friendly": "string",
                "millis": 0
              },
              "paused": true,
              "remainingTime": {
                "friendly": "string",
                "millis": 0
              },
              "startTime": {
                "epochMillis": 0,
                "friendly": "string",
                "iso8601": "string",
                "jira": "string"
              },
              "withinCalendarHours": true
            },
            "slaDisplayFormat": "string"
          }
        ]
      },
      "status": {
        "_expands": [
          "string"
        ],
        "_links": {
          "base": "http://example.com",
          "context": "string",
          "next": "http://example.com",
          "prev": "http://example.com",
          "self": "http://example.com"
        },
        "isLastPage": true,
        "limit": 0,
        "size": 0,
        "start": 0,
        "values": [
          {
            "status": "string",
            "statusCategory": "UNDEFINED",
            "statusDate": {
              "epochMillis": 0,
              "friendly": "string",
              "iso8601": "string",
              "jira": "string"
            }
          }
        ]
      },
      "summary": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[CustomerRequestDTO](#schemacustomerrequestdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOCustomerRequestStatusDTO">PagedDTOCustomerRequestStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtocustomerrequeststatusdto"></a>
<a id="schema_PagedDTOCustomerRequestStatusDTO"></a>
<a id="tocSpageddtocustomerrequeststatusdto"></a>
<a id="tocspageddtocustomerrequeststatusdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "status": "string",
      "statusCategory": "UNDEFINED",
      "statusDate": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[CustomerRequestStatusDTO](#schemacustomerrequeststatusdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOCustomerTransitionDTO">PagedDTOCustomerTransitionDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtocustomertransitiondto"></a>
<a id="schema_PagedDTOCustomerTransitionDTO"></a>
<a id="tocSpageddtocustomertransitiondto"></a>
<a id="tocspageddtocustomertransitiondto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[CustomerTransitionDTO](#schemacustomertransitiondto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOInsightWorkspaceDTO">PagedDTOInsightWorkspaceDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoinsightworkspacedto"></a>
<a id="schema_PagedDTOInsightWorkspaceDTO"></a>
<a id="tocSpageddtoinsightworkspacedto"></a>
<a id="tocspageddtoinsightworkspacedto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "workspaceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[InsightWorkspaceDTO](#schemainsightworkspacedto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOIssueBean">PagedDTOIssueBean</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoissuebean"></a>
<a id="schema_PagedDTOIssueBean"></a>
<a id="tocSpageddtoissuebean"></a>
<a id="tocspageddtoissuebean"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "changelog": {
        "histories": [
          {
            "author": {
              "accountId": "string",
              "accountType": "string",
              "active": true,
              "avatarUrls": {
                "16x16": "http://example.com",
                "24x24": "http://example.com",
                "32x32": "http://example.com",
                "48x48": "http://example.com"
              },
              "displayName": "string",
              "emailAddress": "string",
              "key": "string",
              "name": "string",
              "self": "string",
              "timeZone": "string"
            },
            "created": "1970-01-01T00:00:00Z",
            "historyMetadata": {
              "activityDescription": "string",
              "activityDescriptionKey": "string",
              "actor": {
                "avatarUrl": "string",
                "displayName": "string",
                "displayNameKey": "string",
                "id": "string",
                "type": "string",
                "url": "string"
              },
              "cause": {
                "avatarUrl": "string",
                "displayName": "string",
                "displayNameKey": "string",
                "id": "string",
                "type": "string",
                "url": "string"
              },
              "description": "string",
              "descriptionKey": "string",
              "emailDescription": "string",
              "emailDescriptionKey": "string",
              "extraData": {
                "property1": "string",
                "property2": "string"
              },
              "generator": {
                "avatarUrl": "string",
                "displayName": "string",
                "displayNameKey": "string",
                "id": "string",
                "type": "string",
                "url": "string"
              },
              "type": "string"
            },
            "id": "string",
            "items": [
              {
                "field": "string",
                "fieldId": "string",
                "fieldtype": "string",
                "from": "string",
                "fromString": "string",
                "to": "string",
                "toString": "string"
              }
            ]
          }
        ],
        "maxResults": 0,
        "startAt": 0,
        "total": 0
      },
      "editmeta": {
        "fields": {
          "property1": {
            "allowedValues": [
              null
            ],
            "autoCompleteUrl": "string",
            "configuration": {
              "property1": null,
              "property2": null
            },
            "defaultValue": null,
            "hasDefaultValue": true,
            "key": "string",
            "name": "string",
            "operations": [
              "string"
            ],
            "required": true,
            "schema": {
              "configuration": {
                "property1": null,
                "property2": null
              },
              "custom": "string",
              "customId": 0,
              "items": "string",
              "system": "string",
              "type": "string"
            }
          },
          "property2": {
            "allowedValues": [
              null
            ],
            "autoCompleteUrl": "string",
            "configuration": {
              "property1": null,
              "property2": null
            },
            "defaultValue": null,
            "hasDefaultValue": true,
            "key": "string",
            "name": "string",
            "operations": [
              "string"
            ],
            "required": true,
            "schema": {
              "configuration": {
                "property1": null,
                "property2": null
              },
              "custom": "string",
              "customId": 0,
              "items": "string",
              "system": "string",
              "type": "string"
            }
          }
        }
      },
      "expand": "string",
      "fields": {
        "property1": null,
        "property2": null
      },
      "fieldsToInclude": {
        "actuallyIncluded": [
          "string"
        ],
        "excluded": [
          "string"
        ],
        "included": [
          "string"
        ]
      },
      "id": "string",
      "key": "string",
      "names": {
        "property1": "string",
        "property2": "string"
      },
      "operations": {
        "linkGroups": [
          {
            "groups": [
              {}
            ],
            "header": {
              "href": "string",
              "iconClass": "string",
              "id": "string",
              "label": "string",
              "styleClass": "string",
              "title": "string",
              "weight": 0
            },
            "id": "string",
            "links": [
              {
                "href": "string",
                "iconClass": "string",
                "id": "string",
                "label": "string",
                "styleClass": "string",
                "title": "string",
                "weight": 0
              }
            ],
            "styleClass": "string",
            "weight": 0
          }
        ]
      },
      "properties": {
        "property1": null,
        "property2": null
      },
      "renderedFields": {
        "property1": null,
        "property2": null
      },
      "schema": {
        "property1": {
          "configuration": {
            "property1": null,
            "property2": null
          },
          "custom": "string",
          "customId": 0,
          "items": "string",
          "system": "string",
          "type": "string"
        },
        "property2": {
          "configuration": {
            "property1": null,
            "property2": null
          },
          "custom": "string",
          "customId": 0,
          "items": "string",
          "system": "string",
          "type": "string"
        }
      },
      "self": "http://example.com",
      "transitions": [
        {
          "expand": "string",
          "fields": {
            "property1": {
              "allowedValues": [
                null
              ],
              "autoCompleteUrl": "string",
              "configuration": {
                "property1": null,
                "property2": null
              },
              "defaultValue": null,
              "hasDefaultValue": true,
              "key": "string",
              "name": "string",
              "operations": [
                "string"
              ],
              "required": true,
              "schema": {
                "configuration": {
                  "property1": null,
                  "property2": null
                },
                "custom": "string",
                "customId": 0,
                "items": "string",
                "system": "string",
                "type": "string"
              }
            },
            "property2": {
              "allowedValues": [
                null
              ],
              "autoCompleteUrl": "string",
              "configuration": {
                "property1": null,
                "property2": null
              },
              "defaultValue": null,
              "hasDefaultValue": true,
              "key": "string",
              "name": "string",
              "operations": [
                "string"
              ],
              "required": true,
              "schema": {
                "configuration": {
                  "property1": null,
                  "property2": null
                },
                "custom": "string",
                "customId": 0,
                "items": "string",
                "system": "string",
                "type": "string"
              }
            }
          },
          "hasScreen": true,
          "id": "string",
          "isAvailable": true,
          "isConditional": true,
          "isGlobal": true,
          "isInitial": true,
          "looped": true,
          "name": "string",
          "to": {
            "description": "string",
            "iconUrl": "string",
            "id": "string",
            "name": "string",
            "scope": {
              "project": {
                "avatarUrls": {
                  "16x16": "http://example.com",
                  "24x24": "http://example.com",
                  "32x32": "http://example.com",
                  "48x48": "http://example.com"
                },
                "id": "string",
                "key": "string",
                "name": "string",
                "projectCategory": {
                  "description": "string",
                  "id": "string",
                  "name": "string",
                  "self": "string"
                },
                "projectTypeKey": "software",
                "self": "string",
                "simplified": true
              },
              "type": "PROJECT"
            },
            "self": "string",
            "statusCategory": {
              "colorName": "string",
              "id": 0,
              "key": "string",
              "name": "string",
              "self": "string"
            }
          }
        }
      ],
      "versionedRepresentations": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[IssueBean](#schemaissuebean)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOOrganizationDTO">PagedDTOOrganizationDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoorganizationdto"></a>
<a id="schema_PagedDTOOrganizationDTO"></a>
<a id="tocSpageddtoorganizationdto"></a>
<a id="tocspageddtoorganizationdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "self": "http://example.com"
      },
      "created": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "id": "string",
      "name": "string",
      "scimManaged": true,
      "uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[OrganizationDTO](#schemaorganizationdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOQueueDTO">PagedDTOQueueDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoqueuedto"></a>
<a id="schema_PagedDTOQueueDTO"></a>
<a id="tocSpageddtoqueuedto"></a>
<a id="tocspageddtoqueuedto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "self": "http://example.com"
      },
      "fields": [
        "string"
      ],
      "id": "string",
      "issueCount": 0,
      "jql": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[QueueDTO](#schemaqueuedto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTORequestTypeDTO">PagedDTORequestTypeDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtorequesttypedto"></a>
<a id="schema_PagedDTORequestTypeDTO"></a>
<a id="tocSpageddtorequesttypedto"></a>
<a id="tocspageddtorequesttypedto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_expands": [
        "string"
      ],
      "_links": {
        "self": "http://example.com"
      },
      "canCreateRequest": true,
      "description": "string",
      "fields": {
        "canAddRequestParticipants": true,
        "canRaiseOnBehalfOf": true,
        "requestTypeFields": [
          {
            "defaultValues": [
              {
                "children": [
                  {}
                ],
                "label": "string",
                "value": "string"
              }
            ],
            "description": "string",
            "fieldId": "string",
            "jiraSchema": {
              "configuration": {
                "property1": null,
                "property2": null
              },
              "custom": "string",
              "customId": 0,
              "items": "string",
              "system": "string",
              "type": "string"
            },
            "name": "string",
            "presetValues": [
              "string"
            ],
            "required": true,
            "validValues": [
              {
                "children": [
                  {}
                ],
                "label": "string",
                "value": "string"
              }
            ],
            "visible": true
          }
        ]
      },
      "groupIds": [
        "string"
      ],
      "helpText": "string",
      "icon": {
        "_links": {
          "iconUrls": {
            "property1": "http://example.com",
            "property2": "http://example.com"
          }
        },
        "id": "string"
      },
      "id": "string",
      "issueTypeId": "string",
      "name": "string",
      "portalId": "string",
      "practice": "string",
      "restrictionStatus": "OPEN",
      "serviceDeskId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[RequestTypeDTO](#schemarequesttypedto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTORequestTypeGroupDTO">PagedDTORequestTypeGroupDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtorequesttypegroupdto"></a>
<a id="schema_PagedDTORequestTypeGroupDTO"></a>
<a id="tocSpageddtorequesttypegroupdto"></a>
<a id="tocspageddtorequesttypegroupdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[RequestTypeGroupDTO](#schemarequesttypegroupdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOServiceDeskDTO">PagedDTOServiceDeskDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoservicedeskdto"></a>
<a id="schema_PagedDTOServiceDeskDTO"></a>
<a id="tocSpageddtoservicedeskdto"></a>
<a id="tocspageddtoservicedeskdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "self": "http://example.com"
      },
      "id": "string",
      "projectId": "string",
      "projectKey": "string",
      "projectName": "string",
      "projectTypeKey": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[ServiceDeskDTO](#schemaservicedeskdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOSlaInformationDTO">PagedDTOSlaInformationDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtoslainformationdto"></a>
<a id="schema_PagedDTOSlaInformationDTO"></a>
<a id="tocSpageddtoslainformationdto"></a>
<a id="tocspageddtoslainformationdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "self": "http://example.com"
      },
      "completedCycles": [
        {
          "breachTime": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          },
          "breached": true,
          "elapsedTime": {
            "friendly": "string",
            "millis": 0
          },
          "goalDuration": {
            "friendly": "string",
            "millis": 0
          },
          "remainingTime": {
            "friendly": "string",
            "millis": 0
          },
          "startTime": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          },
          "stopTime": {
            "epochMillis": 0,
            "friendly": "string",
            "iso8601": "string",
            "jira": "string"
          }
        }
      ],
      "id": "string",
      "name": "string",
      "ongoingCycle": {
        "breachTime": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "breached": true,
        "elapsedTime": {
          "friendly": "string",
          "millis": 0
        },
        "goalDuration": {
          "friendly": "string",
          "millis": 0
        },
        "paused": true,
        "remainingTime": {
          "friendly": "string",
          "millis": 0
        },
        "startTime": {
          "epochMillis": 0,
          "friendly": "string",
          "iso8601": "string",
          "jira": "string"
        },
        "withinCalendarHours": true
      },
      "slaDisplayFormat": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[SlaInformationDTO](#schemaslainformationdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedDTOUserDTO">PagedDTOUserDTO</h2>
<!-- backwards compatibility -->
<a id="schemapageddtouserdto"></a>
<a id="schema_PagedDTOUserDTO"></a>
<a id="tocSpageddtouserdto"></a>
<a id="tocspageddtouserdto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "base": "http://example.com",
    "context": "string",
    "next": "http://example.com",
    "prev": "http://example.com",
    "self": "http://example.com"
  },
  "isLastPage": true,
  "limit": 0,
  "size": 0,
  "start": 0,
  "values": [
    {
      "_links": {
        "avatarUrls": {
          "property1": "string",
          "property2": "string"
        },
        "jiraRest": "http://example.com",
        "self": "http://example.com"
      },
      "accountId": "string",
      "active": true,
      "displayName": "string",
      "emailAddress": "string",
      "key": "string",
      "name": "string",
      "timeZone": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|none|
|_links|object|false|none|List of the links relating to the page.|
|isLastPage|boolean|false|none|Indicates if this is the last page of records (true) or not (false).|
|limit|integer(int32)|false|none|Number of items to be returned per page, up to the maximum set for these objects in the current implementation.|
|size|integer(int32)|false|none|Number of items returned in the page.|
|start|integer(int32)|false|none|Index of the first item returned in the page.|
|values|[[UserDTO](#schemauserdto)]|false|none|Details of the items included in the page.|

<h2 id="tocS_PagedLinkDTO">PagedLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemapagedlinkdto"></a>
<a id="schema_PagedLinkDTO"></a>
<a id="tocSpagedlinkdto"></a>
<a id="tocspagedlinkdto"></a>

```json
{
  "base": "http://example.com",
  "context": "string",
  "next": "http://example.com",
  "prev": "http://example.com",
  "self": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|string(uri)|false|none|Base URL for the REST API calls.|
|context|string|false|none|none|
|next|string(uri)|false|none|REST API URL for the next page, if there is one.|
|prev|string(uri)|false|none|REST API URL for the previous page, if there is one.|
|self|string(uri)|false|none|REST API URL for the current page.|

<h2 id="tocS_ProjectDetails">ProjectDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdetails"></a>
<a id="schema_ProjectDetails"></a>
<a id="tocSprojectdetails"></a>
<a id="tocsprojectdetails"></a>

```json
{
  "avatarUrls": {
    "16x16": "http://example.com",
    "24x24": "http://example.com",
    "32x32": "http://example.com",
    "48x48": "http://example.com"
  },
  "id": "string",
  "key": "string",
  "name": "string",
  "projectCategory": {
    "description": "string",
    "id": "string",
    "name": "string",
    "self": "string"
  },
  "projectTypeKey": "software",
  "self": "string",
  "simplified": true
}
```

Details about a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrls|object|false|read-only|The URLs of the project's avatars.|
|id|string|false|none|The ID of the project.|
|key|string|false|read-only|The key of the project.|
|name|string|false|read-only|The name of the project.|
|projectCategory|object|false|read-only|The category the project belongs to.|
|projectTypeKey|string|false|read-only|The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.|
|self|string|false|read-only|The URL of the project details.|
|simplified|boolean|false|read-only|Whether or not the project is simplified.|

#### Enumerated Values

|Property|Value|
|---|---|
|projectTypeKey|software|
|projectTypeKey|service_desk|
|projectTypeKey|business|
|projectTypeKey|product_discovery|

<h2 id="tocS_PropertyKey">PropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemapropertykey"></a>
<a id="schema_PropertyKey"></a>
<a id="tocSpropertykey"></a>
<a id="tocspropertykey"></a>

```json
{
  "key": "string",
  "self": "string"
}
```

Property key details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|read-only|The key of the property.|
|self|string|false|read-only|The URL of the property.|

<h2 id="tocS_PropertyKeys">PropertyKeys</h2>
<!-- backwards compatibility -->
<a id="schemapropertykeys"></a>
<a id="schema_PropertyKeys"></a>
<a id="tocSpropertykeys"></a>
<a id="tocspropertykeys"></a>

```json
{
  "keys": [
    {
      "key": "string",
      "self": "string"
    }
  ]
}
```

List of property keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[PropertyKey](#schemapropertykey)]|false|read-only|Property key details.|

<h2 id="tocS_QueueDTO">QueueDTO</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedto"></a>
<a id="schema_QueueDTO"></a>
<a id="tocSqueuedto"></a>
<a id="tocsqueuedto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "fields": [
    "string"
  ],
  "id": "string",
  "issueCount": 0,
  "jql": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|REST API URL to the queue.|
|fields|[string]|false|none|Fields returned for each request in the queue.|
|id|string|false|none|ID for the queue.|
|issueCount|integer(int64)|false|none|The count of customer requests in the queue.|
|jql|string|false|none|JQL query that filters reqeusts for the queue.|
|name|string|false|none|Short name for the queue.|

<h2 id="tocS_RenderedValueDTO">RenderedValueDTO</h2>
<!-- backwards compatibility -->
<a id="schemarenderedvaluedto"></a>
<a id="schema_RenderedValueDTO"></a>
<a id="tocSrenderedvaluedto"></a>
<a id="tocsrenderedvaluedto"></a>

```json
{
  "html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string|false|none|none|

<h2 id="tocS_RequestCreateDTO">RequestCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequestcreatedto"></a>
<a id="schema_RequestCreateDTO"></a>
<a id="tocSrequestcreatedto"></a>
<a id="tocsrequestcreatedto"></a>

```json
{
  "channel": "string",
  "form": {
    "answers": {
      "property1": {
        "adf": {
          "array": true,
          "bigDecimal": true,
          "bigInteger": true,
          "bigIntegerValue": 0,
          "binary": true,
          "binaryValue": [
            "string"
          ],
          "boolean": true,
          "booleanValue": true,
          "containerNode": true,
          "decimalValue": 0,
          "double": true,
          "doubleValue": 0,
          "elements": {},
          "fieldNames": {},
          "fields": {},
          "floatingPointNumber": true,
          "int": true,
          "intValue": 0,
          "integralNumber": true,
          "long": true,
          "longValue": 0,
          "missingNode": true,
          "null": true,
          "number": true,
          "numberType": "INT",
          "numberValue": 0,
          "object": true,
          "pojo": true,
          "textValue": "string",
          "textual": true,
          "valueAsBoolean": true,
          "valueAsDouble": 0,
          "valueAsInt": 0,
          "valueAsLong": 0,
          "valueAsText": "string",
          "valueNode": true
        },
        "choices": [
          "string"
        ],
        "date": "string",
        "files": [
          "string"
        ],
        "text": "string",
        "time": "string",
        "users": [
          "string"
        ]
      },
      "property2": {
        "adf": {
          "array": true,
          "bigDecimal": true,
          "bigInteger": true,
          "bigIntegerValue": 0,
          "binary": true,
          "binaryValue": [
            "string"
          ],
          "boolean": true,
          "booleanValue": true,
          "containerNode": true,
          "decimalValue": 0,
          "double": true,
          "doubleValue": 0,
          "elements": {},
          "fieldNames": {},
          "fields": {},
          "floatingPointNumber": true,
          "int": true,
          "intValue": 0,
          "integralNumber": true,
          "long": true,
          "longValue": 0,
          "missingNode": true,
          "null": true,
          "number": true,
          "numberType": "INT",
          "numberValue": 0,
          "object": true,
          "pojo": true,
          "textValue": "string",
          "textual": true,
          "valueAsBoolean": true,
          "valueAsDouble": 0,
          "valueAsInt": 0,
          "valueAsLong": 0,
          "valueAsText": "string",
          "valueNode": true
        },
        "choices": [
          "string"
        ],
        "date": "string",
        "files": [
          "string"
        ],
        "text": "string",
        "time": "string",
        "users": [
          "string"
        ]
      }
    }
  },
  "isAdfRequest": true,
  "raiseOnBehalfOf": "string",
  "requestFieldValues": {
    "property1": null,
    "property2": null
  },
  "requestParticipants": [
    "string"
  ],
  "requestTypeId": "string",
  "serviceDeskId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|(Experimental) Shows extra information for the request channel.|
|form|object|false|none|Provides answers to the form associated with a request type. Omit Jira fields from `requestFieldValues` if they're linked to form answers. For form answers in ADF format, set `isAdfRequest` to true.|
|isAdfRequest|boolean|false|none|(Experimental) Whether to accept rich text fields in Atlassian Document Format (ADF).|
|raiseOnBehalfOf|string|false|none|The `accountId` of the customer that the request is being raised on behalf of.|
|requestFieldValues|object|false|none|JSON map of Jira field IDs and their values representing the content of the request.|
|requestParticipants|[string]|false|none|List of customers to participate in the request, as a list of `accountId` values.|
|requestTypeId|string|false|none|ID of the request type for the request.|
|serviceDeskId|string|false|none|ID of the service desk in which to create the request.|

<h2 id="tocS_RequestFieldValidationErrorDTO">RequestFieldValidationErrorDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequestfieldvalidationerrordto"></a>
<a id="schema_RequestFieldValidationErrorDTO"></a>
<a id="tocSrequestfieldvalidationerrordto"></a>
<a id="tocsrequestfieldvalidationerrordto"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The id of the request field that failed validation (matches a key in 'requestFieldValues').|
|message|string|false|none|A human-readable explanation of why this field failed validation.|

<h2 id="tocS_RequestNotificationSubscriptionDTO">RequestNotificationSubscriptionDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequestnotificationsubscriptiondto"></a>
<a id="schema_RequestNotificationSubscriptionDTO"></a>
<a id="tocSrequestnotificationsubscriptiondto"></a>
<a id="tocsrequestnotificationsubscriptiondto"></a>

```json
{
  "subscribed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscribed|boolean|false|none|Indicates whether the user is subscribed (true) or not (false) to the request's notifications.|

<h2 id="tocS_RequestParticipantUpdateDTO">RequestParticipantUpdateDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequestparticipantupdatedto"></a>
<a id="schema_RequestParticipantUpdateDTO"></a>
<a id="tocSrequestparticipantupdatedto"></a>
<a id="tocsrequestparticipantupdatedto"></a>

```json
{
  "accountIds": [
    "string"
  ],
  "usernames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[string]|false|none|List of users, specified by account IDs, to add to or remove as participants in the request.|
|usernames|[string]|false|none|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

<h2 id="tocS_RequestTypeCreateDTO">RequestTypeCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypecreatedto"></a>
<a id="schema_RequestTypeCreateDTO"></a>
<a id="tocSrequesttypecreatedto"></a>
<a id="tocsrequesttypecreatedto"></a>

```json
{
  "description": "string",
  "helpText": "string",
  "issueTypeId": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the request type on the service desk.|
|helpText|string|false|none|Help text for the request type on the service desk.|
|issueTypeId|string|false|none|ID of the request type to add to the service desk.|
|name|string|false|none|Name of the request type on the service desk.|

<h2 id="tocS_RequestTypeDTO">RequestTypeDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypedto"></a>
<a id="schema_RequestTypeDTO"></a>
<a id="tocSrequesttypedto"></a>
<a id="tocsrequesttypedto"></a>

```json
{
  "_expands": [
    "string"
  ],
  "_links": {
    "self": "http://example.com"
  },
  "canCreateRequest": true,
  "description": "string",
  "fields": {
    "canAddRequestParticipants": true,
    "canRaiseOnBehalfOf": true,
    "requestTypeFields": [
      {
        "defaultValues": [
          {
            "children": [
              {}
            ],
            "label": "string",
            "value": "string"
          }
        ],
        "description": "string",
        "fieldId": "string",
        "jiraSchema": {
          "configuration": {
            "property1": null,
            "property2": null
          },
          "custom": "string",
          "customId": 0,
          "items": "string",
          "system": "string",
          "type": "string"
        },
        "name": "string",
        "presetValues": [
          "string"
        ],
        "required": true,
        "validValues": [
          {
            "children": [
              {}
            ],
            "label": "string",
            "value": "string"
          }
        ],
        "visible": true
      }
    ]
  },
  "groupIds": [
    "string"
  ],
  "helpText": "string",
  "icon": {
    "_links": {
      "iconUrls": {
        "property1": "http://example.com",
        "property2": "http://example.com"
      }
    },
    "id": "string"
  },
  "id": "string",
  "issueTypeId": "string",
  "name": "string",
  "portalId": "string",
  "practice": "string",
  "restrictionStatus": "OPEN",
  "serviceDeskId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_expands|[string]|false|none|List of items that can be expanded in the response by specifying the expand query parameter.|
|_links|object|false|none|REST API URL for the request type.|
|canCreateRequest|boolean|false|none|Whether the user has permission to create a request with this request type.|
|description|string|false|none|Description of the request type.|
|fields|object|false|none|Fields and additional metadata for creating a request that uses the request type|
|groupIds|[string]|false|none|List of the request type groups the request type belongs to.|
|helpText|string|false|none|Help text for the request type.|
|icon|object|false|none|Links to the request type's icons.|
|id|string|false|none|ID for the request type.|
|issueTypeId|string|false|none|ID of the issue type the request type is based upon.|
|name|string|false|none|Short name for the request type.|
|portalId|string|false|none|ID of the customer portal associated with the service desk project.|
|practice|string|false|none|The request type's practice|
|restrictionStatus|string|false|none|Whether request type is restricted or not.|
|serviceDeskId|string|false|none|ID of the service desk the request type belongs to.|

#### Enumerated Values

|Property|Value|
|---|---|
|restrictionStatus|OPEN|
|restrictionStatus|RESTRICTED|

<h2 id="tocS_RequestTypeFieldDTO">RequestTypeFieldDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypefielddto"></a>
<a id="schema_RequestTypeFieldDTO"></a>
<a id="tocSrequesttypefielddto"></a>
<a id="tocsrequesttypefielddto"></a>

```json
{
  "defaultValues": [
    {
      "children": [
        {}
      ],
      "label": "string",
      "value": "string"
    }
  ],
  "description": "string",
  "fieldId": "string",
  "jiraSchema": {
    "configuration": {
      "property1": null,
      "property2": null
    },
    "custom": "string",
    "customId": 0,
    "items": "string",
    "system": "string",
    "type": "string"
  },
  "name": "string",
  "presetValues": [
    "string"
  ],
  "required": true,
  "validValues": [
    {
      "children": [
        {}
      ],
      "label": "string",
      "value": "string"
    }
  ],
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValues|[[RequestTypeFieldValueDTO](#schemarequesttypefieldvaluedto)]|false|none|List of default values for the field.|
|description|string|false|none|Description of the field.|
|fieldId|string|false|none|ID of the field.|
|jiraSchema|object|false|none|Jira specific implementation details for the field in the UI.|
|name|string|false|none|Name of the field.|
|presetValues|[string]|false|none|List of preset values for the field.|
|required|boolean|false|none|Indicates if the field is required (true) or not (false).|
|validValues|[[RequestTypeFieldValueDTO](#schemarequesttypefieldvaluedto)]|false|none|List of valid values for the field.|
|visible|boolean|false|none|none|

<h2 id="tocS_RequestTypeFieldValueDTO">RequestTypeFieldValueDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypefieldvaluedto"></a>
<a id="schema_RequestTypeFieldValueDTO"></a>
<a id="tocSrequesttypefieldvaluedto"></a>
<a id="tocsrequesttypefieldvaluedto"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "label": "string",
      "value": "string"
    }
  ],
  "label": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[RequestTypeFieldValueDTO](#schemarequesttypefieldvaluedto)]|false|none|List of child fields.|
|label|string|false|none|Label for the field.|
|value|string|false|none|Value of the field.|

<h2 id="tocS_RequestTypeGroupDTO">RequestTypeGroupDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypegroupdto"></a>
<a id="schema_RequestTypeGroupDTO"></a>
<a id="tocSrequesttypegroupdto"></a>
<a id="tocsrequesttypegroupdto"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the request type group|
|name|string|false|none|Name of the request type group.|

<h2 id="tocS_RequestTypeIconDTO">RequestTypeIconDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypeicondto"></a>
<a id="schema_RequestTypeIconDTO"></a>
<a id="tocSrequesttypeicondto"></a>
<a id="tocsrequesttypeicondto"></a>

```json
{
  "_links": {
    "iconUrls": {
      "property1": "http://example.com",
      "property2": "http://example.com"
    }
  },
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|Map of the URLs for the request type icons.|
|id|string|false|none|ID of the request type icon.|

<h2 id="tocS_RequestTypeIconLinkDTO">RequestTypeIconLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypeiconlinkdto"></a>
<a id="schema_RequestTypeIconLinkDTO"></a>
<a id="tocSrequesttypeiconlinkdto"></a>
<a id="tocsrequesttypeiconlinkdto"></a>

```json
{
  "iconUrls": {
    "property1": "http://example.com",
    "property2": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconUrls|object|false|none|URLs for the request type icons.|

<h2 id="tocS_RequestTypePermissionCheckRequestDTO">RequestTypePermissionCheckRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypepermissioncheckrequestdto"></a>
<a id="schema_RequestTypePermissionCheckRequestDTO"></a>
<a id="tocSrequesttypepermissioncheckrequestdto"></a>
<a id="tocsrequesttypepermissioncheckrequestdto"></a>

```json
{
  "accountId": "string",
  "permissions": [
    "canCreateRequest"
  ],
  "requestTypeIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account ID of a user.|
|permissions|[string]|false|none|List of requested permissions.|
|requestTypeIds|[integer(int32)]|false|none|List of request type IDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|canCreateRequest|
|permissions|canAdminister|

<h2 id="tocS_RequestTypePermissionCheckResponse">RequestTypePermissionCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequesttypepermissioncheckresponse"></a>
<a id="schema_RequestTypePermissionCheckResponse"></a>
<a id="tocSrequesttypepermissioncheckresponse"></a>
<a id="tocsrequesttypepermissioncheckresponse"></a>

```json
{
  "canAdminister": [
    0
  ],
  "canCreateRequest": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canAdminister|[integer(int32)]|false|none|List of request type IDs for which the user has permission to administer.|
|canCreateRequest|[integer(int32)]|false|none|List of request type IDs for which the user can create requests.|

<h2 id="tocS_RequestValidationResultDTO">RequestValidationResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemarequestvalidationresultdto"></a>
<a id="schema_RequestValidationResultDTO"></a>
<a id="tocSrequestvalidationresultdto"></a>
<a id="tocsrequestvalidationresultdto"></a>

```json
{
  "errorMessage": "string",
  "errorMessages": [
    "string"
  ],
  "fieldErrors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "formErrors": [
    {
      "code": "string",
      "context": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "detail": "string",
      "status": 0,
      "title": "string"
    }
  ],
  "reasonKey": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|A single, human-readable summary describing why validation failed. Null when valid.|
|errorMessages|[string]|false|none|General validation errors that are not attributable to a single field. Empty when valid.|
|fieldErrors|[[RequestFieldValidationErrorDTO](#schemarequestfieldvalidationerrordto)]|false|none|Field-level validation errors, keyed by the failing request field id. Empty when valid.|
|formErrors|[[FormValidationErrorDTO](#schemaformvalidationerrordto)]|false|none|ProForma form validation errors, if a form was supplied. Empty when valid or no form was present.|
|reasonKey|string|false|none|A machine-readable reason key categorising the overall failure. Null when valid.|
|valid|boolean|false|none|True when the payload is both structurally and semantically valid and safe to create.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "contentAsByteArray": [
    "string"
  ],
  "description": "string",
  "file": "string",
  "filename": "string",
  "inputStream": {},
  "open": true,
  "readable": true,
  "uri": "http://example.com",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentAsByteArray|[string(byte)]|false|none|none|
|description|string|false|none|none|
|file|string(binary)|false|none|none|
|filename|string|false|none|none|
|inputStream|object|false|none|none|
|open|boolean|false|none|none|
|readable|boolean|false|none|none|
|uri|string(uri)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
{
  "project": {
    "avatarUrls": {
      "16x16": "http://example.com",
      "24x24": "http://example.com",
      "32x32": "http://example.com",
      "48x48": "http://example.com"
    },
    "id": "string",
    "key": "string",
    "name": "string",
    "projectCategory": {
      "description": "string",
      "id": "string",
      "name": "string",
      "self": "string"
    },
    "projectTypeKey": "software",
    "self": "string",
    "simplified": true
  },
  "type": "PROJECT"
}
```

The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|false|read-only|The project the item has scope in.|
|type|string|false|read-only|The type of scope.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PROJECT|
|type|TEMPLATE|

<h2 id="tocS_SelfLinkDTO">SelfLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemaselflinkdto"></a>
<a id="schema_SelfLinkDTO"></a>
<a id="tocSselflinkdto"></a>
<a id="tocsselflinkdto"></a>

```json
{
  "self": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string(uri)|false|none|none|

<h2 id="tocS_ServiceDeskCustomerDTO">ServiceDeskCustomerDTO</h2>
<!-- backwards compatibility -->
<a id="schemaservicedeskcustomerdto"></a>
<a id="schema_ServiceDeskCustomerDTO"></a>
<a id="tocSservicedeskcustomerdto"></a>
<a id="tocsservicedeskcustomerdto"></a>

```json
{
  "accountIds": [
    "string"
  ],
  "usernames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[string]|false|none|List of users, specified by account IDs, to add to or remove from a service desk.|
|usernames|[string]|false|none|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|

<h2 id="tocS_ServiceDeskCustomerInviteDTO">ServiceDeskCustomerInviteDTO</h2>
<!-- backwards compatibility -->
<a id="schemaservicedeskcustomerinvitedto"></a>
<a id="schema_ServiceDeskCustomerInviteDTO"></a>
<a id="tocSservicedeskcustomerinvitedto"></a>
<a id="tocsservicedeskcustomerinvitedto"></a>

```json
{
  "displayName": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Customer's name for display in the UI.|
|email|string|false|none|Customer's email address.|

<h2 id="tocS_ServiceDeskDTO">ServiceDeskDTO</h2>
<!-- backwards compatibility -->
<a id="schemaservicedeskdto"></a>
<a id="schema_ServiceDeskDTO"></a>
<a id="tocSservicedeskdto"></a>
<a id="tocsservicedeskdto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "id": "string",
  "projectId": "string",
  "projectKey": "string",
  "projectName": "string",
  "projectTypeKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|REST API URL to the service desk.|
|id|string|false|none|ID of the service desk.|
|projectId|string|false|none|ID of the peer project for the service desk.|
|projectKey|string|false|none|Key of the peer project of the service desk.|
|projectName|string|false|none|Name of the project and service desk.|
|projectTypeKey|string|false|none|Key of the project type.|

<h2 id="tocS_SimpleLink">SimpleLink</h2>
<!-- backwards compatibility -->
<a id="schemasimplelink"></a>
<a id="schema_SimpleLink"></a>
<a id="tocSsimplelink"></a>
<a id="tocssimplelink"></a>

```json
{
  "href": "string",
  "iconClass": "string",
  "id": "string",
  "label": "string",
  "styleClass": "string",
  "title": "string",
  "weight": 0
}
```

Details about the operations available in this version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|iconClass|string|false|none|none|
|id|string|false|none|none|
|label|string|false|none|none|
|styleClass|string|false|none|none|
|title|string|false|none|none|
|weight|integer(int32)|false|none|none|

<h2 id="tocS_SlaInformationCompletedCycleDTO">SlaInformationCompletedCycleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaslainformationcompletedcycledto"></a>
<a id="schema_SlaInformationCompletedCycleDTO"></a>
<a id="tocSslainformationcompletedcycledto"></a>
<a id="tocsslainformationcompletedcycledto"></a>

```json
{
  "breachTime": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "breached": true,
  "elapsedTime": {
    "friendly": "string",
    "millis": 0
  },
  "goalDuration": {
    "friendly": "string",
    "millis": 0
  },
  "remainingTime": {
    "friendly": "string",
    "millis": 0
  },
  "startTime": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "stopTime": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breachTime|object|false|none|Time and date at which the SLA cycle breached in case of completed breached cycle or would have breached in case of non-breached completed cycle.|
|breached|boolean|false|none|Indicates if the SLA (duration) was exceeded (true) or not (false).|
|elapsedTime|object|false|none|Duration in which the service was completed.|
|goalDuration|object|false|none|Duration within which the service should have been completed.|
|remainingTime|object|false|none|Duration remaining after the service was completed.|
|startTime|object|false|none|Time and date at which the SLA cycle started.|
|stopTime|object|false|none|Time and date at which the SLA cycle completed.|

<h2 id="tocS_SlaInformationDTO">SlaInformationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaslainformationdto"></a>
<a id="schema_SlaInformationDTO"></a>
<a id="tocSslainformationdto"></a>
<a id="tocsslainformationdto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "completedCycles": [
    {
      "breachTime": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "breached": true,
      "elapsedTime": {
        "friendly": "string",
        "millis": 0
      },
      "goalDuration": {
        "friendly": "string",
        "millis": 0
      },
      "remainingTime": {
        "friendly": "string",
        "millis": 0
      },
      "startTime": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      },
      "stopTime": {
        "epochMillis": 0,
        "friendly": "string",
        "iso8601": "string",
        "jira": "string"
      }
    }
  ],
  "id": "string",
  "name": "string",
  "ongoingCycle": {
    "breachTime": {
      "epochMillis": 0,
      "friendly": "string",
      "iso8601": "string",
      "jira": "string"
    },
    "breached": true,
    "elapsedTime": {
      "friendly": "string",
      "millis": 0
    },
    "goalDuration": {
      "friendly": "string",
      "millis": 0
    },
    "paused": true,
    "remainingTime": {
      "friendly": "string",
      "millis": 0
    },
    "startTime": {
      "epochMillis": 0,
      "friendly": "string",
      "iso8601": "string",
      "jira": "string"
    },
    "withinCalendarHours": true
  },
  "slaDisplayFormat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|REST API URL for the SLA.|
|completedCycles|[[SlaInformationCompletedCycleDTO](#schemaslainformationcompletedcycledto)]|false|none|List of completed cycles for the SLA.|
|id|string|false|none|ID of the Service Level Agreement (SLA).|
|name|string|false|none|Description of the SLA.|
|ongoingCycle|object|false|none|Details of the active cycle for the SLA.|
|slaDisplayFormat|string|false|none|Format in which SLA is to be displayed in the UI|

<h2 id="tocS_SlaInformationOngoingCycleDTO">SlaInformationOngoingCycleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaslainformationongoingcycledto"></a>
<a id="schema_SlaInformationOngoingCycleDTO"></a>
<a id="tocSslainformationongoingcycledto"></a>
<a id="tocsslainformationongoingcycledto"></a>

```json
{
  "breachTime": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "breached": true,
  "elapsedTime": {
    "friendly": "string",
    "millis": 0
  },
  "goalDuration": {
    "friendly": "string",
    "millis": 0
  },
  "paused": true,
  "remainingTime": {
    "friendly": "string",
    "millis": 0
  },
  "startTime": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "withinCalendarHours": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breachTime|object|false|none|Time and date at which the SLA cycle would have breached its limit.|
|breached|boolean|false|none|Indicates whether the SLA has been breached (true) or not (false).|
|elapsedTime|object|false|none|Duration of the service.|
|goalDuration|object|false|none|Duration within which the service should be completed.|
|paused|boolean|false|none|Indicates whether the SLA is paused (true) or not (false).|
|remainingTime|object|false|none|Duration remaining in which to complete the service.|
|startTime|object|false|none|Time and date at which the SLA cycle started.|
|withinCalendarHours|boolean|false|none|Indicates whether the SLA it timed during calendared working hours only (true) or not (false).|

<h2 id="tocS_SoftwareInfoDTO">SoftwareInfoDTO</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareinfodto"></a>
<a id="schema_SoftwareInfoDTO"></a>
<a id="tocSsoftwareinfodto"></a>
<a id="tocssoftwareinfodto"></a>

```json
{
  "_links": {
    "self": "http://example.com"
  },
  "buildChangeSet": "string",
  "buildDate": {
    "epochMillis": 0,
    "friendly": "string",
    "iso8601": "string",
    "jira": "string"
  },
  "isLicensedForUse": true,
  "platformVersion": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|REST API URL of the instance.|
|buildChangeSet|string|false|none|Reference of the change set included in the build.|
|buildDate|object|false|none|Date of the current build.|
|isLicensedForUse|boolean|false|none|Indicates whether the instance is licensed (true) or not (false).|
|platformVersion|string|false|none|Jira Platform version upon which Service Desk is based.|
|version|string|false|none|Jira Service Management version.|

<h2 id="tocS_SourceDTO">SourceDTO</h2>
<!-- backwards compatibility -->
<a id="schemasourcedto"></a>
<a id="schema_SourceDTO"></a>
<a id="tocSsourcedto"></a>
<a id="tocssourcedto"></a>

```json
{
  "type": "confluence"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the knowledge base source|

#### Enumerated Values

|Property|Value|
|---|---|
|type|confluence|

<h2 id="tocS_StatusCategory">StatusCategory</h2>
<!-- backwards compatibility -->
<a id="schemastatuscategory"></a>
<a id="schema_StatusCategory"></a>
<a id="tocSstatuscategory"></a>
<a id="tocsstatuscategory"></a>

```json
{
  "colorName": "string",
  "id": 0,
  "key": "string",
  "name": "string",
  "self": "string"
}
```

A status category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorName|string|false|read-only|The name of the color used to represent the status category.|
|id|integer(int64)|false|read-only|The ID of the status category.|
|key|string|false|read-only|The key of the status category.|
|name|string|false|read-only|The name of the status category.|
|self|string|false|read-only|The URL of the status category.|

<h2 id="tocS_StatusDetails">StatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemastatusdetails"></a>
<a id="schema_StatusDetails"></a>
<a id="tocSstatusdetails"></a>
<a id="tocsstatusdetails"></a>

```json
{
  "description": "string",
  "iconUrl": "string",
  "id": "string",
  "name": "string",
  "scope": {
    "project": {
      "avatarUrls": {
        "16x16": "http://example.com",
        "24x24": "http://example.com",
        "32x32": "http://example.com",
        "48x48": "http://example.com"
      },
      "id": "string",
      "key": "string",
      "name": "string",
      "projectCategory": {
        "description": "string",
        "id": "string",
        "name": "string",
        "self": "string"
      },
      "projectTypeKey": "software",
      "self": "string",
      "simplified": true
    },
    "type": "PROJECT"
  },
  "self": "string",
  "statusCategory": {
    "colorName": "string",
    "id": 0,
    "key": "string",
    "name": "string",
    "self": "string"
  }
}
```

A status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|The description of the status.|
|iconUrl|string|false|read-only|The URL of the icon used to represent the status.|
|id|string|false|read-only|The ID of the status.|
|name|string|false|read-only|The name of the status.|
|scope|object|false|read-only|The scope of the field.|
|self|string|false|read-only|The URL of the status.|
|statusCategory|object|false|read-only|The category assigned to the status.|

<h2 id="tocS_UpdatedProjectCategory">UpdatedProjectCategory</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedprojectcategory"></a>
<a id="schema_UpdatedProjectCategory"></a>
<a id="tocSupdatedprojectcategory"></a>
<a id="tocsupdatedprojectcategory"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string",
  "self": "string"
}
```

A project category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|read-only|The name of the project category.|
|id|string|false|read-only|The ID of the project category.|
|name|string|false|read-only|The description of the project category.|
|self|string|false|read-only|The URL of the project category.|

<h2 id="tocS_UserDTO">UserDTO</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "_links": {
    "avatarUrls": {
      "property1": "string",
      "property2": "string"
    },
    "jiraRest": "http://example.com",
    "self": "http://example.com"
  },
  "accountId": "string",
  "active": true,
  "displayName": "string",
  "emailAddress": "string",
  "key": "string",
  "name": "string",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|URLs for the customer record and related items.|
|accountId|string|false|none|The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.|
|active|boolean|false|none|Indicates if the customer is active (true) or inactive (false)|
|displayName|string|false|none|Customer's name for display in a UI. Depending on the customer’s privacy settings, this may return an alternative value.|
|emailAddress|string|false|none|Customer's email address. Depending on the customer’s privacy settings, this may be returned as null.|
|key|string|false|none|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.|
|name|string|false|none|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.|
|timeZone|string|false|none|Customer time zone. Depending on the customer’s privacy settings, this may be returned as null.|

<h2 id="tocS_UserDetails">UserDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserdetails"></a>
<a id="schema_UserDetails"></a>
<a id="tocSuserdetails"></a>
<a id="tocsuserdetails"></a>

```json
{
  "accountId": "string",
  "accountType": "string",
  "active": true,
  "avatarUrls": {
    "16x16": "http://example.com",
    "24x24": "http://example.com",
    "32x32": "http://example.com",
    "48x48": "http://example.com"
  },
  "displayName": "string",
  "emailAddress": "string",
  "key": "string",
  "name": "string",
  "self": "string",
  "timeZone": "string"
}
```

User details permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:

 *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).
 *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.
 *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.|
|accountType|string|false|read-only|The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)|
|active|boolean|false|read-only|Whether the user is active.|
|avatarUrls|object|false|read-only|The avatars of the user.|
|displayName|string|false|read-only|The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.|
|emailAddress|string|false|read-only|The email address of the user. Depending on the user’s privacy settings, this may be returned as null.|
|key|string|false|read-only|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.|
|name|string|false|read-only|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.|
|self|string|false|read-only|The URL of the user.|
|timeZone|string|false|read-only|The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.|

<h2 id="tocS_UserLinkDTO">UserLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemauserlinkdto"></a>
<a id="schema_UserLinkDTO"></a>
<a id="tocSuserlinkdto"></a>
<a id="tocsuserlinkdto"></a>

```json
{
  "avatarUrls": {
    "property1": "string",
    "property2": "string"
  },
  "jiraRest": "http://example.com",
  "self": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarUrls|object|false|none|Links to the various sizes of the customer's avatar. Note that this property is deprecated, and will be removed in future versions.|
|jiraRest|string(uri)|false|none|REST API URL for the customer.|
|self|string(uri)|false|none|none|

<h2 id="tocS_UsersOrganizationUpdateDTO">UsersOrganizationUpdateDTO</h2>
<!-- backwards compatibility -->
<a id="schemausersorganizationupdatedto"></a>
<a id="schema_UsersOrganizationUpdateDTO"></a>
<a id="tocSusersorganizationupdatedto"></a>
<a id="tocsusersorganizationupdatedto"></a>

```json
{
  "accountIds": [
    "string"
  ],
  "organizationId": 0,
  "usernames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[string]|false|none|List of customers, specific by account IDs, to add to or remove from the organization.|
|organizationId|integer(int32)|false|none|The organizationId in which users need to be added|
|usernames|[string]|false|none|This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.|
