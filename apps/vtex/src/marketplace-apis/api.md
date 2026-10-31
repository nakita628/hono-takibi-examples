<h1 id="marketplace-api">Marketplace API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The **Marketplace API** enables marketplaces and sellers hosted on VTEX to perform their collaborative operations.  

>⚠️ The marketplace must [create an appKey and appToken](https://developers.vtex.com/docs/guides/getting-started-authentication) for each non-VTEX seller that will use this API.

## Index

### Notification

Endpoints used by sellers to notify marketplaces that the price or inventory language has changed for one of their SKUs.

`POST` [Notify marketplace of price update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price)

`POST` [Notify marketplace of inventory update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory)


### Suggestions

#### Get Suggestions

Search and filter all suggestions using specific criteria.

`GET` [Get all SKU Suggestions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions)

`GET` [Get SKU Suggestion by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-)


#### Manage Suggestions

Send or delete SKU suggestions from the seller to marketplace.

`PUT` [Send SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-)

`DELETE` [Delete SKU Suggestion](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#delete-/suggestions/-sellerId-/-sellerSkuId-)


#### Get Versions

Search and filter all versions of suggestions, using specific criteria.

`GET` [Get all versions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions)

`GET` [Get version by ID](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerskuid-/versions/-version-)


#### Match Received SKUs

Match SKU suggestions received in the marketplace.

`PUT` [Match Received SKUs individually](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-)

`PUT` [Match Multiple Received SKUs](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/matches/action/-actionName-)


#### SKU Approval Settings

Allows marketplaces to configure rules for automatically and manually approving SKUs received from sellers.

`GET`[Get autoApprove Status in Account Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/autoapproval/toggle)  

`PUT`[Activate autoApprove in Marketplace's Account](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle)  

`GET`[Get Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration)

`PUT`[Save Account's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration)

`GET`[Get Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/configuration/seller/-sellerId-)

`PUT`[Save Seller's Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/seller/-sellerId-)

`PUT`[Activate autoApprove Setting for a Seller](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle/seller/-sellerId-)   


### Matched Offers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.

`GET`[Get Matched Offers List](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/offers)

`GET`[Get Matched Offer's Data by SKU ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-/sku/-skuId-)  

`GET`[Get Matched Offer's Data by Product ID](https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/offer-manager/pvt/product/-productId-)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api">https://{accountName}.{environment}.com.br/api</a> - VTEX Server URL.

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="marketplace-api-sellers">Sellers</h1>

Get sellers' data

## List Sellers

<a id="opIdGetListSellers"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/sellers`

This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.

<h3 id="list-sellers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|from|query|number|false|The start number of pagination, being `0` the default value.|
|to|query|number|false|The end number of pagination, being `100` the default value.|
|keyword|query|string|false|Search sellers by a keyword in `sellerId` or `sellerName`.|
|integration|query|string|false|Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`.|
|group |query|string|false|Groups are defined by keywords that group sellers into categories defined by the marketplace.|
|isActive|query|boolean|false|Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace.|
|isBetterScope|query|boolean|false|The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`.|
|isVtex|query|boolean|false|When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured.|
|sc|query|string|false|Filters sellers available for the marketplace's sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) indicated in this field.|
|sellerType|query|integer|false|Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`).|
|sort|query|string|false|Narrow the search filtering by the fields: `id`, `name` or `pendingoffers`. The list retrieved can be organized in an ascending (`asc`) or descending (`desc`) order. The standardized format is `{field}:{order}`, and the default value is `id:asc`.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="list-sellers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Configure Seller Account

<a id="opIdUpsertSellerRequest"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers?accountName=apiexamples&environment=vtexcommercestable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "CSCIdentification": "cscidentification 123",
    "account": "partner01",
    "allowHybridPayments": false,
    "availableSalesChannels": [
      {
        "id": 1,
        "isSelected": true,
        "name": "Loja Principal"
      },
      {
        "id": 2,
        "isSelected": true,
        "name": "Terceira"
      },
      {
        "id": 3,
        "isSelected": true,
        "name": "Marketplaces"
      }
    ],
    "catalogSystemEndpoint": "https://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
    "channel": "marketplaceA",
    "deliveryPolicy": "Describe delivery policy",
    "description": "Seller A, from the B industry.",
    "email": "seller@email.com",
    "exchangeReturnPolicy": "Describe exchange and returns policy",
    "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01",
    "fulfillmentSellerId": "seller1",
    "groups": [
      {
        "groups": [
          {
            "id": "8d845239bf1448dc8bc3ed3121837511",
            "name": "long tail"
          },
          {
            "id": "b9bcd348ab9c4cec8285ff9485c27a72",
            "name": "franchise accounts"
          }
        ]
      }
    ],
    "id": "testeMARCUS123",
    "isActive": true,
    "isBetterScope": false,
    "isVtex": true,
    "name": "qamarketplace",
    "password": null,
    "salesChannel": "1",
    "score": 0,
    "securityPrivacyPolicy": null,
    "sellerCommissionConfiguration": {
      "categoriesCommissionConfiguration": [],
      "freightCommissionPercentage": 4,
      "productCommissionPercentage": 3
    },
    "sellerType": 1,
    "taxCode": "34444",
    "trustPolicy": "Default",
    "user": null
  }'
```

`POST /seller-register/pvt/sellers`

This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces. 

For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly. 

This call includes all the information a seller needs to activate their account.

> Body parameter

```json
{
  "CSCIdentification": "cscidentification 123",
  "account": "partner01",
  "allowHybridPayments": false,
  "availableSalesChannels": [
    {
      "id": 1,
      "isSelected": true,
      "name": "Loja Principal"
    },
    {
      "id": 2,
      "isSelected": true,
      "name": "Terceira"
    },
    {
      "id": 3,
      "isSelected": true,
      "name": "Marketplaces"
    }
  ],
  "catalogSystemEndpoint": "https://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "channel": "marketplaceA",
  "deliveryPolicy": "Describe delivery policy",
  "description": "Seller A, from the B industry.",
  "email": "seller@email.com",
  "exchangeReturnPolicy": "Describe exchange and returns policy",
  "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01",
  "fulfillmentSellerId": "seller1",
  "groups": [
    {
      "groups": [
        {
          "id": "8d845239bf1448dc8bc3ed3121837511",
          "name": "long tail"
        },
        {
          "id": "b9bcd348ab9c4cec8285ff9485c27a72",
          "name": "franchise accounts"
        }
      ]
    }
  ],
  "id": "testeMARCUS123",
  "isActive": true,
  "isBetterScope": false,
  "isVtex": true,
  "name": "qamarketplace",
  "password": null,
  "salesChannel": "1",
  "score": 0,
  "securityPrivacyPolicy": null,
  "sellerCommissionConfiguration": {
    "categoriesCommissionConfiguration": [],
    "freightCommissionPercentage": 4,
    "productCommissionPercentage": 3
  },
  "sellerType": 1,
  "taxCode": "34444",
  "trustPolicy": "Default",
  "user": null
}
```

<h3 id="configure-seller-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Marketplace's account name, the same one inputted on the endpoint's path.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[UpsertSellerRequest](#schemaupsertsellerrequest)|true|none|
|» CSCIdentification|body|string|true|SKU Seller Identification|
|» account|body|string|true|Seller's account name|
|» allowHybridPayments|body|boolean|true|Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|» availableSalesChannels|body|[[AvailableSalesChannel](#schemaavailablesaleschannel)]|true|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.|
|» catalogSystemEndpoint|body|string|true|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`|
|» channel|body|string|true|Channel's name.|
|» deliveryPolicy|body|string|true|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|» description|body|string|true|String describing the seller|
|» email|body|string|true|email of the admin responsible for the seller.|
|» exchangeReturnPolicy|body|string|true|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|» fulfillmentEndpoint|body|string|true|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. <br><br>For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process. <br><br>For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`. <br><br>The value `SellerName` corresponds to the store name if the seller is a VTEX store. <br><br>The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. <br><br>The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. <br><br>To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`|
|» fulfillmentSellerId|body|string|true| Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.|
|» groups|body|[[Groups](#schemagroups)]|false|Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.|
|» id|body|string|true|Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.|
|» isActive|body|boolean|true|Whether the seller is active on the marketplace or not.|
|» isBetterScope|body|boolean|true|Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.|
|» isVtex|body|boolean|true|Flag determining whether the seller configured is a VTEX store or not.|
|» name|body|string|true|Name of the seller's store, configured in the seller's environment.|
|» password|body|string \| null|true|User password, if you are using a hub to integrate with the external seller.|
|» salesChannel|body|string|true|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.|
|» score|body|number|true|Score attributed to this seller.|
|» securityPrivacyPolicy|body|string \| null|true| Text describing the security policy previously agreed between the marketplace and the seller.|
|» sellerCommissionConfiguration|body|object|true|none|
|» sellerType|body|integer(int32)|true|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|
|» taxCode|body|string|true|This code is the Identity Number for the legal entity and is linked to information in its base country.|
|» trustPolicy|body|string|true| the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field|
|» user|body|string \| null|true|Username, if you are using a hub to integrate with the external seller.|

<h3 id="configure-seller-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller data by ID

<a id="opIdGetRetrieveSeller"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/sellers/{sellerId}`

Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.

<h3 id="get-seller-data-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sc|query|string|false|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="get-seller-data-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Seller by Seller ID

<a id="opIdUpdateSeller"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123?accountName=apiexamples&environment=vtexcommercestable' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "operation": "replace",
      "path": "/field",
      "value": false
    }
  ]'
```

`PATCH /seller-register/pvt/sellers/{sellerId}`

This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.

> Body parameter

```json
[
  {
    "operation": "replace",
    "path": "/field",
    "value": false
  }
]
```

<h3 id="update-seller-by-seller-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace|
|body|body|[object]|false|array of objects|
|» operation|body|string|true|The action being performed, which is always going to be `replace`.|
|» path|body|string|true|The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.|
|» value|body|boolean|true|The value that is being updated. Notice that the type will depend on the path that is being updated.|

<h3 id="update-seller-by-seller-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-api-seller-invite">Seller Invite</h1>

Used to invite sellers and configure their accounts

## List Seller Leads

<a id="opIdListSellerLeads"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads?accountName=apiexamples&environment=vtexcommercestable&offset=0&limit=15&isConnected=&search=user%20email&status=invited&orderBy=string' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/seller-leads`

This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

<h3 id="list-seller-leads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|offset|query|integer(int32)|true|This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here.|
|limit|query|integer(int32)|true|This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.            |
|isConnected|query|string|true|Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not.|
|search|query|string|true|Custom search field, that filters sellers invited by specific marketplace operator's  email.|
|status|query|string|true|Seller Lead's status. Includes `accepted`, `connected` or `invited`.|
|orderBy|query|string|true|Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values: <br><br>`namesort` = desc/asc <br><br>`idsort` = desc/asc|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|

<h3 id="list-seller-leads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Invite Seller Lead

<a id="opIdCreateSellerLead"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads?accountName=apiexample&environment=vtexcommercestable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
    "accountable": {
      "email": "email@email.com",
      "name": "Jane Smith",
      "phone": "1234567890"
    },
    "address": {
      "city": "Rio de Janeiro",
      "complement": "Appartment 1234",
      "neighborhood": "VTEX quarter",
      "number": "25",
      "postalcode": "12345678",
      "state": "RJ",
      "street": "VTEX street"
    },
    "document": "12345671000",
    "email": "email@email.com",
    "hasAcceptedLegalTerms": true,
    "salesChannel": "1",
    "sellerAccountName": "seller123",
    "sellerEmail": "selleremail@email.com",
    "sellerName": "Seller Name",
    "sellerType": 1
  }'
```

`POST /seller-register/pvt/seller-leads`

This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store. 

The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.

> Body parameter

```json
{
  "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
  "accountable": {
    "email": "email@email.com",
    "name": "Jane Smith",
    "phone": "1234567890"
  },
  "address": {
    "city": "Rio de Janeiro",
    "complement": "Appartment 1234",
    "neighborhood": "VTEX quarter",
    "number": "25",
    "postalcode": "12345678",
    "state": "RJ",
    "street": "VTEX street"
  },
  "document": "12345671000",
  "email": "email@email.com",
  "hasAcceptedLegalTerms": true,
  "salesChannel": "1",
  "sellerAccountName": "seller123",
  "sellerEmail": "selleremail@email.com",
  "sellerName": "Seller Name",
  "sellerType": 1
}
```

<h3 id="invite-seller-lead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[CreateSellerLeadRequest](#schemacreatesellerleadrequest)|true|none|
|» accountId|body|string|true|Marketplace's account ID|
|» accountable|body|[accountable](#schemaaccountable)|true|none|
|» address|body|[address](#schemaaddress)|true|none|
|» document|body|string|true|Company's legal document code.|
|» email|body|string|true|none|
|» hasAcceptedLegalTerms|body|boolean|true|Indicates if the seller has accepted the platform's legal terms and conditions.|
|» salesChannel|body|string|true|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.|
|» sellerAccountName|body|string|true|Name of the seller's account, part of the url of their VTEX Admin.|
|» sellerEmail|body|string|true|Seller's contact email;|
|» sellerName|body|string|true|Seller's store's name.|
|» sellerType|body|integer(int32)|true|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|

<h3 id="invite-seller-lead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller Lead's Data by Id

<a id="opIdRetrieveSellerLead"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads/string?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/seller-leads/{sellerLeadId}`

Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

<h3 id="get-seller-leads-data-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerLeadId|path|string|true|ID of the Seller Lead invited to the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="get-seller-leads-data-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Accept Seller Lead

<a id="opIdAcceptSellerLead"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads/string?accountName=apiexamples&environment=vtexcommercestable' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
    "accountable": {
      "email": "email@email.com",
      "name": "Jane Smith",
      "phone": "1234567890"
    },
    "address": {
      "city": "Rio de Janeiro",
      "complement": "Appartment 1234",
      "neighborhood": "VTEX quarter",
      "number": "25",
      "postalcode": "12345678",
      "state": "RJ",
      "street": "VTEX street"
    },
    "document": "12345671000",
    "email": "seller@email.com",
    "hasAcceptedLegalTerms": true,
    "salesChannel": "1",
    "sellerAccountName": "seller123",
    "sellerEmail": "selleremail@email.com",
    "sellerName": "Seller Name",
    "sellerType": 1
  }'
```

`PUT /seller-register/pvt/seller-leads/{sellerLeadId}`

This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

> Body parameter

```json
{
  "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
  "accountable": {
    "email": "email@email.com",
    "name": "Jane Smith",
    "phone": "1234567890"
  },
  "address": {
    "city": "Rio de Janeiro",
    "complement": "Appartment 1234",
    "neighborhood": "VTEX quarter",
    "number": "25",
    "postalcode": "12345678",
    "state": "RJ",
    "street": "VTEX street"
  },
  "document": "12345671000",
  "email": "seller@email.com",
  "hasAcceptedLegalTerms": true,
  "salesChannel": "1",
  "sellerAccountName": "seller123",
  "sellerEmail": "selleremail@email.com",
  "sellerName": "Seller Name",
  "sellerType": 1
}
```

<h3 id="accept-seller-lead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerLeadId|path|string|true|ID of the Seller Lead invited to the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[AcceptSellerLeadRequest](#schemaacceptsellerleadrequest)|true|none|
|» accountId|body|string|true|Marketplace's account ID|
|» accountable|body|[accountable](#schemaaccountable)|true|none|
|» address|body|[address](#schemaaddress)|true|none|
|» document|body|string|true|Company's legal document code.|
|» email|body|string|true|email of the admin responsible for the seller.|
|» hasAcceptedLegalTerms|body|boolean|true|Indicates if the seller has accepted the platform's legal terms and conditions.|
|» salesChannel|body|string|true|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.|
|» sellerAccountName|body|string|true|Name of the seller's account, part of the url of their VTEX Admin.|
|» sellerEmail|body|string|true|Seller's contact email.|
|» sellerName|body|string|true|Seller's store's name.|
|» sellerType|body|integer(int32)|true|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|

<h3 id="accept-seller-lead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Seller Lead

<a id="opIdRemoveSellerLead"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads/string?accountName=apiexamples&environment=vtexcommercestable' \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /seller-register/pvt/seller-leads/{sellerLeadId}`

This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.

<h3 id="delete-seller-lead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerLeadId|path|string|true|ID of the Seller Lead invited to the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="delete-seller-lead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Seller From Lead

<a id="opIdCreateSellerFromSellerLead"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads/string/seller?accountName=apiexamples&environment=vtexcommercestable&isActive=false' \
  -X PUT \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`PUT /seller-register/pvt/seller-leads/{sellerLeadId}/seller`

This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled. 

The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

<h3 id="create-seller-from-lead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Marketplace's account name, the same one inputted on the endpoint's path.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|isActive|query|boolean|true|Whether the Seller Lead is `active` or not in Seller Portal. This request only supports the value `false` in this field. If that´s not the case, the request will respond with an internal error.|
|sellerLeadId|path|string|true|ID of the Seller Lead invited to the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

<h3 id="create-seller-from-lead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Resend Seller Lead Invite

<a id="opIdResendSellerLeadRequest"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/seller-leads/string/status?accountName=apiexamples&environment=vtexcommercestable' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "status": "accepted"
  }'
```

`PUT /seller-register/pvt/seller-leads/{sellerLeadId}/status`

This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.

> Body parameter

```json
{
  "status": "accepted"
}
```

<h3 id="resend-seller-lead-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerLeadId|path|string|true|ID of the Seller Lead invited to the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|[ResendSellerLeadRequestRequest](#schemaresendsellerleadrequestrequest)|true|none|
|» status|body|string|true|Seller Lead's status. Includes `accepted`, `connected` or `invited`.|

<h3 id="resend-seller-lead-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-api-seller-commissions">Seller Commissions</h1>

Get sellers' data

## List Seller Commissions by seller ID

<a id="opIdListSellerCommissions"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/commissions?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/sellers/{sellerId}/commissions`

This endpoint retrieves all comissions configured for a specific seller.

<h3 id="list-seller-commissions-by-seller-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|

<h3 id="list-seller-commissions-by-seller-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Upsert Seller Commissions in Bulk

<a id="opIdBulkUpsertSellerCommissions"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/commissions/categories?accountName=apiexamples&environment=vtexcommercestable' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "categoryFullPath": null,
      "categoryId": "6",
      "freightCommissionPercentage": 2.43,
      "productCommissionPercentage": 9.85
    }
  ]'
```

`PUT /seller-register/pvt/sellers/{sellerId}/commissions/categories`

This endpoint is used by marketplace operators to define comissions for multiple categories.

> Body parameter

```json
[
  {
    "categoryFullPath": null,
    "categoryId": "6",
    "freightCommissionPercentage": 2.43,
    "productCommissionPercentage": 9.85
  }
]
```

<h3 id="upsert-seller-commissions-in-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|body|body|[[BulkUpsertSellerCommissionsRequest](#schemabulkupsertsellercommissionsrequest)]|true|none|

<h3 id="upsert-seller-commissions-in-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Seller Commissions by Category ID

<a id="opIdRetrieveSellerCommissions"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/commissions/6?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}`

This endpoint retrieves seller comissions applied to the selected category.

<h3 id="get-seller-commissions-by-category-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|categoryId|path|string|true|ID of the category in which the comission was applied|

<h3 id="get-seller-commissions-by-category-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Upsert Seller Commissions by Category ID

<a id="opIdUpsertSellerCommissions"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/commissions/6?accountName=apiexamples&environment=vtexcommercestable' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "categoryFullPath": null,
    "categoryId": "6",
    "freightCommissionPercentage": 2.43,
    "productCommissionPercentage": 9.85
  }'
```

`PUT /seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}`

This endpoint is used by marketplace operators to define comissions for a single category, by ID.

> Body parameter

```json
{
  "categoryFullPath": null,
  "categoryId": "6",
  "freightCommissionPercentage": 2.43,
  "productCommissionPercentage": 9.85
}
```

<h3 id="upsert-seller-commissions-by-category-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|categoryId|path|string|true|ID of the category in which the comission will be applied.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|body|body|[UpsertSellerCommissionsRequest](#schemaupsertsellercommissionsrequest)|true|none|
|» categoryFullPath|body|string \| null|true|Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.|
|» categoryId|body|string|true|Marketplace's Category ID that the product belongs to, configured in the Catalog.|
|» freightCommissionPercentage|body|number|true|Percentage of the comission applied to the freight in decimals.|
|» productCommissionPercentage|body|number|true|Percentage of the comission applied to the product in decimals.|

<h3 id="upsert-seller-commissions-by-category-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove Seller Commissions by Category ID

<a id="opIdRemoveSellerCommissions"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/commissions/6?accountName=apiexamples&environment=vtexcommercestable' \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}`

