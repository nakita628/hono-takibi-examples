<h1 id="customer-credit-api">Customer Credit API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With Customer Credit your store can enable **credit payments** through the checkout. You can also control **invoices** and the **credit limits** of your clients.

Learn more about Customer Credit in our [Help Center article](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).

All requests need the **authorization header**.

Additionally, you can find more information on installment payments for an order in the `customData`  field found in the [Get Order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) endpoint of the Orders API. This includes the number of installments, amount and due dates.

This API allows two kinds of authorization:
1. Authorization header containing the VTEX ID authentication token.
2. VTEX Appkey and Apptoken headers.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="customer-credit-api-invoices">Invoices</h1>

## Retrieve invoice by creditAccountId

<a id="opIdSearchallinvoicesofaAccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/invoices \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/accounts/{creditAccountId}/invoices`

Returns associated invoices by specified creditAccountId, the param that identifies a client in VTEX's system.

<h3 id="retrieve-invoice-by-creditaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:57:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "f9a056cb63f5417fb900ed5128bc1b15",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:57:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "ae45d73bfe534325bc6cfef3521d675c",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:45:40",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "8b984881a6934a06b65ab679c3b6641b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:44:49",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:44:51",
      "id": "c19d55551ac84e2d84c5b60f53c77daa",
      "observation": "",
      "originalDueDate": "2017-08-05T01:44:51",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:44:52",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:40:02",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:40:03",
      "id": "b588919ac65a4bc58bc1b87957ca136a",
      "observation": "",
      "originalDueDate": "2017-08-05T01:40:03",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:40:03",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:39:17",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:39:19",
      "id": "fabb9ae209cb4c50ac048ab72363d488",
      "observation": "",
      "originalDueDate": "2017-08-05T01:39:19",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:39:20",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:38:15",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:38:17",
      "id": "bc4e409f1490495b8dc351e2f93ac766",
      "observation": "",
      "originalDueDate": "2017-08-05T01:38:17",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:38:18",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:37:35",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:37:38",
      "id": "b23eb606d9054e29a789745c1473d123",
      "observation": "",
      "originalDueDate": "2017-08-05T01:37:38",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:37:38",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:36:25",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:36:29",
      "id": "2f67b460ca0742118d5eadd7d3752480",
      "observation": "",
      "originalDueDate": "2017-08-05T01:36:29",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:36:30",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:35:18",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:35:21",
      "id": "36102b1baec74904a80dcc6baf8dd5e7",
      "observation": "",
      "originalDueDate": "2017-08-05T01:35:21",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:35:22",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:31:31",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:31:32",
      "id": "2166d1d0b35a4ece826fac580652348b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:31:32",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:31:32",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:30:18",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:30:20",
      "id": "4d7ae513368a425db3c0c567fa2e9704",
      "observation": "",
      "originalDueDate": "2017-08-05T01:30:20",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:30:21",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:29:32",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:29:34",
      "id": "98332e38da024e269670bf6a5fce24ca",
      "observation": "",
      "originalDueDate": "2017-08-05T01:29:34",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:29:35",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:28:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:29:00",
      "id": "f2caa32762f14961895f93ddd1eb66cb",
      "observation": "",
      "originalDueDate": "2017-08-05T01:29:00",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:29:01",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:19:14",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:19:15",
      "id": "c44a7c0d2d944fe1bffc59b79ffdb214",
      "observation": "",
      "originalDueDate": "2017-08-05T01:19:15",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:19:15",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:18:25",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:18:28",
      "id": "f5c4725b549e4e77bfbf69f9ec6b5f44",
      "observation": "",
      "originalDueDate": "2017-08-05T01:18:28",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:18:29",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:17:34",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:17:37",
      "id": "76054911732743e3b011a36fdf99ac9b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:17:37",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:17:38",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:16:54",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:16:57",
      "id": "d5d5bc644d9e4068bb108bcca420343b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:16:57",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:16:58",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:16:14",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:16:17",
      "id": "c8de1d1b4f144a8bbb339f2a1c873c7e",
      "observation": "",
      "originalDueDate": "2017-08-05T01:16:17",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:16:18",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:14:40",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:14:43",
      "id": "a84cc2c91ee048c2bcf94b3214af31b2",
      "observation": "",
      "originalDueDate": "2017-08-05T01:14:43",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:14:43",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:13:22",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:13:23",
      "id": "3bf5ea95cb75465e80ea8c0f16cbc4d2",
      "observation": "",
      "originalDueDate": "2017-08-05T01:13:23",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:13:23",
      "value": 240
    }
  ],
  "summary": {
    "count": 194,
    "total": 1740
  }
}
```

<h3 id="retrieve-invoice-by-creditaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-invoice-by-creditaccountid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» checkingAccountId|string|true|none|none|
|» createdAt|string|true|none|none|
|» description|string|true|none|none|
|» dueDate|string|true|none|none|
|» id|string|true|none|none|
|» observation|string|true|none|none|
|» originalDueDate|string|true|none|none|
|» paymentLink|string|true|none|none|
|» status|string|true|none|none|
|» updatedAt|string|true|none|none|
|» value|number|true|none|none|
|summary|object|true|none|none|
|» count|integer(int32)|true|none|none|
|» total|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Invoice by Id

<a id="opIdRetrieveInvoicebyId"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/invoices/insert%20identifier%20here \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}`

Returns associated data for the specified Invoice Id, like status  and value, for example.

<h3 id="retrieve-invoice-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|Credit account's identification|
|invoiceId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "checkingAccountId": "76655291437_CPF",
  "createdAt": "2017-07-12T08:53:04",
  "description": "Invoice issued from a API call",
  "dueDate": "2017-07-27T08:53:04",
  "id": "029f4009-ac4b-4739-8644-50df050f34ca",
  "observation": "Some observation about the invoice",
  "originalDueDate": "2017-07-27T08:53:04",
  "paymentLink": "http://foo.bar",
  "status": "Opened",
  "updatedAt": "2017-07-12T08:53:04",
  "value": 50
}
```

<h3 id="retrieve-invoice-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-invoice-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkingAccountId|string|true|none|none|
|createdAt|string|true|none|none|
|description|string|true|none|none|
|dueDate|string|true|none|none|
|id|string|true|none|none|
|observation|string|true|none|none|
|originalDueDate|string|true|none|none|
|paymentLink|string|true|none|none|
|status|string|true|none|none|
|updatedAt|string|true|none|none|
|value|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change Invoice

<a id="opIdChangeInvoice"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/invoices/insert%20identifier%20here \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "observation": "string (optional)",
    "paymentLink": "string (URL) (optional)",
    "status": "string"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}`

Updates invoice's attributes `status`, `paymentLink` and `observation`.

> Body parameter

```json
{
  "observation": "string (optional)",
  "paymentLink": "string (URL) (optional)",
  "status": "string"
}
```

<h3 id="change-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|invoiceId|path|string|true|none|
|friendlyId|query|string|false|Invoice's identification|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» observation|body|string|true|none|
|» paymentLink|body|string|true|none|
|» status|body|string|true|Invoice's status. It must be completed with &quot;Paid&quot;, &quot;Cancelled&quot; or &quot;Open&quot; value.|

<h3 id="change-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel Invoice

<a id="opIdCancelInvoice"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/invoices/insert%20identifier%20here \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}`

Changes invoice's status from ancells invoice by specified Id.

<h3 id="cancel-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|Credit account's identification|
|invoiceId|path|string|true|none|

<h3 id="cancel-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Mark an invoice as Paid

<a id="opIdMarkaninvoiceasPaid"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/isert%20indentifier%20here/invoices/insert%20identifier%20here/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": "number (FULL invoice value [deprecated])"
  }'
```

`POST /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/payments`

Pay an invoice.

> Body parameter

```json
{
  "value": "number (FULL invoice value [deprecated])"
}
```

<h3 id="mark-an-invoice-as-paid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|invoiceId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|string|true|none|

> Example responses

> 200 Response

```json
"\"029f4009-ac4b-4739-8644-50df050f34ca\""
```

