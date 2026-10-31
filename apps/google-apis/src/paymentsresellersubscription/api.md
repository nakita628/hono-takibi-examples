<h1 id="payments-reseller-subscription-api">Payments Reseller Subscription API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://paymentsresellersubscription.googleapis.com/">https://paymentsresellersubscription.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/payments/reseller/subscription/">External documentation</a>

<h1 id="payments-reseller-subscription-api-partners">partners</h1>

## paymentsresellersubscription.partners.subscriptions.get

<a id="opIdpaymentsresellersubscription.partners.subscriptions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cancellationDetails": {
    "reason": "CANCELLATION_REASON_UNSPECIFIED"
  },
  "createTime": "string",
  "cycleEndTime": "string",
  "endUserEntitled": true,
  "freeTrialEndTime": "string",
  "lineItems": [
    {
      "amount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "description": "string",
      "lineItemFreeTrialEndTime": "string",
      "lineItemPromotionSpecs": [
        {
          "freeTrialDuration": {
            "count": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "introductoryPricingDetails": {
            "introductoryPricingSpecs": [
              {
                "discountAmount": {
                  "amountMicros": "string",
                  "currencyCode": "string"
                },
                "discountRatioMicros": "string",
                "recurrenceCount": 0,
                "regionCode": "string"
              }
            ]
          },
          "promotion": "string",
          "type": "PROMOTION_TYPE_UNSPECIFIED"
        }
      ],
      "oneTimeRecurrenceDetails": {
        "servicePeriod": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      },
      "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
      "state": "LINE_ITEM_STATE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "processingState": "PROCESSING_STATE_UNSPECIFIED",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "promotion": "string",
      "type": "PROMOTION_TYPE_UNSPECIFIED"
    }
  ],
  "promotions": [
    "string"
  ],
  "redirectUri": "string",
  "renewalTime": "string",
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.cancel

<a id="opIdpaymentsresellersubscription.partners.subscriptions.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cancelImmediately": true,
    "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED"
  }'
```

`POST /v1/{name}:cancel`

Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

> Body parameter

```json
{
  "cancelImmediately": true,
  "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED"
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest](#schemagooglecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest)|false|none|
|» cancelImmediately|body|boolean|false|Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund.|
|» cancellationReason|body|string|false|Specifies the reason for the cancellation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» cancellationReason|CANCELLATION_REASON_UNSPECIFIED|
|» cancellationReason|CANCELLATION_REASON_FRAUD|
|» cancellationReason|CANCELLATION_REASON_REMORSE|
|» cancellationReason|CANCELLATION_REASON_ACCIDENTAL_PURCHASE|
|» cancellationReason|CANCELLATION_REASON_PAST_DUE|
|» cancellationReason|CANCELLATION_REASON_ACCOUNT_CLOSED|
|» cancellationReason|CANCELLATION_REASON_UPGRADE_DOWNGRADE|
|» cancellationReason|CANCELLATION_REASON_USER_DELINQUENCY|
|» cancellationReason|CANCELLATION_REASON_SYSTEM_ERROR|
|» cancellationReason|CANCELLATION_REASON_OTHER|

> Example responses

> 200 Response

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse](#schemagooglecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.entitle

<a id="opIdpaymentsresellersubscription.partners.subscriptions.entitle"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:entitle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:entitle`

Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

> Body parameter

```json
{}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsentitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest](#schemagooglecloudpaymentsresellersubscriptionv1entitlesubscriptionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsentitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse](#schemagooglecloudpaymentsresellersubscriptionv1entitlesubscriptionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.extend

<a id="opIdpaymentsresellersubscription.partners.subscriptions.extend"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:extend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "extension": {
      "duration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "partnerUserToken": "string"
    },
    "requestId": "string"
  }'