This endpoint removes a seller comission on the selected category.

<h3 id="remove-seller-commissions-by-category-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|categoryId|path|string|true|ID of the category in which the comission was applied|

<h3 id="remove-seller-commissions-by-category-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-api-notification">Notification</h1>

## Notify marketplace of inventory update

<a id="opIdInventoryNotification"></a>

> Code samples

```bash
curl 'https://example.com/notificator/seller123/changenotification/1234/inventory?accountName=apiexamples&environment=vtexcommercestable' \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /notificator/{sellerId}/changenotification/{skuId}/inventory`

This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs. 

There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.

<h3 id="notify-marketplace-of-inventory-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|skuId|path|string|true|A string that identifies the SKU in the seller, that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.|

<h3 id="notify-marketplace-of-inventory-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Notify marketplace of price update

<a id="opIdPriceNotification"></a>

> Code samples

```bash
curl 'https://example.com/notificator/seller123/changenotification/1234/price?accountName=apiexamples&environment=vtexcommercestable' \
  -X POST \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /notificator/{sellerId}/changenotification/{skuId}/price`

This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs. 

There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.

<h3 id="notify-marketplace-of-price-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.|
|skuId|path|string|true|A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.|

<h3 id="notify-marketplace-of-price-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-api-matched-offers">Matched Offers</h1>