<h3 id="mark-an-invoice-as-paid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Postpone an invoice

<a id="opIdPostponeaninvoice"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/string/invoices/string/postponement \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "dueDays": "number (integer)"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/postponement`

Postpone an invoice.

> Body parameter

```json
{
  "dueDays": "number (integer)"
}
```

<h3 id="postpone-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|invoiceId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» dueDays|body|string|true|none|

<h3 id="postpone-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Search all invoices

<a id="opIdSearchallinvoices"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/invoices \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/invoices`

Returns all invoices according to the informed query params in the request.

<h3 id="search-all-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|from|query|string|false|none|
|to|query|string|false|none|
|createdDateFrom|query|string|false|none|
|createdDateTo|query|string|false|none|
|value|query|number|false|Invoice's value. It must be completed with a decimal value.|
|status|query|string|false|Invoice's status. It must be completed with "Paid", "Cancelled" or "Open" value.|
|friendlyId|query|string|false|Invoice's identifier|
|creditAccountId|query|string|false|Credit account's identifier|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "checkingAccountId": "14443385797_CPF",
      "createdAt": "2017-06-19T01:53:54",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-07-27T05:58:24",
      "id": "ce02c68b2b584d5ba15a63bc485d43f1",
      "observation": "",
      "originalDueDate": "2017-07-27T05:58:24",
      "paymentLink": "",
      "status": "Paid",
      "updatedAt": "2017-06-27T05:58:24",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:42",
      "id": "11ff8f52407047c2966649c3484285bd",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:42",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:30",
      "id": "2828a856363a4f82b3f5c18b3ef09620",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:30",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:52",
      "id": "06c8f6160f7a4a50ae43c26a37fe1946",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:52",
      "value": 100
    },
    {
      "checkingAccountId": "14443385797_CPF",
      "createdAt": "2017-04-11T04:50:34",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-11T05:26:07",
      "id": "105e79997fbe452ba33ffa69b408f9bf",
      "observation": null,
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-11T05:26:07",
      "value": 100
    }
  ],
  "summary": {
    "count": 5,
    "total": 500
  }
}
```

<h3 id="search-all-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="search-all-invoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» checkingAccountId|string|true|none|none|
|» createdAt|string|true|none|none|
|» description|string|true|none|none|
|» dueDate|string|true|none|none|
|» id|string|true|none|none|
|» observation|string \| null|true|none|none|
|» originalDueDate|string|true|none|none|
|» paymentLink|string \| null|true|none|none|
|» status|string|true|none|none|
|» updatedAt|string|true|none|none|
|» value|number|true|none|none|
|summary|object|true|none|none|
|» count|integer(int32)|true|none|none|
|» total|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="customer-credit-api-account">Account</h1>

## Search all accounts

<a id="opIdSearchallaccounts"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/accounts`

<h3 id="search-all-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": "ambienteqa",
      "balance": 220,
      "creditLimit": 240,
      "description": "",
      "document": "12345677811",
      "documentType": "CPF",
      "email": "test@test.com",
      "lastUpdate": "2017-07-06T01:57:39.4317119Z"
    }
  ],
  "summary": {
    "count": 39
  }
}
```

<h3 id="search-all-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="search-all-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» account|string|true|none|none|
|» balance|number|true|none|none|
|» creditLimit|number|true|none|none|
|» description|string|true|none|none|
|» document|string|true|none|none|
|» documentType|string|true|none|none|
|» email|string|true|none|none|
|» lastUpdate|string|true|none|none|
|summary|object|true|none|none|
|» count|integer(int32)|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Open an Account

<a id="opIdOpenanAccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "creditLimit": "number",
    "description": "description",
    "document": "number",
    "documentType": "CPF ou CNPJ ou Other",
    "email": "email",
    "tolerance": "1 is 100%"
  }'
```

`POST /api/creditcontrol/accounts`

Open an account.

> Body parameter

```json
{
  "creditLimit": "number",
  "description": "description",
  "document": "number",
  "documentType": "CPF ou CNPJ ou Other",
  "email": "email",
  "tolerance": "1 is 100%"
}
```

<h3 id="open-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» creditLimit|body|string|true|none|
|» description|body|string|true|none|
|» document|body|string|true|none|
|» documentType|body|string|true|none|
|» email|body|string|true|none|
|» tolerance|body|string|true|none|

> Example responses

> 200 Response

```json
"\"76655291437_CPF\""
```

<h3 id="open-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Open or Change Account

<a id="opIdOpenorChangeAccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "creditLimit": "number",
    "email": "email"
  }'
```

`PUT /api/creditcontrol/accounts/{accountId}`

Open or Change an account.

> Body parameter

```json
{
  "creditLimit": "number",
  "email": "email"
}
```

<h3 id="open-or-change-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|It must be an alphanumeric value|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|false|none|
|» creditLimit|body|integer|false|If the user don't set a credit limit, the system will define 100 for default|
|» document|body|string|false|none|
|» email|body|string|true|none|
|» id|body|string|true|none|

> Example responses

> 200 Response

```json
"\"76655291437_CPF\""
```

<h3 id="open-or-change-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve an Account by Id

<a id="opIdRetrieveaAccountbyId"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/accounts/{creditAccountId}`

Retrieve an account by id.

<h3 id="retrieve-an-account-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account": "ambienteqa",
  "balance": 220,
  "creditLimit": 240,
  "description": "",
  "email": "test@test.com",
  "lastUpdate": "2017-07-06T01:57:39.4317119Z"
}
```

<h3 id="retrieve-an-account-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-an-account-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|none|
|balance|number|true|none|none|
|creditLimit|number|true|none|none|
|description|string|true|none|none|
|email|string|true|none|none|
|lastUpdate|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update email and description of a account

<a id="opIdUpdateemailanddescriptionofaaccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "description": "string",
    "email": "email"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}`

Update a checking account.

> Body parameter

```json
{
  "description": "string",
  "email": "email"
}
```

<h3 id="update-email-and-description-of-a-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» description|body|string|true|none|
|» email|body|string|true|none|

> Example responses

> 200 Response

```json
"\"76655291437_CPF\""
```

<h3 id="update-email-and-description-of-a-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Close an Account

<a id="opIdCloseanAccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "document": "number",
    "documentType": "CPF ou CNPJ ou Other",
    "email": "email"
  }'
```

`DELETE /api/creditcontrol/accounts/{creditAccountId}`

Closes an account.

> Body parameter

```json
{
  "document": "number",
  "documentType": "CPF ou CNPJ ou Other",
  "email": "email"
}
```

<h3 id="close-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identifier|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» document|body|string|false|none|
|» documentType|body|string|false|none|
|» email|body|string|false|none|

<h3 id="close-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change credit limit of an Account

<a id="opIdChangecreditlimitofanAccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/creditlimit \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": 10000
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/creditlimit`

Increase the credit limit of an account.

> Body parameter

```json
{
  "value": 10000
}
```

<h3 id="change-credit-limit-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identifier|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|integer(number)|true|none|

<h3 id="change-credit-limit-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|connection|string||none|
|200|content-length|string||none|
|200|date|string||none|
|200|server|string||none|
|200|via|string||none|
|200|x-cache|string||none|
|200|x-cache-lookup|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-janus-router-backend-app|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add an account Holder

<a id="opIdAddanaccountHolder"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/holders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "claims": {
      "email": "USER-EMAIL"
    }
  }'
```

`POST /api/creditcontrol/accounts/{creditAccountId}/holders`

> Body parameter

```json
{
  "claims": {
    "email": "USER-EMAIL"
  }
}
```

<h3 id="add-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» claims|body|object|true|none|
|» » email|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": "ambienteqa",
      "balance": 220,
      "creditLimit": 240,
      "description": "",
      "document": "12345677811",
      "documentType": "CPF",
      "email": "test@test.com",
      "lastUpdate": "2017-07-06T01:57:39.4317119Z"
    }
  ],
  "summary": {
    "count": 39
  }
}
```

