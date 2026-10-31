<h1 id="nowpayments-api">NOWPayments API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NOWPayments is a non-custodial cryptocurrency payment processing platform. Accept payments in a wide range of cryptos and get them instantly converted into a coin of your choice and sent to your wallet. Keeping it simple – no excess.

# Sandbox

Before production usage, you can test our API using the Sandbox. Details can be found [here](https://documenter.getpostman.com/view/7907941/T1LSCRHC)

# Authentication

To use the NOWPayments API you should do the following:

*   Sign up at [nowpayments.io](https://nowpayments.io)
*   Specify your outcome wallet
*   Generate an API key
    

# Standard e-commerce flow for NOWPayments API:

1.  API - Check API availability with the ["GET API status"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#9998079f-dcc8-4e07-9ac7-3d52f0fd733a) method. If required, check the list of available payment currencies with the ["GET available currencies"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#1c268f89-4fe7-471e-81b4-5a3153577b73) method.
2.  UI - Ask a customer to select item/items for purchase to determine the total sum;
3.  UI - Ask a customer to select payment currency
4.  API - Get the minimum payment amount for the selected currency pair (payment currency to your Outcome Wallet currency) with the ["GET Minimum payment amount"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#41b02221-2d58-4fcf-9529-59d3763d6434) method;
5.  API - Get the estimate of the total amount in crypto with ["GET Estimated price"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#7025cacf-7040-4c7b-a83f-f9ff0a22a822) and check that it is larger than the minimum payment amount from step 4;
6.  API - Call the ["POST Create payment"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#5e37f3ad-0fa1-4292-af51-5c7f95730486) method to create a payment and get the deposit address (in our example, the generated BTC wallet address is returned from this method);
7.  UI - Ask a customer to send the payment to the generated deposit address (in our example, user has to send BTC coins);
8.  UI - A customer sends coins, NOWPayments processes and exchanges them (if required), and settles the payment to your Outcome Wallet (in our example, to your ETH address);
9.  API - You can get the payment status either via our IPN callbacks or manually, using ["GET Payment Status"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#0b77a8e3-2344-4760-a0bd-247da067db6d) and display it to a customer so that they know when their payment has been processed.
10.  API - you call the list of payments made to your account via the ["GET List of payments"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#c8399c0e-d798-4f01-83ae-ddaa6905c2da) method. Additionally, you can see all of this information in your [Account](https://account.nowpayments.io/payments) on NOWPayments website.
    

## Alternative flow

1.  API - Check API availability with the ["GET API status"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#9998079f-dcc8-4e07-9ac7-3d52f0fd733a) method. If required, check the list of available payment currencies with the ["GET available currencies"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#1c268f89-4fe7-471e-81b4-5a3153577b73) method.
2.  UI - Ask a customer to select item/items for purchase to determine the total sum;
3.  UI - Ask a customer to select payment currency
4.  API - Get the minimum payment amount for the selected currency pair (payment currency to your Outcome Wallet currency) with the ["GET Minimum payment amount"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#41b02221-2d58-4fcf-9529-59d3763d6434) method;
5.  API - Get the estimate of the total amount in crypto with ["GET Estimated price"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#7025cacf-7040-4c7b-a83f-f9ff0a22a822) and check that it is larger than the minimum payment amount from step 4;
6.  API - Call the ["POST Create Invoice](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#3e3ce25e-f43f-4636-bbd9-11560e46048b) method to create an invoice. Set "success_url" - parameter so that the user will be redirected to your website after successful payment.
7.  UI - display the invoice url or redirect the user to the generated link.
8.  NOWPayments - the customer completes the payment and is redirected back to your website (only if "success_url" parameter is configured correctly!).
9.  API - You can get the payment status either via our IPN callbacks or manually, using ["GET Payment Status"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#0b77a8e3-2344-4760-a0bd-247da067db6d) and display it to a customer so that they know when their payment has been processed.
10.  API - you call the list of payments made to your account via the ["GET List of payments"](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#c8399c0e-d798-4f01-83ae-ddaa6905c2da) method. Additionally, you can see all of this information in your [Account](https://account.nowpayments.io/invoices) on NOWPayments website.
    

# API Documentation

## Instant Payments Notifications

IPN (Instant payment notifications, or callbacks) are used to notify you when transaction status is changed.  
To use them, you should complete the following steps:

1.  Generate and save the IPN Secret key in Store Settings tab at the Dashboard.
2.  Insert your URL address where you want to get callbacks in create_payment request. The parameter name is ipn_callback_url. You will receive payment updates (statuses) to this URL address.
3.  You will receive all the parameters at the URL address you specified in (2) by POST request.  
    The POST request will contain the *x-nowpayments-sig* parameter in the header.  
    The body of the request is similiar to a [get payment status](https://documenter.getpostman.com/view/7907941/S1a32n38?version=latest#0b77a8e3-2344-4760-a0bd-247da067db6d) response body.  
    Example:  
    {"payment_id":5077125051,"payment_status":"waiting","pay_address":"0xd1cDE08A07cD25adEbEd35c3867a59228C09B606","price_amount":170,"price_currency":"usd","pay_amount":155.38559757,"actually_paid":0,"pay_currency":"mana","order_id":"2","order_description":"Apple Macbook Pro 2019 x 1","purchase_id":"6084744717","created_at":"2021-04-12T14:22:54.942Z","updated_at":"2021-04-12T14:23:06.244Z","outcome_amount":1131.7812095,"outcome_currency":"trx"}
4.  Sort all the parameters from the POST request in alphabetical order.
5.  Convert them to string using  
    [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) (params, Object.keys(params).sort()) or the same function.
6.  Sign a string with an IPN-secret key with HMAC and sha-512 key
7.  Compare the signed string from the previous step with the x-nowpayments-sig , which is stored in the header of the callback request.  
    If these strings are similar it is a success.  
    Otherwise, contact us on [support@nowpayments.io](mailto:support@nowpayments.io) to solve the problem.
    

Example of creating a signed string at Node.JS

```
const hmac = crypto.createHmac('sha512', notificationsKey);
hmac.update(JSON.stringify(params, Object.keys(params).sort()));
const signature = hmac.digest('hex');

```

Example of comparing signed strings in PHP

```
function check_ipn_request_is_valid()
    {
        $error_msg = "Unknown error";
        $auth_ok = false;
        $request_data = null;
        if (isset($_SERVER['HTTP_X_NOWPAYMENTS_SIG']) && !empty($_SERVER['HTTP_X_NOWPAYMENTS_SIG'])) {
            $recived_hmac = $_SERVER['HTTP_X_NOWPAYMENTS_SIG'];
            $request_json = file_get_contents('php://input');
            $request_data = json_decode($request_json, true);
            ksort($request_data);
            $sorted_request_json = json_encode($request_data, JSON_UNESCAPED_SLASHES);
            if ($request_json !== false && !empty($request_json)) {
                $hmac = hash_hmac("sha512", $sorted_request_json, trim($this->ipn_secret));
                if ($hmac == $recived_hmac) {
                    $auth_ok = true;
                } else {
                    $error_msg = 'HMAC signature does not match';
                }
            } else {
                $error_msg = 'Error reading POST data';
            }
        } else {
            $error_msg = 'No HMAC signature sent.';
        }
    }

```

## Recurrent payment notifications

If an error is detected, the payment is flagged and will receive additional recurrent notifications (number of recurrent notifications can be changed in your Store Settings-> Instant Payment Notifications).

If an error is received again during processing of the payment, recurrent notifications will be initiated again.

Example: "Timeout" is set to 1 minute and "Number of recurrent notifications" is set to 3.

Once an error is detected, you will receive 3 notifications at 1 minute intervals.

## Several payments for one order

If you want to create several payments for one Order you should do the following:

*   Create a payment for the full order amount.
*   Save "purchase_id" which will be in "create_payment" response
*   Create next payment or payments with this "purchase_id" in "create_payment" request.
*   **Only works for partially_paid payments**
    

It may be useful if you want to give your customers opportunity to pay a full order with several payments, for example, one part in BTC and one part in ETH. Also, if your customer accidentally paid you only part of a full amount, you can automatically ask them to make another payment.

## Packages

Please find our out-of-the box packages for easy integration below:

[JavaScript package](https://www.npmjs.com/package/@nowpaymentsio/nowpayments-api-js)

\[PHP package\]  
([https://packagist.org/packages/nowpayments/nowpayments-api-php](https://packagist.org/packages/nowpayments/nowpayments-api-php))

More coming soon!

## Payments

Base URLs:

* <a href="https://api.nowpayments.io">https://api.nowpayments.io</a>

* <a href="https://api.nowpayments.ioo">https://api.nowpayments.ioo</a>

<h1 id="nowpayments-api-recurring-payments-api-email-subscriptions-feature">Recurring Payments API (Email Subscriptions feature)</h1>

Streamline your workflows by sending payments to your customers on a regular basis with NOWPayments.  
This feature involves creating a plan for payments and individual recurring payments for each user.  
First you need to create a Recurring Payment plan:

## Get many recurring payments

<a id="opIdgetManyRecurringPayments"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d ''
```

`GET /v1/subscriptions`

The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id

> Body parameter

```text

```

<h3 id="get-many-recurring-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|"WAITING_PAY" / "PAID" /  "PARTIALLY_PAID" / "EXPIRED"|
|subscription_plan_id|query|string|false|none|
|is_active|query|string|false|true / false|
|limit|query|string|false|none|
|offset|query|string|false|none|
|x-api-key|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "result": [
    {
      "created_at": "2022-10-09T22:15:50.808Z",
      "expire_date": "2022-10-11T00:02:00.025Z",
      "id": "1515573197",
      "is_active": true,
      "status": "PAID",
      "subscriber": {
        "sub_partner_id": "111394288"
      },
      "subscription_plan_id": "111394288",
      "updated_at": "2022-10-09T22:15:50.808Z"
    },
    {
      "created_at": "2022-10-06T16:40:28.880Z",
      "expire_date": "2022-10-07T16:46:00.910Z",
      "id": "111394288",
      "is_active": false,
      "status": "WAITING_PAY",
      "subscriber": {
        "email": "mikhail.s@changenow.io"
      },
      "subscription_plan_id": "111394288",
      "updated_at": "2022-10-06T16:40:28.880Z"
    }
  ]
}
```

<h3 id="get-many-recurring-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-many-recurring-payments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|
|result|[object]|false|none|none|
|» created_at|string|false|none|none|
|» expire_date|string|false|none|none|
|» id|string|false|none|none|
|» is_active|boolean|false|none|none|
|» status|string|false|none|none|
|» subscriber|object|false|none|none|
|» » email|string|false|none|none|
|» » sub_partner_id|string|false|none|none|
|» subscription_plan_id|string|false|none|none|
|» updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get many plans

<a id="opIdgetManyPlans"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/plans \
  -H 'Accept: application/json'
```

`GET /v1/subscriptions/plans`

This method allows you to obtain information about all the payment plans you’ve created.

<h3 id="get-many-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|Number|
|offset|query|string|false|Number|
|x-api-key|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "result": [
    {
      "amount": 0.1,
      "cancel_url": null,
      "created_at": "2022-10-04T16:10:06.214Z",
      "currency": "USD",
      "id": "76215585",
      "interval_day": "3",
      "ipn_callback_url": null,
      "partially_paid_url": null,
      "success_url": null,
      "title": "second sub plan",
      "updated_at": "2022-10-04T16:10:06.214Z"
    },
    {
      "amount": 0.5,
      "cancel_url": null,
      "created_at": "2022-10-04T16:28:55.423Z",
      "currency": "USD",
      "id": "1062307590",
      "interval_day": "1",
      "ipn_callback_url": null,
      "partially_paid_url": null,
      "success_url": null,
      "title": "second sub plan",
      "updated_at": "2022-10-04T16:28:55.423Z"
    }
  ]
}
```

<h3 id="get-many-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-many-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|
|result|[object]|false|none|none|
|» amount|number|false|none|none|
|» cancel_url|object \| null|false|none|none|
|» created_at|string|false|none|none|
|» currency|string|false|none|none|
|» id|string|false|none|none|
|» interval_day|string|false|none|none|
|» ipn_callback_url|object \| null|false|none|none|
|» partially_paid_url|object \| null|false|none|none|
|» success_url|object \| null|false|none|none|
|» title|string|false|none|none|
|» updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get one plan

<a id="opIdgetOnePlan"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/plans/string \
  -H 'Accept: application/json'
```

`GET /v1/subscriptions/plans/{plan-id}`

This method allows you to obtain information about your payment plan.  
(you need to specify your payment plan id in the request).

<h3 id="get-one-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|plan-id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "amount": 2,
    "cancel_url": null,
    "created_at": "2022-10-04T16:10:06.214Z",
    "currency": "USD",
    "id": "76215585",
    "interval_day": "1",
    "ipn_callback_url": null,
    "partially_paid_url": null,
    "success_url": null,
    "title": "test plan",
    "updated_at": "2022-10-04T16:10:06.214Z"
  }
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "subscription plan not found",
  "status": false,
  "statusCode": 404
}
```

<h3 id="get-one-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|
|404|Not Found|404|Inline|

<h3 id="get-one-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» amount|number|false|none|none|
|» cancel_url|object \| null|false|none|none|
|» created_at|string|false|none|none|
|» currency|string|false|none|none|
|» id|string|false|none|none|
|» interval_day|string|false|none|none|
|» ipn_callback_url|object \| null|false|none|none|
|» partially_paid_url|object \| null|false|none|none|
|» success_url|object \| null|false|none|none|
|» title|string|false|none|none|
|» updated_at|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|status|boolean|false|none|none|
|statusCode|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update plan

<a id="opIdupdatePlan"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/plans/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 2,
    "currency": "usd",
    "interval_day": 1,
    "title": "test plan"
  }'
```

`PATCH /v1/subscriptions/plans/{plan-id}`

This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.

> Body parameter

```json
{
  "amount": 2,
  "currency": "usd",
  "interval_day": 1,
  "title": "test plan"
}
```

<h3 id="update-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plan-id|path|string|true|none|
|body|body|object|false|none|
|» amount|body|number|false|none|
|» currency|body|string|false|none|
|» interval_day|body|number|false|none|
|» title|body|string|false|none|

<h3 id="update-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get one recurring payment

<a id="opIdgetOneRecurringPayment"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/string \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d ''
```

`GET /v1/subscriptions/{sub_id}`

Get information about a particular recurring payment via its ID.

Here’s the list of available statuses:  
\- WAITING_PAY  
\- PAID  
\- PARTIALLY_PAID  
\- EXPIRED

> Body parameter

```text

```

<h3 id="get-one-recurring-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|sub_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "created_at": "2022-10-09T22:15:50.808Z",
    "expire_date": "2022-10-12T00:02:00.025Z",
    "id": "1515573197",
    "is_active": true,
    "status": "PAID",
    "subscriber": {
      "sub_partner_id": "111394288"
    },
    "subscription_plan_id": "111394288",
    "updated_at": "2022-10-09T22:15:50.808Z"
  }
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "subscription not found",
  "status": false,
  "statusCode": 404
}
```

<h3 id="get-one-recurring-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|
|404|Not Found|404|Inline|

<h3 id="get-one-recurring-payment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» created_at|string|false|none|none|
|» expire_date|string|false|none|none|
|» id|string|false|none|none|
|» is_active|boolean|false|none|none|
|» status|string|false|none|none|
|» subscriber|object|false|none|none|
|» » sub_partner_id|string|false|none|none|
|» subscription_plan_id|string|false|none|none|
|» updated_at|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|status|boolean|false|none|none|
|statusCode|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete recurring payment

<a id="opIddeleteRecurringPayment"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/string \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d ''
```

`DELETE /v1/subscriptions/{sub_id}`

Completely removes a particular payment from the recurring payment plan.  
You need to specify the payment plan id in the request.

> Body parameter

```text

```

<h3 id="delete-recurring-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sub_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": "ok"
}
```

> 404 Response

```json
{
  "code": "NOT_FOUND",
  "message": "subscription not found",
  "status": false,
  "statusCode": 404
}
```

<h3 id="delete-recurring-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|
|404|Not Found|404|Inline|

<h3 id="delete-recurring-payment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|status|boolean|false|none|none|
|statusCode|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nowpayments-api-billing-sub-partner-api">Billing (sub-partner API)</h1>

NOWPayments allows you to create sub-partner accounts for your users, enabling full-fledged crypto billing solution.

## Get sub-partners

<a id="opIdgetSubPartners"></a>

> Code samples

```bash
curl https://example.com/v1/sub-partner
```

`GET /v1/sub-partner`

This method returns the entire list of your sub-partners.

<h3 id="get-sub-partners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|int or array of int (optional)|
|offset|query|string|false|(optional) default 0|
|limit|query|string|false|(optional) default 10|
|order|query|string|false|ASC / DESC (optional) default ASC|

<h3 id="get-sub-partners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get sub-partner balance

<a id="opIdgetSubPartnerBalance"></a>

> Code samples

```bash
curl https://example.com/v1/sub-partner/balance/string \
  -H 'Accept: application/json'
```

`GET /v1/sub-partner/balance/{id}`

This request can be made only from a whitelisted IP.  
If IP whitelisting is disabled, this request can be made by any user that has an API key.

<h3 id="get-sub-partner-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "balances": {
      "usddtrc20": {
        "amount": 0.7,
        "pendingAmount": 0
      },
      "usdtbsc": {
        "amount": 1.0001341847350678,
        "pendingAmount": 0
      }
    },
    "subPartnerId": "111394288"
  }
}
```

<h3 id="get-sub-partner-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-sub-partner-balance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» balances|object|false|none|none|
|» » usddtrc20|object|false|none|none|
|» » » amount|number|false|none|none|
|» » » pendingAmount|number|false|none|none|
|» » usdtbsc|object|false|none|none|
|» » » amount|number|false|none|none|
|» » » pendingAmount|number|false|none|none|
|» subPartnerId|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get transfer

<a id="opIdgetTransfer"></a>

> Code samples

```bash
curl https://example.com/v1/sub-partner/transfer/string \
  -H 'Accept: application/json'
```

`GET /v1/sub-partner/transfer/{id}`

Get the actual information about the transfer. You need to provide the transfer ID in the request.

<h3 id="get-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "amount": "1",
    "created_at": "2022-10-09T22:09:02.181Z",
    "currency": "usdtbsc",
    "from_sub_id": "111394288",
    "id": "327209161",
    "status": "FINISHED",
    "to_sub_id": "1515573197",
    "updated_at": "2022-10-09T22:10:01.853Z"
  }
}
```

<h3 id="get-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-transfer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» amount|string|false|none|none|
|» created_at|string|false|none|none|
|» currency|string|false|none|none|
|» from_sub_id|string|false|none|none|
|» id|string|false|none|none|
|» status|string|false|none|none|
|» to_sub_id|string|false|none|none|
|» updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all transfers

<a id="opIdgetAllTransfers"></a>

> Code samples

```bash
curl https://example.com/v1/sub-partner/transfers \
  -H 'Accept: application/json'
```

`GET /v1/sub-partner/transfers`

Returns the entire list of transfers created by your sub-partners.

<h3 id="get-all-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|int or array of int (optional)|
|status|query|string|false|string or array of string <br>"WAITING"/"CREATED"/"FINISHED"/"REJECTED"<br>(optional)|
|limit|query|string|false|(optional) default 10|
|offset|query|string|false|(optional) default 0|
|order|query|string|false|ASC / DESC (optional) default ASC|

> Example responses

> 200 Response

```json
{
  "count": 7,
  "result": [
    {
      "amount": "1",
      "created_at": "2022-10-09T18:53:21.975Z",
      "currency": "usdtbsc",
      "from_sub_id": "5209391548",
      "id": "111394288",
      "status": "FINISHED",
      "to_sub_id": "111394288",
      "updated_at": "2022-10-09T18:55:00.696Z"
    },
    {
      "amount": "1",
      "created_at": "2022-10-09T19:08:32.440Z",
      "currency": "usdtbsc",
      "from_sub_id": "111394288",
      "id": "148427051",
      "status": "FINISHED",
      "to_sub_id": "5209391548",
      "updated_at": "2022-10-09T19:10:01.209Z"
    },
    {
      "amount": "2",
      "created_at": "2022-10-09T21:19:51.936Z",
      "currency": "usdtbsc",
      "from_sub_id": "5209391548",
      "id": "1631380403",
      "status": "FINISHED",
      "to_sub_id": "111394288",
      "updated_at": "2022-10-09T21:21:00.671Z"
    },
    {
      "amount": "2",
      "created_at": "2022-10-09T21:22:17.125Z",
      "currency": "usdtbsc",
      "from_sub_id": "5209391548",
      "id": "1167886259",
      "status": "FINISHED",
      "to_sub_id": "111394288",
      "updated_at": "2022-10-09T21:24:00.662Z"
    },
    {
      "amount": "1",
      "created_at": "2022-10-09T21:25:29.231Z",
      "currency": "usdtbsc",
      "from_sub_id": "111394288",
      "id": "48471014",
      "status": "FINISHED",
      "to_sub_id": "5209391548",
      "updated_at": "2022-10-09T21:27:00.676Z"
    },
    {
      "amount": "1",
      "created_at": "2022-10-09T21:54:57.713Z",
      "currency": "usdtbsc",
      "from_sub_id": "111394288",
      "id": "1304149238",
      "status": "FINISHED",
      "to_sub_id": "5209391548",
      "updated_at": "2022-10-09T21:56:01.056Z"
    },
    {
      "amount": "1",
      "created_at": "2022-10-09T22:09:02.181Z",
      "currency": "usdtbsc",
      "from_sub_id": "111394288",
      "id": "327209161",
      "status": "FINISHED",
      "to_sub_id": "1515573197",
      "updated_at": "2022-10-09T22:10:01.853Z"
    }
  ]
}
```

<h3 id="get-all-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-all-transfers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|
|result|[object]|false|none|none|
|» amount|string|false|none|none|
|» created_at|string|false|none|none|
|» currency|string|false|none|none|
|» from_sub_id|string|false|none|none|
|» id|string|false|none|none|
|» status|string|false|none|none|
|» to_sub_id|string|false|none|none|
|» updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nowpayments-api-payments-api">Payments API</h1>

## Get estimated price

<a id="opIdgetEstimatedPrice"></a>

> Code samples

```bash
curl https://example.com/v1/estimate \
  -H 'Accept: application/json'
```

`GET /v1/estimate`

This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.

<h3 id="get-estimated-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|string|false|none|
|currency_from|query|string|false|none|
|currency_to|query|string|false|none|
|x-api-key|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "amount_from": 3999.5,
  "currency_from": "usd",
  "currency_to": "btc",
  "estimated_amount": 0.17061637
}
```

<h3 id="get-estimated-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-estimated-price-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_from|number|false|none|none|
|currency_from|string|false|none|none|
|currency_to|string|false|none|none|
|estimated_amount|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|CF-Cache-Status|string||none|
|200|CF-RAY|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expect-CT|string||none|
|200|NEL|string||none|
|200|Report-To|string||none|
|200|Server|string||none|
|200|Strict-Transport-Security|string||none|
|200|Transfer-Encoding|string||none|
|200|Vary|string||none|
|200|X-Content-Type-Options|string||none|
|200|X-DNS-Prefetch-Control|string||none|
|200|X-Download-Options|string||none|
|200|X-Frame-Options|string||none|
|200|X-XSS-Protection|string||none|
|200|cf-request-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the minimum payment amount

<a id="opIdgetTheMinimumPaymentAmount"></a>

> Code samples

```bash
curl https://example.com/v1/min-amount \
  -H 'Accept: application/json'
```

`GET /v1/min-amount`

Get the minimum payment amount for a specific pair.

You can provide both currencies in the pair or just currency\_from, and we will calculate the minimum payment amount for currency\_from and currency which you have specified as the outcome in the Store Settings.

You can also specify one of the fiat currencies in the currency\_from. In this case, the minimum payment will be calculated in this fiat currency.

You can also add field fiat\_equivalent (optional field) to get the fiat equivalent of the minimum amount.

In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.

<h3 id="get-the-minimum-payment-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|currency_from|query|string|false|none|
|currency_to|query|string|false|none|
|x-api-key|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "currency_from": "eth",
  "currency_to": "trx",
  "fiat_equivalent": 35.40626584,
  "min_amount": 0.0078999
}
```

<h3 id="get-the-minimum-payment-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-the-minimum-payment-amount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_from|string|false|none|none|
|currency_to|string|false|none|none|
|fiat_equivalent|number|false|none|none|
|min_amount|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|CF-Cache-Status|string||none|
|200|CF-RAY|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expect-CT|string||none|
|200|NEL|string||none|
|200|Report-To|string||none|
|200|Server|string||none|
|200|Strict-Transport-Security|string||none|
|200|Transfer-Encoding|string||none|
|200|Vary|string||none|
|200|X-Content-Type-Options|string||none|
|200|X-DNS-Prefetch-Control|string||none|
|200|X-Download-Options|string||none|
|200|X-Frame-Options|string||none|
|200|X-XSS-Protection|string||none|
|200|cf-request-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of payments

<a id="opIdgetListOfPayments"></a>

> Code samples

```bash
curl https://example.com/v1/payment/ \
  -H 'Accept: application/json'
```

`GET /v1/payment/`

Returns the entire list of all transactions, created with certain API key.
The list of optional parameters:
- limit - number of records in one page. (possible values: from 1 to 500)
- page - the page number you want to get (possible values: from 0 to **page count - 1**)
- sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
- orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
- dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
- dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).

<h3 id="get-list-of-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|page|query|string|false|none|
|sortBy|query|string|false|none|
|orderBy|query|string|false|none|
|dateFrom|query|string|false|none|
|dateTo|query|string|false|none|
|x-api-key|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "actually_paid": 180,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 178.9005,
      "outcome_currency": "trx",
      "pay_address": "TNDFkiSmBQorNFacb3735q8MnT29sn8BLn",
      "pay_amount": 165.652609,
      "pay_currency": "trx",
      "payment_id": 5524759814,
      "payment_status": "finished",
      "price_amount": 5,
      "price_currency": "usd",
      "purchase_id": "4944856743"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 164.6248468,
      "outcome_currency": "trx",
      "pay_address": "TVKHbLc47BnMbdE7QN4X5Q1FtyZLGGiTo8",
      "pay_amount": 165.652609,
      "pay_currency": "trx",
      "payment_id": 5867063509,
      "payment_status": "expired",
      "price_amount": 5,
      "price_currency": "usd",
      "purchase_id": "5057851130"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 0.1687052,
      "outcome_currency": "btc",
      "pay_address": "3EZ2uTdVDAMFXTfc6uLDDKR6o8qKBZXVkj",
      "pay_amount": 0.17070286,
      "pay_currency": "btc",
      "payment_id": 5745459419,
      "payment_status": "waiting",
      "price_amount": 3999.5,
      "price_currency": "usd",
      "purchase_id": "5837122679"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 0.8019402,
      "outcome_currency": "btc",
      "pay_address": "394UZCUdx3NN8VDsCZW8c6AzP7cXEXA8Xq",
      "pay_amount": 0.8102725,
      "pay_currency": "btc",
      "payment_id": 4650948408,
      "payment_status": "waiting",
      "price_amount": 3999.5,
      "price_currency": "usd",
      "purchase_id": "5094859409"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 988.9016296,
      "outcome_currency": "bcd",
      "pay_address": "3EWJaZBaRWbPjSBTpgFcvxpnXLJzFDCHqW",
      "pay_amount": 993.87178656,
      "pay_currency": "bcd",
      "payment_id": 5605634688,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "5817305007"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 1.8451261,
      "outcome_currency": "bch",
      "pay_address": "qzkshdh94vhdcyuejjf8ltcy2cl246hw0c68t36z69",
      "pay_amount": 1.85459941,
      "pay_currency": "bch",
      "payment_id": 5241856814,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "5941190675"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 56.151958,
      "outcome_currency": "btg",
      "pay_address": "AYyecr8WKVpj2PNonjyUpn9sCHFyFMLdN1",
      "pay_amount": 56.4344495,
      "pay_currency": "btg",
      "payment_id": 5751462089,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "6229667127"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 489.9433465,
      "outcome_currency": "dai",
      "pay_address": "0x6C3E920D0fdAF45c75b6c00f25Aa6a58429d4efB",
      "pay_amount": 496.84604252,
      "pay_currency": "dai",
      "payment_id": 6100223670,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "5376931412"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 0.025819,
      "outcome_currency": "btc",
      "pay_address": "3C85TUuBKEkoZZsTawiJhYZtVVLgE4GWqj",
      "pay_amount": 0.02596608,
      "pay_currency": "btc",
      "payment_id": 4460859238,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "5652098489"
    },
    {
      "actually_paid": 0,
      "order_description": "Apple Macbook Pro 2019 x 1",
      "order_id": "RGDBP-21314",
      "outcome_amount": 153789.0997188,
      "outcome_currency": "doge",
      "pay_address": "DLmK6vLURgHoWVZrQztthSqV71CBePG5k5",
      "pay_amount": 154569.92936569,
      "pay_currency": "doge",
      "payment_id": 4948632928,
      "payment_status": "expired",
      "price_amount": 500,
      "price_currency": "usd",
      "purchase_id": "4811984625"
    }
  ],
  "limit": 10,
  "page": 0,
  "pagesCount": 6,
  "total": 59
}
```

<h3 id="get-list-of-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-list-of-payments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» actually_paid|number|false|none|none|
|» order_description|string|false|none|none|
|» order_id|string|false|none|none|
|» outcome_amount|number|false|none|none|
|» outcome_currency|string|false|none|none|
|» pay_address|string|false|none|none|
|» pay_amount|number|false|none|none|
|» pay_currency|string|false|none|none|
|» payment_id|number|false|none|none|
|» payment_status|string|false|none|none|
|» price_amount|number|false|none|none|
|» price_currency|string|false|none|none|
|» purchase_id|string|false|none|none|
|limit|number|false|none|none|
|page|number|false|none|none|
|pagesCount|number|false|none|none|
|total|number|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|CF-Cache-Status|string||none|
|200|CF-RAY|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expect-CT|string||none|
|200|NEL|string||none|
|200|Report-To|string||none|
|200|Server|string||none|
|200|Strict-Transport-Security|string||none|
|200|Transfer-Encoding|string||none|
|200|Vary|string||none|
|200|X-Content-Type-Options|string||none|
|200|X-DNS-Prefetch-Control|string||none|
|200|X-Download-Options|string||none|
|200|X-Frame-Options|string||none|
|200|X-XSS-Protection|string||none|
|200|cf-request-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get/Update payment estimate

<a id="opIdgetUpdatePaymentEstimate"></a>

> Code samples

```bash
curl https://example.com/v1/payment/string/update-merchant-estimate \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/payment/{id}/update-merchant-estimate`

This endpoint is required to get the current estimate on the payment, and update the current estimate.  
Please note! Calling this estimate before `expiration_estimate_date` will return the current estimate, it won’t be updated.

`:id` \- payment ID, for which you want to get the estimate

Response:  
`id` \- payment ID  
`token_id` - id of api key used to create this payment (please discard this parameter)  
`pay_amount` - payment estimate, the exact amount the user will have to send to complete the payment  
`expiration_estimate_date` - expiration date of this estimate

<h3 id="getupdate-payment-estimate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|id|path|string|true|payment ID, for which you want to get the estimate|

> Example responses

> 200 Response

```json
{
  "expiration_estimate_date": "2022-08-12T13:14:28.536Z",
  "id": "4455667788",
  "pay_amount": 0.04671013,
  "token_id": "5566778899"
}
```

<h3 id="getupdate-payment-estimate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="getupdate-payment-estimate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiration_estimate_date|string|false|none|none|
|id|string|false|none|none|
|pay_amount|number|false|none|none|
|token_id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|CF-Cache-Status|string||none|
|200|CF-RAY|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expect-CT|string||none|
|200|NEL|string||none|
|200|Report-To|string||none|
|200|Server|string||none|
|200|Transfer-Encoding|string||none|
|200|alt-svc|string||none|
|200|strict-transport-security|string||none|
|200|vary|string||none|
|200|x-content-type-options|string||none|
|200|x-dns-prefetch-control|string||none|
|200|x-download-options|string||none|
|200|x-frame-options|string||none|
|200|x-xss-protection|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get payment status

<a id="opIdgetPaymentStatus"></a>

> Code samples

```bash
curl https://example.com/v1/payment/string \
  -H 'Accept: application/json'
```

`GET /v1/payment/{payment_id}`

Get the actual information about the payment. You need to provide the ID of the payment in the request.

NOTE! You should make the get payment status request with the same API key that you used in the create payment request.
Here is the list of avalable statuses:
- waiting - waiting for the customer to send the payment. The initial status of each payment.
- confirming - the transaction is being processed on the blockchain. Appears when NOWPayments detect the funds from the user on the blockchain.
- confirmed -  the process is confirmed by the blockchain. Customer’s funds have accumulated enough confirmations.
- sending - the funds are being sent to your personal wallet. We are in the process of sending the funds to you.
- partially_paid -  it shows that the customer sent the less than the actual price. Appears when the funds have arrived in your wallet.
- finished - the funds have reached your personal address and the payment is finished.
- failed -  the payment wasn't completed due to the error of some kind.
- refunded -  the funds were refunded back to the user.
- expired - the user didn't send the funds to the specified address in the 24 hour time window.

Additional info:
- outcome_amount - this parameter shows the amount that will be (or is already) received on your Outcome Wallet once the transaction is settled.
- outcome_currency - this parameter shows the currency in which the transaction will be settled.
- invoice_id - this parameter shows invoice ID from which the payment was created

<h3 id="get-payment-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|payment_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "actually_paid": 180,
  "created_at": "2020-12-16T14:30:43.306Z",
  "order_description": "Apple Macbook Pro 2019 x 1",
  "order_id": "RGDBP-21314",
  "outcome_amount": 178.9005,
  "outcome_currency": "trx",
  "pay_address": "TNDFkiSmBQorNFacb3735q8MnT29sn8BLn",
  "pay_amount": 165.652609,
  "pay_currency": "trx",
  "payment_id": 5524759814,
  "payment_status": "finished",
  "price_amount": 5,
  "price_currency": "usd",
  "purchase_id": "4944856743",
  "updated_at": "2020-12-16T14:40:46.523Z"
}
```

<h3 id="get-payment-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|Inline|

<h3 id="get-payment-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actually_paid|number|false|none|none|
|created_at|string|false|none|none|
|order_description|string|false|none|none|
|order_id|string|false|none|none|
|outcome_amount|number|false|none|none|
|outcome_currency|string|false|none|none|
|pay_address|string|false|none|none|
|pay_amount|number|false|none|none|
|pay_currency|string|false|none|none|
|payment_id|number|false|none|none|
|payment_status|string|false|none|none|
|price_amount|number|false|none|none|
|price_currency|string|false|none|none|
|purchase_id|string|false|none|none|
|updated_at|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|CF-Cache-Status|string||none|
|200|CF-RAY|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expect-CT|string||none|
|200|NEL|string||none|
|200|Report-To|string||none|
|200|Server|string||none|
|200|Strict-Transport-Security|string||none|
|200|Transfer-Encoding|string||none|
|200|Vary|string||none|
|200|X-Content-Type-Options|string||none|
|200|X-DNS-Prefetch-Control|string||none|
|200|X-Download-Options|string||none|
|200|X-Frame-Options|string||none|
|200|X-XSS-Protection|string||none|
|200|cf-request-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nowpayments-api-payouts-api">Payouts API</h1>

## Verify payout

<a id="opIdverifyPayout"></a>

> Code samples

```bash
curl https://example.com/v1/payout/5000000191/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "verification_code": "123456"
  }'
```

`POST /v1/payout/{withdrawals-id}/verify`

This method is required to verify payouts by using your 2fa code.  
You’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.  
Payout will be processed only when it is verified.

Make sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).  
When 2fa is disabled, the code automatically goes to your registration email.  
The code sent by email is valid for one hour.

Next is a description of the required request fields:

- :batch-withdrawal-id - payout id you received in `2. Create payout` method
- verification_code - 2fa code you received with your Google Auth app or via email
    

In order to establish an automatic verification of payouts, you should switch 2FA through the application.  
There are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.  
e.g: Speakeasy for JavaScript.  
We do not recommend to change any default settings.  

```
const 2faVerificationCode = speakeasy.totp({
      your_2fa_secret_key,
      encoding: 'base32',
})
```

> Body parameter

```json
{
  "verification_code": "123456"
}
```

<h3 id="verify-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-api-key|header|string|false|none|
|withdrawals-id|path|string|true|none|
|body|body|object|false|none|
|» verification_code|body|string|false|none|

> Example responses

> 200 Response

```text
OK
```

<h3 id="verify-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200|None|

<aside class="success">
This operation does not require authentication
</aside>
