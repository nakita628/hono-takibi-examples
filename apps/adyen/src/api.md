<h1 id="adyen-checkout-api">Adyen Checkout API v71</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).

This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [online payments documentation](https://docs.adyen.com/online-payments).

## Authentication
Each request to Checkout API must be signed with an API key. For this, [get your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) from your Customer Area, and set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```
## Versioning
Checkout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://checkout-test.adyen.com/v71/payments
```

## Server-side API libraries
We provide open-source [server-side API libraries](https://docs.adyen.com/development-resources/libraries/) in several languages: 
- PHP
- Java
- Node.js
- .NET
- Go
- Python
- Ruby
- Apex (beta)

See our [integration examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example uses of the libraries.

## Developer resources
Checkout API is available through a Postman collection. Click the button below to create a fork, then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-46ad970e-dc9e-4246-bac2-769c6083e7b5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-46ad970e-dc9e-4246-bac2-769c6083e7b5%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)


## Going live

To access the live endpoints, you need an API key from your live Customer Area.

The live endpoint URLs contain a prefix which is unique to your company account, for example:
```
https://{PREFIX}-checkout-live.adyenpayments.com/checkout/v71/payments
```

Get your `{PREFIX}` from your live Customer Area under **Developers** > **API URLs** > **Prefix**.

When preparing to do live transactions with Checkout API, follow the [go-live checklist](https://docs.adyen.com/online-payments/go-live-checklist) to make sure you've got all the required configuration in place.

## Release notes
Have a look at the [release notes](https://docs.adyen.com/online-payments/release-notes?integration_type=api&version=71) to find out what changed in this version!

Base URLs:

* <a href="https://checkout-test.adyen.com/v71">https://checkout-test.adyen.com/v71</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-checkout-api-payments">Payments</h1>

## Get the brands and other details of a card

<a id="opIdpost-cardDetails"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/cardDetails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "cardNumber": "411111"
  }'
```

`POST /cardDetails`

Use this endpoint to get information about the card or network token that enables you to decide on the routing of the transaction and the eligibility of the card for the type of transaction.

If you include [your supported brands](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cardDetails__reqParam_supportedBrands) in the request, the response also tells you if you support each [brand that was identified on the card](https://docs.adyen.com/api-explorer/Checkout/latest/post/cardDetails#responses-200-brands).

If you have an API-only integration and collect card data, use this endpoint to find out if the shopper's card is co-bad. For co-badged cards, you must let the shopper choose the brand to pay with  if you support both brands.

## Server-side API libraries
We provide open-source [server-side API libraries](https://docs.adyen.com/development-resources/libraries/) in several languages: 
- PHP
- Java
- Node.js
- .NET
- Go
- Python
- Ruby
- Apex (beta)

See our [integration examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for example uses of the libraries.

## Developer resources
BIN Lookup API is available through a Postman collection. Click the button below to create a fork, then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-677c7679-a695-4ebb-91da-68b4e7c9228a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-677c7679-a695-4ebb-91da-68b4e7c9228a%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)




> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "cardNumber": "411111"
}
```

<h3 id="get-the-brands-and-other-details-of-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CardDetailsRequest](#schemacarddetailsrequest)|false|none|
|» cardNumber|body|string|false|A minimum of the first six digits of the card number. The full card number gives the best result. <br><br>You must be [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide) to collect raw card data. Alternatively, you can use the `encryptedCardNumber` field.|
|» countryCode|body|string|false|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|» encryptedCardNumber|body|string|false|The encrypted card number.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» supportedBrands|body|[string]|false|The card brands you support. This is the [`brands`](https://docs.adyen.com/api-explorer/Checkout/latest/post/paymentMethods#responses-200-paymentMethods-brands) array from your [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response. <br><br>If not included, our API uses the ones configured for your merchant account and, if provided, the country code.|

> Example responses

> 200 Response

```json
{
  "brands": [
    {
      "type": "visa",
      "supported": true
    },
    {
      "type": "cartebancaire",
      "supported": true
    }
  ],
  "fundingSource": "CREDIT",
  "isCardCommercial": false,
  "issuingCountryCode": "FR"
}
```

<h3 id="get-the-brands-and-other-details-of-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CardDetailsResponse](#schemacarddetailsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a list of available payment methods

<a id="opIdpost-paymentMethods"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paymentMethods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /paymentMethods`

Retrieves the list of available payment methods for the transaction, based on the transaction information like amount, country, and currency.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="get-a-list-of-available-payment-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentMethodsRequest](#schemapaymentmethodsrequest)|false|none|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» allowedPaymentMethods|body|[string]|false|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|» amount|body|[Amount](#schemaamount)|false|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» blockedPaymentMethods|body|[string]|false|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» channel|body|string|false|The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values:<br>* iOS<br>* Android<br>* Web|
|» countryCode|body|string|false|The shopper's country code.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» order|body|[EncryptedOrderData](#schemaencryptedorderdata)|false|The order information required for partial payments.|
|» shopperConversionId|body|string|false|A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» splitCardFundingSources|body|boolean|false|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» storeFiltrationMode|body|string|false|Specifies how payment methods should be filtered based on the `store` parameter:<br>  - **exclusive**: Only payment methods belonging to the specified `store` are returned.<br>  - **inclusive**: Payment methods from the `store` and those not associated with any other store are returned.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|iOS|
|» channel|Android|
|» channel|Web|
|» storeFiltrationMode|exclusive|
|» storeFiltrationMode|inclusive|
|» storeFiltrationMode|skipFilter|

> Example responses

> 200 Response

```json
{
  "paymentMethods": [
    {
      "name": "ACH Direct Debit",
      "type": "ach"
    },
    {
      "name": "Adyen Voucher",
      "type": "adyen_test_voucher"
    },
    {
      "name": "AfterPay Invoice",
      "type": "afterpay_default"
    },
    {
      "name": "AfterPay DirectDebit",
      "type": "afterpay_directdebit"
    },
    {
      "name": "Afterpay",
      "type": "afterpaytouch"
    },
    {
      "name": "Cards",
      "type": "scheme"
    },
    {
      "name": "AliPay",
      "type": "alipay"
    },
    {
      "name": "AliPay HK",
      "type": "alipay_hk"
    },
    {
      "name": "AliPay",
      "type": "alipay_wap"
    },
    {
      "name": "Android Pay",
      "type": "androidpay"
    },
    {
      "name": "Apple Pay",
      "type": "applepay"
    },
    {
      "name": "Credit Card via AsiaPay",
      "type": "asiapay"
    },
    {
      "name": "China UnionPay",
      "type": "asiapay_unionpay"
    },
    {
      "name": "Baby Gift Card",
      "type": "babygiftcard"
    },
    {
      "name": "Baloto",
      "type": "baloto"
    },
    {
      "name": "BancNet",
      "type": "bancnet"
    },
    {
      "name": "Bank Transfer (BG)",
      "type": "bankTransfer_BG"
    },
    {
      "name": "Bank Transfer (CH)",
      "type": "bankTransfer_CH"
    },
    {
      "name": "Bank Transfer (DE)",
      "type": "bankTransfer_DE"
    },
    {
      "name": "Bank Transfer (FI)",
      "type": "bankTransfer_FI"
    },
    {
      "name": "Bank Transfer (GB)",
      "type": "bankTransfer_GB"
    },
    {
      "name": "Bank Transfer (HU)",
      "type": "bankTransfer_HU"
    },
    {
      "name": "SEPA Bank Transfer",
      "type": "bankTransfer_IBAN"
    },
    {
      "name": "Bank Transfer (IE)",
      "type": "bankTransfer_IE"
    },
    {
      "name": "Electronic Bank Transfer (MX)",
      "type": "bankTransfer_MX_linked"
    },
    {
      "name": "Bank Transfer (MX)",
      "type": "bankTransfer_MX_offline"
    },
    {
      "name": "Bank Transfer (NL)",
      "type": "bankTransfer_NL"
    },
    {
      "name": "Bank Transfer (PL)",
      "type": "bankTransfer_PL"
    },
    {
      "name": "Bank Transfer (SE)",
      "type": "bankTransfer_SE"
    },
    {
      "name": "Bank Transfer (US)",
      "type": "bankTransfer_US"
    },
    {
      "name": "Payconiq by Bancontact",
      "type": "bcmc_mobile"
    },
    {
      "name": "Bijenkorf Cadeaucard",
      "type": "bijcadeaucard"
    },
    {
      "name": "99Bill",
      "type": "bill99"
    },
    {
      "name": "Online Banking India",
      "type": "billdesk_online"
    },
    {
      "name": "UPI",
      "type": "billdesk_upi"
    },
    {
      "name": "Wallets India",
      "type": "billdesk_wallet"
    },
    {
      "name": "Blik",
      "type": "blik"
    },
    {
      "name": "Bloemen Giftcard",
      "type": "bloemengiftcard"
    },
    {
      "name": "Boekenbon Giftcard",
      "type": "boekenbon"
    },
    {
      "name": "Boleto",
      "type": "boleto"
    },
    {
      "name": "Boleto Bancario",
      "type": "boletobancario_santander"
    },
    {
      "name": "Bradesco",
      "type": "bradesco"
    },
    {
      "name": "Cash-Ticket",
      "type": "cashticket"
    },
    {
      "name": "CashU",
      "type": "cashu"
    },
    {
      "name": "CCAvenue",
      "type": "ccavenue"
    },
    {
      "name": "Mula Checkout",
      "type": "cellulant"
    },
    {
      "name": "Chasin Giftcard",
      "type": "chasingiftcard"
    },
    {
      "name": "Clearpay",
      "type": "clearpay"
    },
    {
      "name": "ClickandBuy",
      "type": "clickandbuy"
    },
    {
      "name": "Paiement en 3 fois par Cartes Bancaires",
      "type": "cofinoga_3xcb"
    },
    {
      "name": "Costes Giftcard",
      "type": "costesgiftcard"
    },
    {
      "name": "custom_settlement",
      "type": "custom_settlement"
    },
    {
      "name": "DANA",
      "type": "dana"
    },
    {
      "name": "DineroMail",
      "type": "dineromail"
    },
    {
      "name": "Online bank transfer.",
      "type": "directEbanking"
    },
    {
      "name": "Direct Debit Brazil - Banco do Brazil",
      "type": "directdebit_BR_bancodobrasil"
    },
    {
      "name": "Direct Debit Brazil - Bradesco",
      "type": "directdebit_BR_bradesco"
    },
    {
      "name": "Direct Debit Brazil - Caixa Economica Federal",
      "type": "directdebit_BR_caixa"
    },
    {
      "name": "Direct Debit Brazil - HSBC",
      "type": "directdebit_BR_hsbc"
    },
    {
      "name": "Direct Debit Brazil - Itau",
      "type": "directdebit_BR_itau"
    },
    {
      "name": "Direct Debit Brazil - Santander",
      "type": "directdebit_BR_santander"
    },
    {
      "name": "BACS Direct Debit",
      "type": "directdebit_GB"
    },
    {
      "name": "Alfamart",
      "type": "doku_alfamart"
    },
    {
      "name": "BCA Bank Transfer",
      "type": "doku_bca_va"
    },
    {
      "name": "BNI VA",
      "type": "doku_bni_va"
    },
    {
      "name": "BRI VA",
      "type": "doku_bri_va"
    },
    {
      "name": "CIMB VA",
      "type": "doku_cimb_va"
    },
    {
      "name": "Danamon VA",
      "type": "doku_danamon_va"
    },
    {
      "name": "Indomaret",
      "type": "doku_indomaret"
    },
    {
      "name": "Mandiri VA",
      "type": "doku_mandiri_va"
    },
    {
      "name": "OVO",
      "type": "doku_ovo"
    },
    {
      "name": "Bank Transfer",
      "type": "doku_permata_lite_atm"
    },
    {
      "name": "DOKU wallet",
      "type": "doku_wallet"
    },
    {
      "name": "Dragonpay Prepaid Credits",
      "type": "dragonpay_credits"
    },
    {
      "name": "Online Banking",
      "type": "dragonpay_ebanking"
    },
    {
      "name": "GCash",
      "type": "dragonpay_gcash"
    },
    {
      "name": "Over The Counter Banks",
      "type": "dragonpay_otc_banking"
    },
    {
      "name": "OTC non-Bank via Dragonpay",
      "type": "dragonpay_otc_non_banking"
    },
    {
      "name": "Convenience Stores",
      "type": "dragonpay_otc_philippines"
    },
    {
      "name": "7/11",
      "type": "dragonpay_seveneleven"
    },
    {
      "name": "eagleeye_voucher",
      "type": "eagleeye_voucher"
    },
    {
      "name": "Finnish E-Banking",
      "type": "ebanking_FI"
    },
    {
      "name": "Pay-easy ATM",
      "type": "econtext_atm"
    },
    {
      "name": "Online Banking",
      "type": "econtext_online"
    },
    {
      "name": "7-Eleven",
      "type": "econtext_seven_eleven"
    },
    {
      "name": "Convenience Stores",
      "type": "econtext_stores"
    },
    {
      "name": "eft_directdebit_CA",
      "type": "eft_directdebit_CA"
    },
    {
      "name": "Lastschrift (ELV)",
      "type": "elv"
    },
    {
      "name": "Bank Payment",
      "type": "entercash"
    },
    {
      "name": "Nationale Entertainment Card",
      "type": "entertainmentcard"
    },
    {
      "name": "EPS",
      "type": "eps"
    },
    {
      "name": "Expert Cadeaukaart",
      "type": "expertgiftcard"
    },
    {
      "name": "3x Oney",
      "type": "facilypay_3x"
    },
    {
      "name": "4x Oney",
      "type": "facilypay_4x"
    },
    {
      "name": "Fashioncheque",
      "type": "fashioncheque"
    },
    {
      "name": "Fawry",
      "type": "fawry"
    },
    {
      "name": "FijnCadeau",
      "type": "fijncadeau"
    },
    {
      "name": "Fleurop Bloemenbon",
      "type": "fleuropbloemenbon"
    },
    {
      "name": "Fonq Giftcard",
      "type": "fonqgiftcard"
    },
    {
      "name": "Gall & Gall",
      "type": "gallgall"
    },
    {
      "name": "GCash",
      "type": "gcash"
    },
    {
      "name": "Generic GiftCard",
      "type": "genericgiftcard"
    },
    {
      "name": "GiftFor2",
      "type": "giftfor2card"
    },
    {
      "name": "Givex",
      "type": "givex"
    },
    {
      "name": "Globe GCash",
      "type": "globegcash"
    },
    {
      "name": "Goldsmiths Card",
      "type": "goldsmithscard"
    },
    {
      "name": "GoPay Wallet",
      "type": "gopay_wallet"
    },
    {
      "name": "OVO",
      "type": "grabpay_ID"
    },
    {
      "name": "GrabPay",
      "type": "grabpay_PH"
    },
    {
      "name": "GrabPay",
      "type": "grabpay_SG"
    },
    {
      "name": "Hallmark Card",
      "type": "hallmarkcard"
    },
    {
      "name": "HDFC",
      "type": "hdfc"
    },
    {
      "name": "Hunkemoller Member Card",
      "type": "hmclub"
    },
    {
      "name": "Hunkemoller Lingerie Card",
      "type": "hmlingerie"
    },
    {
      "name": "iDEAL",
      "type": "ideal"
    },
    {
      "name": "igive",
      "type": "igive"
    },
    {
      "name": "Korean Account Transfer (IniPay)",
      "type": "inicisIniPay_accounttransfer"
    },
    {
      "name": "Korean Credit Cards (IniPay)",
      "type": "inicisIniPay_creditcard"
    },
    {
      "name": "Korean Mobile Phone (IniPay)",
      "type": "inicisIniPay_mobilephone"
    },
    {
      "name": "Korean Virtual Account (IniPay)",
      "type": "inicisIniPay_virtualaccount"
    },
    {
      "name": "Korean Account Transfer (Mobile)",
      "type": "inicisMobile_accounttransfer"
    },
    {
      "name": "Korean Credit Cards (Mobile)",
      "type": "inicisMobile_creditcard"
    },
    {
      "name": "Korean Mobile Phone (Mobile)",
      "type": "inicisMobile_mobilephone"
    },
    {
      "name": "Korean Virtual Account (Mobile)",
      "type": "inicisMobile_virtualaccount"
    },
    {
      "name": "Korean Credit Cards",
      "type": "inicis_creditcard"
    },
    {
      "name": "Interac® Online",
      "type": "interac"
    },
    {
      "name": "Instant EFT",
      "type": "ipay"
    },
    {
      "name": "iPay88",
      "type": "ipay88"
    },
    {
      "name": "isracard",
      "type": "isracard"
    },
    {
      "name": "Phone Payment",
      "type": "ivr"
    },
    {
      "name": "Landline phone",
      "type": "ivrLandline"
    },
    {
      "name": "Mobile phone",
      "type": "ivrMobile"
    },
    {
      "name": "Kado Wereld",
      "type": "kadowereld"
    },
    {
      "name": "KakaoPay",
      "type": "kakaopay"
    },
    {
      "name": "Karen Millen Card",
      "type": "karenmillen"
    },
    {
      "name": "Karen Millen GiftCard",
      "type": "karenmillengiftcard"
    },
    {
      "name": "Bank Transfer",
      "type": "kcp_banktransfer"
    },
    {
      "name": "Korea–issued cards",
      "type": "kcp_creditcard"
    },
    {
      "name": "PayCo",
      "type": "kcp_payco"
    },
    {
      "name": "Naver Pay",
      "type": "kcp_naverpay"
    },
    {
      "name": "Virtual Account via KCP",
      "type": "kcp_va"
    },
    {
      "name": "Pay later with Klarna.",
      "type": "klarna"
    },
    {
      "name": "Pay over time with Klarna.",
      "type": "klarna_account"
    },
    {
      "name": "Buy Now, Pay Later with Billie",
      "type": "klarna_b2b"
    },
    {
      "name": "Pay now with Klarna.",
      "type": "klarna_paynow"
    },
    {
      "name": "Leisure Card",
      "type": "leisurecard"
    },
    {
      "name": "China Credit Card",
      "type": "lianlianpay_creditcard"
    },
    {
      "name": "China Debit Card",
      "type": "lianlianpay_debitcard"
    },
    {
      "name": "China Online Banking - Credit Card",
      "type": "lianlianpay_ebanking_credit"
    },
    {
      "name": "China Online Banking - Debit Card",
      "type": "lianlianpay_ebanking_debit"
    },
    {
      "name": "China Online Banking - Enterprise",
      "type": "lianlianpay_ebanking_enterprise"
    },
    {
      "name": "Loods5 Cadeaukaart",
      "type": "loods5giftcard"
    },
    {
      "name": "Loods5 Tegoedbon",
      "type": "loods5prepaidcard"
    },
    {
      "name": "Love2Shop GiftCard",
      "type": "love2shop"
    },
    {
      "name": "mada",
      "type": "mada"
    },
    {
      "name": "Mappin & Webb Card",
      "type": "mappinwebbcard"
    },
    {
      "name": "MB WAY",
      "type": "mbway"
    },
    {
      "name": "Amazon Pay",
      "type": "amazonpay"
    },
    {
      "name": "Mercado Pago",
      "type": "mercadopago"
    },
    {
      "name": "MobilePay",
      "type": "mobilepay"
    },
    {
      "name": "AliPay via Razer Merchant Services",
      "type": "molpay_alipay"
    },
    {
      "name": "7-Eleven",
      "type": "molpay_cash"
    },
    {
      "name": "CIMB Virtual Account",
      "type": "molpay_cimb_va"
    },
    {
      "name": "Malaysia E-Banking via Razer Merchant Services",
      "type": "molpay_ebanking_MY"
    },
    {
      "name": "Vietnam E-Banking",
      "type": "molpay_ebanking_VN"
    },
    {
      "name": "Malaysia E-Banking",
      "type": "molpay_ebanking_fpx_MY"
    },
    {
      "name": "eNETS Debit",
      "type": "molpay_enetsd"
    },
    {
      "name": "epay",
      "type": "molpay_epay"
    },
    {
      "name": "Esapay",
      "type": "molpay_esapay"
    },
    {
      "name": "MyClear FPX",
      "type": "molpay_fpx"
    },
    {
      "name": "Maybank2u",
      "type": "molpay_maybank2u"
    },
    {
      "name": "Nganluong",
      "type": "molpay_nganluong"
    },
    {
      "name": "Convenience Stores Thailand",
      "type": "molpay_paysbuy"
    },
    {
      "name": "MOLPoints",
      "type": "molpay_points"
    },
    {
      "name": "RHB Now",
      "type": "molpay_rhb"
    },
    {
      "name": "SAM by SingPost",
      "type": "molpay_singpost"
    },
    {
      "name": "MOLWallet",
      "type": "molpay_wallet"
    },
    {
      "name": "MoMo ATM",
      "type": "momo_atm"
    },
    {
      "name": "Momo Wallet",
      "type": "momo_wallet"
    },
    {
      "name": "Moneybookers",
      "type": "moneybookers"
    },
    {
      "name": "Multibanco",
      "type": "multibanco"
    },
    {
      "name": "De Nationale Musicalcard",
      "type": "musicalcard"
    },
    {
      "name": "Nationale Bioscoopbon",
      "type": "nationalebioscoopbon"
    },
    {
      "name": "Nationale Tuinbon",
      "type": "nationaletuinbon"
    },
    {
      "name": "Nationale Verwen Cadeaubon",
      "type": "nationaleverwencadeaubon"
    },
    {
      "name": "BankAxess",
      "type": "netaxept_bankaxess"
    },
    {
      "name": "NETELLER",
      "type": "neteller"
    },
    {
      "name": "Onebip",
      "type": "onebip"
    },
    {
      "name": "One Two Three",
      "type": "onetwothree"
    },
    {
      "name": "Online Banking PL",
      "type": "onlineBanking_PL"
    },
    {
      "name": "Online banking",
      "type": "openbanking_UK"
    },
    {
      "name": "Oxxo",
      "type": "oxxo"
    },
    {
      "name": "Pathe Giftcard",
      "type": "pathegiftcard"
    },
    {
      "name": "PayBright",
      "type": "paybright"
    },
    {
      "name": "Maya Wallet",
      "type": "paymaya_wallet"
    },
    {
      "name": "PayPal",
      "type": "paypal"
    },
    {
      "name": "Paysafecard",
      "type": "paysafecard"
    },
    {
      "name": "Payshop",
      "type": "payshop"
    },
    {
      "name": "PayD AMT via Paythru",
      "type": "paythru_amt"
    },
    {
      "name": "EFT via Paythru",
      "type": "paythru_eft"
    },
    {
      "name": "PayTM",
      "type": "paytm"
    },
    {
      "name": "PayU UPI",
      "type": "payu_IN_upi"
    },
    {
      "name": "EFT Pro via PayU",
      "type": "payu_ZA_eftpro"
    },
    {
      "name": "Google Pay",
      "type": "paywithgoogle"
    },
    {
      "name": "pix",
      "type": "pix"
    },
    {
      "name": "Plastix",
      "type": "plastix"
    },
    {
      "name": "Pluim",
      "type": "pluimgiftcard"
    },
    {
      "name": "Podium Card",
      "type": "podiumcard"
    },
    {
      "name": "POLi",
      "type": "poli"
    },
    {
      "name": "PPS",
      "type": "pps"
    },
    {
      "name": "Primera Cadeaukaart",
      "type": "primeracadeaucard"
    },
    {
      "name": "Illicado Gift Card",
      "type": "prosodie_illicado"
    },
    {
      "name": "PSE",
      "type": "pse"
    },
    {
      "name": "Qiwi Wallet",
      "type": "qiwiwallet"
    },
    {
      "name": "RatePay Invoice",
      "type": "ratepay"
    },
    {
      "name": "RatePay Direct Debit",
      "type": "ratepay_directdebit"
    },
    {
      "name": "Rituals Giftcard",
      "type": "rituals"
    },
    {
      "name": "Rob Peetoom Giftcard",
      "type": "robpeetoomgiftcard"
    },
    {
      "name": "SafetyPay",
      "type": "safetypay"
    },
    {
      "name": "SafetyPay Cash",
      "type": "safetypay_cash"
    },
    {
      "name": "Shoes&Accessories Cadeau",
      "type": "sagiftcard"
    },
    {
      "name": "Score Giftcard",
      "type": "scoregiftcard"
    },
    {
      "name": "SEB Direktbetalning",
      "type": "sebdirectpayment"
    },
    {
      "name": "SEPA Direct Debit",
      "type": "sepadirectdebit"
    },
    {
      "name": "7-Eleven",
      "type": "seveneleven"
    },
    {
      "name": "Premium SMS",
      "type": "sms"
    },
    {
      "name": "SVS",
      "type": "svs"
    },
    {
      "name": "Swish",
      "type": "swish"
    },
    {
      "name": "TCS Test GiftCard",
      "type": "tcstestgiftcard"
    },
    {
      "name": "TenPay",
      "type": "tenpay"
    },
    {
      "name": "The Sting Giftcard",
      "type": "thestinggiftcard"
    },
    {
      "name": "TrueMoney",
      "type": "truemoney"
    },
    {
      "name": "Trustly",
      "type": "trustly"
    },
    {
      "name": "Online Banking by Trustpay",
      "type": "trustpay"
    },
    {
      "name": "TWINT",
      "type": "twint"
    },
    {
      "name": "Ukash",
      "type": "ukash"
    },
    {
      "name": "UnionPay",
      "type": "unionpay"
    },
    {
      "name": "UPI Collect",
      "type": "upi_collect"
    },
    {
      "name": "Valuelink",
      "type": "valuelink"
    },
    {
      "name": "V&D Cadeaukaart",
      "type": "vdcadeaucard"
    },
    {
      "name": "Vipps",
      "type": "vipps"
    },
    {
      "name": "Visa Checkout",
      "type": "visacheckout"
    },
    {
      "name": "VVV Cadeaubon",
      "type": "vvvcadeaubon"
    },
    {
      "name": "VVV Giftcard",
      "type": "vvvgiftcard"
    },
    {
      "name": "Webshop Giftcard",
      "type": "webshopgiftcard"
    },
    {
      "name": "WeChat Pay",
      "type": "wechatpayMiniProgram"
    },
    {
      "name": "WeChat Pay",
      "type": "wechatpayQR"
    },
    {
      "name": "WeChat Pay",
      "type": "wechatpayWeb"
    },
    {
      "name": "WE Fashion Giftcard",
      "type": "wefashiongiftcard"
    },
    {
      "name": "Western Union",
      "type": "westernunion"
    },
    {
      "name": "Winkel Cheque",
      "type": "winkelcheque"
    },
    {
      "name": "WOS Card",
      "type": "woscard"
    },
    {
      "name": "Alfa-Click",
      "type": "yandex_alfaclick"
    },
    {
      "name": "Pay using bank card",
      "type": "yandex_bank_card"
    },
    {
      "name": "Cash terminals",
      "type": "yandex_cash"
    },
    {
      "name": "Pay using installments",
      "type": "yandex_installments"
    },
    {
      "name": "YooMoney",
      "type": "yandex_money"
    },
    {
      "name": "Promsvyazbank",
      "type": "yandex_promsvyazbank"
    },
    {
      "name": "SberPay",
      "type": "yandex_sberbank"
    },
    {
      "name": "WebMoney",
      "type": "yandex_webmoney"
    },
    {
      "name": "Your Gift",
      "type": "yourgift"
    },
    {
      "name": "Zip",
      "type": "zip"
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-a-list-of-available-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentMethodsResponse](#schemapaymentmethodsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Start a transaction

<a id="opIdpost-payments"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "USD",
      "value": 1000
    },
    "reference": "Your order number",
    "paymentMethod": {
      "type": "applepay",
      "applePayToken": "VNRWtuNlNEWkRCSm1xWndjMDFFbktkQU..."
    },
    "returnUrl": "https://your-company.example.com/...",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /payments`

Sends payment parameters (like amount, country, and currency) together with other required input details collected from the shopper. To know more about required parameters for specific payment methods, refer to our [payment method guides](https://docs.adyen.com/payment-methods). 
The response depends on the [payment flow](https://docs.adyen.com/payment-methods#payment-flow):
* For a direct flow, the response includes a `pspReference` and a `resultCode` with the payment result, for example **Authorised** or **Refused**. 
* For a redirect or additional action, the response contains an `action` object. 

> Body parameter

```json
{
  "amount": {
    "currency": "USD",
    "value": 1000
  },
  "reference": "Your order number",
  "paymentMethod": {
    "type": "applepay",
    "applePayToken": "VNRWtuNlNEWkRCSm1xWndjMDFFbktkQU..."
  },
  "returnUrl": "https://your-company.example.com/...",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="start-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentRequest](#schemapaymentrequest)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» authenticationData|body|[AuthenticationData](#schemaauthenticationdata)|false|Data for 3DS authentication.|
|» bankAccount|body|[CheckoutBankAccount](#schemacheckoutbankaccount)|false|The details of the bank account, from which the payment should be made.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|» billingAddress|body|[BillingAddress](#schemabillingaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» captureDelayHours|body|integer(int32)|false|The [delay between the authorization and automatic capture](https://docs.adyen.com/online-payments/capture?tab=delayed-individual_2#delayed-automatic-capture) of the payment, specified in hours.<br><br>Maximum value: **672** (28 days).|
|» channel|body|string|false|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* iOS<br>* Android<br>* Web|
|» checkoutAttemptId|body|string|false|Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|» company|body|[Company](#schemacompany)|false|Information regarding the company.|
|» conversionId|body|string|false|**Deprecated.** Conversion ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|» countryCode|body|string|false|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|» dateOfBirth|body|string(date-time)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» dccQuote|body|[ForexQuote](#schemaforexquote)|false|The forex quote as returned in the response of the forex service.|
|» deliverAt|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deliveryAddress|body|[DeliveryAddress](#schemadeliveryaddress)|false|The address where the purchased goods should be delivered.|
|» deliveryDate|body|string(date-time)|false|**Deprecated.** The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» enableOneClick|body|boolean|false|When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).|
|» enablePayOut|body|boolean|false|When true and `shopperReference` is provided, the payment details will be tokenized for payouts.|
|» enableRecurring|body|boolean|false|When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|[Enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/) that may be required for processing the payment and/or interchange savings can apply.|
|» entityType|body|string|false|The type of the entity the payment is processed for.|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» fundOrigin|body|[FundOrigin](#schemafundorigin)|false|The person or entity funding the money.|
|» fundRecipient|body|[FundRecipient](#schemafundrecipient)|false|the person or entity receiving the money|
|» industryUsage|body|string|false|The reason for the amount update. Possible values: <br>* **delayedCharge** <br>* **noShow** <br>* **installment**|
|» installments|body|[Installments](#schemainstallments)|false|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|» localizedShopperStatement|body|object|false|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|» » **additionalProperties**|body|string|false|none|
|» mandate|body|[Mandate](#schemamandate)|false|The mandate details to initiate recurring transaction.|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|You can use this reference to link multiple transactions to one another (for example, to track order authorization rate). For each billing cycle, this reference should be unique. After the first authorized payment attempt, do not reuse the reference. If you use this parameter, include it in all of the payment requests that you make. <br> We strongly recommend that you:<br>* Always include this parameter, so that you can benefit from linking payment requests to one another, in case of authorization retries. <br>* Additionally include the following parameters in the `additionalData` object: [`retry.orderAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-orderAttemptNumber), [`retry.chainAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-chainAttemptNumber), and [`retry.skipRetry`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-skipRetry)|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» opi|body|[OpiRequest](#schemaopirequest)|false|Configuration for Oracle Payment Interface (OPI) integrations.|
|» order|body|[EncryptedOrderData](#schemaencryptedorderdata)|false|The order information required for partial payments.|
|» orderReference|body|string|false|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|» origin|body|string|false|> Required for browser-based (`channel` **Web**) 3D Secure 2 transactions.Set this to the origin URL of the page where you are rendering the Drop-in/Component. Do not include subdirectories and a trailing slash.|
|» paymentMethod|body|[AchDetails](#schemaachdetails) \| [AffirmDetails](#schemaaffirmdetails) \| [AfterpayDetails](#schemaafterpaydetails) \| [AlmaDetails](#schemaalmadetails) \| [AmazonPayDetails](#schemaamazonpaydetails) \| [AncvDetails](#schemaancvdetails) \| [AndroidPayDetails](#schemaandroidpaydetails) \| [ApplePayDetails](#schemaapplepaydetails) \| [AuPayDetails](#schemaaupaydetails) \| [BacsDirectDebitDetails](#schemabacsdirectdebitdetails) \| [BillDeskDetails](#schemabilldeskdetails) \| [BlikDetails](#schemablikdetails) \| [CardDetails](#schemacarddetails) \| [CashAppDetails](#schemacashappdetails) \| [CellulantDetails](#schemacellulantdetails) \| [DBaraiDetails](#schemadbaraidetails) \| [DirectDebitAuDetails](#schemadirectdebitaudetails) \| [DokuDetails](#schemadokudetails) \| [DragonpayDetails](#schemadragonpaydetails) \| [EBankingFinlandDetails](#schemaebankingfinlanddetails) \| [EcontextVoucherDetails](#schemaecontextvoucherdetails) \| [EftDetails](#schemaeftdetails) \| [ExternalTokenDetails](#schemaexternaltokendetails) \| [FastlaneDetails](#schemafastlanedetails) \| [GenericIssuerPaymentMethodDetails](#schemagenericissuerpaymentmethoddetails) \| [GooglePayDetails](#schemagooglepaydetails) \| [IdealDetails](#schemaidealdetails) \| [KlarnaDetails](#schemaklarnadetails) \| [KlarnaNetworkDetails](#schemaklarnanetworkdetails) \| [MasterpassDetails](#schemamasterpassdetails) \| [MbwayDetails](#schemambwaydetails) \| [MobilePayDetails](#schemamobilepaydetails) \| [MolPayDetails](#schemamolpaydetails) \| [OpenInvoiceDetails](#schemaopeninvoicedetails) \| [PayByBankAISDirectDebitDetails](#schemapaybybankaisdirectdebitdetails) \| [PayByBankCADirectDebitDetails](#schemapaybybankcadirectdebitdetails) \| [PayByBankDetails](#schemapaybybankdetails) \| [PayPalDetails](#schemapaypaldetails) \| [PayPayDetails](#schemapaypaydetails) \| [PayToDetails](#schemapaytodetails) \| [PayUUpiDetails](#schemapayuupidetails) \| [PayWithGoogleDetails](#schemapaywithgoogledetails) \| [PaymentDetails](#schemapaymentdetails) \| [PixDetails](#schemapixdetails) \| [PixPayByBankDetails](#schemapixpaybybankdetails) \| [PseDetails](#schemapsedetails) \| [RakutenPayDetails](#schemarakutenpaydetails) \| [RatepayDetails](#schemaratepaydetails) \| [RivertyDetails](#schemarivertydetails) \| [SamsungPayDetails](#schemasamsungpaydetails) \| [SepaDirectDebitDetails](#schemasepadirectdebitdetails) \| [StoredPaymentMethodDetails](#schemastoredpaymentmethoddetails) \| [TwintDetails](#schematwintdetails) \| [UpiCollectDetails](#schemaupicollectdetails) \| [UpiIntentDetails](#schemaupiintentdetails) \| [UpiQrDetails](#schemaupiqrdetails) \| [VippsDetails](#schemavippsdetails) \| [VisaCheckoutDetails](#schemavisacheckoutdetails) \| [WeChatPayDetails](#schemawechatpaydetails) \| [WeChatPayMiniProgramDetails](#schemawechatpayminiprogramdetails) \| [ZipDetails](#schemazipdetails)|true|The type and required details of a payment method to use.|
|» » *oneOf*|body|[AchDetails](#schemaachdetails)|false|none|
|» » *oneOf*|body|[AffirmDetails](#schemaaffirmdetails)|false|none|
|» » *oneOf*|body|[AfterpayDetails](#schemaafterpaydetails)|false|none|
|» » *oneOf*|body|[AlmaDetails](#schemaalmadetails)|false|none|
|» » *oneOf*|body|[AmazonPayDetails](#schemaamazonpaydetails)|false|none|
|» » *oneOf*|body|[AncvDetails](#schemaancvdetails)|false|none|
|» » *oneOf*|body|[AndroidPayDetails](#schemaandroidpaydetails)|false|none|
|» » *oneOf*|body|[ApplePayDetails](#schemaapplepaydetails)|false|none|
|» » *oneOf*|body|[AuPayDetails](#schemaaupaydetails)|false|none|
|» » *oneOf*|body|[BacsDirectDebitDetails](#schemabacsdirectdebitdetails)|false|none|
|» » *oneOf*|body|[BillDeskDetails](#schemabilldeskdetails)|false|none|
|» » *oneOf*|body|[BlikDetails](#schemablikdetails)|false|none|
|» » *oneOf*|body|[CardDetails](#schemacarddetails)|false|none|
|» » *oneOf*|body|[CashAppDetails](#schemacashappdetails)|false|none|
|» » *oneOf*|body|[CellulantDetails](#schemacellulantdetails)|false|none|
|» » *oneOf*|body|[DBaraiDetails](#schemadbaraidetails)|false|none|
|» » *oneOf*|body|[DirectDebitAuDetails](#schemadirectdebitaudetails)|false|none|
|» » *oneOf*|body|[DokuDetails](#schemadokudetails)|false|none|
|» » *oneOf*|body|[DragonpayDetails](#schemadragonpaydetails)|false|none|
|» » *oneOf*|body|[EBankingFinlandDetails](#schemaebankingfinlanddetails)|false|none|
|» » *oneOf*|body|[EcontextVoucherDetails](#schemaecontextvoucherdetails)|false|none|
|» » *oneOf*|body|[EftDetails](#schemaeftdetails)|false|none|
|» » *oneOf*|body|[ExternalTokenDetails](#schemaexternaltokendetails)|false|none|
|» » *oneOf*|body|[FastlaneDetails](#schemafastlanedetails)|false|none|
|» » *oneOf*|body|[GenericIssuerPaymentMethodDetails](#schemagenericissuerpaymentmethoddetails)|false|none|
|» » *oneOf*|body|[GooglePayDetails](#schemagooglepaydetails)|false|none|
|» » *oneOf*|body|[IdealDetails](#schemaidealdetails)|false|none|
|» » *oneOf*|body|[KlarnaDetails](#schemaklarnadetails)|false|none|
|» » *oneOf*|body|[KlarnaNetworkDetails](#schemaklarnanetworkdetails)|false|none|
|» » *oneOf*|body|[MasterpassDetails](#schemamasterpassdetails)|false|none|
|» » *oneOf*|body|[MbwayDetails](#schemambwaydetails)|false|none|
|» » *oneOf*|body|[MobilePayDetails](#schemamobilepaydetails)|false|none|
|» » *oneOf*|body|[MolPayDetails](#schemamolpaydetails)|false|none|
|» » *oneOf*|body|[OpenInvoiceDetails](#schemaopeninvoicedetails)|false|none|
|» » *oneOf*|body|[PayByBankAISDirectDebitDetails](#schemapaybybankaisdirectdebitdetails)|false|none|
|» » *oneOf*|body|[PayByBankCADirectDebitDetails](#schemapaybybankcadirectdebitdetails)|false|none|
|» » *oneOf*|body|[PayByBankDetails](#schemapaybybankdetails)|false|none|
|» » *oneOf*|body|[PayPalDetails](#schemapaypaldetails)|false|none|
|» » *oneOf*|body|[PayPayDetails](#schemapaypaydetails)|false|none|
|» » *oneOf*|body|[PayToDetails](#schemapaytodetails)|false|none|
|» » *oneOf*|body|[PayUUpiDetails](#schemapayuupidetails)|false|none|
|» » *oneOf*|body|[PayWithGoogleDetails](#schemapaywithgoogledetails)|false|none|
|» » *oneOf*|body|[PaymentDetails](#schemapaymentdetails)|false|none|
|» » *oneOf*|body|[PixDetails](#schemapixdetails)|false|none|
|» » *oneOf*|body|[PixPayByBankDetails](#schemapixpaybybankdetails)|false|none|
|» » *oneOf*|body|[PseDetails](#schemapsedetails)|false|none|
|» » *oneOf*|body|[RakutenPayDetails](#schemarakutenpaydetails)|false|none|
|» » *oneOf*|body|[RatepayDetails](#schemaratepaydetails)|false|none|
|» » *oneOf*|body|[RivertyDetails](#schemarivertydetails)|false|none|
|» » *oneOf*|body|[SamsungPayDetails](#schemasamsungpaydetails)|false|none|
|» » *oneOf*|body|[SepaDirectDebitDetails](#schemasepadirectdebitdetails)|false|none|
|» » *oneOf*|body|[StoredPaymentMethodDetails](#schemastoredpaymentmethoddetails)|false|none|
|» » *oneOf*|body|[TwintDetails](#schematwintdetails)|false|none|
|» » *oneOf*|body|[UpiCollectDetails](#schemaupicollectdetails)|false|none|
|» » *oneOf*|body|[UpiIntentDetails](#schemaupiintentdetails)|false|none|
|» » *oneOf*|body|[UpiQrDetails](#schemaupiqrdetails)|false|none|
|» » *oneOf*|body|[VippsDetails](#schemavippsdetails)|false|none|
|» » *oneOf*|body|[VisaCheckoutDetails](#schemavisacheckoutdetails)|false|none|
|» » *oneOf*|body|[WeChatPayDetails](#schemawechatpaydetails)|false|none|
|» » *oneOf*|body|[WeChatPayMiniProgramDetails](#schemawechatpayminiprogramdetails)|false|none|
|» » *oneOf*|body|[ZipDetails](#schemazipdetails)|false|none|
|» paymentValidations|body|[PaymentValidations](#schemapaymentvalidations)|false|The object that you can use to enable payment validations for a transaction.|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» recurringExpiry|body|string|false|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|» recurringFrequency|body|string|false|Minimum number of days between authorisations. Only for 3D Secure 2.|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» redirectFromIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|» redirectToIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. To provide multiple references for one transaction, separate the reference values with the hyphen (`-`) character. We strongly recommend that you use a unique value for each transaction.<br>Maximum length: 80 characters.|
|» returnUrl|body|string|true|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|» riskData|body|[RiskData](#schemariskdata)|false|Contains risk data, such as client-side data, used to identify risk for a transaction.|
|» sessionValidity|body|string|false|The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.<br><br>For example: 2020-07-18T15:42:40.428+01:00|
|» shopperConversionId|body|string|false|A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[ShopperName](#schemashoppername)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» shopperTaxInfo|body|[ShopperTaxInfo](#schemashoppertaxinfo)|false|**Deprecated.** The tax info of the shopper|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» storePaymentMethod|body|boolean|false|When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).|
|» subMerchants|body|[[SubMerchantInfo](#schemasubmerchantinfo)]|false|This field contains additional information on the submerchant, who is onboarded to an acquirer through a payment facilitator or aggregator|
|» surcharge|body|[Surcharge](#schemasurcharge)|false|The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). When you apply surcharge, include the surcharge in the `amount.value` field.<br><br>Review our [Surcharge compliance guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how to comply with regulatory requirements when applying surcharge.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» thirdPartyTokenRedundancyInfo|body|[ThirdPartyTokenRedundancyInfo](#schemathirdpartytokenredundancyinfo)|false|Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.|
|» threeDS2RequestData|body|[ThreeDS2RequestFields](#schemathreeds2requestfields)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDSAuthenticationOnly|body|boolean|false|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorisation.Default: **false**.|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|iOS|
|» channel|Android|
|» channel|Web|
|» entityType|NaturalPerson|
|» entityType|CompanyName|
|» industryUsage|delayedCharge|
|» industryUsage|installment|
|» industryUsage|noShow|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "resultCode": "IdentifyShopper",
  "action": {
    "paymentData": "Ab02b4c0!BQABAgCuZFJrQOjSsl\\/zt+...",
    "paymentMethodType": "scheme",
    "authorisationToken": "Ab02b4c0!BQABAgAvrX03p...",
    "subtype": "fingerprint",
    "token": "eyJ0aHJlZURTTWV0aG9kTm90aWZpY...",
    "type": "threeDS2"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="start-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentResponse](#schemapaymentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Submit details for a payment

<a id="opIdpost-payments-details"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "details": {
      "redirectResult": "X6XtfGC3!Y..."
    }
  }'
```

`POST /payments/details`

Submits details for a payment created using `/payments`. This step is only needed when no final state has been reached on the `/payments` request, for example when the shopper was redirected to another page to complete the payment.



> Body parameter

```json
{
  "details": {
    "redirectResult": "X6XtfGC3!Y..."
  }
}
```

<h3 id="submit-details-for-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentDetailsRequest](#schemapaymentdetailsrequest)|false|none|
|» authenticationData|body|[DetailsRequestAuthenticationData](#schemadetailsrequestauthenticationdata)|false|Data for 3DS authentication.|
|» details|body|[PaymentCompletionDetails](#schemapaymentcompletiondetails)|true|Use this collection to submit the details that were returned as a result of the `/payments` call.|
|» paymentData|body|string|false|Encoded payment data. For [authorizing a payment after using 3D Secure 2 Authentication-only](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only/#authorise-the-payment-with-adyen):<br><br>If you received `resultCode`: **AuthenticationNotRequired** in the `/payments` response, use the `threeDSPaymentData` from the same response.<br><br>If you received `resultCode`: **AuthenticationFinished** in the `/payments` response, use the `action.paymentData` from the same response.|
|» threeDSAuthenticationOnly|body|boolean|false|**Deprecated.** Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.|

> Example responses

> 200 Response

```json
{
  "resultCode": "Authorised",
  "pspReference": "V4HZ4RBFJGXXGN82"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="submit-details-for-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentDetailsResponse](#schemapaymentdetailsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create a payment session

<a id="opIdpost-sessions"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "amount": {
      "value": 100,
      "currency": "EUR"
    },
    "returnUrl": "https://your-company.example.com/checkout?shopperOrder=12xy..",
    "reference": "YOUR_PAYMENT_REFERENCE",
    "countryCode": "NL"
  }'
```

`POST /sessions`

Creates a payment session for [Drop-in](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in), [Components](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Components), and [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Hosted+Checkout) integrations.

The response contains encrypted payment session data. The front end then uses the session data to make any required server-side calls for the payment flow.

You get the payment outcome asynchronously, in an [AUTHORISATION](https://docs.adyen.com/api-explorer/#/Webhooks/latest/post/AUTHORISATION) webhook.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "amount": {
    "value": 100,
    "currency": "EUR"
  },
  "returnUrl": "https://your-company.example.com/checkout?shopperOrder=12xy..",
  "reference": "YOUR_PAYMENT_REFERENCE",
  "countryCode": "NL"
}
```

<h3 id="create-a-payment-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CreateCheckoutSessionRequest](#schemacreatecheckoutsessionrequest)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» allowedPaymentMethods|body|[string]|false|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|» amount|body|[Amount](#schemaamount)|true|The amount of the payment.|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» authenticationData|body|[AuthenticationData](#schemaauthenticationdata)|false|Configuration data for 3DS payments.|
|» billingAddress|body|[BillingAddress](#schemabillingaddress)|false|The address where to send the invoice.|
|» blockedPaymentMethods|body|[string]|false|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» channel|body|string|false|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* **iOS**<br>* **Android**<br>* **Web**|
|» company|body|[Company](#schemacompany)|false|Information regarding the company.|
|» countryCode|body|string|false|The shopper's two-letter country code.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» deliverAt|body|string(date-time)|false|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|» deliveryAddress|body|[DeliveryAddress](#schemadeliveryaddress)|false|The address where the purchased goods should be delivered.|
|» enableOneClick|body|boolean|false|When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).|
|» enablePayOut|body|boolean|false|When true and `shopperReference` is provided, the payment details will be tokenized for payouts.|
|» enableRecurring|body|boolean|false|When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.|
|» expiresAt|body|string(date-time)|false|The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.|
|» fundOrigin|body|[FundOrigin](#schemafundorigin)|false|The person or entity funding the money.|
|» fundRecipient|body|[FundRecipient](#schemafundrecipient)|false|the person or entity receiving the money|
|» installmentOptions|body|object|false|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|» » **additionalProperties**|body|[CheckoutSessionInstallmentOption](#schemacheckoutsessioninstallmentoption)|false|none|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|» mandate|body|[Mandate](#schemamandate)|false|The mandate details to initiate recurring transaction.|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request.<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» mode|body|string|false|Indicates the type of front end integration. Possible values:<br>* **embedded** (default): Drop-in or Components integration<br>* **hosted**: Hosted Checkout integration|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» recurringExpiry|body|string|false|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|» recurringFrequency|body|string|false|Minimum number of days between authorisations. Only for 3D Secure 2.|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» redirectFromIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|» redirectToIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|» reference|body|string|true|The reference to uniquely identify a payment.|
|» returnUrl|body|string|true|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|» riskData|body|[RiskData](#schemariskdata)|false|Any risk-related settings to apply to the payment.|
|» shopperConversionId|body|string|false|Use this if you made a `/paymentMethods` request to get the payment methods for the shopper's checkout session.<br><br>A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|» shopperEmail|body|string|false|The shopper's email address.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[ShopperName](#schemashoppername)|false|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|» shopperReference|body|string|false|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» showInstallmentAmount|body|boolean|false|Set to true to show the payment amount per installment.|
|» showRemovePaymentMethodButton|body|boolean|false|Set to **true** to show a button that lets the shopper remove a stored payment method.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splitCardFundingSources|body|boolean|false|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» storeFiltrationMode|body|string|false|Specifies how payment methods should be filtered based on the 'store' parameter:<br>  - 'exclusive': Only payment methods belonging to the specified 'store' are returned.<br>  - 'inclusive': Payment methods from the 'store' and those not associated with any other store are returned.|
|» storePaymentMethod|body|boolean|false|When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).|
|» storePaymentMethodMode|body|string|false|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» themeId|body|string|false|Sets a custom theme for [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout). The value can be any of the **Theme ID** values from your Customer Area.|
|» thirdPartyTokenRedundancyInfo|body|[ThirdPartyTokenRedundancyInfo](#schemathirdpartytokenredundancyinfo)|false|Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.|
|» threeDS2RequestData|body|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments).|
|» threeDSAuthenticationOnly|body|boolean|false|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|iOS|
|» channel|Android|
|» channel|Web|
|» mode|embedded|
|» mode|hosted|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|
|» storeFiltrationMode|exclusive|
|» storeFiltrationMode|inclusive|
|» storeFiltrationMode|skipFilter|
|» storePaymentMethodMode|askForConsent|
|» storePaymentMethodMode|disabled|
|» storePaymentMethodMode|enabled|

> Example responses

> 201 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 100
  },
  "countryCode": "NL",
  "expiresAt": "2022-01-11T13:53:18+01:00",
  "id": "CS451F2AB1ED897A94",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_PAYMENT_REFERENCE",
  "returnUrl": "https://your-company.example.com/checkout?shopperOrder=12xy..",
  "sessionData": "Ab02b4c0!BQABAgBfYI29..."
}
```

<h3 id="create-a-payment-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[CreateCheckoutSessionResponse](#schemacreatecheckoutsessionresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the result of a payment session

<a id="opIdget-sessions-sessionId"></a>

> Code samples

```bash
curl 'https://checkout-test.adyen.com/v71/sessions/string?sessionResult=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sessions/{sessionId}`

Returns the status of the payment session with the `sessionId` and `sessionResult` specified in the path.

<h3 id="get-the-result-of-a-payment-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|A unique identifier of the session.|
|sessionResult|query|string|true|The `sessionResult` value from the Drop-in or Component.|

> Example responses

> 200 Response

```json
{
  "id": "CS12345678",
  "status": "completed"
}
```

<h3 id="get-the-result-of-a-payment-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SessionResultResponse](#schemasessionresultresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-donations">Donations</h1>

## Get a list of donation campaigns.

<a id="opIdpost-donationCampaigns"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/donationCampaigns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "currency": "EUR"
  }'
```

`POST /donationCampaigns`

Queries the available donation campaigns for a donation based on the donation context (like merchant account, currency, and locale). The response contains active donation campaigns.

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "currency": "EUR"
}
```

<h3 id="get-a-list-of-donation-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[DonationCampaignsRequest](#schemadonationcampaignsrequest)|false|none|
|» currency|body|string|true|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).|
|» label|body|string|false|The label that is assigned to the donation campaign.|
|» locale|body|string|false|Locale on the shopper interaction device.|
|» merchantAccount|body|string|true|Your merchant account identifier.|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|

> Example responses

> 200 Response

```json
{
  "donationCampaigns": [
    {
      "id": "DONATION_CAMPAIGN_ID",
      "campaignName": "DONATION_CAMPAIGN_NAME",
      "donation": {
        "currency": "EUR",
        "type": "fixedAmounts",
        "donationType": "fixedAmounts",
        "values": [
          100,
          200,
          300
        ]
      },
      "nonprofitName": "NONPROFIT_NAME",
      "causeName": "NONPROFIT_CAUSE",
      "nonprofitDescription": "NONPROFIT_DESCRIPTION.",
      "nonprofitUrl": "NONPROFIT_WEBSITE_URL",
      "logoUrl": "NONPROFIT_LOGO_URL",
      "bannerUrl": "NONPROFIT_BANNER_URL",
      "termsAndConditionsUrl": "NONPROFIT_TERMS_AND_CONDITIONS_URL"
    },
    {
      "id": "DONATION_CAMPAIGN_ID",
      "campaignName": "DONATION_CAMPAIGN_NAME",
      "donation": {
        "currency": "EUR",
        "type": "roundup",
        "donationType": "roundup",
        "maxRoundupAmount": 100
      },
      "nonprofitName": "NONPROFIT_NAME",
      "causeName": "NONPROFIT_CAUSE",
      "nonprofitDescription": "NONPROFIT_DESCRIPTION.",
      "nonprofitUrl": "NONPROFIT_WEBSITE_URL",
      "logoUrl": "NONPROFIT_LOGO_URL",
      "bannerUrl": "NONPROFIT_BANNER_URL",
      "termsAndConditionsUrl": "NONPROFIT_TERMS_AND_CONDITIONS_URL"
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-a-list-of-donation-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DonationCampaignsResponse](#schemadonationcampaignsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Make a donation

<a id="opIdpost-donations"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/donations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "reference": "YOUR_DONATION_REFERENCE",
    "paymentMethod": {
      "type": "scheme"
    },
    "donationToken": "YOUR_DONATION_TOKEN",
    "donationOriginalPspReference": "991559660454807J",
    "donationCampaignId": "DONATION_CAMPAIGN_ID",
    "returnUrl": "https://your-company.example.com/...",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /donations`

Takes in the donation token generated by the `/payments` request and uses it to make the donation.

For more information, see [Donations](https://docs.adyen.com/online-payments/donations).

> Body parameter

```json
{
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "reference": "YOUR_DONATION_REFERENCE",
  "paymentMethod": {
    "type": "scheme"
  },
  "donationToken": "YOUR_DONATION_TOKEN",
  "donationOriginalPspReference": "991559660454807J",
  "donationCampaignId": "DONATION_CAMPAIGN_ID",
  "returnUrl": "https://your-company.example.com/...",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="make-a-donation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[DonationPaymentRequest](#schemadonationpaymentrequest)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» authenticationData|body|[AuthenticationData](#schemaauthenticationdata)|false|Data for 3DS authentication.|
|» billingAddress|body|[BillingAddress](#schemabillingaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» channel|body|string|false|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* iOS<br>* Android<br>* Web|
|» checkoutAttemptId|body|string|false|Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|» conversionId|body|string|false|**Deprecated.** Conversion ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|» countryCode|body|string|false|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|» dateOfBirth|body|string(date-time)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» deliverAt|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deliveryAddress|body|[DeliveryAddress](#schemadeliveryaddress)|false|The address where the purchased goods should be delivered.|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» donationAccount|body|string|false|Donation account to which the transaction is credited.|
|» donationCampaignId|body|string|false|The donation campaign ID received in the `/donationCampaigns` call.|
|» donationOriginalPspReference|body|string|false|PSP reference of the transaction from which the donation token is generated. Required when `donationToken` is provided.|
|» donationToken|body|string|false|Donation token received in the `/payments` call.|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» mpiData|body|[ThreeDSecureData](#schemathreedsecuredata)|false|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|» origin|body|string|false|> Required for browser-based (`channel` **Web**) 3D Secure 2 transactions.Set this to the origin URL of the page where you are rendering the Drop-in/Component. Do not include subdirectories and a trailing slash.|
|» paymentMethod|body|[ApplePayDonations](#schemaapplepaydonations) \| [CardDonations](#schemacarddonations) \| [GooglePayDonations](#schemagooglepaydonations) \| [IdealDonations](#schemaidealdonations) \| [PayWithGoogleDonations](#schemapaywithgoogledonations) \| [SepaDirectDebitDonations](#schemasepadirectdebitdonations)|false|The type and required details of a payment method to use.<br><br>When `donationToken` is provided, the payment method is derived from the token and this field becomes optional.<br><br>If you are [PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide), and make donations using raw card details, you must explicitly provide the payment method details.|
|» » *oneOf*|body|[ApplePayDonations](#schemaapplepaydonations)|false|none|
|» » *oneOf*|body|[CardDonations](#schemacarddonations)|false|none|
|» » *oneOf*|body|[GooglePayDonations](#schemagooglepaydonations)|false|none|
|» » *oneOf*|body|[IdealDonations](#schemaidealdonations)|false|none|
|» » *oneOf*|body|[PayWithGoogleDonations](#schemapaywithgoogledonations)|false|none|
|» » *oneOf*|body|[SepaDirectDebitDonations](#schemasepadirectdebitdonations)|false|none|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» redirectFromIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|» redirectToIssuerMethod|body|string|false|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|» reference|body|string|true|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» returnUrl|body|string|true|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|» sessionValidity|body|string|false|The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.<br><br>For example: 2020-07-18T15:42:40.428+01:00|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorization rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorization (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[ShopperName](#schemashoppername)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» threeDS2RequestData|body|[ThreeDS2RequestFields](#schemathreeds2requestfields)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDSAuthenticationOnly|body|boolean|false|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|iOS|
|» channel|Android|
|» channel|Web|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "id": "UNIQUE_RESOURCE_ID",
  "status": "completed",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "reference": "YOUR_DONATION_REFERENCE",
  "payment": {
    "pspReference": "8535762347980628",
    "resultCode": "Authorised",
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "merchantReference": "YOUR_DONATION_REFERENCE"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="make-a-donation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DonationPaymentResponse](#schemadonationpaymentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-payment-links">Payment links</h1>

## Create a payment link

<a id="opIdpost-paymentLinks"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paymentLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "reference": "YOUR_ORDER_NUMBER",
    "amount": {
      "value": 1250,
      "currency": "BRL"
    },
    "countryCode": "BR",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "shopperEmail": "test@email.com",
    "shopperLocale": "pt-BR",
    "billingAddress": {
      "street": "Roque Petroni Jr",
      "postalCode": "59000060",
      "city": "São Paulo",
      "houseNumberOrName": "999",
      "country": "BR",
      "stateOrProvince": "SP"
    },
    "deliveryAddress": {
      "street": "Roque Petroni Jr",
      "postalCode": "59000060",
      "city": "São Paulo",
      "houseNumberOrName": "999",
      "country": "BR",
      "stateOrProvince": "SP"
    }
  }'
```

`POST /paymentLinks`

Creates a payment link to a [Pay by Link](https://docs.adyen.com/unified-commerce/pay-by-link/) page where the shopper can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.

For more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).

> Body parameter

```json
{
  "reference": "YOUR_ORDER_NUMBER",
  "amount": {
    "value": 1250,
    "currency": "BRL"
  },
  "countryCode": "BR",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "shopperEmail": "test@email.com",
  "shopperLocale": "pt-BR",
  "billingAddress": {
    "street": "Roque Petroni Jr",
    "postalCode": "59000060",
    "city": "São Paulo",
    "houseNumberOrName": "999",
    "country": "BR",
    "stateOrProvince": "SP"
  },
  "deliveryAddress": {
    "street": "Roque Petroni Jr",
    "postalCode": "59000060",
    "city": "São Paulo",
    "houseNumberOrName": "999",
    "country": "BR",
    "stateOrProvince": "SP"
  }
}
```

<h3 id="create-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentLinkRequest](#schemapaymentlinkrequest)|false|none|
|» allowedPaymentMethods|body|[string]|false|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|» amount|body|[Amount](#schemaamount)|true|The payment amount and currency.|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.|
|» blockedPaymentMethods|body|[string]|false|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» countryCode|body|string|false|The shopper's two-letter country code.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» deliverAt|body|string(date-time)|false|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|» deliveryAddress|body|[Address](#schemaaddress)|false|The address where the purchased goods should be delivered.|
|» description|body|string|false|A short description visible on the payment page.<br>Maximum length: 280 characters.|
|» expiresAt|body|string(date-time)|false|The date when the payment link expires.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.<br><br>The maximum expiry date is 70 days after the payment link is created.<br><br>If not provided, the payment link expires 24 hours after it was created.|
|» fundOrigin|body|[FundOrigin](#schemafundorigin)|false|The person or entity funding the money.|
|» fundRecipient|body|[FundRecipient](#schemafundrecipient)|false|the person or entity receiving the money|
|» installmentOptions|body|object|false|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|» » **additionalProperties**|body|[InstallmentOption](#schemainstallmentoption)|false|none|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|» manualCapture|body|boolean|false|Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture).|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier for which the payment link is created.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limitations:<br>* Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"<br>* Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"<br>* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.|
|» » **additionalProperties**|body|string|false|none|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when `storePaymentMethodMode` is set to **askForConsent** or **enabled**.<br>Possible values:<br>* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» reference|body|string|true|A reference that is used to uniquely identify the payment in future communications about the payment status.|
|» requiredShopperFields|body|[string]|false|List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).<br><br>Possible values:<br>* **billingAddress** – The address where to send the invoice.<br>* **deliveryAddress** – The address where the purchased goods should be delivered.<br>* **shopperEmail** – The shopper's email address.<br>* **shopperName** – The shopper's full name.<br>* **telephoneNumber** – The shopper's phone number.<br>|
|» returnUrl|body|string|false|Website URL used for redirection after payment is completed.<br>If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.|
|» reusable|body|boolean|false|Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.|
|» riskData|body|[RiskData](#schemariskdata)|false|Any risk-related settings to apply to the payment.|
|» shopperEmail|body|string|false|The shopper's email address.|
|» shopperLocale|body|string|false|The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.<br><br>For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|» shopperReference|body|string|false|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» showRemovePaymentMethodButton|body|boolean|false|Set to **false** to hide the button that lets the shopper remove a stored payment method.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splitCardFundingSources|body|boolean|false|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|» store|body|string|false|The physical store, for which this payment is processed.|
|» storePaymentMethodMode|body|string|false|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent. <br> When set to **askForConsent** or **enabled**, you must also include the `recurringProcessingModel` parameter.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» themeId|body|string|false|A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area.|
|» threeDS2RequestData|body|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|The cardholder phone number need to be part of the authentication message for payment data. It is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» requiredShopperFields|billingAddress|
|» requiredShopperFields|deliveryAddress|
|» requiredShopperFields|shopperEmail|
|» requiredShopperFields|shopperName|
|» requiredShopperFields|telephoneNumber|
|» storePaymentMethodMode|askForConsent|
|» storePaymentMethodMode|disabled|
|» storePaymentMethodMode|enabled|

> Example responses

> 201 Response

```json
{
  "amount": {
    "currency": "BRL",
    "value": 1250
  },
  "billingAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "countryCode": "BR",
  "deliveryAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "expiresAt": "2022-10-28T09:16:22Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_ORDER_NUMBER",
  "reusable": false,
  "shopperEmail": "test@email.com",
  "shopperLocale": "pt-BR",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "id": "PLE83C39B0A0DE0C1E",
  "status": "active",
  "url": "https://test.adyen.link/PLE83C39B0A0DE0C1E"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="create-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has succeeded.|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a payment link

<a id="opIdget-paymentLinks-linkId"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paymentLinks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /paymentLinks/{linkId}`

Retrieves the payment link details using the payment link `id`.

<h3 id="get-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkId|path|string|true|Unique identifier of the payment link.|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "active",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update the status of a payment link

<a id="opIdpatch-paymentLinks-linkId"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paymentLinks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "status": "expired"
  }'
```

`PATCH /paymentLinks/{linkId}`

Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).

> Body parameter

```json
{
  "status": "expired"
}
```

<h3 id="update-the-status-of-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkId|path|string|true|Unique identifier of the payment link.|
|body|body|[UpdatePaymentLinkRequest](#schemaupdatepaymentlinkrequest)|false|none|
|» status|body|string|true|Status of the payment link. Possible values:<br>* **expired**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|expired|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "expired",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="update-the-status-of-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentLinkResponse](#schemapaymentlinkresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-modifications">Modifications</h1>

## Cancel an authorised payment

<a id="opIdpost-cancels"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/cancels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "paymentReference": "YOUR_UNIQUE_REFERENCE_FOR_THE_PAYMENT",
    "reference": "YOUR_UNIQUE_REFERENCE_FOR_THE_CANCELLATION",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /cancels`

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**TECHNICAL_CANCEL** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment using the [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference), use the [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

> Body parameter

```json
{
  "paymentReference": "YOUR_UNIQUE_REFERENCE_FOR_THE_PAYMENT",
  "reference": "YOUR_UNIQUE_REFERENCE_FOR_THE_CANCELLATION",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-an-authorised-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[StandalonePaymentCancelRequest](#schemastandalonepaymentcancelrequest)|false|none|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» paymentReference|body|string|true|The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel.|
|» reference|body|string|false|Your reference for the cancel request. Maximum length: 80 characters.|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentReference": "YOUR_UNIQUE_REFERENCE_FOR_THE_PAYMENT",
  "reference": "YOUR_UNIQUE_REFERENCE_FOR_THE_CANCELLATION",
  "pspReference": "993617894906488A",
  "status": "received"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-authorised-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[StandalonePaymentCancelResponse](#schemastandalonepaymentcancelresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update an authorised amount

<a id="opIdpost-payments-paymentPspReference-amountUpdates"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/string/amountUpdates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "amount": {
      "currency": "EUR",
      "value": 2500
    },
    "reference": "YOUR_UNIQUE_REFERENCE"
  }'
```

`POST /payments/{paymentPspReference}/amountUpdates`

Increases or decreases the authorised payment amount and returns a unique reference for this request. You get the outcome of the request asynchronously, in an [**AUTHORISATION_ADJUSTMENT** webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes).

You can only update authorised amounts that have not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).

The amount you specify in the request is the updated amount, which is larger or smaller than the initial authorised amount.

For more information, refer to [Authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "amount": {
    "currency": "EUR",
    "value": 2500
  },
  "reference": "YOUR_UNIQUE_REFERENCE"
}
```

<h3 id="update-an-authorised-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentPspReference|path|string|true|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment.|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentAmountUpdateRequest](#schemapaymentamountupdaterequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The updated amount. The `currency` must match the currency used in authorisation.|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» industryUsage|body|string|false|The reason for the amount update. Possible values: <br>* **delayedCharge** <br>* **noShow** <br>* **installment**|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» reference|body|string|false|Your reference for the amount update request. Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» industryUsage|delayedCharge|
|» industryUsage|installment|
|» industryUsage|noShow|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentPspReference": "993617894903480A",
  "reference": "YOUR_UNIQUE_REFERENCE",
  "pspReference": "993617894906488A",
  "status": "received",
  "amount": {
    "currency": "EUR",
    "value": 2500
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="update-an-authorised-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[PaymentAmountUpdateResponse](#schemapaymentamountupdateresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel an authorised payment

<a id="opIdpost-payments-paymentPspReference-cancels"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/string/cancels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "reference": "YOUR_UNIQUE_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /payments/{paymentPspReference}/cancels`

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCELLATION** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment but don't have the [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference), use the [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

> Body parameter

```json
{
  "reference": "YOUR_UNIQUE_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-an-authorised-payment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentPspReference|path|string|true|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to cancel. |
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentCancelRequest](#schemapaymentcancelrequest)|false|none|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» reference|body|string|false|Your reference for the cancel request. Maximum length: 80 characters.|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentPspReference": "993617894903480A",
  "reference": "YOUR_UNIQUE_REFERENCE",
  "pspReference": "993617894906488A",
  "status": "received"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-authorised-payment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[PaymentCancelResponse](#schemapaymentcancelresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Capture an authorised payment

<a id="opIdpost-payments-paymentPspReference-captures"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/string/captures \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "reference": "YOUR_UNIQUE_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "amount": {
      "value": 2000,
      "currency": "EUR"
    }
  }'
```

`POST /payments/{paymentPspReference}/captures`

 Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CAPTURE** webhook](https://docs.adyen.com/online-payments/capture#capture-notification).

You can capture either the full authorised amount or a part of the authorised amount. By default, any unclaimed amount after a partial capture gets cancelled. This does not apply if you enabled multiple partial captures on your account and the payment method supports multiple partial captures. 

[Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture) is the default setting for most payment methods. In these cases, you don't need to make capture requests. However, making capture requests for payments that are captured automatically does not result in double charges.

For more information, refer to [Capture](https://docs.adyen.com/online-payments/capture).

> Body parameter

```json
{
  "reference": "YOUR_UNIQUE_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "amount": {
    "value": 2000,
    "currency": "EUR"
  }
}
```

<h3 id="capture-an-authorised-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentPspReference|path|string|true|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to capture.|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentCaptureRequest](#schemapaymentcapturerequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» platformChargebackLogic|body|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|» reference|body|string|false|Your reference for the capture request. Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|» subMerchants|body|[[SubMerchantInfo](#schemasubmerchantinfo)]|false|A List of sub-merchants.|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentPspReference": "993617894903480A",
  "reference": "YOUR_UNIQUE_REFERENCE",
  "pspReference": "993617894906488A",
  "status": "received",
  "amount": {
    "value": 2000,
    "currency": "EUR"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="capture-an-authorised-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[PaymentCaptureResponse](#schemapaymentcaptureresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Refund a captured payment

<a id="opIdpost-payments-paymentPspReference-refunds"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/string/refunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "amount": {
      "currency": "EUR",
      "value": 2500
    },
    "reference": "YOUR_UNIQUE_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /payments/{paymentPspReference}/refunds`

Refunds a payment that has been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**REFUND** webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).

You can refund either the full captured amount or a part of the captured amount. You can also perform multiple partial refunds, as long as their sum doesn't exceed the captured amount.

> Some payment methods do not support partial refunds. To learn if a payment method supports partial refunds, refer to the payment method page such as [cards](https://docs.adyen.com/payment-methods/cards#supported-cards), [iDEAL](https://docs.adyen.com/payment-methods/ideal), or [Klarna](https://docs.adyen.com/payment-methods/klarna). 

If you want to refund a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Refund](https://docs.adyen.com/online-payments/refund).

> Body parameter

```json
{
  "amount": {
    "currency": "EUR",
    "value": 2500
  },
  "reference": "YOUR_UNIQUE_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="refund-a-captured-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentPspReference|path|string|true|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to refund.|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentRefundRequest](#schemapaymentrefundrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount that you want to refund. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» capturePspReference|body|string|false|This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the specific capture to refund.|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» lineItems|body|[[LineItem](#schemalineitem)]|false|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» merchantRefundReason|body|string \| null|false|The reason for the refund request.<br><br>Possible values:<br><br>* **FRAUD**<br><br>* **CUSTOMER REQUEST**<br><br>* **RETURN**<br><br>* **DUPLICATE**<br><br>* **OTHER**<br><br>|
|» reference|body|string|false|Your reference for the refund request. Maximum length: 80 characters.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|» store|body|string|false|The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» merchantRefundReason|FRAUD|
|» merchantRefundReason|CUSTOMER REQUEST|
|» merchantRefundReason|RETURN|
|» merchantRefundReason|DUPLICATE|
|» merchantRefundReason|OTHER|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentPspReference": "993617894903480A",
  "reference": "YOUR_UNIQUE_REFERENCE",
  "pspReference": "993617894906488A",
  "status": "received",
  "amount": {
    "currency": "EUR",
    "value": 2500
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="refund-a-captured-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[PaymentRefundResponse](#schemapaymentrefundresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Refund or cancel a payment

<a id="opIdpost-payments-paymentPspReference-reversals"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/payments/string/reversals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "reference": "YOUR_UNIQUE_REFERENCE",
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /payments/{paymentPspReference}/reversals`

[Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds) a payment if it has already been captured, and [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) a payment if it has not yet been captured. Returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCEL_OR_REFUND** webhook](https://docs.adyen.com/online-payments/reversal/#cancel-or-refund-webhook).

The reversed amount is always the full payment amount.
> Do not use this request for payments that involve multiple partial captures.

For more information, refer to [Reversal](https://docs.adyen.com/online-payments/reversal).

> Body parameter

```json
{
  "reference": "YOUR_UNIQUE_REFERENCE",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="refund-or-cancel-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentPspReference|path|string|true|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment that you want to reverse. |
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaymentReversalRequest](#schemapaymentreversalrequest)|false|none|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» enhancedSchemeData|body|[EnhancedSchemeData](#schemaenhancedschemedata)|false|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|» merchantAccount|body|string|true|The merchant account that is used to process the payment.|
|» reference|body|string|false|Your reference for the reversal request. Maximum length: 80 characters.|

> Example responses

> 201 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "paymentPspReference": "993617894903480A",
  "reference": "YOUR_UNIQUE_REFERENCE",
  "pspReference": "993617894906488A",
  "status": "received"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="refund-or-cancel-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[PaymentReversalResponse](#schemapaymentreversalresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-recurring">Recurring</h1>

## Forward stored payment details

<a id="opIdpost-forward"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/forward \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
    "baseUrl": "http://thirdparty.example.com",
    "request": {
      "httpMethod": "post",
      "urlSuffix": "/payments",
      "credentials": "YOUR_CREDENTIALS_FOR_THE_THIRD_PARTY",
      "headers": {
        "Authorization": "Basic {{credentials}}"
      },
      "body": "{\"amount\":{\"value\":100,\"currency\":\"USD\"},\"paymentMethod\":{\"creditCard\":{\"holderName\":\"{{holderName}}\",\"number\":\"{{number}}\",\"expiryMonth\":\"{{expiryMonth}}\",\"expiryYear\":\"{{expiryYear}}\"}}}"
    }
  }'
```

`POST /forward`

Forwards the payment details you stored with Adyen to a third-party that you specify and returns the response from the third-party. Supports forwarding stored card details or [network tokens](https://docs.adyen.com/online-payments/network-tokenization). For more information, see [Forward stored payment details](https://docs.adyen.com/online-payments/tokenization/forward-payment-details).

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
  "baseUrl": "http://thirdparty.example.com",
  "request": {
    "httpMethod": "post",
    "urlSuffix": "/payments",
    "credentials": "YOUR_CREDENTIALS_FOR_THE_THIRD_PARTY",
    "headers": {
      "Authorization": "Basic {{credentials}}"
    },
    "body": "{\"amount\":{\"value\":100,\"currency\":\"USD\"},\"paymentMethod\":{\"creditCard\":{\"holderName\":\"{{holderName}}\",\"number\":\"{{number}}\",\"expiryMonth\":\"{{expiryMonth}}\",\"expiryYear\":\"{{expiryYear}}\"}}}"
  }
}
```

<h3 id="forward-stored-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CheckoutForwardRequest](#schemacheckoutforwardrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The amount of the forwarded payment.|
|» baseUrl|body|string|true|The base URL of the third party API, where Adyen will send the request to forward the payment details.|
|» merchantAccount|body|string|true|Your merchant account.|
|» merchantReference|body|string|false|Merchant defined payment reference.|
|» options|body|[CheckoutForwardRequestOptions](#schemacheckoutforwardrequestoptions)|false|The customizations that can be applied when making a forward request.|
|» paymentMethod|body|[CheckoutForwardRequestCard](#schemacheckoutforwardrequestcard)|false|The card details.|
|» request|body|[CheckoutOutgoingForwardRequest](#schemacheckoutoutgoingforwardrequest)|true|The [details of the request](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#request-to-adyen-card) that you want to forward to the third-party.|
|» shopperReference|body|string|true|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» storedPaymentMethodId|body|string|false|The unique identifier of the token that you want to forward to the third party. This is the `storedPaymentMethodId` you received in the webhook after you created the token.|

> Example responses

> 200 Response

```json
{
  "storedPaymentMethodId": "M5N7TQ4TG5PFWR50",
  "pspReference": "XB7XNCQ8HXSKGK82",
  "response": {
    "status": 200,
    "headers": {
      "thirdparty-version": "2023-10-16"
    },
    "body": "{\"success\": \"ok\",\"data\": {\"tokenizeCreditCard\": {\"paymentMethod\": {\"id\": \"PAYMENT_METHOD_ID\"}}}}"
  }
}
```

<h3 id="forward-stored-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CheckoutForwardResponse](#schemacheckoutforwardresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get tokens for stored payment details

<a id="opIdget-storedPaymentMethods"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/storedPaymentMethods \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /storedPaymentMethods`

Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* API tokenise payment details

<h3 id="get-tokens-for-stored-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shopperReference|query|string|false|Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|merchantAccount|query|string|false|Your merchant account.|

> Example responses

> 200 Response

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "storedPaymentMethods": [
    {
      "brand": "visa",
      "expiryMonth": "10",
      "expiryYear": "30",
      "holderName": "John Smith",
      "id": "7219687191761347",
      "issuerName": "ISSUER_NAME",
      "lastFour": "1111",
      "name": "VISA",
      "shopperEmail": "john.smith@example.com",
      "shopperReference": "YOUR_SHOPPER_REFERENCE",
      "supportedRecurringProcessingModels": [
        "CardOnFile",
        "Subscription",
        "UnscheduledCardOnFile"
      ],
      "type": "scheme"
    }
  ]
}
```

<h3 id="get-tokens-for-stored-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ListStoredPaymentMethodsResponse](#schemaliststoredpaymentmethodsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create a token to store payment details

<a id="opIdpost-storedPaymentMethods"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/storedPaymentMethods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "shopperReference": "YOUR_SHOPPER_REFERENCE",
    "paymentMethod": {
      "type": "scheme",
      "encryptedCardNumber": "test_4111111111111111",
      "encryptedExpiryMonth": "test_03",
      "encryptedExpiryYear": "test_2030",
      "encryptedSecurityCode": "test_737",
      "holderName": "John Smith"
    },
    "recurringProcessingModel": "Subscription",
    "shopperEmail": "s.hopper@test.com",
    "shopperIP": "192.0.2.1"
  }'
```

`POST /storedPaymentMethods`

Creates a token to store the shopper's payment details. This token can be used for the shopper's future payments.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* API tokenise payment details

> Body parameter

```json
{
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "paymentMethod": {
    "type": "scheme",
    "encryptedCardNumber": "test_4111111111111111",
    "encryptedExpiryMonth": "test_03",
    "encryptedExpiryYear": "test_2030",
    "encryptedSecurityCode": "test_737",
    "holderName": "John Smith"
  },
  "recurringProcessingModel": "Subscription",
  "shopperEmail": "s.hopper@test.com",
  "shopperIP": "192.0.2.1"
}
```

<h3 id="create-a-token-to-store-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[StoredPaymentMethodRequest](#schemastoredpaymentmethodrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» opi|body|[OpiRequest](#schemaopirequest)|false|Configuration for Oracle Payment Interface (OPI) integrations.|
|» paymentMethod|body|[PaymentMethodToStore](#schemapaymentmethodtostore)|true|Contains the information required to store a payment method.|
|» recurringProcessingModel|body|string|true|Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.|
|» shopperIP|body|string|false|The IP address of a shopper.|
|» shopperReference|body|string|true|A unique identifier for the shopper (for example, user ID or account ID).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|

> Example responses

> 201 Response

```json
{
  "expiryMonth": "03",
  "expiryYear": "2030",
  "holderName": "John Smith",
  "id": "KHQC5N7G84BLNK43",
  "lastFour": "1111",
  "shopperReference": "YOUR_SHOPPER_REFERENCE",
  "type": "scheme"
}
```

<h3 id="create-a-token-to-store-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created - the request has been fulfilled and has resulted in one or more new resources being created.|[StoredPaymentMethodResource](#schemastoredpaymentmethodresource)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a token for stored payment details

<a id="opIddelete-storedPaymentMethods-storedPaymentMethodId"></a>

> Code samples

```bash
curl 'https://checkout-test.adyen.com/v71/storedPaymentMethods/string?shopperReference=string&merchantAccount=string' \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /storedPaymentMethods/{storedPaymentMethodId}`

Deletes the token identified in the path. The token can no longer be used with payment requests.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* API tokenise payment details

<h3 id="delete-a-token-for-stored-payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storedPaymentMethodId|path|string|true|The unique identifier of the token.|
|shopperReference|query|string|true|Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|merchantAccount|query|string|true|Your merchant account.|

<h3 id="delete-a-token-for-stored-payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-orders">Orders</h1>

## Create an order

<a id="opIdpost-orders"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "reference": "YOUR_ORDER_REFERENCE",
    "amount": {
      "value": 2500,
      "currency": "EUR"
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /orders`

Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.

> Body parameter

```json
{
  "reference": "YOUR_ORDER_REFERENCE",
  "amount": {
    "value": 2500,
    "currency": "EUR"
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="create-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CreateOrderRequest](#schemacreateorderrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The total amount of the order.|
|» expiresAt|body|string|false|The date when the order should expire. If not provided, the default expiry duration is 1 day.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the order.|
|» reference|body|string|true|A custom reference identifying the order.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8616178914061985",
  "resultCode": "Success",
  "expiresAt": "2021-04-09T14:16:46Z",
  "orderData": "Ab02b4c0!BQABAgCxXvknCldOcRElkxY8Za7iyym4Wv8aDzyNwmj/3nh4G6YtwnUIJHaK62NlN4oIsACdkn1FEjBwKlheG40jvXcYGBk4KFV5WvOhTVCpv/KXnkrI7xQv/u2lE7U4wA+HPB6K4Zj2L8xO/ogZi+zGZqFs5m16jmkH7ku6FzXygXLNuUCuOlmlXSZhdkHHTNVQSq1MELDK9OL74y532ETRPTCNxx8WlEiZB+LDqYrPvH9GgigtD5kw8Do45jfFfG72kWBEgfYqp4mbUmBB9ebXFYZKfF0qvW1x7A2Y9+/MFlTIdXfKW484bJeDBCTTrmKGXIj+U4r5imr5fXTyNLcrxyUqwrb9jg+5B4qg1XB6Cgj5UPlSI4O62I7v0s5TTj69dzLwUQRxSQbwLrZVGYavXzeVKI54BVLRV3d/+BbPvTqnTo34UhfZbPlOx9F2eyaS0ZXdOKnHw89uGUgxUpLsMqnbRysi/pxpZaulel+0mExb68wVxb/7Teob5eRG4gp7cfZVZs6tLXOYWL+W0TqIlsa3hWsfM0LeaovzkoDtW/pK5JABXwMtLig9tsxoEh9ONYtIzkXC21LZ8ebiuSIMaPizjF8yca+QxrCZalQsu6uKnBz/mm8nnsflaGU2QS5zcoxk1RudL1Bl36LM9UZGPpFEYWiYA4sUsnNLw7peJjWCGhDepnwMv4TlgsEtoDtz1T54AEp7ImtleSI6IkFGMEFBQTEwM0NBNTM3RUFFRDg3QzI0REQ1MzkwOUI4MEE3OEE5MjNFMzgyM0Q2OERBQ0M5NEI5RkY4MzA1REMifRslOdmfgUHTXl66WPD9xoW2whIeRx/jR++2MqNE16x6zQy+KtDN8/h60crZwmqkjVTQYqQlsYSYDHSIyb4wnnay16/5il1yS7vN3UCLaTXjYBIAyyx6Wr9j4P3CI/etB+PpviHoESC4mV6ZN4whMDQyziQ8s230GtboXbh42qND7rk9phySBogowQlXrtF+l2n2F46nyif0owEgik5fGARfvjZtY2w23s30KMLNwU4gWSvX4H6RMVS8TfZH2fKfNrwB3tZUXwYkELs5ntaHysswq5Mn5aq2BKAMHu/Rh/wureMSI73Qi0avjrzWCwzt3JH4wnzErMnOZwSdgA==",
  "reference": "shopper-reference-ekvL83",
  "remainingAmount": {
    "currency": "EUR",
    "value": 2500
  },
  "amount": {
    "currency": "EUR",
    "value": 300
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="create-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CreateOrderResponse](#schemacreateorderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Cancel an order

<a id="opIdpost-orders-cancel"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/orders/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "order": {
      "pspReference": "8815517812932012",
      "orderData": "823fh892f8f18f4...148f13f9f3f"
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /orders/cancel`

Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.

> Body parameter

```json
{
  "order": {
    "pspReference": "8815517812932012",
    "orderData": "823fh892f8f18f4...148f13f9f3f"
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="cancel-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CancelOrderRequest](#schemacancelorderrequest)|false|none|
|» merchantAccount|body|string|true|The merchant account identifier that orderData belongs to.|
|» order|body|[EncryptedOrderData](#schemaencryptedorderdata)|true|The order request object that contains a pspReference that represents the order and the matching encrypted order data.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8816178914079738",
  "resultCode": "Received"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="cancel-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CancelOrderResponse](#schemacancelorderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get the balance of a gift card

<a id="opIdpost-paymentMethods-balance"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paymentMethods/balance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "paymentMethod": {
      "type": "givex",
      "number": "4126491073027401",
      "cvc": "737"
    },
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
  }'
```

`POST /paymentMethods/balance`

Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.

> Body parameter

```json
{
  "paymentMethod": {
    "type": "givex",
    "number": "4126491073027401",
    "cvc": "737"
  },
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
}
```

<h3 id="get-the-balance-of-a-gift-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[BalanceCheckRequest](#schemabalancecheckrequest)|false|none|
|» accountInfo|body|[AccountInfo](#schemaaccountinfo)|false|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» additionalAmount|body|[Amount](#schemaamount)|false|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|» additionalData|body|object|false|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|» » **additionalProperties**|body|string|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|» applicationInfo|body|[ApplicationInfo](#schemaapplicationinfo)|false|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|» billingAddress|body|[Address](#schemaaddress)|false|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|» browserInfo|body|[BrowserInfo](#schemabrowserinfo)|false|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|» captureDelayHours|body|integer(int32)|false|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|» dateOfBirth|body|string(date)|false|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|» dccQuote|body|[ForexQuote](#schemaforexquote)|false|The forex quote as returned in the response of the forex service.|
|» deliveryAddress|body|[Address](#schemaaddress)|false|The address where the purchased goods should be delivered.|
|» deliveryDate|body|string(date-time)|false|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|» deviceFingerprint|body|string|false|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|» fraudOffset|body|integer(int32)|false|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|» installments|body|[Installments](#schemainstallments)|false|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|» localizedShopperStatement|body|object|false|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|» » **additionalProperties**|body|string|false|none|
|» mcc|body|string|false|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» merchantOrderReference|body|string|false|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|» merchantRiskIndicator|body|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|» metadata|body|object|false|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|» » **additionalProperties**|body|string|false|none|
|» orderReference|body|string|false|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|» paymentMethod|body|object|true|The collection that contains the type of the payment method and its specific information.|
|» » **additionalProperties**|body|string|false|none|
|» recurring|body|[Recurring](#schemarecurring)|false|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|» recurringProcessingModel|body|string|false|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|» reference|body|string|false|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|» selectedBrand|body|string|false|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|» selectedRecurringDetailReference|body|string|false|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|» sessionId|body|string|false|A session ID used to identify a payment session.|
|» shopperEmail|body|string|false|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|» shopperIP|body|string|false|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|» shopperInteraction|body|string|false|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|» shopperLocale|body|string|false|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|» shopperName|body|[Name](#schemaname)|false|The shopper's full name.|
|» shopperReference|body|string|false|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|» shopperStatement|body|string|false|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|» socialSecurityNumber|body|string|false|The shopper's social security number.|
|» splits|body|[[Split](#schemasplit)]|false|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|» store|body|string|false|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|» telephoneNumber|body|string|false|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|» threeDS2RequestData|body|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|» threeDSAuthenticationOnly|body|boolean|false|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|» totalsGroup|body|string|false|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|» trustedShopper|body|boolean|false|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recurringProcessingModel|CardOnFile|
|» recurringProcessingModel|Subscription|
|» recurringProcessingModel|UnscheduledCardOnFile|
|» shopperInteraction|Ecommerce|
|» shopperInteraction|ContAuth|
|» shopperInteraction|Moto|
|» shopperInteraction|POS|

> Example responses

> 200 Response

```json
{
  "pspReference": "KHQC5N7G84BLNK43",
  "resultCode": "Success",
  "balance": {
    "currency": "EUR",
    "value": 5000
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="get-the-balance-of-a-gift-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalanceCheckResponse](#schemabalancecheckresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="adyen-checkout-api-utility">Utility</h1>

## Get an Apple Pay session

<a id="opIdpost-applePay-sessions"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/applePay/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "displayName": "YOUR_MERCHANT_NAME",
    "domainName": "YOUR_DOMAIN_NAME",
    "merchantIdentifier": "YOUR_MERCHANT_ID"
  }'
```

`POST /applePay/sessions`

You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate.

The endpoint returns the Apple Pay session data which you need to complete the [Apple Pay session validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).

> Body parameter

```json
{
  "displayName": "YOUR_MERCHANT_NAME",
  "domainName": "YOUR_DOMAIN_NAME",
  "merchantIdentifier": "YOUR_MERCHANT_ID"
}
```

<h3 id="get-an-apple-pay-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[ApplePaySessionRequest](#schemaapplepaysessionrequest)|false|none|
|» displayName|body|string|true|This is the name that your shoppers will see in the Apple Pay interface.<br><br>The value returned as `configuration.merchantName` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.|
|» domainName|body|string|true|The domain name you provided when you added Apple Pay in your Customer Area.<br><br>This must match the `window.location.hostname` of the web shop.|
|» merchantIdentifier|body|string|true|Your merchant identifier registered with Apple Pay.<br><br>Use the value of the `configuration.merchantId` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.|

> Example responses

> 200 Response

```json
{
  "data": "eyJ2Z..."
}
```

<h3 id="get-an-apple-pay-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ApplePaySessionResponse](#schemaapplepaysessionresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create originKey values for domains

<a id="opIdpost-originKeys"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/originKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originDomains": [
      "https://www.your-domain1.com",
      "https://www.your-domain2.com",
      "https://www.your-domain3.com"
    ]
  }'
```

`POST /originKeys`

<aside class="warning">
This operation is deprecated
</aside>

This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains. 
> If you're still using origin key for your Web Drop-in or Components integration, we recommend [switching to client key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key). This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form. 

> Body parameter

```json
{
  "originDomains": [
    "https://www.your-domain1.com",
    "https://www.your-domain2.com",
    "https://www.your-domain3.com"
  ]
}
```

<h3 id="create-originkey-values-for-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[UtilityRequest](#schemautilityrequest)|false|none|
|» originDomains|body|[string]|true|The list of origin domains, for which origin keys are requested.|

> Example responses

> 200 Response

```json
{
  "originKeys": {
    "https://www.your-domain1.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4xLmNvbQ.pvbYlrXz0ICP4kwMJXDGDLVMqALhwXr1MSRjT-fkhvw",
    "https://www.your-domain3.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4zLmNvbQ.FrTpVz7_RzAywKasM0kXCRoMfoMkKIKaxjFymRGORIc",
    "https://www.your-domain2.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4yLmNvbQ.LdN9kvJ35fYFFiBSJA4idMnwwxJ5_yXpeNS__Ap5wkg"
  }
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="create-originkey-values-for-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UtilityResponse](#schemautilityresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Updates the order for PayPal Express Checkout

<a id="opIdpost-paypal-updateOrder"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/paypal/updateOrder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "pspReference": "DZ4DPSHB4WD2WN82",
    "paymentData": "po7XZ...",
    "amount": {
      "currency": "EUR",
      "value": 12000
    },
    "deliveryMethods": [
      {
        "reference": "1",
        "description": "Express Shipping",
        "type": "Shipping",
        "amount": {
          "currency": "EUR",
          "value": 1000
        },
        "selected": true
      },
      {
        "reference": "2",
        "description": "Standard Ground",
        "type": "Shipping",
        "amount": {
          "currency": "EUR",
          "value": 500
        },
        "selected": false
      }
    ]
  }'
```

`POST /paypal/updateOrder`

Updates the order for PayPal Express Checkout. This can be used to update the PayPal lightbox with an updated amount and delivery methods based on the delivery address.

> Body parameter

```json
{
  "pspReference": "DZ4DPSHB4WD2WN82",
  "paymentData": "po7XZ...",
  "amount": {
    "currency": "EUR",
    "value": 12000
  },
  "deliveryMethods": [
    {
      "reference": "1",
      "description": "Express Shipping",
      "type": "Shipping",
      "amount": {
        "currency": "EUR",
        "value": 1000
      },
      "selected": true
    },
    {
      "reference": "2",
      "description": "Standard Ground",
      "type": "Shipping",
      "amount": {
        "currency": "EUR",
        "value": 500
      },
      "selected": false
    }
  ]
}
```

<h3 id="updates-the-order-for-paypal-express-checkout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[PaypalUpdateOrderRequest](#schemapaypalupdateorderrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|false|The updated final payment amount. This amount is the item total plus the shipping costs of the selected `deliveryMethod`.|
|» deliveryAddress|body|[DeliveryAddress](#schemadeliveryaddress)|false|The delivery address for this order.|
|» deliveryMethods|body|[[DeliveryMethod](#schemadeliverymethod)]|false|The list of new delivery methods and the cost of each.|
|» discountAmount|body|[Amount](#schemaamount)|false|The discount amount for this order.|
|» paymentData|body|string|false|The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request.|
|» pspReference|body|string|false|The original `pspReference` from the `/payments` response.|
|» sessionId|body|string|false|The original `sessionId` from the `/sessions` response.|
|» shippingAmount|body|[Amount](#schemaamount)|false|The shipping amount for this order.|
|» taxTotal|body|[TaxTotal](#schemataxtotal)|false|Total tax amount from the order. |

> Example responses

> 200 Response

```json
{
  "paymentData": "po7XZ...",
  "status": "success"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: \", expected: }",
  "errorType": "validation"
}
```

> 401 Response

```json
{
  "status": 401,
  "errorCode": "000",
  "message": "HTTP Status Response - Unauthorized",
  "errorType": "security"
}
```

> 403 Response

```json
{
  "status": 403,
  "errorCode": "901",
  "message": "Invalid Merchant Account",
  "errorType": "security",
  "pspReference": "881611827877203B"
}
```

> 422 Response

```json
{
  "status": 422,
  "errorCode": "14_030",
  "message": "Return URL is missing.",
  "errorType": "validation",
  "pspReference": "8816118280275544"
}
```

> 500 Response

```json
{
  "status": 500,
  "errorCode": "905",
  "message": "Payment details are not supported",
  "errorType": "configuration",
  "pspReference": "8516091485743033"
}
```

<h3 id="updates-the-order-for-paypal-express-checkout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaypalUpdateOrderResponse](#schemapaypalupdateorderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Validates shopper Id

<a id="opIdpost-validateShopperId"></a>

> Code samples

```bash
curl https://checkout-test.adyen.com/v71/validateShopperId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "merchantAccount": "string",
    "paymentMethod": {
      "type": "string"
    },
    "shopperEmail": "string",
    "shopperIP": "string",
    "shopperReference": "string"
  }'
```

`POST /validateShopperId`

Validates the shopperId.


> Body parameter

```json
{
  "merchantAccount": "string",
  "paymentMethod": {
    "type": "string"
  },
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperReference": "string"
}
```

<h3 id="validates-shopper-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ValidateShopperIdRequest](#schemavalidateshopperidrequest)|true|none|
|» merchantAccount|body|string|true|The merchant account identifier, with which you want to process the transaction.|
|» paymentMethod|body|[ShopperIdPaymentMethod](#schemashopperidpaymentmethod)|true|paymentMethod|
|» shopperEmail|body|string|false|none|
|» shopperIP|body|string|false|none|
|» shopperReference|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "reason": "string",
  "result": "VALID"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
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
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="validates-shopper-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ValidateShopperIdResponse](#schemavalidateshopperidresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[CheckoutErrorResponseEntity](#schemacheckouterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[CheckoutErrorResponseEntity](#schemacheckouterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[CheckoutErrorResponseEntity](#schemacheckouterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[CheckoutErrorResponseEntity](#schemacheckouterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[CheckoutErrorResponseEntity](#schemacheckouterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccountInfo">AccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinfo"></a>
<a id="schema_AccountInfo"></a>
<a id="tocSaccountinfo"></a>
<a id="tocsaccountinfo"></a>

```json
{
  "accountAgeIndicator": "notApplicable",
  "accountChangeDate": "1970-01-01T00:00:00Z",
  "accountChangeIndicator": "thisTransaction",
  "accountCreationDate": "1970-01-01T00:00:00Z",
  "accountType": "notApplicable",
  "addCardAttemptsDay": 0,
  "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
  "deliveryAddressUsageIndicator": "thisTransaction",
  "homePhone": "string",
  "mobilePhone": "string",
  "passwordChangeDate": "1970-01-01T00:00:00Z",
  "passwordChangeIndicator": "notApplicable",
  "pastTransactionsDay": 0,
  "pastTransactionsYear": 0,
  "paymentAccountAge": "1970-01-01T00:00:00Z",
  "paymentAccountIndicator": "notApplicable",
  "purchasesLast6Months": 0,
  "suspiciousActivity": true,
  "workPhone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountAgeIndicator|string|false|none|Indicator for the length of time since this shopper account was created in the merchant's environment.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|accountChangeDate|string(date-time)|false|none|Date when the shopper's account was last changed.|
|accountChangeIndicator|string|false|none|Indicator for the length of time since the shopper's account was last updated.<br>Allowed values:<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|accountCreationDate|string(date-time)|false|none|Date when the shopper's account was created.|
|accountType|string|false|none|Indicates the type of account. For example, for a multi-account card product.<br>Allowed values:<br>* notApplicable<br>* credit<br>* debit|
|addCardAttemptsDay|integer(int32)|false|none|Number of attempts the shopper tried to add a card to their account in the last day.|
|deliveryAddressUsageDate|string(date-time)|false|none|Date the selected delivery address was first used.|
|deliveryAddressUsageIndicator|string|false|none|Indicator for the length of time since this delivery address was first used.<br>Allowed values:<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|homePhone|string|false|none|**Deprecated.** Shopper's home phone number (including the country code).|
|mobilePhone|string|false|none|**Deprecated.** Shopper's mobile phone number (including the country code).|
|passwordChangeDate|string(date-time)|false|none|Date when the shopper last changed their password.|
|passwordChangeIndicator|string|false|none|Indicator when the shopper has changed their password.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|pastTransactionsDay|integer(int32)|false|none|Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.|
|pastTransactionsYear|integer(int32)|false|none|Number of all transactions (successful and abandoned) from this shopper in the past year.|
|paymentAccountAge|string(date-time)|false|none|Date this payment method was added to the shopper's account.|
|paymentAccountIndicator|string|false|none|Indicator for the length of time since this payment method was added to this shopper's account.<br>Allowed values:<br>* notApplicable<br>* thisTransaction<br>* lessThan30Days<br>* from30To60Days<br>* moreThan60Days|
|purchasesLast6Months|integer(int32)|false|none|Number of successful purchases in the last six months.|
|suspiciousActivity|boolean|false|none|Whether suspicious activity was recorded on this account.|
|workPhone|string|false|none|**Deprecated.** Shopper's work phone number (including the country code).|

#### Enumerated Values

|Property|Value|
|---|---|
|accountAgeIndicator|notApplicable|
|accountAgeIndicator|thisTransaction|
|accountAgeIndicator|lessThan30Days|
|accountAgeIndicator|from30To60Days|
|accountAgeIndicator|moreThan60Days|
|accountChangeIndicator|thisTransaction|
|accountChangeIndicator|lessThan30Days|
|accountChangeIndicator|from30To60Days|
|accountChangeIndicator|moreThan60Days|
|accountType|notApplicable|
|accountType|credit|
|accountType|debit|
|deliveryAddressUsageIndicator|thisTransaction|
|deliveryAddressUsageIndicator|lessThan30Days|
|deliveryAddressUsageIndicator|from30To60Days|
|deliveryAddressUsageIndicator|moreThan60Days|
|passwordChangeIndicator|notApplicable|
|passwordChangeIndicator|thisTransaction|
|passwordChangeIndicator|lessThan30Days|
|passwordChangeIndicator|from30To60Days|
|passwordChangeIndicator|moreThan60Days|
|paymentAccountIndicator|notApplicable|
|paymentAccountIndicator|thisTransaction|
|paymentAccountIndicator|lessThan30Days|
|paymentAccountIndicator|from30To60Days|
|paymentAccountIndicator|moreThan60Days|

<h2 id="tocS_AcctInfo">AcctInfo</h2>
<!-- backwards compatibility -->
<a id="schemaacctinfo"></a>
<a id="schema_AcctInfo"></a>
<a id="tocSacctinfo"></a>
<a id="tocsacctinfo"></a>

```json
{
  "chAccAgeInd": "01",
  "chAccChange": "string",
  "chAccChangeInd": "01",
  "chAccPwChange": "string",
  "chAccPwChangeInd": "01",
  "chAccString": "string",
  "nbPurchaseAccount": "string",
  "paymentAccAge": "string",
  "paymentAccInd": "01",
  "provisionAttemptsDay": "string",
  "shipAddressUsage": "string",
  "shipAddressUsageInd": "01",
  "shipNameIndicator": "01",
  "suspiciousAccActivity": "01",
  "txnActivityDay": "str",
  "txnActivityYear": "str"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chAccAgeInd|string|false|none|Length of time that the cardholder has had the account with the 3DS Requestor. <br>Allowed values:<br>* **01** — No account<br>* **02** — Created during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|chAccChange|string|false|none|Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <br>Format: **YYYYMMDD**|
|chAccChangeInd|string|false|none|Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <br>Allowed values:<br>* **01** — Changed during this transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days|
|chAccPwChange|string|false|none|Date that cardholder’s account with the 3DS Requestor had a password change or account reset. <br>Format: **YYYYMMDD**|
|chAccPwChangeInd|string|false|none|Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset. <br>Allowed values:<br>* **01** — No change<br>* **02** — Changed during this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|chAccString|string|false|none|Date that the cardholder opened the account with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|nbPurchaseAccount|string|false|none|Number of purchases with this cardholder account during the previous six months. Max length: 4 characters.|
|paymentAccAge|string|false|none|String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|paymentAccInd|string|false|none|Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <br>Allowed values:<br>* **01** — No account (guest checkout)<br>* **02** — During this transaction<br>* **03** — Less than 30 days<br>* **04** — 30–60 days<br>* **05** — More than 60 days|
|provisionAttemptsDay|string|false|none|Number of Add Card attempts in the last 24 hours. Max length: 3 characters.|
|shipAddressUsage|string|false|none|String when the shipping address used for this transaction was first used with the 3DS Requestor. <br>Format: **YYYYMMDD**|
|shipAddressUsageInd|string|false|none|Indicates when the shipping address used for this transaction was first used with the 3DS Requestor. <br>Allowed values:<br>* **01** — This transaction<br>* **02** — Less than 30 days<br>* **03** — 30–60 days<br>* **04** — More than 60 days|
|shipNameIndicator|string|false|none|Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. <br>Allowed values:<br>* **01** — Account Name identical to shipping Name<br>* **02** — Account Name different to shipping Name|
|suspiciousAccActivity|string|false|none|Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account. <br>Allowed values:<br>* **01** — No suspicious activity has been observed<br>* **02** — Suspicious activity has been observed|
|txnActivityDay|string|false|none|Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Max length: 3 characters.|
|txnActivityYear|string|false|none|Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Max length: 3 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|chAccAgeInd|01|
|chAccAgeInd|02|
|chAccAgeInd|03|
|chAccAgeInd|04|
|chAccAgeInd|05|
|chAccChangeInd|01|
|chAccChangeInd|02|
|chAccChangeInd|03|
|chAccChangeInd|04|
|chAccPwChangeInd|01|
|chAccPwChangeInd|02|
|chAccPwChangeInd|03|
|chAccPwChangeInd|04|
|chAccPwChangeInd|05|
|paymentAccInd|01|
|paymentAccInd|02|
|paymentAccInd|03|
|paymentAccInd|04|
|paymentAccInd|05|
|shipAddressUsageInd|01|
|shipAddressUsageInd|02|
|shipAddressUsageInd|03|
|shipAddressUsageInd|04|
|shipNameIndicator|01|
|shipNameIndicator|02|
|suspiciousAccActivity|01|
|suspiciousAccActivity|02|

<h2 id="tocS_AchDetails">AchDetails</h2>
<!-- backwards compatibility -->
<a id="schemaachdetails"></a>
<a id="schema_AchDetails"></a>
<a id="tocSachdetails"></a>
<a id="tocsachdetails"></a>

```json
{
  "accountHolderType": "business",
  "bankAccountNumber": "string",
  "bankAccountType": "balance",
  "bankLocationId": "string",
  "checkoutAttemptId": "string",
  "encryptedBankAccountNumber": "string",
  "encryptedBankLocationId": "string",
  "ownerName": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "transferInstrumentId": "string",
  "type": "ach"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderType|string|false|none|The account holder type (personal or business).|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankAccountType|string|false|none|The bank account type (checking, savings...).|
|bankLocationId|string|false|none|The bank routing number of the account. The field value is `nil` in most cases.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|encryptedBankAccountNumber|string|false|none|Encrypted bank account number. The bank account number (without separators).|
|encryptedBankLocationId|string|false|none|Encrypted location id. The bank routing number of the account. The field value is `nil` in most cases.|
|ownerName|string|false|none|The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|transferInstrumentId|string|false|none|The unique identifier of your user's verified transfer instrument, which you can use to top up their balance accounts.|
|type|string|false|none|**ach**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountHolderType|business|
|accountHolderType|personal|
|bankAccountType|balance|
|bankAccountType|checking|
|bankAccountType|deposit|
|bankAccountType|general|
|bankAccountType|other|
|bankAccountType|payment|
|bankAccountType|savings|
|type|ach|
|type|ach_plaid|

<h2 id="tocS_AdditionalData3DSecure">AdditionalData3DSecure</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldata3dsecure"></a>
<a id="schema_AdditionalData3DSecure"></a>
<a id="tocSadditionaldata3dsecure"></a>
<a id="tocsadditionaldata3dsecure"></a>

```json
{
  "allow3DS2": "string",
  "challengeWindowSize": "01",
  "executeThreeD": "string",
  "mpiImplementationType": "string",
  "scaExemption": "string",
  "threeDSVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow3DS2|string|false|none|**Deprecated.** Indicates if you are able to process 3D Secure 2 transactions natively on your payment page. Send this parameter when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).<br><br> > This parameter only indicates readiness to support native 3D Secure 2 authentication. To specify if you _want_ to perform 3D Secure, use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) or send the `executeThreeD` parameter.<br><br>Possible values:<br>* **true** - Ready to support native 3D Secure 2 authentication. Setting this to true does not mean always applying 3D Secure 2. Adyen selects redirect or native authentication based on your configuration to optimize authorization rates and improve the shopper's experience.<br>* **false** – Not ready to support native 3D Secure 2 authentication. Adyen offers redirect 3D Secure 2 authentication instead, based on your configuration.<br>|
|challengeWindowSize|string|false|none|Dimensions of the 3DS2 challenge window to be displayed to the cardholder.<br><br>Possible values:<br><br>* **01** - size of 250x400 <br>* **02** - size of 390x400<br>* **03** - size of 500x600<br>* **04** - size of 600x400<br>* **05** - Fullscreen|
|executeThreeD|string|false|none|**Deprecated.** Indicates if you want to perform 3D Secure authentication on a transaction.<br><br> > Alternatively, you can use [Dynamic 3D Secure](/risk-management/dynamic-3d-secure) to configure rules for applying 3D Secure.<br><br>Possible values:<br>* **true** – Perform 3D Secure authentication.<br>* **false** – Don't perform 3D Secure authentication. Note that this setting results in refusals if the issuer mandates 3D Secure because of the PSD2 directive  or other, national regulations. <br>|
|mpiImplementationType|string|false|none|In case of Secure+, this field must be set to **CUPSecurePlus**.|
|scaExemption|string|false|none|Indicates the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction.<br><br> Possible values:<br>* **lowValue** <br>* **secureCorporate** <br>* **trustedBeneficiary** <br>* **transactionRiskAnalysis** |
|threeDSVersion|string|false|none|Indicates your preference for the 3D Secure version. <br>> If you use this parameter, you override the checks from Adyen's Authentication Engine. We recommend to use this field only if you have an extensive knowledge of 3D Secure.<br><br>Possible values:<br>* **2.1.0**: Apply 3D Secure version 2.1.0. <br>* **2.2.0**: Apply 3D Secure version 2.2.0. If the issuer does not support version 2.2.0, we will fall back to 2.1.0.<br><br>The following rules apply:<br>* If you prefer 2.1.0 or 2.2.0 but we receive a negative `transStatus` in the `ARes`, we will apply the fallback policy configured in your account.<br>* If you the BIN is not enrolled, you will receive an error.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeWindowSize|01|
|challengeWindowSize|02|
|challengeWindowSize|03|
|challengeWindowSize|04|
|challengeWindowSize|05|

<h2 id="tocS_AdditionalDataAirline">AdditionalDataAirline</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataairline"></a>
<a id="schema_AdditionalDataAirline"></a>
<a id="tocSadditionaldataairline"></a>
<a id="tocsadditionaldataairline"></a>

```json
{
  "airline.agency_invoice_number": "string",
  "airline.agency_plan_name": "string",
  "airline.airline_code": "string",
  "airline.airline_designator_code": "string",
  "airline.boarding_fee": "string",
  "airline.computerized_reservation_system": "string",
  "airline.customer_reference_number": "string",
  "airline.document_type": "string",
  "airline.flight_date": "string",
  "airline.issue_date": "string",
  "airline.leg.carrier_code": "string",
  "airline.leg.class_of_travel": "string",
  "airline.leg.date_of_travel": "string",
  "airline.leg.depart_airport": "string",
  "airline.leg.depart_tax": "string",
  "airline.leg.destination_code": "string",
  "airline.leg.fare_base_code": "string",
  "airline.leg.flight_number": "string",
  "airline.leg.stop_over_code": "string",
  "airline.passenger.date_of_birth": "string",
  "airline.passenger.first_name": "string",
  "airline.passenger.last_name": "string",
  "airline.passenger.phone_number": "string",
  "airline.passenger.traveller_type": "string",
  "airline.passenger_name": "string",
  "airline.ticket_issue_address": "string",
  "airline.ticket_number": "string",
  "airline.travel_agency_code": "string",
  "airline.travel_agency_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airline.agency_invoice_number|string|false|none|The reference number for the invoice, issued by the agency.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 6 characters|
|airline.agency_plan_name|string|false|none|The two-letter agency plan identifier.<br>* Encoding: ASCII<br>* minLength: 2 characters<br>* maxLength: 2 characters|
|airline.airline_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier.<br>* Format: IATA 3-digit accounting code (PAX)<br>* Example: KLM = 074<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.airline_designator_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>* Encoding: ASCII<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.boarding_fee|string|false|none|The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1 character<br>* maxLength: 18 characters|
|airline.computerized_reservation_system|string|false|none|The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.<br>* Encoding: ASCII<br>* minLength: 4 characters<br>* maxLength: 4 characters|
|airline.customer_reference_number|string|false|none|The alphanumeric customer reference number.<br>* Encoding: ASCII<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the customer reference number is truncated<br>* Must not be all spaces|
|airline.document_type|string|false|none|A code that identifies the type of item bought. The description of the code can appear on credit card statements.<br>* Encoding: ASCII<br>* Example: Passenger ticket = 01<br>* minLength: 2 characters<br>* maxLength: 2 characters|
|airline.flight_date|string|false|none|The flight departure date. Local time `(HH:mm)` is optional.<br>* Date format: `yyyy-MM-dd`<br>* Date and time format: `yyyy-MM-dd HH:mm`<br>* minLength: 10 characters<br>* maxLength: 16 characters|
|airline.issue_date|string|false|none|The date that the ticket was issued to the passenger.<br>* minLength: 6 characters<br>* maxLength: 6 characters<br>* Date format: YYMMDD|
|airline.leg.carrier_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>This field is required if the airline data includes leg details.<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.class_of_travel|string|false|none|A one-letter travel class identifier.<br> The following are common:<br> * F: first class<br>* J: business class<br>* Y: economy class<br>* W: premium economy<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.date_of_travel|string|false|none|	<br>Date and time of travel in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format `yyyy-MM-dd HH:mm`.<br>* Encoding: ASCII<br>* minLength: 16 characters<br>* maxLength: 16 characters|
|airline.leg.depart_airport|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) three-letter airport code of the departure airport.<br>This field is required if the airline data includes leg details.<br><br>* Encoding: ASCII<br>* Example: Amsterdam = AMS<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.depart_tax|string|false|none|The amount of [departure tax](https://en.wikipedia.org/wiki/Departure_tax) charged, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1<br>* maxLength: 12<br>* Must not be all zeros.|
|airline.leg.destination_code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code of the destination airport.<br>This field is required if the airline data includes leg details.<br>* Example: Amsterdam = AMS<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.fare_base_code|string|false|none|The [fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code), alphanumeric.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.flight_number|string|false|none|The flight identifier.<br>* minLength: 1 character<br>* maxLength: 5 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.leg.stop_over_code|string|false|none|A one-letter code that indicates whether the passenger is entitled to make a stopover. Can be a space, O if the passenger is entitled to make a stopover, or X if they are not.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character|
|airline.passenger.date_of_birth|string|false|none|The passenger's date of birth.<br><br>Date format: `yyyy-MM-dd`<br>* minLength: 10<br>* maxLength: 10|
|airline.passenger.first_name|string|false|none|The passenger's first name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII|
|airline.passenger.last_name|string|false|none|The passenger's last name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII|
|airline.passenger.phone_number|string|false|none|The passenger's phone number, including country code. This is an alphanumeric field that can include the '+' and '-' signs.<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 30 characters|
|airline.passenger.traveller_type|string|false|none|The IATA passenger type code (PTC).<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 6 characters|
|airline.passenger_name|string|true|none|The passenger's name, initials, and title.<br>* Format: last name + first name or initials + title<br>* Example: *FLYER / MARY MS*<br>* minLength: 1 character<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the name is truncated<br>* Must not be all spaces <br>* Must not be all zeros.|
|airline.ticket_issue_address|string|false|none|The address of the organization that issued the ticket.<br>* minLength: 0 characters<br>* maxLength: 16 characters|
|airline.ticket_number|string|false|none|The ticket's unique identifier.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.travel_agency_code|string|false|none|The unique identifier from IATA or ARC for the travel agency that issues the ticket.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 8 characters<br>* Must not be all spaces<br>* Must not be all zeros.|
|airline.travel_agency_name|string|false|none|The name of the travel agency.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 25 characters<br>* Must not be all spaces<br>* Must not be all zeros.|

<h2 id="tocS_AdditionalDataCarRental">AdditionalDataCarRental</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatacarrental"></a>
<a id="schema_AdditionalDataCarRental"></a>
<a id="tocSadditionaldatacarrental"></a>
<a id="tocsadditionaldatacarrental"></a>

```json
{
  "carRental.checkOutDate": "string",
  "carRental.customerServiceTollFreeNumber": "string",
  "carRental.daysRented": "string",
  "carRental.fuelCharges": "string",
  "carRental.insuranceCharges": "string",
  "carRental.locationCity": "string",
  "carRental.locationCountry": "string",
  "carRental.locationStateProvince": "string",
  "carRental.noShowIndicator": "string",
  "carRental.oneWayDropOffCharges": "string",
  "carRental.rate": "string",
  "carRental.rateIndicator": "string",
  "carRental.rentalAgreementNumber": "string",
  "carRental.rentalClassId": "string",
  "carRental.renterName": "string",
  "carRental.returnCity": "string",
  "carRental.returnCountry": "string",
  "carRental.returnDate": "string",
  "carRental.returnLocationId": "string",
  "carRental.returnStateProvince": "string",
  "carRental.taxExemptIndicator": "string",
  "travelEntertainmentAuthData.duration": "string",
  "travelEntertainmentAuthData.market": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carRental.checkOutDate|string|false|none|The pick-up date.<br>* Date format: `yyyyMMdd`|
|carRental.customerServiceTollFreeNumber|string|false|none|The customer service phone number of the car rental company.<br>* Format: Alphanumeric<br>* maxLength: 17<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>*Must not be all zeros.|
|carRental.daysRented|string|false|none|Number of days for which the car is being rented.<br>* Format: Numeric<br>* maxLength: 4<br>* Must not be all spaces|
|carRental.fuelCharges|string|false|none|Any fuel charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Numeric<br>* maxLength: 12|
|carRental.insuranceCharges|string|false|none|Any insurance charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Numeric<br>* maxLength: 12<br>* Must not be all spaces<br>*Must not be all zeros.|
|carRental.locationCity|string|false|none|The city where the car is rented.<br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.locationCountry|string|false|none|The country where the car is rented, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* Format: Alphanumeric<br>* maxLength: 2|
|carRental.locationStateProvince|string|false|none|The state or province where the car is rented.<br>* Format: Alphanumeric<br>* maxLength: 2<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.noShowIndicator|string|false|none|Indicates if the customer didn't pick up their rental car.<br>* Y - Customer did not pick up their car<br>* N - Not applicable|
|carRental.oneWayDropOffCharges|string|false|none|The charge for not returning a car to the original rental location, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* maxLength: 12|
|carRental.rate|string|false|none|The daily rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: Alphanumeric<br>* maxLength: 12|
|carRental.rateIndicator|string|false|none|Specifies whether the given rate is applied daily or weekly.<br>* D - Daily rate<br>* W - Weekly rate|
|carRental.rentalAgreementNumber|string|false|none|The rental agreement number for the car rental.<br>* Format: Alphanumeric<br>* maxLength: 9<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.rentalClassId|string|false|none|The classification of the rental car.<br>* Format: Alphanumeric<br>* maxLength: 4<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.renterName|string|false|none|The name of the person renting the car.<br>* Format: Alphanumeric<br>* maxLength: 26<br>* If you send more than 26 characters, the name is truncated<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnCity|string|false|none|The city where the car must be returned.<br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnCountry|string|false|none|The country where the car must be returned, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* Format: Alphanumeric<br>* maxLength: 2|
|carRental.returnDate|string|false|none|The last date to return the car by.<br>* Date format: `yyyyMMdd`<br>* maxLength: 8|
|carRental.returnLocationId|string|false|none|The agency code, phone number, or address abbreviation<br>* Format: Alphanumeric<br>* maxLength: 10<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.returnStateProvince|string|false|none|The state or province where the car must be returned.<br>* Format: Alphanumeric<br>* maxLength: 3<br>* Must not start with a space or be all spaces<br>*Must not be all zeros.|
|carRental.taxExemptIndicator|string|false|none|Indicates if the goods or services were tax-exempt, or if tax was not paid on them.<br><br>Values:<br>* Y - Goods or services were tax exempt<br>* N - Tax was not collected|
|travelEntertainmentAuthData.duration|string|false|none|Number of days the car is rented for. This should be included in the auth message.<br>* Format: Numeric<br>* maxLength: 4|
|travelEntertainmentAuthData.market|string|false|none|Indicates what market-specific dataset will be submitted or is being submitted. Value should be 'A' for car rental. This should be included in the auth message.<br>* Format: Alphanumeric<br>* maxLength: 1|

<h2 id="tocS_AdditionalDataCommon">AdditionalDataCommon</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatacommon"></a>
<a id="schema_AdditionalDataCommon"></a>
<a id="tocSadditionaldatacommon"></a>
<a id="tocsadditionaldatacommon"></a>

```json
{
  "RequestedTestAcquirerResponseCode": "string",
  "RequestedTestErrorResponseCode": "string",
  "allowPartialAuth": "string",
  "authorisationType": "string",
  "autoRescue": "string",
  "customRoutingFlag": "string",
  "industryUsage": "NoShow",
  "manualCapture": "string",
  "maxDaysToRescue": "string",
  "networkTxReference": "string",
  "overwriteBrand": "string",
  "subMerchantCity": "string",
  "subMerchantCountry": "string",
  "subMerchantEmail": "string",
  "subMerchantID": "string",
  "subMerchantName": "string",
  "subMerchantPhoneNumber": "string",
  "subMerchantPostalCode": "string",
  "subMerchantState": "string",
  "subMerchantStreet": "string",
  "subMerchantTaxId": "string",
  "transactionLinkId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedTestAcquirerResponseCode|string|false|none|Triggers test scenarios that allow to replicate certain acquirer response codes. See [Testing result codes and refusal reasons](https://docs.adyen.com/development-resources/testing/result-codes/) to learn about the possible values, and the `refusalReason` values you can trigger. |
|RequestedTestErrorResponseCode|string|false|none|Triggers test scenarios that allow to replicate certain communication errors.<br><br>Allowed values:<br>* **NO_CONNECTION_AVAILABLE** – There wasn't a connection available to service the outgoing communication.<br>This is a transient, retriable error since no messaging could be initiated to an issuing system (or third-party acquiring system). Therefore, the header Transient-Error: true is returned in the response. A subsequent request using the same idempotency key will be processed as if it was the first request.<br>* **IOEXCEPTION_RECEIVED** – Something went wrong during transmission of the message or receiving the response.<br>This is a classified as non-transient because the message could have been received by the issuing party and been acted upon. No transient error header is returned. If using idempotency, the (error) response is stored as the final result for the idempotency key. Subsequent messages with the same idempotency key not be processed beyond returning the stored response.|
|allowPartialAuth|string|false|none|Set to true to authorise a part of the requested amount in case the cardholder does not have enough funds on their account. <br>If a payment was partially authorised, the response includes resultCode: PartiallyAuthorised and the authorised amount in additionalData.authorisedAmountValue.<br>To enable this functionality, contact our Support Team.|
|authorisationType|string|false|none|Flags a card payment request for either pre-authorisation or final authorisation. For more information, refer to [Authorisation types](https://docs.adyen.com/online-payments/adjust-authorisation#authorisation-types).<br><br>Allowed values:<br>* **PreAuth** – flags the payment request to be handled as a pre-authorisation.<br>* **FinalAuth** – flags the payment request to be handled as a final authorisation.|
|autoRescue|string|false|none|Set to **true** to enable [Auto Rescue](https://docs.adyen.com/online-payments/auto-rescue/) for a transaction. Use the `maxDaysToRescue` to specify a rescue window.|
|customRoutingFlag|string|false|none|Allows you to determine or override the acquirer account that should be used for the transaction.<br><br>If you need to process a payment with an acquirer different from a default one, you can set up a corresponding configuration on the Adyen payments platform. Then you can pass a custom routing flag in a payment request's additional data to target a specific acquirer.<br><br>To enable this functionality, contact [Support](https://www.adyen.help/hc/en-us/requests/new).|
|industryUsage|string|false|none|In case of [asynchronous authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#adjust-authorisation), this field denotes why the additional payment is made.<br><br>Possible values:<br><br> * **NoShow**: An incremental charge is carried out because of a no-show for a guaranteed reservation.<br><br> * **DelayedCharge**: An incremental charge is carried out to process an additional payment after the original services have been rendered and the respective payment has been processed.|
|manualCapture|string|false|none|Set to **true** to require [manual capture](https://docs.adyen.com/online-payments/capture) for the transaction.|
|maxDaysToRescue|string|false|none|The rescue window for a transaction, in days, when `autoRescue` is set to **true**. You can specify a value between 1 and 48.<br><br>* For [cards](https://docs.adyen.com/online-payments/auto-rescue/cards/), the default is one calendar month.<br> * For [SEPA](https://docs.adyen.com/online-payments/auto-rescue/sepa/), the default is 42 days.|
|networkTxReference|string|false|none|Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain. This field is required for token-based transactions where Adyen does not tokenize the card.<br><br>Transaction identifier from card schemes, for example, Mastercard Trace ID or the Visa Transaction ID.<br><br>Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.<br><br>Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.|
|overwriteBrand|string|false|none|Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.|
|subMerchantCity|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the city of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 13 characters.|
|subMerchantCountry|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the three-letter country code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Fixed length: 3 characters.|
|subMerchantEmail|string|false|none|This field is required for transactions performed by registered payment facilitators. This field contains the email address of the sub-merchant.<br>* Format: Alphanumeric<br>* Maximum length: 40 characters|
|subMerchantID|string|false|none|This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID.<br><br>A unique identifier per submerchant that is required if the transaction is performed by a registered payment facilitator.<br>* Format: alpha-numeric.<br>* Fixed length: 15 characters.|
|subMerchantName|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the name of the actual merchant.<br>* Format: alpha-numeric.<br>* Maximum length: 22 characters.|
|subMerchantPhoneNumber|string|false|none|This field is required for transactions performed by registered payment facilitators. This field contains the phone number of the sub-merchant.* Format: Alphanumeric<br>* Maximum length: 20 characters|
|subMerchantPostalCode|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the postal code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 10 characters.|
|subMerchantState|string|false|none|This field is required if the transaction is performed by a registered payment facilitator, and if applicable to the country. This field must contain the state code of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 3 characters.|
|subMerchantStreet|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the street of the actual merchant's address.<br>* Format: alpha-numeric.<br>* Maximum length: 60 characters.|
|subMerchantTaxId|string|false|none|This field is required if the transaction is performed by a registered payment facilitator. This field must contain the tax ID of the actual merchant.<br>* Format: alpha-numeric.<br>* Fixed length: 11 or 14 characters.|
|transactionLinkId|string|false|none|Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain For Mastercard payments. This field is required for token-based transactions where Adyen does not tokenize the card.<br><br>Transaction identifier from Mastercard.<br><br>Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.<br><br>Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.|

#### Enumerated Values

|Property|Value|
|---|---|
|industryUsage|NoShow|
|industryUsage|DelayedCharge|

<h2 id="tocS_AdditionalDataLevel23">AdditionalDataLevel23</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatalevel23"></a>
<a id="schema_AdditionalDataLevel23"></a>
<a id="tocSadditionaldatalevel23"></a>
<a id="tocsadditionaldatalevel23"></a>

```json
{
  "enhancedSchemeData.customerReference": "string",
  "enhancedSchemeData.destinationCountryCode": "string",
  "enhancedSchemeData.destinationPostalCode": "string",
  "enhancedSchemeData.destinationStateProvinceCode": "string",
  "enhancedSchemeData.dutyAmount": "string",
  "enhancedSchemeData.freightAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].commodityCode": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].description": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].discountAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].productCode": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].quantity": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].totalAmount": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure": "string",
  "enhancedSchemeData.itemDetailLine[itemNr].unitPrice": "string",
  "enhancedSchemeData.orderDate": "string",
  "enhancedSchemeData.shipFromPostalCode": "string",
  "enhancedSchemeData.totalTaxAmount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedSchemeData.customerReference|string|false|none|The reference number to identify the customer and their order. <br>* Encoding: ASCII<br>* Max length: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.destinationCountryCode|string|false|none|The three-letter [ISO 3166-1 alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.<br>* Encoding: ASCII<br>* Fixed length: 3 characters|
|enhancedSchemeData.destinationPostalCode|string|false|none|The postal code of the destination address.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* Must not start with a space.<br>* For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.|
|enhancedSchemeData.destinationStateProvinceCode|string|false|none|The state or province code of the destination address.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* Must not start with a space.|
|enhancedSchemeData.dutyAmount|string|false|none|The duty tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.freightAmount|string|false|none|The shipping amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.itemDetailLine[itemNr].commodityCode|string|false|none|The code that identifies the item in a standardized commodity coding scheme. There are different commodity coding schemes:<br>* [UNSPSC commodity codes](https://www.ungm.org/public/unspsc)<br>* [HS commodity codes](https://www.wcoomd.org/en/topics/nomenclature/overview.aspx)<br>* [NAICS commodity codes](https://www.census.gov/naics/)<br>* [NAPCS commodity codes](https://www.census.gov/naics/napcs/)<br><br><br>* Encoding: ASCII<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].description|string|false|none|A description of the item, that provides details about the purchase.<br><br> For Visa transactions with level 3 ESD, the description must not be the same or very similar to your merchant name, or, consist only of common words like "product", or "service".<br>* Encoding: ASCII<br>* Max length: 26 characters<br>* Must not be a single character.<br>* Must not be blank.<br>* Must not be all special characters.<br>* Must not be blank.<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].discountAmount|string|false|none|The discount amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters|
|enhancedSchemeData.itemDetailLine[itemNr].productCode|string|false|none|The product code. Must be a unique product code associated with the item or service. This can be your unique code for the item, or the manufacturer's product code. <br>* Encoding: ASCII.<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].quantity|string|false|none|The number of items. Must be an integer greater than zero.<br>* Encoding: Numeric<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.|
|enhancedSchemeData.itemDetailLine[itemNr].totalAmount|string|false|none|The total amount for the line item, in [minor units](https://docs.adyen.com/development-resources/currency-codes). See [Amount requirements for level 2/3 ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements) to learn more about how to calculate the line item total.<br>* For example, 2000 means USD 20.00.<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure|string|false|none|The unit of measurement for an item.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.|
|enhancedSchemeData.itemDetailLine[itemNr].unitPrice|string|false|none|The unit price in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max length: 12 characters<br>* Must not be all zeros.|
|enhancedSchemeData.orderDate|string|false|none|The order date.<br>* Format: `ddMMyy`<br>* Encoding: ASCII<br>* Max length: 6 characters|
|enhancedSchemeData.shipFromPostalCode|string|false|none|The postal code of the address where the item is shipped from.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.|
|enhancedSchemeData.totalTaxAmount|string|false|none|The amount of state or provincial [tax included in the total transaction amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd), in [minor units](https://docs.adyen.com/development-resources/currency-codes). <br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric <br>* Max length: 12 characters <br>* For L2 data: must not be all zeroes. <br>* For L3 data: can be zero.|

<h2 id="tocS_AdditionalDataLodging">AdditionalDataLodging</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatalodging"></a>
<a id="schema_AdditionalDataLodging"></a>
<a id="tocSadditionaldatalodging"></a>
<a id="tocsadditionaldatalodging"></a>

```json
{
  "lodging.SpecialProgramCode": "string",
  "lodging.checkInDate": "string",
  "lodging.checkOutDate": "string",
  "lodging.customerServiceTollFreeNumber": "string",
  "lodging.fireSafetyActIndicator": "string",
  "lodging.folioCashAdvances": "string",
  "lodging.folioNumber": "string",
  "lodging.foodBeverageCharges": "string",
  "lodging.noShowIndicator": "string",
  "lodging.prepaidExpenses": "string",
  "lodging.propertyPhoneNumber": "string",
  "lodging.room1.numberOfNights": "string",
  "lodging.room1.rate": "string",
  "lodging.totalRoomTax": "string",
  "lodging.totalTax": "string",
  "travelEntertainmentAuthData.duration": "string",
  "travelEntertainmentAuthData.market": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodging.SpecialProgramCode|string|false|none|A code that corresponds to the category of lodging charges for the payment. Possible values:<br>* 1: Lodging<br>* 2: No show reservation<br>* 3: Advanced deposit|
|lodging.checkInDate|string|false|none|The arrival date.<br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.|
|lodging.checkOutDate|string|false|none|The departure date.<br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.|
|lodging.customerServiceTollFreeNumber|string|false|none|The toll-free phone number for the lodging.<br>* Format: numeric<br>* Max length: 17 characters.<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.|
|lodging.fireSafetyActIndicator|string|false|none|Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Must be 'Y' or 'N'.<br>* Format: alphabetic<br>* Max length: 1 character|
|lodging.folioCashAdvances|string|false|none|The folio cash advances, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.folioNumber|string|false|none|The card acceptor’s internal invoice or billing ID reference number.<br>* Max length: 25 characters<br>* Must not start with a space<br>* Must not contain any special characters<br>* Must not be all zeros.|
|lodging.foodBeverageCharges|string|false|none|Any charges for food and beverages associated with the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.noShowIndicator|string|false|none|Indicates if the customer didn't check in for their booking.<br> Possible values: <br>* **Y**: the customer didn't check in <br>* **N**: the customer checked in|
|lodging.prepaidExpenses|string|false|none|The prepaid expenses for the booking.<br>* Format: numeric<br>* Max length: 12 characters|
|lodging.propertyPhoneNumber|string|false|none|The lodging property location's phone number.<br>* Format: numeric<br>* Min length: 10 characters<br>* Max length: 17 characters<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.|
|lodging.room1.numberOfNights|string|false|none|The total number of nights the room is booked for.<br>* Format: numeric<br>* Must be a number between 0 and 99<br>* Max length: 4 characters|
|lodging.room1.rate|string|false|none|The rate for the room, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|lodging.totalRoomTax|string|false|none|The total room tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|lodging.totalTax|string|false|none|The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number|
|travelEntertainmentAuthData.duration|string|false|none|The number of nights. This should be included in the auth message.<br>* Format: numeric<br>* Max length: 4 characters|
|travelEntertainmentAuthData.market|string|false|none|Indicates what market-specific dataset will be submitted. Must be 'H' for Hotel. This should be included in the auth message.<br><br>* Format: alphanumeric<br>* Max length: 1 character|

<h2 id="tocS_AdditionalDataOpenInvoice">AdditionalDataOpenInvoice</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataopeninvoice"></a>
<a id="schema_AdditionalDataOpenInvoice"></a>
<a id="tocSadditionaldataopeninvoice"></a>
<a id="tocsadditionaldataopeninvoice"></a>

```json
{
  "openinvoicedata.merchantData": "string",
  "openinvoicedata.numberOfLines": "string",
  "openinvoicedata.recipientFirstName": "string",
  "openinvoicedata.recipientLastName": "string",
  "openinvoicedataLine[itemNr].currencyCode": "string",
  "openinvoicedataLine[itemNr].description": "string",
  "openinvoicedataLine[itemNr].itemAmount": "string",
  "openinvoicedataLine[itemNr].itemId": "string",
  "openinvoicedataLine[itemNr].itemVatAmount": "string",
  "openinvoicedataLine[itemNr].itemVatPercentage": "string",
  "openinvoicedataLine[itemNr].numberOfItems": "string",
  "openinvoicedataLine[itemNr].returnShippingCompany": "string",
  "openinvoicedataLine[itemNr].returnTrackingNumber": "string",
  "openinvoicedataLine[itemNr].returnTrackingUri": "string",
  "openinvoicedataLine[itemNr].shippingCompany": "string",
  "openinvoicedataLine[itemNr].shippingMethod": "string",
  "openinvoicedataLine[itemNr].trackingNumber": "string",
  "openinvoicedataLine[itemNr].trackingUri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openinvoicedata.merchantData|string|false|none|Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.<br><br>The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.<br><br>Since the field is optional, if it's not included it does not impact computing the merchant signature.<br><br>Applies only to Klarna.<br><br>You can contact Klarna for the format and structure of the string.|
|openinvoicedata.numberOfLines|string|false|none|The number of invoice lines included in `openinvoicedata`.<br><br>There needs to be at least one line, so `numberOfLines` needs to be at least 1.|
|openinvoicedata.recipientFirstName|string|false|none|First name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.|
|openinvoicedata.recipientLastName|string|false|none|Last name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.|
|openinvoicedataLine[itemNr].currencyCode|string|false|none|The three-character ISO currency code.|
|openinvoicedataLine[itemNr].description|string|false|none|A text description of the product the invoice line refers to.|
|openinvoicedataLine[itemNr].itemAmount|string|false|none|The price for one item in the invoice line, represented in minor units.<br><br>The due amount for the item, VAT excluded.|
|openinvoicedataLine[itemNr].itemId|string|false|none|A unique id for this item. Required for RatePay if the description of each item is not unique.|
|openinvoicedataLine[itemNr].itemVatAmount|string|false|none|The VAT due for one item in the invoice line, represented in minor units.|
|openinvoicedataLine[itemNr].itemVatPercentage|string|false|none|The VAT percentage for one item in the invoice line, represented in minor units.<br><br>For example, 19% VAT is specified as 1900.|
|openinvoicedataLine[itemNr].numberOfItems|string|false|none|The number of units purchased of a specific product.|
|openinvoicedataLine[itemNr].returnShippingCompany|string|false|none|Name of the shipping company handling the the return shipment.|
|openinvoicedataLine[itemNr].returnTrackingNumber|string|false|none|The tracking number for the return of the shipment.|
|openinvoicedataLine[itemNr].returnTrackingUri|string|false|none|URI where the customer can track the return of their shipment.|
|openinvoicedataLine[itemNr].shippingCompany|string|false|none|Name of the shipping company handling the delivery.|
|openinvoicedataLine[itemNr].shippingMethod|string|false|none|Shipping method.|
|openinvoicedataLine[itemNr].trackingNumber|string|false|none|The tracking number for the shipment.|
|openinvoicedataLine[itemNr].trackingUri|string|false|none|URI where the customer can track their shipment.|

<h2 id="tocS_AdditionalDataOpi">AdditionalDataOpi</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataopi"></a>
<a id="schema_AdditionalDataOpi"></a>
<a id="tocSadditionaldataopi"></a>
<a id="tocsadditionaldataopi"></a>

```json
{
  "opi.includeTransToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opi.includeTransToken|string|false|none|Optional boolean indicator. Set to **true** if you want an ecommerce transaction to return an `opi.transToken` as additional data in the response.<br><br>You can store this Oracle Payment Interface token in your Oracle Opera database. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).|

<h2 id="tocS_AdditionalDataRatepay">AdditionalDataRatepay</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataratepay"></a>
<a id="schema_AdditionalDataRatepay"></a>
<a id="tocSadditionaldataratepay"></a>
<a id="tocsadditionaldataratepay"></a>

```json
{
  "ratepay.installmentAmount": "string",
  "ratepay.interestRate": "string",
  "ratepay.lastInstallmentAmount": "string",
  "ratepay.paymentFirstday": "string",
  "ratepaydata.deliveryDate": "string",
  "ratepaydata.dueDate": "string",
  "ratepaydata.invoiceDate": "string",
  "ratepaydata.invoiceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratepay.installmentAmount|string|false|none|Amount the customer has to pay each month.|
|ratepay.interestRate|string|false|none|Interest rate of this installment.|
|ratepay.lastInstallmentAmount|string|false|none|Amount of the last installment.|
|ratepay.paymentFirstday|string|false|none|Calendar day of the first payment.|
|ratepaydata.deliveryDate|string|false|none|Date the merchant delivered the goods to the customer.|
|ratepaydata.dueDate|string|false|none|Date by which the customer must settle the payment.|
|ratepaydata.invoiceDate|string|false|none|Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.|
|ratepaydata.invoiceId|string|false|none|Identification name or number for the invoice, defined by the merchant.|

<h2 id="tocS_AdditionalDataRetry">AdditionalDataRetry</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataretry"></a>
<a id="schema_AdditionalDataRetry"></a>
<a id="tocSadditionaldataretry"></a>
<a id="tocsadditionaldataretry"></a>

```json
{
  "retry.chainAttemptNumber": "string",
  "retry.orderAttemptNumber": "string",
  "retry.skipRetry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retry.chainAttemptNumber|string|false|none|The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|
|retry.orderAttemptNumber|string|false|none|The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|
|retry.skipRetry|string|false|none|The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.<br><br>> If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.|

<h2 id="tocS_AdditionalDataRisk">AdditionalDataRisk</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatarisk"></a>
<a id="schema_AdditionalDataRisk"></a>
<a id="tocSadditionaldatarisk"></a>
<a id="tocsadditionaldatarisk"></a>

```json
{
  "riskdata.[customFieldName]": "string",
  "riskdata.basket.item[itemNr].amountPerItem": "string",
  "riskdata.basket.item[itemNr].brand": "string",
  "riskdata.basket.item[itemNr].category": "string",
  "riskdata.basket.item[itemNr].color": "string",
  "riskdata.basket.item[itemNr].currency": "string",
  "riskdata.basket.item[itemNr].itemID": "string",
  "riskdata.basket.item[itemNr].manufacturer": "string",
  "riskdata.basket.item[itemNr].productTitle": "string",
  "riskdata.basket.item[itemNr].quantity": "string",
  "riskdata.basket.item[itemNr].receiverEmail": "string",
  "riskdata.basket.item[itemNr].size": "string",
  "riskdata.basket.item[itemNr].sku": "string",
  "riskdata.basket.item[itemNr].upc": "string",
  "riskdata.promotions.promotion[itemNr].promotionCode": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountAmount": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency": "string",
  "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage": "string",
  "riskdata.promotions.promotion[itemNr].promotionName": "string",
  "riskdata.riskProfileReference": "string",
  "riskdata.skipRisk": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|riskdata.[customFieldName]|string|false|none|The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).|
|riskdata.basket.item[itemNr].amountPerItem|string|false|none|The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|riskdata.basket.item[itemNr].brand|string|false|none|Brand of the item.|
|riskdata.basket.item[itemNr].category|string|false|none|Category of the item.|
|riskdata.basket.item[itemNr].color|string|false|none|Color of the item.|
|riskdata.basket.item[itemNr].currency|string|false|none|The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).|
|riskdata.basket.item[itemNr].itemID|string|false|none|ID of the item.|
|riskdata.basket.item[itemNr].manufacturer|string|false|none|Manufacturer of the item.|
|riskdata.basket.item[itemNr].productTitle|string|false|none|A text description of the product the invoice line refers to.|
|riskdata.basket.item[itemNr].quantity|string|false|none|Quantity of the item purchased.|
|riskdata.basket.item[itemNr].receiverEmail|string|false|none|Email associated with the given product in the basket (usually in electronic gift cards).|
|riskdata.basket.item[itemNr].size|string|false|none|Size of the item.|
|riskdata.basket.item[itemNr].sku|string|false|none|[Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).|
|riskdata.basket.item[itemNr].upc|string|false|none|[Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).|
|riskdata.promotions.promotion[itemNr].promotionCode|string|false|none|Code of the promotion.|
|riskdata.promotions.promotion[itemNr].promotionDiscountAmount|string|false|none|The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|riskdata.promotions.promotion[itemNr].promotionDiscountCurrency|string|false|none|The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).|
|riskdata.promotions.promotion[itemNr].promotionDiscountPercentage|string|false|none|Promotion's percentage discount. It is represented in percentage value and there is no need to include the '%' sign.<br><br>e.g. for a promotion discount of 30%, the value of the field should be 30.|
|riskdata.promotions.promotion[itemNr].promotionName|string|false|none|Name of the promotion.|
|riskdata.riskProfileReference|string|false|none|Reference number of the risk profile that you want to apply to the payment. If not provided or left blank, the merchant-level account's default risk profile will be applied to the payment. For more information, see [dynamically assign a risk profile to a payment](https://docs.adyen.com/risk-management/create-and-use-risk-profiles#dynamically-assign-a-risk-profile-to-a-payment).|
|riskdata.skipRisk|string|false|none|If this parameter is provided with the value **true**, risk checks for the payment request are skipped and the transaction will not get a risk score.|

<h2 id="tocS_AdditionalDataRiskStandalone">AdditionalDataRiskStandalone</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatariskstandalone"></a>
<a id="schema_AdditionalDataRiskStandalone"></a>
<a id="tocSadditionaldatariskstandalone"></a>
<a id="tocsadditionaldatariskstandalone"></a>

```json
{
  "PayPal.CountryCode": "string",
  "PayPal.EmailId": "string",
  "PayPal.FirstName": "string",
  "PayPal.LastName": "string",
  "PayPal.PayerId": "string",
  "PayPal.Phone": "string",
  "PayPal.ProtectionEligibility": "string",
  "PayPal.TransactionId": "string",
  "avsResultRaw": "string",
  "bin": "string",
  "cvcResultRaw": "string",
  "riskToken": "string",
  "threeDAuthenticated": "string",
  "threeDOffered": "string",
  "tokenDataType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PayPal.CountryCode|string|false|none|Shopper's country of residence in the form of ISO standard 3166 2-character country codes.|
|PayPal.EmailId|string|false|none|Shopper's email.|
|PayPal.FirstName|string|false|none|Shopper's first name.|
|PayPal.LastName|string|false|none|Shopper's last name.|
|PayPal.PayerId|string|false|none|Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.|
|PayPal.Phone|string|false|none|Shopper's phone number.|
|PayPal.ProtectionEligibility|string|false|none|Allowed values:<br>* **Eligible** — Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.<br><br>* **PartiallyEligible** — Merchant is protected by PayPal's Seller Protection Policy for Item Not Received.<br><br>* **Ineligible** — Merchant is not protected under the Seller Protection Policy.|
|PayPal.TransactionId|string|false|none|Unique transaction ID of the payment.|
|avsResultRaw|string|false|none|Raw AVS result received from the acquirer, where available. Example: D|
|bin|string|false|none|The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/online-payments/tokenization).|
|cvcResultRaw|string|false|none|Raw CVC result received from the acquirer, where available. Example: 1|
|riskToken|string|false|none|Unique identifier or token for the shopper's card details.|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment. Example: true|
|tokenDataType|string|false|none|Required for PayPal payments only. The only supported value is: **paypal**.|

<h2 id="tocS_AdditionalDataSubMerchant">AdditionalDataSubMerchant</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatasubmerchant"></a>
<a id="schema_AdditionalDataSubMerchant"></a>
<a id="tocSadditionaldatasubmerchant"></a>
<a id="tocsadditionaldatasubmerchant"></a>

```json
{
  "subMerchant.numberOfSubSellers": "string",
  "subMerchant.subSeller[subSellerNr].city": "string",
  "subMerchant.subSeller[subSellerNr].country": "string",
  "subMerchant.subSeller[subSellerNr].email": "string",
  "subMerchant.subSeller[subSellerNr].id": "string",
  "subMerchant.subSeller[subSellerNr].mcc": "string",
  "subMerchant.subSeller[subSellerNr].name": "string",
  "subMerchant.subSeller[subSellerNr].phoneNumber": "string",
  "subMerchant.subSeller[subSellerNr].postalCode": "string",
  "subMerchant.subSeller[subSellerNr].state": "string",
  "subMerchant.subSeller[subSellerNr].street": "string",
  "subMerchant.subSeller[subSellerNr].taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subMerchant.numberOfSubSellers|string|false|none|Required for transactions performed by registered payment facilitators. Indicates the number of sub-merchants contained in the request. For example, **3**.|
|subMerchant.subSeller[subSellerNr].city|string|false|none|Required for transactions performed by registered payment facilitators. The city of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 13 characters|
|subMerchant.subSeller[subSellerNr].country|string|false|none|Required for transactions performed by registered payment facilitators. The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil. <br>* Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)<br>* Fixed length: 3 characters|
|subMerchant.subSeller[subSellerNr].email|string|false|none|Required for transactions performed by registered payment facilitators. The email address of the sub-merchant.<br>* Format: Alphanumeric<br>* Maximum length: 40 characters|
|subMerchant.subSeller[subSellerNr].id|string|false|none|Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant. <br>* Format: Alphanumeric<br>* Maximum length: 15 characters|
|subMerchant.subSeller[subSellerNr].mcc|string|false|none|Required for transactions performed by registered payment facilitators. The sub-merchant's 4-digit Merchant Category Code (MCC). <br>* Format: Numeric<br>* Fixed length: 4 digits|
|subMerchant.subSeller[subSellerNr].name|string|false|none|Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement.<br>Exception: for acquirers in Brazil, this value does not overwrite the shopper statement.<br>* Format: Alphanumeric<br>* Maximum length: 22 characters|
|subMerchant.subSeller[subSellerNr].phoneNumber|string|false|none|Required for transactions performed by registered payment facilitators. The phone number of the sub-merchant.<br>* Format: Alphanumeric and special characters<br>* Maximum length: 20 characters|
|subMerchant.subSeller[subSellerNr].postalCode|string|false|none|Required for transactions performed by registered payment facilitators. The postal code of the sub-merchant's address, without dashes.<br>* Format: Numeric<br>* Fixed length: 8 digits|
|subMerchant.subSeller[subSellerNr].state|string|false|none|Required for transactions performed by registered payment facilitators. The state code of the sub-merchant's address, if applicable to the country.<br>* Format: Alphanumeric<br>* Maximum length: 2 characters|
|subMerchant.subSeller[subSellerNr].street|string|false|none|Required for transactions performed by registered payment facilitators. The street name and house number of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 60 characters|
|subMerchant.subSeller[subSellerNr].taxId|string|false|none|Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant.<br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ|

<h2 id="tocS_AdditionalDataTemporaryServices">AdditionalDataTemporaryServices</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatatemporaryservices"></a>
<a id="schema_AdditionalDataTemporaryServices"></a>
<a id="tocSadditionaldatatemporaryservices"></a>
<a id="tocsadditionaldatatemporaryservices"></a>

```json
{
  "enhancedSchemeData.customerReference": "string",
  "enhancedSchemeData.employeeName": "string",
  "enhancedSchemeData.jobDescription": "string",
  "enhancedSchemeData.regularHoursRate": "string",
  "enhancedSchemeData.regularHoursWorked": "string",
  "enhancedSchemeData.requestName": "string",
  "enhancedSchemeData.tempStartDate": "string",
  "enhancedSchemeData.tempWeekEnding": "string",
  "enhancedSchemeData.totalTaxAmount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enhancedSchemeData.customerReference|string|false|none|The customer code, if supplied by a customer.<br>* Encoding: ASCII<br>* maxLength: 25|
|enhancedSchemeData.employeeName|string|false|none|The name or ID of the person working in a temporary capacity.<br>* maxLength: 40.  <br>* Must not be all spaces. <br>*Must not be all zeros.|
|enhancedSchemeData.jobDescription|string|false|none|The job description of the person working in a temporary capacity.<br>* maxLength: 40 <br>* Must not be all spaces. <br>*Must not be all zeros.|
|enhancedSchemeData.regularHoursRate|string|false|none|The amount paid for regular hours worked, [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros|
|enhancedSchemeData.regularHoursWorked|string|false|none|The hours worked.<br>* maxLength: 7<br>* Must not be empty<br>* Can be all zeros|
|enhancedSchemeData.requestName|string|false|none|The name of the person requesting temporary services.<br>* maxLength: 40<br>* Must not be all zeros<br>* Must not be all spaces|
|enhancedSchemeData.tempStartDate|string|false|none|The billing period start date.<br>* Format: ddMMyy<br>* maxLength: 6|
|enhancedSchemeData.tempWeekEnding|string|false|none|The billing period end date.<br>* Format: ddMMyy<br>* maxLength: 6|
|enhancedSchemeData.totalTaxAmount|string|false|none|The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes). For example, 2000 means USD 20.00<br>* maxLength: 12|

<h2 id="tocS_AdditionalDataWallets">AdditionalDataWallets</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatawallets"></a>
<a id="schema_AdditionalDataWallets"></a>
<a id="tocSadditionaldatawallets"></a>
<a id="tocsadditionaldatawallets"></a>

```json
{
  "androidpay.token": "string",
  "masterpass.transactionId": "string",
  "payment.token": "string",
  "paywithgoogle.token": "string",
  "samsungpay.token": "string",
  "visacheckout.callId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidpay.token|string|false|none|The Android Pay token retrieved from the SDK.|
|masterpass.transactionId|string|false|none|The Mastercard Masterpass Transaction ID retrieved from the SDK.|
|payment.token|string|false|none|The Apple Pay token retrieved from the SDK.|
|paywithgoogle.token|string|false|none|The Google Pay token retrieved from the SDK.|
|samsungpay.token|string|false|none|The Samsung Pay token retrieved from the SDK.|
|visacheckout.callId|string|false|none|The Visa Checkout Call ID retrieved from the SDK.|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "houseNumberOrName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|The name of the city. Maximum length: 3000 characters.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|houseNumberOrName|string|true|none|The number or name of the house. Maximum length: 3000 characters.|
|postalCode|string|true|none|A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|
|street|string|true|none|The name of the street. Maximum length: 3000 characters.<br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.|

<h2 id="tocS_AffirmDetails">AffirmDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaffirmdetails"></a>
<a id="schema_AffirmDetails"></a>
<a id="tocSaffirmdetails"></a>
<a id="tocsaffirmdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "financingProgram": "string",
  "sdkData": "string",
  "type": "affirm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|financingProgram|string|false|none|The Affirm financing program to apply to this transaction.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**affirm**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|affirm|

<h2 id="tocS_AfterpayDetails">AfterpayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaafterpaydetails"></a>
<a id="schema_AfterpayDetails"></a>
<a id="tocSafterpaydetails"></a>
<a id="tocsafterpaydetails"></a>

```json
{
  "billingAddress": "string",
  "checkoutAttemptId": "string",
  "deliveryAddress": "string",
  "personalDetails": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "afterpay_default"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|string|false|none|The address where to send the invoice.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deliveryAddress|string|false|none|The address where the goods should be delivered.|
|personalDetails|string|false|none|Shopper name, date of birth, phone number, and email address.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**afterpay_default**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|afterpay_default|
|type|afterpaytouch|
|type|afterpaytouch_US|
|type|afterpay_b2b|
|type|clearpay|

<h2 id="tocS_Agency">Agency</h2>
<!-- backwards compatibility -->
<a id="schemaagency"></a>
<a id="schema_Agency"></a>
<a id="tocSagency"></a>
<a id="tocsagency"></a>

```json
{
  "invoiceNumber": "string",
  "planName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceNumber|string|false|none|The reference number for the invoice, issued by the agency.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 6 characters<br>* **additionalData key:** `airline.agency_invoice_number`|
|planName|string|false|none|The two-letter agency plan identifier.<br>* Encoding: ASCII<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* **additionalData key:** `airline.agency_plan_name`|

<h2 id="tocS_Airline">Airline</h2>
<!-- backwards compatibility -->
<a id="schemaairline"></a>
<a id="schema_Airline"></a>
<a id="tocSairline"></a>
<a id="tocsairline"></a>

```json
{
  "agency": {
    "invoiceNumber": "string",
    "planName": "string"
  },
  "boardingFee": 0,
  "code": "string",
  "computerizedReservationSystem": "string",
  "customerReferenceNumber": "string",
  "designatorCode": "string",
  "documentType": "string",
  "flightDate": "1970-01-01T00:00:00Z",
  "legs": [
    {
      "carrierCode": "string",
      "classOfTravel": "string",
      "dateOfTravel": "1970-01-01T00:00:00Z",
      "departureAirportCode": "string",
      "departureTax": 0,
      "destinationAirportCode": "string",
      "fareBasisCode": "string",
      "flightNumber": "string",
      "stopOverCode": "string"
    }
  ],
  "passengerName": "string",
  "passengers": [
    {
      "dateOfBirth": "1970-01-01",
      "firstName": "string",
      "lastName": "string",
      "phoneNumber": "string",
      "travellerType": "string"
    }
  ],
  "ticket": {
    "issueAddress": "string",
    "issueDate": "1970-01-01",
    "number": "string"
  },
  "travelAgency": {
    "code": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agency|[Agency](#schemaagency)|false|none|none|
|boardingFee|integer(int64)|false|none|The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1 character<br>* maxLength: 11 characters<br>* **additionalData key:** `airline.boarding_fee`|
|code|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier.<br>* Format: IATA 3-digit accounting code (PAX)<br>* Example: KLM = 074<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.airline_code`|
|computerizedReservationSystem|string|false|none| The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.<br>* Encoding: ASCII<br>* minLength: 4 characters<br>* maxLength: 4 characters<br>* **additionalData key:** `airline.computerized_reservation_system`|
|customerReferenceNumber|string|false|none|The alphanumeric customer reference number.<br>* Encoding: ASCII<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the customer reference number is truncated<br>* Must not start with a space or be all spaces.<br>* **additionalData key:** `airline.customer_reference_number`|
|designatorCode|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>* Encoding: ASCII<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not start with a space or be all spaces.<br>* **additionalData key:** `airline.airline_designator_code`|
|documentType|string|false|none|A code that identifies the type of item bought. The description of the code can appear on credit card statements.<br>* Encoding: ASCII<br>* Example: Passenger ticket = 01<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* **additionalData key:** `airline.document_type`|
|flightDate|string(date-time)|false|none|The flight departure date. Time is optional.<br>* Format for date only: `yyyy-MM-dd`<br>* Format for date and time: `yyyy-MM-ddTHH:mm`<br>* Use local time of departure airport.<br>* minLength: 10 characters<br>* maxLength: 16 characters<br>* **additionalData key:** `airline.flight_date`|
|legs|[[Leg](#schemaleg)]|false|none|none|
|passengerName|string|true|none|The passenger's name, initials, and title.<br>* Format: last name + first name or initials + title<br>* Example: *FLYER / MARY MS*<br>* minLength: 1 character<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the name is truncated<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.passenger_name`|
|passengers|[[Passenger](#schemapassenger)]|false|none|none|
|ticket|[Ticket](#schematicket)|false|none|none|
|travelAgency|[TravelAgency](#schematravelagency)|false|none|none|

<h2 id="tocS_AlmaDetails">AlmaDetails</h2>
<!-- backwards compatibility -->
<a id="schemaalmadetails"></a>
<a id="schema_AlmaDetails"></a>
<a id="tocSalmadetails"></a>
<a id="tocsalmadetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "feeType": "merchantPays",
  "sdkData": "string",
  "type": "alma"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|feeType|string|false|none|**Alma payment request fee type**|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|merchantPays|
|feeType|shopperPays|
|type|alma|

<h2 id="tocS_AmazonPayDetails">AmazonPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaamazonpaydetails"></a>
<a id="schema_AmazonPayDetails"></a>
<a id="tocSamazonpaydetails"></a>
<a id="tocsamazonpaydetails"></a>

```json
{
  "amazonPayToken": "string",
  "checkoutAttemptId": "string",
  "checkoutSessionId": "string",
  "sdkData": "string",
  "type": "amazonpay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amazonPayToken|string|false|none|This is the `amazonPayToken` that you obtained from the [Get Checkout Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session) response. This token is used for API only integration specifically.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|checkoutSessionId|string|false|none|The `checkoutSessionId` is used to identify the checkout session at the Amazon Pay side. This field is required only for drop-in and components integration, where it replaces the amazonPayToken.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**amazonpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|amazonpay|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_Amounts">Amounts</h2>
<!-- backwards compatibility -->
<a id="schemaamounts"></a>
<a id="schema_Amounts"></a>
<a id="tocSamounts"></a>
<a id="tocsamounts"></a>

```json
{
  "currency": "string",
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).|
|values|[integer(int64)]|true|none|The amounts of the donation (in [minor units](https://docs.adyen.com/development-resources/currency-codes/)).|

<h2 id="tocS_AncvDetails">AncvDetails</h2>
<!-- backwards compatibility -->
<a id="schemaancvdetails"></a>
<a id="schema_AncvDetails"></a>
<a id="tocSancvdetails"></a>
<a id="tocsancvdetails"></a>

```json
{
  "beneficiaryId": "string",
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "ancv"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaryId|string|false|none|ANCV account identification (email or account number)|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**ancv**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ancv|

<h2 id="tocS_AndroidPayDetails">AndroidPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaandroidpaydetails"></a>
<a id="schema_AndroidPayDetails"></a>
<a id="tocSandroidpaydetails"></a>
<a id="tocsandroidpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "sdkData": "string",
  "type": "androidpay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**androidpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|androidpay|

<h2 id="tocS_AppIdentifierInfo">AppIdentifierInfo</h2>
<!-- backwards compatibility -->
<a id="schemaappidentifierinfo"></a>
<a id="schema_AppIdentifierInfo"></a>
<a id="tocSappidentifierinfo"></a>
<a id="tocsappidentifierinfo"></a>

```json
{
  "androidPackageId": "string",
  "iosScheme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidPackageId|string|false|none|The Android package identifier for this app.|
|iosScheme|string|false|none|The iOS URL scheme for this app.|

<h2 id="tocS_ApplePayDetails">ApplePayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaapplepaydetails"></a>
<a id="schema_ApplePayDetails"></a>
<a id="tocSapplepaydetails"></a>
<a id="tocsapplepaydetails"></a>

```json
{
  "applePayToken": "string",
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "applepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applePayToken|string|true|none|The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**applepay**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|applepay|

<h2 id="tocS_ApplePayDonations">ApplePayDonations</h2>
<!-- backwards compatibility -->
<a id="schemaapplepaydonations"></a>
<a id="schema_ApplePayDonations"></a>
<a id="tocSapplepaydonations"></a>
<a id="tocsapplepaydonations"></a>

```json
{
  "applePayToken": "string",
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "applepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applePayToken|string|true|none|The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**applepay**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|applepay|

<h2 id="tocS_ApplePaySessionRequest">ApplePaySessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplepaysessionrequest"></a>
<a id="schema_ApplePaySessionRequest"></a>
<a id="tocSapplepaysessionrequest"></a>
<a id="tocsapplepaysessionrequest"></a>

```json
{
  "displayName": "string",
  "domainName": "string",
  "merchantIdentifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|This is the name that your shoppers will see in the Apple Pay interface.<br><br>The value returned as `configuration.merchantName` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.|
|domainName|string|true|none|The domain name you provided when you added Apple Pay in your Customer Area.<br><br>This must match the `window.location.hostname` of the web shop.|
|merchantIdentifier|string|true|none|Your merchant identifier registered with Apple Pay.<br><br>Use the value of the `configuration.merchantId` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.|

<h2 id="tocS_ApplePaySessionResponse">ApplePaySessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplepaysessionresponse"></a>
<a id="schema_ApplePaySessionResponse"></a>
<a id="tocSapplepaysessionresponse"></a>
<a id="tocsapplepaysessionresponse"></a>

```json
{
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|Base64 encoded data you need to [complete the Apple Pay merchant validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).|

<h2 id="tocS_ApplicationInfo">ApplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfo"></a>
<a id="schema_ApplicationInfo"></a>
<a id="tocSapplicationinfo"></a>
<a id="tocsapplicationinfo"></a>

```json
{
  "adyenLibrary": {
    "name": "string",
    "version": "string"
  },
  "adyenPaymentSource": {
    "name": "string",
    "version": "string"
  },
  "externalPlatform": {
    "integrator": "string",
    "name": "string",
    "version": "string"
  },
  "merchantApplication": {
    "name": "string",
    "version": "string"
  },
  "merchantDevice": {
    "os": "string",
    "osVersion": "string",
    "reference": "string"
  },
  "shopperInteractionDevice": {
    "locale": "string",
    "os": "string",
    "osVersion": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adyenLibrary|[CommonField](#schemacommonfield)|false|none|Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc.|
|adyenPaymentSource|[CommonField](#schemacommonfield)|false|none|Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.|
|externalPlatform|[ExternalPlatform](#schemaexternalplatform)|false|none|Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.|
|merchantApplication|[CommonField](#schemacommonfield)|false|none|Merchant developed software, such as cashier application, used to interact with the Adyen API.|
|merchantDevice|[MerchantDevice](#schemamerchantdevice)|false|none|Merchant device information.|
|shopperInteractionDevice|[ShopperInteractionDevice](#schemashopperinteractiondevice)|false|none|Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests.|

<h2 id="tocS_AuPayDetails">AuPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaupaydetails"></a>
<a id="schema_AuPayDetails"></a>
<a id="tocSaupaydetails"></a>
<a id="tocsaupaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "aupay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**aupay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|aupay|

<h2 id="tocS_AuthenticationData">AuthenticationData</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationdata"></a>
<a id="schema_AuthenticationData"></a>
<a id="tocSauthenticationdata"></a>
<a id="tocsauthenticationdata"></a>

```json
{
  "attemptAuthentication": "always",
  "authenticationOnly": false,
  "threeDSRequestData": {
    "challengeWindowSize": "01",
    "dataOnly": "false",
    "nativeThreeDS": "preferred",
    "threeDSVersion": "2.1.0"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptAuthentication|string|false|none|Indicates when 3D Secure authentication should be attempted. This overrides all other rules, including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).<br><br>Possible values:<br><br>* **always**: Perform 3D Secure authentication.<br>* **never**: Don't perform 3D Secure authentication. If PSD2 SCA or other national regulations require authentication, the transaction gets declined.|
|authenticationOnly|boolean|false|none|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.<br>Default: **false**.|
|threeDSRequestData|[ThreeDSRequestData](#schemathreedsrequestdata)|false|none|Object with additional parameters for the 3D Secure authentication flow.|

#### Enumerated Values

|Property|Value|
|---|---|
|attemptAuthentication|always|
|attemptAuthentication|never|

<h2 id="tocS_BacsDirectDebitDetails">BacsDirectDebitDetails</h2>
<!-- backwards compatibility -->
<a id="schemabacsdirectdebitdetails"></a>
<a id="schema_BacsDirectDebitDetails"></a>
<a id="tocSbacsdirectdebitdetails"></a>
<a id="tocsbacsdirectdebitdetails"></a>

```json
{
  "bankAccountNumber": "string",
  "bankLocationId": "string",
  "checkoutAttemptId": "string",
  "holderName": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "transferInstrumentId": "string",
  "type": "directdebit_GB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankLocationId|string|false|none|The bank routing number of the account.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|holderName|string|false|none|The name of the bank account holder.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|transferInstrumentId|string|false|none|The unique identifier of your user's verified transfer instrument, which you can use to top up their balance accounts.|
|type|string|false|none|**directdebit_GB**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|directdebit_GB|

<h2 id="tocS_BalanceCheckRequest">BalanceCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemabalancecheckrequest"></a>
<a id="schema_BalanceCheckRequest"></a>
<a id="tocSbalancecheckrequest"></a>
<a id="tocsbalancecheckrequest"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "captureDelayHours": 0,
  "dateOfBirth": "1970-01-01",
  "dccQuote": {
    "account": "string",
    "accountType": "string",
    "baseAmount": {
      "currency": "str",
      "value": 0
    },
    "basePoints": 0,
    "buy": {
      "currency": "str",
      "value": 0
    },
    "interbank": {
      "currency": "str",
      "value": 0
    },
    "reference": "string",
    "sell": {
      "currency": "str",
      "value": 0
    },
    "signature": "string",
    "source": "string",
    "type": "string",
    "validTill": "1970-01-01T00:00:00Z"
  },
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryDate": "1970-01-01T00:00:00Z",
  "deviceFingerprint": "string",
  "fraudOffset": 0,
  "installments": {
    "extra": 0,
    "plan": "bonus",
    "value": 0
  },
  "localizedShopperStatement": {
    "property1": "string",
    "property2": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "orderReference": "string",
  "paymentMethod": {
    "property1": "string",
    "property2": "string"
  },
  "recurring": {
    "contract": "ONECLICK",
    "recurringDetailName": "string",
    "recurringExpiry": "1970-01-01T00:00:00Z",
    "recurringFrequency": "string",
    "tokenService": "VISATOKENSERVICE"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "selectedBrand": "string",
  "selectedRecurringDetailReference": "string",
  "sessionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "socialSecurityNumber": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "telephoneNumber": "string",
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceChannel": "string",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEncData": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "sdkVersion": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "totalsGroup": "string",
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|dccQuote|[ForexQuote](#schemaforexquote)|false|none|The forex quote as returned in the response of the forex service.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|deliveryDate|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|installments|[Installments](#schemainstallments)|false|none|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|localizedShopperStatement|object|false|none|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|orderReference|string|false|none|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|paymentMethod|object|true|none|The collection that contains the type of the payment method and its specific information.|
|recurring|[Recurring](#schemarecurring)|false|none|The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|false|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|selectedBrand|string|false|none|Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card.|
|selectedRecurringDetailReference|string|false|none|The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.|
|sessionId|string|false|none|A session ID used to identify a payment session.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the payment should be split when using either Adyen for Platforms for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/split-payments), or standalone [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|threeDS2RequestData|[ThreeDS2RequestData](#schemathreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|totalsGroup|string|false|none|The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_BalanceCheckResponse">BalanceCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalancecheckresponse"></a>
<a id="schema_BalanceCheckResponse"></a>
<a id="tocSbalancecheckresponse"></a>
<a id="tocsbalancecheckresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "balance": {
    "currency": "str",
    "value": 0
  },
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "accountScore": 0,
        "checkId": 0,
        "name": "string"
      }
    ]
  },
  "pspReference": "string",
  "refusalReason": "string",
  "resultCode": "Success",
  "transactionLimit": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.|
|balance|[Amount](#schemaamount)|true|none|The balance for the payment method.|
|fraudResult|[FraudResult](#schemafraudresult)|false|none|The fraud result properties of the payment.|
|pspReference|string|false|none|Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|resultCode|string|true|none|The result of the cancellation request.<br><br>Possible values:<br><br>* **Success** – Indicates that the balance check was successful.<br>* **NotEnoughBalance** – Commonly indicates that the card did not have enough balance to pay the amount in the request, or that the currency of the balance on the card did not match the currency of the requested amount.<br>* **Failed** – Indicates that the balance check failed.|
|transactionLimit|[Amount](#schemaamount)|false|none|The maximum spendable balance for a single transaction. Applicable to some gift cards.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|
|resultCode|NotEnoughBalance|
|resultCode|Failed|

<h2 id="tocS_BillDeskDetails">BillDeskDetails</h2>
<!-- backwards compatibility -->
<a id="schemabilldeskdetails"></a>
<a id="schema_BillDeskDetails"></a>
<a id="tocSbilldeskdetails"></a>
<a id="tocsbilldeskdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "type": "billdesk_online"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|true|none|The issuer id of the shopper's selected bank.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|true|none|**billdesk**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|billdesk_online|
|type|billdesk_wallet|

<h2 id="tocS_BillingAddress">BillingAddress</h2>
<!-- backwards compatibility -->
<a id="schemabillingaddress"></a>
<a id="schema_BillingAddress"></a>
<a id="tocSbillingaddress"></a>
<a id="tocsbillingaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "houseNumberOrName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|The name of the city. Maximum length: 3000 characters.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|houseNumberOrName|string|true|none|The number or name of the house. Maximum length: 3000 characters.|
|postalCode|string|true|none|A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|
|street|string|true|none|The name of the street. Maximum length: 3000 characters.<br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.|

<h2 id="tocS_BlikDetails">BlikDetails</h2>
<!-- backwards compatibility -->
<a id="schemablikdetails"></a>
<a id="schema_BlikDetails"></a>
<a id="tocSblikdetails"></a>
<a id="tocsblikdetails"></a>

```json
{
  "blikCode": "string",
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "blik"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blikCode|string|false|none|BLIK code consisting of 6 digits.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**blik**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|blik|

<h2 id="tocS_BrowserInfo">BrowserInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrowserinfo"></a>
<a id="schema_BrowserInfo"></a>
<a id="tocSbrowserinfo"></a>
<a id="tocsbrowserinfo"></a>

```json
{
  "acceptHeader": "string",
  "colorDepth": 0,
  "javaEnabled": true,
  "javaScriptEnabled": true,
  "language": "string",
  "screenHeight": 0,
  "screenWidth": 0,
  "timeZoneOffset": 0,
  "userAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptHeader|string|true|none|The accept header value of the shopper's browser.|
|colorDepth|integer(int32)|true|none|The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48 bit color depth.|
|javaEnabled|boolean|true|none|Boolean value indicating if the shopper's browser is able to execute Java.|
|javaScriptEnabled|boolean|false|none|Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.|
|language|string|true|none|The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47).|
|screenHeight|integer(int32)|true|none|The total height of the shopper's device screen in pixels.|
|screenWidth|integer(int32)|true|none|The total width of the shopper's device screen in pixels.|
|timeZoneOffset|integer(int32)|true|none|Time difference between UTC time and the shopper's browser local time, in minutes.|
|userAgent|string|true|none|The user agent value of the shopper's browser.|

<h2 id="tocS_CancelOrderRequest">CancelOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelorderrequest"></a>
<a id="schema_CancelOrderRequest"></a>
<a id="tocScancelorderrequest"></a>
<a id="tocscancelorderrequest"></a>

```json
{
  "merchantAccount": "string",
  "order": {
    "orderData": "string",
    "pspReference": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier that orderData belongs to.|
|order|[EncryptedOrderData](#schemaencryptedorderdata)|true|none|The order request object that contains a pspReference that represents the order and the matching encrypted order data.|

<h2 id="tocS_CancelOrderResponse">CancelOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelorderresponse"></a>
<a id="schema_CancelOrderResponse"></a>
<a id="tocScancelorderresponse"></a>
<a id="tocscancelorderresponse"></a>

```json
{
  "pspReference": "string",
  "resultCode": "Received"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pspReference|string|true|none|A unique reference of the cancellation request.|
|resultCode|string|true|none|The result of the cancellation request.<br><br>Possible values:<br><br>* **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Received|

<h2 id="tocS_CarRental">CarRental</h2>
<!-- backwards compatibility -->
<a id="schemacarrental"></a>
<a id="schema_CarRental"></a>
<a id="tocScarrental"></a>
<a id="tocscarrental"></a>

```json
{
  "customerServicePhoneNumber": "string",
  "noShow": true,
  "pickupInfo": {
    "city": "string",
    "countryCode": "string",
    "date": "1970-01-01",
    "stateOrProvince": "string"
  },
  "rateType": "daily",
  "rentalAgreementNumber": "string",
  "rentalClassId": "string",
  "rentalDays": 0,
  "rentalRate": 0,
  "rentalSurcharges": {
    "fuel": 0,
    "insurance": 0,
    "oneWayDropOff": 0
  },
  "renterName": "string",
  "returnInfo": {
    "city": "string",
    "countryCode": "string",
    "date": "1970-01-01",
    "locationId": "string",
    "stateOrProvince": "string"
  },
  "taxExempt": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerServicePhoneNumber|string|false|none|The customer service phone number of the car rental company.<br>* Format: Alphanumeric<br>* maxLength: 17<br>* For US and CA numbers must be 10 characters in length<br>* Must not contain any special characters such as + or -<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.customerServiceTollFreeNumber`|
|noShow|boolean|false|none|Indicates if the customer didn't pick up their rental car.<br>* **additionalData key:** `carRental.noShowIndicator`|
|pickupInfo|[PickupInfo](#schemapickupinfo)|false|none|none|
|rateType|string|false|none|Indicates whether the rental rate is daily or weekly.<br>* **additionalData key:** `carRental.rateIndicator`|
|rentalAgreementNumber|string|false|none|The rental agreement number for the car rental.<br>* Format: ASCII<br>* maxLength: 9 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.rentalAgreementNumber`|
|rentalClassId|string|false|none|The classification of the rental car.<br>* Format: Alphanumeric<br>* maxLength: 4 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.rentalClassId`|
|rentalDays|integer(int32)|false|none|The number of days the car is rented for.<br>* Format: Numeric<br>* Max value: 9999<br>* **additionalData key:** `carRental.daysRented`|
|rentalRate|integer(int64)|false|none|Rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* Frequency of the rental rate is specified in the rateType field.<br>* **additionalData key:** `carRental.rate`|
|rentalSurcharges|[RentalSurcharges](#schemarentalsurcharges)|false|none|none|
|renterName|string|true|none|The name of the person renting the car.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.renterName`|
|returnInfo|[ReturnInfo](#schemareturninfo)|false|none|none|
|taxExempt|boolean|false|none|Indicates if the goods or services were tax-exempt, or if tax was not collected.<br>* **additionalData key:** `carRental.taxExemptIndicator`|

#### Enumerated Values

|Property|Value|
|---|---|
|rateType|daily|
|rateType|weekly|

<h2 id="tocS_CardBrandDetails">CardBrandDetails</h2>
<!-- backwards compatibility -->
<a id="schemacardbranddetails"></a>
<a id="schema_CardBrandDetails"></a>
<a id="tocScardbranddetails"></a>
<a id="tocscardbranddetails"></a>

```json
{
  "supported": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supported|boolean|false|none|Indicates if you support the card brand.|
|type|string|false|none|The name of the card brand.|

<h2 id="tocS_CardDetails">CardDetails</h2>
<!-- backwards compatibility -->
<a id="schemacarddetails"></a>
<a id="schema_CardDetails"></a>
<a id="tocScarddetails"></a>
<a id="tocscarddetails"></a>

```json
{
  "billingSequenceNumber": "string",
  "brand": "string",
  "checkoutAttemptId": "string",
  "cupsecureplus.smscode": "string",
  "cvc": "string",
  "encryptedCard": "string",
  "encryptedCardNumber": "string",
  "encryptedExpiryMonth": "string",
  "encryptedExpiryYear": "string",
  "encryptedPassword": "string",
  "encryptedSecurityCode": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "fastlaneData": "string",
  "fundingSource": "credit",
  "holderName": "string",
  "networkPaymentReference": "string",
  "number": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "srcCorrelationId": "string",
  "srcDigitalCardId": "string",
  "srcScheme": "string",
  "srcTokenReference": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "scheme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingSequenceNumber|string|false|none|The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.|
|brand|string|false|none|Secondary brand of the card. For example: **plastix**, **hmclub**.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|cupsecureplus.smscode|string|false|none|**Deprecated.**|
|cvc|string|false|none|The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|encryptedCard|string|false|none|Only include this for JSON Web Encryption (JWE) implementations. The JWE-encrypted card details.|
|encryptedCardNumber|string|false|none|The encrypted card number.|
|encryptedExpiryMonth|string|false|none|The encrypted card expiry month.|
|encryptedExpiryYear|string|false|none|The encrypted card expiry year.|
|encryptedPassword|string|false|none|This field contains an encrypted, one-time password or an authentication code provided by the cardholder.|
|encryptedSecurityCode|string|false|none|The encrypted card verification code.|
|expiryMonth|string|false|none|The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|expiryYear|string|false|none|The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|fastlaneData|string|false|none|The encoded fastlane data blob|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|holderName|string|false|none|The name of the card holder.|
|networkPaymentReference|string|false|none|The transaction identifier from card schemes. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment.|
|number|string|false|none|The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India.|
|srcCorrelationId|string|false|none|An identifier used for the Click to Pay transaction.|
|srcDigitalCardId|string|false|none|The SRC reference for the Click to Pay token.|
|srcScheme|string|false|none|The scheme that is being used for Click to Pay.|
|srcTokenReference|string|false|none|The reference for the Click to Pay token.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|Default payment method details. Common for scheme payment methods, and for simple payment method details.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|bcmc|
|type|scheme|
|type|networkToken|
|type|giftcard|
|type|card|
|type|clicktopay|

<h2 id="tocS_CardDetailsRequest">CardDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacarddetailsrequest"></a>
<a id="schema_CardDetailsRequest"></a>
<a id="tocScarddetailsrequest"></a>
<a id="tocscarddetailsrequest"></a>

```json
{
  "cardNumber": "string",
  "countryCode": "string",
  "encryptedCardNumber": "string",
  "merchantAccount": "string",
  "supportedBrands": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumber|string|false|none|A minimum of the first six digits of the card number. The full card number gives the best result. <br><br>You must be [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide) to collect raw card data. Alternatively, you can use the `encryptedCardNumber` field.|
|countryCode|string|false|none|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|encryptedCardNumber|string|false|none|The encrypted card number.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|supportedBrands|[string]|false|none|The card brands you support. This is the [`brands`](https://docs.adyen.com/api-explorer/Checkout/latest/post/paymentMethods#responses-200-paymentMethods-brands) array from your [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response. <br><br>If not included, our API uses the ones configured for your merchant account and, if provided, the country code.|

<h2 id="tocS_CardDetailsResponse">CardDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacarddetailsresponse"></a>
<a id="schema_CardDetailsResponse"></a>
<a id="tocScarddetailsresponse"></a>
<a id="tocscarddetailsresponse"></a>

```json
{
  "brands": [
    {
      "supported": true,
      "type": "string"
    }
  ],
  "fundingSource": "string",
  "isCardCommercial": true,
  "issuingCountryCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brands|[[CardBrandDetails](#schemacardbranddetails)]|false|none|The list of brands identified for the card.|
|fundingSource|string|false|none|The funding source of the card, for example **DEBIT**, **CREDIT**, or **PREPAID**.|
|isCardCommercial|boolean|false|none|Indicates if this is a commercial card or a consumer card. If **true**, it is a commercial card. If **false**, it is a consumer card.|
|issuingCountryCode|string|false|none|The two-letter country code  of the country where the card was issued.|

<h2 id="tocS_CardDonations">CardDonations</h2>
<!-- backwards compatibility -->
<a id="schemacarddonations"></a>
<a id="schema_CardDonations"></a>
<a id="tocScarddonations"></a>
<a id="tocscarddonations"></a>

```json
{
  "billingSequenceNumber": "string",
  "brand": "string",
  "checkoutAttemptId": "string",
  "cupsecureplus.smscode": "string",
  "cvc": "string",
  "encryptedCard": "string",
  "encryptedCardNumber": "string",
  "encryptedExpiryMonth": "string",
  "encryptedExpiryYear": "string",
  "encryptedPassword": "string",
  "encryptedSecurityCode": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "fastlaneData": "string",
  "fundingSource": "credit",
  "holderName": "string",
  "networkPaymentReference": "string",
  "number": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "srcCorrelationId": "string",
  "srcDigitalCardId": "string",
  "srcScheme": "string",
  "srcTokenReference": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "scheme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingSequenceNumber|string|false|none|The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.|
|brand|string|false|none|Secondary brand of the card. For example: **plastix**, **hmclub**.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|cupsecureplus.smscode|string|false|none|**Deprecated.**|
|cvc|string|false|none|The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|encryptedCard|string|false|none|Only include this for JSON Web Encryption (JWE) implementations. The JWE-encrypted card details.|
|encryptedCardNumber|string|false|none|The encrypted card number.|
|encryptedExpiryMonth|string|false|none|The encrypted card expiry month.|
|encryptedExpiryYear|string|false|none|The encrypted card expiry year.|
|encryptedPassword|string|false|none|This field contains an encrypted, one-time password or an authentication code provided by the cardholder.|
|encryptedSecurityCode|string|false|none|The encrypted card verification code.|
|expiryMonth|string|false|none|The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|expiryYear|string|false|none|The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|fastlaneData|string|false|none|The encoded fastlane data blob|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|holderName|string|false|none|The name of the card holder.|
|networkPaymentReference|string|false|none|The transaction identifier from card schemes. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment.|
|number|string|false|none|The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India.|
|srcCorrelationId|string|false|none|An identifier used for the Click to Pay transaction.|
|srcDigitalCardId|string|false|none|The SRC reference for the Click to Pay token.|
|srcScheme|string|false|none|The scheme that is being used for Click to Pay.|
|srcTokenReference|string|false|none|The reference for the Click to Pay token.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|Default payment method details. Common for scheme payment methods, and for simple payment method details.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|bcmc|
|type|scheme|
|type|networkToken|
|type|giftcard|
|type|card|
|type|clicktopay|

<h2 id="tocS_CashAppDetails">CashAppDetails</h2>
<!-- backwards compatibility -->
<a id="schemacashappdetails"></a>
<a id="schema_CashAppDetails"></a>
<a id="tocScashappdetails"></a>
<a id="tocscashappdetails"></a>

```json
{
  "cashtag": "string",
  "checkoutAttemptId": "string",
  "customerId": "string",
  "grantId": "string",
  "onFileGrantId": "string",
  "recurringDetailReference": "string",
  "requestId": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "string",
  "type": "cashapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cashtag|string|false|none|Cash App issued cashtag for recurring payment|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|customerId|string|false|none|Cash App issued customerId for recurring payment|
|grantId|string|false|none|Cash App issued grantId for one time payment|
|onFileGrantId|string|false|none|Cash App issued onFileGrantId for recurring payment|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|requestId|string|false|none|Cash App request id|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The payment method subtype.|
|type|string|false|none|cashapp|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cashapp|

<h2 id="tocS_CellulantDetails">CellulantDetails</h2>
<!-- backwards compatibility -->
<a id="schemacellulantdetails"></a>
<a id="schema_CellulantDetails"></a>
<a id="tocScellulantdetails"></a>
<a id="tocscellulantdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "type": "cellulant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|false|none|The Cellulant issuer.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**Cellulant**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cellulant|

<h2 id="tocS_CheckoutAwaitAction">CheckoutAwaitAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutawaitaction"></a>
<a id="schema_CheckoutAwaitAction"></a>
<a id="tocScheckoutawaitaction"></a>
<a id="tocscheckoutawaitaction"></a>

```json
{
  "paymentData": "string",
  "paymentMethodType": "string",
  "type": "await",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|type|string|true|none|**await**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|await|

<h2 id="tocS_CheckoutBankAccount">CheckoutBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutbankaccount"></a>
<a id="schema_CheckoutBankAccount"></a>
<a id="tocScheckoutbankaccount"></a>
<a id="tocscheckoutbankaccount"></a>

```json
{
  "accountType": "balance",
  "bankAccountNumber": "string",
  "bankCity": "string",
  "bankLocationId": "string",
  "bankName": "string",
  "bic": "string",
  "countryCode": "string",
  "iban": "string",
  "ownerName": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|false|none|The type of the bank account.|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankCity|string|false|none|The bank city.|
|bankLocationId|string|false|none|The location id of the bank. The field value is `nil` in most cases.|
|bankName|string|false|none|The name of the bank.|
|bic|string|false|none|The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.|
|countryCode|string|false|none|Country code where the bank is located.<br><br>A valid value is an ISO two-character country code (e.g. 'NL').|
|iban|string|false|none|The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).|
|ownerName|string|false|none|The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.|
|taxId|string|false|none|The bank account holder's tax ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|balance|
|accountType|checking|
|accountType|deposit|
|accountType|general|
|accountType|other|
|accountType|payment|
|accountType|savings|

<h2 id="tocS_CheckoutBankTransferAction">CheckoutBankTransferAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutbanktransferaction"></a>
<a id="schema_CheckoutBankTransferAction"></a>
<a id="tocScheckoutbanktransferaction"></a>
<a id="tocscheckoutbanktransferaction"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "string",
  "beneficiary": "string",
  "bic": "string",
  "branchCode": "string",
  "downloadUrl": "string",
  "iban": "string",
  "paymentMethodType": "string",
  "reference": "string",
  "routingNumber": "string",
  "shopperEmail": "string",
  "sortCode": "string",
  "totalAmount": {
    "currency": "str",
    "value": 0
  },
  "type": "bankTransfer",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The account number of the bank transfer.|
|bankCode|string|false|none|The bank code of the bank transfer.|
|beneficiary|string|false|none|The name of the account holder.|
|bic|string|false|none|The BIC of the IBAN.|
|branchCode|string|false|none|The branch code of the bank transfer.|
|downloadUrl|string|false|none|The url to download payment details with.|
|iban|string|false|none|The IBAN of the bank transfer.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|reference|string|false|none|The transfer reference.|
|routingNumber|string|false|none|The routing number of the bank transfer.|
|shopperEmail|string|false|none|The e-mail of the shopper, included if an e-mail was sent to the shopper.|
|sortCode|string|false|none|The sort code of the bank transfer.|
|totalAmount|[Amount](#schemaamount)|false|none|The amount of the bank transfer.|
|type|string|true|none|The type of the action.|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bankTransfer|

<h2 id="tocS_CheckoutDelegatedAuthenticationAction">CheckoutDelegatedAuthenticationAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutdelegatedauthenticationaction"></a>
<a id="schema_CheckoutDelegatedAuthenticationAction"></a>
<a id="tocScheckoutdelegatedauthenticationaction"></a>
<a id="tocscheckoutdelegatedauthenticationaction"></a>

```json
{
  "authorisationToken": "string",
  "paymentData": "string",
  "paymentMethodType": "string",
  "token": "string",
  "type": "delegatedAuthentication",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorisationToken|string|false|none|A token needed to authorise a payment.|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|token|string|false|none|A token to pass to the delegatedAuthentication component.|
|type|string|true|none|**delegatedAuthentication**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delegatedAuthentication|

<h2 id="tocS_CheckoutForwardRequest">CheckoutForwardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutforwardrequest"></a>
<a id="schema_CheckoutForwardRequest"></a>
<a id="tocScheckoutforwardrequest"></a>
<a id="tocscheckoutforwardrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "baseUrl": "string",
  "merchantAccount": "string",
  "merchantReference": "string",
  "options": {
    "accountUpdate": true,
    "dryRun": true,
    "networkToken": {
      "includeCryptogram": true,
      "useNetworkToken": true
    },
    "networkTxReferencePaths": [
      "string"
    ],
    "tokenize": true,
    "transactionLinkIdPaths": [
      "string"
    ]
  },
  "paymentMethod": {
    "cvc": "string",
    "encryptedCardNumber": "string",
    "encryptedExpiryMonth": "string",
    "encryptedExpiryYear": "string",
    "encryptedSecurityCode": "string",
    "expiryMonth": "string",
    "expiryYear": "string",
    "holderName": "string",
    "number": "string",
    "type": "scheme"
  },
  "request": {
    "body": "string",
    "credentials": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "post",
    "urlSuffix": "string"
  },
  "shopperReference": "string",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount of the forwarded payment.|
|baseUrl|string|true|none|The base URL of the third party API, where Adyen will send the request to forward the payment details.|
|merchantAccount|string|true|none|Your merchant account.|
|merchantReference|string|false|none|Merchant defined payment reference.|
|options|[CheckoutForwardRequestOptions](#schemacheckoutforwardrequestoptions)|false|none|The customizations that can be applied when making a forward request.|
|paymentMethod|[CheckoutForwardRequestCard](#schemacheckoutforwardrequestcard)|false|none|The card details.|
|request|[CheckoutOutgoingForwardRequest](#schemacheckoutoutgoingforwardrequest)|true|none|The [details of the request](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#request-to-adyen-card) that you want to forward to the third-party.|
|shopperReference|string|true|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|storedPaymentMethodId|string|false|none|The unique identifier of the token that you want to forward to the third party. This is the `storedPaymentMethodId` you received in the webhook after you created the token.|

<h2 id="tocS_CheckoutForwardRequestCard">CheckoutForwardRequestCard</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutforwardrequestcard"></a>
<a id="schema_CheckoutForwardRequestCard"></a>
<a id="tocScheckoutforwardrequestcard"></a>
<a id="tocscheckoutforwardrequestcard"></a>

```json
{
  "cvc": "string",
  "encryptedCardNumber": "string",
  "encryptedExpiryMonth": "string",
  "encryptedExpiryYear": "string",
  "encryptedSecurityCode": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "holderName": "string",
  "number": "string",
  "type": "scheme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvc|string|false|none|The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is also known as:<br>* CVV2/CVC2 – length: 3 digits<br>* CID – length: 4 digits<br>|
|encryptedCardNumber|string|false|none|The encrypted card number.|
|encryptedExpiryMonth|string|false|none|The encrypted expiryMonth|
|encryptedExpiryYear|string|false|none|The encrypted card expiry year.|
|encryptedSecurityCode|string|false|none|The encrypted security code.|
|expiryMonth|string|false|none|The card expiry month.<br>Format: 2 digits, zero-padded for single digits. For example:<br>* 03 = March<br>* 11 = November|
|expiryYear|string|false|none|The card expiry year.|
|holderName|string|false|none|The name of the cardholder.|
|number|string|false|none|The card number. Only collect raw card data if you are fully [PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).<br>Format: Do not use separators.|
|type|string|false|none|Default payment method details. Common for scheme payment methods, and for simple payment method details.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|scheme|

<h2 id="tocS_CheckoutForwardRequestOptions">CheckoutForwardRequestOptions</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutforwardrequestoptions"></a>
<a id="schema_CheckoutForwardRequestOptions"></a>
<a id="tocScheckoutforwardrequestoptions"></a>
<a id="tocscheckoutforwardrequestoptions"></a>

```json
{
  "accountUpdate": true,
  "dryRun": true,
  "networkToken": {
    "includeCryptogram": true,
    "useNetworkToken": true
  },
  "networkTxReferencePaths": [
    "string"
  ],
  "tokenize": true,
  "transactionLinkIdPaths": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountUpdate|boolean|false|none|Set to **true** to check if the account tied to the card has been updated.|
|dryRun|boolean|false|none|Set to **true** to receive a copy of the request Adyen is making to the third party in the response. Any sensitive information will be masked in the response you receive. This functionality is only available in the test environment.|
|networkToken|[CheckoutNetworkTokenOption](#schemacheckoutnetworktokenoption)|false|none|The object that contains the details for forwarding a network token.|
|networkTxReferencePaths|[string]|false|none|Only include when `tokenize` is set to **true**.<br><br>A list of addresses to possible location(s) of the `networkTxReference` that will be returned in the third party response.|
|tokenize|boolean|false|none|Set to **true** to [tokenize](https://docs.adyen.com/online-payments/tokenization) the payment details.|
|transactionLinkIdPaths|[string]|false|none|Only include when `tokenize` is set to **true**.<br><br>A list of addresses to possible location(s) of the `transactionLinkId` that will be returned in the third party response.|

<h2 id="tocS_CheckoutForwardResponse">CheckoutForwardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutforwardresponse"></a>
<a id="schema_CheckoutForwardResponse"></a>
<a id="tocScheckoutforwardresponse"></a>
<a id="tocscheckoutforwardresponse"></a>

```json
{
  "merchantReference": "string",
  "pspReference": "string",
  "response": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "status": 0
  },
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantReference|string|false|none|Merchant defined payment reference.|
|pspReference|string|false|none|Adyen's 16-character reference associated with the transaction/request. This value is globally unique. Use this reference when you communicate with us about this request.|
|response|[CheckoutForwardResponseFromUrl](#schemacheckoutforwardresponsefromurl)|true|none|The details of the response Adyen received from the third party.|
|storedPaymentMethodId|string|false|none|The unique identifier of the token.|

<h2 id="tocS_CheckoutForwardResponseFromUrl">CheckoutForwardResponseFromUrl</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutforwardresponsefromurl"></a>
<a id="schema_CheckoutForwardResponseFromUrl"></a>
<a id="tocScheckoutforwardresponsefromurl"></a>
<a id="tocscheckoutforwardresponsefromurl"></a>

```json
{
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The body of the response Adyen received from the third party, in string format.|
|headers|object|false|none|The HTTP headers of the response Adyen received from the third party.|
|status|integer(int32)|false|none|The HTTP status of the response Adyen received from the third party.|

<h2 id="tocS_CheckoutNativeRedirectAction">CheckoutNativeRedirectAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutnativeredirectaction"></a>
<a id="schema_CheckoutNativeRedirectAction"></a>
<a id="tocScheckoutnativeredirectaction"></a>
<a id="tocscheckoutnativeredirectaction"></a>

```json
{
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "method": "string",
  "nativeRedirectData": "string",
  "paymentMethodType": "string",
  "type": "nativeRedirect",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|When the redirect URL must be accessed via POST, use this data to post to the redirect URL.|
|method|string|false|none|Specifies the HTTP method, for example GET or POST.|
|nativeRedirectData|string|false|none|Native SDK's redirect data containing the direct issuer link and state data that must be submitted to the /v1/nativeRedirect/redirectResult.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|type|string|true|none|**nativeRedirect**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|nativeRedirect|

<h2 id="tocS_CheckoutNetworkTokenOption">CheckoutNetworkTokenOption</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutnetworktokenoption"></a>
<a id="schema_CheckoutNetworkTokenOption"></a>
<a id="tocScheckoutnetworktokenoption"></a>
<a id="tocscheckoutnetworktokenoption"></a>

```json
{
  "includeCryptogram": true,
  "useNetworkToken": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeCryptogram|boolean|false|none|Set to **true** to enable forwarding network token cryptograms.|
|useNetworkToken|boolean|false|none|Set to **true** to forward the network token for a card.|

<h2 id="tocS_CheckoutOrderResponse">CheckoutOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutorderresponse"></a>
<a id="schema_CheckoutOrderResponse"></a>
<a id="tocScheckoutorderresponse"></a>
<a id="tocscheckoutorderresponse"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "expiresAt": "string",
  "orderData": "string",
  "pspReference": "string",
  "reference": "string",
  "remainingAmount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The initial amount of the order.|
|expiresAt|string|false|none|The expiry date for the order.|
|orderData|string|false|none|The encrypted order data.|
|pspReference|string|true|none|The `pspReference` that belongs to the order.|
|reference|string|false|none|The merchant reference for the order.|
|remainingAmount|[Amount](#schemaamount)|false|none|The updated remaining amount.|

<h2 id="tocS_CheckoutOutgoingForwardRequest">CheckoutOutgoingForwardRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutoutgoingforwardrequest"></a>
<a id="schema_CheckoutOutgoingForwardRequest"></a>
<a id="tocScheckoutoutgoingforwardrequest"></a>
<a id="tocscheckoutoutgoingforwardrequest"></a>

```json
{
  "body": "string",
  "credentials": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "httpMethod": "post",
  "urlSuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|The request body that you want Adyen to forward to the third party on your behalf, in string format.<br><br>Include key value pairs to specify the payment details, and use [placeholders](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#placeholders) for the values. Adyen replaces the placeholders with the payment details when making the request to the third party.<br><br>When forwarding a network token, include a [condition](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#conditional-placeholders) that checks if the network token exists, and informs Adyen of which fields to send depending on the outcome.|
|credentials|string|false|none|Your credentials that are needed to authenticate with the third party.|
|headers|object|false|none|The request headers that will be included in the request Adyen makes to the third party on your behalf. Supports the `{{credentials}}` [placeholder](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#placeholders).|
|httpMethod|string|true|none|The HTTP method to use for the request Adyen makes on your behalf to the third party.|
|urlSuffix|string|false|none|The suffix that Adyen needs to append to the `baseUrl` to construct the destination URL that belongs to the third party. This is usually the endpoint name for the request, for example, **/payments**.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpMethod|post|
|httpMethod|put|
|httpMethod|patch|

<h2 id="tocS_CheckoutQrCodeAction">CheckoutQrCodeAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutqrcodeaction"></a>
<a id="schema_CheckoutQrCodeAction"></a>
<a id="tocScheckoutqrcodeaction"></a>
<a id="tocscheckoutqrcodeaction"></a>

```json
{
  "expiresAt": "string",
  "paymentData": "string",
  "paymentMethodType": "string",
  "qrCodeData": "string",
  "type": "qrCode",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresAt|string|false|none|Expiry time of the QR code.|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|qrCodeData|string|false|none|The contents of the QR code as a UTF8 string.|
|type|string|true|none|**qrCode**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|qrCode|

<h2 id="tocS_CheckoutRedirectAction">CheckoutRedirectAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutredirectaction"></a>
<a id="schema_CheckoutRedirectAction"></a>
<a id="tocScheckoutredirectaction"></a>
<a id="tocscheckoutredirectaction"></a>

```json
{
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "method": "string",
  "paymentMethodType": "string",
  "type": "redirect",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|When the redirect URL must be accessed via POST, use this data to post to the redirect URL.|
|method|string|false|none|Specifies the HTTP method, for example GET or POST.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|type|string|true|none|**redirect**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|redirect|

<h2 id="tocS_CheckoutSDKAction">CheckoutSDKAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutsdkaction"></a>
<a id="schema_CheckoutSDKAction"></a>
<a id="tocScheckoutsdkaction"></a>
<a id="tocscheckoutsdkaction"></a>

```json
{
  "paymentData": "string",
  "paymentMethodType": "string",
  "sdkData": {
    "property1": "string",
    "property2": "string"
  },
  "type": "sdk",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|sdkData|object|false|none|The data to pass to the SDK.|
|type|string|true|none|The type of the action.|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sdk|
|type|wechatpaySDK|

<h2 id="tocS_CheckoutSessionInstallmentOption">CheckoutSessionInstallmentOption</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutsessioninstallmentoption"></a>
<a id="schema_CheckoutSessionInstallmentOption"></a>
<a id="tocScheckoutsessioninstallmentoption"></a>
<a id="tocscheckoutsessioninstallmentoption"></a>

```json
{
  "plans": [
    "bonus"
  ],
  "preselectedValue": 0,
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plans|[string]|false|none|Defines the type of installment plan. If not set, defaults to **regular**.<br><br>Possible values:<br>* **regular**<br>* **revolving**<br>* **bonus**|
|preselectedValue|integer(int32)|false|none|Preselected number of installments offered for this payment method.|
|values|[integer(int32)]|false|none|An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**.|

#### Enumerated Values

|Property|Value|
|---|---|
|plans|bonus|
|plans|buynow_paylater|
|plans|interes_refund_prctg|
|plans|interest_bonus|
|plans|nointeres_refund_prctg|
|plans|nointerest_bonus|
|plans|refund_prctg|
|plans|regular|
|plans|revolving|
|plans|with_interest|

<h2 id="tocS_CheckoutSessionThreeDS2RequestData">CheckoutSessionThreeDS2RequestData</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutsessionthreeds2requestdata"></a>
<a id="schema_CheckoutSessionThreeDS2RequestData"></a>
<a id="tocScheckoutsessionthreeds2requestdata"></a>
<a id="tocscheckoutsessionthreeds2requestdata"></a>

```json
{
  "homePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "mobilePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "threeDSRequestorChallengeInd": "01",
  "workPhone": {
    "cc": "str",
    "subscriber": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homePhone|[Phone](#schemaphone)|false|none|The home phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|mobilePhone|[Phone](#schemaphone)|false|none|The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|workPhone|[Phone](#schemaphone)|false|none|The work phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|

#### Enumerated Values

|Property|Value|
|---|---|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|

<h2 id="tocS_CheckoutThreeDS2Action">CheckoutThreeDS2Action</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutthreeds2action"></a>
<a id="schema_CheckoutThreeDS2Action"></a>
<a id="tocScheckoutthreeds2action"></a>
<a id="tocscheckoutthreeds2action"></a>

```json
{
  "authorisationToken": "string",
  "paymentData": "string",
  "paymentMethodType": "string",
  "subtype": "string",
  "token": "string",
  "type": "threeDS2",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorisationToken|string|false|none|A token needed to authorise a payment.|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|subtype|string|false|none|A subtype of the token.|
|token|string|false|none|A token to pass to the 3DS2 Component to get the fingerprint.|
|type|string|true|none|**threeDS2**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|threeDS2|

<h2 id="tocS_CheckoutVoucherAction">CheckoutVoucherAction</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutvoucheraction"></a>
<a id="schema_CheckoutVoucherAction"></a>
<a id="tocScheckoutvoucheraction"></a>
<a id="tocscheckoutvoucheraction"></a>

```json
{
  "alternativeReference": "string",
  "collectionInstitutionNumber": "string",
  "downloadUrl": "string",
  "entity": "string",
  "expiresAt": "string",
  "initialAmount": {
    "currency": "str",
    "value": 0
  },
  "instructionsUrl": "string",
  "issuer": "string",
  "maskedTelephoneNumber": "string",
  "merchantName": "string",
  "merchantReference": "string",
  "passCreationToken": "string",
  "paymentData": "string",
  "paymentMethodType": "string",
  "reference": "string",
  "shopperEmail": "string",
  "shopperName": "string",
  "surcharge": {
    "currency": "str",
    "value": 0
  },
  "totalAmount": {
    "currency": "str",
    "value": 0
  },
  "type": "voucher",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternativeReference|string|false|none|The voucher alternative reference code.|
|collectionInstitutionNumber|string|false|none|A collection institution number (store number) for Econtext Pay-Easy ATM.|
|downloadUrl|string|false|none|The URL to download the voucher.|
|entity|string|false|none|An entity number of Multibanco.|
|expiresAt|string|false|none|The date time of the voucher expiry.|
|initialAmount|[Amount](#schemaamount)|false|none|The initial amount.|
|instructionsUrl|string|false|none|The URL to the detailed instructions to make payment using the voucher.|
|issuer|string|false|none|The issuer of the voucher.|
|maskedTelephoneNumber|string|false|none|The shopper telephone number (partially masked).|
|merchantName|string|false|none|The merchant name.|
|merchantReference|string|false|none|The merchant reference.|
|passCreationToken|string|false|none|A Base64-encoded token containing all properties of the voucher. For iOS, you can use this to pass a voucher to Apple Wallet.|
|paymentData|string|false|none|Encoded payment data.|
|paymentMethodType|string|false|none|Specifies the payment method.|
|reference|string|false|none|The voucher reference code.|
|shopperEmail|string|false|none|The shopper email.|
|shopperName|string|false|none|The shopper name.|
|surcharge|[Amount](#schemaamount)|false|none|The surcharge amount.|
|totalAmount|[Amount](#schemaamount)|false|none|The total amount (initial plus surcharge amount).|
|type|string|true|none|**voucher**|
|url|string|false|none|Specifies the URL to redirect to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|voucher|

<h2 id="tocS_CommonField">CommonField</h2>
<!-- backwards compatibility -->
<a id="schemacommonfield"></a>
<a id="schema_CommonField"></a>
<a id="tocScommonfield"></a>
<a id="tocscommonfield"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the field. For example, Name of External Platform.|
|version|string|false|none|Version of the field. For example, Version of External Platform.|

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "homepage": "string",
  "name": "string",
  "registrationNumber": "string",
  "registryLocation": "string",
  "taxId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homepage|string|false|none|The company website's home page.|
|name|string|false|none|The company name.|
|registrationNumber|string|false|none|Registration number of the company.|
|registryLocation|string|false|none|Registry location of the company.|
|taxId|string|false|none|Tax ID of the company.|
|type|string|false|none|The company type.|

<h2 id="tocS_ConfidenceScore">ConfidenceScore</h2>
<!-- backwards compatibility -->
<a id="schemaconfidencescore"></a>
<a id="schema_ConfidenceScore"></a>
<a id="tocSconfidencescore"></a>
<a id="tocsconfidencescore"></a>

```json
{
  "errors": [
    "string"
  ],
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|score|number(double)|false|none|none|

<h2 id="tocS_CreateCheckoutSessionRequest">CreateCheckoutSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecheckoutsessionrequest"></a>
<a id="schema_CreateCheckoutSessionRequest"></a>
<a id="tocScreatecheckoutsessionrequest"></a>
<a id="tocscreatecheckoutsessionrequest"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "allowedPaymentMethods": [
    "string"
  ],
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "authenticationData": {
    "attemptAuthentication": "always",
    "authenticationOnly": false,
    "threeDSRequestData": {
      "challengeWindowSize": "01",
      "dataOnly": "false",
      "nativeThreeDS": "preferred",
      "threeDSVersion": "2.1.0"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "blockedPaymentMethods": [
    "string"
  ],
  "captureDelayHours": 0,
  "channel": "iOS",
  "company": {
    "homepage": "string",
    "name": "string",
    "registrationNumber": "string",
    "registryLocation": "string",
    "taxId": "string",
    "type": "string"
  },
  "countryCode": "string",
  "dateOfBirth": "1970-01-01",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "firstName": "string",
    "houseNumberOrName": "string",
    "lastName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "enableOneClick": true,
  "enablePayOut": true,
  "enableRecurring": true,
  "expiresAt": "1970-01-01T00:00:00Z",
  "fundOrigin": {
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string"
  },
  "fundRecipient": {
    "IBAN": "string",
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "paymentMethod": {
      "billingSequenceNumber": "string",
      "brand": "string",
      "checkoutAttemptId": "string",
      "cupsecureplus.smscode": "string",
      "cvc": "string",
      "encryptedCard": "string",
      "encryptedCardNumber": "string",
      "encryptedExpiryMonth": "string",
      "encryptedExpiryYear": "string",
      "encryptedPassword": "string",
      "encryptedSecurityCode": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "fastlaneData": "string",
      "fundingSource": "credit",
      "holderName": "string",
      "networkPaymentReference": "string",
      "number": "string",
      "recurringDetailReference": "string",
      "sdkData": "string",
      "shopperNotificationReference": "string",
      "srcCorrelationId": "string",
      "srcDigitalCardId": "string",
      "srcScheme": "string",
      "srcTokenReference": "string",
      "storedPaymentMethodId": "string",
      "threeDS2SdkVersion": "string",
      "type": "scheme"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string",
    "walletOwnerTaxId": "string",
    "walletPurpose": "identifiedBoleto"
  },
  "installmentOptions": {
    "property1": {
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    },
    "property2": {
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "mandate": {
    "amount": "string",
    "amountRule": "max",
    "billingAttemptsRule": "on",
    "billingDay": "string",
    "count": "string",
    "endsAt": "string",
    "frequency": "adhoc",
    "remarks": "string",
    "startsAt": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "mode": "embedded",
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurringExpiry": "string",
  "recurringFrequency": "string",
  "recurringProcessingModel": "CardOnFile",
  "redirectFromIssuerMethod": "string",
  "redirectToIssuerMethod": "string",
  "reference": "string",
  "returnUrl": "string",
  "riskData": {
    "clientData": "string",
    "customFields": {
      "property1": "string",
      "property2": "string"
    },
    "fraudOffset": 0,
    "profileReference": "string"
  },
  "shopperConversionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "showInstallmentAmount": true,
  "showRemovePaymentMethodButton": true,
  "socialSecurityNumber": "string",
  "splitCardFundingSources": false,
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "storeFiltrationMode": "exclusive",
  "storePaymentMethod": true,
  "storePaymentMethodMode": "askForConsent",
  "telephoneNumber": "string",
  "themeId": "string",
  "thirdPartyTokenRedundancyInfo": {
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplateCode": "string"
  },
  "threeDS2RequestData": {
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "threeDSRequestorChallengeInd": "01",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|allowedPaymentMethods|[string]|false|none|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|amount|[Amount](#schemaamount)|true|none|The amount of the payment.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|authenticationData|[AuthenticationData](#schemaauthenticationdata)|false|none|Configuration data for 3DS payments.|
|billingAddress|[BillingAddress](#schemabillingaddress)|false|none|The address where to send the invoice.|
|blockedPaymentMethods|[string]|false|none|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|channel|string|false|none|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* **iOS**<br>* **Android**<br>* **Web**|
|company|[Company](#schemacompany)|false|none|Information regarding the company.|
|countryCode|string|false|none|The shopper's two-letter country code.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|deliverAt|string(date-time)|false|none|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|deliveryAddress|[DeliveryAddress](#schemadeliveryaddress)|false|none|The address where the purchased goods should be delivered.|
|enableOneClick|boolean|false|none|When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).|
|enablePayOut|boolean|false|none|When true and `shopperReference` is provided, the payment details will be tokenized for payouts.|
|enableRecurring|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.|
|expiresAt|string(date-time)|false|none|The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.|
|fundOrigin|[FundOrigin](#schemafundorigin)|false|none|The person or entity funding the money.|
|fundRecipient|[FundRecipient](#schemafundrecipient)|false|none|the person or entity receiving the money|
|installmentOptions|object|false|none|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|mandate|[Mandate](#schemamandate)|false|none|The mandate details to initiate recurring transaction.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request.<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|mode|string|false|none|Indicates the type of front end integration. Possible values:<br>* **embedded** (default): Drop-in or Components integration<br>* **hosted**: Hosted Checkout integration|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|recurringFrequency|string|false|none|Minimum number of days between authorisations. Only for 3D Secure 2.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|redirectFromIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|redirectToIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|reference|string|true|none|The reference to uniquely identify a payment.|
|returnUrl|string|true|none|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|riskData|[RiskData](#schemariskdata)|false|none|Any risk-related settings to apply to the payment.|
|shopperConversionId|string|false|none|Use this if you made a `/paymentMethods` request to get the payment methods for the shopper's checkout session.<br><br>A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|shopperEmail|string|false|none|The shopper's email address.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[ShopperName](#schemashoppername)|false|none|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|showInstallmentAmount|boolean|false|none|Set to true to show the payment amount per installment.|
|showRemovePaymentMethodButton|boolean|false|none|Set to **true** to show a button that lets the shopper remove a stored payment method.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splitCardFundingSources|boolean|false|none|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|storeFiltrationMode|string|false|none|Specifies how payment methods should be filtered based on the 'store' parameter:<br>  - 'exclusive': Only payment methods belonging to the specified 'store' are returned.<br>  - 'inclusive': Payment methods from the 'store' and those not associated with any other store are returned.|
|storePaymentMethod|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).|
|storePaymentMethodMode|string|false|none|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|themeId|string|false|none|Sets a custom theme for [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout). The value can be any of the **Theme ID** values from your Customer Area.|
|thirdPartyTokenRedundancyInfo|[ThirdPartyTokenRedundancyInfo](#schemathirdpartytokenredundancyinfo)|false|none|Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.|
|threeDS2RequestData|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments).|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|iOS|
|channel|Android|
|channel|Web|
|mode|embedded|
|mode|hosted|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|
|storeFiltrationMode|exclusive|
|storeFiltrationMode|inclusive|
|storeFiltrationMode|skipFilter|
|storePaymentMethodMode|askForConsent|
|storePaymentMethodMode|disabled|
|storePaymentMethodMode|enabled|

<h2 id="tocS_CreateCheckoutSessionResponse">CreateCheckoutSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecheckoutsessionresponse"></a>
<a id="schema_CreateCheckoutSessionResponse"></a>
<a id="tocScreatecheckoutsessionresponse"></a>
<a id="tocscreatecheckoutsessionresponse"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "allowedPaymentMethods": [
    "string"
  ],
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "authenticationData": {
    "attemptAuthentication": "always",
    "authenticationOnly": false,
    "threeDSRequestData": {
      "challengeWindowSize": "01",
      "dataOnly": "false",
      "nativeThreeDS": "preferred",
      "threeDSVersion": "2.1.0"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "blockedPaymentMethods": [
    "string"
  ],
  "captureDelayHours": 0,
  "channel": "iOS",
  "company": {
    "homepage": "string",
    "name": "string",
    "registrationNumber": "string",
    "registryLocation": "string",
    "taxId": "string",
    "type": "string"
  },
  "countryCode": "string",
  "dateOfBirth": "1970-01-01T00:00:00Z",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "firstName": "string",
    "houseNumberOrName": "string",
    "lastName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "enableOneClick": true,
  "enablePayOut": true,
  "enableRecurring": true,
  "expiresAt": "1970-01-01T00:00:00Z",
  "fundOrigin": {
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string"
  },
  "fundRecipient": {
    "IBAN": "string",
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "paymentMethod": {
      "billingSequenceNumber": "string",
      "brand": "string",
      "checkoutAttemptId": "string",
      "cupsecureplus.smscode": "string",
      "cvc": "string",
      "encryptedCard": "string",
      "encryptedCardNumber": "string",
      "encryptedExpiryMonth": "string",
      "encryptedExpiryYear": "string",
      "encryptedPassword": "string",
      "encryptedSecurityCode": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "fastlaneData": "string",
      "fundingSource": "credit",
      "holderName": "string",
      "networkPaymentReference": "string",
      "number": "string",
      "recurringDetailReference": "string",
      "sdkData": "string",
      "shopperNotificationReference": "string",
      "srcCorrelationId": "string",
      "srcDigitalCardId": "string",
      "srcScheme": "string",
      "srcTokenReference": "string",
      "storedPaymentMethodId": "string",
      "threeDS2SdkVersion": "string",
      "type": "scheme"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string",
    "walletOwnerTaxId": "string",
    "walletPurpose": "identifiedBoleto"
  },
  "id": "string",
  "installmentOptions": {
    "property1": {
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    },
    "property2": {
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "mandate": {
    "amount": "string",
    "amountRule": "max",
    "billingAttemptsRule": "on",
    "billingDay": "string",
    "count": "string",
    "endsAt": "string",
    "frequency": "adhoc",
    "remarks": "string",
    "startsAt": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "mode": "embedded",
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurringExpiry": "string",
  "recurringFrequency": "string",
  "recurringProcessingModel": "CardOnFile",
  "redirectFromIssuerMethod": "string",
  "redirectToIssuerMethod": "string",
  "reference": "string",
  "returnUrl": "string",
  "riskData": {
    "clientData": "string",
    "customFields": {
      "property1": "string",
      "property2": "string"
    },
    "fraudOffset": 0,
    "profileReference": "string"
  },
  "sessionData": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "showInstallmentAmount": true,
  "showRemovePaymentMethodButton": true,
  "socialSecurityNumber": "string",
  "splitCardFundingSources": false,
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "storeFiltrationMode": "exclusive",
  "storePaymentMethod": true,
  "storePaymentMethodMode": "askForConsent",
  "telephoneNumber": "string",
  "themeId": "string",
  "thirdPartyTokenRedundancyInfo": {
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplateCode": "string"
  },
  "threeDS2RequestData": {
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "threeDSRequestorChallengeInd": "01",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "trustedShopper": true,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|allowedPaymentMethods|[string]|false|none|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|amount|[Amount](#schemaamount)|true|none|The amount of the payment.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|authenticationData|[AuthenticationData](#schemaauthenticationdata)|false|none|Configuration data for 3DS payments.|
|billingAddress|[BillingAddress](#schemabillingaddress)|false|none|The address where to send the invoice.|
|blockedPaymentMethods|[string]|false|none|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|channel|string|false|none|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* **iOS**<br>* **Android**<br>* **Web**|
|company|[Company](#schemacompany)|false|none|Information regarding the company.|
|countryCode|string|false|none|The shopper's two-letter country code.|
|dateOfBirth|string(date-time)|false|none|The shopper's date of birth in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.|
|deliverAt|string(date-time)|false|none|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|deliveryAddress|[DeliveryAddress](#schemadeliveryaddress)|false|none|The address where the purchased goods should be delivered.|
|enableOneClick|boolean|false|none|When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).|
|enablePayOut|boolean|false|none|When true and `shopperReference` is provided, the payment details will be tokenized for payouts.|
|enableRecurring|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.|
|expiresAt|string(date-time)|true|none|The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.|
|fundOrigin|[FundOrigin](#schemafundorigin)|false|none|The person or entity funding the money.|
|fundRecipient|[FundRecipient](#schemafundrecipient)|false|none|the person or entity receiving the money|
|id|string|true|read-only|A unique identifier of the session.|
|installmentOptions|object|false|none|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|mandate|[Mandate](#schemamandate)|false|none|The mandate details to initiate recurring transaction.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request.<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|mode|string|false|none|Indicates the type of front end integration. Possible values:<br>* **embedded** (default): Drop-in or Components integration<br>* **hosted**: Hosted Checkout integration|
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|recurringFrequency|string|false|none|Minimum number of days between authorisations. Only for 3D Secure 2.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|redirectFromIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|redirectToIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|reference|string|true|none|The reference to uniquely identify a payment.|
|returnUrl|string|true|none|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|riskData|[RiskData](#schemariskdata)|false|none|Any risk-related settings to apply to the payment.|
|sessionData|string|false|none|The payment session data you need to pass to your front end.|
|shopperEmail|string|false|none|The shopper's email address.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[ShopperName](#schemashoppername)|false|none|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|showInstallmentAmount|boolean|false|none|Set to true to show the payment amount per installment.|
|showRemovePaymentMethodButton|boolean|false|none|Set to **true** to show a button that lets the shopper remove a stored payment method.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splitCardFundingSources|boolean|false|none|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|storeFiltrationMode|string|false|none|Specifies how payment methods should be filtered based on the 'store' parameter:<br>  - 'exclusive': Only payment methods belonging to the specified 'store' are returned.<br>  - 'inclusive': Payment methods from the 'store' and those not associated with any other store are returned.|
|storePaymentMethod|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).|
|storePaymentMethodMode|string|false|none|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|themeId|string|false|none|Sets a custom theme for [Hosted Checkout](https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Hosted+Checkout). The value can be any of the **Theme ID** values from your Customer Area.|
|thirdPartyTokenRedundancyInfo|[ThirdPartyTokenRedundancyInfo](#schemathirdpartytokenredundancyinfo)|false|none|Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.|
|threeDS2RequestData|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments).|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|
|url|string|false|none|The URL for the Hosted Checkout page. Redirect the shopper to this URL so they can make the payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|iOS|
|channel|Android|
|channel|Web|
|mode|embedded|
|mode|hosted|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|
|storeFiltrationMode|exclusive|
|storeFiltrationMode|inclusive|
|storeFiltrationMode|skipFilter|
|storePaymentMethodMode|askForConsent|
|storePaymentMethodMode|disabled|
|storePaymentMethodMode|enabled|

<h2 id="tocS_CreateOrderRequest">CreateOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderrequest"></a>
<a id="schema_CreateOrderRequest"></a>
<a id="tocScreateorderrequest"></a>
<a id="tocscreateorderrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "expiresAt": "string",
  "merchantAccount": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The total amount of the order.|
|expiresAt|string|false|none|The date when the order should expire. If not provided, the default expiry duration is 1 day.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the order.|
|reference|string|true|none|A custom reference identifying the order.|

<h2 id="tocS_CreateOrderResponse">CreateOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderresponse"></a>
<a id="schema_CreateOrderResponse"></a>
<a id="tocScreateorderresponse"></a>
<a id="tocscreateorderresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "expiresAt": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "accountScore": 0,
        "checkId": 0,
        "name": "string"
      }
    ]
  },
  "orderData": "string",
  "pspReference": "string",
  "reference": "string",
  "refusalReason": "string",
  "remainingAmount": {
    "currency": "str",
    "value": 0
  },
  "resultCode": "Success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.|
|amount|[Amount](#schemaamount)|true|none|The initial amount of the order.|
|expiresAt|string|true|none|The date that the order will expire.|
|fraudResult|[FraudResult](#schemafraudresult)|false|none|The fraud result properties of the payment.|
|orderData|string|true|none|The encrypted data that will be used by merchant for adding payments to the order.|
|pspReference|string|false|none|Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|reference|string|false|none|The reference provided by merchant for creating the order.|
|refusalReason|string|false|none|If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|remainingAmount|[Amount](#schemaamount)|true|none|The remaining amount in the order.|
|resultCode|string|true|none|The result of the order creation request.<br> The value is always **Success**.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Success|

<h2 id="tocS_DBaraiDetails">DBaraiDetails</h2>
<!-- backwards compatibility -->
<a id="schemadbaraidetails"></a>
<a id="schema_DBaraiDetails"></a>
<a id="tocSdbaraidetails"></a>
<a id="tocsdbaraidetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "dbarai"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**dbarai**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dbarai|

<h2 id="tocS_DeliveryAddress">DeliveryAddress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryaddress"></a>
<a id="schema_DeliveryAddress"></a>
<a id="tocSdeliveryaddress"></a>
<a id="tocsdeliveryaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "firstName": "string",
  "houseNumberOrName": "string",
  "lastName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|The name of the city. Maximum length: 3000 characters.|
|country|string|true|none|The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.|
|firstName|string|false|none|none|
|houseNumberOrName|string|true|none|The number or name of the house. Maximum length: 3000 characters.|
|lastName|string|false|none|none|
|postalCode|string|true|none|A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.|
|stateOrProvince|string|false|none|The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br>> Required for the US and Canada.|
|street|string|true|none|The name of the street. Maximum length: 3000 characters.<br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.|

<h2 id="tocS_DeliveryMethod">DeliveryMethod</h2>
<!-- backwards compatibility -->
<a id="schemadeliverymethod"></a>
<a id="schema_DeliveryMethod"></a>
<a id="tocSdeliverymethod"></a>
<a id="tocsdeliverymethod"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "description": "string",
  "reference": "string",
  "selected": true,
  "type": "Shipping"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The cost of this delivery method.|
|description|string|false|none|The name of the delivery method as shown to the shopper.|
|reference|string|false|none|The reference of the delivery method.|
|selected|boolean|false|none|If you display the PayPal lightbox with delivery methods, set to **true** for the delivery method that is selected. Only one delivery method can be selected at a time.|
|type|string|false|none|The type of the delivery method.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Shipping|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "countryCode": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) or three-letter [ISO 3166-1 alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.<br>* Encoding: ASCII<br>* Min length: 2 characters<br>* Max length: 3 characters<br>* **additionalData key:** `enhancedSchemeData.destinationCountryCode`|
|postalCode|string|false|none|The postal code of the destination address.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* Must not start with a space.<br>* For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.<br>* **additionalData key:** `enhancedSchemeData.destinationPostalCode`|
|stateOrProvince|string|false|none|The state or province code of the destination address.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* Must not start with a space.<br>* **additionalData key:** `enhancedSchemeData.destinationStateProvinceCode`|

<h2 id="tocS_DetailsRequestAuthenticationData">DetailsRequestAuthenticationData</h2>
<!-- backwards compatibility -->
<a id="schemadetailsrequestauthenticationdata"></a>
<a id="schema_DetailsRequestAuthenticationData"></a>
<a id="tocSdetailsrequestauthenticationdata"></a>
<a id="tocsdetailsrequestauthenticationdata"></a>

```json
{
  "authenticationOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationOnly|boolean|false|none|Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|

<h2 id="tocS_DeviceRenderOptions">DeviceRenderOptions</h2>
<!-- backwards compatibility -->
<a id="schemadevicerenderoptions"></a>
<a id="schema_DeviceRenderOptions"></a>
<a id="tocSdevicerenderoptions"></a>
<a id="tocsdevicerenderoptions"></a>

```json
{
  "sdkInterface": "both",
  "sdkUiType": [
    "multiSelect"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkInterface|string|false|none|Supported SDK interface types.<br>Allowed values:<br>* native<br>* html<br>* both|
|sdkUiType|[string]|false|none|UI types supported for displaying specific challenges.<br>Allowed values:<br>* text<br>* singleSelect<br>* outOfBand<br>* otherHtml<br>* multiSelect|

#### Enumerated Values

|Property|Value|
|---|---|
|sdkInterface|native|
|sdkInterface|html|
|sdkInterface|both|
|sdkUiType|multiSelect|
|sdkUiType|otherHtml|
|sdkUiType|outOfBand|
|sdkUiType|singleSelect|
|sdkUiType|text|

<h2 id="tocS_DirectDebitAuDetails">DirectDebitAuDetails</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitaudetails"></a>
<a id="schema_DirectDebitAuDetails"></a>
<a id="tocSdirectdebitaudetails"></a>
<a id="tocsdirectdebitaudetails"></a>

```json
{
  "bankAccountNumber": "string",
  "bankBranchCode": "string",
  "checkoutAttemptId": "string",
  "holderName": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "directdebit_AU"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountNumber|string|false|none|The shopper's banking account number used to complete payment.|
|bankBranchCode|string|false|none|The shopper's BSB (their bank's branch code) number used to complete payment.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|holderName|string|false|none|The name of the bank account holder.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**directdebit_AU**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|directdebit_AU|

<h2 id="tocS_DokuDetails">DokuDetails</h2>
<!-- backwards compatibility -->
<a id="schemadokudetails"></a>
<a id="schema_DokuDetails"></a>
<a id="tocSdokudetails"></a>
<a id="tocsdokudetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "firstName": "string",
  "lastName": "string",
  "sdkData": "string",
  "shopperEmail": "string",
  "type": "doku_mandiri_va"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|firstName|string|true|none|The shopper's first name.|
|lastName|string|true|none|The shopper's last name.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperEmail|string|true|none|The shopper's email.|
|type|string|true|none|**doku**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|doku_mandiri_va|
|type|doku_cimb_va|
|type|doku_danamon_va|
|type|doku_bni_va|
|type|doku_permata_lite_atm|
|type|doku_bri_va|
|type|doku_bca_va|
|type|doku_alfamart|
|type|doku_indomaret|
|type|doku_wallet|
|type|doku_ovo|

<h2 id="tocS_Donation">Donation</h2>
<!-- backwards compatibility -->
<a id="schemadonation"></a>
<a id="schema_Donation"></a>
<a id="tocSdonation"></a>
<a id="tocsdonation"></a>

```json
{
  "currency": "string",
  "donationType": "string",
  "maxRoundupAmount": 0,
  "type": "string",
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).|
|donationType|string|true|none|The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).<br><br>Possible values:<br>* **roundup**: a donation where the original transaction amount is rounded up as a donation.<br>* **fixedAmounts**: a donation where you show fixed donations amounts that the shopper can select from.|
|maxRoundupAmount|integer(int64)|false|none|The maximum amount a transaction can be rounded up to make a donation. This field is only present when `donationType` is **roundup**.|
|type|string|true|none|The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).<br><br>Possible values:<br>* **roundup**: a donation where the original transaction amount is rounded up as a donation.<br>* **fixedAmounts**: a donation where you show fixed donation amounts that the shopper can select from.|
|values|[integer(int64)]|false|none|The fixed donation amounts in [minor units](https://docs.adyen.com/development-resources/currency-codes//#minor-units). This field is only present when `donationType` is **fixedAmounts**.|

<h2 id="tocS_DonationCampaign">DonationCampaign</h2>
<!-- backwards compatibility -->
<a id="schemadonationcampaign"></a>
<a id="schema_DonationCampaign"></a>
<a id="tocSdonationcampaign"></a>
<a id="tocsdonationcampaign"></a>

```json
{
  "amounts": {
    "currency": "string",
    "values": [
      0
    ]
  },
  "bannerUrl": "string",
  "campaignName": "string",
  "causeName": "string",
  "donation": {
    "currency": "string",
    "donationType": "string",
    "maxRoundupAmount": 0,
    "type": "string",
    "values": [
      0
    ]
  },
  "id": "string",
  "logoUrl": "string",
  "nonprofitDescription": "string",
  "nonprofitName": "string",
  "nonprofitUrl": "string",
  "termsAndConditionsUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amounts|[Amounts](#schemaamounts)|false|none|The object that contains the fixed donation amounts that the shopper can select from.|
|bannerUrl|string|false|none|The URL for the banner of the nonprofit or campaign.|
|campaignName|string|false|none|The name of the donation campaign..|
|causeName|string|false|none|The cause of the nonprofit.|
|donation|[Donation](#schemadonation)|false|none|The object that contains the details of the donation.|
|id|string|false|none|The unique campaign ID of the donation campaign.|
|logoUrl|string|false|none|The URL for the logo of the nonprofit.|
|nonprofitDescription|string|false|none|The description of the nonprofit.|
|nonprofitName|string|false|none|The name of the nonprofit organization that receives the donation.|
|nonprofitUrl|string|false|none|The website URL of the nonprofit.|
|termsAndConditionsUrl|string|false|none|The URL of the terms and conditions page of the nonprofit and the campaign.|

<h2 id="tocS_DonationCampaignsRequest">DonationCampaignsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadonationcampaignsrequest"></a>
<a id="schema_DonationCampaignsRequest"></a>
<a id="tocSdonationcampaignsrequest"></a>
<a id="tocsdonationcampaignsrequest"></a>

```json
{
  "currency": "string",
  "label": "string",
  "locale": "string",
  "merchantAccount": "string",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).|
|label|string|false|none|The label that is assigned to the donation campaign.|
|locale|string|false|none|Locale on the shopper interaction device.|
|merchantAccount|string|true|none|Your merchant account identifier.|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|

<h2 id="tocS_DonationCampaignsResponse">DonationCampaignsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadonationcampaignsresponse"></a>
<a id="schema_DonationCampaignsResponse"></a>
<a id="tocSdonationcampaignsresponse"></a>
<a id="tocsdonationcampaignsresponse"></a>

```json
{
  "donationCampaigns": [
    {
      "amounts": {
        "currency": "string",
        "values": [
          0
        ]
      },
      "bannerUrl": "string",
      "campaignName": "string",
      "causeName": "string",
      "donation": {
        "currency": "string",
        "donationType": "string",
        "maxRoundupAmount": 0,
        "type": "string",
        "values": [
          0
        ]
      },
      "id": "string",
      "logoUrl": "string",
      "nonprofitDescription": "string",
      "nonprofitName": "string",
      "nonprofitUrl": "string",
      "termsAndConditionsUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|donationCampaigns|[[DonationCampaign](#schemadonationcampaign)]|false|none|List of active donation campaigns for your merchant account.|

<h2 id="tocS_DonationPaymentRequest">DonationPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadonationpaymentrequest"></a>
<a id="schema_DonationPaymentRequest"></a>
<a id="tocSdonationpaymentrequest"></a>
<a id="tocsdonationpaymentrequest"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "authenticationData": {
    "attemptAuthentication": "always",
    "authenticationOnly": false,
    "threeDSRequestData": {
      "challengeWindowSize": "01",
      "dataOnly": "false",
      "nativeThreeDS": "preferred",
      "threeDSVersion": "2.1.0"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "channel": "iOS",
  "checkoutAttemptId": "string",
  "conversionId": "string",
  "countryCode": "string",
  "dateOfBirth": "1970-01-01T00:00:00Z",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "firstName": "string",
    "houseNumberOrName": "string",
    "lastName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deviceFingerprint": "string",
  "donationAccount": "string",
  "donationCampaignId": "string",
  "donationOriginalPspReference": "string",
  "donationToken": "string",
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "origin": "string",
  "paymentMethod": {
    "applePayToken": "string",
    "checkoutAttemptId": "string",
    "fundingSource": "credit",
    "recurringDetailReference": "string",
    "sdkData": "string",
    "storedPaymentMethodId": "string",
    "type": "applepay"
  },
  "recurringProcessingModel": "CardOnFile",
  "redirectFromIssuerMethod": "string",
  "redirectToIssuerMethod": "string",
  "reference": "string",
  "returnUrl": "string",
  "sessionValidity": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "socialSecurityNumber": "string",
  "store": "string",
  "telephoneNumber": "string",
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|authenticationData|[AuthenticationData](#schemaauthenticationdata)|false|none|Data for 3DS authentication.|
|billingAddress|[BillingAddress](#schemabillingaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|channel|string|false|none|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* iOS<br>* Android<br>* Web|
|checkoutAttemptId|string|false|none|Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|conversionId|string|false|none|**Deprecated.** Conversion ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|countryCode|string|false|none|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|dateOfBirth|string(date-time)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|deliverAt|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deliveryAddress|[DeliveryAddress](#schemadeliveryaddress)|false|none|The address where the purchased goods should be delivered.|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|donationAccount|string|false|none|Donation account to which the transaction is credited.|
|donationCampaignId|string|false|none|The donation campaign ID received in the `/donationCampaigns` call.|
|donationOriginalPspReference|string|false|none|PSP reference of the transaction from which the donation token is generated. Required when `donationToken` is provided.|
|donationToken|string|false|none|Donation token received in the `/payments` call.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|origin|string|false|none|> Required for browser-based (`channel` **Web**) 3D Secure 2 transactions.Set this to the origin URL of the page where you are rendering the Drop-in/Component. Do not include subdirectories and a trailing slash.|
|paymentMethod|[ApplePayDonations](#schemaapplepaydonations) \| [CardDonations](#schemacarddonations) \| [GooglePayDonations](#schemagooglepaydonations) \| [IdealDonations](#schemaidealdonations) \| [PayWithGoogleDonations](#schemapaywithgoogledonations) \| [SepaDirectDebitDonations](#schemasepadirectdebitdonations)|false|none|The type and required details of a payment method to use.<br><br>When `donationToken` is provided, the payment method is derived from the token and this field becomes optional.<br><br>If you are [PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide), and make donations using raw card details, you must explicitly provide the payment method details.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|redirectFromIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|redirectToIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|returnUrl|string|true|none|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|sessionValidity|string|false|none|The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.<br><br>For example: 2020-07-18T15:42:40.428+01:00|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorization rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorization (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[ShopperName](#schemashoppername)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|threeDS2RequestData|[ThreeDS2RequestFields](#schemathreeds2requestfields)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|iOS|
|channel|Android|
|channel|Web|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_DonationPaymentResponse">DonationPaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadonationpaymentresponse"></a>
<a id="schema_DonationPaymentResponse"></a>
<a id="tocSdonationpaymentresponse"></a>
<a id="tocsdonationpaymentresponse"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "donationAccount": "string",
  "id": "string",
  "merchantAccount": "string",
  "payment": {
    "action": {
      "paymentData": "string",
      "paymentMethodType": "string",
      "type": "await",
      "url": "string"
    },
    "additionalData": {
      "property1": "string",
      "property2": "string"
    },
    "amount": {
      "currency": "str",
      "value": 0
    },
    "donationToken": "string",
    "fraudResult": {
      "accountScore": 0,
      "results": [
        {
          "accountScore": 0,
          "checkId": 0,
          "name": "string"
        }
      ]
    },
    "merchantReference": "string",
    "opi": {
      "issuerId": "string",
      "transToken": "string"
    },
    "order": {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "expiresAt": "string",
      "orderData": "string",
      "pspReference": "string",
      "reference": "string",
      "remainingAmount": {
        "currency": "str",
        "value": 0
      }
    },
    "paymentMethod": {
      "brand": "string",
      "type": "string"
    },
    "paymentValidations": {
      "name": {
        "rawResponse": {
          "firstName": "string",
          "fullName": "string",
          "lastName": "string",
          "middleName": "string",
          "status": "string"
        },
        "result": {
          "firstName": "string",
          "fullName": "string",
          "lastName": "string",
          "middleName": "string"
        },
        "status": "notPerformed"
      }
    },
    "pspReference": "string",
    "refusalReason": "string",
    "refusalReasonCode": "string",
    "resultCode": "AuthenticationFinished",
    "threeDS2ResponseData": {
      "acsChallengeMandated": "string",
      "acsOperatorID": "string",
      "acsReferenceNumber": "string",
      "acsSignedContent": "string",
      "acsTransID": "string",
      "acsURL": "string",
      "authenticationType": "string",
      "cardHolderInfo": "string",
      "cavvAlgorithm": "string",
      "challengeIndicator": "string",
      "dsReferenceNumber": "string",
      "dsTransID": "string",
      "exemptionIndicator": "string",
      "messageVersion": "string",
      "riskScore": "string",
      "sdkEphemPubKey": "string",
      "threeDSServerTransID": "string",
      "transStatus": "string",
      "transStatusReason": "string"
    },
    "threeDS2Result": {
      "authenticationValue": "string",
      "cavvAlgorithm": "string",
      "challengeCancel": "01",
      "dsTransID": "string",
      "eci": "string",
      "exemptionIndicator": "lowValue",
      "messageVersion": "string",
      "riskScore": "string",
      "threeDSRequestorChallengeInd": "01",
      "threeDSServerTransID": "string",
      "timestamp": "string",
      "transStatus": "string",
      "transStatusReason": "string",
      "whiteListStatus": "string"
    },
    "threeDSPaymentData": "string"
  },
  "reference": "string",
  "status": "completed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|Authorised amount in the transaction.|
|donationAccount|string|false|none|The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding).|
|id|string|false|none|Your unique resource identifier.|
|merchantAccount|string|false|none|The merchant account identifier, with which you want to process the transaction.|
|payment|[PaymentResponse](#schemapaymentresponse)|false|none|Action to be taken for completing the payment.|
|reference|string|false|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters.|
|status|string|false|none|The status of the donation transaction.<br><br>Possible values:<br>* **completed**<br>* **pending**<br>* **refused**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|completed|
|status|pending|
|status|refused|

<h2 id="tocS_DragonpayDetails">DragonpayDetails</h2>
<!-- backwards compatibility -->
<a id="schemadragonpaydetails"></a>
<a id="schema_DragonpayDetails"></a>
<a id="tocSdragonpaydetails"></a>
<a id="tocsdragonpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "shopperEmail": "string",
  "type": "dragonpay_ebanking"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|true|none|The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperEmail|string|false|none|The shopper’s email address.|
|type|string|true|none|**dragonpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dragonpay_ebanking|
|type|dragonpay_otc_banking|
|type|dragonpay_otc_non_banking|
|type|dragonpay_otc_philippines|

<h2 id="tocS_EBankingFinlandDetails">EBankingFinlandDetails</h2>
<!-- backwards compatibility -->
<a id="schemaebankingfinlanddetails"></a>
<a id="schema_EBankingFinlandDetails"></a>
<a id="tocSebankingfinlanddetails"></a>
<a id="tocsebankingfinlanddetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "type": "ebanking_FI"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|false|none|The Ebanking Finland issuer value of the shopper's selected bank.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|true|none|**ebanking_FI**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ebanking_FI|

<h2 id="tocS_EcontextVoucherDetails">EcontextVoucherDetails</h2>
<!-- backwards compatibility -->
<a id="schemaecontextvoucherdetails"></a>
<a id="schema_EcontextVoucherDetails"></a>
<a id="tocSecontextvoucherdetails"></a>
<a id="tocsecontextvoucherdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "firstName": "string",
  "lastName": "string",
  "sdkData": "string",
  "shopperEmail": "string",
  "telephoneNumber": "string",
  "type": "econtext_seven_eleven"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|firstName|string|true|none|The shopper's first name.|
|lastName|string|true|none|The shopper's last name.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperEmail|string|true|none|The shopper's email.|
|telephoneNumber|string|true|none|The shopper's contact number. It must have an international number format, for example **+31 20 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted.|
|type|string|true|none|**econtextvoucher**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|econtext_seven_eleven|
|type|econtext_online|
|type|econtext|
|type|econtext_stores|
|type|econtext_atm|

<h2 id="tocS_EftDetails">EftDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeftdetails"></a>
<a id="schema_EftDetails"></a>
<a id="tocSeftdetails"></a>
<a id="tocseftdetails"></a>

```json
{
  "bankAccountNumber": "string",
  "bankCode": "string",
  "bankLocationId": "string",
  "checkoutAttemptId": "string",
  "ownerName": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "eft_directdebit_CA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankCode|string|false|none|The financial institution code.|
|bankLocationId|string|false|none|The bank routing number of the account.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|ownerName|string|false|none|The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**eft**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|eft_directdebit_CA|

<h2 id="tocS_EncryptedOrderData">EncryptedOrderData</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedorderdata"></a>
<a id="schema_EncryptedOrderData"></a>
<a id="tocSencryptedorderdata"></a>
<a id="tocsencryptedorderdata"></a>

```json
{
  "orderData": "string",
  "pspReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderData|string|true|none|The encrypted order data.|
|pspReference|string|true|none|The `pspReference` that belongs to the order.|

<h2 id="tocS_EnhancedSchemeData">EnhancedSchemeData</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedschemedata"></a>
<a id="schema_EnhancedSchemeData"></a>
<a id="tocSenhancedschemedata"></a>
<a id="tocsenhancedschemedata"></a>

```json
{
  "airline": {
    "agency": {
      "invoiceNumber": "string",
      "planName": "string"
    },
    "boardingFee": 0,
    "code": "string",
    "computerizedReservationSystem": "string",
    "customerReferenceNumber": "string",
    "designatorCode": "string",
    "documentType": "string",
    "flightDate": "1970-01-01T00:00:00Z",
    "legs": [
      {
        "carrierCode": "string",
        "classOfTravel": "string",
        "dateOfTravel": "1970-01-01T00:00:00Z",
        "departureAirportCode": "string",
        "departureTax": 0,
        "destinationAirportCode": "string",
        "fareBasisCode": "string",
        "flightNumber": "string",
        "stopOverCode": "string"
      }
    ],
    "passengerName": "string",
    "passengers": [
      {
        "dateOfBirth": "1970-01-01",
        "firstName": "string",
        "lastName": "string",
        "phoneNumber": "string",
        "travellerType": "string"
      }
    ],
    "ticket": {
      "issueAddress": "string",
      "issueDate": "1970-01-01",
      "number": "string"
    },
    "travelAgency": {
      "code": "string",
      "name": "string"
    }
  },
  "carRental": {
    "customerServicePhoneNumber": "string",
    "noShow": true,
    "pickupInfo": {
      "city": "string",
      "countryCode": "string",
      "date": "1970-01-01",
      "stateOrProvince": "string"
    },
    "rateType": "daily",
    "rentalAgreementNumber": "string",
    "rentalClassId": "string",
    "rentalDays": 0,
    "rentalRate": 0,
    "rentalSurcharges": {
      "fuel": 0,
      "insurance": 0,
      "oneWayDropOff": 0
    },
    "renterName": "string",
    "returnInfo": {
      "city": "string",
      "countryCode": "string",
      "date": "1970-01-01",
      "locationId": "string",
      "stateOrProvince": "string"
    },
    "taxExempt": true
  },
  "levelTwoThree": {
    "customerReferenceNumber": "string",
    "destination": {
      "countryCode": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dutyAmount": 0,
    "freightAmount": 0,
    "itemDetailLines": [
      {
        "commodityCode": "string",
        "description": "string",
        "discountAmount": 0,
        "productCode": "string",
        "quantity": 0,
        "totalAmount": 0,
        "unitOfMeasure": "string",
        "unitPrice": 0
      }
    ],
    "orderDate": "1970-01-01",
    "shipFromPostalCode": "string",
    "totalTaxAmount": 0
  },
  "lodging": {
    "checkInDate": "1970-01-01",
    "checkOutDate": "1970-01-01",
    "customerServicePhoneNumber": "string",
    "fireSafetyCompliance": true,
    "folio": {
      "cashAdvances": 0,
      "number": "string"
    },
    "foodBeverageCharges": 0,
    "lodgingChargeType": "advanceDeposit",
    "noShow": true,
    "prepaidExpenses": 0,
    "propertyPhoneNumber": "string",
    "renterName": "string",
    "rooms": [
      {
        "numberOfNights": 0,
        "rate": 0
      }
    ],
    "totalRoomTax": 0,
    "totalTax": 0
  },
  "temporaryServices": {
    "employeeName": "string",
    "endDate": "1970-01-01",
    "hourRate": 0,
    "hoursWorked": 0,
    "jobDescription": "string",
    "serviceRequestor": "string",
    "startDate": "1970-01-01"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airline|[Airline](#schemaairline)|false|none|[Airline enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/airline/) that may be required for processing the transaction and/or for interchange savings.|
|carRental|[CarRental](#schemacarrental)|false|none|[Car rental enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/car-rental/) that may be required for processing the transaction and/or for interchange savings.|
|levelTwoThree|[LevelTwoThree](#schemaleveltwothree)|false|none|[Level 2 and Level 3 enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3/) that may be required for processing the transaction and/or for interchange savings.|
|lodging|[Lodging](#schemalodging)|false|none|[Lodging enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/lodging/) that may be required for processing the transaction and/or for interchange savings.|
|temporaryServices|[TemporaryServices](#schematemporaryservices)|false|none|[Temporary services enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/temporary-services/) that may be required for processing the transaction and/or for interchange savings.|

<h2 id="tocS_ExternalPlatform">ExternalPlatform</h2>
<!-- backwards compatibility -->
<a id="schemaexternalplatform"></a>
<a id="schema_ExternalPlatform"></a>
<a id="tocSexternalplatform"></a>
<a id="tocsexternalplatform"></a>

```json
{
  "integrator": "string",
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrator|string|false|none|External platform integrator.|
|name|string|false|none|Name of the field. For example, Name of External Platform.|
|version|string|false|none|Version of the field. For example, Version of External Platform.|

<h2 id="tocS_ExternalTokenDetails">ExternalTokenDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexternaltokendetails"></a>
<a id="schema_ExternalTokenDetails"></a>
<a id="tocSexternaltokendetails"></a>
<a id="tocsexternaltokendetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "holderName": "string",
  "number": "string",
  "storedPaymentMethodId": "string",
  "subtype": "hilton",
  "type": "externalToken"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|expiryMonth|string|false|none|The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|expiryYear|string|false|none|The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|holderName|string|false|none|The name of the card holder.|
|number|string|false|none|The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|storedPaymentMethodId|string|true|none|Identifier used to fetch the token from the external service|
|subtype|string|true|none|The external service from which to fetch the token. Supported only for specific companies. Contact Adyen if you want to use this feature.|
|type|string|true|none|The type of token. Allowed value: **externalToken**.|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|hilton|
|type|externalToken|

<h2 id="tocS_FastlaneDetails">FastlaneDetails</h2>
<!-- backwards compatibility -->
<a id="schemafastlanedetails"></a>
<a id="schema_FastlaneDetails"></a>
<a id="tocSfastlanedetails"></a>
<a id="tocsfastlanedetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fastlaneData": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "fastlane"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fastlaneData|string|true|none|The encoded fastlane data blob|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**fastlane**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|fastlane|

<h2 id="tocS_Folio">Folio</h2>
<!-- backwards compatibility -->
<a id="schemafolio"></a>
<a id="schema_Folio"></a>
<a id="tocSfolio"></a>
<a id="tocsfolio"></a>

```json
{
  "cashAdvances": 0,
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cashAdvances|integer(int64)|false|none|The folio cash advances, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.folioCashAdvances`|
|number|string|false|none|The card acceptor's internal invoice or billing ID reference number.<br>* Format: Alphanumeric<br>* Must not start with a space<br>* Must not contain any special characters<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.folioNumber`|

<h2 id="tocS_ForexQuote">ForexQuote</h2>
<!-- backwards compatibility -->
<a id="schemaforexquote"></a>
<a id="schema_ForexQuote"></a>
<a id="tocSforexquote"></a>
<a id="tocsforexquote"></a>

```json
{
  "account": "string",
  "accountType": "string",
  "baseAmount": {
    "currency": "str",
    "value": 0
  },
  "basePoints": 0,
  "buy": {
    "currency": "str",
    "value": 0
  },
  "interbank": {
    "currency": "str",
    "value": 0
  },
  "reference": "string",
  "sell": {
    "currency": "str",
    "value": 0
  },
  "signature": "string",
  "source": "string",
  "type": "string",
  "validTill": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account name.|
|accountType|string|false|none|The account type.|
|baseAmount|[Amount](#schemaamount)|false|none|The base amount.|
|basePoints|integer(int32)|true|none|The base points.|
|buy|[Amount](#schemaamount)|false|none|The buy rate.|
|interbank|[Amount](#schemaamount)|false|none|The interbank amount.|
|reference|string|false|none|The reference assigned to the forex quote request.|
|sell|[Amount](#schemaamount)|false|none|The sell rate.|
|signature|string|false|none|The signature to validate the integrity.|
|source|string|false|none|The source of the forex quote.|
|type|string|false|none|The type of forex.|
|validTill|string(date-time)|true|none|The date until which the forex quote is valid.|

<h2 id="tocS_FraudCheckResult">FraudCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemafraudcheckresult"></a>
<a id="schema_FraudCheckResult"></a>
<a id="tocSfraudcheckresult"></a>
<a id="tocsfraudcheckresult"></a>

```json
{
  "accountScore": 0,
  "checkId": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountScore|integer(int32)|true|none|The fraud score generated by the risk check.|
|checkId|integer(int32)|true|none|The ID of the risk check.|
|name|string|true|none|The name of the risk check.|

<h2 id="tocS_FraudResult">FraudResult</h2>
<!-- backwards compatibility -->
<a id="schemafraudresult"></a>
<a id="schema_FraudResult"></a>
<a id="tocSfraudresult"></a>
<a id="tocsfraudresult"></a>

```json
{
  "accountScore": 0,
  "results": [
    {
      "accountScore": 0,
      "checkId": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountScore|integer(int32)|true|none|The total fraud score generated by the risk checks.|
|results|[[FraudCheckResult](#schemafraudcheckresult)]|false|none|The result of the individual risk checks.|

<h2 id="tocS_FundOrigin">FundOrigin</h2>
<!-- backwards compatibility -->
<a id="schemafundorigin"></a>
<a id="schema_FundOrigin"></a>
<a id="tocSfundorigin"></a>
<a id="tocsfundorigin"></a>

```json
{
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "telephoneNumber": "string",
  "walletIdentifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|shopperEmail|string|false|none|The email address of the person funding the money.|
|shopperName|[Name](#schemaname)|false|none|The name of the person funding the money.|
|telephoneNumber|string|false|none|The phone number of the person funding the money.|
|walletIdentifier|string|false|none|The unique identifier of the wallet where the funds are coming from.|

<h2 id="tocS_FundRecipient">FundRecipient</h2>
<!-- backwards compatibility -->
<a id="schemafundrecipient"></a>
<a id="schema_FundRecipient"></a>
<a id="tocSfundrecipient"></a>
<a id="tocsfundrecipient"></a>

```json
{
  "IBAN": "string",
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "paymentMethod": {
    "billingSequenceNumber": "string",
    "brand": "string",
    "checkoutAttemptId": "string",
    "cupsecureplus.smscode": "string",
    "cvc": "string",
    "encryptedCard": "string",
    "encryptedCardNumber": "string",
    "encryptedExpiryMonth": "string",
    "encryptedExpiryYear": "string",
    "encryptedPassword": "string",
    "encryptedSecurityCode": "string",
    "expiryMonth": "string",
    "expiryYear": "string",
    "fastlaneData": "string",
    "fundingSource": "credit",
    "holderName": "string",
    "networkPaymentReference": "string",
    "number": "string",
    "recurringDetailReference": "string",
    "sdkData": "string",
    "shopperNotificationReference": "string",
    "srcCorrelationId": "string",
    "srcDigitalCardId": "string",
    "srcScheme": "string",
    "srcTokenReference": "string",
    "storedPaymentMethodId": "string",
    "threeDS2SdkVersion": "string",
    "type": "scheme"
  },
  "shopperEmail": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "storedPaymentMethodId": "string",
  "subMerchant": {
    "city": "string",
    "country": "string",
    "mcc": "string",
    "name": "string",
    "taxId": "string"
  },
  "telephoneNumber": "string",
  "walletIdentifier": "string",
  "walletOwnerTaxId": "string",
  "walletPurpose": "identifiedBoleto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IBAN|string|false|none|The IBAN of the bank account where the funds are being transferred to.|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|paymentMethod|[CardDetails](#schemacarddetails)|false|none|The payment method used by the shopper.|
|shopperEmail|string|false|none|The email address of the shopper.|
|shopperName|[Name](#schemaname)|false|none|The name of the shopper.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subMerchant|[SubMerchant](#schemasubmerchant)|false|none|Required for back-to-back/purchase-driven-load transactions, where the funds are taken from the shopper's stored card when the wallet balance is insufficient.<br>The final merchant who will receive the money, also known as a [sub-merchant](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#submerchant).|
|telephoneNumber|string|false|none|The telephone number of the shopper.|
|walletIdentifier|string|false|none|The unique identifier for the wallet the funds are being transferred to. You can use the shopper reference or any other identifier.|
|walletOwnerTaxId|string|false|none|The tax identifier of the person receiving the funds.|
|walletPurpose|string|false|none|The purpose of a digital wallet transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|walletPurpose|identifiedBoleto|
|walletPurpose|transferDifferentWallet|
|walletPurpose|transferOwnWallet|
|walletPurpose|transferSameWallet|
|walletPurpose|unidentifiedBoleto|

<h2 id="tocS_GenericIssuerPaymentMethodDetails">GenericIssuerPaymentMethodDetails</h2>
<!-- backwards compatibility -->
<a id="schemagenericissuerpaymentmethoddetails"></a>
<a id="schema_GenericIssuerPaymentMethodDetails"></a>
<a id="tocSgenericissuerpaymentmethoddetails"></a>
<a id="tocsgenericissuerpaymentmethoddetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "onlineBanking_PL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|true|none|The issuer id of the shopper's selected bank.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**genericissuer**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|onlineBanking_PL|
|type|eps|
|type|onlineBanking_SK|
|type|onlineBanking_CZ|
|type|onlinebanking_IN|

<h2 id="tocS_GooglePayDetails">GooglePayDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglepaydetails"></a>
<a id="schema_GooglePayDetails"></a>
<a id="tocSgooglepaydetails"></a>
<a id="tocsgooglepaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "googlePayCardNetwork": "string",
  "googlePayToken": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "googlepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|googlePayCardNetwork|string|false|none|The selected payment card network. |
|googlePayToken|string|true|none|The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|**googlepay**, **paywithgoogle**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|googlepay|

<h2 id="tocS_GooglePayDonations">GooglePayDonations</h2>
<!-- backwards compatibility -->
<a id="schemagooglepaydonations"></a>
<a id="schema_GooglePayDonations"></a>
<a id="tocSgooglepaydonations"></a>
<a id="tocsgooglepaydonations"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "googlePayCardNetwork": "string",
  "googlePayToken": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "googlepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|googlePayCardNetwork|string|false|none|The selected payment card network. |
|googlePayToken|string|true|none|The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|**googlepay**, **paywithgoogle**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|googlepay|

<h2 id="tocS_IdealDetails">IdealDetails</h2>
<!-- backwards compatibility -->
<a id="schemaidealdetails"></a>
<a id="schema_IdealDetails"></a>
<a id="tocSidealdetails"></a>
<a id="tocsidealdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "ideal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|false|none|The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**ideal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ideal|

<h2 id="tocS_IdealDonations">IdealDonations</h2>
<!-- backwards compatibility -->
<a id="schemaidealdonations"></a>
<a id="schema_IdealDonations"></a>
<a id="tocSidealdonations"></a>
<a id="tocsidealdonations"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "ideal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|false|none|The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**ideal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ideal|

<h2 id="tocS_InputDetail">InputDetail</h2>
<!-- backwards compatibility -->
<a id="schemainputdetail"></a>
<a id="schema_InputDetail"></a>
<a id="tocSinputdetail"></a>
<a id="tocsinputdetail"></a>

```json
{
  "configuration": {
    "property1": "string",
    "property2": "string"
  },
  "details": [
    {
      "configuration": {
        "property1": "string",
        "property2": "string"
      },
      "items": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "key": "string",
      "optional": true,
      "type": "string",
      "value": "string"
    }
  ],
  "inputDetails": [
    {
      "configuration": {
        "property1": "string",
        "property2": "string"
      },
      "items": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "key": "string",
      "optional": true,
      "type": "string",
      "value": "string"
    }
  ],
  "itemSearchUrl": "string",
  "items": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "key": "string",
  "optional": true,
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|Configuration parameters for the required input.|
|details|[[SubInputDetail](#schemasubinputdetail)]|false|none|Input details can also be provided recursively.|
|inputDetails|[[SubInputDetail](#schemasubinputdetail)]|false|none|**Deprecated.** Input details can also be provided recursively (deprecated).|
|itemSearchUrl|string|false|none|In case of a select, the URL from which to query the items.|
|items|[[Item](#schemaitem)]|false|none|In case of a select, the items to choose from.|
|key|string|false|none|The value to provide in the result.|
|optional|boolean|false|none|True if this input value is optional.|
|type|string|false|none|The type of the required input.|
|value|string|false|none|The value can be pre-filled, if available.|

<h2 id="tocS_InstallmentOption">InstallmentOption</h2>
<!-- backwards compatibility -->
<a id="schemainstallmentoption"></a>
<a id="schema_InstallmentOption"></a>
<a id="tocSinstallmentoption"></a>
<a id="tocsinstallmentoption"></a>

```json
{
  "maxValue": 0,
  "plans": [
    "bonus"
  ],
  "preselectedValue": 0,
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|integer(int32)|false|none|The maximum number of installments offered for this payment method.|
|plans|[string]|false|none|Defines the type of installment plan. If not set, defaults to **regular**.<br><br>Possible values:<br>* **regular**<br>* **revolving**|
|preselectedValue|integer(int32)|false|none|Preselected number of installments offered for this payment method.|
|values|[integer(int32)]|false|none|An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.|

#### Enumerated Values

|Property|Value|
|---|---|
|plans|bonus|
|plans|buynow_paylater|
|plans|interes_refund_prctg|
|plans|interest_bonus|
|plans|nointeres_refund_prctg|
|plans|nointerest_bonus|
|plans|refund_prctg|
|plans|regular|
|plans|revolving|
|plans|with_interest|

<h2 id="tocS_Installments">Installments</h2>
<!-- backwards compatibility -->
<a id="schemainstallments"></a>
<a id="schema_Installments"></a>
<a id="tocSinstallments"></a>
<a id="tocsinstallments"></a>

```json
{
  "extra": 0,
  "plan": "bonus",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra|integer(int32)|false|none|Defines the bonus percentage, refund percentage or if the transaction is Buy now Pay later.<br>Used for [card installments in Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico)<br>|
|plan|string|false|none|The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan).<br>and [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico).<br>By default, this is set to **regular**.<br>|
|value|integer(int32)|true|none|Defines the number of installments.<br>Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.<br>This value can be zero for Installments processed in Mexico.|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|bonus|
|plan|buynow_paylater|
|plan|interes_refund_prctg|
|plan|interest_bonus|
|plan|nointeres_refund_prctg|
|plan|nointerest_bonus|
|plan|refund_prctg|
|plan|regular|
|plan|revolving|
|plan|with_interest|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The value to provide in the result.|
|name|string|false|none|The display name.|

<h2 id="tocS_ItemDetailLine">ItemDetailLine</h2>
<!-- backwards compatibility -->
<a id="schemaitemdetailline"></a>
<a id="schema_ItemDetailLine"></a>
<a id="tocSitemdetailline"></a>
<a id="tocsitemdetailline"></a>

```json
{
  "commodityCode": "string",
  "description": "string",
  "discountAmount": 0,
  "productCode": "string",
  "quantity": 0,
  "totalAmount": 0,
  "unitOfMeasure": "string",
  "unitPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commodityCode|string|false|none|The code that identifies the item in a standardized commodity coding scheme. There are different commodity coding schemes:<br>* [UNSPSC commodity codes](https://www.ungm.org/public/unspsc)<br>* [HS commodity codes](https://www.wcoomd.org/en/topics/nomenclature/overview.aspx)<br>* [NAICS commodity codes](https://www.census.gov/naics/)<br>* [NAPCS commodity codes](https://www.census.gov/naics/napcs/)<br><br><br>* Encoding: ASCII<br>* Max length: 12 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].commodityCode`|
|description|string|false|none|A description of the item, that provides details about the purchase.<br><br> For Visa transactions with level 3 ESD, the description must not be the same or very similar to your merchant name, or, consist only of common words like "product", or "service".<br>* Encoding: ASCII<br>* Max length: 26 characters<br>* Must not be a single character.<br>* Must not be blank.<br>* Must not be all special characters.<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].description`|
|discountAmount|integer(int64)|false|none|The discount amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].discountAmount`|
|productCode|string|false|none|The product code. Must be a unique product code associated with the item or service. This can be your unique code for the item, or the manufacturer's product code. <br>* Encoding: ASCII.<br>* Max length: 12 characters<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].productCode`|
|quantity|integer(int64)|false|none|The number of items. Must be an integer greater than zero.<br>* Encoding: Numeric<br>* Max value: 9999<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].quantity`|
|totalAmount|integer(int64)|false|none|The total amount for the line item, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br><br>See [Amount requirements for level 2/3 ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements) to learn more about how to calculate the line item total.<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].totalAmount`|
|unitOfMeasure|string|false|none|The unit of measurement for an item.<br>* Encoding: ASCII<br>* Max length: 3 characters<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitOfMeasure`|
|unitPrice|integer(int64)|false|none|The unit price, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitPrice`|

<h2 id="tocS_KlarnaDetails">KlarnaDetails</h2>
<!-- backwards compatibility -->
<a id="schemaklarnadetails"></a>
<a id="schema_KlarnaDetails"></a>
<a id="tocSklarnadetails"></a>
<a id="tocsklarnadetails"></a>

```json
{
  "billingAddress": "string",
  "checkoutAttemptId": "string",
  "deliveryAddress": "string",
  "personalDetails": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "string",
  "type": "klarna"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|string|false|none|The address where to send the invoice.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deliveryAddress|string|false|none|The address where the goods should be delivered.|
|personalDetails|string|false|none|Shopper name, date of birth, phone number, and email address.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The type of flow to initiate.|
|type|string|true|none|**klarna**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|klarna|
|type|klarnapayments|
|type|klarnapayments_account|
|type|klarnapayments_b2b|
|type|klarna_paynow|
|type|klarna_account|
|type|klarna_b2b|

<h2 id="tocS_KlarnaNetworkDetails">KlarnaNetworkDetails</h2>
<!-- backwards compatibility -->
<a id="schemaklarnanetworkdetails"></a>
<a id="schema_KlarnaNetworkDetails"></a>
<a id="tocSklarnanetworkdetails"></a>
<a id="tocsklarnanetworkdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "klarnaNetworkData": "string",
  "klarnaNetworkPaymentAccountId": "string",
  "klarnaNetworkSessionToken": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "redirect",
  "type": "klarna_network"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|klarnaNetworkData|string|false|none|A string containing a structured JSON object. This is a passthrough field used to enable custom features or data exchange with Klarna.|
|klarnaNetworkPaymentAccountId|string|false|none|The Klarna Network Payment Account identifier to use for the transaction. Required when `klarnaNetworkSessionToken` is provided.|
|klarnaNetworkSessionToken|string|false|none|The token obtained from the Klarna SDK during an Express Checkout flow.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The type of flow to initiate. Defaults to redirect when omitted.|
|type|string|true|none|**klarna_network**|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|redirect|
|subtype|sdk|
|type|klarna_network|

<h2 id="tocS_Leg">Leg</h2>
<!-- backwards compatibility -->
<a id="schemaleg"></a>
<a id="schema_Leg"></a>
<a id="tocSleg"></a>
<a id="tocsleg"></a>

```json
{
  "carrierCode": "string",
  "classOfTravel": "string",
  "dateOfTravel": "1970-01-01T00:00:00Z",
  "departureAirportCode": "string",
  "departureTax": 0,
  "destinationAirportCode": "string",
  "fareBasisCode": "string",
  "flightNumber": "string",
  "stopOverCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierCode|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br>This field is required if the airline data includes leg details.<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].carrier_code`|
|classOfTravel|string|false|none|A one-letter travel class identifier.<br> The following are common:<br> * F: first class<br>* J: business class<br>* Y: economy class<br>* W: premium economy<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].class_of_travel`|
|dateOfTravel|string(date-time)|false|none|Date and time of travel in format `yyyy-MM-ddTHH:mm`.<br>* Use local time of departure airport.<br>* minLength: 16 characters<br>* maxLength: 16 characters<br>* **additionalData key:** `airline.leg[N].date_of_travel`|
|departureAirportCode|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) three-letter airport code of the departure airport.<br>This field is required if the airline data includes leg details.<br><br>* Encoding: ASCII<br>* Example: Amsterdam = AMS<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].depart_airport`|
|departureTax|integer(int64)|false|none|The amount of [departure tax](https://en.wikipedia.org/wiki/Departure_tax) charged, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* Encoding: Numeric<br>* minLength: 1<br>* maxLength: 11<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].depart_tax`|
|destinationAirportCode|string|false|none|The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code of the destination airport.<br>This field is required if the airline data includes leg details.<br>* Example: Amsterdam = AMS<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].destination_code`|
|fareBasisCode|string|false|none|The [fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code), alphanumeric.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].fare_base_code`|
|flightNumber|string|false|none|The flight identifier.<br>* minLength: 1 character<br>* maxLength: 5 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.leg[N].flight_number`|
|stopOverCode|string|false|none|A one-letter code that indicates whether the passenger is entitled to make a stopover. Can be a space, O if the passenger is entitled to make a stopover, or X if they are not.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 1 character<br>* **additionalData key:** `airline.leg[N].stop_over_code`|

<h2 id="tocS_LevelTwoThree">LevelTwoThree</h2>
<!-- backwards compatibility -->
<a id="schemaleveltwothree"></a>
<a id="schema_LevelTwoThree"></a>
<a id="tocSleveltwothree"></a>
<a id="tocsleveltwothree"></a>

```json
{
  "customerReferenceNumber": "string",
  "destination": {
    "countryCode": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "dutyAmount": 0,
  "freightAmount": 0,
  "itemDetailLines": [
    {
      "commodityCode": "string",
      "description": "string",
      "discountAmount": 0,
      "productCode": "string",
      "quantity": 0,
      "totalAmount": 0,
      "unitOfMeasure": "string",
      "unitPrice": 0
    }
  ],
  "orderDate": "1970-01-01",
  "shipFromPostalCode": "string",
  "totalTaxAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerReferenceNumber|string|false|none|The reference number to identify the customer and their order.<br>* Format: ASCII<br>* Max length: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.customerReference`|
|destination|[Destination](#schemadestination)|false|none|The destination address information.|
|dutyAmount|integer(int64)|false|none|The duty tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.dutyAmount`|
|freightAmount|integer(int64)|false|none|The shipping amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.freightAmount`|
|itemDetailLines|[[ItemDetailLine](#schemaitemdetailline)]|false|none|The list of item detail lines.|
|orderDate|string(date)|false|none|The date of the order.<br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.orderDate`|
|shipFromPostalCode|string|false|none|The postal code of the address where the item is shipped from.<br>* Encoding: ASCII<br>* Max length: 10 characters<br>* For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.<br>* **additionalData key:** `enhancedSchemeData.shipFromPostalCode`|
|totalTaxAmount|integer(int64)|false|none|The amount of state or provincial [tax included in the total transaction amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd), in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* For L2 data: must not be all zeroes. <br>* For L3 data: can be zero.<br>* **additionalData key:** `enhancedSchemeData.totalTaxAmount`|

<h2 id="tocS_LineItem">LineItem</h2>
<!-- backwards compatibility -->
<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "amountExcludingTax": 0,
  "amountIncludingTax": 0,
  "brand": "string",
  "color": "string",
  "description": "string",
  "id": "string",
  "imageUrl": "string",
  "itemCategory": "string",
  "manufacturer": "string",
  "marketplaceSellerId": "string",
  "productUrl": "string",
  "quantity": 0,
  "receiverEmail": "string",
  "riskCategory": "string",
  "size": "string",
  "sku": "string",
  "taxAmount": 0,
  "taxPercentage": 0,
  "upc": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountExcludingTax|integer(int64)|false|none|Item amount excluding the tax, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).|
|amountIncludingTax|integer(int64)|false|none|Item amount including the tax, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).|
|brand|string|false|none|Brand of the item.|
|color|string|false|none|Color of the item.|
|description|string|false|none|Description of the line item.|
|id|string|false|none|ID of the line item.|
|imageUrl|string|false|none|Link to the picture of the purchased item.|
|itemCategory|string|false|none|Item category, used by the payment methods PayPal and Ratepay.|
|manufacturer|string|false|none|Manufacturer of the item.|
|marketplaceSellerId|string|false|none|Marketplace seller id.|
|productUrl|string|false|none|Link to the purchased item.|
|quantity|integer(int64)|false|none|Number of items.|
|receiverEmail|string|false|none|Email associated with the given product in the basket (usually in electronic gift cards).|
|riskCategory|string|false|none|An optional, free-text category for the item to be used in the risk evaluation. When provided, Protect uses this value to evaluate custom risk rules.|
|size|string|false|none|Size of the item.|
|sku|string|false|none|Stock keeping unit.|
|taxAmount|integer(int64)|false|none|Tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).|
|taxPercentage|integer(int64)|false|none|Tax percentage, represented as a [basis point](https://en.wikipedia.org/wiki/Basis_point) integer. For example:<br> - **530** for 5.3% (five point three percent) <br> - **2100** for 21% (twenty-one percent)|
|upc|string|false|none|Universal Product Code.|

<h2 id="tocS_ListStoredPaymentMethodsResponse">ListStoredPaymentMethodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststoredpaymentmethodsresponse"></a>
<a id="schema_ListStoredPaymentMethodsResponse"></a>
<a id="tocSliststoredpaymentmethodsresponse"></a>
<a id="tocsliststoredpaymentmethodsresponse"></a>

```json
{
  "merchantAccount": "string",
  "shopperReference": "string",
  "storedPaymentMethods": [
    {
      "alias": "string",
      "aliasType": "string",
      "brand": "string",
      "cardBin": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "externalResponseCode": "string",
      "externalTokenReference": "string",
      "holderName": "string",
      "iban": "string",
      "id": "string",
      "issuerName": "string",
      "lastFour": "string",
      "mandate": {
        "accountIdType": "string",
        "amount": "string",
        "amountRule": "max",
        "billingAttemptsRule": "on",
        "billingDay": "string",
        "count": "string",
        "currency": "string",
        "endsAt": "string",
        "frequency": "adhoc",
        "mandateId": "string",
        "maskedAccountId": "string",
        "minAmount": "string",
        "previousMandateId": "string",
        "providerId": "string",
        "purposeCode": "string",
        "recurringAmount": "string",
        "recurringStatement": "string",
        "remarks": "string",
        "retryPolicy": "true",
        "startsAt": "string",
        "status": "string",
        "txVariant": "string"
      },
      "name": "string",
      "networkTxReference": "string",
      "opi": {
        "issuerId": "string",
        "transToken": "string"
      },
      "ownerName": "string",
      "shopperEmail": "string",
      "shopperReference": "string",
      "supportedRecurringProcessingModels": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|false|none|Your merchant account.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|storedPaymentMethods|[[StoredPaymentMethodResource](#schemastoredpaymentmethodresource)]|false|none|List of all stored payment methods.|

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "checkInDate": "1970-01-01",
  "checkOutDate": "1970-01-01",
  "customerServicePhoneNumber": "string",
  "fireSafetyCompliance": true,
  "folio": {
    "cashAdvances": 0,
    "number": "string"
  },
  "foodBeverageCharges": 0,
  "lodgingChargeType": "advanceDeposit",
  "noShow": true,
  "prepaidExpenses": 0,
  "propertyPhoneNumber": "string",
  "renterName": "string",
  "rooms": [
    {
      "numberOfNights": 0,
      "rate": 0
    }
  ],
  "totalRoomTax": 0,
  "totalTax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkInDate|string(date)|false|none|The check-in date.<br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `lodging.checkInDate`|
|checkOutDate|string(date)|false|none|The check-out date.<br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `lodging.checkOutDate`|
|customerServicePhoneNumber|string|false|none|The toll-free phone number for the lodging customer service.<br>* Format: Alphanumeric<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.customerServiceTollFreeNumber`|
|fireSafetyCompliance|boolean|false|none|Indicates that the facility complies with the Hotel and Motel Fire Safety Act of 1990.<br>* **additionalData key:** `lodging.fireSafetyActIndicator`|
|folio|[Folio](#schemafolio)|false|none|The folio information for the booking.|
|foodBeverageCharges|integer(int64)|false|none|Any charges for food and beverages associated with the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.foodBeverageCharges`|
|lodgingChargeType|string|false|none|The category of lodging charges for the payment.<br>* **additionalData key:** `lodging.specialProgramCode`|
|noShow|boolean|false|none|Indicates if the customer didn't check in for their booking.<br>* **additionalData key:** `lodging.noShowIndicator`|
|prepaidExpenses|integer(int64)|false|none|The prepaid expenses for the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.prepaidExpenses`|
|propertyPhoneNumber|string|false|none|The lodging property location's phone number.<br>* Format: Alphanumeric<br>* Min length: 10 characters<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.propertyPhoneNumber`|
|renterName|string|false|none|The name of the person renting the room.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.renterName`|
|rooms|[[Room](#schemaroom)]|false|none|The list of rooms booked.|
|totalRoomTax|integer(int64)|false|none|The total room tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.totalRoomTax`|
|totalTax|integer(int64)|false|none|The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.totalTax`|

#### Enumerated Values

|Property|Value|
|---|---|
|lodgingChargeType|advanceDeposit|
|lodgingChargeType|noShow|
|lodgingChargeType|stay|

<h2 id="tocS_Mandate">Mandate</h2>
<!-- backwards compatibility -->
<a id="schemamandate"></a>
<a id="schema_Mandate"></a>
<a id="tocSmandate"></a>
<a id="tocsmandate"></a>

```json
{
  "amount": "string",
  "amountRule": "max",
  "billingAttemptsRule": "on",
  "billingDay": "string",
  "count": "string",
  "endsAt": "string",
  "frequency": "adhoc",
  "remarks": "string",
  "startsAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|The billing amount (in minor units) of the recurring transactions.|
|amountRule|string|false|none|The limitation rule of the billing amount.<br><br>Possible values:<br> * **max**: The transaction amount can not exceed the `amount`.<br><br> * **exact**: The transaction amount should be the same as the `amount`.<br><br>|
|billingAttemptsRule|string|false|none|The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.<br><br>Possible values:<br><br> * **on**: On a specific date.<br><br> * **before**:  Before and on a specific date.<br><br> * **after**: On and after a specific date.<br><br>|
|billingDay|string|false|none|The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`.|
|count|string|false|none|The number of transactions that can be performed within the given frequency.|
|endsAt|string|true|none|End date of the billing plan, in YYYY-MM-DD format.|
|frequency|string|true|none|The frequency with which a shopper should be charged.<br><br>Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.|
|remarks|string|false|none|The message shown by UPI to the shopper on the approval screen.|
|startsAt|string|false|none|Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountRule|max|
|amountRule|exact|
|billingAttemptsRule|on|
|billingAttemptsRule|before|
|billingAttemptsRule|after|
|frequency|adhoc|
|frequency|daily|
|frequency|weekly|
|frequency|biWeekly|
|frequency|monthly|
|frequency|quarterly|
|frequency|halfYearly|
|frequency|yearly|

<h2 id="tocS_MasterpassDetails">MasterpassDetails</h2>
<!-- backwards compatibility -->
<a id="schemamasterpassdetails"></a>
<a id="schema_MasterpassDetails"></a>
<a id="tocSmasterpassdetails"></a>
<a id="tocsmasterpassdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "masterpassTransactionId": "string",
  "sdkData": "string",
  "type": "masterpass"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|masterpassTransactionId|string|true|none|The Masterpass transaction ID.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**masterpass**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|masterpass|

<h2 id="tocS_MbwayDetails">MbwayDetails</h2>
<!-- backwards compatibility -->
<a id="schemambwaydetails"></a>
<a id="schema_MbwayDetails"></a>
<a id="tocSmbwaydetails"></a>
<a id="tocsmbwaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "sdkData": "string",
  "shopperEmail": "string",
  "telephoneNumber": "string",
  "type": "mbway"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperEmail|string|true|none|none|
|telephoneNumber|string|true|none|none|
|type|string|false|none|**mbway**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mbway|

<h2 id="tocS_MerchantDevice">MerchantDevice</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdevice"></a>
<a id="schema_MerchantDevice"></a>
<a id="tocSmerchantdevice"></a>
<a id="tocsmerchantdevice"></a>

```json
{
  "os": "string",
  "osVersion": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|os|string|false|none|Operating system running on the merchant device.|
|osVersion|string|false|none|Version of the operating system on the merchant device.|
|reference|string|false|none|Merchant device reference.|

<h2 id="tocS_MerchantRiskIndicator">MerchantRiskIndicator</h2>
<!-- backwards compatibility -->
<a id="schemamerchantriskindicator"></a>
<a id="schema_MerchantRiskIndicator"></a>
<a id="tocSmerchantriskindicator"></a>
<a id="tocsmerchantriskindicator"></a>

```json
{
  "addressMatch": true,
  "deliveryAddressIndicator": "shipToBillingAddress",
  "deliveryEmail": "string",
  "deliveryEmailAddress": "string",
  "deliveryTimeframe": "electronicDelivery",
  "giftCardAmount": {
    "currency": "str",
    "value": 0
  },
  "giftCardCount": 0,
  "giftCardCurr": "string",
  "preOrderDate": "1970-01-01T00:00:00Z",
  "preOrderPurchase": true,
  "preOrderPurchaseInd": "string",
  "reorderItems": true,
  "reorderItemsInd": "string",
  "shipIndicator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressMatch|boolean|false|none|Whether the chosen delivery address is identical to the billing address.|
|deliveryAddressIndicator|string|false|none|Indicator regarding the delivery address.<br>Allowed values:<br>* `shipToBillingAddress`<br>* `shipToVerifiedAddress`<br>* `shipToNewAddress`<br>* `shipToStore`<br>* `digitalGoods`<br>* `goodsNotShipped`<br>* `other`|
|deliveryEmail|string|false|none|**Deprecated.** The delivery email address (for digital goods).|
|deliveryEmailAddress|string|false|none|For Electronic delivery, the email address to which the merchandise was delivered. Maximum length: 254 characters.|
|deliveryTimeframe|string|false|none|The estimated delivery time for the shopper to receive the goods.<br>Allowed values:<br>* `electronicDelivery`<br>* `sameDayShipping`<br>* `overnightShipping`<br>* `twoOrMoreDaysShipping`|
|giftCardAmount|[Amount](#schemaamount)|false|none|For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s).|
|giftCardCount|integer(int32)|false|none|For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.|
|giftCardCurr|string|false|none|For prepaid or gift card purchase, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) three-digit currency code of the gift card, other than those listed in Table A.5 of the EMVCo 3D Secure Protocol and Core Functions Specification.|
|preOrderDate|string(date-time)|false|none|For pre-order purchases, the expected date this product will be available to the shopper.|
|preOrderPurchase|boolean|false|none|Indicator for whether this transaction is for pre-ordering a product.|
|preOrderPurchaseInd|string|false|none|Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.|
|reorderItems|boolean|false|none|Indicator for whether the shopper has already purchased the same items in the past.|
|reorderItemsInd|string|false|none|Indicates whether the cardholder is reordering previously purchased merchandise.|
|shipIndicator|string|false|none|Indicates shipping method chosen for the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|deliveryAddressIndicator|shipToBillingAddress|
|deliveryAddressIndicator|shipToVerifiedAddress|
|deliveryAddressIndicator|shipToNewAddress|
|deliveryAddressIndicator|shipToStore|
|deliveryAddressIndicator|digitalGoods|
|deliveryAddressIndicator|goodsNotShipped|
|deliveryAddressIndicator|other|
|deliveryTimeframe|electronicDelivery|
|deliveryTimeframe|sameDayShipping|
|deliveryTimeframe|overnightShipping|
|deliveryTimeframe|twoOrMoreDaysShipping|

<h2 id="tocS_MobilePayDetails">MobilePayDetails</h2>
<!-- backwards compatibility -->
<a id="schemamobilepaydetails"></a>
<a id="schema_MobilePayDetails"></a>
<a id="tocSmobilepaydetails"></a>
<a id="tocsmobilepaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "sdkData": "string",
  "type": "mobilepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**mobilepay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mobilepay|

<h2 id="tocS_MolPayDetails">MolPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemamolpaydetails"></a>
<a id="schema_MolPayDetails"></a>
<a id="tocSmolpaydetails"></a>
<a id="tocsmolpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "type": "molpay_ebanking_fpx_MY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|true|none|The shopper's bank. Specify this with the issuer value that corresponds to this bank.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|true|none|**molpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|molpay_ebanking_fpx_MY|
|type|molpay_ebanking_TH|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The first name.|
|lastName|string|true|none|The last name.|

<h2 id="tocS_OpenInvoiceDetails">OpenInvoiceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaopeninvoicedetails"></a>
<a id="schema_OpenInvoiceDetails"></a>
<a id="tocSopeninvoicedetails"></a>
<a id="tocsopeninvoicedetails"></a>

```json
{
  "billingAddress": "string",
  "checkoutAttemptId": "string",
  "deliveryAddress": "string",
  "personalDetails": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "openinvoice"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|string|false|none|The address where to send the invoice.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deliveryAddress|string|false|none|The address where the goods should be delivered.|
|personalDetails|string|false|none|Shopper name, date of birth, phone number, and email address.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**openinvoice**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|openinvoice|
|type|afterpay_directdebit|
|type|atome_pos|

<h2 id="tocS_OpiRequest">OpiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopirequest"></a>
<a id="schema_OpiRequest"></a>
<a id="tocSopirequest"></a>
<a id="tocsopirequest"></a>

```json
{
  "includeIssuerId": true,
  "includeTransToken": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeIssuerId|boolean|false|none|When set to true, includes the OPI issuer ID in the response.|
|includeTransToken|boolean|false|none|When set to true, includes an OPI transaction token in the response when the payment creates a stored payment method.|

<h2 id="tocS_OpiResponse">OpiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaopiresponse"></a>
<a id="schema_OpiResponse"></a>
<a id="tocSopiresponse"></a>
<a id="tocsopiresponse"></a>

```json
{
  "issuerId": "string",
  "transToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuerId|string|false|none|The OPI issuer id.|
|transToken|string|false|none|The OPI transaction token.|

<h2 id="tocS_Passenger">Passenger</h2>
<!-- backwards compatibility -->
<a id="schemapassenger"></a>
<a id="schema_Passenger"></a>
<a id="tocSpassenger"></a>
<a id="tocspassenger"></a>

```json
{
  "dateOfBirth": "1970-01-01",
  "firstName": "string",
  "lastName": "string",
  "phoneNumber": "string",
  "travellerType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string(date)|false|none|The passenger's date of birth.<br>* Format `yyyy-MM-dd`<br>* minLength: 10<br>* maxLength: 10<br>* **additionalData key:** `airline.passenger[N].date_of_birth`|
|firstName|string|false|none|The passenger's first name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII<br>* **additionalData key:** `airline.passenger[N].first_name`|
|lastName|string|false|none|The passenger's last name.<br>> This field is required if the airline data includes passenger details or leg details.<br>* Encoding: ASCII<br>* **additionalData key:** `airline.passenger[N].last_name`|
|phoneNumber|string|false|none|The passenger's phone number, including country code. This is an alphanumeric field that can include the '+' and '-' signs.<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 30 characters<br>* **additionalData key:** `airline.passenger[N].phone_number`|
|travellerType|string|false|none|The IATA passenger type code (PTC).<br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 6 characters<br>* **additionalData key:** `airline.passenger[N].traveller_type`|

<h2 id="tocS_PayByBankAISDirectDebitDetails">PayByBankAISDirectDebitDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaybybankaisdirectdebitdetails"></a>
<a id="schema_PayByBankAISDirectDebitDetails"></a>
<a id="tocSpaybybankaisdirectdebitdetails"></a>
<a id="tocspaybybankaisdirectdebitdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "paybybank_AIS_DD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**paybybank_AIS_DD**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paybybank_AIS_DD|

<h2 id="tocS_PayByBankCADirectDebitDetails">PayByBankCADirectDebitDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaybybankcadirectdebitdetails"></a>
<a id="schema_PayByBankCADirectDebitDetails"></a>
<a id="tocSpaybybankcadirectdebitdetails"></a>
<a id="tocspaybybankcadirectdebitdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "paybybank_ca"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|The type of payment method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paybybank_ca|

<h2 id="tocS_PayByBankDetails">PayByBankDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaybybankdetails"></a>
<a id="schema_PayByBankDetails"></a>
<a id="tocSpaybybankdetails"></a>
<a id="tocspaybybankdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "issuer": "string",
  "sdkData": "string",
  "type": "paybybank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|issuer|string|false|none|The PayByBank issuer value of the shopper's selected bank.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|true|none|**paybybank**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paybybank|

<h2 id="tocS_PayPalDetails">PayPalDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaypaldetails"></a>
<a id="schema_PayPalDetails"></a>
<a id="tocSpaypaldetails"></a>
<a id="tocspaypaldetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "orderID": "string",
  "payeePreferred": "string",
  "payerID": "string",
  "payerSelected": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "express",
  "type": "paypal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|orderID|string|false|none|The unique ID associated with the order.|
|payeePreferred|string|false|none|IMMEDIATE_PAYMENT_REQUIRED or UNRESTRICTED|
|payerID|string|false|none|The unique ID associated with the payer.|
|payerSelected|string|false|none|PAYPAL or PAYPAL_CREDIT|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The type of flow to initiate.|
|type|string|true|none|**paypal**|

#### Enumerated Values

|Property|Value|
|---|---|
|subtype|express|
|subtype|redirect|
|subtype|sdk|
|type|paypal|

<h2 id="tocS_PayPayDetails">PayPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaypaydetails"></a>
<a id="schema_PayPayDetails"></a>
<a id="tocSpaypaydetails"></a>
<a id="tocspaypaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "paypay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**paypay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paypay|

<h2 id="tocS_PayToDetails">PayToDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaytodetails"></a>
<a id="schema_PayToDetails"></a>
<a id="tocSpaytodetails"></a>
<a id="tocspaytodetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperAccountIdentifier": "string",
  "storedPaymentMethodId": "string",
  "type": "payto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperAccountIdentifier|string|false|none|The shopper's banking details or payId reference, used to complete payment.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**payto**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payto|

<h2 id="tocS_PayUUpiDetails">PayUUpiDetails</h2>
<!-- backwards compatibility -->
<a id="schemapayuupidetails"></a>
<a id="schema_PayUUpiDetails"></a>
<a id="tocSpayuupidetails"></a>
<a id="tocspayuupidetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "storedPaymentMethodId": "string",
  "type": "payu_IN_upi",
  "virtualPaymentAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**payu_IN_upi**|
|virtualPaymentAddress|string|false|none|The virtual payment address for UPI.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payu_IN_upi|

<h2 id="tocS_PayWithGoogleDetails">PayWithGoogleDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaywithgoogledetails"></a>
<a id="schema_PayWithGoogleDetails"></a>
<a id="tocSpaywithgoogledetails"></a>
<a id="tocspaywithgoogledetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "googlePayToken": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "paywithgoogle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|googlePayToken|string|true|none|The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|**paywithgoogle**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|paywithgoogle|

<h2 id="tocS_PayWithGoogleDonations">PayWithGoogleDonations</h2>
<!-- backwards compatibility -->
<a id="schemapaywithgoogledonations"></a>
<a id="schema_PayWithGoogleDonations"></a>
<a id="tocSpaywithgoogledonations"></a>
<a id="tocspaywithgoogledonations"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "googlePayToken": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "threeDS2SdkVersion": "string",
  "type": "paywithgoogle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|googlePayToken|string|true|none|The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|threeDS2SdkVersion|string|false|none|Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.|
|type|string|false|none|**paywithgoogle**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|paywithgoogle|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "paymentMethod": {
    "brand": "string",
    "type": "string"
  },
  "pspReference": "string",
  "resultCode": "Authorised"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|Authorised amount in the transaction.|
|paymentMethod|[ResponsePaymentMethod](#schemaresponsepaymentmethod)|false|none|Only returned for `resultCode`: **Authorised**. <br>Details about the payment method used in the transaction.|
|pspReference|string|false|none|Adyen's 16-character reference associated with the transaction/request. This value is globally unique. Use this reference when you communicate with us about this request.|
|resultCode|string|false|none|The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Received** – Indicates the payment request was successfully received by Adyen, and will be processed. This is the initial state for all payments.<br>* **Pending** – The payment order was successfully received but the final status of the payment is not available yet. This is common for payment methods with an asynchronous flow.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|Authorised|
|resultCode|Received|
|resultCode|Pending|

<h2 id="tocS_PaymentAmountUpdateRequest">PaymentAmountUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentamountupdaterequest"></a>
<a id="schema_PaymentAmountUpdateRequest"></a>
<a id="tocSpaymentamountupdaterequest"></a>
<a id="tocspaymentamountupdaterequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "industryUsage": "delayedCharge",
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The updated amount. The `currency` must match the currency used in authorisation.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|industryUsage|string|false|none|The reason for the amount update. Possible values: <br>* **delayedCharge** <br>* **noShow** <br>* **installment**|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|reference|string|false|none|Your reference for the amount update request. Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments).|

#### Enumerated Values

|Property|Value|
|---|---|
|industryUsage|delayedCharge|
|industryUsage|installment|
|industryUsage|noShow|

<h2 id="tocS_PaymentAmountUpdateResponse">PaymentAmountUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentamountupdateresponse"></a>
<a id="schema_PaymentAmountUpdateResponse"></a>
<a id="tocSpaymentamountupdateresponse"></a>
<a id="tocspaymentamountupdateresponse"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "industryUsage": "delayedCharge",
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "paymentPspReference": "string",
  "pspReference": "string",
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "status": "received"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The updated amount.|
|industryUsage|string|false|none|The reason for the amount update. Possible values: <br>* **delayedCharge** <br>* **noShow** <br>* **installment**|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentPspReference|string|true|none|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to update. |
|pspReference|string|true|none|Adyen's 16-character reference associated with the amount update request.|
|reference|string|true|none|Your reference for the amount update request. Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments).|
|status|string|true|none|The status of your request. This will always have the value **received**.|

#### Enumerated Values

|Property|Value|
|---|---|
|industryUsage|delayedCharge|
|industryUsage|installment|
|industryUsage|noShow|
|status|received|

<h2 id="tocS_PaymentCancelRequest">PaymentCancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcancelrequest"></a>
<a id="schema_PaymentCancelRequest"></a>
<a id="tocSpaymentcancelrequest"></a>
<a id="tocspaymentcancelrequest"></a>

```json
{
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "merchantAccount": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|reference|string|false|none|Your reference for the cancel request. Maximum length: 80 characters.|

<h2 id="tocS_PaymentCancelResponse">PaymentCancelResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcancelresponse"></a>
<a id="schema_PaymentCancelResponse"></a>
<a id="tocSpaymentcancelresponse"></a>
<a id="tocspaymentcancelresponse"></a>

```json
{
  "merchantAccount": "string",
  "paymentPspReference": "string",
  "pspReference": "string",
  "reference": "string",
  "status": "received"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentPspReference|string|true|none|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to cancel. |
|pspReference|string|true|none|Adyen's 16-character reference associated with the cancel request.|
|reference|string|false|none|Your reference for the cancel request.|
|status|string|true|none|The status of your request. This will always have the value **received**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|received|

<h2 id="tocS_PaymentCaptureRequest">PaymentCaptureRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcapturerequest"></a>
<a id="schema_PaymentCaptureRequest"></a>
<a id="tocSpaymentcapturerequest"></a>
<a id="tocspaymentcapturerequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "subMerchants": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "amount": {
        "currency": "str",
        "value": 0
      },
      "email": "string",
      "id": "string",
      "mcc": "string",
      "name": "string",
      "phoneNumber": "string",
      "registeredSince": "string",
      "taxId": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|reference|string|false|none|Your reference for the capture request. Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|subMerchants|[[SubMerchantInfo](#schemasubmerchantinfo)]|false|none|A List of sub-merchants.|

<h2 id="tocS_PaymentCaptureResponse">PaymentCaptureResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcaptureresponse"></a>
<a id="schema_PaymentCaptureResponse"></a>
<a id="tocSpaymentcaptureresponse"></a>
<a id="tocspaymentcaptureresponse"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "paymentPspReference": "string",
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "pspReference": "string",
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "status": "received",
  "subMerchants": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "amount": {
        "currency": "str",
        "value": 0
      },
      "email": "string",
      "id": "string",
      "mcc": "string",
      "name": "string",
      "phoneNumber": "string",
      "registeredSince": "string",
      "taxId": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The captured amount.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentPspReference|string|true|none|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to capture. |
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|pspReference|string|true|none|Adyen's 16-character reference associated with the capture request.|
|reference|string|false|none|Your reference for the capture request.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|status|string|true|none|The status of your request. This will always have the value **received**.|
|subMerchants|[[SubMerchantInfo](#schemasubmerchantinfo)]|false|none|List of sub-merchants.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|received|

<h2 id="tocS_PaymentCompletionDetails">PaymentCompletionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaymentcompletiondetails"></a>
<a id="schema_PaymentCompletionDetails"></a>
<a id="tocSpaymentcompletiondetails"></a>
<a id="tocspaymentcompletiondetails"></a>

```json
{
  "MD": "string",
  "PaReq": "string",
  "PaRes": "string",
  "authorization_token": "string",
  "billingToken": "string",
  "cupsecureplus.smscode": "string",
  "facilitatorAccessToken": "string",
  "oneTimePasscode": "string",
  "orderID": "string",
  "payerID": "string",
  "payload": "string",
  "paymentID": "string",
  "paymentStatus": "string",
  "redirectResult": "string",
  "resultCode": "string",
  "returnUrlQueryString": "string",
  "threeDSResult": "string",
  "threeds2.challengeResult": "string",
  "threeds2.fingerprint": "string",
  "vaultToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MD|string|false|none|A payment session identifier returned by the card issuer.|
|PaReq|string|false|none|(3D) Payment Authentication Request data for the card issuer.|
|PaRes|string|false|none|(3D) Payment Authentication Response data by the card issuer.|
|authorization_token|string|false|none|none|
|billingToken|string|false|none|PayPal-generated token for recurring payments.|
|cupsecureplus.smscode|string|false|none|The SMS verification code collected from the shopper.|
|facilitatorAccessToken|string|false|none|PayPal-generated third party access token.|
|oneTimePasscode|string|false|none|A random number sent to the mobile phone number of the shopper to verify the payment.|
|orderID|string|false|none|PayPal-assigned ID for the order.|
|payerID|string|false|none|PayPal-assigned ID for the payer (shopper).|
|payload|string|false|none|Payload appended to the `returnURL` as a result of the redirect.|
|paymentID|string|false|none|PayPal-generated ID for the payment.|
|paymentStatus|string|false|none|Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible values: any value starting with `requestPayment:`.|
|redirectResult|string|false|none|The result of the redirect as appended to the `returnURL`.|
|resultCode|string|false|none|Value you received from the WeChat Pay SDK.|
|returnUrlQueryString|string|false|none|The query string as appended to the `returnURL` when using direct issuer links .|
|threeDSResult|string|false|none|Base64-encoded string returned by the Component after the challenge flow. It contains the following parameters: `transStatus`, `authorisationToken`.|
|threeds2.challengeResult|string|false|none|Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `transStatus`.|
|threeds2.fingerprint|string|false|none|Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `threeDSCompInd`.|
|vaultToken|string|false|none|PayPalv2-generated token for recurring payments.|

<h2 id="tocS_PaymentDetails">PaymentDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdetails"></a>
<a id="schema_PaymentDetails"></a>
<a id="tocSpaymentdetails"></a>
<a id="tocspaymentdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "sdkData": "string",
  "type": "alipay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|alipay|
|type|multibanco|
|type|bankTransfer|
|type|bankTransfer_IBAN|
|type|paynow|
|type|affirm_pos|
|type|iris|
|type|wero|
|type|trustly|
|type|trustlyvector|
|type|oney|
|type|facilypay|
|type|facilypay_3x|
|type|facilypay_4x|
|type|facilypay_6x|
|type|facilypay_10x|
|type|facilypay_12x|
|type|unionpay|
|type|kcp_banktransfer|
|type|kcp_payco|
|type|kcp_creditcard|
|type|wechatpaySDK|
|type|wechatpayQR|
|type|wechatpayWeb|
|type|molpay_boost|
|type|wallet_IN|
|type|payu_IN_cashcard|
|type|payu_IN_nb|
|type|paytm|
|type|molpay_ebanking_VN|
|type|molpay_ebanking_MY|
|type|molpay_ebanking_direct_MY|
|type|swish|
|type|bizum|
|type|walley|
|type|walley_b2b|
|type|paypo|
|type|satispay|
|type|scalapay|
|type|scalapay_3x|
|type|scalapay_4x|
|type|molpay_fpx|
|type|payme|
|type|payme_pos|
|type|konbini|
|type|directEbanking|
|type|boletobancario|
|type|cashticket|
|type|ikano|
|type|karenmillen|
|type|oasis|
|type|warehouse|
|type|primeiropay_boleto|
|type|mada|
|type|benefit|
|type|knet|
|type|omannet|
|type|kcp_naverpay|
|type|fawry|
|type|atome|
|type|naps|
|type|nordea|
|type|boletobancario_bradesco|
|type|boletobancario_itau|
|type|boletobancario_santander|
|type|boletobancario_bancodobrasil|
|type|boletobancario_hsbc|
|type|molpay_maybank2u|
|type|molpay_cimb|
|type|molpay_rhb|
|type|molpay_amb|
|type|molpay_hlb|
|type|molpay_affin_epg|
|type|molpay_bankislam|
|type|molpay_publicbank|
|type|fpx_agrobank|
|type|touchngo|
|type|maybank2u_mae|
|type|duitnow|
|type|promptpay|
|type|twint_pos|
|type|alipay_hk|
|type|alipay_hk_web|
|type|alipay_hk_wap|
|type|alipay_wap|
|type|balanceplatform|

<h2 id="tocS_PaymentDetailsRequest">PaymentDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdetailsrequest"></a>
<a id="schema_PaymentDetailsRequest"></a>
<a id="tocSpaymentdetailsrequest"></a>
<a id="tocspaymentdetailsrequest"></a>

```json
{
  "authenticationData": {
    "authenticationOnly": false
  },
  "details": {
    "MD": "string",
    "PaReq": "string",
    "PaRes": "string",
    "authorization_token": "string",
    "billingToken": "string",
    "cupsecureplus.smscode": "string",
    "facilitatorAccessToken": "string",
    "oneTimePasscode": "string",
    "orderID": "string",
    "payerID": "string",
    "payload": "string",
    "paymentID": "string",
    "paymentStatus": "string",
    "redirectResult": "string",
    "resultCode": "string",
    "returnUrlQueryString": "string",
    "threeDSResult": "string",
    "threeds2.challengeResult": "string",
    "threeds2.fingerprint": "string",
    "vaultToken": "string"
  },
  "paymentData": "string",
  "threeDSAuthenticationOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationData|[DetailsRequestAuthenticationData](#schemadetailsrequestauthenticationdata)|false|none|Data for 3DS authentication.|
|details|[PaymentCompletionDetails](#schemapaymentcompletiondetails)|true|none|Use this collection to submit the details that were returned as a result of the `/payments` call.|
|paymentData|string|false|none|Encoded payment data. For [authorizing a payment after using 3D Secure 2 Authentication-only](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only/#authorise-the-payment-with-adyen):<br><br>If you received `resultCode`: **AuthenticationNotRequired** in the `/payments` response, use the `threeDSPaymentData` from the same response.<br><br>If you received `resultCode`: **AuthenticationFinished** in the `/payments` response, use the `action.paymentData` from the same response.|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.|

<h2 id="tocS_PaymentDetailsResponse">PaymentDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdetailsresponse"></a>
<a id="schema_PaymentDetailsResponse"></a>
<a id="tocSpaymentdetailsresponse"></a>
<a id="tocspaymentdetailsresponse"></a>

```json
{
  "action": {
    "authorisationToken": "string",
    "paymentData": "string",
    "paymentMethodType": "string",
    "subtype": "string",
    "token": "string",
    "type": "threeDS2",
    "url": "string"
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "donationToken": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "accountScore": 0,
        "checkId": 0,
        "name": "string"
      }
    ]
  },
  "merchantReference": "string",
  "opi": {
    "issuerId": "string",
    "transToken": "string"
  },
  "order": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "expiresAt": "string",
    "orderData": "string",
    "pspReference": "string",
    "reference": "string",
    "remainingAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "paymentMethod": {
    "brand": "string",
    "type": "string"
  },
  "paymentValidations": {
    "name": {
      "rawResponse": {
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "middleName": "string",
        "status": "string"
      },
      "result": {
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "middleName": "string"
      },
      "status": "notPerformed"
    }
  },
  "pspReference": "string",
  "refusalReason": "string",
  "refusalReasonCode": "string",
  "resultCode": "AuthenticationFinished",
  "shopperLocale": "string",
  "threeDS2ResponseData": {
    "acsChallengeMandated": "string",
    "acsOperatorID": "string",
    "acsReferenceNumber": "string",
    "acsSignedContent": "string",
    "acsTransID": "string",
    "acsURL": "string",
    "authenticationType": "string",
    "cardHolderInfo": "string",
    "cavvAlgorithm": "string",
    "challengeIndicator": "string",
    "dsReferenceNumber": "string",
    "dsTransID": "string",
    "exemptionIndicator": "string",
    "messageVersion": "string",
    "riskScore": "string",
    "sdkEphemPubKey": "string",
    "threeDSServerTransID": "string",
    "transStatus": "string",
    "transStatusReason": "string"
  },
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  },
  "threeDSPaymentData": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[CheckoutThreeDS2Action](#schemacheckoutthreeds2action)|false|none|Action to be taken for completing the payment. When returned, only the 3D Secure action is needed in most cases.|
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.|
|amount|[Amount](#schemaamount)|false|none|Authorised amount in the transaction.|
|donationToken|string|false|none|Donation Token containing payment details for Adyen Giving.|
|fraudResult|[FraudResult](#schemafraudresult)|false|none|The fraud result properties of the payment.|
|merchantReference|string|false|none|The reference used during the /payments request.|
|opi|[OpiResponse](#schemaopiresponse)|false|none|Oracle Payment Interface (OPI) response fields such as `transToken` and `issuerId`.|
|order|[CheckoutOrderResponse](#schemacheckoutorderresponse)|false|none|Contains updated information regarding the order in case order information was provided in the request.|
|paymentMethod|[ResponsePaymentMethod](#schemaresponsepaymentmethod)|false|none|Details about the payment method used in the transaction. <br>Only returned if `resultCode` is **Authorised**.|
|paymentValidations|[PaymentValidationsResponse](#schemapaymentvalidationsresponse)|false|none|The object that contains the validation outcomes.<br>Only returned if `resultCode` is **Authorised** and if you have requested a payment validation in the request.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.|
|refusalReason|string|false|none|If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|refusalReasonCode|string|false|none|Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|resultCode|string|false|none|The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.<br>* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).<br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.<br>* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.<br>* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **PartiallyAuthorised** – The payment has been authorised for a partial amount.<br>This happens for card payments when the merchant supports Partial Authorisations and the cardholder has insufficient funds.<br>* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.<br>* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.<br>* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.<br>* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.<br>* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.|
|shopperLocale|string|false|none|The shopperLocale.|
|threeDS2ResponseData|[ThreeDS2ResponseData](#schemathreeds2responsedata)|false|none|Response of the 3D Secure 2 authentication.|
|threeDS2Result|[ThreeDS2Result](#schemathreeds2result)|false|none|Result of the 3D Secure 2 authentication.|
|threeDSPaymentData|string|false|none|When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|AuthenticationFinished|
|resultCode|AuthenticationNotRequired|
|resultCode|Authorised|
|resultCode|Cancelled|
|resultCode|ChallengeShopper|
|resultCode|Error|
|resultCode|IdentifyShopper|
|resultCode|PartiallyAuthorised|
|resultCode|Pending|
|resultCode|PresentToShopper|
|resultCode|Received|
|resultCode|RedirectShopper|
|resultCode|Refused|
|resultCode|Success|

<h2 id="tocS_PaymentLinkRequest">PaymentLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkrequest"></a>
<a id="schema_PaymentLinkRequest"></a>
<a id="tocSpaymentlinkrequest"></a>
<a id="tocspaymentlinkrequest"></a>

```json
{
  "allowedPaymentMethods": [
    "string"
  ],
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "blockedPaymentMethods": [
    "string"
  ],
  "captureDelayHours": 0,
  "countryCode": "string",
  "dateOfBirth": "1970-01-01",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "description": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fundOrigin": {
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string"
  },
  "fundRecipient": {
    "IBAN": "string",
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "paymentMethod": {
      "billingSequenceNumber": "string",
      "brand": "string",
      "checkoutAttemptId": "string",
      "cupsecureplus.smscode": "string",
      "cvc": "string",
      "encryptedCard": "string",
      "encryptedCardNumber": "string",
      "encryptedExpiryMonth": "string",
      "encryptedExpiryYear": "string",
      "encryptedPassword": "string",
      "encryptedSecurityCode": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "fastlaneData": "string",
      "fundingSource": "credit",
      "holderName": "string",
      "networkPaymentReference": "string",
      "number": "string",
      "recurringDetailReference": "string",
      "sdkData": "string",
      "shopperNotificationReference": "string",
      "srcCorrelationId": "string",
      "srcDigitalCardId": "string",
      "srcScheme": "string",
      "srcTokenReference": "string",
      "storedPaymentMethodId": "string",
      "threeDS2SdkVersion": "string",
      "type": "scheme"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string",
    "walletOwnerTaxId": "string",
    "walletPurpose": "identifiedBoleto"
  },
  "installmentOptions": {
    "property1": {
      "maxValue": 0,
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    },
    "property2": {
      "maxValue": 0,
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "manualCapture": true,
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "requiredShopperFields": [
    "billingAddress"
  ],
  "returnUrl": "string",
  "reusable": true,
  "riskData": {
    "clientData": "string",
    "customFields": {
      "property1": "string",
      "property2": "string"
    },
    "fraudOffset": 0,
    "profileReference": "string"
  },
  "shopperEmail": "string",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "showRemovePaymentMethodButton": true,
  "socialSecurityNumber": "string",
  "splitCardFundingSources": false,
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "storePaymentMethodMode": "askForConsent",
  "telephoneNumber": "string",
  "themeId": "string",
  "threeDS2RequestData": {
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "threeDSRequestorChallengeInd": "01",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedPaymentMethods|[string]|false|none|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|amount|[Amount](#schemaamount)|true|none|The payment amount and currency.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|blockedPaymentMethods|[string]|false|none|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|countryCode|string|false|none|The shopper's two-letter country code.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|deliverAt|string(date-time)|false|none|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|description|string|false|none|A short description visible on the payment page.<br>Maximum length: 280 characters.|
|expiresAt|string(date-time)|false|none|The date when the payment link expires.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.<br><br>The maximum expiry date is 70 days after the payment link is created.<br><br>If not provided, the payment link expires 24 hours after it was created.|
|fundOrigin|[FundOrigin](#schemafundorigin)|false|none|The person or entity funding the money.|
|fundRecipient|[FundRecipient](#schemafundrecipient)|false|none|the person or entity receiving the money|
|installmentOptions|object|false|none|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|manualCapture|boolean|false|none|Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture).|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier for which the payment link is created.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limitations:<br>* Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"<br>* Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"<br>* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when `storePaymentMethodMode` is set to **askForConsent** or **enabled**.<br>Possible values:<br>* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|true|none|A reference that is used to uniquely identify the payment in future communications about the payment status.|
|requiredShopperFields|[string]|false|none|List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).<br><br>Possible values:<br>* **billingAddress** – The address where to send the invoice.<br>* **deliveryAddress** – The address where the purchased goods should be delivered.<br>* **shopperEmail** – The shopper's email address.<br>* **shopperName** – The shopper's full name.<br>* **telephoneNumber** – The shopper's phone number.<br>|
|returnUrl|string|false|none|Website URL used for redirection after payment is completed.<br>If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.|
|reusable|boolean|false|none|Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.|
|riskData|[RiskData](#schemariskdata)|false|none|Any risk-related settings to apply to the payment.|
|shopperEmail|string|false|none|The shopper's email address.|
|shopperLocale|string|false|none|The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.<br><br>For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|showRemovePaymentMethodButton|boolean|false|none|Set to **false** to hide the button that lets the shopper remove a stored payment method.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splitCardFundingSources|boolean|false|none|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|store|string|false|none|The physical store, for which this payment is processed.|
|storePaymentMethodMode|string|false|none|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent. <br> When set to **askForConsent** or **enabled**, you must also include the `recurringProcessingModel` parameter.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|themeId|string|false|none|A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area.|
|threeDS2RequestData|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|none|The cardholder phone number need to be part of the authentication message for payment data. It is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|requiredShopperFields|billingAddress|
|requiredShopperFields|deliveryAddress|
|requiredShopperFields|shopperEmail|
|requiredShopperFields|shopperName|
|requiredShopperFields|telephoneNumber|
|storePaymentMethodMode|askForConsent|
|storePaymentMethodMode|disabled|
|storePaymentMethodMode|enabled|

<h2 id="tocS_PaymentLinkResponse">PaymentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkresponse"></a>
<a id="schema_PaymentLinkResponse"></a>
<a id="tocSpaymentlinkresponse"></a>
<a id="tocspaymentlinkresponse"></a>

```json
{
  "allowedPaymentMethods": [
    "string"
  ],
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "blockedPaymentMethods": [
    "string"
  ],
  "captureDelayHours": 0,
  "countryCode": "string",
  "dateOfBirth": "1970-01-01",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "description": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fundOrigin": {
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string"
  },
  "fundRecipient": {
    "IBAN": "string",
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "paymentMethod": {
      "billingSequenceNumber": "string",
      "brand": "string",
      "checkoutAttemptId": "string",
      "cupsecureplus.smscode": "string",
      "cvc": "string",
      "encryptedCard": "string",
      "encryptedCardNumber": "string",
      "encryptedExpiryMonth": "string",
      "encryptedExpiryYear": "string",
      "encryptedPassword": "string",
      "encryptedSecurityCode": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "fastlaneData": "string",
      "fundingSource": "credit",
      "holderName": "string",
      "networkPaymentReference": "string",
      "number": "string",
      "recurringDetailReference": "string",
      "sdkData": "string",
      "shopperNotificationReference": "string",
      "srcCorrelationId": "string",
      "srcDigitalCardId": "string",
      "srcScheme": "string",
      "srcTokenReference": "string",
      "storedPaymentMethodId": "string",
      "threeDS2SdkVersion": "string",
      "type": "scheme"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string",
    "walletOwnerTaxId": "string",
    "walletPurpose": "identifiedBoleto"
  },
  "id": "string",
  "installmentOptions": {
    "property1": {
      "maxValue": 0,
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    },
    "property2": {
      "maxValue": 0,
      "plans": [
        "bonus"
      ],
      "preselectedValue": 0,
      "values": [
        0
      ]
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "manualCapture": true,
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurringProcessingModel": "CardOnFile",
  "reference": "string",
  "requiredShopperFields": [
    "billingAddress"
  ],
  "returnUrl": "string",
  "reusable": true,
  "riskData": {
    "clientData": "string",
    "customFields": {
      "property1": "string",
      "property2": "string"
    },
    "fraudOffset": 0,
    "profileReference": "string"
  },
  "shopperEmail": "string",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "showRemovePaymentMethodButton": true,
  "socialSecurityNumber": "string",
  "splitCardFundingSources": false,
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "status": "active",
  "store": "string",
  "storePaymentMethodMode": "askForConsent",
  "telephoneNumber": "string",
  "themeId": "string",
  "threeDS2RequestData": {
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "threeDSRequestorChallengeInd": "01",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedPaymentMethods|[string]|false|none|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|amount|[Amount](#schemaamount)|true|none|The payment amount and currency.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|billingAddress|[Address](#schemaaddress)|false|none|The address where to send the invoice.|
|blockedPaymentMethods|[string]|false|none|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|captureDelayHours|integer(int32)|false|none|The delay between the authorisation and scheduled auto-capture, specified in hours.|
|countryCode|string|false|none|The shopper's two-letter country code.|
|dateOfBirth|string(date)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|deliverAt|string(date-time)|false|none|The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|deliveryAddress|[Address](#schemaaddress)|false|none|The address where the purchased goods should be delivered.|
|description|string|false|none|A short description visible on the payment page.<br>Maximum length: 280 characters.|
|expiresAt|string(date-time)|false|none|The date when the payment link expires.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.<br><br>The maximum expiry date is 70 days after the payment link is created.<br><br>If not provided, the payment link expires 24 hours after it was created.|
|fundOrigin|[FundOrigin](#schemafundorigin)|false|none|The person or entity funding the money.|
|fundRecipient|[FundRecipient](#schemafundrecipient)|false|none|the person or entity receiving the money|
|id|string|true|read-only|A unique identifier of the payment link.|
|installmentOptions|object|false|none|A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|manualCapture|boolean|false|none|Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture).|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier for which the payment link is created.|
|merchantOrderReference|string|false|none|This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limitations:<br>* Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"<br>* Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"<br>* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when `storePaymentMethodMode` is set to **askForConsent** or **enabled**.<br>Possible values:<br>* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|reference|string|true|none|A reference that is used to uniquely identify the payment in future communications about the payment status.|
|requiredShopperFields|[string]|false|none|List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).<br><br>Possible values:<br>* **billingAddress** – The address where to send the invoice.<br>* **deliveryAddress** – The address where the purchased goods should be delivered.<br>* **shopperEmail** – The shopper's email address.<br>* **shopperName** – The shopper's full name.<br>* **telephoneNumber** – The shopper's phone number.<br>|
|returnUrl|string|false|none|Website URL used for redirection after payment is completed.<br>If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.|
|reusable|boolean|false|none|Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.|
|riskData|[RiskData](#schemariskdata)|false|none|Any risk-related settings to apply to the payment.|
|shopperEmail|string|false|none|The shopper's email address.|
|shopperLocale|string|false|none|The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.<br><br>For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#language).|
|shopperName|[Name](#schemaname)|false|none|The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|showRemovePaymentMethodButton|boolean|false|none|Set to **false** to hide the button that lets the shopper remove a stored payment method.|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splitCardFundingSources|boolean|false|none|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|status|string|true|none|Status of the payment link. Possible values:<br>* **active**: The link can be used to make payments.<br>* **expired**: The expiry date for the payment link has passed. Shoppers can no longer use the link to make payments.<br>* **completed**: The shopper completed the payment.<br>* **paymentPending**: The shopper is in the process of making the payment. Applies to payment methods with an asynchronous flow.|
|store|string|false|none|The physical store, for which this payment is processed.|
|storePaymentMethodMode|string|false|none|Indicates if the details of the payment method will be stored for the shopper. Possible values:<br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the Drop-in/Component shows a checkbox where the shopper can select to store their payment details for card payments.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent. <br> When set to **askForConsent** or **enabled**, you must also include the `recurringProcessingModel` parameter.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|themeId|string|false|none|A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area.|
|threeDS2RequestData|[CheckoutSessionThreeDS2RequestData](#schemacheckoutsessionthreeds2requestdata)|false|none|The cardholder phone number need to be part of the authentication message for payment data. It is a requirement for Visa Secure Authentication Data Field Mandate effective August 2024.|
|updatedAt|string(date-time)|false|none|The date when the payment link status was updated.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.|
|url|string|true|read-only|The URL at which the shopper can complete the payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|requiredShopperFields|billingAddress|
|requiredShopperFields|deliveryAddress|
|requiredShopperFields|shopperEmail|
|requiredShopperFields|shopperName|
|requiredShopperFields|telephoneNumber|
|status|active|
|status|completed|
|status|expired|
|status|paid|
|status|paymentPending|
|storePaymentMethodMode|askForConsent|
|storePaymentMethodMode|disabled|
|storePaymentMethodMode|enabled|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "apps": [
    {
      "appIdentifierInfo": {
        "androidPackageId": "string",
        "iosScheme": "string"
      },
      "id": "string",
      "name": "string"
    }
  ],
  "brand": "string",
  "brands": [
    "string"
  ],
  "configuration": {
    "property1": "string",
    "property2": "string"
  },
  "fundingSource": "credit",
  "group": {
    "name": "string",
    "paymentMethodData": "string",
    "type": "string"
  },
  "inputDetails": [
    {
      "configuration": {
        "property1": "string",
        "property2": "string"
      },
      "details": [
        {
          "configuration": {
            "property1": "string",
            "property2": "string"
          },
          "items": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "key": "string",
          "optional": true,
          "type": "string",
          "value": "string"
        }
      ],
      "inputDetails": [
        {
          "configuration": {
            "property1": "string",
            "property2": "string"
          },
          "items": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "key": "string",
          "optional": true,
          "type": "string",
          "value": "string"
        }
      ],
      "itemSearchUrl": "string",
      "items": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "key": "string",
      "optional": true,
      "type": "string",
      "value": "string"
    }
  ],
  "issuers": [
    {
      "disabled": false,
      "id": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "promoted": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[PaymentMethodUPIApps](#schemapaymentmethodupiapps)]|false|none|A list of apps for this payment method.|
|brand|string|false|none|Brand for the selected gift card. For example: plastix, hmclub.|
|brands|[string]|false|none|List of possible brands. For example: visa, mc.|
|configuration|object|false|none|The configuration of the payment method.|
|fundingSource|string|false|none|The funding source of the payment method.|
|group|[PaymentMethodGroup](#schemapaymentmethodgroup)|false|none|The group where this payment method belongs to.|
|inputDetails|[[InputDetail](#schemainputdetail)]|false|none|**Deprecated.** All input details to be provided to complete the payment with this payment method.|
|issuers|[[PaymentMethodIssuer](#schemapaymentmethodissuer)]|false|none|A list of issuers for this payment method.|
|name|string|false|none|The displayable name of this payment method.|
|promoted|boolean|false|none|Indicates whether this payment method should be promoted or not.|
|type|string|false|none|The unique payment method code.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|

<h2 id="tocS_PaymentMethodGroup">PaymentMethodGroup</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodgroup"></a>
<a id="schema_PaymentMethodGroup"></a>
<a id="tocSpaymentmethodgroup"></a>
<a id="tocspaymentmethodgroup"></a>

```json
{
  "name": "string",
  "paymentMethodData": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the group.|
|paymentMethodData|string|false|none|Echo data to be used if the payment method is displayed as part of this group.|
|type|string|false|none|The unique code of the group.|

<h2 id="tocS_PaymentMethodIssuer">PaymentMethodIssuer</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodissuer"></a>
<a id="schema_PaymentMethodIssuer"></a>
<a id="tocSpaymentmethodissuer"></a>
<a id="tocspaymentmethodissuer"></a>

```json
{
  "disabled": false,
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|A boolean value indicating whether this issuer is unavailable. Can be `true` whenever the issuer is offline.|
|id|string|true|none|The unique identifier of this issuer, to submit in requests to /payments.|
|name|string|true|none|A localized name of the issuer.|

<h2 id="tocS_PaymentMethodToStore">PaymentMethodToStore</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodtostore"></a>
<a id="schema_PaymentMethodToStore"></a>
<a id="tocSpaymentmethodtostore"></a>
<a id="tocspaymentmethodtostore"></a>

```json
{
  "brand": "string",
  "cvc": "string",
  "encryptedCard": "string",
  "encryptedCardNumber": "string",
  "encryptedExpiryMonth": "string",
  "encryptedExpiryYear": "string",
  "encryptedSecurityCode": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "holderName": "string",
  "number": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|Secondary brand of the card. For example: **plastix**, **hmclub**.|
|cvc|string|false|none|The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|encryptedCard|string|false|none|The encrypted card.|
|encryptedCardNumber|string|false|none|The encrypted card number.|
|encryptedExpiryMonth|string|false|none|The encrypted card expiry month.|
|encryptedExpiryYear|string|false|none|The encrypted card expiry year.|
|encryptedSecurityCode|string|false|none|The encrypted card verification code.|
|expiryMonth|string|false|none|The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|expiryYear|string|false|none|The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|holderName|string|false|none|The name of the card holder.|
|number|string|false|none|The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).|
|type|string|false|none|Set to **scheme**.|

<h2 id="tocS_PaymentMethodUPIApps">PaymentMethodUPIApps</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodupiapps"></a>
<a id="schema_PaymentMethodUPIApps"></a>
<a id="tocSpaymentmethodupiapps"></a>
<a id="tocspaymentmethodupiapps"></a>

```json
{
  "appIdentifierInfo": {
    "androidPackageId": "string",
    "iosScheme": "string"
  },
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appIdentifierInfo|[AppIdentifierInfo](#schemaappidentifierinfo)|false|none|The app identifier information containing iOS scheme and Android package ID.|
|id|string|true|none|The unique identifier of this app, to submit in requests to /payments.|
|name|string|true|none|A localized name of the app.|

<h2 id="tocS_PaymentMethodsRequest">PaymentMethodsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodsrequest"></a>
<a id="schema_PaymentMethodsRequest"></a>
<a id="tocSpaymentmethodsrequest"></a>
<a id="tocspaymentmethodsrequest"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "allowedPaymentMethods": [
    "string"
  ],
  "amount": {
    "currency": "str",
    "value": 0
  },
  "blockedPaymentMethods": [
    "string"
  ],
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "channel": "iOS",
  "countryCode": "string",
  "merchantAccount": "string",
  "order": {
    "orderData": "string",
    "pspReference": "string"
  },
  "shopperConversionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperLocale": "string",
  "shopperReference": "string",
  "splitCardFundingSources": false,
  "store": "string",
  "storeFiltrationMode": "exclusive",
  "telephoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|allowedPaymentMethods|[string]|false|none|List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"allowedPaymentMethods":["ideal","applepay"]`|
|amount|[Amount](#schemaamount)|false|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|blockedPaymentMethods|[string]|false|none|List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).<br><br>Example: `"blockedPaymentMethods":["ideal","applepay"]`|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|channel|string|false|none|The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values:<br>* iOS<br>* Android<br>* Web|
|countryCode|string|false|none|The shopper's country code.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|order|[EncryptedOrderData](#schemaencryptedorderdata)|false|none|The order information required for partial payments.|
|shopperConversionId|string|false|none|A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|splitCardFundingSources|boolean|false|none|Boolean value indicating whether the card payment method should be split into separate debit and credit options.|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|storeFiltrationMode|string|false|none|Specifies how payment methods should be filtered based on the `store` parameter:<br>  - **exclusive**: Only payment methods belonging to the specified `store` are returned.<br>  - **inclusive**: Payment methods from the `store` and those not associated with any other store are returned.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|iOS|
|channel|Android|
|channel|Web|
|storeFiltrationMode|exclusive|
|storeFiltrationMode|inclusive|
|storeFiltrationMode|skipFilter|

<h2 id="tocS_PaymentMethodsResponse">PaymentMethodsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodsresponse"></a>
<a id="schema_PaymentMethodsResponse"></a>
<a id="tocSpaymentmethodsresponse"></a>
<a id="tocspaymentmethodsresponse"></a>

```json
{
  "paymentMethods": [
    {
      "apps": [
        {
          "appIdentifierInfo": {
            "androidPackageId": "string",
            "iosScheme": "string"
          },
          "id": "string",
          "name": "string"
        }
      ],
      "brand": "string",
      "brands": [
        "string"
      ],
      "configuration": {
        "property1": "string",
        "property2": "string"
      },
      "fundingSource": "credit",
      "group": {
        "name": "string",
        "paymentMethodData": "string",
        "type": "string"
      },
      "inputDetails": [
        {
          "configuration": {
            "property1": "string",
            "property2": "string"
          },
          "details": [
            {
              "configuration": {
                "property1": "string",
                "property2": "string"
              },
              "items": [
                {
                  "id": "string",
                  "name": "string"
                }
              ],
              "key": "string",
              "optional": true,
              "type": "string",
              "value": "string"
            }
          ],
          "inputDetails": [
            {
              "configuration": {
                "property1": "string",
                "property2": "string"
              },
              "items": [
                {
                  "id": "string",
                  "name": "string"
                }
              ],
              "key": "string",
              "optional": true,
              "type": "string",
              "value": "string"
            }
          ],
          "itemSearchUrl": "string",
          "items": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "key": "string",
          "optional": true,
          "type": "string",
          "value": "string"
        }
      ],
      "issuers": [
        {
          "disabled": false,
          "id": "string",
          "name": "string"
        }
      ],
      "name": "string",
      "promoted": true,
      "type": "string"
    }
  ],
  "storedPaymentMethods": [
    {
      "bankAccountNumber": "string",
      "bankLocationId": "string",
      "brand": "string",
      "cashtag": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "holderName": "string",
      "iban": "string",
      "id": "string",
      "label": "string",
      "lastFour": "string",
      "name": "string",
      "networkTxReference": "string",
      "ownerName": "string",
      "shopperEmail": "string",
      "supportedRecurringProcessingModels": [
        "string"
      ],
      "supportedShopperInteractions": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethods|[[PaymentMethod](#schemapaymentmethod)]|false|none|Detailed list of payment methods required to generate payment forms.|
|storedPaymentMethods|[[StoredPaymentMethod](#schemastoredpaymentmethod)]|false|none|List of all stored payment methods.|

<h2 id="tocS_PaymentRefundRequest">PaymentRefundRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrefundrequest"></a>
<a id="schema_PaymentRefundRequest"></a>
<a id="tocSpaymentrefundrequest"></a>
<a id="tocspaymentrefundrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "capturePspReference": "string",
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "merchantRefundReason": "FRAUD",
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount that you want to refund. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|capturePspReference|string|false|none|This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the specific capture to refund.|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|merchantRefundReason|string \| null|false|none|The reason for the refund request.<br><br>Possible values:<br><br>* **FRAUD**<br><br>* **CUSTOMER REQUEST**<br><br>* **RETURN**<br><br>* **DUPLICATE**<br><br>* **OTHER**<br><br>|
|reference|string|false|none|Your reference for the refund request. Maximum length: 80 characters.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|store|string|false|none|The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails.|

#### Enumerated Values

|Property|Value|
|---|---|
|merchantRefundReason|FRAUD|
|merchantRefundReason|CUSTOMER REQUEST|
|merchantRefundReason|RETURN|
|merchantRefundReason|DUPLICATE|
|merchantRefundReason|OTHER|

<h2 id="tocS_PaymentRefundResponse">PaymentRefundResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrefundresponse"></a>
<a id="schema_PaymentRefundResponse"></a>
<a id="tocSpaymentrefundresponse"></a>
<a id="tocspaymentrefundresponse"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "capturePspReference": "string",
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "merchantAccount": "string",
  "merchantRefundReason": "FRAUD",
  "paymentPspReference": "string",
  "pspReference": "string",
  "reference": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "status": "received",
  "store": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The refund amount.|
|capturePspReference|string|false|none|This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the specific capture to refund.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|merchantRefundReason|string \| null|false|none|Your reason for the refund request.|
|paymentPspReference|string|true|none|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to refund. |
|pspReference|string|true|none|Adyen's 16-character reference associated with the refund request.|
|reference|string|false|none|Your reference for the refund request.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).|
|status|string|true|none|The status of your request. This will always have the value **received**.|
|store|string|false|none|The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails.|

#### Enumerated Values

|Property|Value|
|---|---|
|merchantRefundReason|FRAUD|
|merchantRefundReason|CUSTOMER REQUEST|
|merchantRefundReason|RETURN|
|merchantRefundReason|DUPLICATE|
|merchantRefundReason|OTHER|
|status|received|

<h2 id="tocS_PaymentRequest">PaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequest"></a>
<a id="schema_PaymentRequest"></a>
<a id="tocSpaymentrequest"></a>
<a id="tocspaymentrequest"></a>

```json
{
  "accountInfo": {
    "accountAgeIndicator": "notApplicable",
    "accountChangeDate": "1970-01-01T00:00:00Z",
    "accountChangeIndicator": "thisTransaction",
    "accountCreationDate": "1970-01-01T00:00:00Z",
    "accountType": "notApplicable",
    "addCardAttemptsDay": 0,
    "deliveryAddressUsageDate": "1970-01-01T00:00:00Z",
    "deliveryAddressUsageIndicator": "thisTransaction",
    "homePhone": "string",
    "mobilePhone": "string",
    "passwordChangeDate": "1970-01-01T00:00:00Z",
    "passwordChangeIndicator": "notApplicable",
    "pastTransactionsDay": 0,
    "pastTransactionsYear": 0,
    "paymentAccountAge": "1970-01-01T00:00:00Z",
    "paymentAccountIndicator": "notApplicable",
    "purchasesLast6Months": 0,
    "suspiciousActivity": true,
    "workPhone": "string"
  },
  "additionalAmount": {
    "currency": "str",
    "value": 0
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "authenticationData": {
    "attemptAuthentication": "always",
    "authenticationOnly": false,
    "threeDSRequestData": {
      "challengeWindowSize": "01",
      "dataOnly": "false",
      "nativeThreeDS": "preferred",
      "threeDSVersion": "2.1.0"
    }
  },
  "bankAccount": {
    "accountType": "balance",
    "bankAccountNumber": "string",
    "bankCity": "string",
    "bankLocationId": "string",
    "bankName": "string",
    "bic": "string",
    "countryCode": "string",
    "iban": "string",
    "ownerName": "string",
    "taxId": "string"
  },
  "billingAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "browserInfo": {
    "acceptHeader": "string",
    "colorDepth": 0,
    "javaEnabled": true,
    "javaScriptEnabled": true,
    "language": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "timeZoneOffset": 0,
    "userAgent": "string"
  },
  "captureDelayHours": 0,
  "channel": "iOS",
  "checkoutAttemptId": "string",
  "company": {
    "homepage": "string",
    "name": "string",
    "registrationNumber": "string",
    "registryLocation": "string",
    "taxId": "string",
    "type": "string"
  },
  "conversionId": "string",
  "countryCode": "string",
  "dateOfBirth": "1970-01-01T00:00:00Z",
  "dccQuote": {
    "account": "string",
    "accountType": "string",
    "baseAmount": {
      "currency": "str",
      "value": 0
    },
    "basePoints": 0,
    "buy": {
      "currency": "str",
      "value": 0
    },
    "interbank": {
      "currency": "str",
      "value": 0
    },
    "reference": "string",
    "sell": {
      "currency": "str",
      "value": 0
    },
    "signature": "string",
    "source": "string",
    "type": "string",
    "validTill": "1970-01-01T00:00:00Z"
  },
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "firstName": "string",
    "houseNumberOrName": "string",
    "lastName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryDate": "1970-01-01T00:00:00Z",
  "deviceFingerprint": "string",
  "enableOneClick": true,
  "enablePayOut": true,
  "enableRecurring": true,
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "entityType": "NaturalPerson",
  "fraudOffset": 0,
  "fundOrigin": {
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string"
  },
  "fundRecipient": {
    "IBAN": "string",
    "billingAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "paymentMethod": {
      "billingSequenceNumber": "string",
      "brand": "string",
      "checkoutAttemptId": "string",
      "cupsecureplus.smscode": "string",
      "cvc": "string",
      "encryptedCard": "string",
      "encryptedCardNumber": "string",
      "encryptedExpiryMonth": "string",
      "encryptedExpiryYear": "string",
      "encryptedPassword": "string",
      "encryptedSecurityCode": "string",
      "expiryMonth": "string",
      "expiryYear": "string",
      "fastlaneData": "string",
      "fundingSource": "credit",
      "holderName": "string",
      "networkPaymentReference": "string",
      "number": "string",
      "recurringDetailReference": "string",
      "sdkData": "string",
      "shopperNotificationReference": "string",
      "srcCorrelationId": "string",
      "srcDigitalCardId": "string",
      "srcScheme": "string",
      "srcTokenReference": "string",
      "storedPaymentMethodId": "string",
      "threeDS2SdkVersion": "string",
      "type": "scheme"
    },
    "shopperEmail": "string",
    "shopperName": {
      "firstName": "string",
      "lastName": "string"
    },
    "shopperReference": "string",
    "storedPaymentMethodId": "string",
    "subMerchant": {
      "city": "string",
      "country": "string",
      "mcc": "string",
      "name": "string",
      "taxId": "string"
    },
    "telephoneNumber": "string",
    "walletIdentifier": "string",
    "walletOwnerTaxId": "string",
    "walletPurpose": "identifiedBoleto"
  },
  "industryUsage": "delayedCharge",
  "installments": {
    "extra": 0,
    "plan": "bonus",
    "value": 0
  },
  "lineItems": [
    {
      "amountExcludingTax": 0,
      "amountIncludingTax": 0,
      "brand": "string",
      "color": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "itemCategory": "string",
      "manufacturer": "string",
      "marketplaceSellerId": "string",
      "productUrl": "string",
      "quantity": 0,
      "receiverEmail": "string",
      "riskCategory": "string",
      "size": "string",
      "sku": "string",
      "taxAmount": 0,
      "taxPercentage": 0,
      "upc": "string"
    }
  ],
  "localizedShopperStatement": {
    "property1": "string",
    "property2": "string"
  },
  "mandate": {
    "amount": "string",
    "amountRule": "max",
    "billingAttemptsRule": "on",
    "billingDay": "string",
    "count": "string",
    "endsAt": "string",
    "frequency": "adhoc",
    "remarks": "string",
    "startsAt": "string"
  },
  "mcc": "string",
  "merchantAccount": "string",
  "merchantOrderReference": "string",
  "merchantRiskIndicator": {
    "addressMatch": true,
    "deliveryAddressIndicator": "shipToBillingAddress",
    "deliveryEmail": "string",
    "deliveryEmailAddress": "string",
    "deliveryTimeframe": "electronicDelivery",
    "giftCardAmount": {
      "currency": "str",
      "value": 0
    },
    "giftCardCount": 0,
    "giftCardCurr": "string",
    "preOrderDate": "1970-01-01T00:00:00Z",
    "preOrderPurchase": true,
    "preOrderPurchaseInd": "string",
    "reorderItems": true,
    "reorderItemsInd": "string",
    "shipIndicator": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "mpiData": {
    "authenticationResponse": "Y",
    "cavv": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "directoryResponse": "A",
    "dsTransID": "string",
    "eci": "string",
    "riskScore": "string",
    "threeDSVersion": "string",
    "tokenAuthenticationVerificationValue": "string",
    "transStatusReason": "string",
    "xid": "string"
  },
  "opi": {
    "includeIssuerId": true,
    "includeTransToken": true
  },
  "order": {
    "orderData": "string",
    "pspReference": "string"
  },
  "orderReference": "string",
  "origin": "string",
  "paymentMethod": {
    "accountHolderType": "business",
    "bankAccountNumber": "string",
    "bankAccountType": "balance",
    "bankLocationId": "string",
    "checkoutAttemptId": "string",
    "encryptedBankAccountNumber": "string",
    "encryptedBankLocationId": "string",
    "ownerName": "string",
    "recurringDetailReference": "string",
    "sdkData": "string",
    "storedPaymentMethodId": "string",
    "transferInstrumentId": "string",
    "type": "ach"
  },
  "paymentValidations": {
    "name": {
      "status": "string"
    }
  },
  "platformChargebackLogic": {
    "behavior": "deductFromOneBalanceAccount",
    "costAllocationAccount": "string",
    "targetAccount": "string"
  },
  "recurringExpiry": "string",
  "recurringFrequency": "string",
  "recurringProcessingModel": "CardOnFile",
  "redirectFromIssuerMethod": "string",
  "redirectToIssuerMethod": "string",
  "reference": "string",
  "returnUrl": "string",
  "riskData": {
    "clientData": "string",
    "customFields": {
      "property1": "string",
      "property2": "string"
    },
    "fraudOffset": 0,
    "profileReference": "string"
  },
  "sessionValidity": "string",
  "shopperConversionId": "string",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperInteraction": "Ecommerce",
  "shopperLocale": "string",
  "shopperName": {
    "firstName": "string",
    "lastName": "string"
  },
  "shopperReference": "string",
  "shopperStatement": "string",
  "shopperTaxInfo": {
    "taxCountryCode": "st",
    "taxIdentificationNumber": "string"
  },
  "socialSecurityNumber": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ],
  "store": "string",
  "storePaymentMethod": true,
  "subMerchants": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "amount": {
        "currency": "str",
        "value": 0
      },
      "email": "string",
      "id": "string",
      "mcc": "string",
      "name": "string",
      "phoneNumber": "string",
      "registeredSince": "string",
      "taxId": "string",
      "url": "string"
    }
  ],
  "surcharge": {
    "value": 0
  },
  "telephoneNumber": "string",
  "thirdPartyTokenRedundancyInfo": {
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplateCode": "string"
  },
  "threeDS2RequestData": {
    "acctInfo": {
      "chAccAgeInd": "01",
      "chAccChange": "string",
      "chAccChangeInd": "01",
      "chAccPwChange": "string",
      "chAccPwChangeInd": "01",
      "chAccString": "string",
      "nbPurchaseAccount": "string",
      "paymentAccAge": "string",
      "paymentAccInd": "01",
      "provisionAttemptsDay": "string",
      "shipAddressUsage": "string",
      "shipAddressUsageInd": "01",
      "shipNameIndicator": "01",
      "suspiciousAccActivity": "01",
      "txnActivityDay": "str",
      "txnActivityYear": "str"
    },
    "acctType": "01",
    "acquirerBIN": "string",
    "acquirerMerchantID": "string",
    "addrMatch": "Y",
    "authenticationOnly": false,
    "challengeIndicator": "noPreference",
    "deviceRenderOptions": {
      "sdkInterface": "both",
      "sdkUiType": [
        "multiSelect"
      ]
    },
    "homePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "mcc": "string",
    "merchantName": "string",
    "messageVersion": "string",
    "mobilePhone": {
      "cc": "str",
      "subscriber": "string"
    },
    "notificationURL": "string",
    "payTokenInd": true,
    "paymentAuthenticationUseCase": "string",
    "purchaseInstalData": "str",
    "recurringExpiry": "string",
    "recurringFrequency": "stri",
    "sdkAppID": "string",
    "sdkEphemPubKey": {
      "crv": "string",
      "kty": "string",
      "x": "string",
      "y": "string"
    },
    "sdkMaxTimeout": 60,
    "sdkReferenceNumber": "string",
    "sdkTransID": "string",
    "threeDSCompInd": "string",
    "threeDSRequestorAuthenticationInd": "string",
    "threeDSRequestorAuthenticationInfo": {
      "threeDSReqAuthData": "string",
      "threeDSReqAuthMethod": "01",
      "threeDSReqAuthTimestamp": "stringstring"
    },
    "threeDSRequestorChallengeInd": "01",
    "threeDSRequestorID": "string",
    "threeDSRequestorName": "string",
    "threeDSRequestorPriorAuthenticationInfo": {
      "threeDSReqPriorAuthData": "string",
      "threeDSReqPriorAuthMethod": "01",
      "threeDSReqPriorAuthTimestamp": "stringstring",
      "threeDSReqPriorRef": "stringstringstringstringstringstring"
    },
    "threeDSRequestorURL": "string",
    "transType": "01",
    "transactionType": "goodsOrServicePurchase",
    "whiteListStatus": "string",
    "workPhone": {
      "cc": "str",
      "subscriber": "string"
    }
  },
  "threeDSAuthenticationOnly": false,
  "trustedShopper": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Shopper account information for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|additionalAmount|[Amount](#schemaamount)|false|none|If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
|additionalData|object|false|none|This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value.|
|amount|[Amount](#schemaamount)|true|none|The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|authenticationData|[AuthenticationData](#schemaauthenticationdata)|false|none|Data for 3DS authentication.|
|bankAccount|[CheckoutBankAccount](#schemacheckoutbankaccount)|false|none|The details of the bank account, from which the payment should be made.<br>> Either `bankAccount` or `card` field must be provided in a payment request.|
|billingAddress|[BillingAddress](#schemabillingaddress)|false|none|The address where to send the invoice.<br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>>* For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>>* For cross-border payouts to and from Canada.|
|browserInfo|[BrowserInfo](#schemabrowserinfo)|false|none|The shopper's browser information.<br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 2 redirect.|
|captureDelayHours|integer(int32)|false|none|The [delay between the authorization and automatic capture](https://docs.adyen.com/online-payments/capture?tab=delayed-individual_2#delayed-automatic-capture) of the payment, specified in hours.<br><br>Maximum value: **672** (28 days).|
|channel|string|false|none|The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br>* iOS<br>* Android<br>* Web|
|checkoutAttemptId|string|false|none|Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|company|[Company](#schemacompany)|false|none|Information regarding the company.|
|conversionId|string|false|none|**Deprecated.** Conversion ID that corresponds to the Id generated by the client SDK for tracking user payment journey.|
|countryCode|string|false|none|The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE|
|dateOfBirth|string(date-time)|false|none|The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD|
|dccQuote|[ForexQuote](#schemaforexquote)|false|none|The forex quote as returned in the response of the forex service.|
|deliverAt|string(date-time)|false|none|The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deliveryAddress|[DeliveryAddress](#schemadeliveryaddress)|false|none|The address where the purchased goods should be delivered.|
|deliveryDate|string(date-time)|false|none|**Deprecated.** The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|enableOneClick|boolean|false|none|When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).|
|enablePayOut|boolean|false|none|When true and `shopperReference` is provided, the payment details will be tokenized for payouts.|
|enableRecurring|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|[Enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/) that may be required for processing the payment and/or interchange savings can apply.|
|entityType|string|false|none|The type of the entity the payment is processed for.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|fundOrigin|[FundOrigin](#schemafundorigin)|false|none|The person or entity funding the money.|
|fundRecipient|[FundRecipient](#schemafundrecipient)|false|none|the person or entity receiving the money|
|industryUsage|string|false|none|The reason for the amount update. Possible values: <br>* **delayedCharge** <br>* **noShow** <br>* **installment**|
|installments|[Installments](#schemainstallments)|false|none|Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).|
|lineItems|[[LineItem](#schemalineitem)]|false|none|Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Riverty.|
|localizedShopperStatement|object|false|none|The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If this parameter is left empty, not provided, or not applicable (in case of cross-border transactions), then **shopperStatement** is used.<br><br>Currently, `localizedShopperStatement` is only supported for payments with Visa, Mastercard, JCB, Diners, and Discover.<br><br>**Supported characters**: Hiragana, Katakana, Kanji, and alphanumeric.|
|mandate|[Mandate](#schemamandate)|false|none|The mandate details to initiate recurring transaction.|
|mcc|string|false|none|The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|merchantOrderReference|string|false|none|You can use this reference to link multiple transactions to one another (for example, to track order authorization rate). For each billing cycle, this reference should be unique. After the first authorized payment attempt, do not reuse the reference. If you use this parameter, include it in all of the payment requests that you make. <br> We strongly recommend that you:<br>* Always include this parameter, so that you can benefit from linking payment requests to one another, in case of authorization retries. <br>* Additionally include the following parameters in the `additionalData` object: [`retry.orderAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-orderAttemptNumber), [`retry.chainAttemptNumber`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-chainAttemptNumber), and [`retry.skipRetry`](https://docs.adyen.com/api-explorer/Checkout/latest/post/sessions#request-additionalData-AdditionalDataRetry-retry-skipRetry)|
|merchantRiskIndicator|[MerchantRiskIndicator](#schemamerchantriskindicator)|false|none|Additional risk fields for 3D Secure 2.<br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.|
|metadata|object|false|none|Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
|mpiData|[ThreeDSecureData](#schemathreedsecuredata)|false|none|Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires).|
|opi|[OpiRequest](#schemaopirequest)|false|none|Configuration for Oracle Payment Interface (OPI) integrations.|
|order|[EncryptedOrderData](#schemaencryptedorderdata)|false|none|The order information required for partial payments.|
|orderReference|string|false|none|When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.|
|origin|string|false|none|> Required for browser-based (`channel` **Web**) 3D Secure 2 transactions.Set this to the origin URL of the page where you are rendering the Drop-in/Component. Do not include subdirectories and a trailing slash.|
|paymentMethod|[AchDetails](#schemaachdetails) \| [AffirmDetails](#schemaaffirmdetails) \| [AfterpayDetails](#schemaafterpaydetails) \| [AlmaDetails](#schemaalmadetails) \| [AmazonPayDetails](#schemaamazonpaydetails) \| [AncvDetails](#schemaancvdetails) \| [AndroidPayDetails](#schemaandroidpaydetails) \| [ApplePayDetails](#schemaapplepaydetails) \| [AuPayDetails](#schemaaupaydetails) \| [BacsDirectDebitDetails](#schemabacsdirectdebitdetails) \| [BillDeskDetails](#schemabilldeskdetails) \| [BlikDetails](#schemablikdetails) \| [CardDetails](#schemacarddetails) \| [CashAppDetails](#schemacashappdetails) \| [CellulantDetails](#schemacellulantdetails) \| [DBaraiDetails](#schemadbaraidetails) \| [DirectDebitAuDetails](#schemadirectdebitaudetails) \| [DokuDetails](#schemadokudetails) \| [DragonpayDetails](#schemadragonpaydetails) \| [EBankingFinlandDetails](#schemaebankingfinlanddetails) \| [EcontextVoucherDetails](#schemaecontextvoucherdetails) \| [EftDetails](#schemaeftdetails) \| [ExternalTokenDetails](#schemaexternaltokendetails) \| [FastlaneDetails](#schemafastlanedetails) \| [GenericIssuerPaymentMethodDetails](#schemagenericissuerpaymentmethoddetails) \| [GooglePayDetails](#schemagooglepaydetails) \| [IdealDetails](#schemaidealdetails) \| [KlarnaDetails](#schemaklarnadetails) \| [KlarnaNetworkDetails](#schemaklarnanetworkdetails) \| [MasterpassDetails](#schemamasterpassdetails) \| [MbwayDetails](#schemambwaydetails) \| [MobilePayDetails](#schemamobilepaydetails) \| [MolPayDetails](#schemamolpaydetails) \| [OpenInvoiceDetails](#schemaopeninvoicedetails) \| [PayByBankAISDirectDebitDetails](#schemapaybybankaisdirectdebitdetails) \| [PayByBankCADirectDebitDetails](#schemapaybybankcadirectdebitdetails) \| [PayByBankDetails](#schemapaybybankdetails) \| [PayPalDetails](#schemapaypaldetails) \| [PayPayDetails](#schemapaypaydetails) \| [PayToDetails](#schemapaytodetails) \| [PayUUpiDetails](#schemapayuupidetails) \| [PayWithGoogleDetails](#schemapaywithgoogledetails) \| [PaymentDetails](#schemapaymentdetails) \| [PixDetails](#schemapixdetails) \| [PixPayByBankDetails](#schemapixpaybybankdetails) \| [PseDetails](#schemapsedetails) \| [RakutenPayDetails](#schemarakutenpaydetails) \| [RatepayDetails](#schemaratepaydetails) \| [RivertyDetails](#schemarivertydetails) \| [SamsungPayDetails](#schemasamsungpaydetails) \| [SepaDirectDebitDetails](#schemasepadirectdebitdetails) \| [StoredPaymentMethodDetails](#schemastoredpaymentmethoddetails) \| [TwintDetails](#schematwintdetails) \| [UpiCollectDetails](#schemaupicollectdetails) \| [UpiIntentDetails](#schemaupiintentdetails) \| [UpiQrDetails](#schemaupiqrdetails) \| [VippsDetails](#schemavippsdetails) \| [VisaCheckoutDetails](#schemavisacheckoutdetails) \| [WeChatPayDetails](#schemawechatpaydetails) \| [WeChatPayMiniProgramDetails](#schemawechatpayminiprogramdetails) \| [ZipDetails](#schemazipdetails)|true|none|The type and required details of a payment method to use.|
|paymentValidations|[PaymentValidations](#schemapaymentvalidations)|false|none|The object that you can use to enable payment validations for a transaction.|
|platformChargebackLogic|[PlatformChargebackLogic](#schemaplatformchargebacklogic)|false|none|Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model).|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|recurringFrequency|string|false|none|Minimum number of days between authorisations. Only for 3D Secure 2.|
|recurringProcessingModel|string|false|none|Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|redirectFromIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting back from the issuer.|
|redirectToIssuerMethod|string|false|none|Specifies the redirect method (GET or POST) when redirecting to the issuer.|
|reference|string|true|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. To provide multiple references for one transaction, separate the reference values with the hyphen (`-`) character. We strongly recommend that you use a unique value for each transaction.<br>Maximum length: 80 characters.|
|returnUrl|string|true|none|The URL to return to in case of a redirection.<br>The format depends on the channel. <br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>Example: `https://your-company.example.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>Example: `my-app://your.package.name`<br><br>If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value.<br><br>We strongly recommend that you use a maximum of 1024 characters.<br><br>> The URL must not include personally identifiable information (PII), for example name or email address.|
|riskData|[RiskData](#schemariskdata)|false|none|Contains risk data, such as client-side data, used to identify risk for a transaction.|
|sessionValidity|string|false|none|The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.<br><br>For example: 2020-07-18T15:42:40.428+01:00|
|shopperConversionId|string|false|none|A unique ID to [connect the shopper to a single checkout session](https://docs.adyen.com/online-payments/checkout-settings#checkout-shopper-conversion-id) that uses multiple API requests. You can use this to get insights into conversion rates.|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.|
|shopperIP|string|false|none|The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication for all web and mobile integrations, if you did not include the `shopperEmail`. For native mobile integrations, the field is required to support cases where authentication is routed to the redirect flow. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).|
|shopperInteraction|string|false|none|Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.|
|shopperLocale|string|false|none|The language for the payment. The value combines the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code with the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) country code. For example, **nl-NL**.<br><br>When using Drop-in/Components, the specified language appears if your front-end global configuration does not set the `locale`.|
|shopperName|[ShopperName](#schemashoppername)|false|none|The shopper's full name.|
|shopperReference|string|false|none|Required for recurring payments. <br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br>> Your reference must not include personally identifiable information (PII), for example name or email address.|
|shopperStatement|string|false|none|The text to be shown on the shopper's bank statement.<br> We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br> Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.|
|shopperTaxInfo|[ShopperTaxInfo](#schemashoppertaxinfo)|false|none|**Deprecated.** The tax info of the shopper|
|socialSecurityNumber|string|false|none|The shopper's social security number.|
|splits|[[Split](#schemasplit)]|false|none|An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).|
|store|string|false|none|Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.|
|storePaymentMethod|boolean|false|none|When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).|
|subMerchants|[[SubMerchantInfo](#schemasubmerchantinfo)]|false|none|This field contains additional information on the submerchant, who is onboarded to an acquirer through a payment facilitator or aggregator|
|surcharge|[Surcharge](#schemasurcharge)|false|none|The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). When you apply surcharge, include the surcharge in the `amount.value` field.<br><br>Review our [Surcharge compliance guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how to comply with regulatory requirements when applying surcharge.|
|telephoneNumber|string|false|none|The shopper's telephone number.<br> The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.|
|thirdPartyTokenRedundancyInfo|[ThirdPartyTokenRedundancyInfo](#schemathirdpartytokenredundancyinfo)|false|none|Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.|
|threeDS2RequestData|[ThreeDS2RequestFields](#schemathreeds2requestfields)|false|none|Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation.|
|threeDSAuthenticationOnly|boolean|false|none|**Deprecated.** Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorisation.Default: **false**.|
|trustedShopper|boolean|false|none|Set to true if the payment should be routed to a trusted MID.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|iOS|
|channel|Android|
|channel|Web|
|entityType|NaturalPerson|
|entityType|CompanyName|
|industryUsage|delayedCharge|
|industryUsage|installment|
|industryUsage|noShow|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|shopperInteraction|Ecommerce|
|shopperInteraction|ContAuth|
|shopperInteraction|Moto|
|shopperInteraction|POS|

<h2 id="tocS_PaymentResponse">PaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponse"></a>
<a id="schema_PaymentResponse"></a>
<a id="tocSpaymentresponse"></a>
<a id="tocspaymentresponse"></a>

```json
{
  "action": {
    "paymentData": "string",
    "paymentMethodType": "string",
    "type": "await",
    "url": "string"
  },
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "donationToken": "string",
  "fraudResult": {
    "accountScore": 0,
    "results": [
      {
        "accountScore": 0,
        "checkId": 0,
        "name": "string"
      }
    ]
  },
  "merchantReference": "string",
  "opi": {
    "issuerId": "string",
    "transToken": "string"
  },
  "order": {
    "amount": {
      "currency": "str",
      "value": 0
    },
    "expiresAt": "string",
    "orderData": "string",
    "pspReference": "string",
    "reference": "string",
    "remainingAmount": {
      "currency": "str",
      "value": 0
    }
  },
  "paymentMethod": {
    "brand": "string",
    "type": "string"
  },
  "paymentValidations": {
    "name": {
      "rawResponse": {
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "middleName": "string",
        "status": "string"
      },
      "result": {
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "middleName": "string"
      },
      "status": "notPerformed"
    }
  },
  "pspReference": "string",
  "refusalReason": "string",
  "refusalReasonCode": "string",
  "resultCode": "AuthenticationFinished",
  "threeDS2ResponseData": {
    "acsChallengeMandated": "string",
    "acsOperatorID": "string",
    "acsReferenceNumber": "string",
    "acsSignedContent": "string",
    "acsTransID": "string",
    "acsURL": "string",
    "authenticationType": "string",
    "cardHolderInfo": "string",
    "cavvAlgorithm": "string",
    "challengeIndicator": "string",
    "dsReferenceNumber": "string",
    "dsTransID": "string",
    "exemptionIndicator": "string",
    "messageVersion": "string",
    "riskScore": "string",
    "sdkEphemPubKey": "string",
    "threeDSServerTransID": "string",
    "transStatus": "string",
    "transStatusReason": "string"
  },
  "threeDS2Result": {
    "authenticationValue": "string",
    "cavvAlgorithm": "string",
    "challengeCancel": "01",
    "dsTransID": "string",
    "eci": "string",
    "exemptionIndicator": "lowValue",
    "messageVersion": "string",
    "riskScore": "string",
    "threeDSRequestorChallengeInd": "01",
    "threeDSServerTransID": "string",
    "timestamp": "string",
    "transStatus": "string",
    "transStatusReason": "string",
    "whiteListStatus": "string"
  },
  "threeDSPaymentData": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[CheckoutAwaitAction](#schemacheckoutawaitaction) \| [CheckoutBankTransferAction](#schemacheckoutbanktransferaction) \| [CheckoutDelegatedAuthenticationAction](#schemacheckoutdelegatedauthenticationaction) \| [CheckoutNativeRedirectAction](#schemacheckoutnativeredirectaction) \| [CheckoutQrCodeAction](#schemacheckoutqrcodeaction) \| [CheckoutRedirectAction](#schemacheckoutredirectaction) \| [CheckoutSDKAction](#schemacheckoutsdkaction) \| [CheckoutThreeDS2Action](#schemacheckoutthreeds2action) \| [CheckoutVoucherAction](#schemacheckoutvoucheraction)|false|none|Action to be taken for completing the payment.|
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.|
|amount|[Amount](#schemaamount)|false|none|Authorised amount in the transaction.|
|donationToken|string|false|none|Donation Token containing payment details for Adyen Giving.|
|fraudResult|[FraudResult](#schemafraudresult)|false|none|The fraud result properties of the payment.|
|merchantReference|string|false|none|The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters.|
|opi|[OpiResponse](#schemaopiresponse)|false|none|Oracle Payment Interface (OPI) response fields such as `transToken` and `issuerId`.|
|order|[CheckoutOrderResponse](#schemacheckoutorderresponse)|false|none|Contains updated information regarding the order in case order information was provided in the request.|
|paymentMethod|[ResponsePaymentMethod](#schemaresponsepaymentmethod)|false|none|Details about the payment method used in the transaction. <br>Only returned if `resultCode` is **Authorised**.|
|paymentValidations|[PaymentValidationsResponse](#schemapaymentvalidationsresponse)|false|none|The object that contains the validation outcomes.<br>Only returned if `resultCode` is **Authorised** and if you have requested a payment validation in the request.|
|pspReference|string|false|none|Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.<br><br>> For payment methods that require a redirect or additional action, you will get this value in the `/payments/details` response.|
|refusalReason|string|false|none|If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|refusalReasonCode|string|false|none|Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).|
|resultCode|string|false|none|The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.<br>* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).<br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.<br>* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.<br>* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **PartiallyAuthorised** – The payment has been authorised for a partial amount.<br>This happens for card payments when the merchant supports Partial Authorisations and the cardholder has insufficient funds.<br>* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.<br>* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.<br>* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.<br>* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.<br>* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.|
|threeDS2ResponseData|[ThreeDS2ResponseData](#schemathreeds2responsedata)|false|none|Response of the 3D Secure 2 authentication.|
|threeDS2Result|[ThreeDS2Result](#schemathreeds2result)|false|none|Result of the 3D Secure 2 authentication.|
|threeDSPaymentData|string|false|none|When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`.|

#### Enumerated Values

|Property|Value|
|---|---|
|resultCode|AuthenticationFinished|
|resultCode|AuthenticationNotRequired|
|resultCode|Authorised|
|resultCode|Cancelled|
|resultCode|ChallengeShopper|
|resultCode|Error|
|resultCode|IdentifyShopper|
|resultCode|PartiallyAuthorised|
|resultCode|Pending|
|resultCode|PresentToShopper|
|resultCode|Received|
|resultCode|RedirectShopper|
|resultCode|Refused|
|resultCode|Success|

<h2 id="tocS_PaymentReversalRequest">PaymentReversalRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentreversalrequest"></a>
<a id="schema_PaymentReversalRequest"></a>
<a id="tocSpaymentreversalrequest"></a>
<a id="tocspaymentreversalrequest"></a>

```json
{
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "merchantAccount": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|reference|string|false|none|Your reference for the reversal request. Maximum length: 80 characters.|

<h2 id="tocS_PaymentReversalResponse">PaymentReversalResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentreversalresponse"></a>
<a id="schema_PaymentReversalResponse"></a>
<a id="tocSpaymentreversalresponse"></a>
<a id="tocspaymentreversalresponse"></a>

```json
{
  "merchantAccount": "string",
  "paymentPspReference": "string",
  "pspReference": "string",
  "reference": "string",
  "status": "received"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentPspReference|string|true|none|The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the payment to reverse. |
|pspReference|string|true|none|Adyen's 16-character reference associated with the reversal request.|
|reference|string|false|none|Your reference for the reversal request.|
|status|string|true|none|The status of your request. This will always have the value **received**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|received|

<h2 id="tocS_PaymentValidations">PaymentValidations</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidations"></a>
<a id="schema_PaymentValidations"></a>
<a id="tocSpaymentvalidations"></a>
<a id="tocspaymentvalidations"></a>

```json
{
  "name": {
    "status": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[PaymentValidationsNameRequest](#schemapaymentvalidationsnamerequest)|false|none|none|

<h2 id="tocS_PaymentValidationsNameRequest">PaymentValidationsNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidationsnamerequest"></a>
<a id="schema_PaymentValidationsNameRequest"></a>
<a id="tocSpaymentvalidationsnamerequest"></a>
<a id="tocspaymentvalidationsnamerequest"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Set to **requested** to request a [name validation](https://docs.adyen.com/payment-methods/cards/name-validation) to verify if the cardholder name provided by the shopper matches the cardholder name on file at the issuing bank.|

<h2 id="tocS_PaymentValidationsNameResponse">PaymentValidationsNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidationsnameresponse"></a>
<a id="schema_PaymentValidationsNameResponse"></a>
<a id="tocSpaymentvalidationsnameresponse"></a>
<a id="tocspaymentvalidationsnameresponse"></a>

```json
{
  "rawResponse": {
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "middleName": "string",
    "status": "string"
  },
  "result": {
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "middleName": "string"
  },
  "status": "notPerformed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawResponse|[PaymentValidationsNameResultRawResponse](#schemapaymentvalidationsnameresultrawresponse)|false|none|Contains the raw response(s) returned by the scheme for the name validation.|
|result|[PaymentValidationsNameResultResponse](#schemapaymentvalidationsnameresultresponse)|false|none|Contains the scheme-agnostic match values returned by Adyen.|
|status|string|false|none|Informs you if the name validation was performed. Possible values:<br><br>**performed**, **notPerformed**, **notSupported**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notPerformed|
|status|notSupported|
|status|performed|

<h2 id="tocS_PaymentValidationsNameResultRawResponse">PaymentValidationsNameResultRawResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidationsnameresultrawresponse"></a>
<a id="schema_PaymentValidationsNameResultRawResponse"></a>
<a id="tocSpaymentvalidationsnameresultrawresponse"></a>
<a id="tocspaymentvalidationsnameresultrawresponse"></a>

```json
{
  "firstName": "string",
  "fullName": "string",
  "lastName": "string",
  "middleName": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The raw first name validation result that Adyen received from the scheme. First name validation result is only returned for Visa.|
|fullName|string|false|none|The raw full name validation result that Adyen received from the scheme. Full name is the only field that is validated for Mastercard|
|lastName|string|false|none|The raw last name validation result that Adyen received from the scheme. Last name validation result is only returned for Visa.|
|middleName|string|false|none|The raw middle name validation result that Adyen received from the scheme. Middle name validation result is only returned for Visa.|
|status|string|false|none|The raw name validation status value that Adyen received from the scheme. Only returned for Visa.|

<h2 id="tocS_PaymentValidationsNameResultResponse">PaymentValidationsNameResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidationsnameresultresponse"></a>
<a id="schema_PaymentValidationsNameResultResponse"></a>
<a id="tocSpaymentvalidationsnameresultresponse"></a>
<a id="tocspaymentvalidationsnameresultresponse"></a>

```json
{
  "firstName": "string",
  "fullName": "string",
  "lastName": "string",
  "middleName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|Informs you if the first name your shopper provided matches the cardholder first name on file at the issuing bank. The first name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch**|
|fullName|string|false|none|Informs you if the full name your shopper provided matches the cardholder name on file at the issuing bank. The full name is the only field that is validated for Mastercard. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
|lastName|string|false|none|Informs you if the last name your shopper provided matches the cardholder last name on file at the issuing bank. The last name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch**|
|middleName|string|false|none|Informs you if the middle name your shopper provided matches the cardholder middle name on file at the issuing bank. The middle name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch**|

<h2 id="tocS_PaymentValidationsResponse">PaymentValidationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentvalidationsresponse"></a>
<a id="schema_PaymentValidationsResponse"></a>
<a id="tocSpaymentvalidationsresponse"></a>
<a id="tocspaymentvalidationsresponse"></a>

```json
{
  "name": {
    "rawResponse": {
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "middleName": "string",
      "status": "string"
    },
    "result": {
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "middleName": "string"
    },
    "status": "notPerformed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[PaymentValidationsNameResponse](#schemapaymentvalidationsnameresponse)|false|none|Object that contains the status and outcomes of the [name validation](https://docs.adyen.com/payment-methods/cards/name-validation).|

<h2 id="tocS_PaypalUpdateOrderRequest">PaypalUpdateOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaypalupdateorderrequest"></a>
<a id="schema_PaypalUpdateOrderRequest"></a>
<a id="tocSpaypalupdateorderrequest"></a>
<a id="tocspaypalupdateorderrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "deliveryAddress": {
    "city": "string",
    "country": "string",
    "firstName": "string",
    "houseNumberOrName": "string",
    "lastName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "deliveryMethods": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "selected": true,
      "type": "Shipping"
    }
  ],
  "discountAmount": {
    "currency": "str",
    "value": 0
  },
  "paymentData": "string",
  "pspReference": "string",
  "sessionId": "string",
  "shippingAmount": {
    "currency": "str",
    "value": 0
  },
  "taxTotal": {
    "amount": {
      "currency": "str",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The updated final payment amount. This amount is the item total plus the shipping costs of the selected `deliveryMethod`.|
|deliveryAddress|[DeliveryAddress](#schemadeliveryaddress)|false|none|The delivery address for this order.|
|deliveryMethods|[[DeliveryMethod](#schemadeliverymethod)]|false|none|The list of new delivery methods and the cost of each.|
|discountAmount|[Amount](#schemaamount)|false|none|The discount amount for this order.|
|paymentData|string|false|none|The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request.|
|pspReference|string|false|none|The original `pspReference` from the `/payments` response.|
|sessionId|string|false|none|The original `sessionId` from the `/sessions` response.|
|shippingAmount|[Amount](#schemaamount)|false|none|The shipping amount for this order.|
|taxTotal|[TaxTotal](#schemataxtotal)|false|none|Total tax amount from the order. |

<h2 id="tocS_PaypalUpdateOrderResponse">PaypalUpdateOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaypalupdateorderresponse"></a>
<a id="schema_PaypalUpdateOrderResponse"></a>
<a id="tocSpaypalupdateorderresponse"></a>
<a id="tocspaypalupdateorderresponse"></a>

```json
{
  "paymentData": "string",
  "status": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentData|string|true|none|The updated paymentData.|
|status|string|true|none|The status of the request. This indicates whether the order was successfully updated with PayPal.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|
|status|success|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "cc": "str",
  "subscriber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cc|string|false|none|Country code. Length: 1–3 digits.|
|subscriber|string|false|none|Subscriber number. Length: 4-15  digits.|

<h2 id="tocS_PickupInfo">PickupInfo</h2>
<!-- backwards compatibility -->
<a id="schemapickupinfo"></a>
<a id="schema_PickupInfo"></a>
<a id="tocSpickupinfo"></a>
<a id="tocspickupinfo"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "date": "1970-01-01",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city where the car is rented.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.locationCity`|
|countryCode|string|false|none|The country where the car is rented, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* maxLength: 2 characters<br>* **additionalData key:** `carRental.locationCountry`|
|date|string(date)|false|none|The pick-up date.<br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `carRental.checkOutDate`|
|stateOrProvince|string|false|none|The state or province where the car is rented.<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.locationStateProvince`|

<h2 id="tocS_PixDetails">PixDetails</h2>
<!-- backwards compatibility -->
<a id="schemapixdetails"></a>
<a id="schema_PixDetails"></a>
<a id="tocSpixdetails"></a>
<a id="tocspixdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "pixRecurring": {
    "billingDate": "string",
    "businessDayOnly": true,
    "endsAt": "string",
    "frequency": "weekly",
    "minAmount": {
      "currency": "str",
      "value": 0
    },
    "originalPspReference": "string",
    "recurringAmount": {
      "currency": "str",
      "value": 0
    },
    "recurringStatement": "string",
    "retryPolicy": true,
    "startsAt": "string"
  },
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "pix"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|pixRecurring|[PixRecurring](#schemapixrecurring)|false|none|none|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pix|

<h2 id="tocS_PixPayByBankDetails">PixPayByBankDetails</h2>
<!-- backwards compatibility -->
<a id="schemapixpaybybankdetails"></a>
<a id="schema_PixPayByBankDetails"></a>
<a id="tocSpixpaybybankdetails"></a>
<a id="tocspixpaybybankdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "deviceId": "string",
  "issuer": "string",
  "recurringDetailReference": "string",
  "riskSignals": {
    "confidenceScore": {
      "errors": [
        "string"
      ],
      "score": 0
    },
    "elapsedTimeSinceBoot": 0,
    "isRootedDevice": true,
    "language": "string",
    "osVersion": "string",
    "screenBrightness": 0,
    "screenDimensions": {
      "height": 0,
      "width": 0
    },
    "userTimeZoneOffset": 0
  },
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "paybybank_pix"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deviceId|string|false|none|none|
|issuer|string|false|none|none|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|riskSignals|[PixPayByBankRiskSignals](#schemapixpaybybankrisksignals)|false|none|none|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**paybybank_pix**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paybybank_pix|

<h2 id="tocS_PixPayByBankRiskSignals">PixPayByBankRiskSignals</h2>
<!-- backwards compatibility -->
<a id="schemapixpaybybankrisksignals"></a>
<a id="schema_PixPayByBankRiskSignals"></a>
<a id="tocSpixpaybybankrisksignals"></a>
<a id="tocspixpaybybankrisksignals"></a>

```json
{
  "confidenceScore": {
    "errors": [
      "string"
    ],
    "score": 0
  },
  "elapsedTimeSinceBoot": 0,
  "isRootedDevice": true,
  "language": "string",
  "osVersion": "string",
  "screenBrightness": 0,
  "screenDimensions": {
    "height": 0,
    "width": 0
  },
  "userTimeZoneOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|[ConfidenceScore](#schemaconfidencescore)|false|none|none|
|elapsedTimeSinceBoot|integer(int64)|false|none|none|
|isRootedDevice|boolean|false|none|none|
|language|string|false|none|none|
|osVersion|string|false|none|none|
|screenBrightness|integer(int32)|false|none|none|
|screenDimensions|[ScreenDimensions](#schemascreendimensions)|false|none|none|
|userTimeZoneOffset|integer(int32)|false|none|none|

<h2 id="tocS_PixRecurring">PixRecurring</h2>
<!-- backwards compatibility -->
<a id="schemapixrecurring"></a>
<a id="schema_PixRecurring"></a>
<a id="tocSpixrecurring"></a>
<a id="tocspixrecurring"></a>

```json
{
  "billingDate": "string",
  "businessDayOnly": true,
  "endsAt": "string",
  "frequency": "weekly",
  "minAmount": {
    "currency": "str",
    "value": 0
  },
  "originalPspReference": "string",
  "recurringAmount": {
    "currency": "str",
    "value": 0
  },
  "recurringStatement": "string",
  "retryPolicy": true,
  "startsAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingDate|string|false|none|The date on which the shopper's payment method will be charged, in YYYY-MM-DD format.|
|businessDayOnly|boolean|false|none|Flag used to define whether liquidation can happen only on business days|
|endsAt|string|false|none|End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency and the start date of the billing plan. If left blank, the subscription will continue indefinitely unless it is cancelled by the shopper.|
|frequency|string|false|none|The frequency at which the shopper will be charged.|
|minAmount|[Amount](#schemaamount)|false|none|For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app.|
|originalPspReference|string|false|none|The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you received after the billing date.|
|recurringAmount|[Amount](#schemaamount)|false|none|For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment.|
|recurringStatement|string|false|none|The text that that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters.|
|retryPolicy|boolean|false|none|When set to true, you can retry for failed recurring payments. The default value is true.|
|startsAt|string|false|none|Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction date.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|weekly|
|frequency|monthly|
|frequency|quarterly|
|frequency|half-yearly|
|frequency|yearly|

<h2 id="tocS_PlatformChargebackLogic">PlatformChargebackLogic</h2>
<!-- backwards compatibility -->
<a id="schemaplatformchargebacklogic"></a>
<a id="schema_PlatformChargebackLogic"></a>
<a id="tocSplatformchargebacklogic"></a>
<a id="tocsplatformchargebacklogic"></a>

```json
{
  "behavior": "deductFromOneBalanceAccount",
  "costAllocationAccount": "string",
  "targetAccount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|behavior|string|false|none|The method of handling the chargeback.<br><br>Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.|
|costAllocationAccount|string|false|none|The unique identifier of the balance account to which the chargeback fees are booked. By default, the chargeback fees are booked to your liable balance account.|
|targetAccount|string|false|none|The unique identifier of the balance account against which the disputed amount is booked.<br><br>Required if `behavior` is **deductFromOneBalanceAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|behavior|deductFromOneBalanceAccount|
|behavior|deductAccordingToSplitRatio|
|behavior|deductFromLiableAccount|

<h2 id="tocS_PseDetails">PseDetails</h2>
<!-- backwards compatibility -->
<a id="schemapsedetails"></a>
<a id="schema_PseDetails"></a>
<a id="tocSpsedetails"></a>
<a id="tocspsedetails"></a>

```json
{
  "bank": "string",
  "checkoutAttemptId": "string",
  "clientType": "string",
  "identification": "string",
  "identificationType": "string",
  "sdkData": "string",
  "type": "pse_payulatam"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bank|string|true|none|The shopper's bank.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|clientType|string|true|none|The client type.|
|identification|string|true|none|The identification code.|
|identificationType|string|true|none|The identification type.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pse_payulatam|

<h2 id="tocS_RakutenPayDetails">RakutenPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemarakutenpaydetails"></a>
<a id="schema_RakutenPayDetails"></a>
<a id="tocSrakutenpaydetails"></a>
<a id="tocsrakutenpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "rakutenpay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**rakutenpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rakutenpay|

<h2 id="tocS_RatepayDetails">RatepayDetails</h2>
<!-- backwards compatibility -->
<a id="schemaratepaydetails"></a>
<a id="schema_RatepayDetails"></a>
<a id="tocSratepaydetails"></a>
<a id="tocsratepaydetails"></a>

```json
{
  "billingAddress": "string",
  "checkoutAttemptId": "string",
  "deliveryAddress": "string",
  "personalDetails": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "ratepay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|string|false|none|The address where to send the invoice.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deliveryAddress|string|false|none|The address where the goods should be delivered.|
|personalDetails|string|false|none|Shopper name, date of birth, phone number, and email address.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**ratepay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ratepay|
|type|ratepay_directdebit|

<h2 id="tocS_Recurring">Recurring</h2>
<!-- backwards compatibility -->
<a id="schemarecurring"></a>
<a id="schema_Recurring"></a>
<a id="tocSrecurring"></a>
<a id="tocsrecurring"></a>

```json
{
  "contract": "ONECLICK",
  "recurringDetailName": "string",
  "recurringExpiry": "1970-01-01T00:00:00Z",
  "recurringFrequency": "string",
  "tokenService": "VISATOKENSERVICE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract|string|false|none|The type of recurring contract to be used.<br>Possible values:<br>* `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).<br>* `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).<br>* `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.<br>* `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).<br>* `EXTERNAL` - Use this when you store payment details and send the raw card number or network token directly in your API request.<br>|
|recurringDetailName|string|false|none|A descriptive name for this detail.|
|recurringExpiry|string(date-time)|false|none|Date after which no further authorisations shall be performed. Only for 3D Secure 2.|
|recurringFrequency|string|false|none|Minimum number of days between authorisations. Only for 3D Secure 2.|
|tokenService|string|false|none|The name of the token service.|

#### Enumerated Values

|Property|Value|
|---|---|
|contract|ONECLICK|
|contract|ONECLICK,RECURRING|
|contract|RECURRING|
|contract|PAYOUT|
|contract|EXTERNAL|
|tokenService|VISATOKENSERVICE|
|tokenService|MCTOKENSERVICE|
|tokenService|AMEXTOKENSERVICE|
|tokenService|TOKEN_SHARING|

<h2 id="tocS_RentalSurcharges">RentalSurcharges</h2>
<!-- backwards compatibility -->
<a id="schemarentalsurcharges"></a>
<a id="schema_RentalSurcharges"></a>
<a id="tocSrentalsurcharges"></a>
<a id="tocsrentalsurcharges"></a>

```json
{
  "fuel": 0,
  "insurance": 0,
  "oneWayDropOff": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fuel|integer(int64)|false|none|The fuel charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.fuelCharges`|
|insurance|integer(int64)|false|none|Any insurance charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.insuranceCharges`|
|oneWayDropOff|integer(int64)|false|none|The charge for not returning a car to the original rental location, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.oneWayDropOffCharges`|

<h2 id="tocS_ResponseAdditionalData3DSecure">ResponseAdditionalData3DSecure</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldata3dsecure"></a>
<a id="schema_ResponseAdditionalData3DSecure"></a>
<a id="tocSresponseadditionaldata3dsecure"></a>
<a id="tocsresponseadditionaldata3dsecure"></a>

```json
{
  "cardHolderInfo": "string",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "scaExemptionRequested": "string",
  "threeds2.cardEnrolled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolderInfo|string|false|none|Information provided by the issuer to the cardholder. If this field is present, you need to display this information to the cardholder. |
|cavv|string|false|none|The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication session, as a Base64-encoded 20-byte array.|
|cavvAlgorithm|string|false|none|The CAVV algorithm used.|
|scaExemptionRequested|string|false|none|Shows the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that Adyen requested for the payment.<br><br> Possible values:<br>* **lowValue** <br>* **secureCorporate** <br>* **trustedBeneficiary** <br>* **transactionRiskAnalysis** |
|threeds2.cardEnrolled|boolean|false|none|Indicates whether a card is enrolled for 3D Secure 2.|

<h2 id="tocS_ResponseAdditionalDataBillingAddress">ResponseAdditionalDataBillingAddress</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatabillingaddress"></a>
<a id="schema_ResponseAdditionalDataBillingAddress"></a>
<a id="tocSresponseadditionaldatabillingaddress"></a>
<a id="tocsresponseadditionaldatabillingaddress"></a>

```json
{
  "billingAddress.city": "string",
  "billingAddress.country": "string",
  "billingAddress.houseNumberOrName": "string",
  "billingAddress.postalCode": "string",
  "billingAddress.stateOrProvince": "string",
  "billingAddress.street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress.city|string|false|none|The billing address city passed in the payment request.|
|billingAddress.country|string|false|none|The billing address country passed in the payment request.<br><br>Example: NL|
|billingAddress.houseNumberOrName|string|false|none|The billing address house number or name passed in the payment request.|
|billingAddress.postalCode|string|false|none|The billing address postal code passed in the payment request.<br><br>Example: 1011 DJ|
|billingAddress.stateOrProvince|string|false|none|The billing address state or province passed in the payment request.<br><br>Example: NH|
|billingAddress.street|string|false|none|The billing address street passed in the payment request.|

<h2 id="tocS_ResponseAdditionalDataCard">ResponseAdditionalDataCard</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatacard"></a>
<a id="schema_ResponseAdditionalDataCard"></a>
<a id="tocSresponseadditionaldatacard"></a>
<a id="tocsresponseadditionaldatacard"></a>

```json
{
  "cardAltID": "string",
  "cardBin": "string",
  "cardHolderName": "string",
  "cardIssuingBank": "string",
  "cardIssuingCountry": "string",
  "cardIssuingCurrency": "string",
  "cardPaymentMethod": "string",
  "cardProductId": "string",
  "cardSummary": "string",
  "issuerBin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardAltID|string|false|none|This is an ALT ID (alternate ID) mapped to the Card PAN.<br><br>> Returned only in case of Ecommerce Card Payment in India|
|cardBin|string|false|none|The first six digits of the card number.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.<br><br>Example: 521234|
|cardHolderName|string|false|none|The cardholder name passed in the payment request.|
|cardIssuingBank|string|false|none|The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.|
|cardIssuingCountry|string|false|none|The country where the card was issued.<br><br>Example: US|
|cardIssuingCurrency|string|false|none|The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard. <br><br>Example: USD|
|cardPaymentMethod|string|false|none|The card payment method used for the transaction.<br><br>Example: amex|
|cardProductId|string|false|none|The Card Product ID represents the type of card following card scheme product definitions and can be returned for Adyen Acquiring service level payments.<br><br>Example values Visa:<br>* **A** - Visa Traditional<br>* **B** - Visa Traditional Rewards<br>* **C** - Visa Signature<br>* **D** - Visa Signature Preferred<br>* **F** - Visa Classic<br><br>Example values Mastercard:<br>* **MCC** - Mastercard Card<br>* **MCE** - Mastercard Electronic Card<br>* **MCF** - Mastercard Corporate Fleet Card<br>* **MCG** - Gold Mastercard Card<br>* **MCH** - Mastercard Premium Charge<br>* **MCI** - Mastercard Select Debit<br>|
|cardSummary|string|false|none|The last four digits of a card number.<br><br>> Returned only in case of a card payment.|
|issuerBin|string|false|none|The first eight digits of the card number. Only returned if the card number is 16 digits or more.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.<br><br>Example: 52123423|

<h2 id="tocS_ResponseAdditionalDataCommon">ResponseAdditionalDataCommon</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatacommon"></a>
<a id="schema_ResponseAdditionalDataCommon"></a>
<a id="tocSresponseadditionaldatacommon"></a>
<a id="tocsresponseadditionaldatacommon"></a>

```json
{
  "acquirerAccountCode": "string",
  "acquirerCode": "string",
  "acquirerReference": "string",
  "alias": "string",
  "aliasType": "string",
  "authCode": "string",
  "authorisationMid": "string",
  "authorisedAmountCurrency": "string",
  "authorisedAmountValue": "string",
  "avsResult": "string",
  "avsResultRaw": "string",
  "bic": "string",
  "coBrandedWith": "string",
  "cvcResult": "1 Matches",
  "cvcResultRaw": "M",
  "dsTransID": "string",
  "eci": "string",
  "expiryDate": "string",
  "extraCostsCurrency": "string",
  "extraCostsValue": "string",
  "fraudCheck-[itemNr]-[FraudCheckname]": "string",
  "fraudManualReview": "string",
  "fraudResultType": "AMBER",
  "fraudRiskLevel": "veryLow",
  "fundingSource": "string",
  "fundsAvailability": "string",
  "inferredRefusalReason": "string",
  "isCardCommercial": "string",
  "issuerCountry": "string",
  "liabilityShift": "string",
  "mcBankNetReferenceNumber": "string",
  "merchantAdviceCode": "string",
  "merchantReference": "string",
  "networkProcessingMode": "string",
  "networkTxReference": "string",
  "ownerName": "string",
  "paymentAccountReference": "string",
  "paymentMethod": "string",
  "paymentMethodVariant": "string",
  "payoutEligible": "string",
  "realtimeAccountUpdaterStatus": "string",
  "receiptFreeText": "string",
  "recurring.contractTypes": "string",
  "recurring.firstPspReference": "string",
  "recurring.recurringDetailReference": "string",
  "recurring.shopperReference": "string",
  "recurringProcessingModel": "CardOnFile",
  "referred": "string",
  "refusalReasonRaw": "string",
  "requestAmount": "string",
  "requestCurrencyCode": "string",
  "shopperInteraction": "string",
  "shopperReference": "string",
  "terminalId": "string",
  "threeDAuthenticated": "string",
  "threeDAuthenticatedResponse": "string",
  "threeDOffered": "string",
  "threeDOfferedResponse": "string",
  "threeDSVersion": "string",
  "tokenization.shopperReference": "string",
  "tokenization.store.operationType": "created",
  "tokenization.storedPaymentMethodId": "string",
  "transactionLinkId": "string",
  "visaTransactionId": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerAccountCode|string|false|none|The name of the Adyen acquirer account.<br><br>Example: PayPalSandbox_TestAcquirer<br><br>> Only relevant for PayPal transactions.|
|acquirerCode|string|false|none|The name of the acquirer processing the payment request.<br><br>Example: TestPmmAcquirer|
|acquirerReference|string|false|none|The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.<br><br>Example: 7C9N3FNBKT9|
|alias|string|false|none|The Adyen alias of the card.<br><br>Example: H167852639363479|
|aliasType|string|false|none|The type of the card alias.<br><br>Example: Default|
|authCode|string|false|none|Authorisation code:<br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.<br><br>Example: 58747|
|authorisationMid|string|false|none|Merchant ID known by the acquirer.|
|authorisedAmountCurrency|string|false|none|The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|authorisedAmountValue|string|false|none|Value of the amount authorised.<br><br>This amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).|
|avsResult|string|false|none|The AVS result code of the payment, which provides information about the outcome of the AVS check.<br><br>For possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).|
|avsResultRaw|string|false|none|Raw AVS result received from the acquirer, where available.<br><br>Example: D|
|bic|string|false|none|BIC of a bank account.<br><br>Example: TESTNL01<br><br>> Only relevant for SEPA Direct Debit transactions.|
|coBrandedWith|string|false|none|Includes the co-branded card information.|
|cvcResult|string|false|none|The result of CVC verification.|
|cvcResultRaw|string|false|none|The raw result of CVC verification.|
|dsTransID|string|false|none|Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.|
|eci|string|false|none|The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.<br><br>Example: 02|
|expiryDate|string|false|none|The expiry date on the card.<br><br>Example: 6/2016<br><br>> Returned only in case of a card payment.|
|extraCostsCurrency|string|false|none|The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.<br><br>Example: EUR|
|extraCostsValue|string|false|none|The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.|
|fraudCheck-[itemNr]-[FraudCheckname]|string|false|none|The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.|
|fraudManualReview|string|false|none|Indicates if the payment is sent to manual review.|
|fraudResultType|string|false|none|The fraud result properties of the payment. Possible values:<br>* AMBER<br>* GREEN<br>* RED<br><br>|
|fraudRiskLevel|string|false|none|The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh<br><br>|
|fundingSource|string|false|none|Information regarding the funding type of the card. The possible return values are:<br>* CHARGE<br>* CREDIT<br>* DEBIT<br>* PREPAID<br>* PREPAID_RELOADABLE<br><br>* PREPAID_NONRELOADABLE<br>* DEFFERED_DEBIT<br><br>> This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.<br><br>For receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**.|
|fundsAvailability|string|false|none|Indicates availability of funds.<br><br>Visa:<br>* "I" (fast funds are supported)<br>* "N" (otherwise)<br><br>Mastercard:<br>* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)<br>* "N" (otherwise)<br><br>> Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or "D".|
|inferredRefusalReason|string|false|none|Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".<br><br>Possible values:<br><br>* 3D Secure Mandated<br>* Closed Account<br>* ContAuth Not Supported<br>* CVC Mandated<br>* Ecommerce Not Allowed<br>* Crossborder Not Supported<br>* Card Updated<br><br>* Low Authrate Bin<br>* Non-reloadable prepaid card|
|isCardCommercial|string|false|none|Indicates if the card is used for business purposes only.|
|issuerCountry|string|false|none|The issuing country of the card based on the BIN list that Adyen maintains.<br><br>Example: JP|
|liabilityShift|string|false|none|A Boolean value indicating whether a liability shift was offered for this payment.|
|mcBankNetReferenceNumber|string|false|none|The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.<br><br>> Contact Support Team to enable this field.|
|merchantAdviceCode|string|false|none|The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If present, the MAC contains information about why the payment failed, and whether it can be retried.<br><br>For more information see [Mastercard Merchant Advice Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes).|
|merchantReference|string|false|none|The reference provided for the transaction.|
|networkProcessingMode|string|false|none|Indicates the processing flow.<br><br>Possible values:<br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. <br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.|
|networkTxReference|string|false|none|Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID.|
|ownerName|string|false|none|The owner name of a bank account.<br><br>Only relevant for SEPA Direct Debit transactions.|
|paymentAccountReference|string|false|none|The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.|
|paymentMethod|string|false|none|The payment method used in the transaction.|
|paymentMethodVariant|string|false|none|The Adyen sub-variant of the payment method used for the payment request.<br><br>For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).<br><br>Example: mcpro|
|payoutEligible|string|false|none|Indicates whether a payout is eligible or not for this card.<br><br>Visa:<br>* "Y"<br>* "N"<br><br>Mastercard:<br>* "Y" (domestic and cross-border)<br><br>* "D" (only domestic)<br>* "N" (no MoneySend)<br>* "U" (unknown)|
|realtimeAccountUpdaterStatus|string|false|none|The response code from the Real Time Account Updater service.<br><br>Possible return values are:<br>* CardChanged<br>* CardExpiryChanged<br>* CloseAccount<br><br>* ContactCardAccountHolder|
|receiptFreeText|string|false|none|Message to be displayed on the terminal.|
|recurring.contractTypes|string|false|none|The recurring contract types applicable to the transaction.|
|recurring.firstPspReference|string|false|none|The `pspReference`, of the first recurring payment that created the recurring detail.<br><br>This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.|
|recurring.recurringDetailReference|string|false|none|**Deprecated.** The reference that uniquely identifies the recurring transaction.|
|recurring.shopperReference|string|false|none|**Deprecated.** The provided reference of the shopper for a recurring transaction.|
|recurringProcessingModel|string|false|none|The processing model used for the recurring transaction.|
|referred|string|false|none|If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true|
|refusalReasonRaw|string|false|none|Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED|
|requestAmount|string|false|none|The amount of the payment request.|
|requestCurrencyCode|string|false|none|The currency of the payment request.|
|shopperInteraction|string|false|none|The shopper interaction type of the payment request.<br><br>Example: Ecommerce|
|shopperReference|string|false|none|The shopperReference passed in the payment request.<br><br>Example: AdyenTestShopperXX|
|terminalId|string|false|none|The terminal ID used in a point-of-sale payment.<br><br>Example: 06022622|
|threeDAuthenticated|string|false|none|A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true|
|threeDAuthenticatedResponse|string|false|none|The raw 3DS authentication result from the card issuer.<br><br>Example: N|
|threeDOffered|string|false|none|A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true|
|threeDOfferedResponse|string|false|none|The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y|
|threeDSVersion|string|false|none|The 3D Secure 2 version.|
|tokenization.shopperReference|string|false|none|The reference for the shopper that you sent when tokenizing the payment details.|
|tokenization.store.operationType|string|false|none|The operation performed on the token. Possible values:<br><br>* **created**: the token has been created.<br>* **updated**: the existing token has been updated.<br>* **alreadyExisting**: the details have already been stored.<br>|
|tokenization.storedPaymentMethodId|string|false|none|The reference that uniquely identifies tokenized payment details.|
|transactionLinkId|string|false|none|Returned in the response for Mastercard payments.<br><br>This contains the Mastercard Transaction Link Identifier (TLID).|
|visaTransactionId|string|false|none|The `visaTransactionId`, has a fixed length of 15 numeric characters.<br><br>> Contact Support Team to enable this field.|
|xid|string|false|none|The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. <br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA=|

#### Enumerated Values

|Property|Value|
|---|---|
|fraudResultType|AMBER|
|fraudResultType|GREEN|
|fraudResultType|RED|
|fraudRiskLevel|veryLow|
|fraudRiskLevel|low|
|fraudRiskLevel|medium|
|fraudRiskLevel|high|
|fraudRiskLevel|veryHigh|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|
|tokenization.store.operationType|created|
|tokenization.store.operationType|updated|
|tokenization.store.operationType|alreadyExisting|

<h2 id="tocS_ResponseAdditionalDataDomesticError">ResponseAdditionalDataDomesticError</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatadomesticerror"></a>
<a id="schema_ResponseAdditionalDataDomesticError"></a>
<a id="tocSresponseadditionaldatadomesticerror"></a>
<a id="tocsresponseadditionaldatadomesticerror"></a>

```json
{
  "domesticRefusalReasonRaw": "string",
  "domesticShopperAdvice": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domesticRefusalReasonRaw|string|false|none|The reason the transaction was declined, given by the local issuer. <br>Currently available for merchants in Japan.|
|domesticShopperAdvice|string|false|none|The action the shopper should take, in a local language. <br>Currently available in Japanese, for merchants in Japan.|

<h2 id="tocS_ResponseAdditionalDataInstallments">ResponseAdditionalDataInstallments</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatainstallments"></a>
<a id="schema_ResponseAdditionalDataInstallments"></a>
<a id="tocSresponseadditionaldatainstallments"></a>
<a id="tocsresponseadditionaldatainstallments"></a>

```json
{
  "installmentPaymentData.installmentType": "string",
  "installmentPaymentData.option[itemNr].annualPercentageRate": "string",
  "installmentPaymentData.option[itemNr].firstInstallmentAmount": "string",
  "installmentPaymentData.option[itemNr].installmentFee": "string",
  "installmentPaymentData.option[itemNr].interestRate": "string",
  "installmentPaymentData.option[itemNr].maximumNumberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].minimumNumberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].numberOfInstallments": "string",
  "installmentPaymentData.option[itemNr].subsequentInstallmentAmount": "string",
  "installmentPaymentData.option[itemNr].totalAmountDue": "string",
  "installmentPaymentData.paymentOptions": "string",
  "installments.value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installmentPaymentData.installmentType|string|false|none|Type of installment. The value of `installmentType` should be **IssuerFinanced**.|
|installmentPaymentData.option[itemNr].annualPercentageRate|string|false|none|Annual interest rate.|
|installmentPaymentData.option[itemNr].firstInstallmentAmount|string|false|none|First Installment Amount in minor units.|
|installmentPaymentData.option[itemNr].installmentFee|string|false|none|Installment fee amount in minor units.|
|installmentPaymentData.option[itemNr].interestRate|string|false|none|Interest rate for the installment period.|
|installmentPaymentData.option[itemNr].maximumNumberOfInstallments|string|false|none|Maximum number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].minimumNumberOfInstallments|string|false|none|Minimum number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].numberOfInstallments|string|false|none|Total number of installments possible for this payment.|
|installmentPaymentData.option[itemNr].subsequentInstallmentAmount|string|false|none|Subsequent Installment Amount in minor units.|
|installmentPaymentData.option[itemNr].totalAmountDue|string|false|none|Total amount in minor units.|
|installmentPaymentData.paymentOptions|string|false|none|Possible values:<br>* PayInInstallmentsOnly<br>* PayInFullOnly<br>* PayInFullOrInstallments|
|installments.value|string|false|none|The number of installments that the payment amount should be charged with.<br><br>Example: 5<br>> Only relevant for card payments in countries that support installments.|

<h2 id="tocS_ResponseAdditionalDataNetworkTokens">ResponseAdditionalDataNetworkTokens</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatanetworktokens"></a>
<a id="schema_ResponseAdditionalDataNetworkTokens"></a>
<a id="tocSresponseadditionaldatanetworktokens"></a>
<a id="tocsresponseadditionaldatanetworktokens"></a>

```json
{
  "networkToken.available": "string",
  "networkToken.bin": "string",
  "networkToken.tokenSummary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkToken.available|string|false|none|Indicates whether a network token is available for the specified card.|
|networkToken.bin|string|false|none|The Bank Identification Number of a tokenized card, which is the first six digits of a card number.|
|networkToken.tokenSummary|string|false|none|The last four digits of a network token.|

<h2 id="tocS_ResponseAdditionalDataOpi">ResponseAdditionalDataOpi</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldataopi"></a>
<a id="schema_ResponseAdditionalDataOpi"></a>
<a id="tocSresponseadditionaldataopi"></a>
<a id="tocsresponseadditionaldataopi"></a>

```json
{
  "opi.transToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opi.transToken|string|false|none|Returned in the response if you included `opi.includeTransToken: true` in an ecommerce payment request. This contains an Oracle Payment Interface token that you can store in your Oracle Opera database to identify tokenized ecommerce transactions. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).|

<h2 id="tocS_ResponseAdditionalDataSepa">ResponseAdditionalDataSepa</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldatasepa"></a>
<a id="schema_ResponseAdditionalDataSepa"></a>
<a id="tocSresponseadditionaldatasepa"></a>
<a id="tocsresponseadditionaldatasepa"></a>

```json
{
  "sepadirectdebit.dateOfSignature": "string",
  "sepadirectdebit.mandateId": "string",
  "sepadirectdebit.sepadirectdebit.dueDate": "string",
  "sepadirectdebit.sequenceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sepadirectdebit.dateOfSignature|string|false|none|The transaction signature date.<br><br>Format: yyyy-MM-dd|
|sepadirectdebit.mandateId|string|false|none|Its value corresponds to the pspReference value of the transaction.|
|sepadirectdebit.sepadirectdebit.dueDate|string|false|none|The date that the the shopper's bank account is charged.|
|sepadirectdebit.sequenceType|string|false|none|This field can take one of the following values:<br>* OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.<br><br>* First: (FRST) Initial/first collection in a series of direct debit instructions.<br>* Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor.<br>* Final: (FNAL) Last/final collection in a series of direct debit instructions.<br><br>Example: OOFF|

<h2 id="tocS_ResponseAdditionalDataSwish">ResponseAdditionalDataSwish</h2>
<!-- backwards compatibility -->
<a id="schemaresponseadditionaldataswish"></a>
<a id="schema_ResponseAdditionalDataSwish"></a>
<a id="tocSresponseadditionaldataswish"></a>
<a id="tocsresponseadditionaldataswish"></a>

```json
{
  "swish.payerAlias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|swish.payerAlias|string|false|none|A Swish shopper's telephone number.|

<h2 id="tocS_ResponsePaymentMethod">ResponsePaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepaymentmethod"></a>
<a id="schema_ResponsePaymentMethod"></a>
<a id="tocSresponsepaymentmethod"></a>
<a id="tocsresponsepaymentmethod"></a>

```json
{
  "brand": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand|string|false|none|The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**.|
|type|string|false|none|The `paymentMethod.type` value used in the request.|

<h2 id="tocS_ReturnInfo">ReturnInfo</h2>
<!-- backwards compatibility -->
<a id="schemareturninfo"></a>
<a id="schema_ReturnInfo"></a>
<a id="tocSreturninfo"></a>
<a id="tocsreturninfo"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "date": "1970-01-01",
  "locationId": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city where the car must be returned.<br>* Format: ASCII<br>* maxLength: 18 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnCity`|
|countryCode|string|false|none|The country where the car must be returned, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br>* maxLength: 2 characters<br>* **additionalData key:** `carRental.returnCountry`|
|date|string(date)|false|none|The date by which the car must be returned.<br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `carRental.returnDate`|
|locationId|string|false|none|The agency code, phone number, or address abbreviation.<br>* Format: ASCII<br>* maxLength: 10 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnLocationId`|
|stateOrProvince|string|false|none|The state or province where the car must be returned.<br>* Format: ASCII<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnStateProvince`|

<h2 id="tocS_RiskData">RiskData</h2>
<!-- backwards compatibility -->
<a id="schemariskdata"></a>
<a id="schema_RiskData"></a>
<a id="tocSriskdata"></a>
<a id="tocsriskdata"></a>

```json
{
  "clientData": "string",
  "customFields": {
    "property1": "string",
    "property2": "string"
  },
  "fraudOffset": 0,
  "profileReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientData|string|false|none|Contains client-side data, like the device fingerprint, cookies, and specific browser settings.|
|customFields|object|false|none|Any custom fields used as part of the input to configured risk rules.|
|fraudOffset|integer(int32)|false|none|An integer value that is added to the normal fraud score. The value can be either positive or negative.|
|profileReference|string|false|none|The risk profile to assign to this payment. When left empty, the merchant-level account's default risk profile will be applied.|

<h2 id="tocS_RivertyDetails">RivertyDetails</h2>
<!-- backwards compatibility -->
<a id="schemarivertydetails"></a>
<a id="schema_RivertyDetails"></a>
<a id="tocSrivertydetails"></a>
<a id="tocsrivertydetails"></a>

```json
{
  "billingAddress": "string",
  "checkoutAttemptId": "string",
  "deliveryAddress": "string",
  "deviceFingerprint": "string",
  "iban": "string",
  "personalDetails": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "string",
  "type": "riverty"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|string|false|none|The address where to send the invoice.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|deliveryAddress|string|false|none|The address where the goods should be delivered.|
|deviceFingerprint|string|false|none|A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).|
|iban|string|false|none|The iban number of the customer |
|personalDetails|string|false|none|Shopper name, date of birth, phone number, and email address.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The payment method subtype.|
|type|string|true|none|**riverty**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|riverty|
|type|riverty_account|
|type|riverty_installments|
|type|sepadirectdebit_riverty|

<h2 id="tocS_Room">Room</h2>
<!-- backwards compatibility -->
<a id="schemaroom"></a>
<a id="schema_Room"></a>
<a id="tocSroom"></a>
<a id="tocsroom"></a>

```json
{
  "numberOfNights": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfNights|integer(int32)|false|none|The total number of nights the room is booked for.<br>* Format: Numeric<br>* Must be a number between 1 and 99<br>* **additionalData key:** `lodging.room[N].numberOfNights`|
|rate|integer(int64)|false|none|Room rate per night, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.room[N].rate`|

<h2 id="tocS_SDKEphemPubKey">SDKEphemPubKey</h2>
<!-- backwards compatibility -->
<a id="schemasdkephempubkey"></a>
<a id="schema_SDKEphemPubKey"></a>
<a id="tocSsdkephempubkey"></a>
<a id="tocssdkephempubkey"></a>

```json
{
  "crv": "string",
  "kty": "string",
  "x": "string",
  "y": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crv|string|false|none|The `crv` value as received from the 3D Secure 2 SDK.|
|kty|string|false|none|The `kty` value as received from the 3D Secure 2 SDK.|
|x|string|false|none|The `x` value as received from the 3D Secure 2 SDK.|
|y|string|false|none|The `y` value as received from the 3D Secure 2 SDK.|

<h2 id="tocS_SamsungPayDetails">SamsungPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemasamsungpaydetails"></a>
<a id="schema_SamsungPayDetails"></a>
<a id="tocSsamsungpaydetails"></a>
<a id="tocssamsungpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "recurringDetailReference": "string",
  "samsungPayToken": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "samsungpay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|samsungPayToken|string|true|none|The payload you received from the Samsung Pay SDK response.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**samsungpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|samsungpay|

<h2 id="tocS_ScreenDimensions">ScreenDimensions</h2>
<!-- backwards compatibility -->
<a id="schemascreendimensions"></a>
<a id="schema_ScreenDimensions"></a>
<a id="tocSscreendimensions"></a>
<a id="tocsscreendimensions"></a>

```json
{
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_SepaDirectDebitDetails">SepaDirectDebitDetails</h2>
<!-- backwards compatibility -->
<a id="schemasepadirectdebitdetails"></a>
<a id="schema_SepaDirectDebitDetails"></a>
<a id="tocSsepadirectdebitdetails"></a>
<a id="tocssepadirectdebitdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "dueDate": "string",
  "iban": "string",
  "ownerName": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "transferInstrumentId": "string",
  "type": "sepadirectdebit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|dueDate|string|false|none|The date that the the shopper's bank account is charged.|
|iban|string|false|none|The International Bank Account Number (IBAN).|
|ownerName|string|false|none|The name of the bank account holder.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|transferInstrumentId|string|false|none|The unique identifier of your user's verified transfer instrument, which you can use to top up their balance accounts.|
|type|string|false|none|**sepadirectdebit**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sepadirectdebit|
|type|sepadirectdebit_amazonpay|

<h2 id="tocS_SepaDirectDebitDonations">SepaDirectDebitDonations</h2>
<!-- backwards compatibility -->
<a id="schemasepadirectdebitdonations"></a>
<a id="schema_SepaDirectDebitDonations"></a>
<a id="tocSsepadirectdebitdonations"></a>
<a id="tocssepadirectdebitdonations"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "sepadirectdebit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**sepadirectdebit**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sepadirectdebit|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
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
|additionalData|object|false|none|Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_SessionResultResponse">SessionResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemasessionresultresponse"></a>
<a id="schema_SessionResultResponse"></a>
<a id="tocSsessionresultresponse"></a>
<a id="tocssessionresultresponse"></a>

```json
{
  "additionalData": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "payments": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "paymentMethod": {
        "brand": "string",
        "type": "string"
      },
      "pspReference": "string",
      "resultCode": "Authorised"
    }
  ],
  "reference": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|object|false|none|Contains additional information about the payment. Some fields are included only if you enable them. To enable these fields in your Customer Area, go to **Developers** > **Additional data**.|
|id|string|false|none|A unique identifier of the session.|
|payments|[[Payment](#schemapayment)]|false|none|A list of all authorised payments done for this session.|
|reference|string|false|none|The unique reference that you provided in the original `/sessions` request. This identifies the payment and is used in all communication with you about the payment status.|
|status|string|false|none|The status of the session. The status included in the response doesn't get updated. Don't make the request again to check for payment status updates.<br><br>Possible values:<br>* **completed**: the shopper completed the payment, and the payment was authorized.<br>* **paymentPending**: the shopper is in the process of making the payment. This applies to payment methods with an asynchronous flow, like voucher payments where the shopper completes the payment in a physical shop.<br>* **refused**: the session has been refused, because of too many refused payment attempts. The shopper can no longer complete the payment with this session.<br>* **canceled**: the shopper canceled the payment.<br>* **expired**: the session expired. The shopper can no longer complete the payment with this session. By default, the session expires one hour after it is created.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|canceled|
|status|completed|
|status|expired|
|status|paymentPending|
|status|refused|

<h2 id="tocS_ShopperInteractionDevice">ShopperInteractionDevice</h2>
<!-- backwards compatibility -->
<a id="schemashopperinteractiondevice"></a>
<a id="schema_ShopperInteractionDevice"></a>
<a id="tocSshopperinteractiondevice"></a>
<a id="tocsshopperinteractiondevice"></a>

```json
{
  "locale": "string",
  "os": "string",
  "osVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|Locale on the shopper interaction device.|
|os|string|false|none|Operating system running on the shopper interaction device.|
|osVersion|string|false|none|Version of the operating system on the shopper interaction device.|

<h2 id="tocS_ShopperName">ShopperName</h2>
<!-- backwards compatibility -->
<a id="schemashoppername"></a>
<a id="schema_ShopperName"></a>
<a id="tocSshoppername"></a>
<a id="tocsshoppername"></a>

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The first name.|
|lastName|string|true|none|The last name.|

<h2 id="tocS_ShopperTaxInfo">ShopperTaxInfo</h2>
<!-- backwards compatibility -->
<a id="schemashoppertaxinfo"></a>
<a id="schema_ShopperTaxInfo"></a>
<a id="tocSshoppertaxinfo"></a>
<a id="tocsshoppertaxinfo"></a>

```json
{
  "taxCountryCode": "st",
  "taxIdentificationNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxCountryCode|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code associated with the provided tax identification number.<br>Currently used only for Indian PA-CB tax verification, when applicable.|
|taxIdentificationNumber|string|true|none|The shopper’s tax identification number.|

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
{
  "account": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "description": "string",
  "reference": "string",
  "type": "AcquiringFees"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.<br><br>* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.<br>* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.|
|amount|[SplitAmount](#schemasplitamount)|false|none|The amount of the split item.<br><br>* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).<br>* Required if `type` is **BalanceAccount**, **Commission**, **Surcharge**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.|
|description|string|false|none|Your description for the split item.|
|reference|string|false|none|Your unique reference for the part of the payment booked to the specified `account`.<br><br>This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).<br><br>For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.|
|type|string|true|none|The part of the payment you want to book to the specified `account`.<br><br>Possible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):<br>* **BalanceAccount**: Books part of the payment (specified in `amount`) to the specified `account`.<br>* Transaction fees types that you can book to the specified `account`:<br>   * **AcquiringFees**: The aggregated amount of the interchange and scheme fees.<br>   * **PaymentFee**: The aggregated amount of all transaction fees.<br>   * **AdyenFees**: The aggregated amount of Adyen's commission and markup fees.<br>   * **AdyenCommission**: The transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **AdyenMarkup**: The transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **Interchange**: The fees paid to the issuer for each payment made with the card network.<br>   * **SchemeFee**: The fees paid to the card scheme for using their network. <br>* **Commission**: Your platform's commission on the payment (specified in `amount`), booked to your liable balance account.<br>* **Remainder**: The amount left over after a currency conversion, booked to the specified `account`.<br>* **Surcharge**: The payment acceptance fee imposed by the card scheme or debit network provider, paid by your user's customer.<br>* **TopUp**: Allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.<br>* **VAT**: The value-added tax charged on the payment, booked to your platforms liable balance account.<br>* **Default**: In very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.<br><br>Possible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **MarketPlace**, **PaymentFee**, **VAT**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AcquiringFees|
|type|AdyenCommission|
|type|AdyenFees|
|type|AdyenMarkup|
|type|BalanceAccount|
|type|Commission|
|type|Default|
|type|Interchange|
|type|MarketPlace|
|type|PaymentFee|
|type|Remainder|
|type|SchemeFee|
|type|Surcharge|
|type|Tip|
|type|TopUp|
|type|VAT|

<h2 id="tocS_SplitAmount">SplitAmount</h2>
<!-- backwards compatibility -->
<a id="schemasplitamount"></a>
<a id="schema_SplitAmount"></a>
<a id="tocSsplitamount"></a>
<a id="tocssplitamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.|
|value|integer(int64)|true|none|The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_StandalonePaymentCancelRequest">StandalonePaymentCancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemastandalonepaymentcancelrequest"></a>
<a id="schema_StandalonePaymentCancelRequest"></a>
<a id="tocSstandalonepaymentcancelrequest"></a>
<a id="tocsstandalonepaymentcancelrequest"></a>

```json
{
  "applicationInfo": {
    "adyenLibrary": {
      "name": "string",
      "version": "string"
    },
    "adyenPaymentSource": {
      "name": "string",
      "version": "string"
    },
    "externalPlatform": {
      "integrator": "string",
      "name": "string",
      "version": "string"
    },
    "merchantApplication": {
      "name": "string",
      "version": "string"
    },
    "merchantDevice": {
      "os": "string",
      "osVersion": "string",
      "reference": "string"
    },
    "shopperInteractionDevice": {
      "locale": "string",
      "os": "string",
      "osVersion": "string"
    }
  },
  "enhancedSchemeData": {
    "airline": {
      "agency": {
        "invoiceNumber": "string",
        "planName": "string"
      },
      "boardingFee": 0,
      "code": "string",
      "computerizedReservationSystem": "string",
      "customerReferenceNumber": "string",
      "designatorCode": "string",
      "documentType": "string",
      "flightDate": "1970-01-01T00:00:00Z",
      "legs": [
        {
          "carrierCode": "string",
          "classOfTravel": "string",
          "dateOfTravel": "1970-01-01T00:00:00Z",
          "departureAirportCode": "string",
          "departureTax": 0,
          "destinationAirportCode": "string",
          "fareBasisCode": "string",
          "flightNumber": "string",
          "stopOverCode": "string"
        }
      ],
      "passengerName": "string",
      "passengers": [
        {
          "dateOfBirth": "1970-01-01",
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "travellerType": "string"
        }
      ],
      "ticket": {
        "issueAddress": "string",
        "issueDate": "1970-01-01",
        "number": "string"
      },
      "travelAgency": {
        "code": "string",
        "name": "string"
      }
    },
    "carRental": {
      "customerServicePhoneNumber": "string",
      "noShow": true,
      "pickupInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "stateOrProvince": "string"
      },
      "rateType": "daily",
      "rentalAgreementNumber": "string",
      "rentalClassId": "string",
      "rentalDays": 0,
      "rentalRate": 0,
      "rentalSurcharges": {
        "fuel": 0,
        "insurance": 0,
        "oneWayDropOff": 0
      },
      "renterName": "string",
      "returnInfo": {
        "city": "string",
        "countryCode": "string",
        "date": "1970-01-01",
        "locationId": "string",
        "stateOrProvince": "string"
      },
      "taxExempt": true
    },
    "levelTwoThree": {
      "customerReferenceNumber": "string",
      "destination": {
        "countryCode": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dutyAmount": 0,
      "freightAmount": 0,
      "itemDetailLines": [
        {
          "commodityCode": "string",
          "description": "string",
          "discountAmount": 0,
          "productCode": "string",
          "quantity": 0,
          "totalAmount": 0,
          "unitOfMeasure": "string",
          "unitPrice": 0
        }
      ],
      "orderDate": "1970-01-01",
      "shipFromPostalCode": "string",
      "totalTaxAmount": 0
    },
    "lodging": {
      "checkInDate": "1970-01-01",
      "checkOutDate": "1970-01-01",
      "customerServicePhoneNumber": "string",
      "fireSafetyCompliance": true,
      "folio": {
        "cashAdvances": 0,
        "number": "string"
      },
      "foodBeverageCharges": 0,
      "lodgingChargeType": "advanceDeposit",
      "noShow": true,
      "prepaidExpenses": 0,
      "propertyPhoneNumber": "string",
      "renterName": "string",
      "rooms": [
        {
          "numberOfNights": 0,
          "rate": 0
        }
      ],
      "totalRoomTax": 0,
      "totalTax": 0
    },
    "temporaryServices": {
      "employeeName": "string",
      "endDate": "1970-01-01",
      "hourRate": 0,
      "hoursWorked": 0,
      "jobDescription": "string",
      "serviceRequestor": "string",
      "startDate": "1970-01-01"
    }
  },
  "merchantAccount": "string",
  "paymentReference": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationInfo|[ApplicationInfo](#schemaapplicationinfo)|false|none|Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).|
|enhancedSchemeData|[EnhancedSchemeData](#schemaenhancedschemedata)|false|none|Enhanced scheme data that may be required for processing the payment. For example, airline information.|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentReference|string|true|none|The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel.|
|reference|string|false|none|Your reference for the cancel request. Maximum length: 80 characters.|

<h2 id="tocS_StandalonePaymentCancelResponse">StandalonePaymentCancelResponse</h2>
<!-- backwards compatibility -->
<a id="schemastandalonepaymentcancelresponse"></a>
<a id="schema_StandalonePaymentCancelResponse"></a>
<a id="tocSstandalonepaymentcancelresponse"></a>
<a id="tocsstandalonepaymentcancelresponse"></a>

```json
{
  "merchantAccount": "string",
  "paymentReference": "string",
  "pspReference": "string",
  "reference": "string",
  "status": "received"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account that is used to process the payment.|
|paymentReference|string|true|none|The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment to cancel.|
|pspReference|string|true|none|Adyen's 16-character reference associated with the cancel request.|
|reference|string|false|none|Your reference for the cancel request.|
|status|string|true|none|The status of your request. This will always have the value **received**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|received|

<h2 id="tocS_StoredPaymentMethod">StoredPaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemastoredpaymentmethod"></a>
<a id="schema_StoredPaymentMethod"></a>
<a id="tocSstoredpaymentmethod"></a>
<a id="tocsstoredpaymentmethod"></a>

```json
{
  "bankAccountNumber": "string",
  "bankLocationId": "string",
  "brand": "string",
  "cashtag": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "holderName": "string",
  "iban": "string",
  "id": "string",
  "label": "string",
  "lastFour": "string",
  "name": "string",
  "networkTxReference": "string",
  "ownerName": "string",
  "shopperEmail": "string",
  "supportedRecurringProcessingModels": [
    "string"
  ],
  "supportedShopperInteractions": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountNumber|string|false|none|The bank account number (without separators).|
|bankLocationId|string|false|none|The location id of the bank. The field value is `nil` in most cases.|
|brand|string|false|none|The brand of the card.|
|cashtag|string|false|none|The shopper’s Cash App Pay Cashtag.|
|expiryMonth|string|false|none|The two-digit month when the card expires|
|expiryYear|string|false|none|The last two digits of the year the card expires. For example, **22** for the year 2022.|
|holderName|string|false|none|The name of the payment method holder.|
|iban|string|false|none|The IBAN of the bank account.|
|id|string|false|none|A unique identifier of this stored payment method.|
|label|string|false|none|The shopper’s issuer account label|
|lastFour|string|false|none|The last four digits of the PAN.|
|name|string|false|none|The display name of the stored payment method.|
|networkTxReference|string|false|none|Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID.|
|ownerName|string|false|none|The name of the bank account holder.|
|shopperEmail|string|false|none|The shopper’s email address.|
|supportedRecurringProcessingModels|[string]|false|none|The supported recurring processing models for this stored payment method.|
|supportedShopperInteractions|[string]|false|none|The supported shopper interactions for this stored payment method.|
|type|string|false|none|The type of payment method.|

<h2 id="tocS_StoredPaymentMethodDetails">StoredPaymentMethodDetails</h2>
<!-- backwards compatibility -->
<a id="schemastoredpaymentmethoddetails"></a>
<a id="schema_StoredPaymentMethodDetails"></a>
<a id="tocSstoredpaymentmethoddetails"></a>
<a id="tocsstoredpaymentmethoddetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "alipay_plus"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|alipay_plus|
|type|alipay_plus_alipay_cn|
|type|alipay_plus_alipay_hk|
|type|alipay_plus_dana|
|type|alipay_plus_gcash|
|type|alipay_plus_kakaopay|
|type|alipay_plus_kplus|
|type|alipay_plus_naverpay|
|type|alipay_plus_rabbitlinepay|
|type|alipay_plus_tosspay|
|type|alipay_plus_touchngo|
|type|alipay_plus_truemoney|
|type|bcmc_mobile|
|type|bcmc_mobile_QR|
|type|bcmc_mobile_app|
|type|momo_wallet|
|type|momo_wallet_app|
|type|revolutpay|
|type|paymaya_wallet|
|type|grabpay_SG|
|type|grabpay_MY|
|type|grabpay_TH|
|type|grabpay_ID|
|type|grabpay_VN|
|type|grabpay_PH|
|type|oxxo|
|type|gcash|
|type|dana|
|type|kakaopay|
|type|truemoney|
|type|paysafecard|
|type|gopay_wallet|

<h2 id="tocS_StoredPaymentMethodRequest">StoredPaymentMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoredpaymentmethodrequest"></a>
<a id="schema_StoredPaymentMethodRequest"></a>
<a id="tocSstoredpaymentmethodrequest"></a>
<a id="tocsstoredpaymentmethodrequest"></a>

```json
{
  "merchantAccount": "string",
  "opi": {
    "includeIssuerId": true,
    "includeTransToken": true
  },
  "paymentMethod": {
    "brand": "string",
    "cvc": "string",
    "encryptedCard": "string",
    "encryptedCardNumber": "string",
    "encryptedExpiryMonth": "string",
    "encryptedExpiryYear": "string",
    "encryptedSecurityCode": "string",
    "expiryMonth": "string",
    "expiryYear": "string",
    "holderName": "string",
    "number": "string",
    "type": "string"
  },
  "recurringProcessingModel": "CardOnFile",
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|opi|[OpiRequest](#schemaopirequest)|false|none|Configuration for Oracle Payment Interface (OPI) integrations.|
|paymentMethod|[PaymentMethodToStore](#schemapaymentmethodtostore)|true|none|Contains the information required to store a payment method.|
|recurringProcessingModel|string|true|none|Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.<br>|
|shopperEmail|string|false|none|The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.|
|shopperIP|string|false|none|The IP address of a shopper.|
|shopperReference|string|true|none|A unique identifier for the shopper (for example, user ID or account ID).|

#### Enumerated Values

|Property|Value|
|---|---|
|recurringProcessingModel|CardOnFile|
|recurringProcessingModel|Subscription|
|recurringProcessingModel|UnscheduledCardOnFile|

<h2 id="tocS_StoredPaymentMethodResource">StoredPaymentMethodResource</h2>
<!-- backwards compatibility -->
<a id="schemastoredpaymentmethodresource"></a>
<a id="schema_StoredPaymentMethodResource"></a>
<a id="tocSstoredpaymentmethodresource"></a>
<a id="tocsstoredpaymentmethodresource"></a>

```json
{
  "alias": "string",
  "aliasType": "string",
  "brand": "string",
  "cardBin": "string",
  "expiryMonth": "string",
  "expiryYear": "string",
  "externalResponseCode": "string",
  "externalTokenReference": "string",
  "holderName": "string",
  "iban": "string",
  "id": "string",
  "issuerName": "string",
  "lastFour": "string",
  "mandate": {
    "accountIdType": "string",
    "amount": "string",
    "amountRule": "max",
    "billingAttemptsRule": "on",
    "billingDay": "string",
    "count": "string",
    "currency": "string",
    "endsAt": "string",
    "frequency": "adhoc",
    "mandateId": "string",
    "maskedAccountId": "string",
    "minAmount": "string",
    "previousMandateId": "string",
    "providerId": "string",
    "purposeCode": "string",
    "recurringAmount": "string",
    "recurringStatement": "string",
    "remarks": "string",
    "retryPolicy": "true",
    "startsAt": "string",
    "status": "string",
    "txVariant": "string"
  },
  "name": "string",
  "networkTxReference": "string",
  "opi": {
    "issuerId": "string",
    "transToken": "string"
  },
  "ownerName": "string",
  "shopperEmail": "string",
  "shopperReference": "string",
  "supportedRecurringProcessingModels": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|The alias of the credit card number.<br><br>Applies only to recurring contracts storing credit card details|
|aliasType|string|false|none|The alias type of the credit card number.<br><br>Applies only to recurring contracts storing credit card details.|
|brand|string|false|none|The brand of the card.|
|cardBin|string|false|none|The bank identification number (BIN) of the card.|
|expiryMonth|string|false|none|The month the card expires.|
|expiryYear|string|false|none|The last two digits of the year the card expires. For example, **22** for the year 2022.|
|externalResponseCode|string|false|none|The response code returned by an external system (for example after a provisioning operation).|
|externalTokenReference|string|false|none|The token reference of a linked token in an external system (for example a network token reference).|
|holderName|string|false|none|The unique payment method code.|
|iban|string|false|none|The IBAN of the bank account.|
|id|string|false|none|A unique identifier of this stored payment method.|
|issuerName|string|false|none|The name of the issuer of token or card.|
|lastFour|string|false|none|The last four digits of the PAN.|
|mandate|[TokenMandate](#schematokenmandate)|false|none|Mandate details for the stored payment method.|
|name|string|false|none|The display name of the stored payment method.|
|networkTxReference|string|false|none|Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID.|
|opi|[OpiResponse](#schemaopiresponse)|false|none|Oracle Payment Interface (OPI) response fields such as `transToken` and `issuerId`.|
|ownerName|string|false|none|The name of the bank account holder.|
|shopperEmail|string|false|none|The shopper’s email address.|
|shopperReference|string|false|none|Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br>> Your reference must not include personally identifiable information (PII) such as name or email address.|
|supportedRecurringProcessingModels|[string]|false|none|Defines a recurring payment type.<br>Allowed values:<br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.|
|type|string|false|none|The type of payment method.|

<h2 id="tocS_SubInputDetail">SubInputDetail</h2>
<!-- backwards compatibility -->
<a id="schemasubinputdetail"></a>
<a id="schema_SubInputDetail"></a>
<a id="tocSsubinputdetail"></a>
<a id="tocssubinputdetail"></a>

```json
{
  "configuration": {
    "property1": "string",
    "property2": "string"
  },
  "items": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "key": "string",
  "optional": true,
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|Configuration parameters for the required input.|
|items|[[Item](#schemaitem)]|false|none|In case of a select, the items to choose from.|
|key|string|false|none|The value to provide in the result.|
|optional|boolean|false|none|True if this input is optional to provide.|
|type|string|false|none|The type of the required input.|
|value|string|false|none|The value can be pre-filled, if available.|

<h2 id="tocS_SubMerchant">SubMerchant</h2>
<!-- backwards compatibility -->
<a id="schemasubmerchant"></a>
<a id="schema_SubMerchant"></a>
<a id="tocSsubmerchant"></a>
<a id="tocssubmerchant"></a>

```json
{
  "city": "string",
  "country": "string",
  "mcc": "string",
  "name": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the sub-merchant's address.<br>* Format: Alphanumeric<br>* Maximum length: 13 characters|
|country|string|false|none|The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil. <br>* Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)<br>* Fixed length: 3 characters|
|mcc|string|false|none|The sub-merchant's 4-digit Merchant Category Code (MCC). <br>* Format: Numeric<br>* Fixed length: 4 digits|
|name|string|false|none|The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement.<br>* Format: Alphanumeric<br>* Maximum length: 22 characters|
|taxId|string|false|none|The tax ID of the sub-merchant.<br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ|

<h2 id="tocS_SubMerchantInfo">SubMerchantInfo</h2>
<!-- backwards compatibility -->
<a id="schemasubmerchantinfo"></a>
<a id="schema_SubMerchantInfo"></a>
<a id="tocSsubmerchantinfo"></a>
<a id="tocssubmerchantinfo"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "amount": {
    "currency": "str",
    "value": 0
  },
  "email": "string",
  "id": "string",
  "mcc": "string",
  "name": "string",
  "phoneNumber": "string",
  "registeredSince": "string",
  "taxId": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[BillingAddress](#schemabillingaddress)|false|none|Required for transactions performed by registered payment facilitators. The sub-merchant's address.<br>|
|amount|[Amount](#schemaamount)|false|none|Required for transactions performed by registered payment facilitators. The amount of the payment corresponding to each sub-merchant. This value will be different than the request amount if shopper is purchasing items at different sub-merchants' shops.|
|email|string|false|none|Required for transactions performed by registered payment facilitators. The email associated with the sub-merchant's account.|
|id|string|false|none|Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant. <br>* Format: Alphanumeric<br>* Maximum length: 15 characters|
|mcc|string|false|none|Required for transactions performed by registered payment facilitators. The sub-merchant's 4-digit Merchant Category Code (MCC). <br>* Format: Numeric<br>* Fixed length: 4 digits|
|name|string|false|none|Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement.<br>Exception: for acquirers in Brazil, this value does not overwrite the shopper statement.<br>* Format: Alphanumeric<br>* Maximum length: 22 characters|
|phoneNumber|string|false|none|Required for transactions performed by registered payment facilitators. The phone number associated with the sub-merchant's account.|
|registeredSince|string|false|none|none|
|taxId|string|false|none|Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant.<br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ|
|url|string|false|none|Required for transactions performed by registered payment facilitators. The sub-merchant's URL on the platform, i.e. the sub-merchant's shop.|

<h2 id="tocS_Surcharge">Surcharge</h2>
<!-- backwards compatibility -->
<a id="schemasurcharge"></a>
<a id="schema_Surcharge"></a>
<a id="tocSsurcharge"></a>
<a id="tocssurcharge"></a>

```json
{
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|true|none|The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). When you apply surcharge, include the surcharge in the `amount.value` field.<br><br>Review our [Surcharge compliance guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how to comply with regulatory requirements when applying surcharge.|

<h2 id="tocS_TaxTotal">TaxTotal</h2>
<!-- backwards compatibility -->
<a id="schemataxtotal"></a>
<a id="schema_TaxTotal"></a>
<a id="tocStaxtotal"></a>
<a id="tocstaxtotal"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|none|

<h2 id="tocS_TemporaryServices">TemporaryServices</h2>
<!-- backwards compatibility -->
<a id="schematemporaryservices"></a>
<a id="schema_TemporaryServices"></a>
<a id="tocStemporaryservices"></a>
<a id="tocstemporaryservices"></a>

```json
{
  "employeeName": "string",
  "endDate": "1970-01-01",
  "hourRate": 0,
  "hoursWorked": 0,
  "jobDescription": "string",
  "serviceRequestor": "string",
  "startDate": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeName|string|false|none|The name or ID of the person working in a temporary capacity.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.employeeName`|
|endDate|string(date)|false|none|The billing period end date.<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.tempWeekEnding`|
|hourRate|integer(int32)|false|none|The hourly rate for the temporary services, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.regularHoursRate`|
|hoursWorked|integer(int32)|false|none|The number of hours worked during the billing period.<br>* Format: Numeric<br>* **additionalData key:** `enhancedSchemeData.regularHoursWorked`|
|jobDescription|string|false|none|The job description of the person working in a temporary capacity.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.jobDescription`|
|serviceRequestor|string|false|none|The name of the person requesting the temporary services.<br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.requestName`|
|startDate|string(date)|false|none|The billing period start date.<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.tempStartDate`|

<h2 id="tocS_ThirdPartyTokenRedundancyInfo">ThirdPartyTokenRedundancyInfo</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartytokenredundancyinfo"></a>
<a id="schema_ThirdPartyTokenRedundancyInfo"></a>
<a id="tocSthirdpartytokenredundancyinfo"></a>
<a id="tocsthirdpartytokenredundancyinfo"></a>

```json
{
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplateCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestParameters|object|false|none|Request-specific parameter values to populate the template placeholders. Each key must match a placeholder defined in the template referenced by `requestTemplateCode`.|
|requestTemplateCode|string|true|none|Identifier for the third-party token request template configured in your Adyen account. This template defines the structure and endpoint for token requests.|

<h2 id="tocS_ThreeDS2RequestData">ThreeDS2RequestData</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2requestdata"></a>
<a id="schema_ThreeDS2RequestData"></a>
<a id="tocSthreeds2requestdata"></a>
<a id="tocsthreeds2requestdata"></a>

```json
{
  "acctInfo": {
    "chAccAgeInd": "01",
    "chAccChange": "string",
    "chAccChangeInd": "01",
    "chAccPwChange": "string",
    "chAccPwChangeInd": "01",
    "chAccString": "string",
    "nbPurchaseAccount": "string",
    "paymentAccAge": "string",
    "paymentAccInd": "01",
    "provisionAttemptsDay": "string",
    "shipAddressUsage": "string",
    "shipAddressUsageInd": "01",
    "shipNameIndicator": "01",
    "suspiciousAccActivity": "01",
    "txnActivityDay": "str",
    "txnActivityYear": "str"
  },
  "acctType": "01",
  "acquirerBIN": "string",
  "acquirerMerchantID": "string",
  "addrMatch": "Y",
  "authenticationOnly": false,
  "challengeIndicator": "noPreference",
  "deviceChannel": "string",
  "deviceRenderOptions": {
    "sdkInterface": "both",
    "sdkUiType": [
      "multiSelect"
    ]
  },
  "homePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "mcc": "string",
  "merchantName": "string",
  "messageVersion": "string",
  "mobilePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "notificationURL": "string",
  "payTokenInd": true,
  "paymentAuthenticationUseCase": "string",
  "purchaseInstalData": "str",
  "recurringExpiry": "string",
  "recurringFrequency": "stri",
  "sdkAppID": "string",
  "sdkEncData": "string",
  "sdkEphemPubKey": {
    "crv": "string",
    "kty": "string",
    "x": "string",
    "y": "string"
  },
  "sdkMaxTimeout": 60,
  "sdkReferenceNumber": "string",
  "sdkTransID": "string",
  "sdkVersion": "string",
  "threeDSCompInd": "string",
  "threeDSRequestorAuthenticationInd": "string",
  "threeDSRequestorAuthenticationInfo": {
    "threeDSReqAuthData": "string",
    "threeDSReqAuthMethod": "01",
    "threeDSReqAuthTimestamp": "stringstring"
  },
  "threeDSRequestorChallengeInd": "01",
  "threeDSRequestorID": "string",
  "threeDSRequestorName": "string",
  "threeDSRequestorPriorAuthenticationInfo": {
    "threeDSReqPriorAuthData": "string",
    "threeDSReqPriorAuthMethod": "01",
    "threeDSReqPriorAuthTimestamp": "stringstring",
    "threeDSReqPriorRef": "stringstringstringstringstringstring"
  },
  "threeDSRequestorURL": "string",
  "transType": "01",
  "transactionType": "goodsOrServicePurchase",
  "whiteListStatus": "string",
  "workPhone": {
    "cc": "str",
    "subscriber": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acctInfo|[AcctInfo](#schemaacctinfo)|false|none|Additional information about the cardholder’s account provided by the 3DS Requestor.|
|acctType|string|false|none|Indicates the type of account. For example, for a multi-account card product. Length: 2 characters. Allowed values:<br>* **01** — Not applicable<br>* **02** — Credit<br>* **03** — Debit|
|acquirerBIN|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|acquirerMerchantID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|addrMatch|string|false|none|Indicates whether the cardholder shipping address and cardholder billing address are the same. Allowed values:<br>* **Y** — Shipping address matches billing address.<br>* **N** — Shipping address does not match billing address.|
|authenticationOnly|boolean|false|none|**Deprecated.** If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.|
|challengeIndicator|string|false|none|**Deprecated.** Possibility to specify a preference for receiving a challenge from the issuer.<br>Allowed values:<br>* `noPreference`<br>* `requestNoChallenge`<br>* `requestChallenge`<br>* `requestChallengeAsMandate`<br>|
|deviceChannel|string|true|none|The environment of the shopper.<br>Allowed values:<br>* `app`<br>* `browser`|
|deviceRenderOptions|[DeviceRenderOptions](#schemadevicerenderoptions)|false|none|Display options for the 3D Secure 2 SDK.<br>Optional and only for `deviceChannel` **app**.|
|homePhone|[Phone](#schemaphone)|false|none|The home phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|mcc|string|false|none|Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.|
|merchantName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.<br>> Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.|
|messageVersion|string|false|none|The `messageVersion` value indicating the 3D Secure 2 protocol version.|
|mobilePhone|[Phone](#schemaphone)|false|none|The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|notificationURL|string|false|none|URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.|
|payTokenInd|boolean|false|none|Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS.|
|paymentAuthenticationUseCase|string|false|none|Indicates the type of payment for which an authentication is requested (message extension)|
|purchaseInstalData|string|false|none|Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Format: YYYYMMDD|
|recurringFrequency|string|false|none|Indicates the minimum number of days between authorisations. Maximum length: 4 characters.|
|sdkAppID|string|false|none|The `sdkAppID` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkEncData|string|false|none|The `sdkEncData` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkEphemPubKey|[SDKEphemPubKey](#schemasdkephempubkey)|false|none|The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**.|
|sdkMaxTimeout|integer(int32)|false|none|The maximum amount of time in minutes for the 3D Secure 2 authentication process.<br>Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.|
|sdkReferenceNumber|string|false|none|The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**.|
|sdkTransID|string|false|none|The `sdkTransID` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**.|
|sdkVersion|string|false|none|Version of the 3D Secure 2 mobile SDK. <br>Only for `deviceChannel` set to **app**.|
|threeDSCompInd|string|false|none|Completion indicator for the device fingerprinting.|
|threeDSRequestorAuthenticationInd|string|false|none|Indicates the type of Authentication request.|
|threeDSRequestorAuthenticationInfo|[ThreeDSRequestorAuthenticationInfo](#schemathreedsrequestorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder before or during the transaction|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|threeDSRequestorID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorPriorAuthenticationInfo|[ThreeDSRequestorPriorAuthenticationInfo](#schemathreedsrequestorpriorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction.|
|threeDSRequestorURL|string|false|none|URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.|
|transType|string|false|none|Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:<br>* **01** — Goods/Service Purchase<br>* **03** — Check Acceptance<br>* **10** — Account Funding<br>* **11** — Quasi-Cash Transaction<br>* **28** — Prepaid Activation and Load|
|transactionType|string|false|none|Identify the type of the transaction being authenticated.|
|whiteListStatus|string|false|none|The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.|
|workPhone|[Phone](#schemaphone)|false|none|The work phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|

#### Enumerated Values

|Property|Value|
|---|---|
|acctType|01|
|acctType|02|
|acctType|03|
|addrMatch|Y|
|addrMatch|N|
|challengeIndicator|noPreference|
|challengeIndicator|requestNoChallenge|
|challengeIndicator|requestChallenge|
|challengeIndicator|requestChallengeAsMandate|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|
|transType|01|
|transType|03|
|transType|10|
|transType|11|
|transType|28|
|transactionType|goodsOrServicePurchase|
|transactionType|checkAcceptance|
|transactionType|accountFunding|
|transactionType|quasiCashTransaction|
|transactionType|prepaidActivationAndLoad|

<h2 id="tocS_ThreeDS2RequestFields">ThreeDS2RequestFields</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2requestfields"></a>
<a id="schema_ThreeDS2RequestFields"></a>
<a id="tocSthreeds2requestfields"></a>
<a id="tocsthreeds2requestfields"></a>

```json
{
  "acctInfo": {
    "chAccAgeInd": "01",
    "chAccChange": "string",
    "chAccChangeInd": "01",
    "chAccPwChange": "string",
    "chAccPwChangeInd": "01",
    "chAccString": "string",
    "nbPurchaseAccount": "string",
    "paymentAccAge": "string",
    "paymentAccInd": "01",
    "provisionAttemptsDay": "string",
    "shipAddressUsage": "string",
    "shipAddressUsageInd": "01",
    "shipNameIndicator": "01",
    "suspiciousAccActivity": "01",
    "txnActivityDay": "str",
    "txnActivityYear": "str"
  },
  "acctType": "01",
  "acquirerBIN": "string",
  "acquirerMerchantID": "string",
  "addrMatch": "Y",
  "authenticationOnly": false,
  "challengeIndicator": "noPreference",
  "deviceRenderOptions": {
    "sdkInterface": "both",
    "sdkUiType": [
      "multiSelect"
    ]
  },
  "homePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "mcc": "string",
  "merchantName": "string",
  "messageVersion": "string",
  "mobilePhone": {
    "cc": "str",
    "subscriber": "string"
  },
  "notificationURL": "string",
  "payTokenInd": true,
  "paymentAuthenticationUseCase": "string",
  "purchaseInstalData": "str",
  "recurringExpiry": "string",
  "recurringFrequency": "stri",
  "sdkAppID": "string",
  "sdkEphemPubKey": {
    "crv": "string",
    "kty": "string",
    "x": "string",
    "y": "string"
  },
  "sdkMaxTimeout": 60,
  "sdkReferenceNumber": "string",
  "sdkTransID": "string",
  "threeDSCompInd": "string",
  "threeDSRequestorAuthenticationInd": "string",
  "threeDSRequestorAuthenticationInfo": {
    "threeDSReqAuthData": "string",
    "threeDSReqAuthMethod": "01",
    "threeDSReqAuthTimestamp": "stringstring"
  },
  "threeDSRequestorChallengeInd": "01",
  "threeDSRequestorID": "string",
  "threeDSRequestorName": "string",
  "threeDSRequestorPriorAuthenticationInfo": {
    "threeDSReqPriorAuthData": "string",
    "threeDSReqPriorAuthMethod": "01",
    "threeDSReqPriorAuthTimestamp": "stringstring",
    "threeDSReqPriorRef": "stringstringstringstringstringstring"
  },
  "threeDSRequestorURL": "string",
  "transType": "01",
  "transactionType": "goodsOrServicePurchase",
  "whiteListStatus": "string",
  "workPhone": {
    "cc": "str",
    "subscriber": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acctInfo|[AcctInfo](#schemaacctinfo)|false|none|Additional information about the cardholder’s account provided by the 3DS Requestor.|
|acctType|string|false|none|Indicates the type of account. For example, for a multi-account card product. Length: 2 characters. Allowed values:<br>* **01** — Not applicable<br>* **02** — Credit<br>* **03** — Debit|
|acquirerBIN|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|acquirerMerchantID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.|
|addrMatch|string|false|none|Indicates whether the cardholder shipping Address and cardholder billing address are the same. Allowed values:<br>* **Y** — Shipping Address matches Billing Address.<br>* **N** — Shipping Address does not match Billing Address.|
|authenticationOnly|boolean|false|none|**Deprecated.** If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.|
|challengeIndicator|string|false|none|**Deprecated.** Possibility to specify a preference for receiving a challenge from the issuer.<br>Allowed values:<br>* `noPreference`<br>* `requestNoChallenge`<br>* `requestChallenge`<br>* `requestChallengeAsMandate`<br>|
|deviceRenderOptions|[DeviceRenderOptions](#schemadevicerenderoptions)|false|none|Display options for the 3D Secure 2 SDK.<br>Optional and only for `deviceChannel` **app**.|
|homePhone|[Phone](#schemaphone)|false|none|The home phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|mcc|string|false|none|Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.|
|merchantName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.<br>> Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.|
|messageVersion|string|false|none|The `messageVersion` value indicating the 3D Secure 2 protocol version.|
|mobilePhone|[Phone](#schemaphone)|false|none|The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|
|notificationURL|string|false|none|URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.|
|payTokenInd|boolean|false|none|Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS.|
|paymentAuthenticationUseCase|string|false|none|Indicates the type of payment for which an authentication is requested (message extension)|
|purchaseInstalData|string|false|none|Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.|
|recurringExpiry|string|false|none|Date after which no further authorisations shall be performed. Format: YYYYMMDD|
|recurringFrequency|string|false|none|Indicates the minimum number of days between authorisations. Maximum length: 4 characters.|
|sdkAppID|string|false|none|The `sdkAppID` value as received from the 3D Secure 2 SDK.|
|sdkEphemPubKey|[SDKEphemPubKey](#schemasdkephempubkey)|false|none|The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.|
|sdkMaxTimeout|integer(int32)|false|none|The maximum amount of time in minutes for the 3D Secure 2 authentication process.<br>Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.|
|sdkReferenceNumber|string|false|none|The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.|
|sdkTransID|string|false|none|The `sdkTransID` value as received from the 3D Secure 2 SDK.|
|threeDSCompInd|string|false|none|Completion indicator for the device fingerprinting.|
|threeDSRequestorAuthenticationInd|string|false|none|Indicates the type of Authentication request.|
|threeDSRequestorAuthenticationInfo|[ThreeDSRequestorAuthenticationInfo](#schemathreedsrequestorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder before or during the transaction|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|threeDSRequestorID|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorName|string|false|none|Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.|
|threeDSRequestorPriorAuthenticationInfo|[ThreeDSRequestorPriorAuthenticationInfo](#schemathreedsrequestorpriorauthenticationinfo)|false|none|Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction.|
|threeDSRequestorURL|string|false|none|URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.|
|transType|string|false|none|Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:<br>* **01** — Goods/Service Purchase<br>* **03** — Check Acceptance<br>* **10** — Account Funding<br>* **11** — Quasi-Cash Transaction<br>* **28** — Prepaid Activation and Load|
|transactionType|string|false|none|Identify the type of the transaction being authenticated.|
|whiteListStatus|string|false|none|The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.|
|workPhone|[Phone](#schemaphone)|false|none|The work phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.<br>> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.|

#### Enumerated Values

|Property|Value|
|---|---|
|acctType|01|
|acctType|02|
|acctType|03|
|addrMatch|Y|
|addrMatch|N|
|challengeIndicator|noPreference|
|challengeIndicator|requestNoChallenge|
|challengeIndicator|requestChallenge|
|challengeIndicator|requestChallengeAsMandate|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|
|transType|01|
|transType|03|
|transType|10|
|transType|11|
|transType|28|
|transactionType|goodsOrServicePurchase|
|transactionType|checkAcceptance|
|transactionType|accountFunding|
|transactionType|quasiCashTransaction|
|transactionType|prepaidActivationAndLoad|

<h2 id="tocS_ThreeDS2ResponseData">ThreeDS2ResponseData</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2responsedata"></a>
<a id="schema_ThreeDS2ResponseData"></a>
<a id="tocSthreeds2responsedata"></a>
<a id="tocsthreeds2responsedata"></a>

```json
{
  "acsChallengeMandated": "string",
  "acsOperatorID": "string",
  "acsReferenceNumber": "string",
  "acsSignedContent": "string",
  "acsTransID": "string",
  "acsURL": "string",
  "authenticationType": "string",
  "cardHolderInfo": "string",
  "cavvAlgorithm": "string",
  "challengeIndicator": "string",
  "dsReferenceNumber": "string",
  "dsTransID": "string",
  "exemptionIndicator": "string",
  "messageVersion": "string",
  "riskScore": "string",
  "sdkEphemPubKey": "string",
  "threeDSServerTransID": "string",
  "transStatus": "string",
  "transStatusReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsChallengeMandated|string|false|none|none|
|acsOperatorID|string|false|none|none|
|acsReferenceNumber|string|false|none|none|
|acsSignedContent|string|false|none|none|
|acsTransID|string|false|none|none|
|acsURL|string|false|none|none|
|authenticationType|string|false|none|none|
|cardHolderInfo|string|false|none|none|
|cavvAlgorithm|string|false|none|none|
|challengeIndicator|string|false|none|none|
|dsReferenceNumber|string|false|none|none|
|dsTransID|string|false|none|none|
|exemptionIndicator|string|false|none|none|
|messageVersion|string|false|none|none|
|riskScore|string|false|none|none|
|sdkEphemPubKey|string|false|none|none|
|threeDSServerTransID|string|false|none|none|
|transStatus|string|false|none|none|
|transStatusReason|string|false|none|none|

<h2 id="tocS_ThreeDS2Result">ThreeDS2Result</h2>
<!-- backwards compatibility -->
<a id="schemathreeds2result"></a>
<a id="schema_ThreeDS2Result"></a>
<a id="tocSthreeds2result"></a>
<a id="tocsthreeds2result"></a>

```json
{
  "authenticationValue": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "01",
  "dsTransID": "string",
  "eci": "string",
  "exemptionIndicator": "lowValue",
  "messageVersion": "string",
  "riskScore": "string",
  "threeDSRequestorChallengeInd": "01",
  "threeDSServerTransID": "string",
  "timestamp": "string",
  "transStatus": "string",
  "transStatusReason": "string",
  "whiteListStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationValue|string|false|none|The `authenticationValue` value as defined in the 3D Secure 2 specification.|
|cavvAlgorithm|string|false|none|The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations.|
|challengeCancel|string|false|none|Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).|
|dsTransID|string|false|none|The `dsTransID` value as defined in the 3D Secure 2 specification.|
|eci|string|false|none|The `eci` value as defined in the 3D Secure 2 specification.|
|exemptionIndicator|string|false|none|Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied.<br>Allowed values:<br>* `lowValue`<br>* `secureCorporate`<br>* `trustedBeneficiary`<br>* `transactionRiskAnalysis`<br>|
|messageVersion|string|false|none|The `messageVersion` value as defined in the 3D Secure 2 specification.|
|riskScore|string|false|none|Risk score calculated by Cartes Bancaires Directory Server (DS).|
|threeDSRequestorChallengeInd|string|false|none|Indicates whether a challenge is requested for this transaction. Possible values:<br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only|
|threeDSServerTransID|string|false|none|The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.|
|timestamp|string|false|none|The `timestamp` value of the 3D Secure 2 authentication.|
|transStatus|string|false|none|The `transStatus` value as defined in the 3D Secure 2 specification.|
|transStatusReason|string|false|none|Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).|
|whiteListStatus|string|false|none|The `whiteListStatus` value as defined in the 3D Secure 2 specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeCancel|01|
|challengeCancel|02|
|challengeCancel|03|
|challengeCancel|04|
|challengeCancel|05|
|challengeCancel|06|
|challengeCancel|07|
|exemptionIndicator|lowValue|
|exemptionIndicator|secureCorporate|
|exemptionIndicator|trustedBeneficiary|
|exemptionIndicator|transactionRiskAnalysis|
|threeDSRequestorChallengeInd|01|
|threeDSRequestorChallengeInd|02|
|threeDSRequestorChallengeInd|03|
|threeDSRequestorChallengeInd|04|
|threeDSRequestorChallengeInd|05|
|threeDSRequestorChallengeInd|06|

<h2 id="tocS_ThreeDSRequestData">ThreeDSRequestData</h2>
<!-- backwards compatibility -->
<a id="schemathreedsrequestdata"></a>
<a id="schema_ThreeDSRequestData"></a>
<a id="tocSthreedsrequestdata"></a>
<a id="tocsthreedsrequestdata"></a>

```json
{
  "challengeWindowSize": "01",
  "dataOnly": "false",
  "nativeThreeDS": "preferred",
  "threeDSVersion": "2.1.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challengeWindowSize|string|false|none|Dimensions of the 3DS2 challenge window to be displayed to the cardholder.<br><br>Possible values:<br><br>* **01** - size of 250x400 <br>* **02** - size of 390x400<br>* **03** - size of 500x600<br>* **04** - size of 600x400<br>* **05** - Fullscreen|
|dataOnly|string|false|none|Required to trigger the [data-only flow](https://docs.adyen.com/online-payments/3d-secure/data-only/). When set to **true**, forces the 3D Secure 2 data-only flow for all transactions where it is possible. |
|nativeThreeDS|string|false|none|Indicates if [native 3D Secure authentication](https://docs.adyen.com/online-payments/3d-secure/native-3ds2) should be triggered when available. Adyen can still select to fallback to the redirect flow to optimize authorization rates and improve the shopper's experience.<br><br>Possible values:<br>* **preferred**: Use native 3D Secure authentication when available.<br>* **disabled**: Use the redirect 3D Secure authentication flow.|
|threeDSVersion|string|false|none|The version of 3D Secure to use.<br><br>Possible values:<br><br>* **2.1.0**<br>* **2.2.0**|

#### Enumerated Values

|Property|Value|
|---|---|
|challengeWindowSize|01|
|challengeWindowSize|02|
|challengeWindowSize|03|
|challengeWindowSize|04|
|challengeWindowSize|05|
|dataOnly|false|
|dataOnly|true|
|nativeThreeDS|preferred|
|nativeThreeDS|disabled|
|threeDSVersion|2.1.0|
|threeDSVersion|2.2.0|

<h2 id="tocS_ThreeDSRequestorAuthenticationInfo">ThreeDSRequestorAuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemathreedsrequestorauthenticationinfo"></a>
<a id="schema_ThreeDSRequestorAuthenticationInfo"></a>
<a id="tocSthreedsrequestorauthenticationinfo"></a>
<a id="tocsthreedsrequestorauthenticationinfo"></a>

```json
{
  "threeDSReqAuthData": "string",
  "threeDSReqAuthMethod": "01",
  "threeDSReqAuthTimestamp": "stringstring"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDSReqAuthData|string|false|none|Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.|
|threeDSReqAuthMethod|string|false|none|Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:<br>* **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest).<br>* **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials.<br>* **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.<br>* **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials.<br>* **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication.<br>* **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator.|
|threeDSReqAuthTimestamp|string|false|none|Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM|

#### Enumerated Values

|Property|Value|
|---|---|
|threeDSReqAuthMethod|01|
|threeDSReqAuthMethod|02|
|threeDSReqAuthMethod|03|
|threeDSReqAuthMethod|04|
|threeDSReqAuthMethod|05|
|threeDSReqAuthMethod|06|

<h2 id="tocS_ThreeDSRequestorPriorAuthenticationInfo">ThreeDSRequestorPriorAuthenticationInfo</h2>
<!-- backwards compatibility -->
<a id="schemathreedsrequestorpriorauthenticationinfo"></a>
<a id="schema_ThreeDSRequestorPriorAuthenticationInfo"></a>
<a id="tocSthreedsrequestorpriorauthenticationinfo"></a>
<a id="tocsthreedsrequestorpriorauthenticationinfo"></a>

```json
{
  "threeDSReqPriorAuthData": "string",
  "threeDSReqPriorAuthMethod": "01",
  "threeDSReqPriorAuthTimestamp": "stringstring",
  "threeDSReqPriorRef": "stringstringstringstringstringstring"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threeDSReqPriorAuthData|string|false|none|Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.|
|threeDSReqPriorAuthMethod|string|false|none|Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed values:<br>* **01** — Frictionless authentication occurred by ACS.<br>* **02** — Cardholder challenge occurred by ACS.<br>* **03** — AVS verified.<br>* **04** — Other issuer methods.|
|threeDSReqPriorAuthTimestamp|string|false|none|Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM|
|threeDSReqPriorRef|string|false|none|This data element provides additional information to the ACS to determine the best approach for handing a request. This data element contains an ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder. Length: 30 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|threeDSReqPriorAuthMethod|01|
|threeDSReqPriorAuthMethod|02|
|threeDSReqPriorAuthMethod|03|
|threeDSReqPriorAuthMethod|04|

<h2 id="tocS_ThreeDSecureData">ThreeDSecureData</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecuredata"></a>
<a id="schema_ThreeDSecureData"></a>
<a id="tocSthreedsecuredata"></a>
<a id="tocsthreedsecuredata"></a>

```json
{
  "authenticationResponse": "Y",
  "cavv": "string",
  "cavvAlgorithm": "string",
  "challengeCancel": "01",
  "directoryResponse": "A",
  "dsTransID": "string",
  "eci": "string",
  "riskScore": "string",
  "threeDSVersion": "string",
  "tokenAuthenticationVerificationValue": "string",
  "transStatusReason": "string",
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationResponse|string|false|none|In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.<br><br>|
|cavv|string(byte)|false|none|The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).|
|cavvAlgorithm|string|false|none|The CAVV algorithm used. Include this only for 3D Secure 1.|
|challengeCancel|string|false|none|Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).|
|directoryResponse|string|false|none|In 3D Secure 2, this is the `transStatus` from the `ARes`.<br><br>|
|dsTransID|string|false|none|Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.|
|eci|string|false|none|The electronic commerce indicator.|
|riskScore|string|false|none|Risk score calculated by Directory Server (DS). Required for Cartes Bancaires integrations.|
|threeDSVersion|string|false|none|The version of the 3D Secure protocol.|
|tokenAuthenticationVerificationValue|string(byte)|false|none|Network token authentication verification value (TAVV). The network token cryptogram.|
|transStatusReason|string|false|none|Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).|
|xid|string(byte)|false|none|Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form).|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationResponse|Y|
|authenticationResponse|N|
|authenticationResponse|U|
|authenticationResponse|A|
|challengeCancel|01|
|challengeCancel|02|
|challengeCancel|03|
|challengeCancel|04|
|challengeCancel|05|
|challengeCancel|06|
|challengeCancel|07|
|directoryResponse|A|
|directoryResponse|C|
|directoryResponse|D|
|directoryResponse|I|
|directoryResponse|N|
|directoryResponse|R|
|directoryResponse|U|
|directoryResponse|Y|

<h2 id="tocS_Ticket">Ticket</h2>
<!-- backwards compatibility -->
<a id="schematicket"></a>
<a id="schema_Ticket"></a>
<a id="tocSticket"></a>
<a id="tocsticket"></a>

```json
{
  "issueAddress": "string",
  "issueDate": "1970-01-01",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueAddress|string|false|none|The address of the organization that issued the ticket.<br>* minLength: 0 characters<br>* maxLength: 16 characters<br>* **additionalData key:** `airline.ticket_issue_address`|
|issueDate|string(date)|false|none|The date that the ticket was issued to the passenger.<br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `airline.issue_date`|
|number|string|false|none|The ticket's unique identifier.<br>* minLength: 1 character<br>* maxLength: 15 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.ticket_number`|

<h2 id="tocS_TokenMandate">TokenMandate</h2>
<!-- backwards compatibility -->
<a id="schematokenmandate"></a>
<a id="schema_TokenMandate"></a>
<a id="tocStokenmandate"></a>
<a id="tocstokenmandate"></a>

```json
{
  "accountIdType": "string",
  "amount": "string",
  "amountRule": "max",
  "billingAttemptsRule": "on",
  "billingDay": "string",
  "count": "string",
  "currency": "string",
  "endsAt": "string",
  "frequency": "adhoc",
  "mandateId": "string",
  "maskedAccountId": "string",
  "minAmount": "string",
  "previousMandateId": "string",
  "providerId": "string",
  "purposeCode": "string",
  "recurringAmount": "string",
  "recurringStatement": "string",
  "remarks": "string",
  "retryPolicy": "true",
  "startsAt": "string",
  "status": "string",
  "txVariant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdType|string|false|none|The type of account identifier for the masked account number.|
|amount|string|true|none|The billing amount (in minor units) of the recurring transactions.|
|amountRule|string|false|none|The limitation rule of the billing amount.<br><br>Possible values:<br> * **max**: The transaction amount can not exceed the `amount`.<br><br> * **exact**: The transaction amount should be the same as the `amount`.<br><br>|
|billingAttemptsRule|string|false|none|The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.<br><br>Possible values:<br><br> * **on**: On a specific date.<br><br> * **before**:  Before and on a specific date.<br><br> * **after**: On and after a specific date.<br><br>|
|billingDay|string|false|none|The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`.|
|count|string|false|none|The number of transactions that can be performed within the given frequency.|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|endsAt|string|true|none|End date of the billing plan, in YYYY-MM-DD format.|
|frequency|string|true|none|The frequency with which a shopper should be charged.<br><br>Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.|
|mandateId|string|true|none|The unique identifier of the mandate.|
|maskedAccountId|string|false|none|The masked account number associated with the mandate.|
|minAmount|string|false|none|For a billing plan where the payment amounts are variable, the minimum amount to charge the shopper for each recurring payment. When a shopper approves the billing plan, they can also specify a maximum amount in their banking app.|
|previousMandateId|string|false|none|The previous value of the `mandateId`, if the scheme has replaced it.<br><br>For UPI mandates, the `mandateId` is the Unique Mandate Number (UMN), which the scheme replaces when the mandate moves to another payment provider. In that case, this field holds the UMN the mandate was registered with before the move.|
|providerId|string|true|none|The provider-specific identifier for this mandate.|
|purposeCode|string|false|none|The purpose code the mandate is registered with at the scheme.<br><br>Possible values for UPI mandates:<br><br> * **14**: The mandate can only be debited by the payment provider that registered it.<br><br> * **AZ**: The mandate can be debited by any payment provider.<br><br>|
|recurringAmount|string|false|none|For a billing plan where the payment amount is fixed, the amount the shopper will be charged for each recurring payment.|
|recurringStatement|string|false|none|The text that will be shown on the shopper's bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments.<br>Maximum length: 35 characters.|
|remarks|string|false|none|Additional remarks or notes about the mandate.|
|retryPolicy|string|false|none|When set to true, you can retry for failed recurring payments. The default value is true.|
|startsAt|string|false|none|Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.|
|status|string|true|none|The status of the mandate. Examples : active, revoked, completed, expired|
|txVariant|string|true|none|The transaction variant used for this mandate.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountRule|max|
|amountRule|exact|
|billingAttemptsRule|on|
|billingAttemptsRule|before|
|billingAttemptsRule|after|
|frequency|adhoc|
|frequency|daily|
|frequency|weekly|
|frequency|biWeekly|
|frequency|monthly|
|frequency|quarterly|
|frequency|halfYearly|
|frequency|yearly|
|retryPolicy|true|
|retryPolicy|false|

<h2 id="tocS_TravelAgency">TravelAgency</h2>
<!-- backwards compatibility -->
<a id="schematravelagency"></a>
<a id="schema_TravelAgency"></a>
<a id="tocStravelagency"></a>
<a id="tocstravelagency"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The unique identifier from IATA or ARC for the travel agency that issues the ticket.<br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 8 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.travel_agency_code`|
|name|string|false|none|The name of the travel agency.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.travel_agency_name`|

<h2 id="tocS_TwintDetails">TwintDetails</h2>
<!-- backwards compatibility -->
<a id="schematwintdetails"></a>
<a id="schema_TwintDetails"></a>
<a id="tocStwintdetails"></a>
<a id="tocstwintdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "subtype": "string",
  "type": "twint"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|subtype|string|false|none|The type of flow to initiate.|
|type|string|false|none|The payment method type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|twint|

<h2 id="tocS_UpdatePaymentLinkRequest">UpdatePaymentLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepaymentlinkrequest"></a>
<a id="schema_UpdatePaymentLinkRequest"></a>
<a id="tocSupdatepaymentlinkrequest"></a>
<a id="tocsupdatepaymentlinkrequest"></a>

```json
{
  "status": "expired"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the payment link. Possible values:<br>* **expired**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|expired|

<h2 id="tocS_UpiCollectDetails">UpiCollectDetails</h2>
<!-- backwards compatibility -->
<a id="schemaupicollectdetails"></a>
<a id="schema_UpiCollectDetails"></a>
<a id="tocSupicollectdetails"></a>
<a id="tocsupicollectdetails"></a>

```json
{
  "billingSequenceNumber": "string",
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "storedPaymentMethodId": "string",
  "type": "upi_collect",
  "virtualPaymentAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingSequenceNumber|string|false|none|The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**upi_collect**|
|virtualPaymentAddress|string|false|none|The virtual payment address for UPI.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|upi_collect|

<h2 id="tocS_UpiIntentDetails">UpiIntentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaupiintentdetails"></a>
<a id="schema_UpiIntentDetails"></a>
<a id="tocSupiintentdetails"></a>
<a id="tocsupiintentdetails"></a>

```json
{
  "appId": "string",
  "billingSequenceNumber": "string",
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "storedPaymentMethodId": "string",
  "type": "upi_intent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|TPAP (Third Party Application) Id that is being used to make the UPI payment|
|billingSequenceNumber|string|false|none|The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**upi_intent**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|upi_intent|

<h2 id="tocS_UpiQrDetails">UpiQrDetails</h2>
<!-- backwards compatibility -->
<a id="schemaupiqrdetails"></a>
<a id="schema_UpiQrDetails"></a>
<a id="tocSupiqrdetails"></a>
<a id="tocsupiqrdetails"></a>

```json
{
  "billingSequenceNumber": "string",
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "shopperNotificationReference": "string",
  "storedPaymentMethodId": "string",
  "type": "upi_qr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingSequenceNumber|string|false|none|The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|shopperNotificationReference|string|false|none|The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|true|none|**upi_qr**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|upi_qr|

<h2 id="tocS_UtilityRequest">UtilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemautilityrequest"></a>
<a id="schema_UtilityRequest"></a>
<a id="tocSutilityrequest"></a>
<a id="tocsutilityrequest"></a>

```json
{
  "originDomains": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originDomains|[string]|true|none|The list of origin domains, for which origin keys are requested.|

<h2 id="tocS_UtilityResponse">UtilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemautilityresponse"></a>
<a id="schema_UtilityResponse"></a>
<a id="tocSutilityresponse"></a>
<a id="tocsutilityresponse"></a>

```json
{
  "originKeys": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originKeys|object|false|none|The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.|

<h2 id="tocS_VippsDetails">VippsDetails</h2>
<!-- backwards compatibility -->
<a id="schemavippsdetails"></a>
<a id="schema_VippsDetails"></a>
<a id="tocSvippsdetails"></a>
<a id="tocsvippsdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "telephoneNumber": "string",
  "type": "vipps"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|telephoneNumber|string|true|none|none|
|type|string|false|none|**vipps**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|vipps|

<h2 id="tocS_VisaCheckoutDetails">VisaCheckoutDetails</h2>
<!-- backwards compatibility -->
<a id="schemavisacheckoutdetails"></a>
<a id="schema_VisaCheckoutDetails"></a>
<a id="tocSvisacheckoutdetails"></a>
<a id="tocsvisacheckoutdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "fundingSource": "credit",
  "sdkData": "string",
  "type": "visacheckout",
  "visaCheckoutCallId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|fundingSource|string|false|none|The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**visacheckout**|
|visaCheckoutCallId|string|true|none|The Visa Click to Pay Call ID value. When your shopper selects a payment and/or a shipping address from Visa Click to Pay, you will receive a Visa Click to Pay Call ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|type|visacheckout|

<h2 id="tocS_WeChatPayDetails">WeChatPayDetails</h2>
<!-- backwards compatibility -->
<a id="schemawechatpaydetails"></a>
<a id="schema_WeChatPayDetails"></a>
<a id="tocSwechatpaydetails"></a>
<a id="tocswechatpaydetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "sdkData": "string",
  "type": "wechatpay"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|type|string|false|none|**wechatpay**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|wechatpay|
|type|wechatpay_pos|

<h2 id="tocS_WeChatPayMiniProgramDetails">WeChatPayMiniProgramDetails</h2>
<!-- backwards compatibility -->
<a id="schemawechatpayminiprogramdetails"></a>
<a id="schema_WeChatPayMiniProgramDetails"></a>
<a id="tocSwechatpayminiprogramdetails"></a>
<a id="tocswechatpayminiprogramdetails"></a>

```json
{
  "appId": "string",
  "checkoutAttemptId": "string",
  "openid": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "wechatpayMiniProgram"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|none|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|openid|string|false|none|none|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**wechatpayMiniProgram**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|wechatpayMiniProgram|

<h2 id="tocS_ZipDetails">ZipDetails</h2>
<!-- backwards compatibility -->
<a id="schemazipdetails"></a>
<a id="schema_ZipDetails"></a>
<a id="tocSzipdetails"></a>
<a id="tocszipdetails"></a>

```json
{
  "checkoutAttemptId": "string",
  "clickAndCollect": "string",
  "recurringDetailReference": "string",
  "sdkData": "string",
  "storedPaymentMethodId": "string",
  "type": "zip"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkoutAttemptId|string|false|none|The checkout attempt identifier.|
|clickAndCollect|string|false|none|Set this to **true** if the shopper would like to pick up and collect their order, instead of having the goods delivered to them.|
|recurringDetailReference|string|false|none|**Deprecated.** This is the `recurringDetailReference` returned in the response when you created the token.|
|sdkData|string|false|none|Base64-encoded JSON object containing SDK related parameters required by the SDK|
|storedPaymentMethodId|string|false|none|This is the `recurringDetailReference` returned in the response when you created the token.|
|type|string|false|none|**zip**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|zip|
|type|zip_pos|

<h2 id="tocS_CheckoutErrorResponseEntity">CheckoutErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemacheckouterrorresponseentity"></a>
<a id="schema_CheckoutErrorResponseEntity"></a>
<a id="tocScheckouterrorresponseentity"></a>
<a id="tocscheckouterrorresponseentity"></a>

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
|errorCode|string|true|none|none|
|errorType|string|true|none|none|
|message|string|true|none|none|
|pspReference|string|false|none|none|
|status|integer(int32)|false|none|none|

<h2 id="tocS_PayToPaymentMethod">PayToPaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaytopaymentmethod"></a>
<a id="schema_PayToPaymentMethod"></a>
<a id="tocSpaytopaymentmethod"></a>
<a id="tocspaytopaymentmethod"></a>

```json
{
  "type": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|shopperReference|string|false|none|none|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"VALID"
```

<h2 id="tocS_ShopperIdPaymentMethod">ShopperIdPaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemashopperidpaymentmethod"></a>
<a id="schema_ShopperIdPaymentMethod"></a>
<a id="tocSshopperidpaymentmethod"></a>
<a id="tocsshopperidpaymentmethod"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_UPIPaymentMethod">UPIPaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemaupipaymentmethod"></a>
<a id="schema_UPIPaymentMethod"></a>
<a id="tocSupipaymentmethod"></a>
<a id="tocsupipaymentmethod"></a>

```json
{
  "type": "string",
  "virtualPaymentAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|virtualPaymentAddress|string|false|none|none|

<h2 id="tocS_ValidateShopperIdRequest">ValidateShopperIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateshopperidrequest"></a>
<a id="schema_ValidateShopperIdRequest"></a>
<a id="tocSvalidateshopperidrequest"></a>
<a id="tocsvalidateshopperidrequest"></a>

```json
{
  "merchantAccount": "string",
  "paymentMethod": {
    "type": "string"
  },
  "shopperEmail": "string",
  "shopperIP": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The merchant account identifier, with which you want to process the transaction.|
|paymentMethod|[ShopperIdPaymentMethod](#schemashopperidpaymentmethod)|true|none|paymentMethod|
|shopperEmail|string|false|none|none|
|shopperIP|string|false|none|none|
|shopperReference|string|false|none|none|

<h2 id="tocS_ValidateShopperIdResponse">ValidateShopperIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateshopperidresponse"></a>
<a id="schema_ValidateShopperIdResponse"></a>
<a id="tocSvalidateshopperidresponse"></a>
<a id="tocsvalidateshopperidresponse"></a>

```json
{
  "reason": "string",
  "result": "VALID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for the result.|
|result|[Result](#schemaresult)|false|none|Result of the validation. Ex: valid, invalid, unknown|

#### Enumerated Values

|Property|Value|
|---|---|
|result|VALID|
|result|INVALID|
|result|UNKNOWN|
|result|NOT_REQUIRED|