```

`POST /v1/{name}:extend`

[Deprecated] New partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

> Body parameter

```json
{
  "extension": {
    "duration": {
      "count": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "partnerUserToken": "string"
  },
  "requestId": "string"
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}".|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest](#schemagooglecloudpaymentsresellersubscriptionv1extendsubscriptionrequest)|false|none|
|» extension|body|[GoogleCloudPaymentsResellerSubscriptionV1Extension](#schemagooglecloudpaymentsresellersubscriptionv1extension)|false|Required. Specifies details of the extension. Currently, the duration of the extension must be exactly one billing cycle of the original subscription.|
|» requestId|body|string|false|Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. A random UUID is recommended.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cycleEndTime": "string",
  "freeTrialEndTime": "string",
  "renewalTime": "string"
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse](#schemagooglecloudpaymentsresellersubscriptionv1extendsubscriptionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.undoCancel

<a id="opIdpaymentsresellersubscription.partners.subscriptions.undoCancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:undoCancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:undoCancel`

Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

> Body parameter

```json
{}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsundocancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest](#schemagooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsundocancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse](#schemagooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.products.list

<a id="opIdpaymentsresellersubscription.partners.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/products \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/products`

To retrieve the products that can be resold by the partner. It should be autenticated with a service account.

<h3 id="paymentsresellersubscriptionpartnersproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, the partner that can resell. Format: partners/{partner}|
|filter|query|string|false|Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`|
|pageSize|query|integer|false|Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "name": "string",
      "priceConfigs": [
        {
          "amount": {
            "amountMicros": "string",
            "currencyCode": "string"
          },
          "regionCode": "string"
        }
      ],
      "regionCodes": [
        "string"
      ],
      "subscriptionBillingCycleDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

<h3 id="paymentsresellersubscriptionpartnersproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse](#schemagooglecloudpaymentsresellersubscriptionv1listproductsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.promotions.list

<a id="opIdpaymentsresellersubscription.partners.promotions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/promotions \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/promotions`

To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

<h3 id="paymentsresellersubscriptionpartnerspromotionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, the partner that can resell. Format: partners/{partner}|
|filter|query|string|false|Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`|
|pageSize|query|integer|false|Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "promotions": [
    {
      "applicableProducts": [
        "string"
      ],
      "endTime": "string",
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "promotionType": "PROMOTION_TYPE_UNSPECIFIED",
      "regionCodes": [
        "string"
      ],
      "startTime": "string",
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

<h3 id="paymentsresellersubscriptionpartnerspromotionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse](#schemagooglecloudpaymentsresellersubscriptionv1listpromotionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.promotions.findEligible

<a id="opIdpaymentsresellersubscription.partners.promotions.findEligible"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/promotions:findEligible \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "filter": "string",
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1/{parent}/promotions:findEligible`

To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.

> Body parameter

```json
{
  "filter": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="paymentsresellersubscriptionpartnerspromotionsfindeligible-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, the partner that can resell. Format: partners/{partner}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest](#schemagooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsrequest)|false|none|
|» filter|body|string|false|Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|» pageToken|body|string|false|Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "promotions": [
    {
      "applicableProducts": [
        "string"
      ],
      "endTime": "string",
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "promotionType": "PROMOTION_TYPE_UNSPECIFIED",
      "regionCodes": [
        "string"
      ],
      "startTime": "string",
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

<h3 id="paymentsresellersubscriptionpartnerspromotionsfindeligible-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse](#schemagooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.create

<a id="opIdpaymentsresellersubscription.partners.subscriptions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "lineItems": [
      {
        "lineItemPromotionSpecs": [
          {
            "promotion": "string"
          }
        ],
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        }
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "promotion": "string"
      }
    ],
    "promotions": [
      "string"
    ],
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }'
```

`POST /v1/{parent}/subscriptions`

Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

> Body parameter

```json
{
  "lineItems": [
    {
      "lineItemPromotionSpecs": [
        {
          "promotion": "string"
        }
      ],
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      }
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "promotion": "string"
    }
  ],
  "promotions": [
    "string"
  ],
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".|
|subscriptionId|query|string|false|Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|false|none|
|» lineItems|body|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitem)]|false|Required. The line items of the subscription.|
|» name|body|string|false|Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.|
|» partnerUserToken|body|string|false|Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.|
|» products|body|[string]|false|Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.|
|» promotionSpecs|body|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec)]|false|Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.|
|» promotions|body|[string]|false|Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.|
|» serviceLocation|body|[GoogleCloudPaymentsResellerSubscriptionV1Location](#schemagooglecloudpaymentsresellersubscriptionv1location)|false|Required. The location that the service is provided as indicated by the partner.|
|» upgradeDowngradeDetails|body|[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails)|false|Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cancellationDetails": {
    "reason": "CANCELLATION_REASON_UNSPECIFIED"
  },
  "createTime": "string",
  "cycleEndTime": "string",
  "endUserEntitled": true,
  "freeTrialEndTime": "string",
  "lineItems": [
    {
      "amount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "description": "string",
      "lineItemFreeTrialEndTime": "string",
      "lineItemPromotionSpecs": [
        {
          "freeTrialDuration": {
            "count": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "introductoryPricingDetails": {
            "introductoryPricingSpecs": [
              {
                "discountAmount": {
                  "amountMicros": "string",
                  "currencyCode": "string"
                },
                "discountRatioMicros": "string",
                "recurrenceCount": 0,
                "regionCode": "string"
              }
            ]
          },
          "promotion": "string",
          "type": "PROMOTION_TYPE_UNSPECIFIED"
        }
      ],
      "oneTimeRecurrenceDetails": {
        "servicePeriod": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      },
      "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
      "state": "LINE_ITEM_STATE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "processingState": "PROCESSING_STATE_UNSPECIFIED",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "promotion": "string",
      "type": "PROMOTION_TYPE_UNSPECIFIED"
    }
  ],
  "promotions": [
    "string"
  ],
  "redirectUri": "string",
  "renewalTime": "string",
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|

<aside class="success">
This operation does not require authentication
</aside>

## paymentsresellersubscription.partners.subscriptions.provision

<a id="opIdpaymentsresellersubscription.partners.subscriptions.provision"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/subscriptions:provision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "lineItems": [
      {
        "lineItemPromotionSpecs": [
          {
            "promotion": "string"
          }
        ],
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        }
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "promotion": "string"
      }
    ],
    "promotions": [
      "string"
    ],
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }'
```

`POST /v1/{parent}/subscriptions:provision`

Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

> Body parameter

```json
{
  "lineItems": [
    {
      "lineItemPromotionSpecs": [
        {
          "promotion": "string"
        }
      ],
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      }
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "promotion": "string"
    }
  ],
  "promotions": [
    "string"
  ],
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsprovision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".|
|subscriptionId|query|string|false|Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|false|none|
|» lineItems|body|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitem)]|false|Required. The line items of the subscription.|
|» name|body|string|false|Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.|
|» partnerUserToken|body|string|false|Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.|
|» products|body|[string]|false|Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.|
|» promotionSpecs|body|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec)]|false|Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.|
|» promotions|body|[string]|false|Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.|
|» serviceLocation|body|[GoogleCloudPaymentsResellerSubscriptionV1Location](#schemagooglecloudpaymentsresellersubscriptionv1location)|false|Required. The location that the service is provided as indicated by the partner.|
|» upgradeDowngradeDetails|body|[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails)|false|Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "cancellationDetails": {
    "reason": "CANCELLATION_REASON_UNSPECIFIED"
  },
  "createTime": "string",
  "cycleEndTime": "string",
  "endUserEntitled": true,
  "freeTrialEndTime": "string",
  "lineItems": [
    {
      "amount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "description": "string",
      "lineItemFreeTrialEndTime": "string",
      "lineItemPromotionSpecs": [
        {
          "freeTrialDuration": {
            "count": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "introductoryPricingDetails": {
            "introductoryPricingSpecs": [
              {
                "discountAmount": {
                  "amountMicros": "string",
                  "currencyCode": "string"
                },
                "discountRatioMicros": "string",
                "recurrenceCount": 0,
                "regionCode": "string"
              }
            ]
          },
          "promotion": "string",
          "type": "PROMOTION_TYPE_UNSPECIFIED"
        }
      ],
      "oneTimeRecurrenceDetails": {
        "servicePeriod": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      },
      "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
      "state": "LINE_ITEM_STATE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "processingState": "PROCESSING_STATE_UNSPECIFIED",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "promotion": "string",
      "type": "PROMOTION_TYPE_UNSPECIFIED"
    }
  ],
  "promotions": [
    "string"
  ],
  "redirectUri": "string",
  "renewalTime": "string",
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

<h3 id="paymentsresellersubscriptionpartnerssubscriptionsprovision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Amount">GoogleCloudPaymentsResellerSubscriptionV1Amount</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1amount"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Amount"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1amount"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1amount"></a>

```json
{
  "amountMicros": "string",
  "currencyCode": "string"
}
```

Describes the amount unit including the currency code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountMicros|string(int64)|false|none|Required. Amount in micros (1_000_000 micros = 1 currency unit)|
|currencyCode|string|false|none|Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest">GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1cancelsubscriptionrequest"></a>

```json
{
  "cancelImmediately": true,
  "cancellationReason": "CANCELLATION_REASON_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelImmediately|boolean|false|none|Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund.|
|cancellationReason|string|false|none|Specifies the reason for the cancellation.|

#### Enumerated Values

|Property|Value|
|---|---|
|cancellationReason|CANCELLATION_REASON_UNSPECIFIED|
|cancellationReason|CANCELLATION_REASON_FRAUD|
|cancellationReason|CANCELLATION_REASON_REMORSE|
|cancellationReason|CANCELLATION_REASON_ACCIDENTAL_PURCHASE|
|cancellationReason|CANCELLATION_REASON_PAST_DUE|
|cancellationReason|CANCELLATION_REASON_ACCOUNT_CLOSED|
|cancellationReason|CANCELLATION_REASON_UPGRADE_DOWNGRADE|
|cancellationReason|CANCELLATION_REASON_USER_DELINQUENCY|
|cancellationReason|CANCELLATION_REASON_SYSTEM_ERROR|
|cancellationReason|CANCELLATION_REASON_OTHER|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse">GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1cancelsubscriptionresponse"></a>

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|false|none|The cancelled subscription resource.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Duration">GoogleCloudPaymentsResellerSubscriptionV1Duration</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1duration"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Duration"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1duration"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1duration"></a>

```json
{
  "count": 0,
  "unit": "UNIT_UNSPECIFIED"
}
```

Describes the length of a period of a time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|number of duration units to be included.|
|unit|string|false|none|The unit used for the duration|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|UNIT_UNSPECIFIED|
|unit|MONTH|
|unit|DAY|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest">GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1entitlesubscriptionrequest"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1entitlesubscriptionrequest"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1entitlesubscriptionrequest"></a>

```json
{}
```

Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context.

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse">GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1entitlesubscriptionresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1entitlesubscriptionresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1entitlesubscriptionresponse"></a>

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|false|none|The subscription that has user linked to it.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest">GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1extendsubscriptionrequest"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1extendsubscriptionrequest"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1extendsubscriptionrequest"></a>

```json
{
  "extension": {
    "duration": {
      "count": 0,
      "unit": "UNIT_UNSPECIFIED"
    },
    "partnerUserToken": "string"
  },
  "requestId": "string"
}
```

Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension|[GoogleCloudPaymentsResellerSubscriptionV1Extension](#schemagooglecloudpaymentsresellersubscriptionv1extension)|false|none|Required. Specifies details of the extension. Currently, the duration of the extension must be exactly one billing cycle of the original subscription.|
|requestId|string|false|none|Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. A random UUID is recommended.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse">GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1extendsubscriptionresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1extendsubscriptionresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1extendsubscriptionresponse"></a>

```json
{
  "cycleEndTime": "string",
  "freeTrialEndTime": "string",
  "renewalTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycleEndTime|string(google-datetime)|false|none|The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z"|
|freeTrialEndTime|string(google-datetime)|false|none|End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner.|
|renewalTime|string(google-datetime)|false|read-only|Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z"|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Extension">GoogleCloudPaymentsResellerSubscriptionV1Extension</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1extension"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Extension"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1extension"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1extension"></a>

```json
{
  "duration": {
    "count": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "partnerUserToken": "string"
}
```

Describes the details of an extension request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|[GoogleCloudPaymentsResellerSubscriptionV1Duration](#schemagooglecloudpaymentsresellersubscriptionv1duration)|false|none|Specifies the period of access the subscription should grant.|
|partnerUserToken|string|false|none|Required. Identifier of the end-user in partner’s system.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest">GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsrequest"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsrequest"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsrequest"></a>

```json
{
  "filter": "string",
  "pageSize": 0,
  "pageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`|
|pageSize|integer(int32)|false|none|Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|string|false|none|Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse">GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1findeligiblepromotionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "promotions": [
    {
      "applicableProducts": [
        "string"
      ],
      "endTime": "string",
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "promotionType": "PROMOTION_TYPE_UNSPECIFIED",
      "regionCodes": [
        "string"
      ],
      "startTime": "string",
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

Response containing the found promotions for the current user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|promotions|[[GoogleCloudPaymentsResellerSubscriptionV1Promotion](#schemagooglecloudpaymentsresellersubscriptionv1promotion)]|false|none|The promotions for the current user.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload">GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1googleonepayload"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1googleonepayload"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1googleonepayload"></a>

```json
{
  "campaigns": [
    "string"
  ],
  "offering": "OFFERING_UNSPECIFIED",
  "salesChannel": "CHANNEL_UNSPECIFIED",
  "storeId": "string"
}
```

Payload specific to Google One products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[string]|false|none|Campaign attributed to sales of this subscription.|
|offering|string|false|none|The type of offering the subscription was sold by the partner. e.g. VAS.|
|salesChannel|string|false|none|The type of sales channel through which the subscription was sold.|
|storeId|string|false|none|The identifier for the partner store where the subscription was sold.|

#### Enumerated Values

|Property|Value|
|---|---|
|offering|OFFERING_UNSPECIFIED|
|offering|OFFERING_VAS_BUNDLE|
|offering|OFFERING_VAS_STANDALONE|
|offering|OFFERING_HARD_BUNDLE|
|offering|OFFERING_SOFT_BUNDLE|
|salesChannel|CHANNEL_UNSPECIFIED|
|salesChannel|CHANNEL_RETAIL|
|salesChannel|CHANNEL_ONLINE_WEB|
|salesChannel|CHANNEL_ONLINE_ANDROID_APP|
|salesChannel|CHANNEL_ONLINE_IOS_APP|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse">GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1listproductsresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1listproductsresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1listproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "name": "string",
      "priceConfigs": [
        {
          "amount": {
            "amountMicros": "string",
            "currencyCode": "string"
          },
          "regionCode": "string"
        }
      ],
      "regionCodes": [
        "string"
      ],
      "subscriptionBillingCycleDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|products|[[GoogleCloudPaymentsResellerSubscriptionV1Product](#schemagooglecloudpaymentsresellersubscriptionv1product)]|false|none|The products for the specified partner.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse">GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1listpromotionsresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1listpromotionsresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1listpromotionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "promotions": [
    {
      "applicableProducts": [
        "string"
      ],
      "endTime": "string",
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "promotionType": "PROMOTION_TYPE_UNSPECIFIED",
      "regionCodes": [
        "string"
      ],
      "startTime": "string",
      "titles": [
        {
          "languageCode": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|promotions|[[GoogleCloudPaymentsResellerSubscriptionV1Promotion](#schemagooglecloudpaymentsresellersubscriptionv1promotion)]|false|none|The promotions for the specified partner.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Location">GoogleCloudPaymentsResellerSubscriptionV1Location</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1location"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Location"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1location"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1location"></a>

```json
{
  "postalCode": "string",
  "regionCode": "string"
}
```

Describes a location of an end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postalCode|string|false|none|The postal code this location refers to. Ex. "94043"|
|regionCode|string|false|none|2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Product">GoogleCloudPaymentsResellerSubscriptionV1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1product"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Product"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1product"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1product"></a>

```json
{
  "name": "string",
  "priceConfigs": [
    {
      "amount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "regionCode": "string"
    }
  ],
  "regionCodes": [
    "string"
  ],
  "subscriptionBillingCycleDuration": {
    "count": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "titles": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ]
}
```

A Product resource that defines a subscription service that can be resold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}"|
|priceConfigs|[[GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig](#schemagooglecloudpaymentsresellersubscriptionv1productpriceconfig)]|false|read-only|Output only. Price configs for the product in the available regions.|
|regionCodes|[string]|false|read-only|Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1|
|subscriptionBillingCycleDuration|[GoogleCloudPaymentsResellerSubscriptionV1Duration](#schemagooglecloudpaymentsresellersubscriptionv1duration)|false|none|Output only. Specifies the length of the billing cycle of the subscription.|
|titles|[[GoogleTypeLocalizedText](#schemagoogletypelocalizedtext)]|false|read-only|Output only. Localized human readable name of the product.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ProductPayload">GoogleCloudPaymentsResellerSubscriptionV1ProductPayload</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1productpayload"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ProductPayload"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1productpayload"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1productpayload"></a>

```json
{
  "googleOnePayload": {
    "campaigns": [
      "string"
    ],
    "offering": "OFFERING_UNSPECIFIED",
    "salesChannel": "CHANNEL_UNSPECIFIED",
    "storeId": "string"
  },
  "youtubePayload": {
    "partnerEligibilityIds": [
      "string"
    ]
  }
}
```

Specifies product specific payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleOnePayload|[GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload](#schemagooglecloudpaymentsresellersubscriptionv1googleonepayload)|false|none|Payload specific to Google One products.|
|youtubePayload|[GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload](#schemagooglecloudpaymentsresellersubscriptionv1youtubepayload)|false|none|Payload specific to Youtube products.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig">GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1productpriceconfig"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1productpriceconfig"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1productpriceconfig"></a>

```json
{
  "amount": {
    "amountMicros": "string",
    "currencyCode": "string"
  },
  "regionCode": "string"
}
```

Configs the prices in an available region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[GoogleCloudPaymentsResellerSubscriptionV1Amount](#schemagooglecloudpaymentsresellersubscriptionv1amount)|false|none|Output only. The price in the region.|
|regionCode|string|false|read-only|Output only. 2-letter ISO region code where the product is available in. Ex. "US".|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Promotion">GoogleCloudPaymentsResellerSubscriptionV1Promotion</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1promotion"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Promotion"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1promotion"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1promotion"></a>

```json
{
  "applicableProducts": [
    "string"
  ],
  "endTime": "string",
  "freeTrialDuration": {
    "count": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "introductoryPricingDetails": {
    "introductoryPricingSpecs": [
      {
        "discountAmount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "discountRatioMicros": "string",
        "recurrenceCount": 0,
        "regionCode": "string"
      }
    ]
  },
  "name": "string",
  "promotionType": "PROMOTION_TYPE_UNSPECIFIED",
  "regionCodes": [
    "string"
  ],
  "startTime": "string",
  "titles": [
    {
      "languageCode": "string",
      "text": "string"
    }
  ]
}
```

A Promotion resource that defines a promotion for a subscription that can be resold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicableProducts|[string]|false|read-only|Output only. The product ids this promotion can be applied to.|
|endTime|string(google-datetime)|false|none|Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely.|
|freeTrialDuration|[GoogleCloudPaymentsResellerSubscriptionV1Duration](#schemagooglecloudpaymentsresellersubscriptionv1duration)|false|none|Optional. Specifies the duration of the free trial of the subscription when promotion_type is PROMOTION_TYPE_FREE_TRIAL|
|introductoryPricingDetails|[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails](#schemagooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails)|false|none|Optional. Specifies the introductory pricing details when the promotion_type is PROMOTION_TYPE_INTRODUCTORY_PRICING.|
|name|string|false|read-only|Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}"|
|promotionType|string|false|read-only|Output only. Output Only. Specifies the type of the promotion.|
|regionCodes|[string]|false|read-only|Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1|
|startTime|string(google-datetime)|false|none|Optional. Specifies the start time (inclusive) of the period that the promotion is available in.|
|titles|[[GoogleTypeLocalizedText](#schemagoogletypelocalizedtext)]|false|read-only|Output only. Localized human readable name of the promotion.|

#### Enumerated Values

|Property|Value|
|---|---|
|promotionType|PROMOTION_TYPE_UNSPECIFIED|
|promotionType|PROMOTION_TYPE_FREE_TRIAL|
|promotionType|PROMOTION_TYPE_INTRODUCTORY_PRICING|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails">GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails"></a>

```json
{
  "introductoryPricingSpecs": [
    {
      "discountAmount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "discountRatioMicros": "string",
      "recurrenceCount": 0,
      "regionCode": "string"
    }
  ]
}
```

The details of a introductory pricing promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|introductoryPricingSpecs|[[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec](#schemagooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec)]|false|none|Specifies the introductory pricing periods.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec">GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetailsintroductorypricingspec"></a>

```json
{
  "discountAmount": {
    "amountMicros": "string",
    "currencyCode": "string"
  },
  "discountRatioMicros": "string",
  "recurrenceCount": 0,
  "regionCode": "string"
}
```

The duration of an introductory pricing promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountAmount|[GoogleCloudPaymentsResellerSubscriptionV1Amount](#schemagooglecloudpaymentsresellersubscriptionv1amount)|false|none|Output only. The discount amount. The value is positive.|
|discountRatioMicros|string(int64)|false|read-only|Output only. The discount percentage in micros. For example, 50,000 represents 5%.|
|recurrenceCount|integer(int32)|false|read-only|Output only. Output Only. The duration of an introductory offer in billing cycles.|
|regionCode|string|false|read-only|Output only. 2-letter ISO region code where the product is available in. Ex. "US".|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod">GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1serviceperiod"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1serviceperiod"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1serviceperiod"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

A description of what time period or moment in time the product or service is being delivered over.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. The end time of the service period. Time is exclusive.|
|startTime|string(google-datetime)|false|none|Required. The start time of the service period. Time is inclusive.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1Subscription">GoogleCloudPaymentsResellerSubscriptionV1Subscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscription"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1Subscription"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscription"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscription"></a>

```json
{
  "cancellationDetails": {
    "reason": "CANCELLATION_REASON_UNSPECIFIED"
  },
  "createTime": "string",
  "cycleEndTime": "string",
  "endUserEntitled": true,
  "freeTrialEndTime": "string",
  "lineItems": [
    {
      "amount": {
        "amountMicros": "string",
        "currencyCode": "string"
      },
      "description": "string",
      "lineItemFreeTrialEndTime": "string",
      "lineItemPromotionSpecs": [
        {
          "freeTrialDuration": {
            "count": 0,
            "unit": "UNIT_UNSPECIFIED"
          },
          "introductoryPricingDetails": {
            "introductoryPricingSpecs": [
              {
                "discountAmount": {
                  "amountMicros": "string",
                  "currencyCode": "string"
                },
                "discountRatioMicros": "string",
                "recurrenceCount": 0,
                "regionCode": "string"
              }
            ]
          },
          "promotion": "string",
          "type": "PROMOTION_TYPE_UNSPECIFIED"
        }
      ],
      "oneTimeRecurrenceDetails": {
        "servicePeriod": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "product": "string",
      "productPayload": {
        "googleOnePayload": {
          "campaigns": [
            "string"
          ],
          "offering": "OFFERING_UNSPECIFIED",
          "salesChannel": "CHANNEL_UNSPECIFIED",
          "storeId": "string"
        },
        "youtubePayload": {
          "partnerEligibilityIds": [
            "string"
          ]
        }
      },
      "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
      "state": "LINE_ITEM_STATE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "partnerUserToken": "string",
  "processingState": "PROCESSING_STATE_UNSPECIFIED",
  "products": [
    "string"
  ],
  "promotionSpecs": [
    {
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "promotion": "string",
      "type": "PROMOTION_TYPE_UNSPECIFIED"
    }
  ],
  "promotions": [
    "string"
  ],
  "redirectUri": "string",
  "renewalTime": "string",
  "serviceLocation": {
    "postalCode": "string",
    "regionCode": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "upgradeDowngradeDetails": {
    "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
    "previousSubscriptionId": "string"
  }
}
```

A Subscription resource managed by 3P Partners.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationDetails|[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails](#schemagooglecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails)|false|none|Output only. Describes the details of a cancelled subscription. Only applicable to subscription of state `STATE_CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. System generated timestamp when the subscription is created. UTC timezone.|
|cycleEndTime|string(google-datetime)|false|read-only|Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z"|
|endUserEntitled|boolean|false|read-only|Output only. Indicates if the subscription is entitled to the end user.|
|freeTrialEndTime|string(google-datetime)|false|read-only|Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.|
|lineItems|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitem)]|false|none|Required. The line items of the subscription.|
|name|string|false|none|Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.|
|partnerUserToken|string|false|none|Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.|
|processingState|string|false|read-only|Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).|
|products|[string]|false|none|Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.|
|promotionSpecs|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec)]|false|none|Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.|
|promotions|[string]|false|none|Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.|
|redirectUri|string|false|read-only|Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty.|
|renewalTime|string(google-datetime)|false|read-only|Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z"|
|serviceLocation|[GoogleCloudPaymentsResellerSubscriptionV1Location](#schemagooglecloudpaymentsresellersubscriptionv1location)|false|none|Required. The location that the service is provided as indicated by the partner.|
|state|string|false|read-only|Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).|
|updateTime|string(google-datetime)|false|read-only|Output only. System generated timestamp when the subscription is most recently updated. UTC timezone.|
|upgradeDowngradeDetails|[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails)|false|none|Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingState|PROCESSING_STATE_UNSPECIFIED|
|processingState|PROCESSING_STATE_CANCELLING|
|processingState|PROCESSING_STATE_RECURRING|
|state|STATE_UNSPECIFIED|
|state|STATE_CREATED|
|state|STATE_ACTIVE|
|state|STATE_CANCELLED|
|state|STATE_IN_GRACE_PERIOD|
|state|STATE_CANCEL_AT_END_OF_CYCLE|
|state|STATE_SUSPENDED|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails">GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails"></a>

```json
{
  "reason": "CANCELLATION_REASON_UNSPECIFIED"
}
```

Describes the details of a cancelled or cancelling subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason of the cancellation.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|CANCELLATION_REASON_UNSPECIFIED|
|reason|CANCELLATION_REASON_FRAUD|
|reason|CANCELLATION_REASON_REMORSE|
|reason|CANCELLATION_REASON_ACCIDENTAL_PURCHASE|
|reason|CANCELLATION_REASON_PAST_DUE|
|reason|CANCELLATION_REASON_ACCOUNT_CLOSED|
|reason|CANCELLATION_REASON_UPGRADE_DOWNGRADE|
|reason|CANCELLATION_REASON_USER_DELINQUENCY|
|reason|CANCELLATION_REASON_SYSTEM_ERROR|
|reason|CANCELLATION_REASON_OTHER|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem">GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitem"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscriptionlineitem"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscriptionlineitem"></a>

```json
{
  "amount": {
    "amountMicros": "string",
    "currencyCode": "string"
  },
  "description": "string",
  "lineItemFreeTrialEndTime": "string",
  "lineItemPromotionSpecs": [
    {
      "freeTrialDuration": {
        "count": 0,
        "unit": "UNIT_UNSPECIFIED"
      },
      "introductoryPricingDetails": {
        "introductoryPricingSpecs": [
          {
            "discountAmount": {
              "amountMicros": "string",
              "currencyCode": "string"
            },
            "discountRatioMicros": "string",
            "recurrenceCount": 0,
            "regionCode": "string"
          }
        ]
      },
      "promotion": "string",
      "type": "PROMOTION_TYPE_UNSPECIFIED"
    }
  ],
  "oneTimeRecurrenceDetails": {
    "servicePeriod": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "product": "string",
  "productPayload": {
    "googleOnePayload": {
      "campaigns": [
        "string"
      ],
      "offering": "OFFERING_UNSPECIFIED",
      "salesChannel": "CHANNEL_UNSPECIFIED",
      "storeId": "string"
    },
    "youtubePayload": {
      "partnerEligibilityIds": [
        "string"
      ]
    }
  },
  "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
  "state": "LINE_ITEM_STATE_UNSPECIFIED"
}
```

Individual line item definition of a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[GoogleCloudPaymentsResellerSubscriptionV1Amount](#schemagooglecloudpaymentsresellersubscriptionv1amount)|false|none|Output only. The price of the product/service in this line item. The amount could be the wholesale price, or it can include a cost of sale based on the contract.|
|description|string|false|read-only|Output only. Description of this line item.|
|lineItemFreeTrialEndTime|string(google-datetime)|false|read-only|Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.|
|lineItemPromotionSpecs|[[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec)]|false|none|Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only.|
|oneTimeRecurrenceDetails|[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails](#schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails)|false|none|Output only. Details only set for a ONE_TIME recurrence line item.|
|product|string|false|none|Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'.|
|productPayload|[GoogleCloudPaymentsResellerSubscriptionV1ProductPayload](#schemagooglecloudpaymentsresellersubscriptionv1productpayload)|false|none|Optional. Product specific payload for this line item.|
|recurrenceType|string|false|read-only|Output only. The recurrence type of the line item.|
|state|string|false|read-only|Output only. The state of the line item.|

#### Enumerated Values

|Property|Value|
|---|---|
|recurrenceType|LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED|
|recurrenceType|LINE_ITEM_RECURRENCE_TYPE_PERIODIC|
|recurrenceType|LINE_ITEM_RECURRENCE_TYPE_ONE_TIME|
|state|LINE_ITEM_STATE_UNSPECIFIED|
|state|LINE_ITEM_STATE_ACTIVE|
|state|LINE_ITEM_STATE_INACTIVE|
|state|LINE_ITEM_STATE_NEW|
|state|LINE_ITEM_STATE_ACTIVATING|
|state|LINE_ITEM_STATE_DEACTIVATING|
|state|LINE_ITEM_STATE_WAITING_TO_DEACTIVATE|
|state|LINE_ITEM_STATE_OFF_CYCLE_CHARGING|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails">GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails"></a>

```json
{
  "servicePeriod": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Details for a ONE_TIME recurrence line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servicePeriod|[GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod](#schemagooglecloudpaymentsresellersubscriptionv1serviceperiod)|false|none|The service period of the ONE_TIME line item.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec">GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscriptionpromotionspec"></a>

```json
{
  "freeTrialDuration": {
    "count": 0,
    "unit": "UNIT_UNSPECIFIED"
  },
  "introductoryPricingDetails": {
    "introductoryPricingSpecs": [
      {
        "discountAmount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "discountRatioMicros": "string",
        "recurrenceCount": 0,
        "regionCode": "string"
      }
    ]
  },
  "promotion": "string",
  "type": "PROMOTION_TYPE_UNSPECIFIED"
}
```

Describes the spec for one promotion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeTrialDuration|[GoogleCloudPaymentsResellerSubscriptionV1Duration](#schemagooglecloudpaymentsresellersubscriptionv1duration)|false|none|Output only. The duration of the free trial if the promotion is of type FREE_TRIAL.|
|introductoryPricingDetails|[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails](#schemagooglecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails)|false|none|Output only. The details of the introductory pricing spec if the promotion is of type INTRODUCTORY_PRICING.|
|promotion|string|false|none|Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'.|
|type|string|false|read-only|Output only. The type of the promotion for the spec.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PROMOTION_TYPE_UNSPECIFIED|
|type|PROMOTION_TYPE_FREE_TRIAL|
|type|PROMOTION_TYPE_INTRODUCTORY_PRICING|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails">GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails"></a>

```json
{
  "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
  "previousSubscriptionId": "string"
}
```

Details about the previous subscription that this new subscription upgrades/downgrades from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingCycleSpec|string|false|none|Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription.|
|previousSubscriptionId|string|false|none|Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingCycleSpec|BILLING_CYCLE_SPEC_UNSPECIFIED|
|billingCycleSpec|BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION|
|billingCycleSpec|BILLING_CYCLE_SPEC_START_IMMEDIATELY|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest">GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionrequest"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionrequest"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionrequest"></a>

```json
{}
```

Request to revoke a cancellation request.

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse">GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionresponse"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionresponse"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1undocancelsubscriptionresponse"></a>

```json
{
  "subscription": {
    "cancellationDetails": {
      "reason": "CANCELLATION_REASON_UNSPECIFIED"
    },
    "createTime": "string",
    "cycleEndTime": "string",
    "endUserEntitled": true,
    "freeTrialEndTime": "string",
    "lineItems": [
      {
        "amount": {
          "amountMicros": "string",
          "currencyCode": "string"
        },
        "description": "string",
        "lineItemFreeTrialEndTime": "string",
        "lineItemPromotionSpecs": [
          {
            "freeTrialDuration": {
              "count": 0,
              "unit": "UNIT_UNSPECIFIED"
            },
            "introductoryPricingDetails": {
              "introductoryPricingSpecs": [
                {
                  "discountAmount": {
                    "amountMicros": "string",
                    "currencyCode": "string"
                  },
                  "discountRatioMicros": "string",
                  "recurrenceCount": 0,
                  "regionCode": "string"
                }
              ]
            },
            "promotion": "string",
            "type": "PROMOTION_TYPE_UNSPECIFIED"
          }
        ],
        "oneTimeRecurrenceDetails": {
          "servicePeriod": {
            "endTime": "string",
            "startTime": "string"
          }
        },
        "product": "string",
        "productPayload": {
          "googleOnePayload": {
            "campaigns": [
              "string"
            ],
            "offering": "OFFERING_UNSPECIFIED",
            "salesChannel": "CHANNEL_UNSPECIFIED",
            "storeId": "string"
          },
          "youtubePayload": {
            "partnerEligibilityIds": [
              "string"
            ]
          }
        },
        "recurrenceType": "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
        "state": "LINE_ITEM_STATE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "partnerUserToken": "string",
    "processingState": "PROCESSING_STATE_UNSPECIFIED",
    "products": [
      "string"
    ],
    "promotionSpecs": [
      {
        "freeTrialDuration": {
          "count": 0,
          "unit": "UNIT_UNSPECIFIED"
        },
        "introductoryPricingDetails": {
          "introductoryPricingSpecs": [
            {
              "discountAmount": {
                "amountMicros": "string",
                "currencyCode": "string"
              },
              "discountRatioMicros": "string",
              "recurrenceCount": 0,
              "regionCode": "string"
            }
          ]
        },
        "promotion": "string",
        "type": "PROMOTION_TYPE_UNSPECIFIED"
      }
    ],
    "promotions": [
      "string"
    ],
    "redirectUri": "string",
    "renewalTime": "string",
    "serviceLocation": {
      "postalCode": "string",
      "regionCode": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "upgradeDowngradeDetails": {
      "billingCycleSpec": "BILLING_CYCLE_SPEC_UNSPECIFIED",
      "previousSubscriptionId": "string"
    }
  }
}
```

Response that contains the updated subscription resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[GoogleCloudPaymentsResellerSubscriptionV1Subscription](#schemagooglecloudpaymentsresellersubscriptionv1subscription)|false|none|The updated subscription resource.|

<h2 id="tocS_GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload">GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpaymentsresellersubscriptionv1youtubepayload"></a>
<a id="schema_GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload"></a>
<a id="tocSgooglecloudpaymentsresellersubscriptionv1youtubepayload"></a>
<a id="tocsgooglecloudpaymentsresellersubscriptionv1youtubepayload"></a>

```json
{
  "partnerEligibilityIds": [
    "string"
  ]
}
```

Payload specific to Youtube products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partnerEligibilityIds|[string]|false|none|The list of eligibility_ids which are applicable for the line item.|

<h2 id="tocS_GoogleTypeLocalizedText">GoogleTypeLocalizedText</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypelocalizedtext"></a>
<a id="schema_GoogleTypeLocalizedText"></a>
<a id="tocSgoogletypelocalizedtext"></a>
<a id="tocsgoogletypelocalizedtext"></a>

```json
{
  "languageCode": "string",
  "text": "string"
}
```

Localized variant of a text in a particular language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|text|string|false|none|Localized string in the language corresponding to `language_code' below.|
