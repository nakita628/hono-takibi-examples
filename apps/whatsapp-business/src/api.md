<h1 id="meta-graph-api---application-connected-client-businesses">Meta Graph API - Application Connected Client Businesses v23.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for retrieving connected client businesses associated with a Meta application.


This endpoint allows applications to retrieve information about businesses that have
established client connections through the application. This is essential for managing
business relationships and understanding client business configurations.

Base URLs:

* <a href="https://graph.facebook.com">https://graph.facebook.com</a> - Production Graph API server

* <a href="https://graph.facebook.com">https://graph.facebook.com</a>

* <a href="https://graph.facebook.com">https://graph.facebook.com</a> - WhatsApp Business Cloud API

* <a href="https://graph.facebook.com">https://graph.facebook.com</a> - Meta Graph API production server

<a href="https://developers.facebook.com/terms">Terms of service</a>
Web: <a href="https://developers.facebook.com/support">Meta Business Platform Team</a> 
License: <a href="https://developers.facebook.com/terms">Meta Platform Terms</a>

# Authentication

- HTTP Authentication, scheme: bearer System user access token with whatsapp_business_management permission. Format: Bearer YOUR_SYSTEM_USER_ACCESS_TOKEN

<h1 id="meta-graph-api---application-connected-client-businesses-application-business-connections">Application Business Connections</h1>

APIs for managing application connected client business relationships

## Get Connected Client Businesses

<a id="opIdgetConnectedClientBusinesses"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/connected_client_businesses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Application-ID}/connected_client_businesses`

Retrieve a list of client businesses connected to the specified application.


**Use Cases:**
- Monitor application-business client relationships
- Verify connected business configurations
- Retrieve business connection status and details
- Manage client business access and permissions


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Business connection data can be cached for moderate periods, but status information may change.
Implement appropriate cache invalidation strategies.


<h3 id="get-connected-client-businesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Application-ID|path|string|true|Your Meta Application ID. This ID is provided when you create the application<br>and can be found in your App Dashboard.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name, verification_status, business_status).<br>Available fields: id, name, verification_status, business_status, created_time, updated_time<br>|
|limit|query|integer|false|Maximum number of connected client businesses to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Example Client Business A",
      "verification_status": "VERIFIED",
      "business_status": "ACTIVE",
      "created_time": "2023-01-15T10:30:00Z",
      "updated_time": "2023-06-20T14:45:00Z"
    },
    {
      "id": "2345678901234567",
      "name": "Example Client Business B",
      "verification_status": "PENDING",
      "business_status": "PENDING_APPROVAL",
      "created_time": "2023-03-10T09:15:00Z",
      "updated_time": "2023-03-10T09:15:00Z"
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: application_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access connected client businesses for this application",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Application not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this application",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-connected-client-businesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved connected client businesses|[ConnectedClientBusinessesResponse](#schemaconnectedclientbusinessesresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Application ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-multi-partner-solutions">Multi-Partner Solutions</h1>

APIs for managing Multi-Partner Solutions that enable collaborative WhatsApp Business
messaging between solution owners and partner applications.


## Create Multi-Partner Solution

<a id="opIdcreateWhatsAppBusinessSolution"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_solution \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "owner_permissions": [
      "MESSAGING"
    ],
    "partner_app_id": "9876543210987654",
    "partner_permissions": [],
    "solution_name": "Owner-Managed Messaging Solution"
  }'
```

`POST /{Version}/{Application-ID}/whatsapp_business_solution`

Create a new Multi-Partner Solution that defines permission distribution between
a solution owner app and a partner app for WhatsApp Business messaging collaboration.


**Permission Logic:**
- Only one partner (owner or partner app) can have MESSAGING permission
- At least one partner must have MESSAGING permission
- Both partners automatically receive default solution partner permissions
- Empty permission arrays indicate no configurable permissions for that partner


**Solution Lifecycle:**
- Solutions are created with INITIATED status
- Require subsequent activation workflow through solution management
- Can be managed through Partner Dashboard or solution management APIs


**Rate Limiting:**
Standard Graph API rate limits apply with WhatsApp Business Management throttling.
Use appropriate retry logic with exponential backoff for rate-limited requests.


**Validation:**
- Partner app must be accessible and have proper capabilities
- Permission combinations are validated against business logic rules
- Solution names must meet length and content requirements


> Body parameter

```json
{
  "owner_permissions": [
    "MESSAGING"
  ],
  "partner_app_id": "9876543210987654",
  "partner_permissions": [],
  "solution_name": "Owner-Managed Messaging Solution"
}
```

<h3 id="create-multi-partner-solution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines API behavior and available features.<br>Use the latest stable version for new integrations.<br>|
|Application-ID|path|string|true|Your Facebook Application ID that will serve as the solution owner.<br>This application will be the primary owner of the created solution.<br>|
|body|body|[WhatsAppBusinessSolutionCreateRequest](#schemawhatsappbusinesssolutioncreaterequest)|true|none|
|» owner_permissions|body|[[WhatsAppBusinessAccountConfigurablePermissionTask](#schemawhatsappbusinessaccountconfigurablepermissiontask)]|true|Configurable permissions granted to the solution owner app. Currently supports<br>only MESSAGING permission. Use empty array if owner should not have configurable permissions.<br>|
|» partner_app_id|body|string|true|Facebook Application ID of the partner app that will participate in this solution.<br>Must be a valid application ID accessible to the requesting entity.<br>|
|» partner_permissions|body|[[WhatsAppBusinessAccountConfigurablePermissionTask](#schemawhatsappbusinessaccountconfigurablepermissiontask)]|true|Configurable permissions granted to the partner app. Currently supports<br>only MESSAGING permission. Use empty array if partner should not have configurable permissions.<br>|
|» solution_name|body|string|true|Human-readable name for the Multi-Partner Solution. Used for identification<br>and management purposes in partner dashboards and solution management interfaces.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» owner_permissions|MESSAGING|
|» partner_permissions|MESSAGING|

> Example responses

> 200 Response

```json
{
  "solution_id": "1234567890123456"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid Permissions for either of the partners",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Insufficient permissions for this operation",
    "type": "OAuthException",
    "code": 200,
    "fbtrace_id": "A1B2C3D4E5F6G7H8",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Application not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Invalid Permissions for either of the partners",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "is_transient": true,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred",
    "type": "GraphMethodException",
    "code": 2,
    "is_transient": true,
    "fbtrace_id": "A1B2C3D4E5F6G7H8"
  }
}
```

<h3 id="create-multi-partner-solution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Multi-Partner Solution created successfully. The solution is created with INITIATED status<br>and can be managed through subsequent API calls or Partner Dashboard.<br>|[WhatsAppBusinessSolutionCreateResponse](#schemawhatsappbusinesssolutioncreateresponse)|
|400|Bad Request|Bad Request - Invalid parameters provided. This includes validation failures<br>for permission logic, malformed IDs, or constraint violations.<br>|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Authentication required or invalid access token provided.<br>|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or missing required capabilities.<br>App may lack whatsapp_business_management permission or required granular scopes.<br>|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Application ID not found or not accessible to the requesting entity.<br>|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request is well-formed but contains business logic violations.<br>This includes cases where both partners have MESSAGING permission or neither has it.<br>|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limiting threshold exceeded.<br>Implement exponential backoff retry logic.<br>|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server-side error occurred.<br>These errors are typically transient and should be retried.<br>|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Multi-Partner Solutions for Application

<a id="opIdgetApplicationWhatsAppBusinessSolutions"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_solutions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Application-ID}/whatsapp_business_solutions`

Retrieve all WhatsApp Business Multi-Partner Solutions associated with the specified application.
This includes both solutions owned by the application and solutions where the application
acts as a partner.


**Use Cases:**
- Retrieve all solutions for an application's portfolio management
- Filter solutions by ownership role (owner vs partner)
- Monitor solution lifecycle and status changes across multiple solutions
- Verify solution configuration before business onboarding operations
- Check pending approval requests and status transitions


**Filtering:**
Use the `role` parameter to filter solutions by the application's relationship:
- `OWNER`: Only solutions owned by this application
- `PARTNER`: Only solutions where this application is a partner
- No role parameter: All solutions (both owned and partnered)


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Solution details can be cached for short periods, but status information may change
frequently during transitions. Implement appropriate cache invalidation strategies.


<h3 id="get-multi-partner-solutions-for-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Application-ID|path|string|true|Your Meta Application ID. This ID can be found in your App Dashboard and represents<br>the application for which you want to retrieve associated Multi-Partner Solutions.<br>|
|role|query|[WhatsAppBusinessSolutionApplicationRole](#schemawhatsappbusinesssolutionapplicationrole)|false|Filter solutions by the application's relationship role. If not specified,<br>all solutions (both owned and partnered) will be returned.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (name, status, status_for_pending_request).<br>Available fields: id, name, status, status_for_pending_request, owner_app, owner_permissions<br>|
|limit|query|integer|false|Maximum number of solutions to return in a single request. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|OWNER|
|role|PARTNER|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "E-commerce Integration Solution",
      "status": "ACTIVE",
      "status_for_pending_request": "NONE",
      "owner_app": {
        "id": "9876543210987654",
        "name": "Solution Partner App"
      },
      "owner_permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES",
        "VIEW_INSIGHTS"
      ]
    },
    {
      "id": "2345678901234567",
      "name": "Customer Support Solution",
      "status": "DRAFT",
      "status_for_pending_request": "PENDING_ACTIVATION"
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_solution?after=MTAxNTExOTQ1MjAwNzI5NDE"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: application_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access Multi-Partner Solutions for this application",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Application not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for these solutions",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-multi-partner-solutions-for-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved Multi-Partner Solutions for the application|[WhatsAppBusinessSolutionsResponse](#schemawhatsappbusinesssolutionsresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Application ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Multi-Partner Solution Access Token

<a id="opIdgetSolutionAccessToken"></a>

> Code samples

```bash
curl 'https://graph.facebook.com/v23.0/1234567890123456/access_token?business_id=9876543210987654' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Solution-ID}/access_token`

Retrieve a granular BISU access token for accessing customer business resources through the Multi-Partner Solution. The token provides secure, scoped access to WhatsApp Business Accounts that have been shared with the solution.


**Use Cases:**
- Obtain secure access tokens for partner applications to access customer business resources
- Enable multi-tenant partner architectures with dedicated tokens per customer business
- Support secure API operations on shared WhatsApp Business Accounts
- Implement proper security boundaries between different customer businesses


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Token Management:**
Access tokens are time-limited and should be refreshed before expiration. Store tokens securely and implement proper token rotation strategies.


<h3 id="get-multi-partner-solution-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|Your Multi-Partner Solution ID. This ID is provided when you create the solution<br>and can be found in your Partner Dashboard or through solution management APIs.<br>|
|business_id|query|string|true|The customer business ID for which you want to retrieve an access token. This must be<br>a business that has shared a WhatsApp Business Account with your Multi-Partner Solution.<br>|

> Example responses

> 200 Response

```json
{
  "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",
  "expires_at": 1735689600
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: business_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this Multi-Partner Solution or the specified business",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution or specified business not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The specified business has not shared a WABA with this Multi-Partner Solution",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-multi-partner-solution-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved granular BISU access token|[WhatsAppBusinessSolutionAccessToken](#schemawhatsappbusinesssolutionaccesstoken)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID or business ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Accept Multi-Partner Solution Invitation

<a id="opIdacceptWhatsAppBusinessSolution"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partner_app_id": "9876543210987654",
    "log_session_id": "session_12345_accept_solution"
  }'
```

`POST /{Version}/{Solution-ID}/accept`

Accept an invitation to participate in a Multi-Partner Solution as a partner application.
This endpoint transitions the partner's status from NOTIFICATION_SENT to ACCEPTED,
enabling the solution to progress toward ACTIVE status once all required partners accept.


**Use Cases:**
- Accept partnership invitations for Multi-Partner Solutions
- Activate partner participation in existing solutions
- Confirm partner app's commitment to solution terms and conditions
- Enable solution workflow progression from INITIATED to ACTIVE status


**Business Logic:**
- Only invited partner apps can accept solution invitations
- Solution must be in INITIATED status to accept partnerships
- Partner status transitions from NOTIFICATION_SENT to ACCEPTED
- Solution may become ACTIVE once all required partners accept
- Acceptance creates formal partnership agreement between apps


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Validation:**
- Partner app must have received a valid solution invitation
- Solution must exist and be accessible to the partner app
- Partner app must have proper permissions and capabilities
- Acceptance request must include valid partner app identification


> Body parameter

```json
{
  "partner_app_id": "9876543210987654",
  "log_session_id": "session_12345_accept_solution"
}
```

<h3 id="accept-multi-partner-solution-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|ID of the Multi-Partner Solution to accept. This ID is provided in the original<br>invitation and can be found in partner notifications or solution management interfaces.<br>|
|body|body|[WhatsAppBusinessSolutionAcceptRequest](#schemawhatsappbusinesssolutionacceptrequest)|true|none|
|» partner_app_id|body|string|true|ID of the partner application accepting the solution invitation.<br>This must match the app ID that received the original invitation.<br>|
|» log_session_id|body|string|false|Optional session identifier for logging and debugging purposes.<br>Used to track the acceptance flow across multiple API calls.<br>|

> Example responses

> 200 Response

```json
{
  "solution_id": "1234567890123456",
  "partner_status": "ACCEPTED",
  "success": true,
  "message": "Solution partnership accepted successfully",
  "update_time": "2024-01-15T10:30:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: partner_app_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app is not invited to participate in this Multi-Partner Solution",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349175,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to accept this solution invitation"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Solution cannot be accepted: solution is not in INITIATED status",
    "type": "GraphMethodException",
    "code": 100,
    "error_subcode": 2207051,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="accept-multi-partner-solution-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Multi-Partner Solution invitation accepted successfully. The partner's status has been<br>updated to ACCEPTED and the solution may progress toward ACTIVE status.<br>|[WhatsAppBusinessSolutionAcceptResponse](#schemawhatsappbusinesssolutionacceptresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or not invited to solution|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Solution cannot be accepted in current state|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Multi-Partner Solution Details

<a id="opIdgetSolutionDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Solution-ID}`

Retrieve comprehensive details about a Multi-Partner Solution, including its current status,
pending status transitions, ownership information, and granted permissions.


**Use Cases:**
- Monitor solution lifecycle and status changes
- Verify solution configuration before business onboarding
- Check pending approval requests and status transitions
- Retrieve solution ownership and permission details


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Solution details can be cached for short periods, but status information may change
frequently during transitions. Implement appropriate cache invalidation strategies.


<h3 id="get-multi-partner-solution-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|Your Multi-Partner Solution ID. This ID is provided when you create the solution<br>and can be found in your Partner Dashboard or through solution management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (name, status, status_for_pending_request).<br>Available fields: id, name, status, status_for_pending_request, owner_app, owner_permissions<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "name": "E-commerce Integration Solution",
  "status": "ACTIVE",
  "status_for_pending_request": "NONE",
  "owner_app": {
    "id": "9876543210987654",
    "name": "Solution Partner App"
  },
  "owner_permissions": [
    "MANAGE",
    "DEVELOP",
    "MANAGE_TEMPLATES",
    "VIEW_INSIGHTS"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: solution_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this Multi-Partner Solution",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this solution",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-multi-partner-solution-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved Multi-Partner Solution details|[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reject Multi-Partner Solution Deactivation Request

<a id="opIdrejectSolutionDeactivationRequest"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/reject_deactivation_request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reject_deactivation_request": true
  }'
```

`POST /{Version}/{Solution-ID}/reject_deactivation_request`

Reject a pending deactivation request for a Multi-Partner Solution. This endpoint allows
solution partners to decline deactivation requests from solution owners, maintaining the
solution in its current active operational state.


**Use Cases:**
- Reject deactivation requests from solution owners
- Maintain active solution partnerships when deactivation is not appropriate
- Respond programmatically to deactivation requests through API integration
- Keep solutions operational when business requirements or partnerships change


**Business Logic:**
- Solution status remains ACTIVE after successful rejection
- StatusForPendingRequest transitions from PENDING_DEACTIVATION to NONE
- All existing solution configurations and permissions are preserved
- Solution partners receive notifications about the rejection decision


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Permissions:**
Requires whatsapp_business_management permission and valid solution partnership relationship.


> Body parameter

```json
{
  "reject_deactivation_request": true
}
```

<h3 id="reject-multi-partner-solution-deactivation-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|Your Multi-Partner Solution ID with a pending deactivation request. This ID is provided<br>when you create the solution and can be found in your Partner Dashboard or through solution management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (name, status, status_for_pending_request).<br>Available fields: id, name, status, status_for_pending_request, owner_app, owner_permissions<br>|
|body|body|object|true|Request body for rejecting deactivation request|
|» reject_deactivation_request|body|boolean|true|Set to true to reject the pending deactivation request|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "name": "E-commerce Integration Solution",
  "status": "ACTIVE",
  "status_for_pending_request": "NONE",
  "owner_app": {
    "id": "9876543210987654",
    "name": "Solution Partner App"
  },
  "owner_permissions": [
    "MANAGE",
    "DEVELOP",
    "MANAGE_TEMPLATES",
    "VIEW_INSIGHTS"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: solution_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Insufficient permissions to reject deactivation request for this solution",
    "type": "OAuthException",
    "code": 10,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution not found or not accessible",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Solution must have pending deactivation request to reject",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="reject-multi-partner-solution-deactivation-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully rejected the deactivation request|[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or unauthorized access|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution not found or not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Invalid solution state or business logic violation|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reject Multi-Partner Solution Request

<a id="opIdrejectSolutionRequest"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/reject \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request_type": "PARTNERSHIP_REQUEST",
    "partner_app_id": "9876543210987654",
    "rejection_reason": "Partnership terms do not align with our business requirements"
  }'
```

`POST /{Version}/{Solution-ID}/reject`

Reject a pending partnership request or deactivation request for a Multi-Partner Solution.
This endpoint allows solution owners to decline incoming requests and maintain control
over their solution partnerships and lifecycle.


**Use Cases:**
- Reject partnership requests from unauthorized or incompatible applications
- Decline deactivation requests to keep solutions active
- Maintain solution security and partnership quality
- Control solution access and collaboration boundaries


**Request Types:**
- `PARTNERSHIP_REQUEST`: Reject an incoming partnership request from another app
- `DEACTIVATION_REQUEST`: Reject a request to deactivate the solution


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Business Logic:**
- Only solution owners can reject requests for their solutions
- Partnership rejections require the partner_app_id parameter
- Rejection actions are permanent and cannot be undone through this API
- Rejected requests may need to be resubmitted through proper channels


> Body parameter

```json
{
  "request_type": "PARTNERSHIP_REQUEST",
  "partner_app_id": "9876543210987654",
  "rejection_reason": "Partnership terms do not align with our business requirements"
}
```

<h3 id="reject-multi-partner-solution-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|Your Multi-Partner Solution ID. This ID is provided when you create the solution<br>and can be found in your Partner Dashboard or through solution management APIs.<br>|
|body|body|[SolutionRejectRequest](#schemasolutionrejectrequest)|true|none|
|» request_type|body|string|true|Type of request being rejected|
|» rejection_reason|body|string|false|Optional reason for rejecting the request|
|» partner_app_id|body|string|false|The app ID of the requesting partner. Required when request_type is PARTNERSHIP_REQUEST, not used for DEACTIVATION_REQUEST|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» request_type|PARTNERSHIP_REQUEST|
|» request_type|DEACTIVATION_REQUEST|

> Example responses

> 200 Response

```json
{
  "success": true,
  "solution_id": "1234567890123456",
  "rejected_request_type": "PARTNERSHIP_REQUEST",
  "rejection_timestamp": "2024-01-15T10:30:00Z",
  "partner_app_id": "9876543210987654"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid request_type. Must be PARTNERSHIP_REQUEST or DEACTIVATION_REQUEST",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Only solution owners can reject requests for their solutions",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to reject requests for this solution"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The specified request has already been processed and cannot be rejected",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="reject-multi-partner-solution-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully rejected the Multi-Partner Solution request|[SolutionRejectResponse](#schemasolutionrejectresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or not solution owner|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID does not exist or request not found|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request cannot be processed due to business logic constraints|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send Multi-Partner Solution Deactivation Request

<a id="opIdsendSolutionDeactivationRequest"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/send_deactivation_request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "Solution no longer needed for current business operations"
  }'
```

`POST /{Version}/{Solution-ID}/send_deactivation_request`

Submit a deactivation request for a Multi-Partner Solution. This initiates
a workflow to transition the solution from its current state to deactivated,
following proper business validation and approval processes.


**Use Cases:**
- Request deactivation of an active Multi-Partner Solution
- Initiate solution lifecycle transition management
- Trigger business workflow for solution deactivation approval
- Programmatically manage solution lifecycle states


**Business Logic:**
- Solution must be in ACTIVE or INITIATED state to be eligible for deactivation
- Deactivation requests are processed asynchronously
- Solution status will transition to PENDING_DEACTIVATION during processing
- Final deactivation requires business approval workflow completion


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Workflow:**
1. Validate solution ownership and permissions
2. Check solution eligibility for deactivation
3. Submit deactivation request to business workflow
4. Return confirmation with tracking identifier


> Body parameter

```json
{
  "reason": "Solution no longer needed for current business operations"
}
```

<h3 id="send-multi-partner-solution-deactivation-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Solution-ID|path|string|true|Your Multi-Partner Solution ID. This ID is provided when you create the solution<br>and can be found in your Partner Dashboard or through solution management APIs.<br>|
|body|body|[WhatsAppBusinessSolutionDeactivationRequest](#schemawhatsappbusinesssolutiondeactivationrequest)|false|none|
|» reason|body|string|false|Optional reason for the deactivation request|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "Deactivation request submitted successfully",
  "request_id": "deactivation_req_1234567890"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: solution_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to request deactivation for this Multi-Partner Solution",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Multi-Partner Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Solution is not in a state that allows deactivation. Current status: DEACTIVATED",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="send-multi-partner-solution-deactivation-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully submitted deactivation request|[WhatsAppBusinessSolutionDeactivationResponse](#schemawhatsappbusinesssolutiondeactivationresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Solution is not eligible for deactivation|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Multi-Partner Solutions for WABA

<a id="opIdlistWabaSolutions"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/solutions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/solutions`

Retrieve a paginated list of Multi-Partner Solutions associated with the specified
WhatsApp Business Account. This endpoint supports field selection and cursor-based
pagination for efficient data retrieval.


**Use Cases:**
- Discover available Multi-Partner Solutions for business onboarding
- Monitor solution status and availability across your WABA
- Retrieve solution ownership and permission details
- Filter solutions by specific fields or status requirements


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Solution listings can be cached for short periods, but status information may change
frequently during transitions. Implement appropriate cache invalidation strategies.


**Pagination:**
This endpoint supports cursor-based pagination using `limit`, `after`, and `before`
parameters. Use the `paging` object in responses to navigate through result sets.


<h3 id="list-multi-partner-solutions-for-waba-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID for which to retrieve associated Multi-Partner Solutions.<br>This ID can be found in your WhatsApp Business Manager or through WABA management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (name, status, status_for_pending_request).<br>Available fields: id, name, status, status_for_pending_request, owner_app, owner_permissions<br>|
|limit|query|integer|false|Maximum number of solutions to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Returns solutions after this cursor position.<br>Use the cursor from the previous response's `paging.cursors.after` field.<br>|
|before|query|string|false|Cursor for pagination. Returns solutions before this cursor position.<br>Use the cursor from the previous response's `paging.cursors.before` field.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "E-commerce Integration Solution",
      "status": "ACTIVE",
      "status_for_pending_request": "NONE",
      "owner_app": {
        "id": "9876543210987654",
        "name": "Solution Partner App"
      },
      "owner_permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES",
        "VIEW_INSIGHTS"
      ]
    },
    {
      "id": "2345678901234567",
      "name": "Customer Support Solution",
      "status": "DRAFT",
      "status_for_pending_request": "NONE"
    }
  ],
  "paging": {
    "cursors": {
      "before": "FAKE_CURSOR_BEFORE_123ABC",
      "after": "FAKE_CURSOR_AFTER_456DEF"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/solutions?limit=25&after=FAKE_CURSOR_AFTER_456DEF"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: waba_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this WABA",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF",
    "is_transient": true
  }
}
```

<h3 id="list-multi-partner-solutions-for-waba-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved Multi-Partner Solutions list|[SolutionsList](#schemasolutionslist)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-business-phone-numbers">Business Phone Numbers</h1>

APIs for managing phone numbers in WhatsApp Business Accounts

## Add Phone Number to Business Account

<a id="opIdaddPhoneNumbers"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/add_phone_numbers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "phone_number": "+1234567890"
  }'
```

`POST /{Version}/{Business-ID}/add_phone_numbers`

Add a preverified phone number to a WhatsApp Business Account. This endpoint is used by
Partners to create a pool of Partner owned numbers that end clients
can purchase.

**Use Cases:**
- Add new phone numbers to scale messaging operations
- Set up phone numbers for different business locations
- Manage phone number inventory for business messaging
- Configure phone numbers for specific messaging workflows

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Phone Number Requirements:**
- Must be in E.164 format (e.g., +1234567890)
- Must not be already registered to another WhatsApp Business Account
- Must be capable of receiving SMS for verification
- Must comply with WhatsApp's business messaging policies


> Body parameter

```json
{
  "phone_number": "+1234567890"
}
```

<h3 id="add-phone-number-to-business-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|Your WhatsApp Business Account ID. This ID can be found in your Business Manager<br>or through business management APIs.<br>|
|body|body|[AddPhoneNumbersRequest](#schemaaddphonenumbersrequest)|true|Phone number to add to the business account|
|» phone_number|body|string|true|Phone number to add to the business account. Accepts E.164 format or formatted numbers<br>with spaces, hyphens, and parentheses (e.g., +1234567890, +1 (631) 555-1000, +1-631-555-1000).<br>The phone number will be normalized and validated by the endpoint.<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid phone number",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to add phone numbers to this business account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Maximum number of phone numbers per business account exceeded",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="add-phone-number-to-business-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Phone number successfully added|[AddPhoneNumbersResponse](#schemaaddphonenumbersresponse)|
|400|Bad Request|Bad Request - Invalid parameters, malformed request, or phone number already registered|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Business ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-pre-verified-phone-numbers">Pre-Verified Phone Numbers</h1>

APIs for managing pre-verified phone numbers for WhatsApp Business messaging

## Get Pre-Verified Phone Numbers

<a id="opIdgetPreVerifiedPhoneNumbers"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Business-ID}/preverified_numbers`

Retrieve pre-verified phone numbers available for use with the specified business.
This endpoint provides information about phone numbers that have been pre-verified
and are ready for immediate use with WhatsApp Business messaging operations.

**Use Cases:**
- Retrieve available pre-verified phone numbers for business messaging setup
- Check verification status and availability of phone numbers
- Monitor pre-verified phone number inventory
- Validate phone number options before WhatsApp Business Account configuration
- Facilitate quick business messaging setup with pre-verified numbers

**Filtering and Pagination:**
- Results can be filtered by verification status, availability, and country
- Cursor-based pagination is supported for large result sets
- Default page size is 25 items, maximum is 100 items per page

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Phone number information can be cached for short periods, but availability status
may change frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-pre-verified-phone-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|Your Business ID for which to retrieve pre-verified phone numbers.<br>This ID can be found in your Meta Business Manager or through business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, display_phone_number, verification_status).<br>Available fields: id, display_phone_number, country_prefix, verification_status,<br>availability_status, created_time, last_updated, supported_features, country_code, region<br>|
|limit|query|integer|false|Maximum number of phone numbers to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to retrieve the next page of results.<br>This value is provided in the 'paging' object of previous responses.<br>|
|before|query|string|false|Cursor for pagination. Use this to retrieve the previous page of results.<br>This value is provided in the 'paging' object of previous responses.<br>|
|verification_status|query|[PhoneNumberVerificationStatus](#schemaphonenumberverificationstatus)|false|Filter results by verification status. Only phone numbers with the specified<br>verification status will be returned.<br>|
|availability_status|query|[PhoneNumberAvailabilityStatus](#schemaphonenumberavailabilitystatus)|false|Filter results by availability status. Only phone numbers with the specified<br>availability status will be returned.<br>|
|country_code|query|string|false|Filter results by country code. Only phone numbers from the specified<br>country will be returned. Use ISO 3166-1 alpha-2 country codes.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|verification_status|VERIFIED|
|verification_status|PENDING|
|verification_status|FAILED|
|verification_status|EXPIRED|
|availability_status|AVAILABLE|
|availability_status|IN_USE|
|availability_status|RESERVED|
|availability_status|UNAVAILABLE|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "display_phone_number": "+1 (555) 123-4567",
      "country_prefix": 1,
      "verification_status": "VERIFIED",
      "availability_status": "AVAILABLE",
      "created_time": "2024-01-15T10:30:00Z",
      "last_updated": "2024-01-20T14:45:00Z",
      "supported_features": [
        "MESSAGING",
        "BUSINESS_PROFILE",
        "WEBHOOKS"
      ],
      "country_code": "US",
      "region": "North America"
    },
    {
      "id": "2345678901234567",
      "display_phone_number": "+44 20 1234 5678",
      "country_prefix": 44,
      "verification_status": "VERIFIED",
      "availability_status": "AVAILABLE",
      "created_time": "2024-01-10T08:15:00Z",
      "last_updated": "2024-01-18T16:20:00Z",
      "supported_features": [
        "MESSAGING",
        "TEMPLATES",
        "ANALYTICS"
      ],
      "country_code": "GB",
      "region": "Europe"
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: business_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access pre-verified phone numbers for this business",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Business not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Business is not eligible for pre-verified phone number access",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-pre-verified-phone-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved pre-verified phone numbers|[PreVerifiedPhoneNumbersResponse](#schemapreverifiedphonenumbersresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Business does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Pre-Verified Phone Number Details

<a id="opIdgetPreVerifiedPhoneNumberDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Pre-Verified-Phone-Number-ID}`

Retrieve details about a specific pre-verified phone number, including validation
status, formatting information, and any associated error messages.


**Use Cases:**
- Check validation status of a pre-verified phone number
- Retrieve formatted display version of the phone number
- Get country code and formatting information
- Troubleshoot validation errors


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Phone number details can be cached for moderate periods, but validation status may
change. Implement appropriate cache invalidation strategies.


<h3 id="get-pre-verified-phone-number-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Pre-Verified-Phone-Number-ID|path|string|true|The pre-verified phone number ID to retrieve details for. This ID is provided<br>by your Business Solution Provider (BSP) during the pre-verification process.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, is_input_id_valid).<br>Available fields: id, country_prefix, display_phone_number, error_msg, is_input_id_valid<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "country_prefix": 1,
  "display_phone_number": "+1 (555) 123-4567",
  "is_input_id_valid": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this pre-verified phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-verified phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this phone number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-pre-verified-phone-number-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved pre-verified phone number details|[PreVerifiedPhoneNumberValidation](#schemapreverifiedphonenumbervalidation)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Pre-verified phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Pre-Verified Phone Number

<a id="opIddeletePreVerifiedPhoneNumber"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{Pre-Verified-Phone-Number-ID}`

Delete a pre-verified phone number from the system. This operation removes the
phone number from your pre-verified list and cannot be undone.


**Use Cases:**
- Remove phone numbers that are no longer needed
- Clean up invalid or incorrect pre-verified phone numbers
- Manage phone number lifecycle and cleanup


**Important Notes:**
- This operation is irreversible
- Deleted phone numbers cannot be recovered
- Ensure the phone number is not in active use before deletion


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


<h3 id="delete-pre-verified-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Pre-Verified-Phone-Number-ID|path|string|true|The pre-verified phone number ID to delete. This ID is provided<br>by your Business Solution Provider (BSP) during the pre-verification process.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to delete this pre-verified phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-verified phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Cannot delete phone number that is currently in use",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="delete-pre-verified-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted pre-verified phone number|Inline|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Pre-verified phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Phone number cannot be deleted due to current state|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="delete-pre-verified-phone-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Indicates whether the deletion was successful|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Request Verification Code for Pre-Verified Phone Number

<a id="opIdrequestPreVerifiedPhoneNumberCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/request_code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code_method": "SMS",
    "language": "en_US"
  }'
```

`POST /{Version}/{Pre-Verified-Phone-Number-ID}/request_code`

Request a verification code for a pre-verified phone number via SMS or voice call.
This is part of the WhatsApp Business Account onboarding process where pre-approved
phone numbers must be verified before they can be used for messaging.


**Process Flow:**
1. Call this endpoint to request a verification code
2. User receives code via SMS or voice call
3. Use the verify_code endpoint to complete verification
4. Phone number becomes active for messaging


**Rate Limiting:**
- Limited number of code requests per phone number per time period
- Exponential backoff recommended for retry attempts
- Voice calls may have additional restrictions


**Language Support:**
Verification messages are sent in the specified language when available.
Falls back to English (en_US) if the requested language is not supported.


**Security Considerations:**
- Codes expire after a short time period
- Limited number of verification attempts allowed
- Phone number must be pre-verified and owned by requesting business


> Body parameter

```json
{
  "code_method": "SMS",
  "language": "en_US"
}
```

<h3 id="request-verification-code-for-pre-verified-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Pre-Verified-Phone-Number-ID|path|string|true|Your pre-verified phone number ID. This ID is provided when the phone number<br>is pre-verified and can be found in your WhatsApp Business Account settings.<br>|
|body|body|[RequestCodeRequest](#schemarequestcoderequest)|true|Verification code request parameters|
|» code_method|body|string|true|Method for receiving the verification code|
|» language|body|string|true|Language locale for the verification message|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» code_method|SMS|
|» code_method|VOICE|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: code_method must be SMS or VOICE",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this pre-verified phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-verified phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "This phone number has already been verified",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="request-verification-code-for-pre-verified-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested verification code|[RequestCodeResponse](#schemarequestcoderesponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Pre-verified phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify OTP Code for Pre-Verified Phone Number

<a id="opIdverifyPreVerifiedPhoneNumberCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/verify_code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "123456"
  }'
```

`POST /{Version}/{Pre-Verified-Phone-Number-ID}/verify_code`

Verify the OTP code received for a pre-verified phone number to complete the
verification process. This endpoint validates the code and updates the verification
status of the phone number.


**Use Cases:**
- Complete phone number verification during WhatsApp Business onboarding
- Verify ownership of phone numbers for business messaging
- Enable phone numbers for WhatsApp Business API usage


**Rate Limiting:**
This endpoint has specific rate limits to prevent abuse:
- 125 requests per hour for business use cases
- Standard Graph API rate limits also apply


**Code Validation:**
- Codes are time-sensitive and expire after a set period
- Each code can only be used once
- Invalid or expired codes will result in verification failure


**Error Handling:**
- Invalid codes return 400 Bad Request
- Expired codes return 422 Unprocessable Entity
- Rate limit exceeded returns 429 Too Many Requests


> Body parameter

```json
{
  "code": "123456"
}
```

<h3 id="verify-otp-code-for-pre-verified-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Pre-Verified-Phone-Number-ID|path|string|true|Your Pre-Verified Phone Number ID. This ID is provided when you create the pre-verified<br>phone number and can be found in your WhatsApp Business Manager or through phone number APIs.<br>|
|body|body|[VerifyCodeRequest](#schemaverifycoderequest)|true|Verification code details|
|» code|body|string|true|6-digit verification code received via SMS or voice|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: code must be a numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this Pre-Verified Phone Number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-Verified Phone Number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The verification code is invalid",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Invalid Code",
    "error_user_msg": "The verification code you entered is incorrect"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="verify-otp-code-for-pre-verified-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully verified the OTP code|[VerifyCodeResponse](#schemaverifycoderesponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Pre-Verified Phone Number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Code is invalid, expired, or already used|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-client-whatsapp-business-accounts">Client WhatsApp Business Accounts</h1>

APIs for managing client WhatsApp Business Account relationships

## Get Client WhatsApp Business Accounts

<a id="opIdgetClientWhatsAppBusinessAccounts"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/client_whatsapp_business_accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Business-ID}/client_whatsapp_business_accounts`

Retrieve a list of WhatsApp Business Accounts that have been shared with the specified business.


**Use Cases:**
- Monitor shared WABA relationships and permissions
- Verify WABA configuration and status information
- Retrieve WABA details for business integrations
- Manage multi-business WhatsApp messaging setups


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
WABA information can be cached for moderate periods, but status information may change
frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-client-whatsapp-business-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|Your Business ID. This ID can be found in your Meta Business Suite URL<br>or through business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name, currency, timezone_id).<br>Available fields: id, name, account_review_status, purchase_order_number, audiences, ownership_type, subscribed_apps, business_verification_status, country, currency, timezone_id, on_behalf_of_business_info, schedules, is_enabled_for_insights, dcc_config, message_templates, phone_numbers<br>|
|business_type|query|[string]|false|Filter results by WhatsApp Business Account type<br>|
|limit|query|integer|false|Maximum number of WhatsApp Business Accounts to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|
|find|query|string|false|Find a specific WhatsApp Business Account by ID<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|business_type|STANDARD|
|business_type|PREMIUM|
|business_type|ENTERPRISE|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Client Business WABA A",
      "account_review_status": "APPROVED",
      "currency": "USD",
      "country": "US",
      "timezone_id": "1",
      "business_verification_status": "VERIFIED",
      "ownership_type": "CLIENT_OWNED",
      "is_enabled_for_insights": true
    },
    {
      "id": "2345678901234567",
      "name": "Client Business WABA B",
      "account_review_status": "PENDING",
      "currency": "EUR",
      "country": "DE",
      "timezone_id": "5",
      "business_verification_status": "PENDING",
      "ownership_type": "AGENCY_OWNED",
      "is_enabled_for_insights": false
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890/client_whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: business_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access client WhatsApp Business Accounts for this business",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Business not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this business",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-client-whatsapp-business-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved client WhatsApp Business Accounts|[ClientWhatsAppBusinessAccountsResponse](#schemaclientwhatsappbusinessaccountsresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Business ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-mm-lite-onboarding">MM Lite Onboarding</h1>

APIs for managing Multi-Partner MM Lite onboarding requests and business agreements

## Onboard Partners to MM Lite

<a id="opIdonboardPartnersToMMLite"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/onboard_partners_to_mm_lite \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{Version}/{Business-ID}/onboard_partners_to_mm_lite`

Send a request from the partner to onboard an end business to MM Lite.
This creates a business agreement request and sets OBO mobility intents
on eligible WhatsApp Business Accounts.


**Business Flow:**
1. Validates partner business and app permissions
2. Checks end business eligibility for MM Lite
3. Identifies eligible shared WABAs and OBO WABAs
4. Sets mobility intents on eligible OBO WABAs (BSPs only)
5. Creates business agreement request
6. Returns request ID for tracking


**BSP vs TP Behavior:**
- BSPs (Business Solution Providers): Can create OBO WABAs and set mobility intents
- TPs (Technology Partners): Can only create onboarding requests, no OBO WABA management


**Rate Limiting:**
Subject to business partner integrations use case throttling limits.
Use appropriate retry logic with exponential backoff.


**Idempotency:**
If a pending request already exists between the same partner and end business,
the existing request ID is returned instead of creating a duplicate.


<h3 id="onboard-partners-to-mm-lite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|The end business ID that will receive the MM Lite onboarding request.<br>This is the business that the partner wants to establish an MM Lite relationship with.<br>|
|solution_id|query|string|false|Optional WhatsApp Business Solution ID to associate with the onboarding request.<br>If provided, the solution will be linked to the business agreement and OBO mobility intents.<br>|

> Example responses

> 200 Response

```json
{
  "request_id": "1234567890123456"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: business_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have the required whatsapp_business_management permission",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Business not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Failed to set OBO mobility intent on one or more WhatsApp Business Accounts",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="onboard-partners-to-mm-lite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created MM Lite onboarding request|[MMLiteOnboardingRequest](#schemammliteonboardingrequest)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Business ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-owned-whatsapp-business-accounts">Owned WhatsApp Business Accounts</h1>

APIs for retrieving WhatsApp Business Accounts owned by a business

## Get Owned WhatsApp Business Accounts

<a id="opIdgetOwnedWhatsAppBusinessAccounts"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/owned_whatsapp_business_accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Business-ID}/owned_whatsapp_business_accounts`

Retrieve WhatsApp Business Accounts owned by the specified business. This endpoint
provides comprehensive information about all WABAs owned by the business, including
account details, configuration, and status information.

**Use Cases:**
- Retrieve all WhatsApp Business Accounts owned by a business
- Filter accounts by business type
- Find specific accounts by ID
- Monitor business portfolio of WhatsApp Business Accounts
- Manage account access and permissions across multiple WABAs

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Account information can be cached for short periods, but status and configuration
may change frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-owned-whatsapp-business-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|Your Business ID. This ID represents the business portfolio that owns the<br>WhatsApp Business Accounts and can be found in your Business Manager settings.<br>|
|business_type|query|[[WhatsAppBusinessType](#schemawhatsappbusinesstype)]|false|Filter accounts by business type. Can specify multiple types as comma-separated values.<br>Use this to filter between enterprise and small-medium business accounts.<br>|
|after|query|string|false|Cursor for forward pagination. Use the cursor from the previous response<br>to get the next page of results.<br>|
|first|query|integer|false|Number of results to return in forward pagination. Maximum value is 100.<br>Use with 'after' cursor for forward pagination.<br>|
|before|query|string|false|Cursor for backward pagination. Use the cursor from the previous response<br>to get the previous page of results.<br>|
|last|query|integer|false|Number of results to return in backward pagination. Maximum value is 100.<br>Use with 'before' cursor for backward pagination.<br>|
|find|query|string|false|Find a specific WhatsApp Business Account by ID within the owned accounts.<br>Use this to quickly locate a specific account.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|business_type|ENTERPRISE|
|business_type|SMB|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "104996122399160",
      "name": "Lucky Shrub",
      "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",
      "timezone_id": "1"
    },
    {
      "id": "102290129340398",
      "name": "Test WhatsApp Business Account",
      "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",
      "timezone_id": "1"
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",
      "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: business_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this business's WhatsApp Business Accounts",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Business not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested filter combination is not supported",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-owned-whatsapp-business-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved owned WhatsApp Business Accounts|[WhatsAppBusinessAccountsConnection](#schemawhatsappbusinessaccountsconnection)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Business ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-pre-verified-phone-number-sharing">Pre-Verified Phone Number Sharing</h1>

APIs for sharing pre-verified phone numbers between business entities

## Share Pre-Verified Phone Number with Another Business

<a id="opIdsharePreVerifiedPhoneNumber"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/share_preverified_numbers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "preverified_id": "1234567890123456",
    "partner_business_id": "9876543210987654"
  }'
```

`POST /{Version}/{Business-ID}/share_preverified_numbers`

Share a pre-verified phone number with another business entity, granting specified
permissions for collaborative WhatsApp Business messaging operations.


**Use Cases:**
- Enable partner businesses to use your pre-verified phone numbers for messaging
- Share phone number resources between parent and subsidiary businesses
- Facilitate multi-business WhatsApp integrations with shared phone number access
- Establish temporary or permanent phone number sharing relationships


**Business Logic:**
- Only businesses with appropriate ownership or sharing rights can share phone numbers
- Shared phone numbers maintain original ownership while granting usage permissions
- Multiple businesses can have access to the same phone number with different permission levels
- Sharing relationships can be time-limited with automatic expiration


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Validation:**
- Pre-verified phone number must exist and be accessible to the requesting business
- Target business must be a valid and accessible business entity
- Requested permissions must be valid and within the scope of allowed sharing permissions
- Sharing operation must comply with business relationship and access control policies


> Body parameter

```json
{
  "preverified_id": "1234567890123456",
  "partner_business_id": "9876543210987654"
}
```

<h3 id="share-pre-verified-phone-number-with-another-business-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Business-ID|path|string|true|Your Business ID that owns or has sharing rights to the pre-verified phone number.<br>This ID can be found in your Meta Business Manager or through business management APIs.<br>|
|body|body|[PreVerifiedPhoneNumberShareRequest](#schemapreverifiedphonenumbersharerequest)|true|Phone number sharing configuration and target business details|
|» preverified_id|body|string|true|Unique identifier of the pre-verified phone number to be shared.<br>Must be a valid phone number ID that the requesting business owns or has sharing rights to.<br>|
|» partner_business_id|body|string|true|Business ID of the partner business that will receive access to the pre-verified phone number.<br>Must be a valid business entity accessible to the requesting app.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid preverified_id: must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your business doesn't have permission to share this pre-verified phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your business doesn't have permission to share this phone number"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-verified phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Pre-verified phone number is not in a shareable state",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="share-pre-verified-phone-number-with-another-business-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully shared pre-verified phone number with target business|[PreVerifiedPhoneNumberShareResponse](#schemapreverifiedphonenumbershareresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Resource does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-call-permissions">Call Permissions</h1>

Use the **`/{Phone-Number-ID}/call_permissions`** endpoint to check whether you have permission to call a specific WhatsApp user and understand what calling-related actions are available.

## Prerequisites

*   [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with **`whatsapp_business_messaging`** permission
*   `phone-number-id` for your registered WhatsApp Business Account
*   WhatsApp Cloud API Calling must be enabled for your phone number

## Permission Status Types

- **granted**: You have active permission to call this user
- **pending**: A permission request has been sent but not yet approved by the user
- **denied**: The user has denied call permissions for your business
- **expired**: Previous permission has expired and needs to be renewed

## Available Actions

- **start_call**: Initiate a new call to this user (available when permission is granted)
- **send_call_permission_request**: Send a permission request to this user (available when permission is denied or expired)

## Rate Limiting

This endpoint has specific rate limits to prevent abuse. Exceeding the rate limit will result in error code 4 with subcode 2390008.

## Error Handling

- **403 Forbidden**: Calling is not enabled for your phone number - **429 Too Many Requests**: Rate limit exceeded for permission checks - **400 Bad Request**: Missing or invalid `user_wa_id` parameter


## Check Call Permissions

<a id="opIdcheckCallPermissions"></a>

> Code samples

```bash
curl 'https://graph.facebook.com/v21.0/102290129340398/call_permissions?user_wa_id=14085551234' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/call_permissions`

Check whether you have permission to call a WhatsApp user and what actions are available. This endpoint returns the current permission status for calling a specific user, along with available actions and their limits.

**Permission Status:**
- `granted`: You have active permission to call this user - `pending`: A permission request has been sent but not yet approved - `denied`: The user has denied call permissions - `expired`: Previous permission has expired

**Available Actions:**
- `start_call`: Initiate a new call to this user - `send_call_permission_request`: Send a permission request to this user

**Error Handling:**
This endpoint may return various error codes including rate limiting errors if too many permission checks are made within a short period.


<h3 id="check-call-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|user_wa_id|query|string|true|The WhatsApp ID of the user you want to check call permissions for|
|Version|path|string|true|The API version to use|
|Phone-Number-ID|path|string|true|The ID of the phone number registered with your WhatsApp Business Account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "permission": {
    "status": "granted",
    "expiration_time": 1735689600
  },
  "actions": [
    {
      "action_name": "start_call",
      "can_perform_action": true,
      "limits": [
        {
          "time_period": "24h",
          "current_usage": 5,
          "max_allowed": 100,
          "limit_expiration_time": 1735689600
        }
      ]
    },
    {
      "action_name": "send_call_permission_request",
      "can_perform_action": false,
      "limits": null
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid template name or parameters",
    "type": "OAuthException",
    "code": 100
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Template not approved for marketing use",
    "type": "OAuthException",
    "code": 200
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Rate limit exceeded",
    "type": "OAuthException",
    "code": 4
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred",
    "type": "OAuthException",
    "code": 1
  }
}
```

<h3 id="check-call-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Call Permissions Check Success|[CallPermissionCheckResponsePayload](#schemacallpermissioncheckresponsepayload)|
|400|Bad Request|Bad Request - Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Template not approved or insufficient permissions|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error - An unexpected error occurred|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-calls">Calls</h1>

Use the **`/{Phone-Number-ID}/calls`** endpoint to initiate, manage, and terminate WhatsApp calls. This API allows businesses to handle voice calling functionality through the WhatsApp Business Platform.

## Prerequisites

*   [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with **`whatsapp_business_messaging`** permission
*   `phone-number-id` for your registered WhatsApp account
*   Call request permission from the WhatsApp user

## Call Actions

- **connect**: Initiate a new call
- **pre_accept**: Pre-accept a call (prepare for accepting)
- **accept**: Accept an incoming call
- **reject**: Reject an incoming call
- **terminate**: Terminate an active call

## Session Description Protocol (SDP)

For actions that require audio/video negotiation (connect, accept), you must provide session information including:
- `sdp_type`: Must be "offer" for connect action, "answer" for accept action
- `sdp`: RFC 8866 compliant SDP information

## Error Handling

Error code 138006 indicates lack of call request permission for the business number from the WhatsApp user.


## Manage Calls

<a id="opIdmanageCalls"></a>

> Code samples

```bash
curl https://graph.facebook.com/v21.0/102290129340398/calls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "14085551234",
    "action": "connect",
    "session": {
      "sdp_type": "offer",
      "sdp": "v=0\no=- 3626166318745852955 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\nc=IN IP4 0.0.0.0\na=rtcp:9 IN IP4 0.0.0.0\na=ice-ufrag:4g1c\na=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk\na=ice-options:trickle\na=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A\na=setup:actpass\na=mid:0\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\na=sendrecv\na=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\na=rtcp-mux\na=rtpmap:111 opus/48000/2\na=rtcp-fb:111 transport-cc\na=fmtp:111 minptime=10;useinbandfec=1\na=rtpmap:63 red/48000/2\na=fmtp:63 111/111\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:126 telephone-event/8000\na=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ\na=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\n"
    },
    "biz_opaque_callback_data": "0fS5cePMok"
  }'
```

`POST /{Version}/{Phone-Number-ID}/calls`

Use this endpoint to initiate, accept, reject, or terminate WhatsApp calls.

**For initiating or managing a call:**
Send a POST request with the appropriate action (connect, pre_accept, accept, reject, terminate).

**For terminating a call:**
Send a POST request with action "terminate" and the call_id.

**Note:** Response with error code 138006 indicates a lack of a call request permission for this business number from the WhatsApp user.


> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "to": "14085551234",
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "v=0\no=- 3626166318745852955 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\nc=IN IP4 0.0.0.0\na=rtcp:9 IN IP4 0.0.0.0\na=ice-ufrag:4g1c\na=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk\na=ice-options:trickle\na=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A\na=setup:actpass\na=mid:0\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\na=sendrecv\na=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\na=rtcp-mux\na=rtpmap:111 opus/48000/2\na=rtcp-fb:111 transport-cc\na=fmtp:111 minptime=10;useinbandfec=1\na=rtpmap:63 red/48000/2\na=fmtp:63 111/111\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:126 telephone-event/8000\na=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ\na=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\n"
  },
  "biz_opaque_callback_data": "0fS5cePMok"
}
```

<h3 id="manage-calls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|The API version to use|
|Phone-Number-ID|path|string|true|The ID of the phone number registered with your WhatsApp Business Account|
|body|body|[CallRequestPayload](#schemacallrequestpayload) \| [CallTerminateRequestPayload](#schemacallterminaterequestpayload)|false|none|
|» *oneOf*|body|[CallRequestPayload](#schemacallrequestpayload)|false|none|
|» *oneOf*|body|[CallTerminateRequestPayload](#schemacallterminaterequestpayload)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "calls": [
    {
      "id": "wacid.ABGGFjFVU2AfAgo6V"
    }
  ]
}
```

<h3 id="manage-calls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Call Management Success|Inline|

<h3 id="manage-calls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CallResponsePayload](#schemacallresponsepayload)|false|none|none|
|*oneOf*|[CallTerminateResponsePayload](#schemacallterminateresponsepayload)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-marketing-messages">Marketing Messages</h1>

Send marketing template messages to WhatsApp users using pre-approved templates.

## Send Marketing Template Message

<a id="opIdsendMarketingMessage"></a>

> Code samples

```bash
curl https://graph.facebook.com/v20.0/102290129340398/marketing_messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "16315552222",
    "type": "template",
    "template": {
      "name": "hello_world",
      "language": {
        "code": "en"
      }
    }
  }'
```

`POST /{Version}/{Phone-Number-ID}/marketing_messages`

Send marketing template messages using pre-approved templates. Supports optional product policy controls and message activity sharing settings.

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16315552222",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en"
    }
  }
}
```

<h3 id="send-marketing-template-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|WhatsApp API version (e.g., v20.0)|
|Phone-Number-ID|path|string|true|WhatsApp Business Phone Number ID|
|body|body|[MarketingMessageRequestPayload](#schemamarketingmessagerequestpayload)|true|none|
|» messaging_product|body|string|true|Messaging service used. Must be "whatsapp"|
|» recipient_type|body|string|true|Type of recipient. Must be "individual"|
|» to|body|string|true|WhatsApp ID or phone number of the message recipient|
|» type|body|string|true|Type of message. Must be "template" for marketing messages|
|» template|body|[TemplateObject](#schematemplateobject)|true|none|
|» product_policy|body|string|false|Optional product policy setting|
|» message_activity_sharing|body|boolean|false|Optional flag to control message activity sharing|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|
|» recipient_type|individual|
|» type|template|
|» product_policy|CLOUD_API_FALLBACK|
|» product_policy|STRICT|

> Example responses

> 200 Response

```json
{
  "contacts": [
    {
      "input": "16315552222",
      "wa_id": "16315552222"
    }
  ],
  "messages": [
    {
      "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
    }
  ],
  "messaging_product": "whatsapp",
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid template name or parameters",
    "type": "OAuthException",
    "code": 100
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Template not approved for marketing use",
    "type": "OAuthException",
    "code": 200
  }
}
```

<h3 id="send-marketing-template-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Marketing message sent successfully|[MarketingMessageResponsePayload](#schemamarketingmessageresponsepayload)|
|400|Bad Request|Bad Request - Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Template not approved or insufficient permissions|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-messages">Messages</h1>

Use the **`/{{Phone-Number-ID}}/messages`** endpoint to send text messages, media (audio, documents, images, and video), and message templates to your customers. For more information relating to the messages you can send, see [Messages](#1f4f7644-cc97-40b5-b8e4-c19da268fff1).

Messages are identified by a unique ID. You can track message status in the Webhooks through its ID. You could also mark an incoming message as read through the **`/{{Phone-Number-ID}}/messages`** endpoint.

## Prerequisites

*   [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with **`whatsapp_business_messaging`** permission
*   `phone-number-id` for your registered WhatsApp account. See [Get Phone Number](#c72d9c17-554d-4ae1-8f9e-b28a94010b28).

## Send Message.

<a id="opIdsendMessage"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audio": {
      "id": "<AUDIO_OBJECT_ID>"
    },
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "{{Recipient-Phone-Number}}",
    "type": "audio"
  }'
```

`POST /{Version}/{Phone-Number-ID}/messages`

Send Message.

> Body parameter

```json
{
  "audio": {
    "id": "<AUDIO_OBJECT_ID>"
  },
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "{{Recipient-Phone-Number}}",
  "type": "audio"
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|body|body|[Message](#schemamessage)|false|none|
|» *oneOf*|body|[TextMessage](#schematextmessage)|false|none|
|» *oneOf*|body|[AudioMessage](#schemaaudiomessage)|false|none|
|» *oneOf*|body|[DocumentMessage](#schemadocumentmessage)|false|none|
|» *oneOf*|body|[ImageMessage](#schemaimagemessage)|false|none|
|» *oneOf*|body|[LocationMessage](#schemalocationmessage)|false|none|
|» *oneOf*|body|[VideoMessage](#schemavideomessage)|false|none|
|» *oneOf*|body|[StickerMessage](#schemastickermessage)|false|none|
|» *oneOf*|body|[ReactionMessage](#schemareactionmessage)|false|none|
|» *oneOf*|body|[InteractiveMessage](#schemainteractivemessage)|false|none|
|» *oneOf*|body|[TemplateMessage](#schematemplatemessage)|false|none|
|» *oneOf*|body|[ContactsMessage](#schemacontactsmessage)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "contacts": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJCOTY3NDc0NDFDRUI3NTA0Q0UA"
    }
  ],
  "messaging_product": "whatsapp"
}
```

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Send Test Message / Send Text Message / Send Reply to Text Message / Send Reply with Reaction Message / Send Image Message by ID / Send Reply to Image Message by ID / Send Image Message by URL / Send Reply to Image Message by URL / Send Audio Message by ID / Send Reply to Audio Message by ID / Send Audio Message By URL / Send Reply to Audio Message by URL / Send Document Message by ID / Send Reply to Document Message by ID / Send Document Message by URL / Send Reply to Document Message by URL / Send Sticker Message By ID / Send Reply to Sticker Message by ID / Send Sticker Message By URL / Send Reply to Sticker Message by URL / Send Video Message By ID / Send Reply to Video Message by ID / Send Video Message By URL / Send Reply to Video Message by URL / Send Contact Message / Send Reply to Contact Message / Send Location Messages / Send Reply to Location Message / Send Message Template Text / Send Message Template Media / Send Interactive Message Template / Send List Message / Send Reply to List Message / Send Reply Button / Send Single Product Message / Example response / Example response / Send Draft Flow by Name / Send Draft Flow by ID / Send Published Flow by Name / Send Published Flow by ID / Send Flow Template Message / Send typing indicator and read receipt / Send Sample Text message / Send Sample Shipping Confirmation Template / Send Sample Issue Resolution Template|[MessageResponsePayload](#schemamessageresponsepayload)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-qr-code-collection">QR Code Collection</h1>

APIs for listing and creating WhatsApp Business message QR codes

## List All Message QR Codes

<a id="opIdlistAllQrCodes"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/message_qrdls \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/message_qrdls`

Retrieve all message QR codes for a phone number, sorted by creation time (newest first).
Supports field selection, filtering by code, cursor-based pagination, and QR image generation.


<h3 id="list-all-message-qr-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The WhatsApp Business Account phone number ID for which to list QR codes.<br>This ID is provided when you add a phone number to your WhatsApp Business Account.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. Available fields:<br>- code: QR code identifier (always included)<br>- prefilled_message: Pre-filled message text (always included)<br>- deep_link_url: WhatsApp deep link URL (always included)<br>- creation_time: Unix timestamp when QR code was created (first-party apps only)<br>- qr_image_url.format(FORMAT): QR code image URL where FORMAT is SVG or PNG<br><br>Example: "code,prefilled_message,qr_image_url.format(SVG)"<br>|
|code|query|string|false|Filter results to a specific QR code by its unique identifier.<br>When provided, only the matching QR code will be returned (if it exists).<br>|
|limit|query|integer|false|Maximum number of QR codes to return in a single response.<br>Default and maximum limit is typically 25.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>Obtain this value from the paging.cursors.after field in previous responses.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>Obtain this value from the paging.cursors.before field in previous responses.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "5QBPAD2DC6L5A1",
      "prefilled_message": "Show me Cyber Tuesday deals!",
      "deep_link_url": "https://wa.me/message/5QBPAD2DC6L5A1"
    },
    {
      "code": "ANED2T5QRU7HG1",
      "prefilled_message": "Show me Cyber Monday deals!",
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"
    },
    {
      "code": "WOMVT6TJ2BP7A1",
      "prefilled_message": "Tell me more about your production workshop",
      "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid fields parameter. Check field names and format specifications",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to list QR codes for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Too many API calls. Please try again later",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="list-all-message-qr-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of message QR codes|[QrCodeList](#schemaqrcodelist)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create or Update Message QR Code

<a id="opIdcreateOrUpdateQrCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/message_qrdls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prefilled_message": "Hi! I'\''m interested in your products. Can you help me?",
    "generate_qr_image": "SVG"
  }'
```

`POST /{Version}/{Phone-Number-ID}/message_qrdls`

Create a new QR code (without code parameter) or update existing QR code (with code parameter).
Supports optional QR image generation in PNG or SVG format.


> Body parameter

```json
{
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
  "generate_qr_image": "SVG"
}
```

<h3 id="create-or-update-message-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The WhatsApp Business Account phone number ID for which to create or update the QR code.<br>This ID is provided when you add a phone number to your WhatsApp Business Account.<br>|
|body|body|[CreateQrCodeRequest](#schemacreateqrcoderequest) \| [UpdateQrCodeRequest](#schemaupdateqrcoderequest)|true|none|
|» *oneOf*|body|[CreateQrCodeRequest](#schemacreateqrcoderequest)|false|Request payload for creating a new message QR code|
|» *oneOf*|body|[UpdateQrCodeRequest](#schemaupdateqrcoderequest)|false|Request payload for updating an existing message QR code|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "code": "ANED2T5QRU7HG1",
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
  "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",
  "qr_image_url": "https://scontent-iad3-2.xx.fbcdn.net/m1/v/t6/An-psFmLBls2NFXnhhkSVqwIHEqCTQoNKTLxxlOeci0Wbsukd2RLiwZalHrXwqT5RTFSzOhyw6OLvJJO0itaQtJI1BS2WkNcV67wR3GNx7ZX1tFSNCbpo1e6KPptKF1GbVGzmUfkgSPX?ccb=10-5&oh=00_AfAOAr6oRA2OKV_Ur3GUh4em57sACxUkfhXHsObiFrxOsA&oe=64DCCEF6&_nc_sid=5a413f"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid prefilled_message length. Maximum 140 characters allowed",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to manage QR codes for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Too many QR code operations. Please try again later",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="create-or-update-message-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created or updated the message QR code|[QrCodeResponse](#schemaqrcoderesponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or QR code not found for update|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-individual-qr-code">Individual QR Code</h1>

APIs for retrieving and deleting individual WhatsApp Business message QR codes

## Get Individual Message QR Code

<a id="opIdgetIndividualQrCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/message_qrdls/ANED2T5QRU7HG1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}`

Retrieve details for a specific QR code by its unique identifier.
Supports field selection and QR image generation. Response returns QR code in data array for consistency.


<h3 id="get-individual-message-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The WhatsApp Business Account phone number ID that owns the QR code.<br>This ID is provided when you add a phone number to your WhatsApp Business Account.<br>|
|QR-Code-ID|path|string|true|The unique 14-character identifier of the QR code to retrieve.<br>This is the code value returned when the QR code was created.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. Available fields:<br>- code: QR code identifier (always included)<br>- prefilled_message: Pre-filled message text (always included)<br>- deep_link_url: WhatsApp deep link URL (always included)<br>- creation_time: Unix timestamp when QR code was created (first-party apps only)<br>- qr_image_url.format(FORMAT): QR code image URL where FORMAT is SVG or PNG<br><br>Example: "code,prefilled_message,qr_image_url.format(SVG)"<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "ANED2T5QRU7HG1",
      "prefilled_message": "Show me Cyber Monday deals!",
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid QR code ID format. Expected 14-character alphanumeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access QR codes for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "QR code not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "QR Code Not Found",
    "error_user_msg": "The QR code you're trying to access doesn't exist or has been deleted"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Too many API calls. Please try again later",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-individual-message-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the message QR code details|[QrCodeResponse](#schemaqrcoderesponse)|
|400|Bad Request|Bad Request - Invalid QR code ID format or parameters|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID or QR code does not exist|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Individual Message QR Code

<a id="opIddeleteIndividualQrCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/message_qrdls/ANED2T5QRU7HG1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}`

Permanently delete a specific QR code. Once deleted, the QR code and deep link become invalid.
Deletion cannot be undone and affects any existing marketing materials using the QR code.


<h3 id="delete-individual-message-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The WhatsApp Business Account phone number ID that owns the QR code to be deleted.<br>This ID is provided when you add a phone number to your WhatsApp Business Account.<br>|
|QR-Code-ID|path|string|true|The unique 14-character identifier of the QR code to delete.<br>This is the code value returned when the QR code was created.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid QR code ID format. Expected 14-character alphanumeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to delete QR codes for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "QR code not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "QR Code Not Found",
    "error_user_msg": "The QR code you're trying to delete doesn't exist or has already been deleted"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Too many deletion attempts. Please try again later",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="delete-individual-message-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted the message QR code|[DeleteQrCodeResponse](#schemadeleteqrcoderesponse)|
|400|Bad Request|Bad Request - Invalid QR code ID format|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID or QR code does not exist|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-encrypted-messages">Encrypted Messages</h1>

Payload encryption provides an additional layer of security on top of existing standard TLS/SSL that secures communication between Cloud API and businesses. When enabled, all message requests and message echoes webhooks will undergo encryption using JWE (JSON Web Encryption) format.

## Key Features

- **Additional Security Layer**: Adds payload-level encryption on top of standard TLS/SSL
- **JWE Format**: Uses JSON Web Encryption standard for encrypting message payloads
- **Selective Encryption**: Only successful responses are encrypted; errors remain unencrypted
- **Standard Compatibility**: Encrypted payloads contain the same structure as `/messages` endpoint
- **Phone-Number Level**: Encryption is configured per phone number within a WABA

## Setup Requirements

1. **Enable Payload Encryption**: Use `POST /<Phone-Number-ID>/settings` to enable encryption
2. **RSA Key Pair**: Generate and provide a 2048-bit RSA public key (base64 encoded)
3. **Algorithm Support**: Multiple algorithms supported for content and key encryption
4. **Access Token**: User Access Token with `whatsapp_business_messaging` permission

## Supported Algorithms

- **Content Encryption**: A128GCM, A256GCM, A128CBC-HS256, A192CBC-HS384, A256CBC-HS512
- **Key Encryption**: RSA1_5, RSA-OAEP
- **WhatsApp Standard**: A256GCM + RSA-OAEP for responses and webhooks

## Send Encrypted Message

<a id="opIdsendEncryptedMessage"></a>

> Code samples

```bash
curl https://graph.facebook.com/v22.0/1234567890123456/messages_encrypted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."
  }'
```

`POST /{Version}/{Phone-Number-ID}/messages_encrypted`

Send encrypted messages using JWE (JSON Web Encryption) format. This endpoint provides an additional layer of security on top of existing standard TLS/SSL by accepting pre-encrypted message payloads and returning encrypted responses.

**Important Notes:**
- Only successful responses will be encrypted
- Error responses will be returned unencrypted if the underlying JSON is incorrectly formatted
- Payload encryption must be enabled for the phone number using the `POST /<Phone-Number-ID>/settings` endpoint
- The encrypted payload must follow the same structure as the original `/messages` endpoint

**Prerequisites:**
- User Access Token with `whatsapp_business_messaging` permission
- Valid `Phone-Number-ID` for your registered WhatsApp Business account
- Payload encryption enabled for the phone number
- Properly formatted JWE token containing encrypted message payload using supported algorithms

**Supported Algorithms:**
- **Content Encryption:** A128GCM, A256GCM...

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."
}
```

<h3 id="send-encrypted-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|API version (e.g., v21.0, v22.0)|
|Phone-Number-ID|path|string|true|The ID of the phone number used to send the message. Retrieved from the WhatsApp Business Account.|
|body|body|[EncryptedMessageRequest](#schemaencryptedmessagerequest)|true|none|
|» messaging_product|body|string|true|Messaging service used for the request. Use whatsapp.|
|» encrypted_contents|body|string|true|JWE payload with encrypted messages structure. This should be a valid JWE token containing the encrypted message payload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

> Example responses

> 200 Response

```json
{
  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ.encrypted_response_payload..."
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid JWE token format",
    "type": "OAuthException",
    "code": 400,
    "error_subcode": 1234567
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 460
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Insufficient permissions for this operation",
    "type": "OAuthException",
    "code": 403,
    "error_subcode": 1234569
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Rate limit exceeded",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2018001
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An internal error occurred",
    "type": "OAuthException",
    "code": 2,
    "error_subcode": 1675030
  }
}
```

<h3 id="send-encrypted-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Encrypted message sent successfully|[EncryptedMessageResponse](#schemaencryptedmessageresponse)|
|400|Bad Request|Bad Request - Invalid JWE token or malformed request. Note: Error responses are returned unencrypted even when payload encryption is enabled.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Invalid access token. Note: Error responses are returned unencrypted.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Insufficient permissions. Note: Error responses are returned unencrypted.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded. Note: Error responses are returned unencrypted.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error. Note: Error responses are returned unencrypted.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-official-business-account">Official Business Account</h1>

APIs for managing Official Business Account status and verification

## Get Official Business Account Status

<a id="opIdgetOfficialBusinessAccountStatus"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/official_business_account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/official_business_account`

Retrieve the Official Business Account (OBA) status and related information for a WhatsApp Business Account phone number.

**Use Cases:**
- Check current OBA verification status
- Monitor OBA application progress
- Retrieve status messages for business account verification
- Validate business credibility status

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
OBA status information can be cached for moderate periods, but status may change
during verification processes. Implement appropriate cache invalidation strategies.


<h3 id="get-official-business-account-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>status entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (oba_status, status_message).<br>Available fields: oba_status, status_message<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "oba_status": "PENDING",
  "status_message": "Your Official Business Account application is under review"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this phone number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-official-business-account-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved Official Business Account status|[OfficialBusinessAccountStatus](#schemaofficialbusinessaccountstatus)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Official Business Account Status

<a id="opIdGraphWhatsAppBusinessAccountToNumberCurrentStatusOfficialBusinessAccountPost"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/official_business_account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "SUBMIT_APPLICATION",
    "application_data": {
      "business_name": "Acme Corporation Ltd",
      "business_description": "Leading provider of innovative business solutions and consulting services",
      "website_url": "https://www.acmecorp.com",
      "contact_email": "business@acmecorp.com"
    }
  }'
```

`POST /{Version}/{Phone-Number-ID}/official_business_account`

Update or modify the Official Business Account (OBA) status for a WhatsApp Business Account phone number.
This endpoint allows businesses to submit new applications, withdraw existing applications, or resubmit
after addressing rejection reasons.

**Use Cases:**
- Submit initial Official Business Account application
- Withdraw pending OBA application
- Resubmit OBA application after addressing rejection feedback
- Update application data for pending applications

**Application Data Requirements:**
When submitting or resubmitting an OBA application, certain business information may be required
depending on the current status and previous submissions.

**Rate Limiting:**
Standard Graph API rate limits apply with additional restrictions on application submissions
to prevent abuse. Use appropriate retry logic with exponential backoff.

**Status Transitions:**
- Applications can only be submitted when no active application exists
- Withdrawals are only allowed for pending applications
- Resubmissions are only allowed after rejection


> Body parameter

```json
{
  "action": "SUBMIT_APPLICATION",
  "application_data": {
    "business_name": "Acme Corporation Ltd",
    "business_description": "Leading provider of innovative business solutions and consulting services",
    "website_url": "https://www.acmecorp.com",
    "contact_email": "business@acmecorp.com"
  }
}
```

<h3 id="update-official-business-account-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>status entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|body|body|[OfficialBusinessAccountUpdateRequest](#schemaofficialbusinessaccountupdaterequest)|true|Official Business Account status update request|
|» business_website_url|body|string(uri)|true|Official business website URL|
|» primary_country_of_operation|body|string|true|Primary country where the business operates|
|» primary_language|body|string|false|Primary language used by the business|
|» parent_business_or_brand|body|string|false|Parent business or brand name|
|» supporting_links|body|[string(uri)]|false|Supporting links that demonstrate business notability (minimum 5, maximum 10)|
|» additional_supporting_information|body|string|false|Additional information to support the Official Business Account application|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "Official Business Account application submitted successfully",
  "updated_status": {
    "id": "1234567890123456",
    "oba_status": "PENDING",
    "status_message": "Your Official Business Account application is under review"
  },
  "tracking_id": "oba_req_1234567890abcdef"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Cannot submit application: An active application already exists",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to modify this WhatsApp Business Account phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to modify this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 409 Response

```json
{
  "error": {
    "message": "Cannot withdraw application: No pending application found",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Invalid website URL format: URL must be a valid HTTPS URL",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-official-business-account-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Official Business Account status|[OfficialBusinessAccountUpdateResponse](#schemaofficialbusinessaccountupdateresponse)|
|400|Bad Request|Bad Request - Invalid parameters, malformed request, or invalid state transition|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|409|Conflict|Conflict - Invalid state transition or conflicting request|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request is valid but cannot be processed due to business rules|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded or too many application attempts|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-phone-numbers">Phone Numbers</h1>

APIs for managing WhatsApp Business Account phone number operations

## Retrieve WhatsApp Business Phone Number Information

<a id="opIdgetPhoneNumberById"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/106853218861309 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}`

Retrieve comprehensive information about a WhatsApp Business phone number using its unique ID (CSID).
This endpoint provides phone number status, verification details, quality metrics, and configuration information.

**Core Information Returned:**
- Phone number ID and display format
- Verification status and verified business name
- Quality rating based on message delivery performance
- Code verification status for two-step verification
- Display name certification status (when requested)

**Quality Rating System:**
The quality rating reflects how recipients have been receiving messages from this phone number:
- **GREEN**: High quality - messages are being delivered and engaged with well
- **YELLOW**: Medium quality - some delivery or engagement issues detected
- **RED**: Low quality - significant delivery or engagement problems
- **NA**: Quality rating not yet determined (new phone numbers)

**Display Name Status:**
When requesting the `name_status` field, you'll receive the current verification status:
- **APPROVED**: Business display name has been verified and is ready to use
- **AVAILABLE_WITHOUT_REVIEW**: Display name is ready to use without additional review
- **DECLINED**: Business display name verification was rejected
- **EXPIRED**: Display name approval has expired
- **PENDING_REVIEW**: Display name verification request is under review
- **NONE**: No display name verification request exists

**Code Verification Status:**
Indicates the two-step verification status:
- **VERIFIED**: Phone number has completed two-step verification
- **UNVERIFIED**: Two-step verification is pending or incomplete

**Use Cases:**
- Monitor phone number quality and delivery performance
- Check verification and display name status
- Validate phone number configuration before sending messages
- Retrieve display information for business profiles
- Audit phone number compliance and status

For more information on quality ratings, see [WhatsApp Business Account Message Quality Rating](https://www.facebook.com/business/help/896873687365001).


<h3 id="retrieve-whatsapp-business-phone-number-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>Use the latest stable version for optimal performance and feature support.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business Account phone number ID (CSID). This unique identifier is assigned when you<br>register the phone number with WhatsApp Business API and can be found in your WhatsApp Business Manager.<br>|
|fields|query|string|false|Comma-separated list of additional fields to include in the response. If not specified,<br>only default fields (id, display_phone_number, verified_name, quality_rating) are returned.<br><br>**Available Fields:**<br>- `name_status`: Display name verification status<br>- `code_verification_status`: Two-step verification status for the phone number<br><br>**Field Values:**<br><br>**name_status** values:<br>- `APPROVED`: Display name approved and ready to use<br>- `AVAILABLE_WITHOUT_REVIEW`: Display name ready without additional review<br>- `DECLINED`: Display name verification rejected<br>- `EXPIRED`: Display name approval has expired<br>- `PENDING_REVIEW`: Display name verification under review<br>- `NONE`: No display name verification request exists<br><br>**code_verification_status** values:<br>- `VERIFIED`: Phone number has completed two-step verification<br>- `UNVERIFIED`: Two-step verification pending or incomplete<br>|

> Example responses

> 200 Response

```json
{
  "id": "106853218861309",
  "display_phone_number": "+1 555-555-5555",
  "verified_name": "Jaspers Market",
  "quality_rating": "GREEN"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid version format. Use format like 'v23.0'",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The phone number is not registered with WhatsApp Business API",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="retrieve-whatsapp-business-phone-number-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved phone number information. The response includes core phone number details<br>and any additional fields requested via the `fields` parameter.<br>|[PhoneNumberInfo](#schemaphonenumberinfo)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update WhatsApp Business Account Phone Number Status and Configuration

<a id="opIdupdatePhoneNumberStatus"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_status": "CONNECTED"
  }'
```

`POST /{Version}/{Phone-Number-ID}`

Update the status and configuration of a WhatsApp Business Account phone number.
This endpoint supports comprehensive phone number management including status updates,
webhook configuration, security settings, and business profile management.

**Supported Operations:**
- Update connection status between WhatsApp Business Account and phone number
- Configure webhook endpoints for message delivery notifications
- Set up two-step verification and security notifications
- Update display names for name verification
- Configure search visibility and privacy settings
- Set username for the WhatsApp Business Account
- Override webhook callback URIs for message notifications

**Business Logic Requirements:**
- App must be linked to the WhatsApp Business Account
- Webhook subscription must exist before configuring callback URI overrides
- Callback URI verification is performed for external URLs
- Internal URLs are allowed for development environments

**Rate Limiting:**
WhatsApp use case throttling applies. Use appropriate retry logic with exponential backoff.

**Security Validations:**
- App-to-WABA linking validation enforced
- Webhook callback URI verification required for external URLs
- Business integration system user checks for AI bot onboarding
- Capability checks for first-party app access


> Body parameter

```json
{
  "connection_status": "CONNECTED"
}
```

<h3 id="update-whatsapp-business-account-phone-number-status-and-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business Account phone number ID (CSID). This ID is provided when you<br>register the phone number and can be found in your WhatsApp Business Manager.<br>|
|body|body|[PhoneNumberStatusUpdateRequest](#schemaphonenumberstatusupdaterequest)|false|Configuration parameters for updating phone number status and settings.<br>All parameters are optional and can be combined in a single request.<br>|
|» connection_status|body|[WhatsAppBusinessAccountToNumberStatus](#schemawhatsappbusinessaccounttonumberstatus)|false|Connection status between WhatsApp Business Account and phone number|
|» webhook_url|body|string(uri)|false|Webhook URL for receiving message notifications|
|» whatsapp_business_api_data|body|[WhatsAppBusinessApiData](#schemawhatsappbusinessapidata)|false|WhatsApp Business API configuration data|
|» pin|body|string|false|Two-step verification PIN (can be empty string)|
|» search_visibility|body|[WAAPIBusinessGlobalSearchStateStatus](#schemawaapibusinessglobalsearchstatestatus)|false|Search visibility status for the WhatsApp Business Account|
|» webhook_configuration|body|[WebhookConfiguration](#schemawebhookconfiguration)|false|Webhook configuration settings|
|» new_display_name|body|string|false|New display name for name verification request|
|» username|body|string|false|Username for the WhatsApp Business Account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connection_status|CONNECTED|
|» connection_status|DISCONNECTED|
|» connection_status|PENDING|
|» connection_status|FLAGGED|
|» connection_status|RESTRICTED|
|» connection_status|RATE_LIMITED|
|» connection_status|MESSAGING_LIMIT_TIER_0|
|» connection_status|MESSAGING_LIMIT_TIER_1|
|» connection_status|MESSAGING_LIMIT_TIER_2|
|» connection_status|MESSAGING_LIMIT_TIER_3|
|» connection_status|MESSAGING_LIMIT_TIER_4|
|» search_visibility|VISIBLE|
|» search_visibility|HIDDEN|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+1234567890",
      "wa_id": "1234567890"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: recipient phone number format is incorrect",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The phone number is not registered",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-whatsapp-business-account-phone-number-status-and-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation completed successfully|Inline|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="update-whatsapp-business-account-phone-number-status-and-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[MessageResponse](#schemamessageresponse)|false|none|Response from sending a message|
|*oneOf*|[SuccessResponse](#schemasuccessresponse)|false|none|Generic success response|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-phone-number-management">Phone Number Management</h1>

APIs for managing WhatsApp Business phone number registration and deregistration

## Deregister WhatsApp Business Phone Number

<a id="opIdderegisterPhoneNumber"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/deregister \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{Version}/{Phone-Number-ID}/deregister`

Deregister a WhatsApp Business phone number from the Facebook Hosted System.
This operation removes the phone number from the WhatsApp Business Platform
and makes it available for re-registration if needed.


**Important Notes:**
- Phone number must be currently linked in Facebook Hosted System
- Phone number must be registered on the WhatsApp Business Platform
- Cannot deregister phone numbers associated with SMB accounts
- Rate limiting is enforced to prevent abuse
- Deregistration triggers activity logging for audit purposes


**Rate Limiting:**
Standard Graph API rate limits apply with additional restrictions for registration
operations. Use appropriate retry logic with exponential backoff.


**Caching:**
Deregistration status changes are immediate and should not be cached.


<h3 id="deregister-whatsapp-business-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The ID of the phone number to deregister. This ID is provided when you register<br>the phone number and can be found in your WhatsApp Business Account settings.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Phone number is not currently linked in Facebook Hosted System",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The phone number cannot be deregistered in its current state",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Rate limit exceeded for deregistration requests",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="deregister-whatsapp-business-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deregistered the phone number|[DeregisterResponse](#schemaderegisterresponse)|
|400|Bad Request|Bad Request - Invalid parameters or phone number state|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get WhatsApp Business Account Phone Numbers

<a id="opIdgetWhatsAppBusinessAccountPhoneNumbers"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/phone_numbers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/phone_numbers`

Retrieve all phone numbers associated with a WhatsApp Business Account, including their
status, verification details, and configuration information.

**Use Cases:**
- List all phone numbers in a WhatsApp Business Account
- Monitor phone number status and verification progress
- Check phone number quality ratings and messaging limits
- Retrieve phone number configuration details

**Filtering:**
You can filter results using the `filtering` parameter with JSON-encoded filter conditions.
Supported filters include account_mode, messaging_limit_tier, and is_official_business_account.

**Sorting:**
Results can be sorted by creation_time or last_onboarded_time in ascending or descending order.

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Phone number data can be cached for short periods, but status information may change
frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-account-phone-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through the business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned. Available fields include: id, display_phone_number,<br>verified_name, status, quality_rating, country_code, country_dial_code,<br>code_verification_status, unified_cert_status, account_mode, host_platform,<br>messaging_limit_tier, is_official_business_account, username<br>|
|filtering|query|string|false|JSON-encoded array of filter conditions. Each filter should specify field, operator, and value.<br>Supported fields: account_mode, messaging_limit_tier, is_official_business_account<br>|
|sort|query|string|false|Sort field and direction. Format: field_name.asc or field_name.desc<br>Supported fields: creation_time, last_onboarded_time<br>|
|limit|query|integer|false|Maximum number of phone numbers to return per page|
|after|query|string|false|Cursor for pagination - retrieve records after this cursor|
|before|query|string|false|Cursor for pagination - retrieve records before this cursor|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|creation_time.asc|
|sort|creation_time.desc|
|sort|last_onboarded_time.asc|
|sort|last_onboarded_time.desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1906385232743451",
      "display_phone_number": "+1 631-555-5555",
      "verified_name": "Jasper's Market",
      "status": "LINKED",
      "quality_rating": "GREEN",
      "country_code": "US",
      "country_dial_code": "1",
      "code_verification_status": "VERIFIED",
      "unified_cert_status": "APPROVED",
      "account_mode": "LIVE",
      "host_platform": "CLOUD_API",
      "messaging_limit_tier": "TIER_1K",
      "is_official_business_account": true,
      "username": "jaspers_market"
    },
    {
      "id": "1913623884432103",
      "display_phone_number": "+1 631-555-5556",
      "verified_name": "Jasper's Ice Cream",
      "status": "PENDING",
      "quality_rating": "UNKNOWN",
      "country_code": "US",
      "country_dial_code": "1",
      "code_verification_status": "NOT_VERIFIED",
      "unified_cert_status": "NAME_PENDING_REVIEW",
      "account_mode": "SANDBOX",
      "host_platform": "CLOUD_API",
      "messaging_limit_tier": "TIER_50",
      "is_official_business_account": false,
      "username": null
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE="
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: filtering must be valid JSON",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-account-phone-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Account phone numbers|[WhatsAppBusinessAccountPhoneNumbersConnection](#schemawhatsappbusinessaccountphonenumbersconnection)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create WhatsApp Business Account Phone Number

<a id="opIdcreateWhatsAppBusinessAccountPhoneNumber"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/phone_numbers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "phone_number": "16315551000",
    "verified_name": "My Business Name",
    "cc": "1"
  }'
```

`POST /{Version}/{WABA-ID}/phone_numbers`

Create a new phone number registration within a WhatsApp Business Account. This endpoint
initiates the phone number onboarding process, including verification and business name approval.

**Use Cases:**
- Add new phone numbers to a WhatsApp Business Account
- Migrate phone numbers from on-premises to Cloud API
- Register pre-verified phone numbers for BSP scenarios
- Initiate phone number verification and business name approval process

**Prerequisites:**
- WhatsApp Business Account must have available phone number slots
- Phone number must not be already registered with WhatsApp Business
- Business must meet WhatsApp Business API requirements
- Appropriate permissions and app review completion

**Process Flow:**
1. Submit phone number and business name for registration
2. Phone number verification code will be sent (if not pre-verified)
3. Business name will be submitted for review
4. Monitor status through GET endpoint until approval

**Rate Limiting:**
Phone number creation is subject to strict rate limits to prevent abuse.
Standard Graph API rate limits also apply.

**Migration Support:**
Set migrate_phone_number=true when migrating from on-premises API to Cloud API.
Additional validation and migration-specific logic will be applied.


> Body parameter

```json
{
  "phone_number": "16315551000",
  "verified_name": "My Business Name",
  "cc": "1"
}
```

<h3 id="create-whatsapp-business-account-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID where the phone number will be added.<br>This ID can be found in your WhatsApp Manager or through business management APIs.<br>|
|body|body|[PhoneNumberCreateRequest](#schemaphonenumbercreaterequest)|true|none|
|» phone_number|body|string|true|Phone number in E.164 format without the + prefix|
|» verified_name|body|string|true|Business name to be verified for this phone number|
|» cc|body|string|false|Country code for the phone number|
|» migrate_phone_number|body|boolean|false|Whether this is a phone number migration from on-premises|
|» preverified_id|body|string|false|Pre-verified phone number ID for BSP scenarios|

> Example responses

> 200 Response

```json
{
  "id": "1906385232743451"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number must be in E.164 format",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Phone number limit exceeded for this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349175,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Limit Exceeded",
    "error_user_msg": "You have reached the maximum number of phone numbers for this account"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 409 Response

```json
{
  "error": {
    "message": "Phone number is already registered with WhatsApp Business",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Phone number validation failed: invalid format",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Phone number creation rate limit exceeded",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446080,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="create-whatsapp-business-account-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created phone number registration|[PhoneNumberCreateResponse](#schemaphonenumbercreateresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or phone number limit exceeded|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|409|Conflict|Conflict - Phone number already exists or is in use|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-message-history">Message History</h1>

APIs for retrieving WhatsApp Business Account message history and delivery status information

## Get WhatsApp Business Account Message History

<a id="opIdgetMessageHistory"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/message_history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/message_history`

Retrieve paginated message history for a WhatsApp Business Account phone number,
including delivery status events, timestamps, and webhook update information.


**Use Cases:**
- Track message delivery status and events
- Monitor webhook delivery and update states
- Retrieve historical message delivery information
- Debug message delivery issues and webhook failures


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Message history data can be cached for moderate periods, but delivery status events
may change frequently. Implement appropriate cache invalidation strategies.


**Pagination:**
This endpoint supports cursor-based pagination. Use the `after` and `before` cursors
from the response to navigate through results.


<h3 id="get-whatsapp-business-account-message-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business Account phone number ID. This ID is provided when you register<br>the phone number and can be found in your WhatsApp Business Manager or through phone number APIs.<br>|
|message_id|query|string|false|Filter results by specific WhatsApp message ID (WAMID). When provided,<br>only message history for this specific message will be returned.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, message_id).<br>Available fields: id, message_id, events{delivery_status,webhook_update_state,timestamp,application,webhook_uri,error_description}<br>|
|limit|query|integer|false|Maximum number of message history entries to return per page.<br>Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>This value comes from the `paging.cursors.after` field in previous responses.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>This value comes from the `paging.cursors.before` field in previous responses.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",
      "events": {
        "data": [
          {
            "id": "2345678901234567",
            "delivery_status": "SENT",
            "timestamp": 1640995200,
            "webhook_update_state": "DELIVERED",
            "application": {
              "id": "9876543210987654"
            },
            "webhook_uri": "https://example.com/webhook"
          },
          {
            "id": "3456789012345678",
            "delivery_status": "DELIVERED",
            "timestamp": 1640995260,
            "webhook_update_state": "DELIVERED",
            "application": {
              "id": "9876543210987654"
            },
            "webhook_uri": "https://example.com/webhook"
          }
        ]
      }
    },
    {
      "id": "4567890123456789",
      "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTJHAA==",
      "events": {
        "data": [
          {
            "id": "5678901234567890",
            "delivery_status": "READ",
            "timestamp": 1640995320,
            "webhook_update_state": "DELIVERED",
            "application": {
              "id": "9876543210987654"
            },
            "webhook_uri": "https://example.com/webhook"
          }
        ]
      }
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE=",
      "before": "MAZDZD"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: message_id format is invalid",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access message history for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested message_id was not found in the message history",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-account-message-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Account message history|[MessageHistoryResponse](#schemamessagehistoryresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-phone-number-registration">Phone Number Registration</h1>

APIs for registering and managing WhatsApp Business phone numbers

## Register WhatsApp Business Phone Number

<a id="opIdregisterWhatsAppBusinessPhoneNumber"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "pin": "123456"
  }'
```

`POST /{Version}/{Phone-Number-ID}/register`

Register a WhatsApp Business phone number for messaging capabilities and enable
two-step verification. This is a required step before sending messages through
the WhatsApp Business Cloud API.


**Registration Process:**
1. Phone number must be in UNVERIFIED status
2. Provide a 6-digit PIN for two-step verification
3. Optionally provide backup data for account migration
4. Registration activates messaging capabilities


**Migration Support:**
For migrating from on-premises WhatsApp Business API, include backup data
with password and encrypted account information.


**Rate Limiting:**
Registration attempts are rate-limited to prevent abuse. Standard Graph API
rate limits apply with additional restrictions for registration endpoints.


**Security Requirements:**
- Two-step verification is mandatory for all registered numbers
- PIN must be securely stored and managed by the business
- Registration enables webhook delivery and message sending capabilities


> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "pin": "123456"
}
```

<h3 id="register-whatsapp-business-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The ID of the phone number to register. This ID is provided when the phone number<br>is added to your WhatsApp Business Account and can be found in WhatsApp Manager.<br>|
|body|body|[WhatsAppBusinessPhoneNumberRegistrationRequest](#schemawhatsappbusinessphonenumberregistrationrequest)|true|Registration request payload with PIN and optional migration data|
|» messaging_product|body|string|true|Must be 'whatsapp' to indicate WhatsApp Business messaging product|
|» pin|body|string|true|6-digit PIN for two-step verification setup|
|» backup|body|[WhatsAppBusinessAccountBackup](#schemawhatsappbusinessaccountbackup)|false|Backup data for migrating existing WhatsApp Business accounts|
|» data_localization_region|body|[WhatsAppDataLocalizationRegion](#schemawhatsappdatalocalizationregion)|false|Data localization region for message storage (deprecated in v21+)|
|» meta_store_retention_minutes|body|integer|false|Message retention period in minutes (deprecated in v21+)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» messaging_product|whatsapp|
|» data_localization_region|AE|
|» data_localization_region|AU|
|» data_localization_region|BH|
|» data_localization_region|BR|
|» data_localization_region|CA|
|» data_localization_region|CH|
|» data_localization_region|DE|
|» data_localization_region|GB|
|» data_localization_region|ID|
|» data_localization_region|IN|
|» data_localization_region|JP|
|» data_localization_region|KR|
|» data_localization_region|SG|
|» data_localization_region|ZA|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid PIN format. PIN must be exactly 6 digits",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to register this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Phone number is already registered or in invalid state for registration",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Registration rate limit exceeded",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred during registration. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="register-whatsapp-business-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully registered WhatsApp Business phone number|[WhatsAppBusinessPhoneNumberRegistrationResponse](#schemawhatsappbusinessphonenumberregistrationresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Phone number cannot be registered in current state|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-phone-number-verification">Phone Number Verification</h1>

APIs for WhatsApp Business phone number verification process

## Request Phone Number Verification Code

<a id="opIdrequestVerificationCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/request_code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code_method": "SMS",
    "language": "en_US"
  }'
```

`POST /{Version}/{Phone-Number-ID}/request_code`

Request a verification code for a WhatsApp Business phone number via SMS or voice call.
This is the first step in the phone number verification process.


**Use Cases:**
- Initial verification of newly added phone numbers
- Re-verification when phone number status requires it
- Switching between SMS and voice verification methods

**Rate Limiting:**
Standard Graph API rate limits apply. Additional rate limiting may be enforced
for verification code requests to prevent abuse.

**Security:**
Verification codes are sent only to the registered phone number and expire
after a short time period. Multiple failed attempts may result in temporary blocking.


> Body parameter

```json
{
  "code_method": "SMS",
  "language": "en_US"
}
```

<h3 id="request-phone-number-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>status entity (EntWhatsAppBusinessAccountToNumberCurrentStatus) and can be<br>obtained from your WhatsApp Business Account phone numbers list.<br>|
|body|body|[RequestCodeRequest](#schemarequestcoderequest)|true|Verification code request parameters|
|» code_method|body|string|true|Method for receiving the verification code|
|» language|body|string|true|Language locale for the verification message|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» code_method|SMS|
|» code_method|VOICE|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: code_method must be SMS or VOICE",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Phone number is not eligible for verification at this time",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="request-phone-number-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested verification code|[RequestCodeResponse](#schemarequestcoderesponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify Phone Number Verification Code

<a id="opIdverifyPhoneNumberCode"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/verify_code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "123456"
  }'
```

`POST /{Version}/{Phone-Number-ID}/verify_code`

Verify a phone number verification code for a WhatsApp Business Account phone number.
This endpoint is used to complete the phone number verification process by submitting
the verification code received via SMS or voice call.


**Use Cases:**
- Complete phone number verification during initial setup
- Verify phone number ownership for messaging capabilities
- Finalize phone number registration process
- Complete phone number migration verification


**Rate Limiting:**
Verification attempts are rate-limited to prevent abuse. Failed attempts may result
in temporary blocking. Use appropriate retry logic with exponential backoff.


**Security:**
Verification codes are time-limited (typically 10 minutes) and single-use.
Multiple failed attempts may trigger additional security measures.


> Body parameter

```json
{
  "code": "123456"
}
```

<h3 id="verify-phone-number-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|The WhatsApp Business Account phone number ID that needs verification.<br>This ID is provided when you add a phone number to your WhatsApp Business Account.<br>|
|body|body|[VerifyCodeRequest](#schemaverifycoderequest)|true|none|
|» code|body|string|true|6-digit verification code received via SMS or voice|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "success": true,
  "id": "1234567890123456"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid verification code format",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to verify this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The verification code is invalid or has expired",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Verification Failed",
    "error_user_msg": "The verification code you entered is invalid or has expired"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Too many verification attempts. Please try again later",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="verify-phone-number-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully verified the phone number verification code|[VerifyCodeResponse](#schemaverifycoderesponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Invalid or expired verification code|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-business-encryption">Business Encryption</h1>

APIs for managing WhatsApp Business Account encryption configuration

## Set Business Encryption Public Key

<a id="opIdsetBusinessEncryptionPublicKey"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_encryption \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'business_public_key=-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----
'
```

`POST /{Version}/{Phone-Number-ID}/whatsapp_business_encryption`

Upload and configure a business public key for message payload encryption.

This endpoint accepts a business public key in PEM format, validates it,
and stores it with a cryptographic signature for future use in encrypting
message payloads and data channel requests.

**Use Cases:**
- Initial setup of encryption for WhatsApp Business messaging
- Update existing public key for key rotation
- Enable secure payload encryption for sensitive business communications
- Configure encryption keys for compliance requirements

**Key Requirements:**
- Must be a valid RSA public key in PEM format
- Key must meet Meta's security standards for encryption
- Only one active public key per phone number at a time
- Previous keys are replaced when new ones are uploaded

**Rate Limiting:**
Standard Graph API rate limits apply. Key uploads may have additional
security-related rate limiting to prevent abuse.


> Body parameter

```yaml
business_public_key: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----\n"
```

<h3 id="set-business-encryption-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|body|body|[WhatsAppBusinessEncryptionUploadRequest](#schemawhatsappbusinessencryptionuploadrequest)|true|none|
|» business_public_key|body|string|true|The business public key in PEM format to be uploaded and signed.<br>Must be a valid RSA public key that will be used for payload encryption.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Business public key is invalid",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Invalid Public Key",
    "error_user_msg": "The provided public key format is invalid"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to modify encryption settings for this WhatsApp Business phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to modify this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Phone number is not eligible for encryption configuration",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="set-business-encryption-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully uploaded and configured business encryption public key|[WhatsAppBusinessEncryptionUploadResponse](#schemawhatsappbusinessencryptionuploadresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-profile">WhatsApp Business Profile</h1>

APIs for managing WhatsApp Business Profile information and settings

## Get WhatsApp Business Profile

<a id="opIdgetWhatsAppBusinessProfile"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/whatsapp_business_profile`

Retrieve comprehensive information about a WhatsApp Business Profile, including
business details, contact information, and profile settings.


**Use Cases:**
- Retrieve current business profile information
- Check business contact details and settings
- Verify business vertical and website information
- Get profile picture URL and about section


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Business profile information can be cached for moderate periods, but should be
refreshed periodically to ensure accuracy.


<h3 id="get-whatsapp-business-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>status entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (messaging_product, about, address, description, email, profile_picture_url, websites, vertical).<br>Available fields: messaging_product, about, address, description, email, profile_picture_url, websites, vertical<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "business_profile": {
        "messaging_product": "whatsapp",
        "about": "Welcome to our business! We provide excellent service.",
        "address": "123 Business Street, City, State 12345",
        "description": "We are a leading provider of quality products and services.",
        "email": "contact@business.com",
        "profile_picture_url": "https://pps.whatsapp.net/v/profile_picture_url",
        "websites": [
          "https://www.business.com",
          "https://www.facebook.com/business"
        ],
        "vertical": "RESTAURANT"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Profile",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Profile not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this profile",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Profile information|[WhatsAppBusinessProfileResponse](#schemawhatsappbusinessprofileresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone Number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update WhatsApp Business Profile

<a id="opIdupdateWhatsAppBusinessProfileInformation"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "about": "Welcome to our business! We provide excellent service.",
    "address": "123 Business Street, City, State 12345",
    "description": "We are a leading provider of quality products and services.",
    "email": "contact@business.com",
    "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",
    "websites": [
      "https://www.business.com",
      "https://www.facebook.com/business"
    ],
    "vertical": "RESTAURANT"
  }'
```

`POST /{Version}/{Phone-Number-ID}/whatsapp_business_profile`

Update WhatsApp Business Profile information including business details,
contact information, and profile settings.


**Use Cases:**
- Update business description and contact information
- Modify business address and website information
- Change business vertical classification
- Update profile picture using Resumable Upload API
- Update profile picture and about section


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Profile Picture Updates:**
To update the profile picture, first use the Resumable Upload API to obtain a
profile_picture_handle, then include it in the request.


> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "about": "Welcome to our business! We provide excellent service.",
  "address": "123 Business Street, City, State 12345",
  "description": "We are a leading provider of quality products and services.",
  "email": "contact@business.com",
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",
  "websites": [
    "https://www.business.com",
    "https://www.facebook.com/business"
  ],
  "vertical": "RESTAURANT"
}
```

<h3 id="update-whatsapp-business-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>status entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|body|body|[WhatsAppBusinessProfileUpdateRequest](#schemawhatsappbusinessprofileupdaterequest)|true|none|
|» messaging_product|body|string|true|The messaging service used for the request|
|» about|body|string|false|The text to display in business profile's About section|
|» address|body|string|false|The address of the business|
|» description|body|string|false|Description of the business|
|» email|body|string(email)|false|The contact email address of the business|
|» profile_picture_handle|body|string|false|The handle of the profile picture generated from Resumable Upload API|
|» websites|body|[string(uri)]|false|URLs associated with the business|
|» vertical|body|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|The industry type of the business|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|
|» vertical|OTHER|
|» vertical|AUTO|
|» vertical|BEAUTY|
|» vertical|APPAREL|
|» vertical|EDU|
|» vertical|ENTERTAIN|
|» vertical|EVENT_PLAN|
|» vertical|FINANCE|
|» vertical|GROCERY|
|» vertical|GOVT|
|» vertical|HOTEL|
|» vertical|HEALTH|
|» vertical|NONPROFIT|
|» vertical|PROF_SERVICES|
|» vertical|RETAIL|
|» vertical|TRAVEL|
|» vertical|RESTAURANT|
|» vertical|ALCOHOL|
|» vertical|ONLINE_GAMBLING|
|» vertical|PHYSICAL_GAMBLING|
|» vertical|OTC_DRUGS|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: email must be a valid email address",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to modify this WhatsApp Business Profile",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Profile not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The profile picture handle is invalid or expired",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-whatsapp-business-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated WhatsApp Business Profile|[WhatsAppBusinessProfileUpdateResponse](#schemawhatsappbusinessprofileupdateresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone Number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-business-compliance">Business Compliance</h1>

APIs for retrieving WhatsApp Business Account compliance information

## Get Business Compliance Information

<a id="opIdgetBusinessComplianceInfo"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/business_compliance_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/business_compliance_info`

Retrieve comprehensive business compliance information for a WhatsApp Business Account phone number,
including entity details, registration status, and required contact information for regulatory compliance.


**Use Cases:**
- Retrieve business compliance information for regulatory reporting
- Verify business entity registration status and contact details
- Access grievance officer and customer care information
- Support compliance audits and regulatory verification processes


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Compliance information can be cached for moderate periods, but should be refreshed regularly
to ensure accuracy for regulatory purposes. Implement appropriate cache invalidation strategies.


<h3 id="get-business-compliance-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business Account phone number ID. This ID can be found in your<br>WhatsApp Business Manager or through phone number management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned. Available fields: messaging_product, entity_name,<br>entity_type, entity_type_custom, is_registered, grievance_officer_details, customer_care_details<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "whatsapp_business_account_id": "1234567890123456",
      "messaging_product": "whatsapp",
      "entity_name": "Lucky Shrub Private Limited",
      "entity_type": "Partnership",
      "entity_type_custom": null,
      "is_registered": true,
      "grievance_officer_details": {
        "name": "Chandravati P.",
        "email": "chandravati@luckyshrub.com",
        "mobile_number": "+913854559033",
        "landline_number": "+913857614343"
      },
      "customer_care_details": {
        "email": "support@luckyshrub.com",
        "mobile_number": "+913854559033",
        "landline_number": "+913857614343"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this phone number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-business-compliance-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved business compliance information|Inline|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="get-business-compliance-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BusinessComplianceInfo](#schemabusinesscomplianceinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Business Compliance Information

<a id="opIdupdateBusinessComplianceInfo"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/business_compliance_info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "entity_name": "Lucky Shrub Private Limited",
    "entity_type": "PARTNERSHIP",
    "is_registered": true,
    "grievance_officer_details": {
      "name": "Chandravati P.",
      "email": "chandravati@luckyshrub.com",
      "mobile_number": "+913854559033",
      "landline_number": "+913857614343"
    },
    "customer_care_details": {
      "email": "support@luckyshrub.com",
      "mobile_number": "+913854559033",
      "landline_number": "+913857614343"
    }
  }'
```

`POST /{Version}/{Phone-Number-ID}/business_compliance_info`

Create or update comprehensive business compliance information for a WhatsApp Business Account phone number,
including entity details, registration status, and required contact information for regulatory compliance.


**Use Cases:**
- Set business compliance information for regulatory reporting
- Update business entity registration status and details
- Configure grievance officer and customer care contact information
- Ensure compliance data accuracy for regulatory purposes
- Support compliance setup for new business operations


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Validation Rules:**
- `entity_name` is required and must be between 2 and 128 characters
- `entity_type` is required and must be a valid entity type enum value
- `entity_type_custom` is mandatory when `entity_type` is "Other"
- `entity_type_custom` cannot be used with non-"Other" entity types
- `is_registered` can only be used with "Other" or "Partnership" entity types
- `grievance_officer_details` is required with complete contact information
- `customer_care_details` is required with contact information
- Phone numbers must be valid international format with country code
- Email addresses must be valid format and under 128 characters


> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "entity_name": "Lucky Shrub Private Limited",
  "entity_type": "PARTNERSHIP",
  "is_registered": true,
  "grievance_officer_details": {
    "name": "Chandravati P.",
    "email": "chandravati@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  },
  "customer_care_details": {
    "email": "support@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  }
}
```

<h3 id="update-business-compliance-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business Account phone number ID. This ID can be found in your<br>WhatsApp Business Manager or through phone number management APIs.<br>|
|body|body|[BusinessComplianceInfoUpdateRequest](#schemabusinesscomplianceinfoupdaterequest)|true|none|
|» messaging_product|body|string|true|Messaging product identifier, must be 'whatsapp'|
|» entity_name|body|string|true|Legal name of the business entity|
|» entity_type|body|[BusinessEntityType](#schemabusinessentitytype)|true|Type of business entity for compliance purposes|
|» entity_type_custom|body|string|false|Custom entity type description when entity_type is "OTHER". Required for OTHER entity type.|
|» is_registered|body|boolean|false|Whether the business entity is officially registered with regulatory authorities. Can only be used with "OTHER" or "PARTNERSHIP" entity types.|
|» grievance_officer_details|body|[GrievanceOfficerUpdateDetails](#schemagrievanceofficerupdatedetails)|true|Contact information for the designated grievance officer|
|» customer_care_details|body|[CustomerCareUpdateDetails](#schemacustomercareupdatedetails)|true|Contact information for customer care and support|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» messaging_product|whatsapp|
|» entity_type|LIMITED_LIABILITY_PARTNERSHIP|
|» entity_type|SOLE_PROPRIETORSHIP|
|» entity_type|PARTNERSHIP|
|» entity_type|PUBLIC_COMPANY|
|» entity_type|PRIVATE_COMPANY|
|» entity_type|OTHER|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: entity_type must be a valid enum value",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Entity type custom can only be used with OTHER entity type",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-business-compliance-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated business compliance information|Inline|
|400|Bad Request|Bad Request - Invalid parameters or validation errors|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="update-business-compliance-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the compliance information was successfully updated|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-message-history-events">Message History Events</h1>

APIs for retrieving WhatsApp Business Message History Events and delivery status occurrences

## Get WhatsApp Message History Events

<a id="opIdgetMessageHistoryEvents"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Message-History-ID}/events`

Retrieve paginated message delivery status events for a specific message history entry,
including delivery status occurrences, timestamps, and application information.


**Use Cases:**
- Track detailed message delivery status events and transitions
- Monitor delivery status occurrence timestamps
- Retrieve application information for delivery events
- Debug message delivery issues and status changes


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Message history events can be cached for short periods, but delivery status events
may change frequently. Implement appropriate cache invalidation strategies.


**Pagination:**
This endpoint supports cursor-based pagination. Use the `after` and `before` cursors
from the response to navigate through results.


<h3 id="get-whatsapp-message-history-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Message-History-ID|path|string|true|Your WhatsApp Business Message History ID. This ID is provided when you retrieve<br>message history and can be found through message history APIs.<br>|
|status_filter|query|[WhatsAppMessageDeliveryStatus](#schemawhatsappmessagedeliverystatus)|false|Filter results by specific delivery status. When provided,<br>only events with this delivery status will be returned.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (cursor, node{id,delivery_status,occurrence_timestamp}).<br>Available fields: cursor, node{id,delivery_status,error_description,occurrence_timestamp,status_timestamp,application}<br>|
|limit|query|integer|false|Maximum number of message history events to return per page.<br>Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>This value comes from the `paging.cursors.after` field in previous responses.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>This value comes from the `paging.cursors.before` field in previous responses.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status_filter|SENT|
|status_filter|DELIVERED|
|status_filter|READ|
|status_filter|FAILED|
|status_filter|DELETED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",
      "node": {
        "id": "2345678901234567",
        "delivery_status": "SENT",
        "occurrence_timestamp": 1640995200,
        "status_timestamp": 1640995205,
        "application": {
          "id": "9876543210987654",
          "name": "WhatsApp Business API Client"
        }
      }
    },
    {
      "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",
      "node": {
        "id": "3456789012345678",
        "delivery_status": "DELIVERED",
        "occurrence_timestamp": 1640995260,
        "status_timestamp": 1640995265,
        "application": {
          "id": "9876543210987654",
          "name": "WhatsApp Business API Client"
        }
      }
    },
    {
      "cursor": "MTAxNTExOTQ1MjAwNzI5NDM=",
      "node": {
        "id": "4567890123456789",
        "delivery_status": "READ",
        "occurrence_timestamp": 1640995320,
        "status_timestamp": 1640995325,
        "application": {
          "id": "9876543210987654",
          "name": "WhatsApp Business API Client"
        }
      }
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDM=",
      "before": "MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDM"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: status_filter must be a valid delivery status",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access message history events for this resource",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Message History not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this message history",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-message-history-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp message history events|[MessageHistoryEventsResponse](#schemamessagehistoryeventsresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Message History ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-migration-intent">Migration Intent</h1>

APIs for retrieving WhatsApp Business Account migration intent details

## Get Migration Intent Details

<a id="opIdgetMigrationIntentDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Migration-Intent-ID}`

Retrieve comprehensive details about a WhatsApp Business Account migration intent,
including its current status and migration information.


**Use Cases:**
- Monitor migration intent lifecycle and status changes
- Verify migration intent configuration and current state
- Check migration progress and completion status
- Retrieve migration intent details for business workflows


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Migration intent details can be cached for short periods, but status information may change
frequently during migration processes. Implement appropriate cache invalidation strategies.


<h3 id="get-migration-intent-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Migration-Intent-ID|path|string|true|Your Migration Intent ID. This ID is provided when you create the migration intent<br>and can be found through migration management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, status).<br>Available fields: id, status<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "status": "INITIATED"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: Migration-Intent-ID must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this migration intent",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Migration Intent not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this migration intent",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-migration-intent-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved migration intent details|[WhatsAppBusinessAccountMigrationIntent](#schemawhatsappbusinessaccountmigrationintent)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Migration Intent ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-pre-verified-phone-number-partners">Pre-Verified Phone Number Partners</h1>

APIs for managing partner businesses associated with pre-verified phone numbers

## Get Pre-Verified Phone Number Partners

<a id="opIdgetPreVerifiedPhoneNumberPartners"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/partners \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Pre-Verified-Phone-Number-ID}/partners`

Retrieve the list of partner businesses that have been granted access to a specific
WhatsApp Business Pre-Verified Phone Number.


**Use Cases:**
- Monitor partner business relationships and access permissions
- Verify which businesses have access to shared pre-verified phone numbers
- Retrieve partner business information for operational purposes
- Validate partnership configurations before business operations


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Partner information can be cached for moderate periods, but partnership relationships
may change. Implement appropriate cache invalidation strategies.


<h3 id="get-pre-verified-phone-number-partners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Pre-Verified-Phone-Number-ID|path|string|true|Your Pre-Verified Phone Number ID. This ID is provided when the pre-verified phone number<br>is created and can be found in your WhatsApp Business Account management interface.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name). Available fields: id, name, created_time,<br>updated_time, verification_status, primary_page, timezone_id, two_factor_type<br>|
|limit|query|integer|false|Maximum number of partner businesses to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use the 'after' cursor from a previous response to get the next page.<br>|
|before|query|string|false|Cursor for pagination. Use the 'before' cursor from a previous response to get the previous page.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Partner Business Solutions Inc",
      "verification_status": "verified",
      "created_time": "2023-01-15T10:30:00Z",
      "updated_time": "2023-06-20T14:45:30Z",
      "primary_page": "9876543210987654",
      "timezone_id": 1,
      "two_factor_type": "admin_required"
    },
    {
      "id": "2345678901234567",
      "name": "Global Commerce Partners LLC",
      "verification_status": "verified",
      "created_time": "2023-03-10T08:15:00Z",
      "updated_time": "2023-07-05T16:20:45Z",
      "primary_page": "8765432109876543",
      "timezone_id": 1,
      "two_factor_type": "admin_required"
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE=",
      "before": "MAZDZD"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: pre_verified_phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this Pre-Verified Phone Number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Pre-Verified Phone Number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this pre-verified phone number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-pre-verified-phone-number-partners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved partner businesses for the pre-verified phone number|[WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse](#schemawhatsappbusinesspreverifiedphonenumberpartnersresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Pre-Verified Phone Number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-solution-management">WhatsApp Business Solution Management</h1>

Operations for managing WhatsApp Business Multi-Partner Solutions including
lifecycle management, status transitions, and partnership workflows.


## Accept WhatsApp Business Solution Deactivation Request

<a id="opIdacceptWhatsAppBusinessSolutionDeactivationRequest"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/12345678901234567/accept_deactivation_request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{Version}/{Solution-ID}/accept_deactivation_request`

Accepts a pending deactivation request for a WhatsApp Business Multi-Partner Solution.


This endpoint completes the partner approval workflow by accepting a deactivation request
that was previously initiated by another solution partner. Upon successful acceptance,
the solution status transitions from ACTIVE to DEACTIVATED, and the pending request
status changes from PENDING_DEACTIVATION to NONE.


**Important Business Logic:**

- Solution must be in ACTIVE status with PENDING_DEACTIVATION pending status

- All outstanding payments and invoices must be settled before acceptance

- Active marketing campaigns must be concluded or transferred

- Webhook notifications will be sent to all solution partners upon completion

- Solution resources and permissions will be cleaned up according to policy


> Body parameter

```json
{}
```

<h3 id="accept-whatsapp-business-solution-deactivation-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version|
|Solution-ID|path|string|true|Unique identifier for the WhatsApp Business Solution|
|fields|query|string|false|Comma-separated list of fields to return in the response.<br><br><br>**Available Fields:** id, name, status, status_for_pending_request, owner_permissions<br><br><br>**Default Fields:** name, status, status_for_pending_request<br>|
|body|body|object|false|Empty request body - no parameters required for this endpoint|

> Example responses

> 200 Response

```json
{
  "id": "12345678901234567",
  "name": "Sample Business Solution Partnership",
  "status": "DEACTIVATED",
  "status_for_pending_request": "NONE",
  "owner_permissions": [
    "MANAGE",
    "DEVELOP"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid solution ID format provided",
    "type": "GraphAPIException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "FAKE_TRACE_ID_12345",
    "is_transient": false,
    "error_user_title": "Invalid Request",
    "error_user_msg": "The solution ID format is not valid. Please check your request parameters."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "FAKE_TRACE_ID_67890",
    "is_transient": false,
    "error_user_title": "Authentication Required",
    "error_user_msg": "Please provide a valid access token to access this resource."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "App does not have permission to access this solution",
    "type": "GraphMethodException",
    "code": 10,
    "error_subcode": 2018218,
    "fbtrace_id": "FAKE_TRACE_ID_11111",
    "is_transient": false,
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app does not have the required permissions to perform this action on the solution."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Solution not found or not accessible",
    "type": "GraphMethodException",
    "code": 803,
    "error_subcode": 1675030,
    "fbtrace_id": "FAKE_TRACE_ID_22222",
    "is_transient": false,
    "error_user_title": "Resource Not Found",
    "error_user_msg": "The requested solution could not be found or you do not have access to it."
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Solution is not in a valid state to accept deactivation requests",
    "type": "GraphMethodException",
    "code": 100,
    "error_subcode": 2207013,
    "fbtrace_id": "FAKE_TRACE_ID_33333",
    "is_transient": false,
    "error_user_title": "Request Cannot Be Processed",
    "error_user_msg": "The solution must be in ACTIVE status with a pending deactivation request to accept deactivation."
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "FAKE_TRACE_ID_44444",
    "is_transient": true,
    "error_user_title": "Rate Limit Exceeded",
    "error_user_msg": "Too many requests have been made. Please wait and try again later."
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred while processing your request",
    "type": "GraphAPIException",
    "code": 2,
    "error_subcode": 1349174,
    "fbtrace_id": "FAKE_TRACE_ID_55555",
    "is_transient": true,
    "error_user_title": "Service Temporarily Unavailable",
    "error_user_msg": "We're experiencing technical difficulties. Please try again in a few moments."
  }
}
```

<h3 id="accept-whatsapp-business-solution-deactivation-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deactivation request accepted successfully. Solution status updated to DEACTIVATED.<br>|[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)|
|400|Bad Request|Bad Request - Invalid request parameters or malformed solution ID format.<br>|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid, missing, or expired access token.<br>|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or app not authorized for this solution.<br>|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Solution ID does not exist or is not accessible to the requesting app.<br>|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Valid parameters but business logic prevents processing (e.g., wrong solution state, outstanding payments).<br>|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded. Use exponential backoff for retries.<br>|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error. Retry with exponential backoff if is_transient is true.<br>|[GraphAPIError](#schemagraphapierror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Number of seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-assigned-whatsapp-business-accounts">Assigned WhatsApp Business Accounts</h1>

APIs for managing assigned WhatsApp Business Accounts for users

## Get Assigned WhatsApp Business Accounts

<a id="opIdgetAssignedWhatsAppBusinessAccounts"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/assigned_whatsapp_business_accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{User-ID}/assigned_whatsapp_business_accounts`

Retrieve WhatsApp Business Accounts that have been assigned to a specific user.
This endpoint provides information about account assignments, permissions, and
current status corresponding to the GraphAssignedWhatsAppBusinessAccountsEdge node.


**Use Cases:**
- Retrieve all WhatsApp Business Accounts assigned to a user
- Check user permissions for specific accounts
- Monitor account assignment status and changes
- Validate user access before performing business operations


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Assignment information can be cached for short periods, but permissions and status
may change frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-assigned-whatsapp-business-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|User-ID|path|string|true|The user ID for whom to retrieve assigned WhatsApp Business Accounts.<br>This must be a valid user ID within your solution or partnership.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name, status).<br>Available fields: id, name, status, assignment_date, permissions, business_id, phone_numbers<br>|
|limit|query|integer|false|Maximum number of accounts to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Primary Business Account",
      "status": "ACTIVE",
      "assignment_date": "2023-10-15T14:30:00Z",
      "permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES"
      ],
      "business_id": "9876543210987654",
      "phone_numbers": [
        {
          "id": "1234567890",
          "display_phone_number": "+1 (555) 123-4567",
          "verified_name": "Primary Business",
          "status": "CONNECTED"
        }
      ]
    },
    {
      "id": "2345678901234567",
      "name": "Secondary Business Account",
      "status": "ACTIVE",
      "assignment_date": "2023-10-20T09:15:00Z",
      "permissions": [
        "VIEW_INSIGHTS",
        "MESSAGING"
      ],
      "business_id": "8765432109876543"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: user_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access assigned WhatsApp Business Accounts for this user",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "User not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this user",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-assigned-whatsapp-business-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved assigned WhatsApp Business Accounts|[AssignedAccountsResponse](#schemaassignedaccountsresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - User ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-account-numbers">WhatsApp Account Numbers</h1>

APIs for managing WhatsApp Account Number details and configuration

## Get WhatsApp Account Number Details

<a id="opIdgetWhatsAppAccountNumberDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WhatsApp-Account-Number-ID}`

Retrieve comprehensive details about a WhatsApp Account Number, including its current status,
verification information, quality rating, and configuration settings.

**Use Cases:**
- Monitor account number status and quality rating
- Verify account number configuration before messaging operations
- Check verification and approval status
- Retrieve display name and business profile information

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Account number details can be cached for short periods, but status information may change
frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-account-number-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Account-Number-ID|path|string|true|Your WhatsApp Account Number ID. This ID represents the account number entity<br>and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, display_phone_number, status).<br>Available fields: id, display_phone_number, verified_name, status, quality_rating,<br>country_code, country_dial_code, code_verification_status, name_status,<br>messaging_limit_tier, account_mode, certificate, is_official_business_account<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "display_phone_number": "+1 631-555-5555",
  "verified_name": "Jasper's Market",
  "status": "CONNECTED",
  "quality_rating": "GREEN",
  "country_code": "US",
  "country_dial_code": "1",
  "code_verification_status": "VERIFIED",
  "name_status": "APPROVED",
  "messaging_limit_tier": "TIER_1K",
  "account_mode": "LIVE",
  "is_official_business_account": false
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: account_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Account Number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Account Number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this account number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-account-number-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Account Number details|[WhatsAppAccountNumber](#schemawhatsappaccountnumber)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Account Number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-account-users">WhatsApp Business Account Users</h1>

APIs for managing user assignments and permissions for WhatsApp Business Accounts

## List Assigned Users

<a id="opIdgetAssignedUsers"></a>

> Code samples

```bash
curl 'https://graph.facebook.com/v23.0/1234567890123456/assigned_users?business=9876543210987654' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WhatsApp-Business-Account-ID}/assigned_users`

Retrieve a list of users assigned to the WhatsApp Business Account with their permissions
and user details. This endpoint supports pagination and filtering capabilities.


**Use Cases:**
- Audit user access to WhatsApp Business Account
- Retrieve user permission assignments for compliance
- List all users with access for management purposes
- Monitor user access patterns and assignments


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
User assignment data can be cached for short periods, but permission changes may occur
frequently. Implement appropriate cache invalidation strategies.


<h3 id="list-assigned-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Business-Account-ID|path|string|true|Your WhatsApp Business Account ID. This ID is provided when you create the account<br>and can be found in your Business Manager or through account management APIs.<br>|
|business|query|string|true|Business ID that owns or has access to the WhatsApp Business Account.<br>This parameter is required to specify the business context for user assignments.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name). Available fields: id, name, business, user_type<br>|
|limit|query|integer|false|Maximum number of assigned users to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "John Smith",
      "business": {
        "id": "9876543210987654",
        "name": "Example Business Inc"
      },
      "user_type": "BUSINESS_USER"
    },
    {
      "id": "2345678901234567",
      "name": "System User Bot",
      "business": {
        "id": "9876543210987654",
        "name": "Example Business Inc"
      },
      "user_type": "SYSTEM_USER"
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ",
      "before": "QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVVhF"
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/assigned_users?access_token=YOUR_SYSTEM_USER_ACCESS_TOKEN&limit=25&after=QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ"
  },
  "summary": {
    "total_count": 15
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "The parameter business is required to specify a business",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Need permission on WhatsAppBusinessAccount or this Business",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="list-assigned-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved assigned users list|[AssignedUsersResponse](#schemaassignedusersresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add User to WhatsApp Business Account

<a id="opIdaddAssignedUser"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/assigned_users \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'user=2345678901234567&tasks=%5B%22MANAGE%22%2C%22VIEW_INSIGHTS%22%5D'
```

`POST /{Version}/{WhatsApp-Business-Account-ID}/assigned_users`

Add a user to the WhatsApp Business Account with specified permission tasks.
This operation grants the user access to perform specific actions on the account
based on the provided permission tasks.


**Use Cases:**
- Grant user access to WhatsApp Business Account management
- Assign specific permission tasks for granular access control
- Add new team members to WhatsApp Business Account operations
- Configure user permissions for different business roles


**Permission Tasks:**
Different permission tasks grant access to different WhatsApp Business Account features:
- MANAGE: General account management permissions
- DEVELOP: Development and API access permissions
- MANAGE_TEMPLATES: Message template management
- MANAGE_PHONE: Phone number management
- MESSAGING: Send and receive messages
- FULL_CONTROL: Complete access to all account features


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


> Body parameter

```yaml
user: "2345678901234567"
tasks:
  - MANAGE
  - VIEW_INSIGHTS
```

<h3 id="add-user-to-whatsapp-business-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Business-Account-ID|path|string|true|Your WhatsApp Business Account ID. This ID is provided when you create the account<br>and can be found in your Business Manager or through account management APIs.<br>|
|body|body|object|true|none|
|» user|body|string|true|User ID of the person to add to the WhatsApp Business Account.<br>This must be a valid Facebook user ID.<br>|
|» tasks|body|[[WhatsAppBusinessAccountPermissionTask](#schemawhatsappbusinessaccountpermissiontask)]|true|Array of permission tasks to grant to the user. These tasks determine<br>what actions the user can perform on the WhatsApp Business Account.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tasks|MANAGE|
|» tasks|DEVELOP|
|» tasks|MANAGE_TEMPLATES|
|» tasks|MANAGE_PHONE|
|» tasks|VIEW_COST|
|» tasks|MANAGE_EXTENSIONS|
|» tasks|VIEW_PHONE_ASSETS|
|» tasks|MANAGE_PHONE_ASSETS|
|» tasks|VIEW_TEMPLATES|
|» tasks|VIEW_INSIGHTS|
|» tasks|RECEIVE_INCOMING_MESSAGES|
|» tasks|MANAGE_BILLING|
|» tasks|MANAGE_USERS|
|» tasks|MESSAGING|
|» tasks|FULL_CONTROL|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: user must be a valid user ID",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to add users to this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "User is already assigned to this WhatsApp Business Account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="add-user-to-whatsapp-business-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added user to WhatsApp Business Account|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID or User ID does not exist|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove User from WhatsApp Business Account

<a id="opIdremoveAssignedUser"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/assigned_users \
  -X DELETE \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'user=2345678901234567'
```

`DELETE /{Version}/{WhatsApp-Business-Account-ID}/assigned_users`

Remove a user's access from the WhatsApp Business Account. This operation revokes
all permissions and access rights for the specified user on the account.


**Use Cases:**
- Revoke user access when they leave the organization
- Remove temporary access grants
- Clean up user permissions for security compliance
- Manage user lifecycle and access control


**Important Notes:**
- This operation removes ALL permissions for the user on this WhatsApp Business Account
- The user will lose access to all account features and data
- This action cannot be undone - the user must be re-added if access is needed again
- Webhooks may be triggered to notify of user access changes


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


> Body parameter

```yaml
user: "2345678901234567"
```

<h3 id="remove-user-from-whatsapp-business-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Business-Account-ID|path|string|true|Your WhatsApp Business Account ID. This ID is provided when you create the account<br>and can be found in your Business Manager or through account management APIs.<br>|
|body|body|object|true|none|
|» user|body|string|true|User ID of the person to remove from the WhatsApp Business Account.<br>This must be a valid Facebook user ID that is currently assigned to the account.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: user must be a valid user ID",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to remove users from this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "User is not assigned to this WhatsApp Business Account",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Cannot remove user due to business asset group permissions",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="remove-user-from-whatsapp-business-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully removed user from WhatsApp Business Account|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID or User ID does not exist or is not assigned|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-conversational-automation">Conversational Automation</h1>

APIs for managing conversational automation settings and bot configurations

## Configure Conversational Automation

<a id="opIdconfigureConversationalAutomation"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/conversational_automation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enable_welcome_message": true,
    "prompts": [
      "How can I help you today?",
      "What product are you interested in?"
    ],
    "commands": []
  }'
```

`POST /{Version}/{Phone-Number-ID}/conversational_automation`

Configure conversational automation settings for a WhatsApp Business Account phone number,
including welcome messages, conversation prompts (ice breakers), and bot commands.


**Use Cases:**
- Set up automated welcome messages for new customer conversations
- Configure conversation prompts to guide customer interactions
- Define bot commands for common customer service scenarios
- Update existing automation settings
- Enable or disable specific automation features


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Validation:**
- Command names must be unique within the same phone number
- Prompts and command descriptions must comply with WhatsApp Business policies
- Maximum limits are enforced for prompts and commands


> Body parameter

```json
{
  "enable_welcome_message": true,
  "prompts": [
    "How can I help you today?",
    "What product are you interested in?"
  ],
  "commands": []
}
```

<h3 id="configure-conversational-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|body|body|[ConversationalAutomationRequest](#schemaconversationalautomationrequest)|true|none|
|» enable_welcome_message|body|boolean|false|Whether to enable welcome messages for new conversations|
|» prompts|body|[string]|false|List of conversation prompts (ice breakers) to help guide customer interactions|
|» commands|body|[[BotCommand](#schemabotcommand)]|false|List of bot commands for automated responses|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid command name format. Command names must contain only alphanumeric characters and underscores",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to manage conversational automation for this phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Phone number must be verified before configuring conversational automation",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="configure-conversational-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully configured conversational automation settings|[ConversationalAutomationResponse](#schemaconversationalautomationresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-account-on-behalf-requests">WhatsApp Business Account On-Behalf Requests</h1>

APIs for managing WhatsApp Business Account on-behalf requests and business relationships

## Get In-Progress On-Behalf Requests

<a id="opIdgetInProgressOnBehalfRequests"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/in_progress_onbehalf_request \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/in_progress_onbehalf_request`

Retrieve a list of in-progress on-behalf requests for the specified WhatsApp Business Account.
These requests represent pending business relationship requests that have been sent from
this WhatsApp Business Account to other businesses and are awaiting approval.


**Use Cases:**
- Monitor pending on-behalf requests sent from your WhatsApp Business Account
- Track business partnership request status and workflow
- Retrieve details about requesting and receiving businesses for pending requests
- Manage business relationship approval processes


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Pagination:**
This endpoint supports cursor-based pagination. Use the 'after' and 'before' parameters
to navigate through large result sets. The response includes pagination URLs for convenience.


<h3 id="get-in-progress-on-behalf-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|Your WhatsApp Business Account ID. This ID can be found in your WhatsApp Business<br>Manager or through the WhatsApp Business Account APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, status, business_owned_object).<br>Available fields: id, status, business_owned_object, receiving_business, requesting_business<br>|
|limit|query|integer|false|Maximum number of results to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for forward pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for backward pagination. Use this to get the previous page of results.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "status": "IN_PROGRESS",
      "business_owned_object": "9876543210987654",
      "receiving_business": {
        "id": "5678901234567890",
        "name": "Partner Business LLC"
      },
      "requesting_business": {
        "id": "2345678901234567",
        "name": "My Business Inc"
      }
    },
    {
      "id": "2345678901234567",
      "status": "IN_PROGRESS",
      "business_owned_object": "9876543210987654",
      "receiving_business": {
        "id": "3456789012345678",
        "name": "Another Partner Corp"
      },
      "requesting_business": {
        "id": "2345678901234567",
        "name": "My Business Inc"
      }
    }
  ],
  "paging": {
    "cursors": {
      "after": "CURSOR_AFTER_PLACEHOLDER",
      "before": "CURSOR_BEFORE_PLACEHOLDER"
    },
    "paging": {
      "next": "https://graph.facebook.com/v23.0/1234567890123456/in_progress_onbehalf_request?after=CURSOR_AFTER_PLACEHOLDER"
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: whatsapp_business_account_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this request",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-in-progress-on-behalf-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved in-progress on-behalf requests|[InProgressOnBehalfRequestResponse](#schemainprogressonbehalfrequestresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-obo-mobility-intent">OBO Mobility Intent</h1>

APIs for managing On-Behalf-Of mobility intent operations for WhatsApp Business Accounts

## Get OBO Mobility Intent Details

<a id="opIdgetOBOMobilityIntent"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{OBO-Mobility-Intent-ID}`

Retrieve details for a specific OBO Mobility Intent Node. This endpoint provides
comprehensive information about the mobility intent, including current status,
associated WABA and solution details, and operation history.


**Use Cases:**
- Monitor status of ongoing mobility operations
- Retrieve mobility intent configuration details
- Audit mobility operation progress
- Verify operation parameters and settings


**Response Fields:**
The response includes the complete OBO Mobility Intent Node with all available
fields including id, waba, solution, status, and timestamps.


<h3 id="get-obo-mobility-intent-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|OBO-Mobility-Intent-ID|path|string|true|OBO Mobility Intent Node ID. This ID identifies the specific mobility intent<br>configuration to retrieve.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields (id, waba, solution) will be returned.<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "waba": {
    "id": "1234567890123456",
    "name": "My Business Account",
    "status": "ACTIVE"
  },
  "solution": {
    "id": "2345678901234567",
    "name": "My Business Solution",
    "partner_id": "3456789012345678",
    "status": "ACTIVE"
  },
  "status": "ACTIVE",
  "created_time": "2024-01-15T10:30:00Z",
  "updated_time": "2024-01-15T14:45:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: OBO-Mobility-Intent-ID must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this OBO mobility intent",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "OBO Mobility Intent not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-obo-mobility-intent-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved OBO mobility intent details|[OBOMobilityIntentNode](#schemaobomobilityintentnode)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - OBO Mobility Intent ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create OBO Mobility Intent

<a id="opIdcreateOBOMobilityIntent"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/obo_mobility_intent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "solution_id": "2345678901234567",
    "intent_type": "INITIATE_TRANSFER",
    "target_solution_id": "3456789012345678",
    "mobility_reason": "Transferring account management to new solution provider",
    "metadata": {
      "partner_approval_id": "approval_123456",
      "business_justification": "Business restructuring"
    }
  }'
```

`POST /{Version}/{WABA-ID}/obo_mobility_intent`

Create a new On-Behalf-Of mobility intent for a WhatsApp Business Account.
This endpoint allows authorized solution providers to initiate mobility operations
on behalf of business accounts, facilitating transfers and handovers between
different solution providers.


**Use Cases:**
- Initiate account mobility process between solution providers
- Request handover of account management
- Schedule mobility operations for future execution
- Coordinate multi-partner solution transitions


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Mobility Process:**
1. Create mobility intent with appropriate intent type
2. System validates mobility eligibility and permissions
3. Intent enters PENDING status awaiting approvals
4. Partner notifications and approval workflows are triggered
5. Upon approval, mobility operation is scheduled or executed
6. Status updates are provided throughout the process


> Body parameter

```json
{
  "solution_id": "2345678901234567",
  "intent_type": "INITIATE_TRANSFER",
  "target_solution_id": "3456789012345678",
  "mobility_reason": "Transferring account management to new solution provider",
  "metadata": {
    "partner_approval_id": "approval_123456",
    "business_justification": "Business restructuring"
  }
}
```

<h3 id="create-obo-mobility-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID identifies the WABA for which the OBO<br>mobility intent is being created.<br>|
|body|body|[OBOMobilityIntentRequest](#schemaobomobilityintentrequest)|true|none|
|» solution_id|body|string|true|Unique identifier for the WhatsApp Business Solution|
|» intent_type|body|[MobilityIntentType](#schemamobilityintenttype)|true|Type of mobility intent operation|
|» target_solution_id|body|string|false|Target solution ID for mobility operations (required for transfers)|
|» mobility_reason|body|string|false|Reason for the mobility intent|
|» scheduled_execution_time|body|string(date-time)|false|Scheduled time for mobility execution (ISO 8601 format)|
|» metadata|body|object|false|Additional metadata for the mobility operation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» intent_type|INITIATE_TRANSFER|
|» intent_type|CONFIRM_TRANSFER|
|» intent_type|CANCEL_TRANSFER|
|» intent_type|REQUEST_HANDOVER|
|» intent_type|APPROVE_HANDOVER|
|» intent_type|REJECT_HANDOVER|

> Example responses

> 200 Response

```json
{
  "success": true,
  "mobility_intent_id": "obo_mobility_123456789",
  "status": "PENDING",
  "estimated_completion_time": "2024-12-01T12:00:00Z",
  "approval_required": true,
  "next_steps": [
    "Await partner approval",
    "Confirm transfer details"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: solution_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to create OBO mobility intent for this WABA",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account or Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "OBO mobility intent cannot be created for solution in current state",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="create-obo-mobility-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created OBO mobility intent|[OBOMobilityIntentResponse](#schemaobomobilityintentresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID or Solution ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set OBO Mobility Intent

<a id="opIdsetOBOMobilityIntent"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/set_obo_mobility_intent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "waba_id": "1234567890123456",
    "solution_id": "2345678901234567",
    "app_id": "3456789012345678",
    "client_mutation_id": "obo_mobility_intent_mutation_123"
  }'
```

`POST /{Version}/{WABA-ID}/set_obo_mobility_intent`

Set On-Behalf-Of (OBO) mobility intent for a Multi-Partner Solution associated with
a WhatsApp Business Account. This endpoint enables solution providers to establish
OBO relationships for managing client WhatsApp Business Accounts.


**Use Cases:**
- Enable solution provider management of client WABA operations
- Establish OBO relationships for business messaging solutions
- Configure cross-platform mobility for WhatsApp Business messaging
- Set up solution provider access to client accounts
- Manage client onboarding for solution provider services


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
OBO mobility intent settings are cached for performance. Changes may take a few minutes
to propagate across all systems. Implement appropriate cache invalidation strategies.


> Body parameter

```json
{
  "waba_id": "1234567890123456",
  "solution_id": "2345678901234567",
  "app_id": "3456789012345678",
  "client_mutation_id": "obo_mobility_intent_mutation_123"
}
```

<h3 id="set-obo-mobility-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|Your WhatsApp Business Account ID. This ID can be found in your Business Manager<br>or through the WhatsApp Business Account management APIs.<br>|
|body|body|[SetOBOMobilityIntentRequest](#schemasetobomobilityintentrequest)|true|OBO mobility intent configuration data|
|» waba_id|body|string|true|WhatsApp Business Account ID for which to set OBO mobility intent|
|» solution_id|body|string|false|Unique identifier for the Multi-Partner Solution|
|» app_id|body|string|false|Application ID requesting OBO mobility intent|
|» actor_id|body|string|false|Actor ID performing the OBO mobility intent operation|
|» client_mutation_id|body|string|false|Client-provided mutation identifier for request tracking|

> Example responses

> 200 Response

```json
{
  "success": true,
  "intent_id": "obo_intent_987654321",
  "client_mutation_id": "obo_mobility_intent_mutation_123",
  "error_msg": null
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: waba_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to set OBO mobility intent for this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Cannot set OBO mobility intent: solution configuration is invalid",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="set-obo-mobility-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully set OBO mobility intent|[SetOBOMobilityIntentResponse](#schemasetobomobilityintentresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-schedule-management">Schedule Management</h1>

APIs for managing WhatsApp Business Account schedules and scheduling configurations

## Get WhatsApp Business Account Schedules

<a id="opIdgetWhatsAppBusinessAccountSchedules"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/schedules`

Retrieve all schedules associated with a WhatsApp Business Account, including their
configuration, status, and execution details.

**Use Cases:**
- List all schedules in a WhatsApp Business Account
- Monitor schedule status and performance
- Check schedule configuration and timing details
- Retrieve schedule execution history and metrics

**Filtering:**
You can filter results using the `filtering` parameter with JSON-encoded filter conditions.
Supported filters include status, schedule_type, and is_active.

**Sorting:**
Results can be sorted by created_time or updated_time in ascending or descending order.

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Schedule data can be cached for short periods, but status information may change
frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-account-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through the business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned. Available fields include: id, name, status,<br>schedule_type, description, start_time, end_time, timezone, days_of_week,<br>created_time, updated_time, is_active, recurrence_pattern<br>|
|filtering|query|string|false|JSON-encoded array of filter conditions. Each filter should specify field, operator, and value.<br>Supported fields: status, schedule_type, is_active<br>|
|sort|query|string|false|Sort field and direction. Format: field_name.asc or field_name.desc<br>Supported fields: created_time, updated_time<br>|
|limit|query|integer|false|Maximum number of schedules to return per page|
|after|query|string|false|Cursor for pagination - retrieve records after this cursor|
|before|query|string|false|Cursor for pagination - retrieve records before this cursor|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|created_time.asc|
|sort|created_time.desc|
|sort|updated_time.asc|
|sort|updated_time.desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Business Hours Schedule",
      "status": "ACTIVE",
      "schedule_type": "BUSINESS_HOURS",
      "description": "Standard business operating hours",
      "start_time": "09:00",
      "end_time": "17:00",
      "timezone": "America/New_York",
      "days_of_week": [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY"
      ],
      "created_time": "2024-01-15T10:30:00Z",
      "updated_time": "2024-01-20T14:45:00Z",
      "is_active": true,
      "recurrence_pattern": {
        "frequency": "WEEKLY",
        "interval": 1
      }
    },
    {
      "id": "2345678901234567",
      "name": "Weekend Maintenance",
      "status": "INACTIVE",
      "schedule_type": "MAINTENANCE_WINDOW",
      "description": "System maintenance window",
      "start_time": "02:00",
      "end_time": "04:00",
      "timezone": "UTC",
      "days_of_week": [
        "SATURDAY",
        "SUNDAY"
      ],
      "created_time": "2024-01-10T08:00:00Z",
      "updated_time": "2024-01-15T12:00:00Z",
      "is_active": false
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxNTExOTQ1MjAwNzI5NDE="
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: filtering must be valid JSON",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-account-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Account schedules|[WhatsAppBusinessAccountSchedulesConnection](#schemawhatsappbusinessaccountschedulesconnection)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create WhatsApp Business Account Schedule

<a id="opIdcreateWhatsAppBusinessAccountSchedule"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Business Hours Schedule",
    "schedule_type": "BUSINESS_HOURS",
    "description": "Standard business operating hours",
    "start_time": "09:00",
    "end_time": "17:00",
    "timezone": "America/New_York",
    "days_of_week": [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY"
    ],
    "is_active": true,
    "recurrence_pattern": {
      "frequency": "WEEKLY",
      "interval": 1
    }
  }'
```

`POST /{Version}/{WABA-ID}/schedules`

Create a new schedule configuration within a WhatsApp Business Account. This endpoint
allows businesses to set up automated scheduling for various operations such as business hours,
automated responses, and maintenance windows.

**Use Cases:**
- Create business hours schedules for automated responses
- Set up maintenance windows for system operations
- Configure automated message campaigns with timing
- Establish recurring schedule patterns for business operations

**Prerequisites:**
- WhatsApp Business Account must have scheduling feature enabled
- Appropriate permissions for schedule management
- Valid timezone and time format specifications
- Business must meet WhatsApp Business API requirements

**Process Flow:**
1. Submit schedule configuration with timing and recurrence details
2. System validates schedule parameters and conflicts
3. Schedule is created and activated based on is_active flag
4. Monitor schedule status through GET endpoint

**Rate Limiting:**
Schedule creation is subject to rate limits to prevent abuse.
Standard Graph API rate limits also apply.

**Validation:**
- Start time must be before end time
- Timezone must be valid IANA timezone identifier
- Days of week must be valid if specified
- Recurrence pattern must be consistent with schedule type


> Body parameter

```json
{
  "name": "Business Hours Schedule",
  "schedule_type": "BUSINESS_HOURS",
  "description": "Standard business operating hours",
  "start_time": "09:00",
  "end_time": "17:00",
  "timezone": "America/New_York",
  "days_of_week": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY"
  ],
  "is_active": true,
  "recurrence_pattern": {
    "frequency": "WEEKLY",
    "interval": 1
  }
}
```

<h3 id="create-whatsapp-business-account-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID where the schedule will be created.<br>This ID can be found in your WhatsApp Manager or through business management APIs.<br>|
|body|body|[ScheduleCreateRequest](#schemaschedulecreaterequest)|true|none|
|» name|body|string|true|Human-readable name for the schedule|
|» schedule_type|body|[WhatsAppScheduleType](#schemawhatsappscheduletype)|true|Type of schedule configuration|
|» description|body|string|false|Optional description of the schedule purpose|
|» start_time|body|string(time)|true|Schedule start time in HH:MM format|
|» end_time|body|string(time)|true|Schedule end time in HH:MM format|
|» timezone|body|string|false|Timezone identifier for the schedule|
|» days_of_week|body|[[DayOfWeek](#schemadayofweek)]|false|Days of the week when the schedule is active|
|» is_active|body|boolean|false|Whether the schedule should be active upon creation|
|» recurrence_pattern|body|[RecurrencePattern](#schemarecurrencepattern)|false|Pattern for recurring schedules|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» schedule_type|BUSINESS_HOURS|
|» schedule_type|AUTOMATED_RESPONSE|
|» schedule_type|MESSAGE_CAMPAIGN|
|» schedule_type|MAINTENANCE_WINDOW|
|» schedule_type|CUSTOM|
|» days_of_week|MONDAY|
|» days_of_week|TUESDAY|
|» days_of_week|WEDNESDAY|
|» days_of_week|THURSDAY|
|» days_of_week|FRIDAY|
|» days_of_week|SATURDAY|
|» days_of_week|SUNDAY|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: start_time must be before end_time",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Schedule limit exceeded for this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349175,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Limit Exceeded",
    "error_user_msg": "You have reached the maximum number of schedules for this account"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 409 Response

```json
{
  "error": {
    "message": "Schedule name already exists in this WhatsApp Business Account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Schedule validation failed: invalid timezone identifier",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Schedule creation rate limit exceeded",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446080,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="create-whatsapp-business-account-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created schedule|[ScheduleCreateResponse](#schemaschedulecreateresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or schedule limit exceeded|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|409|Conflict|Conflict - Schedule name already exists or time conflict|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-solution-migration">Solution Migration</h1>

APIs for managing Multi-Partner Solution migration processes

## Set Solution Migration Intent

<a id="opIdsetSolutionMigrationIntent"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/set_solution_migration_intent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "solution_id": "1234567890123456",
    "migration_intent": "INITIATE_MIGRATION",
    "target_solution_id": "2345678901234567",
    "migration_reason": "Migrating to new solution provider for enhanced features"
  }'
```

`POST /{Version}/{WABA-ID}/set_solution_migration_intent`

Set migration intent for a Multi-Partner Solution associated with a WhatsApp Business Account.
This endpoint allows solution partners to initiate, schedule, confirm, or cancel migration
processes for their solutions.


**Use Cases:**
- Initiate migration process for solution transitions
- Schedule migration for a specific time
- Confirm pending migration requests
- Cancel previously set migration intents


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Migration Process:**
1. Set migration intent with INITIATE_MIGRATION
2. System validates migration eligibility
3. Migration intent enters PENDING status
4. Partner can schedule or confirm migration
5. Migration executes at scheduled time or immediately upon confirmation


> Body parameter

```json
{
  "solution_id": "1234567890123456",
  "migration_intent": "INITIATE_MIGRATION",
  "target_solution_id": "2345678901234567",
  "migration_reason": "Migrating to new solution provider for enhanced features"
}
```

<h3 id="set-solution-migration-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID identifies the WABA for which the solution<br>migration intent is being set.<br>|
|body|body|[SetSolutionMigrationIntentRequest](#schemasetsolutionmigrationintentrequest)|true|none|
|» solution_id|body|string|true|Unique identifier for the Multi-Partner Solution|
|» migration_intent|body|[SolutionMigrationIntent](#schemasolutionmigrationintent)|true|Intent for solution migration|
|» target_solution_id|body|string|false|Target solution ID for migration (required for certain migration intents)|
|» migration_reason|body|string|false|Reason for the migration intent|
|» scheduled_migration_time|body|string(date-time)|false|Scheduled time for migration execution (ISO 8601 format)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» migration_intent|INITIATE_MIGRATION|
|» migration_intent|CANCEL_MIGRATION|
|» migration_intent|CONFIRM_MIGRATION|
|» migration_intent|SCHEDULE_MIGRATION|

> Example responses

> 200 Response

```json
{
  "success": true,
  "migration_intent_id": "migration_intent_123456789",
  "status": "PENDING",
  "estimated_completion_time": "2024-12-01T12:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: solution_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to set migration intent for this solution",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account or Solution not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Migration intent cannot be set for solution in current state",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="set-solution-migration-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully set solution migration intent|[SetSolutionMigrationIntentResponse](#schemasetsolutionmigrationintentresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID or Solution ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-webhook-subscriptions">Webhook Subscriptions</h1>

APIs for managing WhatsApp Business Account webhook subscriptions

## Get All Subscriptions for a WABA

<a id="opIdgetAllSubscriptionsForAWaba"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/subscribed_apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/subscribed_apps`

Retrieve a list of all applications currently subscribed to webhook events
for the specified WhatsApp Business Account.


**Use Cases:**
- Monitor which apps are subscribed to WABA webhook events
- Audit subscription configurations and permissions
- Verify subscription status before making changes
- Retrieve subscription details for troubleshooting


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Subscription data can be cached for short periods, but may change when apps
subscribe or unsubscribe. Implement appropriate cache invalidation strategies.


<h3 id="get-all-subscriptions-for-a-waba-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned. Available fields: id, name, link<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "whatsapp_business_api_data": {
        "id": "1234567890123456",
        "name": "Business Messaging App",
        "link": "https://www.facebook.com/games/?app_id=1234567890123456"
      }
    },
    {
      "whatsapp_business_api_data": {
        "id": "2345678901234567",
        "name": "Customer Support Bot",
        "link": "https://www.facebook.com/games/?app_id=2345678901234567"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: WABA-ID must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this subscription",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-all-subscriptions-for-a-waba-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved list of subscribed applications|[SubscribedAppsResponse](#schemasubscribedappsresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Subscribe to WABA Webhooks

<a id="opIdsubscribeToWabaWebhooks"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/subscribed_apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /{Version}/{WABA-ID}/subscribed_apps`

Subscribe your application to webhook events for the specified WhatsApp Business Account.
This enables your app to receive real-time notifications for events such as message
deliveries, status updates, and other WABA activities.


**Use Cases:**
- Enable webhook notifications for your app
- Configure custom callback URLs for webhook delivery
- Set up webhook verification tokens for security
- Override default app webhook settings for specific WABAs


**Rate Limiting:**
Standard Graph API rate limits apply. Subscription operations may have additional
throttling to prevent abuse.


**Security:**
Always use HTTPS endpoints for webhook callbacks. Verify webhook authenticity
using the provided verification tokens and signature validation.


> Body parameter

```json
{}
```

<h3 id="subscribe-to-waba-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through business management APIs.<br>|
|body|body|[SubscriptionRequest](#schemasubscriptionrequest)|false|Optional configuration for webhook subscription|
|» override_callback_uri|body|string|false|Custom webhook callback URL to override app default|
|» verify_token|body|string|false|Verification token for webhook security|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid callback URI format",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to subscribe to this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Webhook callback URL is not reachable or invalid",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="subscribe-to-waba-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully subscribed to WABA webhooks|[SubscriptionResponse](#schemasubscriptionresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Unsubscribe from WABA Webhooks

<a id="opIdunsubscribeFromWabaWebhooks"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/subscribed_apps \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{WABA-ID}/subscribed_apps`

Unsubscribe your application from webhook events for the specified WhatsApp Business Account.
This will stop your app from receiving webhook notifications for this WABA.


**Use Cases:**
- Disable webhook notifications when no longer needed
- Clean up subscriptions during app decommissioning
- Temporarily disable webhooks for maintenance
- Remove subscriptions for WABAs no longer managed by your app


**Rate Limiting:**
Standard Graph API rate limits apply. Unsubscription operations are typically
processed immediately.


**Important:**
Unsubscribing will immediately stop all webhook deliveries for this WABA.
Ensure your application can handle the cessation of webhook events gracefully.


<h3 id="unsubscribe-from-waba-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through business management APIs.<br>|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: WABA-ID must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to unsubscribe from this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found or not subscribed",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "Cannot unsubscribe: subscription is required for active integrations",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="unsubscribe-from-waba-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unsubscribed from WABA webhooks|[SubscriptionResponse](#schemasubscriptionresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WABA ID does not exist or subscription not found|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-account-activities">WhatsApp Business Account Activities</h1>

APIs for retrieving WhatsApp Business Account activity logs and audit trails

## Get WhatsApp Business Account Activities

<a id="opIdgetWhatsAppBusinessAccountActivities"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/activities`

Retrieve activity logs and audit trails for a WhatsApp Business Account.
This endpoint returns a chronological list of activities performed on the account,
including administrative actions, configuration changes, and operational events.

**Use Cases:**
- Monitor account configuration changes and administrative actions
- Generate compliance and audit reports for regulatory requirements
- Track user activities and permission modifications
- Investigate security incidents and unauthorized access attempts
- Monitor API usage patterns and operational events

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Activity data can be cached for short periods, but recent activities may change
frequently. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-account-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|Your WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager<br>or through the business account management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, activity_type, timestamp, actor_type).<br>Available fields: id, activity_type, timestamp, actor_type, actor_id, actor_name, description, details, ip_address, user_agent<br>|
|limit|query|integer|false|Maximum number of activity records to return per page. Default is 25, maximum is 100.<br>|
|after|query|string|false|Cursor for pagination. Use this to get the next page of results.<br>|
|before|query|string|false|Cursor for pagination. Use this to get the previous page of results.<br>|
|since|query|string|false|Unix timestamp or ISO 8601 date string. Only return activities that occurred after this time.<br>|
|until|query|string|false|Unix timestamp or ISO 8601 date string. Only return activities that occurred before this time.<br>|
|activity_type|query|string|false|Filter activities by type. Can be a single type or comma-separated list of types.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "activity_type": "PHONE_NUMBER_VERIFIED",
      "timestamp": "2023-10-15T14:30:00Z",
      "actor_type": "USER",
      "actor_id": "9876543210987654",
      "actor_name": "John Smith",
      "description": "Phone number +1234567890 was successfully verified",
      "details": {
        "phone_number": "+1234567890",
        "verification_method": "SMS"
      },
      "ip_address": "192.168.1.100"
    },
    {
      "id": "1234567890123457",
      "activity_type": "USER_ADDED",
      "timestamp": "2023-10-15T13:15:00Z",
      "actor_type": "ADMIN",
      "actor_id": "1111222233334444",
      "actor_name": "Admin User",
      "description": "New user Jane Doe was added to the account",
      "details": {
        "user_id": "5555666677778888",
        "user_name": "Jane Doe",
        "role": "DEVELOPER"
      }
    }
  ],
  "paging": {
    "cursors": {
      "after": "NDMyNzQyODI3OTQw",
      "before": "MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "next": "https://graph.facebook.com/v23.0/1234567890123456/activities?limit=25&after=NDMyNzQyODI3OTQw"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: limit must be between 1 and 100",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access WhatsApp Business Account activities",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested date range is too large. Maximum range is 90 days",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-account-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Account activities|[ActivityList](#schemaactivitylist)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-account">WhatsApp Business Account</h1>

APIs for managing WhatsApp Business Account details and configuration

## Get WhatsApp Business Account Details

<a id="opIdgetWhatsAppBusinessAccountDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}`

Retrieve comprehensive details about a WhatsApp Business Account, including its
configuration, status, and settings.

**Use Cases:**
- Retrieve WhatsApp Business Account configuration and details
- Monitor account status and verification state
- Check account ownership and business information
- Validate account state before messaging operations

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Account details can be cached for moderate periods, but verification status may change.
Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|Your WhatsApp Business Account ID. This ID is provided when you create the account<br>and can be found in your WhatsApp Manager or through business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id, name). Available fields: id, name, timezone_id,<br>message_template_namespace, account_review_status, business_verification_status,<br>country, ownership_type, primary_business_location<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "name": "My Business WhatsApp Account",
  "timezone_id": "1",
  "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",
  "account_review_status": "APPROVED",
  "business_verification_status": "VERIFIED",
  "country": "US",
  "ownership_type": "SELF_OWNED",
  "primary_business_location": "US"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: whatsapp_business_account_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this account",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Account details|[WhatsAppBusinessAccount](#schemawhatsappbusinessaccount)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update WhatsApp Business Account

<a id="opIdupdateWhatsAppBusinessAccount"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Updated Business Name"
  }'
```

`POST /{Version}/{WABA-ID}`

Update configuration and settings for a WhatsApp Business Account.

**Use Cases:**
- Update WhatsApp Business Account name and configuration
- Modify account settings and preferences
- Update business information and verification details

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


> Body parameter

```json
{
  "name": "Updated Business Name"
}
```

<h3 id="update-whatsapp-business-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-ID|path|string|true|Your WhatsApp Business Account ID. This ID is provided when you create the account<br>and can be found in your WhatsApp Manager or through business management APIs.<br>|
|body|body|object|true|none|
|» name|body|string|false|Updated name for the WhatsApp Business Account|
|» timezone_id|body|string|false|Updated timezone identifier for the WhatsApp Business Account|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: name must be a non-empty string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to modify this WhatsApp Business Account",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to modify this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Account not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The account cannot be updated at this time",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-whatsapp-business-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated WhatsApp Business Account|Inline|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Account ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="update-whatsapp-business-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-bot">WhatsApp Business Bot</h1>

APIs for managing WhatsApp Business Bot configuration and details

## Get WhatsApp Business Bot Details

<a id="opIdgetWhatsAppBusinessBotDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-Bot-ID}`

Retrieve comprehensive details about a WhatsApp Business Bot, including its prompts,
commands, and welcome message configuration.


**Use Cases:**
- Retrieve bot configuration and automated response settings
- Monitor available bot commands and their descriptions
- Check welcome message enablement status
- Validate bot state before implementing automation
- Audit bot configuration for business compliance


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Bot details can be cached for moderate periods, but configuration may change
when bot settings are updated. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-bot-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WABA-Bot-ID|path|string|true|Your WhatsApp Business Bot ID. This ID is provided when you create the bot<br>and can be found in your Business Manager or through bot management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (prompts, commands, enable_welcome_message).<br>Available fields: id, prompts, commands, enable_welcome_message<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "prompts": [
    "Welcome to our customer service!",
    "How can I assist you today?",
    "Please select from the options below"
  ],
  "commands": [
    {
      "command_name": "help",
      "command_description": "Display available commands and help information"
    },
    {
      "command_name": "status",
      "command_description": "Check your order status"
    },
    {
      "command_name": "support",
      "command_description": "Connect with customer support"
    }
  ],
  "enable_welcome_message": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: waba_bot_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Bot",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Bot not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this bot",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-bot-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Bot details|[WhatsAppBusinessBot](#schemawhatsappbusinessbot)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Bot ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-whatsapp-business-profiles">WhatsApp Business Profiles</h1>

APIs for managing WhatsApp Business Profile details and configuration

## Get WhatsApp Business Profile Details

<a id="opIdgetWhatsAppBusinessProfileDetails"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WhatsApp-Business-Profile-ID}`

Retrieve comprehensive details about a WhatsApp Business Profile, including business information,
contact details, and profile configuration.


**Use Cases:**
- Retrieve business profile information and metadata
- Verify profile configuration and contact details
- Check profile status and business information
- Validate profile state before business operations


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


**Caching:**
Profile details can be cached for moderate periods, but business information may change
occasionally. Implement appropriate cache invalidation strategies.


<h3 id="get-whatsapp-business-profile-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Business-Profile-ID|path|string|true|Your WhatsApp Business Profile ID. This ID is provided when the profile is created<br>and can be found in your WhatsApp Business Manager or through business management APIs.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>default fields will be returned (id and any available profile fields).<br>Available fields: id, account_name, description, email, about, address, vertical, websites, profile_picture_url, messaging_product<br>|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "account_name": "E-commerce Business Account",
  "description": "Leading e-commerce platform for quality products",
  "email": "contact@business-example.com",
  "about": "Quality products delivered worldwide",
  "address": "123 Business Street, Commerce City, CC 12345",
  "vertical": "RETAIL",
  "websites": [
    "https://www.business-example.com",
    "https://shop.business-example.com"
  ],
  "profile_picture_url": "https://pps.whatsapp.net/v/profile-picture-url",
  "messaging_product": "whatsapp"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: whatsapp_business_profile_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business Profile",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Profile not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this profile",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-whatsapp-business-profile-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved WhatsApp Business Profile details|[WhatsAppBusinessProfileNode](#schemawhatsappbusinessprofilenode)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Profile ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update WhatsApp Business Profile

<a id="opIdupdateWhatsAppBusinessProfile"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "account_name": "Updated E-commerce Business",
    "description": "Updated leading e-commerce platform for premium products",
    "email": "updated-contact@business-example.com",
    "about": "Premium products delivered worldwide with excellent service",
    "address": "456 Updated Business Avenue, Commerce City, CC 54321",
    "vertical": "RETAIL",
    "websites": [
      "https://www.updated-business-example.com",
      "https://shop.updated-business-example.com"
    ],
    "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU"
  }'
```

`POST /{Version}/{WhatsApp-Business-Profile-ID}`

Update the WhatsApp Business Profile information such as business description, email, address,
and other profile details. This operation corresponds to the GraphWhatsAppBusinessProfilePost functionality.


**Use Cases:**
- Update business profile information and metadata
- Modify contact details and business description
- Change business vertical classification
- Update website URLs and profile picture
- Maintain current business profile information


**Profile Picture Upload:**
It is recommended to use the Resumable Upload API to obtain an upload ID, then use this
upload ID to obtain the picture handle for the `profile_picture_handle` field.


**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.


> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "account_name": "Updated E-commerce Business",
  "description": "Updated leading e-commerce platform for premium products",
  "email": "updated-contact@business-example.com",
  "about": "Premium products delivered worldwide with excellent service",
  "address": "456 Updated Business Avenue, Commerce City, CC 54321",
  "vertical": "RETAIL",
  "websites": [
    "https://www.updated-business-example.com",
    "https://shop.updated-business-example.com"
  ],
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU"
}
```

<h3 id="update-whatsapp-business-profile-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|WhatsApp-Business-Profile-ID|path|string|true|Your WhatsApp Business Profile ID. This ID is provided when the profile is created<br>and can be found in your WhatsApp Business Manager or through business management APIs.<br>|
|body|body|[WhatsAppBusinessProfileUpdateRequest](#schemawhatsappbusinessprofileupdaterequest)|true|none|
|» messaging_product|body|string|true|The messaging service used for the request|
|» about|body|string|false|The text to display in business profile's About section|
|» address|body|string|false|The address of the business|
|» description|body|string|false|Description of the business|
|» email|body|string(email)|false|The contact email address of the business|
|» profile_picture_handle|body|string|false|The handle of the profile picture generated from Resumable Upload API|
|» websites|body|[string(uri)]|false|URLs associated with the business|
|» vertical|body|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|The industry type of the business|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» messaging_product|whatsapp|
|» vertical|OTHER|
|» vertical|AUTO|
|» vertical|BEAUTY|
|» vertical|APPAREL|
|» vertical|EDU|
|» vertical|ENTERTAIN|
|» vertical|EVENT_PLAN|
|» vertical|FINANCE|
|» vertical|GROCERY|
|» vertical|GOVT|
|» vertical|HOTEL|
|» vertical|HEALTH|
|» vertical|NONPROFIT|
|» vertical|PROF_SERVICES|
|» vertical|RETAIL|
|» vertical|TRAVEL|
|» vertical|RESTAURANT|
|» vertical|ALCOHOL|
|» vertical|ONLINE_GAMBLING|
|» vertical|PHYSICAL_GAMBLING|
|» vertical|OTC_DRUGS|

> Example responses

> 200 Response

```json
{
  "id": "1234567890123456",
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: messaging_product is required",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to update this WhatsApp Business Profile",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to modify this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business Profile not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The provided profile picture handle is invalid or expired",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="update-whatsapp-business-profile-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated WhatsApp Business Profile|[WhatsAppBusinessProfileUpdateResponse](#schemawhatsappbusinessprofileupdateresponse)|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - WhatsApp Business Profile ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-business-portfolio">Business Portfolio</h1>

## Get Business Portfolio (Specific Fields)

<a id="opIdgetBusinessPortfolioSpecificFields"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Business-ID}`

Endpoint reference: [Business](https://developers.facebook.com/docs/marketing-api/reference/business/)

<h3 id="get-business-portfolio-specific-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|fields|query|string|false|none|
|Version|path|string|true|none|
|Business-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "506914307656634",
  "name": "Lucky Shrub",
  "timezone_id": 0
}
```

<h3 id="get-business-portfolio-specific-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="get-business-portfolio-specific-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|timezone_id|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|cross-origin-resource-policy|string||Cross-origin resource sharing policy|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-app-usage|string||Application usage metrics|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-rlafr|string||Facebook rate limiting and feature restriction status|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-block-users">Block Users</h1>

## Get blocked users

<a id="opIdgetBlockedUsers"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/block_users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/block_users`

- Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
- Endpoint reference: [GET WhatsApp Buiness Phone Number > block_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Reading)

<h3 id="get-blocked-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "messaging_product": "whatsapp",
      "wa_id": "16505551234"
    }
  ],
  "paging": {
    "cursors": {
      "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
      "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
    }
  }
}
```

<h3 id="get-blocked-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get blocked users|[GetBlockedUsersData](#schemagetblockedusersdata)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|ETag|string||Entity tag for caching and conditional requests|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Block user(s)

<a id="opIdblockUserS"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/block_users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "block_users": [
      {
        "user": "+16505551234"
      }
    ],
    "messaging_product": "whatsapp"
  }'
```

`POST /{Version}/{Phone-Number-ID}/block_users`

- Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
- Endpoint reference: [POST WhatsApp Buiness Phone Number > block_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Creating)

> Body parameter

```json
{
  "block_users": [
    {
      "user": "+16505551234"
    }
  ],
  "messaging_product": "whatsapp"
}
```

<h3 id="block-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|body|body|object|false|none|
|» block_users|body|[object]|false|none|
|» » user|body|string|false|none|
|» messaging_product|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "block_users": {
    "added_users": [
      {
        "input": "+16505551234",
        "wa_id": "16505551234"
      }
    ]
  },
  "messaging_product": "whatsapp"
}
```

<h3 id="block-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Block user(s)|[BlockUsersData](#schemablockusersdata)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Unblock user(s)

<a id="opIdunblockUserS"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/block_users \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "block_users": [
      {
        "user": "+16505551234"
      }
    ],
    "messaging_product": "whatsapp"
  }'
```

`DELETE /{Version}/{Phone-Number-ID}/block_users`

- Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
    
- Endpoint reference: [DELETE WhatsApp Buiness Phone Number > block_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Deleting)

> Body parameter

```json
{
  "block_users": [
    {
      "user": "+16505551234"
    }
  ],
  "messaging_product": "whatsapp"
}
```

<h3 id="unblock-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|body|body|object|false|none|
|» block_users|body|[object]|false|none|
|» » user|body|string|false|none|
|» messaging_product|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "block_users": {
    "removed_users": [
      {
        "input": "+16505551234",
        "wa_id": "16505551234"
      }
    ]
  },
  "messaging_product": "whatsapp"
}
```

<h3 id="unblock-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unblock user(s)|[UnblockUsersData](#schemaunblockusersdata)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-default">Default</h1>

## Get Active Groups

<a id="opIdgetActiveGroups"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/groups`

Retrieve a list of active groups for a given business phone number

<h3 id="get-active-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|Business phone number ID|
|limit|query|integer|false|Number of groups to fetch in the request|
|after|query|string|false|Cursor that points to the end of a page of data|
|before|query|string|false|Cursor that points to the beginning of a page of data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "data": {
    "groups": [
      {
        "id": "string",
        "subject": "string",
        "created_at": "string"
      }
    ]
  },
  "paging": {
    "cursors": {
      "before": "string",
      "after": "string"
    },
    "previous": "string",
    "next": "string"
  }
}
```

<h3 id="get-active-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of active groups|Inline|

<h3 id="get-active-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» groups|[object]|false|none|none|
|» » id|string|false|none|Group ID|
|» » subject|string|false|none|Group subject|
|» » created_at|string|false|none|Group creation timestamp|
|paging|[PagingInfo](#schemapaginginfo)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create Group

<a id="opIdcreateGroup"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/12784358810/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "subject": "New Purchase Inquiry",
    "description": "Jim, an existing client, would like to learn about new car purchase options for current year models.",
    "join_approval_mode": "auto_approve"
  }'
```

`POST /{Version}/{Phone-Number-ID}/groups`

Create a new group and get an invite link

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "subject": "New Purchase Inquiry",
  "description": "Jim, an existing client, would like to learn about new car purchase options for current year models.",
  "join_approval_mode": "auto_approve"
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|Business phone number ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|Messaging product|
|» subject|body|string|true|Group subject. Maximum 128 characters. Whitespace is trimmed.|
|» description|body|string|false|Group description. Maximum 2048 characters.|
|» join_approval_mode|body|string|false|Indicates if WhatsApp users who click the invitation link can join the group with or without being approved first.<br>- approval_required: WhatsApp users must be approved via join request before they can access the group<br>- auto_approve: WhatsApp users can join the group without approval<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|
|» join_approval_mode|approval_required|
|» join_approval_mode|auto_approve|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "request_id": "106540352242922"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid template name or parameters",
    "type": "OAuthException",
    "code": 100
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred",
    "type": "OAuthException",
    "code": 1
  }
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group creation request submitted successfully|Inline|
|400|Bad Request|Bad Request - Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal Server Error - An unexpected error occurred|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|request_id|string|false|none|Group creation request ID|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create Group Invite Link

<a id="opIdcreateGroupInviteLink"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/invite_link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp"
  }'
```

`POST /{Version}/{group_id}/invite_link`

Create a new group invite link

> Body parameter

```json
{
  "messaging_product": "whatsapp"
}
```

<h3 id="create-group-invite-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "invite_link": "https://chat.whatsapp.com/LINK_ID"
}
```

<h3 id="create-group-invite-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group invite link created successfully|Inline|

<h3 id="create-group-invite-link-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|invite_link|string|false|none|Group invite link|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Group Invite Link

<a id="opIddeleteGroupInviteLink"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/invite_link \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp"
  }'
```

`DELETE /{Version}/{group_id}/invite_link`

Delete an existing group invite link

> Body parameter

```json
{
  "messaging_product": "whatsapp"
}
```

<h3 id="delete-group-invite-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "success": "true"
}
```

<h3 id="delete-group-invite-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group invite link deleted successfully|Inline|

<h3 id="delete-group-invite-link-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Join Requests

<a id="opIdgetJoinRequests"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/join_requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{group_id}/join_requests`

Get a list of open join requests for a group

<h3 id="get-join-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "join_request_id": "MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw",
      "wa_id": "16505551234",
      "creation_timestamp": 1755548877
    }
  ],
  "paging": {
    "cursors": {
      "before": "string",
      "after": "string"
    },
    "previous": "string",
    "next": "string"
  }
}
```

<h3 id="get-join-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of join requests|Inline|

<h3 id="get-join-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» join_request_id|string|false|none|Join request ID|
|» wa_id|string|false|none|WhatsApp user ID|
|» creation_timestamp|integer|false|none|Unix timestamp indicating when the join request was created|
|paging|[PagingInfo](#schemapaginginfo)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve Join Requests

<a id="opIdapproveJoinRequests"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/join_requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "join_requests": [
      "MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw"
    ]
  }'
```

`POST /{Version}/{group_id}/join_requests`

Approve one or more join requests

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "join_requests": [
    "MTY0NjcwNDM1OTU6MTIwMzYzNDA0Njk0MjMzODIw"
  ]
}
```

<h3 id="approve-join-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|
|» join_requests|body|[string]|true|Array of join request IDs to approve|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "approved_join_requests": [
    "string"
  ],
  "failed_join_requests": [
    {
      "join_request_id": "string",
      "errors": [
        {
          "code": 0,
          "message": "string",
          "title": "string",
          "error_data": {
            "details": "string"
          }
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 0,
      "message": "string",
      "title": "string",
      "error_data": {
        "details": "string"
      }
    }
  ]
}
```

<h3 id="approve-join-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Join requests approval response|Inline|

<h3 id="approve-join-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|approved_join_requests|[string]|false|none|none|
|failed_join_requests|[object]|false|none|none|
|» join_request_id|string|false|none|none|
|» errors|[[Error](#schemaerror)]|false|none|none|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reject Join Requests

<a id="opIdrejectJoinRequests"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/join_requests \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "join_requests": [
      "string"
    ]
  }'
```

`DELETE /{Version}/{group_id}/join_requests`

Reject one or more join requests

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "join_requests": [
    "string"
  ]
}
```

<h3 id="reject-join-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|
|» join_requests|body|[string]|true|Array of join request IDs to reject|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

> Example responses

> 200 Response

```json
{
  "messaging_product": "whatsapp",
  "rejected_join_requests": [
    "string"
  ],
  "failed_join_requests": [
    {
      "join_request_id": "string",
      "errors": [
        {
          "code": 0,
          "message": "string",
          "title": "string",
          "error_data": {
            "details": "string"
          }
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 0,
      "message": "string",
      "title": "string",
      "error_data": {
        "details": "string"
      }
    }
  ]
}
```

<h3 id="reject-join-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Join requests rejection response|Inline|

<h3 id="reject-join-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|rejected_join_requests|[string]|false|none|none|
|failed_join_requests|[object]|false|none|none|
|» join_request_id|string|false|none|none|
|» errors|[[Error](#schemaerror)]|false|none|none|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add Group Participants

<a id="opIdaddGroupParticipants"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/participants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "participants": [
      {
        "user": "+17865347866"
      }
    ]
  }'
```

`POST /{Version}/{group_id}/participants`

Add participants to group

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "participants": [
    {
      "user": "+17865347866"
    }
  ]
}
```

<h3 id="add-group-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|
|» participants|body|[object]|true|Array of phone numbers or WhatsApp IDs to remove (max 8 participants)|
|» » user|body|string|true|WhatsApp user phone number or WhatsApp user ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

<h3 id="add-group-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Participants addition request processed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove Group Participants

<a id="opIdremoveGroupParticipants"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/participants \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "participants": [
      {
        "user": "+17865347866"
      }
    ]
  }'
```

`DELETE /{Version}/{group_id}/participants`

Remove participants from group

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "participants": [
    {
      "user": "+17865347866"
    }
  ]
}
```

<h3 id="remove-group-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|
|» participants|body|[object]|true|Array of phone numbers or WhatsApp IDs to remove (max 8 participants)|
|» » user|body|string|true|WhatsApp user phone number or WhatsApp user ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

<h3 id="remove-group-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Participants removal request processed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Group Info

<a id="opIdgetGroupInfo"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/Y2FwaV9ncm91cDoxOTUwNTU1MDA3OToxMjAzNjMzOTQzMjAdOTY0MTUZD \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{group_id}`

Retrieve metadata about a single group

<h3 id="get-group-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|fields|query|string|false|Comma-separated list of fields to return|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "messaging_product": "whatsapp",
  "join_approval_mode": "approval_required",
  "subject": "Artificial Intelligence Insights",
  "description": "Explore AI developments, share knowledge, and discuss the future of artificial intelligence with fellow enthusiasts and experts.",
  "suspended": true,
  "creation_timestamp": 683731200,
  "participants": [
    {
      "wa_id": "string"
    }
  ],
  "total_participant_count": 6
}
```

<h3 id="get-group-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group information|[GroupInfo](#schemagroupinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Group Settings

<a id="opIdupdateGroupSettings"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messaging_product": "whatsapp",
    "subject": "Watch Enthusiasts",
    "description": "Join our community to discuss the latest timepieces, share watch reviews, and connect with fellow horology enthusiasts.",
    "profile_picture_file": "string"
  }'
```

`POST /{Version}/{group_id}`

Update the subject, description, and photo of a group

> Body parameter

```json
{
  "messaging_product": "whatsapp",
  "subject": "Watch Enthusiasts",
  "description": "Join our community to discuss the latest timepieces, share watch reviews, and connect with fellow horology enthusiasts.",
  "profile_picture_file": "string"
}
```

<h3 id="update-group-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|
|body|body|object|true|none|
|» messaging_product|body|string|true|none|
|» subject|body|string|false|The new subject for the group|
|» description|body|string|false|The new description for the group|
|» profile_picture_file|body|string|false|Path to an image file for group profile picture|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|
|» messaging_product|whatsapp|

<h3 id="update-group-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group settings updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Group

<a id="opIddeleteGroup"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{group_id}`

Delete the group and remove all participants, including the business

<h3 id="delete-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|group_id|path|string|true|Group ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group deletion successful|Inline|

<h3 id="delete-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Receive incoming WhatsApp messages

> Code samples

```bash
curl https://graph.facebook.com/whatsapp/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "object": "whatsapp_business_account",
    "entry": [
      {
        "id": "419561257915477",
        "changes": [
          {
            "value": {
              "messaging_product": "whatsapp",
              "metadata": {
                "display_phone_number": "15550783881",
                "phone_number_id": "106540352242922"
              },
              "contacts": [
                {
                  "profile": {
                    "name": "Sheena Nelson"
                  },
                  "wa_id": "16505551234"
                }
              ],
              "messages": [
                {
                  "from": "16505551234",
                  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
                  "timestamp": "1749416383",
                  "type": "text",
                  "text": {
                    "body": "Does it come in another color?"
                  }
                }
              ]
            },
            "field": "messages"
          }
        ]
      }
    ]
  }'
```

`POST /whatsapp/webhooks`

Endpoint for receiving webhook payloads for diverse incoming WhatsApp message types.

> Body parameter

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "419561257915477",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15550783881",
              "phone_number_id": "106540352242922"
            },
            "contacts": [
              {
                "profile": {
                  "name": "Sheena Nelson"
                },
                "wa_id": "16505551234"
              }
            ],
            "messages": [
              {
                "from": "16505551234",
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
                "timestamp": "1749416383",
                "type": "text",
                "text": {
                  "body": "Does it come in another color?"
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

<h3 id="receive-incoming-whatsapp-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookPayload](#schemawebhookpayload)|true|Webhook payload containing incoming WhatsApp messages.|
|» object|body|string|true|Always 'whatsapp_business_account' for these webhooks.|
|» entry|body|[[Entry](#schemaentry)]|true|none|

<h3 id="receive-incoming-whatsapp-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook received successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-media">Media</h1>

## Upload Image

<a id="opIduploadImage"></a>

> Code samples

```bash
curl https://graph.facebook.com/v21.0/102290129340398/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "file": "@/local/path/file.ogg;type=ogg",
    "messaging_product": "whatsapp"
  }'
```

`POST /{Version}/{Phone-Number-ID}/media`

This request uploads an image as .jpeg. The parameters are specified as **form-data** in the request **body**.

> Body parameter

```json
{
  "file": "@/local/path/file.ogg;type=ogg",
  "messaging_product": "whatsapp"
}
```

<h3 id="upload-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|body|body|object|false|none|
|» file|body|string|false|none|
|» messaging_product|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "<MEDIA_ID>"
}
```

<h3 id="upload-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload Image JSON / Upload Sticker File (form-data) / Upload Sticker File JSON / Upload Audio (form-data) / Upload Audio JSON|Inline|

<h3 id="upload-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve Media URL

<a id="opIdretrieveMediaUrl"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Media-ID}`

To retrieve your media’s URL, make a **GET** call to **`/{{Media-ID}}`**. Use the returned URL to download the media file. Note that clicking this URL (i.e. performing a generic GET) will not return the media; you must include an access token. For more information, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

You can also use the optional query **`?phone_number_id`** for **`Retrieve Media URL`** and **`Delete Media`**. This parameter checks to make sure the media belongs to the phone number before retrieval or deletion.

#### Response

A successful response includes an object with a media URL. The URL is only valid for 5 minutes. To use this URL, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

<h3 id="retrieve-media-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|phone_number_id|query|string|false|Specifies that this action only be performed if the media belongs to the provided phone number.|
|Version|path|string|true|none|
|Media-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "file_size": "303833",
  "id": "2621233374848975",
  "messaging_product": "whatsapp",
  "mime_type": "image/jpeg",
  "sha256": "<HASH>",
  "url": "<URL>"
}
```

<h3 id="retrieve-media-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve Media URL|Inline|

<h3 id="retrieve-media-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_size|string|false|none|none|
|id|string|false|none|none|
|messaging_product|string|false|none|none|
|mime_type|string|false|none|none|
|sha256|string|false|none|none|
|url|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Media

<a id="opIddeleteMedia"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{Media-ID}`

To delete media, make a **DELETE** call to the ID of the media you want to delete.

## Prerequisites
- [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with **`whatsapp_business_messaging`** permission
- Media object ID from either uploading media endpoint or media message Webhooks

<h3 id="delete-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|phone_number_id|query|string|false|Specifies that deletion of the media  only be performed if the media belongs to the provided phone number.|
|Version|path|string|true|none|
|Media-ID|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete Media|Inline|

<h3 id="delete-media-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download Media

<a id="opIddownloadMedia"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Media-URL}`

Download media files using URLs obtained from media retrieval endpoints.
Requires User Access Token with whatsapp_business_messaging permission.
Media URLs expire after 5 minutes and must be re-retrieved if expired.
Returns binary content with appropriate MIME type headers.


<h3 id="download-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Media-URL|path|string|true|none|

> Example responses

> 200 Response

```text

```

<h3 id="download-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Download Media|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-settings">Settings</h1>

## Get phone number settings

<a id="opIdgetPhoneNumberSettings"></a>

> Code samples

```bash
curl https://graph.facebook.com/v22.0/123456789012345/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/settings`

Retrieve current settings for a WhatsApp Business phone number.
Returns calling settings, payload encryption settings, and data
storage configurations.


<h3 id="get-phone-number-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|include_sip_credentials|query|boolean|false|Include SIP credentials in the response (requires additional permissions)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "calling": {
    "status": "enabled",
    "call_icon_visibility": "visible",
    "ip_addresses": {
      "default": [
        "157.240.0.1",
        "157.240.0.2"
      ]
    },
    "callback_permission_status": "enabled",
    "video": {
      "status": "enabled"
    }
  },
  "payload_encryption": {
    "status": "disabled"
  },
  "storage_configuration": {
    "status": "default"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid template name or parameters",
    "type": "OAuthException",
    "code": 100
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Template not approved for marketing use",
    "type": "OAuthException",
    "code": 200
  }
}
```

<h3 id="get-phone-number-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current phone number settings retrieved successfully|[PhoneNumberSettingsResponse](#schemaphonenumbersettingsresponse)|
|400|Bad Request|Bad Request - Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Template not approved or insufficient permissions|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update phone number settings

<a id="opIdupdatePhoneNumberSettings"></a>

> Code samples

```bash
curl https://graph.facebook.com/v22.0/123456789012345/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "calling": {
      "status": "enabled",
      "call_icon_visibility": "visible",
      "video": {
        "status": "enabled"
      }
    }
  }'
```

`POST /{Version}/{Phone-Number-ID}/settings`

Update various settings for a WhatsApp Business phone number.
You can configure calling settings, user identity change settings,
payload encryption, and data storage configurations.
Only one feature setting can be specified per request.


> Body parameter

```json
{
  "calling": {
    "status": "enabled",
    "call_icon_visibility": "visible",
    "video": {
      "status": "enabled"
    }
  }
}
```

<h3 id="update-phone-number-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Content-Type|header|string|true|Media type of the request body|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|
|body|body|object|false|none|
|» *oneOf*|body|[CallingSettingsRequest](#schemacallingsettingsrequest)|false|none|
|» *oneOf*|body|[UserIdentityChangeSettingsRequest](#schemauseridentitychangesettingsrequest)|false|none|
|» *oneOf*|body|[PayloadEncryptionSettingsRequest](#schemapayloadencryptionsettingsrequest)|false|none|
|» *oneOf*|body|[StorageConfigurationSettingsRequest](#schemastorageconfigurationsettingsrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/x-www-form-urlencoded|
|Content-Type|multipart/form-data|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid template name or parameters",
    "type": "OAuthException",
    "code": 100
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Template not approved for marketing use",
    "type": "OAuthException",
    "code": 200
  }
}
```

<h3 id="update-phone-number-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings updated successfully|Inline|
|400|Bad Request|Bad Request - Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Template not approved or insufficient permissions|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-phone-number-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Connection-Quality|string||Facebook connection quality metrics|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-flows">Flows</h1>

## Get Business Encryption Public Key

<a id="opIdgetBusinessEncryptionPublicKey"></a>

> Code samples

```bash
curl https://graph.facebook.com/v23.0/1234567890123456/whatsapp_business_encryption \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/whatsapp_business_encryption`

Retrieve the current business public key and its signature verification status.

This endpoint returns the public key that is currently configured for encrypting
message payloads and indicates whether the stored signature is valid or has a mismatch.

**Use Cases:**
- Verify current encryption configuration
- Check public key signature validation status
- Retrieve public key for client-side encryption setup
- Monitor encryption key status for security compliance

**Rate Limiting:**
Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

**Caching:**
Public key information can be cached for moderate periods, but signature status
may change and should be checked regularly for security validation.


<h3 id="get-business-encryption-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|Graph API version to use for this request. Determines the API behavior and available features.<br>|
|Phone-Number-ID|path|string|true|Your WhatsApp Business phone number ID. This ID represents the phone number<br>entity and can be obtained from your WhatsApp Business Account phone numbers list.<br>|
|fields|query|string|false|Comma-separated list of fields to include in the response. If not specified,<br>all available fields will be returned.<br>Available fields: business_public_key, business_public_key_signature_status<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "business_public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----\n",
      "business_public_key_signature_status": "VALID"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Invalid parameter: phone_number_id must be a valid numeric string",
    "type": "OAuthException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Your app doesn't have permission to access this WhatsApp Business phone number",
    "type": "OAuthException",
    "code": 200,
    "error_subcode": 1349174,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "WhatsApp Business phone number not found",
    "type": "GraphMethodException",
    "code": 803,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "The requested fields are not available for this phone number",
    "type": "GraphMethodException",
    "code": 100,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn"
  }
}
```

> 429 Response

```json
{
  "error": {
    "message": "Application request limit reached",
    "type": "OAuthException",
    "code": 4,
    "error_subcode": 2446079,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "An unexpected error occurred. Please retry your request",
    "type": "GraphMethodException",
    "code": 2,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": true
  }
}
```

<h3 id="get-business-encryption-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved business encryption public key information|Inline|
|400|Bad Request|Bad Request - Invalid parameters or malformed request|[GraphAPIError](#schemagraphapierror)|
|401|Unauthorized|Unauthorized - Invalid or missing access token|[GraphAPIError](#schemagraphapierror)|
|403|Forbidden|Forbidden - Insufficient permissions or access denied|[GraphAPIError](#schemagraphapierror)|
|404|Not Found|Not Found - Phone number ID does not exist or is not accessible|[GraphAPIError](#schemagraphapierror)|
|422|Unprocessable Entity|Unprocessable Entity - Request parameters are valid but cannot be processed|[GraphAPIError](#schemagraphapierror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[GraphAPIError](#schemagraphapierror)|
|500|Internal Server Error|Internal Server Error - Unexpected server error|[GraphAPIError](#schemagraphapierror)|

<h3 id="get-business-encryption-public-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessEncryptionInfo](#schemawhatsappbusinessencryptioninfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Flows

<a id="opIdlistFlows"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/flows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/flows`

List Flows

<h3 id="list-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "categories": [
        "SIGN_UP"
      ],
      "id": "flow-1",
      "name": "my first flow",
      "status": "DRAFT",
      "validation_errors": []
    },
    {
      "categories": [
        "SIGN_UP",
        "SIGN_IN"
      ],
      "id": "flow-2",
      "name": "my second flow",
      "status": "DRAFT",
      "validation_errors": [
        {
          "column_end": 30,
          "column_start": 17,
          "error": "INVALID_PROPERTY",
          "error_type": "JSON_SCHEMA_ERROR",
          "line_end": 46,
          "line_start": 46,
          "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."
        }
      ]
    },
    {
      "categories": [
        "CONTACT_US"
      ],
      "id": "flow-3",
      "name": "another flow",
      "status": "PUBLISHED",
      "validation_errors": []
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIUnZAWV...",
      "before": "QVFIUnpKT..."
    }
  }
}
```

<h3 id="list-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Flows|Inline|

<h3 id="list-flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» categories|[string]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» status|string|false|none|none|
|» validation_errors|[object]|false|none|none|
|paging|object|false|none|none|
|» cursors|object|false|none|none|
|» » after|string|false|none|none|
|» » before|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create Flow

<a id="opIdcreateFlow"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/flows \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'categories=["OTHER"]' \
  -F 'clone_flow_id=<EXISTING_FLOW_ID>' \
  -F 'endpoint_uri=https://example.com' \
  -F 'name=<FLOW_NAME>'
```

`POST /{Version}/{WABA-ID}/flows`

Creates a new flow. To clone an existing flow you can add the parameter

`"clone_flow_id": "original-flow-id"`

> Body parameter

```yaml
categories: "[\"OTHER\"]"
clone_flow_id: "<EXISTING_FLOW_ID>"
endpoint_uri: "https://example.com"
name: "<FLOW_NAME>"
```

<h3 id="create-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|
|body|body|object|false|none|
|» categories|body|string|false|none|
|» clone_flow_id|body|string|false|none|
|» endpoint_uri|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "flow-1"
}
```

<h3 id="create-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create Flow|Inline|

<h3 id="create-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Migrate Flows

<a id="opIdmigrateFlows"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/migrate_flows \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'source_flow_names=["appointment", "leadgen"]' \
  -F 'source_waba_id=<SOURCE_WABA_ID>'
```

`POST /{Version}/{WABA-ID}/migrate_flows`

Creates a copy of existing flows from source WABA to destination WABA with the same names.

> Body parameter

```yaml
source_flow_names: "[\"appointment\", \"leadgen\"]"
source_waba_id: "<SOURCE_WABA_ID>"
```

<h3 id="migrate-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|
|body|body|object|false|none|
|» source_flow_names|body|string|false|[Optional] The names of the flows that will be copied from the source WABA. If not specified, all flows in the source WABA will be copied|
|» source_waba_id|body|string|false|The ID of the source WABA from which the flows will be copied|

> Example responses

> 200 Response

```json
{
  "failed_flows": [
    {
      "error_code": "4233041",
      "error_message": "Flows Migration Error: Flow name not found in source WABA.",
      "source_name": "leadgen"
    }
  ],
  "migrated_flows": [
    {
      "migrated_id": "dest-flow-1",
      "source_id": "source-flow-1",
      "source_name": "appointment"
    }
  ]
}
```

<h3 id="migrate-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Migrate Flows|Inline|

<h3 id="migrate-flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failed_flows|[object]|false|none|none|
|» error_code|string|false|none|none|
|» error_message|string|false|none|none|
|» source_name|string|false|none|none|
|migrated_flows|[object]|false|none|none|
|» migrated_id|string|false|none|none|
|» source_id|string|false|none|none|
|» source_name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Flow

<a id="opIdgetFlow"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Flow-ID}`

Can request specific fields by enabling the \`fields\` query param

<h3 id="get-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|fields|query|string|false|Return specific fields in the response|
|date_format|query|string|false|Returns date as unix timestamp in seconds|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "flow-1",
  "metric": {
    "data_points": [
      {
        "data": [
          {
            "key": "succeeded",
            "value": 713
          },
          {
            "key": "failed",
            "value": 335
          }
        ],
        "timestamp": "2024-01-28T08:00:00+0000"
      },
      {
        "data": [
          {
            "key": "succeeded",
            "value": 623
          },
          {
            "key": "failed",
            "value": 2
          }
        ],
        "timestamp": "2024-01-29T08:00:00+0000"
      }
    ],
    "granularity": "DAY",
    "name": "ENDPOINT_AVAILABILITY"
  }
}
```

<h3 id="get-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Flow / Get Preview URL / Get Endpoint Request Count Metric / Get Endpoint Request Error Metric / Get Endpoint Request Error Rate Metric / Get Endpoint Request Latencies Metric / Get Endpoint Availability Metric|Inline|

<h3 id="get-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|
|» id|string|false|none|none|
|» link|string|false|none|none|
|» name|string|false|none|none|
|categories|[string]|false|none|none|
|data_api_version|string|false|none|none|
|data_channel_uri|string|false|none|none|
|health_status|object|false|none|none|
|» can_send_message|string|false|none|none|
|» entities|[object]|false|none|none|
|» » can_send_message|string|false|none|none|
|» » entity_type|string|false|none|none|
|» » errors|[object]|false|none|none|
|» » » error_code|number|false|none|none|
|» » » error_description|string|false|none|none|
|» » » possible_solution|string|false|none|none|
|» » id|string|false|none|none|
|id|string|false|none|none|
|json_version|string|false|none|none|
|metric|object|false|none|none|
|» data_points|[object]|false|none|none|
|» » data|[object]|false|none|none|
|» » » key|string|false|none|none|
|» » » value|number|false|none|none|
|» » timestamp|string|false|none|none|
|» granularity|string|false|none|none|
|» name|string|false|none|none|
|name|string|false|none|none|
|preview|object|false|none|none|
|» expires_at|string|false|none|none|
|» preview_url|string|false|none|none|
|status|string|false|none|none|
|validation_errors|[object]|false|none|none|
|whatsapp_business_account|object|false|none|none|
|» business_type|string|false|none|none|
|» id|string|false|none|none|
|» message_template_namespace|string|false|none|none|
|» name|string|false|none|none|
|» timezone_id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Flow Metadata

<a id="opIdupdateFlowMetadata"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'categories=["OTHER"]' \
  -F 'endpoint_uri=https://example.com' \
  -F 'name=<NEW_FLOW_NAME>'
```

`POST /{Version}/{Flow-ID}`

Update Flow Metadata

> Body parameter

```yaml
categories: "[\"OTHER\"]"
endpoint_uri: "https://example.com"
name: "<NEW_FLOW_NAME>"
```

<h3 id="update-flow-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|
|body|body|object|false|none|
|» categories|body|string|false|none|
|» endpoint_uri|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="update-flow-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update Flow Metadata|Inline|

<h3 id="update-flow-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Flow

<a id="opIddeleteFlow"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{Flow-ID}`

Deletes the flow entirely. This action is not reversible. Only a DRAFT flow can be deleted.

<h3 id="delete-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete Flow|Inline|

<h3 id="delete-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Assets (Get Flow JSON URL)

<a id="opIdlistAssetsGetFlowJsonUrl"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Flow-ID}/assets`

Returns all assets attached to the flow. Currently only FLOW_JSON asset is supported

> Body parameter

```yaml

```

<h3 id="list-assets-get-flow-json-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "asset_type": "FLOW_JSON",
      "download_url": "https://scontent.xx.fbcdn.net/m1/v/t0.57323-24/An_Hq0jnfJ...",
      "name": "flow.json"
    }
  ],
  "paging": {
    "cursors": {
      "after": "QVFIU...",
      "before": "QVFIU..."
    }
  }
}
```

<h3 id="list-assets-get-flow-json-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Assets|Inline|

<h3 id="list-assets-get-flow-json-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» asset_type|string|false|none|none|
|» download_url|string|false|none|none|
|» name|string|false|none|none|
|paging|object|false|none|none|
|» cursors|object|false|none|none|
|» » after|string|false|none|none|
|» » before|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update Flow JSON

<a id="opIdupdateFlowJson"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/assets \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'asset_type=FLOW_JSON' \
  -F 'file=@/path/to/file' \
  -F 'name=flow.json'
```

`POST /{Version}/{Flow-ID}/assets`

Used to upload a flow JSON file with the flow content. Refer to flow JSON documentation here [https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson](https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson)

The file must be attached as from data. The response will include any validation errors in the JSON file

> Body parameter

```yaml
asset_type: FLOW_JSON
file: string
name: flow.json
```

<h3 id="update-flow-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|
|body|body|object|false|none|
|» asset_type|body|string|false|none|
|» file|body|string(binary)|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "validation_errors": [
    {
      "column_end": 30,
      "column_start": 17,
      "error": "INVALID_PROPERTY",
      "error_type": "JSON_SCHEMA_ERROR",
      "line_end": 46,
      "line_start": 46,
      "message": "The property \"initial-text\" cannot be specified at \"$root/screens/0/layout/children/2/children/0\"."
    }
  ]
}
```

<h3 id="update-flow-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload Flow JSON Asset|Inline|

<h3 id="update-flow-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|validation_errors|[object]|false|none|none|
|» column_end|number|false|none|none|
|» column_start|number|false|none|none|
|» error|string|false|none|none|
|» error_type|string|false|none|none|
|» line_end|number|false|none|none|
|» line_start|number|false|none|none|
|» message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Publish Flow

<a id="opIdpublishFlow"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{Version}/{Flow-ID}/publish`

Updates the status of the flow as "PUBLISHED". This action is not reversible. The flow and its assets become immutable once published. To update the flow, you must create a new flow and specify the previous flow id as the \`clone_flow_id\` parameter

<h3 id="publish-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="publish-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Publish Flow|Inline|

<h3 id="publish-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Deprecate Flow

<a id="opIddeprecateFlow"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/deprecate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{Version}/{Flow-ID}/deprecate`

Updates the status of the flow as "DEPRECATED". This action is not reversible. Only a published flow can be deprecated to prevent sending or opening it.

<h3 id="deprecate-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Flow-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deprecate-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deprecate Flow|Inline|

<h3 id="deprecate-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create authentication template w/ OTP copy code button

<a id="opIdcreateAuthenticationTemplateWOtpCopyCodeButton"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/message_templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "category": "MARKETING",
    "components": [
      {
        "text": "Check out this new offer",
        "type": "body"
      },
      {
        "buttons": [
          {
            "flow_action": "navigate",
            "flow_json": "{\"version\":\"5.0\",\"screens\":[{\"id\":\"WELCOME_SCREEN\",\"layout\":{\"type\":\"SingleColumnLayout\",\"children\":[{\"type\":\"TextHeading\",\"text\":\"Hello World\"},{\"type\":\"Footer\",\"label\":\"Complete\",\"on-click-action\":{\"name\":\"complete\",\"payload\":{}}}]},\"title\":\"Welcome\",\"terminal\":true,\"success\":true,\"data\":{}}]}",
            "navigate_screen": "WELCOME_SCREEN",
            "text": "Check out this offer!",
            "type": "FLOW"
          }
        ],
        "type": "BUTTONS"
      }
    ],
    "language": "en_US",
    "name": "<TEMPLATE_NAME>"
  }'
```

`POST /{Version}/{WABA-ID}/message_templates`

- Guide: [Authentication Templates with OTP Buttons](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/authentication-templates/authentication-templates)
- Guide: [Message Templates](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
- Guide: [How To Monitor Quality Signals](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
- Endpoint reference: [WhatsApp Business Account > Message Templates](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)

> Body parameter

```json
{
  "category": "MARKETING",
  "components": [
    {
      "text": "Check out this new offer",
      "type": "body"
    },
    {
      "buttons": [
        {
          "flow_action": "navigate",
          "flow_json": "{\"version\":\"5.0\",\"screens\":[{\"id\":\"WELCOME_SCREEN\",\"layout\":{\"type\":\"SingleColumnLayout\",\"children\":[{\"type\":\"TextHeading\",\"text\":\"Hello World\"},{\"type\":\"Footer\",\"label\":\"Complete\",\"on-click-action\":{\"name\":\"complete\",\"payload\":{}}}]},\"title\":\"Welcome\",\"terminal\":true,\"success\":true,\"data\":{}}]}",
          "navigate_screen": "WELCOME_SCREEN",
          "text": "Check out this offer!",
          "type": "FLOW"
        }
      ],
      "type": "BUTTONS"
    }
  ],
  "language": "en_US",
  "name": "<TEMPLATE_NAME>"
}
```

<h3 id="create-authentication-template-w-otp-copy-code-button-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|
|body|body|object|false|none|
|» category|body|string|false|none|
|» components|body|[object]|false|none|
|» » buttons|body|[object]|false|none|
|» » » flow_action|body|string|false|none|
|» » » flow_id|body|string|false|none|
|» » » navigate_screen|body|string|false|none|
|» » » text|body|string|false|none|
|» » » type|body|string|false|none|
|» » text|body|string|false|none|
|» » type|body|string|false|none|
|» language|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "category": "MARKETING",
  "id": "template-1",
  "status": "PENDING"
}
```

<h3 id="create-authentication-template-w-otp-copy-code-button-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response / Example response / Example response / Example response / Example response / Example response / Example response / Example response / Create Flow Template Message by Name / Create Flow Template Message by Flow JSON / Create Flow Template Message by ID|Inline|

<h3 id="create-authentication-template-w-otp-copy-code-button-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|id|string|false|none|none|
|status|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-commerce-settings">Commerce Settings</h1>

## Get commerce settings

<a id="opIdgetCommerceSettings"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/whatsapp_commerce_settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Phone-Number-ID}/whatsapp_commerce_settings`

- Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
- Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
- Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

<h3 id="get-commerce-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "527759822865714",
      "is_cart_enabled": true,
      "is_catalog_visible": true
    }
  ]
}
```

<h3 id="get-commerce-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="get-commerce-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» id|string|false|none|none|
|» is_cart_enabled|boolean|false|none|none|
|» is_catalog_visible|boolean|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Alt-Svc|string||none|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|ETag|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Strict-Transport-Security|string||none|
|200|Vary|string||none|
|200|X-FB-Debug|string||none|
|200|facebook-api-version|string||none|
|200|x-business-use-case-usage|string||none|
|200|x-fb-request-id|string||none|
|200|x-fb-rev|string||none|
|200|x-fb-rlafr|string||none|
|200|x-fb-trace-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set or update commerce settings

<a id="opIdsetOrUpdateCommerceSettings"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/whatsapp_commerce_settings \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /{Version}/{Phone-Number-ID}/whatsapp_commerce_settings`

- Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
- Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
- Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

<h3 id="set-or-update-commerce-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|is_cart_enabled|query|string|false|none|
|is_catalog_visible|query|string|false|none|
|Version|path|string|true|none|
|Phone-Number-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="set-or-update-commerce-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="set-or-update-commerce-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Alt-Svc|string||none|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Strict-Transport-Security|string||none|
|200|Vary|string||none|
|200|X-FB-Debug|string||none|
|200|cross-origin-resource-policy|string||none|
|200|facebook-api-version|string||none|
|200|x-app-usage|string||none|
|200|x-fb-request-id|string||none|
|200|x-fb-rev|string||none|
|200|x-fb-rlafr|string||none|
|200|x-fb-trace-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-billing">Billing</h1>

## Get credit lines

<a id="opIdgetCreditLines"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/extendedcredits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{Business-ID}/extendedcredits`

- Endpoint reference: [Business > Extendedcredits](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/)

<h3 id="get-credit-lines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|Business-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1972385232742146",
      "legal_entity_name": "Lucky Shrub"
    }
  ]
}
```

<h3 id="get-credit-lines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="get-credit-lines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» id|string|false|none|none|
|» legal_entity_name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="meta-graph-api---application-connected-client-businesses-templates">Templates</h1>

## Get template by ID (default fields)

<a id="opIdgetTemplateByIdDefaultFields"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{TEMPLATE_ID}`

- Guide: [Message Templates](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
- Guide: [How To Monitor Quality Signals](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
- Endpoint reference: [WhatsApp Message Template](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)

<h3 id="get-template-by-id-default-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|TEMPLATE_ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "category": "MARKETING",
  "components": [
    {
      "format": "TEXT",
      "text": "Fall Sale",
      "type": "HEADER"
    },
    {
      "example": {
        "body_text": [
          [
            "Mark",
            "FALL25"
          ]
        ]
      },
      "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",
      "type": "BODY"
    },
    {
      "text": "Not interested in any of our sales? Tap Stop Promotions",
      "type": "FOOTER"
    },
    {
      "buttons": [
        {
          "text": "Stop promotions",
          "type": "QUICK_REPLY"
        }
      ],
      "type": "BUTTONS"
    }
  ],
  "id": "920070352646140",
  "language": "en_US",
  "name": "2023_april_promo",
  "status": "APPROVED"
}
```

<h3 id="get-template-by-id-default-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="get-template-by-id-default-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|components|[object]|false|none|none|
|» buttons|[object]|false|none|none|
|» » text|string|false|none|none|
|» » type|string|false|none|none|
|» example|object|false|none|none|
|» » body_text|[[string]]|false|none|none|
|» format|string|false|none|none|
|» text|string|false|none|none|
|» type|string|false|none|none|
|id|string|false|none|none|
|language|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|ETag|string||Entity tag for caching and conditional requests|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Edit template

<a id="opIdeditTemplate"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "category": "MARKETING",
    "components": [
      {
        "format": "TEXT",
        "text": "Fall Sale",
        "type": "HEADER"
      },
      {
        "example": {
          "body_text": [
            [
              "Mark",
              "FALL25"
            ]
          ]
        },
        "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",
        "type": "BODY"
      },
      {
        "text": "Not interested in any of our sales? Tap Stop Promotions",
        "type": "FOOTER"
      },
      {
        "buttons": [
          {
            "text": "Stop promotions",
            "type": "QUICK_REPLY"
          }
        ],
        "type": "BUTTONS"
      }
    ],
    "language": "en_US",
    "name": "2023_april_promo"
  }'
```

`POST /{Version}/{TEMPLATE_ID}`

- Guide: [Message Templates](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
- Guide: [How To Monitor Quality Signals](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
- Endpoint reference: [WhatsApp Message Template](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/)

> Body parameter

```json
{
  "category": "MARKETING",
  "components": [
    {
      "format": "TEXT",
      "text": "Fall Sale",
      "type": "HEADER"
    },
    {
      "example": {
        "body_text": [
          [
            "Mark",
            "FALL25"
          ]
        ]
      },
      "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",
      "type": "BODY"
    },
    {
      "text": "Not interested in any of our sales? Tap Stop Promotions",
      "type": "FOOTER"
    },
    {
      "buttons": [
        {
          "text": "Stop promotions",
          "type": "QUICK_REPLY"
        }
      ],
      "type": "BUTTONS"
    }
  ],
  "language": "en_US",
  "name": "2023_april_promo"
}
```

<h3 id="edit-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|Version|path|string|true|none|
|TEMPLATE_ID|path|string|true|none|
|body|body|object|false|none|
|» category|body|string|false|none|
|» components|body|[object]|false|none|
|» » buttons|body|[object]|false|none|
|» » » text|body|string|false|none|
|» » » type|body|string|false|none|
|» » example|body|object|false|none|
|» » » body_text|body|[[string]]|false|none|
|» » format|body|string|false|none|
|» » text|body|string|false|none|
|» » type|body|string|false|none|
|» language|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="edit-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response|Inline|

<h3 id="edit-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get template by name (default fields)

<a id="opIdgetTemplateByNameDefaultFields"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/message_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{Version}/{WABA-ID}/message_templates`

- Guide: [Message Templates](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
- Guide: [How To Monitor Quality Signals](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
- Endpoint reference: [WhatsApp Business Account > Message Templates](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)

<h3 id="get-template-by-name-default-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|name|query|string|false|none|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "category": "MARKETING",
      "components": [
        {
          "format": "TEXT",
          "text": "Hello World",
          "type": "HEADER"
        },
        {
          "text": "Welcome and congratulations!! This message demonstrates your ability to send a message notification from WhatsApp Business Platform’s Cloud API. Thank you for taking the time to test with us.",
          "type": "BODY"
        },
        {
          "text": "WhatsApp Business API Team",
          "type": "FOOTER"
        }
      ],
      "id": "1192339204654487",
      "language": "en_US",
      "name": "hello_world",
      "previous_category": "ACCOUNT_UPDATE",
      "status": "APPROVED"
    },
    {
      "category": "MARKETING",
      "components": [
        {
          "format": "TEXT",
          "text": "Fall Sale",
          "type": "HEADER"
        },
        {
          "example": {
            "body_text": [
              [
                "Mark",
                "FALL25"
              ]
            ]
          },
          "text": "Hi {{1}}, our Fall Sale is on! Use promo code {{2}} Get an extra 25% off every order above $350!",
          "type": "BODY"
        },
        {
          "text": "Not interested in any of our sales? Tap Stop Promotions",
          "type": "FOOTER"
        },
        {
          "buttons": [
            {
              "text": "Stop promotions",
              "type": "QUICK_REPLY"
            }
          ],
          "type": "BUTTONS"
        }
      ],
      "id": "920070352646140",
      "language": "en_US",
      "name": "2023_april_promo",
      "status": "APPROVED"
    }
  ],
  "paging": {
    "cursors": {
      "after": "MjQZD",
      "before": "MAZDZD"
    }
  }
}
```

<h3 id="get-template-by-name-default-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response / Example response|Inline|

<h3 id="get-template-by-name-default-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» category|string|false|none|none|
|» components|[object]|false|none|none|
|» » buttons|[object]|false|none|none|
|» » » text|string|false|none|none|
|» » » type|string|false|none|none|
|» » example|object|false|none|none|
|» » » body_text|[[string]]|false|none|none|
|» » format|string|false|none|none|
|» » text|string|false|none|none|
|» » type|string|false|none|none|
|» id|string|false|none|none|
|» language|string|false|none|none|
|» name|string|false|none|none|
|» status|string|false|none|none|
|paging|object|false|none|none|
|» cursors|object|false|none|none|
|» » after|string|false|none|none|
|» » before|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|ETag|string||Entity tag for caching and conditional requests|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete template by name

<a id="opIddeleteTemplateByName"></a>

> Code samples

```bash
curl https://graph.facebook.com/string/string/message_templates \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{Version}/{WABA-ID}/message_templates`

- Guide: [Message Templates](https://developers.facebook.com/docs/business-messaging/whatsapp/templates/overview)
- Guide: [How To Monitor Quality Signals](https://developers.facebook.com/docs/whatsapp/guides/how-to-monitor-quality-signals)
- Endpoint reference: [WhatsApp Business Account > Message Templates](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates/)

<h3 id="delete-template-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|The user agent string identifying the client software making the request.|
|Authorization|header|string|true|Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.<br>|
|name|query|string|false|none|
|hsm_id|query|string|false|Template ID|
|Version|path|string|true|none|
|WABA-ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="delete-template-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example response / Example response|Inline|

<h3 id="delete-template-by-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||CORS policy allowing access from any origin|
|200|Alt-Svc|string||Alternative service advertisement for HTTP/3|
|200|Cache-Control|string||Cache control directives for the response|
|200|Connection|string||Connection management directive|
|200|Content-Length|string||Size of the response body in bytes|
|200|Date|string||Date and time when the response was generated|
|200|Expires|string||Expiration date for cached responses|
|200|Pragma|string||Legacy cache control directive|
|200|Strict-Transport-Security|string||HSTS header enforcing HTTPS connections|
|200|Vary|string||Headers that affect caching and content negotiation|
|200|X-FB-Debug|string||Facebook debug information for troubleshooting|
|200|facebook-api-version|string||Facebook Graph API version used for the request|
|200|x-business-use-case-usage|string||Business use case usage metrics and rate limiting information|
|200|x-fb-request-id|string||Unique identifier for the request for debugging purposes|
|200|x-fb-rev|string||Facebook internal revision number|
|200|x-fb-trace-id|string||Facebook trace identifier for request tracking|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ConnectedClientBusiness">ConnectedClientBusiness</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedclientbusiness"></a>
<a id="schema_ConnectedClientBusiness"></a>
<a id="tocSconnectedclientbusiness"></a>
<a id="tocsconnectedclientbusiness"></a>

```json
{
  "id": "1234567890123456",
  "name": "Example Client Business",
  "verification_status": "VERIFIED",
  "business_status": "ACTIVE",
  "created_time": "2023-01-15T10:30:00Z",
  "updated_time": "2023-06-20T14:45:00Z"
}
```

Connected client business information and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the connected client business|
|name|string|true|none|Name of the connected client business|
|verification_status|[BusinessVerificationStatus](#schemabusinessverificationstatus)|false|none|Verification status of the connected client business|
|business_status|[BusinessStatus](#schemabusinessstatus)|false|none|Current status of the connected client business|
|created_time|string(date-time)|false|none|Timestamp when the business connection was created|
|updated_time|string(date-time)|false|none|Timestamp when the business connection was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|VERIFIED|
|verification_status|UNVERIFIED|
|verification_status|PENDING|
|verification_status|REJECTED|
|business_status|ACTIVE|
|business_status|INACTIVE|
|business_status|SUSPENDED|
|business_status|PENDING_APPROVAL|

<h2 id="tocS_BusinessVerificationStatus">BusinessVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemabusinessverificationstatus"></a>
<a id="schema_BusinessVerificationStatus"></a>
<a id="tocSbusinessverificationstatus"></a>
<a id="tocsbusinessverificationstatus"></a>

```json
"VERIFIED"
```

Verification status of the connected client business

<h2 id="tocS_BusinessStatus">BusinessStatus</h2>
<!-- backwards compatibility -->
<a id="schemabusinessstatus"></a>
<a id="schema_BusinessStatus"></a>
<a id="tocSbusinessstatus"></a>
<a id="tocsbusinessstatus"></a>

```json
"ACTIVE"
```

Current status of the connected client business

<h2 id="tocS_ConnectedClientBusinessesResponse">ConnectedClientBusinessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedclientbusinessesresponse"></a>
<a id="schema_ConnectedClientBusinessesResponse"></a>
<a id="tocSconnectedclientbusinessesresponse"></a>
<a id="tocsconnectedclientbusinessesresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Example Client Business",
      "verification_status": "VERIFIED",
      "business_status": "ACTIVE",
      "created_time": "2023-01-15T10:30:00Z",
      "updated_time": "2023-06-20T14:45:00Z"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Response containing list of connected client businesses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ConnectedClientBusiness](#schemaconnectedclientbusiness)]|false|none|Array of connected client businesses|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging">CursorPaging</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging"></a>
<a id="schema_CursorPaging"></a>
<a id="tocScursorpaging"></a>
<a id="tocscursorpaging"></a>

```json
{
  "cursors": {
    "before": "QVFIUjNpUWpVWmRBd0dn",
    "after": "QVFIUjNpUWpVWmRBd0Rn"
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
  "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|URL for the previous page of results|
|next|string|false|none|URL for the next page of results|

<h2 id="tocS_GraphAPIError">GraphAPIError</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror"></a>
<a id="schema_GraphAPIError"></a>
<a id="tocSgraphapierror"></a>
<a id="tocsgraphapierror"></a>

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessSolutionCreateRequest">WhatsAppBusinessSolutionCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutioncreaterequest"></a>
<a id="schema_WhatsAppBusinessSolutionCreateRequest"></a>
<a id="tocSwhatsappbusinesssolutioncreaterequest"></a>
<a id="tocswhatsappbusinesssolutioncreaterequest"></a>

```json
{
  "owner_permissions": [
    "MESSAGING"
  ],
  "partner_app_id": "9876543210987654",
  "partner_permissions": [],
  "solution_name": "E-commerce Integration Solution"
}
```

Request payload for creating a Multi-Partner Solution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner_permissions|[[WhatsAppBusinessAccountConfigurablePermissionTask](#schemawhatsappbusinessaccountconfigurablepermissiontask)]|true|none|Configurable permissions granted to the solution owner app. Currently supports<br>only MESSAGING permission. Use empty array if owner should not have configurable permissions.<br>|
|partner_app_id|string|true|none|Facebook Application ID of the partner app that will participate in this solution.<br>Must be a valid application ID accessible to the requesting entity.<br>|
|partner_permissions|[[WhatsAppBusinessAccountConfigurablePermissionTask](#schemawhatsappbusinessaccountconfigurablepermissiontask)]|true|none|Configurable permissions granted to the partner app. Currently supports<br>only MESSAGING permission. Use empty array if partner should not have configurable permissions.<br>|
|solution_name|string|true|none|Human-readable name for the Multi-Partner Solution. Used for identification<br>and management purposes in partner dashboards and solution management interfaces.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|owner_permissions|MESSAGING|
|partner_permissions|MESSAGING|

<h2 id="tocS_WhatsAppBusinessSolutionCreateResponse">WhatsAppBusinessSolutionCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutioncreateresponse"></a>
<a id="schema_WhatsAppBusinessSolutionCreateResponse"></a>
<a id="tocSwhatsappbusinesssolutioncreateresponse"></a>
<a id="tocswhatsappbusinesssolutioncreateresponse"></a>

```json
{
  "solution_id": "1234567890123456"
}
```

Successful response containing the created solution identifier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solution_id|string|true|none|Unique identifier for the newly created Multi-Partner Solution.<br>Use this ID for subsequent solution management operations.<br>|

<h2 id="tocS_WhatsAppBusinessAccountConfigurablePermissionTask">WhatsAppBusinessAccountConfigurablePermissionTask</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountconfigurablepermissiontask"></a>
<a id="schema_WhatsAppBusinessAccountConfigurablePermissionTask"></a>
<a id="tocSwhatsappbusinessaccountconfigurablepermissiontask"></a>
<a id="tocswhatsappbusinessaccountconfigurablepermissiontask"></a>

```json
"MESSAGING"
```

Configurable permission tasks for WhatsApp Business Account access in Multi-Partner Solutions.
Currently only MESSAGING permission is configurable through this API.

<h2 id="tocS_GraphAPIError_1">GraphAPIError_1</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_1"></a>
<a id="schema_GraphAPIError_1"></a>
<a id="tocSgraphapierror_1"></a>
<a id="tocsgraphapierror_1"></a>

```json
{
  "error": {
    "message": "Invalid parameter value for owner_permissions",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "A1B2C3D4E5F6G7H8",
    "is_transient": false,
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

Standard Graph API error response structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessSolution">WhatsAppBusinessSolution</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolution"></a>
<a id="schema_WhatsAppBusinessSolution"></a>
<a id="tocSwhatsappbusinesssolution"></a>
<a id="tocswhatsappbusinesssolution"></a>

```json
{
  "id": "1234567890123456",
  "name": "E-commerce Integration Solution",
  "status": "ACTIVE",
  "status_for_pending_request": "NONE",
  "owner_app": {
    "id": "9876543210987654",
    "name": "Solution Partner App"
  },
  "owner_permissions": [
    "MANAGE",
    "DEVELOP",
    "MANAGE_TEMPLATES"
  ]
}
```

Multi-Partner Solution details and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the Multi-Partner Solution|
|name|string|true|none|Human-readable name of the Multi-Partner Solution|
|status|[WhatsAppBusinessSolutionStatus](#schemawhatsappbusinesssolutionstatus)|true|none|Current effective status of the Multi-Partner Solution|
|status_for_pending_request|[WhatsAppBusinessSolutionPendingStatus](#schemawhatsappbusinesssolutionpendingstatus)|true|none|Status of any pending solution status transition requests|
|owner_app|[ApplicationNode](#schemaapplicationnode)|false|none|Meta application that owns the Multi-Partner Solution|
|owner_permissions|[[WhatsAppBusinessAccountPermissionTask](#schemawhatsappbusinessaccountpermissiontask)]|false|none|List of WhatsApp Business Account permissions granted to the solution owner|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DRAFT|
|status|INITIATED|
|status|ACTIVE|
|status|REJECTED|
|status|DEACTIVATED|
|status_for_pending_request|PENDING_ACTIVATION|
|status_for_pending_request|PENDING_DEACTIVATION|
|status_for_pending_request|NONE|
|owner_permissions|MANAGE|
|owner_permissions|DEVELOP|
|owner_permissions|MANAGE_TEMPLATES|
|owner_permissions|MANAGE_PHONE|
|owner_permissions|VIEW_COST|
|owner_permissions|MANAGE_EXTENSIONS|
|owner_permissions|VIEW_PHONE_ASSETS|
|owner_permissions|MANAGE_PHONE_ASSETS|
|owner_permissions|VIEW_TEMPLATES|
|owner_permissions|VIEW_INSIGHTS|
|owner_permissions|RECEIVE_INCOMING_MESSAGES|
|owner_permissions|MANAGE_BILLING|
|owner_permissions|MANAGE_USERS|
|owner_permissions|MESSAGING|
|owner_permissions|FULL_CONTROL|

<h2 id="tocS_WhatsAppBusinessSolutionStatus">WhatsAppBusinessSolutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionstatus"></a>
<a id="schema_WhatsAppBusinessSolutionStatus"></a>
<a id="tocSwhatsappbusinesssolutionstatus"></a>
<a id="tocswhatsappbusinesssolutionstatus"></a>

```json
"ACTIVE"
```

Current effective status of the Multi-Partner Solution

<h2 id="tocS_WhatsAppBusinessSolutionPendingStatus">WhatsAppBusinessSolutionPendingStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionpendingstatus"></a>
<a id="schema_WhatsAppBusinessSolutionPendingStatus"></a>
<a id="tocSwhatsappbusinesssolutionpendingstatus"></a>
<a id="tocswhatsappbusinesssolutionpendingstatus"></a>

```json
"NONE"
```

Status of any pending solution status transition requests

<h2 id="tocS_WhatsAppBusinessAccountPermissionTask">WhatsAppBusinessAccountPermissionTask</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountpermissiontask"></a>
<a id="schema_WhatsAppBusinessAccountPermissionTask"></a>
<a id="tocSwhatsappbusinessaccountpermissiontask"></a>
<a id="tocswhatsappbusinessaccountpermissiontask"></a>

```json
"MANAGE"
```

Granular permission tasks for WhatsApp Business Account access

<h2 id="tocS_WhatsAppBusinessSolutionApplicationRole">WhatsAppBusinessSolutionApplicationRole</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionapplicationrole"></a>
<a id="schema_WhatsAppBusinessSolutionApplicationRole"></a>
<a id="tocSwhatsappbusinesssolutionapplicationrole"></a>
<a id="tocswhatsappbusinesssolutionapplicationrole"></a>

```json
"OWNER"
```

Role of the application in relation to the Multi-Partner Solution

<h2 id="tocS_ApplicationNode">ApplicationNode</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationnode"></a>
<a id="schema_ApplicationNode"></a>
<a id="tocSapplicationnode"></a>
<a id="tocsapplicationnode"></a>

```json
{
  "id": "9876543210987654",
  "name": "Solution Partner App"
}
```

Meta application that owns the Multi-Partner Solution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the Meta application|
|name|string|false|none|Name of the Meta application|

<h2 id="tocS_WhatsAppBusinessSolutionsResponse">WhatsAppBusinessSolutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionsresponse"></a>
<a id="schema_WhatsAppBusinessSolutionsResponse"></a>
<a id="tocSwhatsappbusinesssolutionsresponse"></a>
<a id="tocswhatsappbusinesssolutionsresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "E-commerce Integration Solution",
      "status": "ACTIVE",
      "status_for_pending_request": "NONE",
      "owner_app": {
        "id": "9876543210987654",
        "name": "Solution Partner App"
      },
      "owner_permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES"
      ]
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Response containing list of Multi-Partner Solutions with pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)]|false|none|Array of Multi-Partner Solutions|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_1">CursorPaging_1</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_1"></a>
<a id="schema_CursorPaging_1"></a>
<a id="tocScursorpaging_1"></a>
<a id="tocscursorpaging_1"></a>

```json
{
  "cursors": {
    "before": "MAZDZD",
    "after": "MTAxNTExOTQ1MjAwNzI5NDE"
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_solutions?before=MAZDZD",
  "next": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_solutions?after=MTAxNTExOTQ1MjAwNzI5NDE"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|Graph API endpoint URL for the previous page of data|
|next|string|false|none|Graph API endpoint URL for the next page of data|

<h2 id="tocS_AddPhoneNumbersRequest">AddPhoneNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddphonenumbersrequest"></a>
<a id="schema_AddPhoneNumbersRequest"></a>
<a id="tocSaddphonenumbersrequest"></a>
<a id="tocsaddphonenumbersrequest"></a>

```json
{
  "phone_number": "+1234567890"
}
```

Request payload for adding a phone number to a business account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone_number|string|true|none|Phone number to add to the business account. Accepts E.164 format or formatted numbers<br>with spaces, hyphens, and parentheses (e.g., +1234567890, +1 (631) 555-1000, +1-631-555-1000).<br>The phone number will be normalized and validated by the endpoint.<br>|

<h2 id="tocS_AddPhoneNumbersResponse">AddPhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddphonenumbersresponse"></a>
<a id="schema_AddPhoneNumbersResponse"></a>
<a id="tocSaddphonenumbersresponse"></a>
<a id="tocsaddphonenumbersresponse"></a>

```json
{
  "id": "1234567890123456"
}
```

Response containing the ID of the successfully added phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the preverified phone number entity that was created|

<h2 id="tocS_PreVerifiedPhoneNumber">PreVerifiedPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumber"></a>
<a id="schema_PreVerifiedPhoneNumber"></a>
<a id="tocSpreverifiedphonenumber"></a>
<a id="tocspreverifiedphonenumber"></a>

```json
{
  "id": "1234567890123456",
  "display_phone_number": "+1 (555) 123-4567",
  "country_prefix": 1,
  "verification_status": "VERIFIED",
  "availability_status": "AVAILABLE",
  "created_time": "2024-01-15T10:30:00Z",
  "last_updated": "2024-01-20T14:45:00Z",
  "supported_features": [
    "MESSAGING",
    "BUSINESS_PROFILE",
    "WEBHOOKS"
  ],
  "country_code": "US",
  "region": "North America"
}
```

Pre-verified phone number details and status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the pre-verified phone number|
|display_phone_number|string|true|none|Formatted display version of the phone number|
|country_prefix|integer|false|none|Country code prefix for the phone number|
|verification_status|[PhoneNumberVerificationStatus](#schemaphonenumberverificationstatus)|true|none|Current verification status of the pre-verified phone number|
|availability_status|[PhoneNumberAvailabilityStatus](#schemaphonenumberavailabilitystatus)|false|none|Current availability status of the pre-verified phone number|
|created_time|string(date-time)|false|none|Timestamp when the phone number was pre-verified|
|last_updated|string(date-time)|false|none|Timestamp when the phone number information was last updated|
|supported_features|[[WhatsAppBusinessFeature](#schemawhatsappbusinessfeature)]|false|none|List of WhatsApp Business features supported by this phone number|
|country_code|string|false|none|ISO 3166-1 alpha-2 country code for the phone number|
|region|string|false|none|Geographic region or area for the phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|VERIFIED|
|verification_status|PENDING|
|verification_status|FAILED|
|verification_status|EXPIRED|
|availability_status|AVAILABLE|
|availability_status|IN_USE|
|availability_status|RESERVED|
|availability_status|UNAVAILABLE|
|supported_features|MESSAGING|
|supported_features|BUSINESS_PROFILE|
|supported_features|WEBHOOKS|
|supported_features|TEMPLATES|
|supported_features|ANALYTICS|
|supported_features|COMMERCE|
|supported_features|FLOWS|

<h2 id="tocS_PhoneNumberVerificationStatus">PhoneNumberVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberverificationstatus"></a>
<a id="schema_PhoneNumberVerificationStatus"></a>
<a id="tocSphonenumberverificationstatus"></a>
<a id="tocsphonenumberverificationstatus"></a>

```json
"VERIFIED"
```

Current verification status of the pre-verified phone number

<h2 id="tocS_PhoneNumberAvailabilityStatus">PhoneNumberAvailabilityStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberavailabilitystatus"></a>
<a id="schema_PhoneNumberAvailabilityStatus"></a>
<a id="tocSphonenumberavailabilitystatus"></a>
<a id="tocsphonenumberavailabilitystatus"></a>

```json
"AVAILABLE"
```

Current availability status of the pre-verified phone number

<h2 id="tocS_WhatsAppBusinessFeature">WhatsAppBusinessFeature</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessfeature"></a>
<a id="schema_WhatsAppBusinessFeature"></a>
<a id="tocSwhatsappbusinessfeature"></a>
<a id="tocswhatsappbusinessfeature"></a>

```json
"MESSAGING"
```

WhatsApp Business features supported by the phone number

<h2 id="tocS_PreVerifiedPhoneNumbersResponse">PreVerifiedPhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumbersresponse"></a>
<a id="schema_PreVerifiedPhoneNumbersResponse"></a>
<a id="tocSpreverifiedphonenumbersresponse"></a>
<a id="tocspreverifiedphonenumbersresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "display_phone_number": "+1 (555) 123-4567",
      "country_prefix": 1,
      "verification_status": "VERIFIED",
      "availability_status": "AVAILABLE",
      "created_time": "2024-01-15T10:30:00Z",
      "last_updated": "2024-01-20T14:45:00Z",
      "supported_features": [
        "MESSAGING",
        "BUSINESS_PROFILE",
        "WEBHOOKS"
      ],
      "country_code": "US",
      "region": "North America"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Response containing list of pre-verified phone numbers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PreVerifiedPhoneNumber](#schemapreverifiedphonenumber)]|true|none|List of pre-verified phone numbers|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_2">CursorPaging_2</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_2"></a>
<a id="schema_CursorPaging_2"></a>
<a id="tocScursorpaging_2"></a>
<a id="tocscursorpaging_2"></a>

```json
{
  "cursors": {
    "before": "QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVks4ZD0",
    "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"
  },
  "next": "https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0",
  "previous": "https://graph.facebook.com/v23.0/1234567890123456/preverified_numbers?before=QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVks4ZD0"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|next|string|false|none|Graph API endpoint URL for the next page of results|
|previous|string|false|none|Graph API endpoint URL for the previous page of results|

<h2 id="tocS_WhatsAppBusinessAccount">WhatsAppBusinessAccount</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccount"></a>
<a id="schema_WhatsAppBusinessAccount"></a>
<a id="tocSwhatsappbusinessaccount"></a>
<a id="tocswhatsappbusinessaccount"></a>

```json
{
  "id": "1234567890123456",
  "name": "My WhatsApp Business Account",
  "account_review_status": "APPROVED",
  "purchase_order_number": "PO-2023-001234",
  "audiences": [
    "customers",
    "prospects"
  ],
  "ownership_type": "CLIENT_OWNED",
  "subscribed_apps": [
    {
      "id": "9876543210987654",
      "name": "WhatsApp Integration App"
    }
  ],
  "business_verification_status": "VERIFIED",
  "country": "US",
  "currency": "USD",
  "timezone_id": "1",
  "on_behalf_of_business_info": {
    "id": "5678901234567890",
    "name": "Partner Business Inc"
  },
  "schedules": [
    {
      "day_of_week": "MONDAY",
      "open_time": "09:00",
      "close_time": "17:00"
    }
  ],
  "is_enabled_for_insights": true,
  "dcc_config": {
    "enabled": true,
    "policy_url": "https://example.com/dcc-policy"
  },
  "message_templates": [
    {
      "id": "template_123456",
      "name": "welcome_message",
      "status": "APPROVED"
    }
  ],
  "phone_numbers": [
    {
      "id": "1234567890123456",
      "display_phone_number": "+1 (555) 123-4567",
      "verified_name": "Example Business"
    }
  ]
}
```

WhatsApp Business Account details and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Account|
|name|string|true|none|Human-readable name of the WhatsApp Business Account|
|account_review_status|[AccountReviewStatus](#schemaaccountreviewstatus)|false|none|Review status of the WhatsApp Business Account|
|purchase_order_number|string|false|none|Purchase order number associated with the account|
|audiences|[string]|false|none|List of audience segments associated with the account|
|ownership_type|[OwnershipType](#schemaownershiptype)|false|none|Type of ownership for the WhatsApp Business Account|
|subscribed_apps|[[SubscribedApp](#schemasubscribedapp)]|false|none|List of applications subscribed to this WABA|
|business_verification_status|[BusinessVerificationStatus](#schemabusinessverificationstatus)|false|none|Verification status of the connected client business|
|country|string|false|none|Country code where the WABA is registered|
|currency|string|false|none|Currency code for the WABA|
|timezone_id|string|false|none|Timezone identifier for the WABA|
|on_behalf_of_business_info|[OnBehalfOfBusinessInfo](#schemaonbehalfofbusinessinfo)|false|none|Information about the business on whose behalf the WABA operates|
|schedules|[[BusinessSchedule](#schemabusinessschedule)]|false|none|Business hours and scheduling information|
|is_enabled_for_insights|boolean|false|none|Whether insights are enabled for this WABA|
|dcc_config|[DCCConfig](#schemadccconfig)|false|none|Data and Content Control configuration|
|message_templates|[[MessageTemplate](#schemamessagetemplate)]|false|none|Message templates associated with the WABA|
|phone_numbers|[[PhoneNumber](#schemaphonenumber)]|false|none|Phone numbers associated with the WABA|

#### Enumerated Values

|Property|Value|
|---|---|
|account_review_status|APPROVED|
|account_review_status|PENDING|
|account_review_status|REJECTED|
|account_review_status|RESTRICTED|
|ownership_type|SELF_OWNED|
|ownership_type|CLIENT_OWNED|
|ownership_type|AGENCY_OWNED|
|business_verification_status|VERIFIED|
|business_verification_status|UNVERIFIED|
|business_verification_status|PENDING|
|business_verification_status|REJECTED|

<h2 id="tocS_AccountReviewStatus">AccountReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountreviewstatus"></a>
<a id="schema_AccountReviewStatus"></a>
<a id="tocSaccountreviewstatus"></a>
<a id="tocsaccountreviewstatus"></a>

```json
"APPROVED"
```

Review status of the WhatsApp Business Account

<h2 id="tocS_OwnershipType">OwnershipType</h2>
<!-- backwards compatibility -->
<a id="schemaownershiptype"></a>
<a id="schema_OwnershipType"></a>
<a id="tocSownershiptype"></a>
<a id="tocsownershiptype"></a>

```json
"CLIENT_OWNED"
```

Type of ownership for the WhatsApp Business Account

<h2 id="tocS_BusinessVerificationStatus_1">BusinessVerificationStatus_1</h2>
<!-- backwards compatibility -->
<a id="schemabusinessverificationstatus_1"></a>
<a id="schema_BusinessVerificationStatus_1"></a>
<a id="tocSbusinessverificationstatus_1"></a>
<a id="tocsbusinessverificationstatus_1"></a>

```json
"VERIFIED"
```

Verification status of the business associated with the WABA

<h2 id="tocS_SubscribedApp">SubscribedApp</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedapp"></a>
<a id="schema_SubscribedApp"></a>
<a id="tocSsubscribedapp"></a>
<a id="tocssubscribedapp"></a>

```json
{
  "id": "9876543210987654",
  "name": "WhatsApp Integration App"
}
```

Application subscribed to the WABA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Application ID|
|name|string|false|none|Application name|

<h2 id="tocS_OnBehalfOfBusinessInfo">OnBehalfOfBusinessInfo</h2>
<!-- backwards compatibility -->
<a id="schemaonbehalfofbusinessinfo"></a>
<a id="schema_OnBehalfOfBusinessInfo"></a>
<a id="tocSonbehalfofbusinessinfo"></a>
<a id="tocsonbehalfofbusinessinfo"></a>

```json
{
  "id": "5678901234567890",
  "name": "Partner Business Inc"
}
```

Information about the business on whose behalf the WABA operates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Business ID|
|name|string|false|none|Business name|

<h2 id="tocS_BusinessSchedule">BusinessSchedule</h2>
<!-- backwards compatibility -->
<a id="schemabusinessschedule"></a>
<a id="schema_BusinessSchedule"></a>
<a id="tocSbusinessschedule"></a>
<a id="tocsbusinessschedule"></a>

```json
{
  "day_of_week": "MONDAY",
  "open_time": "09:00",
  "close_time": "17:00"
}
```

Business hours schedule information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day_of_week|string|false|none|none|
|open_time|string|false|none|Opening time in HH:MM format|
|close_time|string|false|none|Closing time in HH:MM format|

#### Enumerated Values

|Property|Value|
|---|---|
|day_of_week|MONDAY|
|day_of_week|TUESDAY|
|day_of_week|WEDNESDAY|
|day_of_week|THURSDAY|
|day_of_week|FRIDAY|
|day_of_week|SATURDAY|
|day_of_week|SUNDAY|

<h2 id="tocS_DCCConfig">DCCConfig</h2>
<!-- backwards compatibility -->
<a id="schemadccconfig"></a>
<a id="schema_DCCConfig"></a>
<a id="tocSdccconfig"></a>
<a id="tocsdccconfig"></a>

```json
{
  "enabled": true,
  "policy_url": "https://example.com/dcc-policy"
}
```

Data and Content Control configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether DCC is enabled|
|policy_url|string|false|none|URL to the DCC policy|

<h2 id="tocS_MessageTemplate">MessageTemplate</h2>
<!-- backwards compatibility -->
<a id="schemamessagetemplate"></a>
<a id="schema_MessageTemplate"></a>
<a id="tocSmessagetemplate"></a>
<a id="tocsmessagetemplate"></a>

```json
{
  "id": "template_123456",
  "name": "welcome_message",
  "status": "APPROVED"
}
```

Message template information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Template ID|
|name|string|false|none|Template name|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|PENDING|
|status|REJECTED|
|status|DISABLED|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "id": "1234567890123456",
  "display_phone_number": "+1 (555) 123-4567",
  "verified_name": "Example Business"
}
```

Phone number associated with the WABA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Phone number ID|
|display_phone_number|string|false|none|Formatted phone number for display|
|verified_name|string|false|none|Verified business name for the phone number|

<h2 id="tocS_ClientWhatsAppBusinessAccountsResponse">ClientWhatsAppBusinessAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientwhatsappbusinessaccountsresponse"></a>
<a id="schema_ClientWhatsAppBusinessAccountsResponse"></a>
<a id="tocSclientwhatsappbusinessaccountsresponse"></a>
<a id="tocsclientwhatsappbusinessaccountsresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "My WhatsApp Business Account",
      "account_review_status": "APPROVED",
      "purchase_order_number": "PO-2023-001234",
      "audiences": [
        "customers",
        "prospects"
      ],
      "ownership_type": "CLIENT_OWNED",
      "subscribed_apps": [
        {
          "id": "9876543210987654",
          "name": "WhatsApp Integration App"
        }
      ],
      "business_verification_status": "VERIFIED",
      "country": "US",
      "currency": "USD",
      "timezone_id": "1",
      "on_behalf_of_business_info": {
        "id": "5678901234567890",
        "name": "Partner Business Inc"
      },
      "schedules": [
        {
          "day_of_week": "MONDAY",
          "open_time": "09:00",
          "close_time": "17:00"
        }
      ],
      "is_enabled_for_insights": true,
      "dcc_config": {
        "enabled": true,
        "policy_url": "https://example.com/dcc-policy"
      },
      "message_templates": [
        {
          "id": "template_123456",
          "name": "welcome_message",
          "status": "APPROVED"
        }
      ],
      "phone_numbers": [
        {
          "id": "1234567890123456",
          "display_phone_number": "+1 (555) 123-4567",
          "verified_name": "Example Business"
        }
      ]
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Response containing list of client WhatsApp Business Accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessAccount](#schemawhatsappbusinessaccount)]|false|none|Array of client WhatsApp Business Accounts|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_3">CursorPaging_3</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_3"></a>
<a id="schema_CursorPaging_3"></a>
<a id="tocScursorpaging_3"></a>
<a id="tocscursorpaging_3"></a>

```json
{
  "cursors": {
    "before": "QVFIUjNpUWpVWmRBd0Dn",
    "after": "QVFIUjNpUWpVWmRBd0Rn"
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890/client_whatsapp_business_accounts?before=QVFIUjNpUWpVWmRBd0Dn",
  "next": "https://graph.facebook.com/v23.0/1234567890/client_whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|URL for the previous page of results|
|next|string|false|none|URL for the next page of results|

<h2 id="tocS_MMLiteOnboardingRequest">MMLiteOnboardingRequest</h2>
<!-- backwards compatibility -->
<a id="schemammliteonboardingrequest"></a>
<a id="schema_MMLiteOnboardingRequest"></a>
<a id="tocSmmliteonboardingrequest"></a>
<a id="tocsmmliteonboardingrequest"></a>

```json
{
  "request_id": "1234567890123456"
}
```

MM Lite onboarding request details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|Unique identifier for the MM Lite onboarding request|

<h2 id="tocS_WhatsAppBusinessAccount_1">WhatsAppBusinessAccount_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccount_1"></a>
<a id="schema_WhatsAppBusinessAccount_1"></a>
<a id="tocSwhatsappbusinessaccount_1"></a>
<a id="tocswhatsappbusinessaccount_1"></a>

```json
{
  "id": "104996122399160",
  "name": "Lucky Shrub",
  "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",
  "timezone_id": "1"
}
```

WhatsApp Business Account owned by the business

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Account|
|name|string|true|none|Human-readable name of the WhatsApp Business Account|
|message_template_namespace|string|true|none|Namespace identifier for message templates associated with this account|
|timezone_id|string|true|none|Timezone identifier for the WhatsApp Business Account|

<h2 id="tocS_WhatsAppBusinessType">WhatsAppBusinessType</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesstype"></a>
<a id="schema_WhatsAppBusinessType"></a>
<a id="tocSwhatsappbusinesstype"></a>
<a id="tocswhatsappbusinesstype"></a>

```json
"ENTERPRISE"
```

Type of WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessAccountOnboardingFilter">WhatsAppBusinessAccountOnboardingFilter</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountonboardingfilter"></a>
<a id="schema_WhatsAppBusinessAccountOnboardingFilter"></a>
<a id="tocSwhatsappbusinessaccountonboardingfilter"></a>
<a id="tocswhatsappbusinessaccountonboardingfilter"></a>

```json
"ONBOARDED"
```

Filter for accounts based on onboarding status

<h2 id="tocS_WhatsAppBusinessAccountsConnection">WhatsAppBusinessAccountsConnection</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountsconnection"></a>
<a id="schema_WhatsAppBusinessAccountsConnection"></a>
<a id="tocSwhatsappbusinessaccountsconnection"></a>
<a id="tocswhatsappbusinessaccountsconnection"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "My WhatsApp Business Account",
      "account_review_status": "APPROVED",
      "purchase_order_number": "PO-2023-001234",
      "audiences": [
        "customers",
        "prospects"
      ],
      "ownership_type": "CLIENT_OWNED",
      "subscribed_apps": [
        {
          "id": "9876543210987654",
          "name": "WhatsApp Integration App"
        }
      ],
      "business_verification_status": "VERIFIED",
      "country": "US",
      "currency": "USD",
      "timezone_id": "1",
      "on_behalf_of_business_info": {
        "id": "5678901234567890",
        "name": "Partner Business Inc"
      },
      "schedules": [
        {
          "day_of_week": "MONDAY",
          "open_time": "09:00",
          "close_time": "17:00"
        }
      ],
      "is_enabled_for_insights": true,
      "dcc_config": {
        "enabled": true,
        "policy_url": "https://example.com/dcc-policy"
      },
      "message_templates": [
        {
          "id": "template_123456",
          "name": "welcome_message",
          "status": "APPROVED"
        }
      ],
      "phone_numbers": [
        {
          "id": "1234567890123456",
          "display_phone_number": "+1 (555) 123-4567",
          "verified_name": "Example Business"
        }
      ]
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Paginated collection of owned WhatsApp Business Accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessAccount](#schemawhatsappbusinessaccount)]|true|none|Array of owned WhatsApp Business Account records|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_4">CursorPaging_4</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_4"></a>
<a id="schema_CursorPaging_4"></a>
<a id="tocScursorpaging_4"></a>
<a id="tocscursorpaging_4"></a>

```json
{
  "cursors": {
    "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3",
    "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB"
  },
  "next": "https://graph.facebook.com/v23.0/1234567890/owned_whatsapp_business_accounts?after=QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",
  "previous": "https://graph.facebook.com/v23.0/1234567890/owned_whatsapp_business_accounts?before=QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|next|string|false|none|URL for the next page of results|
|previous|string|false|none|URL for the previous page of results|

<h2 id="tocS_PreVerifiedPhoneNumberShareRequest">PreVerifiedPhoneNumberShareRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumbersharerequest"></a>
<a id="schema_PreVerifiedPhoneNumberShareRequest"></a>
<a id="tocSpreverifiedphonenumbersharerequest"></a>
<a id="tocspreverifiedphonenumbersharerequest"></a>

```json
{
  "preverified_id": "1234567890123456",
  "partner_business_id": "9876543210987654"
}
```

Request payload for sharing a pre-verified phone number with another business

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preverified_id|string|true|none|Unique identifier of the pre-verified phone number to be shared.<br>Must be a valid phone number ID that the requesting business owns or has sharing rights to.<br>|
|partner_business_id|string|true|none|Business ID of the partner business that will receive access to the pre-verified phone number.<br>Must be a valid business entity accessible to the requesting app.<br>|

<h2 id="tocS_PreVerifiedPhoneNumberPermission">PreVerifiedPhoneNumberPermission</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumberpermission"></a>
<a id="schema_PreVerifiedPhoneNumberPermission"></a>
<a id="tocSpreverifiedphonenumberpermission"></a>
<a id="tocspreverifiedphonenumberpermission"></a>

```json
"MESSAGING"
```

Specific permissions that can be granted for shared pre-verified phone numbers

<h2 id="tocS_PreVerifiedPhoneNumberShareResponse">PreVerifiedPhoneNumberShareResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumbershareresponse"></a>
<a id="schema_PreVerifiedPhoneNumberShareResponse"></a>
<a id="tocSpreverifiedphonenumbershareresponse"></a>
<a id="tocspreverifiedphonenumbershareresponse"></a>

```json
{
  "success": true
}
```

Response containing details of the successful phone number sharing operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the sharing operation was successful|

<h2 id="tocS_SharingStatus">SharingStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharingstatus"></a>
<a id="schema_SharingStatus"></a>
<a id="tocSsharingstatus"></a>
<a id="tocssharingstatus"></a>

```json
"ACTIVE"
```

Current status of the phone number sharing relationship

<h2 id="tocS_SharedPreVerifiedPhoneNumber">SharedPreVerifiedPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemasharedpreverifiedphonenumber"></a>
<a id="schema_SharedPreVerifiedPhoneNumber"></a>
<a id="tocSsharedpreverifiedphonenumber"></a>
<a id="tocssharedpreverifiedphonenumber"></a>

```json
{
  "id": "1234567890123456",
  "display_phone_number": "+1 (555) 123-4567",
  "country_prefix": 1,
  "verification_status": "VERIFIED"
}
```

Details of the shared pre-verified phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the pre-verified phone number|
|display_phone_number|string|false|none|Formatted display version of the phone number|
|country_prefix|integer|false|none|Country code prefix for the phone number|
|verification_status|string|false|none|Current verification status of the phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|VERIFIED|
|verification_status|PENDING|
|verification_status|FAILED|

<h2 id="tocS_BusinessSummary">BusinessSummary</h2>
<!-- backwards compatibility -->
<a id="schemabusinesssummary"></a>
<a id="schema_BusinessSummary"></a>
<a id="tocSbusinesssummary"></a>
<a id="tocsbusinesssummary"></a>

```json
{
  "id": "9876543210987654",
  "name": "Partner Business Corp",
  "verification_status": "VERIFIED"
}
```

Summary information about a business entity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the business|
|name|string|false|none|Name of the business|
|verification_status|string|false|none|Business verification status|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|VERIFIED|
|verification_status|UNVERIFIED|
|verification_status|PENDING|

<h2 id="tocS_BlockedUser">BlockedUser</h2>
<!-- backwards compatibility -->
<a id="schemablockeduser"></a>
<a id="schema_BlockedUser"></a>
<a id="tocSblockeduser"></a>
<a id="tocsblockeduser"></a>

```json
{
  "messaging_product": "whatsapp",
  "wa_id": "16505551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|wa_id|string|false|none|none|

<h2 id="tocS_PaginationCursors">PaginationCursors</h2>
<!-- backwards compatibility -->
<a id="schemapaginationcursors"></a>
<a id="schema_PaginationCursors"></a>
<a id="tocSpaginationcursors"></a>
<a id="tocspaginationcursors"></a>

```json
{
  "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
  "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|false|none|none|
|before|string|false|none|none|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
{
  "cursors": {
    "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
    "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|[PaginationCursors](#schemapaginationcursors)|false|none|none|

<h2 id="tocS_GetBlockedUsersData">GetBlockedUsersData</h2>
<!-- backwards compatibility -->
<a id="schemagetblockedusersdata"></a>
<a id="schema_GetBlockedUsersData"></a>
<a id="tocSgetblockedusersdata"></a>
<a id="tocsgetblockedusersdata"></a>

```json
{
  "data": [
    {
      "messaging_product": "whatsapp",
      "wa_id": "16505551234"
    }
  ],
  "paging": {
    "cursors": {
      "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
      "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BlockedUser](#schemablockeduser)]|false|none|none|
|paging|[Paging](#schemapaging)|false|none|none|

<h2 id="tocS_BlockedUserOperation">BlockedUserOperation</h2>
<!-- backwards compatibility -->
<a id="schemablockeduseroperation"></a>
<a id="schema_BlockedUserOperation"></a>
<a id="tocSblockeduseroperation"></a>
<a id="tocsblockeduseroperation"></a>

```json
{
  "input": "+16505551234",
  "wa_id": "16505551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|none|
|wa_id|string|false|none|none|

<h2 id="tocS_BlockUsersResult">BlockUsersResult</h2>
<!-- backwards compatibility -->
<a id="schemablockusersresult"></a>
<a id="schema_BlockUsersResult"></a>
<a id="tocSblockusersresult"></a>
<a id="tocsblockusersresult"></a>

```json
{
  "added_users": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_users|[[BlockedUserOperation](#schemablockeduseroperation)]|false|none|none|

<h2 id="tocS_UnblockUsersResult">UnblockUsersResult</h2>
<!-- backwards compatibility -->
<a id="schemaunblockusersresult"></a>
<a id="schema_UnblockUsersResult"></a>
<a id="tocSunblockusersresult"></a>
<a id="tocsunblockusersresult"></a>

```json
{
  "removed_users": [
    {
      "input": "+16505551234",
      "wa_id": "16505551234"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|removed_users|[[BlockedUserOperation](#schemablockeduseroperation)]|false|none|none|

<h2 id="tocS_BlockUsersData">BlockUsersData</h2>
<!-- backwards compatibility -->
<a id="schemablockusersdata"></a>
<a id="schema_BlockUsersData"></a>
<a id="tocSblockusersdata"></a>
<a id="tocsblockusersdata"></a>

```json
{
  "block_users": {
    "added_users": [
      {
        "input": "+16505551234",
        "wa_id": "16505551234"
      }
    ]
  },
  "messaging_product": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_users|[BlockUsersResult](#schemablockusersresult)|false|none|none|
|messaging_product|string|false|none|none|

<h2 id="tocS_UnblockUsersData">UnblockUsersData</h2>
<!-- backwards compatibility -->
<a id="schemaunblockusersdata"></a>
<a id="schema_UnblockUsersData"></a>
<a id="tocSunblockusersdata"></a>
<a id="tocsunblockusersdata"></a>

```json
{
  "block_users": {
    "removed_users": [
      {
        "input": "+16505551234",
        "wa_id": "16505551234"
      }
    ]
  },
  "messaging_product": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_users|[UnblockUsersResult](#schemaunblockusersresult)|false|none|none|
|messaging_product|string|false|none|none|

<h2 id="tocS_CallPermissionCheckResponsePayload">CallPermissionCheckResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemacallpermissioncheckresponsepayload"></a>
<a id="schema_CallPermissionCheckResponsePayload"></a>
<a id="tocScallpermissioncheckresponsepayload"></a>
<a id="tocscallpermissioncheckresponsepayload"></a>

```json
{
  "messaging_product": "whatsapp",
  "permission": {
    "status": "granted",
    "expiration_time": 1735689600
  },
  "actions": [
    {
      "action_name": "start_call",
      "can_perform_action": true,
      "limits": [
        {
          "time_period": "24h",
          "current_usage": 5,
          "max_allowed": 100,
          "limit_expiration_time": 1735689600
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging product|
|permission|object|true|none|Call permission details|
|actions|[object]|false|none|Available actions and their restrictions|

<h2 id="tocS_CallRequestPayload">CallRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemacallrequestpayload"></a>
<a id="schema_CallRequestPayload"></a>
<a id="tocScallrequestpayload"></a>
<a id="tocscallrequestpayload"></a>

```json
{
  "messaging_product": "whatsapp",
  "to": "14085551234",
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "v=0\no=- 3626166318745852955 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\nc=IN IP4 0.0.0.0\na=rtcp:9 IN IP4 0.0.0.0\na=ice-ufrag:4g1c\na=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk\na=ice-options:trickle\na=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A\na=setup:actpass\na=mid:0\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\na=sendrecv\na=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\na=rtcp-mux\na=rtpmap:111 opus/48000/2\na=rtcp-fb:111 transport-cc\na=fmtp:111 minptime=10;useinbandfec=1\na=rtpmap:63 red/48000/2\na=fmtp:63 111/111\na=rtpmap:9 G722/8000\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=rtpmap:110 telephone-event/48000\na=rtpmap:126 telephone-event/8000\na=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ\na=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc\n"
  },
  "biz_opaque_callback_data": "0fS5cePMok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging product|
|to|string|true|none|The number being called (callee)|
|action|string|true|none|The action being taken on the given call ID|
|session|object|false|none|Contains the session description protocol (SDP) type and description language|
|biz_opaque_callback_data|string|false|none|An arbitrary string you can pass in that is useful for tracking and logging purposes. Any app subscribed to the "calls" webhook field on your WhatsApp Business Account can receive this string, as it is included in the calls object within the subsequent Call Terminate Webhook payload. Cloud API does not process this field. Maximum 512 characters<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|action|connect|
|action|pre_accept|
|action|accept|
|action|reject|
|action|terminate|

<h2 id="tocS_CallTerminateRequestPayload">CallTerminateRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemacallterminaterequestpayload"></a>
<a id="schema_CallTerminateRequestPayload"></a>
<a id="tocScallterminaterequestpayload"></a>
<a id="tocscallterminaterequestpayload"></a>

```json
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA",
  "action": "terminate"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging product|
|call_id|string|true|none|The WhatsApp call ID|
|action|string|true|none|Action to terminate the call|

#### Enumerated Values

|Property|Value|
|---|---|
|action|terminate|

<h2 id="tocS_CallResponsePayload">CallResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemacallresponsepayload"></a>
<a id="schema_CallResponsePayload"></a>
<a id="tocScallresponsepayload"></a>
<a id="tocscallresponsepayload"></a>

```json
{
  "messaging_product": "whatsapp",
  "calls": [
    {
      "id": "wacid.ABGGFjFVU2AfAgo6V"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|false|none|none|
|calls|[object]|false|none|none|

<h2 id="tocS_CallTerminateResponsePayload">CallTerminateResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemacallterminateresponsepayload"></a>
<a id="schema_CallTerminateResponsePayload"></a>
<a id="tocScallterminateresponsepayload"></a>
<a id="tocscallterminateresponsepayload"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_ErrorObject">ErrorObject</h2>
<!-- backwards compatibility -->
<a id="schemaerrorobject"></a>
<a id="schema_ErrorObject"></a>
<a id="tocSerrorobject"></a>
<a id="tocserrorobject"></a>

```json
{
  "message": "string",
  "type": "string",
  "code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human-readable description of the error|
|type|string|true|none|Error type classification|
|code|integer|true|none|Numeric error code|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<h2 id="tocS_ErrorObject_1">ErrorObject_1</h2>
<!-- backwards compatibility -->
<a id="schemaerrorobject_1"></a>
<a id="schema_ErrorObject_1"></a>
<a id="tocSerrorobject_1"></a>
<a id="tocserrorobject_1"></a>

```json
{
  "message": "string",
  "type": "string",
  "code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human-readable description of the error|
|type|string|true|none|Error type classification|
|code|integer|true|none|Numeric error code|

<h2 id="tocS_ErrorResponse_1">ErrorResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse_1"></a>
<a id="schema_ErrorResponse_1"></a>
<a id="tocSerrorresponse_1"></a>
<a id="tocserrorresponse_1"></a>

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "code": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorObject](#schemaerrorobject)|true|none|none|

<h2 id="tocS_PagingInfo">PagingInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo"></a>
<a id="schema_PagingInfo"></a>
<a id="tocSpaginginfo"></a>
<a id="tocspaginginfo"></a>

```json
{
  "cursors": {
    "before": "string",
    "after": "string"
  },
  "previous": "string",
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|Previous page URL|
|next|string|false|none|Next page URL|

<h2 id="tocS_TemplateObject">TemplateObject</h2>
<!-- backwards compatibility -->
<a id="schematemplateobject"></a>
<a id="schema_TemplateObject"></a>
<a id="tocStemplateobject"></a>
<a id="tocstemplateobject"></a>

```json
{
  "name": "TEMPLATE_NAME",
  "language": {
    "policy": "deterministic",
    "code": "en_US"
  },
  "components": [
    {
      "type": "header",
      "parameters": [
        {
          "type": "image",
          "image": {
            "link": "http(s)://example.com/image.jpg"
          }
        }
      ]
    },
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "text": "Hello {{1}}! Your order of {{2}} is confirmed for {{3}}."
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "quick_reply",
      "index": "0",
      "parameters": [
        {
          "type": "payload",
          "payload": "ORDER_DETAILS_CLICKED"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the template.|
|language|[LanguageObject](#schemalanguageobject)|true|none|Contains a `language` object. Specifies the language the template may be rendered in|
|components|[[TemplateComponent](#schematemplatecomponent)]|false|none|Array of `components` objects containing the parameters of the message.|

<h2 id="tocS_LanguageObject">LanguageObject</h2>
<!-- backwards compatibility -->
<a id="schemalanguageobject"></a>
<a id="schema_LanguageObject"></a>
<a id="tocSlanguageobject"></a>
<a id="tocslanguageobject"></a>

```json
{
  "policy": "deterministic",
  "code": "en_US"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|string|true|none|The language policy the message should follow.|
|code|string|true|none|The code of the language or locale to use (e.g., `"en"`, `"en_US"`).|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|deterministic|

<h2 id="tocS_TemplateComponent">TemplateComponent</h2>
<!-- backwards compatibility -->
<a id="schematemplatecomponent"></a>
<a id="schema_TemplateComponent"></a>
<a id="tocStemplatecomponent"></a>
<a id="tocstemplatecomponent"></a>

```json
{
  "type": "header",
  "sub_type": "quick_reply",
  "parameters": [],
  "index": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the component type.|
|sub_type|string|false|none|Required when `type=button`. Not used for other types. Type of button to create.|
|parameters|array|false|none|Array of parameter objects with the content of the message.|
|index|string|false|none|Required when `type=button`. Not used for other types. Position index of the button (0-9).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|header|
|type|body|
|type|button|
|sub_type|quick_reply|
|sub_type|url|
|sub_type|catalog|

<h2 id="tocS_HeaderComponent">HeaderComponent</h2>
<!-- backwards compatibility -->
<a id="schemaheadercomponent"></a>
<a id="schema_HeaderComponent"></a>
<a id="tocSheadercomponent"></a>
<a id="tocsheadercomponent"></a>

```json
{
  "type": "header",
  "sub_type": "quick_reply",
  "parameters": [
    {
      "type": "image",
      "image": {
        "link": "http(s)://example.com/header_image.jpg"
      }
    }
  ],
  "index": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the component type.|
|sub_type|string|false|none|Required when `type=button`. Not used for other types. Type of button to create.|
|parameters|array|false|none|Array of parameter objects with the content of the message.|
|index|string|false|none|Required when `type=button`. Not used for other types. Position index of the button (0-9).|
|type|string|true|none|none|
|parameters|[[ParameterObject](#schemaparameterobject)]|false|none|Parameters for the header component, which can be `image`, `video`, `document`, or `text`. [15, 16]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|header|
|type|body|
|type|button|
|sub_type|quick_reply|
|sub_type|url|
|sub_type|catalog|
|type|header|

<h2 id="tocS_BodyComponent">BodyComponent</h2>
<!-- backwards compatibility -->
<a id="schemabodycomponent"></a>
<a id="schema_BodyComponent"></a>
<a id="tocSbodycomponent"></a>
<a id="tocsbodycomponent"></a>

```json
{
  "type": "body",
  "sub_type": "quick_reply",
  "parameters": [
    {
      "type": "text",
      "text": "Hi John, your total is"
    },
    {
      "type": "currency",
      "currency": {
        "fallback_value": "$100.00 USD",
        "code": "USD",
        "amount_1000": 100000
      }
    }
  ],
  "index": "0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the component type.|
|sub_type|string|false|none|Required when `type=button`. Not used for other types. Type of button to create.|
|parameters|array|false|none|Array of parameter objects with the content of the message.|
|index|string|false|none|Required when `type=button`. Not used for other types. Position index of the button (0-9).|
|type|string|true|none|none|
|parameters|[[ParameterObject](#schemaparameterobject)]|false|none|Parameters for the body component, which can be `text`, `currency`, or `date_time`. [17]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|header|
|type|body|
|type|button|
|sub_type|quick_reply|
|sub_type|url|
|sub_type|catalog|
|type|body|

<h2 id="tocS_ButtonComponent">ButtonComponent</h2>
<!-- backwards compatibility -->
<a id="schemabuttoncomponent"></a>
<a id="schema_ButtonComponent"></a>
<a id="tocSbuttoncomponent"></a>
<a id="tocsbuttoncomponent"></a>

```json
{
  "type": "button",
  "sub_type": "quick_reply",
  "parameters": [
    {
      "type": "payload",
      "payload": "VIEW_DETAILS_BUTTON_CLICK"
    }
  ],
  "index": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the component type.|
|sub_type|string|true|none|Required when `type=button`. Not used for other types. Type of button to create.|
|parameters|array|true|none|Array of parameter objects with the content of the message.|
|index|string|true|none|Required when `type=button`. Not used for other types. Position index of the button (0-9).|
|type|string|true|none|none|
|sub_type|string|true|none|none|
|index|string|true|none|none|
|parameters|[[ButtonParameterObject](#schemabuttonparameterobject)]|true|none|Parameters for the button component, which are `payload` for quick reply or `text` for URL buttons.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|header|
|type|body|
|type|button|
|sub_type|quick_reply|
|sub_type|url|
|sub_type|catalog|
|type|button|
|sub_type|quick_reply|
|sub_type|url|
|sub_type|catalog|

<h2 id="tocS_ParameterObject">ParameterObject</h2>
<!-- backwards compatibility -->
<a id="schemaparameterobject"></a>
<a id="schema_ParameterObject"></a>
<a id="tocSparameterobject"></a>
<a id="tocsparameterobject"></a>

```json
{
  "type": "currency"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|

<h2 id="tocS_TextParameter">TextParameter</h2>
<!-- backwards compatibility -->
<a id="schematextparameter"></a>
<a id="schema_TextParameter"></a>
<a id="tocStextparameter"></a>
<a id="tocstextparameter"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|text|string|true|none|The message's text.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|text|

<h2 id="tocS_CurrencyParameter">CurrencyParameter</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyparameter"></a>
<a id="schema_CurrencyParameter"></a>
<a id="tocScurrencyparameter"></a>
<a id="tocscurrencyparameter"></a>

```json
{
  "type": "currency",
  "currency": {
    "fallback_value": "USD $100.00",
    "code": "USD",
    "amount_1000": 100000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|currency|[CurrencyObject](#schemacurrencyobject)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|currency|

<h2 id="tocS_DateTimeParameter">DateTimeParameter</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeparameter"></a>
<a id="schema_DateTimeParameter"></a>
<a id="tocSdatetimeparameter"></a>
<a id="tocsdatetimeparameter"></a>

```json
{
  "type": "date_time",
  "date_time": {
    "fallback_value": "December 25, 2024"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|date_time|[DateTimeObject](#schemadatetimeobject)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|date_time|

<h2 id="tocS_DocumentParameter">DocumentParameter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentparameter"></a>
<a id="schema_DocumentParameter"></a>
<a id="tocSdocumentparameter"></a>
<a id="tocsdocumentparameter"></a>

```json
{
  "type": "document",
  "document": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|document|[MediaObject](#schemamediaobject)|true|none|Only PDF documents are supported for media-based message templates. Captions not supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|document|

<h2 id="tocS_ImageParameter">ImageParameter</h2>
<!-- backwards compatibility -->
<a id="schemaimageparameter"></a>
<a id="schema_ImageParameter"></a>
<a id="tocSimageparameter"></a>
<a id="tocsimageparameter"></a>

```json
{
  "type": "image",
  "image": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|image|[MediaObject](#schemamediaobject)|true|none|A media object of type image. Captions not supported. [15]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|image|

<h2 id="tocS_VideoParameter">VideoParameter</h2>
<!-- backwards compatibility -->
<a id="schemavideoparameter"></a>
<a id="schema_VideoParameter"></a>
<a id="tocSvideoparameter"></a>
<a id="tocsvideoparameter"></a>

```json
{
  "type": "video",
  "video": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Describes the parameter type. For text-based templates, only `"currency"`, `"date_time"`, and `"text"` are supported.|
|type|string|true|none|none|
|video|[MediaObject](#schemamediaobject)|true|none|A media object of type video. Captions not supported. [16]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|currency|
|type|date_time|
|type|document|
|type|image|
|type|text|
|type|video|
|type|video|

<h2 id="tocS_CurrencyObject">CurrencyObject</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyobject"></a>
<a id="schema_CurrencyObject"></a>
<a id="tocScurrencyobject"></a>
<a id="tocscurrencyobject"></a>

```json
{
  "fallback_value": "USD $100.00",
  "code": "USD",
  "amount_1000": 100000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fallback_value|string|true|none|Default text if localization fails.|
|code|string|true|none|Currency code as defined in ISO 4217.|
|amount_1000|integer(int32)|true|none|Amount multiplied by 1000 (e.g., 100000 for $100.00).|

<h2 id="tocS_DateTimeObject">DateTimeObject</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeobject"></a>
<a id="schema_DateTimeObject"></a>
<a id="tocSdatetimeobject"></a>
<a id="tocsdatetimeobject"></a>

```json
{
  "fallback_value": "December 25, 2024"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fallback_value|string|true|none|Default text. For Cloud API, this fallback value is always used.|

<h2 id="tocS_MediaObject">MediaObject</h2>
<!-- backwards compatibility -->
<a id="schemamediaobject"></a>
<a id="schema_MediaObject"></a>
<a id="tocSmediaobject"></a>
<a id="tocsmediaobject"></a>

```json
{
  "id": "MEDIA_OBJECT_ID"
}
```

A media object. Either `id` or `link` is required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|id|string|true|none|The media object ID. **Required when `link` is not used.**|
|*oneOf*|object|false|none|none|
|link|string(url)|true|none|The protocol and URL of the media to be sent (HTTP/HTTPS only).|

<h2 id="tocS_ButtonParameterObject">ButtonParameterObject</h2>
<!-- backwards compatibility -->
<a id="schemabuttonparameterobject"></a>
<a id="schema_ButtonParameterObject"></a>
<a id="tocSbuttonparameterobject"></a>
<a id="tocsbuttonparameterobject"></a>

```json
{
  "type": "payload"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates the type of parameter for the button.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payload|
|type|text|

<h2 id="tocS_ButtonPayloadParameter">ButtonPayloadParameter</h2>
<!-- backwards compatibility -->
<a id="schemabuttonpayloadparameter"></a>
<a id="schema_ButtonPayloadParameter"></a>
<a id="tocSbuttonpayloadparameter"></a>
<a id="tocsbuttonpayloadparameter"></a>

```json
{
  "type": "payload",
  "payload": "USER_CLICKED_OPTION_A"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates the type of parameter for the button.|
|type|string|true|none|none|
|payload|string|true|none|Developer-defined payload that is returned when the quick reply button is clicked.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payload|
|type|text|
|type|payload|

<h2 id="tocS_ButtonTextParameter">ButtonTextParameter</h2>
<!-- backwards compatibility -->
<a id="schemabuttontextparameter"></a>
<a id="schema_ButtonTextParameter"></a>
<a id="tocSbuttontextparameter"></a>
<a id="tocsbuttontextparameter"></a>

```json
{
  "type": "text",
  "text": "product-details-123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates the type of parameter for the button.|
|type|string|true|none|none|
|text|string|true|none|Developer-provided suffix that is appended to the predefined prefix URL in the template.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payload|
|type|text|
|type|text|

<h2 id="tocS_MarketingMessageRequestPayload">MarketingMessageRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemamarketingmessagerequestpayload"></a>
<a id="schema_MarketingMessageRequestPayload"></a>
<a id="tocSmarketingmessagerequestpayload"></a>
<a id="tocsmarketingmessagerequestpayload"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16315552222",
  "type": "template",
  "template": {
    "name": "TEMPLATE_NAME",
    "language": {
      "policy": "deterministic",
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "link": "http(s)://example.com/image.jpg"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Hello {{1}}! Your order of {{2}} is confirmed for {{3}}."
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "quick_reply",
        "index": "0",
        "parameters": [
          {
            "type": "payload",
            "payload": "ORDER_DETAILS_CLICKED"
          }
        ]
      }
    ]
  },
  "product_policy": "CLOUD_API_FALLBACK",
  "message_activity_sharing": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging service used. Must be "whatsapp"|
|recipient_type|string|true|none|Type of recipient. Must be "individual"|
|to|string|true|none|WhatsApp ID or phone number of the message recipient|
|type|string|true|none|Type of message. Must be "template" for marketing messages|
|template|[TemplateObject](#schematemplateobject)|true|none|none|
|product_policy|string|false|none|Optional product policy setting|
|message_activity_sharing|boolean|false|none|Optional flag to control message activity sharing|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|recipient_type|individual|
|type|template|
|product_policy|CLOUD_API_FALLBACK|
|product_policy|STRICT|

<h2 id="tocS_MessageStatus">MessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatus"></a>
<a id="schema_MessageStatus"></a>
<a id="tocSmessagestatus"></a>
<a id="tocsmessagestatus"></a>

```json
"accepted"
```

The status of a WhatsApp message:
- `accepted`: The message has been accepted by WhatsApp and is being processed
- `held_for_quality_assessment`: The message is being held for quality assessment before delivery
- `paused`: The message delivery has been paused

<h2 id="tocS_MarketingMessageResponsePayload">MarketingMessageResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemamarketingmessageresponsepayload"></a>
<a id="schema_MarketingMessageResponsePayload"></a>
<a id="tocSmarketingmessageresponsepayload"></a>
<a id="tocsmarketingmessageresponsepayload"></a>

```json
{
  "contacts": [
    {
      "input": "16315552222",
      "wa_id": "16315552222"
    }
  ],
  "messages": [
    {
      "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww",
      "message_status": "accepted"
    }
  ],
  "messaging_product": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[object]|false|none|none|
|messages|[object]|false|none|none|
|messaging_product|string|false|none|none|

<h2 id="tocS_BaseMessageProperties">BaseMessageProperties</h2>
<!-- backwards compatibility -->
<a id="schemabasemessageproperties"></a>
<a id="schema_BaseMessageProperties"></a>
<a id="tocSbasemessageproperties"></a>
<a id="tocsbasemessageproperties"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "string",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  }
}
```

Common properties shared by all message types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|

<h2 id="tocS_MessageContext">MessageContext</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontext"></a>
<a id="schema_MessageContext"></a>
<a id="tocSmessagecontext"></a>
<a id="tocsmessagecontext"></a>

```json
{
  "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
}
```

Context information for replying to a message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|false|none|The ID of the message to which this message is a reply.|

<h2 id="tocS_MediaObject_1">MediaObject_1</h2>
<!-- backwards compatibility -->
<a id="schemamediaobject_1"></a>
<a id="schema_MediaObject_1"></a>
<a id="tocSmediaobject_1"></a>
<a id="tocsmediaobject_1"></a>

```json
{
  "id": "MEDIA_OBJECT_ID",
  "caption": "string"
}
```

A media object. Either `id` or `link` is required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|id|string|true|none|The media object ID. **Required when `link` is not used.**|
|caption|string|false|none|Optional caption for the media|
|*oneOf*|object|false|none|none|
|link|string(url)|true|none|The protocol and URL of the media to be sent (HTTP/HTTPS only).|
|caption|string|false|none|Optional caption for the media|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "text",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "text": {
    "body": "Hello World!",
    "preview_url": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextMessage](#schematextmessage)|false|none|none|
|*oneOf*|[AudioMessage](#schemaaudiomessage)|false|none|none|
|*oneOf*|[DocumentMessage](#schemadocumentmessage)|false|none|none|
|*oneOf*|[ImageMessage](#schemaimagemessage)|false|none|none|
|*oneOf*|[LocationMessage](#schemalocationmessage)|false|none|none|
|*oneOf*|[VideoMessage](#schemavideomessage)|false|none|none|
|*oneOf*|[StickerMessage](#schemastickermessage)|false|none|none|
|*oneOf*|[ReactionMessage](#schemareactionmessage)|false|none|none|
|*oneOf*|[InteractiveMessage](#schemainteractivemessage)|false|none|none|
|*oneOf*|[TemplateMessage](#schematemplatemessage)|false|none|none|
|*oneOf*|[ContactsMessage](#schemacontactsmessage)|false|none|none|

<h2 id="tocS_TextMessage">TextMessage</h2>
<!-- backwards compatibility -->
<a id="schematextmessage"></a>
<a id="schema_TextMessage"></a>
<a id="tocStextmessage"></a>
<a id="tocstextmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "text",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "text": {
    "body": "Hello World!",
    "preview_url": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|text|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|text|

<h2 id="tocS_AudioMessage">AudioMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomessage"></a>
<a id="schema_AudioMessage"></a>
<a id="tocSaudiomessage"></a>
<a id="tocsaudiomessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "audio",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "audio": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|audio|[MediaObject](#schemamediaobject)|true|none|A media object. Either `id` or `link` is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|audio|

<h2 id="tocS_VideoMessage">VideoMessage</h2>
<!-- backwards compatibility -->
<a id="schemavideomessage"></a>
<a id="schema_VideoMessage"></a>
<a id="tocSvideomessage"></a>
<a id="tocsvideomessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "video",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "video": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|video|[MediaObject](#schemamediaobject)|true|none|A media object. Either `id` or `link` is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|video|

<h2 id="tocS_DocumentMessage">DocumentMessage</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmessage"></a>
<a id="schema_DocumentMessage"></a>
<a id="tocSdocumentmessage"></a>
<a id="tocsdocumentmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "document",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "document": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|document|[MediaObject](#schemamediaobject)|true|none|A media object. Either `id` or `link` is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|document|

<h2 id="tocS_ImageMessage">ImageMessage</h2>
<!-- backwards compatibility -->
<a id="schemaimagemessage"></a>
<a id="schema_ImageMessage"></a>
<a id="tocSimagemessage"></a>
<a id="tocsimagemessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "image",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "image": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|image|[MediaObject](#schemamediaobject)|true|none|A media object. Either `id` or `link` is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|image|

<h2 id="tocS_LocationMessage">LocationMessage</h2>
<!-- backwards compatibility -->
<a id="schemalocationmessage"></a>
<a id="schema_LocationMessage"></a>
<a id="tocSlocationmessage"></a>
<a id="tocslocationmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "location",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "location": {
    "address": "1 Hacker Way, Menlo Park, CA 94025",
    "latitude": 37.4847,
    "longitude": -122.1486,
    "name": "Meta HQ"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|location|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|location|

<h2 id="tocS_StickerMessage">StickerMessage</h2>
<!-- backwards compatibility -->
<a id="schemastickermessage"></a>
<a id="schema_StickerMessage"></a>
<a id="tocSstickermessage"></a>
<a id="tocsstickermessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "sticker",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "sticker": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|sticker|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|sticker|

<h2 id="tocS_ReactionMessage">ReactionMessage</h2>
<!-- backwards compatibility -->
<a id="schemareactionmessage"></a>
<a id="schema_ReactionMessage"></a>
<a id="tocSreactionmessage"></a>
<a id="tocsreactionmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "reaction",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "reaction": {
    "emoji": "string",
    "message_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|reaction|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|reaction|

<h2 id="tocS_InteractiveMessage">InteractiveMessage</h2>
<!-- backwards compatibility -->
<a id="schemainteractivemessage"></a>
<a id="schema_InteractiveMessage"></a>
<a id="tocSinteractivemessage"></a>
<a id="tocsinteractivemessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "interactive",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "string",
      "sub_text": "string",
      "document": {
        "id": "MEDIA_OBJECT_ID"
      },
      "image": {
        "id": "MEDIA_OBJECT_ID"
      },
      "video": {
        "id": "MEDIA_OBJECT_ID"
      }
    },
    "body": {
      "text": "string"
    },
    "footer": {
      "text": "string"
    },
    "action": {
      "button": "string",
      "sections": [
        {
          "title": "string",
          "product_items": [
            {
              "product_retailer_id": "string"
            }
          ],
          "rows": [
            {
              "id": "string",
              "title": "string",
              "description": "string"
            }
          ]
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|interactive|[InteractiveObject](#schemainteractiveobject)|true|none|An object containing the content for an interactive message.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|interactive|

<h2 id="tocS_InteractiveObject">InteractiveObject</h2>
<!-- backwards compatibility -->
<a id="schemainteractiveobject"></a>
<a id="schema_InteractiveObject"></a>
<a id="tocSinteractiveobject"></a>
<a id="tocsinteractiveobject"></a>

```json
{
  "type": "button",
  "header": {
    "type": "text",
    "text": "string",
    "sub_text": "string",
    "document": {
      "id": "MEDIA_OBJECT_ID"
    },
    "image": {
      "id": "MEDIA_OBJECT_ID"
    },
    "video": {
      "id": "MEDIA_OBJECT_ID"
    }
  },
  "body": {
    "text": "string"
  },
  "footer": {
    "text": "string"
  },
  "action": {
    "button": "string",
    "sections": [
      {
        "title": "string",
        "product_items": [
          {
            "product_retailer_id": "string"
          }
        ],
        "rows": [
          {
            "id": "string",
            "title": "string",
            "description": "string"
          }
        ]
      }
    ]
  }
}
```

An object containing the content for an interactive message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of interactive message to send.|
|header|[HeaderObject](#schemaheaderobject)|false|none|Header content displayed on top of a message. Required for 'product_list' type. Cannot be set for 'product' type.|
|body|[BodyObject](#schemabodyobject)|false|none|An object with the body of the message. Optional for 'product' type, required for other interactive message types.|
|footer|[FooterObject](#schemafooterobject)|false|none|An object with the footer of the message. Optional.|
|action|[ActionObject](#schemaactionobject)|true|none|Action you want the user to perform after reading the message. Its structure varies by interactive message type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|button|
|type|call_permission_request|
|type|catalog_message|
|type|list|
|type|product|
|type|product_list|
|type|flow|

<h2 id="tocS_HeaderObject">HeaderObject</h2>
<!-- backwards compatibility -->
<a id="schemaheaderobject"></a>
<a id="schema_HeaderObject"></a>
<a id="tocSheaderobject"></a>
<a id="tocsheaderobject"></a>

```json
{
  "type": "text",
  "text": "string",
  "sub_text": "string",
  "document": {
    "id": "MEDIA_OBJECT_ID"
  },
  "image": {
    "id": "MEDIA_OBJECT_ID"
  },
  "video": {
    "id": "MEDIA_OBJECT_ID"
  }
}
```

Header content displayed on top of a message. Required for 'product_list' type. Cannot be set for 'product' type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The header type.|
|text|string|false|none|Text for the header. Required if 'type' is 'text'. Emojis supported, no markdown.|
|sub_text|string|false|none|Optional sub-text for the header. Emojis supported, no markdown.|
|document|[MediaObject](#schemamediaobject)|false|none|Contains the media object for this document. Required if 'type' is 'document'.|
|image|[MediaObject](#schemamediaobject)|false|none|Contains the media object for this image. Required if 'type' is 'image'.|
|video|[MediaObject](#schemamediaobject)|false|none|Contains the media object for this video. Required if 'type' is 'video'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|video|
|type|image|
|type|document|

<h2 id="tocS_BodyObject">BodyObject</h2>
<!-- backwards compatibility -->
<a id="schemabodyobject"></a>
<a id="schema_BodyObject"></a>
<a id="tocSbodyobject"></a>
<a id="tocsbodyobject"></a>

```json
{
  "text": "string"
}
```

An object with the body of the message. Optional for 'product' type, required for other interactive message types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The content of the message body. Emojis and markdown are supported.|

<h2 id="tocS_FooterObject">FooterObject</h2>
<!-- backwards compatibility -->
<a id="schemafooterobject"></a>
<a id="schema_FooterObject"></a>
<a id="tocSfooterobject"></a>
<a id="tocsfooterobject"></a>

```json
{
  "text": "string"
}
```

An object with the footer of the message. Optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The footer content. Emojis, markdown, and links are supported.|

<h2 id="tocS_ActionObject">ActionObject</h2>
<!-- backwards compatibility -->
<a id="schemaactionobject"></a>
<a id="schema_ActionObject"></a>
<a id="tocSactionobject"></a>
<a id="tocsactionobject"></a>

```json
{
  "button": "string",
  "sections": [
    {
      "title": "string",
      "product_items": [
        {
          "product_retailer_id": "string"
        }
      ],
      "rows": [
        {
          "id": "string",
          "title": "string",
          "description": "string"
        }
      ]
    }
  ]
}
```

Action you want the user to perform after reading the message. Its structure varies by interactive message type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|button|string|true|none|Button content for List Messages. Cannot be empty, must be unique. Emojis supported, no markdown.|
|sections|[[SectionObject](#schemasectionobject)]|true|none|Array of section objects.|
|*oneOf*|object|false|none|none|
|buttons|[object]|true|none|Array of button objects.|
|*oneOf*|object|false|none|none|
|catalog_id|string|true|none|Unique identifier of the Facebook catalog linked to your WhatsApp Business Account.|
|product_retailer_id|string|false|none|Unique identifier of the product in a catalog. Required for Single Product Messages.|
|sections|[[SectionObject](#schemasectionobject)]|false|none|Array of section objects.|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|parameters|object|true|none|none|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|
|parameters|object|true|none|none|
|*oneOf*|object|false|none|none|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|catalog_message|
|name|flow|
|name|call_permission_request|

<h2 id="tocS_SectionObject">SectionObject</h2>
<!-- backwards compatibility -->
<a id="schemasectionobject"></a>
<a id="schema_SectionObject"></a>
<a id="tocSsectionobject"></a>
<a id="tocssectionobject"></a>

```json
{
  "title": "string",
  "product_items": [
    {
      "product_retailer_id": "string"
    }
  ],
  "rows": [
    {
      "id": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```

A section object, used in List Messages and Multi-Product Messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the section. Required if the message has more than one section. Max 24 characters.|
|product_items|[object]|false|none|Array of product objects.|
|rows|[object]|false|none|Contains a list of rows.|

<h2 id="tocS_TemplateMessage">TemplateMessage</h2>
<!-- backwards compatibility -->
<a id="schematemplatemessage"></a>
<a id="schema_TemplateMessage"></a>
<a id="tocStemplatemessage"></a>
<a id="tocstemplatemessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "template",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "template": {
    "name": "TEMPLATE_NAME",
    "language": {
      "policy": "deterministic",
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "link": "http(s)://example.com/image.jpg"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Hello {{1}}! Your order of {{2}} is confirmed for {{3}}."
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "quick_reply",
        "index": "0",
        "parameters": [
          {
            "type": "payload",
            "payload": "ORDER_DETAILS_CLICKED"
          }
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|template|[TemplateObject](#schematemplateobject)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|template|

<h2 id="tocS_ContactsMessage">ContactsMessage</h2>
<!-- backwards compatibility -->
<a id="schemacontactsmessage"></a>
<a id="schema_ContactsMessage"></a>
<a id="tocScontactsmessage"></a>
<a id="tocscontactsmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "contacts",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "contacts": [
    {
      "addresses": [
        {
          "city": "Menlo Park",
          "country": "United States",
          "country_code": "us",
          "state": "CA",
          "street": "1 Hacker Way",
          "type": "HOME",
          "zip": "94025"
        }
      ],
      "birthday": "2012-08-18",
      "emails": [
        {
          "email": "test@fb.com",
          "type": "HOME"
        }
      ],
      "name": {
        "first_name": "John",
        "formatted_name": "John Smith",
        "last_name": "Smith",
        "middle_name": "D.",
        "prefix": "Dr",
        "suffix": "Jr"
      },
      "org": {
        "company": "WhatsApp",
        "department": "Design",
        "title": "Manager"
      },
      "phones": [
        {
          "phone": "+1 (650) 555-1234",
          "type": "HOME",
          "wa_id": "16505551234"
        }
      ],
      "urls": [
        {
          "type": "HOME",
          "url": "https://www.facebook.com"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|contacts|[[ContactObject](#schemacontactobject)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|contacts|

<h2 id="tocS_ContactObject">ContactObject</h2>
<!-- backwards compatibility -->
<a id="schemacontactobject"></a>
<a id="schema_ContactObject"></a>
<a id="tocScontactobject"></a>
<a id="tocscontactobject"></a>

```json
{
  "addresses": [
    {
      "city": "Menlo Park",
      "country": "United States",
      "country_code": "us",
      "state": "CA",
      "street": "1 Hacker Way",
      "type": "HOME",
      "zip": "94025"
    }
  ],
  "birthday": "2012-08-18",
  "emails": [
    {
      "email": "test@fb.com",
      "type": "HOME"
    }
  ],
  "name": {
    "first_name": "John",
    "formatted_name": "John Smith",
    "last_name": "Smith",
    "middle_name": "D.",
    "prefix": "Dr",
    "suffix": "Jr"
  },
  "org": {
    "company": "WhatsApp",
    "department": "Design",
    "title": "Manager"
  },
  "phones": [
    {
      "phone": "+1 (650) 555-1234",
      "type": "HOME",
      "wa_id": "16505551234"
    }
  ],
  "urls": [
    {
      "type": "HOME",
      "url": "https://www.facebook.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[AddressObject](#schemaaddressobject)]|false|none|Full contact address(es)|
|birthday|string(date)|false|none|Date of birth (YYYY-MM-DD format)|
|emails|[[EmailObject](#schemaemailobject)]|false|none|Contact email address(es)|
|name|[NameObject](#schemanameobject)|false|none|Contact name object|
|org|[OrganizationObject](#schemaorganizationobject)|false|none|Contact organization information|
|phones|[[PhoneObject](#schemaphoneobject)]|false|none|Contact phone number(s)|
|urls|[[UrlObject](#schemaurlobject)]|false|none|Contact URL(s)|

<h2 id="tocS_AddressObject">AddressObject</h2>
<!-- backwards compatibility -->
<a id="schemaaddressobject"></a>
<a id="schema_AddressObject"></a>
<a id="tocSaddressobject"></a>
<a id="tocsaddressobject"></a>

```json
{
  "city": "Menlo Park",
  "country": "United States",
  "country_code": "us",
  "state": "CA",
  "street": "1 Hacker Way",
  "type": "HOME",
  "zip": "94025"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City name|
|country|string|false|none|Full country name|
|country_code|string|false|none|Two-letter ISO country code|
|state|string|false|none|State abbreviation|
|street|string|false|none|Street address|
|type|string|false|none|Address type|
|zip|string|false|none|ZIP code|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_EmailObject">EmailObject</h2>
<!-- backwards compatibility -->
<a id="schemaemailobject"></a>
<a id="schema_EmailObject"></a>
<a id="tocSemailobject"></a>
<a id="tocsemailobject"></a>

```json
{
  "email": "test@fb.com",
  "type": "HOME"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|Email address|
|type|string|false|none|Email type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_NameObject">NameObject</h2>
<!-- backwards compatibility -->
<a id="schemanameobject"></a>
<a id="schema_NameObject"></a>
<a id="tocSnameobject"></a>
<a id="tocsnameobject"></a>

```json
{
  "first_name": "John",
  "formatted_name": "John Smith",
  "last_name": "Smith",
  "middle_name": "D.",
  "prefix": "Dr",
  "suffix": "Jr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|First name|
|formatted_name|string|false|none|Formatted full name|
|last_name|string|false|none|Last name|
|middle_name|string|false|none|Middle name|
|prefix|string|false|none|Name prefix|
|suffix|string|false|none|Name suffix|

<h2 id="tocS_OrganizationObject">OrganizationObject</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationobject"></a>
<a id="schema_OrganizationObject"></a>
<a id="tocSorganizationobject"></a>
<a id="tocsorganizationobject"></a>

```json
{
  "company": "WhatsApp",
  "department": "Design",
  "title": "Manager"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|false|none|Company name|
|department|string|false|none|Department name|
|title|string|false|none|Job title|

<h2 id="tocS_PhoneObject">PhoneObject</h2>
<!-- backwards compatibility -->
<a id="schemaphoneobject"></a>
<a id="schema_PhoneObject"></a>
<a id="tocSphoneobject"></a>
<a id="tocsphoneobject"></a>

```json
{
  "phone": "+1 (650) 555-1234",
  "type": "HOME",
  "wa_id": "16505551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|Phone number|
|type|string|false|none|Phone type|
|wa_id|string|false|none|WhatsApp ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_UrlObject">UrlObject</h2>
<!-- backwards compatibility -->
<a id="schemaurlobject"></a>
<a id="schema_UrlObject"></a>
<a id="tocSurlobject"></a>
<a id="tocsurlobject"></a>

```json
{
  "type": "HOME",
  "url": "https://www.facebook.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|URL type|
|url|string(uri)|true|none|URL|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_MessageResponsePayload">MessageResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponsepayload"></a>
<a id="schema_MessageResponsePayload"></a>
<a id="tocSmessageresponsepayload"></a>
<a id="tocsmessageresponsepayload"></a>

```json
{
  "contacts": [
    {
      "input": "48XXXXXXXXX",
      "wa_id": "48XXXXXXXXX "
    }
  ],
  "messages": [
    {
      "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww",
      "message_status": "accepted"
    }
  ],
  "messaging_product": "whatsapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[object]|false|none|none|
|messages|[object]|false|none|none|
|messaging_product|string|false|none|none|

<h2 id="tocS_MarkMessageRequestPayload">MarkMessageRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemamarkmessagerequestpayload"></a>
<a id="schema_MarkMessageRequestPayload"></a>
<a id="tocSmarkmessagerequestpayload"></a>
<a id="tocsmarkmessagerequestpayload"></a>

```json
{
  "message_id": "wamid.234123",
  "messaging_product": "whatsapp",
  "status": "read"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|true|none|none|
|messaging_product|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_MarkMessageResponsePayload">MarkMessageResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemamarkmessageresponsepayload"></a>
<a id="schema_MarkMessageResponsePayload"></a>
<a id="tocSmarkmessageresponsepayload"></a>
<a id="tocsmarkmessageresponsepayload"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_QrCodeDetails">QrCodeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaqrcodedetails"></a>
<a id="schema_QrCodeDetails"></a>
<a id="tocSqrcodedetails"></a>
<a id="tocsqrcodedetails"></a>

```json
{
  "code": "ANED2T5QRU7HG1",
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
  "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",
  "creation_time": 1672531200,
  "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"
}
```

Complete details of a message QR code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Unique 14-character QR code identifier|
|prefilled_message|string|true|none|Pre-filled message text that appears in customer chat|
|deep_link_url|string(uri)|true|none|WhatsApp deep link URL for direct conversation initiation|
|creation_time|integer|false|none|Unix timestamp when QR code was created (first-party apps only)|
|qr_image_url|string(uri)|false|none|QR code image download URL (when format specified in fields)|

<h2 id="tocS_QrCodeList">QrCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaqrcodelist"></a>
<a id="schema_QrCodeList"></a>
<a id="tocSqrcodelist"></a>
<a id="tocsqrcodelist"></a>

```json
{
  "data": [
    {
      "code": "ANED2T5QRU7HG1",
      "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",
      "creation_time": 1672531200,
      "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"
    }
  ],
  "paging": {
    "cursors": {
      "before": "MTYwNDYxNzIwMA==",
      "after": "MTYwNDYxNzIwMQ=="
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_qrdls?before=MTYwNDYxNzIwMA==",
    "next": "https://graph.facebook.com/v23.0/1234567890123456/message_qrdls?after=MTYwNDYxNzIwMQ=="
  }
}
```

List of message QR codes with pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[QrCodeDetails](#schemaqrcodedetails)]|true|none|Array of QR code objects|
|paging|object|false|none|Pagination information for navigating through large result sets.<br>Contains cursors for accessing previous and next pages of results.<br>|

<h2 id="tocS_CreateQrCodeRequest">CreateQrCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateqrcoderequest"></a>
<a id="schema_CreateQrCodeRequest"></a>
<a id="tocScreateqrcoderequest"></a>
<a id="tocscreateqrcoderequest"></a>

```json
{
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
  "generate_qr_image": "SVG"
}
```

Request payload for creating a new message QR code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefilled_message|string|true|none|Pre-filled message text (max 140 characters) that appears in customer chat|
|generate_qr_image|string|false|none|QR image format. When specified, response includes qr_image_url|

#### Enumerated Values

|Property|Value|
|---|---|
|generate_qr_image|PNG|
|generate_qr_image|SVG|

<h2 id="tocS_UpdateQrCodeRequest">UpdateQrCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateqrcoderequest"></a>
<a id="schema_UpdateQrCodeRequest"></a>
<a id="tocSupdateqrcoderequest"></a>
<a id="tocsupdateqrcoderequest"></a>

```json
{
  "code": "ANED2T5QRU7HG1",
  "prefilled_message": "Hello! I'd like to know more about your latest offers."
}
```

Request payload for updating an existing message QR code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|14-character QR code identifier to update|
|prefilled_message|string|true|none|New pre-filled message text (max 140 characters)|

<h2 id="tocS_QrCodeResponse">QrCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqrcoderesponse"></a>
<a id="schema_QrCodeResponse"></a>
<a id="tocSqrcoderesponse"></a>
<a id="tocsqrcoderesponse"></a>

```json
{
  "code": "ANED2T5QRU7HG1",
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
  "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",
  "qr_image_url": "https://scontent-iad3-2.xx.fbcdn.net/m1/v/t6/An-psFmLBls2NFXnhhkSVqwIHEqCTQoNKTLxxlOeci0Wbsukd2RLiwZalHrXwqT5RTFSzOhyw6OLvJJO0itaQtJI1BS2WkNcV67wR3GNx7ZX1tFSNCbpo1e6KPptKF1GbVGzmUfkgSPX?ccb=10-5&oh=00_AfAOAr6oRA2OKV_Ur3GUh4em57sACxUkfhXHsObiFrxOsA&oe=64DCCEF6&_nc_sid=5a413f"
}
```

Response containing QR code details after creation or update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Unique 14-character identifier for the QR code. This code is used<br>for future updates or deletions.<br>|
|prefilled_message|string|true|none|The pre-filled message text associated with this QR code.<br>This text appears when customers use the QR code.<br>|
|deep_link_url|string(uri)|true|none|WhatsApp deep link URL that can be used directly without QR code scanning.<br>Customers can click this link to start a conversation with the pre-filled message.<br>|
|qr_image_url|string(uri)|false|none|URL to download the QR code image. Only present if generate_qr_image<br>parameter was specified in the request. Image format matches the requested format.<br>|

<h2 id="tocS_GraphAPIError_2">GraphAPIError_2</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_2"></a>
<a id="schema_GraphAPIError_2"></a>
<a id="tocSgraphapierror_2"></a>
<a id="tocsgraphapierror_2"></a>

```json
{
  "error": {
    "message": "Invalid prefilled_message length. Maximum 140 characters allowed",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Invalid Request",
    "error_user_msg": "The message text you provided is too long. Please keep it under 140 characters."
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_QrCodeResponse_1">QrCodeResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemaqrcoderesponse_1"></a>
<a id="schema_QrCodeResponse_1"></a>
<a id="tocSqrcoderesponse_1"></a>
<a id="tocsqrcoderesponse_1"></a>

```json
{
  "data": [
    {
      "code": "ANED2T5QRU7HG1",
      "prefilled_message": "Hi! I'm interested in your products. Can you help me?",
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",
      "creation_time": 1672531200,
      "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"
    }
  ]
}
```

Individual QR code response containing a single QR code in data array format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[QrCodeDetails](#schemaqrcodedetails)]|true|none|Array containing the single QR code object (maintains consistency with collection endpoint)|

<h2 id="tocS_DeleteQrCodeResponse">DeleteQrCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteqrcoderesponse"></a>
<a id="schema_DeleteQrCodeResponse"></a>
<a id="tocSdeleteqrcoderesponse"></a>
<a id="tocsdeleteqrcoderesponse"></a>

```json
{
  "success": true
}
```

Response confirming successful QR code deletion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the QR code was successfully deleted|

<h2 id="tocS_GraphAPIError_3">GraphAPIError_3</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_3"></a>
<a id="schema_GraphAPIError_3"></a>
<a id="tocSgraphapierror_3"></a>
<a id="tocsgraphapierror_3"></a>

```json
{
  "error": {
    "message": "QR code not found",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "QR Code Not Found",
    "error_user_msg": "The QR code you're trying to access doesn't exist or has been deleted"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_EncryptedMessageRequest">EncryptedMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedmessagerequest"></a>
<a id="schema_EncryptedMessageRequest"></a>
<a id="tocSencryptedmessagerequest"></a>
<a id="tocsencryptedmessagerequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging service used for the request. Use whatsapp.|
|encrypted_contents|string|true|none|JWE payload with encrypted messages structure. This should be a valid JWE token containing the encrypted message payload.|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|

<h2 id="tocS_EncryptedMessageResponse">EncryptedMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedmessageresponse"></a>
<a id="schema_EncryptedMessageResponse"></a>
<a id="tocSencryptedmessageresponse"></a>
<a id="tocsencryptedmessageresponse"></a>

```json
{
  "encrypted_contents": "eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYifQ..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encrypted_contents|string|true|none|JWE payload with encrypted messages response structure. Contains the encrypted response from the WhatsApp Business API.|

<h2 id="tocS_ErrorResponse_2">ErrorResponse_2</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse_2"></a>
<a id="schema_ErrorResponse_2"></a>
<a id="tocSerrorresponse_2"></a>
<a id="tocserrorresponse_2"></a>

```json
{
  "error": {
    "message": "Invalid JWE token format",
    "type": "OAuthException",
    "code": 400,
    "error_subcode": 1234567
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_OfficialBusinessAccountStatus">OfficialBusinessAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaofficialbusinessaccountstatus"></a>
<a id="schema_OfficialBusinessAccountStatus"></a>
<a id="tocSofficialbusinessaccountstatus"></a>
<a id="tocsofficialbusinessaccountstatus"></a>

```json
{
  "id": "1234567890123456",
  "oba_status": "PENDING",
  "status_message": "Your Official Business Account application is under review"
}
```

Official Business Account status information for a WhatsApp Business Account phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Account phone number|
|oba_status|[WhatsAppBusinessAppealStatus](#schemawhatsappbusinessappealstatus)|true|none|Official Business Account appeal and verification status|
|status_message|string|true|none|Human-readable message describing the current Official Business Account status|

#### Enumerated Values

|Property|Value|
|---|---|
|oba_status|PENDING|
|oba_status|APPROVED|
|oba_status|REJECTED|
|oba_status|UNDER_REVIEW|
|oba_status|EXPIRED|
|oba_status|CANCELLED|

<h2 id="tocS_OfficialBusinessAccountUpdateRequest">OfficialBusinessAccountUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaofficialbusinessaccountupdaterequest"></a>
<a id="schema_OfficialBusinessAccountUpdateRequest"></a>
<a id="tocSofficialbusinessaccountupdaterequest"></a>
<a id="tocsofficialbusinessaccountupdaterequest"></a>

```json
{
  "business_website_url": "https://www.meta.com",
  "primary_country_of_operation": "US",
  "primary_language": "en_US",
  "parent_business_or_brand": "Acme Corporation Ltd",
  "supporting_links": [
    "https://www.example.com/press1",
    "https://www.example.com/press2",
    "https://www.example.com/press3",
    "https://www.example.com/press4",
    "https://www.example.com/press5"
  ],
  "additional_supporting_information": "Leading provider of innovative business solutions"
}
```

Request payload for updating Official Business Account status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_website_url|string(uri)|true|none|Official business website URL|
|primary_country_of_operation|string|true|none|Primary country where the business operates|
|primary_language|string|false|none|Primary language used by the business|
|parent_business_or_brand|string|false|none|Parent business or brand name|
|supporting_links|[string(uri)]|false|none|Supporting links that demonstrate business notability (minimum 5, maximum 10)|
|additional_supporting_information|string|false|none|Additional information to support the Official Business Account application|

<h2 id="tocS_OfficialBusinessAccountUpdateResponse">OfficialBusinessAccountUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaofficialbusinessaccountupdateresponse"></a>
<a id="schema_OfficialBusinessAccountUpdateResponse"></a>
<a id="tocSofficialbusinessaccountupdateresponse"></a>
<a id="tocsofficialbusinessaccountupdateresponse"></a>

```json
{
  "success": true,
  "message": "Official Business Account application submitted successfully",
  "updated_status": {
    "id": "1234567890123456",
    "oba_status": "PENDING",
    "status_message": "Your Official Business Account application is under review"
  },
  "tracking_id": "oba_req_1234567890abcdef"
}
```

Response for Official Business Account status update operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates if the operation was successful|
|message|string|true|none|Human-readable message describing the result of the operation|
|updated_status|[OfficialBusinessAccountStatus](#schemaofficialbusinessaccountstatus)|false|none|Official Business Account status information for a WhatsApp Business Account phone number|
|tracking_id|string|false|none|Unique identifier for tracking the application/update request|

<h2 id="tocS_WhatsAppBusinessAppealStatus">WhatsAppBusinessAppealStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessappealstatus"></a>
<a id="schema_WhatsAppBusinessAppealStatus"></a>
<a id="tocSwhatsappbusinessappealstatus"></a>
<a id="tocswhatsappbusinessappealstatus"></a>

```json
"PENDING"
```

Official Business Account appeal and verification status

<h2 id="tocS_PhoneNumberInfo">PhoneNumberInfo</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberinfo"></a>
<a id="schema_PhoneNumberInfo"></a>
<a id="tocSphonenumberinfo"></a>
<a id="tocsphonenumberinfo"></a>

```json
{
  "id": "1906385232743451",
  "display_phone_number": "+1 631-555-5555",
  "verified_name": "Jasper's Market",
  "quality_rating": "GREEN",
  "code_verification_status": "VERIFIED",
  "name_status": "AVAILABLE_WITHOUT_REVIEW"
}
```

Phone number information and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID associated with the phone number|
|display_phone_number|string|false|none|The string representation of the phone number|
|verified_name|string|false|none|The verified name associated with the phone number|
|quality_rating|string|false|none|The quality rating of the phone number based on how messages have been received by recipients in recent days.<br>- GREEN: High Quality<br>- YELLOW: Medium Quality<br>- RED: Low Quality<br>- NA: Quality has not been determined<br>|
|code_verification_status|string|false|none|The two-step verification status for the phone number indicating whether the number has completed two-step verification.<br>- VERIFIED: Phone number has completed two-step verification<br>- UNVERIFIED: Two-step verification is pending or incomplete<br>|
|name_status|string|false|none|The status of a display name associated with a specific phone number.<br>- APPROVED: The display name has been approved and is ready to use.<br>- AVAILABLE_WITHOUT_REVIEW: The display name is ready to use without review.<br>- DECLINED: The display name has not been approved.<br>- EXPIRED: The display name approval has expired.<br>- PENDING_REVIEW: The display name is under review.<br>- NONE: No display name verification request exists.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|quality_rating|GREEN|
|quality_rating|YELLOW|
|quality_rating|RED|
|quality_rating|NA|
|code_verification_status|VERIFIED|
|code_verification_status|UNVERIFIED|
|name_status|APPROVED|
|name_status|AVAILABLE_WITHOUT_REVIEW|
|name_status|DECLINED|
|name_status|EXPIRED|
|name_status|PENDING_REVIEW|
|name_status|NONE|

<h2 id="tocS_MessageRequest">MessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagerequest"></a>
<a id="schema_MessageRequest"></a>
<a id="tocSmessagerequest"></a>
<a id="tocsmessagerequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+1234567890",
  "type": "text",
  "text": {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "19505550005",
    "type": "text",
    "context": {
      "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
    },
    "text": {
      "body": "Hello World!",
      "preview_url": true
    }
  },
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  }
}
```

Request to send a message via WhatsApp Business API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging service used for the request|
|recipient_type|string|false|none|Type of recipient|
|to|string|true|none|Recipient's phone number (with country code) or group ID|
|type|string|true|none|Type of message being sent|
|text|[TextMessage](#schematextmessage)|false|none|none|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|recipient_type|individual|
|recipient_type|group|
|type|text|
|type|image|
|type|audio|
|type|video|
|type|document|
|type|location|
|type|contacts|
|type|template|
|type|interactive|
|type|reaction|
|type|sticker|

<h2 id="tocS_TextMessage_1">TextMessage_1</h2>
<!-- backwards compatibility -->
<a id="schematextmessage_1"></a>
<a id="schema_TextMessage_1"></a>
<a id="tocStextmessage_1"></a>
<a id="tocstextmessage_1"></a>

```json
{
  "body": "Hello, this is a test message!",
  "preview_url": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|Text content of the message|
|preview_url|boolean|false|none|Whether to show URL preview|

<h2 id="tocS_MessageContext_1">MessageContext_1</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontext_1"></a>
<a id="schema_MessageContext_1"></a>
<a id="tocSmessagecontext_1"></a>
<a id="tocsmessagecontext_1"></a>

```json
{
  "message_id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|false|none|ID of message being replied to|

<h2 id="tocS_SettingsRequest">SettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettingsrequest"></a>
<a id="schema_SettingsRequest"></a>
<a id="tocSsettingsrequest"></a>
<a id="tocssettingsrequest"></a>

```json
{
  "calling": {
    "status": "enabled",
    "call_icon_visibility": "visible"
  }
}
```

Request to update phone number settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calling|[CallingSettings](#schemacallingsettings)|false|none|none|

<h2 id="tocS_CallingSettings">CallingSettings</h2>
<!-- backwards compatibility -->
<a id="schemacallingsettings"></a>
<a id="schema_CallingSettings"></a>
<a id="tocScallingsettings"></a>
<a id="tocscallingsettings"></a>

```json
{
  "status": "enabled",
  "call_icon_visibility": "visible"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Enable or disable calling feature|
|call_icon_visibility|string|false|none|Control visibility of the call icon|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|
|call_icon_visibility|visible|
|call_icon_visibility|hidden|

<h2 id="tocS_RegisterRequest">RegisterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterrequest"></a>
<a id="schema_RegisterRequest"></a>
<a id="tocSregisterrequest"></a>
<a id="tocsregisterrequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "pin": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging service used for the request|
|pin|string|true|none|6-digit PIN for two-step verification|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|

<h2 id="tocS_VerifyCodeRequest">VerifyCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifycoderequest"></a>
<a id="schema_VerifyCodeRequest"></a>
<a id="tocSverifycoderequest"></a>
<a id="tocsverifycoderequest"></a>

```json
{
  "code": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|6-digit verification code received via SMS or voice|

<h2 id="tocS_TwoStepVerificationRequest">TwoStepVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schematwostepverificationrequest"></a>
<a id="schema_TwoStepVerificationRequest"></a>
<a id="tocStwostepverificationrequest"></a>
<a id="tocstwostepverificationrequest"></a>

```json
{
  "pin": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin|string|true|none|6-digit PIN for two-step verification|

<h2 id="tocS_PhoneNumberStatusUpdateRequest">PhoneNumberStatusUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberstatusupdaterequest"></a>
<a id="schema_PhoneNumberStatusUpdateRequest"></a>
<a id="tocSphonenumberstatusupdaterequest"></a>
<a id="tocsphonenumberstatusupdaterequest"></a>

```json
{
  "connection_status": "CONNECTED",
  "webhook_url": "https://your-domain.com/webhook",
  "whatsapp_business_api_data": {
    "pin": "123456",
    "show_security_notifications": true,
    "notify_user_change_number": false
  },
  "pin": "123456",
  "search_visibility": "VISIBLE",
  "webhook_configuration": {
    "override_callback_uri": "https://your-domain.com/webhook/override",
    "verify_token": "YOUR_VERIFY_TOKEN"
  },
  "new_display_name": "My Business Name",
  "username": "mybusiness"
}
```

Request to update phone number status and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_status|[WhatsAppBusinessAccountToNumberStatus](#schemawhatsappbusinessaccounttonumberstatus)|false|none|Connection status between WhatsApp Business Account and phone number|
|webhook_url|string(uri)|false|none|Webhook URL for receiving message notifications|
|whatsapp_business_api_data|[WhatsAppBusinessApiData](#schemawhatsappbusinessapidata)|false|none|WhatsApp Business API configuration data|
|pin|string|false|none|Two-step verification PIN (can be empty string)|
|search_visibility|[WAAPIBusinessGlobalSearchStateStatus](#schemawaapibusinessglobalsearchstatestatus)|false|none|Search visibility status for the WhatsApp Business Account|
|webhook_configuration|[WebhookConfiguration](#schemawebhookconfiguration)|false|none|Webhook configuration settings|
|new_display_name|string|false|none|New display name for name verification request|
|username|string|false|none|Username for the WhatsApp Business Account|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_status|CONNECTED|
|connection_status|DISCONNECTED|
|connection_status|PENDING|
|connection_status|FLAGGED|
|connection_status|RESTRICTED|
|connection_status|RATE_LIMITED|
|connection_status|MESSAGING_LIMIT_TIER_0|
|connection_status|MESSAGING_LIMIT_TIER_1|
|connection_status|MESSAGING_LIMIT_TIER_2|
|connection_status|MESSAGING_LIMIT_TIER_3|
|connection_status|MESSAGING_LIMIT_TIER_4|
|search_visibility|VISIBLE|
|search_visibility|HIDDEN|

<h2 id="tocS_WhatsAppBusinessApiData">WhatsAppBusinessApiData</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessapidata"></a>
<a id="schema_WhatsAppBusinessApiData"></a>
<a id="tocSwhatsappbusinessapidata"></a>
<a id="tocswhatsappbusinessapidata"></a>

```json
{
  "pin": "123456",
  "show_security_notifications": true,
  "notify_user_change_number": false
}
```

WhatsApp Business API configuration data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin|string|false|none|Two-step verification PIN (can be empty string)|
|show_security_notifications|boolean|false|none|Whether to show security notifications|
|notify_user_change_number|boolean|false|none|Whether to notify users when changing number|

<h2 id="tocS_WebhookConfiguration">WebhookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebhookconfiguration"></a>
<a id="schema_WebhookConfiguration"></a>
<a id="tocSwebhookconfiguration"></a>
<a id="tocswebhookconfiguration"></a>

```json
{
  "override_callback_uri": "https://your-domain.com/webhook/override",
  "verify_token": "YOUR_VERIFY_TOKEN"
}
```

Webhook configuration settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|override_callback_uri|string(uri)|true|none|Override callback URI for webhook notifications (can be empty string)|
|verify_token|string|false|none|Token used to verify webhook requests|

<h2 id="tocS_WhatsAppBusinessAccountToNumberStatus">WhatsAppBusinessAccountToNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccounttonumberstatus"></a>
<a id="schema_WhatsAppBusinessAccountToNumberStatus"></a>
<a id="tocSwhatsappbusinessaccounttonumberstatus"></a>
<a id="tocswhatsappbusinessaccounttonumberstatus"></a>

```json
"CONNECTED"
```

Connection status between WhatsApp Business Account and phone number

<h2 id="tocS_WAAPIBusinessGlobalSearchStateStatus">WAAPIBusinessGlobalSearchStateStatus</h2>
<!-- backwards compatibility -->
<a id="schemawaapibusinessglobalsearchstatestatus"></a>
<a id="schema_WAAPIBusinessGlobalSearchStateStatus"></a>
<a id="tocSwaapibusinessglobalsearchstatestatus"></a>
<a id="tocswaapibusinessglobalsearchstatestatus"></a>

```json
"VISIBLE"
```

Search visibility status for the WhatsApp Business Account

<h2 id="tocS_MessageResponse">MessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponse"></a>
<a id="schema_MessageResponse"></a>
<a id="tocSmessageresponse"></a>
<a id="tocsmessageresponse"></a>

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "+1234567890",
      "wa_id": "1234567890"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="
    }
  ]
}
```

Response from sending a message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging service|
|contacts|[[ContactResponse](#schemacontactresponse)]|true|none|Contact information|
|messages|[[MessageResponseItem](#schemamessageresponseitem)]|true|none|Message information|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|

<h2 id="tocS_ContactResponse">ContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactresponse"></a>
<a id="schema_ContactResponse"></a>
<a id="tocScontactresponse"></a>
<a id="tocscontactresponse"></a>

```json
{
  "input": "+1234567890",
  "wa_id": "1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|Input phone number|
|wa_id|string|false|none|WhatsApp ID|

<h2 id="tocS_MessageResponseItem">MessageResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponseitem"></a>
<a id="schema_MessageResponseItem"></a>
<a id="tocSmessageresponseitem"></a>
<a id="tocsmessageresponseitem"></a>

```json
{
  "id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Message ID|

<h2 id="tocS_SuccessResponse">SuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_SuccessResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "success": true
}
```

Generic success response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Operation success status|

<h2 id="tocS_GraphAPIError_4">GraphAPIError_4</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_4"></a>
<a id="schema_GraphAPIError_4"></a>
<a id="tocSgraphapierror_4"></a>
<a id="tocsgraphapierror_4"></a>

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_DeregisterResponse">DeregisterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterresponse"></a>
<a id="schema_DeregisterResponse"></a>
<a id="tocSderegisterresponse"></a>
<a id="tocsderegisterresponse"></a>

```json
{
  "success": true
}
```

Response indicating successful phone number deregistration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the deregistration was successful|

<h2 id="tocS_GraphAPIError_5">GraphAPIError_5</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_5"></a>
<a id="schema_GraphAPIError_5"></a>
<a id="tocSgraphapierror_5"></a>
<a id="tocsgraphapierror_5"></a>

```json
{
  "error": {
    "message": "Phone number is not currently linked in Facebook Hosted System",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Invalid Request",
    "error_user_msg": "The phone number cannot be deregistered at this time"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppMessageHistory">WhatsAppMessageHistory</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappmessagehistory"></a>
<a id="schema_WhatsAppMessageHistory"></a>
<a id="tocSwhatsappmessagehistory"></a>
<a id="tocswhatsappmessagehistory"></a>

```json
{
  "id": "1234567890123456",
  "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",
  "events": {
    "data": [
      {
        "id": "2345678901234567",
        "delivery_status": "DELIVERED",
        "webhook_update_state": "DELIVERED",
        "timestamp": 1640995200,
        "application": {
          "id": "9876543210987654"
        },
        "webhook_uri": "https://example.com/webhook",
        "error_description": "Webhook endpoint returned HTTP 500"
      }
    ],
    "paging": {
      "cursors": {
        "before": "MAZDZD",
        "after": "MTAxNTExOTQ1MjAwNzI5NDE="
      },
      "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
      "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
    }
  }
}
```

WhatsApp message history entry with delivery status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the message history entry|
|message_id|string|true|none|WhatsApp message ID (WAMID) for the message|
|events|object|false|none|Message delivery status events and occurrences|

<h2 id="tocS_MessageDeliveryStatusEvent">MessageDeliveryStatusEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverystatusevent"></a>
<a id="schema_MessageDeliveryStatusEvent"></a>
<a id="tocSmessagedeliverystatusevent"></a>
<a id="tocsmessagedeliverystatusevent"></a>

```json
{
  "id": "2345678901234567",
  "delivery_status": "DELIVERED",
  "webhook_update_state": "DELIVERED",
  "timestamp": 1640995200,
  "application": {
    "id": "9876543210987654"
  },
  "webhook_uri": "https://example.com/webhook",
  "error_description": "Webhook endpoint returned HTTP 500"
}
```

Message delivery status event occurrence

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the delivery status event|
|delivery_status|[WhatsAppMessageDeliveryStatus](#schemawhatsappmessagedeliverystatus)|true|none|Message delivery status|
|webhook_update_state|[WebhookUpdateState](#schemawebhookupdatestate)|false|none|State of webhook update delivery|
|timestamp|integer(int64)|true|none|Unix timestamp when the delivery status event occurred|
|application|object|false|none|Application information for the event|
|webhook_uri|string(uri)|false|none|Webhook URI where the event was delivered|
|error_description|string|false|none|Error description if the delivery failed|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_status|SENT|
|delivery_status|DELIVERED|
|delivery_status|READ|
|delivery_status|FAILED|
|delivery_status|DELETED|
|webhook_update_state|PENDING|
|webhook_update_state|DELIVERED|
|webhook_update_state|FAILED|
|webhook_update_state|RETRYING|

<h2 id="tocS_WhatsAppMessageDeliveryStatus">WhatsAppMessageDeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappmessagedeliverystatus"></a>
<a id="schema_WhatsAppMessageDeliveryStatus"></a>
<a id="tocSwhatsappmessagedeliverystatus"></a>
<a id="tocswhatsappmessagedeliverystatus"></a>

```json
"DELIVERED"
```

Message delivery status

<h2 id="tocS_WebhookUpdateState">WebhookUpdateState</h2>
<!-- backwards compatibility -->
<a id="schemawebhookupdatestate"></a>
<a id="schema_WebhookUpdateState"></a>
<a id="tocSwebhookupdatestate"></a>
<a id="tocswebhookupdatestate"></a>

```json
"DELIVERED"
```

State of webhook update delivery

<h2 id="tocS_MessageHistoryResponse">MessageHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagehistoryresponse"></a>
<a id="schema_MessageHistoryResponse"></a>
<a id="tocSmessagehistoryresponse"></a>
<a id="tocsmessagehistoryresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "message_id": "wamid.HBgLMTY0NzM3Nzc3NzUVAgARGBI5QTNEQTA2RjdGMEY4RTRGAA==",
      "events": {
        "data": [
          {
            "id": "2345678901234567",
            "delivery_status": "DELIVERED",
            "webhook_update_state": "DELIVERED",
            "timestamp": 1640995200,
            "application": {
              "id": "9876543210987654"
            },
            "webhook_uri": "https://example.com/webhook",
            "error_description": "Webhook endpoint returned HTTP 500"
          }
        ],
        "paging": {
          "cursors": {
            "before": "MAZDZD",
            "after": "MTAxNTExOTQ1MjAwNzI5NDE="
          },
          "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
          "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
        }
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
    "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
  }
}
```

Paginated response containing message history entries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppMessageHistory](#schemawhatsappmessagehistory)]|false|none|Array of message history entries|
|paging|[PaginationInfo](#schemapaginationinfo)|false|none|Pagination information for navigating through results|

<h2 id="tocS_PaginationInfo">PaginationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo"></a>
<a id="schema_PaginationInfo"></a>
<a id="tocSpaginationinfo"></a>
<a id="tocspaginationinfo"></a>

```json
{
  "cursors": {
    "before": "MAZDZD",
    "after": "MTAxNTExOTQ1MjAwNzI5NDE="
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
  "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
}
```

Pagination information for navigating through results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|Pagination cursors for navigation|
|previous|string(uri)|false|none|URL for the previous page of results|
|next|string(uri)|false|none|URL for the next page of results|

<h2 id="tocS_WhatsAppBusinessPhoneNumberRegistrationRequest">WhatsAppBusinessPhoneNumberRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessphonenumberregistrationrequest"></a>
<a id="schema_WhatsAppBusinessPhoneNumberRegistrationRequest"></a>
<a id="tocSwhatsappbusinessphonenumberregistrationrequest"></a>
<a id="tocswhatsappbusinessphonenumberregistrationrequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "pin": "123456",
  "backup": {
    "password": "YOUR_BACKUP_PASSWORD",
    "data": "YOUR_BACKUP_DATA"
  },
  "data_localization_region": "AE",
  "meta_store_retention_minutes": 60
}
```

Request payload for registering a WhatsApp Business phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Must be 'whatsapp' to indicate WhatsApp Business messaging product|
|pin|string|true|none|6-digit PIN for two-step verification setup|
|backup|[WhatsAppBusinessAccountBackup](#schemawhatsappbusinessaccountbackup)|false|none|Backup data for migrating existing WhatsApp Business accounts|
|data_localization_region|[WhatsAppDataLocalizationRegion](#schemawhatsappdatalocalizationregion)|false|none|Data localization region for message storage (deprecated in v21+)|
|meta_store_retention_minutes|integer|false|none|Message retention period in minutes (deprecated in v21+)|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|data_localization_region|AE|
|data_localization_region|AU|
|data_localization_region|BH|
|data_localization_region|BR|
|data_localization_region|CA|
|data_localization_region|CH|
|data_localization_region|DE|
|data_localization_region|GB|
|data_localization_region|ID|
|data_localization_region|IN|
|data_localization_region|JP|
|data_localization_region|KR|
|data_localization_region|SG|
|data_localization_region|ZA|

<h2 id="tocS_WhatsAppBusinessAccountBackup">WhatsAppBusinessAccountBackup</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountbackup"></a>
<a id="schema_WhatsAppBusinessAccountBackup"></a>
<a id="tocSwhatsappbusinessaccountbackup"></a>
<a id="tocswhatsappbusinessaccountbackup"></a>

```json
{
  "password": "YOUR_BACKUP_PASSWORD",
  "data": "YOUR_BACKUP_DATA"
}
```

Backup data for migrating existing WhatsApp Business accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|Backup password for account migration|
|data|string|false|none|Encrypted backup data for account migration|

<h2 id="tocS_WhatsAppDataLocalizationRegion">WhatsAppDataLocalizationRegion</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappdatalocalizationregion"></a>
<a id="schema_WhatsAppDataLocalizationRegion"></a>
<a id="tocSwhatsappdatalocalizationregion"></a>
<a id="tocswhatsappdatalocalizationregion"></a>

```json
"AE"
```

Data localization region for message storage (deprecated in v21+)

<h2 id="tocS_WhatsAppBusinessPhoneNumberRegistrationResponse">WhatsAppBusinessPhoneNumberRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessphonenumberregistrationresponse"></a>
<a id="schema_WhatsAppBusinessPhoneNumberRegistrationResponse"></a>
<a id="tocSwhatsappbusinessphonenumberregistrationresponse"></a>
<a id="tocswhatsappbusinessphonenumberregistrationresponse"></a>

```json
{
  "success": true
}
```

Response from phone number registration request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the registration was successful|

<h2 id="tocS_GraphAPIError_6">GraphAPIError_6</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_6"></a>
<a id="schema_GraphAPIError_6"></a>
<a id="tocSgraphapierror_6"></a>
<a id="tocsgraphapierror_6"></a>

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Registration Failed",
    "error_user_msg": "Phone number registration could not be completed"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_RequestCodeRequest">RequestCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequestcoderequest"></a>
<a id="schema_RequestCodeRequest"></a>
<a id="tocSrequestcoderequest"></a>
<a id="tocsrequestcoderequest"></a>

```json
{
  "code_method": "SMS",
  "language": "en_US"
}
```

Request body for requesting a verification code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code_method|string|true|none|Method for receiving the verification code|
|language|string|true|none|Language locale for the verification message|

#### Enumerated Values

|Property|Value|
|---|---|
|code_method|SMS|
|code_method|VOICE|

<h2 id="tocS_RequestCodeResponse">RequestCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestcoderesponse"></a>
<a id="schema_RequestCodeResponse"></a>
<a id="tocSrequestcoderesponse"></a>
<a id="tocsrequestcoderesponse"></a>

```json
{
  "success": true
}
```

Response after successfully requesting a verification code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the verification code request was successful|

<h2 id="tocS_CallingSettingsRequest">CallingSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacallingsettingsrequest"></a>
<a id="schema_CallingSettingsRequest"></a>
<a id="tocScallingsettingsrequest"></a>
<a id="tocscallingsettingsrequest"></a>

```json
{
  "calling": {
    "status": "enabled",
    "call_icon_visibility": "visible"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calling|[CallingSettings](#schemacallingsettings)|true|none|none|

<h2 id="tocS_CallingSettings_1">CallingSettings_1</h2>
<!-- backwards compatibility -->
<a id="schemacallingsettings_1"></a>
<a id="schema_CallingSettings_1"></a>
<a id="tocScallingsettings_1"></a>
<a id="tocscallingsettings_1"></a>

```json
{
  "status": "enabled",
  "call_icon_visibility": "visible",
  "video": {
    "status": "enabled"
  },
  "sip": {
    "status": "enabled"
  },
  "srtp_key_exchange_protocol": "DTLS-SRTP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Enable or disable calling feature|
|call_icon_visibility|string|false|none|Control visibility of the call icon|
|video|[VideoSettings](#schemavideosettings)|false|none|none|
|sip|[SipSettings](#schemasipsettings)|false|none|none|
|srtp_key_exchange_protocol|string|false|none|SRTP key exchange protocol|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|
|call_icon_visibility|visible|
|call_icon_visibility|hidden|
|srtp_key_exchange_protocol|DTLS-SRTP|
|srtp_key_exchange_protocol|SDES-SRTP|

<h2 id="tocS_VideoSettings">VideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemavideosettings"></a>
<a id="schema_VideoSettings"></a>
<a id="tocSvideosettings"></a>
<a id="tocsvideosettings"></a>

```json
{
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Enable or disable video calling|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_SipSettings">SipSettings</h2>
<!-- backwards compatibility -->
<a id="schemasipsettings"></a>
<a id="schema_SipSettings"></a>
<a id="tocSsipsettings"></a>
<a id="tocssipsettings"></a>

```json
{
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Enable or disable SIP calling|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_UserIdentityChangeSettingsRequest">UserIdentityChangeSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemauseridentitychangesettingsrequest"></a>
<a id="schema_UserIdentityChangeSettingsRequest"></a>
<a id="tocSuseridentitychangesettingsrequest"></a>
<a id="tocsuseridentitychangesettingsrequest"></a>

```json
{
  "user_identity_change": {
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_identity_change|[UserIdentityChangeSettings](#schemauseridentitychangesettings)|true|none|none|

<h2 id="tocS_UserIdentityChangeSettings">UserIdentityChangeSettings</h2>
<!-- backwards compatibility -->
<a id="schemauseridentitychangesettings"></a>
<a id="schema_UserIdentityChangeSettings"></a>
<a id="tocSuseridentitychangesettings"></a>
<a id="tocsuseridentitychangesettings"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Enable or disable user identity change notifications|

<h2 id="tocS_PayloadEncryptionSettingsRequest">PayloadEncryptionSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayloadencryptionsettingsrequest"></a>
<a id="schema_PayloadEncryptionSettingsRequest"></a>
<a id="tocSpayloadencryptionsettingsrequest"></a>
<a id="tocspayloadencryptionsettingsrequest"></a>

```json
{
  "payload_encryption": {
    "status": "enabled",
    "client_encryption_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload_encryption|[PayloadEncryptionSettings](#schemapayloadencryptionsettings)|true|none|none|

<h2 id="tocS_PayloadEncryptionSettings">PayloadEncryptionSettings</h2>
<!-- backwards compatibility -->
<a id="schemapayloadencryptionsettings"></a>
<a id="schema_PayloadEncryptionSettings"></a>
<a id="tocSpayloadencryptionsettings"></a>
<a id="tocspayloadencryptionsettings"></a>

```json
{
  "status": "enabled",
  "client_encryption_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Enable or disable payload encryption|
|client_encryption_key|string|false|none|Base64-encoded public key for payload encryption<br>(required when enabling encryption)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_StorageConfigurationSettingsRequest">StorageConfigurationSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfigurationsettingsrequest"></a>
<a id="schema_StorageConfigurationSettingsRequest"></a>
<a id="tocSstorageconfigurationsettingsrequest"></a>
<a id="tocsstorageconfigurationsettingsrequest"></a>

```json
{
  "storage_configuration": {
    "enabled": true,
    "region": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storage_configuration|[StorageConfigurationSettings](#schemastorageconfigurationsettings)|true|none|none|

<h2 id="tocS_StorageConfigurationSettings">StorageConfigurationSettings</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfigurationsettings"></a>
<a id="schema_StorageConfigurationSettings"></a>
<a id="tocSstorageconfigurationsettings"></a>
<a id="tocsstorageconfigurationsettings"></a>

```json
{
  "enabled": true,
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Enable or disable custom storage configuration|
|region|string|false|none|Data storage region|

<h2 id="tocS_PhoneNumberSettingsResponse">PhoneNumberSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbersettingsresponse"></a>
<a id="schema_PhoneNumberSettingsResponse"></a>
<a id="tocSphonenumbersettingsresponse"></a>
<a id="tocsphonenumbersettingsresponse"></a>

```json
{
  "calling": {
    "status": "enabled",
    "call_icon_visibility": "visible",
    "ip_addresses": {
      "default": [
        "string"
      ]
    },
    "callback_permission_status": "enabled",
    "srtp_key_exchange_protocol": "DTLS-SRTP",
    "call_hours": {
      "status": "enabled",
      "timezone": "string",
      "day_of_week_start": "string"
    },
    "call_icons": {
      "restrict_to_user_countries": [
        "string"
      ]
    },
    "sip": {
      "status": "enabled",
      "servers": [
        {
          "app_id": "string",
          "hostname": "string",
          "port": 0,
          "password": "string"
        }
      ]
    },
    "video": {
      "status": "enabled"
    },
    "audio": {
      "status": "enabled"
    },
    "restrictions": {
      "restrictions": [
        {
          "type": "string",
          "expiration": 0
        }
      ]
    }
  },
  "payload_encryption": {
    "status": "enabled",
    "client_encryption_key_fingerprint": "string",
    "cloud_encryption_key": "string"
  },
  "storage_configuration": {
    "status": "default",
    "data_localization_region": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calling|[CallingSettingsResponse](#schemacallingsettingsresponse)|true|none|none|
|payload_encryption|[PayloadEncryptionSettingsResponse](#schemapayloadencryptionsettingsresponse)|false|none|none|
|storage_configuration|[StorageConfigurationSettingsResponse](#schemastorageconfigurationsettingsresponse)|true|none|none|

<h2 id="tocS_CallingSettingsResponse">CallingSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacallingsettingsresponse"></a>
<a id="schema_CallingSettingsResponse"></a>
<a id="tocScallingsettingsresponse"></a>
<a id="tocscallingsettingsresponse"></a>

```json
{
  "status": "enabled",
  "call_icon_visibility": "visible",
  "ip_addresses": {
    "default": [
      "string"
    ]
  },
  "callback_permission_status": "enabled",
  "srtp_key_exchange_protocol": "DTLS-SRTP",
  "call_hours": {
    "status": "enabled",
    "timezone": "string",
    "day_of_week_start": "string"
  },
  "call_icons": {
    "restrict_to_user_countries": [
      "string"
    ]
  },
  "sip": {
    "status": "enabled",
    "servers": [
      {
        "app_id": "string",
        "hostname": "string",
        "port": 0,
        "password": "string"
      }
    ]
  },
  "video": {
    "status": "enabled"
  },
  "audio": {
    "status": "enabled"
  },
  "restrictions": {
    "restrictions": [
      {
        "type": "string",
        "expiration": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Current calling feature status|
|call_icon_visibility|string|true|none|Current call icon visibility setting|
|ip_addresses|object|true|none|none|
|callback_permission_status|string|true|none|Callback permission status|
|srtp_key_exchange_protocol|string|false|none|SRTP key exchange protocol (optional)|
|call_hours|[CallHoursSettings](#schemacallhourssettings)|false|none|none|
|call_icons|[CallIconsSettings](#schemacalliconssettings)|false|none|none|
|sip|[SipSettingsResponse](#schemasipsettingsresponse)|false|none|none|
|video|[VideoSettingsResponse](#schemavideosettingsresponse)|false|none|none|
|audio|[AudioSettingsResponse](#schemaaudiosettingsresponse)|false|none|none|
|restrictions|[CallingRestrictionsResponse](#schemacallingrestrictionsresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|
|call_icon_visibility|visible|
|call_icon_visibility|hidden|
|callback_permission_status|enabled|
|callback_permission_status|disabled|
|srtp_key_exchange_protocol|DTLS-SRTP|
|srtp_key_exchange_protocol|SDES-SRTP|

<h2 id="tocS_CallHoursSettings">CallHoursSettings</h2>
<!-- backwards compatibility -->
<a id="schemacallhourssettings"></a>
<a id="schema_CallHoursSettings"></a>
<a id="tocScallhourssettings"></a>
<a id="tocscallhourssettings"></a>

```json
{
  "status": "enabled",
  "timezone": "string",
  "day_of_week_start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Call hours feature status|
|timezone|string|false|none|Timezone for call hours|
|day_of_week_start|string|false|none|Start day of the week|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_CallIconsSettings">CallIconsSettings</h2>
<!-- backwards compatibility -->
<a id="schemacalliconssettings"></a>
<a id="schema_CallIconsSettings"></a>
<a id="tocScalliconssettings"></a>
<a id="tocscalliconssettings"></a>

```json
{
  "restrict_to_user_countries": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrict_to_user_countries|[string]|false|none|List of countries where call icons are restricted|

<h2 id="tocS_SipSettingsResponse">SipSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasipsettingsresponse"></a>
<a id="schema_SipSettingsResponse"></a>
<a id="tocSsipsettingsresponse"></a>
<a id="tocssipsettingsresponse"></a>

```json
{
  "status": "enabled",
  "servers": [
    {
      "app_id": "string",
      "hostname": "string",
      "port": 0,
      "password": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|SIP calling status|
|servers|[[SipServerInfo](#schemasipserverinfo)]|false|none|SIP server configuration|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_SipServerInfo">SipServerInfo</h2>
<!-- backwards compatibility -->
<a id="schemasipserverinfo"></a>
<a id="schema_SipServerInfo"></a>
<a id="tocSsipserverinfo"></a>
<a id="tocssipserverinfo"></a>

```json
{
  "app_id": "string",
  "hostname": "string",
  "port": 0,
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|string|true|none|Application ID for SIP server|
|hostname|string|true|none|SIP server hostname|
|port|integer|false|none|SIP server port (optional)|
|password|string|false|none|SIP password (only included when include_sip_credentials=true)|

<h2 id="tocS_VideoSettingsResponse">VideoSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideosettingsresponse"></a>
<a id="schema_VideoSettingsResponse"></a>
<a id="tocSvideosettingsresponse"></a>
<a id="tocsvideosettingsresponse"></a>

```json
{
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Video calling status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_AudioSettingsResponse">AudioSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaudiosettingsresponse"></a>
<a id="schema_AudioSettingsResponse"></a>
<a id="tocSaudiosettingsresponse"></a>
<a id="tocsaudiosettingsresponse"></a>

```json
{
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Audio calling status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_CallingRestrictionsResponse">CallingRestrictionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacallingrestrictionsresponse"></a>
<a id="schema_CallingRestrictionsResponse"></a>
<a id="tocScallingrestrictionsresponse"></a>
<a id="tocscallingrestrictionsresponse"></a>

```json
{
  "restrictions": [
    {
      "type": "string",
      "expiration": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrictions|[object]|false|none|none|

<h2 id="tocS_PayloadEncryptionSettingsResponse">PayloadEncryptionSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayloadencryptionsettingsresponse"></a>
<a id="schema_PayloadEncryptionSettingsResponse"></a>
<a id="tocSpayloadencryptionsettingsresponse"></a>
<a id="tocspayloadencryptionsettingsresponse"></a>

```json
{
  "status": "enabled",
  "client_encryption_key_fingerprint": "string",
  "cloud_encryption_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Payload encryption status|
|client_encryption_key_fingerprint|string|false|none|Client encryption key fingerprint (when encryption is enabled)|
|cloud_encryption_key|string|false|none|Cloud encryption key (when encryption is enabled)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_StorageConfigurationSettingsResponse">StorageConfigurationSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfigurationsettingsresponse"></a>
<a id="schema_StorageConfigurationSettingsResponse"></a>
<a id="tocSstorageconfigurationsettingsresponse"></a>
<a id="tocsstorageconfigurationsettingsresponse"></a>

```json
{
  "status": "default",
  "data_localization_region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Data storage configuration status|
|data_localization_region|string|false|none|Data localization region (when in-country storage is enabled)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|default|
|status|in_country_storage_enabled|

<h2 id="tocS_VerifyCodeRequest_1">VerifyCodeRequest_1</h2>
<!-- backwards compatibility -->
<a id="schemaverifycoderequest_1"></a>
<a id="schema_VerifyCodeRequest_1"></a>
<a id="tocSverifycoderequest_1"></a>
<a id="tocsverifycoderequest_1"></a>

```json
{
  "code": "123456"
}
```

Request payload for phone number verification code verification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The verification code received via SMS or voice call|

<h2 id="tocS_VerifyCodeResponse">VerifyCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifycoderesponse"></a>
<a id="schema_VerifyCodeResponse"></a>
<a id="tocSverifycoderesponse"></a>
<a id="tocsverifycoderesponse"></a>

```json
{
  "success": true,
  "id": "1234567890123456"
}
```

Response from phone number verification code verification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the verification code was successfully verified|
|id|string|false|none|The phone number ID that was verified|

<h2 id="tocS_GraphAPIError_7">GraphAPIError_7</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_7"></a>
<a id="schema_GraphAPIError_7"></a>
<a id="tocSgraphapierror_7"></a>
<a id="tocsgraphapierror_7"></a>

```json
{
  "error": {
    "message": "Invalid verification code",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Verification Failed",
    "error_user_msg": "The verification code you entered is invalid or has expired"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessEncryptionInfo">WhatsAppBusinessEncryptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessencryptioninfo"></a>
<a id="schema_WhatsAppBusinessEncryptionInfo"></a>
<a id="tocSwhatsappbusinessencryptioninfo"></a>
<a id="tocswhatsappbusinessencryptioninfo"></a>

```json
{
  "business_public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----\n",
  "business_public_key_signature_status": "VALID"
}
```

Business encryption public key information and verification status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_public_key|string|true|none|The business public key used for encrypting message payloads.<br>This key is used to encrypt data channel requests and responses.<br>|
|business_public_key_signature_status|[BusinessPublicKeyVerificationStatus](#schemabusinesspublickeyverificationstatus)|true|none|Status of business public key signature verification|

#### Enumerated Values

|Property|Value|
|---|---|
|business_public_key_signature_status|VALID|
|business_public_key_signature_status|MISMATCH|

<h2 id="tocS_BusinessPublicKeyVerificationStatus">BusinessPublicKeyVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemabusinesspublickeyverificationstatus"></a>
<a id="schema_BusinessPublicKeyVerificationStatus"></a>
<a id="tocSbusinesspublickeyverificationstatus"></a>
<a id="tocsbusinesspublickeyverificationstatus"></a>

```json
"VALID"
```

Status of business public key signature verification

<h2 id="tocS_WhatsAppBusinessEncryptionUploadRequest">WhatsAppBusinessEncryptionUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessencryptionuploadrequest"></a>
<a id="schema_WhatsAppBusinessEncryptionUploadRequest"></a>
<a id="tocSwhatsappbusinessencryptionuploadrequest"></a>
<a id="tocswhatsappbusinessencryptionuploadrequest"></a>

```json
{
  "business_public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----\n"
}
```

Request payload for uploading business public key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_public_key|string|true|none|The business public key in PEM format to be uploaded and signed.<br>Must be a valid RSA public key that will be used for payload encryption.<br>|

<h2 id="tocS_WhatsAppBusinessEncryptionUploadResponse">WhatsAppBusinessEncryptionUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessencryptionuploadresponse"></a>
<a id="schema_WhatsAppBusinessEncryptionUploadResponse"></a>
<a id="tocSwhatsappbusinessencryptionuploadresponse"></a>
<a id="tocswhatsappbusinessencryptionuploadresponse"></a>

```json
{
  "success": true
}
```

Response after successful public key upload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the public key was successfully uploaded and signed|

<h2 id="tocS_GraphAPIError_8">GraphAPIError_8</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_8"></a>
<a id="schema_GraphAPIError_8"></a>
<a id="tocSgraphapierror_8"></a>
<a id="tocsgraphapierror_8"></a>

```json
{
  "error": {
    "message": "Business public key is invalid",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Invalid Public Key",
    "error_user_msg": "The provided public key format is invalid"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessProfile">WhatsAppBusinessProfile</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofile"></a>
<a id="schema_WhatsAppBusinessProfile"></a>
<a id="tocSwhatsappbusinessprofile"></a>
<a id="tocswhatsappbusinessprofile"></a>

```json
{
  "messaging_product": "whatsapp",
  "about": "Welcome to our business! We provide excellent service.",
  "address": "123 Business Street, City, State 12345",
  "description": "We are a leading provider of quality products and services.",
  "email": "contact@business.com",
  "profile_picture_url": "https://pps.whatsapp.net/v/profile_picture_url",
  "websites": [
    "https://www.business.com",
    "https://www.facebook.com/business"
  ],
  "vertical": "RESTAURANT"
}
```

WhatsApp Business Profile information and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|The messaging service used for the request|
|about|string|false|none|The text to display in business profile's About section|
|address|string|false|none|The address of the business|
|description|string|false|none|Description of the business|
|email|string(email)|false|none|The contact email address of the business|
|profile_picture_url|string(uri)|false|none|URL of the business profile picture|
|websites|[string(uri)]|false|none|URLs associated with the business|
|vertical|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|none|The industry type of the business|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|vertical|OTHER|
|vertical|AUTO|
|vertical|BEAUTY|
|vertical|APPAREL|
|vertical|EDU|
|vertical|ENTERTAIN|
|vertical|EVENT_PLAN|
|vertical|FINANCE|
|vertical|GROCERY|
|vertical|GOVT|
|vertical|HOTEL|
|vertical|HEALTH|
|vertical|NONPROFIT|
|vertical|PROF_SERVICES|
|vertical|RETAIL|
|vertical|TRAVEL|
|vertical|RESTAURANT|
|vertical|ALCOHOL|
|vertical|ONLINE_GAMBLING|
|vertical|PHYSICAL_GAMBLING|
|vertical|OTC_DRUGS|

<h2 id="tocS_WhatsAppBusinessProfileUpdateRequest">WhatsAppBusinessProfileUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofileupdaterequest"></a>
<a id="schema_WhatsAppBusinessProfileUpdateRequest"></a>
<a id="tocSwhatsappbusinessprofileupdaterequest"></a>
<a id="tocswhatsappbusinessprofileupdaterequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "about": "Welcome to our business! We provide excellent service.",
  "address": "123 Business Street, City, State 12345",
  "description": "We are a leading provider of quality products and services.",
  "email": "contact@business.com",
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",
  "websites": [
    "https://www.business.com",
    "https://www.facebook.com/business"
  ],
  "vertical": "RESTAURANT"
}
```

Request payload for updating WhatsApp Business Profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|The messaging service used for the request|
|about|string|false|none|The text to display in business profile's About section|
|address|string|false|none|The address of the business|
|description|string|false|none|Description of the business|
|email|string(email)|false|none|The contact email address of the business|
|profile_picture_handle|string|false|none|The handle of the profile picture generated from Resumable Upload API|
|websites|[string(uri)]|false|none|URLs associated with the business|
|vertical|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|none|The industry type of the business|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|vertical|OTHER|
|vertical|AUTO|
|vertical|BEAUTY|
|vertical|APPAREL|
|vertical|EDU|
|vertical|ENTERTAIN|
|vertical|EVENT_PLAN|
|vertical|FINANCE|
|vertical|GROCERY|
|vertical|GOVT|
|vertical|HOTEL|
|vertical|HEALTH|
|vertical|NONPROFIT|
|vertical|PROF_SERVICES|
|vertical|RETAIL|
|vertical|TRAVEL|
|vertical|RESTAURANT|
|vertical|ALCOHOL|
|vertical|ONLINE_GAMBLING|
|vertical|PHYSICAL_GAMBLING|
|vertical|OTC_DRUGS|

<h2 id="tocS_WhatsAppBusinessVertical">WhatsAppBusinessVertical</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessvertical"></a>
<a id="schema_WhatsAppBusinessVertical"></a>
<a id="tocSwhatsappbusinessvertical"></a>
<a id="tocswhatsappbusinessvertical"></a>

```json
"RESTAURANT"
```

The industry type of the business

<h2 id="tocS_WhatsAppBusinessProfileResponse">WhatsAppBusinessProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofileresponse"></a>
<a id="schema_WhatsAppBusinessProfileResponse"></a>
<a id="tocSwhatsappbusinessprofileresponse"></a>
<a id="tocswhatsappbusinessprofileresponse"></a>

```json
{
  "data": [
    {
      "business_profile": {
        "messaging_product": "whatsapp",
        "about": "Welcome to our business! We provide excellent service.",
        "address": "123 Business Street, City, State 12345",
        "description": "We are a leading provider of quality products and services.",
        "email": "contact@business.com",
        "profile_picture_url": "https://pps.whatsapp.net/v/profile_picture_url",
        "websites": [
          "https://www.business.com",
          "https://www.facebook.com/business"
        ],
        "vertical": "RESTAURANT"
      }
    }
  ]
}
```

Response containing business profile information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_WhatsAppBusinessProfileUpdateResponse">WhatsAppBusinessProfileUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofileupdateresponse"></a>
<a id="schema_WhatsAppBusinessProfileUpdateResponse"></a>
<a id="tocSwhatsappbusinessprofileupdateresponse"></a>
<a id="tocswhatsappbusinessprofileupdateresponse"></a>

```json
{
  "success": true
}
```

Response after updating business profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Indicates whether the update was successful|

<h2 id="tocS_BusinessComplianceInfo">BusinessComplianceInfo</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscomplianceinfo"></a>
<a id="schema_BusinessComplianceInfo"></a>
<a id="tocSbusinesscomplianceinfo"></a>
<a id="tocsbusinesscomplianceinfo"></a>

```json
{
  "whatsapp_business_account_id": "1234567890123456",
  "messaging_product": "whatsapp",
  "entity_name": "Lucky Shrub Private Limited",
  "entity_type": "Partnership",
  "entity_type_custom": "Limited Liability Partnership",
  "is_registered": true,
  "grievance_officer_details": {
    "name": "Chandravati P.",
    "email": "chandravati@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  },
  "customer_care_details": {
    "email": "support@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  }
}
```

WhatsApp Business Account compliance information and regulatory details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|whatsapp_business_account_id|string|true|none|Unique identifier for the WhatsApp Business Account|
|messaging_product|string|false|none|Messaging product identifier, always 'whatsapp' for WhatsApp Business|
|entity_name|string|false|none|Legal name of the business entity|
|entity_type|string|false|none|Type of business entity (e.g., Partnership, Private Limited Company, etc.)|
|entity_type_custom|string|false|none|Custom entity type description when standard types don't apply|
|is_registered|boolean|false|none|Whether the business entity is officially registered with regulatory authorities|
|grievance_officer_details|[GrievanceOfficerDetails](#schemagrievanceofficerdetails)|false|none|Contact information for the designated grievance officer|
|customer_care_details|[CustomerCareDetails](#schemacustomercaredetails)|false|none|Contact information for customer care and support|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|

<h2 id="tocS_GrievanceOfficerDetails">GrievanceOfficerDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrievanceofficerdetails"></a>
<a id="schema_GrievanceOfficerDetails"></a>
<a id="tocSgrievanceofficerdetails"></a>
<a id="tocsgrievanceofficerdetails"></a>

```json
{
  "name": "Chandravati P.",
  "email": "chandravati@luckyshrub.com",
  "mobile_number": "+913854559033",
  "landline_number": "+913857614343"
}
```

Contact information for the designated grievance officer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Full name of the grievance officer|
|email|string(email)|false|none|Email address for grievance officer contact|
|mobile_number|string|false|none|Mobile phone number for grievance officer (with country code)|
|landline_number|string|false|none|Landline phone number for grievance officer (with country code)|

<h2 id="tocS_CustomerCareDetails">CustomerCareDetails</h2>
<!-- backwards compatibility -->
<a id="schemacustomercaredetails"></a>
<a id="schema_CustomerCareDetails"></a>
<a id="tocScustomercaredetails"></a>
<a id="tocscustomercaredetails"></a>

```json
{
  "email": "support@luckyshrub.com",
  "mobile_number": "+913854559033",
  "landline_number": "+913857614343"
}
```

Contact information for customer care and support

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|Email address for customer care contact|
|mobile_number|string|false|none|Mobile phone number for customer care (with country code)|
|landline_number|string|false|none|Landline phone number for customer care (with country code)|

<h2 id="tocS_BusinessComplianceInfoUpdateRequest">BusinessComplianceInfoUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscomplianceinfoupdaterequest"></a>
<a id="schema_BusinessComplianceInfoUpdateRequest"></a>
<a id="tocSbusinesscomplianceinfoupdaterequest"></a>
<a id="tocsbusinesscomplianceinfoupdaterequest"></a>

```json
{
  "messaging_product": "whatsapp",
  "entity_name": "Lucky Shrub Private Limited",
  "entity_type": "PARTNERSHIP",
  "entity_type_custom": "Limited Liability Partnership",
  "is_registered": true,
  "grievance_officer_details": {
    "name": "Chandravati P.",
    "email": "chandravati@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  },
  "customer_care_details": {
    "email": "support@luckyshrub.com",
    "mobile_number": "+913854559033",
    "landline_number": "+913857614343"
  }
}
```

Request object for updating WhatsApp Business Account compliance information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Messaging product identifier, must be 'whatsapp'|
|entity_name|string|true|none|Legal name of the business entity|
|entity_type|[BusinessEntityType](#schemabusinessentitytype)|true|none|Type of business entity for compliance purposes|
|entity_type_custom|string|false|none|Custom entity type description when entity_type is "OTHER". Required for OTHER entity type.|
|is_registered|boolean|false|none|Whether the business entity is officially registered with regulatory authorities. Can only be used with "OTHER" or "PARTNERSHIP" entity types.|
|grievance_officer_details|[GrievanceOfficerUpdateDetails](#schemagrievanceofficerupdatedetails)|true|none|Contact information for the designated grievance officer|
|customer_care_details|[CustomerCareUpdateDetails](#schemacustomercareupdatedetails)|true|none|Contact information for customer care and support|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|entity_type|LIMITED_LIABILITY_PARTNERSHIP|
|entity_type|SOLE_PROPRIETORSHIP|
|entity_type|PARTNERSHIP|
|entity_type|PUBLIC_COMPANY|
|entity_type|PRIVATE_COMPANY|
|entity_type|OTHER|

<h2 id="tocS_BusinessEntityType">BusinessEntityType</h2>
<!-- backwards compatibility -->
<a id="schemabusinessentitytype"></a>
<a id="schema_BusinessEntityType"></a>
<a id="tocSbusinessentitytype"></a>
<a id="tocsbusinessentitytype"></a>

```json
"PARTNERSHIP"
```

Type of business entity for compliance purposes

<h2 id="tocS_GrievanceOfficerUpdateDetails">GrievanceOfficerUpdateDetails</h2>
<!-- backwards compatibility -->
<a id="schemagrievanceofficerupdatedetails"></a>
<a id="schema_GrievanceOfficerUpdateDetails"></a>
<a id="tocSgrievanceofficerupdatedetails"></a>
<a id="tocsgrievanceofficerupdatedetails"></a>

```json
{
  "name": "Chandravati P.",
  "email": "chandravati@luckyshrub.com",
  "mobile_number": "+913854559033",
  "landline_number": "+913857614343"
}
```

Contact information for the designated grievance officer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Full name of the grievance officer|
|email|string(email)|true|none|Email address for grievance officer contact|
|mobile_number|string|false|none|Mobile phone number for grievance officer (with country code)|
|landline_number|string|false|none|Landline phone number for grievance officer (with country code)|

<h2 id="tocS_CustomerCareUpdateDetails">CustomerCareUpdateDetails</h2>
<!-- backwards compatibility -->
<a id="schemacustomercareupdatedetails"></a>
<a id="schema_CustomerCareUpdateDetails"></a>
<a id="tocScustomercareupdatedetails"></a>
<a id="tocscustomercareupdatedetails"></a>

```json
{
  "email": "support@luckyshrub.com",
  "mobile_number": "+913854559033",
  "landline_number": "+913857614343"
}
```

Contact information for customer care and support

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|Email address for customer care contact|
|mobile_number|string|false|none|Mobile phone number for customer care (with country code)|
|landline_number|string|false|none|Landline phone number for customer care (with country code)|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string",
  "title": "string",
  "error_data": {
    "details": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Error code|
|message|string|false|none|Error message|
|title|string|false|none|Error title|
|error_data|object|false|none|none|

<h2 id="tocS_GroupInfo">GroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemagroupinfo"></a>
<a id="schema_GroupInfo"></a>
<a id="tocSgroupinfo"></a>
<a id="tocsgroupinfo"></a>

```json
{
  "id": "string",
  "messaging_product": "whatsapp",
  "join_approval_mode": "approval_required",
  "subject": "Artificial Intelligence Insights",
  "description": "Explore AI developments, share knowledge, and discuss the future of artificial intelligence with fellow enthusiasts and experts.",
  "suspended": true,
  "creation_timestamp": 683731200,
  "participants": [
    {
      "wa_id": "string"
    }
  ],
  "total_participant_count": 6
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Group ID|
|messaging_product|string|false|none|none|
|join_approval_mode|string|false|none|Join approval mode for the group|
|subject|string|false|none|Group subject|
|description|string|false|none|Group description|
|suspended|boolean|false|none|Returns true if the group has been suspended by WhatsApp|
|creation_timestamp|integer|false|none|UNIX timestamp in seconds at which the group was created|
|participants|[object]|false|none|List of participants in the group|
|total_participant_count|integer|false|none|Total number of participants in the group, excluding your business|

#### Enumerated Values

|Property|Value|
|---|---|
|join_approval_mode|approval_required|
|join_approval_mode|auto_approve|

<h2 id="tocS_WhatsAppMessageHistoryEventsEdge">WhatsAppMessageHistoryEventsEdge</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappmessagehistoryeventsedge"></a>
<a id="schema_WhatsAppMessageHistoryEventsEdge"></a>
<a id="tocSwhatsappmessagehistoryeventsedge"></a>
<a id="tocswhatsappmessagehistoryeventsedge"></a>

```json
{
  "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",
  "node": {
    "id": "2345678901234567",
    "delivery_status": "DELIVERED",
    "error_description": "Message delivery failed due to invalid phone number",
    "occurrence_timestamp": 1640995200,
    "status_timestamp": 1640995205,
    "application": {
      "id": "9876543210987654",
      "name": "Solution Partner App"
    }
  }
}
```

Edge containing message delivery status occurrence with pagination cursor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Pagination cursor for this edge|
|node|[WhatsAppBusinessMessageDeliveryStatusOccurrence](#schemawhatsappbusinessmessagedeliverystatusoccurrence)|true|none|Message delivery status occurrence with detailed event information|

<h2 id="tocS_WhatsAppBusinessMessageDeliveryStatusOccurrence">WhatsAppBusinessMessageDeliveryStatusOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessmessagedeliverystatusoccurrence"></a>
<a id="schema_WhatsAppBusinessMessageDeliveryStatusOccurrence"></a>
<a id="tocSwhatsappbusinessmessagedeliverystatusoccurrence"></a>
<a id="tocswhatsappbusinessmessagedeliverystatusoccurrence"></a>

```json
{
  "id": "2345678901234567",
  "delivery_status": "DELIVERED",
  "error_description": "Message delivery failed due to invalid phone number",
  "occurrence_timestamp": 1640995200,
  "status_timestamp": 1640995205,
  "application": {
    "id": "9876543210987654",
    "name": "Solution Partner App"
  }
}
```

Message delivery status occurrence with detailed event information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the message delivery status occurrence|
|delivery_status|[WhatsAppMessageDeliveryStatus](#schemawhatsappmessagedeliverystatus)|true|none|Message delivery status|
|error_description|string|false|none|Error description if the delivery encountered an error|
|occurrence_timestamp|integer(int64)|true|none|Unix timestamp when the delivery status occurrence happened|
|status_timestamp|integer(int64)|false|none|Unix timestamp when the status was recorded|
|application|[ApplicationNode](#schemaapplicationnode)|false|none|Meta application that owns the Multi-Partner Solution|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_status|SENT|
|delivery_status|DELIVERED|
|delivery_status|READ|
|delivery_status|FAILED|
|delivery_status|DELETED|

<h2 id="tocS_WhatsAppMessageDeliveryStatus_1">WhatsAppMessageDeliveryStatus_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappmessagedeliverystatus_1"></a>
<a id="schema_WhatsAppMessageDeliveryStatus_1"></a>
<a id="tocSwhatsappmessagedeliverystatus_1"></a>
<a id="tocswhatsappmessagedeliverystatus_1"></a>

```json
"DELIVERED"
```

Message delivery status

<h2 id="tocS_ApplicationNode_1">ApplicationNode_1</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationnode_1"></a>
<a id="schema_ApplicationNode_1"></a>
<a id="tocSapplicationnode_1"></a>
<a id="tocsapplicationnode_1"></a>

```json
{
  "id": "9876543210987654",
  "name": "WhatsApp Business API Client"
}
```

Meta application that processed the delivery status event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the Meta application|
|name|string|false|none|Name of the Meta application|

<h2 id="tocS_MessageHistoryEventsResponse">MessageHistoryEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagehistoryeventsresponse"></a>
<a id="schema_MessageHistoryEventsResponse"></a>
<a id="tocSmessagehistoryeventsresponse"></a>
<a id="tocsmessagehistoryeventsresponse"></a>

```json
{
  "data": [
    {
      "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",
      "node": {
        "id": "2345678901234567",
        "delivery_status": "DELIVERED",
        "error_description": "Message delivery failed due to invalid phone number",
        "occurrence_timestamp": 1640995200,
        "status_timestamp": 1640995205,
        "application": {
          "id": "9876543210987654",
          "name": "Solution Partner App"
        }
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
    "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
  }
}
```

Paginated response containing message history events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppMessageHistoryEventsEdge](#schemawhatsappmessagehistoryeventsedge)]|false|none|Array of message history event edges|
|paging|[PaginationInfo](#schemapaginationinfo)|false|none|Pagination information for navigating through results|

<h2 id="tocS_PaginationInfo_1">PaginationInfo_1</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo_1"></a>
<a id="schema_PaginationInfo_1"></a>
<a id="tocSpaginationinfo_1"></a>
<a id="tocspaginationinfo_1"></a>

```json
{
  "cursors": {
    "before": "MAZDZD",
    "after": "MTAxNTExOTQ1MjAwNzI5NDE="
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890123456/events?before=MAZDZD",
  "next": "https://graph.facebook.com/v23.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDE="
}
```

Pagination information for navigating through results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|Pagination cursors for navigation|
|previous|string(uri)|false|none|URL for the previous page of results|
|next|string(uri)|false|none|URL for the next page of results|

<h2 id="tocS_WhatsAppBusinessAccountMigrationIntent">WhatsAppBusinessAccountMigrationIntent</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountmigrationintent"></a>
<a id="schema_WhatsAppBusinessAccountMigrationIntent"></a>
<a id="tocSwhatsappbusinessaccountmigrationintent"></a>
<a id="tocswhatsappbusinessaccountmigrationintent"></a>

```json
{
  "id": "1234567890123456",
  "status": "INITIATED"
}
```

WhatsApp Business Account migration intent details and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the migration intent|
|status|[WhatsAppBusinessAccountMigrationStatus](#schemawhatsappbusinessaccountmigrationstatus)|true|none|Current status of the WhatsApp Business Account migration intent|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACCEPTED|
|status|COMPLETED|
|status|INITIATED|
|status|REJECTED|

<h2 id="tocS_WhatsAppBusinessAccountMigrationStatus">WhatsAppBusinessAccountMigrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountmigrationstatus"></a>
<a id="schema_WhatsAppBusinessAccountMigrationStatus"></a>
<a id="tocSwhatsappbusinessaccountmigrationstatus"></a>
<a id="tocswhatsappbusinessaccountmigrationstatus"></a>

```json
"INITIATED"
```

Current status of the WhatsApp Business Account migration intent

<h2 id="tocS_PreVerifiedPhoneNumberValidation">PreVerifiedPhoneNumberValidation</h2>
<!-- backwards compatibility -->
<a id="schemapreverifiedphonenumbervalidation"></a>
<a id="schema_PreVerifiedPhoneNumberValidation"></a>
<a id="tocSpreverifiedphonenumbervalidation"></a>
<a id="tocspreverifiedphonenumbervalidation"></a>

```json
{
  "id": "1234567890123456",
  "country_prefix": 1,
  "display_phone_number": "+1 (555) 123-4567",
  "error_msg": "Phone number format is invalid",
  "is_input_id_valid": true
}
```

Pre-verified phone number validation details and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the pre-verified phone number|
|country_prefix|integer|false|none|Country code prefix for the phone number|
|display_phone_number|string|false|none|Formatted display version of the phone number|
|error_msg|string|false|none|Error message if validation failed|
|is_input_id_valid|boolean|true|none|Whether the provided phone number ID is valid|

<h2 id="tocS_WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse">WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesspreverifiedphonenumberpartnersresponse"></a>
<a id="schema_WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse"></a>
<a id="tocSwhatsappbusinesspreverifiedphonenumberpartnersresponse"></a>
<a id="tocswhatsappbusinesspreverifiedphonenumberpartnersresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Partner Business Solutions Inc",
      "created_time": "2023-01-15T10:30:00Z",
      "updated_time": "2023-06-20T14:45:30Z",
      "verification_status": "verified",
      "primary_page": "9876543210987654",
      "timezone_id": 1,
      "two_factor_type": "admin_required"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Response containing partner businesses for a pre-verified phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BusinessPartner](#schemabusinesspartner)]|true|none|List of partner businesses with access to the pre-verified phone number|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_BusinessPartner">BusinessPartner</h2>
<!-- backwards compatibility -->
<a id="schemabusinesspartner"></a>
<a id="schema_BusinessPartner"></a>
<a id="tocSbusinesspartner"></a>
<a id="tocsbusinesspartner"></a>

```json
{
  "id": "1234567890123456",
  "name": "Partner Business Solutions Inc",
  "created_time": "2023-01-15T10:30:00Z",
  "updated_time": "2023-06-20T14:45:30Z",
  "verification_status": "verified",
  "primary_page": "9876543210987654",
  "timezone_id": 1,
  "two_factor_type": "admin_required"
}
```

Business entity that has partner access to the pre-verified phone number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the partner business|
|name|string|true|none|Name of the partner business|
|created_time|string(date-time)|false|none|ISO 8601 timestamp when the business was created|
|updated_time|string(date-time)|false|none|ISO 8601 timestamp when the business was last updated|
|verification_status|string|false|none|Business verification status|
|primary_page|string|false|none|Primary Facebook Page ID associated with the business|
|timezone_id|integer|false|none|Timezone identifier for the business location|
|two_factor_type|string|false|none|Two-factor authentication method configured for the business|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|not_verified|
|verification_status|pending|
|verification_status|verified|
|two_factor_type|none|
|two_factor_type|admin_required|

<h2 id="tocS_CursorPaging_5">CursorPaging_5</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_5"></a>
<a id="schema_CursorPaging_5"></a>
<a id="tocScursorpaging_5"></a>
<a id="tocscursorpaging_5"></a>

```json
{
  "cursors": {
    "before": "MAZDZD",
    "after": "MTAxNTExOTQ1MjAwNzI5NDE="
  },
  "next": "https://graph.facebook.com/v23.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D",
  "previous": "https://graph.facebook.com/v23.0/1234567890123456/partners?before=MAZDZD"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|next|string|false|none|Graph API endpoint URL for the next page of results|
|previous|string|false|none|Graph API endpoint URL for the previous page of results|

<h2 id="tocS_RequestCodeRequest_1">RequestCodeRequest_1</h2>
<!-- backwards compatibility -->
<a id="schemarequestcoderequest_1"></a>
<a id="schema_RequestCodeRequest_1"></a>
<a id="tocSrequestcoderequest_1"></a>
<a id="tocsrequestcoderequest_1"></a>

```json
{
  "code_method": "SMS",
  "language": "en_US"
}
```

Request body for requesting verification code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code_method|[PhoneVerificationMethodCode](#schemaphoneverificationmethodcode)|true|none|Method for receiving the verification code|
|language|string|true|none|Language/locale code for the verification message. Must be a valid locale identifier.<br>The verification message will be sent in this language if supported.<br>Supports various formats including xx_XX, xx-XX, and extended locale codes.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|code_method|SMS|
|code_method|VOICE|

<h2 id="tocS_PhoneVerificationMethodCode">PhoneVerificationMethodCode</h2>
<!-- backwards compatibility -->
<a id="schemaphoneverificationmethodcode"></a>
<a id="schema_PhoneVerificationMethodCode"></a>
<a id="tocSphoneverificationmethodcode"></a>
<a id="tocsphoneverificationmethodcode"></a>

```json
"SMS"
```

Method for receiving the verification code

<h2 id="tocS_RequestCodeResponse_1">RequestCodeResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemarequestcoderesponse_1"></a>
<a id="schema_RequestCodeResponse_1"></a>
<a id="tocSrequestcoderesponse_1"></a>
<a id="tocsrequestcoderesponse_1"></a>

```json
{
  "success": true
}
```

Response after successfully requesting verification code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the verification code request was successful|

<h2 id="tocS_VerifyCodeRequest_2">VerifyCodeRequest_2</h2>
<!-- backwards compatibility -->
<a id="schemaverifycoderequest_2"></a>
<a id="schema_VerifyCodeRequest_2"></a>
<a id="tocSverifycoderequest_2"></a>
<a id="tocsverifycoderequest_2"></a>

```json
{
  "code": "123456"
}
```

Request payload for verifying OTP code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The numeric verification code received via SMS or voice call.<br>This code is provided after calling the request_code endpoint.<br>|

<h2 id="tocS_VerifyCodeResponse_1">VerifyCodeResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemaverifycoderesponse_1"></a>
<a id="schema_VerifyCodeResponse_1"></a>
<a id="tocSverifycoderesponse_1"></a>
<a id="tocsverifycoderesponse_1"></a>

```json
{
  "success": true
}
```

Response indicating successful code verification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the code verification was successful|

<h2 id="tocS_GraphAPIError_9">GraphAPIError_9</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_9"></a>
<a id="schema_GraphAPIError_9"></a>
<a id="tocSgraphapierror_9"></a>
<a id="tocsgraphapierror_9"></a>

```json
{
  "error": {
    "message": "Invalid verification code",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Verification Failed",
    "error_user_msg": "The verification code you entered is invalid or has expired"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessSolutionAccessToken">WhatsAppBusinessSolutionAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionaccesstoken"></a>
<a id="schema_WhatsAppBusinessSolutionAccessToken"></a>
<a id="tocSwhatsappbusinesssolutionaccesstoken"></a>
<a id="tocswhatsappbusinesssolutionaccesstoken"></a>

```json
{
  "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",
  "expires_at": 1735689600
}
```

Granular BISU access token response for Multi-Partner Solution partners

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Granular BISU access token for accessing customer business resources|
|expires_at|integer(int64)|true|none|Unix timestamp indicating when the access token expires|

<h2 id="tocS_WhatsAppBusinessSolution_1">WhatsAppBusinessSolution_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolution_1"></a>
<a id="schema_WhatsAppBusinessSolution_1"></a>
<a id="tocSwhatsappbusinesssolution_1"></a>
<a id="tocswhatsappbusinesssolution_1"></a>

```json
{
  "id": "12345678901234567",
  "name": "Sample Business Solution Partnership",
  "status": "ACTIVE",
  "status_for_pending_request": "NONE",
  "owner_permissions": [
    "MANAGE",
    "DEVELOP"
  ]
}
```

WhatsApp Business Multi-Partner Solution object with core node fields only

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Solution|
|name|string|true|none|Human-readable name for the solution (UGC text, 2-75 characters)|
|status|[WhatsAppBusinessSolutionStatus](#schemawhatsappbusinesssolutionstatus)|true|none|Current effective status of the Multi-Partner Solution|
|status_for_pending_request|[WhatsAppBusinessSolutionPendingStatus](#schemawhatsappbusinesssolutionpendingstatus)|true|none|Status of any pending solution status transition requests|
|owner_permissions|[[WhatsAppBusinessAccountPermissionTask](#schemawhatsappbusinessaccountpermissiontask)]|false|none|Array of permissions granted to the solution owner|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DRAFT|
|status|INITIATED|
|status|ACTIVE|
|status|REJECTED|
|status|DEACTIVATED|
|status_for_pending_request|PENDING_ACTIVATION|
|status_for_pending_request|PENDING_DEACTIVATION|
|status_for_pending_request|NONE|
|owner_permissions|MANAGE|
|owner_permissions|DEVELOP|
|owner_permissions|MANAGE_TEMPLATES|
|owner_permissions|MANAGE_PHONE|
|owner_permissions|VIEW_COST|
|owner_permissions|MANAGE_EXTENSIONS|
|owner_permissions|VIEW_PHONE_ASSETS|
|owner_permissions|MANAGE_PHONE_ASSETS|
|owner_permissions|VIEW_TEMPLATES|
|owner_permissions|VIEW_INSIGHTS|
|owner_permissions|RECEIVE_INCOMING_MESSAGES|
|owner_permissions|MANAGE_BILLING|
|owner_permissions|MANAGE_USERS|
|owner_permissions|MESSAGING|
|owner_permissions|FULL_CONTROL|

<h2 id="tocS_WhatsAppBusinessSolutionStatus_1">WhatsAppBusinessSolutionStatus_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionstatus_1"></a>
<a id="schema_WhatsAppBusinessSolutionStatus_1"></a>
<a id="tocSwhatsappbusinesssolutionstatus_1"></a>
<a id="tocswhatsappbusinesssolutionstatus_1"></a>

```json
"DEACTIVATED"
```

Current status of the WhatsApp Business Solution

<h2 id="tocS_WhatsAppBusinessSolutionPendingStatus_1">WhatsAppBusinessSolutionPendingStatus_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionpendingstatus_1"></a>
<a id="schema_WhatsAppBusinessSolutionPendingStatus_1"></a>
<a id="tocSwhatsappbusinesssolutionpendingstatus_1"></a>
<a id="tocswhatsappbusinesssolutionpendingstatus_1"></a>

```json
"NONE"
```

Status of any pending requests for the solution

<h2 id="tocS_GraphAPIError_10">GraphAPIError_10</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_10"></a>
<a id="schema_GraphAPIError_10"></a>
<a id="tocSgraphapierror_10"></a>
<a id="tocsgraphapierror_10"></a>

```json
{
  "error": {
    "message": "Invalid solution state for deactivation acceptance",
    "type": "GraphMethodException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "FAKE_TRACE_ID_12345",
    "is_transient": false,
    "error_user_title": "Request Cannot Be Processed",
    "error_user_msg": "The solution is not in a valid state to accept deactivation requests."
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessSolutionAcceptRequest">WhatsAppBusinessSolutionAcceptRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionacceptrequest"></a>
<a id="schema_WhatsAppBusinessSolutionAcceptRequest"></a>
<a id="tocSwhatsappbusinesssolutionacceptrequest"></a>
<a id="tocswhatsappbusinesssolutionacceptrequest"></a>

```json
{
  "partner_app_id": "9876543210987654",
  "log_session_id": "session_12345_accept_solution"
}
```

Request payload for accepting a Multi-Partner Solution invitation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partner_app_id|string|true|none|ID of the partner application accepting the solution invitation.<br>This must match the app ID that received the original invitation.<br>|
|log_session_id|string|false|none|Optional session identifier for logging and debugging purposes.<br>Used to track the acceptance flow across multiple API calls.<br>|

<h2 id="tocS_WhatsAppBusinessSolutionAcceptResponse">WhatsAppBusinessSolutionAcceptResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionacceptresponse"></a>
<a id="schema_WhatsAppBusinessSolutionAcceptResponse"></a>
<a id="tocSwhatsappbusinesssolutionacceptresponse"></a>
<a id="tocswhatsappbusinesssolutionacceptresponse"></a>

```json
{
  "solution_id": "1234567890123456",
  "partner_status": "ACCEPTED",
  "success": true,
  "message": "Solution partnership accepted successfully",
  "update_time": "2024-01-15T10:30:00Z"
}
```

Successful response confirming solution acceptance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solution_id|string|true|none|ID of the Multi-Partner Solution that was accepted|
|partner_status|[WhatsAppBusinessSolutionPartnerStatus](#schemawhatsappbusinesssolutionpartnerstatus)|true|none|Current status of the partner's participation in the Multi-Partner Solution|
|success|boolean|true|none|Indicates whether the acceptance was successful|
|message|string|false|none|Human-readable confirmation message|
|update_time|string(date-time)|false|none|Timestamp when the acceptance was processed|

#### Enumerated Values

|Property|Value|
|---|---|
|partner_status|DRAFT|
|partner_status|INITIATED|
|partner_status|NOTIFICATION_SENT|
|partner_status|ACCEPTED|
|partner_status|REJECTED|
|partner_status|DEACTIVATED|

<h2 id="tocS_WhatsAppBusinessSolutionPartnerStatus">WhatsAppBusinessSolutionPartnerStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutionpartnerstatus"></a>
<a id="schema_WhatsAppBusinessSolutionPartnerStatus"></a>
<a id="tocSwhatsappbusinesssolutionpartnerstatus"></a>
<a id="tocswhatsappbusinesssolutionpartnerstatus"></a>

```json
"ACCEPTED"
```

Current status of the partner's participation in the Multi-Partner Solution

<h2 id="tocS_WhatsAppBusinessSolution_2">WhatsAppBusinessSolution_2</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolution_2"></a>
<a id="schema_WhatsAppBusinessSolution_2"></a>
<a id="tocSwhatsappbusinesssolution_2"></a>
<a id="tocswhatsappbusinesssolution_2"></a>

```json
{
  "id": "1234567890123456",
  "name": "E-commerce Integration Solution",
  "status": "ACTIVE",
  "status_for_pending_request": "NONE",
  "owner_app": {
    "id": "9876543210987654",
    "name": "Solution Partner App"
  },
  "owner_permissions": [
    "MANAGE",
    "DEVELOP",
    "MANAGE_TEMPLATES"
  ]
}
```

Multi-Partner Solution details after rejecting deactivation request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the Multi-Partner Solution|
|name|string|true|none|Human-readable name of the Multi-Partner Solution|
|status|[WhatsAppBusinessSolutionStatus](#schemawhatsappbusinesssolutionstatus)|true|none|Current effective status of the Multi-Partner Solution|
|status_for_pending_request|[WhatsAppBusinessSolutionPendingStatus](#schemawhatsappbusinesssolutionpendingstatus)|true|none|Status of any pending solution status transition requests|
|owner_app|[ApplicationNode](#schemaapplicationnode)|false|none|Meta application that owns the Multi-Partner Solution|
|owner_permissions|[[WhatsAppBusinessAccountPermissionTask](#schemawhatsappbusinessaccountpermissiontask)]|false|none|List of WhatsApp Business Account permissions granted to the solution owner|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DRAFT|
|status|INITIATED|
|status|ACTIVE|
|status|REJECTED|
|status|DEACTIVATED|
|status_for_pending_request|PENDING_ACTIVATION|
|status_for_pending_request|PENDING_DEACTIVATION|
|status_for_pending_request|NONE|
|owner_permissions|MANAGE|
|owner_permissions|DEVELOP|
|owner_permissions|MANAGE_TEMPLATES|
|owner_permissions|MANAGE_PHONE|
|owner_permissions|VIEW_COST|
|owner_permissions|MANAGE_EXTENSIONS|
|owner_permissions|VIEW_PHONE_ASSETS|
|owner_permissions|MANAGE_PHONE_ASSETS|
|owner_permissions|VIEW_TEMPLATES|
|owner_permissions|VIEW_INSIGHTS|
|owner_permissions|RECEIVE_INCOMING_MESSAGES|
|owner_permissions|MANAGE_BILLING|
|owner_permissions|MANAGE_USERS|
|owner_permissions|MESSAGING|
|owner_permissions|FULL_CONTROL|

<h2 id="tocS_GraphAPIError_11">GraphAPIError_11</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_11"></a>
<a id="schema_GraphAPIError_11"></a>
<a id="tocSgraphapierror_11"></a>
<a id="tocsgraphapierror_11"></a>

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "AXsgnV2Cm3ZMGF3dF_cfYIn",
    "is_transient": false,
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_SolutionRejectRequest">SolutionRejectRequest</h2>
<!-- backwards compatibility -->
<a id="schemasolutionrejectrequest"></a>
<a id="schema_SolutionRejectRequest"></a>
<a id="tocSsolutionrejectrequest"></a>
<a id="tocssolutionrejectrequest"></a>

```json
{
  "request_type": "PARTNERSHIP_REQUEST",
  "rejection_reason": "Partnership terms do not align with our business requirements",
  "partner_app_id": "1234567890123456"
}
```

Request payload for rejecting a Multi-Partner Solution request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_type|string|true|none|Type of request being rejected|
|rejection_reason|string|false|none|Optional reason for rejecting the request|
|partner_app_id|string|false|none|The app ID of the requesting partner. Required when request_type is PARTNERSHIP_REQUEST, not used for DEACTIVATION_REQUEST|

#### Enumerated Values

|Property|Value|
|---|---|
|request_type|PARTNERSHIP_REQUEST|
|request_type|DEACTIVATION_REQUEST|

<h2 id="tocS_SolutionRejectResponse">SolutionRejectResponse</h2>
<!-- backwards compatibility -->
<a id="schemasolutionrejectresponse"></a>
<a id="schema_SolutionRejectResponse"></a>
<a id="tocSsolutionrejectresponse"></a>
<a id="tocssolutionrejectresponse"></a>

```json
{
  "success": true,
  "solution_id": "1234567890123456",
  "rejected_request_type": "PARTNERSHIP_REQUEST",
  "rejection_timestamp": "2024-01-15T10:30:00Z",
  "partner_app_id": "1234567890123456"
}
```

Successful response for solution rejection operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the rejection was successful|
|solution_id|string|true|none|The ID of the Multi-Partner Solution|
|rejected_request_type|string|true|none|Type of request that was rejected|
|rejection_timestamp|string(date-time)|false|none|ISO 8601 timestamp when the rejection was processed|
|partner_app_id|string|false|none|App ID of the partner whose request was rejected (for partnership rejections)|

#### Enumerated Values

|Property|Value|
|---|---|
|rejected_request_type|PARTNERSHIP_REQUEST|
|rejected_request_type|DEACTIVATION_REQUEST|

<h2 id="tocS_WhatsAppBusinessSolutionDeactivationRequest">WhatsAppBusinessSolutionDeactivationRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutiondeactivationrequest"></a>
<a id="schema_WhatsAppBusinessSolutionDeactivationRequest"></a>
<a id="tocSwhatsappbusinesssolutiondeactivationrequest"></a>
<a id="tocswhatsappbusinesssolutiondeactivationrequest"></a>

```json
{
  "reason": "Solution no longer needed for current business operations"
}
```

Request payload for sending a Multi-Partner Solution deactivation request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Optional reason for the deactivation request|

<h2 id="tocS_WhatsAppBusinessSolutionDeactivationResponse">WhatsAppBusinessSolutionDeactivationResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolutiondeactivationresponse"></a>
<a id="schema_WhatsAppBusinessSolutionDeactivationResponse"></a>
<a id="tocSwhatsappbusinesssolutiondeactivationresponse"></a>
<a id="tocswhatsappbusinesssolutiondeactivationresponse"></a>

```json
{
  "success": true,
  "message": "Deactivation request submitted successfully",
  "request_id": "deactivation_req_1234567890"
}
```

Successful response for deactivation request submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the deactivation request was successfully submitted|
|message|string|true|none|Human-readable message describing the result|
|request_id|string|false|none|Unique identifier for tracking the deactivation request|

<h2 id="tocS_AssignedWhatsAppBusinessAccount">AssignedWhatsAppBusinessAccount</h2>
<!-- backwards compatibility -->
<a id="schemaassignedwhatsappbusinessaccount"></a>
<a id="schema_AssignedWhatsAppBusinessAccount"></a>
<a id="tocSassignedwhatsappbusinessaccount"></a>
<a id="tocsassignedwhatsappbusinessaccount"></a>

```json
{
  "id": "1234567890123456",
  "name": "Business Account Name",
  "status": "ACTIVE",
  "assignment_date": "2023-10-15T14:30:00Z",
  "permissions": [
    "MANAGE",
    "DEVELOP",
    "MANAGE_TEMPLATES"
  ],
  "business_id": "9876543210987654",
  "phone_numbers": [
    {
      "id": "1906385232743451",
      "display_phone_number": "+1 631-555-5555",
      "verified_name": "Jasper's Market",
      "quality_rating": "GREEN",
      "code_verification_status": "VERIFIED",
      "name_status": "AVAILABLE_WITHOUT_REVIEW"
    }
  ]
}
```

WhatsApp Business Account assigned to a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Account|
|name|string|true|none|Display name of the WhatsApp Business Account|
|status|[WhatsAppBusinessAccountStatus](#schemawhatsappbusinessaccountstatus)|true|none|Current status of the WhatsApp Business Account|
|assignment_date|string(date-time)|false|none|Date and time when the account was assigned to the user|
|permissions|[[WhatsAppBusinessAccountPermission](#schemawhatsappbusinessaccountpermission)]|false|none|List of permissions granted to the user for this account|
|business_id|string|false|none|Business ID that owns this WhatsApp Business Account|
|phone_numbers|[[PhoneNumberInfo](#schemaphonenumberinfo)]|false|none|Phone numbers associated with this WhatsApp Business Account|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|PENDING|
|status|RESTRICTED|
|status|DISABLED|
|permissions|MANAGE|
|permissions|DEVELOP|
|permissions|MANAGE_TEMPLATES|
|permissions|MANAGE_PHONE|
|permissions|VIEW_COST|
|permissions|MANAGE_EXTENSIONS|
|permissions|VIEW_PHONE_ASSETS|
|permissions|MANAGE_PHONE_ASSETS|
|permissions|VIEW_TEMPLATES|
|permissions|VIEW_INSIGHTS|
|permissions|RECEIVE_INCOMING_MESSAGES|
|permissions|MANAGE_BILLING|
|permissions|MANAGE_USERS|
|permissions|MESSAGING|
|permissions|FULL_CONTROL|

<h2 id="tocS_WhatsAppBusinessAccountStatus">WhatsAppBusinessAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountstatus"></a>
<a id="schema_WhatsAppBusinessAccountStatus"></a>
<a id="tocSwhatsappbusinessaccountstatus"></a>
<a id="tocswhatsappbusinessaccountstatus"></a>

```json
"ACTIVE"
```

Current status of the WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessAccountPermission">WhatsAppBusinessAccountPermission</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountpermission"></a>
<a id="schema_WhatsAppBusinessAccountPermission"></a>
<a id="tocSwhatsappbusinessaccountpermission"></a>
<a id="tocswhatsappbusinessaccountpermission"></a>

```json
"MANAGE"
```

Permission level for WhatsApp Business Account access

<h2 id="tocS_PhoneNumberInfo_1">PhoneNumberInfo_1</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberinfo_1"></a>
<a id="schema_PhoneNumberInfo_1"></a>
<a id="tocSphonenumberinfo_1"></a>
<a id="tocsphonenumberinfo_1"></a>

```json
{
  "id": "1234567890",
  "display_phone_number": "+1 (555) 123-4567",
  "verified_name": "Business Name",
  "status": "CONNECTED"
}
```

Phone number information for WhatsApp Business Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Phone number ID|
|display_phone_number|string|false|none|Formatted phone number for display|
|verified_name|string|false|none|Verified business name for this phone number|
|status|string|false|none|Status of the phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CONNECTED|
|status|DISCONNECTED|
|status|MIGRATED|
|status|PENDING|
|status|DELETED|

<h2 id="tocS_AssignedAccountsResponse">AssignedAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassignedaccountsresponse"></a>
<a id="schema_AssignedAccountsResponse"></a>
<a id="tocSassignedaccountsresponse"></a>
<a id="tocsassignedaccountsresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Business Account Name",
      "status": "ACTIVE",
      "assignment_date": "2023-10-15T14:30:00Z",
      "permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES"
      ],
      "business_id": "9876543210987654",
      "phone_numbers": [
        {
          "id": "1906385232743451",
          "display_phone_number": "+1 631-555-5555",
          "verified_name": "Jasper's Market",
          "quality_rating": "GREEN",
          "code_verification_status": "VERIFIED",
          "name_status": "AVAILABLE_WITHOUT_REVIEW"
        }
      ]
    }
  ],
  "paging": {
    "cursors": {
      "before": "string",
      "after": "string"
    },
    "previous": "string",
    "next": "string"
  }
}
```

Response containing assigned WhatsApp Business Accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AssignedWhatsAppBusinessAccount](#schemaassignedwhatsappbusinessaccount)]|true|none|List of assigned WhatsApp Business Accounts|
|paging|[PagingInfo](#schemapaginginfo)|false|none|none|

<h2 id="tocS_PagingInfo_1">PagingInfo_1</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo_1"></a>
<a id="schema_PagingInfo_1"></a>
<a id="tocSpaginginfo_1"></a>
<a id="tocspaginginfo_1"></a>

```json
{
  "cursors": {
    "before": "string",
    "after": "string"
  },
  "next": "string",
  "previous": "string"
}
```

Pagination information for the response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|next|string|false|none|URL for the next page of results|
|previous|string|false|none|URL for the previous page of results|

<h2 id="tocS_WhatsAppAccountNumber">WhatsAppAccountNumber</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappaccountnumber"></a>
<a id="schema_WhatsAppAccountNumber"></a>
<a id="tocSwhatsappaccountnumber"></a>
<a id="tocswhatsappaccountnumber"></a>

```json
{
  "id": "1234567890123456",
  "display_phone_number": "+1 631-555-5555",
  "verified_name": "Jasper's Market",
  "status": "CONNECTED",
  "quality_rating": "GREEN",
  "country_code": "US",
  "country_dial_code": "1",
  "code_verification_status": "VERIFIED",
  "name_status": "AVAILABLE_WITHOUT_REVIEW",
  "messaging_limit_tier": "TIER_1K",
  "account_mode": "LIVE",
  "certificate": "certificate_data_placeholder",
  "is_official_business_account": false
}
```

WhatsApp Account Number details and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Account Number|
|display_phone_number|string|true|none|Phone number in international format for display purposes|
|verified_name|string|false|none|Business name verified for this phone number|
|status|[WhatsAppAccountNumberStatus](#schemawhatsappaccountnumberstatus)|true|none|Current status of the WhatsApp Account Number|
|quality_rating|[WhatsAppPhoneNumberQualityRating](#schemawhatsappphonenumberqualityrating)|false|none|Quality rating based on message delivery and user feedback|
|country_code|string|false|none|ISO 3166-1 alpha-2 country code|
|country_dial_code|string|false|none|Country dialing code|
|code_verification_status|[WhatsAppCodeVerificationStatus](#schemawhatsappcodeverificationstatus)|false|none|Two-step verification status for the phone number|
|name_status|[WhatsAppDisplayNameStatus](#schemawhatsappdisplaynamestatus)|false|none|Status of the display name associated with the phone number|
|messaging_limit_tier|string|false|none|Current messaging limit tier for the account number|
|account_mode|[WhatsAppBusinessSandboxEligibility](#schemawhatsappbusinesssandboxeligibility)|false|none|Account mode indicating sandbox or live environment|
|certificate|string|false|none|Business certificate information for the account number|
|is_official_business_account|boolean|false|none|Whether this is an official business account|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CONNECTED|
|status|DISCONNECTED|
|status|UNVERIFIED|
|status|PENDING|
|status|FLAGGED|
|status|RESTRICTED|
|quality_rating|GREEN|
|quality_rating|YELLOW|
|quality_rating|RED|
|quality_rating|NA|
|code_verification_status|VERIFIED|
|code_verification_status|UNVERIFIED|
|name_status|APPROVED|
|name_status|AVAILABLE_WITHOUT_REVIEW|
|name_status|DECLINED|
|name_status|EXPIRED|
|name_status|PENDING_REVIEW|
|name_status|NONE|
|messaging_limit_tier|TIER_50|
|messaging_limit_tier|TIER_250|
|messaging_limit_tier|TIER_1K|
|messaging_limit_tier|TIER_10K|
|messaging_limit_tier|TIER_100K|
|messaging_limit_tier|TIER_UNLIMITED|
|account_mode|LIVE|
|account_mode|SANDBOX|

<h2 id="tocS_WhatsAppAccountNumberStatus">WhatsAppAccountNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappaccountnumberstatus"></a>
<a id="schema_WhatsAppAccountNumberStatus"></a>
<a id="tocSwhatsappaccountnumberstatus"></a>
<a id="tocswhatsappaccountnumberstatus"></a>

```json
"CONNECTED"
```

Current status of the WhatsApp Account Number

<h2 id="tocS_WhatsAppPhoneNumberQualityRating">WhatsAppPhoneNumberQualityRating</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappphonenumberqualityrating"></a>
<a id="schema_WhatsAppPhoneNumberQualityRating"></a>
<a id="tocSwhatsappphonenumberqualityrating"></a>
<a id="tocswhatsappphonenumberqualityrating"></a>

```json
"GREEN"
```

Quality rating based on message delivery and user feedback

<h2 id="tocS_WhatsAppCodeVerificationStatus">WhatsAppCodeVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappcodeverificationstatus"></a>
<a id="schema_WhatsAppCodeVerificationStatus"></a>
<a id="tocSwhatsappcodeverificationstatus"></a>
<a id="tocswhatsappcodeverificationstatus"></a>

```json
"VERIFIED"
```

Two-step verification status for the phone number

<h2 id="tocS_WhatsAppDisplayNameStatus">WhatsAppDisplayNameStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappdisplaynamestatus"></a>
<a id="schema_WhatsAppDisplayNameStatus"></a>
<a id="tocSwhatsappdisplaynamestatus"></a>
<a id="tocswhatsappdisplaynamestatus"></a>

```json
"AVAILABLE_WITHOUT_REVIEW"
```

Status of the display name associated with the phone number

<h2 id="tocS_WhatsAppBusinessSandboxEligibility">WhatsAppBusinessSandboxEligibility</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssandboxeligibility"></a>
<a id="schema_WhatsAppBusinessSandboxEligibility"></a>
<a id="tocSwhatsappbusinesssandboxeligibility"></a>
<a id="tocswhatsappbusinesssandboxeligibility"></a>

```json
"LIVE"
```

Account mode indicating sandbox or live environment

<h2 id="tocS_AssignedUser">AssignedUser</h2>
<!-- backwards compatibility -->
<a id="schemaassigneduser"></a>
<a id="schema_AssignedUser"></a>
<a id="tocSassigneduser"></a>
<a id="tocsassigneduser"></a>

```json
{
  "id": "1234567890123456",
  "name": "John Smith",
  "business": {
    "id": "9876543210987654",
    "name": "Example Business Inc"
  },
  "user_type": "BUSINESS_USER"
}
```

User assigned to WhatsApp Business Account with permissions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the assigned user|
|name|string|true|none|Display name of the assigned user|
|business|[BusinessNode](#schemabusinessnode)|false|none|Business entity associated with the user|
|user_type|[AssignedUserType](#schemaassignedusertype)|false|none|Type of user assignment|

#### Enumerated Values

|Property|Value|
|---|---|
|user_type|BUSINESS_USER|
|user_type|SYSTEM_USER|
|user_type|PERSONAL_USER|

<h2 id="tocS_AssignedUserType">AssignedUserType</h2>
<!-- backwards compatibility -->
<a id="schemaassignedusertype"></a>
<a id="schema_AssignedUserType"></a>
<a id="tocSassignedusertype"></a>
<a id="tocsassignedusertype"></a>

```json
"BUSINESS_USER"
```

Type of user assignment

<h2 id="tocS_BusinessNode">BusinessNode</h2>
<!-- backwards compatibility -->
<a id="schemabusinessnode"></a>
<a id="schema_BusinessNode"></a>
<a id="tocSbusinessnode"></a>
<a id="tocsbusinessnode"></a>

```json
{
  "id": "9876543210987654",
  "name": "Example Business Inc"
}
```

Business entity associated with the user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the business|
|name|string|false|none|Name of the business|

<h2 id="tocS_AssignedUsersResponse">AssignedUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassignedusersresponse"></a>
<a id="schema_AssignedUsersResponse"></a>
<a id="tocSassignedusersresponse"></a>
<a id="tocsassignedusersresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "John Smith",
      "business": {
        "id": "9876543210987654",
        "name": "Example Business Inc"
      },
      "user_type": "BUSINESS_USER"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  },
  "summary": {
    "total_count": 25
  }
}
```

Response containing list of assigned users with pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AssignedUser](#schemaassigneduser)]|true|none|Array of assigned users|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|
|summary|[AssignedUsersSummary](#schemaassigneduserssummary)|false|none|Summary information about assigned users|

<h2 id="tocS_AssignedUsersSummary">AssignedUsersSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassigneduserssummary"></a>
<a id="schema_AssignedUsersSummary"></a>
<a id="tocSassigneduserssummary"></a>
<a id="tocsassigneduserssummary"></a>

```json
{
  "total_count": 25
}
```

Summary information about assigned users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_count|integer|false|none|Total number of assigned users|

<h2 id="tocS_CursorPaging_6">CursorPaging_6</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_6"></a>
<a id="schema_CursorPaging_6"></a>
<a id="tocScursorpaging_6"></a>
<a id="tocscursorpaging_6"></a>

```json
{
  "cursors": {
    "before": "QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVVhF",
    "after": "QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ"
  },
  "next": "https://graph.facebook.com/v23.0/1234567890123456/assigned_users?access_token=YOUR_SYSTEM_USER_ACCESS_TOKEN&limit=25&after=QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ",
  "previous": "https://graph.facebook.com/v23.0/1234567890123456/assigned_users?access_token=YOUR_SYSTEM_USER_ACCESS_TOKEN&limit=25&before=QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVVhF"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|next|string|false|none|Graph API endpoint for the next page of results|
|previous|string|false|none|Graph API endpoint for the previous page of results|

<h2 id="tocS_SuccessResponse_1">SuccessResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse_1"></a>
<a id="schema_SuccessResponse_1"></a>
<a id="tocSsuccessresponse_1"></a>
<a id="tocssuccessresponse_1"></a>

```json
{
  "success": true
}
```

Standard success response for write operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the operation was successful|

<h2 id="tocS_ConversationalAutomationRequest">ConversationalAutomationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationalautomationrequest"></a>
<a id="schema_ConversationalAutomationRequest"></a>
<a id="tocSconversationalautomationrequest"></a>
<a id="tocsconversationalautomationrequest"></a>

```json
{
  "enable_welcome_message": true,
  "prompts": [
    "How can I help you today?",
    "What product are you interested in?",
    "Do you need support?"
  ],
  "commands": [
    {
      "command_name": "help",
      "command_description": "Get help with your order"
    },
    {
      "command_name": "status",
      "command_description": "Check your order status"
    }
  ]
}
```

Request payload for configuring conversational automation settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable_welcome_message|boolean|false|none|Whether to enable welcome messages for new conversations|
|prompts|[string]|false|none|List of conversation prompts (ice breakers) to help guide customer interactions|
|commands|[[BotCommand](#schemabotcommand)]|false|none|List of bot commands for automated responses|

<h2 id="tocS_BotCommand">BotCommand</h2>
<!-- backwards compatibility -->
<a id="schemabotcommand"></a>
<a id="schema_BotCommand"></a>
<a id="tocSbotcommand"></a>
<a id="tocsbotcommand"></a>

```json
{
  "command_name": "help",
  "command_description": "Get help with your order"
}
```

Bot command configuration for automated responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command_name|string|true|none|Name of the bot command (without leading slash)|
|command_description|string|true|none|Description of what the command does|

<h2 id="tocS_ConversationalAutomationResponse">ConversationalAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationalautomationresponse"></a>
<a id="schema_ConversationalAutomationResponse"></a>
<a id="tocSconversationalautomationresponse"></a>
<a id="tocsconversationalautomationresponse"></a>

```json
{
  "success": true
}
```

Response after successfully configuring conversational automation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the automation configuration was successful|

<h2 id="tocS_BusinessOwnedObjectOnBehalfOfRequest">BusinessOwnedObjectOnBehalfOfRequest</h2>
<!-- backwards compatibility -->
<a id="schemabusinessownedobjectonbehalfofrequest"></a>
<a id="schema_BusinessOwnedObjectOnBehalfOfRequest"></a>
<a id="tocSbusinessownedobjectonbehalfofrequest"></a>
<a id="tocsbusinessownedobjectonbehalfofrequest"></a>

```json
{
  "id": "1234567890123456",
  "status": "IN_PROGRESS",
  "business_owned_object": "9876543210987654",
  "receiving_business": {
    "id": "9876543210987654",
    "name": "Example Business Inc"
  },
  "requesting_business": {
    "id": "9876543210987654",
    "name": "Example Business Inc"
  }
}
```

On-behalf request details for business owned objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the on-behalf request|
|status|[BusinessRequestStatus](#schemabusinessrequeststatus)|true|none|Current status of the business request|
|business_owned_object|string|true|none|ID of the business owned object (WhatsApp Business Account) for this request|
|receiving_business|[BusinessNode](#schemabusinessnode)|false|none|Business entity associated with the user|
|requesting_business|[BusinessNode](#schemabusinessnode)|false|none|Business entity associated with the user|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVE|
|status|DECLINE|
|status|IN_PROGRESS|
|status|EXPIRED|
|status|PENDING|
|status|CANCELED|
|status|INVALID|

<h2 id="tocS_BusinessRequestStatus">BusinessRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemabusinessrequeststatus"></a>
<a id="schema_BusinessRequestStatus"></a>
<a id="tocSbusinessrequeststatus"></a>
<a id="tocsbusinessrequeststatus"></a>

```json
"IN_PROGRESS"
```

Current status of the business request

<h2 id="tocS_BusinessNode_1">BusinessNode_1</h2>
<!-- backwards compatibility -->
<a id="schemabusinessnode_1"></a>
<a id="schema_BusinessNode_1"></a>
<a id="tocSbusinessnode_1"></a>
<a id="tocsbusinessnode_1"></a>

```json
{
  "id": "5678901234567890",
  "name": "Example Business Inc"
}
```

Business entity information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the business|
|name|string|false|none|Name of the business|

<h2 id="tocS_PaginationInfo_2">PaginationInfo_2</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo_2"></a>
<a id="schema_PaginationInfo_2"></a>
<a id="tocSpaginationinfo_2"></a>
<a id="tocspaginationinfo_2"></a>

```json
{
  "cursors": {
    "before": "CURSOR_BEFORE_PLACEHOLDER",
    "after": "CURSOR_AFTER_PLACEHOLDER"
  },
  "paging": {
    "previous": "https://graph.facebook.com/v23.0/1234567890123456/in_progress_onbehalf_request?before=CURSOR_BEFORE_PLACEHOLDER",
    "next": "https://graph.facebook.com/v23.0/1234567890123456/in_progress_onbehalf_request?after=CURSOR_AFTER_PLACEHOLDER"
  }
}
```

Pagination information for cursor-based pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|paging|object|false|none|none|

<h2 id="tocS_InProgressOnBehalfRequestResponse">InProgressOnBehalfRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemainprogressonbehalfrequestresponse"></a>
<a id="schema_InProgressOnBehalfRequestResponse"></a>
<a id="tocSinprogressonbehalfrequestresponse"></a>
<a id="tocsinprogressonbehalfrequestresponse"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "status": "IN_PROGRESS",
      "business_owned_object": "9876543210987654",
      "receiving_business": {
        "id": "9876543210987654",
        "name": "Example Business Inc"
      },
      "requesting_business": {
        "id": "9876543210987654",
        "name": "Example Business Inc"
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MTAxNTExOTQ1MjAwNzI5NDE="
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890123456/message_history?before=MAZDZD",
    "next": "https://graph.facebook.com/v23.0/1234567890123456/message_history?after=MTAxNTExOTQ1MjAwNzI5NDE="
  }
}
```

Response containing in-progress on-behalf requests with pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BusinessOwnedObjectOnBehalfOfRequest](#schemabusinessownedobjectonbehalfofrequest)]|true|none|Array of in-progress on-behalf requests|
|paging|[PaginationInfo](#schemapaginationinfo)|false|none|Pagination information for navigating through results|

<h2 id="tocS_OBOMobilityIntentNode">OBOMobilityIntentNode</h2>
<!-- backwards compatibility -->
<a id="schemaobomobilityintentnode"></a>
<a id="schema_OBOMobilityIntentNode"></a>
<a id="tocSobomobilityintentnode"></a>
<a id="tocsobomobilityintentnode"></a>

```json
{
  "id": "1234567890123456",
  "waba": {
    "id": "1234567890123456",
    "name": "My WhatsApp Business Account",
    "account_review_status": "APPROVED",
    "purchase_order_number": "PO-2023-001234",
    "audiences": [
      "customers",
      "prospects"
    ],
    "ownership_type": "CLIENT_OWNED",
    "subscribed_apps": [
      {
        "id": "9876543210987654",
        "name": "WhatsApp Integration App"
      }
    ],
    "business_verification_status": "VERIFIED",
    "country": "US",
    "currency": "USD",
    "timezone_id": "1",
    "on_behalf_of_business_info": {
      "id": "5678901234567890",
      "name": "Partner Business Inc"
    },
    "schedules": [
      {
        "day_of_week": "MONDAY",
        "open_time": "09:00",
        "close_time": "17:00"
      }
    ],
    "is_enabled_for_insights": true,
    "dcc_config": {
      "enabled": true,
      "policy_url": "https://example.com/dcc-policy"
    },
    "message_templates": [
      {
        "id": "template_123456",
        "name": "welcome_message",
        "status": "APPROVED"
      }
    ],
    "phone_numbers": [
      {
        "id": "1234567890123456",
        "display_phone_number": "+1 (555) 123-4567",
        "verified_name": "Example Business"
      }
    ]
  },
  "solution": {
    "id": "1234567890123456",
    "name": "E-commerce Integration Solution",
    "status": "ACTIVE",
    "status_for_pending_request": "NONE",
    "owner_app": {
      "id": "9876543210987654",
      "name": "Solution Partner App"
    },
    "owner_permissions": [
      "MANAGE",
      "DEVELOP",
      "MANAGE_TEMPLATES"
    ]
  },
  "status": "ACTIVE",
  "created_time": "2024-01-15T10:30:00Z",
  "updated_time": "2024-01-15T14:45:00Z"
}
```

WhatsApp Business Account OBO Mobility Intent Node

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the OBO Mobility Intent Node|
|waba|[WhatsAppBusinessAccount](#schemawhatsappbusinessaccount)|true|none|WhatsApp Business Account details and configuration|
|solution|[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)|true|none|Multi-Partner Solution details and configuration|
|status|string|false|none|Current status of the OBO mobility intent|
|created_time|string(date-time)|false|none|Timestamp when the OBO mobility intent was created (ISO 8601 format)|
|updated_time|string(date-time)|false|none|Timestamp when the OBO mobility intent was last updated (ISO 8601 format)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|ACTIVE|
|status|COMPLETED|
|status|CANCELLED|
|status|FAILED|

<h2 id="tocS_WhatsAppBusinessAccount_2">WhatsAppBusinessAccount_2</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccount_2"></a>
<a id="schema_WhatsAppBusinessAccount_2"></a>
<a id="tocSwhatsappbusinessaccount_2"></a>
<a id="tocswhatsappbusinessaccount_2"></a>

```json
{
  "id": "1234567890123456",
  "name": "My Business Account",
  "status": "ACTIVE"
}
```

WhatsApp Business Account information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|WhatsApp Business Account ID|
|name|string|true|none|Business account name|
|status|string|false|none|Current status of the business account|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|PENDING|

<h2 id="tocS_WhatsAppBusinessSolution_3">WhatsAppBusinessSolution_3</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssolution_3"></a>
<a id="schema_WhatsAppBusinessSolution_3"></a>
<a id="tocSwhatsappbusinesssolution_3"></a>
<a id="tocswhatsappbusinesssolution_3"></a>

```json
{
  "id": "2345678901234567",
  "name": "My Business Solution",
  "partner_id": "3456789012345678",
  "status": "ACTIVE"
}
```

WhatsApp Business Solution information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Solution ID|
|name|string|true|none|Solution name|
|partner_id|string|false|none|Partner ID associated with the solution|
|status|string|false|none|Current status of the solution|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|PENDING|

<h2 id="tocS_OBOMobilityIntentRequest">OBOMobilityIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaobomobilityintentrequest"></a>
<a id="schema_OBOMobilityIntentRequest"></a>
<a id="tocSobomobilityintentrequest"></a>
<a id="tocsobomobilityintentrequest"></a>

```json
{
  "solution_id": "2345678901234567",
  "intent_type": "INITIATE_TRANSFER",
  "target_solution_id": "3456789012345678",
  "mobility_reason": "Transferring account management to new solution provider",
  "scheduled_execution_time": "2024-12-01T10:00:00Z",
  "metadata": {
    "partner_approval_id": "approval_123456",
    "business_justification": "Business restructuring"
  }
}
```

Request payload for OBO mobility intent operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solution_id|string|true|none|Unique identifier for the WhatsApp Business Solution|
|intent_type|[MobilityIntentType](#schemamobilityintenttype)|true|none|Type of mobility intent operation|
|target_solution_id|string|false|none|Target solution ID for mobility operations (required for transfers)|
|mobility_reason|string|false|none|Reason for the mobility intent|
|scheduled_execution_time|string(date-time)|false|none|Scheduled time for mobility execution (ISO 8601 format)|
|metadata|object|false|none|Additional metadata for the mobility operation|

#### Enumerated Values

|Property|Value|
|---|---|
|intent_type|INITIATE_TRANSFER|
|intent_type|CONFIRM_TRANSFER|
|intent_type|CANCEL_TRANSFER|
|intent_type|REQUEST_HANDOVER|
|intent_type|APPROVE_HANDOVER|
|intent_type|REJECT_HANDOVER|

<h2 id="tocS_MobilityIntentType">MobilityIntentType</h2>
<!-- backwards compatibility -->
<a id="schemamobilityintenttype"></a>
<a id="schema_MobilityIntentType"></a>
<a id="tocSmobilityintenttype"></a>
<a id="tocsmobilityintenttype"></a>

```json
"INITIATE_TRANSFER"
```

Type of mobility intent operation

<h2 id="tocS_OBOMobilityIntentResponse">OBOMobilityIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaobomobilityintentresponse"></a>
<a id="schema_OBOMobilityIntentResponse"></a>
<a id="tocSobomobilityintentresponse"></a>
<a id="tocsobomobilityintentresponse"></a>

```json
{
  "success": true,
  "mobility_intent_id": "obo_mobility_123456789",
  "status": "PENDING",
  "estimated_completion_time": "2024-12-01T12:00:00Z",
  "approval_required": true,
  "next_steps": [
    "Await partner approval",
    "Confirm transfer details"
  ]
}
```

Response for OBO mobility intent operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates if the mobility intent operation was successful|
|mobility_intent_id|string|true|none|Unique identifier for the mobility intent request|
|status|string|false|none|Current status of the mobility intent|
|estimated_completion_time|string(date-time)|false|none|Estimated completion time for the mobility operation (ISO 8601 format)|
|approval_required|boolean|false|none|Indicates if additional approval is required for the operation|
|next_steps|[string]|false|none|List of next steps required to complete the mobility operation|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|APPROVED|
|status|REJECTED|
|status|SCHEDULED|
|status|IN_PROGRESS|
|status|COMPLETED|
|status|FAILED|

<h2 id="tocS_WhatsAppBusinessAccountPhoneNumber">WhatsAppBusinessAccountPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountphonenumber"></a>
<a id="schema_WhatsAppBusinessAccountPhoneNumber"></a>
<a id="tocSwhatsappbusinessaccountphonenumber"></a>
<a id="tocswhatsappbusinessaccountphonenumber"></a>

```json
{
  "id": "1906385232743451",
  "display_phone_number": "+1 631-555-5555",
  "verified_name": "Jasper's Market",
  "status": "PENDING",
  "quality_rating": "GREEN",
  "country_code": "US",
  "country_dial_code": "1",
  "code_verification_status": "VERIFIED",
  "unified_cert_status": "APPROVED",
  "account_mode": "LIVE",
  "host_platform": "CLOUD_API",
  "messaging_limit_tier": "TIER_1K",
  "is_official_business_account": true,
  "username": "business_username"
}
```

WhatsApp Business Account phone number details and status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the phone number status record|
|display_phone_number|string|true|none|Phone number in international format for display purposes|
|verified_name|string|false|none|Business name verified for this phone number|
|status|[WhatsAppPhoneNumberStatus](#schemawhatsappphonenumberstatus)|true|none|Current status of the phone number in the WhatsApp Business Account|
|quality_rating|[WhatsAppPhoneNumberQualityRating](#schemawhatsappphonenumberqualityrating)|false|none|Quality rating based on message delivery and user feedback|
|country_code|string|false|none|ISO 3166-1 alpha-2 country code|
|country_dial_code|string|false|none|Country dialing code|
|code_verification_status|[WhatsAppCodeVerificationStatus](#schemawhatsappcodeverificationstatus)|false|none|Two-step verification status for the phone number|
|unified_cert_status|[WhatsAppBusinessUnifiedCertStatus](#schemawhatsappbusinessunifiedcertstatus)|false|none|Unified certification status combining business and name verification|
|account_mode|[WhatsAppBusinessSandboxEligibility](#schemawhatsappbusinesssandboxeligibility)|false|none|Account mode indicating sandbox or live environment|
|host_platform|[WhatsAppBusinessAccountHostPlatform](#schemawhatsappbusinessaccounthostplatform)|false|none|Platform hosting the WhatsApp Business Account|
|messaging_limit_tier|string|false|none|Current messaging limit tier for the phone number|
|is_official_business_account|boolean|false|none|Whether this is an official business account|
|username|string \| null|false|none|WhatsApp username for the business account (if available)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|LINKED|
|status|UNLINKED|
|status|DELETED|
|status|MIGRATED|
|status|BANNED|
|status|RESTRICTED|
|quality_rating|GREEN|
|quality_rating|YELLOW|
|quality_rating|RED|
|quality_rating|NA|
|code_verification_status|VERIFIED|
|code_verification_status|UNVERIFIED|
|unified_cert_status|APPROVED|
|unified_cert_status|NAME_PENDING_REVIEW|
|unified_cert_status|NAME_NOT_APPROVED|
|unified_cert_status|ACCOUNT_REVIEW_NOT_STARTED|
|unified_cert_status|LIMITED_ACCESS|
|account_mode|LIVE|
|account_mode|SANDBOX|
|host_platform|CLOUD_API|
|host_platform|ON_PREMISE|
|host_platform|NOT_APPLICABLE|
|messaging_limit_tier|TIER_50|
|messaging_limit_tier|TIER_250|
|messaging_limit_tier|TIER_1K|
|messaging_limit_tier|TIER_10K|
|messaging_limit_tier|TIER_100K|
|messaging_limit_tier|TIER_UNLIMITED|

<h2 id="tocS_WhatsAppPhoneNumberStatus">WhatsAppPhoneNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappphonenumberstatus"></a>
<a id="schema_WhatsAppPhoneNumberStatus"></a>
<a id="tocSwhatsappphonenumberstatus"></a>
<a id="tocswhatsappphonenumberstatus"></a>

```json
"PENDING"
```

Current status of the phone number in the WhatsApp Business Account

<h2 id="tocS_WhatsAppPhoneNumberQualityRating_1">WhatsAppPhoneNumberQualityRating_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappphonenumberqualityrating_1"></a>
<a id="schema_WhatsAppPhoneNumberQualityRating_1"></a>
<a id="tocSwhatsappphonenumberqualityrating_1"></a>
<a id="tocswhatsappphonenumberqualityrating_1"></a>

```json
"GREEN"
```

Quality rating for the phone number based on messaging patterns

<h2 id="tocS_WhatsAppCodeVerificationStatus_1">WhatsAppCodeVerificationStatus_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappcodeverificationstatus_1"></a>
<a id="schema_WhatsAppCodeVerificationStatus_1"></a>
<a id="tocSwhatsappcodeverificationstatus_1"></a>
<a id="tocswhatsappcodeverificationstatus_1"></a>

```json
"NOT_VERIFIED"
```

Status of phone number verification code

<h2 id="tocS_WhatsAppBusinessUnifiedCertStatus">WhatsAppBusinessUnifiedCertStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessunifiedcertstatus"></a>
<a id="schema_WhatsAppBusinessUnifiedCertStatus"></a>
<a id="tocSwhatsappbusinessunifiedcertstatus"></a>
<a id="tocswhatsappbusinessunifiedcertstatus"></a>

```json
"APPROVED"
```

Unified certification status combining business and name verification

<h2 id="tocS_WhatsAppBusinessSandboxEligibility_1">WhatsAppBusinessSandboxEligibility_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinesssandboxeligibility_1"></a>
<a id="schema_WhatsAppBusinessSandboxEligibility_1"></a>
<a id="tocSwhatsappbusinesssandboxeligibility_1"></a>
<a id="tocswhatsappbusinesssandboxeligibility_1"></a>

```json
"LIVE"
```

Account mode indicating sandbox or live environment eligibility

<h2 id="tocS_WhatsAppBusinessAccountHostPlatform">WhatsAppBusinessAccountHostPlatform</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccounthostplatform"></a>
<a id="schema_WhatsAppBusinessAccountHostPlatform"></a>
<a id="tocSwhatsappbusinessaccounthostplatform"></a>
<a id="tocswhatsappbusinessaccounthostplatform"></a>

```json
"CLOUD_API"
```

Platform hosting the WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessAccountPhoneNumbersConnection">WhatsAppBusinessAccountPhoneNumbersConnection</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountphonenumbersconnection"></a>
<a id="schema_WhatsAppBusinessAccountPhoneNumbersConnection"></a>
<a id="tocSwhatsappbusinessaccountphonenumbersconnection"></a>
<a id="tocswhatsappbusinessaccountphonenumbersconnection"></a>

```json
{
  "data": [
    {
      "id": "1906385232743451",
      "display_phone_number": "+1 631-555-5555",
      "verified_name": "Jasper's Market",
      "status": "PENDING",
      "quality_rating": "GREEN",
      "country_code": "US",
      "country_dial_code": "1",
      "code_verification_status": "VERIFIED",
      "unified_cert_status": "APPROVED",
      "account_mode": "LIVE",
      "host_platform": "CLOUD_API",
      "messaging_limit_tier": "TIER_1K",
      "is_official_business_account": true,
      "username": "business_username"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Paginated collection of WhatsApp Business Account phone numbers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessAccountPhoneNumber](#schemawhatsappbusinessaccountphonenumber)]|true|none|Array of phone number records|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_7">CursorPaging_7</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_7"></a>
<a id="schema_CursorPaging_7"></a>
<a id="tocScursorpaging_7"></a>
<a id="tocscursorpaging_7"></a>

```json
{
  "cursors": {
    "before": "string",
    "after": "string"
  },
  "previous": "string",
  "next": "string"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|URL for the previous page of results|
|next|string|false|none|URL for the next page of results|

<h2 id="tocS_PhoneNumberCreateRequest">PhoneNumberCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercreaterequest"></a>
<a id="schema_PhoneNumberCreateRequest"></a>
<a id="tocSphonenumbercreaterequest"></a>
<a id="tocsphonenumbercreaterequest"></a>

```json
{
  "phone_number": "16315551000",
  "verified_name": "My Business Name",
  "cc": "1",
  "migrate_phone_number": false,
  "preverified_id": "preverified_12345"
}
```

Request payload for creating a new phone number registration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone_number|string|true|none|Phone number in E.164 format without the + prefix|
|verified_name|string|true|none|Business name to be verified for this phone number|
|cc|string|false|none|Country code for the phone number|
|migrate_phone_number|boolean|false|none|Whether this is a phone number migration from on-premises|
|preverified_id|string|false|none|Pre-verified phone number ID for BSP scenarios|

<h2 id="tocS_PhoneNumberCreateResponse">PhoneNumberCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercreateresponse"></a>
<a id="schema_PhoneNumberCreateResponse"></a>
<a id="tocSphonenumbercreateresponse"></a>
<a id="tocsphonenumbercreateresponse"></a>

```json
{
  "id": "1906385232743451"
}
```

Response after successfully creating a phone number registration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the created phone number status record|

<h2 id="tocS_WhatsAppBusinessAccountSchedule">WhatsAppBusinessAccountSchedule</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountschedule"></a>
<a id="schema_WhatsAppBusinessAccountSchedule"></a>
<a id="tocSwhatsappbusinessaccountschedule"></a>
<a id="tocswhatsappbusinessaccountschedule"></a>

```json
{
  "id": "1234567890123456",
  "name": "Daily Business Hours Schedule",
  "status": "ACTIVE",
  "schedule_type": "BUSINESS_HOURS",
  "description": "Automated responses during business hours",
  "start_time": "09:00",
  "end_time": "17:00",
  "timezone": "America/New_York",
  "days_of_week": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY"
  ],
  "created_time": "2024-01-15T10:30:00Z",
  "updated_time": "2024-01-20T14:45:00Z",
  "is_active": true,
  "recurrence_pattern": {
    "frequency": "WEEKLY",
    "interval": 1,
    "end_date": "2024-12-31"
  }
}
```

WhatsApp Business Account schedule configuration and details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the schedule|
|name|string|true|none|Human-readable name for the schedule|
|status|[WhatsAppScheduleStatus](#schemawhatsappschedulestatus)|true|none|Current status of the schedule|
|schedule_type|[WhatsAppScheduleType](#schemawhatsappscheduletype)|true|none|Type of schedule configuration|
|description|string|false|none|Optional description of the schedule purpose|
|start_time|string(time)|false|none|Schedule start time in HH:MM format|
|end_time|string(time)|false|none|Schedule end time in HH:MM format|
|timezone|string|false|none|Timezone identifier for the schedule|
|days_of_week|[[DayOfWeek](#schemadayofweek)]|false|none|Days of the week when the schedule is active|
|created_time|string(date-time)|false|none|ISO 8601 timestamp when the schedule was created|
|updated_time|string(date-time)|false|none|ISO 8601 timestamp when the schedule was last updated|
|is_active|boolean|false|none|Whether the schedule is currently active|
|recurrence_pattern|[RecurrencePattern](#schemarecurrencepattern)|false|none|Pattern for recurring schedules|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|PAUSED|
|status|EXPIRED|
|status|DRAFT|
|schedule_type|BUSINESS_HOURS|
|schedule_type|AUTOMATED_RESPONSE|
|schedule_type|MESSAGE_CAMPAIGN|
|schedule_type|MAINTENANCE_WINDOW|
|schedule_type|CUSTOM|
|days_of_week|MONDAY|
|days_of_week|TUESDAY|
|days_of_week|WEDNESDAY|
|days_of_week|THURSDAY|
|days_of_week|FRIDAY|
|days_of_week|SATURDAY|
|days_of_week|SUNDAY|

<h2 id="tocS_WhatsAppScheduleStatus">WhatsAppScheduleStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappschedulestatus"></a>
<a id="schema_WhatsAppScheduleStatus"></a>
<a id="tocSwhatsappschedulestatus"></a>
<a id="tocswhatsappschedulestatus"></a>

```json
"ACTIVE"
```

Current status of the schedule

<h2 id="tocS_WhatsAppScheduleType">WhatsAppScheduleType</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappscheduletype"></a>
<a id="schema_WhatsAppScheduleType"></a>
<a id="tocSwhatsappscheduletype"></a>
<a id="tocswhatsappscheduletype"></a>

```json
"BUSINESS_HOURS"
```

Type of schedule configuration

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
"MONDAY"
```

Day of the week

<h2 id="tocS_RecurrencePattern">RecurrencePattern</h2>
<!-- backwards compatibility -->
<a id="schemarecurrencepattern"></a>
<a id="schema_RecurrencePattern"></a>
<a id="tocSrecurrencepattern"></a>
<a id="tocsrecurrencepattern"></a>

```json
{
  "frequency": "WEEKLY",
  "interval": 1,
  "end_date": "2024-12-31"
}
```

Pattern for recurring schedules

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string|false|none|none|
|interval|integer|false|none|Interval between recurrences|
|end_date|string(date)|false|none|End date for the recurrence pattern|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|DAILY|
|frequency|WEEKLY|
|frequency|MONTHLY|
|frequency|YEARLY|

<h2 id="tocS_WhatsAppBusinessAccountSchedulesConnection">WhatsAppBusinessAccountSchedulesConnection</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountschedulesconnection"></a>
<a id="schema_WhatsAppBusinessAccountSchedulesConnection"></a>
<a id="tocSwhatsappbusinessaccountschedulesconnection"></a>
<a id="tocswhatsappbusinessaccountschedulesconnection"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "Daily Business Hours Schedule",
      "status": "ACTIVE",
      "schedule_type": "BUSINESS_HOURS",
      "description": "Automated responses during business hours",
      "start_time": "09:00",
      "end_time": "17:00",
      "timezone": "America/New_York",
      "days_of_week": [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY"
      ],
      "created_time": "2024-01-15T10:30:00Z",
      "updated_time": "2024-01-20T14:45:00Z",
      "is_active": true,
      "recurrence_pattern": {
        "frequency": "WEEKLY",
        "interval": 1,
        "end_date": "2024-12-31"
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjNpUWpVWmRBd0dn",
      "after": "QVFIUjNpUWpVWmRBd0Rn"
    },
    "previous": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?before=QVFIUjNpUWpVWmRBd0Dn",
    "next": "https://graph.facebook.com/v23.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"
  }
}
```

Paginated collection of WhatsApp Business Account schedules

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessAccountSchedule](#schemawhatsappbusinessaccountschedule)]|true|none|Array of schedule records|
|paging|[CursorPaging](#schemacursorpaging)|false|none|Cursor-based pagination information|

<h2 id="tocS_CursorPaging_8">CursorPaging_8</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaging_8"></a>
<a id="schema_CursorPaging_8"></a>
<a id="tocScursorpaging_8"></a>
<a id="tocscursorpaging_8"></a>

```json
{
  "cursors": {
    "before": "string",
    "after": "string"
  },
  "previous": "string",
  "next": "string"
}
```

Cursor-based pagination information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|URL for the previous page of results|
|next|string|false|none|URL for the next page of results|

<h2 id="tocS_ScheduleCreateRequest">ScheduleCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaschedulecreaterequest"></a>
<a id="schema_ScheduleCreateRequest"></a>
<a id="tocSschedulecreaterequest"></a>
<a id="tocsschedulecreaterequest"></a>

```json
{
  "name": "Business Hours Schedule",
  "schedule_type": "BUSINESS_HOURS",
  "description": "Automated responses during business hours",
  "start_time": "09:00",
  "end_time": "17:00",
  "timezone": "America/New_York",
  "days_of_week": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY"
  ],
  "is_active": true,
  "recurrence_pattern": {
    "frequency": "WEEKLY",
    "interval": 1,
    "end_date": "2024-12-31"
  }
}
```

Request payload for creating a new schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Human-readable name for the schedule|
|schedule_type|[WhatsAppScheduleType](#schemawhatsappscheduletype)|true|none|Type of schedule configuration|
|description|string|false|none|Optional description of the schedule purpose|
|start_time|string(time)|true|none|Schedule start time in HH:MM format|
|end_time|string(time)|true|none|Schedule end time in HH:MM format|
|timezone|string|false|none|Timezone identifier for the schedule|
|days_of_week|[[DayOfWeek](#schemadayofweek)]|false|none|Days of the week when the schedule is active|
|is_active|boolean|false|none|Whether the schedule should be active upon creation|
|recurrence_pattern|[RecurrencePattern](#schemarecurrencepattern)|false|none|Pattern for recurring schedules|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule_type|BUSINESS_HOURS|
|schedule_type|AUTOMATED_RESPONSE|
|schedule_type|MESSAGE_CAMPAIGN|
|schedule_type|MAINTENANCE_WINDOW|
|schedule_type|CUSTOM|
|days_of_week|MONDAY|
|days_of_week|TUESDAY|
|days_of_week|WEDNESDAY|
|days_of_week|THURSDAY|
|days_of_week|FRIDAY|
|days_of_week|SATURDAY|
|days_of_week|SUNDAY|

<h2 id="tocS_ScheduleCreateResponse">ScheduleCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulecreateresponse"></a>
<a id="schema_ScheduleCreateResponse"></a>
<a id="tocSschedulecreateresponse"></a>
<a id="tocsschedulecreateresponse"></a>

```json
{
  "id": "1234567890123456"
}
```

Response after successfully creating a schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the created schedule|

<h2 id="tocS_SetOBOMobilityIntentRequest">SetOBOMobilityIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetobomobilityintentrequest"></a>
<a id="schema_SetOBOMobilityIntentRequest"></a>
<a id="tocSsetobomobilityintentrequest"></a>
<a id="tocssetobomobilityintentrequest"></a>

```json
{
  "waba_id": "1234567890123456",
  "solution_id": "2345678901234567",
  "app_id": "3456789012345678",
  "actor_id": "4567890123456789",
  "client_mutation_id": "obo_mobility_intent_mutation_123"
}
```

Request payload for setting OBO mobility intent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waba_id|string|true|none|WhatsApp Business Account ID for which to set OBO mobility intent|
|solution_id|string|false|none|Unique identifier for the Multi-Partner Solution|
|app_id|string|false|none|Application ID requesting OBO mobility intent|
|actor_id|string|false|none|Actor ID performing the OBO mobility intent operation|
|client_mutation_id|string|false|none|Client-provided mutation identifier for request tracking|

<h2 id="tocS_SetOBOMobilityIntentResponse">SetOBOMobilityIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetobomobilityintentresponse"></a>
<a id="schema_SetOBOMobilityIntentResponse"></a>
<a id="tocSsetobomobilityintentresponse"></a>
<a id="tocssetobomobilityintentresponse"></a>

```json
{
  "success": true,
  "intent_id": "obo_intent_987654321",
  "client_mutation_id": "obo_mobility_intent_mutation_123",
  "error_msg": null
}
```

Response for setting OBO mobility intent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates if the OBO mobility intent was set successfully|
|intent_id|string|false|none|Unique identifier for the created OBO mobility intent|
|client_mutation_id|string|false|none|Client-provided mutation identifier echoed back|
|error_msg|string|false|none|Error message if the operation failed|

<h2 id="tocS_SetSolutionMigrationIntentRequest">SetSolutionMigrationIntentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetsolutionmigrationintentrequest"></a>
<a id="schema_SetSolutionMigrationIntentRequest"></a>
<a id="tocSsetsolutionmigrationintentrequest"></a>
<a id="tocssetsolutionmigrationintentrequest"></a>

```json
{
  "solution_id": "1234567890123456",
  "migration_intent": "INITIATE_MIGRATION",
  "target_solution_id": "2345678901234567",
  "migration_reason": "Migrating to new solution provider for enhanced features",
  "scheduled_migration_time": "2024-12-01T10:00:00Z"
}
```

Request payload for setting solution migration intent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|solution_id|string|true|none|Unique identifier for the Multi-Partner Solution|
|migration_intent|[SolutionMigrationIntent](#schemasolutionmigrationintent)|true|none|Intent for solution migration|
|target_solution_id|string|false|none|Target solution ID for migration (required for certain migration intents)|
|migration_reason|string|false|none|Reason for the migration intent|
|scheduled_migration_time|string(date-time)|false|none|Scheduled time for migration execution (ISO 8601 format)|

#### Enumerated Values

|Property|Value|
|---|---|
|migration_intent|INITIATE_MIGRATION|
|migration_intent|CANCEL_MIGRATION|
|migration_intent|CONFIRM_MIGRATION|
|migration_intent|SCHEDULE_MIGRATION|

<h2 id="tocS_SolutionMigrationIntent">SolutionMigrationIntent</h2>
<!-- backwards compatibility -->
<a id="schemasolutionmigrationintent"></a>
<a id="schema_SolutionMigrationIntent"></a>
<a id="tocSsolutionmigrationintent"></a>
<a id="tocssolutionmigrationintent"></a>

```json
"INITIATE_MIGRATION"
```

Intent for solution migration

<h2 id="tocS_SetSolutionMigrationIntentResponse">SetSolutionMigrationIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetsolutionmigrationintentresponse"></a>
<a id="schema_SetSolutionMigrationIntentResponse"></a>
<a id="tocSsetsolutionmigrationintentresponse"></a>
<a id="tocssetsolutionmigrationintentresponse"></a>

```json
{
  "success": true,
  "migration_intent_id": "migration_intent_123456789",
  "status": "PENDING",
  "estimated_completion_time": "2024-12-01T12:00:00Z"
}
```

Response for setting solution migration intent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates if the migration intent was set successfully|
|migration_intent_id|string|true|none|Unique identifier for the migration intent request|
|status|string|false|none|Current status of the migration intent|
|estimated_completion_time|string(date-time)|false|none|Estimated completion time for the migration (ISO 8601 format)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|APPROVED|
|status|REJECTED|
|status|SCHEDULED|

<h2 id="tocS_SolutionsList">SolutionsList</h2>
<!-- backwards compatibility -->
<a id="schemasolutionslist"></a>
<a id="schema_SolutionsList"></a>
<a id="tocSsolutionslist"></a>
<a id="tocssolutionslist"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "name": "E-commerce Integration Solution",
      "status": "ACTIVE",
      "status_for_pending_request": "NONE",
      "owner_app": {
        "id": "9876543210987654",
        "name": "Solution Partner App"
      },
      "owner_permissions": [
        "MANAGE",
        "DEVELOP",
        "MANAGE_TEMPLATES"
      ]
    }
  ],
  "paging": {
    "cursors": {
      "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
      "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
    }
  }
}
```

Paginated list of Multi-Partner Solutions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessSolution](#schemawhatsappbusinesssolution)]|true|none|Array of Multi-Partner Solutions associated with the WABA|
|paging|[Paging](#schemapaging)|false|none|none|

<h2 id="tocS_Paging_1">Paging_1</h2>
<!-- backwards compatibility -->
<a id="schemapaging_1"></a>
<a id="schema_Paging_1"></a>
<a id="tocSpaging_1"></a>
<a id="tocspaging_1"></a>

```json
{
  "cursors": {
    "before": "FAKE_CURSOR_BEFORE_123ABC",
    "after": "FAKE_CURSOR_AFTER_456DEF"
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890/solutions?limit=25&before=FAKE_CURSOR_BEFORE_123ABC",
  "next": "https://graph.facebook.com/v23.0/1234567890/solutions?limit=25&after=FAKE_CURSOR_AFTER_456DEF"
}
```

Pagination information for cursor-based pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|Graph API endpoint URL for the previous page of data|
|next|string|false|none|Graph API endpoint URL for the next page of data|

<h2 id="tocS_GraphAPIError_12">GraphAPIError_12</h2>
<!-- backwards compatibility -->
<a id="schemagraphapierror_12"></a>
<a id="schema_GraphAPIError_12"></a>
<a id="tocSgraphapierror_12"></a>
<a id="tocsgraphapierror_12"></a>

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 33,
    "fbtrace_id": "FAKE_TRACE_ID_123ABC456DEF",
    "is_transient": false,
    "error_user_title": "Permission Denied",
    "error_user_msg": "Your app doesn't have permission to access this resource"
  }
}
```

Standard Graph API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_WhatsAppBusinessApiData_1">WhatsAppBusinessApiData_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessapidata_1"></a>
<a id="schema_WhatsAppBusinessApiData_1"></a>
<a id="tocSwhatsappbusinessapidata_1"></a>
<a id="tocswhatsappbusinessapidata_1"></a>

```json
{
  "id": "1234567890123456",
  "name": "Business Messaging App",
  "link": "https://www.facebook.com/games/?app_id=1234567890123456"
}
```

Application subscription data for WhatsApp Business Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subscribed application|
|name|string|true|none|Name of the subscribed application|
|link|string|false|none|URL link to the application|

<h2 id="tocS_SubscribedApp_1">SubscribedApp_1</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedapp_1"></a>
<a id="schema_SubscribedApp_1"></a>
<a id="tocSsubscribedapp_1"></a>
<a id="tocssubscribedapp_1"></a>

```json
{
  "whatsapp_business_api_data": {
    "pin": "123456",
    "show_security_notifications": true,
    "notify_user_change_number": false
  },
  "override_callback_uri": "https://your-webhook-endpoint.com/webhook"
}
```

Subscribed application details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|whatsapp_business_api_data|[WhatsAppBusinessApiData](#schemawhatsappbusinessapidata)|true|none|WhatsApp Business API configuration data|
|override_callback_uri|string|false|none|Custom webhook callback URL for this subscription|

<h2 id="tocS_SubscribedAppsResponse">SubscribedAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedappsresponse"></a>
<a id="schema_SubscribedAppsResponse"></a>
<a id="tocSsubscribedappsresponse"></a>
<a id="tocssubscribedappsresponse"></a>

```json
{
  "data": [
    {
      "id": "9876543210987654",
      "name": "WhatsApp Integration App"
    }
  ]
}
```

Response containing list of subscribed applications

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SubscribedApp](#schemasubscribedapp)]|true|none|Array of subscribed applications|

<h2 id="tocS_SubscriptionRequest">SubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionrequest"></a>
<a id="schema_SubscriptionRequest"></a>
<a id="tocSsubscriptionrequest"></a>
<a id="tocssubscriptionrequest"></a>

```json
{
  "override_callback_uri": "https://your-webhook-endpoint.com/webhook",
  "verify_token": "YOUR_VERIFY_TOKEN_PLACEHOLDER"
}
```

Request body for subscribing to WABA webhooks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|override_callback_uri|string|false|none|Custom webhook callback URL to override app default|
|verify_token|string|false|none|Verification token for webhook security|

<h2 id="tocS_SubscriptionResponse">SubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponse"></a>
<a id="schema_SubscriptionResponse"></a>
<a id="tocSsubscriptionresponse"></a>
<a id="tocssubscriptionresponse"></a>

```json
{
  "success": true,
  "data": [
    {
      "id": "9876543210987654",
      "name": "WhatsApp Integration App"
    }
  ]
}
```

Response after successful subscription operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Indicates whether the subscription operation was successful|
|data|[[SubscribedApp](#schemasubscribedapp)]|false|none|Array containing subscription details|

<h2 id="tocS_WhatsAppBusinessAccountActivity">WhatsAppBusinessAccountActivity</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountactivity"></a>
<a id="schema_WhatsAppBusinessAccountActivity"></a>
<a id="tocSwhatsappbusinessaccountactivity"></a>
<a id="tocswhatsappbusinessaccountactivity"></a>

```json
{
  "id": "1234567890123456",
  "activity_type": "PHONE_NUMBER_VERIFIED",
  "timestamp": "2023-10-15T14:30:00Z",
  "actor_type": "USER",
  "actor_id": "9876543210987654",
  "actor_name": "John Smith",
  "description": "Phone number configuration updated",
  "details": {
    "phone_number": "+1234567890",
    "previous_status": "UNVERIFIED",
    "new_status": "VERIFIED"
  },
  "ip_address": "192.168.1.100",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
```

WhatsApp Business Account activity record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the activity record|
|activity_type|[ActivityType](#schemaactivitytype)|true|none|Type of activity performed on the WhatsApp Business Account|
|timestamp|string(date-time)|true|none|ISO 8601 timestamp when the activity occurred|
|actor_type|[ActorType](#schemaactortype)|true|none|Type of entity that performed the activity|
|actor_id|string|false|none|ID of the user or system that performed the activity|
|actor_name|string|false|none|Name of the user or system that performed the activity|
|description|string|false|none|Human-readable description of the activity|
|details|object|false|none|Additional structured details about the activity|
|ip_address|string|false|none|IP address from which the activity was performed (when available)|
|user_agent|string|false|none|User agent string from the client that performed the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|activity_type|ACCOUNT_CREATED|
|activity_type|ACCOUNT_UPDATED|
|activity_type|ACCOUNT_DELETED|
|activity_type|PHONE_NUMBER_ADDED|
|activity_type|PHONE_NUMBER_REMOVED|
|activity_type|PHONE_NUMBER_VERIFIED|
|activity_type|USER_ADDED|
|activity_type|USER_REMOVED|
|activity_type|USER_ROLE_CHANGED|
|activity_type|PERMISSION_GRANTED|
|activity_type|PERMISSION_REVOKED|
|activity_type|TEMPLATE_CREATED|
|activity_type|TEMPLATE_UPDATED|
|activity_type|TEMPLATE_DELETED|
|activity_type|WEBHOOK_CONFIGURED|
|activity_type|API_ACCESS_GRANTED|
|activity_type|API_ACCESS_REVOKED|
|activity_type|BILLING_UPDATED|
|activity_type|COMPLIANCE_ACTION|
|activity_type|SECURITY_EVENT|
|actor_type|USER|
|actor_type|SYSTEM|
|actor_type|API|
|actor_type|ADMIN|
|actor_type|AUTOMATED_PROCESS|

<h2 id="tocS_ActivityType">ActivityType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytype"></a>
<a id="schema_ActivityType"></a>
<a id="tocSactivitytype"></a>
<a id="tocsactivitytype"></a>

```json
"PHONE_NUMBER_VERIFIED"
```

Type of activity performed on the WhatsApp Business Account

<h2 id="tocS_ActorType">ActorType</h2>
<!-- backwards compatibility -->
<a id="schemaactortype"></a>
<a id="schema_ActorType"></a>
<a id="tocSactortype"></a>
<a id="tocsactortype"></a>

```json
"USER"
```

Type of entity that performed the activity

<h2 id="tocS_ActivityList">ActivityList</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylist"></a>
<a id="schema_ActivityList"></a>
<a id="tocSactivitylist"></a>
<a id="tocsactivitylist"></a>

```json
{
  "data": [
    {
      "id": "1234567890123456",
      "activity_type": "PHONE_NUMBER_VERIFIED",
      "timestamp": "2023-10-15T14:30:00Z",
      "actor_type": "USER",
      "actor_id": "9876543210987654",
      "actor_name": "John Smith",
      "description": "Phone number configuration updated",
      "details": {
        "phone_number": "+1234567890",
        "previous_status": "UNVERIFIED",
        "new_status": "VERIFIED"
      },
      "ip_address": "192.168.1.100",
      "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
  ],
  "paging": {
    "cursors": {
      "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",
      "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"
    }
  }
}
```

Paginated list of WhatsApp Business Account activities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WhatsAppBusinessAccountActivity](#schemawhatsappbusinessaccountactivity)]|true|none|Array of activity records|
|paging|[Paging](#schemapaging)|false|none|none|

<h2 id="tocS_Paging_2">Paging_2</h2>
<!-- backwards compatibility -->
<a id="schemapaging_2"></a>
<a id="schema_Paging_2"></a>
<a id="tocSpaging_2"></a>
<a id="tocspaging_2"></a>

```json
{
  "cursors": {
    "before": "MTAxNTExOTQ1MjAwNzI5NDE=",
    "after": "NDMyNzQyODI3OTQw"
  },
  "previous": "https://graph.facebook.com/v23.0/1234567890/activities?limit=25&before=MTAxNTExOTQ1MjAwNzI5NDE=",
  "next": "https://graph.facebook.com/v23.0/1234567890/activities?limit=25&after=NDMyNzQyODI3OTQw"
}
```

Pagination information for activity results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|none|
|previous|string|false|none|Graph API endpoint URL for the previous page of results|
|next|string|false|none|Graph API endpoint URL for the next page of results|

<h2 id="tocS_WhatsAppBusinessAccount_3">WhatsAppBusinessAccount_3</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccount_3"></a>
<a id="schema_WhatsAppBusinessAccount_3"></a>
<a id="tocSwhatsappbusinessaccount_3"></a>
<a id="tocswhatsappbusinessaccount_3"></a>

```json
{
  "id": "1234567890123456",
  "name": "My Business WhatsApp Account",
  "timezone_id": "1",
  "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",
  "account_review_status": "APPROVED",
  "business_verification_status": "VERIFIED",
  "country": "US",
  "ownership_type": "SELF_OWNED",
  "primary_business_location": "US"
}
```

WhatsApp Business Account details and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Account|
|name|string|true|none|Human-readable name of the WhatsApp Business Account|
|timezone_id|string|false|none|Timezone identifier for the WhatsApp Business Account|
|message_template_namespace|string|false|none|Message template namespace for the WhatsApp Business Account|
|account_review_status|[WhatsAppBusinessAccountReviewStatus](#schemawhatsappbusinessaccountreviewstatus)|false|none|Review status of the WhatsApp Business Account|
|business_verification_status|[WhatsAppBusinessAccountVerificationStatus](#schemawhatsappbusinessaccountverificationstatus)|false|none|Business verification status of the WhatsApp Business Account|
|country|string|false|none|Country code for the WhatsApp Business Account|
|ownership_type|[WhatsAppBusinessAccountOwnershipType](#schemawhatsappbusinessaccountownershiptype)|false|none|Ownership type of the WhatsApp Business Account|
|primary_business_location|string|false|none|Primary business location for the WhatsApp Business Account|

#### Enumerated Values

|Property|Value|
|---|---|
|account_review_status|PENDING|
|account_review_status|APPROVED|
|account_review_status|REJECTED|
|account_review_status|LIMIT_REACHED|
|business_verification_status|VERIFIED|
|business_verification_status|UNVERIFIED|
|business_verification_status|PENDING|
|ownership_type|SELF_OWNED|
|ownership_type|CLIENT_OWNED|
|ownership_type|AGENCY_OWNED|

<h2 id="tocS_WhatsAppBusinessAccountReviewStatus">WhatsAppBusinessAccountReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountreviewstatus"></a>
<a id="schema_WhatsAppBusinessAccountReviewStatus"></a>
<a id="tocSwhatsappbusinessaccountreviewstatus"></a>
<a id="tocswhatsappbusinessaccountreviewstatus"></a>

```json
"APPROVED"
```

Review status of the WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessAccountVerificationStatus">WhatsAppBusinessAccountVerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountverificationstatus"></a>
<a id="schema_WhatsAppBusinessAccountVerificationStatus"></a>
<a id="tocSwhatsappbusinessaccountverificationstatus"></a>
<a id="tocswhatsappbusinessaccountverificationstatus"></a>

```json
"VERIFIED"
```

Business verification status of the WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessAccountOwnershipType">WhatsAppBusinessAccountOwnershipType</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessaccountownershiptype"></a>
<a id="schema_WhatsAppBusinessAccountOwnershipType"></a>
<a id="tocSwhatsappbusinessaccountownershiptype"></a>
<a id="tocswhatsappbusinessaccountownershiptype"></a>

```json
"SELF_OWNED"
```

Ownership type of the WhatsApp Business Account

<h2 id="tocS_WhatsAppBusinessBot">WhatsAppBusinessBot</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessbot"></a>
<a id="schema_WhatsAppBusinessBot"></a>
<a id="tocSwhatsappbusinessbot"></a>
<a id="tocswhatsappbusinessbot"></a>

```json
{
  "id": "1234567890123456",
  "prompts": [
    "Welcome to our service!",
    "How can I help you today?"
  ],
  "commands": [
    {
      "command_name": "help",
      "command_description": "Display available commands and help information"
    }
  ],
  "enable_welcome_message": true
}
```

WhatsApp Business Bot configuration and details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Bot|
|prompts|[string]|false|none|List of bot prompts and automated responses|
|commands|[[WhatsAppBusinessBotCommand](#schemawhatsappbusinessbotcommand)]|false|none|List of available bot commands and their descriptions|
|enable_welcome_message|boolean|false|none|Whether the welcome message is enabled for this bot|

<h2 id="tocS_WhatsAppBusinessBotCommand">WhatsAppBusinessBotCommand</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessbotcommand"></a>
<a id="schema_WhatsAppBusinessBotCommand"></a>
<a id="tocSwhatsappbusinessbotcommand"></a>
<a id="tocswhatsappbusinessbotcommand"></a>

```json
{
  "command_name": "help",
  "command_description": "Display available commands and help information"
}
```

Bot command configuration with name and description

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command_name|string|true|none|Name of the bot command|
|command_description|string|true|none|Description of what the command does|

<h2 id="tocS_WhatsAppBusinessProfileNode">WhatsAppBusinessProfileNode</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofilenode"></a>
<a id="schema_WhatsAppBusinessProfileNode"></a>
<a id="tocSwhatsappbusinessprofilenode"></a>
<a id="tocswhatsappbusinessprofilenode"></a>

```json
{
  "id": "1234567890123456",
  "account_name": "E-commerce Business Account",
  "description": "Leading e-commerce platform for quality products",
  "email": "contact@business-example.com",
  "about": "Quality products delivered worldwide",
  "address": "123 Business Street, Commerce City, CC 12345",
  "vertical": "RESTAURANT",
  "websites": [
    "https://www.business-example.com",
    "https://shop.business-example.com"
  ],
  "profile_picture_url": "https://pps.whatsapp.net/v/profile-picture-url",
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",
  "messaging_product": "whatsapp"
}
```

WhatsApp Business Profile node details and configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the WhatsApp Business Profile|
|account_name|string|false|none|Name of the business account|
|description|string|false|none|Business description text|
|email|string(email)|false|none|Contact email address of the business|
|about|string|false|none|About section text for the business profile|
|address|string|false|none|Physical address of the business|
|vertical|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|none|The industry type of the business|
|websites|[string(uri)]|false|none|List of website URLs associated with the business|
|profile_picture_url|string(uri)|false|none|URL of the business profile picture|
|profile_picture_handle|string|false|none|Handle of the profile picture for upload operations|
|messaging_product|string|false|none|The messaging service used|

#### Enumerated Values

|Property|Value|
|---|---|
|vertical|OTHER|
|vertical|AUTO|
|vertical|BEAUTY|
|vertical|APPAREL|
|vertical|EDU|
|vertical|ENTERTAIN|
|vertical|EVENT_PLAN|
|vertical|FINANCE|
|vertical|GROCERY|
|vertical|GOVT|
|vertical|HOTEL|
|vertical|HEALTH|
|vertical|NONPROFIT|
|vertical|PROF_SERVICES|
|vertical|RETAIL|
|vertical|TRAVEL|
|vertical|RESTAURANT|
|vertical|ALCOHOL|
|vertical|ONLINE_GAMBLING|
|vertical|PHYSICAL_GAMBLING|
|vertical|OTC_DRUGS|
|messaging_product|whatsapp|

<h2 id="tocS_WhatsAppBusinessProfileUpdateRequest_1">WhatsAppBusinessProfileUpdateRequest_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofileupdaterequest_1"></a>
<a id="schema_WhatsAppBusinessProfileUpdateRequest_1"></a>
<a id="tocSwhatsappbusinessprofileupdaterequest_1"></a>
<a id="tocswhatsappbusinessprofileupdaterequest_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "account_name": "Updated Business Account",
  "description": "Updated business description",
  "email": "updated@business-example.com",
  "about": "Updated about text",
  "address": "456 Updated Street, New City, NC 54321",
  "vertical": "RESTAURANT",
  "websites": [
    "https://www.updated-business.com",
    "https://shop.updated-business.com"
  ],
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU"
}
```

Request payload for updating WhatsApp Business Profile information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|The messaging service used for the request|
|account_name|string|false|none|Name of the business account|
|description|string|false|none|Business description text|
|email|string(email)|false|none|Contact email address of the business|
|about|string|false|none|About section text for the business profile|
|address|string|false|none|Physical address of the business|
|vertical|[WhatsAppBusinessVertical](#schemawhatsappbusinessvertical)|false|none|The industry type of the business|
|websites|[string(uri)]|false|none|List of website URLs associated with the business|
|profile_picture_handle|string|false|none|Handle of the profile picture generated from Resumable Upload API|

#### Enumerated Values

|Property|Value|
|---|---|
|messaging_product|whatsapp|
|vertical|OTHER|
|vertical|AUTO|
|vertical|BEAUTY|
|vertical|APPAREL|
|vertical|EDU|
|vertical|ENTERTAIN|
|vertical|EVENT_PLAN|
|vertical|FINANCE|
|vertical|GROCERY|
|vertical|GOVT|
|vertical|HOTEL|
|vertical|HEALTH|
|vertical|NONPROFIT|
|vertical|PROF_SERVICES|
|vertical|RETAIL|
|vertical|TRAVEL|
|vertical|RESTAURANT|
|vertical|ALCOHOL|
|vertical|ONLINE_GAMBLING|
|vertical|PHYSICAL_GAMBLING|
|vertical|OTC_DRUGS|

<h2 id="tocS_WhatsAppBusinessProfileUpdateResponse_1">WhatsAppBusinessProfileUpdateResponse_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessprofileupdateresponse_1"></a>
<a id="schema_WhatsAppBusinessProfileUpdateResponse_1"></a>
<a id="tocSwhatsappbusinessprofileupdateresponse_1"></a>
<a id="tocswhatsappbusinessprofileupdateresponse_1"></a>

```json
{
  "id": "1234567890123456",
  "success": true
}
```

Response from updating WhatsApp Business Profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|WhatsApp Business Profile ID that was updated|
|success|boolean|false|none|Indicates if the update was successful|

<h2 id="tocS_WhatsAppBusinessVertical_1">WhatsAppBusinessVertical_1</h2>
<!-- backwards compatibility -->
<a id="schemawhatsappbusinessvertical_1"></a>
<a id="schema_WhatsAppBusinessVertical_1"></a>
<a id="tocSwhatsappbusinessvertical_1"></a>
<a id="tocswhatsappbusinessvertical_1"></a>

```json
"RETAIL"
```

Industry vertical classification for the business

<h2 id="tocS_WebhookPayload">WebhookPayload</h2>
<!-- backwards compatibility -->
<a id="schemawebhookpayload"></a>
<a id="schema_WebhookPayload"></a>
<a id="tocSwebhookpayload"></a>
<a id="tocswebhookpayload"></a>

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "419561257915477",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15550783881",
              "phone_number_id": "106540352242922"
            },
            "contacts": [
              {
                "profile": {
                  "name": "Sheena Nelson"
                },
                "wa_id": "16505551234"
              }
            ],
            "messages": [
              {
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": "19505550005",
                "type": "text",
                "context": {
                  "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
                },
                "text": {
                  "body": "Hello World!",
                  "preview_url": true
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Always 'whatsapp_business_account' for these webhooks.|
|entry|[[Entry](#schemaentry)]|true|none|none|

<h2 id="tocS_Entry">Entry</h2>
<!-- backwards compatibility -->
<a id="schemaentry"></a>
<a id="schema_Entry"></a>
<a id="tocSentry"></a>
<a id="tocsentry"></a>

```json
{
  "id": "419561257915477",
  "changes": [
    {
      "value": {
        "messaging_product": "whatsapp",
        "metadata": {
          "display_phone_number": "15550783881",
          "phone_number_id": "106540352242922"
        },
        "contacts": [
          {
            "profile": {
              "name": "Sheena Nelson"
            },
            "wa_id": "16505551234"
          }
        ],
        "messages": [
          {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": "19505550005",
            "type": "text",
            "context": {
              "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
            },
            "text": {
              "body": "Hello World!",
              "preview_url": true
            }
          }
        ]
      },
      "field": "messages"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|WhatsApp Business Account ID.|
|changes|[[Change](#schemachange)]|true|none|none|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "value": {
    "messaging_product": "whatsapp",
    "metadata": {
      "display_phone_number": "15550783881",
      "phone_number_id": "106540352242922"
    },
    "contacts": [
      {
        "profile": {
          "name": "Sheena Nelson"
        },
        "wa_id": "16505551234"
      }
    ],
    "messages": [
      {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "19505550005",
        "type": "text",
        "context": {
          "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        },
        "text": {
          "body": "Hello World!",
          "preview_url": true
        }
      }
    ]
  },
  "field": "messages"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[IncomingMessageValueGeneral](#schemaincomingmessagevaluegeneral) \| [IncomingMessageValueSystem](#schemaincomingmessagevaluesystem) \| [StatusMessageValue](#schemastatusmessagevalue) \| [GroupValue](#schemagroupvalue)|true|none|none|
|field|string|true|none|The field indicate to what object is the webhook related:<br>- messages: the webhook is related to messages from consumer or status of message sent by business to consumer.<br>- group_lifecycle_update: the webhook is related to group creation and deletion.<br>- group_settings_update: the webhook is related to group settings update.<br>- group_participant_update: the webhook is related to participants joining and leaving the groups.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|field|messages|
|field|group_lifecycle_update|
|field|group_settings_update|
|field|group_participant_update|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "display_phone_number": "15550783881",
  "phone_number_id": "106540352242922"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_phone_number|string|true|none|Business display phone number.|
|phone_number_id|string|true|none|Business phone number ID.|

<h2 id="tocS_ContactProfile">ContactProfile</h2>
<!-- backwards compatibility -->
<a id="schemacontactprofile"></a>
<a id="schema_ContactProfile"></a>
<a id="tocScontactprofile"></a>
<a id="tocscontactprofile"></a>

```json
{
  "profile": {
    "name": "Sheena Nelson"
  },
  "wa_id": "16505551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|object|true|none|none|
|wa_id|string|false|none|WhatsApp user ID. Note that a WhatsApp user's ID and phone number may not always match.|

<h2 id="tocS_IncomingMessageValueGeneral">IncomingMessageValueGeneral</h2>
<!-- backwards compatibility -->
<a id="schemaincomingmessagevaluegeneral"></a>
<a id="schema_IncomingMessageValueGeneral"></a>
<a id="tocSincomingmessagevaluegeneral"></a>
<a id="tocsincomingmessagevaluegeneral"></a>

```json
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "15550783881",
    "phone_number_id": "106540352242922"
  },
  "contacts": [
    {
      "profile": {
        "name": "Sheena Nelson"
      },
      "wa_id": "16505551234"
    }
  ],
  "messages": [
    {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "19505550005",
      "type": "text",
      "context": {
        "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
      },
      "text": {
        "body": "Hello World!",
        "preview_url": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Always 'whatsapp'.|
|metadata|[Metadata](#schemametadata)|true|none|none|
|contacts|[[ContactProfile](#schemacontactprofile)]|true|none|Array of contact profiles for the sender. Included for all non-system incoming messages.|
|messages|[[IncomingMessage](#schemaincomingmessage)]|true|none|Array of message objects. The structure varies based on the 'type' property.|

<h2 id="tocS_IncomingMessageValueSystem">IncomingMessageValueSystem</h2>
<!-- backwards compatibility -->
<a id="schemaincomingmessagevaluesystem"></a>
<a id="schema_IncomingMessageValueSystem"></a>
<a id="tocSincomingmessagevaluesystem"></a>
<a id="tocsincomingmessagevaluesystem"></a>

```json
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "15550783881",
    "phone_number_id": "106540352242922"
  },
  "messages": [
    {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "19505550005",
      "type": "system",
      "context": {
        "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
      },
      "from": "16505551234",
      "id": "wamid.HBgLMTk4MzU1NTE5NzQVAgASGAoxMTgyMDg2MjY3AA==",
      "timestamp": "1750269342",
      "system": {
        "body": "User Sheena Nelson changed from 16505551234 to 12195555358",
        "wa_id": "12195555358",
        "type": "user_changed_number"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Always 'whatsapp'.|
|metadata|[Metadata](#schemametadata)|true|none|none|
|messages|[[SystemMessage](#schemasystemmessage)]|true|none|Array containing only 'system' message objects.|

<h2 id="tocS_StatusMessageValue">StatusMessageValue</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessagevalue"></a>
<a id="schema_StatusMessageValue"></a>
<a id="tocSstatusmessagevalue"></a>
<a id="tocsstatusmessagevalue"></a>

```json
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "15550783881",
    "phone_number_id": "106540352242922"
  },
  "statuses": [
    {
      "id": "string",
      "status": "sent",
      "timestamp": "string",
      "recipient_id": "string",
      "group_id": "string",
      "conversation": {
        "id": "string",
        "expiration_timestamp": "string",
        "origin": {
          "type": "string"
        }
      },
      "pricing": {
        "billable": true,
        "pricing_model": "CBP",
        "category": "string"
      },
      "errors": [
        {
          "code": 0,
          "title": "string",
          "message": "string",
          "error_data": {
            "details": "string"
          },
          "href": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Always 'whatsapp'.|
|metadata|[Metadata](#schemametadata)|true|none|none|
|statuses|[[Statuses](#schemastatuses)]|true|none|Array of status objects.|

<h2 id="tocS_Statuses">Statuses</h2>
<!-- backwards compatibility -->
<a id="schemastatuses"></a>
<a id="schema_Statuses"></a>
<a id="tocSstatuses"></a>
<a id="tocsstatuses"></a>

```json
{
  "id": "string",
  "status": "sent",
  "timestamp": "string",
  "recipient_id": "string",
  "group_id": "string",
  "conversation": {
    "id": "string",
    "expiration_timestamp": "string",
    "origin": {
      "type": "string"
    }
  },
  "pricing": {
    "billable": true,
    "pricing_model": "CBP",
    "category": "string"
  },
  "errors": [
    {
      "code": 0,
      "title": "string",
      "message": "string",
      "error_data": {
        "details": "string"
      },
      "href": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique WhatsApp message ID the status is associated with.|
|status|string|true|none|none|
|timestamp|string|true|none|none|
|recipient_id|string|true|none|Recipeint phone number.|
|group_id|string|false|none|Group ID if the message was sent to a group.|
|conversation|[Conversation](#schemaconversation)|false|none|none|
|pricing|[Pricing](#schemapricing)|false|none|none|
|errors|[[StatusError](#schemastatuserror)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|delivered|
|status|read|
|status|failed|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "id": "string",
  "expiration_timestamp": "string",
  "origin": {
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|expiration_timestamp|string|false|none|none|
|origin|[ConversationOrigin](#schemaconversationorigin)|false|none|none|

<h2 id="tocS_ConversationOrigin">ConversationOrigin</h2>
<!-- backwards compatibility -->
<a id="schemaconversationorigin"></a>
<a id="schema_ConversationOrigin"></a>
<a id="tocSconversationorigin"></a>
<a id="tocsconversationorigin"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_Pricing">Pricing</h2>
<!-- backwards compatibility -->
<a id="schemapricing"></a>
<a id="schema_Pricing"></a>
<a id="tocSpricing"></a>
<a id="tocspricing"></a>

```json
{
  "billable": true,
  "pricing_model": "CBP",
  "category": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billable|boolean|false|none|none|
|pricing_model|string|false|none|none|
|category|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|pricing_model|CBP|
|pricing_model|PMP|

<h2 id="tocS_StatusError">StatusError</h2>
<!-- backwards compatibility -->
<a id="schemastatuserror"></a>
<a id="schema_StatusError"></a>
<a id="tocSstatuserror"></a>
<a id="tocsstatuserror"></a>

```json
{
  "code": 0,
  "title": "string",
  "message": "string",
  "error_data": {
    "details": "string"
  },
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|title|string|false|none|none|
|message|string|false|none|none|
|error_data|[ErrorData](#schemaerrordata)|false|none|none|
|href|string|false|none|none|

<h2 id="tocS_ErrorData">ErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaerrordata"></a>
<a id="schema_ErrorData"></a>
<a id="tocSerrordata"></a>
<a id="tocserrordata"></a>

```json
{
  "details": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|none|

<h2 id="tocS_GroupValue">GroupValue</h2>
<!-- backwards compatibility -->
<a id="schemagroupvalue"></a>
<a id="schema_GroupValue"></a>
<a id="tocSgroupvalue"></a>
<a id="tocsgroupvalue"></a>

```json
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "15550783881",
    "phone_number_id": "106540352242922"
  },
  "groups": [
    {
      "timestamp": 0,
      "group_id": "string",
      "type": "group_create",
      "request_id": "string",
      "subject": "string",
      "description": "string",
      "added_participants": [
        {
          "input": "string",
          "wa_id": "string"
        }
      ],
      "removed_participants": [
        {
          "input": "string",
          "wa_id": "string"
        }
      ],
      "profile_picture": {
        "mime_type": "string",
        "sha256": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|Always 'whatsapp'.|
|metadata|[Metadata](#schemametadata)|true|none|none|
|groups|[[Groups](#schemagroups)]|true|none|Array of group objects.|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
{
  "timestamp": 0,
  "group_id": "string",
  "type": "group_create",
  "request_id": "string",
  "subject": "string",
  "description": "string",
  "added_participants": [
    {
      "input": "string",
      "wa_id": "string"
    }
  ],
  "removed_participants": [
    {
      "input": "string",
      "wa_id": "string"
    }
  ],
  "profile_picture": {
    "mime_type": "string",
    "sha256": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer|true|none|Unix timestamp of the group event|
|group_id|string|true|none|Unique identifier for the group|
|type|string|true|none|Type of group event|
|request_id|string|true|none|Unique identifier for the request|
|subject|string|false|none|Group subject/name|
|description|string|false|none|Group description|
|added_participants|[[GroupParticipant](#schemagroupparticipant)]|false|none|List of participants added to the group|
|removed_participants|[[GroupParticipant](#schemagroupparticipant)]|false|none|List of participants removed from the group|
|profile_picture|[GroupProfilePicture](#schemagroupprofilepicture)|false|none|Group profile picture information|

#### Enumerated Values

|Property|Value|
|---|---|
|type|group_create|
|type|group_delete|
|type|group_settings_update|
|type|group_add_participants|
|type|group_remove_participants|

<h2 id="tocS_GroupParticipant">GroupParticipant</h2>
<!-- backwards compatibility -->
<a id="schemagroupparticipant"></a>
<a id="schema_GroupParticipant"></a>
<a id="tocSgroupparticipant"></a>
<a id="tocsgroupparticipant"></a>

```json
{
  "input": "string",
  "wa_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|Input phone number or WhatsApp ID|
|wa_id|string|false|none|WhatsApp ID of the participant|

<h2 id="tocS_GroupProfilePicture">GroupProfilePicture</h2>
<!-- backwards compatibility -->
<a id="schemagroupprofilepicture"></a>
<a id="schema_GroupProfilePicture"></a>
<a id="tocSgroupprofilepicture"></a>
<a id="tocsgroupprofilepicture"></a>

```json
{
  "mime_type": "string",
  "sha256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mime_type|string|false|none|MIME type of the profile picture|
|sha256|string|false|none|SHA256 hash of the profile picture|

<h2 id="tocS_BaseMessageProperties_1">BaseMessageProperties_1</h2>
<!-- backwards compatibility -->
<a id="schemabasemessageproperties_1"></a>
<a id="schema_BaseMessageProperties_1"></a>
<a id="tocSbasemessageproperties_1"></a>
<a id="tocsbasemessageproperties_1"></a>

```json
{
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
  "timestamp": "1749416383"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.|
|id|string|true|none|Unique WhatsApp message ID.|
|timestamp|string|true|none|Unix timestamp indicating when the webhook was triggered.|

<h2 id="tocS_IncomingMessage">IncomingMessage</h2>
<!-- backwards compatibility -->
<a id="schemaincomingmessage"></a>
<a id="schema_IncomingMessage"></a>
<a id="tocSincomingmessage"></a>
<a id="tocsincomingmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "text",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "text": {
    "body": "Hello World!",
    "preview_url": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextMessage](#schematextmessage)|false|none|none|
|*oneOf*|[ReactionMessage](#schemareactionmessage)|false|none|none|
|*oneOf*|[AudioMessage](#schemaaudiomessage)|false|none|none|
|*oneOf*|[DocumentMessage](#schemadocumentmessage)|false|none|none|
|*oneOf*|[ImageMessage](#schemaimagemessage)|false|none|none|
|*oneOf*|[StickerMessage](#schemastickermessage)|false|none|none|
|*oneOf*|[VideoMessage](#schemavideomessage)|false|none|none|
|*oneOf*|[LocationMessage](#schemalocationmessage)|false|none|none|
|*oneOf*|[ContactSharingMessage](#schemacontactsharingmessage)|false|none|none|
|*oneOf*|[UnsupportedMessage](#schemaunsupportedmessage)|false|none|none|
|*oneOf*|[ButtonMessage](#schemabuttonmessage)|false|none|none|
|*oneOf*|[InteractiveMessageReply](#schemainteractivemessagereply)|false|none|none|
|*oneOf*|[OrderMessage](#schemaordermessage)|false|none|none|

<h2 id="tocS_TextMessage_2">TextMessage_2</h2>
<!-- backwards compatibility -->
<a id="schematextmessage_2"></a>
<a id="schema_TextMessage_2"></a>
<a id="tocStextmessage_2"></a>
<a id="tocstextmessage_2"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "text",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
  "timestamp": "1749416383",
  "text": {
    "body": "Does it come in another color?"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|text|object|true|none|none|
|context|[ContextObject](#schemacontextobject)|false|none|Only included if message via a "Message business" button.|
|referral|[ReferralObject](#schemareferralobject)|false|none|Only included if message via a Click to WhatsApp ad.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|text|

<h2 id="tocS_ContextObject">ContextObject</h2>
<!-- backwards compatibility -->
<a id="schemacontextobject"></a>
<a id="schema_ContextObject"></a>
<a id="tocScontextobject"></a>
<a id="tocscontextobject"></a>

```json
{
  "from": "15550783881",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGA9wcm9kdWN0X2lucXVpcnkA",
  "referred_product": {
    "catalog_id": "194836987003835",
    "product_retailer_id": "di9ozbzfi4"
  }
}
```

Only included if message via a "Message business" button.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|Business display phone number.|
|id|string|true|none|WhatsApp message ID of the message the user used to access the "Message business" button.|
|referred_product|object|true|none|none|

<h2 id="tocS_ReferralObject">ReferralObject</h2>
<!-- backwards compatibility -->
<a id="schemareferralobject"></a>
<a id="schema_ReferralObject"></a>
<a id="tocSreferralobject"></a>
<a id="tocsreferralobject"></a>

```json
{
  "source_url": "https://fb.me/3cr4Wqqkv",
  "source_id": "120226305854810726",
  "source_type": "ad",
  "body": "Summer Succulents are here!",
  "headline": "Chat with us",
  "media_type": "image",
  "image_url": "https://scontent.xx.fbcdn.net/v/t45.1...",
  "video_url": "https://example.com/video.mp4",
  "thumbnail_url": "https://example.com/thumbnail.jpg",
  "ctwa_clid": "Aff-n8ZTODiE79d22KtAwQKj9e_mIEOOj27vDVwFjN80dp4_0NiNhEgpGo0AHemvuSoifXaytfTzcchptiErTKCqTrJ5nW1h7IHYeYymGb5K5J5iTROpBhWAGaIAeUzHL50",
  "welcome_message": {
    "text": "Hi there! Let us know how we can help!"
  }
}
```

Only included if message via a Click to WhatsApp ad.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_url|string|true|none|Ad URL.|
|source_id|string|true|none|Ad ID.|
|source_type|string|true|none|none|
|body|string|true|none|Ad primary text.|
|headline|string|true|none|Ad headline.|
|media_type|string|true|none|none|
|image_url|string|false|none|Only included for image media_type.|
|video_url|string|false|none|Only included for video media_type.|
|thumbnail_url|string|false|none|Only included for video media_type.|
|ctwa_clid|string|true|none|Ad click ID.|
|welcome_message|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source_type|ad|
|source_type|post|
|media_type|image|
|media_type|video|

<h2 id="tocS_ReactionMessage_1">ReactionMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemareactionmessage_1"></a>
<a id="schema_ReactionMessage_1"></a>
<a id="tocSreactionmessage_1"></a>
<a id="tocsreactionmessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "reaction",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
  "timestamp": "1749419544",
  "reaction": {
    "message_id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI0RTJEOTc2ODVERUY5RDlGNkYA",
    "emoji": "👍"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|reaction|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|reaction|

<h2 id="tocS_MediaMessageProperties">MediaMessageProperties</h2>
<!-- backwards compatibility -->
<a id="schemamediamessageproperties"></a>
<a id="schema_MediaMessageProperties"></a>
<a id="tocSmediamessageproperties"></a>
<a id="tocsmediamessageproperties"></a>

```json
{
  "mime_type": "image/jpeg",
  "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
  "id": "1003383421387256"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mime_type|string|true|none|Media asset MIME type.|
|sha256|string|true|none|Media asset SHA-256 hash.|
|id|string|true|none|Media asset ID. A GET request on this ID can provide the asset URL.|

<h2 id="tocS_AudioMessage_1">AudioMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomessage_1"></a>
<a id="schema_AudioMessage_1"></a>
<a id="tocSaudiomessage_1"></a>
<a id="tocsaudiomessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "audio",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "audio": {
    "mime_type": "image/jpeg",
    "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
    "id": "1003383421387256",
    "voice": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|audio|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|audio|

<h2 id="tocS_DocumentMessage_1">DocumentMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmessage_1"></a>
<a id="schema_DocumentMessage_1"></a>
<a id="tocSdocumentmessage_1"></a>
<a id="tocsdocumentmessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "document",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "document": {
    "mime_type": "image/jpeg",
    "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
    "id": "1003383421387256",
    "filename": "receipt.pdf"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|document|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|document|

<h2 id="tocS_ImageMessage_1">ImageMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemaimagemessage_1"></a>
<a id="schema_ImageMessage_1"></a>
<a id="tocSimagemessage_1"></a>
<a id="tocsimagemessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "image",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
  "timestamp": "1744344496",
  "image": {
    "caption": "Taj Mahal",
    "mime_type": "image/jpeg",
    "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
    "id": "1003383421387256"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|image|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|image|

<h2 id="tocS_StickerMessage_1">StickerMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemastickermessage_1"></a>
<a id="schema_StickerMessage_1"></a>
<a id="tocSstickermessage_1"></a>
<a id="tocsstickermessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "sticker",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "sticker": {
    "mime_type": "image/jpeg",
    "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
    "id": "1003383421387256",
    "animated": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|sticker|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|sticker|

<h2 id="tocS_VideoMessage_1">VideoMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemavideomessage_1"></a>
<a id="schema_VideoMessage_1"></a>
<a id="tocSvideomessage_1"></a>
<a id="tocsvideomessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "video",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "video": {
    "mime_type": "image/jpeg",
    "sha256": "SfInY0gGKTsJlUWbwxC1k+FAD0FZHvzwfpvO0zX0GUI=",
    "id": "1003383421387256",
    "caption": "My vacation video"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|video|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|video|

<h2 id="tocS_LocationMessage_1">LocationMessage_1</h2>
<!-- backwards compatibility -->
<a id="schemalocationmessage_1"></a>
<a id="schema_LocationMessage_1"></a>
<a id="tocSlocationmessage_1"></a>
<a id="tocslocationmessage_1"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "location",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTU2MjZEMDBGRkE3MENEMDE0RQA=",
  "timestamp": "1744344496",
  "location": {
    "address": "101 Forest Ave, Palo Alto, CA 94301",
    "latitude": 37.44221496582,
    "longitude": -122.16165924072,
    "name": "Philz Coffee",
    "url": "https://philzcoffee.com/"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|location|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|location|

<h2 id="tocS_ContactSharingMessage">ContactSharingMessage</h2>
<!-- backwards compatibility -->
<a id="schemacontactsharingmessage"></a>
<a id="schema_ContactSharingMessage"></a>
<a id="tocScontactsharingmessage"></a>
<a id="tocscontactsharingmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "contacts",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
  "timestamp": "1744344496",
  "contacts": [
    {
      "name": {
        "first_name": "Lucía",
        "last_name": "Gómez",
        "formatted_name": "Lucía Gómez"
      },
      "org": {
        "company": "Google"
      },
      "phones": [
        {
          "phone": "+1 (983) 555-2319",
          "wa_id": "19835552319",
          "type": "MOBILE"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|contacts|[[ContactObject](#schemacontactobject)]|true|none|Array of contact objects. Many contact object properties may be omitted if the WhatsApp user chooses not to share them, or their device prevents them from being shared.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|contacts|

<h2 id="tocS_ContactObject_1">ContactObject_1</h2>
<!-- backwards compatibility -->
<a id="schemacontactobject_1"></a>
<a id="schema_ContactObject_1"></a>
<a id="tocScontactobject_1"></a>
<a id="tocscontactobject_1"></a>

```json
{
  "addresses": [
    {
      "city": "Menlo Park",
      "country": "United States",
      "country_code": "US",
      "state": "CA",
      "street": "1 Hacker Way",
      "type": "Home",
      "zip": "94025"
    }
  ],
  "birthday": "1999-01-23",
  "emails": [
    {
      "email": "foo@gmail.com",
      "type": "Personal"
    }
  ],
  "name": {
    "formatted_name": "Barbara J. Johnson",
    "first_name": "Barbara",
    "last_name": "Johnson",
    "middle_name": "Joana",
    "suffix": "Esq.",
    "prefix": "Dr."
  },
  "org": {
    "company": "Meta Inc",
    "department": "Engineering",
    "title": "Software Engineer"
  },
  "phones": [
    {
      "phone": "+14125550829",
      "wa_id": "14125550829",
      "type": "CELL"
    }
  ],
  "urls": [
    {
      "url": "meta.com",
      "type": "Company"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[object]|false|none|none|
|birthday|string(date)|false|none|Contact birthday (YYYY-MM-DD).|
|emails|[object]|false|none|none|
|name|object|false|none|none|
|org|object|false|none|none|
|phones|[object]|false|none|none|
|urls|[object]|false|none|none|

<h2 id="tocS_UnsupportedMessage">UnsupportedMessage</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedmessage"></a>
<a id="schema_UnsupportedMessage"></a>
<a id="tocSunsupportedmessage"></a>
<a id="tocsunsupportedmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "unsupported",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTQyMDU1NTA3NDkVAgASGBI5N0MwRjg0RTVBNUI1RDA2OTkA",
  "timestamp": "1750090702",
  "errors": [
    {
      "code": 131051,
      "title": "Message type unknown",
      "message": "Message type unknown",
      "error_data": {
        "details": "Message type is currently not supported."
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|errors|[[ErrorObject](#schemaerrorobject)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|unsupported|
|type|unknown|

<h2 id="tocS_ErrorObject_2">ErrorObject_2</h2>
<!-- backwards compatibility -->
<a id="schemaerrorobject_2"></a>
<a id="schema_ErrorObject_2"></a>
<a id="tocSerrorobject_2"></a>
<a id="tocserrorobject_2"></a>

```json
{
  "code": 131051,
  "title": "Message type unknown",
  "message": "Message type unknown",
  "error_data": {
    "details": "Message type is currently not supported."
  },
  "href": "https://developers.facebook.com/docs/business-messaging/whatsapp/support/error-codes/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|Error code.|
|title|string|true|none|Error code title.|
|message|string|true|none|Error code message.|
|error_data|object|true|none|none|
|href|string(uri)|false|none|Link to error code documentation.|

<h2 id="tocS_ButtonMessage">ButtonMessage</h2>
<!-- backwards compatibility -->
<a id="schemabuttonmessage"></a>
<a id="schema_ButtonMessage"></a>
<a id="tocSbuttonmessage"></a>
<a id="tocsbuttonmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "button",
  "context": {
    "from": "15550783881",
    "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJFNjk2OTMwNEZCQjhGMzUyQUYA"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUU0M0MxQzQzMUJCMTMwNUZFOQA=",
  "timestamp": "1750091045",
  "button": {
    "payload": "Unsubscribe",
    "text": "Unsubscribe"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|true|none|Context information for replying to a message|
|type|string|true|none|none|
|context|object|true|none|none|
|button|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|button|

<h2 id="tocS_InteractiveMessageReply">InteractiveMessageReply</h2>
<!-- backwards compatibility -->
<a id="schemainteractivemessagereply"></a>
<a id="schema_InteractiveMessageReply"></a>
<a id="tocSinteractivemessagereply"></a>
<a id="tocsinteractivemessagereply"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "interactive",
  "context": {
    "from": "15550783881",
    "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJGMzEyNzhENTZDMzNGODlDRDgA"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUJDQ0NDM0FEODY4ODkzOTc5RgA=",
  "timestamp": "1749854575",
  "interactive": {
    "type": "list_reply",
    "list_reply": {
      "id": "priority_express",
      "title": "Priority Mail Express",
      "description": "Next Day to 2 Days"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|true|none|Context information for replying to a message|
|type|string|true|none|none|
|context|object|true|none|none|
|interactive|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|interactive|

<h2 id="tocS_InteractiveListReplyContent">InteractiveListReplyContent</h2>
<!-- backwards compatibility -->
<a id="schemainteractivelistreplycontent"></a>
<a id="schema_InteractiveListReplyContent"></a>
<a id="tocSinteractivelistreplycontent"></a>
<a id="tocsinteractivelistreplycontent"></a>

```json
{
  "list_reply": {
    "id": "priority_express",
    "title": "Priority Mail Express",
    "description": "Next Day to 2 Days"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list_reply|object|true|none|none|

<h2 id="tocS_InteractiveButtonReplyContent">InteractiveButtonReplyContent</h2>
<!-- backwards compatibility -->
<a id="schemainteractivebuttonreplycontent"></a>
<a id="schema_InteractiveButtonReplyContent"></a>
<a id="tocSinteractivebuttonreplycontent"></a>
<a id="tocsinteractivebuttonreplycontent"></a>

```json
{
  "button_reply": {
    "id": "cancel-button",
    "title": "Cancel"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|button_reply|object|true|none|none|

<h2 id="tocS_OrderMessage">OrderMessage</h2>
<!-- backwards compatibility -->
<a id="schemaordermessage"></a>
<a id="schema_OrderMessage"></a>
<a id="tocSordermessage"></a>
<a id="tocsordermessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "order",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTEyQjFGNzI1QTQxMjI5QTMyOQA=",
  "timestamp": "1750096325",
  "order": {
    "catalog_id": "194836987003835",
    "text": "",
    "product_items": [
      {
        "product_retailer_id": "di9ozbzfi4",
        "quantity": 2,
        "item_price": 30,
        "currency": "USD"
      },
      {
        "product_retailer_id": "nqryix03ez",
        "quantity": 1,
        "item_price": 25,
        "currency": "USD"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|order|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|order|

<h2 id="tocS_SystemMessage">SystemMessage</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessage"></a>
<a id="schema_SystemMessage"></a>
<a id="tocSsystemmessage"></a>
<a id="tocssystemmessage"></a>

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "19505550005",
  "type": "system",
  "context": {
    "message_id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
  },
  "from": "16505551234",
  "id": "wamid.HBgLMTk4MzU1NTE5NzQVAgASGAoxMTgyMDg2MjY3AA==",
  "timestamp": "1750269342",
  "system": {
    "body": "User Sheena Nelson changed from 16505551234 to 12195555358",
    "wa_id": "12195555358",
    "type": "user_changed_number"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messaging_product|string|true|none|none|
|recipient_type|string|true|none|The type of recipient.|
|to|string|true|none|The recipient's phone number for individual messages, and group-id for group message.|
|type|string|true|none|The type of message|
|context|[MessageContext](#schemamessagecontext)|false|none|Context information for replying to a message|
|type|string|true|none|none|
|system|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|system|
