<h1 id="checkout-api">Checkout API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>ℹ️ Check the new [Checkout onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/checkout-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Checkout and is organized by focusing on the developer's journey.

The Checkout API allows you to obtain and configure information about the shopping cart and its attachments, personalization of custom fields, orderForm structure, fulfillment data, order management, and identification of the sellers delivery region.

>ℹ️ Data modification operations (`POST`, `PATCH`, `PUT` or `DELETE` endpoints) shall not be performed in parallel in the Checkout APIs. They need to be enqueued by the client/requester. Otherwise, old values ​​can be overwritten incorrectly or competition errors may occur.

>⚠️ All endpoints that consult or edit the orderForm can change the authentication depending on the customer context. If you are handling information from a customer with a complete profile on the store, authentication will be required. You can only access or modify the customer data for these profiles with an authenticated request.

## Shopping cart

Allows merchants to simulate, configure and customize shopping cart information.

- [POST - Cart Simulation](https://developers.vtex.com/vtex-rest-api/reference/cartsimulation)
- [GET - Get current or create a new cart](https://developers.vtex.com/vtex-rest-api/reference/createanewcart)
- [GET - Get cart information by ID](https://developers.vtex.com/vtex-rest-api/reference/getcartinformationbyid)
- [POST - Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems)
- [GET - Remove all personal data](https://developers.vtex.com/vtex-rest-api/reference/removeallpersonaldata)
- [POST - Update cart items](https://developers.vtex.com/vtex-rest-api/reference/itemsupdate)
- [POST - Add cart items](https://developers.vtex.com/vtex-rest-api/reference/items)
- [PUT - Change price](https://developers.vtex.com/vtex-rest-api/reference/pricechange)
- [PATCH - Ignore profile data](https://developers.vtex.com/vtex-rest-api/reference/ignoreprofiledata)
- [GET - Cart installments](https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments)
- [POST - Add coupons to the cart](https://developers.vtex.com/vtex-rest-api/reference/addcoupons)


## Cart attachments

Allows merchants to obtain client profiles and add information to a given shopping cart.

- [GET - Get client profile by email](https://developers.vtex.com/vtex-rest-api/reference/getclientprofilebyemail)
- [POST - Add client profile](https://developers.vtex.com/vtex-rest-api/reference/addclientprofile)
- [POST - Add shipping address and select delivery option](https://developers.vtex.com/vtex-rest-api/reference/addshippingaddress)
- [POST - Add client preferences](https://developers.vtex.com/vtex-rest-api/reference/addclientpreferences)
- [POST - Add marketing data](https://developers.vtex.com/vtex-rest-api/reference/addmarketingdata)
- [POST - Add payment data](https://developers.vtex.com/vtex-rest-api/reference/addpaymentdata)
- [POST - Add merchant context data](https://developers.vtex.com/vtex-rest-api/reference/addmerchantcontextdata)


## Custom data

Allows merchants to manage custom fields that were created by an app in their account.

- [PUT - Set multiple custom field values](https://developers.vtex.com/vtex-rest-api/reference/setmultiplecustomfieldvalues)
- [PUT - Set single custom field value](https://developers.vtex.com/vtex-rest-api/reference/setsinglecustomfieldvalue)
- [DELETE - Remove single custom field value](https://developers.vtex.com/vtex-rest-api/reference/removesinglecustomfieldvalue)


## Configuration

Allows merchants to configure orderForm in the account and seller exchange on a given order.

- [GET - Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration)
- [POST - Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration)
- [GET - Get window to change seller](https://developers.vtex.com/vtex-rest-api/reference/getwindowtochangeseller)
- [POST - Update window to change seller](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller)
- [POST - Clear orderForm messages](https://developers.vtex.com/vtex-rest-api/reference/clearorderformmessages)


## Fulfillment

Allows merchants to obtain pickup points and address information.

- [GET - List pickup points by location](https://developers.vtex.com/vtex-rest-api/reference/listpickupppointsbylocation)
- [GET - Get address by postal code](https://developers.vtex.com/vtex-rest-api/reference/getaddressbypostalcode)


## Order placement

Allows merchants to place and process orders by creating a new cart or using an existing cart.

- [POST - Place order from an existing cart](https://developers.vtex.com/vtex-rest-api/reference/placeorderfromexistingorderform)
- [PUT - Place order](https://developers.vtex.com/vtex-rest-api/reference/placeorder)
- [POST - Process order](https://developers.vtex.com/vtex-rest-api/reference/processorder)


## Region

Allows merchants to obtain a list of sellers serving a specific delivery region.

- [GET - Get sellers by region or address](https://developers.vtex.com/vtex-rest-api/reference/getsellersbyregion)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="checkout-api-shopping-cart">Shopping cart</h1>

## Get current or create a new cart

<a id="opIdCreateANewCart"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/orderForm`

You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.

**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.

> This request has a time out of 45 seconds.

<h3 id="get-current-or-create-a-new-cart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|forceNewCart|query|boolean|false|Use this query parameter to create a new empty shopping cart.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": null,
    "documentType": null,
    "email": null,
    "firstName": null,
    "isCorporate": false,
    "lastName": null,
    "phone": null,
    "profileCompleteOnLoading": null,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "9ceee0fde6db489fbc682a0e2ab13a86",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": []
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": null,
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="get-current-or-create-a-new-cart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get cart information by ID

<a id="opIdGetCartInformationById"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/orderForm/{orderFormId}`

Use this request to get all information associated to a given shopping  cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

<h3 id="get-cart-information-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose information you want to retrieve.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|refreshOutdatedData|query|boolean|false|It is possible to use the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/cart-update#itemsupdate) so as to allow outdated information in the `orderForm`, which may improve performance in some cases. To guarantee that all cart information is updated, send this request with this parameter as `true`. We recommend doing this in the final stages of the shopping experience, starting from the checkout page.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5500123456789",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": false,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Royal Canin",
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/racao-royal-canin-feline-urinary/p",
      "ean": "123456789",
      "id": "1",
      "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
      "isGift": false,
      "listPrice": 30000,
      "manualPrice": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Ração Royal Canin Feline Urinary 500g",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 15000,
      "priceTags": [],
      "priceValidUntil": "2021-02-27T14:59:00.8288784Z",
      "productCategories": {
        "1": "Alimentação",
        "10": "Ração Seca"
      },
      "productCategoryIds": "/1/10/",
      "productId": "1",
      "productRefId": "",
      "quantity": 1,
      "refId": "0001",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 15000,
      "skuName": "Ração Royal Canin Feline Urinary 500g",
      "tax": 0,
      "uniqueId": "E0F2B7AF5CD74D668F1E27537206912C",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 15000,
                "value": 15000
              }
            ],
            "total": 15000,
            "value": 15000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 15000,
                "value": 7500
              }
            ],
            "total": 15000,
            "value": 7500
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 15000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T14:59:00.7879306Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-3]{8}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^2[1-8]{17}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2,
            1
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
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
        "itemId": "1",
        "itemIndex": 0,
        "selectedDeliveryChannel": null,
        "selectedSla": null,
        "shipsTo": [
          "BRA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 15000
}
```

<h3 id="get-cart-information-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Add coupons to the cart

<a id="opIdAddCoupons"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/coupons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "text": "freeshipping"
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/coupons`

Use this request to add coupons to a given shopping cart.

> Body parameter

```json
{
  "text": "freeshipping"
}
```

<h3 id="add-coupons-to-the-cart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm that will receive coupon information.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» text|body|string|false|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "availableAccounts": [],
  "availableAddresses": [
    {
      "addressId": "666c2e830bd9474ab6f6cc53fb6dd2d2",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    }
  ],
  "canEditData": true,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5521998765432",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/chopp-brahma-claro-30l/p",
        "ean": null,
        "id": "2",
        "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
        "name": "Chopp Brahma Claro 30L",
        "productId": "2",
        "refId": "CBC30L",
        "seller": "1",
        "skuName": "Chopp Brahma Claro 30L"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Brahma",
        "dimension": null,
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/chopp-brahma-claro-30l/p",
      "ean": null,
      "id": "2",
      "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
      "isGift": false,
      "listPrice": 49900,
      "manualPrice": null,
      "manualPriceAppliedBy": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Chopp Brahma Claro 30L",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 32890,
      "priceDefinition": {
        "calculatedSellingPrice": 32890,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 32890
          }
        ],
        "total": 32890
      },
      "priceTags": [],
      "priceValidUntil": "2022-07-13T18:30:46Z",
      "productCategories": {
        "1": "Bebidas"
      },
      "productCategoryIds": "/1/",
      "productId": "2",
      "productRefId": "",
      "quantity": 1,
      "refId": "CBC30L",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 32890,
      "skuName": "Chopp Brahma Claro 30L",
      "tax": 0,
      "uniqueId": "9D6E447B3FF64CEDA33B17C01379C119",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": {
    "ascending": true,
    "criteria": "NAME"
  },
  "loggedIn": false,
  "marketingData": {
    "coupon": "freeshipping",
    "marketingTags": [],
    "utmCampaign": null,
    "utmMedium": null,
    "utmSource": null,
    "utmiCampaign": null,
    "utmiPart": null,
    "utmipage": null
  },
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "giftCards": [],
    "transactions": [
      {
        "isActive": true,
        "merchantName": "MYSTORE",
        "payments": [],
        "sharedTransaction": false,
        "transactionId": "296D6D245C17437E823EB77E403FC88D"
      }
    ]
  },
  "profileProvider": "VTEX",
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": {
      "addressId": "teste",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    },
    "availableAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "teste",
        "deliveryChannels": [
          {
            "id": "delivery"
          },
          {
            "id": "pickup-in-point"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Normal",
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": [
          {
            "availableDeliveryWindows": [],
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
            "deliveryWindow": null,
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
    "pickupPoints": [],
    "selectedAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ]
  },
  "storeId": null,
  "storePreferencesData": {},
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total Items",
      "value": 32890
    }
  ],
  "userProfileId": "fb542e51-5488-4c34-8d17-ed8fcf597a94",
  "userType": null,
  "value": 34390
}
```

<h3 id="add-coupons-to-the-cart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-coupons-to-the-cart-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowManualPrice|boolean|false|none|Permission to modify item price manually.|
|availableAccounts|[string]|false|none|Available accounts.|
|availableAddresses|[object]|false|none|Information on each available address.|
|» addressId|string|false|none|Address ID.|
|» addressType|string|false|none|Address type.|
|» city|string|false|none|City of the address.|
|» complement|string \| null|false|none|Complement to the address.|
|» country|string|false|none|Country of the address. ISO three-letter code.|
|» geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» neighborhood|string|false|none|Neighborhood of the address.|
|» number|string|false|none|Number of the address.|
|» receiverName|string|false|none|Name of the receiver.|
|» reference|string \| null|false|none|Reference that may help in the location of the address.|
|» state|string|false|none|State of the address.|
|» street|string|false|none|Street of the address.|
|canEditData|boolean|false|none|Data can be edited.|
|clientPreferencesData|object|false|none|Object containing preferences from the client who placed the order.|
|» locale|string|false|none|Client's locale. Examples: `pt-BR` and `en-US`.|
|» optinNewsLetter|boolean|false|none|`true` if the client opted to receive newsletter from the store.|
|clientProfileData|object|false|none|Customer's profile information.|
|» corporateDocument|string \| null|false|none|Corporate document, if the customer is a legal entity.|
|» corporateName|string \| null|false|none|Company name, if the customer is a legal entity.|
|» corporatePhone|string \| null|false|none|Corporate phone number, if the customer is a legal entity.|
|» customerClass|string \| null|false|none|Customer class.|
|» document|string|false|none|Document informed by the customer.|
|» documentType|string|false|none|Type of the document informed by the customer.|
|» email|string|false|none|Email address.|
|» firstName|string|false|none|First name.|
|» isCorporate|boolean|false|none|Indicates whether the customer is a legal entity.|
|» lastName|string|false|none|Last name.|
|» phone|string|false|none|Phone number.|
|» profileCompleteOnLoading|boolean|false|none|Indicates whether profile is complete on loading.|
|» profileErrorOnLoading|boolean \| null|false|none|Indicates whether profile presents error on loading.|
|» stateInscription|string \| null|false|none|State inscription, if the customer is a legal entity.|
|» tradeName|string \| null|false|none|Trade name, if the customer is a legal entity.|
|commercialConditionData|object \| null|false|none|Object containing commercial condition information.|
|customData|object \| null|false|none|Customer additional information.|
|giftRegistryData|object \| null|false|none|Gift registry list information.|
|hooksData|object \| null|false|none|Hooks information.|
|ignoreProfileData|boolean|false|none|Ignore customer profile data.|
|invoiceData|object \| null|false|none|Object containing information pertinent to the order's invoice.|
|isCheckedIn|boolean|false|none|Indicates whether order is checked in.|
|itemMetadata|object|false|none|Item metadata.|
|» items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » detailUrl|string|false|none|Detail URL.|
|» » ean|string \| null|false|none|European Article Number.|
|» » id|string|false|none|Item ID.|
|» » imageUrl|string|false|none|Image URL.|
|» » name|string|false|none|Product name.|
|» » productId|string|false|none|Product ID.|
|» » refId|string|false|none|Ref ID.|
|» » seller|string|false|none|Seller.|
|» » skuName|string|false|none|SKU name.|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|string \| null|false|none|Dimension.|
|» » offeringInfo|string \| null|false|none|Offering information.|
|» » offeringType|string \| null|false|none|Offering type.|
|» » offeringTypeId|string \| null|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Service name.|
|» » price|integer|false|none|Service price in cents.|
|» » type|string|false|none|Service type.|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string \| null|false|none|European Article Number.|
|» id|string|false|none|ID of the item.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean|false|none|Indicates whether item is a gift.|
|» listPrice|integer|false|none|List price in cents.|
|» manualPrice|integer \| null|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string \| null|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string \| null|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit|
|» modalType|string \| null|false|none|Modal type.|
|» name|string|false|none|Product name.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» preSaleDate|string \| null|false|none|Presale date.|
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
|» » rawValue|integer|false|none|Price tag raw value.|
|» » value|integer|false|none|Price tag value.|
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds`.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier|
|itemsOrdination|object|false|none|Object containing information about the ordering of items within the orderForm.|
|» ascending|boolean|false|none|Indicates whether the ordering is ascending.|
|» criteria|string|false|none|Criteria adopted to order the items in the list.|
|loggedIn|boolean|false|none|Indicates whether the user is logged into the store.|
|marketingData|object|false|none|Object containIng promotion data such as coupon tracking information and internal or external UTMs.|
|» coupon|string|false|none|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» utmCampaign|string \| null|false|none|UTM campaign.|
|» utmMedium|string \| null|false|none|UTM medium.|
|» utmSource|string \| null|false|none|UTM source.|
|» utmiCampaign|string \| null|false|none|utmi_campaign (internal utm).|
|» utmiPage|string \| null|false|none|utmi_page (internal utm).|
|» utmiPart|string \| null|false|none|utmi_part (internal utm).|
|messages|[object]|false|none|Array containing an object for each message generated by our servers while processing the request.|
|openTextField|string \| null|false|none|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)|
|orderFormId|string|false|none|ID of the orderForm corresponding to a specific cart.|
|paymentData|object|false|none|Information on the order's payment.|
|» giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» » balance|integer|false|none|Gift card balance in cents.|
|» » id|string|false|none|Gift card ID.|
|» » inUse|boolean|false|none|Indicates whether gift card is in use.|
|» » isSpecialCard|boolean|false|none|Indicates whether gift card is special.|
|» » name|string|false|none|Gift card name.|
|» » redemptionCode|string|false|none|Gift card redemption code.|
|» » value|integer|false|none|Gift card value in cents.|
|» transactions|[object]|false|none|Information on each transaction pertinent to the order.|
|» » isActive|boolean|false|none|Indicates whether transaction is active.|
|» » merchantName|string|false|none|Merchant name.|
|» » payments|[object]|false|none|Information on each payment.|
|» » » accountId|string|false|none|Account ID.|
|» » » bin|string|false|none|Bin.|
|» » » installments|integer|false|none|Number of installments.|
|» » » paymentSystem|string|false|none|Payment system.|
|» » » referenceValue|integer|false|none|Reference value for calculating interest rates, in case it applies. Displayed in cents.|
|» » » value|integer|false|none|Value including interest, in case it applies. Displayed in cents.|
|» » sharedTransaction|boolean|false|none|Indicates whather transaction is shared.|
|» » transactionId|string|false|none|Transaction ID.|
|profileProvider|string|false|none|Profile provider.|
|ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» rateAndBenefitsIdentifiers|[string]|false|none|List with rates and benefits identifiers.|
|» teaser|[string]|false|none|List with rates and benefits teasers.|
|salesChannel|string|false|none|Attribute created by the seller, in their VTEX store configuration.|
|selectableGifts|[object]|false|none|Array containing the data of the item selected as a gift.|
|sellers|[object]|false|none|Information on each seller.|
|» id|string|false|none|Seller ID.|
|» logo|string \| null|false|none|Seller logo.|
|» name|string|false|none|Seller name.|
|shippingData|object|false|none|Shipping information pertinent to the order.|
|» address|object|false|none|Address information.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» availableAddresses|[object]|false|none|Array with information on the available addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» logisticsInfo|[object]|false|none|Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.|
|» » addressId|string|false|none|Address ID.|
|» » deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » » id|string|false|none|Delivery channel ID.|
|» » itemId|string|false|none|Item ID.|
|» » itemIndex|integer|false|none|Index corresponding to the position of the object in the `items` array.|
|» » selectedDeliveryChannel|string|false|none|Delivery channel selected by the customer.|
|» » selectedSla|string|false|none|SLA selected by the customer.|
|» » shipsTo|[string]|false|none|List of countries that the item may be shipped to.|
|» » slas|[object]|false|none|Information on available SLAs.|
|» » » deliveryChannel|string|false|none|Delivery channel.|
|» » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » courierId|string|false|none|Courier ID.|
|» » » » courierName|string|false|none|Courier name.|
|» » » » dockId|string|false|none|Warehouse ID.|
|» » » » quantity|integer|false|none|Quantity.|
|» » » » warehouseId|string|false|none|Warehouse ID.|
|» » » id|string|false|none|SLA ID.|
|» » » listPrice|integer|false|none|List price in cents.|
|» » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » name|string|false|none|SLA name.|
|» » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » address|object \| null|false|none|Address information.|
|» » » » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » » » city|string|false|none|City of the shipping address.|
|» » » » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » » » postalCode|string|false|none|Postal code.|
|» » » » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » » » state|string|false|none|State of the shipping address.|
|» » » » » street|string|false|none|Street of the shipping address.|
|» » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » polygonName|string \| null|false|none|Polygon name.|
|» » » price|integer|false|none|Price in cents.|
|» » » shippingEstimate|string|false|none|Shipping estimate. For instance, Three business days will be represented `3bd`.|
|» » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » tax|integer|false|none|Tax in cents.|
|» » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented `3bd`.|
|» selectedAddresses|[object]|false|none|Array with information on the selected addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|storeId|string \| null|false|none|ID of the store.|
|storePreferencesData|object|false|none|Object containing data from the store's configuration (stored in VTEX's License Manager).|
|subscriptionData|object \| null|false|none|Subscription information.|
|totalizers|[object]|false|none|Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).|
|userProfileId|string|false|none|Unique ID associated with the customer profile.|
|userType|string \| null|false|none|User type.|
|value|integer|false|none|Total value of the order without separating cents. For example, $24.99 is represented `2499`.|

<aside class="success">
This operation does not require authentication
</aside>

## Cart installments

<a id="opIdGetCartInstallments"></a>

> Code samples

```bash
curl 'https://example.com/api/checkout/pub/orderForm/string/installments?paymentSystem=0' \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/orderForm/{orderFormId}/installments`

Retrieves possible amount of installments and respective values for a given cart with a given payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

This endpoint can be used to get the installment options for only one payment method at a time.

This endpoint should be called only after the selected `orderForm` already has a `paymentData`.

<h3 id="cart-installments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the `orderForm` to be consulted for installments.|
|paymentSystem|query|integer|true|ID of the payment method to be consulted for installments.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
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
          "id": "MyStore",
          "interestRate": 0,
          "total": 32000,
          "value": 32000
        }
      ],
      "total": 32000,
      "value": 32000
    },
    {
      "count": 2,
      "hasInterestRate": false,
      "interestRate": 0,
      "sellerMerchantInstallments": [
        {
          "count": 2,
          "hasInterestRate": false,
          "id": "MyStore",
          "interestRate": 0,
          "total": 32000,
          "value": 1600
        }
      ],
      "total": 32000,
      "value": 1600
    },
    {
      "count": 3,
      "hasInterestRate": false,
      "interestRate": 0,
      "sellerMerchantInstallments": [
        {
          "count": 3,
          "hasInterestRate": false,
          "id": "MyStore",
          "interestRate": 0,
          "total": 32000,
          "value": 10666
        }
      ],
      "total": 32000,
      "value": 10666
    }
  ],
  "paymentGroupName": null,
  "paymentName": null,
  "paymentSystem": "2",
  "value": 32000
}
```

<h3 id="cart-installments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add cart items

<a id="opIdItems"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "orderItems": [
      {
        "id": "2005",
        "index": 0,
        "price": 1099,
        "quantity": 3,
        "seller": "1"
      }
    ]
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/items`

Use this request to add a new item to the shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

> Body parameter

```json
{
  "orderItems": [
    {
      "id": "2005",
      "index": 0,
      "price": 1099,
      "quantity": 3,
      "seller": "1"
    }
  ]
}
```

<h3 id="add-cart-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart in which the new item will be added.|
|allowedOutdatedData|query|[object]|false|In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.<br><br>This array accepts strings and currently the only possible value is `”paymentData”`.|
|body|body|object|true|none|
|» orderItems|body|[object]|false|Array containing the cart items. Each object inside this array corresponds to a different item.|
|» » id|body|string|true|The ID of the SKU in VTEX platform.|
|» » index|body|integer|true|The position of the item in the array.|
|» » price|body|integer|false|Price of the item in cents. Send this value in case you want to make a bulk price change.|
|» » quantity|body|integer(int32)|true|The quantity of the item (SKU) in the cart.|
|» » seller|body|string|true|The seller responsible for the SKU.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "availableAccounts": [],
  "availableAddresses": [
    {
      "addressId": "666c2e830bd9474ab6f6cc53fb6dd2d2",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    }
  ],
  "canEditData": true,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5521998765432",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Brahma",
        "dimension": null,
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/chopp-brahma-claro-30l/p",
      "ean": null,
      "id": "2",
      "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
      "isGift": false,
      "listPrice": 49900,
      "manualPrice": null,
      "manualPriceAppliedBy": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Chopp Brahma Claro 30L",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 32890,
      "priceDefinition": {
        "calculatedSellingPrice": 32890,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 32890
          }
        ],
        "total": 32890
      },
      "priceTags": [],
      "priceValidUntil": "2022-07-13T18:30:46Z",
      "productCategories": {
        "1": "Bebidas"
      },
      "productCategoryIds": "/1/",
      "productId": "2005",
      "productRefId": "",
      "quantity": 3,
      "refId": "CBC30L",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 32890,
      "skuName": "Chopp Brahma Claro 30L",
      "tax": 0,
      "uniqueId": "9D6E447B3FF64CEDA33B17C01379C119",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": {
    "ascending": true,
    "criteria": "NAME"
  },
  "loggedIn": false,
  "marketingData": {
    "coupon": "free-shipping",
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "app",
    "utmiCampaign": null,
    "utmiPart": null,
    "utmipage": null
  },
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 15000,
                "value": 15000
              }
            ],
            "total": 15000,
            "value": 15000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 15000,
                "value": 7500
              }
            ],
            "total": 15000,
            "value": 7500
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 15000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T14:59:00.7879306Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-3]{8}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^2[1-8]{17}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2,
            1
          ]
        }
      }
    ],
    "payments": []
  },
  "profileProvider": "VTEX",
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": {
      "addressId": "teste",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    },
    "availableAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "teste",
        "deliveryChannels": [
          {
            "id": "delivery"
          },
          {
            "id": "pickup-in-point"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Normal",
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": [
          {
            "availableDeliveryWindows": [],
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
            "deliveryWindow": null,
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
    "pickupPoints": [],
    "selectedAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ]
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymboupdate cartl": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    }
  ],
  "userProfileId": "fb542e51-5488-4c34-8d17-ed8fcf597a94",
  "userType": null,
  "value": 34390
}
```

<h3 id="add-cart-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-cart-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowManualPrice|boolean|false|none|Permission to modify item price manually.|
|availableAccounts|[string]|false|none|Available accounts.|
|availableAddresses|[object]|false|none|Information on each available address.|
|» addressId|string|false|none|Address ID.|
|» addressType|string|false|none|Address type.|
|» city|string|false|none|City of the address.|
|» complement|string \| null|false|none|Complement to the address.|
|» country|string|false|none|Country of the address. ISO three-letter code.|
|» geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» neighborhood|string|false|none|Neighborhood of the address.|
|» number|string|false|none|Number of the address.|
|» receiverName|string|false|none|Name of the receiver.|
|» reference|string \| null|false|none|Reference that may help in the location of the address.|
|» state|string|false|none|State of the address.|
|» street|string|false|none|Street of the address.|
|canEditData|boolean|false|none|Data can be edited.|
|clientPreferencesData|object|false|none|Object containing preferences from the client who placed the order.|
|» locale|string|false|none|Client's locale. Examples: `pt-BR` and `en-US`.|
|» optinNewsLetter|boolean|false|none|`true` if the client opted to receive newsletter from the store.|
|clientProfileData|object|false|none|Customer's profile information.|
|» corporateDocument|string \| null|false|none|Corporate document, if the customer is a legal entity.|
|» corporateName|string \| null|false|none|Company name, if the customer is a legal entity.|
|» corporatePhone|string \| null|false|none|Corporate phone number, if the customer is a legal entity.|
|» customerClass|string \| null|false|none|Customer class.|
|» document|string|false|none|Document informed by the customer.|
|» documentType|string|false|none|Type of the document informed by the customer.|
|» email|string|false|none|Email address.|
|» firstName|string|false|none|First name.|
|» isCorporate|boolean|false|none|Indicates whether the customer is a legal entity.|
|» lastName|string|false|none|Last name.|
|» phone|string|false|none|Phone number.|
|» profileCompleteOnLoading|boolean|false|none|Indicates whether profile is complete on loading.|
|» profileErrorOnLoading|boolean \| null|false|none|Indicates whether profile presents error on loading.|
|» stateInscription|string \| null|false|none|State inscription, if the customer is a legal entity.|
|» tradeName|string \| null|false|none|Trade name, if the customer is a legal entity.|
|commercialConditionData|object \| null|false|none|Object containing commercial condition information.|
|customData|object \| null|false|none|Customer additional information.|
|giftRegistryData|object \| null|false|none|Gift registry list information.|
|hooksData|object \| null|false|none|Hooks information.|
|ignoreProfileData|boolean|false|none|Ignore customer profile data.|
|invoiceData|object \| null|false|none|Object containing information pertinent to the order's invoice.|
|isCheckedIn|boolean|false|none|Indicates whether order is checked in.|
|itemMetadata|object|false|none|Item metadata.|
|» items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » detailUrl|string|false|none|Detail URL.|
|» » ean|string \| null|false|none|European Article Number.|
|» » id|string|false|none|Item ID.|
|» » imageUrl|string|false|none|Image URL.|
|» » name|string|false|none|Product name.|
|» » productId|string|false|none|Product ID.|
|» » refId|string|false|none|Ref ID.|
|» » seller|string|false|none|Seller.|
|» » skuName|string|false|none|SKU name.|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|string \| null|false|none|Dimension.|
|» » offeringInfo|string \| null|false|none|Offering information.|
|» » offeringType|string \| null|false|none|Offering type.|
|» » offeringTypeId|string \| null|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability.|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Service name.|
|» » price|integer|false|none|Service price in cents.|
|» » type|string|false|none|Service type.|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string \| null|false|none|European Article Number.|
|» id|string|false|none|ID of the item.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean|false|none|Indicates whether item is a gift.|
|» listPrice|integer|false|none|List price in cents.|
|» manualPrice|integer \| null|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string \| null|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string \| null|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit.|
|» modalType|string \| null|false|none|Modal type.|
|» name|string|false|none|Product name.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» preSaleDate|string \| null|false|none|Presale date.|
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
|» » rawValue|integer|false|none|Price tag raw value.|
|» » value|integer|false|none|Price tag value.|
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds`.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier.|
|itemsOrdination|object|false|none|Object containing information about the ordering of items within the orderForm.|
|» ascending|boolean|false|none|Indicates whether the ordering is ascending.|
|» criteria|string|false|none|Criteria adopted to order the items in the list.|
|loggedIn|boolean|false|none|Indicates whether the user is logged into the store.|
|marketingData|object|false|none|Object containing promotion data such as coupon tracking information and internal or external UTMs.|
|» coupon|string|false|none|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» utmCampaign|string|false|none|UTM campaign|
|» utmMedium|string|false|none|UTM medium.|
|» utmSource|string|false|none|UTM source.|
|» utmiCampaign|string \| null|false|none|utmi_campaign (internal utm).|
|» utmiPage|string \| null|false|none|utmi_page (internal utm).|
|» utmiPart|string \| null|false|none|utmi_part (internal utm).|
|messages|[object]|false|none|Array containing an object for each message generated by our servers while processing the request.|
|openTextField|string \| null|false|none|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).|
|orderFormId|string|false|none|ID of the orderForm corresponding to a specific cart.|
|paymentData|object|false|none|Information on the order's payment.|
|» giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» » balance|integer|false|none|Gift card balance in cents.|
|» » id|string|false|none|Gift card ID.|
|» » inUse|boolean|false|none|Indicates whether gift card is in use.|
|» » isSpecialCard|boolean|false|none|Indicates whether gift card is special.|
|» » name|string|false|none|Gift card name.|
|» » redemptionCode|string|false|none|Gift card redemption code.|
|» » value|integer|false|none|Gift card value in cents.|
|» transactions|[object]|false|none|Information on each transaction pertinent to the order.|
|» » isActive|boolean|false|none|Indicates whether transaction is active.|
|» » merchantName|string|false|none|Merchant name.|
|» » payments|[object]|false|none|Information on each payment.|
|» » » accountId|string|false|none|Account ID.|
|» » » bin|string|false|none|Bin.|
|» » » installments|integer|false|none|Number of installments.|
|» » » paymentSystem|string|false|none|Payment system.|
|» » » referenceValue|integer|false|none|Reference value for calculating interest rates, in case it applies. Displayed in cents.|
|» » » value|integer|false|none|Value including interest, in case it applies. Displayed in cents.|
|» » sharedTransaction|boolean|false|none|Indicates whather transaction is shared.|
|» » transactionId|string|false|none|Transaction ID.|
|profileProvider|string|false|none|Profile provider.|
|ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» rateAndBenefitsIdentifiers|[string]|false|none|List with rates and benefits identifiers.|
|» teaser|[string]|false|none|List with rates and benefits teasers.|
|salesChannel|string|false|none|Attribute created by the seller, in their VTEX store configuration.|
|selectableGifts|[object]|false|none|Array containing the data of the item selected as a gift.|
|sellers|[object]|false|none|Information on each seller.|
|» id|string|false|none|Seller ID.|
|» logo|string \| null|false|none|Seller logo.|
|» name|string|false|none|Seller name.|
|shippingData|object|false|none|Shipping information pertinent to the order.|
|» address|object|false|none|Address information.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» availableAddresses|[object]|false|none|Array with information on the available addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» logisticsInfo|[object]|false|none|Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.|
|» » addressId|string|false|none|Address ID.|
|» » deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » » id|string|false|none|Delivery channel ID.|
|» » itemId|string|false|none|Item ID.|
|» » itemIndex|integer|false|none|Index corresponding to the position of the object in the `items` array.|
|» » selectedDeliveryChannel|string|false|none|Delivery channel selected by the customer.|
|» » selectedSla|string|false|none|SLA selected by the customer.|
|» » shipsTo|[string]|false|none|List of countries that the item may be shipped to.|
|» » slas|[object]|false|none|Information on available SLAs.|
|» » » deliveryChannel|string|false|none|Delivery channel.|
|» » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » courierId|string|false|none|Courier ID.|
|» » » » courierName|string|false|none|Courier name.|
|» » » » dockId|string|false|none|Warehouse ID.|
|» » » » quantity|integer|false|none|Quantity.|
|» » » » warehouseId|string|false|none|Warehouse ID.|
|» » » id|string|false|none|SLA ID.|
|» » » listPrice|integer|false|none|List price in cents.|
|» » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » name|string|false|none|SLA name.|
|» » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » address|object \| null|false|none|Address information.|
|» » » » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » » » city|string|false|none|City of the shipping address.|
|» » » » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » » » postalCode|string|false|none|Postal code.|
|» » » » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » » » state|string|false|none|State of the shipping address.|
|» » » » » street|string|false|none|Street of the shipping address.|
|» » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » polygonName|string \| null|false|none|Polygon name.|
|» » » price|integer|false|none|Price in cents.|
|» » » shippingEstimate|string|false|none|Shipping estimate. For instance, Three business days will be represented `3bd`.|
|» » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » tax|integer|false|none|Tax in cents.|
|» » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented `3bd`.|
|» selectedAddresses|[object]|false|none|Array with information on the selected addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|storeId|string \| null|false|none|ID of the store.|
|storePreferencesData|object|false|none|Object containing data from the store's configuration (stored in VTEX's License Manager).|
|subscriptionData|object \| null|false|none|Subscription information.|
|totalizers|[object]|false|none|Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).|
|userProfileId|string|false|none|Unique ID associated with the customer profile.|
|userType|string \| null|false|none|User type.|
|value|integer|false|none|Total value of the order without separating cents. For example, $24.99 is represented `2499`.|

