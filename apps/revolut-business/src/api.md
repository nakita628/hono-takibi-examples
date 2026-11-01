<h1 id="business-api">Business API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

As a Revolut Business customer with a Business Account, you can use the Business API to automate your own business processes.
Save time, reduce your costs, and avoid errors by using the Business API. 

:::tip[Before you get started]
To learn more about the Business API and its features, check the [**user guides**](https://developer.revolut.com/docs/guides/manage-accounts/introduction).

You can reach them at any time from the main navigation bar **→ Guides → Business**.
:::

You can view accounts, manage counterparties, make payments or currency exchanges without manual effort in the Web UI:

- Accounting: [Account management](https://developer.revolut.com/docs/api/business#get-account), [Accounting settings](https://developer.revolut.com/docs/api/business#tag-accounting), [Expense management](https://developer.revolut.com/docs/api/business#get-expense), [Transactions](https://developer.revolut.com/docs/api/business#get-transactions) 
- Payments: 
  - [Counterparty management](https://developer.revolut.com/docs/api/business#get-counterparties)
  - Payment management: [Payment drafts](https://developer.revolut.com/docs/api/business#delete-payment-draft), [Payout links](https://developer.revolut.com/docs/api/business#get-payout-link), [Transfers](https://developer.revolut.com/docs/api/business#tag-transfers)
  - [Foreign exchange](https://developer.revolut.com/docs/api/business#tag-foreign-exchange)
- Business team: [Card management](https://developer.revolut.com/docs/api/business#delete-card), [Card invitation management](https://developer.revolut.com/docs/api/business#update-card-invitation), [Team member management](https://developer.revolut.com/docs/api/business#delete-team-member)
- Developer tools: [Sandbox simulations](https://developer.revolut.com/docs/api/business#tag-simulations), [Webhook management](https://developer.revolut.com/docs/api/business#tag-webhooks-v2)

To see the reference for the specific endpoints and operations of this API, browse the menu on the left.

### Test the Business API

You can test the Business API in Postman by forking this collection:

[![View in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/revolut-api/workspace/revolut-developers/overview)

Base URLs:

* <a href="https://b2b.revolut.com/api/1.0">https://b2b.revolut.com/api/1.0</a> - Production server (uses live data)

* <a href="https://sandbox-b2b.revolut.com/api/1.0">https://sandbox-b2b.revolut.com/api/1.0</a> - Sandbox server (uses test data)

# Authentication

- HTTP Authentication, scheme: bearer Each Business API request must contain an authorization header in the following format to make a call: `Bearer <your_access_token>`.

The access token will be obtained the first time you set up your application and has an expiration of 40 minutes. 
During setup, a `refresh_token` will also be obtained which allows to obtain a new `access_token`.

:::danger
Never share your client-assertion JWT (JSON web token), `access_token` and `refresh_token` with anyone, as these can be used to access your banking data and initiate transactions.
:::

Access tokens can be issued with four security scopes and require a JWT (JSON Web Token) signature to be obtained:
- `READ`: Permissions for `GET` operations.
- `WRITE`: Permissions to update counterparties, webhooks, and issue payment drafts.
- `PAY`: Permissions to initiate or cancel transactions and currency exchanges.    
- `READ_SENSITIVE_CARD_DATA`: Permissions to retrieve sensitive card details.

  :::warning
  If you enable the `READ_SENSITIVE_CARD_DATA` scope for your access token, you must set up IP whitelisting. 
  Failing to do so will prevent you from accessing **any** Business API endpoint. 

  IP whitelisting means that you must specify an IP or a set of IPs which will be the only IPs from which requests to the API will be accepted. 
  To do so:
  1. Go to the Revolut Business web app [settings](https://business.revolut.com/settings) → **APIs** → **Business API**.
  2. Select the corresponding API certificate.
  3. In **Production IP whitelist**, provide the IP(s) which should be whitelisted.
      Make sure that the IPs you provide are **not** [local (i.e. private) IP addresses](https://www.okta.com/en-sg/identity-101/understanding-private-ip-ranges/). 
  4. Save the new settings.
  :::

To configure your JWT and obtain the refresh and first access tokens, complete the following steps:

  1. [Sign up for a Revolut Business account](https://developer.revolut.com/docs/guides/manage-accounts/get-started/sign-up-for-revolut-business-account)
  2. [Prepare your Sandbox environment](https://developer.revolut.com/docs/guides/manage-accounts/get-started/prepare-sandbox-environment)
  3. [Make your first API request](https://developer.revolut.com/docs/guides/manage-accounts/get-started/make-your-first-api-request)

<h1 id="business-api-accounting">Accounting</h1>

Manage [accounting settings](https://business.revolut.com/settings/accounting) for your business that can be assigned to your financial records such as [expenses](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses) or bills*.

Create, retrieve, update, and delete settings such as accounting categories, tax rates, and labels.

For more information, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings), [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories), [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups), .

See also the Revolut Help Centre: [Expenses](https://help.revolut.com/business/help/managing-my-business/expenses/) and [BillPay](https://help.revolut.com/business/help/integrating-with-external-apps/introduction-to-billpay/).

_*<small>Some settings are not supported for certain types of financial records.
For example, labels cannot be applied to bills.
Check the guides for details.
</small>_

## Retrieve a list of accounting categories

<a id="opIdgetAccountingCategories"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounting-categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounting-categories`

Get available accounting categories based on the provided query criteria.

:::note
The API returns a maximum of 500 accounting categories per request. 
The default page size is 100.
:::

The accounting categories are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.
The page size, that is, the maximum number of accounting categories returned per page is specified by the `limit` parameter. 
- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        
  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.
- If the number of results is smaller than the page size, `next_page_token` is not returned.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).

<h3 id="retrieve-a-list-of-accounting-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The page size, that is, the maximum number of accounting categories to return per page.<br><br>To get the next page of results, use `page_token`.|
|page_token|query|[PageToken](#schemapagetoken)|false|none|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA",
  "accounting_categories": [
    {
      "id": "8d831292-f950-4c5a-83f9-030df8cacd3f",
      "name": "Transportation",
      "code": "400",
      "created_at": "2026-03-11T17:03:25.570942Z",
      "updated_at": "2026-03-11T17:03:25.570942Z",
      "default_tax_rate_id": "d8f6bf6c-5b70-4c16-9549-5943e67ab009"
    },
    {
      "id": "8d749b93-4a2e-4f28-8b5b-9d64fe2e1d62",
      "name": "Office Supplies",
      "code": "410",
      "created_at": "2026-03-11T17:03:25.570940Z",
      "updated_at": "2026-03-11T17:03:25.570940Z",
      "default_tax_rate_id": "2a3520af-e6f7-416c-821e-0e83ffac1dfa"
    },
    {
      "id": "3726661e-0e93-4822-8bda-4d1a4c6e7dff",
      "name": "Software & Subscriptions",
      "code": "420",
      "created_at": "2026-03-11T17:03:25.570937Z",
      "updated_at": "2026-03-11T17:03:25.570937Z",
      "default_tax_rate_id": "6a83d8d8-f5a5-405d-aafd-729786569c2d"
    },
    {
      "id": "b37c42c8-1d42-4ee1-aa7e-348dd06ea69f",
      "name": "General Expenses",
      "code": "429",
      "created_at": "2026-03-11T17:03:25.570927Z",
      "updated_at": "2026-03-11T17:03:25.570927Z",
      "default_tax_rate_id": "5781063b-d140-4c72-bde9-b8b21e64e3e0"
    },
    {
      "id": "c729ea95-3ae7-4d21-91f7-1a69844175f2",
      "name": "Travel & Lodging",
      "code": "460",
      "created_at": "2026-03-11T17:03:25.570924Z",
      "updated_at": "2026-03-11T17:03:25.570924Z",
      "default_tax_rate_id": "f2519604-b04a-4a82-9b01-68235c4ad000"
    }
  ]
}
```

> 400 Response

```json
{
  "error_id": "29146977-8042-0ebf-b362-af224b14c830",
  "code": 2101,
  "message": "Query parameter 'limit' must be an integer"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-accounting-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of accounting categories and the next page token if the number of results exceeds the page size|Inline|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-accounting-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[PageToken](#schemapagetoken)|false|none|Cursor for the next page. <br>Used for pagination when the total number of results exceeds the maximum number per page.<br><br>To get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.<br>Omit this parameter to fetch the first page.<br>:::note<br>If there are no more results to fetch, `next_page_token` is not returned in the response.<br>:::|
|accounting_categories|[[AccountingCategoryResponse](#schemaaccountingcategoryresponse)]|true|none|The list of accounting categories.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create an accounting category

<a id="opIdcreateAccountingCategory"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounting-categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Transportation",
    "code": "400",
    "default_tax_rate_id": "e6b84ddb-a127-466b-9a0a-501bda07773f"
  }'
```

`POST /accounting-categories`

Add a new accounting category to the list of accounting categories that can be assigned to your financial records, such as expenses.

:::note
This operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).

> Body parameter

```json
{
  "name": "Transportation",
  "code": "400",
  "default_tax_rate_id": "e6b84ddb-a127-466b-9a0a-501bda07773f"
}
```

<h3 id="create-an-accounting-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAccountingCategoryRequest](#schemacreateaccountingcategoryrequest)|true|none|
|» name|body|string|true|The full name for the accounting category.|
|» code|body|string|true|The code name for the accounting category.|
|» default_tax_rate_id|body|string(uuid)|false|The ID of the default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.|

> Example responses

> 201 Response

```json
{
  "id": "6a37383e-cfd3-4a2f-aa81-e3a6e6939efa"
}
```

> 400 Response

```json
{
  "error_id": "fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18",
  "code": 2101,
  "message": "'code' is required, 'name' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-ab6e-4768-4e57-f281da25aa2b",
  "code": 3503,
  "message": "Category with name My Unique Accounting Category already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Accounting categories are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-an-accounting-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Resource created<br><br>On successful creation, the response returns only the ID of the new resource, even if the resource has more properties.<br>To get all details, use the returned resource ID with a GET request.|[ResourceCreatedResponse](#schemaresourcecreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when an accounting category with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - accounting category cannot be created due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting categories are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve accounting category details

<a id="opIdgetAccountingCategory"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounting-categories/64a2d310-e2a0-43c2-872f-969098141ebb \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounting-categories/{accounting_category_id}`

Get the details of a specific accounting category based on its ID.

The details include the accounting category name, code, and default tax rate, as well as when the accounting category was added to your settings, and when it was last updated.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).

<h3 id="retrieve-accounting-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accounting_category_id|path|string(uuid)|true|The ID of the accounting category to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "8d831292-f950-4c5a-83f9-030df8cacd3f",
  "name": "Transportation",
  "code": "400",
  "created_at": "2026-03-11T17:03:25.570942Z",
  "updated_at": "2026-03-11T17:03:25.570942Z",
  "default_tax_rate_id": "e6b84ddb-a127-466b-9a0a-501bda07773f"
}
```

> 400 Response

```json
{
  "error_id": "36e1a581-b05e-4018-b202-6b371092a19a",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "cbb15721-5f51-4588-a959-7494bb7ba827",
  "code": 3006,
  "message": "Accounting category with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-accounting-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounting category details|[AccountingCategoryResponse](#schemaaccountingcategoryresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when the required path parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the accounting category that you're trying to retrieve cannot be found.<br>This can happen, for example, when the accounting category doesn't exist, or the provided accounting category ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete an accounting category

<a id="opIddeleteAccountingCategory"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounting-categories/64a2d310-e2a0-43c2-872f-969098141ebb \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounting-categories/{accounting_category_id}`

Delete a specific accounting category, based on its ID.

:::note
This operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).
:::

Once the accounting category is deleted, it will not be returned by the API or in the Revolut Business app, and:
- You will not be able to assign it to new financial records (e.g. expenses). 
- Existing records assigned to this category that have not been completed will be marked as invalid, and you'll need to reassign them to another category.
- Completed records will not be affected by the change. 

A successful response does not get any content in return.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).

<h3 id="delete-an-accounting-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accounting_category_id|path|string(uuid)|true|The ID of the accounting category to delete.|

> Example responses

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "69bca351a-22a7-ac4d-af05-21032f9080ec",
  "code": 3006,
  "message": "Accounting category with id d6c034a8-b302-4741-b66f-cc0f0a19642e not found"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Accounting categories are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-an-accounting-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Accounting category deleted|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the accounting category that you're trying to delete doesn't exist.<br>This can happen when, for example, the accounting category has already been deleted, or the provided category ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - accounting category cannot be deleted due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting category are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update accounting category settings

<a id="opIdupdateAccountingCategory"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounting-categories/64a2d310-e2a0-43c2-872f-969098141ebb \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Custom with tax rate",
    "code": "998",
    "default_tax_rate_id": "e6b84ddb-a127-466b-9a0a-501bda07773f"
  }'
```

`PATCH /accounting-categories/{accounting_category_id}`

Update settings for a specific accounting category, based on its ID.

:::note
This operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).

> Body parameter

```json
{
  "name": "Custom with tax rate",
  "code": "998",
  "default_tax_rate_id": "e6b84ddb-a127-466b-9a0a-501bda07773f"
}
```

<h3 id="update-accounting-category-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accounting_category_id|path|string(uuid)|true|The ID of the accounting category to update.|
|body|body|[UpdateAccountingCategoryRequest](#schemaupdateaccountingcategoryrequest)|true|none|
|» name|body|string|false|The new full name for the accounting category.|
|» code|body|string|false|The new code name for the accounting category.|
|» default_tax_rate_id|body|string(uuid)|false|The ID of the new default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.|

> Example responses

> 400 Response

```json
{
  "error_id": "f1059c4b-4278-45d3-a17f-bd433ab33c15",
  "code": 2101,
  "message": "Request body must not be empty"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "be6c9d90-df25-458a-b559-be61896c94b8",
  "code": 3006,
  "message": "Accounting category with id b656d8a4-a5cb-4f03-9a95-f281da25aa2b not found"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-ab6e-4768-4e57-f281da25aa2b",
  "code": 3503,
  "message": "Category with name My Unique Accounting Category already exists"
}
```

> 422 Response

```json
{
  "error_id": "9c4be950c-cfd6-4e04-bd79-bd433ab33c15",
  "code": 3514,
  "message": "Accounting categories are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-accounting-category-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Accounting category updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the accounting category that you're trying to modify cannot be found.<br>This can happen, for example, when the accounting category doesn't exist, or the provided category ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when an accounting category with the provided name and/or code already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - accounting category cannot be updated due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting categories are managed by that integration.<br>May also be returned if you try to modify a category that has already been deleted, or when you try to clear `name` and/or `code` values using `null`. <br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of label groups

<a id="opIdgetLabelGroups"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /label-groups`

Get available label groups based on the provided query criteria.

The label groups are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

<h3 id="retrieve-a-list-of-label-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The page size, that is, the maximum number of label groups to return per page.<br><br>To get the next page of results, use `page_token`.|
|page_token|query|[PageToken](#schemapagetoken)|false|none|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA",
  "label_groups": [
    {
      "id": "f0e1d2c3-b4a5-4678-9012-3456789abcde",
      "name": "Department",
      "created_at": "2026-03-19T07:15:00.000000Z",
      "updated_at": "2026-03-19T08:45:22.111444Z"
    },
    {
      "id": "f09ad1ad3-a1c0-4c09-b8f8-24b439e72690",
      "name": "Employee",
      "created_at": "2026-03-11T10:33:51.121090Z",
      "updated_at": "2026-03-11T10:33:51.121090Z"
    },
    {
      "id": "a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d",
      "name": "Project",
      "created_at": "2026-02-01T08:00:00.000000Z",
      "updated_at": "2026-02-01T08:00:00.000000Z"
    },
    {
      "id": "5f4e3d2c-1b0a-4987-8765-43210fedcba9",
      "name": "Location",
      "created_at": "2026-01-15T10:20:30.123456Z",
      "updated_at": "2026-03-10T14:45:12.987654Z"
    },
    {
      "id": "98765432-abcd-ef01-2345-67890abcdef0",
      "name": "Task",
      "created_at": "2025-12-20T11:11:11.000Z",
      "updated_at": "2026-03-15T09:30:00.555222Z"
    }
  ]
}
```

> 400 Response

```json
{
  "error_id": "29146977-8042-446f-b362-af224b14c830",
  "code": 2101,
  "message": "Query parameter 'limit' must be an integer"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-label-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of label groups|Inline|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-label-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[PageToken](#schemapagetoken)|false|none|Cursor for the next page. <br>Used for pagination when the total number of results exceeds the maximum number per page.<br><br>To get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.<br>Omit this parameter to fetch the first page.<br>:::note<br>If there are no more results to fetch, `next_page_token` is not returned in the response.<br>:::|
|label_groups|[[LabelGroupResponse](#schemalabelgroupresponse)]|true|none|List of label groups.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a new label group

<a id="opIdcreateLabelGroup"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Department",
    "labels": [
      {
        "name": "Sales & Account Management"
      },
      {
        "name": "Product Management"
      },
      {
        "name": "Design & UX"
      },
      {
        "name": "Customer Success"
      },
      {
        "name": "Engineering"
      },
      {
        "name": "Research & Development"
      },
      {
        "name": "Operations"
      },
      {
        "name": "Quality Assurance"
      },
      {
        "name": "Data Science & Analytics"
      },
      {
        "name": "Executive & Leadership"
      }
    ]
  }'
```

`POST /label-groups`

Add a new group of labels that can be applied to your financial records, such as expenses.

:::note
- This operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).
- You can have up to 5 label groups at a time per business.
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

> Body parameter

```json
{
  "name": "Department",
  "labels": [
    {
      "name": "Sales & Account Management"
    },
    {
      "name": "Product Management"
    },
    {
      "name": "Design & UX"
    },
    {
      "name": "Customer Success"
    },
    {
      "name": "Engineering"
    },
    {
      "name": "Research & Development"
    },
    {
      "name": "Operations"
    },
    {
      "name": "Quality Assurance"
    },
    {
      "name": "Data Science & Analytics"
    },
    {
      "name": "Executive & Leadership"
    }
  ]
}
```

<h3 id="create-a-new-label-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateLabelGroupRequest](#schemacreatelabelgrouprequest)|true|none|
|» name|body|string|true|The name for the new label group.|
|» labels|body|[[CreateLabelRequest](#schemacreatelabelrequest)]|true|The labels to create in the new group.<br><br>The maximum number of labels you can create for a new group is 200.<br>If you need to add more, you can add them later by [creating new labels individually](https://developer.revolut.com/docs/api/business#create-label).|

> Example responses

> 201 Response

```json
{
  "id": "6a37383e-cfd3-4a2f-aa81-e3a6e6939efa"
}
```

> 400 Response

```json
{
  "error_id": "69bc43d4-0ebf-4f7c-88e0-ebb7a1441a18",
  "code": 2101,
  "message": "'labels' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 409 Response

```json
{
  "error_id": "69bc49bc-4e57-4768-ab6e-f281da25aa2b",
  "code": 3506,
  "message": "Label group with name 'My Unique Label Group' already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-label-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Resource created<br><br>On successful creation, the response returns only the ID of the new resource, even if the resource has more properties.<br>To get all details, use the returned resource ID with a GET request.|[ResourceCreatedResponse](#schemaresourcecreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a label group with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label group cannot be created due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve label group details

<a id="opIdgetLabelGroup"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /label-groups/{group_id}`

Get the details of a specific label group based on the label group ID.

The details include the label group name, as well as when the label group was added to your settings, and when it was last updated.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

<h3 id="retrieve-label-group-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "09ad1ad3-a1c0-4c09-b8f8-24b439e72690",
  "name": "Department",
  "created_at": "2026-03-11T10:33:51.121090Z",
  "updated_at": "2026-03-11T10:33:51.121090Z"
}
```

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "cbb15721-5f51-4588-a959-7494bb7ba827",
  "code": 3006,
  "message": "Label group with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-label-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Label group details|[LabelGroupResponse](#schemalabelgroupresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the label group that you're trying to retrieve cannot be found.<br>This can happen, for example, when the label group has been deleted, or the provided label group ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a label group

<a id="opIddeleteLabelGroup"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /label-groups/{group_id}`

Delete a specific label group, based on its ID.

:::note
This operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).
:::

Once the label group is deleted, it will not be returned by the API or in the Revolut Business app, and:
- You will not be able to apply labels from the group to new financial records (e.g. expenses). 
- Existing records that have not been completed and that contain labels from this group will be marked as invalid, and you'll need to update them to use different labels.
- Completed records will not be affected by the change. 

A successful response does not get any content in return.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

<h3 id="delete-a-label-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to delete.|

> Example responses

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Label group with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-label-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Label group deleted|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the label group that you're trying to delete cannot be found.<br>This can happen, for example, when the label group doesn't exist, or the provided label group ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label group cannot be deleted due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and label groups are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update label group settings

<a id="opIdupdateLabelGroup"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "20% VAT"
  }'
```

`PATCH /label-groups/{group_id}`

Update the name for a specific label group, based on its ID.

:::note
This operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

> Body parameter

```json
{
  "name": "20% VAT"
}
```

<h3 id="update-label-group-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to update.|
|body|body|[UpdateLabelGroupRequest](#schemaupdatelabelgrouprequest)|true|none|
|» name|body|string|true|The new name for the label group.|

> Example responses

> 400 Response

```json
{
  "error_id": "f1059c4b-4278-45d3-a17f-bd433ab33c15",
  "code": 2101,
  "message": "Request body must not be empty"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Label group with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-4e57-4768-ab6e-f281da25aa2b",
  "code": 3506,
  "message": "Label group with name 'My Unique Label Group' already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-label-group-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Label group updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the label group that you're trying to update cannot be found.<br>This can happen, for example, when the label group doesn't exist, or the provided label group ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a label group with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label group cannot be updated due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and label groups are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of labels from a label group

<a id="opIdgetLabels"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /label-groups/{group_id}/labels`

Get labels from a specific label group based on the provided query criteria.

:::note
The API returns a maximum of 500 labels per request. 
The default page size is 100.
:::

The labels are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.
The page size, that is, the maximum number of labels returned per page is specified by the `limit` parameter. 
- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        
  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.
- If the number of results is smaller than the page size, `next_page_token` is not returned.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

<h3 id="retrieve-a-list-of-labels-from-a-label-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group from which to retrieve labels.|
|limit|query|integer|false|The page size, that is, the maximum number of labels to return per page.<br><br>To get the next page of results, use `page_token`.|
|page_token|query|[PageToken](#schemapagetoken)|false|none|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA",
  "labels": [
    {
      "id": "f0e1d2c3-b4a5-4678-9012-3456789abcde",
      "name": "Consultants",
      "created_at": "2026-03-19T07:15:00.000000Z",
      "updated_at": "2026-03-19T08:45:22.111444Z"
    },
    {
      "id": "f09ad1ad-a1c0-4c09-b8f8-24b439e72690",
      "name": "IT & Tech Support",
      "created_at": "2026-03-11T10:33:51.121090Z",
      "updated_at": "2026-03-11T10:33:51.121090Z"
    },
    {
      "id": "a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d",
      "name": "HR & Facility",
      "created_at": "2026-02-01T08:00:00.000000Z",
      "updated_at": "2026-02-01T08:00:00.000000Z"
    },
    {
      "id": "c3b2a1d0-e9f8-47a6-9d8c-7b6a5f4e3d2c",
      "name": "Finance & Legal",
      "created_at": "2026-01-22T09:10:15.555000Z",
      "updated_at": "2026-01-23T11:00:45.123456Z"
    },
    {
      "id": "d9e8f7a6-b5c4-4321-8765-43210fedcba9",
      "name": "Sales & Marketing",
      "created_at": "2026-01-20T14:20:00.000000Z",
      "updated_at": "2026-01-20T14:20:00.000000Z"
    }
  ]
}
```

> 400 Response

```json
{
  "error_id": "29146977-8042-446f-b362-af224b14c830",
  "code": 2101,
  "message": "Query parameter 'limit' must be an integer"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-labels-from-a-label-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of labels|Inline|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-labels-from-a-label-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[PageToken](#schemapagetoken)|false|none|Cursor for the next page. <br>Used for pagination when the total number of results exceeds the maximum number per page.<br><br>To get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.<br>Omit this parameter to fetch the first page.<br>:::note<br>If there are no more results to fetch, `next_page_token` is not returned in the response.<br>:::|
|labels|[[LabelResponse](#schemalabelresponse)]|true|none|List of labels in the specified group|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a new label

<a id="opIdcreateLabel"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Communications"
  }'
```

`POST /label-groups/{group_id}/labels`

Add a new label to a label group. 

:::note
This operation is not supported for [externally managed labels](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).
:::

The labels are used for accounting and can be applied to your financial records, such as expenses.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

> Body parameter

```json
{
  "name": "Communications"
}
```

<h3 id="create-a-new-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to which to add the new label.|
|body|body|[CreateLabelRequest](#schemacreatelabelrequest)|true|none|
|» name|body|string|true|The name for the new label.|

> Example responses

> 201 Response

```json
{
  "id": "6a37383e-cfd3-4a2f-aa81-e3a6e6939efa"
}
```

> 400 Response

```json
{
  "error_id": "fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18",
  "code": 2101,
  "message": "'name' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-4e57-4768-ab6e-f281da25aa2b",
  "code": 3506,
  "message": "Label with name 'My Unique Label' already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Resource created<br><br>On successful creation, the response returns only the ID of the new resource, even if the resource has more properties.<br>To get all details, use the returned resource ID with a GET request.|[ResourceCreatedResponse](#schemaresourcecreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a label with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label cannot be created due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a label

<a id="opIddeleteLabel"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690/labels/33279b4f-97ac-4a6f-8932-c6a3b0974060 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /label-groups/{group_id}/labels/{label_id}`

Delete a specific label, based on the IDs of the label and its label group.

:::note
This operation is not supported for [externally managed labels](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).
:::

Once the label is deleted, it will not be returned by the API or in the Revolut Business app, and:
- You will not be able to apply it to new financial records (e.g. expenses). 
- Existing records with this label that have not been completed will be marked as invalid, and you'll need to update them to use a different label.
- Completed records will not be affected by the change. 

A successful response does not get any content in return.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

<h3 id="delete-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to which the label belongs.|
|label_id|path|string(uuid)|true|The ID of the label to delete.|

> Example responses

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Label with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Label deleted|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the label that you're trying to delete cannot be found.<br>This can happen, for example, when the label doesn't exist, or the provided label ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label cannot be deleted due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a label

<a id="opIdupdateLabel"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/label-groups/09ad1ad3-a1c0-4c09-b8f8-24b439e72690/labels/33279b4f-97ac-4a6f-8932-c6a3b0974060 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "20% VAT"
  }'
```

`PATCH /label-groups/{group_id}/labels/{label_id}`

Update the name for a specific label, based on the IDs of the label and its label group.

:::note
This operation is not supported for [externally managed labels]/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups(#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).

> Body parameter

```json
{
  "name": "20% VAT"
}
```

<h3 id="update-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string(uuid)|true|The ID of the label group to which the label belongs.|
|label_id|path|string(uuid)|true|The ID of the label to update.|
|body|body|[UpdateLabelRequest](#schemaupdatelabelrequest)|true|none|
|» name|body|string|true|The new name for the label.|

> Example responses

> 400 Response

```json
{
  "error_id": "f1059c4b-4278-45d3-a17f-bd433ab33c15",
  "code": 2101,
  "message": "Request body must not be empty"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Label with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-4e57-4768-ab6e-f281da25aa2b",
  "code": 3506,
  "message": "Label with name 'My Unique Label' already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Labels are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Label updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the label that you're trying to update cannot be found.<br>This can happen, for example, when the label or corresponding label group doesn't exist, or the provided ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a label with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - label cannot be updated due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of tax rates

<a id="opIdgetTaxRates"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/tax-rates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tax-rates`

Get available tax rates based on the provided query criteria.

:::note
The API returns a maximum of 500 tax rates per request. 
The default page size is 100.
:::

The tax rates are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.
The page size, that is, the maximum number of tax rates returned per page is specified by the `limit` parameter. 
- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        
  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.
- If the number of results is smaller than the page size, `next_page_token` is not returned.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).

<h3 id="retrieve-a-list-of-tax-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The page size, that is, the maximum number of tax rates to return per page.<br><br>To get the next page of results, use `page_token`.|
|page_token|query|[PageToken](#schemapagetoken)|false|none|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA",
  "tax_rates": [
    {
      "id": "f0e1d2c3-b4a5-4678-9012-3456789abcde",
      "name": "Import Duty Surcharge",
      "created_at": "2026-03-19T07:15:00.000000Z",
      "updated_at": "2026-03-19T08:45:22.111444Z",
      "percentage": 12.75
    },
    {
      "id": "f09ad1ad3-a1c0-4c09-b8f8-24b439e72690",
      "name": "20% (VAT on Expenses)",
      "created_at": "2026-03-11T10:33:51.121090Z",
      "updated_at": "2026-03-11T10:33:51.121090Z",
      "percentage": 20
    },
    {
      "id": "a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d",
      "name": "Reduced Rate Food & Beverage",
      "created_at": "2026-02-01T08:00:00.000000Z",
      "updated_at": "2026-02-01T08:00:00.000000Z",
      "percentage": 5.5
    },
    {
      "id": "5f4e3d2c-1b0a-4987-8765-43210fedcba9",
      "name": "Standard Output Tax (High)",
      "created_at": "2026-01-15T10:20:30.123456Z",
      "updated_at": "2026-03-10T14:45:12.987654Z",
      "percentage": 20
    },
    {
      "id": "98765432-abcd-ef01-2345-67890abcdef0",
      "name": "Exempt Financial Services",
      "created_at": "2025-12-20T11:11:11.000Z",
      "updated_at": "2026-03-15T09:30:00.555222Z",
      "percentage": 0
    }
  ]
}
```

> 400 Response

```json
{
  "error_id": "29146977-8042-446f-b362-af224b14c830",
  "code": 2101,
  "message": "Query parameter 'limit' must be an integer"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tax rates|Inline|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-tax-rates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[PageToken](#schemapagetoken)|false|none|Cursor for the next page. <br>Used for pagination when the total number of results exceeds the maximum number per page.<br><br>To get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.<br>Omit this parameter to fetch the first page.<br>:::note<br>If there are no more results to fetch, `next_page_token` is not returned in the response.<br>:::|
|tax_rates|[[TaxRateResponse](#schemataxrateresponse)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a new tax rate

<a id="opIdcreateTaxRate"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/tax-rates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "20% (VAT on Expenses)",
    "percentage": 20
  }'
```

`POST /tax-rates`

Add a new tax rate to the list of tax rates that can be applied to your financial records, such as expenses.

:::note
This operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).

> Body parameter

```json
{
  "name": "20% (VAT on Expenses)",
  "percentage": 20
}
```

<h3 id="create-a-new-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTaxRateRequest](#schemacreatetaxraterequest)|true|none|
|» name|body|string|true|The name of the tax.|
|» percentage|body|number(double)|true|The tax rate percentage applied to the taxable amount. For example, `23` for 23%.|

> Example responses

> 201 Response

```json
{
  "id": "6a37383e-cfd3-4a2f-aa81-e3a6e6939efa"
}
```

> 400 Response

```json
{
  "error_id": "fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18",
  "code": 2101,
  "message": "'percentage' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-4e57-4768-ab6e-f281da25aa2b",
  "code": 3505,
  "message": "Tax rate with name My Unique Rate already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Tax rates are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Resource created<br><br>On successful creation, the response returns only the ID of the new resource, even if the resource has more properties.<br>To get all details, use the returned resource ID with a GET request.|[ResourceCreatedResponse](#schemaresourcecreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a tax rate with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - tax rate cannot be created due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve tax rate details

<a id="opIdgetTaxRate"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/tax-rates/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tax-rates/{tax_rate_id}`

Get the details of a specific tax rate based on the tax rate ID.

The details include the tax rate name and percentage, as well as when the tax rate was added to your settings, and when it was last updated.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).

<h3 id="retrieve-tax-rate-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tax_rate_id|path|string(uuid)|true|The ID of the tax rate to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "09ad1ad3-a1c0-4c09-b8f8-24b439e72690",
  "name": "20% (VAT on Expenses)",
  "created_at": "2026-03-11T10:33:51.121090Z",
  "updated_at": "2026-03-11T10:33:51.121090Z",
  "percentage": 20
}
```

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "cbb15721-5f51-4588-a959-7494bb7ba827",
  "code": 3006,
  "message": "Tax rate with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-tax-rate-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tax rate details|[TaxRateResponse](#schemataxrateresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the tax rate that you're trying to retrieve cannot be found.<br>This can happen, for example, when the tax rate has been deleted, or the provided tax rate ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a tax rate

<a id="opIddeleteTaxRate"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/tax-rates/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tax-rates/{tax_rate_id}`

Delete a specific tax rate, based on its ID.

:::note
This operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).
:::

Once the tax rate is deleted, it will not be returned by the API or in the Revolut Business app, and:
- You will not be able to apply it to new financial records (e.g. expenses). 
- Existing records with this tax rate that have not been completed will be marked as invalid, and you'll need to update them to use a different tax rate.
- Completed records will not be affected by the change. 

A successful response does not get any content in return.

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).

<h3 id="delete-a-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tax_rate_id|path|string(uuid)|true|The ID of the tax rate to delete.|

> Example responses

> 400 Response

```json
{
  "error_id": "f70973ea-c939-41f8-a106-1656ab5fae2f",
  "code": 2101,
  "message": "Path parameter 'id' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Tax rate with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Tax rates are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Tax rate deleted|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the tax rate that you're trying to delete cannot be found.<br>This can happen, for example, when the tax rate doesn't exist, or the provided tax rate ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - tax rate cannot be deleted due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update tax rate settings

<a id="opIdupdateTaxRate"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/tax-rates/09ad1ad3-a1c0-4c09-b8f8-24b439e72690 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "20% VAT"
  }'
```

`PATCH /tax-rates/{tax_rate_id}`

Update settings for a specific tax rate, based on its ID.

:::note
This operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).
:::

For more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).

> Body parameter

```json
{
  "name": "20% VAT"
}
```

<h3 id="update-tax-rate-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tax_rate_id|path|string(uuid)|true|The ID of the tax rate to update.|
|body|body|[UpdateTaxRateRequest](#schemaupdatetaxraterequest)|true|none|
|» name|body|string|false|The new name for the tax rate.|

> Example responses

> 400 Response

```json
{
  "error_id": "f1059c4b-4278-45d3-a17f-bd433ab33c15",
  "code": 2101,
  "message": "Request body must not be empty"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0",
  "code": 3006,
  "message": "Tax rate with id be6c9d90-df25-458a-b559-be61896c94b8 not found"
}
```

> 409 Response

```json
{
  "error_id": "8c08b656-4e57-4768-ab6e-f281da25aa2b",
  "code": 3505,
  "message": "Tax rate with name My Unique Rate already exists"
}
```

> 422 Response

```json
{
  "error_id": "e950c41e-cfd6-4e04-bd79-2d57a3951774",
  "code": 3514,
  "message": "Tax rates are managed by your connected accounting integration and cannot be modified manually"
}
```

> 429 Response

```json
{
  "error_id": "06153eec-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 3162,
  "message": "Request rate limit has been reached. Try again later."
}
```

> 500 Response

```json
{
  "error_id": "7f96652e-7518-4229-872b-4e4c867fb4da",
  "code": 5000,
  "message": "An unexpected error occurred while processing your request. If the issue persists, please contact support"
}
```

> 503 Response

```json
{
  "error_id": "201768bc-c5cd-4db8-8898-7ae96b9d89ab",
  "code": 5003,
  "message": "The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-tax-rate-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Tax rate updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the tax rate that you're trying to update cannot be found.<br>This can happen, for example, when the tax rate doesn't exist, or the provided tax rate ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Request conflicts with the current state of the resource.<br>Returned, for example, when a tax rate with the provided name already exists.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity - tax rate cannot be updated due to business rules <br><br>Returned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.<br><br>The request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.<br>Retrying the same request won't succeed.|[ErrorWithId](#schemaerrorwithid)|
|429|Too Many Requests|Too many requests<br><br>Returned, for example, when the rate limit has been exceeded.<br>If the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|500|Internal Server Error|Internal server error<br><br>An unexpected application error occurred.|[ErrorWithId](#schemaerrorwithid)|
|503|Service Unavailable|Service Unavailable<br><br>The system is temporarily unavailable.<br>If the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-accounts">Accounts</h1>

Get the balances, full banking details, and other details of your business accounts. 

For more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).

## Retrieve all accounts

<a id="opIdgetAccounts"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

Get a list of all your accounts.

For more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).

> Example responses

> 200 Response

```json
[
  {
    "id": "b7ec67d3-5af1-42c8-bece-3d28nlmo894d",
    "name": "International account",
    "balance": 3171.89,
    "currency": "GBP",
    "state": "active",
    "public": false,
    "created_at": "2022-08-05T14:29:22.215785Z",
    "updated_at": "2022-08-05T14:29:22.215785Z",
    "account_type": "current"
  },
  {
    "id": "bssc67d3-5afd-42c2-bece-3d28nlmo894d",
    "name": "International account 2",
    "balance": 411561.89,
    "currency": "EUR",
    "state": "active",
    "public": true,
    "created_at": "2022-08-25T14:29:22.215785Z",
    "updated_at": "2022-08-30T14:29:22.215785Z",
    "account_type": "current"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-all-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of business accounts|[Accounts](#schemaaccounts)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve an account

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}`

Get the information about one of your accounts.
Specify the account by its ID.

For more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).

<h3 id="retrieve-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string(uuid)|true|The ID of the account to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "b7ec67d3-5af1-42c8-bece-3d28nlmo894d",
  "name": "International account",
  "balance": 3171.89,
  "currency": "GBP",
  "state": "active",
  "public": false,
  "created_at": "2022-08-05T14:29:22.215785Z",
  "updated_at": "2022-08-05T14:29:22.215785Z",
  "account_type": "current"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about a specific account|[Account](#schemaaccount)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve account's full bank details

<a id="opIdgetAccountDetails"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/bank-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/bank-details`

Get all the bank details of one of your accounts.
Specify the account by its ID.

For more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).

<h3 id="retrieve-accounts-full-bank-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string(uuid)|true|The ID of the account to retrieve all bank details.|

> Example responses

> 200 Response

```json
[
  {
    "iban": "GB66REVO00996995908888",
    "bic": "REVOGB21",
    "beneficiary": "International account",
    "beneficiary_address": {
      "street_line1": "Revolut LTD",
      "street_line2": "1 Canada Square",
      "city": "London",
      "country": "GB",
      "postcode": "E14 5AB"
    },
    "bank_country": "GB",
    "pooled": false,
    "schemes": [
      "swift"
    ],
    "estimated_time": {
      "unit": "days",
      "min": 1,
      "max": 3
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-accounts-full-bank-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The bank details of a specific account|[AccountBankDetailsItems](#schemaaccountbankdetailsitems)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-cards">Cards</h1>

Manage cards issued for your business, freeze, unfreeze, lock, unlock, terminate and update card settings, such as spending limits and merchant controls.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards for your business](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

:::tip [Card invitations for onboarding team members]
To prepare virtual cards for team members who have not completed onboarding yet, use [Card invitations](https://developer.revolut.com/docs/api/business#update-card-invitation) instead.
:::

## Retrieve a list of cards

<a id="opIdgetCards"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards`

Get the list of all cards in your organisation.

The results are paginated and sorted by the `created_at` date in reverse chronological order.
Terminated cards are not included in the list.
To check the status of a specific terminated card, [retrieve it by its ID](https://developer.revolut.com/docs/api/business#get-card).

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="retrieve-a-list-of-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_before|query|string(date-time)|false|Retrieves cards with `created_at` < `created_before`.<br>The default value is the current date and time at which you are calling the endpoint.<br><br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|number(integer)|false|The maximum number of cards to return per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last card returned in the previous response as the value for `created_before`.|

> Example responses

> 200 Response

```json
[
  {
    "id": "aa14a9af-d7a7-4214-a743-10b818f74bd0",
    "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
    "created_at": "2025-09-15T11:04:11.047305Z",
    "updated_at": "2025-09-17T08:32:11.024721Z",
    "virtual": true,
    "last_digits": "2671",
    "expiry": "09/2030",
    "label": "Kirby Janette",
    "state": "active",
    "spending_limits": {
      "single": {
        "amount": 200.22,
        "currency": "GBP"
      },
      "month": {
        "amount": 200.44,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-09-20",
      "end_date": "2026-12-20",
      "end_date_action": "terminate"
    },
    "categories": [
      "restaurants",
      "groceries"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
        "e8a87432-f71e-4deb-be84-969a02792929"
      ]
    },
    "countries": [
      "GB",
      "SG"
    ],
    "accounts": [
      "f52c6c84-26b9-4e95-bbcf-99ed6523fb51"
    ]
  },
  {
    "id": "b8b56da4-1fde-4320-a8d7-cb7560252f7e",
    "created_at": "2025-09-15T11:04:11.047305Z",
    "updated_at": "2025-09-15T11:04:11.047305Z",
    "virtual": false,
    "last_digits": "2672",
    "expiry": "09/2030",
    "state": "active"
  }
]
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Parameter limit must be a valid integer in range: [1, 100]."
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of cards of the business|[CardsResponse](#schemacardsresponse)|
|400|Bad Request|Bad pagination parameters|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a card

<a id="opIdcreateCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request_id": "7a10f3eb-fe56-4699-9bd0-044a63508828",
    "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
    "virtual": true,
    "label": "Kirby Janette",
    "spending_limits": {
      "single": {
        "amount": 200.22,
        "currency": "GBP"
      },
      "week": {
        "amount": 200.44,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "end_date": "2026-12-15",
      "end_date_action": "terminate"
    },
    "categories": [
      "groceries",
      "restaurants"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
        "e8a87432-f71e-4deb-be84-969a02792929"
      ]
    },
    "countries": [
      "GB",
      "SG"
    ],
    "accounts": [
      "75aa436d-2a04-4ab9-af14-ed0955769b8c"
    ]
  }'
```

`POST /cards`

Create a new [team member card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards), [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards), or [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).

When using the API, you can create only virtual cards.
To create a physical card, use the [Revolut Business app](https://business.revolut.com).

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

> Body parameter

```json
{
  "request_id": "7a10f3eb-fe56-4699-9bd0-044a63508828",
  "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
  "virtual": true,
  "label": "Kirby Janette",
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "end_date": "2026-12-15",
    "end_date_action": "terminate"
  },
  "categories": [
    "groceries",
    "restaurants"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929"
    ]
  },
  "countries": [
    "GB",
    "SG"
  ],
  "accounts": [
    "75aa436d-2a04-4ab9-af14-ed0955769b8c"
  ]
}
```

<h3 id="create-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Card to create|
|» request_id|body|string|true|A unique ID of the request that you provide.<br><br>There is no strict requirement on the format of this ID, but we suggest using v4 UUIDs.<br><br>:::warning<br>This ID is used to prevent duplicate card creation requests in case of a lost connection or client error, so make sure you use the same `request_id` for requests related to the same card.<br>The deduplication is limited to 24 hours counting from the first request using a given ID.<br>For more information, see the guides: [Manage cards - Idempotency](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#idempotency).<br>:::|
|» holder_id|body|string(uuid)|false|The ID of the team member to assign as the holder of the card.<br><br>:::tip<br>To retrieve a team member's ID, use the [`GET /team-members` operation](https://developer.revolut.com/docs/api/business#get-team-members).<br>:::<br><br>For virtual cards (`virtual=true`), this field is optional.                    <br>If not provided, the type of the issued card depends on `contact_ids`:<br>  - `contact_ids` provided → [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)<br>  - `contact_ids` not specified → [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)|
|» contact_ids|body|[string(uuid)]|false|The list of [contacts](https://help.revolut.com/business/help/cards/more-on-cards/company-cards/) for the card.<br>Up to 5 team members sharing the card, much like co-holders.<br>Can be [edited](https://developer.revolut.com/docs/api/business#update-card-contacts).<br><br>Allowed only for [company cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`virtual=true`, `holder_id` not specified).|
|» product|body|object|false|The card product offered by the card provider for this card.<br>In other words, the program that the card is issued under.<br><br>Provided only for virtual cards with no holder ID (`virtual=true`, and `holder_id` not specified):<br>- **Required** for [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`contact_ids` not specified)<br>- Optional for [company cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`contact_ids` specified)<br><br>Not allowed for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`holder_id` present).<br><br>:::note<br>This property is only available to travel intermediaries using our travel solution.<br>To use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|» » code|body|string|true|The code of the card product.|
|» virtual|body|boolean|true|Specifies the type of the card. <br>Must be set to `true`, as with the API, you can create only virtual cards.<br><br>:::tip<br>To create a physical card, use the [Revolut Business app](https://business.revolut.com).<br>:::|
|» label|body|string|false|The label for the issued card, displayed in the UI to help distinguish between cards.<br>If not specified, no label will be added.|
|» references|body|[CardReferences](#schemacardreferences)|false|References for the card.<br>Up to 5 name-value pairs assigned to the card for tracking.<br><br>:::info<br>Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.<br>:::<br><br>The names must be unique.<br>The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.<br><br>References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).<br>They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). <br><br>:::note<br>The references recorded on a transaction are those assigned to the card at the time the transaction took place.<br>If the references are amended, they will only be applied to future transactions. <br>Existing transaction are not affected.<br>:::|
|» spending_limits|body|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|All spending limits set for the card.<br><br>You can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.<br>If you try to specify 2 periodic limits at a time, it will result in an error.|
|» spending_period|body|object|false|The controls for the card's spending period.<br><br>They let you set the dates when the card becomes available or unavailable for spending, and define what happens after the end date.<br><br>If specified, you must provide at least one of these:<br>- `start_date`<br>- `end_date` together with `end_date_action`<br><br>The dates provided must be in the future.|
|» » start_date|body|string(date)|false|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date|body|string(date)|false|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date_action|body|string|false|The action to take after the end date of the spending period.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» categories|body|[[BusinessMerchantCategory](#schemabusinessmerchantcategory)]|false|The list of merchant categories to be available for card spending.<br>If not specified, all categories will be allowed.|
|» merchant_controls|body|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|The merchant-level controls for card spending.<br><br>They let you block or allow the card to only transact with specific merchants.|
|» mcc_controls|body|object|false|Restricts card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|» » control_type|body|[MccControlType](#schemamcccontroltype)|true|The type of control to apply.|
|» » mccs|body|[Mccs](#schemamccs)|true|The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.|
|» countries|body|[string]|false|Restricts card use to specified countries, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|» accounts|body|[string(uuid)]|false|The list of accounts to link to the card.<br>If not specified, all accounts will be linked.<br>To retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» virtual|true|
|» » end_date_action|lock|
|» » end_date_action|terminate|
|» categories|health|
|» categories|general|
|» categories|services|
|» categories|airlines|
|» categories|transport|
|» categories|accommodation|
|» categories|utilities|
|» categories|shopping|
|» categories|financial|
|» categories|furniture|
|» categories|hardware|
|» categories|groceries|
|» categories|fuel|
|» categories|entertainment|
|» categories|software|
|» categories|restaurants|
|» categories|advertising|
|» categories|cash|
|» categories|education|
|» categories|government|
|» » control_type|allow|

> Example responses

> 200 Response

```json
{
  "id": "aa14a9af-d7a7-4214-a743-10b818f74bd0",
  "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
  "created_at": "2025-09-15T11:04:11.047305Z",
  "updated_at": "2025-09-15T11:04:11.047305Z",
  "virtual": true,
  "last_digits": "2671",
  "expiry": "09/2030",
  "label": "Kirby Janette",
  "state": "active",
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "end_date": "2026-12-15",
    "end_date_action": "terminate",
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "categories": [
    "restaurants",
    "groceries"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929"
    ]
  },
  "countries": [
    "GB",
    "SG"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51"
  ]
}
```

> 400 Response

```json
{
  "code": 3000,
  "message": "Either contact_ids or product must be present when holder_id is empty"
}
```

> 404 Response

```json
{
  "code": 3042,
  "message": "Team member not found"
}
```

> 422 Response

```json
{
  "code": 3087,
  "message": "Active virtual cards limit is exceeded for the employee"
}
```

> 429 Response

```json
{
  "code": 3162,
  "message": "Parallel requests conflict. Please synchronize your requests. request_id=5baa6989-ae59-4668-bb09-042fca180518"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the created card|[CardCreatedResponse](#schemacardcreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when your request is malformed, missing required fields, or when it contains fields that cannot co-exist or unsupported values.<br><br>If the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. <br>For example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.<br>In the example, `USA` is invalid, because it should be a 2-letter code.<br>In such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.|[Error](#schemaerror)|
|404|Not Found|Team member not found<br><br>Returned when the team member specified as cardholder in `holder_id` does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable entity<br><br>For example, the team member exceeds the limit for virtual cards per account, or an unexpected error occurred when the initial request with the same `request_id` was sent.|[Error](#schemaerror)|
|429|Too Many Requests|Concurrent requests with the same idempotency key|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve card details

<a id="opIdgetCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{card_id}`

Get the details of a specific card, based on its ID.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="retrieve-card-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card.|

> Example responses

> 200 Response

```json
{
  "id": "aa14a9af-d7a7-4214-a743-10b818f74bd0",
  "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
  "created_at": "2025-09-15T11:04:11.047305Z",
  "updated_at": "2025-09-17T08:32:11.024721Z",
  "virtual": true,
  "last_digits": "2671",
  "expiry": "09/2030",
  "label": "Kirby Janette",
  "state": "active",
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "month": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-20",
    "end_date": "2026-12-20",
    "end_date_action": "terminate"
  },
  "categories": [
    "restaurants",
    "groceries"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929"
    ]
  },
  "countries": [
    "GB",
    "SG"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-card-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the card|[CardResponseWithTerminated](#schemacardresponsewithterminated)|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Terminate a card

<a id="opIddeleteCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{card_id}`

Terminate a specific card, based on its ID.

Once the card is terminated, its state changes to `terminated`.
Terminated cards are not returned when listing cards, but you can still retrieve a terminated card by its ID using the [`GET /cards/{card_id}` endpoint](https://developer.revolut.com/docs/api/business#get-card).

A successful response does not get any content in return.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="terminate-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="terminate-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card successfully terminated|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update card settings

<a id="opIdupdateCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "New card label",
    "spending_limits": {
      "single": {
        "amount": 100,
        "currency": "GBP"
      },
      "month": {
        "amount": 300,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-09-18",
      "end_date": "2026-12-20",
      "end_date_action": "lock"
    },
    "categories": [
      "services",
      "shopping",
      "furniture"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
        "e8a87432-f71e-4deb-be84-969a02792929",
        "3f09819f-63d1-473a-966c-54d8b9f43a93"
      ]
    },
    "countries": [
      "GB",
      "SG",
      "ES"
    ],
    "accounts": [
      "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
      "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
    ]
  }'
```

`PATCH /cards/{card_id}`

Update settings for a specific card, based on its ID.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

> Body parameter

```json
{
  "label": "New card label",
  "spending_limits": {
    "single": {
      "amount": 100,
      "currency": "GBP"
    },
    "month": {
      "amount": 300,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-18",
    "end_date": "2026-12-20",
    "end_date_action": "lock"
  },
  "categories": [
    "services",
    "shopping",
    "furniture"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929",
      "3f09819f-63d1-473a-966c-54d8b9f43a93"
    ]
  },
  "countries": [
    "GB",
    "SG",
    "ES"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
    "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
  ]
}
```

<h3 id="update-card-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card.|
|body|body|object|true|none|
|» label|body|string|false|The label of the card.|
|» spending_limits|body|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|All spending limits set for the card.<br><br>You can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.<br>If you try to specify 2 periodic limits at a time, it will result in an error.<br><br>Use `null` as the value for a specific limit to erase that limit.<br>Use `null` as the value for the `spending_limits` object to erase all limits.<br><br>:::note<br>Updating a spending limit does not reset the spending counter.<br>For more information, see the guides: [Manage cards - Update a card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#update-a-card).<br>:::|
|» spending_period|body|object|false|The controls for the card's spending period.<br><br>They let you set or modify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.<br><br>If specified, you must provide at least one of these:<br>- `start_date`<br>- `end_date` together with `end_date_action`<br><br>The spending period dates must be in the future.<br><br>The dates are inclusive.<br>This means that:<br>- If you set the `start_date` to `2025-12-31`, the card will become active on that day.<br>- If you set the `end_date` to `2026-06-01`, the card will be active through that day, and will be locked/terminated starting on 2nd June 2026.<br><br>:::note []<br>If you wish to unlock a card with a spending period starting in the future and make it available for spending right away, you can do it in a few ways, depending on your use case:<br>- To remove the start date, but keep the end date settings, provide the current `spending_period` settings without the `start_date`.<br>- To remove the start date when no end date is set, provide the `spending_period.start_date` set to `null`.<br>- To remove **all** spending period settings, either provide `spending_period` set to `null`, or use the dedicated endpoint to [unlock](https://developer.revolut.com/docs/api/business#unlock-card) the card.<br><br>If you wish to erase a spending period end date, you can do this in a similar way, applying the steps to `spending_period.end_date` and `spending_period.end_date_action`.<br>:::|
|» » start_date|body|string(date)|false|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date|body|string(date)|false|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date_action|body|string|false|The action to take after the end date of the spending period.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» categories|body|[[BusinessMerchantCategory](#schemabusinessmerchantcategory)]|false|The list of merchant categories that will be available for card spending.<br>Use `null` to erase the value and reset to empty (all categories will be allowed).|
|» merchant_controls|body|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|The merchant-level controls for card spending.<br><br>They let you block or allow the card to only transact with specific merchants.|
|» mcc_controls|body|object \| null|false|The MCC controls for card spending.<br>Set to `null` to remove MCC controls.<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|» » control_type|body|[MccControlType](#schemamcccontroltype)|true|The type of control to apply.|
|» » mccs|body|[Mccs](#schemamccs)|true|The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.|
|» countries|body|[string]|false|The list of countries where the card can be used, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|» accounts|body|[string(uuid)]|false|The list of accounts to link to the card.<br>If not specified, all accounts will be linked.<br>To retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » end_date_action|lock|
|» » end_date_action|terminate|
|» categories|health|
|» categories|general|
|» categories|services|
|» categories|airlines|
|» categories|transport|
|» categories|accommodation|
|» categories|utilities|
|» categories|shopping|
|» categories|financial|
|» categories|furniture|
|» categories|hardware|
|» categories|groceries|
|» categories|fuel|
|» categories|entertainment|
|» categories|software|
|» categories|restaurants|
|» categories|advertising|
|» categories|cash|
|» categories|education|
|» categories|government|
|» » control_type|allow|

> Example responses

> 200 Response

```json
{
  "id": "aa14a9af-d7a7-4214-a743-10b818f74bd0",
  "holder_id": "173ab846-de2a-1234-5678-160bd2e660e6",
  "created_at": "2025-09-15T11:04:11.047305Z",
  "updated_at": "2025-09-17T08:32:11.024721Z",
  "virtual": true,
  "last_digits": "2671",
  "expiry": "09/2030",
  "label": "New card label",
  "state": "locked",
  "spending_limits": {
    "single": {
      "amount": 100,
      "currency": "GBP"
    },
    "week": {
      "amount": 300,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-18",
    "end_date": "2026-12-20",
    "end_date_action": "lock"
  },
  "categories": [
    "services",
    "shopping",
    "furniture"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929",
      "3f09819f-63d1-473a-966c-54d8b9f43a93"
    ]
  },
  "countries": [
    "GB",
    "SG",
    "ES"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
    "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
  ]
}
```

> 400 Response

```json
{
  "code": 1112,
  "message": "Specify at least one parameter for card update"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> 422 Response

```json
{
  "code": 33003,
  "message": "Unable to update the card with state=active"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-card-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the updated card<br><br>:::note<br>If you modify the card's spending period in the request, the card's `state` returned in the response might not yet reflect those changes.<br>This is because these spending period locks are applied to the card asynchronously, which might result in a slight delay in the card's state update.<br><br>To re-check the state, [fetch the card's details](https://developer.revolut.com/docs/api/business#get-card).<br>:::|[CardResponse](#schemacardresponse)|
|400|Bad Request|Nothing to update or the provided details are unsupported for this operation<br><br>If the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. <br>For example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.<br>In the example, `USA` is invalid, because it should be a 2-letter code.<br>In such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist<br><br>The card for which you wish to update details does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable entity<br><br>For example, you try to provide a spending period end date that's in the past.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update card contacts

<a id="opIdupdateCardContacts"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/contacts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9",
    "02b969cb-b984-4a70-873d-f93220805e5e",
    "36d9604d-4821-45fc-bf1a-a2881f6336c0"
  ]'
```

`PUT /cards/{card_id}/contacts`

Update the list of card contacts (`contact_ids`) for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

You can only update cards with existing contacts.
If a card does not have any contacts assigned, this operation is not allowed.

On success, the updated list of contacts is returned.

:::warning
This operation **overrides** the existing contacts.
This means that it removes the current list completely, and replaces it with the new one provided in this request.

If you want to add new contacts for the card instead of replacing the existing ones, make sure that you [fetch](https://developer.revolut.com/docs/api/business#get-card) the existing contacts first, and include them in your request.
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

> Body parameter

```json
[
  "3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9",
  "02b969cb-b984-4a70-873d-f93220805e5e",
  "36d9604d-4821-45fc-bf1a-a2881f6336c0"
]
```

<h3 id="update-card-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card whose contacts should be updated.|
|body|body|[CardContacts](#schemacardcontacts)|true|New contacts for the card.<br>:::warning<br>This will **override** the existing list of contacts.<br>:::|

> Example responses

> 200 Response

```json
[
  "3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9",
  "02b969cb-b984-4a70-873d-f93220805e5e",
  "36d9604d-4821-45fc-bf1a-a2881f6336c0"
]
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Card contacts size must be between 1 and 5"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> 422 Response

```json
{
  "code": 33011,
  "message": "Card contacts are not supported for the card=23a8befd-7b7b-4922-a00f-188b0153730b"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-card-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated list of contacts|[CardContacts](#schemacardcontacts)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when the provided list of contacts is empty or too many contacts are provided, or when it's malformed or contains incorrect values.|[Error](#schemaerror)|
|404|Not Found|Card not found<br><br>The card for which you wish to update contacts does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Content<br><br>Returned, for example, when you try to update contacts for a card other than a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update card references

<a id="opIdupdateCardReferences"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/references \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "name": "Budget",
      "value": "Engagement"
    },
    {
      "name": "Department",
      "value": "Business"
    }
  ]'
```

`PUT /cards/{card_id}/references`

Update the list of [references (`references`)](https://developer.revolut.com/docs/api/business#get-card#response) for a [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

References can be amended up to 10 times.
Reference names must be unique.

References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).
They can't be added to [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). 

The references recorded on a transaction are those assigned to the card at the time the transaction took place.
If the references are amended, they will only be applied to future transactions.
Existing transaction are not affected.

On success, the updated list of references is returned.

:::warning
This operation **overrides** the existing references.
This means that it removes the current list completely, and replaces it with the new one provided in this request.

If you want to add references to the card instead of replacing the existing ones, make sure that you [fetch](https://developer.revolut.com/docs/api/business#get-card) the existing references first, and include them in your request.

To delete existing references without adding new ones, simply provide an empty list.
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

> Body parameter

```json
[
  {
    "name": "Budget",
    "value": "Engagement"
  },
  {
    "name": "Department",
    "value": "Business"
  }
]
```

<h3 id="update-card-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card whose references should be amended.|
|body|body|[CardReferences](#schemacardreferences)|true|References for the card.<br>Up to 5 name-value pairs assigned to the card for tracking.<br>:::warning<br>This will **override** the existing references.<br>:::|

> Example responses

> 200 Response

```json
[
  {
    "name": "Budget",
    "value": "Engagement"
  },
  {
    "name": "Department",
    "value": "Business"
  }
]
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Reference names must be unique"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> 422 Response

```json
{
  "code": 3549,
  "message": "Card references update limit exceeded"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-card-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated list of references.             <br>Up to 5 name-value pairs assigned to the card for tracking.|[CardReferences](#schemacardreferences)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when you provide duplicate reference names, too many references, the reference names or values are too long, or your request is malformed.|[Error](#schemaerror)|
|404|Not Found|Card not found<br><br>The card for which you wish to update references does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Content<br><br>Returned, for example, when you try to amend references more than 10 times, or when you try to add them to a card that does not support references, like a card with a `holder_id` present.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Freeze a card

<a id="opIdfreezeCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/freeze \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{card_id}/freeze`

Freeze a card to make it temporarily unavailable for spending.
You can only freeze a card that is in the state `active`.

A successful freeze changes the card's state to `frozen`, and no content is returned in the response.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="freeze-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card to freeze.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 403 Response

```json
{
  "code": 9002,
  "message": "Card is locked"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="freeze-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card successfully frozen|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|403|Forbidden|State of the card doesn't allow to freeze it|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Unfreeze a card

<a id="opIdunfreezeCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/unfreeze \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{card_id}/unfreeze`

Unfreeze a card to re-enable spending for that card.
You can only unfreeze a card that is in the state `frozen`.

A successful unfreeze changes the card's state back to `active`, and no content is returned in the response.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="unfreeze-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card to unfreeze.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 403 Response

```json
{
  "code": 9002,
  "message": "Card is locked"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unfreeze-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card successfully unfrozen|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|403|Forbidden|State of the card doesn't allow to unfreeze it|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Lock a card

<a id="opIdlockCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/lock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{card_id}/lock`

Apply an admin lock to a card to make it temporarily unavailable for spending.

A successful lock changes the card's state to `locked`, and no content is returned in the response.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="lock-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card to lock.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 403 Response

```json
{
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="lock-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card successfully locked|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|403|Forbidden|Action forbidden<br><br>Returned, for example, when the request is valid, but the provided access token does not include the required scope for this action.|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Unlock a card

<a id="opIdunlockCard"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/unlock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{card_id}/unlock`

Unlock a card locked with an admin lock or spending period settings to make it available for spending again.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

:::warning
If a card has a `spending_period` set and is locked due to being outside of that period, unlocking the card removes this spending period completely, including the end date.

If you want to unlock such a card but keep its spending period end date:
1. [Fetch](https://developer.revolut.com/docs/api/business#get-card) the card's details.
2. Save the `spending_period.end_date` and `spending_period.end_date_action` settings.
3. [Unlock](https://developer.revolut.com/docs/api/business#unlock-card) the card.
4. [Update](https://developer.revolut.com/docs/api/business#update-card) the card's `spending_period` by re-adding the saved settings.

:::tip
If both start and end dates for the spending period are provided, and the card is locked due to those dates, to unlock such a card, [update](https://developer.revolut.com/docs/api/business#update-card) its `spending_period` settings instead.
:::

A successful unlock changes the card's state to `active`, and no content is returned in the response.

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="unlock-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card to unlock.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 403 Response

```json
{
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unlock-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card successfully unlocked|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|403|Forbidden|Action forbidden<br><br>Returned, for example, when the request is valid, but the provided access token does not include the required scope for this action.|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve sensitive card details

<a id="opIdgetSensitiveCardDetails"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/cards/497f6eca-6276-4993-bfeb-53cbbbba6f08/sensitive-details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{card_id}/sensitive-details`

Get sensitive details of a specific card, based on its ID.

Requires the `READ_SENSITIVE_CARD_DATA` token scope. For more information, see the **Authorization** section.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).

<h3 id="retrieve-sensitive-card-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string(uuid)|true|The ID of the card for which to retrieve the sensitive details.|

> Example responses

> 200 Response

```json
{
  "pan": "4111111111111111",
  "cvv": "123",
  "expiry": "06/2030"
}
```

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 403 Response

```json
{
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-sensitive-card-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sensitive details of the card|Inline|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card ID in the path.|[Error](#schemaerror)|
|403|Forbidden|Action forbidden|[Error](#schemaerror)|
|404|Not Found|Card doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="retrieve-sensitive-card-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pan|string|true|none|The PAN (Primary Account Number) of the card.|
|cvv|string|true|none|The CVV (Card Verification Value) of the card.|
|expiry|string(DD/MMMM)|true|none|The card expiration date.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-card-invitations">Card invitations</h1>

Use card invitations to pre-create cards for [team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members) who have not yet onboarded.
Once the team member completes onboarding, the card is automatically issued as per the configuration specified in the invitation.
You can also retrieve and update the invitations, or cancel them if they're no longer needed.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

## Retrieve a list of card invitations

<a id="opIdgetCardInvitations"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/card-invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card-invitations`

Get the list of all card invitations in your organisation.

The results are paginated and sorted by the `created_at` date in reverse chronological order.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

<h3 id="retrieve-a-list-of-card-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_before|query|string(date-time)|false|Retrieves only card invitations created before this timestamp (`created_at` < `created_before`).<br>Used for pagination.<br>The default value is the current date and time at which you are calling the endpoint.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|number(integer)|false|The maximum number of card invitations to return per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last card invitation returned in the previous response as the value for `created_before`.|
|state|query|[[CardInvitationState](#schemacardinvitationstate)]|false|Retrieves card invitations filtered by the specified state(s).<br>To specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`. <br>If not provided, all states are returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|created|
|state|expired|
|state|failed|
|state|redeemed|

> Example responses

> 200 Response

```json
[
  {
    "id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
    "state": "created",
    "created_at": "2025-11-21T00:00:00Z",
    "updated_at": "2025-11-21T00:00:00Z",
    "expiry_date": "2025-12-06T00:00:00Z",
    "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
    "virtual": true,
    "label": "Dariel Pattie",
    "spending_limits": {
      "single": {
        "amount": 50,
        "currency": "GBP"
      },
      "week": {
        "amount": 250,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "end_date": "2026-12-31",
      "end_date_action": "lock"
    },
    "categories": [
      "groceries",
      "restaurants"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "14c8d663-2093-4086-96ed-334a4011333f",
        "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "26a852b8-4046-4e71-949d-22f4cb6be26a"
    ]
  },
  {
    "id": "809d745d-9598-4680-8464-d82113e9024b",
    "state": "redeemed",
    "created_at": "2025-11-21T00:00:00Z",
    "updated_at": "2025-11-23T09:01:13Z",
    "card_id": "744b29d4-19e9-40f8-89e6-bfb264ef5710",
    "holder_id": "19c76bef-3583-4848-af09-4b2a96c75a14",
    "virtual": true,
    "label": "Manuel Haleigh - WFH",
    "spend_program": {
      "label": "WFH equipment"
    },
    "spending_period": {
      "start_date": "2025-11-23",
      "end_date": "2025-12-23",
      "end_date_action": "terminate"
    },
    "categories": [
      "furniture",
      "hardware"
    ],
    "countries": [
      "GB"
    ],
    "accounts": [
      "6b472c0e-f595-4681-88b4-76eaa0522824"
    ]
  },
  {
    "id": "0c0d252e-5fff-498e-83f8-f9b635904275",
    "state": "expired",
    "created_at": "2025-11-22T00:00:00Z",
    "updated_at": "2025-11-30T00:00:00Z",
    "holder_id": "5ea0ffa1-5dc5-43c4-ac5e-b9e0deb9ec12",
    "virtual": true,
    "label": "Valeria Keone - meals",
    "spending_limits": {
      "single": {
        "amount": 50,
        "currency": "GBP"
      },
      "week": {
        "amount": 250,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-11-29",
      "end_date": "2025-12-29",
      "end_date_action": "terminate"
    },
    "categories": [
      "groceries",
      "restaurants"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "14c8d663-2093-4086-96ed-334a4011333f",
        "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "6b472c0e-f595-4681-88b4-76eaa0522824"
    ]
  },
  {
    "id": "9ab6019a-6a26-41f8-b034-44b591f8b1a8",
    "state": "failed",
    "created_at": "2025-11-27T00:00:00Z",
    "updated_at": "2025-11-27T00:00:00Z",
    "holder_id": "af686385-4ec0-4139-a4a0-963ee9fa5bc8",
    "virtual": true,
    "label": "Connor Thato - meals",
    "spending_period": {
      "start_date": "2025-12-01",
      "end_date": "2026-01-01",
      "end_date_action": "terminate"
    },
    "categories": [
      "groceries",
      "restaurants"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "14c8d663-2093-4086-96ed-334a4011333f",
        "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "6b472c0e-f595-4681-88b4-76eaa0522824"
    ]
  },
  {
    "id": "bfc40b73-1e8b-4cba-ad7d-2f54ee707a21",
    "state": "failed",
    "created_at": "2025-11-28T00:00:00Z",
    "updated_at": "2025-12-02T11:31:15Z",
    "virtual": true,
    "label": "Natália Popović - offb",
    "spending_period": {
      "start_date": "2025-11-30",
      "end_date": "2026-11-30",
      "end_date_action": "terminate"
    },
    "categories": [
      "groceries",
      "restaurants"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "14c8d663-2093-4086-96ed-334a4011333f",
        "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "6b472c0e-f595-4681-88b4-76eaa0522824"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Parameter limit must be a valid integer in range: [1, 100]."
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "The request should be authorized."
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-card-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of card invitations for your business|Inline|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide invalid query parameters.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorised<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|[ErrorUnauthorized](#schemaerrorunauthorized)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="retrieve-a-list-of-card-invitations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CardInvitationsResponse](#schemacardinvitationsresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a card invitation

<a id="opIdcreateCardInvitation"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/card-invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request_id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
    "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
    "virtual": true
  }'
```

`POST /card-invitations`

Create an invitation for a virtual [team member card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) for a new, not-yet-onboarded team member.
When the team member completes onboarding before the invitation's expiry date, the invitation will automatically be claimed, and the card will then be issued for the team member immediately.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

> Body parameter

```json
{
  "request_id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
  "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
  "virtual": true
}
```

<h3 id="create-a-card-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Card to create an invitation for|
|» request_id|body|string|true|A unique ID of the request that you provide.<br><br>There is no strict requirement on the format of this ID, but we suggest using v4 UUIDs.<br><br>:::warning<br>This ID is used to prevent duplicate card creation requests in case of a lost connection or client error, so make sure you use the same `request_id` for requests related to the same card invitation.<br>The deduplication is limited to 24 hours counting from the first request using a given ID.<br>:::<br>For more information, see the guides: [Manage card invitations - Idempotency](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#idempotency).|
|» expiry_period|body|string|false|The period after which the card invitation expires if it hasn't been claimed or cancelled. <br>Must be specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) duration format.<br>The duration is counted from the card invitation creation.<br>- **Minimum duration:** 1 day (`P1D`)<br>- **Maximum duration:** 90 days (`P90D`)<br>- **Default duration:** 90 days (`P90D`)|
|» holder_id|body|string(uuid)|true|The ID of the team member who will be assigned as the holder of the card after the invitation is claimed.<br><br>:::tip<br>To retrieve a team member's ID, use the [`GET /team-members` operation](https://developer.revolut.com/docs/api/business#get-team-members).<br>:::|
|» virtual|body|boolean|true|Specifies the type of the card. <br>Must be set to `true`, as with the API, you can create only virtual cards.<br><br>:::tip<br>To create physical cards, use the [Revolut Business app](https://business.revolut.com).<br>:::|
|» label|body|string|false|The label for the card to be issued, displayed in the UI to help distinguish between cards.<br>If not specified, the default label will be set according to the card's type.<br>For card invitations created via API, it's always `Virtual`.|
|» spending_limits|body|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|All spending limits set for the card.<br><br>You can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.<br>If you try to specify 2 periodic limits at a time, it will result in an error.|
|» spending_period|body|object|false|The controls for the card's spending period.<br><br>They let you set the dates when the card becomes available or unavailable for spending, and define what happens after the end date.<br><br>If specified, you must provide at least one of these:<br>- `start_date`<br>- `end_date` together with `end_date_action`<br><br>The dates provided must be in the future.|
|» » start_date|body|string(date)|false|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date|body|string(date)|false|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date_action|body|string|false|The action to take after the end date of the spending period.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» categories|body|[[BusinessMerchantCategory](#schemabusinessmerchantcategory)]|false|The list of merchant categories to be available for card spending.<br>If not specified, all categories will be allowed.|
|» merchant_controls|body|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|The merchant-level controls for card spending.<br>They let you block or allow the card to only transact with specific merchants.|
|» mcc_controls|body|object|false|Restricts card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|» » control_type|body|[MccControlType](#schemamcccontroltype)|true|The type of control to apply.|
|» » mccs|body|[Mccs](#schemamccs)|true|The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.|
|» countries|body|[string]|false|Restricts card use to specified countries, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|» accounts|body|[string(uuid)]|false|The list of accounts to link to the card.<br>If not specified, all accounts will be linked.<br>To retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» virtual|true|
|» » end_date_action|lock|
|» » end_date_action|terminate|
|» categories|health|
|» categories|general|
|» categories|services|
|» categories|airlines|
|» categories|transport|
|» categories|accommodation|
|» categories|utilities|
|» categories|shopping|
|» categories|financial|
|» categories|furniture|
|» categories|hardware|
|» categories|groceries|
|» categories|fuel|
|» categories|entertainment|
|» categories|software|
|» categories|restaurants|
|» categories|advertising|
|» categories|cash|
|» categories|education|
|» categories|government|
|» » control_type|allow|

> Example responses

> 200 Response

```json
{
  "id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
  "state": "created",
  "created_at": "2025-11-21T00:00:00Z",
  "updated_at": "2025-11-21T00:00:00Z",
  "expiry_date": "2025-12-06T00:00:00Z",
  "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
  "virtual": true,
  "label": "Dariel Pattie",
  "spending_limits": {
    "single": {
      "amount": 50,
      "currency": "GBP"
    },
    "week": {
      "amount": 250,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "end_date": "2026-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "groceries",
    "restaurants"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "14c8d663-2093-4086-96ed-334a4011333f",
      "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "26a852b8-4046-4e71-949d-22f4cb6be26a"
  ]
}
```

> 400 Response

```json
{
  "code": 3000,
  "message": "merchant_ids is empty"
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "The request should be authorized."
}
```

> 404 Response

```json
{
  "code": 3042,
  "message": "Team member not found"
}
```

> 422 Response

```json
{
  "code": 33000,
  "message": "Only one periodic limit can be set on a card"
}
```

> 429 Response

```json
{
  "code": 3162,
  "message": "Parallel requests conflict. Please synchronize your requests. request_id=5baa6989-ae59-4668-bb09-042fca180518"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-card-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created card invitation|[CardInvitationCreatedResponse](#schemacardinvitationcreatedresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when your request is malformed, missing required fields, or when it contains fields that cannot co-exist or unsupported values.<br><br>If the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. <br>For example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.<br>In the example, `USA` is invalid, because it should be a 2-letter code.<br>In such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorised<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|[ErrorUnauthorized](#schemaerrorunauthorized)|
|404|Not Found|Team member not found<br><br>Returned when the team member specified as cardholder in `holder_id` does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>For example, you try to set more than one periodic limit at a time, create an invitation for a deleted team member, or an unexpected error occurred when the initial request with the same `request_id` was sent.|[ErrorUnprocessableEntity](#schemaerrorunprocessableentity)|
|429|Too Many Requests|Concurrent requests with the same idempotency key|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve card invitation details

<a id="opIdgetCardInvitation"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/card-invitations/4016b891-bb50-4bd2-8a1b-adb74f4aacdd \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card-invitations/{card_invitation_id}`

Get the details of a specific card invitation, based on its ID.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

<h3 id="retrieve-card-invitation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_invitation_id|path|string(uuid)|true|The ID of the card invitation.|

> Example responses

> 200 Response

```json
{
  "id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
  "state": "created",
  "created_at": "2025-11-21T00:00:00Z",
  "updated_at": "2025-11-21T00:00:00Z",
  "expiry_date": "2025-12-06T00:00:00Z",
  "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
  "virtual": true,
  "label": "Dariel Pattie",
  "spending_limits": {
    "single": {
      "amount": 50,
      "currency": "GBP"
    },
    "week": {
      "amount": 250,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "end_date": "2026-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "groceries",
    "restaurants"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "14c8d663-2093-4086-96ed-334a4011333f",
      "06e0f7fa-38a2-4fcf-a115-df5caf190b55"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "26a852b8-4046-4e71-949d-22f4cb6be26a"
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "The request should be authorized."
}
```

> 404 Response

```json
{
  "code": 1214,
  "message": "Card invitation not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-card-invitation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the card invitation|[CardInvitationResponse](#schemacardinvitationresponse)|
|400|Bad Request|Bad request<br><br>Returned, for example, when you provide an invalid card invitation ID in the path.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorised<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|[ErrorUnauthorized](#schemaerrorunauthorized)|
|404|Not Found|Card invitation doesn't exist|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update card invitation settings

<a id="opIdupdateCardInvitation"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/card-invitations/4016b891-bb50-4bd2-8a1b-adb74f4aacdd \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "New card label",
    "spending_limits": {
      "single": {
        "amount": 100,
        "currency": "GBP"
      },
      "month": {
        "amount": 300,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-12-20",
      "end_date": "2027-12-20",
      "end_date_action": "lock"
    },
    "categories": [
      "services",
      "shopping",
      "furniture"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
        "e8a87432-f71e-4deb-be84-969a02792929",
        "3f09819f-63d1-473a-966c-54d8b9f43a93"
      ]
    },
    "countries": [
      "GB",
      "SG",
      "ES"
    ],
    "accounts": [
      "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
      "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
    ]
  }'
```

`PATCH /card-invitations/{card_invitation_id}`

Update settings for a specific card invitation, based on its ID.
You can update successfully created invitations that have not been claimed yet (`state=created`).

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

> Body parameter

```json
{
  "label": "New card label",
  "spending_limits": {
    "single": {
      "amount": 100,
      "currency": "GBP"
    },
    "month": {
      "amount": 300,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-12-20",
    "end_date": "2027-12-20",
    "end_date_action": "lock"
  },
  "categories": [
    "services",
    "shopping",
    "furniture"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929",
      "3f09819f-63d1-473a-966c-54d8b9f43a93"
    ]
  },
  "countries": [
    "GB",
    "SG",
    "ES"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
    "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
  ]
}
```

<h3 id="update-card-invitation-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_invitation_id|path|string(uuid)|true|The ID of the card invitation.|
|body|body|object|true|none|
|» label|body|string|false|The label of the card.<br><br>Cards without labels are not allowed.<br>If set to `null`, the default label will be set according to the card's type.<br><br>:::tip[Default labels]<br>For virtual cards, the default label is `Virtual`.<br>For physical cards, depending on the type, it can be, for example, `Standard` or `Metal`. <br><br>As these values depend on available card types, they are subject to change over time.<br>:::|
|» spending_limits|body|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|All spending limits to be set for the card.<br><br>You can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.<br>If you try to specify 2 periodic limits at a time, it will result in an error.<br><br>Use `null` as the value for a specific limit to erase that limit.<br>Use `null` as the value for the `spending_limits` object to erase all limits.|
|» spending_period|body|object|false|The controls for the card's spending period.<br><br>They let you set or modify the dates when the card should become available or unavailable for spending, and define what happens after the end date.<br><br>If specified, you must provide at least one of these:<br>- `start_date`<br>- `end_date` together with `end_date_action`<br><br>The spending period dates must be in the future.<br><br>The dates are inclusive.<br>This means that:<br>- If you set the `start_date` to `2026-03-31`, the card will become active on that day.<br>- If you set the `end_date` to `2027-12-31`, the card will be active through that day, and will be locked/terminated starting on 1st Jan 2028.<br><br>:::note<br>You can update the spending period settings in a few ways, depending on your use case:<br>- To remove the start date, but keep the end date settings, provide the current `spending_period` settings without the `start_date`.<br>- To remove the start date when no end date is set, provide the `spending_period.start_date` set to `null`.<br>- To remove **all** spending period settings, provide `spending_period` set to `null`.<br><br>If you wish to erase a spending period end date, you can do this in a similar way, applying the steps to `spending_period.end_date` and `spending_period.end_date_action`.<br>:::|
|» » start_date|body|string(date)|false|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date|body|string(date)|false|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|» » end_date_action|body|string|false|The action to take after the end date of the spending period.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|object|false|none|
|» categories|body|[[BusinessMerchantCategory](#schemabusinessmerchantcategory)]|false|The list of merchant categories to be available for card spending.<br>Use `null` to erase the value and reset to empty (all categories will be allowed).|
|» merchant_controls|body|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|The merchant-level controls for card spending.<br><br>They let you block or allow the card to only transact with specific merchants.|
|» mcc_controls|body|object \| null|false|The MCC controls for card spending.<br>Set to `null` to remove MCC controls.<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|» » control_type|body|[MccControlType](#schemamcccontroltype)|true|The type of control to apply.|
|» » mccs|body|[Mccs](#schemamccs)|true|The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.|
|» countries|body|[string]|false|The list of countries where the card can be used, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|» accounts|body|[string(uuid)]|false|The list of accounts to link to the card.<br>If not specified, all accounts will be linked.<br>To retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » end_date_action|lock|
|» » end_date_action|terminate|
|» categories|health|
|» categories|general|
|» categories|services|
|» categories|airlines|
|» categories|transport|
|» categories|accommodation|
|» categories|utilities|
|» categories|shopping|
|» categories|financial|
|» categories|furniture|
|» categories|hardware|
|» categories|groceries|
|» categories|fuel|
|» categories|entertainment|
|» categories|software|
|» categories|restaurants|
|» categories|advertising|
|» categories|cash|
|» categories|education|
|» categories|government|
|» » control_type|allow|

> Example responses

> 200 Response

```json
{
  "id": "4016b891-bb50-4bd2-8a1b-adb74f4aacdd",
  "state": "created",
  "created_at": "2025-11-21T00:00:00Z",
  "updated_at": "2025-11-21T10:27:15Z",
  "expiry_date": "2025-12-06T00:00:00Z",
  "holder_id": "3791712d-e5b5-4d5f-b1f1-79a93d57e08b",
  "virtual": true,
  "label": "New card label",
  "spending_limits": {
    "single": {
      "amount": 100,
      "currency": "GBP"
    },
    "week": {
      "amount": 300,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-12-20",
    "end_date": "2027-12-20",
    "end_date_action": "lock"
  },
  "categories": [
    "services",
    "shopping",
    "furniture"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "46df0a1b-3678-4ded-9cf5-9f4da1b5019d",
      "e8a87432-f71e-4deb-be84-969a02792929",
      "3f09819f-63d1-473a-966c-54d8b9f43a93"
    ]
  },
  "countries": [
    "GB",
    "SG",
    "ES"
  ],
  "accounts": [
    "f52c6c84-26b9-4e95-bbcf-99ed6523fb51",
    "9ae4345a-5ee5-496b-b776-241fcc5a5ba4"
  ]
}
```

> 400 Response

```json
{
  "code": 1112,
  "message": "Specify at least one parameter for card update"
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "The request should be authorized."
}
```

> 404 Response

```json
{
  "code": 3088,
  "message": "Card invitation '3c059a42-24e1-4fd6-bfbe-f3c09234315f not found"
}
```

> 422 Response

```json
{
  "message": "Unable to update card invitation with state=redeemed"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-card-invitation-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the updated card invitation|[CardInvitationUpdatedResponse](#schemacardinvitationupdatedresponse)|
|400|Bad Request|Bad request<br><br>Returned, for example, when there's nothing to update or the provided details are unsupported for this operation.<br><br>If the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. <br>For example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.<br>In the example, `USA` is invalid, because it should be a 2-letter code.<br>In such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorised<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|[ErrorUnauthorized](#schemaerrorunauthorized)|
|404|Not Found|Card invitation doesn't exist<br><br>The card invitation for which you wish to update details does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>Returned, for example, when you try to update a card invitation that's not in state `created`.<br>Such an invitation is no longer active and therefore cannot be modified.|[ErrorUnprocessableEntity](#schemaerrorunprocessableentity)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Cancel a card invitation

<a id="opIdcancelCardInvitation"></a>

> Code samples

```bash
curl 'https://b2b.revolut.com/api/1.0/card-invitations/{cardInvitationId}/cancel' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /card-invitations/{cardInvitationId}/cancel`

Cancel a specific card invitation, based on its ID.

:::note
To increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

You can cancel successfully created invitations that have not been claimed yet (`state=created`).

Once the card invitation is cancelled, it cannot be claimed or reactivated.

A successful response does not get any content in return.

For more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).

<h3 id="cancel-a-card-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_invitation_id|path|string(uuid)|true|The ID of the card invitation to cancel.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid path parameter 'id': expected UUID",
  "code": 2101
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "The request should be authorized."
}
```

> 404 Response

```json
{
  "code": 3088,
  "message": "Card invitation '10a2069f-fc11-4d5f-82b4-29c4ecc3a62e' not found"
}
```

> 422 Response

```json
{
  "message": "Unable to cancel card invitation with state=redeemed"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="cancel-a-card-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Card invitation successfully cancelled|None|
|400|Bad Request|Bad request<br><br>Returned, for example, when the format of the invitation ID you provided is invalid.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorised<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|[ErrorUnauthorized](#schemaerrorunauthorized)|
|404|Not Found|Card invitation doesn't exist<br><br>The card invitation you wish to cancel does not exist.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable entity<br><br>Returned, for example, when you try to cancel a card invitation that's not in state `created`.<br>Such an invitation is no longer active and therefore cannot be cancelled.|[ErrorUnprocessableEntity](#schemaerrorunprocessableentity)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-counterparties">Counterparties</h1>

Manage counterparties that you intend to transact with.

Request and response examples can vary based on the account provider's location and type of the counterparty. 
For more information, see the guides: [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty), [Retrieve counterparties](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/retrieve-counterparties), and [Update a counterparty's payment method](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/update-counterparty-payment-method).

:::note
In the Sandbox environment, you cannot add real people and businesses as Revolut counterparties. 
Therefore, to help you simulate [Create a counterparty](https://developer.revolut.com/docs/api/business#add-counterparty) requests, we have created some test accounts for counterparties of profile type `personal`.

To add a counterparty via Revtag, use one of these pairs for the `name` and `revtag` fields respectively: 
- `Test User 1` & `john1pvki`
- `Test User 2` & `john2pvki`
-    ...
- `Test User 9` & `john9pvki`
:::

## Validate an account name (CoP/VoP)

<a id="opIdvalidateAccountName"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/account-name-validation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sort_code": "54-01-05",
    "account_no": "12345678",
    "individual_name": {
      "first_name": "John",
      "last_name": "Smith"
    }
  }'
```

`POST /account-name-validation`

Validate a counterparty's account name against their account details when [adding a counterparty](https://developer.revolut.com/docs/api/business#add-counterparty) or [making a transfer](https://developer.revolut.com/docs/api/business#create-payment) to a new or existing counterparty.

:::warning
The CoP check is **not** a complete fraud-prevention tool, and it does **not** guarantee the person is who they claim to be.
It only confirms that the name and account details your provide match the bank's records.

Even if the counterparty's details match, you should still exercise due caution when transferring funds.
:::

:::note[Availability & Sandbox behaviour]
- This feature is only available to businesses in the [supported regions](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services).
  Additionally, to get access to CoP in the UK, eligible businesses must contact [Revolut API Support](mailto:api-requests@revolut.com).
- In Sandbox, this feature is only available for **testing**.
  While **incomplete or invalid requests** will return production-like error responses, **complete and valid requests** in Sandbox do **not** undergo real validation and will always return `cannot_be_checked`.
:::

The validation relies on different underlying services, depending on the recipient's payment scheme (region and currency).
These factors determine which fields you must provide and what response you get.
- For examples, refer to the request body samples.
- For more information, see the guides: [Validate an account name (CoP/VoP)](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee).

> Body parameter

```json
{
  "sort_code": "54-01-05",
  "account_no": "12345678",
  "individual_name": {
    "first_name": "John",
    "last_name": "Smith"
  }
}
```

<h3 id="validate-an-account-name-copvop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateAccountNameRequest](#schemavalidateaccountnamerequest)|true|Counterparty account details|

> Example responses

> 200 Response

```json
{
  "result_code": "matched",
  "individual_name": {
    "first_name": "John",
    "last_name": "Smith"
  }
}
```

> 400 Response

```json
{
  "message": "Invalid sort code: 54-01-050",
  "code": 3000
}
```

> 401 Response

```json
{
  "message": "The request should be authorized.",
  "status": 401
}
```

> 404 Response

```json
{
  "message": "Resource not found",
  "code": 3006
}
```

> 429 Response

```json
{
  "message": "Rate limit exceeded",
  "code": 3162
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="validate-an-account-name-copvop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account name validation result<br><br>:::note<br>- The actual results returned in the response come from the CoP services, not from Revolut.<br>  The Business API passes them on as received.<br><br>  Because of this, the descriptions below should be treated as an approximation rather than complete documentation.<br>- The responses differ depending on the CoP service, even when the schema appears the same.<br>  Make sure that you refer to the appropriate response variant.<br>:::|[ValidateAccountNameResponse](#schemavalidateaccountnameresponse)|
|400|Bad Request|Bad request<br><br>Returned, for example, when the data you provided is invalid or required data is missing.<br>|Inline|
|401|Unauthorized|Unauthorized<br><br>Returned, for example, when the credentials you used to make the request are invalid.<br>For more information, see the **Authorization** section.|Inline|
|404|Not Found|Not found<br><br>Returned, for example, when your account does not have access to CoP.|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests<br><br>Returned when you've exceeded the rate limit for CoP checks.<br>In Romania, for example, making more than 3 CoP queries without initiating a payment within a 24-hour period will temporarily restrict access to the service for 24 hours.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="validate-an-account-name-copvop-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The description of the error.|
|status|string|false|none|The HTTP error code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of counterparties

<a id="opIdgetCounterparties"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /counterparties`

Get all the counterparties that you have created, or use the query parameters to filter the results. 

The counterparties are sorted by the `created_at` date in reverse chronological order.

The returned counterparties are **paginated**. 
The maximum number of counterparties returned per page is specified by the `limit` parameter.
To get to the next page, make a new request and use the `created_at` date of the last counterparty returned in the previous response.

For more information, see the guides: [Retrieve counterparties](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/retrieve-counterparties).

<h3 id="retrieve-a-list-of-counterparties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the counterparty to retrieve. It does not need to be an exact match, partial match is also supported. <br><br>:::note<br>Special characters must be properly URL-encoded.<br>:::|
|account_no|query|string|false|The exact account number of the counterparty to retrieve.|
|sort_code|query|string|false|The exact sort code of the counterparty to retrieve. <br>Only allowed in combination with the `account_no` parameter.|
|iban|query|string|false|The exact IBAN of the counterparty to retrieve.|
|bic|query|string|false|The exact BIC of the counterparty to retrieve. <br>Only allowed in combination with the `iban` parameter.|
|created_before|query|string(date-time)|false|Retrieves counterparties with `created_at` < `created_before`.<br>The default value is the current date and time at which you are calling the endpoint. <br><br>Provide it in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|integer|false|The maximum number of counterparties returned per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last counterparty returned in the previous response as the value for `created_before`.|

> Example responses

> 200 Response

```json
[
  {
    "id": "239d6f1f-2222-4ae6-1111-5cc603341b4e",
    "name": "Jane Doe Co.",
    "profile_type": "business",
    "state": "created",
    "created_at": "2022-09-14T14:47:12.273718Z",
    "updated_at": "2022-09-14T14:47:12.273718Z",
    "accounts": [
      {
        "iban": "GB66REVO00996995908786",
        "bic": "REVOGB21",
        "id": "b209281b-aakk-9911-8d83-ac72469cef8f",
        "name": "Jane Doe Co.",
        "bank_country": "GB",
        "currency": "EUR",
        "type": "external",
        "address": {
          "street_line1": "Revolut LTD",
          "street_line2": "1 Canada Square",
          "region": "Greater London",
          "city": "London",
          "country": "GB",
          "postcode": "E14 5AB"
        }
      }
    ]
  },
  {
    "id": "8e0e9886-0af1-4b0c-acf4-111180d2892b",
    "name": "John Smith",
    "revtag": "johnsmith",
    "profile_type": "personal",
    "country": "GB",
    "state": "created",
    "created_at": "2022-09-14T14:41:39.312017Z",
    "updated_at": "2022-09-14T14:41:39.312017Z"
  },
  {
    "id": "11cae5ef-ec24-401d-98a3-e5baa0041671",
    "name": "John Smith Co.",
    "revtag": "jsmithco1",
    "profile_type": "business",
    "country": "GB",
    "state": "created",
    "created_at": "2025-09-16T09:34:41.790401Z",
    "updated_at": "2025-09-16T09:34:41.790401Z",
    "accounts": [
      {
        "id": "ad3c3b03-611e-461e-99b2-572f4785e44b",
        "name": "Main GBP",
        "currency": "GBP",
        "type": "revolut"
      },
      {
        "id": "67fe3eaa-c994-40c0-b3e0-7b6bfe0cedca",
        "name": "Main EUR",
        "currency": "EUR",
        "type": "revolut"
      }
    ]
  },
  {
    "id": "e7e36cce-2e9c-4e96-818e-1c2fed325852",
    "name": "John Doe Co.",
    "profile_type": "business",
    "state": "created",
    "created_at": "2022-08-14T14:34:11.168340Z",
    "updated_at": "2022-08-14T14:34:11.168340Z",
    "accounts": [
      {
        "account_no": "12345674",
        "sort_code": "540107",
        "id": "e277b2bd-3a6d-423b-933d-3d425094bb13",
        "name": "John Doe Co.",
        "bank_country": "GB",
        "currency": "GBP",
        "type": "external",
        "address": {
          "street_line1": "7 King's Road",
          "region": "Greater London",
          "city": "London",
          "country": "GB",
          "postcode": "SW3 4PQ"
        }
      }
    ]
  },
  {
    "id": "239d6f1f-2222-4ae6-1111-5cc603341b4e",
    "name": "Bleu Blanc Conseil SARL",
    "profile_type": "business",
    "state": "created",
    "created_at": "2022-09-14T14:47:12.273718Z",
    "updated_at": "2022-09-14T14:47:12.273718Z",
    "accounts": [
      {
        "iban": "FR1420041010050500013M02606",
        "bic": "PSSTFRPPLIL",
        "id": "b209281b-aakk-9911-8d83-ac72469cef8f",
        "name": "Bleu Blanc Conseil SARL",
        "bank_country": "FR",
        "currency": "EUR",
        "type": "external",
        "address": {
          "street_line1": "12 Rue de la Paix",
          "city": "Paris",
          "country": "FR",
          "postcode": "75002"
        }
      }
    ]
  },
  {
    "id": "b8ce3922-d518-4ae6-9426-e8cc117e5332",
    "name": "Johann Meier Co.",
    "profile_type": "business",
    "state": "created",
    "created_at": "2023-08-10T12:43:20.273500Z",
    "updated_at": "2026-01-30T12:43:20.273500Z",
    "accounts": [
      {
        "iban": "CH9300762011623852957",
        "bic": "UBSWCHZH80A",
        "id": "d95bc455-f495-4f18-95fa-32f99479318c",
        "name": "Johann Meier Co.",
        "bank_country": "CH",
        "currency": "EUR",
        "type": "external",
        "address": {
          "street_line1": "Bahnhofstrasse 10",
          "city": "Zurich",
          "country": "CH",
          "postcode": "8001"
        }
      }
    ]
  },
  {
    "id": "173e6a6b-d955-465f-8f31-7f6f7c03927c",
    "name": "Edelweiss Handel GmbH",
    "profile_type": "business",
    "state": "created",
    "created_at": "2023-08-10T12:43:20.273500Z",
    "updated_at": "2026-01-32T10:54:03.350240Z",
    "accounts": [
      {
        "iban": "CH5604835012345678009",
        "bic": "UBSWCHZH80A",
        "id": "b3cc43e8-f141-459b-9bd5-3505cf9797f8",
        "name": "Edelweiss Handel GmbH",
        "bank_country": "CH",
        "currency": "CHF",
        "type": "external",
        "address": {
          "street_line1": "Marktgasse 22",
          "city": "Bern",
          "country": "CH",
          "postcode": "3011"
        }
      }
    ]
  },
  {
    "id": "1d9013c8-84bf-474c-b3d9-690f2ae2e65c",
    "name": "Jane Doe",
    "state": "created",
    "created_at": "2024-01-10T15:32:10.172300Z",
    "updated_at": "2024-01-10T15:32:10.172300Z",
    "cards": [
      {
        "id": "0130f363-eeaf-4aa8-b77f-a6a629c603f5",
        "name": "Jane Doe",
        "last_digits": 1234,
        "scheme": "visa",
        "country": "GB",
        "currency": "GBP"
      },
      {
        "id": "fa05f2e5-d253-4661-85cc-bcff98b136ac",
        "name": "Jane Doe",
        "last_digits": 5678,
        "scheme": "mastercard",
        "country": "GB",
        "currency": "GBP"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "message": "limit must be between 1 and 1000",
  "code": 2101
}
```

> 401 Response

```json
{
  "message": "The request should be authorized."
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-counterparties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of your counterparties|[Counterparties](#schemacounterparties)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Anauthorized|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a counterparty

<a id="opIdaddCounterparty"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "profile_type": "personal",
    "name": "John Smith",
    "revtag": "johnsmith"
  }'
```

`POST /counterparty`

Create a new counterparty to transact with.

### Revtags in Sandbox

In the Sandbox environment, you cannot add real people and businesses as Revolut counterparties.
To help you simulate adding counterparties using Revtag, we created some test accounts of profile type `personal` that you can use.

<details id='test-accounts-for-sandbox'>
  <summary> 
  <b>Test accounts for Sandbox</b>
  </summary>

  To add a counterparty via Revtag, use one of these pairs for the `name` and `revtag` fields respectively:
  - `Test User 1` & `john1pvki`
  - `Test User 2` & `john2pvki`
  -    ...
  - `Test User 9` & `john9pvki`

</details>

### Address field recommendations

Some payment rails may have stricter requirements regarding the `address` field – for example, by also requiring the `region` field.  
This is why we recommend that you use **all** available address fields (including `street_line1`, `region` and `city`) when creating a counterparty.

This significantly reduces the risk of any disruption to payments made via the API.

### Multiple counterparties with the same details

You cannot create multiple counterparties with the same Revtag.
This restriction does not apply to other details. 
For example:
- **Revtag**: If you've already added `johnsmith` as a Revolut counterparty, you can't add another counterparty with the `johnsmith` Revtag.
  If you try to do so, you'll get an error.
- **Other details**: If you've added John Smith as an individual UK counterparty using GBP with `sort_code=54-01-05` and `account_no=12345678`, you can still use the same details to create another counterparty.

### Counterparty name

When creating a counterparty, ensure that you use the correct field to define the counterparty's name.

<table>
  <thead>
    <tr>
      <th rowSpan="2"> Counterparty type</th>
      <th colSpan="2">Name field to use when added with:</th>
    </tr>
    <tr>
      <th>Revtag</th>
      <th>Other details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Individual</th>
      <td><code>name</code> (string)</td>
      <td><code>individual_name</code> (<b>object</b> with string subfields for first and last name)</td>
    </tr>
    <tr>
      <th>Company</th>
      <td><code>name</code> (string)</td>
      <td><code>company_name</code> (string)</td>
    </tr>
  </tbody>
</table>

---

For more information, see the guides: [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty).

> Body parameter

```json
{
  "profile_type": "personal",
  "name": "John Smith",
  "revtag": "johnsmith"
}
```

<h3 id="create-a-counterparty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCounterpartyRequest](#schemacreatecounterpartyrequest)|true|Counterparty to add|
|» profile_type|body|string|false|The type of the Revolut profile.<br>Indicates whether the counterparty is a personal or business account.<br>Provide it when adding a Revolut counterparty via Revtag.|
|» revtag|body|string|false|The [Revtag](https://help.revolut.com/help/transfers/internal-transfers/username-payments/revtags/) of the counterparty to add.|
|» name|body|string|false|The name of the counterparty, provided when the counterparty is being added via **Revtag**.<br><br>If specified, `individual_name` and `company_name` must be empty.<br><br>:::note<br>The name that you provide must match or closely match the actual name associated with the account that you're trying to add.<br>Otherwise, the creation fails and a `404` error is returned.<br>:::<br>|
|» company_name|body|string|false|The name of the counterparty, provided when the counterparty is a **company** (business account type) and is **not** being added via Revtag.<br><br>If specified, `individual_name` and `name` must be empty.<br><br>:::warning<br>The `company_name` must contain at least 2 letters (not just characters).<br>For example, names like `12` will fail validation because they are two characters but not two letters.<br>:::|
|» individual_name|body|[IndividualName](#schemaindividualname)|false|The name of the counterparty, provided when the counterparty is an **individual** (personal account type) and is **not** being added via Revtag.<br><br>If specified, `company_name` and `name` must be empty.|
|» bank_country|body|[BankCountryCode](#schemabankcountrycode)|false|The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|» currency|body|[Currency](#schemacurrency)|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» account_no|body|string|false|The bank account number of the counterparty.|
|» iban|body|string|false|The IBAN number of the counterparty's account. This field is displayed for IBAN countries.|
|» sort_code|body|string|false|The sort code of the counterparty's account. This field is required for GBP accounts.|
|» routing_number|body|string|false|The routing number of the counterparty's account. This field is required for USD accounts.|
|» bic|body|string|false|The BIC number of the counterparty's account. This field is required for non-SEPA IBAN/SWIFT.|
|» clabe|body|string|false|The CLABE number of the counterparty's account. This field is required for SWIFT MX.|
|» ifsc|body|string|false|The IFSC number of the counterparty's account. This field is required for INR accounts.|
|» bsb_code|body|string|false|The BSB number of the counterparty's account. This field is required for AUD accounts.|
|» address|body|[BeneficiaryAddress](#schemabeneficiaryaddress)|false|The address of the counterparty.|
|» route|body|string|false|Routing method for US USD transfers. When omitted, defaults to `ach` for US-registered businesses and `fedwire` for non-US businesses. <br><br>Required when `bank_country` is `US` and the desired routing method differs from the default.|
|» bank_number|body|string|false|Brazilian bank identification code (COMPE). Required for BR counterparties.|
|» branch_code|body|string|false|Brazilian branch (agência) code. Required for BR counterparties.|
|» account_type|body|string|false|Bank account type. Defaults to `checking` for US ACH transfers when omitted. <br><br>Required for BR, CO, and CL counterparties.|
|» tax_id|body|string|false|Tax identification number.<br><br>Required and routed based on `bank_country` and recipient type:<br><br>\| Country   \| Recipient type                   \| Tax ID type                                   \| Format                                              \| Example                                  \|<br>\|-----------\|----------------------------------\|-----------------------------------------------\|-----------------------------------------------------\|------------------------------------------\|<br>\| **BR**    \| **Individual**                   \| CPF (Cadastro de Pessoas Físicas)             \| `^\d{11}$` or `^\d{3}\.\d{3}\.\d{3}-\d{2}$`         \| `52998224725` or `529.982.247-25`        \|<br>\| **BR**    \| **Company**                      \| CNPJ (Cadastro Nacional da Pessoa Jurídica)   \| `^\d{14}$` or `^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$`   \| `12345678000195` or `12.345.678/0001-95` \|<br>\| **CO**    \| **Company**                      \| NIT (Número de Identificación Tributaria)     \| `^\d{10}$`                                          \| `9012345678`                             \|<br>\| **CL**    \| **Individual**, **Company**      \| RUT (Rol Único Tributario)                    \| `^\d{7,8}[0-9Kk]$`                                  \| `12345678K`                              \||
|» national_id|body|string|false|National identification number. Required  when `bank_country` is `CO` and `profile_type` is `personal`, must specify Colombian Cédula de Ciudadanía.|
|» phone|body|string|false|The phone number of the counterparty in [E.164](https://en.wikipedia.org/wiki/E.164) format.<br><br>- For internal (Revolut) counterparties: the recipient's Revolut phone number used to look them up.<br>- For external counterparties in CO, KR, and LK: the bank account phone number. Required when `bank_country` is `CO`, `KR`, or `LK`.<br><br>Country-specific formats:<br><br>\| Country \| Format description          \| Format          \| Example         \|<br>\|---------\|-----------------------------\|-----------------\|-----------------\|<br>\| **CO**  \| `+57` followed by 10 digits \| `^\+?57\d{10}$` \| `+573001234567` \|<br>\| **KR**  \| `+82` followed by 10 digits \| `^\+?82\d{10}$` \| `+821012345678` \|<br>\| **LK**  \| `+94` followed by 10 digits \| `^\+?94\d{10}$` \| `+941234567890` \||
|» business_registration_id|body|string|false|Company registration number. Required for business LK counterparties (`profile_type`: `business`).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» profile_type|personal|
|» profile_type|business|
|» route|ach|
|» route|fedwire|
|» route|swift|
|» account_type|checking|
|» account_type|savings|

> Example responses

> 200 Response

```json
{
  "id": "54ee57d7-1234-abcd-1234-0e1f79164d5e",
  "name": "John Smith",
  "revtag": "johnsmith",
  "profile_type": "personal",
  "country": "GB",
  "state": "created",
  "created_at": "2023-07-26T09:34:41.790401Z",
  "updated_at": "2023-07-26T09:34:41.790401Z"
}
```

> 400 Response

```json
{
  "code": 3000,
  "message": "FR66995908786 is not a valid IBAN"
}
```

> 404 Response

```json
{
  "code": 3006,
  "message": "Resource not found"
}
```

> 422 Response

```json
{
  "message": "This counterparty already exists",
  "code": 3012,
  "params": {
    "counterparty_id": "878029d4-5972-4424-ae8c-80fe5f59407b"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-counterparty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Added counterparty|[Counterparty](#schemacounterparty)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when the provided IBAN is invalid.|[Error](#schemaerror)|
|404|Not Found|Not Found<br><br>Returned, for example, when the counterparty that you're trying to add doesn't exist, or when the name that you provide for the Revtag counterparty doesn't match the actual name on the account.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Content<br><br>Returned, for example, when the Revolut counterparty that you're trying to add using Revtag already exists, or when the counterparty cannot be added.|[CounterpartyError](#schemacounterpartyerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Check supported countries and currencies

<a id="opIdgetCounterpartyCountries"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparties/countries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /counterparties/countries`

Retrieve all supported bank countries and their available currencies for counterparty creation.

:::note [Note]
This feature is not available in Sandbox.
:::

Use this endpoint to discover which country and currency combinations are supported before checking field requirements with the [Check counterparty field requirements endpoint](https://developer.revolut.com/docs/api/business#get-counterparty-requirements).

For more details, see the guide: **Check supported counterparty countries and currencies** section in [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty#check-supported-counterparty-countries-and-currencies).

> Example responses

> 200 Response

```json
{
  "countries": [
    {
      "country": "GB",
      "currencies": [
        "GBP"
      ]
    },
    {
      "country": "US",
      "currencies": [
        "USD"
      ]
    },
    {
      "country": "DE",
      "currencies": [
        "EUR"
      ]
    }
  ]
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="check-supported-countries-and-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of supported bank countries and their available currencies|[CounterpartyCountriesResponse](#schemacounterpartycountriesresponse)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Check counterparty field requirements

<a id="opIdgetCounterpartyRequirements"></a>

> Code samples

```bash
curl 'https://b2b.revolut.com/api/1.0/counterparties/fields?country=GB&currency=string&recipient_type=personal' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /counterparties/fields`

Retrieve the list of conditionally required or applicable fields for creating a counterparty together with their constraints.

:::note [Note]
This feature is not available in Sandbox.
:::

When creating a counterparty via the [Create a counterparty endpoint](https://developer.revolut.com/docs/api/business#add-counterparty), certain fields (such as `first_name`, `last_name`, `company_name`, `tax_id`, `route`, or `account_type`) become required depending on the counterparty's bank country, currency, and profile type.
This read-only endpoint allows you to discover these contextual fields dynamically, along with their validation rules and available options.

Only the fields relevant to the specific context are returned.
The input parameters (`country`, `currency`, and `recipient_type`) are intentionally excluded from the response.

For more details, see the guide: **Check counterparty field requirements** section in [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty#check-counterparty-field-requirements).

<h3 id="check-counterparty-field-requirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|[BankCountryCode](#schemabankcountrycode)|true|The country where the counterparty's bank account is located.|
|currency|query|[Currency](#schemacurrency)|true|The currency of the counterparty's bank account.|
|recipient_type|query|string|true|The type of the counterparty profile.<br>Indicates whether the counterparty is a personal or business account.|
|route|query|string|false|The routing method for the corridor. <br>When omitted, the response includes fields for the default route.<br>For example, for USD to US, the default is `ach`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|recipient_type|personal|
|recipient_type|business|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "name": "first_name",
      "required": true,
      "regex": {
        "pattern": "^[-'\\p{L} ]{1,40}$",
        "description": "Letters, hyphens and apostrophes only, up to 40 characters"
      }
    },
    {
      "name": "last_name",
      "required": true,
      "regex": {
        "pattern": "^[-'\\p{L} ]{1,40}$",
        "description": "Letters, hyphens and apostrophes only, up to 40 characters"
      }
    },
    {
      "name": "sort_code",
      "required": true,
      "regex": {
        "pattern": "^\\d{6}$",
        "description": "6-digit number"
      }
    },
    {
      "name": "account_no",
      "required": true,
      "regex": {
        "pattern": "^\\d{8}$",
        "description": "8-digit number"
      }
    },
    {
      "name": "address",
      "required": true
    }
  ]
}
```

> 400 Response

```json
{
  "error_id": "40626b34-365b-43d0-b148-04dcbaeaf4df",
  "code": 2101,
  "message": "Invalid request (missing or invalid query parameters)"
}
```

> 404 Response

```json
{
  "error_id": "a29241ce-1f37-4ffb-8249-d09faec81aed",
  "code": 3006,
  "message": "Resource not found"
}
```

> 422 Response

```json
{
  "error_id": "2cd5330c-c4a9-45ce-88d3-8cbdaeba887c",
  "code": 4030,
  "message": "Currency for country is not supported"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="check-counterparty-field-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The applicable and conditionally required fields for creating the counterparty|[CounterpartyRequirementsResponse](#schemacounterpartyrequirementsresponse)|
|400|Bad Request|Bad request<br><br>For example:<br>- missing or invalid query parameters<br>- unsupported recipient type for country/currency combination|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity<br><br>For example:<br>- currency not supported for the given country|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a counterparty

<a id="opIdgetCounterparty"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparty/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /counterparty/{counterparty_id}`

Get the information about a specific counterparty by ID.

<h3 id="retrieve-a-counterparty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|counterparty_id|path|string(uuid)|true|The ID of the counterparty to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "8e0e9886-0af1-4b0c-acf4-111180d2892b",
  "name": "John Smith",
  "revtag": "johnsmith",
  "profile_type": "personal",
  "country": "GB",
  "state": "created",
  "created_at": "2022-09-14T14:41:39.312017Z",
  "updated_at": "2022-09-14T14:41:39.312017Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-counterparty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about a specific counterparty|[Counterparty](#schemacounterparty)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a counterparty

<a id="opIddeleteCounterparty"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparty/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /counterparty/{counterparty_id}`

Delete a counterparty with the given ID. When a counterparty is deleted, you cannot make any payments to the counterparty.

<h3 id="delete-a-counterparty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|counterparty_id|path|string(uuid)|true|The ID of the counterparty to delete.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-counterparty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The counterparty deleted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a counterparty's payment method

<a id="opIdupdateCounterpartyPaymentMethod"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/counterparties/497f6eca-6276-4993-bfeb-53cbbbba6f08/payment-methods/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "country": "GB",
      "street_line1": "7 Revolut Street",
      "street_line2": "Floor 3",
      "city": "London",
      "postcode": "EC2V 8PH"
    }
  }'
```

`PATCH /counterparties/{counterparty_id}/payment-methods/{payment_method_id}`

Update the **address** of a counterparty's payment method.

:::tip [What is a payment method?]
A payment method is an individual account or card linked to a counterparty. When you [retrieve a counterparty](https://developer.revolut.com/docs/api/business#get-counterparty), the response includes an `accounts` array and a `cards` array — each entry in these arrays is a payment method with its own `id`.
:::

As only bank account payment methods have an address, you can use this endpoint to update the address of a counterparty's bank account.

To get the `payment_method_id` for the bank account, [retrieve the counterparty](https://developer.revolut.com/docs/api/business#get-counterparty) and use the `id` from the `accounts` array in the response.

You must provide the full address object — all required address fields must be present in the request.
Omitted optional fields will retain their existing values.

For more information, see the guide: [Update a counterparty's payment method](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/update-counterparty-payment-method).

> Body parameter

```json
{
  "address": {
    "country": "GB",
    "street_line1": "7 Revolut Street",
    "street_line2": "Floor 3",
    "city": "London",
    "postcode": "EC2V 8PH"
  }
}
```

<h3 id="update-a-counterpartys-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|counterparty_id|path|string(uuid)|true|The ID of the counterparty.|
|payment_method_id|path|string(uuid)|true|The ID of the payment method to update. To get the `payment_method_id` for the bank account, [retrieve the counterparty](https://developer.revolut.com/docs/api/business#get-counterparty) and use the `id` from the `accounts` array in the response.|
|body|body|[UpdateCounterpartyPaymentMethodRequest](#schemaupdatecounterpartypaymentmethodrequest)|true|The updated address details.|
|» address|body|[UpdateCounterpartyPaymentMethodAddress](#schemaupdatecounterpartypaymentmethodaddress)|true|The updated address for the counterparty's payment method. All required fields must be provided.|

> Example responses

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-counterpartys-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The address was updated|None|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-expenses">Expenses</h1>

Get the list of all the expenses, or use the filters to narrow down the results.
You can also get a specific expense, or get a receipt related to an expense by providing their respective IDs.

:::note
This feature is not available in Sandbox.
:::

For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).

## Retrieve a list of expenses

<a id="opIdgetExpenses"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/expenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /expenses`

Get all your expenses, or use the query parameters to filter the results.

The expenses are sorted by the `expense_date` value in reverse chronological order, and they're **paginated**.
The maximum number of expenses returned per page is specified by the `count` parameter.
To get the next page of results, make a new request and use the `expense_date` value from the last item of the previous page as the value for the `to` parameter.

The data enriched by the user, for example, VAT and cost centre, is returned under `splits[].tax_rate` and `splits[].labels`, respectively.

:::note
- The API returns a maximum of 500 expenses per request.
- This feature is not available in Sandbox.
:::

For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).

<h3 id="retrieve-a-list-of-expenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string(date-time)|false|The date and time to retrieve the expenses from, including this date-time.<br>Corresponds to the value of `expense_date`.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>Used also for pagination.<br>To get back to the previous page of results, make a new request and use the `expense_date` value from the first item of the current page as the value for the `from` parameter.|
|to|query|string(date-time)|false|The date and time to retrieve the expenses to, excluding this date-time.<br>Corresponds to the value of `expense_date`.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>The default value is the date and time at which you're calling the endpoint.<br><br>Used also for pagination.<br>To get back to the next page of results, make a new request and use the `expense_date` value from the last item of the previous (current) page as the value for the `to` parameter.|
|count|query|integer|false|The maximum number of the expenses to retrieve per page.<br>To get the next page of results, make a new request and use the `expense_date` value from the last item of the previous page as the value for the `to` parameter.|
|state|query|string|false|Retrieves the expenses in the specified state.|
|transaction_type|query|string|false|The type of the transaction related to the expense.<br>If provided, only expenses with transactions of this type are returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|missing_info|
|state|awaiting_review|
|state|reverted|
|state|pending_reimbursement|
|state|refund_requested|
|state|refunded|
|state|approved|
|state|rejected|
|transaction_type|atm|
|transaction_type|card_payment|
|transaction_type|fee|
|transaction_type|transfer|
|transaction_type|external|
|transaction_type|mileage_reimbursement|
|transaction_type|rev_payment|

> Example responses

> 200 Response

```json
[
  {
    "id": "8decf9f8-053e-46cb-92d8-a7b450fe5ae0",
    "state": "approved",
    "transaction_type": "card_payment",
    "description": "Printer paper",
    "submitted_at": "2024-09-13T20:48:40.912Z",
    "completed_at": "2024-09-13T20:48:40.948Z",
    "payer": "Ray Trenfield",
    "merchant": "Best Printers Company",
    "transaction_id": "163e0ef6-2414-4fcf-846f-1f871059d506",
    "expense_date": "2024-09-13T18:47:01.782Z",
    "splits": [
      {
        "amount": {
          "amount": 15.39,
          "currency": "GBP"
        },
        "category": {
          "id": "71b9ec74-d5ff-4aa1-a489-f8dc39d4c9b7",
          "name": "Printing & Stationery",
          "code": "461"
        },
        "labels": {
          "Office supplies": [
            "photocopying"
          ],
          "Department": [
            "HR"
          ]
        },
        "tax_rate": {
          "id": "5704fdd2-bac2-42ec-bab0-e075182260be",
          "name": "VAT",
          "percentage": 20
        }
      },
      {
        "amount": {
          "amount": 8.99,
          "currency": "GBP"
        },
        "category": {
          "id": "a5532a5e-d859-4795-967b-14723f8920ea",
          "name": "Electronics",
          "code": "573"
        },
        "labels": {
          "Office supplies": [
            "photocopying"
          ],
          "Department": [
            "HR"
          ]
        },
        "tax_rate": {
          "id": "d92efe31-fc26-4364-af4b-3630c1057ece",
          "name": "No VAT",
          "percentage": 0
        }
      }
    ],
    "labels": {
      "Office supplies": [
        "photocopying"
      ],
      "Department": [
        "HR"
      ]
    },
    "receipt_ids": [
      "84c0169a-37f9-4bfa-ab1e-f2c81dbc34cf"
    ],
    "spent_amount": {
      "amount": 24.38,
      "currency": "GBP"
    }
  },
  {
    "id": "8498b232-28ba-4baf-b33d-22fb464e83c8",
    "state": "missing_info",
    "transaction_type": "fee",
    "description": "Expenses app charges",
    "payer": "Bingston Labs",
    "transaction_id": "91b56d41-7b42-40e8-8970-0082cf965e6e",
    "expense_date": "2024-09-04T13:39:18.606Z",
    "splits": [
      {
        "amount": {
          "amount": 17.68,
          "currency": "EUR"
        },
        "category": {
          "id": "95bf2a30-7284-4664-989a-1dcb51e2053a",
          "name": "General Expenses",
          "code": "429"
        },
        "labels": {},
        "tax_rate": {
          "id": "812f50e7-37b3-480b-a7c4-2ad08442f7cf",
          "name": "20% (VAT on Expenses)",
          "percentage": 20
        }
      }
    ],
    "labels": {},
    "receipt_ids": [
      "d97d062f-5aae-4a0c-b5f3-52ae134d384d"
    ],
    "spent_amount": {
      "amount": 17.68,
      "currency": "EUR"
    }
  },
  {
    "id": "a0e0294e-0460-42f4-bd97-f969469f1afc",
    "state": "missing_info",
    "transaction_type": "mileage_reimbursement",
    "payer": "John Smith",
    "expense_date": "2025-10-6T08:34:18.123Z",
    "splits": [
      {
        "amount": {
          "amount": 25.99,
          "currency": "EUR"
        },
        "category": {
          "id": "dab86546-a442-464a-9bad-18a826542b03",
          "name": "Vehicle Operating Expenses"
        },
        "labels": {},
        "tax_rate": {
          "id": "728980d1-aa76-44f5-8902-53520160bfeb",
          "name": "20% Fuel bills",
          "percentage": 20
        }
      }
    ],
    "labels": {},
    "receipt_ids": [],
    "spent_amount": {
      "amount": 25.99,
      "currency": "EUR"
    }
  },
  {
    "id": "b6f4e0c2-8a3d-4e61-9c50-2f7a9b1c4d8e",
    "state": "approved",
    "transaction_type": "card_payment",
    "description": "Client visit - accommodation and dinner",
    "submitted_at": "2025-11-14T19:02:11.224Z",
    "completed_at": "2025-11-14T19:02:33.901Z",
    "payer": "Amara Okafor",
    "merchant": "Hotel do Cais",
    "transaction_id": "7f3a2c9e-4b5d-4f2a-8c31-2d6e9b1a7f05",
    "expense_date": "2025-11-13T21:47:01.782Z",
    "splits": [
      {
        "amount": {
          "amount": 45,
          "currency": "GBP"
        },
        "category": {
          "id": "2f76152a-2b14-4390-aa32-bbab02a1e98c",
          "name": "Meals & Entertainment",
          "code": "500"
        },
        "labels": {
          "Hospitality": [
            "client visit"
          ]
        },
        "tax_rate": {
          "id": "5704fdd2-bac2-42ec-bab0-e075182260be",
          "name": "VAT",
          "percentage": 20
        }
      },
      {
        "amount": {
          "amount": 210,
          "currency": "GBP"
        },
        "category": {
          "id": "c729ea95-3ae7-4d21-91f7-1a69844175f2",
          "name": "Travel & Lodging",
          "code": "460"
        },
        "labels": {
          "Hospitality": [
            "client visit"
          ]
        },
        "tax_rate": {
          "id": "d92efe31-fc26-4364-af4b-3630c1057ece",
          "name": "No VAT",
          "percentage": 0
        }
      }
    ],
    "labels": {
      "Hospitality": [
        "client visit"
      ]
    },
    "receipt_ids": [
      "2d84c9fa-47b3-4a1e-b5f7-3c8a9d0e6f21"
    ],
    "spent_amount": {
      "amount": 295.8,
      "currency": "EUR"
    }
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "Expenses API for business is disabled",
  "code": 9002
}
```

> 422 Response

```json
{
  "message": "Expenses feature is not enabled",
  "code": 3470
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-expenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of expenses|[Expenses](#schemaexpenses)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|403|Forbidden|Forbidden<br><br>Returned, for example, when the Expenses API is disabled for the business that is trying to use it.|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable content<br><br>Returned, for example, when the Expenses feature (not just the API) is disabled for the business.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve an expense

<a id="opIdgetExpense"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/expenses/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /expenses/{expense_id}`

Get the information about a specific expense by ID.

The data enriched by the user, for example, VAT and cost centre, is returned under `splits[].tax_rate` and `splits[].labels`, respectively.

:::note
This feature is not available in Sandbox.
:::

For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).

<h3 id="retrieve-an-expense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expense_id|path|string(uuid)|true|The ID of the expense to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "8decf9f8-053e-46cb-92d8-a7b450fe5ae0",
  "state": "approved",
  "transaction_type": "card_payment",
  "description": "Printer paper",
  "submitted_at": "2024-09-13T20:48:40.912Z",
  "completed_at": "2024-09-13T20:48:40.948Z",
  "payer": "Ray Trenfield",
  "merchant": "Best Printers Company",
  "transaction_id": "163e0ef6-2414-4fcf-846f-1f871059d506",
  "expense_date": "2024-09-13T18:47:01.782Z",
  "splits": [
    {
      "amount": {
        "amount": 15.39,
        "currency": "GBP"
      },
      "category": {
        "id": "71b9ec74-d5ff-4aa1-a489-f8dc39d4c9b7",
        "name": "Printing & Stationery",
        "code": "461"
      },
      "labels": {
        "Office supplies": [
          "photocopying"
        ],
        "Department": [
          "HR"
        ]
      },
      "tax_rate": {
        "id": "5704fdd2-bac2-42ec-bab0-e075182260be",
        "name": "VAT",
        "percentage": 20
      }
    },
    {
      "amount": {
        "amount": 8.99,
        "currency": "GBP"
      },
      "category": {
        "id": "a5532a5e-d859-4795-967b-14723f8920ea",
        "name": "Electronics",
        "code": "573"
      },
      "labels": {
        "Office supplies": [
          "photocopying"
        ],
        "Department": [
          "HR"
        ]
      },
      "tax_rate": {
        "id": "d92efe31-fc26-4364-af4b-3630c1057ece",
        "name": "No VAT",
        "percentage": 0
      }
    }
  ],
  "labels": {
    "Office supplies": [
      "photocopying"
    ],
    "Department": [
      "HR"
    ]
  },
  "receipt_ids": [
    "84c0169a-37f9-4bfa-ab1e-f2c81dbc34cf"
  ],
  "spent_amount": {
    "amount": 24.38,
    "currency": "GBP"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> 404 Response

```json
{
  "message": "Expense 'bd415411-6e3e-46e7-af07-42f9b790c44e' not found",
  "code": 3006
}
```

> 422 Response

```json
{
  "message": "Expenses feature is not enabled",
  "code": 3470
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-an-expense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Expense|[Expense](#schemaexpense)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|403|Forbidden|Forbidden<br><br>Returned, for example, when the access token is missing the required [scope](https://developer.revolut.com/docs/api/business#access-token) or if the Expenses API is disabled for the business.|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable content<br><br>Returned, for example, when the Expenses feature (not just the API) is disabled for the business.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a receipt related to an expense

<a id="opIdgetExpenseReceipt"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/expenses/497f6eca-6276-4993-bfeb-53cbbbba6f08/receipts/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /expenses/{expense_id}/receipts/{receipt_id}/content`

Get the receipt related to an expense by providing the receipt's ID.

:::note
This feature is not available in Sandbox.
:::

For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).

<h3 id="retrieve-a-receipt-related-to-an-expense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expense_id|path|string(uuid)|true|The ID of the [expense](https://developer.revolut.com/docs/api/business#get-expense) to which the receipt is related.|
|receipt_id|path|string(uuid)|true|The ID of the receipt to retrieve.<br><br>To find the ID of a receipt related to a specific expense, refer to the [expense's details](https://developer.revolut.com/docs/api/business#get-expense#response).<br>The IDs of receipts related to that expense are returned under `receipt_ids`.|

> Example responses

> 200 Response

```text
@sample-receipt.pdf
```

> 400 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> 404 Response

```json
{
  "message": "Receipt 'cea368fe-c757-44ce-b2cc-3da94b3d13a6' for expense '3e45f3d7-9919-46df-9793-300726c9fed1' not found",
  "code": 3006
}
```

> 422 Response

```json
{
  "message": "Expenses feature is not enabled",
  "code": 3470
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-receipt-related-to-an-expense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Receipt content. The exact format depends on the receipt.|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|403|Forbidden|Forbidden<br><br>Returned, for example, when the access token is missing the required [scope](https://developer.revolut.com/docs/api/business#access-token) or if the Expenses API is disabled for the business.|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable content<br><br>Returned, for example, when the Expenses feature (not just the API) is disabled for the business.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-foreign-exchange">Foreign exchange</h1>

Retrieve information on exchange rates between currencies, buy and sell currencies.

For more information, see the guides: [Exchange money](https://developer.revolut.com/docs/guides/manage-accounts/exchange-money).

## Get an exchange rate

<a id="opIdgetRate"></a>

> Code samples

```bash
curl 'https://b2b.revolut.com/api/1.0/rate?from=string&to=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rate`

Get the sell exchange rate between two currencies.

You can check the [currencies supported in Production](https://help.revolut.com/business/help/receiving-payments/currency-exchanges/which-currencies-can-i-exchange-and-keep-in-my-account/) in the Revolut Help Centre.
Some of these currencies might not be available in Sandbox.

For more information, see the guides: [Exchange money](https://developer.revolut.com/docs/guides/manage-accounts/exchange-money).

<h3 id="get-an-exchange-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|[Currency](#schemacurrency)|true|The currency that you exchange from in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.|
|amount|query|number(double)|false|The amount of the currency to exchange **from**. The default value is `1.00`.|
|to|query|[Currency](#schemacurrency)|true|The currency that you exchange to in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.|

> Example responses

> 200 Response

```json
{
  "from": {
    "amount": 1,
    "currency": "EUR"
  },
  "to": {
    "amount": 1,
    "currency": "USD"
  },
  "rate": 1.0044090351,
  "fee": {
    "amount": 0,
    "currency": "EUR"
  },
  "rate_date": "2022-08-31T17:30:34Z"
}
```

> 404 Response

```json
{
  "message": "Exchange rate unknown",
  "code": 3472
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-exchange-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The exchange rate information|[ExchangeRateResponse](#schemaexchangerateresponse)|
|404|Not Found|Not found<br><br>Returned, for example, when the exchange rate is unknown|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Exchange money

<a id="opIdexchangeMoney"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/exchange \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from": {
      "account_id": "af98333c-ea53-482b-93c2-1fa5e4eae671",
      "currency": "USD",
      "amount": 135.5
    },
    "to": {
      "account_id": "b7ec67d3-5af1-42c8-bece-3d285774894d",
      "currency": "EUR"
    },
    "reference": "exchange",
    "request_id": "A1pH4num3ric2"
  }'
```

`POST /exchange`

Exchange money using one of these methods: 

- **Sell currency**: You know the amount of currency to sell. 
  For example, you want to exchange 135.5 USD to some EUR. 

  Specify the amount in the `from` object.
- **Buy currency**: You know the amount of currency to buy. 
  For example, you want to exchange some USD to 200 EUR. 

  Specify the amount in the `to` object.

:::note
You must specify the `amount` field only once, either in the `from` object or in the `to` object.
:::

You can check the [currencies supported in Production](https://help.revolut.com/business/help/receiving-payments/currency-exchanges/which-currencies-can-i-exchange-and-keep-in-my-account/) in the Revolut Help Centre.
Some of these currencies might not be available in Sandbox.

For more information, see the guides: [Exchange money](https://developer.revolut.com/docs/guides/manage-accounts/exchange-money).

> Body parameter

```json
{
  "from": {
    "account_id": "af98333c-ea53-482b-93c2-1fa5e4eae671",
    "currency": "USD",
    "amount": 135.5
  },
  "to": {
    "account_id": "b7ec67d3-5af1-42c8-bece-3d285774894d",
    "currency": "EUR"
  },
  "reference": "exchange",
  "request_id": "A1pH4num3ric2"
}
```

<h3 id="exchange-money-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExchangeRequest](#schemaexchangerequest)|true|Specify the exchange information|
|» from|body|[ExchangePartFrom](#schemaexchangepartfrom)|true|The details of the currency to exchange from.|
|» to|body|[ExchangePartTo](#schemaexchangepartto)|true|The details of the currency to exchange to.|
|» reference|body|string|false|The reference for the exchange transaction, provided by you.<br>It helps you to identify the transaction if you want to look it up later.|
|» request_id|body|string|true|The ID of the request, provided by you.<br>It helps you identify the transaction in your system.<br><br>:::warning<br>To ensure that an exchange transaction is not processed multiple times if there are network or system errors,<br>the same `request_id` should be used for requests related to the same transaction.<br>:::|
|» exchange_reason_code|body|[ExchangeReasonCode](#schemaexchangereasoncode)|false|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|

> Example responses

> 200 Response

```json
{
  "id": "630f9c2e-2e74-a06d-ab61-deb7ggkkd6cb",
  "state": "completed",
  "created_at": "2022-08-31T17:36:46.656876Z",
  "completed_at": "2022-08-31T17:36:46.657239Z"
}
```

> 400 Response

```json
{
  "code": 3448,
  "message": "Exchange reason is required"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="exchange-money-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exchange operation details|[ExchangeResponse](#schemaexchangeresponse)|
|400|Bad Request|Bad request<br><br>For example, the exchange reason is required.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Get exchange reasons

<a id="opIdgetExchangeReasons"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/exchange-reasons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /exchange-reasons`

Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. 
With this endpoint, you can retrieve all exchange reasons available to your business account.

After you retrieve the results, use the appropriate reason code in the `exchange_reason_code` field when [exchanging money](https://developer.revolut.com/docs/api/business#exchange-money) or [making a payment](https://developer.revolut.com/docs/api/business#create-payment) that involves foreign currency exchange.

> Example responses

> 200 Response

```json
[
  {
    "code": "business_expense_and_claims",
    "name": "Business expense and claims"
  },
  {
    "code": "fees_and_charges",
    "name": "Fees and charges"
  },
  {
    "code": "fund_transfer_and_intracompany_payment",
    "name": "Fund transfer and intracompany payment"
  },
  {
    "code": "gifts_and_donations",
    "name": "Gifts and donations"
  },
  {
    "code": "government_services_and_tax",
    "name": "Government services and tax"
  },
  {
    "code": "insurance",
    "name": "Insurance"
  },
  {
    "code": "inventory",
    "name": "Inventory"
  },
  {
    "code": "investment_dividend_and_interest",
    "name": "Investment, dividend and interest"
  },
  {
    "code": "loan_and_loan_repayment",
    "name": "Loan and loan repayment"
  },
  {
    "code": "marketing",
    "name": "Marketing"
  },
  {
    "code": "payment_for_goods_and_services",
    "name": "Payment for goods and services"
  },
  {
    "code": "payroll",
    "name": "Payroll"
  },
  {
    "code": "refund",
    "name": "Refund"
  },
  {
    "code": "rental_and_property",
    "name": "Rental and property"
  },
  {
    "code": "sales",
    "name": "Sales"
  },
  {
    "code": "service_provider_and_software",
    "name": "Service provider and software"
  },
  {
    "code": "travel_and_transportation",
    "name": "Travel and transportation"
  },
  {
    "code": "utilities",
    "name": "Utilities"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-exchange-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of exchange reasons|[ExchangeReasons](#schemaexchangereasons)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-payment-drafts">Payment drafts</h1>

Payment drafts let you prepare payments for future processing, prepare payments that require an approval, or prepare bulk or scheduled payments.

Simply create a draft, and when you're ready, [send it for processing as payment](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing).
If you or the payment you're making is subject to an [approval process](https://help.revolut.com/business/help/managing-my-business/users-and-employees/how-can-i-set-payment-approval-rules/), another team member designated as an approver must approve it in the [Revolut Business app](https://business.revolut.com/) before the payment can be processed.

You can also retrieve or delete the drafts created with the API.

For more information on use cases and other details, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

## Retrieve a list of payment drafts

<a id="opIdgetPaymentDrafts"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment-drafts`

Get the list of payment drafts that haven't been [sent for processing](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing).

By default, only payment drafts created with the API (including [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints) are returned. To retrieve drafts from other sources, use the `source` parameter.

The response lists the drafts with their details, such as the number of payments included in the draft, but not the payment details.

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

<h3 id="retrieve-a-list-of-payment-drafts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|Filter payment drafts by the source from which they were created.<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`api`** \| Only drafts created with the API (excluding the [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints). \|<br>\| **`integration`** \| Drafts created via integrations (e.g., Xero) and [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints. \|<br>\| **`email`** \| Only drafts created via email. \|<br>\| **`all`** \| All payment drafts, **including drafts created in the Revolut Business app**. \||

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|api|
|source|integration|
|source|email|
|source|all|

> Example responses

> 200 Response

```json
{
  "payment_orders": [
    {
      "id": "e7e54cb2-861a-aaaa-80e9-3e6600f3db10",
      "scheduled_for": "2026-06-24",
      "title": "Draft Payment through API",
      "payments_count": 1,
      "source": "api"
    }
  ]
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-payment-drafts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of payment drafts|[PaymentDraftsResponse](#schemapaymentdraftsresponse)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a payment draft

<a id="opIdcreatePaymentDraft"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "Payment Draft Title",
    "payments": [
      {
        "account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb",
        "receiver": {
          "counterparty_id": "a15bcac4-dd42-45ed-a828-6806ccc8bb7e",
          "account_id": "2bf609f4-9825-4401-b6f7-960c61f8bee0"
        },
        "amount": 10,
        "currency": "GBP",
        "reference": "Payment #123"
      }
    ]
  }'
```

`POST /payment-drafts`

Create a payment draft.

When you create a payment draft, it stays a draft until you [send it for processing as payment](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing) in the [Revolut Business app](https://business.revolut.com/).

Until then, you can [delete](https://developer.revolut.com/docs/api/business#delete-payment-draft) the draft if you no longer wish to proceed with it.

:::note
If you or the payment you're making is subject to an [approval process](https://help.revolut.com/business/help/managing-my-business/users-and-employees/how-can-i-set-payment-approval-rules/), when you send the draft for processing, the payment goes into the `Pending review` state.
Before it can be processed, the business owner, administrator, or another team member designated as an approver must approve it in the Revolut Business app.
:::

For more information on use cases and other details, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

> Body parameter

```json
{
  "title": "Payment Draft Title",
  "payments": [
    {
      "account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb",
      "receiver": {
        "counterparty_id": "a15bcac4-dd42-45ed-a828-6806ccc8bb7e",
        "account_id": "2bf609f4-9825-4401-b6f7-960c61f8bee0"
      },
      "amount": 10,
      "currency": "GBP",
      "reference": "Payment #123"
    }
  ]
}
```

<h3 id="create-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePaymentDraftRequest](#schemacreatepaymentdraftrequest)|true|The payment draft information|
|» title|body|string|false|The title of the payment draft.|
|» schedule_for|body|string(date)|false|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|» payments|body|[[PaymentRequest](#schemapaymentrequest)]|true|The details of the payment(s) to be made.|

> Example responses

> 201 Response

```json
{
  "id": "e7e54cb2-861a-aaaa-80e9-3e6600f3db10"
}
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Charge bearer is not supported for bulk payments."
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ID of the payment draft that was created|[CreatePaymentDraftResponse](#schemacreatepaymentdraftresponse)|
|204|No Content|No payments provided|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted, or when the request contains incompatible parameters.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a payment draft

<a id="opIdgetPaymentDraft"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment-drafts/{payment_draft_id}`

Get the information about a specific payment draft by ID.

Returns drafts created with the API or via the [Revolut Business app](https://business.revolut.com/).

The response lists the details of the payment(s) included in the draft, as well as the draft details.

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

<h3 id="retrieve-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft to retrieve.|

> Example responses

> 200 Response

```json
{
  "title": "Draft Payment through API",
  "scheduled_for": "2026-06-24",
  "payments": [
    {
      "id": "67b38771-3db0-4cf0-bdc0-aaaa1284ab81",
      "amount": {
        "amount": 123,
        "currency": "GBP"
      },
      "reference": "Draft Payment through API",
      "account_id": "05018b0d-e67c-4fec-aaaa-415e9da9432c",
      "receiver": {
        "counterparty_id": "c71af44d-aaaa-4e1a-84bb-17589c81f022"
      },
      "state": "CREATED",
      "current_charge_options": {
        "from": {
          "amount": 123,
          "currency": "GBP"
        },
        "to": {
          "amount": 123,
          "currency": "GBP"
        },
        "rate": "1.0000",
        "fee": {
          "amount": 0,
          "currency": "GBP"
        }
      }
    }
  ]
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about a specific payment draft|[PaymentDraftResponse](#schemapaymentdraftresponse)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a payment draft

<a id="opIddeletePaymentDraft"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /payment-drafts/{payment_draft_id}`

Delete a payment draft with the given ID.

You can delete a payment draft only if it hasn't been [sent for processing](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing).

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

<h3 id="delete-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft to delete.|

> Example responses

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The payment draft was successfully deleted|None|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a payment draft

<a id="opIdupdatePaymentDraft"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "Updated Draft Title"
  }'
```

`PATCH /payment-drafts/{payment_draft_id}`

Update the metadata of a payment draft (`title` and/or `schedule_for`).

:::note
- You can update drafts created with the API or via the Revolut Business app.
- The `schedule_for` date must be in the future.
:::

All fields are optional — omitting a field leaves it unchanged.

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

> Body parameter

```json
{
  "title": "Updated Draft Title"
}
```

<h3 id="update-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft to update.|
|body|body|[UpdatePaymentDraftRequest](#schemaupdatepaymentdraftrequest)|true|The fields to update on the payment draft.|
|» title|body|string \| null|false|The title of the payment draft. To clear the title, provide `null`.|
|» schedule_for|body|string(date) \| null|false|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>:::note<br>The date must be in the future.<br>:::<br><br>To clear the scheduled date, provide `null`.|

> Example responses

> 400 Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 3006,
  "message": "The specified payment draft was not found"
}
```

> 422 Response

```json
{
  "code": 3100,
  "message": "Payment draft was created via Partner API and cannot be updated"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The payment draft was successfully updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|The specified payment draft was not found.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>Returned when the payment draft cannot be modified.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Add a payment to a payment draft

<a id="opIdaddPaymentDraftPayment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb",
    "receiver": {
      "counterparty_id": "a15bcac4-dd42-45ed-a828-6806ccc8bb7e",
      "account_id": "2bf609f4-9825-4401-b6f7-960c61f8bee0"
    },
    "amount": 50,
    "currency": "GBP",
    "reference": "Payment #456"
  }'
```

`POST /payment-drafts/{payment_draft_id}/payments`

Add a new payment to an existing payment draft.

:::note
You can add payments to drafts created with the API or via the Revolut Business app.
:::

The payment uses the same shape as the payments in the [create payment draft](#create-payment-draft) request.

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

> Body parameter

```json
{
  "account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb",
  "receiver": {
    "counterparty_id": "a15bcac4-dd42-45ed-a828-6806ccc8bb7e",
    "account_id": "2bf609f4-9825-4401-b6f7-960c61f8bee0"
  },
  "amount": 50,
  "currency": "GBP",
  "reference": "Payment #456"
}
```

<h3 id="add-a-payment-to-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft to add the payment to.|
|body|body|[PaymentRequest](#schemapaymentrequest)|true|The payment to add to the draft.|
|» account_id|body|string(uuid)|true|The ID of the account to pay from. <br><br>:::note<br>You can specify only one account ID for multiple payments in the same payment draft.<br>:::|
|» receiver|body|[PaymentReceiver](#schemapaymentreceiver)|true|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|» amount|body|number(double)|true|The amount of the payment.|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» reference|body|string|true|The reference for the payment.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.<br><br>You might include an invoice number, account or transaction ID, or any other reference meaningful to you.|
|» charge_bearer|body|string|false|The party that should bear the transaction fees related to the selected transaction route if applied.<br>Possible options are: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br><br>:::note<br>- This field is not supported for [bulk payments](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#use-cases).<br>- Some transactions with fees might not support charge bearer selection.<br>  If this is the case, the request will return an error.<br>  To proceed with the default fee handling, remove this field from your request and try again.<br>:::|
|» transfer_reason_code|body|[TransferReasonCode](#schematransferreasoncode)|false|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» charge_bearer|shared|
|» charge_bearer|debtor|

> Example responses

> 201 Response

```json
{
  "id": "a1b2c3d4-0000-0000-0000-000000000002"
}
```

> 400 Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 3006,
  "message": "The specified payment draft was not found"
}
```

> 422 Response

```json
{
  "code": 3100,
  "message": "Payment draft was created via Partner API and cannot be updated"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="add-a-payment-to-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ID of the payment that was added to the draft|[CreatePaymentDraftPaymentResponse](#schemacreatepaymentdraftpaymentresponse)|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|The specified payment draft was not found.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>Returned when the payment draft cannot be modified.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a payment from a payment draft

<a id="opIddeletePaymentDraftPayment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /payment-drafts/{payment_draft_id}/payments/{payment_id}`

Delete a single payment from a payment draft. Other payments in the draft are unaffected.

:::note
You can delete payments from drafts created with the API or via the Revolut Business app.
:::

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

<h3 id="delete-a-payment-from-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft that contains the payment.|
|payment_id|path|string(uuid)|true|The ID of the payment to delete.|

> Example responses

> 404 Response

```json
{
  "code": 3006,
  "message": "The specified payment draft or payment was not found"
}
```

> 422 Response

```json
{
  "code": 3100,
  "message": "Payment draft was created via Partner API and cannot be updated"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-payment-from-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The payment was successfully removed from the draft|None|
|404|Not Found|The specified payment draft or payment was not found.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>Returned when the payment draft cannot be modified.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a payment in a payment draft

<a id="opIdupdatePaymentDraftPayment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payment-drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 200
  }'
```

`PATCH /payment-drafts/{payment_draft_id}/payments/{payment_id}`

Update the fields of a single payment within a payment draft.

:::note
You can update payments in drafts created with the API or via the Revolut Business app.
:::

All fields are optional — omit what should not change. Other payments in the draft are unaffected.

For more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).

> Body parameter

```json
{
  "amount": 200
}
```

<h3 id="update-a-payment-in-a-payment-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_draft_id|path|string(uuid)|true|The ID of the payment draft that contains the payment.|
|payment_id|path|string(uuid)|true|The ID of the payment to update.|
|body|body|[UpdateDraftPaymentRequest](#schemaupdatedraftpaymentrequest)|true|The fields to update on the payment.|
|» receiver|body|[PaymentReceiver](#schemapaymentreceiver)|false|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|» amount|body|number(double)|false|The amount of the payment.|
|» currency|body|[Currency](#schemacurrency)|false|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» reference|body|string|false|The reference for the payment.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.|
|» charge_bearer|body|string \| null|false|The party that should bear the transaction fees related to the selected transaction route if applied.<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \||
|» transfer_reason_code|body|[TransferReasonCode](#schematransferreasoncode)|false|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» charge_bearer|shared|
|» charge_bearer|debtor|

> Example responses

> 400 Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 3006,
  "message": "The specified payment draft or payment was not found"
}
```

> 422 Response

```json
{
  "code": 3100,
  "message": "Payment draft was created via Partner API and cannot be updated"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-payment-in-a-payment-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The payment was successfully updated|None|
|400|Bad Request|Bad Request<br><br>Returned, for example, when a required parameter is missing or malformatted.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|The specified payment draft or payment was not found.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable Entity<br><br>Returned when the payment draft cannot be modified.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-payout-links">Payout links</h1>

Use payout links to send money without having to request full banking details of the recipient.  
The recipient must claim the money before the link expires.

:::note
This feature is available in the UK, the EEA, AU, and SG.
:::

For more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).

## Retrieve a list of payout links

<a id="opIdgetPayoutLinks"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payout-links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payout-links`

Get all the links that you have created, or use the query parameters to filter the results.

The links are sorted by the `created_at` date in reverse chronological order.

The returned links are **paginated**. 
The maximum number of payout links returned per page is specified by the `limit` parameter.
To get to the next page, make a new request and use the `created_at` date of the last payout link returned in the previous response.

:::note
This feature is available in the UK, the EEA, AU, and SG.
:::        

For more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).

<h3 id="retrieve-a-list-of-payout-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|[[PayoutLinkState](#schemapayoutlinkstate)]|false|Retrieves links in the specified state(s).<br>Use for filtering.<br><br>To specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`.|
|created_before|query|string(date-time)|false|Retrieves links with `created_at` < `created_before`.<br>The default value is the current date and time at which you are calling the endpoint.<br><br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|integer|false|The maximum number of links returned per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last payout link returned in the previous response as the value for `created_before`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|created|
|state|failed|
|state|awaiting|
|state|active|
|state|expired|
|state|cancelled|
|state|processing|
|state|processed|

> Example responses

> 200 Response

```json
[
  {
    "id": "8e32b08a-e012-4530-bd15-c4e9ebde953d",
    "state": "processed",
    "created_at": "2024-01-11T14:02:53.472318Z",
    "updated_at": "2024-01-11T14:05:02.962886Z",
    "counterparty_name": "Jane Doe",
    "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dMM",
    "expiry_date": "2023-07-18T14:02:53.717626Z",
    "payout_methods": [
      "revolut",
      "bank_account",
      "card"
    ],
    "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
    "amount": 5.6,
    "currency": "GBP",
    "counterparty_id": "2ef4618a-f258-4ac5-a846-ca6e089214f6",
    "transaction_id": "64ad618e-655a-a925-8425-2284c03f6c08",
    "reference": "Bus ticket",
    "transfer_reason_code": "travel"
  },
  {
    "id": "12dcd8c2-6408-458f-98a9-3f4abc180898",
    "state": "active",
    "created_at": "2023-07-11T13:55:54.834963Z",
    "updated_at": "2023-07-11T14:02:12.868346Z",
    "counterparty_name": "John Doe",
    "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
    "expiry_date": "2023-07-18T13:55:55.082280Z",
    "payout_methods": [
      "revolut",
      "bank_account"
    ],
    "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
    "amount": 105.6,
    "currency": "GBP",
    "url": "https://business.revolut.com/p/uSJVAd5SnP1",
    "reference": "Rent",
    "transfer_reason_code": "property_rental"
  },
  {
    "id": "d3b02315-044c-471f-ad41-59d9a4e3c538",
    "state": "active",
    "created_at": "2023-07-11T13:53:45.986248Z",
    "updated_at": "2023-07-11T13:53:46.475470Z",
    "counterparty_name": "John Smith",
    "request_id": "rev-001",
    "expiry_date": "2023-07-18T13:53:46.474777Z",
    "payout_methods": [
      "revolut"
    ],
    "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
    "amount": 15.6,
    "currency": "GBP",
    "url": "https://business.revolut.com/p/DPYtd2BUUwP",
    "reference": "meal delivery"
  }
]
```

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-payout-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of your payout links|[PayoutLinks](#schemapayoutlinks)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a payout link

<a id="opIdcreatePayoutLink"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payout-links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "counterparty_name": "John Smith",
    "save_counterparty": false,
    "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
    "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
    "amount": 105.6,
    "currency": "GBP",
    "reference": "string",
    "payout_methods": [
      "revolut",
      "bank_account",
      "card"
    ],
    "expiry_period": "P3D",
    "transfer_reason_code": "property_rental"
  }'
```

`POST /payout-links`

Create a payout link to send money even when you don't have the full banking details of the counterparty.  
After you have created the link, send it to the recipient so that they can claim the payment.

:::note
This feature is available in the UK, the EEA, AU, and SG.
:::

For more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).

> Body parameter

```json
{
  "counterparty_name": "John Smith",
  "save_counterparty": false,
  "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
  "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
  "amount": 105.6,
  "currency": "GBP",
  "reference": "string",
  "payout_methods": [
    "revolut",
    "bank_account",
    "card"
  ],
  "expiry_period": "P3D",
  "transfer_reason_code": "property_rental"
}
```

<h3 id="create-a-payout-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePayoutLinkRequest](#schemacreatepayoutlinkrequest)|true|Payout link to create|
|» counterparty_name|body|[PayoutLinkCounterpartyName](#schemapayoutlinkcounterpartyname)|true|The name of the counterparty provided by the sender.|
|» save_counterparty|body|boolean|false|Indicates whether to save the recipient as your counterparty upon link claim.<br>If `false` then the counterparty will not show up on your counterparties list, for example, when you retrieve your counterparties. <br>However, you will still be able to retrieve this counterparty by its ID.<br><br>If you don't choose to save the counterparty on link creation, you can do it later from your transactions list in the Business app.|
|» request_id|body|[PayoutLinkRequestId](#schemapayoutlinkrequestid)|true|The ID of the request, provided by the sender.<br><br>:::warning<br>To ensure that a link payment is not processed multiple times if there are network or system errors, the same `request_id` should be used for requests related to the same link.<br>:::|
|» account_id|body|[PayoutLinkAccountId](#schemapayoutlinkaccountid)|true|The ID of the sender's account.|
|» amount|body|[PayoutLinkAmount](#schemapayoutlinkamount)|true|The amount of money to be transferred.<br><br>:::note<br>The amount must be between £1 and £2,500, or equivalent in the selected currency.<br>:::|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» reference|body|string|true|The reference for the payout link.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.<br><br>You might include an invoice number, account or transaction ID, or any other reference meaningful to you or the recipient.|
|» payout_methods|body|[PayoutLinkPayoutMethods](#schemapayoutlinkpayoutmethods)|false|The list of payout methods that the recipient can use to claim the payout.|
|» expiry_period|body|[PayoutLinkExpiryPeriod](#schemapayoutlinkexpiryperiod)|false|The period after which the payout link expires if not claimed before, provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).<br><br>The default and maximum value is 7 days from the link creation.|
|» transfer_reason_code|body|[TransferReasonCode](#schematransferreasoncode)|false|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payout_methods|revolut|
|» payout_methods|bank_account|
|» payout_methods|card|

> Example responses

> 201 Response

```json
{
  "id": "12dcd8c2-6408-458f-98a9-3f4abc180898",
  "state": "active",
  "created_at": "2023-07-11T13:55:54.834963Z",
  "updated_at": "2023-07-11T13:55:55.082655Z",
  "counterparty_name": "John Smith",
  "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
  "expiry_date": "2023-07-18T13:55:55.082280Z",
  "payout_methods": [
    "revolut",
    "bank_account",
    "card"
  ],
  "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
  "amount": 105.6,
  "currency": "GBP",
  "url": "https://business.revolut.com/p/uSJVAd5SnP1",
  "reference": "Rent",
  "transfer_reason_code": "property_rental"
}
```

> 400 Response

```json
{
  "message": "Required 'account_id' is missing",
  "code": 3009
}
```

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-payout-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created payout link details|[PayoutLinkInitialProps](#schemapayoutlinkinitialprops)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a payout link

<a id="opIdgetPayoutLink"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payout-links/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payout-links/{payout_link_id}`

Get the information about a specific link by its ID.

:::note
This feature is available in the UK, the EEA, AU, and SG.
:::

For more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).

<h3 id="retrieve-a-payout-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payout_link_id|path|string(uuid)|true|The ID of the link to retrieve.|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/payoutLinkActive"
}
```

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> 404 Response

```json
{
  "message": "Resource not found",
  "code": 3006
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-payout-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about a specific link|[PayoutLink](#schemapayoutlink)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Cancel a payout link

<a id="opIdcancelPayoutLink"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/payout-links/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /payout-links/{payout_link_id}/cancel`

Cancel a payout link. You can only cancel a link that hasn't been claimed yet. 
A successful request does not get any content in response.

:::note
This feature is available in the UK, the EEA, AU, and SG.
:::

For more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).

<h3 id="cancel-a-payout-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payout_link_id|path|string(uuid)|true|The ID of the link to cancel.|

> Example responses

> 403 Response

```json
{
  "message": "This action is forbidden",
  "code": 9002
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="cancel-a-payout-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Payout link has been cancelled|None|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-simulations">Simulations</h1>

The Simulations API is only available in the Sandbox environment. 
It lets you simulate certain events that are otherwise only possible in the production environment, such as your account's top-up and transfer state changes. 

For more information, see the guides: [Test your flows with simulations (Sandbox only)](https://developer.revolut.com/docs/guides/manage-accounts/api-usage-and-testing/test-flows-with-simulations).

:::note
To play around with Sandbox, [create a Sandbox account](https://sandbox-business.revolut.com/).
:::

## Simulate a transfer state update (Sandbox only)

<a id="opIdsimulateTransferStateUpdate"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/sandbox/transactions/497f6eca-6276-4993-bfeb-53cbbbba6f08/complete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/transactions/{id}/{action}`

Simulate a transfer state change in the Sandbox environment. 

For example, after you make a transfer in Sandbox, you can change its state to `completed`. The resulting state is final and cannot be changed.

For more information, see the guides: [Test your flows with simulations (Sandbox only)](https://developer.revolut.com/docs/guides/manage-accounts/api-usage-and-testing/test-flows-with-simulations).

<h3 id="simulate-a-transfer-state-update-sandbox-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the transfer whose state you want to update.|
|action|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|complete|
|action|revert|
|action|decline|
|action|fail|

> Example responses

> 200 Response

```json
{
  "id": "a6ea39d7-62c9-481c-8ba6-8a887a44c486",
  "state": "completed",
  "created_at": "2023-01-23T08:39:35.811005Z",
  "completed_at": "2023-01-23T08:39:35.811005Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="simulate-a-transfer-state-update-sandbox-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the updated transfer state|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="simulate-a-transfer-state-update-sandbox-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the transfer whose state was updated.|
|state|string|true|none|Indicates the simulated transaction state. Possible values:<br>- `completed` - Transaction was successfully processed.<br>- `reverted` - Transaction was reverted by the system or company, but not the user. This can happen for a variety of reasons, for example, the receiver being inaccessible.<br>- `declined` - Transaction was declined to the user for a good reason, such as insufficient account balance, wrong receiver information, etc.<br>- `failed` - Transaction failed during initiation or completion. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc.|
|created_at|string(date-time)|true|none|The date and time the transfer was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the transfer was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|completed|
|state|reverted|
|state|declined|
|state|failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Simulate an account top-up (Sandbox only)

<a id="opIdsimulateTopUp"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/sandbox/topup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "e042f1fe-f721-49cc-af82-db7a6c46944f",
    "amount": 100,
    "currency": "GBP",
    "reference": "Test Top-up",
    "state": "completed"
  }'
```

`POST /sandbox/topup`

Simulate a top-up of your account in the Sandbox environment. 

This is useful during testing, when you run out of money in your test account and need to add more.

For more information, see the guides: [Test your flows with simulations (Sandbox only)](https://developer.revolut.com/docs/guides/manage-accounts/api-usage-and-testing/test-flows-with-simulations).

> Body parameter

```json
{
  "account_id": "e042f1fe-f721-49cc-af82-db7a6c46944f",
  "amount": 100,
  "currency": "GBP",
  "reference": "Test Top-up",
  "state": "completed"
}
```

<h3 id="simulate-an-account-top-up-sandbox-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Top-up details|
|» account_id|body|string(uuid)|true|The ID of the account that you want to top up.|
|» amount|body|number(double)|true|The amount with which you want to top up the account.|
|» currency|body|[Currency](#schemacurrency)|true|The currency of the account that you want to top up.|
|» reference|body|string|false|A short description for your top up.|
|» state|body|string|false|The state to which you want to set the top-up transaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|pending|
|» state|completed|
|» state|reverted|
|» state|failed|

> Example responses

> 200 Response

```json
{
  "id": "330953b8-b089-4cfd-9f03-e88173d64248",
  "state": "completed",
  "created_at": "2023-01-23T08:39:35.811005Z",
  "completed_at": "2023-01-23T08:39:35.811005Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="simulate-an-account-top-up-sandbox-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the top-up state|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="simulate-an-account-top-up-sandbox-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the account that was topped up.|
|state|string|true|none|The state of the top-up transaction.|
|created_at|string(date-time)|true|none|The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|completed|
|state|reverted|
|state|failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-teams">Teams</h1>

Team management: invite, retrieve, update, suspend, and delete team members, and manage their roles.
Manage departments, assign team members to departments and managers.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members) and [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

## Retrieve a list of team members

<a id="opIdgetTeamMembers"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team-members`

Get information about all the team members of your business.

The results are paginated and sorted by the `created_at` date in reverse chronological order.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="retrieve-a-list-of-team-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_before|query|string(date-time)|false|Retrieves team members with `created_at` < `created_before`.<br>The default value is the current date and time at which you are calling the endpoint.<br><br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|number(integer)|false|The maximum number of team members returned per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last team member returned in the previous response as the value for `created_before`.|

> Example responses

> 200 Response

```json
[
  {
    "email": "john.doe@example.com",
    "id": "76969b71-a123-42dc-b874-a34688d7bba4",
    "role_id": "owner",
    "state": "active",
    "first_name": "John",
    "last_name": "Doe",
    "created_at": "2022-09-07T09:19:31.592368Z",
    "updated_at": "2022-09-07T09:21:24.346670Z"
  },
  {
    "email": "john.smith@example.com",
    "id": "168922e1-594f-4ca0-93b2-56b742f3936b",
    "role_id": "024abb3d-06da-4701-9254-dfcc3da38385",
    "state": "active",
    "created_at": "2022-09-07T09:19:32.592368Z",
    "updated_at": "2022-09-07T09:21:25.346670Z",
    "department_id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c",
    "manager_id": "76969b71-a123-42dc-b874-a34688d7bba4"
  }
]
```

> 400 Response

```json
{
  "error_id": "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
  "code": 2101,
  "message": "Parameter limit must be a valid integer in range: [1, 1000]"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-team-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about team members of the business|Inline|
|400|Bad Request|Bad pagination parameters|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-team-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamMember](#schemateammember)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Invite a new member to your business

<a id="opIdinviteTeamMember"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "john.smith@example.com",
    "role_id": "0098ac28-b92f-435e-a3a2-2829d3918dfb"
  }'
```

`POST /team-members`

Invite a new member to your business account.

When you invite a new team member to your business account, an invitation is sent to their email address that you provided in this request.
To join your business account, the new team member has to accept this invitation.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

> Body parameter

```json
{
  "email": "john.smith@example.com",
  "role_id": "0098ac28-b92f-435e-a3a2-2829d3918dfb"
}
```

<h3 id="invite-a-new-member-to-your-business-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string(email)|true|The email address of the invited member.|
|» role_id|body|string|true|The ID of the [role](https://developer.revolut.com/docs/api/business#get-roles) to assign to the new member.|

> Example responses

> 201 Response

```json
{
  "email": "john.smith@example.com",
  "id": "76969b71-a123-42dc-b874-a34688d7bba4",
  "role_id": "0098ac28-b92f-435e-a3a2-2829d3918dfb",
  "created_at": "2022-09-07T09:19:31.592368Z",
  "updated_at": "2022-09-07T09:21:24.346670Z"
}
```

> 400 Response

```json
{
  "error_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "code": 3053,
  "message": "Business role 0098ac28-b92f-435e-a3a2-2829d3918dfb not found"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 422 Response

```json
{
  "error_id": "6a577522-c02c-a59b-b43f-2169bf4feb21",
  "code": 33005,
  "message": "Team member with given email has already been invited"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="invite-a-new-member-to-your-business-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Information about the new member|Inline|
|400|Bad Request|Bad request, for example, invalid role ID or invalid email address provided|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Team member with the given email cannot be invited|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="invite-a-new-member-to-your-business-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address of the invited member.|
|id|string|true|none|The ID of the invited member.|
|role_id|string|true|none|The ID of the [role](https://developer.revolut.com/docs/api/business#get-roles) assigned to the member.|
|created_at|string(date-time)|true|none|The date and time when the member was created.|
|updated_at|string(date-time)|true|none|The date and time when the member was last updated.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a team member

<a id="opIdgetTeamMemberById"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team-members/{team_member_id}`

Get information about a specific team member by their ID.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="retrieve-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "76969b71-a123-42dc-b874-a34688d7bba4",
  "email": "dana.white@example.com",
  "role_id": "admin",
  "state": "active",
  "created_at": "2026-07-02T12:01:37.605141Z",
  "updated_at": "2026-07-02T12:06:29.234986Z",
  "first_name": "Dana",
  "last_name": "White"
}
```

> 400 Response

```json
{
  "error_id": "6a5e4243-6a9c-a966-9800-06a73f092fc7",
  "code": 2101,
  "message": "Path parameter 'teamMemberId' must be a valid UUID"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "2601eb7c-6569-42b0-8dc1-dac520229a19",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Team member details|[TeamMember](#schemateammember)|
|400|Bad Request|Invalid path parameter|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member doesn't exist.<br>This can happen when, for example, the team member has been deleted, or the provided team member ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a team member

<a id="opIddeleteTeamMember"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /team-members/{team_member_id}`

Delete a specific member of your team.

:::note
This action does not delete the person’s Revolut Business user account – it only removes them from your team.
They will lose access to your Revolut Business account and team but can still log in to Revolut Business.
Their user account will remain linked to any other teams and accounts it’s associated with.
:::

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="delete-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to delete.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "2601eb7c-6569-42b0-8dc1-dac520229a19",
  "code": 3006,
  "message": "User not found: 76969b71-a123-42dc-b874-a34688d7bba4"
}
```

> 422 Response

```json
{
  "error_id": "86d3f68c-2086-403f-8a73-cf6efb0cecd7",
  "code": 3547,
  "message": "Cannot modify owner"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Team member was deleted|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to delete doesn't exist.<br>This can happen when, for example, the team member has already been deleted, or the provided team member ID is incorrect.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Cannot modify owner|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Assign a department to a team member

<a id="opIdassignDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/department \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "department_id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c"
  }'
```

`PUT /team-members/{team_member_id}/department`

Assign a department to a specific team member.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members) and [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

> Body parameter

```json
{
  "department_id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c"
}
```

<h3 id="assign-a-department-to-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to assign the department to.|
|body|body|object|true|none|
|» department_id|body|string(uuid)|true|The ID of the department to assign to the team member.|

> Example responses

> 400 Response

```json
{
  "error_id": "f3ef4ce5-9248-4918-97c3-df576a2bec1d",
  "code": 2101,
  "message": "Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "2601eb7c-6569-42b0-8dc1-dac520229a19",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="assign-a-department-to-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Department was assigned to the team member.|None|
|400|Bad Request|Bad request<br><br>Returned when the specified department does not exist.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Remove department from a team member

<a id="opIdunassignDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/department \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /team-members/{team_member_id}/department`

Remove the department assignment from a specific team member.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="remove-department-from-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to remove the department from.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "2601eb7c-6569-42b0-8dc1-dac520229a19",
  "code": 3006,
  "message": "Team member with id d1199d76-572f-4837-8a0b-5d527a97934b not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-department-from-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Department was unassigned from the team member.|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Assign a manager to a team member

<a id="opIdassignManager"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/manager \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "manager_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  }'
```

`PUT /team-members/{team_member_id}/manager`

Assign a manager to a specific team member.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

> Body parameter

```json
{
  "manager_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

<h3 id="assign-a-manager-to-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to assign the manager to.|
|body|body|object|true|none|
|» manager_id|body|string(uuid)|true|The ID of the manager to assign to the team member.|

> Example responses

> 400 Response

```json
{
  "error_id": "e353844c-cde2-4dd6-94a4-13fab4f0d2b7",
  "code": 2101,
  "message": "Manager with id a1b2c3d4-e5f6-7890-abcd-ef1234567890 not found"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "dc32fe7f-4118-4f91-bbfc-7f756195b71d",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="assign-a-manager-to-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Manager was assigned to the team member.|None|
|400|Bad Request|Bad request<br><br>Returned when the specified manager does not exist.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Remove manager from a team member

<a id="opIdunassignManager"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/manager \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /team-members/{team_member_id}/manager`

Remove the manager assignment from a specific team member.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="remove-manager-from-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to remove the manager from.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "816b404e-9ccb-456d-a087-68e060031d74",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-manager-from-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Manager was unassigned from the team member.|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a team member's role

<a id="opIdupdateTeamMemberRole"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/role \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role_id": "a40b6121-350b-4d2e-9ba1-9dab61a18d46"
  }'
```

`PUT /team-members/{team_member_id}/role`

Update the role assigned to a specific team member.

:::note
You cannot modify the business owner or assign the owner role to another team member.
:::

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

> Body parameter

```json
{
  "role_id": "a40b6121-350b-4d2e-9ba1-9dab61a18d46"
}
```

<h3 id="update-a-team-members-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member whose role to update.|
|body|body|object|true|none|
|» role_id|body|string|true|The ID of the role to assign to the team member.<br><br>For default roles (such as `Owner`, `Admin`, `Member`), the ID is the same as the role name.<br>For custom roles, use the UUID returned by the [`GET /roles` operation](#get-roles).|

> Example responses

> 400 Response

```json
{
  "error_id": "87524a16-6cb3-4f76-9535-133ebfc68134",
  "code": 2101,
  "message": "Role with id a40b6121-350b-4d2e-9ba1-9dab61a18d46 not found"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "f4df1fa0-9582-44f1-bd07-d63ef2cce9a7",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> 422 Response

```json
{
  "error_id": "86d3f68c-2086-403f-8a73-cf6efb0cecd7",
  "code": 3547,
  "message": "Cannot modify owner"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-team-members-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Role was updated.|None|
|400|Bad Request|Bad request<br><br>Returned when the specified role ID does not exist or does not belong to this business.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Cannot modify owner<br><br>Returned when you're trying to modify the business owner or assign the owner role to another team member.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Suspend a team member

<a id="opIdsuspendTeamMember"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/suspend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /team-members/{team_member_id}/suspend`

Suspend a specific team member, preventing them from accessing the business.

To restore access, use the [Unsuspend a team member](#unsuspend-a-team-member) operation.

:::note
You cannot suspend the business owner.
:::

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="suspend-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to suspend.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "0d493577-2918-4de0-8484-414d87ed7c17",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> 422 Response

```json
{
  "error_id": "5e830574-32db-4854-b17d-7c3fbc2db11d",
  "code": 3547,
  "message": "Cannot modify owner"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="suspend-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Team member was suspended.|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to suspend doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity<br><br>Returned when:<br>- You're trying to suspend the business owner.<br>- The team member has a pending invitation (they haven't accepted it yet).|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Unsuspend a team member

<a id="opIdunsuspendTeamMember"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/team-members/76969b71-a123-42dc-b874-a34688d7bba4/unsuspend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /team-members/{team_member_id}/unsuspend`

Unsuspend a [suspended](#suspend-a-team-member) team member, restoring their access to the business.

:::note
You cannot unsuspend the business owner (the owner cannot be suspended).
:::

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="unsuspend-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_member_id|path|string(uuid)|true|The ID of the team member to unsuspend.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "4686c3a2-8b42-42a3-b6d8-23448696b36b",
  "code": 3006,
  "message": "Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found"
}
```

> 422 Response

```json
{
  "error_id": "89030a00-0aaf-4f8e-b578-f1ca62062c08",
  "code": 3547,
  "message": "Cannot modify owner"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="unsuspend-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Team member was unsuspended.|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the team member that you're trying to unsuspend doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|422|Unprocessable Entity|Unprocessable entity<br><br>Returned when:<br>- You're trying to unsuspend the business owner (the owner cannot be suspended).<br>- The team member has a pending invitation (they haven't accepted it yet).|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve team roles

<a id="opIdgetRoles"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /roles`

Get the list of roles for your business.

The results are paginated and sorted by the `created_at` date in reverse chronological order.

For more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).

<h3 id="retrieve-team-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|created_before|query|string(date-time)|false|Retrieves roles with `created_at` < `created_before`.<br>The default value is the current date and time at which you are calling the endpoint.<br><br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|limit|query|number(integer)|false|The maximum number of roles returned per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last role returned in the previous response as the value for `created_before`.|

> Example responses

> 200 Response

```json
[
  {
    "id": "owner",
    "name": "Owner",
    "created_at": "2023-09-07T09:21:12.962303Z",
    "updated_at": "2023-09-07T09:21:12.962303Z"
  },
  {
    "id": "member",
    "name": "Member",
    "created_at": "2023-09-07T09:21:12.962303Z",
    "updated_at": "2023-09-07T09:21:12.962303Z"
  },
  {
    "id": "viewer",
    "name": "Viewer",
    "created_at": "2023-09-07T09:21:12.962303Z",
    "updated_at": "2023-09-07T09:21:12.962303Z"
  },
  {
    "id": "a40b6121-350b-4d2e-9ba1-9dab61a18d46",
    "name": "Example custom role",
    "created_at": "2023-09-07T09:21:12.963143Z",
    "updated_at": "2023-09-07T09:21:12.963143Z"
  }
]
```

> 400 Response

```json
{
  "error_id": "ec4bef87-0141-4b5e-aca8-724988661e0e",
  "code": 2101,
  "message": "Query parameter 'limit' must be at most 1000"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-team-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about roles of the business|Inline|
|400|Bad Request|Bad pagination parameters|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-team-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Role](#schemarole)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of departments

<a id="opIdgetDepartments"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/departments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /departments`

Get a paginated list of all departments in your business.

For more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

<h3 id="retrieve-a-list-of-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number(integer)|false|The maximum number of departments returned per page.<br><br>To get to the next page, use the `next_page_token` from the previous response.|
|page_token|query|[PageToken](#schemapagetoken)|false|none|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c",
      "name": "Engineering",
      "created_at": "2026-06-15T10:30:00.000000Z",
      "updated_at": "2026-06-15T10:30:00.000000Z"
    },
    {
      "id": "c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f",
      "name": "Finance",
      "created_at": "2026-06-15T10:31:00.000000Z",
      "updated_at": "2026-06-15T10:31:00.000000Z"
    }
  ],
  "next_page_token": "eyJwYWdlIjoyfQ"
}
```

> 400 Response

```json
{
  "error_id": "c2b74bf6-56b6-4d3d-92b3-0d2c5642be39",
  "code": 2101,
  "message": "Query parameter 'limit' must be an integer"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of departments.|Inline|
|400|Bad Request|Bad pagination parameters<br><br>Returned when the pagination parameters are invalid.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="retrieve-a-list-of-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[[Department](#schemadepartment)]|true|none|none|
|next_page_token|string|false|none|Token to fetch the next page.<br><br>Omitted when there are no more results.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a department

<a id="opIdcreateDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/departments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Engineering"
  }'
```

`POST /departments`

Create a new department in your business.

For more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

> Body parameter

```json
{
  "name": "Engineering"
}
```

<h3 id="create-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|The name of the department.|

> Example responses

> 201 Response

```json
{
  "id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c"
}
```

> 400 Response

```json
{
  "error_id": "aa1c8231-f10a-4256-93b6-f540ef6eba01",
  "code": 2101,
  "message": "'name' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 409 Response

```json
{
  "error_id": "46a05085-ac3f-4a0c-bf37-204c0d645bde",
  "code": 3406,
  "message": "Department with this name already exists"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Department created.|Inline|
|400|Bad Request|Bad request<br><br>Returned when the request body is invalid.<br>For example, when the `name` field is missing or exceeds 100 characters.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Returned when a department with the given name already exists.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<h3 id="create-a-department-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the created department.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a department

<a id="opIdgetDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/departments/9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /departments/{department_id}`

Get details of a specific department by its ID.

For more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

<h3 id="retrieve-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|department_id|path|string(uuid)|true|The ID of the department to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c",
  "name": "Engineering",
  "created_at": "2026-06-15T10:30:00.000000Z",
  "updated_at": "2026-06-15T10:30:00.000000Z"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "d5d7a8a7-d967-4a69-8359-892b1ce22157",
  "code": 3006,
  "message": "Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the department.|[Department](#schemadepartment)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the department that you're trying to retrieve doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a department

<a id="opIddeleteDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/departments/9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /departments/{department_id}`

Delete a specific department from your business.

:::note
Deleting a department does not delete the team members assigned to it.
The department assignment is simply removed from the team members.
:::

For more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

<h3 id="delete-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|department_id|path|string(uuid)|true|The ID of the department to delete.|

> Example responses

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "f3b8f47d-2e34-4205-a5fb-64d219ba13d6",
  "code": 3006,
  "message": "Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Department was deleted.|None|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the department that you're trying to delete doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a department

<a id="opIdupdateDepartment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/departments/9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Platform Engineering"
  }'
```

`PATCH /departments/{department_id}`

Update the name of a specific department.

For more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).

> Body parameter

```json
{
  "name": "Platform Engineering"
}
```

<h3 id="update-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|department_id|path|string(uuid)|true|The ID of the department to update.|
|body|body|object|true|none|
|» name|body|string|true|The new name for the department.|

> Example responses

> 400 Response

```json
{
  "error_id": "c9d3b204-3d45-4e6f-0a7b-8c9d0e1f2a3b",
  "code": 2101,
  "message": "'name' is required"
}
```

> 401 Response

```json
{
  "error_id": "69bb3be2-24b7-afe7-8c69-c9f26aa37a69",
  "code": 1000,
  "message": "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs."
}
```

> 403 Response

```json
{
  "error_id": "c5deadcc-1934-4438-818a-3c7ca1e6c01c",
  "code": 9002,
  "message": "This action is forbidden"
}
```

> 404 Response

```json
{
  "error_id": "994fcef2-cb26-4c6a-8f2f-d784d9cf5097",
  "code": 3006,
  "message": "Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found"
}
```

> 409 Response

```json
{
  "error_id": "0ce741cc-48e5-43ae-aada-44aa07f44e67",
  "code": 3406,
  "message": "Department with this name already exists"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Department was updated.|None|
|400|Bad Request|Bad request<br><br>Returned when the request body is invalid.<br>For example, when the `name` field is missing or exceeds 100 characters.|[ErrorWithId](#schemaerrorwithid)|
|401|Unauthorized|Unauthorized – authentication credentials are missing or invalid<br><br>Returned when the request was not fulfilled because authentication has failed or has not been provided.|[ErrorWithId](#schemaerrorwithid)|
|403|Forbidden|Action forbidden - insufficient permissions to perform this action<br><br>Returned, for example, when you don't have permissions necessary to perform this action.|[ErrorWithId](#schemaerrorwithid)|
|404|Not Found|Not found<br><br>Returned when the department that you're trying to update doesn't exist.|[ErrorWithId](#schemaerrorwithid)|
|409|Conflict|Conflict<br><br>Returned when a department with the given name already exists.|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-transactions">Transactions</h1>

Get the details of your transactions.

:::note
An incoming or outgoing payment is represented as a transaction.
:::

For more information, see the guides: [Retrieve transactions](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions).

## Retrieve a list of transactions

<a id="opIdgetTransactions"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

Retrieve the historical transactions based on the provided query criteria.

The transactions are sorted by the `created_at` date in reverse chronological order, and they're **paginated**. 
The maximum number of transactions returned per page is specified by the `count` parameter. 
To get the next page of results, make a new request and use the `created_at` date from the last item of the previous page as the value for the `to` parameter.

:::note
The API returns a maximum of 1,000 transactions per request.
:::

For more details, see the guides: [Retrieve transactions](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions).

<h3 id="retrieve-a-list-of-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string(date-time or date)|false|The date and time you retrieve the historical transactions from, including this date-time.<br>Corresponds to the `created_at` value of the transaction.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>Used also for pagination.<br>To get back to the previous page of results, make a new request and use the `created_at` date from the first item of the current page as the value for the `from` parameter.|
|to|query|string(date-time or date)|false|The date and time you retrieve the historical transactions to, excluding this date-time. <br>Corresponds to the `created_at` value of the transaction.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>The default value is the date and time at which you're calling the endpoint.<br><br>Used also for pagination.<br>To get the next page of results, make a new request and use the `created_at` date from the last item of the previous (current) page as the value for the `to` parameter.|
|account|query|string(uuid)|false|The ID of the account|
|count|query|integer|false|The maximum number of the historical transactions to retrieve per page.<br><br>To get the next page of results, make a new request and use the `created_at` date from the last item of the previous page as the value for the `to` parameter.|
|type|query|[TransactionType](#schematransactiontype)|false|The type of the historical transactions to retrieve.|
|request_id|query|string|false|The request ID provided when the transaction was created.<br>Lets you filter transactions related to that ID.<br><br>When provided, the `from` query parameter is also required, and the search interval must not exceed 14 days.<br>For older transactions, adjust the `to` parameter as well.|
|state|query|[string]|false|The transaction [state(s)](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions#transaction-states) to filter by.<br><br>To specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|atm|
|type|card_payment|
|type|card_refund|
|type|card_chargeback|
|type|card_credit|
|type|charge|
|type|charge_refund|
|type|exchange|
|type|transfer|
|type|loan|
|type|fee|
|type|refund|
|type|topup|
|type|topup_return|
|type|tax|
|type|tax_refund|
|type|rev_payment|
|state|created|
|state|pending|
|state|completed|
|state|declined|
|state|failed|
|state|reverted|

> Example responses

> 200 Response

```json
[
  {
    "id": "630f9890-95e3-add1-be4a-95f126988221",
    "type": "transfer",
    "state": "pending",
    "request_id": "invoice00912345",
    "created_at": "2024-08-31T17:21:20.364171Z",
    "updated_at": "2024-08-31T17:21:20.364171Z",
    "reference": "invoice00912345",
    "legs": [
      {
        "leg_id": "630f9890-95e3-add1-0000-95f1269f0000",
        "account_id": "812fff9a-3b0c-4ad1-b41a-cc60899d9900",
        "counterparty": {
          "account_type": "revolut",
          "account_id": "e0af9f24-504c-4c5d-bd1d-07edf9f49876"
        },
        "amount": -1.16,
        "currency": "EUR",
        "bill_amount": -1,
        "bill_currency": "GBP",
        "description": "To John Doe"
      }
    ]
  },
  {
    "id": "640c2b97-aaaa-1234-aaaa-c47a165c2e7e",
    "type": "card_payment",
    "state": "completed",
    "request_id": "REVP:8988a9a0-aaaa-1234-aaaa-5bcc66d938bf",
    "created_at": "2024-03-11T07:19:51.302559Z",
    "updated_at": "2024-03-12T02:13:36.842322Z",
    "completed_at": "2024-03-12T02:13:36.836595Z",
    "merchant": {
      "name": "Acme Corp.",
      "full_name": "ACME*1234MN1HA2",
      "city": "New York",
      "category_code": "7311",
      "country": "USA"
    },
    "legs": [
      {
        "leg_id": "640c2b97-aaaa-1234-aaaa-c47a165c2e7e",
        "account_id": "92e43866-aaaa-1234-aaaa-6e31dd23f024",
        "amount": -47.8,
        "fee": 0.66,
        "currency": "AED",
        "bill_amount": -13,
        "bill_currency": "USD",
        "description": "Acm *1234mn1ha2",
        "balance": 7.74
      }
    ],
    "card": {
      "id": "2b1a31bc-4795-4f95-b939-ae9cf911dc6e",
      "card_number": "516760******1234",
      "first_name": "John",
      "last_name": "Smith",
      "phone": "+12412341234"
    },
    "auth_code": "224466"
  },
  {
    "id": "6886001b-c4a4-4920-912b-c9d7d2575bf7",
    "type": "card_payment",
    "state": "completed",
    "request_id": "REVP:5b3dc80d-f77b-4073-b245-d05f0acd348f",
    "created_at": "2025-09-11T07:19:51.302559Z",
    "updated_at": "2025-09-12T02:13:36.842322Z",
    "completed_at": "2025-03-12T02:13:36.836595Z",
    "merchant": {
      "name": "Alfa",
      "city": "Paris",
      "category_code": "7311",
      "country": "FRA"
    },
    "legs": [
      {
        "leg_id": "0e82681d-10db-40b7-b6c8-f99c595f1c82",
        "account_id": "5e85a129-74c9-4714-bbd2-d762b42b15fb",
        "amount": -153.32,
        "fee": 0,
        "currency": "EUR",
        "description": "Al 1234abcxyz0",
        "balance": 3210.43
      }
    ],
    "card": {
      "id": "12d6d4c2-288b-4670-8297-444720bd811b",
      "card_number": "456230******1433",
      "references": [
        {
          "name": "PNR",
          "value": "RT12345"
        },
        {
          "name": "Traveller",
          "value": "John Smith"
        }
      ]
    },
    "auth_code": "224466"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of historical transactions retrieved|[Transactions](#schematransactions)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a transaction

<a id="opIdgetTransaction"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/transaction/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transaction/{id}`

Retrieve the details of a specific transaction by the transaction's ID.
The details can include, for example, cardholder details for card payments.

:::tip [Retrieve by request_id instead]
Alternatively, you can retrieve a transaction by the **request ID** that was provided for this transaction at the time of its creation, for example, when you [created a payment](https://developer.revolut.com/docs/api/business#create-payment).

To do that, use the `GET /transactions` endpoint to [retrieve a list of transactions](https://developer.revolut.com/docs/api/business#get-transactions) and provide the `request_id` and appropriate `from`/`to` values as filters.
:::

For more details, see the guides: [Retrieve transactions](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions).

<h3 id="retrieve-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique ID of the transaction.<br><br>:::warning [Request ID deprecation]<br>If `id_type=request_id` is provided, set this field to the request ID from payment creation instead of the transaction ID.<br><br>This behavior is deprecated and will be removed in a future release.<br>Use [`GET /transactions`](https://developer.revolut.com/docs/api/business#get-transactions) to retrieve transactions by request ID.<br>:::|
|id_type|query|string|false|**Deprecated.** The type of ID to retrieve the transaction by.<br><br>:::warning [Deprecated]<br>This field is now deprecated and will be removed in a future release.<br><br>To retrieve transactions by their unique transaction ID, use this endpoint.<br>To retrieve transactions by request ID, use the [`GET /transactions`](https://developer.revolut.com/docs/api/business#get-transactions) endpoint instead.<br>:::|

#### Enumerated Values

|Parameter|Value|
|---|---|
|id_type|request_id|

> Example responses

> 200 Response

```json
{
  "id": "640dc0b7-1234-aaaa-1234-92ac4de1dacd",
  "type": "exchange",
  "state": "completed",
  "request_id": "d8f041ab-1234-aaaa-1234-78b6a0b2801f",
  "created_at": "2023-03-12T12:08:07.833414Z",
  "updated_at": "2023-03-12T12:08:07.833414Z",
  "completed_at": "2023-03-12T12:08:07.833705Z",
  "legs": [
    {
      "leg_id": "640dc0a7-aaaa-a5b5-aaaa-92ac4de1dacd",
      "account_id": "0d1848dc-aaaa-4a9a-aaaa-cae53cbd4baf",
      "amount": -1,
      "currency": "GBP",
      "bill_amount": -8.39,
      "bill_currency": "DKK",
      "description": "Exchanged to DKK",
      "balance": 8.74
    },
    {
      "leg_id": "640dc0a7-aaaa-a5b5-aaaa-92ac4de1dacd",
      "account_id": "246bc9de-aaaa-4f86-aaaa-4d291a5d0390",
      "amount": 8.39,
      "fee": 0.08,
      "currency": "DKK",
      "description": "Exchanged from GBP Main",
      "balance": 19.33
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about a specific transaction|[Transaction](#schematransaction)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-transfers">Transfers</h1>

Move funds in the same currency between accounts of your business, or make payments to your counterparties.

For more details, see the guides: [Send money](https://developer.revolut.com/docs/guides/manage-accounts/transfers/send-money).

## Create a transfer to another account or card

<a id="opIdcreatePayment"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/pay \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request_id": "A1pH4num3ric",
    "account_id": "af98333c-ea53-482b-93c2-1fa5e4eae671",
    "receiver": {
      "counterparty_id": "49c6a48b-6b58-40a0-b974-0b8c4888c8a7",
      "account_id": "9116f03a-c074-4585-b261-18a706b3768b"
    },
    "amount": 10,
    "charge_bearer": "shared",
    "currency": "EUR",
    "reference": "To John Doe"
  }'
```

`POST /pay`

Make a payment to a counterparty. You can choose either a bank transfer or a card transfer. The resulting transaction has the type `transfer`.

If you make the payment to another Revolut account, either business or personal, the transaction is executed instantly.

If the counterparty has multiple payment methods available, for example, 2 accounts, or 1 account and 1 card, you **must specify the account or card** to which you want to transfer the money (`receiver.account_id` or `receiver.card_id` respectively).

For more details, see the guides: [Send money via bank transfer](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers) and [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers).

> Body parameter

```json
{
  "request_id": "A1pH4num3ric",
  "account_id": "af98333c-ea53-482b-93c2-1fa5e4eae671",
  "receiver": {
    "counterparty_id": "49c6a48b-6b58-40a0-b974-0b8c4888c8a7",
    "account_id": "9116f03a-c074-4585-b261-18a706b3768b"
  },
  "amount": 10,
  "charge_bearer": "shared",
  "currency": "EUR",
  "reference": "To John Doe"
}
```

<h3 id="create-a-transfer-to-another-account-or-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionPaymentRequest](#schematransactionpaymentrequest)|true|Create a transfer|
|» request_id|body|string|true|A unique identifier for the transaction, provided by you.  <br>This is used for idempotency to prevent duplicate payments. <br>There are no strict format requirements, but we recommend using UUID v4 values.<br><br>:::tip[Retrying requests safely with idempotency]<br>If you do not receive a response (for example, due to a network error or timeout), you can safely retry the request using the same `request_id`. <br><br>If a transaction with the same `request_id` was already created, the API will not create a duplicate transaction.<br><br>:::warning[Idempotency expiry]<br>Idempotency checks apply only to transactions created **within the last 2 weeks**. <br>Reusing a `request_id` **after this period** may result in a **new transaction being created**.<br>:::|
|» account_id|body|string(uuid)|true|The ID of the account that you send the funds from.|
|» receiver|body|[PaymentReceiver](#schemapaymentreceiver)|true|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|» amount|body|number(double)|true|The amount to transfer.|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» reference|body|string|false|The reference for the payment.<br><br>- For **BRL**/**KRW**/**VND**/**COP**/**LKR**/**CLP**/**NPR** company transfers, and all **INR** transfers:<br>          <br>  This field must specify the commercial invoice number.<br><br>- For other corridors:<br><br>  A piece of text or number you provide to help identify what the payment relates to.<br>  It can be used, for example, for reconciliation or tracking purposes.<br><br>  You might include an invoice number, account or transaction ID, or any other reference meaningful to you.<br><br>If the provided reference is longer than 140 characters, it will be truncated.<br>Note that some recipient banks might truncate the reference even further.|
|» charge_bearer|body|[ChargeBearer](#schemachargebearer)|false|The party to which any transaction fees are charged if the resulting transaction route has associated fees: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br>\| **`prefer_debtor`** \| Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. \|<br><br>:::note<br>Some transactions with fees might not support forced charge bearer selection.<br>If this is the case, the request will return an error.<br>This does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.<br>:::|
|» transfer_reason_code|body|[TransferReasonCode](#schematransferreasoncode)|false|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|
|» exchange_reason_code|body|[ExchangeReasonCode](#schemaexchangereasoncode)|false|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|
|» fiscal_code|body|string|false|Fiscal code of the payer, required for payments to Romanian tax authority beneficiaries (counterparty BIC: `TREZROBUXXX`).<br><br>The business's own tax identification number (TIN) is attached automatically from the business profile.|
|» name_validation_id|body|string(uuid)|false|The identifier returned by a preceding [account name validation (CoP)](https://developer.revolut.com/docs/api/business#validate-account-name) check.<br><br>Pass this to link the CoP check to the payment, preventing rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» charge_bearer|shared|
|» charge_bearer|debtor|
|» charge_bearer|prefer_debtor|

> Example responses

> 200 Response

```json
{
  "id": "630f9a62-e488-a9ce-a2d3-a30kkkke03f0",
  "state": "pending",
  "created_at": "2022-08-31T17:29:06.625613Z"
}
```

> 400 Response

```json
{
  "code": 3020,
  "message": "Duplicate request: 1f0f3850-9627-42de-8ad4-a2c497c37d0b"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-transfer-to-another-account-or-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about the created transfer|[TransferResponse](#schematransferresponse)|
|400|Bad Request|Bad request<br><br>For example:<br>- a duplicate `request_id` is being used<br>- the specified `charge_bearer` is not supported<br>- the exchange reason is required and `exchange_reason_code` is missing<br>- the transfer reason is required and `transfer_reason_code` is missing|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Get an indicative quote for a transfer

<a id="opIdgetIndicativeQuote"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/pay/indicative-quote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "receiver": {
      "counterparty_id": "f7e6d5c4-b3a2-1098-7654-321fedcba098",
      "account_id": "12345678-90ab-cdef-1234-567890abcdef"
    },
    "amount": 100.5,
    "currency": "EUR",
    "charge_bearer": "shared"
  }'
```

`POST /pay/indicative-quote`

Get a non-binding estimate of fees, the exchange rate, and the expected delivery time for a potential [transfer](https://developer.revolut.com/docs/api/business#create-payment).
No money is moved and no resource is created.

The request mirrors the [`/pay` endpoint](https://developer.revolut.com/docs/api/business#create-payment) that is used to initiate a transfer, but it excludes irrelevant fields that do not affect pricing or delivery time, such as the request ID or reference.

If the counterparty has multiple payment methods available, for example, 2 accounts, or 1 account and 1 card, you **must specify the account or card** to which you want to transfer the money (`receiver.account_id` or `receiver.card_id` respectively).
Note that in a single request, you can specify either an account or a card, but not both.

:::note[Sandbox behaviour]
In Sandbox, this feature is only available for testing.
While **incomplete** or **invalid requests** will return production-like error responses, **complete and valid requests** in Sandbox do not return real values and `estimated_arrival` will always return `instant`.
:::

For more details, see the guides: **Check costs and delivery time before paying** section in [Bank transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers#check-costs-and-delivery-time-before-paying) or [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers#check-costs-and-delivery-time-before-paying).

> Body parameter

```json
{
  "account_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "receiver": {
    "counterparty_id": "f7e6d5c4-b3a2-1098-7654-321fedcba098",
    "account_id": "12345678-90ab-cdef-1234-567890abcdef"
  },
  "amount": 100.5,
  "currency": "EUR",
  "charge_bearer": "shared"
}
```

<h3 id="get-an-indicative-quote-for-a-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndicativeQuoteRequest](#schemaindicativequoterequest)|true|Request an indicative quote|
|» account_id|body|string(uuid)|true|The ID of the account from which the transfer will be made.|
|» receiver|body|[PaymentReceiver](#schemapaymentreceiver)|true|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|» amount|body|number(double)|true|The transfer amount in major units.|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» charge_bearer|body|[ChargeBearer](#schemachargebearer)|false|The party to which any transaction fees are charged if the resulting transaction route has associated fees: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br>\| **`prefer_debtor`** \| Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. \|<br><br>:::note<br>Some transactions with fees might not support forced charge bearer selection.<br>If this is the case, the request will return an error.<br>This does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.<br>:::|
|» transfer_reason_code|body|[TransferReasonCode](#schematransferreasoncode)|false|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|
|» exchange_reason_code|body|[ExchangeReasonCode](#schemaexchangereasoncode)|false|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» charge_bearer|shared|
|» charge_bearer|debtor|
|» charge_bearer|prefer_debtor|

> Example responses

> 200 Response

```json
{
  "amount": {
    "amount": 100.5,
    "currency": "EUR"
  },
  "fee": {
    "amount": 20,
    "currency": "GBP",
    "breakdown": {
      "transfer_fee": {
        "amount": 20,
        "currency": "GBP"
      }
    }
  },
  "estimated_total": {
    "amount": 106.3,
    "currency": "GBP"
  },
  "estimated_exchange_rate": "1.16458",
  "estimated_amount_after_exchange": {
    "amount": 86.3,
    "currency": "GBP"
  },
  "estimated_arrival": {
    "date": "2026-05-14",
    "speed": "instant"
  }
}
```

> 400 Response

```json
{
  "error_id": "3bfe9326-87eb-a849-9e35-150de29664dd",
  "code": 2101,
  "message": "Request body is not valid JSON"
}
```

> default Response

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-indicative-quote-for-a-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The expected processing attributes for the potential transfer|[IndicativeQuoteResponse](#schemaindicativequoteresponse)|
|400|Bad Request|Bad request<br><br>For example:<br>- the request is invalid (e.g. malformed body, validation failure)<br>- both `account_id` and `card_id` are provided in `receiver` (only one of these values can be provided in a single request)<br>- the specified `charge_bearer` is not supported<br>- `exchange_reason_code` is required for such a transfer but was not provided in the request<br>- the specified counterparty, account, or card was not found|[ErrorWithId](#schemaerrorwithid)|
|default|Default|Unexpected error|[ErrorWithId](#schemaerrorwithid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Check transfer field requirements

<a id="opIdgetPaymentRequirements"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/pay/fields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "receiver": {
      "counterparty_id": "f7e6d5c4-b3a2-1098-7654-321fedcba098",
      "account_id": "12345678-90ab-cdef-1234-567890abcdef"
    }
  }'
```

`POST /pay/fields`

Retrieve the list of conditionally required or applicable fields for a specific transfer destination together with their constraints.

:::note [Note]
This feature is not available in Sandbox.
:::

When creating a payment via the [`/pay` endpoint](https://developer.revolut.com/docs/api/business#create-payment), certain fields (such as `transfer_reason_code`, `charge_bearer`, or `exchange_reason_code`) become required or applicable depending on the source account, destination corridor, and business profile.
This read-only endpoint allows you to discover these contextual fields dynamically, along with their validation rules and available options.

:::tip
A **destination corridor** is a specific combination of bank country and currency representing a supported payment destination (e.g. GBP to GB, USD to US).
:::

Only the fields relevant to the specific context are returned.
Universally required fields (such as `amount`, `account_id`, `receiver`, and `request_id`) are always required and are intentionally excluded from this response.

For more details, see the guides: **Check transfer field requirements** section in [Bank transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers#check-transfer-field-requirements) or [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers#check-transfer-field-requirements).

> Body parameter

```json
{
  "account_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "receiver": {
    "counterparty_id": "f7e6d5c4-b3a2-1098-7654-321fedcba098",
    "account_id": "12345678-90ab-cdef-1234-567890abcdef"
  }
}
```

<h3 id="check-transfer-field-requirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentRequirementsRequest](#schemapaymentrequirementsrequest)|true|none|
|» account_id|body|string(uuid)|true|The ID of the account from which the transfer will be made.|
|» receiver|body|[PaymentReceiver](#schemapaymentreceiver)|true|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "name": "reference",
      "required": true,
      "validation": {
        "max_length": 140
      }
    },
    {
      "name": "charge_bearer",
      "required": false,
      "options": [
        {
          "value": "shared",
          "default": true
        },
        {
          "value": "debtor"
        },
        {
          "value": "prefer_debtor"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 2101,
  "message": "Invalid request (malformed body, validation failure)"
}
```

> 404 Response

```json
{
  "code": 3006,
  "message": "The specified counterparty, account, or card was not found"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="check-transfer-field-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The applicable and conditionally required fields for the specified transfer destination|[PaymentRequirementsResponse](#schemapaymentrequirementsresponse)|
|400|Bad Request|Bad request<br><br>For example:<br>- the request is invalid (e.g. malformed body, validation failure)<br>- both `account_id` and `card_id` are provided in `receiver` (only one of these values can be provided in a single request)|[Error](#schemaerror)|
|404|Not Found|Not found<br><br>Returned when the specified counterparty, account, or card was not found.|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Move money between your accounts

<a id="opIdcreateTransfer"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "request_id": "129999",
    "source_account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf1234",
    "target_account_id": "ae2e1241-81dd-498d-868e-075484785678",
    "amount": 10,
    "currency": "GBP",
    "reference": "John'\''s transfer"
  }'
```

`POST /transfer`

Move money between the Revolut accounts of the business in the same currency.

The resulting transaction has the type `transfer`.

For more information, see the guides: [Send money](https://developer.revolut.com/docs/guides/manage-accounts/transfers/send-money).

> Body parameter

```json
{
  "request_id": "129999",
  "source_account_id": "2e6de1bf-97ad-478d-aad1-9d7a3cdf1234",
  "target_account_id": "ae2e1241-81dd-498d-868e-075484785678",
  "amount": 10,
  "currency": "GBP",
  "reference": "John's transfer"
}
```

<h3 id="move-money-between-your-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferRequest](#schematransferrequest)|true|Create a transfer|
|» request_id|body|string|true|The ID of the request, provided by you.<br>It helps you identify the transaction in your system.<br><br>:::warning<br>To ensure that a transfer is not processed multiple times if there are network or system errors,<br>the same `request_id` should be used for requests related to the same transfer.<br>:::|
|» source_account_id|body|string(uuid)|true|The ID of the source account that you transfer the funds from.|
|» target_account_id|body|string(uuid)|true|The ID of the target account that you transfer the funds to.|
|» amount|body|number(double)|true|The amount of the funds to be transferred.|
|» currency|body|[Currency](#schemacurrency)|true|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|» reference|body|string|false|The reference for the funds transfer.|

> Example responses

> 200 Response

```json
{
  "id": "630f95f7-a3f9-abf2-b4e4-3f65281234dc",
  "state": "completed",
  "created_at": "2020-11-23T08:39:35.811005Z",
  "completed_at": "2020-11-23T08:39:35.811005Z"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="move-money-between-your-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about the transfer created|[TransferResponse](#schematransferresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Get transfer reasons

<a id="opIdgetTransferReasons"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/transfer-reasons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transfer-reasons`

In order to initiate a transfer in certain currencies and countries, you must provide a transfer reason. 
With this endpoint you can retrieve all transfer reasons available to your business account per country and currency.

After you retrieve the results, use the appropriate reason code in the `transfer_reason_code` field when [making a transfer to a counterparty](https://developer.revolut.com/docs/api/business#create-payment) or [creating a payout link](https://developer.revolut.com/docs/api/business#create-payout-link).

> Example responses

> 200 Response

```json
[
  {
    "country": "IN",
    "currency": "INR",
    "code": "advertising",
    "description": "Advertising"
  },
  {
    "country": "IN",
    "currency": "INR",
    "code": "advisor_fees",
    "description": "Advisor fees"
  },
  {
    "country": "IN",
    "currency": "INR",
    "code": "construction",
    "description": "Construction"
  },
  {
    "country": "IN",
    "currency": "INR",
    "code": "delivery",
    "description": "Delivery"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-transfer-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of transfer reasons|[TransferReasons](#schematransferreasons)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-webhooks-v1-deprecated">Webhooks (v1) (deprecated)</h1>

:::warning
This is the v1 of the Webhooks API. This version is deprecated. For the latest version of the API, see [Webhooks (v2)](https://developer.revolut.com/docs/api/business#tag-webhooks-v2).
:::

A webhook (also called a web callback) allows your system to receive updates about your account to an HTTPS endpoint that you provide. 
When a supported event occurs, a notification is posted via HTTP `POST` method to the specified endpoint. 

If the receiver returns an HTTP error response, Revolut will retry the webhook event two more times.

The following events are supported:

- `TransactionCreated`
- `TransactionStateChanged`

You cannot choose which event type to subscribe to. When you create a webhook, you automatically subscribe to all supported events.

## Retrieve a webhook

<a id="opIdgetWebhookV1"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhook \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhook`

<aside class="warning">
This operation is deprecated
</aside>

Get your webhook URL.

> Example responses

> 200 Response

```json
{
  "url": "https://www.revolut.com"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The existing webhook|[Webhook-v1](#schemawebhook-v1)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Set a webhook

<a id="opIdsetUpWebhook"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhook \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://www.revolut.com"
  }'
```

`POST /webhook`

<aside class="warning">
This operation is deprecated
</aside>

Set up a webhook URL so that event notifications are pushed to the specified URL. Only HTTPS URLs are supported.

> Body parameter

```json
{
  "url": "https://www.revolut.com"
}
```

<h3 id="set-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Webhook-v1](#schemawebhook-v1)|true|URL to set up as a webhook|
|» url|body|string(uri)|true|The valid webhook URL that event notifications are sent to. The supported protocol is `https`.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="set-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The webhook has been set up|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a webhook

<a id="opIddeleteWebhookV1"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhook \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhook`

<aside class="warning">
This operation is deprecated
</aside>

Delete a webhook so that events are not sent to the specified URL any more.

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The webhook has been deleted|None|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

<h1 id="business-api-webhooks-v2">Webhooks (v2)</h1>

:::note
This is the latest version of the Webhooks API, v2. For the previous version of the API, see [Webhooks (v1) (deprecated)](https://developer.revolut.com/docs/api/business#tag-webhooks-v1-deprecated).
:::

A webhook (also called a web callback) allows your system to receive updates about your account to an HTTPS endpoint that you provide.
When a supported event occurs, a notification is posted via HTTP `POST` method to the specified endpoint. 

If the receiver returns an HTTP error response, Revolut will retry the webhook event three more times, each with a 10-minute interval.

The following events are supported:

- `TransactionCreated`
- `TransactionStateChanged`
- `PayoutLinkCreated`
- `PayoutLinkStateChanged`

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks).

## Retrieve a list of webhooks

<a id="opIdgetWebhooks"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Get the list of all your existing webhooks and their details.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-list-of-webhooks).

> Example responses

> 200 Response

```json
[
  {
    "$ref": "#/components/examples/webhookV2BasicSelectedEvents"
  },
  {
    "$ref": "#/components/examples/webhookV2BasicAllEvents"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of all your existing webhooks|[Webhooks](#schemawebhooks)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Create a new webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://www.example.com",
    "events": [
      "TransactionCreated",
      "PayoutLinkCreated"
    ]
  }'
```

`POST /webhooks`

Create a new webhook to receive event notifications to the specified URL. Provide a list of event types that you want to subscribe to and a URL for the webhook.
Only HTTPS URLs are supported.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#create-a-webhook).

> Body parameter

```json
{
  "url": "https://www.example.com",
  "events": [
    "TransactionCreated",
    "PayoutLinkCreated"
  ]
}
```

<h3 id="create-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebhookRequest](#schemacreatewebhookrequest)|true|The webhook to create.|
|» url|body|[Url](#schemaurl)|true|A valid webhook URL to which to send event notifications. The supported protocol is `https`.|
|» events|body|[[WebhookEventType](#schemawebhookeventtype)]|false|A list of event types to subscribe to.<br>If you don't provide it, you're automatically subscribed to the [default event types](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks#default-event-types).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|TransactionCreated|
|» events|TransactionStateChanged|
|» events|PayoutLinkCreated|
|» events|PayoutLinkStateChanged|

> Example responses

> 201 Response

```json
{
  "id": "c6db947e-e9ce-41c2-b445-02e6eb741d21",
  "url": "https://www.example.com",
  "events": [
    "TransactionCreated",
    "PayoutLinkCreated"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "message": "Required 'url' is missing",
  "code": 3000
}
```

> 422 Response

```json
{
  "message": "Owner [ownerId=a3e64c3f-eedd-4487-9ab3-246e23c9ec3e,ownerType=BUSINESS] already has 10 webhooks. Only 10 are allowed.",
  "code": 3352
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The successfully created webhook|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a webhook

<a id="opIdgetWebhook"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}`

Get the information about a specific webhook by ID.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-specific-webhook).

<h3 id="retrieve-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The ID of the webhook to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "c6db947e-e9ce-41c2-b445-02e6eb741d21",
  "url": "https://www.example.com",
  "events": [
    "TransactionCreated",
    "PayoutLinkCreated"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "message": "Something went wrong",
  "code": 2101
}
```

> 404 Response

```json
{
  "message": "Webhook not found",
  "code": 3040
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The information about the webhook|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Delete a webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{webhook_id}`

Delete a specific webhook.

A successful response does not get any content in return.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#delete-a-webhook).

<h3 id="delete-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The ID of the webhook to delete.|

> Example responses

> 404 Response

```json
{
  "message": "Webhook not found",
  "code": 3040
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The webhook has been deleted|None|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Update a webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://www.example.com/"
  }'
```

`PATCH /webhooks/{webhook_id}`

Update an existing webhook. Change the URL to which event notifications are sent or the list of event types to be notified about.

You must specify at least one of these two. The fields that you don't specify are not updated.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#update-a-webhook).

> Body parameter

```json
{
  "url": "https://www.example.com/"
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The ID of the webhook to update.|
|body|body|[UpdateWebhookRequest](#schemaupdatewebhookrequest)|true|The new webhook URL for the given webhook|
|» url|body|[Url](#schemaurl)|false|A valid webhook URL to which to send event notifications. The supported protocol is `https`.|
|» events|body|[[WebhookEventType](#schemawebhookeventtype)]|false|A list of event types to subscribe to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» events|TransactionCreated|
|» events|TransactionStateChanged|
|» events|PayoutLinkCreated|
|» events|PayoutLinkStateChanged|

> Example responses

> 200 Response

```json
{
  "id": "c6db947e-e9ce-41c2-b445-02e6eb741d21",
  "url": "https://www.example.com",
  "events": [
    "TransactionCreated",
    "PayoutLinkCreated"
  ]
}
```

> 400 Response

```json
{
  "message": "url or events must be provided",
  "code": 3000
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The successfully updated webhook|[Webhook-v2-basic](#schemawebhook-v2-basic)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Rotate a webhook signing secret

<a id="opIdrotateWebhookSigningSecret"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/rotate-signing-secret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expiration_period": "PT5H30M"
  }'
```

`POST /webhooks/{webhook_id}/rotate-signing-secret`

Rotate a signing secret for a specific webhook.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#rotate-a-webhook-signing-secret).

> Body parameter

```json
{
  "expiration_period": "PT5H30M"
}
```

<h3 id="rotate-a-webhook-signing-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The ID of the webhook for which to rotate the secret.|
|body|body|[WebhookSigningSecretRotateRequest](#schemawebhooksigningsecretrotaterequest)|true|Webhook signing secret rotation request|
|» expiration_period|body|string(duration)|false|The expiration period for the signing secret in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations). If set, when you rotate the secret, it continues to be valid until the expiration period has passed. Otherwise, on rotation, the secret is invalidated immediately. The maximum value is 7 days.|

> Example responses

> 200 Response

```json
{
  "id": "c6db947e-e9ce-41c2-b445-02e6eb741d21",
  "url": "https://www.example.com",
  "events": [
    "TransactionCreated",
    "PayoutLinkCreated"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

> 400 Response

```json
{
  "message": "Something went wrong",
  "code": 2101
}
```

> 404 Response

```json
{
  "message": "Webhook not found",
  "code": 3040
}
```

> 422 Response

```json
{
  "message": "Webhook bf6c61eb-a4b0-4e0d-afb1-d6d2f3d27a9e can't have more than 3 active signing keys",
  "code": 3355
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="rotate-a-webhook-signing-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The details of the webhook for which you rotated the signing secret|[Webhook-v2](#schemawebhook-v2)|
|400|Bad Request|Bad Request<br><br>Returned, for example, for an incorrect expiration period provided.|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

## Retrieve a list of failed webhook events

<a id="opIdgetFailedWebhookEvents"></a>

> Code samples

```bash
curl https://b2b.revolut.com/api/1.0/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/failed-events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}/failed-events`

Get the list of all your failed webhook events, or use the query parameters to filter the results.

The events are sorted by the `created_at` date in reverse chronological order.

The returned failed events are **paginated**. 
The maximum number of events returned per page is specified by the `limit` parameter.
To get to the next page, make a new request and use the `created_at` date of the last event returned in the previous response.

For more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-list-of-failed-webhook-events).

<h3 id="retrieve-a-list-of-failed-webhook-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The ID of the webhook for which to get the failed events.|
|limit|query|integer|false|The maximum number of events returned per page.<br><br>To get to the next page, make a new request and use the `created_at` date of the last event returned in the previous response as value for `created_before`.|
|created_before|query|string(date-time or date)|false|Retrieves events with `created_at` < `created_before`. <br>Cannot be older than the current date minus 21 days. <br>The default value is the current date and time at which you are calling the endpoint.<br><br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

> Example responses

> 200 Response

```json
[
  {
    "id": "d6d04ec2-2a48-4825-8fba-3603cdacdba7",
    "created_at": "2023-01-26T16:22:21.297570Z",
    "updated_at": "2023-01-26T16:22:21.534872Z",
    "webhook_id": "c8083529-fb91-4de0-a66d-9fc3ccc1da10",
    "webhook_url": "https://www.example.com",
    "payload": {
      "data": {
        "id": "63d2a8bd-8b67-a2de-b1d2-b58ee21d7073",
        "legs": [
          {
            "fee": 0.2,
            "amount": -10,
            "leg_id": "63d2a8bd-8b67-a2de-0000-b58ee21d7073",
            "currency": "GBP",
            "account_id": "05018b0d-e67c-4fec-bea6-415e9da9432c",
            "description": "To Acme Corp",
            "counterparty": {
              "id": "7e18625a-3e6c-4d4f-8429-216c25309a5f",
              "account_id": "ff29e658-f07f-4d81-bc0f-7ad0ff141357",
              "account_type": "external"
            }
          }
        ],
        "type": "transfer",
        "state": "pending",
        "reference": "To John Doe",
        "created_at": "2023-01-26T16:22:21.232551Z",
        "request_id": "6a8b2ad9-d8b9-4348-9207-1c5737ccf11b",
        "updated_at": "2023-01-26T16:22:21.232551Z"
      },
      "event": "TransactionCreated",
      "timestamp": "2023-01-26T16:22:21.230599Z"
    },
    "last_sent_date": "2023-01-26T16:52:21.534798Z"
  },
  {
    "id": "d6d04ec2-2a48-4825-8fba-3603cdacdba7",
    "created_at": "2023-07-22T11:52:21.297570Z",
    "updated_at": "2023-07-22T11:52:21.534872Z",
    "webhook_id": "c8083529-fb91-4de0-a66d-9fc3ccc1da10",
    "webhook_url": "https://www.example.com",
    "payload": {
      "data": {
        "id": "0e1a8d4b-1d1e-457d-9f10-3e7007a82ea8",
        "request_id": "2e2837f5-828d-473f-85e8-5614afd3f8e8",
        "old_state": "active",
        "new_state": "processed"
      },
      "event": "PayoutLinkStateChanged",
      "timestamp": "2023-07-22T12:31:18.534798Z"
    },
    "last_sent_date": "2023-07-22T12:52:21.534798Z"
  }
]
```

> 400 Response

```json
{
  "message": "limit must be between 1 and 1000",
  "code": 2101
}
```

> 404 Response

```json
{
  "message": "Webhook not found",
  "code": 3040
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-failed-webhook-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of all your existing failed webhook events|[WebhookEvents](#schemawebhookevents)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|404|Not Found|Webhook not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AccessToken
</aside>

# Schemas

<h2 id="tocS_AccountingCategoryResponse">AccountingCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingcategoryresponse"></a>
<a id="schema_AccountingCategoryResponse"></a>
<a id="tocSaccountingcategoryresponse"></a>
<a id="tocsaccountingcategoryresponse"></a>

```json
{
  "id": "8d831292-f950-4c5a-83f9-030df8cacd3f",
  "name": "Transportation",
  "code": "305",
  "created_at": "2025-10-20T15:09:24Z",
  "updated_at": "2025-10-20T15:09:24Z",
  "default_tax_rate_id": "2a3520af-e6f7-416c-821e-0e83ffac1dfa"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique ID of the accounting category.|
|name|string|true|none|The name of the accounting category.|
|code|string|false|none|The code of the accounting category.|
|created_at|string(date-time)|true|none|The date and time the accounting category was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the accounting category was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|default_tax_rate_id|string(uuid)|false|none|The ID of the default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) applied to items in this accounting category unless overridden for a specific item.|

<h2 id="tocS_AccountingTaxRate">AccountingTaxRate</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingtaxrate"></a>
<a id="schema_AccountingTaxRate"></a>
<a id="tocSaccountingtaxrate"></a>
<a id="tocsaccountingtaxrate"></a>

```json
{
  "name": "string",
  "percentage": 0
}
```

The tax rate that can be applied to financial records, such as expenses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the tax.|
|percentage|number(double)|false|none|The tax rate percentage applied to the taxable amount. For example, `23` for 23%.|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "balance": 0,
  "currency": "string",
  "state": "active",
  "public": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "account_type": "current"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The account ID.|
|name|string|false|none|The account name.|
|balance|number(double)|true|none|The current balance on the account.|
|currency|[AccountCurrency](#schemaaccountcurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|state|string|true|none|Indicates the state of the account.|
|public|boolean|true|none|Indicates whether the account is visible to other businesses on Revolut.|
|created_at|string(date-time)|true|none|The date and time the account was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the account was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|account_type|string|true|none|The type of the account.<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`current`** \| Standard account for everyday spending and transfers. \|<br>\| **`merchant`** \| Account for receiving payments as a [merchant](https://developer.revolut.com/docs/guides/merchant/introduction), for example from sales, invoices, and payment requests. \|<br>\| **`savings`** \| Savings account, such as a vault or cashback account. \|<br>\| **`credit`** \| Account associated with a credit card. \|<br>\| **`debt`** \| Account holding funds blocked or collected on behalf of a government authority. The account holder can't use these funds, and they contribute to the total negative balance. \|<br>\| **`blocking`** \| Account holding funds temporarily blocked during a compliance review. \|<br>\| **`other`** \| Any account type not covered by the above categories. \||

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|inactive|
|account_type|current|
|account_type|merchant|
|account_type|savings|
|account_type|credit|
|account_type|debt|
|account_type|blocking|
|account_type|other|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "balance": 0,
    "currency": "string",
    "state": "active",
    "public": true,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "account_type": "current"
  }
]
```

<h2 id="tocS_AccountBankDetailsItem">AccountBankDetailsItem</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbankdetailsitem"></a>
<a id="schema_AccountBankDetailsItem"></a>
<a id="tocSaccountbankdetailsitem"></a>
<a id="tocsaccountbankdetailsitem"></a>

```json
{
  "iban": "string",
  "bic": "string",
  "account_no": "string",
  "sort_code": "string",
  "routing_number": "string",
  "beneficiary": "string",
  "beneficiary_address": {
    "street_line1": "Revolut LTD",
    "street_line2": "1 Canada Square",
    "region": "Ontario",
    "city": "London",
    "country": "GB",
    "postcode": "E14 5AB"
  },
  "bank_country": "GB",
  "pooled": true,
  "unique_reference": "string",
  "schemes": [
    "swift"
  ],
  "estimated_time": {
    "unit": "days",
    "min": 1,
    "max": 3
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iban|string|false|none|The IBAN number.|
|bic|string|false|none|The BIC number, also known as SWIFT code.|
|account_no|string|false|none|The account number.|
|sort_code|string|false|none|The sort code of the account.|
|routing_number|string|false|none|The routing number of the account.|
|beneficiary|string|true|none|The name of the counterparty.|
|beneficiary_address|[BeneficiaryAddress](#schemabeneficiaryaddress)|true|none|The address of the counterparty.|
|bank_country|[BankCountryCode](#schemabankcountrycode)|false|none|The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|pooled|boolean|false|none|Indicates whether the account address is pooled or unique.|
|unique_reference|string|false|none|The reference of the pooled account.|
|schemes|[[PaymentSystem](#schemapaymentsystem)]|true|none|The schemes that are available for this currency account.|
|estimated_time|[EstimatedTime](#schemaestimatedtime)|true|none|The estimated time of the inbound transfer of the funds, i.e. when we expect the recipient to receive the transfer.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemes|chaps|
|schemes|bacs|
|schemes|faster_payments|
|schemes|sepa|
|schemes|swift|
|schemes|ach|
|schemes|elixir|
|schemes|sorbnet|
|schemes|nics|
|schemes|rix|
|schemes|sumclearing|

<h2 id="tocS_AccountBankDetailsItems">AccountBankDetailsItems</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbankdetailsitems"></a>
<a id="schema_AccountBankDetailsItems"></a>
<a id="tocSaccountbankdetailsitems"></a>
<a id="tocsaccountbankdetailsitems"></a>

```json
[
  {
    "iban": "string",
    "bic": "string",
    "account_no": "string",
    "sort_code": "string",
    "routing_number": "string",
    "beneficiary": "string",
    "beneficiary_address": {
      "street_line1": "Revolut LTD",
      "street_line2": "1 Canada Square",
      "region": "Ontario",
      "city": "London",
      "country": "GB",
      "postcode": "E14 5AB"
    },
    "bank_country": "GB",
    "pooled": true,
    "unique_reference": "string",
    "schemes": [
      "swift"
    ],
    "estimated_time": {
      "unit": "days",
      "min": 1,
      "max": 3
    }
  }
]
```

Indicates the payment scheme used to execute transactions.

<h2 id="tocS_AccountCurrency">AccountCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcurrency"></a>
<a id="schema_AccountCurrency"></a>
<a id="tocSaccountcurrency"></a>
<a id="tocsaccountcurrency"></a>

```json
"string"
```

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

<h2 id="tocS_AccountNameValidationReasonUK">AccountNameValidationReasonUK</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnamevalidationreasonuk"></a>
<a id="schema_AccountNameValidationReasonUK"></a>
<a id="tocSaccountnamevalidationreasonuk"></a>
<a id="tocsaccountnamevalidationreasonuk"></a>

```json
{
  "type": "uk_cop",
  "code": "close_match"
}
```

A code which explains why a given result was returned, and the service that returned it.
For example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The reason type.<br>Determines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.<br>For UK, the values is: `uk_cop`.|
|code|string|false|none|The reason code.<br>Possible values for UK:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`close_match`** \| The provided name is similar to the account name, the account type is correct. The actual name is returned. \|<br>\| **`individual_account_name_matched`** \| The names match but the counterparty is an individual, not a business. \|<br>\| **`company_account_name_matched`** \| The names match but the counterparty is a business, not an individual. \|<br>\| **`individual_account_close_match`** \| The provided name is similar to the account name, and the account type is incorrect – the counterparty is an individual, not a business. The actual name is returned. \|<br>\| **`company_account_close_match`** \| The provided name is similar to the account name, and the account type is incorrect - the counterparty is a business, not an individual. The actual name is returned. \|<br>\| **`not_matched`** \| The account details don't match the provided values. \|<br>\| **`account_does_not_exist`** \| The account does not exist. \|<br>\| **`account_switched`** \| The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. \|<br>\| **`cannot_be_checked`** \| The account cannot be checked. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|uk_cop|
|type|eu_cop|
|type|ro_cop|
|type|au_cop|
|code|close_match|
|code|individual_account_name_matched|
|code|company_account_name_matched|
|code|individual_account_close_match|
|code|company_account_close_match|
|code|not_matched|
|code|account_does_not_exist|
|code|account_switched|
|code|cannot_be_checked|

<h2 id="tocS_AccountNameValidationReasonAU">AccountNameValidationReasonAU</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnamevalidationreasonau"></a>
<a id="schema_AccountNameValidationReasonAU"></a>
<a id="tocSaccountnamevalidationreasonau"></a>
<a id="tocsaccountnamevalidationreasonau"></a>

```json
{
  "type": "uk_cop",
  "code": "close_match"
}
```

A code which explains why a given result was returned, and the service that returned it.
In some cases, it may provide more details about the result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The reason type.<br>Determines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.<br>For AU, the value is: `au_cop`.|
|code|string|false|none|The reason code.<br>Possible values for AU:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`close_match`** (business accounts): \| The provided name is similar to the account name. The actual name is returned. Mismatched account type is corrected. \|<br>\| **`not_matched`** \| The account details don't match the provided values. \|<br>\| **`account_does_not_exist`** \| The account does not exist. \|<br>\| **`account_switched`** \| The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. \|<br>\| **`cannot_be_checked`** \| The account cannot be checked. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|uk_cop|
|type|eu_cop|
|type|ro_cop|
|type|au_cop|
|code|close_match|
|code|individual_account_name_matched|
|code|company_account_name_matched|
|code|individual_account_close_match|
|code|company_account_close_match|
|code|not_matched|
|code|account_does_not_exist|
|code|account_switched|
|code|cannot_be_checked|

<h2 id="tocS_AccountNameValidationReasonRO">AccountNameValidationReasonRO</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnamevalidationreasonro"></a>
<a id="schema_AccountNameValidationReasonRO"></a>
<a id="tocSaccountnamevalidationreasonro"></a>
<a id="tocsaccountnamevalidationreasonro"></a>

```json
{
  "type": "uk_cop",
  "code": "close_match"
}
```

A code which explains why a given result was returned, and the service that returned it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The reason type.<br>Determines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.<br>For RO, the value is: `ro_cop`.|
|code|string|false|none|The reason code.<br>Possible values for RO:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`cannot_be_checked`** \| The account cannot be checked. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|uk_cop|
|type|eu_cop|
|type|ro_cop|
|type|au_cop|
|code|close_match|
|code|individual_account_name_matched|
|code|company_account_name_matched|
|code|individual_account_close_match|
|code|company_account_close_match|
|code|not_matched|
|code|account_does_not_exist|
|code|account_switched|
|code|cannot_be_checked|

<h2 id="tocS_AccountNameValidationReasonEUR">AccountNameValidationReasonEUR</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnamevalidationreasoneur"></a>
<a id="schema_AccountNameValidationReasonEUR"></a>
<a id="tocSaccountnamevalidationreasoneur"></a>
<a id="tocsaccountnamevalidationreasoneur"></a>

```json
{
  "type": "uk_cop",
  "code": "close_match"
}
```

A code which explains why a given result was returned, and the service that returned it.
For example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The reason type.<br>Determines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.<br>For EUR, the value is: `eu_cop`.|
|code|string|false|none|The reason code.<br>Possible values for EUR:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`close_match`** \| The provided name is similar to the account name. The actual name is returned. \|<br>\| **`not_matched`** \| The account details don't match the provided values. \|<br>\| **`account_does_not_exist`** \| The account does not exist. \|<br>\| **`account_switched`** \| The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. \|<br>\| **`cannot_be_checked`** \| The account cannot be checked. \||

#### Enumerated Values

|Property|Value|
|---|---|
|type|uk_cop|
|type|eu_cop|
|type|ro_cop|
|type|au_cop|
|code|close_match|
|code|individual_account_name_matched|
|code|company_account_name_matched|
|code|individual_account_close_match|
|code|company_account_close_match|
|code|not_matched|
|code|account_does_not_exist|
|code|account_switched|
|code|cannot_be_checked|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
0
```

The amount of money.

<h2 id="tocS_AmountWithCurrency">AmountWithCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaamountwithcurrency"></a>
<a id="schema_AmountWithCurrency"></a>
<a id="tocSamountwithcurrency"></a>
<a id="tocsamountwithcurrency"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|The amount of the transaction.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|

<h2 id="tocS_BankCountryCode">BankCountryCode</h2>
<!-- backwards compatibility -->
<a id="schemabankcountrycode"></a>
<a id="schema_BankCountryCode"></a>
<a id="tocSbankcountrycode"></a>
<a id="tocsbankcountrycode"></a>

```json
"GB"
```

The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.

<h2 id="tocS_BeneficiaryAddress">BeneficiaryAddress</h2>
<!-- backwards compatibility -->
<a id="schemabeneficiaryaddress"></a>
<a id="schema_BeneficiaryAddress"></a>
<a id="tocSbeneficiaryaddress"></a>
<a id="tocsbeneficiaryaddress"></a>

```json
{
  "street_line1": "Revolut LTD",
  "street_line2": "1 Canada Square",
  "region": "Ontario",
  "city": "London",
  "country": "GB",
  "postcode": "E14 5AB"
}
```

The address of the counterparty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line1|string|false|none|Street line 1 information.|
|street_line2|string|false|none|Street line 2 information.|
|region|string|false|none|The name of the region (state or province), for example, Ontario for Canada.|
|city|string|false|none|The name of the city.|
|country|string|true|none|The country of the counterparty, as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|postcode|string|true|none|The postcode of the counterparty address.|

<h2 id="tocS_UpdateCounterpartyPaymentMethodRequest">UpdateCounterpartyPaymentMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecounterpartypaymentmethodrequest"></a>
<a id="schema_UpdateCounterpartyPaymentMethodRequest"></a>
<a id="tocSupdatecounterpartypaymentmethodrequest"></a>
<a id="tocsupdatecounterpartypaymentmethodrequest"></a>

```json
{
  "address": {
    "street_line1": "7 Revolut Street",
    "street_line2": "Floor 3",
    "region": "Greater London",
    "city": "London",
    "country": "GB",
    "postcode": "EC2V 8PH"
  }
}
```

The request body for updating a counterparty's payment method address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[UpdateCounterpartyPaymentMethodAddress](#schemaupdatecounterpartypaymentmethodaddress)|true|none|The updated address for the counterparty's payment method. All required fields must be provided.|

<h2 id="tocS_UpdateCounterpartyPaymentMethodAddress">UpdateCounterpartyPaymentMethodAddress</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecounterpartypaymentmethodaddress"></a>
<a id="schema_UpdateCounterpartyPaymentMethodAddress"></a>
<a id="tocSupdatecounterpartypaymentmethodaddress"></a>
<a id="tocsupdatecounterpartypaymentmethodaddress"></a>

```json
{
  "street_line1": "7 Revolut Street",
  "street_line2": "Floor 3",
  "region": "Greater London",
  "city": "London",
  "country": "GB",
  "postcode": "EC2V 8PH"
}
```

The updated address for the counterparty's payment method. All required fields must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line1|string|true|none|Street line 1 information.|
|street_line2|string|false|none|Street line 2 information.|
|region|string|false|none|The name of the region (state or province), for example, Ontario for Canada.|
|city|string|true|none|The name of the city.|
|country|string|true|none|The country of the counterparty, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|postcode|string|true|none|The postcode of the counterparty address.|

<h2 id="tocS_BusinessMerchantCategory">BusinessMerchantCategory</h2>
<!-- backwards compatibility -->
<a id="schemabusinessmerchantcategory"></a>
<a id="schema_BusinessMerchantCategory"></a>
<a id="tocSbusinessmerchantcategory"></a>
<a id="tocsbusinessmerchantcategory"></a>

```json
"health"
```

<h2 id="tocS_CardInvitationId">CardInvitationId</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationid"></a>
<a id="schema_CardInvitationId"></a>
<a id="tocScardinvitationid"></a>
<a id="tocscardinvitationid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the card invitation.

<h2 id="tocS_CardInvitationState">CardInvitationState</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationstate"></a>
<a id="schema_CardInvitationState"></a>
<a id="tocScardinvitationstate"></a>
<a id="tocscardinvitationstate"></a>

```json
"created"
```

The current state of the card invitation:

| Value | Description |
| --- | --- |
| **`created`** | Invitation has been created but not yet claimed. |
| **`expired`** | Invitation has expired due to expiry date being reached or manual cancellation. |
| **`failed`** | Invitation claim attempt failed. |
| **`redeemed`** | Invitation has been successfully claimed. |

To learn more about card invitation lifecycle, see the guide: [Manage card invitations → Card invitation state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state).

<h2 id="tocS_CardInvitationCreatedAt">CardInvitationCreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcreatedat"></a>
<a id="schema_CardInvitationCreatedAt"></a>
<a id="tocScardinvitationcreatedat"></a>
<a id="tocscardinvitationcreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the card invitation was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_CardInvitationUpdatedAt">CardInvitationUpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationupdatedat"></a>
<a id="schema_CardInvitationUpdatedAt"></a>
<a id="tocScardinvitationupdatedat"></a>
<a id="tocscardinvitationupdatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the card invitation was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_CardInvitationExpiryDate">CardInvitationExpiryDate</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationexpirydate"></a>
<a id="schema_CardInvitationExpiryDate"></a>
<a id="tocScardinvitationexpirydate"></a>
<a id="tocscardinvitationexpirydate"></a>

```json
"2025-10-20T15:09:24Z"
```

The date and time after which this card invitation expires if not claimed or cancelled before then.
Specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
:::note
Only returned for invitations in state `created`.
:::tip
For other states, to find out when a card invitation transitioned to its [final state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state), check the `updated_at` value. 
:::

<h2 id="tocS_CardInvitationCardId">CardInvitationCardId</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcardid"></a>
<a id="schema_CardInvitationCardId"></a>
<a id="tocScardinvitationcardid"></a>
<a id="tocscardinvitationcardid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the card issued after this invitation was claimed. 
:::note
Only returned for invitations in state `redeemed`.
:::

<h2 id="tocS_CardInvitationCreatedHolderId">CardInvitationCreatedHolderId</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcreatedholderid"></a>
<a id="schema_CardInvitationCreatedHolderId"></a>
<a id="tocScardinvitationcreatedholderid"></a>
<a id="tocscardinvitationcreatedholderid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the team member to be assigned as the holder of the card after the invitation is claimed.

<h2 id="tocS_CardInvitationHolderId">CardInvitationHolderId</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationholderid"></a>
<a id="schema_CardInvitationHolderId"></a>
<a id="tocScardinvitationholderid"></a>
<a id="tocscardinvitationholderid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the team member to be assigned as the holder of the card after the invitation is claimed.

:::note
If the team member has been deleted since the invitation was created, the `holder_id` is not returned.
:::

<h2 id="tocS_CardInvitationVirtual">CardInvitationVirtual</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationvirtual"></a>
<a id="schema_CardInvitationVirtual"></a>
<a id="tocScardinvitationvirtual"></a>
<a id="tocscardinvitationvirtual"></a>

```json
true
```

Specifies whether the issued card will be a virtual (`true`) or physical (`false`) one.

<h2 id="tocS_CardInvitationLabel">CardInvitationLabel</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationlabel"></a>
<a id="schema_CardInvitationLabel"></a>
<a id="tocScardinvitationlabel"></a>
<a id="tocscardinvitationlabel"></a>

```json
"string"
```

The label of the card.

<h2 id="tocS_CardInvitationSpendingPeriod">CardInvitationSpendingPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationspendingperiod"></a>
<a id="schema_CardInvitationSpendingPeriod"></a>
<a id="tocScardinvitationspendingperiod"></a>
<a id="tocscardinvitationspendingperiod"></a>

```json
{
  "start_date": "2025-09-26",
  "end_date": "2030-12-31",
  "end_date_action": "lock"
}
```

The controls for the card's spending period.

They specify the dates when the card will become available or unavailable for spending, and define what happens after the end date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date)|false|none|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date|string(date)|false|none|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date_action|string|false|none|The action to take after the end date of the spending period.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|end_date_action|lock|
|end_date_action|terminate|

<h2 id="tocS_CardInvitationCategories">CardInvitationCategories</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcategories"></a>
<a id="schema_CardInvitationCategories"></a>
<a id="tocScardinvitationcategories"></a>
<a id="tocscardinvitationcategories"></a>

```json
[
  "health"
]
```

The list of merchant categories that will be available for card spending.             
If this parameter is not specified, categories are not restricted.

<h2 id="tocS_CardInvitationCountries">CardInvitationCountries</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcountries"></a>
<a id="schema_CardInvitationCountries"></a>
<a id="tocScardinvitationcountries"></a>
<a id="tocscardinvitationcountries"></a>

```json
[
  "GB"
]
```

The list of countries where the team member will be able to use the card.
Specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.

<h2 id="tocS_CardInvitationAccounts">CardInvitationAccounts</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationaccounts"></a>
<a id="schema_CardInvitationAccounts"></a>
<a id="tocScardinvitationaccounts"></a>
<a id="tocscardinvitationaccounts"></a>

```json
[
  "497f6eca-6276-4993-bfeb-53cbbbba6f08"
]
```

The list of accounts that will be linked to the card.

<h2 id="tocS_CardInvitationCreatedResponse">CardInvitationCreatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationcreatedresponse"></a>
<a id="schema_CardInvitationCreatedResponse"></a>
<a id="tocScardinvitationcreatedresponse"></a>
<a id="tocscardinvitationcreatedresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "expiry_date": "2025-10-20T15:09:24Z",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "virtual": true,
  "label": "string",
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardInvitationId](#schemacardinvitationid)|true|none|The ID of the card invitation.|
|state|[CardInvitationState](#schemacardinvitationstate)|true|none|The current state of the card invitation:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| Invitation has been created but not yet claimed. \|<br>\| **`expired`** \| Invitation has expired due to expiry date being reached or manual cancellation. \|<br>\| **`failed`** \| Invitation claim attempt failed. \|<br>\| **`redeemed`** \| Invitation has been successfully claimed. \|<br><br>To learn more about card invitation lifecycle, see the guide: [Manage card invitations → Card invitation state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state).|
|created_at|[CardInvitationCreatedAt](#schemacardinvitationcreatedat)|true|none|The date and time the card invitation was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardInvitationUpdatedAt](#schemacardinvitationupdatedat)|true|none|The date and time the card invitation was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|expiry_date|[CardInvitationExpiryDate](#schemacardinvitationexpirydate)|false|none|The date and time after which this card invitation expires if not claimed or cancelled before then.<br>Specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>:::note<br>Only returned for invitations in state `created`.<br>:::tip<br>For other states, to find out when a card invitation transitioned to its [final state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state), check the `updated_at` value. <br>:::|
|holder_id|[CardInvitationCreatedHolderId](#schemacardinvitationcreatedholderid)|false|none|The ID of the team member to be assigned as the holder of the card after the invitation is claimed.|
|virtual|[CardInvitationVirtual](#schemacardinvitationvirtual)|true|none|Specifies whether the issued card will be a virtual (`true`) or physical (`false`) one.|
|label|[CardInvitationLabel](#schemacardinvitationlabel)|false|none|The label of the card.|
|spending_limits|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|none|none|
|spending_period|[CardInvitationSpendingPeriod](#schemacardinvitationspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card will become available or unavailable for spending, and define what happens after the end date.|
|categories|[CardInvitationCategories](#schemacardinvitationcategories)|false|none|The list of merchant categories that will be available for card spending.             <br>If this parameter is not specified, categories are not restricted.|
|merchant_controls|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|none|The merchant-level controls for card spending.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardInvitationCountries](#schemacardinvitationcountries)|false|none|The list of countries where the team member will be able to use the card.<br>Specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardInvitationAccounts](#schemacardinvitationaccounts)|true|none|The list of accounts that will be linked to the card.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|expired|
|state|failed|
|state|redeemed|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardInvitationUpdatedResponse">CardInvitationUpdatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationupdatedresponse"></a>
<a id="schema_CardInvitationUpdatedResponse"></a>
<a id="tocScardinvitationupdatedresponse"></a>
<a id="tocscardinvitationupdatedresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "expiry_date": "2025-10-20T15:09:24Z",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "virtual": true,
  "label": "string",
  "spend_program": {
    "label": "string"
  },
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardInvitationId](#schemacardinvitationid)|true|none|The ID of the card invitation.|
|state|[CardInvitationState](#schemacardinvitationstate)|true|none|The current state of the card invitation:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| Invitation has been created but not yet claimed. \|<br>\| **`expired`** \| Invitation has expired due to expiry date being reached or manual cancellation. \|<br>\| **`failed`** \| Invitation claim attempt failed. \|<br>\| **`redeemed`** \| Invitation has been successfully claimed. \|<br><br>To learn more about card invitation lifecycle, see the guide: [Manage card invitations → Card invitation state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state).|
|created_at|[CardInvitationCreatedAt](#schemacardinvitationcreatedat)|true|none|The date and time the card invitation was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardInvitationUpdatedAt](#schemacardinvitationupdatedat)|true|none|The date and time the card invitation was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|expiry_date|[CardInvitationExpiryDate](#schemacardinvitationexpirydate)|false|none|The date and time after which this card invitation expires if not claimed or cancelled before then.<br>Specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>:::note<br>Only returned for invitations in state `created`.<br>:::tip<br>For other states, to find out when a card invitation transitioned to its [final state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state), check the `updated_at` value. <br>:::|
|holder_id|[CardInvitationCreatedHolderId](#schemacardinvitationcreatedholderid)|false|none|The ID of the team member to be assigned as the holder of the card after the invitation is claimed.|
|virtual|[CardInvitationVirtual](#schemacardinvitationvirtual)|true|none|Specifies whether the issued card will be a virtual (`true`) or physical (`false`) one.|
|label|[CardInvitationLabel](#schemacardinvitationlabel)|false|none|The label of the card.|
|spend_program|[SpendProgram](#schemaspendprogram)|false|read-only|The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.<br>:::note<br>To use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|spending_limits|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|none|none|
|spending_period|[CardInvitationSpendingPeriod](#schemacardinvitationspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card will become available or unavailable for spending, and define what happens after the end date.|
|categories|[CardInvitationCategories](#schemacardinvitationcategories)|false|none|The list of merchant categories that will be available for card spending.             <br>If this parameter is not specified, categories are not restricted.|
|merchant_controls|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|none|The merchant-level controls for card spending.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardInvitationCountries](#schemacardinvitationcountries)|false|none|The list of countries where the team member will be able to use the card.<br>Specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardInvitationAccounts](#schemacardinvitationaccounts)|true|none|The list of accounts that will be linked to the card.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|expired|
|state|failed|
|state|redeemed|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardInvitationResponse">CardInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationresponse"></a>
<a id="schema_CardInvitationResponse"></a>
<a id="tocScardinvitationresponse"></a>
<a id="tocscardinvitationresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "expiry_date": "2025-10-20T15:09:24Z",
  "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "virtual": true,
  "label": "string",
  "spend_program": {
    "label": "string"
  },
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardInvitationId](#schemacardinvitationid)|true|none|The ID of the card invitation.|
|state|[CardInvitationState](#schemacardinvitationstate)|true|none|The current state of the card invitation:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| Invitation has been created but not yet claimed. \|<br>\| **`expired`** \| Invitation has expired due to expiry date being reached or manual cancellation. \|<br>\| **`failed`** \| Invitation claim attempt failed. \|<br>\| **`redeemed`** \| Invitation has been successfully claimed. \|<br><br>To learn more about card invitation lifecycle, see the guide: [Manage card invitations → Card invitation state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state).|
|created_at|[CardInvitationCreatedAt](#schemacardinvitationcreatedat)|true|none|The date and time the card invitation was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardInvitationUpdatedAt](#schemacardinvitationupdatedat)|true|none|The date and time the card invitation was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|expiry_date|[CardInvitationExpiryDate](#schemacardinvitationexpirydate)|false|none|The date and time after which this card invitation expires if not claimed or cancelled before then.<br>Specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>:::note<br>Only returned for invitations in state `created`.<br>:::tip<br>For other states, to find out when a card invitation transitioned to its [final state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state), check the `updated_at` value. <br>:::|
|card_id|[CardInvitationCardId](#schemacardinvitationcardid)|false|none|The ID of the card issued after this invitation was claimed. <br>:::note<br>Only returned for invitations in state `redeemed`.<br>:::<br>|
|holder_id|[CardInvitationHolderId](#schemacardinvitationholderid)|false|none|The ID of the team member to be assigned as the holder of the card after the invitation is claimed.<br><br>:::note<br>If the team member has been deleted since the invitation was created, the `holder_id` is not returned.<br>:::|
|virtual|[CardInvitationVirtual](#schemacardinvitationvirtual)|true|none|Specifies whether the issued card will be a virtual (`true`) or physical (`false`) one.|
|label|[CardInvitationLabel](#schemacardinvitationlabel)|false|none|The label of the card.|
|spend_program|[SpendProgram](#schemaspendprogram)|false|read-only|The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.<br>:::note<br>To use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|spending_limits|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|none|none|
|spending_period|[CardInvitationSpendingPeriod](#schemacardinvitationspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card will become available or unavailable for spending, and define what happens after the end date.|
|categories|[CardInvitationCategories](#schemacardinvitationcategories)|false|none|The list of merchant categories that will be available for card spending.             <br>If this parameter is not specified, categories are not restricted.|
|merchant_controls|[MerchantControlsSchema](#schemamerchantcontrolsschema)|false|none|The merchant-level controls for card spending.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardInvitationCountries](#schemacardinvitationcountries)|false|none|The list of countries where the team member will be able to use the card.<br>Specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardInvitationAccounts](#schemacardinvitationaccounts)|true|none|The list of accounts that will be linked to the card.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|expired|
|state|failed|
|state|redeemed|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardInvitationsResponse">CardInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardinvitationsresponse"></a>
<a id="schema_CardInvitationsResponse"></a>
<a id="tocScardinvitationsresponse"></a>
<a id="tocscardinvitationsresponse"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "state": "created",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "expiry_date": "2025-10-20T15:09:24Z",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "virtual": true,
    "label": "string",
    "spend_program": {
      "label": "string"
    },
    "spending_limits": {
      "single": {
        "amount": 200.22,
        "currency": "GBP"
      },
      "week": {
        "amount": 200.44,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-09-26",
      "end_date": "2030-12-31",
      "end_date_action": "lock"
    },
    "categories": [
      "health"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    },
    "mcc_controls": {
      "control_type": "allow",
      "mccs": [
        "7033"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }
]
```

A list of card invitations

<h2 id="tocS_CardCreatedResponse">CardCreatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardcreatedresponse"></a>
<a id="schema_CardCreatedResponse"></a>
<a id="tocScardcreatedresponse"></a>
<a id="tocscardcreatedresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "product": {
    "code": "string"
  },
  "virtual": true,
  "last_digits": "string",
  "expiry": "string",
  "label": "string",
  "references": [
    {
      "name": "PNR",
      "value": "RT12345"
    },
    {
      "name": "Traveller",
      "value": "John Smith"
    }
  ],
  "state": "created",
  "can_be_unlocked": true,
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardId](#schemacardid)|true|none|The ID of the card.|
|holder_id|[CardHolderId](#schemacardholderid)|false|none|The ID of the team member who is the holder of the card.<br>If the card belongs to the business, this will be empty.<br><br>For more information, see the guides: [Manage Cards - Create a virtual card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#create-a-virtual-card).|
|contact_ids|[CardContacts](#schemacardcontacts)|false|none|The list of contacts for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).|
|created_at|[CardCreatedAt](#schemacardcreatedat)|true|none|The date and time the card was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardUpdatedAt](#schemacardupdatedat)|true|none|The date and time the card was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|product|[CardProduct](#schemacardproduct)|false|none|The card product offered by the card provider for this card.<br>In other words, the program that the card was issued under.<br><br>:::note<br>This property is only available to travel intermediaries using our travel solution.<br>To use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|virtual|[CardVirtual](#schemacardvirtual)|true|none|Specifies whether the card is virtual (`true`) or physical (`false`).|
|last_digits|[CardLastDigits](#schemacardlastdigits)|true|none|The last 4 digits of the card's PAN.|
|expiry|[CardExpiry](#schemacardexpiry)|true|none|The card expiration date.|
|label|[CardLabel](#schemacardlabel)|false|none|The label of the card.|
|references|[CardReferences](#schemacardreferences)|false|none|References for the card.<br>Up to 5 name-value pairs assigned to the card for tracking.<br><br>:::info<br>Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.<br>:::<br><br>The names must be unique.<br>The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.<br><br>References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).<br>They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present).<br><br>:::note<br>The references recorded on a transaction are those assigned to the card at the time the transaction took place.<br>If the references are amended, they will only be applied to future transactions.<br>Existing transaction are not affected.<br>:::|
|state|[CardState](#schemacardstate)|true|none|The state that the card is in.|
|can_be_unlocked|[CardCanBeUnlocked](#schemacardcanbeunlocked)|false|none|Returned for locked cards (`state=locked`).<br>Indicates whether the card can be [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) manually (via API or in-app).<br>If `true`, you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock the card.<br><br>:::info<br>Cards can be locked for various reasons.<br>For example, a card can be locked by the user, due to spending period settings, or automatically by the system.<br>Only certain types of lock can be lifted manually.<br>:::|
|spending_limits|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|none|none|
|spending_period|[CardSpendingPeriod](#schemacardspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.|
|categories|[CardBusinessMerchantCategories](#schemacardbusinessmerchantcategories)|false|none|The list of merchant categories that are available for card spending. If not specified, categories are not restricted.|
|merchant_controls|[CardMerchantControls](#schemacardmerchantcontrols)|false|none|The merchant-level controls for card spending.<br><br>They block or allow the card to only transact with specific merchants.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardCountries](#schemacardcountries)|false|none|The list of countries where the card can be used, specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardAccounts](#schemacardaccounts)|true|none|The list of linked accounts.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|pending|
|state|active|
|state|frozen|
|state|locked|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardResponse">CardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardresponse"></a>
<a id="schema_CardResponse"></a>
<a id="tocScardresponse"></a>
<a id="tocscardresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "product": {
    "code": "string"
  },
  "virtual": true,
  "last_digits": "string",
  "expiry": "string",
  "label": "string",
  "references": [
    {
      "name": "PNR",
      "value": "RT12345"
    },
    {
      "name": "Traveller",
      "value": "John Smith"
    }
  ],
  "state": "created",
  "can_be_unlocked": true,
  "spend_program": {
    "label": "string"
  },
  "spending_limits": {
    "single": {
      "amount": 200.22,
      "currency": "GBP"
    },
    "week": {
      "amount": 200.44,
      "currency": "GBP"
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardId](#schemacardid)|true|none|The ID of the card.|
|holder_id|[CardHolderId](#schemacardholderid)|false|none|The ID of the team member who is the holder of the card.<br>If the card belongs to the business, this will be empty.<br><br>For more information, see the guides: [Manage Cards - Create a virtual card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#create-a-virtual-card).|
|contact_ids|[CardContacts](#schemacardcontacts)|false|none|The list of contacts for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).|
|created_at|[CardCreatedAt](#schemacardcreatedat)|true|none|The date and time the card was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardUpdatedAt](#schemacardupdatedat)|true|none|The date and time the card was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|product|[CardProduct](#schemacardproduct)|false|none|The card product offered by the card provider for this card.<br>In other words, the program that the card was issued under.<br><br>:::note<br>This property is only available to travel intermediaries using our travel solution.<br>To use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|virtual|[CardVirtual](#schemacardvirtual)|true|none|Specifies whether the card is virtual (`true`) or physical (`false`).|
|last_digits|[CardLastDigits](#schemacardlastdigits)|true|none|The last 4 digits of the card's PAN.|
|expiry|[CardExpiry](#schemacardexpiry)|true|none|The card expiration date.|
|label|[CardLabel](#schemacardlabel)|false|none|The label of the card.|
|references|[CardReferences](#schemacardreferences)|false|none|References for the card.<br>Up to 5 name-value pairs assigned to the card for tracking.<br><br>:::info<br>Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.<br>:::<br><br>The names must be unique.<br>The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.<br><br>References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).<br>They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present).<br><br>:::note<br>The references recorded on a transaction are those assigned to the card at the time the transaction took place.<br>If the references are amended, they will only be applied to future transactions.<br>Existing transaction are not affected.<br>:::|
|state|[CardState](#schemacardstate)|true|none|The state that the card is in.<br><br>Possible values:<br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`active`** \| The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. \|<br>\| **`frozen`** \| The card has been frozen and is temporarily unavailable for spending. \|<br>\| **`locked`** \| The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. \|<br>\| **`created`** \| The card has been created but is not yet active. Used only for a specific type of cards. \|<br>\| **`pending`** \| This status is currently not in use. \|<br><br>:::tip[Card locked?]<br>To see if the card can be unlocked, check the `can_be_unlocked` parameter.<br>Note that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.<br>:::|
|can_be_unlocked|[CardCanBeUnlocked](#schemacardcanbeunlocked)|false|none|Returned for locked cards (`state=locked`).<br>Indicates whether the card can be [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) manually (via API or in-app).<br>If `true`, you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock the card.<br><br>:::info<br>Cards can be locked for various reasons.<br>For example, a card can be locked by the user, due to spending period settings, or automatically by the system.<br>Only certain types of lock can be lifted manually.<br>:::|
|spend_program|[SpendProgram](#schemaspendprogram)|false|read-only|The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.<br>:::note<br>To use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|spending_limits|[SpendingLimitsSchema](#schemaspendinglimitsschema)|false|none|none|
|spending_period|[CardSpendingPeriod](#schemacardspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.|
|categories|[CardBusinessMerchantCategories](#schemacardbusinessmerchantcategories)|false|none|The list of merchant categories that are available for card spending. If not specified, categories are not restricted.|
|merchant_controls|[CardMerchantControls](#schemacardmerchantcontrols)|false|none|The merchant-level controls for card spending.<br><br>They block or allow the card to only transact with specific merchants.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardCountries](#schemacardcountries)|false|none|The list of countries where the card can be used, specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardAccounts](#schemacardaccounts)|true|none|The list of linked accounts.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|pending|
|state|active|
|state|frozen|
|state|locked|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardsResponse">CardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardsresponse"></a>
<a id="schema_CardsResponse"></a>
<a id="tocScardsresponse"></a>
<a id="tocscardsresponse"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contact_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "product": {
      "code": "string"
    },
    "virtual": true,
    "last_digits": "string",
    "expiry": "string",
    "label": "string",
    "references": [
      {
        "name": "PNR",
        "value": "RT12345"
      },
      {
        "name": "Traveller",
        "value": "John Smith"
      }
    ],
    "state": "created",
    "can_be_unlocked": true,
    "spend_program": {
      "label": "string"
    },
    "spending_limits": {
      "single": {
        "amount": 200.22,
        "currency": "GBP"
      },
      "week": {
        "amount": 200.44,
        "currency": "GBP"
      }
    },
    "spending_period": {
      "start_date": "2025-09-26",
      "end_date": "2030-12-31",
      "end_date_action": "lock"
    },
    "categories": [
      "health"
    ],
    "merchant_controls": {
      "control_type": "block",
      "merchant_ids": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    },
    "mcc_controls": {
      "control_type": "allow",
      "mccs": [
        "7033"
      ]
    },
    "countries": [
      "GB"
    ],
    "accounts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }
]
```

A list of cards.

<h2 id="tocS_CardResponseWithTerminated">CardResponseWithTerminated</h2>
<!-- backwards compatibility -->
<a id="schemacardresponsewithterminated"></a>
<a id="schema_CardResponseWithTerminated"></a>
<a id="tocScardresponsewithterminated"></a>
<a id="tocscardresponsewithterminated"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "holder_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "terminated_at": "2026-07-22T11:15:41.113202Z",
  "product": {
    "code": "string"
  },
  "virtual": true,
  "last_digits": "string",
  "expiry": "string",
  "label": "string",
  "references": [
    {
      "name": "PNR",
      "value": "RT12345"
    },
    {
      "name": "Traveller",
      "value": "John Smith"
    }
  ],
  "state": "created",
  "can_be_unlocked": true,
  "spend_program": {
    "label": "string"
  },
  "spending_limits": {
    "single": {
      "amount": 0,
      "currency": "string"
    },
    "day": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    },
    "week": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    },
    "month": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    },
    "quarter": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    },
    "year": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    },
    "all_time": {
      "amount": 0,
      "currency": "string",
      "usage": 0
    }
  },
  "spending_period": {
    "start_date": "2025-09-26",
    "end_date": "2030-12-31",
    "end_date_action": "lock"
  },
  "categories": [
    "health"
  ],
  "merchant_controls": {
    "control_type": "block",
    "merchant_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  },
  "mcc_controls": {
    "control_type": "allow",
    "mccs": [
      "7033"
    ]
  },
  "countries": [
    "GB"
  ],
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[CardId](#schemacardid)|true|none|The ID of the card.|
|holder_id|[CardHolderId](#schemacardholderid)|false|none|The ID of the team member who is the holder of the card.<br>If the card belongs to the business, this will be empty.<br><br>For more information, see the guides: [Manage Cards - Create a virtual card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#create-a-virtual-card).|
|contact_ids|[CardContacts](#schemacardcontacts)|false|none|The list of contacts for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).|
|created_at|[CardCreatedAt](#schemacardcreatedat)|true|none|The date and time the card was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|[CardUpdatedAt](#schemacardupdatedat)|true|none|The date and time the card was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|terminated_at|[CardTerminatedAt](#schemacardterminatedat)|false|none|The date and time the card was terminated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Only returned for cards in the `terminated` state. This is distinct from `updated_at`, as a terminated card can still have updates after termination.|
|product|[CardProduct](#schemacardproduct)|false|none|The card product offered by the card provider for this card.<br>In other words, the program that the card was issued under.<br><br>:::note<br>This property is only available to travel intermediaries using our travel solution.<br>To use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|virtual|[CardVirtual](#schemacardvirtual)|true|none|Specifies whether the card is virtual (`true`) or physical (`false`).|
|last_digits|[CardLastDigits](#schemacardlastdigits)|true|none|The last 4 digits of the card's PAN.|
|expiry|[CardExpiry](#schemacardexpiry)|true|none|The card expiration date.|
|label|[CardLabel](#schemacardlabel)|false|none|The label of the card.|
|references|[CardReferences](#schemacardreferences)|false|none|References for the card.<br>Up to 5 name-value pairs assigned to the card for tracking.<br><br>:::info<br>Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.<br>:::<br><br>The names must be unique.<br>The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.<br><br>References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).<br>They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present).<br><br>:::note<br>The references recorded on a transaction are those assigned to the card at the time the transaction took place.<br>If the references are amended, they will only be applied to future transactions.<br>Existing transaction are not affected.<br>:::|
|state|[CardStateWithTerminated](#schemacardstatewithterminated)|true|none|The state that the card is in.<br><br>Possible values:<br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`active`** \| The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. \|<br>\| **`frozen`** \| The card has been frozen and is temporarily unavailable for spending. \|<br>\| **`locked`** \| The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. \|<br>\| **`created`** \| The card has been created but is not yet active. Used only for a specific type of cards. \|<br>\| **`pending`** \| This status is currently not in use. \|<br>\| **`terminated`** \| The card is terminated and cannot be used. This is a final state and cannot be reversed. \|<br><br>:::tip[Card locked?]<br>To see if the card can be unlocked, check the `can_be_unlocked` parameter.<br>Note that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.<br>:::|
|can_be_unlocked|[CardCanBeUnlocked](#schemacardcanbeunlocked)|false|none|Returned for locked cards (`state=locked`).<br>Indicates whether the card can be [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) manually (via API or in-app).<br>If `true`, you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock the card.<br><br>:::info<br>Cards can be locked for various reasons.<br>For example, a card can be locked by the user, due to spending period settings, or automatically by the system.<br>Only certain types of lock can be lifted manually.<br>:::|
|spend_program|[SpendProgram](#schemaspendprogram)|false|read-only|The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.<br>:::note<br>To use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).<br>:::|
|spending_limits|[SpendingLimitsWithUsage](#schemaspendinglimitswithusage)|false|none|All spending limits set for the card, including spending limit utilisation for periodic limits.|
|spending_period|[CardSpendingPeriod](#schemacardspendingperiod)|false|none|The controls for the card's spending period.<br><br>They specify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.|
|categories|[CardBusinessMerchantCategories](#schemacardbusinessmerchantcategories)|false|none|The list of merchant categories that are available for card spending. If not specified, categories are not restricted.|
|merchant_controls|[CardMerchantControls](#schemacardmerchantcontrols)|false|none|The merchant-level controls for card spending.<br><br>They block or allow the card to only transact with specific merchants.|
|mcc_controls|[MccControlsSchema](#schemamcccontrolsschema)|false|none|The MCC controls for card spending.<br>They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).<br>:::tip<br>MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.<br>:::|
|countries|[CardCountries](#schemacardcountries)|false|none|The list of countries where the card can be used, specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.|
|accounts|[CardAccounts](#schemacardaccounts)|true|none|The list of linked accounts.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|pending|
|state|active|
|state|frozen|
|state|locked|
|state|terminated|
|categories|health|
|categories|general|
|categories|services|
|categories|airlines|
|categories|transport|
|categories|accommodation|
|categories|utilities|
|categories|shopping|
|categories|financial|
|categories|furniture|
|categories|hardware|
|categories|groceries|
|categories|fuel|
|categories|entertainment|
|categories|software|
|categories|restaurants|
|categories|advertising|
|categories|cash|
|categories|education|
|categories|government|

<h2 id="tocS_CardAccounts">CardAccounts</h2>
<!-- backwards compatibility -->
<a id="schemacardaccounts"></a>
<a id="schema_CardAccounts"></a>
<a id="tocScardaccounts"></a>
<a id="tocscardaccounts"></a>

```json
[
  "497f6eca-6276-4993-bfeb-53cbbbba6f08"
]
```

The list of linked accounts.

<h2 id="tocS_CardBusinessMerchantCategories">CardBusinessMerchantCategories</h2>
<!-- backwards compatibility -->
<a id="schemacardbusinessmerchantcategories"></a>
<a id="schema_CardBusinessMerchantCategories"></a>
<a id="tocScardbusinessmerchantcategories"></a>
<a id="tocscardbusinessmerchantcategories"></a>

```json
[
  "health"
]
```

The list of merchant categories that are available for card spending. If not specified, categories are not restricted.

<h2 id="tocS_CardCanBeUnlocked">CardCanBeUnlocked</h2>
<!-- backwards compatibility -->
<a id="schemacardcanbeunlocked"></a>
<a id="schema_CardCanBeUnlocked"></a>
<a id="tocScardcanbeunlocked"></a>
<a id="tocscardcanbeunlocked"></a>

```json
true
```

Returned for locked cards (`state=locked`).
Indicates whether the card can be [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) manually (via API or in-app).
If `true`, you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock the card.

:::info
Cards can be locked for various reasons.
For example, a card can be locked by the user, due to spending period settings, or automatically by the system.
Only certain types of lock can be lifted manually.
:::

<h2 id="tocS_CardContact">CardContact</h2>
<!-- backwards compatibility -->
<a id="schemacardcontact"></a>
<a id="schema_CardContact"></a>
<a id="tocScardcontact"></a>
<a id="tocscardcontact"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

One of the card's contacts.

<h2 id="tocS_CardContacts">CardContacts</h2>
<!-- backwards compatibility -->
<a id="schemacardcontacts"></a>
<a id="schema_CardContacts"></a>
<a id="tocScardcontacts"></a>
<a id="tocscardcontacts"></a>

```json
[
  "497f6eca-6276-4993-bfeb-53cbbbba6f08"
]
```

The list of contacts for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).

<h2 id="tocS_CardCountries">CardCountries</h2>
<!-- backwards compatibility -->
<a id="schemacardcountries"></a>
<a id="schema_CardCountries"></a>
<a id="tocScardcountries"></a>
<a id="tocscardcountries"></a>

```json
[
  "GB"
]
```

The list of countries where the card can be used, specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.

<h2 id="tocS_CardCreatedAt">CardCreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacardcreatedat"></a>
<a id="schema_CardCreatedAt"></a>
<a id="tocScardcreatedat"></a>
<a id="tocscardcreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the card was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_CardExpiry">CardExpiry</h2>
<!-- backwards compatibility -->
<a id="schemacardexpiry"></a>
<a id="schema_CardExpiry"></a>
<a id="tocScardexpiry"></a>
<a id="tocscardexpiry"></a>

```json
"string"
```

The card expiration date.

<h2 id="tocS_CardHolderId">CardHolderId</h2>
<!-- backwards compatibility -->
<a id="schemacardholderid"></a>
<a id="schema_CardHolderId"></a>
<a id="tocScardholderid"></a>
<a id="tocscardholderid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the team member who is the holder of the card.
If the card belongs to the business, this will be empty.

For more information, see the guides: [Manage Cards - Create a virtual card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#create-a-virtual-card).

<h2 id="tocS_CardId">CardId</h2>
<!-- backwards compatibility -->
<a id="schemacardid"></a>
<a id="schema_CardId"></a>
<a id="tocScardid"></a>
<a id="tocscardid"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The ID of the card.

<h2 id="tocS_CardLabel">CardLabel</h2>
<!-- backwards compatibility -->
<a id="schemacardlabel"></a>
<a id="schema_CardLabel"></a>
<a id="tocScardlabel"></a>
<a id="tocscardlabel"></a>

```json
"string"
```

The label of the card.

<h2 id="tocS_CardLastDigits">CardLastDigits</h2>
<!-- backwards compatibility -->
<a id="schemacardlastdigits"></a>
<a id="schema_CardLastDigits"></a>
<a id="tocScardlastdigits"></a>
<a id="tocscardlastdigits"></a>

```json
"string"
```

The last 4 digits of the card's PAN.

<h2 id="tocS_CardMerchantControls">CardMerchantControls</h2>
<!-- backwards compatibility -->
<a id="schemacardmerchantcontrols"></a>
<a id="schema_CardMerchantControls"></a>
<a id="tocScardmerchantcontrols"></a>
<a id="tocscardmerchantcontrols"></a>

```json
{
  "control_type": "block",
  "merchant_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

The merchant-level controls for card spending.

They block or allow the card to only transact with specific merchants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control_type|string|true|none|The type of control to apply.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`allow`** \| Permits only the specified merchants. \|<br>\| **`block`** \| Blocks the specified merchants. \||
|merchant_ids|[string(uuid)]|true|none|The list of IDs of merchants to which the control applies.<br><br>:::tip<br>To find merchant IDs, check transaction details (→ `merchant.id`).<br>You can fetch transaction details for a [specific transaction](https://developer.revolut.com/docs/api/business#get-transaction#response) or for [all transactions](https://developer.revolut.com/docs/api/business#get-transactions#response).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|control_type|block|
|control_type|allow|

<h2 id="tocS_CardProduct">CardProduct</h2>
<!-- backwards compatibility -->
<a id="schemacardproduct"></a>
<a id="schema_CardProduct"></a>
<a id="tocScardproduct"></a>
<a id="tocscardproduct"></a>

```json
{
  "code": "string"
}
```

The card product offered by the card provider for this card.
In other words, the program that the card was issued under.

:::note
This property is only available to travel intermediaries using our travel solution.
To use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The code of the card product.|

<h2 id="tocS_CardReference">CardReference</h2>
<!-- backwards compatibility -->
<a id="schemacardreference"></a>
<a id="schema_CardReference"></a>
<a id="tocScardreference"></a>
<a id="tocscardreference"></a>

```json
{
  "name": "PNR",
  "value": "RT12345"
}
```

Reference for the card.
One of the name-value pairs assigned to the card for tracking.

:::info
Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.
:::

The names must be unique.
The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.
References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).
They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). 

:::note
The references recorded on a transaction are those assigned to the card at the time the transaction took place.
If the references are amended, the new references are only applied to future transactions.
Existing transaction are not affected.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the card reference.<br>Must be unique.|
|value|string|true|none|The value for this reference.|

<h2 id="tocS_CardReferences">CardReferences</h2>
<!-- backwards compatibility -->
<a id="schemacardreferences"></a>
<a id="schema_CardReferences"></a>
<a id="tocScardreferences"></a>
<a id="tocscardreferences"></a>

```json
[
  {
    "name": "PNR",
    "value": "RT12345"
  },
  {
    "name": "Traveller",
    "value": "John Smith"
  }
]
```

References for the card.
Up to 5 name-value pairs assigned to the card for tracking.

:::info
Each time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.
:::

The names must be unique.
The references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.

References are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).
They are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present).

:::note
The references recorded on a transaction are those assigned to the card at the time the transaction took place.
If the references are amended, they will only be applied to future transactions.
Existing transaction are not affected.
:::

<h2 id="tocS_CardSpendingPeriod">CardSpendingPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacardspendingperiod"></a>
<a id="schema_CardSpendingPeriod"></a>
<a id="tocScardspendingperiod"></a>
<a id="tocscardspendingperiod"></a>

```json
{
  "start_date": "2025-09-26",
  "end_date": "2030-12-31",
  "end_date_action": "lock"
}
```

The controls for the card's spending period.

They specify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date)|false|none|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date|string(date)|false|none|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date_action|string|false|none|The action to take after the end date of the spending period.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|end_date_action|lock|
|end_date_action|terminate|

<h2 id="tocS_CardState">CardState</h2>
<!-- backwards compatibility -->
<a id="schemacardstate"></a>
<a id="schema_CardState"></a>
<a id="tocScardstate"></a>
<a id="tocscardstate"></a>

```json
"created"
```

The state that the card is in.

Possible values:
| Value | Description |
| --- | --- |
| **`active`** | The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. |
| **`frozen`** | The card has been frozen and is temporarily unavailable for spending. |
| **`locked`** | The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. |
| **`created`** | The card has been created but is not yet active. Used only for a specific type of cards. |
| **`pending`** | This status is currently not in use. |

:::tip[Card locked?]
To see if the card can be unlocked, check the `can_be_unlocked` parameter.
Note that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.
:::

<h2 id="tocS_CardStateWithTerminated">CardStateWithTerminated</h2>
<!-- backwards compatibility -->
<a id="schemacardstatewithterminated"></a>
<a id="schema_CardStateWithTerminated"></a>
<a id="tocScardstatewithterminated"></a>
<a id="tocscardstatewithterminated"></a>

```json
"created"
```

The state that the card is in.

Possible values:
| Value | Description |
| --- | --- |
| **`active`** | The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. |
| **`frozen`** | The card has been frozen and is temporarily unavailable for spending. |
| **`locked`** | The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. |
| **`created`** | The card has been created but is not yet active. Used only for a specific type of cards. |
| **`pending`** | This status is currently not in use. |
| **`terminated`** | The card is terminated and cannot be used. This is a final state and cannot be reversed. |

:::tip[Card locked?]
To see if the card can be unlocked, check the `can_be_unlocked` parameter.
Note that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.
:::

<h2 id="tocS_CardUpdatedAt">CardUpdatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacardupdatedat"></a>
<a id="schema_CardUpdatedAt"></a>
<a id="tocScardupdatedat"></a>
<a id="tocscardupdatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time the card was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

<h2 id="tocS_CardTerminatedAt">CardTerminatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacardterminatedat"></a>
<a id="schema_CardTerminatedAt"></a>
<a id="tocScardterminatedat"></a>
<a id="tocscardterminatedat"></a>

```json
"2026-07-22T11:15:41.113202Z"
```

The date and time the card was terminated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Only returned for cards in the `terminated` state. This is distinct from `updated_at`, as a terminated card can still have updates after termination.

<h2 id="tocS_CardVirtual">CardVirtual</h2>
<!-- backwards compatibility -->
<a id="schemacardvirtual"></a>
<a id="schema_CardVirtual"></a>
<a id="tocScardvirtual"></a>
<a id="tocscardvirtual"></a>

```json
true
```

Specifies whether the card is virtual (`true`) or physical (`false`).

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "code": "string"
}
```

The [accounting category](https://developer.revolut.com/docs/api/business#delete-accounting-category) of the expense split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the accounting category.|
|name|string|true|none|The name of the accounting category.|
|code|string|false|none|The code of the accounting category.|

<h2 id="tocS_ChargeBearer">ChargeBearer</h2>
<!-- backwards compatibility -->
<a id="schemachargebearer"></a>
<a id="schema_ChargeBearer"></a>
<a id="tocSchargebearer"></a>
<a id="tocschargebearer"></a>

```json
"shared"
```

The party to which any transaction fees are charged if the resulting transaction route has associated fees: 

| Value | Description |
| --- | --- |
| **`shared`** | Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. |
| **`debtor`** | Also known as **OUR**. The sender pays all explicit transaction fees. |
| **`prefer_debtor`** | Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. |

:::note
Some transactions with fees might not support forced charge bearer selection.
If this is the case, the request will return an error.
This does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.
:::

<h2 id="tocS_Counterparty">Counterparty</h2>
<!-- backwards compatibility -->
<a id="schemacounterparty"></a>
<a id="schema_Counterparty"></a>
<a id="tocScounterparty"></a>
<a id="tocscounterparty"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "revtag": "string",
  "profile_type": "personal",
  "country": "string",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "accounts": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "bank_country": "GB",
      "currency": "string",
      "type": "revolut",
      "account_no": "string",
      "iban": "string",
      "sort_code": "string",
      "routing_number": "string",
      "bic": "string",
      "clabe": "string",
      "ifsc": "string",
      "bsb_code": "string",
      "route": "ach",
      "bank_number": "033",
      "branch_code": "0001",
      "account_type": "checking",
      "tax_id": "string",
      "national_id": "string",
      "phone": "+573001234567",
      "business_registration_id": "PV12345",
      "recipient_charges": "no",
      "address": {
        "street_line1": "string",
        "street_line2": "string",
        "region": "string",
        "city": "string",
        "country": "string",
        "postcode": "string"
      }
    }
  ],
  "cards": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "last_digits": "string",
      "scheme": "visa",
      "country": "string",
      "currency": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the counterparty.|
|name|string|true|none|The name of the counterparty.|
|revtag|string|false|none|The [Revtag](https://help.revolut.com/help/transfers/internal-transfers/username-payments/revtags/) of the counterparty.|
|profile_type|[ProfileType](#schemaprofiletype)|false|none|The type of the counterparty.<br>Indicates whether the recipient is an individual or a company.|
|country|[CountryCode](#schemacountrycode)|false|none|The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|state|string|true|none|Indicates the state of the counterparty.|
|created_at|string(date-time)|true|none|The date and time the counterparty was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the counterparty was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|accounts|[[CounterpartyAccount](#schemacounterpartyaccount)]|false|none|The list of public accounts associated with this counterparty.|
|cards|[[CounterpartyCard](#schemacounterpartycard)]|false|none|The list of cards associated with this counterparty.|

#### Enumerated Values

|Property|Value|
|---|---|
|profile_type|personal|
|profile_type|business|
|state|created|
|state|draft|
|state|deleted|

<h2 id="tocS_Counterparties">Counterparties</h2>
<!-- backwards compatibility -->
<a id="schemacounterparties"></a>
<a id="schema_Counterparties"></a>
<a id="tocScounterparties"></a>
<a id="tocscounterparties"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "revtag": "string",
    "profile_type": "personal",
    "country": "string",
    "state": "created",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "accounts": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "bank_country": "GB",
        "currency": "string",
        "type": "revolut",
        "account_no": "string",
        "iban": "string",
        "sort_code": "string",
        "routing_number": "string",
        "bic": "string",
        "clabe": "string",
        "ifsc": "string",
        "bsb_code": "string",
        "route": "ach",
        "bank_number": "033",
        "branch_code": "0001",
        "account_type": "checking",
        "tax_id": "string",
        "national_id": "string",
        "phone": "+573001234567",
        "business_registration_id": "PV12345",
        "recipient_charges": "no",
        "address": {
          "street_line1": "string",
          "street_line2": "string",
          "region": "string",
          "city": "string",
          "country": "string",
          "postcode": "string"
        }
      }
    ],
    "cards": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "last_digits": "string",
        "scheme": "visa",
        "country": "string",
        "currency": "string"
      }
    ]
  }
]
```

<h2 id="tocS_CounterpartyAccount">CounterpartyAccount</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyaccount"></a>
<a id="schema_CounterpartyAccount"></a>
<a id="tocScounterpartyaccount"></a>
<a id="tocscounterpartyaccount"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "bank_country": "GB",
  "currency": "string",
  "type": "revolut",
  "account_no": "string",
  "iban": "string",
  "sort_code": "string",
  "routing_number": "string",
  "bic": "string",
  "clabe": "string",
  "ifsc": "string",
  "bsb_code": "string",
  "route": "ach",
  "bank_number": "033",
  "branch_code": "0001",
  "account_type": "checking",
  "tax_id": "string",
  "national_id": "string",
  "phone": "+573001234567",
  "business_registration_id": "PV12345",
  "recipient_charges": "no",
  "address": {
    "street_line1": "string",
    "street_line2": "string",
    "region": "string",
    "city": "string",
    "country": "string",
    "postcode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the counterparty's account.|
|name|string|false|none|The name of the counterparty.|
|bank_country|[BankCountryCode](#schemabankcountrycode)|false|none|The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|currency|[AccountCurrency](#schemaaccountcurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|type|string|true|none|Indicates the type of account.|
|account_no|string|false|none|The bank account number of the counterparty.|
|iban|string|false|none|The IBAN number of the counterparty's account if applicable.|
|sort_code|string|false|none|The sort code of the counterparty's account if applicable.|
|routing_number|string|false|none|The routing number of the counterparty's account if applicable.|
|bic|string|false|none|The BIC number of the counterparty's account if applicable.|
|clabe|string|false|none|The CLABE number of the counterparty's account if applicable.|
|ifsc|string|false|none|The IFSC number of the counterparty's account if applicable.|
|bsb_code|string|false|none|The BSB number of the counterparty's account if applicable.|
|route|string|false|none|Routing method for US/USD transfers. Defaults to `ach` for US-registered businesses and `fedwire` for non-US businesses.|
|bank_number|string|false|none|Brazilian bank identification code (COMPE). Returned for BR counterparties.|
|branch_code|string|false|none|Brazilian branch (agência) code. Returned for BR counterparties.|
|account_type|string|false|none|Bank account type. Returned for BR, CO, and CL counterparties. Defaults to `checking` for US ACH transfers.|
|tax_id|string|false|none|Tax identification number.<br>Routed based on `bank_country` and recipient type:<br><br>\| Country   \| Recipient type                   \| Tax ID type                                   \| Format                                              \| Example                                  \|<br>\|-----------\|----------------------------------\|-----------------------------------------------\|-----------------------------------------------------\|------------------------------------------\|<br>\| **BR**    \| **Individual**                   \| CPF (Cadastro de Pessoas Físicas)             \| `^\d{11}$` or `^\d{3}\.\d{3}\.\d{3}-\d{2}$`         \| `52998224725` or `529.982.247-25`        \|<br>\| **BR**    \| **Company**                      \| CNPJ (Cadastro Nacional da Pessoa Jurídica)   \| `^\d{14}$` or `^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$`   \| `12345678000195` or `12.345.678/0001-95` \|<br>\| **CO**    \| **Company**                      \| NIT (Número de Identificación Tributaria)     \| `^\d{10}$`                                          \| `9012345678`                             \|<br>\| **CL**    \| **Individual**, **Company**      \| RUT (Rol Único Tributario)                    \| `^\d{7,8}[0-9Kk]$`                                  \| `12345678K`                              \||
|national_id|string|false|none|National identification number.<br>Specifies Colombian Cédula de Ciudadanía when `bank_country` is `CO` and `profile_type` is `personal`.|
|phone|string|false|none|The phone number of the counterparty in [E.164](https://en.wikipedia.org/wiki/E.164) format.<br><br>Country-specific formats:<br><br>\| Country \| Format description          \| Format          \| Example         \|<br>\|---------\|-----------------------------\|-----------------\|-----------------\|<br>\| **CO**  \| `+57` followed by 10 digits \| `^\+?57\d{10}$` \| `+573001234567` \|<br>\| **LK**  \| `+94` followed by 10 digits \| `^\+?94\d{10}$` \| `+941234567890` \|<br>\| **KR**  \| `+82` followed by 10 digits \| `^\+?82\d{10}$` \| `+821012345678` \||
|business_registration_id|string|false|none|Company registration number. Used for business LK counterparties.|
|recipient_charges|string|false|none|**Deprecated.** Indicates the possibility of the recipient charges.<br><br>:::warning<br>This field is deprecated and should be disregarded.<br>It is returned for legacy purposes only.<br>:::|
|address|[CounterpartyAddress](#schemacounterpartyaddress)|false|none|The address of the counterparty's account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|revolut|
|type|external|
|route|ach|
|route|fedwire|
|route|swift|
|account_type|checking|
|account_type|savings|
|recipient_charges|no|
|recipient_charges|expected|

<h2 id="tocS_CounterpartyAddress">CounterpartyAddress</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyaddress"></a>
<a id="schema_CounterpartyAddress"></a>
<a id="tocScounterpartyaddress"></a>
<a id="tocscounterpartyaddress"></a>

```json
{
  "street_line1": "string",
  "street_line2": "string",
  "region": "string",
  "city": "string",
  "country": "string",
  "postcode": "string"
}
```

The address of the counterparty's account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_line1|string|false|none|Street line 1 information.|
|street_line2|string|false|none|Street line 2 information.|
|region|string|false|none|The name of the region (state or province), for example, Ontario for Canada.|
|city|string|false|none|The name of the city.|
|country|string|true|none|The country of the counterparty, as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|postcode|string|false|none|The postcode of the counterparty address.|

<h2 id="tocS_CounterpartyCard">CounterpartyCard</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartycard"></a>
<a id="schema_CounterpartyCard"></a>
<a id="tocScounterpartycard"></a>
<a id="tocscounterpartycard"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "last_digits": "string",
  "scheme": "visa",
  "country": "string",
  "currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the counterparty's card.|
|name|string|true|none|The name of the counterparty.|
|last_digits|string|true|none|The last four digits of the card number.|
|scheme|string|true|none|The card brand.|
|country|[CountryCodeCard](#schemacountrycodecard)|true|none|The country of the card issuer, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|visa|
|scheme|mastercard|

<h2 id="tocS_CounterpartyError">CounterpartyError</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyerror"></a>
<a id="schema_CounterpartyError"></a>
<a id="tocScounterpartyerror"></a>
<a id="tocscounterpartyerror"></a>

```json
{
  "code": 0,
  "message": "string",
  "params": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|
|params|[CounterpartyErrorParams](#schemacounterpartyerrorparams)|false|none|Additional parameters related to the error.|

<h2 id="tocS_CounterpartyErrorParams">CounterpartyErrorParams</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyerrorparams"></a>
<a id="schema_CounterpartyErrorParams"></a>
<a id="tocScounterpartyerrorparams"></a>
<a id="tocscounterpartyerrorparams"></a>

```json
{
  "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Additional parameters related to the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty_id|string(uuid)|false|none|The ID of the Revolut counterparty (i.e. internal counterparty) that already exists.|

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"
```

The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.

<h2 id="tocS_CountryCodeCard">CountryCodeCard</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodecard"></a>
<a id="schema_CountryCodeCard"></a>
<a id="tocScountrycodecard"></a>
<a id="tocscountrycodecard"></a>

```json
"string"
```

The country of the card issuer, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.

<h2 id="tocS_CountryCodeMerchant">CountryCodeMerchant</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodemerchant"></a>
<a id="schema_CountryCodeMerchant"></a>
<a id="tocScountrycodemerchant"></a>
<a id="tocscountrycodemerchant"></a>

```json
"string"
```

The bank country of the merchant, provided as an [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.
Typically 3 letters, though in some cases, card networks might provide it as a 2-letter code.

<h2 id="tocS_CreateAccountingCategoryRequest">CreateAccountingCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountingcategoryrequest"></a>
<a id="schema_CreateAccountingCategoryRequest"></a>
<a id="tocScreateaccountingcategoryrequest"></a>
<a id="tocscreateaccountingcategoryrequest"></a>

```json
{
  "name": "Work From Home equipment",
  "code": "WFH",
  "default_tax_rate_id": "f93f6c3e-bf95-4b58-bfcd-e642c4fc098e"
}
```

The accounting category to create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The full name for the accounting category.|
|code|string|true|none|The code name for the accounting category.|
|default_tax_rate_id|string(uuid)|false|none|The ID of the default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.|

<h2 id="tocS_CounterpartyCountriesResponse">CounterpartyCountriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartycountriesresponse"></a>
<a id="schema_CounterpartyCountriesResponse"></a>
<a id="tocScounterpartycountriesresponse"></a>
<a id="tocscounterpartycountriesresponse"></a>

```json
{
  "countries": [
    {
      "country": "GB",
      "currencies": [
        "string"
      ]
    }
  ]
}
```

The response containing supported bank countries and their available currencies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[CounterpartyCountry](#schemacounterpartycountry)]|true|none|A list of supported bank countries.|

<h2 id="tocS_CounterpartyCountry">CounterpartyCountry</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartycountry"></a>
<a id="schema_CounterpartyCountry"></a>
<a id="tocScounterpartycountry"></a>
<a id="tocscounterpartycountry"></a>

```json
{
  "country": "GB",
  "currencies": [
    "string"
  ]
}
```

A supported bank country with its available currencies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[BankCountryCode](#schemabankcountrycode)|true|none|The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|currencies|[[Currency](#schemacurrency)]|true|none|The currencies available for counterparty creation in this country.|

<h2 id="tocS_CounterpartyRequirementsResponse">CounterpartyRequirementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyrequirementsresponse"></a>
<a id="schema_CounterpartyRequirementsResponse"></a>
<a id="tocScounterpartyrequirementsresponse"></a>
<a id="tocscounterpartyrequirementsresponse"></a>

```json
{
  "fields": [
    {
      "name": "string",
      "required": true,
      "regex": {
        "pattern": "string",
        "description": "string"
      },
      "options": [
        {
          "value": "string",
          "default": true
        }
      ]
    }
  ]
}
```

The response containing applicable counterparty fields and their validation rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[CounterpartyRequirementsField](#schemacounterpartyrequirementsfield)]|true|none|A list of applicable and conditionally required fields for the specific counterparty context.|

<h2 id="tocS_CounterpartyRequirementsField">CounterpartyRequirementsField</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyrequirementsfield"></a>
<a id="schema_CounterpartyRequirementsField"></a>
<a id="tocScounterpartyrequirementsfield"></a>
<a id="tocscounterpartyrequirementsfield"></a>

```json
{
  "name": "string",
  "required": true,
  "regex": {
    "pattern": "string",
    "description": "string"
  },
  "options": [
    {
      "value": "string",
      "default": true
    }
  ]
}
```

Represents a contextual field and its rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the field to be provided in the [Create a counterparty endpoint](https://developer.revolut.com/docs/api/business#add-counterparty) request body. <br>Matches the field names in the Create a counterparty endpoint exactly (e.g. `first_name`, `last_name`, `tax_id`, `route`, `account_type`).|
|required|boolean|true|none|Indicates whether this field must be provided when creating the counterparty.|
|regex|[CounterpartyRequirementsFieldRegex](#schemacounterpartyrequirementsfieldregex)|false|none|Regular expression validation rules.|
|options|[[CounterpartyRequirementsFieldOption](#schemacounterpartyrequirementsfieldoption)]|false|none|A list of allowed values for the field (enum).<br>If provided, the field value must be one of these options.|

<h2 id="tocS_CounterpartyRequirementsFieldRegex">CounterpartyRequirementsFieldRegex</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyrequirementsfieldregex"></a>
<a id="schema_CounterpartyRequirementsFieldRegex"></a>
<a id="tocScounterpartyrequirementsfieldregex"></a>
<a id="tocscounterpartyrequirementsfieldregex"></a>

```json
{
  "pattern": "string",
  "description": "string"
}
```

Regular expression validation rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|string|true|none|The regex pattern the field value must match.|
|description|string|true|none|A human-readable description of the regex constraint.|

<h2 id="tocS_CounterpartyRequirementsFieldOption">CounterpartyRequirementsFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyrequirementsfieldoption"></a>
<a id="schema_CounterpartyRequirementsFieldOption"></a>
<a id="tocScounterpartyrequirementsfieldoption"></a>
<a id="tocscounterpartyrequirementsfieldoption"></a>

```json
{
  "value": "string",
  "default": true
}
```

An allowed value option for the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The accepted value to be passed to the API.|
|default|boolean|false|none|Indicates the default option for the field if there is one.|

<h2 id="tocS_CreateCounterpartyRequest">CreateCounterpartyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecounterpartyrequest"></a>
<a id="schema_CreateCounterpartyRequest"></a>
<a id="tocScreatecounterpartyrequest"></a>
<a id="tocscreatecounterpartyrequest"></a>

```json
{
  "profile_type": "personal",
  "revtag": "string",
  "name": "string",
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  },
  "bank_country": "GB",
  "currency": "string",
  "account_no": "string",
  "iban": "string",
  "sort_code": "string",
  "routing_number": "string",
  "bic": "string",
  "clabe": "string",
  "ifsc": "string",
  "bsb_code": "string",
  "address": {
    "street_line1": "Revolut LTD",
    "street_line2": "1 Canada Square",
    "region": "Ontario",
    "city": "London",
    "country": "GB",
    "postcode": "E14 5AB"
  },
  "route": "ach",
  "bank_number": "033",
  "branch_code": "0001",
  "account_type": "checking",
  "tax_id": "string",
  "national_id": "string",
  "phone": "+573001234567",
  "business_registration_id": "PV12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile_type|string|false|none|The type of the Revolut profile.<br>Indicates whether the counterparty is a personal or business account.<br>Provide it when adding a Revolut counterparty via Revtag.|
|revtag|string|false|none|The [Revtag](https://help.revolut.com/help/transfers/internal-transfers/username-payments/revtags/) of the counterparty to add.|
|name|string|false|none|The name of the counterparty, provided when the counterparty is being added via **Revtag**.<br><br>If specified, `individual_name` and `company_name` must be empty.<br><br>:::note<br>The name that you provide must match or closely match the actual name associated with the account that you're trying to add.<br>Otherwise, the creation fails and a `404` error is returned.<br>:::<br>|
|company_name|string|false|none|The name of the counterparty, provided when the counterparty is a **company** (business account type) and is **not** being added via Revtag.<br><br>If specified, `individual_name` and `name` must be empty.<br><br>:::warning<br>The `company_name` must contain at least 2 letters (not just characters).<br>For example, names like `12` will fail validation because they are two characters but not two letters.<br>:::|
|individual_name|[IndividualName](#schemaindividualname)|false|none|The name of the counterparty, provided when the counterparty is an **individual** (personal account type) and is **not** being added via Revtag.<br><br>If specified, `company_name` and `name` must be empty.|
|bank_country|[BankCountryCode](#schemabankcountrycode)|false|none|The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|account_no|string|false|none|The bank account number of the counterparty.|
|iban|string|false|none|The IBAN number of the counterparty's account. This field is displayed for IBAN countries.|
|sort_code|string|false|none|The sort code of the counterparty's account. This field is required for GBP accounts.|
|routing_number|string|false|none|The routing number of the counterparty's account. This field is required for USD accounts.|
|bic|string|false|none|The BIC number of the counterparty's account. This field is required for non-SEPA IBAN/SWIFT.|
|clabe|string|false|none|The CLABE number of the counterparty's account. This field is required for SWIFT MX.|
|ifsc|string|false|none|The IFSC number of the counterparty's account. This field is required for INR accounts.|
|bsb_code|string|false|none|The BSB number of the counterparty's account. This field is required for AUD accounts.|
|address|[BeneficiaryAddress](#schemabeneficiaryaddress)|false|none|The address of the counterparty.|
|route|string|false|none|Routing method for US USD transfers. When omitted, defaults to `ach` for US-registered businesses and `fedwire` for non-US businesses. <br><br>Required when `bank_country` is `US` and the desired routing method differs from the default.|
|bank_number|string|false|none|Brazilian bank identification code (COMPE). Required for BR counterparties.|
|branch_code|string|false|none|Brazilian branch (agência) code. Required for BR counterparties.|
|account_type|string|false|none|Bank account type. Defaults to `checking` for US ACH transfers when omitted. <br><br>Required for BR, CO, and CL counterparties.|
|tax_id|string|false|none|Tax identification number.<br><br>Required and routed based on `bank_country` and recipient type:<br><br>\| Country   \| Recipient type                   \| Tax ID type                                   \| Format                                              \| Example                                  \|<br>\|-----------\|----------------------------------\|-----------------------------------------------\|-----------------------------------------------------\|------------------------------------------\|<br>\| **BR**    \| **Individual**                   \| CPF (Cadastro de Pessoas Físicas)             \| `^\d{11}$` or `^\d{3}\.\d{3}\.\d{3}-\d{2}$`         \| `52998224725` or `529.982.247-25`        \|<br>\| **BR**    \| **Company**                      \| CNPJ (Cadastro Nacional da Pessoa Jurídica)   \| `^\d{14}$` or `^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$`   \| `12345678000195` or `12.345.678/0001-95` \|<br>\| **CO**    \| **Company**                      \| NIT (Número de Identificación Tributaria)     \| `^\d{10}$`                                          \| `9012345678`                             \|<br>\| **CL**    \| **Individual**, **Company**      \| RUT (Rol Único Tributario)                    \| `^\d{7,8}[0-9Kk]$`                                  \| `12345678K`                              \||
|national_id|string|false|none|National identification number. Required  when `bank_country` is `CO` and `profile_type` is `personal`, must specify Colombian Cédula de Ciudadanía.|
|phone|string|false|none|The phone number of the counterparty in [E.164](https://en.wikipedia.org/wiki/E.164) format.<br><br>- For internal (Revolut) counterparties: the recipient's Revolut phone number used to look them up.<br>- For external counterparties in CO, KR, and LK: the bank account phone number. Required when `bank_country` is `CO`, `KR`, or `LK`.<br><br>Country-specific formats:<br><br>\| Country \| Format description          \| Format          \| Example         \|<br>\|---------\|-----------------------------\|-----------------\|-----------------\|<br>\| **CO**  \| `+57` followed by 10 digits \| `^\+?57\d{10}$` \| `+573001234567` \|<br>\| **KR**  \| `+82` followed by 10 digits \| `^\+?82\d{10}$` \| `+821012345678` \|<br>\| **LK**  \| `+94` followed by 10 digits \| `^\+?94\d{10}$` \| `+941234567890` \||
|business_registration_id|string|false|none|Company registration number. Required for business LK counterparties (`profile_type`: `business`).|

#### Enumerated Values

|Property|Value|
|---|---|
|profile_type|personal|
|profile_type|business|
|route|ach|
|route|fedwire|
|route|swift|
|account_type|checking|
|account_type|savings|

<h2 id="tocS_CreateLabelGroupRequest">CreateLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelgrouprequest"></a>
<a id="schema_CreateLabelGroupRequest"></a>
<a id="tocScreatelabelgrouprequest"></a>
<a id="tocscreatelabelgrouprequest"></a>

```json
{
  "name": "string",
  "labels": [
    {
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name for the new label group.|
|labels|[[CreateLabelRequest](#schemacreatelabelrequest)]|true|none|The labels to create in the new group.<br><br>The maximum number of labels you can create for a new group is 200.<br>If you need to add more, you can add them later by [creating new labels individually](https://developer.revolut.com/docs/api/business#create-label).|

<h2 id="tocS_CreateLabelRequest">CreateLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelrequest"></a>
<a id="schema_CreateLabelRequest"></a>
<a id="tocScreatelabelrequest"></a>
<a id="tocscreatelabelrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name for the new label.|

<h2 id="tocS_CreatePaymentDraftRequest">CreatePaymentDraftRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentdraftrequest"></a>
<a id="schema_CreatePaymentDraftRequest"></a>
<a id="tocScreatepaymentdraftrequest"></a>
<a id="tocscreatepaymentdraftrequest"></a>

```json
{
  "title": "string",
  "schedule_for": "1970-01-01",
  "payments": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "receiver": {
        "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "amount": 0.1,
      "currency": "string",
      "reference": "string",
      "charge_bearer": "shared",
      "transfer_reason_code": "property_rental"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The title of the payment draft.|
|schedule_for|string(date)|false|none|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|payments|[[PaymentRequest](#schemapaymentrequest)]|true|none|The details of the payment(s) to be made.|

<h2 id="tocS_CreatePaymentDraftResponse">CreatePaymentDraftResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentdraftresponse"></a>
<a id="schema_CreatePaymentDraftResponse"></a>
<a id="tocScreatepaymentdraftresponse"></a>
<a id="tocscreatepaymentdraftresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(number)|true|none|The ID of the payment draft created.|

<h2 id="tocS_CreatePaymentDraftPaymentResponse">CreatePaymentDraftPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentdraftpaymentresponse"></a>
<a id="schema_CreatePaymentDraftPaymentResponse"></a>
<a id="tocScreatepaymentdraftpaymentresponse"></a>
<a id="tocscreatepaymentdraftpaymentresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the payment added to the draft.|

<h2 id="tocS_CreatePayoutLinkRequest">CreatePayoutLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayoutlinkrequest"></a>
<a id="schema_CreatePayoutLinkRequest"></a>
<a id="tocScreatepayoutlinkrequest"></a>
<a id="tocscreatepayoutlinkrequest"></a>

```json
{
  "counterparty_name": "John Smith",
  "save_counterparty": false,
  "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
  "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
  "amount": 105.6,
  "currency": "GBP",
  "reference": "string",
  "payout_methods": [
    "revolut",
    "bank_account",
    "card"
  ],
  "expiry_period": "P3D",
  "transfer_reason_code": "property_rental"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty_name|[PayoutLinkCounterpartyName](#schemapayoutlinkcounterpartyname)|true|none|The name of the counterparty provided by the sender.|
|save_counterparty|boolean|false|none|Indicates whether to save the recipient as your counterparty upon link claim.<br>If `false` then the counterparty will not show up on your counterparties list, for example, when you retrieve your counterparties. <br>However, you will still be able to retrieve this counterparty by its ID.<br><br>If you don't choose to save the counterparty on link creation, you can do it later from your transactions list in the Business app.|
|request_id|[PayoutLinkRequestId](#schemapayoutlinkrequestid)|true|none|The ID of the request, provided by the sender.<br><br>:::warning<br>To ensure that a link payment is not processed multiple times if there are network or system errors, the same `request_id` should be used for requests related to the same link.<br>:::|
|account_id|[PayoutLinkAccountId](#schemapayoutlinkaccountid)|true|none|The ID of the sender's account.|
|amount|[PayoutLinkAmount](#schemapayoutlinkamount)|true|none|The amount of money to be transferred.<br><br>:::note<br>The amount must be between £1 and £2,500, or equivalent in the selected currency.<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|reference|string|true|none|The reference for the payout link.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.<br><br>You might include an invoice number, account or transaction ID, or any other reference meaningful to you or the recipient.|
|payout_methods|[PayoutLinkPayoutMethods](#schemapayoutlinkpayoutmethods)|false|none|The list of payout methods that the recipient can use to claim the payout.|
|expiry_period|[PayoutLinkExpiryPeriod](#schemapayoutlinkexpiryperiod)|false|none|The period after which the payout link expires if not claimed before, provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).<br><br>The default and maximum value is 7 days from the link creation.|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|payout_methods|revolut|
|payout_methods|bank_account|
|payout_methods|card|

<h2 id="tocS_CreateTaxRateRequest">CreateTaxRateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetaxraterequest"></a>
<a id="schema_CreateTaxRateRequest"></a>
<a id="tocScreatetaxraterequest"></a>
<a id="tocscreatetaxraterequest"></a>

```json
{
  "name": "string",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the tax.|
|percentage|number(double)|true|none|The tax rate percentage applied to the taxable amount. For example, `23` for 23%.|

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "TransactionCreated",
    "TransactionStateChanged"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|[Url](#schemaurl)|true|none|A valid webhook URL to which to send event notifications. The supported protocol is `https`.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|false|none|A list of event types to subscribe to.<br>If you don't provide it, you're automatically subscribed to the [default event types](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks#default-event-types).|

#### Enumerated Values

|Property|Value|
|---|---|
|events|TransactionCreated|
|events|TransactionStateChanged|
|events|PayoutLinkCreated|
|events|PayoutLinkStateChanged|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"string"
```

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.

<h2 id="tocS_Department">Department</h2>
<!-- backwards compatibility -->
<a id="schemadepartment"></a>
<a id="schema_Department"></a>
<a id="tocSdepartment"></a>
<a id="tocsdepartment"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the department.|
|name|string|true|none|The name of the department.|
|created_at|string(date-time)|true|none|The date and time the department was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the department was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|

<h2 id="tocS_ErrorWithId">ErrorWithId</h2>
<!-- backwards compatibility -->
<a id="schemaerrorwithid"></a>
<a id="schema_ErrorWithId"></a>
<a id="tocSerrorwithid"></a>
<a id="tocserrorwithid"></a>

```json
{
  "error_id": "string",
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_id|string|true|none|The ID of the specific error instance. Used for traceability.|
|code|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|

<h2 id="tocS_ErrorUnauthorized">ErrorUnauthorized</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunauthorized"></a>
<a id="schema_ErrorUnauthorized"></a>
<a id="tocSerrorunauthorized"></a>
<a id="tocserrorunauthorized"></a>

```json
{
  "status": 0,
  "message": "string"
}
```

Unauthorised

Returned, for example, when the credentials you used to make the request are invalid.
For more information, see the **Authorization** section.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|

<h2 id="tocS_ErrorUnprocessableEntity">ErrorUnprocessableEntity</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunprocessableentity"></a>
<a id="schema_ErrorUnprocessableEntity"></a>
<a id="tocSerrorunprocessableentity"></a>
<a id="tocserrorunprocessableentity"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

Unprocessable entity

Returned, for example, when you try to modify a resource which is not a in state that would allow for modifications, e.g. a card invitation in state `failed`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|The error code.|
|message|string|true|none|The description of the error.|

<h2 id="tocS_ErrorWithStatus">ErrorWithStatus</h2>
<!-- backwards compatibility -->
<a id="schemaerrorwithstatus"></a>
<a id="schema_ErrorWithStatus"></a>
<a id="tocSerrorwithstatus"></a>
<a id="tocserrorwithstatus"></a>

```json
{
  "status": 0,
  "message": "string"
}
```

Error returning a status instead of code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|The error code.|
|message|string|true|none|The description of the error.|

<h2 id="tocS_EstimatedTime">EstimatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaestimatedtime"></a>
<a id="schema_EstimatedTime"></a>
<a id="tocSestimatedtime"></a>
<a id="tocsestimatedtime"></a>

```json
{
  "unit": "days",
  "min": 1,
  "max": 3
}
```

The estimated time of the inbound transfer of the funds, i.e. when we expect the recipient to receive the transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|true|none|The estimated time unit of the inbound transfer of the funds.|
|min|integer|false|none|The minimum time estimate.|
|max|integer|false|none|The maximum time estimate.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|days|
|unit|hours|

<h2 id="tocS_ExchangePartFrom">ExchangePartFrom</h2>
<!-- backwards compatibility -->
<a id="schemaexchangepartfrom"></a>
<a id="schema_ExchangePartFrom"></a>
<a id="tocSexchangepartfrom"></a>
<a id="tocsexchangepartfrom"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currency": "string",
  "amount": 0
}
```

The details of the currency to exchange from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|The ID of the account to sell currency from.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|amount|number(double)|false|none|The amount of currency.<br>Specify **only** if you want to sell currency.|

<h2 id="tocS_ExchangePartTo">ExchangePartTo</h2>
<!-- backwards compatibility -->
<a id="schemaexchangepartto"></a>
<a id="schema_ExchangePartTo"></a>
<a id="tocSexchangepartto"></a>
<a id="tocsexchangepartto"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currency": "string",
  "amount": 0
}
```

The details of the currency to exchange to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|The ID of the account to receive exchanged currency into.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|amount|number(double)|false|none|The amount of currency.<br>Specify **only** if you want to buy currency.|

<h2 id="tocS_ExchangeRateResponse">ExchangeRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexchangerateresponse"></a>
<a id="schema_ExchangeRateResponse"></a>
<a id="tocSexchangerateresponse"></a>
<a id="tocsexchangerateresponse"></a>

```json
{
  "from": {
    "amount": 0,
    "currency": "string"
  },
  "to": {
    "amount": 0,
    "currency": "string"
  },
  "rate": 0,
  "fee": {
    "amount": 0,
    "currency": "string"
  },
  "rate_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[AmountWithCurrency](#schemaamountwithcurrency)|true|none|The money to sell.|
|to|[AmountWithCurrency](#schemaamountwithcurrency)|true|none|The money to receive.|
|rate|number(double)|true|none|The proposed exchange rate.|
|fee|[Fee](#schemafee)|true|none|The expected fee for the transaction.|
|rate_date|string(date-time)|true|none|The date of the proposed exchange rate in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_ExchangeReason">ExchangeReason</h2>
<!-- backwards compatibility -->
<a id="schemaexchangereason"></a>
<a id="schema_ExchangeReason"></a>
<a id="tocSexchangereason"></a>
<a id="tocsexchangereason"></a>

```json
{
  "code": "business_expense_and_claims",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Category code of the reason for the exchange.|
|name|string|true|none|Category name of the reason for the exchange.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|business_expense_and_claims|
|code|fees_and_charges|
|code|fund_transfer_and_intracompany_payment|
|code|gifts_and_donations|
|code|government_services_and_tax|
|code|insurance|
|code|inventory|
|code|investment_dividend_and_interest|
|code|loan_and_loan_repayment|
|code|marketing|
|code|payment_for_goods_and_services|
|code|payroll|
|code|refund|
|code|rental_and_property|
|code|sales|
|code|service_provider_and_software|
|code|travel_and_transportation|
|code|utilities|

<h2 id="tocS_ExchangeReasons">ExchangeReasons</h2>
<!-- backwards compatibility -->
<a id="schemaexchangereasons"></a>
<a id="schema_ExchangeReasons"></a>
<a id="tocSexchangereasons"></a>
<a id="tocsexchangereasons"></a>

```json
[
  {
    "code": "business_expense_and_claims",
    "name": "Business expense and claims"
  },
  {
    "code": "fees_and_charges",
    "name": "Fees and charges"
  },
  {
    "code": "fund_transfer_and_intracompany_payment",
    "name": "Fund transfer and intracompany payment"
  },
  {
    "code": "gifts_and_donations",
    "name": "Gifts and donations"
  },
  {
    "code": "government_services_and_tax",
    "name": "Government services and tax"
  },
  {
    "code": "insurance",
    "name": "Insurance"
  },
  {
    "code": "inventory",
    "name": "Inventory"
  },
  {
    "code": "investment_dividend_and_interest",
    "name": "Investment, dividend and interest"
  },
  {
    "code": "loan_and_loan_repayment",
    "name": "Loan and loan repayment"
  },
  {
    "code": "marketing",
    "name": "Marketing"
  },
  {
    "code": "payment_for_goods_and_services",
    "name": "Payment for goods and services"
  },
  {
    "code": "payroll",
    "name": "Payroll"
  },
  {
    "code": "refund",
    "name": "Refund"
  },
  {
    "code": "rental_and_property",
    "name": "Rental and property"
  },
  {
    "code": "sales",
    "name": "Sales"
  },
  {
    "code": "service_provider_and_software",
    "name": "Service provider and software"
  },
  {
    "code": "travel_and_transportation",
    "name": "Travel and transportation"
  },
  {
    "code": "utilities",
    "name": "Utilities"
  }
]
```

The list of available exchange reasons.

<h2 id="tocS_ExchangeReasonCode">ExchangeReasonCode</h2>
<!-- backwards compatibility -->
<a id="schemaexchangereasoncode"></a>
<a id="schema_ExchangeReasonCode"></a>
<a id="tocSexchangereasoncode"></a>
<a id="tocsexchangereasoncode"></a>

```json
"fund_transfer_and_intracompany_payment"
```

The reason code for the exchange.
Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. 
You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).

If an exchange reason is not required, this field is ignored.

<h2 id="tocS_ExchangeRequest">ExchangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangerequest"></a>
<a id="schema_ExchangeRequest"></a>
<a id="tocSexchangerequest"></a>
<a id="tocsexchangerequest"></a>

```json
{
  "from": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currency": "string",
    "amount": 0
  },
  "to": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "currency": "string",
    "amount": 0
  },
  "reference": "string",
  "request_id": "string",
  "exchange_reason_code": "fund_transfer_and_intracompany_payment"
}
```

The exchange information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[ExchangePartFrom](#schemaexchangepartfrom)|true|none|The details of the currency to exchange from.|
|to|[ExchangePartTo](#schemaexchangepartto)|true|none|The details of the currency to exchange to.|
|reference|string|false|none|The reference for the exchange transaction, provided by you.<br>It helps you to identify the transaction if you want to look it up later.|
|request_id|string|true|none|The ID of the request, provided by you.<br>It helps you identify the transaction in your system.<br><br>:::warning<br>To ensure that an exchange transaction is not processed multiple times if there are network or system errors,<br>the same `request_id` should be used for requests related to the same transaction.<br>:::|
|exchange_reason_code|[ExchangeReasonCode](#schemaexchangereasoncode)|false|none|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|

<h2 id="tocS_ExchangeResponse">ExchangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeresponse"></a>
<a id="schema_ExchangeResponse"></a>
<a id="tocSexchangeresponse"></a>
<a id="tocsexchangeresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "reason_code": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "state": "created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the created transaction.|
|type|string|false|none|The type of the transaction. For money exchange, it is `exchange`.|
|reason_code|string|false|none|The reason why the transaction was failed or declined.<br><br>Present only when the `state` parameter of the transaction is `declined` or `failed`.|
|created_at|string(date-time)|false|none|The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|state|[TransactionState](#schematransactionstate)|false|none|Indicates the transaction state.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| The transaction has been created and is either processed asynchronously or scheduled for a later time. \|<br>\| **`pending`** \| The transaction is pending until it's being processed. If the transfer is made between Revolut accounts, this state is skipped and the transaction is executed instantly. \|<br>\| **`completed`** \| The transaction was successful. \|<br>\| **`declined`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, insufficient account balance, wrong receiver information, etc. \|<br>\| **`failed`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc. \|<br>\| **`reverted`** \| The transaction was reverted. This can happen for a variety of reasons, for example, the receiver being inaccessible. \||

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|pending|
|state|completed|
|state|declined|
|state|failed|
|state|reverted|

<h2 id="tocS_Expense">Expense</h2>
<!-- backwards compatibility -->
<a id="schemaexpense"></a>
<a id="schema_Expense"></a>
<a id="tocSexpense"></a>
<a id="tocsexpense"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "missing_info",
  "transaction_type": "atm",
  "description": "string",
  "submitted_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "payer": "string",
  "merchant": "string",
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expense_date": "1970-01-01T00:00:00Z",
  "labels": {
    "Office supplies": [
      "Photocopying"
    ],
    "Department": [
      "HR"
    ]
  },
  "splits": [
    {
      "amount": {
        "amount": 0,
        "currency": "string"
      },
      "category": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "code": "string"
      },
      "labels": {
        "Office supplies": [
          "Photocopying"
        ]
      },
      "tax_rate": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "percentage": 0
      }
    }
  ],
  "receipt_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "spent_amount": {
    "amount": 0,
    "currency": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the expense.|
|state|[ExpenseState](#schemaexpensestate)|true|none|Indicates the state of the expense.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`missing_info`** \| The expense is missing some required information. This is the initial state of the expense when it's first created. Once the missing information is provided, the expense is ready to be submitted. \|<br>\| **`awaiting_review`** \| The expense is awaiting approval before it can be completed. The approver can approve, reject, or request repayment for the expense. It is also possible for the submitter to undo the submission at this stage. \|<br>\| **`rejected`** \| The expense has been rejected by the approver. The expense submitter (typically, the payer) should fix the issue that was the reason for the rejection and resubmit the expense. \|<br>\| **`pending_reimbursement`** \| The reimbursement request has been approved, and the expense is awaiting reimbursement. This state is possible for reimbursements (transaction type = `External`). \|<br>\| **`refund_requested`** \| The expense has been rejected and repayment has been requested.* This state is possible for card transactions. It indicates that following the review, the approver rejected the expense and requested that it be paid back to the business account. This can happen, for example, if an employee accidentally makes a personal purchase with their business card. Once the money has been returned, the **admin** can mark this expense as repaid. \|<br>\| **`refunded`** \| The expense has been repaid.* This state indicates that the admin has marked the expense as repaid. \|<br>\| **`approved`** \| The expense has been approved and is now completed.* \|<br>\| **`reverted`** \| The expense has been reverted. This status indicates that the transaction related to the expense has been reverted. In such a case, the expense status is automatically set to `reverted`, and the expense is completed. This can happen, for example, when the transaction has been reverted by the merchant. \|<br><br>_*Additionally, if an admin has previously approved the expense, marked it as repaid/completed, or requested repayment, they can revert their decision.<br>In such a case, the expense goes back to the initial `missing_info` state._<br><br>For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses#expense-state).|
|transaction_type|[ExpenseTransactionType](#schemaexpensetransactiontype)|true|none|The type of the [transaction](https://developer.revolut.com/docs/api/business#get-transaction) related to the expense.|
|description|string|false|none|The description of the expense.|
|submitted_at|string(date-time)|false|none|The date and time the expense was submitted in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the expense was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|payer|string|false|none|The name of the [team member](https://developer.revolut.com/docs/api/business#delete-team-member) who made the transaction, refund request, or ATM withdrawal, or the name of the business if the related transaction is of type `fee`.|
|merchant|string|false|none|The name of the merchant.|
|transaction_id|string(uuid)|false|none|The ID of the [transaction](https://developer.revolut.com/docs/api/business#get-transaction) related to the expense. Not available for transactions of type `external`.|
|expense_date|string(date-time)|true|none|The expense data depends on the type of the expense and whether it has been completed.<br><br>Typically, it's the date and time of the expense [transaction](https://developer.revolut.com/docs/api/business#get-transaction) in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>- If the transaction related to the expense is completed, it is the date and time of its completion ([`completed_at`](https://developer.revolut.com/docs/api/business#get-transaction#response)).<br>- Otherwise, it is the date and time of its creation ([`created_at`](https://developer.revolut.com/docs/api/business#get-transaction#response)).<br><br>For reimbursements, it's the payment date provided in the reimbursement request.|
|labels|object|true|none|**Deprecated.** :::warning [Deprecated]<br>This field is deprecated.<br>Labels are now assigned per split and returned in `splits[].labels`.<br>During the deprecation period, this field is still returned for backwards compatibility, and the labels are filled as follows:<br>- For expenses created before the migration, the expense-level label is copied to all splits of the expense.<br>- For new expenses, the labels are set at the split level, and the expense-level label is populated with the label from the first split.<br>This field will be removed in a future release.<br>:::<br><br>The [labels](https://developer.revolut.com/docs/api/business#delete-label) added to the expense, organised in groups.<br><br>You can have up to 5 label groups, with max. 1 label per group.<br><br>The labels are provided as an object, where each key is the name of a label group, and each value is a single-element array containing the selected label from that group.<br><br>This field is always returned, but it can be an empty object (`{}`) if no label is assigned.|
|splits|[[ExpenseSplit](#schemaexpensesplit)]|true|none|The splits of the expense.<br><br>A single expense can be divided into multiple parts (splits), for example, to allocate different portions of the expense to different categories.|
|receipt_ids|[string(uuid)]|true|none|The IDs of the receipts related to the expense.|
|spent_amount|object|true|none|The expense amount in billed currency.<br><br>If the expense involves FX, this currency can differ from the currency of the splits.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|missing_info|
|state|awaiting_review|
|state|rejected|
|state|pending_reimbursement|
|state|refund_requested|
|state|refunded|
|state|approved|
|state|reverted|
|transaction_type|atm|
|transaction_type|card_payment|
|transaction_type|fee|
|transaction_type|transfer|
|transaction_type|external|
|transaction_type|mileage_reimbursement|
|transaction_type|rev_payment|

<h2 id="tocS_Expenses">Expenses</h2>
<!-- backwards compatibility -->
<a id="schemaexpenses"></a>
<a id="schema_Expenses"></a>
<a id="tocSexpenses"></a>
<a id="tocsexpenses"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "state": "missing_info",
    "transaction_type": "atm",
    "description": "string",
    "submitted_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "payer": "string",
    "merchant": "string",
    "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "expense_date": "1970-01-01T00:00:00Z",
    "labels": {
      "Office supplies": [
        "Photocopying"
      ],
      "Department": [
        "HR"
      ]
    },
    "splits": [
      {
        "amount": {
          "amount": 0,
          "currency": "string"
        },
        "category": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "code": "string"
        },
        "labels": {
          "Office supplies": [
            "Photocopying"
          ]
        },
        "tax_rate": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "percentage": 0
        }
      }
    ],
    "receipt_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "spent_amount": {
      "amount": 0,
      "currency": "string"
    }
  }
]
```

<h2 id="tocS_ExpenseSplit">ExpenseSplit</h2>
<!-- backwards compatibility -->
<a id="schemaexpensesplit"></a>
<a id="schema_ExpenseSplit"></a>
<a id="tocSexpensesplit"></a>
<a id="tocsexpensesplit"></a>

```json
{
  "amount": {
    "amount": 0,
    "currency": "string"
  },
  "category": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "code": "string"
  },
  "labels": {
    "Office supplies": [
      "Photocopying"
    ]
  },
  "tax_rate": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "percentage": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|true|none|The original amount of the expense split.|
|category|[Category](#schemacategory)|true|none|The [accounting category](https://developer.revolut.com/docs/api/business#delete-accounting-category) of the expense split.|
|labels|object|true|none|:::note<br>This field replaces the expense-level `labels` field, which is now deprecated.<br>During the deprecation period, the labels are filled as follows:<br>- For expenses created before the migration, the expense-level label is copied to all splits of the expense.<br>- For new expenses, the labels are set at the split level, and the expense-level label is populated with the first label from the first split.<br>:::<br><br>The [labels](https://developer.revolut.com/docs/api/business#delete-label) assigned to the split, organised in groups.<br><br>You can have up to 5 label groups, with max. 1 label per group.<br>Each split can have a different set of labels.<br><br>The labels are provided as an object, where each key is the name of a label group, and each value is a single-element array containing the selected label from that group.<br><br>This field is always returned, but it can be an empty object (`{}`) when the split has no labels.|
|tax_rate|[TaxRate](#schemataxrate)|true|none|The [tax rate](https://developer.revolut.com/docs/api/business#delete-tax-rate) applied to the expense split.|

<h2 id="tocS_ExpenseState">ExpenseState</h2>
<!-- backwards compatibility -->
<a id="schemaexpensestate"></a>
<a id="schema_ExpenseState"></a>
<a id="tocSexpensestate"></a>
<a id="tocsexpensestate"></a>

```json
"missing_info"
```

Indicates the state of the expense.
Possible values:

| Value | Description |
| --- | --- |
| **`missing_info`** | The expense is missing some required information. This is the initial state of the expense when it's first created. Once the missing information is provided, the expense is ready to be submitted. |
| **`awaiting_review`** | The expense is awaiting approval before it can be completed. The approver can approve, reject, or request repayment for the expense. It is also possible for the submitter to undo the submission at this stage. |
| **`rejected`** | The expense has been rejected by the approver. The expense submitter (typically, the payer) should fix the issue that was the reason for the rejection and resubmit the expense. |
| **`pending_reimbursement`** | The reimbursement request has been approved, and the expense is awaiting reimbursement. This state is possible for reimbursements (transaction type = `External`). |
| **`refund_requested`** | The expense has been rejected and repayment has been requested.* This state is possible for card transactions. It indicates that following the review, the approver rejected the expense and requested that it be paid back to the business account. This can happen, for example, if an employee accidentally makes a personal purchase with their business card. Once the money has been returned, the **admin** can mark this expense as repaid. |
| **`refunded`** | The expense has been repaid.* This state indicates that the admin has marked the expense as repaid. |
| **`approved`** | The expense has been approved and is now completed.* |
| **`reverted`** | The expense has been reverted. This status indicates that the transaction related to the expense has been reverted. In such a case, the expense status is automatically set to `reverted`, and the expense is completed. This can happen, for example, when the transaction has been reverted by the merchant. |

_*Additionally, if an admin has previously approved the expense, marked it as repaid/completed, or requested repayment, they can revert their decision.
In such a case, the expense goes back to the initial `missing_info` state._

For more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses#expense-state).

<h2 id="tocS_ExpenseTransactionType">ExpenseTransactionType</h2>
<!-- backwards compatibility -->
<a id="schemaexpensetransactiontype"></a>
<a id="schema_ExpenseTransactionType"></a>
<a id="tocSexpensetransactiontype"></a>
<a id="tocsexpensetransactiontype"></a>

```json
"atm"
```

The type of the [transaction](https://developer.revolut.com/docs/api/business#get-transaction) related to the expense.

<h2 id="tocS_Fee">Fee</h2>
<!-- backwards compatibility -->
<a id="schemafee"></a>
<a id="schema_Fee"></a>
<a id="tocSfee"></a>
<a id="tocsfee"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|The fee amount.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|

<h2 id="tocS_IndicativeQuoteEstimatedArrival">IndicativeQuoteEstimatedArrival</h2>
<!-- backwards compatibility -->
<a id="schemaindicativequoteestimatedarrival"></a>
<a id="schema_IndicativeQuoteEstimatedArrival"></a>
<a id="tocSindicativequoteestimatedarrival"></a>
<a id="tocsindicativequoteestimatedarrival"></a>

```json
{
  "date": "1970-01-01",
  "speed": "instant"
}
```

Estimated time and speed of funds arrival in relation to the current date and time.
Present if such information is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|true|none|The estimated arrival date provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|speed|string|true|none|The expected speed of the transfer.<br><br>Possible values are:<br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`instant`** \| The funds are expected to reach the recipient **immediately** after the transfer is created. \|<br>\| **`in_seconds`** \| The funds are expected to reach the recipient **within 5 minutes** after the transfer is created. \|<br>\| **`today`** \| The funds are expected to reach the recipient by the end of the **same day** the transfer is created. \|<br>\| **`tomorrow`** \| The funds are expected to reach the recipient by the end of the **day after** the transfer is created. \|<br>\| **`by_date`** \| The funds are expected to reach the recipient by the end of the **day specified** in the `date` parameter. \||

#### Enumerated Values

|Property|Value|
|---|---|
|speed|instant|
|speed|in_seconds|
|speed|today|
|speed|tomorrow|
|speed|by_date|

<h2 id="tocS_IndicativeQuoteFee">IndicativeQuoteFee</h2>
<!-- backwards compatibility -->
<a id="schemaindicativequotefee"></a>
<a id="schema_IndicativeQuoteFee"></a>
<a id="tocSindicativequotefee"></a>
<a id="tocsindicativequotefee"></a>

```json
{
  "amount": 0,
  "currency": "string",
  "breakdown": {
    "transfer_fee": {
      "amount": 0,
      "currency": "string"
    },
    "exchange_fee": {
      "amount": 0,
      "currency": "string"
    }
  }
}
```

Details of the total fee for the transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|Fee amount in major units.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|breakdown|[IndicativeQuoteFeeBreakdown](#schemaindicativequotefeebreakdown)|false|none|Breakdown of transfer and exchange fees.<br><br>When the total `fee` is zero, this field is omitted from the response.|

<h2 id="tocS_IndicativeQuoteFeeBreakdown">IndicativeQuoteFeeBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaindicativequotefeebreakdown"></a>
<a id="schema_IndicativeQuoteFeeBreakdown"></a>
<a id="tocSindicativequotefeebreakdown"></a>
<a id="tocsindicativequotefeebreakdown"></a>

```json
{
  "transfer_fee": {
    "amount": 0,
    "currency": "string"
  },
  "exchange_fee": {
    "amount": 0,
    "currency": "string"
  }
}
```

Breakdown of transfer and exchange fees.

When the total `fee` is zero, this field is omitted from the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transfer_fee|[SimpleFee](#schemasimplefee)|false|none|A specific fee component.|
|exchange_fee|[SimpleFee](#schemasimplefee)|false|none|A specific fee component.|

<h2 id="tocS_IndicativeQuoteRequest">IndicativeQuoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaindicativequoterequest"></a>
<a id="schema_IndicativeQuoteRequest"></a>
<a id="tocSindicativequoterequest"></a>
<a id="tocsindicativequoterequest"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "amount": 0,
  "currency": "string",
  "charge_bearer": "shared",
  "transfer_reason_code": "property_rental",
  "exchange_reason_code": "fund_transfer_and_intracompany_payment"
}
```

The request details for an indicative quote.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|The ID of the account from which the transfer will be made.|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|true|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|amount|number(double)|true|none|The transfer amount in major units.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|charge_bearer|[ChargeBearer](#schemachargebearer)|false|none|The party to which any transaction fees are charged if the resulting transaction route has associated fees: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br>\| **`prefer_debtor`** \| Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. \|<br><br>:::note<br>Some transactions with fees might not support forced charge bearer selection.<br>If this is the case, the request will return an error.<br>This does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.<br>:::|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|
|exchange_reason_code|[ExchangeReasonCode](#schemaexchangereasoncode)|false|none|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|charge_bearer|shared|
|charge_bearer|debtor|
|charge_bearer|prefer_debtor|

<h2 id="tocS_IndicativeQuoteResponse">IndicativeQuoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaindicativequoteresponse"></a>
<a id="schema_IndicativeQuoteResponse"></a>
<a id="tocSindicativequoteresponse"></a>
<a id="tocsindicativequoteresponse"></a>

```json
{
  "amount": {
    "amount": 0,
    "currency": "string"
  },
  "fee": {
    "amount": 0,
    "currency": "string",
    "breakdown": {
      "transfer_fee": {
        "amount": 0,
        "currency": "string"
      },
      "exchange_fee": {
        "amount": 0,
        "currency": "string"
      }
    }
  },
  "estimated_total": {
    "amount": 0,
    "currency": "string"
  },
  "estimated_exchange_rate": "string",
  "estimated_amount_after_exchange": {
    "amount": 0,
    "currency": "string"
  },
  "estimated_arrival": {
    "date": "1970-01-01",
    "speed": "instant"
  },
  "warnings": [
    "volatile_fx_rate"
  ]
}
```

The expected processing attributes for a potential transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Money](#schemamoney)|true|none|Amount the recipient receives before fees are deducted, in major units.|
|fee|[IndicativeQuoteFee](#schemaindicativequotefee)|true|none|Total fee for the transfer (in source or target currency).|
|estimated_total|[Money](#schemamoney)|true|none|Total amount of money which will be charged on the sender's account.|
|estimated_exchange_rate|string|false|none|Exchange rate for the transfer.<br><br>For same-currency transfers, this field is omitted from the response.|
|estimated_amount_after_exchange|[Money](#schemamoney)|false|none|Amount of the money converted to the sender's currency.<br><br>For same-currency transfers, this field is omitted from the response.|
|estimated_arrival|[IndicativeQuoteEstimatedArrival](#schemaindicativequoteestimatedarrival)|false|none|Estimated time and speed of funds arrival in relation to the current date and time.<br>Present if such information is available.|
|warnings|[string]|false|none|Potential warnings regarding the quote:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`volatile_fx_rate`** \| Returned when the specified FX rate is volatile. \||

#### Enumerated Values

|Property|Value|
|---|---|
|warnings|volatile_fx_rate|

<h2 id="tocS_IndividualName">IndividualName</h2>
<!-- backwards compatibility -->
<a id="schemaindividualname"></a>
<a id="schema_IndividualName"></a>
<a id="tocSindividualname"></a>
<a id="tocsindividualname"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

The name of the counterparty, provided when the counterparty is an **individual** (personal account type) and is **not** being added via Revtag.

If specified, `company_name` and `name` must be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|The first name of the individual counterparty.|
|last_name|string|false|none|The last name of the individual counterparty.|

<h2 id="tocS_LabelGroup">LabelGroup</h2>
<!-- backwards compatibility -->
<a id="schemalabelgroup"></a>
<a id="schema_LabelGroup"></a>
<a id="tocSlabelgroup"></a>
<a id="tocslabelgroup"></a>

```json
[
  "HR"
]
```

A label group with the selected label from that group.

For example, you might have a label group called **Department**, and the label you select from that group might be **HR**: `"Department": [ "HR" ]`.

<h2 id="tocS_LabelGroupResponse">LabelGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalabelgroupresponse"></a>
<a id="schema_LabelGroupResponse"></a>
<a id="tocSlabelgroupresponse"></a>
<a id="tocslabelgroupresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|The unique ID of the label group.|
|name|string|true|none|The name of the label group.|
|created_at|string(date-time)|true|read-only|The date and time the label group was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|read-only|The date and time the label group was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_LabelResponse">LabelResponse</h2>
<!-- backwards compatibility -->
<a id="schemalabelresponse"></a>
<a id="schema_LabelResponse"></a>
<a id="tocSlabelresponse"></a>
<a id="tocslabelresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|The unique ID of the label.|
|name|string|true|none|The name of the label.|
|created_at|string(date-time)|true|read-only|The date and time the label was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|read-only|The date and time the label was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_MerchantControlsSchema">MerchantControlsSchema</h2>
<!-- backwards compatibility -->
<a id="schemamerchantcontrolsschema"></a>
<a id="schema_MerchantControlsSchema"></a>
<a id="tocSmerchantcontrolsschema"></a>
<a id="tocsmerchantcontrolsschema"></a>

```json
{
  "control_type": "block",
  "merchant_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

The merchant-level controls for card spending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control_type|string|true|none|The type of control to apply.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`allow`** \| Permits only the specified merchants. \|<br>\| **`block`** \| Blocks the specified merchants. \||
|merchant_ids|[string(uuid)]|true|none|The list of IDs of merchants to which the control applies.<br><br>:::tip<br>To find merchant IDs, check transaction details (→ `merchant.id`).<br>You can fetch transaction details for a [specific transaction](https://developer.revolut.com/docs/api/business#get-transaction#response) or for [all transactions](https://developer.revolut.com/docs/api/business#get-transactions#response).<br>:::|

#### Enumerated Values

|Property|Value|
|---|---|
|control_type|block|
|control_type|allow|

<h2 id="tocS_MccControlsSchema">MccControlsSchema</h2>
<!-- backwards compatibility -->
<a id="schemamcccontrolsschema"></a>
<a id="schema_MccControlsSchema"></a>
<a id="tocSmcccontrolsschema"></a>
<a id="tocsmcccontrolsschema"></a>

```json
{
  "control_type": "allow",
  "mccs": [
    "7033"
  ]
}
```

The MCC controls for card spending.
They restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).
:::tip
MCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control_type|[MccControlType](#schemamcccontroltype)|true|none|The type of control to apply.|
|mccs|[Mccs](#schemamccs)|true|none|The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.|

#### Enumerated Values

|Property|Value|
|---|---|
|control_type|allow|

<h2 id="tocS_MccControlType">MccControlType</h2>
<!-- backwards compatibility -->
<a id="schemamcccontroltype"></a>
<a id="schema_MccControlType"></a>
<a id="tocSmcccontroltype"></a>
<a id="tocsmcccontroltype"></a>

```json
"allow"
```

The type of control to apply.

<h2 id="tocS_Mccs">Mccs</h2>
<!-- backwards compatibility -->
<a id="schemamccs"></a>
<a id="schema_Mccs"></a>
<a id="tocSmccs"></a>
<a id="tocsmccs"></a>

```json
[
  "7033"
]
```

The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

A monetary amount and its associated currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|Amount in major units.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|

<h2 id="tocS_PaymentDraftResponse">PaymentDraftResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdraftresponse"></a>
<a id="schema_PaymentDraftResponse"></a>
<a id="tocSpaymentdraftresponse"></a>
<a id="tocspaymentdraftresponse"></a>

```json
{
  "scheduled_for": "1970-01-01",
  "title": "string",
  "payments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": {
        "amount": 0,
        "currency": "string"
      },
      "currency": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "receiver": {
        "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "state": "CREATED",
      "reason": "string",
      "error_message": "string",
      "current_charge_options": {
        "from": {
          "amount": 0,
          "currency": "string"
        },
        "to": {
          "amount": 0,
          "currency": "string"
        },
        "rate": "string",
        "fee": {
          "amount": 0,
          "currency": "string"
        }
      },
      "reference": "string",
      "transfer_reason_code": "property_rental"
    }
  ],
  "source": "api"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduled_for|string(date)|false|none|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|title|string|false|none|The title of the payment draft.|
|payments|[[PaymentInfo](#schemapaymentinfo)]|true|none|The list of payments in the bulk.|
|source|string|false|none|The source from which the payment draft was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|integration|
|source|email|
|source|business_app|

<h2 id="tocS_PageToken">PageToken</h2>
<!-- backwards compatibility -->
<a id="schemapagetoken"></a>
<a id="schema_PageToken"></a>
<a id="tocSpagetoken"></a>
<a id="tocspagetoken"></a>

```json
"MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA"
```

Cursor for the next page. 
Used for pagination when the total number of results exceeds the maximum number per page.

To get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.
Omit this parameter to fetch the first page.
:::note
If there are no more results to fetch, `next_page_token` is not returned in the response.
:::

<h2 id="tocS_PaymentDraftsResponse">PaymentDraftsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdraftsresponse"></a>
<a id="schema_PaymentDraftsResponse"></a>
<a id="tocSpaymentdraftsresponse"></a>
<a id="tocspaymentdraftsresponse"></a>

```json
{
  "payment_orders": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scheduled_for": "1970-01-01",
      "title": "string",
      "payments_count": 0,
      "source": "api"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_orders|[[PaymentOrderInfo](#schemapaymentorderinfo)]|true|none|The list of payment drafts that haven't been sent for processing.|

<h2 id="tocS_PaymentInfo">PaymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinfo"></a>
<a id="schema_PaymentInfo"></a>
<a id="tocSpaymentinfo"></a>
<a id="tocspaymentinfo"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": {
    "amount": 0,
    "currency": "string"
  },
  "currency": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "state": "CREATED",
  "reason": "string",
  "error_message": "string",
  "current_charge_options": {
    "from": {
      "amount": 0,
      "currency": "string"
    },
    "to": {
      "amount": 0,
      "currency": "string"
    },
    "rate": "string",
    "fee": {
      "amount": 0,
      "currency": "string"
    }
  },
  "reference": "string",
  "transfer_reason_code": "property_rental"
}
```

The details of the payment draft.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the payment.<br><br>Do not confuse it with the [payment draft ID](https://developer.revolut.com/docs/api/business#get-payment-drafts#response) or [transaction ID](https://developer.revolut.com/docs/api/business#get-transaction).|
|amount|[AmountWithCurrency](#schemaamountwithcurrency)|true|none|none|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|account_id|string(uuid)|true|none|The ID of the account to pay from.|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|false|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|state|[PaymentState](#schemapaymentstate)|true|none|Indicates the state of the transaction.|
|reason|string|false|none|The reason for the current state.|
|error_message|string|false|none|The description of the error message.|
|current_charge_options|object|true|none|The explanation of conversion process.|
|reference|string|false|none|The description of the transaction.|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|CREATED|
|state|PENDING|
|state|COMPLETED|
|state|REVERTED|
|state|DECLINED|
|state|CANCELLED|
|state|FAILED|
|state|DELETED|

<h2 id="tocS_PaymentOrderInfo">PaymentOrderInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentorderinfo"></a>
<a id="schema_PaymentOrderInfo"></a>
<a id="tocSpaymentorderinfo"></a>
<a id="tocspaymentorderinfo"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scheduled_for": "1970-01-01",
  "title": "string",
  "payments_count": 0,
  "source": "api"
}
```

A list of payments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the payment draft.|
|scheduled_for|string(date)|false|none|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|title|string|false|none|The title of the payment draft.|
|payments_count|integer|true|none|The number of payments in the payment draft.|
|source|string|false|none|The source from which the payment draft was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|integration|
|source|email|
|source|business_app|

<h2 id="tocS_PaymentReceiver">PaymentReceiver</h2>
<!-- backwards compatibility -->
<a id="schemapaymentreceiver"></a>
<a id="schema_PaymentReceiver"></a>
<a id="tocSpaymentreceiver"></a>
<a id="tocspaymentreceiver"></a>

```json
{
  "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

The details of the transfer recipient.

If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty_id|string(uuid)|true|none|The ID of the receiving counterparty.|
|account_id|string(uuid)|false|none|The ID of the receiving counterparty's account. Used for bank transfers.<br><br>If the counterparty has multiple payment methods available, use it to specify the account to which you want to send the money.|
|card_id|string(uuid)|false|none|The ID of the receiving counterparty's card.<br>Used for card transfers.<br><br>If the counterparty has multiple payment methods available, use it to specify the card to which you want to send the money.|

<h2 id="tocS_PaymentRequest">PaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest"></a>
<a id="schema_PaymentRequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "amount": 0.1,
  "currency": "string",
  "reference": "string",
  "charge_bearer": "shared",
  "transfer_reason_code": "property_rental"
}
```

The details of the draft payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|The ID of the account to pay from. <br><br>:::note<br>You can specify only one account ID for multiple payments in the same payment draft.<br>:::|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|true|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|amount|number(double)|true|none|The amount of the payment.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|reference|string|true|none|The reference for the payment.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.<br><br>You might include an invoice number, account or transaction ID, or any other reference meaningful to you.|
|charge_bearer|string|false|none|The party that should bear the transaction fees related to the selected transaction route if applied.<br>Possible options are: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br><br>:::note<br>- This field is not supported for [bulk payments](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#use-cases).<br>- Some transactions with fees might not support charge bearer selection.<br>  If this is the case, the request will return an error.<br>  To proceed with the default fee handling, remove this field from your request and try again.<br>:::|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|charge_bearer|shared|
|charge_bearer|debtor|

<h2 id="tocS_PaymentRequirementsRequest">PaymentRequirementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsrequest"></a>
<a id="schema_PaymentRequirementsRequest"></a>
<a id="tocSpaymentrequirementsrequest"></a>
<a id="tocspaymentrequirementsrequest"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

The request details to evaluate payment requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|The ID of the account from which the transfer will be made.|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|true|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|

<h2 id="tocS_PaymentRequirementsResponse">PaymentRequirementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsresponse"></a>
<a id="schema_PaymentRequirementsResponse"></a>
<a id="tocSpaymentrequirementsresponse"></a>
<a id="tocspaymentrequirementsresponse"></a>

```json
{
  "fields": [
    {
      "name": "string",
      "required": true,
      "validation": {
        "min_length": 0,
        "max_length": 0,
        "regex": {
          "pattern": "string",
          "description": "string"
        }
      },
      "options": [
        {
          "value": "string",
          "default": true
        }
      ]
    }
  ]
}
```

The response containing applicable payment fields and their validation rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[PaymentRequirementsField](#schemapaymentrequirementsfield)]|true|none|A list of applicable and conditionally required fields for the specific payment context.|

<h2 id="tocS_PaymentRequirementsField">PaymentRequirementsField</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsfield"></a>
<a id="schema_PaymentRequirementsField"></a>
<a id="tocSpaymentrequirementsfield"></a>
<a id="tocspaymentrequirementsfield"></a>

```json
{
  "name": "string",
  "required": true,
  "validation": {
    "min_length": 0,
    "max_length": 0,
    "regex": {
      "pattern": "string",
      "description": "string"
    }
  },
  "options": [
    {
      "value": "string",
      "default": true
    }
  ]
}
```

Represents a contextual field and its rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the field to be provided in the [`/pay` endpoint](https://developer.revolut.com/docs/business#create-payment) request body.<br>Matches the field names in the `/pay` endpoint exactly.<br><br>E.g. `reference`, `charge_bearer`, `transfer_reason_code`, `exchange_reason_code`, `fiscal_code`.<br><br>Universally required fields (such as `amount`, `account_id`, `receiver`, and `request_id`) are always required and are intentionally excluded from this response.<br>For field descriptions, see the [`/pay` endpoint](https://developer.revolut.com/docs/business#create-payment) request body.|
|required|boolean|true|none|Indicates whether this field must be provided for the given transfer.|
|validation|[PaymentRequirementsFieldValidation](#schemapaymentrequirementsfieldvalidation)|false|none|Validation rules applied to the field.|
|options|[[PaymentRequirementsFieldOption](#schemapaymentrequirementsfieldoption)]|false|none|A list of allowed values for the field (enum).<br>If provided, the field value must be one of these options.|

<h2 id="tocS_PaymentRequirementsFieldValidation">PaymentRequirementsFieldValidation</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsfieldvalidation"></a>
<a id="schema_PaymentRequirementsFieldValidation"></a>
<a id="tocSpaymentrequirementsfieldvalidation"></a>
<a id="tocspaymentrequirementsfieldvalidation"></a>

```json
{
  "min_length": 0,
  "max_length": 0,
  "regex": {
    "pattern": "string",
    "description": "string"
  }
}
```

Validation rules applied to the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_length|integer|false|none|The minimum allowed character length for the field value.|
|max_length|integer|false|none|The maximum allowed character length for the field value.|
|regex|[PaymentRequirementsFieldRegex](#schemapaymentrequirementsfieldregex)|false|none|Regular expression validation rules.|

<h2 id="tocS_PaymentRequirementsFieldRegex">PaymentRequirementsFieldRegex</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsfieldregex"></a>
<a id="schema_PaymentRequirementsFieldRegex"></a>
<a id="tocSpaymentrequirementsfieldregex"></a>
<a id="tocspaymentrequirementsfieldregex"></a>

```json
{
  "pattern": "string",
  "description": "string"
}
```

Regular expression validation rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|string|true|none|The regex pattern the field value must match.|
|description|string|true|none|A human-readable description of the regex constraint.|

<h2 id="tocS_PaymentRequirementsFieldOption">PaymentRequirementsFieldOption</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirementsfieldoption"></a>
<a id="schema_PaymentRequirementsFieldOption"></a>
<a id="tocSpaymentrequirementsfieldoption"></a>
<a id="tocspaymentrequirementsfieldoption"></a>

```json
{
  "value": "string",
  "default": true
}
```

An allowed value option for the field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The accepted value to be passed to the API.|
|default|boolean|false|none|Indicates the default option for the field if there is one.|

<h2 id="tocS_PaymentState">PaymentState</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstate"></a>
<a id="schema_PaymentState"></a>
<a id="tocSpaymentstate"></a>
<a id="tocspaymentstate"></a>

```json
"CREATED"
```

Indicates the state of the transaction.

<h2 id="tocS_PaymentSystem">PaymentSystem</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsystem"></a>
<a id="schema_PaymentSystem"></a>
<a id="tocSpaymentsystem"></a>
<a id="tocspaymentsystem"></a>

```json
"swift"
```

Indicates the payment scheme used to execute transactions.

<h2 id="tocS_PayoutLinkInitialProps">PayoutLinkInitialProps</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkinitialprops"></a>
<a id="schema_PayoutLinkInitialProps"></a>
<a id="tocSpayoutlinkinitialprops"></a>
<a id="tocspayoutlinkinitialprops"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "counterparty_name": "John Smith",
  "save_counterparty": false,
  "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
  "expiry_date": "2023‐07‐20T15:09:24Z",
  "payout_methods": [
    "revolut",
    "bank_account",
    "card"
  ],
  "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
  "amount": 105.6,
  "currency": "string",
  "url": "http://example.com",
  "reference": "Rent",
  "transfer_reason_code": "property_rental"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the payout link.|
|state|[PayoutLinkState](#schemapayoutlinkstate)|true|none|The state that the payout link is in.<br>Possible states are:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| The payout link has been created, but the amount has not yet been [blocked](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links#sender-link-generation). \|<br>\| **`failed`** \| The payout link couldn't be generated due to a failure during transaction booking. \|<br>\| **`awaiting`** \| The payout link is awaiting approval. \|<br>\| **`active`** \| The payout link can be redeemed. \|<br>\| **`expired`** \| The payout link cannot be redeemed because it wasn't claimed before its expiry date. \|<br>\| **`cancelled`** \| The payout link cannot be redeemed because it was cancelled. \|<br>\| **`processing`** \| The payout link has been redeemed and is being processed. \|<br>\| **`processed`** \| The payout link has been redeemed and the money has been transferred to the recipient. \||
|created_at|string(date-time)|true|none|The date and time the payout link was created in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).|
|updated_at|string(date-time)|true|none|The date and time the payout link was last updated in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).|
|counterparty_name|[PayoutLinkCounterpartyName](#schemapayoutlinkcounterpartyname)|true|none|The name of the counterparty provided by the sender.|
|save_counterparty|boolean|true|none|Indicates whether you chose to save the recipient as your counterparty upon link claim. <br>If `false` then the counterparty will not show up on your counterparties list, for example, when you [retrieve your counterparties](https://developer.revolut.com/docs/api/business#get-counterparties). <br>However, you can still [retrieve this counterparty by its ID](https://developer.revolut.com/docs/api/business#get-counterparty).<br><br>If you didn't choose to save the counterparty on link creation, you can still do it from your transactions list in the Business app.|
|request_id|[PayoutLinkRequestId](#schemapayoutlinkrequestid)|true|none|The ID of the request, provided by the sender.|
|expiry_date|[PayoutLinkExpiryDate](#schemapayoutlinkexpirydate)|false|none|The date and time after which the payout link expires in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).<br>If the recipient doesn't claim the money before then, the payout link expires and is no longer available.<br><br>The default and maximum value is the date and time of creating the link + 7 days.|
|payout_methods|[PayoutLinkPayoutMethods](#schemapayoutlinkpayoutmethods)|true|none|The list of payout methods that the recipient can use to claim the payout.|
|account_id|[PayoutLinkAccountId](#schemapayoutlinkaccountid)|true|none|The ID of the sender's account.|
|amount|[PayoutLinkAmount](#schemapayoutlinkamount)|true|none|The amount of money to be transferred.<br><br>:::note<br>The amount must be between £1 and £2,500, or equivalent in the selected currency.<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|url|string(uri)|false|none|The URL of the payout link. Returned only for active payout links.|
|reference|[PayoutLinkReference](#schemapayoutlinkreference)|true|none|The reference for the payout transaction, provided by the sender.|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|failed|
|state|awaiting|
|state|active|
|state|expired|
|state|cancelled|
|state|processing|
|state|processed|
|payout_methods|revolut|
|payout_methods|bank_account|
|payout_methods|card|

<h2 id="tocS_PayoutLinkAdditionalProps">PayoutLinkAdditionalProps</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkadditionalprops"></a>
<a id="schema_PayoutLinkAdditionalProps"></a>
<a id="tocSpayoutlinkadditionalprops"></a>
<a id="tocspayoutlinkadditionalprops"></a>

```json
{
  "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cancellation_reason": "too_many_name_check_attempts"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty_id|string(uuid)|false|none|The ID of the counterparty created based on the recipient's details. <br><br>:::note<br>By default, the newly created counterparty is hidden from your counterparties list. <br><br>To automatically save it when the link is claimed, pass the `save_counterparty` parameter set to `true`. <br><br>Alternatively, you can add the recipient to your counterparties later from the list of transactions in the Business app.<br>:::|
|transaction_id|string(uuid)|false|none|The ID of the created transaction. Returned only if the payout has been claimed.|
|cancellation_reason|string|false|read-only|The reason for which the payout link was cancelled.|

#### Enumerated Values

|Property|Value|
|---|---|
|cancellation_reason|too_many_name_check_attempts|

<h2 id="tocS_PayoutLink">PayoutLink</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlink"></a>
<a id="schema_PayoutLink"></a>
<a id="tocSpayoutlink"></a>
<a id="tocspayoutlink"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "counterparty_name": "John Smith",
  "save_counterparty": false,
  "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
  "expiry_date": "2023‐07‐20T15:09:24Z",
  "payout_methods": [
    "revolut",
    "bank_account",
    "card"
  ],
  "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
  "amount": 105.6,
  "currency": "string",
  "url": "http://example.com",
  "reference": "Rent",
  "transfer_reason_code": "property_rental",
  "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cancellation_reason": "too_many_name_check_attempts"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the payout link.|
|state|[PayoutLinkState](#schemapayoutlinkstate)|true|none|The state that the payout link is in.<br>Possible states are:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| The payout link has been created, but the amount has not yet been [blocked](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links#sender-link-generation). \|<br>\| **`failed`** \| The payout link couldn't be generated due to a failure during transaction booking. \|<br>\| **`awaiting`** \| The payout link is awaiting approval. \|<br>\| **`active`** \| The payout link can be redeemed. \|<br>\| **`expired`** \| The payout link cannot be redeemed because it wasn't claimed before its expiry date. \|<br>\| **`cancelled`** \| The payout link cannot be redeemed because it was cancelled. \|<br>\| **`processing`** \| The payout link has been redeemed and is being processed. \|<br>\| **`processed`** \| The payout link has been redeemed and the money has been transferred to the recipient. \||
|created_at|string(date-time)|true|none|The date and time the payout link was created in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).|
|updated_at|string(date-time)|true|none|The date and time the payout link was last updated in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).|
|counterparty_name|[PayoutLinkCounterpartyName](#schemapayoutlinkcounterpartyname)|true|none|The name of the counterparty provided by the sender.|
|save_counterparty|boolean|true|none|Indicates whether you chose to save the recipient as your counterparty upon link claim. <br>If `false` then the counterparty will not show up on your counterparties list, for example, when you [retrieve your counterparties](https://developer.revolut.com/docs/api/business#get-counterparties). <br>However, you can still [retrieve this counterparty by its ID](https://developer.revolut.com/docs/api/business#get-counterparty).<br><br>If you didn't choose to save the counterparty on link creation, you can still do it from your transactions list in the Business app.|
|request_id|[PayoutLinkRequestId](#schemapayoutlinkrequestid)|true|none|The ID of the request, provided by the sender.|
|expiry_date|[PayoutLinkExpiryDate](#schemapayoutlinkexpirydate)|false|none|The date and time after which the payout link expires in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).<br>If the recipient doesn't claim the money before then, the payout link expires and is no longer available.<br><br>The default and maximum value is the date and time of creating the link + 7 days.|
|payout_methods|[PayoutLinkPayoutMethods](#schemapayoutlinkpayoutmethods)|true|none|The list of payout methods that the recipient can use to claim the payout.|
|account_id|[PayoutLinkAccountId](#schemapayoutlinkaccountid)|true|none|The ID of the sender's account.|
|amount|[PayoutLinkAmount](#schemapayoutlinkamount)|true|none|The amount of money to be transferred.<br><br>:::note<br>The amount must be between £1 and £2,500, or equivalent in the selected currency.<br>:::|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|url|string(uri)|false|none|The URL of the payout link. Returned only for active payout links.|
|reference|[PayoutLinkReference](#schemapayoutlinkreference)|true|none|The reference for the payout transaction, provided by the sender.|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|
|counterparty_id|string(uuid)|false|none|The ID of the counterparty created based on the recipient's details. <br><br>:::note<br>By default, the newly created counterparty is hidden from your counterparties list. <br><br>To automatically save it when the link is claimed, pass the `save_counterparty` parameter set to `true`. <br><br>Alternatively, you can add the recipient to your counterparties later from the list of transactions in the Business app.<br>:::|
|transaction_id|string(uuid)|false|none|The ID of the created transaction. Returned only if the payout has been claimed.|
|cancellation_reason|string|false|read-only|The reason for which the payout link was cancelled.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|failed|
|state|awaiting|
|state|active|
|state|expired|
|state|cancelled|
|state|processing|
|state|processed|
|payout_methods|revolut|
|payout_methods|bank_account|
|payout_methods|card|
|cancellation_reason|too_many_name_check_attempts|

<h2 id="tocS_PayoutLinks">PayoutLinks</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinks"></a>
<a id="schema_PayoutLinks"></a>
<a id="tocSpayoutlinks"></a>
<a id="tocspayoutlinks"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "state": "created",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "counterparty_name": "John Smith",
    "save_counterparty": false,
    "request_id": "5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1",
    "expiry_date": "2023‐07‐20T15:09:24Z",
    "payout_methods": [
      "revolut",
      "bank_account",
      "card"
    ],
    "account_id": "85f515e4-588f-4496-a6a5-a7615a193e6b",
    "amount": 105.6,
    "currency": "string",
    "url": "http://example.com",
    "reference": "Rent",
    "transfer_reason_code": "property_rental",
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cancellation_reason": "too_many_name_check_attempts"
  }
]
```

A list of payout links

<h2 id="tocS_PayoutLinkAccountId">PayoutLinkAccountId</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkaccountid"></a>
<a id="schema_PayoutLinkAccountId"></a>
<a id="tocSpayoutlinkaccountid"></a>
<a id="tocspayoutlinkaccountid"></a>

```json
"85f515e4-588f-4496-a6a5-a7615a193e6b"
```

The ID of the sender's account.

<h2 id="tocS_PayoutLinkAmount">PayoutLinkAmount</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkamount"></a>
<a id="schema_PayoutLinkAmount"></a>
<a id="tocSpayoutlinkamount"></a>
<a id="tocspayoutlinkamount"></a>

```json
105.6
```

The amount of money to be transferred.

:::note
The amount must be between £1 and £2,500, or equivalent in the selected currency.
:::

<h2 id="tocS_PayoutLinkCounterpartyName">PayoutLinkCounterpartyName</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkcounterpartyname"></a>
<a id="schema_PayoutLinkCounterpartyName"></a>
<a id="tocSpayoutlinkcounterpartyname"></a>
<a id="tocspayoutlinkcounterpartyname"></a>

```json
"John Smith"
```

The name of the counterparty provided by the sender.

<h2 id="tocS_PayoutLinkExpiryDate">PayoutLinkExpiryDate</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkexpirydate"></a>
<a id="schema_PayoutLinkExpiryDate"></a>
<a id="tocSpayoutlinkexpirydate"></a>
<a id="tocspayoutlinkexpirydate"></a>

```json
"2023‐07‐20T15:09:24Z"
```

The date and time after which the payout link expires in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
If the recipient doesn't claim the money before then, the payout link expires and is no longer available.

The default and maximum value is the date and time of creating the link + 7 days.

<h2 id="tocS_PayoutLinkExpiryPeriod">PayoutLinkExpiryPeriod</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkexpiryperiod"></a>
<a id="schema_PayoutLinkExpiryPeriod"></a>
<a id="tocSpayoutlinkexpiryperiod"></a>
<a id="tocspayoutlinkexpiryperiod"></a>

```json
"P3D"
```

The period after which the payout link expires if not claimed before, provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).

The default and maximum value is 7 days from the link creation.

<h2 id="tocS_PayoutLinkPayoutMethods">PayoutLinkPayoutMethods</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkpayoutmethods"></a>
<a id="schema_PayoutLinkPayoutMethods"></a>
<a id="tocSpayoutlinkpayoutmethods"></a>
<a id="tocspayoutlinkpayoutmethods"></a>

```json
[
  "revolut",
  "bank_account",
  "card"
]
```

The list of payout methods that the recipient can use to claim the payout.

<h2 id="tocS_PayoutLinkReference">PayoutLinkReference</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkreference"></a>
<a id="schema_PayoutLinkReference"></a>
<a id="tocSpayoutlinkreference"></a>
<a id="tocspayoutlinkreference"></a>

```json
"Rent"
```

The reference for the payout transaction, provided by the sender.

<h2 id="tocS_PayoutLinkRequestId">PayoutLinkRequestId</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkrequestid"></a>
<a id="schema_PayoutLinkRequestId"></a>
<a id="tocSpayoutlinkrequestid"></a>
<a id="tocspayoutlinkrequestid"></a>

```json
"5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1"
```

The ID of the request, provided by the sender.

<h2 id="tocS_PayoutLinkState">PayoutLinkState</h2>
<!-- backwards compatibility -->
<a id="schemapayoutlinkstate"></a>
<a id="schema_PayoutLinkState"></a>
<a id="tocSpayoutlinkstate"></a>
<a id="tocspayoutlinkstate"></a>

```json
"created"
```

The state that the payout link is in.
Possible states are:

| Value | Description |
| --- | --- |
| **`created`** | The payout link has been created, but the amount has not yet been [blocked](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links#sender-link-generation). |
| **`failed`** | The payout link couldn't be generated due to a failure during transaction booking. |
| **`awaiting`** | The payout link is awaiting approval. |
| **`active`** | The payout link can be redeemed. |
| **`expired`** | The payout link cannot be redeemed because it wasn't claimed before its expiry date. |
| **`cancelled`** | The payout link cannot be redeemed because it was cancelled. |
| **`processing`** | The payout link has been redeemed and is being processed. |
| **`processed`** | The payout link has been redeemed and the money has been transferred to the recipient. |

<h2 id="tocS_PayoutMethod">PayoutMethod</h2>
<!-- backwards compatibility -->
<a id="schemapayoutmethod"></a>
<a id="schema_PayoutMethod"></a>
<a id="tocSpayoutmethod"></a>
<a id="tocspayoutmethod"></a>

```json
"revolut"
```

The payout method that the recipient can use to claim the payout.

| Value | Description |
| --- | --- |
| **`revolut`** | Revolut peer-to-peer (P2P) transfer |
| **`bank_account`** | External bank transfer |
| **`card`** | Card transfer <br /> **Note:** <ul><li>This payout method is available in the UK and the EEA. </li><li>This payout method is not available in Sandbox.</li></ul> |

<h2 id="tocS_ProfileType">ProfileType</h2>
<!-- backwards compatibility -->
<a id="schemaprofiletype"></a>
<a id="schema_ProfileType"></a>
<a id="tocSprofiletype"></a>
<a id="tocsprofiletype"></a>

```json
"personal"
```

The type of the counterparty.
Indicates whether the recipient is an individual or a company.

<h2 id="tocS_ResourceCreatedResponse">ResourceCreatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreatedresponse"></a>
<a id="schema_ResourceCreatedResponse"></a>
<a id="tocSresourcecreatedresponse"></a>
<a id="tocsresourcecreatedresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Successfully created resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the created resource.|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "id": "string",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the role. This can be a UUID or other default role such as `OWNER`.|
|name|string|true|none|The name of the role.|
|created_at|string(date-time)|true|none|The date and time the role was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the role was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_SimpleFee">SimpleFee</h2>
<!-- backwards compatibility -->
<a id="schemasimplefee"></a>
<a id="schema_SimpleFee"></a>
<a id="tocSsimplefee"></a>
<a id="tocssimplefee"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

A specific fee component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|Fee amount in major units.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|

<h2 id="tocS_SpendProgram">SpendProgram</h2>
<!-- backwards compatibility -->
<a id="schemaspendprogram"></a>
<a id="schema_SpendProgram"></a>
<a id="tocSspendprogram"></a>
<a id="tocsspendprogram"></a>

```json
{
  "label": "string"
}
```

The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.
:::note
To use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).
:::

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The name of the spend program.|

<h2 id="tocS_SpendingLimitPeriodic">SpendingLimitPeriodic</h2>
<!-- backwards compatibility -->
<a id="schemaspendinglimitperiodic"></a>
<a id="schema_SpendingLimitPeriodic"></a>
<a id="tocSspendinglimitperiodic"></a>
<a id="tocsspendinglimitperiodic"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

The limit for transactions within a given period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The value of the spending limit.|
|currency|[TransactionLimitCurrency](#schematransactionlimitcurrency)|true|none|The currency of the spending limit, provided as [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code in upper case.|

<h2 id="tocS_SpendingLimitSingleTransaction">SpendingLimitSingleTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaspendinglimitsingletransaction"></a>
<a id="schema_SpendingLimitSingleTransaction"></a>
<a id="tocSspendinglimitsingletransaction"></a>
<a id="tocsspendinglimitsingletransaction"></a>

```json
{
  "amount": 0,
  "currency": "string"
}
```

The limit for a single transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The value of the spending limit.|
|currency|[TransactionLimitCurrency](#schematransactionlimitcurrency)|true|none|The currency of the spending limit, provided as [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code in upper case.|

<h2 id="tocS_SpendingLimitsSchema">SpendingLimitsSchema</h2>
<!-- backwards compatibility -->
<a id="schemaspendinglimitsschema"></a>
<a id="schema_SpendingLimitsSchema"></a>
<a id="tocSspendinglimitsschema"></a>
<a id="tocsspendinglimitsschema"></a>

```json
{
  "single": {
    "amount": 200.22,
    "currency": "GBP"
  },
  "week": {
    "amount": 200.44,
    "currency": "GBP"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|single|[SpendingLimitSingleTransaction](#schemaspendinglimitsingletransaction)|false|none|The limit for a single transaction.|
|day|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The daily limit for transactions.|
|week|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The weekly limit for transactions.|
|month|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The monthly limit for transactions.|
|quarter|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The quarterly limit for transactions.|
|year|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The yearly limit for transactions.|
|all_time|[SpendingLimitPeriodic](#schemaspendinglimitperiodic)|false|none|The all-time limit for transactions.|

<h2 id="tocS_SpendingLimitPeriodicWithUsage">SpendingLimitPeriodicWithUsage</h2>
<!-- backwards compatibility -->
<a id="schemaspendinglimitperiodicwithusage"></a>
<a id="schema_SpendingLimitPeriodicWithUsage"></a>
<a id="tocSspendinglimitperiodicwithusage"></a>
<a id="tocsspendinglimitperiodicwithusage"></a>

```json
{
  "amount": 0,
  "currency": "string",
  "usage": 0
}
```

The limit for transactions within a given period, including spending limit utilisation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|The value of the spending limit.|
|currency|[TransactionLimitCurrency](#schematransactionlimitcurrency)|true|none|The currency of the spending limit, provided as [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code in upper case.|
|usage|number(double)|false|none|The amount used within the current spending-limit period, in the same currency and decimal representation as `amount`. Returned only when usage data is available.|

<h2 id="tocS_SpendingLimitsWithUsage">SpendingLimitsWithUsage</h2>
<!-- backwards compatibility -->
<a id="schemaspendinglimitswithusage"></a>
<a id="schema_SpendingLimitsWithUsage"></a>
<a id="tocSspendinglimitswithusage"></a>
<a id="tocsspendinglimitswithusage"></a>

```json
{
  "single": {
    "amount": 0,
    "currency": "string"
  },
  "day": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  },
  "week": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  },
  "month": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  },
  "quarter": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  },
  "year": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  },
  "all_time": {
    "amount": 0,
    "currency": "string",
    "usage": 0
  }
}
```

All spending limits set for the card, including spending limit utilisation for periodic limits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|single|[SpendingLimitSingleTransaction](#schemaspendinglimitsingletransaction)|false|none|The limit for a single transaction.|
|day|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The daily limit for transactions.|
|week|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The weekly limit for transactions.|
|month|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The monthly limit for transactions.|
|quarter|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The quarterly limit for transactions.|
|year|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The yearly limit for transactions.|
|all_time|[SpendingLimitPeriodicWithUsage](#schemaspendinglimitperiodicwithusage)|false|none|The all-time limit for transactions.|

<h2 id="tocS_SpendingPeriodSchema">SpendingPeriodSchema</h2>
<!-- backwards compatibility -->
<a id="schemaspendingperiodschema"></a>
<a id="schema_SpendingPeriodSchema"></a>
<a id="tocSspendingperiodschema"></a>
<a id="tocsspendingperiodschema"></a>

```json
{
  "start_date": "2025-09-26",
  "end_date": "2030-12-31",
  "end_date_action": "lock"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date)|false|none|The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date|string(date)|false|none|The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).<br>Uses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.|
|end_date_action|string|false|none|The action to take after the end date of the spending period.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|end_date_action|lock|
|end_date_action|terminate|

<h2 id="tocS_TaxRate">TaxRate</h2>
<!-- backwards compatibility -->
<a id="schemataxrate"></a>
<a id="schema_TaxRate"></a>
<a id="tocStaxrate"></a>
<a id="tocstaxrate"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "percentage": 0
}
```

The [tax rate](https://developer.revolut.com/docs/api/business#delete-tax-rate) applied to the expense split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the tax rate.|
|name|string|true|none|The name of the tax.|
|percentage|number(double)|false|none|The tax rate percentage applied to the taxable amount. For example, `23` for 23%.|

<h2 id="tocS_TaxRateResponse">TaxRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemataxrateresponse"></a>
<a id="schema_TaxRateResponse"></a>
<a id="tocStaxrateresponse"></a>
<a id="tocstaxrateresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "percentage": -100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|read-only|The unique ID of the tax rate.|
|name|string|true|none|The name of the tax.|
|created_at|string(date-time)|true|read-only|The date and time the tax rate was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|read-only|The date and time the tax rate was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|percentage|number(double)|false|none|The tax rate percentage applied to the taxable amount. For example, `23` for 23%.<br><br>:::note<br>You cannot create negative tax rates manually. <br>However, negative tax rates might be synced from your accounting software, if integrated. <br>:::|

<h2 id="tocS_TeamMember">TeamMember</h2>
<!-- backwards compatibility -->
<a id="schemateammember"></a>
<a id="schema_TeamMember"></a>
<a id="tocSteammember"></a>
<a id="tocsteammember"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com",
  "first_name": "string",
  "last_name": "string",
  "state": "created",
  "role_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "department_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "manager_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the team member.|
|email|string(email)|true|none|The email of the team member.|
|first_name|string|false|none|The team member's first name.|
|last_name|string|false|none|The team member's last name.|
|state|[TeamMemberState](#schemateammemberstate)|true|none|The state that the team member is in.|
|role_id|string|true|none|The ID of the team member's [role](https://developer.revolut.com/docs/api/business#get-roles). This can be a UUID or other default role such as `Owner`.|
|created_at|string(date-time)|true|none|The date and time the team member was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the team member was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|department_id|string(uuid)|false|none|The ID of the [department](https://developer.revolut.com/docs/api/business#get-departments) the team member is assigned to.|
|manager_id|string(uuid)|false|none|The ID of the team member's manager.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|confirmed|
|state|waiting|
|state|active|
|state|locked|
|state|disabled|

<h2 id="tocS_TeamMemberState">TeamMemberState</h2>
<!-- backwards compatibility -->
<a id="schemateammemberstate"></a>
<a id="schema_TeamMemberState"></a>
<a id="tocSteammemberstate"></a>
<a id="tocsteammemberstate"></a>

```json
"created"
```

The state that the team member is in.

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "string",
  "type": "atm",
  "request_id": "string",
  "state": "created",
  "reason_code": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "scheduled_for": "1970-01-01",
  "related_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "merchant": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "Acme Corp.",
    "full_name": "ACME*1234MN1HA2",
    "city": "string",
    "category_code": "string",
    "country": "string"
  },
  "reference": "string",
  "legs": [
    {
      "leg_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "fee": 0,
      "currency": "string",
      "bill_amount": 0,
      "bill_currency": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "counterparty": {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "account_type": "self",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "description": "string",
      "balance": 0
    }
  ],
  "card": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_number": "string",
    "first_name": "string",
    "last_name": "string",
    "phone": "string",
    "references": [
      {
        "name": "PNR",
        "value": "RT12345"
      }
    ]
  },
  "auth_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the transaction.|
|type|[TransactionType](#schematransactiontype)|true|none|Indicates the transaction type.|
|request_id|string|false|none|The request ID that you provided previously.|
|state|[TransactionState](#schematransactionstate)|true|none|Indicates the transaction state.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| The transaction has been created and is either processed asynchronously or scheduled for a later time. \|<br>\| **`pending`** \| The transaction is pending until it's being processed. If the transfer is made between Revolut accounts, this state is skipped and the transaction is executed instantly. \|<br>\| **`completed`** \| The transaction was successful. \|<br>\| **`declined`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, insufficient account balance, wrong receiver information, etc. \|<br>\| **`failed`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc. \|<br>\| **`reverted`** \| The transaction was reverted. This can happen for a variety of reasons, for example, the receiver being inaccessible. \||
|reason_code|string|false|none|The reason code when the transaction `state` is `declined` or `failed`.|
|created_at|string(date-time)|true|none|The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the transaction was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. <br>This is required when the transaction `state` is `completed`.|
|scheduled_for|string(date)|false|none|The scheduled date of the payment, if applicable.<br>Provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|related_transaction_id|string(uuid)|false|none|The ID of the original transaction to which this transaction is related. <br>Returned, for example, when this transaction is a refund of the related transaction, or for transactions related to cashback.|
|merchant|[TransactionMerchant](#schematransactionmerchant)|false|none|The information about the merchant (only for card transactions).|
|reference|string|false|none|The payment reference.|
|legs|[[TransactionLeg](#schematransactionleg)]|true|none|The legs of the transaction:<br>- For transactions between your Revolut accounts, there can be 2 legs, for example, an internal transfer made out of the GBP account and into the EUR account.<br>- For transactions in other cases, there is only 1 leg.|
|card|[TransactionCard](#schematransactioncard)|false|none|The details of the card associated with the transaction.|
|auth_code|string|false|none|The authorization code from the card network.<br>Returned for card transactions when the authorization code is available.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|atm|
|type|card_payment|
|type|card_refund|
|type|card_chargeback|
|type|card_credit|
|type|charge|
|type|charge_refund|
|type|exchange|
|type|transfer|
|type|loan|
|type|fee|
|type|refund|
|type|topup|
|type|topup_return|
|type|tax|
|type|tax_refund|
|type|rev_payment|
|state|created|
|state|pending|
|state|completed|
|state|declined|
|state|failed|
|state|reverted|

<h2 id="tocS_Transactions">Transactions</h2>
<!-- backwards compatibility -->
<a id="schematransactions"></a>
<a id="schema_Transactions"></a>
<a id="tocStransactions"></a>
<a id="tocstransactions"></a>

```json
[
  {
    "id": "string",
    "type": "atm",
    "request_id": "string",
    "state": "created",
    "reason_code": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "scheduled_for": "1970-01-01",
    "related_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "merchant": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Acme Corp.",
      "full_name": "ACME*1234MN1HA2",
      "city": "string",
      "category_code": "string",
      "country": "string"
    },
    "reference": "string",
    "legs": [
      {
        "leg_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "fee": 0,
        "currency": "string",
        "bill_amount": 0,
        "bill_currency": "string",
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "counterparty": {
          "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "account_type": "self",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "description": "string",
        "balance": 0
      }
    ],
    "card": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "card_number": "string",
      "first_name": "string",
      "last_name": "string",
      "phone": "string",
      "references": [
        {
          "name": "PNR",
          "value": "RT12345"
        }
      ]
    },
    "auth_code": "string"
  }
]
```

<h2 id="tocS_TransactionCard">TransactionCard</h2>
<!-- backwards compatibility -->
<a id="schematransactioncard"></a>
<a id="schema_TransactionCard"></a>
<a id="tocStransactioncard"></a>
<a id="tocstransactioncard"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "card_number": "string",
  "first_name": "string",
  "last_name": "string",
  "phone": "string",
  "references": [
    {
      "name": "PNR",
      "value": "RT12345"
    }
  ]
}
```

The details of the card associated with the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the card.|
|card_number|string|false|none|The masked card number.|
|first_name|string|false|none|The first name of the cardholder.|
|last_name|string|false|none|The last name of the cardholder.|
|phone|string|false|none|The phone number of the cardholder in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|references|[[CardReference](#schemacardreference)]|false|none|Card references ([`references`](https://developer.revolut.com/docs/api/business#get-card#response)).<br><br>:::note<br>These are the references that were assigned to the card at the time the transaction was made.<br>Any [update](https://developer.revolut.com/docs/api/business#update-card-references) to card references does not affect existing transactions.<br>:::|

<h2 id="tocS_TransactionCounterparty">TransactionCounterparty</h2>
<!-- backwards compatibility -->
<a id="schematransactioncounterparty"></a>
<a id="schema_TransactionCounterparty"></a>
<a id="tocStransactioncounterparty"></a>
<a id="tocstransactioncounterparty"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "account_type": "self",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|false|none|The ID of the counterparty account.|
|account_type|[TransactionCounterpartyAccountType](#schematransactioncounterpartyaccounttype)|true|none|Indicates the type of the account.|
|id|string(uuid)|false|none|The ID of the counterparty.|

#### Enumerated Values

|Property|Value|
|---|---|
|account_type|self|
|account_type|revolut|
|account_type|external|

<h2 id="tocS_TransactionCounterpartyAccountType">TransactionCounterpartyAccountType</h2>
<!-- backwards compatibility -->
<a id="schematransactioncounterpartyaccounttype"></a>
<a id="schema_TransactionCounterpartyAccountType"></a>
<a id="tocStransactioncounterpartyaccounttype"></a>
<a id="tocstransactioncounterpartyaccounttype"></a>

```json
"self"
```

Indicates the type of the account.

<h2 id="tocS_TransactionLeg">TransactionLeg</h2>
<!-- backwards compatibility -->
<a id="schematransactionleg"></a>
<a id="schema_TransactionLeg"></a>
<a id="tocStransactionleg"></a>
<a id="tocstransactionleg"></a>

```json
{
  "leg_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "fee": 0,
  "currency": "string",
  "bill_amount": 0,
  "bill_currency": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "counterparty": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_type": "self",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "description": "string",
  "balance": 0
}
```

The legs of the transaction:
- For transactions between your Revolut accounts, there can be 2 legs, for example, an internal transfer made out of the BGP account and into the EUR account.
- For transactions in other cases, there is only 1 leg.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leg_id|string(uuid)|true|none|The ID of the leg.|
|amount|number(double)|true|none|The amount of the transaction.|
|fee|number(double)|false|none|The amount of the transaction fee.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|bill_amount|number(double)|false|none|The billing amount for cross-currency payments.|
|bill_currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|account_id|string(uuid)|true|none|The ID of the account that the transaction is associated with.|
|counterparty|[TransactionCounterparty](#schematransactioncounterparty)|false|none|none|
|description|string|false|none|The transaction leg purpose.|
|balance|number(double)|false|none|The total balance of the account that the transaction is associated with.|

<h2 id="tocS_TransactionLimitCurrency">TransactionLimitCurrency</h2>
<!-- backwards compatibility -->
<a id="schematransactionlimitcurrency"></a>
<a id="schema_TransactionLimitCurrency"></a>
<a id="tocStransactionlimitcurrency"></a>
<a id="tocstransactionlimitcurrency"></a>

```json
"string"
```

The currency of the spending limit, provided as [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code in upper case.

<h2 id="tocS_TransactionMerchant">TransactionMerchant</h2>
<!-- backwards compatibility -->
<a id="schematransactionmerchant"></a>
<a id="schema_TransactionMerchant"></a>
<a id="tocStransactionmerchant"></a>
<a id="tocstransactionmerchant"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Acme Corp.",
  "full_name": "ACME*1234MN1HA2",
  "city": "string",
  "category_code": "string",
  "country": "string"
}
```

The information about the merchant (only for card transactions).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The ID of the merchant.|
|name|string|false|none|The name of the merchant. If `full_name` is available and merchant mapping applies, this is the cleaned, mapped name.|
|full_name|string|false|none|The original merchant name supplied by the card network.|
|city|string|false|none|The city of the merchant.|
|category_code|string|false|none|The category code of the merchant.|
|country|[CountryCodeMerchant](#schemacountrycodemerchant)|false|none|The bank country of the merchant, provided as an [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.<br>Typically 3 letters, though in some cases, card networks might provide it as a 2-letter code.|

<h2 id="tocS_TransactionPaymentRequest">TransactionPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactionpaymentrequest"></a>
<a id="schema_TransactionPaymentRequest"></a>
<a id="tocStransactionpaymentrequest"></a>
<a id="tocstransactionpaymentrequest"></a>

```json
{
  "request_id": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "amount": 0,
  "currency": "string",
  "reference": "string",
  "charge_bearer": "shared",
  "transfer_reason_code": "property_rental",
  "exchange_reason_code": "fund_transfer_and_intracompany_payment",
  "fiscal_code": "RO12345678",
  "name_validation_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A unique identifier for the transaction, provided by you.  <br>This is used for idempotency to prevent duplicate payments. <br>There are no strict format requirements, but we recommend using UUID v4 values.<br><br>:::tip[Retrying requests safely with idempotency]<br>If you do not receive a response (for example, due to a network error or timeout), you can safely retry the request using the same `request_id`. <br><br>If a transaction with the same `request_id` was already created, the API will not create a duplicate transaction.<br><br>:::warning[Idempotency expiry]<br>Idempotency checks apply only to transactions created **within the last 2 weeks**. <br>Reusing a `request_id` **after this period** may result in a **new transaction being created**.<br>:::|
|account_id|string(uuid)|true|none|The ID of the account that you send the funds from.|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|true|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|amount|number(double)|true|none|The amount to transfer.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|reference|string|false|none|The reference for the payment.<br><br>- For **BRL**/**KRW**/**VND**/**COP**/**LKR**/**CLP**/**NPR** company transfers, and all **INR** transfers:<br>          <br>  This field must specify the commercial invoice number.<br><br>- For other corridors:<br><br>  A piece of text or number you provide to help identify what the payment relates to.<br>  It can be used, for example, for reconciliation or tracking purposes.<br><br>  You might include an invoice number, account or transaction ID, or any other reference meaningful to you.<br><br>If the provided reference is longer than 140 characters, it will be truncated.<br>Note that some recipient banks might truncate the reference even further.|
|charge_bearer|[ChargeBearer](#schemachargebearer)|false|none|The party to which any transaction fees are charged if the resulting transaction route has associated fees: <br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \|<br>\| **`prefer_debtor`** \| Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. \|<br><br>:::note<br>Some transactions with fees might not support forced charge bearer selection.<br>If this is the case, the request will return an error.<br>This does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.<br>:::|
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|
|exchange_reason_code|[ExchangeReasonCode](#schemaexchangereasoncode)|false|none|The reason code for the exchange.<br>Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. <br>You can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).<br><br>If an exchange reason is not required, this field is ignored.|
|fiscal_code|string|false|none|Fiscal code of the payer, required for payments to Romanian tax authority beneficiaries (counterparty BIC: `TREZROBUXXX`).<br><br>The business's own tax identification number (TIN) is attached automatically from the business profile.|
|name_validation_id|string(uuid)|false|none|The identifier returned by a preceding [account name validation (CoP)](https://developer.revolut.com/docs/api/business#validate-account-name) check.<br><br>Pass this to link the CoP check to the payment, preventing rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|charge_bearer|shared|
|charge_bearer|debtor|
|charge_bearer|prefer_debtor|

<h2 id="tocS_TransactionState">TransactionState</h2>
<!-- backwards compatibility -->
<a id="schematransactionstate"></a>
<a id="schema_TransactionState"></a>
<a id="tocStransactionstate"></a>
<a id="tocstransactionstate"></a>

```json
"created"
```

Indicates the transaction state.
Possible values:

| Value | Description |
| --- | --- |
| **`created`** | The transaction has been created and is either processed asynchronously or scheduled for a later time. |
| **`pending`** | The transaction is pending until it's being processed. If the transfer is made between Revolut accounts, this state is skipped and the transaction is executed instantly. |
| **`completed`** | The transaction was successful. |
| **`declined`** | The transaction was unsuccessful. This can happen for a variety of reasons, for example, insufficient account balance, wrong receiver information, etc. |
| **`failed`** | The transaction was unsuccessful. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc. |
| **`reverted`** | The transaction was reverted. This can happen for a variety of reasons, for example, the receiver being inaccessible. |

<h2 id="tocS_TransactionType">TransactionType</h2>
<!-- backwards compatibility -->
<a id="schematransactiontype"></a>
<a id="schema_TransactionType"></a>
<a id="tocStransactiontype"></a>
<a id="tocstransactiontype"></a>

```json
"atm"
```

Indicates the transaction type.

<h2 id="tocS_TransferReason">TransferReason</h2>
<!-- backwards compatibility -->
<a id="schematransferreason"></a>
<a id="schema_TransferReason"></a>
<a id="tocStransferreason"></a>
<a id="tocstransferreason"></a>

```json
{
  "country": "string",
  "currency": "string",
  "code": "advertising",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[CountryCode](#schemacountrycode)|true|none|The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|code|string|true|none|Category name of the transfer reason.|
|description|string|true|none|The description of the given transfer reason.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|advertising|
|code|advisor_fees|
|code|business_insurance|
|code|construction|
|code|delivery|
|code|education|
|code|family|
|code|fund_investment|
|code|goods|
|code|homesend|
|code|hotel|
|code|exports|
|code|insurance_claims|
|code|insurance_premium|
|code|loan_repayment|
|code|medical|
|code|office|
|code|other_fees|
|code|personal_transfer|
|code|property_purchase|
|code|property_rental|
|code|royalties|
|code|services|
|code|share_investment|
|code|tax|
|code|transfer|
|code|transportation|
|code|travel|
|code|utilities|

<h2 id="tocS_TransferReasons">TransferReasons</h2>
<!-- backwards compatibility -->
<a id="schematransferreasons"></a>
<a id="schema_TransferReasons"></a>
<a id="tocStransferreasons"></a>
<a id="tocstransferreasons"></a>

```json
[
  {
    "country": "string",
    "currency": "string",
    "code": "advertising",
    "description": "string"
  }
]
```

<h2 id="tocS_TransferReasonCode">TransferReasonCode</h2>
<!-- backwards compatibility -->
<a id="schematransferreasoncode"></a>
<a id="schema_TransferReasonCode"></a>
<a id="tocStransferreasoncode"></a>
<a id="tocstransferreasoncode"></a>

```json
"property_rental"
```

The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. 
You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).

If a transfer reason is not required for the given currency and country, this field is ignored.

<h2 id="tocS_TransferRequest">TransferRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferrequest"></a>
<a id="schema_TransferRequest"></a>
<a id="tocStransferrequest"></a>
<a id="tocstransferrequest"></a>

```json
{
  "request_id": "string",
  "source_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "target_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "currency": "string",
  "reference": "string"
}
```

Transfer the funds between accounts of the business in the same currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|The ID of the request, provided by you.<br>It helps you identify the transaction in your system.<br><br>:::warning<br>To ensure that a transfer is not processed multiple times if there are network or system errors,<br>the same `request_id` should be used for requests related to the same transfer.<br>:::|
|source_account_id|string(uuid)|true|none|The ID of the source account that you transfer the funds from.|
|target_account_id|string(uuid)|true|none|The ID of the target account that you transfer the funds to.|
|amount|number(double)|true|none|The amount of the funds to be transferred.|
|currency|[Currency](#schemacurrency)|true|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|reference|string|false|none|The reference for the funds transfer.|

<h2 id="tocS_TransferResponse">TransferResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferresponse"></a>
<a id="schema_TransferResponse"></a>
<a id="tocStransferresponse"></a>
<a id="tocstransferresponse"></a>

```json
{
  "id": "string",
  "state": "created",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the transaction created.|
|state|[TransactionState](#schematransactionstate)|true|none|Indicates the transaction state.<br>Possible values:<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`created`** \| The transaction has been created and is either processed asynchronously or scheduled for a later time. \|<br>\| **`pending`** \| The transaction is pending until it's being processed. If the transfer is made between Revolut accounts, this state is skipped and the transaction is executed instantly. \|<br>\| **`completed`** \| The transaction was successful. \|<br>\| **`declined`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, insufficient account balance, wrong receiver information, etc. \|<br>\| **`failed`** \| The transaction was unsuccessful. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc. \|<br>\| **`reverted`** \| The transaction was reverted. This can happen for a variety of reasons, for example, the receiver being inaccessible. \||
|created_at|string(date-time)|true|none|The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|completed_at|string(date-time)|false|none|The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|pending|
|state|completed|
|state|declined|
|state|failed|
|state|reverted|

<h2 id="tocS_UpdateAccountingCategoryRequest">UpdateAccountingCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountingcategoryrequest"></a>
<a id="schema_UpdateAccountingCategoryRequest"></a>
<a id="tocSupdateaccountingcategoryrequest"></a>
<a id="tocsupdateaccountingcategoryrequest"></a>

```json
{
  "name": "Work From Home equipment",
  "code": "WFH",
  "default_tax_rate_id": "f93f6c3e-bf95-4b58-bfcd-e642c4fc098e"
}
```

The new settings for the accounting category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The new full name for the accounting category.|
|code|string|false|none|The new code name for the accounting category.|
|default_tax_rate_id|string(uuid)|false|none|The ID of the new default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.|

<h2 id="tocS_UpdateDraftPaymentRequest">UpdateDraftPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedraftpaymentrequest"></a>
<a id="schema_UpdateDraftPaymentRequest"></a>
<a id="tocSupdatedraftpaymentrequest"></a>
<a id="tocsupdatedraftpaymentrequest"></a>

```json
{
  "receiver": {
    "counterparty_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "card_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "amount": 0.1,
  "currency": "string",
  "reference": "string",
  "charge_bearer": "shared",
  "transfer_reason_code": "property_rental"
}
```

The updated details of a single payment in a payment draft.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiver|[PaymentReceiver](#schemapaymentreceiver)|false|none|The details of the transfer recipient.<br><br>If the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.|
|amount|number(double)|false|none|The amount of the payment.|
|currency|[Currency](#schemacurrency)|false|none|[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.|
|reference|string|false|none|The reference for the payment.<br>A piece of text or number you provide to help identify what the payment relates to.<br>It can be used, for example, for reconciliation or tracking purposes.|
|charge_bearer|string \| null|false|none|The party that should bear the transaction fees related to the selected transaction route if applied.<br><br>\| Value \| Description \|<br>\| --- \| --- \|<br>\| **`shared`** \| Also known as **SHA**. The transaction route fees are split between the sender and the recipient. \|<br>\| **`debtor`** \| Also known as **OUR**. The sender pays all explicit transaction fees. \||
|transfer_reason_code|[TransferReasonCode](#schematransferreasoncode)|false|none|The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. <br>You can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).<br><br>If a transfer reason is not required for the given currency and country, this field is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|charge_bearer|shared|
|charge_bearer|debtor|

<h2 id="tocS_UpdateLabelGroupRequest">UpdateLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelabelgrouprequest"></a>
<a id="schema_UpdateLabelGroupRequest"></a>
<a id="tocSupdatelabelgrouprequest"></a>
<a id="tocsupdatelabelgrouprequest"></a>

```json
{
  "name": "string"
}
```

The new name for the label group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The new name for the label group.|

<h2 id="tocS_UpdateLabelRequest">UpdateLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelabelrequest"></a>
<a id="schema_UpdateLabelRequest"></a>
<a id="tocSupdatelabelrequest"></a>
<a id="tocsupdatelabelrequest"></a>

```json
{
  "name": "string"
}
```

The new name for the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The new name for the label.|

<h2 id="tocS_UpdatePaymentDraftRequest">UpdatePaymentDraftRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepaymentdraftrequest"></a>
<a id="schema_UpdatePaymentDraftRequest"></a>
<a id="tocSupdatepaymentdraftrequest"></a>
<a id="tocsupdatepaymentdraftrequest"></a>

```json
{
  "title": "string",
  "schedule_for": "1970-01-01"
}
```

The updated metadata of a payment draft.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|The title of the payment draft. To clear the title, provide `null`.|
|schedule_for|string(date) \| null|false|none|The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br><br>:::note<br>The date must be in the future.<br>:::<br><br>To clear the scheduled date, provide `null`.|

<h2 id="tocS_UpdateTaxRateRequest">UpdateTaxRateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaxraterequest"></a>
<a id="schema_UpdateTaxRateRequest"></a>
<a id="tocSupdatetaxraterequest"></a>
<a id="tocsupdatetaxraterequest"></a>

```json
{
  "name": "string"
}
```

The new setting for the tax rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The new name for the tax rate.|

<h2 id="tocS_UpdateWebhookRequest">UpdateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_UpdateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "url": "http://example.com",
  "events": [
    "TransactionCreated"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|[Url](#schemaurl)|false|none|A valid webhook URL to which to send event notifications. The supported protocol is `https`.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|false|none|A list of event types to subscribe to.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|TransactionCreated|
|events|TransactionStateChanged|
|events|PayoutLinkCreated|
|events|PayoutLinkStateChanged|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"http://example.com"
```

A valid webhook URL to which to send event notifications. The supported protocol is `https`.

<h2 id="tocS_AccountNameValidationId">AccountNameValidationId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountnamevalidationid"></a>
<a id="schema_AccountNameValidationId"></a>
<a id="tocSaccountnamevalidationid"></a>
<a id="tocsaccountnamevalidationid"></a>

```json
"a1b2c3d4-e5f6-7890-abcd-ef1234567890"
```

The unique identifier of a CoP (Confirmation of Payee) check.

Pass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.
This prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.

<h2 id="tocS_ValidateAccountNameRequest">ValidateAccountNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnamerequest"></a>
<a id="schema_ValidateAccountNameRequest"></a>
<a id="tocSvalidateaccountnamerequest"></a>
<a id="tocsvalidateaccountnamerequest"></a>

```json
null
```

<h2 id="tocS_ValidateAccountNameRequestUK">ValidateAccountNameRequestUK</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnamerequestuk"></a>
<a id="schema_ValidateAccountNameRequestUK"></a>
<a id="tocSvalidateaccountnamerequestuk"></a>
<a id="tocsvalidateaccountnamerequestuk"></a>

```json
{
  "account_no": "string",
  "sort_code": "string",
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_no|string|true|none|The account number of the counterparty.|
|sort_code|string|true|none|The sort code of the counterparty's account.|
|company_name|string|false|none|The name of the business counterparty.<br><br>**Required** when the account type is business (`individual_name` is not specified).<br>|
|individual_name|object|false|none|The name of the individual counterparty, split into first name and last name.<br><br>**Required** when the account type is personal (`company_name` isn't specified).<br>|

<h2 id="tocS_ValidateAccountNameRequestAU">ValidateAccountNameRequestAU</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnamerequestau"></a>
<a id="schema_ValidateAccountNameRequestAU"></a>
<a id="tocSvalidateaccountnamerequestau"></a>
<a id="tocsvalidateaccountnamerequestau"></a>

```json
{
  "account_no": "string",
  "bsb": "string",
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_no|string|true|none|The account number of the counterparty.|
|bsb|string|true|none|The BSB (Bank-State-Branch) number for the counterparty's account.<br>Used to identify the bank and branch in Australia.|
|company_name|string|false|none|The name of the business counterparty.<br><br>**Required** when the account type is business (`individual_name` is not specified).<br>|
|individual_name|object|false|none|The name of the individual counterparty, split into first name and last name.<br><br>**Required** when the account type is personal (`company_name` isn't specified).<br>|

<h2 id="tocS_ValidateAccountNameRequestRO">ValidateAccountNameRequestRO</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnamerequestro"></a>
<a id="schema_ValidateAccountNameRequestRO"></a>
<a id="tocSvalidateaccountnamerequestro"></a>
<a id="tocsvalidateaccountnamerequestro"></a>

```json
{
  "iban": "string",
  "bic": "string",
  "recipient_country": "RO",
  "recipient_currency": "RON",
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iban|string|true|none|The IBAN (International Bank Account Number) for the counterparty's account.|
|bic|string|false|none|The BIC (Bank Identifier Code) for the counterparty's account.<br>Also known as the SWIFT code.<br>This value is optional. <br>It can be provided, for example, when the automatic BIC detection fails and the check is unsuccessful.|
|recipient_country|string|true|none|The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.<br><br>For RO CoP, the **possible value** is `RO`.|
|recipient_currency|string|true|none|The counterparty account’s currency, provided as a 3-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code.<br><br>For RO CoP, the **possible value** is `RON`.<br>|
|company_name|string|false|none|The name of the business counterparty.<br><br>**Required** when the account type is business (`individual_name` is not specified).<br><br>ⓘ Note that for [RO](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services), the name you provide helps identify the request, but is **not** used for the actual check.<br>The API simply returns the partially masked name associated with the IBAN for you to validate.<br>Therefore, the returned name may differ from the one you provide.<br>|
|individual_name|object|false|none|The name of the individual counterparty, split into first name and last name.<br><br>**Required** when the account type is personal (`company_name` isn't specified).<br><br>ⓘ Note that for [RO](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services), the name you provide helps identify the request, but is **not** used for the actual check.<br>The API simply returns the partially masked name associated with the IBAN for you to validate.<br>Therefore, the returned name may differ from the one you provide.<br>|

<h2 id="tocS_ValidateAccountNameRequestEUR">ValidateAccountNameRequestEUR</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnamerequesteur"></a>
<a id="schema_ValidateAccountNameRequestEUR"></a>
<a id="tocSvalidateaccountnamerequesteur"></a>
<a id="tocsvalidateaccountnamerequesteur"></a>

```json
{
  "iban": "string",
  "bic": "string",
  "recipient_country": "FR",
  "recipient_currency": "EUR",
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iban|string|true|none|The IBAN (International Bank Account Number) for the counterparty's account.|
|bic|string|false|none|The BIC (Bank Identifier Code) for the counterparty's account.<br>Also known as the SWIFT code.<br>It can be provided, for example, when the automatic BIC detection fails and the check is unsuccessful.|
|recipient_country|string|true|none|The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.|
|recipient_currency|string|true|none|The counterparty account’s currency, provided as a 3-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code.<br><br>For VoP, the **possible value** is `EUR`.<br>|
|company_name|string|false|none|The name of the business counterparty.<br><br>**Required** when the account type is business (`individual_name` is not specified).<br>|
|individual_name|object|false|none|The name of the individual counterparty, split into first name and last name.<br><br>**Required** when the account type is personal (`company_name` isn't specified).<br>|

<h2 id="tocS_ValidateAccountNameResponse">ValidateAccountNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnameresponse"></a>
<a id="schema_ValidateAccountNameResponse"></a>
<a id="tocSvalidateaccountnameresponse"></a>
<a id="tocsvalidateaccountnameresponse"></a>

```json
null
```

<h2 id="tocS_ValidateAccountNameResponseUK">ValidateAccountNameResponseUK</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnameresponseuk"></a>
<a id="schema_ValidateAccountNameResponseUK"></a>
<a id="tocSvalidateaccountnameresponseuk"></a>
<a id="tocsvalidateaccountnameresponseuk"></a>

```json
{
  "result_code": "matched",
  "reason": {
    "type": "uk_cop",
    "code": "close_match"
  },
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  },
  "name_validation_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_code|string|true|none|The result of the check. <br><br>Possible values for UK:<br><br>\| Result code       \| Description \|<br>\|-------------------\|-------------\|<br>\| **`matched`**     \| The name and account type match the provided details. \|<br>\| **`close_match`** \| The name and/or account type are similar to the provided values: <ul><li>The name is a match, but the account type is incorrect. For example, an individual recipient's name was provided under `company_name`. The **actual account type** is returned.</li><li>The name is similar to the provided values. Account type is correct. The **actual name** is returned.</li><li>The name is similar to the provided values, and the account type is incorrect. The **actual values** are returned.</li></ul>The actual values are returned. \|<br>\| **`not_matched`** \| The name and account type don't match the provided values. \|<br>\| **`cannot_be_checked`** \| The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. \|<br>\| **`temporarily_unavailable`** \| The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. \||
|reason|[AccountNameValidationReasonUK](#schemaaccountnamevalidationreasonuk)|false|none|A code which explains why a given result was returned, and the service that returned it.<br>For example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.|
|company_name|string|false|none|The name of the recipient when the account type is business.<br>Provided only if `individual_name` is not specified.<br><br>When the name is a close match, the actual full name is returned, otherwise, the name you provided is returned.|
|individual_name|object|false|none|The name of the recipient when the account type is personal.<br>Provided only if `company_name` is not specified.<br><br>When the name is a close match, the actual first and last names are returned in full.|
|name_validation_id|[AccountNameValidationId](#schemaaccountnamevalidationid)|false|none|The unique identifier of a CoP (Confirmation of Payee) check.<br><br>Pass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.<br>This prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|result_code|matched|
|result_code|close_match|
|result_code|not_matched|
|result_code|cannot_be_checked|
|result_code|temporarily_unavailable|

<h2 id="tocS_ValidateAccountNameResponseAU">ValidateAccountNameResponseAU</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnameresponseau"></a>
<a id="schema_ValidateAccountNameResponseAU"></a>
<a id="tocSvalidateaccountnameresponseau"></a>
<a id="tocsvalidateaccountnameresponseau"></a>

```json
{
  "result_code": "matched",
  "reason": {
    "type": "uk_cop",
    "code": "close_match"
  },
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  },
  "name_validation_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_code|string|true|none|The result of the check. <br><br>Possible values for AU:<br><br>\| Result code                        \| Description \|<br>\|------------------------------------\|-------------\|<br>\| **`matched`**                      \| The name matches the provided details. For personal accounts, this also covers **close matches**, in which case the **actual name** is returned. \|<br>\| **`close_match` (business account)** \| The name is similar to the provided value. \|<br>\| **`not_matched`**                  \| The name doesn't match the provided values. \|<br>\| **`cannot_be_checked`**            \| The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. \|<br>\| **`temporarily_unavailable`**      \| The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. \||
|reason|[AccountNameValidationReasonAU](#schemaaccountnamevalidationreasonau)|false|none|A code which explains why a given result was returned, and the service that returned it.<br>In some cases, it may provide more details about the result.|
|company_name|string|false|none|The name of the recipient when the account type is business.<br>Provided only if `individual_name` is not specified.<br><br>When the name is a close match, the actual full name is returned.<br>Otherwise, the name you provided is returned.<br><br>:::tip[Mismatched name type is corrected]<br>The mismatched name type in the request is corrected in the response.<br>This means that, for example, if an individual recipient's name was provided under `company_name`, in the response it is returned under `individual_name`.<br>:::|
|individual_name|object|false|none|The name of the recipient when the account type is personal.<br>Provided only if `company_name` is not specified.<br><br>When the name is a close match, the actual first and last names are returned.<br>Otherwise, the name you provided is returned.<br><br>:::tip[Mismatched name type is corrected]<br>The mismatched name type in the request is corrected in the response.<br>This means that, for example, if an individual recipient's name was provided under `company_name`, in the response it is returned under `individual_name`.<br>:::|
|name_validation_id|[AccountNameValidationId](#schemaaccountnamevalidationid)|false|none|The unique identifier of a CoP (Confirmation of Payee) check.<br><br>Pass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.<br>This prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|result_code|matched|
|result_code|close_match|
|result_code|not_matched|
|result_code|cannot_be_checked|
|result_code|temporarily_unavailable|

<h2 id="tocS_ValidateAccountNameResponseRO">ValidateAccountNameResponseRO</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnameresponsero"></a>
<a id="schema_ValidateAccountNameResponseRO"></a>
<a id="tocSvalidateaccountnameresponsero"></a>
<a id="tocsvalidateaccountnameresponsero"></a>

```json
{
  "result_code": "matched",
  "reason": {
    "type": "uk_cop",
    "code": "close_match"
  },
  "company_name": "Rodri**** SA",
  "individual_name": {
    "first_name": "Alexandru",
    "last_name": "I."
  },
  "name_validation_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_code|string|true|none|The result of the check. <br><br>For RO CoP, the API **checks if an account exists for the provided IBAN**.<br>Possible results are:<br><br>\| Result code                 \| Description \|<br>\|-----------------------------\|-------------\|<br>\| **`matched`**               \| An account with the provided IBAN was found. When this status is returned, the API also returns a partial name of the account holder. Use this returned name to validate your recipient's details. \|<br>\| **`cannot_be_checked`**     \| The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. \|<br>\| **`temporarily_unavailable`** \| The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. \||
|reason|[AccountNameValidationReasonRO](#schemaaccountnamevalidationreasonro)|false|none|A code which explains why a given result was returned, and the service that returned it.|
|company_name|string|false|none|The **partially masked** name of the recipient when the account type is business.<br>Provided only if `individual_name` is not specified.<br><br>:::warning[Name considerations]<br>- The name you provide helps identify the request, but is not used for the actual check.<br>  The API simply returns the partial name associated with the IBAN for you to validate.<br>  Therefore, the **returned name may differ** from the one you provided.<br>- **Mismatched name type is not corrected**.<br>  This means that the name type in the response is returned as it was provided in the request.<br>  For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).<br>:::|
|individual_name|object|false|none|The partial name of the recipient when the account type is personal, that is, the first name and the last name's initial.<br>Provided only if `company_name` is not specified.<br><br>:::warning[Name considerations]<br>- The name you provide helps identify the request, but is not used for the actual check.<br>  The API simply returns the partial name associated with the IBAN for you to validate.<br>  Therefore, the **returned name may differ** from the one you provided.<br>- **Mismatched name type is not corrected**.<br>  This means that the name type in the response is returned as it was provided in the request.<br>  For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).<br>:::|
|name_validation_id|[AccountNameValidationId](#schemaaccountnamevalidationid)|false|none|The unique identifier of a CoP (Confirmation of Payee) check.<br><br>Pass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.<br>This prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|result_code|matched|
|result_code|close_match|
|result_code|not_matched|
|result_code|cannot_be_checked|
|result_code|temporarily_unavailable|

<h2 id="tocS_ValidateAccountNameResponseEUR">ValidateAccountNameResponseEUR</h2>
<!-- backwards compatibility -->
<a id="schemavalidateaccountnameresponseeur"></a>
<a id="schema_ValidateAccountNameResponseEUR"></a>
<a id="tocSvalidateaccountnameresponseeur"></a>
<a id="tocsvalidateaccountnameresponseeur"></a>

```json
{
  "result_code": "matched",
  "reason": {
    "type": "uk_cop",
    "code": "close_match"
  },
  "company_name": "string",
  "individual_name": {
    "first_name": "string",
    "last_name": "string"
  },
  "name_validation_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_code|string|true|none|The result of the check. <br><br>Possible values for EUR:<br><br>\| Result code                 \| Description \|<br>\|-----------------------------\|-------------\|<br>\| **`matched`**               \| The name matches the provided details. \|<br>\| **`close_match`**           \| The recipient's name is similar to the provided value. The **actual name** is returned. \|<br>\| **`not_matched`**           \| The name and account type don't match the provided values. The **name provided in the request** is returned. \|<br>\| **`cannot_be_checked`**     \| The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support VoP. \|<br>\| **`temporarily_unavailable`** \| The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. \||
|reason|[AccountNameValidationReasonEUR](#schemaaccountnamevalidationreasoneur)|false|none|A code which explains why a given result was returned, and the service that returned it.<br>For example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.|
|company_name|string|false|none|The name of the recipient when the account type is business.<br>Provided only if `individual_name` is not specified.<br><br>When the name is a close match, the actual name is returned.<br>Otherwise, the name you provided is returned.<br><br>:::warning[Mismatched name type is not corrected]<br>The name type in the response is returned as it was provided in the request.<br>For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).<br>:::|
|individual_name|object|false|none|The name of the recipient when the account type is personal.<br>Provided only if `company_name` is not specified.<br><br>When the name is a close match, the actual name is returned.<br>Otherwise, the name you provided is returned.<br><br>:::warning[Mismatched name type is not corrected]<br>The name type in the response is returned as it was provided in the request.<br>For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).<br>:::|
|name_validation_id|[AccountNameValidationId](#schemaaccountnamevalidationid)|false|none|The unique identifier of a CoP (Confirmation of Payee) check.<br><br>Pass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.<br>This prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|result_code|matched|
|result_code|close_match|
|result_code|not_matched|
|result_code|cannot_be_checked|
|result_code|temporarily_unavailable|

<h2 id="tocS_Webhook-v1">Webhook-v1</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-v1"></a>
<a id="schema_Webhook-v1"></a>
<a id="tocSwebhook-v1"></a>
<a id="tocswebhook-v1"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The valid webhook URL that event notifications are sent to. The supported protocol is `https`.|

<h2 id="tocS_Webhook-v2-basic">Webhook-v2-basic</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-v2-basic"></a>
<a id="schema_Webhook-v2-basic"></a>
<a id="tocSwebhook-v2-basic"></a>
<a id="tocswebhook-v2-basic"></a>

```json
{
  "id": "6fc346be-5cb5-4c14-aadc-e8aba6a655d7",
  "url": "https://www.example.com/",
  "events": [
    "TransactionCreated"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the webhook.|
|url|string(uri)|true|none|The valid webhook URL that event notifications are sent to. The supported protocol is `https`.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|true|none|The list of event types that you are subscribed to.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|TransactionCreated|
|events|TransactionStateChanged|
|events|PayoutLinkCreated|
|events|PayoutLinkStateChanged|

<h2 id="tocS_Webhook-v2">Webhook-v2</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-v2"></a>
<a id="schema_Webhook-v2"></a>
<a id="tocSwebhook-v2"></a>
<a id="tocswebhook-v2"></a>

```json
{
  "id": "6fc346be-5cb5-4c14-aadc-e8aba6a655d7",
  "url": "https://www.example.com/",
  "events": [
    "TransactionCreated"
  ],
  "signing_secret": "wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the webhook.|
|url|string(uri)|true|none|The valid webhook URL that event notifications are sent to. The supported protocol is `https`.|
|events|[[WebhookEventType](#schemawebhookeventtype)]|true|none|The list of event types that you are subscribed to.|
|signing_secret|string|true|none|The signing secret for the webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|events|TransactionCreated|
|events|TransactionStateChanged|
|events|PayoutLinkCreated|
|events|PayoutLinkStateChanged|

<h2 id="tocS_Webhooks">Webhooks</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks"></a>
<a id="schema_Webhooks"></a>
<a id="tocSwebhooks"></a>
<a id="tocswebhooks"></a>

```json
[
  {
    "id": "6fc346be-5cb5-4c14-aadc-e8aba6a655d7",
    "url": "https://www.example.com/",
    "events": [
      "TransactionCreated"
    ]
  }
]
```

<h2 id="tocS_WebhookEvent">WebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemawebhookevent"></a>
<a id="schema_WebhookEvent"></a>
<a id="tocSwebhookevent"></a>
<a id="tocswebhookevent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "webhook_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "webhook_url": "http://example.com",
  "payload": {},
  "last_sent_date": "1970-01-01T00:00:00Z"
}
```

A webhook event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the webhook event.|
|created_at|string(date-time)|true|none|The date and time the event was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|updated_at|string(date-time)|true|none|The date and time the event was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|webhook_id|string(uuid)|true|none|The ID of the webhook for which the event failed.|
|webhook_url|string(uri)|true|none|The valid webhook URL that event notifications are sent to. The supported protocol is `https`.|
|payload|object|true|none|The details of the failed event.|
|last_sent_date|string(date-time)|false|none|The date and time the last attempt at the event delivery occurred in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|

<h2 id="tocS_WebhookEvents">WebhookEvents</h2>
<!-- backwards compatibility -->
<a id="schemawebhookevents"></a>
<a id="schema_WebhookEvents"></a>
<a id="tocSwebhookevents"></a>
<a id="tocswebhookevents"></a>

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "webhook_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "webhook_url": "http://example.com",
    "payload": {},
    "last_sent_date": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_WebhookEventType">WebhookEventType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventtype"></a>
<a id="schema_WebhookEventType"></a>
<a id="tocSwebhookeventtype"></a>
<a id="tocswebhookeventtype"></a>

```json
"TransactionCreated"
```

The type of the webhook event to subscribe to.

<h2 id="tocS_WebhookSigningSecretRotateRequest">WebhookSigningSecretRotateRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksigningsecretrotaterequest"></a>
<a id="schema_WebhookSigningSecretRotateRequest"></a>
<a id="tocSwebhooksigningsecretrotaterequest"></a>
<a id="tocswebhooksigningsecretrotaterequest"></a>

```json
{
  "expiration_period": "PT5H30M"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiration_period|string(duration)|false|none|The expiration period for the signing secret in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations). If set, when you rotate the secret, it continues to be valid until the expiration period has passed. Otherwise, on rotation, the secret is invalidated immediately. The maximum value is 7 days.|
