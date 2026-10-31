<h1 id="marketplace-protocol">Marketplace Protocol v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The _Marketplace Protocol_ is a set of API requests and definitions to help you integrate external sellers into a VTEX marketplace as well as external marketplaces into VTEX sellers.

## External Seller

Here you will find the endpoints involved in the integration between a VTEX marketplace and an external seller. Note that some of these requests are typically sent by the seller while others are received.

| **Request** | **From** | **To** |
|-|-|-|
| [Fulfillment simulation](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) | Marketplace | Seller |
| [Order placement](https://developers.vtex.com/vtex-rest-api/reference/order-placement) | Marketplace | Seller |
| [Authorize fulfillment](https://developers.vtex.com/vtex-rest-api/reference/authorize-fulfillment) | Marketplace | Seller |
| [Marketplace order cancellation](https://developers.vtex.com/vtex-rest-api/reference/marketplace-order-cancellation) | Marketplace | Seller |
| [Send invoice](https://developers.vtex.com/vtex-rest-api/reference/send-invoice) | Seller | Marketplace |
| [Send tracking information](https://developers.vtex.com/vtex-rest-api/reference/send-tracking-information) | Seller      | Marketplace |
| [Update tracking status](https://developers.vtex.com/vtex-rest-api/reference/update-tracking-status) | Seller | Marketplace |
| [Cancel order in marketplace](https://developers.vtex.com/vtex-rest-api/reference/cancel-order-in-marketplace) | Seller | Marketplace |

For a detailed explanation of the steps required to develop a custom connector to sell products from an external seller in your storefront, check out our complete [External Seller Integration Guide](https://developers.vtex.com/docs/guides/external-seller-integration-guide).


## External Marketplace

In this section, you will find the endpoints involved in the VTEX integration between an external marketplace and a VTEX seller.


| **Request** | **From** | **To** |
|-|-|-|
| [VTEX Mapper Registration](https://developers.vtex.com/vtex-rest-api/reference/vtex-mapper-registration) | External marketplace | VTEX system |
| [Send Category Mapping to VTEX Mapper](https://developers.vtex.com/vtex-rest-api/reference/send-category-mapping-to-vtex-mapper) |  External marketplace | VTEX system |
| [Authorize fulfillment](https://developers.vtex.com/vtex-rest-api/reference/authorize-fulfillment) | Marketplace | Seller |
| [Place fulfillment order](https://developers.vtex.com/vtex-rest-api/reference/place-fulfillment-order)   | External marketplace | VTEX Seller |
| [Authorize dispatch for fulfillment order](https://developers.vtex.com/vtex-rest-api/reference/authorize-dispatch-for-fulfillment-order) | External marketplace | VTEX Seller |


For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide).

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="marketplace-protocol-external-seller">External Seller</h1>

## Fulfillment simulation - External Seller

<a id="opIdfulfillment-simulation"></a>

> Code samples

```bash
curl https://example.com/marketplaceexample.externalseller.com/pvt/orderForms/simulation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "country": "USA",
    "geoCoordinates": [
      "00.00000000"
    ],
    "items": [
      {
        "id": "6",
        "quantity": 1,
        "seller": "01"
      }
    ],
    "postalCode": "12345678",
    "sc": "1"
  }'
```

`POST /{fulfillmentEndpoint}/pvt/orderForms/simulation`

This endpoint may be called upon by VTEX for fulfillment simulation in the external seller different contexts. See examples below.

When a [price](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price) or [inventory](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory) notification request returns a response with status `200 OK`, it means that the SKU already exists in the marketplace. Whenever this happens, the marketplace will call the seller to get two updated information about the SKU: Price and Inventory.

The seller needs to have an endpoint implemented in order to receive this call and send a response containing the requested information to the marketplace. We call it the Fulfillment Simulation endpoint.

If the seller wishes to include other parameters in this call (like account name, or [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ID), this should be done within their {fulfillmentEndpoint}. This path is then inserted in the marketplace's VTEX admin when [configuring a seller](https://help.vtex.com/en/tutorial/configurando-seller--tutorials_392). 

The marketplace will send an object containing an array of items. The seller must use this list to get the updated information about the referred SKUs and send them back to the marketplace, following the response format explained in the API Reference. 

This call is also applied in the Storefront simulation scenario, in which case the request from VTEX does not send the paramenters `country` and `postalCode`. 
The call's payload can be adapted into two scenarios: 

- **Displaying items in the storefront**: the address information can be nulled in the request, since they are not mandatory data for this context.   
- **Making a shopping cart simulation during checkout**: address information must be sent, since this data is needed to calculate freight values. If the address information (including `postalCode` and `country`) is not sent through the call, VTEX interprets the stock balance as zero. Without a valid stock balance, the seller will not be shown as an option during checkout. 
  
## Request body example - Indexing simulation

```
{
    "items": [
      {
        "id": "7908010136043",
        "quantity": 1,
        "seller": "1",
      }
    ],
    "isCheckedIn": false,
  }
``` 
## Request body example - Checkout simulation

```
{
    "items": [
      {
        "id": "7908010136043",
        "quantity": 1,
        "seller": "1",
      }
    ],
    "postalCode": "22270-030",
    "country": "BRA",
  }
```

> Body parameter

```json
{
  "country": "USA",
  "geoCoordinates": [
    "00.00000000"
  ],
  "items": [
    {
      "id": "6",
      "quantity": 1,
      "seller": "01"
    }
  ],
  "postalCode": "12345678",
  "sc": "1"
}
```

<h3 id="fulfillment-simulation---external-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentEndpoint|path|string|true|This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|object|true|none|
|» country|body|string|false|ISO 3-digit code of the country where the delivery address is located.  This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.|
|» geoCoordinates|body|[string]|false|Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`.|
|» items|body|[[fulfillmentItem](#schemafulfillmentitem)]|false|Array containing the cart items.|
|» postalCode|body|string|true|Delivery address postal code. This field is mandatory for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.|
|» sc|body|string|false|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.|

> Example responses

> 200 Response

```json
{
  "country": "BRA",
  "items": [
    {
      "id": "2000037",
      "listPrice": 67203,
      "measurementUnit": "un",
      "merchantName": "mySeller1",
      "offerings": [
        {
          "id": "5",
          "name": "1 year warranty",
          "price": 10000,
          "type": "Warranty"
        }
      ],
      "price": 67203,
      "priceTags": [],
      "priceValidUntil": "2014-03-01T22:58:28.143",
      "quantity": 1,
      "requestIndex": 0,
      "seller": "1",
      "unitMultiplier": 1
    }
  ],
  "logisticsInfo": [
    {
      "deliveryChannels": [
        {
          "id": "delivery",
          "stockBalance": 179
        },
        {
          "id": "pickup-in-point",
          "stockBalance": 20
        }
      ],
      "itemIndex": 0,
      "quantity": 1,
      "shipsTo": [
        "BRA"
      ],
      "slas": [
        {
          "availableDeliveryWindows": [
            {
              "endDateUtc": "2013-02-04T13:00:00+00:00",
              "price": 0,
              "startDateUtc": "2013-02-04T08:00:00+00:00"
            }
          ],
          "deliveryChannel": "pickup-in-point",
          "id": "Curbside pickup",
          "name": "Curbside pickup",
          "pickupStoreInfo": {
            "additionalInfo": "",
            "address": {
              "addressId": "548304ed-dd40-4416-b12b-4b32bfa7b1e0",
              "addressType": "pickup",
              "city": "Curitiba",
              "complement": "Loja 10",
              "country": "BRA",
              "geoCoordinates": [
                49.334934,
                25.401705
              ],
              "neighborhood": "Santa Felicidade",
              "number": "100",
              "postalCode": "82320-040",
              "receiverName": "Juliana",
              "reference": "Next to the unicorn statue",
              "state": "PR",
              "street": "Rua Domingos Strapasson"
            },
            "friendlyName": "Santa Felicidade",
            "isPickupStore": true
          },
          "price": 0,
          "shippingEstimate": "0bd"
        }
      ],
      "stockBalance": 199
    }
  ],
  "postalCode": "80250000"
}
```

<h3 id="fulfillment-simulation---external-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fulfillment-simulation---external-seller-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|ISO 3-digit code of the country where the delivery address is located. If you don’t want to send it, use the value null.|
|items|[object]|true|none|Contains the data about each SKU in the cart.|
|» id|string|true|none|SKU ID|
|» listPrice|integer|true|none|List price. It’s the amount presented to the customer as a “previous” price that has been lowered due to a discount. Don’t separate the decimal places. The last two digits are the cents.|
|» measurementUnit|string|true|none|SKU’s measurement unit.|
|» merchantName|string|true|none|Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [​​Payments in VTEX marketplaces](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD) article to know more.|
|» offerings|[object]|true|none|Services that may be offered for this SKU. example are the assembly of a piece of furniture or warranty. In case these information are sent, the following fields are mandatory. If you don’t want to send it, use an empty array.|
|» » id|string|true|none|Service ID.|
|» » name|string|true|none|Service name.|
|» » price|integer|true|none|Service price. The last two digits are the cents.|
|» » type|string|true|none|Type of the service.|
|» price|integer|true|none|Actual selling price of the SKU. Don’t separate the decimal places. The last two digits are the cents.|
|» priceTags|[string]|true|none|List with the promotions applied to the SKU.|
|» priceValidUntil|string \| null|true|none|Expiration date of the SKU price. Example: `2014-03-01T22:58:28.143`. In case you don’t want to send it, use the value null.|
|» quantity|integer|true|none|Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.|
|» requestIndex|integer|true|none|Position of this item in the original array (request).|
|» seller|string|true|none|ID of the seller as registered in VTEX. You should send the same value that came in the request.|
|» unitMultiplier|integer|true|none|SKU unit multiplier. The default value is 1.|
|logisticsInfo|[object]|true|none|Array that contains the data regarding the delivery methods and stock for each item. If all products are unavailable, this field should return empty.|
|» deliveryChannels|[object]|true|none|Array contains the stock balance for each channel.|
|» » id|string|true|none|Identifies the channel type whose stock balance will be informed in the next field. Possible values are: pickup-in-point for pickup point and delivery for regular delivery.|
|» » stockBalance|integer|true|none|Stock balance for the channel type selected in the previous field.|
|» itemIndex|integer|true|none|Position of this item in the original array, i.e., in the array that came with the request. This index is what identifies which SKU you are referring to for each object inside the logisticsInfo.|
|» quantity|integer|true|none|Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.|
|» shipsTo|[string]|true|none|ISO 3-digit code of the countries to where the SKU is delivered.|
|» slas|[object]|true|none|Contains the available delivery methods.|
|» » availableDeliveryWindows|[object]|true|none|Contains the delivery windows available for the SLA.|
|» » » endDateUtc|string|true|none|End date of the delivery window.|
|» » » price|integer|true|none|Extra price for scheduled delivery. The last two digits are the cents.|
|» » » startDateUtc|string|true|none|Start date of the delivery window.|
|» » deliveryChannel|string|true|none|Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.|
|» » id|string|true|none|Identifier of the delivery method.|
|» » name|string|true|none|Name of the delivery method.|
|» » pickupStoreInfo|object \| null|true|none|Contains the data about the pickup point. If you don’t want to send this, use the value `null`.|
|» » » additionalInfo|string|true|none|Description or extra information about the pickup point.|
|» » » address|object|true|none|Address data of the pickup point.|
|» » » » addressId|string|true|none|Identifies the pickup point.|
|» » » » addressType|string|true|none|The possible value is pickup.|
|» » » » city|string|true|none|Pickup point's city.|
|» » » » complement|string|true|none|Complement of the pickup point address.|
|» » » » country|string|true|none|3-digit ISO code of the country where the pickup point is located.|
|» » » » geoCoordinates|[number]|true|none|Contains the geographic coordinates of the pickup point.|
|» » » » neighborhood|string|true|none|Neighborhood where the pickup point is located.|
|» » » » number|string|true|none|Address number of the pickup point.|
|» » » » postalCode|string|true|none|Postal code of the pickup point. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.|
|» » » » receiverName|string \| null|true|none|Name of the person who will receive the product. May be sent as `null`.|
|» » » » reference|string \| null|true|none|A reference for the pickup point address. |
|» » » » state|string|true|none|Pickup point's state.|
|» » » » street|string|true|none|Street where the pickup point is located.|
|» » » friendlyName|string|true|none|Friendly name of the pickup point.|
|» » » isPickupStore|boolean|true|none|`true` if it is a pickup point.|
|» » price|integer|true|none|Delivery price. The two last digits are the cents.|
|» » shippingEstimate|string|true|none|Time estimated for the delivery. Possible suffixes are `bd` for *business day* , `h` for *hours*, and `m` for *minutes*.|
|» stockBalance|integer|true|none|Stock balance of the SKU.|
|postalCode|string|true|none|Postal code of the delivery address. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Order placement

<a id="opIdorder-placement"></a>

> Code samples

```bash
curl https://example.com/https%3A%2F%2Fmarketplaceexample.externalseller.com/pvt/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -H 'content-length: 2183' \
  -H 'x-vtex-api-appkey: appKey' \
  -H 'x-vtex-api-apptoken: appToken' \
  -H 'accept-enconding: gzip, deflate' \
  -H 'x-vtex-operation-id: 8032114b-63e9-4e64-b30c-f7afcf676d7a' \
  -H 'x-forwarded-proto: https' \
  -H 'x-forwarded-for: 179.35.30.186, 130.176.35.67, 172.16.247.49' \
  -H 'x-vtex-cache-client-bypass: 1' \
  -H 'traceparent: 00-083c0ca18bc8d94183f333809a70cd64-bf5e9a641e230540-00' \
  -d '{}'
```

`POST /{fulfillmentEndpoint}/pvt/orders`

This request is sent by VTEX to the external seller once the customer finishes their checkout, to let the seller know there is a newly placed order. It does that by calling the **Order Placement** endpoint, which needs to be implemented by the seller.

The marketplace will send information such as the items contained in the cart, the client’s profile data, the shipping data, and the payment data. With all that, the seller will be able to create the order in their own store.

> Body parameter

```json
{}
```

<h3 id="order-placement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentEndpoint|path|string|true|This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.|
|content-length|header|string|true|Length of the request body.|
|authorization|header|string|true|Indicates authorization.|
|x-vtex-api-appkey|header|string|true|VTEX API app key.|
|x-vtex-api-apptoken|header|string|true|VTEX API app token.|
|accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|accept-enconding|header|string|true|Indicates the types of response enconding the client can understand.|
|x-vtex-operation-id|header|string|true|VTEX operation ID.|
|x-forwarded-proto|header|string|true|Determines the protocol used by the client in the request.|
|x-forwarded-for|header|string|true|Identifies the originating IP address of the HTTP client.|
|x-vtex-cache-client-bypass|header|string|true|VTEX cache client bypass.|
|content-type|header|string|true|Describes the type of the content being sent.|
|traceparent|header|string|true|Identifies the incoming request in a tracing system.|
|body|body|[orderPlacement](#schemaorderplacement)|true|none|
|» clientProfileData|body|object|false|Customer's profile information.|
|» » corporateDocument|body|string \| null|false|Corporate document, if the customer is a legal entity.|
|» » corporateName|body|string \| null|false|Company name, if the customer is a legal entity.|
|» » corporatePhone|body|string \| null|false|Corporate phone number, if the customer is a legal entity.|
|» » document|body|string|true|Document number informed by the customer.|
|» » documentType|body|string|true|Type of the document informed by the customer.|
|» » email|body|string|true|Customer's email address.|
|» » firstName|body|string|true|Customer's first name.|
|» » isCorporate|body|boolean \| null|true|`true` if the customer is a legal entity.|
|» » lastName|body|string|true|Customer's last name.|
|» » phone|body|string|false|Customer's phone number.|
|» » stateInscription|body|string \| null|false|State inscription, if the customer is a legal entity.|
|» » tradeName|body|string \| null|false|Trade name, if the customer is a legal entity.|
|» items|body|[object]|false|Array of objects containing data about each SKU in the cart.|
|» » attachments|body|[object]|false|Array containing information on attachments.|
|» » bundleItems|body|[[bundleItemsItem](#schemabundleitemsitem)]|false|Information on services sold along with the SKU. Example: a gift package.|
|» » commission|body|integer|false|Comission.|
|» » freightCommission|body|integer|false|Freight comission.|
|» » id|body|string|false|SKU ID.|
|» » isGift|body|boolean|false|`true` if the item is a gift.|
|» » itemsAttachment|body|[[itemAttachment](#schemaitemattachment)]|false|Attachments sold with the SKU.|
|» » measurementUnit|body|string|false|SKU measurement unit.|
|» » price|body|integer|false|SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.|
|» » priceTags|body|[object]|false|Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.|
|» » » identifier|body|string|false|Price tag identifier.|
|» » » isPercentual|body|boolean|false|`true` if price tag value is applied through a percentage.|
|» » » name|body|string|false|Price tag name.|
|» » » rawValue|body|integer|false|Price tag value.|
|» » » value|body|integer|false|Price tag raw value.|
|» » quantity|body|integer|false|Quantity of the item.|
|» » seller|body|string|false|ID of the seller registered in VTEX.|
|» » unitMultiplier|body|integer|false|SKU unit multiplier.|
|» marketingData|body|object|false|Marketing tracking data. If the order has no tracking data, the value will be `null`.|
|» » utmCampaign|body|string|false|UTM campaign|
|» » utmMedium|body|string|false|UTM medium.|
|» » utmSource|body|string|false|UTM source.|
|» » utmiCampaign|body|string|false|utmi_campaign (internal utm)|
|» » utmiPage|body|string|false|utmi_page (internal utm)|
|» » utmiPart|body|string|false|utmi_part (internal utm)|
|» marketplaceOrderId|body|string|false|Identifies the order in the marketplace.|
|» marketplacePaymentValue|body|integer|false|Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.|
|» marketplaceServicesEndpoint|body|string|false|Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces.|
|» openTextField|body|string|false|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)|
|» paymentData|body|object \| null|false|In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.|
|» shippingData|body|object|false|Shipping information.|
|» » address|body|object|false|Shipping address.|
|» » » addressId|body|string|false|Address ID.|
|» » » addressType|body|string|true|Type of address. For example, `Residential` or `Pickup`, among others.|
|» » » city|body|string|true|City of the shipping address.|
|» » » complement|body|string|false|Complement to the shipping address in case it applies.|
|» » » country|body|string|true|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|body|[string]|false|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » » neighborhood|body|string|true|Neighborhood of the shipping address.|
|» » » number|body|string|true|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|body|string|true|Postal Code.|
|» » » receiverName|body|string|true|Name of the person who is going to receive the order.|
|» » » reference|body|string|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|body|string|true|State of the shipping address.|
|» » » street|body|string|true|Street of the shipping address.|
|» » logisticsInfo|body|[object]|false|Array of objects containing logistics information of each item.|
|» » » deliveryWindow|body|object|false|Scheduled delivery window information, in case it applies to the item.|
|» » » » endDateUtc|body|string|false|Scheduled delivery window end date in UTC.|
|» » » » listPrice|body|number|false|Scheduled delivery window list price.|
|» » » » startDateUtc|body|string|false|Scheduled delivery window start date in UTC.|
|» » » itemIndex|body|integer|true|Index of the item in the `items` array, starting from 0.|
|» » » lockTTL|body|string|false|Logistics reservation waiting time.|
|» » » price|body|integer|true|Shipping price for the item. Does not account for the whole order's shipping price.|
|» » » selectedSla|body|string|true|Selected shipping option|
|» » » shippingEstimate|body|string|false|Estimated time until delivery for the item.|
|» » updateStatus|body|string|false|Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`|

> Example responses

> 200 Response

```json
{
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "document": "3244239851",
    "documentType": null,
    "email": "32172239852@gmail.com.br",
    "firstName": "John",
    "isCorporate": false,
    "lastName": "Smith",
    "phone": "399271258",
    "stateInscription": null,
    "tradeName": null,
    "userProfileId": null
  },
  "items": [
    {
      "Seller": "1",
      "attachments": [],
      "bundleItems": [],
      "commission": 0,
      "freightCommission": 0,
      "id": "2002495",
      "isGift": false,
      "itemAttachment": {
        "content": {},
        "name": null
      },
      "measurementUnit": null,
      "price": 9990,
      "priceTags": [],
      "quantity": 1,
      "unitMultiplier": 0
    }
  ],
  "marketingData": {
    "utmCampaign": "freeshipping",
    "utmMedium": "",
    "utmSource": "buscape",
    "utmiCampaign": "artscase for iphone 5",
    "utmiPage": "_",
    "utmiPart": "BuscaFullText"
  },
  "marketplaceOrderId": "959311095",
  "marketplacePaymentValue": 11080,
  "marketplaceServicesEndpoint": "https://marketplaceservicesendpoint/",
  "openTextField": null,
  "paymentData": null,
  "shippingData": {
    "address": {
      "addressId": "Home",
      "addressType": "Residencial",
      "city": "Americana",
      "complement": null,
      "country": "BRA",
      "geoCoordinates": [],
      "neighborhood": "SÃO JOSÉ",
      "number": "311",
      "postalCode": "13476103",
      "receiverName": "John Smith",
      "reference": "Bairro Praia Azul / Posto de Saúde 17",
      "state": "SP",
      "street": "JOÃO DAMÁZIO GOMES"
    },
    "logisticsInfo": [
      {
        "deliveryWindow": null,
        "itemIndex": 0,
        "lockTTL": "8d",
        "price": 1090,
        "selectedSla": "Regular",
        "shippingEstimate": "7d"
      }
    ],
    "updateStatus": "updated"
  }
}
```

<h3 id="order-placement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Marketplace order cancellation

<a id="opIdmkp-order-cancellation"></a>

> Code samples

```bash
curl https://example.com/marketplaceexample.externalseller.com/pvt/orders/1138342255777-01/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "marketplaceOrderId": "1138342255777-01"
  }'
```

`POST /{fulfillmentEndpoint}/pvt/orders/{orderId}/cancel`

This request may be sent from VTEX to the external seller in case of order cancelation. For that, the seller will need to implement the Marketplace order cancellation endpoint. Whenever this request is received by the seler, the order should be canceled and the fulfillment flow should not proceed. 

For the seller to: 

- **Evaluate a cancellation request:** it is possible to send an empty body as a response to the cancellation request, meaning that the seller is evaluating whether to proceed with the cancellation or not. 

- **Confirm the cancellation request:** it is possible to confirm the order cancellation by the marketplace by responding to the call with a body including only one information: the `marketplaceOrderId`, which identifies the order in the marketplace. The seller should use this ID to trigger the cancellation of the corresponding order. The seller should then respond with the same `marketplaceOrderId` and also with the `orderId`, which identifies the order in the seller, the date and time of the notification receipt, and a protocol code that confirms the receipt of the request (which may have the value `null`). 

- **Refuse a cancellation request:** it is possible to to [send the Invoice](https://developers.vtex.com/vtex-rest-api/reference/external-seller#send-invoice), meaning that the cancellation has been denied, and the flow continues to the [Order Invoicing](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector#order-invoicing) step, and the ones that follow it. 

This call should be made twice: once for the *Evaluate cancellation request* scenario, and a second time to *Confirm cancellation* or *Refuse cancellation*.

> Body parameter

```json
{
  "marketplaceOrderId": "1138342255777-01"
}
```

<h3 id="marketplace-order-cancellation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentEndpoint|path|string|true|This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|orderId|path|string|true|ID of the order being fulfilled|
|body|body|object|true|none|
|» marketplaceOrderId|body|string|true|Identifies the order. The seller should use this ID to trigger the cancellation of the corresponding order.|

> Example responses

> 200 Response

```json
{
  "date": "2019-05-09 15:31:23",
  "marketplaceOrderId": "959311095",
  "orderId": "1138342255777-01",
  "receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8"
}
```

<h3 id="marketplace-order-cancellation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Authorize fulfillment

<a id="opIdauthorize-fulfillment"></a>

> Code samples

```bash
curl https://example.com/https%3A%2F%2Fmarketplaceexample.externalseller.com/pvt/orders/00-1268540501456-01/fulfill \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "marketplaceOrderId": "1138342255777-01"
  }'
```

`POST /{fulfillmentEndpoint}/pvt/orders/{sellerOrderId}/fulfill`

This request is sent from VTEX to the seller after the payment is approved, to notify them that the fulfillment process can start.

> Body parameter

```json
{
  "marketplaceOrderId": "1138342255777-01"
}
```

<h3 id="authorize-fulfillment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentEndpoint|path|string|true|This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerOrderId|path|string|true|Seller's order ID of the order ready for fulfillment. The seller can be a VTEX seller or an external one.|
|body|body|object|true|none|
|» marketplaceOrderId|body|string|true|Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.|

> Example responses

> 200 Response

```json
{
  "date": "2014-10-06 18:52:00",
  "marketplaceOrderId": "959311095",
  "orderId": "1138342255777-01",
  "receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8"
}
```

<h3 id="authorize-fulfillment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Cancel order in marketplace

<a id="opIdcancel-order-in-marketplace"></a>

> Code samples

```bash
curl https://example.com/marketplaceservicesendpoint.myvtex.com/pvt/orders/1138342255777-01/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "reason": "Product is unavailable"
  }'
```

`POST /{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`

This request is sent by the external seller to the VTEX marketplace to cancel an order.

> Body parameter

```json
{
  "reason": "Product is unavailable"
}
```

<h3 id="cancel-order-in-marketplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplaceServicesEndpoint|path|string|true|This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).|
|marketplaceOrderId|path|string|true|Identifies the order in the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|object|true|none|
|» reason|body|string|true|Insert here the reason for the order's cancellation.|

> Example responses

> 200 Response

```json
{
  "date": "2021-06-09T15:22:56.7612218-02:00",
  "orderId": "1138342255777-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

<h3 id="cancel-order-in-marketplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Send invoice

<a id="opIdsend-invoice"></a>

> Code samples

```bash
curl https://example.com/marketplaceservicesendpoint.myvtex.com/pvt/orders/1138342255777-01/invoice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "courier": "courier-example",
    "invoiceNumber": "NFe-00002",
    "invoiceValue": 6000,
    "issuanceDate": "2021-05-21T10:00:00",
    "items": [
      {
        "id": "6",
        "price": 5500,
        "quantity": 1
      }
    ],
    "trackingNumber": "12345678abc",
    "trackingUrl": "https://courier-example.com/tracking",
    "type": "Output"
  }'
```

`POST /{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`

This request is sent by the external seller to the VTEX marketplace to send invoice information.

This can be necessary in a regular order or in the case of a return. The `type` field is used to indicate which of these is the case.

> Body parameter

```json
{
  "courier": "courier-example",
  "invoiceNumber": "NFe-00002",
  "invoiceValue": 6000,
  "issuanceDate": "2021-05-21T10:00:00",
  "items": [
    {
      "id": "6",
      "price": 5500,
      "quantity": 1
    }
  ],
  "trackingNumber": "12345678abc",
  "trackingUrl": "https://courier-example.com/tracking",
  "type": "Output"
}
```

<h3 id="send-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplaceServicesEndpoint|path|string|true|This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).|
|marketplaceOrderId|path|string|true|Identifies the order in the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|object|true|none|
|» courier|body|string|false|Courier, if available on invoice.|
|» invoiceNumber|body|string|true|Invoice number|
|» invoiceValue|body|integer|false|Invoice value.|
|» issuanceDate|body|string|false|Issuance date.|
|» items|body|[object]|true|Array containing the order items.|
|» » id|body|string|true|SKU ID.|
|» » price|body|integer|true|Price of the item.|
|» » quantity|body|integer|true|Quantity of items of the SKU in the cart.|
|» trackingNumber|body|string|false|Tracking number.|
|» trackingUrl|body|string|false|Tracking URL.|
|» type|body|string|true|Indicates the type of the invoice. Use `"Output"` for regular orders and `"Input"` for returns.|

> Example responses

> 200 Response

```json
{
  "date": "2021-06-09T15:22:56.7612218-02:00",
  "orderId": "1138342255777-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

<h3 id="send-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Send tracking information

<a id="opIdsend-tracking-information"></a>

> Code samples

```bash
curl https://example.com/marketplaceservicesendpoint.myvtex.com/pvt/orders/1138342255777-01/invoice/NFe-00002 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "courier": "courier-example",
    "dispatchedDate": "2021-06-09",
    "trackingNumber": "12345678abc",
    "trackingUrl": "https://courier-example.com/tracking"
  }'
```

`POST /{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}`

This request is sent by the external seller to the VTEX marketplace to add tracking information to a given order's invoice, in case it is necessary to do so after the invoice has been sent.

> Body parameter

```json
{
  "courier": "courier-example",
  "dispatchedDate": "2021-06-09",
  "trackingNumber": "12345678abc",
  "trackingUrl": "https://courier-example.com/tracking"
}
```

<h3 id="send-tracking-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplaceServicesEndpoint|path|string|true|This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).|
|marketplaceOrderId|path|string|true|Identifies the order in the marketplace.|
|invoiceNumber|path|string|true|Invoice number.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|object|true|none|
|» courier|body|string|false|Courier.|
|» dispatchedDate|body|string|false|Date of order dispatch.|
|» trackingNumber|body|string|false|Tracking number.|
|» trackingUrl|body|string|false|Tracking URL.|

> Example responses

> 200 Response

```json
{
  "date": "2021-06-09T15:22:56.7612218-02:00",
  "orderId": "1138342255777-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

<h3 id="send-tracking-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update tracking status

<a id="opIdupdate-tracking-status"></a>

> Code samples

```bash
curl https://example.com/marketplaceservicesendpoint.myvtex.com/pvt/orders/1138342255777-01/invoice/NFe-00002/tracking \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "events": [
      {
        "city": "Rio de Janeiro",
        "date": "2021-03-16",
        "description": "Order delivered.",
        "state": "Rio de Janeiro"
      }
    ],
    "isDelivered": true
  }'
```

`POST /{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}/tracking`

This request is sent by the external seller to the VTEX marketplace to update a given order's tracking status.

> Body parameter

```json
{
  "events": [
    {
      "city": "Rio de Janeiro",
      "date": "2021-03-16",
      "description": "Order delivered.",
      "state": "Rio de Janeiro"
    }
  ],
  "isDelivered": true
}
```

<h3 id="update-tracking-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketplaceServicesEndpoint|path|string|true|This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).|
|marketplaceOrderId|path|string|true|Identifies the order in the marketplace.|
|invoiceNumber|path|string|true|Invoice number.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|object|true|none|
|» events|body|[object]|false|Array containing information on each tracking event received.|
|» » city|body|string|false|City where the event ocurred.|
|» » date|body|string|false|Date when event ocurred.|
|» » description|body|string|false|Description of the event.|
|» » state|body|string|false|State where the event ocurred.|
|» isDelivered|body|boolean|true|Indicates if order has been delivered. `false` if it is in transit.|

> Example responses

> 200 Response

```json
{
  "date": "2021-06-09T15:22:56.7612218-02:00",
  "orderId": "1138342255777-01",
  "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
}
```

<h3 id="update-tracking-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-protocol-external-marketplace">External Marketplace</h1>

## Fulfillment simulation - External Marketplace

<a id="opIdfulfillment-simulation-external-marketplace"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForms/simulation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "clientProfileData": {
      "corporateDocument": "string",
      "corporateName": "string",
      "corporatePhone": "string",
      "customerClass": "string",
      "document": "12345678900",
      "documentType": "cpf",
      "email": "clark.kent@example.com",
      "firstName": "Clark",
      "isCorporate": true,
      "lastName": "Kent",
      "phone": "+552199999999",
      "profileCompleteOnLoading": true,
      "profileErrorOnLoading": true,
      "stateInscription": "string",
      "tradeName": "string"
    },
    "country": "BRA",
    "geoCoordinates": [
      -47.924747467041016,
      -15.832582473754883
    ],
    "isCheckedIn": false,
    "items": [
      {
        "id": "1",
        "quantity": 1,
        "seller": "1"
      }
    ],
    "marketingData": {
      "coupon": "free-shipping",
      "utmCampaign": "Black friday",
      "utmMedium": "CPC",
      "utmSource": "Facebook",
      "utmiCampaign": "utmi_campaign-example",
      "utmiPage": "utmi_page-example",
      "utmiPart": "utmi_part-example"
    },
    "postalCode": "12345-000",
    "selectedSla": "Normal",
    "storeId": "string"
  }'
```

`POST /api/checkout/pub/orderForms/simulation`

This endpoint can be triggered by marketplaces to simulate the fulfillment of an item in the cart.

The fulfillment information is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.

> Body parameter

```json
{
  "clientProfileData": {
    "corporateDocument": "string",
    "corporateName": "string",
    "corporatePhone": "string",
    "customerClass": "string",
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": true,
    "lastName": "Kent",
    "phone": "+552199999999",
    "profileCompleteOnLoading": true,
    "profileErrorOnLoading": true,
    "stateInscription": "string",
    "tradeName": "string"
  },
  "country": "BRA",
  "geoCoordinates": [
    -47.924747467041016,
    -15.832582473754883
  ],
  "isCheckedIn": false,
  "items": [
    {
      "id": "1",
      "quantity": 1,
      "seller": "1"
    }
  ],
  "marketingData": {
    "coupon": "free-shipping",
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "Facebook",
    "utmiCampaign": "utmi_campaign-example",
    "utmiPage": "utmi_page-example",
    "utmiPart": "utmi_part-example"
  },
  "postalCode": "12345-000",
  "selectedSla": "Normal",
  "storeId": "string"
}
```

<h3 id="fulfillment-simulation---external-marketplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|affiliateId|query|string|false|The affiliate ID code created by the seller.|
|sc|query|integer|false|Trade Policy (Sales Channel) identification.|
|body|body|object|false|none|
|» clientProfileData|body|object|false|Customer's profile information.|
|» » corporateDocument|body|string \| null|false|Corporate document, if the customer is a legal entity.|
|» » corporateName|body|string \| null|false|Company name, if the customer is a legal entity.|
|» » corporatePhone|body|string \| null|false|Corporate phone number, if the customer is a legal entity.|
|» » customerClass|body|string \| null|false|Customer class.|
|» » document|body|string|false|Document informed by the customer.|
|» » documentType|body|string|false|Type of the document informed by the customer.|
|» » email|body|string|false|Email address.|
|» » firstName|body|string|false|First name.|
|» » isCorporate|body|boolean|false|Indicates whether the customer is a legal entity.|
|» » lastName|body|string|false|Last name.|
|» » phone|body|string|false|Phone number.|
|» » profileCompleteOnLoading|body|boolean|false|Indicates whether profile is complete on loading.|
|» » profileErrorOnLoading|body|boolean \| null|false|Indicates whether profile presents error on loading.|
|» » stateInscription|body|string \| null|false|State inscription, if the customer is a legal entity.|
|» » tradeName|body|string \| null|false|Trade name, if the customer is a legal entity.|
|» country|body|string|false|Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.|
|» geoCoordinates|body|[number]|false|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» isCheckedIn|body|boolean|false|Indicates whether order is checked in.|
|» items|body|[object]|false|Array containing information about the SKUs inside the cart to be simulated.|
|» » id|body|string|false|The SKU ID.|
|» » quantity|body|integer(int32)|false|The quantity of items of this specific SKU in the cart to be simulated.|
|» » seller|body|string|false|The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.|
|» marketingData|body|object|false|Object containing promotion data such as coupon tracking information and internal or external UTMs.|
|» » coupon|body|string|false|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» » utmCampaign|body|string|false|UTM campaign|
|» » utmMedium|body|string|false|UTM medium.|
|» » utmSource|body|string|false|UTM source.|
|» » utmiCampaign|body|string|false|utmi_campaign (internal utm).|
|» » utmiPage|body|string|false|utmi_page (internal utm).|
|» » utmiPart|body|string|false|utmi_part (internal utm).|
|» postalCode|body|string|false|Postal code.|
|» selectedSla|body|string|false|SLA selected by the customer.|
|» storeId|body|string \| null|false|ID of the store.|

> Example responses

> 200 Response

```json
{
  "country": "BRA",
  "geoCoordinates": [
    -47.924747467041016,
    -15.832582473754883
  ],
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [
          {
            "composition": null,
            "id": "T-Shirt Customization",
            "inputValues": {
              "T-Shirt Name": {
                "domain": [
                  "[]"
                ],
                "maximumNumberOfCharacters": 2
              }
            },
            "name": "T-Shirt Customization",
            "required": false
          }
        ],
        "id": "1",
        "seller": "1"
      }
    ]
  },
  "items": [
    {
      "availability": "available",
      "id": "1",
      "listPrice": 9999,
      "measurementUnit": "un",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "price": 9999,
      "priceDefinition": {
        "calculatedSellingPrice": 2999700,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 2999700
          }
        ],
        "total": 2999700
      },
      "priceTags": [
        {
          "identifier": "1234abc-5678b-1234c",
          "isPercentual": false,
          "name": "DISCOUNT@MANUALPRICE",
          "rawValue": -50,
          "value": -5000
        }
      ],
      "priceValidUntil": "2023-07-12T11:49:01Z",
      "quantity": 1,
      "requestIndex": 0,
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 2999700,
      "tax": 0,
      "unitMultiplier": 300
    }
  ],
  "logisticsInfo": [
    {
      "addressId": null,
      "deliveryChannels": [
        {
          "id": "pickup-in-point"
        },
        {
          "id": "delivery"
        }
      ],
      "itemIndex": 0,
      "quantity": 1,
      "selectedDeliveryChannel": null,
      "selectedSla": null,
      "shipsTo": [
        "BRA"
      ],
      "slas": [
        {
          "availableDeliveryWindows": {
            "endDateUtc": "2017-03-27T00:00:00+00:00",
            "lisPrice": 0,
            "price": 0,
            "startDateUtc": "2017-03-27T00:00:00+00:00",
            "tax": 0
          },
          "deliveryChannel": "delivery",
          "deliveryIds": [
            {
              "courierId": "1",
              "courierName": "Transportadora",
              "dockId": "1",
              "kitItemDetails": [],
              "quantity": 1,
              "warehouseId": "1_1"
            }
          ],
          "deliveryWindow": {
            "endDateUtc": "2014-04-21T12:00:00+00:00",
            "listprice": 1000,
            "price": 0,
            "startDateUtc": "2014-04-21T09:00:00+00:00",
            "tax": 0
          },
          "id": "Normal",
          "listPrice": 1500,
          "lockTTL": "10d",
          "name": "Normal",
          "pickupDistance": 0,
          "pickupPointId": null,
          "pickupStoreInfo": {
            "additionalInfo": null,
            "address": null,
            "dockId": null,
            "friendlyName": null,
            "isPickupStore": false
          },
          "polygonName": null,
          "price": 1500,
          "shippingEstimate": "3bd",
          "shippingEstimateDate": null,
          "tax": 0,
          "transitTime": "3bd"
        }
      ]
    }
  ],
  "marketingData": {
    "coupon": null,
    "marketingTags": [
      "tag1",
      "tag2"
    ],
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "app",
    "utmiCampaign": "true",
    "utmiPart": "true",
    "utmipage": "true"
  },
  "messages": [],
  "paymentData": {
    "availableAccounts": [],
    "availableAssociations": {},
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [
      {
        "bin": null,
        "installments": [
          {
            "count": 1,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 1,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 2999700,
                "value": 2999700
              }
            ],
            "total": 2999700,
            "value": 2999700
          }
        ],
        "paymentGroupName": "creditCardPaymentGroup",
        "paymentName": "Visa",
        "paymentSystem": "2",
        "value": 2999700
      },
      {
        "bin": null,
        "installments": [
          {
            "count": 1,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 1,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 2999700,
                "value": 2999700
              }
            ],
            "total": 2999700,
            "value": 2999700
          }
        ],
        "paymentGroupName": "bankInvoicePaymentGroup",
        "paymentName": "Boleto Bancário",
        "paymentSystem": "6",
        "value": 2999700
      },
      {
        "bin": null,
        "installments": [
          {
            "count": 1,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 1,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 2999700,
                "value": 2999700
              }
            ],
            "total": 2999700,
            "value": 2999700
          }
        ],
        "paymentGroupName": "MercadoPagoProPaymentGroup",
        "paymentName": "MercadoPagoPro",
        "paymentSystem": "127",
        "value": 2999700
      },
      {
        "bin": null,
        "installments": [
          {
            "count": 1,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 1,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 2999700,
                "value": 2999700
              }
            ],
            "total": 2999700,
            "value": 2999700
          }
        ],
        "paymentGroupName": "custom202PaymentGroupPaymentGroup",
        "paymentName": "Dinheiro",
        "paymentSystem": "202",
        "value": 2999700
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": "",
        "displayDocument": false,
        "dueDate": "2022-07-22T11:39:36.37197Z",
        "groupName": "custom202PaymentGroupPaymentGroup",
        "id": 202,
        "isCustom": true,
        "name": "Dinheiro",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "202",
        "template": "custom202PaymentGroupPaymentGroup-template",
        "validator": null
      },
      {
        "availablePayments": null,
        "description": "",
        "displayDocument": false,
        "dueDate": "2022-07-19T11:39:36.37197Z",
        "groupName": "bankInvoicePaymentGroup",
        "id": 6,
        "isCustom": false,
        "name": "Boleto Bancário",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "6",
        "template": "bankInvoicePaymentGroup-template",
        "validator": null
      },
      {
        "availablePayments": null,
        "description": "",
        "displayDocument": false,
        "dueDate": "2022-07-19T11:39:36.37197Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": null
      },
      {
        "availablePayments": null,
        "description": "",
        "displayDocument": false,
        "dueDate": "2022-07-19T11:39:36.37197Z",
        "groupName": "MercadoPagoProPaymentGroup",
        "id": 127,
        "isCustom": false,
        "name": "MercadoPagoPro",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "127",
        "template": "MercadoPagoProPaymentGroup-template",
        "validator": null
      }
    ],
    "payments": []
  },
  "pickupPoints": [],
  "postalCode": "12345-000",
  "purchaseConditions": {
    "itemPurchaseConditions": [
      {
        "id": "1",
        "listPrice": 9999,
        "price": 9999,
        "seller": "1",
        "sellerChain": [
          "1"
        ],
        "slas": [
          {
            "availableDeliveryWindows": {
              "endDateUtc": "2017-03-27T00:00:00+00:00",
              "lisPrice": 0,
              "price": 0,
              "startDateUtc": "2017-03-27T00:00:00+00:00",
              "tax": 0
            },
            "deliveryChannel": "delivery",
            "deliveryIds": [
              {
                "courierId": "1",
                "courierName": "Transportadora",
                "dockId": "1",
                "kitItemDetails": [],
                "quantity": 1,
                "warehouseId": "1_1"
              }
            ],
            "deliveryWindow": {
              "endDateUtc": "2014-04-21T12:00:00+00:00",
              "listprice": 1000,
              "price": 0,
              "startDateUtc": "2014-04-21T09:00:00+00:00",
              "tax": 0
            },
            "id": "Normal",
            "listPrice": 1500,
            "lockTTL": "10d",
            "name": "Normal",
            "pickupDistance": 0,
            "pickupPointId": null,
            "pickupStoreInfo": {
              "additionalInfo": null,
              "address": null,
              "dockId": null,
              "friendlyName": null,
              "isPickupStore": false
            },
            "polygonName": null,
            "price": 1500,
            "shippingEstimate": "3bd",
            "shippingEstimateDate": null,
            "tax": 0,
            "transitTime": "3bd"
          }
        ]
      }
    ]
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "selectableGifts": [],
  "subscriptionData": null,
  "totals": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 2999700
    }
  ]
}
```

<h3 id="fulfillment-simulation---external-marketplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fulfillment-simulation---external-marketplace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|Three letter ISO code of the country of the shipping address.|
|items|[object]|false|none|Information on each item in the cart.|
|» availability|string|false|none|Availability.|
|» id|string|false|none|ID of the item.|
|» listPrice|integer|false|none|List price in cents.|
|» measurementUnit|string|false|none|Measurement unit.|
|» offerings|[object]|false|none|Array containing offering information.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» price|integer|false|none|Price in cents.|
|» priceDefinition|object|false|none|Price information for all units of a specific item.|
|» » calculatedSellingPrice|integer|false|none|Item's calculated unitary selling price in cents.|
|» » sellingPrices|[object]|false|none|Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.|
|» » » quantity|integer|false|none|Rounding quantity, meaning how many items are rounded to this value.|
|» » » value|integer|false|none|Value in cents for that specific rounding.|
|» » total|integer|false|none|Total value for all units of the item in cents.|
|» priceTags|[object]|false|none|Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.|
|» » identifier|string|false|none|Price tag identifier.|
|» » isPercentual|boolean|false|none|Indicates whether price tag value is applied through a percentage.|
|» » name|string|false|none|Price tag name.|
|» » owner|string|false|none|Identification of the responsible for the price tag.|
|» » rawValue|integer|false|none|Price tag raw value.|
|» » value|integer|false|none|Price tag value.|
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» quantity|integer|false|none|The quantity of the item the cart.|
|» requestIndex|integer|false|none|Request index information.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|The seller responsible for the SKU.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» tax|integer|false|none|Tax value in cents.|
|» unitMultiplier|integer|false|none|Unit multiplier.|
|logisticsInfo|[object]|false|none|Array with logistics information on each item of the `items` array in the `orderForm`.|
|» addressId|string \| null|false|none|Address ID.|
|» deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » id|string|false|none|Delivery channel ID.|
|» itemIndex|integer|false|none|Index of item in items array.|
|» itemMetadata|object|false|none|Item metadata.|
|» » items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » » assemblyOptions|[object]|false|none|Assembly options information.|
|» » » id|string|false|none|Item ID.|
|» » » seller|string|false|none|Seller.|
|» messages|[object]|false|none|Array containing an object for each message generated by our servers while processing the request.|
|» pickupPoints|[object]|false|none|Array containing pickup points information.|
|» purchaseConditions|object|false|none|Purchase conditions information.|
|» » itemPurchaseConditions|[object]|false|none|List of objects containing purchase condition information on each item in the order.|
|» » » id|string|false|none|Item ID.|
|» » » listPrice|integer|false|none|List price in cents.|
|» » » price|integer|false|none|Price in cents.|
|» » » seller|string|false|none|Seller.|
|» » » sellerChain|[object]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» » » slas|[object]|false|none|Information on available SLAs.|
|» » » » availableDeliveryWindows|object|false|none|This object contains information about the delivery window available to the shopper.|
|» » » » » endDateUtc|string|false|none|Delivery window ending day and time in UTC.|
|» » » » » lisPrice|integer|false|none|Delivery window list price.|
|» » » » » price|integer|false|none|Delivery window price.|
|» » » » » startDateUtc|string|false|none|Delivery window starting day and time in UTC.|
|» » » » » tax|integer|false|none|Delivery window tax.|
|» » » » deliveryChannel|string|false|none|Delivery channel.|
|» » » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » » courierId|string|false|none|Courier ID.|
|» » » » » courierName|string|false|none|Courier name.|
|» » » » » dockId|string|false|none|Warehouse ID.|
|» » » » » quantity|integer|false|none|Quantity.|
|» » » » » warehouseId|string|false|none|Warehouse ID.|
|» » » » deliveryWindow|object|false|none|In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.|
|» » » » » endDateUtc|string|false|none|Delivery window ending day and time in UTC.|
|» » » » » lisPrice|integer|false|none|Delivery window list price.|
|» » » » » price|integer|false|none|Delivery window price.|
|» » » » » startDateUtc|string|false|none|Delivery window starting day and time in UTC.|
|» » » » » tax|integer|false|none|Delivery window tax.|
|» » » » id|string|false|none|SLA ID.|
|» » » » listPrice|integer|false|none|List price in cents.|
|» » » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » » name|string|false|none|SLA name.|
|» » » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » » address|object \| null|false|none|Address information.|
|» » » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » » polygonName|string \| null|false|none|Polygon name.|
|» » » » price|integer|false|none|Price in cents.|
|» » » » shippingEstimate|string|false|none|Shipping estimate. For instance, "three business days" will be represented as `3bd`.|
|» » » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » » tax|integer|false|none|Tax in cents.|
|» » » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented as `3bd`.|
|» quantity|integer|false|none|Quantity.|
|» selectedDeliveryChannel|string \| null|false|none|Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.|
|» selectedSla|string \| null|false|none|Selected SLA. For example, `"normal"` or `"express"`.|
|» shipsTo|[object]|false|none|List of countries that the item may be shipped to.|
|» slas|[object]|false|none|Information on available SLAs.|
|» » availableDeliveryWindows|object|false|none|This object contains information about the delivery window available to the shopper.|
|» » » endDateUtc|string|false|none|Delivery window ending day and time in UTC.|
|» » » lisPrice|integer|false|none|Delivery window list price.|
|» » » price|integer|false|none|Delivery window price.|
|» » » startDateUtc|string|false|none|Delivery window starting day and time in UTC.|
|» » » tax|integer|false|none|Delivery window tax.|
|» » deliveryChannel|string|false|none|Delivery channel.|
|» » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » courierId|string|false|none|Courier ID.|
|» » » courierName|string|false|none|Courier name.|
|» » » dockId|string|false|none|Warehouse ID.|
|» » » quantity|integer|false|none|Quantity.|
|» » » warehouseId|string|false|none|Warehouse ID.|
|» » deliveryWindow|object|false|none|In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.|
|» » » endDateUtc|string|false|none|Delivery window ending day and time in UTC.|
|» » » lisPrice|integer|false|none|Delivery window list price.|
|» » » price|integer|false|none|Delivery window price.|
|» » » startDateUtc|string|false|none|Delivery window starting day and time in UTC.|
|» » » tax|integer|false|none|Delivery window tax.|
|» » id|string|false|none|SLA ID.|
|» » listPrice|integer|false|none|List price in cents.|
|» » lockTTL|string|false|none|Estimate date of delivery.|
|» » name|string|false|none|SLA name.|
|» » pickupDistance|integer|false|none|Pickup point distance.|
|» » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » additionalInfo|string \| null|false|none|Additional information.|
|» » » address|object \| null|false|none|Address information.|
|» » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » friendlyName|string \| null|false|none|Friendly name.|
|» » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » polygonName|string \| null|false|none|Polygon name.|
|» » price|integer|false|none|Price in cents.|
|» » shippingEstimate|string|false|none|Shipping estimate. For instance, "three business days" will be represented as `3bd`.|
|» » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » tax|integer|false|none|Tax in cents.|
|» » transitTime|string|false|none|Transit time. For instance, "three business days" is represented as `3bd`.|
|» subscriptionData|object \| null|false|none|Subscription information.|
|» totals|[object]|false|none|Information on order totals.|
|» » id|string|false|none|Total ID.|
|» » name|string|false|none|Total name.|
|» » value|integer|false|none|Total value.|
|marketingData|object \| null|false|none|Object containing promotion data such as coupon tracking information and internal or external UTMs.|
|paymentData|object|false|none|Payment data information.|
|» availableAccounts|[object]|false|none|Available accounts.|
|» availableAssociations|object|false|none|Available associations.|
|» availableTokens|[object]|false|none|Available tokens.|
|» giftCardMessages|[object]|false|none|Array of gift card messages.|
|» giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» installmentOptions|[object]|false|none|Installment options information.|
|» paymentSystems|[object]|false|none|Information on payment systems.|
|» » availablePayments|string \| null|false|none|Availability of payment.|
|» » description|string|false|none|Description.|
|» » displayDocument|boolean|false|none|Indicates whether a document is shown.|
|» » dueDate|string|false|none|Payment due date.|
|» » groupName|string|false|none|Payment group name.|
|» » id|integer|false|none|Payment system ID.|
|» » isCustom|boolean|false|none|Indicates whether it is custom.|
|» » name|string|false|none|Payment system name.|
|» » requiresAuthentication|boolean|false|none|Indicates whether a authentication is required.|
|» » requiresDocument|boolean|false|none|Indicates whether a document is required.|
|» » stringId|string|false|none|String ID.|
|» » template|string|false|none|Template.|
|» » validator|object \| null|false|none|Payment system validator.|
|» payments|[object]|false|none|Information on each payment.|
|postalCode|string \| null|false|none|Postal Code.|
|ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» rateAndBenefitsIdentifiers|[object]|false|none|List with rates and benefits identifiers.|
|» teaser|[object]|false|none|List with rates and benefits teasers.|
|selectableGifts|[object]|false|none|Array containing the data of the item selected as a gift.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Send Category Mapping to VTEX Mapper

<a id="opIdsend-category-mapping-vtex-mapper"></a>

> Code samples

```bash
curl https://example.com/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/123456789 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "categories": []
  }'
```

`POST /portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/{id}`

Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree. 

To perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace. 

This endpoint allows connectors to send the marketplace's category tree mapped in the integration. 

Connectors should send the payload compacted in .gzip format. 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "categories": []
}
```

<h3 id="send-category-mapping-to-vtex-mapper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|id|path|string|true|Code identifying returned in the *VTEX Mapper Registration* endpoint.|
|body|body|[sendCategoryMappingToVtexMapper](#schemasendcategorymappingtovtexmapper)|true|none|
|» categories|body|[object]|true|Array with Marketplace parent categories and their information.|
|» » children|body|[object]|false|Array with children categories in the marketplace, and their information.|
|» » » children|body|[object]|true|Grandchildren categories in the marketplace. Send as array of `ID`, `name` and `specifications`.|
|» » » id|body|string|true|ID of the child  category in the marketplace.|
|» » » name|body|string|true|Name of the child  category in the marketplace.|
|» » » specifications|body|[object]|true|Specifications for the Product or SKU|
|» » » » attributeName|body|string|true|Name of the attribute sent as a specification.|
|» » » » attributeValues|body|[object]|true|Values of the atttribute specified.|
|» » » » » valueName|body|string|true|Name of the value|
|» » » » required|body|boolean|true|If the specification is required, mark this flag as `true`. If not, mark it as `false`.|
|» » id|body|string|false|ID of the parent category in the marketplace.|
|» » name|body|string|false|Name of the parent category in the marketplace.|

<h3 id="send-category-mapping-to-vtex-mapper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## VTEX Mapper Registration

<a id="opIdvtex-mapper-registration"></a>

> Code samples

```bash
curl 'https://example.com/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register?an=accountName' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CategoryTreeProcessingNotificationEndpoint": "https://CategoryTreeProcessingNotificationEndpoint.com/api",
    "categoryTreeEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/categories",
    "displayName": "Marketplace A",
    "mappingEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/mapping",
    "properties": {}
  }'
```

`POST /portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register`

Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree. 

To perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace. 

This endpoint allows connectors to register the external marketplace integration in VTEX Mapper. 

In case VTEX Mapper detects an error and the call fails, the connector should check if mandatory information was sent correctly. Ex. are URLs correctly registered in the properties categoryTreeEndPoint and mappingEndPoint? 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "CategoryTreeProcessingNotificationEndpoint": "https://CategoryTreeProcessingNotificationEndpoint.com/api",
  "categoryTreeEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/categories",
  "displayName": "Marketplace A",
  "mappingEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/mapping",
  "properties": {}
}
```

<h3 id="vtex-mapper-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|an|query|string|true|Name of the VTEX account. Used as part of the URL.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[VtexMapperRegistration](#schemavtexmapperregistration)|true|none|
|» CategoryTreeProcessingNotificationEndpoint|body|string|false|The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not.|
|» categoryTreeEndPoint|body|string|true|Endpoint that returns categories and attributes according to VTEX  Mapper specifications.|
|» displayName|body|string|true|Marketplace Name, that will be displayed in VTEX Mapper.|
|» mappingEndPoint|body|string|true|Secure endpoint that will receive the category mapping sent by VTEX Mapper.|
|» properties|body|object|true|Refers to the `allowsRemap` property.|

<h3 id="vtex-mapper-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## New Order Integration

<a id="opIdEnqueueNewOrder"></a>

> Code samples

```bash
curl 'https://example.com/apiexamples.vtexcommercestable.com.br/api/order-integration/orders?affiliateId=MKP' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "allowFranchises": false,
    "clientProfileData": {
      "corporateDocument": null,
      "corporateName": null,
      "corporatePhone": null,
      "document": "99999999999",
      "email": "email@email.com.br",
      "firstName": "John",
      "lastName": "Doe",
      "phone": "99999999999",
      "stateInscription": null,
      "tradeName": null
    },
    "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
    "connectorName": "SkyHub",
    "customData": {
      "customApps": [
        {
          "fields": {
            "marketplacePaymentMethod": "credit card"
          },
          "id": "marketplace-integration",
          "major": 1
        }
      ]
    },
    "invoiceData": {
      "userPaymentInfo": {
        "paymentMethods": [
          "creditCardPaymentGroup"
        ]
      }
    },
    "items": [
      {
        "id": "1",
        "price": 975,
        "quantity": 1
      }
    ],
    "marketplaceOrderId": "{{$guid}}",
    "marketplaceOrderStatus": "NEW",
    "marketplacePaymentValue": 3025,
    "pickupAccountName": "",
    "shippingData": {
      "isFob": true,
      "isMarketplaceFulfillment": true,
      "logisticsInfo": [
        {
          "deliveryIds": {
            "warehouseId": "AR1"
          },
          "lockTTL": "1d",
          "price": 2050,
          "selectedDeliveryChannel": "delivery",
          "selectedSla": "Express",
          "shippingEstimate": "2d"
        }
      ],
      "selectedAddresses": [
        {
          "addressId": "1",
          "addressType": "Residential",
          "city": "Curitiba",
          "complement": "101",
          "country": "BRA",
          "geoCoordinates": {
            "latitude": "-29.5",
            "longitude": "-45.8"
          },
          "neighborhood": "Portão",
          "number": "4125",
          "postalCode": "81020-235",
          "receiverName": "John Doe",
          "state": "PR",
          "street": "Rua Eduardo Carlos Pereira"
        }
      ]
    }
  }'
```

`POST /{accountName}.vtexcommercestable.com.br/api/order-integration/orders`

API to integrate an external channel's order into the VTEX plataform.

This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectorEndpoint** field in [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. If the account is not informed in the URL host, it should also be defined as a query string parameter in the route: `an={account}`. 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "allowFranchises": false,
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "document": "99999999999",
    "email": "email@email.com.br",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "99999999999",
    "stateInscription": null,
    "tradeName": null
  },
  "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
  "connectorName": "SkyHub",
  "customData": {
    "customApps": [
      {
        "fields": {
          "marketplacePaymentMethod": "credit card"
        },
        "id": "marketplace-integration",
        "major": 1
      }
    ]
  },
  "invoiceData": {
    "userPaymentInfo": {
      "paymentMethods": [
        "creditCardPaymentGroup"
      ]
    }
  },
  "items": [
    {
      "id": "1",
      "price": 975,
      "quantity": 1
    }
  ],
  "marketplaceOrderId": "{{$guid}}",
  "marketplaceOrderStatus": "NEW",
  "marketplacePaymentValue": 3025,
  "pickupAccountName": "",
  "shippingData": {
    "isFob": true,
    "isMarketplaceFulfillment": true,
    "logisticsInfo": [
      {
        "deliveryIds": {
          "warehouseId": "AR1"
        },
        "lockTTL": "1d",
        "price": 2050,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Express",
        "shippingEstimate": "2d"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "1",
        "addressType": "Residential",
        "city": "Curitiba",
        "complement": "101",
        "country": "BRA",
        "geoCoordinates": {
          "latitude": "-29.5",
          "longitude": "-45.8"
        },
        "neighborhood": "Portão",
        "number": "4125",
        "postalCode": "81020-235",
        "receiverName": "John Doe",
        "state": "PR",
        "street": "Rua Eduardo Carlos Pereira"
      }
    ]
  }
}
```

<h3 id="new-order-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|an|query|string|false|Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.|
|accountName|path|string|true|Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.|
|affiliateId|query|string|true|ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.|
|body|body|[EnqueueNewOrderRequest](#schemaenqueueneworderrequest)|true|none|
|» allowFranchises|body|boolean|true|Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.|
|» clientProfileData|body|[ClientProfileData](#schemaclientprofiledata)|true|Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).|
|» connectorEndpoint|body|string|false|String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:  <br><br>- `https://{{externalconnector}}.com`  <br><br>- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|» connectorName|body|string|false|String with the identifier code of the connector responsible for the order.  <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|» customData|body|[CustomData](#schemacustomdata)|false|Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api).|
|» invoiceData|body|[InvoiceData](#schemainvoicedata)|true|Object with the order's billing data.|
|» items|body|[[Item](#schemaitem)]|true|none|
|» marketplaceOrderId|body|string|true|String that indicates the order's ID in the marketplace.|
|» marketplaceOrderStatus|body|string|true|Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:  <br><br>- `new`  <br><br>- `approved`|
|» marketplacePaymentValue|body|integer|true|Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.|
|» pickupAccountName|body|string|false|String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise.|
|» shippingData|body|[ShippingData](#schemashippingdata)|true|none|

> Example responses

> 200 Response

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

> default Response

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

<h3 id="new-order-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Deliverybyseller](#schemadeliverybyseller)|
|default|Default||[Deliverybyfranchiseseller](#schemadeliverybyfranchiseseller)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Order Status

<a id="opIdUpdateOrderStatus"></a>

> Code samples

```bash
curl https://example.com/apiexamples.vtexcommercestable.com.br/api/order-integration/orders/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
    "connectorName": "Skyhub",
    "marketplaceOrderId": "{{$guid}}",
    "marketplaceOrderStatus": "APPROVED"
  }'
```

`PUT /{accountName}.vtexcommercestable.com.br/api/order-integration/orders/status`

API request used to update an order status in VTEX.

This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectiorEndpoint** field or the **connectiorEndpoint** [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
  "connectorName": "Skyhub",
  "marketplaceOrderId": "{{$guid}}",
  "marketplaceOrderStatus": "APPROVED"
}
```

<h3 id="update-order-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|an|query|string|false|Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.|
|accountName|path|string|true|Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.|
|body|body|[UpdateOrderStatusRequest](#schemaupdateorderstatusrequest)|true|none|
|» connectorEndpoint|body|string|true|String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:  <br><br>- `https://{{externalconnector}}.com`  <br><br>- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|» connectorName|body|string|true|String with the identifier code of the connector responsible for the order.  <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|» marketplaceOrderId|body|string|true|String that indicates the order's ID in the marketplace.|
|» marketplaceOrderStatus|body|string|true|Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:  <br><br>- `new`  <br><br>- `approved`.|

> Example responses

> 200 Response

```json
{
  "accountName": null,
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "ApproveOrder",
  "marketplaceOrderId": "7e62fcd3-827b-400d-be8a-f050a79c4976",
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

<h3 id="update-order-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Approveorder](#schemaapproveorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Place fulfillment order

<a id="opIdPlaceFulfillmentOrder"></a>

> Code samples

```bash
curl 'https://example.com/apiexamples.vtexcommercestable.com.br/api/fulfillment/pvt/orders?affiliateId=MKP' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "clientProfileData": {
      "corporateDocument": "12345678000100",
      "corporateName": "company-name",
      "corporatePhone": "+551100988887777",
      "document": "123456789",
      "documentType": "cpf",
      "email": "customer@examplemail.com",
      "firstName": "first-name",
      "isCorporate": false,
      "lastName": "last-name",
      "phone": "+55110988887777",
      "stateInscription": "12345678",
      "tradeName": "trade-name"
    },
    "isCreatedAsync": false,
    "items": [
      {
        "id": "123456789",
        "quantity": 1,
        "seller": "1"
      }
    ],
    "marketingData": {
      "utmCampaign": "Black friday",
      "utmMedium": "CPC",
      "utmSource": "Facebook",
      "utmiCampaign": "utmi_campaign-exmaple",
      "utmiPage": "utmi_page-example",
      "utmiPart": "utmi_part-exmaple"
    },
    "marketplaceOrderId": "123456789",
    "marketplacePaymentValue": 100,
    "marketplaceServicesEndpoint": "https://exampleseller.marketplaceservices.com",
    "openTextField": "open-text-example",
    "paymentData": null,
    "shippingData": {
      "address": {
        "addressId": "Home",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "3rd floor",
        "country": "BRA",
        "geoCoordinates": [
          "00.00000"
        ],
        "neighborhood": "Botafogo",
        "number": "300",
        "postalCode": "12345000",
        "receiverName": "receiver-name",
        "reference": "Grey building",
        "state": "Rio de Janeiro",
        "street": "Praia de Botafogo"
      },
      "logisticsInfo": [
        {
          "deliveryWindow": {
            "endDateUtc": "2021-07-13T23:59:59+00:00",
            "lisPrice": 0,
            "price": 0,
            "startDateUtc": "2021-07-13T00:00:00+00:00",
            "tax": 0
          },
          "itemIndex": 0,
          "lockTTL": "8d",
          "price": 1099,
          "selectedSla": "Express",
          "shippingEstimate": "7d"
        }
      ],
      "updateStatus": "updated"
    }
  }'
```

`POST /{accountName}.{environment}.com.br/api/fulfillment/pvt/orders`

Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.

> If you plan to integrate external orders with possible [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#) be mindful of the `isCreatedAsync` request body field. 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "clientProfileData": {
    "corporateDocument": "12345678000100",
    "corporateName": "company-name",
    "corporatePhone": "+551100988887777",
    "document": "123456789",
    "documentType": "cpf",
    "email": "customer@examplemail.com",
    "firstName": "first-name",
    "isCorporate": false,
    "lastName": "last-name",
    "phone": "+55110988887777",
    "stateInscription": "12345678",
    "tradeName": "trade-name"
  },
  "isCreatedAsync": false,
  "items": [
    {
      "id": "123456789",
      "quantity": 1,
      "seller": "1"
    }
  ],
  "marketingData": {
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "Facebook",
    "utmiCampaign": "utmi_campaign-exmaple",
    "utmiPage": "utmi_page-example",
    "utmiPart": "utmi_part-exmaple"
  },
  "marketplaceOrderId": "123456789",
  "marketplacePaymentValue": 100,
  "marketplaceServicesEndpoint": "https://exampleseller.marketplaceservices.com",
  "openTextField": "open-text-example",
  "paymentData": null,
  "shippingData": {
    "address": {
      "addressId": "Home",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3rd floor",
      "country": "BRA",
      "geoCoordinates": [
        "00.00000"
      ],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "12345000",
      "receiverName": "receiver-name",
      "reference": "Grey building",
      "state": "Rio de Janeiro",
      "street": "Praia de Botafogo"
    },
    "logisticsInfo": [
      {
        "deliveryWindow": {
          "endDateUtc": "2021-07-13T23:59:59+00:00",
          "lisPrice": 0,
          "price": 0,
          "startDateUtc": "2021-07-13T00:00:00+00:00",
          "tax": 0
        },
        "itemIndex": 0,
        "lockTTL": "8d",
        "price": 1099,
        "selectedSla": "Express",
        "shippingEstimate": "7d"
      }
    ],
    "updateStatus": "updated"
  }
}
```

<h3 id="place-fulfillment-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|Name of the VTEX account. Used as part of the URL.|
|environment|path|string|true|Environment to be used. It is passed as part of the URL.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sc|query|string|false|Sales channel.|
|affiliateId|query|string|true|ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.|
|body|body|object|false|none|
|» clientProfileData|body|object|true|Customer's profile information.|
|» » corporateDocument|body|string \| null|false|Corporate document, if the customer is a legal entity.|
|» » corporateName|body|string \| null|false|Company name, if the customer is a legal entity.|
|» » corporatePhone|body|string \| null|false|Corporate phone number, if the customer is a legal entity.|
|» » document|body|string|true|Document informed by the customer. Validation depends on the country.|
|» » documentType|body|string|true|Type of the document informed by the customer.|
|» » email|body|string|true|Customer's email address.|
|» » firstName|body|string|true|Customer's first name.|
|» » isCorporate|body|boolean \| null|false|`true` if the customer is a legal entity.|
|» » lastName|body|string|true|Customer's last name.|
|» » phone|body|string|false|Customer's phone number.|
|» » stateInscription|body|string \| null|false|State inscription, if the customer is a legal entity.|
|» » tradeName|body|string \| null|false|Trade name, if the customer is a legal entity.|
|» isCreatedAsync|body|boolean|false|Indicates whether an order is created. It must be `true` if an order is being placed with [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#), otherwise the request will not work.|
|» items|body|[object]|true|Array of objects containing information on each of the order's items.|
|» » attachments|body|[string]|false|Array containing information on attachments.|
|» » bundleItems|body|[object]|false|Information on services sold along with the SKU. Example: a gift package.|
|» » » id|body|integer|false|Service identifier.|
|» » » name|body|string|false|Service name.|
|» » » price|body|integer|false|Service price. The last two digits are the cents.|
|» » » type|body|string|false|Service type.|
|» » commission|body|integer|false|Comission.|
|» » freightCommission|body|integer|false|Freight comission|
|» » id|body|string|true|The SKU ID.|
|» » isGift|body|boolean|false|Indicates whether the order is a gift.|
|» » itemAttachment|body|object|false|Item attachment.|
|» » » content|body|string|false|Content referring to the customization requested by the customer.|
|» » » name|body|string|false|Attachment name.|
|» » measurementUnit|body|string|false|SKU measurement unit.|
|» » price|body|integer|false|Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.|
|» » priceTags|body|[object]|false|Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.|
|» » » identifier|body|string|false|Price tag identifier.|
|» » » isPercentual|body|boolean|false|`true` if price tag value is applied through a percentage.|
|» » » name|body|string|false|Price tag name.|
|» » » rawValue|body|integer|false|Price tag value.|
|» » » value|body|integer|false|Price tag raw value.|
|» » quantity|body|integer(int32)|true|The quantity of items of this specific SKU in the cart to be simulated.|
|» » seller|body|string|true|The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.|
|» » unitMultiplier|body|integer|false|SKU unit multiplier.|
|» marketingData|body|object|false|none|
|» » utmCampaign|body|string|false|UTM campaign|
|» » utmMedium|body|string|false|UTM medium.|
|» » utmSource|body|string|false|UTM source.|
|» » utmiCampaign|body|string|false|utmi_campaign (internal utm)|
|» » utmiPage|body|string|false|utmi_page (internal utm)|
|» » utmiPart|body|string|false|utmi_part (internal utm)|
|» marketplaceOrderId|body|string|true|ID of the order in the marketplace.|
|» marketplacePaymentValue|body|integer|true|Value of the payment made to the marketplace.|
|» marketplaceServicesEndpoint|body|string|true|Endpoint provided by the marketplace for post purchase communication. Should be an URL, containing protocol, host, path and query string (in case it applies).|
|» openTextField|body|string|false|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)|
|» paymentData|body|object \| null|false|In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.|
|» shippingData|body|object|true|Shipping information.|
|» » address|body|object|false|Shipping address.|
|» » » addressId|body|string|false|Address ID.|
|» » » addressType|body|string|true|Type of address. For example, `Residential` or `Pickup`, among others.|
|» » » city|body|string|true|City of the shipping address.|
|» » » complement|body|string|false|Complement to the shipping address in case it applies.|
|» » » country|body|string|true|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|body|[string]|false|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » » neighborhood|body|string|false|Neighborhood of the shipping address.|
|» » » number|body|string|true|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|body|string|true|Postal Code. Validation depends on the country.|
|» » » receiverName|body|string|true|Name of the person who is going to receive the order.|
|» » » reference|body|string|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|body|string|true|State of the shipping address.|
|» » » street|body|string|true|Street of the shipping address.|
|» » logisticsInfo|body|[object]|false|Array of objects containing logistics information of each item.|
|» » » deliveryWindow|body|object|false|In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper.|
|» » » » endDateUtc|body|string|false|Delivery window ending day and time in UTC.|
|» » » » lisPrice|body|integer|false|Delivery window list price.|
|» » » » price|body|integer|false|Delivery window price.|
|» » » » startDateUtc|body|string|false|Delivery window starting day and time in UTC.|
|» » » » tax|body|integer|false|Delivery window tax.|
|» » » itemIndex|body|integer|true|Index of the item in the `items` array, starting from 0.|
|» » » lockTTL|body|string|false|Logistics reservation waiting time.|
|» » » price|body|integer|true|Shipping price for the item. Does not account for the whole order's shipping price.|
|» » » selectedSla|body|string|true|Selected shipping option|
|» » » shippingEstimate|body|string|false|Estimated time until delivery for the item.|
|» » updateStatus|body|string|false|Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`|

> Example responses

> 200 Response

```json
[
  {
    "clientProfileData": {
      "corporateDocument": null,
      "corporateName": null,
      "corporatePhone": null,
      "document": "11417984642",
      "documentType": "cpf",
      "email": "fba45537f5c84d4092cf064da742fe3d@ct.vtex.com.br",
      "firstName": "Júlio",
      "isCorporate": false,
      "lastName": "Augusto de Oliveira",
      "phone": "395555258",
      "stateInscription": null,
      "tradeName": null,
      "userProfileId": null
    },
    "customData": null,
    "followUpEmail": "9762a2a9028a4b5d8eb9a8ff909d15ce@ct.vtex.com.br",
    "items": [
      {
        "bundleItems": [],
        "comission": 0,
        "freightComission": 0,
        "id": "2",
        "isGift": false,
        "measurementUnit": "un",
        "price": 13890,
        "priceTable": null,
        "priceTags": [],
        "quantity": 1,
        "seller": "1",
        "unitMultiplier": 1
      }
    ],
    "marketplaceOrderId": "956",
    "orderId": "MBR-956",
    "paymentData": null,
    "shippingData": {
      "address": {
        "addressId": "Casa",
        "addressType": "Residencial",
        "city": "Americana",
        "complement": null,
        "country": "BRA",
        "geoCoordinates": [],
        "neighborhood": "Grande circo",
        "number": "31187",
        "postalCode": "98776003",
        "receiverName": "Júlio Augusto de Oliveira",
        "reference": "Bairro do foca / Posto de Saúde 65",
        "state": "SP",
        "street": "Rua da casa"
      },
      "isFOB": false,
      "logisticsInfo": [
        {
          "addressId": "Casa",
          "deliveryIds": [
            {
              "dockId": "1",
              "warehouseId": "1_1"
            }
          ],
          "deliveryWindow": null,
          "itemIndex": 0,
          "lockTTL": "8d",
          "price": 1090,
          "selectedDeliveryChannel": "delivery",
          "selectedSla": "Correios",
          "shippingEstimate": "7d"
        }
      ],
      "selectedaddresses": [
        {
          "addressId": "Casa",
          "addressType": "Residencial",
          "city": "Americana",
          "complement": null,
          "country": "BRA",
          "geoCoordinates": [],
          "neighborhood": "Grande circo",
          "number": "31187",
          "postalCode": "98776003",
          "receiverName": "Júlio Augusto de Oliveira",
          "reference": "Bairro do foca / Posto de Saúde 65",
          "state": "SP",
          "street": "Rua da casa"
        }
      ],
      "trackingHints": []
    }
  }
]
```

<h3 id="place-fulfillment-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Authorize dispatch for fulfillment order

<a id="opIdAuthorizeDispatchForFulfillmentOrder"></a>

> Code samples

```bash
curl 'https://example.com/apiexamples.vtexcommercestable.com.br/api/fulfillment/pvt/orders/MKP-123/fulfill?affiliateId=MKP' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "marketplaceOrderId": "123"
  }'
```

`POST /{accountName}.{environment}.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill`

Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side. 

For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).

> Body parameter

```json
{
  "marketplaceOrderId": "123"
}
```

<h3 id="authorize-dispatch-for-fulfillment-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|Name of the VTEX account. Used as part of the URL.|
|environment|path|string|true|Environment to be used. It is passed as part of the URL.|
|orderId|path|string|true|ID of the order that is to be authorized. It is composed of the `afilliateId` and the `marketplaceOrderId` joined with a `-`. For instance, an order with an ID `"123"` coming from the marketplace `"MKP"` has an `orderId` of `"MKP-123"`.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sc|query|string|false|Sales channel.|
|affiliateId|query|string|true|ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.|
|body|body|object|false|none|
|» marketplaceOrderId|body|string|false|ID of the order in the marketplace. It is the same as the `orderId` without the `afilliateId` at the beginning. For instance, if the `orderId` is `"MKP-123"`, the `marketplaceOrderId` is `"123"`.|

> Example responses

> 200 Response

```json
{
  "marketplaceOrderId": "123"
}
```

<h3 id="authorize-dispatch-for-fulfillment-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_Approveorder">Approveorder</h2>
<!-- backwards compatibility -->
<a id="schemaapproveorder"></a>
<a id="schema_Approveorder"></a>
<a id="tocSapproveorder"></a>
<a id="tocsapproveorder"></a>

```json
{
  "accountName": null,
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "ApproveOrder",
  "marketplaceOrderId": "7e62fcd3-827b-400d-be8a-f050a79c4976",
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string \| null|true|none|String that indicates which account made the request.|
|code|string|true|none|String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the Response Codes section of this API Reference.|
|errors|[object]|true|none|List with errors related to the response, if there is any.|
|fields|object \| null|true|none|Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: <br><br>`mainOrderId`: String with the order's ID inside the main seller account in VTEX. <br><br>`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: <br><br>- `allowFranchises` field set to `true` when integrating the order <br><br>- `SLA` chosen for the order is from a franchise account.|
|flow|string|true|none|String containing the name of the flow responsible for the response. This field can contain the following values: <br><br>`PlaceOrder`: when integrating new orders. <br><br>`ApproveOrder`: when approving existing orders. <br><br>`Unknown`: when we’re not able to identify the flow.|
|marketplaceOrderId|string \| null|true|none|String that indicates the order's ID in the marketplace.|
|message|string|true|none|String with a message explaining the code returned in the response.|
|operationId|string \| null|true|none|String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.|
|success|boolean|true|none|Boolean that indicates if the response is successful or not.|

<h2 id="tocS_ClientProfileData">ClientProfileData</h2>
<!-- backwards compatibility -->
<a id="schemaclientprofiledata"></a>
<a id="schema_ClientProfileData"></a>
<a id="tocSclientprofiledata"></a>
<a id="tocsclientprofiledata"></a>

```json
{
  "corporateDocument": "99999999999",
  "corporateName": "The Witcher Inc.",
  "corporatePhone": "99999999999",
  "document": "99999999999",
  "email": "cirilla@cintra.com",
  "firstName": "Cirilla",
  "lastName": "Cintra",
  "phone": "99999999999",
  "stateInscription": "99999999999",
  "tradeName": "The Witcher"
}
```

Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporateDocument|string \| null|true|none|String with the company’s document number, in case of corporate orders.|
|corporateName|string \| null|true|none|String with the company’s name, in case of corporate orders.|
|corporatePhone|string \| null|true|none|String with the company’s phone number, in case of corporate orders.|
|document|string|true|none|String with the customer’s document number.|
|email|string|true|none|String with the customer's email.|
|firstName|string|true|none|String with the customer's first name.|
|lastName|string|true|none|String with the customer’s surname.|
|phone|string|true|none|String with the customer’s phone number.|
|stateInscription|string \| null|true|none|String with the company’s state registration, in case of corporate orders.|
|tradeName|string \| null|true|none|String with the company’s fantasy name, in case of corporate orders.|

<h2 id="tocS_CustomApp">CustomApp</h2>
<!-- backwards compatibility -->
<a id="schemacustomapp"></a>
<a id="schema_CustomApp"></a>
<a id="tocScustomapp"></a>
<a id="tocscustomapp"></a>

```json
{
  "fields": {
    "marketplacePaymentMethod": "credit card"
  },
  "id": "marketplace-integration",
  "major": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[Fields](#schemafields)|true|none|String dictionary with the names of the fields and their respective values that must be inserted into the order.|
|id|string|true|none|App's ID.|
|major|integer|true|none|Integer with the major version of the app. Optional, defaulting to one.|

<h2 id="tocS_CustomData">CustomData</h2>
<!-- backwards compatibility -->
<a id="schemacustomdata"></a>
<a id="schema_CustomData"></a>
<a id="tocScustomdata"></a>
<a id="tocscustomdata"></a>

```json
{
  "customApps": [
    {
      "fields": {
        "marketplacePaymentMethod": "credit card"
      },
      "id": "marketplace-integration",
      "major": 1
    }
  ]
}
```

Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customApps|[[CustomApp](#schemacustomapp)]|true|none|none|

<h2 id="tocS_DeliveryIds">DeliveryIds</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryids"></a>
<a id="schema_DeliveryIds"></a>
<a id="tocSdeliveryids"></a>
<a id="tocsdeliveryids"></a>

```json
{
  "warehouseId": "AR1"
}
```

List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouseId|string|true|none|String with the ID of the warehouse used for marketplace fulfillment. Required when `isFob` = `true` and `isMarketplaceFulfillment` = `true`.|

<h2 id="tocS_Deliverybyfranchiseseller">Deliverybyfranchiseseller</h2>
<!-- backwards compatibility -->
<a id="schemadeliverybyfranchiseseller"></a>
<a id="schema_Deliverybyfranchiseseller"></a>
<a id="tocSdeliverybyfranchiseseller"></a>
<a id="tocsdeliverybyfranchiseseller"></a>

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|String that indicates which account made the request.|
|code|string|true|none|String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.|
|errors|[object]|true|none|List with errors related to the response, if there's any.|
|fields|object \| null|true|none|Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: <br><br>`mainOrderId`: String with the order's ID inside the main seller account in VTEX. <br><br>`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: <br><br>- `allowFranchises` field set to `true` when integrating the order <br><br>- `SLA` chosen for the order is from a franchise account.|
|flow|string|true|none|String containing the name of the flow responsible for the response. This field can contain the following values: <br><br>`PlaceOrder`: when integrating new orders <br><br>`ApproveOrder`: when approving existing orders <br><br>`Unknown`: when we’re not able to identify the flow|
|marketplaceOrderId|string \| null|true|none|String that indicates the order's ID in the marketplace.|
|message|string \| null|true|none|String with a message explaining the code returned in the response. |
|operationId|string \| null|true|none|String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.|
|success|boolean|true|none|Boolean that indicates if the response is successful or not.|

<h2 id="tocS_Deliverybyseller">Deliverybyseller</h2>
<!-- backwards compatibility -->
<a id="schemadeliverybyseller"></a>
<a id="schema_Deliverybyseller"></a>
<a id="tocSdeliverybyseller"></a>
<a id="tocsdeliverybyseller"></a>

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|String that indicates which account made the request.|
|code|string|true|none|String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.|
|errors|[object]|true|none|List with errors related to the response, if there's any.|
|fields|object \| null|true|none|Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: <br><br>`mainOrderId`: String with the order's ID inside the main seller account in VTEX. <br><br>`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: <br><br>- `allowFranchises` field set to `true` when integrating the order <br><br>- `SLA` chosen for the order is from a franchise account.|
|flow|string|true|none|String containing the name of the flow responsible for the response. This field can contain the following values: <br><br>`PlaceOrder`: when integrating new orders <br><br>`ApproveOrder`: when approving existing orders <br><br>`Unknown`: when we’re not able to identify the flow|
|marketplaceOrderId|string \| null|true|none|String that indicates the order's ID in the marketplace.|
|message|string|true|none|String with a message explaining the code returned in the response. |
|operationId|string \| null|true|none|String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.|
|success|boolean|true|none|Boolean that indicates if the response is successful or not.|

<h2 id="tocS_EnqueueNewOrderRequest">EnqueueNewOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenqueueneworderrequest"></a>
<a id="schema_EnqueueNewOrderRequest"></a>
<a id="tocSenqueueneworderrequest"></a>
<a id="tocsenqueueneworderrequest"></a>

```json
{
  "allowFranchises": false,
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "document": "99999999999",
    "email": "email@email.com.br",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "99999999999",
    "stateInscription": null,
    "tradeName": null
  },
  "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
  "connectorName": "SkyHub",
  "customData": {
    "customApps": [
      {
        "fields": {
          "marketplacePaymentMethod": "credit card"
        },
        "id": "marketplace-integration",
        "major": 1
      }
    ]
  },
  "invoiceData": {
    "userPaymentInfo": {
      "paymentMethods": [
        "creditCardPaymentGroup"
      ]
    }
  },
  "items": [
    {
      "id": "1",
      "price": 975,
      "quantity": 1
    }
  ],
  "marketplaceOrderId": "{{$guid}}",
  "marketplaceOrderStatus": "NEW",
  "marketplacePaymentValue": 3025,
  "pickupAccountName": "",
  "shippingData": {
    "isFob": true,
    "isMarketplaceFulfillment": true,
    "logisticsInfo": [
      {
        "deliveryIds": {
          "warehouseId": "AR1"
        },
        "lockTTL": "1d",
        "price": 2050,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Express",
        "shippingEstimate": "2d"
      }
    ],
    "selectedAddresses": [
      {
        "addressId": "1",
        "addressType": "Residential",
        "city": "Curitiba",
        "complement": "101",
        "country": "BRA",
        "geoCoordinates": {
          "latitude": "-29.5",
          "longitude": "-45.8"
        },
        "neighborhood": "Portão",
        "number": "4125",
        "postalCode": "81020-235",
        "receiverName": "John Doe",
        "state": "PR",
        "street": "Rua Eduardo Carlos Pereira"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowFranchises|boolean|true|none|Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.|
|clientProfileData|[ClientProfileData](#schemaclientprofiledata)|true|none|Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).|
|connectorEndpoint|string|false|none|String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:  <br><br>- `https://{{externalconnector}}.com`  <br><br>- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|connectorName|string|false|none|String with the identifier code of the connector responsible for the order.  <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|customData|[CustomData](#schemacustomdata)|false|none|Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api).|
|invoiceData|[InvoiceData](#schemainvoicedata)|true|none|Object with the order's billing data.|
|items|[[Item](#schemaitem)]|true|none|none|
|marketplaceOrderId|string|true|none|String that indicates the order's ID in the marketplace.|
|marketplaceOrderStatus|string|true|none|Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:  <br><br>- `new`  <br><br>- `approved`|
|marketplacePaymentValue|integer|true|none|Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.|
|pickupAccountName|string|false|none|String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise.|
|shippingData|[ShippingData](#schemashippingdata)|true|none|none|

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
{
  "marketplacePaymentMethod": "credit card"
}
```

String dictionary with the names of the fields and their respective values that must be inserted into the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketplacePaymentMethod|string|true|none|String with field's key and value.|

<h2 id="tocS_GeoCoordinates">GeoCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemageocoordinates"></a>
<a id="schema_GeoCoordinates"></a>
<a id="tocSgeocoordinates"></a>
<a id="tocsgeocoordinates"></a>

```json
{
  "latitude": "-25.4158764",
  "longitude": "-49.342759"
}
```

Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|string|true|none|Double value with the latitude coordinates of the address. Required only if the geoCoordinates field is defined. <br><br>Example format: `-25.4158764`.|
|longitude|string|true|none|Double value with the longitude coordinates of the address. Required only if the geoCoordinates field is defined. Example format: `-49.342759`.|

<h2 id="tocS_InvoiceData">InvoiceData</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedata"></a>
<a id="schema_InvoiceData"></a>
<a id="tocSinvoicedata"></a>
<a id="tocsinvoicedata"></a>

```json
{
  "userPaymentInfo": {
    "paymentMethods": [
      "creditCardPaymentGroup"
    ]
  }
}
```

Object with the order's billing data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userPaymentInfo|[UserPaymentInfo](#schemauserpaymentinfo)|true|none|Structure with the order’s payment data. Required only if `invoiceData` is defined.|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "1",
  "price": 975,
  "quantity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|String with the SKU ID in VTEX’s catalog.|
|price|integer|true|none|Integer with the SKU’s unit price. If the value is `USD110.50`, convert it to the format → `11050`.|
|quantity|integer|true|none|Integer with the quantity of the SKU present in the order. The value should be greater than zero.|

<h2 id="tocS_LogisticsInfo">LogisticsInfo</h2>
<!-- backwards compatibility -->
<a id="schemalogisticsinfo"></a>
<a id="schema_LogisticsInfo"></a>
<a id="tocSlogisticsinfo"></a>
<a id="tocslogisticsinfo"></a>

```json
{
  "deliveryIds": {
    "warehouseId": "AR1"
  },
  "lockTTL": "1d",
  "price": 2050,
  "selectedDeliveryChannel": "delivery",
  "selectedSla": "Express",
  "shippingEstimate": "2d"
}
```

List that references the SLAs responsible for delivering each item in the order.  

This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  

The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryIds|[DeliveryIds](#schemadeliveryids)|true|none|List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery.|
|lockTTL|string|true|none|String with the inventory reservation period in VTEX's logistics system. To fill in this field insert the number of days, followed by the letter for the chosen unit. <br><br>- Days: `d` <br><br>- Business days: `bd`. <br><br>Example formats: `12d`, `5d`.|
|price|integer|true|none|Integer indicating the shipping price for this SKU. If the value is `USD20.50`, convert it to the format → `2050`.|
|selectedDeliveryChannel|string|true|none|String with the selected delivery channel. This field supports the following values:  <br><br>- `delivery`,  <br><br>- `pickup-in-point`.|
|selectedSla|string|true|none|String with the selected delivery SLA.|
|shippingEstimate|string|true|none|String with the order's estimated delivery time. To fill in this field, insert a number,  followed by the letter for the chosen unit. <br><br>- Days: `d` <br><br>- Business days: `bd`. <br><br>- Hours: `h` <br><br>- Minutes: `m`. <br><br>Example formats: `12d`, `5bd`, `3h`, `50m`.|

<h2 id="tocS_Pickup-in-point">Pickup-in-point</h2>
<!-- backwards compatibility -->
<a id="schemapickup-in-point"></a>
<a id="schema_Pickup-in-point"></a>
<a id="tocSpickup-in-point"></a>
<a id="tocspickup-in-point"></a>

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|String that indicates which account made the request.|
|code|string|true|none|String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.|
|errors|[object]|true|none|List with errors related to the response, if there's any.|
|fields|object \| null|true|none|Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: <br><br>`mainOrderId`: String with the order's ID inside the main seller account in VTEX. <br><br>`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: <br><br>- `allowFranchises` field set to `true` when integrating the order <br><br>- `SLA` chosen for the order is from a franchise account.|
|flow|string|true|none|String containing the name of the flow responsible for the response. This field can contain the following values: <br><br>`PlaceOrder`: when integrating new orders <br><br>`ApproveOrder`: when approving existing orders <br><br>`Unknown`: when we’re not able to identify the flow|
|marketplaceOrderId|string \| null|true|none|String that indicates the order's ID in the marketplace.|
|message|string|true|none|String with a message explaining the code returned in the response. |
|operationId|string \| null|true|none|String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.|
|success|boolean|true|none|Boolean that indicates if the response is successful or not.|

<h2 id="tocS_Pickup-in-pointfranchise">Pickup-in-pointfranchise</h2>
<!-- backwards compatibility -->
<a id="schemapickup-in-pointfranchise"></a>
<a id="schema_Pickup-in-pointfranchise"></a>
<a id="tocSpickup-in-pointfranchise"></a>
<a id="tocspickup-in-pointfranchise"></a>

```json
{
  "accountName": "grocery1",
  "code": "SOI003",
  "errors": null,
  "fields": null,
  "flow": "PlaceOrder",
  "marketplaceOrderId": null,
  "message": "Order successfully enqueued",
  "operationId": null,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|String that indicates which account made the request.|
|code|string|true|none|String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.|
|errors|[object]|true|none|List with errors related to the response, if there's any.|
|fields|object \| null|true|none|Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields: <br><br>`mainOrderId`: String with the order's ID inside the main seller account in VTEX. <br><br>`franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is: <br><br>- `allowFranchises` field set to `true` when integrating the order <br><br>- `SLA` chosen for the order is from a franchise account.|
|flow|string|true|none|String containing the name of the flow responsible for the response. This field can contain the following values: <br><br>`PlaceOrder`: when integrating new orders <br><br>`ApproveOrder`: when approving existing orders <br><br>`Unknown`: when we’re not able to identify the flow|
|marketplaceOrderId|string \| null|true|none|String that indicates the order's ID in the marketplace.|
|message|string|true|none|String with a message explaining the code returned in the response. |
|operationId|string \| null|true|none|String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.|
|success|boolean|true|none|Boolean that indicates if the response is successful or not.|

<h2 id="tocS_SelectedAddress">SelectedAddress</h2>
<!-- backwards compatibility -->
<a id="schemaselectedaddress"></a>
<a id="schema_SelectedAddress"></a>
<a id="tocSselectedaddress"></a>
<a id="tocsselectedaddress"></a>

```json
{
  "addressId": "1",
  "addressType": "commercial",
  "city": "City",
  "complement": "Complement to address",
  "country": "BRA",
  "geoCoordinates": {
    "latitude": "-25.4158764",
    "longitude": "-49.342759"
  },
  "neighborhood": "Neighborhood's name",
  "number": "1986",
  "postalCode": "81020-235",
  "receiverName": "Yennefer of Vengerberg",
  "state": "RJ",
  "street": "The Witcher Avenue"
}
```

List with the delivery addresses selected for the order. We currently only support a single delivery address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressId|string|true|none|String with the address identifier. Optional for `delivery` type orders, and required for `pickup-in-point` orders.|
|addressType|string|true|none|String with the address type. The field supports the values: `residential`, `commercial`, `pickup`.|
|city|string|false|none|String with the city’s name.|
|complement|string|false|none|String with the address' complement, like building name, or extra number.|
|country|string|true|none|String with the state's name, filled in with three letter code.|
|geoCoordinates|[GeoCoordinates](#schemageocoordinates)|false|none|Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders.|
|neighborhood|string|false|none|String with the neighborhood's name.|
|number|string|false|none|String with the street's number.|
|postalCode|string|true|none|String with the address' postal code.|
|receiverName|string|true|none|String with the name of the person responsible for receiving the order.|
|state|string|false|none|String with the state's name, filled in with two letter code.|
|street|string|false|none|String with the street's name.|

<h2 id="tocS_ShippingData">ShippingData</h2>
<!-- backwards compatibility -->
<a id="schemashippingdata"></a>
<a id="schema_ShippingData"></a>
<a id="tocSshippingdata"></a>
<a id="tocsshippingdata"></a>

```json
{
  "isFob": false,
  "isMarketplaceFulfillment": false,
  "logisticsInfo": [
    {
      "deliveryIds": {
        "warehouseId": "AR1"
      },
      "lockTTL": "1d",
      "price": 2050,
      "selectedDeliveryChannel": "delivery",
      "selectedSla": "Express",
      "shippingEstimate": "2d"
    }
  ],
  "selectedAddresses": [
    {
      "addressId": "1",
      "addressType": "commercial",
      "city": "City",
      "complement": "Complement to address",
      "country": "BRA",
      "geoCoordinates": {
        "latitude": "-25.4158764",
        "longitude": "-49.342759"
      },
      "neighborhood": "Neighborhood's name",
      "number": "1986",
      "postalCode": "81020-235",
      "receiverName": "Yennefer of Vengerberg",
      "state": "RJ",
      "street": "The Witcher Avenue"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isFob|boolean|true|none|Boolean that indicates whether the order's delivery is the marketplace responsibility. Optional, defaulting to false.|
|isMarketplaceFulfillment|boolean|true|none|Boolean that indicates whether the order's inventory in warehouse is the marketplace's responsibility. Optional, defaulting to false.|
|logisticsInfo|[[LogisticsInfo](#schemalogisticsinfo)]|true|none|List that references the SLAs responsible for delivering each item in the order.  <br><br>This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  <br><br>The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.|
|selectedAddresses|[[SelectedAddress](#schemaselectedaddress)]|true|none|none|

<h2 id="tocS_UpdateOrderStatusRequest">UpdateOrderStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorderstatusrequest"></a>
<a id="schema_UpdateOrderStatusRequest"></a>
<a id="tocSupdateorderstatusrequest"></a>
<a id="tocsupdateorderstatusrequest"></a>

```json
{
  "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
  "connectorName": "Skyhub",
  "marketplaceOrderId": "{{$guid}}",
  "marketplaceOrderStatus": "APPROVED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorEndpoint|string|true|none|String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:  <br><br>- `https://{{externalconnector}}.com`  <br><br>- `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint. <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|connectorName|string|true|none|String with the identifier code of the connector responsible for the order.  <br><br>This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.  <br><br>It is required if the connector is native or does not use the App Template.|
|marketplaceOrderId|string|true|none|String that indicates the order's ID in the marketplace.|
|marketplaceOrderStatus|string|true|none|Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:  <br><br>- `new`  <br><br>- `approved`.|

<h2 id="tocS_UserPaymentInfo">UserPaymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserpaymentinfo"></a>
<a id="schema_UserPaymentInfo"></a>
<a id="tocSuserpaymentinfo"></a>
<a id="tocsuserpaymentinfo"></a>

```json
{
  "paymentMethods": [
    "creditCardPaymentGroup"
  ]
}
```

Structure with the order’s payment data. Required only if `invoiceData` is defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentMethods|[string]|true|none|List of strings with the payment methods used in the order. Required only if invoiceData is defined. The format and some possible values of payment methods accepted in this list can be found in the call [Fetching marketplace information with the Orders API](https://developers.vtex.com/vtex-rest-api/docs/get-marketplace-data-orders-api).|

<h2 id="tocS_VtexMapperRegistration">VtexMapperRegistration</h2>
<!-- backwards compatibility -->
<a id="schemavtexmapperregistration"></a>
<a id="schema_VtexMapperRegistration"></a>
<a id="tocSvtexmapperregistration"></a>
<a id="tocsvtexmapperregistration"></a>

```json
{
  "CategoryTreeProcessingNotificationEndpoint": "https://CategoryTreeProcessingNotificationEndpoint.com/api",
  "categoryTreeEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/categories",
  "displayName": "Marketplace A",
  "mappingEndPoint": "http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/mapping",
  "properties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryTreeProcessingNotificationEndpoint|string|false|none|The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not.|
|categoryTreeEndPoint|string|true|none|Endpoint that returns categories and attributes according to VTEX  Mapper specifications.|
|displayName|string|true|none|Marketplace Name, that will be displayed in VTEX Mapper.|
|mappingEndPoint|string|true|none|Secure endpoint that will receive the category mapping sent by VTEX Mapper.|
|properties|object|true|none|Refers to the `allowsRemap` property.|

<h2 id="tocS_bundleItemsItem">bundleItemsItem</h2>
<!-- backwards compatibility -->
<a id="schemabundleitemsitem"></a>
<a id="schema_bundleItemsItem"></a>
<a id="tocSbundleitemsitem"></a>
<a id="tocsbundleitemsitem"></a>

```json
{
  "id": 7436,
  "name": "name",
  "price": 10,
  "type": "type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Service identifier.|
|name|string|false|none|Service name.|
|price|integer|false|none|Service price. The last two digits are the cents.|
|type|string|false|none|Service type.|

<h2 id="tocS_fulfillmentItem">fulfillmentItem</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentitem"></a>
<a id="schema_fulfillmentItem"></a>
<a id="tocSfulfillmentitem"></a>
<a id="tocsfulfillmentitem"></a>

```json
{
  "id": "6",
  "quantity": 1,
  "seller": "01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|SKU ID.|
|quantity|integer|true|none|Quantity of items of the SKU in the cart.|
|seller|string|true|none|ID of the seller registered in VTEX.|

<h2 id="tocS_itemAttachment">itemAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaitemattachment"></a>
<a id="schema_itemAttachment"></a>
<a id="tocSitemattachment"></a>
<a id="tocsitemattachment"></a>

```json
{
  "content": "content-example",
  "name": "name-example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Content referring to the customization requested by the customer.|
|name|string|false|none|Attachment name.|

<h2 id="tocS_orderPlacement">orderPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaorderplacement"></a>
<a id="schema_orderPlacement"></a>
<a id="tocSorderplacement"></a>
<a id="tocsorderplacement"></a>

```json
{
  "clientProfileData": {
    "corporateDocument": "12345678000100",
    "corporateName": "company-name",
    "corporatePhone": "+551100988887777",
    "document": "123456789",
    "documentType": "cpf",
    "email": "customer@examplemail.com",
    "firstName": "first-name",
    "isCorporate": false,
    "lastName": "last-name",
    "phone": "+55110988887777",
    "stateInscription": "12345678",
    "tradeName": "trade-name"
  },
  "items": [
    {
      "attachments": [
        null
      ],
      "bundleItems": [
        {
          "id": 7436,
          "name": "name",
          "price": 10,
          "type": "type"
        }
      ],
      "commission": 0,
      "freightCommission": 0,
      "id": "123456789abc",
      "isGift": true,
      "itemsAttachment": [
        {
          "content": "content-example",
          "name": "name-example"
        }
      ],
      "measurementUnit": "g",
      "price": 2499,
      "priceTags": [
        {
          "identifier": "1234abc-5678b-1234c",
          "isPercentual": false,
          "name": "discount@name-1234abc-5678b-1234c",
          "rawValue": -12,
          "value": -1200
        }
      ],
      "quantity": 1,
      "seller": "seller-example",
      "unitMultiplier": 1
    }
  ],
  "marketingData": {
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "Facebook",
    "utmiCampaign": "utmi_campaign-exmaple",
    "utmiPage": "utmi_page-example",
    "utmiPart": "utmi_part-exmaple"
  },
  "marketplaceOrderId": "1138342255777-01",
  "marketplacePaymentValue": 2499,
  "marketplaceServicesEndpoint": "https://marketplaceservicesendpoint.myvtex.com/",
  "openTextField": "open-text-example",
  "paymentData": null,
  "shippingData": {
    "address": {
      "addressId": "Home",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3rd floor",
      "country": "BRA",
      "geoCoordinates": [
        "00.00000"
      ],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "12345-000",
      "receiverName": "receiver-name",
      "reference": "Grey building",
      "state": "Rio de Janeiro",
      "street": "Praia de Botafogo"
    },
    "logisticsInfo": [
      {
        "deliveryWindow": {
          "endDateUtc": "2016-04-20T12:00:00+00:00",
          "listPrice": 10,
          "startDateUtc": "2016-04-20T08:00:00+00:00"
        },
        "itemIndex": 0,
        "lockTTL": "8d",
        "price": 1099,
        "selectedSla": "Express",
        "shippingEstimate": "7d"
      }
    ],
    "updateStatus": "updated"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientProfileData|object|false|none|Customer's profile information.|
|items|[object]|false|none|Array of objects containing data about each SKU in the cart.|
|marketingData|object|false|none|Marketing tracking data. If the order has no tracking data, the value will be `null`.|
|marketplaceOrderId|string|false|none|Identifies the order in the marketplace.|
|marketplacePaymentValue|integer|false|none|Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.|
|marketplaceServicesEndpoint|string|false|none|Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces.|
|openTextField|string|false|none|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)|
|paymentData|object \| null|false|none|In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.|
|shippingData|object|false|none|Shipping information.|

<h2 id="tocS_sendCategoryMappingToVtexMapper">sendCategoryMappingToVtexMapper</h2>
<!-- backwards compatibility -->
<a id="schemasendcategorymappingtovtexmapper"></a>
<a id="schema_sendCategoryMappingToVtexMapper"></a>
<a id="tocSsendcategorymappingtovtexmapper"></a>
<a id="tocssendcategorymappingtovtexmapper"></a>

```json
{
  "categories": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[object]|true|none|Array with Marketplace parent categories and their information.|
