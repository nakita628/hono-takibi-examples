<h1 id="orders-api-pii-version">Orders API (PII version) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Endpoints that deal with order management. New version of the orders API.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (VtexIdclientAutCookie)
    - Parameter Name: **VtexIdclientAutCookie**, in: header.

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="orders-api-pii-version-orders">Orders</h1>

## List orders

<a id="opIdListOrders2"></a>

> Code samples

```bash
curl https://example.com/api/orders/extendsearch/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "f_creationDate": "creationDate:[2021-11-01T00:00:00.000Z TO 2022-11-10T02:00:00.000Z]",
    "page": 1,
    "per_page": 15,
    "q": "Postman Test"
  }'
```

`POST /api/orders/extendsearch/orders`

Retrieves a list of orders according to the filters described below.

> This endpoint returns masked order data.

> This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) for this purpose.

This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.

## Do not use request for integrations
> This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies or become unavailable in periods of peak order volume. In other words, **order integrations built with the List orders endpoint are not reliable** and **will not be supported**. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

## Throtling
Each account can make up to 5000 requests per minute.

## Request parameters allowed

| Attribute    | Type        | Description |
| --------------- |:---------:| -------------------------------------------------------------------------------------------:|
| `orderBy` | string | Order Field and Order Type concatenated `orderBy={{OrderField}},{{OrderType}}`  |
| `OrderField` | string | Order Field expected values: `creationDate`,`orderId`,`items`,`totalValue` and `origin` |
| `OrderType` | string | Order Type expected values: `asc` and `desc`  |


## Sorting Examples


CreationDate:

    `/api/oms/pvt/orders?orderBy=creationDate,desc`


OrderID:

    `/api/oms/pvt/orders?orderBy=orderId,desc`


Items:

    `/api/oms/pvt/orders?orderBy=items,asc`


TotalValue:

    `/api/oms/pvt/orders?orderBy=totalValue,desc`


Origin: 

    `/api/oms/pvt/orders?orderBy=origin,asc`




| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `page` | integer | Page Number  |

## Pagination Examples:

    `/api/oms/pvt/orders?page=3`



| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `per_page` | integer | Quantity orders per page  |

Quantity per Page Examples:

    `/api/oms/pvt/orders?per_page=15`





<div class="alert alert-info">Pagination Limit: The limit of pages that can be requested is 30.
</div>



## Time zone query 

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `utc` | integer | Time Zone. By including this parameter alone in your query, the call will not convert the UTC nor show the number of orders set for that UTC. To filter orders with the desired UTC, you must also modify date and time in the `f_creationDate=creationDate:` parameter.  |

Time Zone Example:

    `/api/oms/pvt/orders?utc=-0200`




## Request filters 


## Fulltext


| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `q` | string | Fulltext accepts Order Ids, Client E-mail, Client Document and Client Name  |

> The `+` caracter isn't allowed in Fulltext Search


Fulltext filter Examples:

OrderID: 
    
    `/api/oms/pvt/orders?q=v212333lux-02`


Email:
    
    `/api/oms/pvt/orders?q=rodrigo.cunha@vtex.com`


Document: 
    
    `/api/oms/pvt/orders?q=21133355524`


ClientName:

    `/api/oms/pvt/orders?q=Cunha`




## Shipping Estimate

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_shippingEstimate` | string | Concatened value of quantity days and sufix `.days`  |




Shipping Estimate filter Examples:


Next 7 days:

    `/api/oms/pvt/orders?f_shippingEstimate=7.days`


Tomorrow: 

    `/api/oms/pvt/orders?f_shippingEstimate=1.days`


Today:
    
    `/api/oms/pvt/orders?f_shippingEstimate=0.days`


Late:
    
    `/api/oms/pvt/orders?f_shippingEstimate=-1.days`




## Invoiced Date

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_invoicedDate` | string | Concatened value sufix `invoicedDate` and range date in Timestamp format  |



Invoiced Date filter Examples:

1 Day: 

    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`


1 Month: 
    
    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`


1 Year:

    `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`



## Order Date

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_creationDate` | string | Concatened value suffix `creationDate` and range date in Timestamp format  |



Order Date filter Examples:

1 Day:

    `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`


1 Month:

    `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`


1 Year:

    `/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`




## Authorized Date

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_authorizedDate` | string | Concatened value suffix `authorizedDate` and range date in Timestamp format  |



Authorized Date filter Examples:

1 Day:

    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`


1 Month:

    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`


1 Year:

    `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`




## UTMs

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_UtmSource` | string | UTM Source value  |



Channels filter Examples:

    `/api/oms/pvt/orders?f_UtmSource=buscape_campaign`




## Seller

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_sellerNames` | string | Seller Name value  |



Seller filter Examples:

    `/api/oms/pvt/orders?f_sellerNames=Fast+Shop`




## Call Center Operator

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_callCenterOperatorName` | string | Call Center Operator Value  |



Call Center Operator filter Examples:

    `/api/oms/pvt/orders?f_callCenterOperatorName=Operator%20Name`




## Sales Channel Name

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_salesChannel` | string | Sales Channel Name Value  |



Sales Channel Name filter Examples:

    `/api/oms/pvt/orders?f_salesChannel=Main`





## Sales Channel ID

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `salesChannelId` | string | Sales Channel ID Value  |



Sales Channel ID filter Examples:

    `/api/oms/pvt/orders?salesChannelId=1`





## Affiliate ID

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_affiliateId` | string | Affiliate ID Value  |



Affiliate ID filter Examples:

    `/api/oms/pvt/orders?f_affiliateId=WLM`




## Order Status 

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_status` | string | Order Status Value  |



| Order Status avaible to filter    |
| --------------------- |
| `waiting-for-sellers-confirmation` | 
| `payment-pending` | 
| `payment-approved` | 
| `ready-for-handling` | 
| `handling` | 
| `invoiced` | 
| `canceled` | 


Order Status filter Examples:

    `/api/oms/pvt/orders?f_status=ready-for-handling`




## Order Status Description

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_statusDescription` | string | Order Status Description Value  |





| Order Status Description avaible to filter |
| --------------------- |
| `Aguardando+autorização+para+despachar` | 
| `Pagamento+Pendente` | 
| `Pagamento+Aprovado` | 
| `Pronto+para+o+manuseio` | 
| `Preparando+Entrega` | 
| `Faturado` | 
| `Cancelado` | 

Order Status Description filter Examples:

    `/api/oms/pvt/orders?f_statusDescription=Pronto+para+o+manuseio`





## Order Situation

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `incompleteOrders` | boolean | If is a Incomplete Order  |


> know more about [Incomplete Orders in VTEX Help](https://help.vtex.com/en/tutorial/understanding-incomplete-orders)

Order Situation filter Examples:

    `/api/oms/pvt/orders?incompleteOrders=true`





## Error Situation

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `incompleteOrders` | boolean | Error Situation Type  |



| Error Situation Values avaible to filter |
| ------- |
| `all` | 
| `perm` | 
| `temp` |  


Error Situation filter Examples:

    `/api/oms/pvt/orders?filterError=all`






## Payment Type Name

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_paymentNames` | string | Payment Type Value  |



Payment Type Name filter Examples:

    `/api/oms/pvt/orders?f_paymentNames=Visa`





## Rates and Benefits Name

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `f_RnB` | string | Rates and Benefits Name  |



Rates and Benefits filter Examples:

    `/api/oms/pvt/orders?f_RnB="Free+Shipping"`




## Search Field

