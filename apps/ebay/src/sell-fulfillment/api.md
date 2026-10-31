<h1 id="fulfillment-api">Fulfillment API v1.20.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Fulfillment API to complete the process of packaging, addressing, handling, and shipping each order on behalf of the seller, in accordance with the payment method and timing specified at checkout.

Base URLs:

* <a href="https://api.ebay.com/sell/fulfillment/v1">https://api.ebay.com/sell/fulfillment/v1</a> - Production

* <a href="https://apiz.ebay.com/sell/fulfillment/v1">https://apiz.ebay.com/sell/fulfillment/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.finances|View and manage your payment and order information to display this information to you and allow you to initiate refunds using the third party application|
|https://api.ebay.com/oauth/api_scope/sell.fulfillment|View and manage your order fulfillments|
|https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly|View your order fulfillments|
|https://api.ebay.com/oauth/api_scope/sell.payment.dispute|View and manage disputes and related details (including payment and order information).|

<h1 id="fulfillment-api-order">order</h1>

## getOrders

<a id="opIdgetOrders"></a>

> Code samples

```bash
curl https://api.ebay.com/order \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /order`

Use this call to search for and retrieve one or more orders based on their creation date, last modification date, or fulfillment status using the <b>filter</b> parameter. You can alternatively specify a list of orders using the <b>orderIds</b> parameter. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> objects contain information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li>The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul> <br><br> <span class="tablenote"><strong>Important:</strong> In this call, the <b>cancelStatus.cancelRequests</b> array is returned but is always empty. Use the <b>getOrder</b> call instead, which returns this array fully populated with information about any cancellation requests.</span>

<h3 id="getorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fieldGroups|query|string|false|The response type associated with the order. The only presently supported value is <code>TAX_BREAKDOWN</code>. This type returns a breakdown of tax and fee values associated with the order.|
|filter|query|string|false|One or more comma-separated criteria for narrowing down the collection of orders returned by this call. These criteria correspond to specific fields in the response payload. Multiple filter criteria combine to further restrict the results. <br><br><span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not set the <code>creationdate</code> filter to a date beyond two years in the past.</span><br><span class="tablenote"><strong>Note:</strong> If the <b>orderIds</b> parameter is included in the request, the <b>filter</b> parameter will be ignored.</span><br>The available criteria are as follows: <dl> <dt><code><b>creationdate</b></code></dt> <dd>The time period during which qualifying orders were created (the <b>orders.creationDate</b> field). In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: <ul> <li><code>creationdate:[2016-02-21T08:25:43.511Z..]</code> identifies orders created on or after the given timestamp.</li> <li><code>creationdate:[2016-02-21T08:25:43.511Z..2016-04-21T08:25:43.511Z]</code> identifies orders created between the given timestamps, inclusive.</li> </ul> </dd> <dt><code><b>lastmodifieddate</b></code></dt> <dd>The time period during which qualifying orders were last modified (the <b>orders.modifiedDate</b> field).  In the URI, this is expressed as a starting timestamp, with or without an ending timestamp (in brackets). The timestamps are in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock.For example: <ul> <li><code>lastmodifieddate:[2016-05-15T08:25:43.511Z..]</code> identifies orders modified on or after the given timestamp.</li> <li><code>lastmodifieddate:[2016-05-15T08:25:43.511Z..2016-05-31T08:25:43.511Z]</code> identifies orders modified between the given timestamps, inclusive.</li> </ul> <span class="tablenote"><strong>Note:</strong> If <b>creationdate</b> and <b>lastmodifieddate</b> are both included, only <b>creationdate</b> is used.</span> <br><br></dd> <dt><code><b>orderfulfillmentstatus</b></code></dt> <dd>The degree to which qualifying orders have been shipped (the <b>orders.orderFulfillmentStatus</b> field). In the URI, this is expressed as one of the following value combinations: <ul> <li><code>orderfulfillmentstatus:{NOT_STARTED\|IN_PROGRESS}</code> specifies orders for which no shipping fulfillments have been started, plus orders for which at least one shipping fulfillment has been started but not completed.</li> <li><code>orderfulfillmentstatus:{FULFILLED\|IN_PROGRESS}</code> specifies orders for which all shipping fulfillments have been completed, plus orders for which at least one shipping fulfillment has been started but not completed.</li> </ul> <span class="tablenote"><strong>Note:</strong> The values <code>NOT_STARTED</code>, <code>IN_PROGRESS</code>, and <code>FULFILLED</code> can be used in various combinations, but only the combinations shown here are currently supported.</span> </dd> </dl> Here is an example of a <b>getOrders</b> call using all of these filters: <br><br> <code>GET https://api.ebay.com/sell/v1/order?<br>filter=<b>creationdate</b>:%5B2016-03-21T08:25:43.511Z..2016-04-21T08:25:43.511Z%5D,<br><b>lastmodifieddate</b>:%5B2016-05-15T08:25:43.511Z..%5D,<br><b>orderfulfillmentstatus</b>:%7BNOT_STARTED%7CIN_PROGRESS%7D</code> <br><br> <span class="tablenote"><strong>Note:</strong> This call requires that certain special characters in the URI query string be percent-encoded: <br> &nbsp;&nbsp;&nbsp;&nbsp;<code>[</code> = <code>%5B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>]</code> = <code>%5D</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>{</code> = <code>%7B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>\|</code> = <code>%7C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>}</code> = <code>%7D</code> <br> This query filter example uses these codes.</span> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/fulfillment/types/api:FilterField|
|limit|query|string|false|The number of orders to return per page of the result set. Use this parameter in conjunction with the <b>offset</b> parameter to control the pagination of the output. <br><br>For example, if <b>offset</b> is set to <code>10</code> and <b>limit</b> is set to <code>10</code>, the call retrieves orders 11 thru 20 from the result set. <br><br> If a limit is not set, the <b>limit</b> defaults to 50 and returns up to 50 orders. If a requested limit is more than 200, the call fails and returns an error.<br ><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>. If the <b>orderIds</b> parameter is included in the request, this parameter will be ignored.</span> <br><br> <b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>50</code>|
|offset|query|string|false|Specifies the number of orders to skip in the result set before returning the first order in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>|
|orderIds|query|string|false|A comma-separated list of the unique identifiers of the orders to retrieve (maximum 50). If one or more order ID values are specified through the <b>orderIds</b> query parameter, all other query parameters will be ignored.<br><br><span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not provide the orderId for an order created more than two years in the past.</span>|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "orders": [
    {
      "buyer": {
        "buyerRegistrationAddress": {
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
          "email": "string",
          "fullName": "string",
          "primaryPhone": {
            "phoneNumber": "string"
          }
        },
        "taxAddress": {
          "city": "string",
          "countryCode": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "taxIdentifier": {
          "issuingCountry": "string",
          "taxIdentifierType": "string",
          "taxpayerId": "string"
        },
        "username": "string"
      },
      "buyerCheckoutNotes": "string",
      "cancelStatus": {
        "cancelRequests": [
          {
            "cancelCompletedDate": "string",
            "cancelInitiator": "string",
            "cancelReason": "string",
            "cancelRequestId": "string",
            "cancelRequestState": "string",
            "cancelRequestedDate": "string"
          }
        ],
        "cancelState": "string",
        "cancelledDate": "string"
      },
      "creationDate": "string",
      "ebayCollectAndRemitTax": true,
      "fulfillmentHrefs": [
        "string"
      ],
      "fulfillmentStartInstructions": [
        {
          "ebaySupportedFulfillment": true,
          "finalDestinationAddress": {
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "countryCode": "string",
            "county": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "fulfillmentInstructionsType": "string",
          "maxEstimatedDeliveryDate": "string",
          "minEstimatedDeliveryDate": "string",
          "pickupStep": {
            "merchantLocationKey": "string"
          },
          "shippingStep": {
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
              "email": "string",
              "fullName": "string",
              "primaryPhone": {
                "phoneNumber": "string"
              }
            },
            "shipToReferenceId": "string",
            "shippingCarrierCode": "string",
            "shippingServiceCode": "string"
          }
        }
      ],
      "lastModifiedDate": "string",
      "legacyOrderId": "string",
      "lineItems": [
        {
          "appliedPromotions": [
            {
              "description": "string",
              "discountAmount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "promotionId": "string"
            }
          ],
          "deliveryCost": {
            "discountAmount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "handlingCost": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "importCharges": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "shippingCost": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "shippingIntermediationFee": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            }
          },
          "discountedLineItemCost": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "ebayCollectAndRemitTaxes": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "collectionMethod": "string",
              "ebayReference": {
                "name": "string",
                "value": "string"
              },
              "taxType": "string"
            }
          ],
          "ebayCollectedCharges": {
            "ebayShipping": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            }
          },
          "giftDetails": {
            "message": "string",
            "recipientEmail": "string",
            "senderName": "string"
          },
          "itemLocation": {
            "countryCode": "string",
            "location": "string",
            "postalCode": "string"
          },
          "legacyItemId": "string",
          "legacyVariationId": "string",
          "lineItemCost": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "lineItemFulfillmentInstructions": {
            "guaranteedDelivery": true,
            "maxEstimatedDeliveryDate": "string",
            "minEstimatedDeliveryDate": "string",
            "shipByDate": "string"
          },
          "lineItemFulfillmentStatus": "string",
          "lineItemId": "string",
          "linkedOrderLineItems": [
            {
              "lineItemAspects": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "lineItemId": "string",
              "maxEstimatedDeliveryDate": "string",
              "minEstimatedDeliveryDate": "string",
              "orderId": "string",
              "sellerId": "string",
              "shipments": [
                {
                  "shipmentTrackingNumber": "string",
                  "shippingCarrierCode": "string"
                }
              ],
              "title": "string"
            }
          ],
          "listingMarketplaceId": "string",
          "properties": {
            "buyerProtection": true,
            "fromBestOffer": true,
            "soldViaAdCampaign": true
          },
          "purchaseMarketplaceId": "string",
          "quantity": 0,
          "refunds": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "refundDate": "string",
              "refundId": "string",
              "refundReferenceId": "string"
            }
          ],
          "sku": "string",
          "soldFormat": "string",
          "taxes": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "taxType": "string"
            }
          ],
          "title": "string",
          "total": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "variationAspects": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "orderFulfillmentStatus": "string",
      "orderId": "string",
      "orderPaymentStatus": "string",
      "paymentSummary": {
        "payments": [
          {
            "amount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "paymentDate": "string",
            "paymentHolds": [
              {
                "expectedReleaseDate": "string",
                "holdAmount": {
                  "convertedFromCurrency": "string",
                  "convertedFromValue": "string",
                  "currency": "string",
                  "value": "string"
                },
                "holdReason": "string",
                "holdState": "string",
                "releaseDate": "string",
                "sellerActionsToRelease": [
                  {
                    "sellerActionToRelease": "string"
                  }
                ]
              }
            ],
            "paymentMethod": "string",
            "paymentReferenceId": "string",
            "paymentStatus": "string"
          }
        ],
        "refunds": [
          {
            "amount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "refundDate": "string",
            "refundId": "string",
            "refundReferenceId": "string",
            "refundStatus": "string"
          }
        ],
        "totalDueSeller": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "pricingSummary": {
        "adjustment": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "deliveryCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "deliveryDiscount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "fee": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "priceDiscount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "priceSubtotal": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "tax": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "total": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "program": {
        "authenticityVerification": {
          "outcomeReason": "string",
          "status": "string"
        },
        "ebayInternationalShipping": {
          "returnsManagedBy": "string"
        },
        "ebayShipping": {
          "shippingLabelProvidedBy": "string"
        },
        "ebayVault": {
          "fulfillmentType": "string"
        },
        "fulfillmentProgram": {
          "fulfilledBy": "string"
        }
      },
      "salesRecordReference": "string",
      "sellerId": "string",
      "totalFeeBasisAmount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "totalMarketplaceFee": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      }
    }
  ],
  "prev": "string",
  "total": 0,
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

<h3 id="getorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[OrderSearchPagedCollection](#schemaordersearchpagedcollection)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly )
</aside>

## getOrder

<a id="opIdgetOrder"></a>

> Code samples

```bash
curl https://api.ebay.com/order/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /order/{orderId}`

Use this call to retrieve the contents of an order based on its unique identifier, <i>orderId</i>. This value was returned in the <b> getOrders</b> call's <b>orders.orderId</b> field when you searched for orders by creation date, modification date, or fulfillment status. Include the optional <b>fieldGroups</b> query parameter set to <code>TAX_BREAKDOWN</code> to return a breakdown of the taxes and fees. <br><br> The returned <b>Order</b> object contains information you can use to create and process fulfillments, including: <ul> <li>Information about the buyer and seller</li> <li>Information about the order's line items</li> <li> The plans for packaging, addressing and shipping the order</li> <li>The status of payment, packaging, addressing, and shipping the order</li> <li>A summary of monetary amounts specific to the order such as pricing, payments, and shipping costs</li> <li>A summary of applied taxes and fees, and optionally a breakdown of each </li></ul>

<h3 id="getorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fieldGroups|query|string|false|The response type associated with the order. The only presently supported value is <code>TAX_BREAKDOWN</code>. This type returns a breakdown of tax and fee values associated with the order.|
|orderId|path|string|true|The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.<span class="tablenote"><strong>Note:</strong> <b>getOrders</b> can return orders up to two years old. Do not provide the orderId for an order created more than two years in the past.</span>|

> Example responses

> 200 Response

```json
{
  "buyer": {
    "buyerRegistrationAddress": {
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
      "email": "string",
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    },
    "taxAddress": {
      "city": "string",
      "countryCode": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "taxIdentifier": {
      "issuingCountry": "string",
      "taxIdentifierType": "string",
      "taxpayerId": "string"
    },
    "username": "string"
  },
  "buyerCheckoutNotes": "string",
  "cancelStatus": {
    "cancelRequests": [
      {
        "cancelCompletedDate": "string",
        "cancelInitiator": "string",
        "cancelReason": "string",
        "cancelRequestId": "string",
        "cancelRequestState": "string",
        "cancelRequestedDate": "string"
      }
    ],
    "cancelState": "string",
    "cancelledDate": "string"
  },
  "creationDate": "string",
  "ebayCollectAndRemitTax": true,
  "fulfillmentHrefs": [
    "string"
  ],
  "fulfillmentStartInstructions": [
    {
      "ebaySupportedFulfillment": true,
      "finalDestinationAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "countryCode": "string",
        "county": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "fulfillmentInstructionsType": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "pickupStep": {
        "merchantLocationKey": "string"
      },
      "shippingStep": {
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
          "email": "string",
          "fullName": "string",
          "primaryPhone": {
            "phoneNumber": "string"
          }
        },
        "shipToReferenceId": "string",
        "shippingCarrierCode": "string",
        "shippingServiceCode": "string"
      }
    }
  ],
  "lastModifiedDate": "string",
  "legacyOrderId": "string",
  "lineItems": [
    {
      "appliedPromotions": [
        {
          "description": "string",
          "discountAmount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "promotionId": "string"
        }
      ],
      "deliveryCost": {
        "discountAmount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "handlingCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "importCharges": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "shippingCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "shippingIntermediationFee": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "discountedLineItemCost": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "ebayCollectAndRemitTaxes": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "collectionMethod": "string",
          "ebayReference": {
            "name": "string",
            "value": "string"
          },
          "taxType": "string"
        }
      ],
      "ebayCollectedCharges": {
        "ebayShipping": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "giftDetails": {
        "message": "string",
        "recipientEmail": "string",
        "senderName": "string"
      },
      "itemLocation": {
        "countryCode": "string",
        "location": "string",
        "postalCode": "string"
      },
      "legacyItemId": "string",
      "legacyVariationId": "string",
      "lineItemCost": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "lineItemFulfillmentInstructions": {
        "guaranteedDelivery": true,
        "maxEstimatedDeliveryDate": "string",
        "minEstimatedDeliveryDate": "string",
        "shipByDate": "string"
      },
      "lineItemFulfillmentStatus": "string",
      "lineItemId": "string",
      "linkedOrderLineItems": [
        {
          "lineItemAspects": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "lineItemId": "string",
          "maxEstimatedDeliveryDate": "string",
          "minEstimatedDeliveryDate": "string",
          "orderId": "string",
          "sellerId": "string",
          "shipments": [
            {
              "shipmentTrackingNumber": "string",
              "shippingCarrierCode": "string"
            }
          ],
          "title": "string"
        }
      ],
      "listingMarketplaceId": "string",
      "properties": {
        "buyerProtection": true,
        "fromBestOffer": true,
        "soldViaAdCampaign": true
      },
      "purchaseMarketplaceId": "string",
      "quantity": 0,
      "refunds": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "refundDate": "string",
          "refundId": "string",
          "refundReferenceId": "string"
        }
      ],
      "sku": "string",
      "soldFormat": "string",
      "taxes": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "taxType": "string"
        }
      ],
      "title": "string",
      "total": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "variationAspects": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "orderFulfillmentStatus": "string",
  "orderId": "string",
  "orderPaymentStatus": "string",
  "paymentSummary": {
    "payments": [
      {
        "amount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "paymentDate": "string",
        "paymentHolds": [
          {
            "expectedReleaseDate": "string",
            "holdAmount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "holdReason": "string",
            "holdState": "string",
            "releaseDate": "string",
            "sellerActionsToRelease": [
              {
                "sellerActionToRelease": "string"
              }
            ]
          }
        ],
        "paymentMethod": "string",
        "paymentReferenceId": "string",
        "paymentStatus": "string"
      }
    ],
    "refunds": [
      {
        "amount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "refundDate": "string",
        "refundId": "string",
        "refundReferenceId": "string",
        "refundStatus": "string"
      }
    ],
    "totalDueSeller": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "pricingSummary": {
    "adjustment": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "deliveryCost": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "deliveryDiscount": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "fee": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "priceDiscount": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "priceSubtotal": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "tax": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "total": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "program": {
    "authenticityVerification": {
      "outcomeReason": "string",
      "status": "string"
    },
    "ebayInternationalShipping": {
      "returnsManagedBy": "string"
    },
    "ebayShipping": {
      "shippingLabelProvidedBy": "string"
    },
    "ebayVault": {
      "fulfillmentType": "string"
    },
    "fulfillmentProgram": {
      "fulfilledBy": "string"
    }
  },
  "salesRecordReference": "string",
  "sellerId": "string",
  "totalFeeBasisAmount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "totalMarketplaceFee": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

<h3 id="getorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Order](#schemaorder)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly )
</aside>

## Issue Refund

<a id="opIdissueRefund"></a>

> Code samples

```bash
curl https://api.ebay.com/order/string/issue_refund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "orderLevelRefundAmount": {
      "currency": "string",
      "value": "string"
    },
    "reasonForRefund": "string",
    "refundItems": [
      {
        "legacyReference": {
          "legacyItemId": "string",
          "legacyTransactionId": "string"
        },
        "lineItemId": "string",
        "refundAmount": {
          "currency": "string",
          "value": "string"
        }
      }
    ]
  }'
