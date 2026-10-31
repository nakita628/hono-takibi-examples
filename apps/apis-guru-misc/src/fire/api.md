<h1 id="fire-financial-services-business-api">Fire Financial Services Business API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The fire.com API allows you to deeply integrate Business Account features into your application or back-office systems.

The API provides read access to your profile, accounts and transactions, event-driven notifications of activity on the account and payment initiation via batches. Each feature has its own HTTP endpoint and every endpoint has its own permission.


The API exposes 3 main areas of functionality: financial functions, service information and service configuration.
## Financial Functions
These functions provide access to your account details, transactions, payee accounts, payment initiation etc.
## Service Functions
These provide information about the fees and limits applied to your account.
## Service configuration
These provide information about your service configs - applications, webhooks, API tokens, etc.

Base URLs:

* <a href="https://api.fire.com/business">https://api.fire.com/business</a> - Production Server

Email: <a href="mailto:api@fire.com">Fire API</a> 
Web: <a href="https://docs.fire.com">Fire API</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="fire-financial-services-business-api-authentication">Authentication</h1>

Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.
1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).
2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).
3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.

You now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.

**If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**

Once you have the access token, pass it as a header for every call, like so:
`Authorization: Bearer $ACCESS_TOKEN`
Whenever it expires, create a new nonce and get a new access token again.


## Authenticate with the API.

<a id="opIdauthenticate"></a>

> Code samples

```bash
curl https://example.com/v1/apps/accesstokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientId": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
    "clientSecret": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
    "grantType": "AccessToken",
    "nonce": 728345638475,
    "refreshToken": "4ADFB67A-0F5B-4A9A-9D74-34437250045C"
  }'
```

`POST /v1/apps/accesstokens`

Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.

  1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).
  
  2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).
  
  3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.
  
  
  You now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.


  **If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**
  
  
  Once you have the access token, pass it as a header for every call, like so:

  `Authorization: Bearer $ACCESS_TOKEN`

  Whenever it expires, create a new nonce and get a new access token again.


> Body parameter

```json
{
  "clientId": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "clientSecret": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "grantType": "AccessToken",
  "nonce": 728345638475,
  "refreshToken": "4ADFB67A-0F5B-4A9A-9D74-34437250045C"
}
```

<h3 id="authenticate-with-the-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Authentication data|
|» clientId|body|string|false|The Client ID for this API Application|
|» clientSecret|body|string|false|The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY \| sha256sum` ).|
|» grantType|body|string|false|Always `AccessToken`. (This will change to `refresh_token` in a future release.)|
|» nonce|body|integer(int64)|false|A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time.|
|» refreshToken|body|string|false|The Refresh Token for this API Application|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grantType|AccessToken|

> Example responses

> 200 Response

```json
{
  "accessToken": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "apiApplicationId": 433,
  "businessId": 248,
  "expiry": "2020-10-22T07:48:56.460Z",
  "permissions": [
    "PERM_BUSINESSES_GET_ACCOUNTS",
    "PERM_BUSINESSES_GET_ACCOUNT_TRANSACTIONS"
  ]
}
```

<h3 id="authenticate-with-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully authenticated|Inline|

<h3 id="authenticate-with-the-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The App Bearer Access Token you can use in further API calls.|
|apiApplicationId|integer(int64)|false|none|The ID of the application you are using.|
|businessId|integer(int64)|false|none|The business ID for the business.|
|expiry|string(date-time)|false|none|The expiry date and time for this token (ISO-8601).|
|permissions|[string]|false|none|The permissions assigned to the Access Token as an array of strings. This provides information on what API access it is allowed. See the section on Scope below.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fire-financial-services-business-api-accounts">Accounts</h1>

fire.com Accounts are the equivalent of a bank account from bank.

## List all fire.com Accounts

<a id="opIdgetAccounts"></a>

> Code samples

```bash
curl https://example.com/v1/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts`

Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "balance": 23950,
      "cbic": "CPAYIE2D",
      "ccan": "11111111",
      "ciban": "IE54CPAY99119911111111",
      "cnsc": "232221",
      "colour": "ORANGE",
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "defaultAccount": true,
      "directDebitsAllowed": false,
      "fopOnly": false,
      "ican": 42,
      "name": "Main Account",
      "status": "LIVE"
    }
  ]
}
```

<h3 id="list-all-firecom-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of account objects.|Inline|
|401|Unauthorized|Access Token is Invalid or missing|None|

<h3 id="list-all-firecom-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[object]|false|none|none|
|» balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|» cbic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» ccan|string|false|none|the Account Number of the account.|
|» ciban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» cnsc|string|false|none|the Sort Code of the account.|
|» colour|string|false|none|**Deprecated.** Internal Use|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» defaultAccount|boolean|false|none|true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).|
|» directDebitsAllowed|boolean|false|none|Whether or not direct debits can be set up on this account.|
|» fopOnly|boolean|false|none|Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.|
|» ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|» name|string|false|none|the name the user gives to the account to help them identify it.|
|» status|string|false|none|Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» status|LIVE|
|» status|BREXIT_MIGRATED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add a new account

<a id="opIdaddAccount"></a>

> Code samples

```bash
curl https://example.com/v1/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceptFeesAndCharges": true,
    "accountName": "Operating Account",
    "currency": "EUR"
  }'
```

`POST /v1/accounts`

Creates a new fire.com account.

**Please note there is a charge associated with creating a new account.**


> Body parameter

```json
{
  "acceptFeesAndCharges": true,
  "accountName": "Operating Account",
  "currency": "EUR"
}
```

<h3 id="add-a-new-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of the new account|
|» acceptFeesAndCharges|body|boolean|false|a field to indicate you accept the fee for a new account|
|» accountName|body|string|false|Name to give the new account|
|» currency|body|string|false|The currency of the new account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|EUR|
|» currency|GBP|

> Example responses

> 201 Response

```json
{
  "balance": 23950,
  "cbic": "CPAYIE2D",
  "ccan": "11111111",
  "ciban": "IE54CPAY99119911111111",
  "cnsc": "232221",
  "colour": "ORANGE",
  "currency": {
    "code": "EUR",
    "description": "Euro"
  },
  "defaultAccount": true,
  "directDebitsAllowed": false,
  "fopOnly": false,
  "ican": 42,
  "name": "Main Account",
  "status": "LIVE"
}
```

<h3 id="add-a-new-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The details of the new account|Inline|

<h3 id="add-a-new-account-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|cbic|string|false|none|the BIC of the account (provided if currency is EUR).|
|ccan|string|false|none|the Account Number of the account.|
|ciban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|cnsc|string|false|none|the Sort Code of the account.|
|colour|string|false|none|**Deprecated.** Internal Use|
|currency|object|false|none|The currency.|
|» code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» description|string|false|none|The name of the currency|
|defaultAccount|boolean|false|none|true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).|
|directDebitsAllowed|boolean|false|none|Whether or not direct debits can be set up on this account.|
|fopOnly|boolean|false|none|Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.|
|ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|name|string|false|none|the name the user gives to the account to help them identify it.|
|status|string|false|none|Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|EUR|
|» code|GBP|
|status|LIVE|
|status|BREXIT_MIGRATED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve the details of a fire.com Account

<a id="opIdgetAccountById"></a>

> Code samples

```bash
curl https://example.com/v1/accounts/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{ican}`

You can retrieve the details of a fire.com Account by its `ican`.

<h3 id="retrieve-the-details-of-a-firecom-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ican|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "balance": 23950,
  "cbic": "CPAYIE2D",
  "ccan": "11111111",
  "ciban": "IE54CPAY99119911111111",
  "cnsc": "232221",
  "colour": "ORANGE",
  "currency": {
    "code": "EUR",
    "description": "Euro"
  },
  "defaultAccount": true,
  "directDebitsAllowed": false,
  "fopOnly": false,
  "ican": 42,
  "name": "Main Account",
  "status": "LIVE"
}
```

<h3 id="retrieve-the-details-of-a-firecom-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of account objects.|Inline|
|401|Unauthorized|Access Token is Invalid or missing|None|

<h3 id="retrieve-the-details-of-a-firecom-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|cbic|string|false|none|the BIC of the account (provided if currency is EUR).|
|ccan|string|false|none|the Account Number of the account.|
|ciban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|cnsc|string|false|none|the Sort Code of the account.|
|colour|string|false|none|**Deprecated.** Internal Use|
|currency|object|false|none|The currency.|
|» code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» description|string|false|none|The name of the currency|
|defaultAccount|boolean|false|none|true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).|
|directDebitsAllowed|boolean|false|none|Whether or not direct debits can be set up on this account.|
|fopOnly|boolean|false|none|Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.|
|ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|name|string|false|none|the name the user gives to the account to help them identify it.|
|status|string|false|none|Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|EUR|
|» code|GBP|
|status|LIVE|
|status|BREXIT_MIGRATED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-open-banking">Open Banking</h1>

Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.

To set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.

Consumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.

The funds are settled into your fire.com account, fully reconciled, with your specified fields provided.

There are two implementation options you can use to display payment pages with Fire Open Payments.
1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.
2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.

## Hosted Payment Pages Option
![Image](https://fire.com/docs/images/fop-hosted-flow.png)

The payer is brought through 5 stages to complete the payment:
1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.
2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.
3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.
4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.
5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.

To implement the hosted Fire Open Payments option you need to do the following:
1. You can create a new Fire Open Payment request either within Firework Online or via the API.
2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:
    - “Create a Payment Request”
    - “Get Payment Details”

3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.
4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.
5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.
6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.
7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.
8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.
9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.

Once the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`


## Get list of ASPSPs / Banks

<a id="opIdgetListOfAspsps"></a>

> Code samples

```bash
curl https://example.com/v1/aspsps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/aspsps`

Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***


<h3 id="get-list-of-aspsps-banks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|currency|query|string|false|The three letter code for the currency - either `EUR` or `GBP`. Use this to filter the list for banks that can be used to pay in a certain currency.|

> Example responses

> 200 Response

```json
{
  "aspsps": [
    {
      "alias": "Demo Bank",
      "aspspUuid": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
      "country": {
        "code": "GB",
        "description": "United Kingdom"
      },
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "dateCreated": "2019-08-22T07:48:56.460Z",
      "lastUpdated": "2019-08-22T07:48:56.460Z",
      "logoUrl": "https://assets.fire.com/pisp/demo.svg"
    }
  ],
  "total": 10
}
```

<h3 id="get-list-of-aspsps-banks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ASPSPs the customers can use to pay a payment.<br>|Inline|

<h3 id="get-list-of-aspsps-banks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspsps|[object]|false|none|none|
|» alias|string|false|none|The name of the ASPSP / bank.|
|» aspspUuid|string|false|none|The UUID associated with the ASPSP / bank.|
|» country|object|false|none|none|
|» » code|string|false|none|The 2-letter code for the country - e.g. `IE`, `GP`...|
|» » description|string|false|none|The name of the country|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» dateCreated|string(date-time)|false|none|The date the ASPSP / bank was created.|
|» lastUpdated|string(date-time)|false|none|The date the ASPSP / bank was last updated.|
|» logoUrl|string|false|none|A link to the ASPSP / bank's logo in SVG format.|
|total|integer|false|none|The total number of ASPSPs in the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Fire Open Payment request

<a id="opIdnewPaymentRequest"></a>

> Code samples

```bash
curl https://example.com/v1/paymentrequests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalFields": "ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2",
    "amount": 1000,
    "collectFields": "ADDRESS|REFERENCE|COMMENT1",
    "currency": "EUR",
    "description": "Gym Fees Oct 2020",
    "expiry": "2020-10-22T07:48:56.460Z",
    "icanTo": 42,
    "mandatoryFields": "ADDRESS|REFERENCE|COMMENT1",
    "maxNumberPayments": 1,
    "myRef": "Fees",
    "orderDetails": {
      "comment1": "Additional comments about the transaction",
      "comment2": "Additional comments about the transaction",
      "customerNumber": "123645",
      "deliveryAddressLine1": "12 The Street",
      "deliveryAddressLine2": "The Way",
      "deliveryCity": "London",
      "deliveryCountry": "GB",
      "deliveryPostCode": "EC15155",
      "merchantCustomerIdentification": 8303863544,
      "merchantNumber": "1234567",
      "orderId": "6c28a47d-4502-4111",
      "productId": "ZFDAA-1221",
      "variableReference": "John Doe"
    },
    "returnUrl": "https://example.com/callback",
    "type": "OTHER"
  }'
```

`POST /v1/paymentrequests`

Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.

To set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.

Consumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.

The funds are settled into your fire.com account, fully reconciled, with your specified fields provided.

There are two implementation options you can use to display payment pages with Fire Open Payments.
1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.
2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.

