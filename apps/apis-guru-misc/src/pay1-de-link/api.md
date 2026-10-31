<h1 id="payone-link-api">PAYONE Link API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://onelink.pay1.de/api">https://onelink.pay1.de/api</a> - PAYONE Link API server url

Email: <a href="mailto:info@payone.com">info@payone.com</a> 
Web: <a href="https://www.payone.com/kontakt/">https://www.payone.com/kontakt/</a> 

<a href="https://docs.payone.com/display/PLATFORM/Channel+PAYONE+Link">Find more info here</a>

# Authentication

- HTTP Authentication, scheme: payone-hmac-sha256 Base64 encoded (merchantId + accountId + portalId + mode + reference + totalAmount + currency) signed with Portalkey in HmacSHA256

- HTTP Authentication, scheme: payone-hmac-sha256 Base64 encoded (merchantId + accountId + portalId + mode) signed with Portalkey in HmacSHA256

- HTTP Authentication, scheme: payone-hmac-sha256 Base64 encoded linkId signed with Portalkey in HmacSHA256

<h1 id="payone-link-api-link-management">Link Management</h1>

Endpoints intended for server-to-server communication.

## List all payment links.

<a id="opIdgetPaymentLinks"></a>

> Code samples

```bash
curl 'https://example.com/v1/payment-links?merchantId=string&accountId=string&portalId=string&mode=string' \
  -H 'Accept: application/json'
```

`GET /v1/payment-links`

