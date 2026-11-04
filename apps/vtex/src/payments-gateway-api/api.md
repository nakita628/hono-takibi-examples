<h1 id="payments-gateway-api">Payments Gateway API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>ℹ️ Onboarding guide
>
> Check the new [Payments onboarding guide](https://developers.vtex.com/docs/guides/payments-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Payments and is organized by focusing on the developer's journey.

The Payments Gateway API allows you to get payment data and process your store's transactions.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.vtexpayments.com.br">https://{accountName}.vtexpayments.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="payments-gateway-api-installments">Installments</h1>

We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.

## Installments options

<a id="opIdInstallmentsoptions"></a>

> Code samples

```bash
curl 'https://example.com/api/pvt/installments?request.value=10' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/installments`

Returns the best installment options according to the informed params.

<h3 id="installments-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|request.value|query|integer(int32)|true|none|
|request.salesChannel|query|integer(int32)|false|none|
|request.paymentDetails[0].id|query|integer(int32)|false|none|
|request.paymentDetails[0].value|query|integer(int32)|false|none|
|request.paymentDetails[0].bin|query|integer(int32)|false|none|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

> Example responses

> 200 Response

```json
{
  "installments": [
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 2,
        "isDefault": false,
        "name": "ERedeV2 - Nova Visa",
        "self": {
          "href": "/api/pvt/payment-systems/2"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 3,
        "isDefault": false,
        "name": "ERedeV2 - Nova Diners",
        "self": {
          "href": "/api/pvt/payment-systems/3"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 4,
        "isDefault": false,
        "name": "ERedeV2 - Nova Mastercard",
        "self": {
          "href": "/api/pvt/payment-systems/4"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 6,
        "isDefault": false,
        "name": "Boleto Bancário - WEG79AKC8R529",
        "self": {
          "href": "/api/pvt/payment-systems/6"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 7,
        "isDefault": false,
        "name": "ERedeV2 - Nova Aura",
        "self": {
          "href": "/api/pvt/payment-systems/7"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 8,
        "isDefault": false,
        "name": "Hipercard - CNRYOV0ANPZAOR",
        "self": {
          "href": "/api/pvt/payment-systems/8"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        },
        {
          "interestRate": 0,
          "quantity": 2,
          "value": 5
        }
      ],
      "payment": {
        "bin": null,
        "id": 9,
        "isDefault": false,
        "name": "Elo/Mundipagg",
        "self": {
          "href": "/api/pvt/payment-systems/9"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 12,
        "isDefault": false,
        "name": "PayPal - 6U0DTI3M3OKO6R",
        "self": {
          "href": "/api/pvt/payment-systems/12"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 16,
        "isDefault": false,
        "name": "Vale/GiftCard",
        "self": {
          "href": "/api/pvt/payment-systems/16"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        },
        {
          "interestRate": 0,
          "quantity": 2,
          "value": 5
        },
        {
          "interestRate": 0,
          "quantity": 3,
          "value": 3.33
        }
      ],
      "payment": {
        "bin": null,
        "id": 18,
        "isDefault": false,
        "name": "Mercado Pago - XBKAG5IMTJRA4I",
        "self": {
          "href": "/api/pvt/payment-systems/18"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 26,
        "isDefault": false,
        "name": "PagSeguro - HRXC4VO76NU3DI",
        "self": {
          "href": "/api/pvt/payment-systems/26"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 33,
        "isDefault": false,
        "name": "ERedeV2 - Nova Cabal",
        "self": {
          "href": "/api/pvt/payment-systems/33"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 38,
        "isDefault": false,
        "name": "Safetypay - Q8J8XIXDSSPDS4I",
        "self": {
          "href": "/api/pvt/payment-systems/38"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 43,
        "isDefault": false,
        "name": "PagosWeb - PDA8UKCUTMX6R",
        "self": {
          "href": "/api/pvt/payment-systems/43"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 49,
        "isDefault": false,
        "name": "PayPalPlus - LW5HDKPMD3G14I",
        "self": {
          "href": "/api/pvt/payment-systems/49"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430004,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430004"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430014,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430014"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430201,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430201"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430202,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430202"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430203,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430203"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430208,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430208"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430210,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430210"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430220,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430220"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430222,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430222"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430230,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430230"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430231,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430231"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430232,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430232"
        },
        "value": 10
      }
    }
  ],
  "value": 10
}
```

> 400 Response

```json
{
  "error": {
    "code": "1",
    "exception": null,
    "message": "Value must be greater than Zero"
  }
}
```

<h3 id="installments-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ValidRequest](#schemavalidrequest)|
|400|Bad Request|Bad Request|[InvalidRequestValue](#schemainvalidrequestvalue)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|X-Accel-Expires|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="payments-gateway-api-configuration">Configuration</h1>

## Affiliations

<a id="opIdAffiliations"></a>

> Code samples

```bash
curl https://example.com/api/pvt/affiliations \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/affiliations`

Returns all affiliations that your provider can handle.

<h3 id="affiliations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

<h3 id="affiliations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Insert Affiliation

<a id="opIdInsertAffiliation"></a>

> Code samples

```bash
curl https://example.com/api/pvt/affiliations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "configuration": [
      {
        "name": "HowTo",
        "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
      },
      {
        "name": "MerchantId",
        "value": "sampleData"
      },
      {
        "name": "MerchantKey",
        "value": "sampleData"
      },
      {
        "name": "softDescriptor",
        "value": "teste"
      },
      {
        "name": "bankInvoiceProvider",
        "value": "Disabled"
      },
      {
        "name": "bankIDebitProvider",
        "value": "Disabled"
      },
      {
        "name": "useEarlySecurityCapture",
        "value": "0"
      },
      {
        "name": "isProduction",
        "value": "false"
      },
      {
        "name": "bankDebitProvider",
        "value": "Disabled"
      },
      {
        "name": "Registered",
        "value": "false"
      }
    ],
    "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
    "isConfigured": true,
    "isdelivered": true,
    "name": "CieloV3 - Teste Ellen"
  }'
```

`POST /api/pvt/affiliations`

Creates a new affiliation and returns a successful response.

> Body parameter

```json
{
  "configuration": [
    {
      "name": "HowTo",
      "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
    },
    {
      "name": "MerchantId",
      "value": "sampleData"
    },
    {
      "name": "MerchantKey",
      "value": "sampleData"
    },
    {
      "name": "softDescriptor",
      "value": "teste"
    },
    {
      "name": "bankInvoiceProvider",
      "value": "Disabled"
    },
    {
      "name": "bankIDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "useEarlySecurityCapture",
      "value": "0"
    },
    {
      "name": "isProduction",
      "value": "false"
    },
    {
      "name": "bankDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "Registered",
      "value": "false"
    }
  ],
  "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
  "isConfigured": true,
  "isdelivered": true,
  "name": "CieloV3 - Teste Ellen"
}
```

<h3 id="insert-affiliation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|body|body|[InsertAffiliationRequest](#schemainsertaffiliationrequest)|true|none|
|» configuration|body|[[Configuration](#schemaconfiguration)]|true|none|
|» implementation|body|string|true|none|
|» isConfigured|body|boolean|true|none|
|» isdelivered|body|boolean|true|none|
|» name|body|string|true|none|

<h3 id="insert-affiliation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Affiliation By Id

<a id="opIdAffiliationById"></a>

> Code samples

```bash
curl https://example.com/api/pvt/affiliations/e046d326-5421-45ab-95ae-f13d37f260b5 \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/affiliations/{affiliationId}`

Returns associated data for the specified affiliation Id, like name and implementation, for example.

<h3 id="affiliation-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|affiliationId|path|string|true|none|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

<h3 id="affiliation-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Affiliation

<a id="opIdUpdateAffiliation"></a>

> Code samples

```bash
curl https://example.com/api/pvt/affiliations/e046d326-5421-45ab-95ae-f13d37f260b5 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "configuration": [
      {
        "name": "HowTo",
        "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
      },
      {
        "name": "MerchantId",
        "value": "DATA TEST"
      },
      {
        "name": "MerchantKey",
        "value": "DATA TEST"
      },
      {
        "name": "softDescriptor",
        "value": "teste"
      },
      {
        "name": "bankInvoiceProvider",
        "value": "Disabled"
      },
      {
        "name": "bankIDebitProvider",
        "value": "Disabled"
      },
      {
        "name": "useEarlySecurityCapture",
        "value": "0"
      },
      {
        "name": "isProduction",
        "value": "false"
      },
      {
        "name": "bankDebitProvider",
        "value": "Disabled"
      },
      {
        "name": "Registered",
        "value": "false"
      }
    ],
    "id": "61c3b25b-554d-41a4-b989-a0ba215e4bba",
    "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
    "isConfigured": true,
    "isdelivered": true,
    "name": "CieloV3 - Teste Ellen"
  }'
```

`PUT /api/pvt/affiliations/{affiliationId}`

Returns all affiliations.

> Body parameter

```json
{
  "configuration": [
    {
      "name": "HowTo",
      "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
    },
    {
      "name": "MerchantId",
      "value": "DATA TEST"
    },
    {
      "name": "MerchantKey",
      "value": "DATA TEST"
    },
    {
      "name": "softDescriptor",
      "value": "teste"
    },
    {
      "name": "bankInvoiceProvider",
      "value": "Disabled"
    },
    {
      "name": "bankIDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "useEarlySecurityCapture",
      "value": "0"
    },
    {
      "name": "isProduction",
      "value": "false"
    },
    {
      "name": "bankDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "Registered",
      "value": "false"
    }
  ],
  "id": "61c3b25b-554d-41a4-b989-a0ba215e4bba",
  "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
  "isConfigured": true,
  "isdelivered": true,
  "name": "CieloV3 - Teste Ellen"
}
```

<h3 id="update-affiliation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|affiliationId|path|string|true|none|
|body|body|[UpdateAffiliationRequest](#schemaupdateaffiliationrequest)|true|none|
|» configuration|body|[[Configuration](#schemaconfiguration)]|true|none|
|» id|body|string|true|none|
|» implementation|body|string|true|none|
|» isConfigured|body|boolean|true|none|
|» isdelivered|body|boolean|true|none|
|» name|body|string|true|none|

<h3 id="update-affiliation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Available Payment Methods

<a id="opIdAvailablePaymentMethods"></a>

> Code samples

```bash
curl https://example.com/api/pvt/merchants/payment-systems \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/merchants/payment-systems`

Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.

<h3 id="available-payment-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

> Example responses

> 200 Response

```json
[
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": false,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PayPalPlusConnector",
    "description": null,
    "dueDate": "2016-04-16T14:52:03.7360354Z",
    "fields": null,
    "groupName": "PayPalPlus",
    "id": 49,
    "implementation": "Vtex.PaymentGateway.PayPalPlus.PayPalPlusPayment",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "PayPalPlus",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PayPalPlusConnector",
        "id": "2d062b92-f247-4935-a237-8e309e2b4422"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": true,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.MercadoPagoConnector",
    "description": null,
    "dueDate": "2016-04-23T02:52:03.7360354Z",
    "fields": null,
    "groupName": "MercadoPago",
    "id": 18,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.MercadoPagoPayment",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Mercado Pago",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.MercadoPagoConnector",
        "id": "8a455c9f-fa4e-40c6-b68d-cb91eeee4c87"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.BraspagConnector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.7516359Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 8,
    "implementation": "Vtex.PaymentGateway.CreditCard.Hipercard",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Hipercard",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.BraspagConnector",
        "id": "dbf01be3-e701-4791-a2f0-9ce7f2540d5f"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "bd44b35b-11e1-4684-8a42-db8ca4215b99"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999999999999999999",
      "regex": "^606282|^3841(?:[0|4|6]{1})0",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        1,
        1,
        1
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": false,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": true,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector",
    "description": null,
    "dueDate": "2016-04-20T23:59:59.999Z",
    "fields": null,
    "groupName": "bankInvoice",
    "id": 6,
    "implementation": "Vtex.PaymentGateway.BankIssuedInvoice.BankIssuedInvoicePayment",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Boleto Bancário",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector",
        "id": "c1ab4c11-5da3-41a5-9933-73639ce69cdf"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": false,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.VtexGiftCardHub.VtexGiftCardHubConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:03.7516359Z",
    "fields": null,
    "groupName": "giftCard",
    "id": 16,
    "implementation": "Vtex.PaymentGateway.GiftCard.VtexGiftCard",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Vale",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.VtexGiftCardHub.VtexGiftCardHubConnector",
        "id": "fb238965-9f24-45c1-8f85-3aae93d3f752"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.767237Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 9,
    "implementation": "Vtex.PaymentGateway.CreditCard.Elo",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Elo",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector",
        "id": "c6ddf433-a516-4aa7-abb6-bda70d5243b2"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999 9999 9999 9999",
      "regex": "^((((438935)|(509048)|(509049)|(509067)|(509069)|(509050)|(509074)|(509068)|(509040)|(509045)|(509051)|(509046)|(509066)|(509047)|(509042)|(509052)|(509043)|(509064)|(509040)|(636368)|(636368)|(504175)|(451416)|(636297))\\d{0,10})|((5067)|(4576)|(4011))\\d{0,12})$",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": true,
    "allowInstallments": false,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.SafetyPay.SafetyPayConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:03.767237Z",
    "fields": null,
    "groupName": "safetypay",
    "id": 38,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.SafetypayPayment",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Safetypay",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.SafetyPay.SafetyPayConnector",
        "id": "d6027c18-4801-4ef9-b6f2-ca2163be8a32"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.767237Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 4,
    "implementation": "Vtex.PaymentGateway.CreditCard.Mastercard",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Mastercard",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "3180c470-5b2a-4fd2-b063-f28a19c79e8c"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.TestConnector",
        "id": "a4472931-4508-4376-ba5a-11dac634b397"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999 9999 9999 9999",
      "regex": "^5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0})",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.767237Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 2,
    "implementation": "Vtex.PaymentGateway.CreditCard.Visa",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Visa",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "06137299-ed94-4db2-a7e0-0cbfa7602e42"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.RedecardConnector",
        "id": "a944ceb5-a43d-4b90-b625-5bde2b4db5b8"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagSeguroDirect.PagSeguroConnector",
        "id": "c132f93f-c9e3-402b-b161-89c8fb7f0651"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999 9999 9999 9999",
      "regex": "^4",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.767237Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 3,
    "implementation": "Vtex.PaymentGateway.CreditCard.Diners",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Diners",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "a2c6087d-9efd-40a6-a573-a13cd7ec69ce"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999 999999 9999",
      "regex": "^3(0[0-5]|[68][0-9])[0-9]{11}$",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.7828384Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 7,
    "implementation": "Vtex.PaymentGateway.CreditCard.Aura",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Aura",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.CieloConnector",
        "id": "519046a1-36f2-45d8-852a-610fc1847b30"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector",
        "id": "5f41dd10-a338-4e43-8b56-ec72408ff731"
      },
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "420f9a00-dcfe-410d-b51f-5bf8461d2326"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999999999999999999",
      "regex": "^50[0-9]{17}$",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": []
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": true,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": true,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
    "description": null,
    "dueDate": "2016-04-18T02:52:03.7828384Z",
    "fields": null,
    "groupName": "creditCard",
    "id": 33,
    "implementation": "Vtex.PaymentGateway.CreditCard.Cabal",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "Cabal",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector",
        "id": "e243df96-cf1b-4d26-9a3a-de7a02feb657"
      }
    ],
    "validator": {
      "cardCodeMask": "999",
      "cardCodeRegex": "^[0-9]{3}$",
      "mask": "9999 9999 9999 9999",
      "regex": "6(0(4(2(0([1-9])|1([0-9])))))|6(0(3(5(2(2)))))|5(8(9(6(5(7)))))|6(0(4(2(2([1-9])|[3-9][0-9])|4(0(0))|3[0-9]{0})))",
      "useBillingAddress": true,
      "useCardHolderName": true,
      "useCvv": true,
      "useExpirationDate": true,
      "validCardLengths": null,
      "weights": [
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2
      ]
    }
  },
  {
    "affiliationId": null,
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": true,
    "allowInstallments": false,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagSeguro.PagSeguroConnector",
    "description": null,
    "dueDate": "2016-04-22T02:52:03.7828384Z",
    "fields": null,
    "groupName": "pagSeguro",
    "id": 26,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagSeguroPayment",
    "isAvailable": true,
    "isCustom": false,
    "isSelfAuthorized": false,
    "name": "PagSeguro",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagSeguro.PagSeguroConnector",
        "id": "9bdd6af3-6edd-4df8-8ba4-3b8f7b953bea"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430004,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "RedPagos (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430014,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "Abitab (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430201,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "VISA (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430202,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "MASTER (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430203,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "OCA (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430208,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "DINERS (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430210,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "LIDER (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430220,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "VISA BROU (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430222,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "VISA MAS BROU (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430230,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "VISA SANTANDER (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.406849Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430231,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "MASTER SANTANDER (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  },
  {
    "affiliationId": "49de1a21-ca32-4e66-855c-59ddfae31995",
    "allowCommercialCondition": false,
    "allowCommercialPolicy": true,
    "allowCountry": false,
    "allowInstallments": true,
    "allowIssuer": false,
    "allowMultiple": true,
    "allowNotification": false,
    "allowPeriod": true,
    "antifraudConnectorImplementation": null,
    "connectorId": 0,
    "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
    "description": null,
    "dueDate": "2016-04-16T02:52:04.4224366Z",
    "fields": null,
    "groupName": "PagosWeb",
    "id": 430232,
    "implementation": "Vtex.PaymentGateway.RedirectPayments.PagosWebPayment",
    "isAvailable": true,
    "isCustom": true,
    "isSelfAuthorized": false,
    "name": "VISA SANTANDER HIPER (PagosWeb) ",
    "requiresDocument": false,
    "requiresPhone": false,
    "rules": [
      {
        "antifraudImplementation": null,
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.PagosWebConnector",
        "id": "22974080-1b2e-4ed2-a526-6d036179d50e"
      }
    ],
    "validator": {
      "cardCodeMask": null,
      "cardCodeRegex": null,
      "mask": null,
      "regex": null,
      "useBillingAddress": false,
      "useCardHolderName": false,
      "useCvv": false,
      "useExpirationDate": false,
      "validCardLengths": null,
      "weights": null
    }
  }
]
```

<h3 id="available-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="available-payment-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentSystemsResponse](#schemapaymentsystemsresponse)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Rules

<a id="opIdRules"></a>

> Code samples

```bash
curl https://example.com/api/pvt/rules \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/rules`

Returns all rules conditions your provider can handle.

<h3 id="rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|

<h3 id="rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Insert Rule

<a id="opIdInsertRule"></a>

> Code samples

```bash
curl https://example.com/api/pvt/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "antifraud": {
      "affiliationId": null,
      "implementation": null
    },
    "beginDate": null,
    "condition": null,
    "connector": {
      "affiliationId": "e046d326-5421-45ab-95ae-f13d37f260b5",
      "implementation": "Vtex.PaymentGateway.Connectors.PromissoryConnector"
    },
    "country": null,
    "dateIntervals": null,
    "enabled": true,
    "endDate": null,
    "installmentOptions": null,
    "installmentsService": null,
    "isDefault": false,
    "isSelfAuthorized": null,
    "issuer": {
      "name": null
    },
    "multiMerchantList": null,
    "name": "Cash - Custom",
    "paymentSystem": {
      "id": 47,
      "implementation": null,
      "name": "Cash"
    },
    "requiresAuthentication": null,
    "salesChannels": [
      {
        "id": ":ALL:"
      }
    ]
  }'
```

`POST /api/pvt/rules`

Creates a new rule and returns a successful response.

> Body parameter

```json
{
  "antifraud": {
    "affiliationId": null,
    "implementation": null
  },
  "beginDate": null,
  "condition": null,
  "connector": {
    "affiliationId": "e046d326-5421-45ab-95ae-f13d37f260b5",
    "implementation": "Vtex.PaymentGateway.Connectors.PromissoryConnector"
  },
  "country": null,
  "dateIntervals": null,
  "enabled": true,
  "endDate": null,
  "installmentOptions": null,
  "installmentsService": null,
  "isDefault": false,
  "isSelfAuthorized": null,
  "issuer": {
    "name": null
  },
  "multiMerchantList": null,
  "name": "Cash - Custom",
  "paymentSystem": {
    "id": 47,
    "implementation": null,
    "name": "Cash"
  },
  "requiresAuthentication": null,
  "salesChannels": [
    {
      "id": ":ALL:"
    }
  ]
}
```

<h3 id="insert-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|body|body|[InsertRuleRequest](#schemainsertrulerequest)|true|none|
|» antifraud|body|[Antifraud](#schemaantifraud)|true|none|
|» beginDate|body|string \| null|true|none|
|» condition|body|string \| null|true|none|
|» connector|body|[Connector](#schemaconnector)|true|none|
|» country|body|string \| null|true|none|
|» dateIntervals|body|string \| null|true|none|
|» enabled|body|boolean|true|none|
|» endDate|body|string \| null|true|none|
|» installmentOptions|body|string \| null|true|none|
|» installmentsService|body|string \| null|true|none|
|» isDefault|body|boolean|true|none|
|» isSelfAuthorized|body|string \| null|true|none|
|» issuer|body|[Issuer](#schemaissuer)|true|none|
|» multiMerchantList|body|string \| null|true|none|
|» name|body|string|true|none|
|» paymentSystem|body|[PaymentSystem](#schemapaymentsystem)|true|none|
|» requiresAuthentication|body|string \| null|true|none|
|» salesChannels|body|[[SalesChannel](#schemasaleschannel)]|true|none|

<h3 id="insert-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Rule By Id

<a id="opIdRuleById"></a>

> Code samples

```bash
curl https://example.com/api/pvt/rules/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/rules/{ruleId}`

Returns rule by specified RuleId.

<h3 id="rule-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|ruleId|path|string|true|none|

<h3 id="rule-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Rule By Id

<a id="opIdPutRuleById"></a>

> Code samples

```bash
curl https://example.com/api/pvt/rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "antifraud": {
      "affiliationId": "f952588c-8b41-41cc-a06f-c0f48f7320ef"
    },
    "beginDate": "0001-01-01T00:00:00",
    "condition": null,
    "connector": {
      "affiliationId": "d0d7097e-0959-43dc-b335-852eda7b2992",
      "implementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector"
    },
    "country": null,
    "dateIntervals": null,
    "enabled": true,
    "endDate": "9999-12-31T23:59:59.9999999",
    "id": "eff4f368-b671-443b-b5a9-82616e87ea1c",
    "installmentOptions": {
      "interestRateMethod": null
    },
    "isDefault": null,
    "isSelfAuthorized": null,
    "issuer": {
      "name": null
    },
    "multiMerchantList": null,
    "name": "Visa gatewayqa",
    "paymentSystem": {
      "id": 2,
      "implementation": null,
      "name": "Visa"
    },
    "salesChannels": [
      {
        "id": "2"
      }
    ]
  }'
```

`PUT /api/pvt/rules/{ruleId}`

Update Rule.

> Body parameter

```json
{
  "antifraud": {
    "affiliationId": "f952588c-8b41-41cc-a06f-c0f48f7320ef"
  },
  "beginDate": "0001-01-01T00:00:00",
  "condition": null,
  "connector": {
    "affiliationId": "d0d7097e-0959-43dc-b335-852eda7b2992",
    "implementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector"
  },
  "country": null,
  "dateIntervals": null,
  "enabled": true,
  "endDate": "9999-12-31T23:59:59.9999999",
  "id": "eff4f368-b671-443b-b5a9-82616e87ea1c",
  "installmentOptions": {
    "interestRateMethod": null
  },
  "isDefault": null,
  "isSelfAuthorized": null,
  "issuer": {
    "name": null
  },
  "multiMerchantList": null,
  "name": "Visa gatewayqa",
  "paymentSystem": {
    "id": 2,
    "implementation": null,
    "name": "Visa"
  },
  "salesChannels": [
    {
      "id": "2"
    }
  ]
}
```

<h3 id="rule-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|ruleId|path|string|true|none|
|body|body|[RuleByIdRequest](#schemarulebyidrequest)|true|none|
|» antifraud|body|[Antifraud1](#schemaantifraud1)|true|none|
|» beginDate|body|string|true|none|
|» condition|body|string \| null|true|none|
|» connector|body|[Connector](#schemaconnector)|true|none|
|» country|body|string \| null|true|none|
|» dateIntervals|body|string \| null|true|none|
|» enabled|body|boolean|true|none|
|» endDate|body|string|true|none|
|» id|body|string|true|none|
|» installmentOptions|body|[InstallmentOptions](#schemainstallmentoptions)|true|none|
|» isDefault|body|string \| null|true|none|
|» isSelfAuthorized|body|string \| null|true|none|
|» issuer|body|[Issuer](#schemaissuer)|true|none|
|» multiMerchantList|body|string \| null|true|none|
|» name|body|string|true|none|
|» paymentSystem|body|[PaymentSystem](#schemapaymentsystem)|true|none|
|» salesChannels|body|[[SalesChannel](#schemasaleschannel)]|true|none|

<h3 id="rule-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Rule

<a id="opIdRule"></a>

> Code samples

```bash
curl https://example.com/api/pvt/rules/string \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`DELETE /api/pvt/rules/{ruleId}`

Deletes rules by specified Id.

<h3 id="delete-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|ruleId|path|string|true|none|

<h3 id="delete-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="payments-gateway-api-transaction-process">Transaction Process</h1>

This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.

## 2.1 Send Payments Information Public

<a id="opId2.SendPaymentsPublic"></a>

> Code samples

```bash
curl 'https://example.com/api/pub/transactions/string/payments?orderId=%7B%7BorderId%7D%7D' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '[
    {
      "currencyCode": "BRL",
      "fields": {
        "accountId": "",
        "address": null,
        "callbackUrl": "",
        "cardNumber": "5378244888889174",
        "document": "8041734561",
        "dueDate": "10/19",
        "holderName": "UserTest",
        "validationCode": "231"
      },
      "installments": 1,
      "installmentsInterestRate": 0,
      "installmentsValue": 100,
      "paymentSystem": 4,
      "referenceValue": 100,
      "transaction": {
        "id": "{{transactionId}}",
        "merchantName": "{{accountName}}"
      },
      "value": 100
    }
  ]'
```

`POST /api/pub/transactions/{transactionId}/payments`

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card. 

> Body parameter

```json
[
  {
    "currencyCode": "BRL",
    "fields": {
      "accountId": "",
      "address": null,
      "callbackUrl": "",
      "cardNumber": "5378244888889174",
      "document": "8041734561",
      "dueDate": "10/19",
      "holderName": "UserTest",
      "validationCode": "231"
    },
    "installments": 1,
    "installmentsInterestRate": 0,
    "installmentsValue": 100,
    "paymentSystem": 4,
    "referenceValue": 100,
    "transaction": {
      "id": "{{transactionId}}",
      "merchantName": "{{accountName}}"
    },
    "value": 100
  }
]
```

<h3 id="21-send-payments-information-public-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|string|true|none|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[[2.SendPaymentsPublicRequest](#schema2.sendpaymentspublicrequest)]|true|none|

<h3 id="21-send-payments-information-public-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## 1. Starts a new transaction

<a id="opId1.Createanewtransaction"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "channel": "{{accountName}}",
    "referenceId": "1234567",
    "salesChannel": "1",
    "urn": "",
    "value": 100
  }'
```

`POST /api/pvt/transactions`

This request is the first step to create a new transaction.

> Body parameter

```json
{
  "channel": "{{accountName}}",
  "referenceId": "1234567",
  "salesChannel": "1",
  "urn": "",
  "value": 100
}
```

<h3 id="1-starts-a-new-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|body|body|[1.CreateanewtransactionRequest](#schema1.createanewtransactionrequest)|true|none|
|» channel|body|string|true|none|
|» referenceId|body|string|true|none|
|» salesChannel|body|string|true|none|
|» urn|body|string|false|none|
|» value|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "acceptHeader": null,
  "antifraudAffiliationId": null,
  "antifraudTid": null,
  "authorizationDate": null,
  "authorizationToken": null,
  "buyer": null,
  "cancelationDate": null,
  "cancelationToken": null,
  "cancellations": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations"
  },
  "channel": "gatewayqa",
  "commitmentDate": null,
  "commitmentToken": null,
  "fields": [
    {
      "name": "owner",
      "value": "vtexappkey-appvtex"
    },
    {
      "name": "channel",
      "value": "gatewayqa"
    },
    {
      "name": "salesChannel",
      "value": "1"
    }
  ],
  "id": "85A3A4B536E64C108FB941CC3CF5A9A1",
  "interactions": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions"
  },
  "ipAddress": null,
  "markedForRecurrence": false,
  "owner": "vtexappkey-appvtex",
  "payments": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments"
  },
  "receiverUri": "https://gatewayqa.vtexpayments.com.br/split/85A3A4B536E64C108FB941CC3CF5A9A1/payments",
  "referenceKey": "1234567",
  "refundingDate": null,
  "refundingToken": null,
  "refunds": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds"
  },
  "salesChannel": "1",
  "settlements": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements"
  },
  "softDescriptor": null,
  "startDate": "2016-04-15T02:52:24.3801586Z",
  "status": "Started",
  "timeoutStatus": 0,
  "totalRefunds": 0,
  "transactionId": "85A3A4B536E64C108FB941CC3CF5A9A1",
  "urn": null,
  "userAgent": null,
  "value": 100
}
```

<h3 id="1-starts-a-new-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StartTransactionResponse](#schemastarttransactionresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Credentials|string||none|
|200|Access-Control-Allow-Origin|string||none|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Transaction Details

<a id="opIdTransactionDetails"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/transactions/{transactionId}`

Returns associated data for the specified transaction id, like value and status, for exemple.

<h3 id="transaction-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "acceptHeader": "application/json",
  "antifraudAffiliationId": null,
  "antifraudTid": null,
  "authorizationDate": null,
  "authorizationToken": null,
  "buyer": null,
  "cancelationDate": null,
  "cancelationToken": null,
  "cancellations": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/cancellations"
  },
  "channel": "gatewayqa",
  "commitmentDate": null,
  "commitmentToken": null,
  "fields": [
    {
      "name": "owner",
      "value": "vtexappkey-appvtex"
    },
    {
      "name": "channel",
      "value": "gatewayqa"
    },
    {
      "name": "salesChannel",
      "value": "1"
    },
    {
      "name": "markedForRecurrence",
      "value": "true"
    },
    {
      "name": "parentMerchant",
      "value": "648a4ce7-c16d-4fba-9854-072384636a32"
    },
    {
      "name": "orderId",
      "value": "1234567"
    },
    {
      "name": "ip",
      "value": "10.0.4.12"
    },
    {
      "name": "userAgent",
      "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36"
    },
    {
      "name": "acceptHeader",
      "value": "application/json"
    },
    {
      "name": "cart",
      "value": "{\"items\":[\r\n  {\r\n          \"id\":\"122323\",\r\n          \"name\":\"Tenis Preto I\",\r\n          \"value\":1000,\r\n          \"quantity\":1,\r\n          \"shippingDiscount\":0,\r\n          \"discount\":50\r\n        },\r\n        {\r\n          \"id\":\"122324\",\r\n          \"name\":\"Tenis Nike Azul\",\r\n          \"value\":1100,\r\n          \"quantity\":1,\r\n          \"shippingDiscount\":0,\r\n          \"discount\":50\r\n        }\r\n  ],\"freight\":200,\r\n  \"tax\":0\r\n  }"
    },
    {
      "name": "clientProfileData",
      "value": "{\"email\":\"teste@teste.com\",\"firstName\":\"Joao\",\"lastName\":\"Baptista\",\"document\":\"06134240040\",\"phone\":\"+551433118100\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"22011-050\",\"address\":{\"receiverName\":\"Ellen\",\"postalCode\":\"22011050\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA  GENERAL AZEVEDO PIMENTEL\",\"number\":\"12345\",\"neighborhood\":\"COPACABANA\",\"complement\":\"APTO 302\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false,\"documentType\":null,\"isFirstPurchase\":false,\"id\":null}"
    },
    {
      "name": "shippingData",
      "value": "{\"receiverName\":\"Rodrigo Saens\",\"postalCode\":\"65035430\",\"city\":\"SAO LUIS\",\"state\":\"MA\",\"country\":\"BRA\",\"street\":\"AV NEWTON  \",\"number\":\"321\",\"neighborhood\":\"MONTE CATELO\",\"complement\":\"APTO 102\",\"reference\":null}"
    }
  ],
  "id": "A3BDE325F76B4B758B398D900DF06150",
  "interactions": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/interactions"
  },
  "ipAddress": "10.0.4.12",
  "markedForRecurrence": true,
  "owner": "vtexappkey-appvtex",
  "payments": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments"
  },
  "receiverUri": null,
  "referenceKey": "1234567",
  "refundingDate": null,
  "refundingToken": null,
  "refunds": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/refunds"
  },
  "salesChannel": "1",
  "settlements": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/settlements"
  },
  "softDescriptor": null,
  "startDate": "2016-04-15T02:36:38",
  "status": "Cancelling",
  "timeoutStatus": 2,
  "totalRefunds": 0,
  "transactionId": "A3BDE325F76B4B758B398D900DF06150",
  "urn": null,
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36",
  "value": 100
}
```

<h3 id="transaction-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TransactionDetailsResponse](#schematransactiondetailsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## 3. Send Additional Data

<a id="opId3.SendAdditionalData"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/additional-data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '[
    [
      {
        "name": "cart",
        "value": "{\"items\":[{\"id\":\"122323\",\"name\":\"Tenis Preto I\",\"value\":1000,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50},{\"id\":\"122324\",\"name\":\"Tenis Nike Azul\",\"value\":1100,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50}],\"freight\":200,\"tax\":0}"
      },
      {
        "name": "clientProfileData",
        "value": "{\"id\":\"profileId123\",\"email\":\"teste@teste.com\",\"firstName\":\"Joao\",\"lastName\":\"Baptista\",\"document\":\"06134240040\",\"phone\":\"+551433118100\",\"documentType\":\"CPF\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"22011-050\",\"address\":{\"receiverName\":\"Ellen\",\"postalCode\":\"22011050\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA  GENERAL AZEVEDO PIMENTEL\",\"number\":\"12345\",\"neighborhood\":\"COPACABANA\",\"complement\":\"APTO 302\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false}"
      },
      {
        "name": "shippingData",
        "value": "{\"receiverName\":\"Rodrigo Saens\",\"postalCode\":\"65035430\",\"city\":\"SAO LUIS\",\"state\":\"MA\",\"country\":\"BRA\",\"street\":\"AV NEWTON  \",\"number\":\"321\",\"neighborhood\":\"MONTE CATELO\",\"complement\":\"APTO 102\",\"reference\":null}"
      }
    ]
  ]'
```

`POST /api/pvt/transactions/{transactionId}/additional-data`

The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.

> Body parameter

```json
[
  [
    {
      "name": "cart",
      "value": "{\"items\":[{\"id\":\"122323\",\"name\":\"Tenis Preto I\",\"value\":1000,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50},{\"id\":\"122324\",\"name\":\"Tenis Nike Azul\",\"value\":1100,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50}],\"freight\":200,\"tax\":0}"
    },
    {
      "name": "clientProfileData",
      "value": "{\"id\":\"profileId123\",\"email\":\"teste@teste.com\",\"firstName\":\"Joao\",\"lastName\":\"Baptista\",\"document\":\"06134240040\",\"phone\":\"+551433118100\",\"documentType\":\"CPF\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"22011-050\",\"address\":{\"receiverName\":\"Ellen\",\"postalCode\":\"22011050\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA  GENERAL AZEVEDO PIMENTEL\",\"number\":\"12345\",\"neighborhood\":\"COPACABANA\",\"complement\":\"APTO 302\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false}"
    },
    {
      "name": "shippingData",
      "value": "{\"receiverName\":\"Rodrigo Saens\",\"postalCode\":\"65035430\",\"city\":\"SAO LUIS\",\"state\":\"MA\",\"country\":\"BRA\",\"street\":\"AV NEWTON  \",\"number\":\"321\",\"neighborhood\":\"MONTE CATELO\",\"complement\":\"APTO 102\",\"reference\":null}"
    }
  ]
]
```

<h3 id="3-send-additional-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|Transaction identification.|
|body|body|[[3.SendAdditionalDataRequest](#schema3.sendadditionaldatarequest)]|true|none|

<h3 id="3-send-additional-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Do authorization

<a id="opId4.Doauthorization"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/authorization-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "prepareForRecurrency": false,
    "softDescriptor": "{{accountName}}",
    "transactionId": "{{transactionId}}"
  }'
```

`POST /api/pvt/transactions/{transactionId}/authorization-request`

The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.

> Body parameter

```json
{
  "prepareForRecurrency": false,
  "softDescriptor": "{{accountName}}",
  "transactionId": "{{transactionId}}"
}
```

<h3 id="do-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[4.DoauthorizationRequest](#schema4.doauthorizationrequest)|true|none|
|» prepareForRecurrency|body|boolean|true|none|
|» softDescriptor|body|string|true|none|
|» transactionId|body|string|true|none|

<h3 id="do-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## 2.2 Send Payments With Saved Credit Card

<a id="opId2.SendPaymentsWithSavedCreditCard"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '[
    {
      "currencyCode": "BRL",
      "fields": {
        "accountId": "44D964F2053642E888E3B23549937F87",
        "address": null,
        "callbackUrl": "",
        "firstDigits": "411111",
        "validationCode": "231"
      },
      "installments": 1,
      "installmentsInterestRate": 0,
      "installmentsValue": 100,
      "paymentSystem": 2,
      "referenceValue": 100,
      "transaction": {
        "id": "{{transactionId}}",
        "merchantName": "{{accountName}}"
      },
      "value": 100
    }
  ]'
```

`POST /api/pvt/transactions/{transactionId}/payments`

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.

> Body parameter

```json
[
  {
    "currencyCode": "BRL",
    "fields": {
      "accountId": "44D964F2053642E888E3B23549937F87",
      "address": null,
      "callbackUrl": "",
      "firstDigits": "411111",
      "validationCode": "231"
    },
    "installments": 1,
    "installmentsInterestRate": 0,
    "installmentsValue": 100,
    "paymentSystem": 2,
    "referenceValue": 100,
    "transaction": {
      "id": "{{transactionId}}",
      "merchantName": "{{accountName}}"
    },
    "value": 100
  }
]
```

<h3 id="22-send-payments-with-saved-credit-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[[2.SendPaymentsWithSavedCreditCardRequest](#schema2.sendpaymentswithsavedcreditcardrequest)]|true|none|

<h3 id="22-send-payments-with-saved-credit-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Payment Details

<a id="opIdPaymentDetails"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/payments/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/transactions/{transactionId}/payments/{paymentId}`

Returns associated information details for the specified payment id.

<h3 id="payment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|paymentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ConnectorResponses": null,
  "ShowConnectorResponses": false,
  "allowInstallments": true,
  "allowIssuer": true,
  "allowNotification": false,
  "connector": "E-Rede V2",
  "connectorResponse": null,
  "currencyCode": null,
  "description": null,
  "fields": [
    {
      "name": "affiliationId",
      "value": "c4016e3b-9ed9-4735-98dc-f803c93c5e5c"
    },
    {
      "name": "callbackUrl",
      "value": "1"
    },
    {
      "name": "baseUrl",
      "value": "https://gatewayqa.vtexpayments.com.br:443"
    },
    {
      "name": "cardHolder",
      "value": "UserTest"
    },
    {
      "name": "firstDigits",
      "value": "444433"
    },
    {
      "name": "lastDigits",
      "value": "1111"
    },
    {
      "name": "expiryMonth",
      "value": "10"
    },
    {
      "name": "expiryYear",
      "value": "2019"
    },
    {
      "name": "accountId",
      "value": "A14180691F1D4CC9941202E10C6B1A33"
    },
    {
      "name": "connector",
      "value": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector"
    }
  ],
  "group": "creditCard",
  "id": "712B47E0AB4F4E63BB5FC1DB445AC0B9",
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "isAvailable": true,
  "isCustom": false,
  "merchantName": null,
  "paymentSystem": 2,
  "paymentSystemName": "Visa",
  "provider": null,
  "referenceValue": 100,
  "returnCode": null,
  "returnMessage": null,
  "self": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9"
  },
  "sheets": null,
  "status": "Received",
  "tid": null,
  "value": 100
}
```

<h3 id="payment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaymentDetailsResponse](#schemapaymentdetailsresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
|200|Server|string||none|
|200|X-AspNet-Version|string||none|
|200|X-Powered-By|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Transaction Settlement Details

<a id="opIdTransactionSettlementDetails"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/settlements \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}'
```

`GET /api/pvt/transactions/{transactionId}/settlements`

Returns associated settlements data for the specified transaction id.

<h3 id="transaction-settlement-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "connectorResponse": null,
      "date": "2018-06-05T12:55:58.6262759Z",
      "payment": {
        "href": "/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE"
      },
      "paymentId": "87055E7199A446519EB07F1243D5B8BE",
      "type": "auto-settlement",
      "value": 4499000
    }
  ],
  "requests": [
    {
      "date": "2018-06-05T13:08:22",
      "id": "AFB933448FFD4867BF82BCC7026A082C",
      "value": 4499000
    }
  ]
}
```

<h3 id="transaction-settlement-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TransactionSettlementDetails](#schematransactionsettlementdetails)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|cache-control|string||none|
|200|connection|string||none|
|200|content-length|string||none|
|200|content-type|string||none|
|200|date|string||none|
|200|expires|string||none|
|200|pragma|string||none|
|200|server|string||none|
|200|x-aspnet-version|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="payments-gateway-api-transaction-flow">Transaction Flow</h1>

After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.

## Cancel the transaction

<a id="opIdCancelthetransaction"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/cancellation-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "minicart": {
      "freight": 200,
      "items": [
        {
          "discount": 50,
          "id": "122323",
          "name": "Tenis Preto I",
          "quantity": 1,
          "shippingDiscount": 0,
          "value": 1000
        },
        {
          "discount": 50,
          "id": "122324",
          "name": "Tenis Nike Azul",
          "quantity": 1,
          "shippingDiscount": 0,
          "value": 1100
        }
      ],
      "tax": 0
    },
    "value": 2300
  }'
```

`POST /api/pvt/transactions/{transactionId}/cancellation-request`

Cancel's transaction that was previously approved, but not settled.

> Body parameter

```json
{
  "minicart": {
    "freight": 200,
    "items": [
      {
        "discount": 50,
        "id": "122323",
        "name": "Tenis Preto I",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1000
      },
      {
        "discount": 50,
        "id": "122324",
        "name": "Tenis Nike Azul",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1100
      }
    ],
    "tax": 0
  },
  "value": 2300
}
```

<h3 id="cancel-the-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[CancelthetransactionRequest](#schemacancelthetransactionrequest)|true|none|
|» minicart|body|object|false|This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.|
|» » freight|body|integer(int32)|false|none|
|» » items|body|[object]|false|none|
|» » tax|body|integer(int32)|false|none|
|» value|body|integer(int32)|true|Value of the purchase.|

<h3 id="cancel-the-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Refund the transaction

<a id="opIdRefundthetransaction"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/refunding-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "minicart": {
      "freight": 200,
      "items": [
        {
          "discount": 50,
          "id": "122323",
          "name": "Tenis Preto I",
          "quantity": 1,
          "shippingDiscount": 0,
          "value": 1000
        },
        {
          "discount": 50,
          "id": "122324",
          "name": "Tenis Nike Azul",
          "quantity": 1,
          "shippingDiscount": 0,
          "value": 1100
        }
      ],
      "tax": 0
    },
    "value": 2300
  }'
```

`POST /api/pvt/transactions/{transactionId}/refunding-request`

Refunds transaction's value that was previously settled.

> Body parameter

```json
{
  "minicart": {
    "freight": 200,
    "items": [
      {
        "discount": 50,
        "id": "122323",
        "name": "Tenis Preto I",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1000
      },
      {
        "discount": 50,
        "id": "122324",
        "name": "Tenis Nike Azul",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1100
      }
    ],
    "tax": 0
  },
  "value": 2300
}
```

<h3 id="refund-the-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[RefundthetransactionRequest](#schemarefundthetransactionrequest)|true|none|
|» minicart|body|object|false|This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.|
|» » freight|body|integer(int32)|false|none|
|» » items|body|[object]|false|none|
|» » tax|body|integer(int32)|false|none|
|» value|body|integer(int32)|true|Value of the purchase.|

<h3 id="refund-the-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Settle the transaction

<a id="opIdSettlethetransaction"></a>

> Code samples

```bash
curl https://example.com/api/pvt/transactions/string/settlement-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'X-PROVIDER-API-AppKey: {{X-PROVIDER-API-AppKey}}' \
  -H 'X-PROVIDER-API-AppToken: {{X-PROVIDER-API-AppToken}}' \
  -d '{
    "value": 100
  }'
```

`POST /api/pvt/transactions/{transactionId}/settlement-request`

Settles transaction's value.

> Body parameter

```json
{
  "value": 100
}
```

<h3 id="settle-the-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-PROVIDER-API-AppKey|header|string|true|The AppKey configured by the merchant (optional configuration)|
|X-PROVIDER-API-AppToken|header|string|true|The AppToken configured by the merchant (optional configuration)|
|Accept|header|string|true|Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json|
|Content-Type|header|string|true|The Media type of the body of the request.  Default value for payment provider protocol is application/json|
|transactionId|path|string|true|none|
|body|body|[SettlethetransactionRequest](#schemasettlethetransactionrequest)|true|none|
|» value|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "cancelledValue": 0,
  "connectorRefundedValue": 0,
  "message": null,
  "processingDate": "2017-08-16T17:40:59.3043324Z",
  "refundedToken": null,
  "refundedValue": 0,
  "status": 13,
  "statusDetail": "Finished",
  "token": "933276E993ED4452AE4CE2B9B5C6B2F4"
}
```

<h3 id="settle-the-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SettleResponse](#schemasettleresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|cache-control|string||none|
|200|connection|string||none|
|200|content-length|string||none|
|200|content-type|string||none|
|200|date|string||none|
|200|expires|string||none|
|200|pragma|string||none|
|200|server|string||none|
|200|x-aspnet-version|string||none|
|200|x-powered-by|string||none|
|200|x-vtex-operation-id|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_1.CreateanewtransactionRequest">1.CreateanewtransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schema1.createanewtransactionrequest"></a>
<a id="schema_1.CreateanewtransactionRequest"></a>
<a id="tocS1.createanewtransactionrequest"></a>
<a id="tocs1.createanewtransactionrequest"></a>

```json
{
  "channel": "{{accountName}}",
  "referenceId": "1234567",
  "salesChannel": "1",
  "urn": "",
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|none|
|referenceId|string|true|none|none|
|salesChannel|string|true|none|none|
|urn|string|false|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_2.SendPaymentsPrivateRequest">2.SendPaymentsPrivateRequest</h2>
<!-- backwards compatibility -->
<a id="schema2.sendpaymentsprivaterequest"></a>
<a id="schema_2.SendPaymentsPrivateRequest"></a>
<a id="tocS2.sendpaymentsprivaterequest"></a>
<a id="tocs2.sendpaymentsprivaterequest"></a>

```json
{
  "currencyCode": "BRL",
  "fields": {
    "accountId": "",
    "address": null,
    "callbackUrl": "",
    "cardNumber": "4111111111111",
    "document": "8041734561",
    "dueDate": "10/19",
    "holderName": "UserTest",
    "validationCode": "231"
  },
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "paymentSystem": 2,
  "referenceValue": 100,
  "transaction": {
    "id": "{{transactionId}}",
    "merchantName": "{{accountName}}"
  },
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|none|
|fields|[Fields](#schemafields)|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|transaction|[Transaction](#schematransaction)|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_2.SendPaymentsPublicRequest">2.SendPaymentsPublicRequest</h2>
<!-- backwards compatibility -->
<a id="schema2.sendpaymentspublicrequest"></a>
<a id="schema_2.SendPaymentsPublicRequest"></a>
<a id="tocS2.sendpaymentspublicrequest"></a>
<a id="tocs2.sendpaymentspublicrequest"></a>

```json
{
  "currencyCode": "BRL",
  "fields": {
    "accountId": "",
    "address": null,
    "callbackUrl": "",
    "cardNumber": "5378244888889174",
    "document": "8041734561",
    "dueDate": "10/19",
    "holderName": "UserTest",
    "validationCode": "231"
  },
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "paymentSystem": 4,
  "referenceValue": 100,
  "transaction": {
    "id": "{{transactionId}}",
    "merchantName": "{{accountName}}"
  },
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|none|
|fields|[Fields](#schemafields)|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|transaction|[Transaction](#schematransaction)|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_2.SendPaymentsWithSavedCreditCardRequest">2.SendPaymentsWithSavedCreditCardRequest</h2>
<!-- backwards compatibility -->
<a id="schema2.sendpaymentswithsavedcreditcardrequest"></a>
<a id="schema_2.SendPaymentsWithSavedCreditCardRequest"></a>
<a id="tocS2.sendpaymentswithsavedcreditcardrequest"></a>
<a id="tocs2.sendpaymentswithsavedcreditcardrequest"></a>

```json
{
  "currencyCode": "BRL",
  "fields": {
    "accountId": "44D964F2053642E888E3B23549937F87",
    "address": null,
    "callbackUrl": "",
    "firstDigits": "411111",
    "validationCode": "231"
  },
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "paymentSystem": 2,
  "referenceValue": 100,
  "transaction": {
    "id": "{{transactionId}}",
    "merchantName": "{{accountName}}"
  },
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|none|
|fields|[Fields3](#schemafields3)|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|transaction|[Transaction](#schematransaction)|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_3.SendAdditionalDataRequest">3.SendAdditionalDataRequest</h2>
<!-- backwards compatibility -->
<a id="schema3.sendadditionaldatarequest"></a>
<a id="schema_3.SendAdditionalDataRequest"></a>
<a id="tocS3.sendadditionaldatarequest"></a>
<a id="tocs3.sendadditionaldatarequest"></a>

```json
[
  {
    "name": "cart",
    "value": "{\"items\":[{\"id\":\"122323\",\"name\":\"Tenis Preto I\",\"value\":1000,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50},{\"id\":\"122324\",\"name\":\"Tenis Nike Azul\",\"value\":1100,\"quantity\":1,\"shippingDiscount\":0,\"discount\":50}],\"freight\":200,\"tax\":0}"
  },
  {
    "name": "clientProfileData",
    "value": "{\"id\":\"profileId123\",\"email\":\"teste@teste.com\",\"firstName\":\"Joao\",\"lastName\":\"Baptista\",\"document\":\"06134240040\",\"phone\":\"+551433118100\",\"documentType\":\"CPF\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"22011-050\",\"address\":{\"receiverName\":\"Ellen\",\"postalCode\":\"22011050\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA  GENERAL AZEVEDO PIMENTEL\",\"number\":\"12345\",\"neighborhood\":\"COPACABANA\",\"complement\":\"APTO 302\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false}"
  },
  {
    "name": "shippingData",
    "value": "{\"receiverName\":\"Rodrigo Saens\",\"postalCode\":\"65035430\",\"city\":\"SAO LUIS\",\"state\":\"MA\",\"country\":\"BRA\",\"street\":\"AV NEWTON  \",\"number\":\"321\",\"neighborhood\":\"MONTE CATELO\",\"complement\":\"APTO 102\",\"reference\":null}"
  }
]
```

<h2 id="tocS_4.DoauthorizationRequest">4.DoauthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schema4.doauthorizationrequest"></a>
<a id="schema_4.DoauthorizationRequest"></a>
<a id="tocS4.doauthorizationrequest"></a>
<a id="tocs4.doauthorizationrequest"></a>

```json
{
  "prepareForRecurrency": false,
  "softDescriptor": "{{accountName}}",
  "transactionId": "{{transactionId}}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prepareForRecurrency|boolean|true|none|none|
|softDescriptor|string|true|none|none|
|transactionId|string|true|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "connectorResponse": null,
  "date": "2018-06-05T12:55:58.6262759Z",
  "payment": {
    "href": "/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE"
  },
  "paymentId": "87055E7199A446519EB07F1243D5B8BE",
  "type": "auto-settlement",
  "value": 4499000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorResponse|string \| null|true|none|none|
|date|string|true|none|none|
|payment|[Payment1](#schemapayment1)|true|none|none|
|paymentId|string|true|none|none|
|type|string|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_Antifraud">Antifraud</h2>
<!-- backwards compatibility -->
<a id="schemaantifraud"></a>
<a id="schema_Antifraud"></a>
<a id="tocSantifraud"></a>
<a id="tocsantifraud"></a>

```json
{
  "affiliationId": null,
  "implementation": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliationId|string \| null|true|none|none|
|implementation|string \| null|true|none|none|

<h2 id="tocS_Antifraud1">Antifraud1</h2>
<!-- backwards compatibility -->
<a id="schemaantifraud1"></a>
<a id="schema_Antifraud1"></a>
<a id="tocSantifraud1"></a>
<a id="tocsantifraud1"></a>

```json
{
  "affiliationId": "f952588c-8b41-41cc-a06f-c0f48f7320ef"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliationId|string|true|none|none|

<h2 id="tocS_Cancellations">Cancellations</h2>
<!-- backwards compatibility -->
<a id="schemacancellations"></a>
<a id="schema_Cancellations"></a>
<a id="tocScancellations"></a>
<a id="tocscancellations"></a>

```json
{
  "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_CancelthetransactionRequest">CancelthetransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelthetransactionrequest"></a>
<a id="schema_CancelthetransactionRequest"></a>
<a id="tocScancelthetransactionrequest"></a>
<a id="tocscancelthetransactionrequest"></a>

```json
{
  "minicart": {
    "freight": 200,
    "items": [
      {
        "discount": 50,
        "id": "122323",
        "name": "Tenis Preto I",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1000
      },
      {
        "discount": 50,
        "id": "122324",
        "name": "Tenis Nike Azul",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1100
      }
    ],
    "tax": 0
  },
  "value": 2300
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minicart|object|false|none|This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.|
|value|integer(int32)|true|none|Value of the purchase.|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "name": "HowTo",
  "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "affiliationId": "e046d326-5421-45ab-95ae-f13d37f260b5",
  "implementation": "Vtex.PaymentGateway.Connectors.PromissoryConnector"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliationId|string|true|none|none|
|implementation|string|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "1",
  "exception": null,
  "message": "Value must be greater than Zero"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|exception|string \| null|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "name": "owner",
  "value": "vtexappkey-appvtex"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
{
  "accountId": "",
  "address": null,
  "callbackUrl": "",
  "cardNumber": "4111111111111",
  "document": "8041734561",
  "dueDate": "10/19",
  "holderName": "UserTest",
  "validationCode": "231"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|address|string \| null|true|none|none|
|callbackUrl|string|true|none|none|
|cardNumber|string|true|none|none|
|document|string|true|none|none|
|dueDate|string|true|none|none|
|holderName|string|true|none|none|
|validationCode|string|true|none|none|

<h2 id="tocS_Fields1">Fields1</h2>
<!-- backwards compatibility -->
<a id="schemafields1"></a>
<a id="schema_Fields1"></a>
<a id="tocSfields1"></a>
<a id="tocsfields1"></a>

```json
{
  "name": "affiliationId",
  "value": "c4016e3b-9ed9-4735-98dc-f803c93c5e5c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_Fields3">Fields3</h2>
<!-- backwards compatibility -->
<a id="schemafields3"></a>
<a id="schema_Fields3"></a>
<a id="tocSfields3"></a>
<a id="tocsfields3"></a>

```json
{
  "accountId": "44D964F2053642E888E3B23549937F87",
  "address": null,
  "callbackUrl": "",
  "firstDigits": "411111",
  "validationCode": "231"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|none|
|address|string \| null|true|none|none|
|callbackUrl|string|true|none|none|
|firstDigits|string|true|none|none|
|validationCode|string|true|none|none|

<h2 id="tocS_InsertAffiliationRequest">InsertAffiliationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertaffiliationrequest"></a>
<a id="schema_InsertAffiliationRequest"></a>
<a id="tocSinsertaffiliationrequest"></a>
<a id="tocsinsertaffiliationrequest"></a>

```json
{
  "configuration": [
    {
      "name": "HowTo",
      "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
    },
    {
      "name": "MerchantId",
      "value": "sampleData"
    },
    {
      "name": "MerchantKey",
      "value": "sampleData"
    },
    {
      "name": "softDescriptor",
      "value": "teste"
    },
    {
      "name": "bankInvoiceProvider",
      "value": "Disabled"
    },
    {
      "name": "bankIDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "useEarlySecurityCapture",
      "value": "0"
    },
    {
      "name": "isProduction",
      "value": "false"
    },
    {
      "name": "bankDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "Registered",
      "value": "false"
    }
  ],
  "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
  "isConfigured": true,
  "isdelivered": true,
  "name": "CieloV3 - Teste Ellen"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|[[Configuration](#schemaconfiguration)]|true|none|none|
|implementation|string|true|none|none|
|isConfigured|boolean|true|none|none|
|isdelivered|boolean|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_InsertRuleRequest">InsertRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemainsertrulerequest"></a>
<a id="schema_InsertRuleRequest"></a>
<a id="tocSinsertrulerequest"></a>
<a id="tocsinsertrulerequest"></a>

```json
{
  "antifraud": {
    "affiliationId": null,
    "implementation": null
  },
  "beginDate": null,
  "condition": null,
  "connector": {
    "affiliationId": "e046d326-5421-45ab-95ae-f13d37f260b5",
    "implementation": "Vtex.PaymentGateway.Connectors.PromissoryConnector"
  },
  "country": null,
  "dateIntervals": null,
  "enabled": true,
  "endDate": null,
  "installmentOptions": null,
  "installmentsService": null,
  "isDefault": false,
  "isSelfAuthorized": null,
  "issuer": {
    "name": null
  },
  "multiMerchantList": null,
  "name": "Cash - Custom",
  "paymentSystem": {
    "id": 47,
    "implementation": null,
    "name": "Cash"
  },
  "requiresAuthentication": null,
  "salesChannels": [
    {
      "id": ":ALL:"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antifraud|[Antifraud](#schemaantifraud)|true|none|none|
|beginDate|string \| null|true|none|none|
|condition|string \| null|true|none|none|
|connector|[Connector](#schemaconnector)|true|none|none|
|country|string \| null|true|none|none|
|dateIntervals|string \| null|true|none|none|
|enabled|boolean|true|none|none|
|endDate|string \| null|true|none|none|
|installmentOptions|string \| null|true|none|none|
|installmentsService|string \| null|true|none|none|
|isDefault|boolean|true|none|none|
|isSelfAuthorized|string \| null|true|none|none|
|issuer|[Issuer](#schemaissuer)|true|none|none|
|multiMerchantList|string \| null|true|none|none|
|name|string|true|none|none|
|paymentSystem|[PaymentSystem](#schemapaymentsystem)|true|none|none|
|requiresAuthentication|string \| null|true|none|none|
|salesChannels|[[SalesChannel](#schemasaleschannel)]|true|none|none|

<h2 id="tocS_Installment">Installment</h2>
<!-- backwards compatibility -->
<a id="schemainstallment"></a>
<a id="schema_Installment"></a>
<a id="tocSinstallment"></a>
<a id="tocsinstallment"></a>

```json
{
  "options": [
    {
      "interestRate": 0,
      "quantity": 1,
      "value": 10
    }
  ],
  "payment": {
    "bin": null,
    "id": 2,
    "isDefault": false,
    "name": "ERedeV2 - Nova Visa",
    "self": {
      "href": "/api/pvt/payment-systems/2"
    },
    "value": 10
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[[Option](#schemaoption)]|true|none|none|
|payment|[Payment](#schemapayment)|true|none|none|

<h2 id="tocS_InstallmentOptions">InstallmentOptions</h2>
<!-- backwards compatibility -->
<a id="schemainstallmentoptions"></a>
<a id="schema_InstallmentOptions"></a>
<a id="tocSinstallmentoptions"></a>
<a id="tocsinstallmentoptions"></a>

```json
{
  "interestRateMethod": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interestRateMethod|string \| null|true|none|none|

<h2 id="tocS_Interactions">Interactions</h2>
<!-- backwards compatibility -->
<a id="schemainteractions"></a>
<a id="schema_Interactions"></a>
<a id="tocSinteractions"></a>
<a id="tocsinteractions"></a>

```json
{
  "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_InvalidRequestValue">InvalidRequestValue</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestvalue"></a>
<a id="schema_InvalidRequestValue"></a>
<a id="tocSinvalidrequestvalue"></a>
<a id="tocsinvalidrequestvalue"></a>

```json
{
  "error": {
    "code": "1",
    "exception": null,
    "message": "Value must be greater than Zero"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|true|none|none|

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
{
  "name": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|true|none|none|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "interestRate": 0,
  "quantity": 1,
  "value": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interestRate|number|true|none|none|
|quantity|integer(int32)|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "bin": null,
  "id": 2,
  "isDefault": false,
  "name": "ERedeV2 - Nova Visa",
  "self": {
    "href": "/api/pvt/payment-systems/2"
  },
  "value": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|string \| null|true|none|none|
|id|integer(int32)|true|none|none|
|isDefault|boolean|true|none|none|
|name|string \| null|true|none|none|
|self|[Self](#schemaself)|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Payment1">Payment1</h2>
<!-- backwards compatibility -->
<a id="schemapayment1"></a>
<a id="schema_Payment1"></a>
<a id="tocSpayment1"></a>
<a id="tocspayment1"></a>

```json
{
  "href": "/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_PaymentDetailsResponse">PaymentDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdetailsresponse"></a>
<a id="schema_PaymentDetailsResponse"></a>
<a id="tocSpaymentdetailsresponse"></a>
<a id="tocspaymentdetailsresponse"></a>

```json
{
  "ConnectorResponses": null,
  "ShowConnectorResponses": false,
  "allowInstallments": true,
  "allowIssuer": true,
  "allowNotification": false,
  "connector": "E-Rede V2",
  "connectorResponse": null,
  "currencyCode": null,
  "description": null,
  "fields": [
    {
      "name": "affiliationId",
      "value": "c4016e3b-9ed9-4735-98dc-f803c93c5e5c"
    },
    {
      "name": "callbackUrl",
      "value": "1"
    },
    {
      "name": "baseUrl",
      "value": "https://gatewayqa.vtexpayments.com.br:443"
    },
    {
      "name": "cardHolder",
      "value": "UserTest"
    },
    {
      "name": "firstDigits",
      "value": "444433"
    },
    {
      "name": "lastDigits",
      "value": "1111"
    },
    {
      "name": "expiryMonth",
      "value": "10"
    },
    {
      "name": "expiryYear",
      "value": "2019"
    },
    {
      "name": "accountId",
      "value": "A14180691F1D4CC9941202E10C6B1A33"
    },
    {
      "name": "connector",
      "value": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector"
    }
  ],
  "group": "creditCard",
  "id": "712B47E0AB4F4E63BB5FC1DB445AC0B9",
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "isAvailable": true,
  "isCustom": false,
  "merchantName": null,
  "paymentSystem": 2,
  "paymentSystemName": "Visa",
  "provider": null,
  "referenceValue": 100,
  "returnCode": null,
  "returnMessage": null,
  "self": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9"
  },
  "sheets": null,
  "status": "Received",
  "tid": null,
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorResponses|string \| null|true|none|none|
|ShowConnectorResponses|boolean|true|none|none|
|allowInstallments|boolean|true|none|none|
|allowIssuer|boolean|true|none|none|
|allowNotification|boolean|true|none|none|
|connector|string|true|none|none|
|connectorResponse|string \| null|true|none|none|
|currencyCode|string \| null|true|none|none|
|description|string \| null|true|none|none|
|fields|[[Fields1](#schemafields1)]|true|none|none|
|group|string|true|none|none|
|id|string|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|isAvailable|boolean|true|none|none|
|isCustom|boolean|true|none|none|
|merchantName|string \| null|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|paymentSystemName|string|true|none|none|
|provider|string \| null|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|returnCode|string \| null|true|none|none|
|returnMessage|string \| null|true|none|none|
|self|[Self](#schemaself)|true|none|none|
|sheets|string \| null|true|none|none|
|status|string|true|none|none|
|tid|string \| null|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_PaymentSystem">PaymentSystem</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsystem"></a>
<a id="schema_PaymentSystem"></a>
<a id="tocSpaymentsystem"></a>
<a id="tocspaymentsystem"></a>

```json
{
  "id": 47,
  "implementation": null,
  "name": "Cash"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|implementation|string \| null|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_PaymentSystemsResponse">PaymentSystemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsystemsresponse"></a>
<a id="schema_PaymentSystemsResponse"></a>
<a id="tocSpaymentsystemsresponse"></a>
<a id="tocspaymentsystemsresponse"></a>

```json
{
  "affiliationId": null,
  "allowCommercialCondition": false,
  "allowCommercialPolicy": true,
  "allowCountry": false,
  "allowInstallments": false,
  "allowIssuer": false,
  "allowMultiple": true,
  "allowNotification": false,
  "allowPeriod": true,
  "antifraudConnectorImplementation": null,
  "connectorId": 0,
  "connectorImplementation": "Vtex.PaymentGateway.Connectors.PayPalPlusConnector",
  "description": null,
  "dueDate": "2016-04-16T14:52:03.7360354Z",
  "fields": null,
  "groupName": "PayPalPlus",
  "id": 49,
  "implementation": "Vtex.PaymentGateway.PayPalPlus.PayPalPlusPayment",
  "isAvailable": true,
  "isCustom": false,
  "isSelfAuthorized": false,
  "name": "PayPalPlus",
  "requiresDocument": false,
  "requiresPhone": false,
  "rules": [
    {
      "antifraudImplementation": null,
      "connectorImplementation": "Vtex.PaymentGateway.Connectors.PayPalPlusConnector",
      "id": "2d062b92-f247-4935-a237-8e309e2b4422"
    }
  ],
  "validator": {
    "cardCodeMask": null,
    "cardCodeRegex": null,
    "mask": null,
    "regex": null,
    "useBillingAddress": false,
    "useCardHolderName": false,
    "useCvv": false,
    "useExpirationDate": false,
    "validCardLengths": null,
    "weights": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliationId|string \| null|true|none|none|
|allowCommercialCondition|boolean|true|none|none|
|allowCommercialPolicy|boolean|true|none|none|
|allowCountry|boolean|true|none|none|
|allowInstallments|boolean|true|none|none|
|allowIssuer|boolean|true|none|none|
|allowMultiple|boolean|true|none|none|
|allowNotification|boolean|true|none|none|
|allowPeriod|boolean|true|none|none|
|antifraudConnectorImplementation|string \| null|true|none|none|
|connectorId|integer(int32)|true|none|none|
|connectorImplementation|string|true|none|none|
|description|string \| null|true|none|none|
|dueDate|string|true|none|none|
|fields|string \| null|true|none|none|
|groupName|string|true|none|none|
|id|integer(int32)|true|none|none|
|implementation|string|true|none|none|
|isAvailable|boolean|true|none|none|
|isCustom|boolean|true|none|none|
|isSelfAuthorized|boolean|true|none|none|
|name|string|true|none|none|
|requiresDocument|boolean|true|none|none|
|requiresPhone|boolean|true|none|none|
|rules|[[Rule](#schemarule)]|true|none|none|
|validator|[Validator](#schemavalidator)|true|none|none|

<h2 id="tocS_Payments">Payments</h2>
<!-- backwards compatibility -->
<a id="schemapayments"></a>
<a id="schema_Payments"></a>
<a id="tocSpayments"></a>
<a id="tocspayments"></a>

```json
{
  "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_PaymentsByTransactionResponse">PaymentsByTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsbytransactionresponse"></a>
<a id="schema_PaymentsByTransactionResponse"></a>
<a id="tocSpaymentsbytransactionresponse"></a>
<a id="tocspaymentsbytransactionresponse"></a>

```json
{
  "ConnectorResponses": null,
  "ShowConnectorResponses": false,
  "allowInstallments": true,
  "allowIssuer": true,
  "allowNotification": false,
  "connector": "E-Rede V2",
  "connectorResponse": null,
  "currencyCode": null,
  "description": null,
  "fields": [
    {
      "name": "affiliationId",
      "value": "c4016e3b-9ed9-4735-98dc-f803c93c5e5c"
    },
    {
      "name": "callbackUrl",
      "value": "1"
    },
    {
      "name": "baseUrl",
      "value": "https://gatewayqa.vtexpayments.com.br:443"
    },
    {
      "name": "cardHolder",
      "value": "UserTest"
    },
    {
      "name": "firstDigits",
      "value": "444433"
    },
    {
      "name": "lastDigits",
      "value": "1111"
    },
    {
      "name": "expiryMonth",
      "value": "10"
    },
    {
      "name": "expiryYear",
      "value": "2019"
    },
    {
      "name": "accountId",
      "value": "A14180691F1D4CC9941202E10C6B1A33"
    },
    {
      "name": "connector",
      "value": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector"
    }
  ],
  "group": "creditCard",
  "id": "712B47E0AB4F4E63BB5FC1DB445AC0B9",
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "isAvailable": true,
  "isCustom": false,
  "merchantName": null,
  "paymentSystem": 2,
  "paymentSystemName": "Visa",
  "provider": null,
  "referenceValue": 100,
  "returnCode": null,
  "returnMessage": null,
  "self": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments/712B47E0AB4F4E63BB5FC1DB445AC0B9"
  },
  "sheets": null,
  "status": "Received",
  "tid": null,
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorResponses|string \| null|true|none|none|
|ShowConnectorResponses|boolean|true|none|none|
|allowInstallments|boolean|true|none|none|
|allowIssuer|boolean|true|none|none|
|allowNotification|boolean|true|none|none|
|connector|string|true|none|none|
|connectorResponse|string \| null|true|none|none|
|currencyCode|string \| null|true|none|none|
|description|string \| null|true|none|none|
|fields|[[Fields1](#schemafields1)]|true|none|none|
|group|string|true|none|none|
|id|string|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|isAvailable|boolean|true|none|none|
|isCustom|boolean|true|none|none|
|merchantName|string \| null|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|paymentSystemName|string|true|none|none|
|provider|string \| null|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|returnCode|string \| null|true|none|none|
|returnMessage|string \| null|true|none|none|
|self|[Self](#schemaself)|true|none|none|
|sheets|string \| null|true|none|none|
|status|string|true|none|none|
|tid|string \| null|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_ReceivePaymentsResponse">ReceivePaymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareceivepaymentsresponse"></a>
<a id="schema_ReceivePaymentsResponse"></a>
<a id="tocSreceivepaymentsresponse"></a>
<a id="tocsreceivepaymentsresponse"></a>

```json
{
  "ConnectorResponses": null,
  "ShowConnectorResponses": false,
  "allowInstallments": true,
  "allowIssuer": true,
  "allowNotification": false,
  "connector": "E-Rede V2",
  "connectorResponse": null,
  "currencyCode": null,
  "description": null,
  "fields": [
    {
      "name": "affiliationId",
      "value": "c4016e3b-9ed9-4735-98dc-f803c93c5e5c"
    },
    {
      "name": "callbackUrl",
      "value": "1"
    },
    {
      "name": "baseUrl",
      "value": "https://gatewayqa.vtexpayments.com.br:443"
    },
    {
      "name": "cardHolder",
      "value": "UserTest"
    },
    {
      "name": "firstDigits",
      "value": "444433"
    },
    {
      "name": "lastDigits",
      "value": "1111"
    },
    {
      "name": "expiryMonth",
      "value": "10"
    },
    {
      "name": "expiryYear",
      "value": "2019"
    },
    {
      "name": "accountId",
      "value": "A14180691F1D4CC9941202E10C6B1A33"
    },
    {
      "name": "connector",
      "value": "Vtex.PaymentGateway.Connectors.ERedeV2.ERedeV2Connector"
    }
  ],
  "group": "creditCard",
  "id": "34C219BBF1504A19B0608FB498A48B0B",
  "installments": 1,
  "installmentsInterestRate": 0,
  "installmentsValue": 100,
  "isAvailable": true,
  "isCustom": false,
  "merchantName": null,
  "paymentSystem": 2,
  "paymentSystemName": "Visa",
  "provider": null,
  "referenceValue": 100,
  "returnCode": null,
  "returnMessage": null,
  "self": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments/34C219BBF1504A19B0608FB498A48B0B"
  },
  "sheets": null,
  "status": "Received",
  "tid": null,
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectorResponses|string \| null|true|none|none|
|ShowConnectorResponses|boolean|true|none|none|
|allowInstallments|boolean|true|none|none|
|allowIssuer|boolean|true|none|none|
|allowNotification|boolean|true|none|none|
|connector|string|true|none|none|
|connectorResponse|string \| null|true|none|none|
|currencyCode|string \| null|true|none|none|
|description|string \| null|true|none|none|
|fields|[[Fields1](#schemafields1)]|true|none|none|
|group|string|true|none|none|
|id|string|true|none|none|
|installments|integer(int32)|true|none|none|
|installmentsInterestRate|integer(int32)|true|none|none|
|installmentsValue|integer(int32)|true|none|none|
|isAvailable|boolean|true|none|none|
|isCustom|boolean|true|none|none|
|merchantName|string \| null|true|none|none|
|paymentSystem|integer(int32)|true|none|none|
|paymentSystemName|string|true|none|none|
|provider|string \| null|true|none|none|
|referenceValue|integer(int32)|true|none|none|
|returnCode|string \| null|true|none|none|
|returnMessage|string \| null|true|none|none|
|self|[Self](#schemaself)|true|none|none|
|sheets|string \| null|true|none|none|
|status|string|true|none|none|
|tid|string \| null|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_Refunds">Refunds</h2>
<!-- backwards compatibility -->
<a id="schemarefunds"></a>
<a id="schema_Refunds"></a>
<a id="tocSrefunds"></a>
<a id="tocsrefunds"></a>

```json
{
  "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_RefundthetransactionRequest">RefundthetransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundthetransactionrequest"></a>
<a id="schema_RefundthetransactionRequest"></a>
<a id="tocSrefundthetransactionrequest"></a>
<a id="tocsrefundthetransactionrequest"></a>

```json
{
  "minicart": {
    "freight": 200,
    "items": [
      {
        "discount": 50,
        "id": "122323",
        "name": "Tenis Preto I",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1000
      },
      {
        "discount": 50,
        "id": "122324",
        "name": "Tenis Nike Azul",
        "quantity": 1,
        "shippingDiscount": 0,
        "value": 1100
      }
    ],
    "tax": 0
  },
  "value": 2300
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minicart|object|false|none|This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder) or [Transaction Details](https://developers.vtex.com/vtex-rest-api/reference/transaction-process#transactiondetails) endpoints. It should only be included for transactions with split payment.|
|value|integer(int32)|true|none|Value of the purchase.|

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "date": "2018-06-05T13:08:22",
  "id": "AFB933448FFD4867BF82BCC7026A082C",
  "value": 4499000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|id|string|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "antifraudImplementation": null,
  "connectorImplementation": "Vtex.PaymentGateway.Connectors.PayPalPlusConnector",
  "id": "2d062b92-f247-4935-a237-8e309e2b4422"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antifraudImplementation|string \| null|true|none|none|
|connectorImplementation|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_RuleByIdRequest">RuleByIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemarulebyidrequest"></a>
<a id="schema_RuleByIdRequest"></a>
<a id="tocSrulebyidrequest"></a>
<a id="tocsrulebyidrequest"></a>

```json
{
  "antifraud": {
    "affiliationId": "f952588c-8b41-41cc-a06f-c0f48f7320ef"
  },
  "beginDate": "0001-01-01T00:00:00",
  "condition": null,
  "connector": {
    "affiliationId": "d0d7097e-0959-43dc-b335-852eda7b2992",
    "implementation": "Vtex.PaymentGateway.Connectors.MundipaggConnector"
  },
  "country": null,
  "dateIntervals": null,
  "enabled": true,
  "endDate": "9999-12-31T23:59:59.9999999",
  "id": "eff4f368-b671-443b-b5a9-82616e87ea1c",
  "installmentOptions": {
    "interestRateMethod": null
  },
  "isDefault": null,
  "isSelfAuthorized": null,
  "issuer": {
    "name": null
  },
  "multiMerchantList": null,
  "name": "Visa gatewayqa",
  "paymentSystem": {
    "id": 2,
    "implementation": null,
    "name": "Visa"
  },
  "salesChannels": [
    {
      "id": "2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antifraud|[Antifraud1](#schemaantifraud1)|true|none|none|
|beginDate|string|true|none|none|
|condition|string \| null|true|none|none|
|connector|[Connector](#schemaconnector)|true|none|none|
|country|string \| null|true|none|none|
|dateIntervals|string \| null|true|none|none|
|enabled|boolean|true|none|none|
|endDate|string|true|none|none|
|id|string|true|none|none|
|installmentOptions|[InstallmentOptions](#schemainstallmentoptions)|true|none|none|
|isDefault|string \| null|true|none|none|
|isSelfAuthorized|string \| null|true|none|none|
|issuer|[Issuer](#schemaissuer)|true|none|none|
|multiMerchantList|string \| null|true|none|none|
|name|string|true|none|none|
|paymentSystem|[PaymentSystem](#schemapaymentsystem)|true|none|none|
|salesChannels|[[SalesChannel](#schemasaleschannel)]|true|none|none|

<h2 id="tocS_SalesChannel">SalesChannel</h2>
<!-- backwards compatibility -->
<a id="schemasaleschannel"></a>
<a id="schema_SalesChannel"></a>
<a id="tocSsaleschannel"></a>
<a id="tocssaleschannel"></a>

```json
{
  "id": ":ALL:"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_Self">Self</h2>
<!-- backwards compatibility -->
<a id="schemaself"></a>
<a id="schema_Self"></a>
<a id="tocSself"></a>
<a id="tocsself"></a>

```json
{
  "href": "/api/pvt/payment-systems/2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_SettleResponse">SettleResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettleresponse"></a>
<a id="schema_SettleResponse"></a>
<a id="tocSsettleresponse"></a>
<a id="tocssettleresponse"></a>

```json
{
  "cancelledValue": 0,
  "connectorRefundedValue": 0,
  "message": null,
  "processingDate": "2017-08-16T17:40:59.3043324Z",
  "refundedToken": null,
  "refundedValue": 0,
  "status": 13,
  "statusDetail": "Finished",
  "token": "933276E993ED4452AE4CE2B9B5C6B2F4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelledValue|integer(int32)|true|none|none|
|connectorRefundedValue|integer(int32)|true|none|none|
|message|string \| null|true|none|none|
|processingDate|string|true|none|none|
|refundedToken|string \| null|true|none|none|
|refundedValue|integer(int32)|true|none|none|
|status|integer(int32)|true|none|none|
|statusDetail|string|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_Settlements">Settlements</h2>
<!-- backwards compatibility -->
<a id="schemasettlements"></a>
<a id="schema_Settlements"></a>
<a id="tocSsettlements"></a>
<a id="tocssettlements"></a>

```json
{
  "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|

<h2 id="tocS_SettlethetransactionRequest">SettlethetransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettlethetransactionrequest"></a>
<a id="schema_SettlethetransactionRequest"></a>
<a id="tocSsettlethetransactionrequest"></a>
<a id="tocssettlethetransactionrequest"></a>

```json
{
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|true|none|none|

<h2 id="tocS_StartTransactionResponse">StartTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttransactionresponse"></a>
<a id="schema_StartTransactionResponse"></a>
<a id="tocSstarttransactionresponse"></a>
<a id="tocsstarttransactionresponse"></a>

```json
{
  "acceptHeader": null,
  "antifraudAffiliationId": null,
  "antifraudTid": null,
  "authorizationDate": null,
  "authorizationToken": null,
  "buyer": null,
  "cancelationDate": null,
  "cancelationToken": null,
  "cancellations": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/cancellations"
  },
  "channel": "gatewayqa",
  "commitmentDate": null,
  "commitmentToken": null,
  "fields": [
    {
      "name": "owner",
      "value": "vtexappkey-appvtex"
    },
    {
      "name": "channel",
      "value": "gatewayqa"
    },
    {
      "name": "salesChannel",
      "value": "1"
    }
  ],
  "id": "85A3A4B536E64C108FB941CC3CF5A9A1",
  "interactions": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/interactions"
  },
  "ipAddress": null,
  "markedForRecurrence": false,
  "owner": "vtexappkey-appvtex",
  "payments": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/payments"
  },
  "receiverUri": "https://gatewayqa.vtexpayments.com.br/split/85A3A4B536E64C108FB941CC3CF5A9A1/payments",
  "referenceKey": "1234567",
  "refundingDate": null,
  "refundingToken": null,
  "refunds": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/refunds"
  },
  "salesChannel": "1",
  "settlements": {
    "href": "/api/pvt/transactions/85A3A4B536E64C108FB941CC3CF5A9A1/settlements"
  },
  "softDescriptor": null,
  "startDate": "2016-04-15T02:52:24.3801586Z",
  "status": "Started",
  "timeoutStatus": 0,
  "totalRefunds": 0,
  "transactionId": "85A3A4B536E64C108FB941CC3CF5A9A1",
  "urn": null,
  "userAgent": null,
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptHeader|string \| null|true|none|none|
|antifraudAffiliationId|string \| null|true|none|none|
|antifraudTid|string \| null|true|none|none|
|authorizationDate|string \| null|true|none|none|
|authorizationToken|string \| null|true|none|none|
|buyer|string \| null|true|none|none|
|cancelationDate|string \| null|true|none|none|
|cancelationToken|string \| null|true|none|none|
|cancellations|[Cancellations](#schemacancellations)|true|none|none|
|channel|string|true|none|none|
|commitmentDate|string \| null|true|none|none|
|commitmentToken|string \| null|true|none|none|
|fields|[[Field](#schemafield)]|true|none|none|
|id|string|true|none|none|
|interactions|[Interactions](#schemainteractions)|true|none|none|
|ipAddress|string \| null|true|none|none|
|markedForRecurrence|boolean|true|none|none|
|owner|string|true|none|none|
|payments|[Payments](#schemapayments)|true|none|none|
|receiverUri|string|true|none|none|
|referenceKey|string|true|none|none|
|refundingDate|string \| null|true|none|none|
|refundingToken|string \| null|true|none|none|
|refunds|[Refunds](#schemarefunds)|true|none|none|
|salesChannel|string|true|none|none|
|settlements|[Settlements](#schemasettlements)|true|none|none|
|softDescriptor|string \| null|true|none|none|
|startDate|string|true|none|none|
|status|string|true|none|none|
|timeoutStatus|integer(int32)|true|none|none|
|totalRefunds|number|true|none|none|
|transactionId|string|true|none|none|
|urn|string \| null|true|none|none|
|userAgent|string \| null|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "{{transactionId}}",
  "merchantName": "{{accountName}}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|merchantName|string|true|none|none|

<h2 id="tocS_TransactionDetailsResponse">TransactionDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactiondetailsresponse"></a>
<a id="schema_TransactionDetailsResponse"></a>
<a id="tocStransactiondetailsresponse"></a>
<a id="tocstransactiondetailsresponse"></a>

```json
{
  "acceptHeader": "application/json",
  "antifraudAffiliationId": null,
  "antifraudTid": null,
  "authorizationDate": null,
  "authorizationToken": null,
  "buyer": null,
  "cancelationDate": null,
  "cancelationToken": null,
  "cancellations": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/cancellations"
  },
  "channel": "gatewayqa",
  "commitmentDate": null,
  "commitmentToken": null,
  "fields": [
    {
      "name": "owner",
      "value": "vtexappkey-appvtex"
    },
    {
      "name": "channel",
      "value": "gatewayqa"
    },
    {
      "name": "salesChannel",
      "value": "1"
    },
    {
      "name": "markedForRecurrence",
      "value": "true"
    },
    {
      "name": "parentMerchant",
      "value": "648a4ce7-c16d-4fba-9854-072384636a32"
    },
    {
      "name": "orderId",
      "value": "1234567"
    },
    {
      "name": "ip",
      "value": "10.0.4.12"
    },
    {
      "name": "userAgent",
      "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36"
    },
    {
      "name": "acceptHeader",
      "value": "application/json"
    },
    {
      "name": "cart",
      "value": "{\"items\":[\r\n  {\r\n          \"id\":\"122323\",\r\n          \"name\":\"Tenis Preto I\",\r\n          \"value\":1000,\r\n          \"quantity\":1,\r\n          \"shippingDiscount\":0,\r\n          \"discount\":50\r\n        },\r\n        {\r\n          \"id\":\"122324\",\r\n          \"name\":\"Tenis Nike Azul\",\r\n          \"value\":1100,\r\n          \"quantity\":1,\r\n          \"shippingDiscount\":0,\r\n          \"discount\":50\r\n        }\r\n  ],\"freight\":200,\r\n  \"tax\":0\r\n  }"
    },
    {
      "name": "clientProfileData",
      "value": "{\"email\":\"teste@teste.com\",\"firstName\":\"Joao\",\"lastName\":\"Baptista\",\"document\":\"06134240040\",\"phone\":\"+551433118100\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"22011-050\",\"address\":{\"receiverName\":\"Ellen\",\"postalCode\":\"22011050\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA  GENERAL AZEVEDO PIMENTEL\",\"number\":\"12345\",\"neighborhood\":\"COPACABANA\",\"complement\":\"APTO 302\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false,\"documentType\":null,\"isFirstPurchase\":false,\"id\":null}"
    },
    {
      "name": "shippingData",
      "value": "{\"receiverName\":\"Rodrigo Saens\",\"postalCode\":\"65035430\",\"city\":\"SAO LUIS\",\"state\":\"MA\",\"country\":\"BRA\",\"street\":\"AV NEWTON  \",\"number\":\"321\",\"neighborhood\":\"MONTE CATELO\",\"complement\":\"APTO 102\",\"reference\":null}"
    }
  ],
  "id": "A3BDE325F76B4B758B398D900DF06150",
  "interactions": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/interactions"
  },
  "ipAddress": "10.0.4.12",
  "markedForRecurrence": true,
  "owner": "vtexappkey-appvtex",
  "payments": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/payments"
  },
  "receiverUri": null,
  "referenceKey": "1234567",
  "refundingDate": null,
  "refundingToken": null,
  "refunds": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/refunds"
  },
  "salesChannel": "1",
  "settlements": {
    "href": "/api/pvt/transactions/A3BDE325F76B4B758B398D900DF06150/settlements"
  },
  "softDescriptor": null,
  "startDate": "2016-04-15T02:36:38",
  "status": "Cancelling",
  "timeoutStatus": 2,
  "totalRefunds": 0,
  "transactionId": "A3BDE325F76B4B758B398D900DF06150",
  "urn": null,
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36",
  "value": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptHeader|string|true|none|none|
|antifraudAffiliationId|string \| null|true|none|none|
|antifraudTid|string \| null|true|none|none|
|authorizationDate|string \| null|true|none|none|
|authorizationToken|string \| null|true|none|none|
|buyer|string \| null|true|none|none|
|cancelationDate|string \| null|true|none|none|
|cancelationToken|string \| null|true|none|none|
|cancellations|[Cancellations](#schemacancellations)|true|none|none|
|channel|string|true|none|none|
|commitmentDate|string \| null|true|none|none|
|commitmentToken|string \| null|true|none|none|
|fields|[[Fields1](#schemafields1)]|true|none|none|
|id|string|true|none|none|
|interactions|[Interactions](#schemainteractions)|true|none|none|
|ipAddress|string|true|none|none|
|markedForRecurrence|boolean|true|none|none|
|owner|string|true|none|none|
|payments|[Payments](#schemapayments)|true|none|none|
|receiverUri|string \| null|true|none|none|
|referenceKey|string|true|none|none|
|refundingDate|string \| null|true|none|none|
|refundingToken|string \| null|true|none|none|
|refunds|[Refunds](#schemarefunds)|true|none|none|
|salesChannel|string|true|none|none|
|settlements|[Settlements](#schemasettlements)|true|none|none|
|softDescriptor|string \| null|true|none|none|
|startDate|string|true|none|none|
|status|string|true|none|none|
|timeoutStatus|integer(int32)|true|none|none|
|totalRefunds|number|true|none|none|
|transactionId|string|true|none|none|
|urn|string \| null|true|none|none|
|userAgent|string|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_TransactionSettlementDetails">TransactionSettlementDetails</h2>
<!-- backwards compatibility -->
<a id="schematransactionsettlementdetails"></a>
<a id="schema_TransactionSettlementDetails"></a>
<a id="tocStransactionsettlementdetails"></a>
<a id="tocstransactionsettlementdetails"></a>

```json
{
  "actions": [
    {
      "connectorResponse": null,
      "date": "2018-06-05T12:55:58.6262759Z",
      "payment": {
        "href": "/api/pvt/transactions/074D48049B19403A930FA848C6BE4AF9/payments/87055E7199A446519EB07F1243D5B8BE"
      },
      "paymentId": "87055E7199A446519EB07F1243D5B8BE",
      "type": "auto-settlement",
      "value": 4499000
    }
  ],
  "requests": [
    {
      "date": "2018-06-05T13:08:22",
      "id": "AFB933448FFD4867BF82BCC7026A082C",
      "value": 4499000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|true|none|none|
|requests|[[Request](#schemarequest)]|true|none|none|

<h2 id="tocS_UpdateAffiliationRequest">UpdateAffiliationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaffiliationrequest"></a>
<a id="schema_UpdateAffiliationRequest"></a>
<a id="tocSupdateaffiliationrequest"></a>
<a id="tocsupdateaffiliationrequest"></a>

```json
{
  "configuration": [
    {
      "name": "HowTo",
      "value": "https://developercielo.github.io/Habilitacao-meios-de-pagamento/"
    },
    {
      "name": "MerchantId",
      "value": "DATA TEST"
    },
    {
      "name": "MerchantKey",
      "value": "DATA TEST"
    },
    {
      "name": "softDescriptor",
      "value": "teste"
    },
    {
      "name": "bankInvoiceProvider",
      "value": "Disabled"
    },
    {
      "name": "bankIDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "useEarlySecurityCapture",
      "value": "0"
    },
    {
      "name": "isProduction",
      "value": "false"
    },
    {
      "name": "bankDebitProvider",
      "value": "Disabled"
    },
    {
      "name": "Registered",
      "value": "false"
    }
  ],
  "id": "61c3b25b-554d-41a4-b989-a0ba215e4bba",
  "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
  "isConfigured": true,
  "isdelivered": true,
  "name": "CieloV3 - Teste Ellen"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|[[Configuration](#schemaconfiguration)]|true|none|none|
|id|string|true|none|none|
|implementation|string|true|none|none|
|isConfigured|boolean|true|none|none|
|isdelivered|boolean|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_ValidRequest">ValidRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidrequest"></a>
<a id="schema_ValidRequest"></a>
<a id="tocSvalidrequest"></a>
<a id="tocsvalidrequest"></a>

```json
{
  "installments": [
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 2,
        "isDefault": false,
        "name": "ERedeV2 - Nova Visa",
        "self": {
          "href": "/api/pvt/payment-systems/2"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 3,
        "isDefault": false,
        "name": "ERedeV2 - Nova Diners",
        "self": {
          "href": "/api/pvt/payment-systems/3"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 4,
        "isDefault": false,
        "name": "ERedeV2 - Nova Mastercard",
        "self": {
          "href": "/api/pvt/payment-systems/4"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 6,
        "isDefault": false,
        "name": "Boleto Bancário - WEG79AKC8R529",
        "self": {
          "href": "/api/pvt/payment-systems/6"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 7,
        "isDefault": false,
        "name": "ERedeV2 - Nova Aura",
        "self": {
          "href": "/api/pvt/payment-systems/7"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 8,
        "isDefault": false,
        "name": "Hipercard - CNRYOV0ANPZAOR",
        "self": {
          "href": "/api/pvt/payment-systems/8"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        },
        {
          "interestRate": 0,
          "quantity": 2,
          "value": 5
        }
      ],
      "payment": {
        "bin": null,
        "id": 9,
        "isDefault": false,
        "name": "Elo/Mundipagg",
        "self": {
          "href": "/api/pvt/payment-systems/9"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 12,
        "isDefault": false,
        "name": "PayPal - 6U0DTI3M3OKO6R",
        "self": {
          "href": "/api/pvt/payment-systems/12"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 16,
        "isDefault": false,
        "name": "Vale/GiftCard",
        "self": {
          "href": "/api/pvt/payment-systems/16"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        },
        {
          "interestRate": 0,
          "quantity": 2,
          "value": 5
        },
        {
          "interestRate": 0,
          "quantity": 3,
          "value": 3.33
        }
      ],
      "payment": {
        "bin": null,
        "id": 18,
        "isDefault": false,
        "name": "Mercado Pago - XBKAG5IMTJRA4I",
        "self": {
          "href": "/api/pvt/payment-systems/18"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 26,
        "isDefault": false,
        "name": "PagSeguro - HRXC4VO76NU3DI",
        "self": {
          "href": "/api/pvt/payment-systems/26"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 33,
        "isDefault": false,
        "name": "ERedeV2 - Nova Cabal",
        "self": {
          "href": "/api/pvt/payment-systems/33"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 38,
        "isDefault": false,
        "name": "Safetypay - Q8J8XIXDSSPDS4I",
        "self": {
          "href": "/api/pvt/payment-systems/38"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 43,
        "isDefault": false,
        "name": "PagosWeb - PDA8UKCUTMX6R",
        "self": {
          "href": "/api/pvt/payment-systems/43"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 49,
        "isDefault": false,
        "name": "PayPalPlus - LW5HDKPMD3G14I",
        "self": {
          "href": "/api/pvt/payment-systems/49"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430004,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430004"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430014,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430014"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430201,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430201"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430202,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430202"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430203,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430203"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430208,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430208"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430210,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430210"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430220,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430220"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430222,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430222"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430230,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430230"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430231,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430231"
        },
        "value": 10
      }
    },
    {
      "options": [
        {
          "interestRate": 0,
          "quantity": 1,
          "value": 10
        }
      ],
      "payment": {
        "bin": null,
        "id": 430232,
        "isDefault": false,
        "name": null,
        "self": {
          "href": "/api/pvt/payment-systems/430232"
        },
        "value": 10
      }
    }
  ],
  "value": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installments|[[Installment](#schemainstallment)]|true|none|none|
|value|number|true|none|none|

<h2 id="tocS_Validator">Validator</h2>
<!-- backwards compatibility -->
<a id="schemavalidator"></a>
<a id="schema_Validator"></a>
<a id="tocSvalidator"></a>
<a id="tocsvalidator"></a>

```json
{
  "cardCodeMask": null,
  "cardCodeRegex": null,
  "mask": null,
  "regex": null,
  "useBillingAddress": false,
  "useCardHolderName": false,
  "useCvv": false,
  "useExpirationDate": false,
  "validCardLengths": null,
  "weights": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardCodeMask|string \| null|true|none|none|
|cardCodeRegex|string \| null|true|none|none|
|mask|string \| null|true|none|none|
|regex|string \| null|true|none|none|
|useBillingAddress|boolean|true|none|none|
|useCardHolderName|boolean|true|none|none|
|useCvv|boolean|true|none|none|
|useExpirationDate|boolean|true|none|none|
|validCardLengths|string \| null|true|none|none|
|weights|[integer(int32)]|true|none|none|