## Hosted Payment Pages Option
![Image](https://fire.com/docs/images/fop-hosted-flow.png)

The payer is brought through 5 stages to complete the payment:
1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.
2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.
3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.
4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.
5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.

To implement the hosted Fire Open Payments option you need to do the following:
1. You can create a new Fire Open Payment request either within Firework Online or via the API.
2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:
    - “Create a Payment Request”
    - “Get Payment Details”

3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.
4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.
5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.
6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.
7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.
8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.
9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.

Once the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`

This request creates a new Fire Open Payment Payment. A code is returned that can be shared to your customers as a URL by any channel you wish.
You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.


> Body parameter

```json
{
  "additionalFields": "ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2",
  "amount": 1000,
  "collectFields": "ADDRESS|REFERENCE|COMMENT1",
  "currency": "EUR",
  "description": "Gym Fees Oct 2020",
  "expiry": "2020-10-22T07:48:56.460Z",
  "icanTo": 42,
  "mandatoryFields": "ADDRESS|REFERENCE|COMMENT1",
  "maxNumberPayments": 1,
  "myRef": "Fees",
  "orderDetails": {
    "comment1": "Additional comments about the transaction",
    "comment2": "Additional comments about the transaction",
    "customerNumber": "123645",
    "deliveryAddressLine1": "12 The Street",
    "deliveryAddressLine2": "The Way",
    "deliveryCity": "London",
    "deliveryCountry": "GB",
    "deliveryPostCode": "EC15155",
    "merchantCustomerIdentification": 8303863544,
    "merchantNumber": "1234567",
    "orderId": "6c28a47d-4502-4111",
    "productId": "ZFDAA-1221",
    "variableReference": "John Doe"
  },
  "returnUrl": "https://example.com/callback",
  "type": "OTHER"
}
```

<h3 id="create-a-fire-open-payment-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of the new payment request|
|» additionalFields|body|string|false|These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.|
|» amount|body|integer(int64)|false|The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).|
|» collectFields|body|string|false|For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.|
|» currency|body|string|true|Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.|
|» description|body|string|true|A public facing description of the request. This will be shown to the user when they tap or scan the request.|
|» expiry|body|string(date-time)|false|This is the expiry of the payment request. After this time, the payment cannot be paid.|
|» icanTo|body|integer(int64)|true|The ican of the account to collect the funds into. Must be one of your fire.com Accounts.|
|» mandatoryFields|body|string|false|For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.|
|» maxNumberPayments|body|integer|false|The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.|
|» myRef|body|string|true|An internal description of the request.|
|» orderDetails|body|object|false|none|
|» » comment1|body|string|false|This is your own comment for the transaction.|
|» » comment2|body|string|false|This is your own comment for the transaction.|
|» » customerNumber|body|string|false|Use this field to store a customer number for the transaction (for example).|
|» » deliveryAddressLine1|body|string|false|The first line of the delivery address.|
|» » deliveryAddressLine2|body|string|false|The second line of the delivery address.|
|» » deliveryCity|body|string|false|Delivery address city|
|» » deliveryCountry|body|string|false|2-digit code for the country|
|» » deliveryPostCode|body|string|false|Delivery address post code|
|» » merchantCustomerIdentification|body|string|false|This is a reference you use to uniquely identify each of your customers.|
|» » merchantNumber|body|string|false|Your Merchant Number (if applicable).|
|» » orderId|body|string|false|Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1.|
|» » productId|body|string|false|Use this field to store a product id for the transaction (for example).|
|» » variableReference|body|string|false|Use this field to store any other reference for the transaction (for example, a phone number).|
|» returnUrl|body|string|false|The merchant return URL where the customer will be re-directed to with the result of the transaction.|
|» type|body|string|true|The type of Fire Open Payment that was created|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|EUR|
|» currency|GBP|
|» type|OTHER|

> Example responses

> 200 Response

```json
{
  "code": "1234abcd",
  "type": "OTHER"
}
```

<h3 id="create-a-fire-open-payment-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment Request created successfully|Inline|

<h3 id="create-a-fire-open-payment-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code for this request. Create a URL in this format: `https://payments.fire.com/{code}` and share to your customers.<br>|
|type|string|false|none|The type of Fire Open Payment that was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OTHER|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Payment Details

<a id="opIdgetPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/v1/payments/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payments/{paymentUuid}`

Returns the details of a specific payment.

As the customer goes through the process of making the payment the status of the payment will change.

* `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
* `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
* `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
* `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
* `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
* `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.


You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.


<h3 id="get-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentUuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "additionalFields": "ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2",
  "amount": 1000,
  "collectFields": "ADDRESS|REFERENCE|COMMENT1",
  "currency": {
    "code": "EUR",
    "description": "Euro"
  },
  "description": "Gym Fees Oct 2020",
  "expiry": "2024-10-22T07:48:56.460Z",
  "icanTo": 42,
  "mandatoryFields": "ADDRESS|REFERENCE|COMMENT1",
  "maxNumberPayments": 1,
  "myRef": "Fees",
  "orderDetails": {
    "comment1": "Additional comments about the transaction",
    "comment2": "Additional comments about the transaction",
    "customerNumber": "123645",
    "deliveryAddressLine1": "12 The Street",
    "deliveryAddressLine2": "The Way",
    "deliveryCity": "London",
    "deliveryCountry": "GB",
    "deliveryPostCode": "EC15155",
    "merchantCustomerIdentification": 8303863544,
    "merchantNumber": "1234567",
    "orderId": "6c28a47d-4502-4111",
    "productId": "ZFDAA-1221",
    "variableReference": "John Doe"
  },
  "paymentRequestCode": "1234abcd",
  "paymentUuid": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "returnUrl": "https://example.com/callback",
  "status": "AWAITING_AUTHORISATION",
  "transactionType": "REFUND_REQUEST",
  "type": "OTHER",
  "webhookUrl": "https://example.com/webhook"
}
```

<h3 id="get-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Payment Request details object|Inline|

<h3 id="get-payment-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalFields|string|false|none|These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.|
|amount|integer(int64)|false|none|The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).|
|collectFields|string|false|none|For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.|
|currency|object|false|none|The currency.|
|» code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» description|string|false|none|The name of the currency|
|description|string|false|none|A public facing description of the request. This will be shown to the user when they tap or scan the request.|
|expiry|string(date-time)|false|none|This is the expiry of the payment request. After this time, the payment cannot be paid.|
|icanTo|integer(int64)|false|none|The ican of the account to collect the funds into. Must be one of your fire.com Accounts.|
|mandatoryFields|string|false|none|For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.|
|maxNumberPayments|integer|false|none|The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.|
|myRef|string|false|none|An internal description of the request.|
|orderDetails|object|false|none|none|
|» comment1|string|false|none|This is your own comment for the transaction.|
|» comment2|string|false|none|This is your own comment for the transaction.|
|» customerNumber|string|false|none|Use this field to store a customer number for the transaction (for example).|
|» deliveryAddressLine1|string|false|none|The first line of the delivery address.|
|» deliveryAddressLine2|string|false|none|The second line of the delivery address.|
|» deliveryCity|string|false|none|Delivery address city|
|» deliveryCountry|string|false|none|2-digit code for the country|
|» deliveryPostCode|string|false|none|Delivery address post code|
|» merchantCustomerIdentification|string|false|none|This is a reference you use to uniquely identify each of your customers.|
|» merchantNumber|string|false|none|Your Merchant Number (if applicable).|
|» orderId|string|false|none|Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1.|
|» productId|string|false|none|Use this field to store a product id for the transaction (for example).|
|» variableReference|string|false|none|Use this field to store any other reference for the transaction (for example, a phone number).|
|paymentRequestCode|string|false|none|The code that was returned when you created the payment request.|
|paymentUuid|string|false|none|A unique id for the transaction.|
|returnUrl|string|false|none|The merchant return URL where the customer will be re-directed to with the result of the transaction.|
|status|string|false|none|The status of the transaction|
|transactionType|string|false|none|The type of payment request payment|
|type|string|false|none|The type of Fire Open Payment that was created|
|webhookUrl|string|false|none|A URL to be called in the background with the details of the payment after the payment is complete|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|EUR|
|» code|GBP|
|status|AWAITING_AUTHORISATION|
|status|AUTHORISED|
|status|AWAITING_MULTI_AUTHORISATION|
|status|NOT_AUTHORISED|
|status|PAID|
|status|REJECTED|
|status|ACCEPTED|
|status|RECEIVED|
|transactionType|REFUND_REQUEST|
|transactionType|PAYMENT|
|type|OTHER|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-api">API</h1>

Manage your API Applications and Webhooks

## Create a new API Application

<a id="opIdcreateApiApplication"></a>

> Code samples

```bash
curl https://example.com/v1/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applicationName": "Batch Processing API",
    "enabled": true,
    "expiry": "2019-08-22T07:48:56.460Z",
    "ican": 0,
    "numberOfPayeeApprovalsRequired": 1,
    "numberOfPaymentApprovalsRequired": 1,
    "permissions": [
      "PERM_BUSINESS_POST_PAYMENT_REQUEST",
      "PERM_BUSINESS_GET_ASPSPS"
    ]
  }'
```

`POST /v1/apps`

Create a new API Application with specified permissions

> Body parameter

```json
{
  "applicationName": "Batch Processing API",
  "enabled": true,
  "expiry": "2019-08-22T07:48:56.460Z",
  "ican": 0,
  "numberOfPayeeApprovalsRequired": 1,
  "numberOfPaymentApprovalsRequired": 1,
  "permissions": [
    "PERM_BUSINESS_POST_PAYMENT_REQUEST",
    "PERM_BUSINESS_GET_ASPSPS"
  ]
}
```

<h3 id="create-a-new-api-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of the new API Application|
|» applicationName|body|string|false|A name for the API Application to help you identify it|
|» enabled|body|boolean|false|Whether or not this API Application can be used|
|» expiry|body|string(date-time)|false|The date that this API Application can no longer be used.|
|» ican|body|integer(int64)|false|The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.|
|» numberOfPayeeApprovalsRequired|body|integer|false|Number of approvals required to create a payee in a batch|
|» numberOfPaymentApprovalsRequired|body|integer|false|Number of approvals required to process a payment in a batch|
|» permissions|body|[string]|false|The list of permissions required|

> Example responses

> 200 Response

```json
{
  "applicationId": 45345,
  "clientId": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "clientKey": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
  "enabled": true,
  "expiry": "2019-08-22T07:48:56.460Z",
  "ican": 0,
  "numberOfPayeeApprovalsRequired": 1,
  "numberOfPaymentApprovalsRequired": 1,
  "refreshToken": "4ADFB67A-0F5B-4A9A-9D74-34437250045C"
}
```

<h3 id="create-a-new-api-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Application created successfully|Inline|

<h3 id="create-a-new-api-application-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|integer(int64)|false|none|The ID of the API Application|
|clientId|string|false|none|The Client ID of the new API Application|
|clientKey|string|false|none|The Client Key of the new API Application|
|enabled|boolean|false|none|Whether or not this API Application can be used|
|expiry|string(date-time)|false|none|The date that this API Application can no longer be used.|
|ican|integer(int64)|false|none|The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.|
|numberOfPayeeApprovalsRequired|integer|false|none|Number of approvals required to create a payee in a batch|
|numberOfPaymentApprovalsRequired|integer|false|none|Number of approvals required to process a payment in a batch|
|refreshToken|string|false|none|The Refresh Token of the new API Application|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-transactions">Transactions</h1>

While there are many types of transactions, they are all represented by the same JSON object with a different txnType.

## List transactions for an account (v1)

<a id="opIdgetTransactionsByIdv1"></a>

> Code samples

```bash
curl 'https://example.com/v1/accounts/0/transactions?limit=0&offset=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{ican}/transactions`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.

