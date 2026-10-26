<h1 id="pos-terminal-management-api-deprecated">POS Terminal Management API (deprecated) v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides endpoints for managing your point-of-sale (POS) payment terminals. You can use the API to obtain information about a specific terminal, retrieve overviews of your terminals and stores, and assign terminals to a merchant account or store.

For more information, refer to [Classic assign terminals](https://docs.adyen.com/point-of-sale/automating-terminal-management/assign-terminals-api/classic-assign-terminals-api/).

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

## Authentication
Each request to the Terminal Management API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_API_key" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Roles and permissions
To use the POS Terminal Management API, you need the **POS Terminal Management API role** added to your API credential. Your Adyen contact will set up the roles for you.
## Versioning
Terminal Management API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getTerminalsUnderAccount
```
When using versioned endpoints, Boolean response values are returned in string format: `"true"` or `"false"`.
If you omit the version from the endpoint URL, Boolean response values are returned like this: `true` or `false`.
## Going live
To access the live endpoints, you need an API key from your live Customer Area.
Use this API key to make requests to:

```text
https://postfmapi-live.adyen.com/postfmapi/terminal/v1
```

Base URLs:

* <a href="https://postfmapi-test.adyen.com/postfmapi/terminal/v1">https://postfmapi-test.adyen.com/postfmapi/terminal/v1</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="pos-terminal-management-api-deprecated-general">General</h1>

## Assign terminals

<a id="opIdpost-assignTerminals"></a>

> Code samples

```bash
curl https://postfmapi-test.adyen.com/postfmapi/terminal/v1/assignTerminals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "companyAccount": "YOUR_COMPANY_ACCOUNT",
    "terminals": [
      "P400Plus-275479597"
    ]
  }'
```

`POST /assignTerminals`

<aside class="warning">
This operation is deprecated
</aside>

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

> Body parameter

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "terminals": [
    "P400Plus-275479597"
  ]
}
```

<h3 id="assign-terminals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AssignTerminalsRequest](#schemaassignterminalsrequest)|false|none|
|» companyAccount|body|string|true|Your company account. To return terminals to the company inventory, specify only this parameter and the `terminals`.|
|» merchantAccount|body|string|false|Name of the merchant account. Specify this parameter to assign terminals to this merchant account or to a store under this merchant account.|
|» merchantInventory|body|boolean|false|Boolean that indicates if you are assigning the terminals to the merchant inventory. Do not use when assigning terminals to a store. Required when assigning the terminal to a merchant account.<br><br>- Set this to **true** to assign the terminals to the merchant inventory. This also means that the terminals cannot be boarded.<br><br>- Set this to **false** to assign the terminals to the merchant account as in-store terminals. This makes the terminals ready to be boarded and to process payments through the specified merchant account.|
|» store|body|string|false|The store code of the store that you want to assign the terminals to.|
|» terminals|body|[string]|true|Array containing a list of terminal IDs that you want to assign or reassign to the merchant account or store, or that you want to return to the company inventory.<br><br>For example, `["V400m-324689776","P400Plus-329127412"]`.|

> Example responses

> 200 Response

```json
{
  "results": {
    "P400Plus-275479597": "RemoveConfigScheduled"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Problem reading or understanding the request.",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "010",
  "message": "Insufficient permissions to process the request.",
  "errorType": "security"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "901",
  "message": "Request validation error.",
  "errorType": "validation"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "000",
  "message": "The server could not process the request.",
  "errorType": "internal"
}
```

<h3 id="assign-terminals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AssignTerminalsResponse](#schemaassignterminalsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the account or store of a terminal

<a id="opIdpost-findTerminal"></a>

> Code samples

```bash
curl https://postfmapi-test.adyen.com/postfmapi/terminal/v1/findTerminal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "terminal": "M400-401972715"
  }'
```

`POST /findTerminal`

<aside class="warning">
This operation is deprecated
</aside>

Returns the company account, merchant account, or store that a payment terminal is assigned to.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

> Body parameter

```json
{
  "terminal": "M400-401972715"
}
```