<h3 id="add-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="add-an-account-holder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» account|string|true|none|none|
|» balance|number|true|none|none|
|» creditLimit|number|true|none|none|
|» description|string|true|none|none|
|» document|string|true|none|none|
|» documentType|string|true|none|none|
|» email|string|true|none|none|
|» lastUpdate|string|true|none|none|
|summary|object|true|none|none|
|» count|integer(int32)|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete an account holder

<a id="opIdDeleteanaccountholder"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/holders/insert%20identifier%20here \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/creditcontrol/accounts/{creditAccountId}/holders/{holderId}`

<h3 id="delete-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|Credit account's identification|
|holderId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": "ambienteqa",
      "balance": 220,
      "creditLimit": 240,
      "description": "",
      "document": "12345677811",
      "documentType": "CPF",
      "email": "test@test.com",
      "lastUpdate": "2017-07-06T01:57:39.4317119Z"
    }
  ],
  "summary": {
    "count": 39
  }
}
```

<h3 id="delete-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="delete-an-account-holder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» account|string|true|none|none|
|» balance|number|true|none|none|
|» creditLimit|number|true|none|none|
|» description|string|true|none|none|
|» document|string|true|none|none|
|» documentType|string|true|none|none|
|» email|string|true|none|none|
|» lastUpdate|string|true|none|none|
|summary|object|true|none|none|
|» count|integer(int32)|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Account statements

<a id="opIdAccountstatements"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/statements \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/accounts/{creditAccountId}/statements`

Get the account statements.

<h3 id="account-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "currentBalance": 0,
  "intervalBalance": 0,
  "previousBalance": 0,
  "statements": [
    {
      "date": "2017-07-03T16:47:19.4578611Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:47:19.6678789Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:47:20.118935Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:47:20.4899776Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:52:00.9443838Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:52:01.2514187Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:52:01.671466Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:52:01.9424961Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:54:40.0782046Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:54:40.3252276Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:54:40.6552638Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:54:40.8932962Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:55:57.197841Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:55:57.5278732Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:55:57.9019147Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:55:58.1179392Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:11.8426054Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:13.8889672Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:16.5197295Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:18.3509528Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:18.7869726Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:19.0240035Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:19.3770378Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:19.7050818Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:07:15.8348399Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:07:16.1788809Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:07:16.5469147Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:07:16.7959479Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:33.0252059Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:33.5372179Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:34.1453238Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:34.468359Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:53.1504362Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:55.3629113Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:58.6401036Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:10:00.782546Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:49:22.3349339Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:49:22.6879717Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:49:23.0600071Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:49:23.3570469Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:57:01.460345Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:57:02.2444344Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:57:02.6094762Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:57:03.0085156Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T19:01:09.3831094Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T19:01:09.7391531Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T19:01:10.3811954Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T19:01:13.7475991Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T20:48:39.1243969Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T20:48:39.6534554Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T20:48:39.976498Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T20:48:40.2195183Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:43:36.8709735Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:43:39.3015912Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:43:42.4497005Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:43:45.0294261Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:52:42.0202602Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:52:44.2187306Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:52:47.6370182Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:52:49.6223473Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:00:43.7004457Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:00:45.8558835Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:00:48.8719015Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:00:50.9332797Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:06:14.2397182Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:06:14.8247757Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:06:15.3018042Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:06:15.5878612Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:13:11.2934159Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:13:11.6004563Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:13:13.677688Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:13:13.9407125Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:24:18.0640865Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:24:18.3391219Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:24:18.7501665Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:24:19.0612052Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:35:32.4265204Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:35:32.670556Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:35:33.0035923Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:35:33.2296111Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:43:18.0936755Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:43:18.5677311Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:43:19.0377821Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:43:19.3078114Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:46:24.2995291Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:46:24.5415575Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:46:25.1666258Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:46:25.3926527Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T15:10:11.6542275Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T15:10:25.101228Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T15:10:46.4925416Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T15:10:53.5622728Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T16:47:02.1152214Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T16:47:02.4332644Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T16:47:02.9263133Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T16:47:03.2213519Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:15:05.4888997Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:15:06.0669661Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:15:06.6290272Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:15:07.0140703Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:29:04.8128943Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:29:05.1829369Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:29:05.7749947Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:29:06.0640335Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:15:29.5981555Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:15:29.8481897Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:15:30.2942391Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:15:30.5592684Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:44:37.2988823Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:44:37.851942Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:44:38.3920041Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:44:38.7030381Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:09:37.3571808Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:09:37.72222Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:09:38.0552519Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:09:38.2922837Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:20:18.4320323Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:20:21.3519865Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:20:24.16387Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:20:25.8389893Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:22:52.2991989Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:22:52.5682339Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:22:53.0962861Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:22:53.6013417Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:24:44.309999Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:24:46.5064706Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:24:49.6956032Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:24:51.4547805Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T21:14:17.4331001Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T21:14:30.1921448Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T22:20:16.0386883Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T22:20:25.5770708Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T23:59:03.2527657Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T23:59:08.3266609Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T23:59:16.9109105Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T23:59:22.5296797Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T01:57:44.2482508Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T01:57:44.5012788Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T01:57:45.2343532Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T01:57:45.5723968Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:22:00.5618842Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:05.5812446Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:22:13.7547136Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:16.3029568Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:17.7061162Z",
      "description": "Credits emptied",
      "value": -20000
    },
    {
      "date": "2017-07-06T14:22:20.5444338Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:21.0144862Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:32:59.6762693Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:07.7819136Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:08.2790261Z",
      "description": "Credits emptied",
      "value": -20000
    },
    {
      "date": "2017-07-06T14:33:08.3789839Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-06T14:33:09.0970636Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:09.5591087Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:33:20.0709176Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:27.9481914Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:39:44.5993553Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:39:44.8493768Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:39:45.4174464Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:39:45.8154911Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:02:28.6075704Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:02:28.9126055Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:02:29.361656Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:02:29.6296853Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:14:48.6134384Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:14:48.937473Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:14:51.6977841Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:14:52.0238222Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:58:40.45117Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:58:40.7472093Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:58:41.1442492Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:58:41.7183119Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:10:20.391709Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:10:20.6657389Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:10:21.3558225Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:10:21.6258492Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:11:48.5505811Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:11:49.0886414Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:11:49.797721Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:11:50.1477661Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T02:33:28.0860427Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T02:33:28.4040771Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T02:33:28.9461381Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T02:33:29.3731885Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T03:19:29.0522439Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T03:19:29.3802781Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T03:19:29.8033262Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T03:19:30.1083606Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:38:32.0646398Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:38:38.5399737Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:38:52.0400096Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:38:59.0326902Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:46:39.5442819Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:46:39.8743121Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:46:40.8354262Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:46:41.1404609Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:53:23.68054Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:53:23.9735672Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:53:24.4196165Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:53:24.7606614Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T17:02:28.3755391Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T17:02:28.7075311Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T17:02:30.9268213Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T17:02:31.4268761Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:31:13.8141713Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:31:14.1722149Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:31:14.7582781Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:31:15.008306Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:36:12.620413Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:36:15.3802583Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:36:20.0483828Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:36:22.3108969Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:39:13.5468917Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:39:14.0169506Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:39:14.4700013Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:39:14.7320264Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:48:49.3203773Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:48:49.6554153Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:48:50.2114767Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:48:50.5725163Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:01:48.7536577Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:01:49.0086875Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:01:49.3867329Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:01:49.720771Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:21:56.4849081Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:21:56.7768944Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:21:57.420015Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:21:57.7600564Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:44:22.3239425Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:44:22.6069739Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:44:23.0380212Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:44:23.7830985Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:46:15.7306413Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:46:16.0676798Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:46:16.7557547Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:46:17.0717915Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T20:46:09.0601995Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:46:09.7432736Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:59:50.5891534Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:59:51.1332589Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T21:50:23.5218551Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T21:50:24.1779278Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T14:33:29.5236904Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T14:33:30.0347475Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:09:06.1221118Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:09:06.6011653Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:11:55.696109Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T16:11:56.2121659Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T16:11:56.8692618Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T16:11:57.1562724Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T16:19:51.1613469Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:19:51.5924019Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:08:27.2440987Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:31:27.2874184Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:38:25.7778188Z",
      "description": "Credited",
      "value": 1
    },
    {
      "date": "2017-07-11T17:38:47.9508788Z",
      "description": "Decrease credits",
      "value": -1
    },
    {
      "date": "2017-07-11T17:40:23.1954791Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T17:42:40.0572365Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T17:44:01.6719325Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:45:45.1352607Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:46:26.9859192Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:52:50.7294541Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T17:52:55.3262378Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:01:50.9566941Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:01:51.27073Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:01:51.8287917Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:01:52.13982Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:23:21.8592583Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:23:22.202299Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:23:22.6883482Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:23:23.0293898Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:39:37.8348611Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:39:38.2699106Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:39:38.7839661Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:39:39.1620082Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:53:39.9211228Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:53:40.8032621Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:53:41.3593193Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:53:41.7023675Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T21:49:07.6918338Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T21:49:08.0898827Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T21:49:09.7340616Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T21:49:10.298129Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T22:13:29.121493Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T22:13:29.7035615Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T22:13:31.0747185Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T22:13:31.3367462Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-12T15:19:01.7803787Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-12T15:19:02.2223874Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-12T15:19:02.7854971Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-12T15:19:03.3115534Z",
      "description": "Credits emptied",
      "value": -10000
    }
  ]
}
```