<h3 id="list-transactions-for-an-account-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ican|path|integer(int64)|true|none|
|limit|query|integer(int64)|true|none|
|offset|query|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "dateRangeTo": 1547744156603,
  "total": 1,
  "transactions": [
    {
      "amountAfterCharges": 5000,
      "amountBeforeCharges": 5000,
      "balance": 8500,
      "batchItemDetails": {
        "batchItemPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "batchName": "Payroll 2022-11",
        "batchPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "jobNumber": "2018-01-PR"
      },
      "card": {
        "alias": "string",
        "cardId": 0,
        "embossBusinessName": "string",
        "embossCardName": "string",
        "expiryDate": "1970-01-01T00:00:00Z",
        "maskedPan": "string",
        "provider": "string"
      },
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "date": "2021-04-13T11:06:32.437Z",
      "dateAcknowledged": "2021-04-13T11:06:32.437Z",
      "directDebitDetails": {
        "directDebitReference": "VODA-ABC453-1",
        "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
        "mandateReference": "CRZ-102190123",
        "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
        "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
        "originatorAlias": "Three",
        "originatorLogoUrlLarge": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorLogoUrlSmall": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorName": "Vodafone PLC",
        "originatorReference": "VODA-123456"
      },
      "eventUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
      "feeAmount": 0,
      "fxTradeDetails": {
        "buyAmount": 359,
        "buyCurrency": "GBP",
        "fixedSide": "SELL",
        "provider": "TCC",
        "rate4d": 7180,
        "sellAmount": 500,
        "sellCurrency": "EUR"
      },
      "ican": 1951,
      "myRef": "Transfer to main account",
      "paymentRequestPublicCode": "1abcdefg",
      "proprietarySchemeDetails": [
        {
          "data": "remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079",
          "type": "SCT"
        }
      ],
      "refId": 26774,
      "relatedParty": {
        "account": {
          "accountNumber": "11111111",
          "alias": "Main Account",
          "bic": "CPAYIE2D",
          "iban": "IE54CPAY99119911111111",
          "id": 42,
          "nsc": "232221"
        },
        "type": "FIRE_ACCOUNT"
      },
      "taxAmount": 0,
      "txnId": 30157,
      "type": "WITHDRAWAL",
      "yourRef": "From John Smith"
    }
  ]
}
```

<h3 id="list-transactions-for-an-account-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of transaction objects for the account with a count (`total`).|Inline|

<h3 id="list-transactions-for-an-account-v1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRangeTo|integer|false|none|milisecond timestamp of date range to value.|
|total|integer|false|none|The total number of card transactions in the list.|
|transactions|[object]|false|none|none|
|» amountAfterCharges|integer(int64)|false|none|Net amount lodged or taken from the account after fees and charges were applied.|
|» amountBeforeCharges|integer(int64)|false|none|Amount of the transaction before the fees and taxes were applied.|
|» balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|» batchItemDetails|object|false|none|Details of the batch run if this transaction was part of a batch.|
|» » batchItemPublicUuid|string|false|none|The UUID for this item in the batch.|
|» » batchName|string|false|none|The optional name given to the batch at creation time.|
|» » batchPublicUuid|string|false|none|The UUID for this batch.|
|» » jobNumber|string|false|none|The optional job number given to the batch to link it to your own system.|
|» card|object|false|none|Details of the card used (if applicable)|
|» » alias|string|false|none|none|
|» » cardId|integer(int64)|false|none|none|
|» » embossBusinessName|string|false|none|none|
|» » embossCardName|string|false|none|none|
|» » expiryDate|string(date-time)|false|none|none|
|» » maskedPan|string|false|none|none|
|» » provider|string|false|none|none|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» date|string(date-time)|false|none|Date of the transaction|
|» dateAcknowledged|string(date-time)|false|none|none|
|» directDebitDetails|object|false|none|Details of the direct debit (if applicable)|
|» » directDebitReference|string|false|none|The direct debit reference.|
|» » directDebitUuid|string|false|none|The UUID for the direct debit payment|
|» » mandateReference|string|false|none|the reference of the mandate|
|» » mandateUUid|string|false|none|The UUID for the mandate|
|» » mandateUuid|string|false|none|The UUID for the mandate|
|» » originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|» » originatorLogoUrlLarge|string|false|none|URL pointing to a large version of the Originator Logo (if available)|
|» » originatorLogoUrlSmall|string|false|none|URL pointing to a small version of the Originator Logo (if available)|
|» » originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» » originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» eventUuid|string|false|none|An internal Fire reference for the transaction (UUID)|
|» feeAmount|integer(int64)|false|none|The amount of the fee, if any.|
|» fxTradeDetails|object|false|none|Details of the FX trade (if applicable)|
|» » buyAmount|integer(int64)|false|none|amount of buyCurrency being bought|
|» » buyCurrency|string|false|none|currency which is being bought|
|» » fixedSide|string|false|none|type of trade - BUY or SELL|
|» » provider|string|false|none|The FX provider used to make the trade.|
|» » rate4d|integer(int64)|false|none|exchange rate|
|» » sellAmount|integer(int64)|false|none|amount of sellCurrency being sold|
|» » sellCurrency|string|false|none|currency which is being sold|
|» ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.|
|» myRef|string|false|none|The comment/reference on the transaction|
|» paymentRequestPublicCode|string|false|none|(FOP payments only) The FOP Payment Code that was used to make this payment.|
|» proprietarySchemeDetails|[object]|false|none|Extra details about the transaction based on the scheme used to make the payment.|
|» » data|string|false|none|the scheme proprietary data - key pairs separated by \| and key/values separated by ^|
|» » type|string|false|none|the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.|
|» refId|integer(int64)|false|none|The id of the transaction.|
|» relatedParty|object|false|none|Details of the related third party involved in the transaction.|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|none|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|The account number of the Withdrawl account in reference|
|» » » alias|string|false|none|The Alias name of the Withdrawl account in reference|
|» » » bic|string|false|none|The BIC of the Withdrawl account in reference|
|» » » iban|string|false|none|The BIC of the Withdrawl account in reference|
|» » » id|integer(int64)|false|none|The ID number of the Withdrawl account in reference|
|» » » nsc|string|false|none|(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » cardMerchant|object|false|none|none|
|» » » acquirerIdDe32|string|false|none|none|
|» » » additionalAmtDe54|string|false|none|none|
|» » » additionalDataDe124|string|false|none|none|
|» » » additionalDataDe48|string|false|none|none|
|» » » authCodeDe38|string|false|none|none|
|» » » authorisedByGps|string|false|none|none|
|» » » avsResult|string|false|none|none|
|» » » billAmt|integer(int64)|false|none|none|
|» » » billCcy|string|false|none|none|
|» » » expiryDate|string|false|none|none|
|» » » mccCode|string|false|none|none|
|» » » merchIdDe42|string|false|none|none|
|» » » merchNameDe43|string|false|none|none|
|» » » mtId|string|false|none|none|
|» » » posDataDe22|string|false|none|none|
|» » » posDataDe61|string|false|none|none|
|» » » posTermnlDe41|string|false|none|none|
|» » » procCode|string|false|none|none|
|» » » recordDataDe120|string|false|none|none|
|» » » respCodeDe39|string|false|none|none|
|» » » retRefNoDe37|string|false|none|none|
|» » » statusCode|string|false|none|none|
|» » » token|string|false|none|none|
|» » » txnAmt4d|integer(int64)|false|none|none|
|» » » txnCcy|string|false|none|none|
|» » » txnCtry|string|false|none|none|
|» » » txnDesc|string|false|none|none|
|» » » txnStatCode|string|false|none|none|
|» » » txnType|string|false|none|none|
|» » type|string|false|none|none|
|» taxAmount|integer(int64)|false|none|The amount of the tax, if any (e.g. Stamp duty for ATM transactions)|
|» txnId|integer(int64)|false|none|The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.|
|» type|string|false|none|The type of the transaction:<br>* `LODGEMENT` - Bank Transfer received<br>* `PIS_LODGEMENT` - Fire Open Payments Lodgement received<br>* `MANUAL_TRANSFER` - Manual Transfer to<br>* `WITHDRAWAL` - Bank Transfer sent<br>* `REVERSAL` - Credit Reversal<br>* `DIRECT_DEBIT` - A direct debit.<br>* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.<br>* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.<br>* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)<br>* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)<br>* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned<br>* `LODGEMENT_REVERSED` - Bank Transfer received returned<br>* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)<br>* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)<br>* `CREATE_CARD` - The fee taken when a debit card is issued.<br>* `ADD_ACCOUNT` - The fee taken when an account is created.<br>* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       <br>* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC<br>* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC<br>* `CARD_ECOMMERCE_DEBIT` - Card used on the internet<br>* `CARD_ECOMMERCE_CREDIT` - Card used on the internet<br>* `CARD_ATM_DEBIT` - Card used in an ATM<br>* `CARD_ATM_CREDIT` - Card used in an ATM<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency<br>* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed<br>* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed<br>* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>|
|» yourRef|string|false|none|The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» » type|FIRE_ACCOUNT|
|» » type|EXTERNAL_ACCOUNT|
|» » type|WITHDRAWAL_ACCOUNT|
|» » type|CARD_MERCHANT|
|» » type|CARD_ATM|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Filtered list of transactions for an account (v1)

<a id="opIdgetTransactionsFilteredById"></a>

> Code samples

```bash
curl 'https://example.com/v1/accounts/0/transactions/filter?dateRangeFrom=0&dateRangeTo=0&searchKeyword=string&transactionTypes=string&offset=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accounts/{ican}/transactions/filter`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.
* `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
* `dateRangeTo` - A millisecond epoch time specifying the date range end date.
* `searchKeyword` - Search term to filter by from the reference field (`myRef`).
* `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
* `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.


<h3 id="filtered-list-of-transactions-for-an-account-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ican|path|integer(int64)|true|none|
|dateRangeFrom|query|integer(int64)|true|none|
|dateRangeTo|query|integer(int64)|true|none|
|searchKeyword|query|string|true|none|
|transactionTypes|query|[string]|true|none|
|offset|query|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "dateRangeTo": 1547744156603,
  "total": 1,
  "transactions": [
    {
      "amountAfterCharges": 5000,
      "amountBeforeCharges": 5000,
      "balance": 8500,
      "batchItemDetails": {
        "batchItemPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "batchName": "Payroll 2022-11",
        "batchPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "jobNumber": "2018-01-PR"
      },
      "card": {
        "alias": "string",
        "cardId": 0,
        "embossBusinessName": "string",
        "embossCardName": "string",
        "expiryDate": "1970-01-01T00:00:00Z",
        "maskedPan": "string",
        "provider": "string"
      },
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "date": "2021-04-13T11:06:32.437Z",
      "dateAcknowledged": "2021-04-13T11:06:32.437Z",
      "directDebitDetails": {
        "directDebitReference": "VODA-ABC453-1",
        "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
        "mandateReference": "CRZ-102190123",
        "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
        "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
        "originatorAlias": "Three",
        "originatorLogoUrlLarge": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorLogoUrlSmall": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorName": "Vodafone PLC",
        "originatorReference": "VODA-123456"
      },
      "eventUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
      "feeAmount": 0,
      "fxTradeDetails": {
        "buyAmount": 359,
        "buyCurrency": "GBP",
        "fixedSide": "SELL",
        "provider": "TCC",
        "rate4d": 7180,
        "sellAmount": 500,
        "sellCurrency": "EUR"
      },
      "ican": 1951,
      "myRef": "Transfer to main account",
      "paymentRequestPublicCode": "1abcdefg",
      "proprietarySchemeDetails": [
        {
          "data": "remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079",
          "type": "SCT"
        }
      ],
      "refId": 26774,
      "relatedParty": {
        "account": {
          "accountNumber": "11111111",
          "alias": "Main Account",
          "bic": "CPAYIE2D",
          "iban": "IE54CPAY99119911111111",
          "id": 42,
          "nsc": "232221"
        },
        "type": "FIRE_ACCOUNT"
      },
      "taxAmount": 0,
      "txnId": 30157,
      "type": "WITHDRAWAL",
      "yourRef": "From John Smith"
    }
  ]
}
```

<h3 id="filtered-list-of-transactions-for-an-account-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of transaction objects for the account with a count (`total`) filtered by the specified query parameter.|Inline|

<h3 id="filtered-list-of-transactions-for-an-account-v1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRangeTo|integer|false|none|milisecond timestamp of date range to value.|
|total|integer|false|none|The total number of card transactions in the list.|
|transactions|[object]|false|none|none|
|» amountAfterCharges|integer(int64)|false|none|Net amount lodged or taken from the account after fees and charges were applied.|
|» amountBeforeCharges|integer(int64)|false|none|Amount of the transaction before the fees and taxes were applied.|
|» balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|» batchItemDetails|object|false|none|Details of the batch run if this transaction was part of a batch.|
|» » batchItemPublicUuid|string|false|none|The UUID for this item in the batch.|
|» » batchName|string|false|none|The optional name given to the batch at creation time.|
|» » batchPublicUuid|string|false|none|The UUID for this batch.|
|» » jobNumber|string|false|none|The optional job number given to the batch to link it to your own system.|
|» card|object|false|none|Details of the card used (if applicable)|
|» » alias|string|false|none|none|
|» » cardId|integer(int64)|false|none|none|
|» » embossBusinessName|string|false|none|none|
|» » embossCardName|string|false|none|none|
|» » expiryDate|string(date-time)|false|none|none|
|» » maskedPan|string|false|none|none|
|» » provider|string|false|none|none|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» date|string(date-time)|false|none|Date of the transaction|
|» dateAcknowledged|string(date-time)|false|none|none|
|» directDebitDetails|object|false|none|Details of the direct debit (if applicable)|
|» » directDebitReference|string|false|none|The direct debit reference.|
|» » directDebitUuid|string|false|none|The UUID for the direct debit payment|
|» » mandateReference|string|false|none|the reference of the mandate|
|» » mandateUUid|string|false|none|The UUID for the mandate|
|» » mandateUuid|string|false|none|The UUID for the mandate|
|» » originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|» » originatorLogoUrlLarge|string|false|none|URL pointing to a large version of the Originator Logo (if available)|
|» » originatorLogoUrlSmall|string|false|none|URL pointing to a small version of the Originator Logo (if available)|
|» » originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» » originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» eventUuid|string|false|none|An internal Fire reference for the transaction (UUID)|
|» feeAmount|integer(int64)|false|none|The amount of the fee, if any.|
|» fxTradeDetails|object|false|none|Details of the FX trade (if applicable)|
|» » buyAmount|integer(int64)|false|none|amount of buyCurrency being bought|
|» » buyCurrency|string|false|none|currency which is being bought|
|» » fixedSide|string|false|none|type of trade - BUY or SELL|
|» » provider|string|false|none|The FX provider used to make the trade.|
|» » rate4d|integer(int64)|false|none|exchange rate|
|» » sellAmount|integer(int64)|false|none|amount of sellCurrency being sold|
|» » sellCurrency|string|false|none|currency which is being sold|
|» ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.|
|» myRef|string|false|none|The comment/reference on the transaction|
|» paymentRequestPublicCode|string|false|none|(FOP payments only) The FOP Payment Code that was used to make this payment.|
|» proprietarySchemeDetails|[object]|false|none|Extra details about the transaction based on the scheme used to make the payment.|
|» » data|string|false|none|the scheme proprietary data - key pairs separated by \| and key/values separated by ^|
|» » type|string|false|none|the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.|
|» refId|integer(int64)|false|none|The id of the transaction.|
|» relatedParty|object|false|none|Details of the related third party involved in the transaction.|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|none|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|The account number of the Withdrawl account in reference|
|» » » alias|string|false|none|The Alias name of the Withdrawl account in reference|
|» » » bic|string|false|none|The BIC of the Withdrawl account in reference|
|» » » iban|string|false|none|The BIC of the Withdrawl account in reference|
|» » » id|integer(int64)|false|none|The ID number of the Withdrawl account in reference|
|» » » nsc|string|false|none|(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » cardMerchant|object|false|none|none|
|» » » acquirerIdDe32|string|false|none|none|
|» » » additionalAmtDe54|string|false|none|none|
|» » » additionalDataDe124|string|false|none|none|
|» » » additionalDataDe48|string|false|none|none|
|» » » authCodeDe38|string|false|none|none|
|» » » authorisedByGps|string|false|none|none|
|» » » avsResult|string|false|none|none|
|» » » billAmt|integer(int64)|false|none|none|
|» » » billCcy|string|false|none|none|
|» » » expiryDate|string|false|none|none|
|» » » mccCode|string|false|none|none|
|» » » merchIdDe42|string|false|none|none|
|» » » merchNameDe43|string|false|none|none|
|» » » mtId|string|false|none|none|
|» » » posDataDe22|string|false|none|none|
|» » » posDataDe61|string|false|none|none|
|» » » posTermnlDe41|string|false|none|none|
|» » » procCode|string|false|none|none|
|» » » recordDataDe120|string|false|none|none|
|» » » respCodeDe39|string|false|none|none|
|» » » retRefNoDe37|string|false|none|none|
|» » » statusCode|string|false|none|none|
|» » » token|string|false|none|none|
|» » » txnAmt4d|integer(int64)|false|none|none|
|» » » txnCcy|string|false|none|none|
|» » » txnCtry|string|false|none|none|
|» » » txnDesc|string|false|none|none|
|» » » txnStatCode|string|false|none|none|
|» » » txnType|string|false|none|none|
|» » type|string|false|none|none|
|» taxAmount|integer(int64)|false|none|The amount of the tax, if any (e.g. Stamp duty for ATM transactions)|
|» txnId|integer(int64)|false|none|The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.|
|» type|string|false|none|The type of the transaction:<br>* `LODGEMENT` - Bank Transfer received<br>* `PIS_LODGEMENT` - Fire Open Payments Lodgement received<br>* `MANUAL_TRANSFER` - Manual Transfer to<br>* `WITHDRAWAL` - Bank Transfer sent<br>* `REVERSAL` - Credit Reversal<br>* `DIRECT_DEBIT` - A direct debit.<br>* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.<br>* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.<br>* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)<br>* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)<br>* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned<br>* `LODGEMENT_REVERSED` - Bank Transfer received returned<br>* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)<br>* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)<br>* `CREATE_CARD` - The fee taken when a debit card is issued.<br>* `ADD_ACCOUNT` - The fee taken when an account is created.<br>* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       <br>* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC<br>* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC<br>* `CARD_ECOMMERCE_DEBIT` - Card used on the internet<br>* `CARD_ECOMMERCE_CREDIT` - Card used on the internet<br>* `CARD_ATM_DEBIT` - Card used in an ATM<br>* `CARD_ATM_CREDIT` - Card used in an ATM<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency<br>* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed<br>* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed<br>* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>|
|» yourRef|string|false|none|The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» » type|FIRE_ACCOUNT|
|» » type|EXTERNAL_ACCOUNT|
|» » type|WITHDRAWAL_ACCOUNT|
|» » type|CARD_MERCHANT|
|» » type|CARD_ATM|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List transactions for an account (v3)

<a id="opIdgetTransactionsByIdv3"></a>

> Code samples

```bash
curl https://example.com/v3/accounts/0/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/accounts/{ican}/transactions`

Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.