## Get Matched Offers List

<a id="opIdGetofferslist"></a>

> Code samples

```bash
curl 'https://example.com/offer-manager/pvt/offers?accountName=apiexamples&environment=vtexcommercestable' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /offer-manager/pvt/offers`

Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

 This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog. 

It is possible to filter the search through the following parameters: 

- rows 
- sort 

- start 

- fq

<h3 id="get-matched-offers-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria: <br><br>- **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price. <br><br>- **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*. <br><br>- **availability:** availability in the sales channel (sc). The default value is 1. <br><br>Ex. sort=availability,desc <br><br>Ex. sort=name,asc <br><br>Ex. price,desc|
|rows|query|integer|false|Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1.|
|start|query|integer|false|Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call.|
|fq|query|string|false|This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`. <br><br>- **productId:** integer of the product ID <br><br>- **productName:** string of the product's name <br><br>- **skuId:** integer of the SKU ID <br><br>- **eanId:** string of the EAN ID <br><br>- **refId:** string of the Ref ID <br><br>- **categoryId:** integer of the category ID <br><br>- **brandId:** integer of the brand ID <br><br>- **sellerId:** string of the seller ID <br><br>- **sc:** integer of the sales channel's ID (trade policy in VTEX) <br><br>Ex: skuId:172 <br><br>Ex: categoryId:13 <br><br>Ex. productName:Product example-123|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
[
  {
    "BrandId": 2004291,
    "CategoryId": 1563,
    "LastModified": "2021-05-06T21:37:24.262529",
    "ProductId": "941947",
    "ProductName": "Produto Teste 04 - Preto - 40",
    "Skus": [
      {
        "EanId": null,
        "IsActive": true,
        "MainImage": {
          "ImageId": "53878805",
          "ImageLabel": null,
          "ImagePath": "~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg",
          "ImageTag": "<img src=\"~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg\" width=\"#width#\" height=\"#height#\" alt=\"image-8b4364782e664d76a6ebc8702008e478\" id=\"\" />",
          "ImageText": "image-8b4364782e664d76a6ebc8702008e478",
          "IsMain": true,
          "IsZoomSize": true,
          "LastModified": "2021-04-06T03:01:30.747"
        },
        "Name": "Cor:Preto",
        "NameComplete": "Produto Teste 04 - Preto - 40 Cor:Preto",
        "Offers": [
          {
            "AvailableSalesChannels": null,
            "OffersPerSalesChannel": [
              {
                "AvailableQuantity": 0,
                "ListPrice": 0,
                "Price": 0,
                "PriceWithoutDiscount": 0,
                "SaleChannel": 1
              }
            ],
            "SellerId": "1",
            "SellerSkuId": "1070268"
          },
          {
            "AvailableSalesChannels": null,
            "OffersPerSalesChannel": [
              {
                "AvailableQuantity": 10000000,
                "ListPrice": 1200,
                "Price": 1200,
                "PriceWithoutDiscount": 1200,
                "SaleChannel": 0
              }
            ],
            "SellerId": "madesacms",
            "SellerSkuId": "3298"
          }
        ],
        "RefId": null,
        "SkuId": "1070268"
      }
    ]
  }
]
```