<h3 id="account-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="account-statements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|number|true|none|none|
|intervalBalance|number|true|none|none|
|previousBalance|number|true|none|none|
|statements|[object]|true|none|none|
|» date|string|true|none|none|
|» description|string|true|none|none|
|» value|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Decrease balance of an account

<a id="opIdDecreasebalanceofanaccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20example%20here/statements/insert%20example%20here \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": "-number"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/statements/{statementId}`

Create a debit value updating the account BALANCE.

> Body parameter

```json
{
  "value": "-number"
}
```

<h3 id="decrease-balance-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|statementId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|string|true|none|

<h3 id="decrease-balance-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Change tolerance of an account

<a id="opIdChangetoleranceofanaccount"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/tolerance \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": 0.2
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/tolerance`

Increase the credit limit of a checking account.

> Body parameter

```json
{
  "value": 0.2
}
```

<h3 id="change-tolerance-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|number|true|none|

<h3 id="change-tolerance-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|connection|string||none|
|200|content-length|string||none|
|200|date|string||none|
|200|server|string||none|
|200|via|string||none|
|200|x-cache|string||none|
|200|x-cache-lookup|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-janus-router-backend-app|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create a Pre Authorization

<a id="opIdCreateaPreAuthorization"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/transaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
    "installments": "integer (optional default is 1)",
    "settle": false,
    "value": "decimal (required)"
  }'
```

`POST /api/creditcontrol/accounts/{creditAccountId}/transaction`

> Body parameter

```json
{
  "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
  "installments": "integer (optional default is 1)",
  "settle": false,
  "value": "decimal (required)"
}
```

<h3 id="create-a-pre-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» expirationDate|body|string|true|date in ISO8601 (UTC) dateformat (optional default is 1(one) day)|
|» installments|body|string|true|none|
|» settle|body|boolean|true|none|
|» value|body|string|true|none|

<h3 id="create-a-pre-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create a Pre Authorization (using id)

<a id="opIdCreateaPreAuthorization(usingid)"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/transactions/insert%20identifier%20here \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
    "installments": "integer (optional default is 1)",
    "settle": false,
    "value": "decimal (required)"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}`

> Body parameter

```json
{
  "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
  "installments": "integer (optional default is 1)",
  "settle": false,
  "value": "decimal (required)"
}
```

<h3 id="create-a-pre-authorization-using-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|transactionId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» expirationDate|body|string|true|date in ISO8601 (UTC) dateformat (optional default is 1(one) day)|
|» installments|body|string|true|none|
|» settle|body|boolean|true|none|
|» value|body|string|true|none|

<h3 id="create-a-pre-authorization-using-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel a Pre Authorization

<a id="opIdCancelaPreAuthorization"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/transactions/insert%20identifier%20here \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}`

<h3 id="cancel-a-pre-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|creditAccountId|path|string|true|Credit account's identification|
|transactionId|path|string|true|none|

<h3 id="cancel-a-pre-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Partial or Total Refund a Settlement

<a id="opIdPartialorTotalRefundaSettlement"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/transactions/insert%20identifier%20here/refunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": "decimal (required)"
  }'
```

`POST /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/refunds`

Refund a value from a already settled transaction.

> Body parameter

```json
{
  "value": "decimal (required)"
}
```

<h3 id="partial-or-total-refund-a-settlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|transactionId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "d7d135000a8347ec8b0a0f9edceccefd",
  "value": 100
}
```

<h3 id="partial-or-total-refund-a-settlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="partial-or-total-refund-a-settlement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|value|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|connection|string||none|
|200|content-length|string||none|
|200|content-type|string||none|
|200|date|string||none|
|200|server|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-janus-router-backend-app|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or Update Settlement

<a id="opIdCreateorUpdateSettlement"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/accounts/insert%20identifier%20here/transactions/insert%20identifier%20here/settlement \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "value": "decimal (required)"
  }'
```

`PUT /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/settlement`

Debit a value from checking account.

> Body parameter

```json
{
  "value": "decimal (required)"
}
```

<h3 id="create-or-update-settlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|creditAccountId|path|string|true|Credit account's identification|
|transactionId|path|string|true|none|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» value|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "d7d135000a8347ec8b0a0f9edceccefd",
  "value": 100
}
```

<h3 id="create-or-update-settlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-or-update-settlement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|value|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|connection|string||none|
|200|content-length|string||none|
|200|content-type|string||none|
|200|date|string||none|
|200|server|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-janus-router-backend-app|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="customer-credit-api-store-configuration">Store Configuration</h1>

## Retrieve store configuration

<a id="opIdRetrievestoreconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/storeconfig \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/creditcontrol/storeconfig`

Get store configuration data.

<h3 id="retrieve-store-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

> Example responses

> 200 Response

```json
{
  "dailyInterestRate": 0,
  "invoicePostponementLimit": 0,
  "taxRate": 0,
  "tolerancePercent": 0.7
}
```

<h3 id="retrieve-store-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="retrieve-store-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyInterestRate|number|true|none|none|
|invoicePostponementLimit|integer(int32)|true|none|none|
|taxRate|number|true|none|none|
|tolerancePercent|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or change store configuration

<a id="opIdCreateorchangestoreconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/creditcontrol/storeconfig \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "automaticCheckingAccountCreationEnabled": false,
    "dailyInterestRate": "number(percent 0.1=10%) (float)",
    "defaultCreditValue": "number (decimal)",
    "invoicePostponementLimit": "number (int)",
    "maxPostponementDays": "number (int",
    "maxPreAuthorizationGrowthRate": "number (percent 0.1=10%) (float)",
    "myCreditsEnabled": false,
    "postponementEnabled": false,
    "taxRate": "number(percent 0.1=10%) (float)",
    "toleranceEnabled": false
  }'
```

`PUT /api/creditcontrol/storeconfig`

Create or change store configuration data.

> Body parameter

```json
{
  "automaticCheckingAccountCreationEnabled": false,
  "dailyInterestRate": "number(percent 0.1=10%) (float)",
  "defaultCreditValue": "number (decimal)",
  "invoicePostponementLimit": "number (int)",
  "maxPostponementDays": "number (int",
  "maxPreAuthorizationGrowthRate": "number (percent 0.1=10%) (float)",
  "myCreditsEnabled": false,
  "postponementEnabled": false,
  "taxRate": "number(percent 0.1=10%) (float)",
  "toleranceEnabled": false
}
```

<h3 id="create-or-change-store-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request. Default value for payment provider protocol is application/json|
|body|body|object|true|none|
|» automaticCheckingAccountCreationEnabled|body|boolean|true|none|
|» dailyInterestRate|body|string|true|none|
|» defaultCreditValue|body|string|true|none|
|» invoicePostponementLimit|body|string|true|none|
|» maxPostponementDays|body|string|true|none|
|» maxPreAuthorizationGrowthRate|body|string|true|none|
|» myCreditsEnabled|body|boolean|true|none|
|» notificationsSettings|body|object|false|none|
|» » daysAfter|body|[object]|false|none|
|» » » days|body|integer|true|none|
|» » » timeOfDay|body|string|true|none|
|» » daysPrior|body|[object]|false|none|
|» » » days|body|integer|true|none|
|» » » timeOfDay|body|string|true|none|
|» postponementEnabled|body|boolean|true|none|
|» taxRate|body|string|true|none|
|» toleranceEnabled|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "dailyInterestRate": 0.2,
  "invoicePostponementLimit": 2,
  "taxRate": 0.4,
  "tolerancePercent": 0.35
}
```