<h3 id="list-transactions-for-an-account-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ican|path|integer(int64)|true|none|
|limit|query|integer(int64)|false|none|
|dateRangeFrom|query|integer(int64)|false|none|
|dateRangeTo|query|integer(int64)|false|none|
|startAfter|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "amountAfterCharges": 5000,
      "amountBeforeCharges": 5000,
      "balance": 8500,
      "batchItemDetails": {
        "batchItemPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "batchName": "Payroll 2022-11",
        "batchPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
        "jobNumber": "2018-01-PR"
      },
      "card": {
        "alias": "string",
        "cardId": 0,
        "embossBusinessName": "string",
        "embossCardName": "string",
        "expiryDate": "1970-01-01T00:00:00Z",
        "maskedPan": "string",
        "provider": "string"
      },
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "date": "2021-04-13T11:06:32.437Z",
      "dateAcknowledged": "2021-04-13T11:06:32.437Z",
      "directDebitDetails": {
        "directDebitReference": "VODA-ABC453-1",
        "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
        "mandateReference": "CRZ-102190123",
        "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
        "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
        "originatorAlias": "Three",
        "originatorLogoUrlLarge": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorLogoUrlSmall": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
        "originatorName": "Vodafone PLC",
        "originatorReference": "VODA-123456"
      },
      "eventUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
      "feeAmount": 0,
      "fxTradeDetails": {
        "buyAmount": 359,
        "buyCurrency": "GBP",
        "fixedSide": "SELL",
        "provider": "TCC",
        "rate4d": 7180,
        "sellAmount": 500,
        "sellCurrency": "EUR"
      },
      "ican": 1951,
      "myRef": "Transfer to main account",
      "paymentRequestPublicCode": "1abcdefg",
      "proprietarySchemeDetails": [
        {
          "data": "remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079",
          "type": "SCT"
        }
      ],
      "refId": 26774,
      "relatedParty": {
        "account": {
          "accountNumber": "11111111",
          "alias": "Main Account",
          "bic": "CPAYIE2D",
          "iban": "IE54CPAY99119911111111",
          "id": 42,
          "nsc": "232221"
        },
        "type": "FIRE_ACCOUNT"
      },
      "taxAmount": 0,
      "txnId": 30157,
      "type": "WITHDRAWAL",
      "yourRef": "From John Smith"
    }
  ],
  "links": [
    {
      "href": "The URL of the linked page",
      "rel": "self"
    }
  ]
}
```

<h3 id="list-transactions-for-an-account-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of transaction objects for the account with a count (`total`).|Inline|

<h3 id="list-transactions-for-an-account-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[object]|false|none|none|
|» amountAfterCharges|integer(int64)|false|none|Net amount lodged or taken from the account after fees and charges were applied.|
|» amountBeforeCharges|integer(int64)|false|none|Amount of the transaction before the fees and taxes were applied.|
|» balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|» batchItemDetails|object|false|none|Details of the batch run if this transaction was part of a batch.|
|» » batchItemPublicUuid|string|false|none|The UUID for this item in the batch.|
|» » batchName|string|false|none|The optional name given to the batch at creation time.|
|» » batchPublicUuid|string|false|none|The UUID for this batch.|
|» » jobNumber|string|false|none|The optional job number given to the batch to link it to your own system.|
|» card|object|false|none|Details of the card used (if applicable)|
|» » alias|string|false|none|none|
|» » cardId|integer(int64)|false|none|none|
|» » embossBusinessName|string|false|none|none|
|» » embossCardName|string|false|none|none|
|» » expiryDate|string(date-time)|false|none|none|
|» » maskedPan|string|false|none|none|
|» » provider|string|false|none|none|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» date|string(date-time)|false|none|Date of the transaction|
|» dateAcknowledged|string(date-time)|false|none|none|
|» directDebitDetails|object|false|none|Details of the direct debit (if applicable)|
|» » directDebitReference|string|false|none|The direct debit reference.|
|» » directDebitUuid|string|false|none|The UUID for the direct debit payment|
|» » mandateReference|string|false|none|the reference of the mandate|
|» » mandateUUid|string|false|none|The UUID for the mandate|
|» » mandateUuid|string|false|none|The UUID for the mandate|
|» » originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|» » originatorLogoUrlLarge|string|false|none|URL pointing to a large version of the Originator Logo (if available)|
|» » originatorLogoUrlSmall|string|false|none|URL pointing to a small version of the Originator Logo (if available)|
|» » originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» » originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» eventUuid|string|false|none|An internal Fire reference for the transaction (UUID)|
|» feeAmount|integer(int64)|false|none|The amount of the fee, if any.|
|» fxTradeDetails|object|false|none|Details of the FX trade (if applicable)|
|» » buyAmount|integer(int64)|false|none|amount of buyCurrency being bought|
|» » buyCurrency|string|false|none|currency which is being bought|
|» » fixedSide|string|false|none|type of trade - BUY or SELL|
|» » provider|string|false|none|The FX provider used to make the trade.|
|» » rate4d|integer(int64)|false|none|exchange rate|
|» » sellAmount|integer(int64)|false|none|amount of sellCurrency being sold|
|» » sellCurrency|string|false|none|currency which is being sold|
|» ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.|
|» myRef|string|false|none|The comment/reference on the transaction|
|» paymentRequestPublicCode|string|false|none|(FOP payments only) The FOP Payment Code that was used to make this payment.|
|» proprietarySchemeDetails|[object]|false|none|Extra details about the transaction based on the scheme used to make the payment.|
|» » data|string|false|none|the scheme proprietary data - key pairs separated by \| and key/values separated by ^|
|» » type|string|false|none|the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.|
|» refId|integer(int64)|false|none|The id of the transaction.|
|» relatedParty|object|false|none|Details of the related third party involved in the transaction.|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|the Account Number of the account.|
|» » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » id|integer(int64)|false|none|none|
|» » » nsc|string|false|none|the Sort Code of the account.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » account|object|false|none|none|
|» » » accountNumber|string|false|none|The account number of the Withdrawl account in reference|
|» » » alias|string|false|none|The Alias name of the Withdrawl account in reference|
|» » » bic|string|false|none|The BIC of the Withdrawl account in reference|
|» » » iban|string|false|none|The BIC of the Withdrawl account in reference|
|» » » id|integer(int64)|false|none|The ID number of the Withdrawl account in reference|
|» » » nsc|string|false|none|(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.|
|» » type|string|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » cardMerchant|object|false|none|none|
|» » » acquirerIdDe32|string|false|none|none|
|» » » additionalAmtDe54|string|false|none|none|
|» » » additionalDataDe124|string|false|none|none|
|» » » additionalDataDe48|string|false|none|none|
|» » » authCodeDe38|string|false|none|none|
|» » » authorisedByGps|string|false|none|none|
|» » » avsResult|string|false|none|none|
|» » » billAmt|integer(int64)|false|none|none|
|» » » billCcy|string|false|none|none|
|» » » expiryDate|string|false|none|none|
|» » » mccCode|string|false|none|none|
|» » » merchIdDe42|string|false|none|none|
|» » » merchNameDe43|string|false|none|none|
|» » » mtId|string|false|none|none|
|» » » posDataDe22|string|false|none|none|
|» » » posDataDe61|string|false|none|none|
|» » » posTermnlDe41|string|false|none|none|
|» » » procCode|string|false|none|none|
|» » » recordDataDe120|string|false|none|none|
|» » » respCodeDe39|string|false|none|none|
|» » » retRefNoDe37|string|false|none|none|
|» » » statusCode|string|false|none|none|
|» » » token|string|false|none|none|
|» » » txnAmt4d|integer(int64)|false|none|none|
|» » » txnCcy|string|false|none|none|
|» » » txnCtry|string|false|none|none|
|» » » txnDesc|string|false|none|none|
|» » » txnStatCode|string|false|none|none|
|» » » txnType|string|false|none|none|
|» » type|string|false|none|none|
|» taxAmount|integer(int64)|false|none|The amount of the tax, if any (e.g. Stamp duty for ATM transactions)|
|» txnId|integer(int64)|false|none|The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.|
|» type|string|false|none|The type of the transaction:<br>* `LODGEMENT` - Bank Transfer received<br>* `PIS_LODGEMENT` - Fire Open Payments Lodgement received<br>* `MANUAL_TRANSFER` - Manual Transfer to<br>* `WITHDRAWAL` - Bank Transfer sent<br>* `REVERSAL` - Credit Reversal<br>* `DIRECT_DEBIT` - A direct debit.<br>* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.<br>* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.<br>* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)<br>* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)<br>* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned<br>* `LODGEMENT_REVERSED` - Bank Transfer received returned<br>* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)<br>* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)<br>* `CREATE_CARD` - The fee taken when a debit card is issued.<br>* `ADD_ACCOUNT` - The fee taken when an account is created.<br>* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       <br>* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC<br>* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC<br>* `CARD_ECOMMERCE_DEBIT` - Card used on the internet<br>* `CARD_ECOMMERCE_CREDIT` - Card used on the internet<br>* `CARD_ATM_DEBIT` - Card used in an ATM<br>* `CARD_ATM_CREDIT` - Card used in an ATM<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency<br>* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed<br>* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed<br>* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>|
|» yourRef|string|false|none|The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals|
|links|[object]|false|none|none|
|» href|string|false|none|https://api.fire.com/business/v3/accounts/1/transactions?startAfter=eyJpY2F|
|» rel|string|false|none|The relationship of this link to the current object - self, next, prev page.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» » type|FIRE_ACCOUNT|
|» » type|EXTERNAL_ACCOUNT|
|» » type|WITHDRAWAL_ACCOUNT|
|» » type|CARD_MERCHANT|
|» » type|CARD_ATM|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-direct-debits">Direct Debits</h1>

The fire.com api allows businesses to automate direct debit payment actions on their fire.com business accounts.

You can retrieve details of your direct debit payments, direct debit mandates and also take actions on both your direct debit payments and mandates.


## Get all DD payments associated with a direct debit mandate

<a id="opIdgetDirectDebitsForMandateUuid"></a>

> Code samples

```bash
curl 'https://example.com/v1/directdebits?mandateUuid=1A07774B-1461-4595-BC4B-423B739712AF' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/directdebits`

Retrieve all direct debit payments associated with a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS


<h3 id="get-all-dd-payments-associated-with-a-direct-debit-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateUuid|query|string|true|The mandate UUID to retrieve|

> Example responses

> 200 Response

```json
{
  "directdebits": [
    {
      "amount": 100,
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "dateCreated": "2016-12-15T22:56:05.937Z",
      "directDebitReference": "VODA-ABC453-1",
      "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
      "isDDIC": false,
      "lastUpdated": "2016-12-15T22:56:05.937Z",
      "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
      "originatorAlias": "Three",
      "originatorName": "Vodafone PLC",
      "originatorReference": "VODA-123456",
      "schemeRejectReason": "eg. Instruction cancelled by payer",
      "schemeRejectReasonCode": "for BACS (ARUDD) 0|1|2|3|5|6|7|8|9|A|B",
      "status": "RECIEVED",
      "targetIcan": 42,
      "targetPayeeId": 12,
      "type": "FIRST_COLLECTION"
    }
  ],
  "total": 1
}
```

<h3 id="get-all-dd-payments-associated-with-a-direct-debit-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all direct debit payments associated with a direct debit mandate.|Inline|

<h3 id="get-all-dd-payments-associated-with-a-direct-debit-mandate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directdebits|[object]|false|none|none|
|» amount|integer(int64)|false|none|Value of the payment|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» dateCreated|string(date-time)|false|none|Date the direct debit was created. Milliseconds since the epoch (1970).|
|» directDebitReference|string|false|none|The direct debit reference.|
|» directDebitUuid|string|false|none|The UUID for the direct debit payment|
|» isDDIC|boolean|false|none|DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true.|
|» lastUpdated|string(date-time)|false|none|Date the direct debit was last updated. Milliseconds since the epoch (1970).|
|» mandateUUid|string|false|none|The UUID for the mandate|
|» originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|» originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» schemeRejectReason|string|false|none|Reason why rejected|
|» schemeRejectReasonCode|string|false|none|The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.|
|» status|string|false|none|The statuses of the direct debit payments associated with the mandate.<br>* 'RECIEVED' - Direct Debit has been recieved<br>* 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it<br>* 'REJECT_READY_FOR_PROCESSING' <br>* 'REJECT_RECORD_IN_PROGRESS'<br>* 'REJECT_RECORDED'<br>* 'REJECT_FILE_CREATED'<br>* 'REJECT_FILE_SENT'<br>* 'COLLECTED' - Direct debit collected<br>* 'REFUND_REQUESTED' - Refund requested on direct debit<br>* 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit<br>* 'REFUND_RECORDED'<br>* 'REFUND_FILE_CREATED'<br>* 'REFUND_FILE_SENT' <br>|
|» targetIcan|integer(int64)|false|none|The ican of your fire account that the money was taken from|
|» targetPayeeId|integer(int64)|false|none|The payee that was created when the DD was processed|
|» type|string|false|none|The type of the direct debit.|
|total|integer(int64)|false|none|Number of direct debits found|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» schemeRejectReasonCode|0|
|» schemeRejectReasonCode|1|
|» schemeRejectReasonCode|2|
|» schemeRejectReasonCode|3|
|» schemeRejectReasonCode|4|
|» schemeRejectReasonCode|5|
|» schemeRejectReasonCode|6|
|» schemeRejectReasonCode|7|
|» schemeRejectReasonCode|8|
|» schemeRejectReasonCode|9|
|» schemeRejectReasonCode|A|
|» schemeRejectReasonCode|B|
|» status|RECIEVED|
|» status|REJECT_REQUESTED|
|» status|REJECT_READY_FOR_PROCESSING|
|» status|REJECT_RECORD_IN_PROGRESS|
|» status|REJECT_RECORDED|
|» status|REJECT_FILE_CREATED|
|» status|REJECT_FILE_SENT|
|» status|COLLECTED|
|» status|REFUND_REQUESTED|
|» status|REFUND_RECORD_IN_PROGRESS|
|» status|REFUND_RECORDED|
|» status|REFUND_FILE_CREATED|
|» status|REFUND_FILE_SENT|
|» type|FIRST_COLLECTION|
|» type|ONGOING_COLLECTION|
|» type|REPRESENTED_COLLECTION|
|» type|FINAL_COLLECTION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the details of a direct debit

<a id="opIdgetDirectDebitByUuid"></a>

> Code samples

```bash
curl https://example.com/v1/directdebits/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/directdebits/{directDebitUuid}`

Retrieve all details of a single direct debit collection/payment, whether successful or not.
The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**