<h3 id="get-the-account-or-store-of-a-terminal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindTerminalRequest](#schemafindterminalrequest)|false|none|
|» terminal|body|string|true|The unique terminal ID in the format `[Device model]-[Serial number]`. <br><br>For example, **V400m-324689776**.|

> Example responses

> 200 Response

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "merchantInventory": false,
  "store": "YOUR_STORE",
  "terminal": "M400-401972715"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Problem reading or understanding the request.",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "010",
  "message": "Insufficient permissions to process the request.",
  "errorType": "security"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "901",
  "message": "Request validation error.",
  "errorType": "validation"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "000",
  "message": "The server could not process the request.",
  "errorType": "internal"
}
```

<h3 id="get-the-account-or-store-of-a-terminal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[FindTerminalResponse](#schemafindterminalresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the stores of an account

<a id="opIdpost-getStoresUnderAccount"></a>

> Code samples

```bash
curl https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getStoresUnderAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "companyAccount": "YOUR_COMPANY_ACCOUNT"
  }'
```

`POST /getStoresUnderAccount`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

> Body parameter

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT"
}
```

<h3 id="get-the-stores-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetStoresUnderAccountRequest](#schemagetstoresunderaccountrequest)|false|none|
|» companyAccount|body|string|true|The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account.|
|» merchantAccount|body|string|false|The merchant account. With this parameter, the response only includes the stores of the specified merchant account.|

> Example responses

> 200 Response

```json
{
  "stores": [
    {
      "store": "YOUR_STORE",
      "description": "YOUR_STORE",
      "address": {
        "city": "The City",
        "countryCode": "NL",
        "postalCode": "1234",
        "streetAddress": "The Street"
      },
      "status": "Active",
      "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Problem reading or understanding the request.",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "010",
  "message": "Insufficient permissions to process the request.",
  "errorType": "security"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "901",
  "message": "Request validation error.",
  "errorType": "validation"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "000",
  "message": "The server could not process the request.",
  "errorType": "internal"
}
```

<h3 id="get-the-stores-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetStoresUnderAccountResponse](#schemagetstoresunderaccountresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the details of a terminal

<a id="opIdpost-getTerminalDetails"></a>

> Code samples

```bash
curl https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getTerminalDetails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "terminal": "M400-401972715"
  }'
```

`POST /getTerminalDetails`

<aside class="warning">
This operation is deprecated
</aside>

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

> Body parameter

```json
{
  "terminal": "M400-401972715"
}
```

<h3 id="get-the-details-of-a-terminal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetTerminalDetailsRequest](#schemagetterminaldetailsrequest)|false|none|
|» terminal|body|string|true|The unique terminal ID in the format `[Device model]-[Serial number]`. <br><br>For example, **V400m-324689776**.|

> Example responses

> 200 Response

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "merchantInventory": false,
  "store": "YOUR_STORE",
  "terminal": "M400-401972715",
  "deviceModel": "M400",
  "serialNumber": "401-972-715",
  "permanentTerminalId": "88912016",
  "terminalStatus": "SwitchedOff",
  "firmwareVersion": "Verifone_VOS 1.57.6",
  "country": "NETHERLANDS",
  "storeDetails": {
    "store": "YOUR_STORE",
    "description": "TestStore",
    "address": {
      "city": "The City",
      "countryCode": "NL",
      "postalCode": "1234",
      "streetAddress": "The Street"
    }
  },
  "ethernetMac": "60:c7:98:5a:69:cd",
  "ethernetIp": "192.168.2.11",
  "wifiMac": "c4:ac:59:47:f3:71",
  "wifiIp": "192.168.2.12",
  "dhcpEnabled": false
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Problem reading or understanding the request.",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "010",
  "message": "Insufficient permissions to process the request.",
  "errorType": "security"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "901",
  "message": "Request validation error.",
  "errorType": "validation"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "000",
  "message": "The server could not process the request.",
  "errorType": "internal"
}
```

<h3 id="get-the-details-of-a-terminal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTerminalDetailsResponse](#schemagetterminaldetailsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the list of terminals

<a id="opIdpost-getTerminalsUnderAccount"></a>

> Code samples

```bash
curl https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getTerminalsUnderAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "companyAccount": "YOUR_COMPANY_ACCOUNT"
  }'