<h3 id="create-or-change-store-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-or-change-store-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyInterestRate|number|true|none|none|
|invoicePostponementLimit|integer(int32)|true|none|none|
|taxRate|number|true|none|none|
|tolerancePercent|number|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-Translate|string||none|
|200|X-Translate-BackEnd|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AddanaccountHolderRequest">AddanaccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddanaccountholderrequest"></a>
<a id="schema_AddanaccountHolderRequest"></a>
<a id="tocSaddanaccountholderrequest"></a>
<a id="tocsaddanaccountholderrequest"></a>

```json
{
  "claims": {
    "email": "USER-EMAIL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claims|object|true|none|none|

<h2 id="tocS_ChangeInvoiceRequest">ChangeInvoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangeinvoicerequest"></a>
<a id="schema_ChangeInvoiceRequest"></a>
<a id="tocSchangeinvoicerequest"></a>
<a id="tocschangeinvoicerequest"></a>

```json
{
  "observation": "string (optional)",
  "paymentLink": "string (URL) (optional)",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|observation|string|true|none|none|
|paymentLink|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_ChangecreditlimitofanAccountRequest">ChangecreditlimitofanAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangecreditlimitofanaccountrequest"></a>
<a id="schema_ChangecreditlimitofanAccountRequest"></a>
<a id="tocSchangecreditlimitofanaccountrequest"></a>
<a id="tocschangecreditlimitofanaccountrequest"></a>

```json
{
  "value": 10000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|true|none|none|

<h2 id="tocS_ChangetoleranceofanaccountRequest">ChangetoleranceofanaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangetoleranceofanaccountrequest"></a>
<a id="schema_ChangetoleranceofanaccountRequest"></a>
<a id="tocSchangetoleranceofanaccountrequest"></a>
<a id="tocschangetoleranceofanaccountrequest"></a>

```json
{
  "value": 0.2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number|true|none|none|

<h2 id="tocS_Claims">Claims</h2>
<!-- backwards compatibility -->
<a id="schemaclaims"></a>
<a id="schema_Claims"></a>
<a id="tocSclaims"></a>
<a id="tocsclaims"></a>

```json
{
  "email": "USER-EMAIL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|

<h2 id="tocS_CloseanAccountRequest">CloseanAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloseanaccountrequest"></a>
<a id="schema_CloseanAccountRequest"></a>
<a id="tocScloseanaccountrequest"></a>
<a id="tocscloseanaccountrequest"></a>

```json
{
  "document": "number",
  "documentType": "CPF ou CNPJ ou Other",
  "email": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|none|
|documentType|string|true|none|none|
|email|string|true|none|none|

<h2 id="tocS_CreateaPreAuthorizationRequest">CreateaPreAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapreauthorizationrequest"></a>
<a id="schema_CreateaPreAuthorizationRequest"></a>
<a id="tocScreateapreauthorizationrequest"></a>
<a id="tocscreateapreauthorizationrequest"></a>

```json
{
  "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
  "installments": "integer (optional default is 1)",
  "settle": false,
  "value": "decimal (required)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string|true|none|none|
|installments|string|true|none|none|
|settle|boolean|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_CreateaPreAuthorizationUsingidRequest">CreateaPreAuthorizationUsingidRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapreauthorizationusingidrequest"></a>
<a id="schema_CreateaPreAuthorizationUsingidRequest"></a>
<a id="tocScreateapreauthorizationusingidrequest"></a>
<a id="tocscreateapreauthorizationusingidrequest"></a>

```json
{
  "expirationDate": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
  "installments": "integer (optional default is 1)",
  "settle": false,
  "value": "decimal (required)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string|true|none|none|
|installments|string|true|none|none|
|settle|boolean|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_CreateorUpdateSettlementRequest">CreateorUpdateSettlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdatesettlementrequest"></a>
<a id="schema_CreateorUpdateSettlementRequest"></a>
<a id="tocScreateorupdatesettlementrequest"></a>
<a id="tocscreateorupdatesettlementrequest"></a>

```json
{
  "value": "decimal (required)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_CreateorchangestoreconfigurationRequest">CreateorchangestoreconfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorchangestoreconfigurationrequest"></a>
<a id="schema_CreateorchangestoreconfigurationRequest"></a>
<a id="tocScreateorchangestoreconfigurationrequest"></a>
<a id="tocscreateorchangestoreconfigurationrequest"></a>

```json
{
  "automaticCheckingAccountCreationEnabled": false,
  "dailyInterestRate": "number(percent 0.1=10%) (float)",
  "defaultCreditValue": "number (decimal)",
  "invoicePostponementLimit": "number (int)",
  "maxPostponementDays": "number (int",
  "maxPreAuthorizationGrowthRate": "number (percent 0.1=10%) (float)",
  "myCreditsEnabled": false,
  "postponementEnabled": false,
  "taxRate": "number(percent 0.1=10%) (float)",
  "toleranceEnabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticCheckingAccountCreationEnabled|boolean|true|none|none|
|dailyInterestRate|string|true|none|none|
|defaultCreditValue|string|true|none|none|
|invoicePostponementLimit|string|true|none|none|
|maxPostponementDays|string|true|none|none|
|maxPreAuthorizationGrowthRate|string|true|none|none|
|myCreditsEnabled|boolean|true|none|none|
|postponementEnabled|boolean|true|none|none|
|taxRate|string|true|none|none|
|toleranceEnabled|boolean|true|none|none|

<h2 id="tocS_Datum">Datum</h2>
<!-- backwards compatibility -->
<a id="schemadatum"></a>
<a id="schema_Datum"></a>
<a id="tocSdatum"></a>
<a id="tocsdatum"></a>

```json
{
  "checkingAccountId": "14443385797_CPF",
  "createdAt": "2017-06-19T01:53:54",
  "description": "Invoice from debit of 100M. Installment 1/1",
  "dueDate": "2017-07-27T05:58:24",
  "id": "ce02c68b2b584d5ba15a63bc485d43f1",
  "observation": "",
  "originalDueDate": "2017-07-27T05:58:24",
  "paymentLink": "",
  "status": "Paid",
  "updatedAt": "2017-06-27T05:58:24",
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkingAccountId|string|true|none|none|
|createdAt|string|true|none|none|
|description|string|true|none|none|
|dueDate|string|true|none|none|
|id|string|true|none|none|
|observation|string \| null|true|none|none|
|originalDueDate|string|true|none|none|
|paymentLink|string \| null|true|none|none|
|status|string|true|none|none|
|updatedAt|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Datum1">Datum1</h2>
<!-- backwards compatibility -->
<a id="schemadatum1"></a>
<a id="schema_Datum1"></a>
<a id="tocSdatum1"></a>
<a id="tocsdatum1"></a>

```json
{
  "checkingAccountId": "12345677811_CPF",
  "createdAt": "2017-07-06T01:57:58",
  "description": "Invoice from debit of 240.0M. Installment 1/1",
  "dueDate": "2017-08-05T01:57:58",
  "id": "f9a056cb63f5417fb900ed5128bc1b15",
  "observation": "",
  "originalDueDate": "2017-08-05T01:57:58",
  "paymentLink": "",
  "status": "Opened",
  "updatedAt": "2017-07-06T01:57:58",
  "value": 240
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkingAccountId|string|true|none|none|
|createdAt|string|true|none|none|
|description|string|true|none|none|
|dueDate|string|true|none|none|
|id|string|true|none|none|
|observation|string|true|none|none|
|originalDueDate|string|true|none|none|
|paymentLink|string|true|none|none|
|status|string|true|none|none|
|updatedAt|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Datum2">Datum2</h2>
<!-- backwards compatibility -->
<a id="schemadatum2"></a>
<a id="schema_Datum2"></a>
<a id="tocSdatum2"></a>
<a id="tocsdatum2"></a>

```json
{
  "account": "ambienteqa",
  "balance": 220,
  "creditLimit": 240,
  "description": "",
  "document": "12345677811",
  "documentType": "CPF",
  "email": "test@test.com",
  "lastUpdate": "2017-07-06T01:57:39.4317119Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|none|
|balance|number|true|none|none|
|creditLimit|number|true|none|none|
|description|string|true|none|none|
|document|string|true|none|none|
|documentType|string|true|none|none|
|email|string|true|none|none|
|lastUpdate|string|true|none|none|

<h2 id="tocS_DecreasebalanceofanaccountRequest">DecreasebalanceofanaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecreasebalanceofanaccountrequest"></a>
<a id="schema_DecreasebalanceofanaccountRequest"></a>
<a id="tocSdecreasebalanceofanaccountrequest"></a>
<a id="tocsdecreasebalanceofanaccountrequest"></a>

```json
{
  "value": "-number"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_Getaccount">Getaccount</h2>
<!-- backwards compatibility -->
<a id="schemagetaccount"></a>
<a id="schema_Getaccount"></a>
<a id="tocSgetaccount"></a>
<a id="tocsgetaccount"></a>

```json
{
  "account": "ambienteqa",
  "balance": 220,
  "creditLimit": 240,
  "description": "",
  "email": "test@test.com",
  "lastUpdate": "2017-07-06T01:57:39.4317119Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|none|
|balance|number|true|none|none|
|creditLimit|number|true|none|none|
|description|string|true|none|none|
|email|string|true|none|none|
|lastUpdate|string|true|none|none|

<h2 id="tocS_Getinvoicesfromacheckingaccount">Getinvoicesfromacheckingaccount</h2>
<!-- backwards compatibility -->
<a id="schemagetinvoicesfromacheckingaccount"></a>
<a id="schema_Getinvoicesfromacheckingaccount"></a>
<a id="tocSgetinvoicesfromacheckingaccount"></a>
<a id="tocsgetinvoicesfromacheckingaccount"></a>

```json
{
  "data": [
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:57:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "f9a056cb63f5417fb900ed5128bc1b15",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:57:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "ae45d73bfe534325bc6cfef3521d675c",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:45:40",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:57:58",
      "id": "8b984881a6934a06b65ab679c3b6641b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:57:58",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:57:58",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:44:49",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:44:51",
      "id": "c19d55551ac84e2d84c5b60f53c77daa",
      "observation": "",
      "originalDueDate": "2017-08-05T01:44:51",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:44:52",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:40:02",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:40:03",
      "id": "b588919ac65a4bc58bc1b87957ca136a",
      "observation": "",
      "originalDueDate": "2017-08-05T01:40:03",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:40:03",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:39:17",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:39:19",
      "id": "fabb9ae209cb4c50ac048ab72363d488",
      "observation": "",
      "originalDueDate": "2017-08-05T01:39:19",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:39:20",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:38:15",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:38:17",
      "id": "bc4e409f1490495b8dc351e2f93ac766",
      "observation": "",
      "originalDueDate": "2017-08-05T01:38:17",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:38:18",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:37:35",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:37:38",
      "id": "b23eb606d9054e29a789745c1473d123",
      "observation": "",
      "originalDueDate": "2017-08-05T01:37:38",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:37:38",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:36:25",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:36:29",
      "id": "2f67b460ca0742118d5eadd7d3752480",
      "observation": "",
      "originalDueDate": "2017-08-05T01:36:29",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:36:30",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:35:18",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:35:21",
      "id": "36102b1baec74904a80dcc6baf8dd5e7",
      "observation": "",
      "originalDueDate": "2017-08-05T01:35:21",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:35:22",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:31:31",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:31:32",
      "id": "2166d1d0b35a4ece826fac580652348b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:31:32",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:31:32",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:30:18",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:30:20",
      "id": "4d7ae513368a425db3c0c567fa2e9704",
      "observation": "",
      "originalDueDate": "2017-08-05T01:30:20",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:30:21",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:29:32",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:29:34",
      "id": "98332e38da024e269670bf6a5fce24ca",
      "observation": "",
      "originalDueDate": "2017-08-05T01:29:34",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:29:35",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:28:58",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:29:00",
      "id": "f2caa32762f14961895f93ddd1eb66cb",
      "observation": "",
      "originalDueDate": "2017-08-05T01:29:00",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:29:01",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:19:14",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:19:15",
      "id": "c44a7c0d2d944fe1bffc59b79ffdb214",
      "observation": "",
      "originalDueDate": "2017-08-05T01:19:15",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:19:15",
      "value": 240
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:18:25",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:18:28",
      "id": "f5c4725b549e4e77bfbf69f9ec6b5f44",
      "observation": "",
      "originalDueDate": "2017-08-05T01:18:28",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:18:29",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:17:34",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:17:37",
      "id": "76054911732743e3b011a36fdf99ac9b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:17:37",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:17:38",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:16:54",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:16:57",
      "id": "d5d5bc644d9e4068bb108bcca420343b",
      "observation": "",
      "originalDueDate": "2017-08-05T01:16:57",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:16:58",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:16:14",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:16:17",
      "id": "c8de1d1b4f144a8bbb339f2a1c873c7e",
      "observation": "",
      "originalDueDate": "2017-08-05T01:16:17",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:16:18",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:14:40",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:14:43",
      "id": "a84cc2c91ee048c2bcf94b3214af31b2",
      "observation": "",
      "originalDueDate": "2017-08-05T01:14:43",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:14:43",
      "value": 20
    },
    {
      "checkingAccountId": "12345677811_CPF",
      "createdAt": "2017-07-06T01:13:22",
      "description": "Invoice from debit of 240.0M. Installment 1/1",
      "dueDate": "2017-08-05T01:13:23",
      "id": "3bf5ea95cb75465e80ea8c0f16cbc4d2",
      "observation": "",
      "originalDueDate": "2017-08-05T01:13:23",
      "paymentLink": "",
      "status": "Opened",
      "updatedAt": "2017-07-06T01:13:23",
      "value": 240
    }
  ],
  "summary": {
    "count": 194,
    "total": 1740
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|summary|object|true|none|none|

<h2 id="tocS_IncreasebalanceofanaccountRequest">IncreasebalanceofanaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaincreasebalanceofanaccountrequest"></a>
<a id="schema_IncreasebalanceofanaccountRequest"></a>
<a id="tocSincreasebalanceofanaccountrequest"></a>
<a id="tocsincreasebalanceofanaccountrequest"></a>

```json
{
  "value": "number"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_MarkaninvoiceasPaidRequest">MarkaninvoiceasPaidRequest</h2>
<!-- backwards compatibility -->
<a id="schemamarkaninvoiceaspaidrequest"></a>
<a id="schema_MarkaninvoiceasPaidRequest"></a>
<a id="tocSmarkaninvoiceaspaidrequest"></a>
<a id="tocsmarkaninvoiceaspaidrequest"></a>

```json
{
  "value": "number (FULL invoice value [deprecated])"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_OpenanAccountRequest">OpenanAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopenanaccountrequest"></a>
<a id="schema_OpenanAccountRequest"></a>
<a id="tocSopenanaccountrequest"></a>
<a id="tocsopenanaccountrequest"></a>

```json
{
  "creditLimit": "number",
  "description": "description",
  "document": "number",
  "documentType": "CPF ou CNPJ ou Other",
  "email": "email",
  "tolerance": "1 is 100%"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditLimit|string|true|none|none|
|description|string|true|none|none|
|document|string|true|none|none|
|documentType|string|true|none|none|
|email|string|true|none|none|
|tolerance|string|true|none|none|

<h2 id="tocS_OpenorChangeAccountRequest">OpenorChangeAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopenorchangeaccountrequest"></a>
<a id="schema_OpenorChangeAccountRequest"></a>
<a id="tocSopenorchangeaccountrequest"></a>
<a id="tocsopenorchangeaccountrequest"></a>

```json
{
  "creditLimit": "number",
  "email": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditLimit|string|true|none|none|
|email|string|true|none|none|

<h2 id="tocS_Paidinvoices">Paidinvoices</h2>
<!-- backwards compatibility -->
<a id="schemapaidinvoices"></a>
<a id="schema_Paidinvoices"></a>
<a id="tocSpaidinvoices"></a>
<a id="tocspaidinvoices"></a>

```json
{
  "data": [
    {
      "checkingAccountId": "14443385797_CPF",
      "createdAt": "2017-06-19T01:53:54",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-07-27T05:58:24",
      "id": "ce02c68b2b584d5ba15a63bc485d43f1",
      "observation": "",
      "originalDueDate": "2017-07-27T05:58:24",
      "paymentLink": "",
      "status": "Paid",
      "updatedAt": "2017-06-27T05:58:24",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:42",
      "id": "11ff8f52407047c2966649c3484285bd",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:42",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:30",
      "id": "2828a856363a4f82b3f5c18b3ef09620",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:30",
      "value": 100
    },
    {
      "checkingAccountId": "06100326744_CPF",
      "createdAt": "2017-04-27T01:48:27",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-27T07:58:52",
      "id": "06c8f6160f7a4a50ae43c26a37fe1946",
      "observation": "",
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-27T07:58:52",
      "value": 100
    },
    {
      "checkingAccountId": "14443385797_CPF",
      "createdAt": "2017-04-11T04:50:34",
      "description": "Invoice from debit of 100M. Installment 1/1",
      "dueDate": "2017-05-11T05:26:07",
      "id": "105e79997fbe452ba33ffa69b408f9bf",
      "observation": null,
      "originalDueDate": "",
      "paymentLink": null,
      "status": "Paid",
      "updatedAt": "2017-04-11T05:26:07",
      "value": 100
    }
  ],
  "summary": {
    "count": 5,
    "total": 500
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|summary|object|true|none|none|

<h2 id="tocS_PartialorTotalRefundaSettlementRequest">PartialorTotalRefundaSettlementRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartialortotalrefundasettlementrequest"></a>
<a id="schema_PartialorTotalRefundaSettlementRequest"></a>
<a id="tocSpartialortotalrefundasettlementrequest"></a>
<a id="tocspartialortotalrefundasettlementrequest"></a>

```json
{
  "value": "decimal (required)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_PostponeaninvoiceRequest">PostponeaninvoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostponeaninvoicerequest"></a>
<a id="schema_PostponeaninvoiceRequest"></a>
<a id="tocSpostponeaninvoicerequest"></a>
<a id="tocspostponeaninvoicerequest"></a>

```json
{
  "dueDays": "number (integer)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dueDays|string|true|none|none|

<h2 id="tocS_Retrievedinvoice">Retrievedinvoice</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedinvoice"></a>
<a id="schema_Retrievedinvoice"></a>
<a id="tocSretrievedinvoice"></a>
<a id="tocsretrievedinvoice"></a>

```json
{
  "checkingAccountId": "76655291437_CPF",
  "createdAt": "2017-07-12T08:53:04",
  "description": "Invoice issued from a API call",
  "dueDate": "2017-07-27T08:53:04",
  "id": "029f4009-ac4b-4739-8644-50df050f34ca",
  "observation": "Some observation about the invoice",
  "originalDueDate": "2017-07-27T08:53:04",
  "paymentLink": "http://foo.bar",
  "status": "Opened",
  "updatedAt": "2017-07-12T08:53:04",
  "value": 50
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkingAccountId|string|true|none|none|
|createdAt|string|true|none|none|
|description|string|true|none|none|
|dueDate|string|true|none|none|
|id|string|true|none|none|
|observation|string|true|none|none|
|originalDueDate|string|true|none|none|
|paymentLink|string|true|none|none|
|status|string|true|none|none|
|updatedAt|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Savestoreconfig">Savestoreconfig</h2>
<!-- backwards compatibility -->
<a id="schemasavestoreconfig"></a>
<a id="schema_Savestoreconfig"></a>
<a id="tocSsavestoreconfig"></a>
<a id="tocssavestoreconfig"></a>

```json
{
  "dailyInterestRate": 0.2,
  "invoicePostponementLimit": 2,
  "taxRate": 0.4,
  "tolerancePercent": 0.35
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyInterestRate|number|true|none|none|
|invoicePostponementLimit|integer(int32)|true|none|none|
|taxRate|number|true|none|none|
|tolerancePercent|number|true|none|none|

<h2 id="tocS_Searchaccounts">Searchaccounts</h2>
<!-- backwards compatibility -->
<a id="schemasearchaccounts"></a>
<a id="schema_Searchaccounts"></a>
<a id="tocSsearchaccounts"></a>
<a id="tocssearchaccounts"></a>

```json
{
  "data": [
    {
      "account": "ambienteqa",
      "balance": 220,
      "creditLimit": 240,
      "description": "",
      "document": "12345677811",
      "documentType": "CPF",
      "email": "test@test.com",
      "lastUpdate": "2017-07-06T01:57:39.4317119Z"
    }
  ],
  "summary": {
    "count": 39
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|summary|object|true|none|none|

<h2 id="tocS_Searchcheckingaccounts">Searchcheckingaccounts</h2>
<!-- backwards compatibility -->
<a id="schemasearchcheckingaccounts"></a>
<a id="schema_Searchcheckingaccounts"></a>
<a id="tocSsearchcheckingaccounts"></a>
<a id="tocssearchcheckingaccounts"></a>

```json
{
  "data": [
    {
      "account": "ambienteqa",
      "balance": 220,
      "creditLimit": 240,
      "description": "",
      "document": "12345677811",
      "documentType": "CPF",
      "email": "test@test.com",
      "lastUpdate": "2017-07-06T01:57:39.4317119Z"
    }
  ],
  "summary": {
    "count": 39
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|summary|object|true|none|none|

<h2 id="tocS_Statements">Statements</h2>
<!-- backwards compatibility -->
<a id="schemastatements"></a>
<a id="schema_Statements"></a>
<a id="tocSstatements"></a>
<a id="tocsstatements"></a>

```json
{
  "currentBalance": 0,
  "intervalBalance": 0,
  "previousBalance": 0,
  "statements": [
    {
      "date": "2017-07-03T16:47:19.4578611Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:47:19.6678789Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:47:20.118935Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:47:20.4899776Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:52:00.9443838Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:52:01.2514187Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:52:01.671466Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:52:01.9424961Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:54:40.0782046Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:54:40.3252276Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:54:40.6552638Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:54:40.8932962Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:55:57.197841Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:55:57.5278732Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:55:57.9019147Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:55:58.1179392Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:11.8426054Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:13.8889672Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:16.5197295Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:18.3509528Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:18.7869726Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:19.0240035Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T16:57:19.3770378Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T16:57:19.7050818Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:07:15.8348399Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:07:16.1788809Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:07:16.5469147Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:07:16.7959479Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:33.0252059Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:33.5372179Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:34.1453238Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:34.468359Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:53.1504362Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:09:55.3629113Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T17:09:58.6401036Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T17:10:00.782546Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:49:22.3349339Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:49:22.6879717Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:49:23.0600071Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:49:23.3570469Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:57:01.460345Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:57:02.2444344Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T18:57:02.6094762Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T18:57:03.0085156Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T19:01:09.3831094Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T19:01:09.7391531Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T19:01:10.3811954Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T19:01:13.7475991Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T20:48:39.1243969Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T20:48:39.6534554Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T20:48:39.976498Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T20:48:40.2195183Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:43:36.8709735Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:43:39.3015912Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:43:42.4497005Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:43:45.0294261Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:52:42.0202602Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:52:44.2187306Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T21:52:47.6370182Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T21:52:49.6223473Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:00:43.7004457Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:00:45.8558835Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:00:48.8719015Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:00:50.9332797Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:06:14.2397182Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:06:14.8247757Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:06:15.3018042Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:06:15.5878612Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:13:11.2934159Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:13:11.6004563Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:13:13.677688Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:13:13.9407125Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:24:18.0640865Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:24:18.3391219Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-03T22:24:18.7501665Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-03T22:24:19.0612052Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:35:32.4265204Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:35:32.670556Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:35:33.0035923Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:35:33.2296111Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:43:18.0936755Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:43:18.5677311Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:43:19.0377821Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:43:19.3078114Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:46:24.2995291Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:46:24.5415575Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T13:46:25.1666258Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T13:46:25.3926527Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T15:10:11.6542275Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T15:10:25.101228Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T15:10:46.4925416Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T15:10:53.5622728Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T16:47:02.1152214Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T16:47:02.4332644Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T16:47:02.9263133Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T16:47:03.2213519Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:15:05.4888997Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:15:06.0669661Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:15:06.6290272Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:15:07.0140703Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:29:04.8128943Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:29:05.1829369Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-04T18:29:05.7749947Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-04T18:29:06.0640335Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:15:29.5981555Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:15:29.8481897Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:15:30.2942391Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:15:30.5592684Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:44:37.2988823Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:44:37.851942Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T17:44:38.3920041Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T17:44:38.7030381Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:09:37.3571808Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:09:37.72222Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:09:38.0552519Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:09:38.2922837Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:20:18.4320323Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:20:21.3519865Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:20:24.16387Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:20:25.8389893Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:22:52.2991989Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:22:52.5682339Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:22:53.0962861Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:22:53.6013417Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:24:44.309999Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:24:46.5064706Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T20:24:49.6956032Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T20:24:51.4547805Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T21:14:17.4331001Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T21:14:30.1921448Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T22:20:16.0386883Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T22:20:25.5770708Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-05T23:59:03.2527657Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T23:59:08.3266609Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-05T23:59:16.9109105Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-05T23:59:22.5296797Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T01:57:44.2482508Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T01:57:44.5012788Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T01:57:45.2343532Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T01:57:45.5723968Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:22:00.5618842Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:05.5812446Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:22:13.7547136Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:16.3029568Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:17.7061162Z",
      "description": "Credits emptied",
      "value": -20000
    },
    {
      "date": "2017-07-06T14:22:20.5444338Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:22:21.0144862Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:32:59.6762693Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:07.7819136Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:08.2790261Z",
      "description": "Credits emptied",
      "value": -20000
    },
    {
      "date": "2017-07-06T14:33:08.3789839Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-06T14:33:09.0970636Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:09.5591087Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:33:20.0709176Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:33:27.9481914Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:39:44.5993553Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:39:44.8493768Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T14:39:45.4174464Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T14:39:45.8154911Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:02:28.6075704Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:02:28.9126055Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:02:29.361656Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:02:29.6296853Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:14:48.6134384Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:14:48.937473Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:14:51.6977841Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:14:52.0238222Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:58:40.45117Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:58:40.7472093Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T18:58:41.1442492Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T18:58:41.7183119Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:10:20.391709Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:10:20.6657389Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:10:21.3558225Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:10:21.6258492Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:11:48.5505811Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:11:49.0886414Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-06T20:11:49.797721Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-06T20:11:50.1477661Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T02:33:28.0860427Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T02:33:28.4040771Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T02:33:28.9461381Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T02:33:29.3731885Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T03:19:29.0522439Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T03:19:29.3802781Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-07T03:19:29.8033262Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-07T03:19:30.1083606Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:38:32.0646398Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:38:38.5399737Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:38:52.0400096Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:38:59.0326902Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:46:39.5442819Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:46:39.8743121Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:46:40.8354262Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:46:41.1404609Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:53:23.68054Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:53:23.9735672Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T16:53:24.4196165Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T16:53:24.7606614Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T17:02:28.3755391Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T17:02:28.7075311Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-09T17:02:30.9268213Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-09T17:02:31.4268761Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:31:13.8141713Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:31:14.1722149Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:31:14.7582781Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:31:15.008306Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:36:12.620413Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:36:15.3802583Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:36:20.0483828Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:36:22.3108969Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:39:13.5468917Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:39:14.0169506Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:39:14.4700013Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:39:14.7320264Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:48:49.3203773Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:48:49.6554153Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T15:48:50.2114767Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T15:48:50.5725163Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:01:48.7536577Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:01:49.0086875Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:01:49.3867329Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:01:49.720771Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:21:56.4849081Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:21:56.7768944Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T16:21:57.420015Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T16:21:57.7600564Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:44:22.3239425Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:44:22.6069739Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:44:23.0380212Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:44:23.7830985Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:46:15.7306413Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:46:16.0676798Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T18:46:16.7557547Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-10T18:46:17.0717915Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-10T20:46:09.0601995Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:46:09.7432736Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:59:50.5891534Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T20:59:51.1332589Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T21:50:23.5218551Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-10T21:50:24.1779278Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T14:33:29.5236904Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T14:33:30.0347475Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:09:06.1221118Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:09:06.6011653Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:11:55.696109Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T16:11:56.2121659Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T16:11:56.8692618Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T16:11:57.1562724Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T16:19:51.1613469Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T16:19:51.5924019Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:08:27.2440987Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:31:27.2874184Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:38:25.7778188Z",
      "description": "Credited",
      "value": 1
    },
    {
      "date": "2017-07-11T17:38:47.9508788Z",
      "description": "Decrease credits",
      "value": -1
    },
    {
      "date": "2017-07-11T17:40:23.1954791Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T17:42:40.0572365Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T17:44:01.6719325Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:45:45.1352607Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:46:26.9859192Z",
      "description": "Credits emptied",
      "value": 0
    },
    {
      "date": "2017-07-11T17:52:50.7294541Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T17:52:55.3262378Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:01:50.9566941Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:01:51.27073Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:01:51.8287917Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:01:52.13982Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:23:21.8592583Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:23:22.202299Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T18:23:22.6883482Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T18:23:23.0293898Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:39:37.8348611Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:39:38.2699106Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:39:38.7839661Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:39:39.1620082Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:53:39.9211228Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:53:40.8032621Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T20:53:41.3593193Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T20:53:41.7023675Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T21:49:07.6918338Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T21:49:08.0898827Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T21:49:09.7340616Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T21:49:10.298129Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T22:13:29.121493Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T22:13:29.7035615Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-11T22:13:31.0747185Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-11T22:13:31.3367462Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-12T15:19:01.7803787Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-12T15:19:02.2223874Z",
      "description": "Credits emptied",
      "value": -10000
    },
    {
      "date": "2017-07-12T15:19:02.7854971Z",
      "description": "Credited",
      "value": 10000
    },
    {
      "date": "2017-07-12T15:19:03.3115534Z",
      "description": "Credits emptied",
      "value": -10000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBalance|number|true|none|none|
|intervalBalance|number|true|none|none|
|previousBalance|number|true|none|none|
|statements|[object]|true|none|none|

<h2 id="tocS_Statements1">Statements1</h2>
<!-- backwards compatibility -->
<a id="schemastatements1"></a>
<a id="schema_Statements1"></a>
<a id="tocSstatements1"></a>
<a id="tocsstatements1"></a>

```json
{
  "date": "2017-07-03T16:47:19.4578611Z",
  "description": "Credited",
  "value": 10000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|description|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Storeconfig">Storeconfig</h2>
<!-- backwards compatibility -->
<a id="schemastoreconfig"></a>
<a id="schema_Storeconfig"></a>
<a id="tocSstoreconfig"></a>
<a id="tocsstoreconfig"></a>

```json
{
  "dailyInterestRate": 0,
  "invoicePostponementLimit": 0,
  "taxRate": 0,
  "tolerancePercent": 0.7
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyInterestRate|number|true|none|none|
|invoicePostponementLimit|integer(int32)|true|none|none|
|taxRate|number|true|none|none|
|tolerancePercent|number|true|none|none|

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "count": 5,
  "total": 500
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|none|
|total|number|true|none|none|

<h2 id="tocS_Summary2">Summary2</h2>
<!-- backwards compatibility -->
<a id="schemasummary2"></a>
<a id="schema_Summary2"></a>
<a id="tocSsummary2"></a>
<a id="tocssummary2"></a>

```json
{
  "count": 39
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|none|

<h2 id="tocS_Thisoperation">Thisoperation</h2>
<!-- backwards compatibility -->
<a id="schemathisoperation"></a>
<a id="schema_Thisoperation"></a>
<a id="tocSthisoperation"></a>
<a id="tocsthisoperation"></a>

```json
{
  "id": "d7d135000a8347ec8b0a0f9edceccefd",
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_UpdateemailanddescriptionofaaccountRequest">UpdateemailanddescriptionofaaccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailanddescriptionofaaccountrequest"></a>
<a id="schema_UpdateemailanddescriptionofaaccountRequest"></a>
<a id="tocSupdateemailanddescriptionofaaccountrequest"></a>
<a id="tocsupdateemailanddescriptionofaaccountrequest"></a>

```json
{
  "description": "string",
  "email": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|email|string|true|none|none|