```

`POST /order/{order_id}/issue_refund`

<div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span> Due to EU &amp; UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made on behalf of EU/UK sellers, including <b>issueRefund</b>. Please refer to <a href="/develop/guides/digital-signatures-for-apis " target="_blank">Digital Signatures for APIs</a> to learn more on the impacted APIs and the process to create signatures to be included in the HTTP payload.</p></div><br> This method allows a seller to issue a full or partial refund to a buyer for an order. Full or partial refunds can be issued at the order level or line item level.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response.

> Body parameter

```json
{
  "comment": "string",
  "orderLevelRefundAmount": {
    "currency": "string",
    "value": "string"
  },
  "reasonForRefund": "string",
  "refundItems": [
    {
      "legacyReference": {
        "legacyItemId": "string",
        "legacyTransactionId": "string"
      },
      "lineItemId": "string",
      "refundAmount": {
        "currency": "string",
        "value": "string"
      }
    }
  ]
}
```

<h3 id="issue-refund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|The unique identifier of the order. Order IDs are returned in the <b>getOrders</b> method (and <b>GetOrders</b> call of Trading API). The <b>issueRefund</b> method supports the legacy API Order IDs and REST API order IDs.|
|body|body|[IssueRefundRequest](#schemaissuerefundrequest)|false|none|
|» comment|body|string|false|This free-text field allows the seller to clarify why the refund is being issued to the buyer.<br><br><b>Max Length</b>: 100|
|» orderLevelRefundAmount|body|[SimpleAmount](#schemasimpleamount)|false|This container is used to specify the amount of the refund for the entire order. If a seller wants to issue a refund for an individual line item within a multiple line item order, the seller would use the <b>refundItems</b> array instead.|
|» reasonForRefund|body|string|false|The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the <b>ReasonForRefundEnum</b> type must be used.<br><br>This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or 'buyer remorse' return to indicate that there was nothing wrong with the item(s) or with the shipment of the order.<br><br><span class="tablenote"><strong>Note:</strong> If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate <b>issueRefund</b> calls, one for each refund reason. </span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum'>eBay API documentation</a>|
|» refundItems|body|[[RefundItem](#schemarefunditem)]|false|The <b>refundItems</b> array is only required if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order.|

> Example responses

> 200 Response

```json
{
  "refundId": "string",
  "refundStatus": "string"
}
```

<h3 id="issue-refund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Refund](#schemarefund)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Access Forbidden|None|
|404|Not Found|Resource Not found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.finances )
</aside>

<h1 id="fulfillment-api-shippingfulfillment">shipping_fulfillment</h1>

## getShippingFulfillments

<a id="opIdgetShippingFulfillments"></a>

> Code samples

```bash
curl https://api.ebay.com/order/string/shipping_fulfillment \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /order/{orderId}/shipping_fulfillment`

Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, <b>orderId</b>. This value is returned in the <b>getOrders</b> call's <b>members.orderId</b> field when you search for orders by creation date or shipment status.

<h3 id="getshippingfulfillments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string|true|The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.|

> Example responses

> 200 Response

```json
{
  "fulfillments": [
    {
      "fulfillmentId": "string",
      "lineItems": [
        {
          "lineItemId": "string",
          "quantity": 0
        }
      ],
      "shipmentTrackingNumber": "string",
      "shippedDate": "string",
      "shippingCarrierCode": "string"
    }
  ],
  "total": 0,
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

<h3 id="getshippingfulfillments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ShippingFulfillmentPagedCollection](#schemashippingfulfillmentpagedcollection)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly )
</aside>

## createShippingFulfillment

<a id="opIdcreateShippingFulfillment"></a>

> Code samples

```bash
curl https://api.ebay.com/order/string/shipping_fulfillment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "lineItems": [
      {
        "lineItemId": "string",
        "quantity": 0
      }
    ],
    "shippedDate": "string",
    "shippingCarrierCode": "string",
    "trackingNumber": "string"
  }'
```

`POST /order/{orderId}/shipping_fulfillment`

When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a <i>shipping fulfillment</i>. For each package, execute this call once to generate a shipping fulfillment associated with that package. <br><br> <span class="tablenote"><strong>Note:</strong> A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.</span> <br><br>Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.

> Body parameter

```json
{
  "lineItems": [
    {
      "lineItemId": "string",
      "quantity": 0
    }
  ],
  "shippedDate": "string",
  "shippingCarrierCode": "string",
  "trackingNumber": "string"
}
```

<h3 id="createshippingfulfillment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string|true|The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.|
|body|body|[ShippingFulfillmentDetails](#schemashippingfulfillmentdetails)|true|fulfillment payload|
|» lineItems|body|[[LineItemReference](#schemalineitemreference)]|false|This array contains a list of or more line items and the quantity that will be shipped in the same package.|
|» shippedDate|body|string|false|This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code><br><br><b>Default:</b> The current date and time.|
|» shippingCarrierCode|body|string|false|The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the <strong>shippingCarrierCode</strong> and <strong>trackingNumber</strong> fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. <br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier enumeration values. When making the <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingCarrierDetails</code>. Each valid shipping carrier enumeration value is returned in a <strong>ShippingCarrierDetails.ShippingCarrier</strong> field in the response payload.</span>|
|» trackingNumber|body|string|false|The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.<br><br>This field and the <b>shippingCarrierCode</b> field are mutually dependent. If you include one, you must also include the other.<br><br><span class="tablenote"><strong>Note:</strong> If you include <b>trackingNumber</b> (and <b>shippingCarrierCode</b>) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as <code>999</code>.</span><br><span class="tablenote"><strong>Note:</strong> Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.</span>|

> Example responses

> 201 Response

```json
{}
```

<h3 id="createshippingfulfillment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created. The call also returns the following location code: <br><br><code>{ENV}/sell/fulfillment/v1/order/{ORDERID}/shipping_fulfillment/{FULFILLMENTID}</code> <br><br>The <code>ENV</code> string is the HTTPS path to the same eBay supported environment in which this call was issued. The <code>ORDERID</code> parameter is the unique identifier of the order addressed by this call; for example, <code>01-03955-36441</code>. The <code>FULFILLMENTID</code> parameter identifies the newly created fulfillment; for example, <code>9405509699937003457459</code>. Use this Get Fulfillment URI to retrieve the contents of the new fulfillment.|Inline|
|400|Bad Request|Bad Request|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.fulfillment )
</aside>

## getShippingFulfillment

<a id="opIdgetShippingFulfillment"></a>

> Code samples

```bash
curl https://api.ebay.com/order/string/shipping_fulfillment/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /order/{orderId}/shipping_fulfillment/{fulfillmentId}`

Use this call to retrieve the contents of a fulfillment based on its unique identifier, <b>fulfillmentId</b> (combined with the associated order's <b>orderId</b>). The <b>fulfillmentId</b> value was originally generated by the <b>createShippingFulfillment</b> call, and is returned by the <b>getShippingFulfillments</b> call in the <b>members.fulfillmentId</b> field.

<h3 id="getshippingfulfillment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fulfillmentId|path|string|true|The unique identifier of the fulfillment. This eBay-generated value was created by the <b>Create Shipping Fulfillment</b> call, and returned by the <b>getShippingFulfillments</b> call in the <b>fulfillments.fulfillmentId</b> field; for example, <code>9405509699937003457459</code>.|
|orderId|path|string|true|The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.|

> Example responses

> 200 Response

```json
{
  "fulfillmentId": "string",
  "lineItems": [
    {
      "lineItemId": "string",
      "quantity": 0
    }
  ],
  "shipmentTrackingNumber": "string",
  "shippedDate": "string",
  "shippingCarrierCode": "string"
}
```

<h3 id="getshippingfulfillment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ShippingFulfillment](#schemashippingfulfillment)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly )
</aside>

<h1 id="fulfillment-api-paymentdispute">payment_dispute</h1>

## Get Payment Dispute Details

<a id="opIdgetPaymentDispute"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_dispute/{payment_dispute_id}`

This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI.<br><br>Below is a summary of the information that is retrieved:<ul><li>Current status of payment dispute</li><li>Amount of the payment dispute</li><li>Reason the payment dispute was opened</li><li>Order and line items associated with the payment dispute</li><li>Seller response options if an action is currently required on the payment dispute</li><li>Details on the results of the payment dispute if it has been closed</li><li>Details on any evidence that was provided by the seller to fight the payment dispute</li></ul>

<h3 id="get-payment-dispute-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute to retrieve. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "availableChoices": [
    "string"
  ],
  "buyerProvided": {
    "note": "string",
    "returnShipmentTracking": [
      {
        "shipmentTrackingNumber": "string",
        "shippingCarrierCode": "string"
      }
    ]
  },
  "buyerUsername": "string",
  "closedDate": "string",
  "evidence": [
    {
      "evidenceId": "string",
      "evidenceType": "string",
      "files": [
        {
          "fileId": "string",
          "fileType": "string",
          "name": "string",
          "uploadedDate": "string"
        }
      ],
      "lineItems": [
        {
          "itemId": "string",
          "lineItemId": "string"
        }
      ],
      "providedDate": "string",
      "requestDate": "string",
      "respondByDate": "string",
      "shipmentTracking": [
        {
          "shipmentTrackingNumber": "string",
          "shippingCarrierCode": "string"
        }
      ]
    }
  ],
  "evidenceRequests": [
    {
      "evidenceId": "string",
      "evidenceType": "string",
      "lineItems": [
        {
          "itemId": "string",
          "lineItemId": "string"
        }
      ],
      "requestDate": "string",
      "respondByDate": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ],
  "monetaryTransactions": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "exchangeRate": "string",
        "value": "string"
      },
      "date": "string",
      "reason": "string",
      "type": "string"
    }
  ],
  "note": "string",
  "openDate": "string",
  "orderId": "string",
  "paymentDisputeId": "string",
  "paymentDisputeStatus": "string",
  "reason": "string",
  "resolution": {
    "fees": {
      "currency": "string",
      "value": "string"
    },
    "protectedAmount": {
      "currency": "string",
      "value": "string"
    },
    "protectionStatus": "string",
    "reasonForClosure": "string",
    "recoupAmount": {
      "currency": "string",
      "value": "string"
    },
    "totalFeeCredit": {
      "currency": "string",
      "value": "string"
    }
  },
  "respondByDate": "string",
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0,
  "sellerResponse": "string"
}
```

<h3 id="get-payment-dispute-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentDispute](#schemapaymentdispute)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Invalid Payment Dispute Id|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Accept Payment Dispute

<a id="opIdacceptPaymentDispute"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "returnAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "fullName": "string",
      "postalCode": "string",
      "primaryPhone": {
        "countryCode": "string",
        "number": "string"
      },
      "stateOrProvince": "string"
    },
    "revision": 0
  }'
```

`POST /payment_dispute/{payment_dispute_id}/accept`

This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.

> Body parameter

```json
{
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0
}
```

<h3 id="accept-payment-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to accept. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|
|body|body|[AcceptPaymentDisputeRequest](#schemaacceptpaymentdisputerequest)|false|none|
|» returnAddress|body|[ReturnAddress](#schemareturnaddress)|false|This container is used if the seller wishes to provide a return address to the buyer. This container should be used if the seller is requesting that the buyer return the item.|
|» revision|body|integer(int32)|false|This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.|

<h3 id="accept-payment-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Get Payment Dispute Activity

<a id="opIdgetActivities"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/activity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_dispute/{payment_dispute_id}/activity`

This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.

<h3 id="get-payment-dispute-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed in at the end of the call URI to identify the payment dispute for which the user wishes to see all activity. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|

> Example responses

> 200 Response

```json
{
  "activity": [
    {
      "activityDate": "string",
      "activityType": "string",
      "actor": "string"
    }
  ]
}
```

<h3 id="get-payment-dispute-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PaymentDisputeActivityHistory](#schemapaymentdisputeactivityhistory)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Invalid Payment Dispute Id|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Add an Evidence File

<a id="opIdaddEvidence"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/add_evidence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "evidenceType": "string",
    "files": [
      {
        "fileId": "string"
      }
    ],
    "lineItems": [
      {
        "itemId": "string",
        "lineItemId": "string"
      }
    ]
  }'
```

`POST /payment_dispute/{payment_dispute_id}/add_evidence`

This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The file(s) to add are identified through the <strong>files</strong> array in the request payload.  Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the <strong>evidenceId</strong> field of the <strong>addEvidence</strong> response payload upon a successful call.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field. All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an <strong>evidenceId</strong> value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the <strong>fileId</strong> array. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method.

> Body parameter

```json
{
  "evidenceType": "string",
  "files": [
    {
      "fileId": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ]
}
```

<h3 id="add-an-evidence-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to add evidence for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|
|body|body|[AddEvidencePaymentDisputeRequest](#schemaaddevidencepaymentdisputerequest)|false|none|
|» evidenceType|body|string|false|This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|» files|body|[[FileEvidence](#schemafileevidence)]|false|This array is used to specify one or more evidence files that will become part of a new evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method.|
|» lineItems|body|[[OrderLineItems](#schemaorderlineitems)]|false|This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response.|

> Example responses

> 200 Response

```json
{
  "evidenceId": "string"
}
```

<h3 id="add-an-evidence-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddEvidencePaymentDisputeResponse](#schemaaddevidencepaymentdisputeresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Contest Payment Dispute

<a id="opIdcontestPaymentDispute"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/contest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "string",
    "returnAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "fullName": "string",
      "postalCode": "string",
      "primaryPhone": {
        "countryCode": "string",
        "number": "string"
      },
      "stateOrProvince": "string"
    },
    "revision": 0
  }'
```

`POST /payment_dispute/{payment_dispute_id}/contest`

This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> Before contesting a payment dispute, the seller must upload all supporting files using the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong>), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of supporting file(s) that will be needed to contest the payment dispute.</span><br><br>If a seller decides to contest a payment dispute, that seller should be prepared to provide supporting documents such as proof of delivery, proof of authentication, or other documents. The type of supporting documents that the seller will provide will depend on why the buyer filed the payment dispute.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on these fields.

> Body parameter

```json
{
  "note": "string",
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0
}
```