```

`POST /getTerminalsUnderAccount`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

> Body parameter

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT"
}
```

<h3 id="get-the-list-of-terminals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetTerminalsUnderAccountRequest](#schemagetterminalsunderaccountrequest)|false|none|
|» companyAccount|body|string|true|Your company account. If you only specify this parameter, the response includes all terminals at all account levels.|
|» merchantAccount|body|string|false|The merchant account. This is required if you are retrieving the terminals assigned to a store.If you don't specify a `store` the response includes the terminals assigned to the specified merchant account and the terminals assigned to the stores under this merchant account.|
|» store|body|string|false|The store code of the store. With this parameter, the response only includes the terminals assigned to the specified store.|

> Example responses

> 200 Response

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccounts": [
    {
      "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
      "inStoreTerminals": [
        "P400Plus-275479597"
      ],
      "stores": [
        {
          "store": "YOUR_STORE",
          "inStoreTerminals": [
            "M400-401972715"
          ]
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Problem reading or understanding the request.",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "010",
  "message": "Insufficient permissions to process the request.",
  "errorType": "security"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "901",
  "message": "Request validation error.",
  "errorType": "validation"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "000",
  "message": "The server could not process the request.",
  "errorType": "internal"
}
```

<h3 id="get-the-list-of-terminals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTerminalsUnderAccountResponse](#schemagetterminalsunderaccountresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "streetAddress": "string",
  "streetAddress2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|countryCode|string|false|none|none|
|postalCode|string|false|none|none|
|stateOrProvince|string|false|none|none|
|streetAddress|string|false|none|none|
|streetAddress2|string|false|none|none|

<h2 id="tocS_AssignTerminalsRequest">AssignTerminalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassignterminalsrequest"></a>
<a id="schema_AssignTerminalsRequest"></a>
<a id="tocSassignterminalsrequest"></a>
<a id="tocsassignterminalsrequest"></a>

```json
{
  "companyAccount": "string",
  "merchantAccount": "string",
  "merchantInventory": true,
  "store": "string",
  "terminals": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAccount|string|true|none|Your company account. To return terminals to the company inventory, specify only this parameter and the `terminals`.|
|merchantAccount|string|false|none|Name of the merchant account. Specify this parameter to assign terminals to this merchant account or to a store under this merchant account.|
|merchantInventory|boolean|false|none|Boolean that indicates if you are assigning the terminals to the merchant inventory. Do not use when assigning terminals to a store. Required when assigning the terminal to a merchant account.<br><br>- Set this to **true** to assign the terminals to the merchant inventory. This also means that the terminals cannot be boarded.<br><br>- Set this to **false** to assign the terminals to the merchant account as in-store terminals. This makes the terminals ready to be boarded and to process payments through the specified merchant account.|
|store|string|false|none|The store code of the store that you want to assign the terminals to.|
|terminals|[string]|true|none|Array containing a list of terminal IDs that you want to assign or reassign to the merchant account or store, or that you want to return to the company inventory.<br><br>For example, `["V400m-324689776","P400Plus-329127412"]`.|

<h2 id="tocS_AssignTerminalsResponse">AssignTerminalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassignterminalsresponse"></a>
<a id="schema_AssignTerminalsResponse"></a>
<a id="tocSassignterminalsresponse"></a>
<a id="tocsassignterminalsresponse"></a>

```json
{
  "results": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|true|none|Array that returns a list of the terminals, and for each terminal the result of assigning it to an account or store.<br><br>The results can be: <br><br> - `Done`: The terminal has been assigned.<br><br> - `AssignmentScheduled`: The terminal will be assigned asynschronously.<br><br> - `RemoveConfigScheduled`: The terminal was previously assigned and boarded. Wait for the terminal to synchronize with the Adyen platform. For more information, refer to [Reassigning boarded terminals](https://docs.adyen.com/point-of-sale/managing-terminals/assign-terminals#reassign-boarded-terminals).<br><br> - `Error`: There was an error when assigning the terminal. |

<h2 id="tocS_FindTerminalRequest">FindTerminalRequest</h2>
<!-- backwards compatibility -->
<a id="schemafindterminalrequest"></a>
<a id="schema_FindTerminalRequest"></a>
<a id="tocSfindterminalrequest"></a>
<a id="tocsfindterminalrequest"></a>

```json
{
  "terminal": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminal|string|true|none|The unique terminal ID in the format `[Device model]-[Serial number]`. <br><br>For example, **V400m-324689776**.|

<h2 id="tocS_FindTerminalResponse">FindTerminalResponse</h2>
<!-- backwards compatibility -->
<a id="schemafindterminalresponse"></a>
<a id="schema_FindTerminalResponse"></a>
<a id="tocSfindterminalresponse"></a>
<a id="tocsfindterminalresponse"></a>

```json
{
  "companyAccount": "string",
  "merchantAccount": "string",
  "merchantInventory": true,
  "store": "string",
  "terminal": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAccount|string|true|none|The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account.|
|merchantAccount|string|false|none|The merchant account that the terminal is associated with. If the response doesn't contain a `store` the terminal is assigned to this merchant account.|
|merchantInventory|boolean|false|none|Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.<br><br>- If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.<br><br>- If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded.|
|store|string|false|none|The store code of the store that the terminal is assigned to.|
|terminal|string|true|none|The unique terminal ID.|

<h2 id="tocS_GetStoresUnderAccountRequest">GetStoresUnderAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstoresunderaccountrequest"></a>
<a id="schema_GetStoresUnderAccountRequest"></a>
<a id="tocSgetstoresunderaccountrequest"></a>
<a id="tocsgetstoresunderaccountrequest"></a>

```json
{
  "companyAccount": "string",
  "merchantAccount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAccount|string|true|none|The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account.|
|merchantAccount|string|false|none|The merchant account. With this parameter, the response only includes the stores of the specified merchant account.|

<h2 id="tocS_GetStoresUnderAccountResponse">GetStoresUnderAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstoresunderaccountresponse"></a>
<a id="schema_GetStoresUnderAccountResponse"></a>
<a id="tocSgetstoresunderaccountresponse"></a>
<a id="tocsgetstoresunderaccountresponse"></a>

```json
{
  "stores": [
    {
      "address": {
        "city": "string",
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "streetAddress": "string",
        "streetAddress2": "string"
      },
      "description": "string",
      "inStoreTerminals": [
        "string"
      ],
      "merchantAccountCode": "string",
      "status": "string",
      "store": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stores|[[Store](#schemastore)]|false|none|Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account.|

<h2 id="tocS_GetTerminalDetailsRequest">GetTerminalDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetterminaldetailsrequest"></a>
<a id="schema_GetTerminalDetailsRequest"></a>
<a id="tocSgetterminaldetailsrequest"></a>
<a id="tocsgetterminaldetailsrequest"></a>

```json
{
  "terminal": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminal|string|true|none|The unique terminal ID in the format `[Device model]-[Serial number]`. <br><br>For example, **V400m-324689776**.|

<h2 id="tocS_GetTerminalDetailsResponse">GetTerminalDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetterminaldetailsresponse"></a>
<a id="schema_GetTerminalDetailsResponse"></a>
<a id="tocSgetterminaldetailsresponse"></a>
<a id="tocsgetterminaldetailsresponse"></a>

```json
{
  "bluetoothIp": "string",
  "bluetoothMac": "string",
  "companyAccount": "string",
  "country": "string",
  "deviceModel": "string",
  "dhcpEnabled": true,
  "displayLabel": "string",
  "ethernetIp": "string",
  "ethernetMac": "string",
  "firmwareVersion": "string",
  "iccid": "string",
  "lastActivityDateTime": "1970-01-01T00:00:00Z",
  "lastTransactionDateTime": "1970-01-01T00:00:00Z",
  "linkNegotiation": "string",
  "merchantAccount": "string",
  "merchantInventory": true,
  "permanentTerminalId": "string",
  "serialNumber": "string",
  "simStatus": "string",
  "store": "string",
  "storeDetails": {
    "address": {
      "city": "string",
      "countryCode": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "streetAddress": "string",
      "streetAddress2": "string"
    },
    "description": "string",
    "inStoreTerminals": [
      "string"
    ],
    "merchantAccountCode": "string",
    "status": "string",
    "store": "string"
  },
  "terminal": "string",
  "terminalStatus": "OnlineLast1Day",
  "wifiIp": "string",
  "wifiMac": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bluetoothIp|string|false|none|The Bluetooth IP address of the terminal.|
|bluetoothMac|string|false|none|The Bluetooth MAC address of the terminal.|
|companyAccount|string|true|none|The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account.|
|country|string|false|none|The country where the terminal is used.|
|deviceModel|string|false|none|The model name of the terminal.|
|dhcpEnabled|boolean|false|none|Indicates whether assigning IP addresses through a DHCP server is enabled on the terminal.|
|displayLabel|string \| null|false|none|The label shown on the status bar of the display. This label (if any) is specified in your Customer Area.|
|ethernetIp|string \| null|false|none|The terminal's IP address in your Ethernet network.|
|ethernetMac|string \| null|false|none|The terminal's MAC address in your Ethernet network.|
|firmwareVersion|string|false|none|The software release currently in use on the terminal.|
|iccid|string \| null|false|none|The integrated circuit card identifier (ICCID) of the SIM card in the terminal.|
|lastActivityDateTime|string(date-time) \| null|false|none|Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago.|
|lastTransactionDateTime|string(date-time) \| null|false|none|Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago.|
|linkNegotiation|string \| null|false|none|The Ethernet link negotiation that the terminal uses: <br><br>- `auto`: Auto-negotiation<br><br>- `100full`: 100 Mbps full duplex|
|merchantAccount|string|false|none|The merchant account that the terminal is associated with. If the response doesn't contain a `store` the terminal is assigned to this merchant account.|
|merchantInventory|boolean|false|none|Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.<br><br>- If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.<br><br>- If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded.|
|permanentTerminalId|string|false|none|The permanent terminal ID.|
|serialNumber|string|false|none|The serial number of the terminal.|
|simStatus|string \| null|false|none|On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the terminal: ACTIVE or INVENTORY.|
|store|string|false|none|The store code of the store that the terminal is assigned to.|
|storeDetails|[Store](#schemastore)|false|none|The store that the terminal is assigned to.|
|terminal|string|true|none|The unique terminal ID.|
|terminalStatus|string|false|none|The status of the terminal: <br><br>- `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates when in the past week the terminal was last online. <br><br>- `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online. <br><br>- `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`: Indicates the terminal is scheduled to be reassigned.|
|wifiIp|string|false|none|The terminal's IP address in your Wi-Fi network.|
|wifiMac|string|false|none|The terminal's MAC address in your Wi-Fi network.|

#### Enumerated Values

|Property|Value|
|---|---|
|terminalStatus|OnlineLast1Day|
|terminalStatus|OnlineLast2Days|
|terminalStatus|OnlineLast3Days|
|terminalStatus|OnlineLast4Days|
|terminalStatus|OnlineLast5Days|
|terminalStatus|OnlineLast6Days|
|terminalStatus|OnlineLast7Days|
|terminalStatus|OnlineToday|
|terminalStatus|ReAssignToInventoryPending|
|terminalStatus|ReAssignToMerchantInventoryPending|
|terminalStatus|ReAssignToStorePending|
|terminalStatus|SwitchedOff|

<h2 id="tocS_GetTerminalsUnderAccountRequest">GetTerminalsUnderAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetterminalsunderaccountrequest"></a>
<a id="schema_GetTerminalsUnderAccountRequest"></a>
<a id="tocSgetterminalsunderaccountrequest"></a>
<a id="tocsgetterminalsunderaccountrequest"></a>

```json
{
  "companyAccount": "string",
  "merchantAccount": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAccount|string|true|none|Your company account. If you only specify this parameter, the response includes all terminals at all account levels.|
|merchantAccount|string|false|none|The merchant account. This is required if you are retrieving the terminals assigned to a store.If you don't specify a `store` the response includes the terminals assigned to the specified merchant account and the terminals assigned to the stores under this merchant account.|
|store|string|false|none|The store code of the store. With this parameter, the response only includes the terminals assigned to the specified store.|

<h2 id="tocS_GetTerminalsUnderAccountResponse">GetTerminalsUnderAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetterminalsunderaccountresponse"></a>
<a id="schema_GetTerminalsUnderAccountResponse"></a>
<a id="tocSgetterminalsunderaccountresponse"></a>
<a id="tocsgetterminalsunderaccountresponse"></a>

```json
{
  "companyAccount": "string",
  "inventoryTerminals": [
    "string"
  ],
  "merchantAccounts": [
    {
      "inStoreTerminals": [
        "string"
      ],
      "inventoryTerminals": [
        "string"
      ],
      "merchantAccount": "string",
      "stores": [
        {
          "address": {
            "city": "string",
            "countryCode": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "streetAddress": "string",
            "streetAddress2": "string"
          },
          "description": "string",
          "inStoreTerminals": [
            "string"
          ],
          "merchantAccountCode": "string",
          "status": "string",
          "store": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAccount|string|true|none|Your company account.|
|inventoryTerminals|[string]|false|none|Array that returns a list of all terminals that are in the inventory of the company account.|
|merchantAccounts|[[MerchantAccount](#schemamerchantaccount)]|false|none|Array that returns a list of all merchant accounts belonging to the company account.|

<h2 id="tocS_MerchantAccount">MerchantAccount</h2>
<!-- backwards compatibility -->
<a id="schemamerchantaccount"></a>
<a id="schema_MerchantAccount"></a>
<a id="tocSmerchantaccount"></a>
<a id="tocsmerchantaccount"></a>

```json
{
  "inStoreTerminals": [
    "string"
  ],
  "inventoryTerminals": [
    "string"
  ],
  "merchantAccount": "string",
  "stores": [
    {
      "address": {
        "city": "string",
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "streetAddress": "string",
        "streetAddress2": "string"
      },
      "description": "string",
      "inStoreTerminals": [
        "string"
      ],
      "merchantAccountCode": "string",
      "status": "string",
      "store": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inStoreTerminals|[string]|false|none|List of terminals assigned to this merchant account as in-store terminals. This means that the terminal is ready to be boarded, or is already boarded.|
|inventoryTerminals|[string]|false|none|List of terminals assigned to the inventory of this merchant account.|
|merchantAccount|string|true|none|The merchant account.|
|stores|[[Store](#schemastore)]|false|none|Array of stores under this merchant account.|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_Store">Store</h2>
<!-- backwards compatibility -->
<a id="schemastore"></a>
<a id="schema_Store"></a>
<a id="tocSstore"></a>
<a id="tocsstore"></a>

```json
{
  "address": {
    "city": "string",
    "countryCode": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "streetAddress": "string",
    "streetAddress2": "string"
  },
  "description": "string",
  "inStoreTerminals": [
    "string"
  ],
  "merchantAccountCode": "string",
  "status": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the store.|
|description|string|false|none|The description of the store.|
|inStoreTerminals|[string]|false|none|The list of terminals assigned to the store.|
|merchantAccountCode|string|false|none|The code of the merchant account.|
|status|string|false|none|The status of the store:<br><br>- `PreActive`: the store has been created, but not yet activated. <br><br>- `Active`: the store has been activated. This means you can process payments for this store. <br><br>- `Inactive`: the store is currently not active. <br><br>- `InactiveWithModifications`: the store is currently not active, but payment modifications such as refunds are possible. <br><br>- `Closed`: the store has been closed. |
|store|string|true|none|The code of the store.|