<aside class="success">
This operation does not require authentication
</aside>

## Remove all items

<a id="opIdRemoveAllItems"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/items/removeAll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/items/removeAll`

This request removes all items from a given cart, leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

> Body parameter

```json
{}
```

<h3 id="remove-all-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose items you want to remove.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "769387308",
    "documentType": "dni",
    "email": "john.doe@google.com",
    "firstName": "John",
    "isCorporate": false,
    "lastName": "Doe",
    "phone": "+5491111223344",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": false,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": []
  },
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 15000,
                "value": 15000
              }
            ],
            "total": 15000,
            "value": 15000
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 15000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T14:23:23.8196668Z",
        "groupName": "creditCardPaymentGroup",
        "id": 4,
        "isCustom": false,
        "name": "Mastercard",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "4",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[1-3]{9}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^((5(([1-2]|[5-5])[0-3]{8}|0((2|9)([0-2]{5}))|1(0(5((0|[4-8])[1-7]{6})|([2-3]|[1-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
    "logisticsInfo": [],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="remove-all-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update cart items

<a id="opIdItemsUpdate"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/items/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "orderItems": [
      {
        "index": 0,
        "quantity": 3
      }
    ]
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/items/update`

You can use this request to:

1. Change the quantity of one or more items in a specific cart.
2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).

**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

> Body parameter

```json
{
  "orderItems": [
    {
      "index": 0,
      "quantity": 3
    }
  ]
}
```