| Attribute    | Type      | Description |
| ------------ |:---------:| -----------:|
| `searchField` | string | Affiliate ID Value  |
| `sku_Ids&sku_Ids` | integer | SKU ID  |
| `listId&listId` | integer | Gift List ID  |
| `tid&tid` | integer | Transaction ID (TID)  |
| `pci_tid&pci_tid` | integer | PCI Connector's Transaction ID (TID)  |
| `paymentId&paymentId` | integer | Payment ID (PID)  |
| `nsu&nsu` | integer | Connector's NSU  |



Search Field filter Examples:

SKU ID:
    
    `/api/oms/pvt/orders?searchField=sku_Ids&sku_Ids=11223`



Gift List ID:
    
    `/api/oms/pvt/orders?searchField=listId&listId=11223`


    
Transaction ID (TID):
    
    `/api/oms/pvt/orders?searchField=tid&tid=54546300238810034995829230012`


    
PCI Connector's Transaction ID (TID):

    `/api/oms/pvt/orders?searchField=pci_tid&pci_tid=7032909234899834298423209`


    
Payment ID (PID):
    
    `/api/oms/pvt/orders?searchField=paymentId&paymentId=2`


    
Connector's NSU:
    
    `/api/oms/pvt/orders?searchField=nsu&nsu=2437281`
\n\r\n\r## Response objects\n\r\n\r,
**Response object has the following properties:**


| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `list` | object | Order List Object |
| `shippingEstimateDate` | string | Estimate Shipping Date |
| `affiliateId` | string | Seller Name who was responsible for the order |
| `authorizedDate` | string | Authorized Order Date |
| `callCenterOperatorData` | string | Call Center Operator responsible for the order |
| `name` | string | Client Name|
| `creationDate` | string | Order Creation Date |
| `currencyCode` | string | Currency Code in ISO 4217  |
| `items` | object | Obsolete Field  |
| `lastMessageUnread` | string | Last sent transactional message  |
| `listId` | string | Releated Gift List Id |
| `listType` | string | Releated Gift List Type |
| `marketplaceOrderId` | string | Marketplace Order Id |
| `orderId` | string | Change receipt order Id |
| `orderIsComplete` | boolean | If is a Order Completed |
| `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
| `paymentNames` | string | Payment System Name |
| `salesChannel` | string | Order Sales Channel Id |
| `sequence` | string | Order Sequence ID |
| `status` | string | Order Status |
| `statusDescription` | string | Status Description |
| `totalItems` | integer | Total Order Items |
| `totalValue` | integer | Total Value Amount |
| `workflowInErrorState` | boolean | If is a Work Flow Error |
| `workflowInRetry` | boolean | If is in a Work Flow Retry |
| `paging` | object | Paging Details Object |
| `pages` | integer | Paging Total Pages |
| `perPage` | integer | Paging total per Page |
| `total` | integer | Total Result |
| `stats` | object | Results segmented by `totalItems` and `totalValue` |
| `totalItems` | integer | Total Order Items segmeted by `currencyCode` and `origin`|
| `totalValue` | integer | Total Value Amount segmeted by `currencyCode` and `origin`|
| `currencyCode` | string | Currency Code in ISO 4217  |
| `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
| `Count` | integer | Orders Count |
| `Facets` | object | Grouping Object |
| `Max` | object | Paging Details Object |
| `Mean` | object | Paging Details Object |
| `Min` | object | Paging Details Object |
| `Missing` | object | Paging Details Object |
| `StdDev` | object | Paging Details Object |
| `Sum` | object | Paging Details Object |
| `SumOfSquares` | object | Paging Details Object |

> Body parameter

```json
{
  "f_creationDate": "creationDate:[2021-11-01T00:00:00.000Z TO 2022-11-10T02:00:00.000Z]",
  "page": 1,
  "per_page": 15,
  "q": "Postman Test"
}
```

<h3 id="list-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|f_hasInputInvoice|query|boolean|false|Filters list to return only orders with non `null` values for the `invoiceInput` field.|
|body|body|object|false|none|
|» f_creationDate|body|string|true|Concatened value sufix {{creationDate}} and range date in Timestamp format.|
|» page|body|integer|true|Number of the page to be retrieved.|
|» per_page|body|integer|true|Number of orders per page.|
|» q|body|string|false|Full-text search for the orders.|

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

<a id="opIdGetOrder2"></a>

> Code samples

```bash
curl https://example.com/api/orders/pvt/document/70caf3941s6df1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/orders/pvt/document/{orderId}`

Retrieves order details by searching a specific order ID.

>If you wish to retrieve unmasked data, use the `reason` parameter.

> The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.

> Throttling: Each account can make up to 5000 requests per minute.

## Request object has the following properties:

| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `orderId` | string | Order Id |


## Response object has the following properties:


| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `affiliateId` | string | Seller Name who was responsible for the order |
| `allowCancellation` | boolean | If Cancellation is allowed |
| `allowEdition` | boolean | If Order Edition is allowed |
| `approvedBy` | string | User who approved the order |
| `authorizedDate` | string | Authorized Order Date |
| `callCenterOperatorData` | string | Call Center Operator responsible for the order |
| `cancelReason` | string | Cancel Reason |
| `cancelledBy` | string | User who Cancelled the order |
| `changesAttachment` | object | Change details object |
| `changesData` | object | Array with each change |
| `discountValue` | integer | Change Discount Value |
| `incrementValue` | integer | Change Increment Value |
| `itemsAdded` | object | Added items details |
| `itemsRemoved` | object | Removed items details |
| `id` | integer | Changed SKU ID |
| `name` | string | Changed SKU Name |
| `price` | integer | Changed SKU Price |
| `quantity` | integer | Changed SKU Quantity |
| `unitMultiplier` | integer | Changed SKU Unit Multiplier |
| `reason` | string | Change Reason |
| `receipt` | object | Change receipt details object |
| `date` | string | Change receipt date |
| `orderId` | string | Change receipt order Id |
| `receipt` | object | Change receipt ID |
| `id` | string | Object Id, expect value "changeAttachment" |
| `clientProfileData` | object | Object with all Cliente Profile Data |
| `corporateDocument` | string | Client Corporate Document |
| `corporateName` | string | Client Corporate Name |
| `corporatePhone` | string | Cliente Corporate Telephone |
| `customerClass` | string | Customer class |
| `document` | string | Client Document |
| `documentType` | string | Client Document Type |
| `email` | string | Client e-mail |
| `firstName` | string | Client First Name |
| `id` | string | Object ID, expected value "clientProfileData" |
| `isCorporate` | string | If the Client is a Corporate Client |
| `lastName` | string | Client Last Name|
| `phone` | string | Client Telephone |
| `stateInscription` | string | Client Corporate Inscription |
| `tradeName` | string | Client Corporate Trade Name |
| `userProfileId` | string | Client User Profile ID |
| `commercialConditionData` | object | Commercial condition information, including `"Id"`, `"parentOrderId"`, and `"reason"` |
| `creationDate` | string | Order Creation Date |
| `customData` | object | Custom Data Object |
| `customApps` | object | Custom apps details object |
| `fields` | object | Custom app fields |
| `id` | string | Custom App ID |
| `major` | integer | Major |
| `emailTracked` | string | Client Conversation Tracker email  |
| `followUpEmail` | string | Responsible store e-mail |
| `giftRegistryData` | object | Gift registry list information, including `"addressId"` (object), `"description"` (string), and `"giftRegistryId"` (string) |
| `hostname` | string | Account hostname registered in License Manager |
| `invoiceData` | object | Information pertinent to the order's invoice |
| `invoicedDate` | string | Invoice Date |
| `isCheckedIn` | boolean | True if order is from inStore |
| `isCompleted` | boolean | True if the order is completed |
| `items` | object | Order items object |
| `additionalInfo` | string | Order item additional info |
| `brandId` | string | Brand ID |
| `brandName` | string | Brand name |
| `categoriesIds` | string | Item category ID |
| `commercialConditionId` | string | Invoice date |
| `dimension` | object | Item dimension object |
| `cubicweight` | number | Item cubic weight |
| `height` | number | Item height |
| `length` | number | Item length |
| `weight` | number | Item weight |
| `width` | number | Item width |
| `offeringInfo` | string | Extra information on offering |
| `offeringType` | string | Offering type |
| `offeringTypeId` | string | ID of offering type |
| `productClusterId` | string | All releated product clusters |
| `attachments` | object | Attachents Array |
| `content` | object | Attachment Content Custom Field |
| `name` | string | Attachment Name |
| `bundleItems` | object | Invoice date |
| `commission` | string | Comission value registered to Seller |
| `components` | object | If item is a kit, contains components information |
| `detailUrl` | string | Product Slug URL |
| `ean` | string | SKU EAN |
| `freightCommission` | integer | Comission value registered to seller |
| `id` | string | SKU Id |
| `imageUrl` | string | SKU Image URL |
| `isGift` | string | If this item is a gift in order context |
| `itemAttachment` | object | Attachment Object |
| `content` | object | Attachment Content Array |
| `name` | string | Attachment Name |
| `listPrice` | integer | Item List Price |
| `lockId` | string | Reservation ID |
| `manualPrice` | string | Manually inserted price, if there is one. |
| `measurementUnit` | string | Item measurement unit |
| `name` | string | Item name |
| `offerings` | object | Offerings information |
| `params` | object | "ContextParameter" hashset with `"name"` and `"value"` |
| `preSaleDate` | string | Item pre sale date |
| `price` | integer | Item Price |
| `items[].priceDefinition`                        | Object   | Price information for all units of a specific item.                                                                                                                  |
| `items[].priceDefinition.total`                  | Integer  | Total value for all units of the item in cents.                                                                                                                      |
| `items[].priceDefinition.calculatedSellingPrice` | Integer  | Item's calculated unitary selling price in cents.                                                                                                                    |
| `items[].priceDefinition.sellingPrices`          | Array    | Array of objects, each containing `value` (in cents) and `quantity` for the different rounding instances that can be combined to form the correctly rounded `total`. |
| `priceTags` | object | Object with all price modifiers |
| `identifier` | string | Price Tag ID |
| `isPercentual` | boolean | Indicates whether the price tag is a percentual modifier |
| `name` | string | Price tag name |
| `rawValue` | string | Price tag raw value |
| `value` | string | Price tag value |
| `priceValidUntil` | string | Price expiration date |
| `productId` | string | Item product ID |
| `quantity` | integer | Item quantity |
| `refId` | string | Item reference ID |
| `rewardValue` | integer | Item reward value |
| `seller` | string | Item seller |
| `sellerSku` | string | Invoice Date |
| `sellingPrice` | integer | Item selling price. For more accurate information, see the `priceDefinition` field |
| `shippingPrice` | string | Item Shipping Price |
| `tax` | integer | Item Tax |
| `taxCode` | string | Item Tax Code |
| `uniqueId` | string | Item Order Unique ID |
| `unitMultiplier` | integer | Item Unit Multipler |
| `lastChange` | string | Order Last Change Date |
| `lastMessage` | string | initial excerpt from last message sent to the customer |
| `marketingData` | string | Marketing Data Object |
| `coupon` | string | Order Disccount Coupon |
| `id` | string |  Object ID, expected value "marketingData" |
| `marketingTags` | object | Marketing Tags Array |
| `utmCampaign` | string | UTM Campaign Parameters |
| `utmMedium` | string | UTM Medium Parameters |
| `utmPartner` | string | UTM Source Parameters |
| `utmSource` | string | UTM Source Parameters|
| `utmiCampaign` | string | UTMI Campaign Internal Parameters |
| `utmiPart` | string | UTMI Part Internal Parameters |
| `utmipage` | string | UTMI Page Internal Parameters |
| `marketplace` | object | Marketplace Details Object |
| `baseURL` | string | Marketplace Base URL |
| `isCertified` | string | If is a Certified Marketplace |
| `name` | string | Marketplace Name |
| `marketplaceItems` | object | Marketplace Details Object |
| `marketplaceOrderId` | string | Marketplace Order Id |
| `marketplaceServicesEndpoint` | string | Marketplace Services Endpoint |
| `merchantName` | string | Merchant Name |
| `openTextField` | object | Open Text Field Object |
| `value` | string | Open Text Field Value |
| `orderFormId` | string | Order Form Id |
| `orderGroup` | string | Order Group Id |
| `orderId` | string | Order Id |
| `origin` | string | Order Origin: "Marketplace", "Fulfillment", or "Chain" (for the third level in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4?&utm_source=autocomplete#) purchase). |
| `packageAttachment` | object | Package Object |
| `packages` | object | Packages Details Object, populated after order invoiced |
| `cfop` | string | Fiscal code for operations and installments |
| `courier` | string | Package selected Courier |
| `courierStatus` | string | Package Tracking Status |
| `data` | object | Package Tracking Timeline |
| `finished` | string | If the delivery are finished |
| `status` | string | Courier Status |
| `embeddedInvoice` | string | XML of the invoice |
| `invoiceKey` | string | Invoice Credencial Key |
| `invoiceNumber` | string | Package Invoice Number |
| `invoiceUrl` | string | Package Invoice URL |
| `invoiceValue` | string | Package Invoice Value |
| `issuanceDate` | string | Package Issuance Date |
| `items` | string | Items Package Array |
| `description` | string | Item Desciprtion |
| `itemIndex` | string | Item Index |
| `price` | string | Item Price |
| `quantity` | string | Item Quantity |
| `unitMultiplier` | string | Unit Multiplier |
| `trackingNumber` | string | Package Tracking Number |
| `trackingUrl` | string | Tracking Order URL |
| `type` | string | Invoice Type, expected values "Output" and "Input" |
| `paymentData` | object | Payment Object |
| `transactions` | object | Transactions Object |
| `isActive` | boolean | If the payment is Active |
| `merchantName` | string | Merchant Name|
| `payments` | object | Payment Object |
| `cardHolder` | string | Payment Card Holder |
| `connectorResponses` | object | Connector Responses Object |
| `billingAddress` | object | Billing Address information |
| `Message` | string | Connector Responses Message |
| `ReturnCode` | string | Connector Return Code |
| `Tid` | string | Connector Transaction ID |
| `acquirer` | string | Connector acquirer |
| `authId` | string | Connector authorization ID |
| `dueDate` | string | Payment due date |
| `firstDigits` | string | Payment card first digits |
| `giftCardCaption` | string | Gift card caption |
| `giftCardId` | string | Gift card ID |
| `giftCardName` | string | Gift card name |
| `group` | string | Payment group |
| `id` | string | Payment ID |
| `installments` | string | Payment installments quantity |
| `lastDigits` | string | Payment card last digits |
| `paymentSystem` | string | Payment system type ID |
| `paymentSystemName` | string | Payment system name |
| `redemptionCode` | string | Gift card redemption code |
| `referenceValue` | string | Payment reference value |
| `tid` | string | Payment transaction ID |
| `url` | string | Payment URL |
| `value` | string | Payment value with interest if it applies |
| `transactionId` | string | Transaction Id |
| `ratesAndBenefitsData` | string | Rates and Benefits Data Object |
| `id` | string |  Object ID, expected value "ratesAndBenefitsData" |
| `rateAndBenefitsIdentifiers` | object | Rates and Benefits Details Object |
| `additionalInfo` | string |  Rates and Benefits Additional Info |
| `description` | string | Rates and Benefits Description |
| `featured` | string |  If is allowed to acumulate the Rates and Benefits |
| `matchedParameters` | object | March Parameters Array |
| `name` | string |  Rates and Benefits Name |
| `roundingError` | integer | Rounding Error Total Amount  |
| `salesChannel` | string | Order Sales Channel Id |
| `sellerOrderId` | string | Order Seller Id |
| `sellers` | object | Sellers Array |
| `id` | string | Seller Id |
| `logo` | string | URL Seller Logo |
| `name` | string | Seller Name |
| `sequence` | string | Order Sequence ID |
| `shippingData` | object | Shipping Data Object |
| `address` | object | Shipping Address |
| `addressId` | string | Shipping Address Id |
| `addressType` | string | Shipping Address Type |
| `city` | string | Shipping City |
| `complement` | string | Shipping Complement |
| `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
| `geoCoordinates` | object | Shipping Geo Coordinates Array |
| `neighborhood` | string | Shipping Neighborhood |
| `number` | string | Shipping Number |
| `postalCode` | string | Shipping Postal Code |
| `receiverName` | string | Shipping Receiver Name |
| `reference` | string | Shipping Reference |
| `state` | string | Shipping State |
| `street` | string | Shipping Street |
| `id` | string | Object ID, expected value "shippingData"|
| `logisticsInfo` | object | Logistics Info Object |
| `addressId` | string | Adress Id |
| `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
| `deliveryCompany` | string | Courier Company Name |
| `deliveryIds` | object | Delivery Ids Object |
| `courierId` | string | Courier Id |
| `courierName` | string | Courier Name |
| `dockId` | string | Releated Dock Id |
| `quantity` | integer | Items Quantity |
| `warehouseId` | string | Releated Warehouse Id |
| `deliveryWindow` | object | Delivery Window Object |
| `endDateUtc` | string | Delivery Date End in UTC  |
| `price` | string | Delivery Window Cost |
| `startDateUtc` | string | Delivery Date Starts in UTC |
| `itemIndex` | integer | Logistic Info Item Index |
| `listPrice` | integer | Logistic Info Item List Price |
| `lockTTL` | string | Stock reservation waiting period |
| `pickupStoreInfo` | object | Pickup Store Info Object |
| `additionalInfo` | string | Pickup Store Additional Info |
| `address` | string | Pickup Store Address |
| `dockId` | string | Pickup Store Releated Dock Id |
| `friendlyName` | string | Pickup Store Friendly Name |
| `isPickupStore` | boolean | If is a Pickup Store |
| `polygonName` | string | Releated Polygom Name |
| `price` | integer | Logistic Info Item Price |
| `selectedSla` | string | Selected SLA |
| `sellingPrice` | integer | Logistic Info Item Selling Price |
| `shippingEstimate` | string | Estimate Shipping Duration |
| `shippingEstimateDate` | string | Estimate Shipping Date |
| `shipsTo` | object | Shipping Country in ISO 3166 ALPHA-3 abbreviation |
| `slas` | object | SLAs Object |
| `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
| `deliveryWindow` | object | Delivery Window Object |
| `endDateUtc` | string | Delivery Date End in UTC  |
| `price` | string | Delivery Window Cost |
| `startDateUtc` | string | Delivery Date Starts in UTC |
| `id` | string | SLA Id |
| `pickupStoreInfo` | object | Pickup Store Details Object |
| `additionalInfo` | string | Pickup Store Additional Info |
| `address` | string | Pickup Store Address |
| `dockId` | string | Pickup Store releated Dock Id  |
| `friendlyName` | string | Pickup Store Friendly Name |
| `isPickupStore` | boolean | If is a Pickup Store |
| `polygonName` | string | Releated Polygon Name |
| `price` | integer | SLA Price |
| `shippingEstimate` | string | SLA Shipping Estimate |
| `selectedAddresses` | object | Selected Address Details Object |
| `addressId` | string | Shipping Address Id |
| `addressType` | string | Shipping Address Type |
| `city` | string | Shipping City |
| `complement` | string | Shipping Complement |
| `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
| `geoCoordinates` | object | Shipping Geo Coordinates Array |
| `neighborhood` | string | Shipping Neighborhood |
| `number` | string | Shipping Number |
| `postalCode` | string | Shipping Postal Code |
| `receiverName` | string | Shipping Receiver Name |
| `reference` | string | Shipping Reference |
| `state` | string | Shipping State |
| `street` | string | Shipping Street |
| `trackingHints` | array | Array of tracking hint objects, containing `"courierName"`, `"trackingId"`, `"trackingLabel"`, and `"trackingUrl"` |
| `status` | string | Order Status |
| `statusDescription` | string | Status Description |
| `storePreferencesData` | object | Store Preferences Data Object |
| `countryCode` | string | Country Code in ISO 3166 ALPHA-3 abbreviation |
| `currencyCode` | string | Currency Code in ISO 4217  |
| `currencyFormatInfo` | object | Currency Format Info Object |
| `CurrencyDecimalDigits` | integer | Currency Decimal Digits |
| `CurrencyDecimalSeparator` | string | Currency Decimal Separator |
| `CurrencyGroupSeparator` | string | Currency Group Separator |
| `CurrencyGroupSize` | integer | Currency Group Size |
| `StartsWithCurrencySymbol` | boolean | If Starts With Currency Symbol |
| `currencyLocale` | integer | LCID Decimal |
| `currencySymbol` | string | Currency Symbol |
| `timeZone` | string | Order Time Zone |
| `totals` | object | Totals Object |
| `id` | string | Totals Ids, expected values: "Items", "Discounts", "Shipping" and "Tax" |
| `name` | string | Totals ID Description |
| `value` | integer | Totals Value |
| `value` | integer | Order Value |


<h3 id="get-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID of the order.|
|reason|query|string|false|Reason for requesting unmasked data.|

> Example responses

> 200 Response

```json
{
  "affiliateId": "",
  "allowCancellation": false,
  "allowEdition": false,
  "approvedBy": null,
  "authorizedDate": "2019-01-28T20:33:04+00:00",
  "callCenterOperatorData": null,
  "cancelReason": null,
  "cancelledBy": null,
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
      "attachments": [],
      "bundleItems": [],
      "commission": 0,
      "components": [],
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
      "priceDefinitions": null,
      "priceTags": [],
      "priceValidUntil": null,
      "productId": "9429485",
      "quantity": 1,
      "refId": "BIGHEROBML",
      "rewardValue": 0,
      "seller": "1",
      "sellerSku": "1234568358",
      "sellingPrice": 3290,
      "shippingPrice": null,
      "tax": 0,
      "taxCode": null,
      "uniqueId": "87F0945396994B349158C7D9C9941442",
      "unitMultiplier": 1
    }
  ],
  "lastChange": "2019-02-06T20:46:11.7010747+00:00",
  "lastMessage": null,
  "marketingData": null,
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
            "cardHolder": null,
            "connectorResponses": {},
            "dueDate": "2019-02-02",
            "firstDigits": null,
            "giftCardCaption": null,
            "giftCardId": null,
            "giftCardName": null,
            "group": "bankInvoice",
            "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
            "installments": 1,
            "lastDigits": null,
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
      "id": "1",
      "logo": "",
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
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo"
    },
    "id": "shippingData",
    "logisticsInfo": [
      {
        "addressId": "-1425945657910",
        "deliveryChannel": "delivery",
        "deliveryCompany": "Todos os CEPS",
        "deliveryIds": [
          {
            "courierId": "197a56f",
            "courierName": "Todos os CEPS",
            "dockId": "1",
            "quantity": 1,
            "warehouseId": "1_1"
          }
        ],
        "deliveryWindow": null,
        "itemIndex": 0,
        "listPrice": 1160,
        "lockTTL": "10d",
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
            "name": "Normal",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1160,
            "shippingEstimate": "5bd"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Expressa",
            "name": "Expressa",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1160,
            "shippingEstimate": "5bd"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Quebra Kit",
            "name": "Quebra Kit",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "2bd"
          },
          {
            "deliveryChannel": "delivery",
            "deliveryWindow": null,
            "id": "Sob Encomenda",
            "name": "Sob Encomenda",
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1392,
            "shippingEstimate": "32bd"
          }
        ]
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "-1425945657910",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "10",
        "country": "BRA",
        "geoCoordinates": [],
        "neighborhood": "Botafogo",
        "number": "518",
        "postalCode": "22250-040",
        "receiverName": "Rodrigo Cunha",
        "reference": null,
        "state": "RJ",
        "street": "Praia de Botafogo"
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
|approvedBy|string|false|none|User that approved the order, in case of manual approval.|
|authorizedDate|string|false|none|Date in which the order was authorized in UTC.|
|callCenterOperatorData|string \| null|false|none|Call center operator data.|
|cancelReason|string|false|none|Reason for cancelation.|
|cancelledBy|string|false|none|User that canceled the order.|
|changesAttachment|[ChangesAttachment](#schemachangesattachment)|false|none|none|
|clientProfileData|[ClientProfileData](#schemaclientprofiledata)|false|none|none|
|commercialConditionData|string \| null|false|none|Commercial condition data.|
|creationDate|string|false|none|Creation date.|
|customData|string \| null|false|none|Custom data.|
|emailTracked|string|false|none|Email tracked.|
|followUpEmail|string|false|none|Follow up email.|
|giftRegistryData|string \| null|false|none|Gift registry data.|
|hostname|string|false|none|Host name.|
|invoiceData|object \| null|false|none|Information pertinent to the order's invoice.|
|invoicedDate|string|false|none|Date in which the order was invoiced in UTC.|
|isCheckedIn|boolean|false|none|Indicates whether client is checked in.|
|isCompleted|boolean|false|none|Indicates whether order is completed.|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|string|false|none|Dimension.|
|» » offeringInfo|string|false|none|Offering information.|
|» » offeringType|string|false|none|Offering type.|
|» » offeringTypeId|string|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Name.|
|» » price|integer|false|none|Price in cents.|
|» » type|string|false|none|Type|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string|false|none|European Article Number.|
|» id|string|false|none|ID.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean|false|none|Indicates whether item is a gift.|
|» listPrice|integer|false|none|List price in cents.|
|» manualPrice|integer|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit|
|» modalType|string|false|none|Modal type.|
|» name|string|false|none|Name.|
|» parentAssemblyBinding|string|false|none|Parent assembly binding.|
|» parentItemIndex|integer|false|none|Parent item index.|
|» preSaleDate|string|false|none|Presale date.|
|» price|integer|false|none|Price in cents.|
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
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Order's item unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier|
|lastChange|string|false|none|Date of last change.|
|lastMessage|string \| null|false|none|Last message.|
|marketingData|string \| null|false|none|Marketing data.|
|marketplace|[Marketplace](#schemamarketplace)|false|none|none|
|marketplaceItems|[string]|false|none|Marketplace items.|
|marketplaceOrderId|string|false|none|ID of the order in the marketplace.|
|marketplaceServicesEndpoint|string|false|none|Marketplace endpoint for post purchase communication.|
|merchantName|string|false|none|Merchant name.|
|openTextField|string \| null|false|none|Open text field.|
|orderFormId|string|false|none|ID of the shopping cart from which the order was created.|
|orderGroup|string|false|none|Order group.|
|orderId|string|false|none|Order ID.|
|origin|string|false|none|Origin.|
|packageAttachment|object|false|none|Package attachment.|
|» packages|[object]|false|none|Information on each package.|
|» » cfop|string|false|none|Fiscal operation code.|
|» » courier|string|false|none|Courier.|
|» » courierStatus|string|false|none|Courier status.|
|» » embeddedInvoice|string|false|none|Embedded voice in XML.|
|» » invoiceKey|string|false|none|Invoice key.|
|» » invoiceNumber|string|false|none|Invoice number.|
|» » invoiceUrl|string|false|none|Invoice URL.|
|» » invoiceValue|integer|false|none|Invoice value in cents.|
|» » issuanceDate|string|false|none|Issuance date.|
|» » items|[object]|false|none|Information on each item in the package.|
|» » » description|string|false|none|Item description.|
|» » » itemIndex|integer|false|none|Item index in reference to the position of the item in the `items` array.|
|» » » price|integer|false|none|Item price in cents.|
|» » » quantity|integer|false|none|Item quantity.|
|» » » unitMultiplier|number|false|none|Item unit multiplier.|
|» » restitutions|object|false|none|Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`).|
|» » » refund|object|false|none|Information on refunds.|
|» » » » items|[object]|false|none|Information on items.|
|» » » » » itemIndex|string|false|none|Item index corresponding to the position of the item in the main `items` array.|
|» » » » » quantity|integer|false|none|Quantity.|
|» » trackingNumber|string|false|none|Tracking number.|
|» » trackingUrl|string|false|none|Tracking URL.|
|» » type|string|false|none|Invoice type `Output` for sales and `Input` for returns.|
|» » volumes|integer|false|none|Quantity of packages involved in the order.|
|paymentData|[PaymentData](#schemapaymentdata)|false|none|none|
|ratesAndBenefitsData|[RatesAndBenefitsData](#schemaratesandbenefitsdata)|false|none|none|
|roundingError|integer(int32)|false|none|Rounding error in cents.|
|salesChannel|string|false|none|Sales channel.|
|sellerOrderId|string|false|none|Seller order ID.|
|sellers|[[Seller](#schemaseller)]|false|none|Array with sellers information.|
|sequence|string|false|none|Sequence number.|
|shippingData|[ShippingData](#schemashippingdata)|false|none|none|
|status|string|false|none|Status in the order workflow.|
|statusDescription|string|false|none|Status description which is displayed on the Admin panel.|
|storePreferencesData|[StorePreferencesData](#schemastorepreferencesdata)|false|none|none|
|totals|[object]|false|none|Information on each of the order's totals.|
|» id|string|false|none|Order's total ID.|
|» name|string|false|none|Order's total name.|
|» value|integer(int32)|false|none|Order's total value.|
|value|integer(int32)|false|none|Value in cents.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Start handling order

<a id="opIdStartHandling2"></a>

> Code samples

```bash
curl https://example.com/api/orders/pvt/document/70caf3941s6df1/actions/start-handling \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/orders/pvt/document/{orderId}/actions/start-handling`

Change the status of an order to indicate that is is in `handling`.

> Expect a `status 204` response with no content in case of a successful request.

> The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

<h3 id="start-handling-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID of the order.|

<h3 id="start-handling-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel order

<a id="opIdCancelOrder2"></a>

> Code samples

```bash
curl https://example.com/api/orders/pvt/document/70caf3941s6df1/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "reason": "Unexpected stock shortage"
  }'
```

`POST /api/orders/pvt/document/{orderId}/cancel`

You should use this endpoint to cancel an order by its `orderId`.

A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.

You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.

Be aware that if the order status is already `Invoiced`, the order can only be canceled if - before using this request - you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).

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
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID of the order.|
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

<h1 id="orders-api-pii-version-invoice">Invoice</h1>

## Order invoice notification

<a id="opIdInvoiceNotification2"></a>

> Code samples

```bash
curl https://example.com/api/orders/pvt/document/70caf3941s6df1/invoices \
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
    "invoiceUrl": null,
    "invoiceValue": "10000",
    "issuanceDate": "2010-01-31",
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
  }'
```

`POST /api/orders/pvt/document/{orderId}/invoices`

Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Body parameter

```json
{
  "courier": null,
  "dispatchedDate": null,
  "invoiceKey": null,
  "invoiceNumber": "9999",
  "invoiceUrl": null,
  "invoiceValue": "10000",
  "issuanceDate": "2010-01-31",
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

<h3 id="order-invoice-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID of the order.|
|body|body|[InvoiceNotificationRequest](#schemainvoicenotificationrequest)|true|none|
|» cfop|body|string|false|Fiscal code used in Brazil.|
|» courier|body|string \| null|false|The name of the carrier responsible for delivering the order.<br>> This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|» extraValue|body|integer|false|Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|» invoiceKey|body|string \| null|false|Invoice key.|
|» invoiceNumber|body|string|true|Number that identifies the invoice.|
|» invoiceUrl|body|string|false|URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.|
|» invoiceValue|body|string|true|Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|» issuedDate|body|string|true|Issuance date of the invoice in ISO format.|
|» items|body|[[Item1](#schemaitem1)]|true|Array containing the SKUs that are being invoiced.|
|» trackingNumber|body|string \| null|false|Code that identifies the order tracking.<br>> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|» trackingUrl|body|string \| null|false|URL used to track the order.<br>> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|» type|body|string|true|The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.|
|» volumes|body|integer|false|Number of volumes in the invoice.|

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
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|429|Too Many Requests|Too many requests|None|

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

<h1 id="orders-api-pii-version-payment">Payment</h1>

## Send payment notification

<a id="opIdSendPaymentNotification2"></a>

> Code samples

```bash
curl https://example.com/api/orders/pvt/document/70caf3941s6df1/payment/45hsfg5jkyu1384jdsfgh654sfgj1/notify-payment \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/orders/pvt/document/{orderId}/payment/{paymentId}/notify-payment`

Send a payment notification of a given order, by order ID and payment ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).


## Request body properties

| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `orderId` | string | Order Id |
| `paymentId` | string | Payment ID |

<h3 id="send-payment-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderId|path|string|true|ID of the order.|
|paymentId|path|string|true|ID of the payment.|

<h3 id="send-payment-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

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
  "geoCoordinates": [],
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "22250-040",
  "receiverName": "Rodrigo Cunha",
  "reference": null,
  "state": "RJ",
  "street": "Praia de Botafogo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Address ID.|
|addressType|string|true|none|Address type.|
|city|string|true|none|Address city.|
|complement|string|true|none|Address complement.|
|country|string|true|none|Address country.|
|geoCoordinates|[string]|true|none|Geolocation coordinates.|
|neighborhood|string|true|none|Address neighborhood.|
|number|string|true|none|Address number.|
|postalCode|string|true|none|Address postal code.|
|receiverName|string|true|none|Address receiver name.|
|reference|string \| null|true|none|Address reference.|
|state|string|true|none|Address state.|
|street|string|true|none|Address street.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesData|[[ChangesDatum](#schemachangesdatum)]|true|none|Array with data on order changes.|
|id|string|true|none|Change ID.|

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
|discountValue|integer(int32)|true|none|Discount value in cents.|
|incrementValue|integer(int32)|true|none|Order value increment in cents.|
|itemsAdded|[string]|true|none|Array with information on items added to the order.|
|itemsRemoved|[[ItemsRemoved](#schemaitemsremoved)]|true|none|Array with information on items removed from the order.|
|reason|string|true|none|Change reason.|
|receipt|[Receipt](#schemareceipt)|true|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporateDocument|string \| null|true|none|Company document, in case client is corporate.|
|corporateName|string \| null|true|none|Company name, in case client is corporate.|
|corporatePhone|string \| null|true|none|Company telephone number, in case client is corporate.|
|customerClass|string \| null|true|none|Customer class.|
|document|string|true|none|Client document.|
|documentType|string|true|none|Client document type.|
|email|string|true|none|Client email address.|
|firstName|string|true|none|Client first name.|
|id|string|true|none|Client ID.|
|isCorporate|boolean|true|none|Indicates whether client is corporate.|
|lastName|string|true|none|Client last name.|
|phone|string|true|none|Client telephone number.|
|stateInscription|string \| null|true|none|Company state inscription, in case client is corporate.|
|tradeName|string \| null|true|none|Company trade name, in case client is corporate.|
|userProfileId|string|true|none|User profile ID.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrencyDecimalDigits|integer(int32)|true|none|Currency decimal digits.|
|CurrencyDecimalSeparator|string|true|none|Currency decimal separator.|
|CurrencyGroupSeparator|string|true|none|Currency group separator.|
|CurrencyGroupSize|integer(int32)|true|none|Currency group size.|
|StartsWithCurrencySymbol|boolean|true|none|Indicates whether value representations start with currency symbol.|

<h2 id="tocS_DeliveryId">DeliveryId</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryid"></a>
<a id="schema_DeliveryId"></a>
<a id="tocSdeliveryid"></a>
<a id="tocsdeliveryid"></a>

```json
{
  "courierId": "197a56f",
  "courierName": "Todos os CEPS",
  "dockId": "1",
  "quantity": 1,
  "warehouseId": "1_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|courierId|string|true|none|Courier ID.|
|courierName|string|true|none|Courier name.|
|dockId|string|true|none|Dock ID.|
|quantity|integer(int32)|true|none|Quantity.|
|warehouseId|string|true|none|Warehouse ID.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int32)|true|none|Sum of squares.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

<h2 id="tocS_InvoiceNotificationRequest">InvoiceNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvoicenotificationrequest"></a>
<a id="schema_InvoiceNotificationRequest"></a>
<a id="tocSinvoicenotificationrequest"></a>
<a id="tocsinvoicenotificationrequest"></a>

```json
{
  "courier": null,
  "extraValue": 100,
  "invoiceKey": null,
  "invoiceNumber": "9999",
  "invoiceUrl": null,
  "invoiceValue": 2499,
  "issuedDate": "2019-01-30",
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
|cfop|string|false|none|Fiscal code used in Brazil.|
|courier|string \| null|false|none|The name of the carrier responsible for delivering the order.<br>> This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|extraValue|integer|false|none|Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|invoiceKey|string \| null|false|none|Invoice key.|
|invoiceNumber|string|true|none|Number that identifies the invoice.|
|invoiceUrl|string|false|none|URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.|
|invoiceValue|string|true|none|Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|issuedDate|string|true|none|Issuance date of the invoice in ISO format.|
|items|[[Item1](#schemaitem1)]|true|none|Array containing the SKUs that are being invoiced.|
|trackingNumber|string \| null|false|none|Code that identifies the order tracking.<br>> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|trackingUrl|string \| null|false|none|URL used to track the order.<br>> This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).|
|type|string|true|none|The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.|
|volumes|integer|false|none|Number of volumes in the invoice.|

<h2 id="tocS_Item1">Item1</h2>
<!-- backwards compatibility -->
<a id="schemaitem1"></a>
<a id="schema_Item1"></a>
<a id="tocSitem1"></a>
<a id="tocsitem1"></a>

```json
{
  "id": "1234",
  "price": 10000,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemIndex|string|true|none|Index of the SKU being invoiced.|
|price|integer(int32)|true|none|Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.|
|quantity|integer(int32)|true|none|Quantity cof the SKU being invoiced.|

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
|id|string|true|none|Id of removed item.|
|name|string|true|none|Name of removed item.|
|price|integer(int32)|true|none|Removed items price in cents.|
|quantity|integer(int32)|true|none|Quantity of items removed.|
|unitMultiplier|string \| null|true|none|Removed item unit multiplier.|

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
|ShippingEstimatedDate|string \| null|true|none|Shipping estimate date.|
|ShippingEstimatedDateMax|string \| null|true|none|Maximum shipping estimate date.|
|ShippingEstimatedDateMin|string \| null|true|none|Minimum shipping estimate date.|
|affiliateId|string|true|none|Three letter code indicating the marketplace in which the order was placed.|
|authorizedDate|string \| null|true|none|Authorized date.|
|callCenterOperatorName|string \| null|true|none|Call center operator name.|
|clientName|string|true|none|Client name.|
|creationDate|string|true|none|Creation date.|
|currencyCode|string|true|none|Currency code.|
|items|string \| null|true|none|Order items.|
|lastMessageUnread|string \| null|true|none|Last unread message.|
|listId|string \| null|true|none|List ID.|
|listType|string \| null|true|none|List type.|
|marketPlaceOrderId|string \| null|true|none|ID of the order in the marketplace.|
|orderId|string|true|none|Order ID.|
|orderIsComplete|boolean|true|none|Indicates whether order is complete.|
|origin|string|true|none|Indicates whether order is marketplace, fulfillment or chain.|
|paymentNames|string|true|none|Order payment names.|
|salesChannel|string|true|none|Sales channel.|
|sequence|string|true|none|Order sequence number.|
|status|string|true|none|Order status.|
|statusDescription|string|true|none|Order status description.|
|totalItems|integer(int32)|true|none|Total items.|
|totalValue|integer(int32)|true|none|Order total value in cents.|
|workflowInErrorState|boolean|true|none|Indicates whether order workflow is in error state.|
|workflowInRetry|boolean|true|none|Indicates whether workflow is in retry.|

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
|facets|[string]|true|none|Array of facets.|
|list|[[List](#schemalist)]|true|none|Array containing information on orders listed.|
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
  "deliveryCompany": "Todos os CEPS",
  "deliveryIds": [
    {
      "courierId": "197a56f",
      "courierName": "Todos os CEPS",
      "dockId": "1",
      "quantity": 1,
      "warehouseId": "1_1"
    }
  ],
  "deliveryWindow": null,
  "itemIndex": 0,
  "listPrice": 1160,
  "lockTTL": "10d",
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
      "name": "Normal",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": null,
      "price": 1160,
      "shippingEstimate": "5bd"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Expressa",
      "name": "Expressa",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": null,
      "price": 1160,
      "shippingEstimate": "5bd"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Quebra Kit",
      "name": "Quebra Kit",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": null,
      "price": 1392,
      "shippingEstimate": "2bd"
    },
    {
      "deliveryChannel": "delivery",
      "deliveryWindow": null,
      "id": "Sob Encomenda",
      "name": "Sob Encomenda",
      "pickupStoreInfo": {
        "additionalInfo": null,
        "address": null,
        "dockId": null,
        "friendlyName": null,
        "isPickupStore": false
      },
      "polygonName": null,
      "price": 1392,
      "shippingEstimate": "32bd"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Address ID.|
|deliveryChannel|string|true|none|Delivery channel.|
|deliveryCompany|string|true|none|Delivery company.|
|deliveryIds|[[DeliveryId](#schemadeliveryid)]|true|none|Array of delivery IDs.|
|deliveryWindow|string \| null|true|none|Delivery window information.|
|itemIndex|integer(int32)|true|none|Item index, matching the index in the `items` array.|
|listPrice|integer(int32)|true|none|List price in cents.|
|lockTTL|string|true|none|Reservation lasting period.|
|pickupStoreInfo|[PickupStoreInfo](#schemapickupstoreinfo)|true|none|none|
|polygonName|string \| null|true|none|Polygon name.|
|price|integer(int32)|true|none|Prince in cents.|
|selectedSla|string|true|none|Selected SLA.|
|sellingPrice|integer(int32)|true|none|Selling price in cents.|
|shippingEstimate|string|true|none|Shipping estimate.|
|shippingEstimateDate|string|true|none|Shipping estimate date.|
|shipsTo|[string]|true|none|List of countries (three letter ISO code) to which shipping is available.|
|slas|[[Sla](#schemasla)]|true|none|Array with information on the SLAs.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseURL|string|true|none|Marketplace base URL.|
|isCertified|string \| null|true|none|Indicates whether marketplace is certified.|
|name|string|true|none|Marketplace name.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

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
|currentPage|integer(int32)|true|none|Current returned page.|
|pages|integer(int32)|true|none|Number of pages.|
|perPage|integer(int32)|true|none|Number of items returned per page.|
|total|integer(int32)|true|none|Paging total.|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "cardHolder": null,
  "cardNumber": null,
  "connectorResponses": {},
  "cvv2": null,
  "dueDate": "2019-02-02",
  "expireMonth": null,
  "expireYear": null,
  "firstDigits": null,
  "giftCardCaption": null,
  "giftCardId": null,
  "giftCardName": null,
  "group": "bankInvoice",
  "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
  "installments": 1,
  "lastDigits": null,
  "paymentSystem": "6",
  "paymentSystemName": "Boleto Bancário",
  "redemptionCode": null,
  "referenceValue": 4450,
  "tid": null,
  "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
  "value": 4450
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolder|string \| null|true|none|Card holder|
|cardNumber|string \| null|true|none|Card number.|
|connectorResponses|object|true|none|Connector responses.|
|cvv2|string \| null|true|none|Card verification code.|
|dueDate|string|true|none|Due date.|
|expireMonth|string \| null|true|none|Card expiration month.|
|expireYear|string \| null|true|none|Card expiration year.|
|firstDigits|string \| null|true|none|Card first digits.|
|giftCardCaption|string \| null|true|none|Gift card caption.|
|giftCardId|string \| null|true|none|Gift card ID.|
|giftCardName|string \| null|true|none|Gift card name.|
|group|string|true|none|Payment group.|
|id|string|true|none|Payment ID.|
|installments|integer(int32)|true|none|Payment installments.|
|lastDigits|string \| null|true|none|Card last digits.|
|paymentSystem|string|true|none|Payment system.|
|paymentSystemName|string|true|none|Payment system name.|
|redemptionCode|string \| null|true|none|Redemption code.|
|referenceValue|integer(int32)|true|none|Reference value for interest calculation in cents.|
|tid|string \| null|true|none|Payment TID.|
|url|string|true|none|Payment URL.|
|value|integer(int32)|true|none|Payment value in cents.|

<h2 id="tocS_PaymentData">PaymentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdata"></a>
<a id="schema_PaymentData"></a>
<a id="tocSpaymentdata"></a>
<a id="tocspaymentdata"></a>

```json
{
  "transactions": [
    {
      "isActive": true,
      "merchantName": "luxstore",
      "payments": [
        {
          "cardHolder": null,
          "cardNumber": null,
          "connectorResponses": {},
          "cvv2": null,
          "dueDate": "2019-02-02",
          "expireMonth": null,
          "expireYear": null,
          "firstDigits": null,
          "giftCardCaption": null,
          "giftCardId": null,
          "giftCardName": null,
          "group": "bankInvoice",
          "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
          "installments": 1,
          "lastDigits": null,
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[Transaction](#schematransaction)]|true|none|Array with information on each transaction of the order.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string \| null|true|none|Pickup additional information.|
|address|string \| null|true|none|Pickup address.|
|dockId|string \| null|true|none|Pickup dock ID.|
|friendlyName|string \| null|true|none|Pickup friendly name.|
|isPickupStore|boolean|true|none|Indicates whether it is pickup store.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Field ID.|
|rateAndBenefitsIdentifiers|[string]|true|none|Array with rates and benefits IDs.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|Date.|
|orderId|string|true|none|Order ID.|
|receipt|string|true|none|Receipt.|

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
  "complement": "3",
  "country": "BRA",
  "geoCoordinates": [],
  "neighborhood": "Botafogo",
  "number": "300",
  "postalCode": "22250-040",
  "receiverName": "Rodrigo Cunha",
  "reference": null,
  "state": "RJ",
  "street": "Praia de Botafogo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|Address ID.|
|addressType|string|true|none|Address type.|
|city|string|true|none|Address city.|
|complement|string|true|none|Address complement.|
|country|string|true|none|Address country.|
|geoCoordinates|[string]|true|none|Geolocation coordinates.|
|neighborhood|string|true|none|Address neighborhood.|
|number|string|true|none|Address number.|
|postalCode|string|true|none|Address postal code.|
|receiverName|string|true|none|Address receiver name.|
|reference|string \| null|true|none|Address reference.|
|state|string|true|none|Address state.|
|street|string|true|none|Address street.|

<h2 id="tocS_Seller">Seller</h2>
<!-- backwards compatibility -->
<a id="schemaseller"></a>
<a id="schema_Seller"></a>
<a id="tocSseller"></a>
<a id="tocsseller"></a>

```json
{
  "id": "1",
  "logo": "",
  "name": "Loja do Suporte"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Seller ID.|
|logo|string|true|none|Seller logo.|
|name|string|true|none|Seller name.|

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
    "geoCoordinates": [],
    "neighborhood": "Botafogo",
    "number": "300",
    "postalCode": "22250-040",
    "receiverName": "Rodrigo Cunha",
    "reference": null,
    "state": "RJ",
    "street": "Praia de Botafogo"
  },
  "id": "shippingData",
  "logisticsInfo": [
    {
      "addressId": "-1425945657910",
      "deliveryChannel": "delivery",
      "deliveryCompany": "Todos os CEPS",
      "deliveryIds": [
        {
          "courierId": "197a56f",
          "courierName": "Todos os CEPS",
          "dockId": "1",
          "quantity": 1,
          "warehouseId": "1_1"
        }
      ],
      "deliveryWindow": null,
      "itemIndex": 0,
      "listPrice": 1160,
      "lockTTL": "10d",
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
          "name": "Normal",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": null,
          "price": 1160,
          "shippingEstimate": "5bd"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Expressa",
          "name": "Expressa",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": null,
          "price": 1160,
          "shippingEstimate": "5bd"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Quebra Kit",
          "name": "Quebra Kit",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": null,
          "price": 1392,
          "shippingEstimate": "2bd"
        },
        {
          "deliveryChannel": "delivery",
          "deliveryWindow": null,
          "id": "Sob Encomenda",
          "name": "Sob Encomenda",
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": null,
          "price": 1392,
          "shippingEstimate": "32bd"
        }
      ]
    }
  ],
  "selectedAddresses": [
    {
      "addressId": "-1425945657910",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "10",
      "country": "BRA",
      "geoCoordinates": [],
      "neighborhood": "Botafogo",
      "number": "518",
      "postalCode": "22250-040",
      "receiverName": "Rodrigo Cunha",
      "reference": null,
      "state": "RJ",
      "street": "Praia de Botafogo"
    }
  ],
  "trackingHints": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|none|
|id|string|true|none|Field ID.|
|logisticsInfo|[[LogisticsInfo](#schemalogisticsinfo)]|true|none|Array with logistics information of each item in the order.|
|selectedAddresses|[[Address](#schemaaddress)]|true|none|Array of the selected addresses' information.|
|trackingHints|string \| null|true|none|Tracking hints.|

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
  "name": "Normal",
  "pickupStoreInfo": {
    "additionalInfo": null,
    "address": null,
    "dockId": null,
    "friendlyName": null,
    "isPickupStore": false
  },
  "polygonName": null,
  "price": 1160,
  "shippingEstimate": "5bd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryChannel|string|true|none|SLA delivery channel.|
|deliveryWindow|string \| null|true|none|SLA delivery window.|
|id|string|true|none|SLA ID.|
|name|string|true|none|SLA name.|
|pickupStoreInfo|[PickupStoreInfo](#schemapickupstoreinfo)|true|none|none|
|polygonName|string \| null|true|none|SLA polygon name.|
|price|integer(int32)|true|none|SLA price in cents.|
|shippingEstimate|string|true|none|SLA shipping estimate.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|true|none|Three letter ISO country code.|
|currencyCode|string|true|none|Currency code.|
|currencyFormatInfo|[CurrencyFormatInfo](#schemacurrencyformatinfo)|true|none|none|
|currencyLocale|integer(int32)|true|none|Currency locale.|
|currencySymbol|string|true|none|Currency symbol.|
|timeZone|string|true|none|Time zone.|

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
|Count|integer(int32)|true|none|Count.|
|Facets|string \| null|true|none|Facets.|
|Max|integer(int32)|true|none|Maximum.|
|Mean|number|true|none|Mean.|
|Min|integer(int32)|true|none|Minimum.|
|Missing|integer(int32)|true|none|Missing.|
|StdDev|number|true|none|Standard deviation.|
|Sum|integer(int32)|true|none|Sum.|
|SumOfSquares|integer(int64)|true|none|Sum of squares.|

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
|Count|integer(int32)|true|none|Value count.|
|Facets|[Facets](#schemafacets)|true|none|none|
|Max|integer(int32)|true|none|Value maximum.|
|Mean|number|true|none|Value mean.|
|Min|integer(int32)|true|none|Value minimum.|
|Missing|integer(int32)|true|none|Missing values.|
|StdDev|number|true|none|Values standard deviation.|
|Sum|integer(int32)|true|none|Values sum.|
|SumOfSquares|integer(int64)|true|none|Values sum of squares|

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
      "cardHolder": null,
      "cardNumber": null,
      "connectorResponses": {},
      "cvv2": null,
      "dueDate": "2019-02-02",
      "expireMonth": null,
      "expireYear": null,
      "firstDigits": null,
      "giftCardCaption": null,
      "giftCardId": null,
      "giftCardName": null,
      "group": "bankInvoice",
      "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
      "installments": 1,
      "lastDigits": null,
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|true|none|Indicates whether transaction is active.|
|merchantName|string|true|none|Merchant name.|
|payments|[[Payment](#schemapayment)]|true|none|Array with information on each payment for the order.|
|transactionId|string|true|none|Transaction ID.|