<h3 id="get-the-details-of-a-direct-debit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directDebitUuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 100,
  "currency": {
    "code": "EUR",
    "description": "Euro"
  },
  "dateCreated": "2016-12-15T22:56:05.937Z",
  "directDebitReference": "VODA-ABC453-1",
  "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
  "isDDIC": false,
  "lastUpdated": "2016-12-15T22:56:05.937Z",
  "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
  "originatorAlias": "Three",
  "originatorName": "Vodafone PLC",
  "originatorReference": "VODA-123456",
  "schemeRejectReason": "eg. Instruction cancelled by payer",
  "schemeRejectReasonCode": "for BACS (ARUDD) 0|1|2|3|5|6|7|8|9|A|B",
  "status": "RECIEVED",
  "targetIcan": 42,
  "targetPayeeId": 12,
  "type": "FIRST_COLLECTION"
}
```

<h3 id="get-the-details-of-a-direct-debit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all details of a single direct debit collection/payment|Inline|

<h3 id="get-the-details-of-a-direct-debit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|false|none|Value of the payment|
|currency|object|false|none|The currency.|
|» code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» description|string|false|none|The name of the currency|
|dateCreated|string(date-time)|false|none|Date the direct debit was created. Milliseconds since the epoch (1970).|
|directDebitReference|string|false|none|The direct debit reference.|
|directDebitUuid|string|false|none|The UUID for the direct debit payment|
|isDDIC|boolean|false|none|DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true.|
|lastUpdated|string(date-time)|false|none|Date the direct debit was last updated. Milliseconds since the epoch (1970).|
|mandateUUid|string|false|none|The UUID for the mandate|
|originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|originatorReference|string|false|none|Set by party who sets up the direct debit.|
|schemeRejectReason|string|false|none|Reason why rejected|
|schemeRejectReasonCode|string|false|none|The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.|
|status|string|false|none|The statuses of the direct debit payments associated with the mandate.<br>* 'RECIEVED' - Direct Debit has been recieved<br>* 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it<br>* 'REJECT_READY_FOR_PROCESSING' <br>* 'REJECT_RECORD_IN_PROGRESS'<br>* 'REJECT_RECORDED'<br>* 'REJECT_FILE_CREATED'<br>* 'REJECT_FILE_SENT'<br>* 'COLLECTED' - Direct debit collected<br>* 'REFUND_REQUESTED' - Refund requested on direct debit<br>* 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit<br>* 'REFUND_RECORDED'<br>* 'REFUND_FILE_CREATED'<br>* 'REFUND_FILE_SENT' <br>|
|targetIcan|integer(int64)|false|none|The ican of your fire account that the money was taken from|
|targetPayeeId|integer(int64)|false|none|The payee that was created when the DD was processed|
|type|string|false|none|The type of the direct debit.|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|EUR|
|» code|GBP|
|schemeRejectReasonCode|0|
|schemeRejectReasonCode|1|
|schemeRejectReasonCode|2|
|schemeRejectReasonCode|3|
|schemeRejectReasonCode|4|
|schemeRejectReasonCode|5|
|schemeRejectReasonCode|6|
|schemeRejectReasonCode|7|
|schemeRejectReasonCode|8|
|schemeRejectReasonCode|9|
|schemeRejectReasonCode|A|
|schemeRejectReasonCode|B|
|status|RECIEVED|
|status|REJECT_REQUESTED|
|status|REJECT_READY_FOR_PROCESSING|
|status|REJECT_RECORD_IN_PROGRESS|
|status|REJECT_RECORDED|
|status|REJECT_FILE_CREATED|
|status|REJECT_FILE_SENT|
|status|COLLECTED|
|status|REFUND_REQUESTED|
|status|REFUND_RECORD_IN_PROGRESS|
|status|REFUND_RECORDED|
|status|REFUND_FILE_CREATED|
|status|REFUND_FILE_SENT|
|type|FIRST_COLLECTION|
|type|ONGOING_COLLECTION|
|type|REPRESENTED_COLLECTION|
|type|FINAL_COLLECTION|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reject a direct debit payment

<a id="opIdrejectDirectDebit"></a>

> Code samples

```bash
curl https://example.com/v1/directdebits/4ADFB67A-0F5B-4A9A-9D74-34437250045C/reject \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/directdebits/{directDebitUuid}/reject`

This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT


<h3 id="reject-a-direct-debit-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directDebitUuid|path|string|true|none|

<h3 id="reject-a-direct-debit-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List all direct debit mandates

<a id="opIdgetDirectDebitMandates"></a>

> Code samples

```bash
curl https://example.com/v1/mandates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/mandates`

The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES


> Example responses

> 200 Response

```json
{
  "mandates": [
    {
      "alias": "Vodaphone",
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "dateCancelled": "2016-12-15T22:56:05.937Z",
      "dateCompleted": "2016-12-15T22:56:05.937Z",
      "dateCreated": "2016-12-15T22:56:05.937Z",
      "fireRejectionReason": "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS",
      "lastUpdated": "2016-12-15T22:56:05.937Z",
      "latestDirectDebitAmount": 2,
      "latestDirectDebitDate": "2016-12-15T22:56:05.937Z",
      "mandateReference": "CRZ-102190123",
      "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
      "numberOfDirectDebitCollected": 2,
      "originatorAlias": "Vodaphone PLC",
      "originatorLogoUrlLarge": "originatorLogoLarge",
      "originatorLogoUrlSmall": "originatorLogoSmall",
      "originatorName": "Vodafone PLC",
      "originatorReference": "VODA-123456",
      "schemeCancelReason": "e.g. Instruction cancelled by payer",
      "schemeCancelReasonCode": "For BACS (ADDACS) - 0|1|2|3|B|C|D|E|R",
      "status": "RECIEVED",
      "targetIcan": 1,
      "valueOfDirectDebitCollected": 2
    }
  ],
  "total": 1
}
```

<h3 id="list-all-direct-debit-mandates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all direct debit mandates.|Inline|

<h3 id="list-all-direct-debit-mandates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mandates|[object]|false|none|none|
|» alias|string|false|none|The name of the alias|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» dateCancelled|string(date-time)|false|none|Date the direct debit was canceled. Milliseconds since the epoch (1970).|
|» dateCompleted|string(date-time)|false|none|Date the direct debit was completed. Milliseconds since the epoch (1970).|
|» dateCreated|string(date-time)|false|none|Date the direct debit was created. Milliseconds since the epoch (1970).|
|» fireRejectionReason|string|false|none|Rejection reason if transaction is rejected|
|» lastUpdated|string(date-time)|false|none|Date the direct debit was last updated. Milliseconds since the epoch (1970).|
|» latestDirectDebitAmount|integer(int64)|false|none|The value of largest direct debit collected|
|» latestDirectDebitDate|string(date-time)|false|none|The date of latest direct debit collected|
|» mandateReference|string|false|none|the reference of the mandate|
|» mandateUuid|string|false|none|The UUID for the mandate|
|» numberOfDirectDebitCollected|integer(int64)|false|none|The number of direct debits collected|
|» originatorAlias|string|false|none|The name of the alias|
|» originatorLogoUrlLarge|string|false|none|Logo url from party who sets up the direct debit.|
|» originatorLogoUrlSmall|string|false|none|Logo url from party who sets up the direct debit.|
|» originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» schemeCancelReason|string|false|none|Reason for cancelation|
|» schemeCancelReasonCode|string|false|none|The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.|
|» status|string|false|none|The status of the mandate.<br>* 'CREATED'<br>* 'LIVE'<br>* 'REJECT_REQUESTED'<br>* 'REJECT_RECORD_IN_PROGRESS'<br>* 'REJECT_RECORDED'<br>* 'REJECT_FILE_CREATED'<br>* 'REJECT_FILE_SENT'<br>* 'CANCEL_REQUESTED'<br>* 'CANCEL_RECORD_IN_PROGRESS'<br>* 'CANCEL_RECORDED'<br>* 'CANCEL_FILE_CREATED'<br>* 'CANCEL_FILE_SENT'<br>* 'COMPLETE'<br>* 'DORMANT'<br>|
|» targetIcan|integer(int64)|false|none|Identifier for the fire.com account (assigned by fire.com)|
|» valueOfDirectDebitCollected|integer(int64)|false|none|The value of direct debits collected|
|total|integer(int64)|false|none|Number of direct debits found|

#### Enumerated Values

|Property|Value|
|---|---|
|» » code|EUR|
|» » code|GBP|
|» fireRejectionReason|ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS|
|» fireRejectionReason|DDIC|
|» fireRejectionReason|ACCOUNT_NOT_FOUND|
|» fireRejectionReason|ACCOUNT_NOT_LIVE|
|» fireRejectionReason|CUSTOMER_NOT_FOUND|
|» fireRejectionReason|BUSINESS_NOT_LIVE|
|» fireRejectionReason|BUSINESS_NOT_FULL|
|» fireRejectionReason|PERSONAL_USER_NOT_LIVE|
|» fireRejectionReason|PERSONAL_USER_NOT_FULL|
|» fireRejectionReason|MANDATE_ALREADY_EXISTS|
|» fireRejectionReason|MANDATE_WITH_DIFERENT_ACCOUNT|
|» fireRejectionReason|NULL_MANDATE_REFERENCE|
|» fireRejectionReason|INVALID_ACCOUNT_CURRENCY|
|» fireRejectionReason|INVALID_MANDATE_REFERENCE|
|» fireRejectionReason|REQUESTED_BY_CUSTOMER_VIA_SUPPORT|
|» fireRejectionReason|CUSTOMER_ACCOUNT_CLOSED|
|» fireRejectionReason|CUSTOMER_DECEASED|
|» fireRejectionReason|ACCOUNT_TRANSFERRED|
|» fireRejectionReason|MANDATE_NOT_FOUND|
|» fireRejectionReason|ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT|
|» fireRejectionReason|INVALID_ACCOUNT_TYPE|
|» fireRejectionReason|MANDATE_EXPIRED|
|» fireRejectionReason|MANDATE_CANCELLED|
|» fireRejectionReason|REQUESTED_BY_CUSTOMER|
|» status|CREATED|
|» status|LIVE|
|» status|REJECT_REQUESTED|
|» status|REJECT_RECORD_IN_PROGRESS|
|» status|REJECT_RECORDED|
|» status|REJECT_FILE_CREATED|
|» status|REJECT_FILE_SENT|
|» status|CANCEL_REQUESTED|
|» status|CANCEL_RECORD_IN_PROGRESS|
|» status|CANCEL_RECORDED|
|» status|CANCEL_FILE_CREATED|
|» status|CANCEL_FILE_SENT|
|» status|COMPLETE|
|» status|DORMANT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get direct debit mandate details

<a id="opIdgetMandate"></a>

> Code samples

```bash
curl https://example.com/v1/mandates/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/mandates/{mandateUuid}`

Retrieve all details for a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE


<h3 id="get-direct-debit-mandate-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateUuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "alias": "Vodaphone",
  "currency": {
    "code": "EUR",
    "description": "Euro"
  },
  "dateCancelled": "2016-12-15T22:56:05.937Z",
  "dateCompleted": "2016-12-15T22:56:05.937Z",
  "dateCreated": "2016-12-15T22:56:05.937Z",
  "fireRejectionReason": "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS",
  "lastUpdated": "2016-12-15T22:56:05.937Z",
  "latestDirectDebitAmount": 2,
  "latestDirectDebitDate": "2016-12-15T22:56:05.937Z",
  "mandateReference": "CRZ-102190123",
  "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
  "numberOfDirectDebitCollected": 2,
  "originatorAlias": "Vodaphone PLC",
  "originatorLogoUrlLarge": "originatorLogoLarge",
  "originatorLogoUrlSmall": "originatorLogoSmall",
  "originatorName": "Vodafone PLC",
  "originatorReference": "VODA-123456",
  "schemeCancelReason": "e.g. Instruction cancelled by payer",
  "schemeCancelReasonCode": "For BACS (ADDACS) - 0|1|2|3|B|C|D|E|R",
  "status": "RECIEVED",
  "targetIcan": 1,
  "valueOfDirectDebitCollected": 2
}
```

<h3 id="get-direct-debit-mandate-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all details for a direct debit mandate.|Inline|

<h3 id="get-direct-debit-mandate-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|The name of the alias|
|currency|object|false|none|The currency.|
|» code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» description|string|false|none|The name of the currency|
|dateCancelled|string(date-time)|false|none|Date the direct debit was canceled. Milliseconds since the epoch (1970).|
|dateCompleted|string(date-time)|false|none|Date the direct debit was completed. Milliseconds since the epoch (1970).|
|dateCreated|string(date-time)|false|none|Date the direct debit was created. Milliseconds since the epoch (1970).|
|fireRejectionReason|string|false|none|Rejection reason if transaction is rejected|
|lastUpdated|string(date-time)|false|none|Date the direct debit was last updated. Milliseconds since the epoch (1970).|
|latestDirectDebitAmount|integer(int64)|false|none|The value of largest direct debit collected|
|latestDirectDebitDate|string(date-time)|false|none|The date of latest direct debit collected|
|mandateReference|string|false|none|the reference of the mandate|
|mandateUuid|string|false|none|The UUID for the mandate|
|numberOfDirectDebitCollected|integer(int64)|false|none|The number of direct debits collected|
|originatorAlias|string|false|none|The name of the alias|
|originatorLogoUrlLarge|string|false|none|Logo url from party who sets up the direct debit.|
|originatorLogoUrlSmall|string|false|none|Logo url from party who sets up the direct debit.|
|originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|originatorReference|string|false|none|Set by party who sets up the direct debit.|
|schemeCancelReason|string|false|none|Reason for cancelation|
|schemeCancelReasonCode|string|false|none|The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.|
|status|string|false|none|The status of the mandate.<br>* 'CREATED'<br>* 'LIVE'<br>* 'REJECT_REQUESTED'<br>* 'REJECT_RECORD_IN_PROGRESS'<br>* 'REJECT_RECORDED'<br>* 'REJECT_FILE_CREATED'<br>* 'REJECT_FILE_SENT'<br>* 'CANCEL_REQUESTED'<br>* 'CANCEL_RECORD_IN_PROGRESS'<br>* 'CANCEL_RECORDED'<br>* 'CANCEL_FILE_CREATED'<br>* 'CANCEL_FILE_SENT'<br>* 'COMPLETE'<br>* 'DORMANT'<br>|
|targetIcan|integer(int64)|false|none|Identifier for the fire.com account (assigned by fire.com)|
|valueOfDirectDebitCollected|integer(int64)|false|none|The value of direct debits collected|

#### Enumerated Values

|Property|Value|
|---|---|
|» code|EUR|
|» code|GBP|
|fireRejectionReason|ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS|
|fireRejectionReason|DDIC|
|fireRejectionReason|ACCOUNT_NOT_FOUND|
|fireRejectionReason|ACCOUNT_NOT_LIVE|
|fireRejectionReason|CUSTOMER_NOT_FOUND|
|fireRejectionReason|BUSINESS_NOT_LIVE|
|fireRejectionReason|BUSINESS_NOT_FULL|
|fireRejectionReason|PERSONAL_USER_NOT_LIVE|
|fireRejectionReason|PERSONAL_USER_NOT_FULL|
|fireRejectionReason|MANDATE_ALREADY_EXISTS|
|fireRejectionReason|MANDATE_WITH_DIFERENT_ACCOUNT|
|fireRejectionReason|NULL_MANDATE_REFERENCE|
|fireRejectionReason|INVALID_ACCOUNT_CURRENCY|
|fireRejectionReason|INVALID_MANDATE_REFERENCE|
|fireRejectionReason|REQUESTED_BY_CUSTOMER_VIA_SUPPORT|
|fireRejectionReason|CUSTOMER_ACCOUNT_CLOSED|
|fireRejectionReason|CUSTOMER_DECEASED|
|fireRejectionReason|ACCOUNT_TRANSFERRED|
|fireRejectionReason|MANDATE_NOT_FOUND|
|fireRejectionReason|ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT|
|fireRejectionReason|INVALID_ACCOUNT_TYPE|
|fireRejectionReason|MANDATE_EXPIRED|
|fireRejectionReason|MANDATE_CANCELLED|
|fireRejectionReason|REQUESTED_BY_CUSTOMER|
|status|CREATED|
|status|LIVE|
|status|REJECT_REQUESTED|
|status|REJECT_RECORD_IN_PROGRESS|
|status|REJECT_RECORDED|
|status|REJECT_FILE_CREATED|
|status|REJECT_FILE_SENT|
|status|CANCEL_REQUESTED|
|status|CANCEL_RECORD_IN_PROGRESS|
|status|CANCEL_RECORDED|
|status|CANCEL_FILE_CREATED|
|status|CANCEL_FILE_SENT|
|status|COMPLETE|
|status|DORMANT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a direct debit mandate alias

<a id="opIdupdateMandateAlias"></a>

> Code samples

```bash
curl https://example.com/v1/mandates/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/mandates/{mandateUuid}`

