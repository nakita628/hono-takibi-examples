<h1 id="orders-api">Orders API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.



>Check the new [Orders onboarding guide](https://developers.vtex.com/docs/guides/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.

Receive, process, and manage every order in your store through our Order Management API.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="orders-api-orders">Orders</h1>

## List orders

<a id="opIdListOrders"></a>

> Code samples

```bash
curl 'https://example.com/api/oms/pvt/orders?f_creationDate=creationDate%3A%5B2016-01-01T02%3A00%3A00.000Z%20TO%202021-01-01T01%3A59%3A59.999Z%5D' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/orders`

Retrieves a list of orders according to the filters described below. 

The limit of information retrieval is 30 pages, the default number of orders per page is 15 and it is possible to configure it up to 100 using the  `per_page` parameter. 

 Be aware that as of October 3rd, 2018, this endpoint will not return the `items` property. 

> This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed) for this purpose.

This endpoint returns only orders that already have been indexed, which takes approximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up-to-date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



<h3 id="list-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderBy|query|string|false|You can retrieve orders lists filtering by an `OrderField` combined with an `OrderType`. To do so, you have to concatenate them: `orderBy={{OrderField}},{{OrderType}}`. <br>- `OrderField` values accepted: `creationDate`, `orderId`, `items`, `totalValue` and `origin`. <br>- `OrderType` values accepted: `asc` and `desc`.|
|page|query|integer(int32)|false|Define the number of pages you wish to retrieve, restricted to the limit of 30 pages.|
|per_page|query|integer(int32)|false|Quantity of orders for each page, the default value is 15 and it goes up to 100 orders per page. Be aware that the limit of retrieval ofthis endpoint is 30 pages.|
|f_creationDate|query|string|true|Concatened value sufix `{{creationDate}}` and range date in Timestamp format. To use the `utc` query parameter, to filter orders by time zone, you must also fill the `f_creationDate` date parameter.|
|f_hasInputInvoice|query|boolean|false|Filters list to return only orders with non `null` values for the `invoiceInput` field.|
|q|query|string|false|This parameter filters using Fulltext and accepts the values below. Be aware that the `+` caracter is not allowed in Fulltext Search. <br>- Order Id <br>- Client email <br>- Client document <br>- Client name|
|utc|query|integer(int32)|false|Converts orders' time zone to the Universal Time Coordinated (UTC) format and shows the amount of orders set for that UTC, up to the limit of 30 pages. For it to work properly, you have to associate it with the `f_creationDate` parameter.|
|f_shippingEstimate|query|string|false|You can filter orders by shipping estimate time in days by concatenating the desired number of days with the sufix `.days`. For example: <br>- Next 7 days: `7.days` <br>- Tomorrow: `1.days` <br>- Today: `0.days` <br>- Late: `-1.days`|
|f_invoicedDate|query|string|false|You can filter orders by invoiced date by concatenating the sufix `invoicedDate:` with the range date in Timestamp format. For example: <br>- 1 Day: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`<br>- 1 Month: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]` <br>- 1 Year: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`|
|f_authorizedDate|query|string|false|You can filter orders by creation date by concatenating the sufix `authorizedDate:` with the range date in Timestamp format. For example: <br>- 1 Day: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`<br>- 1 Month: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]` <br>- 1 Year: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`|
|f_UtmSource|query|string|false|You can filter orders by using a Universal Transverse Mercator (UTM) source.|
|f_sellerNames|query|string|false|You can filter orders by using a seller's name.|
|f_callCenterOperatorName|query|string|false|You can filter orders by using a Call Center Operator's identification.|
|f_salesChannel|query|string|false|You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) name.|
|salesChannelId|query|string|false|You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID.|
|f_affiliateId|query|string|false|You can filter orders by affiliate ID.|
|f_status|query|string|false|You can filter orders by the following [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196): <br>- `waiting-for-sellers-confirmation` <br>- `payment-pending` <br>- `payment-approved` <br>- `ready-for-handling` <br>- `handling` <br>- `invoiced` <br>- `canceled`|
|incompleteOrders|query|boolean|false|When set as `true`, you retrieve [incomplete orders](https://help.vtex.com/en/tutorial/understanding-incomplete-orders), when set as `false`, you retrieve orders that are not incomplete.|
|f_paymentNames|query|string|false|You can filter orders by payment type.|
|f_RnB|query|string|false|You can filter orders by rates and benefits (promotions).|
|searchField|query|string|false|You can search orders by using one of the following criterias: <br>- SKU ID - `sku_Ids&sku_Ids` <br>- Gift List ID - `listId&listId` <br>- Transaction ID (TID) - `tid&tid` <br>- PCI Connector's Transaction ID (TID) - `pci_tid&pci_tid` <br>- Payment ID (PID) - `paymentId&paymentId` <br>- Connector's NSU - `nsu&nsu`|
|f_isInstore|query|boolean|false|When set as `true`, this parameter filters orders made via [inStore](https://help.vtex.com/en/tracks/what-is-instore--zav76TFEZlAjnyBVL5tRc), and when set as `false`, it filters orders that were not made via inStore.|

> Example responses

> 200 Response

```json
{
  "facets": [],
  "list": [
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-02-07T21:29:54+00:00",
      "callCenterOperatorName": null,
      "clientName": "J C",
      "creationDate": "2019-02-04T10:29:11+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "1306331686122-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502559",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 1,
      "totalValue": 7453,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-28T20:33:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "Rodrigo VTEX",
      "creationDate": "2019-01-28T20:09:43+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502556llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502556",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 1,
      "totalValue": 1160,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-31T12:36:30+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-24T12:36:01+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-24T12:35:19+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502553llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502554",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-30T16:40:55+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-23T16:40:27+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-23T16:39:45+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502550llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502551",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-30T16:35:30+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-23T16:35:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-23T16:34:20+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502547llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502548",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2018-12-28T18:15:28+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502544llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502544",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 8990,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Douglas Rodrigues",
      "creationDate": "2018-12-18T18:48:17+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502541llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502541",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 3290,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-12-19T18:22:26+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2018-12-12T18:22:22+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2018-12-12T18:21:47+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502538llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502538",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 8990,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:34:42+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:34:01+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": "cancelamento teste shp ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880102018018-01",
      "orderId": "SCP-880102018018-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502537",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:29:22+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:28:35+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880091692043-01",
      "orderId": "SCP-880091692043-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502536",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:18:44+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:18:00+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": "Teste de cancelamento do ShopFácil ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880091058221-01",
      "orderId": "SCP-880091058221-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502535",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-12-07T17:11:39+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:11:42+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:10:59+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880090643370-01",
      "orderId": "SCP-880090643370-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502534",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:10:45+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880090622238-01",
      "orderId": "SCP-880090622238-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502533",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "MNC",
      "authorizedDate": "2018-11-20T21:13:06+00:00",
      "callCenterOperatorName": null,
      "clientName": "Carlos VTEX",
      "creationDate": "2018-11-20T21:09:01+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "877730530419-01",
      "orderId": "MNC-877730530419-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502532",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 11150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-11-23T16:58:48+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-16T16:58:53+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-16T16:58:18+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "876733475998-01",
      "orderId": "SCP-876733475998-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502531",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    }
  ],
  "paging": {
    "currentPage": 1,
    "pages": 6,
    "perPage": 15,
    "total": 84
  },
  "stats": {
    "stats": {
      "totalItems": {
        "Count": 84,
        "Facets": {
          "currencyCode": {
            "BRL": {
              "Count": 84,
              "Facets": null,
              "Max": 89,
              "Mean": 2.2261904761904763,
              "Min": 1,
              "Missing": 0,
              "StdDev": 9.660940100525016,
              "Sum": 187,
              "SumOfSquares": 8163
            }
          },
          "origin": {
            "Fulfillment": {
              "Count": 68,
              "Facets": null,
              "Max": 1,
              "Mean": 1,
              "Min": 1,
              "Missing": 0,
              "StdDev": 0,
              "Sum": 68,
              "SumOfSquares": 68
            },
            "Marketplace": {
              "Count": 16,
              "Facets": null,
              "Max": 89,
              "Mean": 7.4375,
              "Min": 1,
              "Missing": 0,
              "StdDev": 21.92401651157926,
              "Sum": 119,
              "SumOfSquares": 8095
            }
          }
        },
        "Max": 89,
        "Mean": 2.2261904761904763,
        "Min": 1,
        "Missing": 0,
        "StdDev": 9.660940100525016,
        "Sum": 187,
        "SumOfSquares": 8163
      },
      "totalValue": {
        "Count": 84,
        "Facets": {
          "currencyCode": {
            "BRL": {
              "Count": 84,
              "Facets": null,
              "Max": 21526180,
              "Mean": 262672.75,
              "Min": 1160,
              "Missing": 0,
              "StdDev": 2348087.3869179883,
              "Sum": 22064511,
              "SumOfSquares": 463417439039853
            }
          },
          "origin": {
            "Fulfillment": {
              "Count": 68,
              "Facets": null,
              "Max": 11150,
              "Mean": 1395.5882352941176,
              "Min": 1250,
              "Missing": 0,
              "StdDev": 1200.5513439298484,
              "Sum": 94900,
              "SumOfSquares": 229010000
            },
            "Marketplace": {
              "Count": 16,
              "Facets": null,
              "Max": 21526180,
              "Mean": 1373100.6875,
              "Min": 1160,
              "Missing": 0,
              "StdDev": 5374326.141087491,
              "Sum": 21969611,
              "SumOfSquares": 463417210029853
            }
          }
        },
        "Max": 21526180,
        "Mean": 262672.75,
        "Min": 1160,
        "Missing": 0,
        "StdDev": 2348087.3869179883,
        "Sum": 22064511,
        "SumOfSquares": 463417439039853
      }
    }
  }
}
```

<h3 id="list-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListOrders](#schemalistorders)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
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

## Get order

<a id="opIdGetOrder"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01%20or%20seq501456 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/orders/{orderId}`

This endpoint retrieves order details by searching a specific order ID or sequence number.

> The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.

## Response body example

```json
{
    "orderId": "1244730712239-01",
    "sequence": "502790",
    "marketplaceOrderId": "",
    "marketplaceServicesEndpoint": null,
    "sellerOrderId": "SLR-1244730712239-01",
    "origin": "Marketplace",
    "affiliateId": "",
    "salesChannel": "1",
    "merchantName": null,
    "status": "payment-approved",
    "statusDescription": "Pagamento Aprovado",
    "value": 2012,
    "creationDate": "2022-07-06T09:11:51.4597231+00:00",
    "lastChange": "2022-07-06T09:12:00.2849749+00:00",
    "orderGroup": "1244730712239",
    "totals": [
        {
            "id": "Items",
            "name": "Total dos Itens",
            "value": 2265
        },
        {
            "id": "Discounts",
            "name": "Total dos Descontos",
            "value": -453
        },
        {
            "id": "Shipping",
            "name": "Total do Frete",
            "value": 200
        },
        {
            "id": "Tax",
            "name": "Total da Taxa",
            "value": 0
        }
    ],
    "items": [
        {
            "uniqueId": "A14AD652AC5D40FBB0137D3ADA3CB800",
            "id": "12",
            "productId": "8",
            "ean": null,
            "lockId": null,
            "itemAttachment": {
                "content": {},
                "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "ppxpssp",
            "name": "Camiseta P Azul",
            "refId": "COP01_P-A",
            "price": 2265,
            "listPrice": 2265,
            "manualPrice": null,
            "priceTags": [
                {
                    "name": "discount@price-d0231eb3-e9a4-47b2-9c74-bc346df11ce4#e9bb430d-30b3-4461-a86e-f66f35b2915d",
                    "value": -453,
                    "isPercentual": false,
                    "identifier": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",
                    "rawValue": -4.53,
                    "rate": null,
                    "jurisCode": null,
                    "jurisType": null,
                    "jurisName": null
                }
            ],
            "imageUrl": "https://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",
            "detailUrl": "/camiseta/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "12",
            "priceValidUntil": "2023-07-06T09:11:04.0000000+00:00",
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
                "brandName": "Marca TOP",
                "brandId": "2000001",
                "categoriesIds": "/7/",
                "categories": [
                    {
                        "id": 7,
                        "name": "Roupas"
                    }
                ],
                "productClusterId": "",
                "commercialConditionId": "1",
                "dimension": {
                    "cubicweight": 1.0000,
                    "height": 6.0000,
                    "length": 10.0000,
                    "weight": 4.0000,
                    "width": 8.0000
                },
                "offeringInfo": null,
                "offeringType": null,
                "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 1812,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
                "sellingPrices": [
                    {
                        "value": 1812,
                        "quantity": 1
                    }
                ],
                "calculatedSellingPrice": 1812,
                "total": 1812
            },
            "taxCode": "1122",
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": null
        }
    ],
    "marketplaceItems": [],
    "clientProfileData": {
        "id": "clientProfileData",
        "email": "0bf94cbf23ff410aaaf7c707dd8a808c@ct.vtex.com.br",
        "firstName": "Paulo",
        "lastName": "Filho",
        "documentType": "cpf",
        "document": "11156703794",
        "phone": "+5521971126360",
        "corporateName": null,
        "tradeName": null,
        "corporateDocument": null,
        "stateInscription": null,
        "corporatePhone": null,
        "isCorporate": false,
        "userProfileId": "ca0695a8-df34-4076-8663-725041930c75",
        "customerClass": null
    },
    "giftRegistryData": null,
    "marketingData": {
        "id": "marketingData",
        "utmSource": null,
        "utmPartner": null,
        "utmMedium": null,
        "utmCampaign": null,
        "coupon": null,
        "utmiCampaign": null,
        "utmipage": null,
        "utmiPart": null,
        "marketingTags": [
            "vtex-subscription"
        ]
    },
    "ratesAndBenefitsData": {
        "id": "ratesAndBenefitsData",
        "rateAndBenefitsIdentifiers": [
            {
                "description": "Desconto de 20% no pedido para assinatura",
                "featured": true,
                "id": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",
                "name": "Desconto 20% assinante",
                "matchedParameters": {},
                "additionalInfo": null
            }
        ]
    },
    "shippingData": {
        "id": "shippingData",
        "address": {
            "addressType": "residential",
            "receiverName": "Paulo Filho",
            "addressId": "1651158093975",
            "postalCode": "21341-270",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "country": "BRA",
            "street": "Rua Pinto Teles",
            "number": "1",
            "neighborhood": "Praça Seca",
            "complement": null,
            "reference": null,
            "geoCoordinates": [
                -43.350608825683594,
                -22.886520385742188
            ]
        },
        "logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "lockTTL": "12d",
                "price": 200,
                "listPrice": 200,
                "sellingPrice": 200,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "2bd",
                "shippingEstimateDate": "2022-07-08T09:11:57.8421126+00:00",
                "slas": [
                    {
                        "id": "Normal",
                        "name": "Normal",
                        "shippingEstimate": "2bd",
                        "deliveryWindow": null,
                        "price": 200,
                        "deliveryChannel": "delivery",
                        "pickupStoreInfo": {
                            "additionalInfo": null,
                            "address": null,
                            "dockId": null,
                            "friendlyName": null,
                            "isPickupStore": false
                        },
                        "polygonName": "",
                        "lockTTL": "12d",
                        "pickupPointId": null,
                        "transitTime": "2bd"
                    }
                ],
                "shipsTo": [
                    "BRA"
                ],
                "deliveryIds": [
                    {
                        "courierId": "1",
                        "courierName": "Transportadora",
                        "dockId": "169fe66",
                        "quantity": 1,
                        "warehouseId": "166cb0c",
                        "accountCarrierName": null
                    }
                ],
                "deliveryChannel": "delivery",
                "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                },
                "addressId": "1651158093975",
                "polygonName": "",
                "pickupPointId": null,
                "transitTime": "2bd"
            }
        ],
        "trackingHints": null,
        "selectedAddresses": [
            {
                "addressId": "1651158093975",
                "addressType": "residential",
                "receiverName": "Paulo Filho",
                "street": "Rua Pinto Teles",
                "number": "1",
                "complement": null,
                "neighborhood": "Praça Seca",
                "postalCode": "21341-270",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BRA",
                "reference": null,
                "geoCoordinates": [
                    -43.350608825683594,
                    -22.886520385742188
                ]
            }
        ]
    },
    "paymentData": {
        "giftCards": [],
        "transactions": [
            {
                "isActive": true,
                "transactionId": "A5BF0F884F314F788F4778B464EE1648",
                "merchantName": "PPXPS",
                "payments": [
                    {
                        "id": "06D8D76D4BD549EF9CC209D969ACBA84",
                        "paymentSystem": "47",
                        "paymentSystemName": "Cash",
                        "value": 2012,
                        "installments": 1,
                        "referenceValue": 2012,
                        "cardHolder": null,
                        "cardNumber": null,
                        "firstDigits": null,
                        "lastDigits": null,
                        "cvv2": null,
                        "expireMonth": null,
                        "expireYear": null,
                        "url": null,
                        "giftCardId": null,
                        "giftCardName": null,
                        "giftCardCaption": null,
                        "redemptionCode": null,
                        "group": "cash",
                        "tid": null,
                        "dueDate": null,
                        "connectorResponses": {},
                        "giftCardProvider": null,
                        "giftCardAsDiscount": null,
                        "koinUrl": null,
                        "accountId": null,
                        "parentAccountId": null,
                        "bankIssuedInvoiceIdentificationNumber": null,
                        "bankIssuedInvoiceIdentificationNumberFormatted": null,
                        "bankIssuedInvoiceBarCodeNumber": null,
                        "bankIssuedInvoiceBarCodeType": null,
                        "billingAddress": null
                    }
                ]
            }
        ]
    },
    "packageAttachment": {
        "packages": []
    },
    "sellers": [
        {
            "id": "ppxpssp",
            "name": "ppxpssp",
            "logo": "",
            "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=ppxpssp&affiliateId=SLR&sc=1"
        }
    ],
    "callCenterOperatorData": null,
    "followUpEmail": "0a902f64ba1443c3b26ab5cb0b2aad9e@ct.vtex.com.br",
    "lastMessage": null,
    "hostname": "ppxps",
    "invoiceData": null,
    "changesAttachment": null,
    "openTextField": {
        "value": "Order Created By VTEX Subscription System"
    },
    "roundingError": 0,
    "orderFormId": "3d59650b4e9a447d80ecfac4830926d9",
    "commercialConditionData": null,
    "isCompleted": true,
    "customData": null,
    "storePreferencesData": {
        "countryCode": "BRA",
        "currencyCode": "BRL",
        "currencyFormatInfo": {
            "CurrencyDecimalDigits": 2,
            "CurrencyDecimalSeparator": ",",
            "CurrencyGroupSeparator": ".",
            "CurrencyGroupSize": 3,
            "StartsWithCurrencySymbol": true
        },
        "currencyLocale": 1046,
        "currencySymbol": "R$",
        "timeZone": "E. South America Standard Time"
    },
    "allowCancellation": true,
    "allowEdition": false,
    "isCheckedIn": false,
    "marketplace": null,
    "authorizedDate": "2022-07-06T09:11:56.0006230+00:00",
    "invoicedDate": null,
    "cancelReason": null,
    "itemMetadata": {
        "Items": [
            {
                "Id": "12",
                "Seller": "1",
                "Name": "Camiseta P Azul",
                "SkuName": "P Azul",
                "ProductId": "8",
                "RefId": "COP01_P-A",
                "Ean": null,
                "ImageUrl": "http://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",
                "DetailUrl": "/camiseta/p",
                "AssemblyOptions": []
            }
        ]
    },
    "subscriptionData": {
        "SubscriptionGroupId": "C191822AF072C7508F9BBBC655FE8E60",
        "Subscriptions": [
            {
                "ExecutionCount": 274,
                "PriceAtSubscriptionDate": 2265.0,
                "ItemIndex": 0,
                "Plan": {
                    "type": "RECURRING_PAYMENT",
                    "frequency": {
                        "periodicity": "DAILY",
                        "interval": 1
                    },
                    "validity": {
                        "begin": "2021-10-05T00:00:00.0000000+00:00",
                        "end": null
                    }
                }
            }
        ]
    },
    "taxData": null,
    "checkedInPickupPointId": null,
    "cancellationData": null
}
```

<h3 id="get-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderId|path|string|true|Order ID is a unique code that identifies an order. Instead of using `orderId`, you can also make the request using the sequence, a six-digit string that follows the order ID. For example, in order 1268540501456-01 (501456), the sequence is 501456. To use this parameter, replace the value between `{ }` keys in `seq{sequence-number}` with the sequence. For example: `seq501456`.|

> Example responses

> 200 Response

```json
{
  "affiliateId": "",
  "allowCancellation": false,
  "allowEdition": false,
  "approvedBy": "Person's name",
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorData": null,
  "cancelReason": "Explanation for cancellation",
  "cancelledBy": "Person's name",
  "changesAttachment": {
    "changesData": [
      {
        "discountValue": 3290,
        "incrementValue": 0,
        "itemsAdded": [],
        "itemsRemoved": [
          {
            "id": "1234568358",
            "name": "Bay Max L",
            "price": 3290,
            "quantity": 1,
            "unitMultiplier": null
          }
        ],
        "reason": "Blah",
        "receipt": {
          "date": "2019-02-06T20:46:04.4003606+00:00",
          "orderId": "v5195004lux-01",
          "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
        }
      }
    ],
    "id": "changeAttachment"
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "11047867702",
    "documentType": "cpf",
    "email": "rodrigo.cunha@vtex.com.br",
    "firstName": "Rodrigo",
    "id": "clientProfileData",
    "isCorporate": false,
    "lastName": "VTEX",
    "phone": "+5521972321094",
    "stateInscription": null,
    "tradeName": null,
    "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93"
  },
  "commercialConditionData": null,
  "creationDate": "2019-01-28T20:09:43.899958+00:00",
  "customData": null,
  "emailTracked": "a27499cad31f42b7a771ae34f57c8358@ct.vtex.com.br",
  "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
  "giftRegistryData": null,
  "hostname": "luxstore",
  "invoiceData": null,
  "invoicedDate": null,
  "isCheckedIn": false,
  "isCompleted": true,
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000023",
        "brandName": "VTEX",
        "categoriesIds": "/1/",
        "commercialConditionId": "5",
        "dimension": {
          "cubicweight": 0.7031,
          "height": 15,
          "length": 15,
          "weight": 15,
          "width": 15
        },
        "offeringInfo": "Fragile.",
        "offeringType": null,
        "offeringTypeId": null,
        "productClusterId": "135,142"
      },
      "assemblies": [],
      "attachmentOfferings": [
        {
          "name": "vtex.subscription.weekly",
          "required": false,
          "schema": {
            "vtex.subscription.key.frequency": {
              "Domain": [
                " 1 week",
                " 2 week",
                " 3 week",
                " 4 week"
              ],
              "MaximumNumberOfCharacters": 7
            }
          }
        }
      ],
      "attachments": [],
      "bundleItems": [],
      "callCenterOperator": "callCenterOp5473869",
      "commission": 0,
      "components": [],
      "costPrice": 52,
      "detailUrl": "/bay-max-9429485/p",
      "ean": null,
      "freightCommission": 0,
      "id": "1234568358",
      "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
      "isGift": false,
      "itemAttachment": {
        "content": {},
        "name": null
      },
      "listPrice": 3290,
      "lockId": "00-v5195004lux-01",
      "manualPrice": null,
      "measurementUnit": "un",
      "name": "Bay Max L",
      "offerings": [],
      "params": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 3290,
      "priceDefinitions": {
        "calculatedSellingPrice": 99,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 99
          }
        ],
        "total": 99
      },
      "priceTags": [],
      "priceValidUntil": null,
      "productId": "9429485",
      "quantity": 1,
      "refId": "BIGHEROBML",
      "rewardValue": 0,
      "seller": "1",
      "sellerSku": "1234568358",
      "sellingPrice": 3290,
      "serialNumbers": "3",
      "shippingPrice": null,
      "tax": 0,
      "taxCode": null,
      "uniqueId": "87F0945396994B349158C7D9C9941442",
      "unitMultiplier": 1
    }
  ],
  "lastChange": "2019-02-06T20:46:11.7010747+00:00",
  "lastMessage": null,
  "marketingData": "marketing data",
  "marketplace": {
    "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
    "isCertified": null,
    "name": "luxstore"
  },
  "marketplaceItems": [],
  "marketplaceOrderId": "",
  "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
  "merchantName": null,
  "openTextField": null,
  "orderFormId": "caae7471333e403f959fa5fd66951340",
  "orderGroup": null,
  "orderId": "v5195004lux-01",
  "origin": "Marketplace",
  "packageAttachment": {
    "packages": []
  },
  "paymentData": {
    "transactions": [
      {
        "isActive": true,
        "merchantName": "luxstore",
        "payments": [
          {
            "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
            "bankIssuedInvoiceBarCodeType": "i25",
            "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
            "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
            "billingAddress": {},
            "cardHolder": null,
            "cardNumber": null,
            "connectorResponses": {
              "Message": "logMessage",
              "ReturnCode": "200",
              "Tid": "94857956",
              "authId": "857956"
            },
            "cvv2": null,
            "dueDate": "2019-02-02",
            "expireMonth": null,
            "expireYear": null,
            "firstDigits": null,
            "giftCardAsDiscount": false,
            "giftCardCaption": null,
            "giftCardId": null,
            "giftCardName": null,
            "giftCardProvider": "presentCard",
            "group": "bankInvoice",
            "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
            "installments": 1,
            "koinUrl": "koinURL",
            "lastDigits": null,
            "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "paymentSystem": "6",
            "paymentSystemName": "Boleto Bancário",
            "redemptionCode": null,
            "referenceValue": 4450,
            "tid": null,
            "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
            "value": 4450
          }
        ],
        "transactionId": "418213DE29634837A63DD693A937A696"
      }
    ]
  },
  "ratesAndBenefitsData": {
    "id": "ratesAndBenefitsData",
    "rateAndBenefitsIdentifiers": []
  },
  "roundingError": 0,
  "salesChannel": "1",
  "sellerOrderId": "00-v5195004lux-01",
  "sellers": [
    {
      "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName",
      "id": "1",
      "logo": "https://sellersLogo/images.png",
      "name": "Loja do Suporte"
    }
  ],
  "sequence": "502556",
  "shippingData": {
    "address": {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3",
      "country": "BRA",
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    },
    "id": "shippingData",
    "logisticsInfo": [
      {
        "addressId": "-1425945657910",
        "deliveryChannel": "delivery",
        "deliveryChannels": [
          {
            "id": "delivery",
            "stockBalance": 0
          }
        ],
        "deliveryCompany": "Todos os CEPS",
        "deliveryIds": [
          {
            "accountCarrierName": "recorrenciaqa",
            "courierId": "197a56f",
            "courierName": "Todos os CEPS",
            "dockId": "1",
            "kitItemDetails": [],
            "quantity": 1,
            "warehouseId": "1_1"
          }
        ],
        "deliveryWindow": null,
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "itemIndex": 0,
        "listPrice": 1160,
        "lockTTL": "10d",
        "pickupPointId": "1_VTEX-RJ",
        "pickupStoreInfo": {
          "additionalInfo": null,
          "address": null,
          "dockId": null,
          "friendlyName": null,
          "isPickupStore": false
        },
        "polygonName": "region196",
        "price": 1160,
        "selectedSla": "Normal",
        "sellingPrice": 1160,
        "shippingEstimate": "5bd",
        "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
        "shipsTo": [
          "BRA"
        ],
        "slas": [
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Normal",
            "lockTTL": "12d",
            "name": "Normal",
            "pickupDistance": 0,
            "pickupPointId": "store34",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Expressa",
            "lockTTL": "12d",
            "name": "Expressa",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Quebra Kit",
            "lockTTL": "12d",
            "name": "Quebra Kit",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "2bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Sob Encomenda",
            "lockTTL": "12d",
            "name": "Sob Encomenda",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "32bd",
            "transitTime": "3d"
          }
        ],
        "transitTime": "3d",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "-1425945657910",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "10",
        "country": "BRA",
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "geoCoordinates": [],
        "neighborhood": "Botafogo",
        "number": "518",
        "postalCode": "22250-040",
        "receiverName": "Rodrigo Cunha",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "trackingHints": null
  },
  "status": "handling",
  "statusDescription": "Preparando Entrega",
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "CurrencyDecimalDigits": 2,
      "CurrencyDecimalSeparator": ",",
      "CurrencyGroupSeparator": ".",
      "CurrencyGroupSize": 3,
      "StartsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "timeZone": "E. South America Standard Time"
  },
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 3290
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": 0
    },
    {
      "id": "Shipping",
      "name": "Total do Frete",
      "value": 1160
    },
    {
      "id": "Tax",
      "name": "Total da Taxa",
      "value": 0
    },
    {
      "id": "Change",
      "name": "Total das mudanças",
      "value": -3290
    }
  ],
  "value": 1160
}
```

<h3 id="get-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliateId|string|false|none|Three letter code identifying the marketplace where the order was placed.|
|allowCancellation|boolean|false|none|Indicates whether cancelation is allowed for the order.|
|allowEdition|boolean|false|none|Indicates whether edition is allowed for the order.|
|approvedBy|string \| null|false|none|User that approved the order, in case of manual approval.|
|authorizedDate|string|false|none|Date in which the order was authorized in UTC.|
|callCenterOperatorData|string \| null|false|none|none|
|cancelReason|string \| null|false|none|Reason for cancelation.|
|cancelledBy|string \| null|false|none|User that canceled the order.|
|changesAttachment|[ChangesAttachment](#schemachangesattachment)|false|none|Information about changes in the order.|
|clientProfileData|[ClientProfileData](#schemaclientprofiledata)|false|none|Object with information on the client's profile.|
|commercialConditionData|string \| null|false|none|none|
|creationDate|string \| null|false|none|Creation date.|
|customData|string \| null|false|none|none|
|emailTracked|string|false|none|Email tracked.|
|followUpEmail|string|false|none|none|
|giftRegistryData|string \| null|false|none|none|
|hostname|string|false|none|none|
|invoiceData|object \| null|false|none|Information pertinent to the order's invoice.|
|invoicedDate|string \| null|false|none|Date in which the order was invoiced in UTC.|
|isCheckedIn|boolean|false|none|Indicates whether client is checked in.|
|isCompleted|boolean|false|none|none|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|object|false|none|Dimension of the item.|
|» » » cubicweight|number|false|none|The item's cubic weight.|
|» » » height|number|false|none|The item's height.|
|» » » length|number|false|none|The item's length.|
|» » » weight|number|false|none|The item's weight.|
|» » » width|number|false|none|The item's width.|
|» » offeringInfo|string \| null|false|none|Offering information.|
|» » offeringType|string \| null|false|none|Offering type.|
|» » offeringTypeId|string \| null|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Name.|
|» » price|integer|false|none|Price in cents.|
|» » type|string|false|none|Type|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string \| null|false|none|European Article Number.|
|» id|string|false|none|ID.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean \| null|false|none|Indicates whether item is a gift.|
|» listPrice|integer \| null|false|none|List price in cents.|
|» manualPrice|integer \| null|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit|
|» modalType|string|false|none|Modal type.|
|» name|string|false|none|Name.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» preSaleDate|string \| null|false|none|Presale date.|
|» price|integer \| null|false|none|Price in cents.|
|» priceDefinition|object|false|none|Price information.|
|» » calculatedSellingPrice|integer|false|none|Calculated selling price in cents.|
|» » sellingPrices|[object]|false|none|Selling prices.|
|» » » quantity|integer|false|none|Quantity.|
|» » » value|integer|false|none|Value in cents.|
|» » total|integer|false|none|Total in cents.|
|» priceTags|[object]|false|none|Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.|
|» » identifier|string|false|none|Price tag identifier.|
|» » isPercentual|boolean|false|none|Indicates whether price tag value is applied through a percentage.|
|» » name|string|false|none|Name.|
|» » rawValue|integer|false|none|Raw value.|
|» » value|integer|false|none|Value.|
|» priceValidUntil|string \| null|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer \| null|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer \| null|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer \| null|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Order's item unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier|
|lastChange|string \| null|false|none|Date of last change.|
|lastMessage|string \| null|false|none|none|
|marketingData|string \| null|false|none|none|
|marketplace|[Marketplace](#schemamarketplace)|false|none|Details about the marketplace related to the order.|
|marketplaceItems|[string]|false|none|Marketplace items.|
|marketplaceOrderId|string \| null|false|none|ID of the order in the marketplace.|
|marketplaceServicesEndpoint|string \| null|false|none|Marketplace endpoint for post purchase communication.|
|merchantName|string \| null|false|none|Merchant name.|
|openTextField|string \| null|false|none|none|
|orderFormId|string|false|none|none|
|orderGroup|string \| null|false|none|Order group.|
|orderId|string|false|none|Order ID.|
|origin|string \| null|false|none|Origin.|
|packageAttachment|object|false|none|Package attachment.|
|» packages|[object]|false|none|Information on each package.|
|» » cfop|string|false|none|Fiscal operation code.|
|» » courier|string|false|none|The name of the carrier responsible for delivering the order.|
|» » courierStatus|string|false|none|Courier status.|
|» » embeddedInvoice|string|false|none|Embedded voice in XML.|
|» » invoiceKey|string|false|none|Invoice key.|
|» » invoiceNumber|string|false|none|Number that identifies the invoice.|
|» » invoiceUrl|string \| null|false|none|Invoice URL.|
|» » invoiceValue|integer|false|none|Invoice value in cents.|
|» » issuanceDate|string|false|none|Issuance date.|
|» » items|[object]|false|none|Information on each item in the package.|
|» » » description|string|false|none|Description.|
|» » » itemIndex|integer|false|none|Item index in reference to the position of the item in the `items` array.|
|» » » price|integer|false|none|Price in cents.|
|» » » quantity|integer|false|none|Quantity.|
|» » » unitMultiplier|number|false|none|Unit multiplier.|
|» » restitutions|object|false|none|Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).|
|» » » refund|object|false|none|Information on refunds.|
|» » » » items|[object]|false|none|Information on items.|
|» » » » » itemIndex|string|false|none|Item index corresponding to the position of the item in the main `items` array.|
|» » » » » quantity|integer|false|none|Quantity.|
|» » trackingNumber|string|false|none|The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|» » trackingUrl|string|false|none|Tracking URL.|
|» » type|string|false|none|Invoice type `Output` for sales and `Input` for returns.|
|» » volumes|integer|false|none|Quantity of packages involved in the order.|
|paymentData|[PaymentData](#schemapaymentdata)|false|none|Object with information about the payment.|
|ratesAndBenefitsData|[RatesAndBenefitsData](#schemaratesandbenefitsdata)|false|none|Information on promotions and taxes that apply to the order.|
|roundingError|integer(int32)|false|none|none|
|salesChannel|string \| null|false|none|Sales channel.|
|sellerOrderId|string \| null|false|none|Seller order ID.|
|sellers|[[Seller](#schemaseller)]|false|none|none|
|sequence|string \| null|false|none|Sequence number.|
|shippingData|[ShippingData](#schemashippingdata)|false|none|Object containing shipping data.|
|status|string|false|none|Status in the order workflow.|
|statusDescription|string|false|none|`Deprecated`. Status description which is displayed on the Admin panel.|
|storePreferencesData|[StorePreferencesData](#schemastorepreferencesdata)|false|none|Object with data from the store's configuration - stored in VTEX's License Manager.|
|totals|[object]|false|none|Information on each of the order's totals.|
|» id|string|false|none|Order's total ID.|
|» name|string|false|none|Order's total name.|
|» value|integer(int32)|false|none|Order's total value.|
|value|integer(int32) \| null|false|none|Value in cents.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel order

<a id="opIdCancelOrder"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "reason": "Unexpected stock shortage"
  }'
```