<h3 id="contest-payment-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to contest. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|
|body|body|[ContestPaymentDisputeRequest](#schemacontestpaymentdisputerequest)|false|none|
|» note|body|string|false|This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters.|
|» returnAddress|body|[ReturnAddress](#schemareturnaddress)|false|This container is needed if the seller is requesting that the buyer return the item. If this container is used, all relevant fields must be included, including <strong>fullName</strong> and <strong>primaryPhone</strong>.|
|» revision|body|integer(int32)|false|This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.|

<h3 id="contest-payment-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Get Payment Dispute Evidence File

<a id="opIdfetchEvidenceContent"></a>

> Code samples

```bash
curl 'https://api.ebay.com/payment_dispute/string/fetch_evidence_content?evidence_id=string&file_id=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_dispute/{payment_dispute_id}/fetch_evidence_content`

This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI:<ul><li><strong>payment_dispute_id</strong>: the identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response.</li><li><strong>evidence_id</strong>: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.</li><li><strong>file_id</strong>: the identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response.</li></ul><p>An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.</p>

<h3 id="get-payment-dispute-evidence-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|The identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response. This identifier is passed in as a path parameter at the end of the call URI.|
|evidence_id|query|string|true|The identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.<br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>evidence_id=12345678</code>|
|file_id|query|string|true|The identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response. <br><br>Below is an example of the syntax to use for this query parameter:<br><br><code>file_id=12345678</code> |

<h3 id="get-payment-dispute-evidence-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Invalid Payment Dispute Id|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-payment-dispute-evidence-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Update evidence

<a id="opIdupdateEvidence"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/update_evidence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "evidenceId": "string",
    "evidenceType": "string",
    "files": [
      {
        "fileId": "string"
      }
    ],
    "lineItems": [
      {
        "itemId": "string",
        "lineItemId": "string"
      }
    ]
  }'
```

`POST /payment_dispute/{payment_dispute_id}/update_evidence`

This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The unique identifier of the evidence set to update is specified through the <strong>evidenceId</strong> field, and the file(s) to add are identified through the <strong>files</strong> array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the <strong>fileId</strong> field of the <strong>uploadEvidence</strong> response payload upon a successful call. Sellers must make sure to capture the <strong>fileId</strong> value for each evidence file that is uploaded with the <strong>uploadEvidence</strong> method.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field.  All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an http status code of <code>204 Success</code> is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the <strong>fetchEvidenceContent</strong> method, passing in the proper <strong>evidenceId</strong> and <strong>fileId</strong> values.

> Body parameter

```json
{
  "evidenceId": "string",
  "evidenceType": "string",
  "files": [
    {
      "fileId": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ]
}
```

<h3 id="update-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to update the evidence set for a contested payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|
|body|body|[UpdateEvidencePaymentDisputeRequest](#schemaupdateevidencepaymentdisputerequest)|false|none|
|» evidenceId|body|string|false|The unique identifier of the evidence set that is being updated with new evidence files.|
|» evidenceType|body|string|false|This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|» files|body|[[FileEvidence](#schemafileevidence)]|false|This array is used to specify one or more evidence files that will be added to the evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method.|
|» lineItems|body|[[OrderLineItems](#schemaorderlineitems)]|false|This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response.|

<h3 id="update-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Upload an Evidence File

<a id="opIduploadEvidenceFile"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute/string/upload_evidence_file \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /payment_dispute/{payment_dispute_id}/upload_evidence_file`

This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> The <strong>uploadEvidenceFile</strong> only uploads an encrypted, binary image file (using <strong>multipart/form-data</strong> HTTP request header), and does not have a JSON-based request payload.<br><br>Use 'file' as the name of the key that you use to upload the image file. The upload will not be successful if a different key name is used.<br><br>The three image formats supported at this time are <strong>.JPEG</strong>, <strong>.JPG</strong>, and <strong>.PNG</strong>.</span><br><br>After the file is successfully uploaded, the seller will need to grab the <strong>fileId</strong> value in the response payload to add this file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.

<h3 id="upload-an-evidence-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payment_dispute_id|path|string|true|This is the unique identifier of the payment dispute. This path parameter must be passed into the call URI to identify the payment dispute for which the user plans to upload an evidence file. This identifier is automatically created by eBay after the payment dispute comes into the eBay system. The unique identifier for payment disputes is returned in the <strong>paymentDisputeId</strong> field in the <strong>getPaymentDisputeSummaries</strong> response.<br><br>This path parameter is required, and the actual identifier value is passed in right after the <strong>payment_dispute</strong> resource. See the Resource URI above.|

> Example responses

> 200 Response

```json
{
  "fileId": "string"
}
```

<h3 id="upload-an-evidence-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FileEvidence](#schemafileevidence)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

## Search Payment Dispute by Filters

<a id="opIdgetPaymentDisputeSummaries"></a>

> Code samples

```bash
curl https://api.ebay.com/payment_dispute_summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_dispute_summary`

This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned:<ul><li>Dispute filed against a specific order (<b>order_id</b> parameter is used)</li><li>Dispute(s) filed by a specific buyer (<b>buyer_username</b> parameter is used)</li><li>Dispute(s) filed within a specific date range (<b>open_date_from</b> and/or <b>open_date_to</b> parameters are used)</li><li>Disputes in a specific state (<b>payment_dispute_status</b> parameter is used)</li></ul>More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used.<br><br>If none of the filters are used, all open and recently closed payment disputes are returned.<br><br>Pagination is also available. See the <b>limit</b> and <b>offset</b> fields for more information on how pagination is used for this method.

<h3 id="search-payment-dispute-by-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|query|string|false|This filter is used if the seller wishes to retrieve one or more payment disputes filed against a specific order. It is possible that there can be more than one dispute filed against an order if the order has multiple line items. If this filter is used, any other filters are ignored.|
|buyer_username|query|string|false|This filter is used if the seller wishes to retrieve one or more payment disputes opened by a specific seller. The string that is passed in to this query parameter is the eBay user ID of the buyer.|
|open_date_from|query|string|false|The <b>open_date_from</b> and/or <b>open_date_to</b> date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the <b>open_date_from</b> and/or <b>open_date_to</b> filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu.<br><br>The <b>open_date_from</b> field sets the beginning date of the date range, and can be set as far back as 18 months from the present time. If a <b>open_date_from</b> field is used, but a <b>open_date_to</b> field is not used, the <b>open_date_to</b> value will default to 90 days after the date specified in the <b>open_date_from</b> field, or to the present time if less than 90 days in the past.<br><br>The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|open_date_to|query|string|false|The <b>open_date_from</b> and/or <b>open_date_to</b> date filters are used if the seller wishes to retrieve payment disputes opened within a specific date range. A maximum date range that may be set with the <b>open_date_from</b> and/or <b>open_date_to</b> filters is 90 days. These date filters use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu.<br><br>The <b>open_date_to</b> field sets the ending date of the date range, and can be set up to 90 days from the date set in the <b>open_date_from</b> field. <br><br>The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|payment_dispute_status|query|string|false|This filter is used if the seller wishes to only retrieve payment disputes in a specific state. More than one value can be specified. If no <b>payment_dispute_status</b> filter is used, payment disputes in all states are returned in the response. See <strong>DisputeStateEnum</strong> type for supported values.|
|limit|query|string|false|The value passed in this query parameter sets the maximum number of payment disputes to return per page of data. The value passed in this field should be an integer from 1 to 200. If this query parameter is not set, up to 200 records will be returned on each page of results.<br><br><b>Min</b>: 1; <b>Max</b>: 200; <b>Default</b>: 200|
|offset|query|string|false|This field is used to specify the number of records to skip in the result set before returning the first payment dispute in the paginated response. A zero-based index is used, so if you set the <b>offset</b> value to <code>0</code> (default value), the first payment dispute in the result set appears at the top of the response. <br><br>Combine <b>offset</b> with the <b>limit</b> parameter to control the payment disputes returned in the response. For example, if you supply an <b>offset</b> value of <code>0</code> and a <b>limit</b> value of <code>10</code>, the response will contain the first 10 payment disputes from the result set that matches the input criteria. If you supply an <b>offset</b> value of <code>10</code> and a <b>limit</b> value of <code>20</code>, the response will contain payment disputes 11-30 from the result set that matches the input criteria.<br><br><b>Min</b>: 0; <b>Max</b>: total number of payment disputes - 1; <b>Default</b>: 0|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "paymentDisputeSummaries": [
    {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "buyerUsername": "string",
      "closedDate": "string",
      "openDate": "string",
      "orderId": "string",
      "paymentDisputeId": "string",
      "paymentDisputeStatus": "string",
      "reason": "string",
      "respondByDate": "string"
    }
  ],
  "prev": "string",
  "total": 0
}
```

<h3 id="search-payment-dispute-by-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisputeSummaryResponse](#schemadisputesummaryresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.payment.dispute )
</aside>

# Schemas

<h2 id="tocS_AcceptPaymentDisputeRequest">AcceptPaymentDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptpaymentdisputerequest"></a>
<a id="schema_AcceptPaymentDisputeRequest"></a>
<a id="tocSacceptpaymentdisputerequest"></a>
<a id="tocsacceptpaymentdisputerequest"></a>

```json
{
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0
}
```

This type is used by base request of the <strong>acceptPaymentDispute</strong> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnAddress|[ReturnAddress](#schemareturnaddress)|false|none|This container is used if the seller wishes to provide a return address to the buyer. This container should be used if the seller is requesting that the buyer return the item.|
|revision|integer(int32)|false|none|This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.|

<h2 id="tocS_AddEvidencePaymentDisputeRequest">AddEvidencePaymentDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddevidencepaymentdisputerequest"></a>
<a id="schema_AddEvidencePaymentDisputeRequest"></a>
<a id="tocSaddevidencepaymentdisputerequest"></a>
<a id="tocsaddevidencepaymentdisputerequest"></a>

```json
{
  "evidenceType": "string",
  "files": [
    {
      "fileId": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ]
}
```

This type is used by the request payload of the <strong>addEvidence</strong> method. The <strong>addEvidence</strong> method is used to create a new evidence set against a payment dispute with one or more evidence files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceType|string|false|none|This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|files|[[FileEvidence](#schemafileevidence)]|false|none|This array is used to specify one or more evidence files that will become part of a new evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method.|
|lineItems|[[OrderLineItems](#schemaorderlineitems)]|false|none|This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response.|

<h2 id="tocS_AddEvidencePaymentDisputeResponse">AddEvidencePaymentDisputeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddevidencepaymentdisputeresponse"></a>
<a id="schema_AddEvidencePaymentDisputeResponse"></a>
<a id="tocSaddevidencepaymentdisputeresponse"></a>
<a id="tocsaddevidencepaymentdisputeresponse"></a>

```json
{
  "evidenceId": "string"
}
```

This type is used by the response payload of the <strong>addEvidence</strong> method. Its only field is an unique identifier of an evidence set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceId|string|false|none|The value returned in this field is the unique identifier of the newly-created evidence set. Upon a successful call, this value is automatically genererated. This new evidence set for the payment dispute includes the evidence file(s) that were passed in to the <strong>fileId</strong> array in the request payload. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method.|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

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

This type contains the details of a geographical address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|The first line of the street address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine1</b> will not be returned for any order that is more than 90 days old.</span>|
|addressLine2|string|false|none|The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.<br><br><span class="tablenote"><strong>Note:</strong> <b>addressLine2</b> will not be returned for any order that is more than 90 days old.</span><br><span class="tablenote"><b>Note:</b> As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information. To determine line-item level VAT tax information, refer to <a href="#response.orders.lineItems.ebayCollectAndRemitTaxes.ebayReference">eBayReference</a>.</span>|
|city|string|false|none|The city of the shipping destination.|
|countryCode|string|false|none|The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <code>US</code> represents the United States, and <code>DE</code> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|county|string|false|none|The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available.|
|postalCode|string|false|none|The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable.|
|stateOrProvince|string|false|none|The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "convertedFromCurrency": "string",
  "convertedFromValue": "string",
  "currency": "string",
  "value": "string"
}
```

This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertedFromCurrency|string|false|none|A three-letter ISO 4217 code that indicates the currency of the amount in the <b>convertedFromValue</b> field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|convertedFromValue|string|false|none|The monetary amount before any conversion is performed, in the currency specified by the <b>convertedFromCurrency</b> field. This value is required or returned only if currency conversion/localization is required. The <b>value</b> field contains the converted amount of this value, in the currency specified by the <b>currency</b> field.|
|currency|string|false|none|A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the <b>value</b> field.<br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount, in the currency specified by the <b>currency</b> field. If currency conversion/localization is required, this value is the converted amount, and the <b>convertedFromValue</b> field contains the amount in the original currency.  <br><br><i>Required in</i> the <b>amount</b> type.|

<h2 id="tocS_AppliedPromotion">AppliedPromotion</h2>
<!-- backwards compatibility -->
<a id="schemaappliedpromotion"></a>
<a id="schema_AppliedPromotion"></a>
<a id="tocSappliedpromotion"></a>
<a id="tocsappliedpromotion"></a>

```json
{
  "description": "string",
  "discountAmount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "promotionId": "string"
}
```

This type contains information about a sales promotion that is applied to a line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the applied sales promotion.|
|discountAmount|[Amount](#schemaamount)|false|none|The monetary amount of the sales promotion.|
|promotionId|string|false|none|An eBay-generated unique identifier of the sales promotion.<br><br> Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API's <b>SetPromotionalSale</b> call or the Marketing API's <b>createItemPromotion</b> method.|

<h2 id="tocS_Buyer">Buyer</h2>
<!-- backwards compatibility -->
<a id="schemabuyer"></a>
<a id="schema_Buyer"></a>
<a id="tocSbuyer"></a>
<a id="tocsbuyer"></a>

```json
{
  "buyerRegistrationAddress": {
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
    "email": "string",
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "taxAddress": {
    "city": "string",
    "countryCode": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "taxIdentifier": {
    "issuingCountry": "string",
    "taxIdentifierType": "string",
    "taxpayerId": "string"
  },
  "username": "string"
}
```

This type contains information about the order's buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerRegistrationAddress|[ExtendedContact](#schemaextendedcontact)|false|none|Buyer's contact information that includes the buyer's name, email, phone number, and address.|
|taxAddress|[TaxAddress](#schemataxaddress)|false|none|This container consists of address information that can be used by sellers for tax purpose.<br><br><span class="tablenote"><strong>Note:</strong> When using the eBay vault program, if an item is shipped to a vault, the tax address will be the vault address.</span>|
|taxIdentifier|[TaxIdentifier](#schemataxidentifier)|false|none|This container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span>|
|username|string|false|none|The buyer's eBay user ID.|

<h2 id="tocS_CancelRequest">CancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelrequest"></a>
<a id="schema_CancelRequest"></a>
<a id="tocScancelrequest"></a>
<a id="tocscancelrequest"></a>

```json
{
  "cancelCompletedDate": "string",
  "cancelInitiator": "string",
  "cancelReason": "string",
  "cancelRequestId": "string",
  "cancelRequestState": "string",
  "cancelRequestedDate": "string"
}
```

This type contains information about a buyer request to cancel an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelCompletedDate|string|false|none|The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|cancelInitiator|string|false|none|This string value indicates the party who made the initial cancellation request. Typically, either the 'Buyer' or 'Seller'. If a cancellation request has been made, this field should be returned.|
|cancelReason|string|false|none|The reason why the <b>cancelInitiator</b> initiated the cancellation request. Cancellation reasons for a buyer might include 'order placed by mistake' or 'order won't arrive in time'. For a seller, a typical cancellation reason is 'out of stock'. If a cancellation request has been made, this field should be returned.|
|cancelRequestId|string|false|none|The unique identifier of the order cancellation request. This field is returned for each cancellation request.|
|cancelRequestState|string|false|none|The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum'>eBay API documentation</a>|
|cancelRequestedDate|string|false|none|The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|

<h2 id="tocS_CancelStatus">CancelStatus</h2>
<!-- backwards compatibility -->
<a id="schemacancelstatus"></a>
<a id="schema_CancelStatus"></a>
<a id="tocScancelstatus"></a>
<a id="tocscancelstatus"></a>

```json
{
  "cancelRequests": [
    {
      "cancelCompletedDate": "string",
      "cancelInitiator": "string",
      "cancelReason": "string",
      "cancelRequestId": "string",
      "cancelRequestState": "string",
      "cancelRequestedDate": "string"
    }
  ],
  "cancelState": "string",
  "cancelledDate": "string"
}
```

This type contains information about any requests that have been made to cancel an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelRequests|[[CancelRequest](#schemacancelrequest)]|false|none|This array contains details of one or more buyer requests to cancel the order. <br><br><b>For the getOrders call:</b>  This array is returned but is always empty.<br><b>For the getOrder call:</b> This array is returned fully populated with information about any cancellation requests.|
|cancelState|string|false|none|The state of the order with regard to cancellation. This field is always returned, and if there are no cancellation requests, a value of <code>NONE_REQUESTED</code> is returned.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelStateEnum'>eBay API documentation</a>|
|cancelledDate|string|false|none|The date and time the order was cancelled, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|

<h2 id="tocS_ContestPaymentDisputeRequest">ContestPaymentDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontestpaymentdisputerequest"></a>
<a id="schema_ContestPaymentDisputeRequest"></a>
<a id="tocScontestpaymentdisputerequest"></a>
<a id="tocscontestpaymentdisputerequest"></a>

```json
{
  "note": "string",
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0
}
```

This type is used by the request payload of the <strong>contestPaymentDispute</strong> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters.|
|returnAddress|[ReturnAddress](#schemareturnaddress)|false|none|This container is needed if the seller is requesting that the buyer return the item. If this container is used, all relevant fields must be included, including <strong>fullName</strong> and <strong>primaryPhone</strong>.|
|revision|integer(int32)|false|none|This integer value indicates the revision number of the payment dispute. This field is required. The current <strong>revision</strong> number for a payment dispute can be retrieved with the <strong>getPaymentDispute</strong> method. Each time an action is taken against a payment dispute, this integer value increases by 1.|

<h2 id="tocS_DeliveryCost">DeliveryCost</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycost"></a>
<a id="schema_DeliveryCost"></a>
<a id="tocSdeliverycost"></a>
<a id="tocsdeliverycost"></a>

```json
{
  "discountAmount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "handlingCost": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "importCharges": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "shippingCost": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "shippingIntermediationFee": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

This type contains a breakdown of all costs associated with the fulfillment of a line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountAmount|[Amount](#schemaamount)|false|none|The amount of any shipping discount that has been applied to the line item. This container is returned only if a shipping discount applies to the line item.|
|handlingCost|[Amount](#schemaamount)|false|none|The amount of any handing cost that has been applied to the line item. This container is returned only if a handling cost applies to the line item.|
|importCharges|[Amount](#schemaamount)|false|none|The amount of any import charges applied to international shipping of the line item. This container is only returned if import charges apply to the line item.|
|shippingCost|[Amount](#schemaamount)|false|none|The total cost of shipping all units of the line item. This container is always returned even when the shipping cost is free, in which case the <b>value</b> field will show <code>0.0</code> (dollars).|
|shippingIntermediationFee|[Amount](#schemaamount)|false|none|This field shows the fee due to eBay's international shipping provider for a line item that is being shipped through the Global Shipping Program.<br><br>This container is only returned for line items being shipped internationally through the Global Shipping Program, which is currently only supported in the US and UK marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> The value returned for this field will always be <code>0.0</code> for line items sold in the UK marketplace.</span>|

<h2 id="tocS_DisputeAmount">DisputeAmount</h2>
<!-- backwards compatibility -->
<a id="schemadisputeamount"></a>
<a id="schema_DisputeAmount"></a>
<a id="tocSdisputeamount"></a>
<a id="tocsdisputeamount"></a>

```json
{
  "convertedFromCurrency": "string",
  "convertedFromValue": "string",
  "currency": "string",
  "exchangeRate": "string",
  "value": "string"
}
```

This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertedFromCurrency|string|false|none|The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> convertedFromValue</b> field. This value is the pre-conversion currency.<br><br>This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|convertedFromValue|string|false|none|The monetary amount before any conversion is performed, in the currency specified by the <b> convertedFromCurrency</b> field. This value is the pre-conversion amount. The <b> value</b> field contains the converted amount of this value, in the currency specified by the <b> currency</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay.|
|currency|string|false|none|A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. This field is always returned with any container using <b>Amount</b> type. <br><br><b>Default</b>: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|exchangeRate|string|false|none|The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the <b>value</b> field from the dollar value in the <b>convertedFromValue</b> field.<br><br>This field is only returned if/when currency conversion was applied by eBay.|
|value|string|false|none|The monetary amount, in the currency specified by the <b>currency</b> field. This field is always returned with any container using <b>Amount</b> type.|

<h2 id="tocS_DisputeEvidence">DisputeEvidence</h2>
<!-- backwards compatibility -->
<a id="schemadisputeevidence"></a>
<a id="schema_DisputeEvidence"></a>
<a id="tocSdisputeevidence"></a>
<a id="tocsdisputeevidence"></a>

```json
{
  "evidenceId": "string",
  "evidenceType": "string",
  "files": [
    {
      "fileId": "string",
      "fileType": "string",
      "name": "string",
      "uploadedDate": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ],
  "providedDate": "string",
  "requestDate": "string",
  "respondByDate": "string",
  "shipmentTracking": [
    {
      "shipmentTrackingNumber": "string",
      "shippingCarrierCode": "string"
    }
  ]
}
```

This type is used by the <strong>evidence</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are associated with the payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceId|string|false|none|Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set.|
|evidenceType|string|false|none|This enumeration value shows the type of evidential file provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|files|[[FileInfo](#schemafileinfo)]|false|none|This array shows the name, ID, file type, and upload date for each provided file.|
|lineItems|[[OrderLineItems](#schemaorderlineitems)]|false|none|This array shows one or more order line items associated with the evidential document that has been provided.|
|providedDate|string|false|none|The timestamp in this field shows the date/time when the seller provided a requested evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|requestDate|string|false|none|The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|respondByDate|string|false|none|The timestamp in this field shows the date/time when the seller was expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|shipmentTracking|[[TrackingInfo](#schematrackinginfo)]|false|none|This array shows the shipping carrier and shipment tracking number associated with each shipment package of the order. This array is returned under the <strong>evidence</strong> container if the seller has provided shipment tracking information as evidence to support <code>PROOF_OF_DELIVERY</code> for an INR-related payment dispute.|

<h2 id="tocS_DisputeSummaryResponse">DisputeSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisputesummaryresponse"></a>
<a id="schema_DisputeSummaryResponse"></a>
<a id="tocSdisputesummaryresponse"></a>
<a id="tocsdisputesummaryresponse"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "paymentDisputeSummaries": [
    {
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "buyerUsername": "string",
      "closedDate": "string",
      "openDate": "string",
      "orderId": "string",
      "paymentDisputeId": "string",
      "paymentDisputeStatus": "string",
      "reason": "string",
      "respondByDate": "string"
    }
  ],
  "prev": "string",
  "total": 0
}
```

This type defines the base response payload of the <strong>getPaymentDisputeSummaries</strong> method. Each payment dispute that matches the input criteria is returned under the <strong>paymentDisputeSummaries</strong> array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the <strong>getPaymentDisputeSummaries</strong> call request that produced the current page of the result set.|
|limit|integer(int32)|false|none|This value shows the maximum number of payment disputes that will appear on one page of the result set. The <strong>limit</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>200</code>. If the value in the <strong>total</strong> field exceeds this <strong>limit</strong> value, there are multiple pages in the current result set.<br><br><b>Min</b>: 1; <b>Max</b>: 200; <b>Default</b>: 200|
|next|string|false|none|The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the next page of the result set. For example, the following URI returns records 11 thru 20 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=10</code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria.|
|offset|integer(int32)|false|none|This integer value indicates the number of payment disputes skipped before listing the first payment dispute from the result set. The <strong>offset</strong> value can be passed in as a query parameter in the request, or if it is not used, it defaults to <code>0</code> and the first payment dispute of the result set is shown at the top of the response.|
|paymentDisputeSummaries|[[PaymentDisputeSummary](#schemapaymentdisputesummary)]|false|none|Each payment dispute that matches the input criteria is returned under this array. If no payment disputes are found, an empty array is returned.|
|prev|string|false|none|The <strong>getPaymentDisputeSummaries</strong> call URI to use if you wish to view the previous page of the result set. For example, the following URI returns records 1 thru 10 from the collection of payment disputes:<br><br><code>path/payment_dispute_summary?limit=10&offset=0</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria.|
|total|integer(int32)|false|none|This integer value is the total number of payment disputes that matched the input criteria. If the total number of entries exceeds the value that was set for <strong>limit</strong> in the request payload, you will have to make multiple API calls to see all pages of the results set. This field is returned even if it is <code>0</code>.|

<h2 id="tocS_EbayCollectAndRemitTax">EbayCollectAndRemitTax</h2>
<!-- backwards compatibility -->
<a id="schemaebaycollectandremittax"></a>
<a id="schema_EbayCollectAndRemitTax"></a>
<a id="tocSebaycollectandremittax"></a>
<a id="tocsebaycollectandremittax"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "collectionMethod": "string",
  "ebayReference": {
    "name": "string",
    "value": "string"
  },
  "taxType": "string"
}
```

This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The monetary amount of the 'Collect and Remit' tax. This currently includes:<br><ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul><br><br><span class="tablenote"><strong>Note:</strong> If the corresponding <strong>taxType</strong> is <code>STATE_SALES_TAX</code>, <code>PROVINCE_SALES_TAX</code>, <code>GST</code>, or <code>VAT</code>, and the <strong>lineItems.taxes</strong> container also appears for this line item with the same tax amount, the order is subject to 'eBay Collect and Remit' tax. For orders that are subject to 'eBay Collect and Remit' tax, the tax amount in this field will be included in the <strong>lineItems.total</strong>, <strong>paymentSummary.payments.amount</strong>, <strong>paymentSummary.totalDueSeller</strong>, and <strong>pricingSummary.total</strong> fields.</span>|
|collectionMethod|string|false|none|This field indicates the collection method used to collect the 'Collect and Remit' tax for the order. This field is always returned for orders subject to 'Collect and Remit' tax, and its value is always <code>NET</code>.<br><br><span class="tablenote"><strong>Note:</strong> Although the <strong>collectionMethod</strong> field is returned for all orders subject to 'Collect and Remit' tax, the <strong>collectionMethod</strong> field and the <strong>CollectionMethodEnum</strong> type are not currently of any practical use, although this field may have use in the future. If and when the logic of this field is changed, this note will be updated and a note will also be added to the Release Notes.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CollectionMethodEnum'>eBay API documentation</a>|
|ebayReference|[EbayTaxReference](#schemaebaytaxreference)|false|none|This container field describes the line-item level VAT tax details.<br><br><span class="tablenote"><b>Note:</b> As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span>|
|taxType|string|false|none|The type of tax and fees that eBay will collect and remit to the taxing or fee authority. See the <strong>TaxTypeEnum</strong> type definition for more information about each tax or fee type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_EbayCollectedCharges">EbayCollectedCharges</h2>
<!-- backwards compatibility -->
<a id="schemaebaycollectedcharges"></a>
<a id="schema_EbayCollectedCharges"></a>
<a id="tocSebaycollectedcharges"></a>
<a id="tocsebaycollectedcharges"></a>

```json
{
  "ebayShipping": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

This type contains the breakdown of costs that are collected by eBay from the buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ebayShipping|[Amount](#schemaamount)|false|none|This container consists of costs related to eBay Shipping collected by eBay from the buyer of this order.|

<h2 id="tocS_EbayFulfillmentProgram">EbayFulfillmentProgram</h2>
<!-- backwards compatibility -->
<a id="schemaebayfulfillmentprogram"></a>
<a id="schema_EbayFulfillmentProgram"></a>
<a id="tocSebayfulfillmentprogram"></a>
<a id="tocsebayfulfillmentprogram"></a>

```json
{
  "fulfilledBy": "string"
}
```

This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfilledBy|string|false|none|The value returned in this field indicates the party that is handling fulfillment of the order line item. <br><br>Valid value: <code>EBAY</code>|

<h2 id="tocS_EbayInternationalShipping">EbayInternationalShipping</h2>
<!-- backwards compatibility -->
<a id="schemaebayinternationalshipping"></a>
<a id="schema_EbayInternationalShipping"></a>
<a id="tocSebayinternationalshipping"></a>
<a id="tocsebayinternationalshipping"></a>

```json
{
  "returnsManagedBy": "string"
}
```

This type is used to provide details about an order line item being managed through eBay International Shipping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnsManagedBy|string|false|none|The value returned in this field indicates the party that is responsible for managing returns of the order line item.<br><br>Valid value: <code>EBAY</code>|

<h2 id="tocS_EbayShipping">EbayShipping</h2>
<!-- backwards compatibility -->
<a id="schemaebayshipping"></a>
<a id="schema_EbayShipping"></a>
<a id="tocSebayshipping"></a>
<a id="tocsebayshipping"></a>

```json
{
  "shippingLabelProvidedBy": "string"
}
```

This type contains information about the management of the shipping for the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shippingLabelProvidedBy|string|false|none|This field contains the shipping label provider. If <code>EBAY</code>, this order is managed by eBay shipping and a free shipping label by eBay is downloadable by the seller via the eBay website.|

<h2 id="tocS_EbayTaxReference">EbayTaxReference</h2>
<!-- backwards compatibility -->
<a id="schemaebaytaxreference"></a>
<a id="schema_EbayTaxReference"></a>
<a id="tocSebaytaxreference"></a>
<a id="tocsebaytaxreference"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order.<br><br><span class="tablenote"><b>Note:</b>  As of January 31, 2022, <b>addressLine2</b> no longer returns EU VAT tax information.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This field value is returned to indicate the VAT tax type, which will vary by country/region. This string value will be one of the following:<ul><li><code>ABN</code>: if this string is returned, the ID in the <strong>value</strong> field is an Australia tax ID</li><li><code>DDG</code>: if this string is returned, it indicates that tax has been collected and remitted for Digitally Delivered Goods (DDG)</li><li><code>IOSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay EU or UK IOSS number</li><li><code>IRD</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay New Zealand tax ID</li><li><code>OSS</code>: if this string is returned, the ID in the <strong>value</strong> field is an  eBay Germany VAT ID</li><li><code>VOEC</code>: if this string is returned, the ID in the <strong>value</strong> field is an eBay Norway tax ID</li></ul>|
|value|string|false|none|The value returned in this field is the VAT identifier number (VATIN), which will vary by country/region. This field will be returned if VAT tax is applicable for the order. The <strong>name</strong> field indicates the VAT tax type, which will vary by country/region: <ul><li><strong>ABN</strong>: <em>eBay AU tax ID</em></li><li><strong>IOSS</strong>: <em>eBay EU IOSS number</em> / <em>eBay UK IOSS number</em></li><li><strong>IRD</strong>: <em>eBay NZ tax ID</em></li><li><strong>OSS</strong>: <em>eBay DE VAT ID</em></li><li><strong>VOEC</strong>: <em>eBay NO number</em></li></ul>|

<h2 id="tocS_EbayVaultProgram">EbayVaultProgram</h2>
<!-- backwards compatibility -->
<a id="schemaebayvaultprogram"></a>
<a id="schema_EbayVaultProgram"></a>
<a id="tocSebayvaultprogram"></a>
<a id="tocsebayvaultprogram"></a>

```json
{
  "fulfillmentType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfillmentType|string|false|none|This field specifies how an eBay vault order will be fulfilled. Supported options are:<ul><li><b>Seller to Vault</b>: the order will be shipped by the seller to an authenticator.</li><li><b>Vault to Vault</b>: the order will be shipped from an eBay vault to the buyer's vault.</li><li><b>Vault to Buyer</b>: the order will be shipped from an eBay vault to the buyer's shipping address.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:EbayVaultFulfillmentTypeEnum'>eBay API documentation</a>|

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

This type contains a error or warning related to a call request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The context or source of this error or warning.|
|domain|string|false|none|The name of the domain containing the service or application. For example, <code>sell</code> is a domain.|
|errorId|integer(int32)|false|none|A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.|
|inputRefIds|[string]|false|none|A list of one or more specific request elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.|
|longMessage|string|false|none|An expanded version of the <b>message</b> field. <br><br><b>Maximum length:</b> 200 characters|
|message|string|false|none|A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. <br><br><b>Maximum length:</b> 50 characters|
|outputRefIds|[string]|false|none|A list of one or more specific response elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|Contains a list of name-value pairs that provide additional information concerning this error or warning. Each item in the list is an input parameter that contributed to the error or warning condition.|
|subdomain|string|false|none|The name of the domain's subsystem or subdivision. For example, <code>fulfillment</code> is a subdomain in the <code>sell</code> domain.|

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

This type contains the name and value of an input parameter that contributed to a specific error or warning condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|This is the name of input field that caused an issue with the call request.|
|value|string|false|none|This is the actual value that was passed in for the element specified in the <strong>name</strong> field.|

<h2 id="tocS_EvidenceRequest">EvidenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevidencerequest"></a>
<a id="schema_EvidenceRequest"></a>
<a id="tocSevidencerequest"></a>
<a id="tocsevidencerequest"></a>

```json
{
  "evidenceId": "string",
  "evidenceType": "string",
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ],
  "requestDate": "string",
  "respondByDate": "string"
}
```

This type is used by the <strong>evidenceRequests</strong> array that is returned in the <strong>getPaymentDispute</strong> response if one or more evidential documents are being requested to help resolve the payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceId|string|false|none|Unique identifier of the evidential file set. Potentially, each evidential file set can have more than one file, that is why there is this file set identifier, and then an identifier for each file within this file set.|
|evidenceType|string|false|none|This enumeration value shows the type of evidential document provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|lineItems|[[OrderLineItems](#schemaorderlineitems)]|false|none|This array shows one or more order line items associated with the evidential document that has been provided.|
|requestDate|string|false|none|The timestamp in this field shows the date/time when eBay requested the evidential document from the seller in response to a payment dispute. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|respondByDate|string|false|none|The timestamp in this field shows the date/time when the seller is expected to provide a requested evidential document to eBay.  <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|

<h2 id="tocS_ExtendedContact">ExtendedContact</h2>
<!-- backwards compatibility -->
<a id="schemaextendedcontact"></a>
<a id="schema_ExtendedContact"></a>
<a id="tocSextendedcontact"></a>
<a id="tocsextendedcontact"></a>

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
  "email": "string",
  "fullName": "string",
  "primaryPhone": {
    "phoneNumber": "string"
  }
}
```

This type contains shipping and contact information for a buyer or an eBay shipping partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner.|
|contactAddress|[Address](#schemaaddress)|false|none|This container shows the shipping address of the buyer or eBay shipping partner.|
|email|string|false|none|This field contains the email address of the buyer. This address will be returned for up to 14 days from order creation. If an order is more than 14 days old, no address is returned.<br><br><span class="tablenote"> <strong>Note:</strong> If returned, this field contains the email address of the buyer, even for Global Shipping Program shipments.<br><br>The <b>email</b> will not be returned for any order that is more than 90 days old.</span>|
|fullName|string|false|none|The full name of the buyer or eBay shipping partner.<br><br><span class="tablenote"><strong>Note:</strong> The <b>fullName</b> will not be returned for any order that is more than 90 days old.</span>|
|primaryPhone|[PhoneNumber](#schemaphonenumber)|false|none|The primary telephone number of the buyer or eBay shipping partner.<br><br><span class="tablenote"><strong>Note:</strong> The <b>primaryPhone</b> will not be returned for any order that is more than 90 days old.</span>|

<h2 id="tocS_FileEvidence">FileEvidence</h2>
<!-- backwards compatibility -->
<a id="schemafileevidence"></a>
<a id="schema_FileEvidence"></a>
<a id="tocSfileevidence"></a>
<a id="tocsfileevidence"></a>

```json
{
  "fileId": "string"
}
```

This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|If an <strong>uploadEvidenceFile</strong> call is successful, a unique identifier of this evidence file will be returned in the <strong>uploadEvidenceFile</strong> response payload.  This unique <strong>fileId</strong> value is then used to either add this evidence file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.<br><br>Note that if an evidence set already exists for a payment dispute, the <strong>getPaymentDispute</strong> method will return both the <strong>evidenceId</strong> (unique identifier of evidence set) value, and the <strong>fileId</strong> (unique identifier of a file within that evidence set) value(s).|

<h2 id="tocS_FileInfo">FileInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileinfo"></a>
<a id="schema_FileInfo"></a>
<a id="tocSfileinfo"></a>
<a id="tocsfileinfo"></a>

```json
{
  "fileId": "string",
  "fileType": "string",
  "name": "string",
  "uploadedDate": "string"
}
```

This type is used by the <strong>files</strong> array, which shows the name, ID, file type, and upload date for each provided evidential file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|The unique identifier of the evidence file.|
|fileType|string|false|none|The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB.|
|name|string|false|none|The seller-provided name of the evidence file.|
|uploadedDate|string|false|none|The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|

<h2 id="tocS_FulfillmentStartInstruction">FulfillmentStartInstruction</h2>
<!-- backwards compatibility -->
<a id="schemafulfillmentstartinstruction"></a>
<a id="schema_FulfillmentStartInstruction"></a>
<a id="tocSfulfillmentstartinstruction"></a>
<a id="tocsfulfillmentstartinstruction"></a>

```json
{
  "ebaySupportedFulfillment": true,
  "finalDestinationAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryCode": "string",
    "county": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "fulfillmentInstructionsType": "string",
  "maxEstimatedDeliveryDate": "string",
  "minEstimatedDeliveryDate": "string",
  "pickupStep": {
    "merchantLocationKey": "string"
  },
  "shippingStep": {
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
      "email": "string",
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    },
    "shipToReferenceId": "string",
    "shippingCarrierCode": "string",
    "shippingServiceCode": "string"
  }
}
```

This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ebaySupportedFulfillment|boolean|false|none|This field is only returned if its value is <code>true</code> and indicates that the fulfillment will be shipped via eBay's Global Shipping Program, eBay International Shipping, or the Authenticity Guarantee service program. <br><br>For more information, see the <a href="https://www.ebay.com/help/selling/shipping-items/setting-shipping-options/global-shipping-program?id=4646 " target="_blank">Global Shipping Program</a> help topic.|
|finalDestinationAddress|[Address](#schemaaddress)|false|none|This container is only returned if the value of <b>ebaySupportedFulfillment</b> field is <code>true</code>. <br><br>This is the final destination address for a Global Shipping Program shipment or an eBay International Shipping shipment, which is usually the recipient's home. Sellers should not ship directly to this address; instead they should ship this package to their international shipping provider's domestic warehouse. The international shipping provider is responsible for delivery to the final destination address.<br><br>For more information, see <a href="https://developer.ebay.com/devzone/guides/features-guide/default.html#Development/Shipping-APIWork.html#AddressingaGlobalShippingProgramShipment " target="_blank">Addressing a Global Shipping Program Shipment</a>.<p> <span class="tablenote"><strong>Note:</strong> For Authenticity Guarantee program shipment, this is the address of the authenticator's warehouse. The authenticator is responsible for delivery to the buyer shipping address.</span></p>|
|fulfillmentInstructionsType|string|false|none|The enumeration value returned in this field indicates the method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of <code>SHIP_TO</code> if the <b>ebaySupportedFulfillment</b> field is returned with a value of <code>true</code>. See the <strong>FulfillmentInstructionsType</strong> definition for more information about different fulfillment types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:FulfillmentInstructionsType'>eBay API documentation</a>|
|maxEstimatedDeliveryDate|string|false|none|This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned ifthe value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|minEstimatedDeliveryDate|string|false|none|This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned if  the value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code> or <code>PREPARE_FOR_PICKUP</code>.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|pickupStep|[PickupStep](#schemapickupstep)|false|none|This container is only returned for In-Store Pickup orders, and it indicates the specific merchant's store where the buyer will pick up the order. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.|
|shippingStep|[ShippingStep](#schemashippingstep)|false|none|This container consists of shipping information for this fulfillment, including the shipping carrier, the shipping service option, and the shipment destination. This container is not returned if the value of the <b>fulfillmentInstructionsType</b> field is <code>DIGITAL</code>, or for In-Store Pickup orders. <br><br> For Click and Collect orders, the shipping destination will be a brick-and-mortar store where the buyer will pick up the order.|

<h2 id="tocS_GiftDetails">GiftDetails</h2>
<!-- backwards compatibility -->
<a id="schemagiftdetails"></a>
<a id="schema_GiftDetails"></a>
<a id="tocSgiftdetails"></a>
<a id="tocsgiftdetails"></a>

```json
{
  "message": "string",
  "recipientEmail": "string",
  "senderName": "string"
}
```

This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> <b>GiftDetails</b> will not be returned for any order that is more than 90 days old.</span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.<br><br><span class="tablenote"><strong>Note:</strong> The <b>message</b> will not be returned for any order that is more than 90 days old.</span>|
|recipientEmail|string|false|none|The email address of the gift recipient. The seller will send the digital gift card to this email address.<br><br><span class="tablenote"><strong>Note:</strong> The <b>recipientEmail</b> will not be returned for any order that is more than 90 days old.</span>|
|senderName|string|false|none|The name of the buyer, which will appear on the email that is sent to the gift recipient.<br><br><span class="tablenote"><strong>Note:</strong> The <b>senderName</b> will not be returned for any order that is more than 90 days old.</span>|

<h2 id="tocS_InfoFromBuyer">InfoFromBuyer</h2>
<!-- backwards compatibility -->
<a id="schemainfofrombuyer"></a>
<a id="schema_InfoFromBuyer"></a>
<a id="tocSinfofrombuyer"></a>
<a id="tocsinfofrombuyer"></a>

```json
{
  "note": "string",
  "returnShipmentTracking": [
    {
      "shipmentTrackingNumber": "string",
      "shippingCarrierCode": "string"
    }
  ]
}
```

This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|This field shows any note that was left by the buyer in regard to the dispute.|
|returnShipmentTracking|[[TrackingInfo](#schematrackinginfo)]|false|none|This array shows shipment tracking information for one or more shipping packages being returned to the buyer after a payment dispute.|

<h2 id="tocS_IssueRefundRequest">IssueRefundRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuerefundrequest"></a>
<a id="schema_IssueRefundRequest"></a>
<a id="tocSissuerefundrequest"></a>
<a id="tocsissuerefundrequest"></a>

```json
{
  "comment": "string",
  "orderLevelRefundAmount": {
    "currency": "string",
    "value": "string"
  },
  "reasonForRefund": "string",
  "refundItems": [
    {
      "legacyReference": {
        "legacyItemId": "string",
        "legacyTransactionId": "string"
      },
      "lineItemId": "string",
      "refundAmount": {
        "currency": "string",
        "value": "string"
      }
    }
  ]
}
```

The base type used by the request payload of the <b>issueRefund</b> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|This free-text field allows the seller to clarify why the refund is being issued to the buyer.<br><br><b>Max Length</b>: 100|
|orderLevelRefundAmount|[SimpleAmount](#schemasimpleamount)|false|none|This container is used to specify the amount of the refund for the entire order. If a seller wants to issue a refund for an individual line item within a multiple line item order, the seller would use the <b>refundItems</b> array instead.|
|reasonForRefund|string|false|none|The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the <b>ReasonForRefundEnum</b> type must be used.<br><br>This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or 'buyer remorse' return to indicate that there was nothing wrong with the item(s) or with the shipment of the order.<br><br><span class="tablenote"><strong>Note:</strong> If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate <b>issueRefund</b> calls, one for each refund reason. </span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum'>eBay API documentation</a>|
|refundItems|[[RefundItem](#schemarefunditem)]|false|none|The <b>refundItems</b> array is only required if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order.|

<h2 id="tocS_ItemLocation">ItemLocation</h2>
<!-- backwards compatibility -->
<a id="schemaitemlocation"></a>
<a id="schema_ItemLocation"></a>
<a id="tocSitemlocation"></a>
<a id="tocsitemlocation"></a>

```json
{
  "countryCode": "string",
  "location": "string",
  "postalCode": "string"
}
```

This type describes the physical location of an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code representing the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|location|string|false|none|Indicates the geographical location of the item (along with the value in the <strong>countryCode</strong> field). This field provides city, province, state, or similar information.|
|postalCode|string|false|none|The postal code of the address.|

<h2 id="tocS_LegacyReference">LegacyReference</h2>
<!-- backwards compatibility -->
<a id="schemalegacyreference"></a>
<a id="schema_LegacyReference"></a>
<a id="tocSlegacyreference"></a>
<a id="tocslegacyreference"></a>

```json
{
  "legacyItemId": "string",
  "legacyTransactionId": "string"
}
```

Type defining the <b>legacyReference</b> container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyItemId|string|false|none|The unique identifier of a listing in legacy/Trading API format. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span>|
|legacyTransactionId|string|false|none|The unique identifier of a sale/transaction in legacy/Trading API format. A 'transaction ID' is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. <br><br><span class="tablenote"><strong>Note:</strong> Both <b>legacyItemId</b> and <b>legacyTransactionId</b> are needed to identify an order line item. </span>|

<h2 id="tocS_LineItem">LineItem</h2>
<!-- backwards compatibility -->
<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "appliedPromotions": [
    {
      "description": "string",
      "discountAmount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "promotionId": "string"
    }
  ],
  "deliveryCost": {
    "discountAmount": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "handlingCost": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "importCharges": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "shippingCost": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "shippingIntermediationFee": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "discountedLineItemCost": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "ebayCollectAndRemitTaxes": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "collectionMethod": "string",
      "ebayReference": {
        "name": "string",
        "value": "string"
      },
      "taxType": "string"
    }
  ],
  "ebayCollectedCharges": {
    "ebayShipping": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "giftDetails": {
    "message": "string",
    "recipientEmail": "string",
    "senderName": "string"
  },
  "itemLocation": {
    "countryCode": "string",
    "location": "string",
    "postalCode": "string"
  },
  "legacyItemId": "string",
  "legacyVariationId": "string",
  "lineItemCost": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "lineItemFulfillmentInstructions": {
    "guaranteedDelivery": true,
    "maxEstimatedDeliveryDate": "string",
    "minEstimatedDeliveryDate": "string",
    "shipByDate": "string"
  },
  "lineItemFulfillmentStatus": "string",
  "lineItemId": "string",
  "linkedOrderLineItems": [
    {
      "lineItemAspects": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "lineItemId": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "orderId": "string",
      "sellerId": "string",
      "shipments": [
        {
          "shipmentTrackingNumber": "string",
          "shippingCarrierCode": "string"
        }
      ],
      "title": "string"
    }
  ],
  "listingMarketplaceId": "string",
  "properties": {
    "buyerProtection": true,
    "fromBestOffer": true,
    "soldViaAdCampaign": true
  },
  "purchaseMarketplaceId": "string",
  "quantity": 0,
  "refunds": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "refundDate": "string",
      "refundId": "string",
      "refundReferenceId": "string"
    }
  ],
  "sku": "string",
  "soldFormat": "string",
  "taxes": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "taxType": "string"
    }
  ],
  "title": "string",
  "total": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "variationAspects": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

This type contains the details of each line item in an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedPromotions|[[AppliedPromotion](#schemaappliedpromotion)]|false|none|This array contains information about one or more sales promotions or discounts applied to the line item. It is always returned, but will be returned as an empty array if no special sales promotions or discounts apply to the order line item.|
|deliveryCost|[DeliveryCost](#schemadeliverycost)|false|none|This container consists of a breakdown of all costs associated with the fulfillment of the line item.|
|discountedLineItemCost|[Amount](#schemaamount)|false|none|The cost of the line item after applying any discounts. This container is only returned if the order line item was discounted through a promotion.|
|ebayCollectAndRemitTaxes|[[EbayCollectAndRemitTax](#schemaebaycollectandremittax)]|false|none|This container will be returned if the order line item is subject to a 'Collect and Remit' tax that eBay will collect and remit to the proper taxing authority on the buyer's behalf.<br><br>'Collect and Remit' tax includes:<ul><li>US state-mandated sales tax</li><li>Federal and Provincial Sales Tax in Canada</li><li>'Goods and Services' tax in Canada, Australia, and New Zealand</li><li>VAT collected for the UK and EU countries</li></ul>The amount of this tax is shown in the <strong>amount</strong> field, and the type of tax is shown in the <strong>taxType</strong> field.<br><br>eBay will display the tax type and amount during checkout in accordance with the buyer's address, and handle collection and remittance of the tax without requiring the seller to take any action.|
|ebayCollectedCharges|[EbayCollectedCharges](#schemaebaycollectedcharges)|false|none|This container consists of a breakdown of costs that are collected by eBay from the buyer for this order. <br><br><span class="tablenote"><strong>Note:</strong> Currently, this container is returned only if eBay is directly charging the buyer for eBay shipping.</span>|
|giftDetails|[GiftDetails](#schemagiftdetails)|false|none|This container consists of information that is needed by the seller to send a digital gift card to the buyer, or recipient of the digital gift card. This container is only returned and applicable for digital gift card line items.|
|itemLocation|[ItemLocation](#schemaitemlocation)|false|none|This container field describes the physical location of the order line item.|
|legacyItemId|string|false|none|The eBay-generated legacy listing item ID of the listing. Note that the unique identifier of a listing in REST-based APIs is called the <strong>listingId</strong> instead.|
|legacyVariationId|string|false|none|The unique identifier of a single variation within a multiple-variation listing. This field is only returned if the line item purchased was from a multiple-variation listing.|
|lineItemCost|[Amount](#schemaamount)|false|none|The selling price of the line item before applying any discounts. The value of this field is calculated by multiplying the single unit price by the number of units purchased (value of the <b>quantity</b> field).|
|lineItemFulfillmentInstructions|[LineItemFulfillmentInstructions](#schemalineitemfulfillmentinstructions)|false|none|This container consists of information related to shipping dates and expectations, including the 'ship-by date' and expected delivery windows that are based on the seller's stated handling time and the shipping service option that will be used. These fields provide guidance on making sure expected delivery dates are made, whether the order is a <i>eBay Guaranteed Delivery</i> order or a non-guaranteed delivery order.|
|lineItemFulfillmentStatus|string|false|none|This enumeration value indicates the current fulfillment status of the line item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:LineItemFulfillmentStatusEnum'>eBay API documentation</a>|
|lineItemId|string|false|none|This is the unique identifier of an eBay order line item. This field is created as soon as there is a commitment to buy from the seller.|
|linkedOrderLineItems|[[LinkedOrderLineItem](#schemalinkedorderlineitem)]|false|none|An array of one or more line items related to the corresponding order, but not a part of that order. Details include the order ID, line item ID, and title of the linked line item, the seller of that item, item specifics, estimated delivery times, and shipment tracking (if available).|
|listingMarketplaceId|string|false|none|The unique identifier of the eBay marketplace where the line item was listed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|properties|[LineItemProperties](#schemalineitemproperties)|false|none|Contains information about the eBay programs, if any, under which the line item was listed.|
|purchaseMarketplaceId|string|false|none|The unique identifier of the eBay marketplace where the line item was listed. Often, the <strong>listingMarketplaceId</strong> and the <strong>purchaseMarketplaceId</strong> identifier are the same, but there are occasions when an item will surface on multiple eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:MarketplaceIdEnum'>eBay API documentation</a>|
|quantity|integer(int32)|false|none|The number of units of the line item in the order. These are represented as a group by a single <b>lineItemId</b>.|
|refunds|[[LineItemRefund](#schemalineitemrefund)]|false|none|This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.|
|sku|string|false|none|Seller-defined Stock-Keeping Unit (SKU). This inventory identifier must be unique within the seller's eBay inventory. SKUs are optional when listing in the legacy/Trading API system, but SKUs are required when listing items through the Inventory API model.|
|soldFormat|string|false|none|The eBay listing type of the line item. The most common listing types are <code>AUCTION</code> and <code>FIXED_PRICE</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:SoldFormatEnum'>eBay API documentation</a>|
|taxes|[[Tax](#schematax)]|false|none|Contains a list of taxes applied to the line item, if any. This array is always returned, but will be returned as empty if no taxes are applicable to the line item.|
|title|string|false|none|The title of the listing.|
|total|[Amount](#schemaamount)|false|none|This is the total price that the buyer must pay for the line item after all costs (item cost, delivery cost, taxes,) are added, minus any discounts and/or promotions.<br><br><span class="tablenote"><strong>Note:</strong> For orders that are subject to 'eBay Collect and Remit' tax, the 'Collect and Remit' tax amount for the order will be included in this <strong>total</strong> value only when the <strong>fieldGroups</strong> query parameter is set to <code>TAX_BREAKDOWN</code>. If the <strong>fieldGroups</strong> query parameter is not set to <code>TAX_BREAKDOWN</code>, 'Collect and Remit' will not be added into this <strong>total</strong> value.<br><br>To determine if 'Collect and Remit' taxes were added into this <strong>total</strong> value, the user can check for the corresponding <strong>lineItems.ebayCollectAndRemitTaxes</strong> and the <strong>lineItems.taxes</strong> containers in the response. If both of these containers appear for one or more line items in the response with the following <strong>taxType</strong> values, the 'Collect and Remit' tax amount that the buyer paid is in this amount:<ul><li><code>STATE_SALES_TAX</code>: US state-mandated sales tax</li><li><code>PROVINCE_SALES_TAX</code>: Provincial Sales Tax in Canada</li><li><code>GST</code>: 'Goods and Services' tax in Canada, Australia, and New Zealand</li><li><code>VAT</code>: VAT collected for UK and EU countries</li></ul></span>|
|variationAspects|[[NameValuePair](#schemanamevaluepair)]|false|none|An array of aspect name-value pairs that identifies the specific variation of a multi-variation listing. This array can contain multiple name-value pairs, such as <code>color:blue</code> and <code>size:large</code>, and will only be returned for orders created from a multiple-variation listing.|

<h2 id="tocS_LineItemFulfillmentInstructions">LineItemFulfillmentInstructions</h2>
<!-- backwards compatibility -->
<a id="schemalineitemfulfillmentinstructions"></a>
<a id="schema_LineItemFulfillmentInstructions"></a>
<a id="tocSlineitemfulfillmentinstructions"></a>
<a id="tocslineitemfulfillmentinstructions"></a>

```json
{
  "guaranteedDelivery": true,
  "maxEstimatedDeliveryDate": "string",
  "minEstimatedDeliveryDate": "string",
  "shipByDate": "string"
}
```

This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for <i>eBay Guaranteed Delivery</i> as well as for non-guaranteed delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guaranteedDelivery|boolean|false|none|This field is returned as <code>true</code> if the order line item is qualified for eBay Guaranteed Delivery, or <code>false</code> if it is not eligible. Only domestic shipments are available for eBay Guaranteed Delivery. At this time, eBay Guaranteed Delivery is only available to a select number of sellers on the US and Australia sites, but this feature will be enabled on more eBay sites in 2019.<br><br>  There are two different eBay Guaranteed Delivery options - 'Handling time' option and 'Door-to-Door' option. With both options, the seller is commiting to getting the order delivered to the buyer within three business days after purchase. <br><br> With the 'Handling time' option, the seller's stated handling time for a listing must be 'same-day' or '1-day', and at least one of the available shipping service options should have a shipping time that guarantees that the buyer receives the order on time. With this option, eBay will set the 'ship-by date' and expected delivery window for the seller, and the seller should just make sure they physically ship the order by the <strong>shipToDate</strong>.<br><br> With the 'Door-to-door' option, the seller must create regional shipping rate tables (with shipping costs and delivery times based on destination regions), and then apply these regional shipping rates/delivery times to the listing. <br><br> If a 'Door-to-door' order does not arrive on time, the seller must refund the buyer the full shipping cost (if any), and the buyer also has the option of returning the item for a full refund, and the seller will also have to pay the return shipping cost. With 'Handling time' option, as long as the seller meets the stated handling time, and ships using the correct shipping service option, eBay will refund the buyer the shipping cost and pay for return shipping label (if buyer wants to return item) if the order arrives after the expected delivery time. <br><br> For more information on the details and requirements of eBay Guaranteed Delivery, see the <a href="https://www.ebay.com/help/selling/shipping-items/offering-ebay-guaranteed-delivery?id=4645 " target="_blank">Offering eBay Guaranteed Delivery</a> help topic.<br><br> This field will always be returned regardless of whether the listing site offers eBay Guaranteed Delivery or if the seller is opted in to the feature.|
|maxEstimatedDeliveryDate|string|false|none|The estimated latest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to deliver by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span>|
|minEstimatedDeliveryDate|string|false|none|The estimated earliest date and time that the buyer can expect to receive the line item based on the seller's stated handling time and the transit times of the available shipping service options.<br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span>|
|shipByDate|string|false|none|The latest date and time by which the seller should ship line item in order to meet the expected delivery window. This timestamp will be set by eBay based on time of purchase and the seller's stated handling time. If the listing is eligible for eBay Guaranteed Delivery (value of <b>guaranteedDelivery</b> field is <code>true</code>, the seller must pay extra attention to this date, as a failure to physically ship the line item by this date/time can result in a 'Late shipment' seller defect, and can affect seller level and Top-Rated Seller status. In addition to the seller defect, buyers will be eligible for a shipping cost refund, and will also be eligible to return the item for a full refund (with no return shipping charge) if they choose. <br><br><span class="tablenote"><strong>Note:</strong> This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code></span>|

<h2 id="tocS_LineItemProperties">LineItemProperties</h2>
<!-- backwards compatibility -->
<a id="schemalineitemproperties"></a>
<a id="schema_LineItemProperties"></a>
<a id="tocSlineitemproperties"></a>
<a id="tocslineitemproperties"></a>

```json
{
  "buyerProtection": true,
  "fromBestOffer": true,
  "soldViaAdCampaign": true
}
```

This type contains information about the eBay programs under which a line item was listed and sold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerProtection|boolean|false|none|A value of <code>true</code> indicates that the line item is covered by eBay's Buyer Protection program.|
|fromBestOffer|boolean|false|none|This field is only returned if <code>true</code> and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing.|
|soldViaAdCampaign|boolean|false|none|This field is only returned if <code>true</code> and indicates that the line item was sold as a result of a seller's ad campaign.|

<h2 id="tocS_LineItemReference">LineItemReference</h2>
<!-- backwards compatibility -->
<a id="schemalineitemreference"></a>
<a id="schema_LineItemReference"></a>
<a id="tocSlineitemreference"></a>
<a id="tocslineitemreference"></a>

```json
{
  "lineItemId": "string",
  "quantity": 0
}
```

This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineItemId|string|false|none|This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller.|
|quantity|integer(int32)|false|none|This is the number of lineItems associated with the <a href="#request.trackingNumber">trackingNumber</a> specified by the seller. This must be a whole number greater than zero (0).|

<h2 id="tocS_LineItemRefund">LineItemRefund</h2>
<!-- backwards compatibility -->
<a id="schemalineitemrefund"></a>
<a id="schema_LineItemRefund"></a>
<a id="tocSlineitemrefund"></a>
<a id="tocslineitemrefund"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "refundDate": "string",
  "refundId": "string",
  "refundReferenceId": "string"
}
```

This type contains refund information for a line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|This field shows the refund amount for a line item. This field is only returned if the buyer is due a refund for the line item.<br><br><span class="tablenote"><b>Note:</b> The refund amount shown is the seller's <i><b>net amount</b></i> received from the sale/transaction. eBay-collected tax will not be included in this amount, so the actual amount of the buyer's refund may be higher than this value.</span>|
|refundDate|string|false|none|The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|refundId|string|false|none|Unique identifier of a refund that was initiated for an order's line item through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue a refund at the order level, this identifier is returned at the order level instead (<b>paymentSummary.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrder</b> and <b>getOrders</b> responses for pending and completed refunds.|
|refundReferenceId|string|false|none|This field is reserved for internal or future use.|

<h2 id="tocS_LinkedOrderLineItem">LinkedOrderLineItem</h2>
<!-- backwards compatibility -->
<a id="schemalinkedorderlineitem"></a>
<a id="schema_LinkedOrderLineItem"></a>
<a id="tocSlinkedorderlineitem"></a>
<a id="tocslinkedorderlineitem"></a>

```json
{
  "lineItemAspects": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "lineItemId": "string",
  "maxEstimatedDeliveryDate": "string",
  "minEstimatedDeliveryDate": "string",
  "orderId": "string",
  "sellerId": "string",
  "shipments": [
    {
      "shipmentTrackingNumber": "string",
      "shippingCarrierCode": "string"
    }
  ],
  "title": "string"
}
```

This type contains data on a line item that is related to, but not a part of the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineItemAspects|[[NameValuePair](#schemanamevaluepair)]|false|none|This array contains the complete set of items aspects for the linked line item. For example:<br><pre>"lineItemAspects": [<br>    {<br>        "name": "Tire Type",<br>        "value": "All Season"<br>    },<br><br>    ...<br> <br>    {<br>        "name": "Car Type",<br>        "value": "Performance"<br>    }<br>]</pre><span class="tablenote"><strong>Note:</strong> All item specifics for the listing are returned. The name/value pairs returned are in the language of the linked line item's listing site, which may vary from the seller's language.</span>|
|lineItemId|string|false|none|The unique identifier of the linked order line item.|
|maxEstimatedDeliveryDate|string|false|none|The end of the date range in which the linked line item is expected to be delivered to the shipping address.|
|minEstimatedDeliveryDate|string|false|none|The beginning of the date range in which the linked line item is expected to be delivered to the shipping address.|
|orderId|string|false|none|The unique identifier of the order to which the linked line item belongs.|
|sellerId|string|false|none|The eBay user ID of the seller who sold the linked line item. For example, the user ID of the tire seller.|
|shipments|[[TrackingInfo](#schematrackinginfo)]|false|none|An array containing any shipment tracking information available for the linked line item.|
|title|string|false|none|The listing title of the linked line item.|

<h2 id="tocS_MonetaryTransaction">MonetaryTransaction</h2>
<!-- backwards compatibility -->
<a id="schemamonetarytransaction"></a>
<a id="schema_MonetaryTransaction"></a>
<a id="tocSmonetarytransaction"></a>
<a id="tocsmonetarytransaction"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "exchangeRate": "string",
    "value": "string"
  },
  "date": "string",
  "reason": "string",
  "type": "string"
}
```

This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[DisputeAmount](#schemadisputeamount)|false|none|The amount involved in the monetary transaction. For active cross-border trade orders, the currency conversion and <b>exchangeRate</b> fields will be displayed as well.|
|date|string|false|none|This timestamp indicates when the monetary transaction occurred. A date is returned for all monetary transactions.<br><br> The following format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2015-08-04T19:09:02.768Z</code>.|
|reason|string|false|none|This enumeration value indicates the reason for the monetary transaction. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionReasonEnum'>eBay API documentation</a>|
|type|string|false|none|This enumeration value indicates whether the monetary transaction is a charge or a credit to the seller. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:MonetaryTransactionTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_NameValuePair">NameValuePair</h2>
<!-- backwards compatibility -->
<a id="schemanamevaluepair"></a>
<a id="schema_NameValuePair"></a>
<a id="tocSnamevaluepair"></a>
<a id="tocsnamevaluepair"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

This type contains the name-value specifics of a multi-variation listing (<b>variationAspects</b>) or the name-value specifics for all item aspects of a linked line item (<b>linkedOrderLineItems</b>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The text representing the name of the aspect for the name-value pair. For example, <code>color</code>, or <code>Tire Type</code>.|
|value|string|false|none|The value of the aspect for the name-value pair. For example, <code>red</code>, or <code>All Season</code>.|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "buyer": {
    "buyerRegistrationAddress": {
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
      "email": "string",
      "fullName": "string",
      "primaryPhone": {
        "phoneNumber": "string"
      }
    },
    "taxAddress": {
      "city": "string",
      "countryCode": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "taxIdentifier": {
      "issuingCountry": "string",
      "taxIdentifierType": "string",
      "taxpayerId": "string"
    },
    "username": "string"
  },
  "buyerCheckoutNotes": "string",
  "cancelStatus": {
    "cancelRequests": [
      {
        "cancelCompletedDate": "string",
        "cancelInitiator": "string",
        "cancelReason": "string",
        "cancelRequestId": "string",
        "cancelRequestState": "string",
        "cancelRequestedDate": "string"
      }
    ],
    "cancelState": "string",
    "cancelledDate": "string"
  },
  "creationDate": "string",
  "ebayCollectAndRemitTax": true,
  "fulfillmentHrefs": [
    "string"
  ],
  "fulfillmentStartInstructions": [
    {
      "ebaySupportedFulfillment": true,
      "finalDestinationAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "countryCode": "string",
        "county": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "fulfillmentInstructionsType": "string",
      "maxEstimatedDeliveryDate": "string",
      "minEstimatedDeliveryDate": "string",
      "pickupStep": {
        "merchantLocationKey": "string"
      },
      "shippingStep": {
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
          "email": "string",
          "fullName": "string",
          "primaryPhone": {
            "phoneNumber": "string"
          }
        },
        "shipToReferenceId": "string",
        "shippingCarrierCode": "string",
        "shippingServiceCode": "string"
      }
    }
  ],
  "lastModifiedDate": "string",
  "legacyOrderId": "string",
  "lineItems": [
    {
      "appliedPromotions": [
        {
          "description": "string",
          "discountAmount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "promotionId": "string"
        }
      ],
      "deliveryCost": {
        "discountAmount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "handlingCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "importCharges": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "shippingCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "shippingIntermediationFee": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "discountedLineItemCost": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "ebayCollectAndRemitTaxes": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "collectionMethod": "string",
          "ebayReference": {
            "name": "string",
            "value": "string"
          },
          "taxType": "string"
        }
      ],
      "ebayCollectedCharges": {
        "ebayShipping": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "giftDetails": {
        "message": "string",
        "recipientEmail": "string",
        "senderName": "string"
      },
      "itemLocation": {
        "countryCode": "string",
        "location": "string",
        "postalCode": "string"
      },
      "legacyItemId": "string",
      "legacyVariationId": "string",
      "lineItemCost": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "lineItemFulfillmentInstructions": {
        "guaranteedDelivery": true,
        "maxEstimatedDeliveryDate": "string",
        "minEstimatedDeliveryDate": "string",
        "shipByDate": "string"
      },
      "lineItemFulfillmentStatus": "string",
      "lineItemId": "string",
      "linkedOrderLineItems": [
        {
          "lineItemAspects": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "lineItemId": "string",
          "maxEstimatedDeliveryDate": "string",
          "minEstimatedDeliveryDate": "string",
          "orderId": "string",
          "sellerId": "string",
          "shipments": [
            {
              "shipmentTrackingNumber": "string",
              "shippingCarrierCode": "string"
            }
          ],
          "title": "string"
        }
      ],
      "listingMarketplaceId": "string",
      "properties": {
        "buyerProtection": true,
        "fromBestOffer": true,
        "soldViaAdCampaign": true
      },
      "purchaseMarketplaceId": "string",
      "quantity": 0,
      "refunds": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "refundDate": "string",
          "refundId": "string",
          "refundReferenceId": "string"
        }
      ],
      "sku": "string",
      "soldFormat": "string",
      "taxes": [
        {
          "amount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "taxType": "string"
        }
      ],
      "title": "string",
      "total": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "variationAspects": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "orderFulfillmentStatus": "string",
  "orderId": "string",
  "orderPaymentStatus": "string",
  "paymentSummary": {
    "payments": [
      {
        "amount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "paymentDate": "string",
        "paymentHolds": [
          {
            "expectedReleaseDate": "string",
            "holdAmount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "holdReason": "string",
            "holdState": "string",
            "releaseDate": "string",
            "sellerActionsToRelease": [
              {
                "sellerActionToRelease": "string"
              }
            ]
          }
        ],
        "paymentMethod": "string",
        "paymentReferenceId": "string",
        "paymentStatus": "string"
      }
    ],
    "refunds": [
      {
        "amount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "refundDate": "string",
        "refundId": "string",
        "refundReferenceId": "string",
        "refundStatus": "string"
      }
    ],
    "totalDueSeller": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "pricingSummary": {
    "adjustment": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "deliveryCost": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "deliveryDiscount": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "fee": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "priceDiscount": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "priceSubtotal": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "tax": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    },
    "total": {
      "convertedFromCurrency": "string",
      "convertedFromValue": "string",
      "currency": "string",
      "value": "string"
    }
  },
  "program": {
    "authenticityVerification": {
      "outcomeReason": "string",
      "status": "string"
    },
    "ebayInternationalShipping": {
      "returnsManagedBy": "string"
    },
    "ebayShipping": {
      "shippingLabelProvidedBy": "string"
    },
    "ebayVault": {
      "fulfillmentType": "string"
    },
    "fulfillmentProgram": {
      "fulfilledBy": "string"
    }
  },
  "salesRecordReference": "string",
  "sellerId": "string",
  "totalFeeBasisAmount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "totalMarketplaceFee": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer|[Buyer](#schemabuyer)|false|none|This container consists of information about the order's buyer. At this time, only the buyer's eBay user ID is returned, but it's possible that more buyer information can be added to this container in the future.|
|buyerCheckoutNotes|string|false|none|This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time. |
|cancelStatus|[CancelStatus](#schemacancelstatus)|false|none|This container consists of order cancellation information if a cancel request has been made. This container is always returned, and if no cancel request has been made, the <strong>cancelState</strong> field is returned with a value of <code>NONE_REQUESTED</code>, and an empty <strong>cancelRequests</strong> array is also returned.|
|creationDate|string|false|none|The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|ebayCollectAndRemitTax|boolean|false|none|This field is only returned if <code>true</code>, and indicates that eBay will collect tax (US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, 'Goods and Services' tax in Canada, Australia, and New Zealand, and VAT collected for UK and EU countries,) for at least one line item in the order, and remit the tax to the taxing authority of the buyer's residence. If this field is returned, the seller should search for one or more <strong>ebayCollectAndRemitTaxes</strong> containers at the line item level to get more information about the type of tax and the amount.|
|fulfillmentHrefs|[string]|false|none|This array contains a list of one or more <strong>getShippingFulfillment</strong> call URIs that can be used to retrieve shipping fulfillments that have been set up for the order.|
|fulfillmentStartInstructions|[[FulfillmentStartInstruction](#schemafulfillmentstartinstruction)]|false|none|This container consists of a set of specifications for fulfilling the order, including the type of fulfillment, shipping carrier and service, shipping address, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.<br><br><span class="tablenote"><strong>Note:</strong> Although this container is presented as an array, it currently returns only one set of fulfillment specifications. Additional array members will be supported in future functionality.</span>|
|lastModifiedDate|string|false|none|The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|legacyOrderId|string|false|none|The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the <b>orderId</b> field and this field are always returned.|
|lineItems|[[LineItem](#schemalineitem)]|false|none|This array contains the details for all line items that comprise the order.|
|orderFulfillmentStatus|string|false|none|The degree to which fulfillment of the order is complete. See the <strong>OrderFulfillmentStatus</strong> type definition for more information about each possible fulfillment state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus'>eBay API documentation</a>|
|orderId|string|false|none|The unique identifier of the order. Both the <b>legacyOrderId</b> field (traditionally used by Trading and other legacy APIS) and this field are always returned.|
|orderPaymentStatus|string|false|none|The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the <strong>OrderPaymentStatusEnum</strong> type definition for more information about each possible payment/refund state. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum'>eBay API documentation</a>|
|paymentSummary|[PaymentSummary](#schemapaymentsummary)|false|none|This container consists of detailed payment information for the order, including buyer payment for the order, refund information (if applicable), and seller payment holds (if applicable).|
|pricingSummary|[PricingSummary](#schemapricingsummary)|false|none|This container consists of a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.|
|program|[Program](#schemaprogram)|false|none|This container is returned for orders that are eligible for eBay's Authenticity Guarantee service. The seller ships Authenticity Guarantee service items to the authentication partner instead of the buyer. The authenticator address is found in the <code>fulfillmentStartInstructions.shippingStep.shipTo</code> container. If the item is successfully authenticated, the authenticator will ship the item to the buyer.|
|salesRecordReference|string|false|none|An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A <strong>salesRecordReference</strong> number is only generated and returned at the order level, and not at the order line item level.<br><br> In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned.|
|sellerId|string|false|none|The unique eBay user ID of the seller who sold the order.|
|totalFeeBasisAmount|[Amount](#schemaamount)|false|none|This is the cumulative base amount used to calculate the final value fees for each order. The final value fees are deducted from the seller payout associated with the order. Final value fees are calculated as a percentage of order cost (item cost + shipping cost) and the percentage rate can vary by eBay category. |
|totalMarketplaceFee|[Amount](#schemaamount)|false|none|This is the cumulative fees accrued for the order and deducted from the seller payout.|

<h2 id="tocS_OrderLineItems">OrderLineItems</h2>
<!-- backwards compatibility -->
<a id="schemaorderlineitems"></a>
<a id="schema_OrderLineItems"></a>
<a id="tocSorderlineitems"></a>
<a id="tocsorderlineitems"></a>

```json
{
  "itemId": "string",
  "lineItemId": "string"
}
```

This type is used by the <strong>lineItems</strong> array that is used to identify one or more line items in the order with the payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|string|false|none|The unique identifier of the eBay listing associated with the order.|
|lineItemId|string|false|none|The unique identifier of the line item within the order. The <strong>lineItemId</strong> value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer).|

<h2 id="tocS_OrderRefund">OrderRefund</h2>
<!-- backwards compatibility -->
<a id="schemaorderrefund"></a>
<a id="schema_OrderRefund"></a>
<a id="tocSorderrefund"></a>
<a id="tocsorderrefund"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "refundDate": "string",
  "refundId": "string",
  "refundReferenceId": "string",
  "refundStatus": "string"
}
```

This type contains information about a refund issued for an order. This does not include line item level refunds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|This field shows the refund amount for an order. This container is always returned for each refund.<br><br><span class="tablenote"><b>Note:</b> The refund amount shown is the seller's <i><b>net amount</b></i> received from the sale/transaction. eBay-collected tax will not be included in this amount, so the actual amount of the buyer's refund may be higher than this value.</span>|
|refundDate|string|false|none|The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|refundId|string|false|none|Unique identifier of a refund that was initiated for an order through the <b>issueRefund</b> method. If the <b>issueRefund</b> method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (<b>lineItems.refunds.refundId</b> field).<br><br> A <b>refundId</b> value is returned in the response of the <b>issueRefund</b> method, and this same value will be returned in the <b>getOrders</b> and <b>getOrders</b> responses for pending and completed refunds. For other refunds, see the <b>refundReferenceId</b> field.|
|refundReferenceId|string|false|none|The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued.|
|refundStatus|string|false|none|This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_OrderSearchPagedCollection">OrderSearchPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemaordersearchpagedcollection"></a>
<a id="schema_OrderSearchPagedCollection"></a>
<a id="tocSordersearchpagedcollection"></a>
<a id="tocsordersearchpagedcollection"></a>

```json
{
  "href": "string",
  "limit": 0,
  "next": "string",
  "offset": 0,
  "orders": [
    {
      "buyer": {
        "buyerRegistrationAddress": {
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
          "email": "string",
          "fullName": "string",
          "primaryPhone": {
            "phoneNumber": "string"
          }
        },
        "taxAddress": {
          "city": "string",
          "countryCode": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "taxIdentifier": {
          "issuingCountry": "string",
          "taxIdentifierType": "string",
          "taxpayerId": "string"
        },
        "username": "string"
      },
      "buyerCheckoutNotes": "string",
      "cancelStatus": {
        "cancelRequests": [
          {
            "cancelCompletedDate": "string",
            "cancelInitiator": "string",
            "cancelReason": "string",
            "cancelRequestId": "string",
            "cancelRequestState": "string",
            "cancelRequestedDate": "string"
          }
        ],
        "cancelState": "string",
        "cancelledDate": "string"
      },
      "creationDate": "string",
      "ebayCollectAndRemitTax": true,
      "fulfillmentHrefs": [
        "string"
      ],
      "fulfillmentStartInstructions": [
        {
          "ebaySupportedFulfillment": true,
          "finalDestinationAddress": {
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "countryCode": "string",
            "county": "string",
            "postalCode": "string",
            "stateOrProvince": "string"
          },
          "fulfillmentInstructionsType": "string",
          "maxEstimatedDeliveryDate": "string",
          "minEstimatedDeliveryDate": "string",
          "pickupStep": {
            "merchantLocationKey": "string"
          },
          "shippingStep": {
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
              "email": "string",
              "fullName": "string",
              "primaryPhone": {
                "phoneNumber": "string"
              }
            },
            "shipToReferenceId": "string",
            "shippingCarrierCode": "string",
            "shippingServiceCode": "string"
          }
        }
      ],
      "lastModifiedDate": "string",
      "legacyOrderId": "string",
      "lineItems": [
        {
          "appliedPromotions": [
            {
              "description": "string",
              "discountAmount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "promotionId": "string"
            }
          ],
          "deliveryCost": {
            "discountAmount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "handlingCost": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "importCharges": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "shippingCost": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "shippingIntermediationFee": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            }
          },
          "discountedLineItemCost": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "ebayCollectAndRemitTaxes": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "collectionMethod": "string",
              "ebayReference": {
                "name": "string",
                "value": "string"
              },
              "taxType": "string"
            }
          ],
          "ebayCollectedCharges": {
            "ebayShipping": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            }
          },
          "giftDetails": {
            "message": "string",
            "recipientEmail": "string",
            "senderName": "string"
          },
          "itemLocation": {
            "countryCode": "string",
            "location": "string",
            "postalCode": "string"
          },
          "legacyItemId": "string",
          "legacyVariationId": "string",
          "lineItemCost": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "lineItemFulfillmentInstructions": {
            "guaranteedDelivery": true,
            "maxEstimatedDeliveryDate": "string",
            "minEstimatedDeliveryDate": "string",
            "shipByDate": "string"
          },
          "lineItemFulfillmentStatus": "string",
          "lineItemId": "string",
          "linkedOrderLineItems": [
            {
              "lineItemAspects": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "lineItemId": "string",
              "maxEstimatedDeliveryDate": "string",
              "minEstimatedDeliveryDate": "string",
              "orderId": "string",
              "sellerId": "string",
              "shipments": [
                {
                  "shipmentTrackingNumber": "string",
                  "shippingCarrierCode": "string"
                }
              ],
              "title": "string"
            }
          ],
          "listingMarketplaceId": "string",
          "properties": {
            "buyerProtection": true,
            "fromBestOffer": true,
            "soldViaAdCampaign": true
          },
          "purchaseMarketplaceId": "string",
          "quantity": 0,
          "refunds": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "refundDate": "string",
              "refundId": "string",
              "refundReferenceId": "string"
            }
          ],
          "sku": "string",
          "soldFormat": "string",
          "taxes": [
            {
              "amount": {
                "convertedFromCurrency": "string",
                "convertedFromValue": "string",
                "currency": "string",
                "value": "string"
              },
              "taxType": "string"
            }
          ],
          "title": "string",
          "total": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "variationAspects": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "orderFulfillmentStatus": "string",
      "orderId": "string",
      "orderPaymentStatus": "string",
      "paymentSummary": {
        "payments": [
          {
            "amount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "paymentDate": "string",
            "paymentHolds": [
              {
                "expectedReleaseDate": "string",
                "holdAmount": {
                  "convertedFromCurrency": "string",
                  "convertedFromValue": "string",
                  "currency": "string",
                  "value": "string"
                },
                "holdReason": "string",
                "holdState": "string",
                "releaseDate": "string",
                "sellerActionsToRelease": [
                  {
                    "sellerActionToRelease": "string"
                  }
                ]
              }
            ],
            "paymentMethod": "string",
            "paymentReferenceId": "string",
            "paymentStatus": "string"
          }
        ],
        "refunds": [
          {
            "amount": {
              "convertedFromCurrency": "string",
              "convertedFromValue": "string",
              "currency": "string",
              "value": "string"
            },
            "refundDate": "string",
            "refundId": "string",
            "refundReferenceId": "string",
            "refundStatus": "string"
          }
        ],
        "totalDueSeller": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "pricingSummary": {
        "adjustment": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "deliveryCost": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "deliveryDiscount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "fee": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "priceDiscount": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "priceSubtotal": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "tax": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        },
        "total": {
          "convertedFromCurrency": "string",
          "convertedFromValue": "string",
          "currency": "string",
          "value": "string"
        }
      },
      "program": {
        "authenticityVerification": {
          "outcomeReason": "string",
          "status": "string"
        },
        "ebayInternationalShipping": {
          "returnsManagedBy": "string"
        },
        "ebayShipping": {
          "shippingLabelProvidedBy": "string"
        },
        "ebayVault": {
          "fulfillmentType": "string"
        },
        "fulfillmentProgram": {
          "fulfilledBy": "string"
        }
      },
      "salesRecordReference": "string",
      "sellerId": "string",
      "totalFeeBasisAmount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "totalMarketplaceFee": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      }
    }
  ],
  "prev": "string",
  "total": 0,
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

This type contains the specifications for the collection of orders that match the search or filter criteria of a <b>getOrders</b> call. The collection is grouped into a result set, and based on the query parameters that are set (including the <strong>limit</strong> and <strong>offset</strong> parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The URI of the <b>getOrders</b> call request that produced the current page of the result set.|
|limit|integer(int32)|false|none|The maximum number of orders returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>50</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer orders than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of orders matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total orders) and the <strong>limit</strong> value was <code>50</code> (show 50 orders per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getOrders</strong> calls to view all orders matching the input criteria. </span><b>Default:</b> <code>50</code>|
|next|string|false|none|The <b>getOrders</b> call URI to use if you wish to view the  next page of the result set. For example, the following URI returns records 41 thru 50 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=40 </code><br><br>This field is only returned if there is a next page of results to view based on the current input criteria.<br>|
|offset|integer(int32)|false|none|The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>|
|orders|[[Order](#schemaorder)]|false|none|This array contains one or more orders that are part of the current result set, that is controlled by the input criteria. The details of each order include information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. <br><br>By default, orders are returned according to creation date (oldest to newest), but the order will vary according to any filter that is set in request.|
|prev|string|false|none|The <b>getOrders</b> call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: <br><br><code><i>path</i>/order?limit=10&offset=20</code><br><br>This field is only returned if there is a previous page of results to view based on the current input criteria.|
|total|integer(int32)|false|none|The total number of orders in the results set based on the current input criteria.<br><br><span class="tablenote"><strong>Note:</strong> If no orders are found, this field is returned with a value of <code>0</code>.</span>|
|warnings|[[Error](#schemaerror)]|false|none|This array is returned if one or more errors or warnings occur with the call request.|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "paymentDate": "string",
  "paymentHolds": [
    {
      "expectedReleaseDate": "string",
      "holdAmount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "holdReason": "string",
      "holdState": "string",
      "releaseDate": "string",
      "sellerActionsToRelease": [
        {
          "sellerActionToRelease": "string"
        }
      ]
    }
  ],
  "paymentMethod": "string",
  "paymentReferenceId": "string",
  "paymentStatus": "string"
}
```

This type is used to provide details about the seller payments for an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount that seller receives for the order via the payment method mentioned in <strong>Payment.paymentMethod</strong>.<br><br><span class="tablenote"><strong>Note:</strong> For orders that are subject to 'eBay Collect and Remit' tax, which includes US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, 'Good and Services' tax in Canada, Australia, and New Zealand, and VAT collected for UK or EU, the 'Collect and Remit' tax amount for the order will be included in this <strong>amount.value</strong> field (and in the <strong>amount.convertedFromValue</strong> field if currency conversion is applicable).<br><br> To determine if 'Collect and Remit' taxes were added into this <strong>totalDueSeller</strong> value, the user can check for the corresponding <strong>lineItems.ebayCollectAndRemitTaxes</strong> and the <strong>lineItems.taxes</strong> containers in the response. If both of these containers appear for one or more line items in the response with the following <strong>taxType</strong> values, the 'Collect and Remit' tax amount that the buyer paid is included in this amount:<ul><li><code>STATE_SALES_TAX</code>: US</li><li><code>PROVINCE_SALES_TAX</code>: Provincial Sales Tax in Canada</li><li><code>GST</code>: Canada, Australia, and New Zealand</li><li><code>VAT</code>: UK and EU countries</li></ul></span>|
|paymentDate|string|false|none|The date and time that the payment was received by the seller. This field will not be returned if buyer has yet to pay for the order. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|paymentHolds|[[PaymentHold](#schemapaymenthold)]|false|none|This container is only returned if eBay is temporarily holding the seller's funds for the order. If a payment hold has been placed on the order, this container includes the reason for the payment hold, the expected release date of the funds into the seller's account, the current state of the hold, and as soon as the payment hold has been released, the actual release date.|
|paymentMethod|string|false|none|The payment method used to pay for the order. See the <strong>PaymentMethodTypeEnum</strong> type for more information on the payment methods. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentMethodTypeEnum'>eBay API documentation</a>|
|paymentReferenceId|string|false|none|This field is only returned if payment has been made by the buyer, and the <strong>paymentMethod</strong> is <code>ESCROW</code>. This field contains a special ID for ESCROW.|
|paymentStatus|string|false|none|The enumeration value returned in this field indicates the status of the payment for the order. See the <strong>PaymentStatusEnum</strong> type definition for more information on the possible payment states. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_PaymentDispute">PaymentDispute</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdispute"></a>
<a id="schema_PaymentDispute"></a>
<a id="tocSpaymentdispute"></a>
<a id="tocspaymentdispute"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "availableChoices": [
    "string"
  ],
  "buyerProvided": {
    "note": "string",
    "returnShipmentTracking": [
      {
        "shipmentTrackingNumber": "string",
        "shippingCarrierCode": "string"
      }
    ]
  },
  "buyerUsername": "string",
  "closedDate": "string",
  "evidence": [
    {
      "evidenceId": "string",
      "evidenceType": "string",
      "files": [
        {
          "fileId": "string",
          "fileType": "string",
          "name": "string",
          "uploadedDate": "string"
        }
      ],
      "lineItems": [
        {
          "itemId": "string",
          "lineItemId": "string"
        }
      ],
      "providedDate": "string",
      "requestDate": "string",
      "respondByDate": "string",
      "shipmentTracking": [
        {
          "shipmentTrackingNumber": "string",
          "shippingCarrierCode": "string"
        }
      ]
    }
  ],
  "evidenceRequests": [
    {
      "evidenceId": "string",
      "evidenceType": "string",
      "lineItems": [
        {
          "itemId": "string",
          "lineItemId": "string"
        }
      ],
      "requestDate": "string",
      "respondByDate": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ],
  "monetaryTransactions": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "exchangeRate": "string",
        "value": "string"
      },
      "date": "string",
      "reason": "string",
      "type": "string"
    }
  ],
  "note": "string",
  "openDate": "string",
  "orderId": "string",
  "paymentDisputeId": "string",
  "paymentDisputeStatus": "string",
  "reason": "string",
  "resolution": {
    "fees": {
      "currency": "string",
      "value": "string"
    },
    "protectedAmount": {
      "currency": "string",
      "value": "string"
    },
    "protectionStatus": "string",
    "reasonForClosure": "string",
    "recoupAmount": {
      "currency": "string",
      "value": "string"
    },
    "totalFeeCredit": {
      "currency": "string",
      "value": "string"
    }
  },
  "respondByDate": "string",
  "returnAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "fullName": "string",
    "postalCode": "string",
    "primaryPhone": {
      "countryCode": "string",
      "number": "string"
    },
    "stateOrProvince": "string"
  },
  "revision": 0,
  "sellerResponse": "string"
}
```

This type is used by the base response of the <strong>getPaymentDispute</strong> method. The <strong>getPaymentDispute</strong> method retrieves detailed information on a specific payment dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[SimpleAmount](#schemasimpleamount)|false|none|This container shows the dollar value associated with the payment dispute in the currency used by the seller's marketplace.|
|availableChoices|[string]|false|none|The value(s) returned in this array indicate the choices that the seller has when responding to the payment dispute. Once the seller has responded to the payment dispute, this field will no longer be shown, and instead, the <strong>sellerResponse</strong> field will show the decision that the seller made.|
|buyerProvided|[InfoFromBuyer](#schemainfofrombuyer)|false|none|This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.|
|buyerUsername|string|false|none|This is the eBay user ID of the buyer that initiated the payment dispute.|
|closedDate|string|false|none|The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|evidence|[[DisputeEvidence](#schemadisputeevidence)]|false|none|This container shows any evidence that has been provided by the seller to contest the payment dispute. Evidence may include shipment tracking information, proof of authentication documentation, image(s) to proof that an item is as described, or financial documentation/invoice.<br><br>This container is only returned if the seller has provided at least one document used as evidence against the payment dispute.|
|evidenceRequests|[[EvidenceRequest](#schemaevidencerequest)]|false|none|This container is returned if one or more evidence documents are being requested from the seller.|
|lineItems|[[OrderLineItems](#schemaorderlineitems)]|false|none|This array is used to identify one or more order line items associated with the payment dispute. There will always be at least one <b>itemId</b>/<b>lineItemId</b> pair returned in this array.|
|monetaryTransactions|[[MonetaryTransaction](#schemamonetarytransaction)]|false|none|This array provide details about one or more monetary transactions that occur as part of a payment dispute. This array is only returned once one or more monetary transacations occur with a payment dispute.|
|note|string|false|none|This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.<br><br>This field is limited to 1000 characters.|
|openDate|string|false|none|The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|orderId|string|false|none|This is the unique identifier of the order involved in the payment dispute.|
|paymentDisputeId|string|false|none|This is the unique identifier of the payment dispute. This is the same identifier that is passed in to the call URI. This identifier is automatically created by eBay once the payment dispute comes into the eBay system.|
|paymentDisputeStatus|string|false|none|The enumeration value in this field gives the current status of the payment dispute. The status of a payment dispute partially determines other fields that are returned in the response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a>|
|reason|string|false|none|The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a>|
|resolution|[PaymentDisputeOutcomeDetail](#schemapaymentdisputeoutcomedetail)|false|none|This container gives details about a payment dispute that has been resolved. This container is only returned for resolved/closed payment disputes.|
|respondByDate|string|false|none|The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that currently require action by the seller, that same seller should look at the <strong>availableChoices</strong> array to see the available actions.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|returnAddress|[ReturnAddress](#schemareturnaddress)|false|none|This container gives the address where the order will be returned to. This container is returned if the seller is accepting the payment dispute and will issue a refund to the buyer once the item is returned to this address.|
|revision|integer(int32)|false|none|This integer value indicates the revision number of the payment dispute. Each time an action is taken against a payment dispute, this integer value increases by 1.|
|sellerResponse|string|false|none|The enumeration value returned in this field indicates how the seller has responded to the payment dispute. The seller has the option of accepting the payment dispute and agreeing to issue a refund, accepting the payment dispute and agreeing to issue a refund as long as the buyer returns the item, or contesting the payment dispute. This field is returned as soon as the seller makes an initial decision on the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerResponseEnum'>eBay API documentation</a>|

<h2 id="tocS_PaymentDisputeActivity">PaymentDisputeActivity</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdisputeactivity"></a>
<a id="schema_PaymentDisputeActivity"></a>
<a id="tocSpaymentdisputeactivity"></a>
<a id="tocspaymentdisputeactivity"></a>

```json
{
  "activityDate": "string",
  "activityType": "string",
  "actor": "string"
}
```

This type is used by each recorded activity on a payment dispute, from creation to resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityDate|string|false|none|The timestamp in this field shows the date/time of the payment dispute activity.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|activityType|string|false|none|This enumeration value indicates the type of activity that occured on the payment dispute. For example, a value of <code>DISPUTE_OPENED</code> is returned when a payment disute is first created,  a value indicating the seller's decision on the dispute, such as <code>SELLER_CONTEST</code>, is returned when seller makes a decision to accept or contest dispute, and a value of <code>DISPUTE_CLOSED</code> is returned when a payment disute is resolved. See <strong>ActivityEnum</strong> for an explanation of each of the values that may be returned here. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActivityEnum'>eBay API documentation</a>|
|actor|string|false|none|This enumeration value indicates the actor that performed the action. Possible values include the <code>BUYER</code>, <code>SELLER</code>, <code>CS_AGENT</code> (eBay customer service), or <code>SYSTEM</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActorEnum'>eBay API documentation</a>|

<h2 id="tocS_PaymentDisputeActivityHistory">PaymentDisputeActivityHistory</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdisputeactivityhistory"></a>
<a id="schema_PaymentDisputeActivityHistory"></a>
<a id="tocSpaymentdisputeactivityhistory"></a>
<a id="tocspaymentdisputeactivityhistory"></a>

```json
{
  "activity": [
    {
      "activityDate": "string",
      "activityType": "string",
      "actor": "string"
    }
  ]
}
```

This type is used by the base response of the <strong>getActivities</strong> method, and includes a log of all activities of a payment dispute, from creation to resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|[[PaymentDisputeActivity](#schemapaymentdisputeactivity)]|false|none|This array holds all activities of a payment dispute, from creation to resolution. For each activity, the activity type, the actor, and a timestamp is shown. The <strong>getActivities</strong> response is dynamic, and grows with each recorded activity.|

<h2 id="tocS_PaymentDisputeOutcomeDetail">PaymentDisputeOutcomeDetail</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdisputeoutcomedetail"></a>
<a id="schema_PaymentDisputeOutcomeDetail"></a>
<a id="tocSpaymentdisputeoutcomedetail"></a>
<a id="tocspaymentdisputeoutcomedetail"></a>

```json
{
  "fees": {
    "currency": "string",
    "value": "string"
  },
  "protectedAmount": {
    "currency": "string",
    "value": "string"
  },
  "protectionStatus": "string",
  "reasonForClosure": "string",
  "recoupAmount": {
    "currency": "string",
    "value": "string"
  },
  "totalFeeCredit": {
    "currency": "string",
    "value": "string"
  }
}
```

This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fees|[SimpleAmount](#schemasimpleamount)|false|none|This container will show the dollar value of any fees associated with the payment dispute. This container is only returned if there are fees associated with the payment dispute.|
|protectedAmount|[SimpleAmount](#schemasimpleamount)|false|none|This container shows the amount of money that the seller is protected against in a payment dispute under eBay's seller protection policy.|
|protectionStatus|string|false|none|This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum'>eBay API documentation</a>|
|reasonForClosure|string|false|none|The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum'>eBay API documentation</a>|
|recoupAmount|[SimpleAmount](#schemasimpleamount)|false|none|This container shows the dollar amount being recouped from the seller. This container is empty if the seller wins the payment dispute or if the seller is fully protected by eBay's seller protection policy.|
|totalFeeCredit|[SimpleAmount](#schemasimpleamount)|false|none|This container shows the amount of money in selling fee credits due back to the seller after a payment dispute is settled.|

<h2 id="tocS_PaymentDisputeSummary">PaymentDisputeSummary</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdisputesummary"></a>
<a id="schema_PaymentDisputeSummary"></a>
<a id="tocSpaymentdisputesummary"></a>
<a id="tocspaymentdisputesummary"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "buyerUsername": "string",
  "closedDate": "string",
  "openDate": "string",
  "orderId": "string",
  "paymentDisputeId": "string",
  "paymentDisputeStatus": "string",
  "reason": "string",
  "respondByDate": "string"
}
```

This type is used by each payment dispute that is returned with the <strong>getPaymentDisputeSummaries</strong> method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[SimpleAmount](#schemasimpleamount)|false|none|This container shows the dollar value associated with the payment dispute in the currency used by the seller's marketplace. This container is returned for all payment disputes returned in the response.|
|buyerUsername|string|false|none|This is the buyer's eBay user ID. This field is returned for all payment disputes returned in the response.|
|closedDate|string|false|none|The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the <code>CLOSED</code> state.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|openDate|string|false|none|The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|
|orderId|string|false|none|This is the unique identifier of the order involved in the payment dispute.|
|paymentDisputeId|string|false|none|This is the unique identifier of the payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. This identifier is passed in at the end of the <strong>getPaymentDispute</strong> call URI to retrieve a specific payment dispute. The <strong>getPaymentDispute</strong> method returns more details about a payment dispute than the <strong>getPaymentDisputeSummaries</strong> method.|
|paymentDisputeStatus|string|false|none|The enumeration value in this field gives the current status of the payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum'>eBay API documentation</a>|
|reason|string|false|none|The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See <strong>DisputeReasonEnum</strong> type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum'>eBay API documentation</a>|
|respondByDate|string|false|none|The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the <code>ACTION_NEEDED</code> state. For payment disputes that require action by the seller, that same seller must call <strong>getPaymentDispute</strong> to see the next action(s) that they can take against the payment dispute.<br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.|

<h2 id="tocS_PaymentHold">PaymentHold</h2>
<!-- backwards compatibility -->
<a id="schemapaymenthold"></a>
<a id="schema_PaymentHold"></a>
<a id="tocSpaymenthold"></a>
<a id="tocspaymenthold"></a>

```json
{
  "expectedReleaseDate": "string",
  "holdAmount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "holdReason": "string",
  "holdState": "string",
  "releaseDate": "string",
  "sellerActionsToRelease": [
    {
      "sellerActionToRelease": "string"
    }
  ]
}
```

This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedReleaseDate|string|false|none|The date and time that the payment being held is expected to be released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field will be returned if known by eBay. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|holdAmount|[Amount](#schemaamount)|false|none|The monetary amount of the payment being held. This field is always returned with the <strong>paymentHolds</strong> array. |
|holdReason|string|false|none|The reason that the payment is being held. A seller's payment may be held for a number of reasons, including when the seller is new, the seller's level is below standard, or if a return case or 'Significantly not as described' case is pending against the seller. This field is always returned with the <strong>paymentHolds</strong> array.|
|holdState|string|false|none|The current stage or condition of the hold. This field is always returned with the <strong>paymentHolds</strong> array.<br><br><b>Applicable values:</b><ul><li><code>HELD</code></li><li><code>HELD_PENDING</code></li><li><code>NOT_HELD</code></li><li><code>RELEASE_CONFIRMED</code></li><li><code>RELEASE_FAILED</code></li><li><code>RELEASE_PENDING</code></li><li><code>RELEASED</code></li></ul>|
|releaseDate|string|false|none|The date and time that the payment being held was actually released to the seller. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the seller's payment is actually released into the seller's account.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|sellerActionsToRelease|[[SellerActionsToRelease](#schemaselleractionstorelease)]|false|none|A list of one or more possible actions that the seller can take to expedite the release of the payment hold.|

<h2 id="tocS_PaymentSummary">PaymentSummary</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsummary"></a>
<a id="schema_PaymentSummary"></a>
<a id="tocSpaymentsummary"></a>
<a id="tocspaymentsummary"></a>

```json
{
  "payments": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "paymentDate": "string",
      "paymentHolds": [
        {
          "expectedReleaseDate": "string",
          "holdAmount": {
            "convertedFromCurrency": "string",
            "convertedFromValue": "string",
            "currency": "string",
            "value": "string"
          },
          "holdReason": "string",
          "holdState": "string",
          "releaseDate": "string",
          "sellerActionsToRelease": [
            {
              "sellerActionToRelease": "string"
            }
          ]
        }
      ],
      "paymentMethod": "string",
      "paymentReferenceId": "string",
      "paymentStatus": "string"
    }
  ],
  "refunds": [
    {
      "amount": {
        "convertedFromCurrency": "string",
        "convertedFromValue": "string",
        "currency": "string",
        "value": "string"
      },
      "refundDate": "string",
      "refundId": "string",
      "refundReferenceId": "string",
      "refundStatus": "string"
    }
  ],
  "totalDueSeller": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

This type contains information about the various monetary exchanges that apply to the net balance due for the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payments|[[Payment](#schemapayment)]|false|none|This array consists of payment information for the order, including payment status, payment method, payment amount, and payment date. This array is always returned, although some of the fields under this container will not be returned until payment has been made.|
|refunds|[[OrderRefund](#schemaorderrefund)]|false|none|This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund.|
|totalDueSeller|[Amount](#schemaamount)|false|none|This is the total price that the seller receives for the entire order after all costs (item cost, delivery cost, taxes) are added for all line items, minus any discounts and/or promotions for any of the line items. Note that this value is subject to change before payment is actually made by the buyer (if the <strong>paymentStatus</strong> value was <code>PENDING</code> or <code>FAILED</code>), or if a partial or full refund occurs with the order.<br><br><span class="tablenote"><strong>Note:</strong> For orders that are subject to 'eBay Collect and Remit' tax, the 'Collect and Remit' tax amount for the order will be included in this <strong>totalDueSeller</strong> value.<br><br>To determine if 'Collect and Remit' taxes were added into this <strong>totalDueSeller</strong> value, the user can check for the corresponding <strong>lineItems.ebayCollectAndRemitTaxes</strong> and the <strong>lineItems.taxes</strong> containers in the response. If both of these containers appear for one or more line items in the response with the following <strong>taxType</strong> values, the 'Collect and Remit' tax amount that the buyer paid is included in this amount:<ul><li><code>STATE_SALES_TAX</code>: US</li><li><code>PROVINCE_SALES_TAX</code>: Provincial Sales Tax in Canada</li><li><code>GST</code>: Canada, Australia, and New Zealand</li><li><code>VAT</code>: VAT collected for UK and EU countries</li></ul></span>|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "countryCode": "string",
  "number": "string"
}
```

This type is used by the <strong>returnAddress</strong field that is used by the payment dispute methods. If a buyer is returning the item (under payment dispute) to the seller, a primary phone number for the seller must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The seller's country calling code. This field is needed if the buyer is located in a different country than the seller. It is also OK to provide if the buyer and seller are both located in the same country. For a full list of calling codes for all countries, see the <a href="https://countrycode.org/ " target="_blank">countrycode.org</a> site.|
|number|string|false|none|The seller's primary phone number associated with the return address. When this number is provided in a <strong>contestPaymentDispute</strong> or <strong>contestPaymentDispute</strong> method, it is provided as one continuous numeric string, including the area code. So, if the phone number's area code was '408', a number in this field may look something like this: <br><br><code>"number" : "4088084356"</code><br><br>If the buyer is located in a different country than the seller, the seller's country calling code will need to be specified in the <strong>countryCode</strong> field.|

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

This type contains a string field representing a telephone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|The primary telephone number for the shipping recipient.|

<h2 id="tocS_PickupStep">PickupStep</h2>
<!-- backwards compatibility -->
<a id="schemapickupstep"></a>
<a id="schema_PickupStep"></a>
<a id="tocSpickupstep"></a>
<a id="tocspickupstep"></a>

```json
{
  "merchantLocationKey": "string"
}
```

This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The <b>pickupStep</b> container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantLocationKey|string|false|none|A merchant-defined unique identifier of the merchant's store where the buyer will pick up their In-Store Pickup order.<br><br> This field is always returned with the <b>pickupStep</b> container.|

<h2 id="tocS_PostSaleAuthenticationProgram">PostSaleAuthenticationProgram</h2>
<!-- backwards compatibility -->
<a id="schemapostsaleauthenticationprogram"></a>
<a id="schema_PostSaleAuthenticationProgram"></a>
<a id="tocSpostsaleauthenticationprogram"></a>
<a id="tocspostsaleauthenticationprogram"></a>

```json
{
  "outcomeReason": "string",
  "status": "string"
}
```

This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outcomeReason|string|false|none|This field indicates the result of the authenticity verification inspection on an order line item. This field is not returned when the status value of the order line item is <code>PENDING</code> or <code>PASSED</code>. The possible values returned here are <code>NOT_AUTHENTIC</code>, <code>NOT_AS_DESCRIBED</code>, <code>CUSTOMIZED</code>, <code>MISCATEGORIZED</code>, or <code>NOT_AUTHENTIC_NO_RETURN</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationReasonEnum'>eBay API documentation</a>|
|status|string|false|none|The value in this field indicates whether the order line item has passed or failed the authenticity verification inspection, or if the inspection and/or results are still pending. The possible values returned here are <code>PENDING</code>, <code>PASSED</code>, <code>FAILED</code>, or <code>PASSED_WITH_EXCEPTION</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:AuthenticityVerificationStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_PricingSummary">PricingSummary</h2>
<!-- backwards compatibility -->
<a id="schemapricingsummary"></a>
<a id="schema_PricingSummary"></a>
<a id="tocSpricingsummary"></a>
<a id="tocspricingsummary"></a>

```json
{
  "adjustment": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "deliveryCost": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "deliveryDiscount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "fee": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "priceDiscount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "priceSubtotal": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "tax": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "total": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  }
}
```

This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|[Amount](#schemaamount)|false|none|This container shows the total amount of any adjustments that were applied to the cost of the item(s) in the order. This amount does not include shipping, discounts, fixed fees, or taxes.<br><br>This container is only returned if price adjustments were made to the order after the initial transaction/commitment to buy occurred.|
|deliveryCost|[Amount](#schemaamount)|false|none|This container shows the total cost of delivering the order to the buyer, before any shipping/delivery discount is applied.|
|deliveryDiscount|[Amount](#schemaamount)|false|none|This container shows the total amount of delivery discounts (including shipping discounts) that apply to the order. This should be a negative real number.<br><br>This container is only returned if delivery discounts are being applied to the order.|
|fee|[Amount](#schemaamount)|false|none|This container shows the total amount of any special fees applied to the order, such as a tire recycling fee or an electronic waste fee. <br><br>This container is returned if special fees are being applied to the order and if the <b>fieldGroups</b> is set to <code>TAX_BREAKDOWN</code>.|
|priceDiscount|[Amount](#schemaamount)|false|none|This container shows the total amount of all item price discounts (including promotions) that apply to the order and reduce its cost to the buyer. This should be a negative real number. <br><br>This container is only returned if special discounts are being applied to the order.|
|priceSubtotal|[Amount](#schemaamount)|false|none|This container shows the cumulative costs of of all units of all line items in the order, before any discount is applied.|
|tax|[Amount](#schemaamount)|false|none|This container shows the total amount of tax for the order. To calculate the tax percentage rate, divide this value by the value of the <b>total</b> field. <br><br>This container is only returned if any type of tax (sales tax, tax on shipping, tax on handling, import tax, etc.) is applied to the order.|
|total|[Amount](#schemaamount)|false|none|The total cost of the order after adding all line item costs, delivery costs, sales tax, and special fees, and then subtracting all special discounts and price adjustments.<br><br><span class="tablenote"><strong>Note:</strong> For orders that are subject to 'eBay Collect and Remit' tax, the 'Collect and Remit' tax amount for the order will be included in this <strong>total</strong> value only when the <strong>fieldGroups</strong> query parameter is set to <code>TAX_BREAKDOWN</code>. If the <strong>fieldGroups</strong> query parameter is not set to <code>TAX_BREAKDOWN</code>, 'Collect and Remit' will not be added into this <strong>total</strong> value.<br><br>To determine if 'Collect and Remit' taxes were added into this <strong>total</strong> value, the user can check for the corresponding <strong>lineItems.ebayCollectAndRemitTaxes</strong> and the <strong>lineItems.taxes</strong> containers in the response. If both of these containers appear for one or more line items in the response with the following <strong>taxType</strong> values, the 'Collect and Remit' tax amount that the buyer paid is included in this amount:<ul><li><code>STATE_SALES_TAX</code>: US state-mandated sales tax</li><li><code>PROVINCE_SALES_TAX</code>: Provincial Sales Tax in Canada</li><li><code>GST</code>: 'Good and Services' tax in Canada, Australia, and New Zealand</li><li><code>VAT</code>: VAT collected for UK and EU countries</li></ul></span>|

<h2 id="tocS_Program">Program</h2>
<!-- backwards compatibility -->
<a id="schemaprogram"></a>
<a id="schema_Program"></a>
<a id="tocSprogram"></a>
<a id="tocsprogram"></a>

```json
{
  "authenticityVerification": {
    "outcomeReason": "string",
    "status": "string"
  },
  "ebayInternationalShipping": {
    "returnsManagedBy": "string"
  },
  "ebayShipping": {
    "shippingLabelProvidedBy": "string"
  },
  "ebayVault": {
    "fulfillmentType": "string"
  },
  "fulfillmentProgram": {
    "fulfilledBy": "string"
  }
}
```

This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticityVerification|[PostSaleAuthenticationProgram](#schemapostsaleauthenticationprogram)|false|none|This field is returned when the third-party authenticator performs the authentication verification inspection on the order line item. Different values will be returned based on whether the item passed or failed the authentication verification inspection.|
|ebayInternationalShipping|[EbayInternationalShipping](#schemaebayinternationalshipping)|false|none|This container is returned if the order is being fulfilled through eBay International Shipping.|
|ebayShipping|[EbayShipping](#schemaebayshipping)|false|none|This container is returned only if the order is an eBay shipping order. It consists of a field that indicates the provider of a shipping label for this order.|
|ebayVault|[EbayVaultProgram](#schemaebayvaultprogram)|false|none|This field provides information about the eBay vault program that has been selected for an order. This is returned only for those items that are eligible for the eBay Vault Program.|
|fulfillmentProgram|[EbayFulfillmentProgram](#schemaebayfulfillmentprogram)|false|none|This field provides details about an order line item being handled by eBay fulfillment. It is only returned for paid orders being fulfilled by eBay or an eBay fulfillment partner.|

<h2 id="tocS_Refund">Refund</h2>
<!-- backwards compatibility -->
<a id="schemarefund"></a>
<a id="schema_Refund"></a>
<a id="tocSrefund"></a>
<a id="tocsrefund"></a>

```json
{
  "refundId": "string",
  "refundStatus": "string"
}
```

This is the base type of the <b>issueRefund</b> response payload. As long as the <b>issueRefund</b> method does not trigger an error, a response payload will be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refundId|string|false|none|The unique identifier of the order refund. This value is returned unless the refund operation fails (<b>refundStatus</b> value shows <code>FAILED</code>). This identifier can be used to track the status of the refund through a <b>getOrder</b> or <b>getOrders</b> call. For order-level refunds, check the <b>paymentSummary.refunds.refundId</b> field in the <b>getOrder</b>/<b>getOrders</b> response, and for line item level refunds, check the <b>lineItems.refunds.refundId</b> field(s) in the <b>getOrder</b>/<b>getOrders</b> response.|
|refundStatus|string|false|none|The value returned in this field indicates the success or failure of the refund operation. A successful <b>issueRefund</b> operation should result in a value of <code>PENDING</code>. A failed <b>issueRefund</b> operation should result in a value of <code>FAILED</code>, and an HTTP status code and/or and API error code may also get returned to possibly indicate the issue.<br><br>The refunds issued through this method are processed asynchronously, so the refund will not show as 'Refunded' right away. A seller will have to make a subsequent <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> call to check the status of the refund.  The status of an order refund can be found in the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus" target="_blank">paymentSummary.refunds.refundStatus</a> field of the <a href="https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder" target="_blank">getOrder</a> response. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum'>eBay API documentation</a>|

<h2 id="tocS_RefundItem">RefundItem</h2>
<!-- backwards compatibility -->
<a id="schemarefunditem"></a>
<a id="schema_RefundItem"></a>
<a id="tocSrefunditem"></a>
<a id="tocsrefunditem"></a>

```json
{
  "legacyReference": {
    "legacyItemId": "string",
    "legacyTransactionId": "string"
  },
  "lineItemId": "string",
  "refundAmount": {
    "currency": "string",
    "value": "string"
  }
}
```

This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the <b>orderLevelRefundAmount</b> container to specify the amount of the refund for the entire order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyReference|[LegacyReference](#schemalegacyreference)|false|none|This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID/transaction ID pair to identify the order line item. Either this container or the <b>lineItemId</b> field is needed to identify an individual order line item that will receive a refund. <br><br><span class="tablenote"><strong>Note:</strong> The <b>lineItemId</b> field is used to identify an order line item in REST API format, and the  <b>legacyReference</b> container is used to identify an order line item in Trading/legacy API format. Both legacy and REST API identifiers are returned in <b>getOrder</b> (Fulfillment API) and <b>GetOrders</b> (Trading API).</span>|
|lineItemId|string|false|none|The unique identifier of an order line item. This identifier is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. Either this field or the <b>legacyReference</b> container is needed to identify an individual order line item that will receive a refund.<br><br><span class="tablenote"><strong>Note:</strong> The <b>lineItemId</b> field is used to identify an order line item in REST API format, and the  <b>legacyReference</b> container is used to identify an order line item in Trading/legacy API format. Both legacy and REST API identifiers are returned in <b>getOrder</b> (Fulfillment API) and <b>GetOrders</b> (Trading API).</span>|
|refundAmount|[SimpleAmount](#schemasimpleamount)|false|none|This container is used to specify the amount of the refund for the corresponding order line item. If a seller wants to issue a refund for an entire order, the seller would use the <b>orderLevelRefundAmount</b> container instead.|

<h2 id="tocS_ReturnAddress">ReturnAddress</h2>
<!-- backwards compatibility -->
<a id="schemareturnaddress"></a>
<a id="schema_ReturnAddress"></a>
<a id="tocSreturnaddress"></a>
<a id="tocsreturnaddress"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "country": "string",
  "county": "string",
  "fullName": "string",
  "postalCode": "string",
  "primaryPhone": {
    "countryCode": "string",
    "number": "string"
  },
  "stateOrProvince": "string"
}
```

This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|The first line of the street address.|
|addressLine2|string|false|none|The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line.|
|city|string|false|none|The city of the return address.|
|country|string|false|none|The country's two-digt, ISO 3166-1 country code. See the enumeration type for a country's value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|county|string|false|none|The county of the return address. Counties are not applicable to all countries.|
|fullName|string|false|none|The full name of return address owner.|
|postalCode|string|false|none|The postal code of the return address.|
|primaryPhone|[Phone](#schemaphone)|false|none|This container shows the seller's primary phone number associated with the return address.|
|stateOrProvince|string|false|none|The state or province of the return address.|

<h2 id="tocS_SellerActionsToRelease">SellerActionsToRelease</h2>
<!-- backwards compatibility -->
<a id="schemaselleractionstorelease"></a>
<a id="schema_SellerActionsToRelease"></a>
<a id="tocSselleractionstorelease"></a>
<a id="tocsselleractionstorelease"></a>

```json
{
  "sellerActionToRelease": "string"
}
```

This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sellerActionToRelease|string|false|none|A possible action that the seller can take to expedite the release of a payment hold. A <strong>sellerActionToRelease</strong> field is returned for each possible action that a seller may take. Possible actions may include providing shipping/tracking information, issuing a refund, providing refund information, contacting customer support, etc.|

<h2 id="tocS_ShippingFulfillment">ShippingFulfillment</h2>
<!-- backwards compatibility -->
<a id="schemashippingfulfillment"></a>
<a id="schema_ShippingFulfillment"></a>
<a id="tocSshippingfulfillment"></a>
<a id="tocsshippingfulfillment"></a>

```json
{
  "fulfillmentId": "string",
  "lineItems": [
    {
      "lineItemId": "string",
      "quantity": 0
    }
  ],
  "shipmentTrackingNumber": "string",
  "shippedDate": "string",
  "shippingCarrierCode": "string"
}
```

This type contains the complete details of an existing fulfillment for an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfillmentId|string|false|none|The unique identifier of the fulfillment; for example, <code>9405509699937003457459</code>. This eBay-generated value is created with a successful <b>createShippingFulfillment</b> call.|
|lineItems|[[LineItemReference](#schemalineitemreference)]|false|none|This array contains a list of one or more line items (and purchased quantity) to which the fulfillment applies.|
|shipmentTrackingNumber|string|false|none|The tracking number provided by the shipping carrier for the package shipped in this fulfillment. This field is returned if available.|
|shippedDate|string|false|none|The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field should only be returned if the package has been shipped.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code>|
|shippingCarrierCode|string|false|none|The eBay code identifying the shipping carrier for this fulfillment. This field is returned if available. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <b>ShippingCarrierCodeType</b> enumeration type contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See <a href="https://developer.ebay.com/Devzone/XML/docs/Reference/eBay/types/ShippingCarrierCodeType.html " target="_blank">ShippingCarrierCodeType</a>.</span>|

<h2 id="tocS_ShippingFulfillmentDetails">ShippingFulfillmentDetails</h2>
<!-- backwards compatibility -->
<a id="schemashippingfulfillmentdetails"></a>
<a id="schema_ShippingFulfillmentDetails"></a>
<a id="tocSshippingfulfillmentdetails"></a>
<a id="tocsshippingfulfillmentdetails"></a>

```json
{
  "lineItems": [
    {
      "lineItemId": "string",
      "quantity": 0
    }
  ],
  "shippedDate": "string",
  "shippingCarrierCode": "string",
  "trackingNumber": "string"
}
```

This type contains the details for creating a fulfillment for an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineItems|[[LineItemReference](#schemalineitemreference)]|false|none|This array contains a list of or more line items and the quantity that will be shipped in the same package.|
|shippedDate|string|false|none|This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.<br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2015-08-04T19:09:02.768Z</code><br><br><b>Default:</b> The current date and time.|
|shippingCarrierCode|string|false|none|The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the <strong>shippingCarrierCode</strong> and <strong>trackingNumber</strong> fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. <br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier enumeration values. When making the <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingCarrierDetails</code>. Each valid shipping carrier enumeration value is returned in a <strong>ShippingCarrierDetails.ShippingCarrier</strong> field in the response payload.</span>|
|trackingNumber|string|false|none|The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.<br><br>This field and the <b>shippingCarrierCode</b> field are mutually dependent. If you include one, you must also include the other.<br><br><span class="tablenote"><strong>Note:</strong> If you include <b>trackingNumber</b> (and <b>shippingCarrierCode</b>) in the request, the resulting fulfillment's ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as <code>999</code>.</span><br><span class="tablenote"><strong>Note:</strong> Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.</span>|

<h2 id="tocS_ShippingFulfillmentPagedCollection">ShippingFulfillmentPagedCollection</h2>
<!-- backwards compatibility -->
<a id="schemashippingfulfillmentpagedcollection"></a>
<a id="schema_ShippingFulfillmentPagedCollection"></a>
<a id="tocSshippingfulfillmentpagedcollection"></a>
<a id="tocsshippingfulfillmentpagedcollection"></a>

```json
{
  "fulfillments": [
    {
      "fulfillmentId": "string",
      "lineItems": [
        {
          "lineItemId": "string",
          "quantity": 0
        }
      ],
      "shipmentTrackingNumber": "string",
      "shippedDate": "string",
      "shippingCarrierCode": "string"
    }
  ],
  "total": 0,
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

This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fulfillments|[[ShippingFulfillment](#schemashippingfulfillment)]|false|none|This array contains one or more fulfillments required for the order that was specified in method endpoint.|
|total|integer(int32)|false|none|The total number of fulfillments in the specified order.<br><br><span class="tablenote"><strong>Note:</strong> If no fulfillments are found for the order, this field is returned with a value of <code>0</code>.</span>|
|warnings|[[Error](#schemaerror)]|false|none|This array is only returned if one or more errors or warnings occur with the call request.|

<h2 id="tocS_ShippingStep">ShippingStep</h2>
<!-- backwards compatibility -->
<a id="schemashippingstep"></a>
<a id="schema_ShippingStep"></a>
<a id="tocSshippingstep"></a>
<a id="tocsshippingstep"></a>

```json
{
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
    "email": "string",
    "fullName": "string",
    "primaryPhone": {
      "phoneNumber": "string"
    }
  },
  "shipToReferenceId": "string",
  "shippingCarrierCode": "string",
  "shippingServiceCode": "string"
}
```

This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipTo|[ExtendedContact](#schemaextendedcontact)|false|none|This container consists of shipping and contact information about the individual or organization to whom the fulfillment package will be shipped.<br><span class="tablenote"><strong>Note:</strong> When <b>FulfillmentInstructionsType</b> is <code>FULFILLED_BY_EBAY</code>, there will be no <b>shipTo</b> address displayed.</span><br><span class="tablenote"><strong>Note:</strong> For Digitally Delivered Goods (DDG), this address is the same as the Buyer's Registration Address.</span><br><span class="tablenote"><strong>Note:</strong> For a Global Shipping Program shipment, this is the address of the international shipping provider's domestic warehouse. The international shipping provider is responsible for delivery to the final destination address. For more information, see <a href="https://developer.ebay.com/devzone/guides/features-guide/default.html#Development/Shipping-APIWork.html#AddressingaGlobalShippingProgramShipment " target="_blank">Addressing a Global Shipping Program Shipment</a>.</span>|
|shipToReferenceId|string|false|none|This is the unique identifer of the Global Shipping Program (GSP) shipment. This field is only returned if the line item is being shipped via GSP (the value of the <b>fulfillmentStartInstructions.ebaySupportedFulfillment</b> field will be <code>true</code>. The international shipping provider uses the <b>shipToReferenceId</b> value as the primary reference number to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. <br><br>Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. <br><br>Example: "Reference #1234567890123456" <br><br><span class="tablenote"><strong>Note:</strong> This value is the same as the <b>ShipToAddress.ReferenceID</b> value returned by the Trading API's GetOrders call.</span>|
|shippingCarrierCode|string|false|none|The unique identifier of the shipping carrier being used to ship the line item. <br><br><span class="tablenote"><strong>Note:</strong> The Trading API's <a href="https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call can be used to retrieve the latest shipping carrier and shipping service option enumeration values.</span>|
|shippingServiceCode|string|false|none|The unique identifier of the shipping service option being used to ship the line item.<br><br><span class="tablenote"><strong>Note:</strong> Use the Trading API's <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call to retrieve the latest shipping carrier and shipping service option enumeration values. When making the <a href="/devzone/XML/docs/Reference/eBay/GeteBayDetails.html " target="_blank">GeteBayDetails</a> call, include the <strong>DetailName</strong> field in the request payload and set its value to <code>ShippingServiceDetails</code>. Each valid shipping service option (returned in <strong>ShippingServiceDetails.ShippingService</strong> field) and corresponding shipping carrier (returned in <strong>ShippingServiceDetails.ShippingCarrier</strong> field) is returned in response payload.</span>|

<h2 id="tocS_SimpleAmount">SimpleAmount</h2>
<!-- backwards compatibility -->
<a id="schemasimpleamount"></a>
<a id="schema_SimpleAmount"></a>
<a id="tocSsimpleamount"></a>
<a id="tocssimpleamount"></a>

```json
{
  "currency": "string",
  "value": "string"
}
```

This type defines the monetary value of the payment dispute, and the currency used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|A three-letter ISO 4217 code (such as <code>USD</code> for US site) that indicates the currency of the amount in the <strong>value</strong> field. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>|
|value|string|false|none|The monetary amount of the payment dispute. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container.|

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "amount": {
    "convertedFromCurrency": "string",
    "convertedFromValue": "string",
    "currency": "string",
    "value": "string"
  },
  "taxType": "string"
}
```

This type contains information about any sales tax applied to a line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The monetary amount of the tax. The <strong>taxes</strong> array is always returned for each line item in the order, but this <strong>amount</strong> will only be returned when the line item is subject to any type of sales tax. |
|taxType|string|false|none|Tax type. This field is only available when <strong>fieldGroups</strong> is set to <code>TAX_BREAKDOWN</code>. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>|

<h2 id="tocS_TaxAddress">TaxAddress</h2>
<!-- backwards compatibility -->
<a id="schemataxaddress"></a>
<a id="schema_TaxAddress"></a>
<a id="tocStaxaddress"></a>
<a id="tocstaxaddress"></a>

```json
{
  "city": "string",
  "countryCode": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

This container consists of address information that can be used by sellers for tax purpose.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city name that can be used by sellers for tax purpose.|
|countryCode|string|false|none|The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, <strong>US</strong> represents the United States, and <strong>DE</strong> represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|postalCode|string|false|none|The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US.|
|stateOrProvince|string|false|none|The state name that can be used by sellers for tax purpose.|

<h2 id="tocS_TaxIdentifier">TaxIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemataxidentifier"></a>
<a id="schema_TaxIdentifier"></a>
<a id="tocStaxidentifier"></a>
<a id="tocstaxidentifier"></a>

```json
{
  "issuingCountry": "string",
  "taxIdentifierType": "string",
  "taxpayerId": "string"
}
```

This type is used by the <strong>taxIdentifier</strong> container that is returned in <strong>getOrder</strong>. The <strong>taxIdentifier</strong> container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class="tablenote"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuingCountry|string|false|none|This two-letter code indicates the country that issued the buyer's tax ID. The country that the two-letter code represents can be found in the <strong>CountryCodeEnum</strong> type, or in the  <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>|
|taxIdentifierType|string|false|none|This enumeration value indicates the type of tax identification being used for the buyer. The different tax types are defined in the <strong>TaxIdentifierTypeEnum</strong> type. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxIdentifierTypeEnum'>eBay API documentation</a>|
|taxpayerId|string|false|none|This value is the unique tax ID associated with the buyer. The type of tax identification is shown in the <strong>taxIdentifierType</strong> field.|

<h2 id="tocS_TrackingInfo">TrackingInfo</h2>
<!-- backwards compatibility -->
<a id="schematrackinginfo"></a>
<a id="schema_TrackingInfo"></a>
<a id="tocStrackinginfo"></a>
<a id="tocstrackinginfo"></a>

```json
{
  "shipmentTrackingNumber": "string",
  "shippingCarrierCode": "string"
}
```

This type is used for seller provided shipment tracking information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shipmentTrackingNumber|string|false|none|This string value represents the shipment tracking number of the package.|
|shippingCarrierCode|string|false|none|This string value represents the shipping carrier used to ship the package.|

<h2 id="tocS_UpdateEvidencePaymentDisputeRequest">UpdateEvidencePaymentDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevidencepaymentdisputerequest"></a>
<a id="schema_UpdateEvidencePaymentDisputeRequest"></a>
<a id="tocSupdateevidencepaymentdisputerequest"></a>
<a id="tocsupdateevidencepaymentdisputerequest"></a>

```json
{
  "evidenceId": "string",
  "evidenceType": "string",
  "files": [
    {
      "fileId": "string"
    }
  ],
  "lineItems": [
    {
      "itemId": "string",
      "lineItemId": "string"
    }
  ]
}
```

This type is used by the request payload of the <strong>updateEvidence</strong> method. The <strong>updateEvidence</strong> method is used to update an existing evidence set against a payment dispute with one or more evidence files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceId|string|false|none|The unique identifier of the evidence set that is being updated with new evidence files.|
|evidenceType|string|false|none|This field is used to indicate the type of evidence being provided through one or more evidence files. All evidence files (if more than one) should be associated with the evidence type passed in this field. See the <strong>EvidenceTypeEnum</strong> type for the supported evidence types. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/api:EvidenceTypeEnum'>eBay API documentation</a>|
|files|[[FileEvidence](#schemafileevidence)]|false|none|This array is used to specify one or more evidence files that will be added to the evidence set associated with a payment dispute. At least one evidence file must be specified in the <strong>files</strong> array.<br><br> The unique identifier of an evidence file is returned in the response payload of the <strong>uploadEvidence</strong> method.|
|lineItems|[[OrderLineItems](#schemaorderlineitems)]|false|none|This required array identifies the order line item(s) for which the evidence file(s) will be applicable. Both the <strong>itemId</strong> and <strong>lineItemID</strong> fields are needed to identify each order line item, and both of these values are returned under the <strong>evidenceRequests.lineItems</strong> array in the <strong>getPaymentDispute</strong> response.|
