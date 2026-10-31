<h1 id="logistics-api">Logistics API v1_beta.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<span class="tablenote"><b>Note:</b> This is a <a href="https://developer.ebay.com/api-docs/static/versioning.html#limited" target="_blank"> <img src="/cms/img/docs/partners-api.svg" class="legend-icon partners-icon" title="Limited Release"  alt="Limited Release" />(Limited Release)</a> API available only to select developers approved by business units.</span><br /><br />The <b>Logistics API</b> resources offer the following capabilities: <ul><li><b>shipping_quote</b> &ndash; Consolidates into a list a set of live shipping rates, or quotes, from which you can select a rate to ship a package.</li> <li><b>shipment</b> &ndash; Creates a "shipment" for the selected shipping rate.</li></ul> Call <b>createShippingQuote</b> to get a list of live shipping rates. The rates returned are all valid for a specific time window and all quoted prices are at eBay-negotiated rates. <br><br>Select one of the live rates and using its associated <b>rateId</b>, create a "shipment" for the package by calling <b>createFromShippingQuote</b>. Creating a shipment completes an agreement, and the cost of the base service and any added shipping options are summed into the returned <b>totalShippingCost</b> value. This action also generates a shipping label that you can use to ship the package.  The total cost of the shipment is incurred when the package is shipped using the supplied shipping label.  <p class="tablenote"><b>Important!</b> Sellers must set up a payment method via their eBay account before they can use the methods in this API to create a shipment and the associated shipping label.</p>

Base URLs:

* <a href="https://api.ebay.com/sell/logistics/v1_beta">https://api.ebay.com/sell/logistics/v1_beta</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.logistics| This scope would allow signed in user to access Logistics information.|

<h1 id="logistics-api-shipment">shipment</h1>

## createFromShippingQuote

<a id="opIdcreateFromShippingQuote"></a>

> Code samples

```bash
curl https://api.ebay.com/shipment/create_from_shipping_quote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalOptions": [
      {
        "additionalCost": {
          "currency": "string",
          "value": "string"
        },
        "optionType": "string"
      }
    ],
    "labelCustomMessage": "string",
    "labelSize": "string",
    "rateId": "string",
    "returnTo": {
      "companyName": "string",
      "contactAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "countryCode": "string",
        "county": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    },
    "shippingQuoteId": "string"
  }'
```

`POST /shipment/create_from_shipping_quote`

This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>

> Body parameter

```json
{
  "additionalOptions": [
    {
      "additionalCost": {
        "currency": "string",
        "value": "string"
      },
      "optionType": "string"
    }
  ],
  "labelCustomMessage": "string",
  "labelSize": "string",
  "rateId": "string",
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shippingQuoteId": "string"
}
```