Update Direct Debit Mandate Alias
The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE


<h3 id="update-a-direct-debit-mandate-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateUuid|path|string|true|none|

<h3 id="update-a-direct-debit-mandate-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Activate a direct debit mandate

<a id="opIdactivateMandate"></a>

> Code samples

```bash
curl https://example.com/v1/mandates/4ADFB67A-0F5B-4A9A-9D74-34437250045C/activate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/mandates/{mandateUuid}/activate`

This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE


<h3 id="activate-a-direct-debit-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateUuid|path|string|true|none|

<h3 id="activate-a-direct-debit-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a direct debit mandate

<a id="opIdcancelMandateByUuid"></a>

> Code samples

```bash
curl https://example.com/v1/mandates/4ADFB67A-0F5B-4A9A-9D74-34437250045C/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/mandates/{mandateUuid}/cancel`

This endpoint allows you to cancel a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL


<h3 id="cancel-a-direct-debit-mandate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mandateUuid|path|string|true|none|

<h3 id="cancel-a-direct-debit-mandate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|204 no content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-payment-batches">Payment Batches</h1>

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.


## List batches

<a id="opIdgetBatches"></a>

> Code samples

```bash
curl https://example.com/v1/batches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batches`

Returns the list of batch with the specified types and statuses.


<h3 id="list-batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchStatus|query|string|false|none|
|batchTypes|query|string|false|none|
|orderBy|query|string|false|none|
|order|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|batchStatus|SUBMITTED|
|batchStatus|REMOVED|
|batchStatus|SUCCEEDED|
|batchStatus|FAILED|
|batchTypes|INTERNAL_TRANSFER|
|batchTypes|BANK_TRANSFER|
|batchTypes|NEW_PAYEE|
|orderBy|DATE|
|order|DESC|
|order|ASC|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "amount": 10000,
      "amountAfterCharges": 10000,
      "batchItemUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
      "dateCreated": "2021-04-04T10:48:53.540Z",
      "feeAmount": 0,
      "icanFrom": 2150,
      "icanTo": 1002,
      "lastUpdated": "2021-04-04T10:48:53.540Z",
      "ref": "Testing a transfer via batch",
      "refId": 123782,
      "result": {
        "code": 500001,
        "message": "SUCCESS"
      },
      "status": "SUCCEEDED",
      "taxAmount": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List all batches.|Inline|

<h3 id="list-batches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» amount|integer(int64)|false|none|The amount of funds to send. In cent or pence|
|» amountAfterCharges|integer(int64)|false|none|The amount of the transfer after fees and taxes. in pence or cent.|
|» batchItemUuid|string|false|none|A UUID for this item.|
|» dateCreated|string(date-time)|false|none|The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z|
|» feeAmount|integer(int64)|false|none|The fee charged by fire.com for the payment. In pence or cent.|
|» icanFrom|integer(int64)|false|none|The Fire account ID of the source account.|
|» icanTo|integer(int64)|false|none|The Fire account ID for the fire.com account the funds are sent to.|
|» lastUpdated|string(date-time)|false|none|The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z|
|» ref|string|false|none|The reference on the transaction.|
|» refId|integer(int64)|false|none|The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.|
|» result|object|false|none|The outcome of the attempted transaction.|
|» » code|integer(int64)|false|none|none|
|» » message|string|false|none|none|
|» status|string|false|none|status of the batch if internal trasnfer|
|» taxAmount|integer(int64)|false|none|Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.|
|total|integer(int64)|false|none|total number of batches returned|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|SUBMITTED|
|» status|REMOVED|
|» status|SUCCEEDED|
|» status|FAILED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new batch of payments

<a id="opIdcreateBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "batchName": "January 2018 Payroll",
    "callbackUrl": "https://my.webserver.com/cb/payroll",
    "currency": "EUR",
    "jobNumber": "2022-01-PR",
    "type": "BANK_TRANSFER"
  }'
```

`POST /v1/batches`

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.

This is the first step in creating a batch payment.


> Body parameter

```json
{
  "batchName": "January 2018 Payroll",
  "callbackUrl": "https://my.webserver.com/cb/payroll",
  "currency": "EUR",
  "jobNumber": "2022-01-PR",
  "type": "BANK_TRANSFER"
}
```

<h3 id="create-a-new-batch-of-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of the batch payment|
|» batchName|body|string|false|An optional name you give to the batch at creation time.|
|» callbackUrl|body|string|false|An optional POST URL that all events for this batch will be sent to.|
|» currency|body|string|false|GBP or EUR|
|» jobNumber|body|string|false|An optional job number you can give to the batch to help link it to your own system.|
|» type|body|string|false|The type of the batch - can be one of the listed 3|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|BANK_TRANSFER|
|» type|INTERNAL_TRANSFER|

> Example responses

> 200 Response

```json
{
  "batchUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019"
}
```

<h3 id="create-a-new-batch-of-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch created successfully|Inline|

<h3 id="create-a-new-batch-of-payments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchUuid|string|false|none|A UUID for this item.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get details of a single Batch

<a id="opIdgetDetailsSingleBatch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batches/{batchUuid}`

Returns the details of the batch specified in the API endpoint - {batchUuid}.

<h3 id="get-details-of-a-single-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "batchName": "January 2018 Payroll",
  "batchUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
  "callbackUrl": "https://my.webserver.com/cb/payroll",
  "currency": "EUR",
  "dateCreated": "2021-04-04T10:48:53.540Z",
  "jobNumber": "2018-01-PR",
  "lastUpdated": "2021-04-04T10:48:53.540Z",
  "numberOfItemsFailed": 0,
  "numberOfItemsSubmitted": 1,
  "numberOfItemsSucceeded": 1,
  "sourceName": "Payment API",
  "status": "COMPLETE",
  "type": "INTERNAL_TRANSFER",
  "valueOfItemsFailed": 0,
  "valueOfItemsSubmitted": 10000,
  "valueOfItemsSucceeded": 10000
}
```

<h3 id="get-details-of-a-single-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the details of the batch specified in the API endpoint - {batchUuid}.|Inline|

<h3 id="get-details-of-a-single-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchName|string|false|none|An optional name you give to the batch at creation time|
|batchUuid|string|false|none|A UUID for this item.|
|callbackUrl|string|false|none|An optional POST URL that all events for this batch will be sent to.|
|currency|string|false|none|All payments in the batch must be the same currency - either EUR or GBP|
|dateCreated|string(date-time)|false|none|The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z|
|jobNumber|string|false|none|An optional job number you can give to the batch to help link it to your own system.|
|lastUpdated|string(date-time)|false|none|The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z|
|numberOfItemsFailed|integer(int64)|false|none|Once processed, a count of the number of items that didn’t process successfully.|
|numberOfItemsSubmitted|integer(int64)|false|none|A count of the number of items in the batch|
|numberOfItemsSucceeded|integer(int64)|false|none|Once processed, a count of the number of items that processed successfully.|
|sourceName|string|false|none|A string describing where the batch originated - for instance the name of the API token that was used, or showing that the batch was automatically created by fire.com (in the case of a new payee batch).|
|status|string|false|none|status of the batch object|
|type|string|false|none|The type of the batch - can be one of the listed 3|
|valueOfItemsFailed|integer(int64)|false|none|Once processed, a sum of the value of items that didn’t process successfully. Specified in pence or cent.|
|valueOfItemsSubmitted|integer(int64)|false|none|A sum of the value of items in the batch. Specified in pence or cent.|
|valueOfItemsSucceeded|integer(int64)|false|none|Once processed, a sum of the value of items that processed successfully. Specified in pence or cent.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING_APPROVAL|
|status|REJECTED|
|status|COMPLETE|
|status|OPEN|
|status|CANCELLED|
|status|PENDING_PARENT_BATCH_APPROVAL|
|status|READY_FOR_PROCESSING|
|status|PROCESSING|
|type|INTERNAL_TRANSFER|
|type|BANK_TRANSFER|
|type|NEW_PAYEE|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Submit a batch for approval

<a id="opIdsubmitBatch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/batches/{batchUuid}`

Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.

You can only submit a batch while it is in the OPEN state.


<h3 id="submit-a-batch-for-approval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|

<h3 id="submit-a-batch-for-approval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body is returned - a HTTP 204 No Content response signifies the call was successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a batch

<a id="opIdcancelBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/batches/{batchUuid}`

Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).

<h3 id="cancel-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|

<h3 id="cancel-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch payment deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Approvers for a Batch

<a id="opIdgetListofApproversForBatch"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/approvals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batches/{batchUuid}/approvals`

Returns a list of approvers for this batch.

<h3 id="list-approvers-for-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "approvals": [
    {
      "emailAddress": "jane.doe@example.com",
      "firstName": "Jane",
      "lastName": "Doe",
      "lastUpdated": "2021-04-04T10:48:53.540Z",
      "mobileNumber": 353871234567,
      "status": "PENDING_APPROVAL",
      "userId": 3138
    }
  ]
}
```

<h3 id="list-approvers-for-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of approvers for this batch.|Inline|

<h3 id="list-approvers-for-a-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvals|[object]|false|none|none|
|» emailAddress|string|false|none|User email address|
|» firstName|string|false|none|none|
|» lastName|string|false|none|none|
|» lastUpdated|string(date-time)|false|none|The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z|
|» mobileNumber|string|false|none|none|
|» status|string|false|none|none|
|» userId|integer(int64)|false|none|User id assigned by fire.com|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List items in a Batch

<a id="opIdgetItemsBatchBankTransfer"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/banktransfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batches/{batchUuid}/banktransfers`

Returns a paginated list of items in the specified batch.

<h3 id="list-items-in-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|offset|query|integer(int64)|false|none|
|limit|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "amount": 10000,
      "amountAfterCharges": 10000,
      "batchItemUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
      "dateCreated": "2021-04-04T10:48:53.540Z",
      "feeAmount": 0,
      "icanFrom": 2150,
      "icanTo": 1002,
      "lastUpdated": "2021-04-04T10:48:53.540Z",
      "ref": "Testing a transfer via batch",
      "refId": 123782,
      "result": {
        "code": 500001,
        "message": "SUCCESS"
      },
      "status": "SUCCEEDED",
      "taxAmount": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-items-in-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A fire.com list object of Batch Items (Internal transfers or Bank transfers).|Inline|

<h3 id="list-items-in-a-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» amount|integer(int64)|false|none|The amount of funds to send. In cent or pence|
|» amountAfterCharges|integer(int64)|false|none|The amount of the transfer after fees and taxes. in pence or cent.|
|» batchItemUuid|string|false|none|A UUID for this item.|
|» dateCreated|string(date-time)|false|none|The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z|
|» feeAmount|integer(int64)|false|none|The fee charged by fire.com for the payment. In pence or cent.|
|» icanFrom|integer(int64)|false|none|The Fire account ID of the source account.|
|» icanTo|integer(int64)|false|none|The Fire account ID for the fire.com account the funds are sent to.|
|» lastUpdated|string(date-time)|false|none|The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z|
|» ref|string|false|none|The reference on the transaction.|
|» refId|integer(int64)|false|none|The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.|
|» result|object|false|none|The outcome of the attempted transaction.|
|» » code|integer(int64)|false|none|none|
|» » message|string|false|none|none|
|» status|string|false|none|status of the batch if internal trasnfer|
|» taxAmount|integer(int64)|false|none|Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.|
|total|integer(int64)|false|none|total number of batches returned|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|SUBMITTED|
|» status|REMOVED|
|» status|SUCCEEDED|
|» status|FAILED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add a bank transfer payment to the batch.

<a id="opIdaddBankTransferBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/banktransfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 500,
    "destAccountHolderName": "John Smith",
    "destAccountNumber": "12345678",
    "destIban": "IE00AIBK93123412341234",
    "destNsc": "123456",
    "icanFrom": 2001,
    "myRef": "Payment to John Smith for Consultancy in device.",
    "payeeType": "ACCOUNT_DETAILS",
    "yourRef": "ACME LTD - INV 23434"
  }'
```

`POST /v1/batches/{batchUuid}/banktransfers`

There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).

**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.

**Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.


> Body parameter

```json
{
  "amount": 500,
  "destAccountHolderName": "John Smith",
  "destAccountNumber": "12345678",
  "destIban": "IE00AIBK93123412341234",
  "destNsc": "123456",
  "icanFrom": 2001,
  "myRef": "Payment to John Smith for Consultancy in device.",
  "payeeType": "ACCOUNT_DETAILS",
  "yourRef": "ACME LTD - INV 23434"
}
```