<h3 id="update-cart-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the `orderForm` corresponding to the cart whose items you want to update.|
|allowedOutdatedData|query|[object]|false|In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.<br><br>This array accepts strings and currently the only possible value is `”paymentData”`.|
|body|body|object|true|none|
|» orderItems|body|[object]|false|Array containing the cart items. Each object inside this array corresponds to a different item.|
|» » index|body|integer|true|The position of the item in the array.|
|» » quantity|body|integer(int32)|true|The quantity of the item in the cart.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "availableAccounts": [],
  "availableAddresses": [
    {
      "addressId": "666c2e830bd9474ab6f6cc53fb6dd2d2",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        "-47.924747467041016",
        "-15.832582473754883"
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    }
  ],
  "canEditData": true,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5521998765432",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Brahma",
        "dimension": null,
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/chopp-brahma-claro-30l/p",
      "ean": null,
      "id": "2",
      "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
      "isGift": false,
      "listPrice": 49900,
      "manualPrice": null,
      "manualPriceAppliedBy": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Chopp Brahma Claro 30L",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 32890,
      "priceDefinition": {
        "calculatedSellingPrice": 32890,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 32890
          }
        ],
        "total": 32890
      },
      "priceTags": [],
      "priceValidUntil": "2022-07-13T18:30:46Z",
      "productCategories": {
        "1": "Bebidas"
      },
      "productCategoryIds": "/1/",
      "productId": "2",
      "productRefId": "",
      "quantity": 1,
      "refId": "CBC30L",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 32890,
      "skuName": "Chopp Brahma Claro 30L",
      "tax": 0,
      "uniqueId": "9D6E447B3FF64CEDA33B17C01379C119",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": {
    "ascending": true,
    "criteria": "NAME"
  },
  "loggedIn": false,
  "marketingData": {
    "coupon": "free-shipping",
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "app",
    "utmiCampaign": null,
    "utmiPart": null,
    "utmipage": null
  },
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 15000,
                "value": 15000
              }
            ],
            "total": 15000,
            "value": 15000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 15000,
                "value": 7500
              }
            ],
            "total": 15000,
            "value": 7500
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 15000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T14:59:00.7879306Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-3]{8}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^2[1-8]{17}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2,
            1
          ]
        }
      }
    ],
    "payments": []
  },
  "profileProvider": "VTEX",
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": {
      "addressId": "teste",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        "-47.924747467041016",
        "-15.832582473754883"
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    },
    "availableAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          "-47.924747467041016",
          "-15.832582473754883"
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "teste",
        "deliveryChannels": [
          {
            "id": "delivery"
          },
          {
            "id": "pickup-in-point"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Normal",
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": [
          {
            "availableDeliveryWindows": [],
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
            "deliveryWindow": null,
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
    "pickupPoints": [],
    "selectedAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          "-47.924747467041016",
          "-15.832582473754883"
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ]
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymboupdate cartl": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    }
  ],
  "userProfileId": "fb542e51-5488-4c34-8d17-ed8fcf597a94",
  "userType": null,
  "value": 34390
}
```

<h3 id="update-cart-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-cart-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowManualPrice|boolean|false|none|Permission to modify item price manually.|
|availableAccounts|[string]|false|none|Available accounts.|
|availableAddresses|[object]|false|none|Information on each available address.|
|» addressId|string|false|none|Address ID.|
|» addressType|string|false|none|Address type.|
|» city|string|false|none|City of the address.|
|» complement|string \| null|false|none|Complement to the address.|
|» country|string|false|none|Country of the address. ISO three-letter code.|
|» geoCoordinates|[string]|false|none|List with the two geocoordinates.|
|» isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» neighborhood|string|false|none|Neighborhood of the address.|
|» number|string|false|none|Number of the address.|
|» receiverName|string|false|none|Name of the receiver.|
|» reference|string \| null|false|none|Reference that may help in the location of the address.|
|» state|string|false|none|State of the address.|
|» street|string|false|none|Street of the address.|
|canEditData|boolean|false|none|Data can be edited.|
|clientPreferencesData|object|false|none|Object containing preferences from the client who placed the order.|
|» locale|string|false|none|Client's locale. Examples: `pt-BR` and `en-US`.|
|» optinNewsLetter|boolean|false|none|`true` if the client opted to receive newsletter from the store.|
|clientProfileData|object|false|none|Customer's profile information.|
|» corporateDocument|string \| null|false|none|Corporate document, if the customer is a legal entity.|
|» corporateName|string \| null|false|none|Company name, if the customer is a legal entity.|
|» corporatePhone|string \| null|false|none|Corporate phone number, if the customer is a legal entity.|
|» customerClass|string \| null|false|none|Customer class.|
|» document|string|false|none|Document informed by the customer.|
|» documentType|string|false|none|Type of the document informed by the customer.|
|» email|string|false|none|Email address.|
|» firstName|string|false|none|First name.|
|» isCorporate|boolean|false|none|Indicates whether the customer is a legal entity.|
|» lastName|string|false|none|Last name.|
|» phone|string|false|none|Phone number.|
|» profileCompleteOnLoading|boolean|false|none|Indicates whether profile is complete on loading.|
|» profileErrorOnLoading|boolean \| null|false|none|Indicates whether profile presents error on loading.|
|» stateInscription|string \| null|false|none|State inscription, if the customer is a legal entity.|
|» tradeName|string \| null|false|none|Trade name, if the customer is a legal entity.|
|commercialConditionData|object \| null|false|none|Object containing commercial condition information.|
|customData|object \| null|false|none|Customer additional information.|
|giftRegistryData|object \| null|false|none|Gift registry list information.|
|hooksData|object \| null|false|none|Hooks information.|
|ignoreProfileData|boolean|false|none|Ignore customer profile data.|
|invoiceData|object \| null|false|none|Object containing information pertinent to the order's invoice.|
|isCheckedIn|boolean|false|none|Indicates whether order is checked in.|
|itemMetadata|object|false|none|Item metadata.|
|» items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » detailUrl|string|false|none|Detail URL.|
|» » ean|string \| null|false|none|European Article Number.|
|» » id|string|false|none|Item ID.|
|» » imageUrl|string|false|none|Image URL.|
|» » name|string|false|none|Product name.|
|» » productId|string|false|none|Product ID.|
|» » refId|string|false|none|Ref ID.|
|» » seller|string|false|none|Seller.|
|» » skuName|string|false|none|SKU name.|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|string \| null|false|none|Dimension.|
|» » offeringInfo|string \| null|false|none|Offering information.|
|» » offeringType|string \| null|false|none|Offering type.|
|» » offeringTypeId|string \| null|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability.|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Service name.|
|» » price|integer|false|none|Service price in cents.|
|» » type|string|false|none|Service type.|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string \| null|false|none|European Article Number.|
|» id|string|false|none|ID of the item.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean|false|none|Indicates whether item is a gift.|
|» listPrice|integer|false|none|List price in cents.|
|» manualPrice|integer \| null|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string \| null|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string \| null|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit.|
|» modalType|string \| null|false|none|Modal type.|
|» name|string|false|none|Product name.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» preSaleDate|string \| null|false|none|Presale date.|
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
|» » rawValue|integer|false|none|Price tag raw value.|
|» » value|integer|false|none|Price tag value.|
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds`.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier.|
|itemsOrdination|object|false|none|Object containing information about the ordering of items within the `orderForm`.|
|» ascending|boolean|false|none|Indicates whether the ordering is ascending.|
|» criteria|string|false|none|Criteria adopted to order the items in the list.|
|loggedIn|boolean|false|none|Indicates whether the user is logged into the store.|
|marketingData|object|false|none|Object containing promotion data such as coupon tracking information and internal or external UTMs.|
|» coupon|string|false|none|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» utmCampaign|string|false|none|UTM campaign|
|» utmMedium|string|false|none|UTM medium.|
|» utmSource|string|false|none|UTM source.|
|» utmiCampaign|string \| null|false|none|utmi_campaign (internal utm).|
|» utmiPage|string \| null|false|none|utmi_page (internal utm).|
|» utmiPart|string \| null|false|none|utmi_part (internal utm).|
|messages|[object]|false|none|Array containing an object for each message generated by our servers while processing the request.|
|openTextField|string \| null|false|none|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).|
|orderFormId|string|false|none|ID of the orderForm corresponding to a specific cart.|
|paymentData|object|false|none|Information on the order's payment.|
|» giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» » balance|integer|false|none|Gift card balance in cents.|
|» » id|string|false|none|Gift card ID.|
|» » inUse|boolean|false|none|Indicates whether gift card is in use.|
|» » isSpecialCard|boolean|false|none|Indicates whether gift card is special.|
|» » name|string|false|none|Gift card name.|
|» » redemptionCode|string|false|none|Gift card redemption code.|
|» » value|integer|false|none|Gift card value in cents.|
|» transactions|[object]|false|none|Information on each transaction pertinent to the order.|
|» » isActive|boolean|false|none|Indicates whether transaction is active.|
|» » merchantName|string|false|none|Merchant name.|
|» » payments|[object]|false|none|Information on each payment.|
|» » » accountId|string|false|none|Account ID.|
|» » » bin|string|false|none|Bin.|
|» » » installments|integer|false|none|Number of installments.|
|» » » paymentSystem|string|false|none|Payment system.|
|» » » referenceValue|integer|false|none|Reference value for calculating interest rates, in case it applies. Displayed in cents.|
|» » » value|integer|false|none|Value including interest, in case it applies. Displayed in cents.|
|» » sharedTransaction|boolean|false|none|Indicates whather transaction is shared.|
|» » transactionId|string|false|none|Transaction ID.|
|profileProvider|string|false|none|Profile provider.|
|ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» rateAndBenefitsIdentifiers|[string]|false|none|List with rates and benefits identifiers.|
|» teaser|[string]|false|none|List with rates and benefits teasers.|
|salesChannel|string|false|none|Attribute created by the seller, in their VTEX store configuration.|
|selectableGifts|[object]|false|none|Array containing the data of the item selected as a gift.|
|sellers|[object]|false|none|Information on each seller.|
|» id|string|false|none|Seller ID.|
|» logo|string \| null|false|none|Seller logo.|
|» name|string|false|none|Seller name.|
|shippingData|object|false|none|Shipping information pertinent to the order.|
|» address|object|false|none|Address information.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[string]|false|none|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» availableAddresses|[object]|false|none|Array with information on the available addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[string]|false|none|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» logisticsInfo|[object]|false|none|Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.|
|» » addressId|string|false|none|Address ID.|
|» » deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » » id|string|false|none|Delivery channel ID.|
|» » itemId|string|false|none|Item ID.|
|» » itemIndex|integer|false|none|Index corresponding to the position of the object in the `items` array.|
|» » selectedDeliveryChannel|string|false|none|Delivery channel selected by the customer.|
|» » selectedSla|string|false|none|SLA selected by the customer.|
|» » shipsTo|[string]|false|none|List of countries that the item may be shipped to.|
|» » slas|[object]|false|none|Information on available SLAs.|
|» » » deliveryChannel|string|false|none|Delivery channel.|
|» » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » courierId|string|false|none|Courier ID.|
|» » » » courierName|string|false|none|Courier name.|
|» » » » dockId|string|false|none|Warehouse ID.|
|» » » » quantity|integer|false|none|Quantity.|
|» » » » warehouseId|string|false|none|Warehouse ID.|
|» » » id|string|false|none|SLA ID.|
|» » » listPrice|integer|false|none|List price in cents.|
|» » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » name|string|false|none|SLA name.|
|» » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » address|object \| null|false|none|Address information.|
|» » » » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » » » city|string|false|none|City of the shipping address.|
|» » » » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » » » geoCoordinates|[string]|false|none|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » » » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » » » postalCode|string|false|none|Postal code.|
|» » » » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » » » state|string|false|none|State of the shipping address.|
|» » » » » street|string|false|none|Street of the shipping address.|
|» » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » polygonName|string \| null|false|none|Polygon name.|
|» » » price|integer|false|none|Price in cents.|
|» » » shippingEstimate|string|false|none|Shipping estimate. For instance, "three business days" will be represented as `3bd`.|
|» » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » tax|integer|false|none|Tax in cents.|
|» » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented as `3bd`.|
|» selectedAddresses|[object]|false|none|Array with information on the selected addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[string]|false|none|Array with two strings with geocoordinates, first latitude, then longitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|storeId|string \| null|false|none|ID of the store.|
|storePreferencesData|object|false|none|Object containing data from the store's configuration (stored in VTEX's License Manager).|
|subscriptionData|object \| null|false|none|Subscription information.|
|totalizers|[object]|false|none|Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).|
|userProfileId|string|false|none|Unique ID associated with the customer profile.|
|userType|string \| null|false|none|User type.|
|value|integer|false|none|Total value of the order without separating cents. For example, $24.99 is represented as `2499`.|

<aside class="success">
This operation does not require authentication
</aside>

## Change price

<a id="opIdPriceChange"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/items/string/price \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "price": 10000
  }'
```

`PUT /api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/price`

This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.

You also need to pass the new price value in the body.

Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.

> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.

> Body parameter

```json
{
  "price": 10000
}
```

<h3 id="change-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose items will have the price changed.|
|itemIndex|path|string|true|The index of the item in the cart. Each cart item is identified by an index, starting in 0.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[PriceChangeRequest](#schemapricechangerequest)|true|none|
|» price|body|integer(int32)|true|The new price of the item.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": true,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Royal Canin",
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/racao-royal-canin-feline-urinary/p",
      "ean": "123456789",
      "id": "1",
      "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
      "isGift": false,
      "listPrice": 30000,
      "manualPrice": 10000,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Ração Royal Canin Feline Urinary 500g",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 15000,
      "priceTags": [
        {
          "identifier": null,
          "isPercentual": false,
          "name": "DISCOUNT@MANUALPRICE",
          "rawValue": -50,
          "value": -5000
        }
      ],
      "priceValidUntil": "2021-02-27T14:59:00.8288784Z",
      "productCategories": {
        "1": "Alimentação",
        "10": "Ração Seca"
      },
      "productCategoryIds": "/1/10/",
      "productId": "1",
      "productRefId": "",
      "quantity": 1,
      "refId": "0001",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 10000,
      "skuName": "Ração Royal Canin Feline Urinary 500g",
      "tax": 0,
      "uniqueId": "E0F2B7AF5CD74D668F1E27537206912C",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": true,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 10000,
                "value": 10000
              }
            ],
            "total": 10000,
            "value": 10000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 10000,
                "value": 5000
              }
            ],
            "total": 10000,
            "value": 5000
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 10000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T16:42:31.7836281Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^4[0-9]{15}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
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
        "itemId": "1",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": null,
        "shipsTo": [
          "BRA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": -5000
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 10000
}
```

<h3 id="change-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Ignore profile data

<a id="opIdIgnoreProfileData"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/profile \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "price": 10000
  }'
```

`PATCH /api/checkout/pub/orderForm/{orderFormId}/profile`

When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.

> Body parameter

```json
{
  "price": 10000
}
```

<h3 id="ignore-profile-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose items will have the price changed.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» ignoreProfileData|body|boolean|false|Indicates whether profile data should be ignored.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": null,
    "documentType": null,
    "email": null,
    "firstName": null,
    "isCorporate": false,
    "lastName": null,
    "phone": null,
    "profileCompleteOnLoading": null,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": true,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": true,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "68b287ae65534704b1a1e42e47c82abc",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": [],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": null,
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="ignore-profile-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Cart simulation

<a id="opIdCartSimulation"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForms/simulation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "country": "BRA",
    "geoCoordinates": [
      -47.924747467041016,
      -15.832582473754883
    ],
    "items": [
      {
        "id": "1",
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "12345-000"
  }'
```

`POST /api/checkout/pub/orderForms/simulation`

This endpoint is used to simulate a cart in VTEX Checkout.

It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.

It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.

This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.

**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.

> Body parameter

```json
{
  "country": "BRA",
  "geoCoordinates": [
    -47.924747467041016,
    -15.832582473754883
  ],
  "items": [
    {
      "id": "1",
      "quantity": 1,
      "seller": "1"
    }
  ],
  "postalCode": "12345-000"
}
```

<h3 id="cart-simulation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|RnbBehavior|query|integer|false|This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.<br><br>Note that if this not sent, the parameter is `1`.|
|sc|query|integer|false|Trade Policy (Sales Channel) identification.|
|body|body|object|false|none|
|» country|body|string|false|Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.|
|» geoCoordinates|body|[number]|false|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» items|body|[object]|false|Array containing information about the SKUs inside the cart to be simulated.|
|» » id|body|string|false|The SKU ID.|
|» » quantity|body|integer(int32)|false|The quantity of items of this specific SKU in the cart to be simulated.|
|» » seller|body|string|false|The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.|
|» postalCode|body|string|false|Postal code.|

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

<h3 id="cart-simulation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="cart-simulation-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Remove all personal data

<a id="opIdRemoveallpersonaldata"></a>

> Code samples

```bash
curl https://example.com/checkout/changeToAnonymousUser/ede846222cd44046ba6c638442c3505a
```

`GET /checkout/changeToAnonymousUser/{orderFormId}`

This call removes all user information, making a cart anonymous while leaving the items.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.

This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).

<h3 id="remove-all-personal-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose user's personal data you want to remove.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="remove-all-personal-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="checkout-api-cart-attachments">Cart attachments</h1>

## Add client preferences

<a id="opIdAddClientPreferences"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/attachments/clientPreferencesData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "locale": "EN",
    "optinNewsLetter": false
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/clientPreferencesData`

Use this request to include client preferences information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

> Body parameter

```json
{
  "locale": "EN",
  "optinNewsLetter": false
}
```

<h3 id="add-client-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive client profile information.|
|body|body|object|true|none|
|» locale|body|string|false|Locale chosen by the shopper. Determines website language.|
|» optinNewsLetter|body|boolean|false|Indicates whether the shopper opted in to receive the store's news letter.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "PT",
    "optinNewsLetter": false
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "a7e4702410864239959f9bdcf77e3fba",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": [],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": null,
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="add-client-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Add client profile

<a id="opIdAddClientProfile"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/attachments/clientProfileData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
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
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/clientProfileData`

Use this request to include client profile information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

> Body parameter

```json
{
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
}
```

<h3 id="add-client-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive client profile information.|
|body|body|object|true|none|
|» corporateDocument|body|string|false|Corporate document, if the customer is a legal entity.|
|» corporateName|body|string|false|Company name, if the customer is a legal entity.|
|» corporatePhone|body|string|false|Corporate phone number, if the customer is a legal entity.|
|» document|body|string|true|Document number informed by the customer.|
|» documentType|body|string|true|Type of the document informed by the customer.|
|» email|body|string|true|Customer's email address.|
|» firstName|body|string|true|Customer's first name.|
|» isCorporate|body|boolean|false|`true` if the customer is a legal entity.|
|» lastName|body|string|true|Customer's last name.|
|» phone|body|string|false|Customer's phone number.|
|» stateInscription|body|string|false|State inscription, if the customer is a legal entity.|
|» tradeName|body|string|false|Trade name, if the customer is a legal entity.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "44444444444",
    "documentType": "cpf",
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5511123456789",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": false,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "9ceee0fde6db489fbc809a0e2ab13a86",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": [],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": null,
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="add-client-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add marketing data

<a id="opIdAddMarketingData"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/attachments/marketingData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "coupon": "free-shipping",
    "marketingTags": [
      "tag1",
      "tag2"
    ],
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "Facebook",
    "utmiCampaign": "utmi_campaign-exmaple",
    "utmiPage": "utmi_page-example",
    "utmiPart": "utmi_part-exmaple"
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/marketingData`

Use this request to include marketing information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

> Body parameter

```json
{
  "coupon": "free-shipping",
  "marketingTags": [
    "tag1",
    "tag2"
  ],
  "utmCampaign": "Black friday",
  "utmMedium": "CPC",
  "utmSource": "Facebook",
  "utmiCampaign": "utmi_campaign-exmaple",
  "utmiPage": "utmi_page-example",
  "utmiPart": "utmi_part-exmaple"
}
```

<h3 id="add-marketing-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive client profile information.|
|body|body|object|true|none|
|» coupon|body|string|false|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» marketingTags|body|[string]|false|Marketing tags.|
|» utmCampaign|body|string|false|UTM campaign|
|» utmMedium|body|string|false|UTM medium.|
|» utmSource|body|string|false|UTM source.|
|» utmiCampaign|body|string|false|utmi_campaign (internal utm)|
|» utmiPage|body|string|false|utmi_page (internal utm)|
|» utmiPart|body|string|false|utmi_part (internal utm)|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": {
    "coupon": "free-shipping",
    "marketingTags": [
      "tag1",
      "tag2"
    ],
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "app",
    "utmiCampaign": null,
    "utmiPart": null,
    "utmipage": null
  },
  "messages": [],
  "openTextField": null,
  "orderFormId": "7c5b47971fad41b89102c7ab7bb8b08b",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": [],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": null,
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="add-marketing-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add merchant context data

<a id="opIdAddMerchantContextData"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/29154e27383145cc8ce1f7a1df0d99c4/attachments/merchantContextData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "salesAssociateData": {
      "salesAssociateId": "seller123"
    }
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/merchantContextData`

This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

> Body parameter

```json
{
  "salesAssociateData": {
    "salesAssociateId": "seller123"
  }
}
```

<h3 id="add-merchant-context-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive the relevant information added by the merchant.|
|body|body|object|true|none|
|» salesAssociateData|body|object|true|Sales Associate information.|
|» » salesAssociateId|body|string|false|Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.|

> Example responses

> 200 Response

```json
{
  "salesAssociateData": {
    "salesAssociateId": "seller123"
  }
}
```

<h3 id="add-merchant-context-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="add-merchant-context-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|salesAssociateId|string|false|none|Sales Associate (Seller) identification code.|

<aside class="success">
This operation does not require authentication
</aside>

## Add payment data

