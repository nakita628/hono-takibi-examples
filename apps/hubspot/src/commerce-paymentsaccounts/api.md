<h1 id="commerce-paymentsaccounts">Commerce Paymentsaccounts v2026-09</h1>

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
|cpq.quotes.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="commerce-paymentsaccounts-basic">Basic</h1>

## Retrieve status and general information about a portal's payments account.

<a id="opIdget-/commerce/payment-accounts/2026-09/status"></a>

> Code samples

```bash
curl https://api.hubapi.com/commerce/payment-accounts/2026-09/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /commerce/payment-accounts/2026-09/status`

Retrieve the status of payment accounts in your HubSpot account. This endpoint provides information about the account's ability to transact and payout, its enrollment state, when or if it has transacted last, and the types of payment processors it is eligible for. Use this to monitor and manage your payment account's operational status.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-status-and-general-information-about-a-portals-payments-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PaymentAccountView](#schemapaymentaccountview)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write )
</aside>

# Schemas

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

<h2 id="tocS_PaymentAccountView">PaymentAccountView</h2>
<!-- backwards compatibility -->
<a id="schemapaymentaccountview"></a>
<a id="schema_PaymentAccountView"></a>
<a id="tocSpaymentaccountview"></a>
<a id="tocspaymentaccountview"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canPayout|boolean|true|none|A boolean indicating whether the account is capable of making payouts.|
|canTransact|boolean|true|none|A boolean indicating whether the account is capable of processing transactions.|
|createdAt|string(date-time)|false|none|The date and time when the payment account was created, in ISO 8601 format.|
|eligibleProcessorTypes|[string]|true|none|An array of processor types that the account is eligible to use. Valid values include 'HS_PAYMENTS', and 'BYO_STRIPE'.|
|enrollmentState|string|true|none|The current enrollment state of the payment account. Valid values include 'NOT_STARTED', 'IN_PROGRESS', 'IN_UNDERWRITING', 'ACTIVE', 'SUSPENDED', 'REJECTED', 'OPTED_OUT', and 'DISCONNECTED'.|
|hasTransacted|boolean|true|none|A boolean indicating whether the account has ever processed a transaction.|
|id|string|true|none|The portalId for the payment account.|
|lastTransactedAt|string(date-time)|false|none|The date and time of the last transaction made with this account, in ISO 8601 format.|
|processorType|string|true|none|The type of payment processor associated with the account. Valid values include 'NOT_ENROLLED', 'HS_PAYMENTS', and 'BYO_STRIPE'.|
|updatedAt|string(date-time)|false|none|The date and time when the payment account was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|eligibleProcessorTypes|NOT_ENROLLED|
|eligibleProcessorTypes|HS_PAYMENTS|
|eligibleProcessorTypes|BYO_STRIPE|
|enrollmentState|ACTIVE|
|enrollmentState|DISCONNECTED|
|enrollmentState|IN_PROGRESS|
|enrollmentState|IN_UNDERWRITING|
|enrollmentState|NOT_STARTED|
|enrollmentState|OPTED_OUT|
|enrollmentState|REJECTED|
|enrollmentState|SUSPENDED|
|processorType|BYO_STRIPE|
|processorType|HS_PAYMENTS|
|processorType|NOT_ENROLLED|
