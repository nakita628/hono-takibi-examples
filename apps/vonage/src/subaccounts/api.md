<h1 id="subaccounts-api">Subaccounts API v1.0.8</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Subaccounts API enables you to create subaccounts under your primary account. Subaccounts facilitate differential product configuration, reporting, and billing. The Subaccounts API is released initially with restricted availability. You can read more about the API in the [Subaccounts documentation](/account/subaccounts/overview).

Base URLs:

* <a href="https://api.nexmo.com/accounts">https://api.nexmo.com/accounts</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="subaccounts-api-subaccount-management">Subaccount Management</h1>

This section shows how you can create, retrieve and modify subaccounts of a primary account.

## Retrieve list of subaccounts

<a id="opIdretrieveSubaccountsList"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/subaccounts \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{api_key}/subaccounts`

Get the information of all the subaccounts owned by the primary account.


<h3 id="retrieve-list-of-subaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "primary_account": {
      "api_key": "bbe6222f",
      "balance": 100.25,
      "created_at": "2018-03-02T16:34:49Z",
      "credit_limit": -100.25,
      "name": "Subaccount department A",
      "primary_account_api_key": "acc6111f",
      "suspended": false,
      "use_primary_account_balance": true
    },
    "subaccounts": [
      {
        "api_key": "bbe6222f",
        "balance": 100.25,
        "created_at": "2018-03-02T16:34:49Z",
        "credit_limit": -100.25,
        "name": "Subaccount department A",
        "primary_account_api_key": "acc6111f",
        "suspended": false,
        "use_primary_account_balance": true
      }
    ]
  }
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-list-of-subaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subaccounts response|[SubaccountsAllResponse](#schemasubaccountsallresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|

<h3 id="retrieve-list-of-subaccounts-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create subaccount

<a id="opIdcreateSubAccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/subaccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "Subaccount department A",
    "secret": "Password123",
    "use_primary_account_balance": false
  }'
```

`POST /{api_key}/subaccounts`

Create a subaccount for a given primary account.


> Body parameter

```json
{
  "name": "Subaccount department A",
  "secret": "Password123",
  "use_primary_account_balance": false
}
```

<h3 id="create-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|
|body|body|[NewSubaccountRequest](#schemanewsubaccountrequest)|true|none|
|» name|body|string|true|none|
|» secret|body|string|false|none|
|» use_primary_account_balance|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "secret": "Password123",
  "api_key": "bbe6222f",
  "balance": 100.25,
  "created_at": "2018-03-02T16:34:49Z",
  "credit_limit": -100.25,
  "name": "Subaccount department A",
  "primary_account_api_key": "acc6111f",
  "suspended": false,
  "use_primary_account_balance": true
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

> 422 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "use_primary_account_balance",
      "reason": "Should be either 'true' or 'false'"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#validation"
}
```

<h3 id="create-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subaccount response|[SubaccountCreateResponse](#schemasubaccountcreateresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|
|422|Unprocessable Entity|Validation Error|Inline|

<h3 id="create-subaccount-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|[object]|true|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve a subaccount

<a id="opIdretrieveSubaccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/subaccounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{api_key}/subaccounts/{subaccount_key}`

Get the information of a subaccount specified with its API key.


<h3 id="retrieve-a-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|
|subaccount_key|path|string|true|ID of the subaccount|

> Example responses

> 200 Response

```json
{
  "api_key": "bbe6222f",
  "balance": 100.25,
  "created_at": "2018-03-02T16:34:49Z",
  "credit_limit": -100.25,
  "name": "Subaccount department A",
  "primary_account_api_key": "acc6111f",
  "suspended": false,
  "use_primary_account_balance": true
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-a-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subaccount response|[SubaccountResponse](#schemasubaccountresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|

<h3 id="retrieve-a-subaccount-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Modify a subaccount

<a id="opIdmodifySubaccount"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/subaccounts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "Subaccount department B",
    "suspended": true,
    "use_primary_account_balance": false
  }'
```

`PATCH /{api_key}/subaccounts/{subaccount_key}`

Change one or more properties of a subaccount.


> Body parameter

```json
{
  "name": "Subaccount department B",
  "suspended": true,
  "use_primary_account_balance": false
}
```

