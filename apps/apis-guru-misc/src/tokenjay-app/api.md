<h1 id="tokenjay-api-services">TokenJay API services v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Please see usage policies on tokenjay.app

Base URLs:

* <a href="https://api.tokenjay.app/">https://api.tokenjay.app/</a>

<a href="https://tokenjay.app/apidoc.html">Terms of service</a>

<h1 id="tokenjay-api-services-tokenverification">tokenVerification</h1>

Ergo Platform Genuine Tokens Verification

<a href="https://github.com/ergoplatform/eips/blob/master/eip-0021.md">EIP-21</a>

## Check a token verification

<a id="opIdcheckToken"></a>

> Code samples

```bash
curl https://example.com/tokens/check/string/string
```

`GET /tokens/check/{tokenId}/{tokenName}`

<h3 id="check-a-token-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|none|
|tokenName|path|string|true|none|

<h3 id="check-a-token-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CheckResponse](#schemacheckresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Lists all blocked tokens

<a id="opIdlistBlocked"></a>

> Code samples

```bash
curl https://example.com/tokens/listBlocked
```

`GET /tokens/listBlocked`

<h3 id="lists-all-blocked-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<h3 id="lists-all-blocked-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Lists all genuine tokens known

<a id="opIdlistGenuine"></a>

> Code samples

```bash
curl https://example.com/tokens/listGenuine
```

`GET /tokens/listGenuine`