<a id="opIdAddPaymentData"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/attachments/paymentData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payments": [
      {
        "group": "bankInvoicePaymentGroup",
        "hasDefaultBillingAddress": false,
        "installments": 1,
        "installmentsInterestRate": 0,
        "installmentsValue": 1,
        "paymentSystem": 1,
        "paymentSystemName": "Boleto Bancário",
        "referenceValue": 100,
        "value": 100
      }
    ]
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData`

Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

> Body parameter

```json
{
  "payments": [
    {
      "group": "bankInvoicePaymentGroup",
      "hasDefaultBillingAddress": false,
      "installments": 1,
      "installmentsInterestRate": 0,
      "installmentsValue": 1,
      "paymentSystem": 1,
      "paymentSystemName": "Boleto Bancário",
      "referenceValue": 100,
      "value": 100
    }
  ]
}
```

<h3 id="add-payment-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive client profile information.|
|body|body|object|true|none|
|» payments|body|[object]|false|Array with information on each payment chosen by the shopper.|
|» » group|body|string|false|Payment system group.|
|» » hasDefaultBillingAddress|body|boolean|false|Indicates whether billing address for this payment is the default address.|
|» » installments|body|integer|false|Selected number of installments.|
|» » installmentsInterestRate|body|number|false|Installments' interest rate.|
|» » installmentsValue|body|integer|false|Value of the installments.|
|» » paymentSystem|body|integer|false|Payment system ID.|
|» » paymentSystemName|body|string|false|Payment system name.|
|» » referenceValue|body|integer|false|Reference value used to calculate total order value with interest.|
|» » value|body|integer|false|Total value assigned to this payment.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/chopp-claro-30l/p",
        "ean": null,
        "id": "2",
        "imageUrl": "http://myshop.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
        "name": "Chopp Claro 30L",
        "productId": "2",
        "refId": "CBC30L",
        "seller": "1",
        "skuName": "Chopp Claro 30L"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Beershow",
        "dimension": null,
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/chopp-claro-30l/p",
      "ean": null,
      "id": "2",
      "imageUrl": "http://myshop.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
      "isGift": false,
      "listPrice": 49900,
      "manualPrice": null,
      "manualPriceAppliedBy": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Chopp Claro 30L",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 32890,
      "priceDefinition": {
        "calculatedSellingPrice": 32890,
        "sellingPrices": [
          {
            "quantity": 2,
            "value": 32890
          }
        ],
        "total": 65780
      },
      "priceTags": [],
      "priceValidUntil": "2022-07-28T22:25:25Z",
      "productCategories": {
        "1": "Bebidas"
      },
      "productCategoryIds": "/1/",
      "productId": "2",
      "productRefId": "",
      "quantity": 2,
      "refId": "CBC30L",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 32890,
      "skuName": "Chopp Claro 30L",
      "tax": 0,
      "uniqueId": "3CBFA140CE8F4E208062FC15CE9ED8D3",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "29154e27383145cc8ce1f7a1df0d99c4",
  "paymentData": {
    "availableAccounts": [],
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
                "id": "MYSHOP",
                "interestRate": 0,
                "total": 65780,
                "value": 65780
              }
            ],
            "total": 65780,
            "value": 65780
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 65780
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
                "id": "MYSHOP",
                "interestRate": 0,
                "total": 65780,
                "value": 65780
              }
            ],
            "total": 65780,
            "value": 65780
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "4",
        "value": 65780
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
                "id": "MYSHOP",
                "interestRate": 0,
                "total": 65780,
                "value": 65780
              }
            ],
            "total": 65780,
            "value": 65780
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "6",
        "value": 65780
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2021-08-04T22:19:04.9948627Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^4[0-9]{15}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
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
        "availablePayments": null,
        "description": null,
        "dueDate": "2021-08-04T22:19:04.9948627Z",
        "groupName": "creditCardPaymentGroup",
        "id": 4,
        "isCustom": false,
        "name": "Mastercard",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "4",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
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
        "availablePayments": null,
        "description": null,
        "dueDate": "2021-08-04T22:19:04.9948627Z",
        "groupName": "bankInvoicePaymentGroup",
        "id": 6,
        "isCustom": false,
        "name": "Boleto Bancário",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "6",
        "template": "bankInvoicePaymentGroup-template",
        "validator": {
          "cardCodeMask": null,
          "cardCodeRegex": null,
          "mask": null,
          "regex": null,
          "useBillingAddress": false,
          "useCardHolderName": false,
          "useCvv": false,
          "useExpirationDate": false,
          "weights": null
        }
      }
    ],
    "payments": [
      {
        "accountId": null,
        "bin": null,
        "installments": 1,
        "merchantSellerPayments": [
          {
            "id": "MYSHOP",
            "installmentValue": 65780,
            "installments": 1,
            "interestRate": 0,
            "referenceValue": 65780,
            "value": 65780
          }
        ],
        "paymentSystem": "6",
        "referenceValue": 65780,
        "tokenId": null,
        "value": 65780
      }
    ],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "My Seller"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
    "logisticsInfo": [
      {
        "addressId": null,
        "deliveryChannels": [
          {
            "id": "delivery"
          },
          {
            "id": "pickup-in-point"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": null,
        "selectedSla": null,
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 65780
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 65780
}
```

<h3 id="add-payment-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Add shipping address and select delivery option

<a id="opIdAddShippingAddress"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/attachments/shippingData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clearAddressIfPostalCodeNotFound": false,
    "logisticsInfo": [
      {
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "normal"
      }
    ],
    "selectedAddresses": [
      {
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "3rd floor",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "neighborhood": "Botafogo",
        "number": "300",
        "postalCode": "12345-000",
        "receiverName": "receiver-name",
        "reference": "Grey building",
        "state": "RJ",
        "street": "Praia de Botafogo"
      }
    ]
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/attachments/shippingData`

Use this request to include shipping information and/or selected delivery option to a given shopping cart.

To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

> Body parameter

```json
{
  "clearAddressIfPostalCodeNotFound": false,
  "logisticsInfo": [
    {
      "itemIndex": 0,
      "selectedDeliveryChannel": "delivery",
      "selectedSla": "normal"
    }
  ],
  "selectedAddresses": [
    {
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3rd floor",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "neighborhood": "Botafogo",
      "number": "300",
      "postalCode": "12345-000",
      "receiverName": "receiver-name",
      "reference": "Grey building",
      "state": "RJ",
      "street": "Praia de Botafogo"
    }
  ]
}
```

<h3 id="add-shipping-address-and-select-delivery-option-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|ID of the orderForm that will receive client profile information.|
|body|body|object|true|none|
|» clearAddressIfPostalCodeNotFound|body|boolean|false|This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information.|
|» logisticsInfo|body|[object]|false|Array with logistics information on each item of the `items` array in the `orderForm`.|
|» » itemIndex|body|integer|false|Index of item in items array|
|» » selectedDeliveryChannel|body|string|false|Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.|
|» » selectedSla|body|string|false|Selected SLA. For example, `"normal"` or `"express"`.|
|» selectedAddresses|body|[object]|false|List of objects with addresses information.|
|» » addressType|body|string|false|Type of address. For example, `Residential` or `Pickup`, among others.|
|» » city|body|string|false|City of the shipping address.|
|» » complement|body|string|false|Complement to the shipping address in case it applies.|
|» » country|body|string|false|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|body|[number]|false|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » neighborhood|body|string|false|Neighborhood of the shipping address.|
|» » number|body|string|false|Number of the building, house or apartment in the shipping address.|
|» » postalCode|body|string|false|Postal Code.|
|» » receiverName|body|string|false|Name of the person who is going to receive the order.|
|» » reference|body|string|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|body|string|false|State of the shipping address.|
|» » street|body|string|false|Street of the shipping address.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": null,
  "items": [],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "2f586e50342a4f87b7e0654c56299e88",
  "paymentData": {
    "availableAccounts": [],
    "availableTokens": [],
    "giftCardMessages": [],
    "giftCards": [],
    "installmentOptions": [],
    "paymentSystems": [],
    "payments": [],
    "updateStatus": "updated"
  },
  "ratesAndBenefitsData": null,
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [],
  "shippingData": {
    "address": {
      "addressId": "c3701fc4c61b4d1b91f67e81415db44d",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": null,
      "country": "BRA",
      "geoCoordinates": [],
      "isDisposable": true,
      "neighborhood": "My neighborhood",
      "number": "1091",
      "postalCode": "12345000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "ST",
      "street": "My street"
    },
    "availableAddresses": [
      {
        "addressId": "ae3173b32bf64663a81fc42b057be211",
        "addressType": "residential",
        "city": "Brasília",
        "complement": null,
        "country": "BRA",
        "geoCoordinates": [
          -47.92592239379883,
          -15.832707405090332
        ],
        "isDisposable": true,
        "neighborhood": "Asa Sul",
        "number": "101",
        "postalCode": "70386060",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "DF",
        "street": "Quadra SQS 116 Bloco F"
      },
      {
        "addressId": "449dcbe11c5844098fb4545a49cf6e07",
        "addressType": "residential",
        "city": "Brasília",
        "complement": null,
        "country": "BRA",
        "geoCoordinates": [],
        "isDisposable": true,
        "neighborhood": "Asa sul",
        "number": "101",
        "postalCode": "00076555",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "DF",
        "street": "My street"
      },
      {
        "addressId": "c3701fc4c61b4d1b91f67e81415db44d",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": null,
        "country": "BRA",
        "geoCoordinates": [],
        "isDisposable": true,
        "neighborhood": "My neighborhood",
        "number": "1091",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "ST",
        "street": "My street"
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "f239ad30f8c948a382543ab2c739b967",
        "deliveryChannels": [
          {
            "id": "pickup-in-point"
          },
          {
            "id": "delivery"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": null,
        "selectedSla": null,
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": [
          {
            "availableDeliveryWindows": [],
            "deliveryChannel": "pickup-in-point",
            "deliveryIds": [
              {
                "courierId": "1ee17c2",
                "courierName": "Retira em Loja",
                "dockId": "1",
                "kitItemDetails": [],
                "quantity": 2,
                "warehouseId": "1_1"
              }
            ],
            "deliveryWindow": null,
            "id": "Retirada (VTEXSP)",
            "listPrice": 250,
            "lockTTL": null,
            "name": "Retirada (VTEXSP)",
            "pickupDistance": 15.848081588745117,
            "pickupPointId": "1_VTEXSP",
            "pickupStoreInfo": {
              "additionalInfo": "",
              "address": {
                "addressId": "VTEXSP",
                "addressType": "pickup",
                "city": "São Paulo",
                "complement": "",
                "country": "BRA",
                "geoCoordinates": [
                  -47.924747467041016,
                  -15.832582473754883
                ],
                "isDisposable": true,
                "neighborhood": "Itaim Bibi",
                "number": "4440",
                "postalCode": "04538-132",
                "receiverName": null,
                "reference": null,
                "state": "SP",
                "street": "Avenida Brigadeiro Faria Lima"
              },
              "dockId": "1",
              "friendlyName": "VTEX SP",
              "isPickupStore": true
            },
            "polygonName": null,
            "price": 250,
            "shippingEstimate": "3bd",
            "shippingEstimateDate": null,
            "tax": 0,
            "transitTime": "3bd"
          }
        ]
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": [
      {
        "addressId": "c3701fc4c61b4d1b91f67e81415db44d",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": null,
        "country": "BRA",
        "geoCoordinates": [],
        "isDisposable": true,
        "neighborhood": "My neighborhood",
        "number": "1091",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "ST",
        "street": "My street"
      }
    ]
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [],
  "userProfileId": null,
  "userType": null,
  "value": 0
}
```

<h3 id="add-shipping-address-and-select-delivery-option-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get client profile by email

<a id="opIdGetClientProfileByEmail"></a>

> Code samples

```bash
curl 'https://example.com/api/checkout/pub/profiles?email=clark.kent%40examplemail.com' \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/profiles`

Retrieve a client's profile information by providing an email address.

If the response body fields are empty, the following situations may have occurred:

1. There is no client registered with the email address provided in your store, or;
2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

<h3 id="get-client-profile-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|email|query|string|true|Client's email address to be searched.|

> Example responses

> 200 Response

```json
{
  "availableAccounts": [],
  "availableAddresses": [
    {
      "addressId": "666c2e830bd9474ab6f6cc53fb6dd2d2",
      "addressType": "residential",
      "city": "Metropolis",
      "complement": null,
      "country": "USA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": false,
      "neighborhood": "My neighborhood",
      "number": "123",
      "postalCode": "12345-000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "NY",
      "street": "My street"
    }
  ],
  "isComplete": true,
  "profileProvider": "VTEX",
  "userProfile": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+556199999999",
    "profileCompleteOnLoading": null,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "userProfileId": "fb542e51-5488-4c34-8d17-ed8fcf597a94"
}
```

<h3 id="get-client-profile-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-client-profile-by-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableAccounts|[string]|false|none|Available accounts.|
|availableAddresses|[object]|false|none|Information on each available address.|
|» addressId|string|false|none|Address ID.|
|» addressType|string|false|none|Address type.|
|» city|string|false|none|City of the address.|
|» complement|string \| null|false|none|Complement to the address.|
|» country|string|false|none|Country of the address. ISO three-letter code.|
|» geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» neighborhood|string|false|none|Neighborhood of the address.|
|» number|string|false|none|Number of the address.|
|» receiverName|string|false|none|Name of the receiver.|
|» reference|string \| null|false|none|Reference that may help in the location of the address.|
|» state|string|false|none|State of the address.|
|» street|string|false|none|Street of the address.|
|isComplete|boolean|false|none|Indicates whether customer profile is complete.|
|profileProvider|string|false|none|Profile provider.|
|userProfile|object|false|none|Customer profile information.|
|» corporateDocument|string \| null|false|none|Document. Used for corporate clients.|
|» corporateName|string \| null|false|none|Name of the company. Used for corporate clients.|
|» corporatePhone|string \| null|false|none|Telephone number. Used for corporate clients.|
|» customerClass|string \| null|false|none|Customer class.|
|» document|string|false|none|Document.|
|» documentType|string|false|none|Document type.|
|» email|string|false|none|Email address.|
|» firstName|string|false|none|First name.|
|» isCorporate|boolean|false|none|Indicates whether client is corporate.|
|» lastName|string|false|none|Last name.|
|» phone|string|false|none|Telephone number.|
|» profileCompleteOnLoading|string \| null|false|none|Profile complete when loading.|
|» profileErrorOnLoading|string \| null|false|none|Profile error when loading.|
|» stateInscription|string \| null|false|none|State inscription. Used for corporate clients.|
|» tradeName|string \| null|false|none|Trade name. Used for corporate clients.|
|userProfileId|string|false|none|Unique ID associated with the customer profile.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="checkout-api-custom-data">Custom data</h1>

## Set multiple custom field values

<a id="opIdSetMultipleCustomFieldValues"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/customData/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`PUT /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}`

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.

To do that, you need to inform the ID of the app you created with the configuration API (`appId`).

In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> Body parameter

```json
{}
```

<h3 id="set-multiple-custom-field-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm that will receive the new custom field values.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|appId|path|string|true|ID of the app created with the configuration API.|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": {
    "customApps": [
      {
        "fields": {
          "testField1": "testValue1",
          "testField2": "testValue2"
        },
        "id": "abcd",
        "major": 1
      }
    ]
  },
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Royal Canin",
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/racao-royal-canin-feline-urinary/p",
      "ean": "123456789",
      "id": "1",
      "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
      "isGift": false,
      "listPrice": 30000,
      "manualPrice": 10000,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Ração Royal Canin Feline Urinary 500g",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 15000,
      "priceTags": [
        {
          "identifier": null,
          "isPercentual": false,
          "name": "DISCOUNT@MANUALPRICE",
          "rawValue": -50,
          "value": -5000
        }
      ],
      "priceValidUntil": "2021-02-27T14:59:00.8288784Z",
      "productCategories": {
        "1": "Alimentação",
        "10": "Ração Seca"
      },
      "productCategoryIds": "/1/10/",
      "productId": "1",
      "productRefId": "",
      "quantity": 1,
      "refId": "0001",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 10000,
      "skuName": "Ração Royal Canin Feline Urinary 500g",
      "tax": 0,
      "uniqueId": "E0F2B7AF5CD74D668F1E27537206912C",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 10000,
                "value": 10000
              }
            ],
            "total": 10000,
            "value": 10000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 10000,
                "value": 5000
              }
            ],
            "total": 10000,
            "value": 5000
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 10000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T16:42:31.7836281Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^4[0-9]{15}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
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
        "itemId": "1",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": null,
        "shipsTo": [
          "BRA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": -5000
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 10000
}
```

<h3 id="set-multiple-custom-field-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set single custom field value

<a id="opIdSetSingleCustomFieldValue"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/customData/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "value": "{{appFieldValue}}"
  }'
```

`PUT /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}`

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> Body parameter

```json
{
  "value": "{{appFieldValue}}"
}
```

<h3 id="set-single-custom-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|The ID of the orderForm whose custom field's value you want to change.|
|appId|path|string|true|ID of the app created through the Update orderForm Configuration endpoint.|
|appFieldName|path|string|true|Name of the app's field created through the Update orderForm Configuration endpoint.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SetsinglecustomfieldvalueRequest](#schemasetsinglecustomfieldvaluerequest)|true|none|
|» value|body|string|true|The value you want to set to the specified field.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": {
    "customApps": [
      {
        "fields": {
          "testField1": "Hello World",
          "testField2": "testValue2"
        },
        "id": "abcd",
        "major": 1
      }
    ]
  },
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Royal Canin",
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/racao-royal-canin-feline-urinary/p",
      "ean": "123456789",
      "id": "1",
      "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
      "isGift": false,
      "listPrice": 30000,
      "manualPrice": 10000,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Ração Royal Canin Feline Urinary 500g",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 15000,
      "priceTags": [
        {
          "identifier": null,
          "isPercentual": false,
          "name": "DISCOUNT@MANUALPRICE",
          "rawValue": -50,
          "value": -5000
        }
      ],
      "priceValidUntil": "2021-02-27T14:59:00.8288784Z",
      "productCategories": {
        "1": "Alimentação",
        "10": "Ração Seca"
      },
      "productCategoryIds": "/1/10/",
      "productId": "1",
      "productRefId": "",
      "quantity": 1,
      "refId": "0001",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 10000,
      "skuName": "Ração Royal Canin Feline Urinary 500g",
      "tax": 0,
      "uniqueId": "E0F2B7AF5CD74D668F1E27537206912C",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 10000,
                "value": 10000
              }
            ],
            "total": 10000,
            "value": 10000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 10000,
                "value": 5000
              }
            ],
            "total": 10000,
            "value": 5000
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 10000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T16:42:31.7836281Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^4[0-9]{15}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
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
        "itemId": "1",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": null,
        "shipsTo": [
          "BRA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": -5000
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 10000
}
```

<h3 id="set-single-custom-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove single custom field value

<a id="opIdRemovesinglecustomfieldvalue"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/string/customData/string/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}`

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.