<h3 id="createfromshippingquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateShipmentFromQuoteRequest](#schemacreateshipmentfromquoterequest)|true|The create shipment from quote request.|
|» additionalOptions|body|[[AdditionalOption](#schemaadditionaloption)]|false|Supply a list of one or more shipping options that the seller wants to purchase for this shipment.  <br><br>The <b>baseShippingCost</b> field that's associated with the selected shipping rate is the cost of the base service offered in the rate. In addition to the base service, sellers can add additional shipping services to the base service. Shipping options include things such as shipping insurance or a recipient's signature upon delivery. The cost of any added services is summed with the base shipping cost to determine the final cost for the shipment. All options added to the shipment must be chosen from the set of shipping options offered with the selected rate.|
|» labelCustomMessage|body|string|false|Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels.|
|» labelSize|body|string|false|The seller's desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier's default label size is used.  <br><brCurrently, the only valid value is: <code>4"x6"</code>|
|» rateId|body|string|false|The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to <b>createShippingQuote</b> and is returned in the <b>rates.rateId</b> field.|
|» returnTo|body|[Contact](#schemacontact)|false|The optional return address and contact details for the shipment. The return address is printed on the shipping label. If not specified, the return address defaults to the <b>shipFrom</b> address returned in shipping quote. |
|» shippingQuoteId|body|string|false|The unique eBay-assigned ID of the shipping quote that was generated by a call to <b>createShippingQuote</b>.|

> Example responses

> 201 Response

```json
{
  "cancellation": {
    "cancellationRequestedDate": "string",
    "cancellationStatus": "string"
  },
  "creationDate": "string",
  "labelCustomMessage": "string",
  "labelDownloadUrl": "string",
  "labelSize": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rate": {
    "additionalOptions": [
      {
        "additionalCost": {
          "currency": "string",
          "value": "string"
        },
        "optionType": "string"
      }
    ],
    "baseShippingCost": {
      "currency": "string",
      "value": "string"
    },
    "destinationTimeZone": "string",
    "maxEstimatedDeliveryDate": "string",
    "minEstimatedDeliveryDate": "string",
    "pickupNetworks": [
      "string"
    ],
    "pickupSlotId": "string",
    "pickupType": "string",
    "rateId": "string",
    "shippingCarrierCode": "string",
    "shippingCarrierName": "string",
    "shippingQuoteId": "string",
    "shippingServiceCode": "string",
    "shippingServiceName": "string",
    "totalShippingCost": {
      "currency": "string",
      "value": "string"
    }
  },
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipmentId": "string",
  "shipmentTrackingNumber": "string"
}
```

<h3 id="createfromshippingquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Shipment](#schemashipment)|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

## getShipment

<a id="opIdgetShipment"></a>

> Code samples

```bash
curl https://api.ebay.com/shipment/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shipment/{shipmentId}`

This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

<h3 id="getshipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipmentId|path|string|true|This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.|

> Example responses

> 200 Response

```json
{
  "cancellation": {
    "cancellationRequestedDate": "string",
    "cancellationStatus": "string"
  },
  "creationDate": "string",
  "labelCustomMessage": "string",
  "labelDownloadUrl": "string",
  "labelSize": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rate": {
    "additionalOptions": [
      {
        "additionalCost": {
          "currency": "string",
          "value": "string"
        },
        "optionType": "string"
      }
    ],
    "baseShippingCost": {
      "currency": "string",
      "value": "string"
    },
    "destinationTimeZone": "string",
    "maxEstimatedDeliveryDate": "string",
    "minEstimatedDeliveryDate": "string",
    "pickupNetworks": [
      "string"
    ],
    "pickupSlotId": "string",
    "pickupType": "string",
    "rateId": "string",
    "shippingCarrierCode": "string",
    "shippingCarrierName": "string",
    "shippingQuoteId": "string",
    "shippingServiceCode": "string",
    "shippingServiceName": "string",
    "totalShippingCost": {
      "currency": "string",
      "value": "string"
    }
  },
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipmentId": "string",
  "shipmentTrackingNumber": "string"
}
```

<h3 id="getshipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shipment](#schemashipment)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

## cancelShipment

<a id="opIdcancelShipment"></a>

> Code samples

```bash
curl https://api.ebay.com/shipment/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /shipment/{shipmentId}/cancel`

This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.

<h3 id="cancelshipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipmentId|path|string|true|This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.|

> Example responses

> 200 Response

```json
{
  "cancellation": {
    "cancellationRequestedDate": "string",
    "cancellationStatus": "string"
  },
  "creationDate": "string",
  "labelCustomMessage": "string",
  "labelDownloadUrl": "string",
  "labelSize": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rate": {
    "additionalOptions": [
      {
        "additionalCost": {
          "currency": "string",
          "value": "string"
        },
        "optionType": "string"
      }
    ],
    "baseShippingCost": {
      "currency": "string",
      "value": "string"
    },
    "destinationTimeZone": "string",
    "maxEstimatedDeliveryDate": "string",
    "minEstimatedDeliveryDate": "string",
    "pickupNetworks": [
      "string"
    ],
    "pickupSlotId": "string",
    "pickupType": "string",
    "rateId": "string",
    "shippingCarrierCode": "string",
    "shippingCarrierName": "string",
    "shippingQuoteId": "string",
    "shippingServiceCode": "string",
    "shippingServiceName": "string",
    "totalShippingCost": {
      "currency": "string",
      "value": "string"
    }
  },
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipmentId": "string",
  "shipmentTrackingNumber": "string"
}
```

<h3 id="cancelshipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Shipment](#schemashipment)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

## downloadLabelFile

<a id="opIddownloadLabelFile"></a>

> Code samples

```bash
curl https://api.ebay.com/shipment/string/download_label_file \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shipment/{shipmentId}/download_label_file`

This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->

<h3 id="downloadlabelfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shipmentId|path|string|true|This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.|

<h3 id="downloadlabelfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="downloadlabelfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

<h1 id="logistics-api-shippingquote">shipping_quote</h1>

## createShippingQuote

<a id="opIdcreateShippingQuote"></a>

> Code samples

```bash
curl https://api.ebay.com/shipping_quote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-EBAY-C-MARKETPLACE-ID: string' \
  -d '{
    "orders": [
      {
        "channel": "string",
        "orderId": "string"
      }
    ],
    "packageSpecification": {
      "dimensions": {
        "height": "string",
        "length": "string",
        "unit": "string",
        "width": "string"
      },
      "weight": {
        "unit": "string",
        "value": "string"
      }
    },
    "shipFrom": {
      "companyName": "string",
      "contactAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "countryCode": "string",
        "county": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    },
    "shipTo": {
      "companyName": "string",
      "contactAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "countryCode": "string",
        "county": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    }
  }'
```

`POST /shipping_quote`

The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.

> Body parameter

```json
{
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  }
}
```

<h3 id="createshippingquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-EBAY-C-MARKETPLACE-ID|header|string|true|This header parameter specifies the eBay marketplace for the shipping quote that is being created. For a list of valid values, refer to the section <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Marketplace ID Values</a> in the <b>Using eBay RESTful APIs</b> guide.|
|body|body|[ShippingQuoteRequest](#schemashippingquoterequest)|true|The request object for <b>createShippingQuote</b>.|
|» orders|body|[[Order](#schemaorder)]|false|A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  <br><br>A package can contain any number of line items from one or more orders, providing they all ship in the same package.  <br><br><b>Maximum list size:</b> 10|
|» packageSpecification|body|[PackageSpecification](#schemapackagespecification)|false|Declares the weight and dimensions of the package.|
|» shipFrom|body|[Contact](#schemacontact)|false|The address and contact details pertaining to the origin of the shipment.|
|» shipTo|body|[Contact](#schemacontact)|false|The address and contact details pertaining to the shipment's destination.  <!--<br><br>If you are using eBay's Global Shipping Program (GSP) to ship internationally, supply the address to -->|

> Example responses

> 201 Response

```json
{
  "creationDate": "string",
  "expirationDate": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rates": [
    {
      "additionalOptions": [
        {
          "additionalCost": {
            "currency": "string",
            "value": "string"
          },
          "optionType": "string"
        }
      ],
      "baseShippingCost": {
        "currency": "string",
        "value": "string"
      },
      "destinationTimeZone": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "pickupNetworks": [
        "string"
      ],
      "pickupSlots": [
        {
          "pickupSlotEndTime": "string",
          "pickupSlotId": "string",
          "pickupSlotStartTime": "string",
          "pickupSlotTimeZone": "string"
        }
      ],
      "pickupType": "string",
      "rateId": "string",
      "rateRecommendation": [
        "string"
      ],
      "shippingCarrierCode": "string",
      "shippingCarrierName": "string",
      "shippingServiceCode": "string",
      "shippingServiceName": "string"
    }
  ],
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shippingQuoteId": "string",
  "warnings": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

<h3 id="createshippingquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ShippingQuote](#schemashippingquote)|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

## getShippingQuote

<a id="opIdgetShippingQuote"></a>

> Code samples

```bash
curl https://api.ebay.com/shipping_quote/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shipping_quote/{shippingQuoteId}`

This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

<h3 id="getshippingquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shippingQuoteId|path|string|true|This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The <b>shippingQuoteId</b> value is generated and returned by a call to <b>createShippingQuote</b>.|

> Example responses

> 200 Response

```json
{
  "creationDate": "string",
  "expirationDate": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rates": [
    {
      "additionalOptions": [
        {
          "additionalCost": {
            "currency": "string",
            "value": "string"
          },
          "optionType": "string"
        }
      ],
      "baseShippingCost": {
        "currency": "string",
        "value": "string"
      },
      "destinationTimeZone": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "pickupNetworks": [
        "string"
      ],
      "pickupSlots": [
        {
          "pickupSlotEndTime": "string",
          "pickupSlotId": "string",
          "pickupSlotStartTime": "string",
          "pickupSlotTimeZone": "string"
        }
      ],
      "pickupType": "string",
      "rateId": "string",
      "rateRecommendation": [
        "string"
      ],
      "shippingCarrierCode": "string",
      "shippingCarrierName": "string",
      "shippingServiceCode": "string",
      "shippingServiceName": "string"
    }
  ],
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shippingQuoteId": "string",
  "warnings": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

<h3 id="getshippingquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ShippingQuote](#schemashippingquote)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.logistics )
</aside>

# Schemas

<h2 id="tocS_AdditionalOption">AdditionalOption</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaloption"></a>
<a id="schema_AdditionalOption"></a>
<a id="tocSadditionaloption"></a>
<a id="tocsadditionaloption"></a>

```json
{
  "additionalCost": {
    "currency": "string",
    "value": "string"
  },
  "optionType": "string"
}
```

This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalCost|[Amount](#schemaamount)|false|none|The monetary cost of the additional shipping option identified by the <b>optionType</b> field.|
|optionType|string|false|none|The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": "string"
}
```

A complex type that describes the value of a monetary amount as represented by a global currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" title="https://www.iso.org" target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount in the specified <b>currency</b>.|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "companyName": "string",
  "contactAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryCode": "string",
    "county": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "fullName": "string",
  "primaryPhone": {
    "phoneNumber": "string"
  }
}
```

This complex type contains contact information for an individual buyer or seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|The company name with which the contact is associated.|
|contactAddress|[ContactAddress](#schemacontactaddress)|false|none|The details of the contact's geographical address.|
|fullName|string|false|none|The contact's full name.|
|primaryPhone|[PhoneNumber](#schemaphonenumber)|false|none|The contact's primary telephone number.|

<h2 id="tocS_ContactAddress">ContactAddress</h2>
<!-- backwards compatibility -->
<a id="schemacontactaddress"></a>
<a id="schema_ContactAddress"></a>
<a id="tocScontactaddress"></a>
<a id="tocscontactaddress"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "countryCode": "string",
  "county": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

This complex type specifies the details of a geographical address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|The first line of the street address.|
|addressLine2|string|false|none|The second line of the street address. Use this field for additional address information, such as a suite or apartment number.|
|city|string|false|none|The city in which the address is located.|
|countryCode|string|false|none|The country of the address, represented as two-letter <a href="https://www.iso.org/iso-3166-country-codes.html" title="https://www.iso.org" target="_blank">ISO 3166</a> country code. For example, <code>US</code> represents the United States and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum'>eBay API documentation</a>|
|county|string|false|none|The county (not country) in which the address is located. Counties typically contain multiple cities or towns.|
|postalCode|string|false|none|The postal code of the address.|
|stateOrProvince|string|false|none|The state or province in which the address is located. States and provinces often contain multiple counties.|

<h2 id="tocS_CreateShipmentFromQuoteRequest">CreateShipmentFromQuoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateshipmentfromquoterequest"></a>
<a id="schema_CreateShipmentFromQuoteRequest"></a>
<a id="tocScreateshipmentfromquoterequest"></a>
<a id="tocscreateshipmentfromquoterequest"></a>

```json
{
  "additionalOptions": [
    {
      "additionalCost": {
        "currency": "string",
        "value": "string"
      },
      "optionType": "string"
    }
  ],
  "labelCustomMessage": "string",
  "labelSize": "string",
  "rateId": "string",
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shippingQuoteId": "string"
}
```

This complex type contains the request payload for the <b>createFromShippingQuote</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalOptions|[[AdditionalOption](#schemaadditionaloption)]|false|none|Supply a list of one or more shipping options that the seller wants to purchase for this shipment.  <br><br>The <b>baseShippingCost</b> field that's associated with the selected shipping rate is the cost of the base service offered in the rate. In addition to the base service, sellers can add additional shipping services to the base service. Shipping options include things such as shipping insurance or a recipient's signature upon delivery. The cost of any added services is summed with the base shipping cost to determine the final cost for the shipment. All options added to the shipment must be chosen from the set of shipping options offered with the selected rate.|
|labelCustomMessage|string|false|none|Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels.|
|labelSize|string|false|none|The seller's desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier's default label size is used.  <br><brCurrently, the only valid value is: <code>4"x6"</code>|
|rateId|string|false|none|The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to <b>createShippingQuote</b> and is returned in the <b>rates.rateId</b> field.|
|returnTo|[Contact](#schemacontact)|false|none|The optional return address and contact details for the shipment. The return address is printed on the shipping label. If not specified, the return address defaults to the <b>shipFrom</b> address returned in shipping quote. |
|shippingQuoteId|string|false|none|The unique eBay-assigned ID of the shipping quote that was generated by a call to <b>createShippingQuote</b>.|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "height": "string",
  "length": "string",
  "unit": "string",
  "width": "string"
}
```

This complex type defines the dimensions of a package to be shipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string|false|none|The numeric value of the height of the package.|
|length|string|false|none|The numeric value of the length of the package.|
|unit|string|false|none|The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a>|
|width|string|false|none|The numeric value of the width of the package.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

A container that defines the elements of error and warning message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category type for this error or warning. It takes a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>|
|domain|string|false|none|Name of the domain containing the service or application.|
|errorId|integer(int32)|false|none|A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.|
|inputRefIds|[string]|false|none|Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.|
|longMessage|string|false|none|An expanded version of message that should be around 100-200 characters long, but is not required to be such.|
|message|string|false|none|An end user and app-developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.|
|outputRefIds|[string]|false|none|Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.|
|subdomain|string|false|none|Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Container for an error parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity that threw the error.|
|value|string|false|none|A description of the error.|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "channel": "string",
  "orderId": "string"
}
```

This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The e-commerce platform or environment where the order was created. Use the value <code>EBAY</code> to get the rates available for eBay orders.|
|orderId|string|false|none|The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the <b>orderId</b>.|

<h2 id="tocS_PackageSpecification">PackageSpecification</h2>
<!-- backwards compatibility -->
<a id="schemapackagespecification"></a>
<a id="schema_PackageSpecification"></a>
<a id="tocSpackagespecification"></a>
<a id="tocspackagespecification"></a>

```json
{
  "dimensions": {
    "height": "string",
    "length": "string",
    "unit": "string",
    "width": "string"
  },
  "weight": {
    "unit": "string",
    "value": "string"
  }
}
```

This complex type specifies the dimensions and weight of a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[Dimensions](#schemadimensions)|false|none|Declares the height, length, width, and unit of measure for the package to be shipped.|
|weight|[Weight](#schemaweight)|false|none|Declares the weight of the package.|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "phoneNumber": "string"
}
```

This complex type contains a string field representing a telephone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|A telephone number.|

<h2 id="tocS_PickupSlot">PickupSlot</h2>
<!-- backwards compatibility -->
<a id="schemapickupslot"></a>
<a id="schema_PickupSlot"></a>
<a id="tocSpickupslot"></a>
<a id="tocspickupslot"></a>

```json
{
  "pickupSlotEndTime": "string",
  "pickupSlotId": "string",
  "pickupSlotStartTime": "string",
  "pickupSlotTimeZone": "string"
}
```

This complex type defines a time window for the pickup of a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pickupSlotEndTime|string|false|none|The date and time the pickup slot ends, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>|
|pickupSlotId|string|false|none|Seller-defined name for the pickup slot. <!-- Max characters? -->|
|pickupSlotStartTime|string|false|none|The date and time the pickup slot begins, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string.|
|pickupSlotTimeZone|string|false|none|The time zone of the pickup location, returned as <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a> ID (also know as an Olson time zone ID).|

<h2 id="tocS_PurchasedRate">PurchasedRate</h2>
<!-- backwards compatibility -->
<a id="schemapurchasedrate"></a>
<a id="schema_PurchasedRate"></a>
<a id="tocSpurchasedrate"></a>
<a id="tocspurchasedrate"></a>

```json
{
  "additionalOptions": [
    {
      "additionalCost": {
        "currency": "string",
        "value": "string"
      },
      "optionType": "string"
    }
  ],
  "baseShippingCost": {
    "currency": "string",
    "value": "string"
  },
  "destinationTimeZone": "string",
  "maxEstimatedDeliveryDate": "string",
  "minEstimatedDeliveryDate": "string",
  "pickupNetworks": [
    "string"
  ],
  "pickupSlotId": "string",
  "pickupType": "string",
  "rateId": "string",
  "shippingCarrierCode": "string",
  "shippingCarrierName": "string",
  "shippingQuoteId": "string",
  "shippingServiceCode": "string",
  "shippingServiceName": "string",
  "totalShippingCost": {
    "currency": "string",
    "value": "string"
  }
}
```

The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalOptions|[[AdditionalOption](#schemaadditionaloption)]|false|none|An list of additional, optional features that have been purchased for the shipment.|
|baseShippingCost|[Amount](#schemaamount)|false|none|The amount of the "base cost" for the shipment as set by the given carrier for the specified service. This cost excludes any addition costs accrued from the addition of any optional shipping options.|
|destinationTimeZone|string|false|none|The time zone of the destination according to <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a>. For example, "America/Los_Angeles".|
|maxEstimatedDeliveryDate|string|false|none|A string value representing maximum (latest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>|
|minEstimatedDeliveryDate|string|false|none|A string value representing minimum (earliest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a>ISO 8601</a> UTC string.|
|pickupNetworks|[string]|false|none|A list of pickup networks compatible with the shipping service.|
|pickupSlotId|string|false|none|This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup.|
|pickupType|string|false|none|The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>|
|rateId|string|false|none|The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment.|
|shippingCarrierCode|string|false|none|The ID code for the carrier that was selected for the package shipment.|
|shippingCarrierName|string|false|none|The name of the shipping carrier.|
|shippingQuoteId|string|false|none|The unique eBay-generated ID of the <i>shipping quote</i> from which the seller selected a shipping rate (<b>rateId</b>).|
|shippingServiceCode|string|false|none|String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies.|
|shippingServiceName|string|false|none|The name of the shipping service.|
|totalShippingCost|[Amount](#schemaamount)|false|none|The total shipping cost, which is the sum cost of the base shipping cost and the cost of all the selected shipping options.|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "additionalOptions": [
    {
      "additionalCost": {
        "currency": "string",
        "value": "string"
      },
      "optionType": "string"
    }
  ],
  "baseShippingCost": {
    "currency": "string",
    "value": "string"
  },
  "destinationTimeZone": "string",
  "maxEstimatedDeliveryDate": "string",
  "minEstimatedDeliveryDate": "string",
  "pickupNetworks": [
    "string"
  ],
  "pickupSlots": [
    {
      "pickupSlotEndTime": "string",
      "pickupSlotId": "string",
      "pickupSlotStartTime": "string",
      "pickupSlotTimeZone": "string"
    }
  ],
  "pickupType": "string",
  "rateId": "string",
  "rateRecommendation": [
    "string"
  ],
  "shippingCarrierCode": "string",
  "shippingCarrierName": "string",
  "shippingServiceCode": "string",
  "shippingServiceName": "string"
}
```

This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalOptions|[[AdditionalOption](#schemaadditionaloption)]|false|none|Contains service and pricing information for one or more shipping options that are offered by the carrier and can be purchased in addition to the base shipping service provided by this rate. Shipping options can include items such as <code>INSURANCE</code> and <code>SIGNATURE</code>.|
|baseShippingCost|[Amount](#schemaamount)|false|none|A live quote for the cost that the carrier (identified by <b>shippingCarrierCode</b>) is charging for the shipping service being offered (identified by <b>shippingServiceCode</b>), excluding any additional shipping options.|
|destinationTimeZone|string|false|none|The name of the time zone region, as defined in the <a href="http://www.iana.org/time-zones"  target="_blank">IANA Time Zone Database</a>, to which the package is being shipped.  <br><br>Delivery dates are calculated relative to this time zone.  <br><br><span class="tablenote"><strong>Note:</strong> This is different from a Coordinated Universal Time (UTC) offset. For example, the <i>America/Los_Angeles</i> time zone identifies a region with the UTC standard time offset of <code>-08:00</code>, but so do several other time zones, including <i>America/Tijuana</i>,<i>America/Dawson</i>, and <i>Pacific/Pitcairn</i>.</span>|
|maxEstimatedDeliveryDate|string|false|none|The latest stated date and time the shipment will be delivered at this rate.  <br><br>The time stamp is formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>|
|minEstimatedDeliveryDate|string|false|none|The estimated earliest date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 UTC string.|
|pickupNetworks|[string]|false|none|A list of pickup networks compatible with the shipping service.|
|pickupSlots|[[PickupSlot](#schemapickupslot)]|false|none|A list of available pickup slots for the package.|
|pickupType|string|false|none|The type of pickup or drop-off service associated with the <b>pickupSlots</b> time frames. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>|
|rateId|string|false|none|The unique eBay-assigned ID for this shipping rate.|
|rateRecommendation|[string]|false|none|A list of reasons this rate is recommended. Available values are: <ul> <li><code>BUYER_CHOSEN</code> &mdash; The rate meets or exceeds the requirements of the buyer's preferred shipping option.</li> <li><code>CHEAPEST_ON_TIME</code> &mdash; The rate is the cheapest rate available that will provide delivery within the seller's time frame commitment.</li>  <li><code>EBAY_PLUS_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Plus program.</li> <li><code>FASTEST_ON_TIME</code> &mdash; The rate has the fastest shipping time, and will provide delivery within the seller's time frame commitment.</li> <li><code>GUARANTEED_DELIVERY_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Guaranteed Delivery program.</li></ul>|
|shippingCarrierCode|string|false|none|The code name of the shipping carrier who will provide the service identified by <b>shippingServiceCode</b>.|
|shippingCarrierName|string|false|none|The common name of the shipping carrier.|
|shippingServiceCode|string|false|none|The code name of the shipping service to be provided by the carrier identified by <b>shippingCarrierCode</b>.|
|shippingServiceName|string|false|none|The common name of the shipping service.|

<h2 id="tocS_Shipment">Shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_Shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "cancellation": {
    "cancellationRequestedDate": "string",
    "cancellationStatus": "string"
  },
  "creationDate": "string",
  "labelCustomMessage": "string",
  "labelDownloadUrl": "string",
  "labelSize": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rate": {
    "additionalOptions": [
      {
        "additionalCost": {
          "currency": "string",
          "value": "string"
        },
        "optionType": "string"
      }
    ],
    "baseShippingCost": {
      "currency": "string",
      "value": "string"
    },
    "destinationTimeZone": "string",
    "maxEstimatedDeliveryDate": "string",
    "minEstimatedDeliveryDate": "string",
    "pickupNetworks": [
      "string"
    ],
    "pickupSlotId": "string",
    "pickupType": "string",
    "rateId": "string",
    "shippingCarrierCode": "string",
    "shippingCarrierName": "string",
    "shippingQuoteId": "string",
    "shippingServiceCode": "string",
    "shippingServiceName": "string",
    "totalShippingCost": {
      "currency": "string",
      "value": "string"
    }
  },
  "returnTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipmentId": "string",
  "shipmentTrackingNumber": "string"
}
```

This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellation|[ShipmentCancellation](#schemashipmentcancellation)|false|none|Cancellation status for the package, if one exists.|
|creationDate|string|false|none|The date and time the shipment was created, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>|
|labelCustomMessage|string|false|none|If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label.|
|labelDownloadUrl|string|false|none|The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See <a href="/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile">downloadLabelFile</a> for requesting different response file formats.|
|labelSize|string|false|none|The seller's desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the <b>creaateFromShippingQuote</b> call matches a size the carrier supports, the value will be represented here in the shipment. <br><br>Currently, the only valid value is: <code>4"x6"</code>|
|orders|[[Order](#schemaorder)]|false|none|This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.|
|packageSpecification|[PackageSpecification](#schemapackagespecification)|false|none|The weight and dimensions of the package.|
|rate|[PurchasedRate](#schemapurchasedrate)|false|none|The shipping rate that the seller has chosen to purchase for this shipment. Each rate, identified by a <b>rateId</b>, contains the offered base service, options, and shipping parameters that were selected for the package shipment.|
|returnTo|[Contact](#schemacontact)|false|none|The address and contact details that should be used for item returns. Sellers have the option to define a return address that is different from their <b>shipFrom</b> address. If not specified, the return address defaults to the <b>shipFrom</b> address in the shipping quote.|
|shipFrom|[Contact](#schemacontact)|false|none|The address and contact details for the origin of the package shipment.|
|shipTo|[Contact](#schemacontact)|false|none|The address and contact details for the destination of the shipment.|
|shipmentId|string|false|none|The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to <b>createFromShippingQuote</b>.|
|shipmentTrackingNumber|string|false|none|A unique carrier-assigned ID string that can be used to track the shipment.|

<h2 id="tocS_ShipmentCancellation">ShipmentCancellation</h2>
<!-- backwards compatibility -->
<a id="schemashipmentcancellation"></a>
<a id="schema_ShipmentCancellation"></a>
<a id="tocSshipmentcancellation"></a>
<a id="tocsshipmentcancellation"></a>

```json
{
  "cancellationRequestedDate": "string",
  "cancellationStatus": "string"
}
```

This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationRequestedDate|string|false|none|The time and date the request was made to cancel the shipment, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string.|
|cancellationStatus|string|false|none|This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_ShippingQuote">ShippingQuote</h2>
<!-- backwards compatibility -->
<a id="schemashippingquote"></a>
<a id="schema_ShippingQuote"></a>
<a id="tocSshippingquote"></a>
<a id="tocsshippingquote"></a>

```json
{
  "creationDate": "string",
  "expirationDate": "string",
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "rates": [
    {
      "additionalOptions": [
        {
          "additionalCost": {
            "currency": "string",
            "value": "string"
          },
          "optionType": "string"
        }
      ],
      "baseShippingCost": {
        "currency": "string",
        "value": "string"
      },
      "destinationTimeZone": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "pickupNetworks": [
        "string"
      ],
      "pickupSlots": [
        {
          "pickupSlotEndTime": "string",
          "pickupSlotId": "string",
          "pickupSlotStartTime": "string",
          "pickupSlotTimeZone": "string"
        }
      ],
      "pickupType": "string",
      "rateId": "string",
      "rateRecommendation": [
        "string"
      ],
      "shippingCarrierCode": "string",
      "shippingCarrierName": "string",
      "shippingServiceCode": "string",
      "shippingServiceName": "string"
    }
  ],
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shippingQuoteId": "string",
  "warnings": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

This complex type describes a "shipping quote," which contains the parameters for a package shipment. The shipping quote contains a list of "live quotes" or <i>rates</i> for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller.  <br><br>Use the <b>rateId</b> value to select the specific service you want when you create a shipment by calling <b>createFromShippingQuote</b>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string|false|none|The date and time this quote was created, expressed as an ISO 8601 UTC string.|
|expirationDate|string|false|none|The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased.|
|orders|[[Order](#schemaorder)]|false|none|This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.|
|packageSpecification|[PackageSpecification](#schemapackagespecification)|false|none|The weight and dimensions of the package covered by this shipping quote.|
|rates|[[Rate](#schemarate)]|false|none|A list of <i>rates</i> where each rate, as identified by a <b>rateId</b>, contains information about a specific shipping service offered by a carrier.  Rates include shipping carrier and service, the to and from locations, the pickup and delivery windows, the seller's shipping parameters, the service constraints, and the cost for the base service and a list of additional shipping options.  <br><br>Each rate offered is supported by a label service where you can purchase the rate, and associated shipping label, via a call to <b>createFromShippingQuote</b>.|
|shipFrom|[Contact](#schemacontact)|false|none|The address and contact details for the origin of the shipment.|
|shipTo|[Contact](#schemacontact)|false|none|The address and contact details for the origin of the shipment.  <!-- which address should this be for a GSP shipment?-->|
|shippingQuoteId|string|false|none|The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size.|
|warnings|[[Error](#schemaerror)]|false|none|A list of any warnings triggered by the request.|

<h2 id="tocS_ShippingQuoteRequest">ShippingQuoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemashippingquoterequest"></a>
<a id="schema_ShippingQuoteRequest"></a>
<a id="tocSshippingquoterequest"></a>
<a id="tocsshippingquoterequest"></a>

```json
{
  "orders": [
    {
      "channel": "string",
      "orderId": "string"
    }
  ],
  "packageSpecification": {
    "dimensions": {
      "height": "string",
      "length": "string",
      "unit": "string",
      "width": "string"
    },
    "weight": {
      "unit": "string",
      "value": "string"
    }
  },
  "shipFrom": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipTo": {
    "companyName": "string",
    "contactAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "countryCode": "string",
      "county": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  }
}
```

This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the "To" and "From" addresses for the package, plus the package's size.  <br><br>Carriers respond by offering up a "rate" for the service of theirs that best fits seller's needs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orders|[[Order](#schemaorder)]|false|none|A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  <br><br>A package can contain any number of line items from one or more orders, providing they all ship in the same package.  <br><br><b>Maximum list size:</b> 10|
|packageSpecification|[PackageSpecification](#schemapackagespecification)|false|none|Declares the weight and dimensions of the package.|
|shipFrom|[Contact](#schemacontact)|false|none|The address and contact details pertaining to the origin of the shipment.|
|shipTo|[Contact](#schemacontact)|false|none|The address and contact details pertaining to the shipment's destination.  <!--<br><br>If you are using eBay's Global Shipping Program (GSP) to ship internationally, supply the address to -->|

<h2 id="tocS_Weight">Weight</h2>
<!-- backwards compatibility -->
<a id="schemaweight"></a>
<a id="schema_Weight"></a>
<a id="tocSweight"></a>
<a id="tocsweight"></a>

```json
{
  "unit": "string",
  "value": "string"
}
```

This complex type contains information about the weight of an object such as a shipping package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|false|none|The unit of measurement used to specify the weight of a shipping package. Both the <strong>unit</strong> and <strong>value</strong> fields are required if the <strong>weight</strong> container is used. If the English system of measurement is being used, the applicable values for weight units are <code>POUND</code> and <code>OUNCE</CODE>. If the metric system of measurement is being used, the applicable values for weight units are <code>KILOGRAM</code> and <code>GRAM</code>. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a>|
|value|string|false|none|The numeric value of the weight of the package, as measured by the value of <b>unit</b>.|