<h3 id="list-all-payment-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|
|merchantId|query|string|true|none|
|accountId|query|string|true|none|
|portalId|query|string|true|none|
|mode|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountId": "12345",
      "active": true,
      "amount": 799,
      "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
      "billing": {
        "addressAddition": "7th floor",
        "city": "Kiel",
        "company": "PAYONE GmbH",
        "country": "DE",
        "firstName": "John",
        "lastName": "Doe",
        "state": "st",
        "street": "Fraunhoferstr. 2-4",
        "zip": "24118"
      },
      "created": 0,
      "currency": "EUR",
      "description": "This payment is awesome!!",
      "email": "string",
      "errorUrl": "string",
      "expiration": "2020-02-20",
      "hash": "a42847abb8bfca62876ca64c0fa981f8",
      "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
      "intent": "authorization",
      "invoiceInformation": {
        "invoiceId": "string",
        "invoiceText": "string"
      },
      "language": "en_US",
      "link": "string",
      "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
      "merchantId": "12345",
      "mode": "live",
      "modified": 0,
      "notifyUrl": "string",
      "paymentMethod": "visa",
      "paymentMethods": [
        "visa",
        "mastercard"
      ],
      "paymentProcess": "347867997",
      "portalId": "1234567",
      "redirectUrl": "string",
      "reference": "payment_1",
      "shipping": {
        "addressAddition": "7th floor",
        "city": "Kiel",
        "company": "PAYONE GmbH",
        "country": "DE",
        "firstName": "John",
        "lastName": "Doe",
        "state": "st",
        "street": "Fraunhoferstr. 2-4",
        "zip": "24118"
      },
      "shoppingCart": [
        {
          "deliveryDateEnd": "2021-01-01",
          "deliveryDateStart": "2021-01-01",
          "description": "Potatoes",
          "number": "73883HFJ",
          "price": 1999,
          "quantity": 1,
          "type": "goods",
          "vatRate": 20
        }
      ],
      "status": "ready",
      "successUrl": "string",
      "userId": "356845874"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-all-payment-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default response|[PageLinkResponse](#schemapagelinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
getMultipleAuth
</aside>

## Create a payment link.

<a id="opIdcreatePaymentLink"></a>

> Code samples

```bash
curl https://example.com/v1/payment-links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountId": "12345",
    "active": true,
    "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
    "billing": {
      "addressAddition": "7th floor",
      "city": "Kiel",
      "company": "PAYONE GmbH",
      "country": "DE",
      "firstName": "John",
      "lastName": "Doe",
      "state": "st",
      "street": "Fraunhoferstr. 2-4",
      "zip": "24118"
    },
    "currency": "EUR",
    "description": "This payment is awesome!!",
    "email": "string",
    "errorUrl": "string",
    "expiration": "2020-02-20",
    "intent": "authorization",
    "invoiceInformation": {
      "invoiceId": "string",
      "invoiceText": "string"
    },
    "language": "en_US",
    "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
    "merchantId": "12345",
    "mode": "live",
    "notifyUrl": "string",
    "paymentMethods": [
      "visa",
      "mastercard"
    ],
    "portalId": "1234567",
    "reference": "payment_1",
    "shipping": {
      "addressAddition": "7th floor",
      "city": "Kiel",
      "company": "PAYONE GmbH",
      "country": "DE",
      "firstName": "John",
      "lastName": "Doe",
      "state": "st",
      "street": "Fraunhoferstr. 2-4",
      "zip": "24118"
    },
    "shoppingCart": [
      {
        "deliveryDateEnd": "2021-01-01",
        "deliveryDateStart": "2021-01-01",
        "description": "Potatoes",
        "number": "73883HFJ",
        "price": 1999,
        "quantity": 1,
        "type": "goods",
        "vatRate": 20
      }
    ],
    "successUrl": "string",
    "userId": "12345678"
  }'
```

`POST /v1/payment-links`

> Body parameter

```json
{
  "accountId": "12345",
  "active": true,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "notifyUrl": "string",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "portalId": "1234567",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "successUrl": "string",
  "userId": "12345678"
}
```

<h3 id="create-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LinkCreateRequest](#schemalinkcreaterequest)|false|none|
|» accountId|body|string|true|identifier for the subaccount|
|» active|body|boolean|false|link activation status|
|» backgroundImage|body|string(css)|false|backgroundImage css property|
|» billing|body|[AddressDataDto](#schemaaddressdatadto)|false|none|
|» currency|body|string|true|currency code|
|» description|body|string|false|free format description of the payment|
|» email|body|string|false|email the invoice should be delivered to|
|» errorUrl|body|string|false|final redirect after a final payment|
|» expiration|body|string(date)|false|link expiration date, the link will only be executable until end of that day|
|» intent|body|string|false|designates the type of transaction that will be created|
|» invoiceInformation|body|[InvoiceInformationDto](#schemainvoiceinformationdto)|false|relevant information for the invoice module|
|» language|body|string|false|link ISO language code|
|» logo|body|string(url)|false|logo url|
|» merchantId|body|string|true|identifier for the merchant|
|» mode|body|string|true|execution mode|
|» notifyUrl|body|string|false|Url where the notification will be send after link was executed|
|» paymentMethods|body|[string]|false|list of available payment methods|
|» portalId|body|string|true|identifier for the portal|
|» reference|body|string|true|payment reference number, has to be unique per merchant and mode|
|» shipping|body|[AddressDataDto](#schemaaddressdatadto)|false|none|
|» shoppingCart|body|[[CartItemDto](#schemacartitemdto)]|true|none|
|» successUrl|body|string|false|final redirect after a successful payment|
|» userId|body|string|false|identifier for the user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|ALL|
|» currency|DZD|
|» currency|ARS|
|» currency|AUD|
|» currency|BSD|
|» currency|BHD|
|» currency|BDT|
|» currency|AMD|
|» currency|BBD|
|» currency|BMD|
|» currency|BTN|
|» currency|BOB|
|» currency|BWP|
|» currency|BZD|
|» currency|SBD|
|» currency|BND|
|» currency|MMK|
|» currency|BIF|
|» currency|KHR|
|» currency|CAD|
|» currency|CVE|
|» currency|KYD|
|» currency|LKR|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|KMF|
|» currency|CRC|
|» currency|HRK|
|» currency|CUP|
|» currency|CZK|
|» currency|DKK|
|» currency|DOP|
|» currency|SVC|
|» currency|ETB|
|» currency|ERN|
|» currency|FKP|
|» currency|FJD|
|» currency|DJF|
|» currency|GMD|
|» currency|GIP|
|» currency|GTQ|
|» currency|GNF|
|» currency|GYD|
|» currency|HTG|
|» currency|HNL|
|» currency|HKD|
|» currency|HUF|
|» currency|ISK|
|» currency|INR|
|» currency|IDR|
|» currency|IRR|
|» currency|IQD|
|» currency|ILS|
|» currency|JMD|
|» currency|JPY|
|» currency|KZT|
|» currency|JOD|
|» currency|KES|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KGS|
|» currency|LAK|
|» currency|LBP|
|» currency|LSL|
|» currency|LRD|
|» currency|LYD|
|» currency|MOP|
|» currency|MWK|
|» currency|MYR|
|» currency|MVR|
|» currency|MUR|
|» currency|MXN|
|» currency|MNT|
|» currency|MDL|
|» currency|MAD|
|» currency|OMR|
|» currency|NAD|
|» currency|NPR|
|» currency|ANG|
|» currency|AWG|
|» currency|VUV|
|» currency|NZD|
|» currency|NIO|
|» currency|NGN|
|» currency|NOK|
|» currency|PKR|
|» currency|PAB|
|» currency|PGK|
|» currency|PYG|
|» currency|PEN|
|» currency|PHP|
|» currency|QAR|
|» currency|RUB|
|» currency|RWF|
|» currency|SHP|
|» currency|SAR|
|» currency|SCR|
|» currency|SLL|
|» currency|SGD|
|» currency|VND|
|» currency|SOS|
|» currency|ZAR|
|» currency|SSP|
|» currency|SZL|
|» currency|SEK|
|» currency|CHF|
|» currency|SYP|
|» currency|THB|
|» currency|TOP|
|» currency|TTD|
|» currency|AED|
|» currency|TND|
|» currency|UGX|
|» currency|MKD|
|» currency|EGP|
|» currency|GBP|
|» currency|TZS|
|» currency|USD|
|» currency|UYU|
|» currency|UZS|
|» currency|WST|
|» currency|YER|
|» currency|TWD|
|» currency|UYW|
|» currency|VES|
|» currency|MRU|
|» currency|STN|
|» currency|CUC|
|» currency|ZWL|
|» currency|BYN|
|» currency|TMT|
|» currency|GHS|
|» currency|SDG|
|» currency|UYI|
|» currency|RSD|
|» currency|MZN|
|» currency|AZN|
|» currency|RON|
|» currency|CHE|
|» currency|CHW|
|» currency|TRY|
|» currency|XAF|
|» currency|XCD|
|» currency|XOF|
|» currency|XPF|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XAU|
|» currency|XDR|
|» currency|XAG|
|» currency|XPT|
|» currency|XTS|
|» currency|XPD|
|» currency|XUA|
|» currency|ZMW|
|» currency|SRD|
|» currency|MGA|
|» currency|COU|
|» currency|AFN|
|» currency|TJS|
|» currency|AOA|
|» currency|BGN|
|» currency|CDF|
|» currency|BAM|
|» currency|EUR|
|» currency|MXV|
|» currency|UAH|
|» currency|GEL|
|» currency|BOV|
|» currency|PLN|
|» currency|BRL|
|» currency|CLF|
|» currency|XSU|
|» currency|USN|
|» intent|authorization|
|» intent|preauthorization|
|» language|de_DE|
|» language|en_US|
|» mode|live|
|» mode|test|
|» paymentMethods|visa|
|» paymentMethods|mastercard|
|» paymentMethods|amex|
|» paymentMethods|paypal|
|» paymentMethods|sofort|
|» paymentMethods|paydirekt|
|» paymentMethods|postfinance-e|
|» paymentMethods|postfinance-card|
|» paymentMethods|bancontact|
|» paymentMethods|przelewy24|
|» paymentMethods|alipay|
|» paymentMethods|ideal|
|» paymentMethods|eps|
|» paymentMethods|giropay|
|» paymentMethods|sepa|

> Example responses

> 200 Response

```json
{
  "accountId": "12345",
  "active": true,
  "amount": 799,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "created": 0,
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "hash": "a42847abb8bfca62876ca64c0fa981f8",
  "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "link": "string",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "modified": 0,
  "notifyUrl": "string",
  "paymentMethod": "visa",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "paymentProcess": "347867997",
  "portalId": "1234567",
  "redirectUrl": "string",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "status": "ready",
  "successUrl": "string",
  "userId": "356845874"
}
```

<h3 id="create-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default response|[LinkResponse](#schemalinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
createAuth
</aside>

## Get payment link by id.

<a id="opIdgetPaymentLink"></a>

> Code samples

```bash
curl https://example.com/v1/payment-links/string \
  -H 'Accept: application/json'
```

`GET /v1/payment-links/{linkId}`

<h3 id="get-payment-link-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accountId": "12345",
  "active": true,
  "amount": 799,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "created": 0,
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "hash": "a42847abb8bfca62876ca64c0fa981f8",
  "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "link": "string",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "modified": 0,
  "notifyUrl": "string",
  "paymentMethod": "visa",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "paymentProcess": "347867997",
  "portalId": "1234567",
  "redirectUrl": "string",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "status": "ready",
  "successUrl": "string",
  "userId": "356845874"
}
```

<h3 id="get-payment-link-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default response|[LinkResponse](#schemalinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
getSingleAuth
</aside>

## Update a payment link.

<a id="opIdupdatePaymentLink"></a>

> Code samples

```bash
curl https://example.com/v1/payment-links/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountId": "12345",
    "active": true,
    "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
    "billing": {
      "addressAddition": "7th floor",
      "city": "Kiel",
      "company": "PAYONE GmbH",
      "country": "DE",
      "firstName": "John",
      "lastName": "Doe",
      "state": "st",
      "street": "Fraunhoferstr. 2-4",
      "zip": "24118"
    },
    "currency": "EUR",
    "description": "This payment is awesome!!",
    "email": "string",
    "errorUrl": "string",
    "expiration": "2020-02-20",
    "intent": "authorization",
    "invoiceInformation": {
      "invoiceId": "string",
      "invoiceText": "string"
    },
    "language": "en_US",
    "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
    "merchantId": "12345",
    "mode": "live",
    "notifyUrl": "string",
    "paymentMethods": [
      "visa",
      "mastercard"
    ],
    "portalId": "1234567",
    "reference": "payment_1",
    "shipping": {
      "addressAddition": "7th floor",
      "city": "Kiel",
      "company": "PAYONE GmbH",
      "country": "DE",
      "firstName": "John",
      "lastName": "Doe",
      "state": "st",
      "street": "Fraunhoferstr. 2-4",
      "zip": "24118"
    },
    "shoppingCart": [
      {
        "deliveryDateEnd": "2021-01-01",
        "deliveryDateStart": "2021-01-01",
        "description": "Potatoes",
        "number": "73883HFJ",
        "price": 1999,
        "quantity": 1,
        "type": "goods",
        "vatRate": 20
      }
    ],
    "successUrl": "string",
    "userId": "12345678"
  }'
```

`PUT /v1/payment-links/{linkId}`

> Body parameter

```json
{
  "accountId": "12345",
  "active": true,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "notifyUrl": "string",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "portalId": "1234567",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "successUrl": "string",
  "userId": "12345678"
}
```

<h3 id="update-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkId|path|string|true|none|
|body|body|[LinkCreateRequest](#schemalinkcreaterequest)|false|none|
|» accountId|body|string|true|identifier for the subaccount|
|» active|body|boolean|false|link activation status|
|» backgroundImage|body|string(css)|false|backgroundImage css property|
|» billing|body|[AddressDataDto](#schemaaddressdatadto)|false|none|
|» currency|body|string|true|currency code|
|» description|body|string|false|free format description of the payment|
|» email|body|string|false|email the invoice should be delivered to|
|» errorUrl|body|string|false|final redirect after a final payment|
|» expiration|body|string(date)|false|link expiration date, the link will only be executable until end of that day|
|» intent|body|string|false|designates the type of transaction that will be created|
|» invoiceInformation|body|[InvoiceInformationDto](#schemainvoiceinformationdto)|false|relevant information for the invoice module|
|» language|body|string|false|link ISO language code|
|» logo|body|string(url)|false|logo url|
|» merchantId|body|string|true|identifier for the merchant|
|» mode|body|string|true|execution mode|
|» notifyUrl|body|string|false|Url where the notification will be send after link was executed|
|» paymentMethods|body|[string]|false|list of available payment methods|
|» portalId|body|string|true|identifier for the portal|
|» reference|body|string|true|payment reference number, has to be unique per merchant and mode|
|» shipping|body|[AddressDataDto](#schemaaddressdatadto)|false|none|
|» shoppingCart|body|[[CartItemDto](#schemacartitemdto)]|true|none|
|» successUrl|body|string|false|final redirect after a successful payment|
|» userId|body|string|false|identifier for the user|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|ALL|
|» currency|DZD|
|» currency|ARS|
|» currency|AUD|
|» currency|BSD|
|» currency|BHD|
|» currency|BDT|
|» currency|AMD|
|» currency|BBD|
|» currency|BMD|
|» currency|BTN|
|» currency|BOB|
|» currency|BWP|
|» currency|BZD|
|» currency|SBD|
|» currency|BND|
|» currency|MMK|
|» currency|BIF|
|» currency|KHR|
|» currency|CAD|
|» currency|CVE|
|» currency|KYD|
|» currency|LKR|
|» currency|CLP|
|» currency|CNY|
|» currency|COP|
|» currency|KMF|
|» currency|CRC|
|» currency|HRK|
|» currency|CUP|
|» currency|CZK|
|» currency|DKK|
|» currency|DOP|
|» currency|SVC|
|» currency|ETB|
|» currency|ERN|
|» currency|FKP|
|» currency|FJD|
|» currency|DJF|
|» currency|GMD|
|» currency|GIP|
|» currency|GTQ|
|» currency|GNF|
|» currency|GYD|
|» currency|HTG|
|» currency|HNL|
|» currency|HKD|
|» currency|HUF|
|» currency|ISK|
|» currency|INR|
|» currency|IDR|
|» currency|IRR|
|» currency|IQD|
|» currency|ILS|
|» currency|JMD|
|» currency|JPY|
|» currency|KZT|
|» currency|JOD|
|» currency|KES|
|» currency|KPW|
|» currency|KRW|
|» currency|KWD|
|» currency|KGS|
|» currency|LAK|
|» currency|LBP|
|» currency|LSL|
|» currency|LRD|
|» currency|LYD|
|» currency|MOP|
|» currency|MWK|
|» currency|MYR|
|» currency|MVR|
|» currency|MUR|
|» currency|MXN|
|» currency|MNT|
|» currency|MDL|
|» currency|MAD|
|» currency|OMR|
|» currency|NAD|
|» currency|NPR|
|» currency|ANG|
|» currency|AWG|
|» currency|VUV|
|» currency|NZD|
|» currency|NIO|
|» currency|NGN|
|» currency|NOK|
|» currency|PKR|
|» currency|PAB|
|» currency|PGK|
|» currency|PYG|
|» currency|PEN|
|» currency|PHP|
|» currency|QAR|
|» currency|RUB|
|» currency|RWF|
|» currency|SHP|
|» currency|SAR|
|» currency|SCR|
|» currency|SLL|
|» currency|SGD|
|» currency|VND|
|» currency|SOS|
|» currency|ZAR|
|» currency|SSP|
|» currency|SZL|
|» currency|SEK|
|» currency|CHF|
|» currency|SYP|
|» currency|THB|
|» currency|TOP|
|» currency|TTD|
|» currency|AED|
|» currency|TND|
|» currency|UGX|
|» currency|MKD|
|» currency|EGP|
|» currency|GBP|
|» currency|TZS|
|» currency|USD|
|» currency|UYU|
|» currency|UZS|
|» currency|WST|
|» currency|YER|
|» currency|TWD|
|» currency|UYW|
|» currency|VES|
|» currency|MRU|
|» currency|STN|
|» currency|CUC|
|» currency|ZWL|
|» currency|BYN|
|» currency|TMT|
|» currency|GHS|
|» currency|SDG|
|» currency|UYI|
|» currency|RSD|
|» currency|MZN|
|» currency|AZN|
|» currency|RON|
|» currency|CHE|
|» currency|CHW|
|» currency|TRY|
|» currency|XAF|
|» currency|XCD|
|» currency|XOF|
|» currency|XPF|
|» currency|XBA|
|» currency|XBB|
|» currency|XBC|
|» currency|XBD|
|» currency|XAU|
|» currency|XDR|
|» currency|XAG|
|» currency|XPT|
|» currency|XTS|
|» currency|XPD|
|» currency|XUA|
|» currency|ZMW|
|» currency|SRD|
|» currency|MGA|
|» currency|COU|
|» currency|AFN|
|» currency|TJS|
|» currency|AOA|
|» currency|BGN|
|» currency|CDF|
|» currency|BAM|
|» currency|EUR|
|» currency|MXV|
|» currency|UAH|
|» currency|GEL|
|» currency|BOV|
|» currency|PLN|
|» currency|BRL|
|» currency|CLF|
|» currency|XSU|
|» currency|USN|
|» intent|authorization|
|» intent|preauthorization|
|» language|de_DE|
|» language|en_US|
|» mode|live|
|» mode|test|
|» paymentMethods|visa|
|» paymentMethods|mastercard|
|» paymentMethods|amex|
|» paymentMethods|paypal|
|» paymentMethods|sofort|
|» paymentMethods|paydirekt|
|» paymentMethods|postfinance-e|
|» paymentMethods|postfinance-card|
|» paymentMethods|bancontact|
|» paymentMethods|przelewy24|
|» paymentMethods|alipay|
|» paymentMethods|ideal|
|» paymentMethods|eps|
|» paymentMethods|giropay|
|» paymentMethods|sepa|

> Example responses

> 200 Response

```json
{
  "accountId": "12345",
  "active": true,
  "amount": 799,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "created": 0,
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "hash": "a42847abb8bfca62876ca64c0fa981f8",
  "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "link": "string",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "modified": 0,
  "notifyUrl": "string",
  "paymentMethod": "visa",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "paymentProcess": "347867997",
  "portalId": "1234567",
  "redirectUrl": "string",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "status": "ready",
  "successUrl": "string",
  "userId": "356845874"
}
```

<h3 id="update-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default response|[LinkResponse](#schemalinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
createAuth
</aside>

# Schemas

<h2 id="tocS_AddressDataDto">AddressDataDto</h2>
<!-- backwards compatibility -->
<a id="schemaaddressdatadto"></a>
<a id="schema_AddressDataDto"></a>
<a id="tocSaddressdatadto"></a>
<a id="tocsaddressdatadto"></a>

```json
{
  "addressAddition": "7th floor",
  "city": "Kiel",
  "company": "PAYONE GmbH",
  "country": "DE",
  "firstName": "John",
  "lastName": "Doe",
  "state": "st",
  "street": "Fraunhoferstr. 2-4",
  "zip": "24118"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressAddition|string|false|none|customer additional address line|
|city|string|false|none|customer city|
|company|string|false|none|customer company name|
|country|string|false|none|customer country code (2 letter ISO-3166 code)|
|firstName|string|false|none|customer first name|
|lastName|string|false|none|customer last name|
|state|string|false|none|customer state code|
|street|string|false|none|customer street name|
|zip|string|false|none|customer postcode|

<h2 id="tocS_CartItemDto">CartItemDto</h2>
<!-- backwards compatibility -->
<a id="schemacartitemdto"></a>
<a id="schema_CartItemDto"></a>
<a id="tocScartitemdto"></a>
<a id="tocscartitemdto"></a>

```json
{
  "deliveryDateEnd": "2021-01-01",
  "deliveryDateStart": "2021-01-01",
  "description": "Potatoes",
  "number": "73883HFJ",
  "price": 1999,
  "quantity": 1,
  "type": "goods",
  "vatRate": 20
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryDateEnd|string(date)|false|none|delivery period end date|
|deliveryDateStart|string(date)|false|none|delivery date|
|description|string|false|none|item description|
|number|string|true|none|item number|
|price|integer(int64)|true|none|gross price of single item|
|quantity|integer(int64)|true|none|total number of ordered items|
|type|string|true|none|item type|
|vatRate|integer(int64)|false|none|vat rate (<100 in %, >=100 in bp)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|goods|
|type|shipment|
|type|handling|
|type|voucher|

<h2 id="tocS_InvoiceInformationDto">InvoiceInformationDto</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceinformationdto"></a>
<a id="schema_InvoiceInformationDto"></a>
<a id="tocSinvoiceinformationdto"></a>
<a id="tocsinvoiceinformationdto"></a>

```json
{
  "invoiceId": "string",
  "invoiceText": "string"
}
```

relevant information for the invoice module

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceId|string|false|none|id that should be put on the invoice|
|invoiceText|string|false|none|short text that should be put after the invoice|

<h2 id="tocS_LinkCreateRequest">LinkCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalinkcreaterequest"></a>
<a id="schema_LinkCreateRequest"></a>
<a id="tocSlinkcreaterequest"></a>
<a id="tocslinkcreaterequest"></a>

```json
{
  "accountId": "12345",
  "active": true,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "notifyUrl": "string",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "portalId": "1234567",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "successUrl": "string",
  "userId": "12345678"
}
```

a link create request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|identifier for the subaccount|
|active|boolean|false|none|link activation status|
|backgroundImage|string(css)|false|none|backgroundImage css property|
|billing|[AddressDataDto](#schemaaddressdatadto)|false|none|none|
|currency|string|true|none|currency code|
|description|string|false|none|free format description of the payment|
|email|string|false|none|email the invoice should be delivered to|
|errorUrl|string|false|none|final redirect after a final payment|
|expiration|string(date)|false|none|link expiration date, the link will only be executable until end of that day|
|intent|string|false|none|designates the type of transaction that will be created|
|invoiceInformation|[InvoiceInformationDto](#schemainvoiceinformationdto)|false|none|relevant information for the invoice module|
|language|string|false|none|link ISO language code|
|logo|string(url)|false|none|logo url|
|merchantId|string|true|none|identifier for the merchant|
|mode|string|true|none|execution mode|
|notifyUrl|string|false|none|Url where the notification will be send after link was executed|
|paymentMethods|[string]|false|none|list of available payment methods|
|portalId|string|true|none|identifier for the portal|
|reference|string|true|none|payment reference number, has to be unique per merchant and mode|
|shipping|[AddressDataDto](#schemaaddressdatadto)|false|none|none|
|shoppingCart|[[CartItemDto](#schemacartitemdto)]|true|none|none|
|successUrl|string|false|none|final redirect after a successful payment|
|userId|string|false|none|identifier for the user|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|ALL|
|currency|DZD|
|currency|ARS|
|currency|AUD|
|currency|BSD|
|currency|BHD|
|currency|BDT|
|currency|AMD|
|currency|BBD|
|currency|BMD|
|currency|BTN|
|currency|BOB|
|currency|BWP|
|currency|BZD|
|currency|SBD|
|currency|BND|
|currency|MMK|
|currency|BIF|
|currency|KHR|
|currency|CAD|
|currency|CVE|
|currency|KYD|
|currency|LKR|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|KMF|
|currency|CRC|
|currency|HRK|
|currency|CUP|
|currency|CZK|
|currency|DKK|
|currency|DOP|
|currency|SVC|
|currency|ETB|
|currency|ERN|
|currency|FKP|
|currency|FJD|
|currency|DJF|
|currency|GMD|
|currency|GIP|
|currency|GTQ|
|currency|GNF|
|currency|GYD|
|currency|HTG|
|currency|HNL|
|currency|HKD|
|currency|HUF|
|currency|ISK|
|currency|INR|
|currency|IDR|
|currency|IRR|
|currency|IQD|
|currency|ILS|
|currency|JMD|
|currency|JPY|
|currency|KZT|
|currency|JOD|
|currency|KES|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KGS|
|currency|LAK|
|currency|LBP|
|currency|LSL|
|currency|LRD|
|currency|LYD|
|currency|MOP|
|currency|MWK|
|currency|MYR|
|currency|MVR|
|currency|MUR|
|currency|MXN|
|currency|MNT|
|currency|MDL|
|currency|MAD|
|currency|OMR|
|currency|NAD|
|currency|NPR|
|currency|ANG|
|currency|AWG|
|currency|VUV|
|currency|NZD|
|currency|NIO|
|currency|NGN|
|currency|NOK|
|currency|PKR|
|currency|PAB|
|currency|PGK|
|currency|PYG|
|currency|PEN|
|currency|PHP|
|currency|QAR|
|currency|RUB|
|currency|RWF|
|currency|SHP|
|currency|SAR|
|currency|SCR|
|currency|SLL|
|currency|SGD|
|currency|VND|
|currency|SOS|
|currency|ZAR|
|currency|SSP|
|currency|SZL|
|currency|SEK|
|currency|CHF|
|currency|SYP|
|currency|THB|
|currency|TOP|
|currency|TTD|
|currency|AED|
|currency|TND|
|currency|UGX|
|currency|MKD|
|currency|EGP|
|currency|GBP|
|currency|TZS|
|currency|USD|
|currency|UYU|
|currency|UZS|
|currency|WST|
|currency|YER|
|currency|TWD|
|currency|UYW|
|currency|VES|
|currency|MRU|
|currency|STN|
|currency|CUC|
|currency|ZWL|
|currency|BYN|
|currency|TMT|
|currency|GHS|
|currency|SDG|
|currency|UYI|
|currency|RSD|
|currency|MZN|
|currency|AZN|
|currency|RON|
|currency|CHE|
|currency|CHW|
|currency|TRY|
|currency|XAF|
|currency|XCD|
|currency|XOF|
|currency|XPF|
|currency|XBA|
|currency|XBB|
|currency|XBC|
|currency|XBD|
|currency|XAU|
|currency|XDR|
|currency|XAG|
|currency|XPT|
|currency|XTS|
|currency|XPD|
|currency|XUA|
|currency|ZMW|
|currency|SRD|
|currency|MGA|
|currency|COU|
|currency|AFN|
|currency|TJS|
|currency|AOA|
|currency|BGN|
|currency|CDF|
|currency|BAM|
|currency|EUR|
|currency|MXV|
|currency|UAH|
|currency|GEL|
|currency|BOV|
|currency|PLN|
|currency|BRL|
|currency|CLF|
|currency|XSU|
|currency|USN|
|intent|authorization|
|intent|preauthorization|
|language|de_DE|
|language|en_US|
|mode|live|
|mode|test|
|paymentMethods|visa|
|paymentMethods|mastercard|
|paymentMethods|amex|
|paymentMethods|paypal|
|paymentMethods|sofort|
|paymentMethods|paydirekt|
|paymentMethods|postfinance-e|
|paymentMethods|postfinance-card|
|paymentMethods|bancontact|
|paymentMethods|przelewy24|
|paymentMethods|alipay|
|paymentMethods|ideal|
|paymentMethods|eps|
|paymentMethods|giropay|
|paymentMethods|sepa|

<h2 id="tocS_LinkResponse">LinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemalinkresponse"></a>
<a id="schema_LinkResponse"></a>
<a id="tocSlinkresponse"></a>
<a id="tocslinkresponse"></a>

```json
{
  "accountId": "12345",
  "active": true,
  "amount": 799,
  "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
  "billing": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "created": 0,
  "currency": "EUR",
  "description": "This payment is awesome!!",
  "email": "string",
  "errorUrl": "string",
  "expiration": "2020-02-20",
  "hash": "a42847abb8bfca62876ca64c0fa981f8",
  "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
  "intent": "authorization",
  "invoiceInformation": {
    "invoiceId": "string",
    "invoiceText": "string"
  },
  "language": "en_US",
  "link": "string",
  "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
  "merchantId": "12345",
  "mode": "live",
  "modified": 0,
  "notifyUrl": "string",
  "paymentMethod": "visa",
  "paymentMethods": [
    "visa",
    "mastercard"
  ],
  "paymentProcess": "347867997",
  "portalId": "1234567",
  "redirectUrl": "string",
  "reference": "payment_1",
  "shipping": {
    "addressAddition": "7th floor",
    "city": "Kiel",
    "company": "PAYONE GmbH",
    "country": "DE",
    "firstName": "John",
    "lastName": "Doe",
    "state": "st",
    "street": "Fraunhoferstr. 2-4",
    "zip": "24118"
  },
  "shoppingCart": [
    {
      "deliveryDateEnd": "2021-01-01",
      "deliveryDateStart": "2021-01-01",
      "description": "Potatoes",
      "number": "73883HFJ",
      "price": 1999,
      "quantity": 1,
      "type": "goods",
      "vatRate": 20
    }
  ],
  "status": "ready",
  "successUrl": "string",
  "userId": "356845874"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|identifier for the subaccount|
|active|boolean|false|none|link activation status|
|amount|integer(int64)|false|none|total amount of all shopping cart items in lowest denomination|
|backgroundImage|string(css)|false|none|backgroundImage css property|
|billing|[AddressDataDto](#schemaaddressdatadto)|false|none|none|
|created|integer(int64)|false|none|created time in ISO 8601 format|
|currency|string|false|none|currency code|
|description|string|false|none|free format description of the payment|
|email|string|false|none|customer email for invoices or payment notification|
|errorUrl|string|false|none|final redirect after a failed payment|
|expiration|string(date)|false|none|link expiration date, the link will only be executable until end of that day|
|hash|string|false|none|hash for the client API|
|id|string|false|none|link id|
|intent|string|false|none|designates the type of transaction that will be created|
|invoiceInformation|[InvoiceInformationDto](#schemainvoiceinformationdto)|false|none|relevant information for the invoice module|
|language|string|false|none|link ISO language code|
|link|string|false|none|customer payment link|
|logo|string(url)|false|none|logo url|
|merchantId|string|false|none|identifier for the merchant|
|mode|string|false|none|execution mode|
|modified|integer(int64)|false|none|last modified time in ISO 8601 format|
|notifyUrl|string|false|none|notify url. If unset no notification will be send|
|paymentMethod|string|false|none|available payment methods|
|paymentMethods|[string]|false|none|list of available payment methods|
|paymentProcess|string|false|none|identifier of the created payment process.|
|portalId|string|false|none|identifier for the portal|
|redirectUrl|string|false|none|redirect url. empty if the payment process does not require a redirect.|
|reference|string|false|none|payment reference number, has to be unique per merchant and mode|
|shipping|[AddressDataDto](#schemaaddressdatadto)|false|none|none|
|shoppingCart|[[CartItemDto](#schemacartitemdto)]|false|none|none|
|status|string|false|none|link status|
|successUrl|string|false|none|final redirect after a successful payment|
|userId|string|false|none|identifier of the created user.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|ALL|
|currency|DZD|
|currency|ARS|
|currency|AUD|
|currency|BSD|
|currency|BHD|
|currency|BDT|
|currency|AMD|
|currency|BBD|
|currency|BMD|
|currency|BTN|
|currency|BOB|
|currency|BWP|
|currency|BZD|
|currency|SBD|
|currency|BND|
|currency|MMK|
|currency|BIF|
|currency|KHR|
|currency|CAD|
|currency|CVE|
|currency|KYD|
|currency|LKR|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|KMF|
|currency|CRC|
|currency|HRK|
|currency|CUP|
|currency|CZK|
|currency|DKK|
|currency|DOP|
|currency|SVC|
|currency|ETB|
|currency|ERN|
|currency|FKP|
|currency|FJD|
|currency|DJF|
|currency|GMD|
|currency|GIP|
|currency|GTQ|
|currency|GNF|
|currency|GYD|
|currency|HTG|
|currency|HNL|
|currency|HKD|
|currency|HUF|
|currency|ISK|
|currency|INR|
|currency|IDR|
|currency|IRR|
|currency|IQD|
|currency|ILS|
|currency|JMD|
|currency|JPY|
|currency|KZT|
|currency|JOD|
|currency|KES|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KGS|
|currency|LAK|
|currency|LBP|
|currency|LSL|
|currency|LRD|
|currency|LYD|
|currency|MOP|
|currency|MWK|
|currency|MYR|
|currency|MVR|
|currency|MUR|
|currency|MXN|
|currency|MNT|
|currency|MDL|
|currency|MAD|
|currency|OMR|
|currency|NAD|
|currency|NPR|
|currency|ANG|
|currency|AWG|
|currency|VUV|
|currency|NZD|
|currency|NIO|
|currency|NGN|
|currency|NOK|
|currency|PKR|
|currency|PAB|
|currency|PGK|
|currency|PYG|
|currency|PEN|
|currency|PHP|
|currency|QAR|
|currency|RUB|
|currency|RWF|
|currency|SHP|
|currency|SAR|
|currency|SCR|
|currency|SLL|
|currency|SGD|
|currency|VND|
|currency|SOS|
|currency|ZAR|
|currency|SSP|
|currency|SZL|
|currency|SEK|
|currency|CHF|
|currency|SYP|
|currency|THB|
|currency|TOP|
|currency|TTD|
|currency|AED|
|currency|TND|
|currency|UGX|
|currency|MKD|
|currency|EGP|
|currency|GBP|
|currency|TZS|
|currency|USD|
|currency|UYU|
|currency|UZS|
|currency|WST|
|currency|YER|
|currency|TWD|
|currency|UYW|
|currency|VES|
|currency|MRU|
|currency|STN|
|currency|CUC|
|currency|ZWL|
|currency|BYN|
|currency|TMT|
|currency|GHS|
|currency|SDG|
|currency|UYI|
|currency|RSD|
|currency|MZN|
|currency|AZN|
|currency|RON|
|currency|CHE|
|currency|CHW|
|currency|TRY|
|currency|XAF|
|currency|XCD|
|currency|XOF|
|currency|XPF|
|currency|XBA|
|currency|XBB|
|currency|XBC|
|currency|XBD|
|currency|XAU|
|currency|XDR|
|currency|XAG|
|currency|XPT|
|currency|XTS|
|currency|XPD|
|currency|XUA|
|currency|ZMW|
|currency|SRD|
|currency|MGA|
|currency|COU|
|currency|AFN|
|currency|TJS|
|currency|AOA|
|currency|BGN|
|currency|CDF|
|currency|BAM|
|currency|EUR|
|currency|MXV|
|currency|UAH|
|currency|GEL|
|currency|BOV|
|currency|PLN|
|currency|BRL|
|currency|CLF|
|currency|XSU|
|currency|USN|
|intent|authorization|
|intent|preauthorization|
|language|de_DE|
|language|en_US|
|mode|live|
|mode|test|
|paymentMethod|visa|
|paymentMethod|mastercard|
|paymentMethod|amex|
|paymentMethod|paypal|
|paymentMethod|sofort|
|paymentMethod|paydirekt|
|paymentMethod|postfinance-e|
|paymentMethod|postfinance-card|
|paymentMethod|bancontact|
|paymentMethod|przelewy24|
|paymentMethod|alipay|
|paymentMethod|ideal|
|paymentMethod|eps|
|paymentMethod|giropay|
|paymentMethod|sepa|
|paymentMethods|visa|
|paymentMethods|mastercard|
|paymentMethods|amex|
|paymentMethods|paypal|
|paymentMethods|sofort|
|paymentMethods|paydirekt|
|paymentMethods|postfinance-e|
|paymentMethods|postfinance-card|
|paymentMethods|bancontact|
|paymentMethods|przelewy24|
|paymentMethods|alipay|
|paymentMethods|ideal|
|paymentMethods|eps|
|paymentMethods|giropay|
|paymentMethods|sepa|
|status|ready|
|status|created|
|status|executed|
|status|expired|
|status|deactivated|

<h2 id="tocS_PageLinkResponse">PageLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapagelinkresponse"></a>
<a id="schema_PageLinkResponse"></a>
<a id="tocSpagelinkresponse"></a>
<a id="tocspagelinkresponse"></a>

```json
{
  "content": [
    {
      "accountId": "12345",
      "active": true,
      "amount": 799,
      "backgroundImage": "linear-gradient(to bottom right, #ffffff, #3295d6)",
      "billing": {
        "addressAddition": "7th floor",
        "city": "Kiel",
        "company": "PAYONE GmbH",
        "country": "DE",
        "firstName": "John",
        "lastName": "Doe",
        "state": "st",
        "street": "Fraunhoferstr. 2-4",
        "zip": "24118"
      },
      "created": 0,
      "currency": "EUR",
      "description": "This payment is awesome!!",
      "email": "string",
      "errorUrl": "string",
      "expiration": "2020-02-20",
      "hash": "a42847abb8bfca62876ca64c0fa981f8",
      "id": "HUENJ5FY124QHUENJ5FY124QHUENJ5FY",
      "intent": "authorization",
      "invoiceInformation": {
        "invoiceId": "string",
        "invoiceText": "string"
      },
      "language": "en_US",
      "link": "string",
      "logo": "https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg",
      "merchantId": "12345",
      "mode": "live",
      "modified": 0,
      "notifyUrl": "string",
      "paymentMethod": "visa",
      "paymentMethods": [
        "visa",
        "mastercard"
      ],
      "paymentProcess": "347867997",
      "portalId": "1234567",
      "redirectUrl": "string",
      "reference": "payment_1",
      "shipping": {
        "addressAddition": "7th floor",
        "city": "Kiel",
        "company": "PAYONE GmbH",
        "country": "DE",
        "firstName": "John",
        "lastName": "Doe",
        "state": "st",
        "street": "Fraunhoferstr. 2-4",
        "zip": "24118"
      },
      "shoppingCart": [
        {
          "deliveryDateEnd": "2021-01-01",
          "deliveryDateStart": "2021-01-01",
          "description": "Potatoes",
          "number": "73883HFJ",
          "price": 1999,
          "quantity": 1,
          "type": "goods",
          "vatRate": 20
        }
      ],
      "status": "ready",
      "successUrl": "string",
      "userId": "356845874"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[LinkResponse](#schemalinkresponse)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[Pageable](#schemapageable)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[Sort](#schemasort)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_Pageable">Pageable</h2>
<!-- backwards compatibility -->
<a id="schemapageable"></a>
<a id="schema_Pageable"></a>
<a id="tocSpageable"></a>
<a id="tocspageable"></a>

```json
{
  "offset": 0,
  "pageNumber": 0,
  "pageSize": 0,
  "paged": true,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "unpaged": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int64)|false|none|none|
|pageNumber|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|paged|boolean|false|none|none|
|sort|[Sort](#schemasort)|false|none|none|
|unpaged|boolean|false|none|none|

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
{
  "empty": true,
  "sorted": true,
  "unsorted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|empty|boolean|false|none|none|
|sorted|boolean|false|none|none|
|unsorted|boolean|false|none|none|