`POST /api/oms/pvt/orders/{orderId}/cancel`

You should use this endpoint to cancel an order by its order identification number (the `orderId`).

A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.

You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.

Be aware that if the order status is already `Invoiced`, the order can only be canceled if—before using this request—you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).

> The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Body parameter

```json
{
  "reason": "Unexpected stock shortage"
}
```

<h3 id="cancel-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|orderId|path|string|true|ID that identifies the order in the seller.|
|body|body|object|false|none|
|» reason|body|string|false|Reason for cancelling the order.|

> Example responses

> 200 Response

```json
{
  "date": "2014-02-07T15:22:56.7612218-02:00",
  "orderId": "123543123",
  "receipt": "38e0e47da2934847b489216d208cfd91"
}
```

<h3 id="cancel-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|The credentials are not enabled to access the service.|None|
|404|Not Found|Value not found.|None|
|429|Too Many Requests|Too many requests.|None|

<h3 id="cancel-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date and time when the notification was received.|
|orderId|string|false|none|Identification of the order in the seller.|
|receipt|string|false|none|Protocol code generated by the update. It may be `null`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Register change on order

<a id="opIdRegisterChange"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/changes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "discountValue": 1000,
    "incrementValue": 0,
    "itemsAdded": [
      {
        "id": "234788",
        "price": 200,
        "quantity": 1
      }
    ],
    "itemsRemoved": [
      {
        "id": "234794",
        "price": 600,
        "quantity": 2
      }
    ],
    "reason": "Promoção dada por telefone",
    "requestId": "change-request-0123"
  }'
```

`POST /api/oms/pvt/orders/{orderId}/changes`


> Timeout settings
>
> This is a synchronous API, which means the application requests data and waits until a value is returned. This behavior can cause timeout errors; to avoid them, we recommend setting the timeout in 20 seconds.

 This request allows [changing an order](https://help.vtex.com/en/tutorial/changing-items-from-a-completed-order--tutorials_190) by:
- Adding items to an order
- Removing items from an order
- Applying discounts to the total value of the order
- Incrementing the total value of the order. 

In those scenarios of order changes, it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a partial invoice scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. 

This action can only be done for orders in these status:
- `handling`
- `waiting-for-fulfillment` 

> The `Change order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Body parameter

```json
{
  "discountValue": 1000,
  "incrementValue": 0,
  "itemsAdded": [
    {
      "id": "234788",
      "price": 200,
      "quantity": 1
    }
  ],
  "itemsRemoved": [
    {
      "id": "234794",
      "price": 600,
      "quantity": 2
    }
  ],
  "reason": "Promoção dada por telefone",
  "requestId": "change-request-0123"
}
```

<h3 id="register-change-on-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID that identifies the order in the seller.|
|body|body|[RegisterChangeRequest](#schemaregisterchangerequest)|true|none|
|» discountValue|body|integer(int32)|true|This field can be used to apply a discount to the total value of the order. Value in cents.|
|» incrementValue|body|integer(int32)|true|This field can be used to increment the total value of the order. Value in cents.|
|» itemsAdded|body|[object]|false|List of items that should be added to the order.|
|» » id|body|string|true|Product ID of the item.|
|» » price|body|integer(int32)|true|Price of the item in cents.|
|» » quantity|body|integer(int32)|true|Amount of items to be added.|
|» itemsRemoved|body|[object]|false|List of items that should be removed from the order.|
|» » id|body|string|true|Product ID of the item.|
|» » price|body|integer(int32)|true|Price of the item in cents.|
|» » quantity|body|integer(int32)|true|Amount of items to be removed.|
|» reason|body|string|true|Reason for order change. This may be shown to the shopper in the UI or transactional emails.|
|» requestId|body|string|true|Request identification of the change. Only the first change made with each `requestId` will be effective on a given order. Use different IDs for different changes to the same order.|

> Example responses

> 200 Response

```json
{
  "date": "2019-02-08T13:54:33.6868469+00:00",
  "orderId": "v502538llux-01",
  "receipt": "535d4581-a2a2-4fd2-a206-1c61eae91b1e"
}
```

<h3 id="register-change-on-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RegisterChange](#schemaregisterchange)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add log in orders

<a id="opIdAddLog"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/interactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "message": "Teste add interactions",
    "source": "Postman"
  }'
```

`POST /api/oms/pvt/orders/{orderId}/interactions`

Add a Log in Interactions Order Array.

> Body parameter

```json
{
  "message": "Teste add interactions",
  "source": "Postman"
}
```

<h3 id="add-log-in-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|
|body|body|[AddLogRequest](#schemaaddlogrequest)|true|none|
|» message|body|string|true|none|
|» source|body|string|true|none|

<h3 id="add-log-in-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Start handling order

<a id="opIdStartHandling"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/start-handling \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/oms/pvt/orders/{orderId}/start-handling`

Changes the status of an order to indicate that it is in `handling`.

> Expect a `status 204` response with no content in case of a successful request. The store must validate this response to retry the call if the response differs from the `204` code, making this flow the store's responsibility. This endpoint can also respond with `status 500`. 

> The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

<h3 id="start-handling-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": "1",
    "exception": null,
    "message": "Acesso não autorizado"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "OMS003",
    "exception": null,
    "message": "Order status should be ready-for-handling to perform this action"
  }
}
```

<h3 id="start-handling-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|[No content](https://httpstatuses.com/204)|None|
|401|Unauthorized|[Unauthorized](https://httpstatuses.com/401)|Inline|
|403|Forbidden|[Forbidden](https://httpstatuses.com/403)|None|
|404|Not Found|[Not found](https://httpstatuses.com/404)|None|
|409|Conflict|[Conflict](https://httpstatuses.com/409)|Inline|
|429|Too Many Requests|[Too many requests](https://httpstatuses.com/429)|None|

<h3 id="start-handling-order-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|Object containing the error information|
|» code|string|false|none|Error code in the Order Management System|
|» exception|string \| null|false|none|Exception|
|» message|string|false|none|Error message|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|Object containing the error information|
|» code|string|false|none|Error code in the Order Management System|
|» exception|string \| null|false|none|Exception|
|» message|string|false|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-invoice">Invoice</h1>

## Order invoice notification

<a id="opIdInvoiceNotification"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/invoice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "courier": null,
    "dispatchedDate": null,
    "invoiceKey": null,
    "invoiceNumber": "9999",
    "invoiceUrl": "link",
    "invoiceValue": "10000",
    "issuanceDate": "2019-01-31T18:25:43-05:00",
    "items": [
      {
        "description": "335",
        "id": "1234",
        "price": 10000,
        "quantity": 1
      }
    ],
    "trackingNumber": null,
    "trackingUrl": null,
    "type": "Output"
  }'
```

`POST /api/oms/pvt/orders/{orderId}/invoice`

Entering the [invoice in the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) is a required step for its [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#order-status-details) to change to Invoiced - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed. 

The total value of the order will be updated after the insertion of the invoice, even when there's a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. 

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided. 

When returning items, an input invoice must be sent through this call. For that, the `type` field should be filled in with `input`. 

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

For marketplace integrations: once the order is invoiced, the seller should use this request to send the invoice information to the marketplace. Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.  

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



> Body parameter

```json
{
  "courier": null,
  "dispatchedDate": null,
  "invoiceKey": null,
  "invoiceNumber": "9999",
  "invoiceUrl": "link",
  "invoiceValue": "10000",
  "issuanceDate": "2019-01-31T18:25:43-05:00",
  "items": [
    {
      "description": "335",
      "id": "1234",
      "price": 10000,
      "quantity": 1
    }
  ],
  "trackingNumber": null,
  "trackingUrl": null,
  "type": "Output"
}
```

<h3 id="order-invoice-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|orderId|path|string|true|Unique code that identifies the order whose invoice is being sent.|
|body|body|[InvoiceNotificationRequest](#schemainvoicenotificationrequest)|true|none|
|» courier|body|string \| null|false|The name of the carrier responsible for delivering the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|» dispatchedDate|body|string \| null|false|Order dispatch date. May be `null`.|
|» embeddedInvoice|body|string \| null|false|XML text of the invoice, not the URL. This field is very important for external marketplace integrations such as Mercado Libre.|
|» invoiceKey|body|string \| null|false|none|
|» invoiceNumber|body|string \| null|true|Number that identifies the invoice.|
|» invoiceUrl|body|string \| null|false|URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.|
|» invoiceValue|body|string|true|Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|» issuanceDate|body|string|true|Issuance date of the invoice. You must add date and time in this field.|
|» items|body|[[Item1](#schemaitem1)]|true|Array containing the SKUs that are being invoiced.|
|» trackingNumber|body|string \| null|false|The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|» trackingUrl|body|string \| null|false|The URL used to track the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|» type|body|string|true|The type of invoice. There are two possible values: **Output** and **Input**. The Output type should be used when the invoice you are sending is a selling invoice. The Input type should be used when you send a return invoice.|

> Example responses

> 200 Response

```json
{
  "date": "2014-02-07T15:22:56.7612218-02:00",
  "orderId": "123543123",
  "receipt": "38e0e47da2934847b489216d208cfd91"
}
```

<h3 id="order-invoice-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="order-invoice-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date and time when the notification was received.|
|orderId|string|false|none|Identification of the order in the seller.|
|receipt|string|false|none|Protocol code generated by the update. It may be `null`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update order's partial invoice (send tracking number)

<a id="opIdUpdatepartialinvoice.SendTrackingNumber"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/invoice/000030711 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "courier": "carrierOne",
    "dispatchedDate": "2022-02-08T13:16:13.4617653+00:00",
    "trackingNumber": "87658",
    "trackingUrl": "https://www.tracking.com/url"
  }'
```

`PATCH /api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}`

Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).

After using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) API request to add tracking events.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

> Body parameter

```json
{
  "courier": "carrierOne",
  "dispatchedDate": "2022-02-08T13:16:13.4617653+00:00",
  "trackingNumber": "87658",
  "trackingUrl": "https://www.tracking.com/url"
}
```

<h3 id="update-orders-partial-invoice-send-tracking-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|Unique code that identifies the order whose invoice is being sent.|
|invoiceNumber|path|string|true|Number that identifies the invoice.|
|body|body|[Updatepartialinvoice.SendTrackingNumber.Request](#schemaupdatepartialinvoice.sendtrackingnumber.request)|true|none|
|» courier|body|string \| null|true|The name of the carrier responsible for delivering the order.|
|» dispatchedDate|body|string \| null|true|Date when the package was dispatched. For example, 2023-01-08T13:16:13.4617653+00:00.|
|» trackingNumber|body|string|true|The number code that identifies the order tracking.|
|» trackingUrl|body|string \| null|true|Package tracking URL.|

> Example responses

> 200 Response

```json
{
  "date": "2019-02-08T13:16:13.4617653+00:00",
  "orderId": "00-v5195004lux-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

<h3 id="update-orders-partial-invoice-send-tracking-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Updatepartialinvoice.SendTrackingNumber](#schemaupdatepartialinvoice.sendtrackingnumber)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-tracking">Tracking</h1>

## Update order tracking status

<a id="opIdUpdateTrackingStatus"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/invoice/000030711/tracking \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "deliveredDate": "2022-10-01 21:15",
    "events": [
      {
        "city": "Rio de Janeiro",
        "date": "2015-06-23",
        "description": "Coletado pela transportadora",
        "state": "RJ"
      },
      {
        "city": "Sao Paulo",
        "date": "2015-06-24",
        "description": "A caminho de Curitiba",
        "state": "SP"
      }
    ],
    "isDelivered": false
  }'
```

`PUT /api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking`

This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.

This request is not meant to send tracking number and URL to the invoice. If you wish to send tracking number and URL to an order, use the [Update order's partial invoice API request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). You can also learn more about [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios. 

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

> Body parameter

```json
{
  "deliveredDate": "2022-10-01 21:15",
  "events": [
    {
      "city": "Rio de Janeiro",
      "date": "2015-06-23",
      "description": "Coletado pela transportadora",
      "state": "RJ"
    },
    {
      "city": "Sao Paulo",
      "date": "2015-06-24",
      "description": "A caminho de Curitiba",
      "state": "SP"
    }
  ],
  "isDelivered": false
}
```

<h3 id="update-order-tracking-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|
|invoiceNumber|path|string|true|Number that identifies the invoice.|
|body|body|[UpdateTrackingStatusRequest](#schemaupdatetrackingstatusrequest)|true|none|
|» deliveredDate|body|string \| null|true|Date and time of when the package was delivered. Note that it is different from the tracking date parameter. The `deliveredDate` format is `yyyy-mm-dd hh:mm`.|
|» events|body|[[Event](#schemaevent)]|true|none|
|» isDelivered|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "date": "2017-03-29T18:04:31.0521233+00:00",
  "orderId": "v501245lspt-01",
  "receipt": "f67d33a8029c42ce9a8f07fc17f54449"
}
```

<h3 id="update-order-tracking-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateTrackingStatus](#schemaupdatetrackingstatus)|

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
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-conversation">Conversation</h1>

## Retrieve order conversation

<a id="opIdGetConversation"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/conversation-message \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/orders/{orderId}/conversation-message`

List all order conversations of an order by its order ID.

<h3 id="retrieve-order-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|
|reason|query|string|false|Reason for requesting unmasked data. Relevant only for PII platform version.|

> Example responses

> 200 Response

```json
[
  {
    "attachmentNames": [
      "attachments439505"
    ],
    "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:v=\"urn:schemas-microsoft-com:vml\" style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;\"> <head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;\"> <tr style=\"box-sizing: border-box !important;\"> <td align=\"left\" valign=\"top\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table class=\"mv4-ns\" width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" bgcolor=\"#fff\"> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"center\"> <div style=\"box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;\"> <a href=\"http://.com.br\" style=\"box-sizing: border-box !important;\"> <img alt=\"\" border=\"0\" width=\"auto\" src=\"http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show\" style=\"vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;\"> </img></a> </div> <h1 style=\"margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;\">Seu pagamento foi aprovado.</h1> <div style=\"box-sizing: border-box; color: #777; margin-top: .5rem !important;\"> Referente ao Pedido <span style=\"font-weight: 700 !important;\">#1305371685465-01</span> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <div style=\"box-sizing: border-box; margin-top: 2rem !important;\"> <p style=\"box-sizing: border-box !important;\">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <h3 style=\"font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;\">Pagamento</h3>    <div style=\"box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;\"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <p style=\"box-sizing: border-box !important;\"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>",
    "date": "2023-01-23T09:23:31.0000000+00:00",
    "firstWords": "Your payment has been aproved and we are waiting for...",
    "from": {
      "aliasMaskType": 0,
      "conversationRelatedTo": "1305371685465-01",
      "conversationSubject": "oms",
      "email": "noreply@store.com.br",
      "emailAlias": "noreply@vtexcommerce.com.br-9814872b.ct.store.com.br",
      "name": "no reply",
      "role": "null"
    },
    "hasAttachment": false,
    "id": "2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3",
    "subject": "Your payment has been aproved.",
    "to": [
      {
        "aliasMaskType": 0,
        "conversationRelatedTo": "1305371685465-01",
        "conversationSubject": "oms",
        "email": "customer.name@email.com",
        "emailAlias": "64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br",
        "name": "Mary John",
        "role": "Customer"
      }
    ]
  }
]
```

<h3 id="retrieve-order-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-order-conversation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GetConversation](#schemagetconversation)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
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

<h1 id="orders-api-payment">Payment</h1>

## Retrieve payment transaction

<a id="opIdGetPaymenttransaction"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/payment-transaction \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/orders/{orderId}/payment-transaction`

Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body. 

In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.

<h3 id="retrieve-payment-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|

> Example responses

> 200 Response

```json
{
  "isActive": true,
  "merchantName": "LUXSTORE",
  "payments": [
    {
      "cardHolder": null,
      "cardNumber": null,
      "connectorResponses": {
        "Message": "logMessage",
        "ReturnCode": "200",
        "Tid": "101770752",
        "authId": "170852"
      },
      "cvv2": null,
      "dueDate": null,
      "expireMonth": null,
      "expireYear": null,
      "firstDigits": "412341",
      "giftCardCaption": null,
      "giftCardId": null,
      "giftCardName": null,
      "group": "creditCard",
      "id": "721CBE1090324D12ABE301FE33DE775A",
      "installments": 1,
      "lastDigits": "4123",
      "paymentSystem": "4",
      "paymentSystemName": "Mastercard",
      "redemptionCode": null,
      "referenceValue": 10150,
      "tid": "101770752",
      "url": null,
      "value": 10150
    }
  ],
  "status": "Finished",
  "transactionId": "CB452D77E7D04099A4DB0479087B1D2C"
}
```

<h3 id="retrieve-payment-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetPaymenttransaction](#schemagetpaymenttransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Send payment notification

<a id="opIdSendPaymentNotification"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/orders/1172452900788-01/payments/F5C1A4E20D3B4E07B7E871F5B5BC9F91/payment-notification \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/oms/pvt/orders/{orderId}/payments/{paymentId}/payment-notification`

Send a payment notification of a given order, by order ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

<h3 id="send-payment-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|
|paymentId|path|string|true|VTEX payment identifier.|

<h3 id="send-payment-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad request.|None|
|403|Forbidden|The credentials are not enabled to access the service.|None|
|404|Not Found|Value not found.|None|
|429|Too Many Requests|Too many requests.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-feed-v3">Feed v3</h1>

## Test JSONata expression

<a id="opIdTestJSONataExpression"></a>

> Code samples

```bash
curl https://example.com/api/orders/expressions/jsonata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "Document": "{\\\"status\\\":\\\"canceled\\\"}",
    "Expression": "status = \\\"canceled\\\""
  }'
```

`POST /api/orders/expressions/jsonata`

This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.

Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).

> Body parameter

```json
{
  "Document": "{\\\"status\\\":\\\"canceled\\\"}",
  "Expression": "status = \\\"canceled\\\""
}
```

<h3 id="test-jsonata-expression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|
|body|body|[TestJSONataExpression](#schematestjsonataexpression)|false|none|
|» Document|body|string|true|JSON document to be evaluated by the expression.|
|» Expression|body|string|true|JSONata expression to be tested.|

> Example responses

> 200 Response

```text
True
```

<h3 id="test-jsonata-expression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve feed items

<a id="opIdGetfeedorderstatus1"></a>

> Code samples

```bash
curl 'https://example.com/api/orders/feed?maxlot=%7B%7BmaxLot%7D%7D' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/orders/feed`

Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue. 

The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.

> This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.

<h3 id="retrieve-feed-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxlot|query|string|true|Lot quantity to retrieve. Maximum accepted value is 10.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|

> Example responses

> 200 Response

```json
[
  {
    "currentChange": "2019-08-12T20:54:23.7153839Z",
    "domain": "Fulfillment",
    "eventId": "ED423DDED4C1AE580CADAC1A4D02DA3F",
    "handle": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidnRleGFwcGtleS1wYXJ0bmVyc2xhdGFtLVJNQkpNUyIsIkFwcEtleSI6InZ0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMiLCJBY2NvdW50IjoicGFydG5lcnNsYXRhbSIsIkhhbmRsZSI6IkFRRUIzbmtWR0piOXhhNGRjYlpkOTFVVWMyL2JObHc0Qnp3ZlNLV201Rjg2QXgrSGlRM053bEJkb2NwM2wvVytLdjFNQTZ4d3ZLcFYwYjlSeUttNVRpb3hrSVFMSG1Uck9xenB2aFlwU29uMzRrVmlNaWZHY2lnZFFqalBJdk00eWU4amVuaS9QKytaTmVxOFZWeFNGay81Yzg3YS84MTRjTFg2WGZPR2x2WitlTnVjTzA3S3UxK0xXaU5vQmJEY0cycGxKekxkRks3Qld3b1NTV3BmSWhrOGhmSFNkSzlzZVpJeG01QXFLbHFrUHNDNGk5emVaYVpBUVVrSi9aZWo3UjRrRDVRaXFjNmpjcnFheEdHc1lsNHMzUWM0ZmtWdmhYblJVQ2l2ZGdpMEtUYS8zcXlWWU9QTktIV2huTlZxMEZHNDNjME4vaWh6dDc0d1laNVl6aDFJRitHU2t1YTkrN1pCdnQ2VGs1cFRhZmVVclk0ckNPL2Fobnl1eXFLOG53ZkorVWxUTmt2ZVNFS29FdTNiUWQzSmc5R1lYWHlXOVVxRGo5dHJIZ1N5M3ZZa0dBWjd0MDZNZWUwQnBsdFBxWExaIiwiT3JkZXJJZCI6Ijk1MzcxMjAwNDEyNi0wMSIsIk1lc3NhZ2VJZCI6ImI5YjI4NDkwLTNjNzAtNDdjNi1hMTE3LWNhN2FjMTk2MDY1OSIsIkRvbWFpbiI6IkZ1bGZpbGxtZW50IiwiU3RhdGUiOiJyZWFkeS1mb3ItaGFuZGxpbmciLCJMYXN0U3RhdGUiOiJ3aW5kb3ctdG8tY2FuY2VsIiwiTGFzdENoYW5nZSI6IjA4LzEyLzIwMTkgMjA6NTQ6MDEiLCJDdXJyZW50Q2hhbmdlIjoiMDgvMTIvMjAxOSAyMDo1NDoyMyIsIkNyZWF0ZWRBdCI6IjA4LzEyLzIwMTkgMjE6MDE6MzAiLCJpc3MiOiJicm9hZGNhc3QtYXBpLnZ0ZXhjb21tZXJjZS5jb20uYnIiLCJhdWQiOiJwYXJ0bmVyc2xhdGFtX3Z0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMifQ.7RQBZQb6pHhFhA_jMKTiSoJbDck7awgD3Xx7sdJcW6w",
    "lastChange": "2019-08-12T20:54:01.134057Z",
    "lastState": "window-to-cancel",
    "orderId": "953712004126-01",
    "state": "ready-for-handling"
  }
]
```

<h3 id="retrieve-feed-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-feed-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Getfeedorderstatus](#schemagetfeedorderstatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Commit feed items

<a id="opIdCommititemfeedorderstatus"></a>

> Code samples

```bash
curl https://example.com/api/orders/feed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "handles": [
      "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
    ]
  }'