<h3 id="get-matched-offers-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-matched-offers-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» BrandId|integer(int32)|true|none|Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.|
|» CategoryId|integer(int32)|true|none|Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.|
|» LastModified|string|true|none|Last date the offer was modified.|
|» ProductId|string|true|none|A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.|
|» ProductName|string|true|none|Name of the offer's product.|
|» Skus|[[Sku2](#schemasku2)]|true|none|Array of SKUs in the offer.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Matched Offer's Data by Product ID

<a id="opIdGetProductoffers"></a>

> Code samples

```bash
curl 'https://example.com/offer-manager/pvt/product/123456?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /offer-manager/pvt/product/{productId}`

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

<h3 id="get-matched-offers-data-by-product-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.|

<h3 id="get-matched-offers-data-by-product-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Matched Offer's Data by SKU ID

<a id="opIdGetSKUoffers"></a>

> Code samples

```bash
curl 'https://example.com/offer-manager/pvt/product/123456/sku/1234?accountName=apiexamples&environment=vtexcommercestable' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /offer-manager/pvt/product/{productId}/sku/{skuId}`

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

<h3 id="get-matched-offers-data-by-sku-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|query|string|true|Name of the VTEX account. Used as part of the URL.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|productId|path|string|true|A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.|
|skuId|path|string|true|A string that identifies the seller's SKU. This is the ID that the marketplace will use for all references to this SKU, such as price and inventory notifications.|

<h3 id="get-matched-offers-data-by-sku-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="marketplace-api-sales-channel-mapping">Sales Channel Mapping</h1>

Mapping between a marketplace's sales channel and a seller's affiliate.

## Get Sales Channel Mapping Data

<a id="opIdRetrieveMapping"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/sales-channel/mapping?accountName=apiexamples&environment=vtexcommercestable&an=apiexamples' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /seller-register/pvt/sellers/{sellerId}/sales-channel/mapping`

Retrieves information about the mapping between marketplace's sales channels and a specific seller.

<h3 id="get-sales-channel-mapping-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. Used as part of the URL|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|an|query|string|true|Marketplace's account name, the same one inputted on the endpoint's path.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|

> Example responses

> 200 Response

```json
[
  {
    "marketplaceSalesChannel": "1",
    "sellerChannel": "GCC"
  }
]
```

<h3 id="get-sales-channel-mapping-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sales-channel-mapping-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» marketplaceSalesChannel|string|false|none|Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).|
|» sellerChannel|string|false|none|Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Upsert Sales Channel Mapping

<a id="opIdUpsertMapping"></a>

> Code samples

```bash
curl 'https://example.com/seller-register/pvt/sellers/seller123/sales-channel/mapping?accountName=apiexamples&environment=vtexcommercestable&an=apiexamples' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "marketplaceSalesChannel": 1,
      "sellerChannel": "GCB"
    },
    {
      "marketplaceSalesChannel": 2,
      "sellerChannel": "GCB"
    }
  ]'
```

`PUT /seller-register/pvt/sellers/{sellerId}/sales-channel/mapping`

This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.

> Body parameter

```json
[
  {
    "marketplaceSalesChannel": 1,
    "sellerChannel": "GCB"
  },
  {
    "marketplaceSalesChannel": 2,
    "sellerChannel": "GCB"
  }
]
```

<h3 id="upsert-sales-channel-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|accountName|query|string|true|Name of the VTEX account that belongs to the marketplace. Used as part of the URL.|
|environment|query|string|true|Environment to use. Used as part of the URL.|
|an|query|string|true|Marketplace's account name, the same one inputted on the endpoint's path.|
|sellerId|path|string|true|A string that identifies the seller in the marketplace. This ID must be created by the marketplace.|
|body|body|[[UpsertMappingRequest](#schemaupsertmappingrequest)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "marketplaceSalesChannel": "1",
    "sellerChannel": "GCC"
  }
]
```

<h3 id="upsert-sales-channel-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="upsert-sales-channel-mapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» marketplaceSalesChannel|string|false|none|Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).|
|» sellerChannel|string|false|none|Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AcceptSellerLeadRequest">AcceptSellerLeadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptsellerleadrequest"></a>
<a id="schema_AcceptSellerLeadRequest"></a>
<a id="tocSacceptsellerleadrequest"></a>
<a id="tocsacceptsellerleadrequest"></a>

```json
{
  "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
  "accountable": {
    "email": "email@email.com",
    "name": "Jane Smith",
    "phone": "1234567890"
  },
  "address": {
    "city": "Rio de Janeiro",
    "complement": "Appartment 1234",
    "neighborhood": "VTEX quarter",
    "number": "25",
    "postalcode": "12345678",
    "state": "RJ",
    "street": "VTEX street"
  },
  "affiliateId": "MKP",
  "document": "12345671000",
  "email": "seller@email.com",
  "hasAcceptedLegalTerms": true,
  "salesChannel": "1",
  "sellerAccountName": "seller123",
  "sellerEmail": "selleremail@email.com",
  "sellerName": "Seller Name",
  "sellerType": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|Marketplace's account ID|
|accountable|[accountable](#schemaaccountable)|true|none|none|
|address|[address](#schemaaddress)|true|none|none|
|document|string|true|none|Company's legal document code.|
|email|string|true|none|email of the admin responsible for the seller.|
|hasAcceptedLegalTerms|boolean|true|none|Indicates if the seller has accepted the platform's legal terms and conditions.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.|
|sellerAccountName|string|true|none|Name of the seller's account, part of the url of their VTEX Admin.|
|sellerEmail|string|true|none|Seller's contact email.|
|sellerName|string|true|none|Seller's store's name.|
|sellerType|integer(int32)|true|none|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|

<h2 id="tocS_AvailableSalesChannel">AvailableSalesChannel</h2>
<!-- backwards compatibility -->
<a id="schemaavailablesaleschannel"></a>
<a id="schema_AvailableSalesChannel"></a>
<a id="tocSavailablesaleschannel"></a>
<a id="tocsavailablesaleschannel"></a>

```json
{
  "id": 1,
  "isSelected": true,
  "name": "Loja Principal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|Sales Channel's ID.|
|isSelected|boolean|true|none|Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.|
|name|string|true|none|Name of the Sales Channel.|

<h2 id="tocS_BulkUpsertSellerCommissionsRequest">BulkUpsertSellerCommissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupsertsellercommissionsrequest"></a>
<a id="schema_BulkUpsertSellerCommissionsRequest"></a>
<a id="tocSbulkupsertsellercommissionsrequest"></a>
<a id="tocsbulkupsertsellercommissionsrequest"></a>

```json
{
  "categoryFullPath": null,
  "categoryId": "6",
  "freightCommissionPercentage": 2.43,
  "productCommissionPercentage": 9.85
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryFullPath|string \| null|true|none|Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.|
|categoryId|string|true|none|Marketplace's Category ID that the product belongs to, configured in the Catalog.|
|freightCommissionPercentage|number|true|none|Percentage of the comission applied to the freight in decimals.|
|productCommissionPercentage|number|true|none|Percentage of the comission applied to the product in decimals.|

<h2 id="tocS_CreateSellerLeadRequest">CreateSellerLeadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesellerleadrequest"></a>
<a id="schema_CreateSellerLeadRequest"></a>
<a id="tocScreatesellerleadrequest"></a>
<a id="tocscreatesellerleadrequest"></a>

```json
{
  "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
  "accountable": {
    "email": "email@email.com",
    "name": "Jane Smith",
    "phone": "1234567890"
  },
  "address": {
    "city": "Rio de Janeiro",
    "complement": "Appartment 1234",
    "neighborhood": "VTEX quarter",
    "number": "25",
    "postalcode": "12345678",
    "state": "RJ",
    "street": "VTEX street"
  },
  "document": "12345671000",
  "email": "email@email.com",
  "hasAcceptedLegalTerms": true,
  "salesChannel": "1",
  "sellerAccountName": "seller123",
  "sellerEmail": "selleremail@email.com",
  "sellerName": "Seller Name",
  "sellerType": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|Marketplace's account ID|
|accountable|[accountable](#schemaaccountable)|true|none|none|
|address|[address](#schemaaddress)|true|none|none|
|document|string|true|none|Company's legal document code.|
|email|string|true|none|none|
|hasAcceptedLegalTerms|boolean|true|none|Indicates if the seller has accepted the platform's legal terms and conditions.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.|
|sellerAccountName|string|true|none|Name of the seller's account, part of the url of their VTEX Admin.|
|sellerEmail|string|true|none|Seller's contact email;|
|sellerName|string|true|none|Seller's store's name.|
|sellerType|integer(int32)|true|none|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
{
  "groups": [
    {
      "id": "8d845239bf1448dc8bc3ed3121837511",
      "name": "long tail"
    },
    {
      "id": "b9bcd348ab9c4cec8285ff9485c27a72",
      "name": "franchise accounts"
    }
  ]
}
```

Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Group's unique identifier code.|
|name|string|false|none|Name of the tag chosen to identify the group.|

<h2 id="tocS_MainImage">MainImage</h2>
<!-- backwards compatibility -->
<a id="schemamainimage"></a>
<a id="schema_MainImage"></a>
<a id="tocSmainimage"></a>
<a id="tocsmainimage"></a>

```json
{
  "ImageId": "53878805",
  "ImageLabel": null,
  "ImagePath": "~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg",
  "ImageTag": "<img src=\"~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg\" width=\"#width#\" height=\"#height#\" alt=\"image-8b4364782e664d76a6ebc8702008e478\" id=\"\" />",
  "ImageText": "image-8b4364782e664d76a6ebc8702008e478",
  "IsMain": true,
  "IsZoomSize": true,
  "LastModified": "2021-04-06T03:01:30.747"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageId|string|true|none|Code identifying the image's file.|
|ImageLabel|string \| null|true|none|Image's label.|
|ImagePath|string|true|none|Path for the image's file.|
|ImageTag|string|true|none|HTML tag for the selected image.|
|ImageText|string|true|none|Alt text for the image.|
|IsMain|boolean|true|none|Whether the image is the main one or not.|
|IsZoomSize|boolean|true|none|If zoom can be applied to the image.|
|LastModified|string|true|none|Date of the last changed made to the offer.|

<h2 id="tocS_Offer">Offer</h2>
<!-- backwards compatibility -->
<a id="schemaoffer"></a>
<a id="schema_Offer"></a>
<a id="tocSoffer"></a>
<a id="tocsoffer"></a>

```json
{
  "AvailableSalesChannels": null,
  "OffersPerSalesChannel": [
    {
      "AvailableQuantity": 0,
      "ListPrice": 0,
      "Price": 0,
      "PriceWithoutDiscount": 0,
      "SaleChannel": 1
    }
  ],
  "SellerId": "1",
  "SellerSkuId": "1070268"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableSalesChannels|string \| null|true|none|The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.|
|OffersPerSalesChannel|[[OffersPerSalesChannel](#schemaofferspersaleschannel)]|true|none|none|
|SellerId|string|true|none|ID of the seller in the marketplace. This ID must be created by the marketplace.|
|SellerSkuId|string|true|none|A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.|

<h2 id="tocS_OffersPerSalesChannel">OffersPerSalesChannel</h2>
<!-- backwards compatibility -->
<a id="schemaofferspersaleschannel"></a>
<a id="schema_OffersPerSalesChannel"></a>
<a id="tocSofferspersaleschannel"></a>
<a id="tocsofferspersaleschannel"></a>

```json
{
  "AvailableQuantity": 0,
  "ListPrice": 0,
  "Price": 0,
  "PriceWithoutDiscount": 0,
  "SaleChannel": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailableQuantity|integer(int32)|true|none|Available SKU stock quantity|
|ListPrice|integer(int32)|true|none|SKU's suggested selling price|
|Price|integer(int32)|true|none|SKU's price.|
|PriceWithoutDiscount|integer(int32)|true|none|SKU's price without discount applied.|
|SaleChannel|integer(int32)|true|none|The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.|

<h2 id="tocS_ResendSellerLeadRequestRequest">ResendSellerLeadRequestRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendsellerleadrequestrequest"></a>
<a id="schema_ResendSellerLeadRequestRequest"></a>
<a id="tocSresendsellerleadrequestrequest"></a>
<a id="tocsresendsellerleadrequestrequest"></a>

```json
{
  "status": "accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Seller Lead's status. Includes `accepted`, `connected` or `invited`.|

<h2 id="tocS_SellerCommissionConfiguration">SellerCommissionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasellercommissionconfiguration"></a>
<a id="schema_SellerCommissionConfiguration"></a>
<a id="tocSsellercommissionconfiguration"></a>
<a id="tocssellercommissionconfiguration"></a>

```json
{
  "categoriesCommissionConfiguration": [],
  "freightCommissionPercentage": 4,
  "productCommissionPercentage": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoriesCommissionConfiguration|[string]|true|none|Array with percentage of the comission applied to categories in decimals.|
|freightCommissionPercentage|number|true|none|Percentage of the comission applied to the freight in decimals.|
|productCommissionPercentage|number|true|none|Percentage of the comission applied to the product in decimals.|

<h2 id="tocS_Sku2">Sku2</h2>
<!-- backwards compatibility -->
<a id="schemasku2"></a>
<a id="schema_Sku2"></a>
<a id="tocSsku2"></a>
<a id="tocssku2"></a>

```json
{
  "EanId": null,
  "IsActive": true,
  "MainImage": {
    "ImageId": "53878805",
    "ImageLabel": null,
    "ImagePath": "~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg",
    "ImageTag": "<img src=\"~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg\" width=\"#width#\" height=\"#height#\" alt=\"image-8b4364782e664d76a6ebc8702008e478\" id=\"\" />",
    "ImageText": "image-8b4364782e664d76a6ebc8702008e478",
    "IsMain": true,
    "IsZoomSize": true,
    "LastModified": "2021-04-06T03:01:30.747"
  },
  "Name": "Cor:Preto",
  "NameComplete": "Produto Teste 04 - Preto - 40 Cor:Preto",
  "Offers": [
    {
      "AvailableSalesChannels": null,
      "OffersPerSalesChannel": [
        {
          "AvailableQuantity": 0,
          "ListPrice": 0,
          "Price": 0,
          "PriceWithoutDiscount": 0,
          "SaleChannel": 1
        }
      ],
      "SellerId": "1",
      "SellerSkuId": "1070268"
    },
    {
      "AvailableSalesChannels": null,
      "OffersPerSalesChannel": [
        {
          "AvailableQuantity": 10000000,
          "ListPrice": 1200,
          "Price": 1200,
          "PriceWithoutDiscount": 1200,
          "SaleChannel": 0
        }
      ],
      "SellerId": "madesacms",
      "SellerSkuId": "3298"
    }
  ],
  "RefId": null,
  "SkuId": "1070268"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EanId|string \| null|true|none|EAN's unique identifier number|
|IsActive|boolean|true|none|Whether the SKU is active in the sales channel (true), or not (false).|
|MainImage|object|true|none|Main image's information.|
|Name|string|true|none|Summarized name of the SKU|
|NameComplete|string|true|none|Complete name of the SKU|
|Offers|[[Offer](#schemaoffer)]|true|none|Array with offers|
|RefId|string \| null|true|none|SKU's Reference ID|
|SkuId|string|true|none|SKU's unique identifier number|

<h2 id="tocS_UpsertMappingRequest">UpsertMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertmappingrequest"></a>
<a id="schema_UpsertMappingRequest"></a>
<a id="tocSupsertmappingrequest"></a>
<a id="tocsupsertmappingrequest"></a>

```json
{
  "marketplaceSalesChannel": 1,
  "sellerChannel": "GCB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketplaceSalesChannel|integer(int32)|true|none|Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).|
|sellerChannel|string|true|none|Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.|

<h2 id="tocS_UpsertSellerCommissionsRequest">UpsertSellerCommissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertsellercommissionsrequest"></a>
<a id="schema_UpsertSellerCommissionsRequest"></a>
<a id="tocSupsertsellercommissionsrequest"></a>
<a id="tocsupsertsellercommissionsrequest"></a>

```json
{
  "categoryFullPath": null,
  "categoryId": "6",
  "freightCommissionPercentage": 2.43,
  "productCommissionPercentage": 9.85
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryFullPath|string \| null|true|none|Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.|
|categoryId|string|true|none|Marketplace's Category ID that the product belongs to, configured in the Catalog.|
|freightCommissionPercentage|number|true|none|Percentage of the comission applied to the freight in decimals.|
|productCommissionPercentage|number|true|none|Percentage of the comission applied to the product in decimals.|

<h2 id="tocS_UpsertSellerRequest">UpsertSellerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertsellerrequest"></a>
<a id="schema_UpsertSellerRequest"></a>
<a id="tocSupsertsellerrequest"></a>
<a id="tocsupsertsellerrequest"></a>

```json
{
  "CSCIdentification": "",
  "account": "parceiro01",
  "allowHybridPayments": false,
  "availableSalesChannels": [
    {
      "id": 1,
      "isSelected": true,
      "name": "Loja Principal"
    },
    {
      "id": 2,
      "isSelected": true,
      "name": "Terceira"
    },
    {
      "id": 3,
      "isSelected": true,
      "name": "Marketplaces"
    }
  ],
  "catalogSystemEndpoint": "https://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
  "channel": "",
  "deliveryPolicy": "",
  "description": "",
  "email": "vtexqa1@vtex.com.br",
  "exchangeReturnPolicy": "",
  "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01",
  "fulfillmentSellerId": "",
  "groups": [
    {
      "groups": [
        {
          "id": "8d845239bf1448dc8bc3ed3121837511",
          "name": "long tail"
        },
        {
          "id": "b9bcd348ab9c4cec8285ff9485c27a72",
          "name": "franchise accounts"
        }
      ]
    }
  ],
  "id": "testeMARCUS123",
  "isActive": true,
  "isBetterScope": false,
  "isVtex": true,
  "name": "qamarketplace",
  "password": "integrationHubPassword",
  "salesChannel": "",
  "score": 0,
  "securityPrivacyPolicy": null,
  "sellerCommissionConfiguration": {
    "categoriesCommissionConfiguration": [],
    "freightCommissionPercentage": 4,
    "productCommissionPercentage": 3
  },
  "sellerType": 1,
  "taxCode": "34444",
  "trustPolicy": "AllowEmailSharing",
  "user": "integrationHubUserName"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CSCIdentification|string|true|none|SKU Seller Identification|
|account|string|true|none|Seller's account name|
|allowHybridPayments|boolean|true|none|Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.|
|availableSalesChannels|[[AvailableSalesChannel](#schemaavailablesaleschannel)]|true|none|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.|
|catalogSystemEndpoint|string|true|none|URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`|
|channel|string|true|none|Channel's name.|
|deliveryPolicy|string|true|none|Text describing the delivery policy previously agreed between the marketplace and the seller.|
|description|string|true|none|String describing the seller|
|email|string|true|none|email of the admin responsible for the seller.|
|exchangeReturnPolicy|string|true|none|Text describing the exchange and return policy previously agreed between the marketplace and the seller.|
|fulfillmentEndpoint|string|true|none|URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. <br><br>For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process. <br><br>For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`. <br><br>The value `SellerName` corresponds to the store name if the seller is a VTEX store. <br><br>The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. <br><br>The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. <br><br>To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`|
|fulfillmentSellerId|string|true|none| Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.|
|groups|[[Groups](#schemagroups)]|false|none|Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.|
|id|string|true|none|Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.|
|isActive|boolean|true|none|Whether the seller is active on the marketplace or not.|
|isBetterScope|boolean|true|none|Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.|
|isVtex|boolean|true|none|Flag determining whether the seller configured is a VTEX store or not.|
|name|string|true|none|Name of the seller's store, configured in the seller's environment.|
|password|string \| null|true|none|User password, if you are using a hub to integrate with the external seller.|
|salesChannel|string|true|none|Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.|
|score|number|true|none|Score attributed to this seller.|
|securityPrivacyPolicy|string \| null|true|none| Text describing the security policy previously agreed between the marketplace and the seller.|
|sellerCommissionConfiguration|object|true|none|none|
|sellerType|integer(int32)|true|none|Type of seller, including: <br><br>`1`: regular seller <br><br>`2`: whitelabel seller|
|taxCode|string|true|none|This code is the Identity Number for the legal entity and is linked to information in its base country.|
|trustPolicy|string|true|none| the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field|
|user|string \| null|true|none|Username, if you are using a hub to integrate with the external seller.|

<h2 id="tocS_accountable">accountable</h2>
<!-- backwards compatibility -->
<a id="schemaaccountable"></a>
<a id="schema_accountable"></a>
<a id="tocSaccountable"></a>
<a id="tocsaccountable"></a>

```json
{
  "email": "email@email.com",
  "name": "Jane Smith",
  "phone": "1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the person responsible for the seller.|
|name|string|true|none|Name of the person responsible for the seller.|
|phone|string|true|none|Phone number of the person responsible for the seller.|

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "Rio de Janeiro",
  "complement": "Appartment 1234",
  "neighborhood": "VTEX quarter",
  "number": "25",
  "postalcode": "12345678",
  "state": "RJ",
  "street": "VTEX street"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|City name, from the seller's address.|
|complement|string|true|none|Seller's address complement.|
|neighborhood|string|true|none|Seller's address neighborhood.|
|number|string|true|none|Street's number, from the seller's address.|
|postalcode|string|true|none|Postal code from the seller's address.|
|state|string|true|none|State, from the seller's address.|
|street|string|true|none|Street information, from the seller's address.|