<h3 id="remove-single-custom-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|orderFormId|path|string|true|The ID of the orderForm from which you want to remove the custom field value.|
|appId|path|string|true|ID of the app created through the Update orderForm Configuration endpoint.|
|appFieldName|path|string|true|Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "canEditData": true,
  "checkedInPickupPointId": null,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": null
  },
  "clientProfileData": null,
  "commercialConditionData": null,
  "customData": {
    "customApps": [
      {
        "fields": {
          "testField2": "testValue2"
        },
        "id": "abcd",
        "major": 1
      }
    ]
  },
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/racao-royal-canin-feline-urinary/p",
        "ean": "123456789",
        "id": "1",
        "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
        "name": "Ração Royal Canin Feline Urinary 500g",
        "productId": "1",
        "refId": "0001",
        "seller": "1",
        "skuName": "Ração Royal Canin Feline Urinary 500g"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Royal Canin",
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/racao-royal-canin-feline-urinary/p",
      "ean": "123456789",
      "id": "1",
      "imageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155450-55-55/Racao-Royal-Canin-Feline-Urinary-SO.jpg?v=637139444438700000",
      "isGift": false,
      "listPrice": 30000,
      "manualPrice": 10000,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Ração Royal Canin Feline Urinary 500g",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 15000,
      "priceTags": [
        {
          "identifier": null,
          "isPercentual": false,
          "name": "DISCOUNT@MANUALPRICE",
          "rawValue": -50,
          "value": -5000
        }
      ],
      "priceValidUntil": "2021-02-27T14:59:00.8288784Z",
      "productCategories": {
        "1": "Alimentação",
        "10": "Ração Seca"
      },
      "productCategoryIds": "/1/10/",
      "productId": "1",
      "productRefId": "",
      "quantity": 1,
      "refId": "0001",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 10000,
      "skuName": "Ração Royal Canin Feline Urinary 500g",
      "tax": 0,
      "uniqueId": "E0F2B7AF5CD74D668F1E27537206912C",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": null,
  "loggedIn": false,
  "marketingData": null,
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "availableAccounts": [],
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
                "total": 10000,
                "value": 10000
              }
            ],
            "total": 10000,
            "value": 10000
          },
          {
            "count": 2,
            "hasInterestRate": false,
            "interestRate": 0,
            "sellerMerchantInstallments": [
              {
                "count": 2,
                "hasInterestRate": false,
                "id": "LOJADOBRENO",
                "interestRate": 0,
                "total": 10000,
                "value": 5000
              }
            ],
            "total": 10000,
            "value": 5000
          }
        ],
        "paymentGroupName": null,
        "paymentName": null,
        "paymentSystem": "2",
        "value": 10000
      }
    ],
    "paymentSystems": [
      {
        "availablePayments": null,
        "description": null,
        "dueDate": "2020-03-05T16:42:31.7836281Z",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresAuthentication": false,
        "requiresDocument": false,
        "stringId": "2",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "^[0-9]{3}$",
          "mask": "9999 9999 9999 9999",
          "regex": "^4[0-9]{15}$",
          "useBillingAddress": true,
          "useCardHolderName": true,
          "useCvv": true,
          "useExpirationDate": true,
          "weights": [
            2,
            1,
            2,
            1,
            2
          ]
        }
      }
    ],
    "payments": []
  },
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": null,
    "availableAddresses": [],
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
        "itemId": "1",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": null,
        "shipsTo": [
          "BRA"
        ],
        "slas": []
      }
    ],
    "pickupPoints": [],
    "selectedAddresses": []
  },
  "storeId": null,
  "storePreferencesData": {
    "countryCode": "BRA",
    "currencyCode": "BRL",
    "currencyFormatInfo": {
      "currencyDecimalDigits": 2,
      "currencyDecimalSeparator": ",",
      "currencyGroupSeparator": ".",
      "currencyGroupSize": 3,
      "startsWithCurrencySymbol": true
    },
    "currencyLocale": 1046,
    "currencySymbol": "R$",
    "saveUserData": true,
    "timeZone": "E. South America Standard Time"
  },
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total dos Itens",
      "value": 15000
    },
    {
      "id": "Discounts",
      "name": "Total dos Descontos",
      "value": -5000
    }
  ],
  "userProfileId": null,
  "userType": null,
  "value": 10000
}
```

<h3 id="remove-single-custom-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="checkout-api-configuration">Configuration</h1>

## Clear orderForm messages

<a id="opIdClearorderFormMessages"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/messages/clear \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/messages/clear`

This request removes all messages from the `messages` field of the orderForm , leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

> Body parameter

```json
{}
```

<h3 id="clear-orderform-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the orderForm corresponding to the cart whose messages you want to remove.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": false,
  "availableAccounts": [],
  "availableAddresses": [
    {
      "addressId": "666c2e830bd9474ab6f6cc53fb6dd2d2",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    }
  ],
  "canEditData": true,
  "clientPreferencesData": {
    "locale": "pt-BR",
    "optinNewsLetter": false
  },
  "clientProfileData": {
    "corporateDocument": null,
    "corporateName": null,
    "corporatePhone": null,
    "customerClass": null,
    "document": "12345678900",
    "documentType": "cpf",
    "email": "clark.kent@example.com",
    "firstName": "Clark",
    "isCorporate": false,
    "lastName": "Kent",
    "phone": "+5521998765432",
    "profileCompleteOnLoading": false,
    "profileErrorOnLoading": null,
    "stateInscription": null,
    "tradeName": null
  },
  "commercialConditionData": null,
  "customData": null,
  "giftRegistryData": null,
  "hooksData": null,
  "ignoreProfileData": false,
  "invoiceData": null,
  "isCheckedIn": false,
  "itemMetadata": {
    "items": [
      {
        "assemblyOptions": [],
        "detailUrl": "/chopp-brahma-claro-30l/p",
        "ean": null,
        "id": "2",
        "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
        "name": "Chopp Brahma Claro 30L",
        "productId": "2",
        "refId": "CBC30L",
        "seller": "1",
        "skuName": "Chopp Brahma Claro 30L"
      }
    ]
  },
  "items": [
    {
      "additionalInfo": {
        "brandId": "2000000",
        "brandName": "Brahma",
        "dimension": null,
        "offeringInfo": null,
        "offeringType": null,
        "offeringTypeId": null
      },
      "assemblies": [],
      "attachmentOfferings": [],
      "attachments": [],
      "availability": "available",
      "bundleItems": [],
      "components": [],
      "detailUrl": "/chopp-brahma-claro-30l/p",
      "ean": null,
      "id": "2",
      "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
      "isGift": false,
      "listPrice": 49900,
      "manualPrice": null,
      "manualPriceAppliedBy": null,
      "manufacturerCode": null,
      "measurementUnit": "un",
      "modalType": null,
      "name": "Chopp Brahma Claro 30L",
      "offerings": [],
      "parentAssemblyBinding": null,
      "parentItemIndex": null,
      "preSaleDate": null,
      "price": 32890,
      "priceDefinition": {
        "calculatedSellingPrice": 32890,
        "sellingPrices": [
          {
            "quantity": 1,
            "value": 32890
          }
        ],
        "total": 32890
      },
      "priceTags": [],
      "priceValidUntil": "2022-07-13T18:30:46Z",
      "productCategories": {
        "1": "Bebidas"
      },
      "productCategoryIds": "/1/",
      "productId": "2",
      "productRefId": "",
      "quantity": 1,
      "refId": "CBC30L",
      "rewardValue": 0,
      "seller": "1",
      "sellerChain": [
        "1"
      ],
      "sellingPrice": 32890,
      "skuName": "Chopp Brahma Claro 30L",
      "tax": 0,
      "uniqueId": "9D6E447B3FF64CEDA33B17C01379C119",
      "unitMultiplier": 1
    }
  ],
  "itemsOrdination": {
    "ascending": true,
    "criteria": "NAME"
  },
  "loggedIn": false,
  "marketingData": {
    "coupon": "free-shipping",
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "app",
    "utmiCampaign": null,
    "utmiPart": null,
    "utmipage": null
  },
  "messages": [],
  "openTextField": null,
  "orderFormId": "ede846222cd44046ba6c638442c3505a",
  "paymentData": {
    "giftCards": [],
    "transactions": [
      {
        "isActive": true,
        "merchantName": "MYSTORE",
        "payments": [],
        "sharedTransaction": false,
        "transactionId": "296D6D245C17437E823EB77E403FC88D"
      }
    ]
  },
  "profileProvider": "VTEX",
  "ratesAndBenefitsData": {
    "rateAndBenefitsIdentifiers": [],
    "teaser": []
  },
  "salesChannel": "1",
  "selectableGifts": [],
  "sellers": [
    {
      "id": "1",
      "logo": "",
      "name": "lojadobreno"
    }
  ],
  "shippingData": {
    "address": {
      "addressId": "teste",
      "addressType": "residential",
      "city": "Brasília",
      "complement": "15º andar",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
      ],
      "isDisposable": true,
      "neighborhood": "Copacabana",
      "number": "123",
      "postalCode": "70386000",
      "receiverName": "Clark Kent",
      "reference": null,
      "state": "DF",
      "street": "Rua da minha casa"
    },
    "availableAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ],
    "logisticsInfo": [
      {
        "addressId": "teste",
        "deliveryChannels": [
          {
            "id": "delivery"
          },
          {
            "id": "pickup-in-point"
          }
        ],
        "itemId": "2",
        "itemIndex": 0,
        "selectedDeliveryChannel": "delivery",
        "selectedSla": "Normal",
        "shipsTo": [
          "BRA",
          "COL",
          "USA"
        ],
        "slas": [
          {
            "availableDeliveryWindows": [],
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
            "deliveryWindow": null,
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
    "pickupPoints": [],
    "selectedAddresses": [
      {
        "addressId": "teste",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "15º andar",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
        ],
        "isDisposable": true,
        "neighborhood": "Copacabana",
        "number": "123",
        "postalCode": "12345000",
        "receiverName": "Clark Kent",
        "reference": null,
        "state": "RJ",
        "street": "Rua da minha casa"
      }
    ]
  },
  "storeId": null,
  "storePreferencesData": {},
  "subscriptionData": null,
  "totalizers": [
    {
      "id": "Items",
      "name": "Total Items",
      "value": 32890
    }
  ],
  "userProfileId": "fb542e51-5488-4c34-8d17-ed8fcf597a94",
  "userType": null,
  "value": 34390
}
```

<h3 id="clear-orderform-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="clear-orderform-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowManualPrice|boolean|false|none|Permission to modify item price manually.|
|availableAccounts|[string]|false|none|Available accounts.|
|availableAddresses|[object]|false|none|Information on each available address.|
|» addressId|string|false|none|Address ID.|
|» addressType|string|false|none|Address type.|
|» city|string|false|none|City of the address.|
|» complement|string \| null|false|none|Complement to the address.|
|» country|string|false|none|Country of the address. ISO three-letter code.|
|» geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» neighborhood|string|false|none|Neighborhood of the address.|
|» number|string|false|none|Number of the address.|
|» receiverName|string|false|none|Name of the receiver.|
|» reference|string \| null|false|none|Reference that may help in the location of the address.|
|» state|string|false|none|State of the address.|
|» street|string|false|none|Street of the address.|
|canEditData|boolean|false|none|Data can be edited.|
|clientPreferencesData|object|false|none|Object containing preferences from the client who placed the order.|
|» locale|string|false|none|Client's locale. Examples: `pt-BR` and `en-US`.|
|» optinNewsLetter|boolean|false|none|`true` if the client opted to receive newsletter from the store.|
|clientProfileData|object|false|none|Customer's profile information.|
|» corporateDocument|string \| null|false|none|Corporate document, if the customer is a legal entity.|
|» corporateName|string \| null|false|none|Company name, if the customer is a legal entity.|
|» corporatePhone|string \| null|false|none|Corporate phone number, if the customer is a legal entity.|
|» customerClass|string \| null|false|none|Customer class.|
|» document|string|false|none|Document informed by the customer.|
|» documentType|string|false|none|Type of the document informed by the customer.|
|» email|string|false|none|Email address.|
|» firstName|string|false|none|First name.|
|» isCorporate|boolean|false|none|Indicates whether the customer is a legal entity.|
|» lastName|string|false|none|Last name.|
|» phone|string|false|none|Phone number.|
|» profileCompleteOnLoading|boolean|false|none|Indicates whether profile is complete on loading.|
|» profileErrorOnLoading|boolean \| null|false|none|Indicates whether profile presents error on loading.|
|» stateInscription|string \| null|false|none|State inscription, if the customer is a legal entity.|
|» tradeName|string \| null|false|none|Trade name, if the customer is a legal entity.|
|commercialConditionData|object \| null|false|none|Object containing commercial condition information.|
|customData|object \| null|false|none|Customer additional information.|
|giftRegistryData|object \| null|false|none|Gift registry list information.|
|hooksData|object \| null|false|none|Hooks information.|
|ignoreProfileData|boolean|false|none|Ignore customer profile data.|
|invoiceData|object \| null|false|none|Object containing information pertinent to the order's invoice.|
|isCheckedIn|boolean|false|none|Indicates whether order is checked in.|
|itemMetadata|object|false|none|Item metadata.|
|» items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » detailUrl|string|false|none|Detail URL.|
|» » ean|string \| null|false|none|European Article Number.|
|» » id|string|false|none|Item ID.|
|» » imageUrl|string|false|none|Image URL.|
|» » name|string|false|none|Product name.|
|» » productId|string|false|none|Product ID.|
|» » refId|string|false|none|Ref ID.|
|» » seller|string|false|none|Seller.|
|» » skuName|string|false|none|SKU name.|
|items|[object]|false|none|Information on each item in the order.|
|» additionalInfo|object|false|none|Additional information.|
|» » brandId|string|false|none|Brand ID.|
|» » brandName|string|false|none|Brand name.|
|» » dimension|string \| null|false|none|Dimension.|
|» » offeringInfo|string \| null|false|none|Offering information.|
|» » offeringType|string \| null|false|none|Offering type.|
|» » offeringTypeId|string \| null|false|none|Offering type ID.|
|» attachments|[string]|false|none|Array containing information on attachments.|
|» availability|string|false|none|Availability.|
|» bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » id|integer|false|none|Service identifier.|
|» » name|string|false|none|Service name.|
|» » price|integer|false|none|Service price in cents.|
|» » type|string|false|none|Service type.|
|» detailUrl|string|false|none|Detail URL.|
|» ean|string \| null|false|none|European Article Number.|
|» id|string|false|none|ID of the item.|
|» imageUrl|string|false|none|Image URL.|
|» isGift|boolean|false|none|Indicates whether item is a gift.|
|» listPrice|integer|false|none|List price in cents.|
|» manualPrice|integer \| null|false|none|Manual price in cents.|
|» manualPriceAppliedBy|string \| null|false|none|User that applied the manual price, if that is the case.|
|» manufacturerCode|string \| null|false|none|Manufacturer code.|
|» measurementUnit|string|false|none|Measurement unit.|
|» modalType|string \| null|false|none|Modal type.|
|» name|string|false|none|Product name.|
|» parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» parentItemIndex|integer \| null|false|none|Parent item index.|
|» preSaleDate|string \| null|false|none|Presale date.|
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
|» » rawValue|integer|false|none|Price tag raw value.|
|» » value|integer|false|none|Price tag value.|
|» priceValidUntil|string|false|none|Price expiration date and time.|
|» productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds`.|
|» » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» productCategoryIds|string|false|none|Product category IDs.|
|» productId|string|false|none|Product ID.|
|» productRefId|string|false|none|Product Ref ID.|
|» quantity|integer|false|none|Quantity.|
|» refId|string|false|none|Ref ID.|
|» rewardValue|integer|false|none|Reward value in cents.|
|» seller|string|false|none|Seller.|
|» sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» skuName|string|false|none|SKU name.|
|» tax|integer|false|none|Tax value in cents.|
|» uniqueId|string|false|none|Unique ID.|
|» unitMultiplier|integer|false|none|Unit multiplier.|
|itemsOrdination|object|false|none|Object containing information about the ordering of items within the orderForm.|
|» ascending|boolean|false|none|Indicates whether the ordering is ascending.|
|» criteria|string|false|none|Criteria adopted to order the items in the list.|
|loggedIn|boolean|false|none|Indicates whether the user is logged into the store.|
|marketingData|object|false|none|Object containing promotion data such as coupon tracking information and internal or external UTMs.|
|» coupon|string|false|none|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» utmCampaign|string|false|none|UTM campaign|
|» utmMedium|string|false|none|UTM medium.|
|» utmSource|string|false|none|UTM source.|
|» utmiCampaign|string \| null|false|none|utmi_campaign (internal utm).|
|» utmiPage|string \| null|false|none|utmi_page (internal utm)|
|» utmiPart|string \| null|false|none|utmi_part (internal utm).|
|messages|[object]|false|none|Array containing an object for each message generated by our servers while processing the request.|
|openTextField|string \| null|false|none|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).|
|orderFormId|string|false|none|ID of the orderForm corresponding to a specific cart.|
|paymentData|object|false|none|Information on the order's payment.|
|» giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» » balance|integer|false|none|Gift card balance in cents.|
|» » id|string|false|none|Gift card ID.|
|» » inUse|boolean|false|none|Indicates whether gift card is in use.|
|» » isSpecialCard|boolean|false|none|Indicates whether gift card is special.|
|» » name|string|false|none|Gift card name.|
|» » redemptionCode|string|false|none|Gift card redemption code.|
|» » value|integer|false|none|Gift card value in cents.|
|» transactions|[object]|false|none|Information on each transaction pertinent to the order.|
|» » isActive|boolean|false|none|Indicates whether transaction is active.|
|» » merchantName|string|false|none|Merchant name.|
|» » payments|[object]|false|none|Information on each payment.|
|» » » accountId|string|false|none|Account ID.|
|» » » bin|string|false|none|Bin.|
|» » » installments|integer|false|none|Number of installments.|
|» » » paymentSystem|string|false|none|Payment system.|
|» » » referenceValue|integer|false|none|Reference value for calculating interest rates, in case it applies. Displayed in cents.|
|» » » value|integer|false|none|Value including interest, in case it applies. Displayed in cents.|
|» » sharedTransaction|boolean|false|none|Indicates whather transaction is shared.|
|» » transactionId|string|false|none|Transaction ID.|
|profileProvider|string|false|none|Profile provider.|
|ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» rateAndBenefitsIdentifiers|[string]|false|none|List with rates and benefits identifiers.|
|» teaser|[string]|false|none|List with rates and benefits teasers.|
|salesChannel|string|false|none|Attribute created by the seller, in their VTEX store configuration.|
|selectableGifts|[object]|false|none|Array containing the data of the item selected as a gift.|
|sellers|[object]|false|none|Information on each seller.|
|» id|string|false|none|Seller ID.|
|» logo|string \| null|false|none|Seller logo.|
|» name|string|false|none|Seller name.|
|shippingData|object|false|none|Shipping information pertinent to the order.|
|» address|object|false|none|Address information.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» availableAddresses|[object]|false|none|Array with information on the available addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|» logisticsInfo|[object]|false|none|Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.|
|» » addressId|string|false|none|Address ID.|
|» » deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » » id|string|false|none|Delivery channel ID.|
|» » itemId|string|false|none|Item ID.|
|» » itemIndex|integer|false|none|Index corresponding to the position of the object in the `items` array.|
|» » selectedDeliveryChannel|string|false|none|Delivery channel selected by the customer.|
|» » selectedSla|string|false|none|SLA selected by the customer.|
|» » shipsTo|[string]|false|none|List of countries that the item may be shipped to.|
|» » slas|[object]|false|none|Information on available SLAs.|
|» » » deliveryChannel|string|false|none|Delivery channel.|
|» » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » courierId|string|false|none|Courier ID.|
|» » » » courierName|string|false|none|Courier name.|
|» » » » dockId|string|false|none|Warehouse ID.|
|» » » » quantity|integer|false|none|Quantity.|
|» » » » warehouseId|string|false|none|Warehouse ID.|
|» » » id|string|false|none|SLA ID.|
|» » » listPrice|integer|false|none|List price in cents.|
|» » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » name|string|false|none|SLA name.|
|» » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » address|object \| null|false|none|Address information.|
|» » » » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » » » city|string|false|none|City of the shipping address.|
|» » » » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » » » postalCode|string|false|none|Postal code.|
|» » » » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » » » state|string|false|none|State of the shipping address.|
|» » » » » street|string|false|none|Street of the shipping address.|
|» » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » polygonName|string \| null|false|none|Polygon name.|
|» » » price|integer|false|none|Price in cents.|
|» » » shippingEstimate|string|false|none|Shipping estimate. For instance, Three business days will be represented `3bd`.|
|» » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » tax|integer|false|none|Tax in cents.|
|» » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented `3bd`.|
|» selectedAddresses|[object]|false|none|Array with information on the selected addresses for the order.|
|» » addressId|string|false|none|Address ID.|
|» » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » city|string|false|none|City of the shipping address.|
|» » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » postalCode|string|false|none|Postal code.|
|» » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » state|string|false|none|State of the shipping address.|
|» » street|string|false|none|Street of the shipping address.|
|storeId|string \| null|false|none|ID of the store.|
|storePreferencesData|object|false|none|Object containing data from the store's configuration (stored in VTEX's License Manager).|
|subscriptionData|object \| null|false|none|Subscription information.|
|totalizers|[object]|false|none|Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value).|
|userProfileId|string|false|none|Unique ID associated with the customer profile.|
|userType|string \| null|false|none|User type.|
|value|integer|false|none|Total value of the order without separating cents. For example, $24.99 is represented `2499`.|

<aside class="success">
This operation does not require authentication
</aside>