```

`POST /api/orders/feed`

Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.

> Body parameter

```json
{
  "handles": [
    "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
  ]
}
```

<h3 id="commit-feed-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[CommititemfeedorderstatusRequest](#schemacommititemfeedorderstatusrequest)|true|none|
|» handles|body|[string]|true|List of item handles to commit|

<h3 id="commit-feed-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get feed configuration

<a id="opIdGetFeedConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/orders/feed/config \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/orders/feed/config`

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



<h3 id="get-feed-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

> Example responses

> 200 Response

```json
{
  "filter": {
    "disableSingleFire": false,
    "expression": "status = \"payment-pending\"",
    "type": "FromOrders"
  },
  "queue": {
    "messageRetentionPeriodInSeconds": 345600,
    "visibilityTimeoutInSeconds": 240
  }
}
```

<h3 id="get-feed-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-feed-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximateAgeOfOldestMessageInSeconds|number|false|none|Aproximate age of the oldest message in the feed, measured in seconds.|
|filter|object|false|none|Information on how orders are filtered to show on the feed.|
|» disableSingleFire|boolean|false|none|Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.|
|» expression|string|false|none|JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is `FromOrders`.|
|» status|[string]|false|none|List of order statuses that should be included in the feed. This should only be used in case `type` is `FromWorkflow`.|
|» type|string|false|none|Determines what orders appear in the feed and how they are filtered. If a feed has the `FromWorkflow` type configuration, it will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field. A feed with the `FromOrders` type configuration gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions set in the `expression` field.|
|quantity|integer|false|none|Current number of messages in the feed, including messages that may not be visible due to time out after retrieval.|
|queue|object|false|none|Information that define the functioning of the queue.|
|» MessageRetentionPeriodInSeconds|integer|false|none|Maximum life span of an order update after it gets to the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.|
|» visibilityTimeoutInSeconds|integer|false|none|Period of time for which an item is not visible in the feed after it has been retrieved with the Get feed items request. Measured in seconds.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or update feed configuration

<a id="opIdFeedConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/orders/feed/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "filter": {
      "disableSingleFire": false,
      "expression": "value > 100",
      "type": "FromOrders"
    },
    "queue": {
      "MessageRetentionPeriodInSeconds": 345600,
      "visibilityTimeoutInSeconds": 250
    }
  }'
```

`POST /api/orders/feed/config`

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.

> Body parameter

```json
{
  "filter": {
    "disableSingleFire": false,
    "expression": "value > 100",
    "type": "FromOrders"
  },
  "queue": {
    "MessageRetentionPeriodInSeconds": 345600,
    "visibilityTimeoutInSeconds": 250
  }
}
```

<h3 id="create-or-update-feed-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[FeedConfigurationRequest](#schemafeedconfigurationrequest)|true|none|
|» filter|body|[FeedFilter](#schemafeedfilter)|true|Object with type and status that will filter feed orders.|
|» queue|body|[Queue](#schemaqueue)|true|Object with information about timeout and message retention.|

<h3 id="create-or-update-feed-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|The credentials are not enabled to access the service|None|
|404|Not Found|Value not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete feed configuration

<a id="opIdFeedConfigurationDelete"></a>

> Code samples

```bash
curl https://example.com/api/orders/feed/config \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/orders/feed/config`

Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

<h3 id="delete-feed-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="delete-feed-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad request - Unable to check address / Only https scheme is accepted|None|
|403|Forbidden|The credentials are not enabled to access the service|None|
|404|Not Found|Value not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-order-hook">Order hook</h1>

## Get hook configuration

<a id="opIdGetHookConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/orders/hook/config \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/orders/hook/config`

Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook). 

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



<h3 id="get-hook-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|clientEmail|query|string|false|Customer email.|
|page|query|string|false|Page number for result pagination.|
|per_page|query|string|false|Page quantity for result pagination.|

<h3 id="get-hook-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create or update hook configuration

<a id="opIdHookConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/orders/hook/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "filter": {
      "disableSingleFire": false,
      "expression": "value > 100",
      "type": "FromOrders"
    },
    "hook": {
      "headers": {
        "key": "value"
      },
      "url": "https://endpoint.example/path"
    }
  }'
```

`POST /api/orders/hook/config`

Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

There are two types of filtering that can be used: 

 - `FromWorkflow`: filters orders by status.

 - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.

 This enables stores to filter delivered orders and orders in which products have been added or removed, for example.

To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).

> Body parameter

```json
{
  "filter": {
    "disableSingleFire": false,
    "expression": "value > 100",
    "type": "FromOrders"
  },
  "hook": {
    "headers": {
      "key": "value"
    },
    "url": "https://endpoint.example/path"
  }
}
```

<h3 id="create-or-update-hook-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[HookConfigurationRequest](#schemahookconfigurationrequest)|true|none|
|» filter|body|[HookFilter](#schemahookfilter)|true|none|
|» hook|body|[Hook](#schemahook)|true|none|

> Example responses

> 200 Response

```json
{
  "CurrentChange": "2019-08-14T17:12:48.0965893Z",
  "Domain": "Fulfillment",
  "LastChange": "2019-08-14T17:11:39.2550122Z",
  "LastState": "window-to-cancel",
  "OrderId": "v52277740atmc-01",
  "Origin": {
    "Account": "automacaoqa",
    "Key": "vtexappkey-appvtex"
  },
  "State": "ready-for-handling"
}
```

<h3 id="create-or-update-hook-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HookConfiguration](#schemahookconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete hook configuration

<a id="opIdDeleteHookConfiguration"></a>

> Code samples

```bash
curl https://example.com/api/orders/hook/config \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/orders/hook/config`

Deletes a given hook configuration.

Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).

<h3 id="delete-hook-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="delete-hook-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|The credentials are not enabled to access the service|None|
|404|Not Found|Value not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-export-order-report">Export order report</h1>

## Export order report with status 'Completed'

<a id="opIdStatusCompleted"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/admin/reports/completed \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/admin/reports/completed`

Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

<h3 id="export-order-report-with-status-completed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "cancelled": false,
    "completedDate": "2017-05-10T18:31:35.5530698+00:00",
    "dateOfRequest": "2017-05-10T18:31:28.3984674+00:00",
    "email": "renan.servare@vtex.com.br",
    "filter": "generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300",
    "hostUri": "http://accountname.vtexcommercestable.com.br/",
    "id": "a83d6d30-a52a-4706-9fc9-e2e7c1841acb",
    "instanceId": "i-0b359c34e40c3f281",
    "lasUpdateTime": "2017-05-10T18:31:35.5250685+00:00",
    "linkToDownload": "http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A3AS4wJiFF97%2FpIGtq4rpqA2F7CqU0g%2BIhPPdD%2FaqnF9TKxX1%2BSj4JloO%2F54XdgL3VZyb%2B76Z0FrOZAYnGZvuE%2FMB4KUz1d4NKFOh0sFt%2FxzYFrBOLvMO%2F%2FW3LMG%2FuyiHecP9pYceVysntj41jJeRcLG%2BRBN4Z69TQBQrUp%2FOS%2FOaJFssVvF6olk5WjK9gYxBDpUUiOQvyAIdhmRKiMfhfOSdT%2FgrPG06YGJE18lm4kIThxH3aqE1k2pl3gVd250QRFzGrFRCPgylnlm5C9xEFf2Mr794Dc2I2ki5GCR8Vhxwgi3rlCvI4G8R1PIXcwG7YfFyzb%2BgKUYCsAcvUschtbpWm5ahXZsJG2FioeFIzHbd3xQ5I2yjV9lrKyUiQHjxsyX7Z0dd7YkKkclmOR85wrhgxHLLpOrM021lYNbm1K9a%2FfPjIOxhMt3a1dgkwNaIJmgxnY3n%2FDgNSJsDpYEpckx9tNqbcuCEJYLC54fmbOH%2B3Nip%2Fks3X%2FBmvzo2iB79Y5cucIEkl9wFeKr9kqw5t5u4ciFf%2F4opHnT85eHZm3POEYsD9XxcIHUrlYyLbMawaFwBgklp6oo7LDNyAU%3D&Signature=%2BFGUxl8zViIqttg5f5y%2F9tbAQhw%3D",
    "publishId": "263fd533551e445caceec991385ef610",
    "query": "{\"Queries\":[{\"Quoted\":true,\"FieldName\":\"InstanceId\",\"FieldValue\":\"263FD533551E445CACEEC991385EF610\"},{\"Quoted\":true,\"FieldName\":\"OrderIsComplete\",\"FieldValue\":\"True\"}],\"Oper\":\"AND\"}",
    "rowNumber": 8,
    "rowsProcessed": 8,
    "startDate": "2017-05-10T18:31:27.4043359+00:00",
    "utcTime": "-0300"
  }
]
```

<h3 id="export-order-report-with-status-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-order-report-with-status-completed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportCompletedResponse](#schemaexportcompletedresponse)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Expires|string||none|
|200|Pragma|string||none|
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

## Export order report with status 'In Progress'

<a id="opIdStatusInProgress"></a>

> Code samples

```bash
curl https://example.com/api/oms/pvt/admin/reports/inprogress \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/admin/reports/inprogress`

Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

<h3 id="export-order-report-with-status-in-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "cancelled": false,
    "completedDate": "2022-05-10T16:21:30.7714518+00:00",
    "dateOfRequest": "2017-05-10T16:21:31.7452567+00:00",
    "email": "renan.servare@vtex.com.br",
    "filter": "generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300",
    "hostUri": "http://accountname.vtexcommercestable.com.br/",
    "id": "b7bdafba-2456-4aba-9bc0-1d598df685bd",
    "instanceId": "i-0a3b7a89f1fe13ba9",
    "lasUpdateTime": "2017-05-10T16:21:30.7714518+00:00",
    "linkToDownload": "download.link.url.com",
    "publishId": "263fd533551e445caceec991385ef610",
    "query": "{\"Queries\":[{\"Quoted\":true,\"FieldName\":\"InstanceId\",\"FieldValue\":\"263FD533551E445CACEEC991385EF610\"},{\"Quoted\":true,\"FieldName\":\"OrderIsComplete\",\"FieldValue\":\"True\"}],\"Oper\":\"AND\"}",
    "rowNumber": 0,
    "rowsProcessed": 0,
    "startDate": "2017-05-10T16:21:30.7714518+00:00",
    "utcTime": "-0300"
  }
]
```

<h3 id="export-order-report-with-status-in-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="export-order-report-with-status-in-progress-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportInProgressResponse](#schemaexportinprogressresponse)]|false|none|none|

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
|200|X-CDNIgnore|string||none|
|200|X-Powered-by-VTEX-Janus-Edge|string||none|
|200|X-Track|string||none|
|200|X-VTEX-Janus-Router-Backend-App|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-user-orders">User orders</h1>

## Retrieve user's orders

<a id="opIdUserorderslist"></a>

> Code samples

```bash
curl 'https://example.com/api/oms/user/orders?clientEmail=customer%40mail.com&page=15&per_page=15' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/user/orders`

Lists all orders from a given client, filtering by their email. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

<h3 id="retrieve-users-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientEmail|query|string|true|Customer email.|
|page|query|string|true|Page number for result pagination.|
|per_page|query|string|true|Page quantity for result pagination.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "facets": [],
  "list": [
    {
      "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-28T20:33:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2019-01-28T20:09:43+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502556llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502556",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 1,
      "totalValue": 1160,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2018-08-28T17:42:40+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502449llux-02 Resumo Itens R$ 1.178,98 Entrega R$ 6,90 Total R$ 1.185,88",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502449llux-02",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Promissory",
      "salesChannel": "1",
      "sequence": "502452",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 12,
      "totalValue": 118588,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2018-08-28T17:42:28.9171556+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Mangueira Reservatório Ao Cavalete",
          "ean": null,
          "id": "195",
          "price": 7390,
          "productId": "134",
          "quantity": 1,
          "refId": "TE3121110",
          "seller": "1",
          "sellingPrice": 7390
        },
        {
          "description": "Mangueira Filtro",
          "ean": null,
          "id": "238",
          "price": 5190,
          "productId": "162",
          "quantity": 1,
          "refId": "XC459N610CA",
          "seller": "1",
          "sellingPrice": 5190
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v502449llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "502449",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 21526180,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2017-07-29T19:24:20.7444363+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2017-07-25T23:17:36.7963248+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Aquecedor Britania 1500 Branco",
          "ean": "1235567890143",
          "id": "1234568212",
          "price": 35599,
          "productId": "1000200",
          "quantity": 1,
          "refId": "branquinho",
          "seller": "1",
          "sellingPrice": 35599
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v502058llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "502058",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 35599,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2017-06-27T13:59:49.7705236+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2017-06-26T16:57:58.9986524+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Boneco do Mário",
          "ean": "bonecomario",
          "id": "1234568183",
          "price": 150363,
          "productId": "1000257",
          "quantity": 1,
          "refId": "bonecomario",
          "seller": "1",
          "sellingPrice": 150363
        },
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 1,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v501538llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "501538",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 151262,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-12-02T08:00:00+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-11-21T19:57:54.0415289+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 2,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v501020llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "501020",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 3190,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-10-10T14:23:17.1897068+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-10-10T17:19:30.8562035+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "SMARTPHONE SAMSUNG GALAXY S7 FLAT SM-G930FZDLZTO 32GB DOURADO TELA 5.1\" 4G CÂMERA 12 MP",
          "ean": null,
          "id": "1234568028",
          "price": 299000,
          "productId": "1000203",
          "quantity": 1,
          "refId": "testefnac",
          "seller": "1",
          "sellingPrice": 299000
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500973llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500973",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 0,
      "totalValue": 299900,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-10-10T14:13:34.4927265+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-10-10T17:07:59.0889392+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 1,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500970llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500970",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 1799,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-08-17T18:35:04.8659804+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Botin Futbol Adidas 11Questra Fg Cesped Hombre Absolut - M",
          "ean": "absolutm",
          "id": "549",
          "price": 1000,
          "productId": "9",
          "quantity": 1,
          "refId": null,
          "seller": "1",
          "sellingPrice": 1000
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500890llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500890",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 1000,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-07-29T00:20:47.7736718+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Rooibos Lavanda - Pouch - 50gr",
          "ean": "198",
          "id": "98",
          "price": 5200,
          "productId": "1000025",
          "quantity": 1,
          "refId": "10098",
          "seller": "1",
          "sellingPrice": 5200
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500838llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500838",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 6200,
      "workflowInErrorState": false,
      "workflowInRetry": false
    }
  ],
  "paging": {
    "currentPage": 1,
    "pages": 10,
    "perPage": 2,
    "total": 19
  },
  "stats": {
    "stats": {
      "totalItems": {
        "Count": 19,
        "Facets": {},
        "Max": 0,
        "Mean": 0,
        "Min": 0,
        "Missing": 0,
        "StdDev": 0,
        "Sum": 0,
        "SumOfSquares": 0
      },
      "totalValue": {
        "Count": 19,
        "Facets": {},
        "Max": 0,
        "Mean": 0,
        "Min": 0,
        "Missing": 0,
        "StdDev": 0,
        "Sum": 0,
        "SumOfSquares": 0
      }
    }
  }
}
```

<h3 id="retrieve-users-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Userorderslist](#schemauserorderslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve user order details

<a id="opIdUserorderdetails"></a>

> Code samples

```bash
curl 'https://example.com/api/oms/user/orders/1172452900788-01?clientEmail=customer%40mail.com' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/user/orders/{orderId}`

Lists all details from a user's order, through client's perspective. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

<h3 id="retrieve-user-order-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientEmail|query|string|true|Customer email.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|Order ID is a unique code that identifies an order.|

> Example responses

> 200 Response

```json
{
  "affiliateId": "GHB",
  "allowCancellation": true,
  "allowEdition": false,
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorData": null,
  "cancelReason": "The size was too big.",
  "cancellationData": {
    "CancellationDate": "2022-10--05T15:40:33",
    "Reason": "Item was too big in the client.",
    "RequestedByPaymentNotification": false,
    "RequestedBySellerNotification": false,
    "RequestedBySystem": false,
    "RequestedByUser": true
  },
  "changesAttachment": {
    "changesData": [
      {
        "discountValue": 3290,
        "incrementValue": 0,
        "itemsAdded": [],
        "itemsRemoved": [
          {
            "id": "1234568358",
            "name": "Bay Max L",
            "price": 3290,
            "quantity": 1,
            "unitMultiplier": null
          }
        ],
        "reason": "Blah",
        "receipt": {
          "date": "2019-02-06T20:46:04.4003606+00:00",
          "orderId": "v502556llux-01",
          "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
        }
      }
    ],
    "id": "changeAttachment"
  },
  "checkedInPickupPointId": "storeNameExample_901",
  "clientPreferencesData": {
    "locale": "en-US",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "11047867702",
    "documentType": "cpf",
    "email": "rodrigo.cunha@vtex.com.br",
    "firstName": "Rodrigo",
    "id": "clientProfileData",
    "isCorporate": false,
    "lastName": "Cunha",
    "phone": "+5521972321094",
    "stateInscription": null,
    "tradeName": null,
    "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93"
  },
  "commercialConditionData": null,
  "creationDate": "2019-01-28T20:09:43.899958+00:00",
  "customData": null,
  "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
  "giftRegistryData": null,
  "hostname": "luxstore",
  "invoiceData": null,
  "invoicedDate": null,
  "isCheckedIn": false,
  "isCompleted": true,
  "itemMetadata": {
    "Items": [
      {
        "AssemblyOptions": [
          {
            "Composition": {},
            "Id": "vtex.subscription.plan-ana",
            "InputValues": {
              "vtex.subscription.key.frequency": {
                "Domain": [
                  "4 month",
                  "1 month"
                ],
                "MaximumNumberOfCharacters": 8
              }
            },
            "Name": "vtex.subscription.plan-ana",
            "Required": false
          }
        ],
        "DetailUrl": "/catfood/p",
        "Ean": "43673557",
        "Id": "18",
        "ImageUrl": "http://store.vteximg.com.br/ids/155392-55-55/AlconKOI.jpg?v=635918402228600000",
        "Name": "Cat food",
        "ProductId": "6",
        "RefId": "105",
        "Seller": "1",
        "SkuName": "Cat food"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000023",
        "brandName": "VTEX",
        "categoriesIds": "/1/",
        "commercialConditionId": "5",
        "dimension": {
          "cubicweight": 0.7031,
          "height": 15,
          "length": 15,
          "weight": 15,
          "width": 15
        },
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null,
        "productClusterId": "135,142"
      },
      "assemblies": [],
      "attachmentOfferings": [
        {
          "name": "vtex.subscription.weekly",
          "required": false,
          "schema": {
            "vtex.subscription.key.frequency": {
              "Domain": [
                "1 week",
                " 2 week",
                " 3 week",
                " 4 week"
              ],
              "MaximumNumberOfCharacters": 7
            }
          }
        }
      ],
      "attachments": [],
      "bundleItems": [],
      "callCenterOperator": "callCenterOp5473869",
      "commission": 0,
      "components": [],
      "costPrice": 52,
      "detailUrl": "/bay-max-9429485/p",
      "ean": "3256873",
      "freightCommission": 0,
      "id": "1234568358",
      "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
      "isGift": false,
      "itemAttachment": {
        "content": {},
        "name": null
      },
      "listPrice": 3290,
      "lockId": "00-v502556llux-01",
      "manualPrice": null,
      "measurementUnit": "un",
      "name": "Bay Max L",
      "offerings": [],
      "params": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 3290,
      "priceDefinitions": {
        "calculatedSellingPrice": 99,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 99
          }
        ],
        "total": 99
      },
      "priceTags": [],
      "priceValidUntil": null,
      "productId": "9429485",
      "quantity": 1,
      "refId": "BIGHEROBML",
      "rewardValue": 0,
      "seller": "1",
      "sellerSku": "1234568358",
      "sellingPrice": 3290,
      "serialNumbers": "3",
      "shippingPrice": null,
      "tax": 0,
      "taxCode": null,
      "uniqueId": "87F0945396994B349158C7D9C9941442",
      "unitMultiplier": 1
    }
  ],
  "lastChange": "2019-02-06T20:46:11.7010747+00:00",
  "lastMessage": null,
  "marketingData": {
    "coupon": "sale",
    "id": "marketingData",
    "marketingTags": [
      "vtex-subscription"
    ],
    "utmCampaign": "christmas",
    "utmMedium": "utm medium name",
    "utmPartner": "utm partner name",
    "utmSource": "fb",
    "utmiCampaign": " ",
    "utmiPart": " ",
    "utmipage": " "
  },
  "marketplace": {
    "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
    "isCertified": null,
    "name": "luxstore"
  },
  "marketplaceItems": [],
  "marketplaceOrderId": "",
  "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
  "merchantName": "luxstore",
  "openTextField": null,
  "orderFormId": "caae7471333e403f959fa5fd66951340",
  "orderGroup": "v502556lspt",
  "orderId": "1172452900788-01",
  "origin": "Marketplace",
  "packageAttachment": {
    "packages": []
  },
  "paymentData": {
    "giftCards": [],
    "transactions": [
      {
        "isActive": true,
        "merchantName": "luxstore",
        "payments": [
          {
            "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
            "bankIssuedInvoiceBarCodeType": "i25",
            "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
            "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
            "billingAddress": {},
            "cardHolder": null,
            "cardNumber": null,
            "connectorResponses": {
              "Message": "logMessage",
              "ReturnCode": "200",
              "Tid": "94857956",
              "authId": "857956"
            },
            "cvv2": null,
            "dueDate": "2019-02-02",
            "expireMonth": null,
            "expireYear": null,
            "firstDigits": null,
            "giftCardAsDiscount": false,
            "giftCardCaption": null,
            "giftCardId": null,
            "giftCardName": null,
            "giftCardProvider": "presentCard",
            "group": "bankInvoice",
            "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
            "installments": 1,
            "koinUrl": "koinURL",
            "lastDigits": null,
            "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "paymentSystem": "6",
            "paymentSystemName": "Boleto Bancário",
            "redemptionCode": null,
            "referenceValue": 4450,
            "tid": null,
            "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
            "value": 4450
          }
        ],
        "transactionId": "418213DE29634837A63DD693A937A696"
      }
    ]
  },
  "ratesAndBenefitsData": {
    "id": "ratesAndBenefitsData",
    "rateAndBenefitsIdentifiers": []
  },
  "roundingError": 0,
  "salesChannel": "1",
  "sellerOrderId": "00-v502556llux-01",
  "sellers": [
    {
      "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName",
      "id": "1",
      "logo": "https://sellersLogo/images.png",
      "name": "Lux Store"
    }
  ],
  "sequence": "502556",
  "shippingData": {
    "address": {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "10",
      "country": "BRA",
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "518",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    },
    "id": "shippingData",
    "logisticsInfo": [
      {
        "addressId": "-1425945657910",
        "deliveryChannel": "delivery",
        "deliveryChannels": [
          {
            "id": "delivery",
            "stockBalance": 0
          }
        ],
        "deliveryCompany": "Todos os CEPS",
        "deliveryIds": [
          {
            "accountCarrierName": "recorrenciaqa",
            "courierId": "197a56f",
            "courierName": "Todos os CEPS",
            "dockId": "1",
            "kitItemDetails": [],
            "quantity": 1,
            "warehouseId": "1_1"
          }
        ],
        "deliveryWindow": null,
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "itemIndex": 0,
        "listPrice": 1160,
        "lockTTL": "10d",
        "pickupPointId": "1_VTEX-RJ",
        "pickupStoreInfo": {
          "additionalInfo": null,
          "address": null,
          "dockId": null,
          "friendlyName": null,
          "isPickupStore": false
        },
        "polygonName": null,
        "price": 1160,
        "selectedSla": "Normal",
        "sellingPrice": 1160,
        "shippingEstimate": "5bd",
        "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
        "shipsTo": [
          "BRA"
        ],
        "slas": [
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Normal",
            "lockTTL": "12d",
            "name": "Normal",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region196",
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Expressa",
            "lockTTL": "12d",
            "name": "Expressa",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Quebra Kit",
            "lockTTL": "12d",
            "name": "Quebra Kit",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "2bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Sob Encomenda",
            "lockTTL": "12d",
            "name": "Sob Encomenda",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "32bd",
            "transitTime": "3d"
          }
        ],
        "transitTime": "3d",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "-1425945657910",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "10",
        "country": "BRA",
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "geoCoordinates": [],
        "neighborhood": "Botafogo",
        "number": "518",
        "postalCode": "22250-040",
        "receiverName": "Rodrigo Cunha",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "trackingHints": null
  },
  "status": "handling",
  "statusDescription": "Preparando Entrega",
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "CurrencyDecimalDigits": 2,
      "CurrencyDecimalSeparator": ",",
      "CurrencyGroupSeparator": ".",
      "CurrencyGroupSize": 3,
      "StartsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": {
    "SubscriptionGroupId": "A64AC73C0FB8693A7ADB4AC69CA4FD5F",
    "Subscriptions": [
      {
        "ExecutionCount": 724,
        "ItemIndex": 0,
        "Plan": {
          "frequency": {
            "interval": 1,
            "periodicity": "DAILY"
          },
          "type": "RECURRING_PAYMENT",
          "validity": {
            "begin": "2022-01-10T00:00:00.0000000+00:00",
            "end": "2024-02-03T00:00:00.0000000+00:00"
          }
        },
        "PriceAtSubscriptionDate": 100
      }
    ]
  },
  "taxData": {
    "areTaxesDesignatedByMarketplace": true,
    "taxInfoCollection": [
      {
        "itemIndex": 0,
        "priceTags": [
          {
            "isPercentual": false,
            "name": "Taxes (Magazine Luisa)",
            "rawValue": "COLOCAR_O_VALOR_SEM_DECIMAL"
          }
        ],
        "sku": "COLOCAR_O_SKUID"
      }
    ]
  },
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 3290
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": 0
    },
    {
      "id": "Shipping",
      "name": "Total do Frete",
      "value": 1160
    },
    {
      "id": "Tax",
      "name": "Total da Taxa",
      "value": 0
    },
    {
      "id": "Change",
      "name": "Total das mudanças",
      "value": -3290
    }
  ],
  "value": 1160
}
```

<h3 id="retrieve-user-order-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Userorderdetails](#schemauserorderdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-change-seller">Change seller</h1>

## Get window to change seller

<a id="opIdGetWindowToChangeSeller"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pvt/configuration/window-to-change-seller \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/checkout/pvt/configuration/window-to-change-seller`

Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.

<h3 id="get-window-to-change-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
2
```