<h3 id="modify-a-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|
|subaccount_key|path|string|true|ID of the subaccount|
|body|body|[ModifySubaccountRequest](#schemamodifysubaccountrequest)|true|none|
|» name|body|string|false|none|
|» suspended|body|boolean|false|none|
|» use_primary_account_balance|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "api_key": "bbe6222f",
  "balance": 100.25,
  "created_at": "2018-03-02T16:34:49Z",
  "credit_limit": -100.25,
  "name": "Subaccount department A",
  "primary_account_api_key": "acc6111f",
  "suspended": false,
  "use_primary_account_balance": true
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

> 422 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "use_primary_account_balance",
      "reason": "Should be either 'true' or 'false'"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#validation"
}
```

<h3 id="modify-a-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subaccount response|[SubaccountResponse](#schemasubaccountresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|
|422|Unprocessable Entity|Validation Error|Inline|

<h3 id="modify-a-subaccount-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|[object]|true|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="subaccounts-api-transfers">Transfers</h1>

This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.

## Retrieve list of balance transfers

<a id="opIdretrieveBalanceTransfers"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/string/balance-transfers?start_date=2019-07-15T13%3A11%3A44Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{api_key}/balance-transfers`

Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.


<h3 id="retrieve-list-of-balance-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account.|
|start_date|query|string|true|Start of the retrieval period.|
|end_date|query|string|false|End of the retrieval period. If absent then all transfers until now is returned.|
|subaccount|query|string|false|Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "balance_transfers": [
      {
        "amount": 123.45,
        "balance_transfer_id": "07b5-46e1-a527-85530e625800",
        "created_at": "2019-03-02T16:34:49Z",
        "from": "7c9738e6",
        "reference": "This gets added to the audit log",
        "to": "ad6dc56f"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-list-of-balance-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List balance transfers response|[ListBalanceTransfersResponse](#schemalistbalancetransfersresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|

<h3 id="retrieve-list-of-balance-transfers-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Transfer balance

<a id="opIdtransferBalance"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/balance-transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": "123.45",
    "from": "7c9738e6",
    "reference": "This gets added to the audit log",
    "to": "ad6dc56f"
  }'
```

`POST /{api_key}/balance-transfers`

Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.


> Body parameter

```json
{
  "amount": "123.45",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

<h3 id="transfer-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|
|body|body|[TransferBalanceOrCreditRequest](#schematransferbalanceorcreditrequest)|true|none|
|» amount|body|number|true|none|
|» from|body|string|true|none|
|» reference|body|string|false|none|
|» to|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 123.45,
  "balance_transfer_id": "07b5-46e1-a527-85530e625800",
  "created_at": "2019-03-02T16:34:49Z",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

> 422 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "use_primary_account_balance",
      "reason": "Should be either 'true' or 'false'"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#validation"
}
```

<h3 id="transfer-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balance transfer response|[TransferBalanceResponse](#schematransferbalanceresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|
|422|Unprocessable Entity|Validation Error|Inline|

<h3 id="transfer-balance-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|[object]|true|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve list of credit transfers

<a id="opIdretrieveCreditTransfers"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/string/credit-transfers?start_date=2019-07-15T13%3A11%3A44Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{api_key}/credit-transfers`

Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.


<h3 id="retrieve-list-of-credit-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account.|
|start_date|query|string|true|Start of the retrieval period.|
|end_date|query|string|false|End of the retrieval period. If absent then all transfers until now is returned.|
|subaccount|query|string|false|Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "credit-transfers": [
      {
        "amount": 123.45,
        "created_at": "2019-03-02T16:34:49Z",
        "credit_transfer_id": "07b5-46e1-a527-85530e625800",
        "from": "7c9738e6",
        "reference": "This gets added to the audit log",
        "to": "ad6dc56f"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-list-of-credit-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List credit transfers response|[ListCreditTransfersResponse](#schemalistcredittransfersresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|

<h3 id="retrieve-list-of-credit-transfers-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Transfer credit

<a id="opIdtransferCredit"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/credit-transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": "123.45",
    "from": "7c9738e6",
    "reference": "This gets added to the audit log",
    "to": "ad6dc56f"
  }'
```

`POST /{api_key}/credit-transfers`

Transfer credit limit between a primary account and one of its subaccounts.


> Body parameter

```json
{
  "amount": "123.45",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

<h3 id="transfer-credit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account|
|body|body|[TransferBalanceOrCreditRequest](#schematransferbalanceorcreditrequest)|true|none|
|» amount|body|number|true|none|
|» from|body|string|true|none|
|» reference|body|string|false|none|
|» to|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 123.45,
  "created_at": "2019-03-02T16:34:49Z",
  "credit_transfer_id": "07b5-46e1-a527-85530e625800",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

> 422 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "use_primary_account_balance",
      "reason": "Should be either 'true' or 'false'"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#validation"
}
```

<h3 id="transfer-credit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credit transfer response|[TransferCreditResponse](#schematransfercreditresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|
|404|Not Found|The account ID provided does not exist in our system or you do not have access|Inline|
|422|Unprocessable Entity|Validation Error|Inline|

<h3 id="transfer-credit-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|[object]|true|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Transfer number

<a id="opIdtransferNumber"></a>

> Code samples

```bash
curl https://api.nexmo.com/string/transfer-number \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "country": "GB",
    "from": "7c9738e6",
    "number": "23507703696",
    "to": "ad6dc56f"
  }'
```

`POST /{api_key}/transfer-number`

Transfer number from one account to another.


> Body parameter

```json
{
  "country": "GB",
  "from": "7c9738e6",
  "number": "23507703696",
  "to": "ad6dc56f"
}
```

<h3 id="transfer-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|ID of the primary account.|
|body|body|[TransferNumberRequest](#schematransfernumberrequest)|true|none|
|» country|body|string|false|none|
|» from|body|string|false|none|
|» number|body|number|false|none|
|» to|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "country": "GB",
  "from": "7c9738e6",
  "number": "235077036",
  "to": "ad6dc56f"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials",
  "instance": "798b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid credentials supplied",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

> 404 Response

```json
{
  "detail": "API key 'acc6111f' does not exist, or you do not have access",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

> 409 Response

```json
{
  "detail": "Could not transfer number {number} from account {from} to {to} - ShortCode is already owned by requesting account",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Transfer Conflict",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#transfer-conflict"
}
```

> 422 Response

```json
{
  "detail": "The request failed due to validation errors",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "invalid_parameters": [
    {
      "name": "use_primary_account_balance",
      "reason": "Should be either 'true' or 'false'"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#validation"
}
```

<h3 id="transfer-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number transfer response|[TransferNumberResponse](#schematransfernumberresponse)|
|401|Unauthorized|Credential is missing or invalid|Inline|
|403|Forbidden|Action is forbidden|Inline|
|404|Not Found|Action is forbidden|Inline|
|409|Conflict|Conflict|Inline|
|422|Unprocessable Entity|Validation Error|Inline|

<h3 id="transfer-number-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[UnprovisionedErrorResponse](#schemaunprovisionederrorresponse)|false|none|Unprovisioned|
|*oneOf*|[InvalidNumberTransferErrorResponse](#schemainvalidnumbertransfererrorresponse)|false|none|Invalid Transfer|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Invalid API Key|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*oneOf*|[ShortcodeNotFound](#schemashortcodenotfound)|false|none|Shortcode Not Found|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|invalid_parameters|[object]|true|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_InvalidNumberTransferErrorResponse">InvalidNumberTransferErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnumbertransfererrorresponse"></a>
<a id="schema_InvalidNumberTransferErrorResponse"></a>
<a id="tocSinvalidnumbertransfererrorresponse"></a>
<a id="tocsinvalidnumbertransfererrorresponse"></a>

```json
{
  "detail": "Failed to perform transfer number {number} from account {from} to {to} - The relationship between these two accounts does not allow for number transfer",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Number Transfer",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#invalid-number-transfer"
}
```

Invalid Transfer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ListBalanceTransfersResponse">ListBalanceTransfersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbalancetransfersresponse"></a>
<a id="schema_ListBalanceTransfersResponse"></a>
<a id="tocSlistbalancetransfersresponse"></a>
<a id="tocslistbalancetransfersresponse"></a>

```json
{
  "_embedded": {
    "balance_transfers": [
      {
        "amount": 123.45,
        "balance_transfer_id": "07b5-46e1-a527-85530e625800",
        "created_at": "2019-03-02T16:34:49Z",
        "from": "7c9738e6",
        "reference": "This gets added to the audit log",
        "to": "ad6dc56f"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|

<h2 id="tocS_ListCreditTransfersResponse">ListCreditTransfersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcredittransfersresponse"></a>
<a id="schema_ListCreditTransfersResponse"></a>
<a id="tocSlistcredittransfersresponse"></a>
<a id="tocslistcredittransfersresponse"></a>

```json
{
  "_embedded": {
    "credit-transfers": [
      {
        "amount": 123.45,
        "created_at": "2019-03-02T16:34:49Z",
        "credit_transfer_id": "07b5-46e1-a527-85530e625800",
        "from": "7c9738e6",
        "reference": "This gets added to the audit log",
        "to": "ad6dc56f"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|

<h2 id="tocS_ModifySubaccountRequest">ModifySubaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifysubaccountrequest"></a>
<a id="schema_ModifySubaccountRequest"></a>
<a id="tocSmodifysubaccountrequest"></a>
<a id="tocsmodifysubaccountrequest"></a>

```json
{
  "name": "Subaccount department B",
  "suspended": true,
  "use_primary_account_balance": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|suspended|boolean|false|none|none|
|use_primary_account_balance|boolean|false|none|none|

<h2 id="tocS_NewSubaccountRequest">NewSubaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewsubaccountrequest"></a>
<a id="schema_NewSubaccountRequest"></a>
<a id="tocSnewsubaccountrequest"></a>
<a id="tocsnewsubaccountrequest"></a>

```json
{
  "name": "Subaccount department A",
  "secret": "Password123",
  "use_primary_account_balance": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|secret|string|false|none|none|
|use_primary_account_balance|boolean|false|none|none|

<h2 id="tocS_ShortcodeNotFound">ShortcodeNotFound</h2>
<!-- backwards compatibility -->
<a id="schemashortcodenotfound"></a>
<a id="schema_ShortcodeNotFound"></a>
<a id="tocSshortcodenotfound"></a>
<a id="tocsshortcodenotfound"></a>

```json
{
  "detail": "Could not transfer number {number} from account {from} to {to} - ShortCode not found",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Invalid Number Transfer",
  "type": "https://developer.nexmo.com/api-errors/subaccounts#missing-number-transfer"
}
```

Shortcode Not Found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_SubaccountCreateResponse">SubaccountCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountcreateresponse"></a>
<a id="schema_SubaccountCreateResponse"></a>
<a id="tocSsubaccountcreateresponse"></a>
<a id="tocssubaccountcreateresponse"></a>

```json
{
  "secret": "Password123",
  "api_key": "bbe6222f",
  "balance": 100.25,
  "created_at": "2018-03-02T16:34:49Z",
  "credit_limit": -100.25,
  "name": "Subaccount department A",
  "primary_account_api_key": "acc6111f",
  "suspended": false,
  "use_primary_account_balance": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|false|none|API secret of the subaccount.|
|api_key|string|false|none|Unique subaccount ID.|
|balance|number|false|none|Balance of the subAccount. Value is null if balance is shared with primary account.|
|created_at|string|false|none|Subaccount creation date and time.|
|credit_limit|number|false|none|Credit limit of the subAccount. Value is null if balance is shared with primary account.|
|name|string|false|none|Name of the subaccount.|
|primary_account_api_key|string|false|none|Unique primary account ID.|
|suspended|boolean|false|none|Subaccount suspension status.|
|use_primary_account_balance|boolean|false|none|Flag showing if balance is shared with primary account.|

<h2 id="tocS_SubaccountResponse">SubaccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountresponse"></a>
<a id="schema_SubaccountResponse"></a>
<a id="tocSsubaccountresponse"></a>
<a id="tocssubaccountresponse"></a>

```json
{
  "api_key": "bbe6222f",
  "balance": 100.25,
  "created_at": "2018-03-02T16:34:49Z",
  "credit_limit": -100.25,
  "name": "Subaccount department A",
  "primary_account_api_key": "acc6111f",
  "suspended": false,
  "use_primary_account_balance": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|false|none|Unique subaccount ID.|
|balance|number|false|none|Balance of the subAccount. Value is null if balance is shared with primary account.|
|created_at|string|false|none|Subaccount creation date and time.|
|credit_limit|number|false|none|Credit limit of the subAccount. Value is null if balance is shared with primary account.|
|name|string|false|none|Name of the subaccount.|
|primary_account_api_key|string|false|none|Unique primary account ID.|
|suspended|boolean|false|none|Subaccount suspension status.|
|use_primary_account_balance|boolean|false|none|Flag showing if balance is shared with primary account.|

<h2 id="tocS_SubaccountsAllResponse">SubaccountsAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsallresponse"></a>
<a id="schema_SubaccountsAllResponse"></a>
<a id="tocSsubaccountsallresponse"></a>
<a id="tocssubaccountsallresponse"></a>

```json
{
  "_embedded": {
    "primary_account": {
      "api_key": "bbe6222f",
      "balance": 100.25,
      "created_at": "2018-03-02T16:34:49Z",
      "credit_limit": -100.25,
      "name": "Subaccount department A",
      "primary_account_api_key": "acc6111f",
      "suspended": false,
      "use_primary_account_balance": true
    },
    "subaccounts": [
      {
        "api_key": "bbe6222f",
        "balance": 100.25,
        "created_at": "2018-03-02T16:34:49Z",
        "credit_limit": -100.25,
        "name": "Subaccount department A",
        "primary_account_api_key": "acc6111f",
        "suspended": false,
        "use_primary_account_balance": true
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|

<h2 id="tocS_TransferBalanceOrCreditRequest">TransferBalanceOrCreditRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferbalanceorcreditrequest"></a>
<a id="schema_TransferBalanceOrCreditRequest"></a>
<a id="tocStransferbalanceorcreditrequest"></a>
<a id="tocstransferbalanceorcreditrequest"></a>

```json
{
  "amount": "123.45",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|from|string|true|none|none|
|reference|string|false|none|none|
|to|string|true|none|none|

<h2 id="tocS_TransferBalanceResponse">TransferBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferbalanceresponse"></a>
<a id="schema_TransferBalanceResponse"></a>
<a id="tocStransferbalanceresponse"></a>
<a id="tocstransferbalanceresponse"></a>

```json
{
  "amount": 123.45,
  "balance_transfer_id": "07b5-46e1-a527-85530e625800",
  "created_at": "2019-03-02T16:34:49Z",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|Balance transfer amount|
|balance_transfer_id|string|false|none|Unique balance transfer ID|
|created_at|string|false|none|The date and time when the balance transfer was executed|
|from|string|false|none|Account the balance is transferred from|
|reference|string|false|none|Reference for the balance transfer|
|to|string|false|none|Account the balance is transferred to|

<h2 id="tocS_TransferCreditResponse">TransferCreditResponse</h2>
<!-- backwards compatibility -->
<a id="schematransfercreditresponse"></a>
<a id="schema_TransferCreditResponse"></a>
<a id="tocStransfercreditresponse"></a>
<a id="tocstransfercreditresponse"></a>

```json
{
  "amount": 123.45,
  "created_at": "2019-03-02T16:34:49Z",
  "credit_transfer_id": "07b5-46e1-a527-85530e625800",
  "from": "7c9738e6",
  "reference": "This gets added to the audit log",
  "to": "ad6dc56f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|Credit transfer amount|
|created_at|string|false|none|The date and time when the credit transfer was executed|
|credit_transfer_id|string|false|none|Unique credit transfer ID|
|from|string|false|none|Account the credit is transferred from|
|reference|string|false|none|Reference for the credit transfer|
|to|string|false|none|Account the credit is transferred to|

<h2 id="tocS_TransferNumberRequest">TransferNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schematransfernumberrequest"></a>
<a id="schema_TransferNumberRequest"></a>
<a id="tocStransfernumberrequest"></a>
<a id="tocstransfernumberrequest"></a>

```json
{
  "country": "GB",
  "from": "7c9738e6",
  "number": "23507703696",
  "to": "ad6dc56f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|from|string|false|none|none|
|number|number|false|none|none|
|to|string|false|none|none|

<h2 id="tocS_TransferNumberResponse">TransferNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schematransfernumberresponse"></a>
<a id="schema_TransferNumberResponse"></a>
<a id="tocStransfernumberresponse"></a>
<a id="tocstransfernumberresponse"></a>

```json
{
  "country": "GB",
  "from": "7c9738e6",
  "number": "235077036",
  "to": "ad6dc56f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The two character country code in ISO 3166-1 alpha-2 format|
|from|string|false|none|Account the number is transferred from|
|number|string|false|none|Number transfered|
|to|string|false|none|Account the number is transferred to|

<h2 id="tocS_UnprovisionedErrorResponse">UnprovisionedErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunprovisionederrorresponse"></a>
<a id="schema_UnprovisionedErrorResponse"></a>
<a id="tocSunprovisionederrorresponse"></a>
<a id="tocsunprovisionederrorresponse"></a>

```json
{
  "detail": "Account acc6111f is not provisioned to access Subaccount Provisioning API",
  "instance": "158b8f199c45014ab7b08bfe9cc1c12c",
  "title": "Authorisation error",
  "type": "https://developer.nexmo.com/api-errors#unprovisioned"
}
```

Unprovisioned

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|instance|string|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