<h3 id="lists-all-genuine-tokens-known-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<h3 id="lists-all-genuine-tokens-known-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GenuineToken](#schemagenuinetoken)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-peerdetection">peerDetection</h1>

Detecting nodes to use for submitting transactions

## Lists known peers sorted by block height

<a id="opIdgetPeersList"></a>

> Code samples

```bash
curl https://example.com/peers/list
```

`GET /peers/list`

<h3 id="lists-known-peers-sorted-by-block-height-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unreachable|query|boolean|false|Set to true to show unreachable peers in the list|
|closedApi|query|boolean|false|Set to true to show peers not open to be connected|
|limit|query|integer(int32)|false|none|

<h3 id="lists-known-peers-sorted-by-block-height-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<h3 id="lists-known-peers-sorted-by-block-height-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NodePeer](#schemanodepeer)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-paymentportal">paymentPortal</h1>

ErgoPay payment portal

## Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code

<a id="opIdaddPaymentRequest"></a>

> Code samples

```bash
curl https://example.com/payment/addrequest \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "message": "string",
    "nanoErg": 0,
    "receiverAddress": "string",
    "senderAddress": "string",
    "tokenId": "string",
    "tokenRawAmount": 0
  }'
```

`POST /payment/addrequest`

> Body parameter

```json
{
  "message": "string",
  "nanoErg": 0,
  "receiverAddress": "string",
  "senderAddress": "string",
  "tokenId": "string",
  "tokenRawAmount": 0
}
```

<h3 id="creates-a-new-payment-request-will-return-request-id-to-check-for-transaction-state-and-ergopay-url-to-show-the-user-as-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePaymentRequest](#schemacreatepaymentrequest)|true|none|
|» message|body|string|false|none|
|» nanoErg|body|integer(int64)|true|none|
|» receiverAddress|body|string|true|none|
|» senderAddress|body|string|false|none|
|» tokenId|body|string|false|none|
|» tokenRawAmount|body|integer(int64)|false|none|

<h3 id="creates-a-new-payment-request-will-return-request-id-to-check-for-transaction-state-and-ergopay-url-to-show-the-user-as-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AddRequestResponse](#schemaaddrequestresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

<a id="opIdgetPaymentState"></a>

> Code samples

```bash
curl https://example.com/payment/state/string
```

`GET /payment/state/{requestId}`

<h3 id="returns-the-state-of-a-payment-request-please-note-that-payment-requests-are-purged-after-some-time-so-persist-the-state-at-your-side-when-needed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|path|string|true|none|

<h3 id="returns-the-state-of-a-payment-request-please-note-that-payment-requests-are-purged-after-some-time-so-persist-the-state-at-your-side-when-needed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaymentRequestStateResponse](#schemapaymentrequeststateresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-ageusd">ageUsd</h1>

## Returns state of AgeUSD at this moment

<a id="opIdgetAgeUsdInfo"></a>

> Code samples

```bash
curl https://example.com/ageusd/info
```

`GET /ageusd/info`

<h3 id="returns-state-of-ageusd-at-this-moment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AgeUsdInfo](#schemaageusdinfo)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Builds ErgoPayRequest for SigRSV exchange

<a id="opIddoSigmaRsvExchange"></a>

> Code samples

```bash
curl 'https://example.com/sigrsv/exchange/?amount=0&address=string'
```

`GET /sigrsv/exchange/`

<h3 id="builds-ergopayrequest-for-sigrsv-exchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|integer(int64)|true|none|
|address|query|string|true|none|
|checkRate|query|integer(int64)|false|none|
|executionFee|query|integer(int64)|false|none|

<h3 id="builds-ergopayrequest-for-sigrsv-exchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Calculates SigRSV exchange

<a id="opIdcalcSigmaRsvExchange"></a>

> Code samples

```bash
curl https://example.com/sigrsv/exchange/0/info
```

`GET /sigrsv/exchange/{amount}/info`

<h3 id="calculates-sigrsv-exchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|path|integer(int64)|true|none|

<h3 id="calculates-sigrsv-exchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AgeUsdExchangeInfo](#schemaageusdexchangeinfo)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Lists price and available volume for SigmaRSV

<a id="opIdgetSigmaRsvPrice"></a>

> Code samples

```bash
curl https://example.com/sigrsv/price
```

`GET /sigrsv/price`

<h3 id="lists-price-and-available-volume-for-sigmarsv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TokenPrice](#schematokenprice)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Builds ErgoPayRequest for SigUSD exchange

<a id="opIddoSigmaUsdExchange"></a>

> Code samples

```bash
curl 'https://example.com/sigusd/exchange/?amount=0&address=string'
```

`GET /sigusd/exchange/`

<h3 id="builds-ergopayrequest-for-sigusd-exchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|integer(int64)|true|none|
|address|query|string|true|none|
|checkRate|query|integer(int64)|false|none|
|executionFee|query|integer(int64)|false|none|

<h3 id="builds-ergopayrequest-for-sigusd-exchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Calculates SigUSD exchange

<a id="opIdcalcSigmaUsdExchange"></a>

> Code samples

```bash
curl https://example.com/sigusd/exchange/0/info
```

`GET /sigusd/exchange/{amount}/info`

<h3 id="calculates-sigusd-exchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|path|integer(int64)|true|none|

<h3 id="calculates-sigusd-exchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AgeUsdExchangeInfo](#schemaageusdexchangeinfo)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Lists price and available volume for SigmaUSD

<a id="opIdgetSigmaUsdPrice"></a>

> Code samples

```bash
curl https://example.com/sigusd/price
```

`GET /sigusd/price`

<h3 id="lists-price-and-available-volume-for-sigmausd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TokenPrice](#schematokenprice)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-babel-fee-controller">babel-fee-controller</h1>

## ergoPayCreateBabelBox_1

<a id="opIdergoPayCreateBabelBox_1"></a>

> Code samples

```bash
curl https://example.com/cancelbabel/string
```

`GET /cancelbabel/{boxId}`

<h3 id="ergopaycreatebabelbox1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|boxId|path|string|true|none|

<h3 id="ergopaycreatebabelbox1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getBabelFeeOverview

<a id="opIdgetBabelFeeOverview"></a>

> Code samples

```bash
curl https://example.com/mosaik/babelfee/
```

`GET /mosaik/babelfee/`

<h3 id="getbabelfeeoverview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MosaikApp](#schemamosaikapp)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## checkForNotifications

<a id="opIdcheckForNotifications"></a>

> Code samples

```bash
curl https://example.com/mosaik/babelfee/notificationcheck
```

`GET /mosaik/babelfee/notificationcheck`

<h3 id="checkfornotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationCheckResponse](#schemanotificationcheckresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-babel-fee-new-offer-controller">babel-fee-new-offer-controller</h1>

## ergoPayCreateBabelBox

<a id="opIdergoPayCreateBabelBox"></a>

> Code samples

```bash
curl 'https://example.com/createbabel/string?tokenId=string&ergAmount=0&tokenAmount=0'
```

`GET /createbabel/{address}`

<h3 id="ergopaycreatebabelbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|none|
|tokenId|query|string|true|none|
|ergAmount|query|integer(int64)|true|none|
|tokenAmount|query|integer(int64)|true|none|

<h3 id="ergopaycreatebabelbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getBabelFeeNewOffer

<a id="opIdgetBabelFeeNewOffer"></a>

> Code samples

```bash
curl https://example.com/mosaik/babelfee/newoffer
```

`GET /mosaik/babelfee/newoffer`

<h3 id="getbabelfeenewoffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MosaikApp](#schemamosaikapp)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## doCreateBabelBox

<a id="opIddoCreateBabelBox"></a>

> Code samples

```bash
curl https://example.com/mosaik/babelfee/newoffer/doit \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "property1": {},
    "property2": {}
  }'
```

`POST /mosaik/babelfee/newoffer/doit`

> Body parameter

```json
{
  "property1": {},
  "property2": {}
}
```

<h3 id="docreatebabelbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|object|false|none|

<h3 id="docreatebabelbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FetchActionResponse](#schemafetchactionresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## replaceTokenAmountInputFields

<a id="opIdreplaceTokenAmountInputFields"></a>

> Code samples

```bash
curl https://example.com/mosaik/babelfee/newoffer/new-input \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "property1": {},
    "property2": {}
  }'
```

`POST /mosaik/babelfee/newoffer/new-input`

> Body parameter

```json
{
  "property1": {},
  "property2": {}
}
```

<h3 id="replacetokenamountinputfields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|object|false|none|

<h3 id="replacetokenamountinputfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FetchActionResponse](#schemafetchactionresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-box-consolidation-controller">box-consolidation-controller</h1>

## mainApp_1

<a id="opIdmainApp_1"></a>

> Code samples

```bash
curl https://example.com/mosaik/boxconsolidation/
```

`GET /mosaik/boxconsolidation/`

<h3 id="mainapp1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MosaikApp](#schemamosaikapp)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## epConsolidate

<a id="opIdepConsolidate"></a>

> Code samples

```bash
curl https://example.com/mosaik/boxconsolidation/consolidate/string
```

`GET /mosaik/boxconsolidation/consolidate/{p2pkaddress}`

<h3 id="epconsolidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|p2pkaddress|path|string|true|none|

<h3 id="epconsolidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-token-burn-controller">token-burn-controller</h1>

## mainApp

<a id="opIdmainApp"></a>

> Code samples

```bash
curl https://example.com/mosaik/tokenburn
```

`GET /mosaik/tokenburn`

<h3 id="mainapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MosaikApp](#schemamosaikapp)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getBurningTransaction

<a id="opIdgetBurningTransaction"></a>

> Code samples

```bash
curl https://example.com/mosaik/tokenburn/get/string
```

`GET /mosaik/tokenburn/get/{uuid}`

<h3 id="getburningtransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|

<h3 id="getburningtransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ErgoPayResponse](#schemaergopayresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## prepareTransaction

<a id="opIdprepareTransaction"></a>

> Code samples

```bash
curl https://example.com/mosaik/tokenburn/prepare \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "property1": {},
    "property2": {}
  }'
```

`POST /mosaik/tokenburn/prepare`

> Body parameter

```json
{
  "property1": {},
  "property2": {}
}
```

<h3 id="preparetransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|object|false|none|

<h3 id="preparetransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FetchActionResponse](#schemafetchactionresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="tokenjay-api-services-tokenprices">tokenPrices</h1>

## Lists all token prices and available volume

<a id="opIdgetTokenPrices"></a>

> Code samples

```bash
curl https://example.com/tokens/prices/all
```

`GET /tokens/prices/all`

<h3 id="lists-all-token-prices-and-available-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<h3 id="lists-all-token-prices-and-available-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TokenPrice](#schematokenprice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Lists price and available volume for a certain token

<a id="opIdgetTokenPrice"></a>

> Code samples

```bash
curl https://example.com/tokens/prices/string
```

`GET /tokens/prices/{tokenId}`

<h3 id="lists-price-and-available-volume-for-a-certain-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|none|

<h3 id="lists-price-and-available-volume-for-a-certain-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TokenPrice](#schematokenprice)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_AddRequestResponse">AddRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddrequestresponse"></a>
<a id="schema_AddRequestResponse"></a>
<a id="tocSaddrequestresponse"></a>
<a id="tocsaddrequestresponse"></a>

```json
{
  "ergoPayUrl": "string",
  "requestId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ergoPayUrl|string|true|none|none|
|requestId|string|true|none|none|

<h2 id="tocS_AgeUsdExchangeInfo">AgeUsdExchangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaageusdexchangeinfo"></a>
<a id="schema_AgeUsdExchangeInfo"></a>
<a id="tocSageusdexchangeinfo"></a>
<a id="tocsageusdexchangeinfo"></a>

```json
{
  "bankFeeAmount": 0,
  "bankFeeDescription": "string",
  "ergAmount": 0,
  "ergAmountDescription": "string",
  "exchangeRate": 0,
  "jayFeeAmount": 0,
  "jayFeeDescription": "string",
  "totalAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankFeeAmount|integer(int64)|true|none|none|
|bankFeeDescription|string|true|none|none|
|ergAmount|integer(int64)|true|none|none|
|ergAmountDescription|string|true|none|none|
|exchangeRate|integer(int64)|true|none|none|
|jayFeeAmount|integer(int64)|true|none|none|
|jayFeeDescription|string|true|none|none|
|totalAmount|integer(int64)|true|none|none|

<h2 id="tocS_AgeUsdInfo">AgeUsdInfo</h2>
<!-- backwards compatibility -->
<a id="schemaageusdinfo"></a>
<a id="schema_AgeUsdInfo"></a>
<a id="tocSageusdinfo"></a>
<a id="tocsageusdinfo"></a>

```json
{
  "reserveRatio": 0,
  "sigRsvPrice": 0,
  "sigUsdPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reserveRatio|integer(int64)|true|none|none|
|sigRsvPrice|integer(int64)|true|none|none|
|sigUsdPrice|integer(int64)|true|none|none|

<h2 id="tocS_CheckResponse">CheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckresponse"></a>
<a id="schema_CheckResponse"></a>
<a id="tocScheckresponse"></a>
<a id="tocscheckresponse"></a>

```json
{
  "genuine": 0,
  "token": {
    "issuer": "string",
    "tokenId": "string",
    "tokenName": "string",
    "uniqueName": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genuine|integer(int32)|true|none|Flag with 0 unknown, 1 verified, 2 suspicious, 3 blocked (see EIP-21)|
|token|[GenuineToken](#schemagenuinetoken)|false|none|none|

<h2 id="tocS_CreatePaymentRequest">CreatePaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentrequest"></a>
<a id="schema_CreatePaymentRequest"></a>
<a id="tocScreatepaymentrequest"></a>
<a id="tocscreatepaymentrequest"></a>

```json
{
  "message": "string",
  "nanoErg": 0,
  "receiverAddress": "string",
  "senderAddress": "string",
  "tokenId": "string",
  "tokenRawAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|nanoErg|integer(int64)|true|none|none|
|receiverAddress|string|true|none|none|
|senderAddress|string|false|none|none|
|tokenId|string|false|none|none|
|tokenRawAmount|integer(int64)|false|none|none|

<h2 id="tocS_ErgoPayResponse">ErgoPayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaergopayresponse"></a>
<a id="schema_ErgoPayResponse"></a>
<a id="tocSergopayresponse"></a>
<a id="tocsergopayresponse"></a>

```json
{
  "address": "string",
  "addresses": [
    "string"
  ],
  "message": "string",
  "messageSeverity": "NONE",
  "reducedTx": "string",
  "reducedTxList": [
    "string"
  ],
  "replyTo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|addresses|[string]|false|none|none|
|message|string|false|none|none|
|messageSeverity|string|false|none|none|
|reducedTx|string|false|none|none|
|reducedTxList|[string]|false|none|none|
|replyTo|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|messageSeverity|NONE|
|messageSeverity|INFORMATION|
|messageSeverity|WARNING|
|messageSeverity|ERROR|

<h2 id="tocS_FetchActionResponse">FetchActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchactionresponse"></a>
<a id="schema_FetchActionResponse"></a>
<a id="tocSfetchactionresponse"></a>
<a id="tocsfetchactionresponse"></a>

```json
{
  "action": {
    "id": "string"
  },
  "appVersion": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[Action](#schemaaction)|false|none|none|
|appVersion|integer(int32)|false|none|none|

<h2 id="tocS_GenuineToken">GenuineToken</h2>
<!-- backwards compatibility -->
<a id="schemagenuinetoken"></a>
<a id="schema_GenuineToken"></a>
<a id="tocSgenuinetoken"></a>
<a id="tocsgenuinetoken"></a>

```json
{
  "issuer": "string",
  "tokenId": "string",
  "tokenName": "string",
  "uniqueName": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|false|none|none|
|tokenId|string|true|none|none|
|tokenName|string|true|none|none|
|uniqueName|boolean|true|none|none|

<h2 id="tocS_MosaikApp">MosaikApp</h2>
<!-- backwards compatibility -->
<a id="schemamosaikapp"></a>
<a id="schema_MosaikApp"></a>
<a id="tocSmosaikapp"></a>
<a id="tocsmosaikapp"></a>

```json
{
  "actions": [
    {
      "id": "string"
    }
  ],
  "manifest": {
    "appDescription": "string",
    "appName": "string",
    "appVersion": 0,
    "cacheLifetime": 0,
    "errorReportUrl": "string",
    "iconUrl": "string",
    "notificationCheckUrl": "string",
    "onAppLoadedAction": "string",
    "onResizeAction": "string",
    "targetCanvasDimension": "COMPACT_WIDTH",
    "targetMosaikVersion": 0
  },
  "view": {
    "id": "string",
    "onClickAction": "string",
    "onLongPressAction": "string",
    "visible": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|none|
|manifest|[MosaikManifest](#schemamosaikmanifest)|false|none|none|
|view|[ViewElement](#schemaviewelement)|false|none|none|

<h2 id="tocS_MosaikManifest">MosaikManifest</h2>
<!-- backwards compatibility -->
<a id="schemamosaikmanifest"></a>
<a id="schema_MosaikManifest"></a>
<a id="tocSmosaikmanifest"></a>
<a id="tocsmosaikmanifest"></a>

```json
{
  "appDescription": "string",
  "appName": "string",
  "appVersion": 0,
  "cacheLifetime": 0,
  "errorReportUrl": "string",
  "iconUrl": "string",
  "notificationCheckUrl": "string",
  "onAppLoadedAction": "string",
  "onResizeAction": "string",
  "targetCanvasDimension": "COMPACT_WIDTH",
  "targetMosaikVersion": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appDescription|string|false|none|none|
|appName|string|false|none|none|
|appVersion|integer(int32)|false|none|none|
|cacheLifetime|integer(int32)|false|none|none|
|errorReportUrl|string|false|none|none|
|iconUrl|string|false|none|none|
|notificationCheckUrl|string|false|none|none|
|onAppLoadedAction|string|false|none|none|
|onResizeAction|string|false|none|none|
|targetCanvasDimension|string|false|none|none|
|targetMosaikVersion|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|targetCanvasDimension|COMPACT_WIDTH|
|targetCanvasDimension|MEDIUM_WIDTH|
|targetCanvasDimension|FULL_WIDTH|

<h2 id="tocS_NodePeer">NodePeer</h2>
<!-- backwards compatibility -->
<a id="schemanodepeer"></a>
<a id="schema_NodePeer"></a>
<a id="tocSnodepeer"></a>
<a id="tocsnodepeer"></a>

```json
{
  "blockHeight": 0,
  "blockchainApi": true,
  "headerHeight": 0,
  "lastSeen": 0,
  "name": "string",
  "openRestApi": true,
  "responseTime": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockHeight|integer(int64)|true|none|none|
|blockchainApi|boolean|true|none|none|
|headerHeight|integer(int64)|true|none|none|
|lastSeen|integer(int64)|true|none|none|
|name|string|true|none|none|
|openRestApi|boolean|true|none|none|
|responseTime|integer(int64)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_NotificationCheckResponse">NotificationCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationcheckresponse"></a>
<a id="schema_NotificationCheckResponse"></a>
<a id="tocSnotificationcheckresponse"></a>
<a id="tocsnotificationcheckresponse"></a>

```json
{
  "message": "string",
  "messageTs": 0,
  "nextCheck": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|messageTs|integer(int64)|false|none|none|
|nextCheck|integer(int32)|false|none|none|

<h2 id="tocS_PaymentRequestStateResponse">PaymentRequestStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequeststateresponse"></a>
<a id="schema_PaymentRequestStateResponse"></a>
<a id="tocSpaymentrequeststateresponse"></a>
<a id="tocspaymentrequeststateresponse"></a>

```json
{
  "paymentRequestState": "CREATED",
  "requestId": "string",
  "txId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentRequestState|string|true|none|none|
|requestId|string|true|none|none|
|txId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentRequestState|CREATED|
|paymentRequestState|WAITING|
|paymentRequestState|EXECUTED|
|paymentRequestState|INVALID|

<h2 id="tocS_TokenPrice">TokenPrice</h2>
<!-- backwards compatibility -->
<a id="schematokenprice"></a>
<a id="schema_TokenPrice"></a>
<a id="tocStokenprice"></a>
<a id="tocstokenprice"></a>

```json
{
  "available": 0,
  "displayName": "string",
  "lastUpdated": 0,
  "price": 0,
  "tokenId": "string",
  "volumeLastDay": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|integer(int64)|true|none|none|
|displayName|string|true|none|none|
|lastUpdated|integer(int64)|true|none|none|
|price|integer(int64)|true|none|none|
|tokenId|string|true|none|none|
|volumeLastDay|integer(int64)|true|none|none|

<h2 id="tocS_ViewElement">ViewElement</h2>
<!-- backwards compatibility -->
<a id="schemaviewelement"></a>
<a id="schema_ViewElement"></a>
<a id="tocSviewelement"></a>
<a id="tocsviewelement"></a>

```json
{
  "id": "string",
  "onClickAction": "string",
  "onLongPressAction": "string",
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|onClickAction|string|false|none|none|
|onLongPressAction|string|false|none|none|
|visible|boolean|false|none|none|