## Get orderForm configuration

<a id="opIdGetorderFormconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pvt/configuration/orderForm \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/checkout/pvt/configuration/orderForm`

Retrieves the settings that are currently applied to every orderForm in the account.

These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).

Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.

<h3 id="get-orderform-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "allowManualPrice": true,
  "allowMultipleDeliveries": false,
  "apps": [
    {
      "fields": [
        "name",
        "age"
      ],
      "id": "abcd",
      "major": 1
    }
  ],
  "decimalDigitsPrecision": 2,
  "maskFirstPurchaseData": null,
  "maxNumberOfWhiteLabelSellers": null,
  "minimumQuantityAccumulatedForItems": 1,
  "minimumValueAccumulated": null,
  "paymentConfiguration": {
    "allowInstallmentsMerge": null,
    "blockPaymentSession": null,
    "requiresAuthenticationForPreAuthorizedPaymentOption": false
  },
  "recaptchaValidation": "vtexCriteria",
  "taxConfiguration": null
}
```

<h3 id="get-orderform-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update orderForm configuration

<a id="opIdUpdateorderFormconfiguration"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pvt/configuration/orderForm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "allowManualPrice": null,
    "allowMultipleDeliveries": null,
    "apps": null,
    "decimalDigitsPrecision": 2,
    "minimumQuantityAccumulatedForItems": 1,
    "minimumValueAccumulated": null,
    "paymentConfiguration": {
      "requiresAuthenticationForPreAuthorizedPaymentOption": false
    },
    "taxConfiguration": null
  }'
```

`POST /api/checkout/pvt/configuration/orderForm`

Determines settings that will apply to every orderForm in the account.

For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.

**Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).

> Body parameter

```json
{
  "allowManualPrice": null,
  "allowMultipleDeliveries": null,
  "apps": null,
  "decimalDigitsPrecision": 2,
  "minimumQuantityAccumulatedForItems": 1,
  "minimumValueAccumulated": null,
  "paymentConfiguration": {
    "requiresAuthenticationForPreAuthorizedPaymentOption": false
  },
  "taxConfiguration": null
}
```

<h3 id="update-orderform-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[UpdateorderFormconfigurationRequest](#schemaupdateorderformconfigurationrequest)|true|none|
|» allowManualPrice|body|boolean \| null|true|Allows the editing of SKU prices right in the cart.|
|» allowMultipleDeliveries|body|boolean \| null|true|On the same purchase, allows the selection of items from multiple delivery channels.|
|» apps|body|[object]|true|Array of objects containing Apps configuration information.|
|» » fields|body|[string]|false|Array of fields available to the app.|
|» » id|body|string|false|App ID.|
|» » major|body|integer|false|App major version.|
|» decimalDigitsPrecision|body|integer(int32)|true|Number of price digits.|
|» maskFirstPurchaseData|body|boolean|false|Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data.|
|» maxNumberOfWhiteLabelSellers|body|integer|false|Allows the input of a limit of white label sellers involved on the cart.|
|» minimumQuantityAccumulatedForItems|body|integer(int32)|true|Minimum SKU quantity by cart.|
|» minimumValueAccumulated|body|integer \| null|true|Minimum cart value.|
|» paymentConfiguration|body|[PaymentConfiguration](#schemapaymentconfiguration)|true|Payment Configuration object|
|» paymentSystemToCheckFirstInstallment|body|string|false|If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).|
|» recaptchaValidation|body|string|false|Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)<br><br>Possible values are:<br>- `"never"`: no purchases are validated with reCAPTCHA.<br>- `"always"`: every purchase is validated with reCAPTCHA.<br>- `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.|
|» taxConfiguration|body|object \| null|true|External tax service configuration.|
|» » appId|body|string|false|Custom data ID sent to the tax system.|
|» » authorizationHeader|body|string \| null|false|Authorization header.|
|» » url|body|string \| null|false|Endpoint URL.|

<h3 id="update-orderform-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

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

```text
2
```

<h3 id="get-window-to-change-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

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
|body|body|[WaitingTime](#schemawaitingtime)|true|none|
|» waitingTime|body|integer|true|Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.|

<h3 id="update-window-to-change-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="checkout-api-fulfillment">Fulfillment</h1>

## List pickup points by location

<a id="opIdListPickupPpointsByLocation"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/pickup-points \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/pickup-points`

Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.

The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.

<h3 id="list-pickup-points-by-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|geoCoordinates|query|[number]|false|Geocoordinates (first longitude, then latitude) around which to search for pickup points. If you use this type of search, do not pass postal and country codes.|
|postalCode|query|string|false|Postal code around which to search for pickup points. If you use this type of search, make sure to pass a `countryCode` and do not pass `geoCoordinates`.|
|countryCode|query|string|false|Three letter country code refering to the `postalCode` field. Pass the country code only if you are searching pickup points by postal code.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "distance": 0.8469786518616546,
      "pickupPoint": {
        "additionalInfo": null,
        "address": {
          "addressId": "physical-store-02",
          "addressType": "pickup",
          "city": "Rio de Janeiro",
          "complement": "",
          "country": "BRA",
          "geoCoordinates": [
            -47.924747467041016,
            -15.832582473754883
          ],
          "isDisposable": true,
          "neighborhood": "Botafogo",
          "number": "132",
          "postalCode": "23450-070",
          "receiverName": null,
          "reference": null,
          "state": "RJ",
          "street": "Praia de Botafogo"
        },
        "businessHours": [
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 0,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 1,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 2,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 3,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:50:00",
            "DayOfWeek": 4,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 5,
            "OpeningTime": "00:00:00"
          },
          {
            "ClosingTime": "23:59:00",
            "DayOfWeek": 6,
            "OpeningTime": "00:00:00"
          }
        ],
        "friendlyName": "physical-store-02",
        "id": "02_Physical"
      }
    }
  ],
  "paging": {
    "page": 1,
    "pageSize": 30,
    "pages": 1,
    "total": 1
  }
}
```

<h3 id="list-pickup-points-by-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get address by postal code

<a id="opIdGetAddressByPostalCode"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/postal-code/BRA/1234000 \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/postal-code/{countryCode}/{postalCode}`

Retrieves address information for a given postal code and country.

This request can be used to implement auto complete functionality when a customer needs to fill in an address.

<h3 id="get-address-by-postal-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|countryCode|path|string|true|Three letter country code refering to the `postalCode` field.|
|postalCode|path|string|true|Postal code.|

> Example responses

> 200 Response

```json
{
  "city": "Rio de Janeiro",
  "complement": "",
  "country": "BRA",
  "geoCoordinates": [],
  "neighborhood": "My neighborhood",
  "number": "",
  "postalCode": "12345000",
  "reference": "",
  "state": "RJ",
  "street": "My street"
}
```

<h3 id="get-address-by-postal-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="checkout-api-order-placement">Order placement</h1>

## Process order

<a id="opIdProcessOrder"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/gatewayCallback/123456789 \
  -X POST \
  -H 'Accept: application/json' \
  -H 'Cookie: Vtex_CHKO_Auth=0e/RpYIEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc=; CheckoutDataAccess=0e/PoiTEZu19BuwXB4tZ7eIGu9HT8vdUAHWQDHDpxMc='
```

`POST /api/checkout/pub/gatewayCallback/{orderGroup}`

Order processing callback request, which is made after an order's payment is approved.

> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.

<h3 id="process-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderGroup|path|string|true|Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|Cookie|header|string|true|VTEX Chekout cookie associated with a specific order. Use the `Vtex_CHKO_Auth` and the `CheckoutDataAccess` cookies returned by the [Place order](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorder) or [Place order from existing cart](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorderfromexistingorderform) API requests, like a browser would.|

> Example responses

> 200 Response

```json
{}
```

> 500 Response

```json
{
  "error": {
    "code": "001",
    "exception": null,
    "message": "Seu pagamento não foi autorizado. Falha ao enviar os dados de pagamento. Favor entrar em contato com o SAC ou utilizar outra forma de pagamento. *** "
  },
  "operationId": "a231ed11-255b-4ea0-96c3-1790e1b27f7e"
}
```

<h3 id="process-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="process-order-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|Information on the error.|
|» code|string|false|none|Error code.|
|» exception|string \| null|false|none|Error exception.|
|» message|string|false|none|Error message.|
|operationId|string|false|none|Operation ID.|

<aside class="success">
This operation does not require authentication
</aside>

## Place order from an existing cart

<a id="opIdPlaceOrderFromExistingOrderForm"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orderForm/ede846222cd44046ba6c638442c3505a/transaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "interestValue": 0,
    "optinNewsLetter": false,
    "referenceId": "41a22925298a4ddca95318131a25b000",
    "referenceValue": 6800,
    "savePersonalData": false,
    "value": 6800
  }'
```

`POST /api/checkout/pub/orderForm/{orderFormId}/transaction`

This endpoint places an order from an existing `orderForm` object, meaning an existing cart.

After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.

> Body parameter

```json
{
  "interestValue": 0,
  "optinNewsLetter": false,
  "referenceId": "41a22925298a4ddca95318131a25b000",
  "referenceValue": 6800,
  "savePersonalData": false,
  "value": 6800
}
```

<h3 id="place-order-from-an-existing-cart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderFormId|path|string|true|ID of the `orderForm` corresponding to the cart from which to place the order.|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|false|none|
|» interestValue|body|integer|true|Interest rate to be used in case it applies.|
|» optinNewsLetter|body|boolean|false|True if the shopper opted to receive the newsletter.|
|» referenceId|body|string|true|ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.|
|» referenceValue|body|integer|true|Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.|
|» savePersonalData|body|boolean|false|`true` if the shopper's data provided during checkout should be saved for future reference.|
|» value|body|integer|true|Total value of the order without separating cents. For example, $24.99 is represented `2499`.|

> Example responses

> 200 Response

```json
{
  "orderForm": null,
  "orders": [
    {
      "changeData": null,
      "clientPreferencesData": {
        "attachmentId": "clientPreferencesData",
        "locale": "pt-BR",
        "optinNewsLetter": true
      },
      "clientProfileData": {
        "attachmentId": "clientProfileData",
        "corporateDocument": null,
        "corporateName": null,
        "corporatePhone": null,
        "document": "71279846675",
        "documentType": "cpf",
        "email": "marcelo@vtex.com.br",
        "firstName": "Marcelo",
        "isCorporate": false,
        "lastName": "Couto",
        "phone": "1234567890",
        "profileCompleteOnLoading": null,
        "profileErrorOnLoading": null,
        "stateInscription": null,
        "tradeName": null
      },
      "creationDate": "2017-02-16T23:42:43.9605088Z",
      "followUpEmail": "f1e7309d88dd4633825ce183d52a50a6@ct.vtex.com.br",
      "giftRegistryData": null,
      "hostName": "ambienteqa",
      "isCheckedIn": false,
      "isCompleted": false,
      "items": [
        {
          "additionalInfo": {
            "brandId": "1",
            "brandName": "Marca Um",
            "offeringInfo": null,
            "offeringType": null,
            "offeringTypeId": null
          },
          "attachmentOfferings": [],
          "attachments": [],
          "availability": "available",
          "bundleItems": [],
          "components": [],
          "defaultPicker": null,
          "detailUrl": "/produto-selecao-sku-lista/p",
          "ean": null,
          "handlerSequence": 0,
          "handling": false,
          "id": "2000016",
          "imageUrl": "http://store.vteximg.com.br/arquivos/ids/168463-55-55/imagem-modo-lista.png",
          "isGift": false,
          "itemAttachment": {
            "content": {},
            "name": null
          },
          "listPrice": 15000,
          "manualPrice": null,
          "measurementUnit": "un",
          "modalType": null,
          "name": "Produto Seleção SKU - Lista 35 - Preto",
          "offerings": [],
          "preSaleDate": null,
          "price": 15000,
          "priceTags": [],
          "priceValidUntil": "2018-02-16T23:42:44.5467295Z",
          "productCategories": {
            "12": "Departamento 5",
            "28": "Categoria 5-3"
          },
          "productCategoryIds": "/12/28/",
          "productId": "2000002",
          "quantity": 1,
          "refId": "35-Preto",
          "rewardValue": 1,
          "seller": "1",
          "sellingPrice": 15000,
          "skuName": "35 - Preto",
          "tax": 0,
          "uniqueId": "0F93E9C4926A4CD97FDD4C2599BDF9DB",
          "unitMultiplier": 1
        }
      ],
      "lastChange": "2017-02-16T23:42:47.62285Z",
      "marketingData": null,
      "merchantName": null,
      "openTextField": {
        "attachmentId": "openTextField",
        "value": null
      },
      "orderGroup": "v976778amgh",
      "orderId": "v976778amgh-01",
      "paymentData": {
        "attachmentId": "paymentData",
        "giftCards": [],
        "merchantName": "STORE",
        "payments": [],
        "transactionId": "62FEDE228E2144649CF67812C4E5DD87",
        "transactions": [
          {
            "isActive": true,
            "merchantName": "STORE",
            "payments": [],
            "transactionId": "62FEDE228E2144649CF67812C4E5DD87"
          }
        ]
      },
      "ratesAndBenefitsData": {
        "attachmentId": "ratesAndBenefitsData",
        "rateAndBenefitsIdentifiers": [],
        "teaser": []
      },
      "roundingError": 0,
      "salesChannel": "1",
      "sellerOrderId": "00-v976778amgh-01",
      "sellers": [
        {
          "id": "1",
          "logo": "",
          "name": "Store"
        }
      ],
      "shippingData": {
        "address": {
          "addressId": "49ad09e5fba8434a8ff1e0faa4b60ceb",
          "addressType": "residential",
          "city": "Rio de Janeiro",
          "complement": "15º andar",
          "country": "BRA",
          "geoCoordinates": [],
          "neighborhood": "Copacabana",
          "number": "123",
          "postalCode": "28050987",
          "receiverName": "Marcelo",
          "reference": null,
          "state": "RJ",
          "street": "Rua da minha casa"
        },
        "attachmentId": "shippingData",
        "availableAddresses": [
          {
            "addressId": "49ad09e5fba8434a8ff1e0faa4b60ceb",
            "addressType": "residential",
            "city": "Rio de Janeiro",
            "complement": "15º andar",
            "country": "BRA",
            "geoCoordinates": [],
            "neighborhood": "Copacabana",
            "number": "123",
            "postalCode": "28050642",
            "receiverName": "Marcelo",
            "reference": null,
            "state": "RJ",
            "street": "Rua da minha casa"
          }
        ],
        "logisticsInfo": [
          {
            "itemId": "2000016",
            "itemIndex": 0,
            "selectedSla": "Normal",
            "shipsTo": [
              "BRA"
            ],
            "slas": [
              {
                "availableDeliveryWindows": [
                  {
                    "endDateUtc": "2017-03-27T00:00:00+00:00",
                    "lisPrice": 0,
                    "price": 0,
                    "startDateUtc": "2017-03-27T00:00:00+00:00",
                    "tax": 0
                  },
                  {
                    "endDateUtc": "2017-03-28T00:00:00+00:00",
                    "lisPrice": 0,
                    "price": 0,
                    "startDateUtc": "2017-03-28T00:00:00+00:00",
                    "tax": 0
                  }
                ],
                "deliveryIds": [
                  {
                    "courierId": "1de4790",
                    "courierName": "N2_2",
                    "dockId": "N2",
                    "quantity": 1,
                    "warehouseId": "1_1"
                  }
                ],
                "deliveryWindow": null,
                "id": "n2_2",
                "listPrice": 650,
                "lockTTL": "7d",
                "name": "n2_2",
                "pickupStoreInfo": {
                  "additionalInfo": null,
                  "address": null,
                  "dockId": null,
                  "friendlyName": null,
                  "isPickupStore": false
                },
                "price": 650,
                "shippingEstimate": "6bd",
                "shippingEstimateDate": null,
                "tax": 0
              },
              {
                "availableDeliveryWindows": [],
                "deliveryIds": [
                  {
                    "courierId": "2p1t",
                    "courierName": "Post_Test_2",
                    "dockId": "N2",
                    "quantity": 1,
                    "warehouseId": "1_1"
                  }
                ],
                "deliveryWindow": null,
                "id": "Normal",
                "listPrice": 650,
                "lockTTL": "7d",
                "name": "Normal",
                "pickupStoreInfo": {
                  "additionalInfo": null,
                  "address": null,
                  "dockId": null,
                  "friendlyName": null,
                  "isPickupStore": false
                },
                "price": 650,
                "shippingEstimate": "6bd",
                "shippingEstimateDate": null,
                "tax": 0
              },
              {
                "availableDeliveryWindows": [],
                "deliveryIds": [
                  {
                    "courierId": "1p1t",
                    "courierName": "Post_Teste",
                    "dockId": "N2",
                    "quantity": 1,
                    "warehouseId": "1_1"
                  }
                ],
                "deliveryWindow": null,
                "id": "P_T",
                "listPrice": 1462,
                "lockTTL": "7d",
                "name": "P_T",
                "pickupStoreInfo": {
                  "additionalInfo": null,
                  "address": null,
                  "dockId": null,
                  "friendlyName": null,
                  "isPickupStore": false
                },
                "price": 1462,
                "shippingEstimate": "6bd",
                "shippingEstimateDate": null,
                "tax": 0
              },
              {
                "availableDeliveryWindows": [],
                "deliveryIds": [
                  {
                    "courierId": "2B9C2C7D-7A76-485D-94EF-701D041E448C",
                    "courierName": "Leve 30kg (De: 10000-000 Até: 25999-999) ",
                    "dockId": "1_1_1",
                    "quantity": 1,
                    "warehouseId": "1_1"
                  }
                ],
                "deliveryWindow": null,
                "id": "Econômica",
                "listPrice": 2265,
                "lockTTL": "7d",
                "name": "Econômica",
                "pickupStoreInfo": {
                  "additionalInfo": null,
                  "address": null,
                  "dockId": null,
                  "friendlyName": null,
                  "isPickupStore": false
                },
                "price": 2265,
                "shippingEstimate": "20bd",
                "shippingEstimateDate": null,
                "tax": 0
              }
            ]
          }
        ]
      },
      "state": "order-created",
      "storeId": null,
      "storePreferencesData": {
        "checkToSavePersonDataByDefault": false,
        "countryCode": "BRA",
        "currencyCode": "BRL",
        "currencyFormatInfo": {
          "currencyDecimalDigits": 2,
          "currencyDecimalSeparator": ",",
          "currencyGroupSeparator": ".",
          "currencyGroupSize": 3,
          "startsWithCurrencySymbol": true
        },
        "currencyLocale": 1046,
        "currencySymbol": "R$",
        "templateOptions": {
          "toggleCorporate": false
        },
        "timeZone": "E. South America Standard Time"
      },
      "timeZoneCreationDate": "2017-02-16T21:42:43.9605088",
      "timeZoneLastChange": "2017-02-16T21:42:47.62285",
      "totals": [
        {
          "id": "Items",
          "name": "Total dos Itens",
          "value": 15000
        },
        {
          "id": "Discounts",
          "name": "Total dos Descontos",
          "value": 0
        },
        {
          "id": "Shipping",
          "name": "Total do Frete",
          "value": 650
        },
        {
          "id": "Tax",
          "name": "Total da Taxa",
          "value": 0
        }
      ],
      "userType": "",
      "value": 15650
    }
  ],
  "transactionData": {
    "gatewayCallbackTemplatePath": "/checkout/gatewayCallback/v976778amgh/{messageCode}",
    "merchantTransactions": [
      {
        "id": "STORE",
        "merchantName": "STORE",
        "payments": [
          {
            "accountId": null,
            "bin": null,
            "giftCardId": null,
            "giftCardProvider": null,
            "giftCardRedemptionCode": null,
            "paymentSystem": "6",
            "referenceValue": 15650,
            "value": 15650
          }
        ],
        "transactionId": "62FEDE228E2144649CF67812C4E5ER79"
      }
    ],
    "receiverUri": "https://store.vtexpayments.com.br/split/v976778amgh/payments"
  }
}
```