<h3 id="get-window-to-change-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update window to change seller

<a id="opIdUpdateWindowToChangeSeller"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pvt/configuration/window-to-change-seller \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "waitingTime": 4
  }'
```

`POST /api/checkout/pvt/configuration/window-to-change-seller`

Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.

It is possible to check the current window using the request Get window to change seller.

> Body parameter

```json
{
  "waitingTime": 4
}
```

<h3 id="update-window-to-change-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» waitingTime|body|integer|true|Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.|

<h3 id="update-window-to-change-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="orders-api-feed-v2-deprecated">Feed v2 (deprecated)</h1>

## Get feed order status

<a id="opIdGetfeedorderstatus"></a>

> Code samples

```bash
curl 'https://example.com/api/oms/pvt/feed/orders/status?maxLot=%7B%7BmaxLot%7D%7D' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/oms/pvt/feed/orders/status`

Get feed order status (deprecated)

<h3 id="get-feed-order-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxLot|query|string|true|none|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|Content-Type|header|string|true|Type of the content being sent|

<h3 id="get-feed-order-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AddLogRequest">AddLogRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddlogrequest"></a>
<a id="schema_AddLogRequest"></a>
<a id="tocSaddlogrequest"></a>
<a id="tocsaddlogrequest"></a>

```json
{
  "message": "Teste add interactions",
  "source": "Postman"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|source|string|true|none|none|

<h2 id="tocS_AdditionalInfo">AdditionalInfo</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalinfo"></a>
<a id="schema_AdditionalInfo"></a>
<a id="tocSadditionalinfo"></a>
<a id="tocsadditionalinfo"></a>

```json
{
  "brandId": "2000023",
  "brandName": "VTEX",
  "categoriesIds": "/1/",
  "commercialConditionId": "5",
  "dimension": {
    "cubicweight": 0.7031,
    "height": 15,
    "length": 15,
    "weight": 15,
    "width": 15
  },
  "offeringInfo": null,
  "offeringType": null,
  "offeringTypeId": null,
  "productClusterId": "135,142"
}
```

Additional information about the item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandId|string|true|none|Item's brand ID.|
|brandName|string|true|none|Item's brand name.|
|categoriesIds|string|true|none|Item's category ID.|
|commercialConditionId|string|true|none|Commercial conditions ID.|
|dimension|[Dimension](#schemadimension)|true|none|none|
|offeringInfo|string \| null|true|none|Information about services related to the item. For example: guarantee or installation.|
|offeringType|string \| null|true|none|Offering type.|
|offeringTypeId|string \| null|true|none|Offering type ID.|
|productClusterId|string|true|none|All product clusters related to the item.|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "addressId": "-1425945657910",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": "3",
  "country": "BRA",
  "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
  "geoCoordinates": [],
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "22250-040",
  "receiverName": "Rodrigo Cunha",
  "reference": null,
  "state": "RJ",
  "street": "Praia de Botafogo",
  "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
}
```

Shipping address details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Shipping address ID.|
|addressType|string|true|none|Type of address. For example, `Residential` or `Pickup`, among others.|
|city|string|true|none|City of the shipping address.|
|complement|string|true|none|Complement to the shipping address when it applies.|
|country|string|true|none|Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).|
|entityId|string \| null|true|none|Shipping address entity ID.|
|geoCoordinates|[string]|true|none|Array with two numbers with geocoordinates, first longitude then latitude.|
|neighborhood|string|true|none|Neighborhood of the shipping address.|
|number|string|true|none|Number of the building, house or apartment in the shipping address.|
|postalCode|string|true|none|Postal code of the shipping address.|
|receiverName|string|true|none|Name of the person who is going to receive the order.|
|reference|string \| null|true|none|Complement to help locate the shipping address, in case of delivery.|
|state|string|true|none|State of the shipping address.|
|street|string|true|none|Street of the shipping address.|
|versionId|string \| null|true|none|Shipping address version ID.|

<h2 id="tocS_BRL">BRL</h2>
<!-- backwards compatibility -->
<a id="schemabrl"></a>
<a id="schema_BRL"></a>
<a id="tocSbrl"></a>
<a id="tocsbrl"></a>

```json
{
  "Count": 84,
  "Facets": null,
  "Max": 21526180,
  "Mean": 262672.75,
  "Min": 1160,
  "Missing": 0,
  "StdDev": 2348087.3869179883,
  "Sum": 22064511,
  "SumOfSquares": 463417439039853
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int64)|true|none|none|

<h2 id="tocS_BRL1">BRL1</h2>
<!-- backwards compatibility -->
<a id="schemabrl1"></a>
<a id="schema_BRL1"></a>
<a id="tocSbrl1"></a>
<a id="tocsbrl1"></a>

```json
{
  "Count": 84,
  "Facets": null,
  "Max": 89,
  "Mean": 2.2261904761904763,
  "Min": 1,
  "Missing": 0,
  "StdDev": 9.660940100525016,
  "Sum": 187,
  "SumOfSquares": 8163
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_ChangesAttachment">ChangesAttachment</h2>
<!-- backwards compatibility -->
<a id="schemachangesattachment"></a>
<a id="schema_ChangesAttachment"></a>
<a id="tocSchangesattachment"></a>
<a id="tocschangesattachment"></a>

```json
{
  "changesData": [
    {
      "discountValue": 3290,
      "incrementValue": 0,
      "itemsAdded": [],
      "itemsRemoved": [
        {
          "id": "1234568358",
          "name": "Bay Max L",
          "price": 3290,
          "quantity": 1,
          "unitMultiplier": null
        }
      ],
      "reason": "Blah",
      "receipt": {
        "date": "2019-02-06T20:46:04.4003606+00:00",
        "orderId": "v5195004lux-01",
        "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
      }
    }
  ],
  "id": "changeAttachment"
}
```

Information about changes in the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesData|[[ChangesDatum](#schemachangesdatum)]|true|none|Order change details.|
|id|string|true|none|Object ID, the expect value is `changeAttachment`.|

<h2 id="tocS_ChangesDatum">ChangesDatum</h2>
<!-- backwards compatibility -->
<a id="schemachangesdatum"></a>
<a id="schema_ChangesDatum"></a>
<a id="tocSchangesdatum"></a>
<a id="tocschangesdatum"></a>

```json
{
  "discountValue": 3290,
  "incrementValue": 0,
  "itemsAdded": [],
  "itemsRemoved": [
    {
      "id": "1234568358",
      "name": "Bay Max L",
      "price": 3290,
      "quantity": 1,
      "unitMultiplier": null
    }
  ],
  "reason": "Blah",
  "receipt": {
    "date": "2019-02-06T20:46:04.4003606+00:00",
    "orderId": "v5195004lux-01",
    "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountValue|integer(int32)|true|none|Order change discount value.|
|incrementValue|integer(int32)|true|none|Order change increment value.|
|itemsAdded|[string]|true|none|List of items added to the order.|
|itemsRemoved|[[ItemsRemoved](#schemaitemsremoved)]|true|none|List of items removed from the order.|
|reason|string|true|none|Text explaining why there was a change in the order. This information may be shown to the customer in the UI or transactional emails.|
|receipt|[Receipt](#schemareceipt)|true|none|Information about the receipt for changed orders.|

<h2 id="tocS_ClientProfileData">ClientProfileData</h2>
<!-- backwards compatibility -->
<a id="schemaclientprofiledata"></a>
<a id="schema_ClientProfileData"></a>
<a id="tocSclientprofiledata"></a>
<a id="tocsclientprofiledata"></a>

```json
{
  "corporateDocument": null,
  "corporateName": null,
  "corporatePhone": null,
  "customerClass": null,
  "document": "11047867702",
  "documentType": "cpf",
  "email": "rodrigo.cunha@vtex.com.br",
  "firstName": "Rodrigo",
  "id": "clientProfileData",
  "isCorporate": false,
  "lastName": "VTEX",
  "phone": "+5521972321094",
  "stateInscription": null,
  "tradeName": null,
  "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93"
}
```

Object with information on the client's profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporateDocument|string \| null|true|none|If the customer is a legal entity, here goes the corporate document.|
|corporateName|string \| null|true|none|If the customer is a legal entity, here goes the corporate name.|
|corporatePhone|string \| null|true|none|If the customer is a legal entity, here goes the corpany's phone number.|
|customerClass|string \| null|true|none|Identification of the class the customer belongs to.|
|document|string|true|none|Document identification code informed by the customer.|
|documentType|string|true|none|Type of the document informed by the customer.|
|email|string|true|none|Customer's email.|
|firstName|string|true|none|Customer's first name.|
|id|string|true|none|Object ID, the expected value is `clientProfileData`.|
|isCorporate|boolean|true|none|The value is `true` when the customer is a legal entity and `false` when not.|
|lastName|string|true|none|Customer's last name.|
|phone|string|true|none|Customers's phone number.|
|stateInscription|string \| null|true|none|If the customer is a legal entity, here goes the state inscription.|
|tradeName|string \| null|true|none|If the customer is a legal entity, here goes the trade name.|
|userProfileId|string|true|none|Customer user profile ID.|

<h2 id="tocS_CommititemfeedorderstatusRequest">CommititemfeedorderstatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommititemfeedorderstatusrequest"></a>
<a id="schema_CommititemfeedorderstatusRequest"></a>
<a id="tocScommititemfeedorderstatusrequest"></a>
<a id="tocscommititemfeedorderstatusrequest"></a>

```json
{
  "handles": [
    "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handles|[string]|true|none|List of item handles to commit|

<h2 id="tocS_ConfirmitemfeedorderstatusRequest">ConfirmitemfeedorderstatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmitemfeedorderstatusrequest"></a>
<a id="schema_ConfirmitemfeedorderstatusRequest"></a>
<a id="tocSconfirmitemfeedorderstatusrequest"></a>
<a id="tocsconfirmitemfeedorderstatusrequest"></a>

```json
{
  "commitToken": "Marketplace##{\"Receipt\":\"+eXJYhj5rDqHa28+XUcfebDO4pve3TvMpPlW0ivc5STyE/40J6wxooXgBF8LZ9CdhZkFJnMYBVDwPwQtNEoZQrVtErDB2Yq2zs16QqsJuYxSrQtBfl9rMfmkO5orB9oDHSpvwL6DjDzcuJeQBBNxono/m4F6BloJEsk9BmuTmPaRI+7xsrN5Oeg8NPUoNSnsT983JPr1B+Y+TbbFjC1R8ZkvFHGVfti1QbhOwmYWTHPG08YMqla+Qwh7kUONLBXPqporF/CcqJo5YVTSu2uBcCuXkUo+OH9uUTn6hHkUROo=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"0dc05b6b-48a5-4f03-975a-a69fb6550aaa\",\"LastSendOverwrite\":null}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitToken|string|true|none|none|

<h2 id="tocS_ConnectorResponses">ConnectorResponses</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorresponses"></a>
<a id="schema_ConnectorResponses"></a>
<a id="tocSconnectorresponses"></a>
<a id="tocsconnectorresponses"></a>

```json
{
  "Message": null,
  "ReturnCode": null,
  "Tid": "101770752",
  "authId": "170852"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string \| null|true|none|Information about the connector's responses.|
|ReturnCode|string \| null|true|none|Connector return code.|
|Tid|string|true|none|Connector transaction ID.|
|authId|string|true|none|Connector authorization ID.|

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
{
  "BRL": {
    "Count": 84,
    "Facets": null,
    "Max": 21526180,
    "Mean": 262672.75,
    "Min": 1160,
    "Missing": 0,
    "StdDev": 2348087.3869179883,
    "Sum": 22064511,
    "SumOfSquares": 463417439039853
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BRL|[BRL](#schemabrl)|true|none|none|

<h2 id="tocS_CurrencyCode1">CurrencyCode1</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode1"></a>
<a id="schema_CurrencyCode1"></a>
<a id="tocScurrencycode1"></a>
<a id="tocscurrencycode1"></a>

```json
{
  "BRL": {
    "Count": 84,
    "Facets": null,
    "Max": 89,
    "Mean": 2.2261904761904763,
    "Min": 1,
    "Missing": 0,
    "StdDev": 9.660940100525016,
    "Sum": 187,
    "SumOfSquares": 8163
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BRL|[BRL1](#schemabrl1)|true|none|none|

<h2 id="tocS_CurrencyFormatInfo">CurrencyFormatInfo</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyformatinfo"></a>
<a id="schema_CurrencyFormatInfo"></a>
<a id="tocScurrencyformatinfo"></a>
<a id="tocscurrencyformatinfo"></a>

```json
{
  "CurrencyDecimalDigits": 2,
  "CurrencyDecimalSeparator": ",",
  "CurrencyGroupSeparator": ".",
  "CurrencyGroupSize": 3,
  "StartsWithCurrencySymbol": true
}
```

Object with currency format details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrencyDecimalDigits|integer(int32)|true|none|Quantity of currency decimal digits.|
|CurrencyDecimalSeparator|string|true|none|Defines what currency decimal separator will be applied.|
|CurrencyGroupSeparator|string|true|none|Defines what currency group separator will be applied.|
|CurrencyGroupSize|integer(int32)|true|none|Defines how many characters will be grouped.|
|StartsWithCurrencySymbol|boolean|true|none|Defines if all prices will be initiated with the currency symbol (`true`) or not (`false`).|

<h2 id="tocS_DeliveryId">DeliveryId</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryid"></a>
<a id="schema_DeliveryId"></a>
<a id="tocSdeliveryid"></a>
<a id="tocsdeliveryid"></a>

```json
{
  "accountCarrierName": "recorrenciaqa",
  "courierId": "197a56f",
  "courierName": "Todos os CEPS",
  "dockId": "1",
  "kitItemDetails": [],
  "quantity": 1,
  "warehouseId": "1_1"
}
```

Information about delivery IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCarrierName|string|true|none|Name of the account's [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).|
|courierId|string|true|none|[Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)'s ID.|
|courierName|string|true|none|Carrier's name.|
|dockId|string|true|none|ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).|
|kitItemDetails|[object]|true|none|Information about [kits](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28), if there are any.|
|quantity|integer(int32)|true|none|Quantity of items.|
|warehouseId|string|true|none|ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb).|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "cubicweight": 0.7031,
  "height": 15,
  "length": 15,
  "weight": 15,
  "width": 15
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cubicweight|number|true|none|Item's cubic weight.|
|height|integer(int32)|true|none|Item's height.|
|length|integer(int32)|true|none|Item's length.|
|weight|integer(int32)|true|none|Item's weight.|
|width|integer(int32)|true|none|Item's width.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "city": "Rio de Janeiro",
  "date": "2015-06-23",
  "description": "Coletado pela transportadora",
  "state": "RJ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|date|string|true|none|none|
|description|string|true|none|none|
|state|string|true|none|none|

<h2 id="tocS_ExportCompletedResponse">ExportCompletedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportcompletedresponse"></a>
<a id="schema_ExportCompletedResponse"></a>
<a id="tocSexportcompletedresponse"></a>
<a id="tocsexportcompletedresponse"></a>

```json
{
  "cancelled": false,
  "completedDate": "2017-05-10T18:31:35.5530698+00:00",
  "dateOfRequest": "2017-05-10T18:31:28.3984674+00:00",
  "email": "renan.servare@vtex.com.br",
  "filter": "generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300",
  "hostUri": "http://accountname.vtexcommercestable.com.br/",
  "id": "a83d6d30-a52a-4706-9fc9-e2e7c1841acb",
  "instanceId": "i-0b359c34e40c3f281",
  "lasUpdateTime": "2017-05-10T18:31:35.5250685+00:00",
  "linkToDownload": "http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A3AS4wJiFF97%2FpIGtq4rpqA2F7CqU0g%2BIhPPdD%2FaqnF9TKxX1%2BSj4JloO%2F54XdgL3VZyb%2B76Z0FrOZAYnGZvuE%2FMB4KUz1d4NKFOh0sFt%2FxzYFrBOLvMO%2F%2FW3LMG%2FuyiHecP9pYceVysntj41jJeRcLG%2BRBN4Z69TQBQrUp%2FOS%2FOaJFssVvF6olk5WjK9gYxBDpUUiOQvyAIdhmRKiMfhfOSdT%2FgrPG06YGJE18lm4kIThxH3aqE1k2pl3gVd250QRFzGrFRCPgylnlm5C9xEFf2Mr794Dc2I2ki5GCR8Vhxwgi3rlCvI4G8R1PIXcwG7YfFyzb%2BgKUYCsAcvUschtbpWm5ahXZsJG2FioeFIzHbd3xQ5I2yjV9lrKyUiQHjxsyX7Z0dd7YkKkclmOR85wrhgxHLLpOrM021lYNbm1K9a%2FfPjIOxhMt3a1dgkwNaIJmgxnY3n%2FDgNSJsDpYEpckx9tNqbcuCEJYLC54fmbOH%2B3Nip%2Fks3X%2FBmvzo2iB79Y5cucIEkl9wFeKr9kqw5t5u4ciFf%2F4opHnT85eHZm3POEYsD9XxcIHUrlYyLbMawaFwBgklp6oo7LDNyAU%3D&Signature=%2BFGUxl8zViIqttg5f5y%2F9tbAQhw%3D",
  "publishId": "263fd533551e445caceec991385ef610",
  "query": "{\"Queries\":[{\"Quoted\":true,\"FieldName\":\"InstanceId\",\"FieldValue\":\"263FD533551E445CACEEC991385EF610\"},{\"Quoted\":true,\"FieldName\":\"OrderIsComplete\",\"FieldValue\":\"True\"}],\"Oper\":\"AND\"}",
  "rowNumber": 8,
  "rowsProcessed": 8,
  "startDate": "2017-05-10T18:31:27.4043359+00:00",
  "utcTime": "-0300"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|boolean|true|none|If the export request was cancelled (`true`) or not (`false`).|
|completedDate|string|true|none|Order export process completed date.|
|dateOfRequest|string|true|none|Order export request date.|
|email|string|true|none|Order export requester email.|
|filter|string|true|none|Order export request filter.|
|hostUri|string|true|none|Host URL.|
|id|string|true|none|Order export request ID.|
|instanceId|string|true|none|Instance ID.|
|lasUpdateTime|string|true|none|Order export process update time.|
|linkToDownload|string|true|none|Link to order export download.|
|publishId|string|true|none|Order export publish ID.|
|query|string|true|none|Order export request filter query.|
|rowNumber|integer(int32)|true|none|Order export total rows.|
|rowsProcessed|integer(int32)|true|none|Order export total processed rows.|
|startDate|string|true|none|Order export process start date.|
|utcTime|string|true|none|UTC time.|

<h2 id="tocS_ExportInProgressResponse">ExportInProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportinprogressresponse"></a>
<a id="schema_ExportInProgressResponse"></a>
<a id="tocSexportinprogressresponse"></a>
<a id="tocsexportinprogressresponse"></a>

```json
{
  "cancelled": false,
  "completedDate": "2022-05-10T16:21:30.7714518+00:00",
  "dateOfRequest": "2017-05-10T16:21:31.7452567+00:00",
  "email": "renan.servare@vtex.com.br",
  "filter": "generateCsv=true&orderBy=creationDate%2cdesc&page=1&utc=-0300",
  "hostUri": "http://accountname.vtexcommercestable.com.br/",
  "id": "b7bdafba-2456-4aba-9bc0-1d598df685bd",
  "instanceId": "i-0a3b7a89f1fe13ba9",
  "lasUpdateTime": "2017-05-10T16:21:30.7714518+00:00",
  "linkToDownload": "http://accountname.vtexcommercestable.com.br/api/oms/pub/636300378883984674/report?AWSAccessKeyId=ASIAJM7A43QHIYFHFSMQ&Expires=1494527496&x-amz-security-token=FQoDYXdzEHsaDBnJIX7Yxf7j6gEuTCK3A",
  "publishId": "263fd533551e445caceec991385ef610",
  "query": "{\"Queries\":[{\"Quoted\":true,\"FieldName\":\"InstanceId\",\"FieldValue\":\"263FD533551E445CACEEC991385EF610\"},{\"Quoted\":true,\"FieldName\":\"OrderIsComplete\",\"FieldValue\":\"True\"}],\"Oper\":\"AND\"}",
  "rowNumber": 0,
  "rowsProcessed": 0,
  "startDate": "2017-05-10T16:21:30.7714518+00:00",
  "utcTime": "-0300"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|boolean|true|none|If the export request was cancelled (`true`) or not (`false`).|
|completedDate|string|true|none|Order export process completed date.|
|dateOfRequest|string|true|none|Order export request date.|
|email|string|true|none|Order export requester email.|
|filter|string|true|none|Order export request filter.|
|hostUri|string|true|none|Host URL.|
|id|string|true|none|Order export request ID.|
|instanceId|string|true|none|Instance ID.|
|lasUpdateTime|string|true|none|Order export process update time.|
|linkToDownload|string|true|none|Link to order export download.|
|publishId|string|true|none|Order export publish ID.|
|query|string|true|none|Order export request filter query.|
|rowNumber|integer(int32)|true|none|Order export total rows.|
|rowsProcessed|integer(int32)|true|none|Order export total processed rows.|
|startDate|string|true|none|Order export process start date.|
|utcTime|string|true|none|UTC time.|

<h2 id="tocS_Facets">Facets</h2>
<!-- backwards compatibility -->
<a id="schemafacets"></a>
<a id="schema_Facets"></a>
<a id="tocSfacets"></a>
<a id="tocsfacets"></a>

```json
{
  "currencyCode": {
    "BRL": {
      "Count": 84,
      "Facets": null,
      "Max": 21526180,
      "Mean": 262672.75,
      "Min": 1160,
      "Missing": 0,
      "StdDev": 2348087.3869179883,
      "Sum": 22064511,
      "SumOfSquares": 463417439039853
    }
  },
  "origin": {
    "Fulfillment": {
      "Count": 68,
      "Facets": null,
      "Max": 11150,
      "Mean": 1395.5882352941176,
      "Min": 1250,
      "Missing": 0,
      "StdDev": 1200.5513439298484,
      "Sum": 94900,
      "SumOfSquares": 229010000
    },
    "Marketplace": {
      "Count": 16,
      "Facets": null,
      "Max": 21526180,
      "Mean": 1373100.6875,
      "Min": 1160,
      "Missing": 0,
      "StdDev": 5374326.141087491,
      "Sum": 21969611,
      "SumOfSquares": 463417210029853
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|[CurrencyCode](#schemacurrencycode)|true|none|none|
|origin|[Origin](#schemaorigin)|true|none|none|

<h2 id="tocS_Facets1">Facets1</h2>
<!-- backwards compatibility -->
<a id="schemafacets1"></a>
<a id="schema_Facets1"></a>
<a id="tocSfacets1"></a>
<a id="tocsfacets1"></a>

```json
{
  "currencyCode": {
    "BRL": {
      "Count": 84,
      "Facets": null,
      "Max": 89,
      "Mean": 2.2261904761904763,
      "Min": 1,
      "Missing": 0,
      "StdDev": 9.660940100525016,
      "Sum": 187,
      "SumOfSquares": 8163
    }
  },
  "origin": {
    "Fulfillment": {
      "Count": 68,
      "Facets": null,
      "Max": 1,
      "Mean": 1,
      "Min": 1,
      "Missing": 0,
      "StdDev": 0,
      "Sum": 68,
      "SumOfSquares": 68
    },
    "Marketplace": {
      "Count": 16,
      "Facets": null,
      "Max": 89,
      "Mean": 7.4375,
      "Min": 1,
      "Missing": 0,
      "StdDev": 21.92401651157926,
      "Sum": 119,
      "SumOfSquares": 8095
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|[CurrencyCode1](#schemacurrencycode1)|true|none|none|
|origin|[Origin1](#schemaorigin1)|true|none|none|

<h2 id="tocS_FeedConfigurationRequest">FeedConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemafeedconfigurationrequest"></a>
<a id="schema_FeedConfigurationRequest"></a>
<a id="tocSfeedconfigurationrequest"></a>
<a id="tocsfeedconfigurationrequest"></a>

```json
{
  "filter": {
    "disableSingleFire": false,
    "expression": "string",
    "status": [
      "string"
    ],
    "type": "FromWorkflow"
  },
  "queue": {
    "MessageRetentionPeriodInSeconds": 3456000,
    "visibilityTimeoutInSeconds": 250
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[FeedFilter](#schemafeedfilter)|true|none|Object with type and status that will filter feed orders.|
|queue|[Queue](#schemaqueue)|true|none|Object with information about timeout and message retention.|

<h2 id="tocS_FeedFilter">FeedFilter</h2>
<!-- backwards compatibility -->
<a id="schemafeedfilter"></a>
<a id="schema_FeedFilter"></a>
<a id="tocSfeedfilter"></a>
<a id="tocsfeedfilter"></a>

```json
{
  "disableSingleFire": false,
  "expression": "string",
  "status": [
    "string"
  ],
  "type": "FromWorkflow"
}
```

Object with type and status that will filter feed orders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableSingleFire|boolean|false|none|Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.|
|expression|string|false|none|JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is set to `FromOrders`.|
|status|[string]|false|none|List of order statuses that should be included in the feed. This should only be used in case `type` is set to `FromWorkflow`. The status event will be removed, if it can't deliver a message more than 100 times, 4 days progressively. <br><br>**Status available to filter** <br><br>- order-created <br><br>- on-order-completed <br><br>- on-order-completed-ffm <br><br>- payment-pending <br><br>- waiting-for-order-authorization <br><br>- approve-payment <br><br>- payment-approved <br><br>- request-cancel <br><br>- waiting-for-seller-decision <br><br>- waiting-ffmt-authorization <br><br>- waiting-for-authorization <br><br>- waiting-for-manual-authorization <br><br>- authorize-fulfillment <br><br>- order-create-error <br><br>- order-creation-error <br><br>- window-to-cancel <br><br>- window-to-change-seller <br><br>- waiting-for-mkt-authorization <br><br>- waiting-seller-handling <br><br>- ready-for-handling <br><br>- start-handling <br><br>- handling <br><br>- invoice-after-cancellation-deny <br><br>- order-accepted <br><br>- invoice <br><br>- invoiced <br><br>- replaced <br><br>- cancellation-requested <br><br>- cancel <br><br>- canceled|
|type|string|true|none|Determines what orders appear in the feed and how they are filtered. There are two possible values:<br><br>-`FromWorkflow`: the feed will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field described below.<br><br>-`FromOrders`: the feed gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field described below.|

<h2 id="tocS_From">From</h2>
<!-- backwards compatibility -->
<a id="schemafrom"></a>
<a id="schema_From"></a>
<a id="tocSfrom"></a>
<a id="tocsfrom"></a>

```json
{
  "aliasMaskType": 0,
  "conversationRelatedTo": "1305371685465-01",
  "conversationSubject": "oms",
  "email": "noreply@store.com.br",
  "emailAlias": "noreply@vtexcommerce.com.br-9814872b.ct.store.com.br",
  "name": "no reply",
  "role": "null"
}
```

Conversation sender.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasMaskType|integer(int32)|true|none|Conversation tracker mask type.|
|conversationRelatedTo|string|true|none|Related order ID.|
|conversationSubject|string|true|none|Conversation subject.|
|email|string|true|none|Sender's email.|
|emailAlias|string|true|none|Sender transactional tracker email.|
|name|string|true|none|Sender's name.|
|role|string \| null|true|none|If it is a client or null, for transactional emails.|

<h2 id="tocS_Fulfillment">Fulfillment</h2>
<!-- backwards compatibility -->
<a id="schemafulfillment"></a>
<a id="schema_Fulfillment"></a>
<a id="tocSfulfillment"></a>
<a id="tocsfulfillment"></a>

```json
{
  "Count": 68,
  "Facets": null,
  "Max": 11150,
  "Mean": 1395.5882352941176,
  "Min": 1250,
  "Missing": 0,
  "StdDev": 1200.5513439298484,
  "Sum": 94900,
  "SumOfSquares": 229010000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_Fulfillment1">Fulfillment1</h2>
<!-- backwards compatibility -->
<a id="schemafulfillment1"></a>
<a id="schema_Fulfillment1"></a>
<a id="tocSfulfillment1"></a>
<a id="tocsfulfillment1"></a>

```json
{
  "Count": 68,
  "Facets": null,
  "Max": 1,
  "Mean": 1,
  "Min": 1,
  "Missing": 0,
  "StdDev": 0,
  "Sum": 68,
  "SumOfSquares": 68
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|integer(int32)|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|integer(int32)|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_GetConversation">GetConversation</h2>
<!-- backwards compatibility -->
<a id="schemagetconversation"></a>
<a id="schema_GetConversation"></a>
<a id="tocSgetconversation"></a>
<a id="tocsgetconversation"></a>

```json
{
  "attachmentNames": [
    "attachments439505"
  ],
  "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:v=\"urn:schemas-microsoft-com:vml\" style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;\"> <head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;\"> <tr style=\"box-sizing: border-box !important;\"> <td align=\"left\" valign=\"top\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table class=\"mv4-ns\" width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" bgcolor=\"#fff\"> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"center\"> <div style=\"box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;\"> <a href=\"http://.com.br\" style=\"box-sizing: border-box !important;\"> <img alt=\"\" border=\"0\" width=\"auto\" src=\"http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show\" style=\"vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;\"> </img></a> </div> <h1 style=\"margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;\">Seu pagamento foi aprovado.</h1> <div style=\"box-sizing: border-box; color: #777; margin-top: .5rem !important;\"> Referente ao Pedido <span style=\"font-weight: 700 !important;\">#1305371685465-01</span> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <div style=\"box-sizing: border-box; margin-top: 2rem !important;\"> <p style=\"box-sizing: border-box !important;\">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <h3 style=\"font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;\">Pagamento</h3>    <div style=\"box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;\"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <p style=\"box-sizing: border-box !important;\"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>",
  "date": "2023-01-23T09:23:31.0000000+00:00",
  "firstWords": "Your payment has been aproved and we are waiting for...",
  "from": {
    "aliasMaskType": 0,
    "conversationRelatedTo": "1305371685465-01",
    "conversationSubject": "oms",
    "email": "noreply@store.com.br",
    "emailAlias": "noreply@vtexcommerce.com.br-9814872b.ct.store.com.br",
    "name": "no reply",
    "role": "null"
  },
  "hasAttachment": false,
  "id": "2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3",
  "subject": "Your payment has been aproved.",
  "to": [
    {
      "aliasMaskType": 0,
      "conversationRelatedTo": "1305371685465-01",
      "conversationSubject": "oms",
      "email": "customer.name@email.com",
      "emailAlias": "64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br",
      "name": "Mary John",
      "role": "Customer"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentNames|[string]|true|none|List with attachments' names, if there are any.|
|body|string|true|none|Conversation content body.|
|date|string|true|none|Conversation date.|
|firstWords|string|true|none|First words of Conversation content.|
|from|[From](#schemafrom)|true|none|Conversation sender.|
|hasAttachment|boolean|true|none|When set as `true`, it means there are attachments, when set as `false`, there are not.|
|id|string|true|none|Conversation ID.|
|subject|string|true|none|Conversation content subject.|
|to|[[To](#schemato)]|true|none|Conversation receiver.|

<h2 id="tocS_GetOrder">GetOrder</h2>
<!-- backwards compatibility -->
<a id="schemagetorder"></a>
<a id="schema_GetOrder"></a>
<a id="tocSgetorder"></a>
<a id="tocsgetorder"></a>

```json
{
  "affiliateId": "",
  "allowCancellation": false,
  "allowEdition": false,
  "approvedBy": "Person's name",
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorData": null,
  "cancelReason": "Explanation for cancellation",
  "cancelledBy": "Person's name",
  "changesAttachment": {
    "changesData": [
      {
        "discountValue": 3290,
        "incrementValue": 0,
        "itemsAdded": [],
        "itemsRemoved": [
          {
            "id": "1234568358",
            "name": "Bay Max L",
            "price": 3290,
            "quantity": 1,
            "unitMultiplier": null
          }
        ],
        "reason": "Blah",
        "receipt": {
          "date": "2019-02-06T20:46:04.4003606+00:00",
          "orderId": "v5195004lux-01",
          "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
        }
      }
    ],
    "id": "changeAttachment"
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "11047867702",
    "documentType": "cpf",
    "email": "rodrigo.cunha@vtex.com.br",
    "firstName": "Rodrigo",
    "id": "clientProfileData",
    "isCorporate": false,
    "lastName": "VTEX",
    "phone": "+5521972321094",
    "stateInscription": null,
    "tradeName": null,
    "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93"
  },
  "commercialConditionData": null,
  "creationDate": "2019-01-28T20:09:43.899958+00:00",
  "customData": null,
  "emailTracked": "a27499cad31f42b7a771ae34f57c8358@ct.vtex.com.br",
  "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
  "giftRegistryData": null,
  "hostname": "luxstore",
  "invoiceData": null,
  "invoicedDate": null,
  "isCheckedIn": false,
  "isCompleted": true,
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000023",
        "brandName": "VTEX",
        "categoriesIds": "/1/",
        "commercialConditionId": "5",
        "dimension": {
          "cubicweight": 0.7031,
          "height": 15,
          "length": 15,
          "weight": 15,
          "width": 15
        },
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null,
        "productClusterId": "135,142"
      },
      "assemblies": [],
      "attachmentOfferings": [
        {
          "name": "vtex.subscription.weekly",
          "required": false,
          "schema": {
            "vtex.subscription.key.frequency": {
              "Domain": [
                " 1 week",
                " 2 week",
                " 3 week",
                " 4 week"
              ],
              "MaximumNumberOfCharacters": 7
            }
          }
        }
      ],
      "attachments": [],
      "bundleItems": [],
      "callCenterOperator": "callCenterOp5473869",
      "commission": 0,
      "components": [],
      "costPrice": 52,
      "detailUrl": "/bay-max-9429485/p",
      "ean": null,
      "freightCommission": 0,
      "id": "1234568358",
      "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
      "isGift": false,
      "itemAttachment": {
        "content": {},
        "name": null
      },
      "listPrice": 3290,
      "lockId": "00-v5195004lux-01",
      "manualPrice": null,
      "measurementUnit": "un",
      "name": "Bay Max L",
      "offerings": [],
      "params": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 3290,
      "priceDefinitions": {
        "calculatedSellingPrice": 99,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 99
          }
        ],
        "total": 99
      },
      "priceTags": [],
      "priceValidUntil": null,
      "productId": "9429485",
      "quantity": 1,
      "refId": "BIGHEROBML",
      "rewardValue": 0,
      "seller": "1",
      "sellerSku": "1234568358",
      "sellingPrice": 3290,
      "serialNumbers": "3",
      "shippingPrice": null,
      "tax": 0,
      "taxCode": null,
      "uniqueId": "87F0945396994B349158C7D9C9941442",
      "unitMultiplier": 1
    }
  ],
  "lastChange": "2019-02-06T20:46:11.7010747+00:00",
  "lastMessage": null,
  "marketingData": "marketing data",
  "marketplace": {
    "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
    "isCertified": null,
    "name": "luxstore"
  },
  "marketplaceItems": [],
  "marketplaceOrderId": "",
  "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
  "merchantName": null,
  "openTextField": null,
  "orderFormId": "caae7471333e403f959fa5fd66951340",
  "orderGroup": null,
  "orderId": "v5195004lux-01",
  "origin": "Marketplace",
  "packageAttachment": {
    "packages": []
  },
  "paymentData": {
    "transactions": [
      {
        "isActive": true,
        "merchantName": "luxstore",
        "payments": [
          {
            "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
            "bankIssuedInvoiceBarCodeType": "i25",
            "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
            "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
            "billingAddress": {},
            "cardHolder": null,
            "cardNumber": null,
            "connectorResponses": {
              "Message": "logMessage",
              "ReturnCode": "200",
              "Tid": "94857956",
              "authId": "857956"
            },
            "cvv2": null,
            "dueDate": "2019-02-02",
            "expireMonth": null,
            "expireYear": null,
            "firstDigits": null,
            "giftCardAsDiscount": false,
            "giftCardCaption": null,
            "giftCardId": null,
            "giftCardName": null,
            "giftCardProvider": "presentCard",
            "group": "bankInvoice",
            "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
            "installments": 1,
            "koinUrl": "koinURL",
            "lastDigits": null,
            "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "paymentSystem": "6",
            "paymentSystemName": "Boleto Bancário",
            "redemptionCode": null,
            "referenceValue": 4450,
            "tid": null,
            "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
            "value": 4450
          }
        ],
        "transactionId": "418213DE29634837A63DD693A937A696"
      }
    ]
  },
  "ratesAndBenefitsData": {
    "id": "ratesAndBenefitsData",
    "rateAndBenefitsIdentifiers": []
  },
  "roundingError": 0,
  "salesChannel": "1",
  "sellerOrderId": "00-v5195004lux-01",
  "sellers": [
    {
      "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName",
      "id": "1",
      "logo": "https://sellersLogo/images.png",
      "name": "Loja do Suporte"
    }
  ],
  "sequence": "502556",
  "shippingData": {
    "address": {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3",
      "country": "BRA",
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    },
    "id": "shippingData",
    "logisticsInfo": [
      {
        "addressId": "-1425945657910",
        "deliveryChannel": "delivery",
        "deliveryChannels": [
          {
            "id": "delivery",
            "stockBalance": 0
          },
          {
            "id": "pickup-in-point",
            "stockBalance": 0
          }
        ],
        "deliveryCompany": "Todos os CEPS",
        "deliveryIds": [
          {
            "accountCarrierName": "recorrenciaqa",
            "courierId": "197a56f",
            "courierName": "Todos os CEPS",
            "dockId": "1",
            "kitItemDetails": [],
            "quantity": 1,
            "warehouseId": "1_1"
          }
        ],
        "deliveryWindow": null,
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "itemIndex": 1,
        "listPrice": 1160,
        "lockTTL": "10d",
        "pickupPointId": "1_VTEX-RJ",
        "pickupStoreInfo": {
          "additionalInfo": null,
          "address": null,
          "dockId": null,
          "friendlyName": null,
          "isPickupStore": false
        },
        "polygonName": "region46",
        "price": 1160,
        "selectedSla": "Normal",
        "sellingPrice": 1160,
        "shippingEstimate": "5bd",
        "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
        "shipsTo": [
          "BRA"
        ],
        "slas": [
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Normal",
            "lockTTL": "12d",
            "name": "Normal",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region196",
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Expressa",
            "lockTTL": "12d",
            "name": "Expressa",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region196",
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Quebra Kit",
            "lockTTL": "12d",
            "name": "Quebra Kit",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region196",
            "price": 1392,
            "shippingEstimate": "2bd",
            "transitTime": "3d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Sob Encomenda",
            "lockTTL": "12d",
            "name": "Sob Encomenda",
            "pickupDistance": 0,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region196",
            "price": 1392,
            "shippingEstimate": "32bd",
            "transitTime": "3d"
          }
        ],
        "transitTime": "3d",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "-1425945657910",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "10",
        "country": "BRA",
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "geoCoordinates": [],
        "neighborhood": "Botafogo",
        "number": "518",
        "postalCode": "22250-040",
        "receiverName": "Rodrigo Cunha",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "trackingHints": null
  },
  "status": "handling",
  "statusDescription": "Preparando Entrega",
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "CurrencyDecimalDigits": 2,
      "CurrencyDecimalSeparator": ",",
      "CurrencyGroupSeparator": ".",
      "CurrencyGroupSize": 3,
      "StartsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "timeZone": "E. South America Standard Time"
  },
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 3290
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": 0
    },
    {
      "id": "Shipping",
      "name": "Total do Frete",
      "value": 1160
    },
    {
      "id": "Tax",
      "name": "Total da Taxa",
      "value": 0
    },
    {
      "id": "Change",
      "name": "Total das mudanças",
      "value": -3290
    }
  ],
  "value": 1160
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliateId|string|true|none|none|
|allowCancellation|boolean|true|none|none|
|allowEdition|boolean|true|none|none|
|approvedBy|string \| null|true|none|none|
|authorizedDate|string|true|none|none|
|callCenterOperatorData|string \| null|true|none|none|
|cancelReason|string \| null|true|none|Explanation for cancellation|
|cancelledBy|string \| null|true|none|User that canceled the order.|
|changesAttachment|[ChangesAttachment](#schemachangesattachment)|true|none|Information about changes in the order.|
|clientProfileData|[ClientProfileData](#schemaclientprofiledata)|true|none|Object with information on the client's profile.|
|commercialConditionData|string \| null|true|none|none|
|creationDate|string|true|none|none|
|customData|string \| null|true|none|none|
|emailTracked|string|true|none|none|
|followUpEmail|string|true|none|none|
|giftRegistryData|string \| null|true|none|none|
|hostname|string|true|none|none|
|invoiceData|object \| null|true|none|Information pertinent to the order's invoice.|
|invoicedDate|string \| null|true|none|none|
|isCheckedIn|boolean|true|none|none|
|isCompleted|boolean|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|lastChange|string|true|none|none|
|lastMessage|string \| null|true|none|none|
|marketingData|string \| null|true|none|none|
|marketplace|[Marketplace](#schemamarketplace)|true|none|Details about the marketplace related to the order.|
|marketplaceItems|[string]|true|none|none|
|marketplaceOrderId|string|true|none|none|
|marketplaceServicesEndpoint|string|true|none|none|
|merchantName|string \| null|true|none|none|
|openTextField|string \| null|true|none|This field must be filled in using the following format: <br>```<br>{<br>    "fieldExample": "ValueExample"<br>  }<br>```<br>|
|orderFormId|string|true|none|none|
|orderGroup|string \| null|true|none|none|
|orderId|string|true|none|none|
|origin|string|true|none|none|
|packageAttachment|[PackageAttachment](#schemapackageattachment)|true|none|Package object populated after order invoiced.|
|paymentData|[PaymentData](#schemapaymentdata)|true|none|Object with information about the payment.|
|ratesAndBenefitsData|[RatesAndBenefitsData](#schemaratesandbenefitsdata)|true|none|Information on promotions and taxes that apply to the order.|
|roundingError|integer(int32)|true|none|none|
|salesChannel|string|true|none|none|
|sellerOrderId|string|true|none|none|
|sellers|[[Seller](#schemaseller)]|true|none|none|
|sequence|string|true|none|none|
|shippingData|[ShippingData](#schemashippingdata)|true|none|Object containing shipping data.|
|status|string|true|none|none|
|statusDescription|string|true|none|**Deprecated.** `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.|
|storePreferencesData|[StorePreferencesData](#schemastorepreferencesdata)|true|none|Object with data from the store's configuration - stored in VTEX's License Manager.|
|totals|[[Total](#schematotal)]|true|none|none|
|value|integer(int32)|true|none|none|

<h2 id="tocS_GetPaymenttransaction">GetPaymenttransaction</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymenttransaction"></a>
<a id="schema_GetPaymenttransaction"></a>
<a id="tocSgetpaymenttransaction"></a>
<a id="tocsgetpaymenttransaction"></a>

```json
{
  "isActive": true,
  "merchantName": "LUXSTORE",
  "payments": [
    {
      "cardHolder": null,
      "cardNumber": null,
      "connectorResponses": {
        "Message": "logMessage",
        "ReturnCode": "200",
        "Tid": "101770752",
        "authId": "170852"
      },
      "cvv2": null,
      "dueDate": null,
      "expireMonth": null,
      "expireYear": null,
      "firstDigits": "412341",
      "giftCardCaption": null,
      "giftCardId": null,
      "giftCardName": null,
      "group": "creditCard",
      "id": "721CBE1090324D12ABE301FE33DE775A",
      "installments": 1,
      "lastDigits": "4123",
      "paymentSystem": "4",
      "paymentSystemName": "Mastercard",
      "redemptionCode": null,
      "referenceValue": 10150,
      "tid": "101770752",
      "url": null,
      "value": 10150
    }
  ],
  "status": "Finished",
  "transactionId": "CB452D77E7D04099A4DB0479087B1D2C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|true|none|If it is an active transaction (`true`) or not (`false`).|
|merchantName|string|true|none|Transaction merchant's name.|
|payments|[[Payment1](#schemapayment1)]|true|none|Payments' details object.|
|status|string|true|none|Transaction status.|
|transactionId|string|true|none|Transaction ID.|

<h2 id="tocS_Getfeedorderstatus">Getfeedorderstatus</h2>
<!-- backwards compatibility -->
<a id="schemagetfeedorderstatus"></a>
<a id="schema_Getfeedorderstatus"></a>
<a id="tocSgetfeedorderstatus"></a>
<a id="tocsgetfeedorderstatus"></a>

```json
{
  "currentChange": "2019-08-12T20:54:23.7153839Z",
  "domain": "Fulfillment",
  "eventId": "ED423DDED4C1AE580CADAC1A4D02DA3F",
  "handle": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidnRleGFwcGtleS1wYXJ0bmVyc2xhdGFtLVJNQkpNUyIsIkFwcEtleSI6InZ0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMiLCJBY2NvdW50IjoicGFydG5lcnNsYXRhbSIsIkhhbmRsZSI6IkFRRUIzbmtWR0piOXhhNGRjYlpkOTFVVWMyL2JObHc0Qnp3ZlNLV201Rjg2QXgrSGlRM053bEJkb2NwM2wvVytLdjFNQTZ4d3ZLcFYwYjlSeUttNVRpb3hrSVFMSG1Uck9xenB2aFlwU29uMzRrVmlNaWZHY2lnZFFqalBJdk00eWU4amVuaS9QKytaTmVxOFZWeFNGay81Yzg3YS84MTRjTFg2WGZPR2x2WitlTnVjTzA3S3UxK0xXaU5vQmJEY0cycGxKekxkRks3Qld3b1NTV3BmSWhrOGhmSFNkSzlzZVpJeG01QXFLbHFrUHNDNGk5emVaYVpBUVVrSi9aZWo3UjRrRDVRaXFjNmpjcnFheEdHc1lsNHMzUWM0ZmtWdmhYblJVQ2l2ZGdpMEtUYS8zcXlWWU9QTktIV2huTlZxMEZHNDNjME4vaWh6dDc0d1laNVl6aDFJRitHU2t1YTkrN1pCdnQ2VGs1cFRhZmVVclk0ckNPL2Fobnl1eXFLOG53ZkorVWxUTmt2ZVNFS29FdTNiUWQzSmc5R1lYWHlXOVVxRGo5dHJIZ1N5M3ZZa0dBWjd0MDZNZWUwQnBsdFBxWExaIiwiT3JkZXJJZCI6Ijk1MzcxMjAwNDEyNi0wMSIsIk1lc3NhZ2VJZCI6ImI5YjI4NDkwLTNjNzAtNDdjNi1hMTE3LWNhN2FjMTk2MDY1OSIsIkRvbWFpbiI6IkZ1bGZpbGxtZW50IiwiU3RhdGUiOiJyZWFkeS1mb3ItaGFuZGxpbmciLCJMYXN0U3RhdGUiOiJ3aW5kb3ctdG8tY2FuY2VsIiwiTGFzdENoYW5nZSI6IjA4LzEyLzIwMTkgMjA6NTQ6MDEiLCJDdXJyZW50Q2hhbmdlIjoiMDgvMTIvMjAxOSAyMDo1NDoyMyIsIkNyZWF0ZWRBdCI6IjA4LzEyLzIwMTkgMjE6MDE6MzAiLCJpc3MiOiJicm9hZGNhc3QtYXBpLnZ0ZXhjb21tZXJjZS5jb20uYnIiLCJhdWQiOiJwYXJ0bmVyc2xhdGFtX3Z0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMifQ.7RQBZQb6pHhFhA_jMKTiSoJbDck7awgD3Xx7sdJcW6w",
  "lastChange": "2019-08-12T20:54:01.134057Z",
  "lastState": "window-to-cancel",
  "orderId": "953712004126-01",
  "state": "ready-for-handling"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentChange|string|true|none|none|
|domain|string|true|none|none|
|eventId|string|true|none|none|
|handle|string|true|none|none|
|lastChange|string|true|none|none|
|lastState|string|true|none|none|
|orderId|string|true|none|none|
|state|string|true|none|none|

<h2 id="tocS_Headers">Headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_Headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
{
  "key": "value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|

<h2 id="tocS_Hook">Hook</h2>
<!-- backwards compatibility -->
<a id="schemahook"></a>
<a id="schema_Hook"></a>
<a id="tocShook"></a>
<a id="tocshook"></a>

```json
{
  "headers": {
    "key": "value"
  },
  "url": "https://endpoint.example/path"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|[Headers](#schemaheaders)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_HookConfiguration">HookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahookconfiguration"></a>
<a id="schema_HookConfiguration"></a>
<a id="tocShookconfiguration"></a>
<a id="tocshookconfiguration"></a>

```json
{
  "CurrentChange": "2019-08-14T17:12:48.0965893Z",
  "Domain": "Fulfillment",
  "LastChange": "2019-08-14T17:11:39.2550122Z",
  "LastState": "window-to-cancel",
  "OrderId": "v52277740atmc-01",
  "Origin": {
    "Account": "automacaoqa",
    "Key": "vtexappkey-appvtex"
  },
  "State": "ready-for-handling"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentChange|string|true|none|none|
|Domain|string|true|none|none|
|LastChange|string|true|none|none|
|LastState|string|true|none|none|
|OrderId|string|true|none|none|
|Origin|[Origin2](#schemaorigin2)|true|none|none|
|State|string|true|none|none|

<h2 id="tocS_HookConfigurationRequest">HookConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemahookconfigurationrequest"></a>
<a id="schema_HookConfigurationRequest"></a>
<a id="tocShookconfigurationrequest"></a>
<a id="tocshookconfigurationrequest"></a>

```json
{
  "filter": {
    "status": [
      "order-completed",
      "handling",
      "ready-for-handling",
      "waiting-ffmt-authorization",
      "cancel"
    ],
    "type": "FromWorkflow"
  },
  "hook": {
    "headers": {
      "key": "value"
    },
    "url": "https://endpoint.example/path"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[HookFilter](#schemahookfilter)|true|none|none|
|hook|[Hook](#schemahook)|true|none|none|

<h2 id="tocS_HookFilter">HookFilter</h2>
<!-- backwards compatibility -->
<a id="schemahookfilter"></a>
<a id="schema_HookFilter"></a>
<a id="tocShookfilter"></a>
<a id="tocshookfilter"></a>

```json
{
  "disableSingleFire": false,
  "expression": "string",
  "status": [
    "string"
  ],
  "type": "FromWorkflow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableSingleFire|boolean|false|none|Sets a limit to how many times a specific order shows on the hook, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the hook only once. Send this field if you want to filter `FromOrders`.|
|expression|string|false|none|JSONata query expression that defines what conditions must be met for an order to be included in the hook. This should only be used in case `type` is `FromOrders`.|
|status|[string]|false|none|List of order statuses that should be included in the hook. This should only be used in case `type` is `FromWorkflow`.|
|type|string|true|none|Determines what orders appear in the hook and how they are filtered. As shown in the examples above, there are two ways:<br><br> - `FromWorkflow`: the hook will receive order updates only when there is a change or update in the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). You must send at least one value for the `status` field to determine by which status the orders will be filtered.<br><br> - `FromOrders`: the hook will receive order updates when there is a change in the order. In this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field. You must send the request with values for the `expression` and `disableSingleFire` fields.|

<h2 id="tocS_InvoiceNotificationRequest">InvoiceNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvoicenotificationrequest"></a>
<a id="schema_InvoiceNotificationRequest"></a>
<a id="tocSinvoicenotificationrequest"></a>
<a id="tocsinvoicenotificationrequest"></a>

```json
{
  "courier": null,
  "dispatchedDate": "2019-01-31T18:25:43-05:00",
  "invoiceKey": null,
  "invoiceNumber": "9999",
  "invoiceUrl": null,
  "invoiceValue": "10000",
  "issuanceDate": "2019-01-302019-01-31T18:25:43-05:00",
  "items": [
    {
      "id": "1234",
      "price": 10000,
      "quantity": 1
    }
  ],
  "trackingNumber": null,
  "trackingUrl": null,
  "type": "Output"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courier|string \| null|false|none|The name of the carrier responsible for delivering the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|dispatchedDate|string \| null|false|none|Order dispatch date. May be `null`.|
|embeddedInvoice|string \| null|false|none|XML text of the invoice, not the URL. This field is very important for external marketplace integrations such as Mercado Libre.|
|invoiceKey|string \| null|false|none|none|
|invoiceNumber|string \| null|true|none|Number that identifies the invoice.|
|invoiceUrl|string \| null|false|none|URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.|
|invoiceValue|string|true|none|Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|issuanceDate|string|true|none|Issuance date of the invoice. You must add date and time in this field.|
|items|[[Item1](#schemaitem1)]|true|none|Array containing the SKUs that are being invoiced.|
|trackingNumber|string \| null|false|none|The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|trackingUrl|string \| null|false|none|The URL used to track the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*|
|type|string|true|none|The type of invoice. There are two possible values: **Output** and **Input**. The Output type should be used when the invoice you are sending is a selling invoice. The Input type should be used when you send a return invoice.|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "additionalInfo": {
    "brandId": "2000023",
    "brandName": "VTEX",
    "categoriesIds": "/1/",
    "commercialConditionId": "5",
    "dimension": {
      "cubicweight": 0.7031,
      "height": 15,
      "length": 15,
      "weight": 15,
      "width": 15
    },
    "offeringInfo": null,
    "offeringType": null,
    "offeringTypeId": null,
    "productClusterId": "135,142"
  },
  "assemblies": [],
  "attachmentOfferings": [
    {
      "name": "vtex.subscription.weekly",
      "required": false,
      "schema": {
        "vtex.subscription.key.frequency": {
          "Domain": [
            " 1 week",
            " 2 week",
            " 3 week",
            " 4 week"
          ],
          "MaximumNumberOfCharacters": 7
        }
      }
    },
    {
      "name": "vtex.subscription.daily",
      "required": false,
      "schema": {
        "vtex.subscription.key.frequency": {
          "Domain": [
            "1 day"
          ],
          "MaximumNumberOfCharacters": 5
        }
      }
    }
  ],
  "attachments": [],
  "bundleItems": [],
  "callCenterOperator": "callCenterOp5473869",
  "commission": 0,
  "components": [],
  "costPrice": 52,
  "detailUrl": "/bay-max-9429485/p",
  "ean": null,
  "freightCommission": 0,
  "id": "1234568358",
  "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
  "isGift": false,
  "itemAttachment": {
    "content": {},
    "name": null
  },
  "listPrice": 3290,
  "lockId": "00-v5195004lux-01",
  "manualPrice": null,
  "measurementUnit": "un",
  "name": "Bay Max L",
  "offerings": [],
  "params": [],
  "parentAssemblyBinding": null,
  "parentItemIndex": null,
  "preSaleDate": null,
  "price": 3290,
  "priceDefinitions": {
    "calculatedSellingPrice": 99,
    "sellingPrices": [
      {
        "quantity": 1,
        "value": 99
      }
    ],
    "total": 99
  },
  "priceTags": [],
  "priceValidUntil": null,
  "productId": "9429485",
  "quantity": 1,
  "refId": "BIGHEROBML",
  "rewardValue": 0,
  "seller": "1",
  "sellerSku": "1234568358",
  "sellingPrice": 3290,
  "serialNumbers": "3",
  "shippingPrice": null,
  "tax": 0,
  "taxCode": null,
  "uniqueId": "87F0945396994B349158C7D9C9941442",
  "unitMultiplier": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|[AdditionalInfo](#schemaadditionalinfo)|true|none|Additional information about the item.|
|assemblies|[object]|true|none|Retrieves information about orders item's customizations.|
|attachmentOfferings|[object]|true|none|List of attachments details.|
|attachments|[string]|true|none|Array containing information on attachments.|
|bundleItems|[string]|true|none|Information on services sold along with the item's SKU. For example, a gift package.|
|callCenterOperator|string \| null|true|none|Call center operator responsible for the order.|
|commission|integer(int32)|true|none|Commission value registered for the seller.|
|components|[string]|true|none|Item's components.|
|costPrice|integer|true|none|Item's cost price.|
|detailUrl|string|true|none|URL slug of the item.|
|ean|string \| null|true|none|EAN of the SKU.|
|freightCommission|integer(int32)|true|none|Value of the freight commission.|
|id|string|true|none|Item's SKU ID, which is a unique numerical identifier.|
|imageUrl|string|true|none|Item's SKU image URL.|
|isGift|boolean|true|none|This field is `true` when the item is a gift in order context and `false` when it is not.|
|itemAttachment|[ItemAttachment](#schemaitemattachment)|true|none|Information about attachments, if it applies.|
|listPrice|integer(int32)|true|none|Item's list price.|
|lockId|string|true|none|Reservation ID.|
|manualPrice|string \| null|true|none|Item's manual price.|
|measurementUnit|string|true|none|Item's measurement unit.|
|name|string|true|none|Item's name.|
|offerings|[string]|true|none|Item's offerings, which are services related to the item. For example, guarantee or installation.|
|params|[string]|true|none|Information about params.|
|parentAssemblyBinding|string \| null|true|none|Parent assembly binding.|
|parentItemIndex|string \| null|true|none|Parent item index.|
|preSaleDate|string \| null|true|none|Item's pre sale date.|
|price|integer(int32)|true|none|Item's price.|
|priceDefinitions|object|true|none|Item's price information.|
|priceTags|[string]|true|none|List of objects with item's price modifiers.|
|priceValidUntil|string \| null|true|none|Date until when the price is going to be valid if there is a promotion.|
|productId|string|true|none|ID of the Product associated with the item.|
|quantity|integer(int32)|true|none|Quantity of items.|
|refId|string|true|none|Product referencial code associated with the item.|
|rewardValue|integer(int32)|true|none|Item's reward value.|
|seller|string|true|none|Seller related to the order.|
|sellerSku|string|true|none|SKU ID from the seller perspective.|
|sellingPrice|integer(int32)|true|none|Item's selling price.|
|serialNumbers|string \| null|true|none|**Deprecated.** This field identifies the order in the `handling` status in the workflow, and it was used for VTEX internal control.|
|shippingPrice|string \| null|true|none|Item's shipping price.|
|tax|integer(int32)|true|none|Item's tax.|
|taxCode|string \| null|true|none| Item's tax code.|
|uniqueId|string|true|none|Unique ID is an alphanumeric sequence that identifies an SKU in a given order.|
|unitMultiplier|integer(int32)|true|none|Item's unit multiplier.|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "description": "335",
  "id": "1234",
  "price": 10000,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|You can use this field for additional information about the SKU being invoiced.|
|id|string|true|none|ID of the SKU being invoiced.|
|price|integer(int32)|true|none|Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|quantity|integer(int32)|true|none|Quantity currently in inventory of the SKU being invoiced.|

<h2 id="tocS_Item2">Item2</h2>
<!-- backwards compatibility -->
<a id="schemaitem2"></a>
<a id="schema_Item2"></a>
<a id="tocSitem2"></a>
<a id="tocsitem2"></a>

```json
{
  "description": "Mangueira Reservatório Ao Cavalete",
  "ean": null,
  "id": "195",
  "price": 7390,
  "productId": "134",
  "quantity": 1,
  "refId": "TE3121110",
  "seller": "1",
  "sellingPrice": 7390
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Description of items.|
|ean|string \| null|true|none|EAN of the SKU.|
|id|string|true|none|Item's SKU ID, which is a unique numerical identifier.|
|price|integer(int32)|true|none|Item's price.|
|productId|string|true|none|ID of the Product associated with the item.|
|quantity|integer(int32)|true|none|Quantity of SKUs.|
|refId|string \| null|true|none|Item's reference ID.|
|seller|string|true|none|Seller related to the order.|
|sellingPrice|integer(int32)|true|none|Details on item's selling price.|

<h2 id="tocS_ItemAttachment">ItemAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaitemattachment"></a>
<a id="schema_ItemAttachment"></a>
<a id="tocSitemattachment"></a>
<a id="tocsitemattachment"></a>

```json
{
  "content": {},
  "name": null
}
```

Information about attachments, if it applies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|Attachment's custom field for content.|
|name|string \| null|true|none|Attachment's name.|

<h2 id="tocS_ItemsRemoved">ItemsRemoved</h2>
<!-- backwards compatibility -->
<a id="schemaitemsremoved"></a>
<a id="schema_ItemsRemoved"></a>
<a id="tocSitemsremoved"></a>
<a id="tocsitemsremoved"></a>

```json
{
  "id": "1234568358",
  "name": "Bay Max L",
  "price": 3290,
  "quantity": 1,
  "unitMultiplier": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|SKU ID of the item removed from the order.|
|name|string|true|none|Name of the item removed from the order.|
|price|integer(int32)|true|none|Total amount of items removed from the order.|
|quantity|integer(int32)|true|none|Quantity of items removed from the order.|
|unitMultiplier|string \| null|true|none|Unit multiplier of the item removed from the order.|

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "ShippingEstimatedDate": null,
  "ShippingEstimatedDateMax": null,
  "ShippingEstimatedDateMin": null,
  "affiliateId": "",
  "authorizedDate": "2019-02-07T21:29:54+00:00",
  "callCenterOperatorName": null,
  "clientName": "J C",
  "creationDate": "2019-02-04T10:29:11+00:00",
  "currencyCode": "BRL",
  "items": null,
  "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
  "listId": null,
  "listType": null,
  "marketPlaceOrderId": null,
  "orderId": "v502559llux-01",
  "orderIsComplete": true,
  "origin": "Marketplace",
  "paymentNames": "Boleto Bancário",
  "salesChannel": "1",
  "sequence": "502559",
  "status": "invoiced",
  "statusDescription": "Faturado",
  "totalItems": 1,
  "totalValue": 7453,
  "workflowInErrorState": false,
  "workflowInRetry": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShippingEstimatedDate|string \| null|true|none|none|
|ShippingEstimatedDateMax|string \| null|true|none|none|
|ShippingEstimatedDateMin|string \| null|true|none|none|
|affiliateId|string|true|none|none|
|authorizedDate|string \| null|true|none|none|
|callCenterOperatorName|string \| null|true|none|none|
|clientName|string|true|none|none|
|creationDate|string|true|none|none|
|currencyCode|string|true|none|none|
|items|string \| null|true|none|none|
|lastMessageUnread|string \| null|true|none|none|
|listId|string \| null|true|none|none|
|listType|string \| null|true|none|none|
|marketPlaceOrderId|string \| null|true|none|none|
|orderId|string|true|none|none|
|orderIsComplete|boolean|true|none|none|
|origin|string|true|none|none|
|paymentNames|string|true|none|none|
|salesChannel|string|true|none|none|
|sequence|string|true|none|none|
|status|string|true|none|none|
|statusDescription|string|true|none|`Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.|
|totalItems|integer(int32)|true|none|none|
|totalValue|integer(int32)|true|none|none|
|workflowInErrorState|boolean|true|none|none|
|workflowInRetry|boolean|true|none|none|

<h2 id="tocS_List1">List1</h2>
<!-- backwards compatibility -->
<a id="schemalist1"></a>
<a id="schema_List1"></a>
<a id="tocSlist1"></a>
<a id="tocslist1"></a>

```json
{
  "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
  "ShippingEstimatedDateMax": null,
  "ShippingEstimatedDateMin": null,
  "affiliateId": "GTB",
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorName": null,
  "clientName": "Cunha VTEX",
  "creationDate": "2019-01-28T20:09:43+00:00",
  "currencyCode": "BRL",
  "items": [
    {
      "description": "Reservoir hose",
      "ean": null,
      "id": "195",
      "price": 7390,
      "productId": "134",
      "quantity": 1,
      "refId": "TE3121110",
      "seller": "1",
      "sellingPrice": 7390
    },
    {
      "description": "Reservoir filter",
      "ean": null,
      "id": "238",
      "price": 5190,
      "productId": "162",
      "quantity": 1,
      "refId": "XC459N610CA",
      "seller": "1",
      "sellingPrice": 5190
    }
  ],
  "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
  "listId": null,
  "listType": null,
  "marketPlaceOrderId": null,
  "orderId": "1172452900788-01",
  "orderIsComplete": true,
  "origin": "Marketplace",
  "paymentNames": "Boleto Bancário",
  "salesChannel": "1",
  "sequence": "502556",
  "status": "handling",
  "statusDescription": "Preparing for delivery",
  "totalItems": 1,
  "totalValue": 1160,
  "workflowInErrorState": false,
  "workflowInRetry": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShippingEstimatedDate|string \| null|true|none|Estimate shipping date.|
|ShippingEstimatedDateMax|string \| null|true|none|The most extended shipping estimation possible.|
|ShippingEstimatedDateMin|string \| null|true|none|The least extended shipping estimation possible.|
|affiliateId|string|true|none|Corresponds to the three-digits [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.|
|authorizedDate|string \| null|true|none|Authorized order date.|
|callCenterOperatorName|string \| null|true|none|Call center operator responsible for the order.|
|clientName|string|true|none|Order's customer name.|
|creationDate|string|true|none|Order's creation date.|
|currencyCode|string \| null|true|none|Currency code in ISO 4217. For example, `BRL`.|
|items|[[Item2](#schemaitem2)]|true|none|**Deprecated.** Information about order's items|
|lastMessageUnread|string \| null|true|none|Last sent transactional message.|
|listId|string \| null|true|none|Related Gift List ID.|
|listType|string \| null|true|none|Related Gift list type.|
|marketPlaceOrderId|string \| null|true|none|Marketplace order ID.|
|orderId|string|true|none|Order ID is a unique code that identifies an order.|
|orderIsComplete|boolean|true|none|If it is a completed order (`true`) or not (`false`). For more information, see [Order flow and status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).|
|origin|string|true|none|Order Origin, if `Marketplace` or `Fulfillment`.|
|paymentNames|string \| null|true|none|Payment system name.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.|
|sequence|string|true|none|Six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.|
|status|string|true|none|Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).|
|statusDescription|string|true|none|**Deprecated.** Status description which is displayed on the Admin panel. This field is deprecated and may not return any value.|
|totalItems|integer(int32)|true|none|Order's total amount of items.|
|totalValue|integer(int32)|true|none|Total value amount.|
|workflowInErrorState|boolean|true|none|If there is a work flow error (`true`) or not (`false`).|
|workflowInRetry|boolean|true|none|If the order is in a work flow retry (`true`) or not (`false`).|

<h2 id="tocS_ListOrders">ListOrders</h2>
<!-- backwards compatibility -->
<a id="schemalistorders"></a>
<a id="schema_ListOrders"></a>
<a id="tocSlistorders"></a>
<a id="tocslistorders"></a>

```json
{
  "facets": [],
  "list": [
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-02-07T21:29:54+00:00",
      "callCenterOperatorName": null,
      "clientName": "J C",
      "creationDate": "2019-02-04T10:29:11+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502559llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502559",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 1,
      "totalValue": 7453,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-28T20:33:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "Rodrigo VTEX",
      "creationDate": "2019-01-28T20:09:43+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502556llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502556",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 1,
      "totalValue": 1160,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-31T12:36:30+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-24T12:36:01+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-24T12:35:19+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502553llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502554",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-30T16:40:55+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-23T16:40:27+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-23T16:39:45+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502550llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502551",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2019-01-30T16:35:30+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-23T16:35:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2019-01-23T16:34:20+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502547llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502548",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 10150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2018-12-28T18:15:28+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502544llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502544",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 8990,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Douglas Rodrigues",
      "creationDate": "2018-12-18T18:48:17+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502541llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502541",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 3290,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-12-19T18:22:26+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2018-12-12T18:22:22+00:00",
      "callCenterOperatorName": null,
      "clientName": "test test",
      "creationDate": "2018-12-12T18:21:47+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502538llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Mastercard",
      "salesChannel": "1",
      "sequence": "502538",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 8990,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:34:42+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:34:01+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": "cancelamento teste shp ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880102018018-01",
      "orderId": "SCP-880102018018-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502537",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:29:22+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:28:35+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880091692043-01",
      "orderId": "SCP-880091692043-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502536",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:18:44+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:18:00+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": "Teste de cancelamento do ShopFácil ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880091058221-01",
      "orderId": "SCP-880091058221-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502535",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-12-07T17:11:39+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-30T17:11:42+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:10:59+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880090643370-01",
      "orderId": "SCP-880090643370-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502534",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-30T17:10:45+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "880090622238-01",
      "orderId": "SCP-880090622238-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502533",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "MNC",
      "authorizedDate": "2018-11-20T21:13:06+00:00",
      "callCenterOperatorName": null,
      "clientName": "Carlos VTEX",
      "creationDate": "2018-11-20T21:09:01+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "877730530419-01",
      "orderId": "MNC-877730530419-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502532",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 1,
      "totalValue": 11150,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2018-11-23T16:58:48+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "SCP",
      "authorizedDate": "2018-11-16T16:58:53+00:00",
      "callCenterOperatorName": null,
      "clientName": "roberta grecco",
      "creationDate": "2018-11-16T16:58:18+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "876733475998-01",
      "orderId": "SCP-876733475998-01",
      "orderIsComplete": true,
      "origin": "Fulfillment",
      "paymentNames": "",
      "salesChannel": "1",
      "sequence": "502531",
      "status": "ready-for-handling",
      "statusDescription": "Pronto para o manuseio",
      "totalItems": 1,
      "totalValue": 1250,
      "workflowInErrorState": false,
      "workflowInRetry": false
    }
  ],
  "paging": {
    "currentPage": 1,
    "pages": 6,
    "perPage": 15,
    "total": 84
  },
  "stats": {
    "stats": {
      "totalItems": {
        "Count": 84,
        "Facets": {
          "currencyCode": {
            "BRL": {
              "Count": 84,
              "Facets": null,
              "Max": 89,
              "Mean": 2.2261904761904763,
              "Min": 1,
              "Missing": 0,
              "StdDev": 9.660940100525016,
              "Sum": 187,
              "SumOfSquares": 8163
            }
          },
          "origin": {
            "Fulfillment": {
              "Count": 68,
              "Facets": null,
              "Max": 1,
              "Mean": 1,
              "Min": 1,
              "Missing": 0,
              "StdDev": 0,
              "Sum": 68,
              "SumOfSquares": 68
            },
            "Marketplace": {
              "Count": 16,
              "Facets": null,
              "Max": 89,
              "Mean": 7.4375,
              "Min": 1,
              "Missing": 0,
              "StdDev": 21.92401651157926,
              "Sum": 119,
              "SumOfSquares": 8095
            }
          }
        },
        "Max": 89,
        "Mean": 2.2261904761904763,
        "Min": 1,
        "Missing": 0,
        "StdDev": 9.660940100525016,
        "Sum": 187,
        "SumOfSquares": 8163
      },
      "totalValue": {
        "Count": 84,
        "Facets": {
          "currencyCode": {
            "BRL": {
              "Count": 84,
              "Facets": null,
              "Max": 21526180,
              "Mean": 262672.75,
              "Min": 1160,
              "Missing": 0,
              "StdDev": 2348087.3869179883,
              "Sum": 22064511,
              "SumOfSquares": 463417439039853
            }
          },
          "origin": {
            "Fulfillment": {
              "Count": 68,
              "Facets": null,
              "Max": 11150,
              "Mean": 1395.5882352941176,
              "Min": 1250,
              "Missing": 0,
              "StdDev": 1200.5513439298484,
              "Sum": 94900,
              "SumOfSquares": 229010000
            },
            "Marketplace": {
              "Count": 16,
              "Facets": null,
              "Max": 21526180,
              "Mean": 1373100.6875,
              "Min": 1160,
              "Missing": 0,
              "StdDev": 5374326.141087491,
              "Sum": 21969611,
              "SumOfSquares": 463417210029853
            }
          }
        },
        "Max": 21526180,
        "Mean": 262672.75,
        "Min": 1160,
        "Missing": 0,
        "StdDev": 2348087.3869179883,
        "Sum": 22064511,
        "SumOfSquares": 463417439039853
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[string]|true|none|none|
|list|[[List](#schemalist)]|true|none|none|
|paging|[Paging](#schemapaging)|true|none|none|
|stats|[Stats](#schemastats)|true|none|none|

<h2 id="tocS_LogisticsInfo">LogisticsInfo</h2>
<!-- backwards compatibility -->
<a id="schemalogisticsinfo"></a>
<a id="schema_LogisticsInfo"></a>
<a id="tocSlogisticsinfo"></a>
<a id="tocslogisticsinfo"></a>

```json
{
  "addressId": "-1425945657910",
  "deliveryChannel": "delivery",
  "deliveryChannels": [
    {
      "id": "delivery",
      "stockBalance": 0
    }
  ],
  "deliveryCompany": "Todos os CEPS",
  "deliveryIds": [
    {
      "accountCarrierName": "recorrenciaqa",
      "courierId": "197a56f",
      "courierName": "Todos os CEPS",
      "dockId": "1",
      "kitItemDetails": [],
      "quantity": 1,
      "warehouseId": "1_1"
    }
  ],
  "deliveryWindow": null,
  "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
  "itemIndex": 0,
  "listPrice": 1160,
  "lockTTL": "10d",
  "pickupPointId": "1_VTEX-RJ",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": null,
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false
  },
  "polygonName": null,
  "price": 1160,
  "selectedSla": "Normal",
  "sellingPrice": 1160,
  "shippingEstimate": "5bd",
  "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
  "shipsTo": [
    "BRA"
  ],
  "slas": [
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Normal",
      "lockTTL": "12d",
      "name": "Normal",
      "pickupDistance": 0,
      "pickupPointId": "1_VTEX-RJ",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": "region196",
      "price": 1160,
      "shippingEstimate": "5bd",
      "transitTime": "3d"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Expressa",
      "lockTTL": "12d",
      "name": "Expressa",
      "pickupDistance": 0,
      "pickupPointId": "1_VTEX-RJ",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": "region196",
      "price": 1160,
      "shippingEstimate": "5bd",
      "transitTime": "3d"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Quebra Kit",
      "lockTTL": "12d",
      "name": "Quebra Kit",
      "pickupDistance": 0,
      "pickupPointId": "1_VTEX-RJ",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": "region196",
      "price": 1392,
      "shippingEstimate": "2bd",
      "transitTime": "3d"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Sob Encomenda",
      "lockTTL": "12d",
      "name": "Sob Encomenda",
      "pickupDistance": 0,
      "pickupPointId": "1_VTEX-RJ",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": "region196",
      "price": 1392,
      "shippingEstimate": "32bd",
      "transitTime": "3d"
    }
  ],
  "transitTime": "3d",
  "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Address ID.|
|deliveryChannel|string|true|none|If the delivery channel is `delivery` or `pickup-in-point`.|
|deliveryChannels|[object]|true|none|List of delivery channels associated with the trade policy.|
|deliveryCompany|string|true|none|[Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) company's name.|
|deliveryIds|[[DeliveryId](#schemadeliveryid)]|true|none|Information about delivery IDs.|
|deliveryWindow|string \| null|true|none|[Scheduled delivery](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) window information, if it applies to the item.|
|entityId|string|true|none|Shipping address entity ID.|
|itemIndex|integer(int32)|true|none|Index of the item starting from 0.|
|listPrice|integer(int32)|true|none|SKU's optional price for a specific trade policy.|
|lockTTL|string|true|none|Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time.|
|pickupPointId|string|true|none|[Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R)'s ID.|
|pickupStoreInfo|[PickupStoreInfo](#schemapickupstoreinfo)|true|none|Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).|
|polygonName|string \| null|true|none|Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.|
|price|integer(int32)|true|none|Shipping price for the item in cents. Does not account for the whole order's shipping price.|
|selectedSla|string|true|none|Selected shipping option.|
|sellingPrice|integer(int32)|true|none|Item's selling price.|
|shippingEstimate|string|true|none|Total shipping estimate time in days. For instance, three business days is represented `3bd`.|
|shippingEstimateDate|string|true|none|Shipping estimate date. It is defined only after the confirmation of the order.|
|shipsTo|[string]|true|none|Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).|
|slas|[[Sla](#schemasla)]|true|none|Information on Service Level Agreement (SLA), corresponding to [shipping policies](https://help.vtex.com/tutorial/shipping-policy--tutorials_140).|
|transitTime|string|true|none|Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.|
|versionId|string \| null|true|none|Shipping address version ID.|

<h2 id="tocS_Marketplace">Marketplace</h2>
<!-- backwards compatibility -->
<a id="schemamarketplace"></a>
<a id="schema_Marketplace"></a>
<a id="tocSmarketplace"></a>
<a id="tocsmarketplace"></a>

```json
{
  "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
  "isCertified": null,
  "name": "luxstore"
}
```

Details about the marketplace related to the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseURL|string|true|none|Marketplace base URL.|
|isCertified|string \| null|true|none|If is a certified marketplace.|
|name|string|true|none|Name of the marketplace.|

<h2 id="tocS_Marketplace1">Marketplace1</h2>
<!-- backwards compatibility -->
<a id="schemamarketplace1"></a>
<a id="schema_Marketplace1"></a>
<a id="tocSmarketplace1"></a>
<a id="tocsmarketplace1"></a>

```json
{
  "Count": 16,
  "Facets": null,
  "Max": 21526180,
  "Mean": 1373100.6875,
  "Min": 1160,
  "Missing": 0,
  "StdDev": 5374326.141087491,
  "Sum": 21969611,
  "SumOfSquares": 463417210029853
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int64)|true|none|none|

<h2 id="tocS_Marketplace2">Marketplace2</h2>
<!-- backwards compatibility -->
<a id="schemamarketplace2"></a>
<a id="schema_Marketplace2"></a>
<a id="tocSmarketplace2"></a>
<a id="tocsmarketplace2"></a>

```json
{
  "Count": 16,
  "Facets": null,
  "Max": 89,
  "Mean": 7.4375,
  "Min": 1,
  "Missing": 0,
  "StdDev": 21.92401651157926,
  "Sum": 119,
  "SumOfSquares": 8095
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|string \| null|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
{
  "Fulfillment": {
    "Count": 68,
    "Facets": null,
    "Max": 11150,
    "Mean": 1395.5882352941176,
    "Min": 1250,
    "Missing": 0,
    "StdDev": 1200.5513439298484,
    "Sum": 94900,
    "SumOfSquares": 229010000
  },
  "Marketplace": {
    "Count": 16,
    "Facets": null,
    "Max": 21526180,
    "Mean": 1373100.6875,
    "Min": 1160,
    "Missing": 0,
    "StdDev": 5374326.141087491,
    "Sum": 21969611,
    "SumOfSquares": 463417210029853
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fulfillment|[Fulfillment](#schemafulfillment)|true|none|none|
|Marketplace|[Marketplace1](#schemamarketplace1)|true|none|none|

<h2 id="tocS_Origin1">Origin1</h2>
<!-- backwards compatibility -->
<a id="schemaorigin1"></a>
<a id="schema_Origin1"></a>
<a id="tocSorigin1"></a>
<a id="tocsorigin1"></a>

```json
{
  "Fulfillment": {
    "Count": 68,
    "Facets": null,
    "Max": 1,
    "Mean": 1,
    "Min": 1,
    "Missing": 0,
    "StdDev": 0,
    "Sum": 68,
    "SumOfSquares": 68
  },
  "Marketplace": {
    "Count": 16,
    "Facets": null,
    "Max": 89,
    "Mean": 7.4375,
    "Min": 1,
    "Missing": 0,
    "StdDev": 21.92401651157926,
    "Sum": 119,
    "SumOfSquares": 8095
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Fulfillment|[Fulfillment1](#schemafulfillment1)|true|none|none|
|Marketplace|[Marketplace2](#schemamarketplace2)|true|none|none|

<h2 id="tocS_Origin2">Origin2</h2>
<!-- backwards compatibility -->
<a id="schemaorigin2"></a>
<a id="schema_Origin2"></a>
<a id="tocSorigin2"></a>
<a id="tocsorigin2"></a>

```json
{
  "Account": "automacaoqa",
  "Key": "vtexappkey-appvtex"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|string|true|none|none|
|Key|string|true|none|none|

<h2 id="tocS_PackageAttachment">PackageAttachment</h2>
<!-- backwards compatibility -->
<a id="schemapackageattachment"></a>
<a id="schema_PackageAttachment"></a>
<a id="tocSpackageattachment"></a>
<a id="tocspackageattachment"></a>

```json
{
  "packages": []
}
```

Package object populated after order invoiced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packages|[string]|true|none|Packages details.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
{
  "currentPage": 1,
  "pages": 6,
  "perPage": 15,
  "total": 84
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPage|integer(int32)|true|none|none|
|pages|integer(int32)|true|none|none|
|perPage|integer(int32)|true|none|none|
|total|integer(int32)|true|none|none|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
  "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
  "bankIssuedInvoiceBarCodeType": "i25",
  "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
  "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
  "billingAddress": {},
  "cardHolder": null,
  "cardNumber": null,
  "connectorResponses": {
    "Message": "logMessage",
    "ReturnCode": "200",
    "Tid": "94857956",
    "authId": "857956"
  },
  "cvv2": null,
  "dueDate": "2019-02-02",
  "expireMonth": null,
  "expireYear": null,
  "firstDigits": null,
  "giftCardAsDiscount": false,
  "giftCardCaption": null,
  "giftCardId": null,
  "giftCardName": null,
  "giftCardProvider": "presentCard",
  "group": "bankInvoice",
  "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
  "installments": 1,
  "koinUrl": "koinURL",
  "lastDigits": null,
  "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
  "paymentSystem": "6",
  "paymentSystemName": "Boleto Bancário",
  "redemptionCode": null,
  "referenceValue": 4450,
  "tid": null,
  "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
  "value": 4450
}
```

Payment details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|Payment's account ID.|
|bankIssuedInvoiceBarCodeNumber|string|true|none|Number of the bank issued invoice bar code.|
|bankIssuedInvoiceBarCodeType|string|true|none|Type of the bank issued invoice bar code.|
|bankIssuedInvoiceIdentificationNumber|string|true|none|Numeric sequence that identifies the bank issued invoice.|
|bankIssuedInvoiceIdentificationNumberFormatted|string|true|none|Bank issued invoice ID formatted.|
|billingAddress|object|true|none|Billing address information.|
|cardHolder|string \| null|true|none|Name of the person who owns the card.|
|cardNumber|string \| null|true|none|Numeric sequence of the card used in the transaction.|
|connectorResponses|object|true|none|Information about the connector responses.|
|cvv2|string \| null|true|none|Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.|
|dueDate|string|true|none|Payment due date, with the format `yyyy-mm-dd`.|
|expireMonth|string \| null|true|none|Expire month of the card used in the transaction (2-digits).|
|expireYear|string \| null|true|none|Expire year of the card used in the transaction (4-digits).|
|firstDigits|string \| null|true|none|Fist digits of the card used in the transaction.|
|giftCardAsDiscount|boolean|true|none|When this field is set as `true`, the Gift Card is a discount over the price, and when set as `false`, it is not a discount.|
|giftCardCaption|string \| null|true|none|Gift Card's caption.|
|giftCardId|string \| null|true|none|Gift Card's ID.|
|giftCardName|string \| null|true|none|Gift Card's name.|
|giftCardProvider|string|true|none|Gift Card provider's ID.|
|group|string|true|none|Name of the collection the Gift Card belongs to.|
|id|string|true|none|VTEX payment ID that can be used as unique identifier.|
|installments|integer(int32)|true|none|Number of payment installments.|
|koinUrl|string|true|none|Payment's account ID.|
|lastDigits|string \| null|true|none|Last digits of the card used in the transaction.|
|parentAccountId|string|true|none|This field retrieves the main account if the payment was made in a subaccount.|
|paymentSystem|string|true|none|Payment system's ID.|
|paymentSystemName|string|true|none|Payment system's name.|
|redemptionCode|string \| null|true|none|Code for the customer to use the Gift Card.|
|referenceValue|integer(int32)|true|none|Payment's reference value in cents.|
|tid|string \| null|true|none|Provider's unique identifier for the transaction.|
|url|string|true|none|Payment's URL.|
|value|integer(int32)|true|none|Payment's final amount in cents.|

<h2 id="tocS_Payment1">Payment1</h2>
<!-- backwards compatibility -->
<a id="schemapayment1"></a>
<a id="schema_Payment1"></a>
<a id="tocSpayment1"></a>
<a id="tocspayment1"></a>

```json
{
  "cardHolder": null,
  "cardNumber": null,
  "connectorResponses": {
    "Message": "logMessage",
    "ReturnCode": "200",
    "Tid": "101770752",
    "authId": "170852"
  },
  "cvv2": null,
  "dueDate": null,
  "expireMonth": null,
  "expireYear": null,
  "firstDigits": "412341",
  "giftCardCaption": null,
  "giftCardId": null,
  "giftCardName": null,
  "group": "creditCard",
  "id": "721CBE1090324D12ABE301FE33DE775A",
  "installments": 1,
  "lastDigits": "4123",
  "paymentSystem": "4",
  "paymentSystemName": "Mastercard",
  "redemptionCode": null,
  "referenceValue": 10150,
  "tid": "101770752",
  "url": null,
  "value": 10150
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolder|string \| null|true|none|Payment card holder.|
|cardNumber|string \| null|true|none|Payment card number.|
|connectorResponses|[ConnectorResponses](#schemaconnectorresponses)|true|none|none|
|cvv2|string \| null|true|none|Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions.|
|dueDate|string \| null|true|none|Payment due date.|
|expireMonth|string \| null|true|none|Payment card expire month.|
|expireYear|string \| null|true|none|Payment card expire year.|
|firstDigits|string|true|none|Payment card first digits.|
|giftCardCaption|string \| null|true|none|Gift Card caption.|
|giftCardId|string \| null|true|none|Gift Card ID.|
|giftCardName|string \| null|true|none|Gift Card name.|
|group|string|true|none|It represents the payment method. For each method, it can have the following values: <br><br>- **Credit card:** `creditCard` <br><br>- **Debid card:** `debitCard`<br><br>- **Bank invoice:** `bankInvoice`<br><br>- **Promissory:** `promissory` <br><br>- **Gift card:** `giftCard` <br><br>- **Pix:** `instantPayment`|
|id|string|true|none|Payment ID.|
|installments|integer(int32)|true|none|Payment Installments quantity.|
|lastDigits|string|true|none|Payment card last digits.|
|paymentSystem|string|true|none|Payment system ID.|
|paymentSystemName|string|true|none|Payment system name.|
|redemptionCode|string \| null|true|none|Code for the customer to use the Gift Card.|
|referenceValue|integer(int32)|true|none|Payment reference Value.|
|tid|string|true|none|Payment transaction ID.|
|url|string \| null|true|none|Payment URL.|
|value|integer(int32)|true|none|Payment value.|

<h2 id="tocS_PaymentData">PaymentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdata"></a>
<a id="schema_PaymentData"></a>
<a id="tocSpaymentdata"></a>
<a id="tocspaymentdata"></a>

```json
{
  "giftCards": [],
  "transactions": [
    {
      "isActive": true,
      "merchantName": "luxstore",
      "payments": [
        {
          "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
          "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
          "bankIssuedInvoiceBarCodeType": "i25",
          "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
          "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
          "billingAddress": {},
          "cardHolder": null,
          "cardNumber": null,
          "connectorResponses": {
            "Message": "logMessage",
            "ReturnCode": "200",
            "Tid": "94857956",
            "authId": "857956"
          },
          "cvv2": null,
          "dueDate": "2019-02-02",
          "expireMonth": null,
          "expireYear": null,
          "firstDigits": null,
          "giftCardAsDiscount": false,
          "giftCardCaption": null,
          "giftCardId": null,
          "giftCardName": null,
          "giftCardProvider": "presentCard",
          "group": "bankInvoice",
          "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
          "installments": 1,
          "koinUrl": "koinURL",
          "lastDigits": null,
          "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
          "paymentSystem": "6",
          "paymentSystemName": "Boleto Bancário",
          "redemptionCode": null,
          "referenceValue": 4450,
          "tid": null,
          "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
          "value": 4450
        }
      ],
      "transactionId": "418213DE29634837A63DD693A937A696"
    }
  ]
}
```

Object with information about the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|giftCards|[object]|false|none|Array with information about Gift Cards.|
|transactions|[[Transaction](#schematransaction)]|true|none|Information about financial transactions.|

<h2 id="tocS_PickupStoreInfo">PickupStoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemapickupstoreinfo"></a>
<a id="schema_PickupStoreInfo"></a>
<a id="tocSpickupstoreinfo"></a>
<a id="tocspickupstoreinfo"></a>

```json
{
  "additionalInfo": null,
  "address": null,
  "dockId": null,
  "friendlyName": null,
  "isPickupStore": false
}
```

Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string \| null|true|none|Additional information about the pickup point.|
|address|string \| null|true|none|Pickup point's address.|
|dockId|string \| null|true|none|ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) related to the delivery or the pickup point.|
|friendlyName|string \| null|true|none|Name of the pickup point displayed at checkout.|
|isPickupStore|boolean|true|none|If this field is set `true`, it means the type of shipping is pickup, and if set as `false`, it is not.|

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "MessageRetentionPeriodInSeconds": 3456000,
  "visibilityTimeoutInSeconds": 250
}
```

Object with information about timeout and message retention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageRetentionPeriodInSeconds|integer(int32)|true|none|Maximum life span of an order update in the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.|
|visibilityTimeoutInSeconds|integer(int32)|true|none|Period of time for which an item becomes invisible after it has been [retrieved](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#getfeedorderstatus1). Measured in seconds.|

<h2 id="tocS_RatesAndBenefitsData">RatesAndBenefitsData</h2>
<!-- backwards compatibility -->
<a id="schemaratesandbenefitsdata"></a>
<a id="schema_RatesAndBenefitsData"></a>
<a id="tocSratesandbenefitsdata"></a>
<a id="tocsratesandbenefitsdata"></a>

```json
{
  "id": "ratesAndBenefitsData",
  "rateAndBenefitsIdentifiers": []
}
```

Information on promotions and taxes that apply to the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the rate or benefit.|
|rateAndBenefitsIdentifiers|[string]|true|none|Information about order's promotions and taxes identifiers.|

<h2 id="tocS_Receipt">Receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceipt"></a>
<a id="schema_Receipt"></a>
<a id="tocSreceipt"></a>
<a id="tocsreceipt"></a>

```json
{
  "date": "2019-02-06T20:46:04.4003606+00:00",
  "orderId": "v5195004lux-01",
  "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
}
```

Information about the receipt for changed orders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|Date when the receipt was created.|
|orderId|string|true|none|ID of the order.|
|receipt|string|true|none|Receipt's unique identifier code.|

<h2 id="tocS_RegisterChange">RegisterChange</h2>
<!-- backwards compatibility -->
<a id="schemaregisterchange"></a>
<a id="schema_RegisterChange"></a>
<a id="tocSregisterchange"></a>
<a id="tocsregisterchange"></a>

```json
{
  "date": "2019-02-08T13:54:33.6868469+00:00",
  "orderId": "v502538llux-01",
  "receipt": "535d4581-a2a2-4fd2-a206-1c61eae91b1e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date of order change.|
|orderId|string|false|none|ID of the order.|
|receipt|string|false|none|Receipt|

<h2 id="tocS_RegisterChangeRequest">RegisterChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterchangerequest"></a>
<a id="schema_RegisterChangeRequest"></a>
<a id="tocSregisterchangerequest"></a>
<a id="tocsregisterchangerequest"></a>

```json
{
  "discountValue": 1000,
  "incrementValue": 0,
  "itemsAdded": [
    {
      "id": "234788",
      "price": 200,
      "quantity": 1
    }
  ],
  "itemsRemoved": [
    {
      "id": "234794",
      "price": 600,
      "quantity": 2
    }
  ],
  "reason": "Promoção dada por telefone",
  "requestId": "change-request-0123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountValue|integer(int32)|true|none|This field can be used to apply a discount to the total value of the order. Value in cents.|
|incrementValue|integer(int32)|true|none|This field can be used to increment the total value of the order. Value in cents.|
|itemsAdded|[object]|false|none|List of items that should be added to the order.|
|itemsRemoved|[object]|false|none|List of items that should be removed from the order.|
|reason|string|true|none|Reason for order change. This may be shown to the shopper in the UI or transactional emails.|
|requestId|string|true|none|Request identification of the change. Only the first change made with each `requestId` will be effective on a given order. Use different IDs for different changes to the same order.|

<h2 id="tocS_SelectedAddress">SelectedAddress</h2>
<!-- backwards compatibility -->
<a id="schemaselectedaddress"></a>
<a id="schema_SelectedAddress"></a>
<a id="tocSselectedaddress"></a>
<a id="tocsselectedaddress"></a>

```json
{
  "addressId": "-1425945657910",
  "addressType": "residential",
  "city": "Rio de Janeiro",
  "complement": "10",
  "country": "BRA",
  "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
  "geoCoordinates": [],
  "neighborhood": "Botafogo",
  "number": "518",
  "postalCode": "22250-040",
  "receiverName": "Rodrigo Cunha",
  "reference": null,
  "state": "RJ",
  "street": "Praia de Botafogo",
  "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Selected address ID.|
|addressType|string|true|none|Selected adress's shipping type, which can be `pickup`, `residential`, `invoice`, `search`, `inStore`, `commercial` or `giftRegistry`.|
|city|string|true|none|City of the selected address.|
|complement|string|true|none|Complement to the selected address if it applies.|
|country|string|true|none|Three letters ISO code of the country of the selected address (ISO 3166 ALPHA-3).|
|entityId|string \| null|true|none|Shipping address entity ID  of the selected address.|
|geoCoordinates|[string]|true|none|Array with two numbers with the selected address's geocoordinates, first longitude then latitude.|
|neighborhood|string|true|none|Neighborhood of the selected address.|
|number|string|true|none|Number of the building, house or apartment of the selected address.|
|postalCode|string|true|none|Postal code of the selected address.|
|receiverName|string|true|none|Name of the person who is going to receive the order in the selected address.|
|reference|string \| null|true|none|Complement to help locate the selected address.|
|state|string|true|none|State of the selected address.|
|street|string|true|none|Street of the selected address.|
|versionId|string \| null|true|none|Shipping address version ID of the selected address.|

<h2 id="tocS_Seller">Seller</h2>
<!-- backwards compatibility -->
<a id="schemaseller"></a>
<a id="schema_Seller"></a>
<a id="tocSseller"></a>
<a id="tocsseller"></a>

```json
{
  "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName",
  "id": "1",
  "logo": "https://sellersLogo/images.png",
  "name": "Loja do Suporte"
}
```

Information about the seller associated with the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfillmentEndpoint|string|true|none|URL of the endpoint for fulfillment of seller's orders.|
|id|string|true|none|Seller ID that identifies the seller.|
|logo|string|true|none|URL of the seller's logo.|
|name|string|true|none|Seller's name.|

<h2 id="tocS_ShippingData">ShippingData</h2>
<!-- backwards compatibility -->
<a id="schemashippingdata"></a>
<a id="schema_ShippingData"></a>
<a id="tocSshippingdata"></a>
<a id="tocsshippingdata"></a>

```json
{
  "address": {
    "addressId": "-1425945657910",
    "addressType": "residential",
    "city": "Rio de Janeiro",
    "complement": "3",
    "country": "BRA",
    "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
    "geoCoordinates": [],
    "neighborhood": "Botafogo",
    "number": "300",
    "postalCode": "22250-040",
    "receiverName": "Rodrigo Cunha",
    "reference": null,
    "state": "RJ",
    "street": "Praia de Botafogo",
    "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
  },
  "id": "shippingData",
  "logisticsInfo": [
    {
      "addressId": "4791759472332",
      "deliveryChannel": "delivery",
      "deliveryChannels": [
        {
          "id": "delivery",
          "stockBalance": 0
        }
      ],
      "deliveryCompany": "Todos os CEPS",
      "deliveryIds": [
        {
          "accountCarrierName": "recorrenciaqa",
          "courierId": "197a56f",
          "courierName": "Todos os CEPS",
          "dockId": "1",
          "kitItemDetails": [],
          "quantity": 1,
          "warehouseId": "1_1"
        }
      ],
      "deliveryWindow": null,
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "itemIndex": 0,
      "listPrice": 1160,
      "lockTTL": "10d",
      "pickupPointId": "store67",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": "",
      "price": 1160,
      "selectedSla": "Normal",
      "sellingPrice": 1160,
      "shippingEstimate": "5bd",
      "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
      "shipsTo": [
        "BRA"
      ],
      "slas": [
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Normal",
          "lockTTL": "12d",
          "name": "Normal",
          "pickupDistance": 0,
          "pickupPointId": "store35",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": "",
          "price": 1160,
          "shippingEstimate": "5bd",
          "transitTime": "3d"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Expressa",
          "lockTTL": "12d",
          "name": "Expressa",
          "pickupDistance": 0,
          "pickupPointId": "store45",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": "",
          "price": 1160,
          "shippingEstimate": "5bd",
          "transitTime": "3d"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Quebra Kit",
          "lockTTL": "12d",
          "name": "Quebra Kit",
          "pickupDistance": 0,
          "pickupPointId": "store45",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": "",
          "price": 1392,
          "shippingEstimate": "2bd",
          "transitTime": "3d"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Sob Encomenda",
          "lockTTL": "12d",
          "name": "Sob Encomenda",
          "pickupDistance": 0,
          "pickupPointId": "store46",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": "",
          "price": 1392,
          "shippingEstimate": "32bd",
          "transitTime": "3d"
        }
      ],
      "transitTime": "3d",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    }
  ],
  "selectedAddresses": [
    {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "10",
      "country": "BRA",
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "518",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    }
  ],
  "trackingHints": null
}
```

Object containing shipping data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|Shipping address details.|
|id|string|true|none|Object ID, the expected value is `shippingData`.|
|logisticsInfo|[[LogisticsInfo](#schemalogisticsinfo)]|true|none|Array of objects containing item's logistics information.|
|selectedAddresses|[[SelectedAddress](#schemaselectedaddress)]|true|none|Information about selected adresses.|
|trackingHints|string \| null|true|none|none|

<h2 id="tocS_Sla">Sla</h2>
<!-- backwards compatibility -->
<a id="schemasla"></a>
<a id="schema_Sla"></a>
<a id="tocSsla"></a>
<a id="tocssla"></a>

```json
{
  "deliveryChannel": "delivery",
  "deliveryWindow": null,
  "id": "Normal",
  "lockTTL": "12d",
  "name": "Normal",
  "pickupDistance": 0,
  "pickupPointId": "1_VTEX-RJ",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": null,
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false
  },
  "polygonName": null,
  "price": 1160,
  "shippingEstimate": "5bd",
  "transitTime": "3d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryChannel|string|true|none|If the delivery channel is `delivery` or `pickup-in-point`.|
|deliveryWindow|string \| null|true|none|[Scheduled delivery window](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, if it applies to the item.|
|id|string|true|none|ID of the shipping method used in the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).|
|lockTTL|string|true|none|Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA.|
|name|string|true|none|Name of the shipping policy.|
|pickupDistance|number|true|none|Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.|
|pickupPointId|string|true|none|[Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) ID related to the SLA.|
|pickupStoreInfo|[PickupStoreInfo](#schemapickupstoreinfo)|true|none|Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).|
|polygonName|string \| null|true|none|Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.|
|price|integer(int32)|true|none|Shipping price for the item in cents. Does not account for the whole order's shipping price.|
|shippingEstimate|string|true|none|Total shipping estimate time in days. For instance, three business days is represented `3bd`.|
|transitTime|string|true|none|Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "stats": {
    "totalItems": {
      "Count": 84,
      "Facets": {
        "currencyCode": {
          "BRL": {
            "Count": 84,
            "Facets": null,
            "Max": 89,
            "Mean": 2.2261904761904763,
            "Min": 1,
            "Missing": 0,
            "StdDev": 9.660940100525016,
            "Sum": 187,
            "SumOfSquares": 8163
          }
        },
        "origin": {
          "Fulfillment": {
            "Count": 68,
            "Facets": null,
            "Max": 1,
            "Mean": 1,
            "Min": 1,
            "Missing": 0,
            "StdDev": 0,
            "Sum": 68,
            "SumOfSquares": 68
          },
          "Marketplace": {
            "Count": 16,
            "Facets": null,
            "Max": 89,
            "Mean": 7.4375,
            "Min": 1,
            "Missing": 0,
            "StdDev": 21.92401651157926,
            "Sum": 119,
            "SumOfSquares": 8095
          }
        }
      },
      "Max": 89,
      "Mean": 2.2261904761904763,
      "Min": 1,
      "Missing": 0,
      "StdDev": 9.660940100525016,
      "Sum": 187,
      "SumOfSquares": 8163
    },
    "totalValue": {
      "Count": 84,
      "Facets": {
        "currencyCode": {
          "BRL": {
            "Count": 84,
            "Facets": null,
            "Max": 21526180,
            "Mean": 262672.75,
            "Min": 1160,
            "Missing": 0,
            "StdDev": 2348087.3869179883,
            "Sum": 22064511,
            "SumOfSquares": 463417439039853
          }
        },
        "origin": {
          "Fulfillment": {
            "Count": 68,
            "Facets": null,
            "Max": 11150,
            "Mean": 1395.5882352941176,
            "Min": 1250,
            "Missing": 0,
            "StdDev": 1200.5513439298484,
            "Sum": 94900,
            "SumOfSquares": 229010000
          },
          "Marketplace": {
            "Count": 16,
            "Facets": null,
            "Max": 21526180,
            "Mean": 1373100.6875,
            "Min": 1160,
            "Missing": 0,
            "StdDev": 5374326.141087491,
            "Sum": 21969611,
            "SumOfSquares": 463417210029853
          }
        }
      },
      "Max": 21526180,
      "Mean": 262672.75,
      "Min": 1160,
      "Missing": 0,
      "StdDev": 2348087.3869179883,
      "Sum": 22064511,
      "SumOfSquares": 463417439039853
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|[Stats1](#schemastats1)|true|none|none|

<h2 id="tocS_Stats1">Stats1</h2>
<!-- backwards compatibility -->
<a id="schemastats1"></a>
<a id="schema_Stats1"></a>
<a id="tocSstats1"></a>
<a id="tocsstats1"></a>

```json
{
  "totalItems": {
    "Count": 84,
    "Facets": {
      "currencyCode": {
        "BRL": {
          "Count": 84,
          "Facets": null,
          "Max": 89,
          "Mean": 2.2261904761904763,
          "Min": 1,
          "Missing": 0,
          "StdDev": 9.660940100525016,
          "Sum": 187,
          "SumOfSquares": 8163
        }
      },
      "origin": {
        "Fulfillment": {
          "Count": 68,
          "Facets": null,
          "Max": 1,
          "Mean": 1,
          "Min": 1,
          "Missing": 0,
          "StdDev": 0,
          "Sum": 68,
          "SumOfSquares": 68
        },
        "Marketplace": {
          "Count": 16,
          "Facets": null,
          "Max": 89,
          "Mean": 7.4375,
          "Min": 1,
          "Missing": 0,
          "StdDev": 21.92401651157926,
          "Sum": 119,
          "SumOfSquares": 8095
        }
      }
    },
    "Max": 89,
    "Mean": 2.2261904761904763,
    "Min": 1,
    "Missing": 0,
    "StdDev": 9.660940100525016,
    "Sum": 187,
    "SumOfSquares": 8163
  },
  "totalValue": {
    "Count": 84,
    "Facets": {
      "currencyCode": {
        "BRL": {
          "Count": 84,
          "Facets": null,
          "Max": 21526180,
          "Mean": 262672.75,
          "Min": 1160,
          "Missing": 0,
          "StdDev": 2348087.3869179883,
          "Sum": 22064511,
          "SumOfSquares": 463417439039853
        }
      },
      "origin": {
        "Fulfillment": {
          "Count": 68,
          "Facets": null,
          "Max": 11150,
          "Mean": 1395.5882352941176,
          "Min": 1250,
          "Missing": 0,
          "StdDev": 1200.5513439298484,
          "Sum": 94900,
          "SumOfSquares": 229010000
        },
        "Marketplace": {
          "Count": 16,
          "Facets": null,
          "Max": 21526180,
          "Mean": 1373100.6875,
          "Min": 1160,
          "Missing": 0,
          "StdDev": 5374326.141087491,
          "Sum": 21969611,
          "SumOfSquares": 463417210029853
        }
      }
    },
    "Max": 21526180,
    "Mean": 262672.75,
    "Min": 1160,
    "Missing": 0,
    "StdDev": 2348087.3869179883,
    "Sum": 22064511,
    "SumOfSquares": 463417439039853
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalItems|[TotalItems](#schematotalitems)|true|none|none|
|totalValue|[TotalValue](#schematotalvalue)|true|none|none|

<h2 id="tocS_Stats2">Stats2</h2>
<!-- backwards compatibility -->
<a id="schemastats2"></a>
<a id="schema_Stats2"></a>
<a id="tocSstats2"></a>
<a id="tocsstats2"></a>

```json
{
  "stats": {
    "totalItems": {
      "Count": 19,
      "Facets": {},
      "Max": 0,
      "Mean": 0,
      "Min": 0,
      "Missing": 0,
      "StdDev": 0,
      "Sum": 0,
      "SumOfSquares": 0
    },
    "totalValue": {
      "Count": 19,
      "Facets": {},
      "Max": 0,
      "Mean": 0,
      "Min": 0,
      "Missing": 0,
      "StdDev": 0,
      "Sum": 0,
      "SumOfSquares": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stats|[Stats3](#schemastats3)|true|none|none|

<h2 id="tocS_Stats3">Stats3</h2>
<!-- backwards compatibility -->
<a id="schemastats3"></a>
<a id="schema_Stats3"></a>
<a id="tocSstats3"></a>
<a id="tocsstats3"></a>

```json
{
  "totalItems": {
    "Count": 19,
    "Facets": {},
    "Max": 0,
    "Mean": 0,
    "Min": 0,
    "Missing": 0,
    "StdDev": 0,
    "Sum": 0,
    "SumOfSquares": 0
  },
  "totalValue": {
    "Count": 19,
    "Facets": {},
    "Max": 0,
    "Mean": 0,
    "Min": 0,
    "Missing": 0,
    "StdDev": 0,
    "Sum": 0,
    "SumOfSquares": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalItems|[TotalItems1](#schematotalitems1)|true|none|none|
|totalValue|[TotalValue1](#schematotalvalue1)|true|none|none|

<h2 id="tocS_StorePreferencesData">StorePreferencesData</h2>
<!-- backwards compatibility -->
<a id="schemastorepreferencesdata"></a>
<a id="schema_StorePreferencesData"></a>
<a id="tocSstorepreferencesdata"></a>
<a id="tocsstorepreferencesdata"></a>

```json
{
  "countryCode": "BRA",
  "currencyCode": "BRL",
  "currencyFormatInfo": {
    "CurrencyDecimalDigits": 2,
    "CurrencyDecimalSeparator": ",",
    "CurrencyGroupSeparator": ".",
    "CurrencyGroupSize": 3,
    "StartsWithCurrencySymbol": true
  },
  "currencyLocale": 1046,
  "currencySymbol": "R$",
  "timeZone": "E. South America Standard Time"
}
```

Object with data from the store's configuration - stored in VTEX's License Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|true|none|Three letters ISO code of the country (ISO 3166 ALPHA-3).|
|currencyCode|string|true|none|Currency code in ISO 4217. For example, `BRL`.|
|currencyFormatInfo|[CurrencyFormatInfo](#schemacurrencyformatinfo)|true|none|Object with currency format details.|
|currencyLocale|integer(int32)|true|none|Currency Locale Code in LCID in decimal.|
|currencySymbol|string|true|none|Currency symbol.|
|timeZone|string|true|none|Time zone from where the order was made.|

<h2 id="tocS_TestJSONataExpression">TestJSONataExpression</h2>
<!-- backwards compatibility -->
<a id="schematestjsonataexpression"></a>
<a id="schema_TestJSONataExpression"></a>
<a id="tocStestjsonataexpression"></a>
<a id="tocstestjsonataexpression"></a>

```json
{
  "Document": "string",
  "Expression": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|string|true|none|JSON document to be evaluated by the expression.|
|Expression|string|true|none|JSONata expression to be tested.|

<h2 id="tocS_To">To</h2>
<!-- backwards compatibility -->
<a id="schemato"></a>
<a id="schema_To"></a>
<a id="tocSto"></a>
<a id="tocsto"></a>

```json
{
  "aliasMaskType": 0,
  "conversationRelatedTo": "1305371685465-01",
  "conversationSubject": "oms",
  "email": "customer.name@email.com",
  "emailAlias": "64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br",
  "name": "Mary John",
  "role": "Customer"
}
```

Conversation receiver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasMaskType|integer(int32)|true|none|Conversation tracker mask type.|
|conversationRelatedTo|string|true|none|Related order ID.|
|conversationSubject|string|true|none|Conversation subject.|
|email|string|true|none|Receiver's email.|
|emailAlias|string|true|none|Sender transactional tracker email.|
|name|string|true|none|Receiver's name.|
|role|string|true|none|If it is a customer or null, for transactional emails.|

<h2 id="tocS_Total">Total</h2>
<!-- backwards compatibility -->
<a id="schematotal"></a>
<a id="schema_Total"></a>
<a id="tocStotal"></a>
<a id="tocstotal"></a>

```json
{
  "id": "Items",
  "name": "Total dos Itens",
  "value": 3290
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Code that identifies if the information is about `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.|
|name|string|true|none|Name of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.|
|value|integer(int32)|true|none|Total amount of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`.|

<h2 id="tocS_TotalItems">TotalItems</h2>
<!-- backwards compatibility -->
<a id="schematotalitems"></a>
<a id="schema_TotalItems"></a>
<a id="tocStotalitems"></a>
<a id="tocstotalitems"></a>

```json
{
  "Count": 84,
  "Facets": {
    "currencyCode": {
      "BRL": {
        "Count": 84,
        "Facets": null,
        "Max": 89,
        "Mean": 2.2261904761904763,
        "Min": 1,
        "Missing": 0,
        "StdDev": 9.660940100525016,
        "Sum": 187,
        "SumOfSquares": 8163
      }
    },
    "origin": {
      "Fulfillment": {
        "Count": 68,
        "Facets": null,
        "Max": 1,
        "Mean": 1,
        "Min": 1,
        "Missing": 0,
        "StdDev": 0,
        "Sum": 68,
        "SumOfSquares": 68
      },
      "Marketplace": {
        "Count": 16,
        "Facets": null,
        "Max": 89,
        "Mean": 7.4375,
        "Min": 1,
        "Missing": 0,
        "StdDev": 21.92401651157926,
        "Sum": 119,
        "SumOfSquares": 8095
      }
    }
  },
  "Max": 89,
  "Mean": 2.2261904761904763,
  "Min": 1,
  "Missing": 0,
  "StdDev": 9.660940100525016,
  "Sum": 187,
  "SumOfSquares": 8163
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|[Facets1](#schemafacets1)|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_TotalItems1">TotalItems1</h2>
<!-- backwards compatibility -->
<a id="schematotalitems1"></a>
<a id="schema_TotalItems1"></a>
<a id="tocStotalitems1"></a>
<a id="tocstotalitems1"></a>

```json
{
  "Count": 19,
  "Facets": {},
  "Max": 0,
  "Mean": 0,
  "Min": 0,
  "Missing": 0,
  "StdDev": 0,
  "Sum": 0,
  "SumOfSquares": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|object|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|integer(int32)|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|integer(int32)|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_TotalValue">TotalValue</h2>
<!-- backwards compatibility -->
<a id="schematotalvalue"></a>
<a id="schema_TotalValue"></a>
<a id="tocStotalvalue"></a>
<a id="tocstotalvalue"></a>

```json
{
  "Count": 84,
  "Facets": {
    "currencyCode": {
      "BRL": {
        "Count": 84,
        "Facets": null,
        "Max": 21526180,
        "Mean": 262672.75,
        "Min": 1160,
        "Missing": 0,
        "StdDev": 2348087.3869179883,
        "Sum": 22064511,
        "SumOfSquares": 463417439039853
      }
    },
    "origin": {
      "Fulfillment": {
        "Count": 68,
        "Facets": null,
        "Max": 11150,
        "Mean": 1395.5882352941176,
        "Min": 1250,
        "Missing": 0,
        "StdDev": 1200.5513439298484,
        "Sum": 94900,
        "SumOfSquares": 229010000
      },
      "Marketplace": {
        "Count": 16,
        "Facets": null,
        "Max": 21526180,
        "Mean": 1373100.6875,
        "Min": 1160,
        "Missing": 0,
        "StdDev": 5374326.141087491,
        "Sum": 21969611,
        "SumOfSquares": 463417210029853
      }
    }
  },
  "Max": 21526180,
  "Mean": 262672.75,
  "Min": 1160,
  "Missing": 0,
  "StdDev": 2348087.3869179883,
  "Sum": 22064511,
  "SumOfSquares": 463417439039853
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|[Facets](#schemafacets)|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|number|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|number|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int64)|true|none|none|

<h2 id="tocS_TotalValue1">TotalValue1</h2>
<!-- backwards compatibility -->
<a id="schematotalvalue1"></a>
<a id="schema_TotalValue1"></a>
<a id="tocStotalvalue1"></a>
<a id="tocstotalvalue1"></a>

```json
{
  "Count": 19,
  "Facets": {},
  "Max": 0,
  "Mean": 0,
  "Min": 0,
  "Missing": 0,
  "StdDev": 0,
  "Sum": 0,
  "SumOfSquares": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|true|none|none|
|Facets|object|true|none|none|
|Max|integer(int32)|true|none|none|
|Mean|integer(int32)|true|none|none|
|Min|integer(int32)|true|none|none|
|Missing|integer(int32)|true|none|none|
|StdDev|integer(int32)|true|none|none|
|Sum|integer(int32)|true|none|none|
|SumOfSquares|integer(int32)|true|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "isActive": true,
  "merchantName": "luxstore",
  "payments": [
    {
      "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
      "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
      "bankIssuedInvoiceBarCodeType": "i25",
      "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
      "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
      "billingAddress": {},
      "cardHolder": null,
      "cardNumber": null,
      "connectorResponses": {
        "Message": "logMessage",
        "ReturnCode": "200",
        "Tid": "94857956",
        "authId": "857956"
      },
      "cvv2": null,
      "dueDate": "2019-02-02",
      "expireMonth": null,
      "expireYear": null,
      "firstDigits": null,
      "giftCardAsDiscount": false,
      "giftCardCaption": null,
      "giftCardId": null,
      "giftCardName": null,
      "giftCardProvider": "presentCard",
      "group": "bankInvoice",
      "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
      "installments": 1,
      "koinUrl": "koinURL",
      "lastDigits": null,
      "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
      "paymentSystem": "6",
      "paymentSystemName": "Boleto Bancário",
      "redemptionCode": null,
      "referenceValue": 4450,
      "tid": null,
      "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
      "value": 4450
    }
  ],
  "transactionId": "418213DE29634837A63DD693A937A696"
}
```

Financial transaction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|true|none|When this field is set as `true`, the payment is active, and when it is `false`, the payment is inactive.|
|merchantName|string|true|none|Name of the merchant that will receive the payment.|
|payments|[[Payment](#schemapayment)]|true|none|Detailed information about payment.|
|transactionId|string|true|none|ID of the transaction.|

<h2 id="tocS_UpdateTrackingStatus">UpdateTrackingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrackingstatus"></a>
<a id="schema_UpdateTrackingStatus"></a>
<a id="tocSupdatetrackingstatus"></a>
<a id="tocsupdatetrackingstatus"></a>

```json
{
  "date": "2017-03-29T18:04:31.0521233+00:00",
  "orderId": "v501245lspt-01",
  "receipt": "f67d33a8029c42ce9a8f07fc17f54449"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|orderId|string|true|none|none|
|receipt|string|true|none|none|

<h2 id="tocS_UpdateTrackingStatusRequest">UpdateTrackingStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrackingstatusrequest"></a>
<a id="schema_UpdateTrackingStatusRequest"></a>
<a id="tocSupdatetrackingstatusrequest"></a>
<a id="tocsupdatetrackingstatusrequest"></a>

```json
{
  "deliveredDate": null,
  "events": [
    {
      "city": "Rio de Janeiro",
      "date": "2015-06-23",
      "description": "Coletado pela transportadora",
      "state": "RJ"
    },
    {
      "city": "Sao Paulo",
      "date": "2015-06-24",
      "description": "A caminho de Curitiba",
      "state": "SP"
    }
  ],
  "isDelivered": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveredDate|string \| null|true|none|Date and time of when the package was delivered. Note that it is different from the tracking date parameter. The `deliveredDate` format is `yyyy-mm-dd hh:mm`.|
|events|[[Event](#schemaevent)]|true|none|none|
|isDelivered|boolean|true|none|none|

<h2 id="tocS_Updatepartialinvoice.SendTrackingNumber">Updatepartialinvoice.SendTrackingNumber</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartialinvoice.sendtrackingnumber"></a>
<a id="schema_Updatepartialinvoice.SendTrackingNumber"></a>
<a id="tocSupdatepartialinvoice.sendtrackingnumber"></a>
<a id="tocsupdatepartialinvoice.sendtrackingnumber"></a>

```json
{
  "date": "2019-02-08T13:16:13.4617653+00:00",
  "orderId": "00-v5195004lux-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|orderId|string|true|none|none|
|receipt|string|true|none|none|

<h2 id="tocS_Updatepartialinvoice.SendTrackingNumber.Request">Updatepartialinvoice.SendTrackingNumber.Request</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartialinvoice.sendtrackingnumber.request"></a>
<a id="schema_Updatepartialinvoice.SendTrackingNumber.Request"></a>
<a id="tocSupdatepartialinvoice.sendtrackingnumber.request"></a>
<a id="tocsupdatepartialinvoice.sendtrackingnumber.request"></a>

```json
{
  "courier": "carrierOne",
  "dispatchedDate": "2022-02-08T13:16:13.4617653+00:00",
  "trackingNumber": "87658",
  "trackingUrl": "https://www.tracking.com/url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courier|string \| null|true|none|The name of the carrier responsible for delivering the order.|
|dispatchedDate|string \| null|true|none|Date when the package was dispatched. For example, 2023-01-08T13:16:13.4617653+00:00.|
|trackingNumber|string|true|none|The number code that identifies the order tracking.|
|trackingUrl|string \| null|true|none|Package tracking URL.|

<h2 id="tocS_Userorderdetails">Userorderdetails</h2>
<!-- backwards compatibility -->
<a id="schemauserorderdetails"></a>
<a id="schema_Userorderdetails"></a>
<a id="tocSuserorderdetails"></a>
<a id="tocsuserorderdetails"></a>

```json
{
  "affiliateId": "",
  "allowCancellation": true,
  "allowEdition": false,
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorData": null,
  "cancelReason": "The size was too big.",
  "cancellationData": {
    "CancellationDate": "2022-10--05T15:40:33",
    "Reason": "Item was too big in the client.",
    "RequestedByPaymentNotification": false,
    "RequestedBySellerNotification": false,
    "RequestedBySystem": false,
    "RequestedByUser": true
  },
  "changesAttachment": {
    "changesData": [
      {
        "discountValue": 3290,
        "incrementValue": 0,
        "itemsAdded": [],
        "itemsRemoved": [
          {
            "id": "1234568358",
            "name": "Bay Max L",
            "price": 3290,
            "quantity": 1,
            "unitMultiplier": null
          }
        ],
        "reason": "Blah",
        "receipt": {
          "date": "2019-02-06T20:46:04.4003606+00:00",
          "orderId": "v502556llux-01",
          "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
        }
      }
    ],
    "id": "changeAttachment"
  },
  "checkedInPickupPointId": "storeNameExample_901",
  "clientPreferencesData": {
    "locale": "en-US",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "11047867702",
    "documentType": "cpf",
    "email": "rodrigo.cunha@vtex.com.br",
    "firstName": "Rodrigo",
    "id": "clientProfileData",
    "isCorporate": false,
    "lastName": "Cunha",
    "phone": "+5521972321094",
    "stateInscription": null,
    "tradeName": null,
    "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93"
  },
  "commercialConditionData": null,
  "creationDate": "2019-01-28T20:09:43.899958+00:00",
  "customData": null,
  "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
  "giftRegistryData": null,
  "hostname": "luxstore",
  "invoiceData": null,
  "invoicedDate": null,
  "isCheckedIn": false,
  "isCompleted": true,
  "itemMetadata": {
    "Items": [
      {
        "AssemblyOptions": [
          {
            "Composition": {},
            "Id": "vtex.subscription.plan-ana",
            "InputValues": {
              "vtex.subscription.key.frequency": {
                "Domain": [
                  "4 month",
                  "1 month"
                ],
                "MaximumNumberOfCharacters": 8
              }
            },
            "Name": "vtex.subscription.plan-ana",
            "Required": false
          }
        ],
        "DetailUrl": "/catfood/p",
        "Ean": "43673557",
        "Id": "18",
        "ImageUrl": "http://store.vteximg.com.br/ids/155392-55-55/AlconKOI.jpg?v=635918402228600000",
        "Name": "Cat food",
        "ProductId": "6",
        "RefId": "105",
        "Seller": "1",
        "SkuName": "Cat food"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000023",
        "brandName": "VTEX",
        "categoriesIds": "/1/",
        "commercialConditionId": "5",
        "dimension": {
          "cubicweight": 0.7031,
          "height": 15,
          "length": 15,
          "weight": 15,
          "width": 15
        },
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null,
        "productClusterId": "135,142"
      },
      "assemblies": [],
      "attachmentOfferings": [
        {
          "name": "vtex.subscription.weekly",
          "required": false,
          "schema": {
            "vtex.subscription.key.frequency": {
              "Domain": [
                " 1 week",
                " 2 week",
                " 3 week",
                " 4 week"
              ],
              "MaximumNumberOfCharacters": 7
            }
          }
        }
      ],
      "attachments": [],
      "bundleItems": [],
      "callCenterOperator": "callCenterOp5473869",
      "commission": 0,
      "components": [],
      "costPrice": 52,
      "detailUrl": "/bay-max-9429485/p",
      "ean": null,
      "freightCommission": 0,
      "id": "1234568358",
      "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
      "isGift": false,
      "itemAttachment": {
        "content": {},
        "name": null
      },
      "listPrice": 3290,
      "lockId": "00-v502556llux-01",
      "manualPrice": null,
      "measurementUnit": "un",
      "name": "Bay Max L",
      "offerings": [],
      "params": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 3290,
      "priceDefinitions": {
        "calculatedSellingPrice": 99,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 99
          }
        ],
        "total": 99
      },
      "priceTags": [],
      "priceValidUntil": null,
      "productId": "9429485",
      "quantity": 1,
      "refId": "BIGHEROBML",
      "rewardValue": 0,
      "seller": "1",
      "sellerSku": "1234568358",
      "sellingPrice": 3290,
      "serialNumbers": "3",
      "shippingPrice": null,
      "tax": 0,
      "taxCode": null,
      "uniqueId": "87F0945396994B349158C7D9C9941442",
      "unitMultiplier": 1
    }
  ],
  "lastChange": "2019-02-06T20:46:11.7010747+00:00",
  "lastMessage": null,
  "marketingData": {
    "coupon": "sale",
    "id": "marketingData",
    "marketingTags": [
      "vtex-subscription"
    ],
    "utmCampaign": "christmas",
    "utmMedium": "utm medium",
    "utmPartner": "utm partner",
    "utmSource": "fb",
    "utmiCampaign": " ",
    "utmiPart": " ",
    "utmipage": " "
  },
  "marketplace": {
    "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
    "isCertified": null,
    "name": "luxstore"
  },
  "marketplaceItems": [],
  "marketplaceOrderId": "",
  "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
  "merchantName": "luxstore",
  "openTextField": null,
  "orderFormId": "caae7471333e403f959fa5fd66951340",
  "orderGroup": "v502556lspt",
  "orderId": "v502556llux-01",
  "origin": "Marketplace",
  "packageAttachment": {
    "packages": []
  },
  "paymentData": {
    "transactions": [
      {
        "isActive": true,
        "merchantName": "luxstore",
        "payments": [
          {
            "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
            "bankIssuedInvoiceBarCodeType": "i25",
            "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
            "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
            "billingAddress": {},
            "cardHolder": null,
            "cardNumber": null,
            "connectorResponses": {
              "Message": "logMessage",
              "ReturnCode": "200",
              "Tid": "94857956",
              "authId": "857956"
            },
            "cvv2": null,
            "dueDate": "2019-02-02",
            "expireMonth": null,
            "expireYear": null,
            "firstDigits": null,
            "giftCardAsDiscount": false,
            "giftCardCaption": null,
            "giftCardId": null,
            "giftCardName": null,
            "giftCardProvider": "presentCard",
            "group": "bankInvoice",
            "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
            "installments": 1,
            "koinUrl": "koinURL",
            "lastDigits": null,
            "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
            "paymentSystem": "6",
            "paymentSystemName": "Boleto Bancário",
            "redemptionCode": null,
            "referenceValue": 4450,
            "tid": null,
            "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
            "value": 4450
          }
        ],
        "transactionId": "418213DE29634837A63DD693A937A696"
      }
    ]
  },
  "ratesAndBenefitsData": {
    "id": "ratesAndBenefitsData",
    "rateAndBenefitsIdentifiers": []
  },
  "roundingError": 0,
  "salesChannel": "1",
  "sellerOrderId": "00-v502556llux-01",
  "sellers": [
    {
      "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName",
      "id": "1",
      "logo": "https://sellersLogo/images.png",
      "name": "Lux Store"
    }
  ],
  "sequence": "502556",
  "shippingData": {
    "address": {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "10",
      "country": "BRA",
      "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "518",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo",
      "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
    },
    "id": "shippingData",
    "logisticsInfo": [
      {
        "addressId": "-1425945657910",
        "deliveryChannel": "delivery",
        "deliveryChannels": [
          {
            "id": "delivery",
            "stockBalance": 0
          }
        ],
        "deliveryCompany": "Todos os CEPS",
        "deliveryIds": [
          {
            "accountCarrierName": "recorrenciaqa",
            "courierId": "197a56f",
            "courierName": "Todos os CEPS",
            "dockId": "1",
            "kitItemDetails": [],
            "quantity": 1,
            "warehouseId": "1_1"
          }
        ],
        "deliveryWindow": null,
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "itemIndex": 0,
        "listPrice": 1160,
        "lockTTL": "10d",
        "pickupPointId": "1_VTEX-RJ",
        "pickupStoreInfo": {
          "additionalInfo": null,
          "address": null,
          "dockId": null,
          "friendlyName": null,
          "isPickupStore": false
        },
        "polygonName": "region56",
        "price": 1160,
        "selectedSla": "Normal",
        "sellingPrice": 1160,
        "shippingEstimate": "5bd",
        "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
        "shipsTo": [
          "BRA"
        ],
        "slas": [
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Normal",
            "lockTTL": "12d",
            "name": "Normal",
            "pickupDistance": 29.861602783203125,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region13",
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "0d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Expressa",
            "lockTTL": "12d",
            "name": "Expressa",
            "pickupDistance": 29.861602783203125,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region13",
            "price": 1160,
            "shippingEstimate": "5bd",
            "transitTime": "0d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Quebra Kit",
            "lockTTL": "12d",
            "name": "Quebra Kit",
            "pickupDistance": 29.861602783203125,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region13",
            "price": 1392,
            "shippingEstimate": "2bd",
            "transitTime": "0d"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Sob Encomenda",
            "lockTTL": "12d",
            "name": "Sob Encomenda",
            "pickupDistance": 29.861602783203125,
            "pickupPointId": "1_VTEX-RJ",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": "region13",
            "price": 1392,
            "shippingEstimate": "32bd",
            "transitTime": "0d"
          }
        ],
        "transitTime": "3d",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "-1425945657910",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "10",
        "country": "BRA",
        "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
        "geoCoordinates": [],
        "neighborhood": "Botafogo",
        "number": "518",
        "postalCode": "22250-040",
        "receiverName": "Rodrigo Cunha",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo",
        "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f"
      }
    ],
    "trackingHints": null
  },
  "status": "handling",
  "statusDescription": "Preparando Entrega",
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "CurrencyDecimalDigits": 2,
      "CurrencyDecimalSeparator": ",",
      "CurrencyGroupSeparator": ".",
      "CurrencyGroupSize": 3,
      "StartsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": {
    "SubscriptionGroupId": "A64AC73C0FB8693A7ADB4AC69CA4FD5F",
    "Subscriptions": [
      {
        "ExecutionCount": 724,
        "ItemIndex": 0,
        "Plan": {
          "frequency": {
            "interval": 1,
            "periodicity": "DAILY"
          },
          "type": "RECURRING_PAYMENT",
          "validity": {
            "begin": "2022-01-10T00:00:00.0000000+00:00",
            "end": "2024-02-03T00:00:00.0000000+00:00"
          }
        },
        "PriceAtSubscriptionDate": 100
      }
    ]
  },
  "taxData": {
    "areTaxesDesignatedByMarketplace": true,
    "taxInfoCollection": [
      {
        "itemIndex": 0,
        "priceTags": [
          {
            "isPercentual": false,
            "name": "Taxes (Magazine Luisa)",
            "rawValue": "COLOCAR_O_VALOR_SEM_DECIMAL"
          }
        ],
        "sku": "COLOCAR_O_SKUID"
      }
    ]
  },
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 3290
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": 0
    },
    {
      "id": "Shipping",
      "name": "Total do Frete",
      "value": 1160
    },
    {
      "id": "Tax",
      "name": "Total da Taxa",
      "value": 0
    },
    {
      "id": "Change",
      "name": "Total das mudanças",
      "value": -3290
    }
  ],
  "value": 1160
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affiliateId|string|true|none|Corresponds to the three-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.|
|allowCancellation|boolean|true|none|When set as `true`, the order can be canceled, and when set as `false`, it is no longer possible to cancel the order.|
|allowEdition|boolean|true|none|When set as `true`, the order can be edited, and when set as `false`, it is no longer possible to edit the order.|
|authorizedDate|string|true|none|Authorized order date.|
|callCenterOperatorData|string \| null|true|none|Call center operator responsible for the order.|
|cancelReason|string \| null|true|none|Reason for order cancellation.|
|cancellationData|object|true|none|Information about order cancellation, when it applies.|
|changesAttachment|[ChangesAttachment](#schemachangesattachment)|true|none|Information about changes in the order.|
|checkedInPickupPointId|string|true|none|If the field `isCheckedIn` is set as `true`, the `checkedInPickupPointId` will retrieve the ID of the physical store where the order was made.|
|clientPreferencesData|object|true|none|Information about customer's preferences.|
|clientProfileData|[ClientProfileData](#schemaclientprofiledata)|true|none|Object with information on the client's profile.|
|commercialConditionData|string \| null|true|none|Information about commercial conditions.|
|creationDate|string|true|none|Order's creation date.|
|customData|string \| null|true|none|Custom information in the order. This field is useful for storing data not included in other fields, for example, a message for a gift or a name to be printed in a shirt.|
|followUpEmail|string|true|none|Email of the store's employee responsible for managing the order.|
|giftRegistryData|string \| null|true|none|Information about gift list, when it applies.|
|hostname|string|true|none|Account Hostname registered in License Manager.|
|invoiceData|object \| null|true|none|Information pertinent to the order's invoice.|
|invoicedDate|string \| null|true|none|Order's invoice date.|
|isCheckedIn|boolean|true|none|This field is set `true` when the order was made via inStore and `false` when it was not.|
|isCompleted|boolean|true|none|When set as `true`, the order's payment has been settled, and when set as `false`, it has not been settled yet.|
|itemMetadata|object|true|none|Metadata information about the order's items.|
|items|[[Item](#schemaitem)]|true|none|Information about order's items.|
|lastChange|string|true|none|Order's last change date.|
|lastMessage|string \| null|true|none|Last sent transactional message.|
|marketingData|object|true|none|Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs.|
|marketplace|[Marketplace](#schemamarketplace)|true|none|Details about the marketplace related to the order.|
|marketplaceItems|[string]|true|none|Marketplace details object.|
|marketplaceOrderId|string|true|none|Marketplace order ID.|
|marketplaceServicesEndpoint|string|true|none|Marketplace services endpoint.|
|merchantName|string|true|none|Name of the merchant.|
|openTextField|string \| null|true|none|Optional field with order's additional information. This field must be filled in using the following format: <br>```<br>{<br>    "fieldExample": "ValueExample"<br>  }<br>```<br>|
|orderFormId|string|true|none|[Order form](https://developers.vtex.com/docs/guides/orderform-fields) ID. |
|orderGroup|string|true|none|Order's group ID.|
|orderId|string|true|none|Order ID is a unique code that identifies an order.|
|origin|string|true|none|Order Origin, if `Marketplace` or `Fulfillment`.|
|packageAttachment|[PackageAttachment](#schemapackageattachment)|true|none|Package object populated after order invoiced.|
|paymentData|[PaymentData](#schemapaymentdata)|true|none|Object with information about the payment.|
|ratesAndBenefitsData|[RatesAndBenefitsData](#schemaratesandbenefitsdata)|true|none|Information on promotions and taxes that apply to the order.|
|roundingError|integer(int32)|true|none|Rounding error total amount, if it applies. For example, in orders with a discount over non-integer multiplier items, the rounding price is performed per item, not after the sum of all items. That can cause a difference in the total discount amount, which is informed in this field.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.|
|sellerOrderId|string|true|none|ID of the seller related to the order. It can be a VTEX seller or an external seller.|
|sellers|[[Seller](#schemaseller)]|true|none|List of all sellers associated with the order.|
|sequence|string|true|none|Sequence is a six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.|
|shippingData|[ShippingData](#schemashippingdata)|true|none|Object containing shipping data.|
|status|string|true|none|Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).|
|statusDescription|string|true|none|**Deprecated.** `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.|
|storePreferencesData|[StorePreferencesData](#schemastorepreferencesdata)|true|none|Object with data from the store's configuration - stored in VTEX's License Manager.|
|subscriptionData|object \| null|true|none|Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453).|
|taxData|object|true|none|Order's tax information.|
|totals|[[Total](#schematotal)]|true|none|List with details about orders' totals.|
|value|integer(int32)|true|none|Order's total amount.|

<h2 id="tocS_Userorderslist">Userorderslist</h2>
<!-- backwards compatibility -->
<a id="schemauserorderslist"></a>
<a id="schema_Userorderslist"></a>
<a id="tocSuserorderslist"></a>
<a id="tocsuserorderslist"></a>

```json
{
  "facets": [],
  "list": [
    {
      "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": "2019-01-28T20:33:04+00:00",
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2019-01-28T20:09:43+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502556llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Boleto Bancário",
      "salesChannel": "1",
      "sequence": "502556",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 1,
      "totalValue": 1160,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2018-08-28T17:42:40+00:00",
      "currencyCode": "BRL",
      "items": null,
      "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502449llux-02 Resumo Itens R$ 1.178,98 Entrega R$ 6,90 Total R$ 1.185,88",
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": null,
      "orderId": "v502449llux-02",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": "Promissory",
      "salesChannel": "1",
      "sequence": "502452",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 12,
      "totalValue": 118588,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2018-08-28T17:42:28.9171556+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Mangueira Reservatório Ao Cavalete",
          "ean": null,
          "id": "195",
          "price": 7390,
          "productId": "134",
          "quantity": 1,
          "refId": "TE3121110",
          "seller": "1",
          "sellingPrice": 7390
        },
        {
          "description": "Mangueira Filtro",
          "ean": null,
          "id": "238",
          "price": 5190,
          "productId": "162",
          "quantity": 1,
          "refId": "XC459N610CA",
          "seller": "1",
          "sellingPrice": 5190
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v502449llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "502449",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 21526180,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2017-07-29T19:24:20.7444363+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2017-07-25T23:17:36.7963248+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Aquecedor Britania 1500 Branco",
          "ean": "1235567890143",
          "id": "1234568212",
          "price": 35599,
          "productId": "1000200",
          "quantity": 1,
          "refId": "branquinho",
          "seller": "1",
          "sellingPrice": 35599
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v502058llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "502058",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 35599,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2017-06-27T13:59:49.7705236+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2017-06-26T16:57:58.9986524+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Boneco do Mário",
          "ean": "bonecomario",
          "id": "1234568183",
          "price": 150363,
          "productId": "1000257",
          "quantity": 1,
          "refId": "bonecomario",
          "seller": "1",
          "sellingPrice": 150363
        },
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 1,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v501538llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "501538",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 151262,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-12-02T08:00:00+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-11-21T19:57:54.0415289+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 2,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v501020llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "501020",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 3190,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-10-10T14:23:17.1897068+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-10-10T17:19:30.8562035+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "SMARTPHONE SAMSUNG GALAXY S7 FLAT SM-G930FZDLZTO 32GB DOURADO TELA 5.1\" 4G CÂMERA 12 MP",
          "ean": null,
          "id": "1234568028",
          "price": 299000,
          "productId": "1000203",
          "quantity": 1,
          "refId": "testefnac",
          "seller": "1",
          "sellingPrice": 299000
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500973llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500973",
      "status": "handling",
      "statusDescription": "Preparando Entrega",
      "totalItems": 0,
      "totalValue": 299900,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": "2016-10-10T14:13:34.4927265+00:00",
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-10-10T17:07:59.0889392+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Camiseta GG",
          "ean": null,
          "id": "1234567894",
          "price": 899,
          "productId": "1000187",
          "quantity": 1,
          "refId": "abc1234",
          "seller": "1",
          "sellingPrice": 899
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500970llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500970",
      "status": "invoiced",
      "statusDescription": "Faturado",
      "totalItems": 0,
      "totalValue": 1799,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-08-17T18:35:04.8659804+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Botin Futbol Adidas 11Questra Fg Cesped Hombre Absolut - M",
          "ean": "absolutm",
          "id": "549",
          "price": 1000,
          "productId": "9",
          "quantity": 1,
          "refId": null,
          "seller": "1",
          "sellingPrice": 1000
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500890llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500890",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 1000,
      "workflowInErrorState": false,
      "workflowInRetry": false
    },
    {
      "ShippingEstimatedDate": null,
      "ShippingEstimatedDateMax": null,
      "ShippingEstimatedDateMin": null,
      "affiliateId": "",
      "authorizedDate": null,
      "callCenterOperatorName": null,
      "clientName": "Cunha VTEX",
      "creationDate": "2016-07-29T00:20:47.7736718+00:00",
      "currencyCode": null,
      "items": [
        {
          "description": "Rooibos Lavanda - Pouch - 50gr",
          "ean": "198",
          "id": "98",
          "price": 5200,
          "productId": "1000025",
          "quantity": 1,
          "refId": "10098",
          "seller": "1",
          "sellingPrice": 5200
        }
      ],
      "lastMessageUnread": null,
      "listId": null,
      "listType": null,
      "marketPlaceOrderId": "",
      "orderId": "v500838llux-01",
      "orderIsComplete": true,
      "origin": "Marketplace",
      "paymentNames": null,
      "salesChannel": "1",
      "sequence": "500838",
      "status": "canceled",
      "statusDescription": "Cancelado",
      "totalItems": 0,
      "totalValue": 6200,
      "workflowInErrorState": false,
      "workflowInRetry": false
    }
  ],
  "paging": {
    "currentPage": 1,
    "pages": 10,
    "perPage": 2,
    "total": 19
  },
  "stats": {
    "stats": {
      "totalItems": {
        "Count": 19,
        "Facets": {},
        "Max": 0,
        "Mean": 0,
        "Min": 0,
        "Missing": 0,
        "StdDev": 0,
        "Sum": 0,
        "SumOfSquares": 0
      },
      "totalValue": {
        "Count": 19,
        "Facets": {},
        "Max": 0,
        "Mean": 0,
        "Min": 0,
        "Missing": 0,
        "StdDev": 0,
        "Sum": 0,
        "SumOfSquares": 0
      }
    }
  }
}
```

Order list object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[string]|true|none|none|
|list|[[List1](#schemalist1)]|true|none|List with user's orders details.|
|paging|[Paging](#schemapaging)|true|none|none|
|stats|[Stats2](#schemastats2)|true|none|none|