<h3 id="add-a-bank-transfer-payment-to-the-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|body|body|object|true|Details of **Mode 1** & **Mode 2**.|
|» *oneOf*|body|object|false|none|
|» amount|body|integer(int64)|false|The value of the transaction|
|» destAccountHolderName|body|string|false|The destination account holder name|
|» destAccountNumber|body|string|false|The destination Account Number if a GBP bank transfer|
|» destIban|body|string|false|The destination IBAN if a Euro Bank transfer|
|» destNsc|body|string|false|The destination Nsc if a GBP bank transfer|
|» icanFrom|body|integer(int64)|false|The Fire account ID for the fire.com account the funds are taken from.|
|» myRef|body|string|false|The reference on the transaction for your records - not shown to the beneficiary.|
|» payeeType|body|string|false|Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate.|
|» yourRef|body|string|false|The reference on the transaction - displayed on the beneficiary bank statement.|
|» *oneOf*|body|object|false|none|
|» amount|body|integer(int64)|false|The value of the transaction|
|» icanFrom|body|integer(int64)|false|The Fire account ID for the fire.com account the funds are taken from.|
|» myRef|body|string|false|The reference on the transaction for your records - not shown to the beneficiary.|
|» payeeId|body|integer(int64)|false|The ID of the existing or automatically created payee|
|» payeeType|body|string|false|Use PAYEE_ID if you are paying existing approved payees (Mode 1).|
|» yourRef|body|string|false|The reference on the transaction - displayed on the beneficiary bank statement.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payeeType|ACCOUNT_DETAILS|
|» payeeType|PAYEE_ID|

> Example responses

> 200 Response

```json
{
  "batchItemUuid": "fba4a76a-ce51-4fc1-b562-98ec01299e4d"
}
```

<h3 id="add-a-bank-transfer-payment-to-the-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.|Inline|

<h3 id="add-a-bank-transfer-payment-to-the-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchItemUuid|string|false|none|A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a Payment from the Batch (Bank Transfers)

<a id="opIddeleteBankTransferBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/banktransfers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/batches/{batchUuid}/banktransfers/{itemUuid}`

Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

<h3 id="remove-a-payment-from-the-batch-bank-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|itemUuid|path|string|true|none|

<h3 id="remove-a-payment-from-the-batch-bank-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch payment deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List items in a Batch

<a id="opIdgetItemsBatchInternalTrasnfer"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/internaltransfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batches/{batchUuid}/internaltransfers`

Returns a paginated list of items in the specified batch.

<h3 id="list-items-in-a-batch-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|offset|query|integer(int64)|false|none|
|limit|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "amount": 10000,
      "amountAfterCharges": 10000,
      "batchItemUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
      "dateCreated": "2021-04-04T10:48:53.540Z",
      "feeAmount": 0,
      "icanFrom": 2150,
      "icanTo": 1002,
      "lastUpdated": "2021-04-04T10:48:53.540Z",
      "ref": "Testing a transfer via batch",
      "refId": 123782,
      "result": {
        "code": 500001,
        "message": "SUCCESS"
      },
      "status": "SUCCEEDED",
      "taxAmount": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-items-in-a-batch-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A fire.com list object of Batch Items (Internal transfers or Bank transfers).|Inline|

<h3 id="list-items-in-a-batch-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» amount|integer(int64)|false|none|The amount of funds to send. In cent or pence|
|» amountAfterCharges|integer(int64)|false|none|The amount of the transfer after fees and taxes. in pence or cent.|
|» batchItemUuid|string|false|none|A UUID for this item.|
|» dateCreated|string(date-time)|false|none|The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z|
|» feeAmount|integer(int64)|false|none|The fee charged by fire.com for the payment. In pence or cent.|
|» icanFrom|integer(int64)|false|none|The Fire account ID of the source account.|
|» icanTo|integer(int64)|false|none|The Fire account ID for the fire.com account the funds are sent to.|
|» lastUpdated|string(date-time)|false|none|The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z|
|» ref|string|false|none|The reference on the transaction.|
|» refId|integer(int64)|false|none|The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.|
|» result|object|false|none|The outcome of the attempted transaction.|
|» » code|integer(int64)|false|none|none|
|» » message|string|false|none|none|
|» status|string|false|none|status of the batch if internal trasnfer|
|» taxAmount|integer(int64)|false|none|Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.|
|total|integer(int64)|false|none|total number of batches returned|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|SUBMITTED|
|» status|REMOVED|
|» status|SUCCEEDED|
|» status|FAILED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add an internal transfer payment to the batch

<a id="opIdaddInternalTransferBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/internaltransfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 10000,
    "icanFrom": 2001,
    "icanTo": 3221,
    "ref": "Moving funds to Operating Account"
  }'
```

`POST /v1/batches/{batchUuid}/internaltransfers`

Simply specify the source account, destination account, amount and a reference.

> Body parameter

```json
{
  "amount": 10000,
  "icanFrom": 2001,
  "icanTo": 3221,
  "ref": "Moving funds to Operating Account"
}
```

<h3 id="add-an-internal-transfer-payment-to-the-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|body|body|object|true|Details of the source account, destination account, amount and a reference.|
|» amount|body|integer(int64)|false|amount of funds to be transfered|
|» icanFrom|body|integer(int64)|false|The account ID for the fire.com account the funds are taken from|
|» icanTo|body|integer(int64)|false|The account ID for the fire.com account the funds are directed to|
|» ref|body|string|false|The reference on the transaction|

> Example responses

> 200 Response

```json
{
  "batchItemUuid": "fba4a76a-ce51-4fc1-b562-98ec01299e4d"
}
```

<h3 id="add-an-internal-transfer-payment-to-the-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch payment added successfully. Note* Please use batchUuid when submitting a batch, not batchItemUuid.|Inline|

<h3 id="add-an-internal-transfer-payment-to-the-batch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchItemUuid|string|false|none|A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a Payment from the Batch (Internal Transfer)

<a id="opIddeleteInternalTransferBatchPayment"></a>

> Code samples

```bash
curl https://example.com/v1/batches/4ADFB67A-0F5B-4A9A-9D74-34437250045C/internaltransfers/4ADFB67A-0F5B-4A9A-9D74-34437250045C \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/batches/{batchUuid}/internaltransfers/{itemUuid}`

Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

<h3 id="remove-a-payment-from-the-batch-internal-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUuid|path|string|true|none|
|itemUuid|path|string|true|none|

<h3 id="remove-a-payment-from-the-batch-internal-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch payment deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-cards">Cards</h1>

## View List of Cards.

<a id="opIdgetListofCards"></a>

> Code samples

```bash
curl https://example.com/v1/cards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/cards`

Returns a list of cards related to your fire.com account.

> Example responses

> 200 Response

```json
{
  "cards": [
    {
      "blocked": false,
      "cardId": 51,
      "dateCreated": "2017-01-19T16:38:15.803Z",
      "emailAddress": "user@example.com",
      "eurIcan": 2150,
      "expiryDate": "2019-01-31T00:00:00.000Z",
      "firstName": "John",
      "gbpIcan": 2152,
      "lastName": "Doe",
      "maskedPan": "537455******1111",
      "provider": "MASTERCARD",
      "status": "LIVE",
      "statusReason": "LOST_CARD",
      "userId": 3138
    }
  ]
}
```

<h3 id="view-list-of-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|Access Token is Invalid or missing|None|
|403|Forbidden|Access Token is Invalid or missing|None|

<h3 id="view-list-of-cards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cards|[object]|false|none|none|
|» blocked|boolean|false|none|Whether the card is blocked or not|
|» cardId|integer(int64)|false|none|card id assigned by fire.com|
|» dateCreated|string(date-time)|false|none|The date-time the card was created|
|» emailAddress|string|false|none|card user email address|
|» eurIcan|integer(int64)|false|none|identifier for the eur fire.com account (assigned by fire.com)|
|» expiryDate|string(date-time)|false|none|card expiry date|
|» firstName|string|false|none|card user first name|
|» gbpIcan|integer(int64)|false|none|identifier for the gbp fire.com account (assigned by fire.com)|
|» lastName|string|false|none|card user last name|
|» maskedPan|string|false|none|card number (masked)|
|» provider|string|false|none|card provider|
|» status|string|false|none|card status|
|» statusReason|string|false|none|reason for card status|
|» userId|integer(int64)|false|none|card user id assigned by fire.com|

#### Enumerated Values

|Property|Value|
|---|---|
|» provider|MASTERCARD|
|» status|LIVE|
|» status|CREATED_ACTIVE|
|» status|CREATED_INACTIVE|
|» status|DEACTIVATED|
|» statusReason|LOST_CARD|
|» statusReason|STOLEN_CARD|
|» statusReason|CARD_DESTROYED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new debit card.

<a id="opIdcreateNewCard"></a>

> Code samples

```bash
curl https://example.com/v1/cards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceptFeesAndCharges": true,
    "addressType": "BUSINESS",
    "cardPin": 5345,
    "eurIcan": 2150,
    "gbpIcan": 2152,
    "userId": 3245
  }'
```

`POST /v1/cards`

You can create multiple debit cards which can be linked to your fire.com accounts.

> Body parameter

```json
{
  "acceptFeesAndCharges": true,
  "addressType": "BUSINESS",
  "cardPin": 5345,
  "eurIcan": 2150,
  "gbpIcan": 2152,
  "userId": 3245
}
```

<h3 id="create-a-new-debit-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of the new card|
|» acceptFeesAndCharges|body|boolean|false|none|
|» addressType|body|string|false|none|
|» cardPin|body|string|false|none|
|» eurIcan|body|integer(int64)|false|none|
|» gbpIcan|body|integer(int64)|false|none|
|» userId|body|integer(int64)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» addressType|HOME|
|» addressType|BUSINESS|

> Example responses

> 200 Response

```json
{
  "cardId": 51,
  "expiryDate": "2019-01-31T00:00:00.000Z",
  "maskedPan": "537455******1111",
  "status": "CREATED_ACTIVE"
}
```

<h3 id="create-a-new-debit-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card created successfully|Inline|

<h3 id="create-a-new-debit-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardId|integer(int64)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|maskedPan|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED_ACTIVE|
|status|CREATED_INACTIVE|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Block a card

<a id="opIdblockCard"></a>

> Code samples

```bash
curl https://example.com/v1/cards/0/block \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/cards/{cardId}/block`

Updates status of an existing card to block which prevents any transactions being carried out with that card.

<h3 id="block-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|none|

<h3 id="block-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body is returned - “Status 204 No Content” signifies the call was successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Card Transactions.

<a id="opIdgetListofCardTransactions"></a>

> Code samples

```bash
curl https://example.com/v1/cards/0/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/cards/{cardId}/transactions`

Returns a list of cards transactions related to your fire.com card.

