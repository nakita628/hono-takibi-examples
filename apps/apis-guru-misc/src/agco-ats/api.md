<h1 id="agco-api">AGCO API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://secure.agco-ats.com">https://secure.agco-ats.com</a>

<h1 id="agco-api-aftermarketservices">AftermarketServices</h1>

## No Documentation Found.

<a id="opIdAftermarketServices_GetCerts"></a>

> Code samples

```bash
curl https://example.com/api/v2/AftermarketServices/Certificates \
  -H 'Accept: application/json'
```

`GET /api/v2/AftermarketServices/Certificates`

No Documentation Found.

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="no-documentation-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Activate or Deactivate an ECU, or Report an ECU as Damaged.

<a id="opIdAftermarketServices_PutECU"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/AftermarketServices/ECUs/string?EDTInstanceId=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActivationCode": "string",
    "DamagedDescription": "string",
    "EngineSerialNumber": "string",
    "ReplacesECUSerialNumber": "string",
    "SerialNumber": "string",
    "State": "Active"
  }'
```

`PUT /api/v2/AftermarketServices/ECUs/{serialNumber}`

No Documentation Found.

> Body parameter

```json
{
  "ActivationCode": "string",
  "DamagedDescription": "string",
  "EngineSerialNumber": "string",
  "ReplacesECUSerialNumber": "string",
  "SerialNumber": "string",
  "State": "Active"
}
```

<h3 id="activate-or-deactivate-an-ecu-or-report-an-ecu-as-damaged-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serialNumber|path|string|true|The serial number of the ECU.|
|EDTInstanceId|query|string|true|The EDT Instance Id of the kit calling this method.|
|body|body|[AGCOPowerServices.Models.ECU](#schemaagcopowerservices.models.ecu)|true|The ecu to modify.|
|» ActivationCode|body|string(byte)|false|The code used to activate the ECU. May not be modified. Returned only on activation.|
|» DamagedDescription|body|string|false|A description why the ECU cannot be deactivated.|
|» EngineSerialNumber|body|string|true|The serial number of the ECU’s engine|
|» ReplacesECUSerialNumber|body|string|false|The serial number of the ECU that this ECU replaces. Required if activating an ECU..|
|» SerialNumber|body|string|true|The serial number of the ECU|
|» State|body|string|true|The state of the ECU|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Active|
|» State|Inactive|
|» State|Damaged|

> Example responses

> 200 Response

```json
{
  "ActivationCode": "string",
  "DamagedDescription": "string",
  "EngineSerialNumber": "string",
  "ReplacesECUSerialNumber": "string",
  "SerialNumber": "string",
  "State": "Active"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="activate-or-deactivate-an-ecu-or-report-an-ecu-as-damaged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AGCOPowerServices.Models.ECU](#schemaagcopowerservices.models.ecu)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get injector codes given engine.

<a id="opIdAftermarketServices_GetEngineIQACodes"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/AftermarketServices/Engines/string/IQACodes?EDTInstanceId=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes`

No Documentation Found.

<h3 id="get-injector-codes-given-engine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serialNumber|path|string|true|The serial number of the engine.|
|EDTInstanceId|query|string|true|The EDT Instance Id of the kit calling this method.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-injector-codes-given-engine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="get-injector-codes-given-engine-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Report the IQA codes used by an engine

<a id="opIdAftermarketServices_PutIQACodes"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/AftermarketServices/Engines/string/IQACodes?EDTInstanceId=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "string"
  ]'
```

`PUT /api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes`

No Documentation Found.

> Body parameter

```json
[
  "string"
]
```

<h3 id="report-the-iqa-codes-used-by-an-engine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serialNumber|path|string|true|The serial number of the Engine|
|EDTInstanceId|query|string|true|The EDT Instance Id of the kit calling this method.|
|body|body|[string]|true|A string array of IQA codes in physical order|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="report-the-iqa-codes-used-by-an-engine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get production calibration data for given engine.

<a id="opIdAftermarketServices_GetProductionData"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/AftermarketServices/Engines/string/ProductionData?EDTInstanceId=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData`

No Documentation Found.

<h3 id="get-production-calibration-data-for-given-engine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serialNumber|path|string|true|The serial number of the engine.|
|EDTInstanceId|query|string|true|The EDT Instance Id of the kit calling this method.|

> Example responses

> 200 Response

```json
[
  {
    "DataType": "string",
    "DataValues": "string"
  }
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-production-calibration-data-for-given-engine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="get-production-calibration-data-for-given-engine-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AGCOPowerServices.Models.ProductionData](#schemaagcopowerservices.models.productiondata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check whether there is connectivity to AGCO Power Web Services

<a id="opIdAftermarketServices_GetConnectionStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/AftermarketServices/Hello \
  -H 'Accept: application/json'
```

`GET /api/v2/AftermarketServices/Hello`

No Documentation Found.

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="check-whether-there-is-connectivity-to-agco-power-web-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the status of an EDT Kit Registration with AGCO Power Web Services

<a id="opIdAftermarketServices_GetUserStatus"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/AftermarketServices/UserStatuses?voucherCode=string&dealerCode=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/AftermarketServices/UserStatuses`

No Documentation Found.

<h3 id="retrieve-the-status-of-an-edt-kit-registration-with-agco-power-web-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voucherCode|query|string|true|none|
|dealerCode|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "DealerCode": "string",
  "State": "Active",
  "VoucherCode": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="retrieve-the-status-of-an-edt-kit-registration-with-agco-power-web-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AGCOPowerServices.Models.UserStatus](#schemaagcopowerservices.models.userstatus)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the status of an EDT Kit Registration with AGCO Power Web Services

<a id="opIdAftermarketServices_UpdateUserStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/AftermarketServices/UserStatuses \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "DealerCode": "string",
    "State": "Active",
    "VoucherCode": "string"
  }'
```

`PUT /api/v2/AftermarketServices/UserStatuses`

No Documentation Found.

> Body parameter

```json
{
  "DealerCode": "string",
  "State": "Active",
  "VoucherCode": "string"
}
```

<h3 id="update-the-status-of-an-edt-kit-registration-with-agco-power-web-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AGCOPowerServices.Models.UserStatus](#schemaagcopowerservices.models.userstatus)|true|none|
|» DealerCode|body|string|true|The dealer code of the voucher|
|» State|body|string|false|The state of the voucher|
|» VoucherCode|body|string|true|The voucher code|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Active|
|» State|Inactive|
|» State|None|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="update-the-status-of-an-edt-kit-registration-with-agco-power-web-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-authentication">Authentication</h1>

## Manage API tokens.

<a id="opIdAuthentication_PutManageTokens"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthenticatedUsers/0/Tokens \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "BearerAction": "None",
    "MACAction": "None"
  }'
```

`PUT /api/v2/AuthenticatedUsers/{UserID}/Tokens`

No Documentation Found.

> Body parameter

```json
{
  "BearerAction": "None",
  "MACAction": "None"
}
```

<h3 id="manage-api-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserID|path|integer(int32)|true|none|
|body|body|[API.Models.TokenOptions](#schemaapi.models.tokenoptions)|true|The options for token management.|
|» BearerAction|body|string|false|The action to perform on the bearer token. Optional. Defaults to ‘None’.|
|» MACAction|body|string|false|The action to perform on the MAC token. Optional. Defaults to ‘None’.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» BearerAction|None|
|» BearerAction|Reset|
|» BearerAction|Disable|
|» MACAction|None|
|» MACAction|Reset|
|» MACAction|Disable|

<h3 id="manage-api-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Authenticate a user.

<a id="opIdAuthentication_Default"></a>

> Code samples

```bash
curl https://example.com/api/v2/Authentication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "BearerAction": "None",
    "MACAction": "None",
    "password": "string",
    "username": "string"
  }'
```

`POST /api/v2/Authentication`

No Documentation Found.

> Body parameter

```json
{
  "BearerAction": "None",
  "MACAction": "None",
  "password": "string",
  "username": "string"
}
```

<h3 id="authenticate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.Credentials](#schemaapi.models.credentials)|true|Create a user account.|
|» BearerAction|body|string|false|The action to perform on the bearer token. Optional. Defaults to ‘None’.|
|» MACAction|body|string|false|The action to perform on the MAC token. Optional. Defaults to ‘None’.|
|» password|body|string|true|A secret word or phrase that must be used to gain admission|
|» username|body|string|true|A unique ID a user needs to login with|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» BearerAction|None|
|» BearerAction|Reset|
|» BearerAction|Disable|
|» MACAction|None|
|» MACAction|Reset|
|» MACAction|Disable|

> Example responses

> 200 Response

```json
{
  "Email": "string",
  "MACId": "string",
  "MACToken": "string",
  "Name": "string",
  "Token": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="authenticate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.AuthenticatedUser](#schemaapi.models.authenticateduser)|

<aside class="success">
This operation does not require authentication
</aside>

## Acknowledges the connection to the API

<a id="opIdAuthentication_IsAlive"></a>

> Code samples

```bash
curl https://example.com/api/v2/Authentication/IsAlive
```

`GET /api/v2/Authentication/IsAlive`

No Documentation Found.

<h3 id="acknowledges-the-connection-to-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Request a password reset.

<a id="opIdAuthentication_RequestPasswordReset"></a>

> Code samples

```bash
curl https://example.com/api/v2/Authentication/RequestPasswordReset \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ParameterName": "string",
    "Url": "string",
    "Username": "string"
  }'
```

`POST /api/v2/Authentication/RequestPasswordReset`

No Documentation Found.

> Body parameter

```json
{
  "ParameterName": "string",
  "Url": "string",
  "Username": "string"
}
```

<h3 id="request-a-password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.PasswordResetRequest](#schemaapi.models.passwordresetrequest)|true|The password reset request.|
|» ParameterName|body|string|true|The query string parameter name to use for supplying the password reset token|
|» Url|body|string|true|The URL to direct the user to reset the password.|
|» Username|body|string|true|The username to reset the password for|

<h3 id="request-a-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset a password

<a id="opIdAuthentication_ResetPasword"></a>

> Code samples

```bash
curl https://example.com/api/v2/Authentication/ResetPasword \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "NewPassword": "string",
    "Token": "string"
  }'
```

`POST /api/v2/Authentication/ResetPasword`

No Documentation Found.

> Body parameter

```json
{
  "NewPassword": "string",
  "Token": "string"
}
```

<h3 id="reset-a-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.PasswordReset](#schemaapi.models.passwordreset)|true|The password reset detail.|
|» NewPassword|body|string|true|The new password|
|» Token|body|string|true|The password reset token|

<h3 id="reset-a-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-authorizationcategories">AuthorizationCategories</h1>

## Get authorization categories.

<a id="opIdAuthorizationCategories_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCategories`

No Documentation Found.

<h3 id="get-authorization-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|userID|query|integer(int32)|false|Optional. Filter by categories visible to the provided user with the provided userID.|
|definitionID|query|string|false|Optional. Filter by categories containing a definition with the provided ID.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "ID": "string",
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-authorization-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_AuthorizationCodes.Shared.Models.Category_](#schemaapi.ipagedresponse_authorizationcodes.shared.models.category_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an authorization category.

<a id="opIdAuthorizationCategories_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Description": "string",
    "ID": "string",
    "Name": "string"
  }'
```

`POST /api/v2/AuthorizationCategories`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "ID": "string",
  "Name": "string"
}
```

<h3 id="add-an-authorization-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorizationCodes.Shared.Models.Category](#schemaauthorizationcodes.shared.models.category)|true|An authorization category.|
|» Description|body|string|false|A description of the Category.|
|» ID|body|string|false|The ID of the Category.|
|» Name|body|string|false|The Name of the Category.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-an-authorization-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a report of access that users have to Authorization Categories.

<a id="opIdAuthorizationCategories_GetUsers"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories/Users \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCategories/Users`

No Documentation Found.

<h3 id="returns-a-report-of-access-that-users-have-to-authorization-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. Defaults to 10.|
|offset|query|integer(int32)|false|Optional. Defaults to 0.|
|userIDs|query|string|false|Optional. Includes only users with IDs on the provided comma-separated list.|
|categoryIDs|query|string|false|Optional. Includes only users with categories with IDs on the provided comma-separated list.|
|includeCategories|query|boolean|false|If true, include full Authorization Category detail. Defaults to false.|
|includeUsers|query|boolean|false|If true, include full User detail. Defaults to false.|
|userSearch|query|string|false|Optional. Includes only users with a Name, Username, or Email containing the provided value.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Categories": [
        {
          "Description": "string",
          "ID": "string",
          "Name": "string"
        }
      ],
      "User": {
        "Email": "string",
        "Name": "string",
        "UserID": 0,
        "Username": "string"
      }
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="returns-a-report-of-access-that-users-have-to-authorization-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_AuthorizationCodes.Shared.Models.CategoryUserReport_](#schemaapi.ipagedresponse_authorizationcodes.shared.models.categoryuserreport_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an authorization category.

<a id="opIdAuthorizationCategories_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Description": "string",
    "ID": "string",
    "Name": "string"
  }'
```

`PUT /api/v2/AuthorizationCategories/{id}`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "ID": "string",
  "Name": "string"
}
```

<h3 id="update-an-authorization-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[AuthorizationCodes.Shared.Models.Category](#schemaauthorizationcodes.shared.models.category)|true|An authorization category.|
|» Description|body|string|false|A description of the Category.|
|» ID|body|string|false|The ID of the Category.|
|» Name|body|string|false|The Name of the Category.|

<h3 id="update-an-authorization-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an authorization category.

<a id="opIdAuthorizationCategories_Delete"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories/string \
  -X DELETE
```

`DELETE /api/v2/AuthorizationCategories/{id}`

No Documentation Found.

<h3 id="remove-an-authorization-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the authorization category.|

<h3 id="remove-an-authorization-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a category that a user can see.

<a id="opIdAuthorizationCategories_AddUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories/string/Users/0 \
  -X POST
```

`POST /api/v2/AuthorizationCategories/{id}/Users/{userID}`

No Documentation Found.

<h3 id="add-a-category-that-a-user-can-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|userID|path|integer(int32)|true|none|

<h3 id="add-a-category-that-a-user-can-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a category a user could see.

<a id="opIdAuthorizationCategories_RemoveUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCategories/string/Users/0 \
  -X DELETE
```

`DELETE /api/v2/AuthorizationCategories/{id}/Users/{userID}`

No Documentation Found.

<h3 id="deletes-a-category-a-user-could-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|userID|path|integer(int32)|true|none|

<h3 id="deletes-a-category-a-user-could-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-authorizationcodedefinitions">AuthorizationCodeDefinitions</h1>

## Get authorization code definitions.

<a id="opIdAuthorizationCodeDefinitions_GetAuthorizationCodeDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodeDefinitions`

Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.

<h3 id="get-authorization-code-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|name|query|string|false|Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported.|
|createdByUserID|query|integer(int32)|false|Optional. If specified, filters definitions to those created by the given User ID.|
|deletedByUserID|query|integer(int32)|false|Optional. If specified, filters definitions to those deleted by the given User ID.|
|includeDeleted|query|boolean|false|Optional. Whether to include deleted definitions. 'False' by default.|
|categoryID|query|string|false|Optional. If specified, filters definitions with the designated categoryID.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AuthorizationID": "string",
      "CreatedByUserID": 0,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DataFields": [
        {
          "DigitsPrecision": 0,
          "MaxExponent": 0,
          "MaxValue": 0,
          "MinExponent": 0,
          "MinValue": 0,
          "Name": "string",
          "ScaleFactor": 0,
          "Signed": true,
          "Type": "Boolean"
        }
      ],
      "DeletedByUserID": 0,
      "DeletedDate": "1970-01-01T00:00:00Z",
      "Description": "string",
      "DurationAccuracy": 0,
      "DurationAmount": 0,
      "DurationUnits": "Weeks",
      "HashLength": 0,
      "ID": "string",
      "IsDeleted": true,
      "Name": "string",
      "RandomLength": 0,
      "ValidationFields": [
        {
          "Name": "string",
          "Type": "Boolean"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-authorization-code-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition_](#schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcodedefinition_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an authorization code definition.

<a id="opIdAuthorizationCodeDefinitions_PostAuthorizationCodeDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "AuthorizationID": "string",
    "CreatedByUserID": 0,
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DataFields": [
      {
        "DigitsPrecision": 0,
        "MaxExponent": 0,
        "MaxValue": 0,
        "MinExponent": 0,
        "MinValue": 0,
        "Name": "string",
        "ScaleFactor": 0,
        "Signed": true,
        "Type": "Boolean"
      }
    ],
    "DeletedByUserID": 0,
    "DeletedDate": "1970-01-01T00:00:00Z",
    "Description": "string",
    "DurationAccuracy": 0,
    "DurationAmount": 0,
    "DurationUnits": "Weeks",
    "HashLength": 0,
    "ID": "string",
    "IsDeleted": true,
    "Name": "string",
    "RandomLength": 0,
    "ValidationFields": [
      {
        "Name": "string",
        "Type": "Boolean"
      }
    ]
  }'
```

`POST /api/v2/AuthorizationCodeDefinitions`

No Documentation Found.

> Body parameter

```json
{
  "AuthorizationID": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataFields": [
    {
      "DigitsPrecision": 0,
      "MaxExponent": 0,
      "MaxValue": 0,
      "MinExponent": 0,
      "MinValue": 0,
      "Name": "string",
      "ScaleFactor": 0,
      "Signed": true,
      "Type": "Boolean"
    }
  ],
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "Description": "string",
  "DurationAccuracy": 0,
  "DurationAmount": 0,
  "DurationUnits": "Weeks",
  "HashLength": 0,
  "ID": "string",
  "IsDeleted": true,
  "Name": "string",
  "RandomLength": 0,
  "ValidationFields": [
    {
      "Name": "string",
      "Type": "Boolean"
    }
  ]
}
```

<h3 id="add-an-authorization-code-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#schemaauthorizationcodes.shared.models.authorizationcodedefinition)|true|An authorization code definition.|
|» AuthorizationID|body|string|false|The value used for securing codes generated.|
|» CreatedByUserID|body|integer(int32)|false|The ID of the user that created this definition. Read only.|
|» CreatedDate|body|string(date-time)|false|A timestamp of when this definition was created. Read only.|
|» DataFields|body|[[AuthorizationCodes.Shared.Models.DataField](#schemaauthorizationcodes.shared.models.datafield)]|false|The defined fields to include in authorization codes generated from this definition. May not be updated.|
|» DeletedByUserID|body|integer(int32)|false|The ID of the user that deleted this definition. Read only.|
|» DeletedDate|body|string(date-time)|false|A timestamp of when this definition was deleted. Read only.|
|» Description|body|string|false|A description of this definition. May not be updated.|
|» DurationAccuracy|body|integer(int32)|false|The number of bits used for timestamp verification. Defaults to 5. May not be updated.|
|» DurationAmount|body|integer(int32)|false|The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.|
|» DurationUnits|body|string|false|The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.|
|» HashLength|body|integer(int32)|false|The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.|
|» ID|body|string|false|The ID of the authorization code definition. Read only.|
|» IsDeleted|body|boolean|false|Indicates whether this definition is enabled. True if generating codes is disabled.|
|» Name|body|string|true|The name of the authorization code definition. May not be updated.|
|» RandomLength|body|integer(int32)|false|The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.|
|» ValidationFields|body|[[AuthorizationCodes.Shared.Models.ValidationField](#schemaauthorizationcodes.shared.models.validationfield)]|false|The defined fields to verify when reading authorization codes generated from this definition. May not be updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DurationUnits|Weeks|
|» DurationUnits|Days|
|» DurationUnits|Hours|
|» DurationUnits|Minutes|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-an-authorization-code-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a category to an authorizationCodeDefintion.

<a id="opIdAuthorizationCodeDefinitions_AddCategoryToDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions/string/Categories/string \
  -X POST
```

`POST /api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}`

No Documentation Found.

<h3 id="add-a-category-to-an-authorizationcodedefintion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|none|
|categoryID|path|string|true|A category ID, as a GUID.|

<h3 id="add-a-category-to-an-authorizationcodedefintion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes the category from the authorization code definition.

<a id="opIdAuthorizationCodeDefinitions_RemoveCategoryFromDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions/string/Categories/string \
  -X DELETE
```

`DELETE /api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}`

No Documentation Found.

<h3 id="deletes-the-category-from-the-authorization-code-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|none|
|categoryID|path|string|true|A category ID, as a GUID.|

<h3 id="deletes-the-category-from-the-authorization-code-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an authorization code definition by its ID

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions/string \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodeDefinitions/{id}`

No Documentation Found.

<h3 id="get-an-authorization-code-definition-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the authorization code definition.|

> Example responses

> 200 Response

```json
{
  "AuthorizationID": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataFields": [
    {
      "DigitsPrecision": 0,
      "MaxExponent": 0,
      "MaxValue": 0,
      "MinExponent": 0,
      "MinValue": 0,
      "Name": "string",
      "ScaleFactor": 0,
      "Signed": true,
      "Type": "Boolean"
    }
  ],
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "Description": "string",
  "DurationAccuracy": 0,
  "DurationAmount": 0,
  "DurationUnits": "Weeks",
  "HashLength": 0,
  "ID": "string",
  "IsDeleted": true,
  "Name": "string",
  "RandomLength": 0,
  "ValidationFields": [
    {
      "Name": "string",
      "Type": "Boolean"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-authorization-code-definition-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#schemaauthorizationcodes.shared.models.authorizationcodedefinition)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an authorization code definition

<a id="opIdAuthorizationCodeDefinitions_PutAuthorizationCodeDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "AuthorizationID": "string",
    "CreatedByUserID": 0,
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DataFields": [
      {
        "DigitsPrecision": 0,
        "MaxExponent": 0,
        "MaxValue": 0,
        "MinExponent": 0,
        "MinValue": 0,
        "Name": "string",
        "ScaleFactor": 0,
        "Signed": true,
        "Type": "Boolean"
      }
    ],
    "DeletedByUserID": 0,
    "DeletedDate": "1970-01-01T00:00:00Z",
    "Description": "string",
    "DurationAccuracy": 0,
    "DurationAmount": 0,
    "DurationUnits": "Weeks",
    "HashLength": 0,
    "ID": "string",
    "IsDeleted": true,
    "Name": "string",
    "RandomLength": 0,
    "ValidationFields": [
      {
        "Name": "string",
        "Type": "Boolean"
      }
    ]
  }'
```

`PUT /api/v2/AuthorizationCodeDefinitions/{id}`

No Documentation Found.

> Body parameter

```json
{
  "AuthorizationID": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataFields": [
    {
      "DigitsPrecision": 0,
      "MaxExponent": 0,
      "MaxValue": 0,
      "MinExponent": 0,
      "MinValue": 0,
      "Name": "string",
      "ScaleFactor": 0,
      "Signed": true,
      "Type": "Boolean"
    }
  ],
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "Description": "string",
  "DurationAccuracy": 0,
  "DurationAmount": 0,
  "DurationUnits": "Weeks",
  "HashLength": 0,
  "ID": "string",
  "IsDeleted": true,
  "Name": "string",
  "RandomLength": 0,
  "ValidationFields": [
    {
      "Name": "string",
      "Type": "Boolean"
    }
  ]
}
```

<h3 id="update-an-authorization-code-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the authorization code definition.|
|body|body|[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#schemaauthorizationcodes.shared.models.authorizationcodedefinition)|true|An authorization code definition.|
|» AuthorizationID|body|string|false|The value used for securing codes generated.|
|» CreatedByUserID|body|integer(int32)|false|The ID of the user that created this definition. Read only.|
|» CreatedDate|body|string(date-time)|false|A timestamp of when this definition was created. Read only.|
|» DataFields|body|[[AuthorizationCodes.Shared.Models.DataField](#schemaauthorizationcodes.shared.models.datafield)]|false|The defined fields to include in authorization codes generated from this definition. May not be updated.|
|» DeletedByUserID|body|integer(int32)|false|The ID of the user that deleted this definition. Read only.|
|» DeletedDate|body|string(date-time)|false|A timestamp of when this definition was deleted. Read only.|
|» Description|body|string|false|A description of this definition. May not be updated.|
|» DurationAccuracy|body|integer(int32)|false|The number of bits used for timestamp verification. Defaults to 5. May not be updated.|
|» DurationAmount|body|integer(int32)|false|The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.|
|» DurationUnits|body|string|false|The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.|
|» HashLength|body|integer(int32)|false|The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.|
|» ID|body|string|false|The ID of the authorization code definition. Read only.|
|» IsDeleted|body|boolean|false|Indicates whether this definition is enabled. True if generating codes is disabled.|
|» Name|body|string|true|The name of the authorization code definition. May not be updated.|
|» RandomLength|body|integer(int32)|false|The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.|
|» ValidationFields|body|[[AuthorizationCodes.Shared.Models.ValidationField](#schemaauthorizationcodes.shared.models.validationfield)]|false|The defined fields to verify when reading authorization codes generated from this definition. May not be updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DurationUnits|Weeks|
|» DurationUnits|Days|
|» DurationUnits|Hours|
|» DurationUnits|Minutes|

<h3 id="update-an-authorization-code-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Disable an authorization code definition

<a id="opIdAuthorizationCodeDefinitions_DeleteAuthorizationCodeDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodeDefinitions/string \
  -X DELETE
```

`DELETE /api/v2/AuthorizationCodeDefinitions/{id}`

No Documentation Found.

<h3 id="disable-an-authorization-code-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the authorization code definition.|

<h3 id="disable-an-authorization-code-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-authorizationcodes">AuthorizationCodes</h1>

## Get authorization codes.

<a id="opIdAuthorizationCodes_GetAuthorizationCodes"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodes`

Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.

<h3 id="get-authorization-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|false|Optional. If provided, searches for entities with the provided authorization code.|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|definitionID|query|string|false|Optional. If specified, filters codes by definition id.|
|createdByUserID|query|integer(int32)|false|Optional. If specified, filters codes to those created by the given User ID.|
|deletedByUserID|query|integer(int32)|false|Optional. If specified, filters codes to those deleted by the given User ID.|
|includeDeleted|query|boolean|false|Optional. Whether to include deleted codes. 'False' by default.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Code": "string",
      "CreatedByUserID": 0,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DataParameters": [
        {
          "Name": "string",
          "Value": "string"
        }
      ],
      "DefinitionID": "string",
      "DeletedByUserID": 0,
      "DeletedDate": "1970-01-01T00:00:00Z",
      "EffectiveDate": "1970-01-01T00:00:00Z",
      "ID": 0,
      "IsDeleted": true,
      "ValidationParameters": [
        {
          "Name": "string",
          "Value": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-authorization-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCode_](#schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcode_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Generates an authorization code using the provided definition and parameters.

<a id="opIdAuthorizationCodes_PostAuthorizationCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Code": "string",
    "CreatedByUserID": 0,
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DataParameters": [
      {
        "Name": "string",
        "Value": "string"
      }
    ],
    "DefinitionID": "string",
    "DeletedByUserID": 0,
    "DeletedDate": "1970-01-01T00:00:00Z",
    "EffectiveDate": "1970-01-01T00:00:00Z",
    "ID": 0,
    "IsDeleted": true,
    "ValidationParameters": [
      {
        "Name": "string",
        "Value": "string"
      }
    ]
  }'
```

`POST /api/v2/AuthorizationCodes`

No Documentation Found.

> Body parameter

```json
{
  "Code": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ],
  "DefinitionID": "string",
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "EffectiveDate": "1970-01-01T00:00:00Z",
  "ID": 0,
  "IsDeleted": true,
  "ValidationParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ]
}
```

<h3 id="generates-an-authorization-code-using-the-provided-definition-and-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorizationCodes.Shared.Models.AuthorizationCode](#schemaauthorizationcodes.shared.models.authorizationcode)|true|The model from which to generate an authorization code.|
|» Code|body|string|false|The code to enter to unlock a feature. Read only.|
|» CreatedByUserID|body|integer(int32)|false|The ID of the user that created this authorization code. Read only.|
|» CreatedDate|body|string(date-time)|false|A timestamp of when this code was created. Read only.|
|» DataParameters|body|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|The parameters and values contained as data in this authorization code. May not be updated.|
|» DefinitionID|body|string|false|The id of the definition for this authorization code. May not be updated.|
|» DeletedByUserID|body|integer(int32)|false|The ID of the user that deleted this authorization code. Read only.|
|» DeletedDate|body|string(date-time)|false|A timestamp of when this authorization code was deleted. Read only.|
|» EffectiveDate|body|string(date-time)|false|A date at which this code should begin being valid. Optional. Set on create only.|
|» ID|body|integer(int32)|false|The identifier for the authorization code. Read only.|
|» IsDeleted|body|boolean|false|Indicates whether this code is deleted.|
|» ValidationParameters|body|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|The parameters and values used to validate this authorization code. May not be updated.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="generates-an-authorization-code-using-the-provided-definition-and-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an authorization code by its ID.

<a id="opIdAuthorizationCodes_GetAuthorizationCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodes/{id}`

No Documentation Found.

<h3 id="get-an-authorization-code-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the authorization code.|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ],
  "DefinitionID": "string",
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "EffectiveDate": "1970-01-01T00:00:00Z",
  "ID": 0,
  "IsDeleted": true,
  "ValidationParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-authorization-code-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthorizationCodes.Shared.Models.AuthorizationCode](#schemaauthorizationcodes.shared.models.authorizationcode)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an authorization code.

<a id="opIdAuthorizationCodes_PutAuthorizationCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Code": "string",
    "CreatedByUserID": 0,
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DataParameters": [
      {
        "Name": "string",
        "Value": "string"
      }
    ],
    "DefinitionID": "string",
    "DeletedByUserID": 0,
    "DeletedDate": "1970-01-01T00:00:00Z",
    "EffectiveDate": "1970-01-01T00:00:00Z",
    "ID": 0,
    "IsDeleted": true,
    "ValidationParameters": [
      {
        "Name": "string",
        "Value": "string"
      }
    ]
  }'
```

`PUT /api/v2/AuthorizationCodes/{id}`

No Documentation Found.

> Body parameter

```json
{
  "Code": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ],
  "DefinitionID": "string",
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "EffectiveDate": "1970-01-01T00:00:00Z",
  "ID": 0,
  "IsDeleted": true,
  "ValidationParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ]
}
```

<h3 id="update-an-authorization-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the authorization code.|
|body|body|[AuthorizationCodes.Shared.Models.AuthorizationCode](#schemaauthorizationcodes.shared.models.authorizationcode)|true|The model from which to update an authorization code.|
|» Code|body|string|false|The code to enter to unlock a feature. Read only.|
|» CreatedByUserID|body|integer(int32)|false|The ID of the user that created this authorization code. Read only.|
|» CreatedDate|body|string(date-time)|false|A timestamp of when this code was created. Read only.|
|» DataParameters|body|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|The parameters and values contained as data in this authorization code. May not be updated.|
|» DefinitionID|body|string|false|The id of the definition for this authorization code. May not be updated.|
|» DeletedByUserID|body|integer(int32)|false|The ID of the user that deleted this authorization code. Read only.|
|» DeletedDate|body|string(date-time)|false|A timestamp of when this authorization code was deleted. Read only.|
|» EffectiveDate|body|string(date-time)|false|A date at which this code should begin being valid. Optional. Set on create only.|
|» ID|body|integer(int32)|false|The identifier for the authorization code. Read only.|
|» IsDeleted|body|boolean|false|Indicates whether this code is deleted.|
|» ValidationParameters|body|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|The parameters and values used to validate this authorization code. May not be updated.|

<h3 id="update-an-authorization-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Hide an authorization code.

<a id="opIdAuthorizationCodes_DeleteAuthorizationCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes/0 \
  -X DELETE
```

`DELETE /api/v2/AuthorizationCodes/{id}`

No Documentation Found.

<h3 id="hide-an-authorization-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the authorization code.|

<h3 id="hide-an-authorization-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get contact information for an authorization code.

<a id="opIdAuthorizationCodes_GetContactInformation"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes/0/ContactInformation \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodes/{id}/ContactInformation`

No Documentation Found.

<h3 id="get-contact-information-for-an-authorization-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the authorization code.|

> Example responses

> 200 Response

```json
{
  "AuthorizationCodeID": 0,
  "Code": "string",
  "Contact": "string",
  "CreatedBy": "string",
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Dealership": "string",
  "DefinitionName": "string",
  "Email": "string",
  "ID": 0,
  "Notes": "string",
  "Phone": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-contact-information-for-an-authorization-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthorizationCodes.Shared.Models.AuthorizationContactInformation](#schemaauthorizationcodes.shared.models.authorizationcontactinformation)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdAuthorizationCodes_ValidateAuthorizationCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationCodes/0/Validate \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationCodes/{id}/Validate`

No Documentation Found.

<h3 id="no-documentation-found-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "IsValid": true
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="no-documentation-found-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthorizationCodes.Shared.Models.CodeValidationModel](#schemaauthorizationcodes.shared.models.codevalidationmodel)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-authorizationcontactinformation">AuthorizationContactInformation</h1>

## Get contact information for authorization codes.

<a id="opIdAuthorizationContactInformation_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationContactInformation \
  -H 'Accept: application/json'
```

`GET /api/v2/AuthorizationContactInformation`

No Documentation Found.

<h3 id="get-contact-information-for-authorization-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|authorizationCode|query|string|false|Optional. Search by authorization code.|
|afterDate|query|string(date-time)|false|Optional. Include only data for authorization codes created after a provided date.|
|beforeDate|query|string(date-time)|false|Optional. Include only data for authorization codes created before a provided date.|
|dealerCode|query|string|false|Optional. Search by dealer code.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AuthorizationCodeID": 0,
      "Code": "string",
      "Contact": "string",
      "CreatedBy": "string",
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Dealership": "string",
      "DefinitionName": "string",
      "Email": "string",
      "ID": 0,
      "Notes": "string",
      "Phone": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-contact-information-for-authorization-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationContactInformation_](#schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcontactinformation_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add contact information for authorization code.

<a id="opIdAuthorizationContactInformation_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/AuthorizationContactInformation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "AuthorizationCodeID": 0,
    "Code": "string",
    "Contact": "string",
    "CreatedBy": "string",
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DealerCode": "string",
    "Dealership": "string",
    "DefinitionName": "string",
    "Email": "string",
    "ID": 0,
    "Notes": "string",
    "Phone": "string"
  }'
```

`POST /api/v2/AuthorizationContactInformation`

No Documentation Found.

> Body parameter

```json
{
  "AuthorizationCodeID": 0,
  "Code": "string",
  "Contact": "string",
  "CreatedBy": "string",
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Dealership": "string",
  "DefinitionName": "string",
  "Email": "string",
  "ID": 0,
  "Notes": "string",
  "Phone": "string"
}
```

<h3 id="add-contact-information-for-authorization-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorizationCodes.Shared.Models.AuthorizationContactInformation](#schemaauthorizationcodes.shared.models.authorizationcontactinformation)|true|A contact information.|
|» AuthorizationCodeID|body|integer(int32)|true|AuthorizationCode ID that the contact information ties into.|
|» Code|body|string|false|The authorization code. Read Only.|
|» Contact|body|string|true|Name of contact requesting an authorization code. Minimum length of 3 characters.|
|» CreatedBy|body|string|false|The name of the user that created this code. Read Only.|
|» CreatedDate|body|string(date-time)|false|The date the authorization code was created.|
|» DealerCode|body|string|true|Dealer code that relates to the dealership. Minimum length of 3 characters.|
|» Dealership|body|string|true|Name of dealership. Minimum length of 3 characters.|
|» DefinitionName|body|string|false|The name of the definition used for generating this authorization code. Read Only.|
|» Email|body|string|false|Email of contact.|
|» ID|body|integer(int32)|false|ID of authorizationContactInformation|
|» Notes|body|string|false|Optional notes used for internal use.|
|» Phone|body|string|true|Phone number of contact.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-contact-information-for-authorization-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-brands">Brands</h1>

## Gets a list of Brands.

<a id="opIdBrands_Brands"></a>

> Code samples

```bash
curl https://example.com/api/v2/Brands \
  -H 'Accept: application/json'
```

`GET /api/v2/Brands`

No Documentation Found.

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-a-list-of-brands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="gets-a-list-of-brands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-bundles">Bundles</h1>

## Get the list of bundles.

<a id="opIdBundles_GetBundles"></a>

> Code samples

```bash
curl https://example.com/api/v2/Bundles \
  -H 'Accept: application/json'
```

`GET /api/v2/Bundles`

No Documentation Found.

<h3 id="get-the-list-of-bundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupID|query|string|false|Optional. Filter by UpdateGroup ID.|
|Active|query|boolean|false|Optional. Filter by active status.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|BundleNumber|query|integer(int32)|false|Optional. If provided, filters by BundleNumber.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "BundleID": "string",
      "BundleNumber": 0,
      "Description": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-list-of-bundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.Bundle_](#schemaapi.pagedresponse_updatesystem.models.bundle_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Bundle to the Update System.

<a id="opIdBundles_PostBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Bundles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Active": true,
    "BundleID": "string",
    "BundleNumber": 0,
    "Description": "string",
    "UpdateGroupID": "string"
  }'
```

`POST /api/v2/Bundles`

No Documentation Found.

> Body parameter

```json
{
  "Active": true,
  "BundleID": "string",
  "BundleNumber": 0,
  "Description": "string",
  "UpdateGroupID": "string"
}
```

<h3 id="add-a-bundle-to-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.Bundle](#schemaupdatesystem.models.bundle)|true|The bundle to add|
|» Active|body|boolean|false|Default Value: false. During the creation of the Bundle, this field must be false.|
|» BundleID|body|string|false|Read-Only.|
|» BundleNumber|body|integer(int32)|true|The bundle number|
|» Description|body|string|true|The Bundle description.|
|» UpdateGroupID|body|string|true|The update group this bundle belongs to.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-bundle-to-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Bundle by ID.

<a id="opIdBundles_GetBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Bundles/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Bundles/{ID}`

No Documentation Found.

<h3 id="get-a-specific-bundle-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Bundle ID|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "BundleID": "string",
  "BundleNumber": 0,
  "Description": "string",
  "UpdateGroupID": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-specific-bundle-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.Bundle](#schemaupdatesystem.models.bundle)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a Bundle in the Update System.

<a id="opIdBundles_PutBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Bundles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Active": true,
    "BundleID": "string",
    "BundleNumber": 0,
    "Description": "string",
    "UpdateGroupID": "string"
  }'
```

`PUT /api/v2/Bundles/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "Active": true,
  "BundleID": "string",
  "BundleNumber": 0,
  "Description": "string",
  "UpdateGroupID": "string"
}
```

<h3 id="modify-a-bundle-in-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The unique ID of the Bundle|
|body|body|[UpdateSystem.Models.Bundle](#schemaupdatesystem.models.bundle)|true|The bundle to modify|
|» Active|body|boolean|false|Default Value: false. During the creation of the Bundle, this field must be false.|
|» BundleID|body|string|false|Read-Only.|
|» BundleNumber|body|integer(int32)|true|The bundle number|
|» Description|body|string|true|The Bundle description.|
|» UpdateGroupID|body|string|true|The update group this bundle belongs to.|

<h3 id="modify-a-bundle-in-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Bundle.

<a id="opIdBundles_DeleteBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Bundles/string \
  -X DELETE
```

`DELETE /api/v2/Bundles/{ID}`

No Documentation Found.

<h3 id="delete-a-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Bundle ID to Delete|

<h3 id="delete-a-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-clients">Clients</h1>

## Get a List of Clients in the Update System.

<a id="opIdClients_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients`

No Documentation Found.

<h3 id="get-a-list-of-clients-in-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Tag|query|string|false|Optional. Filter clients by Tag. Wildcards are supported (*).|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "Tag": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-clients-in-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.Client_](#schemaapi.pagedresponse_updatesystem.models.client_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client in the Update System.

> Code samples

```bash
curl https://example.com/api/v2/Clients/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients/{ID}`

No Documentation Found.

<h3 id="get-a-client-in-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "Tag": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-client-in-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.Client](#schemaupdatesystem.models.client)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Client.

<a id="opIdClients_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ClientID": "string",
    "LastCheckin": "1970-01-01T00:00:00Z",
    "Tag": "string"
  }'
```

`PUT /api/v2/Clients/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "Tag": "string"
}
```

<h3 id="update-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Client ID|
|body|body|[UpdateSystem.Models.Client](#schemaupdatesystem.models.client)|true|Updated Client Object.|
|» ClientID|body|string|false|Read Only. The id of the client|
|» LastCheckin|body|string(date-time)|false|Read Only. The time of the client's last checkin with the server.|
|» Tag|body|string|false|A description of the client that can be used for easy reference|

<h3 id="update-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client's Available Update Group Subscriptions

<a id="opIdClients_GetAvailableSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients/string/AvailableUpdateGroupSubscriptions \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions`

No Documentation Found.

<h3 id="get-a-clients-available-update-group-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Client ID|
|UpdateGroupID|query|string|false|Optional. Filter by Update Group.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AvailableSubscriptions": [
        {
          "PackageType": {
            "Attribute": "string",
            "Category": "string",
            "Description": "string",
            "Icon": "string",
            "InventoryFrequency": 0,
            "InventoryPackage": "string",
            "LocalizedDescription": "string",
            "LocalizedName": "string",
            "MaxDeltaPackages": 0,
            "PackageTypeID": "string"
          },
          "SubscriptionType": "Required"
        }
      ],
      "UpdateGroup": {
        "Description": "string",
        "ID": "string",
        "InventoryFrequency": 0,
        "InventoryPackage": "string",
        "LocalizedDescription": "string",
        "LocalizedName": "string",
        "Priority": 1,
        "ReportField": "string",
        "UpdateType": "string",
        "ValidatingField": "string",
        "ValueToValidate": "string",
        "Version": "string"
      }
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-clients-available-update-group-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.AvailableUpdateGroupSubscription_](#schemaapi.pagedresponse_updatesystem.models.availableupdategroupsubscription_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client's Current Update Group Subscriptions

<a id="opIdClients_GetSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients/string/UpdateGroupSubscriptions \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients/{ID}/UpdateGroupSubscriptions`

No Documentation Found.

<h3 id="get-a-clients-current-update-group-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Client ID|
|UpdateGroupID|query|string|false|Optional. Filter by Update Group.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "Include": true,
      "PackageTypeID": "string",
      "UpdateGroupID": "string",
      "UpdateGroupSubscriptionID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-clients-current-update-group-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroupSubscription_](#schemaapi.pagedresponse_updatesystem.models.updategroupsubscription_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-updatesystem">UpdateSystem</h1>

## Get a list of Cached Files installed on the client Machine.

<a id="opIdUpdateSystem_GetCachedFiles"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Clients/string/CachedFiles?Expired=true' \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients/{ClientID}/CachedFiles`

No Documentation Found.

<h3 id="get-a-list-of-cached-files-installed-on-the-client-machine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|path|string|true|The ClientID of the Client|
|Expired|query|boolean|true|Only Expired Files (true\|false)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-cached-files-installed-on-the-client-machine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="get-a-list-of-cached-files-installed-on-the-client-machine-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Checks the Client ID into the Update System.

<a id="opIdUpdateSystem_GetCheckin"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/UpdateSystem?ClientID=string&Preview=true' \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateSystem`

No Documentation Found.

<h3 id="checks-the-client-id-into-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|true|The Client ID to check-in.  If this is a new client ID it will be added to Clients.|
|Preview|query|boolean|true|Get Pkgs w\o updating Datetimes(true\|false)|
|RunAllInventories|query|boolean|false|Force return inventories. Defaults to false.|

> Example responses

> 200 Response

```json
{
  "Packages": [
    {
      "Autorun": true,
      "CRC": "string",
      "Description": "string",
      "LocalizedName": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "Url": "string",
      "Version": 1
    }
  ],
  "RemovePackages": [
    "string"
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="checks-the-client-id-into-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.CheckinResult](#schemaupdatesystem.models.checkinresult)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-packagereports">PackageReports</h1>

## Get the package reports for a client.

<a id="opIdPackageReports_Default"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients/string/PackageReports \
  -H 'Accept: application/json'
```

`GET /api/v2/Clients/{ClientID}/PackageReports`

No Documentation Found.

<h3 id="get-the-package-reports-for-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|path|string|true|The Client ID|

> Example responses

> 200 Response

```json
[
  {
    "Categories": [
      {
        "Values": [
          {
            "Key": "string",
            "TimeStamp": "1970-01-01T00:00:00Z",
            "Value": "string"
          }
        ],
        "category": "string"
      }
    ],
    "PackageDescription": "string",
    "PackageID": "string"
  }
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-package-reports-for-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="get-the-package-reports-for-a-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateSystem.Models.PackageReport](#schemaupdatesystem.models.packagereport)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a package report

> Code samples

```bash
curl https://example.com/api/v2/Clients/string/PackageReports \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Categories": [
      {
        "Values": [
          {
            "Key": "string",
            "TimeStamp": "1970-01-01T00:00:00Z",
            "Value": "string"
          }
        ],
        "category": "string"
      }
    ],
    "PackageDescription": "string",
    "PackageID": "string"
  }'
```

`PUT /api/v2/Clients/{ClientID}/PackageReports`

No Documentation Found.

> Body parameter

```json
{
  "Categories": [
    {
      "Values": [
        {
          "Key": "string",
          "TimeStamp": "1970-01-01T00:00:00Z",
          "Value": "string"
        }
      ],
      "category": "string"
    }
  ],
  "PackageDescription": "string",
  "PackageID": "string"
}
```

<h3 id="submit-a-package-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|path|string|true|The Client ID|
|body|body|[UpdateSystem.Models.PackageReport](#schemaupdatesystem.models.packagereport)|true|The Package Report|
|» Categories|body|[[UpdateSystem.Models.Category](#schemaupdatesystem.models.category)]|false|The package report's categories.|
|» PackageDescription|body|string|false|Read Only. The package description|
|» PackageID|body|string|false|The PackageID.|

<h3 id="submit-a-package-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a batch of package reports

<a id="opIdPackageReports_Batch"></a>

> Code samples

```bash
curl https://example.com/api/v2/Clients/string/PackageReports/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "Categories": [
        {
          "Values": [
            {
              "Key": "string",
              "TimeStamp": "1970-01-01T00:00:00Z",
              "Value": "string"
            }
          ],
          "category": "string"
        }
      ],
      "PackageDescription": "string",
      "PackageID": "string"
    }
  ]'
```

`PUT /api/v2/Clients/{ClientID}/PackageReports/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "Categories": [
      {
        "Values": [
          {
            "Key": "string",
            "TimeStamp": "1970-01-01T00:00:00Z",
            "Value": "string"
          }
        ],
        "category": "string"
      }
    ],
    "PackageDescription": "string",
    "PackageID": "string"
  }
]
```

<h3 id="submit-a-batch-of-package-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|path|string|true|The Client ID|
|body|body|[[UpdateSystem.Models.PackageReport](#schemaupdatesystem.models.packagereport)]|true|The Package Reports|

<h3 id="submit-a-batch-of-package-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-contentdefinitions">ContentDefinitions</h1>

## No Documentation Found.

<a id="opIdContentDefinitions_PutContentDefinitionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitionAttributes/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ]'
```

`PUT /api/v2/ContentDefinitionAttributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ContentDefinitionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|true|none|

<h3 id="no-documentation-found-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Attribute for a ContentDefinition

<a id="opIdContentDefinitions_PutContentDefinitionAttributeAsync"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitionAttributes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ContentDefinitionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }'
```

`PUT /api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}`

No Documentation Found.

> Body parameter

```json
{
  "ContentDefinitionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

<h3 id="update-an-attribute-for-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionAttributeID|path|integer(int32)|true|The ID of the Attribute to update.|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)|true|The Attribute to update.|
|» ContentDefinitionID|body|integer(int32)|false|The ID of the content definition to which this attribute belongs.|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» Value|body|string|false|The value of this Attribute|

<h3 id="update-an-attribute-for-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an Attribute from a ContentDefinition

<a id="opIdContentDefinitions_DeleteContentDefinitionAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitionAttributes/0 \
  -X DELETE
```

`DELETE /api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}`

No Documentation Found.

<h3 id="remove-an-attribute-from-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionAttributeID|path|integer(int32)|true|The ID of the Attribute to remove.|

<h3 id="remove-an-attribute-from-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get ContentDefinitions

<a id="opIdContentDefinitions_GetContentDefinitions"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentDefinitions`

Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-contentdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|userID|query|integer(int32)|false|Optional. Filter by UserID.|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.|
|name|query|string|false|Optional. Filter by Name. Supports beginning and ending wildcard (*).|
|typeID|query|integer(int32)|false|Optional. Filter by TypeID.|
|packageTypeID|query|string|false|Optional. Filter by PackageTypeID.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ContentDefinitionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "ContentDefinitionID": 0,
      "Description": "string",
      "Name": "string",
      "PackageTypeID": "string",
      "TypeID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-contentdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinition_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinition_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a ContentDefinition

<a id="opIdContentDefinitions_PostContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  }'
```

`POST /api/v2/ContentDefinitions`

Creates a ContentDefinition.  The body of the POST is the ContentDefinition to create.
            The ContentDefinitionID will be assigned on creation of the Job.  When successful, the response
            is the JobID.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "Attributes": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "ContentDefinitionID": 0,
  "Description": "string",
  "Name": "string",
  "PackageTypeID": "string",
  "TypeID": 0
}
```

<h3 id="create-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|true|The ContentDefinition to create.|
|» Attributes|body|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|false|Attributes of this ContentDefinition|
|» ContentDefinitionID|body|integer(int32)|false|The ID of this content definition.|
|» Description|body|string|true|The description used on the package type in the AGCO Update System|
|» Name|body|string|false|The name of this content. Name must be valid for Attribute on PackageType.|
|» PackageTypeID|body|string|false|Read Only. The ID of the package type used for this content.|
|» TypeID|body|integer(int32)|false|The type of content.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a ContentDefinition by ID

<a id="opIdContentDefinitions_GetContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentDefinitions/{contentDefinitionID}`

Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-contentdefinition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|The ID of the ContentDefinition to get.|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this definition. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.|

> Example responses

> 200 Response

```json
{
  "Attributes": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "ContentDefinitionID": 0,
  "Description": "string",
  "Name": "string",
  "PackageTypeID": "string",
  "TypeID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-contentdefinition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a ContentDefinition

<a id="opIdContentDefinitions_PutContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  }'
```

`PUT /api/v2/ContentDefinitions/{contentDefinitionID}`

Updates a ContentDefinition.  The body of the PUT is the updated ContentDefinition.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "Attributes": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "ContentDefinitionID": 0,
  "Description": "string",
  "Name": "string",
  "PackageTypeID": "string",
  "TypeID": 0
}
```

<h3 id="update-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|The ID of the ContentDefinition to update|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|true|The updated ContentDefinition|
|» Attributes|body|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|false|Attributes of this ContentDefinition|
|» ContentDefinitionID|body|integer(int32)|false|The ID of this content definition.|
|» Description|body|string|true|The description used on the package type in the AGCO Update System|
|» Name|body|string|false|The name of this content. Name must be valid for Attribute on PackageType.|
|» PackageTypeID|body|string|false|Read Only. The ID of the package type used for this content.|
|» TypeID|body|integer(int32)|false|The type of content.|

<h3 id="update-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a ContentDefinition

<a id="opIdContentDefinitions_DeleteContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0 \
  -X DELETE
```

`DELETE /api/v2/ContentDefinitions/{contentDefinitionID}`

Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|The ID of the ContentDefinition to delete|

<h3 id="delete-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Attributes for a ContentDefinition

<a id="opIdContentDefinitions_GetContentDefinitionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0/Attributes \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes`

No Documentation Found.

<h3 id="get-attributes-for-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|The ID of the ContentDefinition.|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|name|query|string|false|Optional. Filter the attributes by Name.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-attributes-for-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinitionattribute_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an Attribute to a ContentDefinition

<a id="opIdContentDefinitions_PostContentDefinitionAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0/Attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ContentDefinitionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }'
```

`POST /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes`

No Documentation Found.

> Body parameter

```json
{
  "ContentDefinitionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

<h3 id="add-an-attribute-to-a-contentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|The ID of the ContentDefinition|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)|true|The Attribute to add.|
|» ContentDefinitionID|body|integer(int32)|false|The ID of the content definition to which this attribute belongs.|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» Value|body|string|false|The value of this Attribute|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-an-attribute-to-a-contentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdContentDefinitions_PostContentDefinitionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentDefinitions/0/Attributes/Batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ]'
```

`POST /api/v2/ContentDefinitions/{contentDefinitionID}/Attributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ContentDefinitionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentDefinitionID|path|integer(int32)|true|none|
|body|body|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|true|none|

<h3 id="no-documentation-found-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-contentrelease">ContentRelease</h1>

## Get ContentReleaseVersion

<a id="opIdContentRelease_GetContentReleaseVersion"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentReleases \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentReleases`

Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-contentreleaseversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|deleted|query|boolean|false|Optional. Filter by deleted.|
|releaseID|query|integer(int32)|false|Optional. Filter by releaseID.|
|userId|query|integer(int32)|false|Optional. Filter by UserID.|
|contentDefinitionID|query|integer(int32)|false|Optional. Filter by ContentDefinitionID.|
|version|query|integer(int32)|false|Optional. Filter by Version.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "ContentReleaseID": 0,
      "Deleted": true,
      "PublisherUserID": 0,
      "ReleaseID": 0,
      "TestReportUrl": "string",
      "UpdatedDate": "1970-01-01T00:00:00Z",
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-contentreleaseversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentreleaseversion_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a ContentReleaseVersion

<a id="opIdContentRelease_PostContentRelease"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentReleases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ContentDefinitionID": 0,
    "ContentReleaseID": 0,
    "Deleted": true,
    "PublisherUserID": 0,
    "ReleaseID": 0,
    "TestReportUrl": "string",
    "UpdatedDate": "1970-01-01T00:00:00Z",
    "Version": 0
  }'
```

`POST /api/v2/ContentReleases`

Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
            The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
            is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "ContentDefinitionID": 0,
  "ContentReleaseID": 0,
  "Deleted": true,
  "PublisherUserID": 0,
  "ReleaseID": 0,
  "TestReportUrl": "string",
  "UpdatedDate": "1970-01-01T00:00:00Z",
  "Version": 0
}
```

<h3 id="create-a-contentreleaseversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#schemacontentsubmission.shared.businessentities.contentreleaseversion)|true|The ContentReleaseVersion to create.|
|» ContentDefinitionID|body|integer(int32)|false|ContentDefinitionID|
|» ContentReleaseID|body|integer(int32)|false|ContentReleaseID|
|» Deleted|body|boolean|false|deleted flag|
|» PublisherUserID|body|integer(int32)|false|PublisherUser ID|
|» ReleaseID|body|integer(int32)|false|rele4ase Id|
|» TestReportUrl|body|string|false|The URL at which test reports for this content can be found|
|» UpdatedDate|body|string(date-time)|false|Updated Date|
|» Version|body|integer(int32)|false|version|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-contentreleaseversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Content Release Version by ID

> Code samples

```bash
curl https://example.com/api/v2/ContentReleases/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentReleases/{ContentReleaseId}`

Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-content-release-version-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContentReleaseId|path|integer(int32)|true|The ID of the ContentReleaseVersion to get.|

> Example responses

> 200 Response

```json
{
  "ContentDefinitionID": 0,
  "ContentReleaseID": 0,
  "Deleted": true,
  "PublisherUserID": 0,
  "ReleaseID": 0,
  "TestReportUrl": "string",
  "UpdatedDate": "1970-01-01T00:00:00Z",
  "Version": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-content-release-version-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#schemacontentsubmission.shared.businessentities.contentreleaseversion)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a ContentReleaseVersion

<a id="opIdContentRelease_PutContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentReleases/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ContentDefinitionID": 0,
    "ContentReleaseID": 0,
    "Deleted": true,
    "PublisherUserID": 0,
    "ReleaseID": 0,
    "TestReportUrl": "string",
    "UpdatedDate": "1970-01-01T00:00:00Z",
    "Version": 0
  }'
```

`PUT /api/v2/ContentReleases/{ContentReleaseId}`

Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "ContentDefinitionID": 0,
  "ContentReleaseID": 0,
  "Deleted": true,
  "PublisherUserID": 0,
  "ReleaseID": 0,
  "TestReportUrl": "string",
  "UpdatedDate": "1970-01-01T00:00:00Z",
  "Version": 0
}
```

<h3 id="update-a-contentreleaseversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContentReleaseId|path|integer(int32)|true|The ID of the ContentReleaseVersion to update|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#schemacontentsubmission.shared.businessentities.contentreleaseversion)|true|The updated ContentReleaseVersion|
|» ContentDefinitionID|body|integer(int32)|false|ContentDefinitionID|
|» ContentReleaseID|body|integer(int32)|false|ContentReleaseID|
|» Deleted|body|boolean|false|deleted flag|
|» PublisherUserID|body|integer(int32)|false|PublisherUser ID|
|» ReleaseID|body|integer(int32)|false|rele4ase Id|
|» TestReportUrl|body|string|false|The URL at which test reports for this content can be found|
|» UpdatedDate|body|string(date-time)|false|Updated Date|
|» Version|body|integer(int32)|false|version|

<h3 id="update-a-contentreleaseversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a ContentReleaseVersion

<a id="opIdContentRelease_DeleteContentReleaseVersionn"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentReleases/0 \
  -X DELETE
```

`DELETE /api/v2/ContentReleases/{ContentReleaseId}`

Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-a-contentreleaseversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContentReleaseId|path|integer(int32)|true|The ID of the ContentReleaseVersion to delete|

<h3 id="delete-a-contentreleaseversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-contentsubmissions">ContentSubmissions</h1>

## No Documentation Found.

<a id="opIdContentSubmissions_PutContentSubmissionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionAttributes/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ]'
```

`PUT /api/v2/ContentSubmissionAttributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ContentSubmissionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|true|none|

<h3 id="no-documentation-found-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Attribute for a ContentSubmission

<a id="opIdContentSubmissions_PutContentSubmissionAttributeAsync"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionAttributes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ContentSubmissionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }'
```

`PUT /api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}`

No Documentation Found.

> Body parameter

```json
{
  "ContentSubmissionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

<h3 id="update-an-attribute-for-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionAttributeID|path|integer(int32)|true|The ID of the Attribute to update.|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)|true|The Attribute to update.|
|» ContentSubmissionID|body|integer(int32)|false|The ID of the content submission to which this attribute belongs.|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» Value|body|string|false|The value of this Attribute|

<h3 id="update-an-attribute-for-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an Attribute from a ContentSubmission

<a id="opIdContentSubmissions_DeleteContentSubmissionAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionAttributes/0 \
  -X DELETE
```

`DELETE /api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}`

No Documentation Found.

<h3 id="remove-an-attribute-from-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionAttributeID|path|integer(int32)|true|The ID of the Attribute to remove.|

<h3 id="remove-an-attribute-from-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get ContentSubmissions

<a id="opIdContentSubmissions_GetContentSubmissions"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissions`

Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-contentsubmissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|userID|query|integer(int32)|false|Optional. Filter by UserID.|
|contentDefinitionID|query|integer(int32)|false|Optional. Filter by ContentDefinitionID|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.|
|releaseID|query|integer(int32)|false|Optional. Filter the submissions by whether they are part of the Release with the specified Release ID.|
|typeID|query|integer(int32)|false|Optional. Filter submissions by their ContentDefinition's Type ID.|
|version|query|integer(int32)|false|Optional. Filter submissions by their Version.|
|includeDefinition|query|boolean|false|Optional. If true, includes the ContentDefinition for each submission.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ContentSubmissionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "BuildID": 0,
      "ContentDefinitionID": 0,
      "ContentSubmissionID": 0,
      "Definition": {
        "Attributes": [
          {
            "ContentDefinitionID": 0,
            "ID": 0,
            "Name": "string",
            "Value": "string"
          }
        ],
        "ContentDefinitionID": 0,
        "Description": "string",
        "Name": "string",
        "PackageTypeID": "string",
        "TypeID": 0
      },
      "JobRunID": 0,
      "PackageID": "string",
      "ReleaseNotes": "string",
      "Repository": "string",
      "Revision": 0,
      "SubmissionDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-contentsubmissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmission_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmission_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a ContentSubmission

<a id="opIdContentSubmissions_PostContentSubmission"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Attributes": [
      {
        "ContentSubmissionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "BuildID": 0,
    "ContentDefinitionID": 0,
    "ContentSubmissionID": 0,
    "Definition": {
      "Attributes": [
        {
          "ContentDefinitionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "ContentDefinitionID": 0,
      "Description": "string",
      "Name": "string",
      "PackageTypeID": "string",
      "TypeID": 0
    },
    "JobRunID": 0,
    "PackageID": "string",
    "ReleaseNotes": "string",
    "Repository": "string",
    "Revision": 0,
    "SubmissionDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "Version": 0
  }'
```

`POST /api/v2/ContentSubmissions`

Creates a ContentSubmission.  The body of the POST is the ContentSubmission to create.
            The ContentSubmissionID will be assigned on creation of the Job.  When successful, the response
            is the ContentSubmissionID.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "Attributes": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "BuildID": 0,
  "ContentDefinitionID": 0,
  "ContentSubmissionID": 0,
  "Definition": {
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  },
  "JobRunID": 0,
  "PackageID": "string",
  "ReleaseNotes": "string",
  "Repository": "string",
  "Revision": 0,
  "SubmissionDate": "1970-01-01T00:00:00Z",
  "UserID": 0,
  "Version": 0
}
```

<h3 id="create-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmission](#schemacontentsubmission.shared.businessentities.contentsubmission)|true|The ContentSubmission to create.|
|» Attributes|body|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|false|Attributes of this ContentSubmission|
|» BuildID|body|integer(int32)|false|ReadOnly. The ID of the Azure DevOps Build which will build the content package.|
|» ContentDefinitionID|body|integer(int32)|false|The ID of the Content Definition.|
|» ContentSubmissionID|body|integer(int32)|false|The ID of this Content Submission.|
|» Definition|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|false|The definition of the content for submission|
|» JobRunID|body|integer(int32)|false|ReadOnly. The ID of the JobRun which will build the content package.|
|» PackageID|body|string|false|The ID of package generated by this content submission.|
|» ReleaseNotes|body|string|false|Release Notes for this ContentSubmission|
|» Repository|body|string|false|The SVN repository used as the source of this content submission|
|» Revision|body|integer(int32)|false|The SVN revision used as the source of this content submission.|
|» SubmissionDate|body|string(date-time)|false|Read Only. The UTC date and time the content submission was made.|
|» UserID|body|integer(int32)|false|Read Only. The ID of the user who submitted the content|
|» Version|body|integer(int32)|false|Optional.  The version number assigned to this Content Submission and the resulting Package.<br>            If not provided, version shall be 1 if it is the first content submission for the <br>            ContentDefinitionID otherwise it shall be the highest content submission version for the<br>            specified ContentDefinitionID incremented by 1.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a ContentSubmission by ID

<a id="opIdContentSubmissions_GetContentSubmission"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissions/{contentSubmissionID}`

Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-contentsubmission-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission to get.|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this submission. This should be a comma-separated list.|

> Example responses

> 200 Response

```json
{
  "Attributes": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "BuildID": 0,
  "ContentDefinitionID": 0,
  "ContentSubmissionID": 0,
  "Definition": {
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  },
  "JobRunID": 0,
  "PackageID": "string",
  "ReleaseNotes": "string",
  "Repository": "string",
  "Revision": 0,
  "SubmissionDate": "1970-01-01T00:00:00Z",
  "UserID": 0,
  "Version": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-contentsubmission-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.ContentSubmission](#schemacontentsubmission.shared.businessentities.contentsubmission)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a ContentSubmission

<a id="opIdContentSubmissions_PutContentSubmission"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Attributes": [
      {
        "ContentSubmissionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "BuildID": 0,
    "ContentDefinitionID": 0,
    "ContentSubmissionID": 0,
    "Definition": {
      "Attributes": [
        {
          "ContentDefinitionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "ContentDefinitionID": 0,
      "Description": "string",
      "Name": "string",
      "PackageTypeID": "string",
      "TypeID": 0
    },
    "JobRunID": 0,
    "PackageID": "string",
    "ReleaseNotes": "string",
    "Repository": "string",
    "Revision": 0,
    "SubmissionDate": "1970-01-01T00:00:00Z",
    "UserID": 0,
    "Version": 0
  }'
```

`PUT /api/v2/ContentSubmissions/{contentSubmissionID}`

Updates a ContentSubmission.  The body of the PUT is the updated ContentSubmission.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "Attributes": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "BuildID": 0,
  "ContentDefinitionID": 0,
  "ContentSubmissionID": 0,
  "Definition": {
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  },
  "JobRunID": 0,
  "PackageID": "string",
  "ReleaseNotes": "string",
  "Repository": "string",
  "Revision": 0,
  "SubmissionDate": "1970-01-01T00:00:00Z",
  "UserID": 0,
  "Version": 0
}
```

<h3 id="update-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission to update|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmission](#schemacontentsubmission.shared.businessentities.contentsubmission)|true|The updated ContentSubmission|
|» Attributes|body|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|false|Attributes of this ContentSubmission|
|» BuildID|body|integer(int32)|false|ReadOnly. The ID of the Azure DevOps Build which will build the content package.|
|» ContentDefinitionID|body|integer(int32)|false|The ID of the Content Definition.|
|» ContentSubmissionID|body|integer(int32)|false|The ID of this Content Submission.|
|» Definition|body|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|false|The definition of the content for submission|
|» JobRunID|body|integer(int32)|false|ReadOnly. The ID of the JobRun which will build the content package.|
|» PackageID|body|string|false|The ID of package generated by this content submission.|
|» ReleaseNotes|body|string|false|Release Notes for this ContentSubmission|
|» Repository|body|string|false|The SVN repository used as the source of this content submission|
|» Revision|body|integer(int32)|false|The SVN revision used as the source of this content submission.|
|» SubmissionDate|body|string(date-time)|false|Read Only. The UTC date and time the content submission was made.|
|» UserID|body|integer(int32)|false|Read Only. The ID of the user who submitted the content|
|» Version|body|integer(int32)|false|Optional.  The version number assigned to this Content Submission and the resulting Package.<br>            If not provided, version shall be 1 if it is the first content submission for the <br>            ContentDefinitionID otherwise it shall be the highest content submission version for the<br>            specified ContentDefinitionID incremented by 1.|

<h3 id="update-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a ContentSubmission

<a id="opIdContentSubmissions_DeleteContentSubmission"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0 \
  -X DELETE
```

`DELETE /api/v2/ContentSubmissions/{contentSubmissionID}`

Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission to delete|

<h3 id="delete-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Attributes for a ContentSubmission

<a id="opIdContentSubmissions_GetContentSubmissionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0/Attributes \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes`

No Documentation Found.

<h3 id="get-attributes-for-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission.|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|name|query|string|false|Optional. Filter the attributes by Name.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-attributes-for-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmissionattribute_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an Attribute to a ContentSubmission

<a id="opIdContentSubmissions_PostContentSubmissionAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0/Attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ContentSubmissionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }'
```

`POST /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes`

No Documentation Found.

> Body parameter

```json
{
  "ContentSubmissionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

<h3 id="add-an-attribute-to-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)|true|The Attribute to add.|
|» ContentSubmissionID|body|integer(int32)|false|The ID of the content submission to which this attribute belongs.|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» Value|body|string|false|The value of this Attribute|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-an-attribute-to-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdContentSubmissions_PostContentSubmissionAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0/Attributes/Batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ]'
```

`POST /api/v2/ContentSubmissions/{contentSubmissionID}/Attributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ContentSubmissionID": 0,
    "ID": 0,
    "Name": "string",
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|none|
|body|body|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|true|none|

<h3 id="no-documentation-found-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the status of a ContentSubmission

<a id="opIdContentSubmissions_GetContentSubmissionStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissions/0/Status \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissions/{contentSubmissionID}/Status`

No Documentation Found.

<h3 id="get-the-status-of-a-contentsubmission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentSubmissionID|path|integer(int32)|true|The ID of the ContentSubmission to get.|
|includeActivityRunDetails|query|boolean|false|True to include all status details if JobRun. Defaults to false|

> Example responses

> 200 Response

```json
{
  "ActivityRuns": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-status-of-a-contentsubmission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.Interfaces.IJobRun](#schemabuildsystem.shared.interfaces.ijobrun)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-contentsubmissiontypes">ContentSubmissionTypes</h1>

## Returns available Content Submission Types.

<a id="opIdContentSubmissionTypes_GetContentSubmissionTypes"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionTypes \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissionTypes`

No Documentation Found.

<h3 id="returns-available-content-submission-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enabled|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "AttributeTemplate": "string",
    "BuildDefinitionID": 0,
    "CategoryTemplate": "string",
    "Description": "string",
    "Enabled": true,
    "ID": 0,
    "InventoryPackageID": "string",
    "JobID": 0,
    "Name": "string",
    "ReleaseNotesDescription": "string"
  }
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="returns-available-content-submission-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="returns-available-content-submission-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#schemacontentsubmission.shared.businessentities.contentsubmissiontype)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Content Submission Type

<a id="opIdContentSubmissionTypes_PostContentSubmissionType"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "AttributeTemplate": "string",
    "BuildDefinitionID": 0,
    "CategoryTemplate": "string",
    "Description": "string",
    "Enabled": true,
    "ID": 0,
    "InventoryPackageID": "string",
    "JobID": 0,
    "Name": "string",
    "ReleaseNotesDescription": "string"
  }'
```

`POST /api/v2/ContentSubmissionTypes`

No Documentation Found.

> Body parameter

```json
{
  "AttributeTemplate": "string",
  "BuildDefinitionID": 0,
  "CategoryTemplate": "string",
  "Description": "string",
  "Enabled": true,
  "ID": 0,
  "InventoryPackageID": "string",
  "JobID": 0,
  "Name": "string",
  "ReleaseNotesDescription": "string"
}
```

<h3 id="add-a-content-submission-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#schemacontentsubmission.shared.businessentities.contentsubmissiontype)|true|The Content Submission Type|
|» AttributeTemplate|body|string|false|A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|» BuildDefinitionID|body|integer(int32)|false|The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.|
|» CategoryTemplate|body|string|false|A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|» Description|body|string|true|A description for the Content Submission Type|
|» Enabled|body|boolean|false|Indicates whether this submission type is available to be used|
|» ID|body|integer(int32)|false|The ID of the Content Submission Type|
|» InventoryPackageID|body|string|false|The ID of the Inventory Package from which to read the version of the package installed.|
|» JobID|body|integer(int32)|false|The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.|
|» Name|body|string|true|The Name of the Content Submission Type|
|» ReleaseNotesDescription|body|string|false|A description of how release notes for this Content Submission Type are used|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-content-submission-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a Content Submission Type by its ID.

<a id="opIdContentSubmissionTypes_GetContentSubmissionType"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionTypes/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/ContentSubmissionTypes/{id}`

No Documentation Found.

<h3 id="retrieves-a-content-submission-type-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the Content Submission Type|

> Example responses

> 200 Response

```json
{
  "AttributeTemplate": "string",
  "BuildDefinitionID": 0,
  "CategoryTemplate": "string",
  "Description": "string",
  "Enabled": true,
  "ID": 0,
  "InventoryPackageID": "string",
  "JobID": 0,
  "Name": "string",
  "ReleaseNotesDescription": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="retrieves-a-content-submission-type-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#schemacontentsubmission.shared.businessentities.contentsubmissiontype)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Content Submission Type

<a id="opIdContentSubmissionTypes_PutContentSubmissionType"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionTypes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "AttributeTemplate": "string",
    "BuildDefinitionID": 0,
    "CategoryTemplate": "string",
    "Description": "string",
    "Enabled": true,
    "ID": 0,
    "InventoryPackageID": "string",
    "JobID": 0,
    "Name": "string",
    "ReleaseNotesDescription": "string"
  }'
```

`PUT /api/v2/ContentSubmissionTypes/{id}`

No Documentation Found.

> Body parameter

```json
{
  "AttributeTemplate": "string",
  "BuildDefinitionID": 0,
  "CategoryTemplate": "string",
  "Description": "string",
  "Enabled": true,
  "ID": 0,
  "InventoryPackageID": "string",
  "JobID": 0,
  "Name": "string",
  "ReleaseNotesDescription": "string"
}
```

<h3 id="update-a-content-submission-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the Content Submission Type|
|body|body|[ContentSubmission.Shared.BusinessEntities.ContentSubmissionType](#schemacontentsubmission.shared.businessentities.contentsubmissiontype)|true|The Content Submission Type|
|» AttributeTemplate|body|string|false|A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|» BuildDefinitionID|body|integer(int32)|false|The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.|
|» CategoryTemplate|body|string|false|A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|» Description|body|string|true|A description for the Content Submission Type|
|» Enabled|body|boolean|false|Indicates whether this submission type is available to be used|
|» ID|body|integer(int32)|false|The ID of the Content Submission Type|
|» InventoryPackageID|body|string|false|The ID of the Inventory Package from which to read the version of the package installed.|
|» JobID|body|integer(int32)|false|The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.|
|» Name|body|string|true|The Name of the Content Submission Type|
|» ReleaseNotesDescription|body|string|false|A description of how release notes for this Content Submission Type are used|

<h3 id="update-a-content-submission-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a Content Submission Type

<a id="opIdContentSubmissionTypes_DeleteContentSubmissionType"></a>

> Code samples

```bash
curl https://example.com/api/v2/ContentSubmissionTypes/0 \
  -X DELETE
```

`DELETE /api/v2/ContentSubmissionTypes/{id}`

No Documentation Found.

<h3 id="remove-a-content-submission-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The ID of the Content Submission Type|

<h3 id="remove-a-content-submission-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-dealerbycountry">DealerByCountry</h1>

## Get a total count of dealers per country

<a id="opIdDealerByCountry_GetCountries"></a>

> Code samples

```bash
curl https://example.com/api/v2/DealerByCountry \
  -H 'Accept: application/json'
```

`GET /api/v2/DealerByCountry`

No Documentation Found.

<h3 id="get-a-total-count-of-dealers-per-country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Count": 0,
      "Country": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-total-count-of-dealers-per-country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.DealersPerCountry_](#schemaapi.pagedresponse_dealerdb.models.dealerspercountry_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-dealers">Dealers</h1>

## Get a list of dealers.

<a id="opIdDealers_GetDealers"></a>

> Code samples

```bash
curl https://example.com/api/v2/Dealers \
  -H 'Accept: application/json'
```

`GET /api/v2/Dealers`

No Documentation Found.

<h3 id="get-a-list-of-dealers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Brand|query|string|false|The brand to filter by.|
|ShippingCountry|query|string|false|The country to filter by.|
|DealerName|query|string|false|The partial Dealer Name to filter by. Wildcard supported (*).|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "BillingAddress": "string",
      "BillingAddress2": "string",
      "BillingAddress3": "string",
      "BillingAddress4": "string",
      "BillingCity": "string",
      "BillingCountry": "string",
      "BillingCountryCode": "string",
      "BillingState": "string",
      "BillingZip": "string",
      "Brands": [
        "string"
      ],
      "DealerCode": "string",
      "DealerName": "string",
      "DealerStatus": "string",
      "DealerStatusUpdateDate": "string",
      "Filler": "string",
      "IsValid": true,
      "LanguagePreference": "string",
      "Region1": "string",
      "Region2": "string",
      "RegionMapping": "string",
      "RoleBrand": "string",
      "ShippingAddress2": "string",
      "ShippingAddress3": "string",
      "ShippingAddress4": "string",
      "ShippingCity": "string",
      "ShippingCountry": "string",
      "ShippingState": "string",
      "ShippingStreet": "string",
      "ShippingZip": "string",
      "Telephone": "string",
      "VATCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-dealers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.Dealer_](#schemaapi.pagedresponse_dealerdb.models.dealer_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Lookup a dealer using a dealer code.

<a id="opIdDealers_GetDealerbyDealerCode"></a>

> Code samples

```bash
curl https://example.com/api/v2/Dealers/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Dealers/{DealerCode}`

No Documentation Found.

<h3 id="lookup-a-dealer-using-a-dealer-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DealerCode|path|string|true|The Dealer Code to Search for|

> Example responses

> 200 Response

```json
{
  "BillingAddress": "string",
  "BillingAddress2": "string",
  "BillingAddress3": "string",
  "BillingAddress4": "string",
  "BillingCity": "string",
  "BillingCountry": "string",
  "BillingCountryCode": "string",
  "BillingState": "string",
  "BillingZip": "string",
  "Brands": [
    "string"
  ],
  "DealerCode": "string",
  "DealerName": "string",
  "DealerStatus": "string",
  "DealerStatusUpdateDate": "string",
  "Filler": "string",
  "IsValid": true,
  "LanguagePreference": "string",
  "Region1": "string",
  "Region2": "string",
  "RegionMapping": "string",
  "RoleBrand": "string",
  "ShippingAddress2": "string",
  "ShippingAddress3": "string",
  "ShippingAddress4": "string",
  "ShippingCity": "string",
  "ShippingCountry": "string",
  "ShippingState": "string",
  "ShippingStreet": "string",
  "ShippingZip": "string",
  "Telephone": "string",
  "VATCode": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="lookup-a-dealer-using-a-dealer-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealerDB.Models.Dealer](#schemadealerdb.models.dealer)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-files">Files</h1>

## Get a paged response of file metadata.

<a id="opIdFiles_GetFiles"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files \
  -H 'Accept: application/json'
```

`GET /api/v2/Files`

No Documentation Found.

<h3 id="get-a-paged-response-of-file-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeDeleted|query|boolean|false|Indicates whether to include files marked as removed.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "CRC": "string",
      "ContentType": "string",
      "Description": "string",
      "Id": "string",
      "IsPublic": true,
      "Name": "string",
      "Path": "string",
      "Size": 0,
      "State": "Created"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-file-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.FileDownload_](#schemaapi.ipagedresponse_globalresources.shared.models.filedownload_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create the metadata for a file before uploading. The State of the File should be 'Created'.

<a id="opIdFiles_PostFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CRC": "string",
    "ContentType": "string",
    "Description": "string",
    "Id": "string",
    "IsPublic": true,
    "Name": "string",
    "Path": "string",
    "Size": 0,
    "State": "Created"
  }'
```

`POST /api/v2/Files`

No Documentation Found.

> Body parameter

```json
{
  "CRC": "string",
  "ContentType": "string",
  "Description": "string",
  "Id": "string",
  "IsPublic": true,
  "Name": "string",
  "Path": "string",
  "Size": 0,
  "State": "Created"
}
```

<h3 id="create-the-metadata-for-a-file-before-uploading-the-state-of-the-file-should-be-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalResources.Shared.Models.FileDownload](#schemaglobalresources.shared.models.filedownload)|true|The file's metadata.|
|» CRC|body|string|true|The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.|
|» ContentType|body|string|true|The type of file; sent as the content-type header.|
|» Description|body|string|true|The description of the file.|
|» Id|body|string|false|The Id of the file.|
|» IsPublic|body|boolean|true|Indicates whether this file is available to the public for download.|
|» Name|body|string|true|The name of the file when downloaded.|
|» Path|body|string|true|The Path of the file.|
|» Size|body|integer(int64)|false|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» State|body|string|true|Indicates the state of this file. Must be 'Created' when created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Created|
|» State|Available|
|» State|Removed|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-the-metadata-for-a-file-before-uploading-the-state-of-the-file-should-be-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a file's metadata.

<a id="opIdFiles_GetFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Files/{ID}`

No Documentation Found.

<h3 id="gets-a-files-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "CRC": "string",
  "ContentType": "string",
  "Description": "string",
  "Id": "string",
  "IsPublic": true,
  "Name": "string",
  "Path": "string",
  "Size": 0,
  "State": "Created"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-a-files-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.FileDownload](#schemaglobalresources.shared.models.filedownload)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the metadata for a file. Size may not be modified by the client.

<a id="opIdFiles_PutFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "CRC": "string",
    "ContentType": "string",
    "Description": "string",
    "Id": "string",
    "IsPublic": true,
    "Name": "string",
    "Path": "string",
    "Size": 0,
    "State": "Created"
  }'
```

`PUT /api/v2/Files/{ID}`

Update the metadata for a file. Size may not be modified by the client. 
                Set status to 'Available' to publish a file. The file must be uploaded.
                Set status to 'Created' to reset a file's contents and re-upload. 
                A file may only be 'Removed' by the DELETE method.

> Body parameter

```json
{
  "CRC": "string",
  "ContentType": "string",
  "Description": "string",
  "Id": "string",
  "IsPublic": true,
  "Name": "string",
  "Path": "string",
  "Size": 0,
  "State": "Created"
}
```

<h3 id="update-the-metadata-for-a-file-size-may-not-be-modified-by-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The file's id|
|body|body|[GlobalResources.Shared.Models.FileDownload](#schemaglobalresources.shared.models.filedownload)|true|The file's metadata|
|» CRC|body|string|true|The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.|
|» ContentType|body|string|true|The type of file; sent as the content-type header.|
|» Description|body|string|true|The description of the file.|
|» Id|body|string|false|The Id of the file.|
|» IsPublic|body|boolean|true|Indicates whether this file is available to the public for download.|
|» Name|body|string|true|The name of the file when downloaded.|
|» Path|body|string|true|The Path of the file.|
|» Size|body|integer(int64)|false|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» State|body|string|true|Indicates the state of this file. Must be 'Created' when created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Created|
|» State|Available|
|» State|Removed|

<h3 id="update-the-metadata-for-a-file-size-may-not-be-modified-by-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method

<a id="opIdFiles_DeleteFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files/string \
  -X DELETE
```

`DELETE /api/v2/Files/{ID}`

No Documentation Found.

<h3 id="mark-a-file-as-removed-disables-download-of-the-file-and-hides-metadata-from-get-all-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The file's id.|

<h3 id="mark-a-file-as-removed-disables-download-of-the-file-and-hides-metadata-from-get-all-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download the contents of a file. The current State of the File should be 'Available'.

<a id="opIdFiles_GetFileContents"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files/string/FileContents \
  -H 'Accept: application/json'
```

`GET /api/v2/Files/{ID}/FileContents`

No Documentation Found.

<h3 id="download-the-contents-of-a-file-the-current-state-of-the-file-should-be-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The file's metadata.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="download-the-contents-of-a-file-the-current-state-of-the-file-should-be-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload the contents of a file. The current State of the File should be 'Created'.

<a id="opIdFiles_PutFileContents"></a>

> Code samples

```bash
curl https://example.com/api/v2/Files/string/FileContents \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /api/v2/Files/{ID}/FileContents`

No Documentation Found.

<h3 id="upload-the-contents-of-a-file-the-current-state-of-the-file-should-be-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The file's metadata.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="upload-the-contents-of-a-file-the-current-state-of-the-file-should-be-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-globalimagecategories">GlobalImageCategories</h1>

## Get a paged response of file metadata.

<a id="opIdGlobalImageCategories_GetFiles"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImageCategories \
  -H 'Accept: application/json'
```

`GET /api/v2/GlobalImageCategories`

No Documentation Found.

<h3 id="get-a-paged-response-of-file-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-file-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.GlobalImageCategory_](#schemaapi.ipagedresponse_globalresources.shared.models.globalimagecategory_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create the metadata for a file before uploading. The State should be 'Created'.

<a id="opIdGlobalImageCategories_PostFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImageCategories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Id": "string",
    "Name": "string"
  }'
```

`POST /api/v2/GlobalImageCategories`

No Documentation Found.

> Body parameter

```json
{
  "Id": "string",
  "Name": "string"
}
```

<h3 id="create-the-metadata-for-a-file-before-uploading-the-state-should-be-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)|true|The file's metadata.|
|» Id|body|string|false|The Id of the GlobalImage Categories.|
|» Name|body|string|true|The name of the globalImage Catetory.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-the-metadata-for-a-file-before-uploading-the-state-should-be-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a file's metadata.

<a id="opIdGlobalImageCategories_GetFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImageCategories/string \
  -H 'Accept: application/json'
```

`GET /api/v2/GlobalImageCategories/{ID}`

No Documentation Found.

<h3 id="gets-a-files-metadata-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The file's id.|

> Example responses

> 200 Response

```json
{
  "Id": "string",
  "Name": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-a-files-metadata-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-globalimages">GlobalImages</h1>

## Get a paged response of GlobalImage.

<a id="opIdGlobalImages_GetGlobalImages"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages \
  -H 'Accept: application/json'
```

`GET /api/v2/GlobalImages`

No Documentation Found.

<h3 id="get-a-paged-response-of-globalimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Optional. Searches for matching global images with the matching Category Name, Publisher or Description|
|categoryId|query|string|false|none|
|publisher|query|string|false|none|
|includeDeleted|query|boolean|false|Indicates whether to include GlobalImages marked as removed.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "CRC": "string",
      "Categories": [
        {
          "Id": "string",
          "Name": "string"
        }
      ],
      "Date": "1970-01-01T00:00:00Z",
      "Description": "string",
      "Height": 0,
      "Id": "string",
      "Name": "string",
      "Publisher": "string",
      "Size": 0,
      "State": "Created",
      "ThumbnailCRC": "string",
      "ThumbnailSize": 0,
      "Width": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-globalimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.GlobalImage_](#schemaapi.ipagedresponse_globalresources.shared.models.globalimage_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create the metadata for a GlobalImage before uploading. The State should be 'Created'.

<a id="opIdGlobalImages_PostGlobalImage"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CRC": "string",
    "Categories": [
      {
        "Id": "string",
        "Name": "string"
      }
    ],
    "Date": "1970-01-01T00:00:00Z",
    "Description": "string",
    "Height": 0,
    "Id": "string",
    "Name": "string",
    "Publisher": "string",
    "Size": 0,
    "State": "Created",
    "ThumbnailCRC": "string",
    "ThumbnailSize": 0,
    "Width": 0
  }'
```

`POST /api/v2/GlobalImages`

No Documentation Found.

> Body parameter

```json
{
  "CRC": "string",
  "Categories": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Date": "1970-01-01T00:00:00Z",
  "Description": "string",
  "Height": 0,
  "Id": "string",
  "Name": "string",
  "Publisher": "string",
  "Size": 0,
  "State": "Created",
  "ThumbnailCRC": "string",
  "ThumbnailSize": 0,
  "Width": 0
}
```

<h3 id="create-the-metadata-for-a-globalimage-before-uploading-the-state-should-be-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|overridePublisherOrDate|query|boolean|false|Whether to set the publisher and date to the provided values.|
|body|body|[GlobalResources.Shared.Models.GlobalImage](#schemaglobalresources.shared.models.globalimage)|true|The file's metadata.|
|» CRC|body|string|true|The Hash of the file (SHA256, HEX-encoded).|
|» Categories|body|[[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)]|false|The category of the file.|
|» Date|body|string(date-time)|false|The date of the file.|
|» Description|body|string|true|The description of the file.|
|» Height|body|integer(int32)|true|The height of the file.|
|» Id|body|string|false|The Id of the GlobalImage Metadata.|
|» Name|body|string|true|The name of the file when downloaded.|
|» Publisher|body|string|false|The Publisher of the file.|
|» Size|body|integer(int64)|false|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» State|body|string|true|Indicates the state of this file. Must be 'Created' when created. Read Only.|
|» ThumbnailCRC|body|string|true|The Hash of the thumbnail file (SHA256, HEX-encoded).|
|» ThumbnailSize|body|integer(int64)|false|The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» Width|body|integer(int32)|true|The width of the file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Created|
|» State|Available|
|» State|Removed|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-the-metadata-for-a-globalimage-before-uploading-the-state-should-be-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a GlobalImage's metadata.

<a id="opIdGlobalImages_GetGlobalImage"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages/string \
  -H 'Accept: application/json'
```

`GET /api/v2/GlobalImages/{ID}`

No Documentation Found.

<h3 id="gets-a-globalimages-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The GlobalImage's id.|

> Example responses

> 200 Response

```json
{
  "CRC": "string",
  "Categories": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Date": "1970-01-01T00:00:00Z",
  "Description": "string",
  "Height": 0,
  "Id": "string",
  "Name": "string",
  "Publisher": "string",
  "Size": 0,
  "State": "Created",
  "ThumbnailCRC": "string",
  "ThumbnailSize": 0,
  "Width": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-a-globalimages-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.GlobalImage](#schemaglobalresources.shared.models.globalimage)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the metadata for an image.

<a id="opIdGlobalImages_PutGlobalImage"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "CRC": "string",
    "Categories": [
      {
        "Id": "string",
        "Name": "string"
      }
    ],
    "Date": "1970-01-01T00:00:00Z",
    "Description": "string",
    "Height": 0,
    "Id": "string",
    "Name": "string",
    "Publisher": "string",
    "Size": 0,
    "State": "Created",
    "ThumbnailCRC": "string",
    "ThumbnailSize": 0,
    "Width": 0
  }'
```

`PUT /api/v2/GlobalImages/{ID}`

Update the metadata for an image. Size may not be modified by the client. 
                Set status to 'Available' to publish an image. Both the image and thumbnail must be uploaded.
                Set status to 'Created' to reset an image's contents and re-upload. 
                A file may only be 'Removed' by the DELETE method.

> Body parameter

```json
{
  "CRC": "string",
  "Categories": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Date": "1970-01-01T00:00:00Z",
  "Description": "string",
  "Height": 0,
  "Id": "string",
  "Name": "string",
  "Publisher": "string",
  "Size": 0,
  "State": "Created",
  "ThumbnailCRC": "string",
  "ThumbnailSize": 0,
  "Width": 0
}
```

<h3 id="update-the-metadata-for-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The GlobalImage's id.|
|overridePublisherOrDate|query|boolean|false|Whether to set the publisher and date to the provided values.|
|body|body|[GlobalResources.Shared.Models.GlobalImage](#schemaglobalresources.shared.models.globalimage)|true|The GlobalImage's metadata|
|» CRC|body|string|true|The Hash of the file (SHA256, HEX-encoded).|
|» Categories|body|[[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)]|false|The category of the file.|
|» Date|body|string(date-time)|false|The date of the file.|
|» Description|body|string|true|The description of the file.|
|» Height|body|integer(int32)|true|The height of the file.|
|» Id|body|string|false|The Id of the GlobalImage Metadata.|
|» Name|body|string|true|The name of the file when downloaded.|
|» Publisher|body|string|false|The Publisher of the file.|
|» Size|body|integer(int64)|false|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» State|body|string|true|Indicates the state of this file. Must be 'Created' when created. Read Only.|
|» ThumbnailCRC|body|string|true|The Hash of the thumbnail file (SHA256, HEX-encoded).|
|» ThumbnailSize|body|integer(int64)|false|The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|» Width|body|integer(int32)|true|The width of the file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Created|
|» State|Available|
|» State|Removed|

<h3 id="update-the-metadata-for-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method

<a id="opIdGlobalImages_DeleteFile"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages/string \
  -X DELETE
```

`DELETE /api/v2/GlobalImages/{ID}`

No Documentation Found.

<h3 id="mark-a-file-as-removed-disables-download-of-the-image-and-hides-metadata-from-get-all-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The GlobalImage's id.|

<h3 id="mark-a-file-as-removed-disables-download-of-the-image-and-hides-metadata-from-get-all-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.

<a id="opIdGlobalImages_GetGlobalImageContents"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages/string/ImageContents \
  -H 'Accept: application/json'
```

`GET /api/v2/GlobalImages/{ID}/ImageContents`

No Documentation Found.

<h3 id="download-the-contents-of-a-globalimage-the-current-state-of-the-globalimage-should-be-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The global image metadata id.|
|isFullImage|query|boolean|false|Indicated whether to download the full image or the thumbnail. Defaults to 'true'.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="download-the-contents-of-a-globalimage-the-current-state-of-the-globalimage-should-be-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.

<a id="opIdGlobalImages_PutGlobalImageContents"></a>

> Code samples

```bash
curl https://example.com/api/v2/GlobalImages/string/ImageContents \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /api/v2/GlobalImages/{ID}/ImageContents`

Both the image and thumbnail must be uploaded.
                Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail

<h3 id="upload-the-contents-of-a-globalimage-the-current-state-of-the-file-for-the-globalimage-should-be-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The global image metadata id.|
|isFullImage|query|boolean|false|Indicated whether this is the full image or the thumbnail. Defaults to 'true'.|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="upload-the-contents-of-a-globalimage-the-current-state-of-the-file-for-the-globalimage-should-be-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[System.Object](#schemasystem.object)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-languages">Languages</h1>

## Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.

<a id="opIdLanguages_GetLanguages"></a>

> Code samples

```bash
curl https://example.com/api/v2/Languages \
  -H 'Accept: application/json'
```

`GET /api/v2/Languages`

No Documentation Found.

<h3 id="get-a-list-of-the-languages-for-which-translations-are-supported-returns-a-pagedresponse-of-language-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|limit the number of Language objects returned. Optional (defaults to 10).|
|offset|query|integer(int32)|false|the number of Language objects to skip. Optional (defaults to 0).|
|includeDeleted|query|boolean|false|whether to include languages marked as deleted. Defaults to false|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "IsDeleted": true,
      "LocaleId": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-the-languages-for-which-translations-are-supported-returns-a-pagedresponse-of-language-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.Language_](#schemaapi.ipagedresponse_globalresources.shared.models.language_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.

<a id="opIdLanguages_CreateLanguage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Languages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Description": "string",
    "IsDeleted": true,
    "LocaleId": 0
  }'
```

`POST /api/v2/Languages`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "IsDeleted": true,
  "LocaleId": 0
}
```

<h3 id="add-a-language-to-support-for-translations-accepts-a-language-object-returns-the-id-of-the-created-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalResources.Shared.Models.Language](#schemaglobalresources.shared.models.language)|true|none|
|» Description|body|string|true|The description of the language (e.g. “English – United States”).|
|» IsDeleted|body|boolean|false|Indicates whether the API supports the language. Must be false when created. Read Only.|
|» LocaleId|body|integer(int32)|true|The Locale Id of the language.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-language-to-support-for-translations-accepts-a-language-object-returns-the-id-of-the-created-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a language by its id. Returns a Language object

<a id="opIdLanguages_GetLanguage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Languages/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/Languages/{LocaleID}`

No Documentation Found.

<h3 id="get-a-language-by-its-id-returns-a-language-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LocaleID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "Description": "string",
  "IsDeleted": true,
  "LocaleId": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-language-by-its-id-returns-a-language-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.Language](#schemaglobalresources.shared.models.language)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a language’s description. Accepts a Language object.

<a id="opIdLanguages_UpdateLanguage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Languages/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Description": "string",
    "IsDeleted": true,
    "LocaleId": 0
  }'
```

`PUT /api/v2/Languages/{LocaleID}`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "IsDeleted": true,
  "LocaleId": 0
}
```

<h3 id="update-a-languages-description-accepts-a-language-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LocaleID|path|integer(int32)|true|none|
|body|body|[GlobalResources.Shared.Models.Language](#schemaglobalresources.shared.models.language)|true|none|
|» Description|body|string|true|The description of the language (e.g. “English – United States”).|
|» IsDeleted|body|boolean|false|Indicates whether the API supports the language. Must be false when created. Read Only.|
|» LocaleId|body|integer(int32)|true|The Locale Id of the language.|

<h3 id="update-a-languages-description-accepts-a-language-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a Language from those supported for translations. Marks language as deleted.

<a id="opIdLanguages_DeleteLanguage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Languages/0 \
  -X DELETE
```

`DELETE /api/v2/Languages/{LocaleID}`

No Documentation Found.

<h3 id="remove-a-language-from-those-supported-for-translations-marks-language-as-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LocaleID|path|integer(int32)|true|none|

<h3 id="remove-a-language-from-those-supported-for-translations-marks-language-as-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-licenseactivations">LicenseActivations</h1>

## Create a license activation.

<a id="opIdLicenseActivations_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/LicenseActivations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "DealerCode": "string",
    "LicenseActivationType": "EDT",
    "PostalCode": "string",
    "SystemInfo": "string",
    "VoucherCode": "string"
  }'
```

`POST /api/v2/LicenseActivations`

No Documentation Found.

> Body parameter

```json
{
  "DealerCode": "string",
  "LicenseActivationType": "EDT",
  "PostalCode": "string",
  "SystemInfo": "string",
  "VoucherCode": "string"
}
```

<h3 id="create-a-license-activation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DealerDB.Models.LicenseActivationCreate](#schemadealerdb.models.licenseactivationcreate)|true|The data required for creating the license.|
|» DealerCode|body|string|true|The Dealer Code of the dealer activating the license|
|» LicenseActivationType|body|string|false|The type of license to create (e.g. EDT, EDT Lite)|
|» PostalCode|body|string|true|The dealer's postal code (zip code)|
|» SystemInfo|body|string|true|Information about  the system being activated|
|» VoucherCode|body|string|true|The Voucher Code to use for activation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LicenseActivationType|EDT|
|» LicenseActivationType|EDTLite|

> Example responses

> 200 Response

```json
{
  "Key": "string",
  "LicenseData": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-license-activation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealerDB.Models.LicenseActivation](#schemadealerdb.models.licenseactivation)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Register an EDT Lite with the Server

<a id="opIdLicenseActivations_PostRegisterEDTLite"></a>

> Code samples

```bash
curl https://example.com/api/v2/LicenseActivations/RegisterEDTLite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "DealerCode": "string",
    "ExpirationDate": "1970-01-01T00:00:00Z",
    "InstanceID": "string",
    "VoucherCode": "string"
  }'
```

`POST /api/v2/LicenseActivations/RegisterEDTLite`

No Documentation Found.

> Body parameter

```json
{
  "DealerCode": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "InstanceID": "string",
  "VoucherCode": "string"
}
```

<h3 id="register-an-edt-lite-with-the-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DealerDB.Models.EDTLiteRegistration](#schemadealerdb.models.edtliteregistration)|true|The information required for registration.|
|» DealerCode|body|string|false|The dealer code with which the EDT Lite was created.|
|» ExpirationDate|body|string(date-time)|true|The date at which the content of the EDT Lite expires.|
|» InstanceID|body|string|true|The identifier for the EDT Lite.|
|» VoucherCode|body|string|true|The voucher code with which the EDT Lite was created.|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="register-an-edt-lite-with-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a license activiation.

<a id="opIdLicenseActivations_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/LicenseActivations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "LicenseVersion": "string",
    "SystemInfo": "string"
  }'
```

`PUT /api/v2/LicenseActivations/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "LicenseVersion": "string",
  "SystemInfo": "string"
}
```

<h3 id="update-a-license-activiation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the license.|
|body|body|[DealerDB.Models.LicenseActivationUpdate](#schemadealerdb.models.licenseactivationupdate)|true|The data required for updating the license.|
|» LicenseVersion|body|string|true|The license version to update|
|» SystemInfo|body|string|false|Information about  the system being activated|

> Example responses

> 200 Response

```json
{
  "Key": "string",
  "LicenseData": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="update-a-license-activiation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealerDB.Models.LicenseActivation](#schemadealerdb.models.licenseactivation)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Confirm that the client has applied the updated license.

<a id="opIdLicenseActivations_PutConfirm"></a>

> Code samples

```bash
curl https://example.com/api/v2/LicenseActivations/string/Confirm \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "LicenseVersion": "string"
  }'
```

`PUT /api/v2/LicenseActivations/{ID}/Confirm`

No Documentation Found.

> Body parameter

```json
{
  "LicenseVersion": "string"
}
```

<h3 id="confirm-that-the-client-has-applied-the-updated-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the license|
|body|body|[DealerDB.Models.LicenseActivationConfirm](#schemadealerdb.models.licenseactivationconfirm)|true|The license data.|
|» LicenseVersion|body|string|true|The license version to confirm|

<h3 id="confirm-that-the-client-has-applied-the-updated-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-licenses">Licenses</h1>

## Gets a list of licenses with the specified criteria.

<a id="opIdLicenses_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/Licenses \
  -H 'Accept: application/json'
```

`GET /api/v2/Licenses`

No Documentation Found.

<h3 id="gets-a-list-of-licenses-with-the-specified-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|query|string|false|Optional. Filter by VoucherCode|
|DealerCode|query|string|false|Optional. Filter by DealerCode|
|Status|query|string|false|Optional. Filter by Status.  By default only active licenses will be returned.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|Active|
|Status|Inactive|
|Status|All|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DeactivatedDate": "1970-01-01T00:00:00Z",
      "LicenseActivationType": "EDT",
      "LicenseID": "string",
      "LicenseVersion": "string",
      "RefreshDate": "1970-01-01T00:00:00Z",
      "SystemInfo": "string",
      "UpdatedLicenseVersion": "string",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-a-list-of-licenses-with-the-specified-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.License_](#schemaapi.pagedresponse_dealerdb.models.license_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a license.

> Code samples

```bash
curl https://example.com/api/v2/Licenses/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Licenses/{ID}`

No Documentation Found.

<h3 id="get-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the license to get.|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DeactivatedDate": "1970-01-01T00:00:00Z",
  "LicenseActivationType": "EDT",
  "LicenseID": "string",
  "LicenseVersion": "string",
  "RefreshDate": "1970-01-01T00:00:00Z",
  "SystemInfo": "string",
  "UpdatedLicenseVersion": "string",
  "VoucherCode": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealerDB.Models.License](#schemadealerdb.models.license)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-logs">Logs</h1>

## Get the API System logs, most recent first.

<a id="opIdLogs_GetLogs"></a>

> Code samples

```bash
curl https://example.com/api/v2/Logs \
  -H 'Accept: application/json'
```

`GET /api/v2/Logs`

No Documentation Found.

<h3 id="get-the-api-system-logs-most-recent-first-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ID": "string",
      "Message": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-api-system-logs-most-recent-first-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Log_](#schemaapi.pagedresponse_api.models.log_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Log entry

<a id="opIdLogs_PostLog"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Logs?Message=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/v2/Logs`

No Documentation Found.

<h3 id="add-a-log-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Message|query|string|true|Message to enter into the log|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-log-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a log by ID

<a id="opIdLogs_GetLog"></a>

> Code samples

```bash
curl https://example.com/api/v2/Logs/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Logs/{ID}`

No Documentation Found.

<h3 id="get-a-log-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Log ID|

> Example responses

> 200 Response

```json
{
  "ID": "string",
  "Message": "string",
  "TimeStamp": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-log-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.Log](#schemaapi.models.log)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-notifications">Notifications</h1>

## Sends an email message.

<a id="opIdNotifications_PostMail"></a>

> Code samples

```bash
curl https://example.com/api/v2/Notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "CC_Addresses": [
      "string"
    ],
    "IsBodyHtml": true,
    "MessageBody": "string",
    "Subject": "string",
    "To_Addresses": [
      "string"
    ]
  }'
```

`POST /api/v2/Notifications`

No Documentation Found.

> Body parameter

```json
{
  "CC_Addresses": [
    "string"
  ],
  "IsBodyHtml": true,
  "MessageBody": "string",
  "Subject": "string",
  "To_Addresses": [
    "string"
  ]
}
```

<h3 id="sends-an-email-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.Notification](#schemaapi.models.notification)|true|The Notification Object.|
|» CC_Addresses|body|[string]|false|none|
|» IsBodyHtml|body|boolean|true|none|
|» MessageBody|body|string|true|none|
|» Subject|body|string|true|none|
|» To_Addresses|body|[string]|true|none|

<h3 id="sends-an-email-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-packagetypes">PackageTypes</h1>

## Get all of the Package Types.

<a id="opIdPackageTypes_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes \
  -H 'Accept: application/json'
```

`GET /api/v2/PackageTypes`

No Documentation Found.

<h3 id="get-all-of-the-package-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|userID|query|integer(int32)|false|Optional. The user ID to sort packageTypes by the user's access|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Attribute": "string",
      "Category": "string",
      "Description": "string",
      "Icon": "string",
      "InventoryFrequency": 0,
      "InventoryPackage": "string",
      "LocalizedDescription": "string",
      "LocalizedName": "string",
      "MaxDeltaPackages": 0,
      "PackageTypeID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-all-of-the-package-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.PackageType_](#schemaapi.pagedresponse_updatesystem.models.packagetype_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Package Type.

<a id="opIdPackageTypes_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Attribute": "string",
    "Category": "string",
    "Description": "string",
    "Icon": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "MaxDeltaPackages": 0,
    "PackageTypeID": "string"
  }'
```

`POST /api/v2/PackageTypes`

No Documentation Found.

> Body parameter

```json
{
  "Attribute": "string",
  "Category": "string",
  "Description": "string",
  "Icon": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "MaxDeltaPackages": 0,
  "PackageTypeID": "string"
}
```

<h3 id="add-a-package-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.PackageType](#schemaupdatesystem.models.packagetype)|true|The Package Type to add|
|» Attribute|body|string|false|The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.|
|» Category|body|string|false|The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.|
|» Description|body|string|true|The description of the package type|
|» Icon|body|string|false|Optional.  The icon to use for the PackageType, in base 64|
|» InventoryFrequency|body|integer(int32)|false|The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).|
|» InventoryPackage|body|string|false|The inventory package used to determine what version of this package type is installed.|
|» LocalizedDescription|body|string|false|Optional. The StringID used to localize the description of the PackageType|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the PackageType|
|» MaxDeltaPackages|body|integer(int32)|false|The maximum number of "chained" delta packages to use when updating the client|
|» PackageTypeID|body|string|false|Read Only. The package type id.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-package-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Package Type.

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes/string \
  -H 'Accept: application/json'
```

`GET /api/v2/PackageTypes/{ID}`

No Documentation Found.

<h3 id="get-a-specific-package-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Package Type ID|

> Example responses

> 200 Response

```json
{
  "Attribute": "string",
  "Category": "string",
  "Description": "string",
  "Icon": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "MaxDeltaPackages": 0,
  "PackageTypeID": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-specific-package-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.PackageType](#schemaupdatesystem.models.packagetype)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a Package Type.

<a id="opIdPackageTypes_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Attribute": "string",
    "Category": "string",
    "Description": "string",
    "Icon": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "MaxDeltaPackages": 0,
    "PackageTypeID": "string"
  }'
```

`PUT /api/v2/PackageTypes/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "Attribute": "string",
  "Category": "string",
  "Description": "string",
  "Icon": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "MaxDeltaPackages": 0,
  "PackageTypeID": "string"
}
```

<h3 id="modify-a-package-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the Package Type|
|body|body|[UpdateSystem.Models.PackageType](#schemaupdatesystem.models.packagetype)|true|The Package Type to update|
|» Attribute|body|string|false|The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.|
|» Category|body|string|false|The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.|
|» Description|body|string|true|The description of the package type|
|» Icon|body|string|false|Optional.  The icon to use for the PackageType, in base 64|
|» InventoryFrequency|body|integer(int32)|false|The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).|
|» InventoryPackage|body|string|false|The inventory package used to determine what version of this package type is installed.|
|» LocalizedDescription|body|string|false|Optional. The StringID used to localize the description of the PackageType|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the PackageType|
|» MaxDeltaPackages|body|integer(int32)|false|The maximum number of "chained" delta packages to use when updating the client|
|» PackageTypeID|body|string|false|Read Only. The package type id.|

<h3 id="modify-a-package-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Package Type.

<a id="opIdPackageTypes_Delete"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes/string \
  -X DELETE
```

`DELETE /api/v2/PackageTypes/{ID}`

No Documentation Found.

<h3 id="delete-a-package-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Package Type ID|

<h3 id="delete-a-package-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a package type that a user can see.

<a id="opIdPackageTypes_AddPackageTypeUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes/string/Users/0 \
  -X POST
```

`POST /api/v2/PackageTypes/{id}/Users/{userID}`

No Documentation Found.

<h3 id="add-a-package-type-that-a-user-can-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Package Type|
|userID|path|integer(int32)|true|The userID to link to the package type|

<h3 id="add-a-package-type-that-a-user-can-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a package type a user could see.

<a id="opIdPackageTypes_RemovePackageTypeUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypes/string/Users/0 \
  -X DELETE
```

`DELETE /api/v2/PackageTypes/{id}/Users/{userID}`

No Documentation Found.

<h3 id="deletes-a-package-type-a-user-could-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Package Type|
|userID|path|integer(int32)|true|The userID to link to the package type|

<h3 id="deletes-a-package-type-a-user-could-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-packagetypetobundles">PackageTypetoBundles</h1>

## Get all of the Package Type to Bundle Relationships.

<a id="opIdPackageTypetoBundles_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypetoBundles \
  -H 'Accept: application/json'
```

`GET /api/v2/PackageTypetoBundles`

No Documentation Found.

<h3 id="get-all-of-the-package-type-to-bundle-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BundleID|query|string|false|Optional. Filter by BundleID.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "BundleID": "string",
      "PackageTypeID": "string",
      "PackageVersion": 0,
      "Priority": 1,
      "SubscriptionType": "Required"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-all-of-the-package-type-to-bundle-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.PackageTypeIDtoBundle_](#schemaapi.pagedresponse_updatesystem.models.packagetypeidtobundle_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Package Type ID to Bundle Relationship.

<a id="opIdPackageTypetoBundles_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypetoBundles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "BundleID": "string",
    "PackageTypeID": "string",
    "PackageVersion": 0,
    "Priority": 1,
    "SubscriptionType": "Required"
  }'
```

`PUT /api/v2/PackageTypetoBundles`

No Documentation Found.

> Body parameter

```json
{
  "BundleID": "string",
  "PackageTypeID": "string",
  "PackageVersion": 0,
  "Priority": 1,
  "SubscriptionType": "Required"
}
```

<h3 id="update-a-package-type-id-to-bundle-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.PackageTypeIDtoBundle](#schemaupdatesystem.models.packagetypeidtobundle)|true|The PackageTypeToBundle to update.|
|» BundleID|body|string|true|The bundle to include the package in.|
|» PackageTypeID|body|string|true|The package type id of the package to include|
|» PackageVersion|body|integer(int32)|true|The package version of the package to include|
|» Priority|body|integer(int32)|true|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|» SubscriptionType|body|string|false|Optional. The type of subscription supported.  The default subscription type is Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SubscriptionType|Required|
|» SubscriptionType|IncludeByDefault|
|» SubscriptionType|ExcludeByDefault|

<h3 id="update-a-package-type-id-to-bundle-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new Package Type ID to Bundle Relationship.

<a id="opIdPackageTypetoBundles_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/PackageTypetoBundles \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "BundleID": "string",
    "PackageTypeID": "string",
    "PackageVersion": 0,
    "Priority": 1,
    "SubscriptionType": "Required"
  }'
```

`POST /api/v2/PackageTypetoBundles`

No Documentation Found.

> Body parameter

```json
{
  "BundleID": "string",
  "PackageTypeID": "string",
  "PackageVersion": 0,
  "Priority": 1,
  "SubscriptionType": "Required"
}
```

<h3 id="add-a-new-package-type-id-to-bundle-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.PackageTypeIDtoBundle](#schemaupdatesystem.models.packagetypeidtobundle)|true|The PackageTypeToBundle to add.|
|» BundleID|body|string|true|The bundle to include the package in.|
|» PackageTypeID|body|string|true|The package type id of the package to include|
|» PackageVersion|body|integer(int32)|true|The package version of the package to include|
|» Priority|body|integer(int32)|true|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|» SubscriptionType|body|string|false|Optional. The type of subscription supported.  The default subscription type is Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SubscriptionType|Required|
|» SubscriptionType|IncludeByDefault|
|» SubscriptionType|ExcludeByDefault|

<h3 id="add-a-new-package-type-id-to-bundle-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Package Type to Bundle Relationship.

<a id="opIdPackageTypetoBundles_Delete"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/PackageTypetoBundles?BundleID=string&PackageTypeID=string' \
  -X DELETE
```

`DELETE /api/v2/PackageTypetoBundles`

No Documentation Found.

<h3 id="delete-a-package-type-to-bundle-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BundleID|query|string|true|The BundleID|
|PackageTypeID|query|string|true|The PackageTypeID|

<h3 id="delete-a-package-type-to-bundle-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-packages">Packages</h1>

## List Packages.

<a id="opIdPackages_GetPackages"></a>

> Code samples

```bash
curl https://example.com/api/v2/Packages \
  -H 'Accept: application/json'
```

`GET /api/v2/Packages`

No Documentation Found.

<h3 id="list-packages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|PackageTypeID|query|string|false|Optional. If provided, filters by PackageTypeID.|
|Version|query|integer(int32)|false|Optional. If provided, filters by Version.|
|Released|query|boolean|false|Optional. If provided, filters by Released.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Autorun": true,
      "CRC": "string",
      "Description": "string",
      "LocalizedName": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "Url": "string",
      "Version": 1
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="list-packages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.Package_](#schemaapi.pagedresponse_updatesystem.models.package_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Package to the Update System.

<a id="opIdPackages_PostPackage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Packages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Autorun": true,
    "CRC": "string",
    "Description": "string",
    "LocalizedName": "string",
    "Notes": "string",
    "PackageID": "string",
    "PackageTypeID": "string",
    "PreviousVersion": 0,
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "Released": true,
    "RemoveOnSuccess": true,
    "Size": 0,
    "Switches": "string",
    "Url": "string",
    "Version": 1
  }'
```

`POST /api/v2/Packages`

No Documentation Found.

> Body parameter

```json
{
  "Autorun": true,
  "CRC": "string",
  "Description": "string",
  "LocalizedName": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "Url": "string",
  "Version": 1
}
```

<h3 id="add-a-package-to-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)|true|The package to add.|
|» Autorun|body|boolean|false|Value is true if package should run automatically. Default value is false.|
|» CRC|body|string|true|The CRC used to validate the download.|
|» Description|body|string|true|The package description|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the Package|
|» Notes|body|string|false|Notes about the package|
|» PackageID|body|string|false|Read Only. The package ID|
|» PackageTypeID|body|string|true|The id of the package type this package belongs to.|
|» PreviousVersion|body|integer(int32)|false|For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.|
|» ReleaseDate|body|string(date-time)|true|The date the package was released|
|» Released|body|boolean|false|True if the package is released.  Default value is False.|
|» RemoveOnSuccess|body|boolean|false|True to remove the package after successful execution.  Default value is False.|
|» Size|body|integer(int64)|false|The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.<br>            If the size provided does not match the size in the response from the URL an error will be returned.|
|» Switches|body|string|false|The command line arguments for the package.  Default value is an empty string.|
|» Url|body|string|true|The Url to download the package from.|
|» Version|body|integer(int32)|true|The version.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-package-to-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Find a Package.

<a id="opIdPackages_GetPackage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Packages/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Packages/{ID}`

No Documentation Found.

<h3 id="find-a-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Package ID to Search for|

> Example responses

> 200 Response

```json
{
  "Autorun": true,
  "CRC": "string",
  "Description": "string",
  "LocalizedName": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "Url": "string",
  "Version": 1
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="find-a-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify a Packge to the Update System.

<a id="opIdPackages_PutPackage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Packages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Autorun": true,
    "CRC": "string",
    "Description": "string",
    "LocalizedName": "string",
    "Notes": "string",
    "PackageID": "string",
    "PackageTypeID": "string",
    "PreviousVersion": 0,
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "Released": true,
    "RemoveOnSuccess": true,
    "Size": 0,
    "Switches": "string",
    "Url": "string",
    "Version": 1
  }'
```

`PUT /api/v2/Packages/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "Autorun": true,
  "CRC": "string",
  "Description": "string",
  "LocalizedName": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "Url": "string",
  "Version": 1
}
```

<h3 id="modify-a-packge-to-the-update-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The unique ID of the Package|
|body|body|[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)|true|The package to update.|
|» Autorun|body|boolean|false|Value is true if package should run automatically. Default value is false.|
|» CRC|body|string|true|The CRC used to validate the download.|
|» Description|body|string|true|The package description|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the Package|
|» Notes|body|string|false|Notes about the package|
|» PackageID|body|string|false|Read Only. The package ID|
|» PackageTypeID|body|string|true|The id of the package type this package belongs to.|
|» PreviousVersion|body|integer(int32)|false|For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.|
|» ReleaseDate|body|string(date-time)|true|The date the package was released|
|» Released|body|boolean|false|True if the package is released.  Default value is False.|
|» RemoveOnSuccess|body|boolean|false|True to remove the package after successful execution.  Default value is False.|
|» Size|body|integer(int64)|false|The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.<br>            If the size provided does not match the size in the response from the URL an error will be returned.|
|» Switches|body|string|false|The command line arguments for the package.  Default value is an empty string.|
|» Url|body|string|true|The Url to download the package from.|
|» Version|body|integer(int32)|true|The version.|

<h3 id="modify-a-packge-to-the-update-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Package.

<a id="opIdPackages_DeletePackage"></a>

> Code samples

```bash
curl https://example.com/api/v2/Packages/string \
  -X DELETE
```

`DELETE /api/v2/Packages/{ID}`

No Documentation Found.

<h3 id="delete-a-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Package ID to Delete|

<h3 id="delete-a-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-permissions">Permissions</h1>

## List Permissions

<a id="opIdPermissions_GetPermissions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Permissions \
  -H 'Accept: application/json'
```

`GET /api/v2/Permissions`

No Documentation Found.

<h3 id="list-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|name|query|string|false|Filter by permission name. Supports ending wildcard (*). Optional.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "DataDescription": "string",
      "DataRequired": "Yes",
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="list-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Permission_](#schemaapi.pagedresponse_api.models.permission_)|

<aside class="success">
This operation does not require authentication
</aside>

## Adds a Permission

<a id="opIdPermissions_PostPermission"></a>

> Code samples

```bash
curl https://example.com/api/v2/Permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "DataDescription": "string",
    "DataRequired": "Yes",
    "Description": "string",
    "Id": 0,
    "Name": "string"
  }'
```

`POST /api/v2/Permissions`

No Documentation Found.

> Body parameter

```json
{
  "DataDescription": "string",
  "DataRequired": "Yes",
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="adds-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.Permission](#schemaapi.models.permission)|true|Permission to add|
|» DataDescription|body|string|false|Description of data to be provided with Role Authorization|
|» DataRequired|body|string|true|Indicates if data is required or optional|
|» Description|body|string|false|none|
|» Id|body|integer(int32)|false|The identifier of the permission.|
|» Name|body|string|true|The name of the permission.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DataRequired|Yes|
|» DataRequired|No|
|» DataRequired|Optional|

> Example responses

> 200 Response

```json
0
```

<h3 id="adds-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a Permission

<a id="opIdPermissions_GetPermission"></a>

> Code samples

```bash
curl https://example.com/api/v2/Permissions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/Permissions/{id}`

No Documentation Found.

<h3 id="gets-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Id of Permission|

> Example responses

> 200 Response

```json
{
  "DataDescription": "string",
  "DataRequired": "Yes",
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="gets-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.Permission](#schemaapi.models.permission)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a Permission

<a id="opIdPermissions_PutPermission"></a>

> Code samples

```bash
curl https://example.com/api/v2/Permissions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "DataDescription": "string",
    "DataRequired": "Yes",
    "Description": "string",
    "Id": 0,
    "Name": "string"
  }'
```

`PUT /api/v2/Permissions/{id}`

No Documentation Found.

> Body parameter

```json
{
  "DataDescription": "string",
  "DataRequired": "Yes",
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="updates-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Id of Permission|
|body|body|[API.Models.Permission](#schemaapi.models.permission)|true|The Updated Permission|
|» DataDescription|body|string|false|Description of data to be provided with Role Authorization|
|» DataRequired|body|string|true|Indicates if data is required or optional|
|» Description|body|string|false|none|
|» Id|body|integer(int32)|false|The identifier of the permission.|
|» Name|body|string|true|The name of the permission.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DataRequired|Yes|
|» DataRequired|No|
|» DataRequired|Optional|

<h3 id="updates-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a Permission

<a id="opIdPermissions_DeletePermission"></a>

> Code samples

```bash
curl https://example.com/api/v2/Permissions/0 \
  -X DELETE
```

`DELETE /api/v2/Permissions/{id}`

No Documentation Found.

<h3 id="deletes-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Id of Permission|

<h3 id="deletes-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-prioritypackages">PriorityPackages</h1>

## Get a list of Priority Packages by Client.

<a id="opIdPriorityPackages_GetPriorityPackages"></a>

> Code samples

```bash
curl https://example.com/api/v2/PriorityPackages \
  -H 'Accept: application/json'
```

`GET /api/v2/PriorityPackages`

No Documentation Found.

<h3 id="get-a-list-of-priority-packages-by-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|false|Optional. Filter priority packages by ClientID.|
|Status|query|string|false|Optional. Filter returned packages by status. By default only active packages will be returned.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|Active|
|Status|Completed|
|Status|All|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Autorun": true,
      "CRC": "string",
      "ClientID": "string",
      "Description": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "PriorityPackageID": "string",
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "TimeStamp": "1970-01-01T00:00:00Z",
      "Url": "string",
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-priority-packages-by-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.PriorityPackage_](#schemaapi.pagedresponse_updatesystem.models.prioritypackage_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Priority Package for a Client.

<a id="opIdPriorityPackages_PostPriorityPackages"></a>

> Code samples

```bash
curl https://example.com/api/v2/PriorityPackages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Autorun": true,
    "CRC": "string",
    "ClientID": "string",
    "Description": "string",
    "Notes": "string",
    "PackageID": "string",
    "PackageTypeID": "string",
    "PreviousVersion": 0,
    "PriorityPackageID": "string",
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "Released": true,
    "RemoveOnSuccess": true,
    "Size": 0,
    "Switches": "string",
    "TimeStamp": "1970-01-01T00:00:00Z",
    "Url": "string",
    "Version": 0
  }'
```

`POST /api/v2/PriorityPackages`

No Documentation Found.

> Body parameter

```json
{
  "Autorun": true,
  "CRC": "string",
  "ClientID": "string",
  "Description": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "PriorityPackageID": "string",
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "TimeStamp": "1970-01-01T00:00:00Z",
  "Url": "string",
  "Version": 0
}
```

<h3 id="add-a-priority-package-for-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.PriorityPackage](#schemaupdatesystem.models.prioritypackage)|true|The PriorityPackage to add|
|» Autorun|body|boolean|false|Read Only. From the package specified by package ID.<br>            Value is true if package should run automatically. Default value is false.|
|» CRC|body|string|false|Read Only. From the package specified by package ID.|
|» ClientID|body|string|true|The ID of the client to receive the priority package|
|» Description|body|string|false|Read Only. From the package specified by package ID.|
|» Notes|body|string|false|Read Only. From the package specified by package ID.|
|» PackageID|body|string|true|The ID of the package to push as a priority package.|
|» PackageTypeID|body|string|false|Read Only. From the package specified by package ID.|
|» PreviousVersion|body|integer(int32)|false|Read Only. From the package specified by package ID.|
|» PriorityPackageID|body|string|false|Read Only. The ID of the priority package.|
|» ReleaseDate|body|string(date-time)|false|Read Only. From the package specified by package ID.<br>            The date the package was released|
|» Released|body|boolean|false|Read Only. From the package specified by package ID.|
|» RemoveOnSuccess|body|boolean|false|Read Only. From the package specified by package ID.|
|» Size|body|integer(int64)|false|Read Only. From the package specified by package ID.|
|» Switches|body|string|false|The command line arguments for the priority package.  Default value is an empty string.|
|» TimeStamp|body|string(date-time)|false|Read Only. The timestamp of the priority package.|
|» Url|body|string|false|Read Only. From the package specified by package ID.|
|» Version|body|integer(int32)|false|Read Only. From the package specified by package ID.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-priority-package-for-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Priority Packages for a Client.

<a id="opIdPriorityPackages_GetPriorityPackage"></a>

> Code samples

```bash
curl https://example.com/api/v2/PriorityPackages/string \
  -H 'Accept: application/json'
```

`GET /api/v2/PriorityPackages/{ID}`

No Documentation Found.

<h3 id="get-a-priority-packages-for-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Priority Package ID|

> Example responses

> 200 Response

```json
{
  "Autorun": true,
  "CRC": "string",
  "ClientID": "string",
  "Description": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "PriorityPackageID": "string",
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "TimeStamp": "1970-01-01T00:00:00Z",
  "Url": "string",
  "Version": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-priority-packages-for-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.PriorityPackage](#schemaupdatesystem.models.prioritypackage)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Priority Package for a Client.

<a id="opIdPriorityPackages_DeletePriorityPackages"></a>

> Code samples

```bash
curl https://example.com/api/v2/PriorityPackages/string \
  -X DELETE
```

`DELETE /api/v2/PriorityPackages/{ID}`

No Documentation Found.

<h3 id="delete-a-priority-package-for-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The Priority Package ID|

<h3 id="delete-a-priority-package-for-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-release">Release</h1>

## Get Release

<a id="opIdRelease_GetReleases"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases \
  -H 'Accept: application/json'
```

`GET /api/v2/Releases`

Gets a collection of Release. When successful, the response is a PagedResponse of Release.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|visible|query|boolean|false|Optional. Filter by visible.|
|bundleID|query|string|false|Optional. Filter by BundleID.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "BuildDate": "1970-01-01T00:00:00Z",
      "BundleIDs": [
        "string"
      ],
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "ReleaseID": 0,
      "ReleaseNumber": "string",
      "Visible": true
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.Release_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.release_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Release

<a id="opIdRelease_PostRelease"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "BuildDate": "1970-01-01T00:00:00Z",
    "BundleIDs": [
      "string"
    ],
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "ReleaseID": 0,
    "ReleaseNumber": "string",
    "Visible": true
  }'
```

`POST /api/v2/Releases`

Creates a Release.  The body of the POST is the Release to create.
            The ReleaseId will be assigned on creation of the Job.  When successful, the response
            is the Release Id.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "BuildDate": "1970-01-01T00:00:00Z",
  "BundleIDs": [
    "string"
  ],
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "ReleaseID": 0,
  "ReleaseNumber": "string",
  "Visible": true
}
```

<h3 id="create-a-release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.Release](#schemacontentsubmission.shared.businessentities.release)|true|The Release to create.|
|» BuildDate|body|string(date-time)|false|Build Date|
|» BundleIDs|body|[string]|false|IDs of AUC Bundles associated with this Release.|
|» ReleaseDate|body|string(date-time)|false|Release Date|
|» ReleaseID|body|integer(int32)|false|Release ID|
|» ReleaseNumber|body|string|false|Release Number|
|» Visible|body|boolean|false|Visible|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Release by ID

<a id="opIdRelease_GetRelease"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/Releases/{ReleaseId}`

Gets a Release by ID. When successful, the response is the requested Release.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-release-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReleaseId|path|integer(int32)|true|The ID of the Release to get.|

> Example responses

> 200 Response

```json
{
  "BuildDate": "1970-01-01T00:00:00Z",
  "BundleIDs": [
    "string"
  ],
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "ReleaseID": 0,
  "ReleaseNumber": "string",
  "Visible": true
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-release-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.Release](#schemacontentsubmission.shared.businessentities.release)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Associates the release with a bundle.

<a id="opIdRelease_PostReleaseBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases/0/Bundle/string \
  -X POST
```

`POST /api/v2/Releases/{ReleaseId}/Bundle/{BundleId}`

No Documentation Found.

<h3 id="associates-the-release-with-a-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReleaseId|path|integer(int32)|true|The release identifier.|
|BundleId|path|string|true|The bundle identifier.|

<h3 id="associates-the-release-with-a-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes the association between a release and a bundle.

<a id="opIdRelease_DeleteReleaseBundle"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases/0/Bundle/string \
  -X DELETE
```

`DELETE /api/v2/Releases/{ReleaseId}/Bundle/{BundleId}`

No Documentation Found.

<h3 id="deletes-the-association-between-a-release-and-a-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReleaseId|path|integer(int32)|true|The release identifier.|
|BundleId|path|string|true|The bundle identifier.|

<h3 id="deletes-the-association-between-a-release-and-a-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Release

<a id="opIdRelease_PutContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/Releases/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "BuildDate": "1970-01-01T00:00:00Z",
    "BundleIDs": [
      "string"
    ],
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "ReleaseID": 0,
    "ReleaseNumber": "string",
    "Visible": true
  }'
```

`PUT /api/v2/Releases/{releaseId}`

Updates a Release.  The body of the PUT is the updated Release.  
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "BuildDate": "1970-01-01T00:00:00Z",
  "BundleIDs": [
    "string"
  ],
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "ReleaseID": 0,
  "ReleaseNumber": "string",
  "Visible": true
}
```

<h3 id="update-a-release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|releaseId|path|integer(int32)|true|The ID of the Release to update|
|body|body|[ContentSubmission.Shared.BusinessEntities.Release](#schemacontentsubmission.shared.businessentities.release)|true|The updated Release|
|» BuildDate|body|string(date-time)|false|Build Date|
|» BundleIDs|body|[string]|false|IDs of AUC Bundles associated with this Release.|
|» ReleaseDate|body|string(date-time)|false|Release Date|
|» ReleaseID|body|integer(int32)|false|Release ID|
|» ReleaseNumber|body|string|false|Release Number|
|» Visible|body|boolean|false|Visible|

<h3 id="update-a-release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-reporting">Reporting</h1>

## Get a summary of all Packages in a Bundle

<a id="opIdReporting_BundleStatusSummary"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/BundleStatusSummary?BundleID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/BundleStatusSummary`

No Documentation Found.

<h3 id="get-a-summary-of-all-packages-in-a-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BundleID|query|string|true|The BundleID|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AverageDownloadTime": "string",
      "AverageInstallTime": "string",
      "Downloaded": 0,
      "Error": 0,
      "Installed": 0,
      "Package": "string",
      "PackageID": "string",
      "PackageStatusItems": [
        {
          "ClientID": "string",
          "ClientKey": "string",
          "DownloadTime": "string",
          "Downloaded": "string",
          "InstallCompleted": "string",
          "InstallResult": "string",
          "InstallStarted": "string",
          "InstallTime": "string",
          "Percentage": "string",
          "Size": "string",
          "Timestamp": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-summary-of-all-packages-in-a-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.PackageStatusSummary_](#schemaapi.pagedresponse_updatesystem.models.packagestatussummary_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of bundles for UpdateGroup.

<a id="opIdReporting_BundlesInUpdateGroup"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/BundlesInUpdateGroup?ID=string&IncludeInactive=true' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/BundlesInUpdateGroup`

No Documentation Found.

<h3 id="get-a-list-of-bundles-for-updategroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|query|string|true|The UpdateGroupID|
|IncludeInactive|query|boolean|true|Include Inactive Bundles (true\|false)|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "BundleID": "string",
      "BundleNumber": 0,
      "Description": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-bundles-for-updategroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.Bundle_](#schemaapi.pagedresponse_updatesystem.models.bundle_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Client Information

<a id="opIdReporting_ClientInfo"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/ClientInfo?ClientID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/ClientInfo`

No Documentation Found.

<h3 id="get-client-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "ClientID": "string",
  "Package": [
    {
      "Categories": [
        {
          "Values": [
            {
              "Key": "string",
              "TimeStamp": "1970-01-01T00:00:00Z",
              "Value": "string"
            }
          ],
          "category": "string"
        }
      ],
      "PackageDescription": "string",
      "PackageID": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-client-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.ClientInfo](#schemaupdatesystem.models.clientinfo)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the current packages for an update group.

<a id="opIdReporting_CurrentPackagesInUpdateGroup"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/CurrentPackagesInUpdateGroup?ID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/CurrentPackagesInUpdateGroup`

No Documentation Found.

<h3 id="get-the-current-packages-for-an-update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|query|string|true|The UpdateGroupID|
|SubscriptionTypeFilter|query|string|false|Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|SubscriptionTypeFilter|RequiredOnly|
|SubscriptionTypeFilter|Default|
|SubscriptionTypeFilter|All|

> Example responses

> 200 Response

```json
[
  {
    "Autorun": true,
    "CRC": "string",
    "Description": "string",
    "LocalizedName": "string",
    "Notes": "string",
    "PackageID": "string",
    "PackageTypeID": "string",
    "PreviousVersion": 0,
    "ReleaseDate": "1970-01-01T00:00:00Z",
    "Released": true,
    "RemoveOnSuccess": true,
    "Size": 0,
    "Switches": "string",
    "Url": "string",
    "Version": 1
  }
]
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-current-packages-for-an-update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<h3 id="get-the-current-packages-for-an-update-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client in the Update System.

<a id="opIdReporting_GetClient"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/GetClient?ID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/GetClient`

No Documentation Found.

<h3 id="get-a-client-in-the-update-system-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|query|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "Tag": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-client-in-the-update-system-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.Client](#schemaupdatesystem.models.client)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of current Client Subscriptions.

<a id="opIdReporting_GetSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Reporting/GetSubscriptions \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/GetSubscriptions`

No Documentation Found.

<h3 id="get-a-list-of-current-client-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|false|Optional. Filter by Client ID|
|UpdateGroupID|query|string|false|Optional. Filter by Update Group ID|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "RelationshipID": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-current-client-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroupClientRelationship_](#schemaapi.pagedresponse_updatesystem.models.updategroupclientrelationship_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a summary report for a Specific Package

<a id="opIdReporting_PackageStatusSummary"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/PackageStatusSummary?PackageID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/PackageStatusSummary`

No Documentation Found.

<h3 id="get-a-summary-report-for-a-specific-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|query|string|true|The Package ID|

> Example responses

> 200 Response

```json
{
  "AverageDownloadTime": "string",
  "AverageInstallTime": "string",
  "Downloaded": 0,
  "Error": 0,
  "Installed": 0,
  "Package": "string",
  "PackageID": "string",
  "PackageStatusItems": [
    {
      "ClientID": "string",
      "ClientKey": "string",
      "DownloadTime": "string",
      "Downloaded": "string",
      "InstallCompleted": "string",
      "InstallResult": "string",
      "InstallStarted": "string",
      "InstallTime": "string",
      "Percentage": "string",
      "Size": "string",
      "Timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-summary-report-for-a-specific-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.PackageStatusSummary](#schemaupdatesystem.models.packagestatussummary)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of subscribed clients

<a id="opIdReporting_RegisteredClients"></a>

> Code samples

```bash
curl https://example.com/api/v2/Reporting/RegisteredClients \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/RegisteredClients`

No Documentation Found.

<h3 id="get-a-list-of-subscribed-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupID|query|string|false|Optional but required when including any or all of following parameters: ReportValue, ReportResult, ReportResultIsValid. The Update Group ID. If not provided, all clients will be returned.|
|ClientID|query|string|false|Optional. Filter where ClientID matches a value. Wildcards are supported (*).|
|Tag|query|string|false|Optional. Filter where Tag matches a value. Wildcards are supported (*).|
|ReportResult|query|string|false|Optional and UpdateGroupID must be included. Filter where ReportResult matches a value. Wildcards are supported (*).|
|ReportResultIsValid|query|boolean|false|Optional and UpdateGroupID must be included. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults.|
|ReportValue|query|string|false|Optional and UpdateGroupID must be included. Filter where ReportValue matches a value. Wildcards are supported (*).|
|LastCheckInBefore|query|string(date-time)|false|Optional. Filter where LastCheckIn occured before the provided date.|
|LastCheckInAfter|query|string(date-time)|false|Optional. Filter where LastCheckIn occured after the provided date.|
|OrderBy|query|string|false|Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC\|ASCENDING\|DESC\|DESCENDING],...   <br>            If sort direction is not provided for a field, it will be sorted ascending.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "MinutesElapsed": 0,
      "ReportResult": "string",
      "ReportResultIsValid": true,
      "ReportValue": "string",
      "Tag": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "ReportResultExpected": "string",
    "ReportResultLabel": "string",
    "ReportValueLabel": "string",
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-subscribed-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.ClientStatus_UpdateSystem.Models.PagedClientStatusMetadata_](#schemaapi.pagedresponse_updatesystem.models.clientstatus_updatesystem.models.pagedclientstatusmetadata_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of Update Groups. Update Groups are used by the client to register for a specific type of update.

<a id="opIdReporting_UpdateGroups"></a>

> Code samples

```bash
curl https://example.com/api/v2/Reporting/UpdateGroups \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/UpdateGroups`

No Documentation Found.

<h3 id="get-a-list-of-update-groups-update-groups-are-used-by-the-client-to-register-for-a-specific-type-of-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "ID": "string",
      "InventoryFrequency": 0,
      "InventoryPackage": "string",
      "LocalizedDescription": "string",
      "LocalizedName": "string",
      "Priority": 1,
      "ReportField": "string",
      "UpdateType": "string",
      "ValidatingField": "string",
      "ValueToValidate": "string",
      "Version": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-update-groups-update-groups-are-used-by-the-client-to-register-for-a-specific-type-of-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroup_](#schemaapi.pagedresponse_updatesystem.models.updategroup_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get data for pie charts in UpdateMetrics.

<a id="opIdReporting_UpdateMetrics"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/Reporting/UpdateMetrics?UpdateGroupID=string' \
  -H 'Accept: application/json'
```

`GET /api/v2/Reporting/UpdateMetrics`

No Documentation Found.

<h3 id="get-data-for-pie-charts-in-updatemetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupID|query|string|true|The UpdateType in which clients must be for the report to include them.|
|bundleNumber|query|integer(int32)|false|Optional. Tells us which chart to show based upon filter.|

> Example responses

> 200 Response

```json
{
  "ActiveVersion": "string",
  "ActiveVersionByClient": [
    {
      "BundleNumber": 0,
      "ClientCount": 0,
      "ReleaseName": "string"
    }
  ],
  "CurrentStateByClient": [
    {
      "ClientCount": 0,
      "State": "string"
    }
  ],
  "CutOffDate": "1970-01-01T00:00:00Z",
  "DataRefreshed": "1970-01-01T00:00:00Z",
  "FilteredClientCount": 0,
  "PackageErrors": [
    {
      "ClientCount": 0,
      "ErrorCode": "string",
      "LongDescription": "string",
      "ShortDescription": "string"
    }
  ],
  "TotalClientCount": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-data-for-pie-charts-in-updatemetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.UpdateMetricsData](#schemaupdatesystem.models.updatemetricsdata)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-roles">Roles</h1>

## List Roles

<a id="opIdRoles_GetRoles"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles \
  -H 'Accept: application/json'
```

`GET /api/v2/Roles`

No Documentation Found.

<h3 id="list-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|name|query|string|false|Optional. Finds a role with the given name.|
|permissionID|query|integer(int32)|false|none|
|permissionName|query|string|false|Optional. Filters roles by whether they contain the provided permission.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="list-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Role_](#schemaapi.pagedresponse_api.models.role_)|

<aside class="success">
This operation does not require authentication
</aside>

## Adds a User Role

<a id="opIdRoles_PostRole"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Description": "string",
    "Id": 0,
    "Name": "string"
  }'
```

`POST /api/v2/Roles`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="adds-a-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.Role](#schemaapi.models.role)|true|Role to add|
|» Description|body|string|true|Role description|
|» Id|body|integer(int32)|false|The role's identifier.|
|» Name|body|string|true|The name of the role. Must be alpha-numeric strings separated by a period (.).|

> Example responses

> 200 Response

```json
0
```

<h3 id="adds-a-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a User Role

<a id="opIdRoles_GetRole"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/Roles/{id}`

No Documentation Found.

<h3 id="gets-a-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The role's id|

> Example responses

> 200 Response

```json
{
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="gets-a-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.Role](#schemaapi.models.role)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a User Role

<a id="opIdRoles_PutRole"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Description": "string",
    "Id": 0,
    "Name": "string"
  }'
```

`PUT /api/v2/Roles/{id}`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

<h3 id="updates-a-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The role's id|
|body|body|[API.Models.Role](#schemaapi.models.role)|true|The Updated Role|
|» Description|body|string|true|Role description|
|» Id|body|integer(int32)|false|The role's identifier.|
|» Name|body|string|true|The name of the role. Must be alpha-numeric strings separated by a period (.).|

<h3 id="updates-a-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a User Role

<a id="opIdRoles_DeleteRole"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0 \
  -X DELETE
```

`DELETE /api/v2/Roles/{id}`

No Documentation Found.

<h3 id="deletes-a-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The role's id|

<h3 id="deletes-a-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the Permissions for a Role

<a id="opIdRoles_GetRolePermissions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0/Permissions \
  -H 'Accept: application/json'
```

`GET /api/v2/Roles/{id}/Permissions`

No Documentation Found.

<h3 id="get-the-permissions-for-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the Role|
|name|query|string|false|Filter by permission name. Optional.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "DataDescription": "string",
      "DataRequired": "Yes",
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="get-the-permissions-for-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Permission_](#schemaapi.pagedresponse_api.models.permission_)|

<aside class="success">
This operation does not require authentication
</aside>

## Manage the Permissions for a Role

<a id="opIdRoles_PutRolePermissions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0/Permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "Action": "Grant",
      "Permission": "string"
    }
  ]'
```

`PUT /api/v2/Roles/{id}/Permissions`

No Documentation Found.

> Body parameter

```json
[
  {
    "Action": "Grant",
    "Permission": "string"
  }
]
```

<h3 id="manage-the-permissions-for-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the Role|
|body|body|[[API.Models.RolePermissionChange](#schemaapi.models.rolepermissionchange)]|true|Permissions Changes for the Role|

<h3 id="manage-the-permissions-for-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-userpermissions">UserPermissions</h1>

## Get all user's in a role

<a id="opIdUserPermissions_GetUsers"></a>

> Code samples

```bash
curl https://example.com/api/v2/Roles/0/Users \
  -H 'Accept: application/json'
```

`GET /api/v2/Roles/{id}/Users`

No Documentation Found.

<h3 id="get-all-users-in-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Role's ID|
|limit|query|integer(int32)|false|The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ChangePassword": "string",
      "Email": "string",
      "Name": "string",
      "Password": "string",
      "UserID": 0,
      "Username": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-all-users-in-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.User_](#schemaapi.pagedresponse_api.models.user_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Role's users

> Code samples

```bash
curl https://example.com/api/v2/Roles/0/Users \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "Action": "Grant",
      "Id": 0
    }
  ]'
```

`PUT /api/v2/Roles/{id}/Users`

No Documentation Found.

> Body parameter

```json
[
  {
    "Action": "Grant",
    "Id": 0
  }
]
```

<h3 id="update-a-roles-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Role's ID|
|body|body|[[API.Models.RoleUserChange](#schemaapi.models.roleuserchange)]|true|A list of changes to the Role's Users|

<h3 id="update-a-roles-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user's permissions

> Code samples

```bash
curl https://example.com/api/v2/Users/Current/Permissions \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/Current/Permissions`

No Documentation Found.

<h3 id="get-a-users-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Permission|query|string|false|Filter by permission name. Supports ending wildcard (*). Optional.|
|limit|query|integer(int32)|false|The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "PermissionId": 0,
      "PermissionName": "string",
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-users-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.UserEffectivePermission_](#schemaapi.pagedresponse_api.models.usereffectivepermission_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the current user's roles

<a id="opIdUserPermissions_GetCurrentUserRoles"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/Current/Roles \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/Current/Roles`

No Documentation Found.

<h3 id="gets-the-current-users-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Role|query|string|false|Filter by role name. Supports ending wildcard (*). Optional.|
|limit|query|integer(int32)|false|The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-the-current-users-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Role_](#schemaapi.pagedresponse_api.models.role_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user's permissions

<a id="opIdUserPermissions_GetPermissions"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/0/Permissions \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/{id}/Permissions`

No Documentation Found.

<h3 id="get-a-users-permissions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The User's ID|
|Permission|query|string|false|Filter by permission name. Supports ending wildcard (*). Optional.|
|limit|query|integer(int32)|false|The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "PermissionId": 0,
      "PermissionName": "string",
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-users-permissions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.UserEffectivePermission_](#schemaapi.pagedresponse_api.models.usereffectivepermission_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user's roles

<a id="opIdUserPermissions_GetRoles"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/0/Roles \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/{id}/Roles`

No Documentation Found.

<h3 id="get-a-users-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The User's ID|
|Role|query|string|false|Filter by role name. Supports ending wildcard (*). Optional.|
|limit|query|integer(int32)|false|The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-users-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.Role_](#schemaapi.pagedresponse_api.models.role_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user's roles

<a id="opIdUserPermissions_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/0/Roles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "Action": "Grant",
      "Name": "string"
    }
  ]'
```

`PUT /api/v2/Users/{id}/Roles`

No Documentation Found.

> Body parameter

```json
[
  {
    "Action": "Grant",
    "Name": "string"
  }
]
```

<h3 id="update-a-users-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The User's ID|
|body|body|[[API.Models.UserRoleChange](#schemaapi.models.userrolechange)]|true|A list of changes to the User's Roles|

<h3 id="update-a-users-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-stringdefinitions">StringDefinitions</h1>

## Get a paged response of Global String Definitions.

<a id="opIdStringDefinitions_GetDefinitions"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringDefinitions \
  -H 'Accept: application/json'
```

`GET /api/v2/StringDefinitions`

No Documentation Found.

<h3 id="get-a-paged-response-of-global-string-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10. Ignored if 'stringIds' is provided.|
|modifiedAfterTimestamp|query|string|false|Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.|
|includeTranslations|query|boolean|false|Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.|
|stringText|query|string|false|Optional. The text for which to search in the StringDefinition object’s translations. Only StringDefinition objects for matching StringTranslation objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. includeTranslations must be true.|
|descriptionText|query|string|false|Optional. The text for which to search in the StringDefinition description field. Only matching objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards.|
|useFullText|query|boolean|false|Optional. This flag is used to determin whether to use the FullText Search or not.|
|includeDeletedLanguages|query|boolean|false|Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.|
|languageIds|query|string|false|Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.|
|stringIds|query|string|false|Optional. A comma-delimited list of string ids. Up to 40 string IDs may be provided. May not be used with 'modifiedAfterTimestamp', 'stringText', 'descriptionText', or 'useFullText'.|
|matchingTranslationsOnly|query|boolean|false|Optional. If false, all translations for returned String Definitions are included. Must be used with 'stringText' provided and 'includeTranslations' = true.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "DescriptionForTranslator": "string",
      "DoNotTranslate": true,
      "Id": "string",
      "ParameterCount": 0,
      "Timestamp": "string",
      "Translations": [
        {
          "AuthorId": 0,
          "LanguageId": 0,
          "State": "Original",
          "StringId": "string",
          "StringValue": "string",
          "Timestamp": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-global-string-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.StringDefinition_](#schemaapi.ipagedresponse_globalresources.shared.models.stringdefinition_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.

<a id="opIdStringDefinitions_UpdateDefinitions"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringDefinitions/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "DescriptionForTranslator": "string",
      "DoNotTranslate": true,
      "Id": "string",
      "ParameterCount": 0,
      "Timestamp": "string",
      "Translations": [
        {
          "AuthorId": 0,
          "LanguageId": 0,
          "State": "Original",
          "StringId": "string",
          "StringValue": "string",
          "Timestamp": "string"
        }
      ]
    }
  ]'
```

`PUT /api/v2/StringDefinitions/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "DescriptionForTranslator": "string",
    "DoNotTranslate": true,
    "Id": "string",
    "ParameterCount": 0,
    "Timestamp": "string",
    "Translations": [
      {
        "AuthorId": 0,
        "LanguageId": 0,
        "State": "Original",
        "StringId": "string",
        "StringValue": "string",
        "Timestamp": "string"
      }
    ]
  }
]
```

<h3 id="update-stringdefinition-objects-accepts-an-array-of-stringdefinition-objects-this-endpoint-will-add-stringdefinitionchange-objects-to-the-database-the-descriptionfortranslator-may-not-be-modified-after-a-string-is-submitted-for-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[GlobalResources.Shared.Models.StringDefinition](#schemaglobalresources.shared.models.stringdefinition)]|true|The Array of Definitions to update|

<h3 id="update-stringdefinition-objects-accepts-an-array-of-stringdefinition-objects-this-endpoint-will-add-stringdefinitionchange-objects-to-the-database-the-descriptionfortranslator-may-not-be-modified-after-a-string-is-submitted-for-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.

<a id="opIdStringDefinitions_PostDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringDefinitions/Batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "DescriptionForTranslator": "string",
      "DoNotTranslate": true,
      "Id": "string",
      "ParameterCount": 0,
      "Timestamp": "string",
      "Translations": [
        {
          "AuthorId": 0,
          "LanguageId": 0,
          "State": "Original",
          "StringId": "string",
          "StringValue": "string",
          "Timestamp": "string"
        }
      ]
    }
  ]'
```

`POST /api/v2/StringDefinitions/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "DescriptionForTranslator": "string",
    "DoNotTranslate": true,
    "Id": "string",
    "ParameterCount": 0,
    "Timestamp": "string",
    "Translations": [
      {
        "AuthorId": 0,
        "LanguageId": 0,
        "State": "Original",
        "StringId": "string",
        "StringValue": "string",
        "Timestamp": "string"
      }
    ]
  }
]
```

<h3 id="create-stringdefinition-object-the-originating-translation-must-be-provided-accepts-an-array-of-stringdefinition-objects-returns-nothing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[GlobalResources.Shared.Models.StringDefinition](#schemaglobalresources.shared.models.stringdefinition)]|true|The StringDefinition Object array, along with originating translation.|

<h3 id="create-stringdefinition-object-the-originating-translation-must-be-provided-accepts-an-array-of-stringdefinition-objects-returns-nothing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a paged response of Global String Definitions.

<a id="opIdStringDefinitions_GetDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringDefinitions/string \
  -H 'Accept: application/json'
```

`GET /api/v2/StringDefinitions/{ID}`

No Documentation Found.

<h3 id="get-a-paged-response-of-global-string-definitions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|none|
|includeTranslations|query|boolean|false|Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false.|
|includeDeletedLanguages|query|boolean|false|Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false.|
|languageIds|query|string|false|Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty.|

> Example responses

> 200 Response

```json
{
  "DescriptionForTranslator": "string",
  "DoNotTranslate": true,
  "Id": "string",
  "ParameterCount": 0,
  "Timestamp": "string",
  "Translations": [
    {
      "AuthorId": 0,
      "LanguageId": 0,
      "State": "Original",
      "StringId": "string",
      "StringValue": "string",
      "Timestamp": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-global-string-definitions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.StringDefinition](#schemaglobalresources.shared.models.stringdefinition)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-stringtranslations">StringTranslations</h1>

## Get a paged response of Global String Translations.

<a id="opIdStringTranslations_GetTranslations"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringTranslations \
  -H 'Accept: application/json'
```

`GET /api/v2/StringTranslations`

No Documentation Found.

<h3 id="get-a-paged-response-of-global-string-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|modifiedAfterTimestamp|query|string|false|Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AuthorId": 0,
      "LanguageId": 0,
      "State": "Original",
      "StringId": "string",
      "StringValue": "string",
      "Timestamp": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-global-string-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.StringTranslation_](#schemaapi.ipagedresponse_globalresources.shared.models.stringtranslation_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update corrections to string translations

<a id="opIdStringTranslations_UpdateTranslations"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringTranslations/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "AuthorId": 0,
      "LanguageId": 0,
      "State": "Original",
      "StringId": "string",
      "StringValue": "string",
      "Timestamp": "string"
    }
  ]'
```

`PUT /api/v2/StringTranslations/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "AuthorId": 0,
    "LanguageId": 0,
    "State": "Original",
    "StringId": "string",
    "StringValue": "string",
    "Timestamp": "string"
  }
]
```

<h3 id="update-corrections-to-string-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[GlobalResources.Shared.Models.StringTranslation](#schemaglobalresources.shared.models.stringtranslation)]|true|none|

<h3 id="update-corrections-to-string-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single translation based upon stringId and languageId

<a id="opIdStringTranslations_GetTranslation"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringTranslations/string/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/StringTranslations/{stringId}/{languageId}`

No Documentation Found.

<h3 id="get-a-single-translation-based-upon-stringid-and-languageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stringId|path|string|true|none|
|languageId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "AuthorId": 0,
  "LanguageId": 0,
  "State": "Original",
  "StringId": "string",
  "StringValue": "string",
  "Timestamp": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-single-translation-based-upon-stringid-and-languageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.StringTranslation](#schemaglobalresources.shared.models.stringtranslation)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a string value or a state for a string translation.

<a id="opIdStringTranslations_UpdateTranslation"></a>

> Code samples

```bash
curl https://example.com/api/v2/StringTranslations/string/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "AuthorId": 0,
    "LanguageId": 0,
    "State": "Original",
    "StringId": "string",
    "StringValue": "string",
    "Timestamp": "string"
  }'
```

`PUT /api/v2/StringTranslations/{stringId}/{languageId}`

No Documentation Found.

> Body parameter

```json
{
  "AuthorId": 0,
  "LanguageId": 0,
  "State": "Original",
  "StringId": "string",
  "StringValue": "string",
  "Timestamp": "string"
}
```

<h3 id="update-a-string-value-or-a-state-for-a-string-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stringId|path|string|true|none|
|languageId|path|integer(int32)|true|none|
|body|body|[GlobalResources.Shared.Models.StringTranslation](#schemaglobalresources.shared.models.stringtranslation)|true|none|
|» AuthorId|body|integer(int32)|false|The id of the user to last edit thie translation|
|» LanguageId|body|integer(int32)|false|The id of the language of the translation|
|» State|body|string|false|The state of the translation|
|» StringId|body|string|false|The id of the string that is translated|
|» StringValue|body|string|true|The translated string|
|» Timestamp|body|string(byte)|false|A value indicating the last modification of this translation. Read Only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|Original|
|» State|Requested|
|» State|Processing|
|» State|Processed|
|» State|Validated|
|» State|Invalidated|
|» State|RequestPending|
|» State|CreatePending|

<h3 id="update-a-string-value-or-a-state-for-a-string-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-translationkeys">TranslationKeys</h1>

## Get a paged response of TranslationKeys.

<a id="opIdTranslationKeys_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationKeys \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationKeys`

<h3 id="get-a-paged-response-of-translationkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|keyNames|query|string|false|Can filter by keyNames, a comma deliminated list.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ID": 0,
      "KeyName": "string",
      "StringID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-paged-response-of-translationkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_OASSupport.Shared.Models.TranslationKey_](#schemaapi.ipagedresponse_oassupport.shared.models.translationkey_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a translationKey object.

<a id="opIdTranslationKeys_CreateTranslationKey"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ID": 0,
    "KeyName": "string",
    "StringID": "string"
  }'
```

`POST /api/v2/TranslationKeys`

No Documentation Found.

> Body parameter

```json
{
  "ID": 0,
  "KeyName": "string",
  "StringID": "string"
}
```

<h3 id="create-a-translationkey-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OASSupport.Shared.Models.TranslationKey](#schemaoassupport.shared.models.translationkey)|true|none|
|» ID|body|integer(int32)|false|The identifier for the translationKey. Read Only.|
|» KeyName|body|string|true|The key name of the item. One example is tkODX_HWIKM14R01|
|» StringID|body|string|true|Foreign key to StringDefinitionID|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-translationkey-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get TranslationKey by ID

<a id="opIdTranslationKeys_GetTranslationKey"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationKeys/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationKeys/{ID}`

No Documentation Found.

<h3 id="get-translationkey-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "ID": 0,
  "KeyName": "string",
  "StringID": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-translationkey-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OASSupport.Shared.Models.TranslationKey](#schemaoassupport.shared.models.translationkey)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the StringID of the translationKey object.

<a id="opIdTranslationKeys_UpdateTranslationKey"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationKeys/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ID": 0,
    "KeyName": "string",
    "StringID": "string"
  }'
```

`PUT /api/v2/TranslationKeys/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "ID": 0,
  "KeyName": "string",
  "StringID": "string"
}
```

<h3 id="update-the-stringid-of-the-translationkey-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[OASSupport.Shared.Models.TranslationKey](#schemaoassupport.shared.models.translationkey)|true|none|
|» ID|body|integer(int32)|false|The identifier for the translationKey. Read Only.|
|» KeyName|body|string|true|The key name of the item. One example is tkODX_HWIKM14R01|
|» StringID|body|string|true|Foreign key to StringDefinitionID|

<h3 id="update-the-stringid-of-the-translationkey-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-translationrequests">TranslationRequests</h1>

## Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.

<a id="opIdTranslationRequests_GetTranslationRequests"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationRequests \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationRequests`

No Documentation Found.

<h3 id="get-all-translationrequest-objects-returns-a-pagedresponse-of-translationrequest-objects-with-their-language-ids-and-string-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ApprovalUserId": 0,
      "CCEmailAddresses": [
        "string"
      ],
      "ChargeToAccount": "string",
      "Deadline": "1970-01-01T00:00:00Z",
      "Id": 0,
      "LocaleIds": [
        0
      ],
      "Notes": "string",
      "QuestionsUserId": 0,
      "State": "NotSubmitted",
      "SubmittedBy": 0,
      "TranslatorEmail": "string",
      "TranslatorName": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-all-translationrequest-objects-returns-a-pagedresponse-of-translationrequest-objects-with-their-language-ids-and-string-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.TranslationRequest_](#schemaapi.ipagedresponse_globalresources.shared.models.translationrequest_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.

<a id="opIdTranslationRequests_CreateTranslationRequest"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationRequests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ApprovalUserId": 0,
    "CCEmailAddresses": [
      "string"
    ],
    "ChargeToAccount": "string",
    "Deadline": "1970-01-01T00:00:00Z",
    "Id": 0,
    "LocaleIds": [
      0
    ],
    "Notes": "string",
    "QuestionsUserId": 0,
    "State": "NotSubmitted",
    "SubmittedBy": 0,
    "TranslatorEmail": "string",
    "TranslatorName": "string"
  }'
```

`POST /api/v2/TranslationRequests`

No Documentation Found.

> Body parameter

```json
{
  "ApprovalUserId": 0,
  "CCEmailAddresses": [
    "string"
  ],
  "ChargeToAccount": "string",
  "Deadline": "1970-01-01T00:00:00Z",
  "Id": 0,
  "LocaleIds": [
    0
  ],
  "Notes": "string",
  "QuestionsUserId": 0,
  "State": "NotSubmitted",
  "SubmittedBy": 0,
  "TranslatorEmail": "string",
  "TranslatorName": "string"
}
```

<h3 id="create-a-translation-request-accepts-a-translationrequest-object-returns-the-id-of-the-created-object-the-state-of-the-translationrequest-must-be-notsubmitted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalResources.Shared.Models.TranslationRequest](#schemaglobalresources.shared.models.translationrequest)|true|none|
|» ApprovalUserId|body|integer(int32)|false|The ID of the user from which approval for the request is required|
|» CCEmailAddresses|body|[string]|true|Additional email addresses to CC on emails pertaining to the request|
|» ChargeToAccount|body|string|true|The account to charge for the request|
|» Deadline|body|string(date-time)|true|The date by which the translations in the request are needed. Defaults to 30 days from the current date|
|» Id|body|integer(int32)|false|The ID of the request|
|» LocaleIds|body|[integer(int32)]|true|Locale IDs to which these strings are requested to be translated|
|» Notes|body|string|true|Additional notes or comments about the request|
|» QuestionsUserId|body|integer(int32)|false|The ID of the user to which to address questions regarding the request|
|» State|body|string|true|The state of the request|
|» SubmittedBy|body|integer(int32)|false|The ID of the User that submitted the request|
|» TranslatorEmail|body|string|false|The email address for the translator|
|» TranslatorName|body|string|false|The name of the translator|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|NotSubmitted|
|» State|Submitted|
|» State|Cancelled|
|» State|Completed|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-translation-request-accepts-a-translationrequest-object-returns-the-id-of-the-created-object-the-state-of-the-translationrequest-must-be-notsubmitted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.

<a id="opIdTranslationRequests_GetTranslationRequest"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationRequests/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationRequests/{Id}`

No Documentation Found.

<h3 id="get-a-translationrequest-object-by-id-returns-translationrequest-object-with-its-language-ids-and-string-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "ApprovalUserId": 0,
  "CCEmailAddresses": [
    "string"
  ],
  "ChargeToAccount": "string",
  "Deadline": "1970-01-01T00:00:00Z",
  "Id": 0,
  "LocaleIds": [
    0
  ],
  "Notes": "string",
  "QuestionsUserId": 0,
  "State": "NotSubmitted",
  "SubmittedBy": 0,
  "TranslatorEmail": "string",
  "TranslatorName": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-translationrequest-object-by-id-returns-translationrequest-object-with-its-language-ids-and-string-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.TranslationRequest](#schemaglobalresources.shared.models.translationrequest)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a TranslationRequest object by id. Accepts a TranslationRequest object.

<a id="opIdTranslationRequests_UpdateTranslationRequest"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationRequests/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ApprovalUserId": 0,
    "CCEmailAddresses": [
      "string"
    ],
    "ChargeToAccount": "string",
    "Deadline": "1970-01-01T00:00:00Z",
    "Id": 0,
    "LocaleIds": [
      0
    ],
    "Notes": "string",
    "QuestionsUserId": 0,
    "State": "NotSubmitted",
    "SubmittedBy": 0,
    "TranslatorEmail": "string",
    "TranslatorName": "string"
  }'
```

`PUT /api/v2/TranslationRequests/{Id}`

No Documentation Found.

> Body parameter

```json
{
  "ApprovalUserId": 0,
  "CCEmailAddresses": [
    "string"
  ],
  "ChargeToAccount": "string",
  "Deadline": "1970-01-01T00:00:00Z",
  "Id": 0,
  "LocaleIds": [
    0
  ],
  "Notes": "string",
  "QuestionsUserId": 0,
  "State": "NotSubmitted",
  "SubmittedBy": 0,
  "TranslatorEmail": "string",
  "TranslatorName": "string"
}
```

<h3 id="update-a-translationrequest-object-by-id-accepts-a-translationrequest-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|integer(int32)|true|none|
|doResendRequest|query|boolean|false|none|
|body|body|[GlobalResources.Shared.Models.TranslationRequest](#schemaglobalresources.shared.models.translationrequest)|true|none|
|» ApprovalUserId|body|integer(int32)|false|The ID of the user from which approval for the request is required|
|» CCEmailAddresses|body|[string]|true|Additional email addresses to CC on emails pertaining to the request|
|» ChargeToAccount|body|string|true|The account to charge for the request|
|» Deadline|body|string(date-time)|true|The date by which the translations in the request are needed. Defaults to 30 days from the current date|
|» Id|body|integer(int32)|false|The ID of the request|
|» LocaleIds|body|[integer(int32)]|true|Locale IDs to which these strings are requested to be translated|
|» Notes|body|string|true|Additional notes or comments about the request|
|» QuestionsUserId|body|integer(int32)|false|The ID of the user to which to address questions regarding the request|
|» State|body|string|true|The state of the request|
|» SubmittedBy|body|integer(int32)|false|The ID of the User that submitted the request|
|» TranslatorEmail|body|string|false|The email address for the translator|
|» TranslatorName|body|string|false|The name of the translator|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|NotSubmitted|
|» State|Submitted|
|» State|Cancelled|
|» State|Completed|

<h3 id="update-a-translationrequest-object-by-id-accepts-a-translationrequest-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdTranslationRequests_UpdateTranslationRequestStrings"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationRequests/0/Strings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    "string"
  ]'
```

`PUT /api/v2/TranslationRequests/{Id}/Strings`

No Documentation Found.

> Body parameter

```json
[
  "string"
]
```

<h3 id="no-documentation-found-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|integer(int32)|true|none|
|body|body|[string]|true|none|

<h3 id="no-documentation-found-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-translationsets">TranslationSets</h1>

## No Documentation Found.

<a id="opIdTranslationSets_UpdateTranslationSetAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSetAttributes/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ]'
```

`PUT /api/v2/TranslationSetAttributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ID": 0,
    "Name": "string",
    "TranslationSetID": 0,
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)]|true|none|

<h3 id="no-documentation-found-7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a TranslationSetAttribute object

<a id="opIdTranslationSets_UpdateTranslationSetAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSetAttributes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ID": 0,
    "Name": "string",
    "TranslationSetID": 0,
    "Value": "string"
  }'
```

`PUT /api/v2/TranslationSetAttributes/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "ID": 0,
  "Name": "string",
  "TranslationSetID": 0,
  "Value": "string"
}
```

<h3 id="update-a-translationsetattribute-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)|true|none|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» TranslationSetID|body|integer(int32)|false|The ID of the translation set to which this attribute belongs.|
|» Value|body|string|false|The value of this Attribute|

<h3 id="update-a-translationsetattribute-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a set of TranslationSetAttribute object

<a id="opIdTranslationSets_DeleteTranslationSetAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSetAttributes/0 \
  -X DELETE
```

`DELETE /api/v2/TranslationSetAttributes/{ID}`

No Documentation Found.

<h3 id="delete-a-set-of-translationsetattribute-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

<h3 id="delete-a-set-of-translationsetattribute-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned

<a id="opIdTranslationSets_GetTranslationSets"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets`

No Documentation Found.

<h3 id="get-a-pagedresponse-of-translationset-objects-related-translationsetstrings-are-not-returned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|translationRequestID|query|integer(int32)|false|none|
|state|query|string|false|none|
|stringId|query|string|false|none|
|languageId|query|integer(int32)|false|none|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|OutForProcessing|
|state|Processing|
|state|PendingApproval|
|state|OutForTranslation|
|state|Cancelled|
|state|Completed|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ID": 0,
          "Name": "string",
          "TranslationSetID": 0,
          "Value": "string"
        }
      ],
      "FileIDs": [
        "string"
      ],
      "Id": 0,
      "InDate": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "OutDate": "1970-01-01T00:00:00Z",
      "State": "OutForProcessing",
      "TranslationRequestID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-pagedresponse-of-translationset-objects-related-translationsetstrings-are-not-returned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.TranslationSet_](#schemaapi.ipagedresponse_globalresources.shared.models.translationset_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.

<a id="opIdTranslationSets_GetTranslationSet"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets/{ID}`

No Documentation Found.

<h3 id="get-a-translationset-object-by-its-id-related-translationsetstrings-are-not-returned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|includeAttributes|query|string|false|Names of Attributes to include when retrieving this Translation set. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included.|

> Example responses

> 200 Response

```json
{
  "Attributes": [
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ],
  "FileIDs": [
    "string"
  ],
  "Id": 0,
  "InDate": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "OutDate": "1970-01-01T00:00:00Z",
  "State": "OutForProcessing",
  "TranslationRequestID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-translationset-object-by-its-id-related-translationsetstrings-are-not-returned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.TranslationSet](#schemaglobalresources.shared.models.translationset)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.

<a id="opIdTranslationSets_UpdateTranslationSet"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Attributes": [
      {
        "ID": 0,
        "Name": "string",
        "TranslationSetID": 0,
        "Value": "string"
      }
    ],
    "FileIDs": [
      "string"
    ],
    "Id": 0,
    "InDate": "1970-01-01T00:00:00Z",
    "Notes": "string",
    "OutDate": "1970-01-01T00:00:00Z",
    "State": "OutForProcessing",
    "TranslationRequestID": 0
  }'
```

`PUT /api/v2/TranslationSets/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "Attributes": [
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ],
  "FileIDs": [
    "string"
  ],
  "Id": 0,
  "InDate": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "OutDate": "1970-01-01T00:00:00Z",
  "State": "OutForProcessing",
  "TranslationRequestID": 0
}
```

<h3 id="update-a-translation-set-accepts-a-translationset-object-only-the-state-property-may-be-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[GlobalResources.Shared.Models.TranslationSet](#schemaglobalresources.shared.models.translationset)|true|none|
|» Attributes|body|[[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)]|false|Attributes of the Translation Set|
|» FileIDs|body|[string]|true|IDs for files related to this translation set. For example, the original and processed files|
|» Id|body|integer(int32)|false|The id of the TranslationSet.|
|» InDate|body|string(date-time)|false|Read Only. The date the translation set was returned.|
|» Notes|body|string|false|Notes on the TranslationSet|
|» OutDate|body|string(date-time)|false|Read Only. The date the translation set was sent out.|
|» State|body|string|true|An enum indicating the state of the translation set|
|» TranslationRequestID|body|integer(int32)|false|Read Only. The Id of the TranslationRequest which generated this translation set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|OutForProcessing|
|» State|Processing|
|» State|PendingApproval|
|» State|OutForTranslation|
|» State|Cancelled|
|» State|Completed|

<h3 id="update-a-translation-set-accepts-a-translationset-object-only-the-state-property-may-be-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a PagedResponse of TranslationSetAttribute objects

<a id="opIdTranslationSets_GetTranslationSetAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Attributes \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets/{ID}/Attributes`

No Documentation Found.

<h3 id="get-a-pagedresponse-of-translationsetattribute-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-pagedresponse-of-translationsetattribute-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetAttribute_](#schemaapi.ipagedresponse_globalresources.shared.models.translationsetattribute_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a TranslationSetAttribute object

<a id="opIdTranslationSets_PostTranslationSetAttribute"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ID": 0,
    "Name": "string",
    "TranslationSetID": 0,
    "Value": "string"
  }'
```

`POST /api/v2/TranslationSets/{ID}/Attributes`

No Documentation Found.

> Body parameter

```json
{
  "ID": 0,
  "Name": "string",
  "TranslationSetID": 0,
  "Value": "string"
}
```

<h3 id="create-a-translationsetattribute-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)|true|none|
|» ID|body|integer(int32)|false|The ID of this attribute.|
|» Name|body|string|true|The name of this Attribute.|
|» TranslationSetID|body|integer(int32)|false|The ID of the translation set to which this attribute belongs.|
|» Value|body|string|false|The value of this Attribute|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-translationsetattribute-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdTranslationSets_PostTranslationSetAttributes"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Attributes/Batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ]'
```

`POST /api/v2/TranslationSets/{ID}/Attributes/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ID": 0,
    "Name": "string",
    "TranslationSetID": 0,
    "Value": "string"
  }
]
```

<h3 id="no-documentation-found-8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)]|true|none|

<h3 id="no-documentation-found-8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the information needed to translate a string in a translation set

<a id="opIdTranslationSets_GetSourceStrings"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/SourceStrings \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets/{ID}/SourceStrings`

No Documentation Found.

<h3 id="gets-the-information-needed-to-translate-a-string-in-a-translation-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "DescriptionForTranslator": "string",
      "LanguageID": 0,
      "StringID": "string",
      "StringValue": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-the-information-needed-to-translate-a-string-in-a-translation-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetSourceString_](#schemaapi.ipagedresponse_globalresources.shared.models.translationsetsourcestring_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the statistics for translation sets such as the language ids and count of string definitions.

<a id="opIdTranslationSets_GetStatistics"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Statistics \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets/{ID}/Statistics`

No Documentation Found.

<h3 id="gets-the-statistics-for-translation-sets-such-as-the-language-ids-and-count-of-string-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "LanguageIDs": [
    0
  ],
  "StringCount": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="gets-the-statistics-for-translation-sets-such-as-the-language-ids-and-count-of-string-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GlobalResources.Shared.Models.TranslationSetStatistics](#schemaglobalresources.shared.models.translationsetstatistics)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a PagedResponse of TranslationSetString objects

<a id="opIdTranslationSets_GetTranslationSetStrings"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Strings \
  -H 'Accept: application/json'
```

`GET /api/v2/TranslationSets/{ID}/Strings`

No Documentation Found.

<h3 id="get-a-pagedresponse-of-translationsetstring-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "LanguageID": 0,
      "StringID": "string",
      "StringValue": "string",
      "TranslationSetId": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-pagedresponse-of-translationsetstring-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetString_](#schemaapi.ipagedresponse_globalresources.shared.models.translationsetstring_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdTranslationSets_UpdateTranslationSetStrings"></a>

> Code samples

```bash
curl https://example.com/api/v2/TranslationSets/0/Strings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "LanguageID": 0,
      "StringID": "string",
      "StringValue": "string",
      "TranslationSetId": 0
    }
  ]'
```

`PUT /api/v2/TranslationSets/{ID}/Strings`

No Documentation Found.

> Body parameter

```json
[
  {
    "LanguageID": 0,
    "StringID": "string",
    "StringValue": "string",
    "TranslationSetId": 0
  }
]
```

<h3 id="no-documentation-found-9-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|integer(int32)|true|none|
|body|body|[[GlobalResources.Shared.Models.TranslationSetString](#schemaglobalresources.shared.models.translationsetstring)]|true|none|

<h3 id="no-documentation-found-9-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-updategroupclientrelationships">UpdateGroupClientRelationships</h1>

## Get a list of current Client Subscriptions.

<a id="opIdUpdateGroupClientRelationships_GetSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupClientRelationships \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroupClientRelationships`

No Documentation Found.

<h3 id="get-a-list-of-current-client-subscriptions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|false|Optional. Filter by Client ID|
|UpdateGroupID|query|string|false|Optional. Filter by Update Group ID|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|Active|query|boolean|false|Optional. Filter by Active|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "RelationshipID": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-current-client-subscriptions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroupClientRelationship_](#schemaapi.pagedresponse_updatesystem.models.updategroupclientrelationship_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## DEPRECATED. Set client subscription status for an update group.

<a id="opIdUpdateGroupClientRelationships_PutSubscriptionByClientIDUpdateGroupID"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/UpdateGroupClientRelationships?ClientID=string&UpdateGroupID=string&Active=true' \
  -X PUT
```

`PUT /api/v2/UpdateGroupClientRelationships`

No Documentation Found.

<h3 id="deprecated-set-client-subscription-status-for-an-update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ClientID|query|string|true|The Client ID.  This can be a client ID that has not been registered yet.|
|UpdateGroupID|query|string|true|The Update Group ID|
|Active|query|boolean|true|Subscribe the client to the Update Group.|

<h3 id="deprecated-set-client-subscription-status-for-an-update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a subscription

<a id="opIdUpdateGroupClientRelationships_PostSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupClientRelationships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Active": true,
    "ClientID": "string",
    "LastCheckin": "1970-01-01T00:00:00Z",
    "RelationshipID": "string",
    "UpdateGroupID": "string"
  }'
```

`POST /api/v2/UpdateGroupClientRelationships`

No Documentation Found.

> Body parameter

```json
{
  "Active": true,
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "RelationshipID": "string",
  "UpdateGroupID": "string"
}
```

<h3 id="add-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.UpdateGroupClientRelationship](#schemaupdatesystem.models.updategroupclientrelationship)|true|The UpdateGroupClientRelationship to add.|
|» Active|body|boolean|false|The subscription status.  The status is active by default.|
|» ClientID|body|string|true|Read Only after creation. The client id of the subscriber.|
|» LastCheckin|body|string(date-time)|false|ReadOnly. The timestamp of the last checkin.|
|» RelationshipID|body|string|false|Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.|
|» UpdateGroupID|body|string|true|Read Only after creation. The update group to subscribe to.|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a subscription by RelationshipID

<a id="opIdUpdateGroupClientRelationships_GetSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupClientRelationships/string \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroupClientRelationships/{RelationshipID}`

No Documentation Found.

<h3 id="get-a-subscription-by-relationshipid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RelationshipID|path|string|true|The RelationshipID.|

> Example responses

> 200 Response

```json
{
  "Active": true,
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "RelationshipID": "string",
  "UpdateGroupID": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-subscription-by-relationshipid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.UpdateGroupClientRelationship](#schemaupdatesystem.models.updategroupclientrelationship)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a Subscription

<a id="opIdUpdateGroupClientRelationships_PutSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupClientRelationships/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Active": true,
    "ClientID": "string",
    "LastCheckin": "1970-01-01T00:00:00Z",
    "RelationshipID": "string",
    "UpdateGroupID": "string"
  }'
```

`PUT /api/v2/UpdateGroupClientRelationships/{RelationshipID}`

No Documentation Found.

> Body parameter

```json
{
  "Active": true,
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "RelationshipID": "string",
  "UpdateGroupID": "string"
}
```

<h3 id="updates-a-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RelationshipID|path|string|true|The relationship id of the UpdateGroupClientRelationship|
|body|body|[UpdateSystem.Models.UpdateGroupClientRelationship](#schemaupdatesystem.models.updategroupclientrelationship)|true|The updated UpdateGroupClientRelationship|
|» Active|body|boolean|false|The subscription status.  The status is active by default.|
|» ClientID|body|string|true|Read Only after creation. The client id of the subscriber.|
|» LastCheckin|body|string(date-time)|false|ReadOnly. The timestamp of the last checkin.|
|» RelationshipID|body|string|false|Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.|
|» UpdateGroupID|body|string|true|Read Only after creation. The update group to subscribe to.|

<h3 id="updates-a-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-updategroupsubscriptions">UpdateGroupSubscriptions</h1>

## Get Update Group Subscriptions

<a id="opIdUpdateGroupSubscriptions_GetUpdateGroupSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroupSubscriptions`

No Documentation Found.

<h3 id="get-update-group-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupID|query|string|false|Optional. Filter by Update Group ID.|
|PackageTypeID|query|string|false|Optional. Filter by Package Type ID.|
|ClientID|query|string|false|Optional. Filter by Client ID.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "Include": true,
      "PackageTypeID": "string",
      "UpdateGroupID": "string",
      "UpdateGroupSubscriptionID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-update-group-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroupSubscription_](#schemaapi.pagedresponse_updatesystem.models.updategroupsubscription_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an Update Group Subscription

<a id="opIdUpdateGroupSubscriptions_PostUpdateGroupSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ClientID": "string",
    "Include": true,
    "PackageTypeID": "string",
    "UpdateGroupID": "string",
    "UpdateGroupSubscriptionID": 0
  }'
```

`POST /api/v2/UpdateGroupSubscriptions`

No Documentation Found.

> Body parameter

```json
{
  "ClientID": "string",
  "Include": true,
  "PackageTypeID": "string",
  "UpdateGroupID": "string",
  "UpdateGroupSubscriptionID": 0
}
```

<h3 id="add-an-update-group-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)|true|The Update Group Subscription to add|
|» ClientID|body|string|true|The ClientID.|
|» Include|body|boolean|true|True to receive content of type indicated by PackageTypeID.|
|» PackageTypeID|body|string|true|The PackageType to set subscription status for|
|» UpdateGroupID|body|string|true|The Update Group this subscription is relevant for.|
|» UpdateGroupSubscriptionID|body|integer(int32)|false|The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-an-update-group-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdUpdateGroupSubscriptions_PutUpdateGroupSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions/Batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ClientID": "string",
      "Include": true,
      "PackageTypeID": "string",
      "UpdateGroupID": "string",
      "UpdateGroupSubscriptionID": 0
    }
  ]'
```

`PUT /api/v2/UpdateGroupSubscriptions/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ClientID": "string",
    "Include": true,
    "PackageTypeID": "string",
    "UpdateGroupID": "string",
    "UpdateGroupSubscriptionID": 0
  }
]
```

<h3 id="no-documentation-found-10-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)]|true|none|

<h3 id="no-documentation-found-10-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## No Documentation Found.

<a id="opIdUpdateGroupSubscriptions_PostUpdateGroupSubscriptions"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions/Batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "ClientID": "string",
      "Include": true,
      "PackageTypeID": "string",
      "UpdateGroupID": "string",
      "UpdateGroupSubscriptionID": 0
    }
  ]'
```

`POST /api/v2/UpdateGroupSubscriptions/Batch`

No Documentation Found.

> Body parameter

```json
[
  {
    "ClientID": "string",
    "Include": true,
    "PackageTypeID": "string",
    "UpdateGroupID": "string",
    "UpdateGroupSubscriptionID": 0
  }
]
```

<h3 id="no-documentation-found-11-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)]|true|none|

<h3 id="no-documentation-found-11-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Update Group Subscription

<a id="opIdUpdateGroupSubscriptions_GetUpdateGroupSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}`

No Documentation Found.

<h3 id="get-an-update-group-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupSubscriptionID|path|integer(int32)|true|The Update Group Subscription ID|

> Example responses

> 200 Response

```json
{
  "ClientID": "string",
  "Include": true,
  "PackageTypeID": "string",
  "UpdateGroupID": "string",
  "UpdateGroupSubscriptionID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-update-group-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Update Group Subscription

<a id="opIdUpdateGroupSubscriptions_PutUpdateGroupSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ClientID": "string",
    "Include": true,
    "PackageTypeID": "string",
    "UpdateGroupID": "string",
    "UpdateGroupSubscriptionID": 0
  }'
```

`PUT /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}`

No Documentation Found.

> Body parameter

```json
{
  "ClientID": "string",
  "Include": true,
  "PackageTypeID": "string",
  "UpdateGroupID": "string",
  "UpdateGroupSubscriptionID": 0
}
```

<h3 id="update-an-update-group-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupSubscriptionID|path|integer(int32)|true|The Update Group Subscription ID|
|body|body|[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)|true|The updated Update Group Subscription|
|» ClientID|body|string|true|The ClientID.|
|» Include|body|boolean|true|True to receive content of type indicated by PackageTypeID.|
|» PackageTypeID|body|string|true|The PackageType to set subscription status for|
|» UpdateGroupID|body|string|true|The Update Group this subscription is relevant for.|
|» UpdateGroupSubscriptionID|body|integer(int32)|false|The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.|

<h3 id="update-an-update-group-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Update Group Subscription

<a id="opIdUpdateGroupSubscriptions_DeleteUpdateGroupSubscription"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroupSubscriptions/0 \
  -X DELETE
```

`DELETE /api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}`

No Documentation Found.

<h3 id="delete-an-update-group-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UpdateGroupSubscriptionID|path|integer(int32)|true|The Update Group Subscription ID to delete|

<h3 id="delete-an-update-group-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-updategroups">UpdateGroups</h1>

## Get a list of Update Groups. Update Groups are used by the client to register for a specific type of update.

<a id="opIdUpdateGroups_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroups`

No Documentation Found.

<h3 id="get-a-list-of-update-groups-update-groups-are-used-by-the-client-to-register-for-a-specific-type-of-update-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|
|userID|query|integer(int32)|false|Optional. The user ID to sort update groups by the user's access|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Description": "string",
      "ID": "string",
      "InventoryFrequency": 0,
      "InventoryPackage": "string",
      "LocalizedDescription": "string",
      "LocalizedName": "string",
      "Priority": 1,
      "ReportField": "string",
      "UpdateType": "string",
      "ValidatingField": "string",
      "ValueToValidate": "string",
      "Version": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-update-groups-update-groups-are-used-by-the-client-to-register-for-a-specific-type-of-update-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.UpdateGroup_](#schemaapi.pagedresponse_updatesystem.models.updategroup_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new Update Group. The report field is a string that has a dot based request for a specific piece of submitted data.

<a id="opIdUpdateGroups_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Description": "string",
    "ID": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "Priority": 1,
    "ReportField": "string",
    "UpdateType": "string",
    "ValidatingField": "string",
    "ValueToValidate": "string",
    "Version": "string"
  }'
```

`POST /api/v2/UpdateGroups`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "ID": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "Priority": 1,
  "ReportField": "string",
  "UpdateType": "string",
  "ValidatingField": "string",
  "ValueToValidate": "string",
  "Version": "string"
}
```

<h3 id="add-a-new-update-group-the-report-field-is-a-string-that-has-a-dot-based-request-for-a-specific-piece-of-submitted-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSystem.Models.UpdateGroup](#schemaupdatesystem.models.updategroup)|true|none|
|» Description|body|string|true|The description of the update group|
|» ID|body|string|false|none|
|» InventoryFrequency|body|integer(int32)|false|The time in minutes between inventory checks. Default value is 1440 minutes (one day).|
|» InventoryPackage|body|string|false|The Package ID of the package used for inventory|
|» LocalizedDescription|body|string|false|Optional. The StringID used to localize the description of the update group|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the update group|
|» Priority|body|integer(int32)|true|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|» ReportField|body|string|false|A field to return in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|» UpdateType|body|string|true|The update type name|
|» ValidatingField|body|string|false|A field used for validation in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|» ValueToValidate|body|string|false|The value to validate the ValidationField against.|
|» Version|body|string(byte)|false|The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="add-a-new-update-group-the-report-field-is-a-string-that-has-a-dot-based-request-for-a-specific-piece-of-submitted-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Update Group by ID.

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups/string \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroups/{ID}`

No Documentation Found.

<h3 id="get-a-specific-update-group-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the Update Group|

> Example responses

> 200 Response

```json
{
  "Description": "string",
  "ID": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "Priority": 1,
  "ReportField": "string",
  "UpdateType": "string",
  "ValidatingField": "string",
  "ValueToValidate": "string",
  "Version": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-specific-update-group-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSystem.Models.UpdateGroup](#schemaupdatesystem.models.updategroup)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Modify an Update Group.

<a id="opIdUpdateGroups_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Description": "string",
    "ID": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "Priority": 1,
    "ReportField": "string",
    "UpdateType": "string",
    "ValidatingField": "string",
    "ValueToValidate": "string",
    "Version": "string"
  }'
```

`PUT /api/v2/UpdateGroups/{ID}`

No Documentation Found.

> Body parameter

```json
{
  "Description": "string",
  "ID": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "Priority": 1,
  "ReportField": "string",
  "UpdateType": "string",
  "ValidatingField": "string",
  "ValueToValidate": "string",
  "Version": "string"
}
```

<h3 id="modify-an-update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|ID of the Update Group|
|body|body|[UpdateSystem.Models.UpdateGroup](#schemaupdatesystem.models.updategroup)|true|The Update Group to update.|
|» Description|body|string|true|The description of the update group|
|» ID|body|string|false|none|
|» InventoryFrequency|body|integer(int32)|false|The time in minutes between inventory checks. Default value is 1440 minutes (one day).|
|» InventoryPackage|body|string|false|The Package ID of the package used for inventory|
|» LocalizedDescription|body|string|false|Optional. The StringID used to localize the description of the update group|
|» LocalizedName|body|string|false|Optional. The StringID used to localize the name of the update group|
|» Priority|body|integer(int32)|true|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|» ReportField|body|string|false|A field to return in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|» UpdateType|body|string|true|The update type name|
|» ValidatingField|body|string|false|A field used for validation in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|» ValueToValidate|body|string|false|The value to validate the ValidationField against.|
|» Version|body|string(byte)|false|The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType|

<h3 id="modify-an-update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Update Group.

<a id="opIdUpdateGroups_Delete"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups/string \
  -X DELETE
```

`DELETE /api/v2/UpdateGroups/{ID}`

No Documentation Found.

<h3 id="delete-an-update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The ID of the Update Group to Delete|

<h3 id="delete-an-update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of bundles for UpdateGroup.

<a id="opIdUpdateGroups_GetUpdateGroupBundles"></a>

> Code samples

```bash
curl 'https://example.com/api/v2/UpdateGroups/string/Bundles?IncludeInactive=true' \
  -H 'Accept: application/json'
```

`GET /api/v2/UpdateGroups/{ID}/Bundles`

No Documentation Found.

<h3 id="get-a-list-of-bundles-for-updategroup-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ID|path|string|true|The UpdateGroupID|
|IncludeInactive|query|boolean|true|Include Inactive Bundles (true\|false)|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Active": true,
      "BundleID": "string",
      "BundleNumber": 0,
      "Description": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-list-of-bundles-for-updategroup-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_UpdateSystem.Models.Bundle_](#schemaapi.pagedresponse_updatesystem.models.bundle_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an updateGroup that a user can see.

<a id="opIdUpdateGroups_AddUpdateGroupUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups/string/Users/0 \
  -X POST
```

`POST /api/v2/UpdateGroups/{id}/Users/{userID}`

No Documentation Found.

<h3 id="add-an-updategroup-that-a-user-can-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the update group|
|userID|path|integer(int32)|true|The userID to link to the update group|

<h3 id="add-an-updategroup-that-a-user-can-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes an update group a user could see.

<a id="opIdUpdateGroups_RemoveUpdateGroupUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/UpdateGroups/string/Users/0 \
  -X DELETE
```

`DELETE /api/v2/UpdateGroups/{id}/Users/{userID}`

No Documentation Found.

<h3 id="deletes-an-update-group-a-user-could-see-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the update group|
|userID|path|integer(int32)|true|The userID to link to the update group|

<h3 id="deletes-an-update-group-a-user-could-see-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-usercontentdefinitions">UserContentDefinitions</h1>

## Get UserContentDefinitions

<a id="opIdUserContentDefinitions_GetUserContentDefinitions"></a>

> Code samples

```bash
curl https://example.com/api/v2/UserContentDefinitions \
  -H 'Accept: application/json'
```

`GET /api/v2/UserContentDefinitions`

Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-usercontentdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|userID|query|integer(int32)|false|Optional. Filter by UserID.|
|contentDefinitionID|query|integer(int32)|false|Optional. Filter by ContentDefinitionID|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "UserContentDefinitionID": 0,
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-usercontentdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_ContentSubmission.Shared.BusinessEntities.UserContentDefinition_](#schemaapi.pagedresponse_contentsubmission.shared.businessentities.usercontentdefinition_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a UserContentDefinition

<a id="opIdUserContentDefinitions_PostUserContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/UserContentDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ContentDefinitionID": 0,
    "UserContentDefinitionID": 0,
    "UserID": 0
  }'
```

`POST /api/v2/UserContentDefinitions`

Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
            The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
            is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "ContentDefinitionID": 0,
  "UserContentDefinitionID": 0,
  "UserID": 0
}
```

<h3 id="create-a-usercontentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#schemacontentsubmission.shared.businessentities.usercontentdefinition)|true|The UserContentDefinition to create.|
|» ContentDefinitionID|body|integer(int32)|false|The ID of the ContentDefinition.|
|» UserContentDefinitionID|body|integer(int32)|false|Read Only. The ID of the User to ContentDefinition relationship.|
|» UserID|body|integer(int32)|false|The ID of the user.|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-usercontentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a UserContentDefinition by ID

<a id="opIdUserContentDefinitions_GetUserContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/UserContentDefinitions/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/UserContentDefinitions/{userContentDefinitionID}`

Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-usercontentdefinition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userContentDefinitionID|path|integer(int32)|true|The ID of the UserContentDefinition to get.|

> Example responses

> 200 Response

```json
{
  "ContentDefinitionID": 0,
  "UserContentDefinitionID": 0,
  "UserID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-usercontentdefinition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#schemacontentsubmission.shared.businessentities.usercontentdefinition)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a UserContentDefinition

<a id="opIdUserContentDefinitions_DeleteUserContentDefinition"></a>

> Code samples

```bash
curl https://example.com/api/v2/UserContentDefinitions/0 \
  -X DELETE
```

`DELETE /api/v2/UserContentDefinitions/{userContentDefinitionID}`

Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-a-usercontentdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userContentDefinitionID|path|integer(int32)|true|The ID of the UserContentDefinition to delete|

<h3 id="delete-a-usercontentdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-users">Users</h1>

## Get users

<a id="opIdUsers_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users \
  -H 'Accept: application/json'
```

`GET /api/v2/Users`

No Documentation Found.

<h3 id="get-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|false|Optional. Search by username. Supports beginning and ending wildcards (*).|
|email|query|string|false|Optional. Search by email. Supports beginning and ending wildcards (*).|
|name|query|string|false|Optional. Search by name. Supports beginning and ending wildcards (*).|
|hasRole|query|string|false|Optional. Return only users having the provided role name.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ChangePassword": "string",
      "Email": "string",
      "Name": "string",
      "Password": "string",
      "UserID": 0,
      "Username": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="get-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_API.Models.User_](#schemaapi.pagedresponse_api.models.user_)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a user

<a id="opIdUsers_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ChangePassword": "string",
    "Email": "string",
    "Name": "string",
    "Password": "string",
    "UserID": 0,
    "Username": "string"
  }'
```

`POST /api/v2/Users`

No Documentation Found.

> Body parameter

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.User](#schemaapi.models.user)|true|The user to create.|
|» ChangePassword|body|string|false|Never Returned.  When changing a user's password, this field must contain the new password.|
|» Email|body|string|false|The user's email address|
|» Name|body|string|false|The user's name|
|» Password|body|string|false|Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.|
|» UserID|body|integer(int32)|false|The user ID|
|» Username|body|string|false|The username used for authentication|

> Example responses

> 200 Response

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.User](#schemaapi.models.user)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the current user

<a id="opIdUsers_GetCurrentUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/Current \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/Current`

No Documentation Found.

> Example responses

> 200 Response

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="gets-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.User](#schemaapi.models.user)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdUsers_PutCurrentUser"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/Current \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ChangePassword": "string",
    "Email": "string",
    "Name": "string",
    "Password": "string",
    "UserID": 0,
    "Username": "string"
  }'
```

`PUT /api/v2/Users/Current`

No Documentation Found.

> Body parameter

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[API.Models.User](#schemaapi.models.user)|true|The user|
|» ChangePassword|body|string|false|Never Returned.  When changing a user's password, this field must contain the new password.|
|» Email|body|string|false|The user's email address|
|» Name|body|string|false|The user's name|
|» Password|body|string|false|Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.|
|» UserID|body|integer(int32)|false|The user ID|
|» Username|body|string|false|The username used for authentication|

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific user

> Code samples

```bash
curl https://example.com/api/v2/Users/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/Users/{id}`

No Documentation Found.

<h3 id="get-a-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The user ID|

> Example responses

> 200 Response

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="get-a-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.Models.User](#schemaapi.models.user)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdUsers_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ChangePassword": "string",
    "Email": "string",
    "Name": "string",
    "Password": "string",
    "UserID": 0,
    "Username": "string"
  }'
```

`PUT /api/v2/Users/{id}`

No Documentation Found.

> Body parameter

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

<h3 id="update-a-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The user id|
|body|body|[API.Models.User](#schemaapi.models.user)|true|The user|
|» ChangePassword|body|string|false|Never Returned.  When changing a user's password, this field must contain the new password.|
|» Email|body|string|false|The user's email address|
|» Name|body|string|false|The user's name|
|» Password|body|string|false|Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.|
|» UserID|body|integer(int32)|false|The user ID|
|» Username|body|string|false|The username used for authentication|

<h3 id="update-a-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user

<a id="opIdUsers_Delete"></a>

> Code samples

```bash
curl https://example.com/api/v2/Users/0 \
  -X DELETE
```

`DELETE /api/v2/Users/{id}`

No Documentation Found.

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The user id|

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-voucherhistory">VoucherHistory</h1>

## Gets voucher history data

<a id="opIdVoucherHistory_GetVoucherHistory"></a>

> Code samples

```bash
curl https://example.com/api/v2/VoucherHistory \
  -H 'Accept: application/json'
```

`GET /api/v2/VoucherHistory`

No Documentation Found.

<h3 id="gets-voucher-history-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|query|string|false|Optional. Filter history data by Voucher Code.|
|ChangedBefore|query|string(date-time)|false|Optional. Filter history data where changes occured before provided date.|
|ChangedAfter|query|string(date-time)|false|Optional. Filter history data where changes occured after provided date.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ChangedDate": "1970-01-01T00:00:00Z",
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Deleted": true,
      "Email": "string",
      "ExpirationDate": "1970-01-01T00:00:00Z",
      "ID": 0,
      "LicenseTo": "string",
      "ModifiedBy": "string",
      "OrderNumber": "string",
      "Punched": true,
      "PunchedDate": "1970-01-01T00:00:00Z",
      "Purpose": "string",
      "Type": "Commercial",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="gets-voucher-history-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.VoucherHistory_](#schemaapi.pagedresponse_dealerdb.models.voucherhistory_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-vouchers">Vouchers</h1>

## Gets a list of vouchers

<a id="opIdVouchers_Get"></a>

> Code samples

```bash
curl https://example.com/api/v2/Vouchers \
  -H 'Accept: application/json'
```

`GET /api/v2/Vouchers`

No Documentation Found.

<h3 id="gets-a-list-of-vouchers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|Optional. Filter vouchers by Type|
|DealerCode|query|string|false|Optional. Filter vouchers by DealerCode|
|LicenseTo|query|string|false|Optional. Filter vouchers by LicenseTo. Wildcard supported (*).|
|Purpose|query|string|false|Optional. Filter vouchers by Purpose. Wildcard supported (*).|
|OrderNumber|query|string|false|Optional. Filter vouchers by OrderNumber|
|Email|query|string|false|Optional. Filter vouchers by Email. Wildcard supported (*).|
|ModifiedBy|query|string|false|Optional. Filter vouchers by ModifiedBy|
|CreatedAfter|query|string(date-time)|false|Optional. Filter vouchers by CreatedDate|
|CreatedBefore|query|string(date-time)|false|Optional. Filter vouchers by CreatedDate|
|PunchedAfter|query|string(date-time)|false|Optional. Filter vouchers by PunchedDate|
|PunchedBefore|query|string(date-time)|false|Optional. Filter vouchers by PunchedDate|
|Punched|query|boolean|false|Optional. Filter vouchers by Punched status|
|ExpirationAfter|query|string(date-time)|false|Optional. Filter vouchers by ExpirationDate|
|ExpirationBefore|query|string(date-time)|false|Optional. Filter vouchers by ExpirationDate|
|Deleted|query|string|false|Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|Commercial|
|Type|Internal|
|Type|Temporary|
|Type|RightToRepair|
|Deleted|NotDeleted|
|Deleted|Deleted|
|Deleted|All|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Deleted": true,
      "Email": "string",
      "ExpirationDate": "1970-01-01T00:00:00Z",
      "LicenseTo": "string",
      "ModifiedBy": "string",
      "OrderNumber": "string",
      "Punched": true,
      "PunchedDate": "1970-01-01T00:00:00Z",
      "Purpose": "string",
      "Type": "Commercial",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="gets-a-list-of-vouchers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.Voucher_](#schemaapi.pagedresponse_dealerdb.models.voucher_)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a voucher

<a id="opIdVouchers_Post"></a>

> Code samples

```bash
curl https://example.com/api/v2/Vouchers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DealerCode": "string",
    "Deleted": true,
    "Email": "string",
    "ExpirationDate": "1970-01-01T00:00:00Z",
    "LicenseTo": "string",
    "ModifiedBy": "string",
    "OrderNumber": "string",
    "Punched": true,
    "PunchedDate": "1970-01-01T00:00:00Z",
    "Purpose": "string",
    "Type": "Commercial",
    "VoucherCode": "string"
  }'
```

`POST /api/v2/Vouchers`

No Documentation Found.

> Body parameter

```json
{
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Deleted": true,
  "Email": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "LicenseTo": "string",
  "ModifiedBy": "string",
  "OrderNumber": "string",
  "Punched": true,
  "PunchedDate": "1970-01-01T00:00:00Z",
  "Purpose": "string",
  "Type": "Commercial",
  "VoucherCode": "string"
}
```

<h3 id="create-a-voucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DealerDB.Models.Voucher](#schemadealerdb.models.voucher)|true|The voucher to add.|
|» CreatedDate|body|string(date-time)|false|Read-Only. The date the voucher was created.|
|» DealerCode|body|string|false|The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.|
|» Deleted|body|boolean|false|Read-Only. True if voucher has been deleted.|
|» Email|body|string|false|Required for internal vouchers.|
|» ExpirationDate|body|string(date-time)|false|The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.|
|» LicenseTo|body|string|false|Required for Internal Vouchers|
|» ModifiedBy|body|string|false|Read-Only. The user that made the last modification to the voucher.|
|» OrderNumber|body|string|false|The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.|
|» Punched|body|boolean|false|True if voucher has aleady been used.  False if the voucher has not been used.|
|» PunchedDate|body|string(date-time)|false|Read-Only. The date the voucher was punched.|
|» Purpose|body|string|false|Required for Internal Vouchers. Not supported for other Vouchers.|
|» Type|body|string|false|The type of voucher. Commercial is the default if not specified.|
|» VoucherCode|body|string|false|The voucher code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|Commercial|
|» Type|Internal|
|» Type|Temporary|
|» Type|RightToRepair|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-a-voucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get a voucher

> Code samples

```bash
curl https://example.com/api/v2/Vouchers/string \
  -H 'Accept: application/json'
```

`GET /api/v2/Vouchers/{VoucherCode}`

No Documentation Found.

<h3 id="get-a-voucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|path|string|true|The voucher code of the voucher to get.|
|Deleted|query|string|false|Optional. Filter vouchers by Deleted state. By default only vouchers that are not deleted are returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Deleted|NotDeleted|
|Deleted|Deleted|
|Deleted|All|

> Example responses

> 200 Response

```json
{
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Deleted": true,
  "Email": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "LicenseTo": "string",
  "ModifiedBy": "string",
  "OrderNumber": "string",
  "Punched": true,
  "PunchedDate": "1970-01-01T00:00:00Z",
  "Purpose": "string",
  "Type": "Commercial",
  "VoucherCode": "string"
}
```

<h3 id="get-a-voucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DealerDB.Models.Voucher](#schemadealerdb.models.voucher)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a voucher

<a id="opIdVouchers_Put"></a>

> Code samples

```bash
curl https://example.com/api/v2/Vouchers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "CreatedDate": "1970-01-01T00:00:00Z",
    "DealerCode": "string",
    "Deleted": true,
    "Email": "string",
    "ExpirationDate": "1970-01-01T00:00:00Z",
    "LicenseTo": "string",
    "ModifiedBy": "string",
    "OrderNumber": "string",
    "Punched": true,
    "PunchedDate": "1970-01-01T00:00:00Z",
    "Purpose": "string",
    "Type": "Commercial",
    "VoucherCode": "string"
  }'
```

`PUT /api/v2/Vouchers/{VoucherCode}`

No Documentation Found.

> Body parameter

```json
{
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Deleted": true,
  "Email": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "LicenseTo": "string",
  "ModifiedBy": "string",
  "OrderNumber": "string",
  "Punched": true,
  "PunchedDate": "1970-01-01T00:00:00Z",
  "Purpose": "string",
  "Type": "Commercial",
  "VoucherCode": "string"
}
```

<h3 id="update-a-voucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|path|string|true|The voucher code of the voucher to update.|
|body|body|[DealerDB.Models.Voucher](#schemadealerdb.models.voucher)|true|The updated voucher.|
|» CreatedDate|body|string(date-time)|false|Read-Only. The date the voucher was created.|
|» DealerCode|body|string|false|The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.|
|» Deleted|body|boolean|false|Read-Only. True if voucher has been deleted.|
|» Email|body|string|false|Required for internal vouchers.|
|» ExpirationDate|body|string(date-time)|false|The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.|
|» LicenseTo|body|string|false|Required for Internal Vouchers|
|» ModifiedBy|body|string|false|Read-Only. The user that made the last modification to the voucher.|
|» OrderNumber|body|string|false|The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.|
|» Punched|body|boolean|false|True if voucher has aleady been used.  False if the voucher has not been used.|
|» PunchedDate|body|string(date-time)|false|Read-Only. The date the voucher was punched.|
|» Purpose|body|string|false|Required for Internal Vouchers. Not supported for other Vouchers.|
|» Type|body|string|false|The type of voucher. Commercial is the default if not specified.|
|» VoucherCode|body|string|false|The voucher code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|Commercial|
|» Type|Internal|
|» Type|Temporary|
|» Type|RightToRepair|

<h3 id="update-a-voucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a voucher

<a id="opIdVouchers_Delete"></a>

> Code samples

```bash
curl https://example.com/api/v2/Vouchers/string \
  -X DELETE
```

`DELETE /api/v2/Vouchers/{VoucherCode}`

No Documentation Found.

<h3 id="delete-a-voucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|path|string|true|The voucher code of the voucher to delete.|

<h3 id="delete-a-voucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a voucher's history.

<a id="opIdVouchers_GetVoucherHistory"></a>

> Code samples

```bash
curl https://example.com/api/v2/Vouchers/string/VoucherHistory \
  -H 'Accept: application/json'
```

`GET /api/v2/Vouchers/{VoucherCode}/VoucherHistory`

No Documentation Found.

<h3 id="get-a-vouchers-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VoucherCode|path|string|true|The voucher code to get history for.|
|limit|query|integer(int32)|false|Optional. The page limit. The default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset. The default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ChangedDate": "1970-01-01T00:00:00Z",
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Deleted": true,
      "Email": "string",
      "ExpirationDate": "1970-01-01T00:00:00Z",
      "ID": 0,
      "LicenseTo": "string",
      "ModifiedBy": "string",
      "OrderNumber": "string",
      "Punched": true,
      "PunchedDate": "1970-01-01T00:00:00Z",
      "Purpose": "string",
      "Type": "Commercial",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

<h3 id="get-a-vouchers-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_DealerDB.Models.VoucherHistory_](#schemaapi.pagedresponse_dealerdb.models.voucherhistory_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-activities">Activities</h1>

## Get Activities

<a id="opIdActivities_GetActivities"></a>

> Code samples

```bash
curl https://example.com/api/v2/activities \
  -H 'Accept: application/json'
```

`GET /api/v2/activities`

Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.  
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|isIncludeDeleted|query|boolean|false|Does it include deleted activity, or not|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ActivityID": 0,
      "Deleted": true,
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ],
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.Activity_](#schemaapi.pagedresponse_buildsystem.shared.dto.activity_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an Activity

<a id="opIdActivities_PostActivity"></a>

> Code samples

```bash
curl https://example.com/api/v2/activities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActivityID": 0,
    "Deleted": true,
    "Name": "string"
  }'
```

`POST /api/v2/activities`

Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
            on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an 
            appropriate ApiError is returned.

> Body parameter

```json
{
  "ActivityID": 0,
  "Deleted": true,
  "Name": "string"
}
```

<h3 id="create-an-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuildSystem.Shared.DTO.Activity](#schemabuildsystem.shared.dto.activity)|true|The activity to create.  The ActivityID will be assigned on creation of the Activity.|
|» ActivityID|body|integer(int32)|false|The ID of the activity|
|» Deleted|body|boolean|false|none|
|» Name|body|string|false|The name of the activity|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-an-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Activity by ID

<a id="opIdActivities_GetActivity"></a>

> Code samples

```bash
curl https://example.com/api/v2/activities/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/activities/{activityID}`

Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
            an appropriate ApiError is returned.

<h3 id="get-an-activity-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityID|path|integer(int32)|true|The ID of the Activity to get.|
|isIncludeDeleted|query|boolean|false|Does it include deleted activity, or not|

> Example responses

> 200 Response

```json
{
  "ActivityID": 0,
  "Deleted": true,
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ],
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-activity-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.Activity](#schemabuildsystem.shared.dto.activity)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Activity

<a id="opIdActivities_PutActivity"></a>

> Code samples

```bash
curl https://example.com/api/v2/activities/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ActivityID": 0,
    "Deleted": true,
    "Name": "string"
  }'
```

`PUT /api/v2/activities/{activityID}`

Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "ActivityID": 0,
  "Deleted": true,
  "Name": "string"
}
```

<h3 id="update-an-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityID|path|integer(int32)|true|The id of the activity to update|
|body|body|[BuildSystem.Shared.DTO.Activity](#schemabuildsystem.shared.dto.activity)|true|The updated activity|
|» ActivityID|body|integer(int32)|false|The ID of the activity|
|» Deleted|body|boolean|false|none|
|» Name|body|string|false|The name of the activity|

<h3 id="update-an-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mark the delete flag for the Activity

<a id="opIdActivities_DeleteActivity"></a>

> Code samples

```bash
curl https://example.com/api/v2/activities/0 \
  -X DELETE
```

`DELETE /api/v2/activities/{activityID}`

Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="mark-the-delete-flag-for-the-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityID|path|integer(int32)|true|The id of the activity to delete|

<h3 id="mark-the-delete-flag-for-the-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-activityruns">ActivityRuns</h1>

## Get ActivityRuns

<a id="opIdActivityRuns_GetActivityRuns"></a>

> Code samples

```bash
curl https://example.com/api/v2/activityRuns \
  -H 'Accept: application/json'
```

`GET /api/v2/activityRuns`

Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.  
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-activityruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|status|query|string|false|Optional. Filter activity runs by status.  Value should be a comma separated list of status to include.<br>            If not specified, the default status filter is “InProgress”.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|Ready|
|status|InProgress|
|status|Succeeded|
|status|Cancelled|
|status|Failed|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-activityruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.ActivityRun_](#schemaapi.pagedresponse_buildsystem.shared.dto.activityrun_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an ActivityRun by ID

<a id="opIdActivityRuns_GetActivityRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/activityRuns/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/activityRuns/{activityRunID}`

Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
            an appropriate ApiError is returned.

<h3 id="get-an-activityrun-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityRunID|path|integer(int32)|true|The ID of the ActivityRun to get.|

> Example responses

> 200 Response

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  },
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-activityrun-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an ActivityRun

<a id="opIdActivityRuns_PutActivityRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/activityRuns/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ActivityRunID": 0,
    "EndDate": "1970-01-01T00:00:00Z",
    "JobActivityID": 0,
    "JobRunID": 0,
    "StartDate": "1970-01-01T00:00:00Z",
    "Status": {
      "CurrentStep": 0,
      "Status": "Ready",
      "StepProgress": 0,
      "StepStatus": "string"
    }
  }'
```

`PUT /api/v2/activityRuns/{activityRunID}`

Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  }
}
```

<h3 id="update-an-activityrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityRunID|path|integer(int32)|true|The ID of the ActivityRun to update ActivityRunStatus for.|
|body|body|[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)|true|The updated ActivityRun.|
|» ActivityRunID|body|integer(int32)|false|The identifier for the ActivityRun|
|» EndDate|body|string(date-time)|false|Read Only. The UTC date and time when the activity completed|
|» JobActivityID|body|integer(int32)|false|Read Only. The ID of the Job Activity that defines this activity run|
|» JobRunID|body|integer(int32)|false|Read Only. The ID of the JobRun under which this ActivityRun is executing|
|» StartDate|body|string(date-time)|false|Read Only. The UTC date and time when the activity started|
|» Status|body|[BuildSystem.Shared.DTO.ActivityRunStatus](#schemabuildsystem.shared.dto.activityrunstatus)|true|A DTO for an IActivityRunStatus|

<h3 id="update-an-activityrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the ActivityRunStatus of an ActivityRun

<a id="opIdActivityRuns_GetActivityRunStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/activityRuns/0/status \
  -H 'Accept: application/json'
```

`GET /api/v2/activityRuns/{activityRunID}/status`

Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-the-activityrunstatus-of-an-activityrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityRunID|path|integer(int32)|true|The ID of the ActivityRun to get ActivityRunStatus for.|

> Example responses

> 200 Response

```json
{
  "CurrentStep": 0,
  "Status": "Ready",
  "StepProgress": 0,
  "StepStatus": "string"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-activityrunstatus-of-an-activityrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.ActivityRunStatus](#schemabuildsystem.shared.dto.activityrunstatus)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the ActivityRunStatus of an ActivityRun

<a id="opIdActivityRuns_PutActivityRunStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/activityRuns/0/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  }'
```

`PUT /api/v2/activityRuns/{activityRunID}/status`

Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "CurrentStep": 0,
  "Status": "Ready",
  "StepProgress": 0,
  "StepStatus": "string"
}
```

<h3 id="update-the-activityrunstatus-of-an-activityrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityRunID|path|integer(int32)|true|The ID of the ActivityRun to update ActivityRunStatus for.|
|body|body|[BuildSystem.Shared.DTO.ActivityRunStatus](#schemabuildsystem.shared.dto.activityrunstatus)|true|The updated ActivityRunStatus.|
|» CurrentStep|body|integer(int32)|false|The activity step currently executing, indicated by numeric order|
|» Status|body|string|false|The status of the ActivityRun|
|» StepProgress|body|integer(int32)|false|The percent progress from the currently executing step.  This value shall be null if progress is not available|
|» StepStatus|body|string|false|The status text from the currently executing step|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Ready|
|» Status|InProgress|
|» Status|Succeeded|
|» Status|Cancelled|
|» Status|Failed|

<h3 id="update-the-activityrunstatus-of-an-activityrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-agents">Agents</h1>

## Get Agents

<a id="opIdAgents_GetAgents"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents \
  -H 'Accept: application/json'
```

`GET /api/v2/agents`

Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.  
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-agents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "AgentID": 0,
      "KeepAliveInterval": 0,
      "MachineName": "string",
      "Status": {
        "LastStatusUpdate": "1970-01-01T00:00:00Z",
        "Online": true
      },
      "StepConfigurations": [
        {
          "Configurations": [
            "string"
          ],
          "StepImplementationID": "string"
        }
      ],
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.Agent_](#schemaapi.pagedresponse_buildsystem.shared.dto.agent_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an Agent

<a id="opIdAgents_PostAgent"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "AgentID": 0,
    "KeepAliveInterval": 0,
    "MachineName": "string",
    "Status": {
      "LastStatusUpdate": "1970-01-01T00:00:00Z",
      "Online": true
    },
    "UserID": 0
  }'
```

`POST /api/v2/agents`

Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
            on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
            appropriate ApiError is returned.

> Body parameter

```json
{
  "AgentID": 0,
  "KeepAliveInterval": 0,
  "MachineName": "string",
  "Status": {
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  },
  "UserID": 0
}
```

<h3 id="create-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuildSystem.Shared.DTO.Agent](#schemabuildsystem.shared.dto.agent)|true|The Agent to create.  The AgentID will be assigned on creation of the Agent.|
|» AgentID|body|integer(int32)|false|The id of the Agent|
|» KeepAliveInterval|body|integer(int32)|true|The 'Heartbeat Interval' used by the Build Agent.|
|» MachineName|body|string|true|The machine name of the computer the agent is running on|
|» Status|body|[BuildSystem.Shared.DTO.AgentStatus](#schemabuildsystem.shared.dto.agentstatus)|true|A DTO for an IAgentStatus|
|» UserID|body|integer(int32)|true|The UserID of the Agent|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Agent associated with the current user

<a id="opIdAgents_GetCurrentAgentAsync"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/Current \
  -H 'Accept: application/json'
```

`GET /api/v2/agents/Current`

Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
            an appropriate ApiError is returned.

> Example responses

> 200 Response

```json
{
  "AgentID": 0,
  "KeepAliveInterval": 0,
  "MachineName": "string",
  "Status": {
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  },
  "StepConfigurations": [
    {
      "Configurations": [
        "string"
      ],
      "StepImplementationID": "string"
    }
  ],
  "UserID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-agent-associated-with-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.Agent](#schemabuildsystem.shared.dto.agent)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the ActivityRun of Agent associated with the current user

<a id="opIdAgents_GetCurrentAgentActivityRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/Current/ActivityRun \
  -H 'Accept: application/json'
```

`GET /api/v2/agents/Current/ActivityRun`

Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.

> Example responses

> 200 Response

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  },
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-the-activityrun-of-agent-associated-with-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Agent

<a id="opIdAgents_GetAgentAsync"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/agents/{agentID}`

Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
            an appropriate ApiError is returned.

<h3 id="get-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to get.|

> Example responses

> 200 Response

```json
{
  "AgentID": 0,
  "KeepAliveInterval": 0,
  "MachineName": "string",
  "Status": {
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  },
  "StepConfigurations": [
    {
      "Configurations": [
        "string"
      ],
      "StepImplementationID": "string"
    }
  ],
  "UserID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.Agent](#schemabuildsystem.shared.dto.agent)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Agent

<a id="opIdAgents_PutAgent"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "AgentID": 0,
    "KeepAliveInterval": 0,
    "MachineName": "string",
    "Status": {
      "LastStatusUpdate": "1970-01-01T00:00:00Z",
      "Online": true
    },
    "UserID": 0
  }'
```

`PUT /api/v2/agents/{agentID}`

Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "AgentID": 0,
  "KeepAliveInterval": 0,
  "MachineName": "string",
  "Status": {
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  },
  "UserID": 0
}
```

<h3 id="update-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to update.|
|body|body|[BuildSystem.Shared.DTO.Agent](#schemabuildsystem.shared.dto.agent)|true|The updated Agent|
|» AgentID|body|integer(int32)|false|The id of the Agent|
|» KeepAliveInterval|body|integer(int32)|true|The 'Heartbeat Interval' used by the Build Agent.|
|» MachineName|body|string|true|The machine name of the computer the agent is running on|
|» Status|body|[BuildSystem.Shared.DTO.AgentStatus](#schemabuildsystem.shared.dto.agentstatus)|true|A DTO for an IAgentStatus|
|» UserID|body|integer(int32)|true|The UserID of the Agent|

<h3 id="update-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Agent

<a id="opIdAgents_DeleteAgent"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0 \
  -X DELETE
```

`DELETE /api/v2/agents/{agentID}`

Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to delete.|

<h3 id="delete-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Agent's ActivityRun

<a id="opIdAgents_GetAgentActivityRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0/ActivityRun \
  -H 'Accept: application/json'
```

`GET /api/v2/agents/{agentID}/ActivityRun`

Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
            assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-an-agents-activityrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to get.|

> Example responses

> 200 Response

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  },
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-an-agents-activityrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the ActivityRun assigned to the Agent.

<a id="opIdAgents_PutAgentActivityRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0/ActivityRun \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ActivityRunID": 0,
    "EndDate": "1970-01-01T00:00:00Z",
    "JobActivityID": 0,
    "JobRunID": 0,
    "StartDate": "1970-01-01T00:00:00Z",
    "Status": {
      "CurrentStep": 0,
      "Status": "Ready",
      "StepProgress": 0,
      "StepStatus": "string"
    }
  }'
```

`PUT /api/v2/agents/{agentID}/ActivityRun`

No Documentation Found.

> Body parameter

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  }
}
```

<h3 id="update-the-activityrun-assigned-to-the-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to update.|
|body|body|[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)|true|The ActivityRun assigned to the agent.  Only the ActivityRunID is used.|
|» ActivityRunID|body|integer(int32)|false|The identifier for the ActivityRun|
|» EndDate|body|string(date-time)|false|Read Only. The UTC date and time when the activity completed|
|» JobActivityID|body|integer(int32)|false|Read Only. The ID of the Job Activity that defines this activity run|
|» JobRunID|body|integer(int32)|false|Read Only. The ID of the JobRun under which this ActivityRun is executing|
|» StartDate|body|string(date-time)|false|Read Only. The UTC date and time when the activity started|
|» Status|body|[BuildSystem.Shared.DTO.ActivityRunStatus](#schemabuildsystem.shared.dto.activityrunstatus)|true|A DTO for an IActivityRunStatus|

<h3 id="update-the-activityrun-assigned-to-the-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Agent

<a id="opIdAgents_PutAgentStatus"></a>

> Code samples

```bash
curl https://example.com/api/v2/agents/0/Status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  }'
```

`PUT /api/v2/agents/{agentID}/Status`

Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
            the response is empty.If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "LastStatusUpdate": "1970-01-01T00:00:00Z",
  "Online": true
}
```

<h3 id="update-an-agent-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentID|path|integer(int32)|true|The id of the Agent to update.|
|body|body|[BuildSystem.Shared.DTO.AgentStatus](#schemabuildsystem.shared.dto.agentstatus)|true|The updated AgentStatus.|
|» LastStatusUpdate|body|string(date-time)|false|ReadOnly. The UTC date and time of the last status update|
|» Online|body|boolean|true|Indicates if the agent is online|

<h3 id="update-an-agent-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-jobruns">JobRuns</h1>

## Get JobRuns

<a id="opIdJobRuns_GetJobRuns"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobRuns \
  -H 'Accept: application/json'
```

`GET /api/v2/jobRuns`

Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-jobruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|includeActivityRunDetails|query|boolean|false|Optional. Indicates whether to include ActivityRun details.  Defaults to false.|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ActivityRuns": [
        {
          "ActivityRunID": 0,
          "EndDate": "1970-01-01T00:00:00Z",
          "JobActivityID": 0,
          "JobRunID": 0,
          "Parameters": [
            {
              "Direction": "Input",
              "Name": "string",
              "Value": "string"
            }
          ],
          "StartDate": "1970-01-01T00:00:00Z",
          "Status": {
            "CurrentStep": 0,
            "Status": "Ready",
            "StepProgress": 0,
            "StepStatus": "string"
          },
          "Steps": [
            {
              "ActivityID": 0,
              "ActivityStepID": 0,
              "ImplementationID": "string",
              "ParameterMappings": [
                {
                  "Name": "string",
                  "Source": "string",
                  "SourceType": "Constant"
                }
              ],
              "RunOrder": 0,
              "StepID": 0,
              "StepName": "string",
              "UseConfig": "string"
            }
          ]
        }
      ],
      "EndDate": "1970-01-01T00:00:00Z",
      "JobID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": "Ready"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-jobruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.JobRun_](#schemaapi.pagedresponse_buildsystem.shared.dto.jobrun_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a JobRun

<a id="opIdJobRuns_PostJobRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "EndDate": "1970-01-01T00:00:00Z",
    "JobID": 0,
    "JobRunID": 0,
    "StartDate": "1970-01-01T00:00:00Z",
    "Status": "Ready"
  }'
```

`POST /api/v2/jobRuns`

Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
            creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an 
            appropriate ApiError is returned.

> Body parameter

```json
{
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

<h3 id="create-a-jobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuildSystem.Shared.DTO.JobRun](#schemabuildsystem.shared.dto.jobrun)|true|The JobRun to create.  The JobRunID will be assigned on creation of the JobRun.|
|» EndDate|body|string(date-time)|false|The UTC date and time when the job completed|
|» JobID|body|integer(int32)|false|The ID of the job that defines the run|
|» JobRunID|body|integer(int32)|false|The ID of this JobRun|
|» StartDate|body|string(date-time)|false|The UTC date and time when the job started|
|» Status|body|string|false|The status of this JobRun|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Ready|
|» Status|InProgress|
|» Status|Succeeded|
|» Status|Cancelled|
|» Status|Failed|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-jobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a JobRun by ID

<a id="opIdJobRuns_GetJobRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobRuns/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/jobRuns/{jobRunID}`

Gets a JobRun by ID. When successful, the response is the requested JobRun.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-jobrun-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobRunID|path|integer(int32)|true|The ID of the JobRun to get.|
|includeActivityRunDetails|query|boolean|false|Optional. Indicates whether to include ActivityRun details.  Defaults to false.|

> Example responses

> 200 Response

```json
{
  "ActivityRuns": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-jobrun-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.JobRun](#schemabuildsystem.shared.dto.jobrun)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a JobRun

<a id="opIdJobRuns_PutJobRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobRuns/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "EndDate": "1970-01-01T00:00:00Z",
    "JobID": 0,
    "JobRunID": 0,
    "StartDate": "1970-01-01T00:00:00Z",
    "Status": "Ready"
  }'
```

`PUT /api/v2/jobRuns/{jobRunID}`

/// 
            Updates a JobRun.  The body of the PUT is the updated JobRun.
            When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

<h3 id="update-a-jobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobRunID|path|integer(int32)|true|The id of the JobRun to update|
|body|body|[BuildSystem.Shared.DTO.JobRun](#schemabuildsystem.shared.dto.jobrun)|true|The updated JobRun|
|» EndDate|body|string(date-time)|false|The UTC date and time when the job completed|
|» JobID|body|integer(int32)|false|The ID of the job that defines the run|
|» JobRunID|body|integer(int32)|false|The ID of this JobRun|
|» StartDate|body|string(date-time)|false|The UTC date and time when the job started|
|» Status|body|string|false|The status of this JobRun|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Ready|
|» Status|InProgress|
|» Status|Succeeded|
|» Status|Cancelled|
|» Status|Failed|

<h3 id="update-a-jobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a JobRun

<a id="opIdJobRuns_DeleteJobRun"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobRuns/0 \
  -X DELETE
```

`DELETE /api/v2/jobRuns/{jobRunID}`

Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="delete-a-jobrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobRunID|path|integer(int32)|true|The id of the JobRun to delete|

<h3 id="delete-a-jobrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-jobs">Jobs</h1>

## Get Jobs

<a id="opIdJobs_GetJobs"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobs \
  -H 'Accept: application/json'
```

`GET /api/v2/jobs`

Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
            If unsuccessful, an appropriate ApiError is returned. 
            ///

<h3 id="get-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|isIncludeDeleted|query|boolean|false|Does it include deleted job, or not|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "Activities": [
        {
          "ActivityID": 0,
          "JobActivityID": 0,
          "JobID": 0,
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0
        }
      ],
      "Deleted": true,
      "JobID": 0,
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.Job_](#schemaapi.pagedresponse_buildsystem.shared.dto.job_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Job

<a id="opIdJobs_PostJob"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Deleted": true,
    "JobID": 0,
    "Name": "string"
  }'
```

`POST /api/v2/jobs`

Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
            creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an 
            appropriate ApiError is returned.

> Body parameter

```json
{
  "Deleted": true,
  "JobID": 0,
  "Name": "string"
}
```

<h3 id="create-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuildSystem.Shared.DTO.Job](#schemabuildsystem.shared.dto.job)|true|The job to create.  The JobID will be assigned on creation of the Job.|
|» Deleted|body|boolean|false|Indicates if the job has been deleted.|
|» JobID|body|integer(int32)|false|The ID of the job|
|» Name|body|string|false|The name of the job|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Job by ID

<a id="opIdJobs_GetJob"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobs/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/jobs/{jobID}`

Gets a Job by ID. When successful, the response is the requested Job.
            If unsuccessful, an appropriate ApiError is returned.

<h3 id="get-a-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobID|path|integer(int32)|true|The ID of the Job to get.|
|isIncludeDeleted|query|boolean|false|Does it include deleted job, or not|

> Example responses

> 200 Response

```json
{
  "Activities": [
    {
      "ActivityID": 0,
      "JobActivityID": 0,
      "JobID": 0,
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0
    }
  ],
  "Deleted": true,
  "JobID": 0,
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ]
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.Job](#schemabuildsystem.shared.dto.job)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Job

<a id="opIdJobs_PutJob"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobs/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "Deleted": true,
    "JobID": 0,
    "Name": "string"
  }'
```

`PUT /api/v2/jobs/{jobID}`

Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
            If unsuccessful, an appropriate ApiError is returned.

> Body parameter

```json
{
  "Deleted": true,
  "JobID": 0,
  "Name": "string"
}
```

<h3 id="update-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobID|path|integer(int32)|true|The id of the job to update|
|body|body|[BuildSystem.Shared.DTO.Job](#schemabuildsystem.shared.dto.job)|true|The updated job|
|» Deleted|body|boolean|false|Indicates if the job has been deleted.|
|» JobID|body|integer(int32)|false|The ID of the job|
|» Name|body|string|false|The name of the job|

<h3 id="update-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Mark the delete flag for the Job

<a id="opIdJobs_DeleteJob"></a>

> Code samples

```bash
curl https://example.com/api/v2/jobs/0 \
  -X DELETE
```

`DELETE /api/v2/jobs/{jobID}`

Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
            ApiError is returned.

<h3 id="mark-the-delete-flag-for-the-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobID|path|integer(int32)|true|The id of the job to delete|

<h3 id="mark-the-delete-flag-for-the-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agco-api-steps">Steps</h1>

## Get Steps

<a id="opIdSteps_GetSteps"></a>

> Code samples

```bash
curl https://example.com/api/v2/steps \
  -H 'Accept: application/json'
```

`GET /api/v2/steps`

Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.

<h3 id="get-steps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Optional. The page limit.  If not specified, the default page limit is 10.|
|offset|query|integer(int32)|false|Optional. The page offset.  If not specified, the default page offset is 0.|
|includeDeleted|query|boolean|false|Does it include deleted step, or not|

> Example responses

> 200 Response

```json
{
  "Entities": [
    {
      "ConfigRequired": true,
      "Deleted": true,
      "Description": "string",
      "ImplementationID": "string",
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ],
      "StepID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-steps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API.PagedResponse_BuildSystem.Shared.DTO.Step_](#schemaapi.pagedresponse_buildsystem.shared.dto.step_)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Step

<a id="opIdSteps_PostStep"></a>

> Code samples

```bash
curl https://example.com/api/v2/steps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ConfigRequired": true,
    "Deleted": true,
    "Description": "string",
    "ImplementationID": "string",
    "Name": "string",
    "StepID": 0
  }'
```

`POST /api/v2/steps`

No Documentation Found.

> Body parameter

```json
{
  "ConfigRequired": true,
  "Deleted": true,
  "Description": "string",
  "ImplementationID": "string",
  "Name": "string",
  "StepID": 0
}
```

<h3 id="create-a-step-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuildSystem.Shared.DTO.Step](#schemabuildsystem.shared.dto.step)|true|The step to create|
|» ConfigRequired|body|boolean|true|Indicates if the step requires configuration values to be provided by the build agent|
|» Deleted|body|boolean|false|Read Only.  Indicates if the record is deleted.|
|» Description|body|string|false|A description of the step to be presented to a user|
|» ImplementationID|body|string|true|The implementation ID used to lookup the step implementation when it is executed|
|» Name|body|string|true|The name of the step|
|» StepID|body|integer(int32)|false|The ID of the step|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="create-a-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Step by ID

<a id="opIdSteps_GetStep"></a>

> Code samples

```bash
curl https://example.com/api/v2/steps/0 \
  -H 'Accept: application/json'
```

`GET /api/v2/steps/{stepID}`

Gets a Step by ID. When successful, the response is the requested Step.
            If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.

<h3 id="get-a-step-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stepID|path|integer(int32)|true|The ID of the Step to get.|
|isIncludeDeleted|query|boolean|false|Does it include deleted step, or not|

> Example responses

> 200 Response

```json
{
  "ConfigRequired": true,
  "Deleted": true,
  "Description": "string",
  "ImplementationID": "string",
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ],
  "StepID": 0
}
```

> default Response

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

<h3 id="get-a-step-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BuildSystem.Shared.DTO.Step](#schemabuildsystem.shared.dto.step)|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Step

<a id="opIdSteps_PutStep"></a>

> Code samples

```bash
curl https://example.com/api/v2/steps/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "ConfigRequired": true,
    "Deleted": true,
    "Description": "string",
    "ImplementationID": "string",
    "Name": "string",
    "StepID": 0
  }'
```

`PUT /api/v2/steps/{stepID}`

No Documentation Found.

> Body parameter

```json
{
  "ConfigRequired": true,
  "Deleted": true,
  "Description": "string",
  "ImplementationID": "string",
  "Name": "string",
  "StepID": 0
}
```

<h3 id="update-a-step-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stepID|path|integer(int32)|true|The step ID of the step to update|
|body|body|[BuildSystem.Shared.DTO.Step](#schemabuildsystem.shared.dto.step)|true|The updated step|
|» ConfigRequired|body|boolean|true|Indicates if the step requires configuration values to be provided by the build agent|
|» Deleted|body|boolean|false|Read Only.  Indicates if the record is deleted.|
|» Description|body|string|false|A description of the step to be presented to a user|
|» ImplementationID|body|string|true|The implementation ID used to lookup the step implementation when it is executed|
|» Name|body|string|true|The name of the step|
|» StepID|body|integer(int32)|false|The ID of the step|

<h3 id="update-a-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|API Error Response|[API.Models.ApiError](#schemaapi.models.apierror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AGCOPowerServices.Models.ECU">AGCOPowerServices.Models.ECU</h2>
<!-- backwards compatibility -->
<a id="schemaagcopowerservices.models.ecu"></a>
<a id="schema_AGCOPowerServices.Models.ECU"></a>
<a id="tocSagcopowerservices.models.ecu"></a>
<a id="tocsagcopowerservices.models.ecu"></a>

```json
{
  "ActivationCode": "string",
  "DamagedDescription": "string",
  "EngineSerialNumber": "string",
  "ReplacesECUSerialNumber": "string",
  "SerialNumber": "string",
  "State": "Active"
}
```

An AGCO Power ECU

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationCode|string(byte)|false|none|The code used to activate the ECU. May not be modified. Returned only on activation.|
|DamagedDescription|string|false|none|A description why the ECU cannot be deactivated.|
|EngineSerialNumber|string|true|none|The serial number of the ECU’s engine|
|ReplacesECUSerialNumber|string|false|none|The serial number of the ECU that this ECU replaces. Required if activating an ECU..|
|SerialNumber|string|true|none|The serial number of the ECU|
|State|string|true|none|The state of the ECU|

#### Enumerated Values

|Property|Value|
|---|---|
|State|Active|
|State|Inactive|
|State|Damaged|

<h2 id="tocS_AGCOPowerServices.Models.ProductionData">AGCOPowerServices.Models.ProductionData</h2>
<!-- backwards compatibility -->
<a id="schemaagcopowerservices.models.productiondata"></a>
<a id="schema_AGCOPowerServices.Models.ProductionData"></a>
<a id="tocSagcopowerservices.models.productiondata"></a>
<a id="tocsagcopowerservices.models.productiondata"></a>

```json
{
  "DataType": "string",
  "DataValues": "string"
}
```

Production data for an AGCO Power engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataType|string|true|none|Type of data. Valid types are (but not limited to)<br>            'PowerCalibration'|
|DataValues|string(byte)|true|none|Raw values of the calibration data|

<h2 id="tocS_AGCOPowerServices.Models.UserStatus">AGCOPowerServices.Models.UserStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagcopowerservices.models.userstatus"></a>
<a id="schema_AGCOPowerServices.Models.UserStatus"></a>
<a id="tocSagcopowerservices.models.userstatus"></a>
<a id="tocsagcopowerservices.models.userstatus"></a>

```json
{
  "DealerCode": "string",
  "State": "Active",
  "VoucherCode": "string"
}
```

Status of a voucher in the AGCO Power system

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DealerCode|string|true|none|The dealer code of the voucher|
|State|string|false|none|The state of the voucher|
|VoucherCode|string|true|none|The voucher code|

#### Enumerated Values

|Property|Value|
|---|---|
|State|Active|
|State|Inactive|
|State|None|

<h2 id="tocS_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition_">API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcodedefinition_"></a>
<a id="schema_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition_"></a>
<a id="tocSapi.ipagedresponse_authorizationcodes.shared.models.authorizationcodedefinition_"></a>
<a id="tocsapi.ipagedresponse_authorizationcodes.shared.models.authorizationcodedefinition_"></a>

```json
{
  "Entities": [
    {
      "AuthorizationID": "string",
      "CreatedByUserID": 0,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DataFields": [
        {
          "DigitsPrecision": 0,
          "MaxExponent": 0,
          "MaxValue": 0,
          "MinExponent": 0,
          "MinValue": 0,
          "Name": "string",
          "ScaleFactor": 0,
          "Signed": true,
          "Type": "Boolean"
        }
      ],
      "DeletedByUserID": 0,
      "DeletedDate": "1970-01-01T00:00:00Z",
      "Description": "string",
      "DurationAccuracy": 0,
      "DurationAmount": 0,
      "DurationUnits": "Weeks",
      "HashLength": 0,
      "ID": "string",
      "IsDeleted": true,
      "Name": "string",
      "RandomLength": 0,
      "ValidationFields": [
        {
          "Name": "string",
          "Type": "Boolean"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition](#schemaauthorizationcodes.shared.models.authorizationcodedefinition)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCode_">API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCode_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcode_"></a>
<a id="schema_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationCode_"></a>
<a id="tocSapi.ipagedresponse_authorizationcodes.shared.models.authorizationcode_"></a>
<a id="tocsapi.ipagedresponse_authorizationcodes.shared.models.authorizationcode_"></a>

```json
{
  "Entities": [
    {
      "Code": "string",
      "CreatedByUserID": 0,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DataParameters": [
        {
          "Name": "string",
          "Value": "string"
        }
      ],
      "DefinitionID": "string",
      "DeletedByUserID": 0,
      "DeletedDate": "1970-01-01T00:00:00Z",
      "EffectiveDate": "1970-01-01T00:00:00Z",
      "ID": 0,
      "IsDeleted": true,
      "ValidationParameters": [
        {
          "Name": "string",
          "Value": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[AuthorizationCodes.Shared.Models.AuthorizationCode](#schemaauthorizationcodes.shared.models.authorizationcode)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationContactInformation_">API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationContactInformation_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_authorizationcodes.shared.models.authorizationcontactinformation_"></a>
<a id="schema_API.IPagedResponse_AuthorizationCodes.Shared.Models.AuthorizationContactInformation_"></a>
<a id="tocSapi.ipagedresponse_authorizationcodes.shared.models.authorizationcontactinformation_"></a>
<a id="tocsapi.ipagedresponse_authorizationcodes.shared.models.authorizationcontactinformation_"></a>

```json
{
  "Entities": [
    {
      "AuthorizationCodeID": 0,
      "Code": "string",
      "Contact": "string",
      "CreatedBy": "string",
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Dealership": "string",
      "DefinitionName": "string",
      "Email": "string",
      "ID": 0,
      "Notes": "string",
      "Phone": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[AuthorizationCodes.Shared.Models.AuthorizationContactInformation](#schemaauthorizationcodes.shared.models.authorizationcontactinformation)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_AuthorizationCodes.Shared.Models.CategoryUserReport_">API.IPagedResponse_AuthorizationCodes.Shared.Models.CategoryUserReport_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_authorizationcodes.shared.models.categoryuserreport_"></a>
<a id="schema_API.IPagedResponse_AuthorizationCodes.Shared.Models.CategoryUserReport_"></a>
<a id="tocSapi.ipagedresponse_authorizationcodes.shared.models.categoryuserreport_"></a>
<a id="tocsapi.ipagedresponse_authorizationcodes.shared.models.categoryuserreport_"></a>

```json
{
  "Entities": [
    {
      "Categories": [
        {
          "Description": "string",
          "ID": "string",
          "Name": "string"
        }
      ],
      "User": {
        "Email": "string",
        "Name": "string",
        "UserID": 0,
        "Username": "string"
      }
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[AuthorizationCodes.Shared.Models.CategoryUserReport](#schemaauthorizationcodes.shared.models.categoryuserreport)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_AuthorizationCodes.Shared.Models.Category_">API.IPagedResponse_AuthorizationCodes.Shared.Models.Category_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_authorizationcodes.shared.models.category_"></a>
<a id="schema_API.IPagedResponse_AuthorizationCodes.Shared.Models.Category_"></a>
<a id="tocSapi.ipagedresponse_authorizationcodes.shared.models.category_"></a>
<a id="tocsapi.ipagedresponse_authorizationcodes.shared.models.category_"></a>

```json
{
  "Entities": [
    {
      "Description": "string",
      "ID": "string",
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[AuthorizationCodes.Shared.Models.Category](#schemaauthorizationcodes.shared.models.category)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.FileDownload_">API.IPagedResponse_GlobalResources.Shared.Models.FileDownload_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.filedownload_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.FileDownload_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.filedownload_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.filedownload_"></a>

```json
{
  "Entities": [
    {
      "CRC": "string",
      "ContentType": "string",
      "Description": "string",
      "Id": "string",
      "IsPublic": true,
      "Name": "string",
      "Path": "string",
      "Size": 0,
      "State": "Created"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.FileDownload](#schemaglobalresources.shared.models.filedownload)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.GlobalImageCategory_">API.IPagedResponse_GlobalResources.Shared.Models.GlobalImageCategory_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.globalimagecategory_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.GlobalImageCategory_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.globalimagecategory_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.globalimagecategory_"></a>

```json
{
  "Entities": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.GlobalImage_">API.IPagedResponse_GlobalResources.Shared.Models.GlobalImage_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.globalimage_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.GlobalImage_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.globalimage_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.globalimage_"></a>

```json
{
  "Entities": [
    {
      "CRC": "string",
      "Categories": [
        {
          "Id": "string",
          "Name": "string"
        }
      ],
      "Date": "1970-01-01T00:00:00Z",
      "Description": "string",
      "Height": 0,
      "Id": "string",
      "Name": "string",
      "Publisher": "string",
      "Size": 0,
      "State": "Created",
      "ThumbnailCRC": "string",
      "ThumbnailSize": 0,
      "Width": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.GlobalImage](#schemaglobalresources.shared.models.globalimage)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.Language_">API.IPagedResponse_GlobalResources.Shared.Models.Language_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.language_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.Language_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.language_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.language_"></a>

```json
{
  "Entities": [
    {
      "Description": "string",
      "IsDeleted": true,
      "LocaleId": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.Language](#schemaglobalresources.shared.models.language)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.StringDefinition_">API.IPagedResponse_GlobalResources.Shared.Models.StringDefinition_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.stringdefinition_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.StringDefinition_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.stringdefinition_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.stringdefinition_"></a>

```json
{
  "Entities": [
    {
      "DescriptionForTranslator": "string",
      "DoNotTranslate": true,
      "Id": "string",
      "ParameterCount": 0,
      "Timestamp": "string",
      "Translations": [
        {
          "AuthorId": 0,
          "LanguageId": 0,
          "State": "Original",
          "StringId": "string",
          "StringValue": "string",
          "Timestamp": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.StringDefinition](#schemaglobalresources.shared.models.stringdefinition)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.StringTranslation_">API.IPagedResponse_GlobalResources.Shared.Models.StringTranslation_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.stringtranslation_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.StringTranslation_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.stringtranslation_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.stringtranslation_"></a>

```json
{
  "Entities": [
    {
      "AuthorId": 0,
      "LanguageId": 0,
      "State": "Original",
      "StringId": "string",
      "StringValue": "string",
      "Timestamp": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.StringTranslation](#schemaglobalresources.shared.models.stringtranslation)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.TranslationRequest_">API.IPagedResponse_GlobalResources.Shared.Models.TranslationRequest_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.translationrequest_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.TranslationRequest_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.translationrequest_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.translationrequest_"></a>

```json
{
  "Entities": [
    {
      "ApprovalUserId": 0,
      "CCEmailAddresses": [
        "string"
      ],
      "ChargeToAccount": "string",
      "Deadline": "1970-01-01T00:00:00Z",
      "Id": 0,
      "LocaleIds": [
        0
      ],
      "Notes": "string",
      "QuestionsUserId": 0,
      "State": "NotSubmitted",
      "SubmittedBy": 0,
      "TranslatorEmail": "string",
      "TranslatorName": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.TranslationRequest](#schemaglobalresources.shared.models.translationrequest)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetAttribute_">API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetAttribute_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.translationsetattribute_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetAttribute_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.translationsetattribute_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.translationsetattribute_"></a>

```json
{
  "Entities": [
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetSourceString_">API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetSourceString_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.translationsetsourcestring_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetSourceString_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.translationsetsourcestring_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.translationsetsourcestring_"></a>

```json
{
  "Entities": [
    {
      "DescriptionForTranslator": "string",
      "LanguageID": 0,
      "StringID": "string",
      "StringValue": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.TranslationSetSourceString](#schemaglobalresources.shared.models.translationsetsourcestring)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetString_">API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetString_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.translationsetstring_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSetString_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.translationsetstring_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.translationsetstring_"></a>

```json
{
  "Entities": [
    {
      "LanguageID": 0,
      "StringID": "string",
      "StringValue": "string",
      "TranslationSetId": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.TranslationSetString](#schemaglobalresources.shared.models.translationsetstring)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSet_">API.IPagedResponse_GlobalResources.Shared.Models.TranslationSet_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_globalresources.shared.models.translationset_"></a>
<a id="schema_API.IPagedResponse_GlobalResources.Shared.Models.TranslationSet_"></a>
<a id="tocSapi.ipagedresponse_globalresources.shared.models.translationset_"></a>
<a id="tocsapi.ipagedresponse_globalresources.shared.models.translationset_"></a>

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ID": 0,
          "Name": "string",
          "TranslationSetID": 0,
          "Value": "string"
        }
      ],
      "FileIDs": [
        "string"
      ],
      "Id": 0,
      "InDate": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "OutDate": "1970-01-01T00:00:00Z",
      "State": "OutForProcessing",
      "TranslationRequestID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[GlobalResources.Shared.Models.TranslationSet](#schemaglobalresources.shared.models.translationset)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.IPagedResponse_OASSupport.Shared.Models.TranslationKey_">API.IPagedResponse_OASSupport.Shared.Models.TranslationKey_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.ipagedresponse_oassupport.shared.models.translationkey_"></a>
<a id="schema_API.IPagedResponse_OASSupport.Shared.Models.TranslationKey_"></a>
<a id="tocSapi.ipagedresponse_oassupport.shared.models.translationkey_"></a>
<a id="tocsapi.ipagedresponse_oassupport.shared.models.translationkey_"></a>

```json
{
  "Entities": [
    {
      "ID": 0,
      "KeyName": "string",
      "StringID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[OASSupport.Shared.Models.TranslationKey](#schemaoassupport.shared.models.translationkey)]|false|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|false|none|Metadata for the paged response|

<h2 id="tocS_API.Models.ApiError">API.Models.ApiError</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.apierror"></a>
<a id="schema_API.Models.ApiError"></a>
<a id="tocSapi.models.apierror"></a>
<a id="tocsapi.models.apierror"></a>

```json
{
  "DeveloperMessage": "string",
  "ErrorCode": 0,
  "MoreInfo": "string",
  "UserMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeveloperMessage|string|false|none|none|
|ErrorCode|integer(int32)|false|none|none|
|MoreInfo|string|false|none|none|
|UserMessage|string|false|none|none|

<h2 id="tocS_API.Models.AuthenticatedUser">API.Models.AuthenticatedUser</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.authenticateduser"></a>
<a id="schema_API.Models.AuthenticatedUser"></a>
<a id="tocSapi.models.authenticateduser"></a>
<a id="tocsapi.models.authenticateduser"></a>

```json
{
  "Email": "string",
  "MACId": "string",
  "MACToken": "string",
  "Name": "string",
  "Token": "string",
  "UserID": 0,
  "Username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|string|false|none|The user's email address|
|MACId|string|false|none|The MAC identifier to use for API access|
|MACToken|string|false|none|The MAC token to use for API access|
|Name|string|false|none|The user's name|
|Token|string|false|none|The token to use for API access|
|UserID|integer(int32)|false|none|The user ID|
|Username|string|false|none|The username used for authentication|

<h2 id="tocS_API.Models.Credentials">API.Models.Credentials</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.credentials"></a>
<a id="schema_API.Models.Credentials"></a>
<a id="tocSapi.models.credentials"></a>
<a id="tocsapi.models.credentials"></a>

```json
{
  "BearerAction": "None",
  "MACAction": "None",
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BearerAction|string|false|none|The action to perform on the bearer token. Optional. Defaults to ‘None’.|
|MACAction|string|false|none|The action to perform on the MAC token. Optional. Defaults to ‘None’.|
|password|string|true|none|A secret word or phrase that must be used to gain admission|
|username|string|true|none|A unique ID a user needs to login with|

#### Enumerated Values

|Property|Value|
|---|---|
|BearerAction|None|
|BearerAction|Reset|
|BearerAction|Disable|
|MACAction|None|
|MACAction|Reset|
|MACAction|Disable|

<h2 id="tocS_API.Models.Log">API.Models.Log</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.log"></a>
<a id="schema_API.Models.Log"></a>
<a id="tocSapi.models.log"></a>
<a id="tocsapi.models.log"></a>

```json
{
  "ID": "string",
  "Message": "string",
  "TimeStamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|none|
|Message|string|false|none|none|
|TimeStamp|string(date-time)|false|none|none|

<h2 id="tocS_API.Models.Notification">API.Models.Notification</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.notification"></a>
<a id="schema_API.Models.Notification"></a>
<a id="tocSapi.models.notification"></a>
<a id="tocsapi.models.notification"></a>

```json
{
  "CC_Addresses": [
    "string"
  ],
  "IsBodyHtml": true,
  "MessageBody": "string",
  "Subject": "string",
  "To_Addresses": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CC_Addresses|[string]|false|none|none|
|IsBodyHtml|boolean|true|none|none|
|MessageBody|string|true|none|none|
|Subject|string|true|none|none|
|To_Addresses|[string]|true|none|none|

<h2 id="tocS_API.Models.PasswordReset">API.Models.PasswordReset</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.passwordreset"></a>
<a id="schema_API.Models.PasswordReset"></a>
<a id="tocSapi.models.passwordreset"></a>
<a id="tocsapi.models.passwordreset"></a>

```json
{
  "NewPassword": "string",
  "Token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NewPassword|string|true|none|The new password|
|Token|string|true|none|The password reset token|

<h2 id="tocS_API.Models.PasswordResetRequest">API.Models.PasswordResetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.passwordresetrequest"></a>
<a id="schema_API.Models.PasswordResetRequest"></a>
<a id="tocSapi.models.passwordresetrequest"></a>
<a id="tocsapi.models.passwordresetrequest"></a>

```json
{
  "ParameterName": "string",
  "Url": "string",
  "Username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|string|true|none|The query string parameter name to use for supplying the password reset token|
|Url|string|true|none|The URL to direct the user to reset the password.|
|Username|string|true|none|The username to reset the password for|

<h2 id="tocS_API.Models.Permission">API.Models.Permission</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.permission"></a>
<a id="schema_API.Models.Permission"></a>
<a id="tocSapi.models.permission"></a>
<a id="tocsapi.models.permission"></a>

```json
{
  "DataDescription": "string",
  "DataRequired": "Yes",
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataDescription|string|false|none|Description of data to be provided with Role Authorization|
|DataRequired|string|true|none|Indicates if data is required or optional|
|Description|string|false|none|none|
|Id|integer(int32)|false|none|The identifier of the permission.|
|Name|string|true|none|The name of the permission.|

#### Enumerated Values

|Property|Value|
|---|---|
|DataRequired|Yes|
|DataRequired|No|
|DataRequired|Optional|

<h2 id="tocS_API.Models.Role">API.Models.Role</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.role"></a>
<a id="schema_API.Models.Role"></a>
<a id="tocSapi.models.role"></a>
<a id="tocsapi.models.role"></a>

```json
{
  "Description": "string",
  "Id": 0,
  "Name": "string"
}
```

Defines an API Role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|Role description|
|Id|integer(int32)|false|none|The role's identifier.|
|Name|string|true|none|The name of the role. Must be alpha-numeric strings separated by a period (.).|

<h2 id="tocS_API.Models.RolePermissionChange">API.Models.RolePermissionChange</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.rolepermissionchange"></a>
<a id="schema_API.Models.RolePermissionChange"></a>
<a id="tocSapi.models.rolepermissionchange"></a>
<a id="tocsapi.models.rolepermissionchange"></a>

```json
{
  "Action": "Grant",
  "Permission": "string"
}
```

Change to the Permissions that a Role is given.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|true|none|The action to take.|
|Permission|string|true|none|The name of the permission to grant or revoke.|

#### Enumerated Values

|Property|Value|
|---|---|
|Action|Grant|
|Action|Revoke|

<h2 id="tocS_API.Models.RoleUserChange">API.Models.RoleUserChange</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.roleuserchange"></a>
<a id="schema_API.Models.RoleUserChange"></a>
<a id="tocSapi.models.roleuserchange"></a>
<a id="tocsapi.models.roleuserchange"></a>

```json
{
  "Action": "Grant",
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|true|none|The action to take with the user|
|Id|integer(int32)|true|none|The Id of the User|

#### Enumerated Values

|Property|Value|
|---|---|
|Action|Grant|
|Action|Revoke|

<h2 id="tocS_API.Models.TokenOptions">API.Models.TokenOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.tokenoptions"></a>
<a id="schema_API.Models.TokenOptions"></a>
<a id="tocSapi.models.tokenoptions"></a>
<a id="tocsapi.models.tokenoptions"></a>

```json
{
  "BearerAction": "None",
  "MACAction": "None"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BearerAction|string|false|none|The action to perform on the bearer token. Optional. Defaults to ‘None’.|
|MACAction|string|false|none|The action to perform on the MAC token. Optional. Defaults to ‘None’.|

#### Enumerated Values

|Property|Value|
|---|---|
|BearerAction|None|
|BearerAction|Reset|
|BearerAction|Disable|
|MACAction|None|
|MACAction|Reset|
|MACAction|Disable|

<h2 id="tocS_API.Models.User">API.Models.User</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.user"></a>
<a id="schema_API.Models.User"></a>
<a id="tocSapi.models.user"></a>
<a id="tocsapi.models.user"></a>

```json
{
  "ChangePassword": "string",
  "Email": "string",
  "Name": "string",
  "Password": "string",
  "UserID": 0,
  "Username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangePassword|string|false|none|Never Returned.  When changing a user's password, this field must contain the new password.|
|Email|string|false|none|The user's email address|
|Name|string|false|none|The user's name|
|Password|string|false|none|Never Returned.  Required when creating a new user or updating a user.  When changing a user's password this field must contain the current password.|
|UserID|integer(int32)|false|none|The user ID|
|Username|string|false|none|The username used for authentication|

<h2 id="tocS_API.Models.UserEffectivePermission">API.Models.UserEffectivePermission</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.usereffectivepermission"></a>
<a id="schema_API.Models.UserEffectivePermission"></a>
<a id="tocSapi.models.usereffectivepermission"></a>
<a id="tocsapi.models.usereffectivepermission"></a>

```json
{
  "PermissionId": 0,
  "PermissionName": "string",
  "UserID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PermissionId|integer(int32)|false|none|none|
|PermissionName|string|false|none|none|
|UserID|integer(int32)|false|none|none|

<h2 id="tocS_API.Models.UserRoleChange">API.Models.UserRoleChange</h2>
<!-- backwards compatibility -->
<a id="schemaapi.models.userrolechange"></a>
<a id="schema_API.Models.UserRoleChange"></a>
<a id="tocSapi.models.userrolechange"></a>
<a id="tocsapi.models.userrolechange"></a>

```json
{
  "Action": "Grant",
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|true|none|The action to take with the role|
|Name|string|true|none|The name of the role|

#### Enumerated Values

|Property|Value|
|---|---|
|Action|Grant|
|Action|Revoke|

<h2 id="tocS_API.PagedResponseMetadata">API.PagedResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponsemetadata"></a>
<a id="schema_API.PagedResponseMetadata"></a>
<a id="tocSapi.pagedresponsemetadata"></a>
<a id="tocsapi.pagedresponsemetadata"></a>

```json
{
  "Limit": 0,
  "Offset": 0,
  "TotalCount": 0
}
```

Metadata for the paged response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|integer(int32)|true|read-only|The number of entities this paged response is limited to.|
|Offset|integer(int32)|true|read-only|The number of entities prior to this page of items.|
|TotalCount|integer(int32)|true|read-only|The total number of entities matching the request.|

<h2 id="tocS_API.PagedResponse_API.Models.Log_">API.PagedResponse_API.Models.Log_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_api.models.log_"></a>
<a id="schema_API.PagedResponse_API.Models.Log_"></a>
<a id="tocSapi.pagedresponse_api.models.log_"></a>
<a id="tocsapi.pagedresponse_api.models.log_"></a>

```json
{
  "Entities": [
    {
      "ID": "string",
      "Message": "string",
      "TimeStamp": "1970-01-01T00:00:00Z"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[API.Models.Log](#schemaapi.models.log)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_API.Models.Permission_">API.PagedResponse_API.Models.Permission_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_api.models.permission_"></a>
<a id="schema_API.PagedResponse_API.Models.Permission_"></a>
<a id="tocSapi.pagedresponse_api.models.permission_"></a>
<a id="tocsapi.pagedresponse_api.models.permission_"></a>

```json
{
  "Entities": [
    {
      "DataDescription": "string",
      "DataRequired": "Yes",
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[API.Models.Permission](#schemaapi.models.permission)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_API.Models.Role_">API.PagedResponse_API.Models.Role_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_api.models.role_"></a>
<a id="schema_API.PagedResponse_API.Models.Role_"></a>
<a id="tocSapi.pagedresponse_api.models.role_"></a>
<a id="tocsapi.pagedresponse_api.models.role_"></a>

```json
{
  "Entities": [
    {
      "Description": "string",
      "Id": 0,
      "Name": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[API.Models.Role](#schemaapi.models.role)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_API.Models.UserEffectivePermission_">API.PagedResponse_API.Models.UserEffectivePermission_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_api.models.usereffectivepermission_"></a>
<a id="schema_API.PagedResponse_API.Models.UserEffectivePermission_"></a>
<a id="tocSapi.pagedresponse_api.models.usereffectivepermission_"></a>
<a id="tocsapi.pagedresponse_api.models.usereffectivepermission_"></a>

```json
{
  "Entities": [
    {
      "PermissionId": 0,
      "PermissionName": "string",
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[API.Models.UserEffectivePermission](#schemaapi.models.usereffectivepermission)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_API.Models.User_">API.PagedResponse_API.Models.User_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_api.models.user_"></a>
<a id="schema_API.PagedResponse_API.Models.User_"></a>
<a id="tocSapi.pagedresponse_api.models.user_"></a>
<a id="tocsapi.pagedresponse_api.models.user_"></a>

```json
{
  "Entities": [
    {
      "ChangePassword": "string",
      "Email": "string",
      "Name": "string",
      "Password": "string",
      "UserID": 0,
      "Username": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[API.Models.User](#schemaapi.models.user)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.ActivityRun_">API.PagedResponse_BuildSystem.Shared.DTO.ActivityRun_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.activityrun_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.ActivityRun_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.activityrun_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.activityrun_"></a>

```json
{
  "Entities": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.Activity_">API.PagedResponse_BuildSystem.Shared.DTO.Activity_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.activity_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.Activity_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.activity_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.activity_"></a>

```json
{
  "Entities": [
    {
      "ActivityID": 0,
      "Deleted": true,
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ],
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.Activity](#schemabuildsystem.shared.dto.activity)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.Agent_">API.PagedResponse_BuildSystem.Shared.DTO.Agent_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.agent_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.Agent_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.agent_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.agent_"></a>

```json
{
  "Entities": [
    {
      "AgentID": 0,
      "KeepAliveInterval": 0,
      "MachineName": "string",
      "Status": {
        "LastStatusUpdate": "1970-01-01T00:00:00Z",
        "Online": true
      },
      "StepConfigurations": [
        {
          "Configurations": [
            "string"
          ],
          "StepImplementationID": "string"
        }
      ],
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.Agent](#schemabuildsystem.shared.dto.agent)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.JobRun_">API.PagedResponse_BuildSystem.Shared.DTO.JobRun_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.jobrun_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.JobRun_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.jobrun_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.jobrun_"></a>

```json
{
  "Entities": [
    {
      "ActivityRuns": [
        {
          "ActivityRunID": 0,
          "EndDate": "1970-01-01T00:00:00Z",
          "JobActivityID": 0,
          "JobRunID": 0,
          "Parameters": [
            {
              "Direction": "Input",
              "Name": "string",
              "Value": "string"
            }
          ],
          "StartDate": "1970-01-01T00:00:00Z",
          "Status": {
            "CurrentStep": 0,
            "Status": "Ready",
            "StepProgress": 0,
            "StepStatus": "string"
          },
          "Steps": [
            {
              "ActivityID": 0,
              "ActivityStepID": 0,
              "ImplementationID": "string",
              "ParameterMappings": [
                {
                  "Name": "string",
                  "Source": "string",
                  "SourceType": "Constant"
                }
              ],
              "RunOrder": 0,
              "StepID": 0,
              "StepName": "string",
              "UseConfig": "string"
            }
          ]
        }
      ],
      "EndDate": "1970-01-01T00:00:00Z",
      "JobID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": "Ready"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.JobRun](#schemabuildsystem.shared.dto.jobrun)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.Job_">API.PagedResponse_BuildSystem.Shared.DTO.Job_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.job_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.Job_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.job_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.job_"></a>

```json
{
  "Entities": [
    {
      "Activities": [
        {
          "ActivityID": 0,
          "JobActivityID": 0,
          "JobID": 0,
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0
        }
      ],
      "Deleted": true,
      "JobID": 0,
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.Job](#schemabuildsystem.shared.dto.job)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_BuildSystem.Shared.DTO.Step_">API.PagedResponse_BuildSystem.Shared.DTO.Step_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_buildsystem.shared.dto.step_"></a>
<a id="schema_API.PagedResponse_BuildSystem.Shared.DTO.Step_"></a>
<a id="tocSapi.pagedresponse_buildsystem.shared.dto.step_"></a>
<a id="tocsapi.pagedresponse_buildsystem.shared.dto.step_"></a>

```json
{
  "Entities": [
    {
      "ConfigRequired": true,
      "Deleted": true,
      "Description": "string",
      "ImplementationID": "string",
      "Name": "string",
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Type": "String"
        }
      ],
      "StepID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[BuildSystem.Shared.DTO.Step](#schemabuildsystem.shared.dto.step)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinitionattribute_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinitionattribute_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinitionattribute_"></a>

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinition_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinition_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinition_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentDefinition_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinition_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.contentdefinition_"></a>

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ContentDefinitionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "ContentDefinitionID": 0,
      "Description": "string",
      "Name": "string",
      "PackageTypeID": "string",
      "TypeID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentreleaseversion_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.contentreleaseversion_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.contentreleaseversion_"></a>

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "ContentReleaseID": 0,
      "Deleted": true,
      "PublisherUserID": 0,
      "ReleaseID": 0,
      "TestReportUrl": "string",
      "UpdatedDate": "1970-01-01T00:00:00Z",
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion](#schemacontentsubmission.shared.businessentities.contentreleaseversion)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmissionattribute_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmissionattribute_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmissionattribute_"></a>

```json
{
  "Entities": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmission_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmission_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmission_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.ContentSubmission_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmission_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.contentsubmission_"></a>

```json
{
  "Entities": [
    {
      "Attributes": [
        {
          "ContentSubmissionID": 0,
          "ID": 0,
          "Name": "string",
          "Value": "string"
        }
      ],
      "BuildID": 0,
      "ContentDefinitionID": 0,
      "ContentSubmissionID": 0,
      "Definition": {
        "Attributes": [
          {
            "ContentDefinitionID": 0,
            "ID": 0,
            "Name": "string",
            "Value": "string"
          }
        ],
        "ContentDefinitionID": 0,
        "Description": "string",
        "Name": "string",
        "PackageTypeID": "string",
        "TypeID": 0
      },
      "JobRunID": 0,
      "PackageID": "string",
      "ReleaseNotes": "string",
      "Repository": "string",
      "Revision": 0,
      "SubmissionDate": "1970-01-01T00:00:00Z",
      "UserID": 0,
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.ContentSubmission](#schemacontentsubmission.shared.businessentities.contentsubmission)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.Release_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.Release_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.release_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.Release_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.release_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.release_"></a>

```json
{
  "Entities": [
    {
      "BuildDate": "1970-01-01T00:00:00Z",
      "BundleIDs": [
        "string"
      ],
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "ReleaseID": 0,
      "ReleaseNumber": "string",
      "Visible": true
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.Release](#schemacontentsubmission.shared.businessentities.release)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.UserContentDefinition_">API.PagedResponse_ContentSubmission.Shared.BusinessEntities.UserContentDefinition_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_contentsubmission.shared.businessentities.usercontentdefinition_"></a>
<a id="schema_API.PagedResponse_ContentSubmission.Shared.BusinessEntities.UserContentDefinition_"></a>
<a id="tocSapi.pagedresponse_contentsubmission.shared.businessentities.usercontentdefinition_"></a>
<a id="tocsapi.pagedresponse_contentsubmission.shared.businessentities.usercontentdefinition_"></a>

```json
{
  "Entities": [
    {
      "ContentDefinitionID": 0,
      "UserContentDefinitionID": 0,
      "UserID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[ContentSubmission.Shared.BusinessEntities.UserContentDefinition](#schemacontentsubmission.shared.businessentities.usercontentdefinition)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_DealerDB.Models.Dealer_">API.PagedResponse_DealerDB.Models.Dealer_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_dealerdb.models.dealer_"></a>
<a id="schema_API.PagedResponse_DealerDB.Models.Dealer_"></a>
<a id="tocSapi.pagedresponse_dealerdb.models.dealer_"></a>
<a id="tocsapi.pagedresponse_dealerdb.models.dealer_"></a>

```json
{
  "Entities": [
    {
      "BillingAddress": "string",
      "BillingAddress2": "string",
      "BillingAddress3": "string",
      "BillingAddress4": "string",
      "BillingCity": "string",
      "BillingCountry": "string",
      "BillingCountryCode": "string",
      "BillingState": "string",
      "BillingZip": "string",
      "Brands": [
        "string"
      ],
      "DealerCode": "string",
      "DealerName": "string",
      "DealerStatus": "string",
      "DealerStatusUpdateDate": "string",
      "Filler": "string",
      "IsValid": true,
      "LanguagePreference": "string",
      "Region1": "string",
      "Region2": "string",
      "RegionMapping": "string",
      "RoleBrand": "string",
      "ShippingAddress2": "string",
      "ShippingAddress3": "string",
      "ShippingAddress4": "string",
      "ShippingCity": "string",
      "ShippingCountry": "string",
      "ShippingState": "string",
      "ShippingStreet": "string",
      "ShippingZip": "string",
      "Telephone": "string",
      "VATCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[DealerDB.Models.Dealer](#schemadealerdb.models.dealer)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_DealerDB.Models.DealersPerCountry_">API.PagedResponse_DealerDB.Models.DealersPerCountry_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_dealerdb.models.dealerspercountry_"></a>
<a id="schema_API.PagedResponse_DealerDB.Models.DealersPerCountry_"></a>
<a id="tocSapi.pagedresponse_dealerdb.models.dealerspercountry_"></a>
<a id="tocsapi.pagedresponse_dealerdb.models.dealerspercountry_"></a>

```json
{
  "Entities": [
    {
      "Count": 0,
      "Country": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[DealerDB.Models.DealersPerCountry](#schemadealerdb.models.dealerspercountry)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_DealerDB.Models.License_">API.PagedResponse_DealerDB.Models.License_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_dealerdb.models.license_"></a>
<a id="schema_API.PagedResponse_DealerDB.Models.License_"></a>
<a id="tocSapi.pagedresponse_dealerdb.models.license_"></a>
<a id="tocsapi.pagedresponse_dealerdb.models.license_"></a>

```json
{
  "Entities": [
    {
      "Active": true,
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DeactivatedDate": "1970-01-01T00:00:00Z",
      "LicenseActivationType": "EDT",
      "LicenseID": "string",
      "LicenseVersion": "string",
      "RefreshDate": "1970-01-01T00:00:00Z",
      "SystemInfo": "string",
      "UpdatedLicenseVersion": "string",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[DealerDB.Models.License](#schemadealerdb.models.license)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_DealerDB.Models.VoucherHistory_">API.PagedResponse_DealerDB.Models.VoucherHistory_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_dealerdb.models.voucherhistory_"></a>
<a id="schema_API.PagedResponse_DealerDB.Models.VoucherHistory_"></a>
<a id="tocSapi.pagedresponse_dealerdb.models.voucherhistory_"></a>
<a id="tocsapi.pagedresponse_dealerdb.models.voucherhistory_"></a>

```json
{
  "Entities": [
    {
      "ChangedDate": "1970-01-01T00:00:00Z",
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Deleted": true,
      "Email": "string",
      "ExpirationDate": "1970-01-01T00:00:00Z",
      "ID": 0,
      "LicenseTo": "string",
      "ModifiedBy": "string",
      "OrderNumber": "string",
      "Punched": true,
      "PunchedDate": "1970-01-01T00:00:00Z",
      "Purpose": "string",
      "Type": "Commercial",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[DealerDB.Models.VoucherHistory](#schemadealerdb.models.voucherhistory)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_DealerDB.Models.Voucher_">API.PagedResponse_DealerDB.Models.Voucher_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_dealerdb.models.voucher_"></a>
<a id="schema_API.PagedResponse_DealerDB.Models.Voucher_"></a>
<a id="tocSapi.pagedresponse_dealerdb.models.voucher_"></a>
<a id="tocsapi.pagedresponse_dealerdb.models.voucher_"></a>

```json
{
  "Entities": [
    {
      "CreatedDate": "1970-01-01T00:00:00Z",
      "DealerCode": "string",
      "Deleted": true,
      "Email": "string",
      "ExpirationDate": "1970-01-01T00:00:00Z",
      "LicenseTo": "string",
      "ModifiedBy": "string",
      "OrderNumber": "string",
      "Punched": true,
      "PunchedDate": "1970-01-01T00:00:00Z",
      "Purpose": "string",
      "Type": "Commercial",
      "VoucherCode": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[DealerDB.Models.Voucher](#schemadealerdb.models.voucher)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.AvailableUpdateGroupSubscription_">API.PagedResponse_UpdateSystem.Models.AvailableUpdateGroupSubscription_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.availableupdategroupsubscription_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.AvailableUpdateGroupSubscription_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.availableupdategroupsubscription_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.availableupdategroupsubscription_"></a>

```json
{
  "Entities": [
    {
      "AvailableSubscriptions": [
        {
          "PackageType": {
            "Attribute": "string",
            "Category": "string",
            "Description": "string",
            "Icon": "string",
            "InventoryFrequency": 0,
            "InventoryPackage": "string",
            "LocalizedDescription": "string",
            "LocalizedName": "string",
            "MaxDeltaPackages": 0,
            "PackageTypeID": "string"
          },
          "SubscriptionType": "Required"
        }
      ],
      "UpdateGroup": {
        "Description": "string",
        "ID": "string",
        "InventoryFrequency": 0,
        "InventoryPackage": "string",
        "LocalizedDescription": "string",
        "LocalizedName": "string",
        "Priority": 1,
        "ReportField": "string",
        "UpdateType": "string",
        "ValidatingField": "string",
        "ValueToValidate": "string",
        "Version": "string"
      }
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.AvailableUpdateGroupSubscription](#schemaupdatesystem.models.availableupdategroupsubscription)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.Bundle_">API.PagedResponse_UpdateSystem.Models.Bundle_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.bundle_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.Bundle_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.bundle_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.bundle_"></a>

```json
{
  "Entities": [
    {
      "Active": true,
      "BundleID": "string",
      "BundleNumber": 0,
      "Description": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.Bundle](#schemaupdatesystem.models.bundle)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.ClientStatus_UpdateSystem.Models.PagedClientStatusMetadata_">API.PagedResponse_UpdateSystem.Models.ClientStatus_UpdateSystem.Models.PagedClientStatusMetadata_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.clientstatus_updatesystem.models.pagedclientstatusmetadata_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.ClientStatus_UpdateSystem.Models.PagedClientStatusMetadata_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.clientstatus_updatesystem.models.pagedclientstatusmetadata_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.clientstatus_updatesystem.models.pagedclientstatusmetadata_"></a>

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "MinutesElapsed": 0,
      "ReportResult": "string",
      "ReportResultIsValid": true,
      "ReportValue": "string",
      "Tag": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "ReportResultExpected": "string",
    "ReportResultLabel": "string",
    "ReportValueLabel": "string",
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.ClientStatus](#schemaupdatesystem.models.clientstatus)]|true|read-only|none|
|Metadata|[UpdateSystem.Models.PagedClientStatusMetadata](#schemaupdatesystem.models.pagedclientstatusmetadata)|true|none|none|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.Client_">API.PagedResponse_UpdateSystem.Models.Client_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.client_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.Client_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.client_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.client_"></a>

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "Tag": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.Client](#schemaupdatesystem.models.client)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.PackageStatusSummary_">API.PagedResponse_UpdateSystem.Models.PackageStatusSummary_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.packagestatussummary_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.PackageStatusSummary_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.packagestatussummary_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.packagestatussummary_"></a>

```json
{
  "Entities": [
    {
      "AverageDownloadTime": "string",
      "AverageInstallTime": "string",
      "Downloaded": 0,
      "Error": 0,
      "Installed": 0,
      "Package": "string",
      "PackageID": "string",
      "PackageStatusItems": [
        {
          "ClientID": "string",
          "ClientKey": "string",
          "DownloadTime": "string",
          "Downloaded": "string",
          "InstallCompleted": "string",
          "InstallResult": "string",
          "InstallStarted": "string",
          "InstallTime": "string",
          "Percentage": "string",
          "Size": "string",
          "Timestamp": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.PackageStatusSummary](#schemaupdatesystem.models.packagestatussummary)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.PackageTypeIDtoBundle_">API.PagedResponse_UpdateSystem.Models.PackageTypeIDtoBundle_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.packagetypeidtobundle_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.PackageTypeIDtoBundle_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.packagetypeidtobundle_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.packagetypeidtobundle_"></a>

```json
{
  "Entities": [
    {
      "BundleID": "string",
      "PackageTypeID": "string",
      "PackageVersion": 0,
      "Priority": 1,
      "SubscriptionType": "Required"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.PackageTypeIDtoBundle](#schemaupdatesystem.models.packagetypeidtobundle)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.PackageType_">API.PagedResponse_UpdateSystem.Models.PackageType_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.packagetype_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.PackageType_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.packagetype_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.packagetype_"></a>

```json
{
  "Entities": [
    {
      "Attribute": "string",
      "Category": "string",
      "Description": "string",
      "Icon": "string",
      "InventoryFrequency": 0,
      "InventoryPackage": "string",
      "LocalizedDescription": "string",
      "LocalizedName": "string",
      "MaxDeltaPackages": 0,
      "PackageTypeID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.PackageType](#schemaupdatesystem.models.packagetype)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.Package_">API.PagedResponse_UpdateSystem.Models.Package_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.package_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.Package_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.package_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.package_"></a>

```json
{
  "Entities": [
    {
      "Autorun": true,
      "CRC": "string",
      "Description": "string",
      "LocalizedName": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "Url": "string",
      "Version": 1
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.PriorityPackage_">API.PagedResponse_UpdateSystem.Models.PriorityPackage_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.prioritypackage_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.PriorityPackage_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.prioritypackage_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.prioritypackage_"></a>

```json
{
  "Entities": [
    {
      "Autorun": true,
      "CRC": "string",
      "ClientID": "string",
      "Description": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "PriorityPackageID": "string",
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "TimeStamp": "1970-01-01T00:00:00Z",
      "Url": "string",
      "Version": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.PriorityPackage](#schemaupdatesystem.models.prioritypackage)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.UpdateGroupClientRelationship_">API.PagedResponse_UpdateSystem.Models.UpdateGroupClientRelationship_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.updategroupclientrelationship_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.UpdateGroupClientRelationship_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.updategroupclientrelationship_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.updategroupclientrelationship_"></a>

```json
{
  "Entities": [
    {
      "Active": true,
      "ClientID": "string",
      "LastCheckin": "1970-01-01T00:00:00Z",
      "RelationshipID": "string",
      "UpdateGroupID": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.UpdateGroupClientRelationship](#schemaupdatesystem.models.updategroupclientrelationship)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.UpdateGroupSubscription_">API.PagedResponse_UpdateSystem.Models.UpdateGroupSubscription_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.updategroupsubscription_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.UpdateGroupSubscription_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.updategroupsubscription_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.updategroupsubscription_"></a>

```json
{
  "Entities": [
    {
      "ClientID": "string",
      "Include": true,
      "PackageTypeID": "string",
      "UpdateGroupID": "string",
      "UpdateGroupSubscriptionID": 0
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.UpdateGroupSubscription](#schemaupdatesystem.models.updategroupsubscription)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_API.PagedResponse_UpdateSystem.Models.UpdateGroup_">API.PagedResponse_UpdateSystem.Models.UpdateGroup_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.pagedresponse_updatesystem.models.updategroup_"></a>
<a id="schema_API.PagedResponse_UpdateSystem.Models.UpdateGroup_"></a>
<a id="tocSapi.pagedresponse_updatesystem.models.updategroup_"></a>
<a id="tocsapi.pagedresponse_updatesystem.models.updategroup_"></a>

```json
{
  "Entities": [
    {
      "Description": "string",
      "ID": "string",
      "InventoryFrequency": 0,
      "InventoryPackage": "string",
      "LocalizedDescription": "string",
      "LocalizedName": "string",
      "Priority": 1,
      "ReportField": "string",
      "UpdateType": "string",
      "ValidatingField": "string",
      "ValueToValidate": "string",
      "Version": "string"
    }
  ],
  "Metadata": {
    "Limit": 0,
    "Offset": 0,
    "TotalCount": 0
  }
}
```

A response containing a page of results and metadata concerning the results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[UpdateSystem.Models.UpdateGroup](#schemaupdatesystem.models.updategroup)]|true|read-only|none|
|Metadata|[API.PagedResponseMetadata](#schemaapi.pagedresponsemetadata)|true|none|Metadata for the paged response|

<h2 id="tocS_AuthorizationCodes.Shared.Models.AuthorizationCode">AuthorizationCodes.Shared.Models.AuthorizationCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.authorizationcode"></a>
<a id="schema_AuthorizationCodes.Shared.Models.AuthorizationCode"></a>
<a id="tocSauthorizationcodes.shared.models.authorizationcode"></a>
<a id="tocsauthorizationcodes.shared.models.authorizationcode"></a>

```json
{
  "Code": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ],
  "DefinitionID": "string",
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "EffectiveDate": "1970-01-01T00:00:00Z",
  "ID": 0,
  "IsDeleted": true,
  "ValidationParameters": [
    {
      "Name": "string",
      "Value": "string"
    }
  ]
}
```

Represents the model containing an authorization code used to unlock a feature in machines and EDT

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|The code to enter to unlock a feature. Read only.|
|CreatedByUserID|integer(int32)|false|none|The ID of the user that created this authorization code. Read only.|
|CreatedDate|string(date-time)|false|none|A timestamp of when this code was created. Read only.|
|DataParameters|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|none|The parameters and values contained as data in this authorization code. May not be updated.|
|DefinitionID|string|false|none|The id of the definition for this authorization code. May not be updated.|
|DeletedByUserID|integer(int32)|false|none|The ID of the user that deleted this authorization code. Read only.|
|DeletedDate|string(date-time)|false|none|A timestamp of when this authorization code was deleted. Read only.|
|EffectiveDate|string(date-time)|false|none|A date at which this code should begin being valid. Optional. Set on create only.|
|ID|integer(int32)|false|none|The identifier for the authorization code. Read only.|
|IsDeleted|boolean|false|none|Indicates whether this code is deleted.|
|ValidationParameters|[[AuthorizationCodes.Shared.Models.Parameter](#schemaauthorizationcodes.shared.models.parameter)]|false|none|The parameters and values used to validate this authorization code. May not be updated.|

<h2 id="tocS_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition">AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.authorizationcodedefinition"></a>
<a id="schema_AuthorizationCodes.Shared.Models.AuthorizationCodeDefinition"></a>
<a id="tocSauthorizationcodes.shared.models.authorizationcodedefinition"></a>
<a id="tocsauthorizationcodes.shared.models.authorizationcodedefinition"></a>

```json
{
  "AuthorizationID": "string",
  "CreatedByUserID": 0,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DataFields": [
    {
      "DigitsPrecision": 0,
      "MaxExponent": 0,
      "MaxValue": 0,
      "MinExponent": 0,
      "MinValue": 0,
      "Name": "string",
      "ScaleFactor": 0,
      "Signed": true,
      "Type": "Boolean"
    }
  ],
  "DeletedByUserID": 0,
  "DeletedDate": "1970-01-01T00:00:00Z",
  "Description": "string",
  "DurationAccuracy": 0,
  "DurationAmount": 0,
  "DurationUnits": "Weeks",
  "HashLength": 0,
  "ID": "string",
  "IsDeleted": true,
  "Name": "string",
  "RandomLength": 0,
  "ValidationFields": [
    {
      "Name": "string",
      "Type": "Boolean"
    }
  ]
}
```

Represents the model used to define how a type of authorization code is generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationID|string|false|none|The value used for securing codes generated.|
|CreatedByUserID|integer(int32)|false|none|The ID of the user that created this definition. Read only.|
|CreatedDate|string(date-time)|false|none|A timestamp of when this definition was created. Read only.|
|DataFields|[[AuthorizationCodes.Shared.Models.DataField](#schemaauthorizationcodes.shared.models.datafield)]|false|none|The defined fields to include in authorization codes generated from this definition. May not be updated.|
|DeletedByUserID|integer(int32)|false|none|The ID of the user that deleted this definition. Read only.|
|DeletedDate|string(date-time)|false|none|A timestamp of when this definition was deleted. Read only.|
|Description|string|false|none|A description of this definition. May not be updated.|
|DurationAccuracy|integer(int32)|false|none|The number of bits used for timestamp verification. Defaults to 5. May not be updated.|
|DurationAmount|integer(int32)|false|none|The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated.|
|DurationUnits|string|false|none|The units of duration used to calculate the Authorization Code. Defaults to 'Days'. May not be updated.|
|HashLength|integer(int32)|false|none|The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated.|
|ID|string|false|none|The ID of the authorization code definition. Read only.|
|IsDeleted|boolean|false|none|Indicates whether this definition is enabled. True if generating codes is disabled.|
|Name|string|true|none|The name of the authorization code definition. May not be updated.|
|RandomLength|integer(int32)|false|none|The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of "identical" authorization codes containing the same timestamp. Defaults to 5. May not be updated.|
|ValidationFields|[[AuthorizationCodes.Shared.Models.ValidationField](#schemaauthorizationcodes.shared.models.validationfield)]|false|none|The defined fields to verify when reading authorization codes generated from this definition. May not be updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|DurationUnits|Weeks|
|DurationUnits|Days|
|DurationUnits|Hours|
|DurationUnits|Minutes|

<h2 id="tocS_AuthorizationCodes.Shared.Models.AuthorizationCodeUser">AuthorizationCodes.Shared.Models.AuthorizationCodeUser</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.authorizationcodeuser"></a>
<a id="schema_AuthorizationCodes.Shared.Models.AuthorizationCodeUser"></a>
<a id="tocSauthorizationcodes.shared.models.authorizationcodeuser"></a>
<a id="tocsauthorizationcodes.shared.models.authorizationcodeuser"></a>

```json
{
  "Email": "string",
  "Name": "string",
  "UserID": 0,
  "Username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|string|false|none|none|
|Name|string|false|none|none|
|UserID|integer(int32)|false|none|none|
|Username|string|false|none|none|

<h2 id="tocS_AuthorizationCodes.Shared.Models.AuthorizationContactInformation">AuthorizationCodes.Shared.Models.AuthorizationContactInformation</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.authorizationcontactinformation"></a>
<a id="schema_AuthorizationCodes.Shared.Models.AuthorizationContactInformation"></a>
<a id="tocSauthorizationcodes.shared.models.authorizationcontactinformation"></a>
<a id="tocsauthorizationcodes.shared.models.authorizationcontactinformation"></a>

```json
{
  "AuthorizationCodeID": 0,
  "Code": "string",
  "Contact": "string",
  "CreatedBy": "string",
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Dealership": "string",
  "DefinitionName": "string",
  "Email": "string",
  "ID": 0,
  "Notes": "string",
  "Phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationCodeID|integer(int32)|true|none|AuthorizationCode ID that the contact information ties into.|
|Code|string|false|none|The authorization code. Read Only.|
|Contact|string|true|none|Name of contact requesting an authorization code. Minimum length of 3 characters.|
|CreatedBy|string|false|none|The name of the user that created this code. Read Only.|
|CreatedDate|string(date-time)|false|none|The date the authorization code was created.|
|DealerCode|string|true|none|Dealer code that relates to the dealership. Minimum length of 3 characters.|
|Dealership|string|true|none|Name of dealership. Minimum length of 3 characters.|
|DefinitionName|string|false|none|The name of the definition used for generating this authorization code. Read Only.|
|Email|string|false|none|Email of contact.|
|ID|integer(int32)|false|none|ID of authorizationContactInformation|
|Notes|string|false|none|Optional notes used for internal use.|
|Phone|string|true|none|Phone number of contact.|

<h2 id="tocS_AuthorizationCodes.Shared.Models.Category">AuthorizationCodes.Shared.Models.Category</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.category"></a>
<a id="schema_AuthorizationCodes.Shared.Models.Category"></a>
<a id="tocSauthorizationcodes.shared.models.category"></a>
<a id="tocsauthorizationcodes.shared.models.category"></a>

```json
{
  "Description": "string",
  "ID": "string",
  "Name": "string"
}
```

A category for Authorization Code Definitions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|A description of the Category.|
|ID|string|false|none|The ID of the Category.|
|Name|string|false|none|The Name of the Category.|

<h2 id="tocS_AuthorizationCodes.Shared.Models.CategoryUserReport">AuthorizationCodes.Shared.Models.CategoryUserReport</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.categoryuserreport"></a>
<a id="schema_AuthorizationCodes.Shared.Models.CategoryUserReport"></a>
<a id="tocSauthorizationcodes.shared.models.categoryuserreport"></a>
<a id="tocsauthorizationcodes.shared.models.categoryuserreport"></a>

```json
{
  "Categories": [
    {
      "Description": "string",
      "ID": "string",
      "Name": "string"
    }
  ],
  "User": {
    "Email": "string",
    "Name": "string",
    "UserID": 0,
    "Username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Categories|[[AuthorizationCodes.Shared.Models.Category](#schemaauthorizationcodes.shared.models.category)]|false|none|none|
|User|[AuthorizationCodes.Shared.Models.AuthorizationCodeUser](#schemaauthorizationcodes.shared.models.authorizationcodeuser)|false|none|none|

<h2 id="tocS_AuthorizationCodes.Shared.Models.CodeValidationModel">AuthorizationCodes.Shared.Models.CodeValidationModel</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.codevalidationmodel"></a>
<a id="schema_AuthorizationCodes.Shared.Models.CodeValidationModel"></a>
<a id="tocSauthorizationcodes.shared.models.codevalidationmodel"></a>
<a id="tocsauthorizationcodes.shared.models.codevalidationmodel"></a>

```json
{
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "IsValid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpirationDate|string(date-time)|false|none|none|
|IsValid|boolean|false|none|none|

<h2 id="tocS_AuthorizationCodes.Shared.Models.DataField">AuthorizationCodes.Shared.Models.DataField</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.datafield"></a>
<a id="schema_AuthorizationCodes.Shared.Models.DataField"></a>
<a id="tocSauthorizationcodes.shared.models.datafield"></a>
<a id="tocsauthorizationcodes.shared.models.datafield"></a>

```json
{
  "DigitsPrecision": 0,
  "MaxExponent": 0,
  "MaxValue": 0,
  "MinExponent": 0,
  "MinValue": 0,
  "Name": "string",
  "ScaleFactor": 0,
  "Signed": true,
  "Type": "Boolean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DigitsPrecision|integer(int32)|false|none|The number of decimal digits to be used by this data field. Required only by the 'Float' data type. Must be in range 1 - 15.|
|MaxExponent|integer(int32)|false|none|The maximum exponent to be used by this data field. Required only by the 'Float' data type. May not be greater than 307.|
|MaxValue|number(double)|false|none|The maximum value that can be represented by this data field. Required only by the 'Decimal' data type.|
|MinExponent|integer(int32)|false|none|The minimum exponent to be used by this data field. Required only by the 'Float' data type. May not be less than -292.|
|MinValue|number(double)|false|none|The minimum value that can be represented by this data field. Required only by the 'Decimal' data type.|
|Name|string|true|none|The name of the field.|
|ScaleFactor|number(double)|false|none|The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the 'Decimal' data type.|
|Signed|boolean|false|none|Indicates whether this value is signed. Required only by the 'Float' data type.|
|Type|string|true|none|The type of this data field.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Boolean|
|Type|Decimal|
|Type|Float|
|Type|VariableLengthByteArray|

<h2 id="tocS_AuthorizationCodes.Shared.Models.Parameter">AuthorizationCodes.Shared.Models.Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.parameter"></a>
<a id="schema_AuthorizationCodes.Shared.Models.Parameter"></a>
<a id="tocSauthorizationcodes.shared.models.parameter"></a>
<a id="tocsauthorizationcodes.shared.models.parameter"></a>

```json
{
  "Name": "string",
  "Value": "string"
}
```

A parameter used to create an authorization code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|true|none|The name of the parameter. May not be updated.|
|Value|string|true|none|The value of the parameter. May not be updated.|

<h2 id="tocS_AuthorizationCodes.Shared.Models.ValidationField">AuthorizationCodes.Shared.Models.ValidationField</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcodes.shared.models.validationfield"></a>
<a id="schema_AuthorizationCodes.Shared.Models.ValidationField"></a>
<a id="tocSauthorizationcodes.shared.models.validationfield"></a>
<a id="tocsauthorizationcodes.shared.models.validationfield"></a>

```json
{
  "Name": "string",
  "Type": "Boolean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|true|none|The name of the field.|
|Type|string|true|none|The type for this validation field.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Boolean|
|Type|Float|
|Type|Int|
|Type|StringCaseInsensitive|
|Type|StringCaseSensitive|

<h2 id="tocS_BuildSystem.Shared.DTO.Activity">BuildSystem.Shared.DTO.Activity</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.activity"></a>
<a id="schema_BuildSystem.Shared.DTO.Activity"></a>
<a id="tocSbuildsystem.shared.dto.activity"></a>
<a id="tocsbuildsystem.shared.dto.activity"></a>

```json
{
  "ActivityID": 0,
  "Deleted": true,
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ],
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

A DTO for an IActivity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityID|integer(int32)|false|none|The ID of the activity|
|Deleted|boolean|false|none|none|
|Name|string|false|none|The name of the activity|
|Parameters|[[BuildSystem.Shared.DTO.Parameter](#schemabuildsystem.shared.dto.parameter)]|false|read-only|The parameters for this activity|
|Steps|[[BuildSystem.Shared.DTO.ActivityStep](#schemabuildsystem.shared.dto.activitystep)]|false|read-only|The steps which are performed for this activity|

<h2 id="tocS_BuildSystem.Shared.DTO.ActivityRun">BuildSystem.Shared.DTO.ActivityRun</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.activityrun"></a>
<a id="schema_BuildSystem.Shared.DTO.ActivityRun"></a>
<a id="tocSbuildsystem.shared.dto.activityrun"></a>
<a id="tocsbuildsystem.shared.dto.activityrun"></a>

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  },
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

A DTO for an IActivityRun

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityRunID|integer(int32)|false|none|The identifier for the ActivityRun|
|EndDate|string(date-time)|false|none|Read Only. The UTC date and time when the activity completed|
|JobActivityID|integer(int32)|false|none|Read Only. The ID of the Job Activity that defines this activity run|
|JobRunID|integer(int32)|false|none|Read Only. The ID of the JobRun under which this ActivityRun is executing|
|Parameters|[[BuildSystem.Shared.DTO.ParameterValue](#schemabuildsystem.shared.dto.parametervalue)]|false|read-only|The parameters used for this run of the activity.  Parameters cannot be added or removed, but output parameter values may be updated.|
|StartDate|string(date-time)|false|none|Read Only. The UTC date and time when the activity started|
|Status|[BuildSystem.Shared.DTO.ActivityRunStatus](#schemabuildsystem.shared.dto.activityrunstatus)|true|none|A DTO for an IActivityRunStatus|
|Steps|[[BuildSystem.Shared.DTO.ActivityStep](#schemabuildsystem.shared.dto.activitystep)]|false|read-only|Read Only. The steps to be executed for the activity.  These steps come from the relationship through JobActivity down to ActivityStep|

<h2 id="tocS_BuildSystem.Shared.DTO.ActivityRunStatus">BuildSystem.Shared.DTO.ActivityRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.activityrunstatus"></a>
<a id="schema_BuildSystem.Shared.DTO.ActivityRunStatus"></a>
<a id="tocSbuildsystem.shared.dto.activityrunstatus"></a>
<a id="tocsbuildsystem.shared.dto.activityrunstatus"></a>

```json
{
  "CurrentStep": 0,
  "Status": "Ready",
  "StepProgress": 0,
  "StepStatus": "string"
}
```

A DTO for an IActivityRunStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentStep|integer(int32)|false|none|The activity step currently executing, indicated by numeric order|
|Status|string|false|none|The status of the ActivityRun|
|StepProgress|integer(int32)|false|none|The percent progress from the currently executing step.  This value shall be null if progress is not available|
|StepStatus|string|false|none|The status text from the currently executing step|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Ready|
|Status|InProgress|
|Status|Succeeded|
|Status|Cancelled|
|Status|Failed|

<h2 id="tocS_BuildSystem.Shared.DTO.ActivityStep">BuildSystem.Shared.DTO.ActivityStep</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.activitystep"></a>
<a id="schema_BuildSystem.Shared.DTO.ActivityStep"></a>
<a id="tocSbuildsystem.shared.dto.activitystep"></a>
<a id="tocsbuildsystem.shared.dto.activitystep"></a>

```json
{
  "ActivityID": 0,
  "ActivityStepID": 0,
  "ImplementationID": "string",
  "ParameterMappings": [
    {
      "Name": "string",
      "Source": "string",
      "SourceType": "Constant"
    }
  ],
  "RunOrder": 0,
  "StepID": 0,
  "StepName": "string",
  "UseConfig": "string"
}
```

A DTO for an IActivityStep

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityID|integer(int32)|false|none|The id of the activity this activity step belongs to|
|ActivityStepID|integer(int32)|false|none|The id of this activity step|
|ImplementationID|string|false|none|The implementation id which is used to look up the step implementation|
|ParameterMappings|[[BuildSystem.Shared.DTO.ParameterMapping](#schemabuildsystem.shared.dto.parametermapping)]|false|read-only|The mapping of values from a source to be used for the step parameters|
|RunOrder|integer(int32)|false|none|The order of this activity step relative to other activity steps|
|StepID|integer(int32)|false|none|The id of the step|
|StepName|string|false|none|The name of the step|
|UseConfig|string|false|none|Indicates the configuration for the ActivityStep to use at runtime.  The build agent must provide this configuration|

<h2 id="tocS_BuildSystem.Shared.DTO.Agent">BuildSystem.Shared.DTO.Agent</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.agent"></a>
<a id="schema_BuildSystem.Shared.DTO.Agent"></a>
<a id="tocSbuildsystem.shared.dto.agent"></a>
<a id="tocsbuildsystem.shared.dto.agent"></a>

```json
{
  "AgentID": 0,
  "KeepAliveInterval": 0,
  "MachineName": "string",
  "Status": {
    "LastStatusUpdate": "1970-01-01T00:00:00Z",
    "Online": true
  },
  "StepConfigurations": [
    {
      "Configurations": [
        "string"
      ],
      "StepImplementationID": "string"
    }
  ],
  "UserID": 0
}
```

A DTO for an IAgent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentID|integer(int32)|false|none|The id of the Agent|
|KeepAliveInterval|integer(int32)|true|none|The 'Heartbeat Interval' used by the Build Agent.|
|MachineName|string|true|none|The machine name of the computer the agent is running on|
|Status|[BuildSystem.Shared.DTO.AgentStatus](#schemabuildsystem.shared.dto.agentstatus)|true|none|A DTO for an IAgentStatus|
|StepConfigurations|[[BuildSystem.Shared.DTO.StepConfiguration](#schemabuildsystem.shared.dto.stepconfiguration)]|false|read-only|The agent's step configurations|
|UserID|integer(int32)|true|none|The UserID of the Agent|

<h2 id="tocS_BuildSystem.Shared.DTO.AgentStatus">BuildSystem.Shared.DTO.AgentStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.agentstatus"></a>
<a id="schema_BuildSystem.Shared.DTO.AgentStatus"></a>
<a id="tocSbuildsystem.shared.dto.agentstatus"></a>
<a id="tocsbuildsystem.shared.dto.agentstatus"></a>

```json
{
  "LastStatusUpdate": "1970-01-01T00:00:00Z",
  "Online": true
}
```

A DTO for an IAgentStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastStatusUpdate|string(date-time)|false|none|ReadOnly. The UTC date and time of the last status update|
|Online|boolean|true|none|Indicates if the agent is online|

<h2 id="tocS_BuildSystem.Shared.DTO.Job">BuildSystem.Shared.DTO.Job</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.job"></a>
<a id="schema_BuildSystem.Shared.DTO.Job"></a>
<a id="tocSbuildsystem.shared.dto.job"></a>
<a id="tocsbuildsystem.shared.dto.job"></a>

```json
{
  "Activities": [
    {
      "ActivityID": 0,
      "JobActivityID": 0,
      "JobID": 0,
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0
    }
  ],
  "Deleted": true,
  "JobID": 0,
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ]
}
```

A DTO for an IJob

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activities|[[BuildSystem.Shared.DTO.JobActivity](#schemabuildsystem.shared.dto.jobactivity)]|false|read-only|The activities which are performed for the job|
|Deleted|boolean|false|none|Indicates if the job has been deleted.|
|JobID|integer(int32)|false|none|The ID of the job|
|Name|string|false|none|The name of the job|
|Parameters|[[BuildSystem.Shared.DTO.Parameter](#schemabuildsystem.shared.dto.parameter)]|false|read-only|The parameters for the job|

<h2 id="tocS_BuildSystem.Shared.DTO.JobActivity">BuildSystem.Shared.DTO.JobActivity</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.jobactivity"></a>
<a id="schema_BuildSystem.Shared.DTO.JobActivity"></a>
<a id="tocSbuildsystem.shared.dto.jobactivity"></a>
<a id="tocsbuildsystem.shared.dto.jobactivity"></a>

```json
{
  "ActivityID": 0,
  "JobActivityID": 0,
  "JobID": 0,
  "ParameterMappings": [
    {
      "Name": "string",
      "Source": "string",
      "SourceType": "Constant"
    }
  ],
  "RunOrder": 0
}
```

A DTO for an IJobActivity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityID|integer(int32)|false|none|The ID of the activity to be run as part of the job|
|JobActivityID|integer(int32)|false|none|The ID of this job activity|
|JobID|integer(int32)|false|none|The ID of the job this job activity belongs to|
|ParameterMappings|[[BuildSystem.Shared.DTO.ParameterMapping](#schemabuildsystem.shared.dto.parametermapping)]|false|read-only|The mapping of values from a source to be used for the activity parameters|
|RunOrder|integer(int32)|false|none|The order of this job activity relative to others in the job|

<h2 id="tocS_BuildSystem.Shared.DTO.JobRun">BuildSystem.Shared.DTO.JobRun</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.jobrun"></a>
<a id="schema_BuildSystem.Shared.DTO.JobRun"></a>
<a id="tocSbuildsystem.shared.dto.jobrun"></a>
<a id="tocsbuildsystem.shared.dto.jobrun"></a>

```json
{
  "ActivityRuns": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

A DTO for an IJobRun

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityRuns|[[BuildSystem.Shared.DTO.ActivityRun](#schemabuildsystem.shared.dto.activityrun)]|false|read-only|The activity runs belonging to this JobRun|
|EndDate|string(date-time)|false|none|The UTC date and time when the job completed|
|JobID|integer(int32)|false|none|The ID of the job that defines the run|
|JobRunID|integer(int32)|false|none|The ID of this JobRun|
|Parameters|[[BuildSystem.Shared.DTO.ParameterValue](#schemabuildsystem.shared.dto.parametervalue)]|false|read-only|The parameters used for this run of the job|
|StartDate|string(date-time)|false|none|The UTC date and time when the job started|
|Status|string|false|none|The status of this JobRun|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Ready|
|Status|InProgress|
|Status|Succeeded|
|Status|Cancelled|
|Status|Failed|

<h2 id="tocS_BuildSystem.Shared.DTO.Parameter">BuildSystem.Shared.DTO.Parameter</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.parameter"></a>
<a id="schema_BuildSystem.Shared.DTO.Parameter"></a>
<a id="tocSbuildsystem.shared.dto.parameter"></a>
<a id="tocsbuildsystem.shared.dto.parameter"></a>

```json
{
  "Direction": "Input",
  "Name": "string",
  "Type": "String"
}
```

A DTO for an IParameter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Direction|string|false|none|The parameter direction (Input or Output)|
|Name|string|false|none|The name of the parameter|
|Type|string|false|none|The data type of the parameter|

#### Enumerated Values

|Property|Value|
|---|---|
|Direction|Input|
|Direction|Output|
|Type|String|
|Type|Boolean|
|Type|Integer|
|Type|Float|
|Type|StringDictionary|

<h2 id="tocS_BuildSystem.Shared.DTO.ParameterMapping">BuildSystem.Shared.DTO.ParameterMapping</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.parametermapping"></a>
<a id="schema_BuildSystem.Shared.DTO.ParameterMapping"></a>
<a id="tocSbuildsystem.shared.dto.parametermapping"></a>
<a id="tocsbuildsystem.shared.dto.parametermapping"></a>

```json
{
  "Name": "string",
  "Source": "string",
  "SourceType": "Constant"
}
```

A DTO for an IParameterMapping

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The name of the parameter this mapping applies to|
|Source|string|false|none|The source of the value.  The meaning of this value is determined by the source type.  When the source type is “Constant” then source is the value formatted as a string.  When the source type is “Variable” then the source is the name of the variable|
|SourceType|string|false|none|The source type used for supplying the parameter|

#### Enumerated Values

|Property|Value|
|---|---|
|SourceType|Constant|
|SourceType|Variable|

<h2 id="tocS_BuildSystem.Shared.DTO.ParameterValue">BuildSystem.Shared.DTO.ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.parametervalue"></a>
<a id="schema_BuildSystem.Shared.DTO.ParameterValue"></a>
<a id="tocSbuildsystem.shared.dto.parametervalue"></a>
<a id="tocsbuildsystem.shared.dto.parametervalue"></a>

```json
{
  "Direction": "Input",
  "Name": "string",
  "Value": "string"
}
```

A DTO for an IParameterValue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Direction|string|false|none|The parameter direction (Input or Output)|
|Name|string|false|none|The name of the parameter this value is for|
|Value|string|false|none|The parameter value in string representation|

#### Enumerated Values

|Property|Value|
|---|---|
|Direction|Input|
|Direction|Output|

<h2 id="tocS_BuildSystem.Shared.DTO.Step">BuildSystem.Shared.DTO.Step</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.step"></a>
<a id="schema_BuildSystem.Shared.DTO.Step"></a>
<a id="tocSbuildsystem.shared.dto.step"></a>
<a id="tocsbuildsystem.shared.dto.step"></a>

```json
{
  "ConfigRequired": true,
  "Deleted": true,
  "Description": "string",
  "ImplementationID": "string",
  "Name": "string",
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Type": "String"
    }
  ],
  "StepID": 0
}
```

Step

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigRequired|boolean|true|none|Indicates if the step requires configuration values to be provided by the build agent|
|Deleted|boolean|false|none|Read Only.  Indicates if the record is deleted.|
|Description|string|false|none|A description of the step to be presented to a user|
|ImplementationID|string|true|none|The implementation ID used to lookup the step implementation when it is executed|
|Name|string|true|none|The name of the step|
|Parameters|[[BuildSystem.Shared.DTO.Parameter](#schemabuildsystem.shared.dto.parameter)]|false|read-only|The parameters for this step|
|StepID|integer(int32)|false|none|The ID of the step|

<h2 id="tocS_BuildSystem.Shared.DTO.StepConfiguration">BuildSystem.Shared.DTO.StepConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.dto.stepconfiguration"></a>
<a id="schema_BuildSystem.Shared.DTO.StepConfiguration"></a>
<a id="tocSbuildsystem.shared.dto.stepconfiguration"></a>
<a id="tocsbuildsystem.shared.dto.stepconfiguration"></a>

```json
{
  "Configurations": [
    "string"
  ],
  "StepImplementationID": "string"
}
```

Step Configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configurations|[string]|false|none|The configuration names supported.  The configurations collection is empty for steps which do not require configuration.|
|StepImplementationID|string|true|none|The Implementation ID of the step this configuration is for|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IActivityRun">BuildSystem.Shared.Interfaces.IActivityRun</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.iactivityrun"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IActivityRun"></a>
<a id="tocSbuildsystem.shared.interfaces.iactivityrun"></a>
<a id="tocsbuildsystem.shared.interfaces.iactivityrun"></a>

```json
{
  "ActivityRunID": 0,
  "EndDate": "1970-01-01T00:00:00Z",
  "JobActivityID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": {
    "CurrentStep": 0,
    "Status": "Ready",
    "StepProgress": 0,
    "StepStatus": "string"
  },
  "Steps": [
    {
      "ActivityID": 0,
      "ActivityStepID": 0,
      "ImplementationID": "string",
      "ParameterMappings": [
        {
          "Name": "string",
          "Source": "string",
          "SourceType": "Constant"
        }
      ],
      "RunOrder": 0,
      "StepID": 0,
      "StepName": "string",
      "UseConfig": "string"
    }
  ]
}
```

IActivityRun

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityRunID|integer(int32)|false|read-only|ActivityRunID|
|EndDate|string(date-time)|false|read-only|EndDate|
|JobActivityID|integer(int32)|false|read-only|JobActivityID|
|JobRunID|integer(int32)|false|read-only|JobRunID|
|Parameters|[[BuildSystem.Shared.Interfaces.IParameterValue](#schemabuildsystem.shared.interfaces.iparametervalue)]|false|none|Parameters|
|StartDate|string(date-time)|false|read-only|StartDate|
|Status|[BuildSystem.Shared.Interfaces.IActivityRunStatus](#schemabuildsystem.shared.interfaces.iactivityrunstatus)|false|none|Declares members of objects that communicate the progress of an <br>            asynchronous activity run.|
|Steps|[[BuildSystem.Shared.Interfaces.IActivityStep](#schemabuildsystem.shared.interfaces.iactivitystep)]|false|read-only|Steps|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IActivityRunStatus">BuildSystem.Shared.Interfaces.IActivityRunStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.iactivityrunstatus"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IActivityRunStatus"></a>
<a id="tocSbuildsystem.shared.interfaces.iactivityrunstatus"></a>
<a id="tocsbuildsystem.shared.interfaces.iactivityrunstatus"></a>

```json
{
  "CurrentStep": 0,
  "Status": "Ready",
  "StepProgress": 0,
  "StepStatus": "string"
}
```

Declares members of objects that communicate the progress of an 
            asynchronous activity run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentStep|integer(int32)|false|none|Gets or sets the number of the step the activity is currently running.|
|Status|string|false|none|Gets or sets the status of the activity run.|
|StepProgress|integer(int32)|false|none|Gets or sets a measurement of the current progress of the current step.|
|StepStatus|string|false|none|Gets or sets a description of the current status of the currently <br>            running step.|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Ready|
|Status|InProgress|
|Status|Succeeded|
|Status|Cancelled|
|Status|Failed|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IActivityStep">BuildSystem.Shared.Interfaces.IActivityStep</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.iactivitystep"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IActivityStep"></a>
<a id="tocSbuildsystem.shared.interfaces.iactivitystep"></a>
<a id="tocsbuildsystem.shared.interfaces.iactivitystep"></a>

```json
{
  "ActivityID": 0,
  "ActivityStepID": 0,
  "ImplementationID": "string",
  "ParameterMappings": [
    {
      "Name": "string",
      "Source": "string",
      "SourceType": "Constant"
    }
  ],
  "RunOrder": 0,
  "StepID": 0,
  "StepName": "string",
  "UseConfig": "string"
}
```

IActivityStep

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityID|integer(int32)|false|none|ActivityID|
|ActivityStepID|integer(int32)|false|read-only|ActivityStepID|
|ImplementationID|string|false|read-only|Implementation ID|
|ParameterMappings|[[BuildSystem.Shared.Interfaces.IParameterMapping](#schemabuildsystem.shared.interfaces.iparametermapping)]|false|none|ParameterMappings|
|RunOrder|integer(int32)|false|none|run order|
|StepID|integer(int32)|false|none|step id|
|StepName|string|false|read-only|steo name|
|UseConfig|string|false|none|UseConfig|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IJobRun">BuildSystem.Shared.Interfaces.IJobRun</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.ijobrun"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IJobRun"></a>
<a id="tocSbuildsystem.shared.interfaces.ijobrun"></a>
<a id="tocsbuildsystem.shared.interfaces.ijobrun"></a>

```json
{
  "ActivityRuns": [
    {
      "ActivityRunID": 0,
      "EndDate": "1970-01-01T00:00:00Z",
      "JobActivityID": 0,
      "JobRunID": 0,
      "Parameters": [
        {
          "Direction": "Input",
          "Name": "string",
          "Value": "string"
        }
      ],
      "StartDate": "1970-01-01T00:00:00Z",
      "Status": {
        "CurrentStep": 0,
        "Status": "Ready",
        "StepProgress": 0,
        "StepStatus": "string"
      },
      "Steps": [
        {
          "ActivityID": 0,
          "ActivityStepID": 0,
          "ImplementationID": "string",
          "ParameterMappings": [
            {
              "Name": "string",
              "Source": "string",
              "SourceType": "Constant"
            }
          ],
          "RunOrder": 0,
          "StepID": 0,
          "StepName": "string",
          "UseConfig": "string"
        }
      ]
    }
  ],
  "EndDate": "1970-01-01T00:00:00Z",
  "JobID": 0,
  "JobRunID": 0,
  "Parameters": [
    {
      "Direction": "Input",
      "Name": "string",
      "Value": "string"
    }
  ],
  "StartDate": "1970-01-01T00:00:00Z",
  "Status": "Ready"
}
```

interface of JobRun

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityRuns|[[BuildSystem.Shared.Interfaces.IActivityRun](#schemabuildsystem.shared.interfaces.iactivityrun)]|false|none|ActivityRuns|
|EndDate|string(date-time)|false|none|end date|
|JobID|integer(int32)|false|none|job id|
|JobRunID|integer(int32)|false|read-only|JobRunID|
|Parameters|[[BuildSystem.Shared.Interfaces.IParameterValue](#schemabuildsystem.shared.interfaces.iparametervalue)]|false|read-only|Parameters|
|StartDate|string(date-time)|false|none|Start Date|
|Status|string|false|none|status|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Ready|
|Status|InProgress|
|Status|Succeeded|
|Status|Cancelled|
|Status|Failed|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IParameterMapping">BuildSystem.Shared.Interfaces.IParameterMapping</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.iparametermapping"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IParameterMapping"></a>
<a id="tocSbuildsystem.shared.interfaces.iparametermapping"></a>
<a id="tocsbuildsystem.shared.interfaces.iparametermapping"></a>

```json
{
  "Name": "string",
  "Source": "string",
  "SourceType": "Constant"
}
```

IParameterMapping

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|name|
|Source|string|false|none|Source|
|SourceType|string|false|none|SourceType|

#### Enumerated Values

|Property|Value|
|---|---|
|SourceType|Constant|
|SourceType|Variable|

<h2 id="tocS_BuildSystem.Shared.Interfaces.IParameterValue">BuildSystem.Shared.Interfaces.IParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemabuildsystem.shared.interfaces.iparametervalue"></a>
<a id="schema_BuildSystem.Shared.Interfaces.IParameterValue"></a>
<a id="tocSbuildsystem.shared.interfaces.iparametervalue"></a>
<a id="tocsbuildsystem.shared.interfaces.iparametervalue"></a>

```json
{
  "Direction": "Input",
  "Name": "string",
  "Value": "string"
}
```

Declares members that must be implemented by parameter value objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Direction|string|false|none|Gets or sets a value indicating whether the parameter value is an <br>            input to the build part or an output from the build part.|
|Name|string|false|none|Gets or sets the name of the parameter.|
|Value|string|false|none|Gets or sets the value of the parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|Direction|Input|
|Direction|Output|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentDefinition">ContentSubmission.Shared.BusinessEntities.ContentDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentdefinition"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentDefinition"></a>
<a id="tocScontentsubmission.shared.businessentities.contentdefinition"></a>
<a id="tocscontentsubmission.shared.businessentities.contentdefinition"></a>

```json
{
  "Attributes": [
    {
      "ContentDefinitionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "ContentDefinitionID": 0,
  "Description": "string",
  "Name": "string",
  "PackageTypeID": "string",
  "TypeID": 0
}
```

The definition of the content for submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|[[ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute](#schemacontentsubmission.shared.businessentities.contentdefinitionattribute)]|false|none|Attributes of this ContentDefinition|
|ContentDefinitionID|integer(int32)|false|none|The ID of this content definition.|
|Description|string|true|none|The description used on the package type in the AGCO Update System|
|Name|string|false|none|The name of this content. Name must be valid for Attribute on PackageType.|
|PackageTypeID|string|false|none|Read Only. The ID of the package type used for this content.|
|TypeID|integer(int32)|false|none|The type of content.|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute">ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentdefinitionattribute"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentDefinitionAttribute"></a>
<a id="tocScontentsubmission.shared.businessentities.contentdefinitionattribute"></a>
<a id="tocscontentsubmission.shared.businessentities.contentdefinitionattribute"></a>

```json
{
  "ContentDefinitionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

An attribute of a definition of the content for submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentDefinitionID|integer(int32)|false|none|The ID of the content definition to which this attribute belongs.|
|ID|integer(int32)|false|none|The ID of this attribute.|
|Name|string|true|none|The name of this Attribute.|
|Value|string|false|none|The value of this Attribute|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion">ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentreleaseversion"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentReleaseVersion"></a>
<a id="tocScontentsubmission.shared.businessentities.contentreleaseversion"></a>
<a id="tocscontentsubmission.shared.businessentities.contentreleaseversion"></a>

```json
{
  "ContentDefinitionID": 0,
  "ContentReleaseID": 0,
  "Deleted": true,
  "PublisherUserID": 0,
  "ReleaseID": 0,
  "TestReportUrl": "string",
  "UpdatedDate": "1970-01-01T00:00:00Z",
  "Version": 0
}
```

ContentReleaseVersion class

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentDefinitionID|integer(int32)|false|none|ContentDefinitionID|
|ContentReleaseID|integer(int32)|false|none|ContentReleaseID|
|Deleted|boolean|false|none|deleted flag|
|PublisherUserID|integer(int32)|false|none|PublisherUser ID|
|ReleaseID|integer(int32)|false|none|rele4ase Id|
|TestReportUrl|string|false|none|The URL at which test reports for this content can be found|
|UpdatedDate|string(date-time)|false|none|Updated Date|
|Version|integer(int32)|false|none|version|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentSubmission">ContentSubmission.Shared.BusinessEntities.ContentSubmission</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentsubmission"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentSubmission"></a>
<a id="tocScontentsubmission.shared.businessentities.contentsubmission"></a>
<a id="tocscontentsubmission.shared.businessentities.contentsubmission"></a>

```json
{
  "Attributes": [
    {
      "ContentSubmissionID": 0,
      "ID": 0,
      "Name": "string",
      "Value": "string"
    }
  ],
  "BuildID": 0,
  "ContentDefinitionID": 0,
  "ContentSubmissionID": 0,
  "Definition": {
    "Attributes": [
      {
        "ContentDefinitionID": 0,
        "ID": 0,
        "Name": "string",
        "Value": "string"
      }
    ],
    "ContentDefinitionID": 0,
    "Description": "string",
    "Name": "string",
    "PackageTypeID": "string",
    "TypeID": 0
  },
  "JobRunID": 0,
  "PackageID": "string",
  "ReleaseNotes": "string",
  "Repository": "string",
  "Revision": 0,
  "SubmissionDate": "1970-01-01T00:00:00Z",
  "UserID": 0,
  "Version": 0
}
```

A content submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|[[ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute](#schemacontentsubmission.shared.businessentities.contentsubmissionattribute)]|false|none|Attributes of this ContentSubmission|
|BuildID|integer(int32)|false|none|ReadOnly. The ID of the Azure DevOps Build which will build the content package.|
|ContentDefinitionID|integer(int32)|false|none|The ID of the Content Definition.|
|ContentSubmissionID|integer(int32)|false|none|The ID of this Content Submission.|
|Definition|[ContentSubmission.Shared.BusinessEntities.ContentDefinition](#schemacontentsubmission.shared.businessentities.contentdefinition)|false|none|The definition of the content for submission|
|JobRunID|integer(int32)|false|none|ReadOnly. The ID of the JobRun which will build the content package.|
|PackageID|string|false|none|The ID of package generated by this content submission.|
|ReleaseNotes|string|false|none|Release Notes for this ContentSubmission|
|Repository|string|false|none|The SVN repository used as the source of this content submission|
|Revision|integer(int32)|false|none|The SVN revision used as the source of this content submission.|
|SubmissionDate|string(date-time)|false|none|Read Only. The UTC date and time the content submission was made.|
|UserID|integer(int32)|false|none|Read Only. The ID of the user who submitted the content|
|Version|integer(int32)|false|none|Optional.  The version number assigned to this Content Submission and the resulting Package.<br>            If not provided, version shall be 1 if it is the first content submission for the <br>            ContentDefinitionID otherwise it shall be the highest content submission version for the<br>            specified ContentDefinitionID incremented by 1.|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute">ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentsubmissionattribute"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentSubmissionAttribute"></a>
<a id="tocScontentsubmission.shared.businessentities.contentsubmissionattribute"></a>
<a id="tocscontentsubmission.shared.businessentities.contentsubmissionattribute"></a>

```json
{
  "ContentSubmissionID": 0,
  "ID": 0,
  "Name": "string",
  "Value": "string"
}
```

The definition of the content for submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentSubmissionID|integer(int32)|false|none|The ID of the content submission to which this attribute belongs.|
|ID|integer(int32)|false|none|The ID of this attribute.|
|Name|string|true|none|The name of this Attribute.|
|Value|string|false|none|The value of this Attribute|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.ContentSubmissionType">ContentSubmission.Shared.BusinessEntities.ContentSubmissionType</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.contentsubmissiontype"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.ContentSubmissionType"></a>
<a id="tocScontentsubmission.shared.businessentities.contentsubmissiontype"></a>
<a id="tocscontentsubmission.shared.businessentities.contentsubmissiontype"></a>

```json
{
  "AttributeTemplate": "string",
  "BuildDefinitionID": 0,
  "CategoryTemplate": "string",
  "Description": "string",
  "Enabled": true,
  "ID": 0,
  "InventoryPackageID": "string",
  "JobID": 0,
  "Name": "string",
  "ReleaseNotesDescription": "string"
}
```

A type of content available for submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeTemplate|string|false|none|A template for the Attribute from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|BuildDefinitionID|integer(int32)|false|none|The ID of the Azure DevOps Build Definition for which to create a Build. Either 'BuildDefinitionID' or 'JobID' is required.|
|CategoryTemplate|string|false|none|A template for the category from which to read the version of the package installed. The following placeholders are valid: {ContentDefinitionType}, {ContentDefinitionID}, {ContentDefinitionName}|
|Description|string|true|none|A description for the Content Submission Type|
|Enabled|boolean|false|none|Indicates whether this submission type is available to be used|
|ID|integer(int32)|false|none|The ID of the Content Submission Type|
|InventoryPackageID|string|false|none|The ID of the Inventory Package from which to read the version of the package installed.|
|JobID|integer(int32)|false|none|The ID of the JobDefinition for which to initiate a Job. A value of '0' will cause a submission to fail. Either 'BuildDefinitionID' or 'JobID' is required.|
|Name|string|true|none|The Name of the Content Submission Type|
|ReleaseNotesDescription|string|false|none|A description of how release notes for this Content Submission Type are used|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.Release">ContentSubmission.Shared.BusinessEntities.Release</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.release"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.Release"></a>
<a id="tocScontentsubmission.shared.businessentities.release"></a>
<a id="tocscontentsubmission.shared.businessentities.release"></a>

```json
{
  "BuildDate": "1970-01-01T00:00:00Z",
  "BundleIDs": [
    "string"
  ],
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "ReleaseID": 0,
  "ReleaseNumber": "string",
  "Visible": true
}
```

Release class

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildDate|string(date-time)|false|none|Build Date|
|BundleIDs|[string]|false|none|IDs of AUC Bundles associated with this Release.|
|ReleaseDate|string(date-time)|false|none|Release Date|
|ReleaseID|integer(int32)|false|none|Release ID|
|ReleaseNumber|string|false|none|Release Number|
|Visible|boolean|false|none|Visible|

<h2 id="tocS_ContentSubmission.Shared.BusinessEntities.UserContentDefinition">ContentSubmission.Shared.BusinessEntities.UserContentDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacontentsubmission.shared.businessentities.usercontentdefinition"></a>
<a id="schema_ContentSubmission.Shared.BusinessEntities.UserContentDefinition"></a>
<a id="tocScontentsubmission.shared.businessentities.usercontentdefinition"></a>
<a id="tocscontentsubmission.shared.businessentities.usercontentdefinition"></a>

```json
{
  "ContentDefinitionID": 0,
  "UserContentDefinitionID": 0,
  "UserID": 0
}
```

Relationship indicating that a User can manage submissions for the Content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentDefinitionID|integer(int32)|false|none|The ID of the ContentDefinition.|
|UserContentDefinitionID|integer(int32)|false|none|Read Only. The ID of the User to ContentDefinition relationship.|
|UserID|integer(int32)|false|none|The ID of the user.|

<h2 id="tocS_DealerDB.Models.Dealer">DealerDB.Models.Dealer</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.dealer"></a>
<a id="schema_DealerDB.Models.Dealer"></a>
<a id="tocSdealerdb.models.dealer"></a>
<a id="tocsdealerdb.models.dealer"></a>

```json
{
  "BillingAddress": "string",
  "BillingAddress2": "string",
  "BillingAddress3": "string",
  "BillingAddress4": "string",
  "BillingCity": "string",
  "BillingCountry": "string",
  "BillingCountryCode": "string",
  "BillingState": "string",
  "BillingZip": "string",
  "Brands": [
    "string"
  ],
  "DealerCode": "string",
  "DealerName": "string",
  "DealerStatus": "string",
  "DealerStatusUpdateDate": "string",
  "Filler": "string",
  "IsValid": true,
  "LanguagePreference": "string",
  "Region1": "string",
  "Region2": "string",
  "RegionMapping": "string",
  "RoleBrand": "string",
  "ShippingAddress2": "string",
  "ShippingAddress3": "string",
  "ShippingAddress4": "string",
  "ShippingCity": "string",
  "ShippingCountry": "string",
  "ShippingState": "string",
  "ShippingStreet": "string",
  "ShippingZip": "string",
  "Telephone": "string",
  "VATCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BillingAddress|string|false|none|none|
|BillingAddress2|string|false|none|none|
|BillingAddress3|string|false|none|none|
|BillingAddress4|string|false|none|none|
|BillingCity|string|false|none|none|
|BillingCountry|string|false|none|none|
|BillingCountryCode|string|false|none|none|
|BillingState|string|false|none|none|
|BillingZip|string|false|none|none|
|Brands|[string]|false|read-only|none|
|DealerCode|string|false|none|none|
|DealerName|string|false|none|none|
|DealerStatus|string|false|none|none|
|DealerStatusUpdateDate|string|false|none|none|
|Filler|string|false|none|none|
|IsValid|boolean|false|read-only|none|
|LanguagePreference|string|false|none|none|
|Region1|string|false|none|none|
|Region2|string|false|none|none|
|RegionMapping|string|false|none|none|
|RoleBrand|string|false|none|none|
|ShippingAddress2|string|false|none|none|
|ShippingAddress3|string|false|none|none|
|ShippingAddress4|string|false|none|none|
|ShippingCity|string|false|none|none|
|ShippingCountry|string|false|none|none|
|ShippingState|string|false|none|none|
|ShippingStreet|string|false|none|none|
|ShippingZip|string|false|none|none|
|Telephone|string|false|none|none|
|VATCode|string|false|none|none|

<h2 id="tocS_DealerDB.Models.DealersPerCountry">DealerDB.Models.DealersPerCountry</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.dealerspercountry"></a>
<a id="schema_DealerDB.Models.DealersPerCountry"></a>
<a id="tocSdealerdb.models.dealerspercountry"></a>
<a id="tocsdealerdb.models.dealerspercountry"></a>

```json
{
  "Count": 0,
  "Country": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|none|none|
|Country|string|false|none|none|

<h2 id="tocS_DealerDB.Models.EDTLiteRegistration">DealerDB.Models.EDTLiteRegistration</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.edtliteregistration"></a>
<a id="schema_DealerDB.Models.EDTLiteRegistration"></a>
<a id="tocSdealerdb.models.edtliteregistration"></a>
<a id="tocsdealerdb.models.edtliteregistration"></a>

```json
{
  "DealerCode": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "InstanceID": "string",
  "VoucherCode": "string"
}
```

Registration for an EDT Lite

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DealerCode|string|false|none|The dealer code with which the EDT Lite was created.|
|ExpirationDate|string(date-time)|true|none|The date at which the content of the EDT Lite expires.|
|InstanceID|string|true|none|The identifier for the EDT Lite.|
|VoucherCode|string|true|none|The voucher code with which the EDT Lite was created.|

<h2 id="tocS_DealerDB.Models.License">DealerDB.Models.License</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.license"></a>
<a id="schema_DealerDB.Models.License"></a>
<a id="tocSdealerdb.models.license"></a>
<a id="tocsdealerdb.models.license"></a>

```json
{
  "Active": true,
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DeactivatedDate": "1970-01-01T00:00:00Z",
  "LicenseActivationType": "EDT",
  "LicenseID": "string",
  "LicenseVersion": "string",
  "RefreshDate": "1970-01-01T00:00:00Z",
  "SystemInfo": "string",
  "UpdatedLicenseVersion": "string",
  "VoucherCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|True if license is active.|
|CreatedDate|string(date-time)|false|none|The date the license was created.|
|DeactivatedDate|string(date-time)|false|none|The date the license was deactivated.|
|LicenseActivationType|string|false|none|The type of license (e.g. EDT, EDT Lite)|
|LicenseID|string|false|none|The LicenseID|
|LicenseVersion|string|false|none|The version of the license.|
|RefreshDate|string(date-time)|false|none|The date the license was refreshed.|
|SystemInfo|string|false|none|Information about the system which is licensed.|
|UpdatedLicenseVersion|string|false|none|The updated version of the license.  A value in this field indicates that the update has not been confirmed.|
|VoucherCode|string|false|none|The voucher code that generated the license.|

#### Enumerated Values

|Property|Value|
|---|---|
|LicenseActivationType|EDT|
|LicenseActivationType|EDTLite|

<h2 id="tocS_DealerDB.Models.LicenseActivation">DealerDB.Models.LicenseActivation</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.licenseactivation"></a>
<a id="schema_DealerDB.Models.LicenseActivation"></a>
<a id="tocSdealerdb.models.licenseactivation"></a>
<a id="tocsdealerdb.models.licenseactivation"></a>

```json
{
  "Key": "string",
  "LicenseData": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|string|false|none|The license key in base64 format.  This is only provided when the LicenseData is a new license.|
|LicenseData|string|false|none|The license data in base64 format.|

<h2 id="tocS_DealerDB.Models.LicenseActivationConfirm">DealerDB.Models.LicenseActivationConfirm</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.licenseactivationconfirm"></a>
<a id="schema_DealerDB.Models.LicenseActivationConfirm"></a>
<a id="tocSdealerdb.models.licenseactivationconfirm"></a>
<a id="tocsdealerdb.models.licenseactivationconfirm"></a>

```json
{
  "LicenseVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseVersion|string|true|none|The license version to confirm|

<h2 id="tocS_DealerDB.Models.LicenseActivationCreate">DealerDB.Models.LicenseActivationCreate</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.licenseactivationcreate"></a>
<a id="schema_DealerDB.Models.LicenseActivationCreate"></a>
<a id="tocSdealerdb.models.licenseactivationcreate"></a>
<a id="tocsdealerdb.models.licenseactivationcreate"></a>

```json
{
  "DealerCode": "string",
  "LicenseActivationType": "EDT",
  "PostalCode": "string",
  "SystemInfo": "string",
  "VoucherCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DealerCode|string|true|none|The Dealer Code of the dealer activating the license|
|LicenseActivationType|string|false|none|The type of license to create (e.g. EDT, EDT Lite)|
|PostalCode|string|true|none|The dealer's postal code (zip code)|
|SystemInfo|string|true|none|Information about  the system being activated|
|VoucherCode|string|true|none|The Voucher Code to use for activation|

#### Enumerated Values

|Property|Value|
|---|---|
|LicenseActivationType|EDT|
|LicenseActivationType|EDTLite|

<h2 id="tocS_DealerDB.Models.LicenseActivationUpdate">DealerDB.Models.LicenseActivationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.licenseactivationupdate"></a>
<a id="schema_DealerDB.Models.LicenseActivationUpdate"></a>
<a id="tocSdealerdb.models.licenseactivationupdate"></a>
<a id="tocsdealerdb.models.licenseactivationupdate"></a>

```json
{
  "LicenseVersion": "string",
  "SystemInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseVersion|string|true|none|The license version to update|
|SystemInfo|string|false|none|Information about  the system being activated|

<h2 id="tocS_DealerDB.Models.Voucher">DealerDB.Models.Voucher</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.voucher"></a>
<a id="schema_DealerDB.Models.Voucher"></a>
<a id="tocSdealerdb.models.voucher"></a>
<a id="tocsdealerdb.models.voucher"></a>

```json
{
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Deleted": true,
  "Email": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "LicenseTo": "string",
  "ModifiedBy": "string",
  "OrderNumber": "string",
  "Punched": true,
  "PunchedDate": "1970-01-01T00:00:00Z",
  "Purpose": "string",
  "Type": "Commercial",
  "VoucherCode": "string"
}
```

A voucher for EDT activation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|string(date-time)|false|none|Read-Only. The date the voucher was created.|
|DealerCode|string|false|none|The dealer code the voucher is assigned to.  Required for commercial and right to repair vouchers.|
|Deleted|boolean|false|none|Read-Only. True if voucher has been deleted.|
|Email|string|false|none|Required for internal vouchers.|
|ExpirationDate|string(date-time)|false|none|The expiration date of the voucher. Required for Temporary and Right to Repair Vouchers.|
|LicenseTo|string|false|none|Required for Internal Vouchers|
|ModifiedBy|string|false|none|Read-Only. The user that made the last modification to the voucher.|
|OrderNumber|string|false|none|The order number of a license. Required for Commercial and Right To Repair Vouchers. Not supported for other Vouchers.|
|Punched|boolean|false|none|True if voucher has aleady been used.  False if the voucher has not been used.|
|PunchedDate|string(date-time)|false|none|Read-Only. The date the voucher was punched.|
|Purpose|string|false|none|Required for Internal Vouchers. Not supported for other Vouchers.|
|Type|string|false|none|The type of voucher. Commercial is the default if not specified.|
|VoucherCode|string|false|none|The voucher code.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Commercial|
|Type|Internal|
|Type|Temporary|
|Type|RightToRepair|

<h2 id="tocS_DealerDB.Models.VoucherHistory">DealerDB.Models.VoucherHistory</h2>
<!-- backwards compatibility -->
<a id="schemadealerdb.models.voucherhistory"></a>
<a id="schema_DealerDB.Models.VoucherHistory"></a>
<a id="tocSdealerdb.models.voucherhistory"></a>
<a id="tocsdealerdb.models.voucherhistory"></a>

```json
{
  "ChangedDate": "1970-01-01T00:00:00Z",
  "CreatedDate": "1970-01-01T00:00:00Z",
  "DealerCode": "string",
  "Deleted": true,
  "Email": "string",
  "ExpirationDate": "1970-01-01T00:00:00Z",
  "ID": 0,
  "LicenseTo": "string",
  "ModifiedBy": "string",
  "OrderNumber": "string",
  "Punched": true,
  "PunchedDate": "1970-01-01T00:00:00Z",
  "Purpose": "string",
  "Type": "Commercial",
  "VoucherCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangedDate|string(date-time)|false|none|none|
|CreatedDate|string(date-time)|false|none|Read-Only. The date the voucher was created.|
|DealerCode|string|false|none|The dealer code the voucher is assigned to.  Required for commercial vouchers.|
|Deleted|boolean|false|none|Read-Only. True if voucher has been deleted.|
|Email|string|false|none|The email address. Required for Internal Vouchers|
|ExpirationDate|string(date-time)|false|none|The expiration date of the voucher. Required for Temporary Vouchers.|
|ID|integer(int32)|false|none|The id of the voucher history item|
|LicenseTo|string|false|none|Required for Internal Vouchers|
|ModifiedBy|string|false|none|Read-Only. The user that made the last modification to the voucher.|
|OrderNumber|string|false|none|The order number of a commercial license. Required for Commercial Vouchers. Not supported for other Vouchers.|
|Punched|boolean|false|none|True if voucher has aleady been used.  False if the voucher has not been used.|
|PunchedDate|string(date-time)|false|none|Read-Only. The date the voucher was punched.|
|Purpose|string|false|none|Required for Internal Vouchers|
|Type|string|false|none|The type of voucher.|
|VoucherCode|string|false|none|The voucher code.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Commercial|
|Type|Internal|
|Type|Temporary|
|Type|RightToRepair|

<h2 id="tocS_GlobalResources.Shared.Models.FileDownload">GlobalResources.Shared.Models.FileDownload</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.filedownload"></a>
<a id="schema_GlobalResources.Shared.Models.FileDownload"></a>
<a id="tocSglobalresources.shared.models.filedownload"></a>
<a id="tocsglobalresources.shared.models.filedownload"></a>

```json
{
  "CRC": "string",
  "ContentType": "string",
  "Description": "string",
  "Id": "string",
  "IsPublic": true,
  "Name": "string",
  "Path": "string",
  "Size": 0,
  "State": "Created"
}
```

A language used for string translations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CRC|string|true|none|The crc of the file (SHA256, HEX-encoded). Must be provided when creating a file.|
|ContentType|string|true|none|The type of file; sent as the content-type header.|
|Description|string|true|none|The description of the file.|
|Id|string|false|none|The Id of the file.|
|IsPublic|boolean|true|none|Indicates whether this file is available to the public for download.|
|Name|string|true|none|The name of the file when downloaded.|
|Path|string|true|none|The Path of the file.|
|Size|integer(int64)|false|none|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|State|string|true|none|Indicates the state of this file. Must be 'Created' when created.|

#### Enumerated Values

|Property|Value|
|---|---|
|State|Created|
|State|Available|
|State|Removed|

<h2 id="tocS_GlobalResources.Shared.Models.GlobalImage">GlobalResources.Shared.Models.GlobalImage</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.globalimage"></a>
<a id="schema_GlobalResources.Shared.Models.GlobalImage"></a>
<a id="tocSglobalresources.shared.models.globalimage"></a>
<a id="tocsglobalresources.shared.models.globalimage"></a>

```json
{
  "CRC": "string",
  "Categories": [
    {
      "Id": "string",
      "Name": "string"
    }
  ],
  "Date": "1970-01-01T00:00:00Z",
  "Description": "string",
  "Height": 0,
  "Id": "string",
  "Name": "string",
  "Publisher": "string",
  "Size": 0,
  "State": "Created",
  "ThumbnailCRC": "string",
  "ThumbnailSize": 0,
  "Width": 0
}
```

An image from the Global Image library.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CRC|string|true|none|The Hash of the file (SHA256, HEX-encoded).|
|Categories|[[GlobalResources.Shared.Models.GlobalImageCategory](#schemaglobalresources.shared.models.globalimagecategory)]|false|none|The category of the file.|
|Date|string(date-time)|false|none|The date of the file.|
|Description|string|true|none|The description of the file.|
|Height|integer(int32)|true|none|The height of the file.|
|Id|string|false|none|The Id of the GlobalImage Metadata.|
|Name|string|true|none|The name of the file when downloaded.|
|Publisher|string|false|none|The Publisher of the file.|
|Size|integer(int64)|false|none|The size of the file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|State|string|true|none|Indicates the state of this file. Must be 'Created' when created. Read Only.|
|ThumbnailCRC|string|true|none|The Hash of the thumbnail file (SHA256, HEX-encoded).|
|ThumbnailSize|integer(int64)|false|none|The size of the thumbnail file in bytes. Null until assigned by server when marked as 'Available'. Read Only|
|Width|integer(int32)|true|none|The width of the file.|

#### Enumerated Values

|Property|Value|
|---|---|
|State|Created|
|State|Available|
|State|Removed|

<h2 id="tocS_GlobalResources.Shared.Models.GlobalImageCategory">GlobalResources.Shared.Models.GlobalImageCategory</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.globalimagecategory"></a>
<a id="schema_GlobalResources.Shared.Models.GlobalImageCategory"></a>
<a id="tocSglobalresources.shared.models.globalimagecategory"></a>
<a id="tocsglobalresources.shared.models.globalimagecategory"></a>

```json
{
  "Id": "string",
  "Name": "string"
}
```

An image category from the Global Image library.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The Id of the GlobalImage Categories.|
|Name|string|true|none|The name of the globalImage Catetory.|

<h2 id="tocS_GlobalResources.Shared.Models.Language">GlobalResources.Shared.Models.Language</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.language"></a>
<a id="schema_GlobalResources.Shared.Models.Language"></a>
<a id="tocSglobalresources.shared.models.language"></a>
<a id="tocsglobalresources.shared.models.language"></a>

```json
{
  "Description": "string",
  "IsDeleted": true,
  "LocaleId": 0
}
```

A language used for string translations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|The description of the language (e.g. “English – United States”).|
|IsDeleted|boolean|false|none|Indicates whether the API supports the language. Must be false when created. Read Only.|
|LocaleId|integer(int32)|true|none|The Locale Id of the language.|

<h2 id="tocS_GlobalResources.Shared.Models.StringDefinition">GlobalResources.Shared.Models.StringDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.stringdefinition"></a>
<a id="schema_GlobalResources.Shared.Models.StringDefinition"></a>
<a id="tocSglobalresources.shared.models.stringdefinition"></a>
<a id="tocsglobalresources.shared.models.stringdefinition"></a>

```json
{
  "DescriptionForTranslator": "string",
  "DoNotTranslate": true,
  "Id": "string",
  "ParameterCount": 0,
  "Timestamp": "string",
  "Translations": [
    {
      "AuthorId": 0,
      "LanguageId": 0,
      "State": "Original",
      "StringId": "string",
      "StringValue": "string",
      "Timestamp": "string"
    }
  ]
}
```

The definition of a string to be translated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DescriptionForTranslator|string|true|none|The description of the string to be translated.|
|DoNotTranslate|boolean|false|none|True if the string should not be translated. False by default.|
|Id|string|false|none|The identifier for the string. Read Only.|
|ParameterCount|integer(int32)|false|none|The number of parameters expected for the string.|
|Timestamp|string(byte)|false|none|A value indicating the last modification of this string. Read Only.|
|Translations|[[GlobalResources.Shared.Models.StringTranslation](#schemaglobalresources.shared.models.stringtranslation)]|false|none|Translations for the string.|

<h2 id="tocS_GlobalResources.Shared.Models.StringTranslation">GlobalResources.Shared.Models.StringTranslation</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.stringtranslation"></a>
<a id="schema_GlobalResources.Shared.Models.StringTranslation"></a>
<a id="tocSglobalresources.shared.models.stringtranslation"></a>
<a id="tocsglobalresources.shared.models.stringtranslation"></a>

```json
{
  "AuthorId": 0,
  "LanguageId": 0,
  "State": "Original",
  "StringId": "string",
  "StringValue": "string",
  "Timestamp": "string"
}
```

A translation of a string in a specific language

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorId|integer(int32)|false|none|The id of the user to last edit thie translation|
|LanguageId|integer(int32)|false|none|The id of the language of the translation|
|State|string|false|none|The state of the translation|
|StringId|string|false|none|The id of the string that is translated|
|StringValue|string|true|none|The translated string|
|Timestamp|string(byte)|false|none|A value indicating the last modification of this translation. Read Only.|

#### Enumerated Values

|Property|Value|
|---|---|
|State|Original|
|State|Requested|
|State|Processing|
|State|Processed|
|State|Validated|
|State|Invalidated|
|State|RequestPending|
|State|CreatePending|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationRequest">GlobalResources.Shared.Models.TranslationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationrequest"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationRequest"></a>
<a id="tocSglobalresources.shared.models.translationrequest"></a>
<a id="tocsglobalresources.shared.models.translationrequest"></a>

```json
{
  "ApprovalUserId": 0,
  "CCEmailAddresses": [
    "string"
  ],
  "ChargeToAccount": "string",
  "Deadline": "1970-01-01T00:00:00Z",
  "Id": 0,
  "LocaleIds": [
    0
  ],
  "Notes": "string",
  "QuestionsUserId": 0,
  "State": "NotSubmitted",
  "SubmittedBy": 0,
  "TranslatorEmail": "string",
  "TranslatorName": "string"
}
```

A request to translate specified strings into specified locales

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApprovalUserId|integer(int32)|false|none|The ID of the user from which approval for the request is required|
|CCEmailAddresses|[string]|true|none|Additional email addresses to CC on emails pertaining to the request|
|ChargeToAccount|string|true|none|The account to charge for the request|
|Deadline|string(date-time)|true|none|The date by which the translations in the request are needed. Defaults to 30 days from the current date|
|Id|integer(int32)|false|none|The ID of the request|
|LocaleIds|[integer(int32)]|true|none|Locale IDs to which these strings are requested to be translated|
|Notes|string|true|none|Additional notes or comments about the request|
|QuestionsUserId|integer(int32)|false|none|The ID of the user to which to address questions regarding the request|
|State|string|true|none|The state of the request|
|SubmittedBy|integer(int32)|false|none|The ID of the User that submitted the request|
|TranslatorEmail|string|false|none|The email address for the translator|
|TranslatorName|string|false|none|The name of the translator|

#### Enumerated Values

|Property|Value|
|---|---|
|State|NotSubmitted|
|State|Submitted|
|State|Cancelled|
|State|Completed|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationSet">GlobalResources.Shared.Models.TranslationSet</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationset"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationSet"></a>
<a id="tocSglobalresources.shared.models.translationset"></a>
<a id="tocsglobalresources.shared.models.translationset"></a>

```json
{
  "Attributes": [
    {
      "ID": 0,
      "Name": "string",
      "TranslationSetID": 0,
      "Value": "string"
    }
  ],
  "FileIDs": [
    "string"
  ],
  "Id": 0,
  "InDate": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "OutDate": "1970-01-01T00:00:00Z",
  "State": "OutForProcessing",
  "TranslationRequestID": 0
}
```

A set of strings submitted for translation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|[[GlobalResources.Shared.Models.TranslationSetAttribute](#schemaglobalresources.shared.models.translationsetattribute)]|false|none|Attributes of the Translation Set|
|FileIDs|[string]|true|none|IDs for files related to this translation set. For example, the original and processed files|
|Id|integer(int32)|false|none|The id of the TranslationSet.|
|InDate|string(date-time)|false|none|Read Only. The date the translation set was returned.|
|Notes|string|false|none|Notes on the TranslationSet|
|OutDate|string(date-time)|false|none|Read Only. The date the translation set was sent out.|
|State|string|true|none|An enum indicating the state of the translation set|
|TranslationRequestID|integer(int32)|false|none|Read Only. The Id of the TranslationRequest which generated this translation set.|

#### Enumerated Values

|Property|Value|
|---|---|
|State|OutForProcessing|
|State|Processing|
|State|PendingApproval|
|State|OutForTranslation|
|State|Cancelled|
|State|Completed|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationSetAttribute">GlobalResources.Shared.Models.TranslationSetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationsetattribute"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationSetAttribute"></a>
<a id="tocSglobalresources.shared.models.translationsetattribute"></a>
<a id="tocsglobalresources.shared.models.translationsetattribute"></a>

```json
{
  "ID": 0,
  "Name": "string",
  "TranslationSetID": 0,
  "Value": "string"
}
```

An attribute of a

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|integer(int32)|false|none|The ID of this attribute.|
|Name|string|true|none|The name of this Attribute.|
|TranslationSetID|integer(int32)|false|none|The ID of the translation set to which this attribute belongs.|
|Value|string|false|none|The value of this Attribute|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationSetSourceString">GlobalResources.Shared.Models.TranslationSetSourceString</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationsetsourcestring"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationSetSourceString"></a>
<a id="tocSglobalresources.shared.models.translationsetsourcestring"></a>
<a id="tocsglobalresources.shared.models.translationsetsourcestring"></a>

```json
{
  "DescriptionForTranslator": "string",
  "LanguageID": 0,
  "StringID": "string",
  "StringValue": "string"
}
```

Information needed to translate a string in a translation set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DescriptionForTranslator|string|false|none|A description of the string to translate. This should contain context and parameter count.|
|LanguageID|integer(int32)|false|none|The ID of the language from which to translate the string|
|StringID|string|false|none|The ID of the string to translate|
|StringValue|string|false|none|The string to translate|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationSetStatistics">GlobalResources.Shared.Models.TranslationSetStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationsetstatistics"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationSetStatistics"></a>
<a id="tocSglobalresources.shared.models.translationsetstatistics"></a>
<a id="tocsglobalresources.shared.models.translationsetstatistics"></a>

```json
{
  "LanguageIDs": [
    0
  ],
  "StringCount": 0
}
```

Statistics for a translation set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageIDs|[integer(int32)]|false|none|The IDs of languages for which translaions in this translation set have been requested|
|StringCount|integer(int32)|false|none|The count of unique string definitions contained in this translation set|

<h2 id="tocS_GlobalResources.Shared.Models.TranslationSetString">GlobalResources.Shared.Models.TranslationSetString</h2>
<!-- backwards compatibility -->
<a id="schemaglobalresources.shared.models.translationsetstring"></a>
<a id="schema_GlobalResources.Shared.Models.TranslationSetString"></a>
<a id="tocSglobalresources.shared.models.translationsetstring"></a>
<a id="tocsglobalresources.shared.models.translationsetstring"></a>

```json
{
  "LanguageID": 0,
  "StringID": "string",
  "StringValue": "string",
  "TranslationSetId": 0
}
```

The resulting translation in a translation set.  is the  to which the string will be translated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageID|integer(int32)|true|none|The ID of the language into which to translate the string|
|StringID|string|true|none|The Id of the string translation that has been requested|
|StringValue|string|false|none|The string value returned from the translator|
|TranslationSetId|integer(int32)|true|none|The id of the TranslationSet|

<h2 id="tocS_OASSupport.Shared.Models.TranslationKey">OASSupport.Shared.Models.TranslationKey</h2>
<!-- backwards compatibility -->
<a id="schemaoassupport.shared.models.translationkey"></a>
<a id="schema_OASSupport.Shared.Models.TranslationKey"></a>
<a id="tocSoassupport.shared.models.translationkey"></a>
<a id="tocsoassupport.shared.models.translationkey"></a>

```json
{
  "ID": 0,
  "KeyName": "string",
  "StringID": "string"
}
```

A translation key to map the relationship of keyNames, usually for ODX, and string Ids

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|integer(int32)|false|none|The identifier for the translationKey. Read Only.|
|KeyName|string|true|none|The key name of the item. One example is tkODX_HWIKM14R01|
|StringID|string|true|none|Foreign key to StringDefinitionID|

<h2 id="tocS_System.Object">System.Object</h2>
<!-- backwards compatibility -->
<a id="schemasystem.object"></a>
<a id="schema_System.Object"></a>
<a id="tocSsystem.object"></a>
<a id="tocssystem.object"></a>

```json
{}
```

<h2 id="tocS_UpdateSystem.Models.AttributeValue">UpdateSystem.Models.AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.attributevalue"></a>
<a id="schema_UpdateSystem.Models.AttributeValue"></a>
<a id="tocSupdatesystem.models.attributevalue"></a>
<a id="tocsupdatesystem.models.attributevalue"></a>

```json
{
  "Key": "string",
  "TimeStamp": "1970-01-01T00:00:00Z",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|string|true|none|The attribute name|
|TimeStamp|string(date-time)|false|none|Read Only. The timestamp.|
|Value|string|false|none|The value|

<h2 id="tocS_UpdateSystem.Models.AvailableSubscription">UpdateSystem.Models.AvailableSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.availablesubscription"></a>
<a id="schema_UpdateSystem.Models.AvailableSubscription"></a>
<a id="tocSupdatesystem.models.availablesubscription"></a>
<a id="tocsupdatesystem.models.availablesubscription"></a>

```json
{
  "PackageType": {
    "Attribute": "string",
    "Category": "string",
    "Description": "string",
    "Icon": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "MaxDeltaPackages": 0,
    "PackageTypeID": "string"
  },
  "SubscriptionType": "Required"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageType|[UpdateSystem.Models.PackageType](#schemaupdatesystem.models.packagetype)|false|none|none|
|SubscriptionType|string|false|none|The type of subscription supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|SubscriptionType|Required|
|SubscriptionType|IncludeByDefault|
|SubscriptionType|ExcludeByDefault|

<h2 id="tocS_UpdateSystem.Models.AvailableUpdateGroupSubscription">UpdateSystem.Models.AvailableUpdateGroupSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.availableupdategroupsubscription"></a>
<a id="schema_UpdateSystem.Models.AvailableUpdateGroupSubscription"></a>
<a id="tocSupdatesystem.models.availableupdategroupsubscription"></a>
<a id="tocsupdatesystem.models.availableupdategroupsubscription"></a>

```json
{
  "AvailableSubscriptions": [
    {
      "PackageType": {
        "Attribute": "string",
        "Category": "string",
        "Description": "string",
        "Icon": "string",
        "InventoryFrequency": 0,
        "InventoryPackage": "string",
        "LocalizedDescription": "string",
        "LocalizedName": "string",
        "MaxDeltaPackages": 0,
        "PackageTypeID": "string"
      },
      "SubscriptionType": "Required"
    }
  ],
  "UpdateGroup": {
    "Description": "string",
    "ID": "string",
    "InventoryFrequency": 0,
    "InventoryPackage": "string",
    "LocalizedDescription": "string",
    "LocalizedName": "string",
    "Priority": 1,
    "ReportField": "string",
    "UpdateType": "string",
    "ValidatingField": "string",
    "ValueToValidate": "string",
    "Version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableSubscriptions|[[UpdateSystem.Models.AvailableSubscription](#schemaupdatesystem.models.availablesubscription)]|false|none|The available subscriptions for this update group.|
|UpdateGroup|[UpdateSystem.Models.UpdateGroup](#schemaupdatesystem.models.updategroup)|false|none|none|

<h2 id="tocS_UpdateSystem.Models.Bundle">UpdateSystem.Models.Bundle</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.bundle"></a>
<a id="schema_UpdateSystem.Models.Bundle"></a>
<a id="tocSupdatesystem.models.bundle"></a>
<a id="tocsupdatesystem.models.bundle"></a>

```json
{
  "Active": true,
  "BundleID": "string",
  "BundleNumber": 0,
  "Description": "string",
  "UpdateGroupID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|Default Value: false. During the creation of the Bundle, this field must be false.|
|BundleID|string|false|none|Read-Only.|
|BundleNumber|integer(int32)|true|none|The bundle number|
|Description|string|true|none|The Bundle description.|
|UpdateGroupID|string|true|none|The update group this bundle belongs to.|

<h2 id="tocS_UpdateSystem.Models.Category">UpdateSystem.Models.Category</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.category"></a>
<a id="schema_UpdateSystem.Models.Category"></a>
<a id="tocSupdatesystem.models.category"></a>
<a id="tocsupdatesystem.models.category"></a>

```json
{
  "Values": [
    {
      "Key": "string",
      "TimeStamp": "1970-01-01T00:00:00Z",
      "Value": "string"
    }
  ],
  "category": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Values|[[UpdateSystem.Models.AttributeValue](#schemaupdatesystem.models.attributevalue)]|false|none|none|
|category|string|true|none|The category name|

<h2 id="tocS_UpdateSystem.Models.CheckinResult">UpdateSystem.Models.CheckinResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.checkinresult"></a>
<a id="schema_UpdateSystem.Models.CheckinResult"></a>
<a id="tocSupdatesystem.models.checkinresult"></a>
<a id="tocsupdatesystem.models.checkinresult"></a>

```json
{
  "Packages": [
    {
      "Autorun": true,
      "CRC": "string",
      "Description": "string",
      "LocalizedName": "string",
      "Notes": "string",
      "PackageID": "string",
      "PackageTypeID": "string",
      "PreviousVersion": 0,
      "ReleaseDate": "1970-01-01T00:00:00Z",
      "Released": true,
      "RemoveOnSuccess": true,
      "Size": 0,
      "Switches": "string",
      "Url": "string",
      "Version": 1
    }
  ],
  "RemovePackages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Packages|[[UpdateSystem.Models.Package](#schemaupdatesystem.models.package)]|false|none|The packages for the client to run.|
|RemovePackages|[string]|false|none|The package ids for the client to remove.|

<h2 id="tocS_UpdateSystem.Models.Client">UpdateSystem.Models.Client</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.client"></a>
<a id="schema_UpdateSystem.Models.Client"></a>
<a id="tocSupdatesystem.models.client"></a>
<a id="tocsupdatesystem.models.client"></a>

```json
{
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "Tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|string|false|none|Read Only. The id of the client|
|LastCheckin|string(date-time)|false|none|Read Only. The time of the client's last checkin with the server.|
|Tag|string|false|none|A description of the client that can be used for easy reference|

<h2 id="tocS_UpdateSystem.Models.ClientInfo">UpdateSystem.Models.ClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.clientinfo"></a>
<a id="schema_UpdateSystem.Models.ClientInfo"></a>
<a id="tocSupdatesystem.models.clientinfo"></a>
<a id="tocsupdatesystem.models.clientinfo"></a>

```json
{
  "ClientID": "string",
  "Package": [
    {
      "Categories": [
        {
          "Values": [
            {
              "Key": "string",
              "TimeStamp": "1970-01-01T00:00:00Z",
              "Value": "string"
            }
          ],
          "category": "string"
        }
      ],
      "PackageDescription": "string",
      "PackageID": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|string|false|none|The id of the client|
|Package|[[UpdateSystem.Models.PackageReport](#schemaupdatesystem.models.packagereport)]|false|none|The packages|

<h2 id="tocS_UpdateSystem.Models.ClientStatus">UpdateSystem.Models.ClientStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.clientstatus"></a>
<a id="schema_UpdateSystem.Models.ClientStatus"></a>
<a id="tocSupdatesystem.models.clientstatus"></a>
<a id="tocsupdatesystem.models.clientstatus"></a>

```json
{
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "MinutesElapsed": 0,
  "ReportResult": "string",
  "ReportResultIsValid": true,
  "ReportValue": "string",
  "Tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|string|false|none|The Client ID|
|LastCheckin|string(date-time)|false|none|The time of the client's last check-in|
|MinutesElapsed|integer(int32)|false|none|The number of minutes that have passed since the last check-in|
|ReportResult|string|false|none|The result for the client included in the UpdateGroup's report|
|ReportResultIsValid|boolean|false|none|True if the result for the client matches what is expected for the UpdateGroup|
|ReportValue|string|false|none|The value for the client included in the UpdateGroup's report|
|Tag|string|false|none|A descriptive name for the client|

<h2 id="tocS_UpdateSystem.Models.Package">UpdateSystem.Models.Package</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.package"></a>
<a id="schema_UpdateSystem.Models.Package"></a>
<a id="tocSupdatesystem.models.package"></a>
<a id="tocsupdatesystem.models.package"></a>

```json
{
  "Autorun": true,
  "CRC": "string",
  "Description": "string",
  "LocalizedName": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "Url": "string",
  "Version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Autorun|boolean|false|none|Value is true if package should run automatically. Default value is false.|
|CRC|string|true|none|The CRC used to validate the download.|
|Description|string|true|none|The package description|
|LocalizedName|string|false|none|Optional. The StringID used to localize the name of the Package|
|Notes|string|false|none|Notes about the package|
|PackageID|string|false|none|Read Only. The package ID|
|PackageTypeID|string|true|none|The id of the package type this package belongs to.|
|PreviousVersion|integer(int32)|false|none|For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0.|
|ReleaseDate|string(date-time)|true|none|The date the package was released|
|Released|boolean|false|none|True if the package is released.  Default value is False.|
|RemoveOnSuccess|boolean|false|none|True to remove the package after successful execution.  Default value is False.|
|Size|integer(int64)|false|none|The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.<br>            If the size provided does not match the size in the response from the URL an error will be returned.|
|Switches|string|false|none|The command line arguments for the package.  Default value is an empty string.|
|Url|string|true|none|The Url to download the package from.|
|Version|integer(int32)|true|none|The version.|

<h2 id="tocS_UpdateSystem.Models.PackageReport">UpdateSystem.Models.PackageReport</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.packagereport"></a>
<a id="schema_UpdateSystem.Models.PackageReport"></a>
<a id="tocSupdatesystem.models.packagereport"></a>
<a id="tocsupdatesystem.models.packagereport"></a>

```json
{
  "Categories": [
    {
      "Values": [
        {
          "Key": "string",
          "TimeStamp": "1970-01-01T00:00:00Z",
          "Value": "string"
        }
      ],
      "category": "string"
    }
  ],
  "PackageDescription": "string",
  "PackageID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Categories|[[UpdateSystem.Models.Category](#schemaupdatesystem.models.category)]|false|none|The package report's categories.|
|PackageDescription|string|false|none|Read Only. The package description|
|PackageID|string|false|none|The PackageID.|

<h2 id="tocS_UpdateSystem.Models.PackageStatus">UpdateSystem.Models.PackageStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.packagestatus"></a>
<a id="schema_UpdateSystem.Models.PackageStatus"></a>
<a id="tocSupdatesystem.models.packagestatus"></a>
<a id="tocsupdatesystem.models.packagestatus"></a>

```json
{
  "ClientID": "string",
  "ClientKey": "string",
  "DownloadTime": "string",
  "Downloaded": "string",
  "InstallCompleted": "string",
  "InstallResult": "string",
  "InstallStarted": "string",
  "InstallTime": "string",
  "Percentage": "string",
  "Size": "string",
  "Timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|string|false|none|The id of the client|
|ClientKey|string|false|none|The client's tag|
|DownloadTime|string|false|none|The amount of time spent downloading|
|Downloaded|string|false|none|The number of bytes downloaded|
|InstallCompleted|string|false|none|The time the package completed|
|InstallResult|string|false|none|The package result|
|InstallStarted|string|false|none|The time the package was started|
|InstallTime|string|false|none|The amount of time required to run the package|
|Percentage|string|false|none|The download completion percentage|
|Size|string|false|none|The total size of the package|
|Timestamp|string(date-time)|false|none|The time the status was last updated|

<h2 id="tocS_UpdateSystem.Models.PackageStatusSummary">UpdateSystem.Models.PackageStatusSummary</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.packagestatussummary"></a>
<a id="schema_UpdateSystem.Models.PackageStatusSummary"></a>
<a id="tocSupdatesystem.models.packagestatussummary"></a>
<a id="tocsupdatesystem.models.packagestatussummary"></a>

```json
{
  "AverageDownloadTime": "string",
  "AverageInstallTime": "string",
  "Downloaded": 0,
  "Error": 0,
  "Installed": 0,
  "Package": "string",
  "PackageID": "string",
  "PackageStatusItems": [
    {
      "ClientID": "string",
      "ClientKey": "string",
      "DownloadTime": "string",
      "Downloaded": "string",
      "InstallCompleted": "string",
      "InstallResult": "string",
      "InstallStarted": "string",
      "InstallTime": "string",
      "Percentage": "string",
      "Size": "string",
      "Timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AverageDownloadTime|string|false|none|The average time required to complete the download|
|AverageInstallTime|string|false|none|The average time required to complete the install|
|Downloaded|integer(int64)|false|none|The number of clients that have completed the download|
|Error|integer(int32)|false|none|The result of the install|
|Installed|integer(int64)|false|none|The number of clients that have completed the install|
|Package|string|false|none|The name of the package|
|PackageID|string|false|none|The ID of the package|
|PackageStatusItems|[[UpdateSystem.Models.PackageStatus](#schemaupdatesystem.models.packagestatus)]|false|none|The individual package status items|

<h2 id="tocS_UpdateSystem.Models.PackageType">UpdateSystem.Models.PackageType</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.packagetype"></a>
<a id="schema_UpdateSystem.Models.PackageType"></a>
<a id="tocSupdatesystem.models.packagetype"></a>
<a id="tocsupdatesystem.models.packagetype"></a>

```json
{
  "Attribute": "string",
  "Category": "string",
  "Description": "string",
  "Icon": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "MaxDeltaPackages": 0,
  "PackageTypeID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|string|false|none|The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed.|
|Category|string|false|none|The inventory category (from the InventoryPackage) used to determine what version of this package type is installed.|
|Description|string|true|none|The description of the package type|
|Icon|string|false|none|Optional.  The icon to use for the PackageType, in base 64|
|InventoryFrequency|integer(int32)|false|none|The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours).|
|InventoryPackage|string|false|none|The inventory package used to determine what version of this package type is installed.|
|LocalizedDescription|string|false|none|Optional. The StringID used to localize the description of the PackageType|
|LocalizedName|string|false|none|Optional. The StringID used to localize the name of the PackageType|
|MaxDeltaPackages|integer(int32)|false|none|The maximum number of "chained" delta packages to use when updating the client|
|PackageTypeID|string|false|none|Read Only. The package type id.|

<h2 id="tocS_UpdateSystem.Models.PackageTypeIDtoBundle">UpdateSystem.Models.PackageTypeIDtoBundle</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.packagetypeidtobundle"></a>
<a id="schema_UpdateSystem.Models.PackageTypeIDtoBundle"></a>
<a id="tocSupdatesystem.models.packagetypeidtobundle"></a>
<a id="tocsupdatesystem.models.packagetypeidtobundle"></a>

```json
{
  "BundleID": "string",
  "PackageTypeID": "string",
  "PackageVersion": 0,
  "Priority": 1,
  "SubscriptionType": "Required"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleID|string|true|none|The bundle to include the package in.|
|PackageTypeID|string|true|none|The package type id of the package to include|
|PackageVersion|integer(int32)|true|none|The package version of the package to include|
|Priority|integer(int32)|true|none|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|SubscriptionType|string|false|none|Optional. The type of subscription supported.  The default subscription type is Required.|

#### Enumerated Values

|Property|Value|
|---|---|
|SubscriptionType|Required|
|SubscriptionType|IncludeByDefault|
|SubscriptionType|ExcludeByDefault|

<h2 id="tocS_UpdateSystem.Models.PagedClientStatusMetadata">UpdateSystem.Models.PagedClientStatusMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.pagedclientstatusmetadata"></a>
<a id="schema_UpdateSystem.Models.PagedClientStatusMetadata"></a>
<a id="tocSupdatesystem.models.pagedclientstatusmetadata"></a>
<a id="tocsupdatesystem.models.pagedclientstatusmetadata"></a>

```json
{
  "Limit": 0,
  "Offset": 0,
  "ReportResultExpected": "string",
  "ReportResultLabel": "string",
  "ReportValueLabel": "string",
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|integer(int32)|true|read-only|The number of entities this paged response is limited to.|
|Offset|integer(int32)|true|read-only|The number of entities prior to this page of items.|
|ReportResultExpected|string|true|none|The label for data contained in ClientStatus.ReportResults|
|ReportResultLabel|string|true|none|The label for data contained in ClientStatus.ReportResults|
|ReportValueLabel|string|true|none|The label for data contained in ClientStatus.ReportValue|
|TotalCount|integer(int32)|true|read-only|The total number of entities matching the request.|

<h2 id="tocS_UpdateSystem.Models.PriorityPackage">UpdateSystem.Models.PriorityPackage</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.prioritypackage"></a>
<a id="schema_UpdateSystem.Models.PriorityPackage"></a>
<a id="tocSupdatesystem.models.prioritypackage"></a>
<a id="tocsupdatesystem.models.prioritypackage"></a>

```json
{
  "Autorun": true,
  "CRC": "string",
  "ClientID": "string",
  "Description": "string",
  "Notes": "string",
  "PackageID": "string",
  "PackageTypeID": "string",
  "PreviousVersion": 0,
  "PriorityPackageID": "string",
  "ReleaseDate": "1970-01-01T00:00:00Z",
  "Released": true,
  "RemoveOnSuccess": true,
  "Size": 0,
  "Switches": "string",
  "TimeStamp": "1970-01-01T00:00:00Z",
  "Url": "string",
  "Version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Autorun|boolean|false|none|Read Only. From the package specified by package ID.<br>            Value is true if package should run automatically. Default value is false.|
|CRC|string|false|none|Read Only. From the package specified by package ID.|
|ClientID|string|true|none|The ID of the client to receive the priority package|
|Description|string|false|none|Read Only. From the package specified by package ID.|
|Notes|string|false|none|Read Only. From the package specified by package ID.|
|PackageID|string|true|none|The ID of the package to push as a priority package.|
|PackageTypeID|string|false|none|Read Only. From the package specified by package ID.|
|PreviousVersion|integer(int32)|false|none|Read Only. From the package specified by package ID.|
|PriorityPackageID|string|false|none|Read Only. The ID of the priority package.|
|ReleaseDate|string(date-time)|false|none|Read Only. From the package specified by package ID.<br>            The date the package was released|
|Released|boolean|false|none|Read Only. From the package specified by package ID.|
|RemoveOnSuccess|boolean|false|none|Read Only. From the package specified by package ID.|
|Size|integer(int64)|false|none|Read Only. From the package specified by package ID.|
|Switches|string|false|none|The command line arguments for the priority package.  Default value is an empty string.|
|TimeStamp|string(date-time)|false|none|Read Only. The timestamp of the priority package.|
|Url|string|false|none|Read Only. From the package specified by package ID.|
|Version|integer(int32)|false|none|Read Only. From the package specified by package ID.|

<h2 id="tocS_UpdateSystem.Models.UpdateGroup">UpdateSystem.Models.UpdateGroup</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updategroup"></a>
<a id="schema_UpdateSystem.Models.UpdateGroup"></a>
<a id="tocSupdatesystem.models.updategroup"></a>
<a id="tocsupdatesystem.models.updategroup"></a>

```json
{
  "Description": "string",
  "ID": "string",
  "InventoryFrequency": 0,
  "InventoryPackage": "string",
  "LocalizedDescription": "string",
  "LocalizedName": "string",
  "Priority": 1,
  "ReportField": "string",
  "UpdateType": "string",
  "ValidatingField": "string",
  "ValueToValidate": "string",
  "Version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|The description of the update group|
|ID|string|false|none|none|
|InventoryFrequency|integer(int32)|false|none|The time in minutes between inventory checks. Default value is 1440 minutes (one day).|
|InventoryPackage|string|false|none|The Package ID of the package used for inventory|
|LocalizedDescription|string|false|none|Optional. The StringID used to localize the description of the update group|
|LocalizedName|string|false|none|Optional. The StringID used to localize the name of the update group|
|Priority|integer(int32)|true|none|The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority.|
|ReportField|string|false|none|A field to return in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|UpdateType|string|true|none|The update type name|
|ValidatingField|string|false|none|A field used for validation in the status report for this update group.<br>            Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute})|
|ValueToValidate|string|false|none|The value to validate the ValidationField against.|
|Version|string(byte)|false|none|The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType|

<h2 id="tocS_UpdateSystem.Models.UpdateGroupClientRelationship">UpdateSystem.Models.UpdateGroupClientRelationship</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updategroupclientrelationship"></a>
<a id="schema_UpdateSystem.Models.UpdateGroupClientRelationship"></a>
<a id="tocSupdatesystem.models.updategroupclientrelationship"></a>
<a id="tocsupdatesystem.models.updategroupclientrelationship"></a>

```json
{
  "Active": true,
  "ClientID": "string",
  "LastCheckin": "1970-01-01T00:00:00Z",
  "RelationshipID": "string",
  "UpdateGroupID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|The subscription status.  The status is active by default.|
|ClientID|string|true|none|Read Only after creation. The client id of the subscriber.|
|LastCheckin|string(date-time)|false|none|ReadOnly. The timestamp of the last checkin.|
|RelationshipID|string|false|none|Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation.|
|UpdateGroupID|string|true|none|Read Only after creation. The update group to subscribe to.|

<h2 id="tocS_UpdateSystem.Models.UpdateGroupSubscription">UpdateSystem.Models.UpdateGroupSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updategroupsubscription"></a>
<a id="schema_UpdateSystem.Models.UpdateGroupSubscription"></a>
<a id="tocSupdatesystem.models.updategroupsubscription"></a>
<a id="tocsupdatesystem.models.updategroupsubscription"></a>

```json
{
  "ClientID": "string",
  "Include": true,
  "PackageTypeID": "string",
  "UpdateGroupID": "string",
  "UpdateGroupSubscriptionID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientID|string|true|none|The ClientID.|
|Include|boolean|true|none|True to receive content of type indicated by PackageTypeID.|
|PackageTypeID|string|true|none|The PackageType to set subscription status for|
|UpdateGroupID|string|true|none|The Update Group this subscription is relevant for.|
|UpdateGroupSubscriptionID|integer(int32)|false|none|The Update Group Subscription ID.  This ID will be automatically assigned when creating an Update Group Subscription.|

<h2 id="tocS_UpdateSystem.Models.UpdateMetricsData">UpdateSystem.Models.UpdateMetricsData</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updatemetricsdata"></a>
<a id="schema_UpdateSystem.Models.UpdateMetricsData"></a>
<a id="tocSupdatesystem.models.updatemetricsdata"></a>
<a id="tocsupdatesystem.models.updatemetricsdata"></a>

```json
{
  "ActiveVersion": "string",
  "ActiveVersionByClient": [
    {
      "BundleNumber": 0,
      "ClientCount": 0,
      "ReleaseName": "string"
    }
  ],
  "CurrentStateByClient": [
    {
      "ClientCount": 0,
      "State": "string"
    }
  ],
  "CutOffDate": "1970-01-01T00:00:00Z",
  "DataRefreshed": "1970-01-01T00:00:00Z",
  "FilteredClientCount": 0,
  "PackageErrors": [
    {
      "ClientCount": 0,
      "ErrorCode": "string",
      "LongDescription": "string",
      "ShortDescription": "string"
    }
  ],
  "TotalClientCount": 0
}
```

Model that retrieves the data for UpdateMetrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveVersion|string|false|none|Active version (bundle number) of update type.|
|ActiveVersionByClient|[[UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord](#schemaupdatesystem.models.updatemetricsdata.activeversionbyclientrecord)]|false|none|Generic collection that is of type ActiveVersionByClientRecord|
|CurrentStateByClient|[[UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord](#schemaupdatesystem.models.updatemetricsdata.currentstatebyclientrecord)]|false|none|Generic collection that is of type CurrentStateByClientRecord|
|CutOffDate|string(date-time)|false|none|Date that has been configured to only show the most recent clients with a cut off date. (Ex. year from current date)|
|DataRefreshed|string(date-time)|false|none|Data was refreshed at this time.|
|FilteredClientCount|integer(int32)|false|none|Sum of clients represented<br>            Filtered by updateType and lastCheckedInDate|
|PackageErrors|[[UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord](#schemaupdatesystem.models.updatemetricsdata.packageerrorsrecord)]|false|none|Generic collection that is of type PackageErrorsRecord|
|TotalClientCount|integer(int32)|false|none|Total clients we have ever serviced|

<h2 id="tocS_UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord">UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updatemetricsdata.activeversionbyclientrecord"></a>
<a id="schema_UpdateSystem.Models.UpdateMetricsData.ActiveVersionByClientRecord"></a>
<a id="tocSupdatesystem.models.updatemetricsdata.activeversionbyclientrecord"></a>
<a id="tocsupdatesystem.models.updatemetricsdata.activeversionbyclientrecord"></a>

```json
{
  "BundleNumber": 0,
  "ClientCount": 0,
  "ReleaseName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BundleNumber|integer(int32)|false|none|none|
|ClientCount|integer(int32)|false|none|none|
|ReleaseName|string|false|none|none|

<h2 id="tocS_UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord">UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updatemetricsdata.currentstatebyclientrecord"></a>
<a id="schema_UpdateSystem.Models.UpdateMetricsData.CurrentStateByClientRecord"></a>
<a id="tocSupdatesystem.models.updatemetricsdata.currentstatebyclientrecord"></a>
<a id="tocsupdatesystem.models.updatemetricsdata.currentstatebyclientrecord"></a>

```json
{
  "ClientCount": 0,
  "State": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientCount|integer(int32)|false|none|none|
|State|string|false|none|none|

<h2 id="tocS_UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord">UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesystem.models.updatemetricsdata.packageerrorsrecord"></a>
<a id="schema_UpdateSystem.Models.UpdateMetricsData.PackageErrorsRecord"></a>
<a id="tocSupdatesystem.models.updatemetricsdata.packageerrorsrecord"></a>
<a id="tocsupdatesystem.models.updatemetricsdata.packageerrorsrecord"></a>

```json
{
  "ClientCount": 0,
  "ErrorCode": "string",
  "LongDescription": "string",
  "ShortDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientCount|integer(int32)|false|none|none|
|ErrorCode|string|false|none|none|
|LongDescription|string|false|none|none|
|ShortDescription|string|false|none|none|