<h3 id="place-order-from-an-existing-cart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Place order

<a id="opIdPlaceOrder"></a>

> Code samples

```bash
curl https://example.com/api/checkout/pub/orders \
  -X PUT \
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
    "items": [
      {
        "id": "123456789",
        "quantity": 1,
        "seller": "1"
      }
    ],
    "marketingData": {
      "coupon": "free-shipping",
      "utmCampaign": "Black friday",
      "utmMedium": "CPC",
      "utmSource": "Facebook",
      "utmiCampaign": "utmi_campaign-exmaple",
      "utmiPage": "utmi_page-example",
      "utmiPart": "utmi_part-exmaple"
    },
    "openTextField": "open-text-example",
    "paymentData": {
      "giftCardMessages": [
        "message-example"
      ],
      "giftCards": [
        {
          "balance": 500,
          "id": "1390324156495k195pmab4rall3di",
          "inUse": true,
          "isSpecialCard": false,
          "name": "name-example",
          "redemptionCode": "HYUO-TEZZ-QFFT-HTFR",
          "value": 500
        }
      ],
      "paymentSystems": [
        {
          "description": "description-example",
          "groupName": "creditCardPaymentGroup",
          "id": 2,
          "isCustom": false,
          "name": "Visa",
          "requiresDocument": false,
          "selected": false,
          "stringId": "12345abc",
          "template": "creditCardPaymentGroup-template",
          "validator": {
            "cardCodeMask": "999",
            "cardCodeRegex": "[^0-9]",
            "mask": "9999 9999 9999 9999",
            "regex": "^4",
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
        }
      ],
      "payments": [
        {
          "accountId": "accountID-example",
          "bin": "2",
          "installments": 2,
          "paymentSystem": "12",
          "referenceValue": 16175,
          "value": 16175
        }
      ],
      "updateStatus": "updated"
    },
    "salesAssociateData": {
      "salesAssociateId": "seller123"
    },
    "shippingData": {
      "address": {
        "addressId": "Home",
        "addressType": "residential",
        "city": "Rio de Janeiro",
        "complement": "3rd floor",
        "country": "BRA",
        "geoCoordinates": [
          -47.924747467041016,
          -15.832582473754883
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

`PUT /api/checkout/pub/orders`

Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.

>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).

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
  "items": [
    {
      "id": "123456789",
      "quantity": 1,
      "seller": "1"
    }
  ],
  "marketingData": {
    "coupon": "free-shipping",
    "utmCampaign": "Black friday",
    "utmMedium": "CPC",
    "utmSource": "Facebook",
    "utmiCampaign": "utmi_campaign-exmaple",
    "utmiPage": "utmi_page-example",
    "utmiPart": "utmi_part-exmaple"
  },
  "openTextField": "open-text-example",
  "paymentData": {
    "giftCardMessages": [
      "message-example"
    ],
    "giftCards": [
      {
        "balance": 500,
        "id": "1390324156495k195pmab4rall3di",
        "inUse": true,
        "isSpecialCard": false,
        "name": "name-example",
        "redemptionCode": "HYUO-TEZZ-QFFT-HTFR",
        "value": 500
      }
    ],
    "paymentSystems": [
      {
        "description": "description-example",
        "groupName": "creditCardPaymentGroup",
        "id": 2,
        "isCustom": false,
        "name": "Visa",
        "requiresDocument": false,
        "selected": false,
        "stringId": "12345abc",
        "template": "creditCardPaymentGroup-template",
        "validator": {
          "cardCodeMask": "999",
          "cardCodeRegex": "[^0-9]",
          "mask": "9999 9999 9999 9999",
          "regex": "^4",
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
      }
    ],
    "payments": [
      {
        "accountId": "accountID-example",
        "bin": "2",
        "installments": 2,
        "paymentSystem": "12",
        "referenceValue": 16175,
        "value": 16175
      }
    ],
    "updateStatus": "updated"
  },
  "salesAssociateData": {
    "salesAssociateId": "seller123"
  },
  "shippingData": {
    "address": {
      "addressId": "Home",
      "addressType": "residential",
      "city": "Rio de Janeiro",
      "complement": "3rd floor",
      "country": "BRA",
      "geoCoordinates": [
        -47.924747467041016,
        -15.832582473754883
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

<h3 id="place-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|sc|query|integer|false|Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel.|
|body|body|object|false|none|
|» clientProfileData|body|object|true|Customer's profile information. The `email` functions as a customer's ID.<br><br>For customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.<br><br>> If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.|
|» » corporateDocument|body|string|false|Corporate document, if the customer is a legal entity.|
|» » corporateName|body|string|false|Company name, if the customer is a legal entity.|
|» » corporatePhone|body|string|false|Corporate phone number, if the customer is a legal entity.|
|» » document|body|string|false|Document number informed by the customer.|
|» » documentType|body|string|false|Type of the document informed by the customer.|
|» » email|body|string|true|Customer's email address.|
|» » firstName|body|string|false|Customer's first name.|
|» » isCorporate|body|boolean|false|`true` if the customer is a legal entity.|
|» » lastName|body|string|false|Customer's last name.|
|» » phone|body|string|false|Customer's phone number.|
|» » stateInscription|body|string|false|State inscription, if the customer is a legal entity.|
|» » tradeName|body|string|false|Trade name, if the customer is a legal entity.|
|» items|body|[object]|true|Array of objects containing information on each of the order's items.|
|» » attachments|body|[string]|false|Array containing information on attachments.|
|» » bundleItems|body|[object]|false|Information on services sold along with the SKU. Example: a gift package.|
|» » » id|body|string|false|Service identifier.|
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
|» » » rawValue|body|integer|false|Price tag raw value.|
|» » » value|body|integer|false|Price tag value.|
|» » quantity|body|integer(int32)|true|The quantity of items of this specific SKU in the cart to be simulated.|
|» » seller|body|string|true|The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.|
|» » unitMultiplier|body|integer|false|SKU unit multiplier.|
|» marketingData|body|object|false|none|
|» » coupon|body|string|false|Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.|
|» » utmCampaign|body|string|false|UTM campaign|
|» » utmMedium|body|string|false|UTM medium.|
|» » utmSource|body|string|false|UTM source.|
|» » utmiCampaign|body|string|false|utmi_campaign (internal utm)|
|» » utmiPage|body|string|false|utmi_page (internal utm)|
|» » utmiPart|body|string|false|utmi_part (internal utm)|
|» openTextField|body|string|false|Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)|
|» paymentData|body|object|true|Payment infomation.|
|» » giftCardMessages|body|[object]|false|Array of gift card messages.|
|» » giftCards|body|[object]|false|Gift card information, if it applies to the order.|
|» » » balance|body|integer|false|Gift card balance.|
|» » » id|body|string|false|Gift card ID.|
|» » » inUse|body|boolean|false|Indicates whether gift card is in use.|
|» » » isSpecialCard|body|boolean|false|Indicates whether gift card is special.|
|» » » name|body|string|false|Gift card name.|
|» » » redemptionCode|body|string|true|Gift card redemption code.|
|» » » value|body|integer|true|Gift card value.|
|» » paymentSystems|body|[object]|false|Information on payment systems.|
|» » » description|body|string|false|Description.|
|» » » groupName|body|string|false|Payment group name.|
|» » » id|body|integer|false|Payment system ID.|
|» » » isCustom|body|boolean|false|Indicates whether it is custom.|
|» » » name|body|string|false|Payment system name.|
|» » » requiresDocument|body|boolean|false|Indicates whether a document is required.|
|» » » selected|body|boolean|false|Indicates whether this payment system has been selected.|
|» » » stringId|body|string|false|String ID.|
|» » » template|body|string|false|Template.|
|» » » validator|body|object|false|Payment system validator.|
|» » » » cardCodeMask|body|string|false|Card code mask.|
|» » » » cardCodeRegex|body|string|false|Card code regular expression.|
|» » » » mask|body|string|false|Validator mask.|
|» » » » regex|body|string|false|none|
|» » » » weights|body|[integer]|false|Weights.|
|» » payments|body|[object]|true|Payment information.|
|» » » accountId|body|string|false|Account ID.|
|» » » bin|body|string|false|Payment bin.|
|» » » installments|body|integer|true|Number of installments.|
|» » » paymentSystem|body|string|true|Payment system.|
|» » » referenceValue|body|integer|true|Reference value for calculating interest rates, in case it applies.|
|» » » value|body|integer|true|Value including interest, in case it applies.|
|» » updateStatus|body|string|false|Indicates whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`|
|» salesAssociateData|body|object|false|Sales Associate information.|
|» » salesAssociateId|body|string|false|Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.|
|» shippingData|body|object|true|Shipping information.|
|» » address|body|object|false|Shipping address.<br><br>For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.|
|» » » addressId|body|string|false|Address ID.|
|» » » addressType|body|string|false|Type of address. For example, `Residential` or `Pickup`, among others.|
|» » » city|body|string|false|City of the shipping address.|
|» » » complement|body|string|false|Complement to the shipping address in case it applies.|
|» » » country|body|string|false|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|body|[number]|false|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » neighborhood|body|string|false|Neighborhood of the shipping address.|
|» » » number|body|string|false|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|body|string|false|Postal Code.|
|» » » receiverName|body|string|false|Name of the person who is going to receive the order.|
|» » » reference|body|string|false|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|body|string|false|State of the shipping address.|
|» » » street|body|string|false|Street of the shipping address.|
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
{
  "orderForm": null,
  "orders": [
    {
      "allowCancellation": false,
      "allowChangeSeller": false,
      "allowEdition": false,
      "changeData": null,
      "checkedInPickupPointId": null,
      "clientPreferencesData": null,
      "clientProfileData": {
        "corporateDocument": null,
        "corporateName": null,
        "corporatePhone": null,
        "customerClass": null,
        "document": "12345678900",
        "documentType": "cpf",
        "email": "clark.kent@example.com",
        "firstName": "Clark",
        "isCorporate": false,
        "lastName": "Kent",
        "phone": "+5521998765432",
        "profileCompleteOnLoading": false,
        "profileErrorOnLoading": null,
        "stateInscription": null,
        "tradeName": null
      },
      "commercialConditionData": null,
      "creationDate": "2021-07-13T18:33:25.3029443Z",
      "customData": null,
      "followUpEmail": "6c10d76b5170456d89823b38b7c8f6ac@ct.vtex.com.br",
      "giftRegistryData": null,
      "hooksData": null,
      "hostName": "mystore",
      "invoiceData": null,
      "isCheckedIn": false,
      "isCompleted": false,
      "isUserDataVisible": true,
      "itemMetadata": {
        "items": [
          {
            "assemblyOptions": [],
            "detailUrl": "/chopp-brahma-claro-30l/p",
            "ean": null,
            "id": "2",
            "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
            "name": "Chopp Brahma Claro 30L",
            "productId": "2",
            "refId": "CBC30L",
            "seller": "1",
            "skuName": "Chopp Brahma Claro 30L"
          }
        ]
      },
      "items": [
        {
          "additionalInfo": {
            "brandId": "2000000",
            "brandName": "Brahma",
            "dimension": null,
            "offeringInfo": null,
            "offeringType": null,
            "offeringTypeId": null
          },
          "assemblies": [],
          "attachmentOfferings": [],
          "attachments": [],
          "availability": "available",
          "bundleItems": [],
          "components": [],
          "detailUrl": "/chopp-brahma-claro-30l/p",
          "ean": null,
          "id": "2",
          "imageUrl": "http://mystore.vteximg.com.br/arquivos/ids/155400-55-55/30l_v2.png?v=637303412106100000",
          "isGift": false,
          "listPrice": 49900,
          "manualPrice": null,
          "manualPriceAppliedBy": null,
          "manufacturerCode": null,
          "measurementUnit": "un",
          "modalType": null,
          "name": "Chopp Brahma Claro 30L",
          "offerings": [],
          "parentAssemblyBinding": null,
          "parentItemIndex": null,
          "preSaleDate": null,
          "price": 32890,
          "priceDefinition": {
            "calculatedSellingPrice": 32890,
            "sellingPrices": [
              {
                "quantity": 1,
                "value": 32890
              }
            ],
            "total": 32890
          },
          "priceTags": [],
          "priceValidUntil": "2022-07-13T18:30:46Z",
          "productCategories": {
            "1": "Bebidas"
          },
          "productCategoryIds": "/1/",
          "productId": "2",
          "productRefId": "",
          "quantity": 1,
          "refId": "CBC30L",
          "rewardValue": 0,
          "seller": "1",
          "sellerChain": [
            "1"
          ],
          "sellingPrice": 32890,
          "skuName": "Chopp Brahma Claro 30L",
          "tax": 0,
          "uniqueId": "9D6E447B3FF64CEDA33B17C01379C119",
          "unitMultiplier": 1
        }
      ],
      "lastChange": "2021-07-13T18:33:27.736557Z",
      "marketingData": null,
      "merchantName": null,
      "openTextField": {
        "value": null
      },
      "orderFormCreationDate": "2021-07-13T18:33:25.1313373Z",
      "orderGroup": "1146512005522",
      "orderId": "1146512005522-01",
      "paymentData": {
        "giftCards": [],
        "transactions": [
          {
            "isActive": true,
            "merchantName": "MYSTORE",
            "payments": [],
            "sharedTransaction": false,
            "transactionId": "296D6D245C17437E823EB77E403FC88D"
          }
        ]
      },
      "ratesAndBenefitsData": {
        "rateAndBenefitsIdentifiers": [],
        "teaser": []
      },
      "roundingError": 0,
      "salesChannel": "1",
      "sellerOrderId": "00-1146512005522-01",
      "sellers": [
        {
          "id": "1",
          "logo": "",
          "name": "Tracking QA"
        }
      ],
      "shippingData": {
        "address": {
          "addressId": "teste",
          "addressType": "residential",
          "city": "Brasília",
          "complement": "15º andar",
          "country": "BRA",
          "geoCoordinates": [
            -47.924747467041016,
            -15.832582473754883
          ],
          "isDisposable": true,
          "neighborhood": "Copacabana",
          "number": "123",
          "postalCode": "70386000",
          "receiverName": "Clark Kent",
          "reference": null,
          "state": "DF",
          "street": "Rua da minha casa"
        },
        "availableAddresses": [
          {
            "addressId": "teste",
            "addressType": "residential",
            "city": "Rio de Janeiro",
            "complement": "15º andar",
            "country": "BRA",
            "geoCoordinates": [
              -47.924747467041016,
              -15.832582473754883
            ],
            "isDisposable": true,
            "neighborhood": "Copacabana",
            "number": "123",
            "postalCode": "12345000",
            "receiverName": "Clark Kent",
            "reference": null,
            "state": "RJ",
            "street": "Rua da minha casa"
          }
        ],
        "logisticsInfo": [
          {
            "addressId": "teste",
            "deliveryChannels": [
              {
                "id": "delivery"
              },
              {
                "id": "pickup-in-point"
              }
            ],
            "itemId": "2",
            "itemIndex": 0,
            "selectedDeliveryChannel": "delivery",
            "selectedSla": "Normal",
            "shipsTo": [
              "BRA",
              "COL",
              "USA"
            ],
            "slas": [
              {
                "availableDeliveryWindows": [],
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
                "deliveryWindow": null,
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
        "pickupPoints": [],
        "selectedAddresses": [
          {
            "addressId": "teste",
            "addressType": "residential",
            "city": "Rio de Janeiro",
            "complement": "15º andar",
            "country": "BRA",
            "geoCoordinates": [
              -47.924747467041016,
              -15.832582473754883
            ],
            "isDisposable": true,
            "neighborhood": "Copacabana",
            "number": "123",
            "postalCode": "12345000",
            "receiverName": "Clark Kent",
            "reference": null,
            "state": "RJ",
            "street": "Rua da minha casa"
          }
        ]
      },
      "state": null,
      "storeId": null,
      "storePreferencesData": {
        "countryCode": "BRA",
        "currencyCode": "BRL",
        "currencyFormatInfo": {
          "currencyDecimalDigits": 2,
          "currencyDecimalSeparator": ",",
          "currencyGroupSeparator": ".",
          "currencyGroupSize": 3,
          "startsWithCurrencySymbol": true
        },
        "currencyLocale": 1046,
        "currencySymbol": "R$",
        "saveUserData": false,
        "timeZone": "E. South America Standard Time"
      },
      "subscriptionData": null,
      "taxData": null,
      "timeZoneCreationDate": "2021-07-13T15:33:25.3029443",
      "timeZoneLastChange": "2021-07-13T15:33:27.736557",
      "totals": [
        {
          "id": "Items",
          "name": "Total dos Itens",
          "value": 32890
        },
        {
          "id": "Discounts",
          "name": "Total dos Descontos",
          "value": 0
        },
        {
          "id": "Shipping",
          "name": "Total do Frete",
          "value": 1500
        },
        {
          "id": "Tax",
          "name": "Total da Taxa",
          "value": 0
        }
      ],
      "userType": "",
      "value": 34390
    }
  ],
  "salesAssociateData": {
    "salesAssociateId": "seller123"
  },
  "transactionData": {
    "gatewayCallbackTemplatePath": "/checkout/gatewayCallback/1146512005522/{messageCode}",
    "merchantTransactions": [
      {
        "id": "MYSTORE",
        "merchantName": "MYSTORE",
        "payments": [
          {
            "accountId": null,
            "bin": null,
            "giftCardId": null,
            "giftCardProvider": null,
            "giftCardRedemptionCode": null,
            "paymentSystem": "6",
            "referenceValue": 34390,
            "tokenId": null,
            "value": 34390
          }
        ],
        "transactionId": "296D6D245C17437E823EB77E403FC88D"
      }
    ],
    "receiverUri": "https://mystore.vtexpayments.com.br/split/1146512005522/payments"
  }
}
```

<h3 id="place-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="place-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderForm|string \| null|false|none|This is `null` since this request does not depend on any previously existing orderForm information in the platform.|
|orders|[object]|false|none|Information on each of the orders created.|
|» allowCancelation|boolean|false|none|Indicates whether cancelation is allowed.|
|» allowChangeSeller|boolean|false|none|Indicates whether seller changing is allowed.|
|» allowEdition|boolean|false|none|Indicates whether edition is allowed.|
|» checkedInPickupPointId|string \| null|false|none|Checked in pickuppoint.|
|» clientProfileData|object|false|none|Customer's profile information.|
|» » corporateDocument|string \| null|false|none|Corporate document, if the customer is a legal entity.|
|» » corporateName|string \| null|false|none|Company name, if the customer is a legal entity.|
|» » corporatePhone|string \| null|false|none|Corporate phone number, if the customer is a legal entity.|
|» » customerClass|string \| null|false|none|Customer class.|
|» » document|string|false|none|Document informed by the customer.|
|» » documentType|string|false|none|Type of the document informed by the customer.|
|» » email|string|false|none|Email address.|
|» » firstName|string|false|none|First name.|
|» » isCorporate|boolean|false|none|Indicates whether the customer is a legal entity.|
|» » lastName|string|false|none|Last name.|
|» » phone|string|false|none|Phone number.|
|» » profileCompleteOnLoading|boolean|false|none|Indicates whether profile is complete on loading.|
|» » profileErrorOnLoading|boolean \| null|false|none|Indicates whether profile presents error on loading.|
|» » stateInscription|string \| null|false|none|State inscription, if the customer is a legal entity.|
|» » tradeName|string \| null|false|none|Trade name, if the customer is a legal entity.|
|» creationDate|string|false|none|Creation date.|
|» followUpEmail|string|false|none|Follow up email address.|
|» hostName|string|false|none|Host name.|
|» isCheckedIn|boolean|false|none|Indicates whether order is checked in.|
|» isCompleted|boolean|false|none|Indicates whether order is completed.|
|» isUserDataVisible|boolean|false|none|Indicates whether user data is visible.|
|» itemMetadata|object|false|none|Item metadata.|
|» » items|[object]|false|none|List of objects containing metadata on each item in the order.|
|» » » detailUrl|string|false|none|Detail URL.|
|» » » ean|string \| null|false|none|European Article Number.|
|» » » id|string|false|none|Item ID.|
|» » » imageUrl|string|false|none|Image URL.|
|» » » name|string|false|none|Product name.|
|» » » productId|string|false|none|Product ID.|
|» » » refId|string|false|none|Ref ID.|
|» » » seller|string|false|none|Seller.|
|» » » skuName|string|false|none|SKU name.|
|» items|[object]|false|none|Information on each item in the order.|
|» » additionalInfo|object|false|none|Additional information.|
|» » » brandId|string|false|none|Brand ID.|
|» » » brandName|string|false|none|Brand name.|
|» » » dimension|string \| null|false|none|Dimension.|
|» » » offeringInfo|string \| null|false|none|Offering information.|
|» » » offeringType|string \| null|false|none|Offering type.|
|» » » offeringTypeId|string \| null|false|none|Offering type ID.|
|» » attachments|[string]|false|none|Array containing information on attachments.|
|» » availability|string|false|none|Availability|
|» » bundleItems|[object]|false|none|Information on services sold along with the SKU. Example: a gift package.|
|» » » id|integer|false|none|Service identifier.|
|» » » name|string|false|none|Service name.|
|» » » price|integer|false|none|Service price in cents.|
|» » » type|string|false|none|Service type.|
|» » detailUrl|string|false|none|Detail URL.|
|» » ean|string \| null|false|none|European Article Number.|
|» » id|string|false|none|ID of the item.|
|» » imageUrl|string|false|none|Image URL.|
|» » isGift|boolean|false|none|Indicates whether item is a gift.|
|» » listPrice|integer|false|none|List price in cents.|
|» » manualPrice|integer \| null|false|none|Manual price in cents.|
|» » manualPriceAppliedBy|string \| null|false|none|User that applied the manual price, if that is the case.|
|» » manufacturerCode|string \| null|false|none|Manufacturer code.|
|» » measurementUnit|string|false|none|Measurement unit|
|» » modalType|string \| null|false|none|Modal type.|
|» » name|string|false|none|Product name.|
|» » parentAssemblyBinding|string \| null|false|none|Parent assembly binding.|
|» » parentItemIndex|integer \| null|false|none|Parent item index.|
|» » preSaleDate|string \| null|false|none|Presale date.|
|» » price|integer|false|none|Price in cents.|
|» » priceDefinition|object|false|none|Price information for all units of a specific item.|
|» » » calculatedSellingPrice|integer|false|none|Item's calculated unitary selling price in cents.|
|» » » sellingPrices|[object]|false|none|Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total.|
|» » » » quantity|integer|false|none|Rounding quantity, meaning how many items are rounded to this value.|
|» » » » value|integer|false|none|Value in cents for that specific rounding.|
|» » » total|integer|false|none|Total value for all units of the item in cents.|
|» » priceTags|[object]|false|none|Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order.|
|» » » identifier|string|false|none|Price tag identifier.|
|» » » isPercentual|boolean|false|none|Indicates whether price tag value is applied through a percentage.|
|» » » name|string|false|none|Price tag name.|
|» » » rawValue|integer|false|none|Price tag raw value.|
|» » » value|integer|false|none|Price tag value.|
|» » priceValidUntil|string|false|none|Price expiration date and time.|
|» » productCategories|object|false|none|Object, where each field is an ID from `productCategoryIds`.|
|» » » {ID}|string|false|none|Product category corresponding to the ID in the field key.|
|» » productCategoryIds|string|false|none|Product category IDs.|
|» » productId|string|false|none|Product ID.|
|» » productRefId|string|false|none|Product Ref ID.|
|» » quantity|integer|false|none|Quantity.|
|» » refId|string|false|none|Ref ID.|
|» » rewardValue|integer|false|none|Reward value in cents.|
|» » seller|string|false|none|Seller.|
|» » sellerChain|[string]|false|none|Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order.|
|» » sellingPrice|integer|false|none|Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.|
|» » skuName|string|false|none|SKU name.|
|» » tax|integer|false|none|Tax value in cents.|
|» » uniqueId|string|false|none|Unique ID.|
|» » unitMultiplier|integer|false|none|Unit multiplier|
|» lastChange|string|false|none|Last change.|
|» merchantName|string \| null|false|none|Merchant name.|
|» orderFormCreationDate|string|false|none|`orderForm` creation date.|
|» orderGroup|string|false|none|Order group. Orders that involve different sellers are split into different orders of a same order group.|
|» orderId|string|false|none|ID of the order in the Order Management System (OMS).|
|» paymentData|object|false|none|Information on the order's payment.|
|» » giftCards|[object]|false|none|Gift card information, if it applies to the order.|
|» » » balance|integer|false|none|Gift card balance in cents.|
|» » » id|string|false|none|Gift card ID.|
|» » » inUse|boolean|false|none|Indicates whether gift card is in use.|
|» » » isSpecialCard|boolean|false|none|Indicates whether gift card is special.|
|» » » name|string|false|none|Gift card name.|
|» » » redemptionCode|string|false|none|Gift card redemption code.|
|» » » value|integer|false|none|Gift card value in cents.|
|» » transactions|[object]|false|none|Information on each transaction pertinent to the order.|
|» » » isActive|boolean|false|none|Indicates whether transaction is active.|
|» » » merchantName|string|false|none|Merchant name.|
|» » » payments|[object]|false|none|Information on each payment.|
|» » » » accountId|string|false|none|Account ID.|
|» » » » bin|string|false|none|Bin.|
|» » » » installments|integer|false|none|Number of installments.|
|» » » » paymentSystem|string|false|none|Payment system.|
|» » » » referenceValue|integer|false|none|Reference value for calculating interest rates, in case it applies. Displayed in cents.|
|» » » » value|integer|false|none|Value including interest, in case it applies. Displayed in cents.|
|» » » sharedTransaction|boolean|false|none|Indicates whather transaction is shared.|
|» » » transactionId|string|false|none|Transaction ID.|
|» ratesAndBenefitsData|object|false|none|Information on rates and benefits that apply to the order.|
|» » rateAndBenefitsIdentifiers|[string]|false|none|List with rates and benefits identifiers.|
|» » teaser|[string]|false|none|List with rates and benefits teasers.|
|» roundingError|integer|false|none|Rounding error.|
|» salesAssociateId|string|false|none|Sales Associate (Seller) identification code.|
|» salesChannel|string|false|none|Sales channel.|
|» sellerOrderId|string \| null|false|none|ID of the order in the seller.|
|» sellers|[object]|false|none|Information on each seller.|
|» » id|string|false|none|Seller ID.|
|» » logo|string \| null|false|none|Seller logo.|
|» » name|string|false|none|Seller name.|
|» shippingData|object|false|none|Shipping information pertinent to the order.|
|» » address|object|false|none|Address information.|
|» » » addressId|string|false|none|Address ID.|
|» » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » city|string|false|none|City of the shipping address.|
|» » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|string|false|none|Postal code.|
|» » » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|string|false|none|State of the shipping address.|
|» » » street|string|false|none|Street of the shipping address.|
|» » availableAddresses|[object]|false|none|Array with information on the available addresses for the order.|
|» » » addressId|string|false|none|Address ID.|
|» » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » city|string|false|none|City of the shipping address.|
|» » » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|string|false|none|Postal code.|
|» » » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|string|false|none|State of the shipping address.|
|» » » street|string|false|none|Street of the shipping address.|
|» » logisticsInfo|[object]|false|none|Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`.|
|» » » addressId|string|false|none|Address ID.|
|» » » deliveryChannels|[object]|false|none|List of available delivery channels.|
|» » » » id|string|false|none|Delivery channel ID.|
|» » » itemId|string|false|none|Item ID.|
|» » » itemIndex|integer|false|none|Index corresponding to the position of the object in the `items` array.|
|» » » selectedDeliveryChannel|string|false|none|Delivery channel selected by the customer.|
|» » » selectedSla|string|false|none|SLA selected by the customer.|
|» » » shipsTo|[string]|false|none|List of countries that the item may be shipped to.|
|» » » slas|[object]|false|none|Information on available SLAs.|
|» » » » deliveryChannel|string|false|none|Delivery channel.|
|» » » » deliveryIds|[object]|false|none|Information on each delivery ID.|
|» » » » » courierId|string|false|none|Courier ID.|
|» » » » » courierName|string|false|none|Courier name.|
|» » » » » dockId|string|false|none|Warehouse ID.|
|» » » » » quantity|integer|false|none|Quantity.|
|» » » » » warehouseId|string|false|none|Warehouse ID.|
|» » » » id|string|false|none|SLA ID.|
|» » » » listPrice|integer|false|none|List price in cents.|
|» » » » lockTTL|string|false|none|Estimate date of delivery.|
|» » » » name|string|false|none|SLA name.|
|» » » » pickupDistance|integer|false|none|Pickup point distance.|
|» » » » pickupPointId|string \| null|false|none|Pickup point ID.|
|» » » » pickupStoreInfo|object|false|none|Information on the pickup store.|
|» » » » » additionalInfo|string \| null|false|none|Additional information.|
|» » » » » address|object \| null|false|none|Address information.|
|» » » » » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » » » » city|string|false|none|City of the shipping address.|
|» » » » » » complement|string \| null|false|none|Complement to the shipping address, in case it applies.|
|» » » » » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » » » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » » » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » » » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » » » » postalCode|string|false|none|Postal code.|
|» » » » » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » » » » state|string|false|none|State of the shipping address.|
|» » » » » » street|string|false|none|Street of the shipping address.|
|» » » » » dockId|string \| null|false|none|Corresponding dock ID.|
|» » » » » friendlyName|string \| null|false|none|Friendly name.|
|» » » » » isPickupStore|boolean|false|none|Indicates whether it is the pickup store.|
|» » » » polygonName|string \| null|false|none|Polygon name.|
|» » » » price|integer|false|none|Price in cents.|
|» » » » shippingEstimate|string|false|none|Shipping estimate. For instance, Three business days will be represented `3bd`.|
|» » » » shippingEstimateDate|string \| null|false|none|Shipping estimate date.|
|» » » » tax|integer|false|none|Tax in cents.|
|» » » » transitTime|string|false|none|Transit time. For instance, "three business days" is represented `3bd`.|
|» » selectedAddresses|[object]|false|none|Array with information on the selected addresses for the order.|
|» » » addressId|string|false|none|Address ID.|
|» » » addressType|string|false|none|Type of address. For example, `Residential` or `Pickup`.|
|» » » city|string|false|none|City of the shipping address.|
|» » » complement|string|false|none|Complement to the shipping address, in case it applies.|
|» » » country|string|false|none|Three letter ISO code of the country of the shipping address.|
|» » » geoCoordinates|[number]|false|none|Array containing two floats with geocoordinates, first longitude, then latitude.|
|» » » isDisposable|boolean|false|none|Indicates whether address is disposable.|
|» » » neighborhood|string|false|none|Neighborhood of the shipping address.|
|» » » number|string|false|none|Number of the building, house or apartment in the shipping address.|
|» » » postalCode|string|false|none|Postal code.|
|» » » receiverName|string|false|none|Name of the person who is going to receive the order.|
|» » » reference|string \| null|false|none|Complement that might help locate the shipping address more precisely in case of delivery.|
|» » » state|string|false|none|State of the shipping address.|
|» » » street|string|false|none|Street of the shipping address.|
|» state|string \| null|false|none|State.|
|» storeId|string \| null|false|none|Store ID.|
|» timeZoneCreationDate|string|false|none|Time zone creation date.|
|» timeZoneLastChange|string|false|none|Time zone last change.|
|» totals|[object]|false|none|Information on order totals.|
|» » id|string|false|none|Total ID.|
|» » name|string|false|none|Total name.|
|» » value|integer|false|none|Total value.|
|» userType|string|false|none|User type.|
|» value|integer|false|none|Value of the order.|
|transactionData|object|false|none|Information on each transaction pertinent to the order placed.|
|» gatewayCallbackTemplatePath|string|false|none|Template of the gateway callback path, which may later be used to send information about the transaction.|
|» merchantTransactions|[object]|false|none|Information on each merchant transaction.|
|» » id|string|false|none|ID of the seller.|
|» » merchantName|string|false|none|Name of the merchant responsible for the sale.|
|» » payments|[object]|false|none|Information on each payment pertinent to the transaction.|
|» » » accountId|string \| null|false|none|Account ID.|
|» » » bin|string \| null|false|none|Payment bin.|
|» » » giftCardId|string \| null|false|none|Gift card ID.|
|» » » giftCardProvider|string \| null|false|none|Gift card provider.|
|» » » giftCardRedemptionCode|string \| null|false|none|Gift card redemption code.|
|» » » paymentSystem|string|false|none|Payment system.|
|» » » referenceValue|integer|false|none|Reference value over which interests may be applied.|
|» » » tokenId|string \| null|false|none|Token ID.|
|» » » value|integer|false|none|Total value to be paid in this payment.|
|» » transactionId|string|false|none|ID of the transaction in the platform.|
|» receiverUri|string|false|none|Receiver URI.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="checkout-api-region">Region</h1>

## Get sellers by region or address

<a id="opIdGetSellersByRegion"></a>

> Code samples

```bash
curl 'https://example.com/api/checkout/pub/regions/v2.1BB18CE648B5111D0933734ED83EC783?country=BRA' \
  -H 'Accept: application/json'
```

`GET /api/checkout/pub/regions/{regionId}`

Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).

To access the list of sellers, you must choose one of the following methods:

1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.

<h3 id="get-sellers-by-region-or-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|regionId|path|string|true|ID of the region corresponding to the shopper's location.|
|country|query|string|true|Three letter country code refering to the `postalCode` field.|
|postalCode|query|string|false|Postal code corresponding to the shopper's location.|
|geoCoordinates|query|[number]|false|Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.|

> Example responses

> 200 Response

```json
{
  "id": "v2.1BB18CE648B5111D0933734ED83EC783",
  "sellers": [
    {
      "id": "abacaba",
      "logo": null,
      "name": "Abacaba Store"
    },
    {
      "id": "abacaba2",
      "logo": null,
      "name": "Abacaba VTEX Outlet"
    },
    {
      "id": "abacaba3",
      "logo": null,
      "name": "Abacaba VTEX Mall"
    }
  ]
}
```

<h3 id="get-sellers-by-region-or-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-sellers-by-region-or-address-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Region ID.|
|sellers|[object]|false|none|Array with information on each seller retrieved for the given region.|
|» id|string|false|none|Seller ID.|
|» logo|string \| null|false|none|Seller logo.|
|» name|string|false|none|Seller name.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "{{skuId}}",
  "quantity": 1,
  "seller": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The SKU ID.|
|quantity|integer(int32)|true|none|The quantity of items of this specific SKU in the cart to be simulated.|
|seller|string|true|none|The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.|

<h2 id="tocS_OrderFormSimulationRequest">OrderFormSimulationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorderformsimulationrequest"></a>
<a id="schema_OrderFormSimulationRequest"></a>
<a id="tocSorderformsimulationrequest"></a>
<a id="tocsorderformsimulationrequest"></a>

```json
{
  "country": "{{countryCode-ISO-3-digits}}",
  "items": [
    {
      "id": "{{skuId}}",
      "quantity": 1,
      "seller": "1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|none|
|items|[[Item](#schemaitem)]|true|none|Array containing information about the SKUs inside the cart to be simulated.|

<h2 id="tocS_PaymentConfiguration">PaymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapaymentconfiguration"></a>
<a id="schema_PaymentConfiguration"></a>
<a id="tocSpaymentconfiguration"></a>
<a id="tocspaymentconfiguration"></a>

```json
{
  "allowInstallmentsMerge": false,
  "requiresAuthenticationForPreAuthorizedPaymentOption": false
}
```

Payment Configuration object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowInstallmentsMerge|boolean|false|none|By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values ​​may not be equal in this case.|
|requiresAuthenticationForPreAuthorizedPaymentOption|boolean|true|none|Determines whether pre-authorized payments require authentication|

<h2 id="tocS_PriceChangeRequest">PriceChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapricechangerequest"></a>
<a id="schema_PriceChangeRequest"></a>
<a id="tocSpricechangerequest"></a>
<a id="tocspricechangerequest"></a>

```json
{
  "price": 10000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|integer(int32)|true|none|The new price of the item.|

<h2 id="tocS_SetsinglecustomfieldvalueRequest">SetsinglecustomfieldvalueRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetsinglecustomfieldvaluerequest"></a>
<a id="schema_SetsinglecustomfieldvalueRequest"></a>
<a id="tocSsetsinglecustomfieldvaluerequest"></a>
<a id="tocssetsinglecustomfieldvaluerequest"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The value you want to set to the specified field.|

<h2 id="tocS_UpdateorderFormconfigurationRequest">UpdateorderFormconfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorderformconfigurationrequest"></a>
<a id="schema_UpdateorderFormconfigurationRequest"></a>
<a id="tocSupdateorderformconfigurationrequest"></a>
<a id="tocsupdateorderformconfigurationrequest"></a>

```json
{
  "allowManualPrice": null,
  "allowMultipleDeliveries": null,
  "apps": null,
  "decimalDigitsPrecision": 2,
  "minimumQuantityAccumulatedForItems": 1,
  "minimumValueAccumulated": null,
  "paymentConfiguration": {
    "requiresAuthenticationForPreAuthorizedPaymentOption": false
  },
  "taxConfiguration": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowManualPrice|boolean \| null|true|none|Allows the editing of SKU prices right in the cart.|
|allowMultipleDeliveries|boolean \| null|true|none|On the same purchase, allows the selection of items from multiple delivery channels.|
|apps|[object]|true|none|Array of objects containing Apps configuration information.|
|decimalDigitsPrecision|integer(int32)|true|none|Number of price digits.|
|maskFirstPurchaseData|boolean|false|none|Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data.|
|maxNumberOfWhiteLabelSellers|integer|false|none|Allows the input of a limit of white label sellers involved on the cart.|
|minimumQuantityAccumulatedForItems|integer(int32)|true|none|Minimum SKU quantity by cart.|
|minimumValueAccumulated|integer \| null|true|none|Minimum cart value.|
|paymentConfiguration|[PaymentConfiguration](#schemapaymentconfiguration)|true|none|Payment Configuration object|
|paymentSystemToCheckFirstInstallment|string|false|none|If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).|
|recaptchaValidation|string|false|none|Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)<br><br>Possible values are:<br>- `"never"`: no purchases are validated with reCAPTCHA.<br>- `"always"`: every purchase is validated with reCAPTCHA.<br>- `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.|
|taxConfiguration|object \| null|true|none|External tax service configuration.|

<h2 id="tocS_WaitingTime">WaitingTime</h2>
<!-- backwards compatibility -->
<a id="schemawaitingtime"></a>
<a id="schema_WaitingTime"></a>
<a id="tocSwaitingtime"></a>
<a id="tocswaitingtime"></a>

```json
{
  "waitingTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waitingTime|integer|true|none|Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.|