<h3 id="list-card-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|none|
|limit|query|integer(int64)|false|none|
|offset|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "dateRangeTo": 1547744156603,
    "total": 1,
    "transactions": [
      {
        "amountAfterCharges": 5000,
        "amountBeforeCharges": 5000,
        "balance": 8500,
        "batchItemDetails": {
          "batchItemPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
          "batchName": "Payroll 2022-11",
          "batchPublicUuid": "F2AF3F2B-4406-4199-B249-B354F2CC6019",
          "jobNumber": "2018-01-PR"
        },
        "card": {
          "alias": "string",
          "cardId": 0,
          "embossBusinessName": "string",
          "embossCardName": "string",
          "expiryDate": "1970-01-01T00:00:00Z",
          "maskedPan": "string",
          "provider": "string"
        },
        "currency": {
          "code": "EUR",
          "description": "Euro"
        },
        "date": "2021-04-13T11:06:32.437Z",
        "dateAcknowledged": "2021-04-13T11:06:32.437Z",
        "directDebitDetails": {
          "directDebitReference": "VODA-ABC453-1",
          "directDebitUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
          "mandateReference": "CRZ-102190123",
          "mandateUUid": "f171b143-e3eb-47de-85a6-1c1f1108c701",
          "mandateUuid": "28d627c3-1889-44c8-ae59-6f6b20239260",
          "originatorAlias": "Three",
          "originatorLogoUrlLarge": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
          "originatorLogoUrlSmall": "https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png",
          "originatorName": "Vodafone PLC",
          "originatorReference": "VODA-123456"
        },
        "eventUuid": "42de0705-e3f1-44fa-8c41-79973eb80eb2",
        "feeAmount": 0,
        "fxTradeDetails": {
          "buyAmount": 359,
          "buyCurrency": "GBP",
          "fixedSide": "SELL",
          "provider": "TCC",
          "rate4d": 7180,
          "sellAmount": 500,
          "sellCurrency": "EUR"
        },
        "ican": 1951,
        "myRef": "Transfer to main account",
        "paymentRequestPublicCode": "1abcdefg",
        "proprietarySchemeDetails": [
          {
            "data": "remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079",
            "type": "SCT"
          }
        ],
        "refId": 26774,
        "relatedParty": {
          "account": {
            "accountNumber": "11111111",
            "alias": "Main Account",
            "bic": "CPAYIE2D",
            "iban": "IE54CPAY99119911111111",
            "id": 42,
            "nsc": "232221"
          },
          "type": "FIRE_ACCOUNT"
        },
        "taxAmount": 0,
        "txnId": 30157,
        "type": "WITHDRAWAL",
        "yourRef": "From John Smith"
      }
    ]
  }
]
```

<h3 id="list-card-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|Access Token is Invalid or missing|None|
|403|Forbidden|Access Token is Invalid or missing|None|

<h3 id="list-card-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» dateRangeTo|integer|false|none|milisecond timestamp of date range to value.|
|» total|integer|false|none|The total number of card transactions in the list.|
|» transactions|[object]|false|none|none|
|» » amountAfterCharges|integer(int64)|false|none|Net amount lodged or taken from the account after fees and charges were applied.|
|» » amountBeforeCharges|integer(int64)|false|none|Amount of the transaction before the fees and taxes were applied.|
|» » balance|integer(int64)|false|none|the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).|
|» » batchItemDetails|object|false|none|Details of the batch run if this transaction was part of a batch.|
|» » » batchItemPublicUuid|string|false|none|The UUID for this item in the batch.|
|» » » batchName|string|false|none|The optional name given to the batch at creation time.|
|» » » batchPublicUuid|string|false|none|The UUID for this batch.|
|» » » jobNumber|string|false|none|The optional job number given to the batch to link it to your own system.|
|» » card|object|false|none|Details of the card used (if applicable)|
|» » » alias|string|false|none|none|
|» » » cardId|integer(int64)|false|none|none|
|» » » embossBusinessName|string|false|none|none|
|» » » embossCardName|string|false|none|none|
|» » » expiryDate|string(date-time)|false|none|none|
|» » » maskedPan|string|false|none|none|
|» » » provider|string|false|none|none|
|» » currency|object|false|none|The currency.|
|» » » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » » description|string|false|none|The name of the currency|
|» » date|string(date-time)|false|none|Date of the transaction|
|» » dateAcknowledged|string(date-time)|false|none|none|
|» » directDebitDetails|object|false|none|Details of the direct debit (if applicable)|
|» » » directDebitReference|string|false|none|The direct debit reference.|
|» » » directDebitUuid|string|false|none|The UUID for the direct debit payment|
|» » » mandateReference|string|false|none|the reference of the mandate|
|» » » mandateUUid|string|false|none|The UUID for the mandate|
|» » » mandateUuid|string|false|none|The UUID for the mandate|
|» » » originatorAlias|string|false|none|The Alias of the party who sets up the direct debit.|
|» » » originatorLogoUrlLarge|string|false|none|URL pointing to a large version of the Originator Logo (if available)|
|» » » originatorLogoUrlSmall|string|false|none|URL pointing to a small version of the Originator Logo (if available)|
|» » » originatorName|string|false|none|The creator of the party who sets up the direct debit.|
|» » » originatorReference|string|false|none|Set by party who sets up the direct debit.|
|» » eventUuid|string|false|none|An internal Fire reference for the transaction (UUID)|
|» » feeAmount|integer(int64)|false|none|The amount of the fee, if any.|
|» » fxTradeDetails|object|false|none|Details of the FX trade (if applicable)|
|» » » buyAmount|integer(int64)|false|none|amount of buyCurrency being bought|
|» » » buyCurrency|string|false|none|currency which is being bought|
|» » » fixedSide|string|false|none|type of trade - BUY or SELL|
|» » » provider|string|false|none|The FX provider used to make the trade.|
|» » » rate4d|integer(int64)|false|none|exchange rate|
|» » » sellAmount|integer(int64)|false|none|amount of sellCurrency being sold|
|» » » sellCurrency|string|false|none|currency which is being sold|
|» » ican|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.|
|» » myRef|string|false|none|The comment/reference on the transaction|
|» » paymentRequestPublicCode|string|false|none|(FOP payments only) The FOP Payment Code that was used to make this payment.|
|» » proprietarySchemeDetails|[object]|false|none|Extra details about the transaction based on the scheme used to make the payment.|
|» » » data|string|false|none|the scheme proprietary data - key pairs separated by \| and key/values separated by ^|
|» » » type|string|false|none|the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.|
|» » refId|integer(int64)|false|none|The id of the transaction.|
|» » relatedParty|object|false|none|Details of the related third party involved in the transaction.|
|» » » *oneOf*|object|false|none|none|
|» » » account|object|false|none|none|
|» » » » accountNumber|string|false|none|the Account Number of the account.|
|» » » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » » id|integer(int64)|false|none|identifier for the fire.com account (assigned by fire.com)|
|» » » » nsc|string|false|none|the Sort Code of the account.|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|none|
|» » » account|object|false|none|none|
|» » » » accountNumber|string|false|none|the Account Number of the account.|
|» » » » alias|string|false|none|the name the user gives to the account to help them identify it.|
|» » » » bic|string|false|none|the BIC of the account (provided if currency is EUR).|
|» » » » iban|string|false|none|the IBAN of the account (provided if currency is EUR).|
|» » » » id|integer(int64)|false|none|none|
|» » » » nsc|string|false|none|the Sort Code of the account.|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|none|
|» » » account|object|false|none|none|
|» » » » accountNumber|string|false|none|The account number of the Withdrawl account in reference|
|» » » » alias|string|false|none|The Alias name of the Withdrawl account in reference|
|» » » » bic|string|false|none|The BIC of the Withdrawl account in reference|
|» » » » iban|string|false|none|The BIC of the Withdrawl account in reference|
|» » » » id|integer(int64)|false|none|The ID number of the Withdrawl account in reference|
|» » » » nsc|string|false|none|(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.|
|» » » type|string|false|none|none|
|» » » *oneOf*|object|false|none|none|
|» » » cardMerchant|object|false|none|none|
|» » » » acquirerIdDe32|string|false|none|none|
|» » » » additionalAmtDe54|string|false|none|none|
|» » » » additionalDataDe124|string|false|none|none|
|» » » » additionalDataDe48|string|false|none|none|
|» » » » authCodeDe38|string|false|none|none|
|» » » » authorisedByGps|string|false|none|none|
|» » » » avsResult|string|false|none|none|
|» » » » billAmt|integer(int64)|false|none|none|
|» » » » billCcy|string|false|none|none|
|» » » » expiryDate|string|false|none|none|
|» » » » mccCode|string|false|none|none|
|» » » » merchIdDe42|string|false|none|none|
|» » » » merchNameDe43|string|false|none|none|
|» » » » mtId|string|false|none|none|
|» » » » posDataDe22|string|false|none|none|
|» » » » posDataDe61|string|false|none|none|
|» » » » posTermnlDe41|string|false|none|none|
|» » » » procCode|string|false|none|none|
|» » » » recordDataDe120|string|false|none|none|
|» » » » respCodeDe39|string|false|none|none|
|» » » » retRefNoDe37|string|false|none|none|
|» » » » statusCode|string|false|none|none|
|» » » » token|string|false|none|none|
|» » » » txnAmt4d|integer(int64)|false|none|none|
|» » » » txnCcy|string|false|none|none|
|» » » » txnCtry|string|false|none|none|
|» » » » txnDesc|string|false|none|none|
|» » » » txnStatCode|string|false|none|none|
|» » » » txnType|string|false|none|none|
|» » » type|string|false|none|none|
|» » taxAmount|integer(int64)|false|none|The amount of the tax, if any (e.g. Stamp duty for ATM transactions)|
|» » txnId|integer(int64)|false|none|The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.|
|» » type|string|false|none|The type of the transaction:<br>* `LODGEMENT` - Bank Transfer received<br>* `PIS_LODGEMENT` - Fire Open Payments Lodgement received<br>* `MANUAL_TRANSFER` - Manual Transfer to<br>* `WITHDRAWAL` - Bank Transfer sent<br>* `REVERSAL` - Credit Reversal<br>* `DIRECT_DEBIT` - A direct debit.<br>* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.<br>* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.<br>* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)<br>* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)<br>* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned<br>* `LODGEMENT_REVERSED` - Bank Transfer received returned<br>* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)<br>* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)<br>* `CREATE_CARD` - The fee taken when a debit card is issued.<br>* `ADD_ACCOUNT` - The fee taken when an account is created.<br>* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       <br>* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin<br>* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC<br>* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC<br>* `CARD_ECOMMERCE_DEBIT` - Card used on the internet<br>* `CARD_ECOMMERCE_CREDIT` - Card used on the internet<br>* `CARD_ATM_DEBIT` - Card used in an ATM<br>* `CARD_ATM_CREDIT` - Card used in an ATM<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency<br>* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency<br>* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed<br>* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed<br>* `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed<br>* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed<br>* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.<br>* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed<br>* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed<br>|
|» » yourRef|string|false|none|The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » code|EUR|
|» » » code|GBP|
|» » » type|FIRE_ACCOUNT|
|» » » type|EXTERNAL_ACCOUNT|
|» » » type|WITHDRAWAL_ACCOUNT|
|» » » type|CARD_MERCHANT|
|» » » type|CARD_ATM|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Unblock a card

<a id="opIdunblockCard"></a>

> Code samples

```bash
curl https://example.com/v1/cards/0/unblock \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/cards/{cardId}/unblock`

Updates status of an existing card to unblock which means that transactions can be carried out with that card.

<h3 id="unblock-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cardId|path|integer(int64)|true|none|

<h3 id="unblock-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body is returned - “Status 204 No Content” signifies the call was successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-payee-bank-accounts">Payee Bank Accounts</h1>

## List all Payee Bank Accounts

<a id="opIdgetPayees"></a>

> Code samples

```bash
curl https://example.com/v1/payees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payees`

Returns all your payee bank accounts. 

Ordered by payee name ascending. 

Can be paginated.


> Example responses

> 200 Response

```json
{
  "fundingSources": [
    {
      "accountHolderName": "Joe Bloggs",
      "accountName": "Joe",
      "accountNumber": "12345678",
      "bic": "BOFIIE2DXXX",
      "createdBy": "CUSTOMER",
      "currency": {
        "code": "EUR",
        "description": "Euro"
      },
      "dateCreated": "2019-08-22T07:48:56.460Z",
      "iban": "IE86BOFI90535211111111",
      "id": 742,
      "nsc": "998822",
      "status": "LIVE"
    }
  ],
  "total": 1
}
```

<h3 id="list-all-payee-bank-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Payee Bank Accounts|Inline|

<h3 id="list-all-payee-bank-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fundingSources|[object]|false|none|none|
|» accountHolderName|string|false|none|The name on the payee bank account.|
|» accountName|string|false|none|The alias attributed to the payee, usually set by the user when creating the payee.|
|» accountNumber|string|false|none|The Account Number of the account if currency is GBP.|
|» bic|string|false|none|The BIC of the account if currency is EUR.|
|» createdBy|string|false|none|The creation source of the payee.|
|» currency|object|false|none|The currency.|
|» » code|string|false|none|The three letter code for the currency - either `EUR` or `GBP`.|
|» » description|string|false|none|The name of the currency|
|» dateCreated|string(date-time)|false|none|The date the payee was created. ISO Date Time.|
|» iban|string|false|none|The IBAN of the account if currency is EUR.|
|» id|integer(int64)|false|none|Identifier for the fire.com payee bank account (assigned by fire.com).|
|» nsc|string|false|none|The Sort Code of the account if currency is GBP.|
|» status|string|false|none|The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.<br>  * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.<br>  * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.<br>  * 'CLOSED'<br>  * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.<br>|
|total|integer|false|none|The total number of payees in the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|» createdBy|CUSTOMER|
|» createdBy|LODGEMENT|
|» createdBy|DIRECT DEBIT|
|» createdBy|OPEN BANKING|
|» createdBy|FIRE OPEN PAYMENT|
|» createdBy|FIRE DIRECT|
|» » code|EUR|
|» » code|GBP|
|» status|CREATED|
|» status|LIVE|
|» status|CLOSED|
|» status|ARCHIVED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="fire-financial-services-business-api-users">Users</h1>

## Returns details of a specific fire.com user.

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/v1/user/14059 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/user/{userId}`

You can retrieve the details of a specific fire.com user

<h3 id="returns-details-of-a-specific-firecom-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "emailAddress": "user@example.com",
  "firstName": "Colm",
  "id": 14059,
  "lastName": "User",
  "lastlogin": "2012-01-20T11:21:35.000Z",
  "mobileApplicationDetails": {
    "OS": "Android",
    "businessUserId": "14059",
    "clientID": "EBB10F29-A653-4DBA-9C8C-BA79F72F78B0",
    "deviceName": "iPhone",
    "deviceOSVersion": "14.4",
    "mobileApplicationId": "18967",
    "status": "LIVE"
  },
  "mobileNumber": "+353871234567",
  "role": "ADMIN",
  "status": "LIVE",
  "userCvl": "FULL"
}
```

<h3 id="returns-details-of-a-specific-firecom-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique information about a User.|Inline|

<h3 id="returns-details-of-a-specific-firecom-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|email address for user|
|firstName|string|false|none|User first name|
|id|integer(int64)|false|none|The User ID for this User|
|lastName|string|false|none|User second name|
|lastlogin|string|false|none|Timestamp on when user last logged in.|
|mobileApplicationDetails|object|false|none|none|
|» OS|string|false|none|Operating system of device.|
|» businessUserId|integer(int64)|false|none|Business user ID|
|» clientID|string|false|none|Client ID of user.|
|» deviceName|string|false|none|type of device.|
|» deviceOSVersion|string|false|none|OS version for device.|
|» mobileApplicationId|integer(int64)|false|none|Mobile application id for user.|
|» status|string|false|none|Status of user|
|mobileNumber|string|false|none|User mobile number|
|role|string|false|none|User role|
|status|string|false|none|Status of user|
|userCvl|string|false|none|Users Cvl type ID (shows up when status is LIVE)|

#### Enumerated Values

|Property|Value|
|---|---|
|» OS|Android|
|» OS|IOS|
|» OS|OTHER|
|» deviceName|iPhone|
|» deviceName|Android|
|» deviceName|Other|
|» status|LIVE|
|» status|CLOSED|
|» status|LOCKED|
|» status|SMS_SENT|
|role|ADMIN|
|role|FULL_USER|
|role|READ_ONLY|
|role|CARD_ONLY|
|status|LIVE|
|status|CLOSED|
|status|FROZEN|
|status|INVITE_SENT|
|status|SMS_CODE_SENT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Returns list of all users on your fire.com account

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://example.com/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users`

You can retrieve the details of all fire.com users on your acount.

> Example responses

> 200 Response

```json
[
  {
    "emailAddress": "user@example.com",
    "firstName": "Colm",
    "id": 14059,
    "lastName": "User",
    "lastlogin": "2012-01-20T11:21:35.000Z",
    "mobileApplicationDetails": {
      "OS": "Android",
      "businessUserId": "14059",
      "clientID": "EBB10F29-A653-4DBA-9C8C-BA79F72F78B0",
      "deviceName": "iPhone",
      "deviceOSVersion": "14.4",
      "mobileApplicationId": "18967",
      "status": "LIVE"
    },
    "mobileNumber": "+353871234567",
    "role": "ADMIN",
    "status": "LIVE",
    "userCvl": "FULL"
  }
]
```

<h3 id="returns-list-of-all-users-on-your-firecom-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all Users.|Inline|

<h3 id="returns-list-of-all-users-on-your-firecom-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» emailAddress|string|false|none|email address for user|
|» firstName|string|false|none|User first name|
|» id|integer(int64)|false|none|The User ID for this User|
|» lastName|string|false|none|User second name|
|» lastlogin|string|false|none|Timestamp on when user last logged in.|
|» mobileApplicationDetails|object|false|none|none|
|» » OS|string|false|none|Operating system of device.|
|» » businessUserId|integer(int64)|false|none|Business user ID|
|» » clientID|string|false|none|Client ID of user.|
|» » deviceName|string|false|none|type of device.|
|» » deviceOSVersion|string|false|none|OS version for device.|
|» » mobileApplicationId|integer(int64)|false|none|Mobile application id for user.|
|» » status|string|false|none|Status of user|
|» mobileNumber|string|false|none|User mobile number|
|» role|string|false|none|User role|
|» status|string|false|none|Status of user|
|» userCvl|string|false|none|Users Cvl type ID (shows up when status is LIVE)|

#### Enumerated Values

|Property|Value|
|---|---|
|» » OS|Android|
|» » OS|IOS|
|» » OS|OTHER|
|» » deviceName|iPhone|
|» » deviceName|Android|
|» » deviceName|Other|
|» » status|LIVE|
|» » status|CLOSED|
|» » status|LOCKED|
|» » status|SMS_SENT|
|» role|ADMIN|
|» role|FULL_USER|
|» role|READ_ONLY|
|» role|CARD_ONLY|
|» status|LIVE|
|» status|CLOSED|
|» status|FROZEN|
|» status|INVITE_SENT|
|» status|SMS_CODE_SENT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>
